// Type definitions for Twitter for Websites
// Project: https://dev.twitter.com/web/
// Definitions by: Chitoku <https://github.com/chitoku-k>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The interface for Twitter for Websites.
 */
interface Twitter {
    /**
     * All JavaScript code depending on widgets.js should execute on or after this function.
     *
     * @param callback A callback function which will be invoked when widgets.js is ready.
     */
    ready(callback: (twttr: Twitter) => void): void;
    /**
     * Twitter widgets.
     */
    widgets: TwitterWidgets;
    /**
     * Twitter events.
     */
    events: TwitterEvents;
}

/**
 * The interface for Twitter for Websites widgets.
 */
interface TwitterWidgets {
    /**
     * Initialize Twitter for Websites widgets contained within a page.
     */
    load(): void;
    /**
     * Initialize Twitter for Websites widgets contained within children of the element.
     */
    load(element: HTMLElement): void;
    /**
     * Initialize Twitter for Websites widgets contained within children of the elements.
     */
    load(elements: HTMLElement[]): void;
    /**
     * Create a share button for a URL.
     *
     * @param url The URL to be shared.
     * @param target The element in which to render the widget.
     * @param options An object hash of additional options to configure the widget.
     */
    createShareButton(url: string, target: HTMLElement, options?: TwitterButtonWidgetOptions): Promise<HTMLElement>;
    /**
     * Create a follow button for a user.
     *
     * @param screen_name The screen_name of a user to be followed.
     * @param target The element in which to render the widget.
     * @param options An object hash of additional options to configure the widget.
     */
    createFollowButton(screen_name: string, target: HTMLElement, options?: TwitterButtonWidgetOptions): Promise<HTMLElement>;
    /**
     * Create a hashtag button for a hashtag.
     *
     * @param hashtag Hashtag to be Tweeted and displayed on the button.
     * @param target The element in which to render the widget.
     * @param options An object hash of additional options to configure the widget.
     */
    createHashtagButton(hashtag: string, target: HTMLElement, options?: TwitterButtonWidgetOptions): Promise<HTMLElement>;
    /**
     * Create a mention button for a user.
     *
     * @param screen_name The screen_name of a user to be mentioned.
     * @param target The element in which to render the widget.
     * @param options An object hash of additional options to configure the widget.
     */
    createMentionButton(screen_name: string, target: HTMLElement, options?: TwitterButtonWidgetOptions): Promise<HTMLElement>;
    /**
     * Create a timeline widget.
     *
     * @param widgetId The ID of a timeline widget to be rendered.
     * @param target The element in which to render the widget.
     * @param options An object hash of additional options to configure the widget.
     */
    createTimeline(widgetId: string, target: HTMLElement, options?: TwitterTimelineWidgetOptions): Promise<HTMLElement>;
    /**
     * Create an embedded Tweet for a Tweet.
     *
     * @param tweetId The ID of a Tweet to be rendered.
     * @param target The element in which to render the widget.
     * @param options An object hash of additional options to configure the widget.
     */
    createTweet(tweetId: string, target: HTMLElement, options?: TwitterTweetWidgetOptions): Promise<HTMLElement>;
}

/**
 * The interface for additional configuration for all widgets.
 */
interface TwitterWidgetOptions {
    /**
     * Enable Do Not Track for this widget.
     */
    dnt?: boolean;
    /**
     * A list of hashtags to be appended to default Tweet text where appropriate.
     */
    hashtags?: string;
    /**
     * The language in which to render a widget, if supported.
     */
    lang?: string;
    /**
     * A list of Twitter screen names to be suggested for following after a Tweet is posted.
     */
    related?: string;
    /**
     * A Twitter user mentioned in the default Tweet text as /via @user where appropriate.
     */
    via?: string;
}

/**
 * The interface for additional configuration for button widgets.
 */
interface TwitterButtonWidgetOptions extends TwitterWidgetOptions {
    /**
     * The alignment of the button within an iframe; use this to ensure flush layout when aligning buttons against opposite edges of your grid.
     */
    align?: string;
    /**
     * Share button and Follow button only. (Vertical count only available for share buttons.)
     */
    count?: string;
    /**
     * If the canonical URL to be counted is different from the URL to be shared, you can provide this URL to reference the count. (Share button only.)
     */
    counturl?: string;
    /**
     * medium or large
     */
    size?: string;
    /**
     * The default, highlighted text a user sees in the Tweet Web Intent.
     */
    text?: string;
}

/**
 * The interface for additional options for embedded Tweets.
 */
interface TwitterTweetWidgetOptions extends TwitterWidgetOptions {
    /**
     * Float the embedded Tweet to the left or right so that text wraps around it, or align center so it floats in the middle of a paragraph.
     */
    align?: string;
    /**
     * For Tweets that are replies, the previous Tweet in the thread will be displayed by default. Use none to hide the thread and show a Tweet alone.
     */
    conversation?: string;
    /**
     * Toggle whether to render expanded media through Twitter Cards in Tweets. Also applies to images uploaded to Twitter.
     */
    cards?: string;
    /**
     * Fix the width of the embedded widget.
     */
    width?: string|number;
    /**
     * Adjust the color of links inside the widget.
     */
    linkColor?: string;
    /**
     * Toggle the default colorscheme of the widget.
     */
    theme?: string;
}

