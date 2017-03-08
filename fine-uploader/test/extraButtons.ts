function extraButtons() {
    interface Validation {
        myValue: string;
    }

    const element: HTMLElement = new HTMLElement();

    const extraButtonOptions: qq.ExtraButtonsOptions<Validation> = {
        element,
        fileInputTitle: "inputTitle",
        folders: true,
        multiple: false,
        validation: {
            myValue: "ew"
        }
    };

    const config: qq.BasicOptions = {
        extraButtons: extraButtonOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
