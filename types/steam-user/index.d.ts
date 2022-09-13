// Type definitions for steam-user 4.23
// Project: https://github.com/DoctorMcKay/node-steam-user
// Definitions by: Joshua Jeschek <https://github.com/joshuajeschek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2
// Enums generated from JS by: https://github.com/joshuajeschek/JStoTSenum

// check out PR#54998 for the possibility of a rewrite (https://github.com/DefinitelyTyped/DefinitelyTyped/pull/54998)
// as well as this branch: https://github.com/joshuajeschek/DefinitelyTyped/tree/steam-user-rewrite

/// <reference types="node" />

import type SteamID = require('steamid');
import type ByteBuffer = require('bytebuffer');
import type FileManager = require('file-manager');
import EventEmitter = require('events');
import SteamChatRoomClient = require('./components/chatroom');

export = SteamUser;

declare class SteamUser extends EventEmitter {
    constructor(options?: Options);

    /**
     * The FileManager instance used by the SteamUser.
     */
    storage: FileManager;

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

    CurrencyData: Record<SteamUser.ECurrencyCode, { prepend?: string, append?: string, commas?: boolean, whole?: boolean }>;

    // EVENTS
    on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    /**
     * Please use 'ownershipCached'
     * @deprecated since v4.22.1
     */
    on(event: 'appOwnershipCached', listener: () => void): this;
    once<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    off<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    removeListener<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): this;
    removeAllListeners(event?: keyof Events): this;

    /**
     * Set a configuration option.
     * @param option
     * @param value
     */
    setOption<K extends keyof Options>(option: K, value: Options[K]): void;

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
     * @param [callback] - err and response object (response object since v4.22)
     */
    kickPlayingSession(callback?: (err: Error | null, response: { playingApp: string }) => void): Promise<{ playingApp: string }>;

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
        apps: Record<number, AppInfo>,
        packages: Record<number, PackageInfo>,
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
     * @param [filter] - Options for what counts for ownership, or a custom filter function
     */
    getOwnedApps(filter?: OwnsFilterObject | OwnsFilterFunction): number[];

    /**
     * Check if this account owns an app. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param appid
     * @param [filter] - Options for what counts for ownership, or a custom filter function
     */
    ownsApp(appid: number, filter?: OwnsFilterObject | OwnsFilterFunction): boolean;

    /**
     * has been emitted.
     * @param [filter] - Options for what counts for ownership, or a custom filter function
     */
    getOwnedDepots(filter?: OwnsFilterObject | OwnsFilterFunction): number[];

    /**
     * Check if this account owns a depot. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param depotid
     * @param [filter] - Options for what counts for ownership, or a custom filter function
     */
    ownsDepot(depotid: number, filter?: OwnsFilterObject | OwnsFilterFunction): boolean;

    /**
     * Returns an array of package IDs this account owns (different from owned licenses). The filter only
     * works, if enablePicsCache option is enabled and appOwnershipCached event has been emitted.
     * @param [filter] - Options for what counts for ownership, or a custom filter function
     */
    getOwnedPackages(filter?: OwnsFilterObject | OwnsFilterFunction): number[];

    /**
     * Check if this account owns a package. Only works if enablePicsCache option is enabled and appOwnershipCached event
     * has been emitted.
     * @param packageid
     * @param [filter] - Options for what counts for ownership, or a custom filter function
     */
    ownsPackage(packageid: number, filter?: OwnsFilterObject | OwnsFilterFunction): boolean;

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

    /**
     * Retrieves a list of friends that have played or used an app.
     * @param appID - The ID of the app you want to check
     * @param [callback]
     * @since 4.20.0
     */
    getFriendsThatPlay(appID: number, callback?: (err: Error | null, response: { friends: SteamID[] }) => void): Promise<{ friends: SteamID[] }>;

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

//#region "Events"
interface Events {
    appLaunched: [appid: number];
    appQuit: [appid: number];
    receivedFromGC: [appid: number, msgType: number, payload: Buffer];
    loggedOn: [details: Record<string, any>, parental: Record<string, any>];
    steamGuard: [domain: string | null, callback: (code: string) => void, lastCodeWrong: boolean];
    error: [err: Error & { eresult: SteamUser.EResult }];
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
    ownershipCached: [];
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
    friendRelationship: [sid: SteamID, relationship: SteamUser.EFriendRelationship];
    groupRelationship: [sid: SteamID, relationship: SteamUser.EClanRelationship];
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
type RegionCode = 0x00 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0xFF; // https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Region_codes
type OwnsFilterFunction = (element: Proto_CMsgClientLicenseList_License, index: number, array: Proto_CMsgClientLicenseList_License[]) => boolean;
interface Proto_CMsgClientLicenseList_License {
    package_id: number;
    time_created: number;
    time_next_process: number;
    minute_limit: number;
    minutes_used: number;
    payment_method: SteamUser.EPaymentMethod;
    flags: SteamUser.ELicenseFlags;
    purchase_country_code: string;
    license_type: SteamUser.ELicenseType;
    territory_code: number;
    change_number: number;
    owner_id: number;
    initial_period: number;
    initial_time_unit: number;
    renewal_period: number;
    renewal_time_unit: number;
    access_token: string;
    master_package_id: number;
}
interface OwnsFilterObject {
    excludeFree?: boolean;
    excludeShared?: boolean;
    excludeExpiring?: boolean;
}
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
    ownershipFilter?: OwnsFilterObject | OwnsFilterFunction;
    dataDirectory?: string | null;
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
    appinfo: any; // too complex to describe
}

interface PackageInfo {
    changenumber: number;
    missingToken: boolean;
    packageinfo: any; // too complex to describe
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
    autoRelogin?: boolean;
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
    autoRelogin?: boolean;
}
interface LogOnDetailsNameKey {
    accountName: string;
    loginKey: string;
    rememberPassword?: boolean;
    logonID?: number | string;
    machineName?: string;
    clientOS?: SteamUser.EOSType;
    autoRelogin?: boolean;
}

interface LogOnDetailsNameToken {
    accountName: string;
    webLogonToken: string;
    steamID: SteamID | string;
    autoRelogin?: boolean;
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
    apps: Record<number, AppInfo>;
    packages: Record<number, PackageInfo>;
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

declare namespace SteamUser {
    //#region "ENUMS"
    enum EAccountFlags {
        NormalUser = 0,
        PersonaNameSet = 1,
        Unbannable = 2,
        PasswordSet = 4,
        Support = 8,
        Admin = 16,
        Supervisor = 32,
        AppEditor = 64,
        HWIDSet = 128,
        PersonalQASet = 256,
        VacBeta = 512,
        Debug = 1024,
        Disabled = 2048,
        LimitedUser = 4096,
        LimitedUserForce = 8192,
        EmailValidated = 16384,
        MarketingTreatment = 32768,
        OGGInviteOptOut = 65536,
        ForcePasswordChange = 131072,
        ForceEmailVerification = 262144,
        LogonExtraSecurity = 524288,
        LogonExtraSecurityDisabled = 1048576,
        Steam2MigrationComplete = 2097152,
        NeedLogs = 4194304,
        Lockdown = 8388608,
        MasterAppEditor = 16777216,
        BannedFromWebAPI = 33554432,
        ClansOnlyFromFriends = 67108864,
        GlobalModerator = 134217728,
        ParentalSettings = 268435456,
        ThirdPartySupport = 536870912,
        NeedsSSANextSteamLogon = 1073741824,
    }

    enum EAccountType {
        Invalid = 0,
        Individual = 1,
        Multiseat = 2,
        GameServer = 3,
        AnonGameServer = 4,
        Pending = 5,
        ContentServer = 6,
        Clan = 7,
        Chat = 8,
        ConsoleUser = 9,
        AnonUser = 10,
    }

    enum EActivationCodeClass {
        WonCDKey = 0,
        ValveCDKey = 1,
        Doom3CDKey = 2,
        DBLookup = 3,
        Steam2010Key = 4,
        Max = 5,
        Test = 2147483647,
        Invalid = 4294967295,
    }

    enum EAppAssociationType {
        Invalid = 0,
        Publisher = 1,
        Developer = 2,
        Franchise = 3,
    }

    enum EAppControllerSupportLevel {
        None = 0,
        Partial = 1,
        Full = 2,
    }

    enum EAppInfoSection {
        Unknown = 0,
        All = 1,
        First = 2,
        Common = 2,
        Extended = 3,
        Config = 4,
        Stats = 5,
        Install = 6,
        Depots = 7,
        VAC = 8,
        VAC_UNUSED = 8,
        DRM = 9,
        DRM_UNUSED = 9,
        UFS = 10,
        OGG = 11,
        Items = 12,
        ItemsUNUSED = 12,
        Policies = 13,
        SysReqs = 14,
        Community = 15,
        Store = 16,
        Localization = 17,
        Broadcastgamedata = 18,
        Computed = 19,
        Albummetadata = 20,
    }

    enum EAppType {
        Invalid = 0,
        Game = 1,
        Application = 2,
        Tool = 4,
        Demo = 8,
        Deprected = 16,
        DLC = 32,
        Guide = 64,
        Driver = 128,
        Config = 256,
        Hardware = 512,
        Franchise = 1024,
        Video = 2048,
        Plugin = 4096,
        Music = 8192,
        Series = 16384,
        Comic = 32768,
        Beta = 65536,
        Shortcut = 1073741824,
        DepotOnly = -2147483648,
    }

    enum EAppUsageEvent {
        GameLaunch = 1,
        GameLaunchTrial = 2,
        Media = 3,
        PreloadStart = 4,
        PreloadFinish = 5,
        MarketingMessageView = 6,
        InGameAdViewed = 7,
        GameLaunchFreeWeekend = 8,
    }

    enum EAudioFormat {
        None = 0,
        '16BitLittleEndian' = 1,
        Float = 2,
    }

    enum EAuthSessionResponse {
        OK = 0,
        UserNotConnectedToSteam = 1,
        NoLicenseOrExpired = 2,
        VACBanned = 3,
        LoggedInElseWhere = 4,
        VACCheckTimedOut = 5,
        AuthTicketCanceled = 6,
        AuthTicketInvalidAlreadyUsed = 7,
        AuthTicketInvalid = 8,
        PublisherIssuedBan = 9,
    }

    enum EBillingType {
        NoCost = 0,
        BillOnceOnly = 1,
        BillMonthly = 2,
        ProofOfPrepurchaseOnly = 3,
        GuestPass = 4,
        HardwarePromo = 5,
        Gift = 6,
        AutoGrant = 7,
        OEMTicket = 8,
        RecurringOption = 9,
        BillOnceOrCDKey = 10,
        Repurchaseable = 11,
        FreeOnDemand = 12,
        Rental = 13,
        CommercialLicense = 14,
        FreeCommercialLicense = 15,
        NumBillingTypes = 16,
    }

    enum EBroadcastChatPermission {
        Public = 0,
        OwnsApp = 1,
    }

    enum EBroadcastWatchLocation {
        Invalid = 0,
        SteamTV_Tab = 1,
        SteamTV_WatchParty = 2,
        Chat_Tab = 3,
        Chat_WatchParty = 4,
        CommunityPage = 5,
        StoreAppPage = 6,
        InGame = 7,
        BigPicture = 8,
        SalesPage = 9,
        CuratorPage = 10,
        DeveloperPage = 11,
        Chat_Friends = 12,
        SteamTV_Web = 13,
    }

    enum EChatAction {
        InviteChat = 1,
        Kick = 2,
        Ban = 3,
        UnBan = 4,
        StartVoiceSpeak = 5,
        EndVoiceSpeak = 6,
        LockChat = 7,
        UnlockChat = 8,
        CloseChat = 9,
        SetJoinable = 10,
        SetUnjoinable = 11,
        SetOwner = 12,
        SetInvisibleToFriends = 13,
        SetVisibleToFriends = 14,
        SetModerated = 15,
        SetUnmoderated = 16,
    }

    enum EChatActionResult {
        Success = 1,
        Error = 2,
        NotPermitted = 3,
        NotAllowedOnClanMember = 4,
        NotAllowedOnBannedUser = 5,
        NotAllowedOnChatOwner = 6,
        NotAllowedOnSelf = 7,
        ChatDoesntExist = 8,
        ChatFull = 9,
        VoiceSlotsFull = 10,
    }

    enum EChatEntryType {
        Invalid = 0,
        ChatMsg = 1,
        Typing = 2,
        InviteGame = 3,
        Emote = 4,
        LobbyGameStart = 5,
        LeftConversation = 6,
        Entered = 7,
        WasKicked = 8,
        WasBanned = 9,
        Disconnected = 10,
        HistoricalChat = 11,
        Reserved1 = 12,
        Reserved2 = 13,
        LinkBlocked = 14,
    }

    enum EChatFlags {
        Locked = 1,
        InvisibleToFriends = 2,
        Moderated = 4,
        Unjoinable = 8,
    }

    enum EChatInfoType {
        StateChange = 1,
        InfoUpdate = 2,
        MemberLimitChange = 3,
    }

    enum EChatMemberStateChange {
        Entered = 1,
        Left = 2,
        Disconnected = 4,
        Kicked = 8,
        Banned = 16,
        VoiceSpeaking = 4096,
        VoiceDoneSpeaking = 8192,
    }

    enum EChatPermission {
        Close = 1,
        Invite = 2,
        Talk = 8,
        Kick = 16,
        Mute = 32,
        SetMetadata = 64,
        ChangePermissions = 128,
        Ban = 256,
        ChangeAccess = 512,
        Mask = 1019,
    }

    enum EChatRoomEnterResponse {
        Success = 1,
        DoesntExist = 2,
        NotAllowed = 3,
        Full = 4,
        Error = 5,
        Banned = 6,
        Limited = 7,
        ClanDisabled = 8,
        CommunityBan = 9,
        MemberBlockedYou = 10,
        YouBlockedMember = 11,
        NoRankingDataLobby = 12,
        NoRankingDataUser = 13,
        RankOutOfRange = 14,
    }

    enum EChatRoomGroupAction {
        Default = 0,
        CreateRenameDeleteChannel = 1,
        Kick = 2,
        Ban = 3,
        Invite = 4,
        ChangeTaglineAvatarName = 5,
        Chat = 6,
        ViewHistory = 7,
        ChangeGroupRoles = 8,
        ChangeUserRoles = 9,
        MentionAll = 10,
        SetWatchingBroadcast = 11,
    }

    enum EChatRoomGroupPermissions {
        Default = 0,
        Valid = 1,
        CanInvite = 2,
        CanKick = 4,
        CanBan = 8,
        CanAdminChannel = 16,
    }

    enum EChatRoomGroupRank {
        Default = 0,
        Viewer = 10,
        Guest = 15,
        Member = 20,
        Moderator = 30,
        Officer = 40,
        Owner = 50,
        TestInvalid = 99,
    }

    enum EChatRoomGroupType {
        Default = 0,
        Unmoderated = 1,
    }

    enum EChatRoomJoinState {
        Default = 0,
        None = 1,
        Joined = 2,
        TestInvalid = 99,
    }

    enum EChatRoomMemberStateChange {
        Invalid = 0,
        Joined = 1,
        Parted = 2,
        Kicked = 3,
        Invited = 4,
        RankChanged = 7,
        InviteDismissed = 8,
        Muted = 9,
        Banned = 10,
        RolesChanged = 12,
    }

    enum EChatRoomNotificationLevel {
        Invalid = 0,
        None = 1,
        MentionMe = 2,
        MentionAll = 3,
        AllMessages = 4,
    }

    enum EChatRoomServerMessage {
        Invalid = 0,
        RenameChatRoom = 1,
        Joined = 2,
        Parted = 3,
        Kicked = 4,
        Invited = 5,
        InviteDismissed = 8,
        ChatRoomTaglineChanged = 9,
        ChatRoomAvatarChanged = 10,
        AppCustom = 11,
    }

    enum EChatRoomServerMsg {
        Invalid = 0,
        RenameChatRoom = 1,
        Joined = 2,
        Parted = 3,
        Kicked = 4,
        Invited = 5,
        InviteDismissed = 8,
        ChatRoomTaglineChanged = 9,
        ChatRoomAvatarChanged = 10,
        AppCustom = 11,
    }

    enum EChatRoomType {
        Friend = 1,
        MUC = 2,
        Lobby = 3,
    }

    enum EClanPermission {
        Nobody = 0,
        Owner = 1,
        Officer = 2,
        OwnerAndOfficer = 3,
        Member = 4,
        Moderator = 8,
        OGGGameOwner = 16,
        NonMember = 128,
    }

    enum EClanRank {
        None = 0,
        Owner = 1,
        Officer = 2,
        Member = 3,
        Moderator = 4,
    }

    enum EClanRelationship {
        None = 0,
        Blocked = 1,
        Invited = 2,
        Member = 3,
        Kicked = 4,
        KickAcknowledged = 5,
        PendingApproval = 6,
        RequestDenied = 7,
    }

    enum EClientPersonaStateFlag {
        Status = 1,
        PlayerName = 2,
        QueryPort = 4,
        SourceID = 8,
        Presence = 16,
        Metadata = 32,
        LastSeen = 64,
        ClanInfo = 128,
        UserClanRank = 128,
        GameExtraInfo = 256,
        GameDataBlob = 512,
        ClanTag = 1024,
        ClanData = 1024,
        Facebook = 2048,
        RichPresence = 4096,
        Broadcast = 8192,
        Watching = 16384,
    }

    enum EClientStat {
        P2PConnectionsUDP = 0,
        P2PConnectionsRelay = 1,
        P2PGameConnections = 2,
        P2PVoiceConnections = 3,
        BytesDownloaded = 4,
    }

    enum EClientStatAggregateMethod {
        LatestOnly = 0,
        Sum = 1,
        Event = 2,
        Scalar = 3,
    }

    enum EContentDeltaChunkDataLocation {
        InProtobuf = 0,
        AfterProtobuf = 1,
    }

    enum EContentDownloadSourceType {
        Invalid = 0,
        CS = 1,
        CDN = 2,
        LCS = 3,
        ProxyCache = 4,
        LANPeer = 5,
        SLS = 6,
        SteamCache = 7,
        OpenCache = 8,
        LANCache = 9,
    }

    enum EControllerElementType {
        None = -1,
        Thumb = 0,
        ButtonSteam = 1,
        JoystickLeft = 2,
        ButtonJoystickLeft = 3,
        JoystickRight = 4,
        ButtonJoystickRight = 5,
        DPad = 6,
        ButtonA = 7,
        ButtonB = 8,
        ButtonX = 9,
        ButtonY = 10,
        ButtonSelect = 11,
        ButtonStart = 12,
        ButtonTriggerLeft = 13,
        ButtonTriggerRight = 14,
        ButtonBumperLeft = 15,
        ButtonBumperRight = 16,
        ButtonMacro0 = 17,
        ButtonMacro1 = 18,
        ButtonMacro2 = 19,
        ButtonMacro3 = 20,
        ButtonMacro4 = 21,
        ButtonMacro5 = 22,
        ButtonMacro6 = 23,
        ButtonMacro7 = 24,
        TrackpadCenter = 25,
        TrackpadLeft = 26,
        TrackpadRight = 27,
        Keyboard = 28,
        MagnifyingGlass = 29,
        ButtonMacro1Finger = 30,
        ButtonMacro2Finger = 31,
        RecordInput = 32,
        PlaybackInput = 33,
        Paste = 34,
        Max = 35,
    }

    enum EControllerLayoutType {
        Phone = 0,
        Tablet = 1,
    }

    enum ECurrencyCode {
        Invalid = 0,
        USD = 1,
        GBP = 2,
        EUR = 3,
        CHF = 4,
        RUB = 5,
        PLN = 6,
        BRL = 7,
        JPY = 8,
        NOK = 9,
        IDR = 10,
        MYR = 11,
        PHP = 12,
        SGD = 13,
        THB = 14,
        VND = 15,
        KRW = 16,
        TRY = 17,
        UAH = 18,
        MXN = 19,
        CAD = 20,
        AUD = 21,
        NZD = 22,
        CNY = 23,
        INR = 24,
        CLP = 25,
        PEN = 26,
        COP = 27,
        ZAR = 28,
        HKD = 29,
        TWD = 30,
        SAR = 31,
        AED = 32,
        ARS = 34,
        ILS = 35,
        BYN = 36,
        KZT = 37,
        KWD = 38,
        QAR = 39,
        CRC = 40,
        UYU = 41,
    }

