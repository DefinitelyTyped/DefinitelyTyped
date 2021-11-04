import wol = require('wol');

const optionsAll: wol.WakeOptions = {address: '255.255.255.255', port: 9};
const optionsAddress: wol.WakeOptions = {address: '255.255.255.255'};
const optionsPort: wol.WakeOptions = {port: 9};
const optionsNone: wol.WakeOptions = {};

// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00', (error: Error | null) => {
    console.log(error);
});
// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00', (error: Error | null, result: boolean | undefined) => {
    console.log(error, result);
});

// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00');

// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00', optionsAll);

// $ExpectType Promise<boolean>
wol.wake('00:00:00:00:00:00', optionsAll, (error: Error | null, result: boolean | undefined) => {
    console.log(error, result);
});

// $ExpectType Buffer
wol.createMagicPacket('00:00:00:00:00:00');
