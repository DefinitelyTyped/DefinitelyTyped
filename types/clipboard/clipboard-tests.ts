import * as Clipboard from 'clipboard';

var cb1 = new Clipboard('.btn');
var cb2 = new Clipboard(document.getElementById('id'), {
    action: elem => 'copy'
});
var cb3 = new Clipboard(document.querySelectorAll('query'), {
    text: elem => null
});
var cb4 = new Clipboard('.btn', {
    target: elem => null
});
var cb5 = new Clipboard('.btn', {
    action: elem => 'copy',
    target: elem => null
});

cb1.destroy();

cb2.on('success', e => {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});
cb2.on('error', e => { });

