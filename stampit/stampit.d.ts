// Type definitions for stampit
// Project: https://github.com/ericelliott/stampit
// Definitions by: Vasyl Boroviak <https://github.com/koresar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var stampit: stampit.Stampit;

declare module stampit {
    interface Stampit {
        /**
         * Return a factory function that will produce new objects using the
         * prototypes that are passed in or composed.
         * @param methods Object containing methods which will be part of
         * the .prototype of a resulting object.
         * @param state Object which properties will be copied over to
         * a resulting object.
         * @param enclose Function properties of these objects will be run
         * once per each new object.
         * */
        (methods?:{}, state?:{}, enclose?:{(...encloseArgs:any[]): void}[]):stampit.Stamp;

        /**
         * Take two or more Stamps and combine them to produce a new Stamp.
         * Combining overrides properties with last-in priority.
         * @param stamps Stamps produced by stampit.
         * @return A new Stamp made of all the given.
         */
        compose(...stamps:Stamp[]): Stamp;

        /**
         * Take a destination object followed by one or more source objects,
         * and copy the source object properties to the destination object,
         * with last in priority overrides.
         * @param destination An object to copy properties to.
         * @param source Objects to copy properties from.
         * @return The destination object.
         */
        mixIn(destination:any, ...source:any[]): any;

        /**
         * Alias for mixIn.
         * Take a destination object followed by one or more source objects,
         * and copy the source object properties to the destination object,
         * with last in priority overrides.
         * @param destination An object to copy properties to.
         * @param source Objects to copy properties from.
         * @return The destination object.
         */
        extend(destination:any, ...source:any[]): any;

        /**
         * Check if an object is a Stamp.
         * @param obj An object to check.
         * @return true if the object is a Stamp; otherwise - false.
         */
        isStamp(obj:any): boolean;

        /**
         * Take an old-fashioned JS constructor and return a Stamp
         * that you can freely compose with other Stamps.
         * @param Constructor Old-fashioned constructor function.
         * @return A new Stamp based on the given constructor.
         */
        convertConstructor(Constructor:any): Stamp;
    }

    /**
     * A factory function that will produce new objects using the
     * prototypes that are passed in or composed.
     */
    export interface Stamp {
        (state?:{}, ...encloseArgs:any[]): any;

        /**
         *
         * @param state State passed
         * @param encloseArgs
         * @return A new object composed of the Stamps and prototypes provided.
         */
        create(state?:{}, ...encloseArgs:any[]): any;

        /**
         * An object map containing the fixed prototypes.
         */
        fixed: Fixed;

        /**
         * Add methods to the methods prototype. Chainable.
         * @param methods Object(s) containing methods which will be part of
         * the .prototype of a resulting object.
         * @return Self.
         */
        methods(...methods:{}[]): Stamp;

        /**
         * Add properties to the state prototype. Chainable.
         * @param states Object(s) which properties will be copied over to
         * a resulting object.
         * @return Self.
         */
        state(...states:{}[]): Stamp;

        /**
         * Add properties to the state prototype. Chainable.
         * @param functions These function will be run once per each new object.
         * @return Self.
         */
        enclose(...functions:{(...encloseArgs:any[]): void}[]): Stamp;

        /**
         * Add properties to the state prototype. Chainable.
         * @param methods Function properties of these objects will be run
         * once per each new object.
         * @return Self.
         */
        enclose(...methods:{}[]): Stamp;

        /**
         * Take one or more Stamps and
         * combine them with `this` to produce and return a new factory.
         * Combining overrides properties with last-in priority.
         * @param stamps Stampit factories, aka Stamps.
         * @return A new Stamp composed from arguments and `this`.
         */
        compose(...stamps:Stamp[]): Stamp;
    }

    /**
     * An object map containing the fixed prototypes.
     */
    interface Fixed {
        methods: {};
        state: {};
        enclose: {(...encloseArgs:any[]): void}[];
    }
}

declare module "stampit" {
    export = stampit;
}