import PDFObject = require("pdfobject");

PDFObject.embed("url"); // $ExpectType HTMLElement
PDFObject.embed("url", ".css-selector"); // $ExpectType HTMLElement
// $ExpectType HTMLElement
PDFObject.embed("url", ".css-selector", {
    height: "200px",
});
PDFObject.pdfobjectversion; // $ExpectType "2.2.3"
PDFObject.supportsPDFs; // $ExpectType boolean
