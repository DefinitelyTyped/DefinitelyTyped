import PDFGradient = require("pdfkit/js/gradient");

var PDFRadialGradiant = PDFGradient.PDFRadialGradiant;
var PDFLinearGradient = PDFGradient.PDFLinearGradient;

import PDFPattern = require("pdfkit/js/pattern");
var PDFTilingPattern = PDFPattern.PDFTilingPattern;

import mtext = require("pdfkit/js/mixins/text");

import PDFDocument = require("pdfkit");

import font = require("pdfkit/js/mixins/fonts");
import pdfData = require("pdfkit/js/data");
import text = require("pdfkit/js/mixins/text");

font.registerFont("Arial");
font.registerFont("CustomFont", "path/to/font.ttf");
font.registerFont("CustomFontWithBuffer", Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]));
text.widthOfString("Kila", { ellipsis: true });

var doc: PDFKit.PDFDocument = new PDFDocument({
    compress: false,
    size: [526, 525],
    autoFirstPage: true,
    ownerPassword: "ownerPassword",
    permissions: {
        modifying: true,
        annotating: false,
        printing: "lowResolution",
    },
    font: "Arial",
    fontLayoutCache: true,
});

// $ExpectType PDFDocument
doc.addPage();
// $ExpectType PDFDocument
doc.addPage({});
// $ExpectType PDFDocument
doc.addPage({
    compress: true,
    info: {
        Title: "Sample PDF",
        Author: "John Doe",
        Subject: "Testing",
        Keywords: "typescript, pdf, test",
    },
    userPassword: "user123",
    ownerPassword: "owner456",
    permissions: {
        printing: "highResolution",
        modifying: false,
        copying: true,
        annotating: true,
        fillingForms: false,
        contentAccessibility: true,
        documentAssembly: false,
    },
    pdfVersion: "1.7",
    autoFirstPage: false,
    size: [595.28, 841.89],
    margin: 10,
    margins: { top: 20, left: 20, bottom: 20, right: 20 },
    layout: "portrait",
    font: "Helvetica",
    bufferPages: true,
    tagged: true,
    lang: "en-US",
    displayTitle: true,
    subset: "PDF/A-1",
    fontLayoutCache: false,
});

// $ExpectType PDFDocument
doc.continueOnNewPage();
// $ExpectType PDFDocument
doc.continueOnNewPage({});
// $ExpectType PDFDocument
doc.continueOnNewPage({
    compress: true,
    info: {
        Title: "Sample PDF",
        Author: "John Doe",
        Subject: "Testing",
        Keywords: "typescript, pdf, test",
    },
    userPassword: "user123",
    ownerPassword: "owner456",
    permissions: {
        printing: "highResolution",
        modifying: false,
        copying: true,
        annotating: true,
        fillingForms: false,
        contentAccessibility: true,
        documentAssembly: false,
    },
    pdfVersion: "1.7",
    autoFirstPage: false,
    size: [595.28, 841.89],
    margin: 10,
    margins: { top: 20, left: 20, bottom: 20, right: 20 },
    layout: "portrait",
    font: "Helvetica",
    bufferPages: true,
    tagged: true,
    lang: "en-US",
    displayTitle: true,
    subset: "PDF/A-1",
    fontLayoutCache: false,
});

// $ExpectType { start: number; count: number; }
doc.bufferedPageRange();

// $ExpectType PDFPage
doc.switchToPage();
// $ExpectType PDFPage
doc.switchToPage(2);

// $ExpectType void
doc.flushPages();

// $ExpectType void
doc.addNamedDestination("name");
// $ExpectType void
doc.addNamedDestination("name", "Fit");
// $ExpectType void
doc.addNamedDestination("name", "FitB");
// $ExpectType void
doc.addNamedDestination("name", "FitBH", 10);
// $ExpectType void
doc.addNamedDestination("name", "FitBV", 10);
// $ExpectType void
doc.addNamedDestination("name", "FitH", 10);
// $ExpectType void
doc.addNamedDestination("name", "FitR", 10, 20, 30, 40);
// $ExpectType void
doc.addNamedDestination("name", "FitV", 10);
// $ExpectType void
doc.addNamedDestination("name", "XYZ", 10, 20, 30);
// Test the "default" overload
// $ExpectType void
doc.addNamedDestination("name", Math.random() < 0.5 ? "XYZ" : "Fit", 10, 20);

