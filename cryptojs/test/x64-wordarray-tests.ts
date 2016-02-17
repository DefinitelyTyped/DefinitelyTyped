/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('x64-wordarray-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'X64WordArray',

        testInit0: function () {
            Y.Assert.areEqual('', C.x64.WordArray.create().toX32().toString());
        },

        testInit1: function () {
            var wordArray = C.x64.WordArray.create([
                C.x64.Word.create(0x00010203, 0x04050607),
                C.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
            ]);

            Y.Assert.areEqual('000102030405060718191a1b1c1d1e1f', wordArray.toX32().toString());
        },

        testInit2: function () {
            var wordArray = C.x64.WordArray.create([
                C.x64.Word.create(0x00010203, 0x04050607),
                C.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
            ], 10);

            Y.Assert.areEqual('00010203040506071819', wordArray.toX32().toString());
        },

        testToX32: function () {
            var wordArray = C.x64.WordArray.create([
                C.x64.Word.create(0x00010203, 0x04050607),
                C.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
            ], 10);

            Y.Assert.areEqual('00010203040506071819', wordArray.toX32().toString());
        }
    }));
}, '$Rev$');
