import wol = require('wake_on_lan');

wol.wake("20:DE:20:DE:20:DE");

let errFunc:wol.ErrorCallback = function(error:any) {
  if (error) {
    // handle error
  } else {
    // done sending packets
  }
};

var opts:wol.WakeOptions = { address: "192.168.1.1" };
var opts1:wol.WakeOptions = { address: "192.168.1.1", num_packets: 3 };
var opts2:wol.WakeOptions = { address: "192.168.1.1", num_packets: 3, interval: 4 };
var opts3:wol.WakeOptions = { address: "192.168.1.1", num_packets: 3, interval: 4, port: 5 };
var opts4:wol.WakeOptions = { address: "192.168.1.1" };
var opts5:wol.WakeOptions = { address: "192.168.1.1", interval: 4 };
var opts6:wol.WakeOptions = { address: "192.168.1.1", port: 5 };
var opts7:wol.WakeOptions = { address: "192.168.1.1", interval: 4, port: 5 };
var opts8:wol.WakeOptions = { num_packets: 3 };
var opts9:wol.WakeOptions = { num_packets: 3, interval: 4 };
var opts10:wol.WakeOptions = { num_packets: 3, port: 5 };
var opts11:wol.WakeOptions = { num_packets: 3, interval: 4, port: 5 };
var opts12:wol.WakeOptions = { interval: 4 };
var opts13:wol.WakeOptions = { interval: 4, port: 5 };
var opts14:wol.WakeOptions = { port: 5 };
var opts15:wol.WakeOptions = { };

wol.wake('20:DE:20:DE:20:DE');
wol.wake('20:DE:20:DE:20:DE', opts);
wol.wake('20:DE:20:DE:20:DE', errFunc);
wol.wake('20:DE:20:DE:20:DE', opts, errFunc);


var magic_packet:Buffer = wol.createMagicPacket('20:DE:20:DE:20:DE');
