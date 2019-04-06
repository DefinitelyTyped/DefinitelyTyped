import * as Textract from "textract";

Textract.fromBufferWithMime("", Buffer.alloc(0), (err, text) => { });
Textract.fromBufferWithMime("", Buffer.alloc(0), {}, (err, text) => { });

Textract.fromBufferWithName("", Buffer.alloc(0), (err, text) => { });
Textract.fromBufferWithName("", Buffer.alloc(0), {}, (err, text) => { });

Textract.fromFileWithMimeAndPath("", "", (err, text) => { });
Textract.fromFileWithMimeAndPath("", "", {}, (err, text) => { });

Textract.fromFileWithPath("", (err, text) => { });
Textract.fromFileWithPath("", {}, (err, text) => { });

Textract.fromUrl("", (err, text) => { });
Textract.fromUrl("", {}, (err, text) => { });

const testConf: Textract.Config = {
    doc: { exec: {} },
    dxf: { exec: {} },
    rtf: { exec: {} },
    images: { exec: {} },
    exec: {} as any,
    includeAltText: true,
    pdftotextOptions: {
        crop: { x: 0, y: 0, h: 0, w: 0 },
        encoding: "ASCII7",
        eol: "dos",
        firstPage: 1,
        lastPage: 3,
        ownerPassword: "",
        resolution: 300,
        splitPages: true,
        userPassword: "",
    },
    preserveLineBreaks: true,
    preserveOnlyMultipleLineBreaks: true,
    tesseract: { cmd: "-lang de" },
};

const testConf2: Textract.Config = {
    tesseract: { lang: "de" }
};
