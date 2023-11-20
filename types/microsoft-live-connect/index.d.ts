/// <reference types="winjs" />
/// <reference types="winrt" />

declare namespace Microsoft.Live {
    // #region REST Object Information

    /**
     * Sub object of REST objects that contains information about a user.
     */
    interface IUserInfo {
        /**
         * The name of the user.
         */
        name: string;
        /**
         * The Live ID of the user.
         */
        id: string;
    }

    /**
     * Sub object of REST objects that contains information about who the
     * item is shared with.
     */
    interface ISharedWith {
        /**
         * A localized string that contains info about who can access the
         * item. The options are:
         * - People I selected
         * - Just me
         * - Everyone (public)
         * - Friends
         * - My friends and their friends
         * - People with a link
         * The default is Just me.
         */
        access: string;
    }

    /**
     * Convenience interface for when you have a bunch of objects of different
     * types in a single collection. You discriminate between them using their
     * 'type' field.
     */
    interface IObject {
        /**
         * The object's type.
         */
        type: string;
    }

    /**
     * Contains a collection of one type of object.
     */
    interface IObjectCollection<T> {
        /**
         * An array container for objects when a collection of objects is
         * returned.
         */
        data: T[];
    }

    /**
     * The Album object contains info about a user's albums in Microsoft
     * SkyDrive. Albums are stored at the root level of a user's SkyDrive
     * directory, and can contain combinations of photos, videos, audio, files,
     * and folders. The Live Connect REST API supports reading Album objects.
     * Use the wl.photos scope to read a user's Album objects. Use the
     * wl.skydrive scope to read a user's files. Use the wl.contacts_photos
     * scope to read any albums, photos, videos, and audio that other users have
     * shared with the user.
     */
    interface IAlbum {
        /**
         * The Album object's ID.
         */
        id: string;
        /**
         * Info about the user who authored the album.
         */
        from: IUserInfo;
        /**
         * The name of the album.
         */
        name: string;
        /**
         * A description of the album, or null if no description is specified.
         */
        description: string;
        /**
         * The resource ID of the parent.
         */
        parent_id: string;
        /**
         * The URL to upload items to the album, hosted in SkyDrive. Requires
         * the wl.skydrive scope.
         */
        upload_location: string;
        /**
         * A value that indicates whether this album can be embedded. If this
         * album can be embedded, this value is true; otherwise, it is false.
         */
        is_embeddable: boolean;
        /**
         * The total number of items in the album.
         */
        count: number;
        /**
         * A URL of the album, hosted in SkyDrive.
         */
        link: string;
        /**
         * The type of object; in this case, "album".
         */
        type: string;
        /**
         * The object that contains permissions info for the album. Requires the
         * wl.skydrive scope.
         */
        shared_with: ISharedWith;
        /**
         * The time, in ISO 8601 format, at which the album was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, that the system updated the album last.
         */
        updated_time: string;
        /**
         * The time, in ISO 8601 format, that the file was last updated.
         */
        client_updated_time: string;
    }

    /**
     * Represents a new album.
     */
    interface INewAlbum {
        /**
         * The name of the album.
         */
        name: string;
        /**
         * A description of the album.
         */
        description?: string | undefined;
    }

    /**
     * The Audio object contains info about a user's audio in SkyDrive. The Live
     * Connect REST API supports creating, reading, updating, and deleting Audio
     * objects. Use the wl.skydrive scope to read Audio objects. Use the
     * wl.contacts_skydrive scope to read any audio that other users have shared
     * with the user. Use the wl.skydrive_update scope to create, update, or
     * delete Audio objects.
     */
    interface IAudio {
        /**
         * The Audio object's ID.
         */
        id: string;
        /**
         * Info about the user who uploaded the audio.
         */
        from: IUserInfo;
        /**
         * The name of the audio.
         */
        name: string;
        /**
         * A description of the audio, or null if no description is specified.
         */
        description: string;
        /**
         * The id of the folder in which the audio is currently stored.
         */
        parent_id: string;
        /**
         * The size, in bytes, of the audio.
         */
        size: number;
        /**
         * The URL to use to upload a new audio to overwrite the existing audio.
         */
        upload_location: string;
        /**
         * The number of comments associated with the audio.
         */
        comments_count: number;
        /**
         * A value that indicates whether comments are enabled for the audio. If
         * comments can be made, this value is true; otherwise, it is false.
         */
        comments_enabled: boolean;
        /**
         * A value that indicates whether this audio can be embedded. If this
         * audio can be embedded, this value is true; otherwise, it is false.
         */
        is_embeddable: boolean;
        /**
         * The URL to use to download the audio from SkyDrive.
         * Warning
         * This value is not persistent. Use it immediately after making the
         * request, and avoid caching.
         */
        source: string;
        /**
         * A URL to view the item on SkyDrive.
         */
        link: string;
        /**
         * The type of object; in this case, "audio".
         */
        type: string;
        /**
         * The audio's title.
         */
        title: string;
        /**
         * The audio's artist name.
         */
        artist: string;
        /**
         * The audio's album name.
         */
        album: string;
        /**
         * The artist name of the audio's album.
         */
        album_artist: string;
        /**
         * The audio's genre.
         */
        genre: string;
        /**
         * The audio's playing time, in milliseconds.
         */
        duration: number;
        /**
         * A URL to view the audio's picture on SkyDrive.
         */
        picture: string;
        /**
         * The object that contains permission info.
         */
        shared_with: ISharedWith;
        /**
         * The time, in ISO 8601 format, at which the audio was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, at which the audio was last updated.
         */
        updated_time: string;
    }

    /**
     * Represents a new audio item.
     */
    interface INewAudio {
        /**
         * The name of the audio.
         */
        name: string;
        /**
         * A description of the audio.
         */
        description?: string | undefined;
        /**
         * The audio's title.
         */
        title?: string | undefined;
        /**
         * The audio's artist name.
         */
        artist?: string | undefined;
        /**
         * The audio's album name.
         */
        album?: string | undefined;
        /**
         * The artist name of the audio's album.
         */
        album_artist?: string | undefined;
        /**
         * The audio's genre.
         */
        genre?: string | undefined;
    }

    /**
     * The Calendar object contains info about a user's Outlook.com calendar.
     * The Live Connect REST API supports creating, reading, updating, and
     * deleting calendars. Use the wl.calendars scope to read a user's Calendar
     * objects. Use the wl.calendars_update scope to create Calendar objects for
     * a user. Use the wl.contacts_calendars scope to read a user's friends'
     * Calendar objects.
     */
    interface ICalendar {
        /**
         * The Calendar object's ID.
         */
        id: string;
        /**
         * Name of the calendar.
         */
        name: string;
        /**
         * Description of the calendar.
         */
        description: string;
        /**
         * The time, in ISO 8601 format, at which the calendar was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, that the calendar was last updated.
         */
        updated_time: string;
        /**
         * Info about the user who owns the calendar.
         */
        from: IUserInfo;
        /**
         * A value that indicates whether this calendar is the default calendar.
         * If this calendar is the default calendar, this value is true;
         * otherwise, it is false.
         */
        is_default: boolean;
        /**
         * A public subscription URL with which Live Connect will synchronize
         * properties and events periodically for this calendar. A NULL value
         * indicates that this is not a subscribed calendar.
         */
        subscription_location: string;
        /**
         * Role and permissions that are granted to the user for the calendar.
         * The possible values are:
         * - free_busy: The user can see only free/busy info.
         * - limited_details: The user can see a subset of all details.
         * - read: The user can only read the content of the calendar events.
         * - read_write: The user can read and write calendar and events.
         * - co_owner: The user is co-owner of this calendar.
         * - owner: The user is the owner of this calendar.
         */
        permissions: string;
    }

