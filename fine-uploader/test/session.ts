function sessionTest() {
    interface CustomHeader {
        customHeader: string;
    }

    interface CustomParam {
        customParam: boolean;
    }

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
