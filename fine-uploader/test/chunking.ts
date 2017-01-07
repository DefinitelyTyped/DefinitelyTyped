/// <reference path="../index.d.ts" />

function chunkingTest() {

    const chunkingOptions: qq.ChunkingOptions = {
        concurrent: {
            enabled: false
        },
        enabled: true,
        mandatory: true,
        partSize: 1000000,
        paramNames: {
            chunkSize: "chunkSize",
            partByteOffset: "partByteOffset",
            partIndex: "partIndex",
            totalParts: "totalParts"
        },
        success: {
            endpoint: "/some/web/endpoint/yaySuccesss"
        }
    };

    const config: qq.BasicOptions = {
        chunking: chunkingOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
