
import ent = require("ent");

// encode
const s: string = ent.encode("foo");
const s2: string = ent.encode("foo", { numeric: true, named: true, special: { foo: true } });

// decode
const t: string = ent.decode("foo");
