import UuidEncoder from "uuid-encoder";

// $ExpectType UuidEncoder
const encoder = new UuidEncoder("base36");

// $ExpectType string
const encodedUuid = encoder.encode("38b9823d-fa1a-48e7-91fc-ee16ad091cf2");

// $ExpectType string
const decodedUuid = encoder.decode(encodedUuid);
