//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Action as ImportedAction } from "./namespaces/action";
import { ActivityLog as ImportedActivityLog } from "./namespaces/activityLog";
import { Alarms as ImportedAlarms } from "./namespaces/alarms";
import { Bookmarks as ImportedBookmarks } from "./namespaces/bookmarks";
import { BrowserAction as ImportedBrowserAction } from "./namespaces/browserAction";
import { BrowserSettings as ImportedBrowserSettings } from "./namespaces/browserSettings";
import { BrowsingData as ImportedBrowsingData } from "./namespaces/browsingData";
import { CaptivePortal as ImportedCaptivePortal } from "./namespaces/captivePortal";
import { Clipboard as ImportedClipboard } from "./namespaces/clipboard";
import { Commands as ImportedCommands } from "./namespaces/commands";
import { ContentScripts as ImportedContentScripts } from "./namespaces/contentScripts";
import { ContextMenus as ImportedContextMenus } from "./namespaces/contextMenus";
import { ContextualIdentities as ImportedContextualIdentities } from "./namespaces/contextualIdentities";
import { Cookies as ImportedCookies } from "./namespaces/cookies";
import { DeclarativeContent as ImportedDeclarativeContent } from "./namespaces/declarativeContent";
import { DeclarativeNetRequest as ImportedDeclarativeNetRequest } from "./namespaces/declarativeNetRequest";
import { Devtools as ImportedDevtools } from "./namespaces/devtools";
import { Dns as ImportedDns } from "./namespaces/dns";
import { Downloads as ImportedDownloads } from "./namespaces/downloads";
import { Events as ImportedEvents } from "./namespaces/events";
import { Experiments as ImportedExperiments } from "./namespaces/experiments";
import { Extension as ImportedExtension } from "./namespaces/extension";
import { ExtensionTypes as ImportedExtensionTypes } from "./namespaces/extensionTypes";
import { Find as ImportedFind } from "./namespaces/find";
import { GeckoProfiler as ImportedGeckoProfiler } from "./namespaces/geckoProfiler";
import { History as ImportedHistory } from "./namespaces/history";
import { I18n as ImportedI18n } from "./namespaces/i18n";
import { Identity as ImportedIdentity } from "./namespaces/identity";
import { Idle as ImportedIdle } from "./namespaces/idle";
import { Management as ImportedManagement } from "./namespaces/management";
import { Manifest as ImportedManifest } from "./namespaces/manifest";
import { Menus as ImportedMenus } from "./namespaces/menus";
import { NetworkStatus as ImportedNetworkStatus } from "./namespaces/networkStatus";
import { NormandyAddonStudy as ImportedNormandyAddonStudy } from "./namespaces/normandyAddonStudy";
import { Notifications as ImportedNotifications } from "./namespaces/notifications";
import { Omnibox as ImportedOmnibox } from "./namespaces/omnibox";
import { PageAction as ImportedPageAction } from "./namespaces/pageAction";
import { Permissions as ImportedPermissions } from "./namespaces/permissions";
import { Pkcs11 as ImportedPkcs11 } from "./namespaces/pkcs11";
import { Privacy as ImportedPrivacy } from "./namespaces/privacy";
import { Proxy as ImportedProxy } from "./namespaces/proxy";
import { Runtime as ImportedRuntime } from "./namespaces/runtime";
import { Scripting as ImportedScripting } from "./namespaces/scripting";
import { Search as ImportedSearch } from "./namespaces/search";
import { Sessions as ImportedSessions } from "./namespaces/sessions";
import { SidebarAction as ImportedSidebarAction } from "./namespaces/sidebarAction";
import { Storage as ImportedStorage } from "./namespaces/storage";
import { TabGroups as ImportedTabGroups } from "./namespaces/tabGroups";
import { Tabs as ImportedTabs } from "./namespaces/tabs";
import { Theme as ImportedTheme } from "./namespaces/theme";
import { TopSites as ImportedTopSites } from "./namespaces/topSites";
import { Trial as ImportedTrial } from "./namespaces/trial";
import { Types as ImportedTypes } from "./namespaces/types";
import { UserScripts as ImportedUserScripts } from "./namespaces/userScripts";
import { WebNavigation as ImportedWebNavigation } from "./namespaces/webNavigation";
import { WebRequest as ImportedWebRequest } from "./namespaces/webRequest";
import { Windows as ImportedWindows } from "./namespaces/windows";

