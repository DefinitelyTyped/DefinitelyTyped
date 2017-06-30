// Type definitions for tilebelt 1.0.1
// Project: https://github.com/mapbox/tilebelt
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

declare const tilebelt: tilebelt.TilebeltStatic;
declare namespace tilebelt {
    interface TilebeltStatic {
        /**
         * Get a geojson representation of a tile
         *
         * @name tileToGeoJSON
         * @param {Array<number>} tile
         * @returns {Feature<Polygon>}
         * @example
         * var poly = tileToGeoJSON([5, 10, 10])
         * //=poly
         */
        tileToGeoJSON(tile: Array<number>): GeoJSON.Feature<GeoJSON.Polygon>

        /**
         * Get the bbox of a tile
         *
         * @name tileToBBOX
         * @param {Array<number>} tile
         * @returns {Array<number>} bbox
         * @example
         * var bbox = tileToBBOX([5, 10, 10])
         * //=bbox
         */
        tileToBBOX(tile: Array<number>): Array<number>

        /**
         * Get the tile for a point at a specified zoom level
         *
         * @name pointToTile
         * @param {number} lon
         * @param {number} lat
         * @param {number} z
         * @returns {Array<number>} tile
         * @example
         * var tile = pointToTile(1, 1, 20)
         * //=tile
         */
        pointToTile(lon: number, lat: number, z: number): Array<number>

        /**
         * Get the 4 tiles one zoom level higher
         *
         * @name getChildren
         * @param {Array<number>} tile
         * @returns {Array<Array<number>>} tiles
         * @example
         * var tiles = getChildren([5, 10, 10])
         * //=tiles
         */
        getChildren(tile: Array<number>): Array<Array<number>>

        /**
         * Get the tile one zoom level lower
         *
         * @name getParent
         * @param {Array<number>} tile
         * @returns {Array<number>} tile
         * @example
         * var tile = getParent([5, 10, 10])
         * //=tile
         */
        getParent(tile: Array<number>): Array<number>

        /**
         * Get the 3 sibling tiles for a tile
         *
         * @name getSiblings
         * @param {Array<number>} tile
         * @returns {Array<Array<number>>} tiles
         * @example
         * var tiles = getSiblings([5, 10, 10])
         * //=tiles
         */
        getSiblings(tile: Array<number>): Array<Array<number>>

        /**
         * Check to see if an array of tiles contains a tiles siblings
         *
         * @name hasSiblings
         * @param {Array<number>} tile
         * @param {Array<Array<number>>} tiles
         * @returns {boolean}
         * @example
         * var tiles = [
         *     [0, 0, 5],
         *     [0, 1, 5],
         *     [1, 1, 5],
         *     [1, 0, 5]
         * ]
         * hasSiblings([0, 0, 5], tiles)
         * //=boolean
         */
        hasSiblings(tile: Array<number>, tiles: Array<Array<number>>): boolean

        /**
         * Check to see if an array of tiles contains a particular tile
         *
         * @name hasTile
         * @param {Array<Array<number>>} tiles
         * @param {Array<number>} tile
         * @returns {boolean}
         * @example
         * var tiles = [
         *     [0, 0, 5],
         *     [0, 1, 5],
         *     [1, 1, 5],
         *     [1, 0, 5]
         * ]
         * hasTile(tiles, [0, 0, 5])
         * //=boolean
         */
        hasTile(tiles: Array<Array<number>>, tile: Array<number>): boolean

        /**
         * Check to see if two tiles are the same
         *
         * @name tilesEqual
         * @param {Array<number>} tile1
         * @param {Array<number>} tile2
         * @returns {boolean}
         * @example
         * tilesEqual([0, 1, 5], [0, 0, 5])
         * //=boolean
         */
        tilesEqual(tile1: Array<number>, tile2: Array<number>): boolean

        /**
         * Get the quadkey for a tile
         *
         * @name tileToQuadkey
         * @param {Array<number>} tile
         * @returns {string} quadkey
         * @example
         * var quadkey = tileToQuadkey([0, 1, 5])
         * //=quadkey
         */
        tileToQuadkey(tile: Array<number>): string

        /**
         * Get the tile for a quadkey
         *
         * @name quadkeyToTile
         * @param {string} quadkey
         * @returns {Array<number>} tile
         * @example
         * var tile = quadkeyToTile('00001033')
         * //=tile
         */
        quadkeyToTile(quadkey: string): Array<number>

        /**
         * Get the smallest tile to cover a bbox
         *
         * @name bboxToTile
         * @param {Array<number>} bbox
         * @returns {Array<number>} tile
         * @example
         * var tile = bboxToTile([ -178, 84, -177, 85 ])
         * //=tile
         */
        bboxToTile(bbox: Array<number>): Array<number>

        /**
         * Get the precise fractional tile location for a point at a zoom level
         *
         * @name pointToTileFraction
         * @param {number} lon
         * @param {number} lat
         * @param {number} z
         * @returns {Array<number>} tile fraction
         * var tile = pointToTileFraction(30.5, 50.5, 15)
         * //=tile
         */
        pointToTileFraction(lon: number, lat: number, z: number): Array<number>
    }
}

declare module "tilebelt" {
  export = tilebelt
}