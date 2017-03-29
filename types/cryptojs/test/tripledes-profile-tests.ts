/// <reference types="yui" />


YUI.add('algo-tripledes-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'TripleDES',

        setUp: function () {
            this.data = {
                key: C.enc.Hex.parse('0001020304050607'),
                iv: C.enc.Hex.parse('08090a0b0c0d0e0f')
            };
        },

        profileSinglePartMessage: function () {
            var singlePartMessage = '';
            for (var i = 0; i < 100; i++) {
                singlePartMessage += '12345678901234567890123456789012345678901234567890';
            }

            C.algo.TripleDES.createEncryptor(this.data.key, { iv: this.data.iv }).finalize(singlePartMessage) + '';
        },

        profileMultiPartMessage: function () {
            var des = C.algo.TripleDES.createEncryptor(this.data.key, { iv: this.data.iv });
            for (var i = 0; i < 100; i++) {
                des.process('12345678901234567890123456789012345678901234567890') + '';
            }
            des.finalize() + '';
        }
    };
}, '$Rev$');
