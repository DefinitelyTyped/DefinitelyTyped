import { HtmlToTextOptions } from "html-to-text";
import * as nodemailer from "nodemailer";
import { htmlToText } from "nodemailer-html-to-text";

function plugin_without_options_test() {
    const transporter = nodemailer.createTransport();

    transporter.use("compile", htmlToText());
}

function plugin_with_options_test() {
    const transporter = nodemailer.createTransport();

    const options: HtmlToTextOptions = {
        wordwrap: null,
        selectors: [
            {
                selector: "a",
                options: { hideLinkHrefIfSameAsText: true },
            },
            {
                selector: "img",
                format: "skip",
            },
            {
                selector: "table",
                format: "dataTable",
            },
        ],
    };

    transporter.use("compile", htmlToText(options));
}
