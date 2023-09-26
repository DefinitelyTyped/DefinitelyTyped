declare namespace google.feeds {
    export class Feed {
        constructor();
        constructor(url: string);
        findFeeds(query?: string, callback?: (result: findResult) => void): void;
        getElementsByTagNameNS(node: string, ns: string, localName: string): any[];
        includeHistoricalEntries(): void;
        load(callback?: (result: feedResult) => void): void;
        setNumEntries(num: number): void;
        setResultFormat(format: string): void;
    }
}

interface feedResult {
    error?: feedError | undefined;
    xmlDocument?: string | undefined;
    feed: feedJSON;
}

interface findResult {
    error?: feedError | undefined;
    xmlDocument?: string | undefined;
    findEntries: findEntry[];
}

interface feedError {
    code: string;
    message: string;
}

interface feedJSON {
    feedURL: string;
    link: string;
    author: string;
    description: string;
    entries: feedEntry[];
}

interface feedEntry {
    mediaGroup: MediaGroup[];
    title: string;
    link: string;
    content: string;
    contentSnippet: string;
    publishedDate: string;
    categories: string[];
}

interface findEntry {
    title: string;
    link: string;
    contentSnippet: string;
    url: string;
}

interface MediaGroup {
    content: MediaContent[];
}

interface MediaContent {
    url: string;
    fileSize: number;
    type: string;
    medium: string;
    isDefault: boolean;
    expression: string;
    bitrate: number;
    framerate: number;
    samplingrate: number;
    channels: string;
    duration: number;
    height: number;
    width: number;
    lang: string;
}
