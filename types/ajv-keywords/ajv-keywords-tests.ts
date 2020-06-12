import Ajv from 'ajv';
import defineKeywords = require('ajv-keywords');

let ajv = new Ajv();
ajv = defineKeywords(ajv);
