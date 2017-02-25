function resumeTest() {
    const resumeOptions: qq.ResumeOptions = {
        recordsExpireIn: 10,
        enabled: true,
        paramNames: {
            resuming: "ew you"
        }
    };

    const config: qq.BasicOptions = {
        resume: resumeOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
