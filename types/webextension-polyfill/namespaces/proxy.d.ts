//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.proxy
 *
 * Provides access to global proxy settings for Firefox and proxy event listeners to handle dynamic proxy implementations.
 * Permissions: "proxy"
 */
import { Events } from "./events";
import { Types } from "./types";
import { WebRequest } from "./webRequest";

export namespace Proxy {
    /**
     * An object which describes proxy settings.
     */
    interface ProxyConfig {
        /**
         * The type of proxy to use.
         * Optional.
         */
        proxyType?: ProxyConfigProxyTypeEnum;

        /**
         * The address of the http proxy, can include a port.
         * Optional.
         */
        http?: string;

        /**
         * Use the http proxy server for all protocols.
         * Optional.
         */
        httpProxyAll?: boolean;

        /**
         * The address of the ssl proxy, can include a port.
         * Optional.
         */
        ssl?: string;

        /**
         * The address of the socks proxy, can include a port.
         * Optional.
         */
        socks?: string;

        /**
         * The version of the socks proxy.
         * Optional.
         */
        socksVersion?: number;

        /**
         * A list of hosts which should not be proxied.
         * Optional.
         */
        passthrough?: string;

        /**
         * A URL to use to configure the proxy.
         * Optional.
         */
        autoConfigUrl?: string;

        /**
         * Do not prompt for authentication if password is saved.
         * Optional.
         */
        autoLogin?: boolean;

        /**
         * Proxy DNS when using SOCKS v5.
         * Optional.
         */
        proxyDNS?: boolean;

        /**
         * If true (the default value), do not use newer TLS protocol features that might have interoperability problems on the
         * Internet. This is intended only for use with critical infrastructure like the updates,
         * and is only available to privileged addons.
         * Optional.
         */
        respectBeConservative?: boolean;
    }

    interface OnRequestDetailsType {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result,
         * they could be used to relate different events of the same request.
         */
        requestId: string;

        url: string;

        /**
         * Standard HTTP method.
         */
        method: string;

        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in
         * which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code>
         * or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists.
         */
        parentFrameId: number;

        /**
         * True for private browsing requests.
         * Optional.
         */
        incognito?: boolean;

        /**
         * The cookie store ID of the contextual identity.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * URL of the resource that triggered this request.
         * Optional.
         */
        originUrl?: string;

        /**
         * URL of the page into which the requested resource will be loaded.
         * Optional.
         */
        documentUrl?: string;

        /**
         * The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
         */
        tabId: number;

        /**
         * How the requested resource will be used.
         */
        type: WebRequest.ResourceType;

        /**
         * The time when this signal is triggered, in milliseconds since the epoch.
         */
        timeStamp: number;

        /**
         * Indicates if this response was fetched from disk cache.
         */
        fromCache: boolean;

        /**
         * The HTTP request headers that are going to be sent out with this request.
         * Optional.
         */
        requestHeaders?: WebRequest.HttpHeaders;

        /**
         * Url classification if the request has been classified.
         */
        urlClassification: WebRequest.UrlClassification;

        /**
         * Indicates if this request and its content window hierarchy is third party.
         */
        thirdParty: boolean;
    }

    interface OnErrorErrorType {
        [s: string]: unknown;
    }

    /**
     * The type of proxy to use.
     */
    type ProxyConfigProxyTypeEnum = "none" | "autoDetect" | "system" | "manual" | "autoConfig";

    /**
     * Fired when proxy data is needed for a request.
     */
    interface onRequestEvent extends Events.Event<(details: OnRequestDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filter A set of filters that restricts the events that will be sent to this listener.
         * @param extraInfoSpec Optional. Array of extra information that should be passed to the listener function.
         */
        addListener(
            callback: (details: OnRequestDetailsType) => void,
            filter: WebRequest.RequestFilter,
            extraInfoSpec?: string[],
        ): void;
    }

    interface Static {
        /**
         * Fired when proxy data is needed for a request.
         */
        onRequest: onRequestEvent;

        /**
         * Notifies about errors caused by the invalid use of the proxy API.
         *
         * @param error
         */
        onError: Events.Event<(error: OnErrorErrorType) => void>;

        /**
         * Configures proxy settings. This setting's value is an object of type ProxyConfig.
         */
        settings: Types.Setting;
    }
}
