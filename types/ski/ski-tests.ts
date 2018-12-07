
import { S, K, I } from 'ski';

var foo: string = S(a => b => a + b, a => a.split('').reverse().join(''), 'bar'); // barrab

var foo: string = K('bar')(); // bar

var foo: string = I('bar'); // bar
