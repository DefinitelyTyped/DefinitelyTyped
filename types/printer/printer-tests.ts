import printer = require("printer");

printer.getDefaultPrinterName(); // $ExpectType string | undefined
printer.getJob("test", 5); // $ExpectType JobDetails
printer.getPrinter("printerName"); // $ExpectType PrinterDetails
printer.getPrinterDriverOptions("printerName"); // $ExpectType PrinterDriverOptions
printer.getPrinters(); // $ExpectType PrinterDetails[]
printer.getSelectedPaperSize("printerName"); // $ExpectType string
printer.getSupportedJobCommands(); // $ExpectType string[]
printer.getSupportedPrintFormats(); // $ExpectType string[]
printer.printDirect({
    data: 'test'
});
printer.printFile({
    filename: 'test'
});
printer.setJob("printerName", 5, "CANCEL"); // $ExpectType void
