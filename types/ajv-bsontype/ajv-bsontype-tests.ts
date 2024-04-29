import Ajv from "ajv";
import ajvBsontype = require("ajv-bsontype");

const ajv = new Ajv();
ajvBsontype(ajv);