    /**
     * Represents a new calendar item.
     */
    interface INewCalendar {
        /**
         * Name of the calendar.
         */
        name: string;
        /**
         * Description of the calendar.
         */
        description?: string | undefined;
    }

    /**
     * Represents a request to create a new calendar that subscribes to the
     * given iCal calendar.
     */
    interface INewCalendarSubscription {
        /**
         * Name of the calendar.
         */
        name: string;
        /**
         * A public subscription URL with which Live Connect will synchronize
         * properties and events periodically for this calendar.
         */
        subscription_location: string;
    }

    /**
     * The Comment object contains info about comments that are associated with
     * a photo, audio, or video on SkyDrive. The Live Connect REST API supports
     * reading Comment objects. Use the wl.photos scope to read Comment objects.
     * Use the wl.contacts_photos scope to read the Comment objects that are
     * associated with any albums, photos, and videos that other users have
     * shared with the user.
     */
    interface IComment {
        /**
         * The Comment object's id.
         */
        id: string;
        /**
         * Info about the user who created the comment.
         */
        from: IUserInfo;
        /**
         * The text of the comment. The maximum length of a comment is 10,000
         * characters.
         */
        message: string;
        /**
         * The time, in ISO 8601 format, at which the comment was created.
         */
        created_time: string;
    }

    /**
     * Represents a new comment.
     */
    interface INewComment {
        /**
         * The text of the comment. The maximum length of a comment is 10,000
         * characters.
         */
        message: string;
    }

    /**
     * The Contact object contains info about a user's Outlook.com contacts. The
     * Live Connect REST API supports reading Contact objects.
     */
    interface IContact {
        /**
         * The Contact object's ID.
         */
        id: string;
        /**
         * The contact's first name, or null if no first name is specified.
         */
        first_name: string;
        /**
         * The contact's last name, or null if no last name is specified.
         */
        last_name: string;
        /**
         * The contact's full name, formatted for location.
         */
        name: string;
        /**
         * A value that indicates whether the contact is set as a friend. If the
         * contact is a friend, this value is true; otherwise, it is false.
         */
        is_friend: boolean;
        /**
         * A value that indicates whether the contact is set as a favorite
         * contact. If the contact is a favorite, this value is true; otherwise,
         * it is false.
         */
        is_favorite: boolean;
        /**
         * The contact's ID, if the contact has one. If not, this value is null.
         */
        user_id: string;
        /**
         * An array containing a SHA-256 hash for each of the contact's email
         * addresses. For more info, see Friend finder.
         */
        email_hashes: string[];
        /**
         * The time, in ISO 8601 format, at which the user last updated the
         * data.
         */
        updated_time: string;
        /**
         * The day of the contact's birth date, or null if no birth date is
         * specified.
         */
        birth_day: number;
        /**
         * The month of the contact's birth date, or null if no birth date is
         * specified.
         */
        birth_month: number;
    }

    /**
     * Represents a new contact.
     */
    interface INewContact {
        /**
         * The contact's first name.
         */
        first_name?: string | undefined;
        /**
         * The contact's last name.
         */
        last_name?: string | undefined;
        /**
         * An array that contains the contact's work info.
         */
        work?: {
            employer: {
                name: string;
            };
        }[] | undefined;
        /**
         * The contact's email addresses.
         */
        emails?: {
            /**
             * The contact's preferred email address.
             */
            preferred?: string | undefined;
            /**
             * The contact's personal email address.
             */
            personal?: string | undefined;
            /**
             * The contact's business email address.
             */
            business?: string | undefined;
            /**
             * The contact's "alternate" email address.
             */
            other?: string | undefined;
        } | undefined;
    }

    /**
     * The Error object contains info about an error that is returned by the
     * Live Connect APIs.
     */
    interface IError {
        /**
         * Info about the error.
         */
        error: {
            /**
             * The error code.
             */
            code: string;
            /**
             * The error message.
             */
            message: string;
        };
    }

    /**
     * The Event object contains info about events on a user's Outlook.com
     * calendars. The Live Connect REST API supports creating Event objects. Use
     * the wl.events_create scope to create Event objects on the user's default
     * calendar only. Use the wl.calendars scope to read Event objects on the
     * user's calendars. Use wl.calendars_update to create Event objects on any
     * of the user's calendars. Use the wl.contacts_calendars scope to read
     * Event objects from the user's friend's calendars.
     */
    interface IEvent {
        /**
         * The ID of the event.
         */
        id: string;
        /**
         * The name of the event, with a maximum length of 255 characters. This
         * structure is required.
         */
        name: string;
        /**
         * The time, in ISO 8601 format, at which the event was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, at which the event was updated. This
         * structure is visible only in the Event object that is returned if the
         * event was successfully created.
         */
        updated_time: string;
        /**
         * A description of the event, with a maximum length of 32,768
         * characters. This structure is required.
         */
        description: string;
        /**
         * The ID of the calendar that contains the event.
         */
        calendar_id: string;
        /**
         * The object that contains the name and ID of the organizer.
         */
        from: IUserInfo;
        /**
         * The start time, in ISO 8601 format, of the event. When the event is
         * being read, the time will be the user's local time, in ISO 8601
         * format.
         */
        start_time: string;
        /**
         * The end time, in ISO 8601 format, of the event. If no end time is
         * specified, the default value is 30 minutes after start_time. This
         * structure is optional when creating an event. When the event is being
         * read, the time will be the user's local time, in ISO 8601 format.
         */
        end_time: string;
        /**
         * The name of the location at which the event will take place. The
         * maximum length is 1,000 characters.
         */
        location: string;
        /**
         * A value that specifies whether the event is an all-day event. If the
         * event is an all-day event, this value is true; otherwise, it is
         * false. If this structure is missing, the default value is false.
         */
        is_all_day_event: boolean;
        /**
         * A value that specifies whether the event is recurring. If the event
         * is recurring, this value is true; otherwise, it is false.
         */
        is_recurrent: boolean;
        /**
         * The text description of the recurrence pattern, for example, "Occurs
         * every week on Tuesday". The value is Null if this is not a recurrent
         * event.
         */
        recurrence: string;
        /**
         * The time, in minutes, before the event for the reminder alarm.
         */
        reminder_time: number;
        /**
         * The user's availability status for the event. Valid values are:
         * - free
         * - busy
         * - tentative
         * - out_of_office
         * @default "free"
         */
        availability: string;
        /**
         * A value that specifies whether the event is publicly visible. Valid
         * values are:
         * - public   the event is visible to anyone who can view the calendar.
         * - private  the event is visible only to the event owner.
         * @default "public"
         */
        visibility: string;
    }

    /**
     * Represents a new event.
     */
    interface INewEvent {
        /**
         * The name of the event, with a maximum length of 255 characters. This
         * structure is required.
         */
        name: string;
        /**
         * A description of the event, with a maximum length of 32,768
         * characters. This structure is required.
         */
        description: string;
        /**
         * The start time of the event. When the event is being read, the time
         * will be the user's local time, in ISO 8601 format.
         * Can be a date string, or a Date object.
         */
        start_time: any;
        /**
         * The end time of the event. If no end time is specified, the default
         * value is 30 minutes after start_time. This structure is optional when
         * creating an event. When the event is being read, the time will be the
         * user's local time, in ISO 8601 format.
         * Can be a date string, or a Date object.
         */
        end_time?: any;
        /**
         * The name of the location at which the event will take place. The
         * maximum length is 1,000 characters.
         */
        location?: string | undefined;
        /**
         * A value that specifies whether the event is an all-day event. If the
         * event is an all-day event, this value is true; otherwise, it is
         * false. If this structure is missing, the default value is false.
         */
        is_all_day_event?: boolean | undefined;
        /**
         * The time, in minutes, before the event for the reminder alarm.
         */
        reminder_time?: number | undefined;
        /**
         * The user's availability status for the event. Valid values are:
         * - free
         * - busy
         * - tentative
         * - out_of_office
         * @default "free"
         */
        availability?: string | undefined;
        /**
         * A value that specifies whether the event is publicly visible. Valid
         * values are:
         * - public  the event is visible to anyone who can view the calendar.
         * - private the event is visible only to the event owner.
         * @default "public"
         */
        visibility?: string | undefined;
    }

