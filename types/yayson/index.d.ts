// Type definitions for yayson v2.0.1
// Project: https://github.com/confetti/yayson
// Definitions by: David Wood <https://github.com/Codesleuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'yayson' {
  class Store {
    sync(obj: {}): any;
    find(type: string, id: string): any;
    findAll(type: string): any[];
    remove(type: string, id?: string): void;
    reset(): void;

    records: y.Record[];
    relations: { [key: string]: any };
  }

  interface Adapter {
    get(model: {}, key?: string): any;
    id(model: {}): string;
  }

  class Presenter {
    static adapter: string;

    static render<T>(instanceOrCollection: PromiseLike<T>, options?: y.JsonOptions): PromiseLike<T>;
    static render(instanceOrCollection: {}, options?: y.JsonOptions): any;
    static toJSON(instanceOrCollection: {}, options?: y.JsonOptions): any;

    render<T>(instanceOrCollection: PromiseLike<T>, options?: y.JsonOptions): PromiseLike<T>;
    render(instanceOrCollection: {}, options?: y.JsonOptions): any;
    toJSON(instanceOrCollection: {}, options?: y.JsonOptions): any;
    id(instance: {}): string;

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

  function y(arg?: YaysonOptions): Yayson;

  namespace y {
    interface JsonOptions {
      [key: string]: any;
      meta?: {};
    }
    interface Record {
      id: any;
      type: string;
      attributes: any;
      relationships: any;
    }
  }

  export = y;
}
