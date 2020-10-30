import SignaturePad = require('signature_pad');

/* TEST 1 - Basic structure and usage */
function BasicTest() {
    const canvas = document.querySelector('canvas');

    const signaturePad = new SignaturePad(canvas);

    // Returns signature image as data URL
    signaturePad.toDataURL();

    // Returns signature image as data URL using the given media type
    signaturePad.toDataURL('image/jpeg');

    // Returns an array of point groups that define the signature
    signaturePad.toData();

    // Draws signature image from data URL
    signaturePad.fromDataURL('data:image/png;base64,iVBORw0K...');

    // Clears the canvas
    signaturePad.clear();

    // Returns true if canvas is empty, otherwise returns false
    signaturePad.isEmpty();
}

/* TEST 2 - You can set options during initialization: */
function SetDuringInit() {
    const canvas = document.querySelector('canvas');
    const signaturePad = new SignaturePad(canvas, {
        minWidth: 5,
        maxWidth: 10,
        penColor: 'rgb(66, 133, 244)'
    });
}

/* TEST 3 - or during runtime: */
function RuntimeChange() {
    const canvas = document.querySelector('canvas');
    const signaturePad = new SignaturePad(canvas);
    signaturePad.minWidth = 5;
    signaturePad.maxWidth = 10;
    signaturePad.penColor = 'rgb(66, 133, 244)';
}
