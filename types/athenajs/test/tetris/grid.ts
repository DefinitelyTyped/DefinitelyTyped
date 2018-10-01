import { Scene, Map, Tile, Dom, SimpleText, AudioManager as AM, Deferred } from "athenajs";
import Shape from "./shape";
import FlashLines from "./flash_lines";

// size constants
const MAP_ROWS = 22;
const MAP_COLS = 12;
const TILE_WIDTH = 20;
const TILE_HEIGHT = 20;
// tile offsets in the spritesheet
const MAP_TILES_OFFSET_Y = 440;
const WALL_TILE_OFFSET_X = 140;
const BACK_TILE_OFFSET_X = 160;
// wall tile number
const WALL_TILE = 8;
// game width
const TOTAL_WIDTH = 800;
const TOTAL_HEIGHT = 600;
// speed (drop delay) at start
const START_TIMING = 1200;
// speed increase at each level
const LEVEL_TIMING = 55;

class Grid extends Scene {
  // game parameters
  score: number;
  level: number;
  timing: number;
  lines: number;
  scoreTable: number[];

  // game sprites
  // current tetris shape
  shape: Shape;
  // next tetris shape
  nextShape: Shape;
  // next tetris string
  nextString: SimpleText;
  // score
  scoreString: SimpleText;
  // "line:"
  linesString: SimpleText;
  // "level:"
  levelString: SimpleText;
  // "pause:"
  pauseString: SimpleText;
  // flashing lines
  flashLines: FlashLines;
  // ->, <-
  controls: SimpleText;

  constructor() {
    super({
      resources: [
        {
          id: "tiles",
          type: "image",
          src: "img/tetris_tiles.png"
        },
        {
          id: "gameover",
          type: "audio",
          src: "sound/gameover.mp3"
        },
        {
          id: "ground",
          type: "audio",
          src: "sound/ground.mp3"
        },
        {
          id: "level",
          type: "audio",
          src: "sound/level.mp3"
        },
        {
          id: "lines",
          type: "audio",
          src: "sound/lines.mp3"
        },
        {
          id: "lines_tetris",
          type: "audio",
          src: "sound/lines_tetris.mp3"
        },
        {
          id: "move",
          type: "audio",
          src: "sound/move.mp3"
        },
        {
          id: "pause",
          type: "audio",
          src: "sound/pause.mp3"
        },
        {
          id: "rotate",
          type: "audio",
          src: "sound/rotate.mp3"
        }
      ]
    });

    // here we keep game-related properties
    this.score = 0;
    this.level = 0;
    this.lines = 0;
    this.timing = START_TIMING;
    this.scoreTable = [40, 100, 300, 1200];

    // we only need to catch the 'ground' event from the 'shape' element
    this.bindEvents("shape:ground");
  }

  /**
   * Generate tileset for the tetris map, mostly hardcoded stuff
   *
   */
  generateTileSet() {
    // create the list of all tiles for the map
    const tiles = [
      {
        offsetX: WALL_TILE_OFFSET_X,
        offsetY: MAP_TILES_OFFSET_Y,
        width: TILE_WIDTH,
        height: TILE_HEIGHT
      }
    ];

    // add a tile for each color
    for (let i = 0, offset = 0; i < 7; ++i, offset += TILE_WIDTH) {
      tiles.push({
        offsetX: offset,
        offsetY: MAP_TILES_OFFSET_Y,
        width: TILE_WIDTH,
        height: TILE_HEIGHT
      });
    }

    tiles.push({
      offsetX: BACK_TILE_OFFSET_X,
      offsetY: MAP_TILES_OFFSET_Y,
      width: TILE_WIDTH,
      height: TILE_HEIGHT
    });

    return tiles;
  }

  /**
   * Generates the map of the game, adding walls around the playground
   */
  createMap() {
    // first create the map with an empty buffer
    const map = new Map({
      src: "tiles",
      tileWidth: TILE_WIDTH,
      tileHeight: TILE_WIDTH,
      width: TILE_WIDTH * MAP_COLS,
      height: TILE_HEIGHT * MAP_ROWS,
      buffer: new ArrayBuffer(MAP_COLS * MAP_ROWS * 2)
    });

    // finally add the tileset
    map.addTileSet(this.generateTileSet());

    return map;
  }

