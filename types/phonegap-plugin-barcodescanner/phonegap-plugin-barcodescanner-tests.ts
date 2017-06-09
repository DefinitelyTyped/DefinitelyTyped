/// <reference types="cordova"/>

cordova.plugins.barcodeScanner.scan(
    function (result) {
        alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
    },
    function (error) {
        alert("Scanning failed: " + error);
    },
    {
        "preferFrontCamera" : true, // iOS and Android
        "showFlipCameraButton" : true, // iOS and Android
        "prompt" : "Place a barcode inside the scan area", // supported on Android only
        "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
    }
);


cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
    alert("encode success: " + success);
    }, function(fail) {
    alert("encoding failed: " + fail);
    }
);