/// <reference path="clipboard-js.d.ts" />

var cb1 = new clipboardjs.Clipboard('.btn');
var cb2 = new clipboardjs.Clipboard('.btn', {
    action: elem => 'copy'
});
var cb3 = new clipboardjs.Clipboard('.btn', {
    action: elem => 'copy',
    text: elem => null
});
var cb4 = new clipboardjs.Clipboard('.btn', {
    action: elem => 'copy',
    target: elem => null
});

cb1.destroy();

cb2.on('success', function(e) { });
cb2.on('error', function(e) { });

