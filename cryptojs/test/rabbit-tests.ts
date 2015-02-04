/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-rabbit-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'Rabbit',

        testVector1: function () {
            Y.Assert.areEqual('02f74a1c26456bf5ecd6a536f05457b1', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('00000000000000000000000000000000')).ciphertext.toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('3d02e0c730559112b473b790dee018df', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('c21fcf3881cd5ee8628accb0a9890df8')).ciphertext.toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('a3a97abb80393820b7e50c4abb53823d', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('1d272c6a2d8e3dfcac14056b78d633a0')).ciphertext.toString());
        },

        testVector4: function () {
            Y.Assert.areEqual('75d186d6bc6905c64f1b2dfdd51f7bfc', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('0053a6f94c9ff24598eb3e91e4378add'), { iv: C.enc.Hex.parse('0d74db42a91077de') }).ciphertext.toString());
        },

        testVector5: function () {
            Y.Assert.areEqual('476e2750c73856c93563b5f546f56a6a', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('0558abfe51a4f74a9df04396e93c8fe2'), { iv: C.enc.Hex.parse('167de44bb21980e7') }).ciphertext.toString());
        },

        testVector6: function () {
            Y.Assert.areEqual('921fcf4983891365a7dc901924b5e24b', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('0a5db00356a9fc4fa2f5489bee4194e7'), { iv: C.enc.Hex.parse('1f86ed54bb2289f0') }).ciphertext.toString());
        },

        testVector7: function () {
            Y.Assert.areEqual('613cb0ba96aff6cacf2a459a102a7f78', C.Rabbit.encrypt(C.enc.Hex.parse('00000000000000000000000000000000'), C.enc.Hex.parse('0f62b5085bae0154a7fa4da0f34699ec'), { iv: C.enc.Hex.parse('288ff65dc42b92f9') }).ciphertext.toString());
        },

        testMultiPart: function () {
            var rabbit = C.algo.Rabbit.createEncryptor(C.enc.Hex.parse('00000000000000000000000000000000'));
            var ciphertext1 = rabbit.process(C.enc.Hex.parse('000000000000'));
            var ciphertext2 = rabbit.process(C.enc.Hex.parse('0000000000'));
            var ciphertext3 = rabbit.process(C.enc.Hex.parse('0000000000'));
            var ciphertext4 = rabbit.finalize();

            Y.Assert.areEqual('02f74a1c26456bf5ecd6a536f05457b1', ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString());
        },

        testInputIntegrity: function () {
            var message = C.enc.Hex.parse('00000000000000000000000000000000');
            var key = C.enc.Hex.parse('00000000000000000000000000000000');
            var iv = C.enc.Hex.parse('0000000000000000');

            var expectedMessage = message.toString();
            var expectedKey = key.toString();
            var expectedIv = iv.toString();

            C.Rabbit.encrypt(message, key, { iv: iv });

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
            Y.Assert.areEqual(C.algo.Rabbit.createEncryptor(C.MD5('Jefe')).finalize('Hi There').toString(), C.Rabbit.encrypt('Hi There', C.MD5('Jefe')).ciphertext.toString());
            Y.Assert.areEqual(C.lib.SerializableCipher.encrypt(C.algo.Rabbit, 'Hi There', C.MD5('Jefe')).toString(), C.Rabbit.encrypt('Hi There', C.MD5('Jefe')).toString());
            Y.Assert.areEqual(C.lib.PasswordBasedCipher.encrypt(C.algo.Rabbit, 'Hi There', 'Jefe').toString(), C.Rabbit.encrypt('Hi There', 'Jefe').toString());

            // Restore random method
            C.lib.WordArray.random = random;
        }
    }));
}, '$Rev$');
