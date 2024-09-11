import { deepClone, isFunction, isObject } from 'snaply';

{
  const obj = { a: 1, b: { c: 2 } };
  const cloned = deepClone(obj); // $ExpectType { a: number; b: { c: number; }; } 
  cloned.b.c; // $ExpectType number

  const arr = [1, 2, 3];
  const clonedArr = deepClone(arr); // $ExpectType number[]

  const map = new Map();
  const clonedMap = deepClone(map); // $ExpectType  Map<any, any>

  const weakMap = new WeakMap();
  const clonedWeakMap = deepClone(weakMap); // $ExpectType  WeakMap<object, any>
}

{
    function fn() {}
  const notFunc = 123;

  isFunction(fn); // $ExpectType boolean
  isFunction(notFunc); // $ExpectType boolean

  if (isFunction(fn)) {
    fn(); // $ExpectType void (no need to test the execution here, the function type guard suffices)
  }
}

{
  const obj = { a: 1 };
  const notObj = 123;

  isObject(obj); // $ExpectType boolean
  isObject(notObj); // $ExpectType boolean

  if (isObject(obj)) {
    obj.a; // $ExpectType number
  }
}
