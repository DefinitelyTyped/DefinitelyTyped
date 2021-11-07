import Ola = require('ola');

const SingleValueOla = Ola(1);
SingleValueOla.value; // $ExpectType number
SingleValueOla.get(); // $ExpectType number
SingleValueOla.get('value'); // $ExpectType number
SingleValueOla.set(10, 500); // $ExpectType void
SingleValueOla.x; // $ExpectError
SingleValueOla.get('x'); // $ExpectError

const MultiValueOla = Ola({ x: 0, y: 10 });
MultiValueOla.x; // $ExpectType number
MultiValueOla.get('y'); // $ExpectType number
MultiValueOla.set({ x: 10, y: 0 }, 500); // $ExpectType void
MultiValueOla.get(); // $ExpectError
MultiValueOla.z; // $ExpectError
MultiValueOla.get('z'); // $ExpectError
MultiValueOla.set({ z: 100 }, 500); // $ExpectError

const TupleValueOla = Ola([0, 10]);
TupleValueOla.set([10, 0], 500); // $ExpectType void