    /**
     * Response received after successfully creating a new event.
     */
    interface INewEventResponse {
        /**
         * The name of the event, with a maximum length of 255 characters. This
         * structure is required.
         */
        name: string;
        /**
         * A description of the event, with a maximum length of 32,768
         * characters. This structure is required.
         */
        description: string;
        /**
         * The start time, in ISO 8601 format, of the event. When the event is
         * being read, the time will be the user's local time, in ISO 8601
         * format.
         */
        start_time: string;
        /**
         * The end time, in ISO 8601 format, of the event. If no end time is
         * specified, the default value is 30 minutes after start_time. This
         * structure is optional when creating an event. When the event is being
         * read, the time will be the user's local time, in ISO 8601 format.
         */
        end_time: string;
        /**
         * The name of the location at which the event will take place. The
         * maximum length is 1,000 characters.
         */
        location: string;
        /**
         * A value that specifies whether the event is an all-day event. If the
         * event is an all-day event, this value is true; otherwise, it is
         * false. If this structure is missing, the default value is false.
         */
        is_all_day_event: boolean;
        /**
         * A value that specifies whether the event is recurring. If the event
         * is recurring, this value is true; otherwise, it is false.
         */
        is_recurrent: boolean;
        /**
         * The text description of the recurrence pattern, for example, "Occurs
         * every week on Tuesday". The value is Null if this is not a recurrent
         * event.
         */
        recurrence: string;
        /**
         * The time, in minutes, before the event for the reminder alarm.
         */
        reminder_time: number;
        /**
         * The user's availability status for the event. Valid values are:
         * - free
         * - busy
         * - tentative
         * - out_of_office
         * @default "free"
         */
        availability: string;
        /**
         * A value that specifies whether the event is publicly visible. Valid
         * values are:
         * - public  the event is visible to anyone who can view the calendar.
         * - private the event is visible only to the event owner.
         * @default "public"
         */
        visibility: string;
        /**
         * The time, in ISO 8601 format, at which the event was updated. This
         * structure is visible only in the Event object that is returned if the
         * event was successfully created.
         */
        updated_time: string;
    }

    /**
     * The File object contains info about a user's files in SkyDrive. The Live
     * Connect REST API supports creating, reading, updating, and deleting File
     * objects. Use the wl.skydrive scope to read File objects. Use the
     * wl.contacts_skydrive scope to read any files that other users have shared
     * with the user. Use the wl.skydrive_update scope to create, update, or
     * delete File objects.
     */
    interface IFile {
        /**
         * The File object's ID.
         */
        id: string;
        /**
         * Info about the user who uploaded the file.
         */
        from: IUserInfo;
        /**
         * The name of the file.
         */
        name: string;
        /**
         * A description of the file, or null if no description is specified.
         */
        description: string;
        /**
         * The ID of the folder the file is currently stored in.
         */
        parent_id: string;
        /**
         * The size, in bytes, of the file.
         */
        size: number;
        /**
         * The URL to upload file content hosted in SkyDrive.
         * Note: This structure is not available if the file is an Microsoft
         * Office OneNote notebook.
         */
        upload_location: string;
        /**
         * The number of comments that are associated with the file.
         */
        comments_count: number;
        /**
         * A value that indicates whether comments are enabled for the file. If
         * comments can be made, this value is true; otherwise, it is false.
         */
        comments_enabled: boolean;
        /**
         * A value that indicates whether this file can be embedded. If this
         * file can be embedded, this value is true; otherwise, it is false.
         */
        is_embeddable: boolean;
        /**
         * The URL to use to download the file from SkyDrive.
         * Warning: This value is not persistent. Use it immediately after
         * making the request, and avoid caching.
         * Note: This structure is not available if the file is an Office
         * OneNote notebook.
         */
        source: string;
        /**
         * A URL to view the item on SkyDrive.
         */
        link: string;
        /**
         * The type of object; in this case, "file".
         * Note: If the file is a Office OneNote notebook, the type structure is
         * set to "notebook".
         */
        type: string;
        /**
         * Object that contains permission info.
         */
        shared_with: ISharedWith;
        /**
         * The time, in ISO 8601 format, at which the file was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, that the system updated the file last.
         */
        updated_time: string;
        /**
         * The time, in ISO 8601 format, that the client machine updated the
         * file last.
         */
        client_updated_time: string;
        /**
         * Sorts the items to specify the following criteria: updated, name,
         * size, or default.
         */
        sort_by: string;
    }

    /**
     * Success response to a new file creation request.
     */
    interface INewFileResponse {
        /**
         * ID of the new item.
         */
        id: string;
        /**
         * The file's name and file extension.
         */
        name: string;
        /**
         * URL where the item can be downloaded from.
         */
        source: string;
    }

    /**
     * Returns when you perform a GET request to /FILE_ID/content.
     */
    interface IFileDownloadLink {
        /**
         * A URL download link for the file.
         */
        location: string;
    }

    /**
     * The Folder object contains info about a user's folders in SkyDrive.
     * Folders can contain combinations of photos, videos, audio, and
     * subfolders. The Live Connect REST API supports reading Folder objects.
     * Use the wl.photos scope to read Folder objects. Use the
     * wl.contacts_photos scope to read any albums, photos, videos, and audio
     * that other users have shared with the user.
     */
    interface IFolder {
        /**
         * The Folder object's ID.
         */
        id: string;
        /**
         * Info about the user who created the folder.
         */
        from: IUserInfo;
        /**
         * The name of the folder.
         */
        name: string;
        /**
         * A description of the folder, or null if no description is specified.
         */
        description: string;
        /**
         * The total number of items in the folder.
         */
        count: number;
        /**
         * The URL of the folder, hosted in SkyDrive.
         */
        link: string;
        /**
         * The resource ID of the parent.
         */
        parent_id: string;
        /**
         * The URL to upload items to the folder hosted in SkyDrive. Requires
         * the wl.skydrive scope.
         */
        upload_location: string;
        /**
         * A value that indicates whether this folder can be embedded. If this
         * folder can be embedded, this value is true; otherwise, it is false.
         */
        is_embeddable: boolean;
        /**
         * The type of object; in this case, "folder".
         */
        type: string;
        /**
         * The time, in ISO 8601 format, at which the folder was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, that the system updated the file last.
         */
        updated_time: string;
        /**
         * The time, in ISO 8601 format, that the client machine updated the
         * file last.
         */
        client_updated_time: string;
        /**
         * Permissions info for the folder. Requires the wl.skydrive scope.
         */
        shared_with: ISharedWith;
        /**
         * Sorts the items to specify the following criteria: updated, name,
         * size, or default.
         */
        sort_by: string;
    }

    /**
     * Represents a new folder.
     */
    interface INewFolder {
        /**
         * The name of the folder.
         */
        name: string;
        /**
         * A description of the folder.
         */
        description?: string | undefined;
        /**
         * Sorts the items to specify the following criteria: updated, name,
         * size, or default.
         */
        sort_by?: string | undefined;
    }

