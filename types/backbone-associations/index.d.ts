// Type definitions for Backbone-associations 0.6
// Project: http://dhruvaray.github.io/backbone-associations
// Definitions by: Craig Brett <https://github.com/craigbrett17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Backbone from 'backbone';

declare module 'backbone' {
    export module Associations {
        /** Defines a 1:Many relationship type */
        export var Many: string;
        /** Defines a 1:1 relationship type */
        export var One: string;
        /** Defines a special relationship to itself */
        export var Self: string;

        // these seem to be used internally, but can't see a reason not to include them just in case
        export var SEPARATOR: string;
        export function getSeparator(): any;
        export function setSeparator(value: any): void;
        export var EVENTS_BUBBLE: boolean;
        export var EVENTS_WILDCARD: boolean;
        export var EVENTS_NC: boolean;

        interface IRelation {
            /** The type of model for this relationship */
            relatedModel: string | (new() => AssociatedModel);
            /** The key for this relationship on this model */
            key: string;
            // meh, no string enums in TS. Just have to trust the user not to be a fool
            /** The cardinality of this relationship. */
            type: string;
            /** Determines the type of collection used. If used, the relatedModel property is ignored */
            collectionType?: string | (new() => Backbone.Collection<any>);
            /** If set to true, then the attribute will not be serialized in toJSON() calls. Defaults to false */
            isTransient?: boolean;
            /** Specify remoteKey to serialize the key to a different key name in toJSON() calls. Useful in ROR nested-attributes like scenarios. */
            remoteKey?: string;
            /** the attributes to serialize when calling toJSON */
            serialize?: string[];
            /** A transformation function to convert the value before it is assigned to the key on the relatedModel */
            map?: (...args: any[]) => any;
        }

        /** A Backbone model with special provision for handling relations to other models */
        export class AssociatedModel extends Backbone.Model {
            /** Relations with their associated model */
            relations: IRelation[];
            _proxyCalls: any;
            /** Reverse association lookup for objects that contain this object */
            parents: any[];
            /** Cleans up any parent relations on other AssociatedModels */
            cleanup(): void;
        }
    }
    // copies of properties also put onto the Backbone scope
    /** Defines a 1:Many relationship type */
    export var Many: string;
    /** Defines a 1:1 relationship type */
    export var One: string;
    /** Defines a special relationship to itself */
    export var Self: string;

    // I'm sure this should be doable with imports or type aliases, but doesn't seem to work
    /** A Backbone model with special provision for handling relations to other models */
    export class AssociatedModel extends Backbone.Model {
        /** Relations with their associated model */
        relations: Associations.IRelation[];
        _proxyCalls: any;
        /** Reverse association lookup for objects that contain this object */
        parents: any[];
        /** Cleans up any parent relations on other AssociatedModels */
        cleanup(): void;
    }
}
