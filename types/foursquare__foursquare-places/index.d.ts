// Type definitions for @foursquare/foursquare-places 1.0
// Project: https://github.com/foursquare/foursquare-places#readme
// Definitions by: Jack Dwyer <https://github.com/dwyfrequency>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Response = Promise<any>;

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];

interface VenuesParamsBase {
    ll?: string;
    near?: string;
    llAcc?: number;
    alt?: number;
    altAcc?: number;
    radius?: number;
    query?: string;
    categoryId?: string;
    limit?: number;
}

interface VenuesRecAndExploreFilters {
    offset?: number;
    openNow?: boolean;
    sortByDistance?: boolean;
}

interface VenuesExploreBaseParams extends VenuesParamsBase, VenuesRecAndExploreFilters {
    section?:
        | 'food'
        | 'drinks'
        | 'coffee'
        | 'shops'
        | 'arts'
        | 'outdoors'
        | 'sights'
        | 'trending'
        | 'nextVenues'
        | 'topPicks';
    novelty?: 'new' | 'old';
    friendVisits?: 'visited' | 'notvisited';
    time?: 'any';
    day?: 'any';
    lastVenue?: string;
    sortByPopularity?: boolean;
    price?: number;
    saved?: boolean;
}

type VenuesExploreParams = RequireOnlyOne<VenuesExploreBaseParams, 'll' | 'near'>;

interface VenuesRecommendationsBaseParams extends VenuesParamsBase, VenuesRecAndExploreFilters {
    intent?:
        | 'food'
        | 'breakfast'
        | 'brunch'
        | 'lunch'
        | 'coffee'
        | 'dinner'
        | 'dessert'
        | 'drinks'
        | 'shopping'
        | 'fun'
        | 'sights';
    prices?: string;
    categories?: string;
    features?: string;
    personalization?: 0 | 1 | 2 | 3 | 5;
    localDay?: number;
    localTime?: string;
}

type VenuesRecommendationsParams = RequireOnlyOne<VenuesRecommendationsBaseParams, 'll' | 'near'>;

interface VenuesSearchBaseParams extends VenuesParamsBase {
    intent?: 'checkin' | 'global' | 'browse' | 'match';
    url?: 'string';
    providerId: 'string';
    linkedId: 'string';
}

type VenuesSearchParams = RequireOnlyOne<VenuesSearchBaseParams, 'll' | 'near'>;

interface VenuesTrendingBaseParams {
    ll?: string;
    near?: string;
    limit?: number;
    radios?: number;
}

type VenuesTrendingParams = RequireOnlyOne<VenuesTrendingBaseParams, 'll' | 'near'>;

interface VenuesSuggestCompletionBaseParams {
    ll?: string;
    near?: string;
    llAcc?: number;
    alt?: number;
    altAcc?: number;
    query: string;
    limit?: number;
    radius?: number;
    sw?: string;
    ne?: string;
}

type VenuesSuggestCompletionParams = RequireOnlyOne<VenuesSuggestCompletionBaseParams, 'll' | 'near'>;

interface VenueId {
    venue_id: string;
}

interface Venues {
    categories(): Response;
    explore(params: VenuesExploreParams): Response;
    recommendations(params: VenuesRecommendationsParams): Response;
    trending(params: VenuesTrendingParams): Response;
    getVenues(params: VenuesSearchParams): Response;
    getVenue(venueId: VenueId): Response;
    getVenuePhotos(venueId: VenueId): Response;
    getVenueTips(venueId: VenueId): Response;
    suggestCompletion(params: VenuesSuggestCompletionParams): Response;
    getVenueHours(venueId: VenueId): Response;
    getVenueMenu(venueId: VenueId): Response;
    getVenueLinks(venueId: VenueId): Response;
    getSimilarVenues(venueId: VenueId): Response;
    getNextVenues(venueId: VenueId): Response;
    getListVenueIsOn(venueId: VenueId): Response;
}

type PhotoId = string;
interface Photos {
    getPhoto(photoId: PhotoId): Response;
}

type TipId = string;
interface Tips {
    getTip(tipId: TipId): Response;
}

type ListId = string;
interface Lists {
    getList(listId: ListId): Response;
}

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Foursquare;

declare class Foursquare {
    constructor(client_id: string, client_secret: string, version?: string, apiUrl?: string, locale?: string);

    venues: Venues;
    photos: Photos;
    tips: Tips;
    lists: Lists;
}
