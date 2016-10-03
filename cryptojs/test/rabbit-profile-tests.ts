/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-rabbit-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'Rabbit',

        setUp: function () {
            this.data = {
                key: C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f')
            };
        },

        profileSinglePartMessage: function () {
            var singlePartMessage = '';
            for (var i = 0; i < 500; i++) {
                singlePartMessage += '12345678901234567890123456789012345678901234567890';
            }

            C.algo.Rabbit.createEncryptor(this.data.key).finalize(singlePartMessage) + '';
        },

        profileMultiPartMessage: function () {
            var rabbit = C.algo.Rabbit.createEncryptor(this.data.key);
            for (var i = 0; i < 500; i++) {
                rabbit.process('12345678901234567890123456789012345678901234567890') + '';
            }
            rabbit.finalize() + '';
        }
    };
}, '$Rev$');
