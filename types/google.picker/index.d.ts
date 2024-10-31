/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Generated file. Do not edit.

// To report an issue with these types, please open a support ticket at:
// https://issuetracker.google.com/issues/new?component=191628

declare namespace google {
    namespace picker {
        /**
         * `PickerBuilder` is used to create `Picker` objects.  Except where
         * noted otherwise, the return type of methods below is of type
         * `PickerBuilder`, allowing you to chain one call after another.
         *
         * @example Build a basic `Picker` using the builder pattern.
         *
         * ```ts
         * const picker = new google.pickerPickerBuilder()
         *   .setOAuthToken('TOKEN_FOR_USER')
         *   .setAppId('1234567890')  // Cloud Project number
         *   .addView(google.picker.ViewId.DOCS)
         *   .setCallback((data) => {
         *     console.log(data);
         *   })
         *   .build();
         * ```
         */
        export class PickerBuilder {
            /** Add a view to the navigation pane. */
            addView(viewOrViewId: DocsView | DocsUploadView | ViewId): PickerBuilder;

            /** Add a ViewGroup to the top-level navigation pane. */
            addViewGroup(viewGroup: ViewGroup): PickerBuilder;

            /**
             * Construct the Picker object.
             */
            build(): Picker;

            /** Disable a picker feature. */
            disableFeature(feature: Feature): PickerBuilder;

            /**
             * Enable a picker feature.
             *
             * @example Basic usage
             *
             * ```ts
             * const builder = new google.pickerPickerBuilder()
             *   .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
             *   .enableFeature(google.picker.Feature.MINE_ONLY);
             * ```
             */
            enableFeature(feature: Feature): PickerBuilder;

            /** Get the relay URL, used for gadgets.rpc. */
            getRelayUrl(): string;

            /** Get the dialog title. */
            getTitle(): string;

            /**
             * Disable the title bar from being shown. To re-enable, call
             * `setTitle` with a non-empty title or `undefined`.
             */
            hideTitleBar(): PickerBuilder;

            /** Check if a picker `Feature` is enabled. */
            isFeatureEnabled(feature: Feature): boolean;

            /**
             * Sets the Id of the application needing to access the user's files via
             * the {@link https://developers.google.com/drive/api | Drive API}.
             *
             * This is required for the `https://www.googleapis.com/auth/drive.file`
             * scope.
             *
             * @param appId The Cloud project number.
             *
             * @example Basic usage
             *
             * ```ts
             * const builder = new google.pickerPickerBuilder()
             *   .setAppId('1234567890');
             * ```
             */
            setAppId(appId: string): PickerBuilder;

            /**
             * Set the callback method. This method is called when the user selects
             * items or cancels.  The callback method receives a single callback
             * object. The structure of the callback object is described in the {@link
             * https://developers.google.com/drive/picker/reference/results | JSON
             * Guide}.
             */
            setCallback(method: (result: ResponseObject) => void): PickerBuilder;

            /**
             * Sets the Browser API key obtained from Google Developers Console. See
             * the Developer's Guide for details on how to obtain the Browser API key.
             */
            setDeveloperKey(key: string): PickerBuilder;

            /** Set the document. */
            setDocument(document: Document): PickerBuilder;

            /**
             * Set the locale for the picker. The locale is an ISO 639 language code.
             * If the language is not supported, en-US is used.
             *
             * @example Basic usage
             *
             * ```ts
             * const builder = new google.pickerPickerBuilder()
             *   .setLocale('ES_419');
             * ```
             *
             * @example Set locale from navigator languages
             *
             * ```ts
             * const builder = new google.pickerPickerBuilder()
             *   .setLocale(navigator.languages[0]);
             * ```
             * See {@link
             * https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages
             * | Navigator.languages} for more information.
             */
            setLocale(locale: Locales): PickerBuilder;

            /** Sets the maximum number of items a user can pick. */
            setMaxItems(max: number): PickerBuilder;

            /**
             * Sets an OAuth token to use for authenticating the current user.
             */
            setOAuthToken(token: string): PickerBuilder;

            /**
             * Sets the origin of picker dialog. The origin should be set to the
             * window.location.protocol + '//' + window.location.host of the top-most
             * page, if your application is running in an iframe.
             */
            setOrigin(origin: string): PickerBuilder;

            /** Set the relay URL, used for gadgets.rpc. */
            setRelayUrl(url: string): PickerBuilder;

