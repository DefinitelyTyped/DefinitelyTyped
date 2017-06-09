

function load() {
    twttr.widgets.load();
    twttr.widgets.load(document.getElementById("elm"));
}

function createShareButton() {
    twttr.widgets.createShareButton(
        "https://dev.twitter.com/",
        document.getElementById("new-button"),
        {
            count: "none",
            text: "Sharing a URL using the Tweet Button"
        }).then((el: HTMLElement) => {
        console.log("Button created.")
    });
}

function createFollowButton() {
    twttr.widgets.createFollowButton(
        "endform",
        document.getElementById("new-button"),
        {
            size: "large"
        }).then((el: HTMLElement) => {
        console.log("Follow button created.")
    });
}

function createTweet() {
    twttr.widgets.createTweet(
        "511181794914627584",
        document.getElementById("first-tweet"),
        {
            align: "left"
        }).then((el: HTMLElement) => {
        console.log("@ev's Tweet has been displayed.")
    });
}

function createTimeline() {
    twttr.widgets.createTimeline(
        "123456",
        document.getElementById("timeline"),
        {
            width: "450",
            height: "700",
            related: "twitterdev,twitterapi"
        }).then((el: HTMLElement) => {
        console.log("Embedded a timeline.")
    });
}

function bindEvent() {
    twttr.events.bind(
        "click",
        ev => {
            console.log(ev);
        }
    );
}

function getReady() {
    twttr.ready(
        twttr => {
            // bind events here
        }
    );
}

function bindLoadedEvent() {
    twttr.events.bind(
        "loaded",
        event => {
            event.widgets.forEach((widget: any) => {
                console.log("Created widget", widget.id);
            });
        }
    );
}

function bindRenderedEvent() {
    twttr.events.bind(
        "rendered",
        event => {
            console.log("Created widget", event.target.id);
        }
    );
}

function bindTweetEvent() {
    twttr.events.bind(
        "tweet",
        event => {
            // Do something there
        }
    );
}

function bindFollowEvent() {
    twttr.events.bind(
        "follow",
        event => {
            var followedUserId = event.data.user_id;
            var followedScreenName = event.data.screen_name;
        }
    );
}

function bindRetweetEvent() {
    twttr.events.bind(
        "retweet",
        event => {
            var retweetedTweetId = event.data.source_tweet_id;
        }
    );
}

function bindFavoriteEvent() {
    twttr.events.bind(
        "favorite",
        event => {
            var favoritedTweetId = event.data.tweet_id;
        }
    );
}
