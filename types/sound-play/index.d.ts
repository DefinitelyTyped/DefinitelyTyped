/// <reference types="node" />

export function play(path: string, volume?: number): Promise<{ stdout: string | Buffer; stdin: string | Buffer }>;
