// Type definitions for KoLite 1.1
// Project: https://github.com/CodeSeven/kolite
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="jquery" />
/// <reference types="knockout" />

// DirtyFlag /////////////////////////////////////////////

interface DirtyFlag {
    new (objectToTrack: any, isInitiallyDirty?: boolean, hashFunction?: () => any): any;
    (): DirtyFlagResult;
}

interface DirtyFlagResult {
    isDirty: ko.Computed<boolean>;
    reset(): void;
    forceDirty(): void;
}

declare namespace ko {
    const DirtyFlag: DirtyFlag;
}

interface KnockoutDirtyFlagStatic {
    DirtyFlag: DirtyFlag;
}

// AMD
declare var kodirtyflag: KnockoutDirtyFlagStatic;
declare module 'kodirtyflag'{
    export = kodirtyflag;
}
