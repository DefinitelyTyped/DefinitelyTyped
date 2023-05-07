// Type definitions for musickit-js 3.2244
// Project: https://js-cdn.music.apple.com/musickit/v3/docs/index.html
// Definitions by: Devid Farinelli <https://github.com/misterdev>
//                 8beeeaaat <https://github.com/8beeeaaat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 5.0

/// <reference path="MusicKit.d.ts" />
/// <reference path="MusicKit.API.d.ts" />
/// <reference path="MusicKit.API.QueryParameters.d.ts" />
/// <reference path="MusicKit.API.CommonObjects.d.ts" />
/// <reference path="MusicKit.Events.d.ts" />
/// <reference path="MusicKit.MediaItem.d.ts" />
/// <reference path="MusicKit.MKError.d.ts" />
/// <reference path="MusicKit.MusicKitInstance.d.ts" />
/// <reference path="MusicKit.Player.d.ts" />
/// <reference path="MusicKit.Queue.d.ts" />
/// <reference path="MusicKit.Resource.d.ts" />
/// <reference path="MusicKit.SetQueueOptions.d.ts" />
/// <reference path="MusicKit.Search.d.ts" />

/**
 * A protocol for music items that your app can fetch by using a catalog charts request.
 * https://developer.apple.com/documentation/musickit/musiccatalogchartrequestable
 */
type MUSIC_CATALOG_CHART_TYPE = MusicKit.Albums | MusicKit.MusicVideos | MusicKit.Playlists | MusicKit.Songs;

/**
 * An object that represents the results of a catalog search query.
 * https://developer.apple.com/documentation/applemusicapi/searchresponse/results
 */

interface RESOURCE {
    Activity: MusicKit.Activities;
    Album: MusicKit.Albums;
    AppleCurator: MusicKit.AppleCurators;
    Artist: MusicKit.Artists;
    Curator: MusicKit.Curators;
    Genre: MusicKit.Genres;
    LibraryAlbum: MusicKit.LibraryAlbums;
    LibraryArtist: MusicKit.LibraryArtists;
    LibraryMusicVideo: MusicKit.LibraryMusicVideos;
    LibraryPlaylist: MusicKit.LibraryPlaylists;
    LibrarySong: MusicKit.LibrarySongs;
    MusicVideo: MusicKit.MusicVideos;
    PersonalRecommendation: MusicKit.PersonalRecommendations;
    Playlist: MusicKit.Playlists;
    Rating: MusicKit.Ratings;
    RecordLabel: MusicKit.RecordLabels;
    Song: MusicKit.Songs;
    Station: MusicKit.Stations;
    Storefront: MusicKit.Storefronts;
}

type RESOURCES = RESOURCE[keyof RESOURCE];
type RESOURCE_TYPES = RESOURCES['type'];
type RESOURCE_BY_TYPE_PROPERTY = {
    [key in RESOURCE_TYPES]: filterUnionByProperty<RESOURCES, 'type', key>;
};

type CATALOG_RESOURCE_TYPE =
    | RESOURCE['Activity']
    | RESOURCE['Album']
    | RESOURCE['AppleCurator']
    | RESOURCE['Artist']
    | RESOURCE['Curator']
    | RESOURCE['Genre']
    | RESOURCE['MusicVideo']
    | RESOURCE['Playlist']
    | RESOURCE['RecordLabel']
    | RESOURCE['Song']
    | RESOURCE['Station'];

type CATALOG_SEARCH_RESOURCE_TYPE =
    | RESOURCE['Activity']
    | RESOURCE['Album']
    | RESOURCE['AppleCurator']
    | RESOURCE['Artist']
    | RESOURCE['Curator']
    | RESOURCE['MusicVideo']
    | RESOURCE['Playlist']
    | RESOURCE['RecordLabel']
    | RESOURCE['Song']
    | RESOURCE['Station'];

type LIBRARY_RESOURCE_TYPE =
    | RESOURCE['LibraryAlbum']
    | RESOURCE['LibraryArtist']
    | RESOURCE['LibraryMusicVideo']
    | RESOURCE['LibraryPlaylist']
    | RESOURCE['LibrarySong'];

type PERSONAL_RATING_RESOURCE_TYPE =
    | RESOURCE['Album']
    | RESOURCE['MusicVideo']
    | RESOURCE['Playlist']
    | RESOURCE['Song']
    | RESOURCE['Station']
    | RESOURCE['LibraryAlbum']
    | RESOURCE['LibraryMusicVideo']
    | RESOURCE['LibraryPlaylist']
    | RESOURCE['LibrarySong'];

