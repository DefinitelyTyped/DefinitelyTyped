import * as bip38 from 'bip38';

const myWifString = '5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR';

// Result from wif.decode for testing
const decoded = {
    version: 48,
    privateKey: Buffer.from('12345678901234567890123456789012'),
    compressed: true
};

// Test encrypt without progressCallback
const encryptedKey = bip38.encrypt(decoded.privateKey, decoded.compressed, 'TestingOneTwoThree');

// Test encrypt with progressCallback
bip38.encrypt(decoded.privateKey, decoded.compressed, 'TestingOneTwoThree', (status: bip38.ProgressStatus) => {
    status.current;
    status.total;
    status.percent;
});

// Test decrypt without progressCallback
const decryptedKey = bip38.decrypt(encryptedKey, 'TestingOneTwoThree');

// Test decrypt with progressCallback
bip38.decrypt(encryptedKey, 'TestingOneTwoThree', (status: bip38.ProgressStatus) => {
    status.current;
    status.total;
    status.percent;
});
