import { generatePdf, generatePdfs } from "html-pdf-node/index";

// $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
generatePdf(
    {
        content: "<h1>Hello World!</h1>",
    },
    {
        format: "A4",
        printBackground: true,
    },
    (err, buffer) => {
        // $ExpectType Buffer || Buffer<ArrayBufferLike>
        buffer;
    },
);

// $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
generatePdf({
    content: "<h1>Hello World!</h1>",
});

generatePdf({
    content: "<h1>Hello World!</h1>",
}).then(buffer => {
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    buffer;
});

// $ExpectType Promise<PdfOutput<{ content: string; name: string; }>[]>
generatePdfs(
    [
        {
            content: "<h1>Hello World!</h1>",
            name: "first.pdf",
        },
        {
            content: "<h1>Hello World!</h1>",
            name: "second.pdf",
        },
    ],
    {
        format: "A4",
        printBackground: true,
    },
    (err, output) => {
        // $ExpectType Buffer || Buffer<ArrayBufferLike>
        output[0].buffer;
        // $ExpectType string
        output[0].name;
    },
);

generatePdfs([
    {
        content: "<h1>Hello World!</h1>",
        name: "first.pdf",
    },
]).then(output => {
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    output[0].buffer;
    // $ExpectType string
    output[0].name;
});
