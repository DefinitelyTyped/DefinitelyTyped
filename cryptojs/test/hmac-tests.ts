/// <reference types="yui" />


YUI.add('algo-hmac-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'HMAC',

        testVector1: function () {
            Y.Assert.areEqual('9294727a3638bb1c13f48ef8158bfc9d', C.HmacMD5('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('750c783e6ab0b503eaa86e310a5db738', C.HmacMD5('what do ya want for nothing?', 'Jefe').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('56be34521d144c88dbb8c733f0e8b3f6', C.HmacMD5(C.enc.Hex.parse('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'), C.enc.Hex.parse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toString());
        },

        testUpdate: function () {
            var hmac = C.algo.HMAC.create(C.algo.MD5, C.enc.Hex.parse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
            hmac.update(C.enc.Hex.parse('dddddddddddddddddddddddddddddddddddd'));
            hmac.update(C.enc.Hex.parse('dddddddddddddddddddddddddddddddd'));
            hmac.update(C.enc.Hex.parse('dddddddddddddddddddddddddddddddd'));

            Y.Assert.areEqual(C.HmacMD5(C.enc.Hex.parse('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'), C.enc.Hex.parse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toString(), hmac.finalize().toString());
        },

        testInputIntegrity: function () {
            var message = C.lib.WordArray.create([0x12345678]);
            var key = C.lib.WordArray.create([0x12345678]);

            var expectedMessage = message.toString();
            var expectedKey = key.toString();

            C.HmacMD5(message, key);

            Y.Assert.areEqual(expectedMessage, message.toString());
            Y.Assert.areEqual(expectedKey, key.toString());
        },

        testRespectKeySigBytes: function () {
            var key = C.lib.WordArray.random(8);
            key.sigBytes = 4;

            var keyClamped = key.clone();
            keyClamped.clamp();

            Y.Assert.areEqual(CryptoJS.HmacSHA256("Message", keyClamped).toString(), CryptoJS.HmacSHA256("Message", key).toString());
        }
    }));
}, '$Rev$');
