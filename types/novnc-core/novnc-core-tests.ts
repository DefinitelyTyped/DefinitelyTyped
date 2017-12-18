import RFB from 'novnc-core';

let rfb: RFB;
const host = '';
const port = 0;
const password = '';
const path = '';
const canvas = <HTMLCanvasElement> document.getElementById('noVNC_canvas');

function setPassword() {
    rfb.sendPassword('password');
}

function sendCtrlAltDel() {
    rfb.sendCtrlAltDel();
}

function init() {
    rfb = new RFB({
        target: canvas,
        encrypt: true,
        repeaterID: "myrepeaterid",
        local_cursor: true,
        shared: true,
        view_only: true,
        onPasswordRequired: (rfb) => {
        }
    });
    rfb.connect(host, port, password, path);
}

try {
    rfb = new RFB({
        target: canvas,
        encrypt: false,
        onUpdateState(self, newState, oldState) {},
        onDisconnected(self, reason) {},
        onPasswordRequired(self, msg) {},
        onFBResize(self, width, height) {},
        onDesktopName(self, name) {},
    });
    rfb.connect(host, port);
} catch (exc) {
    console.log('Unable to create RFB client -- ' + exc, 'error');
}