    /**
     * The Friend object contains info about a user's friends. A Friend object
     * represents a user's contact whose is_friend value is set to true. The
     * Live Connect REST API supports reading Friend objects.
     */
    interface IFriend {
        /**
         * The friend's ID.
         */
        id: string;
        /**
         * The friend's full name, formatted for locale.
         */
        name: string;
    }

    /**
     * The Permissions object contains a list of scopes, showing those scopes to
     * which the user has consented. The response body contains a JSON object
     * that lists all consented scopes as a name/value pair. Each scope to which
     * the user consented is present as a key.
     */
    interface IPermissions {
        [scope: string]: number;
    }

    /**
     * Information about an image.
     */
    interface IImageInfo {
        /**
         * The height, in pixels, of this image of this particular size.
         */
        height: number;
        /**
         * The width, in pixels, of this image of this particular size.
         */
        width: number;
        /**
         * The width, in pixels, of this image of this particular size.
         */
        source: string;
        /**
         * The type of this image of this particular size. Valid values are:
         * full (maximum size: 2048 x 2048 pixels)
         * - normal (maximum size 800 x 800 pixels)
         * - album (maximum size 176 x 176 pixels)
         * - small (maximum size 96 x 96 pixels)
         */
        type: string;
    }

    /**
     * Represents location information.
     */
    interface ILocation {
        /**
         * The latitude portion of the location, expressed as positive (north)
         * or negative (south) degrees relative to the equator.
         */
        latitude: number;
        /**
         * The longitude portion of the location expressed as positive (east) or
         * negative (west) degrees relative to the Prime Meridian.
         */
        longitude: number;
        /**
         * The altitude portion of the location, expressed as positive (above)
         * or negative (below) values relative to sea level, in units of
         * measurement as determined by the camera.
         */
        altitude: number;
    }

    /**
     * The Photo object contains info about a user's photos on SkyDrive. The
     * Live Connect REST API supports creating, reading, updating, and deleting
     * Photo objects. Use the wl.photos scope to read Photo objects. Use the
     * wl.contacts_photos scope to read any albums, photos, videos, and audio
     * that other users have shared with the user. Use the wl.skydrive_update
     * scope to create, update, or delete Photo objects.
     */
    interface IPhoto {
        /**
         * The Photo object's ID.
         */
        id: string;
        /**
         * Info about the user who uploaded the photo.
         */
        from: IUserInfo;
        /**
         * The file name of the photo.
         */
        name: string;
        /**
         * A description of the photo, or null if no description is specified.
         */
        description: string;
        /**
         * The ID of the folder where the item is stored.
         */
        parent_id: string;
        /**
         * The size, in bytes, of the photo.
         */
        size: number;
        /**
         * The number of comments associated with the photo.
         */
        comments_count: number;
        /**
         * A value that indicates whether comments are enabled for the photo. If
         * comments can be made, this value is true; otherwise, it is false.
         */
        comments_enabled: boolean;
        /**
         * The number of tags on the photo.
         */
        tags_count: number;
        /**
         * A value that indicates whether tags are enabled for the photo. If
         * users can tag the photo, this value is true; otherwise, it is false.
         */
        tags_enabled: boolean;
        /**
         * A value that indicates whether this photo can be embedded. If this
         * photo can be embedded, this value is true; otherwise, it is false.
         */
        is_embeddable: boolean;
        /**
         * A URL of the photo's picture.
         */
        picture: string;
        /**
         * The download URL for the photo.
         * Warning: This value is not persistent. Use it immediately after
         * making the request, and avoid caching.
         */
        source: string;
        /**
         * The URL to upload photo content hosted in SkyDrive. This value is
         * returned only if the wl.skydrive scope is present.
         */
        upload_location: string;
        /**
         * Info about various sizes of the photo.
         */
        images: IImageInfo[];
        /**
         * A URL of the photo, hosted in SkyDrive.
         */
        link: string;
        /**
         * The date, in ISO 8601 format, on which the photo was taken, or null
         * if no date is specified.
         */
        when_taken: string;
        /**
         * The height, in pixels, of the photo.
         */
        height: number;
        /**
         * The width, in pixels, of the photo.
         */
        width: number;
        /**
         * The type of object; in this case, "photo".
         */
        type: string;
        /**
         * The location where the photo was taken.
         * Note: The location object is not available for shared photos.
         */
        location: ILocation;
        /**
         * The manufacturer of the camera that took the photo.
         */
        camera_make: string;
        /**
         * The brand and model number of the camera that took the photo.
         */
        camera_model: string;
        /**
         * The f-number that the photo was taken at.
         */
        focal_ratio: number;
        /**
         * The focal length that the photo was taken at, typically expressed in
         * millimeters for newer lenses.
         */
        focal_length: number;
        /**
         * The numerator of the shutter speed (for example, the "1" in "1/15 s")
         * that the photo was taken at.
         */
        exposure_numerator: number;
        /**
         * The denominator of the shutter speed (for example, the "15" in "1/15
         * s") that the photo was taken at.
         */
        exposure_denominator: number;
        /**
         * The object that contains permissions info for the photo.
         */
        shared_with: ISharedWith;
        /**
         * The time, in ISO 8601 format, at which the photo was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, at which the photo was last updated.
         */
        updated_time: string;
    }

    /**
     * The Search object contains info about the objects found in a user's
     * SkyDrive that match the search query. See Search query parameters for
     * info about formatting a search query request.
     */
    interface ISearch {
        /**
         * An array of file and folder objects found in a user's SkyDrive that
         * match the search query.
         */
        data: IObject[];
        /**
         * The path strings that reference the next and previous sets in a
         * paginated response.
         */
        paging?: {
            /**
             * Path string for the next set of results.
             */
            next?: string | undefined;
            /**
             * Path string for the previous set of results.
             */
            previous?: string | undefined;
        } | undefined;
    }

    /**
     * The Tag object contains info about tags that are associated with a photo
     * or a video on SkyDrive. The Live Connect REST API supports reading Tag
     * objects. Use the wl.photos, and wl.skydrive scopes to read Tag objects.
     * Use the wl.contacts_photos and wl.contacts_skydrive scopes to read the
     * Tag objects that are associated with any photos that other users have
     * shared with the user.
     */
    interface ITag {
        /**
         * The Tag object's ID.
         */
        id: string;
        /**
         * The user object for the tagged person.
         */
        user: IUserInfo;
        /**
         * The center of the tag's horizontal position, measured as a
         * floating-point percentage from 0 to 100, from the left edge of the
         * photo. This value is not returned for Video objects.
         */
        x: number;
        /**
         * The center of the tag's vertical position, measured as a
         * floating-point percentage from 0 to 100, from the top edge of the
         * photo. This value is not returned for Video objects.
         */
        y: number;
        /**
         * The time, in ISO 8601 format, at which the tag was created.
         */
        created_time: string;
    }

    /**
     * Contains work information for one employer.
     */
    interface IWorkInfo {
        /**
         * Info about the user's employer.
         */
        employer: {
            /**
             * The name of the user's employer, or null if the employer's name
             * is not specified.
             */
            name: string;
        };
        /**
         * Info about the user's work position.
         */
        position: {
            /**
             * The name of the user's work position, or null if the name of the
             * work position is not specified.
             */
            name: string;
        };
    }

    /**
     * Information about one postal address.
     */
    interface IPostalAddress {
        /**
         * The street address, or null if one is not specified.
         */
        street: string;
        /**
         * The second line of the street address, or null if one is not
         * specified.
         */
        street_2: string;
        /**
         * The city of the address, or null if one is not specified.
         */
        city: string;
        /**
         * The state of the address, or null if one is not specified.
         */
        state: string;
        /**
         * The postal code of the address, or null if one is not specified.
         */
        postal_code: string;
        /**
         * The region of the address, or null if one is not specified.
         */
        region: string;
    }