    enum EDenyReason {
        InvalidVersion = 1,
        Generic = 2,
        NotLoggedOn = 3,
        NoLicense = 4,
        Cheater = 5,
        LoggedInElseWhere = 6,
        UnknownText = 7,
        IncompatibleAnticheat = 8,
        MemoryCorruption = 9,
        IncompatibleSoftware = 10,
        SteamConnectionLost = 11,
        SteamConnectionError = 12,
        SteamResponseTimedOut = 13,
        SteamValidationStalled = 14,
        SteamOwnerLeftGuestUser = 15,
    }

    enum EDepotFileFlag {
        UserConfig = 1,
        VersionedUserConfig = 2,
        Encrypted = 4,
        ReadOnly = 8,
        Hidden = 16,
        Executable = 32,
        Directory = 64,
        CustomExecutable = 128,
        InstallScript = 256,
        Symlink = 512,
    }

    enum EDisplayStatus {
        Invalid = 0,
        Launching = 1,
        Uninstalling = 2,
        Installing = 3,
        Running = 4,
        Validating = 5,
        Updating = 6,
        Downloading = 7,
        Synchronizing = 8,
        ReadyToInstall = 9,
        ReadyToPreload = 10,
        ReadyToLaunch = 11,
        RegionRestricted = 12,
        PresaleOnly = 13,
        InvalidPlatform = 14,
        ParentalBlocked = 15,
        PreloadOnly = 16,
        PreloadComplete = 16,
        BorrowerLocked = 17,
        UpdatePaused = 18,
        UpdateQueued = 19,
        UpdateRequired = 20,
        UpdateDisabled = 21,
        DownloadPaused = 22,
        DownloadQueued = 23,
        DownloadRequired = 24,
        DownloadDisabled = 25,
        LicensePending = 26,
        LicenseExpired = 27,
        AvailForFree = 28,
        AvailToBorrow = 29,
        AvailGuestPass = 30,
        Purchase = 31,
    }

    enum EDRMBlobDownloadErrorDetail {
        None = 0,
        DownloadFailed = 1,
        TargetLocked = 2,
        OpenZip = 3,
        ReadZipDirectory = 4,
        UnexpectedZipEntry = 5,
        UnzipFullFile = 6,
        UnknownBlobType = 7,
        UnzipStrips = 8,
        UnzipMergeGuid = 9,
        UnzipSignature = 10,
        ApplyStrips = 11,
        ApplyMergeGuid = 12,
        ApplySignature = 13,
        AppIdMismatch = 14,
        AppIdUnexpected = 15,
        AppliedSignatureCorrupt = 16,
        ApplyValveSignatureHeader = 17,
        UnzipValveSignatureHeader = 18,
        PathManipulationError = 19,
        TargetLocked_Base = 65536,
        TargetLocked_Max = 131071,
        NextBase = 131072,
    }

    enum EDRMBlobDownloadType {
        Error = 0,
        File = 1,
        Parts = 2,
        Compressed = 4,
        AllMask = 7,
        IsJob = 8,
        HighPriority = 16,
        AddTimestamp = 32,
        LowPriority = 64,
    }

    enum EEconTradeResponse {
        Accepted = 0,
        Declined = 1,
        TradeBannedInitiator = 2,
        TradeBannedTarget = 3,
        TargetAlreadyTrading = 4,
        Disabled = 5,
        NotLoggedIn = 6,
        Cancel = 7,
        TooSoon = 8,
        TooSoonPenalty = 9,
        ConnectionFailed = 10,
        AlreadyTrading = 11,
        AlreadyHasTradeRequest = 12,
        NoResponse = 13,
        CyberCafeInitiator = 14,
        CyberCafeTarget = 15,
        SchoolLabInitiator = 16,
        SchoolLabTarget = 16,
        InitiatorBlockedTarget = 18,
        InitiatorNeedsVerifiedEmail = 20,
        InitiatorNeedsSteamGuard = 21,
        TargetAccountCannotTrade = 22,
        InitiatorSteamGuardDuration = 23,
        InitiatorPasswordResetProbation = 24,
        InitiatorNewDeviceCooldown = 25,
        InitiatorSentInvalidCookie = 26,
        NeedsEmailConfirmation = 27,
        InitiatorRecentEmailChange = 28,
        NeedsMobileConfirmation = 29,
        TradingHoldForClearedTradeOffersInitiator = 30,
        WouldExceedMaxAssetCount = 31,
        DisabledInRegion = 32,
        DisabledInPartnerRegion = 33,
        OKToDeliver = 50,
    }

    enum EExternalAccountType {
        k_EExternalNone = 0,
        k_EExternalSteamAccount = 1,
        k_EExternalGoogleAccount = 2,
        k_EExternalFacebookAccount = 3,
        k_EExternalTwitterAccount = 4,
        k_EExternalTwitchAccount = 5,
        k_EExternalYouTubeChannelAccount = 6,
        k_EExternalFacebookPage = 7,
    }

    enum EFrameAccumulatedStat {
        FPS = 0,
        CaptureDurationMS = 1,
        ConvertDurationMS = 2,
        EncodeDurationMS = 3,
        SteamDurationMS = 4,
        ServerDurationMS = 5,
        NetworkDurationMS = 6,
        DecodeDurationMS = 7,
        DisplayDurationMS = 8,
        ClientDurationMS = 9,
        FrameDurationMS = 10,
        InputLatencyMS = 11,
        GameLatencyMS = 12,
        RoundTripLatencyMS = 13,
        PingTimeMS = 14,
        ServerBitrateKbitPerSec = 15,
        ClientBitrateKbitPerSec = 16,
        LinkBandwidthKbitPerSec = 17,
        PacketLossPercentage = 18,
    }

    enum EFriendFlags {
        None = 0,
        Blocked = 1,
        FriendshipRequested = 2,
        Immediate = 4,
        ClanMember = 8,
        OnGameServer = 16,
        RequestingFriendship = 128,
        RequestingInfo = 256,
        Ignored = 512,
        IgnoredFriend = 1024,
        Suggested = 2048,
        ChatMember = 4096,
        FlagAll = 65535,
    }

    enum EFriendRelationship {
        None = 0,
        Blocked = 1,
        RequestRecipient = 2,
        Friend = 3,
        RequestInitiator = 4,
        Ignored = 5,
        IgnoredFriend = 6,
        SuggestedFriend = 7,
    }

    enum EGameSearchAction {
        None = 0,
        Accept = 1,
        Decline = 2,
        Cancel = 3,
    }

    enum EGameSearchResult {
        Invalid = 0,
        SearchInProgress = 1,
        SearchFailedNoHosts = 2,
        SearchGameFound = 3,
        SearchCompleteAccepted = 4,
        SearchCompleteDeclined = 5,
        SearchCanceled = 6,
    }

    enum EHIDDeviceDisconnectMethod {
        Unknown = 0,
        Bluetooth = 1,
        FeatureReport = 2,
        OutputReport = 3,
    }

    enum EHIDDeviceLocation {
        Local = 0,
        Remote = 2,
        Any = 3,
    }

    enum EInputMode {
        Unknown = 0,
        Mouse = 1,
        Controller = 2,
        MouseAndController = 3,
    }

    enum EInternalAccountType {
        k_EInternalSteamAccountType = 1,
        k_EInternalClanType = 2,
        k_EInternalAppType = 3,
        k_EInternalBroadcastChannelType = 4,
    }

    enum EIntroducerRouting {
        FileShare = 0,
        P2PVoiceChat = 1,
        P2PNetworking = 2,
    }

    enum EJSRegisterMethodType {
        Invalid = 0,
        Function = 1,
        Callback = 2,
        Promise = 3,
    }

    enum EKeyEscrowUsage {
        StreamingDevice = 0,
    }

    enum ELauncherType {
        Default = 0,
        PerfectWorld = 1,
        Nexon = 2,
        CmdLine = 3,
        CSGO = 4,
        ClientUI = 5,
        Headless = 6,
        SteamChina = 7,
        SingleApp = 8,
    }

    enum ELeaderboardDataRequest {
        Global = 0,
        GlobalAroundUser = 1,
        Friends = 2,
        Users = 3,
    }

    enum ELeaderboardDisplayType {
        None = 0,
        Numeric = 1,
        TimeSeconds = 2,
        TimeMilliSeconds = 3,
    }

    enum ELeaderboardSortMethod {
        None = 0,
        Ascending = 1,
        Descending = 2,
    }

    enum ELeaderboardUploadScoreMethod {
        None = 0,
        KeepBest = 1,
        ForceUpdate = 2,
    }

    enum ELicenseFlags {
        None = 0,
        Renew = 1,
        RenewalFailed = 2,
        Pending = 4,
        Expired = 8,
        CancelledByUser = 16,
        CancelledByAdmin = 32,
        LowViolenceContent = 64,
        ImportedFromSteam2 = 128,
        ForceRunRestriction = 256,
        RegionRestrictionExpired = 512,
        CancelledByFriendlyFraudLock = 1024,
        NotActivated = 2048,
    }

    enum ELicenseType {
        NoLicense = 0,
        SinglePurchase = 1,
        SinglePurchaseLimitedUse = 2,
        RecurringCharge = 3,
        RecurringChargeLimitedUse = 4,
        RecurringChargeLimitedUseWithOverages = 5,
        RecurringOption = 6,
        LimitedUseDelayedActivation = 7,
    }

    enum ELobbyComparison {
        EqualToOrLessThan = -2,
        LessThan = -1,
        Equal = 0,
        GreaterThan = 1,
        EqualToOrGreaterThan = 2,
        NotEqual = 3,
    }

    enum ELobbyFilterType {
        String = 0,
        Numerical = 1,
        SlotsAvailable = 2,
        NearValue = 3,
        Distance = 4,
    }

    enum ELobbyStatus {
        Invalid = 0,
        Exists = 1,
        DoesNotExist = 2,
        NotAMember = 3,
    }

    enum ELobbyType {
        Private = 0,
        FriendsOnly = 1,
        Public = 2,
        Invisible = 3,
        PrivateUnique = 4,
    }

    enum ELogFileType {
        SystemBoot = 0,
        SystemReset = 1,
        SystemDebug = 2,
    }

    enum EMarketingMessageFlags {
        None = 0,
        HighPriority = 1,
        PlatformWindows = 2,
        PlatformMac = 4,
        PlatformLinux = 8,
    }

    enum EMMSLobbyStatus {
        Invalid = 0,
        Exists = 1,
        DoesNotExist = 2,
        NotAMember = 3,
    }

    enum EMouseMode {
        Unknown = 0,
        RelativeCursor = 1,
        AbsoluteCursor = 2,
        Touch = 3,
        Relative = 4,
    }

