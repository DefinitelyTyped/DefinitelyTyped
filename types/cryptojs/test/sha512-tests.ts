/// <reference types="yui" />


YUI.add('algo-sha512-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'SHA512',

        testVector1: function () {
            Y.Assert.areEqual('cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e', C.SHA512('').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6', C.SHA512('The quick brown fox jumps over the lazy dog').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('91ea1245f20d46ae9a037a989f54f1f790f0a47607eeb8a14d12890cea77a1bbc6c7ed9cf205e67b7f2b8fd4c7dfd3a7a8617e45f3c463d481c7e586c39ac1ed', C.SHA512('The quick brown fox jumps over the lazy dog.').toString());
        },

        testUpdateAndLongMessage: function () {
            var sha512 = C.algo.SHA512.create();
            for (var i = 0; i < 100; i++) {
                sha512.update('12345678901234567890123456789012345678901234567890');
            }

            Y.Assert.areEqual('9bc64f37c54606dff234b6607e06683c7ba248558d0ec74a11525d9f59e0be566489cc9413c00ca5e9db705fc52ba71214bcf118f65072fe284af8f8cf9500af', sha512.finalize().toString());
        },

        testClone: function () {
            var sha512 = C.algo.SHA512.create();

            Y.Assert.areEqual(C.SHA512('a').toString(), sha512.update('a').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA512('ab').toString(), sha512.update('b').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA512('abc').toString(), sha512.update('c').clone().finalize().toString());
        },

        testInputIntegrity: function () {
            var message = C.lib.WordArray.create([0x12345678]);

            var expected = message.toString();

            C.SHA512(message);

            Y.Assert.areEqual(expected, message.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.SHA512.create().finalize('').toString(), C.SHA512('').toString());
        },

        testHmacHelper: function () {
            Y.Assert.areEqual(C.algo.HMAC.create(C.algo.SHA512, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString(), C.HmacSHA512('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString());
        }
    }));
}, '$Rev$');
