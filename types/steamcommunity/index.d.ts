// Type definitions for steamcommunity 3.43
// Project: https://github.com/DoctorMcKay/node-steamcommunity
// Definitions by: SenTisso <https://github.com/SenTisso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node" />

type SteamID = import('steamid');
import { Request } from 'request';

import CMarketItem = require('./classes/CMarketItem');
import CSteamGroup = require('./classes/CSteamGroup');
import CSteamUser = require('./classes/CSteamUser');
import CMarketSearchResult = require('./classes/CMarketSearchResult');

import { Chat } from './components/chat';
import { Confirmations } from './components/confirmations';
import { Groups } from './components/groups';
import { Help } from './components/help';
import { Helpers } from './components/helpers';
import { Http } from './components/http';
import { InventoryHistory } from './components/inventoryhistory';
import { Market } from './components/market';
import { Profile } from './components/profile';
import { TwoFactor } from './components/twofactor';
import { Users } from './components/users';
import { WebApi } from './components/webapi';

interface SteamCommunity extends Chat, Confirmations, Groups, Help, Helpers, Http, InventoryHistory, Market, Profile, TwoFactor, Users, WebApi {}

declare class SteamCommunity {
    constructor(options?: SteamCommunity.Options);

    /**
     * Invalidates your account's existing trade URL and generates a new token, which is returned in the callback.
     *
     * @param callback
     */
    changeTradeURL(callback: (
        err: SteamCommunity.CallbackError,
        /** Your new full trade URL, e.g. https://steamcommunity.com/tradeoffer/new/?partner=46143802&token=xxxxxxxx. */
        url: string,
        /** Just the token parameter from your new trade URL. */
        token: string,
    ) => any): void;

    /**
     * Clears your Steam profile name history (aliases).
     * @param callback
     */
    clearPersonaNameHistory(callback: SteamCommunity.Callback): any;

    /**
     * Retrieves a token that can be used to log on via node-steam-user.
     *
     * @param callback
     */
    getClientLogonToken(callback: (
        err: SteamCommunity.CallbackError,
        details: SteamCommunity.TokenDetails,
    ) => any): void;

    /**
     * Retrieves a list of your friend relationships. Includes friends, invited friends, users who invited us to be friends, and blocked users.
     *
     * @param callback A function to be called when the request completes
     */
    getFriendsList(callback: (
        err: SteamCommunity.CallbackError,
        /** An object whose keys are 64-bit SteamIDs, and values are EFriendRelationship values. */
        users: any,
    ) => any): void;

    /**
     * Creates and returns a CMarketItem object for a particular item.
     *
     * @param appid The ID of the app to which this item belongs.
     * @param hashName The item's market_hash_name.
     * @param currency
     * @param callback Called when the item data is loaded and ready.
     */
    getMarketItem(appid: any, hashName: any, currency: any, callback: (
        err: SteamCommunity.CallbackError,
        /** A CMarketItem instance. */
        item: CMarketItem,
    ) => any): void;

    /**
     * Gets your account's notifications (the things under the green envelope button on the top-right.
     *
     * @param callback Fired when the requested data is available.
     */
    getNotifications(callback: (
        err: SteamCommunity.CallbackError,
        /** An object containing properties for each notification type. The values of each property are the number of your notifications of that type. */
        notifications: SteamCommunity.Notifications,
    ) => any): void;

    /**
     * Returns the session ID of your current session, or generates a new one if you don't have a session yet. You probably won't need to use this.
     *
     * @param host
     */
    getSessionID(host: any): any;

    /**
     * Creates and returns a `CSteamGroup` object for a particular group.
     *
     * @param id Either a `SteamID` object or a group's URL (the part after /groups/)
     * @param callback
     */
    getSteamGroup(id: SteamID | string, callback: (
        err: SteamCommunity.CallbackError,
        /** A `CSteamGroup` instance. */
        group: CSteamGroup,
    ) => any): void;

