/// <reference path="../index.d.ts" />

function testCore() {
    let button: HTMLElement = new HTMLButtonElement()

    let config: qq.BasicOptions = {
        autoUpload: true,
        button: button,
        debug: true,
        disableCancelForFormUploads: true,
        formatFileName: (rawFileName: string) => {
            return "hi";
        },
        maxConnections: 10,
        multiple: true
    };

    let uploader = new qq.FineUploaderBasic(config);
}
