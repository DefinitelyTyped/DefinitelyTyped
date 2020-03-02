

declare module "mal-scraper" {
    
    export namespace search {
        export function search(type: ("manga"|"anime"), opts: SearchOptions): Promise<AnimeSearchModel>;
    }

    export function getInfoFromName(name: string): Promise<AnimeDataModel>;
    export function getInfoFromURL(url: string): Promise<AnimeDataModel>;
    export function getResultsFromSearch(query: string): Promise<SearchResultDataModel[]>;
    export function getWatchListFromUser(username: string, after: number, type: ("anime"|"manga")): Promise<UserWatchListDataModel>;
    export function getSeason(year: number, season: string, type?: ("TV"|"TVNew"|"TVCon"|"ONAs"|"OVAs"|"Specials"|"Movies")): Promise<SeasonalReleaseDataModel>;
    export function getNewsNoDetails(nbNews: number): Promise<NewsDataModel>;
    export function getEpisodesList(anime: ({name: string, id: number}|string)): Promise<AnimeEpisodesDataModel>;


    class officialApi {
        constructor(credentials: {username: string, password: string});
        public checkCredentials(): Promise<string>;
        public search(type: ("anime"|"manga"), name: string): Promise<AnimeSearchResultsDataModel[]|MangaSearchResultsDataModel[]>;
        public actOnList(action: AccountAction, id: number, name: string, details: ActionDetails): void;
        
    }

    export interface AccountAction {
        support: ("anime"|"manga"),
        action: ("add"|"update"|"delete"),
    }

    export interface ActionDetails {
        episodes: number,
        status: ((1|2|3|4|5|6)|("1"|"2"|"3"|"4"|"5"|"6")),
        score: number,
        times_rewatched: number,
        date_start: string,
        date_finish: string,
        tags: string,
        volumes: number,
        times_reread: number
    }
    export interface AnimeEpisodesDataModel {
        epNumber: number,
        aired: string,
        discussionLink: string,
        title: string,
        japaneseTitle: string
    }
    export interface NewsDataModel {
        title: string,
        link: string,
        image: string,
        text: string,
        newsNumber: number
    }
    export interface SearchOptions {
        maxResults: number;
        has: number;
        term: string;
        type: number;
        status: number;
        score: number;
        producer: number;
        rating: number;
        startDate: {
            day: number,
            month: number,
            year: number
        };
        endDate: {
            day: number,
            month: number,
            year: number
        };
        genreType: number;
        genres: number[];
    }

    export interface SeasonalReleaseDataModel {
        TV: SeasonalAnimeReleaseDataModel[],
        TVNew: SeasonalAnimeReleaseDataModel[],
        TVCon: SeasonalAnimeReleaseDataModel[],
        OVAs: SeasonalAnimeReleaseDataModel[],
        ONAs: SeasonalAnimeReleaseDataModel[],
        Movies: SeasonalAnimeReleaseDataModel[],
        Specials: SeasonalAnimeReleaseDataModel[]
    }

    export interface UserWatchListDataModel {
        stats: UserStatsDataModel;
        lists: (UserAnimeEntryDataModel[]|UserMangaEntryDataModel[])
    }

    export interface UserAnimeEntryDataModel {
        status: number,
        score: number,
        tags: string,
        isRewatching: number,
        numWatchedEpisodes: number,
        animeTitle: string,
        animeNumEpisodes: number,
        animeAiringStatus: string,
        animeId: string,
        animeStudios: string,
        animeLicensors: string,
        animeSeason: string,
        hasEpisodeVideo: boolean,
        hasPromotionVideo: boolean,
        videoUrl: string,
        animeUrl: string,
        animeImagePath: string,
        isAddedToList: boolean,
        animeMediaTypeString: string,
        animeMpaaRatingString: string,
        startDateString: string,
        finishDateString: string,
        animeStartDateString: string,
        animeEndDateString: string,
        daysString: string,
        storageString: string,
        priorityString: string
    }

    export interface UserMangaEntryDataModel {
        /**
         * @deprecated
         */
        myID: string,
        status: string,
        score: string
        tags: string,
        isRereading: string,
        nbReadChapters: string,
        nbReadVolumes: string,
        mangaTitle: string,
        mangaNumChapters: string,
        mangaNumVolumes: string,
        mangaPublishingStatus: string,
        mangaId: string,
        mangaMagazines: string,
        mangaUrl: string,
        mangaImagePath: string,
        isAddedToList: boolean,
        mangaMediaTypeString: string,
        startDateString: string,
        finishDateString: string,
        mangaStartDateString: string,
        mangaEndDate: string,
        daysString: string,
        retailString: string,
        priorityString: string
    }
    export interface UserStatsDataModel {
        TV: string,
        OVA: string,
        Movies: string,
        Spcl: string,
        ONA: string,
        Days: string,
        Eps: string,
        MeanScore: string,
        ScoreDev: string
    }
    export interface SeasonalAnimeReleaseDataModel {
        picture: string,
        synopsis: string,
        licensor: string,
        title: string,
        link: string,
        genres: string[],
        producers: string[],
        fromType: string,
        nbEp: string,
        releaseDate: string,
        score: string
    }
    export interface AnimeDataModel {
        title: string,
        synopsis: string,
        picture: string,
        characters: CharacterDataModel[],
        staff: StaffDataModel[],
        trailer: string,
        englishTitle: string,
        synonyms: string,
        type: ("TV"|"OVA"|"Movie"|"Special"),
        episodes: string,
        status: string,
        aired: string,
        premiered: string,
        broadcast: string,
        producers: string[],
        studios: string[],
        source: string,
        genres: string[],
        duration: string,
        rating: string,
        score: string,
        scoreStats: string,
        ranked: string,
        popularity: string,
        members: string,
        favorites: string,
        id: number,
        url: string
    }

    export interface CharacterDataModel {
        link: string,
        picture: string,
        name: string,
        role: string,
        seiyuu: SeiyuuDataModel
    }

    export interface SeiyuuDataModel {
        link: string,
        picture: string,
        name: string
    }

    export interface StaffDataModel {
        link: string,
        picture: string,
        name: string,
        role: string
    }
    export interface AnimeSearchModel {
        thumbnail: string;
        url: string;
        video: string;
        shortDescription: string;
        title: string;
        type: string;
        nbEps: string;
        score: string;
        startDate: string;
        endDate: string;
        members: string;
        rating: string;
    } 

    export interface AnimeSearchResultsDataModel {
        id: string,
        title: string,
        english: string,
        synonyms: string,
        episodes: string,
        score: string,
        type: string,
        status: string,
        start_date: string,
        end_date: string,
        synopsis: string,
        image: string
    }

    export interface MangaSearchResultsDataModel {
        id: string,
        title: string,
        english: string,
        synonyms: string,
        chapters: string,
        volumes: string,
        score: string,
        types: string,
        status: string,
        start_date: string,
        end_date: string,
        synopsis: string,
        image: string
    }
    export interface SearchResultDataModel {
        id: number,
        type: string,
        name: string,
        url: string,
        image_url: string,
        thumbnail_url: string,
        es_score: number,
        payload: PayloadModel,

    }

    export interface PayloadModel {
        media_type: ("TV"|"Movie"|"OVA"|"Special"),
        start_year:number,
        aired: string,
        score: string,
        status: string
    }
}