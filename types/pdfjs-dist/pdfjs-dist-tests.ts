import { getDocument, PDFDocumentProxy, Util, GlobalWorkerOptions, PDFWorker } from 'pdfjs-dist';

GlobalWorkerOptions.workerPort = new PDFWorker();

//
// Fetch the PDF document from the URL using promises
//
var pdfDoc: PDFDocumentProxy;
var pageNum: number;

getDocument('helloworld.pdf').promise.then(function (pdf) {
    // Using promise to fetch the page
    pdfDoc = pdf;
    pageNum = 1;
    renderPage(pageNum);
});

function renderPage(pageNum: number) {
    pdfDoc.getPage(pageNum).then(function (page) {
        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        //
        // Prepare canvas using PDF page dimensions
        //
        var canvas = <HTMLCanvasElement>document.getElementById('the-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        //
        // test viewport conversion methods
        // convertToViewportRectangle and normalizeRect are used in the acroforms example:
        // https://github.com/mozilla/pdf.js/blob/master/examples/acroforms/forms.js
        //
        const rect = viewport.convertToViewportRectangle([100, 100, 0, 0]);
        const normalizedRect = Util.normalizeRect(rect);
        const point = viewport.convertToViewportPoint(100, 100);
        const pdfPoint = viewport.convertToPdfPoint(100, 100);

        //
        // Render PDF page into canvas context
        //
        page.render({
            canvasContext: context,
            viewport: viewport,
            renderInteractiveForms: false,
        });
    });
}

function goNext() {
    if (pdfDoc && pageNum < pdfDoc.numPages) {
        ++pageNum;
        renderPage(pageNum);
    }
}

//
// Test Promise allows return value mutation
//
var promise: Promise<string> = getDocument('helloworld.pdf').promise.then(pdf => {
    return 'arbitrary string';
});

//
// Test Promise allows await and catch
//
async function getMeta() {
    const pdf = await getDocument('helloworld.pdf').promise;
    const metaData = await pdf.getMetadata().catch(function(err) {
        return null;
    });
}
