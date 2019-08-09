import * as scHotReboot from "sc-hot-reboot";
import SocketCluster = require("socketcluster");

const socketCluster = new SocketCluster();

scHotReboot.attach(socketCluster, {
    cwd: __dirname,
    ignored: ["public", "node_modules", "README.md", "Dockerfile", "server.js", "broker.js", /[\/\\]\./, "*.log"]
});
