// Type definitions for virgen-acl 0.0.21
// Project: https://github.com/djvirgen/virgen-acl#readme
// Definitions by: Jørn Andre Tangen <https://github.com/gorillatron>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ResourceProp {
    resource_id:string;
}

export interface ResourceGetter {
    getResourceId():string;
}

export type Resource = ResourceGetter | ResourceProp | string

export interface RoleProp {
    role_id:string;
}

export interface RoleGetter {
    getRoleId():string;
}

export type Role = RoleGetter | RoleProp | string;

export type QueryCallback = (err?:Error, result?:boolean) => void;

export type Assertion<Ro extends Role, Re extends Resource> = (err:Error, role:Ro, resource:Re, action:string, result:IAssertionResult, next:Function) => void;

export interface IAssertionResult {
    (error?:Error, result?:boolean): void;
}

export class Acl {

    addRole(role:string, parent?:string):void;

    addResource(resource:string, parent?:string):void

    allow<Ro extends Role, Re extends Resource> (role?:string, resource?:string, actions?:string[], assertion?:boolean|Assertion<Ro, Re>):void

    deny<Ro extends Role, Re extends Resource> (role?:string, resource?:string, actions?:string[], assertion?:boolean|Assertion<Ro, Re>):void

    query(role:Role, resource:Resource, action:string, done:QueryCallback):void;

}
