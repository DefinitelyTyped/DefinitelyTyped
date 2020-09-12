// Type definitions for unsplash-js 6.0
// Project: https://github.com/unsplash/unsplash-js#readme
// Definitions by: Andrew Malikov <https://github.com/markupcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
        listPhotos(page?: number, perPage?: number, orderBy?: string): Promise<Response>;

        getPhoto(id: string): Promise<Response>;

        getPhotoStats(id: string): Promise<Response>;

        getRandomPhoto(options: {
            query?: string;
            username?: string;
            featured?: boolean;
            orientation?: string;
            collections?: ReadonlyArray<string>;
            count?: number;
        }): Promise<Response>;

        likePhoto(id: string): Promise<Response>;

        unlikePhoto(id: string): Promise<Response>;

        downloadPhoto(photo: { links: { download_location: string } }): Promise<Response>;
    }

    interface Collections {
        listCollections(page?: number, perPage?: number, orderBy?: string): Promise<Response>;

        getCollection(id: number): Promise<Response>;

        getCollectionPhotos(id: number, page?: number, perPage?: number, orderBy?: string): Promise<Response>;

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
            filters?: { orientation?: string; collections?: ReadonlyArray<string> },
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

        photos(username: string, page?: number, perPage?: number, orderBy?: string, stats?: boolean): Promise<Response>;

        likes(username: string, page?: number, perPage?: number, orderBy?: string): Promise<Response>;

        collections(username: string, page?: number, perPage?: number, orderBy?: string): Promise<Response>;

        statistics(username: string, resolution?: string, quantity?: number): Promise<Response>;
    }

    interface Auth {
        getAuthenticationUrl(scopes?: ReadonlyArray<string>): string;

        userAuthentication(code: string): Promise<Response>;

        setBearerToken(accessToken: string): void;
    }
}
