/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-sha224-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'SHA224',

        testVector1: function () {
            Y.Assert.areEqual('d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f', C.SHA224('').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525', C.SHA224('The quick brown fox jumps over the lazy dog').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c', C.SHA224('The quick brown fox jumps over the lazy dog.').toString());
        }
    }));
}, '$Rev$');