    /**
     * Creates and returns a CSteamUser object for a particular user.
     *
     * @param id Either a SteamID object or a user's URL (the part after /id/).
     * @param callback
     */
    getSteamUser(id: SteamID | string, callback: (
        err: SteamCommunity.CallbackError,
        /** A `CSteamUser` instance. */
        group: CSteamUser,
    ) => any): void;

    /**
     * Gets your account's trade URL, which can be used by people who aren't your friends on Steam to send you trade offers.
     *
     * @param callback A callback to be invoked on completion.
     */
    getTradeURL(callback: (
        err: SteamCommunity.CallbackError,
        /** Your full trade URL, e.g. https://steamcommunity.com/tradeoffer/new/?partner=46143802&token=xxxxxxxx. */
        url: string,
        /** Just the token parameter from your trade URL. */
        token: string,
    ) => any): void;

    /**
     * Use this method to check whether or not you're currently logged into Steam and what your Family View status is.
     *
     * @param callback Called when the result is available.
     */
    loggedIn(callback: (
        err: SteamCommunity.CallbackError,
        /** `true` if you're currently logged in, `false` otherwise. */
        loggedIn: boolean,
        /** `true` if you're currently in family view, `false` otherwise. If `true`, you'll need to call parentalUnlock with the correct PIN before you can do anything.. */
        familyView: boolean,
    ) => any): void;

    /**
     * @param details An object containing our login details.
     * @param callback A function which will be called once we're logged in.
     */
    login(details: SteamCommunity.LoginOptions, callback: (
        err: SteamCommunity.CallbackError,
        /** Your session ID value. If you're using an external library, it'll know what to do with this. Otherwise, you can ignore it. */
        sessionID: string,
        /** An array containing your cookies. If you're using an external library, you'll need these. Otherwise, you can ignore them. */
        cookies: [],
        /**
         * If your account is protected by Steam Guard, this is a string which can be passed to login as the steamguard property of details.
         * You should treat it as an opaque string, but currently it's YourSteamID||YourCookieValue.
         * You can pull YourCookieValue from the value of the steamMachineAuthYourSteamID cookie on an authorized browser if you wish.
         */
        steamguard: string,
        /** An oAuth token. You can use this value along with the steamguard value with oAuthLogin for subsequent passwordless logins.. */
        oAuthToken: string,
    ) => any): any;

    /**
     * Searches the market for a particular query. If you provide an appid to options, you can also search for tags.
     * Simply add your search tags with the tag's name being the key and the tag's internal value being the value.
     *
     * @param options Provide a string to just search for that string, otherwise an object.
     * @param callback Called when results are available.
     */
    marketSearch(options: string | {
        /** The query string to search for. */
        query: string,
        /** The AppID of the game you're searching for. */
        appid: SteamCommunity.appid,
        /** `true` to also search in the descriptions of items (takes longer to search), `false` or omitted otherwise. */
        searchDescriptions: boolean,
    }, callback: (
        /**
         * If an error occurred, this will be an Error object.
         * If the item is not on the market or doesn't exist, the message property will be "There were no items matching your search. Try again with different keywords."
         */
        err: SteamCommunity.CallbackError,
        /** An array of `CMarketSearchResult` instances. */
        items: CMarketSearchResult[],
    ) => any): void;

    /**
     * Facilitates passwordless login using details received from a previous login request.
     *
     * @param steamguard The steamguard value from the callback of login.
     * @param token The oAuthToken value from the callback of login.
     * @param callback Called when the login request completes
     */
    oAuthLogin(steamguard: string, token: string, callback: (
        /** If an error occurred, this is an Error object. Otherwise, null. */
        err: SteamCommunity.CallbackError,
        /** true if you're currently logged in, false otherwise. */
        loggedIn: boolean,
        /** true if you're currently in family view, false otherwise. If true, you'll need to call parentalUnlock with the correct PIN before you can do anything. */
        familyView: boolean,
    ) => any): void;

