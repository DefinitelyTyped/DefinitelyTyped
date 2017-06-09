/* TEST 1 - Basic structure and usage */
function BasicTest() {
    var canvas = document.querySelector("canvas");

    var signaturePad = new SignaturePad(canvas);

    // Returns signature image as data URL
    signaturePad.toDataURL();

    // Draws signature image from data URL
    signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");

    // Clears the canvas
    signaturePad.clear();

    // Returns true if canvas is empty, otherwise returns false
    signaturePad.isEmpty();
}

/* TEST 2 - You can set options during initialization: */
function SetDuringInit() {
    var canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas, {
        minWidth: 5,
        maxWidth: 10,
        penColor: "rgb(66, 133, 244)"
    });
}

/* TEST 3 - or during runtime: */
function RuntimeChange() {
    var canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas);
    signaturePad.minWidth = 5;
    signaturePad.maxWidth = 10;
    signaturePad.penColor = "rgb(66, 133, 244)";
}
