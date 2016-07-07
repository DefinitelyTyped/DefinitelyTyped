// Type definitions for ngCordova.plugins.camera
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Jacques Kang <https://www.linkedin.com/in/jacqueskang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="Camera" />
/// <reference types="angular" />

declare namespace ngCordova {
    export interface ICameraService {
        getPicture(options?: CameraOptions): ng.IPromise<string>;
        cleanup(): ng.IPromise<void>;
    }
}
