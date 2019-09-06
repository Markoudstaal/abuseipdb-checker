let cron = require("node-cron");
let config = require("./conf/config.js");
let lib = require("./bin/lib");
let cronstrue = require("cronstrue");

//Get the cron timing from config. If empty set every day at 20:00
let cronTiming = ""
if (config.cronTiming != "") {
	cronTiming = config.cronTiming;
} else {
	cronTiming = "0 20 * * *";
}

//Setup the cron job
var dailyCron = cron.schedule(cronTiming, () => {
	lib.checkAbuseForIp();
});

console.log("Service will run", cronstrue.toString(cronTiming));
console.log("Running checker once at start.");
lib.checkAbuseForIp();