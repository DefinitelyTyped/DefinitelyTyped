/// <reference types="yui" />


YUI.add('lib-wordarray-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'WordArray',

        testInit0: function () {
            Y.Assert.areEqual('', C.lib.WordArray.create().toString());
        },

        testInit1: function () {
            Y.Assert.areEqual('12345678', C.lib.WordArray.create([0x12345678]).toString());
        },

        testInit2: function () {
            Y.Assert.areEqual('1234', C.lib.WordArray.create([0x12345678], 2).toString());
        },

        testToStringPassedEncoder: function () {
            Y.Assert.areEqual('\x12\x34\x56\x78', C.lib.WordArray.create([0x12345678]).toString(C.enc.Latin1));
        },

        testToStringDefaultEncoder: function () {
            Y.Assert.areEqual('12345678', C.lib.WordArray.create([0x12345678]).toString());
        },

        testConcat3: function () {
            var wordArray1 = C.lib.WordArray.create([0x12345678], 3);
            var wordArray2 = C.lib.WordArray.create([0x12345678], 3);

            Y.Assert.areEqual('123456123456', wordArray1.concat(wordArray2).toString());
            Y.Assert.areEqual('123456123456', wordArray1.toString());
        },

        testConcat4: function () {
            var wordArray1 = C.lib.WordArray.create([0x12345678], 4);
            var wordArray2 = C.lib.WordArray.create([0x12345678], 3);

            Y.Assert.areEqual('12345678123456', wordArray1.concat(wordArray2).toString());
            Y.Assert.areEqual('12345678123456', wordArray1.toString());
        },

        testConcat5: function () {
            var wordArray1 = C.lib.WordArray.create([0x12345678], 5);
            var wordArray2 = C.lib.WordArray.create([0x12345678], 3);

            Y.Assert.areEqual('1234567800123456', wordArray1.concat(wordArray2).toString());
            Y.Assert.areEqual('1234567800123456', wordArray1.toString());
        },

        testConcatLong: function () {
            var wordArray1 = C.lib.WordArray.create();

            var wordArray2 = C.lib.WordArray.create();
            var wordArray3 = C.lib.WordArray.create();
            for (var i = 0; i < 500000; i++) {
                wordArray2.words[i] = i;
                wordArray3.words[i] = i;
            }
            wordArray2.sigBytes = wordArray3.sigBytes = 500000;

            Y.Assert.areEqual(wordArray2.toString() + wordArray3.toString(), wordArray1.concat(wordArray2.concat(wordArray3)).toString());
        },

        testClamp: function () {
            var wordArray = C.lib.WordArray.create([0x12345678, 0x12345678], 3);
            wordArray.clamp();

            Y.Assert.areEqual([0x12345600].toString(), wordArray.words.toString());
        },

        testClone: function () {
            var wordArray = C.lib.WordArray.create([0x12345678]);
            var clone = wordArray.clone();
            clone.words[0] = 0;

            Y.Assert.areNotEqual(wordArray.toString(), clone.toString());
        },

        testRandom: function () {
            Y.Assert.areNotEqual(C.lib.WordArray.random(8).toString(), C.lib.WordArray.random(8).toString());
            Y.Assert.areEqual(8, C.lib.WordArray.random(8).sigBytes);
        }
    }));
}, '$Rev$');
