import { Entities, Helper } from "dxf";

const dxfString = "";

// $ExpectType Helper
const helper = new Helper(dxfString);

// $ExpectType FileInfo | null
const parsed = helper.parse();
helper.parsed;

// $ExpectType Entity[] | null
helper.denormalise();

// $ExpectType LayerGroupedEntities | null
helper.group();

// $ExpectType string
helper.toSVG();

// $ExpectType PolylineExport
helper.toPolylines();

if (parsed) {
    const { entities } = parsed;

    // $ExpectType Point[]
    const points = entities.filter(entity => entity.TYPE === "POINT") as Entities.Point[];

    // $ExpectType Polyline[]
    const polylines = entities.filter(entity => entity.TYPE === "POLYLINE") as Entities.Polyline[];
}
