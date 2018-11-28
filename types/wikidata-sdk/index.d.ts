// Type definitions for wikidata-sdk 5.15
// Project: https://github.com/maxlath/wikidata-sdk
// Definitions by: Kamontat Chantrachirathumrong <https://github.com/kamontat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { WikidataLanguage } from "./def/type/language";
import { WikidataProperty } from "./def/type/property";
import { WikidataSite } from "./def/type/site";
import { WikidataSiteLink, WikidataSiteLinkSimplify, WikidataSiteLinkWithUrlSimplify } from "./def/object/sitelink";
import { UrlResultFormat } from "./def/type/format";
import {
    WikidataLanguageBaseString,
    WikidataLanguageBaseStringSimplify,
    WikidataLanguageBaseArrayString,
    WikidataLanguageBaseArrayStringSimplify
} from "./def/object/language-base-string";

import { WikidataClaim, WikidataMainSnak, WikidataTimeDataValue, WikidataEntityDataValue } from "./def/object/claim";

// ----------------------------------- //
// Export session                      //
// ----------------------------------- //

export { WikidataLanguage, WikidataProperty, WikidataSite };

export {
    WikidataLanguageBaseString,
    WikidataLanguageBaseStringSimplify,
    WikidataLanguageBaseArrayString,
    WikidataLanguageBaseArrayStringSimplify,
    WikidataSiteLink,
    WikidataSiteLinkSimplify,
    WikidataSiteLinkWithUrlSimplify
};

export { UrlResultFormat };

export { WikidataClaim, WikidataMainSnak, WikidataTimeDataValue, WikidataEntityDataValue };

export interface Json {
    [key: string]: any;
}

export as namespace sdk;

/* **********
 * Search   *
 ********** */

/**
 * Searches for entities using labels and aliases.
 * @param search search query
 * @param language language of search query (default=en)
 * @param limit limited the result array (default=20)
 * @param format format of the result (default=json)
 * @param uselang the language in which the search results are returned (default=lang)
 *
 * @return The URL of the searching query
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/search_entities.md#search-entities | Github[search-entities] }
 * @see {@link https://www.wikidata.org/w/api.php?action=help&modules=wbsearchentities | Wikidata[wbsearchentities] }
 */
export function searchEntities(
    search: string,
    language?: WikidataLanguage,
    limit?: string | number,
    format?: UrlResultFormat,
    uselang?: WikidataLanguage
): string;

/**
 * @alias searchEntities
 */
export function searchEntities(opt: {
    search: string;
    language?: WikidataLanguage;
    limit?: string | number;
    format?: UrlResultFormat;
    uselang?: WikidataLanguage;
}): string;

/* **********
 * Getter   *
 ********** */

/**
 *
 * @param ids The IDs of the entities to get the data from. (limit 50 ids only)
 * @param languages language of the result (default=all)
 * @param props wikidata entities' properties (default=all)
 * @param format format of the result (default=json)
 *
 * @return The URL of getting query
 *
 * @throws {@link Error} if id is not specify or id length longer that 50
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/get_entities.md#by-ids | Github[get_entities.md#by-ids] }
 * @see {@link https://www.wikidata.org/w/api.php?action=help&modules=wbgetentities | Wikidata[wbgetentities] }
 */
export function getEntities(
    ids: string | string[],
    languages?: WikidataLanguage | WikidataLanguage[],
    props?: WikidataProperty | WikidataProperty[],
    format?: UrlResultFormat
): string;

/**
 * @alias getEntities
 */
export function getEntities(a: {
    ids: string | string[];
    languages?: WikidataLanguage | WikidataLanguage[];
    props?: WikidataProperty | WikidataProperty[];
    format?: UrlResultFormat;
}): string;

/**
 * @alias getEntities
 *
 * Without id limitation and return the array of url instead.
 */
export function getManyEntities(
    ids: string | string[],
    languages?: WikidataLanguage | WikidataLanguage[],
    props?: WikidataProperty | WikidataProperty[],
    format?: UrlResultFormat
): string[];

/**
 * @alias getManyEntities
 */
export function getManyEntities(a: {
    ids: string | string[];
    languages?: WikidataLanguage | WikidataLanguage[];
    props?: WikidataProperty | WikidataProperty[];
    format?: UrlResultFormat;
}): string[];

/**
 * This can be very useful when you work with a list of Wikipedia articles in a given language and would like to move to Wikidata
 *
 * @param titles The title of the corresponding page
 * @param sites Identifier for the site on which the corresponding page resides (default=english wiki)
 * @param languages language of the result (default=all)
 * @param props wikidata entities' properties (default=all)
 * @param format format of the result (default=json)
 *
 * @return URL of the request
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/get_entities.md#by-wikipedia-titles | Github[get_entities.md#by-wikipedia-titles] }
 */
export function getWikidataIdsFromWikipediaTitles(
    titles: string | string[],
    sites?: WikidataSite,
    languages?: WikidataLanguage | WikidataLanguage[],
    props?: WikidataProperty | WikidataProperty[],
    format?: UrlResultFormat
): string;

/**
 * @alias getWikidataIdsFromWikipediaTitles
 */
