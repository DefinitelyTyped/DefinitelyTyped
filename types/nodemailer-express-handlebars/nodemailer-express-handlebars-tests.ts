import * as expressHandlebars from "express-handlebars";
import { createTransport } from "nodemailer";
import hbs = require("nodemailer-express-handlebars");

const transport: hbs.HbsTransporter = createTransport();

const exphbs = expressHandlebars.create();

hbs({
    viewEngine: {
        defaultLayout: "main",
    },
    viewPath: "views",
    extName: "hbs",
});

const plugin = hbs({
    viewEngine: exphbs,
    viewPath: "templates",
});

transport.use("compile", plugin);

transport.sendMail({
    template: "template2",
    context: {
        name: "Gabriel",
    },
});
