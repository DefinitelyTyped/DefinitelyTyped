import validator = require('jochong-validator');

const a = validator('h').isString().isNotEmpty().end();
const b = validator('e').isString().isEmail().end();
const c = validator('l').isString().isIn(['h', 'e', 'l', 'l', 'o']).end();
const d = validator('l').isString().isName().end();

const e = validator(1).isNumber().isIn([1, 2, 3]).end();
const f = validator(2).isNumber().range(1).end();
const g = validator(3).isNumber().range(1, 5).end();

const h = validator([1, 2, 3]).isArray().length(1, 10).end();
const i = validator([1, 2, 3]).isArray().isAllNumber().end();
const j = validator([1, 2, 3]).isArray().isAllString().end();
