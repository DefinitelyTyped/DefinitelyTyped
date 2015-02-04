/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-sha256-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'SHA256',

        testVector1: function () {
            Y.Assert.areEqual('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', C.SHA256('').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', C.SHA256('a').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad', C.SHA256('abc').toString());
        },

        testVector4: function () {
            Y.Assert.areEqual('f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650', C.SHA256('message digest').toString());
        },

        testVector5: function () {
            Y.Assert.areEqual('71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73', C.SHA256('abcdefghijklmnopqrstuvwxyz').toString());
        },

        testVector6: function () {
            Y.Assert.areEqual('db4bfcbd4da0cd85a60c3c37d3fbd8805c77f15fc6b1fdfe614ee0a7c8fdb4c0', C.SHA256('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString());
        },

        testVector7: function () {
            Y.Assert.areEqual('f371bc4a311f2b009eef952dd83ca80e2b60026c8e935592d0f9c308453c813e', C.SHA256('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString());
        },

        testUpdateAndLongMessage: function () {
            var sha256 = C.algo.SHA256.create();
            for (var i = 0; i < 100; i++) {
                sha256.update('12345678901234567890123456789012345678901234567890');
            }

            Y.Assert.areEqual('f8146961d9b73d8da49ccd526fca65439cdd5b402f76971556d5f52fd129843e', sha256.finalize().toString());
        },

        testClone: function () {
            var sha256 = C.algo.SHA256.create();

            Y.Assert.areEqual(C.SHA256('a').toString(), sha256.update('a').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA256('ab').toString(), sha256.update('b').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA256('abc').toString(), sha256.update('c').clone().finalize().toString());
        },

        testInputIntegrity: function () {
            var message = C.lib.WordArray.create([0x12345678]);

            var expected = message.toString();

            C.SHA256(message);

            Y.Assert.areEqual(expected, message.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.SHA256.create().finalize('').toString(), C.SHA256('').toString());
        },

        testHmacHelper: function () {
            Y.Assert.areEqual(C.algo.HMAC.create(C.algo.SHA256, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString(), C.HmacSHA256('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString());
        }
    }));
}, '$Rev$');