declare namespace Browser {
    /**
     * Monitor extension activity
     *
     * Permissions: "activityLog"
     */
    const activityLog: ActivityLog.Static;

    /**
     * Permissions: "alarms"
     */
    const alarms: Alarms.Static;

    /**
     * Use the <code>browser.bookmarks</code> API to create, organize, and otherwise manipulate bookmarks.
     * Also see $(topic:override)[Override Pages], which you can use to create a custom Bookmark Manager page.
     *
     * Permissions: "bookmarks"
     */
    const bookmarks: Bookmarks.Static;

    /**
     * Use browser actions to put icons in the main browser toolbar, to the right of the address bar. In addition to its icon,
     * a browser action can also have a tooltip, a badge, and a popup.
     *
     * Permissions: "manifest:action", "manifest:browser_action"
     */
    const action: Action.Static;

    /**
     * Permissions: "manifest:action", "manifest:browser_action"
     */
    const browserAction: BrowserAction.Static;

    /**
     * Use the <code>browser.browserSettings</code> API to control global settings of the browser.
     *
     * Permissions: "browserSettings"
     */
    const browserSettings: BrowserSettings.Static;

    /**
     * Use the <code>chrome.browsingData</code> API to remove browsing data from a user's local profile.
     *
     * Permissions: "browsingData"
     */
    const browsingData: BrowsingData.Static;

    /**
     * This API provides the ability detect the captive portal state of the users connection.
     *
     * Permissions: "captivePortal"
     */
    const captivePortal: CaptivePortal.Static;

    /**
     * Offers the ability to write to the clipboard. Reading is not supported because the clipboard can already be read through
     * the standard web platform APIs.
     *
     * Permissions: "clipboardWrite"
     */
    const clipboard: Clipboard.Static;

    /**
     * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example,
     * an action to open the browser action or send a command to the xtension.
     *
     * Permissions: "manifest:commands"
     */
    const commands: Commands.Static;

    const contentScripts: ContentScripts.Static;

    /**
     * Use the <code>browser.contextualIdentities</code> API to query and modify contextual identity, also called as containers.
     *
     * Permissions: "contextualIdentities"
     */
    const contextualIdentities: ContextualIdentities.Static;

    /**
     * Use the <code>browser.cookies</code> API to query and modify cookies, and to be notified when they change.
     *
     * Permissions: "cookies"
     */
    const cookies: Cookies.Static;

    /**
     * Use the <code>chrome.declarativeContent</code> API to take actions depending on the content of a page,
     * without requiring permission to read the page's content.
     */
    const declarativeContent: DeclarativeContent.Static;

    /**
     * Use the declarativeNetRequest API to block or modify network requests by specifying declarative rules.
     *
     * Permissions: "declarativeNetRequest", "declarativeNetRequestWithHostAccess"
     */
    const declarativeNetRequest: DeclarativeNetRequest.Static;

    /**
     * Permissions: "manifest:devtools_page"
     */
    const devtools: Devtools.Static;

    /**
     * Asynchronous DNS API
     *
     * Permissions: "dns"
     */
    const dns: Dns.Static;

    /**
     * Permissions: "downloads"
     */
    const downloads: Downloads.Static;

    /**
     * The <code>chrome.events</code> namespace contains common types used by APIs dispatching events to notify you when
     * something interesting happens.
     */
    const events: Events.Static;

    const experiments: Experiments.Static;

    /**
     * The <code>browser.extensionTypes</code> API contains type declarations for WebExtensions.
     */
    const extensionTypes: ExtensionTypes.Static;

    /**
     * The <code>browser.extension</code> API has utilities that can be used by any extension page.
     * It includes support for exchanging messages between an extension and its content scripts or between extensions,
     * as described in detail in $(topic:messaging)[Message Passing].
     */
    const extension: Extension.Static;

    /**
     * Use the <code>browser.find</code> API to interact with the browser's <code>Find</code> interface.
     *
     * Permissions: "find"
     */
    const find: Find.Static;

    /**
     * Exposes the browser's profiler.
     *
     * Permissions: "geckoProfiler"
     */
    const geckoProfiler: GeckoProfiler.Static;

    /**
     * Use the <code>browser.history</code> API to interact with the browser's record of visited pages. You can add, remove,
     * and query for URLs in the browser's history. To override the history page with your own version, see $(topic:override)
     * [Override Pages].
     *
     * Permissions: "history"
     */
    const history: History.Static;

