/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-aes-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'AES',

        testEncryptKeySize128: function () {
            Y.Assert.areEqual('69c4e0d86a7b0430d8cdb78070b4c55a', C.AES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncryptKeySize192: function () {
            Y.Assert.areEqual('dda97ca4864cdfe06eaf70a0ec0d7191', C.AES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncryptKeySize256: function () {
            Y.Assert.areEqual('8ea2b7ca516745bfeafc49904b496089', C.AES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testDecryptKeySize128: function () {
            Y.Assert.areEqual('00112233445566778899aabbccddeeff', C.AES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('69c4e0d86a7b0430d8cdb78070b4c55a') }), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecryptKeySize192: function () {
            Y.Assert.areEqual('00112233445566778899aabbccddeeff', C.AES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('dda97ca4864cdfe06eaf70a0ec0d7191') }), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecryptKeySize256: function () {
            Y.Assert.areEqual('00112233445566778899aabbccddeeff', C.AES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('8ea2b7ca516745bfeafc49904b496089') }), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testMultiPart: function () {
            var aes = C.algo.AES.createEncryptor(C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), { mode: C.mode.ECB, padding: C.pad.NoPadding });
            var ciphertext1 = aes.process(C.enc.Hex.parse('001122334455'));
            var ciphertext2 = aes.process(C.enc.Hex.parse('66778899aa'));
            var ciphertext3 = aes.process(C.enc.Hex.parse('bbccddeeff'));
            var ciphertext4 = aes.finalize();

            Y.Assert.areEqual('69c4e0d86a7b0430d8cdb78070b4c55a', ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString());
        },

        testInputIntegrity: function () {
            var message = C.enc.Hex.parse('00112233445566778899aabbccddeeff');
            var key = C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
            var iv = C.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

            var expectedMessage = message.toString();
            var expectedKey = key.toString();
            var expectedIv = iv.toString();

            C.AES.encrypt(message, key, { iv: iv });

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
            Y.Assert.areEqual(C.algo.AES.createEncryptor(C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).finalize('Hi There').toString(), C.AES.encrypt('Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
            Y.Assert.areEqual(C.lib.SerializableCipher.encrypt(C.algo.AES, 'Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString(), C.AES.encrypt('Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
            Y.Assert.areEqual(C.lib.PasswordBasedCipher.encrypt(C.algo.AES, 'Hi There', 'Jefe', { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString(), C.AES.encrypt('Hi There', 'Jefe', { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());

            // Restore random method
            C.lib.WordArray.random = random;
        }
    }));
}, '$Rev$');