export function getWikidataIdsFromWikipediaTitles(a: {
    titles: string | string[];
    sites?: WikidataSite;
    languages?: WikidataLanguage | WikidataLanguage[];
    props?: WikidataProperty | WikidataProperty[];
    format?: UrlResultFormat;
}): string;

/**
 * This will use `SPARQL queries` to get relations the other way around, answering the question "what are the entities having this value for this property?".
 *
 * @param property the property
 * @param value value (e.g. entity, ISBN-13)
 * @param options option of the query
 * @param options.limit limit of the result (default=no limit)
 * @param options.keepProperties If you want to get not only items but also properties (default=false)
 * @param options.caseInsensitive Make the value case insensitive, use only when needed as it makes the query less perfomante (default=false)
 * @return URL of the request
 *
 * @example
 * getReverseClaims('P50', 'Q7243'); // find all the entities that have Leo Tolstoy (Q7243) for author (P50)
 *
 * @see
 * {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/get_entities_reverse_claims.md#get-entities-reverse-claims | Github[get-entities-reverse-claims] }
 */
export function getReverseClaims(
    property: string | string[],
    value: string | string[],
    options?: {
        limit?: number;
        keepProperties?: boolean;
        caseInsensitive?: boolean;
    }
): string;

/**
 * To get JSON results from a SPARQL query you can make HTTP request with SPARQL query. Which this method will generate the url to query for you.
 *
 * @param a SPARQL query
 * @return URL of HTTP request
 */
export function sparqlQuery(a: string): string;

/* **********
 * Legacy   *
 ********** */

/**
 * @deprecated
 */
export function getWikidataIdsFromSitelinks(): void;

/* **********
 * Helper   *
 ********** */

/**
 * Check is input is *item id* or not (a.k.a. `Q` ids)
 * @param a input string
 */
export function isItemId(a: string): boolean;

/**
 * Check is input is *property id* or not (a.k.a. `P` ids)
 * @param a input string
 */
export function isPropertyId(a: string): boolean;

/**
 * Check is input is *item id* or *property id* or not (Accepts both P and Q ids)
 * @param a input string
 */
export function isEntityId(a: string): boolean;

export function isNumericId(a: string): boolean;

export function isGuid(a: string): boolean;

/**
 * check is it a site link key
 * @param a site link key
 */
export function isSitelinkKey(a: string): boolean;

/**
 * Filter-out non-truthy claims from an `entity.claims` object
 *
 * @param claims claims object of the entity
 *
 * @see {@link https://www.mediawiki.org/wiki/Wikibase/Indexing/RDF_Dump_Format#Truthy_statements | Truthy}
 */
export function truthyClaims(claims: WikidataClaim): WikidataClaim;

/**
 * Filter-out non-truthy claims from an entity.claims[prop] array
 *
 * @param claims claims array of the entity
 *
 * @see {@link https://www.mediawiki.org/wiki/Wikibase/Indexing/RDF_Dump_Format#Truthy_statements | Truthy}
 */
export function truthyPropertyClaims(claims: WikidataClaim[]): WikidataClaim[];

/**
 * This will get the link that represent the site of the title.
 *
 * @param site sitelink (can be on any language)
 * @param title the title of the link
 * @returns URL link of the site
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/general_helpers.md#getsitelinkurl | Github[getsitelinkurl] }
 */
export function getSitelinkUrl(site: WikidataSite, title: string): string;

/**
 * @alias getSitelinkUrl
 */
export function getSitelinkUrl(a: { site: WikidataSite; title: string }): string;

export interface SitelinkData {
    lang: string;
    project: string;
}
/**
 * Get the sitelink on english language and the lang of it.
 *
 * @param a sitelink in difference language
 * @returns Sitelink data contain lang and project parameter
 */
export function getSitelinkData(a: string): SitelinkData;

/**
 * Return the id or throw error if input is not EntityId.
 *
 * @param a input string
 * @returns return only the id of input
 *
 * @throws {@link Error}
 */
export function getNumericId(a: string): boolean;

/**
 * This will convert wikidata time to ISO string and it should also work for dates far in the past or the future.
 *
 * @param a input string (format: +YYYY-MM-DDThh:mm:ssZ)
 * @return ISO date string
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/general_helpers.md#wikidatatimetoisostring | Github[wikidatatimetoisostring] }
 */
export function wikidataTimeToISOString(a: string): string;

/**
 * This will convert wikidata time to Epoch Time and it should also work for dates far in the past or the future.
 *
 * @param a input string (format: +YYYY-MM-DDThh:mm:ssZ)
 * @return Epoch Time
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/general_helpers.md#wikidatatimetoepochtime | Github[wikidatatimetoepochtime] }
 */
export function wikidataTimeToEpochTime(a: string): string;

/**
 * This will convert wikidata time to date object.
 *
 * @param a input string (format: +YYYY-MM-DDThh:mm:ssZ)
 * @return Date Object
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/general_helpers.md#wikidatatimetodateobject | Github[wikidatatimetodateobject] }
 */
export function wikidataTimeToDateObject(a: string): Date;

