import prelude = require("prelude-ls");

prelude.id(5);  //=> 5
prelude.id({}); //=> {}

prelude.isType("Undefined", void 8); //=> true
prelude.isType("Boolean", true);     //=> true
prelude.isType("Number", 1);         //=> true
prelude.isType("String", "hi");      //=> true
prelude.isType("Object", {});        //=> true
prelude.isType("Array", []);         //=> true

prelude.replicate(4, 3);   //=> [3, 3, 3, 3]
prelude.replicate(4, "a"); //=> ["a", "a", "a", "a"]
prelude.replicate(0, "a"); //=> []


// List

prelude.each(x => x.push("boom"), [["a"], ["b"], ["c"]]);
//=> [["a", "boom"], ["b", "boom"], ["c", "boom"]]

prelude.map(x => x * 2, [1, 2, 3, 4, 5]);         //=> [2, 4, 6, 8, 10]
prelude.map(x => x.toUpperCase(), ["ha", "ma"]); //=> ["HA", "MA"]
prelude.map(x => x.num, [{num: 3}, {num: 1}]);    //=> [3, 1]

prelude.compact([0, 1, false, true, "", "ha"]) //=> [1, true, "ha"]

prelude.filter(x => x < 3, [1, 2, 3, 4, 5]); //=> [1, 2]
prelude.filter(prelude.even, [3, 4, 0]);     //=> [4, 0]

prelude.reject(prelude.odd, [1, 2, 3, 4, 5]); //=> [2, 4]

prelude.partition(x => x > 60, [49, 58, 76, 43, 88, 77, 90]); //=> [[76, 88, 77, 90], [49, 58, 43]]

prelude.find(prelude.odd, [2, 4, 6, 7, 8, 9, 10]); //=> 7

prelude.head([1, 2, 3, 4, 5]); //=> 1

prelude.tail([1, 2, 3, 4, 5]); //=> [2, 3, 4, 5]

prelude.last([1, 2, 3, 4, 5]); //=> 5

prelude.initial([1, 2, 3, 4, 5]); //=> [1, 2, 3, 4]

prelude.empty([]); //=> true

prelude.reverse([1, 2, 3]); //=> [3, 2, 1]

prelude.unique([1, 1, 1, 3, 3, 6, 7, 8]); //=> [1, 3, 6, 7, 8]

prelude.uniqueBy(x => x.length, ["and", "here", "are", "some", "words"]); //=> ["and", "here", "words"]

prelude.fold(x => y => x + y, 0, [1, 2, 3, 4, 5]); //=> 15
var product = prelude.fold<number, number>(x => y => x * y, 1);

prelude.fold1(x => y => x + y, [1, 2, 3]); //=> 6

prelude.foldr(x => y => x - y, 9, [1, 2, 3, 4]); //=> 7
prelude.foldr(x => y => x + y, "e", ["a", "b", "c", "d"]); //=> "abcde"

prelude.foldr1(x => y => x - y, [1, 2, 3, 4, 9]); //=> 7

prelude.unfoldr(x => x === 0 ? null : [x, x - 1], 10);
//=> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

prelude.concat([[1], [2, 3], [4]]); //=> [1, 2, 3, 4]

prelude.concatMap(x => ["hoge", x, x + 2], [1, 2, 3]); //=> ["hoge", 1, 3, "hoge", 2, 4, "hoge", 3, 5]

prelude.flatten([1, [[2], 3], [4, [[5]]]]); //=> [1, 2, 3, 4, 5]

prelude.difference([1, 2, 3], [1]);                  //=> [2, 3]
prelude.difference([1, 2, 3, 4, 5], [5, 2, 10], [9]); //=> [1, 3, 4]

prelude.intersection([2, 3], [9, 8], [12, 1], [99]);                     //=> []
prelude.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1], [-1, 0, 1, 2]); //=> [1, 2]
prelude.intersection([1, 2, 3], [2, 1, 3], [3, 1, 2]);                   //=> [1, 2, 3]

