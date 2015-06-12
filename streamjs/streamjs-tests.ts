// <reference file="streamjs.d.ts" />

var numStream: Stream<number>;
// numStream = Stream.make(10, 20);
numStream = Stream.make([10, 20]);
numStream = Stream.range(1, 5);
numStream = Stream.rangeClosed(1, 5);

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

class MyList {
	elems: any[];
}

var elems: any[];
elems = Stream.make([new MyList, new MyList])
	.flatMap(list => list.elems)
	.toArray();
