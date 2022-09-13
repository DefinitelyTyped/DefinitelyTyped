const config: NeteaseCaptcha.Config = {
    captchaId: 'FAKE ID',
    element: '#captcha',
    mode: 'popup',
    protocol: 'https',
    width: '200px',
    lang: 'en',
    appendTo: '#captcha2',
    onVerify: (error: any, data?: NeteaseCaptcha.Data) => {
        console.log(error, data);
    },
    onClose: () => {},
    enableClose: true,
};

const onLoad: NeteaseCaptcha.onLoad = (instance: NeteaseCaptcha.Instance) => {
    instance.refresh();
    instance.destroy();
    if (instance.popUp) {
        instance.popUp();
    }
    if (instance.close) {
        instance.close();
    }
};

if (window.initNECaptcha) {
    window.initNECaptcha(config, onLoad);
}

const invisibleConfig: NeteaseCaptcha.Config = {
    captchaId: 'FAKE ID',
    element: '#captcha',
    mode: 'bind',
    protocol: 'https',
    width: '200px',
    lang: 'en',
    onVerify: (error: any, data?: NeteaseCaptcha.Data) => {
        console.log(error, data);
    },
    onReady: (instance: NeteaseCaptcha.Instance) => {
        if (instance.verify) {
            instance.verify();
        }
    },
};

if (window.initNECaptcha) {
    window.initNECaptcha(invisibleConfig, () => {});
}
