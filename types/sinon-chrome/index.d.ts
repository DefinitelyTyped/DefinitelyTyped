// Type definitions for Sinon-Chrome v2.2.4
// Project: https://github.com/vitalets/sinon-chrome
// Definitions by: Tim Perry <https://github.com/pimterry>
//                 CRIMX <https://github.com/crimx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="chrome"/>
/// <reference types="sinon"/>

/**
 * To use sinon-chrome:
 * Use chrome.* as normal in your production code
 * In tests, forcibly cast window.chrome to typeof SinonChrome to access stub API.
 * @example
 * var chrome = <typeof SinonChrome> <any> window.chrome;
 * chrome.storage.onChanged.trigger(...);
 */

import * as Sinon from 'sinon';
export = SinonChrome;
export as namespace SinonChrome;

interface SinonChromeStub extends Sinon.SinonStub {
    flush(): void;
}

declare namespace SinonChrome {
    /**
     * Flush cache
     */
    export function flush(): void;

    /**
     * Reset all stubs and remove event listeners
     * See https://github.com/cjohansen/Sinon.JS/issues/572
     */
    export function reset(): void;

    export var csi: Sinon.SinonSpy;
    export var loadTimes: Sinon.SinonSpy;
}

declare namespace SinonChrome.events {
    interface Event extends chrome.events.Event<Function> {
        dispatch(...args: any[]): void;
        trigger(...args: any[]): void;
        triggerAsync(...args: any[]): void;

        applyTrigger(args: any[]): void;
        applyTriggerAsync(args: any[]): void;

        addListener: Sinon.SinonSpy;
        removeListener: Sinon.SinonSpy;
        removeListeners: Sinon.SinonSpy;
        hasListener: Sinon.SinonSpy;
    }
}

declare namespace SinonChrome.alarms {
    export var clear: SinonChromeStub;
    export var clearAll: SinonChromeStub;
    export var create: SinonChromeStub;
    export var get: SinonChromeStub;
    export var getAll: SinonChromeStub;
    export var onAlarm: SinonChrome.events.Event;
}

declare namespace SinonChrome.app {
    export var getDetails: SinonChromeStub;
    export var getDetailsForFrame: SinonChromeStub;
    export var getDetails: SinonChromeStub;
    export var getDetailsForFrame: SinonChromeStub;
    export var getIsInstalled: SinonChromeStub;
    export var installState: SinonChromeStub;
    export var runningState: SinonChromeStub;
}

declare namespace SinonChrome.bookmarks {
    export var create: SinonChromeStub;
    export var get: SinonChromeStub;
    export var getChildren: SinonChromeStub;
    export var getRecent: SinonChromeStub;
    export var getSubTree: SinonChromeStub;
    export var getTree: SinonChromeStub;
    export var move: SinonChromeStub;
    export var remove: SinonChromeStub;
    export var removeTree: SinonChromeStub;
    export var search: SinonChromeStub;
    export var update: SinonChromeStub;

    export var onChanged: SinonChrome.events.Event;
    export var onChildrenReordered: SinonChrome.events.Event;
    export var onCreated: SinonChrome.events.Event;
    export var onImportBegan: SinonChrome.events.Event;
    export var onImportEnded: SinonChrome.events.Event;
    export var onMoved: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
}

declare namespace SinonChrome.browserAction {
    export var disable: SinonChromeStub;
    export var enable: SinonChromeStub;
    export var getBadgeBackgroundColor: SinonChromeStub;
    export var getBadgeText: SinonChromeStub;
    export var getPopup: SinonChromeStub;
    export var getTitle: SinonChromeStub;
    export var setBadgeBackgroundColor: SinonChromeStub;
    export var setBadgeText: SinonChromeStub;
    export var setIcon: SinonChromeStub;
    export var setPopup: SinonChromeStub;
    export var setTitle: SinonChromeStub;

    export var onClicked: SinonChrome.events.Event;
}

