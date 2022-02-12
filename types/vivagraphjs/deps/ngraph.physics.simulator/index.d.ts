export = physicsSimulator;
declare function physicsSimulator(settings: any): {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: any[];
    quadTree: any;
    /**
     * Array of springs, registered with current simulator
     *
     * Note: To add new spring, use addSpring() method. This property is only
     * exposed for testing/performance purposes.
     */
    springs: any[];
    /**
     * Returns settings with which current simulator was initialized
     */
    settings: any;
    /**
     * Performs one step of force simulation.
     *
     * @returns {boolean} true if system is considered stable; False otherwise.
     */
    step: () => boolean;
    /**
     * Adds body to the system
     *
     * @param {ngraph.physics.primitives.Body} body physical body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBody: (body: ngraph.physics.primitives.Body) => ngraph.physics.primitives.Body;
    /**
     * Adds body to the system at given position
     *
     * @param {Object} pos position of a body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBodyAt: (pos: Object) => ngraph.physics.primitives.Body;
    /**
     * Removes body from the system
     *
     * @param {ngraph.physics.primitives.Body} body to remove
     *
     * @returns {Boolean} true if body found and removed. falsy otherwise;
     */
    removeBody: (body: ngraph.physics.primitives.Body) => boolean;
    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: (body1: any, body2: any, springLength: any, springWeight: any, springCoefficient: any) => Object;
    /**
     * Returns amount of movement performed on last step() call
     */
    getTotalMovement: () => number;
    /**
     * Removes spring from the system
     *
     * @param {Object} spring to remove. Spring is an object returned by addSpring
     *
     * @returns {Boolean} true if spring found and removed. falsy otherwise;
     */
    removeSpring: (spring: Object) => boolean;
    getBestNewBodyPosition: (neighbors: any) => any;
    /**
     * Returns bounding box which covers all bodies
     */
    getBBox: () => any;
    invalidateBBox: () => void;
    gravity: (value: any) => any;
    theta: (value: any) => any;
};
