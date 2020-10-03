// Type definitions for unsplash-js 6.3
// Project: https://github.com/unsplash/unsplash-js#readme
// Definitions by: Oliver Joseph Ash <https://github.com/oliverjash>
//                 Sami Jaber <https://github.com/samijaber>
//                 Thomas Lefebvre <https://github.com/Magellol>
//                 Luke Chesser <https://github.com/lukechesser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type PhotoOrderBy = 'latest' | 'oldest';
export type Orientation = 'portrait' | 'landscape' | 'squareish';
export type ContentSafety = 'high' | 'low';
export type CollectionIds = ReadonlyArray<number | string>;
export type Scopes = 'public' | 'read_user' | 'write_user' | 'read_photos' | 'write_photos' | 'write_likes' | 'write_followers' | 'read_collections' | 'write_collections';

// Supported ISO-639-1 languages
export type Languages = 'af' | 'am' | 'ar' | 'az' | 'be' | 'bg' | 'bn' | 'bs' | 'ca' | 'ceb' | 'co' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'eo' | 'es' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy'
    | 'ga' | 'gd' | 'gl' | 'gu' | 'ha' | 'haw' | 'hi' | 'hmn' | 'hr' | 'ht' | 'hu' | 'hy' | 'id' | 'ig' | 'is' | 'it' | 'iw' | 'ja' | 'jw' | 'ka' | 'kk' | 'km' | 'kn' | 'ko' | 'ku' | 'ky' | 'la'
    | 'lb' | 'lo' | 'lt' | 'lv' | 'mg' | 'mi' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'mt' | 'my' | 'ne' | 'nl' | 'no' | 'ny' | 'or' | 'pa' | 'pl' | 'ps' | 'pt' | 'ro' | 'ru' | 'rw' | 'sd' | 'si'
    | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sq' | 'sr' | 'st' | 'su' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tl' | 'tr' | 'tt' | 'ug' | 'uk' | 'ur' | 'uz' | 'vi' | 'xh' | 'yi' | 'yo'
    | 'zh' | 'zh-TW' | 'zu';

export default class Unsplash {
    auth: UnsplashApi.Auth;
    collections: UnsplashApi.Collections;
    currentUser: UnsplashApi.CurrentUser;
    users: UnsplashApi.Users;
    photos: UnsplashApi.Photo;
    search: UnsplashApi.Search;
    stats: UnsplashApi.Stats;

    constructor(options: {
        apiUrl?: string;
        apiVersion?: string;
        accessKey: string;
        secret?: string;
        callbackUrl?: string;
        bearerToken?: string;
        headers?: { [key: string]: string };
        timeout?: number;
    });

    request(requestOptions: {
        url: string;
        method: string;
        query: object;
        headers: object;
        body: object;
        oauth: boolean;
    }): Promise<Response>;
}

export function toJson(response: any): any;

export namespace UnsplashApi {
    interface Photo {
        listPhotos(page?: number, perPage?: number, orderBy?: PhotoOrderBy): Promise<Response>;

        getPhoto(id: string): Promise<Response>;

        getPhotoStats(id: string): Promise<Response>;

        getRandomPhoto(options: {
            query?: string;
            username?: string;
            featured?: boolean;
            orientation?: Orientation;
            c?: string;
            collections?: CollectionIds;
            count?: number;
        }): Promise<Response>;

        likePhoto(id: string): Promise<Response>;

        unlikePhoto(id: string): Promise<Response>;

        downloadPhoto(photo: { links: { download_location: string } }): Promise<Response>;

        trackDownload(photo: {
            links: { download_location: string };
        }): Promise<Response>;
    }

    interface Collections {
        listCollections(page?: number, perPage?: number): Promise<Response>;

        getCollection(id: number): Promise<Response>;

        getCollectionPhotos(id: number, page?: number, perPage?: number, orderBy?: PhotoOrderBy, options?: {
            orientation?: Orientation
        }): Promise<Response>;

        createCollection(title: string, description?: string, isPrivate?: boolean): Promise<Response>;

        updateCollection(id: number, title?: string, description?: string, isPrivate?: boolean): Promise<Response>;

        deleteCollection(id: number): Promise<Response>;

        addPhotoToCollection(collectionId: number, photoId: string): Promise<Response>;

        removePhotoFromCollection(collectionId: number, photoId: string): Promise<Response>;

        listRelatedCollections(collectionId: number): Promise<Response>;
    }

    interface Search {
        photos(
            keyword: string,
            page?: number,
            perPage?: number,
            filters?: {
                orientation?: Orientation;
                contentFilter?: ContentSafety;
                color?: 'black_and_white' | 'black' | 'white' | 'yellow' | 'orange' | 'red' | 'purple' | 'magenta' | 'green' | 'teal' | 'blue';
                orderBy?: 'latest' | 'relevant';
                lang?: Languages;
                collections?: CollectionIds
            }
        ): Promise<Response>;

        users(keyword: string, page?: number, perPage?: number): Promise<Response>;

        collections(keyword: string, page?: number, perPage?: number): Promise<Response>;
    }

    interface Stats {
        total(): Promise<Response>;
    }

    interface CurrentUser {
        profile(): Promise<Response>;

        updateProfile(options: {
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            url?: string;
            location?: string;
            bio?: string;
            instagramUsername?: string;
        }): Promise<Response>;
    }

    interface Users {
        profile(username: string): Promise<Response>;

        photos(username: string, page?: number, perPage?: number, orderBy?: PhotoOrderBy, options?: {
            stats?: boolean,
            orientation?: Orientation
        }): Promise<Response>;

        likes(username: string, page?: number, perPage?: number, orderBy?: PhotoOrderBy, options?: {
            orientation: Orientation,
        }): Promise<Response>;

        collections(username: string, page?: number, perPage?: number, orderBy?: string): Promise<Response>;

        statistics(username: string, resolution?: 'days', quantity?: number): Promise<Response>;
    }

    interface Auth {
        getAuthenticationUrl(scopes?: Scopes[]): string;

        userAuthentication(code: string): Promise<Response>;

        setBearerToken(accessToken: string): void;
    }
}
