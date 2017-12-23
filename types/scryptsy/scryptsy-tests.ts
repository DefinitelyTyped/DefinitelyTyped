import * as scrypt from 'scryptsy';

const key = 'TheKey';
const salt = 'Salty';

// Test without processCallback
const data: Buffer = scrypt(key, salt, 16384, 8, 1, 64);

// Test with processCallback
scrypt(key, salt, 16384, 8, 1, 64, (status) => {
    status.current;
    status.total;
    status.percent;
});
