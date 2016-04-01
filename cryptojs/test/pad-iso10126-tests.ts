/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('pad-iso10126-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'Iso10126',

        setUp: function () {
            this.data = {};

            // Save original random method
            this.data.random = C.lib.WordArray.random;

            // Replace random method with one that returns a predictable value
            C.lib.WordArray.random = function (nBytes) {
                var words: number[] = [];
                for (var i = 0; i < nBytes; i += 4) {
                    words.push(0x11223344);
                }

                return C.lib.WordArray.create(words, nBytes);
            };
        },

        tearDown: function () {
            // Restore random method
            C.lib.WordArray.random = this.data.random;
        },

        testPad: function () {
            var data = C.lib.WordArray.create([0xdddddd00], 3);
            C.pad.Iso10126.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd11, 0x22334405]).toString(), data.toString());
        },

        testPadClamp: function () {
            var data = C.lib.WordArray.create([0xdddddddd, 0xdddddddd], 3);
            C.pad.Iso10126.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd11, 0x22334405]).toString(), data.toString());
        },

        testUnpad: function () {
            var data = C.lib.WordArray.create([0xdddddd11, 0x22334405]);
            C.pad.Iso10126.unpad(data);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00], 3).toString(), data.toString());
        }
    }));
}, '$Rev$');
