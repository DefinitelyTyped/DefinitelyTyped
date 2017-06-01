declare module soundcloud {
  interface BaseResource {
    id: number;
    permalink: string;
    permalink_url: string;
    uri: string;
    kind:string;
  }

  interface MiniUser extends BaseResource {
    id: number;
    username: string;
    avatar_url?: string;
  }

  interface User extends MiniUser {
    country?: string;
    full_name: string;
    city?: string;
    follower_count: number;
    description?: string;
  }

  interface Track extends BaseResource {
    created_at: string;
    user_id: number;
    title: string;
    artwork_url?: string;
    duration: number;
    genre?: string;
    label_id?: number;
    label_name?: string;
    release: number;
    release_day: number;
    release_month: number;
    release_year: number;
    streamable: boolean;
    downloadable: boolean;
    stream_url?: string;
    download_count: number;
    playback_count: number;
    favoritings_count: number;
    description?: string;
  }

  interface Playlist extends BaseResource {
    title: string;
  }

  interface Resource extends User, Track {
  }

  interface SearchResponse {
    collection: Array<Resource>
  }
}