    /**
     * If your account has Family View enabled, calling this will disable it for your current session.
     *
     * @param pin Your 4-digit Family View PIN.
     * @param callback An optional callback to be invoked on completion.
     */
    parentalUnlock(pin: number, callback: SteamCommunity.Callback): void;

    /**
     * Loads your inventory page, which resets your new items notification to 0.
     *
     * @param callback An optional callback to be invoked on completion.
     */
    resetItemNotifications(callback?: SteamCommunity.Callback): void;

    /**
     * Use this to resume a previous session or to use a session that was negotiated elsewhere (using node-steam-user, for instance).
     *
     * @param cookies An array of cookies (as name=value pair strings).
     */
    setCookies(cookies: string[]): void;

    steamID: SteamID;
}

declare namespace SteamCommunity {
    interface Options {
        /**
         * An instance of {@link https://www.npmjs.com/package/request|request} v2.x.x which will be used by `SteamCommunity` for its HTTP requests.
         * SteamCommunity` will create its own if omitted.
         */
        request: Request;

        /**
         * The time in milliseconds that `SteamCommunity` will wait for HTTP requests to complete.
         * Defaults to `50000` (50 seconds). Overrides any `timeout` option that was set on the passed-in `request` object.
         */
        timeout: number;

        /**
         * The user-agent value that `SteamCommunity` will use for its HTTP requests. Defaults to Chrome v47's user-agent.
         * Overrides any `headers['User-Agent']` option that was set on the passed-in `request` object.
         */
        userAgent: string;

        /** The local IP address that `SteamCommunity` will use for its HTTP requests. Overrides an `localAddress` option that was set on the passed-in `request` object. */
        localAddress: string;
    }

    interface TokenDetails {
        /** Your account's SteamID, as a SteamID object. */
        steamID: SteamID;
        /** Your account's logon name. */
        accountName: any;
        /** Your logon token. */
        webLogonToken: any;
    }

    interface Notifications {
        comments: number;
        items: number;
        invites: number;
        gifts: number;
        chat: number;
        trades: number;
        gameTurns: number;
        moderatorMessages: number;
        helpRequestReplies: number;
        accountAlerts: number;
    }

    interface LoginOptions {
        /** Your Steam account name. */
        accountName: string;
        /** Your Steam password. */
        password: string;
        /** Your Steam Guard value (only required if logging in with a Steam Guard authorization). */
        steamguard?: string;
        /** Your Steam Guard email code (only required if logging in with a new email auth code). */
        authCode?: string;
        /** Your Steam Guard app code (only required if logging in with a Steam Guard app code). */
        twoFactorCode?: string;
        /** Value of prompted captcha (only required if you have been prompted with a CAPTCHA). */
        captcha?: string;
        /** Pass `true` here to have node-steamcommunity not use the mobile login flow. This might help keep your login session alive longer, but you won't get an oAuth token in the login response. */
        disableMobile?: boolean;
    }

    interface EditProfileSettings {
        /** Your new profile name. */
        name: any;
        /** Your new profile "real name", or empty string to remove it. */
        realName: any;
        /** Your new profile summary. */
        summary: any;
        /** A country code, like US, or empty string to remove it. */
        country: string;
        /** A state code, like FL, or empty string to remove it. */
        state: string;
        /** A numeric city code, or empty string to remove it. */
        city: number | string;
        /** Your new profile custom URL. */
        customURL: any;
        /** The assetid of an owned profile background which you want to equip, or empty string to remove it. */
        background: any;
        /** The ID of your new featured badge, or empty string to remove it. Currently game badges aren't supported, only badges whose pages end in /badge/<id>. */
        featuredBadge: any;
        /** A SteamID object for your new primary Steam group, or a string which can parse into a SteamID. */
        primaryGroup: SteamID | string;
    }

