import * as R from 'ramda';

() => {
  const values = { x: 1, y: 2, z: 3 };

  function prependKeyAndDouble(num: number, key: string, obj: any) {
    return key + num * 2;
  }

  R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' }
};

() => {
  const testObject: {
    [key: string]: Error;
  } = {
    hello: new Error('hello'),
  };
  const errorMessages = R.mapObjIndexed(function test(value, key) {
    // value should be inferred.
    return value.message + String(key);
  }, testObject);
  console.log(errorMessages);
};
