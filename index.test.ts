import * as Guacamole from 'guacamole-client';

const layer = new Guacamole.Layer();

new Guacamole.Mouse(document);

const mouse = new Guacamole.Mouse(({} as any) as HTMLElement);
const tunnel = new Guacamole.WebSocketTunnel('haha');

// $ExpectError
new Guacamole.WebSockerTunnel(null);
// $ExpectError
new Guacamole.WebSockerTunnel(undefined);
// $ExpectError
new Guacamole.WebSockerTunnel({});

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
client.onerror = {};

client.endStream(1);