declare namespace SinonChrome.browsingData {
    export var remove: SinonChromeStub;
    export var removeAppcache: SinonChromeStub;
    export var removeCache: SinonChromeStub;
    export var removeCookies: SinonChromeStub;
    export var removeDownloads: SinonChromeStub;
    export var removeFileSystems: SinonChromeStub;
    export var removeFormData: SinonChromeStub;
    export var removeHistory: SinonChromeStub;
    export var removeIndexedDB: SinonChromeStub;
    export var removeLocalStorage: SinonChromeStub;
    export var removePasswords: SinonChromeStub;
    export var removePluginData: SinonChromeStub;
    export var removeWebSQL: SinonChromeStub;
    export var settings: SinonChromeStub;
}

declare namespace SinonChrome.contentSettings {
    interface StubbedContentSetting {
      clear: SinonChromeStub;
      get: SinonChromeStub;
      getResourceIdentifiers: SinonChromeStub;
      set: SinonChromeStub;
    }

    export var cookies: StubbedContentSetting;
    export var images: StubbedContentSetting;
    export var javascript: StubbedContentSetting;
    export var notifications: StubbedContentSetting;
    export var plugins: StubbedContentSetting;
    export var popups: StubbedContentSetting;
}

declare namespace SinonChrome.contextMenus {
    export var create: SinonChromeStub;
    export var remove: SinonChromeStub;
    export var removeAll: SinonChromeStub;
    export var update: SinonChromeStub;

    export var onClicked: SinonChrome.events.Event;
}

declare namespace SinonChrome.omnibox {
    export var setDefaultSuggestion: SinonChromeStub;
    export var onInputStarted: SinonChrome.events.Event;
    export var onInputChanged: SinonChrome.events.Event;
    export var onInputEntered: SinonChrome.events.Event;
    export var onInputCancelled: SinonChrome.events.Event;
}

declare namespace SinonChrome.cookies {
    export var get: SinonChromeStub;
    export var getAll: SinonChromeStub;
    export var getAllCookieStores: SinonChromeStub;
    export var onChanged: SinonChrome.events.Event;
    export var remove: SinonChromeStub;
    export var set: SinonChromeStub;
}

/* TODO: Uncomment once https://github.com/Microsoft/TypeScript/issues/7840 is fixed
declare module SinonChrome.debugger {
    export var attach: SinonChromeStub;
    export var detach: SinonChromeStub;
    export var getTargets: SinonChromeStub;
    export var sendCommand: SinonChromeStub;

    export var onDetach: SinonChrome.events.Event;
    export var onEvent: SinonChrome.events.Event;
}
*/

declare namespace SinonChrome.declarativeContent {
    export var PageStateMatcher: SinonChromeStub;
    export var RequestContentScript: SinonChromeStub;
    export var ShowPageAction: SinonChromeStub;

    export var onPageChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome. desktopCapture {
    export var cancelChooseDesktopMedia: SinonChromeStub;
    export var chooseDesktopMedia: SinonChromeStub;
}

declare namespace SinonChrome.downloads {
    export var acceptDanger: SinonChromeStub;
    export var cancel: SinonChromeStub;
    export var download: SinonChromeStub;
    export var drag: SinonChromeStub;
    export var erase: SinonChromeStub;
    export var getFileIcon: SinonChromeStub;
    export var open: SinonChromeStub;
    export var pause: SinonChromeStub;
    export var removeFile: SinonChromeStub;
    export var resume: SinonChromeStub;
    export var search: SinonChromeStub;
    export var setShelfEnabled: SinonChromeStub;
    export var show: SinonChromeStub;
    export var showDefaultFolder: SinonChromeStub;

    export var onChanged: SinonChrome.events.Event;
    export var onCreated: SinonChrome.events.Event;
    export var onDeterminingFilename: SinonChrome.events.Event;
    export var onErased: SinonChrome.events.Event;
}

declare namespace SinonChrome.extension {
    export var connect: SinonChromeStub;
    export var connectNative: SinonChromeStub;
    export var getBackgroundPage: SinonChromeStub;
    export var getURL: SinonChromeStub;
    export var getViews: SinonChromeStub;
    export var isAllowedFileSchemeAccess: SinonChromeStub;
    export var isAllowedIncognitoAccess: SinonChromeStub;
    export var sendMessage: SinonChromeStub;
    export var sendNativeMessage: SinonChromeStub;
    export var sendRequest: SinonChromeStub;
    export var setUpdateUrlData: SinonChromeStub;

