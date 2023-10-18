declare namespace SIPml {
    class Event {
        public description: string;
        public type: string;

        public getContent(): Object;
        public getContentString(): string;
        public getContentType(): Object;
        public getSipResponseCode(): number;
    }

    class EventTarget<EventSubscriptionType extends string, EventType extends Event> {
        public addEventListener(type: EventSubscriptionType, listener: (e: EventType) => void): void;
        public removeEventListener(type: EventSubscriptionType): void;
    }

    class Session extends EventTarget<Session.EventSubscriptionType, Session.Event> {
        public accept(configuration?: Session.Configuration): number;
        public getId(): number;
        public getRemoteFriendlyName(): string;
        public getRemoteUri(): string;
        public reject(configuration?: Session.Configuration): number;
        public setConfiguration(configuration?: Session.Configuration): void;
    }

    export namespace Session {
        /**
         * Should be
         *
         * "*" |
         * "connecting" |
         * "connected" |
         * "terminating" |
         * "terminated" |
         * "i_ao_request" |
         * "media_added" |
         * "media_removed" |
         * "i_request" |
         * "o_request" |
         * "cancelled_request" |
         * "sent_request" |
         * "transport_error" |
         * "global_error" |
         * "message_error" |
         * "webrtc_error" |
         */
        type EventSubscriptionType = string;

        interface Configuration {
            audio_remote?: HTMLElement | undefined;
            bandwidth?: { audio: number; video: number } | undefined;
            events_listener?: {
                events: EventSubscriptionType | EventSubscriptionType[];
                listener: (e: Session.Event) => void;
            } | undefined;
            expires?: number | undefined;
            from?: string | undefined;
            sip_caps?: Object[] | undefined;
            sip_headers?: Object[] | undefined;
            video_local?: HTMLElement | undefined;
            video_remote?: HTMLElement | undefined;
            video_size?: {
                minWidth?: number | undefined;
                maxWidth?: number | undefined;
                minHeight?: number | undefined;
                maxHeight?: number | undefined;
            } | undefined;
        }

        class Call extends Session implements EventTarget<Call.EventSubscriptionType, Session.Event> {
            public acceptTransfer(configuration?: Session.Configuration): number;
            public call(to: string, configuration?: Session.Configuration): number;
            public dtmf(): number;
            public hangup(configuration?: Session.Configuration): number;
            public hold(configuration?: Session.Configuration): number;
            public info(): number;
            public rejectTransfer(): number;
            public resume(): number;
            public transfer(): number;
        }

        namespace Call {
            /**
             * Should be
             *
             * Session.EventSubscriptionType |
             * "m_early_media" |
             * "m_local_hold_ok" |
             * "m_local_hold_nok" |
             * "m_local_resume_ok" |
             * "m_local_resume_nok" |
             * "m_remote_hold" |
             * "m_remote_resume" |
             * "m_stream_video_local_added" |
             * "m_stream_video_local_removed" |
             * "m_stream_video_remote_added" |
             * "m_stream_video_remote_removed" |
             * "m_stream_audio_local_added" |
             * "m_stream_audio_local_removed" |
             * "m_stream_audio_remote_added" |
             * "m_stream_audio_remote_removed" |
             * "i_ect_new_call" |
             * "o_ect_trying" |
             * "o_ect_accepted" |
             * "o_ect_completed" |
             * "i_ect_completed" |
             * "o_ect_failed" |
             * "i_ect_failed" |
             * "o_ect_notify" |
             * "i_ect_notify" |
             * "i_ect_requested " |
             * "m_bfcp_info" |
             * "i_info" |
             */
            type EventSubscriptionType = Session.EventSubscriptionType;
        }

        class Event extends SIPml.Event {
            public session: Session;

            public getTransferDestinationFriendlyName(): string;
        }

        class Message extends Session {
            public send(to: string, content?: any, contentType?: string, configuration?: Session.Configuration): number;
        }

        class Publish extends Session {
            public publish(content?: any, contentType?: string, configuration?: Session.Configuration): number;

            public unpublish(configuration?: Session.Configuration): void;
        }

        class Registration extends Session {
            public register(configuration?: Session.Configuration): void;
            public unregister(configuration?: Session.Configuration): void;
        }

        class Subscribe extends Session implements EventTarget<Subscribe.EventSubscriptionType, Session.Event> {
            public subscribe(to: string, configuration?: Session.Configuration): number;
            public unsubscribe(configuration?: Session.Configuration): number;
        }

        namespace Subscribe {
            /**
             * Should be
             *
             * Session.EventSubscriptionType | "i_notify"
             */
            type EventSubscriptionType = Session.EventSubscriptionType;
        }
    }

    class Stack extends EventTarget<Stack.EventSubscriptionType, Stack.Event> {
        public constructor(configuration?: Stack.Configuration);
        public setConfiguration(configuration: Stack.Configuration): number;
        public newSession(type: string, configuration?: Session.Configuration): any;
        public start(): number;
        public stop(timeout?: number): number;
    }

    export namespace Stack {
        /**
         * Should be
         *
         * "*" |
         * "starting" |
         * "started" |
         * "stopping" |
         * "stopped" |
         * "failed_to_start" |
         * "failed_to_stop" |
         * "i_new_call" |
         * "i_new_message" |
         * "m_permission_requested" |
         * "m_permission_accepted" |
         * "m_permission_refused";
         */
        type EventSubscriptionType = string;

        interface Configuration {
            bandwidth?: { audio: number; video: number } | undefined;
            display_name?: string | undefined;
            enable_click2call?: boolean | undefined;
            enable_early_ims?: boolean | undefined;
            enable_media_stream_cache?: boolean | undefined;
            enable_rtcweb_breaker?: boolean | undefined;
            events_listener?: {
                events: EventSubscriptionType | EventSubscriptionType[];
                listener: (e: Stack.Event) => void;
            } | undefined;
            ice_servers?: Object[] | undefined;
            impi?: string | undefined;
            impu?: string | undefined;
            outbound_proxy_url?: string | undefined;
            password?: string | undefined;
            realm?: string | undefined;
            sip_headers?: Object[] | undefined;
            video_size?: {
                minWidth?: number | undefined;
                maxWidth?: number | undefined;
                minHeight?: number | undefined;
                maxHeight?: number | undefined;
            } | undefined;
            websocket_proxy_url?: string | undefined;
        }

        class Event extends SIPml.Event {
            public description: string;
            public newSession: Session;
            public type: string;
        }
    }

    function getNavigatorFriendlyName(): string;

    function getNavigatorVersion(): string;

    function getSystemFriendlyName(): string;

    function getWebRtc4AllVersion(): string;

    function haveMediaStream(): boolean;

    function init(readyCallback?: (e: any) => any, errorCallback?: (e: any) => any): boolean;

    function isInitialized(): boolean;

    function isNavigatorOutdated(): boolean;

    function isReady(): boolean;

    function isScreenShareSupported(): boolean;

    function isWebRtcPluginOutdated(): boolean;

    function isWebRtc4AllSupported(): boolean;

    function isWebRtcSupported(): boolean;

    function isWebSocketSupported(): boolean;

    function setDebugLevel(level: string): void;

    function setWebRtcType(type: string): boolean;
}
