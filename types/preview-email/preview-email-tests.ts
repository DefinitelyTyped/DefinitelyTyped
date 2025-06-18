import type { Options as NodeMailerOptions } from "nodemailer/lib/mailer";
import previewEmail, { OpenOptions, Options, UrlTransform } from "preview-email";

declare const message: NodeMailerOptions;

// Without options
// $ExpectType Promise<string>
previewEmail(message);

// With empty options
// $ExpectType Promise<string>
previewEmail(message, {});

// With all available options
// $ExpectType Promise<string>
previewEmail(message, {
    id: "some-id",
    dir: "./dir",
    template: "./dir/template.pug",
    urlTransform: path => `./dir/${path}`,
    openSimulator: true,
    returnHtml: true,
    hasDownloadOriginalButton: true,
});

// With options.open
{
    // $ExpectType Promise<string>
    previewEmail(message, { open: true });

    // $ExpectType Promise<string>
    previewEmail(message, { open: { wait: true } });
}

// With options.simpleParser
{
    // $ExpectType Promise<string>
    previewEmail(message, { simpleParser: {} });

    // $ExpectType Promise<string>
    previewEmail(message, {
        simpleParser: {
            skipHtmlToText: true,
            maxHtmlLengthToParse: 1,
            formatDateString: (d) => {
                d; // $ExpectType Date
                return "";
            },
            skipImageLinks: true,
            skipTextToHtml: true,
            skipTextLinks: true,
            keepCidLinks: true,
        },
    });

    // @ts-expect-error `Iconv` is omitted in options.simpleParser
    previewEmail(message, { Iconv: null });
}
