
import prelude = require("prelude-ls");

var five: number = prelude.id(5);  //=> 5
var emptyObj: Object = prelude.id({}); //=> {}

var expectBool: boolean = prelude.isType("Undefined", void 8); //=> true
prelude.isType("Boolean", true);     //=> true
prelude.isType("Number", 1);         //=> true
prelude.isType("String", "hi");      //=> true
prelude.isType("Object", {});        //=> true
prelude.isType("Array", []);         //=> true

var numberArray: Array<number> = prelude.replicate(4, 3);   //=> [3, 3, 3, 3]
var strArray: Array<string> =
  prelude.replicate(4, "a"); //=> ["a", "a", "a", "a"]
prelude.replicate(0, "a"); //=> []


// List

var eachRes: Array<Array<string>> =
  prelude.each(x => x.push("boom"), [["a"], ["b"], ["c"]]);
//=> [["a", "boom"], ["b", "boom"], ["c", "boom"]]

var mapRes: Array<string> =
  prelude.map(x => x.toString(), [1, 2, 3, 4, 5]) //=> ["1", "2", "3", "4", "5"]

prelude.map(x => x.toUpperCase(), ["ha", "ma"]); //=> ["HA", "MA"]
prelude.map(x => x.num, [{num: 3}, {num: 1}]);    //=> [3, 1]

var compactRes: Array<any> =
  prelude.compact([0, 1, false, true, "", "ha"]) //=> [1, true, "ha"]

var filterRes: Array<number> =
  prelude.filter(x => x < 3, [1, 2, 3, 4, 5]); //=> [1, 2]
prelude.filter(prelude.even, [3, 4, 0]);     //=> [4, 0]

var rejectRes: Array<number> =
  prelude.reject(prelude.odd, [1, 2, 3, 4, 5]); //=> [2, 4]

var partitionRes: Array<Array<number>> =
  prelude.partition(x => x > 60, [49, 58, 76, 43, 88, 77, 90]);
  //=> [[76, 88, 77, 90], [49, 58, 43]]

var findRes: number = prelude.find(prelude.odd, [2, 4, 6, 7, 8, 9, 10]); //=> 7

var headRes: number = prelude.head([1, 2, 3, 4, 5]); //=> 1

var tailRes: Array<number> = prelude.tail([1, 2, 3, 4, 5]); //=> [2, 3, 4, 5]

var lastRes: number = prelude.last([1, 2, 3, 4, 5]); //=> 5

var initialRes: Array<number> =
  prelude.initial([1, 2, 3, 4, 5]); //=> [1, 2, 3, 4]

var emptyRes: boolean = prelude.empty([]); //=> true

var reverseRes: Array<number> = prelude.reverse([1, 2, 3]); //=> [3, 2, 1]

var uniqueRes: Array<number> =
  prelude.unique([1, 1, 1, 3, 3, 6, 7, 8]); //=> [1, 3, 6, 7, 8]

var uniqueByRes: Array<string> =
  prelude.uniqueBy(x => x.length, ["and", "here", "are", "some", "words"]); //=> ["and", "here", "words"]

var foldRes: number =
  prelude.fold(x => y => x + y, 0, [1, 2, 3, 4, 5]); //=> 15

var fold1Res: number =
  prelude.fold1(x => y => x + y, [1, 2, 3]); //=> 6

var foldrRes: number =
  prelude.foldr(x => y => x - y, 9, [1, 2, 3, 4]); //=> 7

var foldrStrRes: string =
  prelude.foldr(x => y => x + y, "e", ["a", "b", "c", "d"]); //=> "abcde"

var foldr1Res: number =
  prelude.foldr1(x => y => x - y, [1, 2, 3, 4, 9]); //=> 7

var unfoldrRes: Array<number> =
  prelude.unfoldr(x => x === 0 ? null : [x, x - 1], 10);
  //=> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

var concatRes: Array<number> =
  prelude.concat([[1], [2, 3], [4]]); //=> [1, 2, 3, 4]

var concatMapRes: Array<any> =
  prelude.concatMap(x => ["hoge", x, x + 2], [1, 2, 3]);
  //=> ["hoge", 1, 3, "hoge", 2, 4, "hoge", 3, 5]

var flattenRes: Array<number> =
  prelude.flatten([1, [[2], 3], [4, [[5]]]]); //=> [1, 2, 3, 4, 5]

var differenceRes: Array<number> =
  prelude.difference([1, 2, 3], [1]);                  //=> [2, 3]
prelude.difference([1, 2, 3, 4, 5], [5, 2, 10], [9]); //=> [1, 3, 4]

