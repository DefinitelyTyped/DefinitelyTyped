

var app: any;

app.controller('MainCtrl', function ($kookies: angular.kookies.IKookiesService) {
    // 1. create session cookie
    $kookies.set('name', 'value');

    // 2. create expiring cookie
    $kookies.set('name', 'value', {expires: 7});

    // 3. Create expiring cookie, valid across entire site
    $kookies.set('name', 'value', {expires: 7, path: '/'});
    
    $kookies.set('name', 'value');

    // read cookie
    $kookies.get('name'); // "value"
    $kookies.get('nothing'); // undefined

    // read all available cookies
    $kookies.get();
    
    $kookies.set('name', 'value');

    // delete cookie
    $kookies.remove('name'); // true
    $kookies.remove('nothing'); // false
    
    $kookies.set('name', 'value', {path: '/'});

    $kookies.remove('name'); // false
    // use the same options (path, domain) as what the cookie was written with
    $kookies.remove('name', {path: '/'}); // true
    
    var foo: number = $kookies.get('foo', Number);
});

app.config(['$kookiesProvider', 
    function ($kookiesProvider: angular.kookies.IKookiesProvider) {
        $kookiesProvider.config.raw = true;
        $kookiesProvider.config.json = true;
    }
]);
