/// <reference path="../index.d.ts" />

function pasteTest() {
    const targetElement: HTMLElement = new HTMLElement();

    const pasteOptions: qq.PasteOptions = {
        defaultName: "pasted_image",
        targetElement: targetElement
    }

    const config: qq.BasicOptions = {
        paste: pasteOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
