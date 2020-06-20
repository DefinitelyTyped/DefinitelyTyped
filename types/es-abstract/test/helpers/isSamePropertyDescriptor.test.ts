import { PropertyDescriptor as ESPropertyDescriptor } from 'es-abstract';
import ES5 = require('es-abstract/es5');
import isSamePropertyDescriptor = require('es-abstract/helpers/isSamePropertyDescriptor');

declare const p1: ESPropertyDescriptor;
declare const p2: ESPropertyDescriptor;

isSamePropertyDescriptor(ES5, p1, p2); // $ExpectType boolean
