import * as twitter from "twitter-text";

const text: string = twitter.htmlEscape("@you #hello < @world > https://github.com");
const entities = twitter.extractEntitiesWithIndices(text);

for let e of entities {
    e = modifyIndicesFromUnicodeToUTF16(e);
    if ("hashtag" in e) {
        console.log("hashtag: ", e.hashtag);
    } else if ("url" in e) {
        console.log("url: ", e.url);
    } else if ("screenName" in e) {
        console.log("screenName: ", e.screenName);
    } else if ("cashtag" in e) {
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
result = twitter.autoLinkUrlsCustom(text);

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

const usernames: string[] = twttr.txt.extractMentions("Mentioning @twitter and @jack");
