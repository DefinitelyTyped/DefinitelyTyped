export = saslPrep;

declare function saslPrep(input: string, options?: saslPrep.Options): string;

declare namespace saslPrep {
    interface Options {
        allowUnassigned?: boolean | undefined;
    }
}
