import procfs = require("procfs-stats");

var ps = procfs(0);

ps.io((error, io) => {});
ps.stat((error, stat) => {});
ps.statm((error, stat) => {});
ps.status((error, stat) => {});
ps.env((error, stat) => {});
ps.cwd((error, stat) => {});
ps.argv((error, stat) => {});
ps.fds((error, stat) => {});
ps.threads((error, stat) => {});

const stat = ps.thread(0);

ps.cpu((error, stat) => {});
ps.meminfo((error, stat) => {});
ps.fd("path", (error, stat) => {});
ps.tcp((error, stat) => {});
ps.udp((error, stat) => {});
ps.unix((error, stat) => {});
ps.net((error, stat) => {});
ps.disk((error, stat) => {});
ps.wifi((error, stat) => {});

const works = ps.works;
