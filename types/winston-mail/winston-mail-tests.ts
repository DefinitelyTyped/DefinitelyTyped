import winstonMail = require("winston-mail");
import winston = require("winston");
import { Transform } from "stream";

let mail: winstonMail.Mail = new winstonMail.Mail({ to: "test" });

winston.add(mail);

// @ts-expect-error
mail = new winstonMail.Mail({});

let mailOptions: winstonMail.MailTransportOptions = {
    name: "test",
    to: "test",
    from: "test",
    level: "test",
    silent: true,
    handleExceptions: true,
    host: "test",
    port: 10202,
    username: "test",
    password: "test",
    subject: "test",
    ssl: false,
    tls: false,
    unique: false,
    filter: (obj: { level: string; message: string; meta: any }): boolean => {
        return false;
    },
    html: true,
    timeout: 5000,
    authentication: ["test"],
    formatter: (obj: { level: string; message: string; meta: any }): string => {
        return "test";
    }
};

mailOptions = {
    to: "test",
    ssl: { key: "test", ca: "test", cert: "test" },
    tls: { ciphers: "test" }
};

mail = new winstonMail.Mail(mailOptions);

mailOptions = {
    // @ts-expect-error
    test: "test"
};

let transport: winston.TransportInstance = new winstonMail.Mail({ to: "test" });
transport = winston.transports.Console;

mail.log("test", "test", "test", "test");
