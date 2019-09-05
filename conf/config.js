const config = {
	//Set the timing you want the service to check for reports. Default is every dat 20:00 if not set by user.
	//Format is "* * * * *"
	cronTiming: "",
	//Ip you want to be checked
	ipAddress: "",
	//Maximum days back to check
	maxAgeInDays: 90,
	//Your abuseipdb key
	apiKey: "",
	mailAgent: {
		//Set to true to use mailserver
		enabled: false,
		//Set to true when you want to be sent an email, eventhough no reports are found
		cleanReports: false,
		//Email adress to send the mail to
		toAdress: "",
		//Address mail should be sent from
		fromAddress: "",
		//The smtp server host
		host: "",
		//The smtp port
		port: 465,
		//Secure or not. True for port 465, false for all other ports
		secure: true,
		//Smtp server login information
		user: "",
		password: ""
	},
	pushover: {
		//Set to true to enable pushover notifications
		enabled: false,
		//Set to true to recieve notifications even if abuseipdb comes back clean
		cleanReports: false,
		//ApiKey supplied by pushover
		apiKey: "",
		//DeviceKey supplied by pushover
		deviceKey: ""
	}
};

module.exports = config;