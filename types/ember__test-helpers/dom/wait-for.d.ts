export interface Options {
    timeout?: number | undefined;
    count?: number | undefined;
    timeoutMessage?: string | undefined;
}

export default function waitFor(selector: string, options?: Options): Promise<Element | Element[]>;
