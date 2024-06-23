/// <reference types="node" />

import { PassThrough } from "stream";

declare namespace run {
    interface OpenGraphImage {
        // Height and Width can be optional, see doc on
        // https://github.com/jshemas/openGraphScraper/blob/master/lib/media.js
        height?: string;
        type: string;
        url: string;
        width?: string;
    }

    interface OpenGraphProperties {
        [key: string]: string | undefined;
        alAndroidAppName?: string | undefined;
        alAndroidClass?: string | undefined;
        alAndroidPackage?: string | undefined;
        alAndroidUrl?: string | undefined;
        alIosAppName?: string | undefined;
        alIosAppStoreId?: string | undefined;
        alIosUrl?: string | undefined;
        alIpadAppName?: string | undefined;
        alIpadAppStoreId?: string | undefined;
        alIpadUrl?: string | undefined;
        alIphoneAppName?: string | undefined;
        alIphoneAppStoreId?: string | undefined;
        alIphoneUrl?: string | undefined;
        alWebShouldFallback?: string | undefined;
        alWebUrl?: string | undefined;
        alWindowsAppId?: string | undefined;
        alWindowsAppName?: string | undefined;
        alWindowsPhoneAppId?: string | undefined;
        alWindowsPhoneAppName?: string | undefined;
        alWindowsPhoneUrl?: string | undefined;
        alWindowsUniversalAppId?: string | undefined;
        alWindowsUniversalAppName?: string | undefined;
        alWindowsUniversalUrl?: string | undefined;
        alWindowsUrl?: string | undefined;
        articleAuthor?: string | undefined;
        articleExpirationTime?: string | undefined;
        articleModifiedTime?: string | undefined;
        articlePublishedTime?: string | undefined;
        articlePublisher?: string | undefined;
        articleSection?: string | undefined;
        articleTag?: string | undefined;
        author?: string | undefined;
        bookAuthor?: string | undefined;
        bookCanonicalName?: string | undefined;
        bookIsbn?: string | undefined;
        bookReleaseDate?: string | undefined;
        booksBook?: string | undefined;
        booksRatingScale?: string | undefined;
        booksRatingValue?: string | undefined;
        bookTag?: string | undefined;
        businessContactDataCountryName?: string | undefined;
        businessContactDataLocality?: string | undefined;
        businessContactDataPostalCode?: string | undefined;
        businessContactDataRegion?: string | undefined;
        businessContactDataStreetAddress?: string | undefined;
        dcContributor?: string | undefined;
        dcCoverage?: string | undefined;
        dcCreator?: string | undefined;
        dcDate?: string | undefined;
        dcDateCreated?: string | undefined;
        dcDateIssued?: string | undefined;
        dcDescription?: string | undefined;
        dcFormatMedia?: string | undefined;
        dcFormatSize?: string | undefined;
        dcIdentifier?: string | undefined;
        dcLanguage?: string | undefined;
        dcPublisher?: string | undefined;
        dcRelation?: string | undefined;
        dcRights?: string | undefined;
        dcSource?: string | undefined;
        dcSubject?: string | undefined;
        dcTitle?: string | undefined;
        dcType?: string | undefined;
        modifiedTime?: string | undefined;
        musicAlbum?: string | undefined;
        musicAlbumDisc?: string | undefined;
        musicAlbumTrack?: string | undefined;
        musicAlbumUrl?: string | undefined;
        musicCreator?: string | undefined;
        musicDuration?: string | undefined;
        musicMusician?: string | undefined;
        musicReleaseDate?: string | undefined;
        musicSong?: string | undefined;
        musicSongDisc?: string | undefined;
        musicSongTrack?: string | undefined;
        musicSongUrl?: string | undefined;
        ogArticleAuthor?: string | undefined;
        ogArticleExpirationTime?: string | undefined;
        ogArticleModifiedTime?: string | undefined;
        ogArticlePublishedTime?: string | undefined;
        ogArticlePublisher?: string | undefined;
        ogArticleSection?: string | undefined;
        ogArticleTag?: string | undefined;
        ogAudio?: string | undefined;
        ogAudioSecureURL?: string | undefined;
        ogAudioType?: string | undefined;
        ogAudioURL?: string | undefined;
        ogAvailability?: string | undefined;
        ogDate?: string | undefined;
        ogDescription?: string | undefined;
        ogDeterminer?: string | undefined;
        ogImage?: string | undefined;
        ogImageHeight?: string | undefined;
        ogImageSecureURL?: string | undefined;
        ogImageType?: string | undefined;
        ogImageURL?: string | undefined;
        ogImageWidth?: string | undefined;
        ogLocale?: string | undefined;
        ogLocaleAlternate?: string | undefined;
        ogLogo?: string | undefined;
        ogPriceAmount?: string | undefined;
        ogPriceCurrency?: string | undefined;
        ogProductAvailability?: string | undefined;
        ogProductCondition?: string | undefined;
        ogProductPriceAmount?: string | undefined;
        ogProductPriceCurrency?: string | undefined;
        ogProductRetailerItemId?: string | undefined;
        ogSiteName?: string | undefined;
        ogTitle?: string | undefined;
        ogType?: string | undefined;
        ogUrl?: string | undefined;
        ogVideo?: string | undefined;
        ogVideoActorId?: string | undefined;
        ogVideoHeight?: string | undefined;
        ogVideoSecureURL?: string | undefined;
        ogVideoType?: string | undefined;
        ogVideoWidth?: string | undefined;
        placeLocationLatitude?: string | undefined;
        placeLocationLongitude?: string | undefined;
        profileFirstName?: string | undefined;
        profileGender?: string | undefined;
        profileLastName?: string | undefined;
        profileUsername?: string | undefined;
        publishedTime?: string | undefined;
        releaseDate?: string | undefined;
        restaurantContactInfoCountryName?: string | undefined;
        restaurantContactInfoEmail?: string | undefined;
        restaurantContactInfoLocality?: string | undefined;
        restaurantContactInfoPhoneNumber?: string | undefined;
        restaurantContactInfoPostalCode?: string | undefined;
        restaurantContactInfoRegion?: string | undefined;
        restaurantContactInfoStreetAddress?: string | undefined;
        restaurantContactInfoWebsite?: string | undefined;
        restaurantMenu?: string | undefined;
        restaurantRestaurant?: string | undefined;
        restaurantSection?: string | undefined;
        restaurantVariationPriceAmount?: string | undefined;
        restaurantVariationPriceCurrency?: string | undefined;
        twitterAppIdGooglePlay?: string | undefined;
        twitterAppIdiPad?: string | undefined;
        twitterAppIdiPhone?: string | undefined;
        twitterAppNameGooglePlay?: string | undefined;
        twitterAppNameiPad?: string | undefined;
        twitterAppNameiPhone?: string | undefined;
        twitterAppUrlGooglePlay?: string | undefined;
        twitterAppUrliPad?: string | undefined;
        twitterAppUrliPhone?: string | undefined;
        twitterCard?: string | undefined;
        twitterCreator?: string | undefined;
        twitterCreatorId?: string | undefined;
        twitterDescription?: string | undefined;
        twitterImage?: string | undefined;
        twitterImageAlt?: string | undefined;
        twitterImageHeight?: string | undefined;
        twitterImageSrc?: string | undefined;
        twitterImageWidth?: string | undefined;
        twitterPlayer?: string | undefined;
        twitterPlayerHeight?: string | undefined;
        twitterPlayerStream?: string | undefined;
        twitterPlayerStreamContentType?: string | undefined;
        twitterPlayerWidth?: string | undefined;
        twitterSite?: string | undefined;
        twitterSiteId?: string | undefined;
        twitterTitle?: string | undefined;
        twitterUrl?: string | undefined;
        updatedTime?: string | undefined;
    }

