// Type definitions for non-npm package facebook-instant-games 6.3
// Project: https://developers.facebook.com/docs/games/instant-games
// Definitions by: Menushka Weeratunga <https://github.com/menushka>,
//                 Øyvind Johansen Amundrud <https://github.com/oyvindjam>,
//                 Liana Pigeot <https://github.com/nialna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Top level namespace for the Instant Games SDK.
 */
declare namespace FBInstant {
    /**
     * Contains functions and properties related to the current player.
     */
    let player: Player;

    /**
     * Contains functions and properties related to the current game context.
     */
    let context: Context;

    /**
     * Contains functions and properties related to payments and purchases of game products.
     */
    let payments: Payments;

    /**
     * The current locale. Use this to determine what language the current game should be localized with.
     * The value will not be accurate until FBInstant.startGameAsync() resolves.
     *
     * @returns The current locale.
     */
    function getLocale(): string | null;

    /**
     * The platform on which the game is currently running. The value will always be null until FBInstant.initializeAsync() resolves.
     */
    function getPlatform(): Platform | null;

    /**
     * The string representation of this SDK version.
     *
     * @returns The SDK version.
     */
    function getSDKVersion(): string;

    /**
     * Initializes the SDK library. This should be called before any other SDK functions.
     *
     * @returns A promise that resolves when the SDK is ready to use.
     * @throws INVALID_OPERATION
     */
    function initializeAsync(): Promise<void>;

    /**
     * Report the game's initial loading progress.
     *
     * @param percentage A number between 0 and 100.
     */
    function setLoadingProgress(percentage: number): void;

    /**
     * Provides a list of API functions that are supported by the client.
     *
     * @returns List of API functions that the client explicitly supports.
     */
    function getSupportedAPIs(): string[];

    /**
     * Returns any data object associated with the entry point that the game was launched from.
     *
     * The contents of the object are developer-defined, and can occur from entry points on different platforms.
     * This will return null for older mobile clients, as well as when there is no data associated with the particular entry point.
     *
     * @returns Data associated with the current entry point.
     */
    function getEntryPointData(): any;

    /**
     * Returns the entry point that the game was launched from.
     * This function should be called after FBInstant.startGameAsync() resolves.
     *
     * @returns The name of the entry point from which the user started the game.
     */
    function getEntryPointAsync(): Promise<string>;

    /**
     * Sets the data associated with the individual gameplay session for the current context.
     *
     * This function should be called whenever the game would like to update the current session data.
     * This session data may be used to populate a variety of payloads, such as game play webhooks.
     *
     * @param sessionData An arbitrary data object, which must be less than or equal to 1000 characters when stringified.
     */
    function setSessionData(sessionData: any): void;

    /**
     * This indicates that the game has finished initial loading and is ready to start.
     * Context information will be up-to-date when the returned promise resolves.
     *
     * @returns A promise that resolves when the game should start.
     * @throws INVALID_PARAM
     * @throws CLIENT_UNSUPPORTED_OPERATION
     */
    function startGameAsync(): Promise<void>;

    /**
     * This invokes a dialog to let the user share specified content, either as a message in Messenger or as a post on the user's timeline.
     * A blob of data can be attached to the share which every game session launched from the share will be able to access from FBInstant.getEntryPointData().
     * This data must be less than or equal to 1000 characters when stringified. The user may choose to cancel the share action and close the dialog, and the
     * returned promise will resolve when the dialog is closed regardless if the user actually shared the content or not.
     *
     * @param payload Specify what to share. See example for details.
     * @returns A promise that resolves when the share is completed or cancelled.
     * @throws INVALID_PARAM
     * @throws NETWORK_FAILURE
     * @throws PENDING_REQUEST
     * @throws CLIENT_UNSUPPORTED_OPERATION
     * @throws INVALID_OPERATION
     */
    function shareAsync(payload: SharePayload): Promise<void>;

    /**
     * Informs Facebook of an update that occurred in the game. This will temporarily yield control to Facebook and Facebook will decide what to do based on what the update is.
     * The returned promise will resolve/reject when Facebook returns control to the game.
     *
     * @param payload A payload that describes the update.
     * @returns A promise that resolves when Facebook gives control back to the game.
     * @throws INVALID_PARAM
     * @throws PENDING_REQUEST
     * @throws INVALID_OPERATION
     */
    function updateAsync(payload: CustomUpdatePayload | LeaderboardUpdatePayload): Promise<void>;

