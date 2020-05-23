// @TODO:

/**
 * Render the HUD container
 */
declare class HeadsUpDisplay extends Application {
    /** Token HUD */
    token: TokenHUD;

    /** Tile HUD */
    tile: TileHUD;

    /** Drawing HUD */
    drawing: DrawingHUD;

    /** Chat Bubbles */
    bubbles: ChatBubbles;

    constructor(...args: any[]);

    align(): void;
}