            /**
             * Set the list of MIME types which will be selectable. Use commas to
             * separate MIME types if more than one is required. If you don't set MIME
             * types, files of all MIME types are displayed in the view.
             *
             * @example Basic usage with multiple MIME types
             *
             * ```ts
             * const mimeTypes = ['image/png', 'image/jpeg'];
             * const builder = new google.pickerPickerBuilder()
             *   .setSelectableMimeTypes(mimeTypes.join(','));
             * ```
             *
             * @example Google Workspace MIME types
             *
             * ```ts
             *  const mimeTypes = [
             *  'application/vnd.google-apps.document',
             *  'application/vnd.google-apps.presentation',
             *  'application/vnd.google-apps.spreadsheet',
             * ];
             *
             * const builder = new google.pickerPickerBuilder()
             *   .setSelectableMimeTypes(mimeTypes.join(','));
             * ```
             */
            setSelectableMimeTypes(type: string): PickerBuilder;

            /**
             * Set the preferred dialog size. The dialog will be auto-centered. It has
             * a minimum size of (566,350) and a maximum size of (1051,650).
             */
            setSize(width: number, height: number): PickerBuilder;

            /** Set the dialog title. */
            setTitle(title: string): PickerBuilder;

            /** Returns the URI generated by this builder. */
            toUri(): string;
        }

        /**
         * `Picker` is the top level object representing the UI action with the
         * user. These objects are not created directly, but instead use the
         * `PickerBuilder` class.
         */
        export class Picker {
            /**
             * Get a boolean indicating the current `Picker` visibility.
             */
            isVisible(): boolean;
            /**
             * Specify the callback method called whenever the user has selected an
             * item (or canceled.)
             */
            setCallback(method: (response: ResponseObject) => void): Picker;
            /**
             * Specify a relay URL to circumvent cross-domain issues.
             */
            setRelayUrl(url: string): Picker;
            /**
             * Control the visibility of the `Picker` object.
             */
            setVisible(visible: boolean): Picker;
            /**
             * Disposes the `Picker` object.
             */
            dispose(): void;
        }

        /**
         * The response object passed to the callback method.
         */
        export interface ResponseObject {
            /**
             * A type representing the action taken by the user to dismiss the dialog.
             */
            [Response.ACTION]: Action;
            /**
             * An array of `DocumentObject`s selected by the user.
             */
            [Response.DOCUMENTS]?: DocumentObject[];
            /**
             * The parent folders for the selected items.
             */
            [Response.PARENTS]?: ParentDocumentObject[];
            /**
             * The view the user selected these items from.
             */
            [Response.VIEW]?: [
                /** The ID of the view used to select the items. */
                viewId: string,
                /** The label of the view used to select the items. */
                label: string | null,
                /** The options used to select the items. */
                viewOptions: unknown,
            ];
        }

        /**
         * `DocumentObject` is an interface describing the attributes of a selected
         * item.
         */
        export interface DocumentObject {
            /**
             * @deprecated
             */
            [Document.ADDRESS_LINES]?: string[];
            /**
             * @deprecated
             */
            [Document.AUDIENCE]?: { [key: string]: string };

            /**
             * A user-contributed description of the selected item.
             */
            [Document.DESCRIPTION]?: string;
            /**
             * The duration of a selected video.
             */
            [Document.DURATION]?: number;
            /**
             * A URL for this item suitable for embedding in a web page.
             */
            [Document.EMBEDDABLE_URL]?: string;
            /**
             * A URL to an icon for this item.
             */
            [Document.ICON_URL]?: string;
            /**
             * The ID for the selected item.
             */
            [Document.ID]: string;
            /**
             * Returns true if the selected item was just uploaded.
             */
            [Document.IS_NEW]?: boolean;
            /**
             * The timestamp describing when this item was last edited.
             */
            [Document.LAST_EDITED_UTC]?: number;
            /**
             * The latitude of the selected item.
             */
            [Document.LATITUDE]?: number;
            /**
             * The longitude of the selected item.
             */
            [Document.LONGITUDE]?: number;
            /**
             * The MIME type of this item.
             */
            [Document.MIME_TYPE]?: string;
            /**
             * The name of this item.
             */
            [Document.NAME]?: string;
            /**
             * The parent ID of this item. For example, the folder containing this
             * file.
             */
            [Document.PARENT_ID]?: string;
            /**
             * The phone numbers of the selected item.
             */
            [Document.PHONE_NUMBERS]?: Array<{ type: string; number: string }>;
            /**
             * An id describing the service this item was selected from.
             */
            [Document.SERVICE_ID]?: string;
            /**
             * An array of `Thumbnail`s which describe the attributes of a photo
             * or video. Thumbnails aren't returned if the selected items belong to
             * Google Drive.
             */
            [Document.THUMBNAILS]?: ThumbnailObject[];
            /**
             * The type of the selected item.
             */
            [Document.TYPE]?: string;
            /**
             * A URL to this item.
             */
            [Document.URL]?: string;
            /**
             * Whether the item is shared.
             */
            isShared?: boolean;
            /**
             * A URL to download this item.
             */
            downloadUrl?: string;
            /**
             * Whether the request to pre-open the document in Google Drive was
             * successful.
             */
            driveSuccess?: boolean;
            /**
             * The error code for the request to pre-open the document in Google
             * Drive.
             */
            driveError?: string;
            /**
             * Display name for the owning organization.
             */
            organizationDisplayName?: string;
            /**
             * The resource key for the item, if present. Empty string otherwise
             */
            resourceKey?: string;
            /** @deprecated */
            rotation?: number;
            /** @deprecated */
            rotationDegree?: number;
            /**
             * Size of the picked item in bytes. The value is not returned when the
             * item is uploaded during the Picker session.
             */
            sizeBytes?: number;
            /**
             * The item order in the upload session.
             */
            uploadId?: string;
            /**
             * The state of the upload.
             */
            uploadState?: string;
        }

