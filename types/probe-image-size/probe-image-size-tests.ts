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

// -- /lib/parse_sync/bmp.js

import parseBmp from "probe-image-size/lib/parse_sync/bmp.js";

/** The smallest BMP that will pass `parseBmp` checks. */
const testBmpMinimal = "BM" // Signature
    + "\x1A\x00\x00\x00" // File size: 26 bytes (header size)
    + "\x00\x00\x00\x00" // Reserved
    + "\x1A\x00\x00\x00" // Pixel data offset: 26 bytes (header size)
    + "\x0C\x00\x00\x00" // Header size: 12 bytes (BITMAPCOREHEADER)
    + "\x01\x00" // Width: 1
    + "\x01\x00" // Height: 1
    + "\x01\x00" // Planes: 1
    + "\x01\x00" // Bits per pixel: 1
    + "\x00\x00\x00\x00"; // Pixel data: 0 (black pixel)

// @ts-expect-error - not a Buffer.
parseBmp(testBmpMinimal);

parseBmp(Buffer.from(testBmpMinimal)); // $ExpectType { width: number; height: number; type: "bmp"; mime: "image/bmp"; wUnits: "px"; hUnits: "px"; } | undefined

// -- /lib/parse_sync/ico.js

import parseIco from "probe-image-size/lib/parse_sync/ico.js";

/** The smallest input that will pass `parseIco` checks (not a complete ICO). */
const testIcoMinimal = "\x00\x00" // Reserved. Must always be 0.
    + "\x01\x00" // Specifies image type: 1 for icon (.ICO)
    + "\x01\x00" // Specifies number of images in the file: 1
    + "\x01" // Width, 1 pixel. 0 means 256 pixels.
    + "\x01"; // Height, 1 pixel. 0 means 256 pixels.

// @ts-expect-error - not a Buffer.
parseIco(testIcoMinimal);

parseIco(Buffer.from(testIcoMinimal)); // $ExpectType { width: number; height: number; variants: { width: number; height: number; }[]; type: "ico"; mime: "image/x-icon"; wUnits: "px"; hUnits: "px"; } | undefined

// -- /lib/parse_sync/png.js

import parsePng from "probe-image-size/lib/parse_sync/png.js";

/** The smallest PNG that will pass `parsePng` checks. */
const testPngMinimal = "\x89PNG\r\n\x1a\n"
    + "\x00\x00\x00\x0D" // IHDR chunk length: 13 bytes
    + "IHDR"
    + "\x00\x00\x00\x01" // Width: 1
    + "\x00\x00\x00\x01"; // Height: 1

// @ts-expect-error - not a Buffer.
parsePng(testPngMinimal);

parsePng(Buffer.from(testPngMinimal)); // $ExpectType { width: number; height: number; type: "png"; mime: "image/png"; wUnits: "px"; hUnits: "px"; } | undefined

// -- /stream.js

import probeStream from "probe-image-size/stream.js";

(async () => {
    await probeStream(fs.createReadStream("image.jpg")); // $ExpectType ProbeResult
    await probeStream(fs.createReadStream("image.jpg"), true); // $ExpectType ProbeResult

    // @ts-expect-error - not a Readable.
    await probeStream("Foo");
})();
