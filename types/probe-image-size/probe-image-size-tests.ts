import probe = require("probe-image-size");
import fs = require("fs");

const input = fs.createReadStream("image.jpg");
const data = fs.readFileSync("image.jpg");

(async () => {
    let probeResult: probe.ProbeResult;
    probeResult = await probe(""); // $ExpectType ProbeResult
    probeResult = await probe("", { follow_max: 10 }); // $ExpectType ProbeResult

    probeResult = await probe("http://example.com/image.jpg", { timeout: 5000 });
    const { variants, orientation } = probeResult;
    if (variants) {
        variants; // $ExpectType Variant[]
    }
    if (typeof orientation === "number") {
        orientation; // $ExpectType Orientation
    }
    probeResult = await probe("http://example.com/image.jpg"); // $ExpectType ProbeResult
    probeResult = await probe(input); // $ExpectType ProbeResult
    probeResult = await probe(input, true); // $ExpectType ProbeResult
    input.destroy();
    probe.sync(data); // $ExpectType ProbeResult | null

    probe.parsers.bmp(); // $ExpectType ParserStream

    new probe.Error("Error"); // $ExpectType ProbeError
    new probe.Error("Error", "ECONTENT"); // $ExpectType ProbeError
    new probe.Error("Error", "ECONTENT", 404); // $ExpectType ProbeError
})();


// Tests for deep imports.

// -- /lib/parse_sync/png.js

import parsePng from "probe-image-size/lib/parse_sync/png.js";

/** The smallest PNG that will pass `parsePng` checks. */
const testPngMinimal = '\x89PNG\r\n\x1a\n' +
    '\x00\x00\x00\x0D' + // IHDR chunk length: 13 bytes
    'IHDR' +
    '\x00\x00\x00\x01' + // Width: 1
    '\x00\x00\x00\x01';  // Height: 1

// @ts-expect-error - not a Buffer.
parsePng(testPngMinimal);

parsePng(Buffer.from(testPngMinimal)); // $ExpectType { width: number; height: number; type: "png"; mime: "image/png"; wUnits: "px"; hUnits: "px"; } | undefined
