/// <reference types="node" />

type ImageSource = string | HTMLImageElement | Buffer;

declare function splashy(source: ImageSource): Promise<string[]>;

export = splashy;
