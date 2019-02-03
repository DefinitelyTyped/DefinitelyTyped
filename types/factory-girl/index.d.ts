// Type definitions for factory-girl 5.0
// Project: https://github.com/aexmachina/factory-girl#readme
// Definitions by: Stack Builders <https://github.com/stackbuilders>
//                 Sebastián Estrella <https://github.com/sestrella>
//                 Luis Fernando Alvarez <https://github.com/elcuy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare const factory: factory.Static;

declare namespace factory {
  interface Static {
    /**
     * Associate the factory to other model
     */
    assoc(model: string, attributes: string): any;

    /**
     * Associate the factory to a model that's not persisted
     */
    assocAttrs(name: string, key?: string, attributes?: any): any;

    /**
     * Associate the factory to multiple other models
     */
    assocMany(model: string, num: number, attributes: string): any[];

    /**
     * Generates and returns model attributes as an object hash instead of the model instance
     */
    attrs<T>(name: string, attrs?: Partial<T>): Promise<T>;

    /**
     * Generates and returns a collection of model attributes as an object hash instead of the model instance
     */
    attrsMany<T>(name: string, num: number, attrs?: Array<Partial<T>>): Promise<T[]>;

    /**
     * Builds a new model instance that is not persisted
     */
    build<T>(name: string, attrs?: Partial<T>): Promise<T>;

    /**
     * Builds an array of model instances that are persisted
     */
    buildMany<T>(name: string, num: number, attrs?: Partial<T>): Promise<T[]>;
    buildMany<T>(name: string, attrs?: Array<Partial<T>>): Promise<T[]>;

    /**
     * Destroys all of the created models
     */
    cleanUp(): void;

    /**
     * Builds a new model instance that is persisted
     */
    create<T>(name: string, attrs?: Partial<T>): Promise<T>;

    /**
     * Builds an array of model instances that are persisted
     */
    createMany<T>(name: string, num: number, attrs?: Partial<T>, buildOptions?: Options<T>): Promise<T[]>;
    createMany<T>(name: string, attrs?: Array<Partial<T>>, buildOptions?: Options<T>): Promise<T[]>;

    /**
     * Define a new factory with a set of options
     */
    define<T>(name: string, model: any, attrs: T, options?: Options<T>): void;

    /**
     * Extends a factory
     */
    extend(parent: string, name: string, initializer: any, options?: Options<any>): any;

    /**
     * Generate values sequentially inside a factory
     */
    seq<T>(name: string, fn: (sequence: number) => T): T;

    /**
     * Register an adapter, either as default or tied to a specific model
     */
    setAdapter(adapter: any, name?: string): void;
  }

  interface Options<T> {
    afterBuild?: Hook<T>;
    afterCreate?: Hook<T>;
  }

  type Hook<T> = (model: any, attrs: T[], options: any) => void;
}

export = factory;
export as namespace factory;
