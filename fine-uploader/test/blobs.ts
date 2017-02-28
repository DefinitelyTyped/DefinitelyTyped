function testBlob() {
    const config: qq.BasicOptions = {
        blobs: {
            defaultName: "hi.png"
        }
    };

    const uploader = new qq.FineUploaderBasic(config);
}
