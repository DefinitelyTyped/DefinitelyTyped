export function exec(command: string): () => Promise<string>;

export function wrapExec(command: string): () => () => Promise<string>;
