/// <reference types="yui" />


YUI.add('x64-word-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'X64Word',

        testInit: function () {
            var word = C.x64.Word.create(0x00010203, 0x04050607);

            Y.Assert.areEqual(0x00010203, word.high, 'word.high');
            Y.Assert.areEqual(0x04050607, word.low, 'word.low');
        }

        // testNot: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).not();

            // Y.Assert.areEqual(~0x00010203, word.high, 'word.high');
            // Y.Assert.areEqual(~0x04050607, word.low, 'word.low');
        // },

        // testAnd: function () {
            // var word1 = C.x64.Word.create(0x00010203, 0x04050607);
            // var word2 = C.x64.Word.create(0x18191a1b, 0x1c1d1e1f);
            // var anded = word1.and(word2);

            // Y.Assert.areEqual(0x00010203 & 0x18191a1b, anded.high, 'word.high');
            // Y.Assert.areEqual(0x04050607 & 0x1c1d1e1f, anded.low, 'word.low');
        // },

        // testOr: function () {
            // var word1 = C.x64.Word.create(0x00010203, 0x04050607);
            // var word2 = C.x64.Word.create(0x18191a1b, 0x1c1d1e1f);
            // var ored = word1.or(word2);

            // Y.Assert.areEqual(0x00010203 | 0x18191a1b, ored.high, 'word.high');
            // Y.Assert.areEqual(0x04050607 | 0x1c1d1e1f, ored.low, 'word.low');
        // },

        // testXor: function () {
            // var word1 = C.x64.Word.create(0x00010203, 0x04050607);
            // var word2 = C.x64.Word.create(0x18191a1b, 0x1c1d1e1f);
            // var xored = word1.xor(word2);

            // Y.Assert.areEqual(0x00010203 ^ 0x18191a1b, xored.high, 'word.high');
            // Y.Assert.areEqual(0x04050607 ^ 0x1c1d1e1f, xored.low, 'word.low');
        // },

        // testShiftL25: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).shiftL(25);

            // Y.Assert.areEqual(0x06080a0c, word.high, 'word.high');
            // Y.Assert.areEqual(0x0e000000, word.low, 'word.low');
        // },

        // testShiftL32: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).shiftL(32);

            // Y.Assert.areEqual(0x04050607, word.high, 'word.high');
            // Y.Assert.areEqual(0x00000000, word.low, 'word.low');
        // },

        // testShiftR7: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).shiftR(7);

            // Y.Assert.areEqual(0x00000204, word.high, 'word.high');
            // Y.Assert.areEqual(0x06080A0C, word.low, 'word.low');
        // },

        // testShiftR32: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).shiftR(32);

            // Y.Assert.areEqual(0x00000000, word.high, 'word.high');
            // Y.Assert.areEqual(0x00010203, word.low, 'word.low');
        // },

        // testRotL: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).rotL(25);

            // Y.Assert.areEqual(0x06080a0c, word.high, 'word.high');
            // Y.Assert.areEqual(0x0e000204, word.low, 'word.low');
        // },

        // testRotR: function () {
            // var word = C.x64.Word.create(0x00010203, 0x04050607).rotR(7);

            // Y.Assert.areEqual(0x0e000204, word.high, 'word.high');
            // Y.Assert.areEqual(0x06080a0c, word.low, 'word.low');
        // },

        // testAdd: function () {
            // var word1 = C.x64.Word.create(0x00010203, 0x04050607);
            // var word2 = C.x64.Word.create(0x18191a1b, 0x1c1d1e1f);
            // var added = word1.add(word2);

            // Y.Assert.areEqual(0x181a1c1e, added.high, 'word.high');
            // Y.Assert.areEqual(0x20222426, added.low, 'word.low');
        // }
    }));
}, '$Rev$');