type RECOMMENDATIONS_RESOURCE_TYPE = RESOURCE['PersonalRecommendation'];

type GENERAL_RESOURCE_TYPE = RESOURCE['Rating'] | RESOURCE['Storefront'];

interface ACTION_TYPE {
    GetAllResources: 'GetAllResources';
    GetAllSearchSuggestions: 'GetAllSearchSuggestions';
    GetCatalogSearchHints: 'GetCatalogSearchHints';
    GetPersonalHeavyRotationContent: 'GetPersonalHeavyRotationContent';
    GetMultipleResources: 'GetMultipleResources';
    GetPersonalDefaultRecommendations: 'GetPersonalDefaultRecommendations';
    GetPersonalMultipleResources: 'GetPersonalMultipleResources';
    GetPersonalSingleResource: 'GetPersonalSingleResource';
    GetRecentlyAddedResources: 'GetRecentlyAddedResources';
    GetRecentlyPlayedResources: 'GetRecentlyPlayedResources';
    GetRecentlyPlayedRTracks: 'GetRecentlyPlayedRTracks';
    GetRecentlyPlayedStations: 'GetRecentlyPlayedStations';
    GetSingleResource: 'GetSingleResource';
    GetTermsSearchSuggestions: 'GetTermsSearchSuggestions';
    GetTopResultsSearchSuggestions: 'GetTopResultsSearchSuggestions';
    SearchCatalogResources: 'SearchCatalogResources';
}

type ActionType = ACTION_TYPE[keyof ACTION_TYPE];

type APIBaseParameters = {
    action: ActionType;
    useOption?: 'Relationships' | 'Views';
    version?: string;
};
type CatalogAPIParameters = APIBaseParameters & {
    resource: CATALOG_RESOURCE_TYPE;
    action: ACTION_TYPE[
        | 'GetMultipleResources'
        | 'GetSingleResource'
        | 'GetCatalogSearchHints'
        | 'GetTermsSearchSuggestions'
        | 'GetTopResultsSearchSuggestions'
        | 'GetAllSearchSuggestions'];
};
type LibraryAPIParameters = APIBaseParameters & {
    resource: LIBRARY_RESOURCE_TYPE;
    action: ACTION_TYPE['GetAllResources' | 'GetMultipleResources' | 'GetSingleResource'];
};
type PersonalRatingAPIParameters = APIBaseParameters & {
    resource: PERSONAL_RATING_RESOURCE_TYPE;
    action: ACTION_TYPE['GetPersonalSingleResource' | 'GetPersonalMultipleResources'];
};
type GeneralAPIParameters = APIBaseParameters & {
    resource: GENERAL_RESOURCE_TYPE;
    action: ACTION_TYPE['GetAllResources' | 'GetMultipleResources' | 'GetSingleResource'];
};
type GetRecentlyAddedResourcesAPIParameters = APIBaseParameters & {
    resource: never;
    action: ACTION_TYPE['GetRecentlyAddedResources'];
};
type GetRecentlyPlayedResourcesAPIParameters = APIBaseParameters & {
    resource: never;
    action: ACTION_TYPE['GetRecentlyPlayedResources'];
};
type GetTermsSearchSuggestionsAPIParameters = APIBaseParameters & {
    resource: never;
    action: ACTION_TYPE['GetTermsSearchSuggestions'];
};
type GetTopResultsSearchSuggestionsAPIParameters = APIBaseParameters & {
    resource: never;
    action: ACTION_TYPE['GetTopResultsSearchSuggestions'];
};
type GetAllSearchSuggestionsAPIParameters = APIBaseParameters & {
    resource: never;
    action: ACTION_TYPE['GetAllSearchSuggestions'];
};
type GetCatalogSearchHintsAPIParameters = APIBaseParameters & {
    resource: CATALOG_SEARCH_RESOURCE_TYPE;
    action: ACTION_TYPE['GetCatalogSearchHints'];
};
type SearchCatalogResourcesAPIParameters = APIBaseParameters & {
    resource: CATALOG_SEARCH_RESOURCE_TYPE;
    action: ACTION_TYPE['SearchCatalogResources'];
};

type GetPersonalDefaultRecommendationsAPIParameters = APIBaseParameters & {
    resource: RECOMMENDATIONS_RESOURCE_TYPE;
    action: ACTION_TYPE['GetPersonalDefaultRecommendations'];
};

