// Type definitions for Sequelize 4.27.10
// Project: http://sequelizejs.com
// Definitions by: samuelneff <https://github.com/samuelneff>
//                 Peter Harris <https://github.com/codeanimal>
//                 Ivan Drinchev <https://github.com/drinchev>
//                 Brendan Abolivier <https://github.com/babolivier>
//                 Patsakol Tangjitcharoenchai <https://github.com/kukoo1>
//                 Sebastien Bramille <https://github.com/oktapodia>
//                 Nick Mueller <https://github.com/morpheusxaut>
//                 Philippe D'Alva <https://github.com/TitaneBoy>
//                 Carven Zhang <https://github.com/zjy01>
//                 Nikola Vidic <https://github.com/nidzov>
//                 Florian Oellerich <https://github.com/Raigen>
//                 Todd Bealmear <https://github.com/todd>
//                 Nick Schultz <https://github.com/nrschultz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Based on original work by: samuelneff <https://github.com/samuelneff/sequelize-auto-ts/blob/master/lib/sequelize.d.ts>

/// <reference types="validator" />


import * as _ from "lodash";
import Promise = require("bluebird");
import * as cls from "continuation-local-storage"

declare namespace sequelize {

    //
    //  Associations
    // ~~~~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/tree/v3.4.1/lib/associations
    //


    /**
     * The options for the getAssociation mixin of the belongsTo association.
     * @see BelongsToGetAssociationMixin
     */
    interface BelongsToGetAssociationMixinOptions {
        /**
         * Apply a scope on the related model, or remove its default scope by passing false.
         */
        scope?: string | boolean;
    }

    /**
     * The getAssociation mixin applied to models with belongsTo.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsTo(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttrib>, UserAttrib {
     *    getRole: Sequelize.BelongsToGetAssociationMixin<RoleInstance>;
     *    // setRole...
     *    // createRole...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to/
     * @see Instance
     */
    interface BelongsToGetAssociationMixin<TInstance> {
        /**
         * Get the associated instance.
         * @param options The options to use when getting the association.
         */
        (options?: BelongsToGetAssociationMixinOptions): Promise<TInstance | null>;
    }

    /**
     * The options for the setAssociation mixin of the belongsTo association.
     * @see BelongsToSetAssociationMixin
     */
    interface BelongsToSetAssociationMixinOptions {
        /**
         * Skip saving this after setting the foreign key if false.
         */
        save?: boolean;
    }

