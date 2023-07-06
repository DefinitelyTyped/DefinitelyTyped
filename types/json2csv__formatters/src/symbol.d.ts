export interface Options {
    stringFormatter?: ((value: string) => string) | undefined;
}

export default function symbolFormatter(opts?: Options): (value: symbol) => string;
