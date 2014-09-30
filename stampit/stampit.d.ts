// Type definitions for stampit
// Project: https://github.com/ericelliott/stampit
// Definitions by: Vasyl Boroviak <https://github.com/koresar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var stampit: stampit.Stampit;

declare module stampit {
    interface Stampit {
        /**
         * Return a factory (akaStamp) function that will produce new objects using the
         * prototypes that are passed in or composed.
         * @param methods A map of method names and bodies for delegation.
         * @param state A map of property names and values to clone for each new object.
         * @param enclose A closure (function) used to create private data and privileged methods.
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
        /**
         * Just like calling stamp() invokes the stamp and returns a new object instance.
         * @param state Properties you wish to set on the new objects.
         * @param encloseArgs The remaining arguments are passed to all .enclose() functions.
         * WARNING Avoid using two different .enclose() functions that expect different arguments.
         * .enclose() functions that take arguments should not be considered safe to compose
         * with other .enclose() functions that also take arguments. Taking arguments with
         * an .enclose() function is an anti-pattern that should be avoided, when possible.
         * @return A new object composed of the Stamps and prototypes provided.
         */
        (state?:{}, ...encloseArgs:any[]): any;

        /**
         * Just like calling stamp(), stamp.create() invokes the stamp and returns a new instance.
         * @param state Properties you wish to set on the new objects.
         * @param encloseArgs The remaining arguments are passed to all .enclose() functions.
         * WARNING Avoid using two different .enclose() functions that expect different arguments.
         * .enclose() functions that take arguments should not be considered safe to compose
         * with other .enclose() functions that also take arguments. Taking arguments with
         * an .enclose() function is an anti-pattern that should be avoided, when possible.
         * @return A new object composed of the Stamps and prototypes provided.
         */
        create(state?:{}, ...encloseArgs:any[]): any;

        /**
         * An object map containing the fixed prototypes.
         */
        fixed: Fixed;

        /**
         * Add methods to the methods prototype. Chainable.
         * @param methods Object(s) containing map of method names and bodies for delegation.
         * @return Self.
         */
        methods(...methods:{}[]): Stamp;

        /**
         * Take n objects and add them to the state prototype. Changes `this` object. Chainable.
         * @param states Object(s) containing map of property names and values to clone for each new object.
         * @return Self.
         */
        state(...states:{}[]): Stamp;

        /**
         * Take n functions, an array of functions, or n objects and add the functions to the enclose prototype.
         * Functions passed into .enclose() are called any time an object is instantiated.
         * That happens when the stamp function is invoked, or when the .create() method is called.
         * Changes `this` object. Chainable.
         * @param functions Closures (functions) used to create private data and privileged methods.
         * @return Self.
         */
        enclose(...functions:{(...encloseArgs:any[]): void}[]): Stamp;

        /**
         * Take n functions, an array of functions, or n objects and add the functions to the enclose prototype.
         * Functions passed into .enclose() are called any time an object is instantiated.
         * That happens when the stamp function is invoked, or when the .create() method is called.
         * Changes `this` object. Chainable.
         * @param methods Function properties of these objects will be treated as closure functions.
         * @return Self.
         */
        enclose(...methods:{}[]): Stamp;

        /**
         * Take one or more Stamps and
         * combine them with `this` to produce and return a new Stamp.
         * Combining overrides properties with last-in priority.
         * NOT chainable.
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