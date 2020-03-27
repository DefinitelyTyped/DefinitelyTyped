import prompt = require('electron-prompt');
import { BrowserWindow } from 'electron';

prompt({
    inputAttrs: {
        type: 'url',
    },
    label: 'URL:',
    title: 'Prompt example',
    value: 'http://example.org',
}).then(r => {
    r; // $ExpectType string | null
});

prompt({}, new BrowserWindow());
