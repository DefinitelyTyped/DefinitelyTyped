// Type definitions for twitter-text-js v1.13.3
// Project: https://github.com/twitter/twitter-text
// Definitions by: Josh Kramer <https://github.com/jkjustjoshing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module TwitterText {

	interface EntitiesOption {
		hashtagClass: string;
		hashtagUrlBase: string;
		cashtagClass: string;
		cashtagUrlBase: string;
		listClass: string;
		usernameClass: string;
		usernameUrlBase: string;
		listUrlBase: string;
		htmlAttrs: string;
		invisibleTagAttrs: string;
	}

	type Entities = any;

	interface Regexen {
		spaces_group: RegExp;
		spaces: RegExp;
		invalid_chars_group: RegExp;
		punct: RegExp;
		rtl_chars: RegExp;
		non_bmp_code_pairs: RegExp;
		latinAccentChars: RegExp;
		hashSigns: RegExp;
		hashtagAlpha: RegExp;
		hashtagAlphaNumeric: RegExp;
		endHashtagMatch: RegExp;
		hashtagBoundary: RegExp;
		validHashtag: RegExp;
		validMentionPrecedingChars: RegExp;
		atSigns: RegExp;
		validMentionOrList: RegExp;
		validReply: RegExp;
		endMentionMatch: RegExp;
		validUrlPrecedingChars: RegExp;
		invalidUrlWithoutProtocolPrecedingChars: RegExp;
		invalidDomainChars: RegExp;
		validDomainChars: RegExp;
		validSubdomain: RegExp;
		validDomainName: RegExp;
		validGTLD: RegExp;
		validCCTLD: RegExp;
		validPunycode: RegExp;
		validSpecialCCTLD: RegExp;
		validDomain: RegExp;
		validAsciiDomain: RegExp;
		invalidShortDomain: RegExp;
		validSpecialShortDomain: RegExp;
		validPortNumber: RegExp;
		cyrillicLettersAndMarks: RegExp;
		validGeneralUrlPathChars: RegExp;
		validUrlBalancedParens: RegExp;
		validUrlPathEndingChars: RegExp;
		validUrlPath: RegExp;
		validUrlQueryChars: RegExp;
		validUrlQueryEndingChars: RegExp;
		extractUrl: RegExp;
		validTcoUrl: RegExp;
		urlHasProtocol: RegExp;
		urlHasHttps: RegExp;
		cashtag: RegExp;
		validCashtag: RegExp;
		validateUrlUnreserved: RegExp;
		validateUrlPctEncoded: RegExp;
		validateUrlSubDelims: RegExp;
		validateUrlPchar: RegExp;
		validateUrlScheme: RegExp;
		validateUrlUserinfo: RegExp;
		validateUrlDecOctet: RegExp;
		validateUrlIpv4: RegExp;
		validateUrlIpv6: RegExp;
		validateUrlIp: RegExp;
		validateUrlSubDomainSegment: RegExp;
		validateUrlDomainSegment: RegExp;
		validateUrlDomainTld: RegExp;
		validateUrlDomain: RegExp;
		validateUrlHost: RegExp;
		validateUrlUnicodeSubDomainSegment: RegExp;
		validateUrlUnicodeDomainSegment: RegExp;
		validateUrlUnicodeDomainTld: RegExp;
		validateUrlUnicodeDomain: RegExp;
		validateUrlUnicodeHost: RegExp;
		validateUrlPort: RegExp;
		validateUrlUnicodeAuthority: RegExp;
		validateUrlAuthority: RegExp;
		validateUrlPath: RegExp;
		validateUrlQuery: RegExp;
		validateUrlFragment: RegExp;
		validateUrlUnencoded: RegExp;
	}

	interface LinkToMethod {
		(entity, text: string, options): string;
	}

	interface Txt {
		regexen: Regexen;
		htmlEscape(text: string): string;
		regexSupplant(regex: RegExp | string, flags: string): RegExp;
		stringSupplant(str: string, values: string[]): string;
		addCharsToCharClass(charClass, start, end);
		tagAttrs(attributes): string;
		linkToText(entity, text: string, attributes, options): string;
		linkToTextWithSymbol(entity, symbol, text: string, attributes, options): string;
		linkToHashtag: LinkToMethod;
		linkToCashtag: LinkToMethod;
		linkToMentionAndList: LinkToMethod;
		linkToUrl: LinkToMethod;
		linkTextWithEntity(entity, options): string;
		autoLinkEntities(text: string, entities, options): string;
		autoLinkWithJSON(text: string, json, options): string;
		extractHtmlAttrsFromOptions(options): any;
		autoLink(text: string, options: EntitiesOption): string;
		autoLinkUsernamesOrLists(text: string, options: EntitiesOption): string;
		autoLinkHashtags(text: string, options: EntitiesOption): string;
		autoLinkCashtags(text: string, options: EntitiesOption): string;
		autoLinkUrlsCustom(text: string, options: EntitiesOption): string;
		removeOverlappingEntities(entities): any;
		extractEntitiesWithIndices(text: string, options): any[];
		extractMentions(text: string): string[];
		extractMentionsWithIndices(text: string): { screenName: string, indices: any }[];
		extractMentionsOrListsWithIndices(text: string): any[];
		extractReplies(text: string): any;
		extractUrls(text: string, options): any;
		extractUrlsWithIndices(text: string, options): any;
		extractHashtags(text: string): string[];
		extractHashtagsWithIndices(text: string, options): any;
		extractCashtags(text: string): string[];
		extractCashtagsWithIndices(text: string): { cashtag: string, indices: number[] }[];
		modifyIndicesFromUnicodeToUTF16(text: string, entities): any;
		modifyIndicesFromUTF16ToUnicode(text: string, entities): any;
		getUnicodeTextLength(text: string): number;
		convertUnicodeIndices(text: string, entities, indicesInUTF16): any;
		splitTags(text: string): string;
		hitHighlight(text: string, hits: any[], options): string;
		getTweetLength(text: string, options): number;
		isInvalidTweet(text: string): string | number;
		hasInvalidCharacters(text: string): boolean;
		isValidTweetText(text: string): boolean;
		isValidUsername(username: string): boolean;
		isValidList(usernameList: string): boolean;
		isValidHashtag(hashtag: string): boolean;
		isValidUrl(url: string, unicodeDomains: boolean, requireProtocol: boolean): boolean;
	}

	interface TwitterText {
		txt: Txt;
	}

}

declare var twttr: TwitterText.TwitterText;
