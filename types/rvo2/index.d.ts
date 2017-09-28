// Type definitions for rvo2
// Project: https://github.com/TNOCS/rvo2
// Definitions by: Erik Vullings <https://github.com/erikvullings>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace rvo2 {

	class Line {
		/**
		 * A point on the directed line.
		 */
		point: Vector2;

		/**
		 * The direction of the directed line.
		 */
		direction: Vector2;
	}

  /**
   * The Agent class has no public members or methods.
   *
   * @class Agent
   */
	class Agent { }

  /**
   * The KdTree class has no public members or methods.
   *
   * @class KdTree
   */
	class KdTree { }

  /**
   * The Obstacle class has no public members or methods.
   *
   * @class Obstacle
   */
	class Obstacle { }

  /**
   * A simple two dimensional vector with an x and y position.
   *
   * @class Vector2
   */
	class Vector2 {
    /**
     * Creates an instance of Vector2.
     *
     * @param {number} x
     * @param {number} y
     *
     * @memberOf Vector2
     */
		constructor(x: number, y: number);

    /**
     * Returns the x position.
     *
     * @returns {number}
     *
     * @memberOf Vector2
     */
		x(): number;
    /**
     * Returns the y position.
     *
     * @returns {number}
     *
     * @memberOf Vector2
     */
		y(): number;
    /**
     * Add two vectors.
     *
     * @param {Vector2} v
     * @returns {Vector2}
     *
     * @memberOf Vector2
     */
		add(v: Vector2): Vector2;
    /**
     * Subtract two vectors.
     *
     * @param {Vector2} v
     * @returns {Vector2}
     *
     * @memberOf Vector2
     */
		sub(v: Vector2): Vector2;
    /**
     * Multiplies the vector by a scalar.
     *
     * @param {number} s
     * @returns {Vector2}
     *
     * @memberOf Vector2
     */
		mul(s: number): Vector2;
	}

  /**
   * An array of Vector2 vectors.
   *
   * @class vectorvector
   */
	class vectorvector {
		constructor(size?: number);

		[index: number]: Vector2;
	}

  /**
   * Simulation engine.
   *
   * @class sim
   */
	class RVOSimulator {
		constructor();

		/**
		 * Constructs a simulator instance and sets the default
		 * properties for any new agent that is added.
     *
		 * @param {number} timeStep    The time step of the simulation.
		 *                             Must be positive.
		 * @param {number} neighborDist    The default maximum distance (center point
		 *                             to center point) to other agents a new agent
		 *                             takes into account in the navigation. The
		 *                             larger this number, the longer he running
		 *                             time of the simulation. If the number is too
		 *                             low, the simulation will not be safe. Must be
		 *                             non-negative.
		 * @param {number} maxNeighbors    The default maximum number of other agents a
		 *                             new agent takes into account in the
		 *                             navigation. The larger this number, the
		 *                             longer the running time of the simulation.
		 *                             If the number is too low, the simulation
		 *                             will not be safe.
		 * @param {number} timeHorizon The default minimal amount of time for which
		 *                             a new agent's velocities that are computed
		 *                             by the simulation are safe with respect to
		 *                             other agents. The larger this number, the
		 *                             sooner an agent will respond to the presence
		 *                             of other agents, but the less freedom the
		 *                             agent has in choosing its velocities.
		 *                             Must be positive.
		 * @param {number} timeHorizonObst The default minimal amount of time for which
		 *                             a new agent's velocities that are computed
		 *                             by the simulation are safe with respect to
		 *                             obstacles. The larger this number, the
		 *                             sooner an agent will respond to the presence
		 *                             of obstacles, but the less freedom the agent
		 *                             has in choosing its velocities.
		 *                             Must be positive.
		 * @param {number} radius      The default radius of a new agent.
		 *                             Must be non-negative.
		 * @param {number} maxSpeed    The default maximum speed of a new agent.
		 *                             Must be non-negative.
		 * @param {Vector2} velocity   The default initial two-dimensional linear
		 *                             velocity of a new agent (optional).
		 */
		constructor(timeStep: number, neighborDist: number, maxNeighbors: number,
			timeHorizon: number, timeHorizonObst: number, radius: number,
			maxSpeed: number, velocity?: Vector2);

    /**
     * Sets the time step of the simulation.
     *
     * @param {number} timeStep    The time step of the simulation.
		 *                             Must be positive.
     *
     * @memberOf sim
     */
		setTimeStep(timeStep: number): void;

    /**
     * Lets the simulator perform a simulation step and updates the
		 * two-dimensional position and two-dimensional velocity of each agent.
     *
     * @memberOf RVOSimulator
     */
		doStep(): void;

		/**
		 * Sets the default properties for any new agent that is added.
		 * @param {number} neighborDist   The default maximum distance (center point
		 *                             to center point) to other agents a new agent
		 *                             takes into account in the navigation. The
		 *                             larger this number, the longer he running
		 *                             time of the simulation. If the number is too
		 *                             low, the simulation will not be safe.
		 *                             Must be non-negative.
		 * @param {number} maxNeighbors    The default maximum number of other agents a
		 *                             new agent takes into account in the
		 *                             navigation. The larger this number, the
		 *                             longer the running time of the simulation.
		 *                             If the number is too low, the simulation
		 *                             will not be safe.
		 * @param {number} timeHorizon     The default minimal amount of time for which
		 *                             a new agent's velocities that are computed
		 *                             by the simulation are safe with respect to
		 *                             other agents. The larger this number, the
		 *                             sooner an agent will respond to the presence
		 *                             of other agents, but the less freedom the
		 *                             agent has in choosing its velocities.
		 *                             Must be positive.
		 * @param {number} timeHorizonObst The default minimal amount of time for which
		 *                             a new agent's velocities that are computed
		 *                             by the simulation are safe with respect to
		 *                             obstacles. The larger this number, the
		 *                             sooner an agent will respond to the presence
		 *                             of obstacles, but the less freedom the agent
		 *                             has in choosing its velocities.
		 *                             Must be positive.
		 * @param {number} radius      The default radius of a new agent.
		 *                             Must be non-negative.
		 * @param {number} maxSpeed    The default maximum speed of a new agent.
		 *                             Must be non-negative.
		 * @param {Vector2} velocity   The default initial two-dimensional linear
		 *                             velocity of a new agent (optional).
		 */
		setAgentDefaults(neighborDist: number, maxNeighbors: number, timeHorizon: number, timeHorizonObst: number, radius: number, maxSpeed: number, velocity?: Vector2): void;
    /**
     * Adds a new agent with default properties to the simulation.
     *
     * @param {Vector2} position  The two-dimensional starting position of this agent.

     * @returns {number}     The number of the agent, or RVO::RVO_ERROR when the  *                            agent defaults have not been set.
     *
     * @membeim
     */
		addAgent(position: Vector2): number;

		/**
		 * Adds a new agent to the simulation.
     *
		 * @param {Vector2} position   The two-dimensional starting position of
		 *                             this agent.
		 * @param {number} neighborDist    The maximum distance (center point to
		 *                             center point) to other agents this agent
		 *                             takes into account in the navigation. The
		 *                             larger this number, the longer the running
		 *                             of the simulation. If the number is too
		 *                             low, the simulation will not be safe.
		 *                             Must be non-negative.
		 * @param {number} maxNeighbors    The maximum number of other agents this
		 *                             agent takes into account in the navigation.
		 *                             The larger this number, the longer the
		 *                             running time of the simulation. If the
		 *                             number is too low, the simulation will not
		 *                             safe.
		 * @param {number} timeHorizon     The minimal amount of time for which this
		 *                             agent's velocities that are computed by the
		 *                             simulation are safe with respect to other
		 *                             agents. The larger this number, the sooner
		 *                             this agent will respond to the presence of
		 *                             other agents, but the less freedom this
		 *                             agent has in choosing its velocities.
		 *                             be positive.
		 * @param {number} timeHorizonObst The minimal amount of time for which this
		 *                             agevelocities that are computed by the
		 *                             simulation are safe with respect to
		 *                             obst. The larger this number, the
		 *                             sooner this agent will respond to the
		 *                             presence of obstacles, but the less freedom
		 *                             this agent has in choosing its velocities.
		 *                             Must be positive.
		 * @param {number} radius      The radius of this agent.
		 *                             Must be non-negative.
		 * @param {number} maxSpeed    The maximum speed of this agent.
		 *                             Must be non-negative.
		 * @param {number} velocity    The initial two-dimensional linear velocity
		 *                             of this agent (optional).
		 * @returns {number} The number of the agent.
		 */
		addAgent(position: Vector2, neighborDist: number, maxNeighbors: number,
			timeHorizon: number, timeHorizonObst: number, radius: number,
			maxSpeed: number, velocity: Vector2): number;

		/**
		 * Adds a new obstacle to the simulation.
     *
		 * To add a "negative" obstacle, e.g. a bounding polygon around
		 * the environment, the vertices should be listed in clockwise order.
     *
		 * @param {vectorvector} vertices List of the vertices of the polygonal
		 *             obstacle in counterclockwise order.
		 * @returns {number} The number of the first vertex of the obstacle,
		 *             or RVO::RVO_ERROR when the number of vertices is less than two.
		 */
		addObstacle(vertices: vectorvector): number;

    /**
     * Returns the position of agent at the specified index.
     *
     * @param {number} index      Index of the agent. Must be >= 0.
     * @returns {Vector2}    Position of the agent.
     *
     * @memberOf sim
     */
		getAgentPosition(index: number): Vector2;

		/**
		 * Sets the two-dimensional preferred velocity of a specified agent.
		 * @param {number} agentNo     The number of the agent whose two-dimensional
     *                             preferred velocity is to be modified.
		 * @param {Vector2} prefVelocity    The replacement of the two-dimensional
		 *                             preferred velocity.
		 */
		setAgentPrefVelocity(agentNo: number, prefVelocity: Vector2): void;

		/**
		 * Returns the specified agent neighbor of the specified agent.
     *
		 * @param {number} agentNo     The number of the agent whose agent
		 *                             neighbor is to be retrieved.
		 * @param {number} neighborNo  The number of the agent neighbor to be
		 *                             retrieved.
		 * @returns The number of the neighboring agent.
		 */
		getAgentAgentNeighbor(agentNo: number, neighborNo: number): number;

		/**
		 * Returns the maximum neighbor count of a specified agent.
     *
		 * @param {number} agentNo The number of the agent whose maximum neighbor count is
     *                         to be retrieved.
		 * @return {number} The present maximum neighbor count of the agent.
		 */
		getAgentMaxNeighbors(agentNo: number): number;

		/**
		 * Returns the maximum speed of a specified agent.
		 *
     * @param {number} agentNo The number of the agent whose maximum speed is to be retrieved.
		 * @return {number} The present maximum speed of the agent.
		 */
		getAgentMaxSpeed(agentNo: number): number;

		/**
		 * Returns the maximum neighbor distance of a specified agent.
		 * @param {number} agentNo The number of the agent whose maximum
		 *                         neighbor distance is to be retrieved.
		 * @return The present maximum neighbor distance of the agent.
		 */
		getAgentNeighborDist(agentNo: number): number;

		/**
		 * Returns the count of agent neighbors taken into account to
		 * compute the current velocity for the specified agent.
     *
		 * @param {number} agentNo The number of the agent whose count of agent
		 *                         neighbors is to be retrieved.
		 * @return {number} The count of agent neighbors taken into account to compute
		 *             the current velocity for the specified agent.
		 */
		getAgentNumAgentNeighbors(agentNo: number): number;

		/**
		 * Returns the count of obstacle neighbors taken into account
		 * to compute the current velocity for the specified agent.
     *
		 * @param {number} agentNo The number of the agent whose count of
		 *                         obstacle neighbors is to be retrieved.
		 * @return {number} The count of obstacle neighbors taken into account to
		 *             compute the current velocity for the specified agent.
		 */
		getAgentNumObstacleNeighbors(agentNo: number): number;


		/**
		 * Returns the count of ORCAconstraints used to compute
     *
		 * the current velocity for the specified agent.
     *
		 * @param {number} agentNo The number of the agent whose count of ORCA
		 *                        constraints is to be retrieved.
     *
		 * @return {number} The count of ORCAconstraints used to compute the current
     *
		 *             velocity for the specified agent.
		 */
		getAgentNumORCALines(agentNo: number): number;

		/**
		 * Returns the specified obstacle neighbor of the specified agent.
     *
		 * @param {number} agentNo The number of the agent whose obstacle
		 *                         neighbor is to be retrieved.
		 * @param {number} neighborNo The number of the obstacle neighbor to be
		 *                            retrieved.
		 * @return {number} The number of the first vertex of the neighboring obstacle edge.
		 */
		getAgentObstacleNeighbor(agentNo: number, neighborNo: number): number;

		/**
		 * Returns the specified ORCA constraint of the specified agent.
     *
		 * The halfplane to the left of the line is the region of
		 * permissible velocities with respect to the specified
		 * ORCAconstraint.
     *
		 * @param {number} agentNo The number of the agent whose ORCA constraint is to be retrieved.
     *
		 * @param {number} lineNo The number of the ORCAconstraint to be retrieved.
		 * @return {number} A line representing the specified ORCAconstraint.
     *
     *
		 */
		getAgentORCALine(agentNo: number, lineNo: number): Line;

		/**
		 * Returns the two-dimensional position of a specified
		 *             agent.
		 * @param {number} agentNo The number of the agent whose two-dimensional position
     *                         is to be retrieved.
		 * @return {number} The present two-dimensional position of the (center of the) agent.
		 */
		getAgentPosition(agentNo: number): Vector2;

		/**
		 * Returns the two-dimensional preferred velocity of a
		 *             specified agent.
		 * @param {number} agentNo  The number of the agent whose two-dimensional
     *             preferred velocity is to be retrieved.
		 * @return {number} The present two-dimensional preferred velocity of the agent.
		 */
		getAgentPrefVelocity(agentNo: number): Vector2;

		/**
		 * Returns the radius of a specified agent.
		 * @param {number} agentNo The number of the agent whose radius is to be retrieved.
		 * @return {number} The present radius of the agent.
		 */
		getAgentRadius(agentNo: number): number;

		/**
		 * Returns the time horizon of a specified agent.
		 * @param {number} agentNo The number of the agent whose time horizon is to be retrieved.
		 * @return {number} The present time horizon of the agent.
		 */
		getAgentTimeHorizon(agentNo: number): number;

		/**
		 * Returns the time horizon with respect to obstacles of a specified agent.
     *
		 * @param {number} agentNo The number of the agent whose time horizon
		 *                         with respect to obstacles is to be retrieved.
		 * @return {number} The present time horizon with respect to obstacles of the
		 *             agent.
		 */
		getAgentTimeHorizonObst(agentNo: number): number;

		/**
		 * Returns the two-dimensional linear velocity of a
		 *             specified agent.
		 * @param {number} agentNo The number of the agent whose two-dimensional linear
     *                         velocity is to be retrieved.
		 * @return {Vector2} The present two-dimensional linear velocity of the agent.
		 */
		getAgentVelocity(agentNo: number): Vector2;

		/**
		 * Returns the global time of the simulation.
     *
		 * @return {number} The present global time of the simulation (zero initially).
		 */
		getGlobalTime(): number;

		/**
		 * Returns the count of agents in the simulation.
     *
		 * @return {number} The count of agents in the simulation.
		 */
		getNumAgents(): number;

		/**
		 * Returns the count of obstacle vertices in the simulation.
     *
		 * @return {number} The count of obstacle vertices in the simulation.
		 */
		getNumObstacleVertices(): number;

		/**
		 * Returns the two-dimensional position of a specified obstacle vertex.
		 * @param {number} vertexNo The number of the obstacle vertex to be retrieved.
		 * @return {Vector2} The two-dimensional position of the specified obstacle vertex.
		 */
		getObstacleVertex(vertexNo: number): Vector2;

		/**
		 * Returns the number of the obstacle vertex succeeding the specified obstacle vertex in its polygon.
     *
		 * @param {number} vertexNo The number of the obstacle vertex whose
		 *                          successor is to be retrieved.
		 * @return {number} The number of the obstacle vertex succeeding the specified
		 *             obstacle vertex in its polygon.
		 */
		getNextObstacleVertexNo(vertexNo: number): number;

		/**
		 * Returns the number of the obstacle vertex preceding the specified obstacle
     * vertex in its polygon.
     *
		 * @param {number} vertexNo The number of the obstacle vertex whose
		 *                          predecessor is to be retrieved.
		 * @return {number} The number of the obstacle vertex preceding the specified
		 *             obstacle vertex in its polygon.
		 */
		getPrevObstacleVertexNo(vertexNo: number): number;

		/**
		 * Returns the time step of the simulation.
     *
		 * @return {number} The present time step of the simulation.
		 */
		getTimeStep(): number;

		/**
		 * Processes the obstacles that have been added so that they are accounted for in
     * the simulation.
     *
		 * Obstacles added to the simulation after this function has
		 * been called are not accounted for in the simulation.
		 */
		processObstacles(): void;

		/**
		 * Performs a visibility query between the two specified points with respect to
     * the obstacles
     *
		 * @param {number} point1 The first point of the query.
		 * @param {number} point2 The second point of the query.
		 * @param {number} radius The minimal distance between the line
		 *                        connecting the two points and the obstacles
		 *                        in order for the points to be mutually
		 *                        visible (optional). Must be non-negative.
		 * @return {number} A boolean specifying whether the two points are mutually
		 * visible. Returns true when the obstacles have not been processed.
		 */
		queryVisibility(point1: Vector2, point2: Vector2, radius?: number): number;
	}

  /**
   * Computes the length of a specified two-dimensional vector.
   *
   * @param {Vector2} v   The two-dimensional vector whose length is to be computed.
   * @returns {number}    The length of the two-dimensional vector.
   *
   * @memberOf sim
   */
	function abs(v: Vector2): number;

	/**
	 * Computes the squared length of a specified two-dimensional vector.
	 * @param {Vector2} v The two-dimensional vector whose squared length is to be computed.
	 * @returns {number}  The squared length of the two-dimensional vector.
	 */
	function absSq(v: Vector2): number;

	/**
	 * Computes the determinant of a two-dimensional square matrix with
	 * rows consisting of the specified two-dimensional vectors.
	 * @param {Vector2} v1 The top row of the two-dimensional square matrix.
	 * @param {Vector2} v2 The bottom row of the two-dimensional square matrix.
	 * @returns {number} The determinant of the two-dimensional square matrix.
	 */
	function det(v1: Vector2, v2: Vector2): number;

	/**
 * Computes the normalization of the specified two-dimensional vector.
 * @param {Vector2} vector  The two-dimensional vector whose normalization
 *                          is to be computed.
 * returns {Vector2}   The normalization of the two-dimensional vector.
 */
	function normalize(vector: Vector2): Vector2

}

export = rvo2;