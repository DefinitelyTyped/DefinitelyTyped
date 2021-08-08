// Type definitions for steam-user 4.19
// Project: https://github.com/DoctorMcKay/node-steam-user
// Definitions by: vanitasboi <https://github.com/vanitasboi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2
// Enums generated from JS by: https://github.com/vanitasboi/JStoTSenum

/// <reference types="node" />

import type SteamID = require('steamid');
import type ByteBuffer = require('bytebuffer');
import EventEmitter = require('events');
import SteamChatRoomClient = require('./components/chatroom');

export = SteamUser;

declare class SteamUser extends EventEmitter {
    constructor(options?: Options);

    /**
     * Formats a currency value and returns a string
     */
    static formatCurrency(amount: number, currency: SteamUser.ECurrencyCode): string;

    // PROPERTIES
    /**
     * Use this object to chat with friends and chat rooms.
     */
    chat: SteamChatRoomClient;

    /**
     * `null` if not connected, a `SteamID` containing your SteamID otherwise.
     */
    steamID: SteamID | null;

    /**
     * An object containing options for this `SteamUser`. Read-only; use `setOption` or `setOptions` to change an option.
     */
    readonly options: Options;

    /**
     * Only defined if you're currently logged on. This is your public IP as reported by Steam, in "x.x.x.x" format.
     */
    publicIP: string;

    /**
     * Only defined if you're currently logged on. This is your cell (region ID) on the Steam network.
     */
    cellID: number;

    /**
     * Only defined if you're currently logged on. This is your vanity URL (the part that goes after `/id/` in your profile URL). Falsy if you don't have one.
     */
    vanityURL: string | null;

    /**
     * An object containing information about your account. `null` until `accountInfo` is emitted.
     */
    accountInfo: AccountInfo | null;

    /**
     * An object containing information about your account's email address. `null` until `emailInfo` is emitted.
     */
    emailInfo: { adress: string; validated: boolean } | null;

    /**
     * An object containing information about your account's limitations. `null` until `accountLimitations` is emitted.
     */
    limitations: AccountLimitations | null;

    /**
     * An object containing information about your account's VAC bans. `null` until `vacBans` is emitted.
     */
    vac: { numBans: number; appids: number[] } | null;

    /**
     * An object containing information about your Steam Wallet. `null` until `wallet` is emitted.
     */
    wallet: { hasWallet: boolean; currency: SteamUser.ECurrencyCode; balance: number } | null;

    /**
     * An array containing license data for the packages which your Steam account owns. `null` until `licenses` is emitted.
     */
    licenses: Array<Record<string, any>>;

    /**
     * An array containing gifts and guest passes you've received but haven't accepted (to your library or to your inventory) or declined. `null` until `gifts` is emitted.
     */
    gifts: Gift[];

    /**
     * An object containing persona data about all Steam users we've encountered or requested data for.
     * Key are 64-bit SteamIDs, and values are identical to the objects received in the user event.
     * This property may not be updated unless you set your instance to online.
     */
    users: Record<string, any>;

    /**
     * An object containing information about all Steam groups we've encountered.
     * Keys are 64-bit SteamIDs, and values are identical to those received in the group event.
     * This property may not be updated unless you set your instance to online.
     */
    groups: Record<string, any>;

    /**
     * An object containing information about all legacy chat rooms we're in. Keys are 64-bit SteamIDs.
     */
    chats: Record<string, Chat>;

    /**
     * An object whose keys are 64-bit SteamIDs, and whose values are values from the `EFriendRelationship` enum.
     * When we get unfriended, instead of setting the value to `EFriendRelationship.None`, the key is deleted from the object entirely.
     * This isn't populated after logon until `friendsList` is emitted.
     */
    myFriends: Record<string, SteamUser.EFriendRelationship>;

    /**
     * An object whose keys are 64-bit SteamIDs, and whose values are from the `EClanRelationship` enum.
     * When we leave a group, instead of setting the value to `EClanRelationship.None`, the key is deleted from the object entirely.
     * This isn't populated after logon until `groupList` is emitted.
     */
    myGroups: Record<string, SteamUser.EClanRelationship>;

    /**
     * An object containing your friend groups (in the official client, these are called tags). Keys are numeric group IDs.
     */
    myFriendGroups: Record<string, { name: string; members: SteamID[] }>;

    /**
     * An object containing the nicknames you have assigned to other users.
     * Keys are numeric 64-bit SteamIDs, properties are strings containing that user's nickname.
     * This is empty until `nicknameList` is emitted.
     */
    myNicknames: Record<string, string>;

    /**
     * An object containing cached data about known apps and packages. Only useful if the `enablePicsCache` option is `true`.
     */
    picsCache: { changenumber: number; apps: Record<string, any>; packages: Record<string, any> };

    /**
     * Contains the name of this package. This allows other modules to verify interoperability.
     */
    packageName: 'steam-user';

    /**
     * Contains the version of this package. For example, "4.2.0". This allows other modules to verify interoperability.
     */
    packageVersion: string;

    // EVENTS
    on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    once<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    off<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    removeListener<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    removeAllListeners(event?: keyof Events): this;

    /**
     * Set a configuration option.
     * @param option
     * @param value
     */
    setOption(option: keyof Options, value: any): void;

    /**
     * Set one or more configuration options
     * @param options
     */
    setOptions(options: Options): void;

    /**
     * Set a sentry file
     * @param sentry Binary Sentry File
     */
    setSentry(sentry: Buffer | null): void;

    logOn(details?: LogOnDetailsAnon | LogOnDetailsNamePass | LogOnDetailsNameKey | LogOnDetailsNameToken): void;

    /**
     * Log off of Steam gracefully.
     */
    logOff(): void;

    relog(): void;

    webLogOn(): void;

