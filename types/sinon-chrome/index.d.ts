// Type definitions for Sinon-Chrome v0.2.1
// Project: https://github.com/vitalets/sinon-chrome
// Definitions by: Tim Perry <https://github.com/pimterry>
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
    export var clear: Sinon.SinonSpy;
    export var clearAll: Sinon.SinonSpy;
    export var create: Sinon.SinonSpy;
    export var get: Sinon.SinonSpy;
    export var getAll: Sinon.SinonSpy;
    export var onAlarm: SinonChrome.events.Event;
}

declare namespace SinonChrome.app {
    export var getDetails: Sinon.SinonStub;
    export var getDetailsForFrame: Sinon.SinonStub;
    export var getDetails: Sinon.SinonStub;
    export var getDetailsForFrame: Sinon.SinonStub;
    export var getIsInstalled: Sinon.SinonStub;
    export var installState: Sinon.SinonStub;
    export var runningState: Sinon.SinonStub;
}

declare namespace SinonChrome.bookmarks {
    export var create: Sinon.SinonStub;
    export var get: Sinon.SinonStub;
    export var getChildren: Sinon.SinonStub;
    export var getRecent: Sinon.SinonStub;
    export var getSubTree: Sinon.SinonStub;
    export var getTree: Sinon.SinonStub;
    export var move: Sinon.SinonStub;
    export var remove: Sinon.SinonStub;
    export var removeTree: Sinon.SinonStub;
    export var search: Sinon.SinonStub;
    export var update: Sinon.SinonStub;

    export var onChanged: SinonChrome.events.Event;
    export var onChildrenReordered: SinonChrome.events.Event;
    export var onCreated: SinonChrome.events.Event;
    export var onImportBegan: SinonChrome.events.Event;
    export var onImportEnded: SinonChrome.events.Event;
    export var onMoved: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
}

declare namespace SinonChrome.browserAction {
    export var disable: Sinon.SinonStub;
    export var enable: Sinon.SinonStub;
    export var getBadgeBackgroundColor: Sinon.SinonStub;
    export var getBadgeText: Sinon.SinonStub;
    export var getPopup: Sinon.SinonStub;
    export var getTitle: Sinon.SinonStub;
    export var setBadgeBackgroundColor: Sinon.SinonStub;
    export var setBadgeText: Sinon.SinonStub;
    export var setIcon: Sinon.SinonStub;
    export var setPopup: Sinon.SinonStub;
    export var setTitle: Sinon.SinonStub;

    export var onClicked: SinonChrome.events.Event;
}

declare namespace SinonChrome.browsingData {
    export var remove: Sinon.SinonStub;
    export var removeAppcache: Sinon.SinonStub;
    export var removeCache: Sinon.SinonStub;
    export var removeCookies: Sinon.SinonStub;
    export var removeDownloads: Sinon.SinonStub;
    export var removeFileSystems: Sinon.SinonStub;
    export var removeFormData: Sinon.SinonStub;
    export var removeHistory: Sinon.SinonStub;
    export var removeIndexedDB: Sinon.SinonStub;
    export var removeLocalStorage: Sinon.SinonStub;
    export var removePasswords: Sinon.SinonStub;
    export var removePluginData: Sinon.SinonStub;
    export var removeWebSQL: Sinon.SinonStub;
    export var settings: Sinon.SinonStub;
}

declare namespace SinonChrome.contentSettings {
    interface StubbedContentSetting {
      clear: Sinon.SinonStub;
      get: Sinon.SinonStub;
      getResourceIdentifiers: Sinon.SinonStub;
      set: Sinon.SinonStub;
    }

    export var cookies: StubbedContentSetting;
    export var images: StubbedContentSetting;
    export var javascript: StubbedContentSetting;
    export var notifications: StubbedContentSetting;
    export var plugins: StubbedContentSetting;
    export var popups: StubbedContentSetting;
}

declare namespace SinonChrome.contextMenus {
    export var create: Sinon.SinonStub;
    export var remove: Sinon.SinonStub;
    export var removeAll: Sinon.SinonStub;
    export var update: Sinon.SinonStub;

    export var onClicked: SinonChrome.events.Event;
}

