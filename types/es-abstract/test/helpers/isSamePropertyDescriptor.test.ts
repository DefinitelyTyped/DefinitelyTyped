import { PropertyDescriptor as ESPropertyDescriptor } from 'es-abstract';
import ES5 = require('es-abstract/es5');
import isSamePropertyDescriptor = require('es-abstract/helpers/isSamePropertyDescriptor');

const p1: ESPropertyDescriptor = {};
const p2: ESPropertyDescriptor = {};

isSamePropertyDescriptor(ES5, p1, p2);
