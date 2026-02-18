import HtmlToDocx from "html-to-docx";

const htmlString = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Document</title>
        </head>
        <body>
            <h1>Hello world</h1>
        </body>
    </html>`;

// $ExpectType Promise<Blob> | Promise<ArrayBuffer>
HtmlToDocx(htmlString);

// $ExpectType Promise<Blob> | Promise<ArrayBuffer>
HtmlToDocx(htmlString, "header");

// $ExpectType Promise<Blob> | Promise<ArrayBuffer>
HtmlToDocx(htmlString, null, {
    orientation: "landscape",
    table: {
        row: {
            cantSplit: true,
        },
    },
});

// $ExpectType Promise<Blob> | Promise<ArrayBuffer>
HtmlToDocx(
    htmlString,
    null,
    {
        orientation: "landscape",
        table: {
            row: {
                cantSplit: true,
            },
        },
    },
    "footer",
);

// $ExpectType Promise<Blob> | Promise<ArrayBuffer>
HtmlToDocx(
    htmlString,
    null,
    {
        margins: {
            top: 720,
            right: 900,
            bottom: 720,
            left: 900,
            header: 360,
            footer: 360,
            gutter: 0,
        },
    },
);

// @ts-expect-error
HtmlToDocx(htmlString, {
    orientation: "landscape",
    table: {
        row: {
            cantSplit: true,
        },
    },
});
