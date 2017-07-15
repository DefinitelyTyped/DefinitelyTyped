import * as Clipboard from 'clipboard';

const cb1 = new Clipboard('.btn');
const cb2 = new Clipboard(document.getElementById('id'), {
    action: elem => 'copy'
});
const cb3 = new Clipboard(document.querySelectorAll('query'), {
    text: elem => null
});
const cb4 = new Clipboard('.btn', {
    target: elem => null
});
const cb5 = new Clipboard('.btn', {
    action: elem => 'copy',
    target: elem => null
});

cb1.destroy();
cb1.isSupported();

cb2.on('success', e => {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});
cb2.on('error', e => { });