prelude.union([1, 5, 7], [3, 5], []); //=> [1, 5, 7, 3]

prelude.countBy(prelude.floor, [4.2, 6.1, 6.4]);         //=> {4: 1, 6: 2}
prelude.countBy(x => x.length, ["one", "two", "three"]); //=> {3: 2, 5: 1}

prelude.groupBy(prelude.floor, [4.2, 6.1, 6.4]);         //=> {4: [4.2], 6: [6.1, 6.4]}
prelude.groupBy(x => x.length, ["one", "two", "three"]); //=> {3: ["one", "two"], 5: ["three"]}

prelude.andList([true, 2 + 2 == 4]);  //=> true
prelude.andList([true, true, false]); //=> false
prelude.andList([]);                  //=> true

prelude.orList([false, false, true, false]); //=> true
prelude.orList([]);                          //=> false

prelude.any(prelude.even, [3, 5, 7, 8, 9]); //=> true
prelude.any(prelude.even, []);              //=> false

prelude.all(prelude.isType("String"), ["ha", "ma", "la"]); //=> true
prelude.all(prelude.isType("String"), []);                 //=> true

prelude.sort([3, 1, 5, 2, 4, 6]); //=> [1, 2, 3, 4, 5, 6]

var f = (x: string) => (y: string) =>
    x.length > y.length ?
      1
  : x.length < y.length ?
      -1
  :
      0;
prelude.sortWith(f, ["three", "one", "two"]); //=> ["one", "two", "three"]

prelude.sortBy(x => x.length, ["there", "hey", "a", "ha"]); //=> ["a", "ha", "hey", "there"]

