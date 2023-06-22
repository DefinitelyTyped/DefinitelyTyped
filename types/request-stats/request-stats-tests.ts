import requestStats = require('request-stats');
import * as http from 'http';

const server = http.createServer((req, res) => {
    requestStats(req, res); // $ExpectType StatsEmitter
    requestStats(req, res, stats => {
        stats; // $ExpectType Stats
    });
});

const stats = requestStats(server);
stats; // $ExpectType StatsEmitter
// $ExpectType StatsEmitter
requestStats(server, stats => {
    stats; // $ExpectType Stats

    stats.ok; // $ExpectType boolean
    stats.time; // $ExpectType number
    stats.req.bytes; // $ExpectType number
    stats.req.headers; // $ExpectType IncomingHttpHeaders
    stats.req.method; // $ExpectType string
    stats.req.path; // $ExpectType string
    stats.req.ip; // $ExpectType string
    stats.req.raw; // $ExpectType IncomingMessage
    stats.res.bytes; // $ExpectType number
    stats.res.headers; // $ExpectType OutgoingHttpHeaders
    stats.res.status; // $ExpectType number
    stats.res.raw; // $ExpectType ServerResponse<IncomingMessage>
});

stats.on('complete', stats => {
    stats; // $ExpectType Stats
});

stats.on('request', req => {
    req; // $ExpectType Request

    const progress = req.progress();
    progress; // $ExpectType Progress

    progress.completed; // $ExpectType boolean
    progress.time; // $ExpectType number
    progress.timeDelta; // $ExpectType number
    progress.req.bytes; // $ExpectType number
    progress.req.bytesDelta; // $ExpectType number
    progress.req.speed; // $ExpectType number
    progress.req.bytesLeft; // $ExpectType number
    progress.req.timeLeft; // $ExpectType number
    progress.res.bytes; // $ExpectType number
    progress.res.bytesDelta; // $ExpectType number
    progress.res.speed; // $ExpectType number
});
