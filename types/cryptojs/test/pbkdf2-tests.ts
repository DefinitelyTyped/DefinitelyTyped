/// <reference types="yui" />


YUI.add('algo-pbkdf2-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'PBKDF2',

        testKeySize128: function () {
            Y.Assert.areEqual('cdedb5281bb2f801565a1122b2563515', C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 128/32 }).toString());
        },

        testKeySize256: function () {
            Y.Assert.areEqual('cdedb5281bb2f801565a1122b25635150ad1f7a04bb9f3a333ecc0e2e1f70837', C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 256/32 }).toString());
        },

        testKeySize128Iterations2: function () {
            Y.Assert.areEqual('01dbee7f4a9e243e988b62c73cda935d', C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 128/32, iterations: 2 }).toString());
        },

        testKeySize256Iterations2: function () {
            Y.Assert.areEqual('01dbee7f4a9e243e988b62c73cda935da05378b93244ec8f48a99e61ad799d86', C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 256/32, iterations: 2 }).toString());
        },

        testKeySize128Iterations1200: function () {
            Y.Assert.areEqual('5c08eb61fdf71e4e4ec3cf6ba1f5512b', C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 128/32, iterations: 1200 }).toString());
        },

        testKeySize256Iterations1200: function () {
            Y.Assert.areEqual('5c08eb61fdf71e4e4ec3cf6ba1f5512ba7e52ddbc5e5142f708a31e2e62b1e13', C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 256/32, iterations: 1200 }).toString());
        },

        testKeySize128Iterations5: function () {
            Y.Assert.areEqual('d1daa78615f287e6a1c8b120d7062a49', C.PBKDF2('password', C.enc.Hex.parse('1234567878563412'), { keySize: 128/32, iterations: 5 }).toString());
        },

        testKeySize256Iterations5: function () {
            Y.Assert.areEqual('d1daa78615f287e6a1c8b120d7062a493f98d203e6be49a6adf4fa574b6e64ee', C.PBKDF2('password', C.enc.Hex.parse('1234567878563412'), { keySize: 256/32, iterations: 5 }).toString());
        },

        testKeySize128Iterations1200PassPhraseEqualsBlockSize: function () {
            Y.Assert.areEqual('139c30c0966bc32ba55fdbf212530ac9', C.PBKDF2('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'pass phrase equals block size', { keySize: 128/32, iterations: 1200 }).toString());
        },

        testKeySize256Iterations1200PassPhraseEqualsBlockSize: function () {
            Y.Assert.areEqual('139c30c0966bc32ba55fdbf212530ac9c5ec59f1a452f5cc9ad940fea0598ed1', C.PBKDF2('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'pass phrase equals block size', { keySize: 256/32, iterations: 1200 }).toString());
        },

        testKeySize128Iterations1200PassPhraseExceedsBlockSize: function () {
            Y.Assert.areEqual('9ccad6d468770cd51b10e6a68721be61', C.PBKDF2('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'pass phrase exceeds block size', { keySize: 128/32, iterations: 1200 }).toString());
        },

        testKeySize256Iterations1200PassPhraseExceedsBlockSize: function () {
            Y.Assert.areEqual('9ccad6d468770cd51b10e6a68721be611a8b4d282601db3b36be9246915ec82a', C.PBKDF2('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'pass phrase exceeds block size', { keySize: 256/32, iterations: 1200 }).toString());
        },

        testKeySize128Iterations50: function () {
            Y.Assert.areEqual('6b9cf26d45455a43a5b8bb276a403b39', C.PBKDF2(C.enc.Hex.parse('f09d849e'), 'EXAMPLE.COMpianist', { keySize: 128/32, iterations: 50 }).toString());
        },

        testKeySize256Iterations50: function () {
            Y.Assert.areEqual('6b9cf26d45455a43a5b8bb276a403b39e7fe37a0c41e02c281ff3069e1e94f52', C.PBKDF2(C.enc.Hex.parse('f09d849e'), 'EXAMPLE.COMpianist', { keySize: 256/32, iterations: 50 }).toString());
        },

        testInputIntegrity: function () {
            var password = C.lib.WordArray.create([0x12345678]);
            var salt = C.lib.WordArray.create([0x12345678]);

            var expectedPassword = password.toString();
            var expectedSalt = salt.toString();

            C.PBKDF2(password, salt);

            Y.Assert.areEqual(expectedPassword, password.toString());
            Y.Assert.areEqual(expectedSalt, salt.toString());
        },

        testHelper: function () {
            Y.Assert.areEqual(C.algo.PBKDF2.create({ keySize: 128/32 }).compute('password', 'ATHENA.MIT.EDUraeburn').toString(), C.PBKDF2('password', 'ATHENA.MIT.EDUraeburn', { keySize: 128/32 }).toString());
        }
    }));
}, '$Rev$');