  resetMap() {
    const map = this.map;

    map.clear(0, Tile.TYPE.AIR);

    // set map tiles around the playground as wall tiles
    for (let i = 0; i < map.numRows; ++i) {
      map.updateTile(0, i, WALL_TILE, Tile.TYPE.WALL);
      map.updateTile(map.numCols - 1, i, WALL_TILE, Tile.TYPE.WALL);
    }

    for (let i = 0; i < map.numCols; ++i) {
      map.updateTile(i, map.numRows - 1, WALL_TILE, Tile.TYPE.WALL);
    }
  }

  /**
   * Generates the tile sprite that will be moved by the player
   */
  createShapes() {
    this.shape = new Shape("shape", {
      data: {
        speed: this.timing
      }
    });

    this.nextShape = new Shape("nextShape", {
      x: 610,
      y: 110
    });

    this.nextShape.movable = false;
    this.nextString = new SimpleText("nextString", {
      text: "Next",
      x: 620,
      y: 70
    });

    this.scoreString = new SimpleText("scoreString", {
      text: "Score: 0",
      x: 50,
      y: 70
    });

    this.linesString = new SimpleText("linesString", {
      text: "Lines: 0",
      x: 50,
      y: 120
    });

    this.levelString = new SimpleText("levelString", {
      text: "Level: 0",
      x: 50,
      y: 170
    });

    this.pauseString = new SimpleText("pauseString", {
      text: "Pause",
      x: 380,
      y: 550,
      visible: false
    });

    this.controls = new SimpleText("controlsString", {
      text: "Controls:\narrow keys",
      x: 50,
      y: 220
    });

    this.flashLines = new FlashLines("flash", {
      x: (TOTAL_WIDTH - TILE_WIDTH * MAP_COLS) / 2 + TILE_WIDTH,
      y: (TOTAL_HEIGHT - TILE_HEIGHT * MAP_ROWS) / 2,
      width: TILE_WIDTH * (MAP_COLS - 2),
      lineHeight: TILE_HEIGHT
    });
  }

  /**
   * Called when the scene is ready: generates the map and adds the player's shape
   * sprite onto the screen
   */
  setup() {
    this.createShapes();

    this.map = this.createMap();
  }

  start() {
    const map = this.map;

    this.setBackgroundImage("img/background.png");

    // center map
    this.setMap(
      map,
      (TOTAL_WIDTH - map.width) / 2,
      (TOTAL_HEIGHT - map.height) / 2
    );

    map.addObject(this.shape);

    this.addObject([
      this.nextShape,
      this.nextString,
      this.linesString,
      this.scoreString,
      this.levelString,
      this.pauseString,
      this.flashLines,
      this.controls
    ]);

    this.reset();
  }

  reset() {
    this.score = 0;
    this.level = 0;
    this.lines = 0;
    this.timing = START_TIMING;
    this.resetMap();
    this.shape.moveToTop();

    this.shape.setRandomShape();
    this.nextShape.setRandomShape();
    this.linesString.setText("Lines: " + this.lines);
    this.scoreString.setText("Score: " + this.score);
    this.levelString.setText("Level: " + this.level);

    this.shape.movable = true;
    this.shape.behavior.reset();
  }

  /**
   * Called on game over, simply displays the score in an alert box and restarts the game
   */
  gameover() {
    AM.play("gameover");
    alert("game over!" + this.score);
    this.reset();
  }

  /**
   * This method is called whenever an event that has been registered is received
   *
   */
  onEvent(event: any) {
    const nextShape = this.nextShape;
    const shape = this.shape;

    switch (event.type) {
      case "shape:ground":
        // update the map with the new shape
        this.updateMap();
        // check for lines to remove
        this.removeLinesFromMap(
          event.data.startLine,
          event.data.numRows
        ).then(() => {
          shape.setShape(nextShape.shapeName, nextShape.rotation);
          nextShape.setRandomShape();

          this.shape.moveToTop();

          // we may have a game over here: if the shape collides with another one
          if (!this.shape.snapTile(0, 0, false)) {
            this.gameover();
          } else {
            this.shape.movable = true;
          }
        });
        break;
    }
  }

