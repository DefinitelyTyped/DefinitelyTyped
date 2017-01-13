/// <reference path="../index.d.ts" />

function deleteFileTest() {
    interface CustomHeader {
        myOption: string;
    }

    interface CustomParams {
        myParam: string;
    }

    let deleteFileOptions: qq.DeleteFileOptions<CustomHeader, CustomParams> = {
        customHeader: {
            myOption: "ewwww"
        },
        enabled: true,
        endpoint: "/my/server/location/delete",
        method: "POST",
        params: {
            myParam: "u"
        }
    };


    let config: qq.BasicOptions = {
        deleteFile: deleteFileOptions
    };

    let uploader = new qq.FineUploaderBasic(config);
}
