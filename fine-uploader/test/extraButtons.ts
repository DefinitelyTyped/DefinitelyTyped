/// <reference path="../index.d.ts" />

function extraButtons() {
    type Validation = {
        myValue: string
    };

    let element: HTMLElement = new HTMLElement();

    let extraButtonOptions: qq.ExtraButtonsOptions<Validation> = {
        element: element,
        fileInputTitle: "inputTitle",
        folders: true,
        multiple: false,
        validation: {
            myValue: "ew"
        }
    };

    let config: qq.BasicOptions = {
        extraButtons: extraButtonOptions
    };

    let uploader = new qq.FineUploaderBasic(config);
}
