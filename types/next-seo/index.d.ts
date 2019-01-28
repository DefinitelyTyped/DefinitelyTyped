// Type definitions for next-seo 1.10
// Project: https://github.com/garmeeh/next-seo#readme
// Definitions by: Thomas Kosiewski <https://github.com/ThomasK33>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from "react";

declare module "next-seo" {
    interface INextSeoProps {
        config: IConfig;
    }

    interface IConfig {
        title?: string;
        titleTemplate?: string;
        description?: string;
        canonical?: string;

        dangerouslySetAllPagesToNoIndex?: boolean;
        noindex?: boolean;

        twitter?: ITwitter;
        facebook?: IFacebook;
        openGraph?: IOpenGraph;
    }

    interface ITwitter {
        cardType?: string;
        site?: string;
        handle?: string;
    }

    interface IFacebook {
        appId?: number;
    }

    interface IOpenGraph {
        url?: string;
        type?: string;
        title?: string;
        description?: string;
        images?: ReadonlyArray<IOpenGraphImages>;
        defaultImageHeight?: number;
        defaultImageWidth?: number;
        locale?: string;
        site_name?: string;

        profile?: IOpenGraphProfile;
        book?: IOpenGraphBook;
        article?: IOpenGraphArticle;
    }

    interface IOpenGraphImages {
        url?: string,
        width?: number,
        height?: number,
        alt?: string,
    }

    interface IOpenGraphProfile {
        firstName?: string;
        lastName?: string;
        username?: string;
        gender?: string;
    }

    interface IOpenGraphBook {
        authors?: ReadonlyArray<string>;
        isbn?: string;
        releaseDate?: string;
        tags?: ReadonlyArray<string>;
    }

    interface IOpenGraphArticle {
        publishedTime?: string;
        modifiedTime?: string;
        expirationTime?: string;

        authors?: ReadonlyArray<string>;
        section?: string;
        tags?: ReadonlyArray<string>;
    }

    export default class NextSeo extends Component<INextSeoProps> { }
}
