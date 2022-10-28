import { generatePdfs, generatePdf } from "html-pdf-node/index";

generatePdf(
    {
        content: "<h1>Hello World!</h1>",
    },
    {
        format: "A4",
        printBackground: true,
    },
    (err, buffer) => {
        // $ExpectType Buffer
        buffer;
    }
);

// $ExpectType Promise<Buffer[]>
const aPromise = generatePdfs(
    [
        {
            content: "<h1>Hello World!</h1>",
        },
        {
            content: "<h1>Hello World!</h1>",
        }
    ],
    {
        format: "A4",
        printBackground: true,
    },
    (err, buffer) => {
        // $ExpectType Buffer
        buffer;
    }
);

// $ExpectType Promise<Buffer[]>
aPromise;

// $ExpectType Promise<void>
generatePdfs(
    [
        {
            content: "<h1>Hello World!</h1>",
        },
        {
            content: "<h1>Hello World!</h1>",
        }
    ],
    {
        format: "A4",
        printBackground: true,
    },
).then((buffer) => {
    // $ExpectType Buffer[]
    buffer;
});

// $ExpectType Promise<void>
generatePdf(
    {
        content: "<h1>Hello World!</h1>",
    },
    {
        format: "A4",
        printBackground: true,
    },
).then((buffer) => {
    // $ExpectType Buffer
    buffer;
});
