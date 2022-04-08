angular.module('myApp', ['ipCookie'])
    .controller('cookieController', ['ipCookie', function(ipCookie: angular.cookie.CookieService) {
        ipCookie('key', 'value');
        ipCookie('key', { value: 'value'});
        ipCookie('key', [1, 2, 3]);
        
        ipCookie('key', 'value', { expires: 21 });
        ipCookie('key', 'value', { encode: function (value) { return value; } });
        
        ipCookie();
        ipCookie('key');
        ipCookie('key', undefined, {decode: function (value) { return value; }});
        
        ipCookie.remove('key');
        ipCookie.remove('key', { path: '/some/path/' });
        
        var obj: Object = '255';
    }]);
