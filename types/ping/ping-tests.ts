import {
  PingConfig,
  promise,
  sys,
} from 'ping';

const config: PingConfig = {
    numeric: false,
    timeout: 1000,
    min_reply: 5,
    v6: false,
    sourceAddr: 'localhost',
    extra: [],
};

sys.probe('test', (isAlive: boolean, err: any) => {
    const alive: boolean = isAlive;
});

async function test() {
    const res = await promise.probe('test', config);

    const alive: boolean = res.alive;
    const host: string = res.host;
    const output: string = res.output;
    const min: string = res.min;
    const max: string = res.max;
    const avg: string = res.avg;
    const stddev: string = res.stddev;

    if (res.time !== 'unknown') {
      const time: number = res.time;
    }

    if (res.numeric_host) {
        const numHost: string = res.numeric_host;
    }
}
