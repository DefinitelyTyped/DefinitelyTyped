import { SharedArray } from 'k6/data';

new SharedArray('hola', () => []); // $ExpectType []
