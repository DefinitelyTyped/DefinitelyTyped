import RFB from '@novnc/novnc/core/rfb';
import * as BrowserUtil from '@novnc/novnc/core/util/browser';
import * as InputUtil from '@novnc/novnc/core/input/util';

/* @novnc/novnc/core/rfb */

// $ExpectType NoVncClient
const rfb = new RFB(window.document.body, 'wss://example.local', {
    shared: true,
    credentials: { username: 'user', password: 'pass', target: 'test' },
    repeaterID: 'test',
    wsProtocols: ['test1', 'test2'],
});
rfb.viewOnly; // $ExpectType boolean
rfb.focusOnClick; // $ExpectType boolean
rfb.clipViewport; // $ExpectType boolean
rfb.dragViewport; // $ExpectType boolean
rfb.scaleViewport; // $ExpectType boolean
rfb.resizeSession; // $ExpectType boolean
rfb.showDotCursor; // $ExpectType boolean
rfb.background; // $ExpectType string
rfb.qualityLevel; // $ExpectType number
rfb.compressionLevel; // $ExpectType number
rfb.capabilities.power; // $ExpectType boolean
rfb.disconnect(); // $ExpectType void
rfb.sendCredentials({ username: 'user', password: 'pass', target: 'test' }); // $ExpectType void
rfb.sendKey(99, null); // $ExpectType void
rfb.sendCtrlAltDel(); // $ExpectType void
rfb.focus(); // $ExpectType void
rfb.focus({ preventScroll: true }); // $ExpectType void
rfb.blur(); // $ExpectType void
rfb.machineShutdown(); // $ExpectType void
rfb.machineReboot(); // $ExpectType void
rfb.machineReset(); // $ExpectType void
rfb.clipboardPasteFrom('test'); // $ExpectType void

/* @novnc/novnc/core/util/browser */

BrowserUtil.isTouchDevice; // $ExpectType boolean
BrowserUtil.dragThreshold; // $ExpectType number
BrowserUtil.supportsCursorURIs; // $ExpectType boolean
BrowserUtil.hasScrollbarGutter; // $ExpectType boolean
BrowserUtil.isMac(); // $ExpectType boolean
BrowserUtil.isWindows(); // $ExpectType boolean
BrowserUtil.isIOS(); // $ExpectType boolean
BrowserUtil.isSafari(); // $ExpectType boolean
BrowserUtil.isFirefox(); // $ExpectType boolean

/* @novnc/novnc/core/input/util */

const keyboardEvent = {
    char: 'test',
    charCode: 123,
    code: 'test',
    key: 'test',
    keyCode: 456,
    location: 789,
    type: 'test',
};
InputUtil.getKeycode(keyboardEvent); // $ExpectType string
InputUtil.getKey(keyboardEvent); // $ExpectType string
InputUtil.getKeysym(keyboardEvent); // $ExpectType number
