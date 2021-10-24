import { Entities, Helper } from 'dxf';

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