    interface ProfileSetting {
        /** A value from SteamCommunity.PrivacyState for your desired profile privacy state. */
        profile: any;
        /** A value from SteamCommunity.PrivacyState for your desired profile comments privacy state. */
        comments: any;
        /** A value from SteamCommunity.PrivacyState for your desired inventory privacy state. */
        inventory: any;
        /** true to keep your Steam gift inventory private, false otherwise. */
        inventoryGifts: any;
        /** A value from SteamCommunity.PrivacyState for your desired privacy level required to view games you own and what game you're currently playing. */
        gameDetails: any;
        /** `true` to keep your game playtime private, `false` otherwise. */
        playtime: boolean;
        /** A value from SteamCommunity.PrivacyState for your desired privacy level required to view your friends list. */
        friendsList: any;
    }

    interface GroupItemHistory {
        /** A string containing the item history type. This is the type displayed on the history page, without spaces. For example, NewMember, InviteSent, etc.. */
        'type': string;
        /** A Date object containing the date and time when this action took place. Since the history page doesn't display any years, the year could possibly be incorrect.. */
        date: Date;
        /**
         * A SteamID object containing the SteamID of the user who either performed or received this action.
         * For example, on NewMember this is the new group member, on InviteSent this is the invite recipient, on NewAnnouncement, this is the author.
         */
        user: SteamID;
        /** Not present on all history types. This is the user who performed the action if user is the receipient of the action. */
        actor: any;
    }

    interface GroupHistory {
        /** The index of the first history item on this page, starting at 1. */
        first: number;
        /** The index of the last history item on this page. */
        last: number;
        /** How many total history items there are. */
        total: number;
        /** An array of group history objects. */
        items: GroupItemHistory[];
    }

    interface GroupComment {
        /** The comment author's persona name. */
        authorName: string;
        /** Either the comment author's 64-bit Steam ID, or their vanity URL. */
        authorId: string;
        /** A Date object of when this comment was submitted. */
        date: Date;
        /** The ID of this comment. */
        commentId: string;
        /** The HTML content of this comment. */
        text: string;
    }

    interface UserComment {
        /** The ID of the comment. */
        id: any;
        author: {
            /** A SteamID object. */
            steamID: SteamID;
            /** The commenter's name. */
            name: any;
            /** A URL to the commenter's avatar. */
            avatar: string;
            /** offline/online/in-game. */
            state: 'offline' | 'online' | 'in-game'
        };
        /** A Date object. */
        date: Date;
        /** The text of the comment. May contain special characters like newlines or tabs. */
        text: any;
        /** The rendered HTML of the comment. */
        html: any;
    }

    interface Announcement {
        /** The announcement's title. */
        headline: string;
        /** The content of the announcement. */
        content: string;
        /** A Date object for when this was posted. */
        date: Date;
        /** The Steam profile name of the author. */
        author: string;
        /** The ID of the announcement. */
        aid: string;
    }

    type GroupEventType =
        | 'ChatEvent'
        | 'OtherEvent'
        | 'PartyEvent'
        | 'MeetingEvent'
        | 'SpecialCauseEvent'
        | 'MusicAndArtsEvent'
        | 'SportsEvent'
        | 'TripEvent';

    /**
     * @param err `null` on success, an `Error` object on failure.
     */
    type Callback = (err: CallbackError) => any;

    /** `null` on success, an `Error` object on failure. */
    type CallbackError = Error & { [key: string]: any } | null;

    /** Unique and can change after a trade. */
    type assetid = number | string;

    type userid = SteamID | string;

    type appid = number;

    /** 2 for csgo... */
    type contextid = number;

    /**
     * In a nutshell, a classid "owns" an instanceid. The classid is all you need to get a general overview of an item.
     * For example, items with the same classid will pretty much always have the same name and image.
     */
    type classid = number;

    /** An ID that describes an item instance that inherits properties from a class with the class id being noted in the instance (totally not unique). */
    type instanceid = number;

    type packageid = number | string;

    type cid = number | string;

    type gid = SteamID | string;

