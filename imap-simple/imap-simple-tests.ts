import * as imaps from "imap-simple";

let config = {
    imap: {
        user: "your@email.address",
        password: "yourpassword",
        host: "imap.gmail.com",
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

imaps.connect(config).then(function (connection) {

    return connection.openBox("INBOX").then(function () {
        let searchCriteria = [
            "UNSEEN"
        ];

        let fetchOptions = {
            bodies: ["HEADER", "TEXT"],
            markSeen: false
        };

        return connection.search(searchCriteria, fetchOptions).then(function (results) {
            let subjects = results.map(function (res) {
                return res.parts.filter(function (part) {
                    return part.which === "HEADER";
                })[0].body.subject[0];
            });

            console.log(subjects);
            // =>
            //   [ "Hey Chad, long time no see!",
            //     "Your amazon.com monthly statement",
            //     "Hacker Newsletter Issue #445" ]
        });
    });
});

imaps.connect(config).then(function (connection) {

    connection.openBox("INBOX").then(function () {

        // Fetch emails from the last 24h
        let delay = 24 * 3600 * 1000;
        let yesterday = new Date();
        yesterday.setTime(Date.now() - delay);
        let yesterdayString = yesterday.toISOString();
        let searchCriteria = ["UNSEEN", ["SINCE", yesterdayString]];
        let fetchOptions = { bodies: ["HEADER.FIELDS (FROM TO SUBJECT DATE)"], struct: true };

        // retrieve only the headers of the messages
        return connection.search(searchCriteria, fetchOptions);
    }).then(function (messages) {

        let attachments: Promise<{filename: string, data: any}>[] = [];

        messages.forEach(function (message) {
            let parts = imaps.getParts(message.attributes.struct);
            attachments = attachments.concat(parts.filter(function (part) {
                return part.disposition && part.disposition.type === "ATTACHMENT";
            }).map(function (part) {
                // retrieve the attachments only of the messages with attachments
                return connection.getPartData(message, part)
                    .then(function (partData) {
                        return {
                            filename: part.disposition.params.filename,
                            data: partData
                        };
                    });
            }));
        });

        return Promise.all<{filename: string, data: any}>(attachments);
    }).then(function (attachments: {filename: string, data: any}[]) {
        console.log(attachments);
        // =>
        //    [ { filename: "cats.jpg", data: Buffer() },
        //      { filename: "pay-stub.pdf", data: Buffer() } ]
    });
});