declare namespace SinonChrome.omnibox {
    export var setDefaultSuggestion: Sinon.SinonStub;
    export var onInputStarted: SinonChrome.events.Event;
    export var onInputChanged: SinonChrome.events.Event;
    export var onInputEntered: SinonChrome.events.Event;
    export var onInputCancelled: SinonChrome.events.Event;
}

declare namespace SinonChrome.cookies {
    export var get: Sinon.SinonStub;
    export var getAll: Sinon.SinonStub;
    export var getAllCookieStores: Sinon.SinonStub;
    export var onChanged: SinonChrome.events.Event;
    export var remove: Sinon.SinonStub;
    export var set: Sinon.SinonStub;
}

/* TODO: Uncomment once https://github.com/Microsoft/TypeScript/issues/7840 is fixed
declare module SinonChrome.debugger {
    export var attach: Sinon.SinonStub;
    export var detach: Sinon.SinonStub;
    export var getTargets: Sinon.SinonStub;
    export var sendCommand: Sinon.SinonStub;

    export var onDetach: SinonChrome.events.Event;
    export var onEvent: SinonChrome.events.Event;
}
*/

declare namespace SinonChrome.declarativeContent {
    export var PageStateMatcher: Sinon.SinonStub;
    export var RequestContentScript: Sinon.SinonStub;
    export var ShowPageAction: Sinon.SinonStub;

    export var onPageChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome. desktopCapture {
    export var cancelChooseDesktopMedia: Sinon.SinonStub;
    export var chooseDesktopMedia: Sinon.SinonStub;
}

declare namespace SinonChrome.downloads {
    export var acceptDanger: Sinon.SinonStub;
    export var cancel: Sinon.SinonStub;
    export var download: Sinon.SinonStub;
    export var drag: Sinon.SinonStub;
    export var erase: Sinon.SinonStub;
    export var getFileIcon: Sinon.SinonStub;
    export var open: Sinon.SinonStub;
    export var pause: Sinon.SinonStub;
    export var removeFile: Sinon.SinonStub;
    export var resume: Sinon.SinonStub;
    export var search: Sinon.SinonStub;
    export var setShelfEnabled: Sinon.SinonStub;
    export var show: Sinon.SinonStub;
    export var showDefaultFolder: Sinon.SinonStub;

    export var onChanged: SinonChrome.events.Event;
    export var onCreated: SinonChrome.events.Event;
    export var onDeterminingFilename: SinonChrome.events.Event;
    export var onErased: SinonChrome.events.Event;
}

declare namespace SinonChrome.extension {
    export var connect: Sinon.SinonStub;
    export var connectNative: Sinon.SinonStub;
    export var getBackgroundPage: Sinon.SinonStub;
    export var getURL: Sinon.SinonStub;
    export var getViews: Sinon.SinonStub;
    export var isAllowedFileSchemeAccess: Sinon.SinonStub;
    export var isAllowedIncognitoAccess: Sinon.SinonStub;
    export var sendMessage: Sinon.SinonStub;
    export var sendNativeMessage: Sinon.SinonStub;
    export var sendRequest: Sinon.SinonStub;
    export var setUpdateUrlData: Sinon.SinonStub;

    export var onConnect: SinonChrome.events.Event;
    export var onConnectExternal: SinonChrome.events.Event;
    export var onMessage: SinonChrome.events.Event;
    export var onMessageExternal: SinonChrome.events.Event;
    export var onRequest: SinonChrome.events.Event;
    export var onRequestExternal: SinonChrome.events.Event;
}

declare namespace SinonChrome.fontSettings {
    export var clearDefaultFixedFontSize: Sinon.SinonStub;
    export var clearDefaultFontSize: Sinon.SinonStub;
    export var clearFont: Sinon.SinonStub;
    export var clearMinimumFontSize: Sinon.SinonStub;
    export var getDefaultFixedFontSize: Sinon.SinonStub;
    export var getDefaultFontSize: Sinon.SinonStub;
    export var getFont: Sinon.SinonStub;
    export var getFontList: Sinon.SinonStub;
    export var getMinimumFontSize: Sinon.SinonStub;
    export var setDefaultFixedFontSize: Sinon.SinonStub;
    export var setDefaultFontSize: Sinon.SinonStub;
    export var setFont: Sinon.SinonStub;
    export var setMinimumFontSize: Sinon.SinonStub;