    // region Static enums

    enum PrivacyState {
        'Private' = 1,
        'FriendsOnly' = 2,
        'Public' = 3
    }

    /** The current state of our chat connection. One of the following values. */
    enum ChatState {
        'Offline' = 0,
        'LoggingOn' = 1,
        'LogOnFailed' = 2,
        'LoggedOn' = 3
    }

    /**
     * 1 is unknown, possibly "Invalid".
     * 4 is opt-out or other like account confirmation?
     */
    enum ConfirmationType {
        'Trade' = 2,
        'MarketListing' = 3,
    }

    enum EFriendRelationship {
        'None' = 0,
        'Blocked' = 1,
        'RequestRecipient' = 2,
        'Friend' = 3,
        'RequestInitiator' = 4,
        'Ignored' = 5,
        'IgnoredFriend' = 6,
        'SuggestedFriend' = 7, // removed "was used by the original implementation of the facebook linking feature; but now unused."
    }

    enum PersonaState {
        'Offline' = 0,
        'Online' = 1,
        'Busy' = 2,
        'Away' = 3,
        'Snooze' = 4,
        'LookingToTrade' = 5,
        'LookingToPlay' = 6,
        'Invisible' = 7
    }

    enum PersonaStateFlag {
        'HasRichPresence' = 1,
        'InJoinableGame' = 2,
        'Golden' = 4,
        'RemotePlayTogether' = 8,
        'OnlineUsingWeb' = 256,
        'ClientTypeWeb' = 256,
        'OnlineUsingMobile' = 512,
        'ClientTypeMobile' = 512,
        'OnlineUsingBigPicture' = 1024,
        'ClientTypeTenfoot' = 1024,
        'OnlineUsingVR' = 2048,
        'ClientTypeVR' = 2048,
        'LaunchTypeGamepad' = 4096,
        'LaunchTypeCompatTool' = 8192
    }

