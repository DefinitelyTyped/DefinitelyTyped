// Type definitions for non-npm package PexRTC 26.0
// Project: https://docs.pexip.com/api_client/api_pexrtc.htm
// Definitions by: 10Clouds <https://github.com/10clouds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const PexRTC: PexRTC.PexInstance;

declare namespace PexRTC {
    interface PexInstance {
        // tslint:disable-next-line:no-unnecessary-qualifier
        new (): PexRTC.PexInstance;

        /**
         * ## Callbacks
         */
        onCallTransfer: (alias: string) => void;
        onChatMessage: (message: PexChatMessage) => void;
        onConnect: (stream: PexMediaStream | null) => void;
        onConferenceUpdate: (properties: {
            guest_muted: boolean;
            locked: boolean;
            started: boolean;
        }) => void;
        onDisconnect: (reason: string) => void;
        onError: (reason: string) => void;
        onLayoutUpdate: (layout: PexLayoutResponse) => void;
        onLog: () => {};
        onMicActivity: (activity: string) => void;
        onParticipantCreate: (participant: PexAnyParticipant) => void;
        onParticipantDelete: (
            participant: Pick<PexAnyParticipant, 'uuid'>
        ) => void;
        onParticipantUpdate: (participant: PexAnyParticipant) => void;
        onPresentation: (
            setting: boolean,
            presenter: string | null,
            uuid?: string
        ) => void;
        onPresentationConnected: (stream: PexMediaStream) => void;
        onPresentationDisconnected: (reason: string) => void;
        onPresentationReload: (url: string) => void;
        /**
         * @deprecated in favor of onParticipantCreate/Update/Delete.
         */
        onRosterList: (roster: any[]) => void;
        onScreenshareConnected: (stream: PexMediaStream) => void;
        onScreenshareStopped: (reason: string) => void;
        onSetup: (
            stream: PexMediaStream | null,
            pin_status: PexPinStatus,
            conference_extension?: 'standard' | 'mssip'
        ) => void;
        onStageUpdate: (
            stage: Array<{
                participant_uuid: string;
                stage_index: number;
                vad: number;
            }>
        ) => void;

        /**
         * ## Client control functions
         */
        readonly makeCall: (
            node: string,
            conference: string,
            name: string,
            bandwidth?: number,
            call_type?: PexCallTypes,
            flash?: { [key: string]: unknown }
        ) => void;
        readonly connect: (pin: string | null, extension?: string) => void;
        readonly muteAudio: (setting: boolean) => boolean;
        readonly muteVideo: (setting: boolean) => boolean;
        readonly sendChatMessage: (message: string) => void;
        readonly disconnect: () => void;
        readonly disconnectcall: () => void;
        readonly addCall: (call_type?: PexCallTypes) => void;
        readonly renegotiate: (resend_sdp?: boolean) => void;
        readonly getPresentation: () => void;
        readonly stopPresentation: () => void;
        readonly present: (type?: 'screen') => void;
        readonly getMediaStatistics: () => PexStatistics;

