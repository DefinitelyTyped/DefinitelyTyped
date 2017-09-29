// Type definitions for feedme 1.0
// Project: https://github.com/fent/feedme.js
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Writable, Readable } from 'stream';

declare class FeedMe extends Writable {
    /**
     * Creates a new instance of the FeedMe parser.
     *
     * @param buffer Can be true if you want the parser to buffer the entire feed document as a JSON object, letting you use the FeedMe#done() method.
     */
    constructor(buffer?: boolean);

    /**
     * Can only be used if buffer is true. It returns the feed as a Javascript object, should be called after end is emitted from the parser.
     * Subelements are put as children objects with their names as keys. When one object has more than one child of the same name, they are
     * put into an array. Items are always put into an array.
     */
    done(): FeedMe.Document;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close" | "drain" | "finish", listener: () => void): this;
    on(event: "pipe" | "unpipe", listener: (src: Readable) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "item", listener: (item: FeedMe.Item) => void): this;
    on(event: "type", listener: (type: FeedMe.Type) => void): this;
}

declare namespace FeedMe {
    type Type = "atom" | "rss 0.90" | "rss 0.91" | "rss 0.92" | "rss 0.93" | "rss 0.94" | "rss 1.0" | "rss 2.0" | "json";

    interface Document extends Meta {
        items: Item[];
    }

    interface Attrs {
        name: string;
        value: any;
        prefix: string;
        local: string;
        uri: string;
    }

    interface NS {
        [key: string]: string;
    }

    interface Image {
        url: string;
        title: string;
        link: string;
        width: string;
        height: string;
    }

    interface Meta {
        [key: string]: any;

        // "#ns": NS[];
        "type": Type;
        // "#version": string;
        title: string;
        description: string;
        date: string;
        pubdate: string;
        lastbuilddate: string;
        link: string;
        xmlurl: string;
        author: string;
        language: string;
        image: Image;
        favicon: string;
        copyright: string;
        generator: string;
        categories: string[];
    }

    interface Item {
        [key: string]: any;

        title: string;
        description: string;
        summary: string;
        date: string;
        pubdate: string;
        link: string;
        origlink: string;
        author: string;
        guid: string | Guid;
        comments: string;
        image: Image;
        categories: string[];
        enclosures: string[];
        // meta: Meta;
    }

    interface Guid {
        ispermalink: string;
        text: string;
    }
}

export = FeedMe;
