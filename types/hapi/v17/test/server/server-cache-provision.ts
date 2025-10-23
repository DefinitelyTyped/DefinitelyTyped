// https://github.com/hapijs/hapi/blob/master/API.md#-await-servercacheprovisionoptions
import * as catbox from "catbox";
import { Server } from "hapi";

const server = new Server({
    port: 8000,
});
server.initialize();
server.cache.provision({ engine: require("catbox-memory"), name: "countries" });

const cache = server.cache<string>({ segment: "countries", cache: "countries", expiresIn: 60 * 60 * 1000 });
cache.set("norway", "oslo", 10 * 1000).then(() => {});
const value = cache.get("norway").then(() => {});

server.start();

server.events.on("start", () => {
    console.log("Server started at: " + server.info.uri);
});
