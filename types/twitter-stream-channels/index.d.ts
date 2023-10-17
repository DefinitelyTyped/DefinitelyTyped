/// <reference types="node" />
/// <reference types="twit" />

declare module "twitter-stream-channels" {
    import * as Twit from "twit";
    import { EventEmitter } from "events";

    namespace TwitterStreamChannels {
        export namespace StreamChannels {
            export interface Channels {
            }

            export interface StreamChannelsOptions {
                track?: {} | undefined;
                follow?: string | undefined;
                locations?: string | undefined;
                enableChannelsEvents?: boolean | undefined;
                enableRootChannelsEvent?: boolean | undefined;
                enableKeywordsEvents?: boolean | undefined;
            }
        }

        export class StreamChannels extends EventEmitter {
            /**
             * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L25
             */
            constructor(apiClient: Twit, options: StreamChannels.StreamChannelsOptions);

            /**
             * Call this function to restart the stream after you called `.stop()` on it.
             *
             * Note: there is no need to call `.start()` to begin streaming. ` TwitterStreamChannels.streamChannels` calls .start() for you.
             * @method start
             * @returns {StreamChannels}
             * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L120
             */
            start(): StreamChannels;

            /**
             * Closes the opened stream with Twitter
             * @method stop
             * @param {object} [options]
             * @param {object} [options.removeAllListeners=false] If true removes all the listeners set on the stream
             * @returns {StreamChannels}
             * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L120
             */
            stop(options?: { removeAllListeners: boolean }): StreamChannels;

            /**
             * Returns your channel description
             * @method getChannels
             * @returns {StreamChannels.channels}
             * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L145
             */
            getChannels(): StreamChannels.Channels;

            /**
             * Returns an array of the keywords you're tracking (duplicates were removed)
             * @method getTrackedKeywords
             * @returns {Array}
             * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L145
             */
            getTrackedKeywords(): Array<string>;

            /**
             * Returns an object key/value - key:your channels - value:the full text search RegExp for the keywords of this channel
             * @method getchannelsKeywordsLowerCasedRegExp
             * @returns {StreamChannels.channels}
             * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/StreamChannels.js#L163
             */
            getChannelsKeywordsLowerCasedRegExp(): StreamChannels.Channels;
        }
    }

    /**
     * @param {object} credentials
     * @param {String} credentials.consumer_key
     * @param {String} credentials.consumer_secret
     * @param {String} credentials.access_token
     * @param {String} credentials.access_token_secret
     * @return {TwitterStreamChannels}
     */

    class TwitterStreamChannels {
        /**
         * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/TwitterStreamChannels.js#L69
         */
        constructor(config: {});

        /**
         * Returns a Twitter API client on which you can do pretty much what you want.
         * More here https://github.com/ttezel/twit
         * @method getApiClient
         * @returns {Twit}
         * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/TwitterStreamChannels.js#L113
         */
        getApiClient(): Twit;

        /**
         * Opens a Twitter Stream and returns you an other one on which you'll be able to attach events for each channels
         * @method streamChannels
         * @param {object} options You can use the same filter options as described in the Twitter stream API for `statuses/filter` https://dev.twitter.com/docs/api/1.1/post/statuses/filter
         * @param {object|Array} options.track Pass an object describing your channels. If you don't want to use channels, you can pass directly an array of keywords.
         * @param {String} [options.follow] A comma separated list of user IDs, indicating the users to return statuses for in the stream
         * @param {String} [options.locations] Specifies a set of bounding boxes to track. More about how to format this parameter here : https://dev.twitter.com/docs/streaming-apis/parameters#locations
         * @param {Boolean} [options.enableChannelsEvents=true] If true, will fire the events like 'channels/channelName'
         * @param {Boolean} [options.enableRootChannelsEvent=true] If true, will fire the event 'channels'
         * @param {Boolean} [options.enableKeywordsEvents=false] If true, will fire the events 'keywords/keywordName' (disabled by default)
         * @return {StreamChannels}
         * @see https://github.com/topheman/twitter-stream-channels/blob/master/lib/TwitterStreamChannels.js#L131
         */
        streamChannels(
            options: TwitterStreamChannels.StreamChannels.StreamChannelsOptions,
        ): TwitterStreamChannels.StreamChannels;
    }

    export = TwitterStreamChannels;
}