    /**
     * Use the <code>browser.i18n</code> infrastructure to implement internationalization across your whole app or extension.
     */
    const i18n: I18n.Static;

    /**
     * Use the chrome.identity API to get OAuth2 access tokens.
     *
     * Permissions: "identity"
     */
    const identity: Identity.Static;

    /**
     * Use the <code>browser.idle</code> API to detect when the machine's idle state changes.
     *
     * Permissions: "idle"
     */
    const idle: Idle.Static;

    /**
     * The <code>browser.management</code> API provides ways to manage the list of extensions that are installed and running.
     */
    const management: Management.Static;

    /**
     * Permissions: -
     */
    const manifest: Manifest.Static;

    /**
     * Use the browser.contextMenus API to add items to the browser's context menu. You can choose what types of objects your
     * context menu additions apply to, such as images, hyperlinks, and pages.
     *
     * Permissions: "contextMenus"
     */
    const contextMenus: ContextMenus.Static;

    /**
     * Use the browser.menus API to add items to the browser's menus. You can choose what types of objects your context menu
     * additions apply to, such as images, hyperlinks, and pages.
     *
     * Permissions: "menus"
     */
    const menus: Menus.Static;

    /**
     * This API provides the ability to determine the status of and detect changes in the network connection.
     * This API can only be used in privileged extensions.
     *
     * Permissions: "networkStatus"
     */
    const networkStatus: NetworkStatus.Static;

    /**
     * Normandy Study API
     *
     * Permissions: "normandyAddonStudy"
     */
    const normandyAddonStudy: NormandyAddonStudy.Static;

    /**
     * Permissions: "notifications"
     */
    const notifications: Notifications.Static;

    /**
     * The omnibox API allows you to register a keyword with Firefox's address bar.
     *
     * Permissions: "manifest:omnibox"
     */
    const omnibox: Omnibox.Static;

    /**
     * Use the <code>browser.pageAction</code> API to put icons inside the address bar. Page actions represent actions that can
     * be taken on the current page, but that aren't applicable to all pages.
     *
     * Permissions: "manifest:page_action"
     */
    const pageAction: PageAction.Static;

    const permissions: Permissions.Static;

    /**
     * PKCS#11 module management API
     *
     * Permissions: "pkcs11"
     */
    const pkcs11: Pkcs11.Static;

    /**
     * Permissions: "privacy"
     */
    const privacy: Privacy.Static;

    /**
     * Provides access to global proxy settings for Firefox and proxy event listeners to handle dynamic proxy implementations.
     *
     * Permissions: "proxy"
     */
    const proxy: Proxy.Static;

    /**
     * Use the <code>browser.runtime</code> API to retrieve the background page, return details about the manifest,
     * and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the
     * relative path of URLs to fully-qualified URLs.
     */
    const runtime: Runtime.Static;

    /**
     * Use the scripting API to execute script in different contexts.
     *
     * Permissions: "scripting"
     */
    const scripting: Scripting.Static;

    /**
     * Use browser.search to interact with search engines.
     *
     * Permissions: "search"
     */
    const search: Search.Static;

    /**
     * Use the <code>chrome.sessions</code> API to query and restore tabs and windows from a browsing session.
     *
     * Permissions: "sessions"
     */
    const sessions: Sessions.Static;

    /**
     * Use sidebar actions to add a sidebar to Firefox.
     *
     * Permissions: "manifest:sidebar_action"
     */
    const sidebarAction: SidebarAction.Static;

    /**
     * Use the <code>browser.storage</code> API to store, retrieve, and track changes to user data.
     *
     * Permissions: "storage"
     */
    const storage: Storage.Static;

    /**
     * Use the browser.tabGroups API to interact with the browser's tab grouping system. You can use this API to modify,
     * and rearrange tab groups.
     *
     * Permissions: "tabGroups"
     */
    const tabGroups: TabGroups.Static;

    /**
     * Use the <code>browser.tabs</code> API to interact with the browser's tab system. You can use this API to create, modify,
     * and rearrange tabs in the browser.
     */
    const tabs: Tabs.Static;

    /**
     * The theme API allows customizing of visual elements of the browser.
     */
    const theme: Theme.Static;

    /**
     * Use the chrome.topSites API to access the top sites that are displayed on the new tab page.
     *
     * Permissions: "topSites"
     */
    const topSites: TopSites.Static;

