import ouibounce = require('ouibounce');

ouibounce(document.getElementById('test-item'));

ouibounce(false, {
    callback: () => console.log('test')
});

const bounce = ouibounce(document.getElementById('test-item'), {
    aggressive: true,
    sensitivity: 50,
    timer: 2000,
    delay: 500,
    cookieExpire: 30,
    cookieDomain: 'example.com',
    cookieName: 'cookie',
    sitewide: false
});

bounce.fire();
bounce.disable();

bounce.disable({
    cookieExpire: 10,
    cookieDomain: 'example.com',
    cookieName: 'cookie',
    sitewide: true
});
