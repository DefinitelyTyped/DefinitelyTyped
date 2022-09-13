import * as osl from 'oslicense';

async () => {
    await osl.getLicenses();
    await osl.getLicenseData('MIT');
    await osl.getLicenseText('MIT');
    osl.getNearestLicense();
};
