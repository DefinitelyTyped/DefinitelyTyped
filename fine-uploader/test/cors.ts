function corsTest() {
    const corsOptions: qq.CorsOptions = {
        allowXdr: true,
        expected: true,
        sendCredentials: true
    };

    const config: qq.BasicOptions = {
        cors: corsOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
