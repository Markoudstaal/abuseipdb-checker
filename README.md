# abuseipdb-checker
Service that daily checks the abuseipdb if your ip is present and sends you an email when it is.

## Prerequisites

You're going to need either an SMTP server or Pushover account to send messages. Also an abuseipdb account is needed to access their API.

Pushover account can be created [here](https://pushover.net/) and Abuseipdb account can be created [here](https://www.abuseipdb.com/)

## Installation

To install clone the repository as follows:

```
git clone https://github.com/Markoudstaal/abuseipdb-checker.git
```

Then run `npm install` in the newly created folder.

Next make sure to change the config at `/conf/config.js`

Lastly start the server with `npm start`

## Configuration

`cronTiming`: Set the timing you want the service to check for reports. Default is every dat 20:00 if not set by user. To find out more about the syntax see: [cron syntax](http://www.nncron.ru/help/EN/working/cron-format.htm)

`ipAddress`: Enter the address you want to be checked. Support for multiple ip's will be added soon.

`maxAgeInDays`: The amount of days you want the service to look back into the database.

`apiKey`: Enter your abuseipdb apiKey here.

### mailAgent

`enabled`: Set to true to enable the mailAgent

`cleanReports`: Set to true to enable sending emails when there are no reports for your ip.

`toAddress`: The email address you want the email to be sent to.

`fromAddress`: The email address you want the email te be sent from.

`host`: The smtp hostname/ip-address.

`port`: The smtp port used.

`secure`: Secure or not. True for port 465, false for all other ports.

`user`: Smtp username.

`password`: Smtp password.

### pushover

`enabled`: Set to true to enable the pushoverAgent.

`cleanReports`: Set to true to enable notifications when there are no reports for you ip.

`apiKey`: The Api Key supplied by pushover.

`deviceKey`: The Device key or User key supplied by pushover.

## TODO

- Add support for multiple IP addresses
- Add support for more notification services
- Add web interface for more insights

