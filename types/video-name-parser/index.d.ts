declare namespace parse {
    interface VideoMetadata {
        name: string;
        year?: number;
        aired?: string;
        season?: number;
        episode?: number[];
        diskNumber?: number;
        imdb_id?: string;
        type: string;
        tag: string[];
    }
}

declare function parse(filename: string): parse.VideoMetadata;

export = parse;
