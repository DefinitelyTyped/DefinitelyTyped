import * as wol from "wol";

//

wol.createMagicPacket('20:DE:20:DE:20:DE'); // $ExpectType Buffer

//

wol.wake('20:DE:20:DE:20:DE'); // $ExpectType Promise<boolean>
wol.wake('20:DE:20:DE:20:DE', (err, res) => { }); // $ExpectType void

wol.wake('20:DE:20:DE:20:DE', {});
wol.wake('20:DE:20:DE:20:DE', { address: "1.1.1.1" });
wol.wake('20:DE:20:DE:20:DE', { port: 42 });

wol.wake('20:DE:20:DE:20:DE', { port: 42 }, (err, res) => { }); // $ExpectType void
