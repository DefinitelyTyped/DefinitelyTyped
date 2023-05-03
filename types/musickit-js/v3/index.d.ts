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

type GENERAL_RESOURCE_TYPE = RESOURCE['PersonalRecommendation'] | RESOURCE['Rating'] | RESOURCE['Storefront'];

interface ACTION_TYPE {
    SearchResources: 'searchResources';
    SearchHints: 'searchHints';
    SearchSuggestions: 'searchSuggestions';
    GetAllResources: 'getAllResources';
    GetMultipleResources: 'getMultipleResources';
    GetSingleResource: 'getSingleResource';
    GetPersonalMultipleResources: 'getPersonalMultipleResources';
    GetPersonalSingleResource: 'getPersonalSingleResource';
    GetRecentlyAddedResources: 'getRecentlyAddedResources';
    GetRecentlyPlayedResources: 'getRecentlyPlayedResources';
    GetRecentlyPlayedRTracks: 'getRecentlyPlayedRTracks';
    GetRecentlyPlayedStations: 'getRecentlyPlayedStations';
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
        | 'SearchResources'
        | 'SearchHints'
        | 'SearchSuggestions'];
};
type LibraryAPIParameters = APIBaseParameters & {
    resource: LIBRARY_RESOURCE_TYPE;
    action: ACTION_TYPE['GetAllResources' | 'GetMultipleResources' | 'GetSingleResource' | 'SearchResources'];
};
type PersonalRatingAPIParameters = APIBaseParameters & {
    resource: PERSONAL_RATING_RESOURCE_TYPE;
    action: ACTION_TYPE['GetPersonalSingleResource' | 'GetPersonalMultipleResources'];
};
type GeneralAPIParameters = APIBaseParameters & {
    resource: GENERAL_RESOURCE_TYPE;
    action: ACTION_TYPE['GetAllResources' | 'GetMultipleResources' | 'GetSingleResource'];
};
type GetRecentlyAddedAPIParameters = APIBaseParameters & {
    resource: GENERAL_RESOURCE_TYPE;
    action: ACTION_TYPE['GetRecentlyAddedResources'];
};
type APIParameters = CatalogAPIParameters | LibraryAPIParameters | PersonalRatingAPIParameters | GeneralAPIParameters;

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
type isNeedSearchResourcesPathParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE['SearchResources']
    ? true
    : false;
type isNeedSearchHintsPathParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE['SearchHints']
    ? true
    : false;
type isNeedSearchSuggestionsPathParameter<T extends APIParameters> =
    T['action'] extends ACTION_TYPE['SearchSuggestions'] ? true : false;

type isNeedCatalogResourceTypeConvertedResourcePathParameter<T extends APIParameters> =
    T['resource'] extends LIBRARY_RESOURCE_TYPE
        ? T['action'] extends ACTION_TYPE['GetAllResources' | 'GetMultipleResources' | 'GetSingleResource']
            ? true
            : false
        : false;

type getRelationshipKeys<T extends APIParameters> = keyof Required<T['resource']>['relationships'];
type getViewKeys<T extends APIParameters> = keyof Required<T['resource']>['views'];
type getAttributesKeys<T extends APIParameters> = keyof Required<T['resource']>['attributes'];

type stringLiteral<T> = T extends `${string & T}` ? T : never;
type getPathParameters<T extends APIParameters> = {
    type: isNeedSearchResourcesPathParameter<T> extends false
        ? isNeedSearchHintsPathParameter<T> extends false
            ? isNeedSearchSuggestionsPathParameter<T> extends false
                ? isNeedCatalogResourceTypeConvertedResourcePathParameter<T> extends true
                    ? T['resource']['type'] extends LIBRARY_RESOURCE_TYPE['type']
                        ? `/${libraryResourceTypeToCatalogResourceType<T['resource']['type']>}`
                        : `/${T['resource']['type']}`
                    : `/${T['resource']['type']}`
                : ''
            : ''
        : '';
    id: isNeedIDPathParameter<T> extends true ? `/${T['resource']['id']}` : '';
    relationships: isNeedRelationshipPathParameter<T> extends true ? `/${stringLiteral<getRelationshipKeys<T>>}` : '';
    views: isNeedViewPathParameter<T> extends true ? `/${stringLiteral<getViewKeys<T>>}` : '';
    search: isNeedSearchResourcesPathParameter<T> extends true
        ? `/search`
        : isNeedSearchHintsPathParameter<T> extends true
        ? `/search/hints`
        : isNeedSearchSuggestionsPathParameter<T> extends true
        ? `/search/suggestions`
        : '';
};