type GetPersonalHeavyRotationContentAPIParameters = APIBaseParameters & {
    resource: never;
    action: ACTION_TYPE['GetPersonalHeavyRotationContent'];
};


type APIParameters =
    | CatalogAPIParameters
    | GeneralAPIParameters
    | GetAllSearchSuggestionsAPIParameters
    | GetCatalogSearchHintsAPIParameters
    | GetPersonalHeavyRotationContentAPIParameters
    | GetPersonalDefaultRecommendationsAPIParameters
    | GetRecentlyAddedResourcesAPIParameters
    | GetRecentlyPlayedResourcesAPIParameters
    | GetTermsSearchSuggestionsAPIParameters
    | GetTopResultsSearchSuggestionsAPIParameters
    | LibraryAPIParameters
    | PersonalRatingAPIParameters
    | SearchCatalogResourcesAPIParameters;

type isNeedIDPathParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE[
    | 'GetSingleResource'
    | 'GetPersonalSingleResource']
    ? true
    : false;
type isNeedRelationshipPathParameter<T extends APIParameters> = isNeedIDPathParameter<T> extends false
    ? false
    : T['useOption'] extends 'Relationships'
    ? T['resource']['relationships'] extends undefined
        ? false
        : true
    : false;
type isNeedViewPathParameter<T extends APIParameters> = isNeedIDPathParameter<T> extends false
    ? false
    : T['useOption'] extends 'Views'
    ? T['resource']['views'] extends undefined
        ? false
        : true
    : false;
type isNeedSearchCatalogResourcesPathParameter<T extends APIParameters> =
    T['action'] extends ACTION_TYPE['SearchCatalogResources'] ? true : false;
type isNeedGetCatalogSearchHintsPathParameter<T extends APIParameters> =
    T['action'] extends ACTION_TYPE['GetCatalogSearchHints'] ? true : false;
type isNeedGetSearchSuggestionsPathParameter<T extends APIParameters> = T['action'] extends
    | ACTION_TYPE['GetTermsSearchSuggestions']
    | ACTION_TYPE['GetTopResultsSearchSuggestions']
    | ACTION_TYPE['GetAllSearchSuggestions']
    ? true
    : false;

type isNeedCatalogResourceTypeConvertedResourcePathParameter<T extends APIParameters> =
    T['resource'] extends LIBRARY_RESOURCE_TYPE
        ? T['action'] extends
              | ACTION_TYPE['GetAllResources']
              | ACTION_TYPE['GetMultipleResources']
              | ACTION_TYPE['GetSingleResource']
            ? true
            : false
        : false;

type getRelationshipKeys<T extends APIParameters> = keyof Required<T['resource']>['relationships'];
type getViewKeys<T extends APIParameters> = keyof Required<T['resource']>['views'];
type getAttributesKeys<T extends APIParameters> = keyof Required<T['resource']>['attributes'];

type stringLiteral<T> = T extends `${string & T}` ? T : never;
type getPathParameters<T extends APIParameters> = {
    type: isNeedSearchCatalogResourcesPathParameter<T> extends false
        ? isNeedGetCatalogSearchHintsPathParameter<T> extends false
            ? isNeedGetSearchSuggestionsPathParameter<T> extends false
                ? isNeedCatalogResourceTypeConvertedResourcePathParameter<T> extends true
                    ? T['resource'] extends LIBRARY_RESOURCE_TYPE
                        ? `/${libraryResourceToCatalogResource<T['resource']>['type']}`
                        : `/${T['resource']['type']}`
                    : T['resource'] extends never
                    ? ''
                    : `/${T['resource']['type']}`
                : ''
            : ''
        : '';
    id: isNeedIDPathParameter<T> extends true ? `/${T['resource']['id']}` : '';
    relationships: isNeedRelationshipPathParameter<T> extends true ? `/${stringLiteral<getRelationshipKeys<T>>}` : '';
    views: isNeedViewPathParameter<T> extends true ? `/${stringLiteral<getViewKeys<T>>}` : '';
    search: isNeedSearchCatalogResourcesPathParameter<T> extends true
        ? `/search`
        : isNeedGetCatalogSearchHintsPathParameter<T> extends true
        ? `/search/hints`
        : isNeedGetSearchSuggestionsPathParameter<T> extends true
        ? `/search/suggestions`
        : '';
    recentlyAdded: T['action'] extends ACTION_TYPE['GetRecentlyAddedResources'] ? `/recently-added${string}` : '';
    recentlyPlayed: T['action'] extends ACTION_TYPE['GetRecentlyPlayedResources'] ? `/played${string}` : '';
};

