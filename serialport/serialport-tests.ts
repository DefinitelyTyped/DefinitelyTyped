// Tests for serialport.d.ts
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport 
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Tests taken from documentation samples.

/// <reference path="serialport.d.ts" />

import * as serialport from 'serialport';

this.port = new serialport.SerialPort("", {
    baudrate: 0,
    disconnectedCallback: function () { },
    parser: serialport.parsers.readline("\n")
});