    /**
     * Permissions: "trialML"
     */
    const trial: Trial.Static;

    /**
     * Contains types used by other schemas.
     */
    const types: Types.Static;

    /**
     * Permissions: "manifest:user_scripts", "userScripts"
     */
    const userScripts: UserScripts.Static;

    /**
     * Use the <code>browser.webNavigation</code> API to receive notifications about the status of navigation requests
     * in-flight.
     *
     * Permissions: "webNavigation"
     */
    const webNavigation: WebNavigation.Static;

    /**
     * Use the <code>browser.webRequest</code> API to observe and analyze traffic and to intercept, block,
     * or modify requests in-flight.
     *
     * Permissions: "webRequest"
     */
    const webRequest: WebRequest.Static;

    /**
     * Use the <code>browser.windows</code> API to interact with browser windows. You can use this API to create, modify,
     * and rearrange windows in the browser.
     */
    const windows: Windows.Static;

    interface Browser {
        /**
         * Monitor extension activity
         *
         * Permissions: "activityLog"
         */
        activityLog: ActivityLog.Static;

        /**
         * Permissions: "alarms"
         */
        alarms: Alarms.Static;

        /**
         * Use the <code>browser.bookmarks</code> API to create, organize, and otherwise manipulate bookmarks.
         * Also see $(topic:override)[Override Pages], which you can use to create a custom Bookmark Manager page.
         *
         * Permissions: "bookmarks"
         */
        bookmarks: Bookmarks.Static;

        /**
         * Use browser actions to put icons in the main browser toolbar, to the right of the address bar. In addition to its icon,
         * a browser action can also have a tooltip, a badge, and a popup.
         *
         * Permissions: "manifest:action", "manifest:browser_action"
         */
        action: Action.Static;

        /**
         * Permissions: "manifest:action", "manifest:browser_action"
         */
        browserAction: BrowserAction.Static;

        /**
         * Use the <code>browser.browserSettings</code> API to control global settings of the browser.
         *
         * Permissions: "browserSettings"
         */
        browserSettings: BrowserSettings.Static;

        /**
         * Use the <code>chrome.browsingData</code> API to remove browsing data from a user's local profile.
         *
         * Permissions: "browsingData"
         */
        browsingData: BrowsingData.Static;

        /**
         * This API provides the ability detect the captive portal state of the users connection.
         *
         * Permissions: "captivePortal"
         */
        captivePortal: CaptivePortal.Static;

        /**
         * Offers the ability to write to the clipboard. Reading is not supported because the clipboard can already be read through
         * the standard web platform APIs.
         *
         * Permissions: "clipboardWrite"
         */
        clipboard: Clipboard.Static;

        /**
         * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example,
         * an action to open the browser action or send a command to the xtension.
         *
         * Permissions: "manifest:commands"
         */
        commands: Commands.Static;

        contentScripts: ContentScripts.Static;

        /**
         * Use the <code>browser.contextualIdentities</code> API to query and modify contextual identity, also called as containers.
         *
         * Permissions: "contextualIdentities"
         */
        contextualIdentities: ContextualIdentities.Static;

        /**
         * Use the <code>browser.cookies</code> API to query and modify cookies, and to be notified when they change.
         *
         * Permissions: "cookies"
         */
        cookies: Cookies.Static;

        /**
         * Use the <code>chrome.declarativeContent</code> API to take actions depending on the content of a page,
         * without requiring permission to read the page's content.
         */
        declarativeContent: DeclarativeContent.Static;

        /**
         * Use the declarativeNetRequest API to block or modify network requests by specifying declarative rules.
         *
         * Permissions: "declarativeNetRequest", "declarativeNetRequestWithHostAccess"
         */
        declarativeNetRequest: DeclarativeNetRequest.Static;

        /**
         * Permissions: "manifest:devtools_page"
         */
        devtools: Devtools.Static;

        /**
         * Asynchronous DNS API
         *
         * Permissions: "dns"
         */
        dns: Dns.Static;

        /**
         * Permissions: "downloads"
         */
        downloads: Downloads.Static;

        /**
         * The <code>chrome.events</code> namespace contains common types used by APIs dispatching events to notify you when
         * something interesting happens.
         */
        events: Events.Static;

        experiments: Experiments.Static;

        /**
         * The <code>browser.extensionTypes</code> API contains type declarations for WebExtensions.
         */
        extensionTypes: ExtensionTypes.Static;

