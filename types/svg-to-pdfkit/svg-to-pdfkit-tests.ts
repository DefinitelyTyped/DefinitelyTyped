import SvgToPdf = require("svg-to-pdfkit");
import PDFDocument = require("pdfkit");

const doc = new PDFDocument();

SvgToPdf(doc, "<svg>"); // $ExpectType void

SvgToPdf(doc, "<svg>", 100, 100); // $ExpectType void

SvgToPdf(doc, "<svg>", 100, 100, {}); // $ExpectType void

// https://github.com/alafr/SVG-to-PDFKit/blob/b091ebd4e7b7d2310eb1003511cd5de480f7e0e1/source.js#L2617
const options: SvgToPdf.Options = {
    width: 100,
    height: 100,
    preserveAspectRatio: "xMinYMin",
    useCSS: true,
    // https://github.com/alafr/SVG-to-PDFKit/blob/b091ebd4e7b7d2310eb1003511cd5de480f7e0e1/source.js#L2640
    fontCallback: (family, bold, italic, fontOptions) => {
        family; // $ExpectType string
        bold; // $ExpectType boolean
        italic; // $ExpectType boolean
        fontOptions.fauxBold; // $ExpectType boolean
        fontOptions.fauxItalic; // $ExpectType boolean
        return family;
    },
    // https://github.com/alafr/SVG-to-PDFKit/blob/b091ebd4e7b7d2310eb1003511cd5de480f7e0e1/source.js#L2698
    imageCallback: link => {
        link; // $ExpectType string
        return link;
    },
    // https://github.com/alafr/SVG-to-PDFKit/blob/b091ebd4e7b7d2310eb1003511cd5de480f7e0e1/source.js#L2703
    colorCallback: (color) => {
        color; // $ExpectType Color
        return [[255, 255, 255], 1];
    },
    // https://github.com/alafr/SVG-to-PDFKit/blob/b091ebd4e7b7d2310eb1003511cd5de480f7e0e1/source.js#L2635
    warningCallback: str => {
        str; // $ExpectType string
        console.log(str);
    },
    assumePt: true,
    precision: 3,
};

SvgToPdf(doc, "<svg>", 100, 100, options); // $ExpectType void
