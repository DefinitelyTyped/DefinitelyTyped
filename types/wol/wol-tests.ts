import wol = require('wol');

// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00');

// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00', {
    address: '255.255.255.255',
    port: 9,
});

// $ExpectType Buffer
wol.createMagicPacket('00:00:00:00:00:00');