declare let ref: PDFKit.PDFKitReference;
// $ExpectType void
doc.addNamedEmbeddedFile("name", ref);

// $ExpectType void
doc.addNamedJavaScript("name", "let it = 'some js script';");

// $ExpectType PDFKitReference
doc.ref({});

// $ExpectType PDFDocument
doc.addContent({});

// $ExpectType void
doc.end();

// $ExpectType string
doc.toString();

doc.info.Title = "Sample";
doc.info.Author = "kila Mogrosso";

// Create basic shapes
doc.moveTo(0, 20)
    .lineTo(100, 160)
    .quadraticCurveTo(130, 200, 150, 120)
    .lineTo(400, 90)
    .strokeColor([255, 0, 0], 1)
    .strokeColor([255, 0, 0])
    .stroke();

// SVG Paths
doc.path("M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90").stroke();

// Rectangle shape helper sample
doc.rect(100, 200, 100, 100);
// Rounded rectangle
doc.roundedRect(150, 250, 150, 150, 10);

// polygon
doc.polygon([100, 0], [50, 100], [50, 100]);

doc.lineWidth(25);
doc.lineCap("butt")
    .moveTo(50, 20)
    .lineTo(100, 20)
    .stroke();
doc.lineCap("round")
    .moveTo(150, 20)
    .lineTo(200, 20)
    .stroke();
doc.lineCap("square")
    .moveTo(250, 20)
    .circle(275, 30, 15)
    .stroke();
doc.lineJoin("miter")
    .rect(50, 100, 50, 50)
    .stroke();
doc.lineJoin("round")
    .rect(150, 100, 50, 50)
    .stroke();
doc.lineJoin("bevel")
    .rect(250, 100, 50, 50)
    .stroke();

doc.circle(100, 50, 50)
    .lineWidth(3)
    .fillOpacity(0.8)
    .fillAndStroke("red", "#900");

var grad = doc
    .linearGradient(50, 0, 150, 100)
    .stop(0, "green")
    .stop(1, "red");

doc.rect(50, 0, 100, 100).fill(grad);

doc.rect(150, 0, 25, 25).fill();

doc.circle(100, 50, 50)
    .dash(5, {
        space: 10,
    })
    .stroke();

var rgrad = doc.radialGradient(300, 50, 0, 300, 50, 50);
rgrad.stop(0, "orange", 0).stop(1, "orange", 1);
doc.circle(300, 50, 50).fill(rgrad);

var stripe45d = doc.pattern(
    [1, 1, 4, 4],
    3,
    3,
    "1 w 0 1 m 4 5 l s 2 0 m 5 3 l s",
);
doc.circle(280, 350, 50).fill([stripe45d, "blue"]);

doc.fillColor("red")
    .translate(-100, -50)
    .scale(0.8);

doc.path("M 250,75 L 323,301 131,161 369,161 177,301 z").fill("non-zero");

doc.translate(280, 0)
    .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
    .fill("even-odd");

doc.circle(100, 100, 100).clip();

doc.font("Arial", 30).text("The size is 30");

var strOrBuf = Math.random() < 0.5 ? "Arial" : Buffer.from("bytes");
doc.font(strOrBuf);

doc.fontSize(25)
    .fillColor("blue")
    .text("This is a link!", 20, 0);

var width = doc.widthOfString("This is a link!");

var height = doc.currentLineHeight();

doc.underline(20, 0, width, height, {
    color: "blue",
}).link(20, 0, width, height, "http://google.com/");

doc.moveDown()
    .fillColor("black")
    .highlight(20, doc.y, doc.widthOfString("This text is highlighted!"), height)
    .text("This text is highlighted!");

