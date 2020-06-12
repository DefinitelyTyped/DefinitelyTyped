import assertRecord = require("es-abstract/helpers/assertRecord");
import ESAbstract = require("es-abstract");

declare const desc: ESAbstract.PropertyDescriptor;

// $ExpectType void
assertRecord(ESAbstract, "Property Descriptor", "desc", desc);

// $ExpectError
assertRecord(ESAbstract, "Property Descriptor", "desc", null);