type catalogBasePath = `/catalog/{{storefrontId}}`;
type libraryBasePath = `/me/library`;
type personalRatingBasePath = `/me/ratings`;
type generalBasePath = ``;

type libraryResourceTypeToCatalogResourceType<T extends LIBRARY_RESOURCE_TYPE['type']> =
    T extends RESOURCE['LibraryAlbum']['type']
        ? RESOURCE['Album']['type']
        : T extends RESOURCE['LibraryArtist']['type']
        ? RESOURCE['Artist']['type']
        : T extends RESOURCE['LibraryMusicVideo']['type']
        ? RESOURCE['MusicVideo']['type']
        : T extends RESOURCE['LibraryPlaylist']['type']
        ? RESOURCE['Playlist']['type']
        : T extends RESOURCE['LibrarySong']['type']
        ? RESOURCE['Song']['type']
        : T;

type generatePath<T extends APIParameters, Path extends string> = `/${T['version'] extends string
    ? T['version']
    : 'v1'}${Path}${getPathParameters<T>['type']}${getPathParameters<T>['id']}${getPathParameters<T>['relationships']}${getPathParameters<T>['search']}`;

type getPath<T extends APIParameters> = T extends CatalogAPIParameters
    ? `${generatePath<T, catalogBasePath>}`
    : T extends LibraryAPIParameters
    ? `${generatePath<T, libraryBasePath>}`
    : T extends PersonalRatingAPIParameters
    ? `${generatePath<T, personalRatingBasePath>}`
    : T extends GeneralAPIParameters
    ? `${generatePath<T, generalBasePath>}`
    : never;

type test = getPath<{
    action: 'getPersonalSingleResource';
    resource: MusicKit.LibrarySongs;
}>;

type isNeedIDsQueryParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE['GetMultipleResources']
    ? true
    : false;

type isNeedExtendQueryParameter<T extends APIParameters> = T['resource']['attributes'] extends undefined ? false : true;

type isNeedIncludeQueryParameter<T extends APIParameters> = T['resource']['relationships'] extends undefined
    ? false
    : true;

type isNeedViewsQueryParameter<T extends APIParameters> = T extends CatalogAPIParameters
    ? T['action'] extends ACTION_TYPE['GetSingleResource']
        ? true
        : false
    : false;

type isNeedLimitQueryParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE['GetAllResources']
    ? true
    : isNeedRelationshipPathParameter<T> extends true
    ? true
    : isNeedViewPathParameter<T> extends true
    ? true
    : false;

type isNeedOffsetQueryParameter<T extends APIParameters> = T['action'] extends ACTION_TYPE['GetAllResources']
    ? true
    : false;
type isNeedWithQueryParameter<T extends APIParameters> = isNeedViewPathParameter<T>;

type getQueryParameters<T extends APIParameters> = Omit<
    {
        ids: Required<T['resource']['id']>[];
        l?: StorefrontId;
        include?: isNeedIncludeQueryParameter<T> extends true ? getRelationshipKeys<T>[] : never;
        extend?: isNeedExtendQueryParameter<T> extends true ? getAttributesKeys<T>[] : never;
        views?: isNeedViewsQueryParameter<T> extends true ? getViewKeys<T>[] : never;
        limit?: isNeedLimitQueryParameter<T> extends true ? number : never;
        offset?: isNeedOffsetQueryParameter<T> extends true ? number : never;
        with?: isNeedWithQueryParameter<T> extends true ? getAttributesKeys<T>[] : never;
    },
    isNeedIDsQueryParameter<T> extends false ? 'ids' : ''
>;

type test2 = getQueryParameters<{
    action: 'searchSuggestions';
    resource: MusicKit.Songs;
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

type getAPIResponse<T extends APIParameters> = APIResponse & isNeedLimitQueryParameter<T> extends true
    ? {
          data: T['resource'][];
          next?: string;
      }
    : {
          data: T['resource'][];
      };

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
