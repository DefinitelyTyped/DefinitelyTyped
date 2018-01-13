declare namespace pc {
    type ComponentTypes = 'animation' | 'audiolistner' | 'camera' | 'collision' |
        'element' | 'light' | 'model' | 'particlesystem' |
        'rigidbody' | 'screen' | 'script' | 'sound' | 'zone';

    /**
     * @name pc.Entity
     * @param {String} [name] The non-unique name of the entity, default is "Untitled".
     * @param {pc.Application} [app] The application the entity belongs to, default is the current application.
     * @class The Entity is the core primitive of a PlayCanvas game. Generally speaking an object in your game will consist of an {@link pc.Entity},
     * and a set of {@link pc.Component}s which are managed by their respective {@link pc.ComponentSystem}s. One of those components maybe a
     * {@link pc.ScriptComponent} which allows you to write custom code to attach to your Entity.
     * <p>
     * The Entity uniquely identifies the object and also provides a transform for position and orientation
     * which it inherits from {@link pc.GraphNode} so can be added into the scene graph.
     * The Component and ComponentSystem provide the logic to give an Entity a specific type of behavior. e.g. the ability to
     * render a model or play a sound. Components are specific to an instance of an Entity and are attached (e.g. `this.entity.model`)
     * ComponentSystems allow access to all Entities and Components and are attached to the {@link pc.Application}.
     * </p>
     *
     * @example
     * var app = ... // Get the pc.Application
     *
     * var entity = new pc.Entity();
     *
     * // Add a Component to the Entity
     * entity.addComponent("camera", {
     *   fov: 45,
     *   nearClip: 1,
     *   farClip: 10000
     * });
     *
     * // Add the Entity into the scene graph
     * app.root.addChild(entity);
     *
     * // Move the entity
     * entity.translate(10, 0, 0);
     *
     * // Or translate it by setting it's position directly
     * var p = entity.getPosition();
     * entity.setPosition(p.x + 10, p.y, p.z);
     *
     * // Change the entity's rotation in local space
     * var e = entity.getLocalEulerAngles();
     * entity.setLocalEulerAngles(e.x, e.y + 90, e.z);
     *
     * // Or use rotateLocal
     * entity.rotateLocal(0, 90, 0);
     *
     * @extends pc.GraphNode
     */
    class Entity extends pc.GraphNode {

        constructor(name?: string, app?: pc.Application)
        constructor(app?: pc.Application)

        /**
         * @function
         * @name pc.Entity#addComponent
         * @description Create a new component and add it to the entity.
         * Use this to add functionality to the entity like rendering a model, playing sounds and so on.
         * @param {String} type The name of the component to add. Valid strings are:
         * <ul>
         *   <li>"animation" - see {@link pc.AnimationComponent}</li>
         *   <li>"audiolistener" - see {@link pc.AudioListenerComponent}</li>
         *   <li>"camera" - see {@link pc.CameraComponent}</li>
         *   <li>"collision" - see {@link pc.CollisionComponent}</li>
         *   <li>"element" - see {@link pc.ElementComponent}</li>
         *   <li>"light" - see {@link pc.LightComponent}</li>
         *   <li>"model" - see {@link pc.ModelComponent}</li>
         *   <li>"particlesystem" - see {@link pc.ParticleSystemComponent}</li>
         *   <li>"rigidbody" - see {@link pc.RigidBodyComponent}</li>
         *   <li>"screen" - see {@link pc.ScreenComponent}</li>
         *   <li>"script" - see {@link pc.ScriptComponent}</li>
         *   <li>"sound" - see {@link pc.SoundComponent}</li>
         *   <li>"zone" - see {@link pc.ZoneComponent}</li>
         * </ul>
         * @param {Object} data The initialization data for the specific component type. Refer to each
         * specific component's API reference page for details on valid values for this parameter.
         * @returns {pc.Component} The new Component that was attached to the entity
         * @example
         * var entity = new pc.Entity();
         * entity.addComponent("light"); // Add a light component with default properties
         * entity.addComponent("camera", { // Add a camera component with some specified properties
         *   fov: 45,
         *   clearColor: new pc.Color(1,0,0),
         * });
         */
        addComponent(type: pc.ComponentTypes, data?: any): pc.Component;

        /**
         * @function
         * @name pc.Entity#removeComponent
         * @description Remove a component from the Entity.
         * @param {String} type The name of the Component type
         * @example
         * var entity = new pc.Entity();
         * entity.addComponent("light"); // add new light component
         * //...
         * entity.removeComponent("light"); // remove light component
         */
        removeComponent(type: pc.ComponentTypes): void;

        /**
         * @private
         * @function
         * @name pc.Entity#getGuid
         * @description Get the GUID value for this Entity
         * @returns {String} The GUID of the Entity
         */
        private getGuid(): string;

        /**
         * @private
         * @function
         * @name pc.Entity#setGuid
         * @description Set the GUID value for this Entity.
         *
         * N.B. It is unlikely that you should need to change the GUID value of an Entity at run-time. Doing so will corrupt the graph this Entity is in.
         * @param {String} guid The GUID to assign to the Entity
         */
        setGuid(guid: string): void;

        /**
         * @private
         * @function
         * @name pc.Entity#setRequest
         * @description Used during resource loading to ensure that child resources of Entities are tracked
         * @param {ResourceRequest} request The request being used to load this entity
         */
        private setRequest(request: any): void;

        /**
         * @private
         * @function
         * @name pc.Entity#getRequest
         * @description Get the Request that is being used to load this Entity
         * @returns {ResourceRequest} The Request
         */
        private getRequest(): any;

        /**
         * @function
         * @name pc.Entity#findByGuid
         * @description Find a descendant of this Entity with the GUID
         * @returns {pc.Entity} The Entity with the GUID or null
         */
        findByGuid(guid: string): pc.Entity;

        /**
        * @function
        * @name pc.Entity#destroy
        * @description Remove all components from the Entity and detach it from the Entity hierarchy. Then recursively destroy all ancestor Entities
        * @example
        * var firstChild = this.entity.children[0];
        * firstChild.destroy(); // delete child, all components and remove from hierarchy
        */
        destroy(): void;

        /**
        * @function
        * @name pc.Entity#clone
        * @description Create a deep copy of the Entity. Duplicate the full Entity hierarchy, with all Components and all descendants.
        * Note, this Entity is not in the hierarchy and must be added manually.
        * @returns {pc.Entity} A new Entity which is a deep copy of the original.
        * @example
        *   var e = this.entity.clone(); // Clone Entity
        *   this.entity.parent.addChild(e); // Add it as a sibling to the original
        */
        clone(): pc.Entity;
                

        // Possible attached components
        animation: pc.AnimationComponent;
        audiolistner: pc.AudioListenerComponent;
        camera: pc.CameraComponent;
        collision: pc.CollisionComponent;
        element: pc.ElementComponent;
        light: pc.LightComponent;
        model: pc.ModelComponent;
        particlesystem: pc.ParticleSystemComponent;
        rigidbody: pc.RigidBodyComponent;
        screen: pc.ScreenComponent;
        script: pc.ScriptComponent;
        sound: pc.SoundComponent;
        zone: pc.ZoneComponent;

    }
}