    enum EMsg {
        Invalid = 0,
        Multi = 1,
        ProtobufWrapped = 2,
        BaseGeneral = 100,
        GenericReply = 100,
        DestJobFailed = 113,
        Alert = 115,
        SCIDRequest = 120,
        SCIDResponse = 121,
        JobHeartbeat = 123,
        HubConnect = 124,
        Subscribe = 126,
        RouteMessage = 127,
        RemoteSysID = 128,
        AMCreateAccountResponse = 129,
        WGRequest = 130,
        WGResponse = 131,
        KeepAlive = 132,
        WebAPIJobRequest = 133,
        WebAPIJobResponse = 134,
        ClientSessionStart = 135,
        ClientSessionEnd = 136,
        ClientSessionUpdateAuthTicket = 137,
        ClientSessionUpdate = 137,
        StatsDeprecated = 138,
        Ping = 139,
        PingResponse = 140,
        Stats = 141,
        RequestFullStatsBlock = 142,
        LoadDBOCacheItem = 143,
        LoadDBOCacheItemResponse = 144,
        InvalidateDBOCacheItems = 145,
        ServiceMethod = 146,
        ServiceMethodResponse = 147,
        ClientPackageVersions = 148,
        TimestampRequest = 149,
        TimestampResponse = 150,
        ServiceMethodCallFromClient = 151,
        ServiceMethodSendToClient = 152,
        BaseShell = 200,
        AssignSysID = 200,
        Exit = 201,
        DirRequest = 202,
        DirResponse = 203,
        ZipRequest = 204,
        ZipResponse = 205,
        UpdateRecordResponse = 215,
        UpdateCreditCardRequest = 221,
        UpdateUserBanResponse = 225,
        PrepareToExit = 226,
        ContentDescriptionUpdate = 227,
        TestResetServer = 228,
        UniverseChanged = 229,
        ShellConfigInfoUpdate = 230,
        RequestWindowsEventLogEntries = 233,
        ProvideWindowsEventLogEntries = 234,
        ShellSearchLogs = 235,
        ShellSearchLogsResponse = 236,
        ShellCheckWindowsUpdates = 237,
        ShellCheckWindowsUpdatesResponse = 238,
        ShellFlushUserLicenseCache = 239,
        TestFlushDelayedSQL = 240,
        TestFlushDelayedSQLResponse = 241,
        EnsureExecuteScheduledTask_TEST = 242,
        EnsureExecuteScheduledTaskResponse_TEST = 243,
        UpdateScheduledTaskEnableState_TEST = 244,
        UpdateScheduledTaskEnableStateResponse_TEST = 245,
        ContentDescriptionDeltaUpdate = 246,
        BaseGM = 300,
        Heartbeat = 300,
        ShellFailed = 301,
        ExitShells = 307,
        ExitShell = 308,
        GracefulExitShell = 309,
        LicenseProcessingComplete = 316,
        SetTestFlag = 317,
        QueuedEmailsComplete = 318,
        GMReportPHPError = 319,
        GMDRMSync = 320,
        PhysicalBoxInventory = 321,
        UpdateConfigFile = 322,
        TestInitDB = 323,
        GMWriteConfigToSQL = 324,
        GMLoadActivationCodes = 325,
        GMQueueForFBS = 326,
        GMSchemaConversionResults = 327,
        GMSchemaConversionResultsResponse = 328,
        GMWriteShellFailureToSQL = 329,
        GMWriteStatsToSOS = 330,
        GMGetServiceMethodRouting = 331,
        GMGetServiceMethodRoutingResponse = 332,
        GMConvertUserWallets = 333,
        GMTestNextBuildSchemaConversion = 334,
        GMTestNextBuildSchemaConversionResponse = 335,
        ExpectShellRestart = 336,
        HotFixProgress = 337,
        BaseAIS = 400,
        AISRefreshContentDescription = 401,
        AISRequestContentDescription = 402,
        AISUpdateAppInfo = 403,
        AISUpdatePackageCosts = 404,
        AISUpdatePackageInfo = 404,
        AISGetPackageChangeNumber = 405,
        AISGetPackageChangeNumberResponse = 406,
        AISAppInfoTableChanged = 407,
        AISUpdatePackageCostsResponse = 408,
        AISCreateMarketingMessage = 409,
        AISCreateMarketingMessageResponse = 410,
        AISGetMarketingMessage = 411,
        AISGetMarketingMessageResponse = 412,
        AISUpdateMarketingMessage = 413,
        AISUpdateMarketingMessageResponse = 414,
        AISRequestMarketingMessageUpdate = 415,
        AISDeleteMarketingMessage = 416,
        AISGetMarketingTreatments = 419,
        AISGetMarketingTreatmentsResponse = 420,
        AISRequestMarketingTreatmentUpdate = 421,
        AISTestAddPackage = 422,
        AIGetAppGCFlags = 423,
        AIGetAppGCFlagsResponse = 424,
        AIGetAppList = 425,
        AIGetAppListResponse = 426,
        AIGetAppInfo = 427,
        AIGetAppInfoResponse = 428,
        AISGetCouponDefinition = 429,
        AISGetCouponDefinitionResponse = 430,
        AISUpdateSlaveContentDescription = 431,
        AISUpdateSlaveContentDescriptionResponse = 432,
        AISTestEnableGC = 433,
        BaseAM = 500,
        AMUpdateUserBanRequest = 504,
        AMAddLicense = 505,
        AMBeginProcessingLicenses = 507,
        AMSendSystemIMToUser = 508,
        AMExtendLicense = 509,
        AMAddMinutesToLicense = 510,
        AMCancelLicense = 511,
        AMInitPurchase = 512,
        AMPurchaseResponse = 513,
        AMGetFinalPrice = 514,
        AMGetFinalPriceResponse = 515,
        AMGetLegacyGameKey = 516,
        AMGetLegacyGameKeyResponse = 517,
        AMFindHungTransactions = 518,
        AMSetAccountTrustedRequest = 519,
        AMCompletePurchase = 521,
        AMCancelPurchase = 522,
        AMNewChallenge = 523,
        AMLoadOEMTickets = 524,
        AMFixPendingPurchase = 525,
        AMFixPendingPurchaseResponse = 526,
        AMIsUserBanned = 527,
        AMRegisterKey = 528,
        AMLoadActivationCodes = 529,
        AMLoadActivationCodesResponse = 530,
        AMLookupKeyResponse = 531,
        AMLookupKey = 532,
        AMChatCleanup = 533,
        AMClanCleanup = 534,
        AMFixPendingRefund = 535,
        AMReverseChargeback = 536,
        AMReverseChargebackResponse = 537,
        AMClanCleanupList = 538,
        AMGetLicenses = 539,
        AMGetLicensesResponse = 540,
        AMSendCartRepurchase = 541,
        AMSendCartRepurchaseResponse = 542,
        AllowUserToPlayQuery = 550,
        AllowUserToPlayResponse = 551,
        AMVerfiyUser = 552,
        AMClientNotPlaying = 553,
        ClientRequestFriendship = 554,
        AMClientRequestFriendship = 554,
        AMRelayPublishStatus = 555,
        AMResetCommunityContent = 556,
        AMPrimePersonaStateCache = 557,
        AMAllowUserContentQuery = 558,
        AMAllowUserContentResponse = 559,
        AMInitPurchaseResponse = 560,
        AMRevokePurchaseResponse = 561,
        AMLockProfile = 562,
        AMRefreshGuestPasses = 563,
        AMInviteUserToClan = 564,
        AMAcknowledgeClanInvite = 565,
        AMGrantGuestPasses = 566,
        AMClanDataUpdated = 567,
        AMReloadAccount = 568,
        AMClientChatMsgRelay = 569,
        AMChatMulti = 570,
        AMClientChatInviteRelay = 571,
        AMChatInvite = 572,
        AMClientJoinChatRelay = 573,
        AMClientChatMemberInfoRelay = 574,
        AMPublishChatMemberInfo = 575,
        AMClientAcceptFriendInvite = 576,
        AMChatEnter = 577,
        AMClientPublishRemovalFromSource = 578,
        AMChatActionResult = 579,
        AMFindAccounts = 580,
        AMFindAccountsResponse = 581,
        AMRequestAccountData = 582,
        AMRequestAccountDataResponse = 583,
        AMSetAccountFlags = 584,
        AMCreateClan = 586,
        AMCreateClanResponse = 587,
        AMGetClanDetails = 588,
        AMGetClanDetailsResponse = 589,
        AMSetPersonaName = 590,
        AMSetAvatar = 591,
        AMAuthenticateUser = 592,
        AMAuthenticateUserResponse = 593,
        AMGetAccountFriendsCount = 594,
        AMGetAccountFriendsCountResponse = 595,
        AMP2PIntroducerMessage = 596,
        ClientChatAction = 597,
        AMClientChatActionRelay = 598,
        BaseVS = 600,
        ReqChallenge = 600,
        VACResponse = 601,
        ReqChallengeTest = 602,
        VSMarkCheat = 604,
        VSAddCheat = 605,
        VSPurgeCodeModDB = 606,
        VSGetChallengeResults = 607,
        VSChallengeResultText = 608,
        VSReportLingerer = 609,
        VSRequestManagedChallenge = 610,
        VSLoadDBFinished = 611,
        BaseDRMS = 625,
        DRMBuildBlobRequest = 628,
        DRMBuildBlobResponse = 629,
        DRMResolveGuidRequest = 630,
        DRMResolveGuidResponse = 631,
        DRMVariabilityReport = 633,
        DRMVariabilityReportResponse = 634,
        DRMStabilityReport = 635,
        DRMStabilityReportResponse = 636,
        DRMDetailsReportRequest = 637,
        DRMDetailsReportResponse = 638,
        DRMProcessFile = 639,
        DRMAdminUpdate = 640,
        DRMAdminUpdateResponse = 641,
        DRMSync = 642,
        DRMSyncResponse = 643,
        DRMProcessFileResponse = 644,
        DRMEmptyGuidCache = 645,
        DRMEmptyGuidCacheResponse = 646,
        BaseCS = 650,
        CSUserContentRequest = 652,
        BaseClient = 700,
        ClientLogOn_Deprecated = 701,
        ClientAnonLogOn_Deprecated = 702,
        ClientHeartBeat = 703,
        ClientVACResponse = 704,
        ClientGamesPlayed_obsolete = 705,
        ClientLogOff = 706,
        ClientNoUDPConnectivity = 707,
        ClientInformOfCreateAccount = 708,
        ClientAckVACBan = 709,
        ClientConnectionStats = 710,
        ClientInitPurchase = 711,
        ClientPingResponse = 712,
        ClientRemoveFriend = 714,
        ClientGamesPlayedNoDataBlob = 715,
        ClientChangeStatus = 716,
        ClientVacStatusResponse = 717,
        ClientFriendMsg = 718,
        ClientGameConnect_obsolete = 719,
        ClientGamesPlayed2_obsolete = 720,
        ClientGameEnded_obsolete = 721,
        ClientGetFinalPrice = 722,
        ClientSystemIM = 726,
        ClientSystemIMAck = 727,
        ClientGetLicenses = 728,
        ClientCancelLicense = 729,
        ClientGetLegacyGameKey = 730,
        ClientContentServerLogOn_Deprecated = 731,
        ClientAckVACBan2 = 732,
        ClientAckMessageByGID = 735,
        ClientGetPurchaseReceipts = 736,
        ClientAckPurchaseReceipt = 737,
        ClientGamesPlayed3_obsolete = 738,
        ClientSendGuestPass = 739,
        ClientAckGuestPass = 740,
        ClientRedeemGuestPass = 741,
        ClientGamesPlayed = 742,
        ClientRegisterKey = 743,
        ClientInviteUserToClan = 744,
        ClientAcknowledgeClanInvite = 745,
        ClientPurchaseWithMachineID = 746,
        ClientAppUsageEvent = 747,
        ClientGetGiftTargetList = 748,
        ClientGetGiftTargetListResponse = 749,
        ClientLogOnResponse = 751,
        ClientVACChallenge = 753,
        ClientSetHeartbeatRate = 755,
        ClientNotLoggedOnDeprecated = 756,
        ClientLoggedOff = 757,
        GSApprove = 758,
        GSDeny = 759,
        GSKick = 760,
        ClientCreateAcctResponse = 761,
        ClientPurchaseResponse = 763,
        ClientPing = 764,
        ClientNOP = 765,
        ClientPersonaState = 766,
        ClientFriendsList = 767,
        ClientAccountInfo = 768,
        ClientVacStatusQuery = 770,
        ClientNewsUpdate = 771,
        ClientGameConnectDeny = 773,
        GSStatusReply = 774,
        ClientGetFinalPriceResponse = 775,
        ClientGameConnectTokens = 779,
        ClientLicenseList = 780,
        ClientCancelLicenseResponse = 781,
        ClientVACBanStatus = 782,
        ClientCMList = 783,
        ClientEncryptPct = 784,
        ClientGetLegacyGameKeyResponse = 785,
        ClientFavoritesList = 786,
        CSUserContentApprove = 787,
        CSUserContentDeny = 788,
        ClientInitPurchaseResponse = 789,
        ClientAddFriend = 791,
        ClientAddFriendResponse = 792,
        ClientInviteFriend = 793,
        ClientInviteFriendResponse = 794,
        ClientSendGuestPassResponse = 795,
        ClientAckGuestPassResponse = 796,
        ClientRedeemGuestPassResponse = 797,
        ClientUpdateGuestPassesList = 798,
        ClientChatMsg = 799,
        ClientChatInvite = 800,
        ClientJoinChat = 801,
        ClientChatMemberInfo = 802,
        ClientLogOnWithCredentials_Deprecated = 803,
        ClientPasswordChangeResponse = 805,
        ClientChatEnter = 807,
        ClientFriendRemovedFromSource = 808,
        ClientCreateChat = 809,
        ClientCreateChatResponse = 810,
        ClientUpdateChatMetadata = 811,
        ClientP2PIntroducerMessage = 813,
        ClientChatActionResult = 814,
        ClientRequestFriendData = 815,
        ClientGetUserStats = 818,
        ClientGetUserStatsResponse = 819,
        ClientStoreUserStats = 820,
        ClientStoreUserStatsResponse = 821,
        ClientClanState = 822,
        ClientServiceModule = 830,
        ClientServiceCall = 831,
        ClientServiceCallResponse = 832,
        ClientPackageInfoRequest = 833,
        ClientPackageInfoResponse = 834,
        ClientNatTraversalStatEvent = 839,
        ClientAppInfoRequest = 840,
        ClientAppInfoResponse = 841,
        ClientSteamUsageEvent = 842,
        ClientCheckPassword = 845,
        ClientResetPassword = 846,
        ClientCheckPasswordResponse = 848,
        ClientResetPasswordResponse = 849,
        ClientSessionToken = 850,
        ClientDRMProblemReport = 851,
        ClientSetIgnoreFriend = 855,
        ClientSetIgnoreFriendResponse = 856,
        ClientGetAppOwnershipTicket = 857,
        ClientGetAppOwnershipTicketResponse = 858,
        ClientGetLobbyListResponse = 860,
        ClientGetLobbyMetadata = 861,
        ClientGetLobbyMetadataResponse = 862,
        ClientVTTCert = 863,
        ClientAppInfoUpdate = 866,
        ClientAppInfoChanges = 867,
        ClientServerList = 880,
        ClientEmailChangeResponse = 891,
        ClientSecretQAChangeResponse = 892,
        ClientDRMBlobRequest = 896,
        ClientDRMBlobResponse = 897,
        ClientLookupKey = 898,
        ClientLookupKeyResponse = 899,
        BaseGameServer = 900,
        GSDisconnectNotice = 901,
        GSStatus = 903,
        GSUserPlaying = 905,
        GSStatus2 = 906,
        GSStatusUpdate_Unused = 907,
        GSServerType = 908,
        GSPlayerList = 909,
        GSGetUserAchievementStatus = 910,
        GSGetUserAchievementStatusResponse = 911,
        GSGetPlayStats = 918,
        GSGetPlayStatsResponse = 919,
        GSGetUserGroupStatus = 920,
        AMGetUserGroupStatus = 921,
        AMGetUserGroupStatusResponse = 922,
        GSGetUserGroupStatusResponse = 923,
        GSGetReputation = 936,
        GSGetReputationResponse = 937,
        GSAssociateWithClan = 938,
        GSAssociateWithClanResponse = 939,
        GSComputeNewPlayerCompatibility = 940,
        GSComputeNewPlayerCompatibilityResponse = 941,
        BaseAdmin = 1000,
        AdminCmd = 1000,
        AdminCmdResponse = 1004,
        AdminLogListenRequest = 1005,
        AdminLogEvent = 1006,
        LogSearchRequest = 1007,
        LogSearchResponse = 1008,
        LogSearchCancel = 1009,
        UniverseData = 1010,
        RequestStatHistory = 1014,
        StatHistory = 1015,
        AdminPwLogon = 1017,
        AdminPwLogonResponse = 1018,
        AdminSpew = 1019,
        AdminConsoleTitle = 1020,
        AdminGCSpew = 1023,
        AdminGCCommand = 1024,
        AdminGCGetCommandList = 1025,
        AdminGCGetCommandListResponse = 1026,
        FBSConnectionData = 1027,
        AdminMsgSpew = 1028,
        BaseFBS = 1100,
        FBSReqVersion = 1100,
        FBSVersionInfo = 1101,
        FBSForceRefresh = 1102,
        FBSForceBounce = 1103,
        FBSDeployPackage = 1104,
        FBSDeployResponse = 1105,
        FBSUpdateBootstrapper = 1106,
        FBSSetState = 1107,
        FBSApplyOSUpdates = 1108,
        FBSRunCMDScript = 1109,
        FBSRebootBox = 1110,
        FBSSetBigBrotherMode = 1111,
        FBSMinidumpServer = 1112,
        FBSSetShellCount_obsolete = 1113,
        FBSDeployHotFixPackage = 1114,
        FBSDeployHotFixResponse = 1115,
        FBSDownloadHotFix = 1116,
        FBSDownloadHotFixResponse = 1117,
        FBSUpdateTargetConfigFile = 1118,
        FBSApplyAccountCred = 1119,
        FBSApplyAccountCredResponse = 1120,
        FBSSetShellCount = 1121,
        FBSTerminateShell = 1122,
        FBSQueryGMForRequest = 1123,
        FBSQueryGMResponse = 1124,
        FBSTerminateZombies = 1125,
        FBSInfoFromBootstrapper = 1126,
        FBSRebootBoxResponse = 1127,
        FBSBootstrapperPackageRequest = 1128,
        FBSBootstrapperPackageResponse = 1129,
        FBSBootstrapperGetPackageChunk = 1130,
        FBSBootstrapperGetPackageChunkResponse = 1131,
        FBSBootstrapperPackageTransferProgress = 1132,
        FBSRestartBootstrapper = 1133,
        FBSPauseFrozenDumps = 1134,
        BaseFileXfer = 1200,
        FileXferRequest = 1200,
        FileXferResponse = 1201,
        FileXferData = 1202,
        FileXferEnd = 1203,
        FileXferDataAck = 1204,
        BaseChannelAuth = 1300,
        ChannelAuthChallenge = 1300,
        ChannelAuthResponse = 1301,
        ChannelAuthResult = 1302,
        ChannelEncryptRequest = 1303,
        ChannelEncryptResponse = 1304,
        ChannelEncryptResult = 1305,
        BaseBS = 1400,
        BSPurchaseStart = 1401,
        BSPurchaseResponse = 1402,
        BSAuthenticateCCTrans = 1403,
        BSSettleNOVA = 1404,
        BSAuthenticateCCTransResponse = 1404,
        BSSettleComplete = 1406,
        BSBannedRequest = 1407,
        BSInitPayPalTxn = 1408,
        BSInitPayPalTxnResponse = 1409,
        BSGetPayPalUserInfo = 1410,
        BSGetPayPalUserInfoResponse = 1411,
        BSRefundTxn = 1413,
        BSRefundTxnResponse = 1414,
        BSGetEvents = 1415,
        BSChaseRFRRequest = 1416,
        BSPaymentInstrBan = 1417,
        BSPaymentInstrBanResponse = 1418,
        BSProcessGCReports = 1419,
        BSProcessPPReports = 1420,
        BSInitGCBankXferTxn = 1421,
        BSInitGCBankXferTxnResponse = 1422,
        BSQueryGCBankXferTxn = 1423,
        BSQueryGCBankXferTxnResponse = 1424,
        BSCommitGCTxn = 1425,
        BSQueryTransactionStatus = 1426,
        BSQueryTransactionStatusResponse = 1427,
        BSQueryCBOrderStatus = 1428,
        BSQueryCBOrderStatusResponse = 1429,
        BSRunRedFlagReport = 1430,
        BSQueryPaymentInstUsage = 1431,
        BSQueryPaymentInstResponse = 1432,
        BSQueryTxnExtendedInfo = 1433,
        BSQueryTxnExtendedInfoResponse = 1434,
        BSUpdateConversionRates = 1435,
        BSProcessUSBankReports = 1436,
        BSPurchaseRunFraudChecks = 1437,
        BSPurchaseRunFraudChecksResponse = 1438,
        BSStartShippingJobs = 1439,
        BSQueryBankInformation = 1440,
        BSQueryBankInformationResponse = 1441,
        BSValidateXsollaSignature = 1445,
        BSValidateXsollaSignatureResponse = 1446,
        BSQiwiWalletInvoice = 1448,
        BSQiwiWalletInvoiceResponse = 1449,
        BSUpdateInventoryFromProPack = 1450,
        BSUpdateInventoryFromProPackResponse = 1451,
        BSSendShippingRequest = 1452,
        BSSendShippingRequestResponse = 1453,
        BSGetProPackOrderStatus = 1454,
        BSGetProPackOrderStatusResponse = 1455,
        BSCheckJobRunning = 1456,
        BSCheckJobRunningResponse = 1457,
        BSResetPackagePurchaseRateLimit = 1458,
        BSResetPackagePurchaseRateLimitResponse = 1459,
        BSUpdatePaymentData = 1460,
        BSUpdatePaymentDataResponse = 1461,
        BSGetBillingAddress = 1462,
        BSGetBillingAddressResponse = 1463,
        BSGetCreditCardInfo = 1464,
        BSGetCreditCardInfoResponse = 1465,
        BSRemoveExpiredPaymentData = 1468,
        BSRemoveExpiredPaymentDataResponse = 1469,
        BSConvertToCurrentKeys = 1470,
        BSConvertToCurrentKeysResponse = 1471,
        BSInitPurchase = 1472,
        BSInitPurchaseResponse = 1473,
        BSCompletePurchase = 1474,
        BSCompletePurchaseResponse = 1475,
        BSPruneCardUsageStats = 1476,
        BSPruneCardUsageStatsResponse = 1477,
        BSStoreBankInformation = 1478,
        BSStoreBankInformationResponse = 1479,
        BSVerifyPOSAKey = 1480,
        BSVerifyPOSAKeyResponse = 1481,
        BSReverseRedeemPOSAKey = 1482,
        BSReverseRedeemPOSAKeyResponse = 1483,
        BSQueryFindCreditCard = 1484,
        BSQueryFindCreditCardResponse = 1485,
        BSStatusInquiryPOSAKey = 1486,
        BSStatusInquiryPOSAKeyResponse = 1487,
        BSValidateMoPaySignature = 1488,
        BSValidateMoPaySignatureResponse = 1489,
        BSMoPayConfirmProductDelivery = 1490,
        BSMoPayConfirmProductDeliveryResponse = 1491,
        BSGenerateMoPayMD5 = 1492,
        BSGenerateMoPayMD5Response = 1493,
        BSBoaCompraConfirmProductDelivery = 1494,
        BSBoaCompraConfirmProductDeliveryResponse = 1495,
        BSGenerateBoaCompraMD5 = 1496,
        BSGenerateBoaCompraMD5Response = 1497,
        BSCommitWPTxn = 1498,
        BSCommitAdyenTxn = 1499,
        BaseATS = 1500,
        ATSStartStressTest = 1501,
        ATSStopStressTest = 1502,
        ATSRunFailServerTest = 1503,
        ATSUFSPerfTestTask = 1504,
        ATSUFSPerfTestResponse = 1505,
        ATSCycleTCM = 1506,
        ATSInitDRMSStressTest = 1507,
        ATSCallTest = 1508,
        ATSCallTestReply = 1509,
        ATSStartExternalStress = 1510,
        ATSExternalStressJobStart = 1511,
        ATSExternalStressJobQueued = 1512,
        ATSExternalStressJobRunning = 1513,
        ATSExternalStressJobStopped = 1514,
        ATSExternalStressJobStopAll = 1515,
        ATSExternalStressActionResult = 1516,
        ATSStarted = 1517,
        ATSCSPerfTestTask = 1518,
        ATSCSPerfTestResponse = 1519,
        BaseDP = 1600,
        DPSetPublishingState = 1601,
        DPGamePlayedStats = 1602,
        DPUniquePlayersStat = 1603,
        DPStreamingUniquePlayersStat = 1604,
        DPVacInfractionStats = 1605,
        DPVacBanStats = 1606,
        DPBlockingStats = 1607,
        DPNatTraversalStats = 1608,
        DPSteamUsageEvent = 1609,
        DPVacCertBanStats = 1610,
        DPVacCafeBanStats = 1611,
        DPCloudStats = 1612,
        DPAchievementStats = 1613,
        DPAccountCreationStats = 1614,
        DPGetPlayerCount = 1615,
        DPGetPlayerCountResponse = 1616,
        DPGameServersPlayersStats = 1617,
        DPDownloadRateStatistics = 1618,
        DPFacebookStatistics = 1619,
        ClientDPCheckSpecialSurvey = 1620,
        ClientDPCheckSpecialSurveyResponse = 1621,
        ClientDPSendSpecialSurveyResponse = 1622,
        ClientDPSendSpecialSurveyResponseReply = 1623,
        DPStoreSaleStatistics = 1624,
        ClientDPUpdateAppJobReport = 1625,
        DPUpdateContentEvent = 1626,
        ClientDPSteam2AppStarted = 1627,
        ClientDPUnsignedInstallScript = 1627,
        DPPartnerMicroTxns = 1628,
        DPPartnerMicroTxnsResponse = 1629,
        ClientDPContentStatsReport = 1630,
        DPVRUniquePlayersStat = 1631,
        BaseCM = 1700,
        CMSetAllowState = 1701,
        CMSpewAllowState = 1702,
        CMAppInfoResponseDeprecated = 1703,
        CMSessionRejected = 1703,
        CMSetSecrets = 1704,
        CMGetSecrets = 1705,
        BaseDSS = 1800,
        DSSNewFile = 1801,
        DSSCurrentFileList = 1802,
        DSSSynchList = 1803,
        DSSSynchListResponse = 1804,
        DSSSynchSubscribe = 1805,
        DSSSynchUnsubscribe = 1806,
        BaseEPM = 1900,
        EPMStartProcess = 1901,
        EPMStopProcess = 1902,
        EPMRestartProcess = 1903,
        GCSendClient = 2200,
        BaseGC = 2200,
        AMRelayToGC = 2201,
        GCUpdatePlayedState = 2202,
        GCCmdRevive = 2203,
        GCCmdBounce = 2204,
        GCCmdForceBounce = 2205,
        GCCmdDown = 2206,
        GCCmdDeploy = 2207,
        GCCmdDeployResponse = 2208,
        GCCmdSwitch = 2209,
        AMRefreshSessions = 2210,
        GCUpdateGSState = 2211,
        GCAchievementAwarded = 2212,
        GCSystemMessage = 2213,
        GCValidateSession = 2214,
        GCValidateSessionResponse = 2215,
        GCCmdStatus = 2216,
        GCRegisterWebInterfaces = 2217,
        GCRegisterWebInterfaces_Deprecated = 2217,
        GCGetAccountDetails = 2218,
        GCGetAccountDetails_DEPRECATED = 2218,
        GCInterAppMessage = 2219,
        GCGetEmailTemplate = 2220,
        GCGetEmailTemplateResponse = 2221,
        ISRelayToGCH = 2222,
        GCHRelay = 2222,
        GCHRelayClientToIS = 2223,
        GCHRelayToClient = 2223,
        GCHUpdateSession = 2224,
        GCHRequestUpdateSession = 2225,
        GCHRequestStatus = 2226,
        GCHRequestStatusResponse = 2227,
        GCHAccountVacStatusChange = 2228,
        GCHSpawnGC = 2229,
        GCHSpawnGCResponse = 2230,
        GCHKillGC = 2231,
        GCHKillGCResponse = 2232,
        GCHAccountTradeBanStatusChange = 2233,
        GCHAccountLockStatusChange = 2234,
        GCHVacVerificationChange = 2235,
        GCHAccountPhoneNumberChange = 2236,
        GCHAccountTwoFactorChange = 2237,
        GCHInviteUserToLobby = 2238,
        BaseP2P = 2500,
        P2PIntroducerMessage = 2502,
        BaseSM = 2900,
        SMExpensiveReport = 2902,
        SMHourlyReport = 2903,
        SMFishingReport = 2904,
        SMPartitionRenames = 2905,
        SMMonitorSpace = 2906,
        SMGetSchemaConversionResults = 2907,
        SMTestNextBuildSchemaConversion = 2907,
        SMGetSchemaConversionResultsResponse = 2908,
        SMTestNextBuildSchemaConversionResponse = 2908,
        BaseTest = 3000,
        FailServer = 3000,
        JobHeartbeatTest = 3001,
        JobHeartbeatTestResponse = 3002,
        BaseFTSRange = 3100,
        FTSGetBrowseCounts = 3101,
        FTSGetBrowseCountsResponse = 3102,
        FTSBrowseClans = 3103,
        FTSBrowseClansResponse = 3104,
        FTSSearchClansByLocation = 3105,
        FTSSearchClansByLocationResponse = 3106,
        FTSSearchPlayersByLocation = 3107,
        FTSSearchPlayersByLocationResponse = 3108,
        FTSClanDeleted = 3109,
        FTSSearch = 3110,
        FTSSearchResponse = 3111,
        FTSSearchStatus = 3112,
        FTSSearchStatusResponse = 3113,
        FTSGetGSPlayStats = 3114,
        FTSGetGSPlayStatsResponse = 3115,
        FTSGetGSPlayStatsForServer = 3116,
        FTSGetGSPlayStatsForServerResponse = 3117,
        FTSReportIPUpdates = 3118,
        BaseCCSRange = 3150,
        CCSGetComments = 3151,
        CCSGetCommentsResponse = 3152,
        CCSAddComment = 3153,
        CCSAddCommentResponse = 3154,
        CCSDeleteComment = 3155,
        CCSDeleteCommentResponse = 3156,
        CCSPreloadComments = 3157,
        CCSNotifyCommentCount = 3158,
        CCSGetCommentsForNews = 3159,
        CCSGetCommentsForNewsResponse = 3160,
        CCSDeleteAllCommentsByAuthor = 3161,
        CCSDeleteAllCommentsByAuthorResponse = 3162,
        BaseLBSRange = 3200,
        LBSSetScore = 3201,
        LBSSetScoreResponse = 3202,
        LBSFindOrCreateLB = 3203,
        LBSFindOrCreateLBResponse = 3204,
        LBSGetLBEntries = 3205,
        LBSGetLBEntriesResponse = 3206,
        LBSGetLBList = 3207,
        LBSGetLBListResponse = 3208,
        LBSSetLBDetails = 3209,
        LBSDeleteLB = 3210,
        LBSDeleteLBEntry = 3211,
        LBSResetLB = 3212,
        LBSResetLBResponse = 3213,
        LBSDeleteLBResponse = 3214,
        BaseOGS = 3400,
        OGSBeginSession = 3401,
        OGSBeginSessionResponse = 3402,
        OGSEndSession = 3403,
        OGSEndSessionResponse = 3404,
        OGSWriteAppSessionRow = 3406,
        BaseBRP = 3600,
        BRPStartShippingJobs = 3601,
        BRPProcessUSBankReports = 3602,
        BRPProcessGCReports = 3603,
        BRPProcessPPReports = 3604,
        BRPSettleNOVA = 3605,
        BRPSettleCB = 3606,
        BRPCommitGC = 3607,
        BRPCommitGCResponse = 3608,
        BRPFindHungTransactions = 3609,
        BRPCheckFinanceCloseOutDate = 3610,
        BRPProcessLicenses = 3611,
        BRPProcessLicensesResponse = 3612,
        BRPRemoveExpiredPaymentData = 3613,
        BRPRemoveExpiredPaymentDataResponse = 3614,
        BRPConvertToCurrentKeys = 3615,
        BRPConvertToCurrentKeysResponse = 3616,
        BRPPruneCardUsageStats = 3617,
        BRPPruneCardUsageStatsResponse = 3618,
        BRPCheckActivationCodes = 3619,
        BRPCheckActivationCodesResponse = 3620,
        BRPCommitWP = 3621,
        BRPCommitWPResponse = 3622,
        BRPProcessWPReports = 3623,
        BRPProcessPaymentRules = 3624,
        BRPProcessPartnerPayments = 3625,
        BRPCheckSettlementReports = 3626,
        BRPPostTaxToAvalara = 3628,
        BRPPostTransactionTax = 3629,
        BRPPostTransactionTaxResponse = 3630,
        BRPProcessIMReports = 3631,
        BaseAMRange2 = 4000,
        AMCreateChat = 4001,
        AMCreateChatResponse = 4002,
        AMUpdateChatMetadata = 4003,
        AMPublishChatMetadata = 4004,
        AMSetProfileURL = 4005,
        AMGetAccountEmailAddress = 4006,
        AMGetAccountEmailAddressResponse = 4007,
        AMRequestClanData = 4008,
        AMRouteToClients = 4009,
        AMLeaveClan = 4010,
        AMClanPermissions = 4011,
        AMClanPermissionsResponse = 4012,
        AMCreateClanEvent = 4013,
        AMCreateClanEventDummyForRateLimiting = 4013,
        AMCreateClanEventResponse = 4014,
        AMUpdateClanEvent = 4015,
        AMUpdateClanEventDummyForRateLimiting = 4015,
        AMUpdateClanEventResponse = 4016,
        AMGetClanEvents = 4017,
        AMGetClanEventsResponse = 4018,
        AMDeleteClanEvent = 4019,
        AMDeleteClanEventResponse = 4020,
        AMSetClanPermissionSettings = 4021,
        AMSetClanPermissionSettingsResponse = 4022,
        AMGetClanPermissionSettings = 4023,
        AMGetClanPermissionSettingsResponse = 4024,
        AMPublishChatRoomInfo = 4025,
        ClientChatRoomInfo = 4026,
        AMCreateClanAnnouncement = 4027,
        AMCreateClanAnnouncementResponse = 4028,
        AMUpdateClanAnnouncement = 4029,
        AMUpdateClanAnnouncementResponse = 4030,
        AMGetClanAnnouncementsCount = 4031,
        AMGetClanAnnouncementsCountResponse = 4032,
        AMGetClanAnnouncements = 4033,
        AMGetClanAnnouncementsResponse = 4034,
        AMDeleteClanAnnouncement = 4035,
        AMDeleteClanAnnouncementResponse = 4036,
        AMGetSingleClanAnnouncement = 4037,
        AMGetSingleClanAnnouncementResponse = 4038,
        AMGetClanHistory = 4039,
        AMGetClanHistoryResponse = 4040,
        AMGetClanPermissionBits = 4041,
        AMGetClanPermissionBitsResponse = 4042,
        AMSetClanPermissionBits = 4043,
        AMSetClanPermissionBitsResponse = 4044,
        AMSessionInfoRequest = 4045,
        AMSessionInfoResponse = 4046,
        AMValidateWGToken = 4047,
        AMGetSingleClanEvent = 4048,
        AMGetSingleClanEventResponse = 4049,
        AMGetClanRank = 4050,
        AMGetClanRankResponse = 4051,
        AMSetClanRank = 4052,
        AMSetClanRankResponse = 4053,
        AMGetClanPOTW = 4054,
        AMGetClanPOTWResponse = 4055,
        AMSetClanPOTW = 4056,
        AMSetClanPOTWResponse = 4057,
        AMRequestChatMetadata = 4058,
        AMDumpUser = 4059,
        AMKickUserFromClan = 4060,
        AMAddFounderToClan = 4061,
        AMValidateWGTokenResponse = 4062,
        AMSetCommunityState = 4063,
        AMSetAccountDetails = 4064,
        AMGetChatBanList = 4065,
        AMGetChatBanListResponse = 4066,
        AMUnBanFromChat = 4067,
        AMSetClanDetails = 4068,
        AMGetAccountLinks = 4069,
        AMGetAccountLinksResponse = 4070,
        AMSetAccountLinks = 4071,
        AMSetAccountLinksResponse = 4072,
        AMGetUserGameStats = 4073,
        UGSGetUserGameStats = 4073,
        AMGetUserGameStatsResponse = 4074,
        UGSGetUserGameStatsResponse = 4074,
        AMCheckClanMembership = 4075,
        AMGetClanMembers = 4076,
        AMGetClanMembersResponse = 4077,
        AMJoinPublicClan = 4078,
        AMNotifyChatOfClanChange = 4079,
        AMResubmitPurchase = 4080,
        AMAddFriend = 4081,
        AMAddFriendResponse = 4082,
        AMRemoveFriend = 4083,
        AMDumpClan = 4084,
        AMChangeClanOwner = 4085,
        AMCancelEasyCollect = 4086,
        AMCancelEasyCollectResponse = 4087,
        AMGetClanMembershipList = 4088,
        AMGetClanMembershipListResponse = 4089,
        AMClansInCommon = 4090,
        AMClansInCommonResponse = 4091,
        AMIsValidAccountID = 4092,
        AMConvertClan = 4093,
        AMGetGiftTargetListRelay = 4094,
        AMWipeFriendsList = 4095,
        AMSetIgnored = 4096,
        AMClansInCommonCountResponse = 4097,
        AMFriendsList = 4098,
        AMFriendsListResponse = 4099,
        AMFriendsInCommon = 4100,
        AMFriendsInCommonResponse = 4101,
        AMFriendsInCommonCountResponse = 4102,
        AMClansInCommonCount = 4103,
        AMChallengeVerdict = 4104,
        AMChallengeNotification = 4105,
        AMFindGSByIP = 4106,
        AMFoundGSByIP = 4107,
        AMGiftRevoked = 4108,
        AMCreateAccountRecord = 4109,
        AMUserClanList = 4110,
        AMUserClanListResponse = 4111,
        AMGetAccountDetails2 = 4112,
        AMGetAccountDetailsResponse2 = 4113,
        AMSetCommunityProfileSettings = 4114,
        AMSetCommunityProfileSettingsResponse = 4115,
        AMGetCommunityPrivacyState = 4116,
        AMGetCommunityPrivacyStateResponse = 4117,
        AMCheckClanInviteRateLimiting = 4118,
        AMGetUserAchievementStatus = 4119,
        UGSGetUserAchievementStatus = 4119,
        AMGetIgnored = 4120,
        AMGetIgnoredResponse = 4121,
        AMSetIgnoredResponse = 4122,
        AMSetFriendRelationshipNone = 4123,
        AMGetFriendRelationship = 4124,
        AMGetFriendRelationshipResponse = 4125,
        AMServiceModulesCache = 4126,
        AMServiceModulesCall = 4127,
        AMServiceModulesCallResponse = 4128,
        AMGetCaptchaDataForIP = 4129,
        AMGetCaptchaDataForIPResponse = 4130,
        AMValidateCaptchaDataForIP = 4131,
        AMValidateCaptchaDataForIPResponse = 4132,
        AMTrackFailedAuthByIP = 4133,
        AMGetCaptchaDataByGID = 4134,
        AMGetCaptchaDataByGIDResponse = 4135,
        AMGetLobbyList = 4136,
        AMGetLobbyListResponse = 4137,
        AMGetLobbyMetadata = 4138,
        AMGetLobbyMetadataResponse = 4139,
        CommunityAddFriendNews = 4140,
        AMAddClanNews = 4141,
        AMWriteNews = 4142,
        AMFindClanUser = 4143,
        AMFindClanUserResponse = 4144,
        AMBanFromChat = 4145,
        AMGetUserHistoryResponse = 4146,
        AMGetUserNewsSubscriptions = 4147,
        AMGetUserNewsSubscriptionsResponse = 4148,
        AMSetUserNewsSubscriptions = 4149,
        AMGetUserNews = 4150,
        AMGetUserNewsResponse = 4151,
        AMSendQueuedEmails = 4152,
        AMSetLicenseFlags = 4153,
        AMGetUserHistory = 4154,
        CommunityDeleteUserNews = 4155,
        AMAllowUserFilesRequest = 4156,
        AMAllowUserFilesResponse = 4157,
        AMGetAccountStatus = 4158,
        AMGetAccountStatusResponse = 4159,
        AMEditBanReason = 4160,
        AMCheckClanMembershipResponse = 4161,
        AMProbeClanMembershipList = 4162,
        AMProbeClanMembershipListResponse = 4163,
        UGSGetUserAchievementStatusResponse = 4164,
        AMGetFriendsLobbies = 4165,
        AMGetFriendsLobbiesResponse = 4166,
        AMGetUserFriendNewsResponse = 4172,
        CommunityGetUserFriendNews = 4173,
        AMGetUserClansNewsResponse = 4174,
        AMGetUserClansNews = 4175,
        AMStoreInitPurchase = 4176,
        AMStoreInitPurchaseResponse = 4177,
        AMStoreGetFinalPrice = 4178,
        AMStoreGetFinalPriceResponse = 4179,
        AMStoreCompletePurchase = 4180,
        AMStoreCancelPurchase = 4181,
        AMStorePurchaseResponse = 4182,
        AMCreateAccountRecordInSteam3 = 4183,
        AMGetPreviousCBAccount = 4184,
        AMGetPreviousCBAccountResponse = 4185,
        AMUpdateBillingAddress = 4186,
        AMUpdateBillingAddressResponse = 4187,
        AMGetBillingAddress = 4188,
        AMGetBillingAddressResponse = 4189,
        AMGetUserLicenseHistory = 4190,
        AMGetUserLicenseHistoryResponse = 4191,
        AMSupportChangePassword = 4194,
        AMSupportChangeEmail = 4195,
        AMSupportChangeSecretQA = 4196,
        AMResetUserVerificationGSByIP = 4197,
        AMUpdateGSPlayStats = 4198,
        AMSupportEnableOrDisable = 4199,
        AMGetComments = 4200,
        AMGetCommentsResponse = 4201,
        AMAddComment = 4202,
        AMAddCommentResponse = 4203,
        AMDeleteComment = 4204,
        AMDeleteCommentResponse = 4205,
        AMGetPurchaseStatus = 4206,
        AMSupportIsAccountEnabled = 4209,
        AMSupportIsAccountEnabledResponse = 4210,
        AMGetUserStats = 4211,
        UGSGetUserStats = 4211,
        AMSupportKickSession = 4212,
        AMGSSearch = 4213,
        MarketingMessageUpdate = 4216,
        AMRouteFriendMsg = 4219,
        ChatServerRouteFriendMsg = 4219,
        AMTicketAuthRequestOrResponse = 4220,
        AMVerifyDepotManagementRights = 4222,
        AMVerifyDepotManagementRightsResponse = 4223,
        AMAddFreeLicense = 4224,
        AMGetUserFriendsMinutesPlayed = 4225,
        AMGetUserFriendsMinutesPlayedResponse = 4226,
        AMGetUserMinutesPlayed = 4227,
        AMGetUserMinutesPlayedResponse = 4228,
        AMValidateEmailLink = 4231,
        AMValidateEmailLinkResponse = 4232,
        AMAddUsersToMarketingTreatment = 4234,
        AMStoreUserStats = 4236,
        UGSStoreUserStats = 4236,
        AMGetUserGameplayInfo = 4237,
        AMGetUserGameplayInfoResponse = 4238,
        AMGetCardList = 4239,
        AMGetCardListResponse = 4240,
        AMDeleteStoredCard = 4241,
        AMRevokeLegacyGameKeys = 4242,
        AMGetWalletDetails = 4244,
        AMGetWalletDetailsResponse = 4245,
        AMDeleteStoredPaymentInfo = 4246,
        AMGetStoredPaymentSummary = 4247,
        AMGetStoredPaymentSummaryResponse = 4248,
        AMGetWalletConversionRate = 4249,
        AMGetWalletConversionRateResponse = 4250,
        AMConvertWallet = 4251,
        AMConvertWalletResponse = 4252,
        AMRelayGetFriendsWhoPlayGame = 4253,
        AMRelayGetFriendsWhoPlayGameResponse = 4254,
        AMSetPreApproval = 4255,
        AMSetPreApprovalResponse = 4256,
        AMMarketingTreatmentUpdate = 4257,
        AMCreateRefund = 4258,
        AMCreateRefundResponse = 4259,
        AMCreateChargeback = 4260,
        AMCreateChargebackResponse = 4261,
        AMCreateDispute = 4262,
        AMCreateDisputeResponse = 4263,
        AMClearDispute = 4264,
        AMClearDisputeResponse = 4265,
        AMCreateFinancialAdjustment = 4265,
        AMPlayerNicknameList = 4266,
        AMPlayerNicknameListResponse = 4267,
        AMSetDRMTestConfig = 4268,
        AMGetUserCurrentGameInfo = 4269,
        AMGetUserCurrentGameInfoResponse = 4270,
        AMGetGSPlayerList = 4271,
        AMGetGSPlayerListResponse = 4272,
        AMUpdatePersonaStateCache = 4275,
        AMGetGameMembers = 4276,
        AMGetGameMembersResponse = 4277,
        AMGetSteamIDForMicroTxn = 4278,
        AMGetSteamIDForMicroTxnResponse = 4279,
        AMAddPublisherUser = 4280,
        AMSetPartnerMember = 4280,
        AMRemovePublisherUser = 4281,
        AMGetUserLicenseList = 4282,
        AMGetUserLicenseListResponse = 4283,
        AMReloadGameGroupPolicy = 4284,
        AMAddFreeLicenseResponse = 4285,
        AMVACStatusUpdate = 4286,
        AMGetAccountDetails = 4287,
        AMGetAccountDetailsResponse = 4288,
        AMGetPlayerLinkDetails = 4289,
        AMGetPlayerLinkDetailsResponse = 4290,
        AMSubscribeToPersonaFeed = 4291,
        AMGetUserVacBanList = 4292,
        AMGetUserVacBanListResponse = 4293,
        AMGetAccountFlagsForWGSpoofing = 4294,
        AMGetAccountFlagsForWGSpoofingResponse = 4295,
        AMGetFriendsWishlistInfo = 4296,
        AMGetFriendsWishlistInfoResponse = 4297,
        AMGetClanOfficers = 4298,
        AMGetClanOfficersResponse = 4299,
        AMNameChange = 4300,
        AMGetNameHistory = 4301,
        AMGetNameHistoryResponse = 4302,
        AMUpdateProviderStatus = 4305,
        AMClearPersonaMetadataBlob = 4306,
        AMSupportRemoveAccountSecurity = 4307,
        AMIsAccountInCaptchaGracePeriod = 4308,
        AMIsAccountInCaptchaGracePeriodResponse = 4309,
        AMAccountPS3Unlink = 4310,
        AMAccountPS3UnlinkResponse = 4311,
        AMStoreUserStatsResponse = 4312,
        UGSStoreUserStatsResponse = 4312,
        AMGetAccountPSNInfo = 4313,
        AMGetAccountPSNInfoResponse = 4314,
        AMAuthenticatedPlayerList = 4315,
        AMGetUserGifts = 4316,
        AMGetUserGiftsResponse = 4317,
        AMTransferLockedGifts = 4320,
        AMTransferLockedGiftsResponse = 4321,
        AMPlayerHostedOnGameServer = 4322,
        AMGetAccountBanInfo = 4323,
        AMGetAccountBanInfoResponse = 4324,
        AMRecordBanEnforcement = 4325,
        AMRollbackGiftTransfer = 4326,
        AMRollbackGiftTransferResponse = 4327,
        AMHandlePendingTransaction = 4328,
        AMRequestClanDetails = 4329,
        AMDeleteStoredPaypalAgreement = 4330,
        AMGameServerUpdate = 4331,
        AMGameServerRemove = 4332,
        AMGetPaypalAgreements = 4333,
        AMGetPaypalAgreementsResponse = 4334,
        AMGameServerPlayerCompatibilityCheck = 4335,
        AMGameServerPlayerCompatibilityCheckResponse = 4336,
        AMRenewLicense = 4337,
        AMGetAccountCommunityBanInfo = 4338,
        AMGetAccountCommunityBanInfoResponse = 4339,
        AMGameServerAccountChangePassword = 4340,
        AMGameServerAccountDeleteAccount = 4341,
        AMRenewAgreement = 4342,
        AMSendEmail = 4343,
        AMXsollaPayment = 4344,
        AMXsollaPaymentResponse = 4345,
        AMAcctAllowedToPurchase = 4346,
        AMAcctAllowedToPurchaseResponse = 4347,
        AMSwapKioskDeposit = 4348,
        AMSwapKioskDepositResponse = 4349,
        AMSetUserGiftUnowned = 4350,
        AMSetUserGiftUnownedResponse = 4351,
        AMClaimUnownedUserGift = 4352,
        AMClaimUnownedUserGiftResponse = 4353,
        AMSetClanName = 4354,
        AMSetClanNameResponse = 4355,
        AMGrantCoupon = 4356,
        AMGrantCouponResponse = 4357,
        AMIsPackageRestrictedInUserCountry = 4358,
        AMIsPackageRestrictedInUserCountryResponse = 4359,
        AMHandlePendingTransactionResponse = 4360,
        AMGrantGuestPasses2 = 4361,
        AMGrantGuestPasses2Response = 4362,
        AMSessionQuery = 4363,
        AMSessionQueryResponse = 4364,
        AMGetPlayerBanDetails = 4365,
        AMGetPlayerBanDetailsResponse = 4366,
        AMFinalizePurchase = 4367,
        AMFinalizePurchaseResponse = 4368,
        AMPersonaChangeResponse = 4372,
        AMGetClanDetailsForForumCreation = 4373,
        AMGetClanDetailsForForumCreationResponse = 4374,
        AMGetPendingNotificationCount = 4375,
        AMGetPendingNotificationCountResponse = 4376,
        AMPasswordHashUpgrade = 4377,
        AMMoPayPayment = 4378,
        AMMoPayPaymentResponse = 4379,
        AMBoaCompraPayment = 4380,
        AMBoaCompraPaymentResponse = 4381,
        AMExpireCaptchaByGID = 4382,
        AMCompleteExternalPurchase = 4383,
        AMCompleteExternalPurchaseResponse = 4384,
        AMResolveNegativeWalletCredits = 4385,
        AMResolveNegativeWalletCreditsResponse = 4386,
        AMPayelpPayment = 4387,
        AMPayelpPaymentResponse = 4388,
        AMPlayerGetClanBasicDetails = 4389,
        AMPlayerGetClanBasicDetailsResponse = 4390,
        AMMOLPayment = 4391,
        AMMOLPaymentResponse = 4392,
        GetUserIPCountry = 4393,
        GetUserIPCountryResponse = 4394,
        NotificationOfSuspiciousActivity = 4395,
        AMDegicaPayment = 4396,
        AMDegicaPaymentResponse = 4397,
        AMEClubPayment = 4398,
        AMEClubPaymentResponse = 4399,
        AMPayPalPaymentsHubPayment = 4400,
        AMPayPalPaymentsHubPaymentResponse = 4401,
        AMTwoFactorRecoverAuthenticatorRequest = 4402,
        AMTwoFactorRecoverAuthenticatorResponse = 4403,
        AMSmart2PayPayment = 4404,
        AMSmart2PayPaymentResponse = 4405,
        AMValidatePasswordResetCodeAndSendSmsRequest = 4406,
        AMValidatePasswordResetCodeAndSendSmsResponse = 4407,
        AMGetAccountResetDetailsRequest = 4408,
        AMGetAccountResetDetailsResponse = 4409,
        AMBitPayPayment = 4410,
        AMBitPayPaymentResponse = 4411,
        AMSendAccountInfoUpdate = 4412,
        AMSendScheduledGift = 4413,
        AMNodwinPayment = 4414,
        AMNodwinPaymentResponse = 4415,
        AMResolveWalletRevoke = 4416,
        AMResolveWalletReverseRevoke = 4417,
        AMFundedPayment = 4418,
        AMFundedPaymentResponse = 4419,
        AMRequestPersonaUpdateForChatServer = 4420,
        AMPerfectWorldPayment = 4421,
        AMPerfectWorldPaymentResponse = 4422,
        BasePSRange = 5000,
        PSCreateShoppingCart = 5001,
        PSCreateShoppingCartResponse = 5002,
        PSIsValidShoppingCart = 5003,
        PSIsValidShoppingCartResponse = 5004,
        PSAddPackageToShoppingCart = 5005,
        PSAddPackageToShoppingCartResponse = 5006,
        PSRemoveLineItemFromShoppingCart = 5007,
        PSRemoveLineItemFromShoppingCartResponse = 5008,
        PSGetShoppingCartContents = 5009,
        PSGetShoppingCartContentsResponse = 5010,
        PSAddWalletCreditToShoppingCart = 5011,
        PSAddWalletCreditToShoppingCartResponse = 5012,
        BaseUFSRange = 5200,
        ClientUFSUploadFileRequest = 5202,
        ClientUFSUploadFileResponse = 5203,
        ClientUFSUploadFileChunk = 5204,
        ClientUFSUploadFileFinished = 5205,
        ClientUFSGetFileListForApp = 5206,
        ClientUFSGetFileListForAppResponse = 5207,
        ClientUFSDownloadRequest = 5210,
        ClientUFSDownloadResponse = 5211,
        ClientUFSDownloadChunk = 5212,
        ClientUFSLoginRequest = 5213,
        ClientUFSLoginResponse = 5214,
        UFSReloadPartitionInfo = 5215,
        ClientUFSTransferHeartbeat = 5216,
        UFSSynchronizeFile = 5217,
        UFSSynchronizeFileResponse = 5218,
        ClientUFSDeleteFileRequest = 5219,
        ClientUFSDeleteFileResponse = 5220,
        UFSDownloadRequest = 5221,
        UFSDownloadResponse = 5222,
        UFSDownloadChunk = 5223,
        ClientUFSGetUGCDetails = 5226,
        ClientUFSGetUGCDetailsResponse = 5227,
        UFSUpdateFileFlags = 5228,
        UFSUpdateFileFlagsResponse = 5229,
        ClientUFSGetSingleFileInfo = 5230,
        ClientUFSGetSingleFileInfoResponse = 5231,
        ClientUFSShareFile = 5232,
        ClientUFSShareFileResponse = 5233,
        UFSReloadAccount = 5234,
        UFSReloadAccountResponse = 5235,
        UFSUpdateRecordBatched = 5236,
        UFSUpdateRecordBatchedResponse = 5237,
        UFSMigrateFile = 5238,
        UFSMigrateFileResponse = 5239,
        UFSGetUGCURLs = 5240,
        UFSGetUGCURLsResponse = 5241,
        UFSHttpUploadFileFinishRequest = 5242,
        UFSHttpUploadFileFinishResponse = 5243,
        UFSDownloadStartRequest = 5244,
        UFSDownloadStartResponse = 5245,
        UFSDownloadChunkRequest = 5246,
        UFSDownloadChunkResponse = 5247,
        UFSDownloadFinishRequest = 5248,
        UFSDownloadFinishResponse = 5249,
        UFSFlushURLCache = 5250,
        UFSUploadCommit = 5251,
        ClientUFSUploadCommit = 5251,
        UFSUploadCommitResponse = 5252,
        ClientUFSUploadCommitResponse = 5252,
        UFSMigrateFileAppID = 5253,
        UFSMigrateFileAppIDResponse = 5254,
        BaseClient2 = 5400,
        ClientRequestForgottenPasswordEmail = 5401,
        ClientRequestForgottenPasswordEmailResponse = 5402,
        ClientCreateAccountResponse = 5403,
        ClientResetForgottenPassword = 5404,
        ClientResetForgottenPasswordResponse = 5405,
        ClientCreateAccount2 = 5406,
        ClientInformOfResetForgottenPassword = 5407,
        ClientInformOfResetForgottenPasswordResponse = 5408,
        ClientAnonUserLogOn_Deprecated = 5409,
        ClientGamesPlayedWithDataBlob = 5410,
        ClientUpdateUserGameInfo = 5411,
        ClientFileToDownload = 5412,
        ClientFileToDownloadResponse = 5413,
        ClientLBSSetScore = 5414,
        ClientLBSSetScoreResponse = 5415,
        ClientLBSFindOrCreateLB = 5416,
        ClientLBSFindOrCreateLBResponse = 5417,
        ClientLBSGetLBEntries = 5418,
        ClientLBSGetLBEntriesResponse = 5419,
        ClientMarketingMessageUpdate = 5420,
        ClientChatDeclined = 5426,
        ClientFriendMsgIncoming = 5427,
        ClientAuthList_Deprecated = 5428,
        ClientTicketAuthComplete = 5429,
        ClientIsLimitedAccount = 5430,
        ClientRequestAuthList = 5431,
        ClientAuthList = 5432,
        ClientStat = 5433,
        ClientP2PConnectionInfo = 5434,
        ClientP2PConnectionFailInfo = 5435,
        ClientGetNumberOfCurrentPlayers = 5436,
        ClientGetNumberOfCurrentPlayersResponse = 5437,
        ClientGetDepotDecryptionKey = 5438,
        ClientGetDepotDecryptionKeyResponse = 5439,
        GSPerformHardwareSurvey = 5440,
        ClientGetAppBetaPasswords = 5441,
        ClientGetAppBetaPasswordsResponse = 5442,
        ClientEnableTestLicense = 5443,
        ClientEnableTestLicenseResponse = 5444,
        ClientDisableTestLicense = 5445,
        ClientDisableTestLicenseResponse = 5446,
        ClientRequestValidationMail = 5448,
        ClientRequestValidationMailResponse = 5449,
        ClientCheckAppBetaPassword = 5450,
        ClientCheckAppBetaPasswordResponse = 5451,
        ClientToGC = 5452,
        ClientFromGC = 5453,
        ClientRequestChangeMail = 5454,
        ClientRequestChangeMailResponse = 5455,
        ClientEmailAddrInfo = 5456,
        ClientPasswordChange3 = 5457,
        ClientEmailChange3 = 5458,
        ClientPersonalQAChange3 = 5459,
        ClientResetForgottenPassword3 = 5460,
        ClientRequestForgottenPasswordEmail3 = 5461,
        ClientCreateAccount3 = 5462,
        ClientNewLoginKey = 5463,
        ClientNewLoginKeyAccepted = 5464,
        ClientLogOnWithHash_Deprecated = 5465,
        ClientStoreUserStats2 = 5466,
        ClientStatsUpdated = 5467,
        ClientActivateOEMLicense = 5468,
        ClientRegisterOEMMachine = 5469,
        ClientRegisterOEMMachineResponse = 5470,
        ClientRequestedClientStats = 5480,
        ClientStat2Int32 = 5481,
        ClientStat2 = 5482,
        ClientVerifyPassword = 5483,
        ClientVerifyPasswordResponse = 5484,
        ClientDRMDownloadRequest = 5485,
        ClientDRMDownloadResponse = 5486,
        ClientDRMFinalResult = 5487,
        ClientGetFriendsWhoPlayGame = 5488,
        ClientGetFriendsWhoPlayGameResponse = 5489,
        ClientOGSBeginSession = 5490,
        ClientOGSBeginSessionResponse = 5491,
        ClientOGSEndSession = 5492,
        ClientOGSEndSessionResponse = 5493,
        ClientOGSWriteRow = 5494,
        ClientDRMTest = 5495,
        ClientDRMTestResult = 5496,
        ClientServerUnavailable = 5500,
        ClientServersAvailable = 5501,
        ClientRegisterAuthTicketWithCM = 5502,
        ClientGCMsgFailed = 5503,
        ClientMicroTxnAuthRequest = 5504,
        ClientMicroTxnAuthorize = 5505,
        ClientMicroTxnAuthorizeResponse = 5506,
        ClientAppMinutesPlayedData = 5507,
        ClientGetMicroTxnInfo = 5508,
        ClientGetMicroTxnInfoResponse = 5509,
        ClientMarketingMessageUpdate2 = 5510,
        ClientDeregisterWithServer = 5511,
        ClientSubscribeToPersonaFeed = 5512,
        ClientLogon = 5514,
        ClientGetClientDetails = 5515,
        ClientGetClientDetailsResponse = 5516,
        ClientReportOverlayDetourFailure = 5517,
        ClientGetClientAppList = 5518,
        ClientGetClientAppListResponse = 5519,
        ClientInstallClientApp = 5520,
        ClientInstallClientAppResponse = 5521,
        ClientUninstallClientApp = 5522,
        ClientUninstallClientAppResponse = 5523,
        ClientSetClientAppUpdateState = 5524,
        ClientSetClientAppUpdateStateResponse = 5525,
        ClientRequestEncryptedAppTicket = 5526,
        ClientRequestEncryptedAppTicketResponse = 5527,
        ClientWalletInfoUpdate = 5528,
        ClientLBSSetUGC = 5529,
        ClientLBSSetUGCResponse = 5530,
        ClientAMGetClanOfficers = 5531,
        ClientAMGetClanOfficersResponse = 5532,
        ClientCheckFileSignature = 5533,
        ClientCheckFileSignatureResponse = 5534,
        ClientFriendProfileInfo = 5535,
        ClientFriendProfileInfoResponse = 5536,
        ClientUpdateMachineAuth = 5537,
        ClientUpdateMachineAuthResponse = 5538,
        ClientReadMachineAuth = 5539,
        ClientReadMachineAuthResponse = 5540,
        ClientRequestMachineAuth = 5541,
        ClientRequestMachineAuthResponse = 5542,
        ClientScreenshotsChanged = 5543,
        ClientEmailChange4 = 5544,
        ClientEmailChangeResponse4 = 5545,
        ClientGetCDNAuthToken = 5546,
        ClientGetCDNAuthTokenResponse = 5547,
        ClientDownloadRateStatistics = 5548,
        ClientRequestAccountData = 5549,
        ClientRequestAccountDataResponse = 5550,
        ClientResetForgottenPassword4 = 5551,
        ClientHideFriend = 5552,
        ClientFriendsGroupsList = 5553,
        ClientGetClanActivityCounts = 5554,
        ClientGetClanActivityCountsResponse = 5555,
        ClientOGSReportString = 5556,
        ClientOGSReportBug = 5557,
        ClientSentLogs = 5558,
        ClientLogonGameServer = 5559,
        AMClientCreateFriendsGroup = 5560,
        AMClientCreateFriendsGroupResponse = 5561,
        AMClientDeleteFriendsGroup = 5562,
        AMClientDeleteFriendsGroupResponse = 5563,
        AMClientRenameFriendsGroup = 5564,
        AMClientManageFriendsGroup = 5564,
        AMClientRenameFriendsGroupResponse = 5565,
        AMClientManageFriendsGroupResponse = 5565,
        AMClientAddFriendToGroup = 5566,
        AMClientAddFriendToGroupResponse = 5567,
        AMClientRemoveFriendFromGroup = 5568,
        AMClientRemoveFriendFromGroupResponse = 5569,
        ClientAMGetPersonaNameHistory = 5570,
        ClientAMGetPersonaNameHistoryResponse = 5571,
        ClientRequestFreeLicense = 5572,
        ClientRequestFreeLicenseResponse = 5573,
        ClientDRMDownloadRequestWithCrashData = 5574,
        ClientAuthListAck = 5575,
        ClientItemAnnouncements = 5576,
        ClientRequestItemAnnouncements = 5577,
        ClientFriendMsgEchoToSender = 5578,
        ClientChangeSteamGuardOptions = 5579,
        ClientChangeSteamGuardOptionsResponse = 5580,
        ClientOGSGameServerPingSample = 5581,
        ClientCommentNotifications = 5582,
        ClientRequestCommentNotifications = 5583,
        ClientPersonaChangeResponse = 5584,
        ClientRequestWebAPIAuthenticateUserNonce = 5585,
        ClientRequestWebAPIAuthenticateUserNonceResponse = 5586,
        ClientPlayerNicknameList = 5587,
        AMClientSetPlayerNickname = 5588,
        AMClientSetPlayerNicknameResponse = 5589,
        ClientCreateAccountProto = 5590,
        ClientRequestOAuthTokenForApp = 5590,
        ClientCreateAccountProtoResponse = 5591,
        ClientRequestOAuthTokenForAppResponse = 5591,
        ClientGetNumberOfCurrentPlayersDP = 5592,
        ClientGetNumberOfCurrentPlayersDPResponse = 5593,
        ClientServiceMethod = 5594,
        ClientServiceMethodLegacy = 5594,
        ClientServiceMethodResponse = 5595,
        ClientServiceMethodLegacyResponse = 5595,
        ClientFriendUserStatusPublished = 5596,
        ClientCurrentUIMode = 5597,
        ClientVanityURLChangedNotification = 5598,
        ClientUserNotifications = 5599,
        BaseDFS = 5600,
        DFSGetFile = 5601,
        DFSInstallLocalFile = 5602,
        DFSConnection = 5603,
        DFSConnectionReply = 5604,
        ClientDFSAuthenticateRequest = 5605,
        ClientDFSAuthenticateResponse = 5606,
        ClientDFSEndSession = 5607,
        DFSPurgeFile = 5608,
        DFSRouteFile = 5609,
        DFSGetFileFromServer = 5610,
        DFSAcceptedResponse = 5611,
        DFSRequestPingback = 5612,
        DFSRecvTransmitFile = 5613,
        DFSSendTransmitFile = 5614,
        DFSRequestPingback2 = 5615,
        DFSResponsePingback2 = 5616,
        ClientDFSDownloadStatus = 5617,
        DFSStartTransfer = 5618,
        DFSTransferComplete = 5619,
        DFSRouteFileResponse = 5620,
        ClientNetworkingCertRequest = 5621,
        ClientNetworkingCertRequestResponse = 5622,
        ClientChallengeRequest = 5623,
        ClientChallengeResponse = 5624,
        BadgeCraftedNotification = 5625,
        ClientNetworkingMobileCertRequest = 5626,
        ClientNetworkingMobileCertRequestResponse = 5627,
        BaseMDS = 5800,
        ClientMDSLoginRequest = 5801,
        ClientMDSLoginResponse = 5802,
        ClientMDSUploadManifestRequest = 5803,
        ClientMDSUploadManifestResponse = 5804,
        ClientMDSTransmitManifestDataChunk = 5805,
        ClientMDSHeartbeat = 5806,
        ClientMDSUploadDepotChunks = 5807,
        ClientMDSUploadDepotChunksResponse = 5808,
        ClientMDSInitDepotBuildRequest = 5809,
        ClientMDSInitDepotBuildResponse = 5810,
        AMToMDSGetDepotDecryptionKey = 5812,
        MDSToAMGetDepotDecryptionKeyResponse = 5813,
        MDSGetVersionsForDepot = 5814,
        MDSGetVersionsForDepotResponse = 5815,
        ClientMDSInitWorkshopBuildRequest = 5816,
        MDSSetPublicVersionForDepot = 5816,
        ClientMDSInitWorkshopBuildResponse = 5817,
        MDSSetPublicVersionForDepotResponse = 5817,
        ClientMDSGetDepotManifest = 5818,
        ClientMDSGetDepotManifestResponse = 5819,
        ClientMDSGetDepotManifestChunk = 5820,
        ClientMDSUploadRateTest = 5823,
        ClientMDSUploadRateTestResponse = 5824,
        MDSDownloadDepotChunksAck = 5825,
        MDSContentServerStatsBroadcast = 5826,
        MDSContentServerConfigRequest = 5827,
        MDSContentServerConfig = 5828,
        MDSGetDepotManifest = 5829,
        MDSGetDepotManifestResponse = 5830,
        MDSGetDepotManifestChunk = 5831,
        MDSGetDepotChunk = 5832,
        MDSGetDepotChunkResponse = 5833,
        MDSGetDepotChunkChunk = 5834,
        MDSUpdateContentServerConfig = 5835,
        MDSGetServerListForUser = 5836,
        MDSGetServerListForUserResponse = 5837,
        ClientMDSRegisterAppBuild = 5838,
        ClientMDSRegisterAppBuildResponse = 5839,
        ClientMDSSetAppBuildLive = 5840,
        ClientMDSSetAppBuildLiveResponse = 5841,
        ClientMDSGetPrevDepotBuild = 5842,
        ClientMDSGetPrevDepotBuildResponse = 5843,
        MDSToCSFlushChunk = 5844,
        ClientMDSSignInstallScript = 5845,
        ClientMDSSignInstallScriptResponse = 5846,
        MDSMigrateChunk = 5847,
        MDSMigrateChunkResponse = 5848,
        MDSToCSFlushManifest = 5849,
        CSBase = 6200,
        CSPing = 6201,
        CSPingResponse = 6202,
        GMSBase = 6400,
        GMSGameServerReplicate = 6401,
        ClientGMSServerQuery = 6403,
        GMSClientServerQueryResponse = 6404,
        AMGMSGameServerUpdate = 6405,
        AMGMSGameServerRemove = 6406,
        GameServerOutOfDate = 6407,
        DeviceAuthorizationBase = 6500,
        ClientAuthorizeLocalDeviceRequest = 6501,
        ClientAuthorizeLocalDevice = 6502,
        ClientAuthorizeLocalDeviceResponse = 6502,
        ClientDeauthorizeDeviceRequest = 6503,
        ClientDeauthorizeDevice = 6504,
        ClientUseLocalDeviceAuthorizations = 6505,
        ClientGetAuthorizedDevices = 6506,
        ClientGetAuthorizedDevicesResponse = 6507,
        AMNotifySessionDeviceAuthorized = 6508,
        ClientAuthorizeLocalDeviceNotification = 6509,
        MMSBase = 6600,
        ClientMMSCreateLobby = 6601,
        ClientMMSCreateLobbyResponse = 6602,
        ClientMMSJoinLobby = 6603,
        ClientMMSJoinLobbyResponse = 6604,
        ClientMMSLeaveLobby = 6605,
        ClientMMSLeaveLobbyResponse = 6606,
        ClientMMSGetLobbyList = 6607,
        ClientMMSGetLobbyListResponse = 6608,
        ClientMMSSetLobbyData = 6609,
        ClientMMSSetLobbyDataResponse = 6610,
        ClientMMSGetLobbyData = 6611,
        ClientMMSLobbyData = 6612,
        ClientMMSSendLobbyChatMsg = 6613,
        ClientMMSLobbyChatMsg = 6614,
        ClientMMSSetLobbyOwner = 6615,
        ClientMMSSetLobbyOwnerResponse = 6616,
        ClientMMSSetLobbyGameServer = 6617,
        ClientMMSLobbyGameServerSet = 6618,
        ClientMMSUserJoinedLobby = 6619,
        ClientMMSUserLeftLobby = 6620,
        ClientMMSInviteToLobby = 6621,
        ClientMMSFlushFrenemyListCache = 6622,
        ClientMMSFlushFrenemyListCacheResponse = 6623,
        ClientMMSSetLobbyLinked = 6624,
        ClientMMSSetRatelimitPolicyOnClient = 6625,
        ClientMMSGetLobbyStatus = 6626,
        ClientMMSGetLobbyStatusResponse = 6627,
        MMSGetLobbyList = 6628,
        MMSGetLobbyListResponse = 6629,
        NonStdMsgBase = 6800,
        NonStdMsgMemcached = 6801,
        NonStdMsgHTTPServer = 6802,
        NonStdMsgHTTPClient = 6803,
        NonStdMsgWGResponse = 6804,
        NonStdMsgPHPSimulator = 6805,
        NonStdMsgChase = 6806,
        NonStdMsgDFSTransfer = 6807,
        NonStdMsgTests = 6808,
        NonStdMsgUMQpipeAAPL = 6809,
        NonStdMsgSyslog = 6810,
        NonStdMsgLogsink = 6811,
        NonStdMsgSteam2Emulator = 6812,
        NonStdMsgRTMPServer = 6813,
        NonStdMsgWebSocket = 6814,
        NonStdMsgRedis = 6815,
        UDSBase = 7000,
        ClientUDSP2PSessionStarted = 7001,
        ClientUDSP2PSessionEnded = 7002,
        UDSRenderUserAuth = 7003,
        UDSRenderUserAuthResponse = 7004,
        ClientUDSInviteToGame = 7005,
        ClientInviteToGame = 7005,
        UDSFindSession = 7006,
        UDSHasSession = 7006,
        UDSFindSessionResponse = 7007,
        UDSHasSessionResponse = 7007,
        MPASBase = 7100,
        MPASVacBanReset = 7101,
        KGSBase = 7200,
        KGSAllocateKeyRange = 7201,
        KGSAllocateKeyRangeResponse = 7202,
        KGSGenerateKeys = 7203,
        KGSGenerateKeysResponse = 7204,
        KGSRemapKeys = 7205,
        KGSRemapKeysResponse = 7206,
        KGSGenerateGameStopWCKeys = 7207,
        KGSGenerateGameStopWCKeysResponse = 7208,
        UCMBase = 7300,
        ClientUCMAddScreenshot = 7301,
        ClientUCMAddScreenshotResponse = 7302,
        UCMValidateObjectExists = 7303,
        UCMValidateObjectExistsResponse = 7304,
        UCMResetCommunityContent = 7307,
        UCMResetCommunityContentResponse = 7308,
        ClientUCMDeleteScreenshot = 7309,
        ClientUCMDeleteScreenshotResponse = 7310,
        ClientUCMPublishFile = 7311,
        ClientUCMPublishFileResponse = 7312,
        ClientUCMGetPublishedFileDetails = 7313,
        ClientUCMGetPublishedFileDetailsResponse = 7314,
        ClientUCMDeletePublishedFile = 7315,
        ClientUCMDeletePublishedFileResponse = 7316,
        ClientUCMEnumerateUserPublishedFiles = 7317,
        ClientUCMEnumerateUserPublishedFilesResponse = 7318,
        ClientUCMSubscribePublishedFile = 7319,
        ClientUCMSubscribePublishedFileResponse = 7320,
        ClientUCMEnumerateUserSubscribedFiles = 7321,
        ClientUCMEnumerateUserSubscribedFilesResponse = 7322,
        ClientUCMUnsubscribePublishedFile = 7323,
        ClientUCMUnsubscribePublishedFileResponse = 7324,
        ClientUCMUpdatePublishedFile = 7325,
        ClientUCMUpdatePublishedFileResponse = 7326,
        UCMUpdatePublishedFile = 7327,
        UCMUpdatePublishedFileResponse = 7328,
        UCMDeletePublishedFile = 7329,
        UCMDeletePublishedFileResponse = 7330,
        UCMUpdatePublishedFileStat = 7331,
        UCMUpdatePublishedFileBan = 7332,
        UCMUpdatePublishedFileBanResponse = 7333,
        UCMUpdateTaggedScreenshot = 7334,
        UCMAddTaggedScreenshot = 7335,
        UCMRemoveTaggedScreenshot = 7336,
        UCMReloadPublishedFile = 7337,
        UCMReloadUserFileListCaches = 7338,
        UCMPublishedFileReported = 7339,
        UCMUpdatePublishedFileIncompatibleStatus = 7340,
        UCMPublishedFilePreviewAdd = 7341,
        UCMPublishedFilePreviewAddResponse = 7342,
        UCMPublishedFilePreviewRemove = 7343,
        UCMPublishedFilePreviewRemoveResponse = 7344,
        UCMPublishedFilePreviewChangeSortOrder = 7345,
        UCMPublishedFilePreviewChangeSortOrderResponse = 7346,
        ClientUCMPublishedFileSubscribed = 7347,
        ClientUCMPublishedFileUnsubscribed = 7348,
        UCMPublishedFileSubscribed = 7349,
        UCMPublishedFileUnsubscribed = 7350,
        UCMPublishFile = 7351,
        UCMPublishFileResponse = 7352,
        UCMPublishedFileChildAdd = 7353,
        UCMPublishedFileChildAddResponse = 7354,
        UCMPublishedFileChildRemove = 7355,
        UCMPublishedFileChildRemoveResponse = 7356,
        UCMPublishedFileChildChangeSortOrder = 7357,
        UCMPublishedFileChildChangeSortOrderResponse = 7358,
        UCMPublishedFileParentChanged = 7359,
        ClientUCMGetPublishedFilesForUser = 7360,
        ClientUCMGetPublishedFilesForUserResponse = 7361,
        UCMGetPublishedFilesForUser = 7362,
        UCMGetPublishedFilesForUserResponse = 7363,
        ClientUCMSetUserPublishedFileAction = 7364,
        ClientUCMSetUserPublishedFileActionResponse = 7365,
        ClientUCMEnumeratePublishedFilesByUserAction = 7366,
        ClientUCMEnumeratePublishedFilesByUserActionResponse = 7367,
        ClientUCMPublishedFileDeleted = 7368,
        UCMGetUserSubscribedFiles = 7369,
        UCMGetUserSubscribedFilesResponse = 7370,
        UCMFixStatsPublishedFile = 7371,
        UCMDeleteOldScreenshot = 7372,
        UCMDeleteOldScreenshotResponse = 7373,
        UCMDeleteOldVideo = 7374,
        UCMDeleteOldVideoResponse = 7375,
        UCMUpdateOldScreenshotPrivacy = 7376,
        UCMUpdateOldScreenshotPrivacyResponse = 7377,
        ClientUCMEnumerateUserSubscribedFilesWithUpdates = 7378,
        ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse = 7379,
        UCMPublishedFileContentUpdated = 7380,
        UCMPublishedFileUpdated = 7381,
        ClientUCMPublishedFileUpdated = 7381,
        ClientWorkshopItemChangesRequest = 7382,
        ClientWorkshopItemChangesResponse = 7383,
        ClientWorkshopItemInfoRequest = 7384,
        ClientWorkshopItemInfoResponse = 7385,
        FSBase = 7500,
        ClientRichPresenceUpload = 7501,
        ClientRichPresenceRequest = 7502,
        ClientRichPresenceInfo = 7503,
        FSRichPresenceRequest = 7504,
        FSRichPresenceResponse = 7505,
        FSComputeFrenematrix = 7506,
        FSComputeFrenematrixResponse = 7507,
        FSPlayStatusNotification = 7508,
        FSPublishPersonaStatus = 7509,
        FSAddOrRemoveFollower = 7510,
        FSAddOrRemoveFollowerResponse = 7511,
        FSUpdateFollowingList = 7512,
        FSCommentNotification = 7513,
        FSCommentNotificationViewed = 7514,
        ClientFSGetFollowerCount = 7515,
        ClientFSGetFollowerCountResponse = 7516,
        ClientFSGetIsFollowing = 7517,
        ClientFSGetIsFollowingResponse = 7518,
        ClientFSEnumerateFollowingList = 7519,
        ClientFSEnumerateFollowingListResponse = 7520,
        FSGetPendingNotificationCount = 7521,
        FSGetPendingNotificationCountResponse = 7522,
        ClientFSOfflineMessageNotification = 7523,
        ClientChatOfflineMessageNotification = 7523,
        ClientFSRequestOfflineMessageCount = 7524,
        ClientChatRequestOfflineMessageCount = 7524,
        ClientFSGetFriendMessageHistory = 7525,
        ClientChatGetFriendMessageHistory = 7525,
        ClientFSGetFriendMessageHistoryResponse = 7526,
        ClientChatGetFriendMessageHistoryResponse = 7526,
        ClientFSGetFriendMessageHistoryForOfflineMessages = 7527,
        ClientChatGetFriendMessageHistoryForOfflineMessages = 7527,
        ClientFSGetFriendsSteamLevels = 7528,
        ClientFSGetFriendsSteamLevelsResponse = 7529,
        FSRequestFriendData = 7530,
        AMRequestFriendData = 7530,
        CEGVersionSetEnableDisableRequest = 7600,
        DRMRange2 = 7600,
        CEGVersionSetEnableDisableResponse = 7601,
        CEGPropStatusDRMSRequest = 7602,
        CEGPropStatusDRMSResponse = 7603,
        CEGWhackFailureReportRequest = 7604,
        CEGWhackFailureReportResponse = 7605,
        DRMSFetchVersionSet = 7606,
        DRMSFetchVersionSetResponse = 7607,
        EconBase = 7700,
        EconTrading_InitiateTradeRequest = 7701,
        EconTrading_InitiateTradeProposed = 7702,
        EconTrading_InitiateTradeResponse = 7703,
        EconTrading_InitiateTradeResult = 7704,
        EconTrading_StartSession = 7705,
        EconTrading_CancelTradeRequest = 7706,
        EconFlushInventoryCache = 7707,
        EconFlushInventoryCacheResponse = 7708,
        EconCDKeyProcessTransaction = 7711,
        EconCDKeyProcessTransactionResponse = 7712,
        EconGetErrorLogs = 7713,
        EconGetErrorLogsResponse = 7714,
        RMRange = 7800,
        RMTestVerisignOTP = 7800,
        RMTestVerisignOTPResponse = 7801,
        RMDeleteMemcachedKeys = 7803,
        RMRemoteInvoke = 7804,
        BadLoginIPList = 7805,
        RMMsgTraceAddTrigger = 7806,
        RMMsgTraceRemoveTrigger = 7807,
        RMMsgTraceEvent = 7808,
        UGSBase = 7900,
        UGSUpdateGlobalStats = 7900,
        ClientUGSGetGlobalStats = 7901,
        ClientUGSGetGlobalStatsResponse = 7902,
        StoreUpdateRecommendationCount = 8000,
        StoreBase = 8000,
        UMQBase = 8100,
        UMQLogonRequest = 8100,
        UMQLogonResponse = 8101,
        UMQLogoffRequest = 8102,
        UMQLogoffResponse = 8103,
        UMQSendChatMessage = 8104,
        UMQIncomingChatMessage = 8105,
        UMQPoll = 8106,
        UMQPollResults = 8107,
        UMQ2AM_ClientMsgBatch = 8108,
        UMQEnqueueMobileSalePromotions = 8109,
        UMQEnqueueMobileAnnouncements = 8110,
        WorkshopAcceptTOSRequest = 8200,
        WorkshopBase = 8200,
        WorkshopAcceptTOSResponse = 8201,
        WebAPIBase = 8300,
        WebAPIValidateOAuth2Token = 8300,
        WebAPIValidateOAuth2TokenResponse = 8301,
        WebAPIInvalidateTokensForAccount = 8302,
        WebAPIRegisterGCInterfaces = 8303,
        WebAPIInvalidateOAuthClientCache = 8304,
        WebAPIInvalidateOAuthTokenCache = 8305,
        WebAPISetSecrets = 8306,
        BackpackBase = 8400,
        BackpackAddToCurrency = 8401,
        BackpackAddToCurrencyResponse = 8402,
        CREBase = 8500,
        CRERankByTrend = 8501,
        CRERankByTrendResponse = 8502,
        CREItemVoteSummary = 8503,
        CREItemVoteSummaryResponse = 8504,
        CRERankByVote = 8505,
        CRERankByVoteResponse = 8506,
        CREUpdateUserPublishedItemVote = 8507,
        CREUpdateUserPublishedItemVoteResponse = 8508,
        CREGetUserPublishedItemVoteDetails = 8509,
        CREGetUserPublishedItemVoteDetailsResponse = 8510,
        CREEnumeratePublishedFiles = 8511,
        CREEnumeratePublishedFilesResponse = 8512,
        CREPublishedFileVoteAdded = 8513,
        SecretsBase = 8600,
        SecretsRequestCredentialPair = 8600,
        SecretsCredentialPairResponse = 8601,
        SecretsRequestServerIdentity = 8602,
        SecretsServerIdentityResponse = 8603,
        SecretsUpdateServerIdentities = 8604,
        BoxMonitorBase = 8700,
        BoxMonitorReportRequest = 8700,
        BoxMonitorReportResponse = 8701,
        LogsinkBase = 8800,
        LogsinkWriteReport = 8800,
        PICSBase = 8900,
        ClientPICSChangesSinceRequest = 8901,
        ClientPICSChangesSinceResponse = 8902,
        ClientPICSProductInfoRequest = 8903,
        ClientPICSProductInfoResponse = 8904,
        ClientPICSAccessTokenRequest = 8905,
        ClientPICSAccessTokenResponse = 8906,
        WorkerProcess = 9000,
        WorkerProcessPingRequest = 9000,
        WorkerProcessPingResponse = 9001,
        WorkerProcessShutdown = 9002,
        DRMWorkerProcess = 9100,
        DRMWorkerProcessDRMAndSign = 9100,
        DRMWorkerProcessDRMAndSignResponse = 9101,
        DRMWorkerProcessSteamworksInfoRequest = 9102,
        DRMWorkerProcessSteamworksInfoResponse = 9103,
        DRMWorkerProcessInstallDRMDLLRequest = 9104,
        DRMWorkerProcessInstallDRMDLLResponse = 9105,
        DRMWorkerProcessSecretIdStringRequest = 9106,
        DRMWorkerProcessSecretIdStringResponse = 9107,
        DRMWorkerProcessGetDRMGuidsFromFileRequest = 9108,
        DRMWorkerProcessGetDRMGuidsFromFileResponse = 9109,
        DRMWorkerProcessInstallProcessedFilesRequest = 9110,
        DRMWorkerProcessInstallProcessedFilesResponse = 9111,
        DRMWorkerProcessExamineBlobRequest = 9112,
        DRMWorkerProcessExamineBlobResponse = 9113,
        DRMWorkerProcessDescribeSecretRequest = 9114,
        DRMWorkerProcessDescribeSecretResponse = 9115,
        DRMWorkerProcessBackfillOriginalRequest = 9116,
        DRMWorkerProcessBackfillOriginalResponse = 9117,
        DRMWorkerProcessValidateDRMDLLRequest = 9118,
        DRMWorkerProcessValidateDRMDLLResponse = 9119,
        DRMWorkerProcessValidateFileRequest = 9120,
        DRMWorkerProcessValidateFileResponse = 9121,
        DRMWorkerProcessSplitAndInstallRequest = 9122,
        DRMWorkerProcessSplitAndInstallResponse = 9123,
        DRMWorkerProcessGetBlobRequest = 9124,
        DRMWorkerProcessGetBlobResponse = 9125,
        DRMWorkerProcessEvaluateCrashRequest = 9126,
        DRMWorkerProcessEvaluateCrashResponse = 9127,
        DRMWorkerProcessAnalyzeFileRequest = 9128,
        DRMWorkerProcessAnalyzeFileResponse = 9129,
        DRMWorkerProcessUnpackBlobRequest = 9130,
        DRMWorkerProcessUnpackBlobResponse = 9131,
        DRMWorkerProcessInstallAllRequest = 9132,
        DRMWorkerProcessInstallAllResponse = 9133,
        TestWorkerProcess = 9200,
        TestWorkerProcessLoadUnloadModuleRequest = 9200,
        TestWorkerProcessLoadUnloadModuleResponse = 9201,
        TestWorkerProcessServiceModuleCallRequest = 9202,
        TestWorkerProcessServiceModuleCallResponse = 9203,
        QuestServerBase = 9300,
        ClientGetEmoticonList = 9330,
        ClientEmoticonList = 9331,
        ClientSharedLibraryBase = 9400,
        SLCBase = 9400,
        SLCUserSessionStatus = 9400,
        SLCRequestUserSessionStatus = 9401,
        SLCSharedLicensesLockStatus = 9402,
        ClientSharedLicensesLockStatus = 9403,
        ClientSharedLicensesStopPlaying = 9404,
        ClientSharedLibraryLockStatus = 9405,
        ClientSharedLibraryStopPlaying = 9406,
        SLCOwnerLibraryChanged = 9407,
        SLCSharedLibraryChanged = 9408,
        RemoteClientAuth = 9500,
        RemoteClientBase = 9500,
        RemoteClientAuthResponse = 9501,
        RemoteClientAppStatus = 9502,
        RemoteClientStartStream = 9503,
        RemoteClientStartStreamResponse = 9504,
        RemoteClientPing = 9505,
        RemoteClientPingResponse = 9506,
        ClientUnlockStreaming = 9507,
        ClientUnlockStreamingResponse = 9508,
        RemoteClientAcceptEULA = 9509,
        RemoteClientGetControllerConfig = 9510,
        RemoteClientGetControllerConfigResposne = 9511,
        RemoteClientGetControllerConfigResponse = 9511,
        RemoteClientStreamingEnabled = 9512,
        ClientUnlockHEVC = 9513,
        ClientUnlockHEVCResponse = 9514,
        RemoteClientStatusRequest = 9515,
        RemoteClientStatusResponse = 9516,
        ClientConcurrentSessionsBase = 9600,
        ClientPlayingSessionState = 9600,
        ClientKickPlayingSession = 9601,
        ClientBroadcastBase = 9700,
        ClientBroadcastInit = 9700,
        ClientBroadcastFrames = 9701,
        ClientBroadcastDisconnect = 9702,
        ClientBroadcastScreenshot = 9703,
        ClientBroadcastUploadConfig = 9704,
        BaseClient3 = 9800,
        ClientVoiceCallPreAuthorize = 9800,
        ClientVoiceCallPreAuthorizeResponse = 9801,
        ClientServerTimestampRequest = 9802,
        ClientServerTimestampResponse = 9803,
        ClientLANP2PBase = 9900,
        ClientLANP2PRequestChunk = 9900,
        ClientLANP2PRequestChunkResponse = 9901,
        ClientLANP2PMax = 9999,
        BaseWatchdogServer = 10000,
        NotifyWatchdog = 10000,
        ClientSiteLicenseBase = 10100,
        ClientSiteLicenseSiteInfoNotification = 10100,
        ClientSiteLicenseCheckout = 10101,
        ClientSiteLicenseCheckoutResponse = 10102,
        ClientSiteLicenseGetAvailableSeats = 10103,
        ClientSiteLicenseGetAvailableSeatsResponse = 10104,
        ClientSiteLicenseGetContentCacheInfo = 10105,
        ClientSiteLicenseGetContentCacheInfoResponse = 10106,
        BaseChatServer = 12000,
        ChatServerGetPendingNotificationCount = 12000,
        ChatServerGetPendingNotificationCountResponse = 12001,
        BaseSecretServer = 12100,
        ServerSecretChanged = 12100,
    }

