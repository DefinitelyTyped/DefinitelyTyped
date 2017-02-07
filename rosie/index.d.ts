// Type definitions for rosie
// Project: https://github.com/rosiejs/rosie
// Definitions by: Abner Oliveira <https://github.com/abner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace rosie {
  interface IFactoryStatic {


    /**
     * Defines a factory by name and constructor function. Call #attr and #option
     * on the result to define the properties of this factory.
     *
     * @param {!string} name
     * @param {function(object): *=} constructor
     * @return {Factory}
     */
    define(name: String, constructor?: Function):  IFactory;

    /**
     * Locates a factory by name and calls #build on it.
     *
     * @param {string} name
     * @param {object=} attributes
     * @param {object=} options
     * @return {*}
     */
    build(name: string, attributes?: any, options?: Object): Object;

    /**
     * Builds a collection of objects using the named factory.
     *
     * @param {string} name
     * @param {number} size
     * @param {object=} attributes
     * @param {object=} options
     * @return {Array.<*>}
     */
    buildList(name: string, size: number, attributes?: any, options?: Object): Object[];

    /**
     * Locates a factory by name and calls #attributes on it.
     *
     * @param {string} name
     * @param {object} attributes
     * @param {object} options
     * @return {object}
     */
    attributes(name: string, attributes: Object, options?: Object): Object;
  }

  interface IFactory {
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
    attr(name: string, dependenciesOrValue: any | string[], value?: any): IFactory;

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
    option(name: string, dependenciesOrValue?: any | string[], value?: any): IFactory;

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
    sequence(name: string, dependenciesOrBuilder?: Function | string[], builder?: Function) : IFactory;

    /**
     * Sets a post-processor callback that will receive built objects and the
     * options for the build just before they are returned from the #build
     * function.
     *
     * @param {function(object, ?object)} callback
     * @return {Factory}
     */
    after(functionArg: Function): IFactory;

    /**
     * Sets the constructor for this factory to be another factory. This can be
     * used to create more specific sub-types of factories.
     *
     * @param {Factory} parentFactory
     * @return {Factory}
     */
    inherits(functionArg: Function): IFactory;

    /**
     * Builds a plain object containing values for each of the declared
     * attributes. The result of this is the same as the result when using #build
     * when there is no constructor registered.
     *
     * @param {object=} attributes
     * @param {object=} options
     * @return {object}
     */
    attributes(attributes:Object, options: Object): Object;

    /**
     * Generates values for all the registered options using the values given.
     *
     * @private
     * @param {object} options
     * @return {object}
     */
    options(options: Object): Object;

    /**
     * Builds objects by getting values for all attributes and optionally passing
     * the result to a constructor function.
     *
     * @param {object=} attributes
     * @param {object=} options
     * @return {*}
     */
    build(attributes: Object, options: Object): Object;

    buildList(size: number, attributes: Object, options: Object): Object[];

    /**
     * Extends a given factory by copying over its attributes, options,
     * callbacks, and constructor. This can be useful when you want to make
     * different types which all share certain attributes.
     *
     * @param {string|Factory} name The factory to extend.
     * @return {Factory}
     */
    extend(name: String | IFactory): IFactory;
  }

}

declare var rosie: { Factory: rosie.IFactoryStatic };

export = rosie;
export as namespace Factory;