        /**
         * `ParentDocumentObject` is an interface describing the attributes of a
         * parent folder for a selected item.
         */
        export type ParentDocumentObject = Pick<
            DocumentObject,
            | Document.DESCRIPTION
            | Document.LAST_EDITED_UTC
            | Document.MIME_TYPE
            | Document.NAME
            | Document.ICON_URL
            | Document.ID
            | Document.IS_NEW
            | Document.SERVICE_ID
            | Document.THUMBNAILS
            | Document.TYPE
            | Document.URL
        >;

        /**
         * `Thumbnail` is an enumerated type describing the fields of a
         * `ThumbnailObject`.
         */
        export enum Thumbnail {
            TYPE = "type",
            URL = "url",
            HEIGHT = "height",
            WIDTH = "width",
        }

        /**
         * `ThumbnailObject` is an interface describing the attributes of a photo
         * or video.
         */
        export interface ThumbnailObject {
            [Thumbnail.TYPE]: string;
            [Thumbnail.URL]: string;
            [Thumbnail.HEIGHT]: number;
            [Thumbnail.WIDTH]: number;
        }

        /**
         * Use `DocsUploadView` to upload files to Google Drive.
         */
        export class DocsUploadView {
            /**
             * Allows the user to select a folder in Google Drive to upload to.
             */
            setIncludeFolders(included: boolean): DocsUploadView;

            /**
             * Sets the upload destination to the specified folder. This overrides
             * `setIncludeFolders` to false.
             */
            setParent(parentId: string): DocsUploadView;
        }

        /**
         * An abstract class for all views.
         */
        export abstract class View {
            /**
             * Returns the `ViewId` of the view.
             */
            getId(): ViewId;

            /**
             * Sets the MIME types included in the view. Use commas to separate MIME
             * types if more than one is required. If you don't set MIME types, files
             * of all MIME types are displayed in the view.
             */
            setMimeTypes(mimeTypes: string): DocsView;

            /**
             * For views involving searches, prepopulate the search query with these
             * terms.
             */
            setQuery(query: string): View;
        }

        /**
         * Use `DocsView` to select files from Google Drive.
         */
        export class DocsView extends View {
            /**
             * @param viewId The `ViewId` must be one of the Google Drive views.
             *     Default is `ViewId.DOCS`.
             */
            constructor(viewId?: ViewId);

            /**
             * Show folders in the view items.  Do not combine with
             * `setOwnedByMe`. When `setIncludeFolders(true)` is
             * set, `setOwnedByMe` is ignored.
             */
            setIncludeFolders(included: boolean): DocsView;

            /**
             *  Allows the user to select a folder in Google Drive.
             */
            setSelectFolderEnabled(enabled: boolean): DocsView;

            /**
             * Selects which mode the view will use to display the documents.
             *
             * If using a scope other than `https://www.googleapis.com/auth/drive` or
             * `https://www.googleapis.com/auth/drive.readonly`, it is recommended to
             * use `DocsViewMode.LIST` as the user has not granted access to
             * thumbnails.
             */
            setMode(mode: DocsViewMode): DocsView;

            /**
             *  Filters the documents based on whether they are owned by the user, or
             * shared with the user. Do not combine this setting with
             * `setIncludeFolders`. When `setIncludeFolders(true)`
             * is set, `setOwnedByMe` is ignored.
             */
            setOwnedByMe(me?: boolean): DocsView;

