import * as Guacamole from 'guacamole-common-js';

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

// @ts-expect-error
const layer = new Guacamole.Layer();

const l2 = new Guacamole.Layer(1, 2);
l2.arc(1, 2, 3, 4, 5, true as boolean | undefined);
l2.arc(1, 2, 3, 4, 5);
// @ts-expect-error
l2.arc(1 as number | null, 2, 3, 4, 5);
l2.copy(srcLayer, srcx, srcy, srcw, srch, x, y);
// @ts-expect-error
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
tunnel.connect();
tunnel.connect('123');
// @ts-expect-error
tunnel.connect({});
tunnel.onerror = checkStatus;
const tis: boolean = tunnel.isConnected();
tunnel.state === Guacamole.Tunnel.State.CONNECTING;
// @ts-expect-error
const z = tunnel.state === 5;

// @ts-expect-error
tunnel.uuid.substr(0);
tunnel.uuid && tunnel.uuid.substr(0);

// @ts-expect-error
tunnel.sendMessage();
tunnel.sendMessage(1);
tunnel.oninstruction = (code, args) => [code.trim(), args.map];
tunnel.onstatechange = state => state === Guacamole.Tunnel.State.OPEN;
tunnel.onerror = s => s.code === Guacamole.Status.Code.fromHTTPCode(500);
tunnel.disconnect();
// @ts-expect-error
new Guacamole.WebSocketTunnel(null);
// @ts-expect-error
new Guacamole.WebSocketTunnel(undefined);
// @ts-expect-error
new Guacamole.WebSocketTunnel({});

const client = new Guacamole.Client(tunnel);

// @ts-expect-error
new Guacamole.Client(null);
// @ts-expect-error
new Guacamole.Client({});

client.connect();
client.connect(123);
client.connect({});
client.connect('sdfdsf');
client.onerror = (status: Guacamole.Status) => {
    console.log(status.code === Guacamole.Status.Code.UNSUPPORTED);
    // @ts-expect-error
    status.message.trim();

    status.message && status.message.trim();
};
client.onerror = null;
// @ts-expect-error
client.endStream();

const d = new Guacamole.Display();
d.getDefaultLayer().resize(1, 2);
1 * d.cursorHotspotX === d.cursorHotspotX * 2;

const o$ = new Guacamole.OutputStream(client, 3);
o$.index.toFixed();
o$.onack = checkStatus;
o$.sendEnd();
o$.sendBlob('sdfdsf');
// @ts-expect-error
o$.sendBlob('sdfsd' as null | string);

const i$ = new Guacamole.InputStream(client, 55);
i$.onend = () => {};
i$.onblob = x => {
    i$.sendAck('sdfsd', Guacamole.Status.Code.SUCCESS);
    x.trim();
};

const vp = new Guacamole.VideoPlayer();
vp.sync();

const httpTunnel = new Guacamole.HTTPTunnel('https://hey.hey', false, { 'X-Any': 'foobar' });
new Guacamole.Client(httpTunnel).sendKeyEvent(1 as 1 | 0, 10);
new Guacamole.Client(tunnel)
  // @ts-expect-error
  .sendKeyEvent(true, 5);

new Guacamole.Client(tunnel).sendMouseState(new Guacamole.Mouse.State(1, 2, false, false, false, false, true));
// @ts-expect-error
new Guacamole.Client(tunnel).sendMouseState({ left: true });
