declare namespace pc {

    /**
     * @name pc.Skeleton
     * @property {Boolean} looping Determines whether skeleton is looping its animation.
     * @class Represents a skeleton used to play animations.
     * @param {pc.GraphNode} graph The root pc.GraphNode of the skeleton.
     */
    class Skeleton {
        constructor(graph: pc.GraphNode)

        /**
         * @function
         * @name pc.Skeleton#addTime
         * @description Progresses the animation assigned to the specified skeleton by the
         * supplied time delta. If the delta takes the animation passed its end point, if
         * the skeleton is set to loop, the animation will continue from the beginning.
         * Otherwise, the animation's current time will remain at its duration (i.e. the
         * end).
         * @param {Number} delta The time in seconds to progress the skeleton's animation.
         * @author Will Eastcott
         */
        addTime(delta: number): void;

        /**
         * @function
         * @name pc.Skeleton#blend
         * @description Blends two skeletons together.
         * @param {pc.Skeleton} skel1 Skeleton holding the first pose to be blended.
         * @param {pc.Skeleton} skel2 Skeleton holding the second pose to be blended.
         * @param {Number} alpha The value controlling the interpolation in relation to the two input
         * skeletons. The value is in the range 0 to 1, 0 generating skel1, 1 generating skel2 and anything
         * in between generating a spherical interpolation between the two.
         * @author Will Eastcott
         */
        blend(skel1: pc.Skeleton, skel2: pc.Skeleton, alpha: number): void;

        /**
         * @name pc.Skeleton#animation
         * @type pc.Animation
         * @description Animation currently assigned to skeleton.
         */
        animation: pc.Animation;
        
        /**
         * @name pc.Skeleton#currentTime
         * @type Number
         * @description Current time of currently active animation in seconds.
         * This value is between zero and the duration of the animation.
         */
        currentTime: number;

        /**
         * @readonly
         * @name pc.Skeleton#numNodes
         * @type Number
         * @description Read-only property that returns number of nodes of a skeleton.
         */
        readonly numNodes: number;

        /**
         * @function
         * @name pc.Skeleton#setGraph
         * @description Links a skeleton to a node hierarchy. The nodes animated skeleton are
         * then subsequently used to drive the local transformation matrices of the node
         * hierarchy.
         * @param {pc.GraphNode} graph The root node of the graph that the skeleton is to drive.
         * @author Will Eastcott
         */
        setGraph(graph: pc.GraphNode): void;

        /**
         * @function
         * @name pc.Skeleton#updateGraph
         * @description Synchronizes the currently linked node hierarchy with the current state of the
         * skeleton. Internally, this function converts the interpolated keyframe at each node in the
         * skeleton into the local transformation matrix at each corresponding node in the linked node
         * hierarchy.
         * @author Will Eastcott
         */
        updateGraph(): void;
    }
}