        /**
         * The <code>browser.extension</code> API has utilities that can be used by any extension page.
         * It includes support for exchanging messages between an extension and its content scripts or between extensions,
         * as described in detail in $(topic:messaging)[Message Passing].
         */
        extension: Extension.Static;

        /**
         * Use the <code>browser.find</code> API to interact with the browser's <code>Find</code> interface.
         *
         * Permissions: "find"
         */
        find: Find.Static;

        /**
         * Exposes the browser's profiler.
         *
         * Permissions: "geckoProfiler"
         */
        geckoProfiler: GeckoProfiler.Static;

        /**
         * Use the <code>browser.history</code> API to interact with the browser's record of visited pages. You can add, remove,
         * and query for URLs in the browser's history. To override the history page with your own version, see $(topic:override)
         * [Override Pages].
         *
         * Permissions: "history"
         */
        history: History.Static;

        /**
         * Use the <code>browser.i18n</code> infrastructure to implement internationalization across your whole app or extension.
         */
        i18n: I18n.Static;

        /**
         * Use the chrome.identity API to get OAuth2 access tokens.
         *
         * Permissions: "identity"
         */
        identity: Identity.Static;

        /**
         * Use the <code>browser.idle</code> API to detect when the machine's idle state changes.
         *
         * Permissions: "idle"
         */
        idle: Idle.Static;

        /**
         * The <code>browser.management</code> API provides ways to manage the list of extensions that are installed and running.
         */
        management: Management.Static;

        /**
         * Permissions: -
         */
        manifest: Manifest.Static;

        /**
         * Use the browser.contextMenus API to add items to the browser's context menu. You can choose what types of objects your
         * context menu additions apply to, such as images, hyperlinks, and pages.
         *
         * Permissions: "contextMenus"
         */
        contextMenus: ContextMenus.Static;

        /**
         * Use the browser.menus API to add items to the browser's menus. You can choose what types of objects your context menu
         * additions apply to, such as images, hyperlinks, and pages.
         *
         * Permissions: "menus"
         */
        menus: Menus.Static;

        /**
         * This API provides the ability to determine the status of and detect changes in the network connection.
         * This API can only be used in privileged extensions.
         *
         * Permissions: "networkStatus"
         */
        networkStatus: NetworkStatus.Static;

        /**
         * Normandy Study API
         *
         * Permissions: "normandyAddonStudy"
         */
        normandyAddonStudy: NormandyAddonStudy.Static;

        /**
         * Permissions: "notifications"
         */
        notifications: Notifications.Static;

        /**
         * The omnibox API allows you to register a keyword with Firefox's address bar.
         *
         * Permissions: "manifest:omnibox"
         */
        omnibox: Omnibox.Static;

        /**
         * Use the <code>browser.pageAction</code> API to put icons inside the address bar. Page actions represent actions that can
         * be taken on the current page, but that aren't applicable to all pages.
         *
         * Permissions: "manifest:page_action"
         */
        pageAction: PageAction.Static;

        permissions: Permissions.Static;

        /**
         * PKCS#11 module management API
         *
         * Permissions: "pkcs11"
         */
        pkcs11: Pkcs11.Static;

        /**
         * Permissions: "privacy"
         */
        privacy: Privacy.Static;

        /**
         * Provides access to global proxy settings for Firefox and proxy event listeners to handle dynamic proxy implementations.
         *
         * Permissions: "proxy"
         */
        proxy: Proxy.Static;

        /**
         * Use the <code>browser.runtime</code> API to retrieve the background page, return details about the manifest,
         * and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the
         * relative path of URLs to fully-qualified URLs.
         */
        runtime: Runtime.Static;

        /**
         * Use the scripting API to execute script in different contexts.
         *
         * Permissions: "scripting"
         */
        scripting: Scripting.Static;

        /**
         * Use browser.search to interact with search engines.
         *
         * Permissions: "search"
         */
        search: Search.Static;

        /**
         * Use the <code>chrome.sessions</code> API to query and restore tabs and windows from a browsing session.
         *
         * Permissions: "sessions"
         */
        sessions: Sessions.Static;

        /**
         * Use sidebar actions to add a sidebar to Firefox.
         *
         * Permissions: "manifest:sidebar_action"
         */
        sidebarAction: SidebarAction.Static;

        /**
         * Use the <code>browser.storage</code> API to store, retrieve, and track changes to user data.
         *
         * Permissions: "storage"
         */
        storage: Storage.Static;

