/// <reference types="yui" />


YUI.add('algo-evpkdf-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'EvpKDF',

        testVector: function () {
            Y.Assert.areEqual('fdbdf3419fff98bdb0241390f62a9db35f4aba29d77566377997314ebfc709f20b5ca7b1081f94b1ac12e3c8ba87d05a', C.EvpKDF('password', 'saltsalt', { keySize: (256+128)/32 }).toString());
        },

        // There are no official test vectors that I could find, and the EVP implementation is short on comments.
        // Need to use the C code to generate more test vectors.
        // The iteration count in particular needs to be tested.

        testInputIntegrity: function () {
            var password = C.lib.WordArray.create([0x12345678]);
            var salt = C.lib.WordArray.create([0x12345678]);

            var expectedPassword = password.toString();
            var expectedSalt = salt.toString();

            C.EvpKDF(password, salt);

            Y.Assert.areEqual(expectedPassword, password.toString());
            Y.Assert.areEqual(expectedSalt, salt.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.EvpKDF.create({ keySize: (256+128)/32 }).compute('password', 'saltsalt').toString(), C.EvpKDF('password', 'saltsalt', { keySize: (256+128)/32 }).toString());
        }
    }));
}, '$Rev$');