    requestValidationEmail(callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Start the process to enable TOTP two-factor authentication for your account
     * @param [callback] - Called when an activation SMS has been sent.
     */
    enableTwoFactor(callback?: (err: Error | null, response: Record<string, any>) => void): Promise<Record<string, any>>;

    /**
     * Finalize the process of enabling TOTP two-factor authentication
     * @param secret - Your shared secret
     * @param activationCode - The activation code you got in your email
     * @param [callback] - Called with a single Error argument, or null on success
     */
    finalizeTwoFactor(secret: Buffer, activationCode: string, callback?: (err: Error | null) => void): Promise<void>;

    getSteamGuardDetails(callback?: (
        err: Error | null,
        canTrade: boolean,
        isSteamGuardEnabled: boolean,
        timestampSteamGuardEnabled: Date | null,
        timestampMachineSteamGuardEnabled: Date | null,
        isTwoFactorEnabled: boolean,
        timestampTwoFactorEnabled: Date | null,
        isPhoneVerified: boolean,
        ) => void,
    ): Promise<SteamGuardDetails>;

    getCredentialChangeTimes(callback?: (
        err: Error | null,
        timestampLastPasswordChange: Date | null,
        timestampLastPasswordReset: Date | null,
        timestampLastEmailChange: Date | null,
        ) => void,
    ): Promise<CredentialChangeTimes>;

    getAuthSecret(callback?: (err: Error | null, secretID: number, key: Buffer) => void): Promise<AuthSecret>;

    /**
     * Get your account's profile privacy settings.
     * @param [callback]
     */
    getPrivacySettings(callback?: (err: Error | null, response: PrivacySettings) => void): Promise<PrivacySettings>;

    /**
     * Kick any other session logged into your account which is playing a game from Steam.
     * @param [callback] - Single err parameter
     */
    kickPlayingSession(callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Tell Steam that you're "playing" zero or more games.
     * @param apps - Array of integers (AppIDs) or strings (non-Steam game names) for the games you're playing. Empty to play nothing.
     * @param [force=false] If true, kick any other sessions logged into this account and playing games from Steam
     */
    gamesPlayed(apps: number | string | PlayedGame | Array<number | string | PlayedGame>, force?: boolean): void;

    /**
     * Get count of people playing a Steam app. Use appid 0 to get number of people connected to Steam.
     * @param appid
     * @param [callback] - Args (eresult, player count)
     */
    getPlayerCount(appid: number, callback?: (err: Error | null, playerCount: number) => void): Promise<{ playerCount: number }>;

    /**
     * Query the GMS for a list of game server IPs, and their current player counts.
     * @param conditions - A filter string (https://mckay.media/hEW8A) or object
     * @param [callback]
     */
    serverQuery(conditions: ServerQueryConditions | string, callback?: (err: Error | null, servers: ServerQueryResponse) => void): Promise<ServerQueryResponse>;

    /**
     * Get a list of servers including game data.
     * @param filter - A filter string (https://mckay.media/hEW8A)
     * @param [callback]
     */
    getServerList(filter: string, limit?: number, callback?: (err: Error | null, servers: Server) => void): Promise<Server>;

    /**
     * Get the associated SteamIDs for given server IPs.
     * @param ips
     * @param [callback]
     */
    getServerSteamIDsByIP(ips: string[], callback?: (err: Error | null, servers: Record<string, SteamID>) => void): Promise<{ servers: Record<string, SteamID> }>;

    /**
     * Get the associated IPs for given server SteamIDs.
     * @param steamids
     * @param [callback]
     */
    getServerIPsBySteamID(steamids: Array<SteamID | string>, callback?: (err: Error | null, servers: Record<string, string>) => void): Promise<{ servers: Record<string, string> }>;

    /**
     * Get a list of apps or packages which have changed since a particular changenumber.
     * @param sinceChangenumber - Changenumber to get changes since. Use 0 to get the latest changenumber, but nothing else
     * @param [callback] - Args (current changenumber, array of appids that changed, array of packageids that changed)
     */
    getProductChanges(sinceChangenumber: number, callback?: (
        err: Error | null,
        currentChangenumber: number,
        appChanges: AppChanges,
        packageChanges: PackageChanges,
        ) => void,
    ): Promise<ProductChanges>;

    /**
     * Get info about some apps and/or packages from Steam.
     * @param apps - Array of AppIDs. May be empty. May also contain objects with keys {appid, access_token}
     * @param packages - Array of package IDs. May be empty. May also contain objects with keys {packageid, access_token}
     * @param [inclTokens=false] - If true, automatically retrieve access tokens if needed
     * @param [callback] - Args (array of app data, array of package data, array of appids that don't exist, array of packageids that don't exist)
     * @param [requestType] - Don't touch
     */
    getProductInfo(apps: Array<number | App>, packages: Array<number | Package>, inclTokens?: boolean, callback?: (
        err: Error | null,
        apps: AppInfo,
        packages: PackageInfo,
        unknownApps: number[],
        unknownPackages: number[],
        ) => void,
    ): Promise<ProductInfo>;

    /**
     * Get access tokens for some apps and/or packages
     * @param apps - Array of appids
     * @param packages - Array of packageids
     * @param [callback] - First arg is an object of (appid => access token), second is the same for packages, third is array of appids for which tokens are denied, fourth is the same for packages
     */
    getProductAccessToken(apps: number[], packages: number[], callback?: (
        err: Error | null,
        appTokens: Record<string, string>,
        packageTokens: Record<string, string>,
        appDeniedTokens: number[],
        packageDeniedTokens: number[],
        ) => void,
    ): Promise<ProductAccessTokens>;

    /**
     * Get list of appids this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
     */
    getOwnedApps(excludeSharedLicenses?: boolean): number[];

    /**
     * Check if this account owns an app. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param appid
     * @param [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
     */
    ownsApp(appid: number, excludeSharedLicenses?: boolean): boolean;

    /**
     * has been emitted.
     * @param [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
     */
    getOwnedDepots(excludeSharedLicenses?: boolean): number[];

    /**
     * Check if this account owns a depot. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param depotid
     * @param [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
     */
    ownsDepot(depotid: number, excludeSharedLicenses?: boolean): boolean;

    /**
     * has been emitted.
     * @param [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
     */
    getOwnedPackages(excludeSharedLicenses?: boolean): number[];

    /**
     * Check if this account owns a package. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param packageid
     * @param [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
     */
    ownsPackage(packageid: number, excludeSharedLicenses?: boolean): boolean;

    /**
     * Get the localized names for given store tags.
     * @param language - The full name of the language you're interested in, e.g. "english" or "spanish"
     * @param tagIDs - The IDs of the tags you're interested in
     * @param [callback]
     */
    getStoreTagNames(language: string, tagIDs: number[], callback?: (err: Error | null, tags: StoreTagNames) => void): Promise<{ tags: StoreTagNames }>;

    /**
     * Get details for some UGC files.
     * @param ids
     * @param [callback]
     */
    getPublishedFileDetails(ids: number | number[], callback?: (err: Error | null, files: PublishedFileDetails) => void): Promise<PublishedFileDetails>;

    /**
     * Remove a friend from your friends list (or decline an invitiation)
     * @param steamID - Either a SteamID object of the user to remove, or a string which can parse into one.
     */
    removeFriend(steamID: SteamID | string): void;

    /**
     * Set your persona online state and optionally name.
     * @param state - Your new online state
     * @param [name] - Optional. Set a new profile name.
     */
    setPersona(state: SteamUser.EPersonaState, name?: string): void;

    /**
     * Set your current UI mode (displays next to your Steam online status in friends)
     * @param mode - Your new UI mode
     */
    setUIMode(mode: SteamUser.EClientUIMode): void;

    /**
     * Send (or accept) a friend invitiation.
     * @param steamID - Either a SteamID object of the user to add, or a string which can parse into one.
     * @param [callback] - Optional. Called with `err` and `name` parameters on completion.
     */
    addFriend(steamID: SteamID | string, callback?: (err: Error | null, personaName: string) => void): Promise<{ personaName: string }>;

    /**
     * Block all communication with a user.
     * @param steamID - Either a SteamID object of the user to block, or a string which can parse into one.
     * @param [callback] - Optional. Called with an `err` parameter on completion.
     */
    blockUser(steamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Unblock all communication with a user.
     * @param steamID - Either a SteamID object of the user to unblock, or a string which can parse into one.
     * @param [callback] - Optional. Called with an `err` parameter on completion.
     */
    unblockUser(steamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Create a new quick-invite link that can be used by any Steam user to directly add you as a friend.
     * @param [options]
     * @param [callback]
     */
    createQuickInviteLink(options?: CreateQuickInviteLinkOptions, callback?: (err: Error | null, response: QuickInviteLink) => void): Promise<QuickInviteLink>;

    /**
     * Get a list of friend quick-invite links for your account.
     * @param [callback]
     */
    listQuickInviteLinks(callback?: (err: Error | null, response: QuickInviteLink[]) => void): Promise<QuickInviteLink[]>;

    /**
     * Revoke an active quick-invite link.
     * @param linkOrToken - Either the full link, or just the token from the link
     * @param [callback]
     */
    revokeQuickInviteLink(linkOrToken: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Get the SteamID to whom a quick-invite link belongs.
     * @param link
     */
    getQuickInviteLinkSteamID(link: string): SteamID | null;

    /**
     * Check whether a given quick-invite link is valid.
     * @param link
     * @param [callback]
     */
    checkQuickInviteLinkValidity(link: string, callback?: (err: Error | null, response: QuickInviteLinkValidity) => void): Promise<QuickInviteLinkValidity>;

    /**
     * Redeem a quick-invite link and add the sender to your friends list.
     * @param link
     * @param [callback]
     */
    redeemQuickInviteLink(link: string, callback?: (err: Error | null) => void): Promise<any>;

    /**
     * Requests information about one or more user profiles.
     * @param steamids - An array of SteamID objects or strings which can parse into them.
     * @param [callback] - Optional. Called with `err`, and an object whose keys are 64-bit SteamIDs as strings, and whose values are persona objects.
     */
    getPersonas(steamids: Array<SteamID | string>, callback?: (
        err: Error | null,
        personas: Record<string, any>,
        ) => void
    ): Promise<{ personas: Record<string, any> }>; // maybe specify the response further?

    /**
     * Upload some rich presence data to Steam.
     * @param appid
     * @param richPresence
     */
    uploadRichPresence(appid: number, richPresence: Record<string, string>): void;

    /**
     * Get the localization keys for rich presence for an app on Steam.
     * @param appID - The app you want rich presence localizations for
     * @param [language] - The full name of the language you want localizations for (e.g. "english" or "spanish"); defaults to language passed to constructor
     * @param [callback]
     */
    getAppRichPresenceLocalization(appID: number, language: string, callback?: (
        err: Error | null,
        response: { tokens: Record<string, string> },
        ) => void
    ): Promise<{ tokens: Record<string, string> }>;

    /**
     * Request rich presence data of one or more users for an appid.
     * @param appid - The appid to get rich presence data for
     * @param steamIDs - SteamIDs of users to request rich presence data for
     * @param [language] - Language to get localized strings in. Defaults to language passed to constructor.
     * @param [callback] - Called or resolved with 'users' property with each key being a SteamID and value being the rich presence response if received
     */
    requestRichPresence(appid: number, steamIDs: Array<SteamID | string>, language: string, callback?: (
        err: Error | null,
        response: { users: Record<string, { richPresence: RichPresence; localizedString: string | null }> },
        ) => void
    ): Promise<{ users: Record<string, { richPresence: RichPresence; localizedString: string | null }> }>;

    /**
     * Gets the Steam Level of one or more Steam users.
     * @param steamids - An array of SteamID objects, or strings which can parse into one.
     * @param [callback] - Called on completion with `err`, and an object whose keys are 64-bit SteamIDs as strings, and whose values are Steam Level numbers.
     */
    getSteamLevels(steamids: Array<SteamID | string>, callback?: (err: Error | null, users: Record<string, number>) => void): Promise<Record<string, number>>;

    /**
     * Get persona name history for one or more users.
     * @param userSteamIDs - SteamIDs of users to request aliases for
     * @param [callback]
     */
    getAliases(userSteamIDs: Array<SteamID | string>, callback?: (
        err: Error | null,
        users: Record<string, { name: string; name_since: Date }>,
        ) => void
    ): Promise<Record<string, { name: string; name_since: Date }>>;

    /**
     * Get the list of nicknames you've given to other users.
     * @param [callback]
     */
    getNicknames(callback?: (err: Error | null, nicknames: Record<string, string>) => void): Promise<{ nicknames: Record<string, string> }>;

    /**
     * Set a friend's private nickname.
     * @param steamID
     * @param nickname
     * @param [callback]
     */
    setNickname(steamID: SteamID | string, nickname: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Get the level of your game badge (and also your Steam level).
     * @param appid - AppID of game in question
     * @param [callback]
     */
    getGameBadgeLevel(appid: number, callback?: (
        err: Error | null,
        steamLevel?: number,
        regularBadgeLevel?: number,
        foilBadgeLavel?: number,
        ) => void
    ): Promise<{ steamLevel: number; regularBadgeLevel: number; foilBadgeLavel: number }>;

    /**
     * Get the list of a user's owned apps.
     * @param steamID - Either a SteamID object or a string that can parse into one
     * @param [options]
     * @param [callback]
     */
    getUserOwnedApps(steamID: SteamID | string, options?: GetUserOwnedAppsOptions, callback?: (
        err: Error | null,
        response: UserOwnedApps,
        ) => void
    ): Promise<UserOwnedApps>;

    /**
     * Get a listing of profile items you own.
     * @param [options]
     * @param [callback]
     */
    getOwnedProfileItems(options?: { language: string }, callback?: (
        err: Error | null,
        response: ProfileItems,
        ) => void
    ): Promise<ProfileItems>;

    /**
     * Get a user's equipped profile items.
     * @param steamID - Either a SteamID object or a string that can parse into one
     * @param [options]
     * @param [callback]
     */
    getEquippedProfileItems(steamID: SteamID | string, options?: { language: string }, callback?: (
        err: Error | null,
        response: ProfileItems,
        ) => void
    ): Promise<ProfileItems>;

    /**
     * Change your current profile background.
     * @param backgroundAssetID
     * @param [callback]
     */
    setProfileBackground(backgroundAssetID: number, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Invites a user to a Steam group. Only send group invites in response to a user's request; sending automated group
     * invites is a violation of the Steam Subscriber Agreement and can get you banned.
     * @param userSteamID - The SteamID of the user you're inviting as a SteamID object, or a string that can parse into one
     * @param groupSteamID - The SteamID of the group you're inviting the user to as a SteamID object, or a string that can parse into one
     */
    inviteToGroup(usersteamID: SteamID | string, groupsteamID: SteamID | string): void;

    /**
     * Respond to an incoming group invite.
     * @param groupSteamID - The group you were invited to, as a SteamID object or a string which can parse into one
     * @param accept - true to join the group, false to ignore invitation
     */
    respondToGroupInvite(groupsteamID: SteamID | string, accept: boolean): void;

    /**
     * Creates a friends group (or tag)
     * @param groupName - The name to create the friends group with
     * @param [callback]
     */
    createFriendsGroup(groupName: string, callback?: (err: Error | null, groupID: number) => void): Promise<{ groupID: number }>;

    /**
     * Deletes a friends group (or tag)
     * @param groupID - The friends group id
     * @param [callback]
     */
    deleteFriendsGroup(groupID: number, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Rename a friends group (tag)
     * @param groupID - The friends group id
     * @param newName - The new name to update the friends group with
     * @param [callback]
     */
    renameFriendsGroup(groupID: number, newName: string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Add an user to friends group (tag)
     * @param groupID - The friends group
     * @param userSteamID - The user to invite to the friends group with, as a SteamID object or a string which can parse into one
     * @param [callback]
     */
    addFriendToGroup(groupID: number, userSteamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Remove an user to friends group (tag)
     * @param groupID - The friends group
     * @param userSteamID - The user to remove from the friends group with, as a SteamID object or a string which can parse into one
     * @param [callback]
     */
    removeFriendFromGroup(groupID: any, usersteamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    trade(steamID: SteamID | string): void;

    cancelTradeRequest(steamID: SteamID | string): void;

    /**
     * Get the list of currently-available content servers.
     * @param language
     * @param appid
     * @param classes
     * @param [callback]
     */
    getAssetClassInfo(language: string, appid: number, classes: Array<{ classid: number, instanceid?: number }>, callback?: (
        err: Error | null,
        descriptions: Array<Record<string, any>>,
        ) => void
    ): Promise<{ descriptions: Array<Record<string, any>> }>;

    /**
     * Gets your account's trade URL.
     * @param [callback]
     */
    getTradeURL(callback?: (err: Error | null, response: TradeURL) => void): Promise<TradeURL>;

    /**
     * Makes a new trade URL for your account.
     * @param [callback]
     */
    changeTradeURL(callback?: (err: Error | null, response: TradeURL) => void): Promise<TradeURL>;

    /**
     * Gets the list of emoticons your account can use.
     * @param [callback]
     */
    getEmoticonList(callback?: (err: Error | null, response: { emoticons: Record<string, Emoticon> }) => void): Promise<{ emoticons: Record<string, Emoticon> }>;

    /**
     * Redeem a product code on this account.
     * @param key
     * @param [callback] - Args (eresult value, SteamUser.EPurchaseResult value, object of (packageid => package names)
     */
    redeemKey(key: string, callback?: (
        err: Error | null,
        purchaseResultDetails: SteamUser.EPurchaseResult,
        packageList: Record<string, string>,
        ) => void
    ): Promise<{ purchaseResultDetails: SteamUser.EPurchaseResult; packageList: Record<string, string> }>;

    /**
     * Request licenses for one or more free-on-demand apps.
     * @param appIDs
     * @param [callback] - Args (err, array of granted packageids, array of granted appids)
     */
    requestFreeLicense(appIDs: number[], callback?: (
        err: Error | null,
        grantedPackageIds: number[],
        grantedAppIds: number[],
        ) => void
    ): Promise< { grantedPackageIds: number[]; grantedAppIds: number[] }>;

    /**
     * Request an encrypted appticket for a particular app. The app must be set up on the Steam backend for encrypted apptickets.
     * @param appid - The Steam AppID of the app you want a ticket for
     * @param [userData] - If the app expects some "user data", provide it here
     * @param [callback] - First argument is "err", second is the ticket as a Buffer (on success)
     */
    getEncryptedAppTicket(appid: number, userData?: Buffer, callback?: (err: Error | null, encryptedAppTicket: Buffer) => void): Promise<{ encryptedAppTicket: Buffer }>;

    //#region "GC INTERACTION"
    // https://github.com/DoctorMcKay/node-steam-user/wiki/Game-Coordinator

    /**
     * Send a message to a GC. You should be currently "in-game" for the specified app for the message to make it.
     * @param appid - The ID of the app you want to send a GC message to
     * @param msgType - The GC-specific msg ID for this message
     * @param protoBufHeader - An object (can be empty) containing the protobuf header for this message, or null if this is not a protobuf message.
     * @param payload
     * @param [callback] - If this is a job-based message, pass a function here to get the response
     */
    sendToGC(appid: number, msgType: number, protoBufHeader: Record<string, any> | null, payload: Buffer | ByteBuffer, callback?: (
        appid: number,
        msgType: number,
        payload: Buffer,
    ) => void): void;
    //#endregion "GC INTERACTION"

    //#region "FAMILY SHARING"
    // https://github.com/DoctorMcKay/node-steam-user/wiki/Family-Sharing
    /**
     * Add new borrowers.
     * @param borrowersSteamID
     * @param  [callback]
     */
    addAuthorizedBorrowers(borrowersSteamID: Array<SteamID | string> | SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Remove borrowers.
     * @param borrowersSteamID
     * @param [callback]
     */
    removeAuthorizedBorrowers(borrowerssteamID: Array<SteamID | string>, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Retrieve a list of Steam accounts authorized to borrow your library.
     * @param [options]
     * @param [callback]
     */
    getAuthorizedBorrowers(options?: { includeCanceled?: boolean, includePending ?: boolean }, callback?: (
        err: Error | null,
        response: { borrowers: Borrowers[] },
        ) => void
    ): Promise< { borrowers: Borrowers[] } >;

    /**
     * Get a list of devices we have authorized.
     * @param [options]
     * @param [callback]
     */
    getAuthorizedSharingDevices(options?: { includeCancelled?: boolean }, callback?: (
        err: Error | null,
        response: { devices: Device[] }
        ) => void
    ): Promise< { devices: Device[] } >;

    /**
     * Authorize local device for library sharing.
     * @param deviceName
     * @param [callback]
     */
    authorizeLocalSharingDevice(deviceName: string, callback?: (
        err: Error | null, response: { deviceToken: string }) => void
    ): Promise< { deviceToken: string } >;

    /**
     * Deauthorize a device from family sharing.
     * @param deviceToken
     * @param [callback]
     */
    deauthorizeSharingDevice(deviceToken: string | { deviceToken: string }, callback?: (err: Error | null) => void): Promise<void>;

    /**
     * Use local device authorizations to allow usage of shared licenses.
     * If successful, `licenses` will be emitted with the newly-acquired licenses.
     * @param ownerSteamID
     * @param deviceToken
     */
    activateSharingAuthorization(ownerSteamID: SteamID | string, deviceToken: string | { deviceToken: string }): void;

    /**
     * Deactivate family sharing authorizations. Removes shared licenses.
     */
    deactivateSharingAuthorization(): void;
    //#endregion "FAMILY SHARING"
}

declare namespace SteamUser {
    const EAccountFlags: typeof import('./enums/EAccountFlags');
    const EAccountType: typeof import('./enums/EAccountType');
    const EActivationCodeClass: typeof import('./enums/EActivationCodeClass');
    const EAppAssociationType: typeof import('./enums/EAppAssociationType');
    const EAppControllerSupportLevel: typeof import('./enums/EAppControllerSupportLevel');
    const EAppInfoSection: typeof import('./enums/EAppInfoSection');
    const EAppType: typeof import('./enums/EAppType');
    const EAppUsageEvent: typeof import('./enums/EAppUsageEvent');
    const EAudioFormat: typeof import('./enums/EAudioFormat');
    const EAuthSessionResponse: typeof import('./enums/EAuthSessionResponse');
    const EBillingType: typeof import('./enums/EBillingType');
    const EBroadcastChatPermission: typeof import('./enums/EBroadcastChatPermission');
    const EBroadcastWatchLocation: typeof import('./enums/EBroadcastWatchLocation');
    const EChatAction: typeof import('./enums/EChatAction');
    const EChatActionResult: typeof import('./enums/EChatActionResult');
    const EChatEntryType: typeof import('./enums/EChatEntryType');
    const EChatFlags: typeof import('./enums/EChatFlags');
    const EChatInfoType: typeof import('./enums/EChatInfoType');
    const EChatMemberStateChange: typeof import('./enums/EChatMemberStateChange');
    const EChatPermission: typeof import('./enums/EChatPermission');
    const EChatRoomEnterResponse: typeof import('./enums/EChatRoomEnterResponse');
    const EChatRoomGroupAction: typeof import('./enums/EChatRoomGroupAction');
    const EChatRoomGroupPermissions: typeof import('./enums/EChatRoomGroupPermissions');
    const EChatRoomGroupRank: typeof import('./enums/EChatRoomGroupRank');
    const EChatRoomGroupType: typeof import('./enums/EChatRoomGroupType');
    const EChatRoomJoinState: typeof import('./enums/EChatRoomJoinState');
    const EChatRoomMemberStateChange: typeof import('./enums/EChatRoomMemberStateChange');
    const EChatRoomNotificationLevel: typeof import('./enums/EChatRoomNotificationLevel');
    const EChatRoomServerMessage: typeof import('./enums/EChatRoomServerMessage');
    const EChatRoomServerMsg: typeof import('./enums/EChatRoomServerMsg');
    const EChatRoomType: typeof import('./enums/EChatRoomType');
    const EClanPermission: typeof import('./enums/EClanPermission');
    const EClanRank: typeof import('./enums/EClanRank');
    const EClanRelationship: typeof import('./enums/EClanRelationship');
    const EClientPersonaStateFlag: typeof import('./enums/EClientPersonaStateFlag');
    const EClientStat: typeof import('./enums/EClientStat');
    const EClientStatAggregateMethod: typeof import('./enums/EClientStatAggregateMethod');
    const EContentDeltaChunkDataLocation: typeof import('./enums/EContentDeltaChunkDataLocation');
    const EContentDownloadSourceType: typeof import('./enums/EContentDownloadSourceType');
    const EControllerElementType: typeof import('./enums/EControllerElementType');
    const EControllerLayoutType: typeof import('./enums/EControllerLayoutType');
    const ECurrencyCode: typeof import('./enums/ECurrencyCode');
    const EDenyReason: typeof import('./enums/EDenyReason');
    const EDepotFileFlag: typeof import('./enums/EDepotFileFlag');
    const EDisplayStatus: typeof import('./enums/EDisplayStatus');
    const EDRMBlobDownloadErrorDetail: typeof import('./enums/EDRMBlobDownloadErrorDetail');
    const EDRMBlobDownloadType: typeof import('./enums/EDRMBlobDownloadType');
    const EEconTradeResponse: typeof import('./enums/EEconTradeResponse');
    const EExternalAccountType: typeof import('./enums/EExternalAccountType');
    const EFrameAccumulatedStat: typeof import('./enums/EFrameAccumulatedStat');
    const EFriendFlags: typeof import('./enums/EFriendFlags');
    const EFriendRelationship: typeof import('./enums/EFriendRelationship');
    const EGameSearchAction: typeof import('./enums/EGameSearchAction');
    const EGameSearchResult: typeof import('./enums/EGameSearchResult');
    const EHIDDeviceDisconnectMethod: typeof import('./enums/EHIDDeviceDisconnectMethod');
    const EHIDDeviceLocation: typeof import('./enums/EHIDDeviceLocation');
    const EInputMode: typeof import('./enums/EInputMode');
    const EInternalAccountType: typeof import('./enums/EInternalAccountType');
    const EIntroducerRouting: typeof import('./enums/EIntroducerRouting');
    const EJSRegisterMethodType: typeof import('./enums/EJSRegisterMethodType');
    const EKeyEscrowUsage: typeof import('./enums/EKeyEscrowUsage');
    const ELauncherType: typeof import('./enums/ELauncherType');
    const ELeaderboardDataRequest: typeof import('./enums/ELeaderboardDataRequest');
    const ELeaderboardDisplayType: typeof import('./enums/ELeaderboardDisplayType');
    const ELeaderboardSortMethod: typeof import('./enums/ELeaderboardSortMethod');
    const ELeaderboardUploadScoreMethod: typeof import('./enums/ELeaderboardUploadScoreMethod');
    const ELicenseFlags: typeof import('./enums/ELicenseFlags');
    const ELicenseType: typeof import('./enums/ELicenseType');
    const ELobbyComparison: typeof import('./enums/ELobbyComparison');
    const ELobbyFilterType: typeof import('./enums/ELobbyFilterType');
    const ELobbyStatus: typeof import('./enums/ELobbyStatus');
    const ELobbyType: typeof import('./enums/ELobbyType');
    const ELogFileType: typeof import('./enums/ELogFileType');
    const EMarketingMessageFlags: typeof import('./enums/EMarketingMessageFlags');
    const EMMSLobbyStatus: typeof import('./enums/EMMSLobbyStatus');
    const EMouseMode: typeof import('./enums/EMouseMode');
    const EMsg: typeof import('./enums/EMsg');
    const EMsgClanAccountFlags: typeof import('./enums/EMsgClanAccountFlags');
    const ENewsUpdateType: typeof import('./enums/ENewsUpdateType');
    const ENotificationSetting: typeof import('./enums/ENotificationSetting');
    const EOSType: typeof import('./enums/EOSType');
    const EPackageStatus: typeof import('./enums/EPackageStatus');
    const EPaymentMethod: typeof import('./enums/EPaymentMethod');
    const EPersonaState: typeof import('./enums/EPersonaState');
    const EPersonaStateFlag: typeof import('./enums/EPersonaStateFlag');
    const EPlatformType: typeof import('./enums/EPlatformType');
    const EProtoAppType: typeof import('./enums/EProtoAppType');
    const EProtoClanEventType: typeof import('./enums/EProtoClanEventType');
    const EProtoExecutionSite: typeof import('./enums/EProtoExecutionSite');
    const EPublishedFileForSaleStatus: typeof import('./enums/EPublishedFileForSaleStatus');
    const EPublishedFileInappropriateProvider: typeof import('./enums/EPublishedFileInappropriateProvider');
    const EPublishedFileInappropriateResult: typeof import('./enums/EPublishedFileInappropriateResult');
    const EPublishedFileQueryType: typeof import('./enums/EPublishedFileQueryType');
    const EPublishedFileRevision: typeof import('./enums/EPublishedFileRevision');
    const EPublishedFileVisibility: typeof import('./enums/EPublishedFileVisibility');
    const EPurchaseResultDetail: typeof import('./enums/EPurchaseResultDetail');
    const ERegionCode: typeof import('./enums/ERegionCode');
    const ERemoteClientBroadcastMsg: typeof import('./enums/ERemoteClientBroadcastMsg');
    const ERemoteClientService: typeof import('./enums/ERemoteClientService');
    const ERemoteDeviceAuthorizationResult: typeof import('./enums/ERemoteDeviceAuthorizationResult');
    const ERemoteDeviceStreamingResult: typeof import('./enums/ERemoteDeviceStreamingResult');
    const ERemoteStoragePlatform: typeof import('./enums/ERemoteStoragePlatform');
    const EResult: typeof import('./enums/EResult');
    const EServerFlags: typeof import('./enums/EServerFlags');
    const EServerType: typeof import('./enums/EServerType');
    const ESteamDatagramMsgID: typeof import('./enums/ESteamDatagramMsgID');
    const ESteamNetworkingSocketsCipher: typeof import('./enums/ESteamNetworkingSocketsCipher');
    const ESteamNetworkingUDPMsgID: typeof import('./enums/ESteamNetworkingUDPMsgID');
    const ESteamPipeOperationType: typeof import('./enums/ESteamPipeOperationType');
    const ESteamPipeWorkType: typeof import('./enums/ESteamPipeWorkType');
    const ESteamReviewScore: typeof import('./enums/ESteamReviewScore');
    const EStreamActivity: typeof import('./enums/EStreamActivity');
    const EStreamAudioCodec: typeof import('./enums/EStreamAudioCodec');
    const EStreamBitrate: typeof import('./enums/EStreamBitrate');
    const EStreamChannel: typeof import('./enums/EStreamChannel');
    const EStreamControlMessage: typeof import('./enums/EStreamControlMessage');
    const EStreamDataMessage: typeof import('./enums/EStreamDataMessage');
    const EStreamDeviceFormFactor: typeof import('./enums/EStreamDeviceFormFactor');
    const EStreamDiscoveryMessage: typeof import('./enums/EStreamDiscoveryMessage');
    const EStreamFrameEvent: typeof import('./enums/EStreamFrameEvent');
    const EStreamFramerateLimiter: typeof import('./enums/EStreamFramerateLimiter');
    const EStreamFrameResult: typeof import('./enums/EStreamFrameResult');
    const EStreamGamepadInputType: typeof import('./enums/EStreamGamepadInputType');
    const EStreamHostPlayAudioPreference: typeof import('./enums/EStreamHostPlayAudioPreference');
    const EStreamingDataType: typeof import('./enums/EStreamingDataType');
    const EStreamInterface: typeof import('./enums/EStreamInterface');
    const EStreamMouseButton: typeof import('./enums/EStreamMouseButton');
    const EStreamMouseWheelDirection: typeof import('./enums/EStreamMouseWheelDirection');
    const EStreamP2PScope: typeof import('./enums/EStreamP2PScope');
    const EStreamQualityPreference: typeof import('./enums/EStreamQualityPreference');
    const EStreamStatsMessage: typeof import('./enums/EStreamStatsMessage');
    const EStreamTransport: typeof import('./enums/EStreamTransport');
    const EStreamVersion: typeof import('./enums/EStreamVersion');
    const EStreamVideoCodec: typeof import('./enums/EStreamVideoCodec');
    const ESystemIMType: typeof import('./enums/ESystemIMType');
    const ETradeOfferConfirmationMethod: typeof import('./enums/ETradeOfferConfirmationMethod');
    const ETradeOfferState: typeof import('./enums/ETradeOfferState');
    const EUCMFilePrivacyState: typeof import('./enums/EUCMFilePrivacyState');
    const EUdpPacketType: typeof import('./enums/EUdpPacketType');
    const EUniverse: typeof import('./enums/EUniverse');
    const EUserReviewScorePreference: typeof import('./enums/EUserReviewScorePreference');
    const EValveIndexComponent: typeof import('./enums/EValveIndexComponent');
    const EVideoFormat: typeof import('./enums/EVideoFormat');
    const EVoiceCallState: typeof import('./enums/EVoiceCallState');
    const EWorkshopEnumerationType: typeof import('./enums/EWorkshopEnumerationType');
    const EWorkshopFileAction: typeof import('./enums/EWorkshopFileAction');
    const EWorkshopFileType: typeof import('./enums/EWorkshopFileType');
    const E_STAR_GlyphWriteResult: typeof import('./enums/E_STAR_GlyphWriteResult');
    // from resources
    const EClientUIMode: typeof import('./resources/EClientUIMode');
    const EConnectionProtocol: typeof import('./resources/EConnectionProtocol');
    const EMachineIDType: typeof import('./resources/EMachineIDType');
    const EPrivacyState: typeof import('./resources/EPrivacyState');
    const EPurchaseResult: typeof import('./resources/EPurchaseResult');
}

//#region "Events"
interface Events {
    appLaunched: [appid: number];
    appQuit: [appid: number];
    receivedFromGC: [appid: number, msgType: number, payload: Buffer];
    loggedOn: [details: Record<string, any>, parental: Record<string, any>];
    steamGuard: [domain: string | null, callback: (code: string) => void, lastCodeWrong: boolean];
    error: [err: Error];
    disconnected: [eresult: SteamUser.EResult, msg?: string];
    sentry: [sentry: Buffer];
    webSession: [sessionID: string, cookies: string[]];
    loginKey: [key: string];
    newItems: [count: number];
    newComments: [count: number, myItems: number, discussions: number];
    tradeOffers: [count: number];
    communityMessages: [count: number];
    offlineMessages: [count: number, friends: SteamID[]];
    vanityURL: [url: string];
    accountInfo: [name: string, country: string, authedMachines: number, flags: SteamUser.EAccountFlags, facebookID: string, facebookName: string];
    emailInfo: [adress: string, validated: boolean];
    accountLimitations: [limited: boolean, communityBanned: boolean, locked: boolean, canInviteFriends: boolean];
    vacBans: [numBans: number, appids: number[]];
    wallet: [hasWallet: boolean, currency: SteamUser.ECurrencyCode, balance: number];
    licenses: [licenses: Array<Record<string, any>>];
    gifts: [gifts: Gift[]];
    appOwnershipCached: [];
    changelist: [changenumber: number, apps: number[], packages: number[]];
    appUpdate: [appid: number, data: ProductInfo];
    packageUpdate: [appid: number, data: ProductInfo];
    marketingMessages: [timestamp: Date, messages: Array<{ id: string; url: string; flags: number }>];
    tradeRequest: [steamID: SteamID, respond: (accept: boolean) => void];
    tradeResponse: [steamID: SteamID, response: SteamUser.EEconTradeResponse, restrictions: TradeRestrictions];
    tradeStarted: [steamID: SteamID];
    playingState: [blocked: boolean, playingApp: number];
    user: [sid: SteamID, user: Record<string, any>];
    group: [sid: SteamID, group: Record<string, any>];
    groupEvent: [sid: SteamID, headline: string, date: Date, gid: number | string, gameID: number]; // not sure
    groupAnnouncement: [sid: SteamID, headline: string, gid: number | string]; // not sure
    friendRelationShip: [sid: SteamID, relationship: SteamUser.EFriendRelationship];
    groupRelationShip: [sid: SteamID, relationship: SteamUser.EClanRelationship];
    friendsList: [];
    friendPersonasLoad: [];
    groupList: [];
    friendsGroupList: [groups: Record<string, { name: string; members: SteamID[] }>];
    nicknameList: [];
    nickname: [steamID: SteamID, newNickname: string | null];
    lobbyInvite: [inviterID: SteamID, lobbyID: SteamID];
}
//#endregion "Events"

//#region "Helper Types"
type RegionCode = 0x00 | 0x01| 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0xFF; // https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Region_codes
//#endregion "Helper Types"

//#region "Response Types"
type StoreTagNames = Record<string, {name: string, englishName: string}>;
type PublishedFileDetails = Record<string, Record<string, any>>;
//#endregion "Response Types"

//#region "General Interfaces"
interface Options {
    localPort?: number | null;
    protocol?: SteamUser.EConnectionProtocol;
	httpProxy?: string | null;
	localAddress?: string | null;
	autoRelogin?: boolean;
	singleSentryfile?: boolean;
	machineIdType?: SteamUser.EMachineIDType;
	machineIdFormat?: [string, string, string];
	enablePicsCache?: boolean;
	language?: string;
	picsCacheAll?: boolean;
	changelistUpdateInterval?: number;
	saveAppTickets?: boolean;
	additionalHeaders?: Record<string, string>;
	webCompatibilityMode?: boolean;
}

interface CreateQuickInviteLinkOptions {
    inviteLimit?: number;
    inviteDuration?: number | null;
}

interface PlayedGame {
    game_id: number;
    game_extra_info: string;
}

interface ServerQueryConditions {
    app_id?: number;
    geo_location_ip?: string;
    region_code?: RegionCode;
    filter_text?: string; // https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter
    max_servers?: number;
}

interface AppChanges {
    appid: number;
    change_number: number;
    needs_token: boolean;
}

interface PackageChanges {
    packageid: number;
    change_number: number;
    needs_token: boolean;
}

interface App {
    appid: number;
    access_token: string;
}

interface Package {
    packageid: number;
    access_token: string;
}

interface AppInfo {
    changenumber: number;
    missingToken: boolean;
    appinfo: Record<string, any>; // too complex to describe
}

interface PackageInfo {
    changenumber: number;
    missingToken: boolean;
    packageinfo: Record<string, any>; // too complex to describe
}

interface RichPresence {
    status: string;
    version: string;
    time?: string;
    'game:state': string;
    steam_display: string;
    connect: string;
}

interface OwnedApp {
    appid: number;
    name: string;
    playtime_2weeks: number | null;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
}

interface GetUserOwnedAppsOptions {
    includePlayedFreeGames?: boolean;
    filterAppids?: number[];
    includeFreeSub?: boolean;
}

interface ProfileItem {
    communityitemid: number;
    image_small: string | null;
    image_large: string | null;
    name: string;
    item_title: string;
    item_description: string;
    appid: number;
    item_type: unknown; // could be improved
    item_class: unknown; // could be improved
    movie_webm: string;
    movie_mp4: string;
    equipped_flags: unknown; // could be improved
}

interface Emoticon {
    name: string;
    count: number;
    time_last_used: Date | null;
    use_count: number;
    time_received: Date | null;
}

interface Borrowers {
    steamid: SteamID;
    isPending: boolean;
    isCanceled: boolean;
    timeCreated: Date;
}

interface Device {
    deviceToken: string;
    deviceName: string;
    isPending: boolean;
    isCanceled: boolean;
    isLimited: boolean;
    lastTimeUsed: Date | null;
    lastBorrower: SteamID | null;
    lastAppPlayed: Date | null;
}

interface AccountInfo {
    name: string;
    country: string;
    authedMachines: number;
    flags: SteamUser.EAccountFlags;
    facebookID: string;
    facebookName: string;
}

interface AccountLimitations {
    limited: boolean;
    communityBanned: boolean;
    locked: boolean;
    canInviteFriends: boolean;
}

interface Gift {
    gid: string;
    packageid: number;
    TimeCreated: Date;
    TimeExpiration: Date;
    TimeSent: Date;
    TimeAcked: Date;
    TimeRedeemed: null; // appears to always be null
    RecipientAddress: ''; // appears to alway be ''
    SenderAddress: ''; // appears to alway be ''
    SenderName: string;
}

interface Chat {
    name: string | null;
    private: boolean;
    invisibleToFriends: boolean;
    officersOnlyChat: boolean;
    unjoinable: boolean;
    members: {
        rank: SteamUser.EClanRank;
        permissions: SteamUser.EChatPermission;
    };
}

interface TradeRestrictions {
    steamguardRequiredDays?: number;
    newDeviceCooldownDays?: number;
    defaultPasswordResetProbationDays?: number;
    passwordResetProbationDays?: number;
    defaultEmailChangeProbationDays?: number;
    emailChangeProbationDays?: number;
}
//#endregion "General Interfaces"

//#region "Response Interfaces"
interface QuickInviteLinkValidity {
    valid: boolean;
    steamid: SteamID;
    invite_duration: number | null;
}

interface TradeURL {
    token: string;
    url: string;
}

interface QuickInviteLink {
    invite_link: string;
    invite_token: string;
    invite_limit: number;
    invite_duration: number | null;
    time_created: Date;
    valid: boolean;
}

interface LogOnDetailsAnon {
    password?: string;
    loginKey?: string;
    webLogonToken?: string;
    steamID?: SteamID | string;
    authCode?: string;
    twoFactorCode?: string;
    rememberPassword?: boolean;
    logonID?: number | string;
    machineName?: string;
    clientOS?: SteamUser.EOSType;
    dontRememberMachine?: boolean;
}

interface LogOnDetailsNamePass {
    accountName: string;
    password: string;
    authCode?: string;
    twoFactorCode?: string;
    rememberPassword?: boolean;
    logonID?: number | string;
    machineName?: string;
    clientOS?: SteamUser.EOSType;
    dontRememberMachine?: boolean;
}
interface LogOnDetailsNameKey {
    accountName: string;
    loginKey: string;
    rememberPassword?: boolean;
    logonID?: number | string;
    machineName?: string;
    clientOS?: SteamUser.EOSType;
}

interface LogOnDetailsNameToken {
    accountName: string;
    webLogonToken: string;
    steamID: SteamID | string;
}

interface SteamGuardDetails {
    canTrade: boolean;
    isSteamGuardEnabled: boolean;
    timestampSteamGuardEnabled: Date | null;
    timestampMachineSteamGuardEnabled: Date | null;
    isTwoFactorEnabled: boolean;
    timestampTwoFactorEnabled: Date | null;
    isPhoneVerified: boolean;
}

interface CredentialChangeTimes {
    timestampLastPasswordChange: Date | null;
    timestampLastPasswordReset: Date | null;
    timestampLastEmailChange: Date | null;
}

interface AuthSecret {
    secretID: number;
    key: Buffer;
}

interface PrivacySettings {
    privacy_state: SteamUser.EPrivacyState;
    privacy_state_inventory: SteamUser.EPrivacyState;
    privacy_state_gifts: SteamUser.EPrivacyState;
    privacy_state_ownedgames: SteamUser.EPrivacyState;
    privacy_state_playtime: SteamUser.EPrivacyState;
    privacy_state_friendslist: SteamUser.EPrivacyState;
}

interface ServerQueryResponse {
    ip: string;
    port: number;
    players: number;
    gameport: number;
}

interface Server {
    addr: string;
    specport: number | null;
    steamid: SteamID;
    name: string;
    appid: number;
    gamedir: string;
    version: string;
    product: string;
    region: RegionCode;
    players: number;
    max_players: number;
    bots: number;
    map: string;
    secure: boolean;
    dedicated: boolean;
    os: 'w' | 'l';
    gametype: string;
}

interface ProductChanges {
    currentChangenumber: number;
    appChanges: AppChanges;
    packageChanges: PackageChanges;
}

interface ProductInfo {
    apps: AppInfo;
    packages: PackageInfo;
    unknownApps: number[];
    unknownPackages: number[];
}

interface ProductAccessTokens {
    appTokens: Record<string, string>;
    packageTokens: Record<string, string>;
    appDeniedTokens: number[];
    packageDeniedTokens: number[];
}

interface UserOwnedApps {
    game_count: number;
    games: OwnedApp[];
}

interface ProfileItems {
    profile_backgrounds: ProfileItem[];
    mini_profile_backgrounds: ProfileItem[];
    avatar_frames: ProfileItem[];
    animated_avatars: ProfileItem[];
    profile_modifiers: ProfileItem[];
}
//#endregion "Response Interfaces"
