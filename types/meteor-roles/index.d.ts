// Type definitions for Meteor Roles 1.2.14
// Project: https://github.com/alanning/meteor-roles/
// Definitions by: Robbie Van Gorkom <https://github.com/vangorra>
//                 Matthew Zartman <https://github.com/mattmm3d>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

/// <reference types="meteor" />

/**
 * Provides functions related to user authorization. Compatible with built-in Meteor accounts packages.
 *
 * @module Roles
 */
declare namespace Roles {
    /**
     * Constant used to reference the special 'global' group that
     * can be used to apply blanket permissions across all groups.
     *
     * @example
     *     Roles.addUsersToRoles(user, 'admin', Roles.GLOBAL_GROUP)
     *     Roles.userIsInRole(user, 'admin') // => true
     *
     *     Roles.setUserRoles(user, 'support-staff', Roles.GLOBAL_GROUP)
     *     Roles.userIsInRole(user, 'support-staff') // => true
     *     Roles.userIsInRole(user, 'admin') // => false
     *
     * @property GLOBAL_GROUP
     * @type String
     * @static
     * @final
     */
    var GLOBAL_GROUP : string;

    /**
     * Subscription handle for the currently logged in user's permissions.
     *
     * NOTE: The corresponding publish function, `_roles`, depends on
     * `this.userId` so it will automatically re-run when the currently
     * logged-in user changes.
     *
     * @example
     *
     *     `Roles.subscription.ready()` // => `true` if user roles have been loaded
     *
     * @property subscription
     * @type Object
     * @for Roles
     */
    var subscription : Subscription;

    /**
     * Add users to roles. Will create roles as needed.
     *
     * NOTE: Mixing grouped and non-grouped roles for the same user
     *       is not supported and will throw an error.
     *
     * Makes 2 calls to database:
     *  1. retrieve list of all existing roles
     *  2. update users' roles
     *
     * @example
     *     Roles.addUsersToRoles(userId, 'admin')
     *     Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com')
     *     Roles.addUsersToRoles([user1, user2], ['user','editor'])
     *     Roles.addUsersToRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')
     *     Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP)
     *
     * @method addUsersToRoles
     * @param {Array|String} users User id(s) or object(s) with an _id field
     * @param {Array|String} roles Name(s) of roles/permissions to add users to
     * @param {String} [group] Optional group name. If supplied, roles will be
     *                         specific to that group.
     *                         Group names can not start with '$' or numbers.
     *                         Periods in names '.' are automatically converted
     *                         to underscores.
     *                         The special group Roles.GLOBAL_GROUP provides
     *                         a convenient way to assign blanket roles/permissions
     *                         across all groups.  The roles/permissions in the
     *                         Roles.GLOBAL_GROUP group will be automatically
     *                         included in checks for any group.
     */
    function addUsersToRoles(
        user : string|string[]|Object|Object[],
        roles : string|string[],
        group? : string
    ) : void;

    /**
     * Create a new role. Whitespace will be trimmed.
     *
     * @method createRole
     * @param {String} role Name of role
     * @return {String} id of new role
     */
    function createRole(role : string) : string;

    /**
     * Delete an existing role.  Will throw "Role in use" error if any users
     * are currently assigned to the target role.
     *
     * @method deleteRole
     * @param {String} role Name of role
     */
    function deleteRole (role : string) : void;

    /**
     * Retrieve set of all existing roles
     *
     * @method getAllRoles
     * @return {Cursor} cursor of existing roles
     */
    function getAllRoles() : Mongo.Cursor<Role>;

    /**
     * Retrieve users groups, if any
     *
     * @method getGroupsForUser
     * @param {String|Object} user User Id or actual user object
     * @param {String} [role] Optional name of roles to restrict groups to.
     *
     * @return {Array} Array of user's groups, unsorted. Roles.GLOBAL_GROUP will be omitted
     */
    function getGroupsForUser(
        user : string|Object,
        role? : string
    ) : string[];

    /**
     * Retrieve users roles
     *
     * @method getRolesForUser
     * @param {String|Object} user User Id or actual user object
     * @param {String} [group] Optional name of group to restrict roles to.
     *                         User's Roles.GLOBAL_GROUP will also be included.
     * @return {Array} Array of user's roles, unsorted.
     */
    function getRolesForUser(
        user : string|Object,
        group? : string
    ) : string[];

