import Cookies = require("js-cookie");

Cookies.set('name', 'value');
Cookies.set('name', 'value', { expires: 7 });
Cookies.set('name', 'value', { expires: new Date() });
Cookies.set('name', 'value', { expires: 7, path: '' });
Cookies.set('name', 'value', { expires: 7, path: '', domain: '' });
Cookies.set('name', 'value', { expires: 7, path: '', domain: '', secure: true });
Cookies.set('name', 'value', { secure: true });
Cookies.set('name', 'value', { domain: '' });
Cookies.set('name', 'value', { path: '' });

// $ExpectType string | undefined
Cookies.get('name');

// $ExpectType { [key: string]: string; }
Cookies.get();

Cookies.remove('name');
Cookies.remove('name', { path: '' });

const Cookies2 = Cookies.noConflict();
Cookies2; // $ExpectType CookiesStatic

Cookies.set('name', { foo: 'bar' });

// $ExpectType any
Cookies.getJSON('name');

// $ExpectType { [key: string]: any; }
Cookies.getJSON();

document.cookie = 'escaped=%u5317';
document.cookie = 'default=%E5%8C%97';
const cookies = Cookies.withConverter((value, name) =>
    name === 'escaped' ? decodeURIComponent(value) : value);

cookies.get('escaped');

Cookies.defaults.path = '';
delete Cookies.defaults.path;

const PHPCookies = Cookies.withConverter({
    write(value) {
        return encodeURIComponent(value)
            .replace(/%(23|24|26|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
    },
    read(value) {
        return value
            .replace(/\+/g, ' ')
            .replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
});
