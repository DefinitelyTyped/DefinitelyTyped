

var f = dymo.label.framework;

// Test checkEnvironment
var env = f.checkEnvironment();

env.errorDetails = "";
env.isBrowserSupported = true;
env.isFrameworkInstalled = true;

// Test getPrinters
var printers = f.getPrinters();

// Test PrinterInfo properties
printers.forEach((value) =>{
    value.isAutoCutSupported = true;
    value.isConnected = true;
    value.isLocal = true;
    value.isTwinTurbo = true;
    value.modelName = "";
    value.name = "";
});

var testcolor:dymo.label.framework.Color = { alpha: 255, red: 0, green: 0, blue: 0};

// Test createLabelRenderParamsXml
var renderParamsXml: string = f.createLabelRenderParamsXml({
    flowDirection: f.FlowDirection.LeftToRight,
    labelColor: testcolor,
    pngUseDisplayResolution: true,
    shadowColor: testcolor,
    shadowDepth: 0
});
f.createLabelRenderParamsXml({}).charAt(0); // string, all optional params

// Test renderLabel
f.renderLabel("", renderParamsXml, printers[0].name);

// Test openLabelXml
var label = f.openLabelXml("");

// Test ILabel methods
label.getAddressBarcodePosition(0) == f.AddressBarcodePosition.AboveAddress; // enum
label.getAddressObjectCount().toFixed(); // number
label.getAddressText(0).charAt(0); // string
label.getLabelXml().charAt(0); // string
label.getObjectNames()[0].charAt(0); // string[]
label.getObjectText("").charAt(0); // string
label.print("", "", "");
label.printAndPollStatus("", "", "", (printJob, printJobStatusInfo) => {
    // Test PrintJob
    printJob.getStatus((printJobStatusInfoA) => {
        // Test PrintJobStatusInfo
        printJobStatusInfoA.status.toFixed(); // number
        printJobStatusInfoA.statusMessage.charAt(0); // string
    });
    // Test callback (must return boolean)
    return true;
}, 0);
label.render("", "").charAt(0); // string
// Test chainable "set" methods
label.setAddressBarcodePosition(0, dymo.label.framework.AddressBarcodePosition.AboveAddress)
    .setAddressText(0, "")
    .setObjectText("", "")
    .setAddressText(1, "");

// Test LabelSetBuilder
var lsb = new f.LabelSetBuilder();
var lsbRec = lsb.addRecord();
lsb.toString().charAt(0); // string
lsb.getRecords().pop(); // array
lsb.getRecords()[0].setText("", ""); // array of ILabelSetRecord

// Test chainable ILabelSetRecord methods.
lsbRec.setBase64Image("", "").setText("", "").setTextMarkup("", "").setText("", "");

// Test static toXml
f.LabelSetBuilder.toXml(lsb.getRecords());

// Test printLabel
f.printLabel("", "", "", "");

// Test printLabel2
f.printLabel2("", "", "", "").getStatus((pjsi) => {
    pjsi.status.toFixed();
    pjsi.statusMessage.charAt(0);
});



// Test createLabelWriterPrintParamsXml
var clwppxp: dymo.label.framework.CreateLabelWriterPrintParamsXmlParams = {
    copies: 0, // number
    flowDirection: dymo.label.framework.FlowDirection.LeftToRight, // enum
    jobTitle: "", // string
    printQuality: dymo.label.framework.LabelWriterPrintQuality.BarcodeAndGraphics, // enum
    twinTurboRoll: dymo.label.framework.TwinTurboRoll.Left // enum
}
f.createLabelWriterPrintParamsXml(clwppxp).charAt(0); // string
f.createLabelWriterPrintParamsXml({}).charAt(0) // all optional params

// Test createTapePrintParamsXml
var ctppxp: dymo.label.framework.CreateTapePrintParamsXmlParams = {
    copies: 0, // number
    flowDirection: dymo.label.framework.FlowDirection.RightToLeft, // enum
    alignment: dymo.label.framework.TapeAlignment.Left, // enum
    cutMode: dymo.label.framework.TapeCutMode.ChainMarks, // enum
    jobTitle: "" // string
}
f.createTapePrintParamsXml(ctppxp).charAt(0); // string
f.createTapePrintParamsXml({}).charAt(0); // all optional params

// Test VERSION
f.VERSION.charAt(0); // string