    /**
     * Request that the client switch to a different Instant Game. The API will reject if the switch fails - else, the client will load the new game.
     *
     * @param appID The Application ID of the Instant Game to switch to. The application must be an Instant Game, and must belong to the same business as the current game.
     * To associate different games with the same business, you can use Business Manager: https://developers.facebook.com/docs/apps/business-manager#update-business.
     * @param data An optional data payload. This will be set as the entrypoint data for the game being switched to. Must be less than or equal to 1000 characters when stringified.
     * @throws USER_INPUT
     * @throws INVALID_PARAM
     * @throws PENDING_REQUEST
     * @throws CLIENT_REQUIRES_UPDATE
     */
    function switchGameAsync(appID: string, data?: any): Promise<void>;

    /**
     * Returns whether or not the user is eligible to have shortcut creation requested.
     *
     * Will return false if createShortcutAsync was already called this session or the user is ineligible for shortcut creation.
     *
     * @returns Promise that resolves with true if the game can request the player create a shortcut to the game, and false otherwise
     * @throws PENDING_REQUEST
     * @throws CLIENT_REQUIRES_UPDATE
     * @throws INVALID_OPERATION
     */
    function canCreateShortcutAsync(): Promise<boolean>;

    /**
     * Prompts the user to create a shortcut to the game if they are eligible to Can only be called once per session. (see canCreateShortcutAsync)
     * @throws USER_INPUT
     * @throws PENDING_REQUEST
     * @throws CLIENT_REQUIRES_UPDATE
     * @throws INVALID_OPERATION
     */
    function createShortcutAsync(): Promise<void>;

    /**
     * Quits the game.
     */
    function quit(): void;

    /**
     * Log an app event with FB Analytics. See https://developers.facebook.com/docs/javascript/reference/v2.8#app_events for more details about FB Analytics.
     *
     * @param eventName Name of the event. Must be 2 to 40 characters, and can only contain '_', '-', ' ', and alphanumeric characters.
     * @param valueToSum An optional numeric value that FB Analytics can calculate a sum with.
     * @param parameters An optional object that can contain up to 25 key-value pairs to be logged with the event. Keys must be 2 to 40 characters,
     * and can only contain '_', '-', ' ', and alphanumeric characters. Values must be less than 100 characters in length.
     * @returns The error if the event failed to log; otherwise returns null.
     */
    function logEvent(eventName: string, valueToSum?: number, parameters?: { [key: string]: string; }): APIError | null;

    /**
     * Set a callback to be fired when a pause event is triggered.
     * @param func A function to call when a pause event occurs.
     */
    function onPause(func: () => void): void;

    /**
     * Attempt to create an instance of interstitial ad. This instance can then be preloaded and presented.
     * @param placementID The placement ID that's been setup in your Audience Network settings.
     * @returns A promise that resolves with a AdInstance, or rejects with a APIError if it couldn't be created.
     * @throws ADS_TOO_MANY_INSTANCES
     * @throws CLIENT_UNSUPPORTED_OPERATION
     */
    function getInterstitialAdAsync(placementID: string): Promise<AdInstance>;

    /**
     * Attempt to create an instance of rewarded video. This instance can then be preloaded and presented.
     * @param placementID The placement ID that's been setup in your Audience Network settings.
     * @returns A promise that resolves with a AdInstance, or rejects with a APIError if it couldn't be created.
     * @throws ADS_TOO_MANY_INSTANCES
     * @throws CLIENT_UNSUPPORTED_OPERATION
     */
    function getRewardedVideoAsync(placementID: string): Promise<AdInstance>;

    /**
     * Attempts to match the current player with other users looking for people to play with. If successful, a new Messenger group
     * thread will be created containing the matched players and the player will be context switched to that thread.
     * The default minimum and maximum number of players in one matched thread are 2 and 20 respectively, depending on how many players
     * are trying to get matched around the same time. The values can be changed in fbapp-config.json. See the
     * [Bundle Config documentation]https://developers.facebook.com/docs/games/instant-games/bundle-config for documentation about fbapp-config.json.
     *
     * @param matchTag Optional extra information about the player used to group them with similar players. Players will only be grouped with other players with exactly the same tag.
     * The tag must only include letters, numbers, and underscores and be 100 characters or less in length.
     * @param switchContextWhenMatched Optional extra parameter that specifies whether the player should be immediately switched to the new context when a match is found.
     * By default this will be false which will mean the player needs explicitly press play after being matched to switch to the new context.
     * @param offlineMatch Optional extra parameter that specifies whether to start a match asynchronously. By default this will be false which means the game will start a match synchronously.
     * @returns A promise that resolves when the player has been added to a group thread and switched into the thread's context.
     * @throws INVALID_PARAM
     * @throws NETWORK_FAILURE
     * @throws USER_INPUT
     * @throws PENDING_REQUEST
     * @throws CLIENT_UNSUPPORTED_OPERATION
     * @throws INVALID_OPERATION
     */
    function matchPlayerAsync(matchTag?: string, switchContextWhenMatched?: boolean, offlineMatch?: boolean): Promise<void>;

