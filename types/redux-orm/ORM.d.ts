import { Database, DatabaseCreator, TableState } from './db';
import { AnyModel } from './Model';
import Session, { OrmSession } from './Session';

/**
 * A `{typeof Model[modelName]: typeof Model}` map defining:
 *
 * - database schema
 * - {@link Session} bound Model classes
 * - ORM branch state type
 */
export type IndexedModelClasses<
    T extends { [k in keyof T]: typeof AnyModel } = {},
    K extends keyof T = Extract<keyof T, T[keyof T]['modelName']>
> = { [k in K]: T[K] };

/**
 * A mapped type capable of inferring ORM branch state type based on schema {@link Model}s.
 */
export type OrmState<MClassMap extends IndexedModelClasses<any>> = { [K in keyof MClassMap]: TableState<MClassMap[K]> };

/**
 * ORM instantiation opts.
 *
 * Enables customization of database creation.
 */
export interface ORMOpts {
    createDatabase: DatabaseCreator;
}

/**
 * ORM - the Object Relational Mapper.
 *
 * Use instances of this class to:
 *
 * - Register your {@link Model} classes using {@link ORM#register}
 * - Get the empty state for the underlying database with {@link ORM#getEmptyState}
 * - Start an immutable database session with {@link ORM#session}
 * - Start a mutating database session with {@link ORM#mutableSession}
 *
 * Internally, this class handles generating a schema specification from models
 * to the database.
 */
export class ORM<I extends IndexedModelClasses<any>, ModelNames extends keyof I = keyof I> {
    /**
     * Creates a new ORM instance.
     */
    constructor(opts?: ORMOpts);

    /**
     * Registers a {@link Model} class to the ORM.
     *
     * If the model has declared any ManyToMany fields, their
     * through models will be generated and registered with
     * this call, unless a custom through model has been specified.
     *
     * @param  model - a {@link Model} class to register
     */
    register(...model: ReadonlyArray<I[ModelNames]>): void;

    /**
     * Gets a {@link Model} class by its name from the registry.
     *
     * @param  modelName - the name of the {@link Model} class to get
     *
     * @throws If {@link Model} class is not found.
     *
     * @return the {@link Model} class, if found
     */
    get<K extends ModelNames>(modelName: K): I[K];

    /**
     * Returns the empty database state.
     *
     * @see {@link OrmState}
     *
     * @return empty state
     */
    getEmptyState(): OrmState<I>;

    /**
     * Begins an immutable database session.
     *
     * @see {@link OrmState}
     * @see {@link SessionType}
     *
     * @param  state  - the state the database manages
     *
     * @return a new {@link Session} instance
     */
    session(state?: OrmState<I>): OrmSession<I>;

    /**
     * Begins an mutable database session.
     *
     * @see {@link OrmState}
     * @see {@link SessionType}
     *
     * @param  state  - the state the database manages
     *
     * @return a new {@link Session} instance
     */
    mutableSession(state: OrmState<I>): OrmSession<I>;

    /**
     * Acquire database reference.
     *
     * If no database exists, an instance is created using either default or supplied implementation of {@link DatabaseCreator}.
     *
     * @return A {@link Database} instance structured according to registered schema.
     */
    getDatabase(): Database<I>;
}

export default ORM;
