import imported = require("jssha");

// constructor
const shaObj1 = new imported("SHA-512", "TEXT");
const shaObj2 = new imported("SHA-512", "TEXT", { });
const shaObj3 = new imported("SHA-512", "TEXT", { encoding: "UTF8" });
const shaObj4 = new imported("SHA-512", "TEXT", { numRounds: 1 });
const shaObj5 = new imported("SHA-512", "TEXT", { encoding: "UTF8", numRounds: 1 });
const shakeObj = new imported("SHAKE256", "ARRAYBUFFER");

// setHMACKey
shaObj1.setHMACKey("key", "TEXT");
shaObj2.setHMACKey("key", "TEXT", { });
shaObj3.setHMACKey("key", "TEXT", { encoding: "UTF8" });
shaObj3.setHMACKey(new ArrayBuffer(10), "ARRAYBUFFER");

// update
shaObj1.update("This is a test");
shakeObj.update(new ArrayBuffer(10));

// getHash
const hash1: string = shaObj4.getHash("HEX");
const hash2: string = shaObj4.getHash("HEX", {});
const hash3: string = shaObj4.getHash("HEX", { b64Pad: "=" });
const hash4: string = shaObj4.getHash("HEX", { outputUpper: true });
const hash5: string = shaObj4.getHash("HEX", { outputUpper: true, b64Pad: '=' });
const hash6: ArrayBuffer = shakeObj.getHash("ARRAYBUFFER", { shakeLen: 128 });

// getHMAC
const hmac1: string = shaObj1.getHMAC("HEX");
const hmac2: string = shaObj1.getHMAC("HEX", {});
const hmac3: string = shaObj1.getHMAC("HEX", { b64Pad: "=" });
const hmac4: string = shaObj1.getHMAC("HEX", { outputUpper: true });
const hmac5: string = shaObj1.getHMAC("HEX", { outputUpper: true, b64Pad: '=' });
const hmac6: ArrayBuffer = shaObj1.getHMAC("ARRAYBUFFER", { shakeLen: 128 });

// examples from the readme.md (https://github.com/Caligatio/jsSHA/blob/v2.0.2/README.md)
{
	const shaObj = new imported("SHA-512", "TEXT");
	shaObj.update("This is a test");
	const hash = shaObj.getHash("HEX");
}

{
	const shaObj = new imported("SHA-256", "TEXT");
	shaObj.setHMACKey("abc", "TEXT");
	shaObj.update("This is a test");
	const hmac = shaObj.getHMAC("HEX");
}

// Browser global test
{
	const shaObj = new imported("SHA-512", "TEXT");
	shaObj.update("This is a test");
	const hash = shaObj.getHash("HEX");
}
