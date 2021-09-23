// Type definitions for nyaapi 2.4
// Project: https://github.com/Kylart/Nyaapi#readme
// Definitions by: Christopher Schreiner <https://github.com/infanf>, Totto16 <https://github.com/Totto16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace si {
    type UserStatus = number;

    enum Filter {
        'NO_FILTER' = 0,
        'NO_REMAKES' = 1,
        'TRUSTED_ONLY' = 2,
    }

    enum Category {
        '1_0' = 'ANIME',
        '1_1' = 'ANIME_AMV',
        '1_2' = 'ANIME_ENGLISH',
        '1_3' = 'ANIME_NON_ENGLISH',
        '1_4' = 'ANIME_RAW',
        '2_0' = 'AUDIO',
        '2_1' = 'AUDIO_LOSSLESS',
        '2_2' = 'AUDIO_LOSSY',
        '3_0' = 'LITERATURE',
        '3_1' = 'LITERATURE_ENGLISH',
        '3_2' = 'LITERATURE_NON_ENGLISH',
        '3_3' = 'LITERATURE_RAW',
        '4_0' = 'LIVE_ACTION',
        '4_1' = 'LIVE_ACTION_ENGLISH',
        '4_2' = 'LIVE_ACTION_IDOL_PV',
        '4_3' = 'LIVE_ACTION_NON_ENGLISH',
        '4_4' = 'LIVE_ACTION_RAW',
        '5_0' = 'PICTURES',
        '5_1' = 'PICTURES_GRAPHICS',
        '5_2' = 'PICTURES_PHOTOS',
        '6_0' = 'SOFTWARE',
        '6_1' = 'SOFTWARE_APPS',
        '6_2' = 'SOFTWARE_GAMES',
    }

    interface SearchOptions {
        term?: string;
        n?: number;
        category?: keyof typeof Category;
        p?: number;
        sort?: string;
        filter?: Filter;
        direction?: 'asc' | 'desc';
    }

    interface SearchOptionsTerm extends SearchOptions {
        term: string;
    }

    interface Torrent {
        id: string;
        name: string;
        category: string;
        sub_category: string;
        hash: string;
        torrent: string;
        magnet: string;
        filesize: string;
        date: string;
        completed: string;
        seeders: string;
        leechers: string;
    }

    interface UploadOptions {
        credentials: Credentials;
        torrent: string;
        name: string;
        category: keyof typeof Category;
        information?: string;
        description?: string;
        anonymous?: boolean;
        hidden?: boolean;
        complete?: boolean;
        remake?: boolean;
        trusted?: boolean;
    }

    interface Credentials {
        username: string;
        password: string;
    }

    const config: {
        readonly url: string;
        updateBaseUrl(url: string): void;
    };

    function search(term: string | SearchOptionsTerm, n?: number, opts?: SearchOptions): Promise<Torrent[]>;

    function searchAll(term: string | SearchOptionsTerm, opts?: SearchOptions): Promise<Torrent[]>;

    function searchPage(
        term: string | SearchOptionsTerm,
        p: number,
        opts?: SearchOptions,
        includeMaxPage?: boolean,
    ): Promise<Torrent[]>;

    function searchByUser(
        user: string | SearchOptionsTerm,
        term: string,
        n: number,
        opts?: SearchOptions,
    ): Promise<Torrent[]>;

    function searchAllByUser(user: string | SearchOptionsTerm, term: string, opts?: SearchOptions): Promise<Torrent[]>;

    function searchByUserAndByPage(
        user: string | SearchOptionsTerm,
        term: string,
        p: number,
        n: number,
        opts?: SearchOptions,
    ): Promise<Torrent[]>;

    function upload(opts: UploadOptions): Promise<Torrent>;
}

export namespace pantsu {
    type UserStatus = number;

    enum SortType {
        'id' = 0,
        'name' = 1,
        'date' = 2,
        'downloads' = 3,
        'size' = 4,
        'seeders' = 5,
        'leechers' = 6,
        'completed' = 7,
    }

