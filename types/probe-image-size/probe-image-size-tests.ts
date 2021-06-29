import probe = require("probe-image-size");
import fs = require("fs");

const input = fs.createReadStream("image.jpg");
const data = fs.readFileSync("image.jpg");

(async () => {
    let probeResult: probe.ProbeResult;
    probeResult = await probe(""); // $ExpectType ProbeResult
    probeResult = await probe("", { retries: 3 }); // $ExpectType ProbeResult

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
    input.destroy();
    probe.sync(data); // $ExpectType ProbeResult | null
})();
