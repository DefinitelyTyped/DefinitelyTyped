import isUri = require('is-uri');
import { URI } from 'parse-uri';

const result1: boolean = isUri('');
const result2: boolean = isUri('', { strictMode: true });

const uri: URI = <any> {};
const result3: boolean = isUri(uri);
