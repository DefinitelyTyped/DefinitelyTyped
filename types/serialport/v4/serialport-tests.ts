// Tests taken from documentation samples.

import * as SerialPort from 'serialport';

function test_basic_connect() {
    const port = new SerialPort('');
}

function test_connect_config() {
    const port1 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.Raw
        }, (err: any) => {});

    const port2 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.Readline('\n', 'ascii')
        }, (err: any) => {});

    const port3 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.ByteLength(7)
        }, (err: any) => {});

    const port4 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.ByteDelimiter([3, 4, 5])
        }, (err: any) => {});

    const port5 = new SerialPort('', {
            autoOpen: false,
            lock: false,
            baudRate: 115200,
            dataBits: 5,
            stopBits: 2,
            parity: 'odd',
            rtscts: true,
            xon: true,
            xoff: true,
            bufferSize: 1024,
            platformOptions: {
                vmin: 1,
                vtime: 1
            }
        }, (err: any) => {});
}

function test_write() {
    const port = new SerialPort('');
    port.write('main screen turn on', (err, bytesWritten) => {});
}

function test_events() {
    const port = new SerialPort('');
    port.on('open', () => {});
}

function test_list_ports() {
    SerialPort.list((err: string, ports: SerialPort.PortConfig[]) => {});
}
