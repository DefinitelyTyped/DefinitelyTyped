// <reference file="streamjs.d.ts" />

var numStream = Stream.make(10, 20);
numStream = Stream.make([10, 20]);
numStream = Stream.range(1, 5);
numStream = Stream.rangeClosed(1, 5);

Stream.generate(function() {
	return 1;
});
Stream.generate(() => 1);
