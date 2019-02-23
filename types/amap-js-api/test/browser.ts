const brwoser = AMap.Browser;

// $ExpectType string
brwoser.ua;

// $ExpectType boolean
brwoser.mobile;

const plat: 'android' | 'ios' | 'windows' | 'mac' | 'other' = brwoser.plat;

// $ExpectType boolean
brwoser.mac;

// $ExpectType boolean
brwoser.windows;

// $ExpectType boolean
brwoser.ios;

// $ExpectType boolean
brwoser.iPad;

// $ExpectType boolean
brwoser.iPhone;

// $ExpectType boolean
brwoser.android;

// $ExpectType boolean
brwoser.android23;

// $ExpectType boolean
brwoser.chrome;

// $ExpectType boolean
brwoser.firefox;

// $ExpectType boolean
brwoser.safari;

// $ExpectType boolean
brwoser.wechat;

// $ExpectType boolean
brwoser.uc;

// $ExpectType boolean
brwoser.qq;

// $ExpectType boolean
brwoser.ie;

// $ExpectType boolean
brwoser.ie6;

// $ExpectType boolean
brwoser.ie7;

// $ExpectType boolean
brwoser.ie8;

// $ExpectType boolean
brwoser.ie9;

// $ExpectType boolean
brwoser.ie10;

// $ExpectType boolean
brwoser.ie11;

// $ExpectType boolean
brwoser.edge;

// $ExpectType boolean
brwoser.ielt9;

// $ExpectType boolean
brwoser.baidu;

// $ExpectType boolean
brwoser.isLocalStorage;

// $ExpectType boolean
brwoser.isGeolocation;

// $ExpectType boolean
brwoser.mobileWebkit;

// $ExpectType boolean
brwoser.mobileWebkit3d;

// $ExpectType boolean
brwoser.mobileOpera;

// $ExpectType boolean
brwoser.retina;

// $ExpectType boolean
brwoser.touch;

// $ExpectType boolean
brwoser.msPointer;

// $ExpectType boolean
brwoser.pointer;

// $ExpectType boolean
brwoser.webkit;

// $ExpectType boolean
brwoser.ie3d;

// $ExpectType boolean
brwoser.webkit3d;

// $ExpectType boolean
brwoser.gecko3d;

// $ExpectType boolean
brwoser.opera3d;

// $ExpectType boolean
brwoser.any3d;

// $ExpectType boolean
brwoser.isCanvas;

// $ExpectType boolean
brwoser.isSvg;

// $ExpectType boolean
brwoser.isVML;

// $ExpectType boolean
brwoser.isWorker;

// $ExpectType boolean
brwoser.isWebsocket;

// $ExpectType boolean
brwoser.isWebGL();
