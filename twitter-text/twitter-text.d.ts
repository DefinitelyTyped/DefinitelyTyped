// Type definitions for twitter-text v1.13.4
// Project: https://github.com/twitter/twitter-text
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface HashtagWithIndices {
    hashtag: string;
    indices: [number, number];
}
export interface UrlWithIndices {
    url: string;
    indices: [number, number];
}
export interface MentionWithIndices {
    screenName: string;
    indices: [number, number];
}
export interface MentionOrListWithIndices {
    screenName: string;
    listSlug: string;
    indices: [number, number];
}
export interface CashtagWithIndices {
    cashtag: string;
    indices: [number, number];
}
export type EntityWithIndices =
    HashtagWithIndices |
    UrlWithIndices |
    MentionWithIndices |
    MentionOrListWithIndices |
    CashtagWithIndices;

interface Indices {
    indices: [number, number];
}

declare export function htmlEscape(text: string): string;
declare export function splitTags(text: string): string[];

declare export function extractHashtags(text: string): string[];
declare export function extractHashtagsWithIndices(text: string): HashtagWithIndices[];
declare export function extractUrls(text: string): string[];
declare export function extractUrlsWithIndices(text: string): UrlWithIndices[];
declare export function extractMentions(text: string): string[];
declare export function extractMentionsWithIndices(text: string): MentionWithIndices[];
declare export function extractMentionsOrListsWithIndices(text: string): MentionOrListWithIndices[];
declare export function extractReplies(text: string): string[];
declare export function extractCashtags(text: string): string[];
declare export function extractCashtagsWithIndices(text: string): CashtagWithIndices[];
declare export function extractEntitiesWithIndices(text: string): EntityWithIndices[];

declare export function modifyIndicesFromUnicodeToUTF16<I>(i: I): I;
declare export function modifyIndicesFromUTF16ToUnicode<I>(i: I): I;

export interface UrlEntity {
    url: string;
    display_url: string;
    expanded_url: string;
    indices: [number, number];
}
export interface AutoLinkOptions {
    hashtagClass?: string;
    hashtagUrlBase?: string;
    cashtagClass?: string;
    cashtagUrlBase?: string;
    listClass?: string;
    usernameClass?: string;
    usernameUrlBase?: string;
    listUrlBase?: string;
    htmlAttrs?: string;
    invisibleTagAttrs?: string;
    htmlEscapeNonEntities?: boolean;
    urlEntities?: UrlEntity[];
}

declare export function autoLink(text: string, options?: AutoLinkOptions): string;
declare export function autoLinkUsernamesOrLists(text: string, options?: AutoLinkOptions): string;
declare export function autoLinkHashtags(text: string, options?: AutoLinkOptions): string;
declare export function autoLinkCashtags(text: string, options?: AutoLinkOptions): string;
declare export function autoLinkUrlsCustom(text: string, options?: AutoLinkOptions): string;
declare export function autoLinkEntities(text: string, entities: EntityWithIndices[], options?: AutoLinkOptions): string;

interface TweetLengthOptions {
    short_url_length: number;
    short_url_length_https: number;
}
declare export function getTweetLength(text: string, options?: TweetLengthOptions): number;

declare export function isValidUsername(username: string): boolean;
declare export function isValidList(usernameList: string): boolean;
declare export function isValidHashtag(hashtag: string): boolean;
// Note: unicodeDomainsa and requireProtocol can be null
declare export function isValidUrl(url: string, unicodeDomains: boolean, requireProtocol: boolean): boolean;
declare export function isInvalidTweet(text: string): string;

declare export function getUnicodeTextLength(text: string): number;
// Note: This function directly modify entities" indices
declare export function convertUnicodeIndices(text: string, entities: EntityWithIndices[], indicesInUTF16?: boolean): void;

declare export function hitHighlight(text: string, hits?: number[][], options?: { tag: string }): string;
