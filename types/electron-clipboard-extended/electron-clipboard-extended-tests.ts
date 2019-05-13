import * as Clipboard from 'electron-clipboard-extended';

Clipboard.on('text-changed', () => Clipboard.readText())
    .on('image-chnaged', () => Clipboard.readImage())
    .once('text-changed', () => Clipboard.readText())
    .startWatching();

Clipboard.off('text-changed');
Clipboard.stopWatching();
