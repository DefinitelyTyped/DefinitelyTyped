import { decode, encode } from "record-locator";

const documentId = 3141592;
encode(documentId); // $ExpectType string

const documentReference = "4ZVYR";
decode(documentReference); // $ExpectType number
