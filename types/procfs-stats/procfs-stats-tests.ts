import procfs = require("procfs-stats");

var ps = procfs(0);

ps.io((error, io) => {});
ps.stat((error, stat) => {});
ps.statm((error,statm) => {});
ps.status((error, status) => {});
ps.env((error, env) => {});
ps.cwd((error, cwd) => {});
ps.argv((error, argv) => {});
ps.fds((error, fds) => {});
ps.threads((error, threads) => {});

const stat = ps.thread(0);

ps.cpu((error, cpus) => {});
ps.meminfo((error, meminfo) => {});
ps.fd("path", (error, fd) => {});
ps.tcp((error, tcp) => {});
ps.udp((error, udp) => {});
ps.unix((error, unix) => {});
ps.net((error, net) => {});
ps.disk((error, disk) => {});
ps.wifi((error, wifi) => {});

const works = ps.works;
