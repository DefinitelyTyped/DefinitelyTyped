// Type definitions for twilio-video 2.0
// Project: https://twilio.com/video, https://twilio.com
// Definitions by: MindDoc <https://github.com/minddocdev>
//                 Darío Blanco <https://github.com/darioblanco>
//                 katashin <https://github.com/ktsn>
//                 Benjamin Santalucia <https://github.com/ben8p>
//                 Erick Delfin <https://github.com/nifled>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EventEmitter } from 'events';

/**
 * Classes
 */
export class AccessTokenExpiredError extends TwilioError {
    code: 20104;
    message: 'Access Token expired or expiration date invalid';
}
export class AccessTokenGrantsInvalidError extends TwilioError {
    code: 20106;
    message: 'Invalid Access Token grants';
}
export class AccessTokenHeaderInvalidError extends TwilioError {
    code: 20102;
    message: 'Invalid Access Token header';
}
export class AccessTokenIssuerInvalidError extends TwilioError {
    code: 20103;
    message: 'Invalid Access Token issuer/subject';
}
export class AccessTokenNotYetValidError extends TwilioError {
    code: 20105;
    message: 'Access Token not yet valid';
}
export class AccessTokenSignatureInvalidError extends TwilioError {
    code: 20107;
    message: 'Invalid Access Token signature';
}
export class AudioTrack extends Track {
    isStarted: boolean;
    isEnabled: boolean;
    kind: 'audio';
    mediaStreamTrack: MediaStreamTrack;

    // Required for Safari if you want to detach without errors
    // See: https://github.com/twilio/twilio-video.js/issues/294#issuecomment-389708981
    _attachments?: HTMLMediaElement[];

    attach(element?: HTMLMediaElement | string): HTMLMediaElement;
    detach(element?: HTMLMediaElement | string): HTMLMediaElement[];
}
export class ConfigurationAcquireFailedError extends TwilioError {
    code: 53500;
    message: 'Unable to acquire configuration';
}
export class ConfigurationAcquireTurnFailedError extends TwilioError {
    code: 53501;
    message: 'Unable to acquire TURN credentials';
}
export class LocalAudioTrack extends AudioTrack {
    constructor(mediaStreamTrack: MediaStreamTrack, options?: LocalTrackOptions);

    id: Track.ID;
    isStopped: boolean;

    disable(): LocalAudioTrack;
    enable(enabled?: boolean): LocalAudioTrack;
    stop(): LocalAudioTrack;
}
export class LocalAudioTrackPublication extends LocalTrackPublication {
    kind: 'audio';
    track: LocalAudioTrack;

    unpublish(): LocalAudioTrackPublication;
}
export class LocalAudioTrackStats extends LocalTrackStats {
    audioLevel: AudioLevel | null;
    jitter: number | null;
}
export class LocalDataTrack extends Track {
    constructor(options?: LocalDataTrackOptions);

    id: Track.ID;
    kind: 'data';
    maxPacketLifeTime: number | null;
    maxRetransmits: number | null;
    ordered: boolean;
    reliable: boolean;

    send(data: string | Blob | ArrayBuffer | ArrayBufferView): void;
}
export class LocalDataTrackPublication extends LocalTrackPublication {
    kind: 'data';
    track: LocalDataTrack;

    unpublish(): LocalDataTrackPublication;
}
export class LocalParticipant extends Participant {
    audioTracks: Map<Track.SID, LocalAudioTrackPublication>;
    dataTracks: Map<Track.SID, LocalDataTrackPublication>;
    tracks: Map<Track.SID, LocalTrackPublication>;
    videoTracks: Map<Track.SID, LocalVideoTrackPublication>;

    publishTrack(track: LocalTrack): Promise<LocalTrackPublication>;
    publishTrack(
        mediaStreamTrack: MediaStreamTrack, options?: LocalTrackOptions,
    ): Promise<LocalTrackPublication>;
    publishTracks(
        tracks: Array<LocalTrack | MediaStreamTrack>,
    ): Promise<LocalTrackPublication[]>;
    setParameters(encodingParameters?: EncodingParameters | null): LocalParticipant;
    unpublishTrack(track: LocalTrack | MediaStreamTrack): LocalTrackPublication;
    unpublishTracks(tracks: Array<LocalTrack | MediaStreamTrack>): LocalTrackPublication[];
}
export class LocalTrackPublication extends TrackPublication {
    isTrackEnabled: boolean;
    kind: Track.Kind;
    track: LocalTrack;

