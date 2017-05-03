// Tests taken from documentation samples.

import * as SerialPort from 'serialport';

function test_basic_connect() {
    let port = new SerialPort('');
}

function test_connect_config() {
    let port1 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.raw
        }, (err: any) => {});

    let port2 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.readline('\n', 'ascii')
        }, (err: any) => {});

    let port3 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.byteLength(7)
        }, (err: any) => {});

    let port4 = new SerialPort('', {
            baudRate: 0,
            parser: SerialPort.parsers.byteDelimiter([3, 4, 5])
        }, (err: any) => {});

    let port5 = new SerialPort('', {
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
    let port = new SerialPort('');
    port.write('main screen turn on', (err, bytesWritten) => {});
}

function test_events() {
    let port = new SerialPort('');
    port.on('open', () => {});
}

function test_list_ports() {
    SerialPort.list((err: string, ports: SerialPort.portConfig[]) => {});
}
