import Cookies = require("js-cookie");
// Create a cookie, valid across the entire site
Cookies.set('name', 'value');

// Create a cookie that expires 7 days from now, valid across the entire site
Cookies.set('name', 'value', { expires: 7 });

// Create an expiring cookie, valid to the path of the current page
Cookies.set('name', 'value', { expires: 7, path: '' });

// Read cookie
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined

// Read all available cookies
Cookies.get(); // => { name: 'value' }

// Delete cookie
Cookies.remove('name');

// Delete a cookie valid to the path of the current page
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // fail!
Cookies.remove('name', { path: '' }); // removed!

// Assign the js-cookie api to a different variable
// and restore the original "window.Cookies"
var Cookies2 = Cookies.noConflict();
Cookies2.set('name', 'value');

// When creating a cookie you can pass an Array or Object Literal
// instead of a string in the value. If you do so, js-cookie will
// store the string representation of the object according to JSON.stringify
Cookies.set('name', { foo: 'bar' });

// When reading a cookie with the Cookies.getJSON api, you receive
// the parsed representation of the string stored in the cookie
// according to JSON.parse
Cookies.getJSON('name'); // => { foo: 'bar' }

// Define the domain where the cookie is available
Cookies.set('name', 'value', { domain: 'sub.domain.com' });
Cookies.get('name'); // => undefined (need to read at 'sub.domain.com')

// Indicate that the cookie transmission requires (https)
Cookies.set('name', 'value', { secure: true });
Cookies.get('name'); // => 'value'
Cookies.remove('name', { secure: true });

document.cookie = 'escaped=%u5317';
document.cookie = 'default=%E5%8C%97';
var cookies = Cookies.withConverter(function (value, name) {
    if ( name === 'escaped' ) {
        return decodeURIComponent(value);
    }
});

cookies.get('escaped'); // 北
cookies.get('default'); // 北
cookies.get(); // { escaped: '北', default: '北' }

// To remove, set or declare defaults to the path of the
// current page, you just need to declare it as empty:
Cookies.defaults.path = '';

// Deleting the property will fallback to the path: / internally:
delete Cookies.defaults.path;
