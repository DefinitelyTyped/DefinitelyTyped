/// <reference types="node" />

import { Entities, Helper } from 'dxf';
// import * as path from 'path';
// import * as fs from 'fs';

// const dxfPath = path.resolve(__dirname, '../test/testdxf.dxf');
// const dxfString = fs.readFileSync(dxfPath, 'utf-8');
const dxfString = "";

// $ExpectType Helper
const helper = new Helper(dxfString);

// $ExpectType FileInfo | null
helper.parsed;

// $ExpectType Entity[] | null
helper.denormalised;

// $ExpectType string
helper.toSVG();

// $ExpectType Polyline[]
helper.toPolylines();

const { entities } = helper.parsed!;

// $ExpectType DXFPointEntity[]
const points = entities.filter(entity => entity.TYPE === 'POINT') as Entities.DXFPointEntity[];

// $ExpectType DXFPolylineEntity[]
const polylines = entities.filter(entity => entity.TYPE === 'POLYLINE') as Entities.DXFPolylineEntity[];
