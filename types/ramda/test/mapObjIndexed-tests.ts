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

() => {
    interface Student {
        name: string;
        teacherName: string;
    }

    const s: Student = {
        name: 'sn',
        teacherName: 'tn',
    };

    const ns: Student = R.mapObjIndexed((value, key) => value, s);

    const ns1: Student = R.mapObjIndexed<Student, string>((value, key) => value)(s);

    const ns2: {
        [index: string]: any;
    } = R.mapObjIndexed((value, key) => value)(s);
};
