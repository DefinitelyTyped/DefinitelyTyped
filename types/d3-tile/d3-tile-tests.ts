import * as d3 from 'd3';

// test variables
let tileLayout: d3.TileLayout;
let tile: d3.Tile;
let tiles: d3.Tiles;
let zoomTransform: d3.ZoomTransform;

// test tile() constructor
tileLayout = d3.tile();

// test invoke with no arguments
tiles = tileLayout();

// test invoke with ZoomTransform argument
zoomTransform = d3.zoomTransform(document.createElement('svg'));
tiles = tileLayout(zoomTransform);

// test size getter/setter
let sizeValue: [number, number] = tileLayout.size();
tileLayout = tileLayout.size([800, 600]);

// test scale getter/setter with number
let scaleFunc: (...args: any[]) => number = tileLayout.scale();
tileLayout = tileLayout.scale(256);
tileLayout = tileLayout.scale((...args: any[]) => 256);

// test translate getter/setter with array
let translateFunc: (...args: any[]) => [number, number] = tileLayout.translate();
tileLayout = tileLayout.translate([0, 0]);
tileLayout = tileLayout.translate((...args: any[]) => [0, 0]);

// test zoomDelta getter/setter
let zoomDeltaValue: number = tileLayout.zoomDelta();
tileLayout = tileLayout.zoomDelta(0);
tileLayout = tileLayout.zoomDelta(-1);
tileLayout = tileLayout.zoomDelta(1);

// test clamp getter/setter
let clampValue: boolean = tileLayout.clamp();
tileLayout = tileLayout.clamp(true);
tileLayout = tileLayout.clamp(false);

// test clampX getter/setter
let clampXValue: boolean = tileLayout.clampX();
tileLayout = tileLayout.clampX(true);
tileLayout = tileLayout.clampX(false);

// test clampY getter/setter
let clampYValue: boolean = tileLayout.clampY();
tileLayout = tileLayout.clampY(true);
tileLayout = tileLayout.clampY(false);

// test tileSize getter/setter
let tileSizeValue: number = tileLayout.tileSize();
tileLayout = tileLayout.tileSize(256);
tileLayout = tileLayout.tileSize(512);

// test extent getter/setter
let extentValue: [[number, number], [number, number]] = tileLayout.extent();
tileLayout = tileLayout.extent([[0, 0], [960, 500]]);
tileLayout = tileLayout.extent([[0, 0], [1920, 1080]]);

// test tiles array properties
let tilesLength: number = tiles.length;
let tilesScale: number = tiles.scale;
let tilesTranslate: [number, number] = tiles.translate;

// test tile coordinates
for (let i = 0; i < tiles.length; i++) {
    let tileCoord: d3.Tile = tiles[i];
    let x: number = tileCoord[0];
    let y: number = tileCoord[1];
    let z: number = tileCoord[2];
}

// test tileWrap function
let wrappedTile: [number, number, number] = d3.tileWrap([1, 2, 3]);
let wrappedX: number = wrappedTile[0];
let wrappedY: number = wrappedTile[1];
let wrappedZ: number = wrappedTile[2];

// test method chaining
tileLayout
    .size([800, 600])
    .scale(256)
    .translate([0, 0])
    .zoomDelta(0)
    .clamp(true)
    .clampX(true)
    .clampY(true)
    .tileSize(256)
    .extent([[0, 0], [960, 500]]);
