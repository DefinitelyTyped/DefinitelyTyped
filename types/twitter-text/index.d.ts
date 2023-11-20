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
export function extractUrls(
    text: string,
    options?: { extractUrlsWithoutProtocol: boolean },
): string[];
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
export interface HtmlAttributes {
    [name: string]: any;
}
export function extractHtmlAttrsFromOptions(options: HtmlAttributes): HtmlAttributes;

/**
 * Modifies (in-place) entity indices meant for Unicode text for use with UTF-16 text.
 */
export function modifyIndicesFromUnicodeToUTF16(text: string, entities: EntityWithIndices[]): void;

/**
 * Modifies (in-place) entity indices meant for UTF-16 text for use with Unicode text.
 */
export function modifyIndicesFromUTF16ToUnicode(text: string, entities: EntityWithIndices[]): void;

export interface UrlEntity {
    url: string;
    display_url: string;
    expanded_url: string;
    indices: [number, number];
}
export interface AutoLinkOptions {
    hashtagClass?: string | undefined;
    hashtagUrlBase?: string | undefined;
    cashtagClass?: string | undefined;
    cashtagUrlBase?: string | undefined;
    listClass?: string | undefined;
    usernameClass?: string | undefined;
    usernameUrlBase?: string | undefined;
    listUrlBase?: string | undefined;
    invisibleTagAttrs?: string | undefined;
    htmlEscapeNonEntities?: boolean | undefined;
    targetBlank?: boolean | undefined;
    suppressNoFollow?: boolean | undefined;
    urlEntities?: ReadonlyArray<UrlEntity> | undefined;
    usernameIncludeSymbol?: boolean | undefined;
    linkAttributeBlock?: ((entity: EntityWithIndices, attributes: Attributes) => void) | undefined;
    linkTextBlock?: ((entity: EntityWithIndices, text: string) => void) | undefined;
    symbolTag?: string | undefined;
    textWithSymbolTag?: string | undefined;
    htmlAttrs?: Attributes | undefined;
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
export function autoLinkWithJSON(text: string, json: { [key: string]: any }, options?: AutoLinkOptions): string;

export function linkTextWithEntity(entity: UrlEntity, options?: AutoLinkOptions): string;

export function linkToText(
    entity: EntityWithIndices,
    text: string,
    attributes: HtmlAttributes,
    options?: AutoLinkOptions,
): string;
export function linkToTextWithSymbol(
    entity: EntityWithIndices,
    symbol: string,
    text: string,
    attributes: HtmlAttributes,
    options?: AutoLinkOptions,
): string;
export function linkToCashtag(entity: EntityWithIndices, text: string, options?: AutoLinkOptions): string;
export function linkToHashtag(entity: EntityWithIndices, text: string, options?: AutoLinkOptions): string;
export function linkToMentionAndList(entity: EntityWithIndices, text: string, options?: AutoLinkOptions): string;
export function linkToUrl(entity: EntityWithIndices, text: string, options?: AutoLinkOptions): string;

export function removeOverlappingEntities(entities: EntityWithIndices[]): void;
export function tagAttrs(attributes: HtmlAttributes): string;

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
export function isInvalidTweet(text: string, options?: ParseTweetOptions): boolean;
export function isValidTweet(text: string, options?: ParseTweetOptions): boolean;

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
    version?: number | undefined;
    maxWeightedTweetLength?: number | undefined;
    scale?: number | undefined;
    defaultWeight?: number | undefined;
    transformedURLLength?: number | undefined;
    ranges?:
        | Array<{
            start: number;
            end: number;
            weight: number;
        }>
        | undefined;
    emojiParsingEnabled?: boolean | undefined;
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

export const regexen: {
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
    validUrlQueryEndingChar: RegExp;
};