doc.moveDown()
    .strike(20, doc.y, doc.widthOfString("STRIKE!"), height)
    .text("STRIKE!");

doc.image(Buffer.from(""));
doc.image(new ArrayBuffer(10));
doc.image("images/test.jpeg");
// @ts-expect-error
doc.image(new File([], "image.jpg"));

doc.image("images/test.jpeg", 0, 15, {
    width: 300,
}).text("Proprotional to width", 0, 0);

doc.image("images/test.jpeg", 320, 15, {
    fit: [100, 100],
})
    .rect(320, 15, 100, 100)
    .stroke()
    .text("Fit", 320, 0);

doc.image("images/test.jpeg", 320, 145, {
    width: 200,
    height: 100,
}).text("Stretch", 320, 130);

doc.image("images/test.jpeg", 320, 280, {
    scale: 0.25,
}).text("Scale", 320, 265);

doc.list([1, 2, 3], { listType: "bullet", bulletRadius: 2 });

doc.list([1, 2, 3], { listType: "bullet", bulletIndent: 2 });

doc.list([4, 5, 6], { listType: "numbered", textIndent: 2 });

doc.list([7, 8, 9], { listType: "lettered" });

doc.image(
    Buffer.from(""),
    {
        scale: 0.25,
    },
).text("Scale", 320, 265);

// $ExpectType PDFDocument
doc.table({
    data: [
        ["Column 1", "Column 2", "Column 3"],
        ["One value goes here", "Another one here", "OK?"],
    ],
});

// $ExpectType PDFTableObject
doc.table()
    .row(["Column 1", "Column 2", "Column 3"])
    .row(["One value goes here", "Another one here", "OK?"]);

doc.table({
    columnStyles: [100, "*", 200, "*"],
    data: [
        ["width=100", "star-sized", "width=200", "star-sized"],
        [
            "fixed-width cells have exactly the specified width",
            { text: "nothing interesting here", textColor: "grey" },
            { text: "nothing interesting here", textColor: "grey" },
            { text: "nothing interesting here", textColor: "grey" },
        ],
    ],
});

doc.table({
    rowStyles: [20, 50, 70],
    data: [
        ["row 1 with height 20", "column B"],
        ["row 2 with height 50", "column B"],
        ["row 3 with height 70", "column B"],
    ],
});

doc.table({
    rowStyles: 40,
    data: [
        ["row 1", "column B"],
        ["row 2", "column B"],
        ["row 3", "column B"],
    ],
});

doc.table({
    rowStyles: (row) => (row + 1) * 25,
    data: [
        ["row 1", "column B"],
        ["row 2", "column B"],
        ["row 3", "column B"],
    ],
});

doc.table({
    columnStyles: [200, "*", "*"],
    data: [
        [{ colSpan: 2, text: "Header with Colspan = 2" }, "Header 3"],
        ["Header 1", "Header 2", "Header 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        [
            {
                rowSpan: 3,
                text:
                    "rowspan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
            },
            "Sample value 2",
            "Sample value 3",
        ],
        ["Sample value 2", "Sample value 3"],
        ["Sample value 2", "Sample value 3"],
        [
            "Sample value 1",
            {
                colSpan: 2,
                rowSpan: 2,
                text: "Both:\nrowspan and colspan\ncan be defined at the same time",
            },
        ],
        ["Sample value 1"],
    ],
});

