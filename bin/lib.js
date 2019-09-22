let config = require("../conf/config");
let request = require("request");
let notificationAgent = require("./notificationAgent");

module.exports.checkAbuseForIp = function () {
	//Gathering all parameters
	let url = "https://api.abuseipdb.com/api/v2/check";
	let parameters = {
		ipAddress: config.ipAddress,
		maxAgeInDays: config.maxAgeInDays
	};
	let headers = {
		Accept: "application/json",
		Key: config.apiKey
	};

	//Making the API request
	request({
		url: url,
		headers: headers,
		qs: parameters
	}, function (
		err,
		response,
		body
	) {
		if (err) {
			console.log(err);
		} else {
			//Parse JSON data to JS object
			let result = JSON.parse(body);
			//Check if any reports are returned and pass this to notification agent
			if (result.data.totalReports !== 0) {
				console.log("Found", result.data.totalReports, "reports!");
				notificationAgent.sendNotification(false, result.data);
			} else {
				console.log("No reports were found!");
				notificationAgent.sendNotification(true, result.data);
			}
		}
	});
};