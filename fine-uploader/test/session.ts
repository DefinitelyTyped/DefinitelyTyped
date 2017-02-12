/// <reference path="../index.d.ts" />

function sessionTest() {
    type CustomHeader = {
        customHeader: string;
    };

    type CustomParam = {
        customParam: boolean;
    };

    const sessionOptions: qq.SessionOptions<CustomHeader, CustomParam> = {
        customHeaders: {
            customHeader: "customHeader"
        },
        endpoint: "/mysession/endpoint",
        params: {
            customParam: false
        },
        refreshOnReset: false
    };

    const config: qq.BasicOptions = {
        session: sessionOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
