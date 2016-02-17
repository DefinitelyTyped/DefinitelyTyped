/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('format-openssl-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'OpenSSLFormatter',

        setUp: function () {
            this.data = {};

            this.data.ciphertext = C.lib.WordArray.create([0x00010203, 0x04050607, 0x08090a0b, 0x0c0d0e0f]);
            this.data.salt = C.lib.WordArray.create([0x01234567, 0x89abcdef]);
        },

        testSaltedToString: function () {
            Y.Assert.areEqual(C.enc.Latin1.parse('Salted__').concat(this.data.salt).concat(this.data.ciphertext).toString(C.enc.Base64), C.format.OpenSSL.stringify(C.lib.CipherParams.create({ ciphertext: this.data.ciphertext, salt: this.data.salt })));
        },

        testUnsaltedToString: function () {
            Y.Assert.areEqual(this.data.ciphertext.toString(C.enc.Base64), C.format.OpenSSL.stringify(C.lib.CipherParams.create({ ciphertext: this.data.ciphertext })));
        },

        testSaltedFromString: function () {
            var openSSLStr = C.format.OpenSSL.stringify(C.lib.CipherParams.create({ ciphertext: this.data.ciphertext, salt: this.data.salt }));
            var cipherParams = C.format.OpenSSL.parse(openSSLStr);

            Y.Assert.areEqual(this.data.ciphertext.toString(), cipherParams.ciphertext.toString());
            Y.Assert.areEqual(this.data.salt.toString(), cipherParams.salt.toString());
        },

        testUnsaltedFromString: function () {
            var openSSLStr = C.format.OpenSSL.stringify(C.lib.CipherParams.create({ ciphertext: this.data.ciphertext }));
            var cipherParams = C.format.OpenSSL.parse(openSSLStr);

            Y.Assert.areEqual(this.data.ciphertext.toString(), cipherParams.ciphertext.toString());
        }
    }));
}, '$Rev$');
