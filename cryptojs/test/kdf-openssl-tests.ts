/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('kdf-openssl-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'OpenSSLKdf',

        testVector: function () {
            var derivedParams = C.kdf.OpenSSL.execute('password', 256/32, 128/32, C.enc.Hex.parse('0a9d8620cf7219f1'));

            Y.Assert.areEqual('50f32e0ec9408e02ff42364a52aac95c3694fc027256c6f488bf84b8e60effcd', derivedParams.key.toString());
            Y.Assert.areEqual('81381e39b94fd692dff7e2239a298cb6', derivedParams.iv.toString());
            Y.Assert.areEqual('0a9d8620cf7219f1', derivedParams.salt.toString());
        }
    }));
}, '$Rev$');