prelude.intersection([2, 3], [9, 8], [12, 1], [99]); //=> []
var intersectionRes: Array<number> =
  prelude.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1], [-1, 0, 1, 2]);
//=> [1, 2]
prelude.intersection([1, 2, 3], [2, 1, 3], [3, 1, 2]); //=> [1, 2, 3]

var unionRes: Array<number> =
  prelude.union([1, 5, 7], [3, 5], []); //=> [1, 5, 7, 3]

var countByRes: Object = prelude.countBy(prelude.floor, [4.2, 6.1, 6.4]);
//=> {4: 1, 6: 2}
prelude.countBy(x => x.length, ["one", "two", "three"]); //=> {3: 2, 5: 1}

var groupByRes: Object = prelude.groupBy(prelude.floor, [4.2, 6.1, 6.4]);
//=> {4: [4.2], 6: [6.1, 6.4]}
prelude.groupBy(x => x.length, ["one", "two", "three"]);
//=> {3: ["one", "two"], 5: ["three"]}

var andListRes: boolean = prelude.andList([true, 2 + 2 == 4]);  //=> true
prelude.andList([true, true, false]); //=> false
prelude.andList([]);                  //=> true

var orListRes: boolean = prelude.orList([false, false, true, false]); //=> true
prelude.orList([]);                          //=> false

var anyRes: boolean = prelude.any(prelude.even, [3, 5, 7, 8, 9]); //=> true
prelude.any(prelude.even, []);              //=> false

var allRes: boolean = prelude.all(prelude.isType("String"), ["ha", "ma", "la"]);
//=> true
prelude.all(prelude.isType("String"), []);                 //=> true

var sortRes: Array<number> = prelude.sort([3, 1, 5, 2, 4, 6]);
//=> [1, 2, 3, 4, 5, 6]

var f = (x: string) => (y: string) =>
    x.length > y.length ?
      1
  : x.length < y.length ?
      -1
  :
      0;

var sortWithRes: Array<string> = prelude.sortWith(f, ["three", "one", "two"]);
//=> ["one", "two", "three"]

var sortByRes: Array<string> =
  prelude.sortBy(x => x.length, ["there", "hey", "a", "ha"]);
  //=> ["a", "ha", "hey", "there"]

var table: Array<{
  id: number;
  name: string;
}> = [{
  id: 1,
  name: "george"
}, {
  id: 2,
  name: "mike"
}, {
  id: 3,
   name: "donald"
}];
prelude.sortBy(x => x.name, table);
//=> [{"id": 3, "name": "donald"},
//    {"id": 1, "name": "george"},
//    {"id": 2, "name": "mike"}]

var sumRes: number = prelude.sum([1, 2, 3, 4, 5]); //=> 15
prelude.sum([]);              //=> 0

var productRes: number = prelude.product([1, 2, 3]); //=> 6
prelude.product([]);        //=> 1

var meanRes: number = prelude.mean([1, 2, 3, 4, 5]); //=> 3

var maximumRes: number = prelude.maximum([4, 1, 9, 3]); //=> 9

var minimumRes: string = prelude.minimum(["c", "e", "a", "d", "b"]); //=> "a"

var maximumByRes: string =
  prelude.maximumBy(x => x.length, ["hi", "there", "I", "am", "looooong"]);
  //=> "looooong"

var scanRes: Array<number> = prelude.scan(x => y => x + y, 0, [1, 2, 3]);
//=> [0, 1, 3, 6]

var scan1Res: Array<number> = prelude.scan1(x => y => x + y, [1, 2, 3]);
//=> [1, 3, 6]

var scanrRes: Array<number> = prelude.scanr(x => y => x + y, 0, [1, 2, 3]);
//=> [6, 5, 3, 0]

var scanr1Res: Array<number> = prelude.scanr1(x => y => x + y, [1, 2, 3]);
//=> [6, 5, 3]

var sliceRes: Array<number> = prelude.slice(2, 4, [1, 2, 3, 4, 5]); //=> [3, 4]

var takeRes: Array<number> = prelude.take(2, [1, 2, 3, 4, 5]); //=> [1, 2]

var dropRes: Array<number> = prelude.drop(2, [1, 2, 3, 4, 5]); //=> [3, 4, 5]

var splitAtRes: Array<Array<number>> =
  prelude.splitAt(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [3, 4, 5]]

var takeWhileRes: Array<number> =
  prelude.takeWhile(prelude.odd, [1, 3, 5, 4, 8, 7, 9]); //=> [1, 3, 5]