    export var onConnect: SinonChrome.events.Event;
    export var onConnectExternal: SinonChrome.events.Event;
    export var onMessage: SinonChrome.events.Event;
    export var onMessageExternal: SinonChrome.events.Event;
    export var onRequest: SinonChrome.events.Event;
    export var onRequestExternal: SinonChrome.events.Event;
}

declare namespace SinonChrome.fontSettings {
    export var clearDefaultFixedFontSize: SinonChromeStub;
    export var clearDefaultFontSize: SinonChromeStub;
    export var clearFont: SinonChromeStub;
    export var clearMinimumFontSize: SinonChromeStub;
    export var getDefaultFixedFontSize: SinonChromeStub;
    export var getDefaultFontSize: SinonChromeStub;
    export var getFont: SinonChromeStub;
    export var getFontList: SinonChromeStub;
    export var getMinimumFontSize: SinonChromeStub;
    export var setDefaultFixedFontSize: SinonChromeStub;
    export var setDefaultFontSize: SinonChromeStub;
    export var setFont: SinonChromeStub;
    export var setMinimumFontSize: SinonChromeStub;

    export var onDefaultFixedFontSizeChanged: SinonChrome.events.Event;
    export var onDefaultFontSizeChanged: SinonChrome.events.Event;
    export var onFontChanged: SinonChrome.events.Event;
    export var onMinimumFontSizeChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.gcm {
    export var onMessage: SinonChrome.events.Event;
    export var onMessagesDeleted: SinonChrome.events.Event;
    export var onSendError: SinonChrome.events.Event;

    export var register: SinonChromeStub;
    export var send: SinonChromeStub;
    export var unregister: SinonChromeStub;
}

declare namespace SinonChrome.history {
    export var addUrl: SinonChromeStub;
    export var deleteAll: SinonChromeStub;
    export var deleteRange: SinonChromeStub;
    export var deleteUrl: SinonChromeStub;
    export var getVisits: SinonChromeStub;
    export var search: SinonChromeStub;

    export var onVisitRemoved: SinonChrome.events.Event;
    export var onVisited: SinonChrome.events.Event;
}

declare namespace SinonChrome.i18n {
    export var getAcceptLanguages: SinonChromeStub;
    export var getMessage: SinonChromeStub;
    export var getUILanguage: SinonChromeStub;
}

declare namespace SinonChrome.identity {
    export var getAuthToken: SinonChromeStub;
    export var getProfileUserInfo: SinonChromeStub;
    export var getRedirectURL: SinonChromeStub;
    export var launchWebAuthFlow: SinonChromeStub;
    export var removeCachedAuthToken: SinonChromeStub;

    export var onSignInChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.idle {
    export var onStateChanged: SinonChrome.events.Event;

    export var queryState: SinonChromeStub;
    export var setDetectionInterval: SinonChromeStub;
}

declare namespace SinonChrome.management {
    export var createAppShortcut: SinonChromeStub;
    export var generateAppForLink: SinonChromeStub;
    export var get: SinonChromeStub;
    export var getAll: SinonChromeStub;
    export var getPermissionWarningsById: SinonChromeStub;
    export var getPermissionWarningsByManifest: SinonChromeStub;
    export var launchApp: SinonChromeStub;
    export var setEnabled: SinonChromeStub;
    export var setLaunchType: SinonChromeStub;
    export var uninstall: SinonChromeStub;
    export var uninstallSelf: SinonChromeStub;

    export var onDisabled: SinonChrome.events.Event;
    export var onEnabled: SinonChrome.events.Event;
    export var onInstalled: SinonChrome.events.Event;
    export var onUninstalled: SinonChrome.events.Event;
}

declare namespace SinonChrome.notifications {
    export var clear: SinonChromeStub;
    export var create: SinonChromeStub;
    export var getAll: SinonChromeStub;
    export var getPermissionLevel: SinonChromeStub;
    export var update: SinonChromeStub;

