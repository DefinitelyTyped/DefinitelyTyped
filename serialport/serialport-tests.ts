/// <reference path="serialport.d.ts" />
/// <reference path="../requirejs/require.d.ts"/>

function test_serialport_on()
{
    var com = require("serialport");
    var serialport : SerialPortStatic = new com.SerialPort("/dev/ttyAMA0",
    {
        parser: com.parsers.readline('\n')
    });

    serialport.on('data', (data: any) => {
      console.log('Data: ' + data);
    });
}
