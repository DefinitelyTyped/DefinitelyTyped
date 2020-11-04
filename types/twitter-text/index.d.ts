// Type definitions for twitter-text v2.0.0
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
    HashtagWithIndices |
    UrlWithIndices |
    MentionWithIndices |
    MentionOrListWithIndices |
    CashtagWithIndices;

interface Indices {
    indices: [number, number];
}

interface Attributes {
    [name: string]: string | null;
}

export declare function htmlEscape(text: string): string;
export declare function splitTags(text: string): string[];

export declare function extractHashtags(text: string): string[];
export declare function extractHashtagsWithIndices(text: string): HashtagWithIndices[];
export declare function extractUrls(text: string): string[];
export declare function extractUrlsWithIndices(text: string, options?: {extractUrlsWithoutProtocol: boolean}): UrlWithIndices[];
export declare function extractMentions(text: string): string[];
export declare function extractMentionsWithIndices(text: string): MentionWithIndices[];
export declare function extractMentionsOrListsWithIndices(text: string): MentionOrListWithIndices[];
export declare function extractReplies(text: string): string[];
export declare function extractCashtags(text: string): string[];
export declare function extractCashtagsWithIndices(text: string): CashtagWithIndices[];
export declare function extractEntitiesWithIndices(text: string): EntityWithIndices[];

export declare function modifyIndicesFromUnicodeToUTF16<I>(i: I): I;
export declare function modifyIndicesFromUTF16ToUnicode<I>(i: I): I;

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
    urlEntities?: UrlEntity[];
    usernameIncludeSymbol?: boolean;
    linkAttributeBlock?: (entity: EntityWithIndices, attributes: Attributes) => void;
    linkTextBlock?: (entity: EntityWithIndices, text: string) => void;
    symbolTag?: string;
    textWithSymbolTag?: string;
    htmlAttrs?: Attributes;
}

export declare function autoLink(text: string, options?: AutoLinkOptions): string;
export declare function autoLinkUsernamesOrLists(text: string, options?: AutoLinkOptions): string;
export declare function autoLinkHashtags(text: string, options?: AutoLinkOptions): string;
export declare function autoLinkCashtags(text: string, options?: AutoLinkOptions): string;
export declare function autoLinkUrlsCustom(text: string, options?: AutoLinkOptions): string;
export declare function autoLinkEntities(text: string, entities: EntityWithIndices[], options?: AutoLinkOptions): string;

interface TweetLengthOptions {
    short_url_length: number;
    short_url_length_https: number;
}
export declare function getTweetLength(text: string, options?: TweetLengthOptions): number;

export declare function isValidUsername(username: string): boolean;
export declare function isValidList(usernameList: string): boolean;
export declare function isValidHashtag(hashtag: string): boolean;
// Note: unicodeDomainsa and requireProtocol can be null
export declare function isValidUrl(url: string, unicodeDomains: boolean, requireProtocol: boolean): boolean;
export declare function hasInvalidCharacters(text: string): boolean;
export declare function isInvalidTweet(text: string): string;

export declare function getUnicodeTextLength(text: string): number;
// Note: This function directly modify entities" indices
export declare function convertUnicodeIndices(text: string, entities: EntityWithIndices[], indicesInUTF16?: boolean): void;

export declare function hitHighlight(text: string, hits?: number[][], options?: { tag: string }): string;

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

export declare function parseTweet(text: string, options?: ParseTweetOptions): ParsedTweet;
interface Regexen {
    astralLetterAndMarks: RegExp;
    astralNumerals: RegExp;
    atSigns: RegExp;
    bmpLetterAndMarks: RegExp;
    bmpNumerals: RegExp;
    cashtag: RegExp;
    codePoint: RegExp;
    cyrillicLettersAndMarks: RegExp;
    endHashtagMatch: RegExp;
    endMentionMatch: RegExp;
    extractUrl: RegExp;
    hashSigns: RegExp;
    hashtagAlpha: RegExp;
    hashtagAlphaNumeric: RegExp;
    hashtagBoundary: RegExp;
    hashtagSpecialChars: RegExp;
    invalidChars: RegExp;
    invalidCharsGroup: RegExp;
    invalidDomainChars: RegExp;
    invalidUrlWithoutProtocolPrecedingChars: RegExp;
    latinAccentChars: RegExp;
    nonBmpCodePairs: RegExp;
    punct: RegExp;
    rtlChars: RegExp;
    spaces: RegExp;
    spacesGroup: RegExp;
    urlHasHttps: RegExp;
    urlHasProtocol: RegExp;
    validAsciiDomain: RegExp;
    validateUrlAuthority: RegExp;
    validateUrlDecOctet: RegExp;
    validateUrlDomain: RegExp;
    validateUrlDomainSegment: RegExp;
    validateUrlDomainTld: RegExp;
    validateUrlFragment: RegExp;
    validateUrlHost: RegExp;
    validateUrlIp: RegExp;
    validateUrlIpv4: RegExp;
    validateUrlIpv6: RegExp;
    validateUrlPath: RegExp;
    validateUrlPchar: RegExp;
    validateUrlPctEncoded: RegExp;
    validateUrlPort: RegExp;
    validateUrlQuery: RegExp;
    validateUrlScheme: RegExp;
    validateUrlSubDelims: RegExp;
    validateUrlSubDomainSegment: RegExp;
    validateUrlUnencoded: RegExp;
    validateUrlUnicodeAuthority: RegExp;
    validateUrlUnicodeDomain: RegExp;
    validateUrlUnicodeDomainSegment: RegExp;
    validateUrlUnicodeDomainTld: RegExp;
    validateUrlUnicodeHost: RegExp;
    validateUrlUnicodeSubDomainSegment: RegExp;
    validateUrlUnreserved: RegExp;
    validateUrlUserinfo: RegExp;
    validCashtag: RegExp;
    validCCTLD: RegExp;
    validDomain: RegExp;
    validDomainChars: RegExp;
    validDomainName: RegExp;
    validGeneralUrlPathChars: RegExp;
    validGTLD: RegExp;
    validHashtag: RegExp;
    validMentionOrList: RegExp;
    validMentionPrecedingChars: RegExp;
    validPortNumber: RegExp;
    validPunycode: RegExp;
    validReply: RegExp;
    validSubdomain: RegExp;
    validTcoUrl: RegExp;
    validUrlBalancedParens: RegExp;
    validUrlPath: RegExp;
    validUrlPathEndingChars: RegExp;
    validUrlPrecedingChars: RegExp;
    validUrlQueryChars: RegExp;
    validUrlQueryEndingChars: RegExp;
}

export const regexen: Regexen;