    export var onButtonClicked: SinonChrome.events.Event;
    export var onClicked: SinonChrome.events.Event;
    export var onClosed: SinonChrome.events.Event;
    export var onPermissionLevelChanged: SinonChrome.events.Event;
    export var onShowSettings: SinonChrome.events.Event;
}

declare namespace SinonChrome.pageCapture {
    export var saveAsMHTML: SinonChromeStub;
}

declare namespace SinonChrome.permissions {
    export var contains: SinonChromeStub;
    export var getAll: SinonChromeStub;
    export var onAdded: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
    export var remove: SinonChromeStub;
    export var request: SinonChromeStub;
}

declare namespace SinonChrome.power {
    export var releaseKeepAwake: SinonChromeStub;
    export var requestKeepAwake: SinonChromeStub;
}

declare namespace SinonChrome.types {
    interface StubbedChromeSetting {
        clear: SinonChromeStub;
        get: SinonChromeStub;
        set: SinonChromeStub;

        onChange: SinonChrome.events.Event;
    }
}

declare namespace SinonChrome.privacy {
    export var network: {
        networkPredictionEnabled: SinonChrome.types.StubbedChromeSetting;
    };
    export var services: {
        alternateErrorPagesEnabled: SinonChrome.types.StubbedChromeSetting;
        autofillEnabled: SinonChrome.types.StubbedChromeSetting;
        passwordSavingEnabled: SinonChrome.types.StubbedChromeSetting;
        safeBrowsingEnabled: SinonChrome.types.StubbedChromeSetting;
        searchSuggestEnabled: SinonChrome.types.StubbedChromeSetting;
        spellingServiceEnabled: SinonChrome.types.StubbedChromeSetting;
        translationServiceEnabled: SinonChrome.types.StubbedChromeSetting;
    };
    export var website: {
      hyperlinkAuditingEnabled: SinonChrome.types.StubbedChromeSetting;
      referrersEnabled: SinonChrome.types.StubbedChromeSetting;
      thirdPartyCookiesAllowed: SinonChrome.types.StubbedChromeSetting;
    };
}

declare namespace SinonChrome.proxy {
    export var onProxyError: SinonChrome.events.Event;
    export var settings: SinonChrome.types.StubbedChromeSetting;
}

declare namespace SinonChrome.pushMessaging {
    export var getChannelId: SinonChromeStub;
    export var onMessage: SinonChrome.events.Event;
}

declare namespace SinonChrome.runtime {
    export var connect: SinonChromeStub;
    export var connectNative: SinonChromeStub;
    export var getBackgroundPage: SinonChromeStub;
    export var getManifest: SinonChromeStub;
    export var getPackageDirectoryEntry: SinonChromeStub;
    export var getPlatformInfo: SinonChromeStub;
    export var reload: SinonChromeStub;
    export var requestUpdateCheck: SinonChromeStub;
    export var restart: SinonChromeStub;
    export var sendMessage: SinonChromeStub;
    export var sendNativeMessage: SinonChromeStub;

    export var onBrowserUpdateAvailable: SinonChrome.events.Event;
    export var onConnect: SinonChrome.events.Event;
    export var onConnectExternal: SinonChrome.events.Event;
    export var onInstalled: SinonChrome.events.Event;
    export var onMessage: SinonChrome.events.Event;
    export var onMessageExternal: SinonChrome.events.Event;
    export var onRestartRequired: SinonChrome.events.Event;
    export var onStartup: SinonChrome.events.Event;
    export var onSuspend: SinonChrome.events.Event;
    export var onSuspendCanceled: SinonChrome.events.Event;
    export var onUpdateAvailable: SinonChrome.events.Event;

    export var id: string;
    export var getURL: SinonChromeStub;
    export var lastError: { message?: string };
}

declare namespace SinonChrome.sessions {
    export var getDevices: SinonChromeStub;
    export var getRecentlyClosed: SinonChromeStub;
    export var restore: SinonChromeStub;

