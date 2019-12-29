YUI.add('algo-md5-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'MD5',

        testVector1: function () {
            Y.Assert.areEqual('d41d8cd98f00b204e9800998ecf8427e', C.MD5('').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('0cc175b9c0f1b6a831c399e269772661', C.MD5('a').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('900150983cd24fb0d6963f7d28e17f72', C.MD5('abc').toString());
        },

        testVector4: function () {
            Y.Assert.areEqual('f96b697d7cb7938d525a2f31aaf161d0', C.MD5('message digest').toString());
        },

        testVector5: function () {
            Y.Assert.areEqual('c3fcd3d76192e4007dfb496cca67e13b', C.MD5('abcdefghijklmnopqrstuvwxyz').toString());
        },

        testVector6: function () {
            Y.Assert.areEqual('d174ab98d277d9f5a5611c2c9f419d9f', C.MD5('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString());
        },

        testVector7: function () {
            Y.Assert.areEqual('57edf4a22be3c955ac49da2e2107b67a', C.MD5('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString());
        },

        testUpdateAndLongMessage: function () {
            var md5 = C.algo.MD5.create();
            for (var i = 0; i < 100; i++) {
                md5.update('12345678901234567890123456789012345678901234567890');
            }

            Y.Assert.areEqual('7d017545e0268a6a12f2b507871d0429', md5.finalize().toString());
        },

        testClone: function () {
            var md5 = C.algo.MD5.create();

            Y.Assert.areEqual(C.MD5('a').toString(), md5.update('a').clone().finalize().toString());
            Y.Assert.areEqual(C.MD5('ab').toString(), md5.update('b').clone().finalize().toString());
            Y.Assert.areEqual(C.MD5('abc').toString(), md5.update('c').clone().finalize().toString());
        },

        testInputIntegrity: function () {
            var message = C.lib.WordArray.create([0x12345678]);

            var expected = message.toString();

            C.MD5(message);

            Y.Assert.areEqual(expected, message.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.MD5.create().finalize('').toString(), C.MD5('').toString());
        },

        testHmacHelper: function () {
            Y.Assert.areEqual(C.algo.HMAC.create(C.algo.MD5, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString(), C.HmacMD5('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString());
        }
    }));
}, '$Rev$');
