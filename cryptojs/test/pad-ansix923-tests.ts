/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('pad-ansix923-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'AnsiX923',

        testPad: function () {
            var data = C.lib.WordArray.create([0xdddddd00], 3);
            C.pad.AnsiX923.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00, 0x00000005]).toString(), data.toString());
        },

        testPadClamp: function () {
            var data = C.lib.WordArray.create([0xdddddddd, 0xdddddddd], 3);
            C.pad.AnsiX923.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00, 0x00000005]).toString(), data.toString());
        },

        testUnpad: function () {
            var data = C.lib.WordArray.create([0xdddddd00, 0x00000005]);
            C.pad.AnsiX923.unpad(data);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00], 3).toString(), data.toString());
        }
    }));
}, '$Rev$');
