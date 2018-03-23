// Type definitions for chromecast-caf-receiver 3.x
// Project: https://developers.google.com/cast/docs/reference/caf_receiver/
// Definitions by: Craig Bruce https://github.com/craigrbruce
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./index.d.ts" />
/// <reference path="./cast.framework.d.ts" />
/// <reference path="./cast.framework.breaks.d.ts" />
/// <reference path="./cast.framework.events.d.ts" />
/// <reference path="./cast.framework.messages.d.ts" />
/// <reference path="./cast.framework.ui.d.ts" />

import { EventType } from './cast.framework.events';
export = cast.framework.system;

declare namespace cast.framework.system {
  export type SystemState =
    | 'NOT_STARTED'
    | 'STARTING_IN_BACKGROUND'
    | 'STARTING'
    | 'READY'
    | 'STOPPING_IN_BACKGROUND'
    | 'STOPPING';

  export type StandbyState = 'STANDBY' | 'NOT_STANDBY' | 'UNKNOWN';

  export type DisconnectReason = 'REQUESTED_BY_SENDER' | 'ERROR' | 'UNKNOWN';

  /**
   * Event dispatched by @see{@link CastReceiverManager} when the visibility of the application changes (HDMI input change; TV is turned off).
   */
  export class VisibilityChangedEvent {
    constructor(isVisible: boolean);

    /**
     * Whether the Cast device is the active input or not.
     */
    isVisible: boolean;
  }

  /**
   * Represents the system volume data.
   */
  export interface SystemVolumeData {
    /**
     * The level (from 0.0 to 1.0) of the system volume.
     */
    level: number;

    /**
     * Whether the system volume is muted or not.
     */
    muted: boolean;
  }
  /**
   * Event dispatched by @see{CastReceiverManager} when the system volume changes.
   */
  export class SystemVolumeChangedEvent extends Event {
    constructor(volume: SystemVolumeData);

    /**
     *  The system volume data
     */
    data: SystemVolumeData;
  }
  /**
   * Event dispatched by @see{@link CastReceiverManager} when the TV enters/leaves the standby state.
   */
  export class StandbyChangedEvent {
    constructor(isStandby: boolean);

    /**
     *
     */
    isStandby: boolean;
  }
  /**
   * Whether the TV is in standby or not.
   */
  export interface ShutdownEvent extends Event {}

  /**
   * Event dispatched by @see{@link CastReceiverManager} when a sender is disconnected.
   */
  export class SenderDisconnectedEvent extends Event {
    constructor(senderId: string, userAgent: string);
    /**
     * The ID of the sender connected.
     */
    senderId: string;

    /**
     * The user agent of the sender.
     */
    userAgent: string;

    /**
     * The reason the sender was disconnected.
     */
    reason?: DisconnectReason;
  }

  /**
   * Event dispatched by @see{@link CastReceiverManager} when a sender is connected.
   */
  export class SenderConnectedEvent extends Event {
    constructor(senderId: string, userAgent: string);
    /**
     * The ID of the sender connected.
     */
    senderId: string;

    /**
     * The user agent of the sender.
     */
    userAgent: string;
  }

  /**
   * Represents the data of a connected sender device.
   */
  export interface Sender {
    /**
     * The sender Id.
     */
    id: string;

    /**
     * Indicate the sender supports large messages (>64KB).
     */
    largeMessageSupported?: boolean;

    /**
     * The userAgent of the sender.
     */
    userAgent?: string;
  }

  /**
   * Event dispatched by CastReceiverManager when the system is ready.
   */
  export class ReadyEvent {
    constructor(applicationData: ApplicationData);

    /**
     * The application data
     */
    data: ApplicationData;
  }

  /**
   * Event dispatched by @see{@link CastReceiverManager} when the system needs to update the restriction on maximum video resolution.
   */
  export class MaxVideoResolutionChangedEvent extends Event {
    constructor(height: number);

    /**
     * Maximum video resolution requested by the system. The value of 0 means there is no restriction.
     */
    height: number;
  }
  /** Event dispatched by @see{@link CastReceiverManager} when the systems starts to create feedback report. */
  export interface FeedbackStartedEvent extends Event {}
  /** Event dispatched by @see{@link CastReceiverContext} which contains system information. */
  export class Event {
    constructor(type: EventType, data?: any);
  }

  /** Represents the data of the launched application. */
  export interface ApplicationData {
    id(): string;
    launchingSenderId(): string;
    name(): string;
    namespaces(): string[];
    sessionId(): number;
  }
}