    export var onDefaultFixedFontSizeChanged: SinonChrome.events.Event;
    export var onDefaultFontSizeChanged: SinonChrome.events.Event;
    export var onFontChanged: SinonChrome.events.Event;
    export var onMinimumFontSizeChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.gcm {
    export var onMessage: SinonChrome.events.Event;
    export var onMessagesDeleted: SinonChrome.events.Event;
    export var onSendError: SinonChrome.events.Event;

    export var register: Sinon.SinonStub;
    export var send: Sinon.SinonStub;
    export var unregister: Sinon.SinonStub;
}

declare namespace SinonChrome.history {
    export var addUrl: Sinon.SinonStub;
    export var deleteAll: Sinon.SinonStub;
    export var deleteRange: Sinon.SinonStub;
    export var deleteUrl: Sinon.SinonStub;
    export var getVisits: Sinon.SinonStub;
    export var search: Sinon.SinonStub;

    export var onVisitRemoved: SinonChrome.events.Event;
    export var onVisited: SinonChrome.events.Event;
}

declare namespace SinonChrome.i18n {
    export var getAcceptLanguages: Sinon.SinonStub;
    export var getMessage: Sinon.SinonStub;
    export var getUILanguage: Sinon.SinonStub;
}

declare namespace SinonChrome.identity {
    export var getAuthToken: Sinon.SinonStub;
    export var getProfileUserInfo: Sinon.SinonStub;
    export var getRedirectURL: Sinon.SinonStub;
    export var launchWebAuthFlow: Sinon.SinonStub;
    export var removeCachedAuthToken: Sinon.SinonStub;

    export var onSignInChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.idle {
    export var onStateChanged: SinonChrome.events.Event;

    export var queryState: Sinon.SinonStub;
    export var setDetectionInterval: Sinon.SinonStub;
}

declare namespace SinonChrome.management {
    export var createAppShortcut: Sinon.SinonStub;
    export var generateAppForLink: Sinon.SinonStub;
    export var get: Sinon.SinonStub;
    export var getAll: Sinon.SinonStub;
    export var getPermissionWarningsById: Sinon.SinonStub;
    export var getPermissionWarningsByManifest: Sinon.SinonStub;
    export var launchApp: Sinon.SinonStub;
    export var setEnabled: Sinon.SinonStub;
    export var setLaunchType: Sinon.SinonStub;
    export var uninstall: Sinon.SinonStub;
    export var uninstallSelf: Sinon.SinonStub;

    export var onDisabled: SinonChrome.events.Event;
    export var onEnabled: SinonChrome.events.Event;
    export var onInstalled: SinonChrome.events.Event;
    export var onUninstalled: SinonChrome.events.Event;
}

declare namespace SinonChrome.notifications {
    export var clear: Sinon.SinonStub;
    export var create: Sinon.SinonStub;
    export var getAll: Sinon.SinonStub;
    export var getPermissionLevel: Sinon.SinonStub;
    export var update: Sinon.SinonStub;

