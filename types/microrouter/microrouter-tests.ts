import {RouteHandler} from 'microrouter';
import UrlPattern = require('url-pattern');

const stringHandler = new RouteHandler('test', () => console.log('1'));
const urlPatternHandler = new RouteHandler(new UrlPattern('test'), () => console.log('1'));

