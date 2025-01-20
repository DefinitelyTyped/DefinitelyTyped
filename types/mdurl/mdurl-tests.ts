import mdurl = require("mdurl");
import { Url } from "mdurl";

const encoded: string = mdurl.encode("%%%");
// return '%25%25%25'

const decoded: string = mdurl.decode(encoded);
// return '%%%'

const url: Url = mdurl.parse("HTTP://www.example.com/");
// return {
//     'protocol': 'HTTP:',
//     'slashes': true,
//     'hostname': 'www.example.com',
//     'pathname': '/'
// } as Url

const urlStr: string = mdurl.format(url);
// 'HTTP://www.example.com/'
