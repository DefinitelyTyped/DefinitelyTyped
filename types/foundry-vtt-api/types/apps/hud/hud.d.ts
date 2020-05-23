// @TODO:

/**
 * An abstract base class for displaying a heads-up-display interface bound to a Placeable Object on the canvas
 */
declare class BasePlaceableHUD extends Application {
    /**
     * Reference a PlaceableObject this HUD is currently bound to
     */
    object: PlaceableObject;

    /**
     * BasePlaceableHUD display states
     */
    DISPLAY_STATES: object;

    constructor(...args: any[]);

    /**
     * Bind the HUD to a new PlaceableObject and display it
     * @param object	A PlaceableObject instance to which the HUD should be bound
     */
    bind(object: PlaceableObject): void;

    /**
     * Clear the HUD by fading out it's active HTML and recording the new display state
     */
    clear(): void;
}