var dropWhileRes: Array<number> =
  prelude.dropWhile(prelude.even, [2, 4, 5, 6]); //=> [5, 6]

var spanRes: Array<Array<number>> =
prelude.span(prelude.even, [2, 4, 5, 6]); //=> [[2, 4], [5, 6]]

var breakListRes: Array<Array<number>> =
  prelude.breakList(x => x == 3, [1, 2, 3, 4, 5]); //=> [[1, 2], [3, 4, 5]]

var zipRes: Array<Array<number>> = prelude.zip([1, 2, 3], [4, 5, 6]);
//=> [[1, 4], [2, 5], [3, 6]]

var zipWithRes: Array<number> =
  prelude.zipWith(x => y => x + y, [1, 2, 3], [4, 5, 6]); //=> [5, 7, 9]

var zipAllRes: Array<Array<number>> =
prelude.zipAll([1, 2, 3], [4, 5, 6], [7, 8, 9]); //=> [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

var zipAllWithRes: Array<number> =
prelude.zipAllWith((a, b, c) => a + b + c, [1, 2, 3], [3, 2, 1], [1, 1, 1]); //=> [5, 5, 5]

var atRes: number = prelude.at(2, [1, 2, 3, 4]); //=> 3
prelude.at(-3, [1, 2, 3, 4]); //=> 2

var elemIndexRes: number = prelude.elemIndex("a", ["c", "a", "b", "a"]); //=> 1

var elemIndicesRes: Array<number> =
  prelude.elemIndices("a", ["c", "a", "b", "a"]); //=> [1, 3]

var findIndexRes: number = prelude.findIndex(prelude.even, [1, 2, 3, 4]); //=> 1

var findIndicesRes: Array<number> =
  prelude.findIndices(prelude.even, [1, 2, 3, 4]); //=> [1, 3]

// Obj

var keysRes: Array<string> = prelude.keys({a: 2, b: 3, c: 9});
//=> ["a", "b", "c"]

var valuesRes: Array<number> = prelude.values({a: 2, b: 3, c: 9});
//=> [2, 3, 9]

var pairsToObjRes: Object =
  prelude.pairsToObj<string | number>([["a", "b"], ["c", "d"], ["e", 1]]); //=> {a: "b", c: "d", e: 1}

var objToPairsRes: Array<Array<string | number>> =
  prelude.objToPairs({a: "b", c: "d", e: 1});
  //=> [["a", "b"], ["c", "d"], ["e", 1]]