    /**
     * The User object contains info about a user. The Live Connect REST API
     * supports reading User objects.
     */
    interface IUser {
        /**
         * The user's ID.
         */
        id: string;
        /**
         * The user's full name.
         */
        name: string;
        /**
         * The user's first name.
         */
        first_name: string;
        /**
         * The user's last name.
         */
        last_name: string;
        /**
         * The user's gender, or null if no gender is specified.
         */
        gender: string;
        /**
         * The URL of the user's profile page.
         */
        link: string;
        /**
         * The day of the user's birth date, or null if no birth date is
         * specified.
         */
        birth_day: number;
        /**
         * The month of the user's birth date, or null if no birth date is
         * specified.
         */
        birth_month: number;
        /**
         * The year of the user's birth date, or null if no birth date is
         * specified.
         */
        birth_year: number;
        /**
         * An array that contains the user's work info.
         */
        work: IWorkInfo[];
        /**
         * The user's email addresses.
         */
        emails: {
            /**
             * The user's preferred email address, or null if one is not
             * specified.
             */
            preferred: string;
            /**
             * The email address that is associated with the account.
             */
            account: string;
            /**
             * The user's personal email address, or null if one is not
             * specified.
             */
            personal: string;
            /**
             * The user's business email address, or null if one is not
             * specified.
             */
            business: string;
            /**
             * The user's "alternate" email address, or null if one is not
             * specified.
             */
            other: string;
        };
        /**
         * The user's postal addresses.
         */
        addresses: {
            /**
             * The user's personal postal address.
             */
            personal: IPostalAddress;
            /**
             * The user's business postal address.
             */
            business: IPostalAddress;
        };
        /**
         * The user's phone numbers.
         */
        phones: {
            /**
             * The user's personal phone number, or null if one is not
             * specified.
             */
            personal: string;
            /**
             * The user's business phone number, or null if one is not
             * specified.
             */
            business: string;
            /**
             * The user's mobile phone number, or null if one is not specified.
             */
            mobile: string;
        };
        /**
         * The user's locale code.
         */
        locale: string;
        /**
         * The time, in ISO 8601 format, at which the user last updated the
         * object.
         */
        updated_time: string;
    }

    /**
     * The Video object contains info about a user's videos on SkyDrive. The
     * Live Connect REST API supports creating, reading, updating, and deleting
     * Video objects. Use the wl.photos scope to read Video objects. Use the
     * wl.contacts_photos scope to read albums, photos, and videos that other
     * users have shared with the user. Use the wl.skydrive_update scope to
     * create, update, or delete Video objects.
     */
    interface IVideo {
        /**
         * The Video object's ID.
         */
        id: string;
        /**
         * Info about the user who uploaded the video.
         */
        from: IUserInfo;
        /**
         * The file name of the video.
         */
        name: string;
        /**
         * A description of the video, or null if no description is specified.
         */
        description: string;
        /**
         * The id of the folder where the item is stored.
         */
        parent_id: string;
        /**
         * The size, in bytes, of the video.
         */
        size: number;
        /**
         * The number of comments that are associated with the video.
         */
        comments_count: number;
        /**
         * A value that indicates whether comments are enabled for the video. If
         * comments can be made, this value is true; otherwise, it is false.
         */
        comments_enabled: boolean;
        /**
         * The number of tags on the video.
         */
        tags_count: number;
        /**
         * A value that indicates whether tags are enabled for the video. If
         * tags can be set, this value is true; otherwise, it is false.
         */
        tags_enabled: boolean;
        /**
         * A value that indicates whether this video can be embedded. If this
         * video can be embedded, this value is true; otherwise, it is false.
         */
        is_embeddable: boolean;
        /**
         * A URL of a picture that represents the video.
         */
        picture: string;
        /**
         * The download URL for the video.
         * Warning: This value is not persistent. Use it immediately after
         * making the request, and avoid caching.
         */
        source: string;
        /**
         * The URL to upload video content, hosted in SkyDrive. This value is
         * returned only if the wl.skydrive scope is present.
         */
        upload_location: string;
        /**
         * A URL of the video, hosted in SkyDrive.
         */
        link: string;
        /**
         * The height, in pixels, of the video.
         */
        height: number;
        /**
         * The width, in pixels, of the video.
         */
        width: number;
        /**
         * The duration, in milliseconds, of the video run time.
         */
        duration: number;
        /**
         * The bit rate, in bits per second, of the video.
         */
        bitrate: number;
        /**
         * The type of object; in this case, "video".
         */
        type: string;
        /**
         * The object that contains permission info.
         */
        shared_with: ISharedWith;
        /**
         * The time, in ISO 8601 format, at which the video was created.
         */
        created_time: string;
        /**
         * The time, in ISO 8601 format, at which the video was last updated.
         */
        updated_time: string;
    }

    // #endregion REST Object Information

    // #region API Properties Interfaces

    /**
     * 'Properties' object passed into the WL.api method.
     */
    interface IAPIProperties {
        /**
         * Contains the path to the REST API object. For information on
         * specifying paths for REST objects, see REST reference.
         * http://msdn.microsoft.com/en-us/library/live/hh243648.aspx
         */
        path: string;
        /**
         * An HTTP method that specifies the action required for the API call.
         * These actions are standard REST API actions: "COPY", "GET", "MOVE",
         * "PUT", "POST", and "DELETE".
         * @default "GET"
         */
        method?: string | undefined;
        /**
         * A JSON object that specifies the REST API request body. The body
         * property is used only for "POST" and "PUT" requests.
         */
        body?: any;
    }

    /**
     * 'Properties' object passed into the WL.backgroundDownload method.
     */
    interface IBackgroundDownloadProperties {
        /**
         * The path to the file to download. For information on specifying paths
         * for REST objects, see REST reference.
         * http://msdn.microsoft.com/en-us/library/live/hh243648.aspx
         */
        path: string;
        /**
         * The file output object to which the downloaded file data is written.
         */
        file_output?: Windows.Storage.StorageFile | undefined;
    }

    /**
     * 'Properties' object passed into the WL.backgroundUpload method.
     */
    interface IBackgroundUploadProperties {
        /**
         * The path to the file to upload.
         */
        path: string;
        /**
         * The name of the file to upload.
         */
        file_name?: string | undefined;
        /**
         * The file input object to read the file from. Can be a
         * Windows.Storage.StorageFile or an IFile.
         */
        file_input?: any;
        /**
         * The file input stream to read the file from.
         */
        stream_input?: Windows.Storage.Streams.IInputStream | undefined;
        /**
         * Indicates whether the uploaded file should overwrite an existing
         * copy. Specify "true" to overwrite, "false" to not overwrite and for
         * the WL.backgroundUpload method call to fail, or "rename" to not
         * overwrite and enable SkyDrive to assign a new name to the uploaded
         * file.
         * @default "false".
         */
        overwrite?: string | undefined;
    }

    /**
     * 'Properties' object passed into the WL.download method.
     */
    interface IDownloadProperties {
        /**
         * The path to the file to download. For information on specifying paths
         * for REST objects, see REST reference.
         * http://msdn.microsoft.com/en-us/library/live/hh243648.aspx
         */
        path: string;
    }

    /**
     * 'Properties' object passed into the WL.fileDialog method.
     */
    interface IFileDialogProperties {
        /**
         * Specifies the type of SkyDrive file picker to display. Specify "open"
         * to display the download version of the file picker. Specify "save"
         * to display the upload version of the file picker.
         */
        mode: string;
        /**
         * Specify only if the mode property is set to "open". Specifies how
         * many files the user can select to download. Specify "single" for a
         * single file. Specify "multi" for multiple files.
         * @default "single"
         */
        select?: string | undefined;
        /**
         * The color pallette to use for the file picker. Specify "white",
         * "grey", or "transparent".
         * @default "white"
         */
        lightbox?: string | undefined;
    }

