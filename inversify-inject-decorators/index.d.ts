// Type definitions for inversify-inject-decorators 1.0
// Project: https://github.com/inversify/inversify-inject-decorators
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import inversify = require("inversify")

interface InjectDecorators {

  lazyInject: (serviceIdentifier: (string|Symbol|inversify.interfaces.Newable<any>)) =>
              (proto: any, key: string) => void;

  lazyInjectNamed: (serviceIdentifier: (string|Symbol|inversify.interfaces.Newable<any>), named: string) =>
                    (proto: any, key: string) => void;

  lazyInjectTagged: (serviceIdentifier: (string|Symbol|inversify.interfaces.Newable<any>), key: string, value: any) =>
                    (proto: any, propertyName: string) => void;

  lazyMultiInject: (serviceIdentifier: (string|Symbol|inversify.interfaces.Newable<any>)) =>
                    (proto: any, key: string) => void;
}

export default function getDecorators(kernel: inversify.interfaces.Kernel): InjectDecorators;
