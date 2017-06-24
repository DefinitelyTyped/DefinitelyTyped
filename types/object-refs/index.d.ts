// Type definitions for object-refs 0.1.1
// Project: https://github.com/bpmn-io/object-refs
// Definitions by: Jan Steinbruecker <https://github.com/3fd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Refs;

declare class Refs {

    /**
     * Creates a new references object defining two inversly related
     * attribute descriptors a and b.
     * @param {Refs.AttributeDescriptor} a property descriptor
     * @param {Refs.AttributeDescriptor} b property descriptor
     **/
    constructor(a: Refs.AttributeDescriptor, b: Refs.AttributeDescriptor);

    /**
     * Binds one side of a bi-directional reference to a target object.
     * @param {*} target
     * @param {string|Refs.AttributeDescriptor} property
     */
    bind(target: any, property: string|Refs.AttributeDescriptor): void;

    ensureBound(target: any, property: string|Refs.AttributeDescriptor): void;

    ensureRefsCollection(target: any, property: Refs.AttributeDescriptor): any;

    set(target: any, property: string|Refs.AttributeDescriptor, value: any): void;

    unset(target: any, property: string|Refs.AttributeDescriptor, value: any): void;

}

declare namespace Refs {

    interface AttributeDescriptor {
        name: string;
        collection?: boolean;
        enumerable?: boolean;
    }

    namespace Collection {

        /** Extends a collection with Refs aware methods */
        function extend(collection: any[], refs: Refs, property: string|AttributeDescriptor, target: any): any;

        function isExtended(collection: any[]): boolean;

    }

}
