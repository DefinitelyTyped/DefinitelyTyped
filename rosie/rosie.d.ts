declare module 'rosie' {
    export = rosie;
}

declare module rosie {
  interface IFactoryStatic {

   define(name: String, constructor?: Function):  IFactory;

   build(name: string, attributes?: any[], options?: Object): Object;

   buildList(name: string, size: number, attributes?: any[], options?: Object): Object[];

   attributes(attributes: Object, options?: Object): Object;

   options(options: Object): Object;

   extend(name: string): IFactory;
  }

  interface IFactory {

   attr(name: string, dependenciesOrValue: any | string[], value?: any): IFactory;

   sequence(name: string, dependencies?: string[], builder?: Function) : IFactory;

  }

}

