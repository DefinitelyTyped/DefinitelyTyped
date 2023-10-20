declare const factory: factory.Static;

declare namespace factory {
    type Generator<T> = () => T;

    type Definition<T> = T | Generator<T> | Promise<T>;

    type Attributes<T> = {
        [P in keyof T]: Definition<T[P]>;
    };

    type MaybeReadonlyArray<T> = T | ReadonlyArray<T>;

    type BuildOptions = Record<string, any>;

    type Initializer<T, BO = BuildOptions> =
        | Attributes<T>
        | ((buildOptions?: BO) => Attributes<T>)
        | ((buildOptions?: BO) => Promise<Attributes<T>>);

    interface Static {
        factory: Static;

        /**
         * Associate the factory to other model
         */
        assoc(name: string, key?: string, attrs?: Attributes<any>, buildOptions?: BuildOptions): any;

        /**
         * Associate the factory to a model that's not persisted
         */
        assocAttrs(name: string, key?: string, attrs?: Attributes<any>, buildOptions?: BuildOptions): any;

        /**
         * Associate the factory to multiple other models
         */
        assocMany(name: string, num: number, key?: string, attrs?: Attributes<any>, buildOptions?: BuildOptions): any[];

        /**
         * Associate the factory to multiple other models that aren't persisted
         */
        assocAttrsMany(
            name: string,
            num: number,
            key?: string,
            attrs?: Attributes<any>,
            buildOptions?: BuildOptions,
        ): any[];

        /**
         * Generates and returns model attributes as an object hash instead of the model instance
         */
        attrs<T>(name: string, attrs?: Attributes<Partial<T>>, buildOptions?: BuildOptions): Promise<T>;

        /**
         * Generates and returns a collection of model attributes as an object hash instead of the model instance
         */
        attrsMany<T>(
            name: string,
            num: number,
            attrs?: MaybeReadonlyArray<Attributes<Partial<T>>>,
            buildOptions?: BuildOptions | ReadonlyArray<BuildOptions>,
        ): Promise<T[]>;

        /**
         * Builds a new model instance that is not persisted
         */
        build<T>(name: string, attrs?: Attributes<Partial<T>>, buildOptions?: BuildOptions): Promise<T>;

        /**
         * Builds an array of model instances that are not persisted
         */
        buildMany<T>(
            name: string,
            num: number,
            attrs?: MaybeReadonlyArray<Attributes<Partial<T>>>,
            buildOptions?: MaybeReadonlyArray<BuildOptions>,
        ): Promise<T[]>;

        /**
         * Destroys all of the created models
         */
        cleanUp(): void;

        /**
         * Builds a new model instance that is persisted
         */
        create<T>(name: string, attrs?: Attributes<Partial<T>>, buildOptions?: BuildOptions): Promise<T>;

        /**
         * Builds an array of model instances that are persisted
         */
        createMany<T>(
            name: string,
            num: number,
            attrs?: MaybeReadonlyArray<Attributes<Partial<T>>>,
            buildOptions?: MaybeReadonlyArray<BuildOptions>,
        ): Promise<T[]>;
        createMany<T>(
            name: string,
            attrs?: ReadonlyArray<Attributes<Partial<T>>>,
            buildOptions?: MaybeReadonlyArray<BuildOptions>,
        ): Promise<T[]>;

        /**
         * Define a new factory with a set of options
         */
        define<T>(name: string, model: any, attrs: Initializer<Partial<T>>, options?: Options<T>): void;

        /**
         * Extends a factory
         */
        extend(parent: string, name: string, initializer: any, options?: Options<any>): any;

        /**
         * Generate values sequentially inside a factory
         */
        seq(name?: string): Generator<number>;
        seq<T>(name: string, fn: (sequence: number) => T): Generator<T>;
        seq<T>(fn: (sequence: number) => T): Generator<T>;

        sequence(name?: string): Generator<number>;
        sequence<T>(name: string, fn: (sequence: number) => T): Generator<T>;
        sequence<T>(fn: (sequence: number) => T): Generator<T>;

        /**
         * Register an adapter, either as default or tied to a specific model
         */
        setAdapter(adapter: any, name?: string): void;

        /**
         *  Reset sequence generator with the given name
         *  or all generators if no name is given.
         */
        resetSequence(name?: string): void;
        resetSeq(name?: string): void;

        chance(chanceMethod: string, ...options: any): any;
    }

    interface Options<T> {
        afterBuild?: Hook<T> | undefined;
        afterCreate?: Hook<T> | undefined;
    }

    type Hook<T> = (model: any, attrs: T | T[], options: any) => void;
}

export = factory;
export as namespace factory;
