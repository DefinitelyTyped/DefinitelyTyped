/// <reference types="node" />

import ssri = require("ssri");
import { createReadStream } from "fs";

const integrityString =
	"sha512-9KhgCRIx/AmzC8xqYJTZRrnO8OW2Pxyl2DIMZSBOr0oDvtEFyht3xpp71j/r/pAe1DM+JI/A+line3jUBgzQ7A==?foo";
const hash = { algorithm: "sha512", digest: "c0ffee", options: [] };

const integrity = {
	sha1: [{ algorithm: "sha1", digest: "deadbeef", options: [] }],
	sha512: [
		{ algorithm: "sha512", digest: "c0ffee", options: [] },
		{ algorithm: "sha512", digest: "bad1dea", options: ["foo"] },
	],
};
const single: boolean | undefined = (() => {
	const i = Math.random();
	if (i < 0.5) return undefined;
	if (i < 0.75) return false;
	return true;
})();

// $ExpectType IntegrityMap
ssri.parse(integrityString);
// $ExpectType IntegrityMap
ssri.parse(hash);
// $ExpectType IntegrityMap
ssri.parse(integrity);
// $ExpectType Hash
ssri.parse(integrityString, { single: true, strict: true });
// $ExpectType IntegrityMap
ssri.parse(integrityString, { strict: true });
// $ExpectType IntegrityMap | Hash
ssri.parse(integrityString, { single, strict: true });

// $ExpectType string
ssri.stringify("\n\rsha512-foo\n\t\tsha384-bar");
// $ExpectType string
ssri.stringify(hash);
// $ExpectType string
ssri.stringify(integrity);
// $ExpectType string
ssri.stringify("\n\rsha512-foo\n\t\tsha384-bar", { strict: false, sep: "," });

// $ExpectType IntegrityMap
new ssri.Integrity().concat(integrityString);
// $ExpectType IntegrityMap
new ssri.Integrity().concat(hash);
// $ExpectType IntegrityMap
new ssri.Integrity().concat(integrity);
// $ExpectType IntegrityMap
new ssri.Integrity().concat(integrityString, { strict: true });

// $ExpectType string
new ssri.Integrity().toString();
// $ExpectType string
new ssri.Integrity().toString({ strict: false, sep: "," });

// $ExpectType string
new ssri.Integrity().toJSON();

// $ExpectType false | Hash
new ssri.Integrity().match(integrityString);
// $ExpectType false | Hash
new ssri.Integrity().match(hash);
// $ExpectType false | Hash
new ssri.Integrity().match(integrity);
// $ExpectType false | Hash
new ssri.Integrity().match(integrityString, {
	strict: true,
	pickAlgorithm: (a, b) => a,
});

// $ExpectType string
new ssri.Integrity().pickAlgorithm();
// $ExpectType string
new ssri.Integrity().pickAlgorithm({ pickAlgorithm: (a, b) => a });

// $ExpectType string
new ssri.Integrity().hexDigest();

// $ExpectType IntegrityMap
ssri.fromHex("75e69d6de79f", "sha1");
// $ExpectType Hash
ssri.fromHex("75e69d6de79f", "sha1", {
	single: true,
	strict: false,
	options: ["sriOpt"],
});
// $ExpectType IntegrityMap
ssri.fromHex("75e69d6de79f", "sha1", { strict: false, options: ["sriOpt"] });
// $ExpectType IntegrityMap | Hash
ssri.fromHex("75e69d6de79f", "sha1", {
	single,
	strict: false,
	options: ["sriOpt"],
});

// $ExpectType IntegrityMap
ssri.fromData("foobarbaz");
// $ExpectType IntegrityMap
ssri.fromData(Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]));
// $ExpectType IntegrityMap
ssri.fromData("foobarbaz", {
	algorithms: ["sha256", "sha384", "sha512"],
	strict: true,
	options: ["sriOpt"],
});

// $ExpectType Promise<IntegrityMap>
ssri.fromStream(createReadStream("index.js"));
// $ExpectType PromiseLike<IntegrityMap>
ssri.fromStream(createReadStream("index.js"), {
	algorithms: ["sha1", "sha512"],
	strict: true,
	options: ["sriOpt"],
	Promise,
});

// $ExpectType Hash
ssri.create();
// $ExpectType Hash
ssri.create({
	algorithms: ["sha1", "sha512"],
	strict: true,
	options: ["sriOpt"],
});

// $ExpectType false | Hash
ssri.checkData("data", integrityString);
// $ExpectType false | Hash
ssri.checkData(
	Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]),
	integrityString,
);
// $ExpectType false | Hash
ssri.checkData("data", hash);
// $ExpectType false | Hash
ssri.checkData("data", integrity);
// $ExpectType false | Hash
ssri.checkData("data", integrityString, {
	strict: true,
	pickAlgorithm: (a, b) => a,
	error: true,
	size: 1,
});

// $ExpectType Promise<Hash>
ssri.checkStream(createReadStream("index.js"), integrityString);
// $ExpectType Promise<Hash>
ssri.checkStream(createReadStream("index.js"), hash);
// $ExpectType Promise<Hash>
ssri.checkStream(createReadStream("index.js"), integrity);
// $ExpectType Promise<Hash>
ssri.checkStream(createReadStream("index.js"), integrityString, {
	strict: true,
	options: ["sriOpt"],
	pickAlgorithm: (a, b) => a,
	size: 1,
});
// $ExpectType PromiseLike<Hash>
ssri.checkStream(createReadStream("index.js"), integrityString, {
	strict: true,
	options: ["sriOpt"],
	pickAlgorithm: (a, b) => a,
	size: 1,
	Promise,
});

// $ExpectType Transform
ssri.integrityStream();
// $ExpectType Transform
ssri.integrityStream({
	single: true,
	strict: true,
	options: ["sriOpt"],
	pickAlgorithm: (a, b) => a,
	size: 1,
	integrity,
	algorithms: ["sha1", "sha256"],
});
