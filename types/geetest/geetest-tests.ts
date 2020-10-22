import Geetest = require('geetest');

const captcha = new Geetest({
    geetest_id: 'xxx',
    geetest_key: 'xxx',
});

captcha.register((err, data) => {
    if (err) {
        return;
    }
    const body = {
        gt: data.geetest_id,
        challenge: data.challenge,
        success: data.success,
    };
});

captcha.register().then((data) => {
    const body = {
        gt: data.geetest_id,
        challenge: data.challenge,
        success: data.success,
    };
}, (err) => {
});

captcha.validate({
    challenge: 'xxx',
    validate: 'xxx',
    seccode: 'xxx',
}, (err, success) => {
});

captcha.validate({
    challenge: 'xxx',
    validate: 'xxx',
    seccode: 'xxx',
}).then((success) => {
}, (err) => {
});
