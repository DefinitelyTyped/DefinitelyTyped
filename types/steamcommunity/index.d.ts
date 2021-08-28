// Type definitions for steamcommunity 3.43
// Project: https://github.com/DoctorMcKay/node-steamcommunity
// Definitions by: SenTisso <https://github.com/SenTisso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node" />

type SteamID = import('steamid');
import { Request } from 'request';
import { EResult } from './resources/EResult';
import { EChatState } from './resources/EChatState';
import { EConfirmationType } from './resources/EConfirmationType';
import { EFriendRelationship } from './resources/EFriendRelationship';
import { EPersonaState } from './resources/EPersonaState';
import { EPersonaStateFlag } from './resources/EPersonaStateFlag';

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

interface SteamCommunity extends Chat, Confirmations, Groups, Help, Helpers, Http, InventoryHistory, Market, Profile, TwoFactor, Users, WebApi {
}

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
        details: {
            /** Your account's SteamID, as a SteamID object. */
            steamID: SteamID,
            /** Your account's logon name. */
            accountName: any,
            /** Your logon token. */
            webLogonToken: any
        },
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
        notifications: {
            comments: number,
            items: number,
            invites: number,
            gifts: number,
            chat: number,
            trades: number,
            gameTurns: number,
            moderatorMessages: number,
            helpRequestReplies: number,
            accountAlerts: number
        },
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
    login(details: {
        /** Your Steam account name. */
        accountName: string,
        /** Your Steam password. */
        password: string,
        /** Your Steam Guard value (only required if logging in with a Steam Guard authorization). */
        steamguard?: string,
        /** Your Steam Guard email code (only required if logging in with a new email auth code). */
        authCode?: string,
        /** Your Steam Guard app code (only required if logging in with a Steam Guard app code). */
        twoFactorCode?: string,
        /** Value of prompted captcha (only required if you have been prompted with a CAPTCHA). */
        captcha?: string,
        /** Pass `true` here to have node-steamcommunity not use the mobile login flow. This might help keep your login session alive longer, but you won't get an oAuth token in the login response. */
        disableMobile?: boolean
    }, callback: (
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
        appid: any,
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

    static ConfirmationType: EConfirmationType;

    static EFriendRelationship: EFriendRelationship;

    static EResult: EResult;

    /** The current state of our chat connection. One of the following values. */
    static ChatState: EChatState;

    static PersonaState: EPersonaState;

    static PersonaStateFlag: EPersonaStateFlag;

    static PrivacyState: {
        'Private': 1,
        'FriendsOnly': 2,
        'Public': 3
    };
}

declare namespace SteamCommunity {
    interface Options {
        /**
         * An instance of {@link https://www.npmjs.com/package/request|request} v2.x.x which will be used by `SteamCommunity` for its HTTP requests.
         * `SteamCommunity` will create its own if omitted.
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

    /**
     * @param err `null` on success, an `Error` object on failure.
     */
    type Callback = (err: CallbackError) => any;

    /** `null` on success, an `Error` object on failure. */
    type CallbackError = Error & { [key: string]: any } | null;

    type assetid = number | string;

    type userid = SteamID | string;

    type appid = number;

    type contextid = number;

    type packageid = number | string;

    type gid = SteamID | string;
}

export = SteamCommunity;
