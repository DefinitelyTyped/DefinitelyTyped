/// <reference path="../index.d.ts" />

function requestTest() {
    type CustomHeader = {
        customHeader: string;
    };

    type CustomParam = {
        customParam: boolean;
    };

    const requestOptions: qq.RequestOptions<CustomHeader, CustomParam> = {
        customHeaders: {
            customHeader: "my custom header hehehehee"
        },
        endpoint: "/my/custom/endpoint",
        filenameParam: "newFilenameParam",
        forceMultipart: true,
        inputName: "filenameParamMapping",
        method: "POST",
        params: {
            customParam: false
        },
        paramsInBody: false,
        uuid: "asdf123456",
        totalFileSizeName: "totalFileSize"
    };

    const config: qq.BasicOptions = {
        request: requestOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}