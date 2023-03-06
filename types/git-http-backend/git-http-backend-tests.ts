import * as http from "http";
import { spawn } from "child_process";
import path = require("path");
import backend = require("git-http-backend");
import { Duplex } from "stream";
import assert = require("assert");

const server = http.createServer((req, res) => {
    assert(req.url);
    const repo = req.url.split('/')[1];
    const dir = path.join(__dirname, 'repos', repo);
    const s: Duplex = new backend(req.url, (err, service) => {
        if (err) {
            res.end(err + '\n');
            return;
        }
        res.setHeader('content-type', service.type);
        console.log(service.action, repo, service.fields);
        const ps = spawn(service.cmd, service.args.concat(dir));
        ps.stdout.pipe(service.createStream()).pipe(ps.stdin);
    });
    req.pipe(s).pipe(res);
});
server.listen(5000);
