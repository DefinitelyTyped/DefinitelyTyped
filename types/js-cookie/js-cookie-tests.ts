import Cookies = require('js-cookie');

Cookies.set('name', 'value'); // $ExpectType string | undefined
Cookies.set('name', 'value', { expires: 7 }); // $ExpectType string | undefined
Cookies.set('name', 'value', { expires: new Date() }); // $ExpectType string | undefined
Cookies.set('name', 'value', { expires: 7, path: '' }); // $ExpectType string | undefined
Cookies.set('name', 'value', { expires: 7, path: '', domain: '' }); // $ExpectType string | undefined
Cookies.set('name', 'value', { expires: 7, path: '', domain: '', secure: true }); // $ExpectType string | undefined
Cookies.set('name', 'value', { secure: true }); // $ExpectType string | undefined
Cookies.set('name', 'value', { domain: '' }); // $ExpectType string | undefined
Cookies.set('name', 'value', { path: '' }); // $ExpectType string | undefined
Cookies.set('name', 'value', { sameSite: 'strict' }); // $ExpectType string | undefined
Cookies.set('name', 'value', { custom: 'property' }); // $ExpectType string | undefined

Cookies.get('name'); // $ExpectType string | undefined
Cookies.get(); // $ExpectType { [key: string]: string; }

Cookies.remove('name');
Cookies.remove('name', { path: '' });

Cookies.noConflict!(); // $ExpectType CookiesStatic<string>

Cookies.attributes; // $ExpectType CookieAttributes
Cookies.converter; // $ExpectType Required<Converter<string>>

Cookies.withAttributes({ expires: 7 }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ expires: new Date() }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ expires: 7, path: '' }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ expires: 7, path: '', domain: '' }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ expires: 7, path: '', domain: '', secure: true }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ secure: true }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ domain: '' }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ path: '' }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ sameSite: 'strict' }); // $ExpectType CookiesStatic<string>
Cookies.withAttributes({ custom: 'property' }); // $ExpectType CookiesStatic<string>

Cookies.withConverter<object>({
    // $ExpectType (value: string | object, name: string) => string
    write(value, name) {
        return encodeURIComponent(value as string).replace(
            /%(23|24|26|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent,
        );
    },
    // $ExpectType (value: string, name: string) => string
    read(value, name) {
        return value.replace(/\+/g, ' ').replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    },
});

// $ExpectType CookiesStatic<string>
Cookies.withAttributes({
    path: '/',
    secure: true,
});
// $ExpectType CookiesStatic<string>
Cookies.withConverter({
    // $ExpectType (value: string, name: string) => string
    read: (value, name) => {
        return unescape(value);
    },
});
// $ExpectType CookiesStatic<number>
const api = Cookies.withConverter({
    // $ExpectType (value: string, name: string) => number
    read: (value, name) => {
        return Number(value);
    },
});
api.set('key', 'value'); // $ExpectType string | undefined
api.set('key', 1); // $ExpectType string | undefined

// $ExpectType CookiesStatic<number>
Cookies.withConverter({
    // $ExpectType (value: string, name: string) => string | number
    read: (value, name) => {
        if (name === 'special') {
            return Number(value);
        }
        return Cookies.converter.read(value, name);
    },
});
// $ExpectType CookiesStatic<string>
Cookies.withConverter({
    // $ExpectType (value: string, name: string) => string
    write: (value, name) => {
        return value.toUpperCase();
    },
});
// $ExpectType CookiesStatic<number>
Cookies.withConverter<number>({
    // $ExpectType (value: string | number, name: string) => string
    write: (value, name) => {
        return value.toString();
    },
});

interface Person {
    name: string;
}

// $ExpectType CookiesStatic<Person>
Cookies.withConverter<Person>({
    // $ExpectType (value: string | Person, name: string) => string
    write: (value, name) => {
        return JSON.stringify(value);
    },
    // $ExpectType (value: string, name: string) => Person
    read: (value, name) => {
        return JSON.parse(value) as Person;
    },
});
