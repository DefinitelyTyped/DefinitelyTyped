// <reference file="streamjs.d.ts" />

var numStream: Stream<number>;
// numStream = Stream.make(10, 20);
numStream = Stream.make([10, 20]);
numStream = Stream.range(1, 5);
numStream = Stream.rangeClosed(1, 5);
// numStream = Stream.empty();

Stream.generate(function() {
	return 1;
});
Stream.generate(() => 1);

var comparator = (s1, s2) => 0;

numStream = numStream.filter(n => n % 2 == 0);
var strStream = numStream
					.dropWhile((n) => n % 2 == 0)
					.map(n => "number " + n)
					.dropWhile(/^$/)
					.limit(100)
					.sorted()
					.sort()
					.sorted(comparator)
					.sort(comparator)
					.shuffle()
					.reverse()
					.distinct()
					.skip(5)
					.peek(s => console.log(s))
					.takeWhile(s => s.length < 5)
					.takeWhile(/^aa.*$/)
					.slice(5, 2)
					;
					
var strArray = strStream.toArray();

strStream.forEach(s => console.log(s));
var opt: Stream.Optional<string> = strStream.findFirst();
opt = strStream.findAny();
opt = strStream.max();
opt = strStream.max((s1, s2) => 0);
opt = strStream.min();
opt = strStream.min((s1, s2) => 0);

var sum = numStream.sum();
var avg = numStream.average();
avg = numStream.avg();

var count = numStream.count();
count = numStream.size();

var allMatch: boolean = numStream.allMatch(n => true);
allMatch = strStream.allMatch(/^$/);

var anyMatch: boolean = numStream.anyMatch(n => false);
anyMatch = strStream.anyMatch(/^$/);

var noneMatch: boolean = numStream.noneMatch(n => false);
noneMatch = strStream.noneMatch(/^$/);

sum = numStream.reduce(0, (n1, n2) => n1 + n2);
opt = strStream.reduce((s1, s2) => s1 + s2);

class MyList {
	elems: any[];
	name: string
}

var elems: any[];

var myStream = Stream.make([new MyList, new MyList]);
elems = myStream
	.flatMap(list => list.elems)
	.toArray();
	//.forEach(s => console.log(s));


numStream.collect({
	supplier: () => 0,
	accumulator: (n1, n2) => n1 + n2,
	finisher: n => n
});

var groupingResult = myStream.groupBy(lst => lst.name);
var elems = groupingResult["hello"].elems;
groupingResult = myStream.groupingBy(lst => lst.name);

var mappingResult = myStream.toMap(lst => lst.name, (e1, e2) => e2);
console.log(mappingResult["a"]);

myStream.toMap(lst => lst.name);

mappingResult = myStream.indexBy(lst => lst.name, (e1, e2) => e2);

var partitionedNums: number[][] = numStream.partitioningBy(n => n % 2 == 0);
partitionedNums = numStream.partitionBy(n => n % 2 == 0);

var partitionedStrings : string[][] = strStream.partitionBy(/^a$/);
partitionedStrings = strStream.partitioningBy(/^a$/);
partitionedStrings = strStream.partitioningBy(5);
partitionedStrings = strStream.partitionBy(5);

var s: string = numStream.joining();
s = numStream.join();
s = numStream.joining(", ");
s = numStream.join(", ");
s = numStream.joining({prefix: "{", delimiter: ", ", suffix: "}"});
s = numStream.join({prefix: "{", delimiter: ", ", suffix: "}"});


var iter = numStream.iterator();
var n: number = iter.next();
var done: boolean = iter.done;

var optNum: Stream.Optional<number> = Stream.Optional.of(2);
optNum = Stream.Optional.ofNullable(null);
//optNum = Stream.Optional.empty();

var optStr: Stream.Optional<String> = optNum.filter(n => n % 2 == 0)
	.map(n => "number" + n)
	.flatMap(n => Stream.Optional.of(n + 2))
	;
	
var isPresent: boolean = optNum.isPresent();
var num: number = optNum.get();
optNum.ifPresent(n => console.log(n));
var def: number = optNum.orElse(2);
def = optNum.orElseGet(() => 3);
def = optNum.orElseThrow("something went wrong");
