// Type definitions for nyaapi 2.1
// Project: https://github.com/Kylart/Nyaapi#readme
// Definitions by: Christopher Schreiner <https://github.com/infanf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace si {
    type UserStatus = number;

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
        c?: string[];
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
        order?: boolean;
        lang?: string[];
    }

    interface SearchOptionsTerm extends SearchOptions {
        term: string;
    }

    interface Torrent {
        category: { label: string; code: string };
        name: string;
        links: {
            page: string;
            file: string;
            magnet: string;
        };
        fileSize: string;
        timestamp: string;
        seeders: string;
        leechers: string;
        nbDownload: string;
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
        c?: string[];
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
        c: string;
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
