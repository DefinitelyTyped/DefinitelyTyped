import * as formatters from 'html-to-text/lib/formatter';
import * as nodemailer from 'nodemailer';
import { htmlToText } from 'nodemailer-html-to-text';
import { HtmlToTextOptions } from 'html-to-text';

function plugin_without_options_test() {
    const transporter = nodemailer.createTransport();

    transporter.use('compile', htmlToText());
}

function plugin_with_options_test() {
    const transporter = nodemailer.createTransport();

    const options: HtmlToTextOptions = {
        wordwrap: null,
        tables: true,
        hideLinkHrefIfSameAsText: true,
        ignoreImage: true,
        format: {
            text: (el, options) => {
                return formatters.text(el, options);
            },
            table: (el, walk, options) => {
                return formatters.table(el, walk, options);
            },
        },
    };

    transporter.use('compile', htmlToText(options));
}
