import { Map, TileDesc } from 'athenajs';

const map = new Map({
    src: "tiles",
    tileWidth: 32,
    tileHeight: 32,
    width: 29 * 32,
    height: 8 * 32,
    viewportW: 320,
    viewportH: 200
});
const tiles: TileDesc[] = [];
const mapContent: Uint8Array = new Uint8Array(10);
const behaviors: Uint8Array = new Uint8Array(10);

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 29; col++) {
        tiles.push({
            offsetX: col * 32,
            offsetY: row * 32,
            width: 32,
            height: 32
        });
    }
}

map.addTileSet(tiles);

map.setData(mapContent, behaviors);