    /**
     * 'Properties' object passed into the WL.init method.
     */
    interface IInitProperties {
        /**
         * Web apps: Required.
         * Specifies your app's OAuth client ID for web apps.
         *
         * Windows Store apps using JavaScript: not needed.
         */
        client_id?: string | undefined;
        /**
         * Contains the default redirect URI to be used for OAuth
         * authentication. For web apps, the OAuth server redirects to this URI
         * during the OAuth flow.
         *
         * For Windows Store apps using JavaScript, specifying this value will
         * enable the library to return the authentication token.
         */
        redirect_uri?: string | undefined;
        /**
         * The scope values used to determine which portions of user data the
         * app has access to, if the user consents.
         *
         * For a single scope, use this format: scope: "wl.signin". For multiple
         * scopes, use this format: scope: ["wl.signin", "wl.basic"].
         */
        scope?: any;
        /**
         * If set to "true", the library logs error info to the web browser
         * console and notifies your app by means of the wl.log event.
         * @default true
         */
        logging?: boolean | undefined;
        /**
         * Web apps: optional.
         * Windows Store apps using JavaScript: not applicable.
         * If set to "true", the library attempts to retrieve the user's sign-in
         * status from Live Connect.
         * @default true
         */
        status?: boolean | undefined;
        /**
         * Web apps: optional.
         * Windows Store apps using JavaScript: not applicable.
         * Specifies the OAuth response type value. If set to "token", the
         * client receives the access token directly. If set to "code", the
         * client receives an authorization code, and the app server that serves
         * the redirect_uri page should retrieve the access_token from the OAuth
         * server by using the authorization code and client secret.
         *
         * You can only set response_type to "code" for web apps.
         * @default "token"
         */
        response_type?: string | undefined;
        /**
         * Web apps: optional.
         * Windows Store apps using JavaScript: not applicable.
         * If set to "true", the library specifies a secure attribute when
         * writing a cookie on an HTTPS page.
         * @default "false"
         */
        secure_cookie?: string | undefined;
    }

    /**
     * 'Properties' object passed into the WL.login method.
     */
    interface ILoginProperties {
        /**
         * This parameter only applies to web apps.
         * Contains the redirect URI to be used for OAuth authentication. This
         * value overrides the default redirect URI that is provided in the call
         * to WL.init.
         */
        redirect_uri?: string | undefined;
        /**
         * Specifies the scopes to which the user who is signing in consents.
         *
         * For a single scope, use this format: scope: "wl.signin". For multiple
         * scopes, use this format: scope: ["wl.signin", "wl.basic"].
         *
         * If no scope is provided, the scope value of WL.init is used. If no
         * scope is provided in WL.init or WL.login, WL.login returns an error.
         *
         * Note  WL.login can request the "wl.offline_access" scope, but it
         * requires a server-side implementation, and the WL.init function must
         * set its response_type property to "code". For more info, see
         * Server-side scenarios.
         * http://msdn.microsoft.com/en-us/library/live/hh243649.aspx
         */
        scope: any;
        /**
         * Windows Store apps using JavaScript: not applicable.
         * Web apps: Optional. If the WL.init function's response_type object is
         * set to "code" and the app uses server-flow authentication, the state
         * object here can be used to track the web app's calling state on the
         * web app server side. For more info, see the description of the state
         * query parameter in the Server-side scenarios topic's "Getting an
         * authorization code" section.
         * http://msdn.microsoft.com/en-us/library/live/hh243649.aspx
         */
        state?: string | undefined;
    }

    /**
     * 'Properties' object passed into the WL.ui method.
     */
    interface IUIProperties {
        /**
         * Specifies the type of button to display. Specify "signin" to display
         * the Live Connect sign-in button. Specify "skydrivepicker" to display
         * the SkyDrive button.
         */
        name: string;
        /**
         * The value of the id attribute of the <div> tag to display the button
         * in.
         */
        element: string;
        /**
         * Windows Store apps using JavaScript: not applicable.
         * Web apps: Optional. If the name property is set to "signin", the
         * WL.init function's response_type property is set to "code", and the
         * app uses server-flow authentication, the state object here can be
         * used to track the web app's calling state on the web app server side.
         * For more info, see the description of the state query parameter in
         * the Server-side scenarios topic's "Getting an authorization code"
         * section.
         * http://msdn.microsoft.com/en-us/library/live/hh243649.aspx
         */
        state?: string | undefined;
    }

    /**
     * 'Properties' object passed into the WL.ui method when 'name' is set to
     * 'skydrivepicker'.
     */
    interface ISkyDrivePickerProperies extends IUIProperties {
        /**
         * The type of SkyDrive file picker button to display. Specify "save" to
         * display the upload button. Specify "open" to display the download
         * button.
         */
        mode: string;
        /**
         * Required if the mode property is set to "open". Specifies how many
         * files the user can select to download. Specify "single" for a single
         * file. Specify "multi" for multiple files.
         * @default "single"
         */
        select?: string | undefined;
        /**
         * Defines the color pallette used for the file picker button. Valid
         * values are "white" and "blue".
         * @default "white"
         */
        theme?: string | undefined;
        /**
         * Defines the color pallette used for the file picker dialog box. Valid
         * values are "white", "gray", and "transparent".
         * @default "white"
         */
        lightbox?: string | undefined;
        /**
         * If the mode property is set to "save", specifies the function to call
         * after the user clicks either Save or Cancel in the file picker. If
         * the mode property is set to "open", specifies the function to call
         * after the user clicks either Open or Cancel in the file picker.
         */
        onselected?: Function | undefined;
        /**
         * Specifies the function to call if the selected files cannot be
         * successfully uploaded or downloaded.
         */
        onerror?: Function | undefined;
    }

    /**
     * 'Properties' object passed into the WL.ui method when 'name' is set to
     * 'signin'.
     */
    interface ISignInProperties extends IUIProperties {
        /**
         * Defines the brand, or type of icon, to be used with the Live Connect
         * sign-in button.
         * @default "windows"
         */
        brand?: string | undefined;
        /**
         * Defines the color pallette used for the sign-in button. For Windows
         * Store apps using JavaScript, valid values are "dark" and "light".
         * For web apps, valid values are "blue" and "white".
         */
        theme?: string | undefined;
        /**
         * Defines the type of button.
         * @default "signin"
         */
        type?: string | undefined;
        /**
         * If the value of the type property is set to "custom", this value
         * specifies the sign-in text to be displayed in the button.
         */
        sign_in_text?: string | undefined;
        /**
         * If the value of the type property is "custom", this value specifies
         * the sign-out text to be displayed in the button.
         */
        sign_out_text?: string | undefined;
        /**
         * Specifies the function to call after the user completes the sign-in
         * process.
         */
        onloggedin?: Function | undefined;
        /**
         * Specifies the function to call after the user completes the sign-out
         * process.
         */
        onloggedout?: Function | undefined;
        /**
         * Specifies the function to call whenever there is any error while the
         * sign-in control is initializing or while the user is signing in.
         */
        onerror?: Function | undefined;
    }

    /**
     * 'Properties' object passed into the WL.upload method.
     */
    interface IUploadProperties {
        /**
         * The path to the file to upload.
         */
        path: string;
        /**
         * The id attribute of the <input> tag containing info about the file to
         * upload.
         */
        element: string;
        /**
         * Indicates whether the uploaded file should overwrite an existing
         * copy. Specify true or "true" to overwrite, false or "false" to not
         * overwrite and for the WL.upload method call to fail, or "rename" to
         * not overwrite and enable SkyDrive to assign a new name to the
         * uploaded file.
         * @default "false"
         */
        overwrite?: string | undefined;
    }

