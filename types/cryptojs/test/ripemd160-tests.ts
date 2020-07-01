/// <reference types="yui" />


YUI.add('algo-ripemd160-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'RIPEMD160',

        testVector1: function () {
            Y.Assert.areEqual('37f332f68db77bd9d7edd4969571ad671cf9dd3b', C.RIPEMD160('The quick brown fox jumps over the lazy dog').toString());
        },

        testVector2: function () {
            Y.Assert.areEqual('132072df690933835eb8b6ad0b77e7b6f14acad7', C.RIPEMD160('The quick brown fox jumps over the lazy cog').toString());
        },

        testVector3: function () {
            Y.Assert.areEqual('9c1185a5c5e9fc54612808977ee8f548b2258d31', C.RIPEMD160('').toString());
        }
    }));
}, '$Rev$');
