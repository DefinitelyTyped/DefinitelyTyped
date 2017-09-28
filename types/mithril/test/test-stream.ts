import * as stream from 'mithril/stream';
import { Stream } from 'mithril/stream';

{
	const s = stream(1);
	const initialValue = s();
	s(2);
	const newValue = s();
	console.assert(initialValue === 1);
	console.assert(newValue === 2);
}

{
	const s = stream();
	console.assert(s() === undefined);
}

{
	const s: Stream<number | undefined> = stream(1);
	s(undefined);
	console.assert(s() === undefined);
}

{
	const s = stream(stream(1));
	console.assert(s()() === 1);
}

{
	const s = stream();
	const doubled = stream.combine(s => s() * 2, [s]);
	s(2);
	console.assert(doubled() === 4);
}

{
	const s = stream(2);
	const doubled = stream.combine(s => s() * 2, [s]);
	console.assert(doubled() === 4);
}

{
	const s1 = stream();
	const s2 = stream();
	const added = stream.combine((s1, s2) => s1() + s2(), [s1, s2]);
	s1(2);
	s2(3);
	console.assert(added() === 5);
}

{
	const s1 = stream(2);
	const s2 = stream(3);
	const added = stream.combine((s1, s2) => s1() + s2(), [s1, s2]);
	console.assert(added() === 5);
}

{
	const s1 = stream(2);
	const s2 = stream();
	const added = stream.combine((s1, s2) => s1() + s2(), [s1, s2]);
	s2(3);
	console.assert(added() === 5);
}

{
	let count = 0;
	const a = stream();
	const b = stream.combine(a => a() * 2, [a]);
	const c = stream.combine(a => a() * a(), [a]);
	const d = stream.combine((b, c) => {
		count++;
		return b() + c();
	}, [b, c]);
	a(3);
	console.assert(d() === 15);
	console.assert(count === 1);
}

{
	let count = 0;
	const a = stream(3);
	const b = stream.combine(a => a() * 2, [a]);
	const c = stream.combine(a => a() * a(), [a]);
	const d = stream.combine((b, c) => {
		count++;
		return b() + c();
	}, [b, c]);
	console.assert(d() === 15);
	console.assert(count === 1);
}

{
	let streams: Array<Stream<any>> = [];
	const a = stream();
	const b = stream();
	const c = stream.combine((a, b, changed) => {
		streams = changed;
	}, [a, b]);
	a(3);
	b(5);
	console.assert(streams.length === 1);
	console.assert(streams[0] === b);
}

{
	let streams: Array<Stream<number>> = [];
	const a = stream(3);
	const b = stream(5);
	const c = stream.combine((a, b, changed) => {
		streams = changed;
	}, [a, b]);
	a(7);
	console.assert(streams.length === 1);
	console.assert(streams[0] === a);
}

{
	const a = stream(1);
	const b = stream.combine(a => undefined, [a]);

	console.assert(b() === undefined);
}

{
	const a = stream(1);
	const b = stream.combine(a => stream(2), [a]);
	console.assert(b()() === 2);
}

{
	const a = stream(1);
	const b = stream.combine(a => stream(), [a]);
	console.assert(b()() === undefined);
}

{
	const all = stream.merge([
		stream(10),
		stream("20"),
		stream({value: 30}),
	]);
}

{
	const straggler = stream();
	const all = stream.merge([
		stream(10),
		stream("20"),
		straggler,
	]);
	console.assert(all() === undefined);
	straggler(30);
}

{
	let value = 0;
	const id = (value: number) => value;
	const a = stream<number>();
	const b = stream<number>();

	const all = stream.merge([a.map(id), b.map(id)]).map(data => {
		value = data[0] + data[1];
	});

	a(1);
	b(2);
	console.assert(value === 3);

	a(3);
	b(4);
	console.assert(value === 7);
}

{
	const s = stream();
	const doubled = stream.combine(stream => stream * 2, [s]);
	s.end(true);
	s(3);
	console.assert(doubled() === undefined);
}

{
	const s = stream(2);
	const doubled = stream.combine(stream => stream * 2, [s]);
	s.end(true);
	s(3);
	console.assert(doubled() === 4);
}

{
	const s = stream(2);
	s.end(true);
	const doubled = stream.combine(stream => stream * 2, [s]);
	s(3);
	console.assert(doubled() === undefined);
}

{
	const s = stream(2);
	const doubled = stream.combine(stream => stream * 2, [s]);
	doubled.end(true);
	s(4);
	console.assert(doubled() === 4);
}

// scan

{
	const parent = stream<number>();
	const child = stream.scan((out, p) => out - p, 123, parent);
}

{
	const parent = stream<number>();
	const child = stream.scan((arr, p) => arr.concat(p), [] as number[], parent);
	parent(7);
}

// scanMerge

{
	const parent1 = stream<number>();
	const parent2 = stream<number>();

	const child = stream.scanMerge([
		[parent1, (out, p1) => out + p1],
		[parent2, (out, p2) => out + p2]
	], -10);
}

{
	const parent1 = stream<string>();
	const parent2 = stream<string>();

	const child = stream.scanMerge([
		[parent1, (out, p1) => out + p1],
		[parent2, (out, p2) => out + p2 + p2]
	], "a");

	parent1("b");
	parent2("c");
	parent1("b");

	console.assert(child() === 'abccb');
}

{
	const parent1 = stream<string>();
	const parent2 = stream<number>();
	const child = stream.scanMerge([
		[parent1, (out, p1) => out + p1],
		[parent2, (out, p2) => out + p2 + p2]
	], "a");

	parent1("a");
	parent2(1);

	console.assert(child() === 'aa11');
}
