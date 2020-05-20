import SocketIO = require('socket.io-client');
import SailsIOJS = require('sails.io.js');
const io = SailsIOJS(SocketIO);
io.sails.autoConnect = true;
io.sails.connect();
io.sails.connect("url");
io.sails.connect("url", {});
io.sails.connect("url", {
    initialConnectionHeaders: {
        nosession: true
    }
});
io.sails.environment = "production";
io.sails.headers = { "test": "1" };
io.sails.initialConnectionHeaders = { nosession: false };
io.sails.path = "path";
io.sails.query = "query";
io.sails.reconnection = true;
io.sails.reconnectionAttempts = 5;
io.sails.reconnectionDelay = 1;
io.sails.reconnectionDelayMax = 5;
io.sails.rejectUnauthorized = true;
io.sails.sdk = {
    language: "lang",
    platform: "node",
    version: "1.0",
    versionString: "1.0"
}
io.sails.strict = true;
io.sails.transports = ["websocket", "polling"];
io.sails.url = "url1";
io.sails.useCORSRouteToGetCookie = true;
io.socket.get("p");
io.socket.get("p", {});
io.socket.get("p", "test", (data: Date, jwr: any) => {
    data.getDate();
    const a: SailsIOJS.JWR = jwr;
});
io.socket.post("p");
io.socket.post("p", { val: 1 });
io.socket.put("p", "test", (data: number, jwr: any) => {
    data.toFixed();
    const a: SailsIOJS.JWR = jwr;
});
io.socket.put("p");
io.socket.put("p", {});
io.socket.post("p", "test", (data, jwr) => {
    const a: SailsIOJS.JWR = jwr;
});
io.socket.delete("p");
io.socket.delete("p", {});
io.socket.delete("p", "test", (data, jwr) => {
    const a: SailsIOJS.JWR = jwr;
});
io.socket.request({ url: "url" });
io.socket.request({ url: "url" }, (data: number, jwr: any) => {
    data.toExponential();
    jwr.body.toExponential();
    jwr.error.message;
    jwr.pipe.apply(this);
    jwr.statusCode.toFixed();
    const podo = jwr.toPOJO();
    podo.body.toExponential();
    podo.headers["test"] = "15";
    podo.statusCode = 200;
    jwr.toString().charAt(0);
})
io.socket.isConnected() === true;
io.socket.isConnecting() === true;
io.socket.mightBeAboutToAutoConnect() === false;
io.socket.on("connect", () => { })
    .on("disconnect", () => {

    })
    .on("reconnecting", (num) => {
        num = 15;
    })
    .on("reconnect", (transport, num) => {
        transport.toLowerCase();
        num = 16;
    })
    .on("error", (err) => { })
    .on("any", (a, b, c) => {

    })
    .removeAllListeners()
    .off("error", () => { })
    .replay();
