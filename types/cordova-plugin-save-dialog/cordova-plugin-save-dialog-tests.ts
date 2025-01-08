/// <reference types="cordova" />

const blob = new Blob(["hello", "world"]);

// $ExceptType Promise<string>
cordova.plugins.saveDialog.saveFile(blob);

// $ExceptType Promise<string>
cordova.plugins.saveDialog.saveFile(blob, "filename");
