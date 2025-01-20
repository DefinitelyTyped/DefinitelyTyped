import { hashCode, meaningful, random, shortId, uuidv4 } from "meaningful-string";

random(); // $ExpectType string
meaningful(); // $ExpectType string
uuidv4(); // $ExpectType string
hashCode("TypeScript"); // $ExpectType string
shortId(); // $ExpectType string
