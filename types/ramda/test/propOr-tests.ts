import * as R from 'ramda';

const sym = Symbol('sde');
const obj = {
    name: 'Object name' as const,
    age: 101 as const,
    [sym]: 'symbol' as const,
};

const defaultValue = 'Default value' as const;
const propName = 'age';

() => {
    // Test logic

    // $ExpectType "symbol" | "Default value"
    const testSymbol = R.propOr('Default value', sym, obj);

    // $ExpectType "Default value" | 101
    const existingProperty = R.propOr('Default value', 'age', obj);

    // $ExpectType "symbol" | "Default value" | "Object name" | 101
    const anyOtherProperty = R.propOr('Default value', 10, obj);

    // $ExpectError
    const wrongKey = R.propOr('Default value', { a: 2 }, obj);

    // $ExpectError
    const wrongObject = R.propOr('Default value', 'age', 'string instead of object');
};

() => {
    // Test curring
    // All lines below will return number 101 in runtime

    // $ExpectType "Default value" | 101
    R.propOr(defaultValue, propName, obj);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, propName, obj)(defaultValue);
    // $ExpectType "Default value" | 101
    R.propOr(defaultValue, R.__, obj)(propName);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, R.__, obj)(defaultValue, propName);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, R.__, obj)(R.__, propName)(defaultValue);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, R.__, obj)(defaultValue)(propName);

    // $ExpectType "Default value" | 101
    R.propOr(defaultValue, propName)(obj);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, propName)(defaultValue, obj);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, propName)(R.__, obj)(defaultValue);
    // $ExpectType "Default value" | 101
    R.propOr(R.__, propName)(defaultValue)(obj);

    // $ExpectType "Default value" | 101
    R.propOr(defaultValue)(propName, obj);
    // $ExpectType "Default value" | 101
    R.propOr(defaultValue)(R.__, obj)(propName);
    // $ExpectType "Default value" | 101
    R.propOr(defaultValue)(propName)(obj);
};
