import * as InputUtil from "@novnc/novnc/lib/input/util";
import RFB, {
    RFBOptions,
    PowerButtonAction,
    EncodedRect,
    BellCallback,
    // Add other relevant named exports from ./lib/rfb if needed for tests
} from '@novnc/novnc';

import {
    DisplayClip,
    Color, // Named export from ./lib/display
    LogLevel,
    initLogging,
    Debug,
    Info,
    Warn,
    Error as RFBError, // Renamed to avoid conflict with global Error
    getLogging, // Named exports from ./lib/util/logging
    KeyboardOptions, // Named export from ./lib/input/keyboard
    lookup as lookupKeySymByUnicodeFromDef, // Named export from ./lib/input/keysymdef
    lookupByName as lookupKeySymByNameFromDef, // Named export from ./lib/input/keysymdef
} from '@novnc/novnc';

// Default exports from submodules must be imported directly by path
import Display from '@novnc/novnc/lib/display';
import Websock from '@novnc/novnc/lib/websock';
import Keyboard from '@novnc/novnc/lib/input/keyboard';
import KeySym from '@novnc/novnc/lib/input/keysym'; // This is the default export (the namespace)

// Test RFB
const targetDiv = document.createElement('div');
document.body.appendChild(targetDiv);

const rfbOptions: RFBOptions = {
    credentials: { password: 'testpassword' },
    shared: false,
    repeaterID: '',
    wsProtocols: ['binary', 'base64'],
};

const rfb = new RFB(targetDiv, 'ws://localhost:5900', rfbOptions);
rfb.disconnect();
rfb.sendCredentials({ username: 'user', password: 'password' });
rfb.sendCtrlAltDel();
rfb.machineShutdown();
rfb.machineReboot();
rfb.machineReset();
if (KeySym.XK_Control_L) {
    rfb.sendKey(KeySym.XK_Control_L, "ControlLeft", true);
    rfb.sendKey(KeySym.XK_Control_L, "ControlLeft", false);
}
rfb.focus();
rfb.blur();
rfb.clipViewport = true;
const cv: boolean = rfb.clipViewport;
rfb.dragViewport = false;
const dv: boolean = rfb.dragViewport;
rfb.resizeSession = true;
const rs: boolean = rfb.resizeSession;
rfb.scaleViewport = false;
const sv: boolean = rfb.scaleViewport;

const scale: number = rfb.scale;
rfb.scale = 0.5;
const quality: number = rfb.qualityLevel;
rfb.qualityLevel = 5;
const compression: number = rfb.compressionLevel;
rfb.compressionLevel = 5;

const bellCb: BellCallback = () => {
    Info('Bell signal received!');
};
rfb.onbell = bellCb;

const pba: PowerButtonAction = PowerButtonAction.Signal;
// rfb.powerButton(pba); // Assuming a method like this exists if PowerButtonAction is used

const rect: EncodedRect = { x: 0, y: 0, width: 10, height: 10, encoding: 0, data: new Uint8Array(0) };
// rfb.handleRect(rect); // Assuming a method or property uses EncodedRect

// Test Logging
let currentLogLevel: LogLevel = getLogging();
initLogging('debug');
Debug('debug message');
Info({ test: 'info message' });
Warn('warn message');
RFBError('error message');
currentLogLevel = 'none';
initLogging(currentLogLevel);

// Test Display
const display = new Display(targetDiv);
display.resize(800, 600);
display.clear();
const displayWidth: number = display.width;
const displayHeight: number = display.height;
const canvas: HTMLCanvasElement = display.canvas;
const colorVal: Color = [255, 0, 0, 255]; // RGBA
display.drawRect(0, 0, 10, 10, colorVal, true);
const dcTest: DisplayClip = { x: 0, y: 0, w: 1, h: 1, data: new Uint8Array([1,2,3,4])};
display.blitImage(dcTest);


// Test Websock
const websock = new Websock();
websock.open('ws://localhost:5900', 'binary');
websock.close();
const readyState: number = websock.readyState;
websock.send(new Uint8Array([1, 2, 3]));
const recvQ: Uint8Array[] = websock.recvQ;
const sendQ: Uint8Array[] = websock.sendQ;


// Test Keyboard
const kbdOptions: KeyboardOptions = { events: ['keydown', 'keyup'] };
const keyboard = new Keyboard(document.body, kbdOptions);
keyboard.grab();
keyboard.ungrab();
keyboard.reset();
keyboard.onkeyevent = (keysym: number, code: string, down: boolean, event?: KeyboardEvent) => {
    Info(`Key event: keysym=${keysym}, code=${code}, down=${down}`);
};
keyboard.onkeyevent(KeySym.XK_A!, "KeyA", true);


// Test KeySym
if (KeySym.XK_A) {
    const keyA: number = KeySym.XK_A;
}
const keySymReturn: number | undefined = KeySym.lookup('Return');
const isSpecial: boolean = KeySym.isSpecial(KeySym.XK_Shift_L!);

// Test KeySymDef (imported from @novnc/novnc, which re-exports from ./lib/input/keysymdef)
const keySymFromUnicode: number = lookupKeySymByUnicodeFromDef(0x61); // 'a'
const keySymFromName: number | undefined = lookupKeySymByNameFromDef('Control_L');

// Test event handling (example with RFB)
rfb.addEventListener('connect', (event) => {
    Info('Connected to RFB server');
    const rfbFromEvent: RFB = event.target as RFB;
});
rfb.addEventListener('disconnect', (event) => {
    Info(`Disconnected: ${event.detail.clean}`);
    const reason: string = event.detail.reason;
});
rfb.addEventListener('credentialsrequired', (event) => {
    Info('Credentials required');
    rfb.sendCredentials({ password: 'provided_password' });
});

// Example of using a specific event type if defined
// Assuming 'bell' event has specific detail
rfb.addEventListener('bell', (event) => {
    Info('Bell event triggered on RFB instance.');
});

// Ensure some basic types are assignable
let strOrElem: string | Element = targetDiv;
strOrElem = "divId";

/* @novnc/novnc/lib/util/browser */

BrowserUtil.isTouchDevice; // $ExpectType boolean
BrowserUtil.dragThreshold; // $ExpectType number
BrowserUtil.supportsCursorURIs; // $ExpectType boolean
BrowserUtil.hasScrollbarGutter; // $ExpectType boolean
BrowserUtil.isMac(); // $ExpectType boolean
BrowserUtil.isWindows(); // $ExpectType boolean
BrowserUtil.isIOS(); // $ExpectType boolean
BrowserUtil.isSafari(); // $ExpectType boolean
BrowserUtil.isFirefox(); // $ExpectType boolean

/* @novnc/novnc/lib/input/util */

const keyboardEvent = {
    char: "test",
    charCode: 123,
    code: "test",
    key: "test",
    keyCode: 456,
    location: 789,
    type: "test",
};
InputUtil.getKeycode(keyboardEvent); // $ExpectType string
InputUtil.getKey(keyboardEvent); // $ExpectType string
InputUtil.getKeysym(keyboardEvent); // $ExpectType number
