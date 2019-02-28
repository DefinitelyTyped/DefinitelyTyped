// Type definitions for unsplash-js 5.0
// Project: https://github.com/unsplash/unsplash-js#readme
// Definitions by: My Self <https://github.com/markupcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Unsplash {
    public auth: Auth;
    public categories: CategoriesApi;
    public collections: CollectionsApi;
    public currentUser: CurrentUserApi;
    public users: UsersApi;
    public photos: PhotoApi;
    public search: SearchApi;
    public stats: StatsApi;

    constructor(options: {
        apiUrl: string;
        apiVersion: string;
        applicationId: string;
        secret: string;
        callbackUrl?: string;
        bearerToken?: string;
        headers?: { [key: string]: string };
    });

    private request(requestOptions: {
        url: string;
        method: string;
        query: object;
        headers: object;
        body: object;
        oauth: boolean;
    }): Promise<any>;
}

export function toJson(response: any): any;

export class PhotoApi {
    public listPhotos(
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;

    public listCuratedPhotos(
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;

    public searchPhotos(
        query: string,
        categories: ReadonlyArray<string>,
        page: number,
        perPage: number
    ): Promise<any>;

    public getPhoto(
        id: string,
        width?: number,
        height?: number,
        rectangle?: ReadonlyArray<number>
    ): Promise<any>;

    public getPhotoStats(id: string): Promise<any>;

    public getRandomPhoto(options: {
        width?: number;
        height?: number;
        query?: string;
        username?: string;
        featured?: boolean;
        collections?: ReadonlyArray<string>;
        count?: number;
    }): Promise<any>;

    public uploadPhoto(photo: object): void;

    public likePhoto(id: string): Promise<any>;

    public unlikePhoto(id: string): Promise<any>;

    public downloadPhoto(photo: {
        links: { download_location: string };
    }): Promise<any>;
}

export class CollectionsApi {
    public listCollections(
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;

    public listCuratedCollections(
        page?: number,
        perPage?: number
    ): Promise<any>;

    public listFeaturedCollections(
        page?: number,
        perPage?: number
    ): Promise<any>;

    public getCollection(id: number): Promise<any>;

    public getCollectionPhotos(
        id: number,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;

    public getCuratedCollectionPhotos(
        id: number,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;

    public createCollection(
        title: string,
        description?: string,
        private?: boolean
    ): Promise<any>;

    public updateCollection(
        id: number,
        title?: string,
        description?: string,
        private?: boolean
    ): Promise<any>;

    public deleteCollection(id: number): Promise<any>;

    public addPhotoToCollection(
        collectionId: number,
        photoId: string
    ): Promise<any>;

    public removePhotoFromCollection(
        collectionId: number,
        photoId: string
    ): Promise<any>;

    public listRelatedCollections(collectionId: number): Promise<any>;
}

export class SearchApi {
    public all(keyword: string, page: number, per_page: number): Promise<any>;

    public photos(
        keyword: string,
        page?: number,
        per_page?: number
    ): Promise<any>;

    public users(
        keyword: string,
        page?: number,
        per_page?: number
    ): Promise<any>;

    public collections(
        keyword: string,
        page?: number,
        per_page?: number
    ): Promise<any>;
}

export class StatsApi {
    public total(): Promise<any>;
}

export class CurrentUserApi {
    public profile(): Promise<any>;

    public updateProfile(options: {
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        url?: string;
        location?: string;
        bio?: string;
        instagramUsername?: string;
    }): Promise<any>;
}

export class UsersApi {
    public profile(username: string): Promise<any>;

    public statistics(
        username: string,
        resolution?: string,
        quantity?: string
    ): Promise<any>;

    public photos(
        username: string,
        page?: number,
        perPage?: number,
        orderBy?: string,
        stats?: boolean
    ): Promise<any>;

    public likes(
        username: string,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;

    public collections(
        username: string,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<any>;
}

export class CategoriesApi {
    public listCategories(): Promise<any>;

    public category(id: any): Promise<any>;

    public categoryPhotos(
        id: any,
        page?: number,
        perPage?: number
    ): Promise<any>;
}

export class Auth {
    public getAuthenticationUrl(scopes?: ReadonlyArray<string>): string;

    public userAuthentication(code: string): Promise<any>;

    public setBearerToken(accessToken: string): void;
}
