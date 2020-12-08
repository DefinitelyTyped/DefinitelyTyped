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

        return Promise.all(attachments);
    }).then(function (attachments: {filename: string, data: any}[]) {
        console.log(attachments);
        // =>
        //    [ { filename: "cats.jpg", data: Buffer() },
        //      { filename: "pay-stub.pdf", data: Buffer() } ]
    });
});

imaps.connect({
    imap: config.imap,
    onmail: function (numNewMail) {
      //...
    },
    onexpunge: function (seqno) {
        //...
    },
    onupdate: function (seqno, info) {
        //...
    }
}).then(function (connection) {
    connection.on("error", err => {
        console.error("imap socket error", err);
    })
});

imaps.connect(config).then(connection => {
    return connection.openBox('INBOX')
        .then(() => connection.search(['ALL'], {bodies: ['HEADER']}))
        .then(messages => {
            // select messages from bob
            const uidsToDelete = messages
                .filter(message => {
                    return message.parts
                    .filter(part => part.which === 'HEADER')[0].body.to[0] === 'bob@example.com';
                })
                .map(message => message.attributes.uid);
            return connection.deleteMessage(uidsToDelete);
        });
});


imaps.connect(config).then(function (connection) {
    connection.openBox('INBOX').then(function () {
        const searchCriteria = ['ALL'];
        const fetchOptions = { bodies: ['TEXT'], struct: true };
        return connection.search(searchCriteria, fetchOptions);
    //Loop over each message
    }).then(function (messages) {
        let taskList = messages.map(function (message) {
            return new Promise((res, rej) => {
                const parts = imaps.getParts(message.attributes.struct);
                parts.map(function (part) {
                    return connection.getPartData(message, part)
                    .then(function (partData) {
                        //Display e-mail body
                        if (part.disposition === null && part.encoding !== "base64") {
                            console.log(partData);
                        }
                        //Mark message for deletion
                        connection.addFlags(message.attributes.uid, "\Deleted", (err) => {
                            if (err) {
                                console.log('Problem marking message for deletion');
                                rej(err);
                            }
                            res(message.attributes.uid); //Final resolve
                        })
                    });
                });
            });
        })
        return Promise.all(taskList).then(() => {
            connection.closeBox(true, (err) => { //Pass in false to avoid delete-flagged messages being removed
                if (err) {
                    console.log(err);
                }
            });
            connection.end();
        });
    });
});
