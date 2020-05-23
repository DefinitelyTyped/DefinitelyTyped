declare interface RulerData {
    class: string;
    name: string;
    waypoints: [PIXI.Point];
    destination: PIXI.Point;
    _state: number;
}

/**
 * The Ruler - used to measure distances and trigger movements
 * @param {User} The User for whom to construct the Ruler instance
 * @type {PIXI.Container}
 */
declare class Ruler extends PIXI.Container {
    constructor(user: User, color?: number);

    /**
     * Record the User which this Ruler references
     * @type {User}
     */
    public user: User;

    /**
     * The ruler name - used to differentiate between players
     * @type {String}
     */
    public name: string;

    /**
     * The ruler color - by default the color of the active user
     * @type {number|null}
     */
    public color: number | null;

    /**
     * This Array tracks individual waypoints along the ruler's measured path.
     * The first waypoint is always the origin of the route.
     * @type {Array<PIXI.Point>}
     */
    public waypoints: Array<PIXI.Point>;

    /**
     * The current destination point at the end of the measurement
     * @type {PIXI.Point}
     */
    public destination: PIXI.Point;

    /**
     * The Ruler element is a Graphics instance which draws the line and points of the measured path
     * @type {PIXI.Graphics}
     */
    public ruler: PIXI.Graphics;

    /**
     * The Labels element is a Container of Text elements which label the measured path
     * @type {PIXI.Container}
     */
    public labels: PIXI.Container;

    /**
     * Track the current measurement state
     * @type {Number}
     */
    public _state: number;

    /**
     * Is the Ruler being actively used to measure distance?
     * @return {Boolean}
     */
    public readonly active: boolean;

    /**
     * Measure the distance between two points and render the ruler UI to illustrate it
     * @param {PIXI.Point} destination The destination point to which to measure
     */
    public measure(destination: PIXI.Point, gridSpaces?: boolean): void;

    /**
     * Get the text label for a segment of the measured path
     * @param {Ray} ray
     * @param {number} segmentDistance
     * @param {number} totalDistance
     * @param {boolean} isTotal
     * @return {string}
     * @private
     */
    public _getSegmentLabel(ray: Ray, segmentDistance: number, totalDistance: number, isTotal: boolean): string;

    /**
     * Highlight the measurement required to complete the move in the minimum number of discrete spaces
     * @param {Ray} ray
     * @private
     */
    public _highlightMeasurement(ray: Ray): void;

    /**
     * Determine whether a SPACE keypress event entails a legal token movement along a measured ruler
     *
     * @return {Boolean}    An indicator for whether a token was successfully moved or not. If True the event should be
     *                      prevented from propagating further, if False it should move on to other handlers.
     *
     * @todo confirm with Atropos whether this should return void or not. The JSDoc says it returns a boolean,
     * but the code doesn't return anything.
     */
    public moveToken(): void;

    /**
     * A helper method to return an Array of Ray objects constructed from the waypoints of the measurement
     * @param {Array<PIXI.Point>} waypoints   An Array of waypoint {x, y} Objects
     * @param {PIXI.Point} destination        An optional destination point to append to the existing waypoints
     * @return {Array.<Ray>}                  An Array of Ray objects which represent the segemnts of the waypoint path
     * @private
     */
    public _getRaysFromWaypoints(waypoints: [PIXI.Point], destination: PIXI.Point): [Ray];

    /**
     * Acquire a Token, if any, which is eligible to perform a movement based on the starting point of the Ruler
     * @return {Token}
     * @private
     */
    public _getMovementToken(): Token;

    /**
     * Clear display of the current Ruler
     */
    public clear(): void;

    /**
     * General handler for mouse-down events which should affect the Ruler in some way
     * This event delegates to more specialized handlers depending on where we are in the measurement workflow
     * @param event
     * @private
     */
    public _onMouseDown(event: Event): void;

    /**
     * General handler for mouse-move events which affect Ruler measurement
     * This event delegates to more specialized handlers depending on where we are in the measurement workflow
     * @param event
     * @private
     */
    public _onMouseMove(event: Event): void;

    /**
     * Handle the beginning of a new Ruler measurement event
     * @param {PIXI.interaction.InteractionEvent} event
     * @private
     */
    public _onStartMeasurement(event: PIXI.interaction.InteractionEvent): void;

    /**
     * Handle the addition of a new waypoint in the Ruler measurement path
     * @param {PIXI.interaction.InteractionEvent} event
     * @private
     */
    public _onAddWaypoint(event: PIXI.interaction.InteractionEvent): void;

    /**
     * Handle the removal of a waypoint in the Ruler measurement path
     * @param {PIXI.interaction.InteractionEvent} event
     * @private
     */
    public _onCancelWaypoint(event: PIXI.interaction.InteractionEvent): void;

    /**
     * Handle the conclusion of a Ruler measurement workflow
     * @param {PIXI.interaction.InteractionEvent} event
     * @private
     */
    public _onEndMeasurement(event: PIXI.interaction.InteractionEvent): void;

    public toJSON(): RulerData;

    /**
     * Update a Ruler instance using data provided through the cursor activity socket
     * @param {Object} data   Ruler data with which to update the display
     */
    public update(data: RulerData): void;
}