    enum EMsgClanAccountFlags {
        k_EMsgClanAccountFlagPublic = 1,
        k_EMsgClanAccountFlagLarge = 2,
        k_EMsgClanAccountFlagLocked = 4,
        k_EMsgClanAccountFlagDisabled = 8,
        k_EMsgClanAccountFlagOGG = 16,
    }

    enum ENewsUpdateType {
        AppNews = 0,
        SteamAds = 1,
        SteamNews = 2,
        CDDBUpdate = 3,
        ClientUpdate = 4,
    }

    enum ENotificationSetting {
        NotifyUseDefault = 0,
        Always = 1,
        Never = 2,
    }

    enum EOSType {
        Unknown = -1,
        Web = -700,
        IOSUnknown = -600,
        IOS1 = -599,
        IOS2 = -598,
        IOS3 = -597,
        IOS4 = -596,
        IOS5 = -595,
        IOS6 = -594,
        IOS6_1 = -593,
        IOS7 = -592,
        IOS7_1 = -591,
        IOS8 = -590,
        IOS8_1 = -589,
        IOS8_2 = -588,
        IOS8_3 = -587,
        IOS8_4 = -586,
        IOS9 = -585,
        IOS9_1 = -584,
        IOS9_2 = -583,
        IOS9_3 = -582,
        IOS10 = -581,
        IOS10_1 = -580,
        IOS10_2 = -579,
        IOS10_3 = -578,
        IOS11 = -577,
        IOS11_1 = -576,
        IOS11_2 = -575,
        IOS11_3 = -574,
        IOS11_4 = -573,
        IOS12 = -572,
        IOS12_1 = -571,
        AndroidUnknown = -500,
        Android6 = -499,
        Android7 = -498,
        Android8 = -497,
        Android9 = -496,
        UMQ = -400,
        PS3 = -300,
        MacOSUnknown = -102,
        MacOS104 = -101,
        MacOS105 = -100,
        MacOS1058 = -99,
        MacOS106 = -95,
        MacOS1063 = -94,
        MacOS1064_slgu = -93,
        MacOS1067 = -92,
        MacOS107 = -90,
        MacOS108 = -89,
        MacOS109 = -88,
        MacOS1010 = -87,
        MacOS1011 = -86,
        MacOS1012 = -85,
        Macos1013 = -84,
        Macos1014 = -83,
        Macos1015 = -82,
        MacOS1016 = -81,
        MacOS11 = -80,
        MacOSMax = -1,
        LinuxUnknown = -203,
        Linux22 = -202,
        Linux24 = -201,
        Linux26 = -200,
        Linux32 = -199,
        Linux35 = -198,
        Linux36 = -197,
        Linux310 = -196,
        Linux316 = -195,
        Linux318 = -194,
        Linux3x = -193,
        Linux4x = -192,
        Linux41 = -191,
        Linux44 = -190,
        Linux49 = -189,
        Linux414 = -188,
        Linux419 = -187,
        Linux5x = -186,
        Linux54 = -185,
        Linux6x = -184,
        Linux7x = -183,
        LinuxMax = -101,
        WinUnknown = 0,
        Win311 = 1,
        Win95 = 2,
        Win98 = 3,
        WinME = 4,
        WinNT = 5,
        Win200 = 6,
        Win2000 = 6,
        WinXP = 7,
        Win2003 = 8,
        WinVista = 9,
        Win7 = 10,
        Windows7 = 10,
        Win2008 = 11,
        Win2012 = 12,
        Win8 = 13,
        Windows8 = 13,
        Win81 = 14,
        Windows81 = 14,
        Win2012R2 = 15,
        Win10 = 16,
        Windows10 = 16,
        Win2016 = 17,
        Win2019 = 18,
        WinMAX = 19,
    }

