import * as tilereduce from 'tile-reduce'
import { BBox, Tile, Source, Types } from 'tile-reduce'

global.mapOptions

const start: tilereduce.Types = "start"
const bbox: BBox = [-120, 40, -110, 50]
const tile: Tile = [1, 1, 1]
const source: Source = {
    name: 'streets',
    url: 'https://b.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf',
    layers: ['roads'],
    maxrate: 10
}

tilereduce({
    log: false,
    maxWorkers: 3,
    zoom: 15,
    bbox: bbox,
    geojson: {"type": "Polygon", "coordinates": [/* coordinates */]},
    mapOptions: { bufferSize: 4 },
    sources: [source],
    map: 'map.js',
    tiles: [tile],
})
.on(start, () => { })
.on('map', (tile, workerId) => { })
.on('reduce', (result, tile) => { })
.on('end', () => { })
