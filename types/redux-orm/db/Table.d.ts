import Model, { AnyModel, FieldSpecKeys, IdType, Ref } from '../Model';
import { ForeignKey, OneToOne } from '../index';
import { Field } from '../fields';

/**
 * {@link TableOpts} used for {@link Table} customization.
 *
 * Supplied via {@link Model#options}.
 *
 * If no customizations were provided, the table uses following default options:
 * <br/>
 * ```typescript
 *  {
 *      idAttribute: 'id',
 *      arrName:     'items',
 *      mapName:     'itemsById'
 *  }
 * ```
 * <br/>
 *  @see {@link Model}
 *  @see {@link Model#options}
 *  @see {@link OrmState}
 */
export interface TableOpts {
    readonly idAttribute?: string;
    readonly arrName?: string;
    readonly mapName?: string;
    readonly fields?: { [K: string]: Field };
}

/**
 * @internal
 */
export type ExtractModelOption<
    MClass extends typeof AnyModel,
    K extends keyof TableOpts,
    DefaultValue extends string
> = MClass['options'] extends () => { [P in K]: infer R }
    ? R extends string
        ? R
        : DefaultValue
    : MClass['options'] extends { [P in K]: infer R }
    ? R extends string
        ? R
        : DefaultValue
    : DefaultValue;

/**
 * Model idAttribute option extraction helper.
 *
 * Falls back to `'id'` if not specified explicitly via {@link Model.options}.
 */
export type IdAttribute<MClass extends typeof AnyModel> = ExtractModelOption<MClass, 'idAttribute', 'id'>;

/**
 * Model arrName option extraction helper.
 *
 * Falls back to `'items'` if not specified explicitly via {@link Model.options}.
 */
export type ArrName<MClass extends typeof AnyModel> = ExtractModelOption<MClass, 'arrName', 'items'>;

/**
 * Model mapName option extraction helper.
 *
 * Falls back to `'itemsById'` if not specified explicitly via {@link Model.options}.
 */
export type MapName<MClass extends typeof AnyModel> = ExtractModelOption<MClass, 'mapName', 'itemsById'>;

/**
 * Unbox {@link Model#options} or fallback to default for others.
 *
 * @internal
 */
export interface ModelTableOpts<MClass extends typeof AnyModel> {
    readonly idAttribute: IdAttribute<MClass>;
    readonly arrName: ArrName<MClass>;
    readonly mapName: MapName<MClass>;
    readonly fields: MClass['fields'];
}

/**
 * Handles the underlying data structure for a {@link Model} class.
 */
export class Table<MClass extends typeof AnyModel> {
    /**
     * Creates a new {@link Table} instance.
     *
     * @param   userOpts - options to use.
     * @param   [userOpts.idAttribute=DefaultTableOpts.idAttribute] - the id attribute of the entity.
     * @param   [userOpts.arrName=DefaultTableOpts.arrName] - the state attribute where an array of
     *                                             entity id's are stored
     * @param   [userOpts.mapName=DefaultTableOpts.mapName] - the state attribute where the entity objects
     *                                                 are stored in a id to entity object
     *                                                 map.
     * @param   [userOpts.fields=DefaultTableOpts.fields] - mapping of field key to {@link Field} object
     */
    constructor(userOpts?: ModelTableOpts<MClass>);

    getEmptyState(): TableState<MClass>;
}

/**
 * Type of {@link Model} state's branch `meta` field.
 */
export interface DefaultMeta<MIdType> {
    maxId: MIdType extends number ? number : null | number;
}

export type TableIndexes<MClass extends typeof AnyModel> = {
    [K in FieldSpecKeys<InstanceType<MClass>, OneToOne | ForeignKey>]: string
};

/**
 * A mapped type parametrized by specific {@link Model} class.
 *
 * Infers actual state of the ORM branch based on the {@link Model} class provided.
 */
export type TableState<MClass extends typeof AnyModel> = {
    readonly meta: DefaultMeta<IdType<InstanceType<MClass>>>;
    readonly indexes: TableIndexes<MClass>;
} & { readonly [K in ArrName<MClass>]: ReadonlyArray<IdType<InstanceType<MClass>>> } &
    {
        readonly [K in MapName<MClass>]: {
            readonly [K: string]: Ref<InstanceType<MClass>>;
        }
    };
