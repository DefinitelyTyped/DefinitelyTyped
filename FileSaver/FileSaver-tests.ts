/// <reference path="FileSaver.d.ts" />

/**
 * @summary Test for "saveAs" function.
 */
function testSaveAs() {
    var data: Blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    var filename: string = 'hello world.txt';
    var disableAutoBOM = true;

    saveAs(data, filename, disableAutoBOM);
}