    unpublish(): LocalTrackPublication;
}
export class LocalTrackStats extends TrackStats {
    bytesSent: number | null;
    packetsSent: number | null;
    roundTripTime: number | null;
}
export class LocalVideoTrack extends VideoTrack {
    constructor(mediaStreamTrack: MediaStreamTrack, options?: LocalTrackOptions);

    id: Track.ID;
    isStopped: boolean;

    disable(): LocalVideoTrack;
    enable(enabled?: boolean): LocalVideoTrack;
    stop(): LocalVideoTrack;
}
export class LocalVideoTrackPublication extends LocalTrackPublication {
    kind: 'video';
    track: LocalVideoTrack;

    unpublish(): LocalVideoTrackPublication;
}
export class LocalVideoTrackStats extends LocalTrackStats {
    captureDimensions: VideoTrack.Dimensions | null;
    dimensions: VideoTrack.Dimensions | null;
    captureFrameRate: number | null;
    frameRate: number | null;
}
export class MediaClientLocalDescFailedError extends TwilioError {
    code: 53400;
    message: 'Client is unable to create or apply a local media description';
}
export class MediaClientRemoteDescFailedError extends TwilioError {
    code: 53402;
    message: 'Client is unable to apply a remote media description';
}
export class MediaConnectionError extends TwilioError {
    code: 53405;
    message: 'Media connection failed';
}
export class MediaNoSupportedCodecError extends TwilioError {
    code: 53404;
    message: 'No supported codec';
}
export class MediaServerLocalDescFailedError extends TwilioError {
    code: 53401;
    message: 'Server is unable to create or apply a local media description';
}
export class MediaServerRemoteDescFailedError extends TwilioError {
    code: 53403;
    message: 'Server is unable to apply a remote media description';
}
export class NetworkQualityAudioStats extends NetworkQualityMediaStats { }
export class NetworkQualityBandwidthStats {
    actual: number | null;
    available: number | null;
    level: NetworkQualityLevel | null;
}
export class NetworkQualityFractionLostStats {
    fractionLost: number | null;
    level: NetworkQualityLevel | null;
}
export class NetworkQualityLatencyStats {
    jitter: number | null;
    rtt: number | null;
    level: NetworkQualityLevel | null;
}
export class NetworkQualityMediaStats {
    send: NetworkQualityLevel;
    recv: NetworkQualityLevel;
    sendStats: NetworkQualitySendOrRecvStats | null;
    recvStats: NetworkQualitySendOrRecvStats | null;
}
export class NetworkQualitySendOrRecvStats {
    bandwidth: NetworkQualityBandwidthStats | null;
    latency: NetworkQualityLatencyStats | null;
    fractionLost: NetworkQualityFractionLostStats | null;
}
export class NetworkQualityStats {
    level: NetworkQualityLevel;
    audio: NetworkQualityAudioStats | null; // nullable depending on verbosity config
    video: NetworkQualityVideoStats | null;
}
export class NetworkQualityVideoStats extends NetworkQualityMediaStats { }
export namespace Participant {
    type Identity = string;
    type SID = string;
}
export class Participant extends EventEmitter {
    audioTracks: Map<Track.SID, AudioTrackPublication>;
    dataTracks: Map<Track.SID, DataTrackPublication>;
    identity: Participant.Identity;
    networkQualityLevel: NetworkQualityLevel | null;
    networkQualityStats: NetworkQualityStats | null;
    sid: Participant.SID;
    state: string;
    tracks: Map<Track.SID, TrackPublication>;
    videoTracks: Map<Track.SID, VideoTrackPublication>;
}
export class ParticipantDuplicateIdentityError extends TwilioError {
    code: 53205;
    message: 'Participant disconnected because of duplicate identity';
}
export class ParticipantIdentityCharsInvalidError extends TwilioError {
    code: 53202;
    message: 'Participant identity contains invalid characters';
}
export class ParticipantIdentityInvalidError extends TwilioError {
    code: 53200;
    message: 'Participant identity is invalid';
}
export class ParticipantIdentityTooLongError extends TwilioError {
    code: 53201;
    message: 'Participant identity is too long';
}
export class ParticipantMaxTracksExceededError extends TwilioError {
    code: 53203;
    message: 'Participant has too many Tracks';
}
export class ParticipantNotFoundError extends TwilioError {
    code: 53204;
    message: 'Participant not found';
}
export class RemoteAudioTrack extends AudioTrack {
    sid: Track.SID;
}
export class RemoteAudioTrackPublication extends RemoteTrackPublication {
    kind: 'audio';
    track: RemoteAudioTrack | null;
}
export class RemoteAudioTrackStats extends RemoteTrackStats {
    audioLevel: AudioLevel | null;
    jitter: number | null;
}
export class RemoteDataTrack extends Track {
    isEnabled: boolean;
    isSubscribed: boolean;
    kind: 'data';
    maxPacketLifeTime: number | null;
    maxRetransmits: number | null;
    ordered: boolean;
    reliable: boolean;
    sid: Track.SID;
}
export class RemoteDataTrackPublication extends RemoteTrackPublication {
    kind: 'data';
    track: RemoteDataTrack | null;
}
export class RemoteParticipant extends Participant {
    audioTracks: Map<Track.SID, RemoteAudioTrackPublication>;
    dataTracks: Map<Track.SID, RemoteDataTrackPublication>;
    tracks: Map<Track.SID, RemoteTrackPublication>;
    videoTracks: Map<Track.SID, RemoteVideoTrackPublication>;
}
export class RemoteTrackPublication extends TrackPublication {
    isSubscribed: boolean;
    isTrackEnabled: boolean;
    kind: Track.Kind;
    track: RemoteTrack | null;
}
export class RemoteTrackStats extends TrackStats {
    bytesReceived: number | null;
    packetsReceived: number | null;
}
export class RemoteVideoTrack extends VideoTrack {
    sid: Track.SID;
}
export class RemoteVideoTrackPublication extends RemoteTrackPublication {
    kind: 'video';
    track: RemoteVideoTrack | null;
}
export class RemoteVideoTrackStats extends RemoteTrackStats {
    dimensions: VideoTrack.Dimensions | null;
    frameRate: number | null;
}
export namespace Room {
    type SID = string;
}
export class Room extends EventEmitter {
    dominantSpeaker: RemoteParticipant | null;
    isRecording: boolean;
    localParticipant: LocalParticipant;
    name: string;
    participants: Map<Participant.SID, RemoteParticipant>;
    sid: Room.SID;
    state: string;

