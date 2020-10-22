import HashMap = require("hashmap");
const emptyMap: HashMap<string, number> = new HashMap<string, number>();
const filledMap: HashMap<string, number> = new HashMap<string, number>("bar", 123, "bar2", 234);
const filledMap2: HashMap<string, number> = new HashMap<string, number>([
  ["bar", 123],
  ["bar2", 234],
]);
const copiedMap: HashMap<string, number> = new HashMap(filledMap);

emptyMap.set("foo", 123);
emptyMap.set("foo", 123).set("foo2", 234);
emptyMap.multi("foo3", 345, "foo4", 456).multi("foo5", 567, "foo6", "678");
emptyMap.copy(filledMap).copy(copiedMap);

const value: number = emptyMap.get("foo");

const hasFoo: boolean = emptyMap.has("foo");

const key: string = emptyMap.search(567);

emptyMap.remove("foo").remove("foo2");
emptyMap.delete("foo3").delete("foo4");

const keys: string[] = emptyMap.keys();

const values: number[] = emptyMap.values();

const entries: Array<[string, number]> = emptyMap.entries();

const count: number = emptyMap.count();

const clonedMap: HashMap<string, number> = emptyMap.clone();

emptyMap
    .forEach((value: number, key: string): void => {
        console.log(key);
        console.log(value);
    })
    .forEach((value: number, key: string): void => {
        console.log("Chained");
        console.log(key);
        console.log(value);
    });

emptyMap.clear().set("foo", 123);