        /**
         * ## Conference control functions
         */
        readonly dialOut: (
            destination: string,
            protocol?: 'sip' | 'h323' | 'rtmp' | 'mssip' | 'auto',
            role?: PexRole,
            cb?: (res: { result: string[] }) => void,
            params?: {
                presentation_uri?: string;
                streaming?: boolean;
                dtmf_sequence?: string;
                call_type?: 'video' | 'video-only' | 'audio';
                keep_conference_alive?:
                    | 'keep_conference_alive'
                    | 'keep_conference_alive_if_multiple'
                    | 'keep_conference_alive_never';
                remote_display_name?: string;
                overlay_text?: string;
            }
        ) => void;
        readonly setConferenceLock: (setting: boolean) => void;
        readonly setMuteAllGuests: (setting: boolean) => void;
        readonly setParticipantMute: (uuid: string, setting: boolean) => void;
        readonly videoMuted: (uuid?: string) => void;
        readonly videoUnmuted: (uuid?: string) => void;
        readonly setParticipantRxPresentation: (
            uuid: string,
            setting: boolean
        ) => void;
        readonly setParticipantSpotlight: (uuid: string, setting: boolean) => void;
        readonly setParticipantText: (uuid: string, text: string) => void;
        readonly setRole: (uuid: string, role: PexParticipantRole) => void;
        readonly unlockParticipant: (uuid: string) => void;
        readonly transferParticipant: (
            uuid: string,
            destination: string,
            role: string,
            pin?: string
        ) => void;
        readonly startConference: () => void;
        readonly disconnectParticipant: (uuid: string) => void;
        readonly disconnectAll: () => void;
        readonly sendDTMF: (digits: string, uuid: string) => void;
        readonly sendFECC: (
            action: 'start' | 'stop' | 'continue',
            axis: 'pan' | 'tilt' | 'zoom',
            direction: 'left' | 'right' | 'up' | 'down' | 'in' | 'out',
            target: string | null,
            timeout: number
        ) => void;
        readonly setBuzz: () => void;
        readonly clearBuzz: (uuid: string) => void;
        readonly clearAllBuzz: () => void;
        readonly transformLayout: (transforms: {
            layout: PexLayoutTypes;
            host_layout: PexLayoutTypes;
            guest_layout: PexLayoutTypes;
            streaming_indicator: boolean;
            recording_indicator: boolean;
            enable_active_speaker_indication: boolean;
            enable_overlay_text: boolean;
            free_form_overlay_text: string;
            streaming: {
                layout: PexLayoutTypes;
                waiting_screen_enabled: boolean;
                plus_n_pip_enabled: boolean;
                indicators_enabled: boolean;
            };
        }) => void;

        /**
         * ## Instance variables
         *
         * A few additional configuration changes can be undertaken via instance
         * variables on the PexRTC object, before calling makeCall:
         */

        /**
         * audio_source, video_source
         * Values can be:
         * null: default sources
         * false: do not request
         * string: a uuid of a media source gathered through device enumeration (Chrome only)
         */
        audio_source: string | null | false;
        video_source: string | null | false;
        bandwidth_in: number;
        bandwidth_out: number;
        call_tag: string;
        default_stun: string;
        ice_timeout: number;
        png_presentation: boolean;
        recv_audio: boolean;
        recv_video: boolean;
        screenshare_fps: number;
        turn_server: null | {
            url: string;
            username: string;
            credential: string;
        };
        /**
         * A MediaStream object to use instead of PexRTC calling getUserMedia
         */
        user_media_stream: MediaStream;
        /**
         * A MediaStream object to use for presentation instead of
         * PexRTC calling getDisplayMedia
         */
        user_presentation_stream: MediaStream;

        /**
         * ## Fields
         *
         * The following fields on the PexRTC object are immutable but can be probed
         * after onSetup, and provide useful information about the connection:
         */
        readonly chat_enabled: boolean;
        readonly current_service_type: PexServiceType;
        readonly role: PexRole;
        readonly service_type: 'conference' | 'gateway' | 'test_call';
        readonly uuid: string;
        readonly version: string;

        /**
         * ## Undocumented fields
         */
        readonly allow_1080p: boolean;
        readonly analytics_enabled: boolean;
        readonly basic_password: string;
        readonly basic_username: string;
        readonly call: {
            readonly mutedAudio: boolean;
            readonly mutedVideo: boolean;
        };
        readonly call_type: undefined;
        readonly chrome_ver: number;
        readonly conference: string;
        readonly conference_extension: string;
        readonly conference_name: string;
        readonly conference_uri: string;
        readonly display_name: string;
        readonly dtmf_queue: {};
        readonly edge_ver: number;
        readonly error: string;
        readonly event_listener: string;
        readonly event_source: EventSource;
        readonly onmessage: string;
        readonly onopen: () => {};
        readonly readyState: number;
        readonly url: string;
        readonly withCredentials: boolean;
        readonly event_source_timeout: number;
        readonly fecc_enabled: boolean;
        readonly fecc_queue: {};
        readonly firefox_ver: number;
        readonly flash: undefined;
        readonly force_hd: number;
        readonly guests_can_present: boolean;
        readonly h264_enabled: boolean;
        readonly is_android: boolean;
        readonly is_electron: boolean;
        readonly is_mobile: boolean;
        readonly last_ping: string;
        readonly localStream: string;
        readonly mutedAudio: boolean;
        readonly mutedVideo: boolean;
        readonly node: string;
        readonly oneTimeToken: string;
        readonly orig_bandwidth_in: number;
        readonly orig_bandwidth_out: number;
        readonly outstanding_requests: {};
        readonly pc: string;
        readonly pcConfig: {
            readonly iceServers: number[];
        };
        readonly pin: string;
        readonly pin_status: PexPinStatus;
        readonly powerLineFrequency: number;
        readonly presentation: string;
        readonly presentation_event_id: string;
        readonly presentation_msg: { status: string };
        readonly registration_token: string;
        readonly remote_call_type: string;
        readonly return_media_stream: boolean;
        readonly rosterList: { [key: string]: PexParticipant };
        readonly rtmp_enabled: boolean;
        readonly rtsp_enabled: boolean;
        readonly safari_ver: number;
        readonly screenshare: string;
        readonly screenshare_api: string;
        readonly screenshare_height: number;
        readonly screenshare_width: number;
        readonly socket: string;
        readonly state: string;
        readonly stats: {};
        readonly stats_interval: string;
        readonly token: string;
        readonly token_refresh: number;
        readonly trans: {};
        readonly use_trickle_ice: boolean;
        readonly vp9_enabled: boolean;
        readonly xhr_timeout: number;
    }

