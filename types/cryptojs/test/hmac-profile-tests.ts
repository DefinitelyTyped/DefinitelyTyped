/// <reference types="yui" />


YUI.add('algo-hmac-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'HMAC',

        setUp: function () {
            this.data = {
                key: C.lib.WordArray.random(128/8)
            };
        },

        profileSinglePartMessage: function () {
            var singlePartMessage = '';
            for (var i = 0; i < 500; i++) {
                singlePartMessage += '12345678901234567890123456789012345678901234567890';
            }

            C.algo.HMAC.create(C.algo.MD5, this.data.key).finalize(singlePartMessage) + '';
        },

        profileMultiPartMessage: function () {
            var hmac = C.algo.HMAC.create(C.algo.MD5, this.data.key);
            for (var i = 0; i < 500; i++) {
                hmac.update('12345678901234567890123456789012345678901234567890');
            }
            hmac.finalize() + '';
        }
    };
}, '$Rev$');
