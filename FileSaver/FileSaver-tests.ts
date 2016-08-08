/// <reference path="FileSaver.d.ts" />

import {saveAs as importedSaveAs} from "file-saver";
function testImportedSaveAs() {
    var data: Blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    var filename: string = 'hello world.txt';
    var disableAutoBOM = true;

    importedSaveAs(data, filename, disableAutoBOM);
}

/**
 * @summary Test for "saveAs" function.
 */
function testSaveAs() {
    var data: Blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    var filename: string = 'hello world.txt';
    var disableAutoBOM = true;

    saveAs(data, filename, disableAutoBOM);
}
