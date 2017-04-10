/// <reference types="yui" />


YUI.add('algo-sha384-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'SHA384',

        testVector1: function () {
            Y.Assert.areEqual('38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b', C.SHA384('').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1', C.SHA384('The quick brown fox jumps over the lazy dog').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('ed892481d8272ca6df370bf706e4d7bc1b5739fa2177aae6c50e946678718fc67a7af2819a021c2fc34e91bdb63409d7', C.SHA384('The quick brown fox jumps over the lazy dog.').toString());
        },

        testUpdateAndLongMessage: function () {
            var sha384 = C.algo.SHA384.create();
            for (var i = 0; i < 100; i++) {
                sha384.update('12345678901234567890123456789012345678901234567890');
            }

            Y.Assert.areEqual('297a519246d6f639a4020119e1f03fc8d77171647b2ff75ea4125b7150fed0cdcc93f8dca1c3c6a624d5e88d780d82cd', sha384.finalize().toString());
        },

        testClone: function () {
            var sha384 = C.algo.SHA384.create();

            Y.Assert.areEqual(C.SHA384('a').toString(), sha384.update('a').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA384('ab').toString(), sha384.update('b').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA384('abc').toString(), sha384.update('c').clone().finalize().toString());
        },

        testInputIntegrity: function () {
            var message = C.lib.WordArray.create([0x12345678]);

            var expected = message.toString();

            C.SHA384(message);

            Y.Assert.areEqual(expected, message.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.SHA384.create().finalize('').toString(), C.SHA384('').toString());
        },

        testHmacHelper: function () {
            Y.Assert.areEqual(C.algo.HMAC.create(C.algo.SHA384, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString(), C.HmacSHA384('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString());
        }
    }));
}, '$Rev$');
