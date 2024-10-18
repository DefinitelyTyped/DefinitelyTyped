import onScan, { ScanError, ScanErrorEvent, ScanEvent, ScanOptions } from "onscan.js";

const options: ScanOptions = {
    onScan: (code, quantity) => {
        code.toUpperCase();
        quantity.toExponential();
    },
    onScanButtonLongPress: () => {},
    onScanError: debug => {},
    onKeyDetect: (keyCode, event) => {},
    onKeyProcess: (char, event) => {},
    onPaste: (pasted, event) => {},
    keyCodeMapper: onScan.decodeKeyEvent,
    timeBeforeScanTest: 100,
    avgTimeByChar: 30,
    minLength: 6,
    suffixKeyCodes: [9, 13],
    prefixKeyCodes: [],
    ignoreIfFocusOn: false,
    scanButtonKeyCode: false,
    stopPropagation: false,
    preventDefault: false,
    captureEvents: false,
    singleScanQty: 1,
    reactToKeyDown: true,
    reactToPaste: false,
};

// Should attach to 'document'
onScan.attachTo(document);
onScan.detachFrom(document);

// Should accept options
onScan.attachTo(document, options);
onScan.detachFrom(document);

// Initialize with options
onScan.attachTo(document, {
    suffixKeyCodes: [13], // enter-key expected at the end of a scan
    reactToPaste: true, // Compatibility to built-in scanners in paste-mode (as opposed to keyboard-mode)
    onScan: (sCode, iQty) => {
        // Alternative to document.addEventListener('scan')
        console.log(`Scanned: ${iQty}x ${sCode}`);
    },
    onKeyDetect: iKeyCode => {
        // output all potentially relevant key events - great for debugging!
        console.log("Pressed: " + iKeyCode);
    },
});

// Should accept empty option object
onScan.attachTo(document, {});
onScan.detachFrom(document);

// Simulate a scan
onScan.simulate(document, "1234567890123");
onScan.simulate(document, [48, 49, 50]);
onScan.simulate(document, [
    { keyCode: 80, key: "P", shiftKey: true },
    { keyCode: 49, key: "1" },
]);

// Change options on-the-fly
onScan.setOptions(document, {
    singleScanQty: 5, // change the quantity to 5 for every scan
});

// Remove onScan.js from a DOM element completely
onScan.detachFrom(document);
onScan.attachTo(document, {
    onScan: (sScanned, iQty) => {},
    keyCodeMapper: oEvent => {
        // Look for special keycodes or other event properties specific to
        // your scanner
        if (oEvent.which === "your_special_key_code") {
            return "xxx";
        }
        // Fall back to the default decoder in all other cases
        return onScan.decodeKeyEvent(oEvent);
    },
});

// Scan Event
window.document.addEventListener("scan", onScanSuccess);

function onScanSuccess(scan: ScanEvent) {
    scan.detail.qty;
    scan.detail.scanCode;
}

// ScanError Event
window.document.addEventListener("scanError", onScanError);

function onScanError(scanError: ScanErrorEvent) {
    scanError.detail.message;
    scanError.detail.avgTimeByChar;
    scanError.detail.minLength;
    scanError.detail.scanCode;
    scanError.detail.scanDuration;
}
