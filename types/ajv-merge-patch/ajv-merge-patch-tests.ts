import * as Ajv from "ajv";

import ajvMergePatch = require("ajv-merge-patch");

const ajv = new Ajv();

ajvMergePatch(ajv); // $ExpectType void