    export var onButtonClicked: SinonChrome.events.Event;
    export var onClicked: SinonChrome.events.Event;
    export var onClosed: SinonChrome.events.Event;
    export var onPermissionLevelChanged: SinonChrome.events.Event;
    export var onShowSettings: SinonChrome.events.Event;
}

declare namespace SinonChrome.pageCapture {
    export var saveAsMHTML: Sinon.SinonStub;
}

declare namespace SinonChrome.permissions {
    export var contains: Sinon.SinonStub;
    export var getAll: Sinon.SinonStub;
    export var onAdded: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
    export var remove: Sinon.SinonStub;
    export var request: Sinon.SinonStub;
}

declare namespace SinonChrome.power {
    export var releaseKeepAwake: Sinon.SinonStub;
    export var requestKeepAwake: Sinon.SinonStub;
}

declare namespace SinonChrome.types {
    interface StubbedChromeSetting {
        clear: Sinon.SinonStub;
        get: Sinon.SinonStub;
        set: Sinon.SinonStub;

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
    export var getChannelId: Sinon.SinonStub;
    export var onMessage: SinonChrome.events.Event;
}

declare namespace SinonChrome.runtime {
    export var connect: Sinon.SinonStub;
    export var connectNative: Sinon.SinonStub;
    export var getBackgroundPage: Sinon.SinonStub;
    export var getManifest: Sinon.SinonStub;
    export var getPackageDirectoryEntry: Sinon.SinonStub;
    export var getPlatformInfo: Sinon.SinonStub;
    export var reload: Sinon.SinonStub;
    export var requestUpdateCheck: Sinon.SinonStub;
    export var restart: Sinon.SinonStub;
    export var sendMessage: Sinon.SinonStub;
    export var sendNativeMessage: Sinon.SinonStub;

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
    export var getURL: Sinon.SinonSpy;
    export var lastError: { message?: string };
}

declare namespace SinonChrome.sessions {
    export var getDevices: Sinon.SinonStub;
    export var getRecentlyClosed: Sinon.SinonStub;
    export var restore: Sinon.SinonStub;

    export var onChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.storage {
    interface StubbedStorageArea {
      clear: Sinon.SinonStub;
      get: Sinon.SinonStub;
      getBytesInUse: Sinon.SinonStub;
      remove: Sinon.SinonStub;
      set: Sinon.SinonStub;
    }

    export var local: StubbedStorageArea;
    export var managed: StubbedStorageArea;
    export var sync: StubbedStorageArea;

    export var onChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.tabCapture {
    export var capture: Sinon.SinonStub;
    export var getCapturedTabs: Sinon.SinonStub;

    export var onStatusChanged: SinonChrome.events.Event;
}

declare namespace SinonChrome.tabs {
    export var captureVisibleTab: Sinon.SinonStub;
    export var connect: Sinon.SinonStub;
    export var create: Sinon.SinonStub;
    export var detectLanguage: Sinon.SinonStub;
    export var duplicate: Sinon.SinonStub;
    export var executeScript: Sinon.SinonStub;
    export var get: Sinon.SinonStub;
    export var getAllInWindow: Sinon.SinonStub;
    export var getCurrent: Sinon.SinonStub;
    export var getSelected: Sinon.SinonStub;
    export var highlight: Sinon.SinonStub;
    export var insertCSS: Sinon.SinonStub;
    export var move: Sinon.SinonStub;
    export var query: Sinon.SinonStub;
    export var reload: Sinon.SinonStub;
    export var remove: Sinon.SinonStub;
    export var sendMessage: Sinon.SinonStub;
    export var sendRequest: Sinon.SinonStub;
    export var update: Sinon.SinonStub;

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
    export var get: Sinon.SinonStub;
}

declare namespace SinonChrome.tts {
    export var getVoices: Sinon.SinonStub;
    export var isSpeaking: Sinon.SinonStub;
    export var pause: Sinon.SinonStub;
    export var resume: Sinon.SinonStub;
    export var speak: Sinon.SinonStub;
    export var stop: Sinon.SinonStub;

    export var onEvent: SinonChrome.events.Event;
}

declare namespace SinonChrome.ttsEngine {
    export var onPause: SinonChrome.events.Event;
    export var onResume: SinonChrome.events.Event;
    export var onSpeak: SinonChrome.events.Event;
    export var onStop: SinonChrome.events.Event;

    export var sendTtsEvent: Sinon.SinonStub;
}

declare namespace SinonChrome.webNavigation {
    export var getAllFrames: Sinon.SinonStub;
    export var getFrame: Sinon.SinonStub;

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
    export var handlerBehaviorChanged: Sinon.SinonStub;

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
    export var create: Sinon.SinonStub;
    export var get: Sinon.SinonStub;
    export var getAll: Sinon.SinonStub;
    export var getCurrent: Sinon.SinonStub;
    export var getLastFocused: Sinon.SinonStub;
    export var remove: Sinon.SinonStub;
    export var update: Sinon.SinonStub;

    export var onCreated: SinonChrome.events.Event;
    export var onFocusChanged: SinonChrome.events.Event;
    export var onRemoved: SinonChrome.events.Event;
}