    /**
     * The setAssociation mixin applied to models with belongsTo.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsTo(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRole...
     *    setRole: Sequelize.BelongsToSetAssociationMixin<RoleInstance, RoleId>;
     *    // createRole...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to/
     * @see Instance
     */
    interface BelongsToSetAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Set the associated instance.
         * @param newAssociation An instance or the primary key of an instance to associate with this. Pass null or undefined to remove the association.
         * @param options the options passed to `this.save`.
         */
        (
            newAssociation?: TInstance | TInstancePrimaryKey,
            options?: BelongsToSetAssociationMixinOptions | InstanceSaveOptions
        ): Promise<void>;
    }

    /**
     * The options for the createAssociation mixin of the belongsTo association.
     * @see BelongsToCreateAssociationMixin
     */
    interface BelongsToCreateAssociationMixinOptions { }

    /**
     * The createAssociation mixin applied to models with belongsTo.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsTo(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRole...
     *    // setRole...
     *    createRole: Sequelize.BelongsToCreateAssociationMixin<RoleAttributes>;
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to/
     * @see Instance
     */
    interface BelongsToCreateAssociationMixin<TAttributes> {
        /**
         * Create a new instance of the associated model and associate it with this.
         * @param values The values used to create the association.
         * @param options The options passed to `target.create` and `setAssociation`.
         */
        (
            values?: TAttributes,
            options?: BelongsToCreateAssociationMixinOptions | CreateOptions | BelongsToSetAssociationMixinOptions
        ): Promise<void>;
    }

    /**
     * The options for the getAssociation mixin of the hasOne association.
     * @see HasOneGetAssociationMixin
     */
    interface HasOneGetAssociationMixinOptions {
        /**
         * Apply a scope on the related model, or remove its default scope by passing false.
         */
        scope?: string | boolean;
    }

    /**
     * The getAssociation mixin applied to models with hasOne.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasOne(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttrib>, UserAttrib {
     *    getRole: Sequelize.HasOneGetAssociationMixin<RoleInstance>;
     *    // setRole...
     *    // createRole...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-one/
     * @see Instance
     */
    interface HasOneGetAssociationMixin<TInstance> {
        /**
         * Get the associated instance.
         * @param options The options to use when getting the association.
         */
        (options?: HasOneGetAssociationMixinOptions): Promise<TInstance | null>;
    }

    /**
     * The options for the setAssociation mixin of the hasOne association.
     * @see HasOneSetAssociationMixin
     */
    interface HasOneSetAssociationMixinOptions {
        /**
         * Skip saving this after setting the foreign key if false.
         */
        save?: boolean;
    }

    /**
     * The setAssociation mixin applied to models with hasOne.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasOne(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRole...
     *    setRole: Sequelize.HasOneSetAssociationMixin<RoleInstance, RoleId>;
     *    // createRole...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-one/
     * @see Instance
     */
    interface HasOneSetAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Set the associated instance.
         * @param newAssociation An instance or the primary key of an instance to associate with this. Pass null or undefined to remove the association.
         * @param options The options passed to `getAssocation` and `target.save`.
         */
        (
            newAssociation?: TInstance | TInstancePrimaryKey,
            options?: HasOneSetAssociationMixinOptions | HasOneGetAssociationMixinOptions | InstanceSaveOptions
        ): Promise<void>;
    }

    /**
     * The options for the createAssociation mixin of the hasOne association.
     * @see HasOneCreateAssociationMixin
     */
    interface HasOneCreateAssociationMixinOptions { }

    /**
     * The createAssociation mixin applied to models with hasOne.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasOne(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRole...
     *    // setRole...
     *    createRole: Sequelize.HasOneCreateAssociationMixin<RoleAttributes>;
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-one/
     * @see Instance
     */
    interface HasOneCreateAssociationMixin<TAttributes> {
        /**
         * Create a new instance of the associated model and associate it with this.
         * @param values The values used to create the association.
         * @param options The options passed to `target.create` and `setAssociation`.
         */
        (
            values?: TAttributes,
            options?: HasOneCreateAssociationMixinOptions | HasOneSetAssociationMixinOptions | CreateOptions
        ): Promise<void>;
    }

    /**
     * The options for the getAssociations mixin of the hasMany association.
     * @see HasManyGetAssociationsMixin
     */
    interface HasManyGetAssociationsMixinOptions {

        /**
         * An optional where clause to limit the associated models.
         */
        where?: AnyWhereOptions;

        /**
         * Apply a scope on the related model, or remove its default scope by passing false.
         */
        scope?: string | boolean;
    }

    /**
     * The getAssociations mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    getRoles: Sequelize.HasManyGetAssociationsMixin<RoleInstance>;
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyGetAssociationsMixin<TInstance> {
        /**
         * Get everything currently associated with this, using an optional where clause.
         * @param options The options to use when getting the associations.
         */
        (options?: HasManyGetAssociationsMixinOptions): Promise<TInstance[]>;
    }

    /**
     * The options for the setAssociations mixin of the hasMany association.
     * @see HasManySetAssociationsMixin
     */
    interface HasManySetAssociationsMixinOptions {

        /**
         * Run validation for the join model.
         */
        validate?: boolean;
    }

    /**
     * The setAssociations mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    setRoles: Sequelize.HasManySetAssociationsMixin<RoleInstance, RoleId>;
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManySetAssociationsMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Set the associated models by passing an array of instances or their primary keys.
         * Everything that it not in the passed array will be un-associated.
         * @param newAssociations An array of instances or primary key of instances to associate with this. Pass null or undefined to remove all associations.
         * @param options The options passed to `target.findAll` and `update`.
         */
        (
            newAssociations?: Array<TInstance | TInstancePrimaryKey>,
            options?: HasManySetAssociationsMixinOptions | AnyFindOptions | InstanceUpdateOptions
        ): Promise<void>;
    }

    /**
     * The options for the addAssociations mixin of the hasMany association.
     * @see HasManyAddAssociationsMixin
     */
    interface HasManyAddAssociationsMixinOptions {

        /**
         * Run validation for the join model.
         */
        validate?: boolean;
    }

    /**
     * The addAssociations mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    addRoles: Sequelize.HasManyAddAssociationsMixin<RoleInstance, RoleId>;
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyAddAssociationsMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Associate several instances with this.
         * @param newAssociations An array of instances or primary key of instances to associate with this.
         * @param options The options passed to `target.update`.
         */
        (
            newAssociations?: Array<TInstance | TInstancePrimaryKey>,
            options?: HasManyAddAssociationsMixinOptions | InstanceUpdateOptions
        ): Promise<void>;
    }

    /**
     * The options for the addAssociation mixin of the hasMany association.
     * @see HasManyAddAssociationMixin
     */
    interface HasManyAddAssociationMixinOptions {

        /**
         * Run validation for the join model.
         */
        validate?: boolean;
    }

    /**
     * The addAssociation mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    addRole: Sequelize.HasManyAddAssociationMixin<RoleInstance, RoleId>;
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyAddAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Associate an instance with this.
         * @param newAssociation An instance or the primary key of an instance to associate with this.
         * @param options The options passed to `target.update`.
         */
        (
            newAssociation?: TInstance | TInstancePrimaryKey,
            options?: HasManyAddAssociationMixinOptions | InstanceUpdateOptions
        ): Promise<void>;
    }

    /**
     * The options for the createAssociation mixin of the hasMany association.
     * @see HasManyCreateAssociationMixin
     */
    interface HasManyCreateAssociationMixinOptions { }

    /**
     * The createAssociation mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    createRole: Sequelize.HasManyCreateAssociationMixin<RoleAttributes>;
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyCreateAssociationMixin<TAttributes, TInstance> {
        /**
         * Create a new instance of the associated model and associate it with this.
         * @param values The values used to create the association.
         * @param options The options to use when creating the association.
         */
        (
            values?: TAttributes,
            options?: HasManyCreateAssociationMixinOptions | CreateOptions
        ): Promise<TInstance>;
    }

    /**
     * The options for the removeAssociation mixin of the hasMany association.
     * @see HasManyRemoveAssociationMixin
     */
    interface HasManyRemoveAssociationMixinOptions { }

    /**
     * The removeAssociation mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    removeRole: Sequelize.HasManyRemoveAssociationMixin<RoleInstance, RoleId>;
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyRemoveAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Un-associate the instance.
         * @param oldAssociated The instance or the primary key of the instance to un-associate.
         * @param options The options passed to `target.update`.
         */
        (
            oldAssociated?: TInstance | TInstancePrimaryKey,
            options?: HasManyRemoveAssociationMixinOptions | InstanceUpdateOptions
        ): Promise<void>;
    }

    /**
     * The options for the removeAssociations mixin of the hasMany association.
     * @see HasManyRemoveAssociationsMixin
     */
    interface HasManyRemoveAssociationsMixinOptions { }

    /**
     * The removeAssociations mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    removeRoles: Sequelize.HasManyRemoveAssociationsMixin<RoleInstance, RoleId>;
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyRemoveAssociationsMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Un-associate several instances.
         * @param oldAssociated An array of instances or primary key of instances to un-associate.
         * @param options The options passed to `target.update`.
         */
        (
            oldAssociateds?: Array<TInstance | TInstancePrimaryKey>,
            options?: HasManyRemoveAssociationsMixinOptions | InstanceUpdateOptions
        ): Promise<void>;
    }

    /**
     * The options for the hasAssociation mixin of the hasMany association.
     * @see HasManyHasAssociationMixin
     */
    interface HasManyHasAssociationMixinOptions { }

    /**
     * The hasAssociation mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    hasRole: Sequelize.HasManyHasAssociationMixin<RoleInstance, RoleId>;
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyHasAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Check if an instance is associated with this.
         * @param target The instance or the primary key of the instance to check.
         * @param options The options passed to `getAssociations`.
         */
        (
            target: TInstance | TInstancePrimaryKey,
            options?: HasManyHasAssociationMixinOptions | HasManyGetAssociationsMixinOptions
        ): Promise<boolean>;
    }

    /**
     * The options for the hasAssociations mixin of the hasMany association.
     * @see HasManyHasAssociationsMixin
     */
    interface HasManyHasAssociationsMixinOptions { }

    /**
     * The removeAssociations mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles
     *    // hasRole...
     *    hasRoles: Sequelize.HasManyHasAssociationsMixin<RoleInstance, RoleId>;
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyHasAssociationsMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Check if all instances are associated with this.
         * @param targets An array of instances or primary key of instances to check.
         * @param options The options passed to `getAssociations`.
         */
        (
            targets: Array<TInstance | TInstancePrimaryKey>,
            options?: HasManyHasAssociationsMixinOptions | HasManyGetAssociationsMixinOptions
        ): Promise<boolean>;
    }

    /**
     * The options for the countAssociations mixin of the hasMany association.
     * @see HasManyCountAssociationsMixin
     */
    interface HasManyCountAssociationsMixinOptions {

        /**
         * An optional where clause to limit the associated models.
         */
        where?: AnyWhereOptions;

        /**
         * Apply a scope on the related model, or remove its default scope by passing false.
         */
        scope?: string | boolean;
    }

    /**
     * The countAssociations mixin applied to models with hasMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.hasMany(Role);
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    countRoles: Sequelize.HasManyCountAssociationsMixin;
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/has-many/
     * @see Instance
     */
    interface HasManyCountAssociationsMixin {
        /**
         * Count everything currently associated with this, using an optional where clause.
         * @param options The options to use when counting the associations.
         */
        (options?: HasManyCountAssociationsMixinOptions): Promise<number>;
    }

    /**
     * The options for the getAssociations mixin of the belongsToMany association.
     * @see BelongsToManyGetAssociationsMixin
     */
    interface BelongsToManyGetAssociationsMixinOptions {

        /**
         * An optional where clause to limit the associated models.
         */
        where?: AnyWhereOptions;

        /**
         * Apply a scope on the related model, or remove its default scope by passing false.
         */
        scope?: string | boolean;
    }

    /**
     * The getAssociations mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    getRoles: Sequelize.BelongsToManyGetAssociationsMixin<RoleInstance>;
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyGetAssociationsMixin<TInstance> {
        /**
         * Get everything currently associated with this, using an optional where clause.
         * @param options The options to use when getting the associations.
         */
        (options?: BelongsToManyGetAssociationsMixinOptions): Promise<TInstance[]>;
    }

    /**
     * The options for the setAssociations mixin of the belongsToMany association.
     * @see BelongsToManySetAssociationsMixin
     */
    interface BelongsToManySetAssociationsMixinOptions {

        /**
         * Run validation for the join model.
         */
        validate?: boolean;
    }

    /**
     * The setAssociations mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    setRoles: Sequelize.BelongsToManySetAssociationsMixin<RoleInstance, RoleId, UserRoleAttributes>;
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManySetAssociationsMixin<TInstance, TInstancePrimaryKey, TJoinTableAttributes> {
        /**
         * Set the associated models by passing an array of instances or their primary keys.
         * Everything that it not in the passed array will be un-associated.
         * @param newAssociations An array of instances or primary key of instances to associate with this. Pass null or undefined to remove all associations.
         * @param options The options passed to `through.findAll`, `bulkCreate`, `update` and `destroy`. Can also hold additional attributes for the join table.
         */
        (
            newAssociations?: Array<TInstance | TInstancePrimaryKey>,
            options?: BelongsToManySetAssociationsMixinOptions | AnyFindOptions | BulkCreateOptions | InstanceUpdateOptions | InstanceDestroyOptions | { through: TJoinTableAttributes }
        ): Promise<void>;
    }

    /**
     * The options for the addAssociations mixin of the belongsToMany association.
     * @see BelongsToManyAddAssociationsMixin
     */
    interface BelongsToManyAddAssociationsMixinOptions {

        /**
         * Run validation for the join model.
         */
        validate?: boolean;
    }

    /**
     * The addAssociations mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    addRoles: Sequelize.BelongsToManyAddAssociationsMixin<RoleInstance, RoleId, UserRoleAttributes>;
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyAddAssociationsMixin<TInstance, TInstancePrimaryKey, TJoinTableAttributes> {
        /**
         * Associate several instances with this.
         * @param newAssociations An array of instances or primary key of instances to associate with this.
         * @param options The options passed to `through.findAll`, `bulkCreate`, `update` and `destroy`. Can also hold additional attributes for the join table.
         */
        (
            newAssociations?: Array<TInstance | TInstancePrimaryKey>,
            options?: BelongsToManyAddAssociationsMixinOptions | AnyFindOptions | BulkCreateOptions | InstanceUpdateOptions | InstanceDestroyOptions | { through: TJoinTableAttributes }
        ): Promise<void>;
    }

    /**
     * The options for the addAssociation mixin of the belongsToMany association.
     * @see BelongsToManyAddAssociationMixin
     */
    interface BelongsToManyAddAssociationMixinOptions {

        /**
         * Run validation for the join model.
         */
        validate?: boolean;
    }

    /**
     * The addAssociation mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    addRole: Sequelize.BelongsToManyAddAssociationMixin<RoleInstance, RoleId, UserRoleAttributes>;
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyAddAssociationMixin<TInstance, TInstancePrimaryKey, TJoinTableAttributes> {
        /**
         * Associate an instance with this.
         * @param newAssociation An instance or the primary key of an instance to associate with this.
         * @param options The options passed to `through.findAll`, `bulkCreate`, `update` and `destroy`. Can also hold additional attributes for the join table.
         */
        (
            newAssociation?: TInstance | TInstancePrimaryKey,
            options?: BelongsToManyAddAssociationMixinOptions | AnyFindOptions | BulkCreateOptions | InstanceUpdateOptions | InstanceDestroyOptions | { through: TJoinTableAttributes }
        ): Promise<void>;
    }

    /**
     * The options for the createAssociation mixin of the belongsToMany association.
     * @see BelongsToManyCreateAssociationMixin
     */
    interface BelongsToManyCreateAssociationMixinOptions { }

    /**
     * The createAssociation mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    createRole: Sequelize.BelongsToManyCreateAssociationMixin<RoleAttributes, UserRoleAttributes>;
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyCreateAssociationMixin<TAttributes, TInstance, TJoinTableAttributes> {
        /**
         * Create a new instance of the associated model and associate it with this.
         * @param values The values used to create the association.
         * @param options Options passed to `create` and `add`. Can also hold additional attributes for the join table.
         */
        (
            values?: TAttributes,
            options?: BelongsToManyCreateAssociationMixinOptions | CreateOptions | { through: TJoinTableAttributes }
        ): Promise<TInstance>;
    }

    /**
     * The options for the removeAssociation mixin of the belongsToMany association.
     * @see BelongsToManyRemoveAssociationMixin
     */
    interface BelongsToManyRemoveAssociationMixinOptions { }

    /**
     * The removeAssociation mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    removeRole: Sequelize.BelongsToManyRemoveAssociationMixin<RoleInstance, RoleId>;
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyRemoveAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Un-associate the instance.
         * @param oldAssociated The instance or the primary key of the instance to un-associate.
         * @param options The options passed to `through.destroy`.
         */
        (
            oldAssociated?: TInstance | TInstancePrimaryKey,
            options?: BelongsToManyRemoveAssociationMixinOptions | InstanceDestroyOptions
        ): Promise<void>;
    }

    /**
     * The options for the removeAssociations mixin of the belongsToMany association.
     * @see BelongsToManyRemoveAssociationsMixin
     */
    interface BelongsToManyRemoveAssociationsMixinOptions { }

    /**
     * The removeAssociations mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    removeRoles: Sequelize.BelongsToManyRemoveAssociationsMixin<RoleInstance, RoleId>;
     *    // hasRole...
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyRemoveAssociationsMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Un-associate several instances.
         * @param oldAssociated An array of instances or primary key of instances to un-associate.
         * @param options The options passed to `through.destroy`.
         */
        (
            oldAssociateds?: Array<TInstance | TInstancePrimaryKey>,
            options?: BelongsToManyRemoveAssociationsMixinOptions | InstanceDestroyOptions
        ): Promise<void>;
    }

    /**
     * The options for the hasAssociation mixin of the belongsToMany association.
     * @see BelongsToManyHasAssociationMixin
     */
    interface BelongsToManyHasAssociationMixinOptions { }

    /**
     * The hasAssociation mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    hasRole: Sequelize.BelongsToManyHasAssociationMixin<RoleInstance, RoleId>;
     *    // hasRoles...
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyHasAssociationMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Check if an instance is associated with this.
         * @param target The instance or the primary key of the instance to check.
         * @param options The options passed to `getAssociations`.
         */
        (
            target: TInstance | TInstancePrimaryKey,
            options?: BelongsToManyHasAssociationMixinOptions | BelongsToManyGetAssociationsMixinOptions
        ): Promise<boolean>;
    }

    /**
     * The options for the hasAssociations mixin of the belongsToMany association.
     * @see BelongsToManyHasAssociationsMixin
     */
    interface BelongsToManyHasAssociationsMixinOptions { }

    /**
     * The removeAssociations mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles
     *    // hasRole...
     *    hasRoles: Sequelize.BelongsToManyHasAssociationsMixin<RoleInstance, RoleId>;
     *    // countRoles...
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyHasAssociationsMixin<TInstance, TInstancePrimaryKey> {
        /**
         * Check if all instances are associated with this.
         * @param targets An array of instances or primary key of instances to check.
         * @param options The options passed to `getAssociations`.
         */
        (
            targets: Array<TInstance | TInstancePrimaryKey>,
            options?: BelongsToManyHasAssociationsMixinOptions | BelongsToManyGetAssociationsMixinOptions
        ): Promise<boolean>;
    }

    /**
     * The options for the countAssociations mixin of the belongsToMany association.
     * @see BelongsToManyCountAssociationsMixin
     */
    interface BelongsToManyCountAssociationsMixinOptions {

        /**
         * An optional where clause to limit the associated models.
         */
        where?: AnyWhereOptions;

        /**
         * Apply a scope on the related model, or remove its default scope by passing false.
         */
        scope?: string | boolean;
    }

    /**
     * The countAssociations mixin applied to models with belongsToMany.
     * An example of usage is as follows:
     *
     * ```js
     *
     * User.belongsToMany(Role, { through: UserRole });
     *
     * interface UserInstance extends Sequelize.Instance<UserInstance, UserAttributes>, UserAttributes {
     *    // getRoles...
     *    // setRoles...
     *    // addRoles...
     *    // addRole...
     *    // createRole...
     *    // removeRole...
     *    // removeRoles...
     *    // hasRole...
     *    // hasRoles...
     *    countRoles: Sequelize.BelongsToManyCountAssociationsMixin;
     * }
     * ```
     *
     * @see http://docs.sequelizejs.com/en/latest/api/associations/belongs-to-many/
     * @see Instance
     */
    interface BelongsToManyCountAssociationsMixin {
        /**
         * Count everything currently associated with this, using an optional where clause.
         * @param options The options to use when counting the associations.
         */
        (options?: BelongsToManyCountAssociationsMixinOptions): Promise<number>;
    }

    /**
     * Foreign Key Options
     *
     * @see AssociationOptions
     */
    interface AssociationForeignKeyOptions extends ColumnOptions {

        /**
         *  Attribute name for the relation
         */
        name?: string;
        unique?: boolean | string;
    }

    /**
     * Options provided when associating models
     *
     * @see Association class
     */
    interface AssociationOptions {

        /**
         * Set to true to run before-/afterDestroy hooks when an associated model is deleted because of a cascade.
         * For example if `User.hasOne(Profile, {onDelete: 'cascade', hooks:true})`, the before-/afterDestroy hooks
         * for profile will be called when a user is deleted. Otherwise the profile will be deleted without invoking
         * any hooks.
         *
         * Defaults to false
         */
        hooks?: boolean;

        /**
         * The alias of this model, in singular form. See also the `name` option passed to `sequelize.define`. If
         * you create multiple associations between the same tables, you should provide an alias to be able to
         * distinguish between them. If you provide an alias when creating the assocition, you should provide the
         * same alias when eager loading and when getting assocated models. Defaults to the singularized name of
         * target
         */
        as?: string | { singular: string, plural: string };

        /**
         * The name of the foreign key in the target table or an object representing the type definition for the
         * foreign column (see `Sequelize.define` for syntax). When using an object, you can add a `name` property
         * to set the name of the column. Defaults to the name of source + primary key of source
         */
        foreignKey?: string | AssociationForeignKeyOptions;

        /**
         * What happens when delete occurs.
         *
         * Cascade if this is a n:m, and set null if it is a 1:m
         *
         * Defaults to 'SET NULL' or 'CASCADE'
         */
        onDelete?: string;

        /**
         * What happens when update occurs
         *
         * Defaults to 'CASCADE'
         */
        onUpdate?: string;

        /**
         * Should on update and on delete constraints be enabled on the foreign key.
         */
        constraints?: boolean;
        foreignKeyConstraint?: boolean;

    }

    /**
     * Options for Association Scope
     *
     * @see AssociationOptionsManyToMany
     */
    interface AssociationScope {

        /**
         * The name of the column that will be used for the associated scope and it's value
         */
        [scopeName: string]: any;

    }

    /**
     * Options provided for many-to-many relationships
     *
     * @see AssociationOptionsHasMany
     * @see AssociationOptionsBelongsToMany
     */
    interface AssociationOptionsManyToMany extends AssociationOptions {

        /**
         * A key/value set that will be used for association create and find defaults on the target.
         * (sqlite not supported for N:M)
         */
        scope?: AssociationScope;

    }

    /**
     * Options provided when associating models with hasOne relationship
     *
     * @see Association class hasOne method
     */
    interface AssociationOptionsHasOne extends AssociationOptions {

        /**
         * A string or a data type to represent the identifier in the table
         */
        keyType?: DataTypeAbstract;

    }

    /**
     * Options provided when associating models with belongsTo relationship
     *
     * @see Association class belongsTo method
     */
    interface AssociationOptionsBelongsTo extends AssociationOptions {

        /**
         * The name of the field to use as the key for the association in the target table. Defaults to the primary
         * key of the target table
         */
        targetKey?: string;

        /**
         * A string or a data type to represent the identifier in the table
         */
        keyType?: DataTypeAbstract;

    }

    /**
     * Options provided when associating models with hasMany relationship
     *
     * @see Association class hasMany method
     */
    interface AssociationOptionsHasMany extends AssociationOptionsManyToMany {

        /**
         * A string or a data type to represent the identifier in the table
         */
        keyType?: DataTypeAbstract;
        /**
         * A string to represent the name of the field to use as the key for an 1 to many association in the source table.
         *
         * @see http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-hasMany
         * @see https://github.com/sequelize/sequelize/blob/b4fd46426db9cdbb97074bea121203d565e4195d/lib/associations/has-many.js#L81
         */
        sourceKey?: string;
    }

    /**
     * Options provided when associating models with belongsToMany relationship
     *
     * @see Association class belongsToMany method
     */
    interface AssociationOptionsBelongsToMany extends AssociationOptionsManyToMany {

        /**
         * The name of the table that is used to join source and target in n:m associations. Can also be a
         * sequelize
         * model if you want to define the junction table yourself and add extra attributes to it.
         *
         * In 3.4.1 version of Sequelize, hasMany's use of through gives an error, and on the other hand through
         * option for belongsToMany has been made required.
         *
         * @see https://github.com/sequelize/sequelize/blob/v3.4.1/lib/associations/has-many.js
         * @see https://github.com/sequelize/sequelize/blob/v3.4.1/lib/associations/belongs-to-many.js
         */
        through: Model<any, any> | string | ThroughOptions;

        /**
         * The name of the foreign key in the join table (representing the target model) or an object representing
         * the type definition for the other column (see `Sequelize.define` for syntax). When using an object, you
         * can add a `name` property to set the name of the colum. Defaults to the name of target + primary key of
         * target
         */
        otherKey?: string | AssociationForeignKeyOptions;

        /**
         * Should the join model have timestamps
         */
        timestamps?: boolean;

    }

    /**
     * Used for a association table in n:m associations.
     *
     * @see AssociationOptionsBelongsToMany
     */
    interface ThroughOptions {

        /**
         * The model used to join both sides of the N:M association.
         */
        model: Model<any, any>;

        /**
         * A key/value set that will be used for association create and find defaults on the through model.
         * (Remember to add the attributes to the through model)
         */
        scope?: AssociationScope;

        /**
         * If true a unique key will be generated from the foreign keys used (might want to turn this off and create
         * specific unique keys when using scopes)
         *
         * Defaults to true
         */
        unique?: boolean;

    }

    /**
     * Creating assocations in sequelize is done by calling one of the belongsTo / hasOne / hasMany functions on a
     * model (the source), and providing another model as the first argument to the function (the target).
     *
     * * hasOne - adds a foreign key to target
     * * belongsTo - add a foreign key to source
     * * hasMany - adds a foreign key to target, unless you also specify that target hasMany source, in which case
     * a
     * junction table is created with sourceId and targetId
     *
     * Creating an association will add a foreign key constraint to the attributes. All associations use `CASCADE`
     * on update and `SET NULL` on delete, except for n:m, which also uses `CASCADE` on delete.
     *
     * When creating associations, you can provide an alias, via the `as` option. This is useful if the same model
     * is associated twice, or you want your association to be called something other than the name of the target
     * model.
     *
     * As an example, consider the case where users have many pictures, one of which is their profile picture. All
     * pictures have a `userId`, but in addition the user model also has a `profilePictureId`, to be able to easily
     * load the user's profile picture.
     *
     * ```js
     * User.hasMany(Picture)
     * User.belongsTo(Picture, { as: 'ProfilePicture', constraints: false })
     *
     * user.getPictures() // gets you all pictures
     * user.getProfilePicture() // gets you only the profile picture
     *
     * User.findAll({
     *   where: ...,
     *   include: [
     *     { model: Picture }, // load all pictures
     *     { model: Picture, as: 'ProfilePicture' }, // load the profile picture. Notice that the spelling must be
     * the exact same as the one in the association
     *   ]
     * })
     * ```
     * To get full control over the foreign key column added by sequelize, you can use the `foreignKey` option. It
     * can either be a string, that specifies the name, or and object type definition,
     * equivalent to those passed to `sequelize.define`.
     *
     * ```js
     * User.hasMany(Picture, { foreignKey: 'uid' })
     * ```
     *
     * The foreign key column in Picture will now be called `uid` instead of the default `userId`.
     *
     * ```js
     * User.hasMany(Picture, {
     *   foreignKey: {
     *     name: 'uid',
     *     allowNull: false
     *   }
     * })
     * ```
     *
     * This specifies that the `uid` column can not be null. In most cases this will already be covered by the
     * foreign key costraints, which sequelize creates automatically, but can be useful in case where the foreign
     * keys are disabled, e.g. due to circular references (see `constraints: false` below).
     *
     * When fetching associated models, you can limit your query to only load some models. These queries are
     * written
     * in the same way as queries to `find`/`findAll`. To only get pictures in JPG, you can do:
     *
     * ```js
     * user.getPictures({
     *   where: {
     *     format: 'jpg'
     *   }
     * })
     * ```
     *
     * There are several ways to update and add new assoications. Continuing with our example of users and
     * pictures:
     * ```js
     * user.addPicture(p) // Add a single picture
     * user.setPictures([p1, p2]) // Associate user with ONLY these two picture, all other associations will be
     * deleted user.addPictures([p1, p2]) // Associate user with these two pictures, but don't touch any current
     * associations
     * ```
     *
     * You don't have to pass in a complete object to the association functions, if your associated model has a
     * single primary key:
     *
     * ```js
     * user.addPicture(req.query.pid) // Here pid is just an integer, representing the primary key of the picture
     * ```
     *
     * In the example above we have specified that a user belongs to his profile picture. Conceptually, this might
     * not make sense, but since we want to add the foreign key to the user model this is the way to do it.
     *
     * Note how we also specified `constraints: false` for profile picture. This is because we add a foreign key
     * from user to picture (profilePictureId), and from picture to user (userId). If we were to add foreign keys
     * to both, it would create a cyclic dependency, and sequelize would not know which table to create first,
     * since user depends on picture, and picture depends on user. These kinds of problems are detected by
     * sequelize before the models are synced to the database, and you will get an error along the lines of `Error:
     * Cyclic dependency found. 'users' is dependent of itself`. If you encounter this, you should either disable
     * some constraints, or rethink your associations completely.
     *
     * @see Sequelize.Model
     */
    interface Associations {

        /**
         * Creates an association between this (the source) and the provided target. The foreign key is added
         * on the target.
         *
         * Example: `User.hasOne(Profile)`. This will add userId to the profile table.
         *
         * @param target The model that will be associated with hasOne relationship
         * @param options Options for the association
         * @return return type of association
         */
        hasOne(target: Model<any, any>, options?: AssociationOptionsHasOne): IncludeAssociation;

        /**
         * Creates an association between this (the source) and the provided target. The foreign key is added on the
         * source.
         *
         * Example: `Profile.belongsTo(User)`. This will add userId to the profile table.
         *
         * @param target The model that will be associated with hasOne relationship
         * @param options Options for the association
         * @return return type of association
         */
        belongsTo(target: Model<any, any>, options?: AssociationOptionsBelongsTo): IncludeAssociation;

        /**
         * Create an association that is either 1:m or n:m.
         *
         * ```js
         * // Create a 1:m association between user and project
         * User.hasMany(Project)
         * ```
         * ```js
         * // Create a n:m association between user and project
         * User.hasMany(Project)
         * Project.hasMany(User)
         * ```
         * By default, the name of the join table will be source+target, so in this case projectsusers. This can be
         * overridden by providing either a string or a Model as `through` in the options. If you use a through
         * model with custom attributes, these attributes can be set when adding / setting new associations in two
         * ways. Consider users and projects from before with a join table that stores whether the project has been
         * started yet:
         * ```js
         * var UserProjects = sequelize.define('userprojects', {
         *   started: Sequelize.BOOLEAN
         * })
         * User.hasMany(Project, { through: UserProjects })
         * Project.hasMany(User, { through: UserProjects })
         * ```
         * ```js
         * jan.addProject(homework, { started: false }) // The homework project is not started yet
         * jan.setProjects([makedinner, doshopping], { started: true}) // Both shopping and dinner have been
         * started
         * ```
         *
         * If you want to set several target instances, but with different attributes you have to set the
         * attributes on the instance, using a property with the name of the through model:
         *
         * ```js
         * p1.userprojects {
         *   started: true
         * }
         * user.setProjects([p1, p2], {started: false}) // The default value is false, but p1 overrides that.
         * ```
         *
         * Similarily, when fetching through a join table with custom attributes, these attributes will be
         * available as an object with the name of the through model.
         * ```js
         * user.getProjects().then(function (projects) {
         *   var p1 = projects[0]
         *   p1.userprojects.started // Is this project started yet?
         * })
         * ```
         *
         * @param target The model that will be associated with hasOne relationship
         * @param options Options for the association
         * @return return type of association
         */
        hasMany(target: Model<any, any>, options?: AssociationOptionsHasMany): IncludeAssociation;

        /**
         * Create an N:M association with a join table
         *
         * ```js
         * User.belongsToMany(Project)
         * Project.belongsToMany(User)
         * ```
         * By default, the name of the join table will be source+target, so in this case projectsusers. This can be
         * overridden by providing either a string or a Model as `through` in the options.
         *
         * If you use a through model with custom attributes, these attributes can be set when adding / setting new
         * associations in two ways. Consider users and projects from before with a join table that stores whether
         * the project has been started yet:
         * ```js
         * var UserProjects = sequelize.define('userprojects', {
         *   started: Sequelize.BOOLEAN
         * })
         * User.belongsToMany(Project, { through: UserProjects })
         * Project.belongsToMany(User, { through: UserProjects })
         * ```
         * ```js
         * jan.addProject(homework, { started: false }) // The homework project is not started yet
         * jan.setProjects([makedinner, doshopping], { started: true}) // Both shopping and dinner has been started
         * ```
         *
         * If you want to set several target instances, but with different attributes you have to set the
         * attributes on the instance, using a property with the name of the through model:
         *
         * ```js
         * p1.userprojects {
         *   started: true
         * }
         * user.setProjects([p1, p2], {started: false}) // The default value is false, but p1 overrides that.
         * ```
         *
         * Similarily, when fetching through a join table with custom attributes, these attributes will be
         * available as an object with the name of the through model.
         * ```js
         * user.getProjects().then(function (projects) {
         *   var p1 = projects[0]
         *   p1.userprojects.started // Is this project started yet?
         * })
         * ```
         *
         * @param target The model that will be associated with hasOne relationship
         * @param options Options for the association
         * @return return type of association
         *
         */
        belongsToMany(target: Model<any, any>, options: AssociationOptionsBelongsToMany): IncludeAssociation;

    }

    //
    //  DataTypes
    // ~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/data-types.js
    //

    /**
     * Abstract DataType interface. Use this if you want to create an interface that has a value any of the
     * DataTypes that Sequelize supports.
     */
    interface DataTypeAbstract {

        /**
         * Although this is not needed for the definitions itself, we want to make sure that DataTypeAbstract is not
         * something than can be evaluated to an empty object.
         */
        dialectTypes: string;

    }

    interface DataTypeAbstractString<T> extends DataTypeAbstract {

        /**
         * A variable length string. Default length 255
         */
        (options?: { length: number }): T;
        (length: number): T;

        /**
         * Property BINARY for the type
         */
        BINARY: T;

    }

    interface DataTypeString extends DataTypeAbstractString<DataTypeString> { }

    interface DataTypeChar extends DataTypeAbstractString<DataTypeChar> { }

    interface DataTypeText extends DataTypeAbstract {

        /**
         * Length of the text field.
         *
         * Available lengths: `tiny`, `medium`, `long`
         */
        (options?: { length: string }): DataTypeText;
        (length: string): DataTypeText;

    }

    interface DataTypeAbstractNumber<T> extends DataTypeAbstract {
        UNSIGNED: T;
        ZEROFILL: T;
    }

    interface DataTypeNumber extends DataTypeAbstractNumber<DataTypeNumber> { }

    interface DataTypeInteger extends DataTypeAbstractNumber<DataTypeInteger> {

        /**
         * Length of the number field.
         */
        (options?: { length: number }): DataTypeInteger;
        (length: number): DataTypeInteger;

    }

    interface DataTypeTinyInt extends DataTypeAbstractNumber<DataTypeTinyInt> {

        /**
         * Length of the number field.
         */
        (options?: { length: number }): DataTypeTinyInt;
        (length: number): DataTypeTinyInt;

    }
    interface DataTypeSmallInt extends DataTypeAbstractNumber<DataTypeSmallInt> {

        /**
         * Length of the number field.
         */
        (options?: { length: number }): DataTypeSmallInt;
        (length: number): DataTypeSmallInt;

    }
    interface DataTypeMediumInt extends DataTypeAbstractNumber<DataTypeMediumInt> {

        /**
         * Length of the number field.
         */
        (options?: { length: number }): DataTypeMediumInt;
        (length: number): DataTypeMediumInt;

    }

    interface DataTypeBigInt extends DataTypeAbstractNumber<DataTypeBigInt> {

        /**
         * Length of the number field.
         */
        (options?: { length: number }): DataTypeBigInt;
        (length: number): DataTypeBigInt;

    }

    interface DataTypeFloat extends DataTypeAbstractNumber<DataTypeFloat> {

        /**
         * Length of the number field and decimals of the float
         */
        (options?: { length: number, decimals?: number }): DataTypeFloat;
        (length: number, decimals?: number): DataTypeFloat;

    }

    interface DataTypeReal extends DataTypeAbstractNumber<DataTypeReal> {

        /**
         * Length of the number field and decimals of the real
         */
        (options?: { length: number, decimals?: number }): DataTypeReal;
        (length: number, decimals?: number): DataTypeReal;

    }

    interface DataTypeDouble extends DataTypeAbstractNumber<DataTypeDouble> {

        /**
         * Length of the number field and decimals of the real
         */
        (options?: { length: number, decimals?: number }): DataTypeDouble;
        (length: number, decimals?: number): DataTypeDouble;

    }

    interface DataTypeDecimal extends DataTypeAbstractNumber<DataTypeDecimal> {

        /**
         * Precision and scale for the decimal number
         */
        (options?: { precision: number, scale?: number }): DataTypeDecimal;
        (precision: number, scale?: number): DataTypeDecimal;

    }

    interface DataTypeBoolean extends DataTypeAbstract { }

    interface DataTypeTime extends DataTypeAbstract { }

    interface DataTypeDate extends DataTypeAbstract {

        /**
         * Length of decimal places of time
         */
        (options?: { length?: number }): DataTypeDate;
        (length?: number): DataTypeDate;

    }

    interface DataTypeDateOnly extends DataTypeAbstract { }

    interface DataTypeHStore extends DataTypeAbstract { }

    interface DataTypeJSONType extends DataTypeAbstract { }

    interface DataTypeJSONB extends DataTypeAbstract { }

    interface DataTypeNow extends DataTypeAbstract { }

    interface DataTypeBlob extends DataTypeAbstract {

        /**
         * Length of the blob field.
         *
         * Available lengths: `tiny`, `medium`, `long`
         */
        (options?: { length: string }): DataTypeBlob;
        (length: string): DataTypeBlob;

    }

    interface DataTypeRange extends DataTypeAbstract {

        /**
         * Range field for Postgre
         *
         * Accepts subtype any of the ranges
         */
        (options?: { subtype: DataTypeAbstract }): DataTypeRange;
        (subtype: DataTypeAbstract): DataTypeRange;

    }

    interface DataTypeAbstractUUID<T> extends DataTypeAbstract {
        (): T;
    }

    interface DataTypeUUID extends DataTypeAbstractUUID<DataTypeUUID> { }

    interface DataTypeUUIDv1 extends DataTypeAbstractUUID<DataTypeUUIDv1> { }

    interface DataTypeUUIDv4 extends DataTypeAbstractUUID<DataTypeUUIDv4> { }

    interface DataTypeVirtual extends DataTypeAbstract {

        /**
         * Virtual field
         *
         * Accepts subtype any of the DataTypes
         * Array of required attributes that are available on the model
         */
        new (subtype: DataTypeAbstract, requireAttributes?: Array<string>): DataTypeVirtual;
    }

    interface DataTypeEnum extends DataTypeAbstract {

        /**
         * Enum field
         *
         * Accepts values
         */
        (options?: { values: string | string[] }): DataTypeEnum;
        (values: string | string[]): DataTypeEnum;
        (...args: string[]): DataTypeEnum;

    }

    interface DataTypeArray extends DataTypeAbstract {

        /**
         * Array field for Postgre
         *
         * Accepts type any of the DataTypes
         */
        (options: { type: DataTypeAbstract }): DataTypeArray;
        (type: DataTypeAbstract): DataTypeArray;

    }

    interface DataTypeGeometry extends DataTypeAbstract {

        /**
         * Geometry field for Postgres
         */
        (type: string, srid?: number): DataTypeGeometry;

    }

    /**
     * A convenience class holding commonly used data types. The datatypes are used when definining a new model
     * using
     * `Sequelize.define`, like this:
     *
     * ```js
     * sequelize.define('model', {
     *   column: DataTypes.INTEGER
     * })
     * ```
     * When defining a model you can just as easily pass a string as type, but often using the types defined here
     * is
     * beneficial. For example, using `DataTypes.BLOB`, mean that that column will be returned as an instance of
     * `Buffer` when being fetched by sequelize.
     *
     * Some data types have special properties that can be accessed in order to change the data type.
     * For example, to get an unsigned integer with zerofill you can do `DataTypes.INTEGER.UNSIGNED.ZEROFILL`.
     * The order you access the properties in do not matter, so `DataTypes.INTEGER.ZEROFILL.UNSIGNED` is fine as
     * well. The available properties are listed under each data type.
     *
     * To provide a length for the data type, you can invoke it like a function: `INTEGER(2)`
     *
     * Three of the values provided here (`NOW`, `UUIDV1` and `UUIDV4`) are special default values, that should not
     * be used to define types. Instead they are used as shorthands for defining default values. For example, to
     * get a uuid field with a default value generated following v1 of the UUID standard:
     *
     * ```js
     * sequelize.define('model', {
     *   uuid: {
     *     type: DataTypes.UUID,
     *     defaultValue: DataTypes.UUIDV1,
     *     primaryKey: true
     *   }
     * })
     * ```
     */
    interface DataTypes {
        ABSTRACT: DataTypeAbstract;
        STRING: DataTypeString;
        CHAR: DataTypeChar;
        TEXT: DataTypeText;
        NUMBER: DataTypeNumber;
        TINYINT: DataTypeTinyInt;
        SMALLINT: DataTypeSmallInt;
        MEDIUMINT: DataTypeMediumInt;
        INTEGER: DataTypeInteger;
        BIGINT: DataTypeBigInt;
        FLOAT: DataTypeFloat;
        TIME: DataTypeTime;
        DATE: DataTypeDate;
        DATEONLY: DataTypeDateOnly;
        BOOLEAN: DataTypeBoolean;
        NOW: DataTypeNow;
        BLOB: DataTypeBlob;
        DECIMAL: DataTypeDecimal;
        NUMERIC: DataTypeDecimal;
        UUID: DataTypeUUID;
        UUIDV1: DataTypeUUIDv1;
        UUIDV4: DataTypeUUIDv4;
        HSTORE: DataTypeHStore;
        JSON: DataTypeJSONType;
        JSONB: DataTypeJSONB;
        VIRTUAL: DataTypeVirtual;
        ARRAY: DataTypeArray;
        NONE: DataTypeVirtual;
        ENUM: DataTypeEnum;
        RANGE: DataTypeRange;
        REAL: DataTypeReal;
        DOUBLE: DataTypeDouble;
        "DOUBLE PRECISION": DataTypeDouble;
        GEOMETRY: DataTypeGeometry;
    }

    //
    //  Deferrable
    // ~~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/deferrable.js
    //

    /**
     * Abstract Deferrable interface. Use this if you want to create an interface that has a value any of the
     * Deferrables that Sequelize supports.
     */
    interface DeferrableAbstract {

        /**
         * Although this is not needed for the definitions itself, we want to make sure that DeferrableAbstract is
         * not something than can be evaluated to an empty object.
         */
        toString(): string;
        toSql(): string;

    }

    interface DeferrableInitiallyDeferred extends DeferrableAbstract {

        /**
         * A property that will defer constraints checks to the end of transactions.
         */
        (): DeferrableInitiallyDeferred;

    }

    interface DeferrableInitiallyImmediate extends DeferrableAbstract {

        /**
         * A property that will trigger the constraint checks immediately
         */
        (): DeferrableInitiallyImmediate;

    }

    interface DeferrableNot extends DeferrableAbstract {

        /**
         * A property that will set the constraints to not deferred. This is the default in PostgreSQL and it make
         * it impossible to dynamically defer the constraints within a transaction.
         */
        (): DeferrableNot;

    }

    interface DeferrableSetDeferred extends DeferrableAbstract {

        /**
         * A property that will trigger an additional query at the beginning of a
         * transaction which sets the constraints to deferred.
         *
         * @param constraints An array of constraint names. Will defer all constraints by default.
         */
        (constraints: string[]): DeferrableSetDeferred;

    }

    interface DeferrableSetImmediate extends DeferrableAbstract {

        /**
         * A property that will trigger an additional query at the beginning of a
         * transaction which sets the constraints to immediately.
         *
         * @param constraints An array of constraint names. Will defer all constraints by default.
         */
        (constraints: string[]): DeferrableSetImmediate;

    }

    /**
     * A collection of properties related to deferrable constraints. It can be used to
     * make foreign key constraints deferrable and to set the constaints within a
     * transaction. This is only supported in PostgreSQL.
     *
     * The foreign keys can be configured like this. It will create a foreign key
     * that will check the constraints immediately when the data was inserted.
     *
     * ```js
     * sequelize.define('Model', {
     *   foreign_id: {
     *     type: Sequelize.INTEGER,
     *     references: {
     *       model: OtherModel,
     *       key: 'id',
     *       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
     *     }
     *   }
     * });
     * ```
     *
     * The constraints can be configured in a transaction like this. It will
     * trigger a query once the transaction has been started and set the constraints
     * to be checked at the very end of the transaction.
     *
     * ```js
     * sequelize.transaction({
 *   deferrable: Sequelize.Deferrable.SET_DEFERRED
 * });
     * ```
     */
    interface Deferrable {
        INITIALLY_DEFERRED: DeferrableInitiallyDeferred;
        INITIALLY_IMMEDIATE: DeferrableInitiallyImmediate;
        NOT: DeferrableNot;
        SET_DEFERRED: DeferrableSetDeferred;
        SET_IMMEDIATE: DeferrableSetImmediate;
    }

    //
    //  Errors
    // ~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/errors.js
    //

    /**
     * The Base Error all Sequelize Errors inherit from.
     */
    interface BaseError extends Error, ErrorConstructor { }

    interface ValidationError extends BaseError {

        /**
         * Validation Error. Thrown when the sequelize validation has failed. The error contains an `errors`
         * property, which is an array with 1 or more ValidationErrorItems, one for each validation that failed.
         *
         * @param message Error message
         * @param errors  Array of ValidationErrorItem objects describing the validation errors
         */
        new (message: string, errors?: ValidationErrorItem[]): ValidationError;

        /**
         * Gets all validation error items for the path / field specified.
         *
         * @param path The path to be checked for error items
         */
        get(path: string): ValidationErrorItem[];

        /** Array of ValidationErrorItem objects describing the validation errors */
        errors: ValidationErrorItem[];

    }

    interface ValidationErrorItem extends BaseError {

        /**
         * Validation Error Item
         * Instances of this class are included in the `ValidationError.errors` property.
         *
         * @param message An error message
         * @param type The type of the validation error
         * @param path The field that triggered the validation error
         * @param value The value that generated the error
         */
        new (message: string, type: string, path: string, value: string): ValidationErrorItem;

        /** An error message */
        message: string;

        /** The type of the validation error */
        type: string;

        /** The field that triggered the validation error */
        path: string;

        /** The value that generated the error */
        value: string;

    }

    interface DatabaseError extends BaseError {

        /**
         * A base class for all database related errors.
         */
        new (parent: Error): DatabaseError;

    }

    interface TimeoutError extends DatabaseError {

        /**
         * Thrown when a database query times out because of a deadlock
         */
        new (parent: Error): TimeoutError;

    }

    interface UniqueConstraintError extends ValidationError {

        /**
         * Thrown when a unique constraint is violated in the database
         */
        new (options: { parent?: Error, message?: string, errors?: Object }): UniqueConstraintError;

    }

    interface ForeignKeyConstraintError extends DatabaseError {

        /**
         * Thrown when a foreign key constraint is violated in the database
         */
        new (options: { parent?: Error, message?: string, index?: string, fields?: string[], table?: string }): ForeignKeyConstraintError;

    }

    interface ExclusionConstraintError extends DatabaseError {

        /**
         * Thrown when an exclusion constraint is violated in the database
         */
        new (options: { parent?: Error, message?: string, constraint?: string, fields?: string[], table?: string }): ExclusionConstraintError;

    }

    interface ConnectionError extends BaseError {

        /**
         * A base class for all connection related errors.
         */
        new (parent: Error): ConnectionError;

    }

    interface ConnectionRefusedError extends ConnectionError {

        /**
         * Thrown when a connection to a database is refused
         */
        new (parent: Error): ConnectionRefusedError;

    }

    interface AccessDeniedError extends ConnectionError {

        /**
         * Thrown when a connection to a database is refused due to insufficient privileges
         */
        new (parent: Error): AccessDeniedError;

    }

    interface HostNotFoundError extends ConnectionError {

        /**
         * Thrown when a connection to a database has a hostname that was not found
         */
        new (parent: Error): HostNotFoundError;

    }

    interface HostNotReachableError extends ConnectionError {

        /**
         * Thrown when a connection to a database has a hostname that was not reachable
         */
        new (parent: Error): HostNotReachableError;

    }

    interface InvalidConnectionError extends ConnectionError {

        /**
         * Thrown when a connection to a database has invalid values for any of the connection parameters
         */
        new (parent: Error): InvalidConnectionError;

    }

    interface ConnectionTimedOutError extends ConnectionError {

        /**
         * Thrown when a connection to a database times out
         */
        new (parent: Error): ConnectionTimedOutError;

    }

    interface EmptyResultError extends BaseError {

        /**
         * Thrown when a record was not found, Usually used with rejectOnEmpty mode (see message for details)
         */
        new (parent: Error): EmptyResultError;

    }

    /**
     * Sequelize provides a host of custom error classes, to allow you to do easier debugging. All of these errors
     * are exposed on the sequelize object and the sequelize constructor. All sequelize errors inherit from the
     * base JS error object.
     */
    interface Errors {
        Error: BaseError;
        ValidationError: ValidationError;
        ValidationErrorItem: ValidationErrorItem;
        DatabaseError: DatabaseError;
        TimeoutError: TimeoutError;
        UniqueConstraintError: UniqueConstraintError;
        ExclusionConstraintError: ExclusionConstraintError;
        ForeignKeyConstraintError: ForeignKeyConstraintError;
        ConnectionError: ConnectionError;
        ConnectionRefusedError: ConnectionRefusedError;
        AccessDeniedError: AccessDeniedError;
        HostNotFoundError: HostNotFoundError;
        HostNotReachableError: HostNotReachableError;
        InvalidConnectionError: InvalidConnectionError;
        ConnectionTimedOutError: ConnectionTimedOutError;
        EmptyResultError: EmptyResultError;
    }

    //
    //  Hooks
    // ~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/hooks.js
    //

    /**
     * Options for Sequelize.define. We mostly duplicate the Hooks here, since there is no way to combine the two
     * interfaces.
     *
     * beforeValidate, afterValidate, beforeBulkCreate, beforeBulkDestroy, beforeBulkUpdate, beforeCreate,
     * beforeDestroy, beforeUpdate, afterCreate, afterDestroy, afterUpdate, afterBulkCreate, afterBulkDestroy and
     * afterBulkUpdate.
     */
    interface HooksDefineOptions<TInstance> {

        beforeValidate?: (instance: TInstance, options: Object, fn?: Function) => any;
        afterValidate?: (instance: TInstance, options: Object, fn?: Function) => any;
        beforeCreate?: (attributes: TInstance, options: Object, fn?: Function) => any;
        afterCreate?: (attributes: TInstance, options: Object, fn?: Function) => any;
        beforeDestroy?: (instance: TInstance, options: Object, fn?: Function) => any;
        beforeDelete?: (instance: TInstance, options: Object, fn?: Function) => any;
        afterDestroy?: (instance: TInstance, options: Object, fn?: Function) => any;
        afterDelete?: (instance: TInstance, options: Object, fn?: Function) => any;
        beforeUpdate?: (instance: TInstance, options: Object, fn?: Function) => any;
        afterUpdate?: (instance: TInstance, options: Object, fn?: Function) => any;
        beforeBulkCreate?: (instances: TInstance[], options: Object, fn?: Function) => any;
        afterBulkCreate?: (instances: TInstance[], options: Object, fn?: Function) => any;
        beforeBulkDestroy?: (options: Object, fn?: Function) => any;
        beforeBulkDelete?: (options: Object, fn?: Function) => any;
        afterBulkDestroy?: (options: Object, fn?: Function) => any;
        afterBulkDelete?: (options: Object, fn?: Function) => any;
        beforeBulkUpdate?: (options: Object, fn?: Function) => any;
        afterBulkUpdate?: (options: Object, fn?: Function) => any;
        beforeFind?: (options: Object, fn?: Function) => any;
        beforeFindAfterExpandIncludeAll?: (options: Object, fn?: Function) => any;
        beforeFindAfterOptions?: (options: Object, fn?: Function) => any;
        afterFind?: (instancesOrInstance: TInstance[] | TInstance, options: Object,
            fn?: Function) => any;

    }

    /**
     * Hooks are function that are called before and after  (bulk-) creation/updating/deletion and validation.
     * Hooks can be added to you models in three ways:
     *
     * 1. By specifying them as options in `sequelize.define`
     * 2. By calling `hook()` with a string and your hook handler function
     * 3. By calling the function with the same name as the hook you want
     *
     * ```js
     * // Method 1
     * sequelize.define(name, { attributes }, {
     *   hooks: {
     *     beforeBulkCreate: function () {
     *       // can be a single function
     *     },
     *     beforeValidate: [
     *       function () {},
     *       function() {} // Or an array of several
     *     ]
     *   }
     * })
     *
     * // Method 2
     * Model.hook('afterDestroy', function () {})
     *
     * // Method 3
     * Model.afterBulkUpdate(function () {})
     * ```
     *
     * @see Sequelize.define
     */
    interface Hooks<TInstance> {

        /**
         * Add a hook to the model
         *
         * @param hookType
         * @param name Provide a name for the hook function. It can be used to remove the hook later or to order
         *     hooks based on some sort of priority system in the future.
         * @param fn The hook function
         *
         * @alias hook
         */
        addHook(hookType: string, name: string, fn: Function): Hooks<TInstance>;
        addHook(hookType: string, fn: Function): Hooks<TInstance>;
        hook(hookType: string, name: string, fn: Function): Hooks<TInstance>;
        hook(hookType: string, fn: Function): Hooks<TInstance>;

        /**
         * Remove hook from the model
         *
         * @param hookType
         * @param name
         */
        removeHook(hookType: string, name: string): Hooks<TInstance>;

        /**
         * Check whether the mode has any hooks of this type
         *
         * @param hookType
         *
         * @alias hasHooks
         */
        hasHook(hookType: string): boolean;
        hasHooks(hookType: string): boolean;

        /**
         * A hook that is run before validation
         *
         * @param name
         * @param fn A callback function that is called with instance, options
         */
        beforeValidate(name: string,
            fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        beforeValidate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after validation
         *
         * @param name
         * @param fn A callback function that is called with instance, options
         */
        afterValidate(name: string,
            fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        afterValidate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before creating a single instance
         *
         * @param name
         * @param fn A callback function that is called with attributes, options
         */
        beforeCreate(name: string,
            fn: (attributes: TInstance, options: Object, fn?: Function) => void): void;
        beforeCreate(fn: (attributes: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after creating a single instance
         *
         * @param name
         * @param fn A callback function that is called with attributes, options
         */
        afterCreate(name: string,
            fn: (attributes: TInstance, options: Object, fn?: Function) => void): void;
        afterCreate(fn: (attributes: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before destroying a single instance
         *
         * @param name
         * @param fn A callback function that is called with instance, options
         * @alias beforeDelete
         */
        beforeDestroy(name: string,
            fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        beforeDestroy(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        beforeDelete(name: string,
            fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        beforeDelete(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after destroying a single instance
         *
         * @param name
         * @param fn A callback function that is called with instance, options
         * @alias afterDelete
         */
        afterDestroy(name: string,
            fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        afterDestroy(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        afterDelete(name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        afterDelete(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before updating a single instance
         *
         * @param name
         * @param fn A callback function that is called with instance, options
         */
        beforeUpdate(name: string,
            fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        beforeUpdate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after updating a single instance
         *
         * @param name
         * @param fn A callback function that is called with instance, options
         */
        afterUpdate(name: string, fn: (instance: TInstance, options: Object, fn?: Function) => void): void;
        afterUpdate(fn: (instance: TInstance, options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before creating instances in bulk
         *
         * @param name
         * @param fn A callback function that is called with instances, options
         */
        beforeBulkCreate(name: string,
            fn: (instances: TInstance[], options: Object, fn?: Function) => void): void;
        beforeBulkCreate(fn: (instances: TInstance[], options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after creating instances in bulk
         *
         * @param name
         * @param fn A callback function that is called with instances, options
         * @name afterBulkCreate
         */
        afterBulkCreate(name: string,
            fn: (instances: TInstance[], options: Object, fn?: Function) => void): void;
        afterBulkCreate(fn: (instances: TInstance[], options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before destroying instances in bulk
         *
         * @param name
         * @param fn   A callback function that is called with options
         *
         * @alias beforeBulkDelete
         */
        beforeBulkDestroy(name: string, fn: (options: Object, fn?: Function) => void): void;
        beforeBulkDestroy(fn: (options: Object, fn?: Function) => void): void;
        beforeBulkDelete(name: string, fn: (options: Object, fn?: Function) => void): void;
        beforeBulkDelete(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after destroying instances in bulk
         *
         * @param name
         * @param fn   A callback function that is called with options
         *
         * @alias afterBulkDelete
         */
        afterBulkDestroy(name: string, fn: (options: Object, fn?: Function) => void): void;
        afterBulkDestroy(fn: (options: Object, fn?: Function) => void): void;
        afterBulkDelete(name: string, fn: (options: Object, fn?: Function) => void): void;
        afterBulkDelete(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after updating instances in bulk
         *
         * @param name
         * @param fn   A callback function that is called with options
         */
        beforeBulkUpdate(name: string, fn: (options: Object, fn?: Function) => void): void;
        beforeBulkUpdate(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after updating instances in bulk
         *
         * @param name
         * @param fn   A callback function that is called with options
         */
        afterBulkUpdate(name: string, fn: (options: Object, fn?: Function) => void): void;
        afterBulkUpdate(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before a find (select) query
         *
         * @param name
         * @param fn   A callback function that is called with options
         */
        beforeFind(name: string, fn: (options: Object, fn?: Function) => void): void;
        beforeFind(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before a find (select) query, after any { include: {all: ...} } options are expanded
         *
         * @param name
         * @param fn   A callback function that is called with options
         */
        beforeFindAfterExpandIncludeAll(name: string,
            fn: (options: Object, fn?: Function) => void): void;
        beforeFindAfterExpandIncludeAll(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run before a find (select) query, after all option parsing is complete
         *
         * @param name
         * @param fn   A callback function that is called with options
         */
        beforeFindAfterOptions(name: string, fn: (options: Object, fn?: Function) => void): void;
        beforeFindAfterOptions(fn: (options: Object, fn?: Function) => void): void;

        /**
         * A hook that is run after a find (select) query
         *
         * @param name
         * @param fn   A callback function that is called with instance(s), options
         */
        afterFind(name: string,
            fn: (instancesOrInstance: TInstance[] | TInstance, options: Object,
                fn?: Function) => void): void;
        afterFind(fn: (instancesOrInstance: TInstance[] | TInstance, options: Object,
            fn?: Function) => void): void;

        /**
         * A hook that is run before a define call
         *
         * @param name
         * @param fn   A callback function that is called with attributes, options
         */
        beforeDefine(name: string, fn: (attributes: DefineAttributes, options: Object) => void): void;
        beforeDefine(fn: (attributes: DefineAttributes, options: Object) => void): void;

        /**
         * A hook that is run after a define call
         *
         * @param name
         * @param fn   A callback function that is called with factory
         */
        afterDefine(name: string, fn: (model: Model<TInstance, any>) => void): void;
        afterDefine(fn: (model: Model<TInstance, any>) => void): void;

        /**
         * A hook that is run before Sequelize() call
         *
         * @param name
         * @param fn   A callback function that is called with config, options
         */
        beforeInit(name: string, fn: (config: Object, options: Object) => void): void;
        beforeInit(fn: (config: Object, options: Object) => void): void;

        /**
         * A hook that is run after Sequelize() call
         *
         * @param name
         * @param fn   A callback function that is called with sequelize
         */
        afterInit(name: string, fn: (sequelize: Sequelize) => void): void;
        afterInit(fn: (sequelize: Sequelize) => void): void;

        /**
         * A hook that is run before Model.sync call
         *
         * @param name
         * @param fn   	A callback function that is called with options passed to Model.sync
         */
        beforeSync(name: string, fn: (options: SyncOptions) => void): void;
        beforeSync(fn: (options: SyncOptions) => void): void;

        /**
         * A hook that is run after Model.sync call
         *
         * @param name
         * @param fn   	A callback function that is called with options passed to Model.sync
         */
        afterSync(name: string, fn: (options: SyncOptions) => void): void;
        afterSync(fn: (options: SyncOptions) => void): void;

        /**
         * A hook that is run before sequelize.sync call
         *
         * @param name
         * @param fn    A callback function that is called with options passed to sequelize.sync
         */
        beforeBulkSync(name: string, fn: (options: SyncOptions) => void): void;
        beforeBulkSync(fn: (options: SyncOptions) => void): void;

        /**
         * A hook that is run after sequelize.sync call
         *
         * @param name
         * @param fn   A callback function that is called with options passed to sequelize.sync
         */
        afterBulkSync(name: string, fn: (options: SyncOptions) => void): void;
        afterBulkSync(fn: (options: SyncOptions) => void): void;
    }

    //
    //  Instance
    // ~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/instance.js
    //

    /**
     * Options used for Instance.increment method
     */
    interface InstanceIncrementDecrementOptions {

        /**
         * The number to increment by
         *
         * Defaults to 1
         */
        by?: number;

        /**
         * A function that gets executed while running the query to log the sql.
         */
        logging?: boolean | Function;

        /**
         * Transaction to run query under
         */
        transaction?: Transaction;

        /**
         * A hash of attributes to describe your search. See above for examples.
         */
        where?: AnyWhereOptions | Array<col | and | or | string>;

    }

    /**
     * Options used for Instance.restore method
     */
    interface InstanceRestoreOptions {

        /**
         * A function that gets executed while running the query to log the sql.
         */
        logging?: boolean | Function;

        /**
         * Transaction to run query under
         */
        transaction?: Transaction;
    }

    /**
     * Options used for Instance.destroy method
     */
    interface InstanceDestroyOptions {

        /**
         * If set to true, paranoid models will actually be deleted
         */
        force?: boolean;

        /**
         * A function that gets executed while running the query to log the sql.
         */
        logging?: boolean | Function;

        /**
         * Transaction to run the query in
         */
        transaction?: Transaction;

    }

    /**
     * Options used for Instance.update method
     */
    interface InstanceUpdateOptions extends InstanceSaveOptions, InstanceSetOptions {

        /**
         * A hash of attributes to describe your search. See above for examples.
         */
        where?: AnyWhereOptions | Array<col | and | or | string>;

    }

    /**
     * Options used for Instance.set method
     */
    interface InstanceSetOptions {

        /**
         * If set to true, field and virtual setters will be ignored
         */
        raw?: boolean;

        /**
         * Clear all previously set data values
         */
        reset?: boolean;

    }

    /**
     * Options used for Instance.save method
     */
    interface InstanceSaveOptions extends FieldsOptions, LoggingOptions, ReturningOptions, SearchPathOptions {

        /**
         * If true, the updatedAt timestamp will not be updated.
         *
         * Defaults to false
         */
        silent?: boolean;

    }

    /**
     * This class represents an single instance, a database row. You might see it referred to as both Instance and
     * instance. You should not instantiate the Instance class directly, instead you access it using the finder and
     * creation methods on the model.
     *
     * Instance instances operate with the concept of a `dataValues` property, which stores the actual values
     * represented by the instance. By default, the values from dataValues can also be accessed directly from the
     * Instance, that is:
     * ```js
     * instance.field
     * // is the same as
     * instance.get('field')
     * // is the same as
     * instance.getDataValue('field')
     * ```
     * However, if getters and/or setters are defined for `field` they will be invoked, instead of returning the
     * value from `dataValues`. Accessing properties directly or using `get` is preferred for regular use,
     * `getDataValue` should only be used for custom getters.
     *
     * @see Sequelize.define for more information about getters and setters
     */
    interface Instance<TAttributes> {

        /**
         * Returns true if this instance has not yet been persisted to the database
         */
        isNewRecord: boolean;

        /**
         * Returns the Model the instance was created from.
         *
         * @see Model
         */
        Model: Model<this, TAttributes>;

        /**
         * A reference to the sequelize instance
         */
        sequelize: Sequelize;

        /**
         * Get an object representing the query for this instance, use with `options.where`
         */
        where(): Object;

        /**
         * Get the value of the underlying data value
         */
        getDataValue(key: keyof TAttributes): any;

        /**
         * Update the underlying data value
         */
        setDataValue<K extends keyof TAttributes>(
            key: K,
            value: TAttributes[K]
        ): void;

        /**
         * If no key is given, returns all values of the instance, also invoking virtual getters.
         *
         * If key is given and a field or virtual getter is present for the key it will call that getter - else it
         * will return the value for key.
         *
         * @param options.plain If set to true, included instances will be returned as plain objects
         */
        get(key: keyof TAttributes, options?: { plain?: boolean, clone?: boolean }): any;
        get(options?: { plain?: boolean, clone?: boolean }): TAttributes;

        /**
         * Set is used to update values on the instance (the sequelize representation of the instance that is,
         * remember that nothing will be persisted before you actually call `save`). In its most basic form `set`
         * will update a value stored in the underlying `dataValues` object. However, if a custom setter function
         * is defined for the key, that function will be called instead. To bypass the setter, you can pass `raw:
         * true` in the options object.
         *
         * If set is called with an object, it will loop over the object, and call set recursively for each key,
         * value pair. If you set raw to true, the underlying dataValues will either be set directly to the object
         * passed, or used to extend dataValues, if dataValues already contain values.
         *
         * When set is called, the previous value of the field is stored and sets a changed flag(see `changed`).
         *
         * Set can also be used to build instances for associations, if you have values for those.
         * When using set with associations you need to make sure the property key matches the alias of the
         * association while also making sure that the proper include options have been set (from .build() or
         * .find())
         *
         * If called with a dot.seperated key on a JSON/JSONB attribute it will set the value nested and flag the
         * entire object as changed.
         *
         * @param options.raw If set to true, field and virtual setters will be ignored
         * @param options.reset Clear all previously set data values
         */
        set<K extends keyof TAttributes>(
            key: K,
            value: TAttributes[K],
            options?: InstanceSetOptions
        ): this;
        set(keys: Object, options?: InstanceSetOptions): this;
        setAttributes<K extends keyof TAttributes>(
            key: K,
            value: TAttributes[K],
            options?: InstanceSetOptions
        ): this;
        setAttributes(keys: Object, options?: InstanceSetOptions): this;

        /**
         * If changed is called with a string it will return a boolean indicating whether the value of that key in
         * `dataValues` is different from the value in `_previousDataValues`.
         *
         * If changed is called without an argument, it will return an array of keys that have changed.
         *
         * If changed is called without an argument and no keys have changed, it will return `false`.
         */
        changed(key: keyof TAttributes): boolean;
        changed(): boolean | string[];

        /**
         * Returns the previous value for key from `_previousDataValues`.
         */
        previous(key: keyof TAttributes): any;

        /**
         * Validate this instance, and if the validation passes, persist it to the database.
         *
         * On success, the callback will be called with this instance. On validation error, the callback will be
         * called with an instance of `Sequelize.ValidationError`. This error will have a property for each of the
         * fields for which validation failed, with the error message for that field.
         */
        save(options?: InstanceSaveOptions): Promise<this>;

        /**
         * Refresh the current instance in-place, i.e. update the object with current data from the DB and return
         * the same object. This is different from doing a `find(Instance.id)`, because that would create and
         * return a new instance. With this method, all references to the Instance are updated with the new data
         * and no new objects are created.
         */
        reload(options?: AnyFindOptions): Promise<this>;

        /**
         * Validate the attribute of this instance according to validation rules set in the model definition.
         *
         * Emits null if and only if validation successful; otherwise an Error instance containing
         * { field name : [error msgs] } entries.
         *
         * @param options.skip An array of strings. All properties that are in this array will not be validated
         */
        validate(options?: { skip?: string[] }): Promise<ValidationError>;

        /**
         * This is the same as calling `set` and then calling `save`.
         */
        update<K extends keyof TAttributes>(
            key: K,
            value: TAttributes[K],
            options?: InstanceUpdateOptions
        ): Promise<this>;
        update(keys: Object, options?: InstanceUpdateOptions): Promise<this>;
        updateAttributes<K extends keyof TAttributes>(
            key: K,
            value: TAttributes[K],
            options?: InstanceUpdateOptions
        ): Promise<this>;
        updateAttributes(keys: Object, options?: InstanceUpdateOptions): Promise<this>;

        /**
         * Destroy the row corresponding to this instance. Depending on your setting for paranoid, the row will
         * either be completely deleted, or have its deletedAt timestamp set to the current time.
         */
        destroy(options?: InstanceDestroyOptions): Promise<void>;

        /**
         * Restore the row corresponding to this instance. Only available for paranoid models.
         */
        restore(options?: InstanceRestoreOptions): Promise<void>;

        /**
         * Increment the value of one or more columns. This is done in the database, which means it does not use
         * the values currently stored on the Instance. The increment is done using a
         * ```sql
         * SET column = column + X
         * ```
         * query. To get the correct value after an increment into the Instance you should do a reload.
         *
         *```js
         * instance.increment('number') // increment number by 1
         * instance.increment(['number', 'count'], { by: 2 }) // increment number and count by 2
         * instance.increment({ answer: 42, tries: 1}, { by: 2 }) // increment answer by 42, and tries by 1.
         *                                                        // `by` is ignored, since each column has its own
         *                                                        // value
         * ```
         *
         * @param fields If a string is provided, that column is incremented by the value of `by` given in options.
         *               If an array is provided, the same is true for each column.
         *               If and object is provided, each column is incremented by the value given.
         */
        increment(fields: Partial<TAttributes> | Array<keyof TAttributes> | keyof TAttributes,
            options?: InstanceIncrementDecrementOptions): Promise<this>;

        /**
         * Decrement the value of one or more columns. This is done in the database, which means it does not use
         * the values currently stored on the Instance. The decrement is done using a
         * ```sql
         * SET column = column - X
         * ```
         * query. To get the correct value after an decrement into the Instance you should do a reload.
         *
         * ```js
         * instance.decrement('number') // decrement number by 1
         * instance.decrement(['number', 'count'], { by: 2 }) // decrement number and count by 2
         * instance.decrement({ answer: 42, tries: 1}, { by: 2 }) // decrement answer by 42, and tries by 1.
         *                                                        // `by` is ignored, since each column has its own
         *                                                        // value
         * ```
         *
         * @param fields If a string is provided, that column is decremented by the value of `by` given in options.
         *               If an array is provided, the same is true for each column.
         *               If and object is provided, each column is decremented by the value given
         */
        decrement(fields: Partial<TAttributes> | Array<keyof TAttributes> | keyof TAttributes,
            options?: InstanceIncrementDecrementOptions): Promise<this>;

        /**
         * Check whether all values of this and `other` Instance are the same
         */
        equals(other: Instance<any>): boolean;

        /**
         * Check if this is eqaul to one of `others` by calling equals
         */
        equalsOneOf(others: Instance<any>[]): boolean;

        /**
         * Convert the instance to a JSON representation. Proxies to calling `get` with no keys. This means get all
         * values gotten from the DB, and apply all custom getters.
         */
        toJSON(): TAttributes;

    }

    interface LoggingOptions {
        /**
        * A function that gets executed while running the query to log the sql.
        */

        logging?: boolean | Function;

        /**
         * Print query execution time in milliseconds when logging SQL.
         */
        benchmark?: boolean;
    }

    interface SearchPathOptions {
        /**
         * Transaction to run query under
         */
        transaction?: Transaction;

        /**
         * An optional parameter to specify the schema search_path (Postgres only)
         */
        searchPath?: string;
    }

    interface ReturningOptions {
        /**
         * Append RETURNING * to get back auto generated values (Postgres only)
         */
        returning?: boolean;
    }

    interface FieldsOptions {
        /**
         * Run validations before the row is inserted
         */
        validate?: boolean;

        /**
         * The fields to insert / update. Defaults to all fields
         */
        fields?: string[];
    }

    //
    //  Model
    // ~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/model.js
    //

    /**
     * Options to pass to Model on drop
     */
    interface DropOptions extends LoggingOptions {

        /**
         * Also drop all objects depending on this table, such as views. Only works in postgres
         */
        cascade?: boolean;

    }

    /**
     * Schema Options provided for applying a schema to a model
     */
    interface SchemaOptions extends LoggingOptions {

        /**
         * The character(s) that separates the schema name from the table name
         */
        schemaDelimeter?: string;

    }
    /**
 * GetTableName Options
 */
    interface GetTableNameOptions extends LoggingOptions {
        // no addition properties
    }


    /**
     * AddScope Options for Model.addScope
     */
    interface AddScopeOptions {
        /**
         * If a scope of the same name already exists, should it be overwritten?
         */
        override: boolean;
    }

    /**
* Scope Options for Model.scope
*/
    interface ScopeOptions {

        /**
         * The scope(s) to apply. Scopes can either be passed as consecutive arguments, or as an array of arguments.
         * To apply simple scopes and scope functions with no arguments, pass them as strings. For scope function,
         * pass an object, with a `method` property. The value can either be a string, if the method does not take
         * any arguments, or an array, where the first element is the name of the method, and consecutive elements
         * are arguments to that method. Pass null to remove all scopes, including the default.
         */
        method: string | any[];

    }

    /**
     * Where Complex nested query
     */
    interface WhereNested {
        $and: Array<AnyWhereOptions | WhereLogic>;
        $or: Array<AnyWhereOptions | WhereLogic>;
    }

    /**
     * Nested where Postgre Statement
     */
    interface WherePGStatement {
        $any: Array<string | number>;
        $all: Array<string | number>;
    }

    /**
     * Where Geometry Options
     */
    interface WhereGeometryOptions {
        type: string;
        coordinates: Array<number[] | number>;
    }

    /**
     * Logic of where statement
     */
    type WhereLogic = Partial<{
        $ne: string | number | WhereLogic;
        $in: Array<string | number> | literal;
        $not: boolean | string | number | AnyWhereOptions;
        $notIn: Array<string | number> | literal;
        $gte: number | string | Date;
        $gt: number | string | Date;
        $lte: number | string | Date;
        $lt: number | string | Date;
        $like: string | WherePGStatement;
        $iLike: string | WherePGStatement;
        $ilike: string | WherePGStatement;
        $notLike: string | WherePGStatement;
        $notILike: string | WherePGStatement;
        $between: [number, number] | [Date, Date];
        "..": [number, number];
        $notBetween: [number, number];
        "!..": [number, number];
        $overlap: [number, number] | [string, string];
        "&&": [number, number];
        $contains: any;
        "@>": any;
        $contained: any;
        "<@": any;
    }>;

    /**
     * A hash of attributes to describe your search. See above for examples.
     *
     * We did put Object in the end, because there where query might be a JSON Blob. It cripples a bit the
     * typesafety, but there is no way to pass the tests if we just remove it.
     */
    type WhereOptions<T> = {
        [P in keyof T]?: string | number | boolean | WhereLogic | WhereOptions<T[P]> | col | and | or | WhereGeometryOptions | WhereNested | Array<string | number> | null;
    };

    /**
     * A hash of attributes to describe your search, accepting any field names. See `WhereOptions` for details.
     */
    interface AnyWhereOptions {
        [field: string]: WhereOptions<any>[] | Object;
    }

    /**
     * Through options for Include Options
     */
    interface IncludeThroughOptions {

        /**
         * Filter on the join model for belongsToMany relations
         */
        where?: AnyWhereOptions;

        /**
         * A list of attributes to select from the join model for belongsToMany relations
         */
        attributes?: string[];

    }

    /**
     * Association Object for Include Options
     */
    interface IncludeAssociation {
        source: Model<any, any>;
        target: Model<any, any>;
        identifier: string;
    }

    /**
     * Complex include options
     */
    interface IncludeOptions {

        /**
         * The model you want to eagerly load
         */
        model?: Model<any, any>;

        /**
         * The alias of the relation, in case the model you want to eagerly load is aliassed. For `hasOne` /
         * `belongsTo`, this should be the singular name, and for `hasMany`, it should be the plural
         */
        as?: string;

        /**
         * The association you want to eagerly load. (This can be used instead of providing a model/as pair)
         */
        association?: IncludeAssociation;

        /**
         * Where clauses to apply to the child models. Note that this converts the eager load to an inner join,
         * unless you explicitly set `required: false`
         */
        where?: AnyWhereOptions;

        /**
         * A list of attributes to select from the child model
         */
        attributes?: FindOptionsAttributesArray | { include?: FindOptionsAttributesArray, exclude?: Array<string> };

        /**
         * If true, converts to an inner join, which means that the parent model will only be loaded if it has any
         * matching children. True if `include.where` is set, false otherwise.
         */
        required?: boolean;

        /**
         * Through Options
         */
        through?: IncludeThroughOptions;

        /**
         * Load further nested related models
         */
        include?: Array<Model<any, any> | IncludeOptions>;

        /**
         * If true, only non-deleted records will be returned. If false, both deleted and non-deleted records will
         * be returned. Only applies if `options.paranoid` is true for the model.
         */
        paranoid?: boolean;

        all?: boolean | string;
    }

    /**
     * Shortcut for types used in FindOptions.attributes
     */
    type FindOptionsAttributesArray = Array<string | literal | [string, string] | fn | [fn, string] | cast | [cast, string] | [literal, string]>;

    /**
     * Options that are passed to any model creating a SELECT query
     *
     * A hash of options to describe the scope of the search
     */
    interface FindOptions<T> extends LoggingOptions, SearchPathOptions {

        /**
         * A hash of attributes to describe your search. See above for examples.
         */
        where?: WhereOptions<T> | where | fn | Array<col | and | or | string>;

        /**
         * A list of the attributes that you want to select. To rename an attribute, you can pass an array, with
         * two elements - the first is the name of the attribute in the DB (or some kind of expression such as
         * `Sequelize.literal`, `Sequelize.fn` and so on), and the second is the name you want the attribute to
         * have in the returned instance
         */
        attributes?: FindOptionsAttributesArray | { include?: FindOptionsAttributesArray, exclude?: Array<string> };

        /**
         * If true, only non-deleted records will be returned. If false, both deleted and non-deleted records will
         * be returned. Only applies if `options.paranoid` is true for the model.
         */
        paranoid?: boolean;

        /**
         * A list of associations to eagerly load using a left join. Supported is either
         * `{ include: [ Model1, Model2, ...]}` or `{ include: [{ model: Model1, as: 'Alias' }]}`.
         * If your association are set up with an `as` (eg. `X.hasMany(Y, { as: 'Z }`, you need to specify Z in
         * the as attribute when eager loading Y).
         */
        include?: Array<Model<any, any> | IncludeOptions>;

        /**
         * Specifies an ordering. If a string is provided, it will be escaped. Using an array, you can provide
         * several columns / functions to order by. Each element can be further wrapped in a two-element array. The
         * first element is the column / function to order by, the second is the direction. For example:
         * `order: [['name', 'DESC']]`. In this way the column will be escaped, but the direction will not.
         */
        order?: string | col | literal | Array<string | number | Model<any, any> | { model: Model<any, any>, as?: string }> | Array<string | col | literal | Array<string | number | Model<any, any> | { model: Model<any, any>, as?: string }>>;

        /**
         * Limit the results
         */
        limit?: number;

        /**
         * Skip the results;
         */
        offset?: number;

        /**
         * Lock the selected rows. Possible options are transaction.LOCK.UPDATE and transaction.LOCK.SHARE.
         * Postgres also supports transaction.LOCK.KEY_SHARE, transaction.LOCK.NO_KEY_UPDATE and specific model
         * locks with joins. See [transaction.LOCK for an example](transaction#lock)
         */
        lock?: TransactionLockLevel | { level: TransactionLockLevel, of: Model<any, any> };

        /**
         * Return raw result. See sequelize.query for more information.
         */
        raw?: boolean;

        /**
         * having ?!?
         */
        having?: AnyWhereOptions;

        /**
         * Group by. It is not mentioned in sequelize's JSDoc, but mentioned in docs.
         * https://github.com/sequelize/sequelize/blob/master/docs/docs/models-usage.md#user-content-manipulating-the-dataset-with-limit-offset-order-and-group
         */
        group?: string | string[] | Object;

        /**
         * Apply DISTINCT(col) for FindAndCount(all)
         */
        distinct?: boolean;

        /**
         * Prevents a subquery on the main table when using include
         */
        subQuery?: boolean;

        /**
         * Throw EmptyResultError if a record is not found
         */
        rejectOnEmpty?: boolean;
    }

    type AnyFindOptions = FindOptions<any>;

    /**
     * Options for Model.count method
     */
    interface CountOptions extends LoggingOptions, SearchPathOptions {

        /**
         * A hash of search attributes.
         */
        where?: AnyWhereOptions | string[];

        /**
         * Include options. See `find` for details
         */
        include?: Array<Model<any, any> | IncludeOptions>;

        /**
         * Apply column on which COUNT() should be applied
         */
        col?: string;

        /**
         * Apply COUNT(DISTINCT(col))
         */
        distinct?: boolean;

        /**
         * Used in conjustion with `group`
         */
        attributes?: Array<string | [string, string]>;

        /**
         * For creating complex counts. Will return multiple rows as needed.
         *
         * TODO: Check?
         */
        group?: Object;
    }

    /**
     * Options for Model.build method
     */
    interface BuildOptions extends ReturningOptions {

        /**
         * If set to true, values will ignore field and virtual setters.
         */
        raw?: boolean;

        /**
         * Is this record new
         */
        isNewRecord?: boolean;

        /**
         * an array of include options - Used to build prefetched/included model instances. See `set`
         *
         * TODO: See set
         */
        include?: Array<Model<any, any> | IncludeOptions>;
    }

    /**
     * Options for Model.create method
     */
    interface CreateOptions extends BuildOptions, InstanceSaveOptions {

        /**
         * On Duplicate
         */
        onDuplicate?: string;
    }

    /**
     * Options for Model.findOrInitialize method
     */
    interface FindOrInitializeOptions<TAttributes> extends AnyFindOptions {

        /**
         * Default values to use if building a new instance
         */
        defaults?: TAttributes;

    }

    /**
     * Options for Model.findOrInitialize method
     */
    interface FindCreateFindOptions<TAttributes> extends FindOptions<TAttributes> {

        /**
         * Default values to use if building a new instance
         */
        defaults?: TAttributes;

    }

    /**
 * Options for Model.upsert method
     */
    interface UpsertOptions extends FieldsOptions, LoggingOptions, SearchPathOptions, ReturningOptions {
    }

    /**
     * Options for Model.bulkCreate method
     */

    interface BulkCreateOptions extends FieldsOptions, LoggingOptions, SearchPathOptions, ReturningOptions {

        /**
         * Run before / after bulk create hooks?
         */
        hooks?: boolean;

        /**
         * Run before / after create hooks for each individual Instance? BulkCreate hooks will still be run if
         * options.hooks is true.
         */
        individualHooks?: boolean;

        /**
         * Ignore duplicate values for primary keys? (not supported by postgres)
         *
         * Defaults to false
         */
        ignoreDuplicates?: boolean;

        /**
         * Fields to update if row key already exists (on duplicate key update)? (only supported by mysql &
         * mariadb). By default, all fields are updated.
         */
        updateOnDuplicate?: string[];
    }

    /**
     * The options passed to Model.destroy in addition to truncate
     */
    interface TruncateOptions extends LoggingOptions, SearchPathOptions {

        /**
         * Only used in conjuction with TRUNCATE. Truncates  all tables that have foreign-key references to the
         * named table, or to any tables added to the group due to CASCADE.
         *
         * Defaults to false;
         */
        cascade?: boolean;

        /**
         * Delete instead of setting deletedAt to current timestamp (only applicable if paranoid is enabled)
         *
         * Defaults to false;
         */
        force?: boolean;

    }

    /**
     * Options used for Model.destroy
     */
    interface DestroyOptions extends TruncateOptions {

        /**
         * Filter the destroy
         */
        where?: AnyWhereOptions;

        /**
         * Run before / after bulk destroy hooks?
         */
        hooks?: boolean;

        /**
         * If set to true, destroy will SELECT all records matching the where parameter and will execute before /
         * after destroy hooks on each row
         */
        individualHooks?: boolean;

        /**
         * How many rows to delete
         */
        limit?: number;

        /**
         * Delete instead of setting deletedAt to current timestamp (only applicable if `paranoid` is enabled)
         */
        force?: boolean;

        /**
         * If set to true, dialects that support it will use TRUNCATE instead of DELETE FROM. If a table is
         * truncated the where and limit options are ignored
         */
        truncate?: boolean;

    }

    /**
     * Options for Model.restore
     */
    interface RestoreOptions extends LoggingOptions {

        /**
         * Filter the restore
         */
        where?: AnyWhereOptions;

        /**
         * Run before / after bulk restore hooks?
         */
        hooks?: boolean;

        /**
         * If set to true, restore will find all records within the where parameter and will execute before / after
         * bulkRestore hooks on each row
         */
        individualHooks?: boolean;

        /**
         * How many rows to undelete
         */
        limit?: number;

        /**
         * Transaction to run query under
         */
        transaction?: Transaction;

    }

    /**
     * Options used for Model.update
     */
    interface UpdateOptions extends FieldsOptions, LoggingOptions, ReturningOptions {

        /**
         * Options to describe the scope of the search.
         */
        where: AnyWhereOptions;

        /**
         * Run before / after bulk update hooks?
         *
         * Defaults to true
         */
        hooks?: boolean;

        /**
         * Whether or not to update the side effects of any virtual setters.
         *
         * Defaults to true
         */
        sideEffects?: boolean;

        /**
         * Run before / after update hooks?. If true, this will execute a SELECT followed by individual UPDATEs.
         * A select is needed, because the row data needs to be passed to the hooks
         *
         * Defaults to false
         */
        individualHooks?: boolean;

        /**
         * How many rows to update (only for mysql and mariadb)
         */
        limit?: number;

        /**
         * Transaction to run query under
         */
        transaction?: Transaction;

        /**
         * If true, the updatedAt timestamp will not be updated.
         */
        silent?: boolean;
    }

    /**
     * Options used for Model.aggregate
     */
    interface AggregateOptions extends LoggingOptions {

        /**
         * A hash of search attributes.
         */
        where?: AnyWhereOptions;

        /**
         * The type of the result. If `field` is a field in this Model, the default will be the type of that field,
         * otherwise defaults to float.
         */
        dataType?: DataTypeAbstract | string;

        /**
         * Applies DISTINCT to the field being aggregated over
         */
        distinct?: boolean;

        /**
         * The transaction that the query should be executed under
         */
        transaction?: Transaction;

        /**
         * When `true`, the first returned value of `aggregateFunction` is cast to `dataType` and returned.
         * If additional attributes are specified, along with `group` clauses, set `plain` to `false` to return all values of all returned rows.
         * Defaults to `true`
         */
        plain?: boolean;
    }

    /**
     * Models contains Model instances associated to their name
     */
    interface Models {
        [index: string]: Model<any, any>;
    }

    /**
     * A Model represents a table in the database. Sometimes you might also see it referred to as model, or simply
     * as factory. This class should _not_ be instantiated directly, it is created using `sequelize.define`, and
     * already created models can be loaded using `sequelize.import`
     */
    interface Model<TInstance, TAttributes> extends Hooks<TInstance>, Associations {

        /**
         * The Instance class
         */
        Instance(): TInstance;

        /**
         * The singular name of the model
         */
        name: string;

        /**
         * Remove attribute from model definition
         *
         * @param attribute
         */
        removeAttribute(attribute: string): void;

        /**
         * Sync this Model to the DB, that is create the table. Upon success, the callback will be called with the
         * model instance (this)
         */
        sync(options?: SyncOptions): Promise<this>;

        /**
         * Drop the table represented by this Model
         *
         * @param options
         */
        drop(options?: DropOptions): Promise<void>;

        /**
         * Apply a schema to this model. For postgres, this will actually place the schema in front of the table
         * name
         * - `"schema"."tableName"`, while the schema will be prepended to the table name for mysql and
         * sqlite - `'schema.tablename'`.
         *
         * @param schema The name of the schema
         * @param options
         */
        schema(schema: string, options?: SchemaOptions): this;

        /**
         * Get the tablename of the model, taking schema into account. The method will return The name as a string
         * if the model has no schema, or an object with `tableName`, `schema` and `delimiter` properties.
         *
         * @param options The hash of options from any query. You can use one model to access tables with matching
         *     schemas by overriding `getTableName` and using custom key/values to alter the name of the table.
         *     (eg.
         *     subscribers_1, subscribers_2)
         * @param options.logging=false A function that gets executed while running the query to log the sql.
         */
        getTableName(options?: GetTableNameOptions): string | Object;

        /**
         * Add a new scope to the model. This is especially useful for adding scopes with includes, when the model you want to include is not available at the time this model is defined.
         *
         * By default this will throw an error if a scope with that name already exists. Pass `override: true` in the options object to silence this error.
         *
         * @param {String}          name The name of the scope. Use `defaultScope` to override the default scope
         * @param {Object|Function} scope
         * @param {Object}          [options]
         * @param {Boolean}         [options.override=false]
         */
        addScope(name: string, scope: AnyFindOptions | Function, options?: AddScopeOptions): void;

        /**
         * Add a new scope to the model. This is especially useful for adding scopes with includes, when the model you want to include is not available at the time this model is defined.
         *
         * By default this will throw an error if a scope with that name already exists. Pass `override: true` in the options object to silence this error.
         *
         * @param {String}          name The name of the scope. Use `defaultScope` to override the default scope
         * @param {Object|Function} scope
         * @param {Object}          [options]
         * @param {Boolean}         [options.override=false]
         */
        addScope(name: string, scope: AnyFindOptions | Function, options?: AddScopeOptions): void;

        /**
         * Apply a scope created in `define` to the model. First let's look at how to create scopes:
         * ```js
         * var Model = sequelize.define('model', attributes, {
         *   defaultScope: {
         *     where: {
         *       username: 'dan'
         *     },
         *     limit: 12
         *   },
         *   scopes: {
         *     isALie: {
         *       where: {
         *         stuff: 'cake'
         *       }
         *     },
         *     complexFunction: function(email, accessLevel) {
         *       return {
         *         where: {
         *           email: {
         *             $like: email
         *           },
         *           accesss_level {
         *             $gte: accessLevel
         *           }
         *         }
         *       }
         *     }
         *   }
         * })
         * ```
         * Now, since you defined a default scope, every time you do Model.find, the default scope is appended to
         * your query. Here's a couple of examples:
         * ```js
         * Model.findAll() // WHERE username = 'dan'
         * Model.findAll({ where: { age: { gt: 12 } } }) // WHERE age > 12 AND username = 'dan'
         * ```
         *
         * To invoke scope functions you can do:
         * ```js
         * Model.scope({ method: ['complexFunction' 'dan@sequelize.com', 42]}).findAll()
         * // WHERE email like 'dan@sequelize.com%' AND access_level >= 42
         * ```
         *
         * @return Model A reference to the model, with the scope(s) applied. Calling scope again on the returned
         *     model will clear the previous scope.
         */
        scope(options?: string | ScopeOptions | AnyWhereOptions | Array<string | ScopeOptions | AnyWhereOptions>): this;

        /**
         * Search for multiple instances.
         *
         * __Simple search using AND and =__
         * ```js
         * Model.findAll({
         *   where: {
         *     attr1: 42,
         *     attr2: 'cake'
         *   }
         * })
         * ```
         * ```sql
         * WHERE attr1 = 42 AND attr2 = 'cake'
         *```
         *
         * __Using greater than, less than etc.__
         * ```js
         *
         * Model.findAll({
         *   where: {
         *     attr1: {
         *       gt: 50
         *     },
         *     attr2: {
         *       lte: 45
         *     },
         *     attr3: {
         *       in: [1,2,3]
         *     },
         *     attr4: {
         *       ne: 5
         *     }
         *   }
         * })
         * ```
         * ```sql
         * WHERE attr1 > 50 AND attr2 <= 45 AND attr3 IN (1,2,3) AND attr4 != 5
         * ```
         * Possible options are: `$ne, $in, $not, $notIn, $gte, $gt, $lte, $lt, $like, $ilike/$iLike, $notLike,
         * $notILike, '..'/$between, '!..'/$notBetween, '&&'/$overlap, '@>'/$contains, '<@'/$contained`
         *
         * __Queries using OR__
         * ```js
         * Model.findAll({
         *   where: Sequelize.and(
         *     { name: 'a project' },
         *     Sequelize.or(
         *       { id: [1,2,3] },
         *       { id: { gt: 10 } }
         *     )
         *   )
         * })
         * ```
         * ```sql
         * WHERE name = 'a project' AND (id` IN (1,2,3) OR id > 10)
         * ```
         *
         * The success listener is called with an array of instances if the query succeeds.
         *
         * @see    {Sequelize#query}
         */
        findAll<TCustomAttributes>(options?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance[]>;
        all<TCustomAttributes>(optionz?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance[]>;

        /**
         * Search for a single instance by its primary key. This applies LIMIT 1, so the listener will
         * always be called with a single instance.
         */
        findById<TCustomAttributes>(identifier?: number | string | Buffer, options?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance | null>;
        findByPrimary<TCustomAttributes>(identifier?: number | string | Buffer, options?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance | null>;

        /**
         * Search for a single instance. This applies LIMIT 1, so the listener will always be called with a single
         * instance.
         */
        findOne<TCustomAttributes>(options?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance | null>;
        find<TCustomAttributes>(options?: FindOptions<TAttributes & TCustomAttributes>): Promise<TInstance | null>;

        /**
         * Run an aggregation method on the specified field
         *
         * @param field The field to aggregate over. Can be a field name or *
         * @param aggregateFunction The function to use for aggregation, e.g. sum, max etc.
         * @param options Query options. See sequelize.query for full options
         * @return Returns the aggregate result cast to `options.dataType`, unless `options.plain` is false, in
         *     which case the complete data result is returned.
         */
        aggregate(field: string, aggregateFunction: string, options?: AggregateOptions): Promise<Object>;

        /**
         * Count the number of records matching the provided where clause.
         *
         * If you provide an `include` option, the number of matching associations will be counted instead.
         */
        count(options?: CountOptions): Promise<number>;

        /**
         * Find all the rows matching your query, within a specified offset / limit, and get the total number of
         * rows matching your query. This is very usefull for paging
         *
         * ```js
         * Model.findAndCountAll({
         *   where: ...,
         *   limit: 12,
         *   offset: 12
         * }).then(function (result) {
         *   ...
         * })
         * ```
         * In the above example, `result.rows` will contain rows 13 through 24, while `result.count` will return
         * the
         * total number of rows that matched your query.
         *
         * When you add includes, only those which are required (either because they have a where clause, or
         * because
         * `required` is explicitly set to true on the include) will be added to the count part.
         *
         * Suppose you want to find all users who have a profile attached:
         * ```js
         * User.findAndCountAll({
         *   include: [
         *      { model: Profile, required: true}
         *   ],
         *   limit 3
         * });
         * ```
         * Because the include for `Profile` has `required` set it will result in an inner join, and only the users
         * who have a profile will be counted. If we remove `required` from the include, both users with and
         * without
         * profiles will be counted
         */
        findAndCount<TCustomAttributes>(options?: FindOptions<TAttributes & TCustomAttributes>): Promise<{ rows: TInstance[], count: number }>;
        findAndCountAll<TCustomAttributes>(options?: FindOptions<TAttributes & TCustomAttributes>): Promise<{ rows: TInstance[], count: number }>;

        /**
         * Find the maximum value of field
         */
        max(field: string, options?: AggregateOptions): Promise<any>;

        /**
         * Find the minimum value of field
         */
        min(field: string, options?: AggregateOptions): Promise<any>;

        /**
         * Find the sum of field
         */
        sum(field: string, options?: AggregateOptions): Promise<number>;

        /**
         * Builds a new model instance. Values is an object of key value pairs, must be defined but can be empty.
         */
        build(record?: TAttributes, options?: BuildOptions): TInstance;

        /**
         * Undocumented bulkBuild
         */
        bulkBuild(records: TAttributes[], options?: BuildOptions): TInstance[];

        /**
         * Builds a new model instance and calls save on it.
         */
        create(values?: TAttributes, options?: CreateOptions): Promise<TInstance>;

        /**
         * Find a row that matches the query, or build (but don't save) the row if none is found.
         * The successfull result of the promise will be (instance, initialized) - Make sure to use .spread()
         */
        findOrInitialize(options: FindOrInitializeOptions<TAttributes>): Promise<[TInstance, boolean]>;
        findOrBuild(options: FindOrInitializeOptions<TAttributes>): Promise<[TInstance, boolean]>;

        /**
         * Find a row that matches the query, or build and save the row if none is found
         * The successful result of the promise will be (instance, created) - Make sure to use .spread()
         *
         * If no transaction is passed in the `options` object, a new transaction will be created internally, to
         * prevent the race condition where a matching row is created by another connection after the find but
         * before the insert call. However, it is not always possible to handle this case in SQLite, specifically
         * if one transaction inserts and another tries to select before the first one has comitted. In this case,
         * an instance of sequelize.TimeoutError will be thrown instead. If a transaction is created, a savepoint
         * will be created instead, and any unique constraint violation will be handled internally.
         */
        findOrCreate(options: FindOrInitializeOptions<TAttributes>): Promise<[TInstance, boolean]>;

        /**
         * A more performant findOrCreate that will not work under a transaction (at least not in postgres)
         * Will execute a find call, if empty then attempt to create, if unique constraint then attempt to find again
         */
        findCreateFind<TCustomAttributes>(options: FindCreateFindOptions<TAttributes & TCustomAttributes>): Promise<[TInstance, boolean]>;

        /**
         * Insert or update a single row. An update will be executed if a row which matches the supplied values on
         * either the primary key or a unique key is found. Note that the unique index must be defined in your
         * sequelize model and not just in the table. Otherwise you may experience a unique constraint violation,
         * because sequelize fails to identify the row that should be updated.
         *
         * **Implementation details:**
         *
         * * MySQL - Implemented as a single query `INSERT values ON DUPLICATE KEY UPDATE values`
         * * PostgreSQL - Implemented as a temporary function with exception handling: INSERT EXCEPTION WHEN
         *   unique_constraint UPDATE
         * * SQLite - Implemented as two queries `INSERT; UPDATE`. This means that the update is executed
         * regardless
         *   of whether the row already existed or not
         *
         * **Note** that SQLite returns undefined for created, no matter if the row was created or updated. This is
         * because SQLite always runs INSERT OR IGNORE + UPDATE, in a single query, so there is no way to know
         * whether the row was inserted or not.
         */
        upsert(values: TAttributes, options?: UpsertOptions & { returning?: false | undefined }): Promise<boolean>;
        upsert(values: TAttributes, options?: UpsertOptions & { returning: true }): Promise<[TInstance, boolean]>;
        insertOrUpdate(values: TAttributes, options?: UpsertOptions & { returning: false | undefined }): Promise<boolean>;
        insertOrUpdate(values: TAttributes, options?: UpsertOptions & { returning: true }): Promise<[TInstance, boolean]>;

        /**
         * Create and insert multiple instances in bulk.
         *
         * The success handler is passed an array of instances, but please notice that these may not completely
         * represent the state of the rows in the DB. This is because MySQL and SQLite do not make it easy to
         * obtain
         * back automatically generated IDs and other default values in a way that can be mapped to multiple
         * records. To obtain Instances for the newly created values, you will need to query for them again.
         *
         * @param records List of objects (key/value pairs) to create instances from
         */
        bulkCreate(records: TAttributes[], options?: BulkCreateOptions): Promise<TInstance[]>;

        /**
         * Truncate all instances of the model. This is a convenient method for Model.destroy({ truncate: true }).
         */
        truncate(options?: TruncateOptions): Promise<void>;

        /**
         * Delete multiple instances, or set their deletedAt timestamp to the current time if `paranoid` is enabled.
         *
         * @return Promise<number> The number of destroyed rows
         */
        destroy(options?: DestroyOptions): Promise<number>;

        /**
         * Restore multiple instances if `paranoid` is enabled.
         */
        restore(options?: RestoreOptions): Promise<void>;

        /**
         * Update multiple instances that match the where options. The promise returns an array with one or two
         * elements. The first element is always the number of affected rows, while the second element is the actual
         * affected rows (only supported in postgres with `options.returning` true.)
         */
        update(values: Partial<TAttributes>, options?: UpdateOptions): Promise<[number, TInstance[]]>;

        /**
         * Run a describe query on the table. The result will be return to the listener as a hash of attributes and
         * their types.
         */
        describe(): Promise<Object>;

        /**
         * Unscope the model
         */
        unscoped(): this;

        /**
         * Set associations with other models
         *
         * @param models
         */
        associate?(models: Models): void;

    }

    //
    //  Query Interface
    // ~~~~~~~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/query-interface.js
    //

    /**
     * Most of the methods accept options and use only the logger property of the options. That's why the most used
     * interface type for options in a method is separated here as another interface.
     */
    interface QueryInterfaceOptions {

        /**
         * A function that gets executed while running the query to log the sql.
         */
        logging?: boolean | Function;

        /**
         * An optional transaction to perform this query in
         */
        transaction?: Transaction;

    }

    interface AddUniqueConstraintOptions {
        type: 'unique';
        name?: string;
    }

    interface AddDefaultConstraintOptions {
        type: 'default';
        name?: string;
        defaultValue?: any;
    }

    interface AddCheckConstraintOptions {
        type: 'check';
        name?: string;
        where?: AnyWhereOptions;
    }

    interface AddPrimaryKeyConstraintOptions {
        type: 'primary key';
        name?: string;
    }

    interface AddForeignKeyConstraintOptions {
        type: 'foreign key';
        name?: string;
        references?: {
            table: string;
            field: string;
        };
        onDelete: string;
        onUpdate: string;
    }

    type AddConstraintOptions = AddUniqueConstraintOptions | AddDefaultConstraintOptions | AddCheckConstraintOptions | AddPrimaryKeyConstraintOptions | AddForeignKeyConstraintOptions;

    /**
     * The interface that Sequelize uses to talk to all databases.
     *
     * This interface is available through sequelize.QueryInterface. It should not be commonly used, but it's
     * referenced anyway, so it can be used.
     */
    interface QueryInterface {

        /**
         * Returns the dialect-specific sql generator.
         *
         * We don't have a definition for the QueryGenerator, because I doubt it is commonly in use separately.
         */
        QueryGenerator: any;

        /**
         * Returns the current sequelize instance.
         */
        sequelize: Sequelize;

        /**
         * Queries the schema (table list).
         *
         * @param schema The schema to query. Applies only to Postgres.
         */
        createSchema(schema?: string, options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Drops the specified schema (table).
         *
         * @param schema The schema to query. Applies only to Postgres.
         */
        dropSchema(schema?: string, options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Drops all tables.
         */
        dropAllSchemas(options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Queries all table names in the database.
         *
         * @param options
         */
        showAllSchemas(options?: QueryOptions): Promise<Object>;

        /**
         * Return database version
         */
        databaseVersion(options?: QueryInterfaceOptions): Promise<string>;

        /**
         * Creates a table with specified attributes.
         *
         * @param tableName     Name of table to create
         * @param attributes    Hash of attributes, key is attribute name, value is data type
         * @param options       Query options.
         */
        createTable(tableName: string | { schema?: string, tableName?: string }, attributes: DefineAttributes,
            options?: QueryOptions): Promise<void>;

        /**
         * Drops the specified table.
         *
         * @param tableName Table name.
         * @param options   Query options, particularly "force".
         */
        dropTable(tableName: string, options?: QueryOptions): Promise<void>;

        /**
         * Drops all tables.
         *
         * @param options
         */
        dropAllTables(options?: QueryOptions): Promise<void>;

        /**
         * Drops all defined enums
         *
         * @param options
         */
        dropAllEnums(options?: QueryOptions): Promise<void>;

        /**
         * Renames a table
         */
        renameTable(before: string, after: string, options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Returns all tables
         */
        showAllTables(options?: QueryOptions): Promise<string[]>;

        /**
         * Describe a table
         */
        describeTable(tableName: string | { schema?: string, tableName?: string },
            options?: string | { schema?: string, schemaDelimeter?: string, logging?: boolean | Function }): Promise<Object>;

        /**
         * Adds a new column to a table
         */
        addColumn(tableName: string | { tableName?: string, schema?: string }, key: string, attribute: DefineAttributeColumnOptions | DataTypeAbstract,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Removes a column from a table
         */
        removeColumn(tableName: string | { tableName?: string, schema?: string }, attribute: string,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Changes a column
         */
        changeColumn(tableName: string | { schema?: string, tableName?: string }, attributeName: string,
            dataTypeOrOptions?: string | DataTypeAbstract | DefineAttributeColumnOptions,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Renames a column
         */
        renameColumn(tableName: string | { schema?: string, tableName?: string }, attrNameBefore: string,
            attrNameAfter: string,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Adds a new index to a table
         */
        addIndex(tableName: string | Object, attributes: string[], options?: DefineIndexOptions,
            rawTablename?: string): Promise<void>;

        /**
         * Shows the index of a table
         */
        showIndex(tableName: string | Object, options?: QueryOptions): Promise<Object>;

        /**
         * Put a name to an index
         */
        nameIndexes(indexes: string[], rawTablename: string): Promise<void>;

        /**
         * Returns all foreign key constraints of a table
         */
        getForeignKeysForTables(tableNames: string, options?: QueryInterfaceOptions): Promise<Object>;

        /**
         * Removes an index of a table
         */
        removeIndex(tableName: string, indexNameOrAttributes: string[] | string,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Adds constraints to a table
         */
        addConstraint(tableName: string, attributes: string[], options?: AddConstraintOptions | QueryInterfaceOptions): Promise<void>;

        /**
         * Removes constraints from a table
         */
        removeConstraint(tableName: string, constraintName: string, options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Inserts a new record
         */
        insert(instance: Instance<any>, tableName: string, values: Object,
            options?: QueryOptions): Promise<Object>;

        /**
         * Inserts or Updates a record in the database
         */
        upsert(tableName: string, values: Object, updateValues: Object, model: Model<any, any>,
            options?: QueryOptions): Promise<Object>;

        /**
         * Inserts multiple records at once
         */
        bulkInsert(tableName: string, records: Object[], options?: QueryOptions,
            attributes?: string[] | string): Promise<Object>;

        /**
         * Updates a row
         */
        update(instance: Instance<any>, tableName: string, values: Object, identifier: Object,
            options?: QueryOptions): Promise<Object>;

        /**
         * Updates multiple rows at once
         */
        bulkUpdate(tableName: string, values: Object, identifier: Object, options?: QueryOptions,
            attributes?: string[] | string): Promise<Object>;

        /**
         * Deletes a row
         */
        "delete"(instance: Instance<any>, tableName: string, identifier: Object,
            options?: QueryOptions): Promise<Object>;

        /**
         * Deletes multiple rows at once
         */
        bulkDelete(tableName: string, identifier: Object, options?: QueryOptions,
            model?: Model<any, any>): Promise<Object>;

        /**
         * Returns selected rows
         */
        select(model: Model<any, any>, tableName: string, options?: QueryOptions): Promise<Object[]>;

        /**
         * Increments a row value
         */
        increment(instance: Instance<any>, tableName: string, values: Object, identifier: Object,
            options?: QueryOptions): Promise<Object>;

        /**
         * Selects raw without parsing the string into an object
         */
        rawSelect(tableName: string, options: QueryOptions, attributeSelector: string | string[],
            model?: Model<any, any>): Promise<string[]>;

        /**
         * Postgres only. Creates a trigger on specified table to call the specified function with supplied
         * parameters.
         */
        createTrigger(tableName: string, triggerName: string, timingType: string, fireOnArray: any[],
            functionName: string, functionParams: any[], optionsArray: string[],
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Postgres only. Drops the specified trigger.
         */
        dropTrigger(tableName: string, triggerName: string, options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Postgres only. Renames a trigger
         */
        renameTrigger(tableName: string, oldTriggerName: string, newTriggerName: string,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Postgres only. Create a function
         */
        createFunction(functionName: string, params: any[], returnType: string, language: string,
            body: string, options?: QueryOptions): Promise<void>;

        /**
         * Postgres only. Drops a function
         */
        dropFunction(functionName: string, params: any[],
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Postgres only. Rename a function
         */
        renameFunction(oldFunctionName: string, params: any[], newFunctionName: string,
            options?: QueryInterfaceOptions): Promise<void>;

        /**
         * Escape an identifier (e.g. a table or attribute name). If force is true, the identifier will be quoted
         * even if the `quoteIdentifiers` option is false.
         */
        quoteIdentifier(identifier: string, force: boolean): string;

        /**
         * Escape a table name
         */
        quoteTable(identifier: string): string;

        /**
         * Split an identifier into .-separated tokens and quote each part. If force is true, the identifier will be
         * quoted even if the `quoteIdentifiers` option is false.
         */
        quoteIdentifiers(identifiers: string, force: boolean): string;

        /**
         * Escape a value (e.g. a string, number or date)
         */
        escape(value?: string | number | Date): string;

        /**
         * Set option for autocommit of a transaction
         */
        setAutocommit(transaction: Transaction, value: boolean, options?: QueryOptions): Promise<void>;

        /**
         * Set the isolation level of a transaction
         */
        setIsolationLevel(transaction: Transaction, value: string, options?: QueryOptions): Promise<void>;

        /**
         * Begin a new transaction
         */
        startTransaction(transaction: Transaction, options?: QueryOptions): Promise<void>;

        /**
         * Defer constraints
         */
        deferConstraints(transaction: Transaction, options?: QueryOptions): Promise<void>;

        /**
         * Commit an already started transaction
         */
        commitTransaction(transaction: Transaction, options?: QueryOptions): Promise<void>;

        /**
         * Rollback ( revert ) a transaction that has'nt been commited
         */
        rollbackTransaction(transaction: Transaction, options?: QueryOptions): Promise<void>;

    }

    //
    //  Query Types
    // ~~~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/query-types.js
    //

    interface QueryTypes {
        SELECT: string; // 'SELECT'
        INSERT: string; // 'INSERT'
        UPDATE: string; // 'UPDATE'
        BULKUPDATE: string; // 'BULKUPDATE'
        BULKDELETE: string; // 'BULKDELETE'
        DELETE: string; // 'DELETE'
        UPSERT: string; // 'UPSERT'
        VERSION: string; // 'VERSION'
        SHOWTABLES: string; // 'SHOWTABLES'
        SHOWINDEXES: string; // 'SHOWINDEXES'
        DESCRIBE: string; // 'DESCRIBE'
        RAW: string; // 'RAW'
        FOREIGNKEYS: string; // 'FOREIGNKEYS'
    }

    //
    //  Sequelize
    // ~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/sequelize.js
    //

    /**
     * General column options
     *
     * @see Define
     * @see AssociationForeignKeyOptions
     */
    interface ColumnOptions {

        /**
         * If false, the column will have a NOT NULL constraint, and a not null validation will be run before an
         * instance is saved.
         */
        allowNull?: boolean;

        /**
         *  If set, sequelize will map the attribute name to a different name in the database
         */
        field?: string;

        /**
         * A literal default value, a JavaScript function, or an SQL function (see `sequelize.fn`)
         */
        defaultValue?: any;

    }

    /**
     * References options for the column's attributes
     *
     * @see AttributeColumnOptions
     */
    interface DefineAttributeColumnReferencesOptions {

        /**
         * If this column references another table, provide it here as a Model, or a string
         */
        model: string | Model<any, any>;

        /**
         * The column of the foreign table that this column references
         */
        key?: string;

        /**
         * When to check for the foreign key constraing
         *
         * PostgreSQL only
         */
        deferrable?: DeferrableInitiallyDeferred | DeferrableInitiallyImmediate | DeferrableNot | DeferrableSetDeferred | DeferrableSetImmediate;

    }

    /**
     * Column options for the model schema attributes
     *
     * @see Attributes
     */
    interface DefineAttributeColumnOptions extends ColumnOptions {

        /**
         * A string or a data type
         */
        type: string | DataTypeAbstract;

        /**
         * If true, the column will get a unique constraint. If a string is provided, the column will be part of a
         * composite unique index. If multiple columns have the same string, they will be part of the same unique
         * index
         */
        unique?: boolean | string | { name: string, msg: string };

        /**
         * Primary key flag
         */
        primaryKey?: boolean;

        /**
         * Is this field an auto increment field
         */
        autoIncrement?: boolean;

        /**
         * Comment for the database
         */
        comment?: string;

        /**
         * An object with reference configurations
         */
        references?: DefineAttributeColumnReferencesOptions;

        /**
         * What should happen when the referenced key is updated. One of CASCADE, RESTRICT, SET DEFAULT, SET NULL or
         * NO ACTION
         */
        onUpdate?: string;

        /**
         * What should happen when the referenced key is deleted. One of CASCADE, RESTRICT, SET DEFAULT, SET NULL or
         * NO ACTION
         */
        onDelete?: string;

        /**
         * Provide a custom getter for this column. Use `this.getDataValue(String)` to manipulate the underlying
         * values.
         */
        get?: () => any;

        /**
         * Provide a custom setter for this column. Use `this.setDataValue(String, Value)` to manipulate the
         * underlying values.
         */
        set?: (val: any) => void;

        /**
         * An object of validations to execute for this column every time the model is saved. Can be either the
         * name of a validation provided by validator.js, a validation function provided by extending validator.js
         * (see the
         * `DAOValidator` property for more details), or a custom validation function. Custom validation functions
         * are called with the value of the field, and can possibly take a second callback argument, to signal that
         * they are asynchronous. If the validator is sync, it should throw in the case of a failed validation, it
         * it is async, the callback should be called with the error text.
         */
        validate?: DefineValidateOptions;

        /**
         * Usage in object notation
         *
         * ```js
         * sequelize.define('model', {
         *     states: {
         *       type:   Sequelize.ENUM,
         *       values: ['active', 'pending', 'deleted']
         *     }
         *   })
         * ```
         */
        values?: string[];

    }

    /**
     * Interface for Attributes provided for a column
     *
     * @see Sequelize.define
     */
    interface DefineAttributes {

        /**
         * The description of a database column
         */
        [name: string]: string | DataTypeAbstract | DefineAttributeColumnOptions;

    }

    /**
     * Interface for query options
     *
     * @see Options
     */
    interface QueryOptions extends SearchPathOptions, ReturningOptions {

        /**
         * If true, sequelize will not try to format the results of the query, or build an instance of a model from
         * the result
         */
        raw?: boolean;


        /**
         * The type of query you are executing. The query type affects how results are formatted before they are
         * passed back. The type is a string, but `Sequelize.QueryTypes` is provided as convenience shortcuts.
         */
        type?: string;

        /**
         * If true, transforms objects with `.` separated property names into nested objects using
         * [dottie.js](https://github.com/mickhansen/dottie.js). For example { 'user.username': 'john' } becomes
         * { user: { username: 'john' }}. When `nest` is true, the query type is assumed to be `'SELECT'`,
         * unless otherwise specified
         *
         * Defaults to false
         */
        nest?: boolean;

        /**
         * Sets the query type to `SELECT` and return a single row
         */
        plain?: boolean;

        /**
         * Either an object of named parameter replacements in the format `:param` or an array of unnamed
         * replacements to replace `?` in your SQL.
         */
        replacements?: Object | string[];

        /**
             * Either an object of named bind parameter in the format `$param` or an array of unnamed
             * bind parameter to replace `$1`, `$2`, ... in your SQL.
             */
        bind?: Object | string[];

        /**
         * Force the query to use the write pool, regardless of the query type.
         *
         * Defaults to false
         */
        useMaster?: boolean;

        /**
         * A function that gets executed while running the query to log the sql.
         */
        logging?: boolean | Function;

        /**
         * A sequelize instance used to build the return instance
         */
        instance?: Instance<any>;

        /**
         * A sequelize model used to build the returned model instances (used to be called callee)
         */
        model?: Model<any, any>;

        /**
         * Set of flags that control when a query is automatically retried.
         */
        retry?: RetryOptions;

        /**
         * If false do not prepend the query with the search_path (Postgres only)
         */
        supportsSearchPath?: boolean;

        /**
         * Map returned fields to model's fields if `options.model` or `options.instance` is present.
         * Mapping will occur before building the model instance.
         */
        mapToModel?: boolean;

        // TODO: force, cascade
        fieldMap?: { [key: string]: string; }
    }

    /**
     * Model validations, allow you to specify format/content/inheritance validations for each attribute of the
     * model.
     *
     * Validations are automatically run on create, update and save. You can also call validate() to manually
     * validate an instance.
     *
     * The validations are implemented by validator.js.
     */
    interface DefineValidateOptions {

        /**
         * is: ["^[a-z]+$",'i'] // will only allow letters
         * is: /^[a-z]+$/i      // same as the previous example using real RegExp
         */
        is?: string | Array<string | RegExp> | RegExp | { msg: string, args: string | Array<string | RegExp> | RegExp };

        /**
         * not: ["[a-z]",'i']  // will not allow letters
         */
        not?: string | Array<string | RegExp> | RegExp | { msg: string, args: string | Array<string | RegExp> | RegExp };

        /**
         * checks for email format (foo@bar.com)
         */
        isEmail?: boolean | { msg: string };

        /**
         * checks for url format (http://foo.com)
         */
        isUrl?: boolean | { msg: string };

        /**
         * checks for IPv4 (129.89.23.1) or IPv6 format
         */
        isIP?: boolean | { msg: string };

        /**
         * checks for IPv4 (129.89.23.1)
         */
        isIPv4?: boolean | { msg: string };

        /**
         * checks for IPv6 format
         */
        isIPv6?: boolean | { msg: string };

        /**
         * will only allow letters
         */
        isAlpha?: boolean | { msg: string };

        /**
         * will only allow alphanumeric characters, so "_abc" will fail
         */
        isAlphanumeric?: boolean | { msg: string };

        /**
         * will only allow numbers
         */
        isNumeric?: boolean | { msg: string };

        /**
         * checks for valid integers
         */
        isInt?: boolean | { msg: string };

        /**
         * checks for valid floating point numbers
         */
        isFloat?: boolean | { msg: string };

        /**
         * checks for any numbers
         */
        isDecimal?: boolean | { msg: string };

        /**
         * checks for lowercase
         */
        isLowercase?: boolean | { msg: string };

        /**
         * checks for uppercase
         */
        isUppercase?: boolean | { msg: string };

        /**
         * won't allow null
         */
        notNull?: boolean | { msg: string };

        /**
         * only allows null
         */
        isNull?: boolean | { msg: string };

        /**
         * don't allow empty strings
         */
        notEmpty?: boolean | { msg: string };

        /**
         * only allow a specific value
         */
        equals?: string | { msg: string };

        /**
         * force specific substrings
         */
        contains?: string | { msg: string };

        /**
         * check the value is not one of these
         */
        notIn?: string[][] | { msg: string, args: string[][] };

        /**
         * check the value is one of these
         */
        isIn?: string[][] | { msg: string, args: string[][] };

        /**
         * don't allow specific substrings
         */
        notContains?: string[] | string | { msg: string, args: string[] | string };

        /**
         * only allow values with length between 2 and 10
         */
        len?: [number, number] | { msg: string, args: [number, number] };

        /**
         * only allow uuids
         */
        isUUID?: 3|4|5|"3"|"4"|"5"|"all" | { msg: string, args: number };

        /**
         * only allow date strings
         */
        isDate?: boolean | { msg: string, args: boolean };

        /**
         * only allow date strings after a specific date
         */
        isAfter?: string | { msg: string, args: string };

        /**
         * only allow date strings before a specific date
         */
        isBefore?: string | { msg: string, args: string };

        /**
         * only allow values
         */
        max?: number | { msg: string, args: number };

        /**
         * only allow values >= 23
         */
        min?: number | { msg: string, args: number };

        /**
         * only allow arrays
         */
        isArray?: boolean | { msg: string, args: boolean };

        /**
         * check for valid credit card numbers
         */
        isCreditCard?: boolean | { msg: string, args: boolean };

        /**
         * custom validations are also possible
         *
         * Implementation notes :
         *
         * We can't enforce any other method to be a function, so :
         *
         * ```typescript
         * [name: string] : ( value : any ) => boolean;
         * ```
         *
         * doesn't work in combination with the properties above
         *
         * @see https://github.com/Microsoft/TypeScript/issues/1889
         */
        [name: string]: any;

    }

    interface DefineIndexOptions {
        /**
         * The index type
         */
        indicesType?: 'UNIQUE' | 'FULLTEXT' | 'SPATIAL';

        /**
         * The name of the index. Default is __
         */
        indexName?: string;

        /**
         * For FULLTEXT columns set your parser
         */
        parser?: string;

        /**
         * Set a type for the index, e.g. BTREE. See the documentation of the used dialect
         */
        indexType?: string;

        /**
         * A function that receives the sql query, e.g. console.log
         */
        logging?: Function;

        /**
         * A hash of attributes to limit your index(Filtered Indexes - MSSQL & PostgreSQL only)
         */
        where?: AnyWhereOptions;
    }

    /**
     * Interface for indexes property in DefineOptions
     *
     * @see DefineOptions
     */
    interface DefineIndexesOptions {

        /**
         * The name of the index. Defaults to model name + _ + fields concatenated
         */
        name?: string;

        /**
         * Index type. Only used by mysql. One of `UNIQUE`, `FULLTEXT` and `SPATIAL`
         */
        index?: string;

        /**
         * The method to create the index by (`USING` statement in SQL). BTREE and HASH are supported by mysql and
         * postgres, and postgres additionally supports GIST and GIN.
         */
        method?: string;

        /**
         * Should the index by unique? Can also be triggered by setting type to `UNIQUE`
         *
         * Defaults to false
         */
        unique?: boolean;

        /**
         * PostgreSQL will build the index without taking any write locks. Postgres only
         *
         * Defaults to false
         */
        concurrently?: boolean;

        /**
         * An array of the fields to index. Each field can either be a string containing the name of the field,
         * a sequelize object (e.g `sequelize.fn`), or an object with the following attributes: `attribute`
         * (field name), `length` (create a prefix index of length chars), `order` (the direction the column
         * should be sorted in), `collate` (the collation (sort order) for the column)
         */
        fields?: Array<string | fn | { attribute: string, length: number, order: string, collate: string }>;

        /**
         * Method the index should use, for example 'gin' index.
         */
        using?: string;

        /**
         * Operator that should be used by gin index, see Built-in GIN Operator Classes
         */
        operator?: string;

        /**
         * Condition for partioal index
         */
        where?: AnyWhereOptions;

    }

    /**
     * Interface for name property in DefineOptions
     *
     * @see DefineOptions
     */
    interface DefineNameOptions {

        /**
         * Singular model name
         */
        singular?: string;

        /**
         * Plural model name
         */
        plural?: string;

    }

    /**
     * Interface for getterMethods in DefineOptions
     *
     * @see DefineOptions
     */
    interface DefineGetterMethodsOptions {
        [name: string]: () => any;
    }

    /**
     * Interface for setterMethods in DefineOptions
     *
     * @see DefineOptions
     */
    interface DefineSetterMethodsOptions {
        [name: string]: (val: any) => void;
    }

    /**
     * Interface for Define Scope Options
     *
     * @see DefineOptions
     */
    interface DefineScopeOptions {

        /**
         * Name of the scope and it's query
         */
        [scopeName: string]: AnyFindOptions | Function;

    }

    /**
     * Options for model definition
     *
     * @see Sequelize.define
     */
    interface DefineOptions<TInstance> {

        /**
         * Define the default search scope to use for this model. Scopes have the same form as the options passed to
         * find / findAll.
         */
        defaultScope?: AnyFindOptions;

        /**
         * More scopes, defined in the same way as defaultScope above. See `Model.scope` for more information about
         * how scopes are defined, and what you can do with them
         */
        scopes?: DefineScopeOptions;

        /**
         * Don't persits null values. This means that all columns with null values will not be saved.
         */
        omitNull?: boolean;

        /**
         * Adds createdAt and updatedAt timestamps to the model. Default true.
         */
        timestamps?: boolean;

        /**
         * Calling destroy will not delete the model, but instead set a deletedAt timestamp if this is true. Needs
         * timestamps=true to work. Default false.
         */
        paranoid?: boolean;

        /**
         * Converts all camelCased columns to underscored if true. Default false.
         */
        underscored?: boolean;

        /**
         * Converts camelCased model names to underscored tablenames if true. Default false.
         */
        underscoredAll?: boolean;

        /**
         * Indicates if the model's table has a trigger associated with it. Default false.
         */
        hasTrigger?: boolean;

        /**
         * If freezeTableName is true, sequelize will not try to alter the DAO name to get the table name.
         * Otherwise, the dao name will be pluralized. Default false.
         */
        freezeTableName?: boolean;

        /**
         * An object with two attributes, `singular` and `plural`, which are used when this model is associated to
         * others.
         */
        name?: DefineNameOptions;

        /**
         * Indexes for the provided database table
         */
        indexes?: DefineIndexesOptions[];

        /**
         * Override the name of the createdAt column if a string is provided, or disable it if false. Timestamps
         * must be true. Not affected by underscored setting.
         */
        createdAt?: string | boolean;

        /**
         * Override the name of the deletedAt column if a string is provided, or disable it if false. Timestamps
         * must be true. Not affected by underscored setting.
         */
        deletedAt?: string | boolean;

        /**
         * Override the name of the updatedAt column if a string is provided, or disable it if false. Timestamps
         * must be true. Not affected by underscored setting.
         */
        updatedAt?: string | boolean;

        /**
         * Defaults to pluralized model name, unless freezeTableName is true, in which case it uses model name
         * verbatim
         */
        tableName?: string;

        /**
         * Provide getter functions that work like those defined per column. If you provide a getter method with
         * the
         * same name as a column, it will be used to access the value of that column. If you provide a name that
         * does not match a column, this function will act as a virtual getter, that can fetch multiple other
         * values
         */
        getterMethods?: DefineGetterMethodsOptions;

        /**
         * Provide setter functions that work like those defined per column. If you provide a setter method with
         * the
         * same name as a column, it will be used to update the value of that column. If you provide a name that
         * does not match a column, this function will act as a virtual setter, that can act on and set other
         * values, but will not be persisted
         */
        setterMethods?: DefineSetterMethodsOptions;

        /**
         * Provide functions that are added to each instance (DAO). If you override methods provided by sequelize,
         * you can access the original method using `this.constructor.super_.prototype`, e.g.
         * `this.constructor.super_.prototype.toJSON.apply(this, arguments)`
         */
        instanceMethods?: Object;

        /**
         * Provide functions that are added to the model (Model). If you override methods provided by sequelize,
         * you can access the original method using `this.constructor.prototype`, e.g.
         * `this.constructor.prototype.find.apply(this, arguments)`
         */
        classMethods?: Object;

        schema?: string;

        /**
         * You can also change the database engine, e.g. to MyISAM. InnoDB is the default.
         */
        engine?: string;

        charset?: string;

        /**
         * Finaly you can specify a comment for the table in MySQL and PG
         */
        comment?: string;

        collate?: string;

        /**
         * Set the initial AUTO_INCREMENT value for the table in MySQL.
         */
        initialAutoIncrement?: string;

        /**
         * An object of hook function that are called before and after certain lifecycle events.
         * The possible hooks are: beforeValidate, afterValidate, beforeBulkCreate, beforeBulkDestroy,
         * beforeBulkUpdate, beforeCreate, beforeDestroy, beforeUpdate, afterCreate, afterDestroy, afterUpdate,
         * afterBulkCreate, afterBulkDestory and afterBulkUpdate. See Hooks for more information about hook
         * functions and their signatures. Each property can either be a function, or an array of functions.
         */
        hooks?: HooksDefineOptions<TInstance>;

        /**
         * An object of model wide validations. Validations have access to all model values via `this`. If the
         * validator function takes an argument, it is asumed to be async, and is called with a callback that
         * accepts an optional error.
         */
        validate?: DefineValidateOptions;

        /**
         * Enable optimistic locking.  When enabled, sequelize will add a version count attribute
         * to the model and throw an OptimisticLockingError error when stale instances are saved.
         * Set to true or a string with the attribute name you want to use to enable.
         */
        version?: boolean | string;
    }

    /**
     * Sync Options
     *
     * @see Sequelize.sync
     */
    interface SyncOptions {

        /**
         * If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table
         */
        force?: boolean;

        /**
         * Match a regex against the database name before syncing, a safety check for cases where force: true is
         * used in tests but not live code
         */
        match?: RegExp;

        /**
         * A function that logs sql queries, or false for no logging
         */
        logging?: Function | boolean;

        /**
         * The schema that the tables should be created in. This can be overriden for each table in sequelize.define
         */
        schema?: string;

        /**
         * Alters tables to fit models. Not recommended for production use. Deletes data in columns
         * that were removed or had their type changed in the model.
         */
        alter?: boolean;

        /**
         * If hooks is true then beforeSync, afterSync, beforBulkSync, afterBulkSync hooks will be called
         */
        hooks?: boolean;

        /**
         * An optional parameter to specify the schema search_path (Postgres only)
         */
        searchPath?: string;

    }

    interface SetOptions { }

    /**
     * Connection Pool options
     *
     * @see Options
     */
    interface PoolOptions {

        /**
         * Maximum connections of the pool
         */
        max?: number;

        /**
         * Minimum connections of the pool
         */
        min?: number;

        /**
         * The maximum time, in milliseconds, that a connection can be idle before being released.
         */
        idle?: number;

        /**
         * The maximum time, in milliseconds, that pool will try to get connection before throwing error
         */
        acquire?: number;

        /**
         * A function that validates a connection. Called with client. The default function checks that client is an
         * object, and that its state is not disconnected.
         */
        validate?: (client?: any) => boolean;

        /*
         * The time interval, in milliseconds, for evicting stale connections
         */
        evict?: number;

    }

    /**
     * Interface for replication Options in the sequelize constructor
     *
     * @see Options
     */
    interface ReplicationOptions {

        read?: {
            host?: string;
            port?: string | number;
            username?: string;
            password?: string;
            database?: string;
        }[];

        write?: {
            host?: string;
            port?: string | number;
            username?: string;
            password?: string;
            database?: string;
        };

    }

    /**
     * Interface for retry Options in the sequelize constructor and QueryOptions
     *
     * @see Options, QueryOptions
     */
    interface RetryOptions {

        /**
         * Only retry a query if the error matches one of these strings.
         */
        match?: (string|RegExp|Error)[];

        /**
         * How many times a failing query is automatically retried. Set to 0 to disable retrying on SQL_BUSY error.
         */
        max?: number

    }

    /**
     * Operator symbols to be used when querying data
     */
    interface Operators {
        eq: symbol;
        ne: symbol;
        gte: symbol;
        gt: symbol;
        lte: symbol;
        lt: symbol;
        not: symbol;
        is: symbol;
        in: symbol;
        notIn: symbol;
        like: symbol;
        notLike: symbol;
        iLike: symbol;
        notILike: symbol;
        regexp: symbol;
        notRegexp: symbol;
        iRegexp: symbol;
        notIRegexp: symbol;
        between: symbol;
        notBetween: symbol;
        overlap: symbol;
        contains: symbol;
        contained: symbol;
        adjacent: symbol;
        strictLeft: symbol;
        strictRight: symbol;
        noExtendRight: symbol;
        noExtendLeft: symbol;
        and: symbol;
        or: symbol;
        any: symbol;
        all: symbol;
        values: symbol;
        col: symbol;
        placeholder: symbol;
        join: symbol;
        raw: symbol;  //deprecated remove by v5.0
    }

    type OperatorsAliases = Partial<{
        [key: string]: symbol;
        $eq: symbol;
        $ne: symbol;
        $gte: symbol;
        $gt: symbol;
        $lte: symbol;
        $lt: symbol;
        $not: symbol;
        $in: symbol;
        $notIn: symbol;
        $is: symbol;
        $like: symbol;
        $notLike: symbol;
        $iLike: symbol;
        $notILike: symbol;
        $regexp: symbol;
        $notRegexp: symbol;
        $iRegexp: symbol;
        $notIRegexp: symbol;
        $between: symbol;
        $notBetween: symbol;
        $overlap: symbol;
        $contains: symbol;
        $contained: symbol;
        $adjacent: symbol;
        $strictLeft: symbol;
        $strictRight: symbol;
        $noExtendRight: symbol;
        $noExtendLeft: symbol;
        $and: symbol;
        $or: symbol;
        $any: symbol;
        $all: symbol;
        $values: symbol;
        $col: symbol;
        $raw: symbol;  //deprecated remove by v5.0
    }>

    /**
     * Options for the constructor of Sequelize main class
     */
    interface Options {

        /**
         * The dialect of the database you are connecting to. One of mysql, postgres, sqlite, mariadb and mssql.
         *
         * Defaults to 'mysql'
         */
        dialect?: string;

        /**
         * If specified, load the dialect library from this path. For example, if you want to use pg.js instead of
         * pg when connecting to a pg database, you should specify 'pg.js' here
         */
        dialectModulePath?: string;

        /**
         * An object of additional options, which are passed directly to the connection library
         */
        dialectOptions?: Object;

        /**
         * Only used by sqlite.
         *
         * Defaults to ':memory:'
         */
        storage?: string;

        /**
         * The host of the relational database.
         *
         * Defaults to 'localhost'
         */
        host?: string;

        /**
         * The port of the relational database.
         */
        port?: number;

        /**
         * The protocol of the relational database.
         *
         * Defaults to 'tcp'
         */
        protocol?: string;

        /**
         * The username which is used to authenticate against the database.
         */
        username?: string;

        /**
         * The password which is used to authenticate against the database.
         */
        password?: string;

        /**
         * The name of the database
         */
        database?: string;

        /**
         * Default options for model definitions. See sequelize.define for options
         */
        define?: DefineOptions<any>;

        /**
         * Default options for sequelize.query
         */
        query?: QueryOptions;

        /**
         * Default options for sequelize.set
         */
        set?: SetOptions;

        /**
         * Default options for sequelize.sync
         */
        sync?: SyncOptions;

        /**
         * The timezone used when converting a date from the database into a JavaScript date. The timezone is also
         * used to SET TIMEZONE when connecting to the server, to ensure that the result of NOW, CURRENT_TIMESTAMP
         * and other time related functions have in the right timezone. For best cross platform performance use the
         * format
         * +/-HH:MM. Will also accept string versions of timezones used by moment.js (e.g. 'America/Los_Angeles');
         * this is useful to capture daylight savings time changes.
         *
         * Defaults to '+00:00'
         */
        timezone?: string;

        /**
         * A function that gets executed everytime Sequelize would log something.
         *
         * Defaults to console.log
         */
        logging?: boolean | Function;

        /**
         * A flag that defines if null values should be passed to SQL queries or not.
         *
         * Defaults to false
         */
        omitNull?: boolean;

        /**
         * A flag that defines if native library shall be used or not. Currently only has an effect for postgres
         *
         * Defaults to false
         */
        native?: boolean;

        /**
         * Use read / write replication. To enable replication, pass an object, with two properties, read and write.
         * Write should be an object (a single server for handling writes), and read an array of object (several
         * servers to handle reads). Each read/write server can have the following properties: `host`, `port`,
         * `username`, `password`, `database`
         *
         * Defaults to false
         */
        replication?: ReplicationOptions;

        /**
         * Set of flags that control when a query is automatically retried.
         */
        retry?: RetryOptions;

        /**
         * Run built in type validators on insert and update,
         * e.g. validate that arguments passed to integer fields are integer-like.
         *
         * Defaults to false
         */
        typeValidation?: boolean;

        /**
         * Connection pool options
         */
        pool?: PoolOptions;

        /**
         * Set to `false` to make table names and attributes case-insensitive on Postgres and skip double quoting of
         * them.
         *
         * Defaults to true
         */
        quoteIdentifiers?: boolean;

        /**
         * The version of the database. Most times, this is automatically detected and is not needed.
         *
         * Defaults to 0
         */
        databaseVersion?: number;

        /**
         * Set the default transaction isolation level. See `Sequelize.Transaction.ISOLATION_LEVELS` for possible
         * options.
         *
         * Defaults to 'REPEATABLE_READ'
         */
        isolationLevel?: TransactionIsolationLevel;

        /**
         * Set the default transaction type. See `Sequelize.Transaction.TYPES` for possible
         * options.
         *
         * Defaults to 'DEFERRED'
         */
        transactionType?: TransactionType;

        /**
         * Print query execution time in milliseconds when logging SQL.
         *
         * Defaults to false
         */
        benchmark?: boolean;

        /**
         * String based operator alias, default value is true which will enable all operators alias.
         * Pass object to limit set of aliased operators or false to disable completely.
         */
        operatorsAliases?: boolean | OperatorsAliases;
    }

    /**
     * Sequelize methods that are available both for the static and the instance class of Sequelize
     */
    interface SequelizeStaticAndInstance extends Errors {

        /**
         * A reference to sequelize utilities. Most users will not need to use these utils directly. However, you
         * might want to use `Sequelize.Utils._`, which is a reference to the lodash library, if you don't already
         * have it imported in your project.
         */
        Utils: Utils;

        /**
         * A modified version of bluebird promises, that allows listening for sql events
         */
        Promise: typeof Promise;

        /**
         * Available query types for use with `sequelize.query`
         */
        QueryTypes: QueryTypes;

        /**
         * Exposes the validator.js object, so you can extend it with custom validation functions.
         * The validator is exposed both on the instance, and on the constructor.
         */
        Validator: Validator;

        /**
         * A Model represents a table in the database. Sometimes you might also see it referred to as model, or
         * simply as factory. This class should not be instantiated directly, it is created using sequelize.define,
         * and already created models can be loaded using sequelize.import
         */
        Model: Model<any, any>;

        /**
         * A reference to the sequelize transaction class. Use this to access isolationLevels when creating a
         * transaction
         */
        Transaction: TransactionStatic;

        /**
         * A reference to the deferrable collection. Use this to access the different deferrable options.
         */
        Deferrable: Deferrable;

        /**
         * A reference to the sequelize instance class.
         */
        Instance: Instance<any>;

        Op: Operators;

        /**
         * Creates a object representing a database function. This can be used in search queries, both in where and
         * order parts, and as default values in column definitions. If you want to refer to columns in your
         * function, you should use `sequelize.col`, so that the columns are properly interpreted as columns and
         * not a strings.
         *
         * Convert a user's username to upper case
         * ```js
         * instance.updateAttributes({
         *   username: self.sequelize.fn('upper', self.sequelize.col('username'))
         * })
         * ```
         * @param fn The function you want to call
         * @param args All further arguments will be passed as arguments to the function
         */
        fn(fn: string, ...args: any[]): fn;

        /**
         * Creates a object representing a column in the DB. This is often useful in conjunction with
         * `sequelize.fn`, since raw string arguments to fn will be escaped.
         *
         * @param col The name of the column
         */
        col(col: string): col;

        /**
         * Creates a object representing a call to the cast function.
         *
         * @param val The value to cast
         * @param type The type to cast it to
         */
        cast(val: any, type: string): cast;

        /**
         * Creates a object representing a literal, i.e. something that will not be escaped.
         *
         * @param val
         */
        literal(val: any): literal;
        asIs(val: any): literal;

        /**
         * An AND query
         *
         * @param args Each argument will be joined by AND
         */
        and(...args: Array<string | Object>): and;

        /**
         * An OR query
         *
         * @param args Each argument will be joined by OR
         */
        or(...args: Array<string | Object>): or;

        /**
         * Creates an object representing nested where conditions for postgres's json data-type.
         *
         * @param conditionsOrPath A hash containing strings/numbers or other nested hash, a string using dot
         *     notation or a string using postgres json syntax.
         * @param value An optional value to compare against. Produces a string of the form "<json path> =
         *     '<value>'".
         */
        json(conditionsOrPath: string | Object, value?: string | number | boolean): json;

        /**
         * A way of specifying attr = condition.
         *
         * The attr can either be an object taken from `Model.rawAttributes` (for example `Model.rawAttributes.id`
         * or
         * `Model.rawAttributes.name`). The attribute should be defined in your model definition. The attribute can
         * also be an object from one of the sequelize utility functions (`sequelize.fn`, `sequelize.col` etc.)
         *
         * For string attributes, use the regular `{ where: { attr: something }}` syntax. If you don't want your
         * string to be escaped, use `sequelize.literal`.
         *
         * @param attr The attribute, which can be either an attribute object from `Model.rawAttributes` or a
         *     sequelize object, for example an instance of `sequelize.fn`. For simple string attributes, use the
         *     POJO syntax
         * @param comparator Comparator
         * @param logic The condition. Can be both a simply type, or a further condition (`.or`, `.and`, `.literal`
         *     etc.)
         */
        where(attr: Object, comparator: string, logic: string | Object): where;
        where(attr: Object, logic: string | Object): where;
        condition(attr: Object, logic: string | Object): where;

    }

    /**
     * Sequelize methods available only for the static class ( basically this is the constructor and some extends )
     */
    interface SequelizeStatic extends SequelizeStaticAndInstance, DataTypes {

        /**
         * Instantiate sequelize with name of database, username and password
         *
         * #### Example usage
         *
         * ```javascript
         * // without password and options
         * var sequelize = new Sequelize('database', 'username')
         *
         * // without options
         * var sequelize = new Sequelize('database', 'username', 'password')
         *
         * // without password / with blank password
         * var sequelize = new Sequelize('database', 'username', null, {})
         *
         * // with password and options
         * var sequelize = new Sequelize('my_database', 'john', 'doe', {})
         *
         * // with uri (see below)
         * var sequelize = new Sequelize('mysql://localhost:3306/database', {})
         * ```
         *
         * @param database The name of the database
         * @param username The username which is used to authenticate against the
         *     database.
         * @param password The password which is used to authenticate against the
         *     database.
         * @param options An object with options.
         */
        new (database: string, username: string, password: string, options?: Options): Sequelize;
        new (database: string, username: string, options?: Options): Sequelize;

        /**
         * Instantiate sequelize with an URI
         * @name Sequelize
         * @constructor
         *
         * @param uri A full database URI
         * @param options See above for possible options
         */
        new (uri: string, options?: Options): Sequelize;

        /**
         * Instantiate sequelize with an options object which containing username, password, database
         * @name Sequelize
         * @constructor
         *
         * @param options An object with options. See above for possible options
         */
        new (options: Options): Sequelize;

        /**
         * Provide access to continuation-local-storage (http://docs.sequelizejs.com/en/latest/api/sequelize/#transactionoptions-promise)
         */
        cls: any;
        useCLS(namespace:cls.Namespace): Sequelize;

    }

    interface QueryOptionsTransactionRequired { }
    interface ModelsHashInterface {
        [name: string]: Model<any, any>;
    }

    /**
     * This is the main class, the entry point to sequelize. To use it, you just need to
     * import sequelize:
     *
     * ```js
     * var Sequelize = require('sequelize');
     * ```
     *
     * In addition to sequelize, the connection library for the dialect you want to use
     * should also be installed in your project. You don't need to import it however, as
     * sequelize will take care of that.
     */
    interface Sequelize extends SequelizeStaticAndInstance, Hooks<any> {

        /**
         * A reference to Sequelize constructor from sequelize. Useful for accessing DataTypes, Errors etc.
         */
        Sequelize: SequelizeStatic;

        /**
         * Defined models.
         */
        models: ModelsHashInterface;

        /**
         * Defined options.
         */
        options: Options;

        /**
         * Returns the specified dialect.
         */
        getDialect(): string;

        /**
         * Returns an instance of QueryInterface.
         */
        getQueryInterface(): QueryInterface;

        /**
         * Define a new model, representing a table in the DB.
         *
         * The table columns are define by the hash that is given as the second argument. Each attribute of the
         * hash
         * represents a column. A short table definition might look like this:
         *
         * ```js
         * sequelize.define('modelName', {
         *     columnA: {
         *         type: Sequelize.BOOLEAN,
         *         validate: {
         *           is: ["[a-z]",'i'],        // will only allow letters
         *           max: 23,                  // only allow values <= 23
         *           isIn: {
         *             args: [['en', 'zh']],
         *             msg: "Must be English or Chinese"
         *           }
         *         },
         *         field: 'column_a'
         *         // Other attributes here
         *     },
         *     columnB: Sequelize.STRING,
         *     columnC: 'MY VERY OWN COLUMN TYPE'
         * })
         *
         * sequelize.models.modelName // The model will now be available in models under the name given to define
         * ```
         *
         * As shown above, column definitions can be either strings, a reference to one of the datatypes that are
         * predefined on the Sequelize constructor, or an object that allows you to specify both the type of the
         * column, and other attributes such as default values, foreign key constraints and custom setters and
         * getters.
         *
         * For a list of possible data types, see
         * http://docs.sequelizejs.com/en/latest/docs/models-definition/#data-types
         *
         * For more about getters and setters, see
         * http://docs.sequelizejs.com/en/latest/docs/models-definition/#getters-setters
         *
         * For more about instance and class methods, see
         * http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models
         *
         * For more about validation, see
         * http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations
         *
         * @param modelName  The name of the model. The model will be stored in `sequelize.models` under this name
         * @param attributes An object, where each attribute is a column of the table. Each column can be either a
         *                   DataType, a string or a type-description object, with the properties described below:
         * @param options    These options are merged with the default define options provided to the Sequelize
         *                   constructor
         */
        define<TInstance, TAttributes>(modelName: string, attributes: DefineAttributes,
            options?: DefineOptions<TInstance>): Model<TInstance, TAttributes>;

        /**
         * Fetch a Model which is already defined
         *
         * @param modelName The name of a model defined with Sequelize.define
         */
        model<TInstance, TAttributes>(modelName: string): Model<TInstance, TAttributes>;

        /**
         * Checks whether a model with the given name is defined
         *
         * @param modelName The name of a model defined with Sequelize.define
         */
        isDefined(modelName: string): boolean;

        /**
         * Imports a model defined in another file
         *
         * Imported models are cached, so multiple calls to import with the same path will not load the file
         * multiple times
         *
         * See https://github.com/sequelize/sequelize/blob/master/examples/using-multiple-model-files/Task.js for a
         * short example of how to define your models in separate files so that they can be imported by
         * sequelize.import
         *
         * @param path The path to the file that holds the model you want to import. If the part is relative, it
         *     will be resolved relatively to the calling file
         *
         * @param defineFunction An optional function that provides model definitions. Useful if you do not
         *     want to use the module root as the define function
         */
        import<TInstance, TAttributes>(path: string, defineFunction?: (sequelize: Sequelize, dataTypes: DataTypes) => Model<TInstance, TAttributes>): Model<TInstance, TAttributes>;

        /**
         * Execute a query on the DB, with the posibility to bypass all the sequelize goodness.
         *
         * By default, the function will return two arguments: an array of results, and a metadata object,
         * containing number of affected rows etc. Use `.spread` to access the results.
         *
         * If you are running a type of query where you don't need the metadata, for example a `SELECT` query, you
         * can pass in a query type to make sequelize format the results:
         *
         * ```js
         * sequelize.query('SELECT...').spread(function (results, metadata) {
         *   // Raw query - use spread
         * });
         *
         * sequelize.query('SELECT...', { type: sequelize.QueryTypes.SELECT }).then(function (results) {
         *   // SELECT query - use then
         * })
         * ```
         *
         * @param sql
         * @param options Query options
         */
        query(sql: string | { query: string, values: any[] }, options?: QueryOptions): Promise<any>;

        /**
         * Execute a query which would set an environment or user variable. The variables are set per connection,
         * so this function needs a transaction.
         *
         * Only works for MySQL.
         *
         * @param variables Object with multiple variables.
         * @param options Query options.
         */
        set(variables: Object, options: QueryOptionsTransactionRequired): Promise<any>;

        /**
         * Escape value.
         *
         * @param value Value that needs to be escaped
         */
        escape(value: string): string;

        /**
         * Create a new database schema.
         *
         * Note,that this is a schema in the
         * [postgres sense of the word](http://www.postgresql.org/docs/9.1/static/ddl-schemas.html),
         * not a database table. In mysql and sqlite, this command will do nothing.
         *
         * @param schema Name of the schema
         * @param options Options supplied
         * @param options.logging A function that logs sql queries, or false for no logging
         */
        createSchema(schema: string, options: { logging?: boolean | Function }): Promise<any>;

        /**
         * Show all defined schemas
         *
         * Note,that this is a schema in the
         * [postgres sense of the word](http://www.postgresql.org/docs/9.1/static/ddl-schemas.html),
         * not a database table. In mysql and sqlite, this will show all tables.
         *
         * @param options Options supplied
         * @param options.logging A function that logs sql queries, or false for no logging
         */
        showAllSchemas(options: { logging?: boolean | Function }): Promise<any>;

        /**
         * Drop a single schema
         *
         * Note,that this is a schema in the
         * [postgres sense of the word](http://www.postgresql.org/docs/9.1/static/ddl-schemas.html),
         * not a database table. In mysql and sqlite, this drop a table matching the schema name
         *
         * @param schema Name of the schema
         * @param options Options supplied
         * @param options.logging A function that logs sql queries, or false for no logging
         */
        dropSchema(schema: string, options: { logging?: boolean | Function }): Promise<any>;

        /**
         * Drop all schemas
         *
         * Note,that this is a schema in the
         * [postgres sense of the word](http://www.postgresql.org/docs/9.1/static/ddl-schemas.html),
         * not a database table. In mysql and sqlite, this is the equivalent of drop all tables.
         *
         * @param options Options supplied
         * @param options.logging A function that logs sql queries, or false for no logging
         */
        dropAllSchemas(options: { logging?: boolean | Function }): Promise<any>;

        /**
         * Sync all defined models to the DB.
         *
         * @param options Sync Options
         */
        sync(options?: SyncOptions): Promise<any>;

        /**
         * Truncate all tables defined through the sequelize models. This is done
         * by calling Model.truncate() on each model.
         *
         * @param {object} [options] The options passed to Model.destroy in addition to truncate
         * @param {Boolean|function} [options.transaction]
         * @param {Boolean|function} [options.logging] A function that logs sql queries, or false for no logging
         */
        truncate(options?: DestroyOptions): Promise<any>;

        /**
         * Drop all tables defined through this sequelize instance. This is done by calling Model.drop on each model
         * @see {Model#drop} for options
         *
         * @param options The options passed to each call to Model.drop
         */
        drop(options?: DropOptions): Promise<any>;

        /**
         * Test the connection by trying to authenticate
         *
         * @param options Query Options for authentication
         */
        authenticate(options?: QueryOptions): Promise<void>;
        validate(options?: QueryOptions): Promise<ValidationError>;

        /**
         * Start a transaction. When using transactions, you should pass the transaction in the options argument
         * in order for the query to happen under that transaction
         *
         * ```js
         * sequelize.transaction().then(function (t) {
         *   return User.find(..., { transaction: t}).then(function (user) {
         *     return user.updateAttributes(..., { transaction: t});
         *   })
         *   .then(t.commit.bind(t))
         *   .catch(t.rollback.bind(t));
         * })
         * ```
         *
         * A syntax for automatically committing or rolling back based on the promise chain resolution is also
         * supported:
         *
         * ```js
         * sequelize.transaction(function (t) { // Note that we use a callback rather than a promise.then()
         *   return User.find(..., { transaction: t}).then(function (user) {
         *     return user.updateAttributes(..., { transaction: t});
         *   });
         * }).then(function () {
         *   // Commited
         * }).catch(function (err) {
         *   // Rolled back
         *   console.error(err);
         * });
         * ```
         *
         * If you have [CLS](https://github.com/othiym23/node-continuation-local-storage) enabled, the transaction
         * will automatically be passed to any query that runs witin the callback. To enable CLS, add it do your
         * project, create a namespace and set it on the sequelize constructor:
         *
         * ```js
         * var cls = require('continuation-local-storage'),
         *     ns = cls.createNamespace('....');
         * var Sequelize = require('sequelize');
         * Sequelize.cls = ns;
         * ```
         * Note, that CLS is enabled for all sequelize instances, and all instances will share the same namespace
         *
         * @param options Transaction Options
         * @param autoCallback Callback for the transaction
         */
        transaction(options: TransactionOptions,
            autoCallback: (t: Transaction) => PromiseLike<any>): Promise<any>;
        transaction(autoCallback: (t: Transaction) => PromiseLike<any>): Promise<any>;
        transaction(options?: TransactionOptions): Promise<Transaction>;

        /**
         * Close all connections used by this sequelize instance, and free all references so the instance can be
         * garbage collected.
         *
         * Normally this is done on process exit, so you only need to call this method if you are creating multiple
         * instances, and want to garbage collect some of them.
         */
        close(): Promise<void>;

        /**
         * Returns the database version
         */
        databaseVersion(): Promise<string>;

    }

    //
    //  Validator
    // ~~~~~~~~~~~

    /**
     * Validator Interface
     */
    interface Validator extends ValidatorJS.ValidatorStatic {

        notEmpty(str: string): boolean;
        len(str: string, min: number, max: number): boolean;
        isUrl(str: string): boolean;
        isIPv6(str: string): boolean;
        isIPv4(str: string): boolean;
        notIn(str: string, values: string[]): boolean;
        regex(str: string, pattern: string, modifiers: string): boolean;
        notRegex(str: string, pattern: string, modifiers: string): boolean;
        isDecimal(str: string): boolean;
        min(str: string, val: number): boolean;
        max(str: string, val: number): boolean;
        not(str: string, pattern: string, modifiers: string): boolean;
        contains(str: string, element: string[]): boolean;
        notContains(str: string, element: string[]): boolean;
        is(str: string, pattern: string, modifiers: string): boolean;

    }

    //
    //  Transaction
    // ~~~~~~~~~~~~~
    //
    //  https://github.com/sequelize/sequelize/blob/v3.4.1/lib/transaction.js
    //

    /**
     * The transaction object is used to identify a running transaction. It is created by calling
     * `Sequelize.transaction()`.
     *
     * To run a query under a transaction, you should pass the transaction in the options object.
     */
    interface Transaction {

        /**
         * Possible options for row locking. Used in conjuction with `find` calls:
         *
         * @see TransactionStatic
         */
        LOCK: TransactionLock;

        /**
         * Commit the transaction
         */
        commit(): Promise<void>;

        /**
         * Rollback (abort) the transaction
         */
        rollback(): Promise<void>;

    }

    /**
     * The transaction static object
     *
     * @see Transaction
     */
    interface TransactionStatic {

        /**
         * Isolations levels can be set per-transaction by passing `options.isolationLevel` to
         * `sequelize.transaction`. Default to `REPEATABLE_READ` but you can override the default isolation level
         * by passing
         * `options.isolationLevel` in `new Sequelize`.
         *
         * The possible isolations levels to use when starting a transaction:
         *
         * ```js
         * {
         *   READ_UNCOMMITTED: "READ UNCOMMITTED",
         *   READ_COMMITTED: "READ COMMITTED",
         *   REPEATABLE_READ: "REPEATABLE READ",
         *   SERIALIZABLE: "SERIALIZABLE"
         * }
         * ```
         *
         * Pass in the desired level as the first argument:
         *
         * ```js
         * return sequelize.transaction({
         *   isolationLevel: Sequelize.Transaction.SERIALIZABLE
         * }, function (t) {
         *
         *  // your transactions
         *
         * }).then(function(result) {
         *   // transaction has been committed. Do something after the commit if required.
         * }).catch(function(err) {
         *   // do something with the err.
         * });
         * ```
         *
         * @see ISOLATION_LEVELS
         */
        ISOLATION_LEVELS: TransactionIsolationLevels;

        /**
         * Transaction type can be set per-transaction by passing `options.type` to
         * `sequelize.transaction`. Default to `DEFERRED` but you can override the default isolation level
         * by passing `options.transactionType` in `new Sequelize`.
         *
         * The transaction types to use when starting a transaction:
         *
         * ```js
         * {
         *   DEFERRED: "DEFERRED",
         *   IMMEDIATE: "IMMEDIATE",
         *   EXCLUSIVE: "EXCLUSIVE"
         * }
         * ```
         *
         * Pass in the transaction type the first argument:
         *
         * ```js
         * return sequelize.transaction({
         *   type: Sequelize.Transaction.EXCLUSIVE
         * }, function (t) {
         *
         *  // your transactions
         *
         * }).then(function(result) {
         *   // transaction has been committed. Do something after the commit if required.
         * }).catch(function(err) {
         *   // do something with the err.
         * });
         * ```
         *
         * @see Sequelize.Transaction.TYPES
         */
        TYPES: TransactionTypes;

        /**
         * Possible options for row locking. Used in conjuction with `find` calls:
         *
         * ```js
         * t1 // is a transaction
         * t1.LOCK.UPDATE,
         * t1.LOCK.SHARE,
         * t1.LOCK.KEY_SHARE, // Postgres 9.3+ only
         * t1.LOCK.NO_KEY_UPDATE // Postgres 9.3+ only
         * ```
         *
         * Usage:
         * ```js
         * t1 // is a transaction
         * Model.findAll({
         *   where: ...,
         *   transaction: t1,
         *   lock: t1.LOCK...
         * });
         * ```
         *
         * Postgres also supports specific locks while eager loading by using OF:
         * ```js
         * UserModel.findAll({
         *   where: ...,
         *   include: [TaskModel, ...],
         *   transaction: t1,
         *   lock: {
         *     level: t1.LOCK...,
         *     of: UserModel
         *   }
         * });
         * ```
         * UserModel will be locked but TaskModel won't!
         */
        LOCK: TransactionLock;

    }

    type TransactionIsolationLevelReadUncommitted = 'READ UNCOMMITTED';
    type TransactionIsolationLevelReadCommitted = 'READ COMMITTED';
    type TransactionIsolationLevelRepeatableRead = 'REPEATABLE READ';
    type TransactionIsolationLevelSerializable = 'SERIALIZABLE';
    type TransactionIsolationLevel = TransactionIsolationLevelReadUncommitted | TransactionIsolationLevelReadCommitted | TransactionIsolationLevelRepeatableRead | TransactionIsolationLevelSerializable;

    /**
     * Isolations levels can be set per-transaction by passing `options.isolationLevel` to `sequelize.transaction`.
     * Default to `REPEATABLE_READ` but you can override the default isolation level by passing
     * `options.isolationLevel` in `new Sequelize`.
     */
    interface TransactionIsolationLevels {
        READ_UNCOMMITTED: TransactionIsolationLevelReadUncommitted; // 'READ UNCOMMITTED'
        READ_COMMITTED: TransactionIsolationLevelReadCommitted; // 'READ COMMITTED'
        REPEATABLE_READ: TransactionIsolationLevelRepeatableRead; // 'REPEATABLE READ'
        SERIALIZABLE: TransactionIsolationLevelSerializable; // 'SERIALIZABLE'
    }

    type TransactionTypeDeferred = 'DEFERRED';
    type TransactionTypeImmediate = 'IMMEDIATE';
    type TransactionTypeExclusive = 'EXCLUSIVE';
    type TransactionType = TransactionTypeDeferred | TransactionTypeImmediate | TransactionTypeExclusive;

    /**
     * Transaction type can be set per-transaction by passing `options.type` to `sequelize.transaction`.
     * Default to `DEFERRED` but you can override the default isolation level by passing
     * `options.transactionType` in `new Sequelize`.
     */
    interface TransactionTypes {
        DEFERRED: TransactionTypeDeferred; // 'DEFERRED'
        IMMEDIATE: TransactionTypeImmediate; // 'IMMEDIATE'
        EXCLUSIVE: TransactionTypeExclusive; // 'EXCLUSIVE'
    }

    type TransactionLockLevelUpdate = 'UPDATE';
    type TransactionLockLevelShare = 'SHARE';
    type TransactionLockLevelKeyShare = 'KEY SHARE';
    type TransactionLockLevelNoKeyUpdate = 'NO KEY UPDATE';
    type TransactionLockLevel = TransactionLockLevelUpdate | TransactionLockLevelShare | TransactionLockLevelKeyShare | TransactionLockLevelNoKeyUpdate;

    /**
     * Possible options for row locking. Used in conjuction with `find` calls:
     */
    interface TransactionLock {
        UPDATE: TransactionLockLevelUpdate; // 'UPDATE'
        SHARE: TransactionLockLevelShare; // 'SHARE'
        KEY_SHARE: TransactionLockLevelKeyShare; // 'KEY SHARE'
        NO_KEY_UPDATE: TransactionLockLevelNoKeyUpdate; // 'NO KEY UPDATE'
    }

    /**
     * Options provided when the transaction is created
     *
     * @see sequelize.transaction()
     */
    interface TransactionOptions {

        autocommit?: boolean;

        /**
         *  See `Sequelize.Transaction.ISOLATION_LEVELS` for possible options
         */
        isolationLevel?: TransactionIsolationLevel;

        /**
         *  See `Sequelize.Transaction.TYPES` for possible options
         */
        type?: TransactionType;

        /**
         * A function that gets executed while running the query to log the sql.
         */
        logging?: Function;

    }

    //
    //  Utils
    // ~~~~~~~

    interface fn {
        clone: fnStatic;
    }

    interface fnStatic {
        /**
         * @param fn The function you want to call
         * @param args All further arguments will be passed as arguments to the function
         */
        new (fn: string, ...args: any[]): fn;
    }

    interface col {
        col: string;
    }

    interface colStatic {
        /**
         * Creates a object representing a column in the DB. This is often useful in conjunction with
         * `sequelize.fn`, since raw string arguments to fn will be escaped.
         * @see {Sequelize#fn}
         *
         * @param col The name of the column
         */
        new (col: string): col;
    }

    interface cast {
        val: any;
        type: string;
    }

    interface castStatic {
        /**
         * Creates a object representing a call to the cast function.
         *
         * @param val The value to cast
         * @param type The type to cast it to
         */
        new (val: any, type: string): cast;
    }

    interface literal {
        val: any;
    }

    interface literalStatic {
        /**
         * Creates a object representing a literal, i.e. something that will not be escaped.
         *
         * @param val
         */
        new (val: any): literal;
    }

    interface and {
        args: any[];
    }

    interface andStatic {
        /**
         * An AND query
         *
         * @param args Each argument will be joined by AND
         */
        new (...args: Array<string | Object>): and;
    }

    interface or {
        args: any[];
    }

    interface orStatic {
        /**
         * An OR query
         * @see {Model#find}
         *
         * @param args Each argument will be joined by OR
         */
        new (...args: Array<string | Object>): or;
    }

    interface json {
        conditions?: Object;
        path?: string;
        value?: string | number | boolean;
    }

    interface jsonStatic {
        /**
         * Creates an object representing nested where conditions for postgres's json data-type.
         * @see {Model#find}
         *
         * @method json
         * @param conditionsOrPath A hash containing strings/numbers or other nested hash, a string using dot
         *     notation or a string using postgres json syntax.
         * @param value An optional value to compare against. Produces a string of the form "<json path> =
         *     '<value>'".
         */
        new (conditionsOrPath: string | Object, value?: string | number | boolean): json;
    }

    interface where {
        attribute: Object;
        comparator?: string;
        logic: string | Object;
    }

    interface whereStatic {
        /**
         * A way of specifying attr = condition.
         *
         * The attr can either be an object taken from `Model.rawAttributes` (for example `Model.rawAttributes.id`
         * or
         * `Model.rawAttributes.name`). The attribute should be defined in your model definition. The attribute can
         * also be an object from one of the sequelize utility functions (`sequelize.fn`, `sequelize.col` etc.)
         *
         * For string attributes, use the regular `{ where: { attr: something }}` syntax. If you don't want your
         * string to be escaped, use `sequelize.literal`.
         *
         * @param attr The attribute, which can be either an attribute object from `Model.rawAttributes` or a
         *     sequelize object, for example an instance of `sequelize.fn`. For simple string attributes, use the
         *     POJO syntax
         * @param comparator Comparator
         * @param logic The condition. Can be both a simply type, or a further condition (`.or`, `.and`, `.literal`
         *     etc.)
         */
        new (attr: Object, comparator: string, logic: string | Object): where;
        new (attr: Object, logic: string | Object): where;
    }

    interface SequelizeLoDash extends _.LoDashStatic {

        camelizeIf(str: string, condition: boolean): string;
        underscoredIf(str: string, condition: boolean): string;
        /**
         * * Returns an array with some falsy values removed. The values null, "", undefined and NaN are considered
         * falsey.
         *
         * @param arr Array to compact.
         */
        compactLite<T>(arr: T[]): T[];
        matchesDots(dots: string | string[], value: Object): (item: Object) => boolean;

    }

    interface Utils {

        _: SequelizeLoDash;

        /**
         * Same concept as _.merge, but don't overwrite properties that have already been assigned
         */
        mergeDefaults: typeof _.merge;

        lowercaseFirst(str: string): string;
        uppercaseFirst(str: string): string;
        spliceStr(str: string, index: number, count: number, add: string): string;
        camelize(str: string): string;
        format(arr: any[], dialect?: string): string;
        formatNamedParameters(sql: string, parameters: any, dialect?: string): string;
        cloneDeep<T extends Object>(obj: T, fn?: (value: T) => any): T;
        mapOptionFieldNames<T extends Object>(options: T, Model: Model<any, any>): T;
        mapValueFieldNames(dataValues: Object, fields: string[], Model: Model<any, any>): Object;
        argsArePrimaryKeys(args: any[], primaryKeys: Object): boolean;
        canTreatArrayAsAnd(arr: any[]): boolean;
        combineTableNames(tableName1: string, tableName2: string): string;
        singularize(s: string): string;
        pluralize(s: string): string;
        removeCommentsFromFunctionString(s: string): string;
        toDefaultValue(value: DataTypeAbstract): any;
        toDefaultValue(value: () => DataTypeAbstract): any;

        /**
         * Determine if the default value provided exists and can be described
         * in a db schema using the DEFAULT directive.
         */
        defaultValueSchemable(value: any): boolean;

        removeNullValuesFromHash(hash: Object, omitNull?: boolean, options?: Object): any;
        inherit(subClass: Object, superClass: Object): Object;
        stack(): string;
        sliceArgs(args: any[], begin?: number): any[];
        now(dialect: string): Date;
        tick(f: Function): void;
        addTicks(s: string, tickChar?: string): string;
        removeTicks(s: string, tickChar?: string): string;

        fn: fnStatic;
        col: colStatic;
        cast: castStatic;
        literal: literalStatic;
        and: andStatic;
        or: orStatic;
        json: jsonStatic;
        where: whereStatic;

        validateParameter(value: Object, expectation: Object, options?: Object): boolean;
        formatReferences(obj: Object): Object;
        Promise: typeof Promise;

    }

}

declare var sequelize: sequelize.SequelizeStatic;

export = sequelize;
