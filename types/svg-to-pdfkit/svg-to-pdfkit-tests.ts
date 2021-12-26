import SvgToPdf = require('svg-to-pdfkit');
import PDFDocument = require('pdfkit');

const doc = new PDFDocument();

SvgToPdf(doc, '<svg>'); // $ExpectType void

SvgToPdf(doc, '<svg>', 100, 100); // $ExpectType void

SvgToPdf(doc, '<svg>', 100, 100, {}); // $ExpectType void

// https://github.com/alafr/SVG-to-PDFKit/blob/4d2d8746bda1e9335c47bbe9ad91277c51fd5a07/source.js#L2477
const options: SvgToPdf.SVGtoPDFOptions = {
    width: 100,
    height: 100,
    preserveAspectRatio: 'xMinYMin',
    useCSS: true,
    // https://github.com/alafr/SVG-to-PDFKit/blob/4d2d8746bda1e9335c47bbe9ad91277c51fd5a07/source.js#L2500
    fontCallback: (family, bold, italic, fontOptions) => {
        family; // $ExpectType string
        bold; // $ExpectType boolean
        italic; // $ExpectType boolean
        fontOptions.fauxBold; // $ExpectType boolean
        fontOptions.fauxItalic; // $ExpectType boolean
        return family;
    },
    // https://github.com/alafr/SVG-to-PDFKit/blob/4d2d8746bda1e9335c47bbe9ad91277c51fd5a07/source.js#L2558
    imageCallback: link => {
        link; // $ExpectType string
        return link;
    },
    // https://github.com/alafr/SVG-to-PDFKit/blob/4d2d8746bda1e9335c47bbe9ad91277c51fd5a07/source.js#L2562
    colorCallback: (result, row) => {
        result; // $ExpectType string
        row; // $ExpectType string
        return [[255, 255, 255], 1];
    },
    // https://github.com/alafr/SVG-to-PDFKit/blob/4d2d8746bda1e9335c47bbe9ad91277c51fd5a07/source.js#L2494
    warningCallback: str => {
        str; // $ExpectType string
        console.log(str);
    },
    assumePt: true,
    precision: 3,
};

SvgToPdf(doc, '<svg>', 100, 100, options); // $ExpectType void
