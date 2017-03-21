import * as PDFObject from "pdfobject";

function test_embedding_with_url_only() {
    var el:HTMLElement = PDFObject.embed("url");
}

function test_embedding_with_url_and_target() {
    var el:HTMLElement = PDFObject.embed("url", ".css-selector");
}

function test_embedding_with_all_parameters() {
    var el:HTMLElement = PDFObject.embed("url", ".css-selector", {
        "height": "200px"
    });
}

function test_pdf_object_version() {
    var version:string = PDFObject.pdfobjectversion;
}

function test_supports_pdfs() {
    var supportsPDFs:boolean = PDFObject.supportsPDFs;
}
