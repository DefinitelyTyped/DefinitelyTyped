// Type definitions for next-seo 1.10
// Project: https://github.com/garmeeh/next-seo#readme
// Definitions by: Thomas Kosiewski <https://github.com/ThomasK33>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

export interface NextSeoProps {
    config: Config;
}

export interface Config {
    title?: string;
    titleTemplate?: string;
    description?: string;
    canonical?: string;

    dangerouslySetAllPagesToNoIndex?: boolean;
    noindex?: boolean;

    twitter?: Twitter;
    facebook?: Facebook;
    openGraph?: OpenGraph;
}

export interface Twitter {
    cardType?: string;
    site?: string;
    handle?: string;
}

export interface Facebook {
    appId?: number;
}

export interface OpenGraph {
    url?: string;
    type?: string;
    title?: string;
    description?: string;
    images?: ReadonlyArray<OpenGraphImages>;
    defaultImageHeight?: number;
    defaultImageWidth?: number;
    locale?: string;
    site_name?: string;

    profile?: OpenGraphProfile;
    book?: OpenGraphBook;
    article?: OpenGraphArticle;
}

export interface OpenGraphImages {
    url?: string;
    width?: number;
    height?: number;
    alt?: string;
}

export interface OpenGraphProfile {
    firstName?: string;
    lastName?: string;
    username?: string;
    gender?: string;
}

export interface OpenGraphBook {
    authors?: ReadonlyArray<string>;
    isbn?: string;
    releaseDate?: string;
    tags?: ReadonlyArray<string>;
}

export interface OpenGraphArticle {
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;

    authors?: ReadonlyArray<string>;
    section?: string;
    tags?: ReadonlyArray<string>;
}

export default class NextSeo extends Component<NextSeoProps> { }
