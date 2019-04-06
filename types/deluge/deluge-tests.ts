import deluge = require("deluge");
import * as http from 'http';

const delugeInstance: deluge.Deluge = deluge("deluge-webui-api-url", "password");

delugeInstance.getHosts((error: string, result: deluge.Host[], response: http.ServerResponse) => {
});

delugeInstance.connect("id", (error: string, result: boolean, response: http.ServerResponse) => {
});

delugeInstance.add("magnet_link", "path", (error: string, result: boolean, response: http.ServerResponse) => {
});

delugeInstance.getTorrentRecord((error: string, result: deluge.TorrentRecord, response: http.ServerResponse) => {
});

delugeInstance.isConnected((error: string, result: boolean, response: http.ServerResponse) => {
});

delugeInstance.setCookies({ "http://www.some-private-tracker.com/": "my_cookie1=xxx;my_cookie2=yyy;" },
    (error: string, result: boolean, response: http.ServerResponse) => {
});
