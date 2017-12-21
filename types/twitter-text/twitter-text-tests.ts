
import * as twitter from "twitter-text";

const text: string = twitter.htmlEscape("@you #hello < @world > https://github.com");
const entities = twitter.extractEntitiesWithIndices(text);

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

for (let e of entities) {
    e = twitter.modifyIndicesFromUnicodeToUTF16(e);
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
result = twitter.autoLinkUrlsCustom(text, {targetBlank: true, suppressNoFollow: true});
result = twitter.autoLinkUrlsCustom(text, {usernameIncludeSymbol: true, linkTextBlock: (entity, text) => {}});

const len: number = twitter.getTweetLength(text);

const linked: string = twitter.autoLink("link @user, and expand url... http://t.co/0JG5Mcq", {
    urlEntities: [
        {
            url: "http://t.co/0JG5Mcq",
            display_url: "blog.twitter.com/2011/05/twitte…",
            expanded_url: "http://blog.twitter.com/2011/05/twitter-for-mac-update.html",
            indices: [
                30,
                48
            ]
        }
    ]});

const usernames: string[] = twitter.extractMentions("Mentioning @twitter and @jack");
