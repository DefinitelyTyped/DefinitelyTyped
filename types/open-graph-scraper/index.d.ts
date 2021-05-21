// Type definitions for open-graph-scraper 4.8
// Project: https://github.com/jshemas/openGraphScraper#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { PassThrough } from 'stream';

declare namespace run {
    interface OpenGraphImage {
        height: string;
        type: string;
        url: string;
        width: string;
    }

    interface OpenGraphProperties {
        [key: string]: string | undefined;
        alAndroidAppName?: string;
        alAndroidClass?: string;
        alAndroidPackage?: string;
        alAndroidUrl?: string;
        alIosAppName?: string;
        alIosAppStoreId?: string;
        alIosUrl?: string;
        alIpadAppName?: string;
        alIpadAppStoreId?: string;
        alIpadUrl?: string;
        alIphoneAppName?: string;
        alIphoneAppStoreId?: string;
        alIphoneUrl?: string;
        alWebShouldFallback?: string;
        alWebUrl?: string;
        alWindowsAppId?: string;
        alWindowsAppName?: string;
        alWindowsPhoneAppId?: string;
        alWindowsPhoneAppName?: string;
        alWindowsPhoneUrl?: string;
        alWindowsUniversalAppId?: string;
        alWindowsUniversalAppName?: string;
        alWindowsUniversalUrl?: string;
        alWindowsUrl?: string;
        articleAuthor?: string;
        articleExpirationTime?: string;
        articleModifiedTime?: string;
        articlePublishedTime?: string;
        articlePublisher?: string;
        articleSection?: string;
        articleTag?: string;
        author?: string;
        bookAuthor?: string;
        bookCanonicalName?: string;
        bookIsbn?: string;
        bookReleaseDate?: string;
        booksBook?: string;
        booksRatingScale?: string;
        booksRatingValue?: string;
        bookTag?: string;
        businessContactDataCountryName?: string;
        businessContactDataLocality?: string;
        businessContactDataPostalCode?: string;
        businessContactDataRegion?: string;
        businessContactDataStreetAddress?: string;
        dcContributor?: string;
        dcCoverage?: string;
        dcCreator?: string;
        dcDate?: string;
        dcDateCreated?: string;
        dcDateIssued?: string;
        dcDescription?: string;
        dcFormatMedia?: string;
        dcFormatSize?: string;
        dcIdentifier?: string;
        dcLanguage?: string;
        dcPublisher?: string;
        dcRelation?: string;
        dcRights?: string;
        dcSource?: string;
        dcSubject?: string;
        dcTitle?: string;
        dcType?: string;
        modifiedTime?: string;
        musicAlbum?: string;
        musicAlbumDisc?: string;
        musicAlbumTrack?: string;
        musicAlbumUrl?: string;
        musicCreator?: string;
        musicDuration?: string;
        musicMusician?: string;
        musicReleaseDate?: string;
        musicSong?: string;
        musicSongDisc?: string;
        musicSongTrack?: string;
        musicSongUrl?: string;
        ogArticleAuthor?: string;
        ogArticleExpirationTime?: string;
        ogArticleModifiedTime?: string;
        ogArticlePublishedTime?: string;
        ogArticlePublisher?: string;
        ogArticleSection?: string;
        ogArticleTag?: string;
        ogAudio?: string;
        ogAudioSecureURL?: string;
        ogAudioType?: string;
        ogAudioURL?: string;
        ogAvailability?: string;
        ogDate?: string;
        ogDescription?: string;
        ogDeterminer?: string;
        ogImage?: string;
        ogImageHeight?: string;
        ogImageSecureURL?: string;
        ogImageType?: string;
        ogImageURL?: string;
        ogImageWidth?: string;
        ogLocale?: string;
        ogLocaleAlternate?: string;
        ogLogo?: string;
        ogPriceAmount?: string;
        ogPriceCurrency?: string;
        ogProductAvailability?: string;
        ogProductCondition?: string;
        ogProductPriceAmount?: string;
        ogProductPriceCurrency?: string;
        ogProductRetailerItemId?: string;
        ogSiteName?: string;
        ogTitle?: string;
        ogType?: string;
        ogUrl?: string;
        ogVideo?: string;
        ogVideoActorId?: string;
        ogVideoHeight?: string;
        ogVideoSecureURL?: string;
        ogVideoType?: string;
        ogVideoWidth?: string;
        placeLocationLatitude?: string;
        placeLocationLongitude?: string;
        profileFirstName?: string;
        profileGender?: string;
        profileLastName?: string;
        profileUsername?: string;
        publishedTime?: string;
        releaseDate?: string;
        restaurantContactInfoCountryName?: string;
        restaurantContactInfoEmail?: string;
        restaurantContactInfoLocality?: string;
        restaurantContactInfoPhoneNumber?: string;
        restaurantContactInfoPostalCode?: string;
        restaurantContactInfoRegion?: string;
        restaurantContactInfoStreetAddress?: string;
        restaurantContactInfoWebsite?: string;
        restaurantMenu?: string;
        restaurantRestaurant?: string;
        restaurantSection?: string;
        restaurantVariationPriceAmount?: string;
        restaurantVariationPriceCurrency?: string;
        twitterAppIdGooglePlay?: string;
        twitterAppIdiPad?: string;
        twitterAppIdiPhone?: string;
        twitterAppNameGooglePlay?: string;
        twitterAppNameiPad?: string;
        twitterAppNameiPhone?: string;
        twitterAppUrlGooglePlay?: string;
        twitterAppUrliPad?: string;
        twitterAppUrliPhone?: string;
        twitterCard?: string;
        twitterCreator?: string;
        twitterCreatorId?: string;
        twitterDescription?: string;
        twitterImage?: string;
        twitterImageAlt?: string;
        twitterImageHeight?: string;
        twitterImageSrc?: string;
        twitterImageWidth?: string;
        twitterPlayer?: string;
        twitterPlayerHeight?: string;
        twitterPlayerStream?: string;
        twitterPlayerStreamContentType?: string;
        twitterPlayerWidth?: string;
        twitterSite?: string;
        twitterSiteId?: string;
        twitterTitle?: string;
        twitterUrl?: string;
        updatedTime?: string;
    }

