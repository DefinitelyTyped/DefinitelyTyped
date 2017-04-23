

declare module 'virgen-acl' {

    interface IResourceProp {
        resource_id:string;
    }

    interface IResourceGetter {
        getResourceId():string;
    }

    type IResource = IResourceGetter | IResourceProp | string


    interface IRoleProp {
        role_id:string;
    }

    interface IRoleGetter {
        getRoleId():string;
    }

    type IRole = IRoleGetter | IRoleProp | string



    interface IQueryCallback {
        (err?:Error, result?:boolean): void
    }

    interface IAssertion<Ro extends IRole, Re extends IResource> {
        (err:Error, role:Ro, resource:Re, action:string, result:IAssertionResult, next:Function): void
    }

    interface IAssertionResult {
        (error?:Error, result?:boolean): void
    }


    class Acl {

        addRole(role:string, parent?:string):void

        addResource(resource:string, parent?:string):void

        allow<Ro extends IRole, Re extends IResource> (role?:string, resource?:string, actions?:string[], assertion?:boolean|IAssertion<Ro, Re>):void

        deny<Ro extends IRole, Re extends IResource> (role?:string, resource?:string, actions?:string[], assertion?:boolean|IAssertion<Ro, Re>):void

        query(role:IRole, resource:IResource, action:string, done:IQueryCallback):void

    }

}