    export var onChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.storage {
    interface StubbedStorageArea {
      clear: SinonChromeStub;
      get: SinonChromeStub;
      getBytesInUse: SinonChromeStub;
      remove: SinonChromeStub;
      set: SinonChromeStub;
    }

    export var local: StubbedStorageArea;
    export var managed: StubbedStorageArea;
    export var sync: StubbedStorageArea;

    export var onChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.tabCapture {
    export var capture: SinonChromeStub;
    export var getCapturedTabs: SinonChromeStub;

    export var onStatusChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.tabs {
    export var captureVisibleTab: SinonChromeStub;
    export var connect: SinonChromeStub;
    export var create: SinonChromeStub;
    export var detectLanguage: SinonChromeStub;
    export var duplicate: SinonChromeStub;
    export var executeScript: SinonChromeStub;
    export var get: SinonChromeStub;
    export var getAllInWindow: SinonChromeStub;
    export var getCurrent: SinonChromeStub;
    export var getSelected: SinonChromeStub;
    export var highlight: SinonChromeStub;
    export var insertCSS: SinonChromeStub;
    export var move: SinonChromeStub;
    export var query: SinonChromeStub;
    export var reload: SinonChromeStub;
    export var remove: SinonChromeStub;
    export var sendMessage: SinonChromeStub;
    export var sendRequest: SinonChromeStub;
    export var update: SinonChromeStub;

    export var onActivated: SinonChrome.events.Event;
    export var onActiveChanged: SinonChrome.events.Event;
    export var onAttached: SinonChrome.events.Event;
    export var onCreated: SinonChrome.events.Event;
    export var onDetached: SinonChrome.events.Event;
    export var onHighlightChanged: SinonChrome.events.Event;
    export var onHighlighted: SinonChrome.events.Event;
    export var onMoved: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
    export var onReplaced: SinonChrome.events.Event;
    export var onSelectionChanged: SinonChrome.events.Event;
    export var onUpdated: SinonChrome.events.Event;
    export var onZoomChange: SinonChrome.events.Event;
}

declare namespace SinonChrome.topSites {
    export var get: SinonChromeStub;
}

declare namespace SinonChrome.tts {
    export var getVoices: SinonChromeStub;
    export var isSpeaking: SinonChromeStub;
    export var pause: SinonChromeStub;
    export var resume: SinonChromeStub;
    export var speak: SinonChromeStub;
    export var stop: SinonChromeStub;

    export var onEvent: SinonChrome.events.Event;
}

declare namespace SinonChrome.ttsEngine {
    export var onPause: SinonChrome.events.Event;
    export var onResume: SinonChrome.events.Event;
    export var onSpeak: SinonChrome.events.Event;
    export var onStop: SinonChrome.events.Event;

    export var sendTtsEvent: SinonChromeStub;
}

declare namespace SinonChrome.webNavigation {
    export var getAllFrames: SinonChromeStub;
    export var getFrame: SinonChromeStub;

    export var onBeforeNavigate: SinonChrome.events.Event;
    export var onCommitted: SinonChrome.events.Event;
    export var onCompleted: SinonChrome.events.Event;
    export var onCreatedNavigationTarget: SinonChrome.events.Event;
    export var onDOMContentLoaded: SinonChrome.events.Event;
    export var onErrorOccurred: SinonChrome.events.Event;
    export var onHistoryStateUpdated: SinonChrome.events.Event;
    export var onReferenceFragmentUpdated: SinonChrome.events.Event;
    export var onTabReplaced: SinonChrome.events.Event;
}

declare namespace SinonChrome.webRequest {
    export var handlerBehaviorChanged: SinonChromeStub;

    export var onAuthRequired: SinonChrome.events.Event;
    export var onBeforeRedirect: SinonChrome.events.Event;
    export var onBeforeRequest: SinonChrome.events.Event;
    export var onBeforeSendHeaders: SinonChrome.events.Event;
    export var onCompleted: SinonChrome.events.Event;
    export var onErrorOccurred: SinonChrome.events.Event;
    export var onHeadersReceived: SinonChrome.events.Event;
    export var onResponseStarted: SinonChrome.events.Event;
    export var onSendHeaders: SinonChrome.events.Event;
}

declare namespace SinonChrome.windows {
    export var create: SinonChromeStub;
    export var get: SinonChromeStub;
    export var getAll: SinonChromeStub;
    export var getCurrent: SinonChromeStub;
    export var getLastFocused: SinonChromeStub;
    export var remove: SinonChromeStub;
    export var update: SinonChromeStub;

    export var onCreated: SinonChrome.events.Event;
    export var onFocusChanged: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
}
