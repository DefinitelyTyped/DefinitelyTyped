/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-sha1-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'SHA1',

        testVector1: function () {
            Y.Assert.areEqual('da39a3ee5e6b4b0d3255bfef95601890afd80709', C.SHA1('').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', C.SHA1('a').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('a9993e364706816aba3e25717850c26c9cd0d89d', C.SHA1('abc').toString());
        },

        testVector4: function () {
            Y.Assert.areEqual('c12252ceda8be8994d5fa0290a47231c1d16aae3', C.SHA1('message digest').toString());
        },

        testVector5: function () {
            Y.Assert.areEqual('32d10c7b8cf96570ca04ce37f2a19d84240d3a89', C.SHA1('abcdefghijklmnopqrstuvwxyz').toString());
        },

        testVector6: function () {
            Y.Assert.areEqual('761c457bf73b14d27e9e9265c46f4b4dda11f940', C.SHA1('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString());
        },

        testVector7: function () {
            Y.Assert.areEqual('50abf5706a150990a08b2c5ea40fa0e585554732', C.SHA1('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString());
        },

        testUpdateAndLongMessage: function () {
            var sha1 = C.algo.SHA1.create();
            for (var i = 0; i < 100; i++) {
                sha1.update('12345678901234567890123456789012345678901234567890');
            }

            Y.Assert.areEqual('85e4c4b3933d5553ebf82090409a9d90226d845c', sha1.finalize().toString());
        },

        testClone: function () {
            var sha1 = C.algo.SHA1.create();

            Y.Assert.areEqual(C.SHA1('a').toString(), sha1.update('a').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA1('ab').toString(), sha1.update('b').clone().finalize().toString());
            Y.Assert.areEqual(C.SHA1('abc').toString(), sha1.update('c').clone().finalize().toString());
        },

        testInputIntegrity: function () {
            var message = C.lib.WordArray.create([0x12345678]);

            var expected = message.toString();

            C.SHA1(message);

            Y.Assert.areEqual(expected, message.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.SHA1.create().finalize('').toString(), C.SHA1('').toString());
        },

        testHmacHelper: function () {
            Y.Assert.areEqual(C.algo.HMAC.create(C.algo.SHA1, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString(), C.HmacSHA1('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString());
        }
    }));
}, '$Rev$');
