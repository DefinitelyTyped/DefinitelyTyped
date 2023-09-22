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

// $ExpectType PolylineExport
helper.toPolylines();


const { entities } = helper.parsed!;

// $ExpectType PointEntityData[]
const points = entities.filter(entity => entity.type === 'POINT') as Entities.Point[];

// $ExpectType PolylineEntityData[]
const polylines = entities.filter(entity => entity.type === 'POLYLINE') as Entities.Polyline[];

// $ExpectType LineEntityData[]
const lines = entities.filter(entity => entity.type === 'LINE') as Entities.Line[];
