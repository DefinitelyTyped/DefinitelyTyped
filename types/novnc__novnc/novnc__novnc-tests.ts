import RFB, { RFBOptions,  EncodedRect,  BellCallback} from '@novnc/novnc';
import * as Browser from '@novnc/novnc/lib/util/browser'
import KeySym from '@novnc/novnc/lib/input/keysym'
import { LogLevel, Debug, Info, Warn, Error, initLogging, getLogging } from '@novnc/novnc/lib/util/logging';
import Display, { type DisplayClip, DisplayConstructor, type Color } from '@novnc/novnc/lib/display';
import Keyboard, { type  KeyboardOptions } from '@novnc/novnc/lib/input/keyboard';

import Websock from '@novnc/novnc/lib/websock';
import {lookup, lookupByName} from '@novnc/novnc/lib/input/keysymdef';

// Test RFB
const targetDiv = document.createElement('div');
document.body.appendChild(targetDiv);

const rfbOptions: RFBOptions = {
    credentials: { password: 'testpassword' },
    shared: false,
    repeaterID: '',
    wsProtocols: ['binary', 'base64'],
};

const rfb = new RFB(targetDiv as unknown as HTMLCanvasElement, 'ws://localhost:5900', rfbOptions);
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
    Info('Bell signal received!'); // Use Info
};
rfb.onbell = bellCb;

const rect: EncodedRect = { x: 0, y: 0, width: 10, height: 10, encoding: 0, data: new Uint8Array(0) };

// Test Logging
let currentLogLevel: LogLevel = getLogging(); // Use getLogging
initLogging('debug'); // Use initLogging
Debug('debug message'); // Use Debug
Info({ test: 'info message' }); // Use Info
Warn('warn message'); // Use Warn
Error('error message'); // Use Error
currentLogLevel = 'none';
initLogging(currentLogLevel);

// Test Display
const display = new Display(targetDiv as unknown as HTMLCanvasElement); // Cast to unknown first
display.resize(800, 600);
display.fillRect(0, 0, display.width, display.height, [0,0,0,255]);
const displayWidth: number = display.width;
const displayHeight: number = display.height;
const canvas: HTMLCanvasElement = display.canvas;
const colorVal: Color = [255, 0, 0, 255]; // RGBA
display.drawRect(0, 0, 10, 10, colorVal, true);
const dcTest: DisplayClip = { x: 0, y: 0, w: 1, h: 1, data: new Uint8Array([1,2,3,4])};
display.blitImage(dcTest.x, dcTest.y, dcTest.w, dcTest.h, dcTest.data, 0);


// Test Websock
const websock = new Websock();
websock.open('ws://localhost:5900', 'binary');
websock.close();
const readyState = websock.readyState;
websock.send(new Uint8Array([1, 2, 3])); // websock.send takes one argument
const recvQ: Uint8Array[] = websock.recvQ;
const sendQ: Uint8Array[] = websock.sendQ;


// Test Keyboard
const kbdOptions: KeyboardOptions = { events: ['keydown', 'keyup'] };
const keyboard = new Keyboard(document.body /* or targetDiv */, kbdOptions); // Keyboard target might be specific
keyboard.grab();
keyboard.ungrab();
// keyboard.reset(); // Method might not exist
keyboard.onkeyevent = (keysym: number, code: string | null, down: boolean /*, event?: KeyboardEvent */) => {
Info(`Key event: keysym=${keysym}, code=${code}, down=${down}`); // Use Info
};
if (KeySym.XK_A) {
    keyboard.onkeyevent(KeySym.XK_A, "KeyA", true);
}

rfb.addEventListener('connect', (event) => {
    Info('Connected to RFB server'); // Use Info
    const rfbFromEvent: RFB = event.target as RFB;
});
rfb.addEventListener('disconnect', (event) => {
    Info(`Disconnected: ${event.detail.clean}`); // Use Info
    if ('reason' in event.detail && event.detail.reason) {
        const reason: string = event.detail.reason;
        Info(`Reason: ${reason}`);
    }
});
rfb.addEventListener('credentialsrequired', (event) => {
    Info('Credentials required'); // Use Info
    rfb.sendCredentials({ password: 'provided_password' });
});

rfb.addEventListener('bell', (event) => {
    Info('Bell event triggered on RFB instance.'); // Use Info
});

let strOrElem: string | Element = targetDiv;
strOrElem = "divId";

/* @novnc/novnc/lib/util/browser */

Browser.isTouchDevice; // $ExpectType boolean
Browser.dragThreshold; // $ExpectType number
Browser.supportsCursorURIs; // $ExpectType boolean
Browser.hasScrollbarGutter; // $ExpectType boolean
Browser.isMac(); // $ExpectType boolean
Browser.isWindows(); // $ExpectType boolean
Browser.isIOS(); // $ExpectType boolean
Browser.isSafari(); // $ExpectType boolean
Browser.isFirefox(); // $ExpectType boolean
