const config: NeteaseCaptcha.Config = {
        captchaId: 'FAKE ID',
        element: '#captcha',
        mode: 'popup',
        protocol: 'https',
        width: '200px',
        lang: 'en',
        onVerify: (error: any, data?: NeteaseCaptcha.Data) => {
            console.log(error, data);
        }
    };

const onLoad: NeteaseCaptcha.onLoad = (instance: NeteaseCaptcha.Instance) => {
    instance.refresh();
    instance.destroy();
    if (instance.popUp) {
        instance.popUp();
    }
};

if (window.initNECaptcha) {
    window.initNECaptcha(config, onLoad);
}
