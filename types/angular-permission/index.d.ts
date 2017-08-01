// Type definitions for angular-permission 2.3.6
// Project: https://github.com/Narzerus/angular-permission
// Definitions by: Voislav Mishevski <https://github.com/vmishevski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />
/// <reference types="angular-ui-router" />

import * as angular from 'angular';

declare module 'angular' {
  export namespace permission {
    /**
     * Used as optional parameter provided on definitions of permissions and roles
     */
    export interface TransitionProperties {
      fromState?: angular.ui.IState;
      fromParams?: angular.ui.IStateParamsService;
      toState?: angular.ui.IState;
      toParams?: angular.ui.IStateParamsService;
      options?: angular.ui.IStateOptions;
    }

    export interface PermissionStore {
      /**
       * Allows to define permission on application configuration
       * @method
       *
       * @param permissionName {String} Name of defined permission
       * @param validationFunction {Function} Function used to validate if permission is valid
       */
      definePermission(
        permissionName: string,
        validationFunction: PermissionValidationFunction
      ): void;

      /**
       * Allows to define set of permissionNames with shared validation function on application configuration
       * @method
       * @throws {TypeError}
       *
       * @param permissionNames {Array} Set of permission names
       * @param validationFunction {Function} Function used to validate if permission is valid
       */
      defineManyPermissions(
        permissionNames: string[],
        validationFunction: PermissionValidationFunction
      ): void;

      /**
       * Removes all permissions
       * @method
       */
      clearStore(): void;

      /**
       * Deletes permission
       * @method
       *
       * @param permissionName {String} Name of defined permission
       */
      removePermissionDefinition(permissionName: string): void;

      /**
       * Checks if permission exists
       * @method
       *
       * @param permissionName {String} Name of defined permission
       * @returns {Boolean}
       */
      hasPermissionDefinition(permissionName: string): boolean;

      /**
       * Returns permission by it's name
       * @method
       *
       * @returns {permission.Permission} Permissions definition object
       */
      getPermissionDefinition(permissionName: string): Permission;

      /**
       * Returns all permissions
       * @method
       *
       * @returns {Object} Permissions collection
       */
      getStore(): { [permissionName: string]: Permission };
    }

    export interface RoleStore {
      /**
       * Allows to define role
       * @method
       *
       * @param roleName {String} Name of defined role
       * @param permissions {Array} Set of permission names
       * @param [validationFunction] {Function} Function used to validate if permissions in role are valid
       */
      defineRole(
        roleName: string,
        permissions: string[],
        validationFunction: RoleValidationFunction
      ): void;

      /**
       * Allows to define role
       * @method
       *
       * @param roleName {String} Name of defined role
       * @param permissions {Array} Set of permission names
       */
      defineRole(
        roleName: string,
        permissions: string[]
      ): void;

      /**
       * Checks if role is defined in store
       * @method
       *
       * @param roleName {String} Name of role
       * @returns {Boolean}
       */
      hasRoleDefinition(roleName: string): boolean;

      /**
       * Returns role definition object by it's name
       * @method
       *
       * @returns {permission.Role} Role definition object
       */
      getRoleDefinition(roleName: string): Role;

      /**
       * Removes all role definitions
       * @method
       */
      clearStore(): void;

      /**
       * Deletes role from store
       * @method
       *
       * @param roleName {String} Name of defined permission
       */
      removeRoleDefinition(roleName: string): void;

      /**
       * Returns all role definitions
       * @method
       *
       * @returns {Object} Defined roles collection
       */
      getStore(): { [roleName: string]: Role };
    }

    export interface Role {
      roleName: string;
      permissionNames: string[];
      validationFunction?: RoleValidationFunction;
      validateRole: () => angular.IPromise<any>;
    }

    export interface Permission {
      permissionName: string;
      validationFunction?: PermissionValidationFunction;
      validatePermission: () => angular.IPromise<any>;
    }

    export type RoleValidationFunction = (
      roleName?: string,
      transitionProperties?: TransitionProperties
    ) => boolean | angular.IPromise<any>;

    export type PermissionValidationFunction = (
      permissionName?: string,
      transitionProperties?: TransitionProperties
    ) => boolean | angular.IPromise<any>;

    export interface IPermissionState extends angular.ui.IState {
      data?: any | DataWithPermissions;
    }

    export interface DataWithPermissions {
      permissions?: {
        only?: (() => void) | string | string[] | angular.IPromise<any>;
        except?: (() => void) | string | string[] | angular.IPromise<any>;
        redirectTo: string | (() => string) | (() => PermissionRedirectConfigation) | { [index: string]: PermissionRedirectConfigation }
      };
    }

    export interface PermissionRedirectConfigation {
      state: string;
      params?: {};
      options?: angular.ui.IStateOptions;
    }
  }
}

declare module "angular-permission" {
  export var permission: string;
  export var ngPermission: string;
  export var uiPermission: string;
}
