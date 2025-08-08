import html2pdf = require("html2pdf.js");

// Interfaces
let options: html2pdf.Options = {
    filename: "test.pdf",
    margin: 1,
    image: { type: "jpeg", quality: 0.95 },
    enableLinks: true,
    pagebreak: {
        mode: ["css", "legacy"],
        before: ".page-break",
        after: ".section-end",
        avoid: ".no-break",
    },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
};

let imageOptions: html2pdf.ImageOptions = {
    type: "png",
    quality: 0.9,
};

let pagebreakOptions: html2pdf.PagebreakOptions = {
    mode: "avoid-all",
    before: ["h1", ".chapter"],
    after: [".section-end"],
    avoid: ["img", ".keep-together"],
};

// Worker interface
let worker: html2pdf.Worker;
worker = html2pdf();
worker = html2pdf(document.createElement("div"), options);

// Worker methods
worker = worker.from(document.createElement("div"));
worker = worker.from("<div>HTML string</div>", "string");
worker = worker.from(document.createElement("div"), "element");
worker = worker.from(document.createElement("canvas"), "canvas");
worker = worker.from(document.createElement("img"), "img");

worker = worker.to("container");
worker = worker.toContainer();
worker = worker.toCanvas();
worker = worker.toImg();
worker = worker.toPdf();

worker = worker.output("pdf", { type: "blob" });
worker = worker.outputPdf("blob", { type: "application/pdf" });
worker = worker.outputImg("dataurl", { quality: 0.8 });

worker = worker.save("test.pdf");
worker = worker.set(options);
worker = worker.get("filename", (value: any) => {});
worker = worker.setMargin(1);
worker = worker.setMargin([1, 2]);
worker = worker.setMargin([1, 2, 3, 4]);
worker = worker.setPageSize({ width: 210, height: 297 });
worker = worker.setProgress(0.5, "processing", 1, []);
worker = worker.updateProgress(0.75, "almost-done", 2, []);

// Promise methods
worker = worker.then((result: any) => result);
worker = worker.thenCore((result: any) => result);
worker = worker.catch((error: any) => error);

// Aliases
worker = worker.saveAs("test.pdf");
worker = worker.using(options);
worker = worker.export("pdf");
worker = worker.run((result: any) => result);

// Error method
worker = worker.error("Custom error message");
