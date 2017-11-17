import mdurl = require('mdurl');
import { Url } from 'mdurl';

const encoded: string = mdurl.encode('%%%');
// return '%25%25%25'

const decoded: string = mdurl.decode(encoded);
// return '%%%'

const url: Url = mdurl.parse('HTTP://www.example.com/');
// return {
//     'protocol': 'HTTP:',
//     'slashes': true,
//     'hostname': 'www.example.com',
//     'pathname': '/'
// } as Url

const urlStr: string = mdurl.format(url);
// 'HTTP://www.example.com/'

import encode = require('mdurl/encode');
import decode = require('mdurl/decode');
import parse = require('mdurl/parse');
import format = require('mdurl/format');

const encoded2: string = encode('%%%');

const decoded2: string = decode(encoded);

const url2: Url = parse('HTTP://www.example.com/');

const urlStr2: string = format(url);