type catalogBasePath = `/catalog/{{storefrontId}}`;
type catalogSearchBasePath = `/catalog/{{storefrontId}}`;
type libraryBasePath = `/me/library`;
type recentBasePath = `/me/recent`;
type personalRatingBasePath = `/me/ratings`;
type personalRecommendationsBasePath = `/me/recommendations`;
type personalHeavyRotationContentBasePath = `/me/history/heavy-rotation`;
type generalBasePath = ``;

type libraryResourceToCatalogResource<T extends LIBRARY_RESOURCE_TYPE> = T extends RESOURCE['LibraryAlbum']
    ? RESOURCE['Album']
    : T extends RESOURCE['LibraryArtist']
    ? RESOURCE['Artist']
    : T extends RESOURCE['LibraryMusicVideo']
    ? RESOURCE['MusicVideo']
    : T extends RESOURCE['LibraryPlaylist']
    ? RESOURCE['Playlist']
    : T extends RESOURCE['LibrarySong']
    ? RESOURCE['Song']
    : T;

type generatePath<T extends APIParameters, Path extends string> = `/${T['version'] extends string
    ? T['version']
    : 'v1'}${Path}${getPathParameters<T>['type']}${getPathParameters<T>['id']}${getPathParameters<T>['relationships']}${getPathParameters<T>['views']}${getPathParameters<T>['search']}${getPathParameters<T>['recentlyAdded']}${getPathParameters<T>['recentlyPlayed']}`;

type getPath<T extends APIParameters> = T extends CatalogAPIParameters
    ? `${generatePath<T, catalogBasePath>}`
    : T extends LibraryAPIParameters
    ? `${generatePath<T, libraryBasePath>}`
    : T extends PersonalRatingAPIParameters
    ? `${generatePath<T, personalRatingBasePath>}`
    : T extends GeneralAPIParameters
    ? `${generatePath<T, generalBasePath>}`
    : T extends SearchCatalogResourcesAPIParameters
    ? `${generatePath<T, catalogSearchBasePath>}`
    : T extends GetRecentlyAddedResourcesAPIParameters
    ? `${generatePath<T, libraryBasePath>}`
    : T extends GetRecentlyPlayedResourcesAPIParameters
    ? `${generatePath<T, recentBasePath>}`
    : T extends GetPersonalDefaultRecommendationsAPIParameters
    ? `${generatePath<T, personalRecommendationsBasePath>}`
    : T extends GetPersonalHeavyRotationContentAPIParameters
    ? `${generatePath<T, personalHeavyRotationContentBasePath>}`
    : never;

type test = getQueryParameters<{
    action: "GetPersonalHeavyRotationContent";
    resource: never;
}>;

type isNeedIDsQueryParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE['GetMultipleResources']
    ? true
    : false;

type isNeedExtendQueryParameter<T extends APIParameters> =
    T extends ACTION_TYPE["GetPersonalDefaultRecommendations"]
    | ACTION_TYPE["GetPersonalHeavyRotationContent"]
    ? true
    : T['resource']['attributes'] extends undefined ? false : true;

type isNeedIncludeQueryParameter<T extends APIParameters> =
    T extends ACTION_TYPE["GetPersonalDefaultRecommendations"]
    | ACTION_TYPE["GetPersonalHeavyRotationContent"]
    ? true
    : T['resource']['relationships'] extends undefined ? false : true;

type isNeedViewsQueryParameter<T extends APIParameters> = T extends CatalogAPIParameters
    ? T['action'] extends ACTION_TYPE['GetSingleResource']
        ? true
        : false
    : false;

type isNeedLimitQueryParameter<T extends APIParameters> = T['action'] extends
    ACTION_TYPE['GetAllResources']
    | ACTION_TYPE["GetPersonalDefaultRecommendations"]
    | ACTION_TYPE["GetPersonalHeavyRotationContent"]
    ? true
    :
    | isNeedRelationshipPathParameter<T>
    | isNeedViewPathParameter<T>
    | isNeedSearchCatalogResourcesPathParameter<T>
    | isNeedGetCatalogSearchHintsPathParameter<T>;

type isNeedOffsetQueryParameter<T extends APIParameters> = T['action'] extends
    ACTION_TYPE['GetAllResources']
    | ACTION_TYPE["GetPersonalDefaultRecommendations"]
    | ACTION_TYPE["GetPersonalHeavyRotationContent"]
    ? true
    : isNeedSearchCatalogResourcesPathParameter<T>;

