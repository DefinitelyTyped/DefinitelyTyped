import { random, meaningful, shortId, uuidv4, hashCode } from "meaningful-string";

random(); // $ExpectType string
meaningful(); // $ExpectType string
uuidv4(); // $ExpectType string
hashCode("TypeScript"); // $ExpectType string
shortId(); // $ExpectType string
