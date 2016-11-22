// Type definitions for Monk v1.0.1
// Project: http://github.com/LearnBoost/monk.git
// Definitions by: Patrick Bartsch <https://github.com/wzr1337/>
// Definitions: https://github.com/DefinitelyTyped/Monk

declare module "monk" {
  function m(database: string): m.Monk;
  module m {
    export interface promise {
      type:string
      on(eventName:string, fn:Function):void;
      error(fn:Function):promise;
      success(fn:Function):promise;
    }

    export interface Collection {
      id(hexstring:string):string // returns ObjectId
      id(obj:Object):string // returns ObjectId
      id():string // returns new generated ObjectId

      /*
      * All commands accept the simple data[, …], options and a callback.
      * You can pass fields to select as an array: data[, …], ['field', …], fn
      * You can pass fields as a string delimited by spaces: data[, …], 'field1 field2', fn
      * To exclude a field, prefix the field name with '-': data[, …], '-field1', fn
      */
      cast(obj?:Object):Object;

      count(needle:Object, fn?:Function):promise;

      distinct(field:string, options?:Object, fn?:Function):promise;

      drop(fn?:Function):promise;

      insert(data:Object, options?:Object, fn?:Function):promise;

      find(needle:Object, options?:Object, fn?:Function):promise;
      findOne(needle:Object, options?:Object, fn?:Function):promise;
      /**
       * findAndModify
       *
       * @param {Object} search query, or { query, update } object
       * @param {Object} optional, update object
       * @param {Object|String|Array} optional, options or fields
       * @param {Function} callback
       * @return {Promise}
       * @api public
       */
      findAndModify(needle:Object, update?:Object, filter?:string[], options?:Object, fn?:Function):promise;
      findById(id:string, options?:Object, fn?:Function):promise;

      update(needle:Object, update:Object, filter?:string[], options?:Object, fn?:Function):promise;
      updateById(id:string, update:Object, filter?:string[], options?:Object, fn?:Function):promise;

      remove(needle:Object, options?:Object, fn?:Function):promise;
      removeById(id:string, options?:Object, fn?:Function):promise;

    }

    export interface Monk {
      (database: string): void;
      close():void;

      get(collection:string):Collection;
    }
  }

  export = m;
}