    enum EPackageStatus {
        Available = 0,
        Preorder = 1,
        Unavailable = 2,
        Invalid = 3,
    }

    enum EPaymentMethod {
        None = 0,
        ActivationCode = 1,
        CreditCard = 2,
        Giropay = 3,
        PayPal = 4,
        Ideal = 5,
        PaySafeCard = 6,
        Sofort = 7,
        GuestPass = 8,
        WebMoney = 9,
        MoneyBookers = 10,
        AliPay = 11,
        Yandex = 12,
        Kiosk = 13,
        Qiwi = 14,
        GameStop = 15,
        HardwarePromo = 16,
        MoPay = 17,
        BoletoBancario = 18,
        BoaCompraGold = 19,
        BancoDoBrasilOnline = 20,
        ItauOnline = 21,
        BradescoOnline = 22,
        Pagseguro = 23,
        VisaBrazil = 24,
        AmexBrazil = 25,
        Aura = 26,
        Hipercard = 27,
        MastercardBrazil = 28,
        DinersCardBrazil = 29,
        AuthorizedDevice = 30,
        MOLPoints = 31,
        ClickAndBuy = 32,
        Beeline = 33,
        Konbini = 34,
        EClubPoints = 35,
        CreditCardJapan = 36,
        BankTransferJapan = 37,
        PayEasyJapan = 38,
        PayEasy = 38,
        Zong = 39,
        CultureVoucher = 40,
        BookVoucher = 41,
        HappymoneyVoucher = 42,
        ConvenientStoreVoucher = 43,
        GameVoucher = 44,
        Multibanco = 45,
        Payshop = 46,
        Maestro = 47,
        MaestroBoaCompra = 47,
        OXXO = 48,
        ToditoCash = 49,
        Carnet = 50,
        SPEI = 51,
        ThreePay = 52,
        IsBank = 53,
        Garanti = 54,
        Akbank = 55,
        YapiKredi = 56,
        Halkbank = 57,
        BankAsya = 58,
        Finansbank = 59,
        DenizBank = 60,
        PTT = 61,
        CashU = 62,
        AutoGrant = 64,
        WebMoneyJapan = 65,
        OneCard = 66,
        PSE = 67,
        Exito = 68,
        Efecty = 69,
        Paloto = 70,
        PinValidda = 71,
        MangirKart = 72,
        BancoCreditoDePeru = 73,
        BBVAContinental = 74,
        SafetyPay = 75,
        PagoEfectivo = 76,
        Trustly = 77,
        UnionPay = 78,
        BitCoin = 79,
        Wallet = 128,
        Valve = 129,
        SteamPressMaster = 130,
        MasterComp = 130,
        StorePromotion = 131,
        Promotional = 131,
        MasterSubscription = 134,
        Payco = 135,
        MobileWalletJapan = 136,
        OEMTicket = 256,
        Split = 512,
        Complimentary = 1024,
    }

