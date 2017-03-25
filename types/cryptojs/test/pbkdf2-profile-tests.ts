/// <reference types="yui" />


YUI.add('algo-pbkdf2-profile', function (Y) {
    var C = CryptoJS;

    //Profiler is removed in YUI 3.10.2
    //@see http://www.yuiblog.com/blog/2013/06/04/yui-3-10-2-released/
    //Y.Profiler.add({
    var obj = {
        name: 'PBKDF2',

        profileKeySize256Iterations20: function () {
            C.algo.PBKDF2.create({ keySize: 256/32, iterations: 20 }).compute('password', 'ATHENA.MIT.EDUraeburn');
        }
    };
}, '$Rev$');
