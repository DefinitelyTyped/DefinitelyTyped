import hasPropertyDescriptors = require("has-property-descriptors");

import { hasArrayLengthDefineBug } from "has-property-descriptors";

hasPropertyDescriptors(); // $ExpectType boolean

hasArrayLengthDefineBug; // $ExpectType () => boolean