    disconnect(): Room;
    getStats(): Promise<StatsReport[]>;
}
export class RoomCompletedError extends TwilioError {
    code: 53118;
    message: 'Room completed';
}
export class RoomConnectFailedError extends TwilioError {
    code: 53104;
    message: 'Unable to connect to Room';
}
export class RoomCreateFailedError extends TwilioError {
    code: 53103;
    message: 'Unable to create Room';
}
export class RoomInvalidParametersError extends TwilioError {
    code: 53114;
    message: 'Room creation parameter(s) incompatible with the Room type';
}
export class RoomMaxParticipantsExceededError extends TwilioError {
    code: 53105;
    message: 'Room contains too many Participants';
}
export class RoomMaxParticipantsOutOfRangeError extends TwilioError {
    code: 53107;
    message: 'MaxParticipants is out of range';
}
export class RoomMediaRegionInvalidError extends TwilioError {
    code: 53115;
    message: 'MediaRegion is invalid';
}
export class RoomMediaRegionUnavailableError extends TwilioError {
    code: 53116;
    message: 'There are no media servers available in the MediaRegion';
}
export class RoomNameCharsInvalidError extends TwilioError {
    code: 53102;
    message: 'Room name contains invalid characters';
}
export class RoomNameInvalidError extends TwilioError {
    code: 53100;
    message: 'Room name is invalid';
}
export class RoomNameTooLongError extends TwilioError {
    code: 53101;
    message: 'Room name is too long';
}
export class RoomNotFoundError extends TwilioError {
    code: 53106;
    message: 'Room not found';
}
export class RoomRoomExistsError extends TwilioError {
    code: 53113;
    message: 'Room exists';
}
export class RoomStatusCallbackInvalidError extends TwilioError {
    code: 53111;
    message: 'StatusCallback is invalid';
}
export class RoomStatusCallbackMethodInvalidError extends TwilioError {
    code: 53110;
    message: 'StatusCallbackMethod is invalid';
}
export class RoomStatusInvalidError extends TwilioError {
    code: 53112;
    message: 'Status is invalid';
}
export class RoomSubscriptionOperationNotSupportedError extends TwilioError {
    code: 53117;
    message: 'The subscription operation requested is not supported for the Room type';
}
export class RoomTimeoutOutOfRangeError extends TwilioError {
    code: 53109;
    message: 'Timeout is out of range';
}
export class RoomTypeInvalidError extends TwilioError {
    code: 53108;
    message: 'RoomType is not valid';
}
export class SignalingConnectionDisconnectedError extends TwilioError {
    code: 53001;
    message: 'Signaling connection disconnected';
}
export class SignalingConnectionError extends TwilioError {
    code: 53000;
    message: 'Signaling connection error';
}
export class SignalingConnectionTimeoutError extends TwilioError {
    code: 53002;
    message: 'Signaling connection timed out';
}
export class SignalingIncomingMessageInvalidError extends TwilioError {
    code: 53003;
    message: 'Client received an invalid signaling message';
}
export class SignalingOutgoingMessageInvalidError extends TwilioError {
    code: 53004;
    message: 'Client sent an invalid signaling message';
}
export class StatsReport {
    peerConnectionId: string;
    localAudioTrackStats: LocalAudioTrackStats[];
    localVideoTrackStats: LocalVideoTrackStats[];
    remoteAudioTrackStats: RemoteAudioTrackStats[];
    remoteVideoTrackStats: RemoteVideoTrackStats[];
}
export namespace Track {
    type Kind = 'audio' | 'video' | 'data';
    type Priority = 'low' | 'standard' | 'high';
    type ID = string;
    type SID = string;
}
export class Track extends EventEmitter {
    kind: Track.Kind;
    name: string;
}
export class TrackInvalidError extends TwilioError {
    code: 53300;
    message: 'Track is invalid';
}
export class TrackNameCharsInvalidError extends TwilioError {
    code: 53303;
    message: 'Track name contains invalid characters';
}
export class TrackNameInvalidError extends TwilioError {
    code: 53301;
    message: 'Track name is invalid';
}
export class TrackNameIsDuplicatedError extends TwilioError {
    code: 53304;
    message: 'Track name is duplicated';
}
export class TrackNameTooLongError extends TwilioError {
    code: 53302;
    message: 'Track name is too long';
}
export class TrackPublication extends EventEmitter {
    trackName: string;
    trackSid: Track.SID;
}
export class TrackServerTrackCapacityReachedError extends TwilioError {
    code: 53305;
    message: 'The server has reached capacity and cannot fulfill this request.';
}
export class TrackStats {
    trackId: Track.ID;
    trackSid: Track.SID;
    timestamp: number;
    ssrc: string;
    packetsLost: number | null;
    codec: string | null;
}
export class TwilioError extends Error {
    code: number;
    toString(): string;
}
export namespace VideoTrack {
    interface Dimensions {
        width: number | null;
        height: number | null;
    }
}
export class VideoTrack extends Track {
    isStarted: boolean;
    isEnabled: boolean;
    dimensions: VideoTrack.Dimensions;
    kind: 'video';
    mediaStreamTrack: MediaStreamTrack;

