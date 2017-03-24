import HashMap = require("hashmap");
var emptyMap:HashMap<string, number> = new HashMap<string, number>();
var filledMap:HashMap<string, number> = new HashMap<string, number>("bar", 123, "bar2", 234);
var copiedMap:HashMap<string, number> = new HashMap(filledMap);

emptyMap.set("foo", 123);
emptyMap.set("foo", 123).set("foo2", 234);
emptyMap.multi("foo3", 345, "foo4", 456).multi("foo5", 567, "foo6", "678");
emptyMap.copy(filledMap).copy(copiedMap);

var value:number = emptyMap.get("foo");

var hasFoo:boolean = emptyMap.has("foo");

var key:string = emptyMap.search(567);

emptyMap.remove("foo").remove("foo2");

var keys:string[] = emptyMap.keys();

var values:number[] = emptyMap.values();

var count:number = emptyMap.count();

var clonedMap:HashMap<string, number> = emptyMap.clone();

emptyMap
    .forEach(function (value:number, key:string):void {
        console.log(key);
        console.log(value);
    })
    .forEach(function (value:number, key:string):void {
        console.log("Chained");
        console.log(key);
        console.log(value);
    });

emptyMap.clear().set("foo", 123);