    /**
     * Retrieve all users who are in target role.
     *
     * NOTE: This is an expensive query; it performs a full collection scan
     * on the users collection since there is no index set on the 'roles' field.
     * This is by design as most queries will specify an _id so the _id index is
     * used automatically.
     *
     * @method getUsersInRole
     * @param {Array|String} role Name of role/permission.  If array, users
     *                            returned will have at least one of the roles
     *                            specified but need not have _all_ roles.
     * @param {String} [group] Optional name of group to restrict roles to.
     *                         User's Roles.GLOBAL_GROUP will also be checked.
     * @param {Object} [options] Optional options which are passed directly
     *                           through to `Meteor.users.find(query, options)`
     * @return {Cursor} cursor of users in role
     */
    function getUsersInRole(
        role : string|string[],
        group? : string,
        options? : {
            sort?: Mongo.SortSpecifier | undefined;
        skip?: number | undefined;
        limit?: number | undefined;
        fields?: Mongo.FieldSpecifier | undefined;
        reactive?: boolean | undefined;
        transform?: Function | undefined;
    }) : Mongo.Cursor<Meteor.User>;

    /**
     * Remove users from roles
     *
     * @example
     *     Roles.removeUsersFromRoles(users.bob, 'admin')
     *     Roles.removeUsersFromRoles([users.bob, users.joe], ['editor'])
     *     Roles.removeUsersFromRoles([users.bob, users.joe], ['editor', 'user'])
     *     Roles.removeUsersFromRoles(users.eve, ['user'], 'group1')
     *
     * @method removeUsersFromRoles
     * @param {Array|String} users User id(s) or object(s) with an _id field
     * @param {Array|String} roles Name(s) of roles to add users to
     * @param {String} [group] Optional. Group name. If supplied, only that
     *                         group will have roles removed.
     */
    function removeUsersFromRoles(
        user : string|string[]|Object|Object[],
        roles? : string[],
        group? : string
    ) : void;

    /**
     * Set a users roles/permissions.
     *
     * @example
     *     Roles.setUserRoles(userId, 'admin')
     *     Roles.setUserRoles(userId, ['view-secrets'], 'example.com')
     *     Roles.setUserRoles([user1, user2], ['user','editor'])
     *     Roles.setUserRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')
     *     Roles.setUserRoles(userId, 'admin', Roles.GLOBAL_GROUP)
     *
     * @method setUserRoles
     * @param {Array|String} users User id(s) or object(s) with an _id field
     * @param {Array|String} roles Name(s) of roles/permissions to add users to
     * @param {String} [group] Optional group name. If supplied, roles will be
     *                         specific to that group.
     *                         Group names can not start with '$'.
     *                         Periods in names '.' are automatically converted
     *                         to underscores.
     *                         The special group Roles.GLOBAL_GROUP provides
     *                         a convenient way to assign blanket roles/permissions
     *                         across all groups.  The roles/permissions in the
     *                         Roles.GLOBAL_GROUP group will be automatically
     *                         included in checks for any group.
     */
    function setUserRoles (
        user : string|string[]|Object|Object[],
        roles : string|string[],
        group? : string
    ) : void;

    /**
     * Check if user has specified permissions/roles
     *
     * @example
     *     // non-group usage
     *     Roles.userIsInRole(user, 'admin')
     *     Roles.userIsInRole(user, ['admin','editor'])
     *     Roles.userIsInRole(userId, 'admin')
     *     Roles.userIsInRole(userId, ['admin','editor'])
     *
     *     // per-group usage
     *     Roles.userIsInRole(user,   ['admin','editor'], 'group1')
     *     Roles.userIsInRole(userId, ['admin','editor'], 'group1')
     *     Roles.userIsInRole(userId, ['admin','editor'], Roles.GLOBAL_GROUP)
     *
     *     // this format can also be used as short-hand for Roles.GLOBAL_GROUP
     *     Roles.userIsInRole(user, 'admin')
     *
     * @method userIsInRole
     * @param {String|Object} user User Id or actual user object
     * @param {String|Array} roles Name of role/permission or Array of
     *                            roles/permissions to check against.  If array,
     *                            will return true if user is in _any_ role.
     * @param {String} [group] Optional. Name of group.  If supplied, limits check
     *                         to just that group.
     *                         The user's Roles.GLOBAL_GROUP will always be checked
     *                         whether group is specified or not.
     * @return {Boolean} true if user is in _any_ of the target roles
     */
    function userIsInRole(
        user : string|string[]|Object|Object[],
        roles : string|string[],
        group? : string
    ) : boolean;