    enum EResult {
        'Invalid' = 0,
        'OK' = 1,
        'Fail' = 2,
        'NoConnection' = 3,
        'InvalidPassword' = 5,
        'LoggedInElsewhere' = 6,
        'InvalidProtocolVer' = 7,
        'InvalidParam' = 8,
        'FileNotFound' = 9,
        'Busy' = 10,
        'InvalidState' = 11,
        'InvalidName' = 12,
        'InvalidEmail' = 13,
        'DuplicateName' = 14,
        'AccessDenied' = 15,
        'Timeout' = 16,
        'Banned' = 17,
        'AccountNotFound' = 18,
        'InvalidSteamID' = 19,
        'ServiceUnavailable' = 20,
        'NotLoggedOn' = 21,
        'Pending' = 22,
        'EncryptionFailure' = 23,
        'InsufficientPrivilege' = 24,
        'LimitExceeded' = 25,
        'Revoked' = 26,
        'Expired' = 27,
        'AlreadyRedeemed' = 28,
        'DuplicateRequest' = 29,
        'AlreadyOwned' = 30,
        'IPNotFound' = 31,
        'PersistFailed' = 32,
        'LockingFailed' = 33,
        'LogonSessionReplaced' = 34,
        'ConnectFailed' = 35,
        'HandshakeFailed' = 36,
        'IOFailure' = 37,
        'RemoteDisconnect' = 38,
        'ShoppingCartNotFound' = 39,
        'Blocked' = 40,
        'Ignored' = 41,
        'NoMatch' = 42,
        'AccountDisabled' = 43,
        'ServiceReadOnly' = 44,
        'AccountNotFeatured' = 45,
        'AdministratorOK' = 46,
        'ContentVersion' = 47,
        'TryAnotherCM' = 48,
        'PasswordRequiredToKickSession' = 49,
        'AlreadyLoggedInElsewhere' = 50,
        'Suspended' = 51,
        'Cancelled' = 52,
        'DataCorruption' = 53,
        'DiskFull' = 54,
        'RemoteCallFailed' = 55,
        'PasswordNotSet' = 56, // removed "renamed to PasswordUnset
        'PasswordUnset' = 56,
        'ExternalAccountUnlinked' = 57,
        'PSNTicketInvalid' = 58,
        'ExternalAccountAlreadyLinked' = 59,
        'RemoteFileConflict' = 60,
        'IllegalPassword' = 61,
        'SameAsPreviousValue' = 62,
        'AccountLogonDenied' = 63,
        'CannotUseOldPassword' = 64,
        'InvalidLoginAuthCode' = 65,
        'AccountLogonDeniedNoMailSent' = 66, // removed "renamed to AccountLogonDeniedNoMail
        'AccountLogonDeniedNoMail' = 66,
        'HardwareNotCapableOfIPT' = 67,
        'IPTInitError' = 68,
        'ParentalControlRestricted' = 69,
        'FacebookQueryError' = 70,
        'ExpiredLoginAuthCode' = 71,
        'IPLoginRestrictionFailed' = 72,
        'AccountLocked' = 73, // removed "renamed to AccountLockedDown
        'AccountLockedDown' = 73,
        'AccountLogonDeniedVerifiedEmailRequired' = 74,
        'NoMatchingURL' = 75,
        'BadResponse' = 76,
        'RequirePasswordReEntry' = 77,
        'ValueOutOfRange' = 78,
        'UnexpectedError' = 79,
        'Disabled' = 80,
        'InvalidCEGSubmission' = 81,
        'RestrictedDevice' = 82,
        'RegionLocked' = 83,
        'RateLimitExceeded' = 84,
        'AccountLogonDeniedNeedTwoFactorCode' = 85, // removed "renamed to AccountLoginDeniedNeedTwoFactor
        'AccountLoginDeniedNeedTwoFactor' = 85,
        'ItemOrEntryHasBeenDeleted' = 86, // removed "renamed to ItemDeleted
        'ItemDeleted' = 86,
        'AccountLoginDeniedThrottle' = 87,
        'TwoFactorCodeMismatch' = 88,
        'TwoFactorActivationCodeMismatch' = 89,
        'AccountAssociatedToMultiplePlayers' = 90, // removed "renamed to AccountAssociatedToMultiplePartners
        'AccountAssociatedToMultiplePartners' = 90,
        'NotModified' = 91,
        'NoMobileDeviceAvailable' = 92, // removed "renamed to NoMobileDevice
        'NoMobileDevice' = 92,
        'TimeIsOutOfSync' = 93, // removed "renamed to TimeNotSynced
        'TimeNotSynced' = 93,
        'SMSCodeFailed' = 94,
        'TooManyAccountsAccessThisResource' = 95, // removed "renamed to AccountLimitExceeded
        'AccountLimitExceeded' = 95,
        'AccountActivityLimitExceeded' = 96,
        'PhoneActivityLimitExceeded' = 97,
        'RefundToWallet' = 98,
        'EmailSendFailure' = 99,
        'NotSettled' = 100,
        'NeedCaptcha' = 101,
        'GSLTDenied' = 102,
        'GSOwnerDenied' = 103,
        'InvalidItemType' = 104,
        'IPBanned' = 105,
        'GSLTExpired' = 106,
        'InsufficientFunds' = 107,
        'TooManyPending' = 108,
        'NoSiteLicensesFound' = 109,
        'WGNetworkSendExceeded' = 110,
        'AccountNotFriends' = 111,
        'LimitedUserAccount' = 112,
        'CantRemoveItem' = 113,
        'AccountHasBeenDeleted' = 114,
        'AccountHasAnExistingUserCancelledLicense' = 115,
        'DeniedDueToCommunityCooldown' = 116,
        'NoLauncherSpecified' = 117,
        'MustAgreeToSSA' = 118,
        'ClientNoLongerSupported' = 119
    }

    // endregion Enums
}

export = SteamCommunity;