    /**
     * Checks if the current player is eligible for the matchPlayerAsync API.
     * @returns  A promise that resolves with true if the player is eligible to match with other players and false otherwise.
     * @throws NETWORK_FAILURE
     * @throws CLIENT_UNSUPPORTED_OPERATION
     */
    function checkCanPlayerMatchAsync(): Promise<boolean>;

    /**
     * Fetch a specific leaderboard belonging to this Instant Game.
     *
     * @param name The name of the leaderboard. Each leaderboard for an Instant Game must have its own distinct name.
     * @returns A promise that resolves with the matching leaderboard, rejecting if one is not found.
     * @throws LEADERBOARD_NOT_FOUND
     * @throws NETWORK_FAILURE
     * @throws CLIENT_UNSUPPORTED_OPERATION
     * @throws INVALID_OPERATION
     * @throws INVALID_PARAM
     */
    function getLeaderboardAsync(name: string): Promise<Leaderboard>;

    /**
     * Posts the player's best score for the session to Facebook.
     * This API should be called whenever the player achieves their best score in a session, preferably at the end of an activity
     * Scores posted using this API should be consistent & comparable across game sessions.
     *
     * @param score An integer value representing the player's best score in a session.
     * @returns void
     */
    function postSessionScore(score: number): void;

    interface Player {
        /**
         * A unique identifier for the player. A Facebook user's player ID will remain constant,
         * and is scoped to a specific game. This means that different games will have different
         * player IDs for the same user. This function should not be called until FBInstant.initializeAsync()
         * has resolved.
         *
         * @returns A unique identifier for the player.
         */
        getID(): string | null;

        /**
         * Fetch the player's unique identifier along with a signature that verifies that the identifier indeed
         * comes from Facebook without being tampered with. This function should not be called until
         * FBInstant.initializeAsync() has resolved.
         *
         * @param requestPayload  A developer-specified payload to include in the signed response.
         * @returns A promise that resolves with a SignedPlayerInfo object.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        getSignedPlayerInfoAsync(requestPayload?: string): Promise<SignedPlayerInfo>;

        /**
         * Returns a promise that resolves with whether the player can subscribe to the game bot or not.
         * Developer can only call subscribeBotAsync() after checking canSubscribeBotAsync(), and the player will
         * only be able to see this bot subscription dialog once for a specific game.
         *
         * @returns Whether a player can subscribe to the game bot or not.
         */
        canSubscribeBotAsync(): Promise<boolean>;

        /**
         * Request that the player subscribe the bot associated to the game. The API will reject if the subscription
         * fails - else, the player will subscribe the game bot.
         *
         * @returns A promise that resolves if player successfully subscribed to the game bot, or rejects if request failed or player chose to not subscribe.
         * @throws INVALID_PARAM
         * @throws PENDING_REQUEST
         * @throws CLIENT_REQUIRES_UPDATE
         */
        subscribeBotAsync(): Promise<void>;

        /**
         * The player's localized display name. This function should not be called until FBInstant.startGameAsync() has resolved.
         *
         * @returns The player's localized display name.
         */
        getName(): string | null;

        /**
         * A url to the player's public profile photo. The photo will always be a square, and with dimensions of at least 200x200.
         * When rendering it in the game, the exact dimensions should never be assumed to be constant. It's recommended to always
         * scale the image to a desired size before rendering. The value will always be null until FBInstant.startGameAsync() resolves.
         *
         * WARNING: Due to CORS, using these photos in the game canvas can cause it to be tainted, which will prevent the canvas data from being extracted.
         * To prevent this, set the cross-origin attribute of the images you use to 'anonymous'.
         *
         * @returns Url to the player's public profile photo.
         */
        getPhoto(): string | null;

