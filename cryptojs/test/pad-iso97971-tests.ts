/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('pad-iso97971-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'Iso97971',

        testPad1: function () {
            var data = C.lib.WordArray.create([0xdddddd00], 3);
            C.pad.Iso97971.pad(data, 1);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd80]).toString(), data.toString());
        },

        testPad2: function () {
            var data = C.lib.WordArray.create([0xdddddd00], 3);
            C.pad.Iso97971.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd80, 0x00000000]).toString(), data.toString());
        },

        testPadClamp: function () {
            var data = C.lib.WordArray.create([0xdddddddd, 0xdddddddd], 3);
            C.pad.Iso97971.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd80, 0x00000000]).toString(), data.toString());
        },

        testUnpad: function () {
            var data = C.lib.WordArray.create([0xdddddd80, 0x00000000]);
            C.pad.Iso97971.unpad(data);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00], 3).toString(), data.toString());
        }
    }));
}, '$Rev$');