var listsToObjRes: Object =
  prelude.listsToObj(["a", "b", "c"], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

var objToListsRes  =
  prelude.objToLists({a: 1, b: 2, c: 3});
  //=> [["a", "b", "c"], [1, 2, 3]]

var objEmptyRes: boolean = prelude.Obj.empty({}); //=> true

var count = 4;
prelude.Obj.each(x => count += x, {a: 1, b: 2, c: 3});
count; //=> 10

prelude.Obj.map(x => x + 2, {a: 2, b: 3, c: 4}); //=> {a: 4, b: 5, c: 6}

prelude.Obj.compact({a: 0, b: 1, c: false, d: "", e: "ha"}); //=> {b: 1, e: "ha"}

prelude.Obj.filter(prelude.even, {a: 3, b: 4, c: 0}); //=> {b: 4, c: 0}

prelude.Obj.reject(x => x == 2, {a: 1, b: 2}); //=> {a: 1}

prelude.Obj.partition(x => x == 2, {a: 1, b: 2, c: 3}); //=> [{b: 2}, {a: 1, c: 3}]

prelude.Obj.find(prelude.even, {a: 1, b: 2, c: 3, d: 4}); //=> 2


// Str

prelude.split("|", "1|2|3"); //=> ["1", "2", "3"]
prelude.join("|", ["1", "2", "3"]); //=> "1|2|3"

prelude.lines("one\ntwo\nthree");
//=> ["one", "two", "three"]

prelude.unlines(["one", "two", "three"]);
//=> "one\ntwo\nthree"

prelude.words("hello, what is that?");
//=> ["hello,", "what", "is", "that?"]

prelude.unwords(["one", "two", "three"]); //=> "one two three"

prelude.chars("hello"); //=> ["h", "e", "l", "l", "o"]

prelude.unchars(["t", "h", "e", "r", "e"]); //=> "there"
prelude.unchars(["ma", "ma"]);              //=> "mama"

prelude.repeat(4, "a");  //=> "aaaa"
prelude.repeat(2, "ha"); //=> "haha"

prelude.capitalize("hi there"); //=> "Hi there"

prelude.camelize("hi-there"); //=> "hiThere"
prelude.camelize("hi_there"); //=> "hiThere"

prelude.dasherize("hiThere"); //=> "hi-there"
prelude.dasherize("FooBar"); //=> "foo-bar"
prelude.dasherize("innerHTML"); //=> "inner-HTML"

prelude.empty(""); //=> true

prelude.reverse("goat"); //=> "taog"

prelude.slice(2, 4, "hello"); //=> "ll"

prelude.take(4, "hello"); //=> "hell"

prelude.drop(1, "goat"); //=> "oat"

prelude.splitAt(4, "hello"); //=> ["hell", "o"]

prelude.takeWhile(x => !prelude.empty(prelude.elemIndices(x, ["a", "b", "c", "d"])), "cabdek"); //=> "cabd"

prelude.dropWhile(x => x === "m", "mmmmmhmm"); //=> "hmm"

prelude.span(x => x === "m", "mmmmmhmm"); //=> ["mmmmm", "hmm"]

prelude.Str.breakStr(x => x === "h", "mmmmmhmm"); //=> ["mmmmm", "hmm"]


// Func

var applyRes: number = prelude.apply((x, y) => x + y, [2, 3]); //=> 5

var add = (x: number, y: number) => x + y;
var addCurried = prelude.curry(add);
var addFour = addCurried(4);
addFour(2); //=> 6

var flipRes: (x: number) => (y: number) => number
  = prelude.flip<number, number, number>(x => y => Math.pow(x, y));

var fixRes: number = prelude.fix(
  (fib: (n: number) => number) => (n: number) =>
    n <= 1
      ? 1
      : fib(n - 1) + fib(n - 2)
)(9); //=> 55

var sameLength: (x: string, y: string) => boolean
  = prelude.over<string, number, boolean>((x, y) => x == y, x => x.length);
sameLength('hi', 'me');    //=> true
sameLength('one', 'boom'); //=> false

// Num

prelude.max(3, 1);     //=> 3
var maxRes: string = prelude.max("a", "c"); //=> "c"

var minRes: number = prelude.min(3, 1);     //=> 1
prelude.min("a", "c"); //=> "a"

var negateRes: number = prelude.negate(3);  //=> -3
prelude.negate(-2); //=>  2

var absRes: number = prelude.abs(-2); //=> 2
prelude.abs(2);  //=> 2

var signumRes: number = prelude.signum(-5); //=> -1
prelude.signum(0);  //=>  0
prelude.signum(9);  //=>  1

var quotRes: number = prelude.quot(-20, 3); //=> -6

var remRes: number = prelude.rem(-20, 3); //=> -2

var divRes: number = prelude.div(-20, 3); //=> -7

var modRes: number = prelude.mod(-20, 3); //=> 1

var recipRes: number = prelude.recip(4); //=> 0.25

var piRes: number = prelude.pi; //=> 3.141592653589793

var tauRes: number = prelude.tau; //=> 6.283185307179586

var expRes: number = prelude.exp(1); //=> 2.718281828459045

var sqrtRes: number = prelude.sqrt(4); //=> 2

var lnRes: number = prelude.ln(10); //=> 2.302585092994046

var powRes: number = prelude.pow(-2, 2); //=> 4

var sinRes: number = prelude.sin(prelude.pi / 2); //=> 1

var cosRes: number = prelude.cos(prelude.pi); //=> -1

var aTanRes: number = prelude.tan(prelude.pi / 4); //=> 1

var asinRes: number = prelude.asin(0); //=> 0

var acosRes: number = prelude.acos(1); //=> 0

prelude.atan(0); //=> 0

var atanRes: number = prelude.atan2(1, 0); //=> 1.5707963267948966

var truncateRes: number = prelude.truncate(-1.5); //=> -1
prelude.truncate(1.5);  //=>  1

var roundRes: number = prelude.round(0.6); //=> 1
prelude.round(0.5); //=> 1
prelude.round(0.4); //=> 0

var ceilingRes: number = prelude.ceiling(0.1); //=> 1

var floorRes: number = prelude.floor(0.9); //=> 0

var isItNanRes: boolean = prelude.isItNaN(prelude.sqrt(-1)); //=> true

var evenRes: boolean = prelude.even(4); //=> true
prelude.even(0); //=> true

var oddRes: boolean = prelude.odd(3); //=> true

var gcdRes: number = prelude.gcd(12, 18); //=> 6

var lcmRes: number = prelude.lcm(12, 18); //=> 36