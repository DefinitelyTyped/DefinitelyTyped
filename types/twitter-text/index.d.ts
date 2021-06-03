// Type definitions for twitter-text 3.1
// Project: https://github.com/twitter/twitter-text
// Definitions by: rhysd <https://github.com/rhysd>
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
    | HashtagWithIndices
    | UrlWithIndices
    | MentionWithIndices
    | MentionOrListWithIndices
    | CashtagWithIndices;

export interface Indices {
    indices: [number, number];
}

export interface Attributes {
    [name: string]: string | null;
}

export function htmlEscape(text: string): string;
export function splitTags(text: string): string[];

export function extractHashtags(text: string): string[];
export function extractHashtagsWithIndices(text: string): HashtagWithIndices[];
export function extractUrls(text: string): string[];
export function extractUrlsWithIndices(
    text: string,
    options?: { extractUrlsWithoutProtocol: boolean },
): UrlWithIndices[];
export function extractMentions(text: string): string[];
export function extractMentionsWithIndices(text: string): MentionWithIndices[];
export function extractMentionsOrListsWithIndices(text: string): MentionOrListWithIndices[];
export function extractReplies(text: string): string[];
export function extractCashtags(text: string): string[];
export function extractCashtagsWithIndices(text: string): CashtagWithIndices[];
export function extractEntitiesWithIndices(text: string): EntityWithIndices[];

export function modifyIndicesFromUnicodeToUTF16<I>(i: I): I;
export function modifyIndicesFromUTF16ToUnicode<I>(i: I): I;

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
    invisibleTagAttrs?: string;
    htmlEscapeNonEntities?: boolean;
    targetBlank?: boolean;
    suppressNoFollow?: boolean;
    urlEntities?: ReadonlyArray<UrlEntity>;
    usernameIncludeSymbol?: boolean;
    linkAttributeBlock?: (entity: EntityWithIndices, attributes: Attributes) => void;
    linkTextBlock?: (entity: EntityWithIndices, text: string) => void;
    symbolTag?: string;
    textWithSymbolTag?: string;
    htmlAttrs?: Attributes;
}

export function autoLink(text: string, options?: AutoLinkOptions): string;
export function autoLinkUsernamesOrLists(text: string, options?: AutoLinkOptions): string;
export function autoLinkHashtags(text: string, options?: AutoLinkOptions): string;
export function autoLinkCashtags(text: string, options?: AutoLinkOptions): string;
export function autoLinkUrlsCustom(text: string, options?: AutoLinkOptions): string;
export function autoLinkEntities(
    text: string,
    entities: ReadonlyArray<EntityWithIndices>,
    options?: AutoLinkOptions,
): string;

export interface TweetLengthOptions {
    short_url_length: number;
    short_url_length_https: number;
}
export function getTweetLength(text: string, options?: TweetLengthOptions): number;

export function isValidUsername(username: string): boolean;
export function isValidList(usernameList: string): boolean;
export function isValidHashtag(hashtag: string): boolean;
// Note: unicodeDomainsa and requireProtocol can be null
export function isValidUrl(url: string, unicodeDomains: boolean, requireProtocol: boolean): boolean;
export function hasInvalidCharacters(text: string): boolean;
export function isInvalidTweet(text: string): string;

export function getUnicodeTextLength(text: string): number;
// Note: This function directly modify entities" indices
export function convertUnicodeIndices(
    text: string,
    entities: ReadonlyArray<EntityWithIndices>,
    indicesInUTF16?: boolean,
): void;

export function hitHighlight(
    text: string,
    hits?: ReadonlyArray<ReadonlyArray<number>>,
    options?: { tag: string },
): string;

export interface ParseTweetOptions {
    version?: number;
    maxWeightedTweetLength?: number;
    scale?: number;
    defaultWeight?: number;
    transformedURLLength?: number;
    ranges?: Array<{
        start: number;
        end: number;
        weight: number;
    }>;
    emojiParsingEnabled?: boolean;
}

export interface ParsedTweet {
    weightedLength: number;
    permillage: number;
    valid: boolean;
    displayRangeEnd: number;
    displayRangeStart: number;
    validRangeEnd: number;
    validRangeStart: number;
}

export function parseTweet(text: string, options?: ParseTweetOptions): ParsedTweet;
export function standardizeIndices(text: string, startIndex: number, endIndex: number): [number, number];
