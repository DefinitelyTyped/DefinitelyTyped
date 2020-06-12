import * as Guacamole from 'guacamole-client';

const layer = new Guacamole.Layer();
new Guacamole.Mouse(document);
const mouse = new Guacamole.Mouse({} as any as HTMLElement);
const tunnel = new Guacamole.WebSocketTunnel('haha');
const client = new Guacamole.Client(tunnel);
client.connect();
client.connect(123);
client.connect({});
client.connect('sdfdsf');
client.onerror = status => console.log(status.code === Guacamole.Status.Code.UNSUPPORTED, status.message && status.message.trim());
client.onerror = null;
client.endStream(1);
