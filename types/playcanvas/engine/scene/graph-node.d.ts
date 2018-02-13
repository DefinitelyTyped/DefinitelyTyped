declare namespace pc {
    /**
     * @name pc.GraphNode
     * @class A hierarchical scene node.
     * @param {String} [name] The non-unique name of the graph node, default is "Untitled".
     * @property {String} name The non-unique name of a graph node.
     * @property {pc.Tags} tags Interface for tagging graph nodes. Tag based searches can be performed using the {@link pc.GraphNode#findByTag} function.
     */
    class GraphNode {
        constructor(name?: string)

        /**
         * @readonly
         * @name pc.GraphNode#right
         * @description The normalized local space X-axis vector of the graph node in world space.
         * @type pc.Vec3
         */
        readonly right: pc.Vec3;

        /**
         * @readonly
         * @name pc.GraphNode#up
         * @description The normalized local space Y-axis vector of the graph node in world space.
         * @type pc.Vec3
         */
        readonly up: pc.Vec3;

        /**
         * @readonly
         * @name pc.GraphNode#forward
         * @description The normalized local space negative Z-axis vector of the graph node in world space.
         * @type pc.Vec3
         */
        readonly forward: pc.Vec3;

        /**
         * @name pc.GraphNode#enabled
         * @type Boolean
         * @description Enable or disable a GraphNode. If one of the GraphNode's parents is disabled
         * there will be no other side effects. If all the parents are enabled then
         * the new value will activate / deactivate all the enabled children of the GraphNode.
         */
        enabled: boolean;

        /**
         * @readonly
         * @name pc.GraphNode#parent
         * @type pc.GraphNode
         * @description A read-only property to get a parent graph node
         */
        readonly parent: pc.GraphNode;

        /**
         * @readonly
         * @name pc.GraphNode#root
         * @type pc.GraphNode
         * @description A read-only property to get highest graph node from current node
         */
        readonly root: pc.GraphNode;

        /**
         * @readonly
         * @name pc.GraphNode#children
         * @type pc.GraphNode[]
         * @description A read-only property to get the children of this graph node.
         */
        readonly children: pc.GraphNode;

        /**
         * @function
         * @name pc.GraphNode#find
         * @description Search the graph for nodes that satisfy conditions.
         * @param {Function|String} attr This can either be a method or a string.
         * If it's a method it is executed for each descendant node, to test if node satisfies search logic.
         * Returning true from that method will include node into results.
         * If it's a string then it represents the name of a field or a method of the node.
         * If this is the name of a field then the value passed as the second argument will be checked for equality.
         * If this is the name of a function then the return value of the function will be checked for equality against the valued passed as the second argument to this function.
         * @param {Object} value If the first argument (attr) is a property name then this value will be checked against the value of the property.
         * @returns {pc.GraphNode[]} An array of GraphNodes
         * @example
         * // finds all nodes that have model component and have `door` in their lower cased name
         * var doors = house.find(function(node) {
         *     return node.model && node.name.toLowerCase().indexOf('door') !== -1;
         * });
         *
         * @example
         * // finds all nodes that have name equal to 'Test'
         * var entities = parent.find('name', 'Test');
         *
         */
        find(attr: String, value: any): pc.GraphNode[];
        find(attr: (node: pc.GraphNode) => boolean): pc.GraphNode[];

        /**
         * @function
         * @name pc.GraphNode#findOne
         * @description Depth first search the graph for nodes using supplied method to find first matching node.
         * @param {Function} fn Method which is executed for each descendant node, to test if node satisfies search logic. Returning true from that method will stop search and return that node.
         * @returns {pc.GraphNode} A single graph node.
         * @example
         * // find node that is called `head` and have model component
         * var head = player.find(function(node) {
         *     return node.model && node.name === 'head';
         * });
         */
        findOne(attr: (node: pc.GraphNode) => boolean): pc.GraphNode

        /**
         * @function
         * @name pc.GraphNode#findByTag
         * @description Return all graph nodes that satisfy the search query.
         * Query can be simply a string, or comma separated strings,
         * to have inclusive results of assets that match at least one query.
         * A query that consists of an array of tags can be used to match graph nodes that have each tag of array
         * @param {String} query Name of a tag or array of tags
         * @returns {pc.GraphNode[]} A list of all graph nodes that match the query
         * @example
         * var animals = node.findByTag("animal");
         * // returns all graph nodes that tagged by `animal`
         * @example
         * var birdsAndMammals = node.findByTag("bird", "mammal");
         * // returns all graph nodes that tagged by `bird` OR `mammal`
         * @example
         * var meatEatingMammals = node.findByTag([ "carnivore", "mammal" ]);
         * // returns all assets that tagged by `carnivore` AND `mammal`
         * @example
         * var meatEatingMammalsAndReptiles = node.findByTag([ "carnivore", "mammal" ], [ "carnivore", "reptile" ]);
         * // returns all assets that tagged by (`carnivore` AND `mammal`) OR (`carnivore` AND `reptile`)
         */
        findByTag(...args: Array<string | string[]>): pc.GraphNode[]

        /**
         * @function
         * @name pc.GraphNode#findByName
         * @description Get the first node found in the graph with the name. The search
         * is depth first.
         * @param {String} name The name of the graph.
         * @returns {pc.GraphNode} The first node to be found matching the supplied name.
         */
        findByName(name: string): pc.GraphNode;

        /**
         * @function
         * @name pc.GraphNode#findByPath
         * @description Get the first node found in the graph by its full path in the graph.
         * The full path has this form 'parent/child/sub-child'. The search is depth first.
         * @param {String} path The full path of the pc.GraphNode.
         * @returns {pc.GraphNode} The first node to be found matching the supplied path.
         * @example
         * var path = this.entity.findByPath('child/another_child');
         */
        findByPath(path: string): pc.GraphNode;

        /**
         * @function
         * @name  pc.GraphNode#getPath
         * @description Gets the path of the entity relative to the root of the hierarchy
         * @return {String} The path
         * @example
         * var path = this.entity.getPath();
         */
        getPath(): string;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#getRoot
         * @description Get the highest ancestor node from this graph node.
         * @return {pc.GraphNode} The root node of the hierarchy to which this node belongs.
         * @example
         * var root = this.entity.getRoot();
         */
        private getRoot(): pc.GraphNode;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#getParent
         * @description Get the parent GraphNode
         * @returns {pc.GraphNode} The parent node
         * @example
         * var parent = this.entity.getParent();
         */
        private getParent(): pc.GraphNode;

        /**
         * @function
         * @name pc.GraphNode#isDescendantOf
         * @description Check if node is descendant of another node.
         * @returns {Boolean} if node is descendant of another node
         * @example
         * if (roof.isDescendantOf(house)) {
         *     // roof is descendant of house entity
         * }
         */
        isDescendantOf(node: pc.GraphNode): boolean;

        /**
         * @function
         * @name pc.GraphNode#isAncestorOf
         * @description Check if node is ancestor for another node.
         * @returns {Boolean} if node is ancestor for another node
         * @example
         * if (body.isAncestorOf(foot)) {
         *     // foot is within body's hierarchy
         * }
         */
        isAncestorOf(node: pc.GraphNode): boolean;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#getChildren
         * @description Get the children of this graph node.
         * @returns {pc.GraphNode[]} The child array of this node.
         * @example
         * var children = this.entity.getChildren();
         * for (i = 0; i < children.length; i++) {
         * // children[i]
         * }
         */
        private getChildren(): pc.GraphNode[];

        /**
         * @function
         * @name pc.GraphNode#getEulerAngles
         * @description Get the world space rotation for the specified GraphNode in Euler angle
         * form. The order of the returned Euler angles is XYZ. The value returned by this function
         * should be considered read-only. In order to set the world-space rotation of the graph
         * node, use {@link pc.GraphNode#setEulerAngles}.
         * @returns {pc.Vec3} The world space rotation of the graph node in Euler angle form.
         * @example
         * var angles = this.entity.getEulerAngles(); // [0,0,0]
         * angles[1] = 180; // rotate the entity around Y by 180 degrees
         * this.entity.setEulerAngles(angles);
         */
        getEulerAngles(): pc.Vec3;

        /**
         * @function
         * @name pc.GraphNode#getLocalEulerAngles
         * @description Get the rotation in local space for the specified GraphNode. The rotation
         * is returned as euler angles in a 3-dimensional vector where the order is XYZ. The
         * returned vector should be considered read-only. To update the local rotation, use
         * {@link pc.GraphNode#setLocalEulerAngles}.
         * @returns {pc.Vec3} The local space rotation of the graph node as euler angles in XYZ order.
         * @example
         * var angles = this.entity.getLocalEulerAngles();
         * angles[1] = 180;
         * this.entity.setLocalEulerAngles(angles);
         */
        getLocalEulerAngles(): pc.Vec3;

        /**
         * @function
         * @name pc.GraphNode#getLocalPosition
         * @description Get the position in local space for the specified GraphNode. The position
         * is returned as a 3-dimensional vector. The returned vector should be considered read-only.
         * To update the local position, use {@link pc.GraphNode#setLocalPosition}.
         * @returns {pc.Vec3} The local space position of the graph node.
         * @example
         * var position = this.entity.getLocalPosition();
         * position[0] += 1; // move the entity 1 unit along x.
         * this.entity.setLocalPosition(position);
         */
        getLocalPosition(): pc.Vec3;

        /**
         * @function
         * @name pc.GraphNode#getLocalRotation
         * @description Get the rotation in local space for the specified GraphNode. The rotation
         * is returned as a quaternion. The returned quaternion should be considered read-only.
         * To update the local rotation, use {@link pc.GraphNode#setLocalRotation}.
         * @returns {pc.Quat} The local space rotation of the graph node as a quaternion.
         * @example
         * var rotation = this.entity.getLocalRotation();
         */
        getLocalRotation(): pc.Quat

        /**
         * @function
         * @name pc.GraphNode#getLocalScale
         * @description Get the scale in local space for the specified GraphNode. The scale
         * is returned as a 3-dimensional vector. The returned vector should be considered read-only.
         * To update the local scale, use {@link pc.GraphNode#setLocalScale}.
         * @returns {pc.Vec3} The local space scale of the graph node.
         * @example
         * var scale = this.entity.getLocalScale();
         * scale.x = 100;
         * this.entity.setLocalScale(scale);
         */
        getLocalScale(): pc.Vec3;

        /**
         * @function
         * @name pc.GraphNode#getLocalTransform
         * @description Get the local transform matrix for this graph node. This matrix
         * is the transform relative to the node's parent's world transformation matrix.
         * @returns {pc.Mat4} The node's local transformation matrix.
         * @example
         * var transform = this.entity.getLocalTransform();
         */
        getLocalTransform(): pc.Mat4;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#getName
         * @description Get the human-readable name for this graph node. Note the name
         * is not guaranteed to be unique. For Entities, this is the name that is set in the PlayCanvas Editor.
         * @returns {String} The name of the node.
         * @example
         * if (this.entity.getName() === "My Entity") {
         *     console.log("My Entity Found");
         * }
         */
        getName(): string;

        /**
         * @function
         * @name pc.GraphNode#getPosition
         * @description Get the world space position for the specified GraphNode. The
         * value returned by this function should be considered read-only. In order to set
         * the world-space position of the graph node, use {@link pc.GraphNode#setPosition}.
         * @returns {pc.Vec3} The world space position of the graph node.
         * @example
         * var position = this.entity.getPosition();
         * position.x = 10;
         * this.entity.setPosition(position);
         */
        getPosition(): pc.Vec3;

        /**
         * @function
         * @name pc.GraphNode#getRotation
         * @description Get the world space rotation for the specified GraphNode in quaternion
         * form. The value returned by this function should be considered read-only. In order
         * to set the world-space rotation of the graph node, use {@link pc.GraphNode#setRotation}.
         * @returns {pc.Quat} The world space rotation of the graph node as a quaternion.
         * @example
         * var rotation = this.entity.getRotation();
         */
        getRotation(): pc.Quat;

        /**
         * @function
         * @name pc.GraphNode#getWorldTransform
         * @description Get the world transformation matrix for this graph node.
         * @returns {pc.Mat4} The node's world transformation matrix.
         * @example
         * var transform = this.entity.getWorldTransform();
         */
        getWorldTransform(): pc.Mat4;

        /**
         * @function
         * @name pc.GraphNode#reparent
         * @description Remove graph node from current parent and add as child to new parent
         * @param {pc.GraphNode} parent New parent to attach graph node to
         * @param {Number} index (optional) The child index where the child node should be placed.
         */
        reparent(parent: pc.GraphNode, index?: number): void

        /**
         * @function
         * @name pc.GraphNode#setLocalEulerAngles
         * @description Sets the local space rotation of the specified graph node using euler angles.
         * Eulers are interpreted in XYZ order. Eulers must be specified in degrees.
         * @param {Number} x rotation around x-axis in degrees.
         * @param {Number} y rotation around y-axis in degrees.
         * @param {Number} z rotation around z-axis in degrees.
         * @example
         * this.entity.setLocalEulerAngles(0, 90, 0); // Set rotation of 90 degrees around y-axis.
         */
        setLocalEulerAngles(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalEulerAngles^2
         * @description Sets the local space rotation of the specified graph node using euler angles.
         * Eulers are interpreted in XYZ order. Eulers must be specified in degrees.
         * @param {pc.Vec3} e vector containing euler angles in XYZ order.
         * @example
         * var angles = new pc.Vec3(0, 90, 0);
         * this.entity.setLocalEulerAngles(angles); // Set rotation of 90 degrees around y-axis.
         */
        setLocalEulerAngles(e: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalPosition
         * @description Sets the local space position of the specified graph node.
         * @param {Number} x x-coordinate of local-space position.
         * @param {Number} y y-coordinate of local-space position.
         * @param {Number} z z-coordinate of local-space position.
         * @example
         * this.entity.setLocalPosition(0, 10, 0);
         */
        setLocalPosition(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalPosition^2
         * @description Sets the local space position of the specified graph node.
         * @param {pc.Vec3} pos position vector of graph node in local space.
         * @example
         * var pos = new pc.Vec3(0, 10, 0);
         * this.entity.setLocalPosition(pos)
         */
        setLocalPosition(pos: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalRotation
         * @description Sets the local space rotation of the specified graph node.
         * @param {pc.Quat} q quaternion representing rotation of graph node in local space.
         * var q = pc.Quat();
         * this.entity.setLocalRotation(q);
         */
        setLocalRotation(q: pc.Quat): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalRotation^2
         * @description Sets the local space rotation of the specified graph node.
         * @param {Number} x X component of local space quaternion rotation.
         * @param {Number} y Y component of local space quaternion rotation.
         * @param {Number} z Z component of local space quaternion rotation.
         * @param {Number} w W component of local space quaternion rotation.
         * @example
         * // Set to the identity quaternion
         * this.entity.setLocalRotation(0, 0, 0, 1);
         */
        setLocalRotation(x: number, y: number, z: number, w: number): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalScale
         * @description Sets the local space scale factor of the specified graph node.
         * @param {Number} x x-coordinate of local-space scale.
         * @param {Number} y y-coordinate of local-space scale.
         * @param {Number} z z-coordinate of local-space scale.
         * @example
         * this.entity.setLocalScale(10, 10, 10);
         */
        setLocalScale(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#setLocalScale^2
         * @description Sets the local space scale factor of the specified graph node.
         * @param {pc.Vec3} scale xyz-scale of graph node in local space.
         * @example
         * var scale = new pc.Vec3(10, 10, 10);
         * this.entity.setLocalScale(scale);
         */
        setLocalScale(scale: pc.Vec3): void;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#setName
         * @description Sets the non-unique name for this graph node.
         * @param {String} name The name for the node.
         * @example
         * this.entity.setName("My Entity");
         */
        private setName(name: string): void;

        /**
         * @function
         * @name pc.GraphNode#setPosition
         * @description Sets the world space position of the specified graph node.
         * @param {Number} x x-coordinate of world-space position.
         * @param {Number} y y-coordinate of world-space position.
         * @param {Number} z z-coordinate of world-space position.
         * @example
         * this.entity.setPosition(0, 10, 0);
         */
        setPosition(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#setPosition^2
         * @description Sets the world space position of the specified graph node.
         * @param {pc.Vec3} position world space position (xyz) of graph node.
         * @example
         * var position = new pc.Vec3(0, 10, 0);
         * this.entity.setPosition(position);
         */
        setPosition(position: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#setRotation
         * @description Sets the world space rotation of the specified graph node using
         * a quaternion.
         * @param {pc.Quat} rot World space rotation (xyz) of graph node.
         * @example
         * var q = new pc.Quat();
         * this.entity.setRotation(q);
         */
        setRotation(rot: pc.Quat): void;

        /**
         * @function
         * @name pc.GraphNode#setRotation^2
         * @description Sets the world space rotation of the specified graph node using
         * the 4 components of a quaternion.
         * @param {Number} x X component of world space quaternion rotation.
         * @param {Number} y Y component of world space quaternion rotation.
         * @param {Number} z Z component of world space quaternion rotation.
         * @param {Number} w W component of world space quaternion rotation.
         * @example
         * this.entity.setRotation(0, 0, 0, 1);
         */
        setRotation(x: number, y: number, z: number, w: number): void;

        /**
         * @function
         * @name pc.GraphNode#setEulerAngles
         * @description Sets the world space orientation of the specified graph node
         * using Euler angles. Angles are specified in degrees in XYZ order.
         * @param {Number} ex Rotation around world space X axis in degrees.
         * @param {Number} ey Rotation around world space Y axis in degrees.
         * @param {Number} ez Rotation around world space Z axis in degrees.
         * @example
         * this.entity.setEulerAngles(0, 90, 0);
         */
        setEulerAngles(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#setEulerAngles^2
         * @description Sets the world space orientation of the specified graph node
         * using Euler angles. Angles are specified in degrees in XYZ order.
         * @param {pc.Vec3} angles Euler angles in degrees (XYZ order).
         * @example
         * var angles = new pc.Vec3(0, 90, 0);
         * this.entity.setEulerAngles(angles);
         */
        setEulerAngles(angles: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#addChild
         * @description Add a new child to the child list and update the parent value of the child node
         * @param {pc.GraphNode} node The new child to add
         * @example
         * var e = new pc.Entity(app);
         * this.entity.addChild(e);
         */
        addChild(node: pc.GraphNode): void;

        /**
         * @function
         * @name pc.GraphNode#insertChild
         * @description Insert a new child to the child list at the specified index and update the parent value of the child node
         * @param {pc.GraphNode} node The new child to insert
         * @param {Number} index The index in the child list of the parent where the new node will be inserted
         * @example
         * var e = new pc.Entity(app);
         * this.entity.insertChild(e, 1);
         */
        insertChild(node: pc.GraphNode, index: number): void;

        /**
         * @function
         * @name pc.GraphNode#removeChild
         * @description Remove the node from the child list and update the parent value of the child.
         * @param {pc.GraphNode} node The node to remove
         * @example
         * var child = this.entity.children[0];
         * this.entity.removeChild(child);
         */
        removeChild(child: pc.GraphNode): void;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#addLabel
         * @description Add a string label to this graph node, labels can be used to group
         * and filter nodes. For example, the 'enemies' label could be applied to a group of NPCs
         * who are enemies.
         * @param {String} label The label to apply to this graph node.
         */
        private addLabel(label: string): void;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#getLabels
         * @description Get an array of all labels applied to this graph node.
         * @returns {String[]} An array of all labels.
         */
        private getLabels(): string;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#hasLabel
         * @description Test if a label has been applied to this graph node.
         * @param {String} label The label to test for.
         * @returns {Boolean} True if the label has been added to this GraphNode.
         *
         */
        private hasLabel(label: string): boolean;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#removeLabel
         * @description Remove label from this graph node.
         * @param {String} label The label to remove from this node.
         */
        private removeLabel(label: string): void;

        /**
         * @private
         * @deprecated
         * @function
         * @name pc.GraphNode#findByLabel
         * @description Find all graph nodes from the root and all descendants with the label.
         * @param {String} label The label to search for.
         * @param {pc.GraphNode[]} [results] An array to store the results in.
         * @returns {pc.GraphNode[]} The array passed in or a new array of results.
         */
        private findByLabel(label: string, results: pc.GraphNode[]): pc.GraphNode[];


        /**
         * @function
         * @name pc.GraphNode#syncHierarchy
         * @description Updates the world transformation matrices at this node and all of its descendants.
         */
        syncHierarchy(): void;

        /**
         * @function
         * @name pc.GraphNode#lookAt
         * @description Reorients the graph node so that the negative z axis points towards the target.
         * @param {pc.Vec3} target The world space coordinate to 'look at'.
         * @param {pc.Vec3} [up] The up vector for the look at transform. If left unspecified,
         * this is set to the world space y axis.
         * @example
         * var position = ... // get position from somewhere
         * // Look at a position, use default 'up' of [0,1,0]
         * this.entity.lookAt(position);
         * // Use a custom up value
         * this.entity.lookAt(position, this.entity.up);
         * // Specify position as elements
         * this.entity.lookAt(0, 0, 0);
         */
        lookAt(target: pc.Vec3, up?: pc.Vec3): void

        /**
         * @function
         * @name pc.GraphNode#lookAt^2
         * @description Reorients the graph node so that the negative z axis points towards the target.
         * @param {Number} tx X-component of the world space coordinate to 'look at'.
         * @param {Number} ty Y-component of the world space coordinate to 'look at'.
         * @param {Number} tz Z-component of the world space coordinate to 'look at'.
         * @param {Number} [ux] X-component of the up vector for the look at transform. If left unspecified,
         * this is set to the world space y axis.
         * @param {Number} [uy] Y-component of the up vector for the look at transform. If left unspecified,
         * this is set to the world space y axis.
         * @param {Number} [uz] Z-component of the up vector for the look at transform. If left unspecified,
         * this is set to the world space y axis.
         * @example
         * // Look at the world space origin, use default 'up' of [0,1,0]
         * this.entity.lookAt(0, 0, 0);
         * // Look at 10, 10, 10 with an inverted up value
         * this.entity.lookAt(10, 10, 10, 0, -1, 0);
         */
        lookAt(tx: number, ty: number, tz: number, ux: number, uy: number, uz: number): void
        lookAt(tx: number, ty: number, tz: number): void

        /**
         * @function
         * @name pc.GraphNode#translate
         * @description Translates the graph node in world space by the specified translation vector.
         * @param {Number} x x-component of the translation vector.
         * @param {Number} y y-component of the translation vector.
         * @param {Number} z z-component of the translation vector.
         * @example
         * this.entity.translate(10, 0, 0);
         */
        translate(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#translate^2
         * @description Translates the graph node in world space by the specified translation vector.
         * @param {pc.Vec3} translation The world space translation vector to apply.
         * @example
         * var t = new pc.Vec3(10, 0, 0);
         * this.entity.translate(t);
         */
        translate(translation: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#translateLocal
         * @description Translates the graph node in local space by the specified translation vector.
         * @param {Number} x x-component of the translation vector.
         * @param {Number} y y-component of the translation vector.
         * @param {Number} z z-component of the translation vector.
         * @example
         * this.entity.translateLocal(10, 0, 0);
         */
        translateLocal(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#translateLocal^2
         * @description Translates the graph node in local space by the specified translation vector.
         * @param {pc.Vec3} translation The local space translation vector to apply.
         * @example
         * var t = new pc.Vec3(10, 0, 0);
         * this.entity.translateLocal(t);
         */
        translateLocal(translation: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#rotate
         * @description Rotates the graph node in world space by the specified Euler angles.
         * Eulers are specified in degrees in XYZ order.
         * @param {Number} ex Rotation around world space X axis in degrees.
         * @param {Number} ey Rotation around world space Y axis in degrees.
         * @param {Number} ez Rotation around world space Z axis in degrees.
         * @example
         * this.entity.rotate(0, 90, 0);
         */
        rotate(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#rotate^2
         * @description Rotates the graph node in world space by the specified Euler angles.
         * Eulers are specified in degrees in XYZ order.
         * @param {pc.Vec3} rot World space rotation (xyz) of graph node.
         * @example
         * var r = new pc.Vec3(0, 90, 0);
         * this.entity.rotate(r);
         */
        rotate(rot: pc.Vec3): void;

        /**
         * @function
         * @name pc.GraphNode#rotateLocal
         * @description Rotates the graph node in local space by the specified Euler angles.
         * Eulers are specified in degrees in XYZ order.
         * @param {Number} ex Rotation around local space X axis in degrees.
         * @param {Number} ey Rotation around local space Y axis in degrees.
         * @param {Number} ez Rotation around local space Z axis in degrees.
         * @example
         * this.entity.rotateLocal(0, 90, 0);
         */
        rotateLocal(x: number, y: number, z: number): void;

        /**
         * @function
         * @name pc.GraphNode#rotateLocal^2
         * @description Rotates the graph node in local space by the specified Euler angles.
         * Eulers are specified in degrees in XYZ order.
         * @param {pc.Vec3} rot Local space rotation (xyz) of graph node.
         * @example
         * var r = new pc.Vec3(0, 90, 0);
         * this.entity.rotateLocal(r);
         */
        rotateLocal(rot: pc.Vec3): void;
    }
}