    interface Role {
        name : string;
    }
} // module

declare namespace Meteor {
    var roles : Mongo.Collection<Roles.Role>;
}


/* Declaring in the format prescribed by Meteor */
declare module "meteor/alanning:roles" {
    namespace Roles {
        /**
         * Constant used to reference the special 'global' group that
         * can be used to apply blanket permissions across all groups.
         *
         * @example
         *     Roles.addUsersToRoles(user, 'admin', Roles.GLOBAL_GROUP)
         *     Roles.userIsInRole(user, 'admin') // => true
         *
         *     Roles.setUserRoles(user, 'support-staff', Roles.GLOBAL_GROUP)
         *     Roles.userIsInRole(user, 'support-staff') // => true
         *     Roles.userIsInRole(user, 'admin') // => false
         *
         * @property GLOBAL_GROUP
         * @type String
         * @static
         * @final
         */
        var GLOBAL_GROUP : string;

        /**
         * Subscription handle for the currently logged in user's permissions.
         *
         * NOTE: The corresponding publish function, `_roles`, depends on
         * `this.userId` so it will automatically re-run when the currently
         * logged-in user changes.
         *
         * @example
         *
         *     `Roles.subscription.ready()` // => `true` if user roles have been loaded
         *
         * @property subscription
         * @type Object
         * @for Roles
         */
        var subscription : Subscription;

        /**
         * Add users to roles. Will create roles as needed.
         *
         * NOTE: Mixing grouped and non-grouped roles for the same user
         *       is not supported and will throw an error.
         *
         * Makes 2 calls to database:
         *  1. retrieve list of all existing roles
         *  2. update users' roles
         *
         * @example
         *     Roles.addUsersToRoles(userId, 'admin')
         *     Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com')
         *     Roles.addUsersToRoles([user1, user2], ['user','editor'])
         *     Roles.addUsersToRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')
         *     Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP)
         *
         * @method addUsersToRoles
         * @param {Array|String} users User id(s) or object(s) with an _id field
         * @param {Array|String} roles Name(s) of roles/permissions to add users to
         * @param {String} [group] Optional group name. If supplied, roles will be
         *                         specific to that group.
         *                         Group names can not start with '$' or numbers.
         *                         Periods in names '.' are automatically converted
         *                         to underscores.
         *                         The special group Roles.GLOBAL_GROUP provides
         *                         a convenient way to assign blanket roles/permissions
         *                         across all groups.  The roles/permissions in the
         *                         Roles.GLOBAL_GROUP group will be automatically
         *                         included in checks for any group.
         */
        function addUsersToRoles(
            user : string|string[]|Object|Object[],
            roles : string|string[],
            group? : string
        ) : void;

        /**
         * Create a new role. Whitespace will be trimmed.
         *
         * @method createRole
         * @param {String} role Name of role
         * @return {String} id of new role
         */
        function createRole(role : string) : string;

        /**
         * Delete an existing role.  Will throw "Role in use" error if any users
         * are currently assigned to the target role.
         *
         * @method deleteRole
         * @param {String} role Name of role
         */
        function deleteRole (role : string) : void;

        /**
         * Retrieve set of all existing roles
         *
         * @method getAllRoles
         * @return {Cursor} cursor of existing roles
         */
        function getAllRoles() : Mongo.Cursor<Role>;

        /**
         * Retrieve users groups, if any
         *
         * @method getGroupsForUser
         * @param {String|Object} user User Id or actual user object
         * @param {String} [role] Optional name of roles to restrict groups to.
         *
         * @return {Array} Array of user's groups, unsorted. Roles.GLOBAL_GROUP will be omitted
         */
        function getGroupsForUser(
            user : string|Object,
            role? : string
        ) : string[];

        /**
         * Retrieve users roles
         *
         * @method getRolesForUser
         * @param {String|Object} user User Id or actual user object
         * @param {String} [group] Optional name of group to restrict roles to.
         *                         User's Roles.GLOBAL_GROUP will also be included.
         * @return {Array} Array of user's roles, unsorted.
         */
        function getRolesForUser(
            user : string|Object,
            group? : string
        ) : string[];

