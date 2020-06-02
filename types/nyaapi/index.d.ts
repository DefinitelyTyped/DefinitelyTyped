// Type definitions for nyaapi 2.3
// Project: https://github.com/Kylart/Nyaapi#readme
// Definitions by: Christopher Schreiner <https://github.com/infanf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace si {
    type UserStatus = number;

    enum Filter {
        'NO_FILTER' = 0,
        'NO_REMAKES' = 1,
        'TRUSTED_ONLY' = 2,
    }

    enum Category {
        'ANIME' = '1_0',
        'ANIME_AMV' = '1_1',
        'ANIME_ENGLISH' = '1_2',
        'ANIME_NON_ENGLISH' = '1_3',
        'ANIME_RAW' = '1_4',
        'AUDIO' = '2_0',
        'AUDIO_LOSSLESS' = '2_1',
        'AUDIO_LOSSY' = '2_2',
        'LITERATURE' = '3_0',
        'LITERATURE_ENGLISH' = '3_1',
        'LITERATURE_NON_ENGLISH' = '3_2',
        'LITERATURE_RAW' = '3_3',
        'LIVE_ACTION' = '4_0',
        'LIVE_ACTION_ENGLISH' = '4_1',
        'LIVE_ACTION_IDOL_PV' = '4_2',
        'LIVE_ACTION_NON_ENGLISH' = '4_3',
        'LIVE_ACTION_RAW' = '4_4',
        'PICTURES' = '5_0',
        'PICTURES_GRAPHICS' = '5_1',
        'PICTURES_PHOTOS' = '5_2',
        'SOFTWARE' = '6_0',
        'SOFTWARE_APPS' = '6_1',
        'SOFTWARE_GAMES' = '6_2',
    }

    interface SearchOptions {
        term?: string;
        n?: number;
        category?: Category;
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

    interface UploadData {
        credentials: string;
        name: string;
        category: string;
        information: string;
        description: string;
        anonymous: boolean;
        hidden: boolean;
        complete: boolean;
        remake: boolean;
        trusted: boolean;
        torrent: string;
    }

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

    function upload(opts: UploadData): Promise<Torrent>;
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
        'ALL' = '_',
        'ANIME' = '3_',
        'ANIME_AMV' = '3_12',
        'ANIME_ENGLISH' = '3_5',
        'ANIME_NON_ENGLISH' = '3_13',
        'ANIME_RAW' = '3_6',
        'AUDIO' = '2_',
        'AUDIO_LOSSLESS' = '2_3',
        'AUDIO_LOSSY' = '2_4',
        'LITERATURE' = '4_',
        'LITERATURE_ENGLISH' = '4_7',
        'LITERATURE_NON_ENGLISH' = '4_14',
        'LITERATURE_RAW' = '4_8',
        'LIVE_ACTION' = '5_',
        'LIVE_ACTION_ENGLISH' = '5_9',
        'LIVE_ACTION_IDOL_PV' = '5_10',
        'LIVE_ACTION_NON_ENGLISH' = '5_18',
        'LIVE_ACTION_RAW' = '5_11',
        'PICTURES' = '6_',
        'PICTURES_GRAPHICS' = '6_15',
        'PICTURES_PHOTOS' = '6_16',
        'SOFTWARE' = '1_',
        'SOFTWARE_APPS' = '1_1',
        'SOFTWARE_GAMES' = '1_2',
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
        c?: Category;
        page?: number;
        userID?: string;
        fromID?: string;
        s?: string;
        maxage?: string;
        toDate?: string;
        fromDate?: string;
        dateType?: string;
        minSize?: string;
        maxSize?: string;
        sizeType?: 'b' | 'k' | 'm' | 'g';
        sort?: SortType;
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

    interface UploadData {
        username: string;
        name: string;
        magnet: string;
        c: Category;
        remake: boolean;
        description: string;
        status: number;
        hidden: boolean;
        website_link: string;
        languages: string[];
        torrent: string;
    }

    interface LoginData {
        username: string;
        password: string;
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

    interface UpdateData extends UploadData {
        id: number;
    }
    function search(term: string | SearchOptionsTerm, n?: number, opts?: SearchOptions): Promise<Torrent[]>;

    function searchAll(term: string | SearchOptionsTerm, opts?: SearchOptions): Promise<Torrent[]>;

    function infoRequest(id: number): Promise<Torrent>;

    function upload(opts: UploadData): Promise<Response<Torrent>>;

    function update(opts: UpdateData): Promise<Response<Torrent>>;

    function login(opts: LoginData): Promise<Response<LoginResult>>;

    function checkUser(id: number): Promise<User[]>;

    function checkHeader(id: number): Promise<string>;
}