        /**
         * Use the browser.tabGroups API to interact with the browser's tab grouping system. You can use this API to modify,
         * and rearrange tab groups.
         *
         * Permissions: "tabGroups"
         */
        tabGroups: TabGroups.Static;

        /**
         * Use the <code>browser.tabs</code> API to interact with the browser's tab system. You can use this API to create, modify,
         * and rearrange tabs in the browser.
         */
        tabs: Tabs.Static;

        /**
         * The theme API allows customizing of visual elements of the browser.
         */
        theme: Theme.Static;

        /**
         * Use the chrome.topSites API to access the top sites that are displayed on the new tab page.
         *
         * Permissions: "topSites"
         */
        topSites: TopSites.Static;

        /**
         * Permissions: "trialML"
         */
        trial: Trial.Static;

        /**
         * Contains types used by other schemas.
         */
        types: Types.Static;

        /**
         * Permissions: "manifest:user_scripts", "userScripts"
         */
        userScripts: UserScripts.Static;

        /**
         * Use the <code>browser.webNavigation</code> API to receive notifications about the status of navigation requests
         * in-flight.
         *
         * Permissions: "webNavigation"
         */
        webNavigation: WebNavigation.Static;

        /**
         * Use the <code>browser.webRequest</code> API to observe and analyze traffic and to intercept, block,
         * or modify requests in-flight.
         *
         * Permissions: "webRequest"
         */
        webRequest: WebRequest.Static;

        /**
         * Use the <code>browser.windows</code> API to interact with browser windows. You can use this API to create, modify,
         * and rearrange windows in the browser.
         */
        windows: Windows.Static;
    }

    export import ActivityLog = ImportedActivityLog;
    export import Alarms = ImportedAlarms;
    export import Bookmarks = ImportedBookmarks;
    export import Action = ImportedAction;
    export import BrowserAction = ImportedBrowserAction;
    export import BrowserSettings = ImportedBrowserSettings;
    export import BrowsingData = ImportedBrowsingData;
    export import CaptivePortal = ImportedCaptivePortal;
    export import Clipboard = ImportedClipboard;
    export import Commands = ImportedCommands;
    export import ContentScripts = ImportedContentScripts;
    export import ContextualIdentities = ImportedContextualIdentities;
    export import Cookies = ImportedCookies;
    export import DeclarativeContent = ImportedDeclarativeContent;
    export import DeclarativeNetRequest = ImportedDeclarativeNetRequest;
    export import Devtools = ImportedDevtools;
    export import Dns = ImportedDns;
    export import Downloads = ImportedDownloads;
    export import Events = ImportedEvents;
    export import Experiments = ImportedExperiments;
    export import ExtensionTypes = ImportedExtensionTypes;
    export import Extension = ImportedExtension;
    export import Find = ImportedFind;
    export import GeckoProfiler = ImportedGeckoProfiler;
    export import History = ImportedHistory;
    export import I18n = ImportedI18n;
    export import Identity = ImportedIdentity;
    export import Idle = ImportedIdle;
    export import Management = ImportedManagement;
    export import Manifest = ImportedManifest;
    export import ContextMenus = ImportedContextMenus;
    export import Menus = ImportedMenus;
    export import NetworkStatus = ImportedNetworkStatus;
    export import NormandyAddonStudy = ImportedNormandyAddonStudy;
    export import Notifications = ImportedNotifications;
    export import Omnibox = ImportedOmnibox;
    export import PageAction = ImportedPageAction;
    export import Permissions = ImportedPermissions;
    export import Pkcs11 = ImportedPkcs11;
    export import Privacy = ImportedPrivacy;
    export import Proxy = ImportedProxy;
    export import Runtime = ImportedRuntime;
    export import Scripting = ImportedScripting;
    export import Search = ImportedSearch;
    export import Sessions = ImportedSessions;
    export import SidebarAction = ImportedSidebarAction;
    export import Storage = ImportedStorage;
    export import TabGroups = ImportedTabGroups;
    export import Tabs = ImportedTabs;
    export import Theme = ImportedTheme;
    export import TopSites = ImportedTopSites;
    export import Trial = ImportedTrial;
    export import Types = ImportedTypes;
    export import UserScripts = ImportedUserScripts;
    export import WebNavigation = ImportedWebNavigation;
    export import WebRequest = ImportedWebRequest;
    export import Windows = ImportedWindows;
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = Browser;
