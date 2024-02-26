import OpenLocationCode = require("open-location-code");

const a = "796RWF8Q+WF";
const area = OpenLocationCode.decode(a);

// Tests CodeArea attrs
console.log(`${area.latitudeCenter}, ${area.longitudeCenter}`);
console.log(`${area.latitudeLo}, ${area.longitudeLo}`);
console.log(`${area.latitudeHi}, ${area.longitudeHi}`);
console.log(`${area.codeLength}`);

const code = OpenLocationCode.encode(area.latitudeCenter, area.longitudeCenter, area.codeLength);

console.log(code);
console.log(OpenLocationCode.isFull(code));
console.log(OpenLocationCode.isValid(code));

const shorten = OpenLocationCode.shorten("87G70000+", 40.7127, -74.0059);

console.log(shorten);
console.log(OpenLocationCode.isShort(shorten));

const nearest = OpenLocationCode.recoverNearest("8F+6X", 47.4, 8.6);
console.log(nearest);

console.log(OpenLocationCode.CODE_PRECISION_NORMAL);
console.log(OpenLocationCode.CODE_PRECISION_EXTRA);

OpenLocationCode.getAlphabet();