    enum EPersonaState {
        Offline = 0,
        Online = 1,
        Busy = 2,
        Away = 3,
        Snooze = 4,
        LookingToTrade = 5,
        LookingToPlay = 6,
        Invisible = 7,
    }

    enum EPersonaStateFlag {
        HasRichPresence = 1,
        InJoinableGame = 2,
        Golden = 4,
        RemotePlayTogether = 8,
        OnlineUsingWeb = 256,
        ClientTypeWeb = 256,
        OnlineUsingMobile = 512,
        ClientTypeMobile = 512,
        OnlineUsingBigPicture = 1024,
        ClientTypeTenfoot = 1024,
        OnlineUsingVR = 2048,
        ClientTypeVR = 2048,
        LaunchTypeGamepad = 4096,
        LaunchTypeCompatTool = 8192,
    }

    enum EPlatformType {
        Unknown = 0,
        Win32 = 1,
        Win64 = 2,
        Linux = 3,
        Linux64 = 3,
        OSX = 4,
        PS3 = 5,
        Linux32 = 6,
    }

    enum EProtoAppType {
        k_EAppTypeDepotOnly = -2147483648,
        k_EAppTypeInvalid = 0,
        k_EAppTypeGame = 1,
        k_EAppTypeApplication = 2,
        k_EAppTypeTool = 4,
        k_EAppTypeDemo = 8,
        k_EAppTypeDeprected = 16,
        k_EAppTypeDLC = 32,
        k_EAppTypeGuide = 64,
        k_EAppTypeDriver = 128,
        k_EAppTypeConfig = 256,
        k_EAppTypeHardware = 512,
        k_EAppTypeFranchise = 1024,
        k_EAppTypeVideo = 2048,
        k_EAppTypePlugin = 4096,
        k_EAppTypeMusicAlbum = 8192,
        k_EAppTypeSeries = 16384,
        k_EAppTypeComic = 32768,
        k_EAppTypeBeta = 65536,
        k_EAppTypeShortcut = 1073741824,
    }