doc.table({
    rowStyles: { border: false },
    data: [
        ["Header 1", "Header 2", "Header 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
    ],
});

doc.table({
    rowStyles: (i) => {
        return i < 1 ? { border: [0, 0, 1, 0] } : { border: false };
    },
    data: [
        ["Header 1", "Header 2", "Header 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
    ],
});

doc.table({
    rowStyles: (i) => {
        return i < 1
            ? { border: [0, 0, 2, 0], borderColor: "black" }
            : { border: [0, 0, 1, 0], borderColor: "#aaa" };
    },
    data: [
        ["Header 1", "Header 2", "Header 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
    ],
});

doc.table({
    // Set the style for all cells
    defaultStyle: { border: 1, borderColor: "gray" },
    // Set the style for cells based on their column
    columnStyles: (i) => {
        if (i === 0) return { border: { left: 2 }, borderColor: { left: "black" } };
        if (i === 2) return { border: { right: 2 }, borderColor: { right: "black" } };
    },
    // Set the style for cells based on their row
    rowStyles: (i) => {
        if (i === 0) return { border: { top: 2 }, borderColor: { top: "black" } };
        if (i === 3) return { border: { bottom: 2 }, borderColor: { bottom: "black" } };
    },
    data: [
        ["Header 1", "Header 2", "Header 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
    ],
});

doc.table({
    rowStyles: (i) => {
        if (i % 2 === 0) return { backgroundColor: "#ccc" };
    },
    data: [
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
        ["Sample value 1", "Sample value 2", "Sample value 3"],
    ],
});

doc.table({
    data: [
        [
            {
                border: [true, false, false, false],
                backgroundColor: "#eee",
                text: "border:\n[true, false, false, false]",
            },
            { border: false, backgroundColor: "#ddd", text: "border:\nfalse" },
            { border: true, backgroundColor: "#eee", text: "border:\ntrue" },
        ],
        [
            { rowSpan: 3, border: true, backgroundColor: "#eef", text: "rowSpan: 3\n\nborder:\ntrue" },
            { border: undefined, backgroundColor: "#eee", text: "border:\nundefined (default)" },
            {
                border: [false, false, false, true],
                backgroundColor: "#ddd",
                text: "border:\n[false, false, false, true]",
            },
        ],
        [
            { colSpan: 2, border: true, backgroundColor: "#efe", text: "colSpan: 2\n\nborder:\ntrue" },
        ],
        [
            { border: 0, backgroundColor: "#eee", text: "border:\n0 (same as false)" },
            {
                border: [false, true, true, false],
                backgroundColor: "#ddd",
                text: "border:\n[false, true, true, false]",
            },
        ],
    ],
});

doc.table({
    defaultStyle: { border: false, width: 60 },
    data: [
        ["", "column 1", "column 2", "column 3"],
        [
            "row 1",
            {
                rowSpan: 3,
                colSpan: 3,
                border: true,
                backgroundColor: "#ccc",
                text: "rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]",
            },
        ],
        ["row 2"],
        ["row 3"],
    ],
});

doc.table({
    defaultStyle: { border: 1 },
    columnStyles: { border: { right: 2 } },
    rowStyles: { border: { bottom: 3 } },
    data: [
        [{ border: { left: 4 } }],
    ],
});

doc.text("before")
    .table({
        data: [
            ["Column 1", "Column 2", "Column 3"],
            ["One value goes here", "Another one here", "OK?"],
        ],
    })
    .text("after");

doc.table({
    data: [
        [
            {
                align: { x: "center", y: "bottom" },
                text: "test",
            },
        ],
    ],
});

doc.text("Scale", { align: "justify" });

doc.text("Baseline - string literal", { baseline: "alphabetic" });

doc.text("Baseline - numeric", { baseline: 10 });

doc.text("Text with features", { features: ["kern"] });

doc.goTo(0, 0, 0, 0, "lorem");

doc.text("Text with destination", { destination: "test-anchor" });

doc.text("Text with goTo", { goTo: "test-anchor" });

doc.text("Text with null link", { link: null });

doc.text("Text with null link", { align: "left" });
doc.text("Text with null link", { align: "center" });
doc.text("Text with null link", { align: "right" });
doc.text("Text with null link", { align: "justify" });

doc.text("Text with all lines indented", { indentAllLines: true });

// @ts-expect-error
doc.text("Text with null link", { align: "other" }); // Altought this is not an error in JS side, the inclusion of `string` did break type hints

doc.image("path/to/image.png", {
    fit: [250, 300],
    align: "center",
    valign: "center",
});

doc.image("path/to/image.png", {
    fit: [250, 300],
    link: "http://google.com/",
});

doc.image("path/to/image.png", {
    cover: [250, 300],
});

doc.image("path/to/image.png", {
    link: {},
    goTo: {},
    destination: "lorem",
});

doc.file("/path/to/file/example.txt");

doc.file(Buffer.from("this will be a text file"), { name: "example.txt" });

doc.file("data:text/plain;base64,YmFzZTY0IHN0cmluZw==", { name: "base64.txt" });

// AcroForm
doc.initForm();

doc.endAcroForm();

doc.formField("ZipCode1", { V: "some-value" });

doc.formAnnotation("ZipCode1", "text", 0, 0, 10, 10, { V: "some-value" });
doc.formText("ZipCode1", 0, 0, 10, 10);
doc.formPushButton("ZipCode1", 0, 0, 10, 10, { V: "some-value" });
doc.formCombo("ZipCode1", 0, 0, 10, 10, { V: "some-value" });
doc.formList("ZipCode1", 0, 0, 10, 10, { V: "some-value" });
doc.formRadioButton("ZipCode1", 0, 0, 10, 10, { V: "some-value" });
doc.formCheckbox("ZipCode1", 0, 0, 10, 10, { V: "some-value" });

// Subclassing
class SubPDFDocument extends PDFDocument {
    constructor(options: PDFKit.PDFDocumentOptions) {
        super(options);
    }

    // override
    text(
        text: string | number,
        x?: number | PDFKit.Mixins.TextOptions,
        y?: number,
        options?: PDFKit.Mixins.TextOptions,
    ): this {
        if (typeof text === "string") {
            return super.text(text, options);
        } else {
            return super.text(text + "", options);
        }
    }

    // new method
    segment(xa: number, ya: number, xb: number, yb: number): this {
        this.moveTo(xa, ya);
        this.lineTo(xb, yb);
        return this;
    }
}

var subDoc = new SubPDFDocument({});

subDoc.moveTo(subDoc.page.width / 2, subDoc.page.height / 2).text(10);
subDoc.lineWidth(3).segment(10, subDoc.page.width - 10, subDoc.page.height - 10, 10).stroke("#00FFFF");

// Markings
doc.markContent("Figure", { alt: "some alternative value" });
doc.endMarkedContent();
const structureContent = doc.markStructureContent("P");
doc.text("Test");
doc.endMarkedContent();
const structureElement = doc.struct("Div", {}, [structureContent]);
doc.struct("Div", {}, structureContent);
doc.addStructure(structureElement);
doc.initMarkings();
doc.initPageMarkings([{ tag: "P" }]);
doc.endPageMarkings(doc.page);
doc.getMarkingsDictionary();
doc.getStructTreeRoot();
doc.createStructParentTreeNextKey();
doc.endMarkings();
// structure content methods
const structureContent2 = doc.markStructureContent("H1");
structureContent.push(structureContent2);
// marking and structure construction for text
const section = doc.struct("Sect", { title: "Test" });
doc.addStructure(section);
doc.text("Foo. \nBar. ", { structParent: section, structType: "H" });
// marking and structure for list
const list = doc.struct("L");
section.add(list);
doc.list(["A ", "B ", "C "], 100, 100, { structParent: list, structTypes: ["LI", "Lbl", "Lbody"] });

// structure element methods
structureElement.add(structureContent);
structureElement.setAttached();
structureElement.setParent(doc.ref({}));
structureElement.end();

// Test optional info types can not be undefined in PDFDocument (See PullRequest 71195)
const optionalPDF: PDFKit.PDFDocument = new PDFDocument({
    // @ts-expect-error
    info: {
        Producer: undefined,
        Creator: undefined,
        CreationDate: undefined,
        Title: undefined,
        Author: undefined,
        Subject: undefined,
        Keywords: undefined,
        ModDate: undefined,
    },
});

// Test outlines
doc.outline.addItem("A");

// $ExpectType TextBounds
doc.boundsOfString("Bounds of string", 50, 100, {
    align: "left",
});

// $ExpectType TextBounds
doc.boundsOfString("Bounds of string", {
    align: "left",
});
