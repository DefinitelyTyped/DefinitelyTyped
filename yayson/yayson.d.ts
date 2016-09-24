// Type definitions for yayson
// Project: https://github.com/confetti/yayson
// Definitions by: David Wood <https://github.com/Codesleuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'yayson' {
  class Store {
    sync(obj: Object): void;
    find(type: string, id: string): Object;
    find<T>(type: string, id: string): T;
    findAll(type: string): any[];
    findAll<T>(type: string): T[];
    remove(type: string, id: string): void;
    remove(type: string): void;
    reset(): void;
    records: Array<any>;
    relations: { [key: string]: any };
  }

  interface Adapter {
    get(model: any, key: string): any;
    get(model: any): any;
    get<T>(model: any, key: string): T;
    get<T>(model: any): T;
  }

  class Presenter {
    static adapter: string;
    static render(instanceOrCollection: {} | PromiseLike<{}>, options: yayson.JsonOptions): any;
    static render(instanceOrCollection: {} | PromiseLike<{}>): any;
    static toJSON(instanceOrCollection: {} | Array<{}>, options: yayson.JsonOptions): any;
    static toJSON(instanceOrCollection: {} | Array<{}>): any;
    
    render(instanceOrCollection: {} | PromiseLike<{}>, options: yayson.JsonOptions): any;
    render(instanceOrCollection: {} | PromiseLike<{}>): any;
    toJSON(instanceOrCollection: {} | Array<{}>, options: yayson.JsonOptions): any;
    toJSON(instanceOrCollection: {} | Array<{}>): any;

    type: string;
  }

  interface Yayson {
    Store: typeof Store;
    Presenter: typeof Presenter;
    Adapter: Adapter;
  }

  interface YaysonOptions {
    adapter?: 'default' | 'sequelize';
  }

  function yayson(): Yayson;
  function yayson(arg: YaysonOptions): Yayson;

  namespace yayson {
    interface JsonOptions {
      [key: string]: any;
      meta?: any;
    }
  }

  export = yayson;
}
