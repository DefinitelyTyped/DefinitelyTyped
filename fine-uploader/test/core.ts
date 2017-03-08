function testCore() {
    const button: HTMLElement = new HTMLButtonElement();

    const config: qq.BasicOptions = {
        autoUpload: true,
        button,
        debug: true,
        disableCancelForFormUploads: true,
        formatFileName: (rawFileName: string) => {
            return "hi";
        },
        maxConnections: 10,
        multiple: true
    };

    const uploader = new qq.FineUploaderBasic(config);
}
