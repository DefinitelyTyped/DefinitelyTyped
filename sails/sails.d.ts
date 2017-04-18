///<reference path="../node/node.d.ts"/>

/*declare module Sails{
  import Promise = Q.Promise;
  export interface Model{}
  export interface WaterlinePromise<T> extends Promise<T>{}
  export interface Record{}
  export interface QueryResult extends Record{}
  export interface QueryBuilder extends Promise<any>{}
  export interface Controller{}
}*/


declare module "sails" {
  import * as e from "express";
  function sails(): sails.Sails;
  module sails {
    import Promise = Q.Promise;
    interface Model{
      attributes:Object;

      create(params:Object):WaterlinePromise<QueryResult>;
      create(params:Array<Object>):WaterlinePromise<QueryResult>;
      create(params:Object, cb:(err:Error, created:QueryResult)=>void):void;
      create(params:Array<Object>, cb:(err:Error, created:Array<QueryResult>)=>void):void;



      find():QueryBuilder;
      find(params:Object):QueryBuilder;
      find(params:Object):WaterlinePromise<Array<QueryResult>>;

      findOne(criteria:Object):WaterlinePromise<QueryResult>;




      count(criteria:Object):WaterlinePromise<number>;
      count(criteria:Array<Object>):WaterlinePromise<number>;
      count(criteria:string):WaterlinePromise<number>;
      count(criteria:number):WaterlinePromise<number>;

      count(criteria:Object, cb:(err:Error, found:number)=>void);
      count(criteria:Array<Object>, cb:(err:Error, found:number)=>void);
      count(criteria:string, cb:(err:Error, found:number)=>void);
      count(criteria:number, cb:(err:Error, found:number)=>void);

      destroy(criteria:Object):WaterlinePromise<Array<Record>>;
      destroy(criteria:Array<Object>):WaterlinePromise<Array<Record>>;
      destroy(criteria:string):WaterlinePromise<Array<Record>>;
      destroy(criteria:number):WaterlinePromise<Array<Record>>;

      destroy(criteria:Object, cb:(err:Error, deleted:Array<Record>)=>void):void;
      destroy(criteria:Array<Object>, cb:(err:Error, deleted:Array<Record>)=>void):void;
      destroy(criteria:string, cb:(err:Error, deleted:Array<Record>)=>void):void;
      destroy(criteria:number, cb:(err:Error, deleted:Array<Record>)=>void):void;



      update(criteria:Object, changes:Object):WaterlinePromise<Array<QueryResult>>;
      update(criteria:Array<Object>, changes:Object):WaterlinePromise<Array<QueryResult>>;
      update(criteria:string, changes:Object):WaterlinePromise<Array<QueryResult>>;
      update(criteria:number, changes:Object):WaterlinePromise<Array<QueryResult>>;

      update(criteria:Object, changes:Array<Object>):WaterlinePromise<Array<QueryResult>>;
      update(criteria:Array<Object>, changes:Array<Object>):WaterlinePromise<Array<QueryResult>>;
      update(criteria:string, changes:Array<Object>):WaterlinePromise<Array<QueryResult>>;
      update(criteria:number, changes:Array<Object>):WaterlinePromise<Array<QueryResult>>;

      update(criteria:Object, changes:Array<Object>, cb:(err:Error, updated:Array<QueryResult>)=>void):void;
      update(criteria:Array<Object>, changes:Array<Object>, cb:(err:Error, updated:Array<QueryResult>)=>void):void;
      update(criteria:string, changes:Array<Object>, cb:(err:Error, updated:Array<QueryResult>)=>void):void;
      update(criteria:number, changes:Array<Object>, cb:(err:Error, updated:Array<QueryResult>)=>void):void;


      query(sqlQuery:string, cb:(err:Error, results:Array<Record>)=>void);
      native(cb:(err:Error, collection:Model)=>void);

      stream(criteria:Object, writeEnd:Object):NodeJS.WritableStream;
      stream(criteria:Array<Object>, writeEnd:Object):NodeJS.WritableStream;
      stream(criteria:string, writeEnd:Object):NodeJS.WritableStream;
      stream(criteria:number, writeEnd:Object):NodeJS.WritableStream;

      stream(criteria:Object, writeEnd:Object):Error;
      stream(criteria:Array<Object>, writeEnd:Object):Error;
      stream(criteria:string, writeEnd:Object):Error;
      stream(criteria:number, writeEnd:Object):Error;

    }


    interface WaterlinePromise<T> extends Promise<T> {
      exec(cb:(err:Error, results:Array<QueryResult>)=>void);
      exec(cb:(err:Error, result:QueryResult)=>void);
    }


    interface Record {
      id:number;
      createdAt:Date;
      updatedAt:Date;
    }
    interface QueryResult extends Record {
      passports;
      destroy():Promise<Array<sails.QueryResult>>;
      toJSON():Object;
    }


    interface QueryBuilder extends Promise<any> {
      exec(cb:(error:any, results:Array<QueryResult>)=>void);

      where(condition:Object):QueryBuilder;
      limit(lim:number):QueryBuilder;
      skip(num:number):QueryBuilder;
      sort(criteria:string):QueryBuilder;
      populate(association:string):QueryBuilder;
      populate(association:string, filter:Object):QueryBuilder;
      populateAll():QueryBuilder;
    }


    interface Controller {

    }
    interface Request extends e.Request {
      query: any;
      params: any;
    }
    interface Response extends e.Response {
      view(obj: any);
    }

    interface Sails {
      config: any;
      log: Log;
      //log: {};
    }

    interface Log{
      silent(msg:string, obj1?:any, obj2?:any, obj3?:any);
      error(msg:string, obj1?:any, obj2?:any, obj3?:any);
      warn(msg:string, obj1?:any, obj2?:any, obj3?:any);
      debug(msg:any, obj1?:any, obj2?:any, obj3?:any);
      info(msg:string, obj1?:any, obj2?:any, obj3?:any);
      verbose(msg:string, obj1?:any, obj2?:any, obj3?:any);
      silly(msg:string, obj1?:any, obj2?:any, obj3?:any);
    }

    interface Config{
      auth: any;
      blueprint: any;
      bootstrap: any;
      connections: any;
      cors: any;
      csrf: any;
      globals: any;
      local: any;
      http: any;
      i18n: any;
      log: any;
      models: any;
      passport: any;
      policies: any;
      routes: any;
      session: any;
      sockets: any;
      views: any;
    }
  }
  export = sails;
}