            /**
             * Filters the documents based on whether they are starred by the user.
             */
            setStarred(starred: boolean): DocsView;

            /**
             * Shows shared drives and the files they contain. Before enabling, refer
             * to
             * {@link https://developers.google.com/drive/v3/web/enable-shareddrives |
             * GoogleDrive API documentation for enabling shared drives}.
             */
            setEnableDrives(enabled: boolean): DocsView;

            /**
             *  Sets the initial parent folder to display.
             */
            setParent(parentId: string): View;
        }

        /**
         * A `ViewGroup` is a visual grouping of views in the navigation pane.
         */
        export class ViewGroup {
            /**
             * @param viewOrId The root item of the ViewGroup itself must be view.
             */
            constructor(viewOrId: DocsView | ViewId);

            /** Add a label to this `ViewGroup`. */
            addLabel(label: string): ViewGroup;

            /**
             * Add a view to the `ViewGroup`. The view can be represented by a
             * view-derived object, or simply by `ViewId`.
             */
            addView(viewOrId: DocsView | ViewId): ViewGroup;

            /** Nest a `ViewGroup` within the current `ViewGroup`. */
            addViewGroup(viewGroup: ViewGroup): ViewGroup;
        }

        /**
         * `DocsViewMode` is an enumerated type for displaying data within
         * a DocsView. Use these values in calls to `DocsView.setMode`.
         *
         * If using a scope other than `https://www.googleapis.com/auth/drive` or
         * `https://www.googleapis.com/auth/drive.readonly`, it is recommended to
         * use `DocsViewMode.LIST` as the user has not granted access to thumbnails.
         */
        export enum DocsViewMode {
            /**
             *  Display documents in a thumbnail grid.
             */
            GRID = "grid",
            /** Display documents in a detailed list. */
            LIST = "list",
        }

        /**
         * `Feature` is an enumerated type, for turning on/off features for
         * various views. Use these values in calls to
         * `PickerBuilder.enableFeature` and
         * `PickerBuilder.disableFeature`.
         */
        export enum Feature {
            /**
             * Show only documents owned by the user when showing items from Google
             * Drive.
             */
            MINE_ONLY = "mineOnly",

            /** Allow user to choose more than one item. */
            MULTISELECT_ENABLED = "multiselectEnabled",

            /**
             * Hide the navigation pane. If the navigation pane is hidden, users can
             * only select from the first view chosen.
             */
            NAV_HIDDEN = "navHidden",

            /**
             * For photo uploads, controls whether per-photo `DocumentObject` (as
             * opposed to per-album) `DocumentObject` is enabled.
             */
            SIMPLE_UPLOAD_ENABLED = "simpleUploadEnabled",

            /**
             * Whether shared drive items are included in results.
             *
             * @deprecated Shared drive items are now included by default.
             */
            SUPPORT_DRIVES = "sdr",
        }

        /**
         * `ViewId` is an enumerated type for the various views available in the
         *  Picker. Use these values in calls to `DocsView` and
         * `PickerBuilder`.
         */
        export enum ViewId {
            /** All Google Drive document types. */
            DOCS = "all",
            /** Google Drive photos. */
            DOCS_IMAGES = "docs-images",
            /** Google Drive photos and videos. */
            DOCS_IMAGES_AND_VIDEOS = "docs-images-and-videos",
            /** Google Drive videos. */
            DOCS_VIDEOS = "docs-videos",
            /** Google Drive Documents. */
            DOCUMENTS = "documents",
            /** Google Drive Drawings. */
            DRAWINGS = "drawings",
            /** Google Drive Folders. */
            FOLDERS = "folders",
            /** Google Drive Forms. */
            FORMS = "forms",
            /** PDF files stored in Google Drive. */
            PDFS = "pdfs",
            /** Google Drive Presentations. */
            PRESENTATIONS = "presentations",
            /** Google Drive Spreadsheets. */
            SPREADSHEETS = "spreadsheets",
            /** @deprecated */
            IMAGE_SEARCH = "image-search",
            /** @deprecated */
            MAPS = "maps",
            /** @deprecated */
            PHOTO_ALBUMS = "photo-albums",
            /** @deprecated */
            PHOTO_UPLOAD = "photo-upload",
            /** @deprecated */
            PHOTOS = "photos",
            /** @deprecated */
            RECENTLY_PICKED = "recently-picked",
            /** @deprecated */
            VIDEO_SEARCH = "video-search",
            /** @deprecated */
            WEBCAM = "webcam",
            /** @deprecated */
            YOUTUBE = "youtube",
        }

