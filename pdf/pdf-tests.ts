/// <reference path="pdf.d.ts" />

//
// Fetch the PDF document from the URL using promises
//
var pdfDoc: PDFDocumentProxy;
var pageNum: number;

PDFJS.getDocument('helloworld.pdf').then(function (pdf) {
	// Using promise to fetch the page
	pdfDoc = pdf;
	pageNum = 1;
	renderPage(pageNum);
});

function renderPage(pageNum: number) {
	pdfDoc.getPage(pageNum).then(function (page) {
		var scale = 1.5;
		var viewport = page.getViewport(scale);

		//
		// Prepare canvas using PDF page dimensions
		//
		var canvas = <HTMLCanvasElement>document.getElementById('the-canvas');
		var context = canvas.getContext('2d');
		canvas.height = viewport.height;
		canvas.width = viewport.width;

		//
		// Render PDF page into canvas context
		//
		var renderContext = {
			canvasContext: context,
			viewport: viewport
		};
		page.render(renderContext);
	});
}

function goNext() {
    if (pdfDoc && pageNum < pdfDoc.numPages) {
        ++pageNum;
        renderPage(pageNum);
    }
}
