import * as electronLocalshortcut from 'electron-localshortcut';
import { BrowserWindow } from 'electron';

const win = new BrowserWindow();

electronLocalshortcut.register(win, 'Ctrl+A', () => {
    console.log('You pressed ctrl & A');
});
electronLocalshortcut.register('Ctrl+A', () => {
    console.log('You pressed ctrl & A');
});

electronLocalshortcut.register(win, ['Ctrl+R', 'F5'], () => {
    console.log('You pressed ctrl & R or F5');
});

electronLocalshortcut.register(['Ctrl+R', 'F5'], () => {
    console.log('You pressed ctrl & R or F5');
});

electronLocalshortcut.isRegistered(win, 'Ctrl+A');
electronLocalshortcut.isRegistered('Ctrl+A');

electronLocalshortcut.unregister(win, 'Ctrl+A');
electronLocalshortcut.unregister('Ctrl+A');

electronLocalshortcut.unregisterAll(win);
