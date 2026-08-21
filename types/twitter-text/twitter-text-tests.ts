import * as twitter from "twitter-text";

const text: string = twitter.htmlEscape("@you #hello < @world > https://github.com");
const entities: twitter.EntityWithIndices[] = twitter.extractEntitiesWithIndices(text);

function isHashtagEntity(e: twitter.EntityWithIndices): e is twitter.HashtagWithIndices {
    return "hashtag" in e;
}

function isUrlEntity(e: twitter.EntityWithIndices): e is twitter.UrlWithIndices {
    return "url" in e;
}

function isMentionEntity(e: twitter.EntityWithIndices): e is twitter.MentionWithIndices {
    return "screenName" in e;
}

function isCashtagEntity(e: twitter.EntityWithIndices): e is twitter.CashtagWithIndices {
    return "cashtag" in e;
}

twitter.modifyIndicesFromUnicodeToUTF16(text, entities);
for (const e of entities) {
    if (isHashtagEntity(e)) {
        console.log("hashtag: ", e.hashtag);
    } else if (isUrlEntity(e)) {
        console.log("url: ", e.url);
    } else if (isMentionEntity(e)) {
        console.log("screenName: ", e.screenName);
    } else if (isCashtagEntity(e)) {
        console.log("cashtag: ", e.cashtag);
    } else {
        console.error("Unreachable");
    }
    console.log(`indices: (${e.indices[0]}, ${e.indices[1]})`);
}

let result: string;
result = twitter.autoLink(text);
result = twitter.autoLinkUsernamesOrLists(text);
result = twitter.autoLinkHashtags(text);
result = twitter.autoLinkCashtags(text);
result = twitter.autoLinkUrlsCustom(text, { targetBlank: true, suppressNoFollow: true });
result = twitter.autoLinkUrlsCustom(text, { usernameIncludeSymbol: true, linkTextBlock: (entity, text) => {} });
result = twitter.autoLinkWithJSON(text, { user_mentions: [] });

const len: number = twitter.getTweetLength(text);

const urlEntity = {
    url: "http://t.co/0JG5Mcq",
    display_url: "blog.twitter.com/2011/05/twitte…",
    expanded_url: "http://blog.twitter.com/2011/05/twitter-for-mac-update.html",
    indices: [30, 48] as [number, number],
};
let linked: string = twitter.autoLink("link @user, and expand url... http://t.co/0JG5Mcq", {
    urlEntities: [urlEntity],
});

const usernames: string[] = twitter.extractMentions("Mentioning @twitter and @jack");
const attrs: { [k: string]: any } = twitter.extractHtmlAttrsFromOptions({ displayed: true, id: "foo" });

const tweet: twitter.ParsedTweet = twitter.parseTweet("foo");
const tweetWithOptions: twitter.ParsedTweet = twitter.parseTweet("foo", {
    maxWeightedTweetLength: 140,
    emojiParsingEnabled: true,
});
const [start, end]: [number, number] = twitter.standardizeIndices("hello", 0, 3);

const isValidReply = twitter.regexen.validReply.test("@twitter");

const isValid: boolean = twitter.isValidTweet(text);
const isInvalid: boolean = twitter.isInvalidTweet(text);

let isValidUrl: boolean = twitter.isValidUrl("https://example.com", null, null);
isValidUrl = twitter.isValidUrl("https://example.com", null, true);
isValidUrl = twitter.isValidUrl("https://example.com", null, false);
isValidUrl = twitter.isValidUrl("https://example.com", true, null);
isValidUrl = twitter.isValidUrl("https://example.com", true, true);
isValidUrl = twitter.isValidUrl("https://example.com", true, false);
isValidUrl = twitter.isValidUrl("https://example.com", false, null);
isValidUrl = twitter.isValidUrl("https://example.com", false, true);
isValidUrl = twitter.isValidUrl("https://example.com", false, false);

const attributes: twitter.HtmlAttributes = {
    displayed: true,
    id: "foo",
};

const extracted: twitter.HtmlAttributes = twitter.extractHtmlAttrsFromOptions(attributes);

linked = twitter.linkTextWithEntity(urlEntity);
linked = twitter.linkToText(entities[0], text, attributes);
linked = twitter.linkToTextWithSymbol(entities[0], "$", text, attributes);
linked = twitter.linkToCashtag(entities[0], text);
linked = twitter.linkToHashtag(entities[0], text);
linked = twitter.linkToMentionAndList(entities[0], text);
linked = twitter.linkToUrl(entities[0], text);

twitter.removeOverlappingEntities(entities);
const attrsString: string = twitter.tagAttrs(attributes);
