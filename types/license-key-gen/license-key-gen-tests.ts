import license = require('license-key-gen');
const userInfo = {
    company: 'webisto.tech',
    street: '123 licenseKey ave',
    city: 'city/town',
    state: 'State/Province',
    zip: 'postal/zip',
};
const licenseData = { info: userInfo, prodCode: 'LEN100120', appVersion: '1.5', osType: 'IOS8' };
try {
    license.createLicense(licenseData);
} catch {}
try {
    license.validateLicense(licenseData, 'W0247-4RXD3-6TW0F-0FD63-64EFD-38180');
} catch {}
