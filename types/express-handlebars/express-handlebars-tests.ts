import express = require("express");
import exphbs = require("express-handlebars");
import { ExpressHandlebars } from "express-handlebars";

ExpressHandlebars; // $ExpectType typeof ExpressHandlebars
new ExpressHandlebars(); // $ExpectType ExpressHandlebars

const app = express();

const hbs = exphbs.create({ defaultLayout: "main" });

exphbs.create({
    partialsDir: ["shared/templates/", "views/partials/"],
    helpers: {
        transform: (msg: string) => msg.toLocaleLowerCase(),
    },
});

hbs.getTemplate("shared/templates/", { encoding: "latin1" });

hbs.getTemplates("shared/templates/", {
    cache: app.enabled("view cache"),
    precompiled: true,
});

app.engine("handlebars", hbs.engine);
app.engine("handlebars", exphbs());

app.set("view engine", "handlebars");

hbs.renderView("test", (err: any) => {});
hbs.renderView("test", (err: any, content?: string) => {});
hbs.renderView(
    "test",
    {
        layout: "main",
    },
    (err: any) => {},
);
hbs.renderView(
    "test",
    {
        layout: "main",
    },
    (err: any, content?: string) => {},
);
