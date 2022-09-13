declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Root object for fetching and creating media objects. */
        interface AdMedia {
            /** Returns a selector for all media in the account. */
            media(): MediaSelector;
            /** Returns a builder to upload an image. */
            newImageBuilder(): ImageBuilder;
            /** Returns a builder to upload a media bundle. */
            newMediaBundleBuilder(): MediaBundleBuilder;
            /** Returns a builder to upload a video. */
            newVideoBuilder(): VideoBuilder;
        }

        /** Pixel dimensions of a media object. */
        interface Dimensions {
            /** Returns the height. */
            getHeight(): number;
            /** Returns the width. */
            getWidth(): number;
        }

        /**
         * Builder for an image under construction.
         *
         * Typical usage:
         *
         *  var imageUrl = "http://www.example.com/example.png";
         *  var imageBlob = UrlFetchApp.fetch(imageUrl).getBlob();
         *  var mediaOperation = AdsApp.adMedia().newImageBuilder()
         *     .withName("name")
         *     .withData(imageBlob)
         *     .build();
         *  var image = mediaOperation.getResult();
         */
        interface ImageBuilder extends Base.Builder<MediaOperation> {
            /** Sets new image's data to the specified value. */
            withData(data: GoogleAppsScript.Base.Blob): this;
            /** Sets new image's name to the specified value. */
            withName(name: string): this;
        }

        /** A Google Ads media object. */
        interface Media {
            /** Returns a MediaDimensions instance for the media object if it is an image or video. */
            getDimensions(): MediaDimensions;
            /** Returns the type of this entity as a String, in this case, "Media". */
            getEntityType(): string;
            /** Returns the size of the media file in bytes. */
            getFileSize(): number;
            /** Returns the ID of the media object. */
            getId(): number;
            /** Returns a MIME type identifier for the media object. */
            getMimeType(): string;
            /** Returns the name of the media object, or null if the media was created without a name. */
            getName(): string;
            /** Returns the media object's reference ID key. */
            getReferenceId(): string;
            /** Returns the URL where the original media was downloaded from, or null if the media was not obtained via download. */
            getSourceUrl(): string;
            /** Returns the media object's type. */
            getType(): string;
            /** Returns a MediaUrls instance for the media object if it is an image. */
            getUrls(): MediaUrls;
            /** Returns the YouTube video ID if this media is a YouTube video, or null otherwise. */
            getYouTubeVideoId(): string | null;
        }

        /**
         * Builder for a media bundle under construction.
         *
         * Typical usage:
         *
         *  var mediaBundleUrl = "http://www.example.com/example.zip";
         *  var mediaBundleBlob = UrlFetchApp.fetch(mediaBundleUrl).getBlob();
         *  var mediaOperation = AdsApp.adMedia().newMediaBundleBuilder()
         *     .withName("name")
         *     .withData(mediaBundleBlob)
         *     .build();
         *
         *  var mediaBundle = mediaOperation.getResult();
         */
        interface MediaBundleBuilder extends Base.Builder<MediaOperation> {
            /** Sets new media bundle's data to the specified value. */
            withData(data: GoogleAppsScript.Base.Blob): this;
            /** Sets new media bundle's name to the specified value. */
            withName(name: string): this;
        }

        /** Dimensions for different sizes of a media object. */
        interface MediaDimensions {
            /** Returns dimensions for the full size of the media object. */
            getFullDimensions(): Dimensions;
            /** Returns dimensions for the preview size of the media object. */
            getPreviewDimensions(): Dimensions;
            /** Returns dimensions for the shrunken size of the media object. */
            getShrunkenDimensions(): Dimensions;
            /** Returns dimensions for the video thumbnail size of the media object. */
            getVideoThumbnailDimensions(): Dimensions;
        }

        /**
         * An iterator of media.
         *
         * Typical usage:
         *
         *      while (mediaIterator.hasNext()) {
         *        var media = mediaIterator.next();
         *      }
         */
        interface MediaIterator extends Base.Iterator<Media> {}

        /** An operation representing creation of a new media. */
        interface MediaOperation extends Base.Operation<Media> {}

        /**
         * Fetches media in an account.
         *
         * Typical usage:
         *
         *      var mediaIterator = AdsApp.adMedia().media()
         *        .withCondition("Type = IMAGE")
         *        .get();
         */
        interface MediaSelector
            extends Base.Selector<MediaIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /** URLs for different sizes of a media object. */
        interface MediaUrls {
            /** Returns the URL for the full size of the media object. */
            getFullUrl(): string;
            /** Returns the URL for the preview size of the media object. */
            getPreviewUrl(): string;
            /** Returns the URL for the shrunken size of the media object. */
            getShrunkenUrl(): string;
            /** Returns the URL for the video thumbnail size of the media object. */
            getVideoThumbnailUrl(): string;
        }

        /**
         * Builder for a YouTube video under construction.
         *
         * Typical usage:
         *
         *      var youTubeVideoId = "123ABCabc-_";
         *      var mediaOperation = AdsApp.adMedia().newVideoBuilder()
         *         .withYouTubeVideoId(youTubeVideoId)
         *         .build();
         *
         *      var video = mediaOperation.getResult();
         */
        interface VideoBuilder extends Base.Builder<MediaOperation> {
            /** Sets YouTube video ID. */
            withYouTubeVideoId(youTubeVideoId: string): VideoBuilder;
        }
    }
}
