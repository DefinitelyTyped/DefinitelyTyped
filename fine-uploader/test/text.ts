function textTest() {
    const textOptions: qq.TextOptions = {
        defaultResponseError: "you have failed me for the last time",
        fileInputTitle: "file input title",
        sizeSymbols: ['kb']
    };

    const config: qq.BasicOptions = {
        text: textOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
