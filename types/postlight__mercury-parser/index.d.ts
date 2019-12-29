// Type definitions for @postlight/mercury-parser 2.2
// Project: https://github.com/postlight/mercury-parser
// Definitions by: Malo Bourgon <https://github.com/malob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

export interface ParseResult {
    title: string | null;
    content: string | null;
    author: string | null;
    date_published: string | null;
    lead_image_url: string | null;
    dek: string | null;
    next_page_url: string | null;
    url: string;
    domain: string;
    excerpt: string | null;
    word_count: number;
    direction: 'ltr' | 'rtl';
    total_pages: number;
    rendered_pages: number;
}

export interface ParseOptions {
    contentType?: 'html' | 'markdown' | 'text';
    headers?: object;
    html?: string | Buffer;
}

export function parse(url: string, options?: ParseOptions): Promise<ParseResult>;
export function fetchResource(url: string): Promise<string>;
