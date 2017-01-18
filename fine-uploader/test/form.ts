/// <reference path="../index.d.ts" />

function formTest() {
    let formOptions: qq.FormOptions = {
        element: "qq-form",
        autoUpload: true,
        interceptSubmit: true
    };

    let config: qq.BasicOptions = {
        form: formOptions
    };

    let uploader = new qq.FineUploaderBasic(config);
}
