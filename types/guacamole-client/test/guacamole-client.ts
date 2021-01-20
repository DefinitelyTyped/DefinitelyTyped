import * as Guacamole from 'guacamole-client';

declare const srcLayer: Guacamole.Layer;
declare const srcx: number;
declare const srcy: number;
declare const srcw: number;
declare const srch: number;
declare const x: number;
declare const y: number;

const http: Guacamole.Status.Code = Guacamole.Status.Code.fromHTTPCode(404);
const ws: Guacamole.Status.Code = Guacamole.Status.Code.fromWebSocketCode(1);
const checkStatus = (s: Guacamole.Status): [Guacamole.Status.Code, string | undefined, boolean] => [
    s.code,
    s.message && s.message.trim(),
    s.isError(),
];

// $ExpectError
const layer = new Guacamole.Layer();

const l2 = new Guacamole.Layer(1, 2);
l2.arc(1, 2, 3, 4, 5, true as boolean | undefined);
l2.arc(1, 2, 3, 4, 5);
// $ExpectError
l2.arc(1 as number | null, 2, 3, 4, 5);
l2.copy(srcLayer, srcx, srcy, srcw, srch, x, y);
// $ExpectError
l2.copy({}, 1, 2, 3, 4, 5, 5);
l2.pop();
l2.put(srcLayer, srcx, srcy, srcw, srch, x, y);
const c: HTMLCanvasElement = l2.toCanvas();
l2.lineTo(x, y);
l2.moveTo(x, y);

new Guacamole.Mouse(document);
const mouse = new Guacamole.Mouse(({} as any) as HTMLElement);
mouse.onmouseup = st => st.y === 3;
mouse.onmouseout = console.log;
mouse.onmousedown = st => st.left;
mouse.onmousemove = st => st.down;

const tunnel = new Guacamole.WebSocketTunnel('haha');
tunnel.connect('123');
// $ExpectError
tunnel.connect({});
tunnel.onerror = checkStatus;
const tis: boolean = tunnel.isConnected();
tunnel.state === Guacamole.Tunnel.State.CONNECTING;
// $ExpectError
const z = tunnel.state === 5;

// $ExpectError
tunnel.uuid.substr(0);
tunnel.uuid && tunnel.uuid.substr(0);

// $ExpectError
tunnel.sendMessage();
tunnel.sendMessage(1);
tunnel.oninstruction = (code, args) => [code.trim(), args.map];
tunnel.onstatechange = state => state === Guacamole.Tunnel.State.OPEN;
tunnel.onerror = s => s.code === Guacamole.Status.Code.fromHTTPCode(500);
tunnel.disconnect();
// $ExpectError
new Guacamole.WebSocketTunnel(null);
// $ExpectError
new Guacamole.WebSocketTunnel(undefined);
// $ExpectError
new Guacamole.WebSocketTunnel({});

const client = new Guacamole.Client(tunnel);

// $ExpectError
new Guacamole.Client(null);
// $ExpectError
new Guacamole.Client({});

client.connect();
client.connect(123);
client.connect({});
client.connect('sdfdsf');
client.onerror = (status: Guacamole.Status) => {
    console.log(status.code === Guacamole.Status.Code.UNSUPPORTED);
    // $ExpectError
    status.message.trim();

    status.message && status.message.trim();
};
client.onerror = null;
// $ExpectError
client.endStream();

const d = new Guacamole.Display();
d.getDefaultLayer().resize(1, 2);
1 * d.cursorHotspotX === d.cursorHotspotX * 2;

const o$ = new Guacamole.OutputStream(client, 3);
o$.index.toFixed();
o$.onack = checkStatus;
o$.sendEnd();
o$.sendBlob('sdfdsf');
// $ExpectError
o$.sendBlob('sdfsd' as null | string);

const i$ = new Guacamole.InputStream(client, 55);
i$.onend = () => {};
i$.onblob = x => {
    i$.sendAck('sdfsd', Guacamole.Status.Code.SUCCESS);
    x.trim();
};

const vp = new Guacamole.VideoPlayer();
vp.sync();
