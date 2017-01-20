/// <reference path="../index.d.ts" />

function retryTest() {

    const retryOptions: qq.RetryOptions = {
        autoAttemptDelay: 1,
        enableAuto: true,
        maxAutoAttempts: 32,
        preventRetryResponseProperty: "preventRetry"
    };

    const config: qq.BasicOptions = {
        retry: retryOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}