declare namespace rosie {
    interface IFactoryStatic {
        new<T = any>(): IFactory<T>;
        /**
         * Defines a factory by name and constructor function. Call #attr and #option
         * on the result to define the properties of this factory.
         *
         * @param {!string} name
         * @param {function(object): *=} constructor
         * @return {Factory}
         */
        define<T = any>(
            name: string,
            constructor?: ((...opts: any[]) => any) | (new<T>(...opts: any[]) => any),
        ): IFactory<T>;

        /**
         * Locates a factory by name and calls #build on it.
         *
         * @param {string} name
         * @param {object=} attributes
         * @param {object=} options
         * @return {*}
         */
        build<T>(name: string, attributes?: { [k in keyof T]?: T[k] }, options?: any): T;

        /**
         * Builds a collection of objects using the named factory.
         *
         * @param {string} name
         * @param {number} size
         * @param {object=} attributes
         * @param {object=} options
         * @return {Array.<*>}
         */
        buildList<T>(name: string, size: number, attributes?: { [k in keyof T]?: T[k] | boolean }, options?: any): T[];

        /**
         * Locates a factory by name and calls #attributes on it.
         *
         * @param {string} name
         * @param {object} attributes
         * @param {object} options
         * @return {object}
         */
        attributes(name: string, attributes: any, options?: any): any;

        /**
         * Resets any build state, such as sequences, to their original values.
         *
         * @return {void}
         */
        resetAll(): void;

        /**
         * Resets any build state, such as sequences, to their original values on a specific factory.
         *
         * @param {string} name
         * @return {void}
         */
        reset(name: string): void;
    }

    interface IFactory<T = any> {
        /**
         * Define an attribute on this factory. Attributes can optionally define a
         * default value, either as a value (e.g. a string or number) or as a builder
         * function. For example:
         *
         *   // no default value for age
         *   Factory.define('Person').attr('age')
         *
         *   // static default value for age
         *   Factory.define('Person').attr('age', 18)
         *
         *   // dynamic default value for age
         *   Factory.define('Person').attr('age', function() {
         *      return Math.random() * 100;
         *   })
         *
         * Attributes with dynamic default values can depend on options or other
         * attributes:
         *
         *   Factory.define('Person').attr('age', ['name'], function(name) {
         *     return name === 'Brian' ? 30 : 18;
         *   });
         *
         * By default if the consumer of your factory provides a value for an
         * attribute your builder function will not be called. You can override this
         * behavior by declaring that your attribute depends on itself:
         *
         *   Factory.define('Person').attr('spouse', ['spouse'], function(spouse) {
         *     return Factory.build('Person', spouse);
         *   });
         *
         * As in the example above, this can be a useful way to fill in
         * partially-specified child objects.
         *
         * @param {string} attr
         * @param {Array.<string>=} | any dependenciesOrValue
         * @param any
         * @return {Factory}
         */
        attr<K extends keyof T>(name: K, defaultValue: T[K]): IFactory<T>;
        attr<K extends keyof T>(name: K, generatorFunction: () => T[K]): IFactory<T>;
        attr<
            K extends keyof T,
            D1 extends keyof T,
            D2 extends keyof T,
            D3 extends keyof T,
            D4 extends keyof T,
            D5 extends keyof T,
        >(
            name: K,
            dependencies: [D1, D2, D3, D4, D5],
            generatorFunction: (value1: T[D1], value2: T[D2], value3: T[D3], value4: T[D4], value5: T[D5]) => T[K],
        ): IFactory<T>;
        attr<K extends keyof T, D1 extends keyof T, D2 extends keyof T, D3 extends keyof T, D4 extends keyof T>(
            name: K,
            dependencies: [D1, D2, D3, D4],
            generatorFunction: (value1: T[D1], value2: T[D2], value3: T[D3], value4: T[D4]) => T[K],
        ): IFactory<T>;
        attr<K extends keyof T, D1 extends keyof T, D2 extends keyof T, D3 extends keyof T>(
            name: K,
            dependencies: [D1, D2, D3],
            generatorFunction: (value1: T[D1], value2: T[D2], value3: T[D3]) => T[K],
        ): IFactory<T>;
        attr<K extends keyof T, D1 extends keyof T, D2 extends keyof T>(
            name: K,
            dependencies: [D1, D2],
            generatorFunction: (value1: T[D1], value2: T[D2]) => T[K],
        ): IFactory<T>;
        attr<K extends keyof T, D extends keyof T>(
            name: K,
            dependencies: D[],
            generatorFunction: (value: T[D]) => T[K],
        ): IFactory<T>;
        attr<K extends keyof T, D extends keyof T>(name: K, dependencies: D[], generatorFunction: any): IFactory<T>;
        attr<K extends keyof T>(
            name: K,
            dependencies: string[],
            generatorFunction: (...dependencies: any[]) => T[K],
        ): IFactory<T>;