        /**
         * Retrieve data from the designated cloud storage of the current player.
         *
         * @param keys An array of unique keys to retrieve data for.
         * @returns A promise that resolves with an object which contains the current key-value pairs for each key specified in the input array, if they exist.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        getDataAsync(keys: string[]): Promise<DataObject>;

        /**
         * Set data to be saved to the designated cloud storage of the current player. The game can store up to 1MB of data for each unique player.
         *
         * @param data An object containing a set of key-value pairs that should be persisted to cloud storage. The object must contain only serializable
         * values - any non-serializable values will cause the entire modification to be rejected.
         * @returns A promise that resolves when the input values are set. NOTE: The promise resolving does not necessarily mean that the input has already been persisted.
         * Rather, it means that the data was valid and has been scheduled to be saved. It also guarantees that all values that were set are now available in player.getDataAsync.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        setDataAsync(data: DataObject): Promise<void>;

        /**
         * Immediately flushes any changes to the player data to the designated cloud storage. This function is expensive, and should primarily be
         * used for critical changes where persistence needs to be immediate and known by the game. Non-critical changes should rely on the platform
         * to persist them in the background. NOTE: Calls to player.setDataAsync will be rejected while this function's result is pending.
         *
         * @returns  A promise that resolves when changes have been persisted successfully, and rejects if the save fails.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        flushDataAsync(): Promise<void>;

        /**
         * Retrieve stats from the designated cloud storage of the current player.
         *
         * @param keys An optional array of unique keys to retrieve stats for. If the function is called without it, it will fetch all stats.
         * @returns A promise that resolves with an object which contains the current key-value pairs for each key specified in the input array, if they exist.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        getStatsAsync(keys?: string[]): Promise<StatsObject>;

        /**
         * Set stats to be saved to the designated cloud storage of the current player.
         *
         * @param stats An object containing a set of key-value pairs that should be persisted to cloud storage as stats, which can be surfaced or used in a
         * variety of ways to benefit player engagement.The object must contain only numerical values - any non-numerical values will cause the entire modification to be rejected.
         * @returns A promise that resolves when the input values are set. NOTE: The promise resolving does not necessarily mean that the input has already been persisted.
         * Rather, it means that the data was validated and has been scheduled to be saved. It also guarantees that all values that were set are now available in player.getStatsAsync.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        setStatsAsync(stats: StatsObject): Promise<void>;

        /**
         * Increment stats saved in the designated cloud storage of the current player.
         *
         * @param increments An object containing a set of key-value pairs indicating how much to increment each stat in cloud storage.
         * The object must contain only numerical values - any non-numerical values will cause the entire modification to be rejected.
         * @returns A promise that resolves with an object which contains the updated key-value pairs for each key specified in the input dictionary.
         * NOTE: The promise resolving does not necessarily mean that the changes have already been persisted. Rather, it means that the increments were
         * valid and have been scheduled to be performed. It also guarantees that all values that were incremented are now available in player.getStatsAsync.
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        incrementStatsAsync(increments: IncrementObject): Promise<StatsObject>;

        /**
         * Fetches an array of ConnectedPlayer objects containing information about players that are connected to the current player.
         * @returns A promise that resolves with a list of connected player objects. NOTE: This promise will not resolve until FBInstant.startGameAsync() has resolved.
         * @throws NETWORK_FAILURE
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        getConnectedPlayersAsync(): Promise<ConnectedPlayer[]>;
    }

    interface Context {
        /**
         * A unique identifier for the current game context. This represents a specific context that the game is being played in
         * (for example, a particular messenger conversation or facebook post). The identifier will be null if game is being played in
         * a solo context. This function should not be called until FBInstant.startGameAsync has resolved.
         *
         * @returns A unique identifier for the current game context.
         */
        getID(): string | null;

        /**
         * The type of the current game context. POST - A facebook post. THREAD - A messenger thread.
         * GROUP - A facebook group. SOLO - Default context, where the player is the only participant.
         * This function should not be called until FBInstant.startGameAsync has resolved.
         *
         * @returns Type of the current game context
         */
        getType(): Type;

        /**
         * This function determines whether the number of participants in the current game context is between a given minimum and maximum, inclusive.
         * If one of the bounds is null only the other bound will be checked against. It will always return the original result for the first call made in
         * a context in a given game play session. Subsequent calls, regardless of arguments, will return the answer to the original query until a context
         * change occurs and the query result is reset. This function should not be called until FBInstant.startGameAsync has resolved.
         * This will be null if one or both of the supplied arguments are not valid, if we do not have a size available for the current context,
         * or if the API is called before startGameAsync() resolves.
         *
         * @param minSize The minimum bound of the context size query.
         * @param maxSize The maximum bound of the context size query.
         * @returns ContextSizeResponse
         */
        isSizeBetween(minSize?: number, maxSize?: number): ContextSizeResponse | null;

        /**
         * Request a switch into a specific context. If the player does not have permission to enter that context,
         * or if the player does not provide permission for the game to enter that context,
         * this will reject. Otherwise, the promise will resolve when the game has switched into the specified context.
         *
         * @param id ID of the desired context.
         * @returns A promise that resolves when the game has switched into the specified context, or rejects otherwise.
         * @throws INVALID_PARAM
         * @throws SAME_CONTEXT
         * @throws NETWORK_FAILURE
         * @throws USER_INPUT
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        switchAsync(id: string): Promise<void>;

        /**
         * Opens a context selection dialog for the player. If the player selects an available context, the client will attempt to switch into that context,
         * and resolve if successful. Otherwise, if the player exits the menu or the client fails to switch into the new context, this function will reject.
         *
         * @param options An object specifying conditions on the contexts that should be offered.
         * @returns A promise that resolves when the game has switched into the context chosen by the user. Otherwise, the promise will reject (if the user cancels out of the dialog, for example).
         * @throws INVALID_PARAM
         * @throws SAME_CONTEXT
         * @throws NETWORK_FAILURE
         * @throws USER_INPUT
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        chooseAsync(options?: ContextOptions): Promise<void>;

        /**
         * Attempts to create or switch into a context between a specified player and the current player. The returned promise will reject if the player listed is not a Connected Player of the current
         * player or if the player does not provide permission to enter the new context. Otherwise, the promise will resolve when the game has switched into the new context.
         *
         * @param playerID ID of the player
         * @returns A promise that resolves when the game has switched into the new context, or rejects otherwise.
         * @throws INVALID_PARAM
         * @throws SAME_CONTEXT
         * @throws NETWORK_FAILURE
         * @throws USER_INPUT
         * @throws PENDING_REQUEST
         * @throws CLIENT_UNSUPPORTED_OPERATION
         */
        createAsync(playerID: string): Promise<void>;

