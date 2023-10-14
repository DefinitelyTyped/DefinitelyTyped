/// <reference types="jquery" />
/// <reference types="knockout" />

// DirtyFlag /////////////////////////////////////////////

interface DirtyFlag {
    new(objectToTrack: any, isInitiallyDirty?: boolean, hashFunction?: () => any): any;
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
declare module "kodirtyflag" {
    export = kodirtyflag;
}
