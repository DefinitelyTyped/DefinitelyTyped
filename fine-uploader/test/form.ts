function formTest() {
    const formOptions: qq.FormOptions = {
        element: "qq-form",
        autoUpload: true,
        interceptSubmit: true
    };

    const config: qq.BasicOptions = {
        form: formOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