    // Required for Safari if you want to detach without errors
    // See: https://github.com/twilio/twilio-video.js/issues/294#issuecomment-389708981
    _attachments?: HTMLMediaElement[];

    attach(element?: HTMLMediaElement | string): HTMLVideoElement;
    detach(element?: HTMLMediaElement | string): HTMLMediaElement[];
}

/**
 * Global (https://media.twiliocdn.com/sdk/js/video/releases/2.0.0-beta1/docs/global.html)
 */
export const version: string;

/** Members */
export type AudioCodec = 'isac' | 'opus' | 'PCMA' | 'PCMU';
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'off';
export type VideoCodec = 'H264' | 'VP8' | 'VP9';

/** Methods */
export function connect(token: string, options?: ConnectOptions): Promise<Room>;
export function createLocalAudioTrack(options?: CreateLocalTrackOptions): Promise<LocalAudioTrack>;
export function createLocalTracks(options?: CreateLocalTracksOptions): Promise<LocalTrack[]>;
export function createLocalVideoTrack(options?: CreateLocalTrackOptions): Promise<LocalVideoTrack>;
export function isSupported(): boolean;
export function rewriteLocalTrackIds(room: Room, trackStats: LocalTrackStats[]): LocalTrackStats[];

/** Type Definitions */
export type AudioLevel = number;
export type AudioTrackPublication = LocalAudioTrackPublication | RemoteAudioTrackPublication;
export interface ConnectOptions {
    abortOnIceServersTimeout?: boolean;
    audio?: boolean | CreateLocalTrackOptions;
    automaticSubscription?: boolean;
    bandwidthProfile?: BandwidthProfileOptions;
    dominantSpeaker?: boolean;
    dscpTagging?: boolean;
    enableDscp?: boolean;
    iceServers?: RTCIceServer[];
    iceServersTimeout?: number;
    iceTransportPolicy?: RTCIceTransportPolicy;
    insights?: boolean;
    maxAudioBitrate?: number | null;
    maxVideoBitrate?: number | null;
    name?: string | null;
    networkQuality?: boolean | NetworkQualityConfiguration;
    region?: 'au1' | 'br1' | 'ie1' | 'de1' | 'jp1' | 'sg1' | 'us1' | 'us2' | 'gll';
    preferredAudioCodecs?: AudioCodec[];
    preferredVideoCodecs?: VideoCodec[] | VideoCodecSettings[];
    logLevel?: LogLevel | LogLevels;
    tracks?: LocalTrack[] | MediaStreamTrack[];
    video?: boolean | CreateLocalTrackOptions;
}
export interface BandwidthProfileOptions {
    video?: VideoBandwidthProfileOptions;
}
export interface VideoBandwidthProfileOptions {
    dominantSpeakerPriority?: Track.Priority;
    maxSubscriptionBitrate?: number;
    maxTracks?: number;
    mode?: BandwidthProfileMode;
    renderDimensions?: VideoRenderDimensions;
}
export interface VideoRenderDimensions {
    high?: VideoTrack.Dimensions;
    low?: VideoTrack.Dimensions;
    standard?: VideoTrack.Dimensions;
}

