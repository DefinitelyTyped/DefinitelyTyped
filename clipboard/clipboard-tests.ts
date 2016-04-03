/// <reference path="clipboard.d.ts" />

var cb1 = new clipboard.Clipboard('.btn');
var cb2 = new clipboard.Clipboard('.btn', {
    action: elem => 'copy'
});
var cb3 = new clipboard.Clipboard('.btn', {
    text: elem => null
});
var cb4 = new clipboard.Clipboard('.btn', {
    target: elem => null
});
var cb5 = new clipboard.Clipboard('.btn', {
    action: elem => 'copy',
    target: elem => null
});

cb1.destroy();

cb2.on('success', function(e) { });
cb2.on('error', function(e) { });