    // #endregion API Properties Interfaces

    /**
     * Represents the user's session.
     */
    interface ISession {
        /**
         * The user's access token.
         */
        access_token: string;
        /**
         * The authentication token.
         */
        authentication_token: string;
        /**
         * A list of scopes that the app has requested and that the user has
         * consented to.
         *
         * Note: This property is not available for Windows Store apps using
         * JavaScript.
         */
        scope?: string[] | undefined;
        /**
         * The amount of time remaining, in seconds, until the user's access
         * token expires.
         *
         * Note: This property is not available for Windows Store apps using
         * JavaScript.
         */
        expires_in?: number | undefined;
        /**
         * The exact time when the session will expire. This time is expressed
         * in the number of seconds since 1 January, 1970.
         *
         * Note: This property is not available for Windows Store apps using
         * JavaScript.
         */
        expires?: number | undefined;
    }

    /**
     * Represents the user's login status.
     */
    interface ILoginStatus {
        /**
         * The sign-in status of the user. Valid values are "connected",
         * "notConnected", or "unknown".
         */
        status: string;
        /**
         * A JSON object that contains the properties of the current session.
         */
        session: ISession;
    }

    /**
     * Represents the Microsoft.Live.API.Event object.
     */
    interface IEventAPI {
        /**
         * Adds a handler to an event.
         * @param event Required. The name of the event to which to add a
         *   handler.
         * @param callback Required. Specifies the name of the callback function
         *   to handle the event.
         * @returns This function can return the following errors:
         *   WL.Event.subscribe: The input parameter/property 'callback' must be
         *   included.
         *   WL.Event.subscribe: The input value for parameter/property 'event'
         *   is not valid.
         */
        subscribe(event: string, callback: Function): void;
        /**
         * Removes a handler from an event.
         * @param event Required. The name of the event from which to remove a
         *   handler.
         * @param callback Optional. Removes the callback function from the
         *   event. If this parameter is omitted or is null, all callback
         *   functions that are registered to the event are removed. Removes the
         *   callback function from the specified event.
         */
        unsubscribe(event: string, callback?: Function): void;
    }

    /**
     * Returned from a successful file picker operation.
     */
    interface IFilePickerResult {
        /**
         * Contains data concerning the user's picked files.
         */
        data: {
            /**
             * Information on files choden in the picker.
             */
            files?: IFile[] | undefined;
            /**
             * Information on folders chosen in the picker.
             */
            folders?: IFolder[] | undefined;
        };
    }

    /**
     * The promise API implemented by this library.
     */
    interface IPromise<T> {
        /**
         * Adds event listeners for particular events.
         * @param onSuccess Called when the promised event successfully occurs.
         * @param onError Called when the promised event fails to occur. Could
         *   be an IError or an IJSError.
         * @param onProgress Called to indicate that the promised event is
         *   making progress toward completion.
         */
        then(
            onSuccess: (response: T) => void,
            onError?: (error: any) => void,
            onProgress?: (progress: any) => void,
        ): IPromise<T>;
        /**
         * Cancels the pending request represented by the Promise, and triggers
         * the error callback if the promised event has not yet occurred.
         */
        cancel(): void;
    }

    /**
     * An error returned by the JavaScript library, as opposed to an error
     * object from the REST API (which we represent with IError).
     */
    interface IJSError {
        /**
         * The error code.
         */
        error: string;
        /**
         * A description of the error.
         */
        error_description: string;
    }

