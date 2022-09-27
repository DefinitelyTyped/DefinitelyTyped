import { get } from 'microrouter';
import UrlPattern = require('url-pattern');

const stringHandler = get('test', () => console.log('1'));
const urlPatternHandler = get(new UrlPattern('test'), () => console.log('1'));
