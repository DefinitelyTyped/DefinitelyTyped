import * as Ajv from "ajv";
import * as ajvMergePatch from "ajv-merge-patch";

const ajv = new Ajv();

ajvMergePatch(ajv); // $ExpectType void
