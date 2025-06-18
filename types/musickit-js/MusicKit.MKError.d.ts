declare namespace MusicKit {
    /**
     * A class that describes an error that may occur when using MusicKit JS,
     * including server and local errors.
     */
    class MKError extends Error {
        /**
         * The error code for this error.
         */
        errorCode: string;
        /**
         * A description of the error that occurred.
         */
        description?: string | undefined;
        /**
         * Error code indicating that you don't have permission to access the
         * endpoint, media item, or content.
         */
        static ACCESS_DENIED: string;
        /**
         * Error code indicating the authorization was rejected.
         */
        static AUTHORIZATION_ERROR: string;
        /**
         * Error code indicating a MusicKit JS configuration error.
         */
        static CONFIGURATION_ERROR: string;
        /**
         * Error code indicating you don't have permission to access this content,
         * due to content restrictions.
         */
        static CONTENT_RESTRICTED: string;
        /**
         * Error code indicating the parameters provided for this method are invalid.
         */
        static INVALID_ARGUMENTS: string;
        /**
         * Error code indicating that the VM certificate could not be applied.
         */
        static MEDIA_CERTIFICATE: string;
        /**
         * Error code indicating that the media item descriptor is invalid.
         */
        static MEDIA_DESCRIPTOR: string;
        /**
         * Error code indicating that a DRM key could not be generated.
         */
        static MEDIA_KEY: string;
        /**
         * Error code indicating a DRM license error.
         */
        static MEDIA_LICENSE: string;
        /**
         * Error code indicating a media playback error.
         */
        static MEDIA_PLAYBACK: string;
        /**
         * Error code indicating that an EME session could not be created.
         */
        static MEDIA_SESSION: string;
        /**
         * Error code indicating a network error.
         */
        static NETWORK_ERROR: string;
        /**
         * Error code indicating that the resource was not found.
         */
        static NOT_FOUND: string;
        /**
         * Error code indicating that you have exceeded the Apple Music API quota.
         */
        static QUOTA_EXCEEDED: string;
        static SERVER_ERROR: string;
        /**
         * Error code indicating the MusicKit service could not be reached.
         */
        static SERVICE_UNAVAILABLE: string;
        /**
         * Error code indicating that the user's Apple Music subscription has expired.
         */
        static SUBSCRIPTION_ERROR: string;
        /**
         * Error code indicating an unknown error.
         */
        static UNKNOWN_ERROR: string;
        /**
         * Error code indicating that the operation is not supported.
         */
        static UNSUPPORTED_ERROR: string;
    }
}