    enum EProtoClanEventType {
        k_EClanOtherEvent = 1,
        k_EClanGameEvent = 2,
        k_EClanPartyEvent = 3,
        k_EClanMeetingEvent = 4,
        k_EClanSpecialCauseEvent = 5,
        k_EClanMusicAndArtsEvent = 6,
        k_EClanSportsEvent = 7,
        k_EClanTripEvent = 8,
        k_EClanChatEvent = 9,
        k_EClanGameReleaseEvent = 10,
        k_EClanBroadcastEvent = 11,
        k_EClanSmallUpdateEvent = 12,
        k_EClanPreAnnounceMajorUpdateEvent = 13,
        k_EClanMajorUpdateEvent = 14,
        k_EClanDLCReleaseEvent = 15,
        k_EClanFutureReleaseEvent = 16,
        k_EClanESportTournamentStreamEvent = 17,
        k_EClanDevStreamEvent = 18,
        k_EClanFamousStreamEvent = 19,
        k_EClanGameSalesEvent = 20,
        k_EClanGameItemSalesEvent = 21,
        k_EClanInGameBonusXPEvent = 22,
        k_EClanInGameLootEvent = 23,
        k_EClanInGamePerksEvent = 24,
        k_EClanInGameChallengeEvent = 25,
        k_EClanInGameContestEvent = 26,
        k_EClanIRLEvent = 27,
        k_EClanNewsEvent = 28,
        k_EClanBetaReleaseEvent = 29,
        k_EClanInGameContentReleaseEvent = 30,
        k_EClanFreeTrial = 31,
        k_EClanSeasonRelease = 32,
        k_EClanSeasonUpdate = 33,
        k_EClanCrosspostEvent = 34,
        k_EClanInGameEventGeneral = 35,
    }

    enum EProtoExecutionSite {
        Unknown = 0,
        SteamClient = 2,
    }

    enum EPublishedFileForSaleStatus {
        NotForSale = 0,
        PendingApproval = 1,
        ApprovedForSale = 2,
        RejectedForSale = 3,
        NoLongerForSale = 4,
        TentativeApproval = 5,
    }

    enum EPublishedFileInappropriateProvider {
        Invalid = 0,
        Google = 1,
        Amazon = 2,
    }

    enum EPublishedFileInappropriateResult {
        NotScanned = 0,
        VeryUnlikely = 1,
        Unlikely = 30,
        Possible = 50,
        Likely = 75,
        VeryLikely = 100,
    }

    enum EPublishedFileQueryType {
        RankedByVote = 0,
        RankedByPublicationDate = 1,
        AcceptedForGameRankedByAcceptanceDate = 2,
        RankedByTrend = 3,
        FavoritedByFriendsRankedByPublicationDate = 4,
        CreatedByFriendsRankedByPublicationDate = 5,
        RankedByNumTimesReported = 6,
        CreatedByFollowedUsersRankedByPublicationDate = 7,
        NotYetRated = 8,
        RankedByTotalUniqueSubscriptions = 9,
        RankedByTotalVotesAsc = 10,
        RankedByVotesUp = 11,
        RankedByTextSearch = 12,
        RankedByPlaytimeTrend = 13,
        RankedByTotalPlaytime = 14,
        RankedByAveragePlaytimeTrend = 15,
        RankedByLifetimeAveragePlaytime = 16,
        RankedByPlaytimeSessionsTrend = 17,
        RankedByLifetimePlaytimeSessions = 18,
        RankedByInappropriateContentRating = 19,
    }

    enum EPublishedFileRevision {
        Default = 0,
        Latest = 1,
        ApprovedSnapshot = 2,
        ApprovedSnapshot_China = 3,
        RejectedSnapshot = 4,
        RejectedSnapshot_China = 5,
    }

    enum EPublishedFileVisibility {
        Public = 0,
        FriendsOnly = 1,
        Private = 2,
    }

    enum EPurchaseResultDetail {
        NoDetail = 0,
        AVSFailure = 1,
        InsufficientFunds = 2,
        ContactSupport = 3,
        Timeout = 4,
        InvalidPackage = 5,
        InvalidPaymentMethod = 6,
        InvalidData = 7,
        OthersInProgress = 8,
        AlreadyPurchased = 9,
        WrongPrice = 10,
        FraudCheckFailed = 11,
        CancelledByUser = 12,
        RestrictedCountry = 13,
        BadActivationCode = 14,
        DuplicateActivationCode = 15,
        UseOtherPaymentMethod = 16,
        UseOtherFunctionSource = 17,
        InvalidShippingAddress = 18,
        RegionNotSupported = 19,
        AcctIsBlocked = 20,
        AcctNotVerified = 21,
        InvalidAccount = 22,
        StoreBillingCountryMismatch = 23,
        DoesNotOwnRequiredApp = 24,
        CanceledByNewTransaction = 25,
        ForceCanceledPending = 26,
        FailCurrencyTransProvider = 27,
        FailedCyberCafe = 28,
        NeedsPreApproval = 29,
        PreApprovalDenied = 30,
        WalletCurrencyMismatch = 31,
        EmailNotValidated = 32,
        ExpiredCard = 33,
        TransactionExpired = 34,
        WouldExceedMaxWallet = 35,
        MustLoginPS3AppForPurchase = 36,
        CannotShipToPOBox = 37,
        InsufficientInventory = 38,
        CannotGiftShippedGoods = 39,
        CannotShipInternationally = 40,
        BillingAgreementCancelled = 41,
        InvalidCoupon = 42,
        ExpiredCoupon = 43,
        AccountLocked = 44,
        OtherAbortableInProgress = 45,
        ExceededSteamLimit = 46,
        OverlappingPackagesInCart = 47,
        NoWallet = 48,
        NoCachedPaymentMethod = 49,
        CannotRedeemCodeFromClient = 50,
        PurchaseAmountNoSupportedByProvider = 51,
        OverlappingPackagesInPendingTransaction = 52,
        RateLimited = 53,
        OwnsExcludedApp = 54,
        CreditCardBinMismatchesType = 55,
        CartValueTooHigh = 56,
        BillingAgreementAlreadyExists = 57,
        POSACodeNotActivated = 58,
        CannotShipToCountry = 59,
        HungTransactionCancelled = 60,
        PaypalInternalError = 61,
        UnknownGlobalCollectError = 62,
        InvalidTaxAddress = 63,
        PhysicalProductLimitExceeded = 64,
        PurchaseCannotBeReplayed = 65,
        DelayedCompletion = 66,
        BundleTypeCannotBeGifted = 67,
        BlockedByUSGov = 68,
        ItemsReservedForCommercialUse = 69,
        GiftAlreadyOwned = 70,
        GiftInvalidForRecipientRegion = 71,
        GiftPricingImbalance = 72,
        GiftRecipientNotSpecified = 73,
        ItemsNotAllowedForCommercialUse = 74,
        BusinessStoreCountryCodeMismatch = 75,
        UserAssociatedWithManyCafes = 76,
        UserNotAssociatedWithCafe = 77,
        AddressInvalid = 78,
        CreditCardNumberInvalid = 79,
        CannotShipToMilitaryPostOffice = 80,
        BillingNameInvalidResemblesCreditCard = 81,
        PaymentMethodTemporarilyUnavailable = 82,
        PaymentMethodNotSupportedForProduct = 83,
    }

    enum ERegionCode {
        USEast = 0,
        USWest = 1,
        SouthAmerica = 2,
        Europe = 3,
        Asia = 4,
        Australia = 5,
        MiddleEast = 6,
        Africa = 7,
        World = 255,
    }

    enum ERemoteClientBroadcastMsg {
        Discovery = 0,
        Status = 1,
        Offline = 2,
        AuthorizationRequest = 3,
        AuthorizationResponse = 4,
        StreamingRequest = 5,
        StreamingResponse = 6,
        ProofRequest = 7,
        ProofResponse = 8,
        AuthorizationCancelRequest = 9,
        StreamingCancelRequest = 10,
        ClientIDDeconflict = 11,
        StreamTransportSignal = 12,
        StreamingProgress = 13,
    }

    enum ERemoteClientService {
        None = 0,
        RemoteControl = 1,
        GameStreaming = 2,
        SiteLicense = 4,
        ContentCache = 8,
    }

    enum ERemoteDeviceAuthorizationResult {
        Success = 0,
        Denied = 1,
        NotLoggedIn = 2,
        Offline = 3,
        Busy = 4,
        InProgress = 5,
        TimedOut = 6,
        Failed = 7,
        Canceled = 8,
    }

    enum ERemoteDeviceStreamingResult {
        Success = 0,
        Unauthorized = 1,
        ScreenLocked = 2,
        Failed = 3,
        Busy = 4,
        InProgress = 5,
        Canceled = 6,
        DriversNotInstalled = 7,
        Disabled = 8,
        BroadcastingActive = 9,
        VRActive = 10,
        PINRequired = 11,
        TransportUnavailable = 12,
        Invisible = 13,
        GameLaunchFailed = 14,
    }

    enum ERemoteStoragePlatform {
        None = 0,
        Windows = 1,
        OSX = 2,
        PS3 = 4,
        Linux = 8,
        Switch = 16,
        Android = 32,
        IPhoneOS = 64,
        All = -1,
    }

