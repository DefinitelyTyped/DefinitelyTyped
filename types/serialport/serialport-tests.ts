// Tests taken from documentation samples.

import SerialPort = require('serialport');

function test_basic_connect() {
    const port = new SerialPort('');
}

function test_connect_config() {
    const port1 = new SerialPort('', {
        }, error => {});

    const port4 = new SerialPort('', {
            autoOpen: false,
            lock: false,
            baudRate: 115200,
            dataBits: 5,
            stopBits: 2,
            parity: 'odd',
            rtscts: true,
            xon: true,
            xoff: true,
            highWaterMark: 1024,
            bindingOptions: {
                vmin: 1,
                vtime: 1
            }
        },
        error => {
            if (error !== null) {
                console.error(error);
            }
        }
    );
}

function test_open() {
    const port = new SerialPort('');
    port.open(() => {});
}

function test_update() {
    const port = new SerialPort('');
    port.update({baudRate: 57600});
}

function test_write() {
    const port = new SerialPort('');

    port.write('test', (error?: Error | null) => {});
    port.write('test', 'utf8', (error?: Error | null) => {});
}

function test_read() {
    const port = new SerialPort('');

    const data = port.read(8);
}

function test_close() {
    const port = new SerialPort('');

    port.close((error?: Error | null) => {});
}

function test_set() {
    const port = new SerialPort('');

    port.set({}, (error?: Error | null) => {});
}

function test_get() {
    const port = new SerialPort('');

    port.get((error, status) => {});
}

function test_flush() {
    const port = new SerialPort('');

    port.flush((error?: Error | null) => {});
}

function test_drain() {
    const port = new SerialPort('');

    port.drain((error?: Error | null) => {});
}

function test_pause_resume() {
    const port = new SerialPort('');

    const pauseItem: SerialPort =  port.pause();
    const resumeItem: SerialPort = port.resume();
}

function test_on_events() {
    const port = new SerialPort('');

    const onItem: SerialPort = port.on('event', (data: any) => {});
}

function test_binding() {
    const port = new SerialPort('');

    const bindingItem: SerialPort.BaseBinding = SerialPort.Binding;
}

function test_parsers() {
    const port = new SerialPort('');

    const ByteLengthParser = new SerialPort.parsers.ByteLength({length: 8});
    const CCTalkParser = new SerialPort.parsers.CCTalk();
    const DelimiterParser = new SerialPort.parsers.Delimiter({ delimiter: Buffer.from('EOL'), includeDelimiter: true });
    const ReadlineParser = new SerialPort.parsers.Readline({ delimiter: '\r\n', includeDelimiter: false });
    const ReadyParser = new SerialPort.parsers.Ready({ delimiter: 'READY' });
    const RegexParser = new SerialPort.parsers.Regex({regex: /.*/});

    port.pipe(ByteLengthParser);
    port.pipe(CCTalkParser);
    port.pipe(DelimiterParser);
    port.pipe(ReadlineParser);
    port.pipe(ReadyParser);
    port.pipe(RegexParser);
}

function test_properties() {
    const port = new SerialPort('');

    const baudRate: number = port.baudRate;
    const binding: SerialPort.BaseBinding = port.binding;
    const isOpen: boolean = port.isOpen;
    const path: string = port.path;
}

function test_list_ports_promise() {
    const ports = SerialPort
        .list()
        .then((ports: SerialPort.PortInfo[]) => {})
        .catch((err: Error) => {});
}
