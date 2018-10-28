/// <reference types="yui" />


YUI.add('algo-tripledes-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'TripleDES',

        testEncrypt1: function () {
            Y.Assert.areEqual('95a8d72813daa94d', C.TripleDES.encrypt(C.enc.Hex.parse('0000000000000000'), C.enc.Hex.parse('800101010101010180010101010101018001010101010101'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt2: function () {
            Y.Assert.areEqual('869efd7f9f265a09', C.TripleDES.encrypt(C.enc.Hex.parse('0000000000000000'), C.enc.Hex.parse('010101010101010201010101010101020101010101010102'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt3: function () {
            Y.Assert.areEqual('95f8a5e5dd31d900', C.TripleDES.encrypt(C.enc.Hex.parse('8000000000000000'), C.enc.Hex.parse('010101010101010101010101010101010101010101010101'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testEncrypt4: function () {
            Y.Assert.areEqual('166b40b44aba4bd6', C.TripleDES.encrypt(C.enc.Hex.parse('0000000000000001'), C.enc.Hex.parse('010101010101010101010101010101010101010101010101'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
        },

        testDecrypt1: function () {
            Y.Assert.areEqual('0000000000000000', C.TripleDES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('95a8d72813daa94d') }), C.enc.Hex.parse('800101010101010180010101010101018001010101010101'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt2: function () {
            Y.Assert.areEqual('0000000000000000', C.TripleDES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('869efd7f9f265a09') }), C.enc.Hex.parse('010101010101010201010101010101020101010101010102'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt3: function () {
            Y.Assert.areEqual('8000000000000000', C.TripleDES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('95f8a5e5dd31d900') }), C.enc.Hex.parse('010101010101010101010101010101010101010101010101'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testDecrypt4: function () {
            Y.Assert.areEqual('0000000000000001', C.TripleDES.decrypt(C.lib.CipherParams.create({ ciphertext: C.enc.Hex.parse('166b40b44aba4bd6') }), C.enc.Hex.parse('010101010101010101010101010101010101010101010101'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
        },

        testMultiPart: function () {
            var des = C.algo.TripleDES.createEncryptor(C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617'), { mode: C.mode.ECB, padding: C.pad.NoPadding });
            var ciphertext1 = des.process(C.enc.Hex.parse('001122334455'));
            var ciphertext2 = des.process(C.enc.Hex.parse('66778899aa'));
            var ciphertext3 = des.process(C.enc.Hex.parse('bbccddeeff'));
            var ciphertext4 = des.finalize();

            Y.Assert.areEqual(C.TripleDES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString(), ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString());
        },

        testInputIntegrity: function () {
            var message = C.enc.Hex.parse('00112233445566778899aabbccddeeff');
            var key = C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617');
            var iv = C.enc.Hex.parse('08090a0b0c0d0e0f');

            var expectedMessage = message.toString();
            var expectedKey = key.toString();
            var expectedIv = iv.toString();

            C.TripleDES.encrypt(message, key, { iv });

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
            Y.Assert.areEqual(C.algo.TripleDES.createEncryptor(C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).finalize('Hi There').toString(), C.TripleDES.encrypt('Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).ciphertext.toString());
            Y.Assert.areEqual(C.lib.SerializableCipher.encrypt(C.algo.TripleDES, 'Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString(), C.TripleDES.encrypt('Hi There', C.SHA256('Jefe'), { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());
            Y.Assert.areEqual(C.lib.PasswordBasedCipher.encrypt(C.algo.TripleDES, 'Hi There', 'Jefe', { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString(), C.TripleDES.encrypt('Hi There', 'Jefe', { mode: C.mode.ECB, padding: C.pad.NoPadding }).toString());

            // Restore random method
            C.lib.WordArray.random = random;
        }
    }));
}, '$Rev$');