        /**
         * Gets an array of ContextPlayer objects containing information about active players — people who actively played the game in the current context in the last 90 days.
         * This may include the current player.
         * @throws NETWORK_FAILURE
         * @throws CLIENT_UNSUPPORTED_OPERATION
         * @throws INVALID_OPERATION
         */
        getPlayersAsync(): Promise<ContextPlayer[]>;
    }

    /**
     * An Instant Game leaderboard
     */
    interface Leaderboard {
        /**
         * The name of the leaderboard.
         */
        getName(): string;

        /**
         * The ID of the context that the leaderboard is associated with, or null if the leaderboard is not tied to a particular context.
         */
        getContextID(): string | null;

        /**
         * Fetches the total number of player entries in the leaderboard.
         *
         * @returns  A unique identifier for the player.
         * @throws NETWORK_FAILURE
         * @throws RATE_LIMITED
         */
        getEntryCountAsync(): Promise<number>;

        /**
         * Updates the player's score. If the player has an existing score, the old score will only be replaced if the new score is better than it.
         * NOTE: If the leaderboard is associated with a specific context, the game must be in that context to set a score for the player.
         *
         * @param score The new score for the player. Must be a 64-bit integer number.
         * @param extraData Metadata to associate with the stored score. Must be less than 2KB in size.
         * @returns Resolves with the current leaderboard entry for the player after the update.
         * @throws LEADERBOARD_WRONG_CONTEXT
         * @throws NETWORK_FAILURE
         * @throws INVALID_PARAM
         * @throws INVALID_OPERATION
         * @throws RATE_LIMITED
         */
        setScoreAsync(score: number, extraData?: string): Promise<LeaderboardEntry>;

        /**
         * Retrieves the leaderboard's entry for the current player, or null if the player has not set one yet.
         *
         * @returns Resolves with the current leaderboard entry for the player.
         * @throws NETWORK_FAILURE
         * @throws INVALID_OPERATION
         * @throws RATE_LIMITED
         */
        getPlayerEntryAsync(): Promise<LeaderboardEntry | null>;

        /**
         * Retrieves a set of leaderboard entries, ordered by score ranking in the leaderboard.
         *
         * @param count The number of entries to attempt to fetch from the leaderboard. Defaults to 10 if not specified. Up to a maximum of 100 entries may be fetched per query.
         * @param offset The offset from the top of the leaderboard that entries will be fetched from.
         * @returns Resolves with the leaderboard entries that match the query.
         * @throws NETWORK_FAILURE
         * @throws RATE_LIMITED
         */
        getEntriesAsync(count: number, offset: number): Promise<LeaderboardEntry[]>;

        /**
         * Retrieves the leaderboard score entries of the current player's connected players (including the current player), ordered by local rank within the set of connected players.
         * @param count  The number of entries to attempt to fetch from the leaderboard. Defaults to 10 if not specified. Currently, up to a maximum of 100 entries may be fetched per query.
         * @param offset The offset from the set of ordered connected player score entries to fetch from.
         * @returns Resolves with the leaderboard entries that match the query.
         */
        getConnectedPlayerEntriesAsync(count: number, offset: number): Promise<LeaderboardEntry[]>;
    }

    /**
     * A score entry for an Instant Game leaderboard
     */
    interface LeaderboardEntry {
        /**
         * Gets the score associated with the entry.
         * @returns Returns an integer score value.
         */
        getScore(): number;

        /**
         * Gets the score associated with the entry, formatted with the score format associated with the leaderboard.
         * @returns Returns a formatted score.
         */
        getFormattedScore(): string;

        /**
         * Gets the timestamp of when the leaderboard entry was last updated.
         * @returns Returns a Unix timestamp.
         */
        getTimestamp(): number;

        /**
         * Gets the rank of the player's score in the leaderboard
         * @returns Returns the entry's leaderboard ranking.
         */
        getRank(): number;

