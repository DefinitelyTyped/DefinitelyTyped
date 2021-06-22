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
        [k: string]: Error;
    } = {
        hello: new Error('hello'),
    };
    const errorMessages = R.mapObjIndexed(function test(value, key) {
        // value should be inferred.
        const test = key.toLowerCase();
        return value.message + String(key);
    }, testObject);
    console.log(errorMessages);
};

() => {
    type TestKeys = 'hello' | 'test';
    const testObject: Record<TestKeys, string> = {
        hello: 'world',
        test: '123',
    };

    const mapped = R.mapObjIndexed(function test(value, key) {
        function unreachableCase(v: never): never {
            throw new Error('not possible');
        }

        let returnValue: number;
        // type of key should be inferred as `TestKeys` (not `string`).
        if (key === 'hello') {
            returnValue = 42;
        } else if (key === 'test') {
            returnValue = 13;
        } else {
            // make sure the type system knows that the key can't be anything other than 'hello' | 'test'
            return unreachableCase(key);
        }

        const test1 = value.charAt(0);
        return returnValue;
    }, testObject);

    // keys of testObject should be detected, and their values should be `number`.
    const helloResult = mapped.hello.toFixed();
    console.log(mapped, helloResult);
};

() => {
    type PartialRecord<K extends keyof any, T> = {
        [P in K]?: T;
    };
    type TestKeys = 'hello' | 'test';
    const testObject: PartialRecord<TestKeys, string> = {
        hello: 'world',
    };

    const mapped = R.mapObjIndexed(function test(value, key) {
        function unreachableCase(v: never): never {
            throw new Error('not possible');
        }

        let returnValue: number;
        // type of key should be inferred as `TestKeys` (not `string`).
        if (key === 'hello') {
            returnValue = 42;
        } else if (key === 'test') {
            returnValue = 13;
        } else {
            return unreachableCase(key);
        }

        return returnValue;
    }, testObject);

    // keys of testObject should be detected, and their values should be `number`.
    const helloResult = mapped.hello?.toFixed();
    console.log(mapped, helloResult);
};