var table = [{
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
//=> [{"id": 3, "name": "donald"}, {"id": 1, "name": "george"}, {"id": 2, "name": "mike"}]

prelude.sum([1, 2, 3, 4, 5]); //=> 15
prelude.sum([]);              //=> 0

prelude.product([1, 2, 3]); //=> 6
prelude.product([]);        //=> 1

prelude.mean([1, 2, 3, 4, 5]); //=> 3

prelude.maximum([4, 1, 9, 3]); //=> 9

prelude.minimum(["c", "e", "a", "d", "b"]); //=> "a"

prelude.maximumBy(x => x.length, ["hi", "there", "I", "am", "looooong"]); //=> "looooong"

prelude.maximumBy(x => x.length, ["hi", "there", "I", "am", "looooong"]); //=> "looooong"

prelude.scan(x => y => x + y, 0, [1, 2, 3]); //=> [0, 1, 3, 6]

prelude.scan1(x => y => x + y, [1, 2, 3]); //=> [1, 3, 6]

prelude.scanr(x => y => x + y, 0, [1, 2, 3]); //=> [6, 5, 3, 0]

prelude.scanr1(x => y => x + y, [1, 2, 3]); //=> [6, 5, 3]

prelude.slice(2, 4, [1, 2, 3, 4, 5]); //=> [3, 4]

prelude.take(2, [1, 2, 3, 4, 5]); //=> [1, 2]

prelude.drop(2, [1, 2, 3, 4, 5]); //=> [3, 4, 5]

prelude.splitAt(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [3, 4, 5]]

prelude.takeWhile(prelude.odd, [1, 3, 5, 4, 8, 7, 9]); //=> [1, 3, 5]

prelude.dropWhile(prelude.even, [2, 4, 5, 6]); //=> [5, 6]

prelude.span(prelude.even, [2, 4, 5, 6]); //=> [[2, 4], [5, 6]]

prelude.breakList(x => x == 3, [1, 2, 3, 4, 5]); //=> [[1, 2], [3, 4, 5]]

prelude.zip([1, 2, 3], [4, 5, 6]); //=> [[1, 4], [2, 5], [3, 6]]

prelude.zipWith(x => y => x + y, [1, 2, 3], [4, 5, 6]); //=> [5, 7, 9]

prelude.zipAll([1, 2, 3], [4, 5, 6], [7, 8, 9]); //=> [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

prelude.zipAllWith((a, b, c) => a + b + c, [1, 2, 3], [3, 2, 1], [1, 1, 1]); //=> [5, 5, 5]

prelude.at(2, [1, 2, 3, 4]); //=> 3
prelude.at(-3, [1, 2, 3, 4]); //=> 2

prelude.elemIndex("a", ["c", "a", "b", "a"]); //=> 1

prelude.elemIndices("a", ["c", "a", "b", "a"]); //=> [1, 3]

prelude.findIndex(prelude.even, [1, 2, 3, 4]); //=> 1

prelude.findIndices(prelude.even, [1, 2, 3, 4]); //=> [1, 3]

// Obj

prelude.keys({a: 2, b: 3, c: 9}); //=> ["a", "b", "c"]

prelude.values({a: 2, b: 3, c: 9}); //=> [2, 3, 9]

prelude.pairsToObj<string | number>([["a", "b"], ["c", "d"], ["e", 1]]); //=> {a: "b", c: "d", e: 1}

prelude.objToPairs({a: "b", c: "d", e: 1}); //=> [["a", "b"], ["c", "d"], ["e", 1]]

prelude.listsToObj(["a", "b", "c"], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

prelude.objToLists({a: 1, b: 2, c: 3}); //=> [["a", "b", "c"], [1, 2, 3]]

prelude.Obj.empty({}); //=> true

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

prelude.apply((x, y) => x + y, [2, 3]); //=> 5

var add = (x: number, y: number) => x + y;
var addCurried = prelude.curry(add);
var addFour = addCurried(4);
addFour(2); //=> 6

var invertedPower = prelude.flip<number, number, number>(x => y => Math.pow(x, y));
invertedPower(2)(3); //=> 9

prelude.fix((fib: (n: number) => number) => (n: number) => n <= 1 ? 1 : fib(n - 1) + fib(n - 2))(9); //=> 55

var sameLength = prelude.over<string, number, boolean>((x, y) => x == y, x => x.length);
sameLength('hi', 'me');    //=> true
sameLength('one', 'boom'); //=> false

// Num

prelude.max(3, 1);     //=> 3
prelude.max("a", "c"); //=> "c"

prelude.min(3, 1);     //=> 1
prelude.min("a", "c"); //=> "a"

prelude.negate(3);  //=> -3
prelude.negate(-2); //=>  2

prelude.abs(-2); //=> 2
prelude.abs(2);  //=> 2

prelude.signum(-5); //=> -1
prelude.signum(0);  //=>  0
prelude.signum(9);  //=>  1

prelude.quot(-20, 3); //=> -6

prelude.rem(-20, 3); //=> -2

prelude.div(-20, 3); //=> -7

prelude.mod(-20, 3); //=> 1

prelude.recip(4); //=> 0.25

prelude.pi; //=> 3.141592653589793

prelude.tau; //=> 6.283185307179586

prelude.exp(1); //=> 2.718281828459045

prelude.sqrt(4); //=> 2

prelude.ln(10); //=> 2.302585092994046

prelude.pow(-2, 2); //=> 4

prelude.sin(prelude.pi / 2); //=> 1

prelude.cos(prelude.pi); //=> -1

prelude.tan(prelude.pi / 4); //=> 1

prelude.asin(0); //=> 0

prelude.acos(1); //=> 0

prelude.atan(0); //=> 0

prelude.atan2(1, 0); //=> 1.5707963267948966

prelude.truncate(-1.5); //=> -1
prelude.truncate(1.5);  //=>  1

prelude.round(0.6); //=> 1
prelude.round(0.5); //=> 1
prelude.round(0.4); //=> 0

prelude.ceiling(0.1); //=> 1

prelude.floor(0.9); //=> 0

prelude.isItNaN(prelude.sqrt(-1)); //=> true

prelude.even(4); //=> true
prelude.even(0); //=> true

prelude.odd(3); //=> true

prelude.gcd(12, 18); //=> 6

prelude.lcm(12, 18); //=> 36