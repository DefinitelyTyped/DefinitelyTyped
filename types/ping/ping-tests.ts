import { PingConfig, PingResponse, promise, sys } from 'ping';

// test type exports
type Config = PingConfig;
type Response = PingResponse;

promise.probe('test'); // $ExpectType Promise<PingResponse>
promise.probe('test', { numeric: false }); // $ExpectType Promise<PingResponse>
promise.probe('test', { timeout: 1000 }); // $ExpectType Promise<PingResponse>
promise.probe('test', { deadline: 2 }); // $ExpectType Promise<PingResponse>
promise.probe('test', { min_reply: 5 }); // $ExpectType Promise<PingResponse>
promise.probe('test', { v6: false }); // $ExpectType Promise<PingResponse>
promise.probe('test', { sourceAddr: 'localhost' }); // $ExpectType Promise<PingResponse>
promise.probe('test', { packetSize: 128 }); // $ExpectType Promise<PingResponse>
promise.probe('test', { extra: ['-i', '2'] }); // $ExpectType Promise<PingResponse>

sys.probe('test', (isAlive, err) => {
    isAlive; // $ExpectType boolean | null
    err; // $ExpectType unknown
});
sys.probe('test', () => {}, { numeric: false }); // $ExpectType void
sys.probe('test', () => {}, { timeout: 1000 }); // $ExpectType void
sys.probe('test', () => {}, { deadline: 2 }); // $ExpectType void
sys.probe('test', () => {}, { min_reply: 5 }); // $ExpectType void
sys.probe('test', () => {}, { v6: false }); // $ExpectType void
sys.probe('test', () => {}, { sourceAddr: 'localhost' }); // $ExpectType void
sys.probe('test', () => {}, { packetSize: 128 }); // $ExpectType void
sys.probe('test', () => {}, { extra: ['-i', '2'] }); // $ExpectType void

async function test() {
    const res = await promise.probe('test'); // $ExpectType PingResponse

    res.inputHost; // $ExpectType string
    res.host; // $ExpectType string
    res.numeric_host; // $ExpectType string | undefined
    res.alive; // $ExpectType boolean
    res.output; // $ExpectType string
    res.time; // $ExpectType number | "unknown"
    res.times; // $ExpectType number[]
    res.min; // $ExpectType string
    res.max; // $ExpectType string
    res.avg; // $ExpectType string
    res.stddev; // $ExpectType string
    res.packetLoss; // $ExpectType string
}