    enum Category {
        '_' = 'ALL',
        '3_' = 'ANIME',
        '3_12' = 'ANIME_AMV',
        '3_5' = 'ANIME_ENGLISH',
        '3_13' = 'ANIME_NON_ENGLISH',
        '3_6' = 'ANIME_RAW',
        '2_' = 'AUDIO',
        '2_3' = 'AUDIO_LOSSLESS',
        '2_4' = 'AUDIO_LOSSY',
        '4_' = 'LITERATURE',
        '4_7' = 'LITERATURE_ENGLISH',
        '4_14' = 'LITERATURE_NON_ENGLISH',
        '4_8' = 'LITERATURE_RAW',
        '5_' = 'LIVE_ACTION',
        '5_9' = 'LIVE_ACTION_ENGLISH',
        '5_10' = 'LIVE_ACTION_IDOL_PV',
        '5_18' = 'LIVE_ACTION_NON_ENGLISH',
        '5_11' = 'LIVE_ACTION_RAW',
        '6_' = 'PICTURES',
        '6_15' = 'PICTURES_GRAPHICS',
        '6_16' = 'PICTURES_PHOTOS',
        '1_' = 'SOFTWARE',
        '1_1' = 'SOFTWARE_APPS',
        '1_2' = 'SOFTWARE_GAMES',
    }

    interface User {
        user_id: number;
        username: string;
        status: UserStatus;
        md5: string;
        created_at: string;
        liking_count: number;
        liked_count: number;
    }

    interface Comment {
        username: string;
        user_id: number;
        user_avatar: string;
        user_status: string;
        content: string;
        date: string;
    }

    interface SearchOptions {
        term?: string;
        n?: number;
        c?: Category ;
        page?: number;
        userID?: string;
        fromID?: string ;
        s?: string;
        maxage?: string;
        toDate?: string;
        fromDate?: string;
        dateType?: string;
        minSize?: string;
        maxSize?: string;
        sizeType?: 'b' | 'k' | 'm' | 'g';
        sort?: SortType ;
        order?: boolean;
        lang?: string[];
    }

    interface SearchOptionsTerm extends SearchOptions {
        term: string;
    }

    interface Torrent {
        id: number;
        name: string;
        status: number;
        hash: string;
        date: string;
        filesize: number;
        description: string;
        comments: Comment[];
        sub_category: string;
        category: string;
        anidbid: number;
        vndbid: number;
        vgmdbid: number;
        dlsite: string;
        videoquality: string;
        tags: null;
        uploader_id: number;
        uploader_name: string;
        uploader_old: string;
        website_link: string;
        languages: string[];
        magnet: string;
        torrent: string;
        seeders: number;
        leechers: number;
        completed: number;
        last_scrape: string;
        file_list: string[];
    }

    interface UploadOptions {
        token: string;
        name: string;
        username: string;
        torrent?: string;
        magnet?: string;
        category?: Category;
        information?: string;
        description?: string;
        anonymous?: boolean;
        hidden?: boolean;
        complete?: boolean;
        remake?: boolean;
        trusted?: boolean;
    }

    interface LoginResult {
        user_id: number;
        username: string;
        status: number;
        token: string;
        md5: string;
        created_at: string;
        liking_count: number;
        liked_count: number;
    }

    interface Response<T> {
        data: [T];
        infos: string[];
        ok: boolean;
    }

    interface UpdateOptions extends UploadOptions {
        id: number;
    }

    interface Credentials {
            username: string;
            password: string;
    }

    function search(term: string | SearchOptionsTerm, n?: number, opts?: SearchOptions): Promise<Torrent[]>;

    function searchAll(term: string | SearchOptionsTerm, opts?: SearchOptions): Promise<Torrent[]>;

    function infoRequest(id: number): Promise<Torrent>;

    function upload(opts: UploadOptions): Promise<Response<Torrent>>;

    function update(opts: UpdateOptions): Promise<Response<Torrent>>;

    function login(opts: Credentials): Promise<Response<LoginResult>>;

    function checkUser(id: number): Promise<User[]>;

    function checkHeader(id: number): Promise<string>;

    const config: {
        readonly url: string;
        updateBaseUrl(url: string): void;
    };
}