    enum EResult {
        Invalid = 0,
        OK = 1,
        Fail = 2,
        NoConnection = 3,
        InvalidPassword = 5,
        LoggedInElsewhere = 6,
        InvalidProtocolVer = 7,
        InvalidParam = 8,
        FileNotFound = 9,
        Busy = 10,
        InvalidState = 11,
        InvalidName = 12,
        InvalidEmail = 13,
        DuplicateName = 14,
        AccessDenied = 15,
        Timeout = 16,
        Banned = 17,
        AccountNotFound = 18,
        InvalidSteamID = 19,
        ServiceUnavailable = 20,
        NotLoggedOn = 21,
        Pending = 22,
        EncryptionFailure = 23,
        InsufficientPrivilege = 24,
        LimitExceeded = 25,
        Revoked = 26,
        Expired = 27,
        AlreadyRedeemed = 28,
        DuplicateRequest = 29,
        AlreadyOwned = 30,
        IPNotFound = 31,
        PersistFailed = 32,
        LockingFailed = 33,
        LogonSessionReplaced = 34,
        ConnectFailed = 35,
        HandshakeFailed = 36,
        IOFailure = 37,
        RemoteDisconnect = 38,
        ShoppingCartNotFound = 39,
        Blocked = 40,
        Ignored = 41,
        NoMatch = 42,
        AccountDisabled = 43,
        ServiceReadOnly = 44,
        AccountNotFeatured = 45,
        AdministratorOK = 46,
        ContentVersion = 47,
        TryAnotherCM = 48,
        PasswordRequiredToKickSession = 49,
        AlreadyLoggedInElsewhere = 50,
        Suspended = 51,
        Cancelled = 52,
        DataCorruption = 53,
        DiskFull = 54,
        RemoteCallFailed = 55,
        PasswordNotSet = 56,
        PasswordUnset = 56,
        ExternalAccountUnlinked = 57,
        PSNTicketInvalid = 58,
        ExternalAccountAlreadyLinked = 59,
        RemoteFileConflict = 60,
        IllegalPassword = 61,
        SameAsPreviousValue = 62,
        AccountLogonDenied = 63,
        CannotUseOldPassword = 64,
        InvalidLoginAuthCode = 65,
        AccountLogonDeniedNoMailSent = 66,
        AccountLogonDeniedNoMail = 66,
        HardwareNotCapableOfIPT = 67,
        IPTInitError = 68,
        ParentalControlRestricted = 69,
        FacebookQueryError = 70,
        ExpiredLoginAuthCode = 71,
        IPLoginRestrictionFailed = 72,
        AccountLocked = 73,
        AccountLockedDown = 73,
        AccountLogonDeniedVerifiedEmailRequired = 74,
        NoMatchingURL = 75,
        BadResponse = 76,
        RequirePasswordReEntry = 77,
        ValueOutOfRange = 78,

        UnexpectedError = 79,
        Disabled = 80,
        InvalidCEGSubmission = 81,
        RestrictedDevice = 82,
        RegionLocked = 83,
        RateLimitExceeded = 84,
        AccountLogonDeniedNeedTwoFactorCode = 85,
        AccountLoginDeniedNeedTwoFactor = 85,
        ItemOrEntryHasBeenDeleted = 86,
        ItemDeleted = 86,
        AccountLoginDeniedThrottle = 87,
        TwoFactorCodeMismatch = 88,
        TwoFactorActivationCodeMismatch = 89,
        AccountAssociatedToMultiplePlayers = 90,
        AccountAssociatedToMultiplePartners = 90,
        NotModified = 91,
        NoMobileDeviceAvailable = 92,
        NoMobileDevice = 92,
        TimeIsOutOfSync = 93,
        TimeNotSynced = 93,
        SMSCodeFailed = 94,
        TooManyAccountsAccessThisResource = 95,
        AccountLimitExceeded = 95,
        AccountActivityLimitExceeded = 96,
        PhoneActivityLimitExceeded = 97,
        RefundToWallet = 98,
        EmailSendFailure = 99,
        NotSettled = 100,
        NeedCaptcha = 101,
        GSLTDenied = 102,
        GSOwnerDenied = 103,
        InvalidItemType = 104,
        IPBanned = 105,
        GSLTExpired = 106,
        InsufficientFunds = 107,
        TooManyPending = 108,
        NoSiteLicensesFound = 109,
        WGNetworkSendExceeded = 110,
        AccountNotFriends = 111,
        LimitedUserAccount = 112,
        CantRemoveItem = 113,
        AccountHasBeenDeleted = 114,
        AccountHasAnExistingUserCancelledLicense = 115,
        DeniedDueToCommunityCooldown = 116,
        NoLauncherSpecified = 117,
        MustAgreeToSSA = 118,
        ClientNoLongerSupported = 119,
        LauncherMigrated = 119,
    }

    enum EServerFlags {
        None = 0,
        Active = 1,
        Secure = 2,
        Dedicated = 4,
        Linux = 8,
        Passworded = 16,
        Private = 32,
    }

    enum EServerType {
        CEconBase = -5,
        CServer = -4,
        Client = -3,
        Util = -2,
        Invalid = -1,
        First = 0,
        Shell = 0,
        GM = 1,
        BUM = 2,
        BUMOBOSOLETE = 2,
        AM = 3,
        BS = 4,
        VS = 5,
        ATS = 6,
        CM = 7,
        FBS = 8,
        FG = 9,
        BoxMonitor = 9,
        SS = 10,
        DRMS = 11,
        HubOBSOLETE = 12,
        Console = 13,
        ASBOBSOLETE = 14,
        PICS = 14,
        BootstrapOBSOLETE = 16,
        ContentStats = 16,
        DP = 17,
        WG = 18,
        SM = 19,
        SLC = 20,
        UFS = 21,
        DSS = 24,
        Community = 24,
        P2PRelayOBSOLETE = 25,
        AppInformation = 26,
        Spare = 27,
        FTS = 28,
        EPM = 29,
        EPMOBSOLETE = 29,
        SiteLicense = 29,
        PS = 30,
        IS = 31,
        CCS = 32,
        DFS = 33,
        LBS = 34,
        MDS = 35,
        CS = 36,
        GC = 37,
        NS = 38,
        OGS = 39,
        WebAPI = 40,
        UDS = 41,
        MMS = 42,
        GMS = 43,
        KGS = 44,
        UCM = 45,
        RM = 46,
        FS = 47,
        Econ = 48,
        Backpack = 49,
        UGS = 50,
        Store = 51,
        StoreFeature = 51,
        MoneyStats = 52,
        CRE = 53,
        UMQ = 54,
        Workshop = 55,
        BRP = 56,
        GCH = 57,
        MPAS = 58,
        Trade = 59,
        Secrets = 60,
        Logsink = 61,
        Market = 62,
        Quest = 63,
        WDS = 64,
        ACS = 65,
        PNP = 66,
        TaxForm = 67,
        ExternalMonitor = 68,
        Parental = 69,
        PartnerUpload = 70,
        Partner = 71,
        ES = 72,
        DepotWebContent = 73,
        ExternalConfig = 74,
        GameNotifications = 75,
        MarketRepl = 76,
        MarketSearch = 77,
        Localization = 78,
        Steam2Emulator = 79,
        PublicTest = 80,
        SolrMgr = 81,
        BroadcastRelay = 82,
        BroadcastDirectory = 83,
        VideoManager = 84,
        TradeOffer = 85,
        BroadcastChat = 86,
        Phone = 87,
        AccountScore = 88,
        Support = 89,
        LogRequest = 90,
        LogWorker = 91,
        EmailDelivery = 92,
        InventoryManagement = 93,
        Auth = 94,
        StoreCatalog = 95,
        HLTVRelay = 96,
        IDLS = 97,
        Perf = 98,
        ItemInventory = 99,
        Watchdog = 100,
        AccountHistory = 101,
        Chat = 102,
        Shader = 103,
        AccountHardware = 104,
        WebRTC = 105,
        Giveaway = 106,
        ChatRoom = 107,
        VoiceChat = 108,
        QMS = 109,
        Trust = 110,
        TimeMachine = 111,
        VACDBMaster = 112,
        ContentServerConfig = 113,
        Minigame = 114,
        MLTrain = 115,
        VACTest = 116,
        TaxService = 117,
        MLInference = 118,
        UGSAggregate = 119,
        TURN = 120,
        RemoteClient = 121,
        BroadcastOrigin = 122,
        BroadcastChannel = 123,
        SteamAR = 124,
        China = 125,
        CrashDump = 126,
    }

    enum ESteamDatagramMsgID {
        Invalid = 0,
        RouterPingRequest = 1,
        RouterPingReply = 2,
        GameserverPingRequest = 3,
        LegacyGameserverPingReply = 4,
        GameserverSessionRequest = 5,
        GameserverSessionEstablished = 6,
        NoSession = 7,
        Diagnostic = 8,
        DataClientToRouter = 9,
        DataRouterToServer = 10,
        DataServerToRouter = 11,
        DataRouterToClient = 12,
        Stats = 13,
        ClientPingSampleRequest = 14,
        ClientPingSampleReply = 15,
        ClientToRouterSwitchedPrimary = 16,
        RelayHealth = 17,
        ConnectRequest = 18,
        ConnectOK = 19,
        ConnectionClosed = 20,
        NoConnection = 21,
        RelayToRelayPingRequest = 22,
        RelayToRelayPingReply = 23,
        P2PSessionRequest = 24,
        P2PSessionEstablished = 25,
        P2PStatsClient = 26,
        P2PStatsRelay = 27,
        P2PBadRoute = 28,
        GameserverPingReply = 29,
        GameserverRegistration = 30,
    }

    enum ESteamNetworkingSocketsCipher {
        INVALID = 0,
        NULL = 1,
        AES_256_GCM = 2,
    }

    enum ESteamNetworkingUDPMsgID {
        ChallengeRequest = 32,
        ChallengeReply = 33,
        ConnectRequest = 34,
        ConnectOK = 35,
        ConnectionClosed = 36,
        NoConnection = 37,
    }

    enum ESteamPipeOperationType {
        Invalid = 0,
        DecryptCPU = 1,
        DiskRead = 2,
        DiskWrite = 3,
    }

    enum ESteamPipeWorkType {
        Invalid = 0,
        StageFromChunkStores = 1,
    }

    enum ESteamReviewScore {
        None = 0,
        OverwhelminglyNegative = 1,
        VeryNegative = 2,
        Negative = 3,
        MostlyNegative = 4,
        Mixed = 5,
        MostlyPositive = 6,
        Positive = 7,
        VeryPositive = 8,
        OverwhelminglyPositive = 9,
    }

    enum EStreamActivity {
        Idle = 1,
        Game = 2,
        Desktop = 3,
        SecureDesktop = 4,
    }

    enum EStreamAudioCodec {
        None = 0,
        Raw = 1,
        Vorbis = 2,
        Opus = 3,
        MP3 = 4,
        AAC = 5,
    }

    enum EStreamBitrate {
        Autodetect = -1,
        Unlimited = 0,
    }

    enum EStreamChannel {
        Invalid = -1,
        Discovery = 0,
        Control = 1,
        Stats = 2,
        DataChannelStart = 3,
    }

    enum EStreamControlMessage {
        AuthenticationRequest = 1,
        AuthenticationResponse = 2,
        NegotiationInit = 3,
        NegotiationSetConfig = 4,
        NegotiationComplete = 5,
        ClientHandshake = 6,
        ServerHandshake = 7,
        StartNetworkTest = 8,
        KeepAlive = 9,
        LAST_SETUP_MESSAGE = 15,
        StartAudioData = 50,
        StopAudioData = 51,
        StartVideoData = 52,
        StopVideoData = 53,
        InputMouseMotion = 54,
        InputMouseWheel = 55,
        InputMouseDown = 56,
        InputMouseUp = 57,
        InputKeyDown = 58,
        InputKeyUp = 59,
        ShowCursor = 63,
        HideCursor = 64,
        SetCursor = 65,
        GetCursorImage = 66,
        SetCursorImage = 67,
        DeleteCursor = 68,
        SetTargetFramerate = 69,
        InputLatencyTest = 70,
        OverlayEnabled = 74,
        VideoDecoderInfo = 80,
        SetTitle = 81,
        SetIcon = 82,
        QuitRequest = 83,
        SetQoS = 87,
        SetGammaRamp = 89,
        VideoEncoderInfo = 90,
        SetTargetBitrate = 94,
        SetActivity = 98,
        SetStreamingClientConfig = 99,
        SystemSuspend = 100,
        VirtualHereRequest = 102,
        VirtualHereReady = 103,
        VirtualHereShareDevice = 104,
        SetSpectatorMode = 105,
        RemoteHID = 106,
        StartMicrophoneData = 107,
        StopMicrophoneData = 108,
        InputText = 109,
        TouchConfigActive = 110,
        GetTouchConfigData = 111,
        SetTouchConfigData = 112,
        SaveTouchConfigLayout = 113,
        TouchActionSetActive = 114,
        GetTouchIconData = 115,
        SetTouchIconData = 116,
        InputTouchFingerDown = 117,
        InputTouchFingerMotion = 118,
        InputTouchFingerUp = 119,
        SetCaptureSize = 120,
        SetFlashState = 121,
        Pause = 122,
        Resume = 123,
        EnableHighResCapture = 124,
        DisableHighResCapture = 125,
        ToggleMagnification = 126,
        SetCapslock = 127,
        SetKeymap = 128,
        StopRequest = 129,
        TouchActionSetLayerAdded = 130,
        TouchActionSetLayerRemoved = 131,
    }

    enum EStreamDataMessage {
        DataPacket = 1,
        DataLost = 2,
    }

    enum EStreamDeviceFormFactor {
        Unknown = 0,
        Phone = 1,
        Tablet = 2,
        Computer = 3,
        TV = 4,
    }

    enum EStreamDiscoveryMessage {
        PingRequest = 1,
        PingResponse = 2,
    }

    enum EStreamFrameEvent {
        InputEventStart = 0,
        InputEventSend = 1,
        InputEventRecv = 2,
        InputEventQueued = 3,
        InputEventHandled = 4,
        Start = 5,
        CaptureBegin = 6,
        CaptureEnd = 7,
        ConvertBegin = 8,
        ConvertEnd = 9,
        EncodeBegin = 10,
        EncodeEnd = 11,
        Send = 12,
        Recv = 13,
        DecodeBegin = 14,
        DecodeEnd = 15,
        UploadBegin = 16,
        UploadEnd = 17,
        Complete = 18,
    }

    enum EStreamFramerateLimiter {
        SlowCapture = 1,
        SlowConvert = 2,
        SlowEncode = 4,
        SlowNetwork = 8,
        SlowDecode = 16,
        SlowGame = 32,
        SlowDisplay = 64,
    }

    enum EStreamFrameResult {
        Pending = 0,
        Displayed = 1,
        DroppedNetworkSlow = 2,
        DroppedNetworkLost = 3,
        DroppedDecodeSlow = 4,
        DroppedDecodeCorrupt = 5,
        DroppedLate = 6,
        DroppedReset = 7,
    }

    enum EStreamGamepadInputType {
        Invalid = 0,
        DPadUp = 1,
        DPadDown = 2,
        DPadLeft = 4,
        DPadRight = 8,
        Start = 16,
        Back = 32,
        LeftThumb = 64,
        RightThumb = 128,
        LeftShoulder = 256,
        RightShoulder = 512,
        Guide = 1024,
        A = 4096,
        B = 8192,
        X = 16384,
        Y = 32768,
        LeftThumbX = 65536,
        LeftThumbY = 131072,
        RightThumbX = 262144,
        RightThumbY = 524288,
        LeftTrigger = 1048576,
        RightTrigger = 2097152,
    }

    enum EStreamHostPlayAudioPreference {
        k_EStreamHostPlayAudioDefault = 0,
        k_EStreamHostPlayAudioAlways = 1,
    }

    enum EStreamingDataType {
        AudioData = 0,
        VideoData = 1,
        MicrophoneData = 2,
    }

    enum EStreamInterface {
        Default = 0,
        RecentGames = 1,
        BigPicture = 2,
        Desktop = 3,
    }

    enum EStreamMouseButton {
        Left = 1,
        Right = 2,
        Middle = 16,
        X1 = 32,
        X2 = 64,
        Unknown = 4096,
    }

    enum EStreamMouseWheelDirection {
        Down = -120,
        Left = 3,
        Right = 4,
        Up = 120,
    }

    enum EStreamP2PScope {
        Unknown = 0,
        Disabled = 1,
        OnlyMe = 2,
        Friends = 3,
        Everyone = 4,
    }

    enum EStreamQualityPreference {
        Fast = 1,
        Balanced = 2,
        Beautiful = 3,
    }

    enum EStreamStatsMessage {
        FrameEvents = 1,
        DebugDump = 2,
        LogMessage = 3,
        LogUploadBegin = 4,
        LogUploadData = 5,
        LogUploadComplete = 6,
    }

    enum EStreamTransport {
        None = 0,
        UDP = 1,
        UDPRelay = 2,
        WebRTC = 3,
        SDR = 4,
        UDP_SNS = 5,
        SNS = 6,
        UDPRelay_SNS = 6,
    }

    enum EStreamVersion {
        None = 0,
        Current = 1,
    }

    enum EStreamVideoCodec {
        None = 0,
        Raw = 1,
        VP8 = 2,
        VP9 = 3,
        H264 = 4,
        HEVC = 5,
        ORBX1 = 6,
        ORBX2 = 7,
    }

    enum ESystemIMType {
        RawText = 0,
        InvalidCard = 1,
        RecurringPurchaseFailed = 2,
        CardWillExpire = 3,
        SubscriptionExpired = 4,
        GuestPassReceived = 5,
        GuestPassGranted = 6,
        GiftRevoked = 7,
        SupportMessage = 8,
        SupportMessageClearAlert = 9,
    }

    enum ETradeOfferConfirmationMethod {
        Invalid = 0,
        Email = 1,
        MobileApp = 2,
    }

    enum ETradeOfferState {
        Invalid = 1,
        Active = 2,
        Accepted = 3,
        Countered = 4,
        Expired = 5,
        Canceled = 6,
        Declined = 7,
        InvalidItems = 8,
        CreatedNeedsConfirmation = 9,
        CanceledBySecondFactor = 10,
        InEscrow = 11,
    }

    enum EUCMFilePrivacyState {
        Invalid = -1,
        Private = 2,
        FriendsOnly = 4,
        Public = 8,
    }

    enum EUdpPacketType {
        Invalid = 0,
        ChallengeReq = 1,
        Challenge = 2,
        Connect = 3,
        Accept = 4,
        Disconnect = 5,
        Data = 6,
        Datagram = 7,
        Max = 8,
    }

    enum EUniverse {
        Invalid = 0,
        Public = 1,
        Beta = 2,
        Internal = 3,
        Dev = 4,
    }

    enum EUserReviewScorePreference {
        Unset = 0,
        IncludeAll = 1,
        ExcludeBombs = 2,
    }

    enum EValveIndexComponent {
        Unknown = 0,
        HMD = 1,
        LeftKnuckle = 2,
        RightKnuckle = 3,
    }

    enum EVideoFormat {
        None = 0,
        YV12 = 1,
        Accel = 2,
    }

    enum EVoiceCallState {
        None = 0,
        ScheduledInitiate = 1,
        RequestedMicAccess = 2,
        LocalMicOnly = 3,
        CreatePeerConnection = 4,
        InitatedWebRTCSession = 5,
        WebRTCConnectedWaitingOnIceConnected = 6,
        RequestedPermission = 7,
        NotifyingVoiceChatOfWebRTCSession = 8,
        Connected = 9,
    }

    enum EWorkshopEnumerationType {
        RankedByVote = 0,
        Recent = 1,
        Trending = 2,
        FavoriteOfFriends = 3,
        VotedByFriends = 4,
        ContentByFriends = 5,
        RecentFromFollowedUsers = 6,
    }

    enum EWorkshopFileAction {
        Played = 0,
        Completed = 1,
    }

    enum EWorkshopFileType {
        First = 0,
        SteamworksAccessInvite = 13,
        SteamVideo = 14,
        GameManagedItem = 15,
    }

    enum E_STAR_GlyphWriteResult {
        Success = 0,
        InvalidMessage = 1,
        InvalidJSON = 2,
        SQLError = 3,
    }

    enum EClientUIMode {
        None = 0,
        BigPicture = 1,
        Mobile = 2,
        Web = 3,
    }

    enum EConnectionProtocol {
        Auto = 0,
        TCP = 1,
        WebSocket = 2,
    }

    enum EMachineIDType {
        None = 1,
        AlwaysRandom = 2,
        AccountNameGenerated = 3,
        PersistentRandom = 4,
    }

    enum EPrivacyState {
        Private = 1,
        FriendsOnly = 2,
        Public = 3,
    }

    enum EPurchaseResult {
        Unknown = -1,
        OK = 0,
        AlreadyOwned = 9,
        RegionLockedKey = 13,
        InvalidKey = 14,
        DuplicatedKey = 15,
        BaseGameRequired = 24,
        OnCooldown = 53,
    }
    //#endregion "ENUMS"
}
