/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-aes-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'AES',

        setUp: function () {
            this.data = {
                key: C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'),
                iv: C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f')
            };
        },

        profileSinglePartMessage: function () {
            var singlePartMessage = '';
            for (var i = 0; i < 500; i++) {
                singlePartMessage += '12345678901234567890123456789012345678901234567890';
            }

            C.algo.AES.createEncryptor(this.data.key, { iv: this.data.iv }).finalize(singlePartMessage) + '';
        },

        profileMultiPartMessage: function () {
            var aes = C.algo.AES.createEncryptor(this.data.key, { iv: this.data.iv });
            for (var i = 0; i < 500; i++) {
                aes.process('12345678901234567890123456789012345678901234567890') + '';
            }
            aes.finalize() + '';
        }
    };
}, '$Rev$');
