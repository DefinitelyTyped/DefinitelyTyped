import * as bunyan from "browser-bunyan";

const log = bunyan.createLogger({
    name: 'myLogger',
    streams: [
        {
            level: 'info',
            stream: new bunyan.ConsoleFormattedStream()
        }
    ],
    serializers: bunyan.stdSerializers,
    src: true
});

log.info('hi on info');

const log2 = bunyan.createLogger({
    name: 'myLogger',
    stream: new bunyan.ConsoleRawStream()
});

const myObject = { x: 1, y: 2 };
log.info({ obj: myObject }, 'This is my object:');

new bunyan.ConsoleFormattedStream({ logByLevel: true });

const style = {
    levels: {
        trace: 'color: DeepPink',
        debug: 'color: GoldenRod',
        info: 'color: DarkTurquoise',
        warn: 'color: Purple',
        error: 'color: Crimson',
        fatal: 'color: Black',
    },
    def: 'color: DimGray',
    msg: 'color: SteelBlue',
    src: 'color: DimGray; font-style: italic; font-size: 0.9em',
};

new bunyan.ConsoleFormattedStream({ css: style });
