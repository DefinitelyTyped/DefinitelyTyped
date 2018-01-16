/// <reference types="yui" />


YUI.add('pad-zeropadding-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'ZeroPadding',

        testPad: function () {
            var data = C.lib.WordArray.create([0xdddddd00], 3);
            C.pad.ZeroPadding.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00, 0x00000000]).toString(), data.toString());
        },

        testPadClamp: function () {
            var data = C.lib.WordArray.create([0xdddddddd, 0xdddddddd], 3);
            C.pad.ZeroPadding.pad(data, 2);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00, 0x00000000]).toString(), data.toString());
        },

        testUnpad: function () {
            var data = C.lib.WordArray.create([0xdddddd00, 0x00000000]);
            C.pad.ZeroPadding.unpad(data);

            Y.Assert.areEqual(C.lib.WordArray.create([0xdddddd00], 3).toString(), data.toString());
        }
    }));
}, '$Rev$');
