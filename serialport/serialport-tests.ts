// Tests for serialport.d.ts
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport 
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Tests taken from documentation samples.

/// <reference path="serialport.d.ts" />

import * as serialport from 'serialport';

function test_basic_connect() {
    let port = new serialport.SerialPort("");
}

function test_connect_config() {
    let port = new serialport.SerialPort("", {
        baudrate: 0,
        disconnectedCallback: function () { },
        parser: serialport.parsers.readline("\n")
    });
}

function test_write() {
    let port = new serialport.SerialPort("");
    port.write('main screen turn on', (err, bytesWritten) => {
    });
}

function test_events() {
    let port = new serialport.SerialPort("");
    port.on('open', function () { });
}

function test_list_ports() {
    serialport.list( (err:string, ports:serialport.portConfig[]) => {

    });
}