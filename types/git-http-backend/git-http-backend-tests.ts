import * as http from "http"
import {spawn} from "child_process"
import path = require("path")
import backend from "git-http-backend"
import { Duplex } from "stream";

var server = http.createServer(function (req, res) {
    var repo = req.url.split('/')[1];
    var dir = path.join(__dirname, 'repos', repo);
    var s: Duplex = new backend(req.url, (err, service) => {
        if (err) return res.end(err + '\n');
        
        res.setHeader('content-type', service.type);
        console.log(service.action, repo, service.fields);
        
        var ps = spawn(service.cmd, service.args.concat(dir));
        ps.stdout.pipe(service.createStream()).pipe(ps.stdin);
        
    })
    req.pipe(s).pipe(res);
});
server.listen(5000);