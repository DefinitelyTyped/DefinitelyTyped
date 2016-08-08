// Type definitions for twitter-text v1.13.4
// Project: https://github.com/twitter/twitter-text
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "twitter-text" {
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

	export function htmlEscape(text: string): string;
	export function splitTags(text: string): string[];

	export function extractHashtags(text: string): string[];
	export function extractHashtagsWithIndices(text: string): HashtagWithIndices[];
	export function extractUrls(text: string): string[];
	export function extractUrlsWithIndices(text: string): UrlWithIndices[];
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
		htmlAttrs?: string;
		invisibleTagAttrs?: string;
		htmlEscapeNonEntities?: boolean;
		urlEntities?: UrlEntity[];
	}

	export function autoLink(text: string, options?: AutoLinkOptions): string;
	export function autoLinkUsernamesOrLists(text: string, options?: AutoLinkOptions): string;
	export function autoLinkHashtags(text: string, options?: AutoLinkOptions): string;
	export function autoLinkCashtags(text: string, options?: AutoLinkOptions): string;
	export function autoLinkUrlsCustom(text: string, options?: AutoLinkOptions): string;
	export function autoLinkEntities(text: string, entities: EntityWithIndices[], options?: AutoLinkOptions): string;

	interface TweetLengthOptions {
		short_url_length: number;
		short_url_length_https: number;
	}
	export function getTweetLength(text: string, options?: TweetLengthOptions): number;

	export function isValidUsername(username: string): boolean;
	export function isValidList(usernameList: string): boolean;
	export function isValidHashtag(hashtag: string): boolean;
	// Note: unicodeDomainsa and requireProtocol can be null
	export function isValidUrl(url: string, unicodeDomains: boolean, requireProtocol: boolean): boolean;
	export function isInvalidTweet(text: string): string;

	export function getUnicodeTextLength(text: string): number;
	// Note: This function directly modify entities" indices
	export function convertUnicodeIndices(text: string, entities: EntityWithIndices[], indicesInUTF16?: boolean): void;

	export function hitHighlight(text: string, hits?: number[][], options?: {tag: string}): string;
}
