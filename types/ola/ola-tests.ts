import Ola = require('ola');

const SingleValueOla = Ola(1);
SingleValueOla.value; // $ExpectType number
SingleValueOla.get(); // $ExpectType number
SingleValueOla.get('value'); // $ExpectType number
SingleValueOla.set(10, 500); // $ExpectType void
// @ts-expect-error
SingleValueOla.x;
// @ts-expect-error
SingleValueOla.get('x');

const MultiValueOla = Ola({ x: 0, y: 10 });
MultiValueOla.x; // $ExpectType number
MultiValueOla.get('y'); // $ExpectType number
MultiValueOla.set({ x: 10, y: 0 }, 500); // $ExpectType void
// @ts-expect-error
MultiValueOla.get();
// @ts-expect-error
MultiValueOla.z;
// @ts-expect-error
MultiValueOla.get('z');
// @ts-expect-error
MultiValueOla.set({ z: 100 }, 500);

const TupleValueOla = Ola([0, 10]);
TupleValueOla.set([10, 0], 500); // $ExpectType void
