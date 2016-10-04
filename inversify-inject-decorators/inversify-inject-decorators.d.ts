// Type definitions for inversify-inject-decorators 1.0.0
// Project: https://github.com/inversify/inversify-inject-decorators
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../inversify/inversify.d.ts" />

declare namespace inversifyInjectDecorators {

  export interface InjectDecorators {

    lazyInject: (serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>) =>
                (proto: any, key: string) => void;

    lazyInjectNamed: (serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>, named: string) =>
                     (proto: any, key: string) => void;

    lazyInjectTagged: (serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>, key: string, value: any) =>
                      (proto: any, propertyName: string) => void;

    lazyMultiInject: (serviceIdentifier: inversify.interfaces.ServiceIdentifier<any>) =>
                     (proto: any, key: string) => void;

  }

}

declare module "inversify-inject-decorators" {
  let getDecorators: (kernel: inversify.interfaces.Kernel) => inversifyInjectDecorators.InjectDecorators;
  export default getDecorators;
}
