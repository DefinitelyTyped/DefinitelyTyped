/**
 * @hidden
 */
/**
 * File contains types and helpers used to communicate between client and provider.
 *
 * These exports are a part of the client, but are not required by applications wishing to interact with the service.
 * This file is excluded from the public-facing TypeScript documentation.
 */
import { Identity } from 'openfin/_v2/main';
import { AppName } from './directory';
import { AppIntent, Context, IntentResolution, Listener } from './main';
import { ChannelId, DefaultChannel, SystemChannel, DisplayMetadata, ChannelWindowAddedEvent, ChannelWindowRemovedEvent, ChannelChangedEvent, ChannelBase, AppChannel } from './contextChannels';
import { FDC3Error } from './errors';
/**
 * Enum containing all and only actions that the provider can accept.
 */
export declare enum APIFromClientTopic {
    OPEN = "OPEN",
    FIND_INTENT = "FIND-INTENT",
    FIND_INTENTS_BY_CONTEXT = "FIND-INTENTS-BY-CONTEXT",
    BROADCAST = "BROADCAST",
    RAISE_INTENT = "RAISE-INTENT",
    ADD_INTENT_LISTENER = "ADD-INTENT-LISTENER",
    REMOVE_INTENT_LISTENER = "REMOVE-INTENT-LISTENER",
    ADD_CONTEXT_LISTENER = "ADD-CONTEXT-LISTENER",
    REMOVE_CONTEXT_LISTENER = "REMOVE-CONTEXT-LISTENER",
    GET_SYSTEM_CHANNELS = "GET-SYSTEM-CHANNELS",
    GET_CHANNEL_BY_ID = "GET-CHANNEL-BY-ID",
    GET_CURRENT_CHANNEL = "GET-CURRENT-CHANNEL",
    GET_OR_CREATE_APP_CHANNEL = "GET-OR-CREATE-APP-CHANNEL",
    CHANNEL_GET_MEMBERS = "CHANNEL-GET-MEMBERS",
    CHANNEL_JOIN = "CHANNEL-JOIN",
    CHANNEL_BROADCAST = "CHANNEL-BROADCAST",
    CHANNEL_GET_CURRENT_CONTEXT = "CHANNEL-GET-CURRENT-CONTEXT",
    CHANNEL_ADD_CONTEXT_LISTENER = "CHANNEL-ADD-CONTEXT-LISTENER",
    CHANNEL_REMOVE_CONTEXT_LISTENER = "CHANNEL-REMOVE-CONTEXT-LISTENER",
    CHANNEL_ADD_EVENT_LISTENER = "CHANNEL-ADD-EVENT-LISTENER",
    CHANNEL_REMOVE_EVENT_LISTENER = "CHANNEL-REMOVE-EVENT-LISTENER"
}
/**
 * Enum containing all and only actions that the client can accept.
 */
export declare enum APIToClientTopic {
    RECEIVE_INTENT = "RECEIVE-INTENT",
    RECEIVE_CONTEXT = "RECEIVE-CONTEXT",
    CHANNEL_RECEIVE_CONTEXT = "CHANNEL-RECEIVE-CONTEXT"
}
export interface APIFromClient {
    [APIFromClientTopic.OPEN]: [OpenPayload, void];
    [APIFromClientTopic.FIND_INTENT]: [FindIntentPayload, AppIntent];
    [APIFromClientTopic.FIND_INTENTS_BY_CONTEXT]: [FindIntentsByContextPayload, AppIntent[]];
    [APIFromClientTopic.BROADCAST]: [BroadcastPayload, void];
    [APIFromClientTopic.RAISE_INTENT]: [RaiseIntentPayload, IntentResolution];
    [APIFromClientTopic.ADD_INTENT_LISTENER]: [AddIntentListenerPayload, void];
    [APIFromClientTopic.REMOVE_INTENT_LISTENER]: [RemoveIntentListenerPayload, void];
    [APIFromClientTopic.ADD_CONTEXT_LISTENER]: [AddContextListenerPayload, void];
    [APIFromClientTopic.REMOVE_CONTEXT_LISTENER]: [AddContextListenerPayload, void];
    [APIFromClientTopic.GET_SYSTEM_CHANNELS]: [GetSystemChannelsPayload, SystemChannelTransport[]];
    [APIFromClientTopic.GET_CHANNEL_BY_ID]: [GetChannelByIdPayload, ChannelTransport];
    [APIFromClientTopic.GET_CURRENT_CHANNEL]: [GetCurrentChannelPayload, ChannelTransport];
    [APIFromClientTopic.GET_OR_CREATE_APP_CHANNEL]: [GetOrCreateAppChannelPayload, AppChannelTransport];
    [APIFromClientTopic.CHANNEL_GET_MEMBERS]: [ChannelGetMembersPayload, Identity[]];
    [APIFromClientTopic.CHANNEL_JOIN]: [ChannelJoinPayload, void];
    [APIFromClientTopic.CHANNEL_BROADCAST]: [ChannelBroadcastPayload, void];
    [APIFromClientTopic.CHANNEL_GET_CURRENT_CONTEXT]: [ChannelGetCurrentContextPayload, Context | null];
    [APIFromClientTopic.CHANNEL_ADD_CONTEXT_LISTENER]: [ChannelAddContextListenerPayload, void];
    [APIFromClientTopic.CHANNEL_REMOVE_CONTEXT_LISTENER]: [ChannelRemoveContextListenerPayload, void];
    [APIFromClientTopic.CHANNEL_ADD_EVENT_LISTENER]: [ChannelAddEventListenerPayload, void];
    [APIFromClientTopic.CHANNEL_REMOVE_EVENT_LISTENER]: [ChannelRemoveEventListenerPayload, void];
}
export interface APIToClient {
    [APIToClientTopic.RECEIVE_CONTEXT]: [ReceiveContextPayload, void];
    [APIToClientTopic.RECEIVE_INTENT]: [ReceiveIntentPayload, void];
    [APIToClientTopic.CHANNEL_RECEIVE_CONTEXT]: [ChannelReceiveContextPayload, void];
}
/**
 * Defines all events that are fired by the service
 */