        /**
         * Retrieve all users who are in target role.
         *
         * NOTE: This is an expensive query; it performs a full collection scan
         * on the users collection since there is no index set on the 'roles' field.
         * This is by design as most queries will specify an _id so the _id index is
         * used automatically.
         *
         * @method getUsersInRole
         * @param {Array|String} role Name of role/permission.  If array, users
         *                            returned will have at least one of the roles
         *                            specified but need not have _all_ roles.
         * @param {String} [group] Optional name of group to restrict roles to.
         *                         User's Roles.GLOBAL_GROUP will also be checked.
         * @param {Object} [options] Optional options which are passed directly
         *                           through to `Meteor.users.find(query, options)`
         * @return {Cursor} cursor of users in role
         */
        function getUsersInRole(
            role : string|string[],
            group? : string,
            options? : {
                sort?: Mongo.SortSpecifier | undefined;
            skip?: number | undefined;
            limit?: number | undefined;
            fields?: Mongo.FieldSpecifier | undefined;
            reactive?: boolean | undefined;
            transform?: Function | undefined;
        }) : Mongo.Cursor<Meteor.User>;

        /**
         * Remove users from roles
         *
         * @example
         *     Roles.removeUsersFromRoles(users.bob, 'admin')
         *     Roles.removeUsersFromRoles([users.bob, users.joe], ['editor'])
         *     Roles.removeUsersFromRoles([users.bob, users.joe], ['editor', 'user'])
         *     Roles.removeUsersFromRoles(users.eve, ['user'], 'group1')
         *
         * @method removeUsersFromRoles
         * @param {Array|String} users User id(s) or object(s) with an _id field
         * @param {Array|String} roles Name(s) of roles to add users to
         * @param {String} [group] Optional. Group name. If supplied, only that
         *                         group will have roles removed.
         */
        function removeUsersFromRoles(
            user : string|string[]|Object|Object[],
            roles? : string[],
            group? : string
        ) : void;

        /**
         * Set a users roles/permissions.
         *
         * @example
         *     Roles.setUserRoles(userId, 'admin')
         *     Roles.setUserRoles(userId, ['view-secrets'], 'example.com')
         *     Roles.setUserRoles([user1, user2], ['user','editor'])
         *     Roles.setUserRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')
         *     Roles.setUserRoles(userId, 'admin', Roles.GLOBAL_GROUP)
         *
         * @method setUserRoles
         * @param {Array|String} users User id(s) or object(s) with an _id field
         * @param {Array|String} roles Name(s) of roles/permissions to add users to
         * @param {String} [group] Optional group name. If supplied, roles will be
         *                         specific to that group.
         *                         Group names can not start with '$'.
         *                         Periods in names '.' are automatically converted
         *                         to underscores.
         *                         The special group Roles.GLOBAL_GROUP provides
         *                         a convenient way to assign blanket roles/permissions
         *                         across all groups.  The roles/permissions in the
         *                         Roles.GLOBAL_GROUP group will be automatically
         *                         included in checks for any group.
         */
        function setUserRoles (
            user : string|string[]|Object|Object[],
            roles : string|string[],
            group? : string
        ) : void;

        /**
         * Check if user has specified permissions/roles
         *
         * @example
         *     // non-group usage
         *     Roles.userIsInRole(user, 'admin')
         *     Roles.userIsInRole(user, ['admin','editor'])
         *     Roles.userIsInRole(userId, 'admin')
         *     Roles.userIsInRole(userId, ['admin','editor'])
         *
         *     // per-group usage
         *     Roles.userIsInRole(user,   ['admin','editor'], 'group1')
         *     Roles.userIsInRole(userId, ['admin','editor'], 'group1')
         *     Roles.userIsInRole(userId, ['admin','editor'], Roles.GLOBAL_GROUP)
         *
         *     // this format can also be used as short-hand for Roles.GLOBAL_GROUP
         *     Roles.userIsInRole(user, 'admin')
         *
         * @method userIsInRole
         * @param {String|Object} user User Id or actual user object
         * @param {String|Array} roles Name of role/permission or Array of
         *                            roles/permissions to check against.  If array,
         *                            will return true if user is in _any_ role.
         * @param {String} [group] Optional. Name of group.  If supplied, limits check
         *                         to just that group.
         *                         The user's Roles.GLOBAL_GROUP will always be checked
         *                         whether group is specified or not.
         * @return {Boolean} true if user is in _any_ of the target roles
         */
        function userIsInRole(
            user : string|string[]|Object|Object[],
            roles : string|string[],
            group? : string
        ) : boolean;

        interface Role {
            name : string;
        }
    }
}