type isNeedWithQueryParameter<T extends APIParameters> =
    | isNeedViewPathParameter<T>
    | isNeedSearchCatalogResourcesPathParameter<T>;

type isNeedTermQueryParameter<T extends APIParameters> = T['action'] extends
    | ACTION_TYPE['SearchCatalogResources']
    | ACTION_TYPE['GetCatalogSearchHints']
    | ACTION_TYPE['GetTermsSearchSuggestions']
    | ACTION_TYPE['GetTopResultsSearchSuggestions']
    | ACTION_TYPE['GetAllSearchSuggestions']
    ? true
    : false;

type isNeedKindsQueryParameter<T extends APIParameters> = T['action'] extends
    | ACTION_TYPE['GetTermsSearchSuggestions']
    | ACTION_TYPE['GetTopResultsSearchSuggestions']
    | ACTION_TYPE['GetAllSearchSuggestions']
    ? true
    : false;

type isNeedTypesQueryParameter<T extends APIParameters> = T['action'] extends
    | ACTION_TYPE['SearchCatalogResources']
    | ACTION_TYPE['GetTopResultsSearchSuggestions']
    | ACTION_TYPE['GetAllSearchSuggestions']
    ? true
    : false;

type getQueryParameters<T extends APIParameters> = Omit<
    Omit<
        Omit<
            {
                ids: Required<T['resource']['id']>[];
                term: `${string}+${string}` | string;
                kinds: T['action'] extends ACTION_TYPE['GetTermsSearchSuggestions']
                    ? ['terms']
                    : T['action'] extends ACTION_TYPE['GetTopResultsSearchSuggestions']
                    ? ['topResults']
                    : T['action'] extends ACTION_TYPE['GetAllSearchSuggestions']
                    ? ['terms', 'topResults']
                    : never;
                l?: StorefrontId;
                include?: isNeedIncludeQueryParameter<T> extends true ? getRelationshipKeys<T>[] : never;
                extend?: isNeedExtendQueryParameter<T> extends true ? getAttributesKeys<T>[] : never;
                views?: isNeedViewsQueryParameter<T> extends true ? getViewKeys<T>[] : never;
                limit?: isNeedLimitQueryParameter<T> extends true ? number : never;
                offset?: isNeedOffsetQueryParameter<T> extends true ? number : never;
                with?: isNeedWithQueryParameter<T> extends true ? getAttributesKeys<T>[] : never;
                types?: isNeedTypesQueryParameter<T> extends true ? CATALOG_SEARCH_RESOURCE_TYPE['type'][] : never;
            },
            isNeedIDsQueryParameter<T> extends false ? 'ids' : never
        >,
        isNeedTermQueryParameter<T> extends false ? 'term' : never
    >,
    isNeedKindsQueryParameter<T> extends false ? 'kinds' : never
>;

type test2 = getQueryParameters<{
    action: "GetPersonalDefaultRecommendations";
    resource: MusicKit.PersonalRecommendations;
}>;

/**
 * https://developer.apple.com/documentation/applemusicapi/search
 */
interface APIResponse {
    request: {
        baseUrl: string;
        fetchOptions: {
            headers: HeadersInit;
        };
        path: string;
        queryParameters: APIParameters;
        urlParameters: Record<string, any>;
        url: string;
    };
    response: Response;
}

