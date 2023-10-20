interface Walk {
    (path?: string, listFolders?: boolean, walkFolder?: (path: string) => boolean): AsyncIterable<string>;
}

declare const walk: Walk;

export = walk;