    interface SuccessResult {
        error: false;
        result: OpenGraphProperties & {
            ogImage?: OpenGraphImage | OpenGraphImage[] | undefined;
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
        allow_protocol_relative_urls?: boolean | undefined;
        /** default is `false`. */
        allow_trailing_dot?: boolean | undefined;
        /** default is `false`. */
        allow_underscores?: boolean | undefined;
        /** default is `false`. */
        disallow_auth?: boolean | undefined;
        /** default is `false`. */
        host_blacklist?: boolean | undefined;
        /** default is `false`. */
        host_whitelist?: boolean | undefined;
        /** default is `['http', 'https']`. */
        protocols?: string[] | undefined;
        /** default is `true`. */
        require_host?: boolean | undefined;
        /** default is `false`. */
        require_protocol?: boolean | undefined;
        /** default is `true`. */
        require_tld?: boolean | undefined;
        /** default is `true`. */
        require_valid_protocol?: boolean | undefined;
    }

    interface CustomMetaTag {
        multiple?: boolean | undefined;
        property: string;
        fieldName: string;
    }

    interface Options {
        /** By default, OGS will only send back the first image/video it finds (default: `false`). */
        allMedia?: boolean | undefined;
        /** Pass in an array of sites you don't want `og`s to run on. */
        blacklist?: string[] | undefined;
        /** Set the accept-encoding to `gzip/deflate` (default: `true`). */
        decompress?: boolean | undefined;
        /**
         * Setting this to `null` might help with running `og`s on non english websites (default: `utf8`).
         * @deprecated
         */
        encoding?: string | null | undefined;
        /** Defines if redirect responses should be followed automatically (default: `true`). */
        followRedirect?: boolean | undefined;
        /** An object containing request headers. Useful for setting the user-agent. */
        headers?: Record<string, string> | undefined;
        /** You can pass in an HTML string to run `og`s on it (use without `options.url`). */
        html?: string | undefined;
        /** Max number of redirects `og`s will follow (default: `10`). */
        maxRedirects?: number | undefined;
        /** Fetch other images if no open graph ones are found (default: `true`). */
        ogImageFallback?: boolean | undefined;
        /** Only fetch open graph info and don't fall back on anything else (default: `false`). */
        onlyGetOpenGraphInfo?: boolean | undefined;
        /** Sets the peekSize for the request (default: `1024`). */
        peekSize?: number | undefined;
        /** Number of times `og`s will retry the request (default: `2`). */
        retry?: number | undefined;
        /** Timeout of the request in ms (default: `2000`). */
        timeout?: number | undefined;
        /** URL of the site. */
        url: string;
        /** Sets the options used by `validator.js` for testing the URL. */
        urlValidatorSettings?: URLValidatorSettings | undefined;
        /** Here you can define custom meta tags you want to scrape. */
        customMetaTags?: CustomMetaTag[] | undefined;
    }
}

declare function run(options: run.Options): Promise<run.SuccessResult | run.ErrorResult>;
declare function run(
    options: run.Options,
    callback: (error: boolean, results: run.SuccessResult | run.ErrorResult, response: PassThrough) => void,
): void;

export = run;
