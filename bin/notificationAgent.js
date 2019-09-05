let config = require("../conf/config.js");
let emailAgent = require("./emailAgent");
let pushoverAgent = require("./pushoverAgent");

module.exports.sendNotification = function (clean, body) {
	if (clean) {
		if (config.mailAgent.cleanReports == true) {
			if (config.mailAgent.enabled == true) {
				emailAgent.sendCleanMail(body);
			}
		}
		if (config.pushover.enabled == true) {
			if (config.pushover.cleanReports == true) {
				pushoverAgent.sendCleanNotification(body);
			}
		}
	} else {
		if (config.mailAgent.enabled == true) {
			emailAgent.sendDirtyMail(body);
		}
		if (config.pushover.enabled == true) {
			pushoverAgent.sendDirtyNotification(body);
		}
	}
};