        /**
         * Gets the developer-specified payload associated with the score, or null if one was not set.
         * @returns An optional developer-specified payload associated with the score.
         */
        getExtraData(): string | null;

        /**
         * Gets information about the player associated with the entry.
         */
        getPlayer(): LeaderboardPlayer;
    }

    /**
     * Details about the player associated with a score entry.
     */
    interface LeaderboardPlayer {
        /**
         * Gets the player's localized display name.
         *
         * @returns The player's localized display name.
         */
        getName(): string;

        /**
         * Returns a url to the player's public profile photo.
         *
         * @returns Url to the player's public profile photo.
         */
        getPhoto(): string | null;

        /**
         * Gets the game's unique identifier for the player.
         *
         * @returns The game-scoped identifier for the player.
         */
        getID(): string | null;
    }

    /**
     * Represents information about a player who is connected to the current player.
     */
    interface ConnectedPlayer {
        /**
         * Get the id of the connected player.
         *
         * @returns The ID of the connected player
         */
        getID(): string;

        /**
         * Get the player's full name.
         *
         * @returns The player's full name
         */
        getName(): string | null;

        /**
         * Get the player's public profile photo.
         *
         * @returns A url to the player's public profile photo
         */
        getPhoto(): string | null;
    }

    /**
     * Represents information about the player along with a signature to verify that it indeed comes from Facebook.
     */
    interface SignedPlayerInfo {
        /**
         * Get the id of the player.
         * @returns The ID of the player
         */
        getPlayerID(): string;

        /**
         * A signature to verify this object indeed comes from Facebook. The string is base64url encoded and signed with an HMAC version of your App Secret,
         * based on the OAuth 2.0 spec.
         *
         * You can validate it with the following 4 steps:
         *
         * Split the signature into two parts delimited by the '.' character.
         *
         * Decode the first part (the encoded signature) with base64url encoding.
         *
         * Decode the second part (the response payload) with base64url encoding, which should be a string representation of a JSON object that has the following fields:
         * ** algorithm - always equals to HMAC-SHA256
         * ** issued_at - a unix timestamp of when this response was issued.
         * ** player_id - unique identifier of the player.
         * ** request_payload - the requestPayload string you specified when calling FBInstant.player.getSignedPlayerInfoAsync.
         *
         * Hash the whole response payload string using HMAC SHA-256 and your app secret and confirm that it is equal to the encoded signature.
         *
         * You may also wish to validate the issued_at timestamp in the response payload to ensure the request was made recently.
         *
         * Signature validation should only happen on your server. Never do it on the client side as it will compromise your app secret key.
         *
         * @returns The signature string.
         */
        getSignature(): string;
    }

    /**
     * Represents information about a player who is in the context that the current player is playing in.
     */
    interface ContextPlayer {
        /**
         * Get the id of the context player.
         *
         * @returns The ID of the context player
         */
        getID(): string;

        /**
         * Get the player's localized display name.
         *
         * @returns The player's localized display name.
         */
        getName(): string | null;

        /**
         * Get the player's public profile photo.
         *
         * @returns A url to the player's public profile photo
         */
        getPhoto(): string | null;
    }

    /**
     * Represents an instance of an ad.
     */
    interface AdInstance {
        /**
         * Return the Audience Network placement ID of this ad instance.
         */
        getPlacementID(): string;

        /**
         * Preload the ad. The returned promise resolves when the preload completes, and rejects if it failed.
         * @throws ADS_FREQUENT_LOAD
         * @throws ADS_NO_FILL
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         */
        loadAsync(): Promise<void>;

        /**
         * Present the ad. The returned promise resolves when user finished watching the ad, and rejects if it failed to present or was closed during the ad.
         * @throws ADS_NOT_LOADED
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws INVALID_OPERATION
         */
        showAsync(): Promise<void>;
    }

    interface Payments {
        /**
         * Fetches the game's product catalog.
         *
         * @returns The set of products that are registered to the game.
         * @throws CLIENT_UNSUPPORTED_OPERATION
         * @throws PAYMENTS_NOT_INITIALIZED
         * @throws NETWORK_FAILURE
         */
        getCatalogAsync(): Promise<Product[]>;

        /**
         * Begins the purchase flow for a specific product. Will immediately reject if called before FBInstant.startGameAsync() has resolved.
         *
         * @param purchaseConfig The purchase's configuration details.
         * @returns A Promise that resolves when the product is successfully purchased by the player. Otherwise, it rejects.
         * @throws CLIENT_UNSUPPORTED_OPERATION
         * @throws PAYMENTS_NOT_INITIALIZED
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         * @throws INVALID_OPERATION
         */
        purchaseAsync(purchaseConfig: PurchaseConfig): Promise<Purchase>;