export declare type Events = MainEvents | ChannelEvents;
/**
 * Events that can be received through the top-level `addEventListener`
 */
export declare type MainEvents = ChannelChangedEvent;
/**
 * Events that can be received through a channel object
 */
export declare type ChannelEvents = ChannelWindowAddedEvent | ChannelWindowRemovedEvent;
export declare type TransportMappings<T> = T extends DefaultChannel ? ChannelTransport : T extends SystemChannel ? SystemChannelTransport : T extends AppChannel ? AppChannelTransport : T extends ChannelBase ? ChannelTransport : never;
export declare type TransportMemberMappings<T> = T extends DefaultChannel ? ChannelTransport : T extends SystemChannel ? SystemChannelTransport : T extends AppChannel ? AppChannelTransport : T extends ChannelBase ? ChannelTransport : T;
export interface ChannelTransport {
    id: ChannelId;
    type: string;
}
export interface SystemChannelTransport extends ChannelTransport {
    type: 'system';
    visualIdentity: DisplayMetadata;
}
export interface AppChannelTransport extends ChannelTransport {
    type: 'app';
    name: string;
}
export interface OpenPayload {
    name: AppName;
    context?: Context;
}
export interface FindIntentPayload {
    intent: string;
    context?: Context;
}
export interface FindIntentsByContextPayload {
    context: Context;
}
export interface BroadcastPayload {
    context: Context;
}
export interface RaiseIntentPayload {
    intent: string;
    context: Context;
    target?: string;
}
export interface GetSystemChannelsPayload {
}
export interface GetChannelByIdPayload {
    id: ChannelId;
}
export interface GetCurrentChannelPayload {
    identity?: Identity;
}
export interface GetOrCreateAppChannelPayload {
    name: string;
}
export interface ChannelGetMembersPayload {
    id: ChannelId;
}
export interface ChannelJoinPayload {
    id: ChannelId;
    identity?: Identity;
}
export interface ChannelBroadcastPayload {
    id: ChannelId;
    context: Context;
}
export interface ChannelGetCurrentContextPayload {
    id: ChannelId;
}
export interface ChannelAddContextListenerPayload {
    id: ChannelId;
}
export interface ChannelRemoveContextListenerPayload {
    id: ChannelId;
}
export interface ChannelAddEventListenerPayload {
    id: ChannelId;
    eventType: ChannelEvents['type'];
}
export interface ChannelRemoveEventListenerPayload {
    id: ChannelId;
    eventType: ChannelEvents['type'];
}
export interface AddIntentListenerPayload {
    intent: string;
}
export interface RemoveIntentListenerPayload {
    intent: string;
}
export interface AddContextListenerPayload {
}
export interface RemoveContextListenerPayload {
}
export interface ReceiveContextPayload {
    context: Context;
}
export interface ReceiveIntentPayload {
    intent: string;
    context: Context;
}
export interface ChannelReceiveContextPayload {
    channel: ChannelId;
    context: Context;
}
/**
 * Invokes an array of listeners with a given context, allowing us to apply consistent error handling. Will throw an error if > 0 listeners are given, and all
 * fail. Otherwise the first *defined* value returned is returned, or undefined is no defined values are returned.
 *
 * @param listeners An array of listeners to invoke
 * @param context The context to invoke the listeners with
 * @param singleFailureHandler A function that will be called each time a listener throws an exception
 * @param createAllFailuresError A function that will be called if all (and more than one) listeners fail.
 * Should return an error, which `invokeListeners` will then throw.
 */
export declare function invokeListeners<T = unknown>(listeners: Listener[], context: Context, singleFailureHandler: (e: any) => void, createAllFailuresError: () => Error): Promise<T>;
/**
 * If error is a type we explicitly handle (e.g., `TypeError`, `FDC3Error`) so it can be identified as the correct type at the client's end. Otherwise return
 * the error itself.
 * @param error The error
 */
export declare function serializeError(error: Error | FDC3Error): Error;
/**
 * Check if the error was a serialized error, and if so reconstruct as the correct type. Otherwise return the error itself.
 * @param error The error
 */
export declare function deserializeError(error: Error): Error | FDC3Error;
export declare function setServiceChannel(channelName: string): void;
export declare function getServiceChannel(): string;
export declare function setServiceIdentity(uuid: string): void;
export declare function getServiceIdentity(): Identity;
