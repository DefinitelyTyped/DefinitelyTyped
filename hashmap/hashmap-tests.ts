/// <reference path="hashmap.d.ts"/>

var map : HashMap<string, number> = new HashMap<string, number>();

map.set("foo", 123);

var value : number = map.get("foo");

map.has("foo");

map.remove("foo");

var keys : string[] = map.keys();

var values : number[] = map.values();

var count : number = map.count();

map.forEach(function(value : number, key : string) : void {
        console.log(key);
        console.log(value);
});

map.clear();
