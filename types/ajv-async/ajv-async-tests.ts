import * as Ajv from 'ajv';
import setupAsyncToAJV = require('ajv-async');

const ajv = new Ajv();
setupAsyncToAJV(ajv); // $ExpectType Ajv
