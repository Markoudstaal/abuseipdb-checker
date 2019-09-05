let nodemailer = require("nodemailer");
let config = require("../conf/config");
let strings = require("./strings");

module.exports.sendCleanMail = function (body) {
	//Initialize the smtp transporter
	let smtpTransport = nodemailer.createTransport({
		host: config.mailAgent.host,
		port: config.mailAgent.port,
		secure: config.mailAgent.secure,
		auth: {
			user: config.mailAgent.user,
			pass: config.mailAgent.password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	smtpTransport.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("Mailtransporter is ready.");
		}
	});

	let mailParameters = {
		to: config.mailAgent.toAdress,
		subject: strings.email.cleanSubject.replace("$ip", config.ipAddress),
		from: config.mailAgent.fromAddress,
		html: strings.email.cleanBody.replace("$ip", config.ipAddress).replace("$link", "https://abuseipdb.com/check/" + config.ipAddress)
	};

	//Send the mail according set parameters
	smtpTransport.sendMail(mailParameters, function (err, response) {
		if (err) {
			console.log(err);
		} else {
			console.log("Message sent");
		}
	});
};

module.exports.sendDirtyMail = function (body) {
	//Initialize the smtp transporter
	let smtpTransport = nodemailer.createTransport({
		host: config.mailAgent.host,
		port: config.mailAgent.port,
		secure: config.mailAgent.secure,
		auth: {
			user: config.mailAgent.user,
			pass: config.mailAgent.password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	smtpTransport.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("Mailtransporter is ready.");
		}
	});

	let mailParameters = {
		to: config.mailAgent.toAdress,
		subject: strings.email.dirtySubject.replace("$ip", config.ipAddress),
		from: config.mailAgent.fromAddress,
		html: strings.email.dirtyBody.replace("$reports", body.totalReports).replace("$link", "https://abuseipdb.com/check/" + config.ipAddress)
	};

	//Send the mail according set parameters
	smtpTransport.sendMail(mailParameters, function (err, response) {
		if (err) {
			console.log(err);
		} else {
			console.log("Message sent");
		}
	});
};