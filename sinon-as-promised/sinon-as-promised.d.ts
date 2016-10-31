// Type definitions for sinon-as-promised v4.0.0
// Project: https://github.com/bendrucker/sinon-as-promised
// Definitions by: igrayson <https://github.com/igrayson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../sinon/sinon.d.ts"/>

declare namespace Sinon {

  export interface SinonStub {

    /**
     * When called, the stub will return a "thenable" object which will return a promise for the provided value. Any Promises/A+ compliant library will handle this object properly.
     */
    resolves(value:any):SinonStub;

    /**
     * When called, the stub will return a thenable which will return a reject promise with the provided err. If err is a string, it will be set as the message on an Error object.
     */
    rejects(err:any):SinonStub;
  } 

}
