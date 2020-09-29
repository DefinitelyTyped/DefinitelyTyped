

interface Point { x: number; y: number; }
let a: any;
let s: string;
let b: boolean;
let i: number;
let pt: Point;
let arrayOfPoint: Point[];
let arrayOfStringPoint: [string, Point][];
let arrayOfPointString: [Point, string][];
let map: Map<string, Point>;
let set: Set<Point>;
let weakMap: WeakMap<Point, string>;
let weakSet: WeakSet<Point>;
let iteratorOfString: Iterator<String>;
let iteratorOfStringPoint: Iterator<[String, Point]>;
let iteratorOfPoint: Iterator<Point>;
let iteratorOfPointPoint: Iterator<[Point, Point]>;

map = new Map<string, Point>();
map = new Map(arrayOfStringPoint);
map.clear();
b = map.delete(s);
map.forEach((value: Point, key: string, map: Map<string, Point>) => { }, a);
pt = map.get(s);
b = map.has(s);
map = map.set(s, pt);
iteratorOfStringPoint = map.entries();
iteratorOfString = map.keys();
iteratorOfPoint = map.values();
i = map.size;

set = new Set<Point>();
set = new Set(arrayOfPoint);
set.clear();
b = set.delete(pt);
set.forEach((value: Point, key: Point, set: Set<Point>) => { }, a);
b = set.has(pt);
set = set.add(pt);
iteratorOfPointPoint = set.entries();
iteratorOfPoint = set.keys();
iteratorOfPoint = set.values();
i = set.size;

weakMap = new WeakMap<Point, string>();
weakMap = new WeakMap(arrayOfPointString);
weakMap.clear();
b = weakMap.delete(pt);
s = weakMap.get(pt);
b = weakMap.has(pt);
weakMap = weakMap.set(pt, s);

weakSet = new WeakSet<Point>();
weakSet = new WeakSet(arrayOfPoint);
weakSet.clear();
b = weakSet.delete(pt);
b = weakSet.has(pt);
weakSet = weakSet.add(pt);
