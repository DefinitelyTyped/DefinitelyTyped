import * as LicenseFile from "nodejs-license-file";

const template: string = [
    "====BEGIN LICENSE====",
    "{{&name}}",
    "{{&id}}",
    "{{&serial}}",
    "=====END LICENSE=====",
].join("\n");

const generateOpts: LicenseFile.GenerateOptions = {
    privateKeyPath: "private_key.pem",
    template,
    data: {
        name: "John Doe",
        id: "123456789",
    },
};

/** License data you can write to file. */
const licenseString: string = LicenseFile.generate(generateOpts);

const parseOpts: LicenseFile.ParseOptions = {
    publicKeyPath: "public_key.pem",
    licenseFilePath: "license",
    template,
};
/** Parsed license obj */
const license: LicenseFile.License = LicenseFile.parse(parseOpts);

// Access license data (e.g., "name"):
license.data.name;
