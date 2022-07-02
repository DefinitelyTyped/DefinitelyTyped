import { compare, hash, hash_from_file } from 'ssdeep';

let str = 'string';
let num = 123;

num = compare(str, str);
str = hash(str);
str = hash_from_file(str);
