// Type definitions for yayson v2.0.1
// Project: https://github.com/confetti/yayson
// Definitions by: David Wood <https://github.com/Codesleuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'yayson' {
  class Store {
    sync(obj: Object): void;
    sync<T>(obj: Object): T;

    find(type: string, id: string): any;
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
    new (): any;
    get(model: any, key: string): any;
    get(model: any): any;
    get<T>(model: any, key: string): T;
    get<T>(model: any): T;
    id(model: any): string;
  }

  class Presenter {
    static adapter: string;

    static render<T>(instanceOrCollection: PromiseLike<T>, options: y.JsonOptions): PromiseLike<T>;
    static render<T>(instanceOrCollection: PromiseLike<T>): PromiseLike<T>;

    static render(instanceOrCollection: any, options: y.JsonOptions): any;
    static render(instanceOrCollection: any): any;

    static toJSON(instanceOrCollection: any, options: y.JsonOptions): any;
    static toJSON(instanceOrCollection: any): any;

    render<T>(instanceOrCollection: PromiseLike<T>, options: y.JsonOptions): PromiseLike<T>;
    render<T>(instanceOrCollection: PromiseLike<T>): PromiseLike<T>;

    render(instanceOrCollection: any, options: y.JsonOptions): any;
    render(instanceOrCollection: any): any;

    toJSON(instanceOrCollection: any, options: y.JsonOptions): any;
    toJSON(instanceOrCollection: any): any;

    id(instance: any): string;

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

  function y(): Yayson;
  function y(arg: YaysonOptions): Yayson;

  namespace y {
    interface JsonOptions {
      [key: string]: any;
      meta?: any;
    }
  }

  export = y;
}
