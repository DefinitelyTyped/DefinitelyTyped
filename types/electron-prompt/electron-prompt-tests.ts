import prompt = require('electron-prompt');
import { app, BrowserWindow } from 'electron';

prompt({
    type: 'input',
    inputAttrs: {
        type: 'url',
    },
    label: 'URL:',
    title: 'Prompt example',
    value: 'http://example.org',
}).then(r => {
    r; // $ExpectType string | null
});
app.on('ready', () => prompt({}, new BrowserWindow()));
