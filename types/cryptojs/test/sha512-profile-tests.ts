/// <reference types="yui" />


YUI.add('algo-sha512-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'SHA512',

        profileSinglePartMessage: function () {
            var singlePartMessage = '';
            for (var i = 0; i < 500; i++) {
                singlePartMessage += '12345678901234567890123456789012345678901234567890';
            }

            C.algo.SHA512.create().finalize(singlePartMessage) + '';
        },

        profileMultiPartMessage: function () {
            var sha512 = C.algo.SHA512.create();
            for (var i = 0; i < 500; i++) {
                sha512.update('12345678901234567890123456789012345678901234567890');
            }
            sha512.finalize() + '';
        }
    };
}, '$Rev$');
