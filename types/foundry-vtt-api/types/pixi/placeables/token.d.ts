// @TODO: Types

/**
 * An instance of the Token class represents an Actor within a viewed Scene on the game canvas.
 * Each Token is reference using a numeric id which indexes its position within the scene.
 * See the initialization signature of the parent PlaceableObject class for more details.
 *
 * @param data	An object of token data which is used to construct a new Token.
 * @param scene	The parent Scene entity within which the Token resides.
 */
declare class Token extends PlaceableObject {
    /**
     * A Ray which represents the Token's current movement path
     */
    protected _movement: any;

    /**
     * An Object which records the Token's prior velocity dx and dy
     * This can be used to determine which direction a Token was previously moving
     */
    protected _velocity: any;

    /**
     * The Token's most recent valid position
     */
    protected _validPosition: { x: number; y: number };

    /**
     * Provide a temporary flag through which this Token can be overridden to bypass any movement animation
     */
    protected _noAnimate: boolean;

    /**
     * Track the set of User entities which are currently targeting this Token
     */
    targeted: Set<User>;

    /**
     * An Actor entity constructed using this Token's data
     * If actorLink is true, then the entity is the true Actor entity
     * Otherwise, the Actor entity is a synthetic, constructed using the Token actorData
     */
    actor: Actor;

    /**
     * The Token's most recently computed line-of-sight polygon
     */
    los: PIXI.Polygon;

    /**
     * The Token's most recently computed field-of-vision polygon
     */
    fov: PIXI.Polygon;

    constructor(...args: any[]);

    /**
     * Provide a reference to the canvas layer which contains placeable objects of this type
     */
    static get layer(): PlaceablesLayer;

    /* -------------------------------------------- */
    /*  Permission Attributes
	/* -------------------------------------------- */

    /**
     * A Boolean flag for whether the current game User has permission to control this token
     */
    get owner(): boolean;

    /**
     * Does the current user have at least LIMITED permission to the Token
     */
    get canViewSheet(): boolean;

    /**
     * Is the HUD display active for this token?
     */
    get hasActiveHUD(): boolean;

    /**
     * Convenience access to the token's nameplate string
     */
    get name(): string;

    /**
     * Provide a singleton reference to the TileConfig sheet for this Tile instance
     */
    get sheet(): any;

    /* -------------------------------------------- */
    /*  Rendering Attributes
	/* -------------------------------------------- */

    /**
     * Translate the token's grid width into a pixel width based on the canvas size
     */
    get w(): number;

    /**
     * Translate the token's grid height into a pixel height based on the canvas size
     */
    get h(): number;

    /**
     * The Token's current central position
     */
    get center(): any;

    /* -------------------------------------------- */
    /*  State Attributes
	/* -------------------------------------------- */

    /**
     * An indicator for whether or not this token is currently involved in the active combat encounter.
     */
    get inCombat(): boolean;

    /**
     * An indicator for whether the Token is currently targeted by the active game User
     */
    get isTargeted(): boolean;

    /**
     * Determine whether the Token is visible to the calling user's perspective.
     * If the user is a GM, all tokens are visible
     * If the user is a player, owned tokens which are not hidden are visible
     * Otherwise only tokens whose corner or center are within the vision polygon are visible.
     */
    get isVisible(): boolean;

    /* -------------------------------------------- */
    /*  Lighting and Vision Attributes
	/* -------------------------------------------- */

    /**
     * Test whether the Token has sight (or blindness) at any radius
     */
    get hasSight(): boolean;

    /**
     * Test whether the Token emits light (or darkness) at any radius
     */
    get emitsLight(): boolean;

    /**
     * Test whether the Token has a limited angle of vision or light emission which would require sight to update on Token rotation
     */
    get hasLimitedVisionAngle(): boolean;

    /**
     * Translate the token's sight distance in units into a radius in pixels.
     * @return	The sight radius in pixels
     */
    get dimRadius(): number;

    /**
     * The radius of dim light that the Token emits
     */
    get dimLightRadius(): number;

    /**
     * Translate the token's bright light distance in units into a radius in pixels.
     * @return	The bright radius in pixels
     */
    get brightRadius(): number;

    /**
     * The radius of bright light that the Token emits
     */
    get brightLightRadius(): number;

    /* -------------------------------------------- */
    /* Rendering
	/* -------------------------------------------- */

    draw(): Promise<any>;

    refresh(): void;

    protected _refreshBorder(): void;

    protected _getBorderColor(): any;

    protected _refreshTarget(): void;

    protected _drawIcon(): Promise<any>;

    getBarAttribute(barName: any): any;

    protected _drawBars(): PIXI.Container;

    protected drawBars(): void;

    protected _drawBar(number: number, bar: PIXI.Graphics, data: any): void;

    protected _drawNameplate(): PIXI.Text;

    drawTooltip(): void;

    protected _getTooltipText(): string;

    drawEffects(): void;

    /**
     * Toggle an active effect by it's texture path. Copy the existing Array in order to ensure the update method detects the data as changed.
     * @param texture The texture file-path of the effect icon to toggle on the Token.
     */
    toggleEffect(texture: string): Promise<void>;
}
