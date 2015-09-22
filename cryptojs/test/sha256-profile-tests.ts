/// <reference path="../../yui/yui.d.ts" />
/// <reference path="../cryptojs.d.ts" />

YUI.add('algo-sha256-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'SHA256',

        profileSinglePartMessage: function () {
            var singlePartMessage = '';
            for (var i = 0; i < 500; i++) {
                singlePartMessage += '12345678901234567890123456789012345678901234567890';
            }

            C.algo.SHA256.create().finalize(singlePartMessage) + '';
        },

        profileMultiPartMessage: function () {
            var sha256 = C.algo.SHA256.create();
            for (var i = 0; i < 500; i++) {
                sha256.update('12345678901234567890123456789012345678901234567890');
            }
            sha256.finalize() + '';
        }
    };
}, '$Rev$');
