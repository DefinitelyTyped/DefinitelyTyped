// Type definitions for non-npm package WordPress Admin Dashboarsd - WP-Admin 5.8
// Project: https://github.com/wordpress/wordpress
// Definitions by: Sibin Grasic <https://github.com/oblakstudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="backbone" />
/// <reference types="lodash" />

import { Attachment, Attachments, PostImage, Query } from './components/media-models';
import { Frame, FrameOptions, MediaFrame, MediaFrameSelect, Region, State, StateMachine, View } from './components/media-views';
import { WpBackbone } from './components/wp-backbone';

export interface Media {
  (attributes: FrameOptions): MediaFrameSelect;
  (attributes: FrameOptions & { frame: 'post' }): any;
  controller: {
    Region: Region;
    StateMachine: StateMachine;
    State: State;
  };
  model: {
    Attachment: Attachment;
    Attachments: Attachments;
    PostImage: PostImage;
    Query: Query;
    Selection: Selection;
  };
  view: {
    Frame: Frame;
    MediaFrame: MediaFrame;
  };
  View: View;
  frames: Record<string, unknown>;
}

export interface WpAdmin {
  Backbone: WpBackbone;
  media: Media;
}

declare global {
  interface Window {
    wp: WpAdmin;
  }
}