  /**
   * This method is called when a shape has reached the ground: in this case
   * we simply update the map using the shape's matrix
   */
  updateMap() {
    const shape = this.shape;
    const data = this.shape.shape;
    const map = this.map;
    const pos = map.getTileIndexFromPixel(shape.x, shape.y);
    const buffer = shape.getMatrix();
    const rows = data.height / map.tileHeight;
    const cols = data.width / map.tileWidth;

    for (let j = 0; j < rows; ++j) {
      for (let i = 0; i < cols; ++i) {
        if (buffer[j * cols + i]) {
          map.updateTile(pos.x + i, pos.y + j, data.color, Tile.TYPE.WALL);
        }
      }
    }
  }

  /**
   * returns the number of lines that contains no hole, starting from
   * startLine up to startLine + height
   *
   */
  getLinesToRemove(startLine: number, height: number): number[] {
    console.log("[Grid] getLinesToRemove()");
    const map = this.map;
    const lines: number[] = [];
    let lastLine = startLine + height - 1;

    // avoid bottom ground
    if (lastLine > map.numRows - 2) lastLine = map.numRows - 2;

    for (let j = lastLine; j >= startLine; --j) {
      let hole = false;
      for (let i = 1; i < map.numCols - 1; ++i) {
        hole = hole || map.getTileBehaviorAtIndex(i, j) !== Tile.TYPE.WALL;
      }
      if (!hole) {
        lines.push(j);
      }
    }

    return lines;
  }

  /**
   * Updates level + level object's text
   */
  updateLevel() {
    const oldLevel = this.level;
    this.level = Math.floor(this.lines / 10);
    this.levelString.setText("Level: " + this.level);
    this.timing = START_TIMING - this.level * LEVEL_TIMING;
    this.shape.data['speed'] = this.timing;
    oldLevel !== this.level && AM.play("level");
  }

  /**
   * Updates the player's score using line number & current level
   *
   */
  increaseScore(lines: number) {
    this.score +=
      this.scoreTable[lines - 1] + this.level * this.scoreTable[lines - 1];
    this.lines += lines;
    this.linesString.setText("Lines: " + this.lines);
    this.scoreString.setText("Score: " + this.score);

    if (lines === 4) {
      AM.play("lines_tetris");
    } else {
      AM.play("lines");
    }
  }

  /**
   * Removes lines from the map, shifting the map as needed, and adding
   * empty tiles at the top
   *
   */
  removeLinesFromMap(startLine: number, height: number) {
    const map = this.map;
    const lines = this.getLinesToRemove(startLine, height);

    // no full lines detected
    if (!lines.length) {
      return Deferred.resolve(true);
    }

    this.flashLines.lines = lines;
    return this.flashLines.flash().then(() => {
      // shift the map for each line to remove
      for (let i = 0; i < lines.length; ++i) {
        map.shift(lines[i] + i, 1);
      }

      // add wall at each side of the new lines
      for (let i = 0; i < height; ++i) {
        for (let j = 0; j < map.numCols; ++j) {
          map.updateTile(j, i, 0, Tile.TYPE.AIR);
        }
        map.updateTile(0, i, 8, Tile.TYPE.WALL);
        map.updateTile(map.numCols - 1, i, 8, Tile.TYPE.WALL);
      }

      Dom('.athena-game').addClass('shake-vertical shake-constant');
      setTimeout(() => {
        Dom('.athena-game').removeClass('shake-vertical shake-constant');
      }, 300);

      this.increaseScore(lines.length);
      this.updateLevel();
    });
  }

  pause(isRunning: boolean) {
    this.pauseString.visible = !isRunning;
    AM.play("pause");
  }
}

export default Grid;
