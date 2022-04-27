import WeakMap = require('@ungap/weakmap');

WeakMap; // $ExpectType typeof WeakMap

// $ExpectType WeakMap<object, any>
const weakMap = new WeakMap();

weakMap.delete; // $ExpectType (key: object) => boolean
weakMap.has; // $ExpectType (key: object) => boolean
weakMap.get; // $ExpectType (key: object) => any
weakMap.set; // $ExpectType (key: object, value: any) => WeakMap<object, any>

function foo<K extends object, V>(...args: Array<[K, V]>): WeakMap<K, V> {
    const weakMap = new WeakMap(arguments as Iterable<[K, V]>);

    weakMap.delete; // $ExpectType (key: K) => boolean
    weakMap.has; // $ExpectType (key: K) => boolean
    weakMap.get; // $ExpectType (key: K) => V | undefined
    weakMap.set; // $ExpectType (key: K, value: V) => WeakMap<K, V>

    return weakMap;
}
