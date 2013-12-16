/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('mode-ecb-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'ECB',

        setUp: function () {
            this.data = {};

            this.data.message = C.lib.WordArray.create([
                0x00010203, 0x04050607, 0x08090a0b, 0x0c0d0e0f,
                0x10111213, 0x14151617, 0x18191a1b, 0x1c1d1e1f
            ]);
            this.data.key = C.lib.WordArray.create([0x20212223, 0x24252627, 0x28292a2b, 0x2c2d2e2f]);
        },

        testEncryptor: function () {
            // Compute expected
            var expected = this.data.message.clone();
            var aes = C.algo.AES.createEncryptor(this.data.key);
            aes.encryptBlock(expected.words, 0);
            aes.encryptBlock(expected.words, 4);

            // Compute actual
            var actual = C.AES.encrypt(this.data.message, this.data.key, { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext;

            // Test
            Y.Assert.areEqual(expected.toString(), actual.toString());
        },

        testDecryptor: function () {
            var encrypted = C.AES.encrypt(this.data.message, this.data.key, { mode: C.mode.ECB, padding: C.pad.NoPadding });
            var decrypted = C.AES.decrypt(encrypted, this.data.key, { mode: C.mode.ECB, padding: C.pad.NoPadding });

            Y.Assert.areEqual(this.data.message.toString(), decrypted.toString());
        }
    }));
}, '$Rev$');
