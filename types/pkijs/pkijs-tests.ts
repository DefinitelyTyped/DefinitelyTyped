import * as asn1js from "asn1js";
import { arrayBufferToString, stringToArrayBuffer, bufferToHexCodes } from "pvutils";
import { getCrypto, getAlgorithmParameters } from "pkijs/src/common";
import Certificate from "pkijs/src/Certificate";
import CertificateRevocationList from "pkijs/src/CertificateRevocationList";
import AttributeTypeAndValue from "pkijs/src/AttributeTypeAndValue";
import Extension from "pkijs/src/Extension";
import Attribute from "pkijs/src/Attribute";
import SignedData from "pkijs/src/SignedData";
import EncapsulatedContentInfo from "pkijs/src/EncapsulatedContentInfo";
import SignerInfo from "pkijs/src/SignerInfo";
import IssuerAndSerialNumber from "pkijs/src/IssuerAndSerialNumber";
import SignedAndUnsignedAttributes from "pkijs/src/SignedAndUnsignedAttributes";
import ContentInfo from "pkijs/src/ContentInfo";
import RelativeDistinguishedNames from "pkijs/src/RelativeDistinguishedNames";

// *********************************************************************************
let cmsSignedBuffer = new ArrayBuffer(0); // ArrayBuffer with loaded or created CMS_Signed
const trustedCertificates: Certificate[] = []; // Array of root certificates from "CA Bundle"
// *********************************************************************************
// region Auxiliary functions
// *********************************************************************************
function formatPEM(pemString: string) {
    const stringLength = pemString.length;
    let resultString = "";

    for (let i = 0, count = 0; i < stringLength; i++) {
        if (count > 63) {
            resultString = `${resultString}\r\n`;
            count = 0;
        }
        count++;

        resultString = resultString + pemString[i];
    }

    return resultString;
}
// *********************************************************************************
// endregion
// *********************************************************************************
// region Parse "CA Bundle" file
// *********************************************************************************
function parseCAbundle(buffer: ArrayBuffer) {
    // region Initial variables
    const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    const startChars = "-----BEGIN CERTIFICATE-----";
    const endChars = "-----END CERTIFICATE-----";
    const endLineChars = "\r\n";

    const view = new Uint8Array(buffer);

    let waitForStart = false;
    let middleStage = true;
    let waitForEnd = false;
    let waitForEndLine = false;
    let started = false;

    let certBodyEncoded = "";
    // endregion

    for (let i = 0; i < view.length; i++) {
        if (started === true) {
            if (base64Chars.indexOf(String.fromCharCode(view[i])) !== (-1))
                certBodyEncoded = certBodyEncoded + String.fromCharCode(view[i]);
            else {
                if (String.fromCharCode(view[i]) === "-") {
                    // region Decoded trustedCertificates
                    const asn1 = asn1js.fromBER(stringToArrayBuffer(window.atob(certBodyEncoded)));
                    try {
                        trustedCertificates.push(new Certificate({ schema: asn1.result }));
                    }
                    catch (ex) {
                        alert("Wrong certificate format");
                        return;
                    }
                    // endregion

                    // region Set all "flag variables"
                    certBodyEncoded = "";

                    started = false;
                    waitForEnd = true;
                    // endregion
                }
            }
        }
        else {
            if (waitForEndLine === true) {
                if (endLineChars.indexOf(String.fromCharCode(view[i])) === (-1)) {
                    waitForEndLine = false;

                    if (waitForEnd === true) {
                        waitForEnd = false;
                        middleStage = true;
                    }
                    else {
                        if (waitForStart === true) {
                            waitForStart = false;
                            started = true;

                            certBodyEncoded = certBodyEncoded + String.fromCharCode(view[i]);
                        }
                        else
                            middleStage = true;
                    }
                }
            }
            else {
                if (middleStage === true) {
                    if (String.fromCharCode(view[i]) === "-") {
                        if (i === 0 || String.fromCharCode(view[i - 1]) === "\r" || String.fromCharCode(view[i - 1]) === "\n") {
                            middleStage = false;
                            waitForStart = true;
                        }
                    }
                }
                else {
                    if (waitForStart === true) {
                        if (startChars.indexOf(String.fromCharCode(view[i])) === (-1))
                            waitForEndLine = true;
                    }
                    else {
                        if (waitForEnd === true) {
                            if (endChars.indexOf(String.fromCharCode(view[i])) === (-1))
                                waitForEndLine = true;
                        }
                    }
                }
            }
        }
    }
}
// *********************************************************************************
// endregion
// *********************************************************************************
// region Parse existing CMS_Signed
// *********************************************************************************
export function parseCMSSigned() {
    // region Initial check
    if (cmsSignedBuffer.byteLength === 0) {
        alert("Nothing to parse!");
        return;
    }
    // endregion

    // region Initial activities
    document.getElementById("cms-dgst-algos").innerHTML = "";

    document.getElementById("cms-certs").style.display = "none";
    document.getElementById("cms-crls").style.display = "none";

    const certificatesTable = document.getElementById("cms-certificates") as HTMLTableElement;
    while (certificatesTable.rows.length > 1)
        certificatesTable.deleteRow(certificatesTable.rows.length - 1);

    const crlsTable = document.getElementById("cms-rev-lists") as HTMLTableElement;
    while (crlsTable.rows.length > 1)
        crlsTable.deleteRow(crlsTable.rows.length - 1);
    // endregion

    // region Decode existing CMS Signed Data
    const asn1 = asn1js.fromBER(cmsSignedBuffer);
    const cmsContentSimpl = new ContentInfo({ schema: asn1.result });
    const cmsSignedSimpl = new SignedData({ schema: cmsContentSimpl.content });
    // endregion

    // region Put information about digest algorithms in the CMS Signed Data
    const dgstmap: { [oid: string]: string } = {
        "1.3.14.3.2.26": "SHA-1",
        "2.16.840.1.101.3.4.2.1": "SHA-256",
        "2.16.840.1.101.3.4.2.2": "SHA-384",
        "2.16.840.1.101.3.4.2.3": "SHA-512"
    };

    for (let i = 0; i < cmsSignedSimpl.digestAlgorithms.length; i++) {
        let typeval = dgstmap[cmsSignedSimpl.digestAlgorithms[i].algorithmId];
        if (typeof typeval === "undefined")
            typeval = cmsSignedSimpl.digestAlgorithms[i].algorithmId;

        const ulrow = `<li><p><span>${typeval}</span></p></li>`;

        document.getElementById("cms-dgst-algos").innerHTML = document.getElementById("cms-dgst-algos").innerHTML + ulrow;
    }
    // endregion

    // region Put information about encapsulated content type
    const contypemap: { [oid: string]: string } = {
        "1.3.6.1.4.1.311.2.1.4": "Authenticode signing information",
        "1.2.840.113549.1.7.1": "Data content"
    };

    let eContentType = contypemap[cmsSignedSimpl.encapContentInfo.eContentType];
    if (typeof eContentType === "undefined")
        eContentType = cmsSignedSimpl.encapContentInfo.eContentType;

    document.getElementById("cms-encap-type").innerHTML = eContentType;
    // endregion

    // region Put information about included certificates
    const rdnmap: { [oid: string]: string } = {
        "2.5.4.6": "C",
        "2.5.4.10": "OU",
        "2.5.4.11": "O",
        "2.5.4.3": "CN",
        "2.5.4.7": "L",
        "2.5.4.8": "S",
        "2.5.4.12": "T",
        "2.5.4.42": "GN",
        "2.5.4.43": "I",
        "2.5.4.4": "SN",
        "1.2.840.113549.1.9.1": "E-mail"
    };

    if ("certificates" in cmsSignedSimpl) {
        for (let cert of cmsSignedSimpl.certificates) {
            if (cert instanceof Certificate) {
                let ul = "<ul>";
                for (let i = 0; i < cert.issuer.typesAndValues.length; i++) {
                    let typeval = rdnmap[cert.issuer.typesAndValues[i].type.toString()];
                    if (typeof typeval === "undefined")
                        typeval = cert.issuer.typesAndValues[i].type.toString();

                    const subjval = cert.issuer.typesAndValues[i].value.valueBlock.value;
                    const ulrow = `<li><p><span>${typeval}</span> ${subjval}</p></li>`;

                    ul = ul + ulrow;
                }

                ul = `${ul}</ul>`;

                const row = certificatesTable.insertRow(certificatesTable.rows.length);
                const cell0 = row.insertCell(0);
                cell0.innerHTML = bufferToHexCodes(cert.serialNumber.valueBlock.valueHex);
                const cell1 = row.insertCell(1);
                cell1.innerHTML = ul;
            }
        }

        document.getElementById("cms-certs").style.display = "block";
    }
    // endregion

    // region Put information about included CRLs
    if ("crls" in cmsSignedSimpl) {
        for (let crl of cmsSignedSimpl.crls) {
            if (crl instanceof CertificateRevocationList) {
                let ul = "<ul>";

                for (let i = 0; i < crl.issuer.typesAndValues.length; i++) {
                    let typeval = rdnmap[crl.issuer.typesAndValues[i].type.toString()];
                    if (typeof typeval === "undefined")
                        typeval = crl.issuer.typesAndValues[i].type.toString();

                    const subjval = crl.issuer.typesAndValues[i].value.valueBlock.value;
                    const ulrow = `<li><p><span>${typeval}</span> ${subjval}</p></li>`;

                    ul = ul + ulrow;
                }

                ul = `${ul}</ul>`;

                const row = crlsTable.insertRow(certificatesTable.rows.length);
                const cell = row.insertCell(0);
                cell.innerHTML = ul;
            }
        }

        document.getElementById("cms-certs").style.display = "block";
    }
    // endregion

    // region Put information about number of signers
    document.getElementById("cms-signs").innerHTML = cmsSignedSimpl.signerInfos.length.toString();
    // endregion

    document.getElementById("cms-signed-data-block").style.display = "block";
}
// *********************************************************************************
// endregion
// *********************************************************************************
// region Create CMS_Signed
// *********************************************************************************
export function createCMSSigned(buffer: ArrayBuffer) {
    // region Initial variables
    let sequence = Promise.resolve(null);

    const certSimpl = new Certificate();
    let cmsSignedSimpl: SignedData;

    let publicKey: CryptoKey;
    let privateKey: CryptoKey;

    let hashAlgorithm: string;
    const hashOption = (document.getElementById("hash_alg") as HTMLInputElement).value;
    switch (hashOption) {
        case "alg_SHA1":
            hashAlgorithm = "sha-1";
            break;
        case "alg_SHA256":
            hashAlgorithm = "sha-256";
            break;
        case "alg_SHA384":
            hashAlgorithm = "sha-384";
            break;
        case "alg_SHA512":
            hashAlgorithm = "sha-512";
            break;
        default:
    }

    let signatureAlgorithmName: string;
    const signOption = (document.getElementById("sign_alg") as HTMLInputElement).value;
    switch (signOption) {
        case "alg_RSA15":
            signatureAlgorithmName = "RSASSA-PKCS1-V1_5";
            break;
        case "alg_RSA2":
            signatureAlgorithmName = "RSA-PSS";
            break;
        case "alg_ECDSA":
            signatureAlgorithmName = "ECDSA";
            break;
        default:
    }
    // endregion

    // region Get a "crypto" extension
    const crypto = getCrypto();
    if (typeof crypto === "undefined") {
        alert("No WebCrypto extension found");
        return;
    }
    // endregion

    // region Put a static values
    certSimpl.version = 2;
    certSimpl.serialNumber = new asn1js.Integer({ value: 1 });
    certSimpl.issuer.typesAndValues.push(new AttributeTypeAndValue({
        type: "2.5.4.6", // Country name
        value: new asn1js.PrintableString({ value: "RU" })
    }));
    certSimpl.issuer.typesAndValues.push(new AttributeTypeAndValue({
        type: "2.5.4.3", // Common name
        value: new asn1js.BmpString({ value: "Test" })
    }));
    certSimpl.subject.typesAndValues.push(new AttributeTypeAndValue({
        type: "2.5.4.6", // Country name
        value: new asn1js.PrintableString({ value: "RU" })
    }));
    certSimpl.subject.typesAndValues.push(new AttributeTypeAndValue({
        type: "2.5.4.3", // Common name
        value: new asn1js.BmpString({ value: "Test" })
    }));

    certSimpl.notBefore.value = new Date(2016, 1, 1);
    certSimpl.notAfter.value = new Date(2019, 1, 1);

    certSimpl.extensions = []; // Extensions are not a part of certificate by default, it's an optional array

    // region "KeyUsage" extension
    const bitArray = new ArrayBuffer(1);
    const bitView = new Uint8Array(bitArray);

    bitView[0] = bitView[0] | 0x02; // Key usage "cRLSign" flag
    // bitView[0] = bitView[0] | 0x04; // Key usage "keyCertSign" flag

    const keyUsage = new asn1js.BitString({ valueHex: bitArray });

    certSimpl.extensions.push(new Extension({
        extnID: "2.5.29.15",
        critical: false,
        extnValue: keyUsage.toBER(false),
        parsedValue: keyUsage // Parsed value for well-known extensions
    }));
    // endregion
    // endregion

    // region Create a new key pair
    sequence = sequence.then(
        () => {
            // region Get default algorithm parameters for key generation
            const algorithm = getAlgorithmParameters(signatureAlgorithmName, "generatekey");
            if ("hash" in algorithm.algorithm)
                (algorithm.algorithm as any).hash.name = hashAlgorithm;
            // endregion

            return crypto.generateKey(algorithm.algorithm as any, true, algorithm.usages);
        }
    );
    // endregion

    // region Store new key in an interim variables
    sequence = sequence.then(
        (keyPair: CryptoKeyPair) => {
            publicKey = keyPair.publicKey;
            privateKey = keyPair.privateKey;
        },
        (error: Error) => alert(`Error during key generation: ${error}`)
    );
    // endregion

    // region Exporting public key into "subjectPublicKeyInfo" value of certificate
    sequence = sequence.then(
        () => certSimpl.subjectPublicKeyInfo.importKey(publicKey)
    );
    // endregion

    // region Signing final certificate
    sequence = sequence.then(
        () => certSimpl.sign(privateKey, hashAlgorithm),
        error => alert(`Error during exporting public key: ${error}`)
    );
    // endregion

    // region Encode and store certificate
    sequence = sequence.then(
        () => {
            const certSimplEncoded = certSimpl.toSchema(true).toBER(false);

            const certSimplString = String.fromCharCode.apply(null, new Uint8Array(certSimplEncoded));

            let resultString = "-----BEGIN CERTIFICATE-----\r\n";
            resultString = resultString + formatPEM(window.btoa(certSimplString));
            resultString = `${resultString}\r\n-----END CERTIFICATE-----\r\n`;

            document.getElementById("new_signed_data").innerHTML = resultString;

            alert("Certificate created successfully!");
        },
        error => alert(`Error during signing: ${error}`)
    );
    // endregion

    // region Exporting private key
    sequence = sequence.then(
        () => crypto.exportKey("pkcs8", privateKey)
    );
    // endregion

    // region Store exported key on Web page
    sequence = sequence.then(
        result => {
            const privateKeyString = String.fromCharCode.apply(null, new Uint8Array(result));

            let resultString = document.getElementById("new_signed_data").innerHTML;

            resultString = `${resultString}\r\n-----BEGIN PRIVATE KEY-----\r\n`;
            resultString = resultString + formatPEM(window.btoa(privateKeyString));
            resultString = `${resultString}\r\n-----END PRIVATE KEY-----\r\n`;

            document.getElementById("new_signed_data").innerHTML = resultString;

            alert("Private key exported successfully!");
        },
        error => alert(`Error during exporting of private key: ${error}`)
    );
    // endregion

    // region Check if user wants us to include signed extensions
    if ((document.getElementById("add_ext") as HTMLInputElement).checked) {
        // region Create a message digest
        sequence = sequence.then(
            () => crypto.digest({ name: hashAlgorithm }, new Uint8Array(buffer))
        );
        // endregion

        // region Combine all signed extensions
        sequence = sequence.then(
            result => {
                const signedAttr: Attribute[] = [];

                signedAttr.push(new Attribute({
                    type: "1.2.840.113549.1.9.3",
                    values: [
                        new asn1js.ObjectIdentifier({ value: "1.2.840.113549.1.7.1" })
                    ]
                })); // contentType

                signedAttr.push(new Attribute({
                    type: "1.2.840.113549.1.9.5",
                    values: [
                        new asn1js.UTCTime({ valueDate: new Date() })
                    ]
                })); // signingTime

                signedAttr.push(new Attribute({
                    type: "1.2.840.113549.1.9.4",
                    values: [
                        new asn1js.OctetString({ valueHex: result })
                    ]
                })); // messageDigest

                return signedAttr;
            }
        );
        // endregion
    }
    // endregion

    // region Initialize CMS Signed Data structures and sign it
    sequence = sequence.then(
        result => {
            cmsSignedSimpl = new SignedData({
                version: 1,
                encapContentInfo: new EncapsulatedContentInfo({
                    eContentType: "1.2.840.113549.1.7.1" // "data" content type
                }),
                signerInfos: [
                    new SignerInfo({
                        version: 1,
                        sid: new IssuerAndSerialNumber({
                            issuer: certSimpl.issuer,
                            serialNumber: certSimpl.serialNumber
                        })
                    })
                ],
                certificates: [certSimpl]
            });

            if ((document.getElementById("add_ext") as HTMLInputElement).checked) {
                cmsSignedSimpl.signerInfos[0].signedAttrs = new SignedAndUnsignedAttributes({
                    type: 0,
                    attributes: result
                });
            }

            if ((document.getElementById("detached_signature") as HTMLInputElement).checked === false) {
                const contentInfo = new EncapsulatedContentInfo({
                    eContent: new asn1js.OctetString({ valueHex: buffer })
                });

                cmsSignedSimpl.encapContentInfo.eContent = contentInfo.eContent;

                return cmsSignedSimpl.sign(privateKey, 0, hashAlgorithm);
            }

            return cmsSignedSimpl.sign(privateKey, 0, hashAlgorithm, buffer);
        }
    );
    // endregion

    // region Create final result
    sequence.then(
        () => {
            const cmsSignedSchema = cmsSignedSimpl.toSchema(true);

            const cmsContentSimp = new ContentInfo({
                contentType: "1.2.840.113549.1.7.2",
                content: cmsSignedSchema
            });

            const _cmsSignedSchema = cmsContentSimp.toSchema();

            // region Make length of some elements in "indefinite form"
            _cmsSignedSchema.lenBlock.isIndefiniteForm = true;

            const block1 = _cmsSignedSchema.valueBlock.value[1];
            block1.lenBlock.isIndefiniteForm = true;

            const block2 = block1.valueBlock.value[0];
            block2.lenBlock.isIndefiniteForm = true;

            if ((document.getElementById("detached_signature") as HTMLInputElement).checked === false) {
                const block3 = block2.valueBlock.value[2];
                block3.lenBlock.isIndefiniteForm = true;
                block3.valueBlock.value[1].lenBlock.isIndefiniteForm = true;
                block3.valueBlock.value[1].valueBlock.value[0].lenBlock.isIndefiniteForm = true;
            }
            // endregion

            cmsSignedBuffer = _cmsSignedSchema.toBER(false);

            // region Convert ArrayBuffer to String
            let signedDataString = "";
            const view = new Uint8Array(cmsSignedBuffer);

            for (let i = 0; i < view.length; i++)
                signedDataString = signedDataString + String.fromCharCode(view[i]);
            // endregion

            let resultString = document.getElementById("new_signed_data").innerHTML;

            resultString = `${resultString}\r\n-----BEGIN CMS-----\r\n`;
            resultString = resultString + formatPEM(window.btoa(signedDataString));
            resultString = `${resultString}\r\n-----END CMS-----\r\n\r\n`;

            document.getElementById("new_signed_data").innerHTML = resultString;

            parseCMSSigned();

            alert("CMS Signed Data created successfully!");
        },
        error =>
            alert(`Erorr during signing of CMS Signed Data: ${error}`)
    );
    // endregion
}
// *********************************************************************************
// endregion
// *********************************************************************************
// region Verify existing CMS_Signed
// *********************************************************************************
function verifyCMSSigned() {
    // region Initial check
    if (cmsSignedBuffer.byteLength === 0) {
        alert("Nothing to verify!");
        return;
    }
    // endregion

    // region Decode existing CMS_Signed
    const asn1 = asn1js.fromBER(cmsSignedBuffer);
    const cmsContentSimpl = new ContentInfo({ schema: asn1.result });
    const cmsSignedSimpl = new SignedData({ schema: cmsContentSimpl.content });
    // endregion

    // region Verify CMS_Signed
    cmsSignedSimpl.verify({ signer: 0, trustedCerts: trustedCertificates }).
        then(
        result => alert(`Verification result: ${result}`),
        error => alert(`Error during verification: ${error}`)
        );
    // endregion
}

function handleFileBrowse(evt: Event) {
    const tempReader = new FileReader();

    const currentFiles = (evt.target as any).files;

    tempReader.onload =
        event => createCMSSigned((event.target as any).result);

    tempReader.readAsArrayBuffer(currentFiles[0]);
}

function handleParsingFile(evt: Event) {
    const tempReader = new FileReader();

    const currentFiles = (evt.target as any).files;

    tempReader.onload =
        event => {
            cmsSignedBuffer = (event.target as any).result;
            parseCMSSigned();
        };

    tempReader.readAsArrayBuffer(currentFiles[0]);
}

function handleCABundle(evt: Event) {
    const tempReader = new FileReader();

    const currentFiles = (evt.target as any).files;

    tempReader.onload =
        event => parseCAbundle((event.target as any).result);

    tempReader.readAsArrayBuffer(currentFiles[0]);
}

function typetest_RelativeDN_isEqual() {

    const rdn1 = new RelativeDistinguishedNames();
    const rdn2 = new RelativeDistinguishedNames();
    const arraybuf = new ArrayBuffer(1);

    rdn1.isEqual(rdn2); // $ExpectType boolean
    rdn1.isEqual(arraybuf); // $ExpectType boolean
}
