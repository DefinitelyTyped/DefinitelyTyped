import * as tilebelt from 'tilebelt'

const lon = 30.5
const lat = 50.5
const z = 15
const tile = [5, 10, 10]
const tiles = [
    [0, 0, 5],
    [0, 1, 5],
    [1, 1, 5],
    [1, 0, 5]
]
const quadkey = '00001033'
const bbox = [ -178.24, 84.70, -177.89, 84.73 ]

tilebelt.tileToQuadkey(tile)
tilebelt.tileToBBOX(tile)
tilebelt.tileToGeoJSON(tile)
tilebelt.getParent(tile)
tilebelt.getSiblings(tile)
tilebelt.tileToQuadkey(tile)
tilebelt.pointToTile(lon, lat, z)
tilebelt.quadkeyToTile(quadkey)
tilebelt.bboxToTile(bbox)
tilebelt.pointToTileFraction(lon, lat, z)
tilebelt.hasSiblings(tile, tiles)
tilebelt.hasTile(tiles, tile)
tilebelt.tilesEqual(tiles[0], tiles[1])
