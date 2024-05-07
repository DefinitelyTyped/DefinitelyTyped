/**
 * Find block by name.
 * @param blockName The name of the block to find
 * @returns The index of the block found, otherwise 0
 */
declare function findBlock(blockName: string): number;

/**
 * Find blocks by name.
 * @param blockName The name of the blocks to find
 * @returns The indices of the blocks found
 */
declare function findBlocks(blockName: string): number[];

/**
 * Find block by name.
 * @param blockName The name of the block to find
 * @returns The index of the block found, otherwise 0
 * @alias {@link findBlock}
 */
declare function findPrefab(PrefabName: string): number;

/**
 * Find block by name.
 * @param blockName The name of the blocks to find
 * @returns The indices of the blocks found
 * @alias {@link findBlocks}
 */
declare function findPrefabs(PrefabName: string): number[];

/**
 * Set block at position `(x, y, z)` in level or open block.
 * @param x The x position to set the block at
 * @param y The y position to set the block at
 * @param z The z position to set the block at
 * @param blockIndex The index of the block to set
 */
declare function setBlock(x: number, y: number, z: number, blockIndex: number): void;

/**
 * Set block value at position `(x, y, z)`.
 * @param x The x position of the block
 * @param y The y position of the block
 * @param z The z position of the block
 * @param valueIndex The index of the value to set
 * @param value The value to set
 */
declare function setBlockValue(
    x: number,
    y: number,
    z: number,
    valueIndex: number,
    value: number | string | [x: number, y: number, z: number],
): void;

/**
 * Get block at position `(x, y, z)` in level or open block.
 * @param x The x position of the block to get
 * @param y The y position of the block to get
 * @param z The z position of the block to get
 * @returns The index of the block at position `(x, y, z)`
 */
declare function getBlock(x: number, y: number, z: number): number;

/**
 * Connect blocks at position `(x1, y1, z1)` and `(x2, y2, z2)`
 * using terminal indices `index1` and `index2`.
 * @param x1 The x position of the first block
 * @param y1 The y position of the first block
 * @param z1 The z position of the first block
 * @param index1 The index of the first terminal
 * @param x2 The x position of the second block
 * @param y2 The y position of the second block
 * @param z2 The z position of the second block
 * @param index2 The index of the second terminal
 */
declare function connect(
    x1: number,
    y1: number,
    z1: number,
    index1: number,
    x2: number,
    y2: number,
    z2: number,
    index2: number,
): void;

/**
 * Get terminal name of block at `(x, y, z)` and terminal index.
 * @param x The x position of the block
 * @param y The y position of the block
 * @param z The z position of the block
 * @param index The index of the terminal
 * @returns The terminal name (empty string if missing)
 */
declare function getTerminalName(x: number, y: number, z: number, index: number): string;

/**
 * Get terminal type of block at `(x, y, z)` and terminal index.
 * @param x The x position of the block
 * @param y The y position of the block
 * @param z The z position of the block
 * @param index The index of the terminal
 * @returns The terminal type (-1 if missing)
 */
declare function getTerminalType(x: number, y: number, z: number, index: number): TerminalType;
/**
 * The type of a terminal.
 */
declare enum TerminalType {
    Missing = -1,
    Exe = 1,
    Num = 2,
    NumPtr = 3,
    Vec = 4,
    VecPtr = 5,
    Rot = 6,
    RotPtr = 7,
    Tru = 8,
    TruPtr = 9,
    Obj = 10,
    ObjPtr = 11,
    Con = 12,
    ConPtr = 13,
}

/**
 * Update changes after using {@linkcode setBlock()}
 */
declare function updateChanges(): void;

/**
 * Log printout.
 * @param value The value to print (only for strings and numbers for now)
 */
declare function log(value: string | number): void;

/**
 * Clear log.
 */
declare function clearLog(): void;

/**
 * Get size of level or open block.
 * @returns The size of level or open block
 */
declare function getSize(): [x: number, y: number, z: number];

/**
 * Get number of levels.
 * @returns The number of levels
 */
declare function getLevelCount(): number;

/**
 * Get current level index.
 * @returns The current level index
 */
declare function getLevel(): number;

/**
 * Change level.
 * @param levelIndex The level index to change to
 */
declare function setLevel(levelIndex: number): void;

/**
 * Get version of the editor script engine.
 * @returns The version of the editor script engine
 */
declare function getVersion(): number;

///////////////////////////////////////////////////////////
// Start of Fancade Beta features, play.fancade.com/beta //
///////////////////////////////////////////////////////////

/**
 * Parameters of the event listeners.
 */
interface Events {
    // Callback function called when a block is placed at (x, y, z)
    "block-placed": [x: number, y: number, z: number];
    // Callback function called each frame (also in play mode)
    update: [];
    // Callback function called when a key is pressed
    // The key is a number. See https://www.glfw.org/docs/3.3/group__keys.html for a complete list
    keydown: [key: number, ...args: []];
    // Callback function called when a key is released
    // The key is a number. See https://www.glfw.org/docs/3.3/group__keys.html for a complete list
    keyup: [key: number, ...args: []];
}

/**
 * Listen to events. (Beta only)
 * @param event The name of the event
 * @param listener The callback function
 */
declare function setEventListener<E extends keyof Events>(eventName: E, listener: (...args: Events[E]) => void): void;

/**
 * Select block. (Beta only)
 * @param x The x position of the block to select
 * @param y The y position of the block to select
 * @param z The z position of the block to select
 */
declare function selectAt(x: number, y: number, z: number): void;

/**
 * Get selected block count. (Beta only)
 * @returns The amount of selected blocks in edit mode
 */
declare function getSelectedCount(): number;

/**
 * Check if the game is paused. (Beta only)
 */
declare function isGamePaused(): boolean;

/**
 * Check if Fancade is in play mode. (Beta only)
 */
declare function isGamePlaying(): boolean;

/**
 * Check if a key is down. (Beta only)
 * Key number list: https://www.glfw.org/docs/3.3/group__keys.html
 * @param key The key to be checked
 */
declare function isKeyDown(key: number): boolean;

/**
 * Generate test input. (swipes and taps, beta only)
 * @param fromX The start x position of the swipe
 * @param fromY The start y position of the swipe
 * @param toX The end x position of the swipe
 * @param toY The end y position of the swipe
 * @param durationFrames The duration of the swipe in frames
 * @param touchIndex The index of the touch to generate
 */
declare function generateSwipe(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    durationFrames: number,
    touchIndex: number,
): void;
