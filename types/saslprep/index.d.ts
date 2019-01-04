// Type definitions for saslprep 1.0
// Project: https://github.com/reklatsmasters/saslprep#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = saslPrep;

declare function saslPrep(input: string, options?: saslPrep.Options): string;

declare namespace saslPrep {
    interface Options {
        allowUnassigned?: boolean;
    }
}
