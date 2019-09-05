let config = require("../conf/config");
let strings = require("./strings");
let request = require("request");

module.exports.sendCleanNotification = function (body) {
    //Gathering all parameters
    let url = "https://api.pushover.net/1/messages.json";
    let parameters = {
        token: config.pushover.apiKey,
        user: config.pushover.deviceKey,
        message: strings.pushover.cleanMessage.replace("$ip", config.ipAddress),
        url: "https://abuseipdb.com/check/" + config.ipAddress
    };

    //Making the API request
    request({
        method: "POST",
        url: url,
        qs: parameters
    }, function (
        err,
        response,
        body
    ) {
        let result = JSON.parse(body);
        if (err) {
            console.log(err);
        } else {
            console.log("Pushover notification send!")
        }
    });
}

module.exports.sendDirtyNotification = function (body) {
    //Gathering all parameters
    let url = "https://api.pushover.net/1/messages.json";
    let parameters = {
        token: config.pushover.apiKey,
        user: config.pushover.deviceKey,
        message: strings.pushover.dirtyMessage.replace("$ip", config.ipAddress).replace("$reports", body.totalReports),
        url: "https://abuseipdb.com/check/" + config.ipAddress
    };

    //Making the API request
    request({
        method: "POST",
        url: url,
        qs: parameters
    }, function (
        err,
        response,
        body
    ) {
        let result = JSON.parse(body);
        if (err) {
            console.log(err);
        } else {
            console.log("Pushover notification send!")
        }
    });
}