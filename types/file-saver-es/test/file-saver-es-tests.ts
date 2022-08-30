import { saveAs, FileSaverOptions } from 'file-saver-es';

/**
 * @summary Test for "saveAs" function.
 */
function testSaveAs() {
    const data: Blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    const filename = 'hello world.txt';
    const options: FileSaverOptions = {
        autoBom: false,
    };

    saveAs(data, filename, options);
}

/**
 * @summary Test for deprecated "saveAs" function.
 */
function testDeprecatedSaveAs() {
    const data: Blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    const filename = 'hello world.txt';
    const disableAutoBOM = true;

    saveAs(data, filename, disableAutoBOM);
}

/**
 * @summary Test for "saveAs" function on the window object.
 */
function testWindowSaveAs() {
    const data: Blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    const filename = 'hello world.txt';
    const options: FileSaverOptions = {
        autoBom: false,
    };

    window.saveAs(data, filename, options);
    window.saveAs.saveAs(data, filename, options);
}

/**
 * @summary Test for "saveAs" function with URL as first argument.
 */
function testUrlSaveAs() {
    const url = 'https://example.com/test.txt';
    const filename = 'hello world.txt';
    const options: FileSaverOptions = {
        autoBom: false,
    };

    window.saveAs(url, filename, options);
    window.saveAs.saveAs(url, filename, options);
}

/**
 * @summary Test for "saveAs" function with the 3rd parameter omitted
 */
function testOptionalOneParamSaveAs() {
    const data: Blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    const filename = 'hello world.txt';
    saveAs(data, filename);
}

/**
 * @summary Test for "saveAs" function with the 2nd and 3rd parameters omitted
 */
function testOptionalTwoParamsSaveAs() {
    const data: Blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    saveAs(data);
}
