// Type definitions for chromecast-caf-receiver 3.x
// Project: https://github.com/googlecast
// Definitions by: Craig Bruce <https://github.com/craigrbruce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference path="./cast.framework.d.ts" />
/// <reference path="./cast.framework.breaks.d.ts" />
/// <reference path="./cast.framework.events.d.ts" />
/// <reference path="./cast.framework.messages.d.ts" />
/// <reference path="./cast.framework.system.d.ts" />
/// <reference path="./cast.framework.ui.d.ts" />

import framework from './cast.framework';
import breaks from './cast.framework.breaks';
import events from './cast.framework.events';
import messages from './cast.framework.messages';
import ui from './cast.framework.ui';

export interface CastReceiverFrameworkSDK {
    framework: {
        AudioTracksManager: framework.AudioTracksManager;
        CastReceiverContext: framework.CastReceiverContext;
        CastReceiverOptions: framework.CastReceiverOptions;
        NetworkRequestInfo: framework.NetworkRequestInfo;
        PlaybackConfig: framework.PlaybackConfig;
        PlayerManager: framework.PlayerManager;
        QueueBase: framework.QueueBase;
        QueueManager: framework.QueueManager;
        TextTracksManager: framework.TextTracksManager;
        ContentProtection: framework.ContentProtection;
        LoggerLevel: framework.LoggerLevel;
        VERSION: string;
        breaks: {
            BreakClipLoadInterceptorContext: breaks.BreakClipLoadInterceptorContext;
            BreakSeekData: breaks.BreakSeekData;
            BreakManager: breaks.BreakManager;
        };
        events: {
            BitrateChangedEvent: events.BitrateChangedEvent;
            BreaksEvent: events.BreaksEvent;
            BufferingEvent: events.BufferingEvent;
            CacheItemEvent: events.CacheItemEvent;
            CacheLoadedEvent: events.CacheLoadedEvent;
            ClipEndedEvent: events.ClipEndedEvent;
            EmsgEvent: events.EmsgEvent;
            ErrorEvent: events.ErrorEvent;
            Event: events.Event;
            Id3Event: events.Id3Event;
            // LiveStatusEvent: events.LiveStatusEvent;
            LoadEvent: events.LoadEvent;
            MediaElementEvent: events.MediaElementEvent;
            MediaFinishedEvent: events.MediaFinishedEvent;
            //  MediaInformationChangedEvent: events.MediaInformationChangedEvent;
            MediaPauseEvent: events.MediaPauseEvent;
            MediaStatusEvent: events.MediaStatusEvent;
            RequestEvent: events.RequestEvent;
            SegmentDownloadedEvent: events.SegmentDownloadedEvent;
            DetailedErrorCode: events.DetailedErrorCode;
            EndedReason: events.EndedReason;
            EventType: events.EventType;
        };
        messages: {
            // AudiobookChapterMediaMetadata: messages.AudiobookChapterMediaMetadata;
            // AudiobookContainerMetadata: messages.AudiobookContainerMetadata;
            Break: messages.Break;
            BreakClip: messages.BreakClip;
            BreakStatus: messages.BreakStatus;
            // CloudMediaStatus: messages.CloudMediaStatus;
            // ContainerMetadata: messages.ContainerMetadata;
            CustomCommandRequestData: messages.CustomCommandRequestData;
            DisplayStatusRequestData: messages.DisplayStatusRequestData;
            EditAudioTracksRequestData: messages.EditAudioTracksRequestData;
            EditTracksInfoRequestData: messages.EditTracksInfoRequestData;
            ErrorData: messages.ErrorData;
            ExtendedMediaStatus: messages.ExtendedMediaStatus;
            FetchItemsRequestData: messages.FetchItemsRequestData;
            FocusStateRequestData: messages.FocusStateRequestData;
            GenericMediaMetadata: messages.GenericMediaMetadata;
            GetItemsInfoRequestData: messages.GetItemsInfoRequestData;
            GetStatusRequestData: messages.GetStatusRequestData;
            Image: messages.Image;
            ItemsInfo: messages.ItemsInfo;
            LiveSeekableRange: messages.LiveSeekableRange;
            LoadByEntityRequestData: messages.LoadByEntityRequestData;
            LoadRequestData: messages.LoadRequestData;
            MediaInformation: messages.MediaInformation;
            MediaMetadata: messages.MediaMetadata;
            MediaStatus: messages.MediaStatus;
            MovieMediaMetadata: messages.MovieMediaMetadata;
            MusicTrackMediaMetadata: messages.MusicTrackMediaMetadata;
            PhotoMediaMetadata: messages.PhotoMediaMetadata;
            PlayStringRequestData: messages.PlayStringRequestData;
            PrecacheRequestData: messages.PrecacheRequestData;
            PreloadRequestData: messages.PreloadRequestData;
            QueueChange: messages.QueueChange;
            QueueData: messages.QueueData;
            QueueIds: messages.QueueIds;
            QueueInsertRequestData: messages.QueueInsertRequestData;
            QueueItem: messages.QueueItem;
            QueueLoadRequestData: messages.QueueLoadRequestData;
            QueueRemoveRequestData: messages.QueueRemoveRequestData;
            QueueReorderRequestData: messages.QueueReorderRequestData;
            QueueUpdateRequestData: messages.QueueUpdateRequestData;
            RefreshCredentialsRequestData: messages.RefreshCredentialsRequestData;
            RequestData: messages.RequestData;
            SeekableRange: messages.SeekableRange;
            SeekRequestData: messages.SeekRequestData;
            SetCredentialsRequestData: messages.SetCredentialsRequestData;
            SetPlaybackRateRequestData: messages.SetPlaybackRateRequestData;
            TextTrackStyle: messages.TextTrackStyle;
            Track: messages.Track;
            TvShowMediaMetadata: messages.TvShowMediaMetadata;
            UserActionRequestData: messages.UserActionRequestData;
            // UserActionState: messages.UserActionState;
            VastAdsRequest: messages.VastAdsRequest;
            VideoInformation: messages.VideoInformation;
            Volume: messages.Volume;
            VolumeRequestData: messages.VolumeRequestData;
            // CaptionMimeType: messages.CaptionMimeType;
            Command: messages.Command;
            // ContainerType: messages.ContainerType;
            ErrorReason: messages.ErrorReason;
            ErrorType: messages.ErrorType;
            ExtendedPlayerState: messages.ExtendedPlayerState;
            FocusState: messages.FocusState;
            GetStatusOptions: messages.GetStatusOptions;
            HdrType: messages.HdrType;
            HlsSegmentFormat: messages.HlsSegmentFormat;
            // HlsVideoSegmentFormat: messages.HlsVideoSegmentFormat;
            IdleReason: messages.IdleReason;
            MessageType: messages.MessageType;
            MetadataType: messages.MetadataType;
            PlayerState: messages.PlayerState;
            PlayStringId: messages.PlayStringId;
            QueueChangeType: messages.QueueChangeType;
            QueueType: messages.QueueType;
            RepeatMode: messages.RepeatMode;
            SeekResumeState: messages.SeekResumeState;
            StreamingProtocolType: messages.StreamingProtocolType;
            StreamType: messages.StreamType;
            TextTrackEdgeType: messages.TextTrackEdgeType;
            TextTrackFontGenericFamily: messages.TextTrackFontGenericFamily;
            TextTrackFontStyle: messages.TextTrackFontStyle;
            TextTrackType: messages.TextTrackType;
            TextTrackWindowType: messages.TextTrackWindowType;
            TrackType: messages.TrackType;
            UserAction: messages.UserAction;
            UserActionContext: messages.UserActionContext;
        }
    };
}

declare global {
    const cast: CastReceiverFrameworkSDK;
}

export type EventHandler = (event: events.Event) => void;
export type PlayerDataChangedEventHandler = (
    event: ui.PlayerDataChangedEvent
) => void;
export type RequestHandler = (request: framework.NetworkRequestInfo) => void;
export type BinaryHandler = (data: Uint8Array) => Uint8Array;