/**
 * Passing only the time string: the result misses the month precision
 * and thus wrongly returns the day set to '01'.
 *
 * Otherwise, Passing the whole value object: the result will calulate with precision key.
 *
 *
 * @param a input claims datavalue
 * @returns dates on the format 'yyyy-mm-dd', 'yyyy-mm', 'yyyy' depending on the date precision.
 *
 * @see {@link https://github.com/maxlath/wikidata-sdk/blob/6b0673b9bf0fcaab19db65e2cc77e33c901ef35d/docs/general_helpers.md#wikidatatimetosimpleday | Github[wikidatatimetosimpleday] }
 *
 */
export function wikidataTimeToSimpleDay(a: string | Json): string;

/**
 * Get an image URL from a Wikimedia Commons filename
 *
 * @param a input image name (include extension as well)
 * @param width width of the image
 *
 * @returns URL from a wikimedia commons filename
 */
export function getImageUrl(a: string, width?: number): string;

export interface SimplifyOption {
    // claims
    entityPrefix?: string;
    propertyPrefix?: string;
    keepRichValues?: boolean;
    keepQualifiers?: boolean;
    keepReferences?: boolean;
    keepIds?: boolean;
    keepHashes?: boolean;
    keepNonTruthy?: boolean;
    // sitelinks
    addUrl?: boolean;
}

/**
 * Helper method, for simplify result object more reasonable
 */
export namespace simplify {
    /**
     * Applying all simplifiers at once: labels, descriptions, aliases, claims, sitelinks. See next sections for details.
     * You can also pass options as a second argument, that will then be passed the subfunctions:
     *
     * @param entity the entity that receive from {@link getEntities} APIs
     * @param opt simlify option. currently only simplify claims and simplify sitelinks.
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#simplify-entity | Github[simplify-entity]}
     */
    function entity<T>(entity: T, opt?: SimplifyOption): T;

    /**
     * This is a same of {@link entity} method except this input as multiple array of entities.
     *
     * @param entities entities from {@link getEntities} APIs
     * @param opt simlify option. currently only simplify claims and simplify sitelinks.
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#simplify-entities | Github[simplify-entities]}
     */
    function entities<T>(entities: T[], opt?: SimplifyOption): T[];

    /**
     * Make label simplifier and easier to understand
     *
     * @param labels label object, you will receive this from getEntities method
     *
     * @example
     *
     * const label = simplify.labels("{ pl: { language: 'pl', value: 'książka' } }");
     * console.log(label) // { pl: 'książka' }
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#simplify-labels | Github[simplify-labels]}
     */
    function labels(labels: WikidataLanguageBaseString): WikidataLanguageBaseStringSimplify;

    /**
     * Make description simplifier and easier to understand
     *
     * @param descriptions description object, you will receive this from getEntities method
     *
     * @example
     *
     * const desc = simplify.descriptions("{ pl: { language: 'pl', value: 'dokument piśmienniczy [...]' } }");
     * console.log(desc) // { pl: 'dokument piśmienniczy [...]' }
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#simplify-descriptions | Github[simplify-descriptions]}
     */
    function descriptions(descriptions: WikidataLanguageBaseString): WikidataLanguageBaseStringSimplify;

    /**
     * Make alias simplifier and easier to understand
     *
     * @param aliases alias object, you will receive this from getEntities method
     *
     * @example
     *
     * const alias = simplify.aliases("{ pl: [ { language: 'pl', value: 'Tom' }, { language: 'pl', value: 'Tomik' } ] }");
     * console.log(alias) // { pl: [ 'Tom', 'Tomik' ] }
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#simplify-aliases | Github[simplify-aliases]}
     */
    function aliases(aliases: WikidataLanguageBaseArrayString): WikidataLanguageBaseArrayStringSimplify;

    /**
     * Make sitelink simplifier and easier to understand
     *
     * @param sitelinks sitelink object, you will receive this from getEntities method
     *
     * @example
     *
     * const site = simplify.sitelinks("{ plwiki: { site: 'plwiki', title: 'Książka', badges: [] } }");
     * console.log(site) // { plwiki: 'Książka' }
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#simplify-sitelinks | Github[simplify-sitelinks]}
     */
    function sitelinks(sitelinks: WikidataSiteLink): WikidataSiteLinkSimplify;

    /**
     * Make sitelink simplifier and easier to understand. include URL in the result.
     *
     * @param sitelinks sitelink object, you will receive this from getEntities method
     * @param options add url to a result
     *
     * @example
     *
     * const site = simplify.sitelinks("{ plwiki: { site: 'plwiki', title: 'Książka', badges: [] } }", {addUrl: true});
     * console.log(site) // { plwiki: { title: 'Książka', url: 'https://pl.wikipedia.org/wiki/Książka' } }
     *
     * @see {@link https://github.com/maxlath/wikidata-sdk/blob/master/docs/simplify_entities_data.md#add-sitelinks-urls | Github[simplify-sitelinks-with-url]}
     */
    function sitelinks(sitelinks: WikidataSiteLink, options: { addUrl: true }): WikidataSiteLinkWithUrlSimplify;
}