    type PexMediaStream = MediaStream | string;
    type PexRole = 'HOST' | 'GUEST';
    type PexPinStatus = 'none' | 'required' | 'optional';
    type PexYesNo = 'YES' | 'NO';
    type PexParticipantRole = 'chair' | 'guest';
    type PexLayoutTypes =
        | '1:0'
        | '1:7'
        | '1:21'
        | '2:21'
        | '4:0'
        | '5:7'
        | 'ac';

    type PexServiceType =
        | 'connecting'
        | 'waiting_room'
        | 'ivr'
        | 'conference'
        | 'lecture'
        | 'gateway'
        | 'test_call';

    type PexCallTypes =
        | 'presentation'
        | 'screen'
        | 'audioonly'
        | 'recvonly'
        | 'rtmp'
        | 'stream'
        | 'none';

    interface PexLayoutResponse {
        participants: string[];
        view: PexLayoutTypes;
    }

    interface PexChatMessage {
        readonly origin: string;
        readonly uuid: string;
        readonly type: string;
        readonly payload: string;
    }

    interface PexAudioStatistics {
        readonly 'packets-sent': number;
        readonly bitrate: string;
        readonly codec: string;
        readonly 'packets-lost': number;
        readonly 'percentage-lost': string;
        readonly 'percentage-lost-recent': string;
    }

    interface PexVideoStatistics extends PexAudioStatistics {
        readonly framerate: number;
        readonly resolution: string;
    }

    interface PexStatistics {
        readonly incoming: {
            audio: PexAudioStatistics;
            video: PexVideoStatistics;
        };
        readonly outgoing: {
            audio: PexAudioStatistics;
            video: PexVideoStatistics;
        };
    }

    interface PexParticipant {
        readonly api_url: string;
        readonly buzz_time: number;
        readonly call_direction: 'in' | 'out';
        readonly call_tag: string;
        readonly disconnect_supported: PexYesNo;
        readonly display_name: string;
        readonly encryption: string;
        readonly external_node_uuid: string;
        readonly fecc_supported: PexYesNo;
        readonly has_media: boolean;
        readonly is_audio_only_call: PexYesNo;
        readonly is_external: boolean;
        readonly is_muted: PexYesNo;
        readonly is_presenting: PexYesNo;
        readonly is_streaming_conference: boolean;
        readonly is_video_call: PexYesNo;
        readonly local_alias: string;
        readonly mute_supported: PexYesNo;
        readonly overlay_text: string;
        readonly presentation_supported: PexYesNo;
        readonly protocol: string;
        readonly role: PexParticipantRole;
        readonly rx_presentation_policy: 'allow' | 'deny';
        readonly service_type: PexServiceType;
        readonly spotlight: number;
        readonly start_time: number;
        readonly transfer_supported: PexYesNo;
        readonly uri: string;
        readonly uuid: string;
        readonly vendor: string;
    }

    interface PexGuestParticipant extends PexParticipant {
        readonly role: 'guest';
    }

    interface PexHostParticipant extends PexParticipant {
        readonly role: 'chair';
    }

    type PexAnyParticipant =
        | PexGuestParticipant
        | PexHostParticipant;
}
