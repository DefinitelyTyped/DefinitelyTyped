// Tests for serialport.d.ts
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Tests taken from documentation samples.

import * as SerialPort from 'serialport';

function test_basic_connect() {
    let port = new SerialPort("");
}

function test_connect_config() {
    let port = new SerialPort("", {
        baudRate: 0,
        parser: SerialPort.parsers.readline("\n")
    }, function(err:any) { });
}

function test_write() {
    let port = new SerialPort("");
    port.write("main screen turn on", (err, bytesWritten) => {
    });
}

function test_events() {
    let port = new SerialPort("");
    port.on("open", function () { });
}

function test_list_ports() {
    SerialPort.list( (err: string, ports: SerialPort.portConfig[]) => {

    });
}