    /**
     * The Live Connect JavaScript API (Windows 8 and web), together with the
     * REST API, enables apps to read, update, and share user data by using the
     * JavaScript programming language. The JavaScript API (Windows 8 and web)
     * provides methods for signing users in and out, getting user status,
     * subscribing to events, creating UI controls, and calling the
     * Representational State Transfer (REST) API.
     */
    interface API {
        /**
         * Makes a call to the Live Connect Representational State Transfer
         * (REST) API. This method encapsulates a REST API request, and then
         * calls a callback function to process the response.
         * @param properties Required. A JSON object that contains properties
         *   that are necessary to make the REST API call.
         * @param callback Specifies a callback function that is executed when
         *   the REST API call is complete. The callback function takes the API
         *   response object as a parameter. The response object exposes the
         *   data returned from Live Connect, or, if an error occurs, an error
         *   property that contains the error code.
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess, onError, and onProgress parameters to enable your
         *   code to handle a successful, failed, and in-progress call to the
         *   corresponding WL.api method, respectively.
         */
        api<T>(properties: IAPIProperties, callback?: (response: any) => void): IPromise<T>;
        /**
         * Makes a call to download a file from Microsoft SkyDrive.
         *
         * **Important**:  WL.backgroundDownload is supported only for use with
         * Windows Store apps using JavaScript. If you are writing a web app,
         * use WL.download instead.
         * @param properties Required. A JSON object that contains properties
         *   that are necessary to make the REST API call.
         * @param Optional. Specifies a callback function that is executed when
         *   the REST API call is complete. The callback function takes the API
         *   response object as a parameter. The response object exposes the
         *   data that is returned from Live Connect, or, if an error occurs, an
         *   error property that contains the error code.
         * @returns Returns a Promise object. This object's then method accepts
         *   callback functions for onSuccess, onError, and onProgress to enable
         *   your code to handle a successful, failed, and in-progress call to
         *   the corresponding WL.download method, respectively.
         *   The onSuccess callback is passed a response object that contains
         *   content_type and stream properties, representing the downloaded
         *   file's content type and file stream, respectively.
         */
        backgroundDownload<T>(
            properties: IBackgroundDownloadProperties,
            callback?: (response: any) => void,
        ): IPromise<T>;
        /**
         * Makes a call to upload a file to Microsoft SkyDrive.
         *
         * **Important**: WL.backgroundUpload is supported only for use with
         * Windows Store apps using JavaScript. If you are writing a web app,
         * use WL.upload instead.
         * @param properties Required. A JSON object that contains properties
         *   that are necessary to make the REST API call.
         * @param callback Optional. Specifies a callback function that is
         *   executed when the REST API call is complete. The callback function
         *   takes the API response object as a parameter. The response object
         *   exposes the data returned from Live Connect, or if an error occurs,
         *   an error property that contains the error code.
         * @returns Returns a Promise object. For Windows Store apps using
         *   JavaScript, this object's then method accepts callback functions
         *   for onSuccess, onError, and onProgress to enable your code to
         *   handle a successful, failed, and in-progress call to the
         *   corresponding WL.backgroudUpload method, respectively.
         */
        backgroundUpload<T>(properties: IBackgroundUploadProperties, callback?: (response: any) => void): IPromise<T>;
        /**
         * Specifies whether the current user can be signed out of their
         * Microsoft account.
         *
         * For Windows Store apps using JavaScript, you can use this function to
         * determine whether you should display a control to the user to enable
         * them to sign out of their Microsoft account. If this
         * function returns true, you should display the control. However, if
         * this function returns false, you should not display this control, as
         * attempting to sign out the user in this case will have no effect.
         *
         * For web apps, this function always returns true.
         * @returns Returns true if the user can be signed out; otherwise,
         *   returns false if the user can't be signed out.
         */
        canLogout(): boolean;
        /**
         * Makes a call to download a file from Microsoft SkyDrive.
         *
         * **Important**: WL.download is supported only for use with web apps.
         * If you are writing a Windows Store app using JavaScript, use
         * WL.backgroundDownload instead.
         * @param properties Required. A JSON object that contains properties
         *   that are necessary to make the REST API call.
         * @param callback Specifies a callback function that is executed when
         *   the REST API call is complete. The callback function takes the API
         *   response object as a parameter. The response object exposes the
         *   data that is returned from Live Connect, or, if an error occurs, an
         *   error property that contains the error code.
         * @returns Returns a Promise object. This object's then method provides
         *   the onError parameter to enable your code to handle a failed call
         *   to the corresponding WL.download method.
         */
        download(properties: IDownloadProperties, callback?: (response: any) => void): IPromise<void>;
        Event: IEventAPI;
        /**
         * Displays the Microsoft SkyDrive file picker, which enables
         * JavaScript-based web apps to display a pre-built, consistent user
         * interface that enables a user to select files to upload and download
         * to and from their SkyDrive storage location.
         * @param properties Required. A JSON object containing properties for
         *   displaying the button.
         * @param callback Optional. A callback function that is executed after
         *   the user finishes interacting with the SkyDrive file picker.
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess and onError parameters to enable your code to handle
         *   a successful and failed call to the corresponding WL.fileDialog
         *   method, respectively.
         */
        fileDialog(properties: IFileDialogProperties, callback?: (response: any) => void): IPromise<IFilePickerResult>;
        /**
         * Returns the sign-in status of the current user. If the user is signed
         * in and connected to your app, this function returns the session
         * object. This is an asynchronous function that returns the user's
         * status by contacting the Live Connect authentication web service.
         * @param callback Returns the sign-in status of the current user. If
         *   the user is signed in and connected to your app, this function
         *   returns the session object. This is an asynchronous function that
         *   returns the user's status by contacting the Live Connect
         *   authentication web service.
         * @param force Optional. If set to "true", the function contacts the
         *   Live Connect authentication web service to determine the user's
         *   status. If set to "false" (the default), the function can return
         *   the user status that is currently in memory, if there is one. If
         *   the user's status has already been retrieved, the library can
         *   return the cached value. However, you can force the library to
         *   retrieve current status by setting the force parameter to "true".
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess and onError parameters to enable your code to handle
         *   a successful and failed call to the corresponding WL.getLoginStatus
         *   method, respectively.
         *   In the body of the onSuccess function, a status object is returned,
         *   which contains the user's sign-in status and the session object.
         */
        getLoginStatus(callback?: (status: ILoginStatus) => void, force?: boolean): IPromise<ILoginStatus>;
        /**
         * Retrieves the current session object synchronously, if a session
         * object exists. For situations in which performance is critical, such
         * as page loads, use the asynchronous WL.getLoginStatus method instead.
         * @returns Returns the current session as a session object instance.
         */
        getSession(): ISession;
        /**
         * Initializes the JavaScript library. An app must call this function on
         * every page before making other function calls in the library. The app
         * should call this function before making function calls that subscribe
         * to events. If the JavaScript library has already been initialized on
         * the page, calling this function succeeds silently; the client_id and
         * redirect_uri parameters are not validated.
         * @param properties Required. A JSON object with initialization
         *   properties.
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess and onError parameters to enable your code to handle
         *   a successful and failed call to the corresponding WL.init method,
         *   respectively.
         *   When the onSuccess callback is invoked, a login status object is
         *   passed in as parameter that indicates the current user's login
         *   status.
         */
        init(properties: IInitProperties): IPromise<ILoginStatus>;
        /**
         * Signs in the user or expands the user's list of scopes. Because this
         * function can result in launching the consent page prompt, you should
         * call it only in response to a user action, such as clicking a button.
         * Otherwise, the user's web browser might block the popup.
         *
         * Typically, this function is used by apps that define their own
         * sign-in controls, or by apps that ask users to grant additional
         * permissions during an activity. For example, to enable a user to post
         * their status to Live Connect, your app may have to prompt the
         * user for permission and call this function with an expanded scope.
         *
         * If you call this function when the user has already consented to the
         * requested scope and is already signed in, the callback function is
         * invoked immediately with the current session.
         * This function logs errors to the web browser console.
         * @param properties Required. A JSON object with login properties.
         * @param callback Optional. Specifies a callback function to execute
         *   when sign-in is complete. The callback function takes the status
         *   object as a parameter. For a description of the status object, see
         *   WL.getLoginStatus. If you do not specify a callback function, your
         *   app can still get the sign-in callback info by listening for an
         *   auth.sessionChange or auth.statusChange event.
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess, onError, and onProgress parameters to enable your
         *   code to handle a successful, failed, and in-progress call to the
         *   corresponding WL.login method, respectively.
         */
        login(properties: ILoginProperties, callback?: (status: any) => void): IPromise<ILoginStatus>;
        /**
         * Signs the user out of Live Connect and clears any user state that is
         * maintained by the JavaScript library, such as cookies. If the user
         * account is connected, this function logs out the user from the app,
         * but not from the PC. This function is useful primarily for websites
         * that do not use the sign-in control.
         * @param callback Optional. Specifies a callback function that is
         *   executed when sign-out is complete. The callback function takes the
         *   status object as a parameter. For a description of the status
         *   object, see WL.getLoginStatus. If you do not specify a callback
         *   function, your app can still get the sign-out callback info by
         *   listening for an auth.sessionChange or auth.statusChange event.
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess, onError, and onProgress parameters to enable your
         *   code to handle a successful, failed, and in-progress call to the
         *   corresponding WL.logout method, respectively.
         */
        logout(callback?: (status: ILoginStatus) => void): IPromise<ILoginStatus>;
        /**
         * Displays either the Live Connect sign-in button or the Microsoft
         * SkyDrive file picker button. The sign-in button either prompts the
         * user for their Microsoft account credentials if they are not
         * signed in or else signs out the user if they are signed in. The
         * file picker button displays the SkyDrive file picker to help the user
         * select files to upload or download to or from their SkyDrive
         * storage location.
         * @param properties Required. A JSON object containing properties for
         *   displaying the button.
         * @param callback Optional. A callback function that is executed after
         *   the sign-in button or file picker button is displayed.
         *   Note: Do not use the callback parameter to run code after the user
         *   finishes interacting with the sign-in button or file picker. Use a
         *   combination of the onselected, onloggedin, onloggedout, and onerror
         *   properties as previously described.
         */
        ui(properties: IUIProperties, callback?: () => void): void;
        /**
         * Makes a call to upload a file to Microsoft SkyDrive.
         *
         * **Important**: WL.upload is supported only for use with web apps. If
         * you are writing a Windows Store app using JavaScript, use
         * WL.backgroundUpload instead.
         * @param properties Required. A JSON object that contains properties
         *   that are necessary to make the REST API call.
         * @param callback Optional. Specifies a callback function that is
         *   executed when the REST API call is complete. The callback function
         *   takes the API response object as a parameter. The response object
         *   exposes the data returned from Live Connect, or if an error occurs,
         *   an error property that contains the error code.
         * @returns Returns a Promise object. This object's then method provides
         *   the onSuccess, onError, and onProgress parameters to enable your
         *   code to handle a successful, failed, and in-progress call to the
         *   corresponding WL.upload method, respectively; however, the
         *   onProgress parameter applies to newer web browsers such as Internet
         *   Explorer 10 only.
         */
        upload<T>(properties: IUploadProperties, callback?: (response: any) => void): IPromise<T>;
    }
}

/**
 * The WL object is a global object that encapsulates all functions of the
 * JavaScript API (Windows 8 and web). Your app uses the WL object to call all
 * of the JavaScript API (Windows 8 and web) functions.
 */
declare var WL: Microsoft.Live.API;
