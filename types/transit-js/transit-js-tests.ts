import transit = require("transit-js");

const t = transit;

// From http://cognitect.github.io/transit-tour/

let r = transit.reader("json"); // $ExpectType TransitReader

r.read('[1,1.5,1e5,"A string!","\u03BB"]'); // $ExpectType any

class Point {
    constructor(readonly x: number, readonly y: number) {}
}

type PointRep = [number, number];

r = transit.reader("json", {
    handlers: {
        point: (v: PointRep) => new Point(v[0], v[1])
    },
});

r.read('[{"~#point":[0.5,1.5]}]');

const ph = transit.makeWriteHandler({
    tag: (v) => "point",
    rep: (v) => [v.x, v.y],
    stringRep: (v) => null,
});

const w = transit.writer("json", {
    handlers: transit.map([Point, ph]),
});

w.write([new Point(0.5, 1.5), new Point(1.5, 2.5)]);

function roundtrip(x: any) {
    const r = t.reader("json");
    const w = t.writer("json");
    return r.read(w.write(x));
}

function testRoundtrip() {
    const arr1 = ["red", "green", "blue"];
    const arr2 = ["apple", "pear", "grape"];
    const data = t.map();
    data.set(t.integer(1), arr1);
    data.set(t.integer(2), arr2);
    return t.equals(data, roundtrip(data));
}

testRoundtrip(); // $ExpectType boolean