/**
 * The interface for additional options for embedded Timelines.
 */
interface TwitterTimelineWidgetOptions extends TwitterWidgetOptions, TwitterButtonWidgetOptions, TwitterTweetWidgetOptions {
    /**
     * Apply the specified aria-polite behavior to the rendered timeline.
     */
    ariaPolite?: string;
    /**
     * Fix the height of the embedded widget.
     */
    height?: string|number;
    /**
     * Adjust the color of borders inside the widget.
     */
    borderColor?: string;
    /**
     * Toggle the display of design elements in the widget. This parameter is a space-separated list of values.
     */
    chrome?: string;
    /**
     * Render a timeline statically, displaying only n number of Tweets.
     */
    tweetLimit?: number;
    /**
     * Override the timeline source with this user’s Tweets.
     */
    screenName?: string;
    /**
     * Override the timeline source with this user’s Tweets.
     */
    userId?: string;
    /**
     * When overriding a user timeline, include Tweets that are in reply to to other users.
     */
    showReplies?: boolean;
    /**
     * Override the timeline source with favourite Tweets from this user.
     */
    favoritesScreenName?: string;
    /**
     * Override the timeline source with favourite Tweets from this user.
     */
    favoritesUserId?: string;
    /**
     * Override the timeline source with Tweets from a list owned by this user. Must be used in combination with listId or listSlug.
     */
    listOwnerScreenName?: string;
    /**
     * Override the timeline source with Tweets from a list owned by this user. Must be used in combination with listId or listSlug.
     */
    listOwnerId?: string;
    /**
     * Override the timeline source with Tweets from this list. Must be used in combination with listOwnerId or listOwnerScreenName.
     */
    listId?: string;
    /**
     * Override the timeline source with Tweets from this list. Must be used in combination with listOwnerId or listOwnerScreenName.
     */
    listSlug?: string;
}

/**
 * The interface for Twitter events.
 */
interface TwitterEvents {
    /**
     * Occurs after twttr.widgets.load has initialized widgets in a page, from an embed code. Includes an array of references to the newly created widget nodes.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "loaded", callback: (ev: any) => void): void;
    /**
     * Bind an event occurs after an individual widget in a page is rendered. Includes a of reference to the newly created widget node. Occurs at the same time as loaded, but for each individual widget. Also triggered when creating a widget with a factory function.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "rendered", callback: (ev: any) => void): void;
    /**
     * Bind an event which will be triggered when the user publishes a Tweet (either new, or a reply) through the Tweet Web Intent.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "tweet", callback: (ev: TwitterIntentEvent) => void): void;
    /**
     * Bind an event which will populate the followed user_id in the event object’s data argument.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "follow", callback: (ev: TwitterIntentEvent) => void): void;
    /**
     * Bind an event which will populate the original Tweet that was retweeted’s source_tweet_id in the event object’s data argument.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "retweet", callback: (ev: TwitterIntentEvent) => void): void;
    /**
     * Bind an event which will populate the favorited tweet_id in the event object’s data argument.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "favorite", callback: (ev: TwitterIntentEvent) => void): void;
    /**
     * Bind an event occurs when the user invokes a Web Intent from within an embedded widget.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: "click", callback: (ev: TwitterIntentEvent) => void): void;
    /**
     * Bind an event.
     *
     * @param name The name of an event.
     * @param callback A callback function which will be invoked.
     */
    bind(name: string, callback: (ev: any) => void): void;
}

/**
 * The interface for an object representing the event is passed to your JavaScript callback.
 */
interface TwitterIntentEvent {
    /**
     * The DOM node where the widget is instantiated. Most like an iframe, but may also be the original embed code element if the widget failed to initialize, or another sandboxed element. Use this value to differentiate between different intents or buttons on the same page.
     */
    target: HTMLElement;
    /**
     * Extended detail indicating where in a widget a user clicked. For example, button, count, or screen name portions of Tweet button or Follow button integrations, or tweet actions within embedded Tweets.
     */
    region: string;
    /**
     * Key/value pairs relevant to the Web Intent just actioned.
     */
    data: TwitterIntentEventData;
    /**
     * The type of the event.
     */
    type: string;
}

/**
 * The interface for a data relevants to the Web Intent just actioned.
 */
interface TwitterIntentEventData {
    /**
     * The ID of a Tweet.
     */
    tweet_id?: string;
    /**
     * The ID of a source Tweet.
     */
    source_tweet_id?: string;
    /**
     * The screen_name of a user;
     */
    screen_name?: string;
    /**
     * The ID of a user.
     */
    user_id?: string;
}

declare var twttr: Twitter;
