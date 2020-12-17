// Type definitions for sitemap-generator 8.5
// Project: https://github.com/lgraubner/sitemap-generator
// Definitions by: grgr-dkrk <https://github.com/grgr-dkrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Crawler = require('simplecrawler');

type PriorityValues = 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
type FreqValues = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
type EventTypes = 'add' | 'done' | 'error' | 'ignore';
type ExcludeFunctionProps<T> = Pick<T, { [K in keyof T]: T[K] extends (...args: any[]) => void ? never : K }[keyof T]>;

type Options = Partial<ExcludeFunctionProps<Crawler>> & {
    changeFreq?: FreqValues;
    filepath?: string | null;
    ignore?: (url: string) => boolean;
    ignoreAMP?: boolean;
    lastMod?: boolean;
    maxEntriesPerFile?: number;
    priorityMap?: PriorityValues[];
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

interface Methods {
    start: () => void;
    stop: () => void;
    getCrawler: () => Crawler;
    getSitemap: () => SiteMapRotator;
    queueURL: (url: string) => void;
    on: <T extends EventTypes>(events: T, cb: T extends 'error' ? (error: ErrorMessage) => void : () => void) => void;
}

declare function SitemapGenerator(url: string, options?: Options): Methods;

export = SitemapGenerator;
