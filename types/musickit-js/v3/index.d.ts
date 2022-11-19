// Type definitions for musickit-js 3.2244
// Project: https://js-cdn.music.apple.com/musickit/v3/docs/index.html
// Definitions by: Devid Farinelli <https://github.com/misterdev>
//                 8beeeaaat <https://github.com/8beeeaaat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 5.0

/// <reference path="MusicKit.d.ts" />
/// <reference path="MusicKit.API.d.ts" />
/// <reference path="MusicKit.API.Response.d.ts" />
/// <reference path="MusicKit.API.QueryParameters.d.ts" />
/// <reference path="MusicKit.Events.d.ts" />
/// <reference path="MusicKit.MediaItem.d.ts" />
/// <reference path="MusicKit.MKError.d.ts" />
/// <reference path="MusicKit.MusicKitInstance.d.ts" />
/// <reference path="MusicKit.Player.d.ts" />
/// <reference path="MusicKit.Queue.d.ts" />
/// <reference path="MusicKit.Resource.d.ts" />
/// <reference path="MusicKit.SetQueueOptions.d.ts" />

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

type ResourceHref<T> = T extends CATALOG_RESOURCE_TYPE
    ? `/v1/catalog/{{storefrontId}}/${T['type']}/${number | string}`
    : T extends LIBRARY_RESOURCE_TYPE
    ? `/v1/me/library/${T['type']}/${number | string}`
    : T extends MusicKit.Storefronts
    ? `/v1/storefronts/${MusicKit.Storefronts['id']}`
    : T extends MusicKit.Ratings
    ? `/v1/me/ratings/${RESOURCES['type']}/${number | string}`
    : T extends MusicKit.PersonalRecommendations
    ? `/v1/me/recommendations/${string}`
    : never;

/**
 * A protocol for music items that your app can fetch by using a catalog charts request.
 * https://developer.apple.com/documentation/musickit/musiccatalogchartrequestable
 */
type MUSIC_CATALOG_CHART_TYPE = MusicKit.Albums | MusicKit.MusicVideos | MusicKit.Playlists | MusicKit.Songs;

/**
 * An object that represents the results of a catalog search query.
 * https://developer.apple.com/documentation/applemusicapi/searchresponse/results
 */
type CATALOG_RESOURCE_TYPE =
    | MusicKit.Activities
    | MusicKit.Albums
    | MusicKit.AppleCurators
    | MusicKit.Artists
    | MusicKit.Curators
    | MusicKit.Genres
    | MusicKit.MusicVideos
    | MusicKit.Playlists
    | MusicKit.RecordLabels
    | MusicKit.Songs
    | MusicKit.Stations;

type LIBRARY_RESOURCE_TYPE =
    | MusicKit.LibraryAlbums
    | MusicKit.LibraryArtists
    | MusicKit.LibraryMusicVideos
    | MusicKit.LibraryPlaylists
    | MusicKit.LibrarySongs;

type filterUnionByProperty<Union, Property extends string | number | symbol, Condition> = Union extends Record<
    Property,
    Condition
>
    ? Union
    : never;

type PathToResourceInfo<T extends ValidatePath> =
    T extends `/v1/${infer place}/${infer storefrontId}/${infer resourceKey}/${infer resourceId}`
        ? {
              place: place extends 'catalog' ? 'catalog' : 'library';
              storefrontId: storefrontId;
              resourceType: resourceKey extends RESOURCE_TYPES ? RESOURCE_BY_TYPE_PROPERTY[resourceKey] : never;
              id: resourceId;
          }
        : never;

type ValidatePath = `/v1/${ResourcePlace}/${'{{storefrontId}}' | StorefrontId}/${RESOURCE_TYPES}${
    | ''
    | `/${string | number}`}`;

type PathToQueryParameters<path extends ValidatePath> =
    PathToResourceInfo<path>['resourceType'] extends CATALOG_RESOURCE_TYPE
        ? [path, MusicKit.CatalogResourceAPI<PathToResourceInfo<path>['resourceType']>['queryParameters']]
        : PathToResourceInfo<path>['resourceType'] extends LIBRARY_RESOURCE_TYPE
        ? [path, MusicKit.LibraryResourceAPI<PathToResourceInfo<path>['resourceType']>['queryParameters']]
        : never;

type ParamsToResponse<
    path extends ValidatePath,
    queryParameters extends PathToQueryParameters<path> | undefined,
> = PathToResourceInfo<path>['resourceType'] extends CATALOG_RESOURCE_TYPE
    ? [path, queryParameters, MusicKit.CatalogResourceAPI<PathToResourceInfo<path>['resourceType']>['response']]
    : PathToResourceInfo<path>['resourceType'] extends LIBRARY_RESOURCE_TYPE
    ? [path, queryParameters, MusicKit.LibraryResourceAPI<PathToResourceInfo<path>['resourceType']>['response']]
    : never;
type Version = 1;
type ResourcePlace = 'catalog' | 'library';
type Name = 'Taro' | 'Jiro' | 'Hanako';
type Age = 10 | 20;
// type ResourcePaths<T extends RESOURCES> = T extends CATALOG_RESOURCE_TYPE ? `/v${Version}/${ResourcePlace}/${StorefrontId}/${T["type"]}/{id}` :  T extends LIBRARY_RESOURCE_TYPE ? `/v${Version}/${ResourcePlace}/${StorefrontId}/${T["type"]}/{id}` : never  ;

type ResourcePaths = {
    [T in RESOURCES['type']]: {
        [P in ResourcePlace]: `/v${Version}/${P}/{{storefrontId}}/${T}/${number | string}`;
    } & Record<'resource', RESOURCE_BY_TYPE_PROPERTY[T]>;
};

type API_TYPE<T extends RESOURCES> = T extends LIBRARY_RESOURCE_TYPE
    ? MusicKit.LibraryResourceAPI<T> | MusicKit.LibraryResourcesAPI<T> | MusicKit.SearchLibraryAPI<T>
    : T extends CATALOG_RESOURCE_TYPE
    ?
          | MusicKit.SearchSuggestionsAPI<MusicKit.TermSuggestion>
          | MusicKit.SearchSuggestionsAPI<MusicKit.TopResultSuggestion<T>>
          | MusicKit.SearchHintsAPI
          | MusicKit.CatalogResourceAPI<T>
          | MusicKit.CatalogResourcesAPI<T>
          | MusicKit.SearchCatalogAPI<T>
    : T extends MUSIC_CATALOG_CHART_TYPE
    ? MusicKit.ChartAPI<T>
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