    interface SuccessResult {
        error: false;
        result: OpenGraphProperties & {
            ogImage?: OpenGraphImage | OpenGraphImage[];
            success: true;
        };
        response: PassThrough;
    }

    interface ErrorResult {
        error: true;
        result: {
            error: string;
            errorDetails: Error;
            success: false;
        };
    }

    interface URLValidatorSettings {
        /** default is `false`. */
        allow_protocol_relative_urls?: boolean;
        /** default is `false`. */
        allow_trailing_dot?: boolean;
        /** default is `false`. */
        allow_underscores?: boolean;
        /** default is `false`. */
        disallow_auth?: boolean;
        /** default is `false`. */
        host_blacklist?: boolean;
        /** default is `false`. */
        host_whitelist?: boolean;
        /** default is `['http', 'https']`. */
        protocols?: string[];
        /** default is `true`. */
        require_host?: boolean;
        /** default is `false`. */
        require_protocol?: boolean;
        /** default is `true`. */
        require_tld?: boolean;
        /** default is `true`. */
        require_valid_protocol?: boolean;
    }

    interface CustomMetaTag {
        multiple?: boolean;
        property: string;
        fieldName: string;
    }

    interface Options {
        /** By default, OGS will only send back the first image/video it finds (default: `false`). */
        allMedia?: boolean;
        /** Pass in an array of sites you don't want `og`s to run on. */
        blacklist?: string[];
        /** Set the accept-encoding to `gzip/deflate` (default: `true`). */
        decompress?: boolean;
        /**
         * Setting this to `null` might help with running `og`s on non english websites (default: `utf8`).
         * @deprecated
         */
        encoding?: string | null;
        /** Defines if redirect responses should be followed automatically (default: `true`). */
        followRedirect?: boolean;
        /** An object containing request headers. Useful for setting the user-agent. */
        headers?: Record<string, string>;
        /** You can pass in an HTML string to run `og`s on it (use without `options.url`). */
        html?: string;
        /** Max number of redirects `og`s will follow (default: `10`). */
        maxRedirects?: number;
        /** Fetch other images if no open graph ones are found (default: `true`). */
        ogImageFallback?: boolean;
        /** Only fetch open graph info and don't fall back on anything else (default: `false`). */
        onlyGetOpenGraphInfo?: boolean;
        /** Sets the peekSize for the request (default: `1024`). */
        peekSize?: number;
        /** Number of times `og`s will retry the request (default: `2`). */
        retry?: number;
        /** Timeout of the request in ms (default: `2000`). */
        timeout?: number;
        /** URL of the site. */
        url: string;
        /** Sets the options used by `validator.js` for testing the URL. */
        urlValidatorSettings?: URLValidatorSettings;
        /** Here you can define custom meta tags you want to scrape. */
        customMetaTags?: CustomMetaTag[];
    }
}

declare function run(options: run.Options): Promise<run.SuccessResult | run.ErrorResult>;
declare function run(
    options: run.Options,
    callback: (error: boolean, results: run.SuccessResult | run.ErrorResult, response: PassThrough) => void,
): void;

export = run;
