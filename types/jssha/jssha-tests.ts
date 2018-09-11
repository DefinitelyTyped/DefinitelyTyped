import imported = require("jssha");

// constructor
let shaObj1 = new imported("SHA-512", "TEXT");
let shaObj2 = new imported("SHA-512", "TEXT", { });
let shaObj3 = new imported("SHA-512", "TEXT", { encoding: "UTF8" });
let shaObj4 = new imported("SHA-512", "TEXT", { numRounds: 1 });
let shaObj5 = new imported("SHA-512", "TEXT", { encoding: "UTF8", numRounds: 1 });

// setHMACKey
shaObj1.setHMACKey("key", "TEXT");
shaObj2.setHMACKey("key", "TEXT", { });
shaObj3.setHMACKey("key", "TEXT", { encoding: "UTF8" });

// update
shaObj1.update("This is a test");

// getHash
let hash1:string = shaObj4.getHash("HEX");
let hash2:string = shaObj4.getHash("HEX", {});
let hash3:string = shaObj4.getHash("HEX", { b64Pad: "=" });
let hash4:string = shaObj4.getHash("HEX", { outputUpper: true });
let hash5:string = shaObj4.getHash("HEX", { outputUpper: true, b64Pad: '=' });

// getHMAC
let hmac1:string = shaObj1.getHMAC("HEX");
let hmac2:string = shaObj1.getHMAC("HEX", {});
let hmac3:string = shaObj1.getHMAC("HEX", { b64Pad: "=" });
let hmac4:string = shaObj1.getHMAC("HEX", { outputUpper: true });
let hmac5:string = shaObj1.getHMAC("HEX", { outputUpper: true, b64Pad: '=' });


// examples from the readme.md (https://github.com/Caligatio/jsSHA/blob/v2.0.2/README.md)
{
	var shaObj = new imported("SHA-512", "TEXT");
	shaObj.update("This is a test");
	var hash = shaObj.getHash("HEX");
}


{
	let shaObj = new imported("SHA-256", "TEXT");
	shaObj.setHMACKey("abc", "TEXT");
	shaObj.update("This is a test");
	let hmac = shaObj.getHMAC("HEX");
}

// Browser global test
{
	var shaObj = new imported("SHA-512", "TEXT");
	shaObj.update("This is a test");
	var hash = shaObj.getHash("HEX");
}