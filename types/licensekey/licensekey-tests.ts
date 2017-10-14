import * as licensekey from "licensekey";

const userInfo = {
    company: "wavecoders.ca",
    street: "123 licenseKey ave",
    city: "city/town",
    state: "State/Province",
    zip: "postal/zip"
};

// ============================
// Create a License Key
// ============================
const licenseData: licensekey.CreateData = {
    info: userInfo,
    prodCode: "LEN100120",
    appVersion: "1.5",
    osType: "IOS8"
};

let license: licensekey.CreateResult;

try {
    license = licensekey.createLicense(licenseData);
    // console.log(license);
    // { errorCode: 0,  message: 'ok', license: '3Z2RG-62WUD-T2VV8-43DD8-D76BD-0A8AD' }
    // ============================
    // Validate a License Key
    // ============================
    licenseData.osLock = true;
    licenseData.license = license.license;

    try {
        const validity: licensekey.LicenseResult =
                licensekey.validateLicense(licenseData as licensekey.ValidateData);
        // console.log(validity);
        // { errorCode: 0, message: 'ok' }
    }catch (err) {
        // console.log(err as licensekey.LicenseResult);
        // { errorCode: 1006, message: 'license not valid' }
    }
}catch (err) {
    // console.log(err as licensekey.LicenseResult);
    // { errorCode: 1002, message: 'product code missing' }
}
