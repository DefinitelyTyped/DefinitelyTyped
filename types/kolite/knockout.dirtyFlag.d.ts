// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="knockout" />

// DirtyFlag /////////////////////////////////////////////

interface DirtyFlag {
    new (objectToTrack: any, isInitiallyDirty?: boolean, hashFunction?: () => any): any;
    (): DirtyFlagResult;
}

interface DirtyFlagResult {
    isDirty: KnockoutComputed<boolean>;
    reset(): void;
    forceDirty(): void; 
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
