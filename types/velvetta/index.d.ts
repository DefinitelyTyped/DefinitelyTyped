/// <reference types="node" />

export interface Webhooks {
    /**
     * The URL of this webhook
     */
    webhook_url: string;
    /**
     * The id of the channel this webhook will sent in
     */
    channel_id: string;
    /**
     * The id of the server this webhook will sent in
     */
    server_id: string;
}


export interface Videos {
    /**
     * Title for the video
     */
    title: string;
    /**
     * Video short description
     */
    description?: string | undefined;
    /**
     * URL location for the video
     */
    url: URL;
    /**
     * Video thumbnail in 'webp' format
     * @link https://es.wikipedia.org/wiki/WebP
     */
    thumbnail?: string;
    /**
     * Milliseconds video duration
     */
    duration: number;
    /**
     * Video tags for the video. Max length 5 tags
     */
    tags: string[];
    /**
     * <undocumented>
     */
    files: { high?: string };
}

interface Girls {
    /**
     * Girl’s name
     */
    name: string;
    /**
     * Girl’s avatar url
     */
    avatar_url: string;
}

interface Tags {
    /**
     * Tag ID
     */
    id: string;
    /**
     * Tag’s name
     */
    name: string;
}

interface Servers {
    /**
     * Server ID
     */
    server_id: string;
}

interface XVideosVideo {
    /**
     * The URL where the video can be accessed.
     */
    url: string;
    /**
     * The path to the video file.
     */
    path: string;
    /**
     * The title of the video.
     */
    title: string;
    /**
     * The duration of the video, typically formatted as a string (e.g., "5:30").
     */
    duration: string;
    /**
     * <undocument>
     */
    profile: {
      name: string;
      url: string;
    };
    /**
     * The number of views the video has received, formatted as a string
     */
    views: string;
}
  

interface XVideosPagination {
    /**
     * The current page number.
     */
    page: number;
    /**
     * An array of page numbers that are available.
     */
    pages: number[];
    /**
     * The last page number.
     */
    last_page: number;
    /**
     * Indicates if there is a next page available.
     */
    has_next: boolean;
    /**
     * The page number of the next page, or null if there is no next page.
     */
    next: number | null;
    /**
     * Indicates if there is a previous page available.
     */
    has_previous: boolean;
    /**
     * The page number of the previous page, or null if there is no previous page.
     */
    previous: number | null;
    /**
     * The total number of results available.
     */
    results_count: number;
}
  
interface XVideosVideoDetails {
    /**
     * The title of the video, or undefined if not available
     */
    title: string | undefined;
    /**
     * The URL of the video.
     */
    url: URL;
    /**
     * The duration of the video in milliseconds
     */
    duration: number | undefined;
    /**
     * A description of the video
     */
    description: string | undefined;
    /**
     * The URL of the thumbnail image for the video
     */
    thumbnail?: string | undefined;
    /**
     * The number of views the video has received
     */
    views: number;
    /**
     * The type or genre of the video
     */
    type: string;
    /**
     * Information about the main uploader of the video.
     */
    mainUploader: XVideosMainUploader;
    /**
     * An array of models featured in the video.
     */
    models: XVideosModel[];
    /**
     * An array of tags associated with the video.
     */
    tags: string[];
    /**
     * The percentage of likes the video has received, formatted as a string.
     */
    likePercentage: string | undefined;
    /**
     * The percentage of dislikes the video has received, formatted as a string.
     */
    dislikePercentage: string | undefined;
    /**
     * The number of comments on the video.
     */
    commentsCount: number | undefined;
    /**
     * File URLs for different qualities and types of the video.
     */
    files: XVideosFiles;
}

interface XVideosFiles {
    /**
     * The URL to the low-quality video file.
     */
    low: string | undefined;
    /**
     * The URL to the high-quality video file.
     */
    high: string | undefined;
    /**
     * The URL to the HLS stream for the video.
     */
    HLS: string | undefined;
    /**
     * The URL to the standard thumbnail image.
     */
    thumb: string | undefined;
    /**
     * The URL to the 16:9 aspect ratio thumbnail image.
     */
    thumb69: string | undefined;
    /**
     * The URL to the slideshow thumbnail image.
     */
    thumbSlide: string | undefined;
    /**
     * The URL to the larger slideshow thumbnail image.
     */
    thumbSlideBig: string | undefined;
}
  
  
interface XVideosMainUploader {
    /**
     * The name of the uploader.
     */
    name: string;
    /**
     * The URL to the uploader's profile page.
     */
    profileUrl: string;
}
  
interface XVideosModel extends XVideosMainUploader {
    /**
     * A unique identifier for the model.
     */
    id: string;
}
  