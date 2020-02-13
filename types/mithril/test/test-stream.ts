import * as Stream from 'mithril/stream';

{
	const s = Stream(1);
	const initialValue = s();
	s(2);
	const newValue = s();
	console.assert(initialValue === 1);
	console.assert(newValue === 2);
}

{
	const s = Stream();
	console.assert(s() === undefined);
}

{
	const s: Stream<number | undefined> = Stream(1);
	s(undefined);
	console.assert(s() === undefined);
}

{
	const s = Stream(Stream(1));
	console.assert(s()() === 1);
}

{
	const s = Stream<number>();
	const doubled = Stream.combine(s => s() * 2, [s]);
	s(2);
	console.assert(doubled() === 4);
}

{
	const s = Stream(2);
	const doubled = Stream.combine(s => s() * 2, [s]);
	console.assert(doubled() === 4);
}

{
	const s1 = Stream<number>();
	const s2 = Stream<number>();
	const added = Stream.combine((s1, s2) => s1() + s2(), [s1, s2]);
	s1(2);
	s2(3);
	console.assert(added() === 5);
}

{
	const s1 = Stream(2);
	const s2 = Stream(3);
	const added = Stream.combine((s1, s2) => s1() + s2(), [s1, s2]);
	console.assert(added() === 5);
}

{
	const s1 = Stream(2);
	const s2 = Stream<number>();
	const added = Stream.combine((s1, s2) => s1() + s2(), [s1, s2]);
	s2(3);
	console.assert(added() === 5);
}

{
	let count = 0;
	const a = Stream<number>();
	const b = Stream.combine(a => a() * 2, [a]);
	const c = Stream.combine(a => a() * a(), [a]);
	const d = Stream.combine((b, c) => {
		count++;
		return b() + c();
	}, [b, c]);
	a(3);
	console.assert(d() === 15);
	console.assert(count === 1);
}

{
	let count = 0;
	const a = Stream(3);
	const b = Stream.combine(a => a() * 2, [a]);
	const c = Stream.combine(a => a() * a(), [a]);
	const d = Stream.combine((b, c) => {
		count++;
		return b() + c();
	}, [b, c]);
	console.assert(d() === 15);
	console.assert(count === 1);
}

{
	let streams: Array<Stream<number>> = [];
	const a = Stream<number>();
	const b = Stream<number>();
	const c = Stream.combine((a, b) => {
		streams = [a, b];
	}, [a, b]);
	a(3);
	b(5);
	console.assert(streams.length === 1);
	console.assert(streams[0] === b);
}

{
	let streams: Array<Stream<number>> = [];
	const a = Stream(3);
	const b = Stream(5);
	const c = Stream.combine((a, b, changed) => {
		streams = changed;
	}, [a, b]);
	a(7);
	console.assert(streams.length === 1);
	console.assert(streams[0] === a);
}

{
	const a = Stream(1);
	const b = Stream.combine(a => undefined, [a]);

	console.assert(b() === undefined);
}

{
	const a = Stream(1);
	const b = Stream.combine(a => Stream(2), [a]);
	console.assert(b()() === 2);
}

{
	const a = Stream(1);
	const b = Stream.combine(a => Stream(), [a]);
	console.assert(b()() === undefined);
}

{
	const s = Stream(2);
	const doubled = Stream.lift(v => v * 2, s);
	console.assert(doubled() === 4);
}

{
	const a = Stream(1);
	const b = Stream("x");
	const concated = Stream.lift((num, str) => str + num, a, b);
	console.assert(concated() === "x1");
}

{
	const s1 = Stream<number>();
	const s2 = Stream<number>();
	const added = Stream.lift((n1, n2) => n1 + n2, s1, s2);
	s1(2);
	s2(3);
	console.assert(added() === 5);
}

{
	const all = Stream.merge([
		Stream(10),
		Stream("20"),
		Stream({value: 30}),
	]);
}

{
	const straggler = Stream();
	const all = Stream.merge([
		Stream(10),
		Stream("20"),
		straggler,
	]);
	console.assert(all() === undefined);
	straggler(30);
}

{
	let value = 0;
	const id = (value: number) => value;
	const a = Stream<number>();
	const b = Stream<number>();

	const ab1 = Stream.merge([a, b]);
	value = ab1()[0] + ab1()[1];
	const ab2: Stream<number[]> = Stream.merge([a, b]).map(data => {
		value = data[0] + data[1];
		return data;
	});

	a(1);
	b(2);
	console.assert(value === 3);

	a(3);
	b(4);
	console.assert(value === 7);
}

{
	const s = Stream<number>();
	const doubled = Stream.combine(stream => stream() * 2, [s]);
	s.end(true);
	s(3);
	console.assert(doubled() === undefined);
}

{
	const s = Stream(2);
	const doubled = Stream.combine(stream => stream() * 2, [s]);
	s.end(true);
	s(3);
	console.assert(doubled() === 4);
}

{
	const s = Stream(2);
	s.end(true);
	const doubled = Stream.combine(stream => stream() * 2, [s]);
	s(3);
	console.assert(doubled() === undefined);
}

{
	const s = Stream(2);
	const doubled = Stream.combine(stream => stream() * 2, [s]);
	doubled.end(true);
	s(4);
	console.assert(doubled() === 4);
}

// map

{
	const s = Stream("a");
	const t = s.map(() => 1);
	const n = t() + 1;
	console.assert(n === 2);
}

{
	const s = Stream(2);
	const t = s.map(n => n % 2 === 0 ? n : Stream.SKIP);
	s(3);
	const evenNum: number = t();
	console.assert(evenNum === 2);
}

// scan

{
	const parent = Stream<number>();
	const child = Stream.scan((out, p) => out - p, 123, parent);
}

{
	const parent = Stream<number>();
	const child = Stream.scan((arr, p) => arr.concat(p), [] as number[], parent);
	parent(7);
}

// scanMerge

{
	const parent1 = Stream<number>();
	const parent2 = Stream<number>();

	const child = Stream.scanMerge([
		[parent1, (out, p1) => out + p1],
		[parent2, (out, p2) => out + p2]
	], -10);
}

{
	const parent1 = Stream<string>();
	const parent2 = Stream<string>();

	const child = Stream.scanMerge([
		[parent1, (out, p1) => out + p1],
		[parent2, (out, p2) => out + p2 + p2]
	], "a");

	parent1("b");
	parent2("c");
	parent1("b");

	console.assert(child() === 'abccb');
}

{
	const parent1 = Stream<string>();
	const parent2 = Stream<number>();
	const child = Stream.scanMerge([
		[parent1, (out, p1) => out + p1],
		[parent2, (out, p2) => out + p2 + p2]
	], "a");

	parent1("a");
	parent2(1);

	console.assert(child() === 'aa11');
}
