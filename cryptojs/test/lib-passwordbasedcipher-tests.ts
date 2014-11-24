/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('lib-passwordbasedcipher-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'PasswordBasedCipher',

        testEncrypt: function () {
            // Compute actual
            var actual = C.lib.PasswordBasedCipher.encrypt(C.algo.AES, 'Hello, World!', 'password');

            // Compute expected
            var aes = C.algo.AES.createEncryptor(actual.key, { iv: actual.iv });
            var expected = aes.finalize('Hello, World!');

            Y.Assert.areEqual(expected.toString(), actual.ciphertext.toString());
        },

        testDecrypt: function () {
            var ciphertext = C.lib.PasswordBasedCipher.encrypt(C.algo.AES, 'Hello, World!', 'password');
            var plaintext = C.lib.PasswordBasedCipher.decrypt(C.algo.AES, ciphertext, 'password');

            Y.Assert.areEqual('Hello, World!', plaintext.toString(C.enc.Utf8));
        }
    }));
}, '$Rev$');
