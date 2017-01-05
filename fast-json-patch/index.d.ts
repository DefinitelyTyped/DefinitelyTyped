// Type definitions for JSON-Patch v1.0.0
// Project: https://github.com/Starcounter-Jack/JSON-Patch/releases
// Definitions by: Francis OBrien <https://github.com/itsFrank>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fastjsonpatch {
    

    interface JsonPatch {
        /**
         * Applies an array of patch instructions to an object
         */
        apply(object:any, patches:Patch[], validate?:boolean):boolean
        
        /**
         * Observes changes made to an object, which can then be retieved using generate
         */
        observe<T>(object:T, callback?:()=>void):Observer<T>
        
        /**
         * Detach an observer from an object
         */
        unobserve<T>(object:T, observer:Observer<T>):void

        /**
         * Generate an array of patches from an observer
         */
        generate<T>(observer:Observer<T>):Patch[]

        /**
         * Create an array of patches from the differences in two objects
         */
        compare(object1:any, object2:any):Patch[]

        /**
         * Ensure a set of patch instructions is valid
         */
        validate(patches:Patch[], tree?:any):JsonPatchError[]
    }
    
    interface Observer<T> {
        object:T
        patches:Patch[]
        unobserve():void
    }

    interface Patch {
        op:string
        path:string
        value?:any
        from?:string
    }

    interface JsonPatchError {
        name:string
        message:string
        index:number
        operation:any
        tree:any
    }
}

declare  var jsonpatch: fastjsonpatch.JsonPatch;

declare module "fast-json-patch" {
    export = jsonpatch
}