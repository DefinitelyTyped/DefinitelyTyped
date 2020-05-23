/**
 * A PlaceableObject base container class
 */
declare class PlaceableObject extends PIXI.Container {
    data: any;

    scene: Scene;

    fov: PIXI.Polygon;

    protected _hover: boolean;

    protected _controlled: boolean;

    controlIcon: ControlIcon;

    constructor(data: any, scene: Scene);

    /* -------------------------------------------- */
    /* Properties
	/* -------------------------------------------- */

    /**
     * Provide a reference to the canvas layer which contains placeable objects of this type
     */
    static get layer(): PlaceablesLayer;

    /**
     * Return a reference to the singleton layer instance which contains placeables of this type
     */
    get layer(): PlaceablesLayer;

    /**
     * This EmbeddedEntity ID of the underlying data object
     */
    get id(): number;

    /**
     * The [x,y] coordinates of the placeable object within the Scene container
     */
    get coords(): number[];

    /**
     * The central coordinate pair of the placeable object based on it's own width and height
     */
    get center(): { x: number; y: number };

    /**
     * A Boolean flag for whether the current game User has permission to control this token
     */
    get owner(): boolean;

    /**
     * A placeable object should define the logic to create
     */
    get sheet(): Application;

    /* -------------------------------------------- */
    /* Methods
	/* -------------------------------------------- */

    /**
     * Clear the display of the existing object
     */
    clear(): void;

    /**
     * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
     * @param multiSelect	Is this object being selected as part of a group?
     * @param releaseOthers	Release any other controlled objects first
     * @return				A Boolean flag denoting whether or not control was successful.
     */
    control({ multiSelect, releaseOthers }?: { multiSelect?: boolean; releaseOthers?: boolean }): boolean;

    /**
     * Obtain the shifted position for the Object
     * @param dx	The number of grid units to shift along the X-axis
     * @param dy	The number of grid units to shift along the Y-axis
     * @return		The target movement coordinates subject to some offset
     */
    protected _getShiftedPosition(dx: number, dy: number): { x: number; y: number };

    /**
     * Release control over a PlaceableObject, removing it from the controlled set
     * @return	A Boolean flag confirming the object was released.
     */
    release(): boolean;

    /**
     * Draw the placeable object into its parent container
     */
    draw(): void;

    refresh(): void;

    /**
     * Sort the PlaceableObject to the front of the rendering stack, above all other siblings.
     * Update the database with the new maximal Z-index
     */
    sortToFront(): void;

    /**
     * Sort the PlaceableObject to the back of the rendering stack, behind all other siblings.
     * Update the database with the new minimal Z-index
     */
    sortToBack(): void;

    /**
     * Shift the display of the PlaceableObject to the top of the rendering stack, above all other siblings
     */
    displayToFront(): void;

    /**
     * Clone the placeable object, returning a new object with identical attributes
     * The returned object is non-interactive, and has no assigned ID
     * If you plan to use it permanently you should call the create method
     *
     * @return	A new object with identical data
     */
    clone(): PlaceableObject;

    /**
     * Rotate the PlaceableObject to a certain angle of facing
     * @param angle	The desired angle of rotation
     * @param snap	Snap the angle of rotation to a certain target degree increment
     * @return		A Promise which resolves once the rotation has completed
     */
    rotate(angle: number, snap: number): Promise<any>;

    /**
     * Get the value of a "flag" for this PlaceableObject
     * See the setFlag method for more details on flags
     *
     * @param scope	The flag scope which namespaces the key
     * @param key	The flag key
     * @return		The flag value
     */
    getFlag(scope: string, key: string): any;

    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     *
     * @param scope	The flag scope which namespaces the key
     * @param key	The flag key
     * @param value	The flag value
     *
     * @return		A Promise resolving to the updated PlaceableObject
     */
    setFlag(scope: string, key: string, value: any): Promise<PlaceableObject>;

    /**
     * Remove a flag assigned to the Entity
     * @param scope	The flag scope which namespaces the key
     * @param key	The flag key
     * @return		A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;

    /* -------------------------------------------- */
    /*  Socket Listeners and Handlers               */
    /* -------------------------------------------- */

    /** @extends {Entity.createEmbeddedEntity} */
    static create(createData: object, options?: object): Promise<PlaceableObject>;

    /** @extends {Entity.updateEmbeddedEntity} */
    update(updateData: object, options?: object): Promise<PlaceableObject>;

    /** @extends {Entity.deleteEmbeddedEntity} */
    delete(createData: object, options?: object): Promise<PlaceableObject>;

    /**
     * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
     */
    protected _onCreate(): void;

    /**
     * Define additional steps taken when an existing placeable object of this type is updated with new data
     */
    protected _onUpdate(data: object): void;

    /**
     * Define additional steps taken when an existing placeable object of this type is deleted
     */
    protected _onDelete(): void;

    /* -------------------------------------------- */
    /*  Event Listeners and Handlers                */
    /* -------------------------------------------- */

    /**
     * Handle mouse-over events which trigger a hover
     */
    protected _onMouseOver(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Handle mouse-out events after a hover
     */
    protected _onMouseOut(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Default handling for mouse-move event during a PlaceableObject drag workflow
     * @param event	The mousemove event being handled
     */
    protected _onMouseMove(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Default handling for Placeable mouse-up event concluding a drag workflow
     */
    protected _onMouseUp(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Default handling for Placeable double left-click event
     */
    protected _onDoubleLeft(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Default handling for Placeable drag cancel through right-click
     */
    protected _OnDragCancel(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Default event-handling logic for a left-mouse click event on the PlaceableObject container
     */
    protected _onMouseDown(event: PIXI.interaction.InteractionEvent): boolean;

    /**
     * Default event-handling logic for a right-mouse click event on the PlaceableObject container
     */
    protected _onRightDown(event: PIXI.interaction.InteractionEvent): boolean;
}
