export = v8flags;

declare function v8flags(cb: (err: any, flags: string[]) => void): void;

declare namespace v8flags {
    const configfile: string;
    const configPath: string;
}
