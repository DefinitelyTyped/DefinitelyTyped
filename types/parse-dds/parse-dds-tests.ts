import parseDds = require('parse-dds');

const res = parseDds(new ArrayBuffer(0));

// $ExpectType [number, number]
res.shape;

// $ExpectType { offset: number; length: number; shape: [number, number]; }[]
res.images;

// $ExpectType "dxt1" | "dxt3" | "dxt5" | "rgba32f"
res.format;

// $ExpectType number
res.flags;

// $ExpectType boolean
res.cubemap;