        /**
         * The action type for the `ResponseObject`.
         */
        export enum Action {
            /** User canceled the Google Picker dialog. */
            CANCEL = "cancel",
            /** User has chosen at least one item. */
            PICKED = "picked",
            /** The Google Picker dialog has finished loading. */
            LOADED = "loaded",
            /** The Google Picker dialog has encountered an error. */
            ERROR = "error",
        }

        /**
         * `ServiceId` is an enumerated type used to describe the service the
         * item was selected from.
         */
        export enum ServiceId {
            DOCS = "docs",
        }

        /**
         * `Audience` is an enumerated type used to describe the audience of the
         * `DocumentObject`.
         */
        export enum Audience {
            LIMITED = "limited",
            DOMAIN_PUBLIC = "domainPublic",
            PUBLIC = "public",
            OWNER_ONLY = "ownerOnly",
        }

        /**
         * `Document` is an enumerated type used to describe the fields of a
         * `DocumentObject`.
         */
        export enum Document {
            ADDRESS_LINES = "addressLines",
            AUDIENCE = "audience",
            DESCRIPTION = "description",
            DURATION = "duration",
            EMBEDDABLE_URL = "embedUrl",
            ICON_URL = "iconUrl",
            ID = "id",
            IS_NEW = "isNew",
            LAST_EDITED_UTC = "lastEditedUtc",
            LATITUDE = "latitude",
            LONGITUDE = "longitude",
            MIME_TYPE = "mimeType",
            NAME = "name",
            NUM_CHILDREN = "numChildren",
            PARENT_ID = "parentId",
            PHONE_NUMBERS = "phoneNumbers",
            READ_ONLY = "readOnly",
            SERVICE_ID = "serviceId",
            THUMBNAILS = "thumbnails",
            TYPE = "type",
            URL = "url",
            VERSION = "version",
        }

        /**
         * `Response` is an enumerated type used to describe the fields of a
         * `ResponseObject`.
         */
        export enum Response {
            ACTION = "action",
            DOCUMENTS = "docs",
            PARENTS = "parents",
            VIEW = "viewToken",
        }

        /**
         * `ViewToken` is an enumerated type used to describe the elements of a
         * `ResponseObject.viewToken`.
         *
         * @example Basic usage
         *
         * ```ts
         * const viewToken = response.viewToken;
         * const viewId = viewToken[google.picker.ViewToken.VIEW_ID];
         * const label = viewToken[google.picker.ViewToken.LABEL];
         * const viewOptions = viewToken[google.picker.ViewToken.VIEW_OPTIONS];
         * ```
         */
        export enum ViewToken {
            VIEW_ID = 0,
            LABEL = 1,
            VIEW_OPTIONS = 2,
        }

        /**
         * The type of the selected item.
         */
        export enum Type {
            DOCUMENT = "document",
            PHOTO = "photo",
            VIDEO = "video",
        }

        // tslint:disable:class-as-namespace
        /**
         * `ResourceId` is a utility class for generating resource IDs for
         * documents.
         */
        export class ResourceId {
            /**
             * Generate a resource ID for a document.
             * @param document The document to generate a resource ID for.
             */
            static generate(document: DocumentObject): string;
        }
        // tslint:enable:class-as-namespace

        /**
         * The supported ISO 639 language codes for `PickerBuilder.setLocale`.
         */
        export type Locales =
            | "af"
            | "am"
            | "ar"
            | "bg"
            | "bn"
            | "ca"
            | "cs"
            | "da"
            | "de"
            | "el"
            | "en"
            | "en-GB"
            | "es"
            | "es-419"
            | "et"
            | "eu"
            | "fa"
            | "fi"
            | "fil"
            | "fr"
            | "fr-CA"
            | "gl"
            | "gu"
            | "hi"
            | "hr"
            | "hu"
            | "id"
            | "is"
            | "it"
            | "iw"
            | "ja"
            | "kn"
            | "ko"
            | "lt"
            | "lv"
            | "ml"
            | "mr"
            | "ms"
            | "nl"
            | "no"
            | "pl"
            | "pt-BR"
            | "pt-PT"
            | "ro"
            | "ru"
            | "sk"
            | "sl"
            | "sr"
            | "sv"
            | "sw"
            | "ta"
            | "te"
            | "th"
            | "tr"
            | "uk"
            | "ur"
            | "vi"
            | "zh-CN"
            | "zh-HK"
            | "zh-TW"
            | "zu";

        /**
         * @deprecated Use `ThumbnailObject` instead.
         * @ignore
         */
        export type DocumentThumbnailObject = ThumbnailObject;
    }
}
