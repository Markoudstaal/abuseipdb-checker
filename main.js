let cron = require("node-cron");
let config = require("./conf/config.js");
let lib = require("./bin/lib");

let cronTiming = ""
if (config.cronTiming != "") {
	cronTiming = config.cronTiming;
} else {
	cronTiming = "0 20 * * *";
}
var dailyCron = cron.schedule(cronTiming, () => {
	lib.checkAbuseForIp();
});

console.log("Service wil run every day at 20:00.");
console.log("Running checker once at start.");
lib.checkAbuseForIp();