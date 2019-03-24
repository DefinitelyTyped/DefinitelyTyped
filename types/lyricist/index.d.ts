// Type definitions for lyricist 2.2.2
// Project: https://github.com/scf4/lyricist, https://www.npmjs.com/package/lyricist
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/
// TypeScript Version: 2.7

declare module 'lyricist';

export default class Lyricist {
  constructor(accessToken: string);

  album(id: number, opts?: { fetchTracklist?: boolean, textFormat?: LyricistTextFormat }): Promise<IAlbum>;

  artist(id: number, opts: { textFormat?: LyricistTextFormat }): Promise<IArtist>;

  artistByName(name: string, opts: { textFormat?: LyricistTextFormat }): Promise<IArtist>;

  search(query: string): Promise<ISearchResult[]>;

  song(id: number, opts?: { fetchLyrics?: boolean, textFormat?: LyricistTextFormat }): Promise<ISong>;

  songsByArtist(id: number, opts?: { page?: number, perPage?: number, sort?: 'asc' | 'desc' }): Promise<ISongByArtist[]>;

}

export enum LyricistTextFormat {
  DOM = 'dom',
  PLAIN = 'plain',
  HTML = 'html',
}

export interface IDescription {
  [LyricistTextFormat.DOM]?: object;
  [LyricistTextFormat.PLAIN]?: string;
  [LyricistTextFormat.HTML]?: string;
}


// Song ============================================================================================
export interface ISong {
  annotation_count: number;
  api_path: string;
  apple_music_id?: any;
  apple_music_player_url: string;
  description: IDescription;
  embed_content: string;
  featured_video: boolean;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics: string;
  lyrics_owner_id: number;
  lyrics_state: string;
  path: string;
  pyongs_count?: any;
  recording_location?: any;
  release_date: string;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: {
    accepted_annotations: number;
    contributors: number;
    hot: boolean;
    iq_earners: number;
    transcribers: number;
    unreviewed_annotations: number;
    verified_annotations: number;
    pageviews: number;
  };
  title: string;
  title_with_featured: string;
  url: string;
  current_user_metadata: {
    permissions: string[];
    excluded_permissions: string[];
    interactions: {
      pyong: boolean;
      following: boolean;
    };
    relationships: any;
    iq_by_action: any;
  };
  album?: any;
  custom_performances: any[];
  description_annotation: IDescriptionAnnotation;
  featured_artists: any[];
  lyrics_marked_complete_by?: any;
  media: IMedia[];
  primary_artist: IArtistBrief;
  producer_artists: IArtistBrief[];
  song_relationships: Array<{
    type: string;
    songs: any[];
  }>;
  verified_annotations_by: any[];
  verified_contributors: any[];
  verified_lyrics_by: any[];
  writer_artists: IArtistBrief[];
}

export interface IClientTimestamps {
  updated_by_human_at: number;
  lyrics_updated_at: number;
}

export interface IAvatarConfig {
  url: string;
  bounding_box: {
    width: number;
    height: number;
  };
}

export interface IAvatar {
  tiny: IAvatarConfig;
  thumb: IAvatarConfig;
  small: IAvatarConfig;
  medium: IAvatarConfig;
}

export interface IUser {
  api_path: string;
  avatar: IAvatar;
  header_image_url: string;
  human_readable_role_for_display: string;
  id: number;
  iq: number;
  login: string;
  name: string;
  role_for_display: string;
  url: string;
  current_user_metadata: {
    permissions: any[];
    excluded_permissions: string[];
    interactions: {
      following: boolean;
    };
    features: any[];
  };
}

export interface IAuthor {
  attribution: number;
  pinned_role?: any;
  user: IUser;
}

export interface IAnnotation {
  api_path: string;
  body: IDescription;
  comment_count: number;
  community: boolean;
  custom_preview?: any;
  has_voters: boolean;
  id: number;
  pinned: boolean;
  share_url: string;
  source?: any;
  state: string;
  url: string;
  verified: boolean;
  votes_total: number;
  current_user_metadata: {
    permissions: string[];
    excluded_permissions: string[];
    interactions: {
      cosign: boolean;
      pyong: boolean;
      vote?: any;
    };
    iq_by_action: any;
  };
  authors: IAuthor[];
  cosigned_by: any[];
  rejection_comment?: any;
  verified_by?: any;
}

export interface IDescriptionAnnotation {
  _type: string;
  annotator_id: number;
  annotator_login: string;
  api_path: string;
  classification: string;
  fragment: string;
  id: number;
  is_description: boolean;
  path: string;
  range: {
    content: string;
  };
  song_id: number;
  url: string;
  verified_annotator_ids: any[];
  annotatable: {
    api_path: string;
    client_timestamps: IClientTimestamps;
    context: string;
    id: number;
    image_url: string;
    link_title: string;
    title: string;
    type: string;
    url: string;
  };
  annotations: IAnnotation[];
}

export interface IMedia {
  provider: string;
  start: number;
  type: string;
  url: string;
}

export interface IArtistBrief {
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  url: string;
}

// Artist =========================================================================================
export interface IArtist {
  alternate_names: any[];
  api_path: string;
  description: IDescription;
  facebook_name: string;
  followers_count: number;
  header_image_url: string;
  id: number;
  image_url: string;
  instagram_name: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  translation_artist: boolean;
  twitter_name: string;
  url: string;
  current_user_metadata: {
    permissions: string[];
    excluded_permissions: string[];
    interactions: {
      following: boolean;
    };
  };
  description_annotation: IDescriptionAnnotation;
  user?: any;
}

// Search ================================================
export interface ISearchResult {
  annotation_count: number;
  api_path: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: string;
  path: string;
  pyongs_count?: any;
  song_art_image_thumbnail_url: string;
  stats: {
    hot: boolean;
    unreviewed_annotations: number;
    pageviews: number;
  };
  title: string;
  title_with_featured: string;
  url: string;
  primary_artist: IArtistBrief;
}

// Song by Artist =========================================
export interface ISongByArtist {
  annotation_count: number;
  api_path: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: string;
  path: string;
  pyongs_count: number;
  song_art_image_thumbnail_url: string;
  stats: {
    hot: boolean;
    unreviewed_annotations: number;
    pageviews: number;
  };
  title: string;
  title_with_featured: string;
  url: string;
  primary_artist: IArtistBrief;
}

// Album =================================================
export interface IAlbum {
  api_path: string;
  comment_count: number;
  cover_art_url: string;
  custom_header_image_url?: any;
  full_title: string;
  header_image_url: string;
  id: number;
  lock_state: string;
  name: string;
  pyongs_count: number;
  release_date?: any;
  release_date_components?: any;
  url: string;
  current_user_metadata: {
    permissions: string[];
    excluded_permissions: string[];
    interactions: {
      pyong: boolean;
    };
  };
  song_pageviews: number;
  artist: IArtistBrief;
  cover_arts: any[];
  description_annotation: IDescriptionAnnotation;
  performance_groups: any[];
  song_performances: any[];
}

