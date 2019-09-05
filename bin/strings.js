const strings = {
    email: {
        cleanSubject: "Your daily abuseipdb check for $ip came up clean!",
        cleanBody: "<p>No reports were found! Click here to see more: $link",
        dirtySubject: "Your daily abuseipdb check for $ip came up dirty!",
        dirtyBody: "A total of $reports reports were found! Click here to see more: $link"
    },
    pushover: {
        cleanMessage: "Your daily abuseipdb check for $ip came up clean!",
        dirtyMessage: "$reports reports were found for $ip!"
    }
}

module.exports = strings;