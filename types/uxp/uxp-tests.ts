import { entrypoints, script, pluginManager, versions } from "uxp";

// localstorage
localStorage.clear();
// $ExpectType number
localStorage.key();

// global modules
const array = new Uint32Array(10);
crypto.getRandomValues(array);
crypto.randomUUID();

// @ts-expect-error
fetch('blob://example.com/', { mode: 'cors' });
fetch('https://user:password@example.com/');

const xhr = new XMLHttpRequest();
xhr.open("GET", "/api", true);

const ws = new WebSocket("ws://demos.kaazing.com/echo", "xmpp");
ws.binaryType = "arraybuffer";
ws.binaryType = "fragments";
// @ts-expect-error
ws.send({ hello: 'world' });
ws.send(new Uint8Array([]));

// Plugin
const plugin = new Plugin();
// $ExpectType boolean
plugin.enabled;
// $ExpectType string
plugin.id;
// $ExpectType string
plugin.version;
plugin.invokeCommand("testuxpcommand");

entrypoints.getPanel("testpanel");
pluginManager.plugins;
script.args;
versions.plugin;

// $ExpectType string
path.dirname
// $ExpectType string
path.basename
// $ExpectType string
path.extname;
// $ExpectType boolean
path.isAbsolute;

const obj = { hello: "world" };
var blob = new Blob([obj], { type: "text/css" });