        /**
         * Convenience function for defining a set of attributes on this object as
         * builder functions or static values. If you need to specify dependencies,
         * use #attr instead.
         *
         * For example:
         *
         *   Factory.define('Person').attrs({
         *     name: 'Michael',
         *     age: function() { return Math.random() * 100; }
         *   });
         *
         * @param {object} attributes
         * @return {Factory}
         */
        attrs<Keys extends keyof T>(attributes: { [K in Keys]: T[K] | ((opts?: any) => T[K]) }): IFactory<T>;

        /**
         * Define an option for this factory. Options are values that may inform
         * dynamic attribute behavior but are not included in objects built by the
         * factory. Like attributes, options may have dependencies. Unlike
         * attributes, options may only depend on other options.
         *
         *   Factory.define('Person')
         *     .option('includeRelationships', false)
         *     .attr(
         *       'spouse',
         *       ['spouse', 'includeRelationships'],
         *       function(spouse, includeRelationships) {
         *         return includeRelationships ?
         *           Factory.build('Person', spouse) :
         *           null;
         *       });
         *
         *   Factory.build('Person', null, { includeRelationships: true });
         *
         * Options may have either static or dynamic default values, just like
         * attributes. Options without default values must have a value specified
         * when building.
         *
         * @param {string} opt
         * @param {Array.<string>=} | any dependencies or value
         * @param {*=} value
         * @return {Factory}
         */
        option(name: string, dependenciesOrValue?: any | string[], value?: any): IFactory<T>;

        /**
         * Defines an attribute that, by default, simply has an auto-incrementing
         * numeric value starting at 1. You can provide your own builder function
         * that accepts the number of the sequence and returns whatever value you'd
         * like it to be.
         *
         * Sequence values are inherited such that a factory derived from another
         * with a sequence will share the state of that sequence and they will never
         * conflict.
         *
         *   Factory.define('Person').sequence('id');
         *
         * @param {string} attr
         * @param {Array.<string>=} | Function dependencies or builder
         * @param {function(number): *=} builder
         * @return {Factory}
         */
        sequence<K extends keyof T>(name: K, builder?: (i: number) => any): IFactory<T>;
        sequence<K extends keyof T, D extends keyof T>(
            name: K,
            dependencies: D[],
            builder: (i: number, ...args: any[]) => any,
        ): IFactory<T>;

        /**
         * Sets a post-processor callback that will receive built objects and the
         * options for the build just before they are returned from the #build
         * function.
         *
         * @param {function(object, ?object)} callback
         * @return {Factory}
         */
        after(functionArg: (obj: T, opts?: any) => void): IFactory<T>;

        /**
         * Sets the constructor for this factory to be another factory. This can be
         * used to create more specific sub-types of factories.
         *
         * @param {Factory} parentFactory
         * @return {Factory}
         */
        inherits(functionArg: (parentFactory: IFactory<T>) => void): IFactory<T>;

        /**
         * Builds a plain object containing values for each of the declared
         * attributes. The result of this is the same as the result when using #build
         * when there is no constructor registered.
         *
         * @param {object=} attributes
         * @param {object=} options
         * @return {object}
         */
        attributes(attributes?: { [k in keyof T]?: T[k] }, options?: any): T;

        /**
         * Generates values for all the registered options using the values given.
         *
         * @param {object} options
         * @return {object}
         */
        options(options: any): any;

        /**
         * Builds objects by getting values for all attributes and optionally passing
         * the result to a constructor function.
         *
         * @param {object=} attributes
         * @param {object=} options
         * @return {*}
         */
        build(attributes?: { [k in keyof T]?: T[k] }, options?: any): T;

        buildList(size: number, attributes?: { [k in keyof T]?: T[k] }, options?: any): T[];

        /**
         * Extends a given factory by copying over its attributes, options,
         * callbacks, and constructor. This can be useful when you want to make
         * different types which all share certain attributes.
         *
         * @param {string|Factory} name The factory to extend.
         * @return {Factory}
         */
        extend<K extends Partial<T>>(name: string | IFactory<K>): IFactory<T>;

        /**
         * Resets any build state, such as sequences, to their original values on this factory.
         *
         * @return {void}
         */
        reset(): void;
    }
}

declare var rosie: { Factory: rosie.IFactoryStatic };

export = rosie;
export as namespace Factory;