type getAPIResponse<T extends APIParameters> = APIResponse & T extends SearchCatalogResourcesAPIParameters
    ? T['action'] extends ACTION_TYPE['SearchCatalogResources']
        ? T['resource'] extends CATALOG_SEARCH_RESOURCE_TYPE
            ? MusicKit.SearchResourcesResopnese<T['resource']>
            : never
        : never
    : T['action'] extends ACTION_TYPE['GetTermsSearchSuggestions']
    ? MusicKit.SearchTermsSuggestionsResopnese
    : T['action'] extends ACTION_TYPE['GetTopResultsSearchSuggestions']
    ? MusicKit.SearchTopResultsSuggestionsResopnese
    : T['action'] extends ACTION_TYPE['GetAllSearchSuggestions']
    ? MusicKit.SearchAllSuggestionsResopnese
    : T['action'] extends ACTION_TYPE['GetCatalogSearchHints']
    ? MusicKit.SearchHintsResopnese
    : T['action'] extends ACTION_TYPE['GetRecentlyAddedResources']
    ? MusicKit.RecentlyAddedResourcesResponse
    : T['action'] extends ACTION_TYPE['GetRecentlyPlayedResources']
    ? MusicKit.RecentlyPlayedResourcesResponse
    : T['action'] extends ACTION_TYPE["GetPersonalDefaultRecommendations"]
    ? MusicKit.PersonalDefaultRecommendationsResponse
    : T['action'] extends ACTION_TYPE["GetPersonalHeavyRotationContent"]
    ? MusicKit.PersonalHeavyRotationContentResponse
    : isNeedLimitQueryParameter<T> extends true
    ? {
          data: T['resource'][];
          next?: string;
      }
    : isNeedRelationshipPathParameter<T> extends true
    ? T['resource'] extends LIBRARY_RESOURCE_TYPE
        ? MusicKit.RelationshipResponse<libraryResourceToCatalogResource<T['resource']>>
        : MusicKit.RelationshipResponse<T['resource']>
    : {
          data: T['resource'][];
      };

type test3 = getAPIResponse<{
    action: "GetPersonalDefaultRecommendations";
    resource: never;
}>;

type filterUnionByProperty<Union, Property extends string, Condition> = Union extends Record<Property, Condition>
    ? Union
    : never;

type StorefrontId =
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'ao'
    | 'aq'
    | 'ar'
    | 'as'
    | 'at'
    | 'au'
    | 'aw'
    | 'ax'
    | 'az'
    | 'ba'
    | 'bb'
    | 'bd'
    | 'be'
    | 'bf'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bj'
    | 'bl'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'bq'
    | 'br'
    | 'bs'
    | 'bt'
    | 'bv'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cc'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'ck'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cu'
    | 'cv'
    | 'cw'
    | 'cx'
    | 'cy'
    | 'cz'
    | 'de'
    | 'dj'
    | 'dk'
    | 'dm'
    | 'do'
    | 'dz'
    | 'ec'
    | 'ee'
    | 'eg'
    | 'eh'
    | 'er'
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fk'
    | 'fm'
    | 'fo'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gg'
    | 'gh'
    | 'gi'
    | 'gl'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gs'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hm'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'im'
    | 'in'
    | 'io'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'je'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'ki'
    | 'km'
    | 'kn'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
    | 'li'
    | 'lk'
    | 'lr'
    | 'ls'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'ly'
    | 'ma'
    | 'mc'
    | 'md'
    | 'me'
    | 'mf'
    | 'mg'
    | 'mh'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mp'
    | 'mq'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'mu'
    | 'mv'
    | 'mw'
    | 'mx'
    | 'my'
    | 'mz'
    | 'na'
    | 'nc'
    | 'ne'
    | 'nf'
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nr'
    | 'nu'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pm'
    | 'pn'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'pw'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sb'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'sh'
    | 'si'
    | 'sj'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'ss'
    | 'st'
    | 'sv'
    | 'sx'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tf'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tk'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'to'
    | 'tr'
    | 'tt'
    | 'tv'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'um'
    | 'us'
    | 'uy'
    | 'uz'
    | 'va'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'vu'
    | 'wf'
    | 'ws'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';

type ISO639 =
    | 'af'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'be'
    | 'bg'
    | 'ca'
    | 'cs'
    | 'cy'
    | 'da'
    | 'de'
    | 'de-AT'
    | 'de-CH'
    | 'de-LI'
    | 'de-LU'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-BZ'
    | 'en-CA'
    | 'en-GB'
    | 'en-IE'
    | 'en-JM'
    | 'en-NZ'
    | 'en-TT'
    | 'en-US'
    | 'en-ZA'
    | 'es'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-DO'
    | 'es-EC'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-UY'
    | 'es-VE'
    | 'et'
    | 'eu'
    | 'fa'
    | 'fi'
    | 'fo'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-LU'
    | 'ga'
    | 'gd'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'is'
    | 'it'
    | 'it-CH'
    | 'ja'
    | 'ji'
    | 'ko'
    | 'ko'
    | 'ku'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'ms'
    | 'mt'
    | 'nb'
    | 'nl'
    | 'nl-BE'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'rm'
    | 'ro'
    | 'ro-MD'
    | 'ru'
    | 'ru-MD'
    | 'sb'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sv-FI'
    | 'th'
    | 'tn'
    | 'tr'
    | 'ts'
    | 'ua'
    | 'ur'
    | 've'
    | 'vi'
    | 'xh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu';
