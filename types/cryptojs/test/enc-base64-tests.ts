/// <reference types="yui" />


YUI.add('enc-base64-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'Base64',

        testStringify0: function () {
            Y.Assert.areEqual('', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 0)));
        },

        testStringify1: function () {
            Y.Assert.areEqual('Zg==', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 1)));
        },

        testStringify2: function () {
            Y.Assert.areEqual('Zm8=', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 2)));
        },

        testStringify3: function () {
            Y.Assert.areEqual('Zm9v', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 3)));
        },

        testStringify4: function () {
            Y.Assert.areEqual('Zm9vYg==', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 4)));
        },

        testStringify5: function () {
            Y.Assert.areEqual('Zm9vYmE=', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 5)));
        },

        testStringify6: function () {
            Y.Assert.areEqual('Zm9vYmFy', C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62, 0x61720000], 6)));
        },

        testStringify15: function () {
            Y.Assert.areEqual('Pj4+Pz8/Pj4+Pz8/PS8r', C.enc.Base64.stringify(C.lib.WordArray.create([0x3e3e3e3f, 0x3f3f3e3e, 0x3e3f3f3f, 0x3d2f2b00], 15)));
        },

        testParse0: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 0).toString(), C.enc.Base64.parse('').toString());
        },

        testParse1: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 1).toString(), C.enc.Base64.parse('Zg==').toString());
        },

        testParse2: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 2).toString(), C.enc.Base64.parse('Zm8=').toString());
        },

        testParse3: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 3).toString(), C.enc.Base64.parse('Zm9v').toString());
        },

        testParse4: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 4).toString(), C.enc.Base64.parse('Zm9vYg==').toString());
        },

        testParse5: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 5).toString(), C.enc.Base64.parse('Zm9vYmE=').toString());
        },

        testParse6: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x666f6f62, 0x61720000], 6).toString(), C.enc.Base64.parse('Zm9vYmFy').toString());
        },

        testParse15: function () {
            Y.Assert.areEqual(C.lib.WordArray.create([0x3e3e3e3f, 0x3f3f3e3e, 0x3e3f3f3f, 0x3d2f2b00], 15).toString(), C.enc.Base64.parse('Pj4+Pz8/Pj4+Pz8/PS8r').toString());
        }
    }));
}, '$Rev$');
