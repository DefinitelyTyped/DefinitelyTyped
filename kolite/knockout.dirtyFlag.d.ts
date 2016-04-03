// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

// DirtyFlag /////////////////////////////////////////////

interface DirtyFlag {
    isDirty: KnockoutComputed<boolean>;
    new (objectToTrack: any, isInitiallyDirty?: boolean, hashFunction?: () => any): any;
    reset(): void;
}

interface KnockoutStatic {
    DirtyFlag: DirtyFlag;
}

interface KnockoutDirtyFlagStatic {
    DirtyFlag: DirtyFlag;
}

// AMD
declare var kodirtyflag: KnockoutDirtyFlagStatic;
declare module 'kodirtyflag'{
    export = kodirtyflag;
}
