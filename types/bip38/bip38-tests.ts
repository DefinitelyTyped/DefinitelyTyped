import * as bip38 from "bip38";

const myWifString = "5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR";

const SCRYPT_PARAMS = {
    N: 16384, // specified by BIP38
    r: 8,
    p: 8,
};

// Result from wif.decode for testing
const decoded = {
    version: 48,
    privateKey: Buffer.from("12345678901234567890123456789012"),
    compressed: true,
};

const progressCallback = (status: bip38.ProgressStatus) => {
    status.current;
    status.total;
    status.percent;
};

// Test encrypt without progressCallback
const encryptedKey = bip38.encrypt(decoded.privateKey, decoded.compressed, "TestingOneTwoThree");

// Test encrypt with progressCallback
bip38.encrypt(decoded.privateKey, decoded.compressed, "TestingOneTwoThree", progressCallback);

// Test decrypt without progressCallback
const decryptedKey = bip38.decrypt(encryptedKey, "TestingOneTwoThree");

// Test decrypt with progressCallback
bip38.decrypt(encryptedKey, "TestingOneTwoThree", progressCallback);

// Test encryptAsync without optional params, test the result type
bip38
    .encryptAsync(Buffer.from("TestEncryptAsync"), true, "TestEncryptAsyncPassPhrase")
    .then((result: string) => result);

// Test encryptAsync with all params, test the result type
bip38
    .encryptAsync(
        Buffer.from("TestEncryptAsync"),
        true,
        "TestEncryptAsyncPassPhrase",
        progressCallback,
        SCRYPT_PARAMS,
        10,
    )
    .then((result: string) => result);

// Test encryptRawAsync without optional params, test the result type
bip38
    .encryptRawAsync(Buffer.from("TestEncryptRawAsync"), true, "TestEncryptRawAsyncPassPhrase")
    .then((result: Buffer) => result);

// Test encryptRawAsync with all params, test the result type
bip38
    .encryptRawAsync(
        Buffer.from("TestEncryptRawAsync"),
        true,
        "TestEncryptRawAsyncPassPhrase",
        progressCallback,
        SCRYPT_PARAMS,
        10,
    )
    .then((result: Buffer) => result);

// Test decryptAsync without optional params, test the result type
bip38.decryptAsync("SomeEncryptedDummy", "MyPassPhrase").then((result: bip38.DecryptResult) => result);

// Test decryptAsync with all params, test the result type
bip38
    .decryptAsync("SomeEncryptedDummy", "MyPassPhrase", progressCallback, SCRYPT_PARAMS, 10)
    .then((result: bip38.DecryptResult) => result);

// Test decryptRawAsync without optional params, test the result type
bip38.decryptRawAsync(Buffer.from("SomeEncryptedDummy"), "MyPassPhrase").then((result: bip38.DecryptResult) => result);

// Test decryptRawAsync with all params, test the result type
bip38
    .decryptRawAsync(Buffer.from("SomeEncryptedDummy"), "MyPassPhrase", progressCallback, SCRYPT_PARAMS, 10)
    .then((result: bip38.DecryptResult) => result);

// Test decryptECMultAsync without optional params, test the result type
bip38.decryptECMultAsync("SomeEncryptedDummy", "MyPassPhrase").then((result: bip38.DecryptResult) => result);

// Test decryptECMultAsync with all params, test the result type
bip38
    .decryptECMultAsync("SomeEncryptedDummy", "MyPassPhrase", progressCallback, SCRYPT_PARAMS, 10)
    .then((result: bip38.DecryptResult) => result);
