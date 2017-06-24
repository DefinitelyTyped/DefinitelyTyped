// Type definitions for u2622:persistent-session
// Project: https://github.com/okgrow/meteor-persistent-session
// Definitions by: Robbie Van Gorkom <https://github.com/vangorra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="meteor" />

declare namespace Session {
    function setTemp(key: string, value: string | number | boolean | any /** Null **/ | any /** Undefined **/): boolean;
    function setPersistent(key: string, value: string | number | boolean | any /** Null **/ | any /** Undefined **/): boolean;
    function setAuth(key: string, value: string | number | boolean | any /** Null **/ | any /** Undefined **/): boolean;

    function setDefaultTemp(key: string, value: EJSONable | any /** Undefined **/): void;
    function setDefaultPersistent(key: string, value: EJSONable | any /** Undefined **/): void;
    function setDefaultAuth(key: string, value: EJSONable | any /** Undefined **/): void;

    function makeTemp(key: string) : void;
    function makePersistent(key: string) : void;
    function makeAuth(key: string) : void;

    function clear() : void;
    function clear(key: string) : void;
    function clearTemp() : void;
    function clearPersistent() : void;
    function clearAuth() : void;
}
