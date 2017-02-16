/// <reference path="../index.d.ts" />

function scalingTest() {
    const scalingOptions: qq.ScalingOptions = {
        customResizer: (blob, height, image, sourceCanvas, targetCanvas, width) => {
            const promise = new Promise<File|Blob>(() => {
                return blob;
            });
            return promise;
        },
        defaultQuality: 10,
        defaultType: "JPEG",
        failureText: "you have failed me for the last time",
        includeExif: true,
        orient: false,
        sendOriginal: true,
        sizes: [
            {
                maxSize: 10,
                name: "i am added to name",
                type: "mime type"
            }
        ]
    };

    const config: qq.BasicOptions = {
        scaling: scalingOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
