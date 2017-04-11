

declare module "virgen-acl" {

  export interface IResourceProp {
    resource_id:string;
  }

  export interface IResourceGetter {
    getResourceId():string;
  }

  export type IResource = IResourceGetter | IResourceProp | string



  export interface IRoleProp {
    role_id:string;
  }

  export interface IRoleGetter {
    getRoleId():string;
  }

  export type IRole = IRoleGetter | IRoleProp | string
  


  export interface IQueryCallback {
    (err?:Error, result?:boolean): void
  }

  export interface IAssertion<Ro extends IRole, Re extends IResource> {
    (err:Error, role:Ro, resource:Re, action:string, result:IAssertionResult, next:Function): void
  }

  export interface IAssertionResult {
    (error?:Error, result?:boolean): void
  }


  export class Acl {

    addRole(role:string, parent?:string):void

    addResource(resource:string, parent?:string):void

    allow<Ro extends IRole, Re extends IResource> (role?:string, resource?:string, actions?:string[], assertion?:boolean|IAssertion<Ro, Re>):void

    deny<Ro extends IRole, Re extends IResource> (role?:string, resource?:string, actions?:string[], assertion?:boolean|IAssertion<Ro, Re>):void

    query(role:IRole, resource:IResource, action:string, done:IQueryCallback):void

  }

}


