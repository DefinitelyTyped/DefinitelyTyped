import OpenLocationCode from "open-location-code";

const a = "796RWF8Q+WF";
const area = OpenLocationCode.decode(a);

console.log(`${area.latitudeCenter}, ${area.longitudeCenter}`);
console.log(`${area.latitudeLo}, ${area.longitudeLo}`);
console.log(`${area.latitudeHi}, ${area.longitudeHi}`);
console.log(`${area.codeLength}`);

const code = OpenLocationCode.encode(area.latitudeCenter, area.longitudeCenter, area.codeLength);

console.log(code);

const shorten = OpenLocationCode.shorten("87G70000+", 40.7127, -74.0059);

console.log(shorten);
