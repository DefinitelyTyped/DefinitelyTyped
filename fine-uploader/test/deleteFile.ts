function deleteFileTest() {
    interface CustomHeader {
        myOption: string;
    }

    interface CustomParams {
        myParam: string;
    }

    const deleteFileOptions: qq.DeleteFileOptions<CustomHeader, CustomParams> = {
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


    const config: qq.BasicOptions = {
        deleteFile: deleteFileOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
