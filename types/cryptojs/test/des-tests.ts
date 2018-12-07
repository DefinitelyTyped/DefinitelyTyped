/// <reference types="yui" />


YUI.add('algo-des-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'DES',

        testEncrypt1: function () {
            Y.Assert.areEqual('95a8d72813daa94d', C.DES.encrypt(C.enc.Hex.parse('0000000000000000'), C.enc.Hex.parse('8000000000000000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt2: function () {
            Y.Assert.areEqual('1de5279dae3bed6f', C.DES.encrypt(C.enc.Hex.parse('0000000000000000'), C.enc.Hex.parse('0000000000002000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt3: function () {
            Y.Assert.areEqual('1d1ca853ae7c0c5f', C.DES.encrypt(C.enc.Hex.parse('0000000000002000'), C.enc.Hex.parse('0000000000000000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt4: function () {
            Y.Assert.areEqual('ac978c247863388f', C.DES.encrypt(C.enc.Hex.parse('3232323232323232'), C.enc.Hex.parse('3232323232323232'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt5: function () {
            Y.Assert.areEqual('3af1703d76442789', C.DES.encrypt(C.enc.Hex.parse('6464646464646464'), C.enc.Hex.parse('6464646464646464'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt6: function () {
            Y.Assert.areEqual('a020003c5554f34c', C.DES.encrypt(C.enc.Hex.parse('9696969696969696'), C.enc.Hex.parse('9696969696969696'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testDecrypt1: function () {
            Y.Assert.areEqual('0000000000000000', C.DES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('95a8d72813daa94d') }), C.enc.Hex.parse('8000000000000000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt2: function () {
            Y.Assert.areEqual('0000000000000000', C.DES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('1de5279dae3bed6f') }), C.enc.Hex.parse('0000000000002000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt3: function () {
            Y.Assert.areEqual('0000000000002000', C.DES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('1d1ca853ae7c0c5f') }), C.enc.Hex.parse('0000000000000000'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt4: function () {
            Y.Assert.areEqual('3232323232323232', C.DES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('ac978c247863388f') }), C.enc.Hex.parse('3232323232323232'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt5: function () {
            Y.Assert.areEqual('6464646464646464', C.DES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('3af1703d76442789') }), C.enc.Hex.parse('6464646464646464'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt6: function () {
            Y.Assert.areEqual('9696969696969696', C.DES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('a020003c5554f34c') }), C.enc.Hex.parse('9696969696969696'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testMultiPart: function () {
            var des = C.algo.DES.createEncryptor(C.enc.Hex.parse('0123456789abcdef'), { mode: C.mode.ECB, padding: C.pad.NoPadding });
            var ciphertext1 = des.process(C.enc.Hex.parse('001122334455'));
            var ciphertext2 = des.process(C.enc.Hex.parse('66778899aa'));
            var ciphertext3 = des.process(C.enc.Hex.parse('bbccddeeff'));
            var ciphertext4 = des.finalize();

            Y.Assert.areEqual(C.DES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('0123456789abcdef'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString(), ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString());
        },

        testInputIntegrity: function () {
            var message = C.enc.Hex.parse('00112233445566778899aabbccddeeff');
            var key = C.enc.Hex.parse('0001020304050607');
            var iv = C.enc.Hex.parse('08090a0b0c0d0e0f');

            var expectedMessage = message.toString();
            var expectedKey = key.toString();
            var expectedIv = iv.toString();

            C.DES.encrypt(message, key, { iv });

            Y.Assert.areEqual(expectedMessage, message.toString());
            Y.Assert.areEqual(expectedKey, key.toString());
            Y.Assert.areEqual(expectedIv, iv.toString());
        },

        testHelper: function () {
            // Save original random method
            var random = C.lib.WordArray.random;

            // Replace random method with one that returns a predictable value
            C.lib.WordArray.random = function (nBytes) {
                var words: number[] = [];
                for (var i = 0; i < nBytes; i += 4) {
                    words.push(0x11223344);
                }

                return C.lib.WordArray.create(words, nBytes);
            };

            // Test
            Y.Assert.areEqual(C.algo.DES.createEncryptor(C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).finalize('Hi There').toString(), C.DES.encrypt('Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
            Y.Assert.areEqual(C.lib.SerializableCipher.encrypt(C.algo.DES, 'Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString(), C.DES.encrypt('Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
            Y.Assert.areEqual(C.lib.PasswordBasedCipher.encrypt(C.algo.DES, 'Hi There', 'Jefe', { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString(), C.DES.encrypt('Hi There', 'Jefe', { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());

            // Restore random method
            C.lib.WordArray.random = random;
        }
    }));
}, '$Rev$');
