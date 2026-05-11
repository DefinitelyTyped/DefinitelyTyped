import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.addVirtualFileSystem(pdfFonts);

const dd = {
    content: "Hello world!",
};

// $ExpectType TCreatedPdf
pdfMake.createPdf(dd);

// $ExpectType TCreatedPdf
pdfMake.createPdf(dd, {});