        /**
         * Fetches all of the player's unconsumed purchases. As a best practice, the game should fetch the current player's purchases
         * as soon as the client indicates that it is ready to perform payments-related operations. The game can then process and consume
         * any purchases that are waiting to be consumed.
         *
         * @returns The set of purchases that the player has made for the game.
         * @throws CLIENT_UNSUPPORTED_OPERATION
         * @throws PAYMENTS_NOT_INITIALIZED
         * @throws NETWORK_FAILURE
         */
        getPurchasesAsync(): Promise<Purchase[]>;

        /**
         * Consumes a specific purchase belonging to the current player. Before provisioning a product's effects to the player,
         * the game should request the consumption of the purchased product. Once the purchase is successfully consumed, the game
         * should immediately provide the player with the effects of their purchase.
         *
         * @param purchaseToken The purchase token of the purchase that should be consumed.
         * @throws CLIENT_UNSUPPORTED_OPERATION
         * @throws PAYMENTS_NOT_INITIALIZED
         * @throws INVALID_PARAM
         * @throws NETWORK_FAILURE
         */
        consumePurchaseAsync(purchaseToken: string): Promise<void>;

        /**
         * Sets a callback to be triggered when Payments operations are available.
         * @param callback The callback function to be executed when Payments are available.
         */
        onReady(callback: () => void): void;
    }

    /**
     * Represents a game's product information.
     */
    interface Product {
        /**
         * The title of the product
         */
        title: string;

        /**
         * The product's game-specified identifier
         */
        productID: string;

        /**
         * The product description
         */
        description?: string;

        /**
         * A link to the product's associated image
         */
        imageURI?: string;

        /**
         * The price of the product
         */
        price: string;

        /**
         * The currency code for the product
         */
        priceCurrencyCode: string;
    }

    /**
     * The answer field is true if the current context size is between the minSize and maxSize values that are specified in the object, and false otherwise.
     */
    interface ContextSizeResponse {
        answer: boolean;
        minSize?: number;
        maxSize?: number;
    }

    /**
     * Represents an individual purchase of a game product.
     */
    interface Purchase {
        /**
         * A developer-specified string, provided during the purchase of the product
         */
        developerPayload?: string;

        /**
         * The identifier for the purchase transaction
         */
        paymentID: string;

        /**
         *  The product's game-specified identifier
         */
        productID: string;

        /**
         * Unix timestamp of when the purchase occurred
         */
        purchaseTime: string;

        /**
         *  A token representing the purchase that may be used to consume the purchase
         */
        purchaseToken: string;

        /**
         *  Server-signed encoding of the purchase request
         */
        signedRequest: SignedPurchaseRequest;
    }

    interface ContextOptions {
        /**
         * The set of filters to apply to the context suggestions.
         */
        filters?: ContextFilter[];

        /**
         * The maximum number of participants that a suggested context should ideally have.
         */
        maxSize?: number;

        /**
         * The minimum number of participants that a suggested context should ideally have.
         */
        minSize?: number;
    }

    /**
     * Represents content to be shared by the user.
     */
    interface SharePayload {
        /**
         * Indicates the intent of the share.
         */
        intent: Intent;

        /**
         * A base64 encoded image to be shared.
         */
        image: string;

        /**
         * A text message to be shared.
         */
        text: string;

        /**
         * A blob of data to attach to the share. All game sessions launched from the share will be able to access this blob through FBInstant.getEntryPointData().
         */
        data?: any;
    }

    /**
     * An API Error returned by the Instant Games SDK
     */
    interface APIError {
        /**
         * The relevant error code
         */
        code: ErrorCodeType;
        /**
         * A message describing the error
         */
        message: string;
    }

    /**
     * The configuration of a purchase request for a product registered to the game.
     */
    interface PurchaseConfig {
        /**
         * The identifier of the product to purchase
         */
        productID: string;

        /**
         * An optional developer-specified payload, to be included in the returned purchase's signed request.
         */
        developerPayload?: string;
    }

    /**
     * Represents a custom update for FBInstant.updateAsync.
     */
    interface CustomUpdatePayload {
        /**
         * For custom updates, this should be 'CUSTOM'.
         */
        action: UpdateAction;

        /**
         * ID of the template this custom update is using. Templates should be predefined in fbapp-config.json.
         * See the [Bundle Config documentation]https://developers.facebook.com/docs/games/instant-games/bundle-config
         * or documentation about fbapp-config.json.
         */
        template: string;

        /**
         * Optional call-to-action button text. By default we will use a localized 'Play' as the button text. To provide localized
         * versions of your own call to action, pass an object with the default cta as the value of 'default' and another object mapping
         * locale keys to translations as the value of 'localizations'.
         */
        cta?: (string | LocalizableContent);

