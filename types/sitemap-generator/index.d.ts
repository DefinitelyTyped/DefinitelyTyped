import Crawler = require("simplecrawler");

type PriorityValues = 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
type FreqValues = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
type EventTypes = "add" | "done" | "error" | "ignore";
type ExcludeFunctionProps<T> = Pick<T, { [K in keyof T]: T[K] extends (...args: any[]) => void ? never : K }[keyof T]>;

type Options = Partial<ExcludeFunctionProps<Crawler>> & {
    changeFreq?: FreqValues | undefined;
    filepath?: string | null | undefined;
    ignore?: ((url: string) => boolean) | undefined;
    ignoreAMP?: boolean | undefined;
    lastMod?: boolean | undefined;
    maxEntriesPerFile?: number | undefined;
    priorityMap?: PriorityValues[] | undefined;
};

interface ErrorMessage {
    code: string;
    message: string;
    url: string;
}

interface SiteMapRotator {
    getPaths: () => string[];
    addURL: (url: string, depth?: number, lastMod?: string) => void;
    finish: () => void;
}

type EventCallback<T extends EventTypes> = T extends "error" ? (error: ErrorMessage) => void
    : T extends "add" ? (url: string) => void
    : T extends "ignore" ? (url: string) => void
    : () => void;

interface Methods {
    start: () => void;
    stop: () => void;
    getCrawler: () => Crawler;
    getSitemap: () => SiteMapRotator;
    queueURL: (url: string) => void;
    on: <T extends EventTypes>(events: T, cb: EventCallback<T>) => void;
}

declare function SitemapGenerator(url: string, options?: Options): Methods;

export = SitemapGenerator;
