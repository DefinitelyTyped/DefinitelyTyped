import { ZoomTransform } from "d3";

declare module "d3" {
    type Tile = [number, number, number];

    interface Tiles extends Array<Tile> {
        translate: [number, number];
        scale: number;
    }

    interface TileLayout {
        /**
         * Computes the set of tiles to display given the current settings,
         * computing the scale and translate by invoking the corresponding
         * accessors with the given arguments. Returns an array of [x, y, z]
         * arrays representing the x- (horizontal), y- (vertical) and z- (zoom)
         * coordinates of the visible tiles. The returned tiles array also has
         * tiles.scale and tiles.translate properties which together with an
         * individual tile’s x and y determine the intended location of the tile
         * in the viewport.
         */
        (): Tiles;
        (t: ZoomTransform): Tiles;

        /**
         * If size is specified, sets this tile layout’s viewport size to the
         * specified array of numbers [width, height] and returns this tile
         * layout. If size is not specified, returns the current viewport size,
         * which defaults to [960, 500]. This is a convenience method for setting
         * the viewport extent to [[0, 0], [width, height]].
         */
        size(): [number, number];
        size(size: [number, number]): this;

        /**
         * If scale is specified, sets this tile layout’s scale function and
         * returns this tile layout. If scale is a function, it is invoked when
         * the tile layout is invoked, being passed the same arguments as the tile
         * layout; this function must return a number indicating the desired width
         * and height of the world tile [0, 0, 0]. If scale is not a function, it
         * assumed to be a constant number, and is wrapped in a function which
         * returns the specified number. If scale is not specified, returns the
         * current layout scale function.
         */
        scale(): (...args: any[]) => number;
        scale(scale: number | ((...args: any[]) => number)): this;

        /**
         * If translate is specified, sets this tile layout’s translate function
         * and returns this tile layout. If translate is a function, it is invoked
         * when the tile layout is invoked, being passed the same arguments as the
         * tile layout; this function must return an array of numbers [x, y]
         * indicating the desired coordinates the center of the world tile [0, 0,
         * 0]. If translate is not a function, it is assumed to be a constant
         * array [x, y] and is wrapped in a function which returns the specified
         * array. If translate is not specified, returns the current layout
         * translate function.
         */
        translate(): (...args: any[]) => [number, number];
        translate(
            translate: [
                number,
                number,
            ] | ((...args: any[]) => [number, number]),
        ): this;

        /**
         * If zoomDelta is specified, sets this tile layout’s zoom offset to the
         * specified number zoomDelta and returns this tile layout. If zoomDelta
         * is not specified, returns the current zoom offset, which defaults to 0.
         * The zoom offset affects which z-coordinate is chosen based on the
         * current scale; the default zoom offset of 0 which choose the z that is
         * closest the displayed size; a zoom offset of -1 will use z - 1, giving
         * tiles that are twice as big (lower resolution); a zoom offset of +1
         * will use z + 1, giving tiles that are twice as small (higher
         * resolution). The latter might be appropriate for showing 256×256 tiles
         * in a 128×128 space on a high-resolution screen.
         */
        zoomDelta(): number;
        zoomDelta(zoomDelta: number): this;

        /**
         * If clamp is specified, sets tile.clampX and tile.clampY to the
         * specified boolean clamp and returns this tile layout. If clamp is not
         * specified, returns true if tile.clampX and tile.clampY are both true,
         * and false otherwise.
         */
        clamp(): boolean;
        clamp(clamp: boolean): this;

        /**
         * If clamp is specified, sets whether or not the visible tiles will be
         * clamped in the x-coordinate and returns this tile layout. If clamp is
         * not specified, returns the current x-clamp, which defaults to true. If
         * the x-clamp is false, then the tile layout will return tiles that are
         * outside the “world” tile [0, 0, 0], with x-coordinates that are outside
         * the normal bounds 0 ≤ x < 2^z. See d3.tileWrap for converting these
         * coordinates to wrapped in-world coordinates.
         */
        clampX(): boolean;
        clampX(clamp: boolean): this;

        /**
         * If clamp is specified, sets whether or not the visible tiles will be
         * clamped in the y-coordinate and returns this tile layout. If clamp is
         * not specified, returns the current y-clamp, which defaults to true. If
         * the y-clamp is false, then the tile layout will return tiles that are
         * outside the “world” tile [0, 0, 0], with y-coordinates that are outside
         * the normal bounds 0 ≤ y < 2^z. See d3.tileWrap for converting these
         * coordinates to wrapped in-world coordinates. See also tile.clampX.
         */
        clampY(): boolean;
        clampY(clamp: boolean): this;

        /**
         * If tileSize is specified, sets this tile layout’s tile width and height
         * to the specified number tileSize and returns this tile layout. If
         * tileSize is not specified, returns the current layout tile size, which
         * defaults to 256. 256×256 is the most common tile size among tile
         * providers.
         */
        tileSize(): number;
        tileSize(tileSize: number): this;

        /**
         * If extent is specified, sets this tile layout’s viewport extent to the
         * specified array [[x0, y0], [x1, y1]], where [x0, y0] is the top-left
         * corner and [x1, y1] is the bottom-right corner, and returns this tile
         * layout. If extent is not specified, returns the current viewport
         * extent, which defaults to [[0, 0], [960, 500]]. Setting the viewport
         * extent implicitly sets the viewport size.
         */
        extent(): [[number, number], [number, number]];
        extent(extent: [[number, number], [number, number]]): this;
    }

    /**
     * Constructs a new tile layout with the default settings.
     */
    function tile(): TileLayout;

    /**
     * Given tile coordinates [x, y, z], where x and y may be outside the
     * "world" tile [0, 0, 0], returns the wrapped tile coordinates [x′, y′, z]
     * where j = 2 ^ z, x′ = x - ⌊x / j⌋ * j and y′ = y - ⌊y / j⌋ * j. This
     * function is most commonly used in conjunction with tile.clampX to allow
     * horizontal wrapping of web Mercator tiles.
     */
    function tileWrap(tile: [number, number, number]): [number, number, number];
}