export type BandwidthProfileMode = 'grid' | 'collaboration' | 'presentation';
export interface CreateLocalTrackOptions extends MediaTrackConstraints {
    // In API reference logLevel is not optional, but in the Twilio examples it is
    logLevel?: LogLevel | LogLevels;
    name?: string;
    workaroundWebKitBug180748?: boolean;
}
export interface CreateLocalTracksOptions {
    audio?: boolean | CreateLocalTrackOptions;
    logLevel?: LogLevel | LogLevels;
    video?: boolean | CreateLocalTrackOptions;
}
export type DataTrack = LocalDataTrack | RemoteDataTrack;
export type DataTrackPublication = LocalDataTrackPublication | RemoteDataTrackPublication;
export interface EncodingParameters {
    maxAudioBitrate?: number | null;
    maxVideoBitrate?: number | null;
}
export interface LocalDataTrackOptions {
    maxPacketLifeTime?: number | null;
    maxRetransmits?: number | null;
    ordered?: boolean;
}
export type LocalTrack = LocalAudioTrack | LocalVideoTrack | LocalDataTrack;
export interface LocalTrackOptions {
    logLevel: LogLevel | LogLevels;
    name?: string;
}
export interface LogLevels {
    default: LogLevel;
    media: LogLevel;
    signaling: LogLevel;
    webrtc: LogLevel;
}
export type NetworkQualityLevel = number;
export type NetworkQualityVerbosity = 0 | 1 | 2 | 3;
export interface NetworkQualityConfiguration {
    local?: NetworkQualityVerbosity;
    remote?: NetworkQualityVerbosity;
}
export type RemoteTrack = RemoteAudioTrack | RemoteVideoTrack | RemoteDataTrack;
export interface RemoteTrackPublicationOptions {
    logLevel: LogLevel | LogLevels;
}
export interface TrackPublicationOptions {
    logLevel: LogLevel | LogLevels;
}
export interface VideoCodecSettings {
    codec: VideoCodec;
}
export type VideoTrackPublication = LocalVideoTrackPublication | RemoteVideoTrackPublication;
export interface VP8CodecSettings {
    name: VideoCodec;
    simulcast?: boolean;
}
