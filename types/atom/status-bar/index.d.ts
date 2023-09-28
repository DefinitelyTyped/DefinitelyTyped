// Status Bar 1.x
// https://atom.io/packages/status-bar

/// <reference path="./config.d.ts" />

export interface AddTileOptions {
    /**
     *  A DOM element, a jQuery object, or a model object for which a view provider
     *  has been registered in the the view registry.
     */
    item: object;

    /**
     *  Determines the placement of the tile within the status bar. Lower priority
     *  will result in closer placement to the anchor.
     */
    priority: number;
}

export interface Tile {
    /** Retrieve the priority that was assigned to the Tile when it was created. */
    getPriority(): number;

    /** Retrieve the Tile's item. */
    getItem(): object;

    /** Remove the Tile from the status bar. */
    destroy(): void;
}

export interface StatusBar {
    /**
     *  Add a tile to the left side of the status bar. Lower priority tiles are placed
     *  further to the left.
     */
    addLeftTile(options: AddTileOptions): Tile;

    /**
     *  Add a tile to the right side of the status bar. Lower priority tiles are placed
     *  further to the right.
     */
    addRightTile(options: AddTileOptions): Tile;

    /** Retrieve all of the tiles on the left side of the status bar. */
    getLeftTiles(): Tile[];

    /** Retrieve all of the tiles on the right side of the status bar. */
    getRightTiles(): Tile[];
}