        /**
         * Data URL of a base64 encoded image.
         */
        image: string;

        /**
         * A text message, or an object with the default text as the value of 'default' and another object mapping locale keys to
         * translations as the value of 'localizations'.
         */
        text: (string | LocalizableContent);

        /**
         * A blob of data to attach to the update. All game sessions launched from the update will be able to access this blob
         * through FBInstant.getEntryPointData(). Must be less than or equal to 1000 characters when stringified.
         */
        data?: any;

        /**
         * Specifies how the update should be delivered. This can be one of the following:
         *
         * 'IMMEDIATE' - The update should be posted immediately.
         *
         * 'LAST' - The update should be posted when the game session ends. The most recent update sent using the 'LAST' strategy will be the one sent.
         *
         * 'IMMEDIATE_CLEAR' - The update is posted immediately, and clears any other pending updates (such as those sent with the 'LAST' strategy).
         *
         * If no strategy is specified, we default to 'IMMEDIATE'.
         */
        strategy?: string;

        /**
         * Specifies notification setting for the custom update. This can be 'NO_PUSH' or 'PUSH', and defaults to 'NO_PUSH'.
         * Use push notification only for updates that are high-signal and immediately actionable for the recipients.
         * Also note that push notification is not always guaranteed, depending on user setting and platform policies.
         */
        notification?: string;
    }

    /**
     * Represents a leaderboard update for FBInstant.updateAsync.
     */
    interface LeaderboardUpdatePayload {
        /**
         * For a leaderboard update, this should be 'LEADERBOARD'. text. By default we will use a localized 'Play Now' as the button text.
         */
        action: UpdateAction;

        /**
         * The name of the leaderboard to feature in the update.
         */
        name: string;

        /**
         * Optional text message. If not specified, a localized fallback message will be provided instead.
         */
        text?: string;
    }

    /**
     * Represents a string with localizations and a default value to fall back on.
     */
    interface LocalizableContent {
        /**
         * The default value of the string to use if the viewer's locale is not a key in the localizations object.
         */
        default: string;
        /**
         *  Specifies what string to use for viewers in each locale. See https://origincache.facebook.com/developers/resources/?id=FacebookLocales.xml for a complete list of supported locale values.
         */
        localizations: LocalizationsDict;
    }

    interface DataObject { [ key: string ]: any; }

    interface StatsObject { [ key: string ]: number; }

    interface IncrementObject { [ key: string ]: number; }

    /**
     * Represents a mapping from locales to translations of a given string. Each property is an optional five-character Facebook locale code of the form xx_XX.
     * See https://origincache.facebook.com/developers/resources/?id=FacebookLocales.xml for a complete list of supported locale codes.
     */
    interface LocalizationsDict {
        [x: string]: string;
    }

    type SignedPurchaseRequest = string;

    /**
     * A filter that may be applied to a Context Choose operation
     * 'NEW_CONTEXT_ONLY' - Prefer to only surface contexts the game has not been played in before.
     * 'INCLUDE_EXISTING_CHALLENGES' - Include the "Existing Challenges" section, which surfaces actively played-in contexts that the player is a part of.
     * 'NEW_PLAYERS_ONLY' - In sections containing individuals, prefer people who have not played the game.
     */
    type ContextFilter = "NEW_CONTEXT_ONLY" | "INCLUDE_EXISTING_CHALLENGES" | "NEW_PLAYERS_ONLY";

    /**
     * Represents the type of the update action to perform.
     *
     * "CUSTOM": A custom update, with all content specified by the game.
     * "LEADERBOARD": An update associated with an Instant Game leaderboard.
     */
    type UpdateAction = "CUSTOM" | "LEADERBOARD";

    /**
     * Represents the current platform that the user is playing on.
     */
    type Platform = "IOS" | "ANDROID" | "WEB" | "MOBILE_WEB";

    type Type = "POST" | "THREAD" | "GROUP" | "SOLO";

    type Intent = "INVITE" | "REQUEST" | "CHALLENGE" | "SHARE";

    type ErrorCodeType = "ADS_FREQUENT_LOAD" |
        "ADS_NO_FILL" |
        "ADS_NOT_LOADED" |
        "ADS_TOO_MANY_INSTANCES" |
        "ANALYTICS_POST_EXCEPTION" |
        "CLIENT_REQUIRES_UPDATE" |
        "CLIENT_UNSUPPORTED_OPERATION" |
        "INVALID_OPERATION" |
        "INVALID_PARAM" |
        "LEADERBOARD_NOT_FOUND" |
        "LEADERBOARD_WRONG_CONTEXT" |
        "NETWORK_FAILURE" |
        "PENDING_REQUEST" |
        "RATE_LIMITED" |
        "SAME_CONTEXT" |
        "UNKNOWN" |
        "USER_INPUT";
}
