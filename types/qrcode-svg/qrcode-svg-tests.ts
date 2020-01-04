import QRCode = require('qrcode-svg');

const qrCode = new QRCode(`sample-data`);

const assert = (result: boolean, messagePrefix: string, successMessage: string, errorMessage: string) => {
    if (result) {
        console.log(`[qrcode-svg] ${messagePrefix} ${successMessage}`);
    } else {
        console.error(`[qrcode-svg] ${messagePrefix} ${errorMessage}`);
    }
};

assert(qrCode.options.padding === 4, 'Default value for padding', 'matches expected.', 'does not match expected.');
assert(qrCode.options.width === 256, 'Default value for width', 'matches expected.', 'does not match expected.');
assert(qrCode.options.height === 256, 'Default value for height', 'matches expected.', 'does not match expected.');
assert(
    qrCode.options.background === '#ffffff',
    'Default value for background',
    'matches expected.',
    'does not match expected.',
);
assert(qrCode.options.color === '#000000', 'Default value for color', 'matches expected.', 'does not match expected.');
assert(qrCode.options.ecl === 'M', 'Default value for ecl', 'matches expected.', 'does not match expected');

assert(
    (Array.isArray(qrCode.qrcode.modules) && qrCode.qrcode.modules.length === 0) ||
        Array.isArray(qrCode.qrcode.modules[0]),
    'Modules in qrcode is',
    'a two-dimensional array',
    'not a two-dimensional array',
);

assert(typeof qrCode.svg() === 'string', 'QRCode object', 'generated an svg string', 'did not generate an svg string');
