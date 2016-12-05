import resolveFrom = require("resolve-from");

import resolveFrom1 = require('resolve-from');
import * as resolveFrom2 from 'resolve-from';

let from: string;
let moduleId: string;
let result: string;

result = resolveFrom1(from, moduleId);
result = resolveFrom2(from, moduleId);
