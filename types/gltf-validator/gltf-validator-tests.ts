import * as gltfValidator from "gltf-validator";

const glbData = new Uint8Array([0x67, 0x6c, 0x54, 0x46]);
const gltfJson = JSON.stringify({ asset: { version: "2.0" } });

const versionString = gltfValidator.version(); // $ExpectType string
const extensions = gltfValidator.supportedExtensions(); // $ExpectType string[]

const externalResource: gltfValidator.ExternalResourceFunction = async (uri: string) => {
    uri.toUpperCase();
    return new Uint8Array([0x01, 0x02]);
};

const options: gltfValidator.ValidationOptions = {
    uri: "file:///scene.gltf",
    format: "gltf",
    externalResourceFunction: externalResource,
    writeTimestamp: true,
    maxIssues: 10,
    ignoredIssues: ["ACCESSOR_INVALID"],
    onlyIssues: ["NODE_INVALID"],
    severityOverrides: {
        NODE_INVALID: 2,
    },
};

const bytesResult = gltfValidator.validateBytes(glbData); // $ExpectType Promise<ValidationResult>
const bytesResultWithOptions = gltfValidator.validateBytes(glbData, options); // $ExpectType Promise<ValidationResult>

const stringResult = gltfValidator.validateString(gltfJson); // $ExpectType Promise<ValidationResult>
const stringResultWithOptions = gltfValidator.validateString(gltfJson, options); // $ExpectType Promise<ValidationResult>

bytesResult.then((result: gltfValidator.ValidationResult) => {
});

stringResultWithOptions.then((result: gltfValidator.ValidationResult) => {
});
