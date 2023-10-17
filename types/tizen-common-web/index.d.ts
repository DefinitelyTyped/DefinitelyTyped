/**
 * The AccountInit dictionary represents options for creating accounts.
 * Attributes are not mandatory, and can be added and modified by accessing the
 * properties of account after the account is created.
 */
export interface AccountInit {
    iconUri?: string | undefined;
    userName?: string | undefined;
}
/**
 * This interface represents filter for defining period of time, which will be used as a condition in _getAppsUsageInfo_ method.
 *
 * The maximum retention period is 90 days.
 *
 * @since 4.0
 */
export interface ApplicationUsageFilter {
    /**
     * The attribute to store the date, which is used as an upper bound for selecting data.
     *
     * If only _endTime_ attribute is given, data will be accumulated from 90 days ago to _endTime_ date.
     */
    endTime?: Date | null | undefined;
    /**
     * The attribute to store the date, which is used as a lower bound for selecting data.
     *
     * If only _startTime_ attribute is given, by default _endTime_ is equal to the current date.
     * If _startTime_ date predates the 90 days from the current time, data will be accumulated from last 90 days.
     */
    startTime?: Date | null | undefined;
    /**
     * The attribute to store period of time, from which data is accumulated, in days.
     * The period of time begins _timeSpan_ days ago and ends with current date.
     *
     * If the attribute is given, the attributes _startTime_ and _endTime_ of this interface are not taken into an account.
     * If _timeSpan_ is greater than 90, 90 will be used instead.
     */
    timeSpan?: number | null | undefined;
}
/**
 * The ArchiveFileEntryOptions dictionary controls behavior when adding a file to an archive.
 */
export interface ArchiveFileEntryOptions {
    /**
     * Compression level.
     *
     * @remark The default compression level is NORMAL.
     */
    compressionLevel?: ArchiveCompressionLevel | undefined;
    /**
     * Path where _ArchiveFileEntry_ should be stored in an archive file.
     *
     * @remark If destination is not set, then the root directory of archive will be used (equivalent to destination = "").
     */
    destination?: string | undefined;
    /**
     * Controls whether leading directory information is stripped from the source file name before storing.
     *
     * The virtual root is always removed.
     * To omit all the remaining directory names, set _stripSourceDirectory_ to true.
     *
     * \* Target file name when _destination_ is "mypackage"
     *
     * | Source file name |stripSourceDirectory: true|stripSourceDirectory: false|
     * | ----- | ----- | ----- |
     * |documents/tizen/archive/example/test.js     |mypackage/test.js |mypackage/tizen/archive/example/test.js |
     * |wgt-private/test/js/main.js |mypackage/main.js |mypackage/test/js/main.js |
     * |downloads/test.c     |mypackage/test.c |mypackage/test.c |
     *
     * @remark The default value is false.
     */
    stripSourceDirectory?: boolean | undefined;
}
/**
 * The ArchiveFileOptions dictionary represents the option to decide if an archive file can be overwritten when an archive file is opened.
 */
export interface ArchiveFileOptions {
    /**
     * Indicates whether opening an archive file for writing can overwrite the contents of the existing file.
     *
     * *   true - The archive file is overwritten if an archive file with a same name exists in the same location. The previous contents are lost.
     * *   false - The archive file is not overwritten if an archive file with a same name exists in the same location.
     *
     * The default value is false
     *
     * See description of the _mode_ argument of the _open()_ method.
     */
    overwrite?: boolean | undefined;
}
/**
 * The EventInfo dictionary identifies an event with information such as event name. If it is an user event, the broadasting application's identifier is also specified.
 *
 * System events do not require an application identifier to be specified. If one is specified, the event will be interpreted as an user event.
 *
 * @since 2.4
 */
export interface EventInfo {
    /**
     * The unique identifier of the application which is broadcasting an event.
     *
     * An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, when broadcasting an event, this dictionary member must be the identifier of the application which is broadcasting the event.
     *
     * System events do not require an application identifier to be specified. If one is specified, the event will be interpreted as an user event.
     */
    appId?: ApplicationId | undefined;
    /**
     * Name which describes the event.
     *
     * Must only contain the ASCII characters "\[A-Z\]\[a-z\]\[0-9\]\_" and may not begin with a digit.
     * Must be at least 1 byte in length and not exceed the maximum name length of 127 bytes.
     */
    name?: string | undefined;
}
/**
 * Dictionary for specifying _ExifInformation_ attributes upon _ExifInformation_ creation.
 *
 * This dictionary is used to input parameters when _ExifInformation_ is created.
 * For description of attributes please see the corresponding attributes in the _ExifInformation_ interface.
 */
export interface ExifInit {
    deviceMaker?: string | undefined;
    deviceModel?: string | undefined;
    exposureProgram?: ExposureProgram | undefined;
    exposureTime?: string | undefined;
    fNumber?: number | undefined;
    flash?: boolean | undefined;
    focalLength?: number | undefined;
    gpsAltitude?: number | undefined;
    gpsLocation?: SimpleCoordinates | undefined;
    gpsProcessingMethod?: string | undefined;
    gpsTime?: Date | undefined;
    height?: number | undefined;
    isoSpeedRatings?: number[] | undefined;
    orientation?: ImageContentOrientation | undefined;
    originalTime?: Date | undefined;
    uri?: string | undefined;
    userComment?: string | undefined;
    whiteBalance?: WhiteBalanceMode | undefined;
    width?: number | undefined;
}
/**
 * The dictionary that defines attributes to filter the items returned by the [listDirectory()](#FileSystemManager::listDirectory) method (or deprecated [listFiles()](#File::listFiles)).
 * When this dictionary is passed to a method, the result-set of the method will only contain file item entries that match
 * the attribute values of the filter.
 *
 * A file item only matches the _FileFilter_ object if all of the defined filter's attribute values match all of the file item's attributes
 * (only matching values other than undefined or null). This is similar to a SQL's "AND" operation.
 *
 * An attribute of the file entry matches the _FileFilter_ attribute value in accordance with the
 * following rules:
 *
 * *   For _FileFilter_ attributes of type DOMString, an entry matches this value only if its corresponding attribute is an exact match. If the filter contains U+0025 "PERCENT SIGN" it is interpreted as a wildcard character and "%" matches any string of any length, including no length. If wildcards are used, the behavior is similar to the LIKE condition in SQL. To specify that a "PERCENT SIGN" character is to be considered literally instead of interpreting it as a wildcard, developers can escape it with the backslash character (\\\\). Please, remember that the backslash character has to be escaped itself, to not to be removed from the string - proper escaping of the "PERCENT SIGN" in JavaScript string requires preceding it with double backslash ("\\\\\\\\%").
 * The matching is not case sensitive, such as "FOO" matches a "foo" or an "f%" filter.
 * *   For File entry attributes of type Date, attributes start and end are included to allow filtering of File entries between two supplied dates. If either or both of these attributes are specified, the following rules apply:
 * A) If both start and end dates are specified (that is, other than null), a File entry matches the filter if its corresponding attribute is the same as either start or end or between the two supplied dates (that is, after start and before end).
 * B) If only the start attribute contains a value (other than null), a File entry matches the filter if its corresponding attribute is later than or equal to the start one.
 * C) If only the end date contains a value (other than null), a file matches the filter if its corresponding attribute is earlier than or equal to the end date.
 */
export interface FileFilter {
    /**
     * The File created attribute filter.
     *
     * Files with created date earlier than this attribute or equal to it match the filtering criteria.
     */
    endCreated?: Date | undefined;
    /**
     * The File modified attribute filter.
     *
     * Files with modified date earlier than this attribute or equal to it match the filtering criteria.
     */
    endModified?: Date | undefined;
    /**
     * If true match only directories, If false do not match directories.
     * May be undefined.
     *
     * @since 5.0
     */
    isDirectory?: boolean | undefined;
    /**
     * If true match only files. If false do not match files.
     * May be undefined.
     *
     * @since 5.0
     */
    isFile?: boolean | undefined;
    /**
     * The File name attribute filter.
     *
     * Files that have a name that corresponds with this attribute (either exactly or with the specified wildcards) match this filtering criteria.
     */
    name?: string | undefined;
    /**
     * The File created attribute filter.
     *
     * Files with created date later than this attribute or equal to it match the filtering criteria.
     */
    startCreated?: Date | undefined;
    /**
     * The File modified attribute filter.
     *
     * Files with modified date later than this attribute or equal to it match the filtering criteria.
     */
    startModified?: Date | undefined;
}
/**
 * The KeyManagerAlias dictionary identifies items in the KeyManager.
 */
export interface KeyManagerAlias {
    /**
     * Flag indicating whether key is password-protected. This property is set only when returning object by
     * [getDataAliasList()](#KeyManager::getDataAliasList) method.
     * In other methods which use this dictionary, the value is ignored.
     *
     * Possible values:
     *
     * *   true - data under the alias is password-protected,
     * *   false - data under the alias is not password-protected.
     *
     * @since 5.5
     */
    isProtected?: boolean | undefined;
    /**
     * Name which describes the item.
     *
     * If this attribute contains any spaces, the spaces will be removed. Characters which are separated by spaces will be concatenated.
     */
    name?: string | undefined;
    /**
     * Package ID of the application which saved the item into the KeyManager.
     */
    packageId?: PackageId | undefined;
}
/**
 * The MediaControllerMetadataInit dictionary defines the properties of a MediaControllerMetadata to add in addItem method.
 *
 * See [MediaControllerMetadata](#MediaControllerMetadata) interface for more information about the members.
 *
 * @since 5.5
 */
export interface MediaControllerMetadataInit {
    album?: string | undefined;
    artist?: string | undefined;
    author?: string | undefined;
    copyright?: string | undefined;
    date?: string | undefined;
    description?: string | undefined;
    duration?: string | undefined;
    episodeNumber?: number | undefined;
    episodeTitle?: string | undefined;
    genre?: string | undefined;
    picture?: string | undefined;
    resolutionHeight?: number | undefined;
    resolutionWidth?: number | undefined;
    seasonNumber?: number | undefined;
    seasonTitle?: string | undefined;
    title?: string | undefined;
    trackNum?: string | undefined;
}
/**
 * The dictionary that specifies the byte stream data item that is transferred.
 *
 * @since 3.0
 */
export interface MessagePortByteStreamDataItem {
    key?: string | undefined;
    value?: ByteStreamDataItemValue | undefined;
}
/**
 * The dictionary that specifies the string data item that is transferred.
 *
 * @since 3.0
 */
export interface MessagePortStringDataItem {
    key?: string | undefined;
    value?: StringDataItemValue | undefined;
}
/**
 * The Query dictionary provides a query.
 */
export interface Query {
    /**
     * The query filter consists of key and string data.
     */
    filter?: any;
    /**
     * The resource interface specified as a filter for the resource.
     */
    resourceInterface?: ResourceInterface | null | undefined;
    /**
     * The resource type specified as a filter for the resource.
     */
    resourceType?: ResourceType | null | undefined;
}
/**
 * The ResourcePolicy dictionary specifies resource attributes upon resource creation.
 *
 * This dictionary is used to input parameters when resources are created.
 */
export interface ResourcePolicy {
    /**
     * Indicates resource initialized and activated.
     *
     * The default value is false
     */
    isActive?: boolean | undefined;
    /**
     * Indicates resource that is allowed to be discovered.
     *
     * The default value is true
     */
    isDiscoverable?: boolean | undefined;
    /**
     * When this value is set true, the resource is allowed to be discovered only if discovery request contains an explicit query string.
     *
     * The default value is false
     */
    isExplicitDiscoverable?: boolean | undefined;
    /**
     * Indicates resource that is allowed to be observed.
     *
     * The default value is false
     */
    isObservable?: boolean | undefined;
    /**
     * Indicates secure resource.
     *
     * The default value is false
     */
    isSecure?: boolean | undefined;
    /**
     * Indicates resource which takes some delay to respond.
     *
     * The default value is false
     */
    isSlow?: boolean | undefined;
}
/**
 * The dictionary represents RowData holding 1 row of SQL selection results from another application.
 */
export interface RowData {
    /**
     * An attribute to hold column names to select, update, and insert.
     */
    columns?: string[] | undefined;
    /**
     * An attribute to hold values of columns to select, update, and insert.
     */
    values?: string[] | undefined;
}
/**
 * An object containing the various options for fetching the properties requested.
 *
 * The highThreshold and lowThreshold values are only applicable to the following _SystemInfoPropertyId_.
 *
 * *   SystemInfoBattery - level: _from 0 to 1_
 * *   SystemInfoCpu - load: _from 0 to 1_
 * *   SystemInfoDisplay - brightness: _from 0 to 1_
 *
 * For other cases, it is ignored.
 */
export interface SystemInfoOptions {
    /**
     * An attribute to indicate that the _successCallback()_ method in the watch
     *
     * operation will be triggered only if the device property is a number and its value is greater than or equal to this number.
     * This attribute has no effect on the _get()_ method.
     */
    highThreshold?: number | undefined;
    /**
     * An attribute to indicate that the _successCallback()_ method in the watch operation must be triggered only if the property is a number and its value is lower than or equal to this number.
     *
     * If both _highThreshold_ and _lowThreshold_ parameters are specified, the _successCallback()_ is triggered if and only if the property value is either lower than the value of _lowThreshold_ or higher than the value of _highThreshold_.
     * This attribute has no effect on the get method.
     */
    lowThreshold?: number | undefined;
    /**
     * The number of milliseconds beyond which the operation must be interrupted.
     */
    timeout?: number | undefined;
}
/**
 * The AccountChangeCallback interface defines callbacks for getting notified about account changes.
 */
export interface AccountChangeCallback {
    /**
     * Called when an account is added.
     *
     * @param account Added account information.
     */
    onadded(account: Account): void;
    /**
     * Called when an account is removed.
     *
     * @param accountId ID of the removed account.
     */
    onremoved(accountId: AccountId): void;
    /**
     * Called when an account is updated.
     *
     * @param account Updated account information.
     */
    onupdated(account: Account): void;
}
/**
 * The ApplicationControlDataArrayReplyCallback callback specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
 *
 * This callback interface specifies two methods:
 *
 * *   _onsuccess()_ - Invoked if the callee application calls _RequestedApplicationControl.replyResult()_.
 * *   _onfailure()_ - Invoked if the callee application calls _RequestedApplicationControl.replyFailure()_.
 *
 * @since 2.0
 */
export interface ApplicationControlDataArrayReplyCallback {
    /**
     * Called when the callee application calls _RequestedApplicationControl.replyFailure()_.
     */
    onfailure(): void;
    /**
     * Called when the callee application calls _RequestedApplicationControl.replyResult()_.
     *
     * @param data An array of _ApplicationControlData_ objects.
     */
    onsuccess(data?: ApplicationControlData[] | null): void;
}
/**
 * \* This callback interface specifies methods that are invoked when an application is installed, updated, or uninstalled.
 */
export interface ApplicationInformationEventCallback {
    /**
     * Called when an application is installed.
     *
     * @param info The information of the updated application.
     */
    oninstalled(info: ApplicationInformation): void;
    /**
     * Called when an application is uninstalled.
     *
     * @param id The ID of the uninstalled application.
     */
    onuninstalled(id: ApplicationId): void;
    /**
     * Called when an application is updated.
     *
     * @param info The information of the updated application.
     */
    onupdated(info: ApplicationInformation): void;
}
/**
 * This interface specifies a set of methods that are invoked every time a content change occurs.
 *
 * @since 2.1
 */
export interface ContentChangeCallback {
    /**
     * Called when content is added.
     *
     * @param content The content to add.
     */
    oncontentadded(content: Content): void;
    /**
     * Called when a content directory is added.
     *
     * @since 2.4
     *
     * @param contentDir The added content directory.
     */
    oncontentdiradded(contentDir: ContentDirectory): void;
    /**
     * Called when a content directory is removed.
     *
     * @since 2.4
     *
     * @param id The ID of removed content directory.
     */
    oncontentdirremoved(id: ContentDirectoryId): void;
    /**
     * Called when a content directory is updated.
     *
     * @since 2.4
     *
     * @param contentDir The content directory after the update operation.
     */
    oncontentdirupdated(contentDir: ContentDirectory): void;
    /**
     * Called when content is removed.
     *
     * @param id The ID of removed content.
     */
    oncontentremoved(id: ContentId): void;
    /**
     * Called when content is updated.
     *
     * @param content The content to update.
     */
    oncontentupdated(content: Content): void;
}
/**
 * The DownloadCallback defines notification callbacks for a download state change or progress.
 */
export interface DownloadCallback {
    /**
     * Called when the download operation is canceled by the _cancel()_ method.
     *
     * @param downloadId The ID of the corresponding download operation.
     */
    oncanceled(downloadId: number): void;
    /**
     * Called when the download operation is completed with the final full path or virtual path.
     * If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
     *
     * @param downloadId The ID of the corresponding download operation.
     * @param path The final full path or virtual path for the downloaded file.
     */
    oncompleted(downloadId: number, path: string): void;
    /**
     * Called when the download operation fails.
     *
     * @param downloadId The ID of the corresponding download operation.
     * @param error The reason for download failure.
     */
    onfailed(downloadId: number, error: WebAPIError): void;
    /**
     * Called when the download operation is paused by the _pause()_ method.
     *
     * @param downloadId The ID of the corresponding download operation.
     */
    onpaused(downloadId: number): void;
    /**
     * Called when a download is successful and it is called multiple times as the download progresses.
     * The interval between the _onprogress()_ callback is platform-dependent. When the download is started, the _receivedSize_ can be 0.
     *
     * @param downloadId The ID of the corresponding download operation.
     * @param receivedSize The size of data received in bytes.
     * @param totalSize The total size of data to receive in bytes.
     */
    onprogress(downloadId: number, receivedSize: number, totalSize: number): void;
}
/**
 * Interface for handling ability events.
 * @since 5.5
 */
export interface MediaControllerAbilityChangeCallback {
    /**
     * Event triggered when server's display mode ability is updated.
     *
     * @param server Server which triggered the event.
     * @param abilities Object with current state of display mode abilities on the media controller server.
     */
    ondisplaymodeabilitychanged(
        server: MediaControllerServerInfo,
        abilities: MediaControllerDisplayModeAbilitiesInfo,
    ): void;
    /**
     * Event triggered when server's display rotation is updated.
     *
     * @param server Server which triggered the event.
     * @param abilities Object with current state of display mode abilities on the media controller server.
     */
    ondisplayrotationabilitychanged(
        server: MediaControllerServerInfo,
        abilities: MediaControllerDisplayRotationAbilitiesInfo,
    ): void;
    /**
     * Event triggered when server's playback ability is updated.
     *
     * @param server Server which triggered the event.
     * @param abilities Object with current state of playback abilities on the media controller server.
     */
    onplaybackabilitychanged(server: MediaControllerServerInfo, abilities: MediaControllerPlaybackAbilitiesInfo): void;
    /**
     * Event triggered when server's simple ability is updated.
     *
     * @param server Server which triggered the event.
     * @param type Type of simple ability.
     * @param support Ability value which was set on the media controller server.
     */
    onsimpleabilitychanged(
        server: MediaControllerServerInfo,
        type: MediaControllerSimpleAbility,
        support: MediaControllerAbilitySupport,
    ): void;
}
/**
 * The MediaControllerChangeRequestPlaybackInfoCallback interface that defines the listeners
 * object for receiving playback info change requests from client.
 */
export interface MediaControllerChangeRequestPlaybackInfoCallback {
    /**
     * Called when client request change of playback item.
     *
     * @since 5.5
     *
     * @param playlistName Name of playlist.
     * @param index Index of the item to be changed.
     * @param state Playback state.
     * @param position Playback position.
     * @param clientName Id of client application, which sent a command.
     */
    onplaybackitemrequest(
        playlistName: string,
        index: string,
        state: MediaControllerPlaybackState,
        position: number,
        clientName: ApplicationId,
    ): void;
    /**
     * Called when client requested playback position changes.
     *
     * @param position Requested playback position.
     * @param clientName Id of client application, which sent a command.
     *
     * @remark Parameter _clientName_ is passed since Tizen 5.5.
     */
    onplaybackpositionrequest(position: number, clientName: ApplicationId): void;
    /**
     * Called when client requested playback state changes.
     *
     * @param state Requested playback state.
     * @param clientName Id of client application, which sent a command.
     *
     * @remark Parameter _clientName_ is passed since Tizen 5.5.
     */
    onplaybackstaterequest(state: MediaControllerPlaybackState, clientName: ApplicationId): void;
    /**
     * Called when client requested repeat mode changes.
     *
     * @note _deprecated_ 5.5 Deprecated since 5.5. Instead, use [onrepeatstaterequest](#MediaControllerChangeRequestPlaybackInfoCallback::onrepeatstaterequest).
     *
     * @remark The [onrepeatmoderequest](#MediaControllerChangeRequestPlaybackInfoCallback::onrepeatmoderequest) callback
     * will not be invoked, if the [repeatState](#MediaControllerPlaybackInfo::repeatState) is requested to be changed to REPEAT\_ONE.
     *
     * @param mode Requested repeat mode.
     * @param clientName Client application id which sent command.
     *
     * @remark Parameter _clientName_ is passed since Tizen 5.5.
     */
    onrepeatmoderequest(mode: boolean, clientName: ApplicationId): void;
    /**
     * Called when client requested change of repeat state.
     *
     * @since 5.5
     *
     * @param state Requested repeat state.
     * @param clientName Id of client application, which sent a command.
     *
     * It is guaranteed that the [onrepeatstaterequest](#MediaControllerChangeRequestPlaybackInfoCallback::onrepeatstaterequest) callback
     * will be invoked after the [onrepeatmoderequest](#MediaControllerChangeRequestPlaybackInfoCallback::onrepeatmoderequest).
     */
    onrepeatstaterequest(state: MediaControllerRepeatState, clientName: ApplicationId): void;
    /**
     * Called when client requested shuffle mode changes.
     *
     * @param mode Requested shuffle mode.
     * @param clientName Id of client application, which sent a command.
     *
     * @remark Parameter _clientName_ is passed since Tizen 5.5.
     */
    onshufflemoderequest(mode: boolean, clientName: ApplicationId): void;
}
/**
 * The MediaControllerPlaybackInfoChangeCallback interface that defines the listeners
 * object for receiving media controller playback info changes from server.
 */
export interface MediaControllerPlaybackInfoChangeCallback {
    /**
     * Called when playback metadata is changed.
     *
     * @param metadata Current playback metadata.
     */
    onmetadatachanged(metadata: MediaControllerMetadata): void;
    /**
     * Called when playback state or position is changed.
     *
     * @param state Current playback state.
     * @param position Current playback position.
     */
    onplaybackchanged(state: MediaControllerPlaybackState, position: number): void;
    /**
     * Called when repeat mode is changed.
     *
     * @note _deprecated_ 5.5 Deprecated since 5.5. Instead, use [onrepeatstatechanged](#MediaControllerPlaybackInfoChangeCallback::onrepeatstatechanged).
     *
     * @param mode Current repeat mode.
     *
     * @remark The [onrepeatmodechanged](#MediaControllerPlaybackInfoChangeCallback::onrepeatmodechanged) callback
     * will not be invoked, if the [repeatState](#MediaControllerPlaybackInfo::repeatState) is changed to REPEAT\_ONE.
     */
    onrepeatmodechanged(mode: boolean): void;
    /**
     * Called when repeat state is changed.
     *
     * It is guaranteed that the [onrepeatstatechanged](#MediaControllerPlaybackInfoChangeCallback::onrepeatstatechanged) callback
     * will be invoked after the [onrepeatmodechanged](#MediaControllerPlaybackInfoChangeCallback::onrepeatmodechanged).
     *
     * @since 5.5
     *
     * @param state Current repeat state.
     */
    onrepeatstatechanged(state: MediaControllerRepeatState): void;
    /**
     * Called when shuffle mode is changed.
     *
     * @param mode Current shuffle mode.
     */
    onshufflemodechanged(mode: boolean): void;
}
/**
 * Interface for specific playlist update events (including deletion).
 * @since 5.5
 */
export interface MediaControllerPlaylistUpdatedCallback {
    /**
     * Event triggered when playlist is removed from database.
     *
     * @param serverName Name of server which triggered the event.
     * @param playlistName Name of playlist for which the event was triggered.
     */
    onplaylistdeleted(serverName: string, playlistName: string): void;
    /**
     * Event triggered when playlist is updated in database.
     *
     * @param serverName Name of server which triggered the event.
     * @param playlist Playlist for which event was triggered.
     */
    onplaylistupdated(serverName: string, playlist: MediaControllerPlaylist): void;
}
/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 */
export interface PackageInformationEventCallback {
    /**
     * Called when a package is installed.
     *
     * @param info The information of the installed package.
     */
    oninstalled(info: PackageInformation): void;
    /**
     * Called when a package is uninstalled.
     *
     * @param id The ID of the uninstalled package.
     */
    onuninstalled(id: PackageId): void;
    /**
     * Called when a package is updated.
     *
     * @param info The information of the updated package.
     */
    onupdated(info: PackageInformation): void;
}
/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 */
export interface PackageProgressCallback {
    /**
     * Called when the request is completed.
     *
     * @param id The package ID.
     */
    oncomplete(id: PackageId): void;
    /**
     * Called while the request is in progress.
     *
     * @param id The package ID.
     * @param progress The progress in percentage.
     */
    onprogress(id: PackageId, progress: number): void;
}
/**
 * The RequestCallback interface that defines the success method to be invoked when a client request is received.
 *
 * @remark Example of using can be find at [setRequestListener](iotcon.html#Resource::setRequestListener) code example.
 */
export interface RequestCallback {
    /**
     * Called when DELETE request was received.
     *
     * @param request That is request from server side.
     */
    ondelete(request: Request): void;
    /**
     * Called when GET request was received.
     *
     * @param request That is request from server side.
     */
    onget(request: Request): void;
    /**
     * Called when OBSERVE request was received.
     *
     * @param request That is request from server side.
     * @param observeType The observation type of the request.
     * @param observeId The observation id of the request.
     */
    onobserving(request: Request, observeType: ObserveType, observeId: number): void;
    /**
     * Called when POST request was received.
     *
     * @param request That is request from server side.
     */
    onpost(request: Request): void;
    /**
     * Called when PUT request was received.
     *
     * @param request That is request from server side.
     */
    onput(request: Request): void;
}
/**
 * This is a common interface used by different types of
 * object filters.
 *
 * Never use this base interface directly, instead use _AbstractFilter_ subtypes,
 * such as _AttributeFilter_, _AttributeRangeFilter_, and _CompositeFilter_.
 */
export class AbstractFilter { // tslint:disable-line:no-unnecessary-class
    constructor();
}
/**
 * The Account interface is the interface for a single account.
 * The implementation should manage authentication, storing eventual user
 * credentials, presenting password dialogs, and so on.
 *
 * The information is hidden from web applications.
 */
export class Account {
    constructor(provider: AccountProvider, accountInitDict?: AccountInit | null);
    /**
     * Name, identifier or URI of the icon.
     * By default, this attribute is set to null.
     */
    iconUri: string | null;
    /**
     * Identifier for the account.
     * By default, this attribute is set to null.
     */
    readonly id: AccountId | null;
    /**
     * Reference to the provider.
     * There is one provider for each account.
     * A given provider can be referenced from many accounts.
     */
    readonly provider: AccountProvider;
    /**
     * Account user name.
     * By default, this attribute is set to null.
     */
    userName: string | null;
    /**
     * Gets the extended data for the account as an array, asynchronously.
     * Returns an empty array if there is no extended data.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param successCallback Callback method that is invoked when an asynchronous call completes successfully.
     * @param errorCallback Callback method that is invoked when an error occurs.
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type NotFoundError, if account ID is null.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getExtendedData(key: string): string;
    getExtendedData(
        successCallback: AccountExtendedDataArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Adds the specified key and value to the extended data.
     *
     * If the specified key already exists, the corresponding value is overwritten with the specified value.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.write
     *
     * @param key Key of the extended data.
     * @param value Value of the extended data.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type NotFoundError, if account ID is null.
     */
    setExtendedData(key: string, value: string): void;
}
export interface AccountConstructor {
    prototype: Account;
    new(provider: AccountProvider, accountInitDict?: AccountInit | null): Account;
}
/**
 * The AccountExtendedData interface defines the extended data of an account.
 */
export interface AccountExtendedData {
    /**
     * Name (key) of the account extended data item.
     *
     * @since 2.3
     */
    readonly key: string;
    /**
     * Value of the account extended data item.
     */
    readonly value: string;
}
/**
 * The AccountManager interface provides configuration functionality for
 * providers and accounts.
 */
export interface AccountManager {
    /**
     * Adds an account to the account database.
     *
     * If the account is added successfully, an accountId and provider are newly assigned when the function returns.
     *
     * This method can be used only by an account provider application.
     * If the application is registered as provider, it will be launched to authenticate the account.
     * You should implement the appcontrol for the account provider.
     * For more details, see
     * [Account Provider](/application/web/guides/personal/account#retrieving-providers)
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.write
     *
     * @param account Account object to be added.
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    add(account: Account): void;
    /**
     * Adds an account listener for watching changes to accounts.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param callback Callback method that is invoked for the events about accounts such as adding or removing an account.
     * @returns Identifier to clear the watch subscription for account changes.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addAccountListener(callback: AccountChangeCallback): number;
    /**
     * Gets the Account object with the given identifier.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param accountId Account identifier.
     * @returns Object with the given identifier or null.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getAccount(accountId: AccountId): Account | null;
    /**
     * Gets the accounts associated with the provider that has a specified applicationId, asynchronously.
     * If you want to get all accounts, omit the applicationId argument.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param successCallback Callback method that is invoked when an asynchronous call completes successfully.
     * @param errorCallback Callback method that is invoked when an error occurs.
     * @param applicationId ApplicationId of the provider application.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getAccounts(
        successCallback: AccountArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
        applicationId?: string | null,
    ): void;
    /**
     * Gets the account provider with the given application identifier.
     *
     * You can register your application as an account provider by writing account related information in config.xml.
     * For more details, see
     * [Account Provider](/application/web/guides/personal/account#retrieving-providers)
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param applicationId Identifier of the account provider application.
     * @returns Object with the given applicationId or null.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getProvider(applicationId: ApplicationId): AccountProvider | null;
    /**
     * Gets the providers with the given capabilities, asynchronously.
     * If you want to get all the providers, omit the capability argument.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param successCallback Callback method that is invoked when an asynchronous call completes successfully.
     * @param errorCallback Callback method that is invoked when an error occurs.
     * @param capability Predefined capability or the vendor-specific capability in IRI format.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getProviders(
        successCallback: AccountProviderArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
        capability?: string | null,
    ): void;
    /**
     * Removes an account from the account database.
     *
     * Removes the account in the database that corresponds to the specified identifier.
     * The function will throw an exception if it failed to remove the specified account.
     *
     * This method can be used by an account provider application.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.write
     *
     * @param accountId Identifier of the account to remove.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    remove(accountId: AccountId): void;
    /**
     * Removes the previously registered listener.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.read
     *
     * @param accountListenerId Identifier of the listener for the account changes.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    removeAccountListener(accountListenerId: number): void;
    /**
     * Updates an account.
     *
     * This method can be used only an account provider application.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/account.write
     *
     * @param account Account object to update.
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    update(account: Account): void;
}
/**
 * The AccountProvider interface represents a service provider, such as Google, Yahoo or Vodafone.
 */
export interface AccountProvider {
    /**
     * Identifier of the account provider application.
     */
    readonly applicationId: ApplicationId;
    /**
     * Capabilities of the account provider defined in IRI format.
     *
     * The following predefined capabilities can be used.
     *
     * *   http://tizen.org/account/capability/contact - Used when the account is related to contacts
     * *   http://tizen.org/account/capability/calendar - Used when the account is related to calendar
     */
    readonly capabilities: ReadonlyArray<string>;
    /**
     * Logical (translatable) display name.
     */
    readonly displayName: string;
    /**
     * Path to the icon representing the account provider.
     */
    readonly iconUri: string;
    /**
     * Boolean value that indicates whether multiple accounts are supported.
     */
    readonly isMultipleAccountSupported: boolean;
    /**
     * Path to the small icon representing the account provider.
     */
    readonly smallIconUri: string;
}
/**
 * The Alarm interface is an abstract interface for alarm types.
 */
export class Alarm {
    constructor();
    /**
     * The alarm identifier.
     */
    readonly id: AlarmId | null;
}
export interface AlarmConstructor {
    prototype: Alarm;
    new(): Alarm;
}
/**
 * The AlarmAbsolute interface provides an absolute alarm, which triggers at a specified absolute date.
 *
 * If a _period_ is provided, the alarm keeps triggering for the given interval. If the _daysOfTheWeek_ array is not empty, the alarm triggers every week, for the given days, at the time defined by the _date_ attribute.
 */
export class AlarmAbsolute extends Alarm {
    constructor(date: Date); // tslint:disable-line:unified-signatures
    constructor(date: Date, daysOfTheWeek: ByDayValue[]); // tslint:disable-line:unified-signatures
    constructor(date: Date, period: number); // tslint:disable-line:unified-signatures
    /**
     * An attribute to store the absolute date/time when the alarm is initially triggered.
     *
     * This attribute is precise to the second. Milliseconds will be ignored.
     */
    readonly date: Date;
    /**
     * An attribute to store the days of the week associated with the recurrence rule.
     *
     * By default, this attribute is set to an empty array.
     * The _period_ and _daysOfTheWeek_ attributes are mutually exclusive.
     */
    readonly daysOfTheWeek: ReadonlyArray<ByDayValue>;
    /**
     * An attribute to store the duration in seconds between each trigger of the alarm.
     *
     * By default, this attribute is set to null, indicating that this alarm does not repeat.
     * The _period_ and _daysOfTheWeek_ attributes are mutually exclusive.
     * @note _deprecated_ 4.0 Since Tizen 4.0 constructor AlarmAbsolute(Date date, long period) is deprecated, thus this attribute should not be used.
     */
    readonly period: number | null;
    /**
     * Returns the date / time of the next alarm trigger.
     *
     * If the alarm has expired, this method returns null. The returned date is precise to the second.
     *
     * @returns The date/time of the next alarm trigger.
     *
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    getNextScheduledDate(): Date | null;
}
export interface AlarmAbsoluteConstructor {
    prototype: AlarmAbsolute;
    new(date: Date): AlarmAbsolute; // tslint:disable-line:unified-signatures
    new(date: Date, daysOfTheWeek: ByDayValue[]): AlarmAbsolute; // tslint:disable-line:unified-signatures
    new(date: Date, period: number): AlarmAbsolute; // tslint:disable-line:unified-signatures
}
/**
 * The AlarmManager interface provides methods to manage alarms.
 */
export interface AlarmManager {
    /**
     * Adds an alarm to the storage.
     *
     * Sets an alarm with the application ID to be run. You should definitely provide the application ID to run
     * and the [application control](/application/web/guides/app-management/app-controls#application-control-request) information if it is necessary.
     * For more information about the application control, see [The Application API](application.html).
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/alarm
     *
     * @param alarm An alarm to add. It can be either _AlarmRelative_ or _AlarmAbsolute_.
     * @param applicationId The application ID to run when the alarm is triggered.
     * @param appControl The data structure describing application control details.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter does not contain a valid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    add(alarm: Alarm, applicationId: ApplicationId, appControl?: ApplicationControl | null): void;
    /**
     * Returns an alarm as per the specified identifier.
     *
     * @param id The alarm ID to retrieve.
     *
     * @returns An alarm object with the specified ID.
     *
     * @throws WebAPIException with error type NotFoundError, if this alarm identifier cannot be found in the storage.
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter does not contain a valid value.
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    get(id: AlarmId): Alarm;
    /**
     * Retrieves all alarms in an application storage.
     *
     * Alarms that have already been triggered are removed automatically from the storage.
     *
     * @returns All Alarm objects.
     *
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    getAll(): ReadonlyArray<Alarm>;
    /**
     * Removes an alarm from the storage.
     *
     * If an alarm goes off, it will be removed from the storage automatically.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/alarm
     *
     * @param id The ID of the alarm to remove.
     *
     * @throws WebAPIException with error type NotFoundError, if this alarm identifier cannot be found in the storage.
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter does not contain a valid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    remove(id: AlarmId): void;
    /**
     * Removes all alarms added by an application.
     *
     * Because each application has its own alarm storage, this method removes alarms only added by the calling application.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/alarm
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    removeAll(): void;
    /**
     * The period of a day.
     * It defines the number of seconds per day.
     */
    readonly PERIOD_DAY: 86400;
    /**
     * The period of an hour.
     * It defines the number of seconds per hour.
     */
    readonly PERIOD_HOUR: 3600;
    /**
     * The period of a minute.
     * It defines the number of seconds per minute.
     */
    readonly PERIOD_MINUTE: 60;
    /**
     * The period of a week.
     * It defines the number of seconds in a week.
     */
    readonly PERIOD_WEEK: 604800;
}
/**
 * The AlarmRelative interface provides the relative alarm, which occurs at a fixed interval in future.
 *
 * This alarm triggers after a duration mentioned in the _delay_ attribute from the moment the alarm is added.
 * If a _period_ is provided, the alarm keeps triggering for the given interval.
 *
 * @remark Since Tizen 2.4 behaviour of this alarm has changed. In order to decrease the power consumption,
 * the operating system decides when this alarm is going to be fired and what is the period between subsequent executions.
 * It is guaranteed that this alarm will be fired after at least _delay_ seconds.
 * If _period_ is provided, it will be adjusted by the operating system, however this value will not be lower than 600 seconds.
 */
export class AlarmRelative extends Alarm {
    constructor(delay: number, period?: number | null);
    /**
     * An attribute to store the difference in time (in seconds) between when an alarm is added and when it is triggered.
     *
     * @remark Since Tizen 2.4 the operating system adjusts this value to decrease the power consumption.
     */
    readonly delay: number;
    /**
     * An attribute to store the duration in seconds between each trigger of an alarm.
     * By default, this attribute is set to null, indicating that this alarm does not repeat.
     *
     * @remark Since Tizen 2.4 the operating system adjusts this value to decrease the power consumption.
     */
    readonly period: number | null;
    /**
     * Returns the duration in seconds before the next alarm is triggered.
     *
     * If the alarm has expired, this method returns null.
     *
     * @returns The duration before the next alarm is triggered.
     *
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    getRemainingSeconds(): number | null;
}
export interface AlarmRelativeConstructor {
    prototype: AlarmRelative;
    new(delay: number, period?: number | null): AlarmRelative;
}
/**
 * This interface defines the current application's information and
 * the basic operations (such as exit or hide) for the current application.
 *
 * @since 2.0
 */
export interface Application {
    /**
     * An attribute to store the application information for the current application.
     */
    readonly appInfo: ApplicationInformation;
    /**
     * An attribute to store the ID of a running application.
     */
    readonly contextId: ApplicationContextId;
    /**
     * Adds a listener which will invoke a callback function when an event occurs.
     *
     * System events do not require an application identifier to be specified. Therefore, the appId attribute of the [EventInfo](#EventInfo) dictionary should not be specified when listening for system events. If it is specified, the event to listen for will be interpreted as an user event.
     *
     * @since 2.4
     *
     * @param event Event which will invoke the callback.
     * @param callback Callback function to be invoked when the event occurs.
     *
     * @returns Listener identifier.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    addEventListener(event: EventInfo, callback: EventCallback): number;
    /**
     * Broadcasts a user defined event to all the listeners which are listening for this event.
     *
     * An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, the appId attribute of the [EventInfo](#EventInfo) dictionary must be the identifier of the application which calls this method.
     *
     * @since 2.4
     *
     * @param event Event to broadcast.
     * @param data User defined event data to broadcast.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    broadcastEvent(event: EventInfo, data: UserEventData): void;
    /**
     * Broadcasts a user defined event to all the trusted listeners which are listening for this event. Applications which have the same certificate as the sending application can receive the event.
     *
     * An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, the appId attribute of the [EventInfo](#EventInfo) dictionary must be the identifier of the application which calls this method.
     *
     * @since 2.4
     *
     * @param event Trusted event to broadcast.
     * @param data User defined trusted event data to broadcast.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    broadcastTrustedEvent(event: EventInfo, data: UserEventData): void;
    /**
     * Exits the current application.
     *
     * @remark This method is not supported by Web Widget.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    exit(): void;
    /**
     * Gets the requested application control passed to the current application.
     *
     * Gets the requested application control that contains the application control
     * passed by the _launchAppControl()_ method from the calling application.
     * The requested application control contains the reason the application
     * is launched and what it has to perform. For example, an application
     * might be launched to display an image on a page by another
     * application's request. In all of these cases, the application is
     * responsible for checking the contents of the application control and responding
     * appropriately when it is launched.
     *
     * @remark This method is not supported by Web Widget.
     *
     * @returns The details of a requested application control.
     *
     * @throws WebAPIException with error type UnknownError, if the application control cannot be retrieved because of an unknown error.
     */
    getRequestedAppControl(): RequestedApplicationControl;
    /**
     * Hides the current application.
     *
     * @remark This method is not supported by Web Widget.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    hide(): void;
    /**
     * Removes an event listener with a specified listener identifier.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @since 2.4
     *
     * @param watchId Listener identifier.
     *
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    removeEventListener(watchId: number): void;
}
/**
 * This interface defines information about battery usage of application.
 *
 * @since 4.0
 */
export interface ApplicationBatteryUsage {
    /**
     * An attribute storing ID of an application.
     */
    readonly appId: ApplicationId;
    /**
     * An attribute which stores information about battery usage of an application with ApplicationId _appId_.
     * Battery usage is a ratio of battery consumption of the application with ApplicationId _appId_ to the total battery consumption of all applications.
     * The attribute value scales from 0 to 1, the higher value, the more battery is consumed.
     */
    readonly batteryUsage: number;
}
/**
 * This interface defines the certificate information of an installed application.
 *
 * @since 2.0
 */
export interface ApplicationCertificate {
    /**
     * An attribute to store the type of the application certificate
     */
    readonly type: string;
    /**
     * An attribute to store the value of the application certificate
     */
    readonly value: string;
}
/**
 * This interface defines the information available about a running
 * application.
 */
export interface ApplicationContext {
    /**
     * An attribute to store the ID of an installed application.
     */
    readonly appId: ApplicationId;
    /**
     * An attribute to store the ID of a running application.
     */
    readonly id: ApplicationContextId;
}
/**
 * This interface consists of an operation, URI, MIME type,
 * and data. It describes an action to be performed by other applications
 * and is passed to launch other applications.
 * If the system gets the application control request, it finds
 * the corresponding application to be launched with the delivered application control
 * and launches the selected application.
 *
 * @since 2.0
 */
export class ApplicationControl {
    constructor(
        operation: string,
        uri?: string | null,
        mime?: string | null,
        category?: string | null,
        data?: ApplicationControlData[] | null,
        launchMode?: ApplicationControlLaunchMode | null,
    );
    /**
     * An attribute to store the category of the application to be launched.
     */
    category: string | null;
    /**
     * An array of attributes to store the data needed for an application control.
     */
    data: ReadonlyArray<ApplicationControlData>;
    /**
     * An attribute to specify launch mode. Default application launch mode is _SINGLE_.
     *
     * @since 2.4
     */
    launchMode: ApplicationControlLaunchMode;
    /**
     * An attribute to store the MIME type of content.
     */
    mime: string | null;
    /**
     * An attribute to store the string that defines the action to be
     * performed by an application control.
     */
    operation: string;
    /**
     * An attribute to store the URI needed by an application control.
     */
    uri: string | null;
}
export interface ApplicationControlConstructor {
    prototype: ApplicationControl;
    new(
        operation: string,
        uri?: string | null,
        mime?: string | null,
        category?: string | null,
        data?: ApplicationControlData[] | null,
        launchMode?: ApplicationControlLaunchMode | null,
    ): ApplicationControl;
}
/**
 * This interface defines a key/value pair used to pass data
 * between applications through the _ApplicationControl_ interface.
 *
 * @since 2.0
 */
export class ApplicationControlData {
    constructor(key: string, value: string[]);
    /**
     * An attribute to store the name of a key.
     */
    key: string;
    /**
     * An attribute to store the value associated with a key.
     */
    value: ReadonlyArray<string>;
}
export interface ApplicationControlDataConstructor {
    prototype: ApplicationControlData;
    new(key: string, value: string[]): ApplicationControlData;
}
/**
 * This interface defines the general information available to an installed application.
 */
export interface ApplicationInformation {
    /**
     * An array of attributes to store the categories that the app belongs to.
     *
     * @since 2.0
     */
    readonly categories: ReadonlyArray<string>;
    /**
     * An attribute to store the icon path of an application.
     */
    readonly iconPath: string;
    /**
     * An attribute to store the identifier of an application for application management.
     */
    readonly id: ApplicationId;
    /**
     * An attribute to store the application install/update time.
     *
     * @since 2.0
     */
    readonly installDate: Date;
    /**
     * An attribute to store the name of an application.
     */
    readonly name: string;
    /**
     * An attribute to store the package ID of an application.
     *
     * @since 2.1
     */
    readonly packageId: PackageId;
    /**
     * An attribute that determines whether the application information should
     * be shown (such as in menus).
     */
    readonly show: boolean;
    /**
     * An attribute to store the application size (installed space).
     *
     * @since 2.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.info
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly size: number;
    /**
     * An attribute to store the version of an application.
     */
    readonly version: string;
}
/**
 * The ApplicationManager interface provides methods to retrieve application information, launch, install application, etc.
 *
 * @since 2.0
 */
export interface ApplicationManager {
    /**
     * Adds a listener for receiving any notification for changes in the list of installed applications
     * on a device.
     *
     * @note _deprecated_ 2.4 Deprecated since 2.4.
     *
     * Instead, [tizen.package.setPackageInfoEventListener()](./package.html#PackageManager::setPackageInfoEventListener) allows the app developers to set a listener for getting notified for the changes(add/remove/update) of applications on a device.
     *
     * It installs a callback that is triggered every time a change occurs on
     * the list of installed applications on a device. This change may
     * occur due to a new installation, uninstallation, or update of an application.
     *
     * When executed, the implementation must immediately return a listener
     * ID that identifies the listener. After returning the ID, the change
     * detection operation is started asynchronously.
     *
     * The _ApplicationInformationEventCallback_ must be invoked every time a new
     * application is installed, removed, or updated.
     *
     * The change detection must continue until the _removeAppInfoEventListener()_ method is called
     * with the corresponding listener identifier.
     *
     * @param eventCallback The method to call when a change on the installed applications is made
     *
     * @returns ID of the listener that can be used to remove the listener later.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if it fails to add a listener because of an unknown error.
     */
    addAppInfoEventListener(eventCallback: ApplicationInformationEventCallback): number;
    /**
     * Adds a listener for receiving any notification for status changes of the installed applications on a device.
     *
     * @since 4.0
     *
     * @param eventCallback The method to call when status of the installed applications is changed.
     * @param appId The id of the application which status changes should be monitored. If the application id is ommitted or it is equal to null, all applications status changes will be monitored.
     *
     * @returns Listener id that can be used to remove the listener later.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if the application id parameter is an empty string.
     * @throws WebAPIException with error type AbortError, if it fails to add a listener.
     */
    addAppStatusChangeListener(eventCallback: StatusEventCallback, appId?: ApplicationId | null): number;
    /**
     * Finds which applications can be launched with the given application control.
     *
     * An application can get a list of other applications that can be launched with the application control.
     *
     * The _ErrorCallback_ method is launched with these error types:
     *
     * *   NotFoundError - If the application is not found with the given Appcontrol.
     * *   UnknownError - If any other error occurs.
     *
     * @param appControl A data structure describing application control details.
     * @param successCallback The method to call that returns a list of application information.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    findAppControl(
        appControl: ApplicationControl,
        successCallback: FindAppControlSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets application certificates for a specified application ID.
     *
     * If the ID is set to null or not set at all, it returns application certificates for the current application.
     *
     * The certificate types are listed below:
     *
     * *   AUTHOR\_ROOT - Author Root Certificate
     * *   AUTHOR\_INTERMEDIATE - Author Intermediate Certificate
     * *   AUTHOR\_SIGNER - Author Signer Certificate
     * *   DISTRIBUTOR\_ROOT - Distributor Root Certificate
     * *   DISTRIBUTOR\_INTERMEDIATE - Distributor Intermediate Certificate
     * *   DISTRIBUTOR\_SIGNER - Distributor Signer Certificate
     * *   DISTRIBUTOR2\_ROOT - Distributor2 Root Certificate
     * *   DISTRIBUTOR2\_INTERMEDIATE - Distributor2 Intermediate Certificate
     * *   DISTRIBUTOR2\_SIGNER - Distributor2 Signer Certificate
     *
     * @privilegeLevel partner
     * @privilegeName http://tizen.org/privilege/appmanager.certificate
     *
     * @param id A string representing an application ID. If the ID is not provided, the application certificate of the calling application is returned.
     *
     * @returns Array of certificate information of a specified application.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type NotFoundError, if the application is not found with the specified ID.
     * @throws WebAPIException with error type UnknownError, if the application cannot be retrieved because of an unknown error.
     */
    getAppCerts(id?: ApplicationId | null): ApplicationCertificate[];
    /**
     * Gets the application context for the specified application context ID.
     * If the ID is set to null or is not set at all, the method returns the application context of the current application.
     * The list of running applications and their application IDs is obtained with _getAppsContext()_.
     *
     * @param contextId A string representing an application context ID
     * If the ID is not provided, the application context of the calling application is returned.
     *
     * @returns A data structure that lists running application details.
     *
     * @throws WebAPIException with error type NotFoundError, if the application context is not found with the specified ID.
     * @throws WebAPIException with error type UnknownError, if the application context cannot be retrieved because of an unknown error.
     */
    getAppContext(contextId?: ApplicationContextId | null): ApplicationContext;
    /**
     * Gets application information for a specified application ID.
     *
     * If the ID is set to null or not set at all, it returns application information for the current application.
     * The list of installed applications and their application IDs is obtained with _getAppsInfo()_.
     *
     * @param id A string representing an application ID
     * If the ID is not provided, the application information of the calling application is returned.
     *
     * @returns The information of an application.
     *
     * @throws WebAPIException with error type NotFoundError, if the application is not found with the specified ID.
     * @throws WebAPIException with error type UnknownError, if the application cannot be retrieved because of an unknown error.
     */
    getAppInfo(id?: ApplicationId | null): ApplicationInformation;
    /**
     * Gets the application meta data array for a specified application ID.
     *
     * If the ID is set to null or not set at all, it returns the application meta data array for the current application.
     *
     * @since 2.2
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.info
     *
     * @param id A string representing an application ID. If the ID is not provided, the application metadata array of the calling application is returned.
     *
     * @returns Array of meta data of a specified application. If there are no meta data for a specified application,
     * an empty array is returned
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type NotFoundError, if the application is not found with the specified ID.
     * @throws WebAPIException with error type UnknownError, if the application cannot be retrieved because of an unknown error.
     */
    getAppMetaData(id?: ApplicationId | null): ApplicationMetaData[];
    /**
     * Gets the URI of the read-only shared directory of an application for a specified application ID.
     *
     * The shared directory is used to export data to other applications. Its structure is described in
     * [File System Directory Hierarchy](/application/native/tutorials/details/io-overview).
     *
     * @remark Since Tizen 3.0, shared/data directory is not created for web applications. For other applications it will be not created by default and should be considered as optional
     * (refer to [table about shared/data](/application/native/tutorials/details/io-overview) for more details).
     *
     * If the ID is set to null or not set at all, it returns the shared directory URI for the current application.
     *
     * @since 2.1
     *
     * @param id A string representing an application ID. If the ID is not provided, the shared directory URI of the calling application is returned.
     *
     * @returns The shared directory URI of an application.
     *
     * @throws WebAPIException with error type NotFoundError, if the application is not found with the specified ID.
     * @throws WebAPIException with error type UnknownError, if the application cannot be retrieved because of an unknown error.
     */
    getAppSharedURI(id?: ApplicationId | null): string;
    /**
     * Gets a list of application contexts for applications that are currently running on a device.
     * The information contained for each application corresponds to the application state at the time when the list had been generated.
     *
     * The _ErrorCallback_ method is launched with this error type:
     *
     * *   UnknownError - If an unknown error occurs.
     *
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    getAppsContext(successCallback: ApplicationContextArraySuccessCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Gets the list of installed applications' information on a device.
     * The information contained on each application corresponds to the application state at the time when the list had been generated.
     *
     * The _ErrorCallback_ method is launched with this error type:
     *
     * *   UnknownError - If an unknown error occurs.
     *
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    getAppsInfo(
        successCallback: ApplicationInformationArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets the _Application_ object defining the current application.
     *
     * @remark This method is not supported by Web Widget.
     *
     * @returns The data structure that defines the current application.
     *
     * @throws WebAPIException with error type UnknownError, if the application cannot be retrieved because of an unknown error.
     */
    getCurrentApplication(): Application;
    /**
     * Kills an application with the specified application context ID.
     *
     * The _ErrorCallback_ method is launched with these error types:
     *
     * *   NotFoundError - If the context is not found with the specified context ID.
     * *   InvalidValuesError - If any of the input parameters contain an invalid value
     * or if the specified context ID matches the context ID of the calling application.
     * *   UnknownError - If any other error occurs.
     *
     * @privilegeLevel partner
     * @privilegeName http://tizen.org/privilege/appmanager.kill
     *
     * @param contextId The identifier of the application to kill.
     * @param successCallback The method to invoke when an application is killed successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    kill(
        contextId: ApplicationContextId,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Launches an application with the given application ID.
     *
     * The _ErrorCallback_ method is launched with these error types:
     *
     * *   NotFoundError - If the application is not found with the specified ID.
     * *   UnknownError - If any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.launch
     *
     * @remark Since Tizen 2.4, the launch request of the service application from other package is restricted by the platform.
     * @remark Use this method for proper case only, for example to launch your own app. Do not abuse the API for other app(s) launch without business consideration.
     *
     * @param id A unique string representing the application ID.
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    launch(id: ApplicationId, successCallback?: SuccessCallback | null, errorCallback?: ErrorCallback | null): void;
    /**
     * Launches an application with the specified application control.
     *
     * An application can launch other applications with the application control,
     * and get back the results from the launched applications.
     *
     * The application control consists of an operation, URI, and MIME type, and describes
     * the request to be performed by the newly launched application. The
     * application control is passed to the _launchAppControl()_ method to launch an
     * application. The system tries to find the proper application
     * to perform the requested application control, then launches the selected application.
     *
     * The application control request is passed to the newly launched application
     * and it can be accessed by the _getRequestedAppControl()_ method. The passed
     * application control contains the reason the application has been launched and
     * information about what the application is doing. The launched application
     * can send a result to the caller application with the _replyResult()_ method of the
     * _RequestedApplicationControl_ interface.
     *
     * The _ErrorCallback_ method is launched with these error types:
     *
     * *   NotFoundError - If the system cannot find the application that matches the specified application control.
     * *   SecurityError - If the application does not have the privilege to call the specified application control operation.
     * *   UnknownError: If any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.launch
     *
     * @remark Since Tizen 2.4, the launch request of the service application from other package is restricted by the platform.
     * Also, implicit launch requests are NOT delivered to service applications since 2.4. To launch a service application, an explicit launch request with _ApplicationId id_ MUST be sent.
     * @remark Use this method for proper case only, for example to launch your own app. Do not abuse the API for other app(s) launch without business consideration.
     *
     * @param appControl The data structure describing application control details.
     * @param id An identifier of the application to be launched. If the ID is null or not specified, then the system tries to find the application to be launched for the requested application control.
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param replyCallback The method to invoke when the application gets back results from the launched application.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    launchAppControl(
        appControl: ApplicationControl,
        id?: ApplicationId | null,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
        replyCallback?: ApplicationControlDataArrayReplyCallback | null,
    ): void;
    /**
     * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
     *
     * @note _deprecated_ 2.4 Deprecated since 2.4. Instead, use [tizen.package.unsetPackageInfoEventListener()](./package.html#PackageManager::unsetPackageInfoEventListener).
     *
     * @param watchId An ID that identifies the listener
     *
     * @throws WebAPIException with error type NotFoundError, if the listener is not found with the specified ID.
     * @throws WebAPIException with error type UnknownError, if it fails to remove a listener because of an unknown error.
     */
    removeAppInfoEventListener(watchId: number): void;
    /**
     * Removes the listener to stop receiving notifications for status changes of the installed applications on a device.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @since 4.0
     *
     * @param watchId An ID that identifies the listener.
     *
     * @throws WebAPIException with error type AbortError, if it fails to remove listener.
     */
    removeAppStatusChangeListener(watchId: number): void;
}
/**
 * This interface defines the meta data of an installed application
 *
 * @since 2.2
 */
export interface ApplicationMetaData {
    /**
     * An attribute to store the key of the application meta data
     */
    readonly key: string;
    /**
     * An attribute to store the value of the application meta data
     */
    readonly value: string;
}
/**
 * This interface defines information about usage of application.
 *
 * @since 4.0
 */
export interface ApplicationUsage {
    /**
     * An attribute to store the ID of an application.
     */
    readonly appId: ApplicationId;
    /**
     * An attribute to store the last time when the application was used.
     */
    readonly lastTime: Date;
    /**
     * An attribute to store the total number of times the application was in the foreground.
     */
    readonly totalCount: number;
    /**
     * An attribute to store the total time of application usage in seconds.
     */
    readonly totalDuration: number;
}
/**
 * The ArchiveFile interface provides access to member files of the archive file.
 */
export class ArchiveFile {
    constructor();
    /**
     * Size of all the files included in the archive after decompression.
     *
     * The size is null until the archive is opened.
     */
    readonly decompressedSize: number | null;
    /**
     * Describes the mode the file is opened with.
     */
    readonly mode: FileMode;
    /**
     * Adds a new member file to _ArchiveFile_.
     *
     * If _sourceFile_ refers to a directory,
     * the directory and its content will be added to ArchiveFile.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If the given _sourceFile_ does not exist
     * *   IOError: If archiveFile can not be written due the lack of access permission
     * *   InvalidModificationError: If the operation results in a name conflict in the archive
     * i.e. two entries in the archive with the same name (including directory names).
     * *   UnknownError: In any case of any other error
     *
     * Name stored for new entries is constructed from _sourceFile_ according to the
     * [stripSourceDirectory](#ArchiveFileEntryOptions::stripSourceDirectory) and [destination](#ArchiveFileEntryOptions::destination) options. Names are constructed as follows:
     *
     * | source file | destination | stripSourceDirectory | resulting entry name |
     * | ----- | ----- | ----- | ----- |
     * | documents/subdir/second/justName.ext | _(empty)_ | false | subdir/second/justName.ext |
     * | documents/subdir/second/justName.ext | _(empty)_ | true | justName.ext |
     * | documents/subdir/justName.ext | "report3" | false | report3/subdir/justName.ext |
     * | documents/subdir/justName.ext | "report3" | true | report3/justName.ext |
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param sourceFile File or directory to be added to archive.
     * @param onsuccess Callback method to be invoked when this operation is completed successfully.
     * @param onerror Callback method to be invoked when an error occurs.
     * @param onprogress Callback method to be invoked to notify about operation progress
     * It is called every time a single source file has been completely added.
     * If the source file is big then the callback can also be called while the file is being processed.
     * @param options Additional options used to control how the sourceFile will be compressed and stored in the archive.
     *
     * @returns Task ID which can be used to cancel the operation with abort().
     *
     * @throws WebAPIException with error type TypeMismatchError, if parameter is of the wrong type.
     * @throws WebAPIException with error type InvalidStateError, if ArchiveFile is not open.
     * @throws WebAPIException with error type InvalidAccessError, if the file mode is "r".
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    add(
        sourceFile: FileReference,
        onsuccess?: SuccessCallback | null,
        onerror?: ErrorCallback | null,
        onprogress?: ArchiveFileProgressCallback | null,
        options?: ArchiveFileEntryOptions | null,
    ): number;
    /**
     * Closes the _ArchiveFile_.
     *
     * Call this method when the archive file is not used any more. Once you call this method, the archive file object will not be available and any further operation attempt results in an _InvalidStateError_.
     * Calling _close()_ on an archive file object which is already closed does not raise any exception.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    close(): void;
    /**
     * Extracts every file from this _ArchiveFile_ to a given directory.
     *
     * All extracted files will be located in the given directory.
     *
     * The overwrite attribute determines whether extracted files can overwrite existing files.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If the given _destinationDirectory_ does not exist
     * *   IOError: If destinationDirectory can not be written to (e.g due to insufficient permissions)
     * *   InvalidModificationError: If during extracting it is detected that an existing file would
     * have to be overwritten and the _overwrite_ argument is false
     * *   UnknownError: In any other error case
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param destinationDirectory Directory where extracted files will be stored
     * Specified as a virtual path or a _File_ object representing a directory.
     * @param onsuccess Callback method to be invoked when an archive is extracted successfully.
     * @param onerror Callback method to be invoked when an error occurs.
     * @param onprogress Callback method to be invoked while the extracting is in progress
     * The onprogress callback is called at least once. It will be invoked for every extracted file.
     * @param overwrite Flag indicating whether to overwrite or keep the existing files with the same name in the destinationDirectory location when extracting an archive
     * By default, this attribute is set to false.
     *
     * @returns Task ID which can be used to cancel the operation with abort().
     *
     * @throws WebAPIException with error type TypeMismatchError, if parameter is of the wrong type.
     * @throws WebAPIException with error type InvalidStateError, if ArchiveFile is not open.
     * @throws WebAPIException with error type InvalidAccessError, if the file mode is "w" or "a".
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    extractAll(
        destinationDirectory: FileReference,
        onsuccess?: SuccessCallback | null,
        onerror?: ErrorCallback | null,
        onprogress?: ArchiveFileProgressCallback | null,
        overwrite?: boolean | null,
    ): number;
    /**
     * Retrieves information about the member files in _ArchiveFile_.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param onsuccess Callback method to be invoked when information about all the files in the archive is successfully retrieved.
     * @param onerror Callback method to be invoked when an error occurs.
     *
     * @returns Task ID which can be used to cancel the operation with abort().
     *
     * @throws WebAPIException with error type TypeMismatchError, if parameter is of the wrong type.
     * @throws WebAPIException with error type InvalidStateError, if ArchiveFile is not open.
     * @throws WebAPIException with error type InvalidAccessError, if the file mode is "w" or "a".
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    getEntries(onsuccess: ArchiveFileEntryArraySuccessCallback, onerror?: ErrorCallback | null): number;
    /**
     * Retrieves information about _ArchiveFileEntry_ with the specified name in _ArchiveFile_.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If _ArchiveFileEntry_ with the specific name does not exist
     * *   UnknownError: In case of any other error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param name Name of _ArchiveFileEntry_ to extract.
     * @param onsuccess Callback method to be invoked when a file matched with the given name is found.
     * @param onerror Callback method to be invoked when an error occurs.
     *
     * @returns Task ID which can be used to cancel the operation with abort().
     *
     * @throws WebAPIException with error type TypeMismatchError, if parameter is of the wrong type.
     * @throws WebAPIException with error type InvalidStateError, if ArchiveFile is not opened.
     * @throws WebAPIException with error type InvalidAccessError, if the file mode is "w" or "a".
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    getEntryByName(name: string, onsuccess: ArchiveFileEntrySuccessCallback, onerror?: ErrorCallback | null): number;
}
export interface ArchiveFileConstructor {
    prototype: ArchiveFile;
    new(): ArchiveFile;
}
/**
 * The ArchiveFileEntry interface provides access to ArchiveFile member information and file data.
 */
export class ArchiveFileEntry {
    constructor();
    /**
     * Amount of storage space used by the member file, which may be compressed, in ArchiveFile \[bytes\].
     *
     * If ArchiveFileEntry member is a folder, the attribute will be sum of the sizes of all files in this directory.
     *
     * Until a new entry is added to the archive, the compressedSize is null
     */
    readonly compressedSize: number | null;
    /**
     * Date and time stored with the member file.
     * This is usually the modification date of the file.
     */
    readonly modified: Date;
    /**
     * Path identifying the member file of ArchiveFile.
     * This is a full path with the directory and base name of the entry.
     */
    readonly name: string;
    /**
     * Original size of the member file \[bytes\].
     *
     * If the ArchiveFileEntry member is a folder, the attribute value will be the sum of sizes of all files in this directory.
     */
    readonly size: number;
    /**
     * Extracts ArchiveFileEntry to the given location.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If the given _destinationDirectory_ does not exist
     * *   InvalidModificationError: If the file already exists and overwriting is not allowed
     * *   IOError: If destinationDirectory can not be written to
     * *   UnknownError: In case of any other error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param destinationDirectory Directory where extracted files will be stored
     * Given as a virtual path or a _File_ object representing a directory.
     * @param onsuccess Callback method to be invoked when an extract operation is completed.
     * @param onerror Callback method to be invoked when an error occurs.
     * @param onprogress Callback method to be invoked while the extracting is in progress
     * The onprogress callback is called at least once. It will be invoked for every extracted file.
     * @param stripName Flag which determines if directory name part of _ArchiveFileEntry_ should be removed or preserved
     * The default value is false. If it is true, use only base name (part after last slash) as a target path.
     * @param overwrite Flag which determines if it possible to overwrite files when the decompressed file already exists in this destination location
     * The default value is false.
     *
     * @returns Task ID which can be used to cancel the operation with abort().
     *
     * @throws WebAPIException with error type TypeMismatchError, if parameter is of the wrong type.
     * @throws WebAPIException with error type InvalidValuesError, if directory parameter does not represent a directory.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    extract(
        destinationDirectory: FileReference,
        onsuccess?: SuccessCallback | null,
        onerror?: ErrorCallback | null,
        onprogress?: ArchiveFileProgressCallback | null,
        stripName?: boolean | null,
        overwrite?: boolean | null,
    ): number;
}
export interface ArchiveFileEntryConstructor {
    prototype: ArchiveFileEntry;
    new(): ArchiveFileEntry;
}
/**
 * The ArchiveManager interface provides methods for global operations related to ArchiveFile.
 */
export interface ArchiveManager {
    /**
     * Cancels an operation with the given identifier.
     *
     * @param operationIdentifier Task ID returned by an asynchronous function from this module.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    abort(operationIdentifier: number): void;
    /**
     * Opens the archive file. After this operation, it is possible to add or get files to and from the archive.
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: If archiveFile format is not recognized
     * *   NotFoundError: If the _mode_ is "r" and the _file_ does not exist, or the _mode_ is not "r" and the _file_ cannot be created because the path of the file after excluding its file name does not exist
     * *   IOError: If the access is denied due to insufficient permissions
     * *   UnknownError: In case of any other error
     *
     * Use _mode_ depending on which operation are intended:
     *
     * | Mode | Description |
     * | ----- | ----- |
     * | r | Use this mode for extracting or getting information about the contents of an archive file. <br>    _file_ must exist. If the _file_ does not exist, _onerror_ will be invoked (_NotFoundError_).<br>    When an archive file is opened in this mode, _add()_ will not be available. (_IOError_ will be thrown.) |
     * | w | Use this mode to create an archive file and add files to the archive file. <br> If _file_ does not exist, it will be created. <br> If _file_ exists and the _overwrite_ option is <var>true</var>, the existing file will be overwritten with empty archive. <br> If _file_ exists and the _overwrite_ option is <var>false</var>, _onerror_ callback will be invoked (_InvalidModificationError_). <br> When an archive file is opened in this mode, _getEntries()_, _getEntryByName()_, and _extractAll()_ are not available. (_IOError_ will be thrown.) |
     * | rw | Use this mode for archive zipping/unzipping. <br> If _file_ does not exist, it will be created. <br> If _file_ exists and the _overwrite_ option is <var>true</var>, the existing file will be overwritten with an empty archive. <br> If _file_ exists and the _overwrite_ option is <var>false</var>, the existing contents are preserved. Both adding and extracting will be available. <br>|
     * | a | Use this mode to add new files to an archive file. <br> If _file_ does not exist, it will be created. <br> If _file_ exists, then the previous contents of the archive file are preserved and new files can be added to the archive file. In this mode, _getEntries()_, _getEntryByName()_, and _extractAll()_ are not available. (_IOError_ will be thrown.)|
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param file File to open.
     * @param mode File mode for the opened archive. Determines which operations are available.
     * @param onsuccess Callback method to be invoked when archive is opened successfully.
     * @param onerror Callback method to be invoked when an error occurs.
     * @param options Additional options for initializing the ArchiveFile instance.
     *
     * @returns Task ID which can be used to cancel the operation with abort().
     *
     * @throws WebAPIException with error type TypeMismatchError, if parameter type does not match.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    open(
        file: FileReference,
        mode: FileMode,
        onsuccess: ArchiveFileSuccessCallback,
        onerror?: ErrorCallback | null,
        options?: ArchiveFileOptions | null,
    ): number;
}
/**
 * This interface represents a set of filters.
 *
 * It represents the query statement for the specified value of _matchValue_ by the rule of _matchFlag_.
 *
 * If no _matchValue_ is defined, the filter matches all objects that have the attribute
 * defined (same as the "EXISTS" filter works), otherwise, it only matches objects which have an attribute that match
 * the specified value.
 */
export class AttributeFilter extends AbstractFilter {
    constructor(attributeName: string, matchFlag?: FilterMatchFlag | null, matchValue?: any);
    /**
     * The name of the object attribute used for filtering.
     *
     * This is the name of the object attribute exactly as it is defined in
     * the object's interface. For attributes of complex type, use fully-qualified names
     * (such as "geolocation.latitude" to filter a video or image content's latitude in a geolocation).
     *
     * For attributes of an array type, the filter will match if any value in the array
     * matches.
     */
    attributeName: string;
    /**
     * The match flag used for attribute-based filtering.
     *
     * By default, this attribute is set to "EXACTLY".
     */
    matchFlag: FilterMatchFlag;
    /**
     * The value used for matching.
     *
     * The filter will match if the attribute value matches the given matchValue.
     *
     * This value is not used if the _matchFlag_ is set to "EXISTS".
     * By default, this attribute is set to null.
     */
    matchValue: any;
}
export interface AttributeFilterConstructor {
    prototype: AttributeFilter;
    new(attributeName: string, matchFlag?: FilterMatchFlag | null, matchValue?: any): AttributeFilter;
}
/**
 * _AttributeRangeFilter_ represents a filter based on an object attribute
 * which has values that are within a particular range.
 *
 * Range filters, where only one boundary is set, are available.
 */
export class AttributeRangeFilter extends AbstractFilter {
    constructor(attributeName: string, initialValue?: any, endValue?: any);
    /**
     * The name of the object attribute used for filtering.
     *
     * The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
     * (such as "geolocation.latitude" to filter a video or image content's latitude in a geolocation).
     *
     * For attributes of array type, the filter will match if any value in the array
     * matches.
     */
    attributeName: string;
    /**
     * Objects with an attribute that is strictly lower than or equal to _endValue_ will match.
     *
     * By default, this attribute is set to null.
     */
    endValue: any;
    /**
     * Objects with an attribute that is greater than or equal to _initialValue_ will match.
     *
     * By default, this attribute is set to null.
     */
    initialValue: any;
}
export interface AttributeRangeFilterConstructor {
    prototype: AttributeRangeFilter;
    new(attributeName: string, initialValue?: any, endValue?: any): AttributeRangeFilter;
}
/**
 * The AudioContent interface extends a basic _Content_ object with audio-specific attributes.
 */
export interface AudioContent extends Content {
    /**
     * The album name to which the audio belongs.
     */
    readonly album: string | null;
    /**
     * The list of artists who created the audio.
     */
    readonly artists: ReadonlyArray<string> | null;
    /**
     * The audio bitrate in bits per second. By default, this value is 0.
     */
    readonly bitrate: number;
    /**
     * The list of composers for the music.
     */
    readonly composers: ReadonlyArray<string> | null;
    /**
     * The copyright information.
     */
    readonly copyright: string | null;
    /**
     * The audio duration in milliseconds.
     */
    readonly duration: number;
    /**
     * The list of genres to which the audio belongs.
     */
    readonly genres: ReadonlyArray<string> | null;
    /**
     * The lyrics of a song in an audio file.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    readonly lyrics: AudioContentLyrics | null;
    /**
     * The track number if the audio belongs to an album.
     */
    readonly trackNumber: number | null;
}
/**
 * The AudioContentLyrics interface provides lyrics for music.
 */
export interface AudioContentLyrics {
    /**
     * The array of lyrics snippets.
     *
     * If the lyrics are not synchronized, the array has only one member with full lyrics.
     */
    readonly texts: ReadonlyArray<string>;
    /**
     * The array of timestamps in milliseconds for lyrics.
     *
     * If the lyrics are not synchronized (if there is no time information for the lyrics) the array is undefined.
     */
    readonly timestamps: ReadonlyArray<number>;
    /**
     * The type of lyrics, that is, whether they are synchronized with the music.
     */
    readonly type: AudioContentLyricsType;
}
/**
 * This interface provides access to the API funtionalities through the _tizen.tvaudiocontrol_ interface.
 */
export interface AudioControlManager {
    /**
     * Gets the current audio output mode.
     *
     * @returns AudioOutputMode The current audio output mode
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    getOutputMode(): AudioOutputMode;
    /**
     * Gets the current volume level.
     *
     * @returns unsigned short The current volume (the volume range is 0 ~ 100)
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    getVolume(): number;
    /**
     * Gets the mute state.
     *
     * @returns boolean The current mute state
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    isMute(): boolean;
    /**
     * Plays the sound of a specific beep.
     *
     * @param type The beep type to play
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    playSound(type: AudioBeepType): void;
    /**
     * Turns on or off the silent mode
     *
     * Note that turning on mute mode does not change volume level but
     * it simply disables any sound. Turning off the mute will enable sound
     * with the volume level. If setVolumeUp or setVolumeDown functions
     * are used, then mute is disabled.
     *
     * @param mute The mute state (true = turn on the silent mode, false = turn off the silent mode)
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     */
    setMute(mute: boolean): void;
    /**
     * Changes the volume level.
     *
     * The value of _volume_ is allowed from 0 to 100. If an invalid value is passed, _InvalidValuesError_ will occur.
     *
     * @param volume The volume (the available volume range is 0 ~100)
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    setVolume(volume: number): void;
    /**
     * Registers a volume change callback for getting notified when TV volume has been changed.
     *
     * Note that this method overwrites the previously registered listener.
     * @param callback The method to invoke when the volume has been changed. It will not be triggered when the silent mode is changed.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    setVolumeChangeListener(callback: VolumeChangeCallback): void;
    /**
     * Decreases the volume by 1 level.
     *
     * If it is called when the volume level is 0, it will be
     * ignored because the minimum volume level is 0. If mute is enabled,
     * then execution of this functions will disable it.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    setVolumeDown(): void;
    /**
     * Increases the volume by 1 level.
     * If it is called when the volume level is 100, it will be ignored
     * because the maximum volume level is 100. If mute is enabled,
     * then execution of this functions will disable it.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    setVolumeUp(): void;
    /**
     * Unregisters the volume change callback for detecting the volume changes.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     */
    unsetVolumeChangeListener(): void;
}
/**
 * Key-value pair container.
 *
 * Bundle keys are always strings.
 * All supported value types are specified in the BundleValueType enum.
 *
 * Plain dictionary will be implicitly converted to the Bundle object in every
 * Bundle context within WebAPI.
 *
 * @since 5.5
 */
export class Bundle {
    constructor(json?: any);
    /**
     * Calls the callback function for each item stored in the bundle.
     *
     * If bundle is empty the callback function will not be called.
     *
     * @param callback Function to be called for each entry.
     *
     * @remark Empty arrays are treated like string arrays.
     */
    forEach(callback: BundleItemCallback): void;
    /**
     * Gets value stored under given key.
     *
     * @param key Bundle entry key.
     *
     * @returns Bundle entry value for a given key.
     *
     * @throws WebAPIException with error type NotFoundError, if the key could not be found.
     */
    get(key: string): any;
    /**
     * Inserts the key-value pair.
     *
     * @param key Entry key.
     * @param value Entry value.
     *
     * @remark Any value type not specified in the BundleValueType enum will be converted to a string.
     * @remark Empty array value will be treated like STRING\_ARRAY.
     */
    set(key: string, value: any): void;
    /**
     * Converts bundle to JSON-compatible object.
     *
     * @returns JSON-compatible object.
     */
    toJSON(): any;
    /**
     * Gets type of the value for a given key.
     *
     * @param key Entry key.
     *
     * @returns Entry value type.
     *
     * @throws WebAPIException with error type NotFoundError, if the key could not be found.
     *
     * @remark If the value for the given key is an empty array this function returns STRING\_ARRAY.
     */
    typeOf(key: string): BundleValueType;
}
export interface BundleConstructor {
    prototype: Bundle;
    new(json?: any): Bundle;
}
/**
 * The Client provides API for client side.
 */
export interface Client {
    /**
     * Adds a listener to receive a presence events from the server.
     * A server sends presence events when starts or stops presence.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param hostAddress The address of host, null indicates that this is for all nodes(multicast).
     * @param resourceType The resource type specified as a filter for the resource. The characters should have length less than or equal to 61 and start with a lowercase alphabetic. followed by a sequence of lowercase alphabetic, numeric, ".", or "-" characters, and contains no white space.
     * @param connectivityType The connectivity type.
     * @param successCallback The method to invoked when a presence event is received.
     *
     * @returns The watchID which can be used to remove the listener.
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    addPresenceEventListener(
        hostAddress: string | null,
        resourceType: ResourceType | null,
        connectivityType: ConnectivityType,
        successCallback: PresenceEventCallback,
    ): number;
    /**
     * Gets the device information of remote server.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: If any system error is invoked
     *
     * @remark hostAddress should be in the format coap://Address:port. For example "coaps://\[fe80::ae5a:14ff:fe24:b8fe\]:12345" or "coaps://192.168.1.10:12345".
     *
     * @param hostAddress The address of host, null indicates that this is for all nodes(multicast).
     * @param query The query specified as a filter. null means no filter.
     * @param connectivityType The connectivity type.
     * @param successCallback The method to invoked when device information is found.
     * @param errorCallback The method to invoke on failure of getting device information.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    findDeviceInfo(
        hostAddress: string | null,
        query: Query | null,
        connectivityType: ConnectivityType,
        successCallback: FoundDeviceInfoSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets the platform information of remote server.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: In any system error is invoked
     *
     * @remark hostAddress should be in the format coap://Address:port. For example "coaps://\[fe80::ae5a:14ff:fe24:b8fe\]:12345" or "coaps://192.168.1.10:12345".
     *
     * @param hostAddress The address of host, null indicates that this is for all nodes(multicast).
     * @param query The query specified as a filter. null means no filter.
     * @param connectivityType The connectivity type.
     * @param successCallback The method to invoked when platform information is found.
     * @param errorCallback The method to invoke on failure of getting platform information.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    findPlatformInfo(
        hostAddress: string | null,
        query: Query | null,
        connectivityType: ConnectivityType,
        successCallback: FoundPlatformInfoSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Finds resources using host address and resource type.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: If any system error is invoked
     *
     * @remark hostAddress should be in the format coap://Address:port. For example "coaps://\[fe80::ae5a:14ff:fe24:b8fe\]:12345" or "coaps://192.168.1.10:12345".
     *
     * @param hostAddress The address of host, null indicates that this is for all nodes(multicast).
     * @param query The query specified as a filter for the resource. null means no filter.
     * @param connectivityType The connectivity type.
     * @param successCallback The method to invoked when a resource is found.
     * @param errorCallback The method to invoke on failure of finding resource.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    findResource(
        hostAddress: string | null,
        query: Query | null,
        connectivityType: ConnectivityType,
        successCallback: FoundResourceSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Unregisters a presence event listener.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark Example of using can be find at [addPresenceEventListener](iotcon.html#Client::addPresenceEventListener) code example.
     *
     * @param watchId The watchID identifier returned by the addPresenceEventListener() method.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type AbortError, if the operation has been stopped or listener for given watchId was not found.
     */
    removePresenceEventListener(watchId: number): void;
}
/**
 * _CompositeFilter_ represents a set of filters.
 *
 * The composite filters can be one of the following 2 types:
 *
 * *   The union - used to filter objects that match any of the filters it includes.
 * *   The intersection - used to filter objects that match all the filters it includes.
 */
export class CompositeFilter extends AbstractFilter {
    constructor(type: CompositeFilterType, filters?: AbstractFilter[] | null);
    /**
     * The list of filters in the composite filter.
     */
    readonly filters: ReadonlyArray<AbstractFilter>;
    /**
     * The composite filter type.
     */
    type: CompositeFilterType;
}
export interface CompositeFilterConstructor {
    prototype: CompositeFilter;
    new(type: CompositeFilterType, filters?: AbstractFilter[] | null): CompositeFilter;
}
/**
 * The Content interface provides access to the properties of a content item.
 */
export interface Content {
    /**
     * The URI to access the content.
     */
    readonly contentURI: string;
    /**
     * The content description.
     *
     * The attribute is marked as read-only since Tizen 5.5.
     */
    readonly description: string | null;
    /**
     * The list of attributes that are editable to the local backend using the update() or updateBatch() method.
     */
    readonly editableAttributes: ReadonlyArray<string>;
    /**
     * The opaque content identifier.
     */
    readonly id: ContentId;
    /**
     * Boolean value that indicates whether a content item is marked as a favorite.
     *
     * @since 2.3
     */
    isFavorite: boolean;
    /**
     * The content MIME type.
     */
    readonly mimeType: string;
    /**
     * The last modified date for a content item.
     */
    readonly modifiedDate: Date | null;
    /**
     * The content name. The initial value is the file name of the content.
     *
     * The attribute is marked as read-only since Tizen 5.5.
     *
     * @since 2.1
     */
    readonly name: string;
    /**
     * The content rating. This value can range from 0 to 10.
     *
     * The attribute is marked as read-only since Tizen 5.5.
     */
    readonly rating: number;
    /**
     * The date when content has been released publicly. If only the release year is known, then the month and date are set to January and 1st respectively.
     */
    readonly releaseDate: Date | null;
    /**
     * The file size of the content in bytes.
     */
    readonly size: number;
    /**
     * The array of content thumbnail URIs.
     */
    readonly thumbnailURIs: ReadonlyArray<string> | null;
    /**
     * The content title.
     */
    readonly title: string;
    /**
     * The content type.
     */
    readonly type: ContentType;
}
/**
 * The ContentDirectory interface provides access to properties of a content directory.
 */
export interface ContentDirectory {
    /**
     * The directory path on the device.
     */
    readonly directoryURI: string;
    /**
     * The opaque content directory identifier.
     */
    readonly id: ContentDirectoryId;
    /**
     * The last modified date for a directory.
     */
    readonly modifiedDate: Date | null;
    /**
     * The type of device storage.
     *
     * @note _deprecated_ 5.5 Deprecated since 5.5.
     */
    readonly storageType: ContentDirectoryStorageType;
    /**
     * The directory name.
     */
    readonly title: string;
}
/**
 * The ContentManager interface provides operations to retrieve and manipulate content.
 */
export interface ContentManager {
    /**
     * Adds a listener which receives notifications when content changes.
     *
     * @since 3.0
     *
     * @param changeCallback Callback to be invoked when a content change is detected.
     * @returns Identifier of the newly added listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    addChangeListener(changeCallback: ContentChangeCallback): number;
    /**
     * Cancels a scan process of a content directory.
     *
     * When a scan of a given directory is running it may be canceled by this function.
     *
     * @since 2.4
     * @privilegeLevel public
     *
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param contentDirURI URI of a content directory with a scan process running which is canceled.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters
     * contain an invalid value (e.g. given _contentDirURI_ is an empty string).
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    cancelScanDirectory(contentDirURI: string): void;
    /**
     * Creates a new playlist.
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: If name is empty or is same as the name of an existing playlist
     * *   UnknownError: In case of any other error
     *
     * @since 2.3
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param name Name of the new playlist (case sensitive).
     * @param successCallback Callback method to be invoked to provide a created playlist.
     * @param errorCallback Callback method to be invoked when an error occurs.
     * @param sourcePlaylist Optional existing playlist to clone.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    createPlaylist(
        name: string,
        successCallback: PlaylistSuccessCallback,
        errorCallback?: ErrorCallback | null,
        sourcePlaylist?: Playlist | null,
    ): void;
    /**
     * Creates a content's thumbnail.
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: In case of invalid content object.
     * *   AbortError: In case of any error.
     *
     * @since 3.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param content Content object for which a new thumbnail will be created.
     * @param successCallback Callback method to be invoked when the thumbnail is created.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    createThumbnail(
        content: Content,
        successCallback: ThumbnailSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Finds contents that satisfy the conditions set by a filter.
     *
     * This method allows searching based on a supplied filter. For more details on AbstractFilter, see the
     * [Tizen](tizen.html#::Tizen::AbstractFilter) module. The filter allows precise searching such
     * as "return all songs by artist U2, ordered by name".
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: If any of the input parameters contain an invalid value.
     * *   UnknownError: In any other error case.
     *
     * @privilegeLevel public
     *
     * @privilegeName http://tizen.org/privilege/content.read
     *
     * @remark Attributes available for _Content_ objects filtering are listed in
     * [Data Filtering and Sorting guide](/application/web/guides/data/data-filter#content-filter-attributes).
     *
     * @param successCallback Callback method to be invoked when content has been retrieved.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     * @param directoryId Directory ID that is used to select content to retrieve in a specified directory.
     * @param filter Filter that is used to select content to retrieve.
     * @param sortMode Used to determine the sort order in which the contents are returned.
     * @param count Maximum amount of content to return. If _count_ is negative, InvalidValuesError is reported through the errorCallback.
     * @param offset Offset of the result set. If _offset_ is a negative number, InvalidValuesError is reported through the errorCallback.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    find(
        successCallback: ContentArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
        directoryId?: ContentDirectoryId | null,
        filter?: AbstractFilter | null,
        sortMode?: SortMode | null,
        count?: number | null,
        offset?: number | null,
    ): void;
    /**
     * Gets a list of content directories.
     *
     * This method returns (via callback) a list of content directory objects. To obtain a list of contents
     * in a specific directory, use the find() method with the directory ID.
     *
     * The errorCallback is launched with this error type:
     *
     * *   UnknownError: In any other error case.
     *
     * @param successCallback Callback method to be invoked when content directories have been retrieved successfully.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     */
    getDirectories(successCallback: ContentDirectoryArraySuccessCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Gets all playlists.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any error
     *
     * @since 2.3
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.read
     *
     * @param successCallback Callback method to be invoked when retrieving a list of all playlists completes.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    getPlaylists(successCallback: PlaylistArraySuccessCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Removes a listener which receives notifications about content changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @since 3.0
     *
     * @param listenerId Identifier of the listener to be removed. It is returned by.
     * [addChangeListener()](./content.html#ContentManager::addChangeListener) when a listener is successfully added.
     *
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    removeChangeListener(listenerId: number): void;
    /**
     * Removes a playlist.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any error
     *
     * @since 2.3
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param id Identifier of a playlist to remove.
     * @param successCallback Callback method to be invoked when removing a playlist completes.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    removePlaylist(
        id: PlaylistId,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Scans a content directory to create or update content in the content database.
     *
     * When an application creates or updates content in a directory, this method allows
     * to scan it and then insert or update the content in the content database.
     * If a directory must not be scanned, the file _.scan\_ignore_ has to be created in it.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any error detected asynchronously
     *
     * @since 2.4
     * @privilegeLevel public
     *
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param contentDirURI URI of a content directory to scan.
     * @param recursive Used to determine whether the function makes recursive scan or not.
     * If set to true, the function makes recursive scan.
     * @param successCallback Callback method to be invoked when scanning has been completed.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters
     * contain an invalid value (e.g. given _contentDirURI_ is an empty string).
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    scanDirectory(
        contentDirURI: string,
        recursive: boolean,
        successCallback?: ContentScanSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Scans a file to create or update content in the content database.
     *
     * When an application creates or updates content, this method allows to scan it
     * and then insert or update the content in the content database.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any error detected asynchronously
     * *   NotSupportedError: In case of trying to scan content of not supported type (since 4.0)
     *
     * @since 2.1
     * @privilegeLevel public
     *
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param contentURI URI of content to scan.
     * @param successCallback Callback method to be invoked when scanning has been completed.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters
     * contain an invalid value (e.g. given _contentURI_ is an empty string).
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    scanFile(
        contentURI: string,
        successCallback?: ContentScanSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Sets a listener to receive notifications of content changes.
     *
     * @note _deprecated_ 3.0 Deprecated since 3.0. Instead, [addChangeListener()](./content.html#ContentManager::addChangeListener) allows application
     * developers to add a listener and get notified when content is added, removed or updated on a device.
     *
     * @since 2.1
     * @privilegeLevel public
     *
     * @privilegeName http://tizen.org/privilege/content.read
     *
     * @param changeCallback A callback to be invoked for receiving a content change notification.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    setChangeListener(changeCallback: ContentChangeCallback): void;
    /**
     * Unsets the listener to unsubscribe from receiving notifications for content changes.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @note _deprecated_ 3.0 Deprecated since 3.0. Instead, use [removeChangeListener()](./content.html#ContentManager::removeChangeListener).
     *
     * @since 2.1
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.read
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    unsetChangeListener(): void;
    /**
     * Updates attributes of content in the content database synchronously.
     *
     * When an application has changed some attributes of the content, this method allows
     * writing it back to the content database.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @remark The _editableAttributes_ in the _Content_ interface indicates
     * the attributes that can be changed.
     * This API does not support updating the metadata of a file.
     *
     * @param content The content to update.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters
     * contain an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, in any other error case.
     */
    update(content: Content): void;
    /**
     * Updates a batch of content attributes in the content database asynchronously.
     *
     * When an application has changed any attributes in the array of content, this method allows writing them
     * back to the content database.
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: If any of the input parameters contain an invalid value.
     * *   UnknownError: In any other error case.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @remark The _editableAttributes_ in the _Content_ interface indicates
     * the attributes that can be changed.
     * This API does not support updating the metadata of a file.
     *
     * @param contents Array of content to change.
     * @param successCallback Callback method to be invoked when attributes have been changed.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    updateBatch(
        contents: Content[],
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
/**
 * This interface provides common attributes and methods for other derived DataControlConsumerObject.
 */
export interface DataControlConsumerObject {
    /**
     * The dataId identifies specific data, usually a database table to process(insert, delete, update).
     * The string consists of one or more components, separated by a slash("/").
     */
    readonly dataId: string;
    /**
     * An attribute to hold a provider identifier of the application with whom it shares the DataControl.
     * This attribute should be known to users who want to interact with the application.
     */
    readonly providerId: string;
    /**
     * An attribute to store the DataType.
     */
    readonly type: DataType;
    /**
     * Adds a listener to receive notifications about provider data changes.
     *
     * The _ErrorCallback_ method is launched with these error types:
     *
     * *   IOError - If a DB operation has failed.
     *
     * @since 4.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datasharing
     * @privilegeName http://tizen.org/privilege/appmanager.launch
     *
     * @remark To monitor DataControl provider data changes, it is not enough to implement a listener in the DataControl consumer. You also need to implement the data change sending functionality in the DataControl provider.
     * The data sending implementation determines the actual change data returned to the DataControl consumer. For more information on the DataControl provider implementation, see [Monitoring Data Changes](/application/native/guides/app-management/data-control#monitoring-data-changes).
     *
     * @param dataChangeCallback Callback method to be invoked when received data changed notification from provider application.
     * @param errorCallback Callback method to be invoked if provider changes cannot be watched.
     *
     * @returns An identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type ServiceNotAvailableError, if the application could not connect with the provider.
     */
    addChangeListener(dataChangeCallback: DataControlChangeCallback, errorCallback?: ErrorCallback | null): number;
    /**
     * Removes data change listener.
     *
     * If the watchId argument is valid and corresponds to a subscription already in
     * place, the watch process must immediately stop and no further callbacks must be
     * invoked. If the watchId argument is not valid or does not correspond to a
     * valid subscription, the method should return without any further action.
     *
     * @since 4.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datasharing
     * @privilegeName http://tizen.org/privilege/appmanager.launch
     *
     * @param watchId Subscription identifier.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     */
    removeChangeListener(watchId: number): void;
}
/**
 * This interface provides access to the _DataControlManager_ object.
 */
export interface DataControlManager {
    /**
     * Gets _DataControlConsumerObject_ with a given DataType.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param providerId A provider ID to use, which should be shared between the DataControl provider and DataControl consumer.
     * @param dataId A string for identifying specific data.
     * @param type The DataType to use.
     *
     * @returns The local _DataControlConsumerObject_.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getDataControlConsumer(providerId: string, dataId: string, type: DataType): DataControlConsumerObject;
}
/**
 * The DeviceInfo interface describes device properties.
 */
export interface DeviceInfo {
    /**
     * The version of specification which the device's data model is implemented
     */
    readonly dataModelVersion: string | null;
    /**
     * The device name
     */
    readonly deviceName: string | null;
    /**
     * The unique identifier for OIC device.
     */
    readonly oicDeviceId: string | null;
    /**
     * The version of core specification.
     */
    readonly specVersion: string | null;
}
/**
 * This interface provides access to the Display Control API functionalities through the _tizen.tvdisplaycontrol_ interface.
 */
export interface DisplayControlManager {
    /**
     * Gets the current 3D effect mode.
     *
     * @returns Display3DEffectMode The current mode of 3D effect.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.display
     * @warning 5.0 http://tizen.org/privilege/tv.display (public level) has been deprecated since 5.0.
     */
    get3DEffectMode(): Display3DEffectMode;
    /**
     * Gets the supported 3D effects.
     *
     * @param successCallback The method to invoke when a list of supported 3D modes is retrieved successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.display
     * @warning 5.0 http://tizen.org/privilege/tv.display (public level) has been deprecated since 5.0.
     */
    getSupported3DEffectModeList(
        successCallback: Mode3DEffectListSupportCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Checks whether playing 3D mode is available or not.
     *
     * @returns Display3DModeState The current state to display 3D contents.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * This type of error is deprecated since Tizen 5.0.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type UnknownError in an unspecified error case.
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.display
     * @warning 5.0 http://tizen.org/privilege/tv.display (public level) has been deprecated since 5.0.
     */
    is3DModeEnabled(): Display3DModeState;
}
/**
 * The DownloadManager interface handles requests for downloading. Each step of a download operation is informed through callbacks.
 */
export interface DownloadManager {
    /**
     * Abandons a download operation that is specified by the _downloadId_ parameter.
     * The abandoned download operation cannot be resumed later with the _resume()_ method.
     * Trying to resume this download operation will result in _InvalidValuesError_ exception.
     * Calling the _pause()_ method or the _cancel()_ method with this _downloadId_ will also result in _InvalidValuesError_ exception.
     * All resources needed by download operation are freed.
     *
     * @since 5.5
     *
     * @param downloadId The ID of the ongoing download operation to abandon.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    abandon(downloadId: number): void;
    /**
     * Cancels an ongoing download operation that is specified by the _downloadId_ parameter.
     * The abandoned download operation cannot be canceled and trying to do so will result in InvalidValuesError exception.
     *
     * @param downloadId The ID of the ongoing download operation to stop.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    cancel(downloadId: number): void;
    /**
     * Gets the DownloadRequest object from a given ID.
     *
     * @param downloadId The ID to get the download request information.
     *
     * @returns The download request information of the given ID.
     *
     * @throws WebAPIException with error type NotFoundError, if the identifier does not match
     * any download operation in progress.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input
     * parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, in any other error case.
     */
    getDownloadRequest(downloadId: number): DownloadRequest;
    /**
     * Gets the MIME type of the downloaded file.
     *
     * @remark This function returns a valid MIME type when the download operation has been started
     * and successfully retrieves the file header.
     *
     * @param downloadId The ID to get the MIME type information.
     *
     * @returns The MIME type of the downloaded file.
     *
     * @throws WebAPIException with error type NotFoundError, if the identifier does not match
     * any download operation in progress.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input
     * parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, in any other error case.
     */
    getMIMEType(downloadId: number): string;
    /**
     * Gets the download state of an operation synchronously with the specified ID.
     *
     * @param downloadId The ID to get the current state of the download operation.
     *
     * @returns The current download state of the specified ID.
     *
     * @throws WebAPIException with error type NotFoundError, if the identifier does not match any download operation in progress.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getState(downloadId: number): DownloadState;
    /**
     * Pauses an ongoing download operation that is specified by the _downloadId_ parameter.
     * The paused download operation can be resumed later by the _resume()_ method.
     *
     * The abandoned download operation cannot be paused and trying to do so will result in InvalidValuesError exception.
     *
     * @param downloadId The ID of the ongoing download operation to pause.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    pause(downloadId: number): void;
    /**
     * Resumes a paused download operation that is specified by the _downloadId_ parameter.
     *
     * The abandoned download operation cannot be resumed and trying to do so will result in InvalidValuesError exception.
     * Resuming operation that is queued, completed or currently in progress will have no effect.
     *
     * @param downloadId The ID of the paused download operation to resume.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value or in case of an attempt to resume abandoned download operation.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    resume(downloadId: number): void;
    /**
     * Sets the download callback to the download operation of the given ID.
     * It's possible to change or register the listener of the download operation using the saved ID.
     *
     * @param downloadId The ID to set the download callback.
     * @param downloadCallback The method to invoke when the download state changes or an error occurs.
     *
     * @throws WebAPIException with error type NotFoundError, if the identifier does not match
     * any download operation in progress.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input
     * parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, in any other error case.
     */
    setListener(downloadId: number, downloadCallback: DownloadCallback): void;
    /**
     * Starts a download operation with the specified URL information.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/download
     *
     * @remark To check if CELLULAR type is supported, use tizen.systeminfo.getCapability("http://tizen.org/feature/network.telephony")
     * @remark To check if WIFI type is supported, use tizen.systeminfo.getCapability("http://tizen.org/feature/network.wifi")
     *
     * @param downloadRequest The URL and destination information of the object to download.
     * @param downloadCallback The method to invoke when the download state changes or an error occurs.
     *
     * @returns An identifier for each download operation.
     * If the network is not available for downloading, the return value is -1 since Tizen 2.3.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type NotSupportedError, if the _networkType_ of the given DownloadRequest is not supported on a device.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    start(downloadRequest: DownloadRequest, downloadCallback?: DownloadCallback | null): number;
}
/**
 * The DownloadRequest interface defines the download request object.
 */
export class DownloadRequest {
    constructor(
        url: string,
        destination?: string | null,
        fileName?: string | null,
        networkType?: DownloadNetworkType | null,
        httpHeader?: DownloadHTTPHeaderFields | null,
    );
    /**
     * An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
     *
     * If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see [Filesystem API](filesystem.html).
     *
     * The default value is an empty string.
     */
    destination: string | null;
    /**
     * An attribute to store the file name for the specified URL.
     *
     * If the file name is not given or is an empty string, the original file name from the URL is used.
     *
     * The default value is an empty string.
     */
    fileName: string | null;
    /**
     * An attribute to store extra HTTP header fields.
     *
     * @since 2.1
     *
     * For more information about HTTP header fields, see [RFC-2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2)
     *
     * The default value is an empty object.
     */
    httpHeader: DownloadHTTPHeaderFields | null;
    /**
     * An attribute to store the allowed network type.
     *
     * If the network type is not given, all network types are allowed.
     *
     * The default value is ALL.
     *
     * @since 2.1
     */
    networkType: DownloadNetworkType | null;
    /**
     * An attribute to store the URL of the object to download.
     */
    url: string;
}
export interface DownloadRequestConstructor {
    prototype: DownloadRequest;
    new(
        url: string,
        destination?: string | null,
        fileName?: string | null,
        networkType?: DownloadNetworkType | null,
        httpHeader?: DownloadHTTPHeaderFields | null,
    ): DownloadRequest;
}
/**
 * The ExifInformation interface implements the _ExifInformation_ object.
 *
 * When the format of a value is given in the attribute description then this format should be followed when updating values.
 *
 * Every Exif related attribute is nullable - null means that this information is missing in the file.
 * By setting an attribute to null and saving _ExifInformation_ one can remove that Exif tag from the file.
 */
export class ExifInformation {
    constructor(ExifInitDict?: ExifInit | null);
    /**
     * Name of the camera manufacturer.
     */
    deviceMaker: string | null;
    /**
     * Model name or model number of the camera or input device.
     */
    deviceModel: string | null;
    /**
     * Exposure balance program used by the camera to set exposure when the picture was taken.
     */
    exposureProgram: ExposureProgram | null;
    /**
     * Exposure time, given in seconds.
     *
     * If exposure time is below one second it is expressed as 1/x.
     * For example: 1 second exposure is "1", 0.25s is "1/4".
     */
    exposureTime: string | null;
    /**
     * The f-number when the image was taken.
     *
     * Exif specification: "Conversion is not made to the focal length of a 35 mm film".
     *
     * The [f-number](http://en.wikipedia.org/wiki/F-number) is the ratio of the lens' focal length to the diameter of the entrance pupil.
     * F-number is also called focal ratio, f-ratio, f-stop, or relative aperture.
     * Example values: 1.4, 2, 2.8, 4, 5.6, 8, 11 ...
     */
    fNumber: number | null;
    /**
     * Boolean value that indicates whether flash was fired when the picture was taken (true: flash fired).
     */
    flash: boolean | null;
    /**
     * Focal length of the lens, given in mm.
     */
    focalLength: number | null;
    /**
     * Altitude (from GPS) of the camera when the picture was taken.
     *
     * This value is expressed in meters above sea level (can be negative).
     */
    gpsAltitude: number | null;
    /**
     * Latitude and longitude of the camera (from GPS) when the picture was taken.
     */
    gpsLocation: SimpleCoordinates | null;
    /**
     * Name of the method used for finding the location.
     */
    gpsProcessingMethod: string | null;
    /**
     * Date and time information relative to UTC (Universal Time Coordinated) provided by GPS when the photo was taken.
     */
    gpsTime: TZDate | null;
    /**
     * Height of the image i.e. the number of lines in the image.
     *
     * Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
     */
    height: number | null;
    /**
     * Photo sensitivity (also called ISO speed and ISO latitude) of the camera or input device.
     *
     * Example values: 80, 100, 200, 400, 800, 1600, 3200 ..
     */
    isoSpeedRatings: ReadonlyArray<number> | null;
    /**
     * Orientation of the image when displayed.
     *
     * This attribute shows the relation between the stored image data and the visual content orientation.
     * In other words - how a stored image should be oriented when presented to the user.
     */
    orientation: ImageContentOrientation | null;
    /**
     * Date and time when the picture was taken.
     */
    originalTime: Date | null;
    /**
     * URI of the image.
     *
     * The path to the file from which _ExifInformation_ data is collected.
     */
    uri: string;
    /**
     * User comment.
     */
    userComment: string | null;
    /**
     * White balance mode set when the picture was taken.
     */
    whiteBalance: WhiteBalanceMode | null;
    /**
     * Width of the image i.e. the number of points (pixels) per image line.
     *
     * Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
     */
    width: number | null;
}
export interface ExifInformationConstructor {
    prototype: ExifInformation;
    new(ExifInitDict?: ExifInit | null): ExifInformation;
}
/**
 * The ExifManager interface provides methods to retrieve the _ExifInformation_ object and save the Exif data of the _ExifInformation_ object in a JPEG file.
 *
 * It provides access to the API functionalities through the _tizen.exif_ interface.
 */
export interface ExifManager {
    /**
     * Gets the _ExifInformation_ object to manipulate the Exif data in a JPEG file.
     *
     * This function returns (via callback) the _ExifInformation_ object that contains the Exif data in the JPEG file.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If the file of the input parameters is not found or the file does not contain Exif data
     * *   IOError: If access to the image file is denied due to insufficient permissions
     * *   InvalidValuesError: If any input parameter contains invalid values
     * *   UnknownError: In any other error case
     *
     * @param uri URI of the JPEG file, as available in ImageContent::contentURI or returned by File::toURI().
     * @param successCallback Callback method to be invoked when Exif information has been retrieved successfully.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    getExifInfo(
        uri: string,
        successCallback: ExifInformationSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets the thumbnail of the specified JPEG file. If there is no thumbnail in the JPEG file, null is returned.
     *
     * _successCallback_ is invoked with a URI as the first argument.
     * This URI is a [data URI](http://en.wikipedia.org/wiki/Data_URI_scheme).
     * It can be used as an src attribute value of the img element.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If the file of the input parameters is not found
     * *   IOError: If access to the thumbnail file is denied due to insufficient permissions
     * *   InvalidValuesError: If any of the input parameters contains an invalid value
     * *   UnknownError: In any other error case
     *
     * @param uri URI of the JPEG file.
     * @param successCallback Callback method to be invoked when thumbnail data has been retrieved successfully.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    getThumbnail(
        uri: string,
        successCallback: ExifThumbnailSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Saves the Exif data of the _ExifInformation_ object into the JPEG file.
     *
     * The errorCallback is launched with these error types:
     *
     * *   NotFoundError: If the file of the input parameters is not found
     * *   InvalidValuesError: If any input parameter contains invalid values
     * *   UnknownError: In any other error case
     *
     * @param exifInfo Exif information object that contains the Exif data in the JPEG file.
     * @param successCallback Callback method to be invoked when Exif data has been saved successfully.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    saveExifInfo(
        exifInfo: ExifInformation,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
/**
 * The File interface represents the file abstraction in use.
 *
 * The file object permissions for the file object location and tree rooted
 * at that location depend upon the mode defined in the resolve method.
 * When a File object creates a child File object,
 * the new File object inherits its access rights from
 * the parent object without any reference to the security framework, as
 * noted in certain methods of File.
 *
 * A file handle represents either a file or a directory:
 *
 * *   For a file, the _isFile_ attribute is set to true.
 * *   For a directory, the _isDirectory_ attribute is set to true.
 *
 * A file can be opened for both read and write operations, using a
 * FileStream handle. A list of files and sub-directories can be obtained from a
 * directory and a resolve method exists to resolve files or sub-directories
 * more conveniently than processing directory listings.
 *
 * A file handle representing a file can be opened for I/O operations,
 * such as reading and writing.
 *
 * A file handle representing a directory can be used for listing all
 * files and directories rooted as the file handle location.
 *
 * @note _deprecated_ 5.0 Since 5.0
 */
export interface File {
    /**
     * The timestamp when a file is first created in the filesystem.
     *
     * This timestamp is equivalent to the timestamp when a call to createFile() succeeds.
     *
     * If the platform does not support this attribute, it will
     * be null.
     *
     * It is unspecified and platform-dependent if the creation
     * timestamp changes when a file is moved.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly created: Date | null;
    /**
     * The size of this file, in bytes.
     *
     * If an attempt to read this attribute for a directory is made, undefined is returned. To retrieve the number of files and directories contained in the directory, use the _length_ attribute.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly fileSize: number;
    /**
     * The full path of a file.
     *
     * It begins with the name of the root containing the file,
     * and including the name of the file or directory itself.
     *
     * For instance, if the RockawayBeach.mp3 file is located at music/ramones/volume1/, then the _fullPath_ is music/ramones/volume1/RockawayBeach.mp3.
     *
     * For a directory, if the volume1 directory is located at music/ramones/, then the _fullPath_ is music/ramones/volume1.
     *
     * For the special case of the root itself, if the root is music, then the _fullPath_ is music.
     *
     * The _fullPath_ is always equal to path + name.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly fullPath: string;
    /**
     * The flag indicating whether it is a directory.
     *
     * This attribute can have the following values:
     *
     * *   true if this handle is a directory
     * *   false if this handle is a file
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly isDirectory: boolean;
    /**
     * The flag indicating whether it is a file.
     *
     * This attribute can have the following values:
     *
     * *   true if this handle is a file
     * *   false if this handle is a directory
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly isFile: boolean;
    /**
     * The number of files and directories contained in a file handle.
     *
     * If an attempt to read this attribute for a file is made, undefined is returned. To retrieve the size of a file, use the _fileSize_ attribute.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly length: number;
    /**
     * The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
     *
     * Opening a file for reading does not change the modification timestamp.
     *
     * If the platform does not support this attribute, it will be null.
     *
     * It is unspecified and platform-dependent if the modified
     * timestamp changes when a file is moved.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly modified: Date | null;
    /**
     * The file name after excluding the root name and any path components.
     *
     * This is the name of this file, excluding the root name and any other path components.
     *
     * For example, if a file is located at
     * music/ramones/volume1/RockawayBeach.mp3, the _name_ is "RockawayBeach.mp3".
     *
     * For example, if a directory is located at music/ramones/volume1, the
     * _name_ is be "volume1".
     *
     * For the special case of the root itself, the _name_ is an empty string.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly name: string;
    /**
     * The parent directory handle.
     *
     * This attribute is set to null if there is no parent directory. This also implies that this directory represents a root location.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly parent: File | null;
    /**
     * The path of a file after excluding its file name.
     *
     * It begins with the name of the root containing the file, followed by the path, including the directory containing the file, but excluding the file name.
     *
     * Except in some special cases of the File representing the root itself, the last
     * character is always "/".
     *
     * For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
     * the path is music/ramones/volume1/.
     *
     * For example, if a directory is located at music/ramones/volume1, the path is
     * music/ramones/.
     *
     * For the virtual roots, the path is same as the name of the virtual root.
     * For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly path: string;
    /**
     * The file/directory access state in the filesystem.
     *
     * This attribute is set to:
     *
     * *   true - if object has read-only access at its location.
     * *   false - if object has write access at its location.
     *
     * This attribute represents the actual state of a file or directory in the filesystem. Its value is not affected by the mode used in FileSystemManager.resolve() that was used to create the _File_ object from which this _File_ object was obtained.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly readOnly: boolean;
    /**
     * Copies (and overwrites if possible and specified) a file or a
     * directory from a specified location to another specified location.
     *
     * The copy of the file or directory identified by the _originFilePath_ parameter must be created in the path passed in the _destinationFilePath_ parameter.
     *
     * The file or directory to copy must be under the Directory from which the method is invoked, otherwise the operation must not be performed.
     *
     * If the copy is performed successfully, the onsuccess() method is invoked.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   NotFoundError - If the _originFilePath_ does not correspond to a valid file or _destinationPath_ is not a valid path.
     * *   IOError - If the file in which the copyTo() method is invoked is a file (and not a directory), _originFilePath_ corresponds to a file or directory in use by another process, _overwrite_ parameter is false and _destinationFilePath_ corresponds to an existing file or directory.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param originFilePath Origin full virtual file or directory path and it must be under the current directory.
     * @param destinationFilePath New full virtual file path or directory path.
     * @param overwrite Attribute to determine whether overwriting is allowed or not
     * If set to true, it enforces overwriting an existing file.
     * @param onsuccess Callback method to be invoked when the file has been copied.
     * @param onerror Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    copyTo(
        originFilePath: string,
        destinationFilePath: string,
        overwrite: boolean,
        onsuccess?: SuccessCallback | null,
        onerror?: ErrorCallback | null,
    ): void;
    /**
     * Creates a new directory.
     *
     * A new directory will be created relative to the current
     * directory that this operation is performed on. The implementation will attempt to
     * create all necessary sub-directories specified in the dirPath, as well. The use of "."
     * or ".." in path components is not supported.
     *
     * This operation can only be performed on file handles that represent directories (that is, _isDirectory_ == true).
     *
     * If the directory is successfully created, it will be returned.
     *
     * In case the directory cannot be created, an error must be thrown with the appropriate error type.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param dirPath Relative directory path and it only contains characters supported by the underlying filesystem.
     *
     * @returns File handle of the new directory.
     * The new _File_ object has "rw" access rights, as it inherits this from the _File_ object on which the createDirectory() method is called.
     *
     * @throws WebAPIException with error type IOError, if the dirPath already exists, if the file in which the createDirectory() method is invoked is a file (and not a directory).
     * @throws WebAPIException with error type InvalidValuesError, if the dirPath does not contain a valid path.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    createDirectory(dirPath: string): File;
    /**
     * Creates a empty new file in a specified location that is relative to the directory indicated by current _File_ object's _path_ attribute.
     *
     * The use of "." or ".." in path components is not supported. This operation can only be performed on file handlers that represent a directory (that is, _isDirectory_ == true).
     *
     * If the file is successfully created, a file handle must be returned by this method.
     *
     * In case the file cannot be created, an error must be thrown with the appropriate error type.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param relativeFilePath New file path and it should only contain characters supported by the underlying filesystem.
     *
     * @returns File handle for the new empty file.
     * The new _File_ object has "rw" access rights, as it inherits this from the _File_ object on which the createFile() method is
     * called.
     *
     * @throws WebAPIException with error type IOError, if relativeFilePath already exists, if the _File_ in which the createFile() method is invoked is a file (not a directory).
     * @throws WebAPIException with error type InvalidValuesError, if relativeFilePath contains an invalid value.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    createFile(relativeFilePath: string): File;
    /**
     * Deletes a specified directory and directory tree if specified.
     *
     * This method attempts to asynchronously delete a directory or directory tree under the current directory.
     *
     * If the _recursive_ parameter is set to true, all the directories and files under the specified directory must be deleted. If the _recursive_ parameter is set to false, the directory is only deleted if it is empty, otherwise an IOError error type will be passed in onerror().
     *
     * If the deletion is performed successfully, the onsuccess() is invoked.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   NotFoundError -If the passed directory does not correspond to a valid directory.
     * *   IOError - If the _File_ in which the delete method is invoked is a file (and not a directory), the directory is in use by another process or the directory is not empty and _recursive_ argument is false.
     * This code is also used if a recursive deletion partially fails and any data deleted so far cannot be recovered. This may occur due to the lack of filesystem permissions or if any directories or files are already opened by other processes.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param directoryPath Full virtual path to the directory to delete (must be under the current one).
     * @param recursive Flag indicating whether the deletion is recursive or not
     * When set to true recursive deletion is allowed. Also, this function deletes
     * all data in all subdirectories and so needs to be used with caution.
     * @param onsuccess Callback method to be invoked when a directory is successfully deleted.
     * @param onerror Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    deleteDirectory(
        directoryPath: string,
        recursive: boolean,
        onsuccess?: SuccessCallback | null,
        onerror?: ErrorCallback | null,
    ): void;
    /**
     * Deletes a specified file.
     * This function attempts to asynchronously delete a file under the current directory.
     *
     * If the deletion is performed successfully, the onsuccess() is invoked.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   NotFoundError - If the file does not correspond to a valid file.
     * *   IOError - If the file in which the delete() method is invoked is a file (not a directory), the file is in use by another process, or there is no permission in the file system.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param filePath Full virtual path to the file to delete (must be under the current directory).
     * @param onsuccess Callback method to be invoked when the file is successfully deleted.
     * @param onerror Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    deleteFile(filePath: string, onsuccess?: SuccessCallback | null, onerror?: ErrorCallback | null): void;
    /**
     * Lists all files in a directory.
     *
     * The list of files is passed as a File\[\] in onsuccess() and contains directories and files. However, the directories "." and ".." must not be returned. Each _File_ object that is part of the array must inherit all the access rights (that is, one of the values in FileMode) from the _File_ object in which this method is invoked.
     *
     * If the filter is passed and contains valid values, only those directories and files in the directory that match the filter criteria specified in the _FileFilter_ interface must be returned in the onsuccess() method. If no filter is passed, the filter is null or undefined, or the filter contains invalid values, the implementation must return the full list of files in the directory.
     *
     * If the directory does not contain any files or directories, or the filter criteria do not match any files or directories, the onsuccess() is invoked with an empty array.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   IOError - If the operation is launched on a file (not a directory).
     * *   InvalidValuesError - If any of the input parameters contain an invalid value.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param onsuccess Callback method to be invoked when the list operation has been successfully completed.
     * @param onerror Callback method to be invoked when an error has occurred.
     * @param filter Criteria to restrict the listed files.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    listFiles(onsuccess: FileArraySuccessCallback, onerror?: ErrorCallback | null, filter?: FileFilter | null): void;
    /**
     * Moves (and overwrites if possible and specified) a file or a directory from a specified location to another.
     * This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
     *
     * The file or directory identified by the _originFilePath_ parameter is moved to the path passed in the _destinationFilePath_ parameter.
     *
     * The file to move must be under the directory from which the method is invoked, else the operation can not be performed.
     *
     * If the file or directory is moved successfully, the onsuccess() method is invoked.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   NotFoundError - If _originFilePath_ does not correspond to a valid file or _destinationPath_ is not a valid path.
     * *   IOError - If the _File_ in which the moveTo() method is invoked is a file (not a directory), _originFilePath_ corresponds to a file or directory in use by another process, overwrite parameter is false and _destinationFilePath_ corresponds to an existing file or directory.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param originFilePath Origin full virtual file or directory path and it must be under the current directory.
     * @param destinationFilePath New full virtual file path or directory path.
     * @param overwrite Flag indicating whether to overwrite an existing file.
     * When set to true, the files can be overwritten.
     * @param onsuccess Callback method to be invoked when the file has been moved.
     * @param onerror Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    moveTo(
        originFilePath: string,
        destinationFilePath: string,
        overwrite: boolean,
        onsuccess?: SuccessCallback | null,
        onerror?: ErrorCallback | null,
    ): void;
    /**
     * Opens the file in the given mode supporting a specified encoding.
     *
     * This operation is performed asynchronously. If the file is opened successfully, the onsuccess() method is invoked with a _FileStream_ that can be used for reading and writing the file, depending on the mode. The returned _FileStream_ instance includes a file pointer, which represents the current position in the file. The file pointer, by default, is at the start of the file, except in the case of opening a file in append ("a") mode, in which case the file pointer points to the end of the file.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   IOError - The operation is launched on a directory (not a file), the file is not valid or it does not exist.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param mode Mode in which the file is opened
     * **"r"** for reading
     * **"a"** for appending
     * **"w"** for \[over\]writing
     * **"rw"** for reading and writing
     * @param onsuccess Callback method to be invoked when a file has been opened.
     * @param onerror Callback method to be invoked when an error has occurred.
     * @param encoding Encoding to use for read/write operations on the file, at least the following encodings must be supported:
     * "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     * "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" latin1 encoding
     * If no encoding is passed by the developer, then the default platform encoding must be used.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    openStream(
        mode: FileMode,
        onsuccess: FileStreamSuccessCallback,
        onerror?: ErrorCallback | null,
        encoding?: string | null,
    ): void;
    /**
     * Reads the content of a file as a DOMString.
     *
     * If the operation is successfully executed, the onsuccess() method is invoked and a DOMString is passed as input parameter that represents the file content in the format determined by the _encoding_ parameter.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   IOError - If the operation is launched on a directory (not a file), the file is not valid, or the file does not exist.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param onsuccess Callback method to be invoked when a file has been successfully read.
     * @param onerror Callback method to be invoked when an error occurs while reading a file.
     * @param encoding Encoding for read/write operations on a file, at least the following encodings must be supported:
     * "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     * "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" latin1 encoding
     * If no encoding is passed by the developer, then the default platform encoding must be used.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    readAsText(onsuccess: FileStringSuccessCallback, onerror?: ErrorCallback | null, encoding?: string | null): void;
    /**
     * Resolves an existing file or directory relative to the current directory this operation is performed on and returns a file handle for it.
     *
     * The _filePath_ is not allowed to contain the "." or ".." directory entries inside its value.
     *
     * The encoding of file paths is [UTF-8](http://www.ietf.org/rfc/rfc2279.txt).
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param filePath Relative file path or file URI to resolve.
     *
     * @returns File handle of the file.
     * The new _File_ object inherits its access rights from the _File_ object on which this resolve() method is called.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if the file path contains an invalid value.
     * @throws WebAPIException with error type IOError, if the method is executed in a _File_ object that does not represent a directory (that is, _isDirectory_ attribute is false).
     * @throws WebAPIException with error type NotFoundError, if a file does not exist for the passed file path.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    resolve(filePath: string): File;
    /**
     * Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element).
     * The URI has no specific expiration, it should be valid at least as long as the file exists.
     *
     * If that URI corresponds to any of the public virtual roots (that is
     * images, videos, music, documents and downloads) the URI
     * must be globally unique and could be used by any widget.
     *
     * If that URI corresponds to a file located in any a widget's private areas (such as wgt-package, wgt-private, wgt-private-tmp),
     * the generated URI must be unique for that file and for the widget making the request (such as including some derived from the widget ID in the URI).
     * These URIs must not be accessible to other widgets, apart from the one invoking this method.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @returns URI that identifies the file or null if an error occurs.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurred.
     */
    toURI(): string;
}
/**
 * Object representing file, used for read/write operations.
 *
 * Each read or write operation moves position in file forwards to the end of read/written data (there is an underlying file position's indicator).
 *
 * @since 5.0
 *
 * @remark Due to multibyte UTF-8 encoding, if current file's pointer does not point to beginning of multibyte sequence (see: UTF-16, emoji), using [seek()](#FileHandle::seek) combined with UTF-8
 * [readString()](#FileHandle::readString) will result in string starting from valid character. Incomplete byte sequence at the beginning may be omitted.
 * Be aware about using seek and write methods together. It can result in writing in the middle of multibyte sequence, which can lead to file with corrupted content.
 */
export interface FileHandle {
    /**
     * Path, as passed to [openFile](#FileSystemManager::openFile).
     */
    readonly path: Path;
    /**
     * Closes file handle.
     *
     * Closes the given file stream. Closing file guarantees writing changes made to _FileHandle_ to the storage device. Further operations on this file handle are not allowed.
     *
     * @remark This method is synchronous. If any asynchronous method was called before close, close will block further instructions until all background jobs finish execution.
     * Note, that if file handle functions are put into any callbacks and this callback was not yet called, synchronous close will wait only for already ordered background jobs to finish, preventing successful execution of any further operations on closed file handle.
     *
     * @throws WebAPIException with error type IOError, if close fails or any error related to file handle occurs.
     */
    close(): void;
    /**
     * Closes file handle.
     *
     * Closes the given file stream. Closing file guarantees writing changes made to _FileHandle_ to the storage device. Further operations on this file handle are not allowed.
     *
     * Successful closing invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if close fails or any error related to file handle occurs.
     *
     * This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
     *
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    closeNonBlocking(onsuccess?: SuccessCallback | null, onerror?: ErrorCallback | null): void;
    /**
     * Flushes data.
     *
     * For file handles with permission to write, flush writes any changes made to file content to underlying buffer.
     *
     * Flush does not ensure that data is written on storage device, it only synchronizes RAM with file descriptor.
     * To ensure storage synchronization use _sync_, _close_ or their asynchronous equivalent methods, which guarantee such synchronization.
     *
     * @throws WebAPIException with error type IOError, if flush fails or any error related to file handle occurs.
     */
    flush(): void;
    /**
     * Flushes data.
     *
     * For file handles with permission to write, flush writes any changes made to file content to underlying buffer.
     *
     * Flush does not ensure that data is written on storage device, it only synchronizes RAM with file descriptor.
     * To ensure storage synchronization use _sync_, _close_ or their asynchronous equivalent methods, which guarantee such synchronization.
     *
     * Successful flushing invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if flush fails or any error related to file handle occurs.
     *
     * This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
     *
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    flushNonBlocking(onsuccess?: SuccessCallback | null, onerror?: ErrorCallback | null): void;
    /**
     * Reads file content as [Blob](#Blob).
     *
     * Sets file handle position indicator at the end of read data.
     *
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     *
     * @returns Blob object with file content.
     *
     * @throws WebAPIException with error type InvalidValuesError if given _size_ exceeds maximum value supported by the device.
     * @throws WebAPIException with error type IOError, if read fails or any error related to file handle occurs.
     */
    readBlob(size?: number): Blob;
    /**
     * Reads file content as [Blob](#Blob).
     *
     * Sets file handle position indicator at the end of read data.
     * readBlobNonBlocking is executed in background and does not block further instructions.
     *
     * Successful read operation invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if read fails or any error related to file handle occurs.
     *
     * @param onsuccess Callback function with [Blob](#Blob) object to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     *
     * @throws WebAPIException with error type InvalidValuesError if given _size_ exceeds maximum value supported by the device.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    readBlobNonBlocking(
        onsuccess?: ReadBlobSuccessCallback | null,
        onerror?: ErrorCallback | null,
        size?: number | null,
    ): void;
    /**
     * Reads file content as binary data.
     *
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of read data.
     *
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     *
     * @returns Read data as Uint8Array.
     *
     * @throws WebAPIException with error type InvalidValuesError if given _size_ exceeds maximum value supported by the device.
     * @throws WebAPIException with error type IOError, if read fails or any error related to file handle occurs.
     */
    readData(size?: number): Uint8Array;
    /**
     * Reads file content as binary data.
     *
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of read data.
     * readDataNonBlocking is executed in background and does not block further instructions.
     *
     * Successful read operation invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if read fails or any error related to file handle occurs.
     *
     * @param onsuccess Callback function with read data from file to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     *
     * @throws WebAPIException with error type InvalidValuesError if given _size_ exceeds maximum value supported by the device.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    readDataNonBlocking(
        onsuccess?: ReadDataSuccessCallback | null,
        onerror?: ErrorCallback | null,
        size?: number | null,
    ): void;
    /**
     * Reads file content as string.
     *
     * Sets file handle position indicator at the end of read data.
     * Reads given number of characters.
     *
     * @remark Resulting string can have _length_ larger than _count_, due to possible UTF-16 surrogate pairs in it. String length in JavaScript is counted in UTF-16 encoding, so for example string containing one emoji (surrogate of two UTF-16) character will have _length_ of two.
     *
     * @param count Number of characters to read from file. If none is given, method attempts to read whole file.
     * @param inputEncoding Default value: "UTF-8". Encoding to use for read operation on the file, at least the following encodings must be supported:
     * "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     * "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     *
     * @returns String with data read from file.
     *
     * @throws WebAPIException with error type InvalidValuesError if given _count_ exceeds maximum value supported by the device.
     * @throws WebAPIException with error type IOError, if read fails or any error related to file handle occurs.
     * @throws WebAPIException with error type NotSupportedError, if the given encoding is not supported.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    readString(count?: number | null, inputEncoding?: string): string;
    /**
     * Reads file content as string.
     *
     * Reads given number of characters.
     * Sets file handle position indicator at the end of read data.
     * readStringNonBlocking is executed in background and does not block further instructions.
     *
     * Successful read operation invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if read fails or any error related to file handle occurs.
     *
     * @param onsuccess Callback function with read data from file to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param count Number of characters to read from file. If none is given, method attempts to read whole file.
     * @param inputEncoding Default value: "UTF-8". Encoding to use for read operation on the file, at least the following encodings must be supported:
     * "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     * "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     *
     * @throws WebAPIException with error type InvalidValuesError if given _count_ exceeds maximum value supported by the device.
     * @throws WebAPIException with error type NotSupportedError, if the given encoding is not supported.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    readStringNonBlocking(
        onsuccess?: ReadStringSuccessCallback | null,
        onerror?: ErrorCallback | null,
        count?: number,
        inputEncoding?: string,
    ): void;
    /**
     * Sets position indicator in file stream to offset.
     *
     * Note, that current position indicator value, can be obtained by calling seek(0, "CURRENT").
     *
     * @param offset Number of bytes to shift the position relative to whence.
     * @param whence Determines position in file stream to which offset is added. Default value: "BEGIN".
     *
     * @returns File position indicator.
     *
     * @throws WebAPIException with error type IOError, if seek fails or any error related to file handle occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    seek(offset: number, whence?: BaseSeekPosition): number;
    /**
     * Sets position indicator in file stream to offset.
     *
     * Successful seek operation invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if any error related to file handle occurs.
     *
     * Note, that current position indicator value, can be obtained in SeekSuccessCallback by calling seekNonBlocking(0, "CURRENT").
     * seekNonBlocking is executed in background and does not block further instructions.
     *
     * @param offset Number of bytes to shift the position relative to whence.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param whence Determines position in file stream to which offset is added. Default value: "BEGIN".
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    seekNonBlocking(
        offset: number,
        onsuccess?: SeekSuccessCallback | null,
        onerror?: ErrorCallback | null,
        whence?: BaseSeekPosition,
    ): void;
    /**
     * Synchronizes data to storage device.
     *
     * The sync function is intended to force a physical write of data from the buffer cache and to assure that after a system crash or other failure that all data up to the time of the sync() call is recorded on the disk.
     *
     * @throws WebAPIException with error type IOError, if sync fails or any error related to file handle occurs.
     */
    sync(): void;
    /**
     * Synchronizes data to storage device.
     *
     * The syncNonBlocking function is intended to force a physical write of data from the buffer cache and to assure that after a system crash or other failure that all data up to the time of the syncNonBlocking() execution is recorded on the disk.
     *
     * Successful syncing invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if sync fails or any error related to file handle occurs.
     *
     * This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
     *
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    syncNonBlocking(onsuccess?: SuccessCallback | null, onerror?: ErrorCallback | null): void;
    /**
     * Writes [Blob](#Blob) to file.
     *
     * Sets file handle position indicator at the end of written data.
     *
     * @param blob Object of type Blob, which content will be written to a file.
     *
     * @throws WebAPIException with error type IOError, if write fails or any error related to file handle occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    writeBlob(blob: Blob): void;
    /**
     * Writes [Blob](#Blob) to file.
     *
     * Sets file handle position indicator at the end of written data.
     * writeBlobNonBlocking is executed in background and does not block further instructions.
     *
     * Successful write operation invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if write fails or any error related to file handle occurs.
     *
     * @param blob Object of type Blob, which content will be written to a file.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    writeBlobNonBlocking(blob: Blob, onsuccess?: SuccessCallback | null, onerror?: ErrorCallback | null): void;
    /**
     * Writes binary data to file.
     *
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of written data.
     *
     * @param data An array of type Uint8Array, which content will be written to file as binary data.
     *
     * @throws WebAPIException with error type IOError, if write fails or any error related to file handle occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    writeData(data: Uint8Array): void;
    /**
     * Writes binary data to file.
     *
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of written data.
     * writeDataNonBlocking is executed in background and does not block further instructions.
     *
     * Successful write operation invokes _onsuccess_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if write fails or any error related to file handle occurs.
     *
     * @param data An array of type Uint8Array, which content will be written to file as binary data.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    writeDataNonBlocking(data: Uint8Array, onsuccess?: SuccessCallback | null, onerror?: ErrorCallback | null): void;
    /**
     * Writes inputString content to a file.
     *
     * Sets file handle position indicator at the end of written data.
     *
     * @param inputString String value to be written to a file.
     * @param outputEncoding Default value: UTF-8. Encoding to use for write operation on the file, at least the following encodings must be supported:
     * "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     * "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     *
     * @returns Number of bytes written (can be more than _inputString_ length for multibyte encodings and will never be less)
     *
     * @throws WebAPIException with error type IOError, if input/output error occurs.
     * @throws WebAPIException with error type NotSupportedError, if the given encoding is not supported.
     */
    writeString(inputString: string, outputEncoding?: string): number;
    /**
     * Writes inputString content to a file.
     *
     * Sets file handle position indicator at the end of written data.
     * writeStringNonBlocking is executed in background and does not block further instructions.
     *
     * Successful write operation invokes _successCallback_ function, if specified. In case of failure _onerror_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if write fails or any error related to file handle occurs.
     *
     * @param inputString String value to be written to a file.
     * @param onsuccess Callback function with a number of bytes written as parameter to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param outputEncoding Default value: "UTF-8". Encoding to use for write operation on the file, at least the following encodings must be supported:
     * "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     * "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     *
     * @throws WebAPIException with error type NotSupportedError, if the given encoding is not supported.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     */
    writeStringNonBlocking(
        inputString: string,
        onsuccess?: WriteStringSuccessCallback | null,
        onerror?: ErrorCallback | null,
        outputEncoding?: string,
    ): void;
}
/**
 * The FileStream interface represents a handle to a File opened for read and/or write operations.
 * Read and write operations are performed relative to a position attribute, which is a pointer that represents the current position in the file.
 *
 * A series of read/write methods are available that permit both binary and text to be processed.
 *
 * Once a file stream is closed, any operation attempt made on this stream results in a standard JavaScript error.
 *
 * The read/write operations in this interface do not throw any security exceptions as the access rights are expected to be granted through the initial resolve() method or through the openStream() method of the _File_ interface. Therefore, all actions performed on a successfully resolved File and FileStream are expected to succeed. This avoids successive asynchronous calls and may potentially increase application for a user.
 *
 * @note _deprecated_ 5.0 Since 5.0
 */
export interface FileStream {
    /**
     * The number of bytes that are available for reading from the stream.
     *
     * The number of bytes available for reading is the maximum amount of bytes that can be read in the next read operation.
     * It corresponds to the number of bytes available after the file pointer denoted by the _position_ attribute.
     *
     * \-1 if EOF is true.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly bytesAvailable: number;
    /**
     * The flag indicating whether the current file pointer is at the end of the file.
     *
     * If set to true, this attribute indicates that the file pointer is at the end of the file.
     *
     * If set to false, this attribute indicates that the file pointer is not at the end of the file and so it is anywhere within the file.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    readonly eof: boolean;
    /**
     * The flag indicating the stream position for reads/writes.
     *
     * The stream position is an offset of bytes from the start of the file stream. When invoking an operation that reads or writes from the stream, the operation will take place from the byte defined by this _position_ attribute. If the read or write operation is successful, the position of the stream is advanced by the number of bytes read or written. If the read/write operation is not successful, the position of the stream is unchanged.
     *
     * @note _deprecated_ 5.0 Since 5.0
     */
    position: number;
    /**
     * Closes this FileStream.
     *
     * Flushes any pending buffered writes and closes the File. Always succeeds.
     * Note that pending writes might not succeed.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     */
    close(): void;
    /**
     * Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string.
     * The resulting string length might be shorter than _charCount_ if EOF is true.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param charCount Number of characters being read.
     *
     * @returns Array of read characters as a string.
     *
     * @throws WebAPIException with error type IOError, if a read error occurs, such as the bytes in the stream cannot be decoded with the encoding in use.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    read(charCount: number): string;
    /**
     * Reads the specified number of bytes from this FileStream, encoding the result in base64.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param byteCount Number of bytes to read.
     *
     * @returns Array of read characters as base64 encoding string.
     *
     * @throws WebAPIException with error type IOError, if a read error occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    readBase64(byteCount: number): string;
    /**
     * Reads the specified number of bytes from a FileStream.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param byteCount Number of bytes to read.
     *
     * @returns Result of read bytes as a byte (or number) array.
     *
     * @throws WebAPIException with error type IOError, if a read error occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    readBytes(byteCount: number): number[];
    /**
     * Writes the specified DOMString to a FileStream.
     *
     * @note _deprecated_ 5.0 Since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param stringData Actual string to write.
     *
     * @throws WebAPIException with error type IOError, if a write error occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    write(stringData: string): void;
    /**
     * Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param base64Data The base64 data to written.
     *
     * @throws WebAPIException with error type IOError, if an error occurs during writeBase64.
     * @throws WebAPIException with error type InvalidValuesError, if the input parameter contains an invalid value
     * (e.g. the base64Data input parameter is not a valid Base64 sequence).
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    writeBase64(base64Data: string): void;
    /**
     * Writes the specified bytes to this FileStream.
     *
     * @note _deprecated_ 5.0 Since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param byteData Byte data array being written.
     *
     * @throws WebAPIException with error type IOError, if a write error occurs.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    writeBytes(byteData: number[]): void;
}
/**
 * The FileSystemManager interface provides access to the Filesystem API.
 *
 * This manager interface exposes the Filesystem base API and provides functionalities, such
 * as determining root and default locations, resolving a given location into a file handle and registering filesystem listeners for filesystem events.
 */
export interface FileSystemManager {
    /**
     * The maximum file or directory name length for the current platform.
     *
     * @since 5.0
     */
    readonly maxNameLength: number;
    /**
     * The maximum path length limit for the current platform.
     */
    readonly maxPathLength: number;
    /**
     * Adds a listener to subscribe to notifications when a change in storage state occurs.
     *
     * The most common usage for this method is to watch for any additions and removals of external storages.
     *
     * When executed, it returns a subscription identifier that identifies the watch operation. After returning the identifier, the watch operation is started asynchronously. The onsuccess method will be invoked every time a storage state changes. If the attempt fails, the onerror if present will be invoked with the relevant error type.
     *
     * The watch operation must continue until the removeStorageStateChangeListener() method is called with the corresponding subscription identifier.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param onsuccess Callback method to be invoked when any change is made to storage state.
     * @param onerror Callback method to be invoked when an error occurs during the watch process.
     *
     * @returns Subscription identifier.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addStorageStateChangeListener(onsuccess: FileSystemStorageSuccessCallback, onerror?: ErrorCallback | null): number;
    /**
     * Recursively copies directory pointed by _sourcePath_ to _destinationPath_.
     *
     * The method merges content of the directory pointed by _sourcePath_ with content of the directory pointed by _destinationPath_, if exists.
     * If the directory pointed by _destinationPath_ does not exist, it is created.
     *
     * Successful directory copying invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if a directory with conflicting name already exists and _overwrite_ is equal to false or any of the input/output error occurs.
     * *   NotFoundError, if the _sourcePath_ does not point to an existing directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param sourcePath Path to directory.
     * @param destinationPath Path for copied directory. The path must consist of path to an existing directory concatenated with '/' and the name of destination directory.
     * @param overwrite Flag indicating whether to overwrite existing content. If _overwrite_ is equal to true, the file or directory with conflicting name will be overwritten.
     * Otherwise, _errorCallback_ will be called with _IOError_.
     * By default, _overwrite_ is equal to false.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value. For example, the _sourcePath_ or the _destinationPath_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    copyDirectory(
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Copies file from location pointed by _sourcePath_ to _destinationPath_.
     *
     * Successful file copying invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if any of the input/output error occurs.
     * *   NotFoundError, if the _sourcePath_ does not point to an existing file.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param sourcePath Path to file.
     * @param destinationPath Path for copied file. The path must consist of path to an existing directory concatenated with '/' and the name of new file.
     * @param overwrite Flag indicating whether to overwrite an existing file. If _overwrite_ is set to true and file pointed by _destinationPath_ already exists, the method will overwrite the file.
     * Otherwise, if a file with conflicting name already exists _errorCallback_ is called.
     * By default, _overwrite_ is equal to false.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value. For example, the _sourcePath_ or the _destinationPath_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    copyFile(
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Creates directory pointed by _path_.
     *
     * Successful directory creation invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if any of the input/output error occurs.
     * *   NotFoundError, if directory given in _path_ does not exist and _makeParents_ is set to false.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param path Path to directory to create.
     * @param makeParents Flag indicating whether lacking directories should be created.
     * For instance, if method is invoked with parameter _path_ equal to documents/path/to/dir and
     * there is no directory "path" in "documents" virtual root, directories "path", "to" and "dir" will be created.
     * By default, _makeParents_ is equal to true.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    createDirectory(
        path: Path,
        makeParents?: boolean,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Deletes directory or directory tree under the current directory pointed by _path_.
     *
     * Successful directory deletion invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if a directory is not empty and _recursive_ is equal to false.
     * *   NotFoundError, if the _path_ does not point to an existing directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param path A path to directory.
     * @param recursive Flag indicating whether the deletion is recursive or not. If _recursive_ is set to true the method will delete content of a given directory recursively.
     * Otherwise, the method succeeds only if the directory is empty, on other cases _errorCallback_ is called.
     * By default, _recursive_ is equal to true.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    deleteDirectory(
        path: Path,
        recursive?: boolean,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Deletes file pointed by _path_.
     *
     * Successful file deletion invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if any of the input/output error occurs.
     * *   NotFoundError, if the _path_ does not point to an existing file.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param path Path to file.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    deleteFile(path: Path, successCallback?: PathSuccessCallback | null, errorCallback?: ErrorCallback | null): void;
    /**
     * Returns path to directory for given _path_.
     *
     * Strips trailing '/', then breaks _path_ into two components by last _path_ separator, returns first component.
     *
     * @since 5.0
     *
     * @remark This function does not check if _path_ is valid or exists in filesystem.
     *
     * @param path Path to file or directory.
     *
     * @returns Path to directory for given path.
     */
    getDirName(path: string): string;
    /**
     * Gets information about a storage based on its label.
     * For example: "MyThumbDrive", "InternalFlash".
     *
     * The _onsuccess_ method receives the data structure as an input argument containing additional information about the drive.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   NotFoundError - If no drive was found with the given label.
     * *   UnknownError - If any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param label Storage label.
     * @param onsuccess Callback method to be invoked when the list of storages is available, passing the storage list to the callback.
     * @param onerror Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    getStorage(label: string, onsuccess: FileSystemStorageSuccessCallback, onerror?: ErrorCallback | null): void;
    /**
     * Checks if given _path_ points to a directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param path A path to be tested.
     *
     * @returns true if _path_ points to a directory, false otherwise.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     * @throws WebAPIException with error type IOError, if any of the input/output error occurs.
     * @throws WebAPIException with error type NotFoundError, if the _path_ does not point to an existing file or directory.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    isDirectory(path: Path): boolean;
    /**
     * Checks if given _path_ points to a file.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param path A path to be tested.
     *
     * @returns true if _path_ points to a file, false otherwise.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     * @throws WebAPIException with error type IOError, if any of the input/output error occurs.
     * @throws WebAPIException with error type NotFoundError, if the _path_ does not point to an existing file or directory.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    isFile(path: Path): boolean;
    /**
     * Lists directory content located in _path_.
     *
     * Successful listing of directory content invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * If the filter is passed and contains valid values, only those directories or files in the directory that match the filter criteria specified in the _FileFilter_ interface are returned in successCallback method.
     * If the filter is null or undefined the implementation must return the full list of files in the directory.
     *
     * If the directory does not contain any files or directories, or the filter criteria do not match with any files or directories, the _successCallback_ is invoked with an empty array.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if any of the input/output error occurs.
     * *   NotFoundError, if the _path_ does not point to an existing directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param path A path to directory.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @param filter Filter to restrict the listed files.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value. For example, the _path_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    listDirectory(
        path: Path,
        successCallback: ListDirectorySuccessCallback,
        errorCallback?: ErrorCallback | null,
        filter?: FileFilter | null,
    ): void;
    /**
     * Lists the available storages (both internal and external) on a device.
     * The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found.
     * It can get storages that would have a label named as "internal0", virtual roots (images, documents, ...), "removable1", "removable2".
     * "removable1" label is used to resolve sdcard and "removable2" label is used to resolve USB host, if supported.
     * The vfat filesystem used to sdcard filesystem widely is not case-sensitive.
     * If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
     *
     * Labels can differ depending on platform implementation.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * *   UnknownError - If any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param onsuccess Callback method to be invoked when a list of storage is available and passing the storage list to the callback.
     * @param onerror Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     */
    listStorages(onsuccess: FileSystemStorageArraySuccessCallback, onerror?: ErrorCallback | null): void;
    /**
     * Recursively moves directory pointed by _sourcePath_ to _destinationPath_.
     *
     * The method merges content of the directory pointed by _sourcePath_ with content of the directory with the same name in _destinationPath_, if exists.
     *
     * Successful directory moving invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if a directory with conflicting name already exists and _overwrite_ is equal to false or any of the input/output error occurs.
     * *   NotFoundError, if the _sourcePath_ or _destinationPath_ does not point to an existing directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param sourcePath A path to directory.
     * @param destinationPath A destination directory path to move the directory to.
     * @param overwrite Flag indicating whether to overwrite existing content. If _overwrite_ is equal to true, the file or directory with conflicting name will be overwritten.
     * Otherwise, _errorCallback_ will be called with _IOError_.
     * By default, _overwrite_ is equal to false.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value. For example, the _sourcePath_ or the _destinationPath_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    moveDirectory(
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Moves file pointed by _sourcePath_ to _destinationPath_.
     *
     * Successful file moving invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if a file with conflicting name already exists and _overwrite_ is equal to false or any of the input/output error occurs.
     * *   NotFoundError, if the _sourcePath_ or _destinationPath_ does not point to an existing file or directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param sourcePath Path to file.
     * @param destinationPath A destination directory path to move the file to.
     * @param overwrite Flag indicating whether to overwrite an existing file. If _overwrite_ is set to true and file with the same name in _destinationPath_ already exists, the method will overwrite the file.
     * Otherwise, if a file with conflicting name already exists _errorCallback_ is called.
     * By default, _overwrite_ is equal to false.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value. For example, the _sourcePath_ or the _destinationPath_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    moveFile(
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Opens a file or creates a file pointed by _path_.
     *
     * If the operation succeeds, a file handle to the newly created or opened file is returned, otherwise an exception is thrown.
     *
     * Following file open modes are supported:
     *
     * *   a - append mode. File position indicator is always set to the first position after the last character of the file and cannot be modified with seek operations. Write operations always append content to the end of the file. Original file content are not modified. Read operations cannot be performed. If the file does not exist, it is created.
     * *   r - read mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Write operations cannot be performed. Original file content may be read in this mode. If the file does not exist, NotFoundError is thrown.
     * *   rw - read and write mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Original file content may be read or modified in this mode. If the file does not exist, NotFoundError will be thrown.
     * *   rwo - read and write mode, overwriting existing file content. File position indicator is initially set to the beginning of the file. Read and write operations may be performed. Original file content are deleted before opening the file. If the file does not exist, it is created.
     * *   w - write mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Read operations cannot be performed. Original file content are deleted before opening the file. If the file does not exist, it is created.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @remark Write permission is needed, when file is opened in modes: a, rw, rwo and w. Read permission is needed, when file is opened in modes: r, rw and rwo.
     *
     * @param path Path to the file.
     * @param openMode Mode in which the file is to be opened.
     * @param makeParents Flag indicating whether lacking directories should be created.
     * For instance, if method is invoked with parameter _path_ equal to documents/path/to/dir/file.ext and
     * there is no directory "path" in "documents" virtual root, directories "path", "to" and "dir" will be created, as well as the new file "file.ext".
     * By default, _makeParents_ is equal to true. Its value is ignored, when _openMode_ is r or rw.
     *
     * @returns Object representing open file.
     *
     * @throws WebAPIException with error type IOError, if a file is not available for open or any other IO error occurs.
     * @throws WebAPIException with error type NotFoundError, if the _path_ does not point to an existing file.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    openFile(path: Path, openMode: FileMode, makeParents?: boolean): FileHandle;
    /**
     * Checks if given _path_ exists.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @param path A path to be tested.
     *
     * @returns true if _path_ points to a existing element, false otherwise.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     * @throws WebAPIException with error type IOError, if input/output error occurs.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    pathExists(path: Path): boolean;
    /**
     * Removes a listener to unsubscribe from a storage watch operation.
     *
     * If the _watchId_ argument is valid and corresponds to a subscription already in place, the watch process will be stopped and no further callbacks will be invoked.
     * Otherwise, the method call has no effect.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param watchId Subscription identifier.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    removeStorageStateChangeListener(watchId: number): void;
    /**
     * Renames file or directory located in _path_ to name _newName_.
     *
     * Successful renaming invokes _successCallback_ function, if specified. In case of failure _errorCallback_ function is invoked, if specified.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   IOError, if a file or a directory with conflicting name already exists or any of the input/output error occurs.
     * *   NotFoundError, if the _path_ does not point to an existing file or directory.
     *
     * @since 5.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     *
     * @param path A path to directory or file.
     * @param newName A new name of directory or file.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ or _newName_ is invalid.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    rename(
        path: Path,
        newName: string,
        successCallback?: PathSuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Resolves a location to a file handle after validating it.
     *
     * A _location_ can contain a virtual path like "documents/some\_file.txt"
     * or a file URI like "file:///my\_strange\_path/some\_file.png".
     * A _location_ is not allowed to contain the "." or ".." directory entries inside its value.
     *
     * The list of root locations that must be supported by a compliant implementation are:
     *
     * *   documents - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.
     * *   images - The default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.
     * *   music - The default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.
     * *   videos - The default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.
     * *   downloads - The default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.
     * *   ringtones - The default folder in which ringtones (such as mp3, etc.) are stored in the device.
     * *   camera - The default folder in which pictures and videos taken by a device are stored.
     * *   wgt-package - The read-only folder to which the content of a widget file is extracted.
     * *   wgt-private - The private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.
     * *   wgt-private-tmp - Temporary, the private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.
     *
     * The _mode_ parameter specifies whether the resulting _File_ object has read-only access (r access), read and write access (rw access), append access (a access), or write access (w access) to the root location containing directory tree.
     * Permission for the requested access is obtained from the security framework. Once the resulting _File_ object has access, access is inherited by any other _File_ objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of _File_.
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   InvalidValuesError - If any of the input parameters contains an invalid value.
     * For example, the mode is w for the read-only virtual roots (wgt-package and ringtones).
     * *   NotFoundError - If the location input argument does not correspond to a valid location.
     * *   UnknownError - If any other error occurs.
     *
     * @note _deprecated_ 5.0 Since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     *
     * @remark camera location is supported since Tizen 2.3. If a device does not support camera, NotSupportedError will be thrown.
     *
     * @param location Location to resolve that can be a virtual path or file URI.
     * @param onsuccess Callback method to be invoked when the location has been successfully resolved, passing the newly created _File_ object.
     * @param onerror Callback method to be invoked when an error has occurred.
     * @param mode Optional value to indicate the file access mode on all files and directories that can be reached from the _File_ object passed to onsuccess.
     * Default value of this parameter is rw if absent or null.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported (e.g. in the case of "camera" virtual path if the device does not support camera), or if mode has been set to "rwo", which was introduced in tizen version 5.0
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type TypeMismatchError, if any of the input parameters is not compatible with the expected type for that parameter.
     */
    resolve(
        location: string,
        onsuccess: FileSuccessCallback,
        onerror?: ErrorCallback | null,
        mode?: FileMode | null,
    ): void;
    /**
     * Converts _path_ to file URI.
     *
     * @since 5.0
     *
     * @remark The function does not check if _path_ exists in filesystem.
     *
     * @param path A path to a file or a directory.
     *
     * @returns [File URI](https://tools.ietf.org/html/rfc8089) for given path.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the _path_ is invalid.
     */
    toURI(path: Path): string;
}
/**
 * The FileSystemStorage interface gives additional information about a storage, such as if the device is mounted, if it is a removable drive or not, or the device's name.
 *
 * To retrieve the mount point, the resolve() method should be used using the label as argument.
 */
export interface FileSystemStorage {
    /**
     * The storage name.
     *
     * This attribute is used as an input for methods such as getStorage() and also used as _location_ parameter for File.resolve() and FileSystemManager.resolve().
     */
    readonly label: string;
    /**
     * The storage state as mounted or not.
     */
    readonly state: FileSystemStorageState;
    /**
     * The storage type as internal or external.
     */
    readonly type: FileSystemStorageType;
}
/**
 * The ImageContent interface extends a basic _Content_ object with image-specific attributes.
 */
export interface ImageContent extends Content {
    /**
     * The geographical location where the image has been made.
     *
     * The attribute is marked as read-only since Tizen 5.5. Modifying it or its attributes has no effect.
     */
    readonly geolocation: SimpleCoordinates | null;
    /**
     * The height of an image in pixels.
     */
    readonly height: number;
    /**
     * The image orientation.
     *
     * The attribute is marked as read-only since Tizen 5.5.
     */
    readonly orientation: ImageContentOrientation;
    /**
     * The width of an image in pixels.
     */
    readonly width: number;
}
/**
 * The InputDeviceKey interface stores information about the key.
 */
export interface InputDeviceKey {
    /**
     * The numeric code of the key, like 37 or 13.
     *
     * This is the _keyCode_ attribute value of the Key Event generated by the key.
     */
    readonly code: number;
    /**
     * The name of the key, for example "VolumeUp" or "ChannelDown".
     *
     * If the key is listed in the [DOM Level 3 KeyboardEvent key Values](http://www.w3.org/TR/2014/WD-DOM-Level-3-Events-key-20140612) specification, the _name_ attribute is equal to the _key value_ specified there. (The [Media Controller Keys](http://www.w3.org/TR/2014/WD-DOM-Level-3-Events-key-20140612/#keys-media-controller) section is the most relevant to the Input Device API)
     *
     * If the "DOM Level 3 KeyboardEvent key Value" does not contain appropriate entry for the key, then the Input Device provides a device specific _name_.
     */
    readonly name: InputDeviceKeyName;
}
/**
 * This interface provides access to the _IotconObject_ object.
 */
export interface Iotcon {
    /**
     * The device name of this application.
     */
    deviceName: string;
    /**
     * Adds a listener to receive generated random pin from provisioning tool.
     *
     * @remark Listener's callback only be invoked when provisioning tool tries to register this device using random pin based.
     *
     * If you want to know about provisioning tool and random pin, See [IoTivity provisioning](https://wiki.iotivity.org/provisioning#sample_application).
     *
     * @param successCallback The method to be invoked when random pin is generated.
     *
     * @returns The watchID which can be used to remove the listener.
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    addGeneratedPinListener(successCallback: GeneratedPinCallback): number;
    /**
     * Returns object of Client singleton, which provides methods for working with remote resources.
     *
     * @returns The _Client_ object.
     */
    getClient(): Client;
    /**
     * Returns the Server object, which provides methods for managing resources on current device.
     *
     * @returns The _Server_ object.
     */
    getServer(): Server;
    /**
     * Returns the number of seconds set as the timeout threshold of asynchronous API.
     *
     * This method returns the common timeout value for methods:
     *
     * [findDeviceInfo](iotcon.html#Client::findDeviceInfo)
     *
     * [findPlatformInfo](iotcon.html#Client::findPlatformInfo)
     *
     * [findResource](iotcon.html#Client::findResource)
     *
     * [methodGet](iotcon.html#RemoteResource::methodGet)
     *
     * [methodPut](iotcon.html#RemoteResource::methodPut)
     *
     * [methodPost](iotcon.html#RemoteResource::methodPost)
     *
     * [methodDelete](iotcon.html#RemoteResource::methodDelete)
     *
     * All asynchronous APIs have the same timeout value, there is no way to have different timeout values at each method.
     * Without a response after the specified time, the mentioned methods would trigger an error callback with TimeoutError.
     *
     * @returns The timeout value in seconds.
     */
    getTimeout(): number;
    /**
     * Connects to the iotcon service. Call this function to start Iotcon.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark Recommends to use application local file for CBOR file path.
     *
     * If you want to know about IoTivity security in detail, See [IoTivity security](https://wiki.iotivity.org/iotivity_security).
     *
     * @param filePath The CBOR(Concise Binary Object Representation) file path for handling secure virtual resources.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    initialize(filePath: string): void;
    /**
     * Unregisters the listener and stops receiving generated random pin.
     *
     * @remark Example of using can be find at [addGeneratedPinListener](iotcon.html#Iotcon::addGeneratedPinListener) code example.
     *
     * @param watchId The watchId identifier returned by the addGeneratedPinListener() method.
     *
     * @throws WebAPIException with error type AbortError, if the operation has been stopped or there is no listener with given watchId.
     */
    removeGeneratedPinListener(watchId: number): void;
    /**
     * Sets the timeout value, in seconds, of asynchronous APIs.
     *
     * The timeout value is common for methods:
     *
     * [findDeviceInfo](iotcon.html#Client::findDeviceInfo)
     *
     * [findPlatformInfo](iotcon.html#Client::findPlatformInfo)
     *
     * [findResource](iotcon.html#Client::findResource)
     *
     * [methodGet](iotcon.html#RemoteResource::methodGet)
     *
     * [methodPut](iotcon.html#RemoteResource::methodPut)
     *
     * [methodPost](iotcon.html#RemoteResource::methodPost)
     *
     * [methodDelete](iotcon.html#RemoteResource::methodDelete)
     *
     * All asynchronous APIs have the same timeout value, there is no way to have different timeout values at each method.
     * Without a response after the specified time, the mentioned methods would trigger an error callback with TimeoutError.
     *
     * @param timeout Timeout value in seconds (value must range between 1 and 3600 inclusive). The default value is 30.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter does not contain a valid value.
     */
    setTimeout(timeout: number): void;
}
/**
 * The IotconOption Interface provides vendor specific options of COAP packet.
 */
export class IotconOption {
    constructor(id: number, data: string);
    /**
     * The string data to add. Length of data is less than or equal to 15.
     */
    data: string;
    /**
     * The ID of the option. id is always situated between 2048 and 3000.
     */
    id: number;
}
export interface IotconOptionConstructor {
    prototype: IotconOption;
    new(id: number, data: string): IotconOption;
}
/**
 * The KeyManager interface provides methods to store, retrieve and remove the sensitive data of users and their applications.
 *
 * It provides access to the API functionalities through the _tizen.keymanager_ interface.
 */
export interface KeyManager {
    /**
     * Gets raw data from the KeyManager.
     *
     * To get raw data, an application must have permission to get that raw data. By default, an application which saved raw data into the KeyManager has permission to get that raw data. An application can also use the [setPermission](#KeyManager::setPermission) method to allow another application to get and read its raw data.
     *
     * If an application calls this method to retrieve raw data which it saved into the KeyManager, the _dataAlias_ parameter does not require the _packageId_ attribute.
     *
     * @warning http://tizen.org/privilege/keymanager (public level privilege) MUST NOT be declared to use this API since 3.0.
     *
     * @param dataAlias Alias of the data to get.
     * @param password Password which was used to encrypt the data.
     *
     * @returns Data.
     *
     * @throws WebAPIException with error type NotFoundError, if the dataAlias cannot be found.
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type VerificationError, if the method cannot be completed because an incorrect password is used.
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of a database access failure or any other unknown error.
     */
    getData(dataAlias: KeyManagerAlias, password?: string | null): RawData;
    /**
     * Gets all the aliases which an application can access.
     *
     * @warning http://tizen.org/privilege/keymanager (public level privilege) MUST NOT be declared to use this API since 3.0.
     *
     * @returns Array of aliases.
     *
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    getDataAliasList(): KeyManagerAlias[];
    /**
     * Removes data from the KeyManager.
     *
     * To remove data, an application must have permission to remove that data. By default, an application which saved data into the KeyManager has permission to remove the data. An application can also use the [setPermission](#KeyManager::setPermission) method to allow another application to remove its data.
     *
     * If an application calls this method to remove data which it saved into the KeyManager, the _dataAlias_ parameter does not require the _packageId_ attribute.
     *
     * @warning http://tizen.org/privilege/keymanager (public level privilege) MUST NOT be declared to use this API since 3.0.
     *
     * @param dataAlias Alias of the data to remove.
     *
     * @throws WebAPIException with error type NotFoundError, if the dataAlias cannot be found.
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error
     */
    removeData(dataAlias: KeyManagerAlias): void;
    /**
     * Saves and stores data as a [KeyManagerAlias](#KeyManagerAlias) inside the KeyManager.
     *
     * On success, this method will add a [KeyManagerAlias](#KeyManagerAlias) into the KeyManager. The _name_ attribute of that KeyManagerAlias will be set to be the value of the _name_ parameter which is used in this method call. The _packageId_ attribute of that KeyManagerAlias will automatically be set to be the package ID of the application which calls this method.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   UnknownError - If the method cannot be completed because of an unknown error.
     *
     * @warning http://tizen.org/privilege/keymanager (public level privilege) MUST NOT be declared to use this API since 3.0.
     *
     * @param name Name to identify the data - this will be the _name_ attribute of the [KeyManagerAlias](#KeyManagerAlias) which this method adds, on success, into the KeyManager.
     * @param rawData Raw data to be stored.
     * @param password Password to use for encrypting the data.
     * @param successCallback Callback function that is called when data is successfully saved.
     * @param errorCallback Callback function that is called when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    saveData(
        name: string,
        rawData: RawData,
        password?: string | null,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Sets permissions that another application has for accessing an application's data.
     *
     * An application can only set permissions for data which it saved into the KeyManager. Therefore, the _dataAlias_ parameter does not require the _packageId_ attribute.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   NotFoundError - If the dataAlias cannot be found.
     * *   UnknownError - If the method cannot be completed because of an unknown error.
     *
     * @warning http://tizen.org/privilege/keymanager (public level privilege) MUST NOT be declared to use this API since 3.0.
     *
     * @param dataAlias Alias the data for which permission will be set.
     * @param packageId Package ID of the accessor application.
     * @param permissionType Permission to grant to the accessor application.
     * @param successCallback Callback function that is called when permission is successfully set.
     * @param errorCallback Callback function that is called when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    setPermission(
        dataAlias: KeyManagerAlias,
        packageId: PackageId,
        permissionType: PermissionType,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
/**
 * The _LocalMessagePort_ interface provides methods to receive data.
 */
export interface LocalMessagePort {
    /**
     * The flag indicating whether the message port is trusted.
     */
    readonly isTrusted: boolean;
    /**
     * The name of the message port name.
     */
    readonly messagePortName: string;
    /**
     * Adds a message port listener to receive messages from other applications.
     *
     * @param listener Callback function that is called when a message is received.
     *
     * @returns ID of the listener that is later used to remove the listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if the input parameter contains an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addMessagePortListener(listener: MessagePortCallback): number;
    /**
     * Removes the message port listener.
     *
     * @param watchId ID to identify the listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if the input parameter contains an invalid value.
     * @throws WebAPIException with error type NotFoundError, if the watch ID has not been found.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    removeMessagePortListener(watchId: number): void;
}
/**
 * This interface defines MAP data type operators.
 */
export interface MappedDataControlConsumer extends DataControlConsumerObject {
    /**
     * Adds the value associated with the specified key to a key-values map owned by a MAP-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param key The key to search mapped data.
     * @param value The value to add into a values array mapped by the key.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addValue(
        reqId: number,
        key: string,
        value: string,
        successCallback?: DataControlSuccessCallback | null,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
    /**
     * Gets the value associated with the specified key, from a key-values map owned by a MAP-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param key The key to search mapped data.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type NotFoundError, if the key cannot be found.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getValue(
        reqId: number,
        key: string,
        successCallback: DataControlGetValueSuccessCallback,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
    /**
     * Removes the value associated with the specified key from a key-values map owned by a MAP-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param key The key to search mapped data.
     * @param value The value to remove from a values array mapped by the key.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type NotFoundError, if the key cannot be found.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    removeValue(
        reqId: number,
        key: string,
        value: string,
        successCallback: DataControlSuccessCallback,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
    /**
     * Sets the value associated with the specified key to a new value.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param key The key to search mapped data.
     * @param oldValue The value to update in a values array mapped by the key.
     * @param newValue The new value to replace in a values array mapped by the key.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type NotFoundError, if the key cannot be found.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updateValue(
        reqId: number,
        key: string,
        oldValue: string,
        newValue: string,
        successCallback: DataControlSuccessCallback,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
}
/**
 * Server-side object representing abilities of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerAbilities {
    /**
     * Represents server's ability to receive custom commands from the media controller client.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    clientCustom: MediaControllerAbilitySupport;
    /**
     * Represents abilities of server's display modes.
     */
    readonly displayMode: MediaControllerDisplayModeAbilities;
    /**
     * Represents display orientations supported by the media controller server.
     */
    readonly displayRotation: MediaControllerDisplayRotationAbilities;
    /**
     * Represents server's ability to receive requests for spherical (360°) mode change from the media controller client.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    mode360: MediaControllerAbilitySupport;
    /**
     * Represents abilities of server's playback actions.
     */
    readonly playback: MediaControllerPlaybackAbilities;
    /**
     * Represents server's ability to change playback position.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    playbackPosition: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to add/change/remove playlists.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    playlist: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to change repeat state.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    repeat: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to receive search requests from the media controller client.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    search: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to change shuffle mode.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    shuffle: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to receive requests for subtitles mode change from the media controller client.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    subtitles: MediaControllerAbilitySupport;
}
/**
 * Client-side object representing abilities of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerAbilitiesInfo {
    /**
     * Represents server's ability to receive custom commands from media controller client.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly clientCustom: MediaControllerAbilitySupport;
    /**
     * Represents abilities of server's display modes.
     */
    readonly displayMode: MediaControllerDisplayModeAbilitiesInfo;
    /**
     * Represents server abilities of setting display orientations.
     */
    readonly displayRotation: MediaControllerDisplayRotationAbilitiesInfo;
    /**
     * Represents server's ability to receive requests for spherical (360°) mode change from media controller client.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly mode360: MediaControllerAbilitySupport;
    /**
     * Represents abilities of server's playback actions.
     */
    readonly playback: MediaControllerPlaybackAbilitiesInfo;
    /**
     * Represents server's ability to change playback position.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly playbackPosition: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to add/change/remove playlists.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly playlist: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to change repeat state.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly repeat: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to receive search requests from media controller client.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly search: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to change shuffle mode.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly shuffle: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to receive requests for subtitles mode change from media controller client.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly subtitles: MediaControllerAbilitySupport;
    /**
     * Adds a subscription for monitoring status of all abilities of server represented by this object.
     *
     * @remark Function [addAbilityChangeListener()](#MediaControllerClient::addAbilityChangeListener) must be called before current method.
     * For code example see [unsubscribe()](#MediaControllerAbilitiesInfo::unsubscribe).
     *
     * @throws WebAPIException with error type InvalidStateError, if [addAbilityChangeListener()](#MediaControllerClient::addAbilityChangeListener) is not set.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    subscribe(): void;
    /**
     * Removes a subscription for monitoring status of all abilities of server represented by this object.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    unsubscribe(): void;
}
/**
 * The media controller client API and functions related with handling media control.
 * Functions include operations to get the latest status of the media controller servers.
 */
export interface MediaControllerClient {
    /**
     * Adds a listener to be invoked when ability of the media controller server is changed.
     *
     * @since 5.5
     *
     * @remark Implicitly the media controller client will receive information about ability changes of every active media controller server.
     * To receive information only from selected servers, calling function [subscribe()](#MediaControllerAbilitiesInfo::subscribe) is required.
     *
     * @param listener Function to call on mediacontroller server's ability change.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addAbilityChangeListener(listener: MediaControllerAbilityChangeCallback): number;
    /**
     * Retrieves all activated media controller servers.
     *
     * @param successCallback The method to invoke when all of the registered media controller servers have been found.
     * @param errorCallback The method to invoke on failure of retrieving servers list.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    findServers(
        successCallback: MediaControllerServerInfoArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Retrieves all subscribed media controller servers.
     *
     * @since 5.5
     *
     * The ErrorCallback may be triggered for one of the following errors:
     *
     * *   UnknownError: if any error prevents function from successful completion.
     *
     * @param successCallback The method to invoke when all of subscribed media controller servers have been found.
     * @param errorCallback The method to invoke on failure of retrieving servers list.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    findSubscribedServers(
        successCallback: MediaControllerServerInfoArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets the latest activated media controller server info.
     *
     * @remark If there is no activated media controller server, null value is returned.
     *
     * @returns Server info or null.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    getLatestServerInfo(): MediaControllerServerInfo | null;
    /**
     * Removes selected MediaControllerAbilityChangeListener.
     *
     * @since 5.5
     *
     * @remark All subscriptions added by function [subscribe()](#MediaControllerAbilitiesInfo::subscribe) will be lost after removing last MediaControllerAbilityChangeListener.
     *
     * @param watchId Subscription identifier returned by [addAbilityChangeListener()](#MediaControllerClient::addAbilityChangeListener).
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeAbilityChangeListener(watchId: number): void;
    /**
     * Sets the media controller client's listener for custom events from the server.
     *
     * If the listener has already been set, calling this method will override it.
     *
     * @since 5.5
     *
     * @param listener Event handling function.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of the arguments has invalid types.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    setCustomEventListener(listener: MediaControllerReceiveCommandCallback): void;
    /**
     * Removes the server's events listener.
     *
     * Calling this function has no effect, if the listener is not set.
     *
     * @since 5.5
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    unsetCustomEventListener(): void;
}
/**
 * This interface provides communication methods from the server to the client.
 *
 * @since 5.5
 */
export interface MediaControllerClientInfo {
    /**
     * Id of the client application.
     */
    readonly name: ApplicationId;
    /**
     * Sends an event to the client.
     *
     * @param eventName Name of the event.
     * @param data Additional event data.
     * @param successCallback Reply handling function.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any argument has invalid type.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendEvent(eventName: string, data: Bundle | null, successCallback: MediaControllerSendCommandSuccessCallback): void;
}
/**
 * Server-side object representing display mode of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayMode {
    /**
     * Type of display mode on the server. Default value for a newly created server is "FULL\_SCREEN".
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    type: MediaControllerDisplayModeType;
    /**
     * Adds the listener for change requests of the media controller display mode.
     *
     * @remark Remember to set corresponding server's [display mode ability](#MediaControllerDisplayModeAbilities) to
     * "YES" to let clients send change requests to the server.
     *
     * @param listener Change request listener to add.
     *
     * @returns The identifier used to remove the listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addChangeRequestListener(listener: MediaControllerDisplayModeChangeRequestCallback): number;
    /**
     * Removes the listener and stops receiving change requests of media controller display mode.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeChangeRequestListener(watchId: number): void;
}
/**
 * Server-side object representing display mode abilities of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayModeAbilities {
    /**
     * Represents server's ability to set croppedFull mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    croppedFull: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to set fullScreen mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    fullScreen: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to set letterBox mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    letterBox: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to set originSize mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    originSize: MediaControllerAbilitySupport;
}
/**
 * Client-side object representing display mode abilities of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayModeAbilitiesInfo {
    /**
     * Represents server's ability to set croppedFull mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    readonly croppedFull: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to set fullScreen mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    readonly fullScreen: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to set letterBox mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    readonly letterBox: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to set originSize mode.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    readonly originSize: MediaControllerAbilitySupport;
}
/**
 * Client-side object representing display mode of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayModeInfo {
    /**
     * Type of display mode on the server represented by this object.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly type: MediaControllerDisplayModeType;
    /**
     * Adds the listener for changes of a media controller display mode of a media controller server.
     *
     * @param listener Display mode change listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addModeChangeListener(listener: MediaControllerDisplayModeChangeCallback): number;
    /**
     * Removes the listener, so stop receiving notifications about media controller server display mode changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeModeChangeListener(watchId: number): void;
    /**
     * Allows to send change requests for display mode to media controller server.
     *
     * @remark See [addChangeRequestListener()](#MediaControllerDisplayMode::addChangeRequestListener) method to check how to receive
     * and respond to commands.
     *
     * @param type Type of display mode, which is requested by a media controller client.
     * @param replyCallback The method to invoke when server responded to change request.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type NotSupportedError, if related ability is not supported by the media controller server.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendRequest(type: MediaControllerDisplayModeType, replyCallback: MediaControllerSendCommandSuccessCallback): void;
}
/**
 * Server-side object representing display rotation of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayRotation {
    /**
     * State of display rotation on the server. Default value for a newly created server is "ROTATION\_NONE".
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    displayRotation: MediaControllerDisplayRotationType;
    /**
     * Adds the listener for change requests of a media controller display rotation.
     *
     * @remark Remember to set corresponding server's [display rotation ability](#MediaControllerDisplayRotationAbilities) to
     * "YES" to let clients send change requests to the server.
     *
     * @param listener Change request listener to add.
     *
     * @returns The identifier used to remove the listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addChangeRequestListener(listener: MediaControllerDisplayRotationChangeRequestCallback): number;
    /**
     * Removes the listener and stops receiving change requests of media controller display rotation.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeChangeRequestListener(watchId: number): void;
}
/**
 * The server-side object representing display rotation abilities
 * of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayRotationAbilities {
    /**
     * Represents the server's ability to set 180° display orientation.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    rotation180: MediaControllerAbilitySupport;
    /**
     * Represents the server's ability to set 270° display orientation.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    rotation270: MediaControllerAbilitySupport;
    /**
     * Represents the server's ability to set 90° display orientation.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    rotation90: MediaControllerAbilitySupport;
    /**
     * Represents the server's ability to set 0° display orientation.
     *
     * Default value is NO.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    rotationNone: MediaControllerAbilitySupport;
}
/**
 * The client-side object representing display rotation abilities
 * of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayRotationAbilitiesInfo {
    /**
     * Represents the server's ability to set 180° display orientation.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly rotation180: MediaControllerAbilitySupport;
    /**
     * Represents the server's ability to set 270° display orientation.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly rotation270: MediaControllerAbilitySupport;
    /**
     * Represents the server's ability to set 90° display orientation.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly rotation90: MediaControllerAbilitySupport;
    /**
     * Represents the server's ability to set 0° display orientation.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly rotationNone: MediaControllerAbilitySupport;
}
/**
 * Client-side object representing display rotation of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerDisplayRotationInfo {
    /**
     * State of display rotation on the server represented by this object.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly displayRotation: MediaControllerDisplayRotationType;
    /**
     * Adds the listener for changes of a display rotation of a media controller server.
     *
     * @param listener Display rotation change listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addDisplayRotationChangeListener(listener: MediaControllerDisplayRotationChangeCallback): number;
    /**
     * Removes the listener, so stop receiving notifications about media controller server display rotation changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeDisplayRotationChangeListener(watchId: number): void;
    /**
     * Allows to send change requests for display rotation change to a media controller server.
     *
     * @remark See [addChangeRequestListener()](#MediaControllerDisplayRotation::addChangeRequestListener) method to check how to receive
     * and respond to commands.
     *
     * @param displayRotation Display rotation, which is requested by client.
     * @param replyCallback The method to invoke when server responded to change request.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type NotSupportedError, if related ability is not supported by server.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendRequest(
        displayRotation: MediaControllerDisplayRotationType,
        replyCallback: MediaControllerSendCommandSuccessCallback,
    ): void;
}
/**
 * This interface provides access to the _MediaControllerObject_ object.
 */
export interface MediaControllerManager {
    /**
     * Creates the Server object which holds playback state, meta data
     * and is controlled by Client.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/mediacontroller.server
     *
     * @returns The _MediaController Server_ object.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    createServer(): MediaControllerServer;
    /**
     * Gets the client object. If not exist, client will be automatically created.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/mediacontroller.client
     *
     * @returns The _MediaController Client_ object.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getClient(): MediaControllerClient;
}
/**
 * Playback metadata.
 */
export interface MediaControllerMetadata {
    /**
     * Media album.
     */
    album: string;
    /**
     * Media artist.
     */
    artist: string;
    /**
     * Media author.
     */
    author: string;
    /**
     * Media copyright.
     */
    copyright: string;
    /**
     * Media date.
     */
    date: string;
    /**
     * Media description.
     */
    description: string;
    /**
     * Media duration.
     */
    duration: string;
    /**
     * Episode number. Default value is 0.
     *
     * @since 5.5
     */
    episodeNumber: number;
    /**
     * Episode title. Default value is null.
     *
     * @since 5.5
     */
    episodeTitle: string | null;
    /**
     * Media genre.
     */
    genre: string;
    /**
     * Media picture.
     */
    picture: string;
    /**
     * Resolution height. Default value is 0. It cannot be changed to less than 0. Setting inappropriate values has no effect on the attribute.
     *
     * @since 5.5
     */
    resolutionHeight: number;
    /**
     * Resolution width. Default value is 0. It cannot be changed to less than 0. Setting inappropriate values has no effect on the attribute.
     *
     * @since 5.5
     */
    resolutionWidth: number;
    /**
     * Season number. Default value is 0.
     *
     * @since 5.5
     */
    seasonNumber: number;
    /**
     * Season title. Default value is null.
     *
     * @since 5.5
     */
    seasonTitle: string | null;
    /**
     * Media title.
     */
    title: string;
    /**
     * Media track number.
     */
    trackNum: string;
}
/**
 * Server-side object representing spherical (360°) mode of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerMode360 {
    /**
     * State of spherical (360°) mode on the server. Default value for a newly created server is false.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    enabled: boolean;
    /**
     * Adds the listener for change requests of a media controller spherical (360°) mode.
     *
     * @remark Remember to set corresponding server's [MediaControllerAbilities.mode360](#MediaControllerAbilities) ability
     * to "YES" to let clients send change requests to the server.
     *
     * @param listener Change request listener to add.
     *
     * @returns The identifier used to remove the listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addChangeRequestListener(listener: MediaControllerEnabledChangeRequestCallback): number;
    /**
     * Removes the listener and stops receiving change requests of media controller spherical (360°) mode.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeChangeRequestListener(watchId: number): void;
}
/**
 * Client-side object representing spherical (360°) mode of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerMode360Info {
    /**
     * State of spherical (360°) mode on the server represented by this object.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly enabled: boolean;
    /**
     * Adds the listener for changes of a media controller spherical (360°) mode of a media controller server.
     *
     * @param listener Spherical (360°) mode change listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addModeChangeListener(listener: MediaControllerEnabledChangeCallback): number;
    /**
     * Removes the listener, so stop receiving notifications about media controller server spherical (360°) mode changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeModeChangeListener(watchId: number): void;
    /**
     * Allows to send change requests for spherical (360°) mode to media controller server.
     *
     * @remark See [addChangeRequestListener()](#MediaControllerMode360::addChangeRequestListener) method to check how to receive
     * and respond to commands.
     *
     * @param enabled State which is requested by a media controller client.
     * @param replyCallback The method to invoke when server responded to change request.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type NotSupportedError, if related ability is not supported by the media controller server.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendRequest(enabled: boolean, replyCallback: MediaControllerSendCommandSuccessCallback): void;
}
/**
 * Server-side object representing playback abilities of the media controller server.
 *
 * @since 5.5
 *
 * @remark Calling [saveAbilities()](#MediaControllerPlaybackAbilities::saveAbilities) is required to
 * update playback abilities on the media controller server.
 */
export interface MediaControllerPlaybackAbilities {
    /**
     * Represents server's ability to perform FORWARD action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    forward: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform NEXT action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    next: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform PAUSE action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    pause: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform PLAY action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    play: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform PREV action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    prev: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform REWIND action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    rewind: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform STOP action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    stop: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform TOGGLE\_PLAY\_PAUSE action.
     *
     * Default value is UNDECIDED.
     *
     * @throws WebAPIException with error type TypeMismatchError, if set value will not be compatible with MediaControllerAbilitySupport enum.
     * @throws WebAPIException with error type InvalidValuesError, if set value will be "UNDECIDED".
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    togglePlayPause: MediaControllerAbilitySupport;
    /**
     * Saves the current state of playback abilities to the database.
     *
     * @remark Using this function is required to save changes of playback abilities into database, otherwise changes
     * will have no effect on the device and clients will not be notified about an update.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    saveAbilities(): void;
}
/**
 * Client-side object representing playback abilities of the media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerPlaybackAbilitiesInfo {
    /**
     * Represents server's ability to perform FORWARD action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly forward: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform NEXT action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly next: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform PAUSE action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly pause: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform PLAY action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly play: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform PREV action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly prev: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform REWIND action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly rewind: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform STOP action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly stop: MediaControllerAbilitySupport;
    /**
     * Represents server's ability to perform TOGGLE\_PLAY\_PAUSE action.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly togglePlayPause: MediaControllerAbilitySupport;
}
/**
 * Current playback info.
 */
export interface MediaControllerPlaybackInfo {
    /**
     * Current playback age rating.
     *
     * @since 5.5
     */
    readonly ageRating: MediaControllerContentAgeRating;
    /**
     * Current playback content type.
     *
     * Default value is UNDECIDED.
     *
     * @since 5.5
     */
    readonly contentType: MediaControllerContentType;
    /**
     * Current item index.
     * @since 5.5
     * @remark Null if no item currently in playback.
     */
    readonly index: string | null;
    /**
     * Current playback metadata.
     */
    readonly metadata: MediaControllerMetadata;
    /**
     * Current playlist name.
     * @since 5.5
     * @remark Null if no item currently in playback.
     */
    readonly playlistName: string | null;
    /**
     * Current playback position.
     */
    readonly position: number;
    /**
     * Current repeat mode.
     *
     * Any change in value of _repeatMode_ will also change the value of _repeatState_.
     *
     * The _repeatMode_ equal to true is equivalent to _repeatState_ equal to REPEAT\_ALL and
     * _repeatMode_ equal to false is equivalent to _repeatState_ equal to REPEAT\_OFF.
     *
     * @note _deprecated_ 5.5 Deprecated since 5.5. Instead, use [repeatState](#MediaControllerPlaybackInfo::repeatState).
     */
    readonly repeatMode: boolean;
    /**
     * Current repeat state.
     *
     * Any change in value of _repeatState_ will also change the value of _repeatMode_, except the REPEAT\_ONE value.
     * In this case the _repeatMode_ value will not change.
     *
     * The _repeatState_ equals to REPEAT\_ALL is equivalent to _repeatMode_ equals to true and
     * _repeatState_ equals to REPEAT\_OFF is equivalent to _repeatMode_ equals to false.
     *
     * Default value is REPEAT\_ALL.
     *
     * @since 5.5
     */
    readonly repeatState: MediaControllerRepeatState;
    /**
     * Current shuffle mode.
     */
    readonly shuffleMode: boolean;
    /**
     * Current playback state.
     */
    readonly state: MediaControllerPlaybackState;
}
/**
 * Object represents single playlist (collection of items).
 *
 * @since 5.5
 */
export interface MediaControllerPlaylist {
    /**
     * Name of this playlist.
     */
    readonly name: string;
    /**
     * Adds new item to the playlist.
     *
     * @param index Index for new item, should be unique within playlist.
     * @param metadata Metadata to be associated with new item.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addItem(index: string, metadata: MediaControllerMetadataInit): void;
    /**
     * Gets all items from playlist.
     *
     * @remark Note that getItems() method return only those items from playlist which been saved by [savePlaylist()](#MediaControllerServer::savePlaylist) method.
     *
     * The _errorCallback_ may be triggered for one of the following errors:
     *
     * *   _UnknownError_: if any error prevents function from successful completion.
     *
     * @param successCallback Function to be called when _getItems_ is finished without error.
     * @param errorCallback Function to be called when _getItems_ fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getItems(successCallback: MediaControllerGetItemsSuccessCallback, errorCallback?: ErrorCallback | null): void;
}
/**
 * Object represents single playlist item.
 *
 * @since 5.5
 */
export interface MediaControllerPlaylistItem {
    /**
     * Index of playlist's item. Should be unique within playlist.
     */
    readonly index: string;
    /**
     * Metadata associated with item.
     */
    readonly metadata: MediaControllerMetadata;
}
/**
 * Provides functions for sending the server information to the client.
 *
 * Allows the application to send the playback state and metadata to other application
 * and be controlled by other application(client) remotely.
 */
export interface MediaControllerServer {
    /**
     * Abilities of the media controller server.
     *
     * @since 5.5
     */
    readonly abilities: MediaControllerAbilities;
    /**
     * Object representing features related to display mode control of a media controller server.
     *
     * @since 5.5
     */
    readonly displayMode: MediaControllerDisplayMode;
    /**
     * Object representing features related to display rotation control of a media controller server.
     *
     * @since 5.5
     */
    readonly displayRotation: MediaControllerDisplayRotation;
    /**
     * Server icon URI.
     *
     * @since 5.5
     */
    readonly iconURI: string | null;
    /**
     * Object representing features related to spherical (360°) mode control of a media controller server.
     *
     * @since 5.5
     */
    readonly mode360: MediaControllerMode360;
    /**
     * Current playback info.
     *
     * @remark Object holds state which is automatically updated by update methods.
     */
    readonly playbackInfo: MediaControllerPlaybackInfo;
    /**
     * Object representing features related to subtitles control of a media controller server.
     *
     * @since 5.5
     */
    readonly subtitles: MediaControllerSubtitles;
    /**
     * Adds the listener for a media playback info requests from client.
     * See _MediaControllerServerInfo_ to check how to send playback info change
     * requests from client.
     *
     * @param listener Change request listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addChangeRequestPlaybackInfoListener(listener: MediaControllerChangeRequestPlaybackInfoCallback): number;
    /**
     * Adds the listener for receiving custom commands from client.
     * See _MediaControllerServerInfo_ to check how to [send custom commands](#MediaControllerServerInfo::sendCommand) from client.
     *
     * @param listener Custom commands listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addCommandListener(listener: MediaControllerReceiveCommandCallback): number;
    /**
     * Creates _MediaControllerPlaylist_ object.
     *
     * @since 5.5
     *
     * @remark Please note that there is a need to use [savePlaylist()](#MediaControllerServer::savePlaylist), otherwise playlist creation will have no effect on a device. All playlists will be deleted after application is closed.
     *
     * @param name Name of the new playlist.
     *
     * @returns New empty _MediaControllerPlaylist_ object with given name.
     *
     * @throws WebAPIException with error type InvalidValuesError, if playlist with given name already exists.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    createPlaylist(name: string): MediaControllerPlaylist;
    /**
     * Deletes playlist from local database.
     *
     * The _errorCallback_ may be triggered for one of the following errors:
     *
     * *   _InvalidValuesError_: if playlist with given name does not exist.
     * *   _UnknownError_: if any other error prevents the function from successful completion.
     *
     * @since 5.5
     *
     * @param playlistName Name of the playlist to remove.
     * @param successCallback Function to be called when _deletePlaylist_ is finished without error.
     * @param errorCallback Function to be called when _deletePlaylist_ fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    deletePlaylist(
        playlistName: string,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Returns all existing clients info.
     *
     * @since 5.5
     *
     * @returns All existing clients info.
     *
     * @throws WebAPIException with error type UnknownError, if any platform error occurs.
     *
     * @remark Code example available at [sendEvent()](#MediaControllerClientInfo::sendEvent) method documentation.
     */
    getAllClientsInfo(): MediaControllerClientInfo[];
    /**
     * Retrieves all playlists from a local database.
     *
     * The _errorCallback_ may be triggered for one of the following errors:
     *
     * *   _UnknownError_: if any error prevents function from successful completion.
     *
     * @since 5.5
     *
     * @param successCallback Function to be called on _getAllPlaylists_ success.
     * @param errorCallback Function to be called when _getAllPlaylists_ fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any parameter has invalid type.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getAllPlaylists(
        successCallback: MediaControllerGetAllPlaylistsSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Removes the listener, so stop receiving playback state requests from clients.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Subscription identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeChangeRequestPlaybackInfoListener(watchId: number): void;
    /**
     * Removes the listener, so stop receiving custom commands from clients.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Subscription identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeCommandListener(watchId: number): void;
    /**
     * Saves the playlist in a local database.
     *
     * The _errorCallback_ may be triggered for one of the following errors:
     *
     * *   _InvalidValuesError_: if playlist with given name does not exist.
     * *   _UnknownError_: if any other error prevents the function from successful completion.
     *
     * @since 5.5
     *
     * @remark All playlists will be deleted after the application is closed.
     *
     * @param playlist _MediaControllerPlaylist_ object to save.
     * @param successCallback Function to be called when _savePlaylist_ is finished without error.
     * @param errorCallback Function to be called when _savePlaylist_ fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    savePlaylist(
        playlist: MediaControllerPlaylist,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Sets the listener for receiving search requests from a client.
     *
     * @since 5.5
     *
     * @param listener Function to be called for each search command received.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of the arguments has invalid type.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    setSearchRequestListener(listener: MediaControllerSearchRequestCallback): void;
    /**
     * Unsets search request listener.
     *
     * Calling this function has no effect if the listener was not set.
     *
     * @since 5.5
     *
     * @throws WebAPIException with error type UnknownError, if unknown error occurs.
     */
    unsetSearchRequestListener(): void;
    /**
     * Updates server icon URI.
     *
     * @since 5.5
     *
     * @param iconURI URI of the icon to be set.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    updateIconURI(iconURI: string | null): void;
    /**
     * Updates metadata and send notification to the listening clients.
     *
     * @param metadata Metadata object.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updateMetadata(metadata: MediaControllerMetadata): void;
    /**
     * Sets content age rating for current playback item.
     *
     * @since 5.5
     *
     * @param rating New age rating for current playback item.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updatePlaybackAgeRating(rating: MediaControllerContentAgeRating): void;
    /**
     * Sets content type for the current playback item.
     *
     * @since 5.5
     *
     * @param type New content type for the current playback item.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updatePlaybackContentType(type: MediaControllerContentType): void;
    /**
     * Sets index and playlist name properties of playback info object.
     *
     * @since 5.5
     *
     * @param playlistName Name of playlist to be set.
     * @param index Index of item on playlist _playlistName_ to be set.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    updatePlaybackItem(playlistName: string, index: string): void;
    /**
     * Updates playback position and send notification to the listening clients.
     *
     * @param position Playback position.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updatePlaybackPosition(position: number): void;
    /**
     * Updates playback state and send notification to the listening clients.
     * See _MediaControllerServerInfo.addPlaybackInfoChangeListener_ to check
     * how to receive playback info changes from server on client side.
     *
     * @param state Playback state.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updatePlaybackState(state: MediaControllerPlaybackState): void;
    /**
     * Updates repeat mode and send notification to the listening clients.
     *
     * @note _deprecated_ 5.5 Deprecated since 5.5. Instead, use [updateRepeatState](#MediaControllerServer::updateRepeatState).
     *
     * @param mode Repeat mode.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    updateRepeatMode(mode: boolean): void;
    /**
     * Updates repeat state and sends notification to the listening clients.
     *
     * @since 5.5
     *
     * @param state Repeat state to be set.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    updateRepeatState(state: MediaControllerRepeatState): void;
    /**
     * Updates shuffle mode and send notification to the listening clients.
     *
     * @param mode Shuffle mode.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    updateShuffleMode(mode: boolean): void;
}
/**
 * This interface provides media controller server state and playback info.
 * Provides methods to send commands to server and listen for server status change.
 */
export interface MediaControllerServerInfo {
    /**
     * Abilities of the media controller server.
     *
     * @since 5.5
     */
    readonly abilities: MediaControllerAbilitiesInfo;
    /**
     * Object representing features related to display mode control of a media controller server.
     *
     * @since 5.5
     */
    readonly displayMode: MediaControllerDisplayModeInfo;
    /**
     * Object representing features related to display rotation control of a media controller server.
     *
     * @since 5.5
     */
    readonly displayRotation: MediaControllerDisplayRotationInfo;
    /**
     * Server icon URI.
     *
     * @since 5.5
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly iconURI: string | null;
    /**
     * Object representing features related to spherical (360°) mode control of a media controller server.
     *
     * @since 5.5
     */
    readonly mode360: MediaControllerMode360Info;
    /**
     * The appId of the media controller server.
     */
    readonly name: ApplicationId;
    /**
     * Current playback info.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly playbackInfo: MediaControllerPlaybackInfo;
    /**
     * State of the media controller server.
     */
    readonly state: MediaControllerServerState;
    /**
     * Object representing features related to subtitles control of a media controller server.
     *
     * @since 5.5
     */
    readonly subtitles: MediaControllerSubtitlesInfo;
    /**
     * Adds the listener for a media playback info changes.
     *
     * @param listener Status change listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addPlaybackInfoChangeListener(listener: MediaControllerPlaybackInfoChangeCallback): number;
    /**
     * Adds listener to be invoked when playlist is updated by server.
     *
     * @since 5.5
     *
     * @param listener Listener for adding, updating or deleting of any playlist.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addPlaylistUpdatedListener(listener: MediaControllerPlaylistUpdatedCallback): number;
    /**
     * Adds the listener for a media controller server status change.
     *
     * @param listener Status change listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addServerStatusChangeListener(listener: MediaControllerServerStatusChangeCallback): number;
    /**
     * Retrieves all playlists saved in local database.
     *
     * The _errorCallback_ may be triggered for one of the following errors:
     *
     * *   _UnknownError_: if any other error prevents function from successful completion.
     *
     * @since 5.5
     *
     * @param successCallback Function to be called upon success.
     * @param errorCallback Function to be called upon failure.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any parameter has invalid type.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getAllPlaylists(
        successCallback: MediaControllerGetAllPlaylistsSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Removes the listener, so stop receiving notifications about media playback info changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Subscription identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removePlaybackInfoChangeListener(watchId: number): void;
    /**
     * Stops listening for playlist updates and removals.
     *
     * @since 5.5
     *
     * @remark This function has no effect, if there is no listener for given id.
     *
     * @param listenerId Listener ID returned by _addPlaylistUpdatedListener_.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removePlaylistUpdatedListener(listenerId: number): void;
    /**
     * Removes the listener, so stop receiving notifications about media controller server status.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Subscription identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeServerStatusChangeListener(watchId: number): void;
    /**
     * Allows to send custom command to media controller server.
     *
     * @remark See [addCommandListener()](#MediaControllerServer::addCommandListener) method to check how to receive
     * and respond to custom commands.
     *
     * @param command Custom command name which is handled on server side.
     * @param data Additional data for custom command which is send to server.
     * @param successCallback The method to invoke when server responded to custom command.
     * @param errorCallback The method to invoke on operation failure.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendCommand(
        command: string,
        data: Bundle | null,
        successCallback: MediaControllerSendCommandSuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Requests setting new playback item to server.
     *
     * @since 5.5
     *
     * @remark _PlaybackInfoChangeListener_ should be invoked, if registered.
     *
     * @param playlistName Name of playlist to be set.
     * @param index Index of item on playlist to be set.
     * @param state Playback state.
     * @param position Playback position.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    sendPlaybackItem(playlistName: string, index: string, state: MediaControllerPlaybackState, position: number): void;
    /**
     * Allows to change playback position of media controller server.
     *
     * @param position Playback position.
     * @param successCallback The method to invoke when playback position was changed.
     * @param errorCallback The method to invoke on operation failure.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendPlaybackPosition(
        position: number,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Allows to change playback state of media controller server.
     *
     * @param state Playback state.
     * @param successCallback The method to invoke when playback state was changed.
     * @param errorCallback The method to invoke on operation failure.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendPlaybackState(
        state: MediaControllerPlaybackState,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Allows to change repeat mode of media controller server.
     *
     * @note _deprecated_ 5.5 Deprecated since 5.5. Instead, use [sendRepeatState](#MediaControllerServerInfo::sendRepeatState).
     *
     * @param mode Repeat mode.
     * @param successCallback The method to invoke when repeat mode was changed.
     * @param errorCallback The method to invoke on operation failure.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendRepeatMode(mode: boolean, successCallback?: SuccessCallback | null, errorCallback?: ErrorCallback | null): void;
    /**
     * Allows to change repeat state of media controller server.
     *
     * @since 5.5
     *
     * @param state Repeat state to be set.
     * @param successCallback The method to invoke when repeat state was changed.
     * @param errorCallback The method to invoke on operation failure.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendRepeatState(
        state: MediaControllerRepeatState,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Sends a search request to the media controller server.
     *
     * The _errorCallback_ may be triggered for one of the following errors:
     *
     * *   _UnknownError_: if any error prevents function from successful completion.
     *
     * @since 5.5
     *
     * @remark Search request handler should be specified on the server using
     * [setSearchRequestListener()](#MediaControllerServer::setSearchRequestListener) method.
     *
     * @param request A collection of between 1 and 20 SearchFilter objects.
     * @param replyCallback Function to be invoked when server reply is received.
     * @param errorCallback Function to be invoked if server reports failure.
     *
     * @throws WebAPIException with error type InvalidValuesError, if request has invalid number of filters.
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendSearchRequest(
        request: SearchFilter[],
        replyCallback: MediaControllerSearchRequestReplyCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Allows to change shuffle mode of media controller server.
     *
     * @param mode Shuffle mode.
     * @param successCallback The method to invoke when shuffle mode was changed.
     * @param errorCallback The method to invoke on operation failure.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendShuffleMode(
        mode: boolean,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
/**
 * Server-side object representing subtitles mode of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerSubtitles {
    /**
     * State of subtitles mode on the server. Default value for a newly created server is false.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    enabled: boolean;
    /**
     * Adds the listener for change requests of a media controller subtitles mode.
     *
     * @remark Remember to set corresponding server's [MediaControllerAbilities.subtitles](#MediaControllerAbilities) ability
     * to "YES" to let clients send change requests to the server.
     *
     * @param listener Change request listener to add.
     *
     * @returns The identifier used to remove the listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addChangeRequestListener(listener: MediaControllerEnabledChangeRequestCallback): number;
    /**
     * Removes the listener and stops receiving change requests of media controller subtitles mode.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeChangeRequestListener(watchId: number): void;
}
/**
 * Client-side object representing subtitles mode of a media controller server.
 *
 * @since 5.5
 */
export interface MediaControllerSubtitlesInfo {
    /**
     * State of subtitles mode on the server represented by this object.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    readonly enabled: boolean;
    /**
     * Adds the listener for changes of a media controller subtitles mode of a media controller server.
     *
     * @param listener Subtitles mode change listener to add.
     *
     * @returns The identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    addModeChangeListener(listener: MediaControllerEnabledChangeCallback): number;
    /**
     * Removes the listener, so stop receiving notifications about media controller server subtitles mode changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Watcher identifier.
     *
     * @throws WebAPIException with error type UnknownError, if any error occurs.
     */
    removeModeChangeListener(watchId: number): void;
    /**
     * Allows to send change requests for subtitles mode to media controller server.
     *
     * @remark See [addChangeRequestListener()](#MediaControllerSubtitles::addChangeRequestListener) method to check how to receive
     * and respond to commands.
     *
     * @param enabled State which is requested by a media controller client.
     * @param replyCallback The method to invoke when server responded to change request.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type NotSupportedError, if related ability is not supported by the media controller server.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendRequest(enabled: boolean, replyCallback: MediaControllerSendCommandSuccessCallback): void;
}
/**
 * The _MessagePortManager_ interface provides methods to request message port to communicate.
 */
export interface MessagePortManager {
    /**
     * Requests a LocalMessagePort instance to start receiving message from another application.
     *
     * @param localMessagePortName Name of the local message port to retrieve
     * The LocalMessagePort instances are identical for the same message port name.
     *
     * @returns LocalMessagePort instance.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if the input parameter contains an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    requestLocalMessagePort(localMessagePortName: string): LocalMessagePort;
    /**
     * Requests a RemoteMessagePort instance to send message to another application.
     *
     * If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
     *
     * @param appId ID of the application to send messages.
     * @param remoteMessagePortName Name of remote message port.
     *
     * @returns RemoteMessagePort instance.
     *
     * @throws WebAPIException with error type NotFoundError, if the port of the target application is not found.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    requestRemoteMessagePort(appId: ApplicationId, remoteMessagePortName: string): RemoteMessagePort;
    /**
     * Requests a trusted LocalMessagePort instance to receive message from another application.
     *
     * Trusted local message port can communicate with applications that are signed with same certificate.
     *
     * @param localMessagePortName Name of local message port
     * The LocalMessagePort instances are identical for the same message port name.
     *
     * @returns Trusted LocalMessagePort instance.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if the input parameter contains an invalid value.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    requestTrustedLocalMessagePort(localMessagePortName: string): LocalMessagePort;
    /**
     * Requests a trusted RemoteMessagePort instance to receive message from another application.
     *
     * If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
     * Trusted remote message port can communicate with applications that are signed with same certificate.
     *
     * @param appId ID of the application to send messages.
     * @param remoteMessagePortName Name of remote message port.
     *
     * @returns Trusted RemoteMessagePort instance.
     *
     * @throws WebAPIException with error type NotFoundError, if the port of the target application is not found.
     * @throws WebAPIException with error type InvalidAccessError, if the target application is not signed with the same certification.
     * @throws WebAPIException with error type UnknownError, if any other error occurs
     */
    requestTrustedRemoteMessagePort(appId: ApplicationId, remoteMessagePortName: string): RemoteMessagePort;
}
/**
 * This interface defines the general information available to an installed package.
 */
export interface PackageInformation {
    /**
     * An attribute to store the application ID list of a package.
     */
    readonly appIds: ReadonlyArray<ApplicationId>;
    /**
     * An attribute to store the author of a package.
     */
    readonly author: string;
    /**
     * An attribute to store the current data size of a package.
     */
    readonly dataSize: number;
    /**
     * An attribute to store the package description.
     */
    readonly description: string;
    /**
     * An attribute to store the icon path of a package.
     *
     * The icon path of the package is the same as the icon path of the relevant application
     * (see the [iconPath](application.html#ApplicationInformation::iconPath) attribute of
     * the [ApplicationInformation](application.html#ApplicationInformation) interface).
     *
     * The relevant application is the one with the same
     * [packageId](application.html#ApplicationInformation::packageId) as the
     * [id](#PackageInformation::id) of this package.
     */
    readonly iconPath: string;
    /**
     * An attribute to store the identifier of a package.
     */
    readonly id: PackageId;
    /**
     * An attribute to store the latest installed or updated time of a package.
     */
    readonly lastModified: Date;
    /**
     * An attribute to store the package name.
     */
    readonly name: string;
    /**
     * An attribute to store the total installed size(package + data) of a package.
     */
    readonly totalSize: number;
    /**
     * An attribute to store the package version.
     */
    readonly version: string;
}
/**
 * This interface defines the package manager.
 */
export interface PackageManager {
    /**
     * Gets information of an installed package.
     *
     * If the ID is set to null or not set at all, it returns the package information of the current application.
     * The list of installed packages and their package IDs is obtained using _getPackagesInfo()_.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @param id A string representing the package ID. If the ID is not provided, the package information of the calling application is returned.
     *
     * @returns The information of a package.
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type NotFoundError, if the package with the specified ID is not found.
     * @throws WebAPIException with error type UnknownError, if the package information cannot be retrieved because of a platform error.
     */
    getPackageInfo(id?: PackageId | null): PackageInformation;
    /**
     * Gets information of the installed packages.
     *
     * The result contains the snapshots of the installed packages information.
     *
     * The _errorCallback()_ is launched with this error type:
     *
     * *   UnknownError - If any other platform error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @param successCallback The method to call when an invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    getPackagesInfo(
        successCallback: PackageInformationArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Installs a package with a specified file on a device.
     *
     * This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
     *
     * The _ErrorCallback()_ is launched with these error types:
     *
     * *   NotFoundError - If the package is not found at the specified location.
     * *   UnknownError - If it is not allowed to install the package by the platform or any other platform error occurs.
     *
     * @privilegeLevel platform
     * @privilegeName http://tizen.org/privilege/packagemanager.install
     *
     * @remark Virtual path cannot be used for the parameter. First, you need to convert any virtual path to a file URI path using the resolve function in the Filesystem API before passing it to the function.
     *
     * @param packageFileURI The location of the package to install.
     * @param progressCallback The method to invoke when the installation is in progress or has been completed.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    install(
        packageFileURI: string,
        progressCallback: PackageProgressCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Sets a listener to receive notifications for any changes made to the list of installed packages.
     *
     * This method sets a _PackageInformationEventCallback_ type callback that is triggered when a package is installed, removed, or updated.
     *
     * The callback lasts until the _unsetPackageInfoEventListener()_ method is called.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @param eventCallback The method to be called when any change is made to the list of installed packages.
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if the package list change event cannot be generated because of a platform error.
     */
    setPackageInfoEventListener(eventCallback: PackageInformationEventCallback): void;
    /**
     * Uninstalls the package with a specified package ID.
     *
     * This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
     *
     * The _ErrorCallback()_ is launched with these error types:
     *
     * *   NotFoundError - If the package is not found with the specified ID.
     * *   UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.
     *
     * @privilegeLevel platform
     * @privilegeName http://tizen.org/privilege/packagemanager.install
     *
     * @remark Some preloaded packages cannot be uninstalled. In this case, ErrorCallback with the UnKnownError type is launched.
     *
     * @param id The package ID to uninstall.
     * @param progressCallback The method to invoke when uninstallation is in progress or has been completed.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    uninstall(id: PackageId, progressCallback: PackageProgressCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Unsets the listener to stop receiving package notifications.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if the listener removal request fails because of a platform error.
     */
    unsetPackageInfoEventListener(): void;
}
/**
 * The PlatformInfo interface describes platform properties.
 */
export interface PlatformInfo {
    /**
     * The firmware version.
     */
    readonly firmwareVersion: string | null;
    /**
     * The hardware version.
     */
    readonly hardwareVersion: string | null;
    /**
     * The manufacture date of device.
     */
    readonly manufactureDate: string | null;
    /**
     * The name of manufacturer.
     */
    readonly manufacturerName: string | null;
    /**
     * The URL of manufacturer.
     */
    readonly manufacturerUrl: string | null;
    /**
     * The model number is designated by manufacturer.
     */
    readonly modelNumber: string | null;
    /**
     * The operating system version.
     */
    readonly operatingSystemVersion: string | null;
    /**
     * The platform identifier
     */
    readonly platformId: string | null;
    /**
     * The platform version is defined by manufacturer.
     */
    readonly platformVersion: string | null;
    /**
     * The URL that points to support information from manufacturer.
     */
    readonly supportUrl: string | null;
    /**
     * The System time.
     */
    readonly systemTime: string | null;
}
/**
 * The Playlist interface represents a playlist.
 *
 * @since 2.3
 */
export interface Playlist {
    /**
     * Identifier of a playlist.
     */
    readonly id: PlaylistId;
    /**
     * Name of a playlist (case sensitive and unique).
     *
     * When name is set, the change is recorded in the database.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @throws WebAPIException with error type InvalidValuesError, when assigning an invalid value (e.g. playlist of the same name already exists).
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to change this attribute.
     */
    name: string;
    /**
     * Number of playlist items in the playlist.
     */
    readonly numberOfTracks: number;
    /**
     * Thumbnail URI of a playlist.
     *
     * By default, this attribute is set to null.
     * When thumbnailURI is set, the change is recorded in the database.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @throws WebAPIException with error type InvalidValuesError, when assigning an invalid value (e.g. if the URI does not start with "file:///").
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to change this attribute or the application does not have privilege to access the storage. For more information, see [Storage privileges](#StorageRemark).
     */
    thumbnailURI: string | null;
    /**
     * Adds a content item to a playlist.
     *
     * See code example for the _createPlaylist()_ method.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param item Content to add.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    add(item: Content): void;
    /**
     * Adds tracks to a playlist as a batch, asynchronously.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param items List of tracks (Content objects) to add.
     * @param successCallback Callback method to be invoked when adding a list of content items to a playlist completes successfully.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    addBatch(items: Content[], successCallback?: SuccessCallback | null, errorCallback?: ErrorCallback | null): void;
    /**
     * Gets playlist items from a playlist.
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: If any of the input parameters contain an invalid value (e.g _count_ or _offset_ is a negative number)
     * *   UnknownError: In case of any error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.read
     *
     * @param successCallback Callback method to be invoked for a list of tracks in the playlist.
     * @param errorCallback Callback method to be invoked when an error occurs.
     * @param count Number of playlist items to return
     * If the count is not passed, all playlist items are retrieved.
     * @param offset Offset of the track from the beginning of the playlist
     * The default value is 0
     * It means no offset.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    get(
        successCallback: PlaylistItemArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
        count?: number | null,
        offset?: number | null,
    ): void;
    /**
     * Moves the specified item up or down a specified amount in the play order.
     *
     * If current index + delta is:
     *
     * *   < 0 then the item is moved to the first position in the playlist
     * *   ≥ number of tracks then the item is moved to the last position in the playlist
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: In case the item in the passed _items_ array is not inside this playlist or some item of this playlist is not included in _items_
     * *   UnknownError: In case of any other error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param item Playlist item to move.
     * @param delta How many positions to move the item, negative value means move up, positive means move down.
     * @param successCallback Callback method to be invoked when the playlist item has successfully been moved.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    move(
        item: PlaylistItem,
        delta: number,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Removes a track from a playlist.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param item Playlist item to remove.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    remove(item: PlaylistItem): void;
    /**
     * Removes tracks from a playlist as a batch, asynchronously.
     *
     * The errorCallback is launched with these error types:
     *
     * *   UnknownError: In case of any other error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param items List of tracks to remove.
     *
     * @param successCallback Callback method to be invoked when removing a list of content items from a playlist completes successfully.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    removeBatch(
        items: PlaylistItem[],
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Changes the play order of all playlist items in the playlist.
     *
     * The errorCallback is launched with these error types:
     *
     * *   InvalidValuesError: In case the item in the passed _items_ array is not inside this playlist, or the _items_ array does not contain all items from the playlist
     * *   UnknownError: In case of any other error
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/content.write
     *
     * @param items List of playlist items to set in play order
     * This list must include all playlist items of this playlist
     * If not, InvalidValuesError is thrown.
     * @param successCallback Callback method to be invoked when changing the positions of items in the playlist is successfully completed.
     * @param errorCallback Callback method to be invoked when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     */
    setOrder(
        items: PlaylistItem[],
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
/**
 * The PlaylistItem interface represents a playlist item.
 *
 * @since 2.3
 */
export interface PlaylistItem {
    /**
     * Content contained in this playlist item.
     */
    readonly content: Content;
}
/**
 * This interface provides API to manage remote resource for client side.
 */
export interface PresenceResponse {
    /**
     * The connectivity type of the presence.
     */
    readonly connectivityType: ConnectivityType;
    /**
     * The host address of the presence.
     */
    readonly hostAddress: string;
    /**
     * The resource type of the presence.
     */
    readonly resourceType: ResourceType | null;
    /**
     * The results type of presence.
     */
    readonly resultType: PresenceResponseResultType;
    /**
     * The trigger type of presence. It is set only if a response result type is "OK".
     */
    readonly triggerType: PresenceTriggerType | null;
}
/**
 * The PushManager interface provides methods to manage push registration and notification.
 */
export interface PushManager {
    /**
     * Connects to the push service and gets state change events and push notifications.
     *
     * The _ErrorCallback()_ is launched with these error types:
     *
     * *   AbortError - If the operation cannot be finished properly.
     *
     * @since 3.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @param stateChangeCallback The callback to be called when the state of registration is changed. The callback would be called at least once,
     * just after connection is established.
     * @param notificationCallback The callback to be called when the notification message arrives.
     * @param errorCallback The callback to be called when the connect request fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    connect(
        stateChangeCallback: PushRegistrationStateChangeCallback,
        notificationCallback: PushNotificationCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Disconnects the push service and stops receiving push notifications.
     *
     * @since 3.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    disconnect(): void;
    /**
     * Gets push messages when the application is launched by the push service.
     *
     * If the application is launched by the push service, the push service is connected when the application is launched.
     * Therefore, you can get push messages without calling the [connect()](push.html#PushManager::connect) function.
     *
     * If the application was not launched by the push service, this method returns null.
     *
     * @since 3.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @returns The last message delivered from the push service or null.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    getPushMessage(): PushMessage | null;
    /**
     * Gets the push service registration ID for this application if the registration process is successful. null is returned if the application has not been registered yet.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @returns ID assigned by push service.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getRegistrationId(): PushRegistrationId;
    /**
     * Requests to get unread push notifications. As a consequence, the PushNotificationCallback which was set using the connectService() method will be invoked to retrieve the notifications..
     *
     * The connectService() method must be called to connect to Tizen push server and receive push notifications before calling the getUnreadNotifications() method.
     * If connectService is not called, ServiceNotAvailableError occurs.
     * If any unread message exists, you will get unread push notification message through PushNotificationCallback of connectService().
     * For instance, if there are 10 unread messages, the PushNotificationCallback will be invoked 10 times.
     * If an application receives unread messages, the messages are removed from the system.
     *
     * When an application registers with the push server to receive push notifications,
     * the push server stores messages for the application until they are delivered.
     * While the application is not running, messages cannot be delivered.
     * This method allows retrieving such missed push messages.
     * Once a missed push notification is retrieved the server deletes it from its database.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @throws WebAPIException with error type ServiceNotAvailableError, if the network is unreachable for some reason(e.g disconnected to the Tizen push server)
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    getUnreadNotifications(): void;
    /**
     * Registers an application to the Tizen push server.
     *
     * The _ErrorCallback()_ is launched with these error types:
     *
     * *   TimeoutError - If the operation timed out.
     * *   AbortError - If the operation cannot be finished properly.
     *
     * The _connect()_ method must be called before calling the _register()_ method.
     *
     * @since 3.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @remark In order to use the push messaging service, see [Push Guide](/application/web/guides/messaging/push).
     *
     * @param successCallback The callback to be called when the registration request succeeds.
     * @param errorCallback The callback to be called when the registration request fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidStateError, if the application is not connected to the push service.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    register(successCallback: PushRegisterSuccessCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Unregisters an application from the Tizen push server.
     *
     * The _ErrorCallback()_ is launched with these error types:
     *
     * *   TimeoutError - If the operation timed out.
     * *   AbortError - If the operation cannot be finished properly.
     *
     * @since 3.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/push
     *
     * @param successCallback The callback to be called when the unregistration request succeeds.
     * @param errorCallback The callback to be called when the unregistration request fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidStateError, if the application is not connected to the push service.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    unregister(successCallback?: SuccessCallback | null, errorCallback?: ErrorCallback | null): void;
}
/**
 * The PushMessage interface specifies the push message that is delivered from the push service.
 */
export interface PushMessage {
    /**
     * An attribute to store the push notification message that may include an alert message to the user.
     */
    readonly alertMessage: string;
    /**
     * An attribute to store the push notification data.
     *
     * This data is the message that the sender wants to send and its length must be less than 1 KB.
     */
    readonly appData: string;
    /**
     * An attribute to store the date/time when a push notification message is received.
     */
    readonly date: Date;
    /**
     * An attribute to store the full push notification message.
     *
     * @since 3.0
     */
    readonly message: string;
    /**
     * The request ID assigned by the sender.
     *
     * @since 3.0
     */
    readonly requestId: string;
    /**
     * The name of the sender of the notification.
     *
     * @since 3.0
     */
    readonly sender: string;
    /**
     * The session information of the notification.
     *
     * @since 3.0
     */
    readonly sessionInfo: string;
}
/**
 * The _RemoteMessagePort_ interface provides methods to send messages.
 */
export interface RemoteMessagePort {
    /**
     * The application ID to connect with.
     */
    readonly appId: ApplicationId;
    /**
     * The flag indicating whether the message port is trusted.
     */
    readonly isTrusted: boolean;
    /**
     * The message port name.
     */
    readonly messagePortName: string;
    /**
     * Sends messages to the specified application.
     *
     * The sent messages will be ignored without any notice, unless the target application added one or more listeners to the target local message port.
     *
     * @param data Array of data to send.
     * @param localMessagePort _LocalMessagePort_ object that gives local message port of the current application
     * It can be used to receive reply messages from the other end of the message port.
     * The order of items in this array is not guaranteed to be preserved during data transfer, and values of _key_ within this
     * array must not be duplicated or empty.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if an input parameter contains an invalid value.
     * @throws WebAPIException with error type QuotaExceededError, if the size of message has exceeded the maximum limit.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    sendMessage(data: MessagePortDataItem[], localMessagePort?: LocalMessagePort | null): void;
}
/**
 * This interface provides API to manage remote resource for client side.
 */
export class RemoteResource {
    constructor();
    /**
     * The cached representation of remote resource.
     */
    readonly cachedRepresentation: Representation | null;
    /**
     * It is connectivity type.
     */
    readonly connectivityType: ConnectivityType;
    /**
     * The device unique id. this is unique per-server independent on how it was discovered.
     */
    readonly deviceId: string;
    /**
     * The device name of the remote resource.
     */
    readonly deviceName: string;
    /**
     * The host address
     */
    readonly hostAddress: string;
    /**
     * Indicates if the resource is initialized and activated or not
     */
    readonly isActive: boolean;
    /**
     * Indicates if the resource is discoverable or not
     */
    readonly isDiscoverable: boolean;
    /**
     * Indicates if the resource is is allowed to be discovered only if discovery request contains an explicit query string or not
     */
    readonly isExplicitDiscoverable: boolean;
    /**
     * Indicates if the resource is observable or not
     */
    readonly isObservable: boolean;
    /**
     * Indicates if the resource is secure or not
     */
    readonly isSecure: boolean;
    /**
     * Indicates if the resource takes some delay to respond or not
     */
    readonly isSlow: boolean;
    /**
     * The option for managing vendor specific option of COAP packet.
     *
     * @remark Options can have up to 2 IotconOption.
     */
    options: ReadonlyArray<IotconOption> | null;
    /**
     * A list of interfaces in the resource.
     */
    readonly resourceInterfaces: ReadonlyArray<ResourceInterface>;
    /**
     * A list of types in this resource
     */
    readonly resourceTypes: ReadonlyArray<ResourceType>;
    /**
     * The time interval in seconds for monitoring state (registered with setResourceStateChangeListener() ) and caching (registered with startCaching() ). Provided value must be in range from 1 to 3600 inclusive. The default value is 10 seconds.
     */
    timeInterval: number;
    /**
     * The resource URI.
     */
    readonly uriPath: string;
    /**
     * Deletes the remote resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: In any system error is invoked
     *
     * @param responseCallback The method to invoked when a client receive get response.
     * @param errorCallback The method to invoke on failure of getting response.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    methodDelete(responseCallback: RemoteResourceResponseCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Gets the attributes of a resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: In any system error is invoked
     *
     * @param responseCallback The method to invoked when a client receive get response.
     * @param query The query to send to server. The resource request handler should handle this value.
     * @param errorCallback The method to invoke on failure of getting response.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    methodGet(
        responseCallback: RemoteResourceResponseCallback,
        query?: Query | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Posts the representation of a resource for create.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: In any system error is invoked
     *
     * @param representation The payload of a request or a response.
     * @param responseCallback The method to invoked when a client receive get response.
     * @param query The query to send to server. The resource request handler should handle this value.
     * @param errorCallback The method to invoke on failure of getting response.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    methodPost(
        representation: Representation,
        responseCallback: RemoteResourceResponseCallback,
        query?: Query | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Puts the representation of a resource for update.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * The ErrorCallback is launched with these error types:
     *
     * *   TimeoutError: If there is no resource or response within timeout value.
     * *   AbortError: In any system error is invoked
     *
     * @param representation The payload of a request or a response.
     * @param responseCallback The method to invoked when a client receive get response.
     * @param query The query to send to server. The resource request handler should handle this value.
     * @param errorCallback The method to invoke on failure of getting response.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    methodPut(
        representation: Representation,
        responseCallback: RemoteResourceResponseCallback,
        query?: Query | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Sets a listener to monitor the state of the remote resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param successCallback The method to invoked when remote resource's state is changed, registered callbacks will be called in turn. Internally, it checks the state of resource, periodically. Thus, it may not receive the state, immediately.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    setResourceStateChangeListener(successCallback: ResourceStateChangeCallback): void;
    /**
     * Starts caching of a remote resource. cached representation is updated when remote resource is changed.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param updatedCallback The method to invoked when the remote resource is changed.
     *
     * @throws WebAPIException with error type InvalidStateError, this error occur when already started.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    startCaching(updatedCallback?: CacheUpdatedCallback | null): void;
    /**
     * Sets the listener to receive notification about attribute change of remote resource. When server sends notification message, successCallback will be called.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param observePolicy The policy of observation.
     * @param successCallback The method to invoked when the resource receive notification message.
     * @param query The query to send to server. The resource request handler should handle this value.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    startObserving(
        observePolicy: ObservePolicy,
        successCallback: RemoteResourceResponseCallback,
        query?: Query | null,
    ): void;
    /**
     * Stops caching of a remote resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark Example of using can be find at [startCaching](iotcon.html#RemoteResource::startCaching) code example.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped
     */
    stopCaching(): void;
    /**
     * Unregisters the listener. so stop receiving notification about attribute change of remote resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark Example of using can be find at [startObserving](iotcon.html#RemoteResource::startObserving) code example.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    stopObserving(): void;
    /**
     * Unsets the listener to stop monitoring the state of the remote resource.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark Example of using can be find at [setResourceStateChangeListener](iotcon.html#RemoteResource::setResourceStateChangeListener) code example.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    unsetResourceStateChangeListener(): void;
}
export interface RemoteResourceConstructor {
    prototype: RemoteResource;
    new(): RemoteResource;
}
/**
 * The RemoteResponse Interface holds response from server for specified request of client, this is client-side version of [Response](iotcon.html#Response) object.
 */
export interface RemoteResponse {
    /**
     * The options indicates the vendor specific options of COAP packet.
     */
    readonly options: ReadonlyArray<IotconOption> | null;
    /**
     * The representation indicates the information of the resource.
     */
    readonly representation: Representation;
    /**
     * The result indicates the detailed information about the result of the response to request.
     */
    readonly result: ResponseResult;
}
/**
 * The Representation Interface contains information of a resource. It can be used to communicate between a client and a server.
 */
export class Representation {
    constructor(uriPath: string);
    /**
     * A lists of attribute in this resource.
     */
    attributes: any;
    /**
     * Representations belonging to this representation.
     */
    children: ReadonlyArray<Representation> | null;
    /**
     * A list of interfaces in the resource.
     */
    resourceInterfaces: ReadonlyArray<ResourceInterface>;
    /**
     * A list of types in this resource
     */
    resourceTypes: ReadonlyArray<ResourceType>;
    /**
     * The resource URI.
     */
    uriPath: string;
}
export interface RepresentationConstructor {
    prototype: Representation;
    new(uriPath: string): Representation;
}
/**
 * The Request interface represents a details from client.
 */
export interface Request {
    /**
     * Connectivity type of connection.
     */
    readonly connectivityType: ConnectivityType;
    /**
     * The address of host of the request.
     */
    readonly hostAddress: string;
    /**
     * The option which was sent from client.
     *
     * @remark Options can have up to 2 IotconOption.
     */
    readonly options: ReadonlyArray<IotconOption>;
    /**
     * The query parameters from the request.
     */
    readonly query: Query;
    /**
     * The request representation.
     */
    readonly representation: Representation | null;
}
/**
 * Representation of server's response to a request.
 *
 * @since 5.5
 */
export class RequestReply {
    constructor(data: Bundle | null, code?: number);
    /**
     * Response status code.
     */
    code: number;
    /**
     * Response data bundle.
     */
    data: Bundle | null;
}
export interface RequestReplyConstructor {
    prototype: RequestReply;
    new(data: Bundle | null, code?: number): RequestReply;
}
/**
 * This interface has an application control information requested and passed
 * from another application and is passed to launch other applications. The newly
 * launched application can get the requested application control through the _getRequestedAppControl()_ method, and send the results
 * to the calling application through the _replyResult()_ method after performing the
 * required action requested by the calling application.
 *
 * @since 2.0
 */
export interface RequestedApplicationControl {
    /**
     * An attribute to store the application control object that describes the caller application's request.
     * It contains the information that the calling application passed to _launchAppControl_.
     */
    readonly appControl: ApplicationControl;
    /**
     * An attribute to store the caller application's ID.
     *
     * @since 2.1
     */
    readonly callerAppId: ApplicationId;
    /**
     * Notifies the calling application that the application failed
     * to perform the requested action.
     *
     * @throws WebAPIException with error type NotFoundError, if the caller app is not alive or there is no response from the caller app.
     * @throws WebAPIException with error type UnknownError, if the reply request fails because of an unknown error.
     */
    replyFailure(): void;
    /**
     * Sends the results to the caller application.
     *
     * @param data An array of ApplicationControlData objects.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type NotFoundError, if the caller app is not alive or there is no response from the caller app.
     * @throws WebAPIException with error type UnknownError, if the reply request fails because of an unknown error.
     */
    replyResult(data?: ApplicationControlData[] | null): void;
}
/**
 * This interface provides API to manage resource for server side.
 */
export interface Resource {
    /**
     * A lists of attributes of this resource.
     */
    attributes: any;
    /**
     * Indicates if the resource is initialized and activated or not
     */
    readonly isActive: boolean;
    /**
     * Indicates if the resource is discoverable or not
     */
    readonly isDiscoverable: boolean;
    /**
     * Indicates if the resource is is allowed to be discovered only if discovery request contains an explicit query string or not
     */
    readonly isExplicitDiscoverable: boolean;
    /**
     * Indicates if the resource is observable or not
     */
    readonly isObservable: boolean;
    /**
     * Indicates if the resource is secure or not
     */
    readonly isSecure: boolean;
    /**
     * Indicates if the resource takes some delay to respond or not
     */
    readonly isSlow: boolean;
    /**
     * A list of observation IDs of this resource.
     */
    readonly observerIds: ReadonlyArray<number>;
    /**
     * A list of interfaces in the resource.
     */
    readonly resourceInterfaces: ReadonlyArray<ResourceInterface>;
    /**
     * A list of types in this resource.
     */
    readonly resourceTypes: ReadonlyArray<ResourceType>;
    /**
     * A list of children of this resource.
     */
    readonly resources: ReadonlyArray<Resource>;
    /**
     * The resource URI.
     */
    readonly uriPath: string;
    /**
     * Adds child resource into the parent resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param resource The child resource to be added to the parent resource.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    addChildResource(resource: Resource): void;
    /**
     * Adds resource interface to this resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param interface The interface to be added to resource.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    addResourceInterface(interface: ResourceInterface): void;
    /**
     * Adds resource type to this resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param types An array of types to be added to resource.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    addResourceTypes(types: ResourceType[]): void;
    /**
     * Notifies specific clients that resource's attributes have been changed.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param qosLevel The quality of service level.
     * @param observerIds A list of observer id.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter does not contain a valid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    notify(qosLevel: QosLevel, observerIds?: number[] | null): void;
    /**
     * Removes child resource from the parent resource.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param resource The child resource to be removed from the parent resource.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if the resource does not have the input child resource.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    removeChildResource(resource: Resource): void;
    /**
     * Sets the listener for request from client.
     *
     * @param listener Request listener to set.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    setRequestListener(listener: RequestCallback): void;
    /**
     * Remove the listener.
     *
     * Calling this function has no effect if listener was not set.
     *
     * @remark Example of using can be find at [setRequestListener](iotcon.html#Resource::setRequestListener) code example.
     */
    unsetRequestListener(): void;
}
/**
 * The Response Interface holds response from server for specified request of client. It is server-side object, Response on client-side is hold as [RemoteResponse](iotcon.html#RemoteResponse) object.
 */
export class Response {
    constructor(request: Request);
    /**
     * The options indicates the vendor specific options of COAP packet.
     *
     * @remark Options can have up to 2 IotconOption.
     */
    options: ReadonlyArray<IotconOption> | null;
    /**
     * The representation indicates the information of the resource.
     */
    representation: Representation;
    /**
     * The request, that server responded.
     */
    readonly request: Request;
    /**
     * The result indicates the detailed information about the result of the response to request.
     */
    result: ResponseResult;
    /**
     * Sends the response.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, If the operation has been stopped.
     */
    send(): void;
}
export interface ResponseConstructor {
    prototype: Response;
    new(request: Request): Response;
}
/**
 * This interface defines SQL data type operators.
 */
export interface SQLDataControlConsumer extends DataControlConsumerObject {
    /**
     * Inserts new rows into a table owned by an SQL-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param insertionData The data on columns and values to insert.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    insert(
        reqId: number,
        insertionData: RowData,
        successCallback?: DataControlInsertSuccessCallback | null,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
    /**
     * Delete rows from a table that is owned by an SQL-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param where A filter to select desired rows to remove.
     * It is an SQL WHERE clause excluding the WHERE itself such as column1 = 'stringValue' AND column2 = numericValue.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    remove(
        reqId: number,
        where: string,
        successCallback?: DataControlSuccessCallback | null,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
    /**
     * Selects the specified columns to be queried. The result set of the specified columns is retrieved from a table owned by an SQL-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @remark _order_ is supported since Tizen 3.0
     * @remark If _page_ and _maxNumberPerPage_ parameters are not specified and result set contains more than 20 rows, only first 20 rows are included in the result.
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param columns The columns to select.
     * @param where A filter to select desired rows.
     * It is an SQL WHERE clause excluding the WHERE itself such as column1 = 'stringValue' AND column2 = numericValue.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param page The page number of the result set.
     * It starts from 1. If the number is out of page, DataControlSelectSuccessCallback is invoked with no result data.
     * @param maxNumberPerPage The maximum number of rows on a page. The maximum allowed value is equal to 1024.
     * @param order The sorting order of the selected rows.
     * It is an SQL ORDER BY clause excluding the ORDER BY itself such as column1, column2 ASC. If it is set to null, the order in which the rows are returned is undefined.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    select(
        reqId: number,
        columns: string[],
        where: string,
        successCallback: DataControlSelectSuccessCallback,
        errorCallback?: DataControlErrorCallback | null,
        page?: number | null,
        maxNumberPerPage?: number | null,
        order?: string | null,
    ): void;
    /**
     * Updates values of a table owned by an SQL-type data control provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/datacontrol.consumer
     *
     * @param reqId A unique identifier for the current operation.
     * So a developer should increase the _reqId_ value to ensure it is unique for each method.
     * @param updateData The data on columns and values to update.
     * @param where A filter to select desired rows to update.
     * It is an SQL WHERE clause excluding the WHERE itself such as column1 = 'stringValue' AND column2 = numericValue.
     * @param successCallback The method to invoke when the asynchronous call completes successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the parameter type is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type IOError, if a DB operation has failed.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if any other error occurs.
     */
    update(
        reqId: number,
        updateData: RowData,
        where: string,
        successCallback?: DataControlSuccessCallback | null,
        errorCallback?: DataControlErrorCallback | null,
    ): void;
}
/**
 * Search filter representation.
 *
 * @remark throws WebAPIException with error type TypeMismatchError, if constructor is called with invalid argument types.
 * @remark throws WebAPIException with error type InvalidValuesError, if constructor is called with null keyword and category different than NO\_CATEGORY.
 *
 * @since 5.5
 */
export class SearchFilter {
    constructor(
        contentType: MediaControllerContentType,
        category?: MediaControllerSearchCategory,
        keyword?: string | null,
        extraData?: Bundle | null,
    );
    /**
     * Specifies filter's search category parameter.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if keyword is null and new category value is not NO\_CATEGORY.
     */
    category: MediaControllerSearchCategory;
    /**
     * Specifies filter's content type parameter.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     */
    contentType: MediaControllerContentType;
    /**
     * Additional application-dependent search parameters.
     */
    extraData: Bundle | null;
    /**
     * Specifies filter's search keyword parameter.
     *
     * @remark Keyword can only be null or empty if the category is set to NO\_CATEGORY.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the category is not NO\_CATEGORY and the keyword is null.
     */
    keyword: string | null;
}
export interface SearchFilterConstructor {
    prototype: SearchFilter;
    new(
        contentType: MediaControllerContentType,
        category?: MediaControllerSearchCategory,
        keyword?: string | null,
        extraData?: Bundle | null,
    ): SearchFilter;
}
/**
 * Provides functions for creating resource, registering a resource, handling request from client.
 *
 * A Resource is a component in a server that can be viewed and controlled by another client.
 * There are different resource types, for example a temperature sensor, a light controller etc.
 */
export interface Server {
    /**
     * Creates a resource and registers the resource on server.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param uriPath The resource URI.
     * @param resourceTypes A list of types in this resource.
     * @param resourceInterfaces A list of interfaces in this resource.
     * @param listener The request listener, which is called when server receives request from client.
     * @param policy The policy for new Resource object.
     *
     * @returns Instance of _Resource_ object.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    createResource(
        uriPath: string,
        resourceTypes: ResourceType[],
        resourceInterfaces: ResourceInterface[],
        listener: RequestCallback,
        policy?: ResourcePolicy,
    ): Resource;
    /**
     * Returns an array of resources which are registered on the server.
     *
     * @returns Array of _Resource_ objects registered on server.
     *
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    getResources(): Resource[];
    /**
     * Removes the resource and unregisters it from server.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @param resource The resource object to delete.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    removeResource(resource: Resource): void;
    /**
     * Starts sending presence event of server. Server can send presence event to client when become online for the first time or come back from offline to online.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark If Server does not call startPresence(), client cannot get presence event with addPresenceEventListener().
     *
     * @remark If timeToLive is 0, server will set default value as 60 seconds. If timeToLive is bigger than maximum seconds, server will set maximum value as (60 \* 60 \* 24) seconds (24 hours).
     *
     * @param timeToLive The interval of announcing presence in seconds(value must range between 1 and 60 \* 60 \* 24 inclusive). default value is 60 seconds.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    startPresence(timeToLive: number): void;
    /**
     * Stops sending presence announcement of a server.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/internet
     *
     * @remark Example of using can be find at [startPresence](iotcon.html#Server::startPresence) code example.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation has been stopped.
     */
    stopPresence(): void;
}
/**
 * _SimpleCoordinates_ represents a point (latitude and longitude) in the map coordinate system.
 *
 * Latitude and longitude are of the WGS84 datum.
 */
export class SimpleCoordinates {
    constructor(latitude: number, longitude: number);
    /**
     * Latitude.
     */
    latitude: number;
    /**
     * Longitude.
     */
    longitude: number;
}
export interface SimpleCoordinatesConstructor {
    prototype: SimpleCoordinates;
    new(latitude: number, longitude: number): SimpleCoordinates;
}
/**
 * _SortMode_ is a common interface used for sorting of queried data.
 *
 * Note that the sorting result of list type attributes is not determined.
 */
export class SortMode {
    constructor(attributeName: string, order?: SortModeOrder | null);
    /**
     * The name of the object attribute used for sorting.
     */
    attributeName: string;
    /**
     * The type of the sorting.
     *
     * By default, this attribute is set to ASC.
     */
    order: SortModeOrder;
}
export interface SortModeConstructor {
    prototype: SortMode;
    new(attributeName: string, order?: SortModeOrder | null): SortMode;
}
/**
 * The SystemEventData interface defines what is retrieved from the event listener.
 *
 * @since 2.4
 *
 * Platform modules will be able to broadcast system events in a future Tizen release.
 */
export interface SystemEventData {
    /**
     * Type of the system event data item.
     *
     * @since 2.4
     */
    type: string;
    /**
     * Value of the system event data item.
     *
     * @since 2.4
     */
    value: string;
}
/**
 * This entry interface queries the information of a system.
 *
 * This API offers methods for retrieving system information
 * and for subscribing notifications of system information changes.
 */
export interface SystemInfo {
    /**
     * Adds a listener to allow tracking of changes in one or more values of a system property.
     *
     * The _ErrorCallback_ function can be launched with these error types:
     *
     * *   NotSupportedError - If the given property is not supported (since Tizen 2.3).
     * For example, monitoring CELLULAR\_NETWORK changes is not supported on a device which does not support the telephony feature.
     *
     * There are device properties which never change (for example "BUILD") and properties which do not change on the current platform
     * (for example "DEVICE\_ORIENTATION" for some platforms). The [addPropertyValueChangeListener()](#SystemInfo::addPropertyValueChangeListener) method accepts
     * any identifier of these properties, but the listener added for them will not be invoked.
     *
     * @since 2.3
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR\_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param options An object containing the various options for fetching the properties requested.
     * @param errorCallback Callback function called when an error occurs.
     *
     * @returns An identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value (e.g. the invalid value for _options_).
     * @throws WebAPIException with error type SecurityError, this error is only thrown for CELLULAR\_NETWORK property when an application does not declare _http://tizen.org/privilege/telephony_ privilege in _config.xml_.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    addPropertyValueArrayChangeListener(
        property: SystemInfoPropertyId,
        successCallback: SystemInfoPropertyArraySuccessCallback,
        options?: SystemInfoOptions | null,
        errorCallback?: ErrorCallback | null,
    ): number;
    /**
     * Adds a listener to allow tracking changes in one or more system properties.
     *
     * When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
     *
     * 1\. Register the successCallback to receive system events that the status of the requested properties may have changed.
     *
     * 2\. When a system event is successfully received, invoke the associated successCallback with an object containing the property
     * values.
     *
     * 3\. Repeat step 2 until removePropertyValueChangeListener function is called.
     *
     * There are device properties which are never changed (e.g. "BUILD") and properties which are not changed on some devices
     * (e.g. "DEVICE\_ORIENTATION" in Tizen TV device). The [addPropertyValueChangeListener()](#SystemInfo::addPropertyValueChangeListener) method accepts
     * any identifier of these properties, but the listener added for them will not be invoked.
     *
     * The _errorCallback_ can be launched with any of these error types:
     *
     * *   NotSupportedError - If the given property is not supported (since Tizen 2.3).
     * For example, monitoring CELLULAR\_NETWORK changes is not supported on a device which does not support the telephony feature.
     *
     * @remark The _errorCallback()_ is newly added as an optional parameter since Tizen 2.3.
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR\_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param options An object containing the various options for fetching the properties requested. See [details](./systeminfo.html#::SystemInfo::SystemInfoOptions).
     * @param errorCallback Callback function called when an error occurs.
     *
     * @returns An identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value (e.g. the invalid value for _options_).
     * @throws WebAPIException with error type SecurityError, this error is only thrown for CELLULAR\_NETWORK property when an application does not declare _http://tizen.org/privilege/telephony_ privilege in _config.xml_.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    addPropertyValueChangeListener(
        property: SystemInfoPropertyId,
        successCallback: SystemInfoPropertySuccessCallback,
        options?: SystemInfoOptions | null,
        errorCallback?: ErrorCallback | null,
    ): number;
    /**
     * Gets the amount of memory that is not in use (in bytes).
     *
     * @since 2.3
     *
     * @returns Not used memory in bytes.
     *
     * @throws WebAPIException with error type UnknownError in any error case.
     */
    getAvailableMemory(): number;
    /**
     * Gets the capabilities of the device.
     *
     * The function must synchronously acquire the capabilities of the device.
     *
     * @note _deprecated_ 2.3 Deprecated since 2.3. Instead, use [getCapability()](#SystemInfo::getCapability).
     *
     * @since 2.0
     *
     * @returns Capabilities of the device.
     *
     * @throws WebAPIException with error type UnknownError in any error case.
     */
    getCapabilities(): SystemInfoDeviceCapability;
    /**
     * Gets a device capability related to a given key.
     *
     * See the available [device capability keys](./systeminfo_capability_keys.html).
     * The additional keys for the custom device capability are specified by OEMs and vendors.
     *
     * @since 2.3
     *
     * @param key The device capability key for the device or additional custom device capability key specified by OEM.
     *
     * @returns The value of the specified device capability.
     *
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    getCapability(key: string): any;
    /**
     * Gets the number of system property information provided for a particular system property.
     *
     * That is the length of array retrieved by the [getPropertyValueArray()](#SystemInfo::getPropertyValueArray) method for the given property.
     *
     * @since 2.3
     *
     * @param property The name of the system property.
     *
     * @returns The number of property values for the given property. If the property is not supported, 0 is returned.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     */
    getCount(property: SystemInfoPropertyId): number;
    /**
     * Gets the current value of a specified system property.
     *
     * The function must asynchronously acquire the current value of the requested property. If it is successful,
     * the successCallback must be invoked with an object containing the information provided by the property.
     *
     * The _ErrorCallback_ function can be launched with these error types:
     *
     * *   NotSupportedError - If the given property is not supported (since Tizen 2.3).
     *
     * @remark If the given property is not supported, _NotSupportedError_ would be passed through a _ErrorCallback()_ since Tizen 2.3.
     * @remark If system provides more than one value for the system property, the primary (first) system property is returned through SystemInfoSuccessCallback.
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR\_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param errorCallback Callback function called when an error occurs while retrieving the properties.
     *
     * @throws WebAPIException with error type SecurityError, this error is only thrown for CELLULAR\_NETWORK property when an application does not declare _http://tizen.org/privilege/telephony_ privilege in _config.xml_.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    getPropertyValue(
        property: SystemInfoPropertyId,
        successCallback: SystemInfoPropertySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets the current values of a specified system property.
     *
     * It is recommended that you check if a device provides one or more than one value for a particular system property via [getCount()](#SystemInfo::getCount).
     *
     * If one particular system property is provided on a device, it returns an array containing one SystemInfoProperty object through _SystemInfoPropertyArraySuccessCallback_ method.
     * If more than one particular system property is provided, multiple SystemInfoProperty objects are returned.
     *
     * The _ErrorCallback_ function can be launched with these error types:
     *
     * *   NotSupportedError - If the given property is not supported.
     *
     * @since 2.3
     *
     * @remark See [getCount()](#SystemInfo::getCount).
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR\_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param errorCallback Callback function called when an error occurs while retrieving the properties.
     *
     * @throws WebAPIException with error type SecurityError, this error is only thrown for CELLULAR\_NETWORK property when an application does not declare _http://tizen.org/privilege/telephony_ privilege in _config.xml_.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     */
    getPropertyValueArray(
        property: SystemInfoPropertyId,
        successCallback: SystemInfoPropertyArraySuccessCallback,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Gets the total amount of system memory (in bytes).
     *
     * @since 2.3
     *
     * @returns Total system memory.
     *
     * @throws WebAPIException with error type UnknownError in any error case.
     */
    getTotalMemory(): number;
    /**
     * Unsubscribes notifications for property changes.
     *
     * If a valid listenerId argument is passed that corresponds to an existing subscription,
     * then the watch process must immediately terminate and no further
     * callback is invoked.
     *
     * @param listenerId An identifier of the subscription returned by the [addPropertyValueChangeListener()](#SystemInfo::addPropertyValueChangeListener) or
     * [addPropertyValueArrayChangeListener()](#SystemInfo::addPropertyValueArrayChangeListener) method.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value.
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    removePropertyValueChangeListener(listenerId: number): void;
}
/**
 * This property represents information about advertisement service - ADS.
 *
 * @since 3.0
 */
export interface SystemInfoADS extends SystemInfoProperty {
    /**
     * Represents the unique id of advertisement service. It is used to distinguish each device.
     */
    readonly id: string;
}
/**
 * This property reflects the general state of the system's battery.
 *
 * **Listener notice**:
 *
 * Change listener registered on BATTERY property is triggered on
 * _level_ and _isCharging_ properties change.
 */
export interface SystemInfoBattery extends SystemInfoProperty {
    /**
     * Indicates whether the battery source is currently charging.
     */
    readonly isCharging: boolean;
    /**
     * An attribute to specify the remaining level of an internal battery, scaled from 0 to 1:
     *
     * *   0 indicates that the battery level is the lowest and the system is about to enter shutdown mode.
     * *   1 indicates that the system's charge is maximum.
     * Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
     */
    readonly level: number;
    /**
     * Estimated time to discharge, in minutes.
     *
     * This parameter is mutually exclusive with parameter _timeToFullCharge_.
     * An attribute _timeToDischarge_ becomes null when device is plugged.
     *
     * This attribute may equal to \-1 indicating there is no enough collected data, which means
     * that the device is still learning device's power usage characteristics and cannot predict the time yet.
     * This process may take up to few days.
     *
     * @since 4.0
     */
    readonly timeToDischarge: number | null;
    /**
     * Estimated time to finish charging battery, in minutes.
     *
     * This parameter is mutually exclusive with parameter _timeToDischarge_.
     * An attribute _timeToFullCharge_ becomes null when device is unplugged.
     *
     * This attribute may equal to \-1 indicating there is no enough collected data, which means
     * that the device is still learning device's power usage characteristics and cannot predict the time yet.
     * This process may take up to few days.
     *
     * @since 4.0
     */
    readonly timeToFullCharge: number | null;
}
/**
 * This property reflects the information of the current device.
 *
 * @since 2.0
 */
export interface SystemInfoBuild extends SystemInfoProperty {
    /**
     * Represents the build version information of the device.
     *
     * @since 2.2
     */
    readonly buildVersion: string;
    /**
     * Represents the manufacturer of the device.
     *
     * @since 2.1
     */
    readonly manufacturer: string;
    /**
     * Represents the model name of the current device.
     */
    readonly model: string;
}
/**
 * /\*\*\*
 * The SystemInfoCameraFlash provides the way to control the attached the camera flash.
 *
 * @since 2.4
 */
export interface SystemInfoCameraFlash extends SystemInfoProperty {
    /**
     * /\*\*\*
     * Brightness level of the camera flash (0~1).
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/led
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly brightness: number;
    /**
     * /\*\*\*
     * Specifies camera to which this flash belongs.
     *
     * *   BACK - back camera flash
     * *   FRONT - front camera flash
     * *   EXTERNAL - external camera flash
     * *   OTHER - a flash attached to any other camera
     *
     * @since 2.4
     *
     * The [getPropertyValue()](#SystemInfo::getPropertyValue) method retrieves the SystemInfoCameraFlash for BACK camera.
     */
    readonly camera: string;
    /**
     * /\*\*\*
     * Number of brightness levels supported by the flash (other than 0 brightness).
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/led
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly levels: number;
    /**
     * Sets the brightness value of the flash that is located next to the camera.
     *
     * If the specified brightness value is not supported by the device, the brightness is rounded down to the nearest supported brightness value.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/led
     *
     * @param brightness The brightness value of LED (0~1).
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contains an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if the method cannot be completed because of an unknown error.
     */
    setBrightness(brightness: number): void;
}
/**
 * This property reflects the information of the Cellular network in this system.
 *
 * **Listener notice**:
 *
 * Change listener registered on CELLULAR\_NETWORK property is triggered on
 * _ipAddress_, _ipv6Address_ (the network layer), _cellId_,
 * _lac_ and _isFlightMode_ properties change.
 * Those changes could be not consistent with physical layer (_status_ of physical adapter).
 *
 * According to above constraints, in specific situation the listener could be
 * triggered just before network adapter shutdown and the value of _status_ returned
 * by listener would be outdated.
 */
export interface SystemInfoCellularNetwork extends SystemInfoProperty {
    /**
     * Represents an Access Point Name of the cellular network.
     */
    readonly apn: string;
    /**
     * Represents Cell ID.
     */
    readonly cellId: number;
    /**
     * Represents the DNS address of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly dns: string;
    /**
     * Represents the gateway of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly gateway: string;
    /**
     * Represents the International Mobile Equipment Identity (IMEI).
     *
     * @since 2.1
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/telephony
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     *
     * @warning 2.3.1 _http://tizen.org/privilege/systemmanager_ _(partner level)_ has been deprecated since 2.3.1. Instead, use _http://tizen.org/privilege/telephony_.
     */
    readonly imei: string;
    /**
     * Represents the IPv4 address of the cellular network.
     */
    readonly ipAddress: string;
    /**
     * Represents this connection's IP configuration type.
     *
     * @since 2.4
     */
    readonly ipMode: SystemInfoNetworkIpMode;
    /**
     * Represents the IPv6 address of the cellular network.
     *
     * @since 2.0
     */
    readonly ipv6Address: string;
    /**
     * Indicates whether the device is in flight mode.
     *
     * @since 2.1
     */
    readonly isFlightMode: boolean;
    /**
     * Indicates whether the connection is set up while the device is roaming.
     */
    readonly isRoaming: boolean;
    /**
     * Represents Location Area Code.
     */
    readonly lac: number;
    /**
     * Represents Mobile Country Code (MCC) of the cellular network.
     */
    readonly mcc: number;
    /**
     * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely
     * identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
     */
    readonly mnc: number;
    /**
     * Represents the status (ON or OFF) of the cellular network.
     */
    readonly status: string;
    /**
     * Represents the subnet mask of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly subnetMask: string;
}
/**
 * This property reflects the state of the CPUs available to this system.
 */
export interface SystemInfoCpu extends SystemInfoProperty {
    /**
     * An attribute to indicate the current CPU load, as a number between 0.0 and 1.0, representing the minimum and maximum values allowed on this system.
     *
     * Any threshold parameter used in a watch function to monitor this property applies to this attribute.
     */
    readonly load: number;
}
/**
 * SystemInfoDeviceCapability object.
 *
 * @note _deprecated_ 2.3 Deprecated since 2.3. Instead, use [getCapability()](#SystemInfo::getCapability) to query device capabilities.
 *
 * @since 2.0
 */
export interface SystemInfoDeviceCapability {
    /**
     * Indicates whether the device supports accelerometer.
     */
    readonly accelerometer: boolean;
    /**
     * Indicates whether the device supports accelerometer wake-up feature.
     *
     * @since 2.1
     */
    readonly accelerometerWakeup: boolean;
    /**
     * Indicates whether the device supports auto rotation.
     *
     * @since 2.1
     */
    readonly autoRotation: boolean;
    /**
     * Indicates whether the device supports barometer.
     */
    readonly barometer: boolean;
    /**
     * Indicates whether the device supports barometer wake-up feature.
     *
     * @since 2.1
     */
    readonly barometerWakeup: boolean;
    /**
     * Indicates whether the device supports Bluetooth.
     */
    readonly bluetooth: boolean;
    /**
     * Indicates whether the device supports camera.
     *
     * @since 2.1
     */
    readonly camera: boolean;
    /**
     * Indicates whether the device supports back-side camera.
     */
    readonly cameraBack: boolean;
    /**
     * Indicates whether the device supports flash on the back-side camera.
     */
    readonly cameraBackFlash: boolean;
    /**
     * Indicates whether the device supports front camera.
     */
    readonly cameraFront: boolean;
    /**
     * Indicates whether the device supports flash on the front camera.
     */
    readonly cameraFrontFlash: boolean;
    /**
     * Indicates whether the device supports data encryption.
     *
     * @since 2.1
     */
    readonly dataEncryption: boolean;
    /**
     * Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
     *
     * @remark Tizen ID is a randomly generated value based on the model name.
     * It is recommended to use tizen.systeminfo.getCapability("http://tizen.org/system/tizenid") since Tizen 2.3 instead.
     */
    readonly duid: string;
    /**
     * Indicates whether the device supports FM radio.
     */
    readonly fmRadio: boolean;
    /**
     * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
     *
     * @since 2.1
     */
    readonly graphicsAcceleration: boolean;
    /**
     * Indicates whether the device supports gyroscope.
     */
    readonly gyroscope: boolean;
    /**
     * Indicates whether the device supports gyroscope wake-up feature.
     *
     * @since 2.1
     */
    readonly gyroscopeWakeup: boolean;
    /**
     * Indicates whether the device supports the built-in keyboard.
     */
    readonly inputKeyboard: boolean;
    /**
     * Indicates whether the device supports the built-in keyboard layout.
     *
     * @since 2.1
     */
    readonly inputKeyboardLayout: boolean;
    /**
     * Indicates whether the device supports GPS or not.
     */
    readonly location: boolean;
    /**
     * Indicates whether the device supports GPS based location feature.
     */
    readonly locationGps: boolean;
    /**
     * Indicates whether the device supports WPS based location feature.
     */
    readonly locationWps: boolean;
    /**
     * Indicates whether the device supports magnetometer.
     */
    readonly magnetometer: boolean;
    /**
     * Indicates whether the device supports magnetometer wake-up feature.
     *
     * @since 2.1
     */
    readonly magnetometerWakeup: boolean;
    /**
     * Indicates whether the device supports microphone.
     */
    readonly microphone: boolean;
    /**
     * The number of point in Multi-point touch.
     */
    readonly multiTouchCount: number;
    /**
     * The version of the Native API in the _\[Major\].\[Minor\].\[Patch Version\]_ format.
     *
     * For example, 1.0.0 represents a Native API version where the major version is 1 and the minor and build versions are 0.
     * _\[Patch Version\]_ is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
     * Manufacturers may add more parts (dot followed by number or text) after the preserved format.
     * If a version is not versioned as \[Major\].\[Minor\].\[Patch Version\], the unused digits must be taken as 0.
     * So for example, version 2.3 is 2.3.0 and manufacturers must add parts after 2.3.0 such as 2.3.0.1.
     *
     * @since 2.1
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly nativeApiVersion: string;
    /**
     * Indicates whether the device supports native OSP API.
     *
     * @since 2.1
     */
    readonly nativeOspCompatible: boolean;
    /**
     * Indicates whether the device supports NFC.
     */
    readonly nfc: boolean;
    /**
     * Indicates whether the device supports NFC reserved push.
     *
     * @since 2.1
     */
    readonly nfcReservedPush: boolean;
    /**
     * Indicates whether the device supports OpenGL-ES.
     *
     * @since 2.1
     */
    readonly opengles: boolean;
    /**
     * Indicates whether the device supports OpenGL-ES version 1.1.
     */
    readonly openglesVersion1_1: boolean;
    /**
     * Indicates whether the device supports OpenGL-ES version 2.0.
     */
    readonly openglesVersion2_0: boolean;
    /**
     * The device 3DC texture format for OpenGL-ES.
     *
     * One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
     *
     * @since 2.1
     */
    readonly openglestextureFormat: string;
    /**
     * Indicates whether the device supports photometer.
     *
     * @since 2.1
     */
    readonly photometer: boolean;
    /**
     * Indicates whether the device supports photometer wake-up feature.
     *
     * @since 2.1
     */
    readonly photometerWakeup: boolean;
    /**
     * The device CPU architecture.
     *
     * The possible values for this attribute are: armv6, armv7, x86.
     */
    readonly platformCoreCpuArch: string;
    /**
     * The device FPU architecture.
     *
     * The possible values for this attribute are: vfpv3, sse2, sse3 and ssse3.
     */
    readonly platformCoreFpuArch: string;
    /**
     * The name of the platform.
     */
    readonly platformName: string;
    /**
     * The version of the platform in the _\[Major\].\[Minor\].\[Patch Version\]_ format.
     *
     * For example, 1.0.0 represents a platform version where the major version is 1 and the minor and build versions are 0.
     * _\[Patch Version\]_ is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
     * Manufacturers may add more parts (dot followed by number or text) after the preserved format.
     * If a version is not versioned as \[Major\].\[Minor\].\[Patch Version\], the unused digits must be taken as 0.
     * So for example, version 2.3 is 2.3.0 and manufacturers must add parts after 2.3.0 such as 2.3.0.1.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly platformVersion: string;
    /**
     * Represents the profile of the current device.
     *
     * @since 2.2
     */
    readonly profile: SystemInfoProfile;
    /**
     * Indicates whether the device supports proximity.
     */
    readonly proximity: boolean;
    /**
     * Indicates whether the device supports proximity wake-up feature.
     *
     * @since 2.1
     */
    readonly proximityWakeup: boolean;
    /**
     * Indicates whether the device supports push service.
     *
     * @since 2.1
     */
    readonly push: boolean;
    /**
     * Indicates whether the device supports HDMI output.
     */
    readonly screenOutputHdmi: boolean;
    /**
     * Indicates whether the device supports RCA output.
     */
    readonly screenOutputRca: boolean;
    /**
     * Indicates whether the device supports the 480 \* 800 screen size.
     *
     * @since 2.1
     */
    readonly screenSize480_800: boolean;
    /**
     * Indicates whether the device supports the 720 \* 1280 screen size.
     *
     * @since 2.1
     */
    readonly screenSize720_1280: boolean;
    /**
     * Indicates whether the device supports the screen normal size.
     *
     * @since 2.1
     */
    readonly screenSizeNormal: boolean;
    /**
     * Indicates whether the device supports secure element.
     *
     * @since 2.1
     */
    readonly secureElement: boolean;
    /**
     * Indicates whether the device supports shell app widget (dynamic box).
     *
     * @since 2.1
     */
    readonly shellAppWidget: boolean;
    /**
     * Indicates whether the device supports VOIP.
     */
    readonly sipVoip: boolean;
    /**
     * Indicates whether the device supports speech recognition.
     */
    readonly speechRecognition: boolean;
    /**
     * Indicates whether the device supports speech synthesis.
     *
     * @since 2.1
     */
    readonly speechSynthesis: boolean;
    /**
     * Indicates whether the device supports the telephony feature.
     *
     * @since 2.1
     */
    readonly telephony: boolean;
    /**
     * Indicates whether the device supports the MMS feature.
     *
     * @since 2.1
     */
    readonly telephonyMms: boolean;
    /**
     * Indicates whether the device supports the SMS feature.
     *
     * @since 2.1
     */
    readonly telephonySms: boolean;
    /**
     * Indicates whether the device supports tiltmeter.
     *
     * @since 2.1
     */
    readonly tiltmeter: boolean;
    /**
     * Indicates whether the device supports tiltmeter wake-up feature.
     *
     * @since 2.1
     */
    readonly tiltmeterWakeup: boolean;
    /**
     * Indicates whether the device supports USB accessory.
     */
    readonly usbAccessory: boolean;
    /**
     * Indicates whether the device supports USB host.
     */
    readonly usbHost: boolean;
    /**
     * Indicates whether the device supports vision face recognition.
     *
     * @since 2.1
     */
    readonly visionFaceRecognition: boolean;
    /**
     * Indicates whether the device supports vision image recognition.
     *
     * @since 2.1
     */
    readonly visionImageRecognition: boolean;
    /**
     * Indicates whether the device supports vision QR code generation.
     *
     * @since 2.1
     */
    readonly visionQrcodeGeneration: boolean;
    /**
     * Indicates whether the device supports vision QR code recognition.
     *
     * @since 2.1
     */
    readonly visionQrcodeRecognition: boolean;
    /**
     * The version of the Web API in the _\[Major\].\[Minor\].\[Patch Version\]_ format.
     *
     * For example, 1.0.0 represents a Web API version where the major version is 1 and the minor and build versions are 0.
     * _\[Patch Version\]_ is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
     * Manufacturers may add more parts (dot followed by number or text) after the preserved format.
     * If a version is not versioned as \[Major\].\[Minor\].\[Patch Version\], the unused digits must be taken as 0.
     * So for example, version 2.3 is 2.3.0 and manufacturers must add parts after 2.3.0 such as 2.3.0.1.
     *
     * @since 2.1
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly webApiVersion: string;
    /**
     * Indicates whether the device supports Wi-Fi.
     */
    readonly wifi: boolean;
    /**
     * Indicates whether the device supports Wi-Fi Direct.
     */
    readonly wifiDirect: boolean;
}
/**
 * This property reflects the information of the device orientation in this system.
 *
 * @since 2.0
 */
export interface SystemInfoDeviceOrientation extends SystemInfoProperty {
    /**
     * Indicates whether the device is in autorotation.
     *
     * @since 2.2
     */
    readonly isAutoRotation: boolean;
    /**
     * Represents the status of the current device orientation.
     */
    readonly status: SystemInfoDeviceOrientationStatus;
}
/**
 * This property reflects the information of the Display.
 *
 * **Listener notice**:
 *
 * Change listener registered on DISPLAY property is triggered on
 * _brightness_ property change.
 */
export interface SystemInfoDisplay extends SystemInfoProperty {
    /**
     * The current brightness of a display ranging between 0 to 1.
     */
    readonly brightness: number;
    /**
     * Resolution of this device, along its height, in dots per inch.
     */
    readonly dotsPerInchHeight: number;
    /**
     * Resolution of this device, along its width, in dots per inch.
     */
    readonly dotsPerInchWidth: number;
    /**
     * The display's physical height in millimeters.
     */
    readonly physicalHeight: number;
    /**
     * The display's physical width in millimeters.
     */
    readonly physicalWidth: number;
    /**
     * The total number of addressable pixels in the vertical direction of a rectangular element
     * (such as Camera, Display, Image, Video, ...) when held in its default orientation.
     */
    readonly resolutionHeight: number;
    /**
     * The total number of addressable pixels in the horizontal direction of a rectangular entity
     * (such as Camera, Display, Image, Video, ...) when held in its default orientation.
     */
    readonly resolutionWidth: number;
}
/**
 * This property reflects the information of the Ethernet network in this system.
 *
 * **Listener notice**:
 *
 * Change listener registered on ETHERNET\_NETWORK property is triggered on
 * _ipAddress_ and _ipv6Address_ properties change (the network layer).
 * Those changes could be not consistent with physical layer (_status_ of physical adapter).
 *
 * According to above constraints, in specific situation the listener could be
 * triggered just before network adapter shutdown and the value of _status_ returned
 * by listener would be outdated.
 *
 * @since 2.4
 */
export interface SystemInfoEthernetNetwork extends SystemInfoProperty {
    /**
     * Represents the cable status (ATTACHED or DETACHED) of the Ethernet interface.
     */
    readonly cable: string;
    /**
     * Represents the DNS address of this connection.
     *
     * It is written in 255.255.255.255 format.
     */
    readonly dns: string;
    /**
     * Represents the gateway of this connection.
     *
     * It is written in 255.255.255.255 format.
     */
    readonly gateway: string;
    /**
     * Represents the IPv4 address of the Ethernet network.
     */
    readonly ipAddress: string;
    /**
     * Represents this connection's IP configuration type.
     */
    readonly ipMode: SystemInfoNetworkIpMode;
    /**
     * Represents the IPv6 address of the Ethernet network.
     */
    readonly ipv6Address: string;
    /**
     * Represents the MAC address of the Ethernet interface.
     *
     * It is written in MM:MM:MM:SS:SS:SS format.
     */
    readonly macAddress: string;
    /**
     * Represents the status (DEACTIVATED, DISCONNECTED or CONNECTED) of the Ethernet interface.
     */
    readonly status: string;
    /**
     * Represents the subnet mask of this connection.
     *
     * It is written in 255.255.255.255 format.
     */
    readonly subnetMask: string;
}
/**
 * This property reflects the locale information of the current device.
 *
 * @since 2.1
 */
export interface SystemInfoLocale extends SystemInfoProperty {
    /**
     * Indicates the current country setting in the (LANGUAGE)\_(REGION) syntax.
     *
     * The language setting is in the ISO 639-2 format and the region setting is in the ISO 3166-1 alpha-2 format.
     * The country setting is case-sensitive.
     */
    readonly country: string;
    /**
     * Indicates the current language setting in the (LANGUAGE)\_(REGION) syntax.
     *
     * The language setting is in the ISO 639-2 format and the region setting is in the ISO 3166-1 alpha-2 format.
     * The language setting is case-sensitive.
     */
    readonly language: string;
}
/**
 * This property represents information about the memory state on the device system.
 *
 * @since 2.3
 */
export interface SystemInfoMemory extends SystemInfoProperty {
    /**
     * Represents the low memory state.
     */
    readonly status: SystemInfoLowMemoryStatus;
}
/**
 * This property reflects the information of the net\_proxy network in this system.
 *
 * @since 3.0
 */
export interface SystemInfoNetProxyNetwork extends SystemInfoProperty {
    /**
     * Represents the status (ON or OFF) of the net\_proxy network.
     */
    readonly status: string;
}
/**
 * This property reflects the information of the data network in this system.
 *
 * @since 2.0
 */
export interface SystemInfoNetwork extends SystemInfoProperty {
    /**
     * Represents the network type of the current data network.
     */
    readonly networkType: SystemInfoNetworkType;
}
/**
 * This property reflects the resolution limits of the panel.
 *
 * @remark Methods [addPropertyValueChangeListener()](#SystemInfo::addPropertyValueChangeListener) and
 * [addPropertyValueArrayChangeListener()](#SystemInfo::addPropertyValueArrayChangeListener) triggers
 * errorCallback with error type NotSupportedError in case of use the PANEL property.
 * @since 5.5
 */
export interface SystemInfoPanel extends SystemInfoProperty {
    /**
     * The height of the panel in pixels.
     */
    readonly panelHeight: number;
    /**
     * The width of the panel in pixels.
     */
    readonly panelWidth: number;
}
/**
 * This property reflects the peripheral information of the current device.
 *
 * @since 2.1
 */
export interface SystemInfoPeripheral extends SystemInfoProperty {
    /**
     * Represents the video out status.
     */
    readonly isVideoOutputOn: boolean;
}
/**
 * This is a common abstract interface used by different types of system information objects.
 */
export interface SystemInfoProperty {
}
/**
 * This property reflects the information of the SIM card information.
 *
 * @since 2.0
 */
export interface SystemInfoSIM extends SystemInfoProperty {
    /**
     * Represents the Integrated Circuit Card ID.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly iccid: string;
    /**
     * Represents the Mobile Country Code (MCC) of SIM provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly mcc: number;
    /**
     * Represents the Mobile Network Code (MNC) of SIM provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly mnc: number;
    /**
     * Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/telephony
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     * @warning 2.4 The partner level privilege, _http://tizen.org/privilege/systemmanager_, has been deprecated. From Tizen 2.4, the public level privilege, _http://tizen.org/privilege/telephony_, is required.
     */
    readonly msin: string;
    /**
     * Represents the SIM card subscriber number.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/telephony
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     *
     * @warning 2.4 The partner level privilege, _http://tizen.org/privilege/systemmanager_, has been deprecated. From Tizen 2.4, the public level privilege, _http://tizen.org/privilege/telephony_, is required.
     */
    readonly msisdn: string;
    /**
     * Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly operatorName: string;
    /**
     * Represents the Service Provider Name (SPN) of SIM card.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly spn: string;
    /**
     * Represents the SIM card state.
     *
     * @since 2.1
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/system
     *
     * @throws WebAPIException with error type SecurityError, if this attribute is not allowed.
     */
    readonly state: SystemInfoSimState;
}
/**
 * This property represents a country of which basic policy of terms and conditions is set.
 *
 * @since 5.5
 */
export interface SystemInfoServiceCountry extends SystemInfoProperty {
    /**
     * Represents a country of which basic policy is set.
     */
    readonly serviceCountry: string;
}
/**
 * This property exposes the data storage devices connected to this system.
 */
export interface SystemInfoStorage extends SystemInfoProperty {
    /**
     * The array of storage units connected to this device.
     */
    readonly units: ReadonlyArray<SystemInfoStorageUnit>;
}
/**
 * This property exposes a single storage device connected to this system.
 */
export interface SystemInfoStorageUnit extends SystemInfoProperty {
    /**
     * The amount of space currently available on the user's storage, in bytes.
     */
    readonly availableCapacity: number;
    /**
     * The total amount of space available on the user's storage (excluding system-reserved), in bytes.
     */
    readonly capacity: number;
    /**
     * An attribute to indicate whether a device can be removed or not.
     *
     * The following values are supported:
     * *   true - If this storage unit can be removed from the system (such as an sdcard unplugged)
     * *   false - If this storage unit cannot be removed from the system
     * @since 2.1
     */
    readonly isRemovable: boolean;
    /**
     * True if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
     *
     * @note _deprecated_ 2.1 Deprecated since 2.1. Instead, use _isRemovable_.
     */
    readonly isRemoveable: boolean;
    /**
     * The type of a storage device. The value is one of the constants defined for this type.
     *
     * The supported storage unit types are:
     *
     * *   UNKNOWN
     * *   INTERNAL
     * *   USB\_DEVICE
     * *   USB\_HOST
     * *   MMC
     */
    readonly type: string;
}
/**
 * This property reflects the video sources the device has.
 *
 * @since 2.3
 */
export interface SystemInfoVideoSource extends SystemInfoProperty {
    /**
     * Represents a list of video sources that a device is connected with.
     */
    readonly connected: ReadonlyArray<SystemInfoVideoSourceInfo>;
    /**
     * Represents a list of video sources that a device is not connected with.
     */
    readonly disconnected: ReadonlyArray<SystemInfoVideoSourceInfo>;
}
/**
 * This property reflects each input source the current device has.
 *
 * If there are 2 HDMI inputs on a device, two _SystemInfoVideoSourceInfo_ objects must be retrieved through _SystemInfoVideoSource_
 *
 * {type=HDMI, number=1, signal=null}, {type=HDMI, number=2, signal=null}
 *
 * @since 2.3
 */
export interface SystemInfoVideoSourceInfo {
    /**
     * Represents the input number of the input source.
     *
     * If the source is "HDMI 2", the _number_ is 2.
     */
    readonly inputSource: number;
    /**
     * Represents if there is a signal provided on the source.
     *
     * The _signal_ attribute can be null. The null value means that information about signal could not be retrieved at the time of returning this object.
     * If the value is true, it means that there is signal provided. The value set to false means, that there is no signal.
     * By default getPropertyValue functions does not support this member, and will return object with _signal_ value set to null, it is supported only by TVWindow module. To get data about signal use [tizen.tvwindow.getSource()](./tvwindow.html#TVWindowManager::getSource) or [tizen.tvwindow.setSource()](./tvwindow.html#TVWindowManager::setSource).
     *
     * @since 5.5
     */
    readonly signal: boolean | null;
    /**
     * Represents the type of the video input source.
     */
    readonly type: SystemInfoVideoSourceType;
}
/**
 * This property reflects the information of the Wi-Fi network in this system.
 *
 * **Listener notice**:
 *
 * Change listener registered on WIFI\_NETWORK property is triggered on
 * _ipAddress_ and _ipv6Address_ properties change (the network layer).
 * Those changes could be not consistent with physical layer (_status_ or
 * _signalStrength_ of physical adapter).
 *
 * According to above constraints, in specific situation the listener could be
 * triggered just before network adapter shutdown and the value of _status_ returned
 * by listener would be outdated.
 */
export interface SystemInfoWifiNetwork extends SystemInfoProperty {
    /**
     * Represents the DNS address of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly dns: string;
    /**
     * Represents this connection's encryption type.
     *
     * @since 2.4
     */
    readonly encryptionType: SystemInfoWifiEncryptionType;
    /**
     * Represents the gateway of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly gateway: string;
    /**
     * Represents the IPv4 address of the Wi-Fi network.
     */
    readonly ipAddress: string;
    /**
     * Represents this connection's IP configuration type.
     *
     * @since 2.4
     */
    readonly ipMode: SystemInfoNetworkIpMode;
    /**
     * Represents the IPv6 address of the Wi-Fi network.
     *
     * @since 2.0
     */
    readonly ipv6Address: string;
    /**
     * Represents the MAC address of the Wi-Fi interface.
     *
     * It is written in MM:MM:MM:SS:SS:SS format.
     *
     * @since 2.3
     */
    readonly macAddress: string;
    /**
     * Represents this connection's security mode.
     *
     * @since 2.4
     */
    readonly securityMode: SystemInfoWifiSecurityMode;
    /**
     * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
     */
    readonly signalStrength: number;
    /**
     * Represents the SSID of the Wi-Fi network.
     */
    readonly ssid: string;
    /**
     * Represents the status (ON or OFF) of the Wi-Fi interface.
     */
    readonly status: string;
    /**
     * Represents the subnet mask of this connection.
     *
     * It is written in 255.255.255.255 format.
     * @since 2.4
     */
    readonly subnetMask: string;
}
/**
 * The TVInfoManager interface provides the functionalities to get setting values provided by Tizen TV.
 */
export interface TVInfoManager {
    /**
     * Adds a listener to be called when given caption menu key value changes.
     *
     * @param key Caption menu key which changes will be observed by this listener
     * @param callback Callback method to be invoked when the value changes
     *
     * @returns long Subscription identifier
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    addCaptionValueChangeListener(key: CaptionInfoKey, callback: CaptionValueChangeCallback): number;
    /**
     * Method returns the value for corresponding caption menu key.
     *
     * @returns CaptionValue value for given caption menu key
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    getCaptionValue(key: CaptionInfoKey): CaptionValue;
    /**
     * Removes a listener.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param watchId Identifier of the subscription returned by addCaptionValueChangeListener()
     *
     * @throws WebAPIException with error type UnknownError, in any other error case.
     */
    removeCaptionValueChangeListener(watchId: number): void;
}
/**
 * The TVInputDeviceManager interface provides the features to check for availability and register for input device events.
 */
export interface TVInputDeviceManager {
    /**
     * Returns information about the key which has the given name.
     *
     * @param keyName The name of the key to retrieve.
     *
     * @returns InputDeviceKey InputDeviceKey object for the given key name, or null if the key is not supported.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidValuesError if the given keyName is invalid (e.g. name is empty string).
     * @throws WebAPIException with error type UnknownError in any other error case.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     */
    getKey(keyName: InputDeviceKeyName): InputDeviceKey | null;
    /**
     * Retrieves the list of keys can be registered with the _registerKey()_ method.
     *
     * Mandatory keys will not be retrieved by this method.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError in case of any error.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     */
    getSupportedKeys(): InputDeviceKey[];
    /**
     * Registers an input device key to receive DOM keyboard event when it is pressed or released.
     *
     * When an application wants to react to the Input Device keys being pressed, it should register this key.
     *
     * An application cannot register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
     *
     * @param keyName The name of the key which should generate DOM key events when pressed.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidValuesError, if the given keyName is invalid or not supported (e.g. name is empty string).
     * @throws WebAPIException with error type UnknownError in any other error case.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     */
    registerKey(keyName: InputDeviceKeyName): void;
    /**
     * Registers a batch of input device keys to receive DOM keyboard events when any of them is pressed or released.
     *
     * When an application wants to react to the input device key presses, it should register those keys.
     *
     * An application cannot register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
     *
     * The errorCallback is launched with this error type:
     *
     * *   InvalidValuesError: If any of the given keyNames is invalid or not supported.
     * *   UnknownError: In case of any other error.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     *
     * @param keyNames The array with the names of the keys which will generate DOM key events when they are pressed.
     * @param successCallback Callback method to be invoked when keys are registered.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidValuesError, if any of the given keyNames is invalid or not supported (e.g. name is empty string).
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError in any other error case.
     */
    registerKeyBatch(
        keyNames: InputDeviceKeyName[],
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
    /**
     * Unregisters an input device key.
     *
     * @param keyName The name of the key which should not be monitored any longer.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidValuesError, if the given keyName is invalid or not supported (e.g. name is empty string).
     * @throws WebAPIException with error type UnknownError in any error case.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     */
    unregisterKey(keyName: InputDeviceKeyName): void;
    /**
     * Unregisters a batch of input device keys.
     *
     * The errorCallback is launched with this error type:
     *
     * *   InvalidValuesError: If any of the given keyNames is invalid or not supported.
     * *   UnknownError: In case of any other error.
     *
     * @param keyNames The array with the names of the keys to unregister.
     * @param successCallback Callback method to be invoked when keys are unregistered.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type InvalidValuesError, if any of the given keyNames is invalid or not supported (e.g. name is empty string).
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError in any error case.
     */
    unregisterKeyBatch(
        keyNames: InputDeviceKeyName[],
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
/**
 * This interface provides access to the API funtionalities through the _tizen.tvwindow_ interface.
 */
export interface TVWindowManager {
    /**
     * Adds a video resolution listener for getting notified about resolution changes.
     *
     * @param callback The method to invoke when the resolution has been changed.
     * @param type The window type. By default, this parameter is set to MAIN.
     *
     * @returns long The identifier of the resolution change listener.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError, if it fails to register a listener.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    addVideoResolutionChangeListener(callback: VideoResolutionChangeCallback, type?: WindowType | null): number;
    /**
     * Gets the list of available windows.
     *
     * @param successCallback The method to invoke when a list of the available windows is retrieved successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getAvailableWindows(successCallback: AvailableWindowListCallback, errorCallback?: ErrorCallback | null): void;
    /**
     * Gets the area information of a TV window which is shown.
     *
     * According to the specified **unit**, information about the area will be passed to an array that contains 4 strings through _WindowRectangleSuccessCallback_ as follows :
     *
     * *   If you set _"px"_ as _unit_, \["0px", "0px", "1920px", "1080px"\]
     * *   If you set _"%"_ as _unit_, \["0%", "0%", "100%", "100%"\]
     *
     * If you omit **unit**, the pixel("px") unit will be used as a default unit.
     *
     * @param successCallback The method to invoke when the position and size of the TV window has been obtained successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param unit The measurement unit for specifying the display area - by default, this attribute is set to _"px"_.
     * @param type The window type - by default, this attribute is set to MAIN.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError if any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getRect(
        successCallback: WindowRectangleSuccessCallback,
        errorCallback?: ErrorCallback | null,
        unit?: MeasurementUnit | null,
        type?: WindowType | null,
    ): void;
    /**
     * Gets information about the current source of a specified TV window.
     *
     * @param type The window type - by default, this attribute is set to MAIN.
     *
     * @returns The information about the current video source. Returned object will have the _signal_ property, stating whether there is signal provided or not on the source, this property value will be filled only when the window was shown using [show()](./tvwindow.html#TVWindowManager::show) function.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError if any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getSource(type?: WindowType | null): SystemInfoVideoSourceInfo;
    /**
     * Gets video resolution information.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError if any other error occurs.
     *
     * @param type The window type - by default, this attribute is set to MAIN.
     *
     * @returns VideoResolution current video resolution information
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getVideoResolution(type?: WindowType | null): VideoResolution;
    /**
     * Hides a TV window which is shown.
     *
     * @param successCallback The method to invoke when the window is hidden successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param type The window type - by default, this attribute is set to MAIN.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError if any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    hide(successCallback: SuccessCallback, errorCallback?: ErrorCallback | null, type?: WindowType | null): void;
    /**
     * Removes the listener to stop receiving notifications for the video resolution changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param listenerId The identifier of the listener for resolution changes.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError in any other error case.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    removeVideoResolutionChangeListener(listenerId: number): void;
    /**
     * Changes the source of a TV window.
     *
     * @param videoSource The video source to set
     * The possible video sources can be obtained through **tizen.systeminfo.getPropertyValue("VIDEOSOURCE")**.
     * @param successCallback The method to invoke when the intput source has been changed successfully.
     * The result SystemInfoVideoSourceInfo object will have the _signal_ property filled only when the window was shown using [show()](./tvwindow.html#TVWindowManager::show) function.
     * @param errorCallback The method to invoke when an error occurs.
     * @param type The window type - by default, this attribute is set to MAIN.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError if any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    setSource(
        videoSource: SystemInfoVideoSourceInfo,
        successCallback: SourceChangedSuccessCallback,
        errorCallback?: ErrorCallback | null,
        type?: WindowType | null,
    ): void;
    /**
     * Sets the display area of a TV window and shows it on the display.
     *
     * The _rectangle_ array requires exactly four elements which are described below:
     *
     * *   The first element indicates the x coordinate of the top left corner of the TV window (distance from the left edge of the screen).
     * *   The second element indicates the y coordinate of the top left corner of the TV window (distance from the top edge of the screen).
     * *   The third element indicates the width of the TV window.
     * *   The fourth element indicates the height of the TV window.
     *
     * Each element of _rectangle_ can be described in either absolute value by using pixel units "px"
     * or relative value by using percentage units "%". If you do not specify any unit after a value then it will be taken as an absolute value.
     *
     * The _errorCallback_ is invoked with these error types:
     *
     * *   _InvalidValuesError_ will be thrown if _rectangle_ has any element with invalid format (e.g. "10p") or it does not have 4 elements.
     * *   _NotSupportedError_ will be thrown if you set _rectangle_ which is not within the boundary of the display area or when the TV window is not supported in the current screen orientation.
     * *   _TypeMismatchError_ will be thrown if _rectangle_ is not an array.
     *
     * @param successCallback The method which will be invoked when the position and size of the TV window has been changed successfully.
     * @param errorCallback The method which will be invoked when an error occurs.
     * @param rectangle An array that contains information about the position and size of a specified TV window as a string with units
     * .
     * Without this parameter, the TV window will have the same size and location as when this method last suceeded.
     * But, if a rectangle has never been specified, the TV window will be shown in full screen mode.
     * @param type The window type - by default, this attribute is set to MAIN.
     * @param zPosition Specifies whether the TV window should be in front of or behind the Web Application since Tizen 2.4
     * By default, this parameter is set to FRONT.
     * If this parameter is set to null or FRONT, this method behaves in the same way as it did before Tizen 2.4.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input attribute is not compatible with the expected type for this attribute.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type UnknownError if any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    show(
        successCallback: WindowRectangleSuccessCallback,
        errorCallback?: ErrorCallback | null,
        rectangle?: string[] | null,
        type?: WindowType | null,
        zPosition?: ZPosition | null,
    ): void;
}
/**
 * The TZDate interface represents information regarding a given date/time in a predefined timezone.
 * If its date/time exceeds the platform limit, TZDate will be invalid.
 */
export class TZDate {
    constructor(datetime?: Date | null, timezone?: string | null);
    constructor(
        year: number,
        month: number,
        day: number,
        hours?: number | null,
        minutes?: number | null,
        seconds?: number | null,
        milliseconds?: number | null,
        timezone?: string | null,
    );
    /**
     * Gets a new date by adding a duration to the current TZDate object.
     *
     * If the length of duration is negative, the new date/time will be
     * earlier than it used to.
     *
     * Note that calling this method does not alter the current object.
     *
     * @param duration TimeDuration to add.
     *
     * @returns The new TZDate by adding a duration.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    addDuration(duration: TimeDuration): TZDate;
    /**
     * Calculates the difference with another TZDate object.
     *
     * Calculates the difference in time between _this_ and the other object.
     * This comparison method takes timezones into consideration for the comparison.
     *
     * The TimeDuration that is returned is effectively _this_ - other.
     * The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
     * The result value will be:
     *
     * *   Negative, if other is in the future
     * *   0 if the two date/times are equal
     * *   Positive, if other is in the past
     *
     * @param other The other Date/Time to compare to.
     *
     * @returns The duration in milliseconds between the two date/time objects
     * (or in days for comparison between dates with no time component).
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    difference(other: TZDate): TimeDuration;
    /**
     * Checks whether the TZDate is earlier than another.
     *
     * This method takes the timezones into consideration.
     *
     * @param other The other Date/Time to compare to.
     *
     * @returns true, if the Date/Time is earlier than the one passed in argument.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    earlierThan(other: TZDate): boolean;
    /**
     * Checks whether the TZDate is equal to another.
     *
     * This method takes the timezones into consideration and will return true if
     * the two TZDate objects represent the same instant in different timezones.
     *
     * @param other Other Date/Time to compare to.
     *
     * @returns true if the 2 date/times are the same.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    equalsTo(other: TZDate): boolean;
    /**
     * Gets the day of the month (from 1-31).
     *
     * @returns The day of the month.
     */
    getDate(): number;
    /**
     * Gets the day of the week (from 0-6). 0 denotes Sunday, 1 denotes Monday and so on.
     *
     * @returns The day of the week.
     */
    getDay(): number;
    /**
     * Gets the year.
     *
     * Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
     * For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
     *
     * @returns The year.
     */
    getFullYear(): number;
    /**
     * Gets the hour (0-23).
     *
     * @returns The hour.
     */
    getHours(): number;
    /**
     * Gets the milliseconds (from 0-999).
     *
     * @returns The milliseconds.
     */
    getMilliseconds(): number;
    /**
     * Gets the minutes (from 0-59).
     *
     * @returns The minutes.
     */
    getMinutes(): number;
    /**
     * Gets the month (from 0-11).
     * Note: January is denoted as 0, February as 1, and so on till December, which is denoted as 11.
     *
     * @returns The month.
     */
    getMonth(): number;
    /**
     * Gets the date of the next daylight saving time transition for the timezone.
     *
     * @returns The date of the next daylight saving transition (after the instant identified by the TZDate).
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getNextDSTTransition(): TZDate | null;
    /**
     * Gets the date of the previous daylight saving time transition for the timezone.
     *
     * @returns The date of the previous daylight saving transition (before the instant identified by the TZDate).
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getPreviousDSTTransition(): TZDate | null;
    /**
     * Gets the seconds (from 0-59).
     *
     * @returns The seconds.
     */
    getSeconds(): number;
    /**
     * Gets the timezone identifier.
     *
     * Zero or more slashes separate different components, with the most general
     * descriptor first and the most specific one last. For example,
     * "Europe/Berlin", "America/Argentina/Buenos\_Aires".
     *
     * This attribute uniquely identifies the timezone.
     *
     * @returns The string timezone identifier. If TZDate is invalid, it will return "Invalid Date".
     */
    getTimezone(): string;
    /**
     * Determines the time zone abbreviation to be used at a particular date in the time zone.
     *
     * For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
     * summer months when daylight savings time is in effect.
     *
     * @note _deprecated_ 2.1 Deprecated since 2.1.
     *
     * @returns DOMString The abbreviation of the time zone (such as "EST")
     * If TZDate is invalid, it will return 'Invalid Date'.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getTimezoneAbbreviation(): string;
    /**
     * Gets the day of the month, according to universal time (from 1-31).
     *
     * @returns The day of the month, according to universal time.
     */
    getUTCDate(): number;
    /**
     * Gets the day of the week, according to universal time (from 0-6).
     *
     * @returns The day of the week, according to universal time.
     */
    getUTCDay(): number;
    /**
     * Gets the year, according to universal time.
     *
     * Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
     * For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
     *
     * @returns The year, according to universal time.
     */
    getUTCFullYear(): number;
    /**
     * Gets the hour, according to universal time (0-23).
     *
     * @returns The hour, according to universal time.
     */
    getUTCHours(): number;
    /**
     * Gets the milliseconds, according to universal time (from 0-999).
     *
     * @returns The milliseconds, according to universal time.
     */
    getUTCMilliseconds(): number;
    /**
     * Gets the minutes, according to universal time (from 0-59).
     *
     * @returns The minutes, according to universal time.
     */
    getUTCMinutes(): number;
    /**
     * Gets the month, according to universal time (from 0-11).
     * Note: January is denoted as 0, February as 1 and so on till December, which is denoted as 11.
     *
     * @returns The month, according to universal time.
     */
    getUTCMonth(): number;
    /**
     * Gets the seconds, according to universal time (from 0-59).
     *
     * @returns The seconds, according to universal time.
     */
    getUTCSeconds(): number;
    /**
     * Checks whether Daylight Saving Time(DST) is active for this TZDate.
     *
     * Indicates if daylight savings are in effect for the time zone and instant
     * identified by the TZDate object.
     *
     * @returns The flag indicating whether the daylight saving are in effect.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    isDST(): boolean;
    /**
     * Checks whether the TZDate is later than another.
     *
     * This method takes the timezones into consideration.
     *
     * @param other The other Date/Time to compare to.
     *
     * @returns true, if the Date/Time is later than the one passed in argument.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    laterThan(other: TZDate): boolean;
    /**
     * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
     *
     * Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
     * savings if it is in the timezone. For example, if time zone is GMT+8, it will return -32,400.
     *
     * @returns The offset from UTC in seconds.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    secondsFromUTC(): number;
    /**
     * Sets the day of the month (from 1-31).
     *
     * If the value passed as a parameter is greater than the last day of current month or smaller than 1, the TZDate will be automatically recalculated to reflect this.
     * For example, if TZDate's month is May and parameter is 32, it will be set to June 1.
     *
     * @param date Date to set.
     */
    setDate(date: number): void;
    /**
     * Sets the year.
     *
     * @param year Year to set.
     */
    setFullYear(year: number): void;
    /**
     * Sets the hour (0-23).
     *
     * If the value passed as a parameter is greater than 23 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setHours(24) results in setting hour to 00:00 and date to the next day.
     *
     * @param hours Hours to set.
     */
    setHours(hours: number): void;
    /**
     * Sets the milliseconds (from 0-999).
     *
     * If the value passed as a parameter is greater than 999 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setMilliseconds(1000) results in setting milliseconds to 0 and adding one second.
     *
     * @param ms Milliseconds to set.
     */
    setMilliseconds(ms: number): void;
    /**
     * Sets the minutes.
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setMinutes(60) results in setting minutes to 0 and adding one hour.
     *
     * @param minutes Minutes to set.
     */
    setMinutes(minutes: number): void;
    /**
     * Sets the month (from 0-11).
     *
     * If the value passed as a parameter is greater than 11 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setMonth(12) results in setting month to 0 and adding one year.
     *
     * @param month Month to set.
     */
    setMonth(month: number): void;
    /**
     * Sets the seconds (from 0-59).
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setSeconds(60) results in setting seconds to 0 and adding one minute.
     *
     * @param seconds Seconds to set.
     */
    setSeconds(seconds: number): void;
    /**
     * Sets the day of the month, according to universal time (from 1-31).
     *
     * If the value passed as a parameter is greater than the last day of current month or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCDate(32) when TZDate's month is May results in setting it to June 1.
     *
     * @param date Date to set.
     */
    setUTCDate(date: number): void;
    /**
     * Sets the year, according to universal time.
     *
     * @param year Year to set.
     */
    setUTCFullYear(year: number): void;
    /**
     * Sets the hour, according to universal time (0-23).
     *
     * If the value passed as a parameter is greater than 23 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCHours(24) results in setting hour to 0 and adding one day.
     *
     * @param hours Hours to set.
     */
    setUTCHours(hours: number): void;
    /**
     * Sets the milliseconds, according to universal time (from 0-999).
     *
     * If the value passed as a parameter is greater than 999 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCMilliseconds(1000) results in setting milliseconds to 0 and adding one second.
     *
     * @param ms Milliseconds to set.
     */
    setUTCMilliseconds(ms: number): void;
    /**
     * Sets the minutes, according to universal time (from 0-59).
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCMinutes(60) results in setting minutes to 0 and adding one hour.
     *
     * @param minutes Minutes to set.
     */
    setUTCMinutes(minutes: number): void;
    /**
     * Sets the month, according to universal time (from 0-11).
     *
     * If the value passed as a parameter is greater than 11 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCMonth(12) results in setting month to 0 and adding one year.
     *
     * @param month Month to set.
     */
    setUTCMonth(month: number): void;
    /**
     * Sets the seconds, according to universal time (from 0-59).
     *
     * If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
     * For example, calling setUTCSeconds(60) results in setting seconds to 0 and adding one minute.
     *
     * @param seconds Seconds to set.
     */
    setUTCSeconds(seconds: number): void;
    /**
     * Gets the date portion of a TZDate object as a string.
     *
     * @returns The date portion of the TZDate object as a string. If TZDate is invalid, it will return "Invalid Date".
     */
    toDateString(): string;
    /**
     * Gets a copy of the TZDate converted to the local time zone.
     *
     * @returns The new TZDate in local Timezone.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    toLocalTimezone(): TZDate;
    /**
     * Gets the date portion of a TZDate object as a string, using locale conventions.
     *
     * @returns The date portion of the TZDate object as a string, using locale conventions. If TZDate is invalid, it will return "Invalid Date".
     */
    toLocaleDateString(): string;
    /**
     * Converts a TZDate object to a string, using locale conventions.
     *
     * @returns The string representation of the TZDate object, using locale conventions. If TZDate is invalid, it will return "Invalid Date".
     */
    toLocaleString(): string;
    /**
     * Gets the time portion of a TZDate object as a string, using locale conventions.
     *
     * @returns The time portion of the TZDate object as a string, using locale conventions. If TZDate is invalid, it will return "Invalid Date".
     */
    toLocaleTimeString(): string;
    /**
     * Gets the time portion of a TZDate object as a string.
     *
     * @returns The time portion of the TZDate object as a string. If TZDate is invalid, it will return "Invalid Date".
     */
    toTimeString(): string;
    /**
     * Gets a copy of the TZDate converted to a given time zone.
     *
     * @param tzid Timezone identifier to set.
     *
     * @returns The new TZDate in given Timezone.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if the provided TZID
     * is not recognized as a valid timezone identifier.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    toTimezone(tzid: string): TZDate;
    /**
     * Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
     *
     * @returns The Date/Time in UTC.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    toUTC(): TZDate;
}
export interface TZDateConstructor {
    prototype: TZDate;
    new(datetime?: Date | null, timezone?: string | null): TZDate;
    new(
        year: number,
        month: number,
        day: number,
        hours?: number | null,
        minutes?: number | null,
        seconds?: number | null,
        milliseconds?: number | null,
        timezone?: string | null,
    ): TZDate;
}
/**
 * The TimeDuration interface that contains the length and its associated time unit.
 */
export class TimeDuration {
    constructor(length: number, unit?: TimeDurationUnit | null);
    /**
     * The duration length.
     *
     * The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
     * is determined by the duration unit attribute.
     */
    length: number;
    /**
     * The duration unit (milliseconds, seconds, minutes, hours, or days).
     *
     * The default value is "MSECS" (milliseconds unit).
     */
    unit: TimeDurationUnit;
    /**
     * Calculates the difference between two TimeDuration objects.
     *
     * Calculates the difference in time between _this_ and _other_.
     * The TimeDuration that is returned is effectively _first_ - _other_ (that is: positive if the first parameter is larger).
     *
     * The returned TimeDuration is the biggest possible unit without losing the precision.
     *
     * @param other Other TimeDuration object to compare to.
     *
     * @returns New TimeDuration object corresponding to the result of _this_ - _other_.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    difference(other: TimeDuration): TimeDuration;
    /**
     * Checks whether the TimeDuration is equal to another.
     *
     * This method takes the units into consideration and will return true
     * if the two TimeDuration objects represent the same duration in different units.
     *
     * @param other Other TimeDuration object to compare to.
     *
     * @returns true if the two TimeDuration object represent the same duration.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    equalsTo(other: TimeDuration): boolean;
    /**
     * Checks whether the TimeDuration is greater than another.
     *
     * This method takes the units into consideration when doing the comparison.
     *
     * @param other Other TimeDuration object to compare to.
     *
     * @returns true if the TimeDuration is greater than _other_.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    greaterThan(other: TimeDuration): boolean;
    /**
     * Checks whether the TimeDuration is lower than another.
     *
     * This method takes the units into consideration when doing the comparison.
     *
     * @param other Other TimeDuration object to compare to.
     *
     * @returns true if the TimeDuration is less than _other_.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    lessThan(other: TimeDuration): boolean;
}
export interface TimeDurationConstructor {
    prototype: TimeDuration;
    new(length: number, unit?: TimeDurationUnit | null): TimeDuration;
}
/**
 * The TimeUtil interface that provides access to the time API.
 *
 * This interface offers methods to manage date/time as well as timezones such as:
 *
 * *   Get the current date/time using getCurrentDateTime().
 * *   Get timezones using getLocalTimezone() and getAvailableTimezones().
 */
export interface TimeUtil {
    /**
     * Gets synchronously the identifiers of the timezones supported by the device.
     *
     * Zero or more slashes separate different components of a timezone identifier,
     * with the most general descriptor first and the most specific one last. For example,
     * "Europe/Berlin", "America/Argentina/Buenos\_Aires".
     *
     * @returns Array of time zone identifiers.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getAvailableTimezones(): string[];
    /**
     * Gets the current date/time.
     *
     * @returns The current TZDate object.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getCurrentDateTime(): TZDate;
    /**
     * Gets the date format according to the system's locale settings.
     *
     * These expressions may be used in the returned string:
     *
     * *   "d" = day number (1 to 31)
     * *   "D" = day name
     * *   "m" = month number (1 to 12)
     * *   "M" = month name
     * *   "y" = year
     *
     * Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
     *
     * @param shortformat The flag indicating whether the user is interested in the short.
     * date format (23/10/2011) instead of a long date format ("Monday, October 23 2011")
     * By default, this attribute is set to false.
     *
     * @returns The date format according to the system's locale settings.
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getDateFormat(shortformat?: boolean | null): string;
    /**
     * Gets the identifier of the local system timezone.
     *
     * @returns The local timezone.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getLocalTimezone(): string;
    /**
     * Gets the time format according to the system's locale settings.
     *
     * These expressions may be used in the returned string:
     *
     * *   "h" = hours (0 to 23 or 1 to 12 if AM/PM display)
     * *   "m" = minutes (0 to 59)
     * *   "s" = seconds (0 to 59)
     * *   "ap" = AM/PM display
     *
     * Examples of string formats include: "h:m:s ap", "h:m:s".
     *
     * @returns The time format according to the system's locale settings.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    getTimeFormat(): string;
    /**
     * Checks whether the given year is a leap year.
     *
     * @param year The year to check.
     *
     * @returns true, if the year is a leap year.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input
     * parameters contain an invalid value.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    isLeapYear(year: number): boolean;
    /**
     * Sets a listener to receive notification of changes to the time/date on a device.
     *
     * Listener set with _setTimezoneChangeListener()_ method is called when device time was set by the user.
     *
     * @since 2.3
     *
     * @param changeCallback Callback method to be invoked when device time was set
     * It is not invoked when time passes naturally.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    setDateTimeChangeListener(changeCallback: SuccessCallback): void;
    /**
     * Sets a listener to receive notification of changes to the time zone on a device.
     *
     * Listener set with _setTimezoneChangeListener()_ method is called when device time zone has changed.
     *
     * @since 2.3
     *
     * @param changeCallback Callback method that is invoked when the time zone has changed.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter
     * is not compatible with the expected type for that parameter.
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    setTimezoneChangeListener(changeCallback: SuccessCallback): void;
    /**
     * Unsets the listener to stop receiving notification of changes to the time/date on a device.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @since 2.3
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    unsetDateTimeChangeListener(): void;
    /**
     * Unsets the listener to stop receiving notification of changes to the time zone on a device.
     *
     * Calling this function has no effect if listener is not set.
     *
     * @since 2.3
     *
     * @throws WebAPIException with error type UnknownError, if the call failed due to an unknown error.
     */
    unsetTimezoneChangeListener(): void;
}
/**
 * The root of the Tizen Web Device API.
 *
 * This is the Tizen root interface.
 * It is a property of the ECMAScript global object, as specified by the _TizenObject_ interface.
 */
export interface Tizen {
    readonly AlarmAbsolute: AlarmAbsoluteConstructor;
    readonly AlarmRelative: AlarmRelativeConstructor;
    readonly ApplicationControl: ApplicationControlConstructor;
    readonly ApplicationControlData: ApplicationControlDataConstructor;
    readonly AttributeFilter: AttributeFilterConstructor;
    readonly AttributeRangeFilter: AttributeRangeFilterConstructor;
    readonly Bundle: BundleConstructor;
    readonly CompositeFilter: CompositeFilterConstructor;
    readonly DownloadRequest: DownloadRequestConstructor;
    readonly ExifInformation: ExifInformationConstructor;
    readonly IotconOption: IotconOptionConstructor;
    readonly Query: Query;
    readonly Representation: RepresentationConstructor;
    readonly Response: ResponseConstructor;
    readonly SimpleCoordinates: SimpleCoordinatesConstructor;
    readonly SortMode: SortModeConstructor;
    readonly TZDate: TZDateConstructor;
    readonly TimeDuration: TimeDurationConstructor;
    readonly VoiceControlCommand: VoiceControlCommandConstructor;
    /* tslint:disable:no-irregular-whitespace */
    /**
     * The Account API provides functionality for using existing configured
     * online accounts and providers, and for creating accounts of known types.
     *
     * The basic concepts are:
     *
     * *   **Provider** is an online service provider entity, such as
     * Google, Vodafone or Facebook. A service provider is identified by its applicationId.
     * Account provider will be registered while the application is installed.
     * The information will be used in the "Add account" screen in Settings.
     * *   **Account** collects all the data (user name, credential, settings)
     * needed for connecting to services. An account is always bound to a single provider,
     * and has a list of service instances bound to the account. The services can be
     * individually enabled and disabled on the given account. For instance,
     * account1@gmail.com can identify a Google account, giving access to services such as
     * gmail, gtalk, Picasa, and Youtube with each service having a separate service
     * instance bound to the account.
     *
     * To use _add(), remove(), and update()_ methods of AccountManager can be invoked only
     * by account provider application. A web application is an account provider when its _config.xml_
     * contains [Account provider section](/application/tizen-studio/web-tools/config-editor#mw_account). For example:
     *
     * ```xml
     * <tizen:account multiple-account-support="true">
     *    <tizen:icon section="Account">icon.png</tizen:icon>
     *    <tizen:icon section="AccountSmall">icon.png</tizen:icon>
     *    <tizen:display-name xml:lang="en-gb">Test</tizen:display-name>
     *    <tizen:capability>http://tizen.org/account/capability/contact</tizen:capability>
     * </tizen:account>
     * ```
     * For more information about how to use Account API, see [Account Guide](/application/web/guides/personal/account).
     *
     * @since 5.0
     *
     * @defApiFeature http://tizen.org/feature/account
     * To guarantee the running of the application on a device with Account feature.
     */
    /* tslint:enable:no-irregular-whitespace */
    readonly account: AccountManager;
    /**
     * The Alarm API provides functionality for scheduling the system alarm.
     * It allows you to run other applications and have them perform operations at a specific time.
     * You can schedule an alarm to go off once or to repeat at specific intervals.
     *
     * Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
     *
     * Once an alarm goes off, it will be removed from the alarm storage automatically.
     * _AlarmManager_ provides methods to manage alarms such as adding and removing.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information on the Alarm features, see [Alarm Guide](/application/web/guides/alarm/alarms).
     *
     * @since 1.0
     */
    readonly alarm: AlarmManager;
    /**
     * This API provides a way to launch other applications and access
     * application management.
     *
     * The _ApplicationManager_ interface also provides methods to launch other applications
     * explicitly and implicitly through the _ApplicationControl_ interface.
     * The _ApplicationControl_ interface consists of an operation, URI, and MIME type
     * and also describes an action to be performed by other
     * applications and can carry the result from the subsequent application.
     * The _ApplicationManager_ interface also provides methods to handle the application
     * lifecycle, to access the installed applications on the device, and to let
     * an application be notified of a change in the application list.
     *
     * The _Application_ interface defines the current application's information and
     * the basic operations for the current application such as exit or hide.
     *
     * Since Tizen 2.4 the _Application_ interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
     *
     * For more information on the Application features, see [Application Guide](/application/web/guides/applications/overview), [Application Group Guide](/application/web/guides/app-management/app-group) or [Application Control Guide](/application/web/guides/app-management/app-controls).
     *
     * @since 1.0
     *
     * @defApiFeature http://tizen.org/feature/battery
     * To guarantee the running of the application on a device which has battery.
     */
    readonly application: ApplicationManager;
    /**
     * The Archive API provides functions to create and manage archive files.
     * You can extract files, add a file to an archive file, and so on.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information about how to use Archive API, see [File Archiving Guide](/application/web/guides/data/file-archiving).
     *
     * @since 2.3
     */
    readonly archive: ArchiveManager;
    /**
     * The Content API provides functionality to discover content such as images, videos, music, or others.
     *
     * It is possible to search for specific content using filters.
     * The API also supports setting the attributes of specific content.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information on the Content features, see [Stored Content Management](/application/web/guides/data/stored-content).
     *
     * Playlist functionality has been added in Tizen 2.3.
     *
     * @since 2.0
     */
    readonly content: ContentManager;
    /**
     * This specification defines a Data Control API for applications.
     *
     * The Data Control functionality provides a way to access specific data that is exported by other applications.
     *
     * Please read the [Data Control guide](/application/web/guides/app-management/data-control) to know how to share own application data with other applications.
     *
     * @since 2.4
     */
    readonly datacontrol: DataControlManager;
    /**
     * This API provides methods to asynchronously download the contents of a URL to a storage.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information on the Download features, see [Download Guide](/application/web/guides/connectivity/download).
     *
     * @since 2.0
     *
     * @defApiFeature http://tizen.org/feature/network.wifi
     * DownloadNetworkType WIFI can be available on a Wi-Fi enabled device. To guarantee that the download application runs on a device with the Wi-Fi feature, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/network.telephony
     * DownloadNetworkType _CELLULAR_ can be available on a cellular-enabled device. To guarantee that the download application runs on a device with the cellular feature, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/network.ethernet
     * DownloadNetworkType _ALL_ can be available on a ethernet-enabled device. To guarantee that the download application runs on a device with the ethernet network feature.
     */
    readonly download: DownloadManager;
    /**
     * The Exif API provides interfaces and methods for manipulating [Exif](http://en.wikipedia.org/wiki/Exchangeable_image_file_format) data from a JPEG file.
     * The _ExifManager_ object provides methods to retrieve the _ExifInformation_ object from a JPEG file
     * and save the Exif data from the _ExifInformation_ object in the JPEG file.
     * The _ExifInformation_ object provides functionality to get and set the Exif attributes corresponding to the Exif tag.
     * Changing the value of the attribute in the _ExifInformation_ object stores the Exif data in the _ExifInformation_ object. It does not change data in the JPEG file.
     * For applying the modified Exif data to the JPEG file,
     * the saveExifInfo() method of the _ExifManager_ object should be called with the _ExifInformation_ object that has the modified Exif data.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information about how to use Exif API, see [Exif Guide](/application/web/guides/multimedia/jpeg-exif).
     *
     * @since 2.3
     */
    readonly exif: ExifManager;
    /**
     * The Filesystem API provides access to a device's filesystem.
     *
     * The filesystem is represented as an abstract collection of disjointed filesystem virtual
     * root locations, each corresponding to a specific location in the device
     * filesystem. The filesystem API exposes the hierarchies below these root
     * locations as autonomous virtual filesystems.
     *
     * Each virtual root has a string name. Each file or directory within the virtual
     * filesystem is addressed using a fully-qualified path of the form:
     * _root name/path_ where _rootname_ is
     * the name of the virtual root and _path_ is the path to the file or
     * directory relative to that root.
     *
     * The following virtual roots must be supported:
     *
     * *   images - the location for images
     * *   videos - the location for videos
     * *   music - the location for sounds
     * *   documents - the location for documents
     * *   downloads - the location for downloaded items
     * *   camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
     * *   wgt-package - the location for widget package which is read-only
     * *   wgt-private - the location for a widget's private storage
     * *   wgt-private-tmp - the location for a widget's private volatile storage
     * *   removable\__..._ - the location for external storages. The _"..."_ suffix is a unique identifier of an external storage.
     * To obtain list of available external storages use [listStorages](#FileSystemManager::listStorages).
     *
     * The file URI path is also supported. To access paths out of virtual root, for example "file:///tmp" can be used as location parameter.
     *
     * The implementation must support the use of the following characters in file names:
     *
     * *   Letters (a-z, A-Z)
     * *   Digits (0-9)
     * *   Blank space
     * *   Underscore ("\_")
     * *   Hyphen ("-")
     * *   Period (".")
     *
     * The implementation may support additional characters in file names, depending on platform support.
     *
     * The implementation may forbid the use of additional characters in file names, depending on the platform.
     * The use of the path (component) separator "/" and null character "\\\\x00" should not be allowed in file names.
     *
     * Some other file name and path characteristics are platform-dependent,
     * for example, maximum path length, file name length, case sensitivity, additional
     * character support, etc. Therefore, it is recommended to avoid any dependency
     * on aspects that cannot be supported across multiple platforms.
     *
     * The encoding used for the file path should be UTF-16 (default for ECMAScript String).
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * **Remark:** Methods, which names end with NonBlocking are asynchronous and are executed in background in the order in which they were called. Corresponding methods without NonBlocking at the end are synchronous and will block further instructions execution, until they are finished.
     *
     * For more information on the Filesystem features, see [File System Guide](/application/web/guides/data/file-system).
     *
     * @since 1.0
     */
    readonly filesystem: FileSystemManager;
    /**
     * The Iotcon API provides functions for IoT connectivity.
     *
     * It allows to register, discover and access to resources via RESTful API.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information on the IoT features, see [IoT Guide](/application/web/guides/connectivity/iotcon).
     *
     * @since 3.0
     *
     * @defApiFeature http://tizen.org/feature/iot.ocf
     *
     * To guarantee this application will run on a device with a Iotcon, add the below feature declaration to the config file
     */
    readonly iotcon: Iotcon;
    /**
     * The Key Manager API provides a secure repository for storing, retrieving and removing the sensitive data of users and their applications. Users can protect the data with passwords.
     *
     * For more information on the Key Manager features, see [Key Manager Guide](/application/web/guides/security/secure-key).
     *
     * @since 2.4
     */
    readonly keymanager: KeyManager;
    /**
     * The Media Controller API provides functions for communication between the media
     * controller server and the media controller client.
     *
     * It helps to transfer the information like playback info, shuffle/repeat mode
     * and metadata from media controller server to client. Allows to control server state
     * by sending commands from client.
     *
     * For more information on the Media Controller features, see [Media Controller Guide](/application/web/guides/multimedia/media-controller).
     *
     * @since 5.0
     */
    readonly mediacontroller: MediaControllerManager;
    /**
     * The Message Port API provides the functionality for communicating with other applications.
     *
     * For more information on the Message Port features, see [Message Port Guide](/application/web/guides/app-management/message-port).
     *
     * @since 2.1
     */
    readonly messageport: MessagePortManager;
    /**
     * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.
     * It also provides a listener method so that an application can be notified when there is a change on the installed packages.
     *
     * **Remark:** In order to access files, a proper privilege has to be defined additionally:
     *
     * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
     * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
     * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
     *
     * For more information on the Package features, see [Package Guide](/application/web/guides/app-management/packages).
     * @since 2.1
     */
    readonly package: PackageManager;
    /**
     * The Push API provides functionality for receiving push notifications
     * from the Tizen push server.
     * The push service is a client daemon that maintains a permanent connection
     * between your device and the Tizen push server. Connection with push service is used to deliver push notifications
     * to the application, and process the registration and deregistration requests.
     *
     * To receive push notifications, follow the steps below:
     *
     * *   Connecting to the push service
     * *   Registering your application, if the application has not been registered yet
     * *   Getting notification data
     *
     * For more information on the Push features, see [Push Guide](/application/web/guides/messaging/push).
     *
     * To use Push features the application needs the permission to access the Tizen Push servers.
     *
     * **Service Limitation:**
     *
     * *   Size of a push message is limited: _alertMessage_ up to 127 bytes, and _appData_ (payload data) less than 1 KB.
     * *   Push service does not guarantee delivery and order of push messages.
     *
     * @since 3.0
     * @defApiFeature http://tizen.org/feature/network.push
     * To guarantee that the push application runs on a device with the push feature.
     */
    readonly push: PushManager;
    /**
     * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
     *
     * This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
     *
     * Web applications can use this API to access the following system properties:
     *
     * *   ADS (**Since**: 3.0)
     * *   BATTERY
     * *   BUILD
     * *   CAMERA\_FLASH (**Since**: 2.4)
     * *   CELLULAR\_NETWORK
     * *   CPU
     * *   DEVICE\_ORIENTATION
     * *   DISPLAY
     * *   ETHERNET\_NETWORK (**Since**: 2.4)
     * *   LOCALE (**Since**: 2.1)
     * *   MEMORY (**Since**: 2.3)
     * *   NET\_PROXY\_NETWORK (**Since**: 3.0)
     * *   NETWORK
     * *   PERIPHERAL (**Since**: 2.1)
     * *   SERVICE\_COUNTRY (**Since**: 5.5)
     * *   SIM
     * *   STORAGE
     * *   VIDEOSOURCE (**Since**: 2.3)
     * *   WIFI\_NETWORK
     *
     * Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, CELLULAR\_NETWORK and SIM are not available.
     * To check the available [SystemInfoPropertyId](#SystemInfoPropertyId), [getCapability()](#SystemInfo::getCapability) method can be used.
     *
     * *   BATTERY - tizen.systeminfo.getCapability(_"http://tizen.org/feature/battery"_)
     * *   CAMERA\_FLASH - tizen.systeminfo.getCapability(_"http://tizen.org/feature/camera.back.flash"_)
     * *   CELLULAR\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.telephony"_)
     * *   DISPLAY - tizen.systeminfo.getCapability(_"http://tizen.org/feature/screen"_)
     * *   ETHERNET\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.ethernet"_)
     * *   NET\_PROXY\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.net\_proxy"_)
     * *   SIM - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.telephony"_)
     * *   WIFI\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.wifi"_)
     *
     * For more information on the System Information features, see [System Information Guide](/application/web/guides/device/system-information).
     * @since 1.0
     *
     * @defApiFeature http://tizen.org/feature/battery
     * To guarantee the running of the application (e.g. track the battery usage) on a device which has a battery, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/camera.back.flash
     * To guarantee the running of the application on a device which has camera back flash and control it, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/network.ethernet
     * To guarantee the running of the application on a device which supports Ethernet network feature, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/network.net\_proxy
     * To guarantee the running of the application on a device which supports network proxy for internet connection, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/network.telephony
     * To guarantee the running of the application on a device which supports telephony feature, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/network.wifi
     * To guarantee the running of the application on a device which supports Wi-Fi.
     */
    readonly systeminfo: SystemInfo;
    /**
     * The Time API provides information regarding date/time and time zones.
     *
     * @since 1.0
     *
     * The JavaScript Date object does not have full timezone support.
     * Date objects allow only simple representations to denote a particular location's
     * offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
     * offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
     * that a location is 5 hours and 30 minutes ahead of UTC +00:00.
     * The issue with this method is not getting the correct
     * local time for a given date. The existing methods are sufficient for this purpose.
     * The issue is correctly converting to and from local time and UTC for all points in
     * time - in any of the past, present, and future - based on an initial time provided.
     * This is important for defining relative dates, where a time in a given location may
     * observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
     * or any other changes that may occur to a location's time zone over time.
     * Without the communication of the explicit time zone rules governing a given date and
     * time, the ability to effectively calculate the offset of the local time to UTC or to
     * any other time zone at any point in the past or future is lost.
     *
     * This API can be used to get TZDate objects with full time zone support, convert them
     * between timezones, retrieve available timezones.
     *
     * For more information on the Time features, see [Time Guide](/application/web/guides/device/time).
     */
    readonly time: TimeUtil;
    /**
     * This API provides the audio control features (such as volume and mute) on the TV associated device.
     * There will be a _tizen.tvaudiocontrol_ object that allows access to the functionality of the TV Audio Control API.
     *
     * @since 2.3
     *
     * @defApiFeature http://tizen.org/feature/tv.audio
     * To guarantee the running of this application on a device with a TV audio control support.
     */
    readonly tvaudiocontrol: AudioControlManager;
    /**
     * This API provides interfaces for managing stereoscopic 3D effects
     * for television signals.
     *
     * Modern TVs and projectors can display two images, a left image and a right image,
     * which are displayed to the left and right eyes respectively. This technique creates
     * an illusion of depth, which is perceived by users as a 3D image.
     *
     * For more information about stereoscopy, see this
     * [Wikipedia article](http://en.wikipedia.org/wiki/Stereoscopy).
     *
     * There are several formats of input images supported by the stereoscopy
     * plugin:
     *
     * *   Side-by-side: Left and right images are merged into one
     * picture. The left image is at the left side and the right image is at the right
     * side. Both images are scaled to fit in the original
     * image ratio.
     * *   Top-bottom: Left and right images are merged into one
     * picture. The left image is at the top and the right image is at the bottom.
     * Both images are scaled to fit in the original image ratio.
     * *   Line-by-line: Left and right images are interlaced by row.
     * The first row belongs to the left image and the second row
     * belongs to the right image, and so on.
     * *   Vertical-strip: Left and right images are interlaced by column.
     * The first column belongs to the left image and the second column
     * belongs to the right image, and so on.
     * *   Frame-sequence: Left and right images are interlaced by frames.
     *
     * Advanced devices are able to computationally generate depth
     * data by processing non-stereoscopic images. Depth data is used
     * to render left and right stereoscopic images from a source image which lacks
     * this information. The quality of such stereoscopic images depends
     * on the computational power used for processing, the algorithms used and the properties
     * of the source data. For more information see this
     * [](http://en.wikipedia.org/wiki/2D_to_3D_conversion)
     * Wikipedia article.
     *
     * There will be a _tizen.tvdisplaycontrol_ object that allows accessing the
     * functionality of the display control API.
     *
     * @since 2.3
     *
     * @defApiFeature http://tizen.org/feature/tv.display
     * To guarantee the running of this application on a device with a TV display control support.
     */
    readonly tvdisplaycontrol: DisplayControlManager;
    /**
     * The TVInfo API provides functions to get settings values that are provided by the Tizen TV.
     *
     * @since 2.4
     *
     * @defApiFeature http://tizen.org/feature/tv.information
     * To guarantee the running of this application on a device with a caption and so on.
     */
    readonly tvinfo: TVInfoManager;
    /**
     * The TV Input Device API provides functions to subscribe key events of the input device.
     *
     * The following remote control keys are mandatory input device keys. They are available to an application on any Tizen TV.
     *
     * *   ArrowLeft, ArrowUp, ArrowRight, ArrowDown
     * *   Enter
     * *   Back
     *
     * The Tizen TV may provide additional keys depending on a particular input device.
     * An application can handle device dependent key events after registration.
     *
     * @since 2.3
     *
     * @defApiFeature http://tizen.org/feature/tv.inputdevice
     * To guarantee the running of this application on a device with a TV input device support.
     */
    readonly tvinputdevice: TVInputDeviceManager;
    /**
     * This API provides a way to embed a video source in a Tizen Web Application running on a device associated with the TV.
     * It allows an available video source to be selected and shown on or hidden from the display in a Tizen Web Application.
     * There will be a _tizen.tvwindow_ object that allows access to the functionality of the TV Window API.
     * To show a TV signal, execute the
     * _show_ function.
     * A TV source is controlled by the user or
     * by you with the Tizen Web Device APIs. You do not have to implement any routines if you
     * do not want to interact with the TV image.
     *
     * @since 2.3
     *
     * @defApiFeature http://tizen.org/feature/tv.pip
     * To guarantee the running of this application on a device with a TV picture-in-picture support.
     */
    readonly tvwindow: TVWindowManager;
    /**
     * The Voice Control API provides interfaces and methods for recognizing voice command.
     *
     * Voice Control API offers functionality to recognize the voice and to send the result as predefined command.
     *
     * @since 4.0
     *
     * @defApiFeature http://tizen.org/feature/speech.control
     * To guarantee that the voice control application runs on a device with speech control feature, declare the following feature requirements in the config file:
     * @defApiFeature http://tizen.org/feature/microphone
     * To guarantee that the voice control application runs on a device with microphone feature.
     */
    readonly voicecontrol: VoiceControlClientManager;
    /**
     * This Web Setting API defines a set of APIs that manages the setting states of the Web view in your Web application.
     *
     * A Tizen Web application includes a web view and the properties below of the web view can be managed via the Web Setting API:
     *
     * *   Delete all the cookies saved for the web view in the Web application.
     * *   Set a custom user agent string of the web view in the Web application.
     *
     * Note that all the settings using the Web Setting API is bound to your application; thus, no other applications are affected via the Web Setting API calls within your application.
     *
     * For more information on the Web Setting features, see [Web Setting Guide](/application/web/guides/device/web-view).
     *
     * @since 2.2
     */
    readonly websetting: WebSettingManager;
}
/**
 * The VideoContent interface extends a basic _Content_ object with video-specific attributes.
 */
export interface VideoContent extends Content {
    /**
     * The album name to which the video belongs.
     */
    readonly album: string | null;
    /**
     * The list of artists who created the video.
     */
    readonly artists: ReadonlyArray<string> | null;
    /**
     * The video duration in milliseconds.
     */
    readonly duration: number;
    /**
     * The geographical location where the video has been made.
     *
     * The attribute is marked as read-only since Tizen 5.5. Modifying it or its attributes has no effect.
     */
    readonly geolocation: SimpleCoordinates | null;
    /**
     * The height of the video in pixels.
     */
    readonly height: number;
    /**
     * The width of a video in pixels.
     */
    readonly width: number;
}
/**
 * The VideoResolution interface contains information about current video resolution.
 *
 * @since 2.4
 */
export interface VideoResolution {
    /**
     * Video aspect ratio.
     */
    readonly aspectRatio: AspectRatio;
    /**
     * Vertical frequency rate in Hz.
     */
    readonly frequency: number;
    /**
     * Video height in pixels.
     */
    readonly height: number;
    /**
     * Video width in pixels.
     */
    readonly width: number;
}
/**
 * Voice Control Client
 */
export interface VoiceControlClient {
    /**
     * Registers a callback function to be called when current language is changed.
     *
     * @param listener Callback function to register.
     *
     * @returns Identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    addLanguageChangeListener(listener: VoiceControlLanguageChangeCallback): number;
    /**
     * Registers a listener for getting recognition result.
     *
     * @param listener Callback function to register.
     *
     * @returns Identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    addResultListener(listener: VoiceControlResultCallback): number;
    /**
     * Gets current language.
     *
     * A language is specified as an ISO 3166 alpha-2 two letter country-code followed by ISO 639-1 for the two-letter language code.
     * For example, "ko\_KR" for Korean, "en\_US" for American English.
     *
     * @returns Currently set language.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    getCurrentLanguage(): string;
    /**
     * Releases all resources.
     *
     * Releases listeners and disconnects voice control service.
     * You should call this method when you do not want to use voice control client instance any more.
     * It is necessary to create new voice control client instance, if you want to use more after release.
     *
     * @remark If you call this method, all other VoiceControlClient objects are also released.
     *
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    release(): void;
    /**
     * Unregisters the callback function.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param id Identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    removeLanguageChangeListener(id: number): void;
    /**
     * Unregisters the listener.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param id Identifier used to clear the watch subscription.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    removeResultListener(id: number): void;
    /**
     * Sets command list.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/recorder
     *
     * @param list Command list handle.
     * @param type Type of registered commands. The default value is "FOREGROUND"
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type InvalidValuesError, if any of the input
     * parameters contain an invalid value.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    setCommandList(list: VoiceControlCommand[], type?: VoiceControlCommandType | null): void;
    /**
     * Unsets command list.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/recorder
     *
     * @param type Type of commands that should be unset. The default value is "FOREGROUND"
     *
     * @throws WebAPIException with error type TypeMismatchError, if the input parameter is not
     * compatible with the expected type.
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    unsetCommandList(type?: VoiceControlCommandType | null): void;
}
/**
 * Voice Control Client Manager
 */
export interface VoiceControlClientManager {
    /**
     * Requests voice control Client instance.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/recorder
     *
     * @remark This method always returns the static voice control client object. That is, if you call a method
     * using one of voice control client objects, it affects other objects.
     *
     * @returns The object to manage voice control.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @throws WebAPIException with error type AbortError, if the operation cannot be finished properly.
     */
    getVoiceControlClient(): VoiceControlClient;
}
/**
 * The VoiceControlCommand defines interface used to create command you want to be recognized.
 */
export class VoiceControlCommand {
    constructor(command: string, type?: VoiceControlCommandType | null);
    /**
     * The command text
     *
     * The command should be set as text you want to be recognized.
     */
    command: string;
    /**
     * The type of the command processing
     *
     * The default value is "FOREGROUND"
     */
    type: VoiceControlCommandType;
}
export interface VoiceControlCommandConstructor {
    prototype: VoiceControlCommand;
    new(command: string, type?: VoiceControlCommandType | null): VoiceControlCommand;
}
/**
 * Generic error interface.
 *
 * This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
 *
 * @since 2.0
 */
export interface WebAPIError {
    /**
     * 16-bit error code.
     *
     * Possible values are defined in [DOMException](http://www.w3.org/TR/dom/#domexception).
     */
    readonly code: number;
    /**
     * An error message that describes the details of the error encountered.
     *
     * This attribute is not intended to be used directly in the user interfaces
     * as it is mainly intended to be useful for developers rather than end users.
     */
    readonly message: string;
    /**
     * An error type. The name attribute must return the value it had been initialized with.
     *
     * This attribute can have one of the following values:
     *
     * *   UnknownError - An unknown error has occurred.
     * *   InvalidValuesError - The content of an object does not contain valid values.
     * *   IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
     * *   ServiceNotAvailableError - The requested service is not available.
     * *   VerificationError - An error occurred in authentication and so the requested method cannot be completed.
     *
     * For other possible values of this attribute, see the values defined in [DOM error names](http://www.w3.org/TR/dom/#error-names-0)
     */
    readonly name: string;
}
/**
 * Generic exception interface.
 *
 * This interface will be used by the APIs to throw errors synchronously.
 *
 * The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
 *
 * @since 2.0
 */
export class WebAPIException {
    constructor(code: number | null, message: string | null, name: string | null);
    /**
     * 16-bit error code.
     *
     * For the possible values of this attribute, see [DOMException](http://www.w3.org/TR/dom/#domexception).
     */
    readonly code: number;
    /**
     * An error message that describes the details of an encountered error.
     *
     * This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
     */
    readonly message: string;
    /**
     * An error type. The name attribute must return the value it had been initialized with.
     *
     * This attribute can have one of the following values:
     *
     * *   UnknownError - An unknown error has occurred.
     * *   InvalidValuesError - The content of an object does not contain valid values.
     * *   IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
     * *   ServiceNotAvailableError - The requested service is not available.
     * *   VerificationError - An error occurred in authentication and so the requested method cannot be completed.
     *
     * For other possible values of this attribute, see the values defined in [DOM error names](http://www.w3.org/TR/dom/#error-names-0)
     */
    readonly name: string;
    /**
     * The operation has been aborted.
     */
    readonly ABORT_ERR: 20;
    /**
     * The object cannot be cloned.
     */
    readonly DATA_CLONE_ERR: 25;
    /**
     * The specified range of text is too large.
     */
    readonly DOMSTRING_SIZE_ERR: 2;
    /**
     * The operation would yield an incorrect node tree.
     */
    readonly HIERARCHY_REQUEST_ERR: 3;
    /**
     * The index is not in the allowed range.
     */
    readonly INDEX_SIZE_ERR: 1;
    /**
     * The specified attribute is already in use elsewhere.
     */
    readonly INUSE_ATTRIBUTE_ERR: 10;
    /**
     * The object does not support the operation or argument.
     */
    readonly INVALID_ACCESS_ERR: 15;
    /**
     * The string contains invalid characters.
     */
    readonly INVALID_CHARACTER_ERR: 5;
    /**
     * The object cannot be modified in this way.
     */
    readonly INVALID_MODIFICATION_ERR: 13;
    /**
     * The supplied node is incorrect or has an incorrect ancestor for this operation.
     */
    readonly INVALID_NODE_TYPE_ERR: 24;
    /**
     * The object is in an invalid state.
     */
    readonly INVALID_STATE_ERR: 11;
    /**
     * The operation is not allowed by Namespaces in XML.
     */
    readonly NAMESPACE_ERR: 14;
    /**
     * A network error occurred.
     */
    readonly NETWORK_ERR: 19;
    /**
     * The object cannot be found here.
     */
    readonly NOT_FOUND_ERR: 8;
    /**
     * The operation is not supported.
     */
    readonly NOT_SUPPORTED_ERR: 9;
    /**
     * Data is specified for a node that does not support data.
     */
    readonly NO_DATA_ALLOWED_ERR: 6;
    /**
     * The object cannot be modified.
     */
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    /**
     * The quota has been exceeded.
     */
    readonly QUOTA_EXCEEDED_ERR: 22;
    /**
     * The operation is insecure.
     */
    readonly SECURITY_ERR: 18;
    /**
     * The string did not match the expected pattern.
     */
    readonly SYNTAX_ERR: 12;
    /**
     * The operation has timed out.
     */
    readonly TIMEOUT_ERR: 23;
    /**
     * The type of the object does not match the expected type.
     */
    readonly TYPE_MISMATCH_ERR: 17;
    /**
     * The given URL does not match another URL.
     */
    readonly URL_MISMATCH_ERR: 21;
    /**
     * The operation would cause the node to fail validation.
     */
    readonly VALIDATION_ERR: 16;
    /**
     * The object is in the wrong document.
     */
    readonly WRONG_DOCUMENT_ERR: 4;
}
export interface WebAPIExceptionConstructor {
    prototype: WebAPIException;
    new(code: number | null, message: string | null, name: string | null): WebAPIException;
    /**
     * The operation has been aborted.
     */
    readonly ABORT_ERR: 20;
    /**
     * The object cannot be cloned.
     */
    readonly DATA_CLONE_ERR: 25;
    /**
     * The specified range of text is too large.
     */
    readonly DOMSTRING_SIZE_ERR: 2;
    /**
     * The operation would yield an incorrect node tree.
     */
    readonly HIERARCHY_REQUEST_ERR: 3;
    /**
     * The index is not in the allowed range.
     */
    readonly INDEX_SIZE_ERR: 1;
    /**
     * The specified attribute is already in use elsewhere.
     */
    readonly INUSE_ATTRIBUTE_ERR: 10;
    /**
     * The object does not support the operation or argument.
     */
    readonly INVALID_ACCESS_ERR: 15;
    /**
     * The string contains invalid characters.
     */
    readonly INVALID_CHARACTER_ERR: 5;
    /**
     * The object cannot be modified in this way.
     */
    readonly INVALID_MODIFICATION_ERR: 13;
    /**
     * The supplied node is incorrect or has an incorrect ancestor for this operation.
     */
    readonly INVALID_NODE_TYPE_ERR: 24;
    /**
     * The object is in an invalid state.
     */
    readonly INVALID_STATE_ERR: 11;
    /**
     * The operation is not allowed by Namespaces in XML.
     */
    readonly NAMESPACE_ERR: 14;
    /**
     * A network error occurred.
     */
    readonly NETWORK_ERR: 19;
    /**
     * The object cannot be found here.
     */
    readonly NOT_FOUND_ERR: 8;
    /**
     * The operation is not supported.
     */
    readonly NOT_SUPPORTED_ERR: 9;
    /**
     * Data is specified for a node that does not support data.
     */
    readonly NO_DATA_ALLOWED_ERR: 6;
    /**
     * The object cannot be modified.
     */
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    /**
     * The quota has been exceeded.
     */
    readonly QUOTA_EXCEEDED_ERR: 22;
    /**
     * The operation is insecure.
     */
    readonly SECURITY_ERR: 18;
    /**
     * The string did not match the expected pattern.
     */
    readonly SYNTAX_ERR: 12;
    /**
     * The operation has timed out.
     */
    readonly TIMEOUT_ERR: 23;
    /**
     * The type of the object does not match the expected type.
     */
    readonly TYPE_MISMATCH_ERR: 17;
    /**
     * The given URL does not match another URL.
     */
    readonly URL_MISMATCH_ERR: 21;
    /**
     * The operation would cause the node to fail validation.
     */
    readonly VALIDATION_ERR: 16;
    /**
     * The object is in the wrong document.
     */
    readonly WRONG_DOCUMENT_ERR: 4;
}
/**
 * This is the top-level interface for the Web Setting API that managed the settings of the Web view in your Web application.
 */
export interface WebSettingManager {
    /**
     * Removes all the cookies saved for the Web view in your Web application.
     *
     * The Web view in your Web application can store cookies like a browser. This method allows the user to remove all the cookies saved for the Web application.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   UnknownError - If any error occurs while deleting the cookies.
     *
     * @param successCallback To be invoked if the requested delete operation succeeds.
     * @param errorCallback To be invoked if the requested delete operation fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     *
     * @warning http://tizen.org/privilege/websetting(public level privilege) **MUST NOT** be declared to use this API since 2.4.
     */
    removeAllCookies(successCallback?: SuccessCallback | null, errorCallback?: ErrorCallback | null): void;
    /**
     * Sets the custom user agent string for your Web application.
     *
     * This method allows the user to set the user agent string of the Web view in the Web application. By default, the Web view in your application
     * has the same user agent string as the Tizen browser on the device.
     *
     * The _ErrorCallback_ is launched with these error types:
     *
     * *   UnknownError - If any error occurs while setting the user agent string.
     * *   InvalidValuesError - If any of the input parameters contain an invalid value.
     *
     * @param userAgent User agent to set for the Web view in your Web application.
     * @param successCallback To be invoked if the requested setting operation succeeds.
     * @param errorCallback To be invoked if the requested setting operation fails.
     *
     * @throws WebAPIException with error type TypeMismatchError, if any input parameter is not compatible with the expected type for that parameter.
     */
    setUserAgentString(
        userAgent: string,
        successCallback?: SuccessCallback | null,
        errorCallback?: ErrorCallback | null,
    ): void;
}
declare global {
    /**
     * Defines the tizen interface as a part of the window global object.
     *
     * The _Tizen_ interface is always available within the _Window_ object in the ECMAScript hierarchy.
     */
    interface Window {
        readonly WebAPIError: WebAPIException;
        readonly WebAPIException: WebAPIExceptionConstructor;
        /**
         * This API provides common Tizen functionality.
         *
         * The API provides the basic definitions that are used in the Tizen Web Device API.
         * These include generic callbacks that are invoked when the operations succeed or fail,
         * WebAPIError and WebAPIException that give information of the platform's error and
         * filter interfaces that are used to make query statements for searching.
         *
         * Additionally, this API specifies the location in the ECMAScript hierarchy in which
         * the Tizen Web Device API is instantiated (_window.tizen_).
         *
         * For more information on the Tizen features, see [Tizen Guide](/application/web/guides/index).
         * @since 1.0
         */
        readonly tizen: Tizen;
    }
    const WebAPIError: WebAPIException;
    const WebAPIException: WebAPIExceptionConstructor;
    /**
     * This API provides common Tizen functionality.
     *
     * The API provides the basic definitions that are used in the Tizen Web Device API.
     * These include generic callbacks that are invoked when the operations succeed or fail,
     * WebAPIError and WebAPIException that give information of the platform's error and
     * filter interfaces that are used to make query statements for searching.
     *
     * Additionally, this API specifies the location in the ECMAScript hierarchy in which
     * the Tizen Web Device API is instantiated (_window.tizen_).
     *
     * For more information on the Tizen features, see [Tizen Guide](/application/web/guides/index).
     * @since 1.0
     */
    const tizen: Tizen;
}
/**
 * Called when information of accounts is ready.
 *
 * @param accounts Received accounts.
 */
export interface AccountArraySuccessCallback {
    (accounts: Account[]): void;
}
/**
 * Called when information of extended data is ready.
 *
 * @param extendedDataArray Array of extended data.
 */
export interface AccountExtendedDataArraySuccessCallback {
    (extendedDataArray: AccountExtendedData[]): void;
}
/**
 * Called when information of providers are ready.
 *
 * @param providers Received providers.
 */
export interface AccountProviderArraySuccessCallback {
    (providers: AccountProvider[]): void;
}
/**
 * Called when _ApplicationManager.getAppsContext()_ completes successfully.
 *
 * @param contexts A list of running applications.
 */
export interface ApplicationContextArraySuccessCallback {
    (contexts: ApplicationContext[]): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param informationArray A list of installed applications.
 */
export interface ApplicationInformationArraySuccessCallback {
    (informationArray: ApplicationInformation[]): void;
}
/**
 * Called when all file entries in the archive file are retrieved successfully.
 *
 * @param entries List of ArchiveFileEntry objects found in ArchiveFile.
 */
export interface ArchiveFileEntryArraySuccessCallback {
    (entries: ArchiveFileEntry[]): void;
}
/**
 * Called when the file with the given name through getEntryByName() is found successfully.
 *
 * @param entry ArchiveFileEntry object representing the file found in ArchiveFile.
 */
export interface ArchiveFileEntrySuccessCallback {
    (entry: ArchiveFileEntry): void;
}
/**
 * Called to signal compressing or extracting operation progress.
 *
 * @param operationIdentifier Operation identifier for which progress is reported.
 * @param value Progress of the operation, value between 0.0 and 1.0 where 1.0 is 100% progress.
 * @param filename Name of the compressed or extracted file.
 */
export interface ArchiveFileProgressCallback {
    (operationIdentifier: number, value: number, filename: string): void;
}
/**
 * Called when the archive file with the given name is ready to use.
 *
 * @param archive Archive file object.
 */
export interface ArchiveFileSuccessCallback {
    (archive: ArchiveFile): void;
}
/**
 * Method invoked when a list of available windows is retrieved.
 *
 * @param type The available window types.
 */
export interface AvailableWindowListCallback {
    (type: WindowType[]): void;
}
/**
 * Callback for [Bundle.forEach()](#Bundle::forEach) method.
 *
 * @param key Bundle item key.
 * @param value Bundle item value.
 * @param type Bundle item type.
 */
export interface BundleItemCallback {
    (key: string, value: any, type: BundleValueType): void;
}
/**
 * Called when caching is successfully started.
 *
 * @param representation State of the remote resource.
 */
export interface CacheUpdatedCallback {
    (representation: Representation): void;
}
/**
 * Called when the caption menu value changes.
 *
 * @param key Watched key.
 * @param value New value of watched key.
 */
export interface CaptionValueChangeCallback {
    (key: CaptionInfoKey, value: CaptionValue): void;
}
/**
 * Called when the list of content is retrieved successfully.
 *
 * @param contents The array of _Content_ objects.
 */
export interface ContentArraySuccessCallback {
    (contents: Content[]): void;
}
/**
 * Called when the directory list is retrieved successfully.
 *
 * @param directories The array of _ContentDirectory_ objects.
 */
export interface ContentDirectoryArraySuccessCallback {
    (directories: ContentDirectory[]): void;
}
/**
 * Called when the scanning has been completed.
 *
 * @remark This callback is also invoked upon success of the [scanDirectory()](content.html#ContentManager::scanDirectory) method since Tizen 2.4. Therefore, the _uri_ parameter may now also be the URI of a _ContentDirectory_ object.
 *
 * @param uri The URI of the [Content](content.html#Content) or the [ContentDirectory](content.html#ContentDirectory) object.
 */
export interface ContentScanSuccessCallback {
    (uri: string): void;
}
/**
 * Called when the data is modified.
 *
 * @param type A type of performed operation.
 * @param data Object with information of columns and values of changed data. Actual data to be returned depends on data returned by data control provider application. Please refer to [native](/application/native/api/mobile/3.0/group__CAPI__DATA__CONTROL__PROVIDER__MODULE.html#ga319b58f16c7a2b007c64f218129e9042) documentation.
 */
export interface DataControlChangeCallback {
    (type: EventType, data: RowData): void;
}
/**
 * Called on error.
 *
 * @param reqId A unique identifier of the failed operation.
 * @param error An error message.
 */
export interface DataControlErrorCallback {
    (reqId: number, error: WebAPIError): void;
}
/**
 * Called on success.
 *
 * @param values A list of values assigned to the requested key.
 * @param reqid A unique identifier of the successful operation.
 */
export interface DataControlGetValueSuccessCallback {
    (values: string[], reqid: number): void;
}
/**
 * Called on success.
 *
 * @param reqId A unique identifier for the current operation.
 * So it is recommended to increase the _reqId_ value every time to guarantee uniqueness.
 * @param insertRowId The inserted row ID set by the data control provider if the specified providerResult is true, else \-1.
 */
export interface DataControlInsertSuccessCallback {
    (reqId: number, insertRowId: number): void;
}
/**
 * Called on success.
 *
 * @param rows Rows of SQL selection results from another application.
 * The array operation of rows would be different from general JavaScript array behavior depending on platform implementation. For example, _Array.isArray(rows)_ returns false.
 * @param reqId A unique identifier for the current operation.
 * So it is recommended to increase the _reqId_ value every time to guarantee uniqueness.
 */
export interface DataControlSelectSuccessCallback {
    (rows: RowData[], reqId: number): void;
}
/**
 * Called on success.
 *
 * @param reqId A unique identifier of the successful operation.
 */
export interface DataControlSuccessCallback {
    (reqId: number): void;
}
/**
 * Method that is invoked when an error occurs.
 *
 * @param error Generic error.
 */
export interface ErrorCallback {
    (error: WebAPIError): void;
}
/**
 * Called when the event occurs.
 *
 * @since 2.4
 *
 * @param event Broadcasted event which invokes this callback.
 * @param data Broadcasted event data.
 */
export interface EventCallback {
    (event: EventInfo, data: EventData): void;
}
/**
 * Called when the Exif information object has been successfully retrieved.
 *
 * @param exifInfo _ExifInformation_ to be retrieved.
 */
export interface ExifInformationSuccessCallback {
    (exifInfo: ExifInformation): void;
}
/**
 * Called when the thumbnail of the JPEG file has been successfully retrieved.
 *
 * @param uri URI for the thumbnail to be retrieved
 * If there is no thumbnail in the JPEG file, null is returned.
 */
export interface ExifThumbnailSuccessCallback {
    (uri: string | null): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @note _deprecated_ 5.0 Since 5.0
 *
 * @param files Files resulting from the asynchronous call.
 */
export interface FileArraySuccessCallback {
    (files: File[]): void;
}
/**
 * Called when the File.openStream asynchronous call completes successfully.
 *
 * @note _deprecated_ 5.0 Since 5.0
 *
 * @param filestream Filestream to access file content.
 */
export interface FileStreamSuccessCallback {
    (filestream: FileStream): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @note _deprecated_ 5.0 Since 5.0
 *
 * @param fileStr File represented as a DOMString resulting from the asynchronous call.
 */
export interface FileStringSuccessCallback {
    (fileStr: string): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @note _deprecated_ 5.0 Since 5.0
 *
 * @param file File resulting from the asynchronous call.
 */
export interface FileSuccessCallback {
    (file: File): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param storages List of available storage devices.
 */
export interface FileSystemStorageArraySuccessCallback {
    (storages: FileSystemStorage[]): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param storage Storage device structure.
 */
export interface FileSystemStorageSuccessCallback {
    (storage: FileSystemStorage): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param informationArray A list of installed applications.
 * @param appControl The application control that is passed to _ApplicationManager.findAppControl()_
 */
export interface FindAppControlSuccessCallback {
    (informationArray: ApplicationInformation[], appControl: ApplicationControl): void;
}
/**
 * Called when the device information is received.
 *
 * @param info Device information.
 */
export interface FoundDeviceInfoSuccessCallback {
    (info: DeviceInfo): void;
}
/**
 * Called when the platform information is received.
 *
 * @param info Platform information.
 */
export interface FoundPlatformInfoSuccessCallback {
    (info: PlatformInfo): void;
}
/**
 * Called when request was received.
 *
 * @param remoteResource Remote resource for client side.
 */
export interface FoundResourceSuccessCallback {
    (remoteResource: RemoteResource): void;
}
/**
 * Called when random pin is successfully generated.
 *
 * @param pin Generated random pin.
 */
export interface GeneratedPinCallback {
    (pin: string): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param names File or directory names resulting from the asynchronous call.
 * @param path Path to listed directory.
 */
export interface ListDirectorySuccessCallback {
    (names: string[], path: Path): void;
}
/**
 * Called when server's display mode is changed.
 *
 * @param mode Current server display mode.
 */
export interface MediaControllerDisplayModeChangeCallback {
    (mode: MediaControllerDisplayModeType): void;
}
/**
 * Called when change request is received from client.
 *
 * @remark You can return data object from callback which will be sent in reply to the client.
 * to check how to handle and respond to commands.
 *
 * @param clientName An id of a client application which sent the request.
 * @param mode The value requested by a client application.
 *
 * @returns RequestReply object which is sent with the reply to the client.
 */
export interface MediaControllerDisplayModeChangeRequestCallback {
    (clientName: ApplicationId, mode: MediaControllerDisplayModeType): void;
}
/**
 * Called when display rotation is changed.
 *
 * @param displayRotation Current server display rotation state.
 */
export interface MediaControllerDisplayRotationChangeCallback {
    (displayRotation: MediaControllerDisplayRotationType): void;
}
/**
 * Called when change request is received from a client.
 *
 * @remark You can return data object from callback which will be sent in reply to the client.
 * to check how to handle and respond to commands.
 *
 * @param clientName An id of a client application which sent the request.
 * @param displayRotation The value requested by a client application.
 *
 * @returns RequestReply object which is sent with the reply to the client.
 */
export interface MediaControllerDisplayRotationChangeRequestCallback {
    (clientName: ApplicationId, displayRotation: MediaControllerDisplayRotationType): void;
}
/**
 * Called when server's attribute is changed.
 *
 * @param enabled Current server's attribute status, which specifies if attribute is enabled or disabled.
 */
export interface MediaControllerEnabledChangeCallback {
    (enabled: boolean): void;
}
/**
 * Called when change request is received from client.
 *
 * @remark You can return data object from callback which will be sent in reply to the client.
 * See [mode360.addChangeRequestListener()](#MediaControllerMode360::addChangeRequestListener) and
 * to check how to handle and respond to commands.
 *
 * @param clientName The ID of a client application which the request was sent from.
 * @param enabled The value requested by a client application.
 *
 * @returns RequestReply object which is sent with the reply to the client.
 */
export interface MediaControllerEnabledChangeRequestCallback {
    (clientName: ApplicationId, enabled: boolean): void;
}
/**
 * Success callback for _getAllPlaylists_ function.
 *
 * @param playlists Collection of _MediaControllerPlaylist_ objects.
 */
export interface MediaControllerGetAllPlaylistsSuccessCallback {
    (playlists: MediaControllerPlaylist[]): void;
}
/**
 * Success callback for _getItems_ function.
 *
 * @param items Collection of _MediaControllerPlaylistItem_ objects.
 */
export interface MediaControllerGetItemsSuccessCallback {
    (items: MediaControllerPlaylistItem[]): void;
}
/**
 * @param senderAppName Sender application id.
 * @param command Custom command or event.
 * @param data Response object. This object is compatible with [Bundle](tizen.html#Bundle).
 *
 * @returns RequestReply object which will be returned to the author of the request.
 */
export interface MediaControllerReceiveCommandCallback {
    (senderAppName: ApplicationId, command: string, data: any): void;
}
/**
 * @param clientName Request sender name.
 * @param request Collection of filters to refine the search results.
 *
 * @returns RequestReply object with status code and reply data bundle.
 * It will be passed to the replyCallback of [sendSearchRequest()](#MediaControllerServerInfo::sendSearchRequest).
 */
export interface MediaControllerSearchRequestCallback {
    (clientName: ApplicationId, request: SearchFilter[]): void;
}
/**
 * Function called when search request has been processed.
 *
 * Interpretation of status and data parameters depends on the server implementation.
 *
 * @param reply Reply object returned by request handler.
 */
export interface MediaControllerSearchRequestReplyCallback {
    (reply: RequestReply | null): void;
}
/**
 * Called when a response to the request is received.
 *
 * @param data Response data object sent by the command handler. This object is compatible with [Bundle](tizen.html#Bundle) object.
 * @param code Response code.
 */
export interface MediaControllerSendCommandSuccessCallback {
    (data: any, code?: number): void;
}
/**
 * Called when all registered media controller servers found.
 *
 * @param servers List of registered media controller servers.
 */
export interface MediaControllerServerInfoArraySuccessCallback {
    (servers: MediaControllerServerInfo[]): void;
}
/**
 * Called when server status changed.
 *
 * @param status Current server status.
 */
export interface MediaControllerServerStatusChangeCallback {
    (status: MediaControllerServerState): void;
}
/**
 * Called when data is received from other applications via the specified message port name.
 *
 * @param data Array of data received from another application.
 * @param remoteMessagePort RemoteMessagePort port that can be used to reply for the received message.
 */
export interface MessagePortCallback {
    (data: MessagePortDataItem[], remoteMessagePort: RemoteMessagePort | null): void;
}
/**
 * Method invoked when the list of 3D modes is retrieved successfully.
 * @param mode3DEffects A list of supported 3D effect modes.
 */
export interface Mode3DEffectListSupportCallback {
    (mode3DEffects: Display3DEffectMode[]): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param informationArray A list of installed packages' information.
 */
export interface PackageInformationArraySuccessCallback {
    (informationArray: PackageInformation[]): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param path Path to created or changed resource on the filesystem. In case of deletion, path to parent of the deleted resource is given.
 */
export interface PathSuccessCallback {
    (path: Path): void;
}
/**
 * Called when the _tizen.content.getPlaylists()_ method completes successfully.
 *
 * @param playlists List of all playlists on a device.
 */
export interface PlaylistArraySuccessCallback {
    (playlists: Playlist[]): void;
}
/**
 * Called when the _playlist.get()_ method completes successfully.
 *
 * @param items List of playlist items.
 */
export interface PlaylistItemArraySuccessCallback {
    (items: PlaylistItem[]): void;
}
/**
 * Called when the _tizen.content.createPlaylist()_ method completes successfully.
 *
 * @param playlist Newly created playlist.
 */
export interface PlaylistSuccessCallback {
    (playlist: Playlist): void;
}
/**
 * Called when client receive presence events.
 *
 * @param presenceResponse Presence events.
 */
export interface PresenceEventCallback {
    (presenceResponse: PresenceResponse): void;
}
/**
 * Called when the push notification message arrives.
 *
 * @param message The received push notification message.
 */
export interface PushNotificationCallback {
    (message: PushMessage): void;
}
/**
 * Called when a push service registration request is successful.
 *
 * @param id The registration ID.
 */
export interface PushRegisterSuccessCallback {
    (id: PushRegistrationId): void;
}
/**
 * Called when the state of push registration is changed.
 *
 * @param state The state of push registration.
 */
export interface PushRegistrationStateChangeCallback {
    (state: PushRegistrationState): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param blob Blob object with file content.
 */
export interface ReadBlobSuccessCallback {
    (blob: Blob): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param data A TypedArray with file content.
 */
export interface ReadDataSuccessCallback {
    (data: Uint8Array): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param string String with data read from file.
 */
export interface ReadStringSuccessCallback {
    (string: string): void;
}
/**
 * Called when the response is received.
 *
 * @param response Received for client site.
 */
export interface RemoteResourceResponseCallback {
    (response: RemoteResponse): void;
}
/**
 * Called when connection change appeared.
 *
 * @param isAlive State of the remote resource.
 */
export interface ResourceStateChangeCallback {
    (isAlive: boolean): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param position File position indicator.
 */
export interface SeekSuccessCallback {
    (position: number): void;
}
/**
 * Method invoked when the new source has been set.
 *
 * This method returns information **source** and **type**.
 * @param source A descriptor object _SystemInfoVideoSourceInfo_ that contains information about the source used by TV.
 * @param type The window type.
 */
export interface SourceChangedSuccessCallback {
    (source: SystemInfoVideoSourceInfo, type: WindowType): void;
}
/**
 * Called when the status event occurs.
 *
 * Example of using can be find at [addAppStatusChangeListener](application.html#ApplicationManager::addAppStatusChangeListener) code example.
 *
 * @param appId Id of the application that status has been changed.
 * @param isActive The new status of the application.
 */
export interface StatusEventCallback {
    (appId: ApplicationId, isActive: boolean): void;
}
/**
 * Method invoked when the asynchronous call completes successfully.
 */
export interface SuccessCallback {
    (): void;
}
/**
 * Function invoked when the asynchronous call completes successfully.
 *
 * @param properties The array of SystemInfoProperty objects returned from a successful asynchronous operation.
 */
export interface SystemInfoPropertyArraySuccessCallback {
    (property: SystemInfoPropertyType[]): void;
}
/**
 * Function invoked when the asynchronous call completes successfully.
 *
 * @param property The property returned from a successful asynchronous operation.
 */
export interface SystemInfoPropertySuccessCallback {
    (property: SystemInfoPropertyType): void;
}
/**
 * Called when the _tizen.content.createThumbnail()_ method completes successfully.
 *
 * @param path Path of the created thumbnail.
 */
export interface ThumbnailSuccessCallback {
    (path: string): void;
}
/**
 * Method invoked when the video resolution has been changed.
 *
 * @param resolution The resolution that the video has changed to.
 * @param type The window type.
 */
export interface VideoResolutionChangeCallback {
    (resolution: VideoResolution, type: WindowType): void;
}
/**
 * Called when default language is changed.
 *
 * @param previous Previous language.
 * @param current Current language.
 */
export interface VoiceControlLanguageChangeCallback {
    (previous: string, current: string): void;
}
/**
 * Called when client gets the recognition result.
 *
 * @param event The result event.
 * @param list The recognized command list.
 * @param results The spoken text (e.g. registered command text like "play", "stop", etc.).
 */
export interface VoiceControlResultCallback {
    (event: VoiceControlResultEvent, list: VoiceControlCommand[], results: string): void;
}
/**
 * The method invoked when the volume has been changed.
 *
 * @param volume The changed volume
 */
export interface VolumeChangeCallback {
    (volume: number): void;
}
/**
 * Method invoked when the position and size of the TV window has been changed or retrieved.
 *
 * This method returns information **windowRect** and **type**.
 * For more detailed information about _windowRect_, see the description of _show()_.
 * @param windowRect An array that contains information about the position and size of a specified TV window as a string with units.
 * @param type The window type.
 */
export interface WindowRectangleSuccessCallback {
    (windowRect: string[], type: WindowType): void;
}
/**
 * Called when the asynchronous call completes successfully.
 *
 * @param bytesCount Number of bytes written (can be more than inputString length for multibyte encodings and will never be less).
 */
export interface WriteStringSuccessCallback {
    (bytesCount: number): void;
}
export const Query: Query;
/* tslint:disable:no-irregular-whitespace */
/**
 * The Account API provides functionality for using existing configured
 * online accounts and providers, and for creating accounts of known types.
 *
 * The basic concepts are:
 *
 * *   **Provider** is an online service provider entity, such as
 * Google, Vodafone or Facebook. A service provider is identified by its applicationId.
 * Account provider will be registered while the application is installed.
 * The information will be used in the "Add account" screen in Settings.
 * *   **Account** collects all the data (user name, credential, settings)
 * needed for connecting to services. An account is always bound to a single provider,
 * and has a list of service instances bound to the account. The services can be
 * individually enabled and disabled on the given account. For instance,
 * account1@gmail.com can identify a Google account, giving access to services such as
 * gmail, gtalk, Picasa, and Youtube with each service having a separate service
 * instance bound to the account.
 *
 * To use _add(), remove(), and update()_ methods of AccountManager can be invoked only
 * by account provider application. A web application is an account provider when its _config.xml_
 * contains [Account provider section](/application/tizen-studio/web-tools/config-editor#mw_account). For example:
 *
 * ```xml
 * <tizen:account multiple-account-support="true">
 *    <tizen:icon section="Account">icon.png</tizen:icon>
 *    <tizen:icon section="AccountSmall">icon.png</tizen:icon>
 *    <tizen:display-name xml:lang="en-gb">Test</tizen:display-name>
 *    <tizen:capability>http://tizen.org/account/capability/contact</tizen:capability>
 * </tizen:account>
 * ```
 * For more information about how to use Account API, see [Account Guide](/application/web/guides/personal/account).
 *
 * @since 5.0
 *
 * @defApiFeature http://tizen.org/feature/account
 * To guarantee the running of the application on a device with Account feature.
 */
/* tslint:enable:no-irregular-whitespace */
export const account: AccountManager;
/**
 * The Alarm API provides functionality for scheduling the system alarm.
 * It allows you to run other applications and have them perform operations at a specific time.
 * You can schedule an alarm to go off once or to repeat at specific intervals.
 *
 * Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
 *
 * Once an alarm goes off, it will be removed from the alarm storage automatically.
 * _AlarmManager_ provides methods to manage alarms such as adding and removing.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information on the Alarm features, see [Alarm Guide](/application/web/guides/alarm/alarms).
 *
 * @since 1.0
 */
export const alarm: AlarmManager;
/**
 * This API provides a way to launch other applications and access
 * application management.
 *
 * The _ApplicationManager_ interface also provides methods to launch other applications
 * explicitly and implicitly through the _ApplicationControl_ interface.
 * The _ApplicationControl_ interface consists of an operation, URI, and MIME type
 * and also describes an action to be performed by other
 * applications and can carry the result from the subsequent application.
 * The _ApplicationManager_ interface also provides methods to handle the application
 * lifecycle, to access the installed applications on the device, and to let
 * an application be notified of a change in the application list.
 *
 * The _Application_ interface defines the current application's information and
 * the basic operations for the current application such as exit or hide.
 *
 * Since Tizen 2.4 the _Application_ interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
 *
 * For more information on the Application features, see [Application Guide](/application/web/guides/applications/overview), [Application Group Guide](/application/web/guides/app-management/app-group) or [Application Control Guide](/application/web/guides/app-management/app-controls).
 *
 * @since 1.0
 *
 * @defApiFeature http://tizen.org/feature/battery
 * To guarantee the running of the application on a device which has battery.
 */
export const application: ApplicationManager;
/**
 * The Archive API provides functions to create and manage archive files.
 * You can extract files, add a file to an archive file, and so on.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information about how to use Archive API, see [File Archiving Guide](/application/web/guides/data/file-archiving).
 *
 * @since 2.3
 */
export const archive: ArchiveManager;
/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 *
 * It is possible to search for specific content using filters.
 * The API also supports setting the attributes of specific content.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information on the Content features, see [Stored Content Management](/application/web/guides/data/stored-content).
 *
 * Playlist functionality has been added in Tizen 2.3.
 *
 * @since 2.0
 */
export const content: ContentManager;
/**
 * This specification defines a Data Control API for applications.
 *
 * The Data Control functionality provides a way to access specific data that is exported by other applications.
 *
 * Please read the [Data Control guide](/application/web/guides/app-management/data-control) to know how to share own application data with other applications.
 *
 * @since 2.4
 */
export const datacontrol: DataControlManager;
/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information on the Download features, see [Download Guide](/application/web/guides/connectivity/download).
 *
 * @since 2.0
 *
 * @defApiFeature http://tizen.org/feature/network.wifi
 * DownloadNetworkType WIFI can be available on a Wi-Fi enabled device. To guarantee that the download application runs on a device with the Wi-Fi feature, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/network.telephony
 * DownloadNetworkType _CELLULAR_ can be available on a cellular-enabled device. To guarantee that the download application runs on a device with the cellular feature, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/network.ethernet
 * DownloadNetworkType _ALL_ can be available on a ethernet-enabled device. To guarantee that the download application runs on a device with the ethernet network feature.
 */
export const download: DownloadManager;
/**
 * The Exif API provides interfaces and methods for manipulating [Exif](http://en.wikipedia.org/wiki/Exchangeable_image_file_format) data from a JPEG file.
 * The _ExifManager_ object provides methods to retrieve the _ExifInformation_ object from a JPEG file
 * and save the Exif data from the _ExifInformation_ object in the JPEG file.
 * The _ExifInformation_ object provides functionality to get and set the Exif attributes corresponding to the Exif tag.
 * Changing the value of the attribute in the _ExifInformation_ object stores the Exif data in the _ExifInformation_ object. It does not change data in the JPEG file.
 * For applying the modified Exif data to the JPEG file,
 * the saveExifInfo() method of the _ExifManager_ object should be called with the _ExifInformation_ object that has the modified Exif data.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information about how to use Exif API, see [Exif Guide](/application/web/guides/multimedia/jpeg-exif).
 *
 * @since 2.3
 */
export const exif: ExifManager;
/**
 * The Filesystem API provides access to a device's filesystem.
 *
 * The filesystem is represented as an abstract collection of disjointed filesystem virtual
 * root locations, each corresponding to a specific location in the device
 * filesystem. The filesystem API exposes the hierarchies below these root
 * locations as autonomous virtual filesystems.
 *
 * Each virtual root has a string name. Each file or directory within the virtual
 * filesystem is addressed using a fully-qualified path of the form:
 * _root name/path_ where _rootname_ is
 * the name of the virtual root and _path_ is the path to the file or
 * directory relative to that root.
 *
 * The following virtual roots must be supported:
 *
 * *   images - the location for images
 * *   videos - the location for videos
 * *   music - the location for sounds
 * *   documents - the location for documents
 * *   downloads - the location for downloaded items
 * *   camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * *   wgt-package - the location for widget package which is read-only
 * *   wgt-private - the location for a widget's private storage
 * *   wgt-private-tmp - the location for a widget's private volatile storage
 * *   removable\__..._ - the location for external storages. The _"..."_ suffix is a unique identifier of an external storage.
 * To obtain list of available external storages use [listStorages](#FileSystemManager::listStorages).
 *
 * The file URI path is also supported. To access paths out of virtual root, for example "file:///tmp" can be used as location parameter.
 *
 * The implementation must support the use of the following characters in file names:
 *
 * *   Letters (a-z, A-Z)
 * *   Digits (0-9)
 * *   Blank space
 * *   Underscore ("\_")
 * *   Hyphen ("-")
 * *   Period (".")
 *
 * The implementation may support additional characters in file names, depending on platform support.
 *
 * The implementation may forbid the use of additional characters in file names, depending on the platform.
 * The use of the path (component) separator "/" and null character "\\\\x00" should not be allowed in file names.
 *
 * Some other file name and path characteristics are platform-dependent,
 * for example, maximum path length, file name length, case sensitivity, additional
 * character support, etc. Therefore, it is recommended to avoid any dependency
 * on aspects that cannot be supported across multiple platforms.
 *
 * The encoding used for the file path should be UTF-16 (default for ECMAScript String).
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * **Remark:** Methods, which names end with NonBlocking are asynchronous and are executed in background in the order in which they were called. Corresponding methods without NonBlocking at the end are synchronous and will block further instructions execution, until they are finished.
 *
 * For more information on the Filesystem features, see [File System Guide](/application/web/guides/data/file-system).
 *
 * @since 1.0
 */
export const filesystem: FileSystemManager;
/**
 * The Iotcon API provides functions for IoT connectivity.
 *
 * It allows to register, discover and access to resources via RESTful API.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information on the IoT features, see [IoT Guide](/application/web/guides/connectivity/iotcon).
 *
 * @since 3.0
 *
 * @defApiFeature http://tizen.org/feature/iot.ocf
 *
 * To guarantee this application will run on a device with a Iotcon, add the below feature declaration to the config file
 */
export const iotcon: Iotcon;
/**
 * The Key Manager API provides a secure repository for storing, retrieving and removing the sensitive data of users and their applications. Users can protect the data with passwords.
 *
 * For more information on the Key Manager features, see [Key Manager Guide](/application/web/guides/security/secure-key).
 *
 * @since 2.4
 */
export const keymanager: KeyManager;
/**
 * The Media Controller API provides functions for communication between the media
 * controller server and the media controller client.
 *
 * It helps to transfer the information like playback info, shuffle/repeat mode
 * and metadata from media controller server to client. Allows to control server state
 * by sending commands from client.
 *
 * For more information on the Media Controller features, see [Media Controller Guide](/application/web/guides/multimedia/media-controller).
 *
 * @since 5.0
 */
export const mediacontroller: MediaControllerManager;
/**
 * The Message Port API provides the functionality for communicating with other applications.
 *
 * For more information on the Message Port features, see [Message Port Guide](/application/web/guides/app-management/message-port).
 *
 * @since 2.1
 */
export const messageport: MessagePortManager;
/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.
 * It also provides a listener method so that an application can be notified when there is a change on the installed packages.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 *
 * *   for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * *   for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * *   for accessing internal and external storage using this API, privileges ([http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage)) must be provided.
 *
 * For more information on the Package features, see [Package Guide](/application/web/guides/app-management/packages).
 * @since 2.1
 */
export const package: PackageManager;
/**
 * The Push API provides functionality for receiving push notifications
 * from the Tizen push server.
 * The push service is a client daemon that maintains a permanent connection
 * between your device and the Tizen push server. Connection with push service is used to deliver push notifications
 * to the application, and process the registration and deregistration requests.
 *
 * To receive push notifications, follow the steps below:
 *
 * *   Connecting to the push service
 * *   Registering your application, if the application has not been registered yet
 * *   Getting notification data
 *
 * For more information on the Push features, see [Push Guide](/application/web/guides/messaging/push).
 *
 * To use Push features the application needs the permission to access the Tizen Push servers.
 *
 * **Service Limitation:**
 *
 * *   Size of a push message is limited: _alertMessage_ up to 127 bytes, and _appData_ (payload data) less than 1 KB.
 * *   Push service does not guarantee delivery and order of push messages.
 *
 * @since 3.0
 * @defApiFeature http://tizen.org/feature/network.push
 * To guarantee that the push application runs on a device with the push feature.
 */
export const push: PushManager;
/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 *
 * This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
 *
 * Web applications can use this API to access the following system properties:
 *
 * *   ADS (**Since**: 3.0)
 * *   BATTERY
 * *   BUILD
 * *   CAMERA\_FLASH (**Since**: 2.4)
 * *   CELLULAR\_NETWORK
 * *   CPU
 * *   DEVICE\_ORIENTATION
 * *   DISPLAY
 * *   ETHERNET\_NETWORK (**Since**: 2.4)
 * *   LOCALE (**Since**: 2.1)
 * *   MEMORY (**Since**: 2.3)
 * *   NET\_PROXY\_NETWORK (**Since**: 3.0)
 * *   NETWORK
 * *   PERIPHERAL (**Since**: 2.1)
 * *   SERVICE\_COUNTRY (**Since**: 5.5)
 * *   SIM
 * *   STORAGE
 * *   VIDEOSOURCE (**Since**: 2.3)
 * *   WIFI\_NETWORK
 *
 * Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, CELLULAR\_NETWORK and SIM are not available.
 * To check the available [SystemInfoPropertyId](#SystemInfoPropertyId), [getCapability()](#SystemInfo::getCapability) method can be used.
 *
 * *   BATTERY - tizen.systeminfo.getCapability(_"http://tizen.org/feature/battery"_)
 * *   CAMERA\_FLASH - tizen.systeminfo.getCapability(_"http://tizen.org/feature/camera.back.flash"_)
 * *   CELLULAR\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.telephony"_)
 * *   DISPLAY - tizen.systeminfo.getCapability(_"http://tizen.org/feature/screen"_)
 * *   ETHERNET\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.ethernet"_)
 * *   NET\_PROXY\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.net\_proxy"_)
 * *   SIM - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.telephony"_)
 * *   WIFI\_NETWORK - tizen.systeminfo.getCapability(_"http://tizen.org/feature/network.wifi"_)
 *
 * For more information on the System Information features, see [System Information Guide](/application/web/guides/device/system-information).
 * @since 1.0
 *
 * @defApiFeature http://tizen.org/feature/battery
 * To guarantee the running of the application (e.g. track the battery usage) on a device which has a battery, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/camera.back.flash
 * To guarantee the running of the application on a device which has camera back flash and control it, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/network.ethernet
 * To guarantee the running of the application on a device which supports Ethernet network feature, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/network.net\_proxy
 * To guarantee the running of the application on a device which supports network proxy for internet connection, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/network.telephony
 * To guarantee the running of the application on a device which supports telephony feature, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/network.wifi
 * To guarantee the running of the application on a device which supports Wi-Fi.
 */
export const systeminfo: SystemInfo;
/**
 * The Time API provides information regarding date/time and time zones.
 *
 * @since 1.0
 *
 * The JavaScript Date object does not have full timezone support.
 * Date objects allow only simple representations to denote a particular location's
 * offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
 * offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
 * that a location is 5 hours and 30 minutes ahead of UTC +00:00.
 * The issue with this method is not getting the correct
 * local time for a given date. The existing methods are sufficient for this purpose.
 * The issue is correctly converting to and from local time and UTC for all points in
 * time - in any of the past, present, and future - based on an initial time provided.
 * This is important for defining relative dates, where a time in a given location may
 * observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
 * or any other changes that may occur to a location's time zone over time.
 * Without the communication of the explicit time zone rules governing a given date and
 * time, the ability to effectively calculate the offset of the local time to UTC or to
 * any other time zone at any point in the past or future is lost.
 *
 * This API can be used to get TZDate objects with full time zone support, convert them
 * between timezones, retrieve available timezones.
 *
 * For more information on the Time features, see [Time Guide](/application/web/guides/device/time).
 */
export const time: TimeUtil;
/**
 * This API provides the audio control features (such as volume and mute) on the TV associated device.
 * There will be a _tizen.tvaudiocontrol_ object that allows access to the functionality of the TV Audio Control API.
 *
 * @since 2.3
 *
 * @defApiFeature http://tizen.org/feature/tv.audio
 * To guarantee the running of this application on a device with a TV audio control support.
 */
export const tvaudiocontrol: AudioControlManager;
/**
 * This API provides interfaces for managing stereoscopic 3D effects
 * for television signals.
 *
 * Modern TVs and projectors can display two images, a left image and a right image,
 * which are displayed to the left and right eyes respectively. This technique creates
 * an illusion of depth, which is perceived by users as a 3D image.
 *
 * For more information about stereoscopy, see this
 * [Wikipedia article](http://en.wikipedia.org/wiki/Stereoscopy).
 *
 * There are several formats of input images supported by the stereoscopy
 * plugin:
 *
 * *   Side-by-side: Left and right images are merged into one
 * picture. The left image is at the left side and the right image is at the right
 * side. Both images are scaled to fit in the original
 * image ratio.
 * *   Top-bottom: Left and right images are merged into one
 * picture. The left image is at the top and the right image is at the bottom.
 * Both images are scaled to fit in the original image ratio.
 * *   Line-by-line: Left and right images are interlaced by row.
 * The first row belongs to the left image and the second row
 * belongs to the right image, and so on.
 * *   Vertical-strip: Left and right images are interlaced by column.
 * The first column belongs to the left image and the second column
 * belongs to the right image, and so on.
 * *   Frame-sequence: Left and right images are interlaced by frames.
 *
 * Advanced devices are able to computationally generate depth
 * data by processing non-stereoscopic images. Depth data is used
 * to render left and right stereoscopic images from a source image which lacks
 * this information. The quality of such stereoscopic images depends
 * on the computational power used for processing, the algorithms used and the properties
 * of the source data. For more information see this
 * [](http://en.wikipedia.org/wiki/2D_to_3D_conversion)
 * Wikipedia article.
 *
 * There will be a _tizen.tvdisplaycontrol_ object that allows accessing the
 * functionality of the display control API.
 *
 * @since 2.3
 *
 * @defApiFeature http://tizen.org/feature/tv.display
 * To guarantee the running of this application on a device with a TV display control support.
 */
export const tvdisplaycontrol: DisplayControlManager;
/**
 * The TVInfo API provides functions to get settings values that are provided by the Tizen TV.
 *
 * @since 2.4
 *
 * @defApiFeature http://tizen.org/feature/tv.information
 * To guarantee the running of this application on a device with a caption and so on.
 */
export const tvinfo: TVInfoManager;
/**
 * The TV Input Device API provides functions to subscribe key events of the input device.
 *
 * The following remote control keys are mandatory input device keys. They are available to an application on any Tizen TV.
 *
 * *   ArrowLeft, ArrowUp, ArrowRight, ArrowDown
 * *   Enter
 * *   Back
 *
 * The Tizen TV may provide additional keys depending on a particular input device.
 * An application can handle device dependent key events after registration.
 *
 * @since 2.3
 *
 * @defApiFeature http://tizen.org/feature/tv.inputdevice
 * To guarantee the running of this application on a device with a TV input device support.
 */
export const tvinputdevice: TVInputDeviceManager;
/**
 * This API provides a way to embed a video source in a Tizen Web Application running on a device associated with the TV.
 * It allows an available video source to be selected and shown on or hidden from the display in a Tizen Web Application.
 * There will be a _tizen.tvwindow_ object that allows access to the functionality of the TV Window API.
 * To show a TV signal, execute the
 * _show_ function.
 * A TV source is controlled by the user or
 * by you with the Tizen Web Device APIs. You do not have to implement any routines if you
 * do not want to interact with the TV image.
 *
 * @since 2.3
 *
 * @defApiFeature http://tizen.org/feature/tv.pip
 * To guarantee the running of this application on a device with a TV picture-in-picture support.
 */
export const tvwindow: TVWindowManager;
/**
 * The Voice Control API provides interfaces and methods for recognizing voice command.
 *
 * Voice Control API offers functionality to recognize the voice and to send the result as predefined command.
 *
 * @since 4.0
 *
 * @defApiFeature http://tizen.org/feature/speech.control
 * To guarantee that the voice control application runs on a device with speech control feature, declare the following feature requirements in the config file:
 * @defApiFeature http://tizen.org/feature/microphone
 * To guarantee that the voice control application runs on a device with microphone feature.
 */
export const voicecontrol: VoiceControlClientManager;
/**
 * This Web Setting API defines a set of APIs that manages the setting states of the Web view in your Web application.
 *
 * A Tizen Web application includes a web view and the properties below of the web view can be managed via the Web Setting API:
 *
 * *   Delete all the cookies saved for the web view in the Web application.
 * *   Set a custom user agent string of the web view in the Web application.
 *
 * Note that all the settings using the Web Setting API is bound to your application; thus, no other applications are affected via the Web Setting API calls within your application.
 *
 * For more information on the Web Setting features, see [Web Setting Guide](/application/web/guides/device/web-view).
 *
 * @since 2.2
 */
export const websetting: WebSettingManager;
/**
 * The byte stream.
 *
 * @since 3.0
 */
export type ByteStream = number[];
/**
 * Account identifier.
 */
export type AccountId = number;
/**
 * An alarm identifier.
 */
export type AlarmId = string;
/**
 * File reference for an archive file.
 * It can be either a File object or a virtual path.
 */
export type FileReference = string | File;
/**
 * The unique ID for an installed application.
 */
export type ApplicationId = string;
/**
 * The unique ID for a running application.
 */
export type ApplicationContextId = string;
/**
 * Specifies the user event data.
 *
 * @since 2.4
 */
export type UserEventData = any;
/**
 * Specifies the user or system defined event data.
 *
 * @since 2.4
 */
export type EventData = SystemEventData | UserEventData;
/**
 * Content identifier.
 */
export type ContentId = string;
/**
 * Content directory identifier.
 */
export type ContentDirectoryId = string;
/**
 * Playlist identifier.
 *
 * @since 2.3
 */
export type PlaylistId = string;
/**
 * A set of HTTP header fields.
 *
 * The key / value type of each HTTP header field should be DOMString.
 *
 * @since 2.1
 */
export type DownloadHTTPHeaderFields = any;
/**
 * String, which points to file or directory.
 *
 * In methods available since Tizen 5.0, checking or accessing files or directories may be granted only through a valid path.
 *
 * Paths may contain one of the supported virtual roots. The valid path pattern is explained on the top of the page.
 *
 * @since 5.0
 */
export type Path = string;
/**
 * A resource type.
 *
 * @remark The length of resource type should be less than or equal to 61. The resource type must start with a lowercase alphabetic character, followed by a sequence
 * of lowercase alphabetic, numeric, ".", or "-" characters, and contains no white space.
 */
export type ResourceType = string;
/**
 * Type of interfaces which can be held in a resource.
 *
 * The following values are allowed:
 *
 * *   "oic.if.baseline" - Interface for default. Applicable methods: GET, UPDATE. All resource has this interface automatically.
 * *   "oic.if.ll" - Interface which is used to list the references to other resources contained in a resource.
 * *   "oic.if.b" - Interface which is used to manipulate (GET, PUT, POST, DELETE) a collection of sub-resources at the same time.
 * *   "oic.mi.grp" - Interface which is used to manipulate (GET, PUT, POST) a group of remote resources.
 * *   "oic.if.r" - Interface which is used to limit the methods that can be applied to a resource to GET only.
 */
export type ResourceInterface = string;
/**
 * Data to be stored or retrieved.
 */
export type RawData = string;
/**
 * The string data item value, which can either be a DOMString or a DOMString array.
 *
 * @since 3.0
 */
export type StringDataItemValue = string | string[];
/**
 * The byte stream data item value, which can either be a ByteStream or a ByteStream array.
 *
 * @since 3.0
 */
export type ByteStreamDataItemValue = ByteStream | ByteStream[];
/**
 * The data item value identifier, which can either be a MessagePortStringDataItem or a MessagePortByteStreamDataItem.
 *
 * @since 3.0
 */
export type MessagePortDataItem = MessagePortStringDataItem | MessagePortByteStreamDataItem;
/**
 * A unique ID for an installed package.
 */
export type PackageId = string;
/**
 * A push service registration identifier.
 */
export type PushRegistrationId = string;
/**
 * All available values for the caption menu.
 */
export type CaptionValue =
    | CaptionState
    | CaptionMode
    | CaptionFontSize
    | CaptionFontStyle
    | CaptionColor
    | CaptionOpacity
    | CaptionEdge;
/**
 * Name which identifies the key
 *
 * Name of the key may be, for example:
 *
 * *   VolumeUp
 * *   VolumeDown
 * *   ChannelUp
 * *   ChannelDown
 *
 * The actual list of supported keys depends on the platform.
 */
export type InputDeviceKeyName = string;
export type SystemInfoPropertyType =
    & SystemInfoBattery
    & SystemInfoCpu
    & SystemInfoStorage
    & SystemInfoStorageUnit
    & SystemInfoDisplay
    & SystemInfoPanel
    & SystemInfoDeviceOrientation
    & SystemInfoBuild
    & SystemInfoLocale
    & SystemInfoNetwork
    & SystemInfoWifiNetwork
    & SystemInfoEthernetNetwork
    & SystemInfoCellularNetwork
    & SystemInfoNetProxyNetwork
    & SystemInfoPeripheral
    & SystemInfoMemory
    & SystemInfoVideoSource;
/**
 * Specifies the application launch mode when it is launched by _launchAppControl()_. This value may be overriden if application launched by _launchAppControl()_ has value _SINGLE_ configured in application manifest.
 *
 * The launch modes defined by this enumerator are:
 *
 * *   SINGLE - Launch application as standalone instance.
 * *   GROUP - Launch application in subgroup.
 *
 * @since 2.4
 */
export type ApplicationControlLaunchMode = "GROUP" | "SINGLE";
/**
 * Specifies the possible modes of getting statistics of application usage.
 *
 * Possible types are:
 *
 * *   RECENTLY - Indicates most recently used applications, in a descending order of the application use counts.
 * *   FREQUENTLY - Indicates most frequently used applications, in a descending order of the application use counts.
 *
 * @since 4.0
 */
export type ApplicationUsageMode = "FREQUENTLY" | "RECENTLY";
/**
 * Enumeration for the compression level.
 *
 * *   STORE - No compression. The file is stored unchanged.
 * *   FAST - Choose the fastest compression method, compression savings will be less.
 * *   NORMAL - Default compression level.
 * *   BEST - Choose the best compression method, compression may be slow.
 */
export type ArchiveCompressionLevel = "BEST" | "FAST" | "NORMAL" | "STORE";
/**
 * An enumerator to indicate the aspect ratio of the video source.
 *
 * *   ASPECT\_RATIO\_1x1 - 1:1
 * *   ASPECT\_RATIO\_4x3 - 4:3
 * *   ASPECT\_RATIO\_16x9 - 16:9
 * *   ASPECT\_RATIO\_221x100 - 2.21:1
 * *   ASPECT\_RATIO\_UNKNOWN - Unknown aspect ratio
 *
 * @remark _ASPECT\_RATIO\_UNKNOWN_ is supported since Tizen 3.0
 *
 * @since 2.4
 */
export type AspectRatio =
    | "ASPECT_RATIO_16x9"
    | "ASPECT_RATIO_1x1"
    | "ASPECT_RATIO_221x100"
    | "ASPECT_RATIO_4x3"
    | "ASPECT_RATIO_UNKNOWN";
/**
 * An enumerator to indicate the beep type.
 *
 * *   UP - The UP sound
 * *   DOWN - The DOWN sound
 * *   LEFT - The LEFT sound
 * *   RIGHT - The RIGHT sound
 * *   PAGE\_LEFT - The PAGE LEFT sound
 * *   PAGE\_RIGHT - The PAGE RIGHT sound
 * *   BACK - The BACK sound
 * *   SELECT - The SELECT sound
 * *   CANCEL - The CANCEL sound
 * *   WARNING - The WARNING sound
 * *   KEYPAD - The KEYPAD sound
 * *   KEYPAD\_ENTER - The KEYPAD ENTER sound
 * *   KEYPAD\_DEL - The KEYPAD DEL sound
 * *   MOVE - The MOVE sound
 * *   PREPARING - The PREPARING sound
 */
export type AudioBeepType =
    | "BACK"
    | "CANCEL"
    | "DOWN"
    | "KEYPAD"
    | "KEYPAD_DEL"
    | "KEYPAD_ENTER"
    | "LEFT"
    | "MOVE"
    | "PAGE_LEFT"
    | "PAGE_RIGHT"
    | "PREPARING"
    | "RIGHT"
    | "SELECT"
    | "UP"
    | "WARNING";
/**
 * Defines whether the lyrics supplied with an audio file is time-synchronized.
 *
 * *   SYNCHRONIZED - corresponds to synchronized audio content lyrics.
 * *   UNSYNCHRONIZED - corresponds to unsynchronized audio content lyrics.
 */
export type AudioContentLyricsType = "SYNCHRONIZED" | "UNSYNCHRONIZED";
/**
 * An enumerator to indicate the audio output mode.
 *
 * *   PCM - PCM(Pulse-code modulation) audio output mode
 * *   DOLBY - Dolby audio output mode
 * *   DTS - DTS(Digital Theater System) audio output mode
 * *   AAC - AAC(Advanced Audio Coding) audio output mode
 * *   DOLBY\_DIGITAL\_PLUS - Dolby Digital Plus audio output mode
 *
 * @remark DOLBY\_DIGITAL\_PLUS is supported since Tizen 5.5
 */
export type AudioOutputMode = "AAC" | "DOLBY" | "DOLBY_DIGITAL_PLUS" | "DTS" | "PCM";
/**
 * Specifies starting point for seek operation.
 *
 * *   BEGIN - Beginning of the file.
 * *   CURRENT - Current position of file indicator.
 * *   END - End of the file.
 *
 * @since 5.0
 */
export type BaseSeekPosition = "BEGIN" | "CURRENT" | "END";
/**
 * [Bundle](#Bundle) item value types.
 *
 * The following value types are supported by [Bundle](#Bundle) objects:
 *
 * *   STRING - string value type
 * *   STRING\_ARRAY - array of strings value type
 * *   BYTES - [ByteStream](#ByteStream)
 * *   BYTES\_ARRAY - array of [ByteStream](#ByteStream)
 *
 * @since 5.5
 *
 * @remark Empty array will be assigned STRING\_ARRAY type.
 */
export type BundleValueType = "BYTES" | "BYTES_ARRAY" | "STRING" | "STRING_ARRAY";
/**
 * Specifies the values for the [daysOfTheWeek](#AlarmAbsolute::daysOfTheWeek) attribute.
 *
 * *   "MO" corresponds to "Monday"
 * *   "TU" corresponds to "Tuesday"
 * *   "WE" corresponds to "Wednesday"
 * *   "TH" corresponds to "Thursday"
 * *   "FR" corresponds to "Friday"
 * *   "SA" corresponds to "Saturday"
 * *   "SU" corresponds to "Sunday"
 */
export type ByDayValue = "FR" | "MO" | "SA" | "SU" | "TH" | "TU" | "WE";
/**
 * Available values for the caption menu color.
 *
 * These values may be returned for keys CAPTION\_FONT\_COLOR\_KEY, CAPTION\_BG\_COLOR\_KEY, CAPTION\_EDGE\_COLOR\_KEY and CAPTION\_WINDOW\_COLOR\_KEY.
 */
export type CaptionColor =
    | "CAPTION_COLOR_BLACK"
    | "CAPTION_COLOR_BLUE"
    | "CAPTION_COLOR_CYAN"
    | "CAPTION_COLOR_DEFAULT"
    | "CAPTION_COLOR_GREEN"
    | "CAPTION_COLOR_MAGENTA"
    | "CAPTION_COLOR_RED"
    | "CAPTION_COLOR_WHITE"
    | "CAPTION_COLOR_YELLOW";
/**
 * Available values for the caption menu edge type.
 *
 * These values may be returned for key CAPTION\_EDGE\_TYPE\_KEY.
 *
 * *   CAPTION\_EDGE\_NONE - no edge
 * *   CAPTION\_EDGE\_RAISED - raised edge
 * *   CAPTION\_EDGE\_DEPRESSED - depressed edge
 * *   CAPTION\_EDGE\_UNIFORM - uniform edge
 * *   CAPTION\_EDGE\_DROP\_SHADOWED - drop shadowed edge
 */
export type CaptionEdge =
    | "CAPTION_EDGE_DEPRESSED"
    | "CAPTION_EDGE_DROP_SHADOWED"
    | "CAPTION_EDGE_NONE"
    | "CAPTION_EDGE_RAISED"
    | "CAPTION_EDGE_UNIFORM";
/**
 * Available values for the caption menu font size.
 *
 * These values may be returned for key CAPTION\_FONT\_SIZE\_KEY.
 *
 * *   CAPTION\_SIZE\_DEFAULT - default font size
 * *   CAPTION\_SIZE\_SMALL - small font size
 * *   CAPTION\_SIZE\_STANDARD - standard font size
 * *   CAPTION\_SIZE\_LARGE - large font size
 * *   CAPTION\_SIZE\_EXTRA\_LARGE - extra large font size
 */
export type CaptionFontSize =
    | "CAPTION_SIZE_DEFAULT"
    | "CAPTION_SIZE_EXTRA_LARGE"
    | "CAPTION_SIZE_LARGE"
    | "CAPTION_SIZE_SMALL"
    | "CAPTION_SIZE_STANDARD";
/**
 * Available values for the caption menu font style.
 *
 * These values may be returned for key CAPTION\_FONT\_STYLE\_KEY.
 *
 * *   CAPTION\_FONT\_DEFAULT - default font style
 * *   CAPTION\_FONT\_STYLE1 - Monospaced with serifs (similar to Courier)
 * *   CAPTION\_FONT\_STYLE2 - Proportionally spaced with serifs (similar to Times New Roman)
 * *   CAPTION\_FONT\_STYLE3 - Monospaced without serifs (similar to Helvetica Monospaced)
 * *   CAPTION\_FONT\_STYLE4 - Proportionally spaced without serifs (similar to Arial and Swiss)
 * *   CAPTION\_FONT\_STYLE5 - Casual font type (similar to Dom and Impress)
 * *   CAPTION\_FONT\_STYLE6 - Cursive font type (similar to Coronet and Marigold)
 * *   CAPTION\_FONT\_STYLE7 - Small capitals (similar to Engravers Gothic)
 */
export type CaptionFontStyle =
    | "CAPTION_FONT_DEFAULT"
    | "CAPTION_FONT_STYLE0"
    | "CAPTION_FONT_STYLE1"
    | "CAPTION_FONT_STYLE2"
    | "CAPTION_FONT_STYLE3"
    | "CAPTION_FONT_STYLE4"
    | "CAPTION_FONT_STYLE5"
    | "CAPTION_FONT_STYLE6"
    | "CAPTION_FONT_STYLE7";
/**
 * Available keys for the caption menu.
 *
 * *   CAPTION\_ONOFF\_KEY - caption state
 * *   CAPTION\_MODE\_KEY - caption mode
 * *   CAPTION\_FONT\_SIZE\_KEY - caption font size
 * *   CAPTION\_FONT\_STYLE\_KEY - caption font style
 * *   CAPTION\_FONT\_COLOR\_KEY - caption font color
 * *   CAPTION\_FONT\_OPACITY\_KEY - caption font opacity mode
 * *   CAPTION\_BG\_COLOR\_KEY - caption background color
 * *   CAPTION\_BG\_OPACITY\_KEY - caption background opacity mode
 * *   CAPTION\_EDGE\_TYPE\_KEY - caption text edge type
 * *   CAPTION\_EDGE\_COLOR\_KEY - caption edge color
 * *   CAPTION\_WINDOW\_COLOR\_KEY - caption window color (only US)
 * *   CAPTION\_WINDOW\_OPACITY\_KEY - caption window opacity mode (only US)
 */
export type CaptionInfoKey =
    | "CAPTION_BG_COLOR_KEY"
    | "CAPTION_BG_OPACITY_KEY"
    | "CAPTION_EDGE_COLOR_KEY"
    | "CAPTION_EDGE_TYPE_KEY"
    | "CAPTION_FONT_COLOR_KEY"
    | "CAPTION_FONT_OPACITY_KEY"
    | "CAPTION_FONT_SIZE_KEY"
    | "CAPTION_FONT_STYLE_KEY"
    | "CAPTION_MODE_KEY"
    | "CAPTION_ONOFF_KEY"
    | "CAPTION_WINDOW_COLOR_KEY"
    | "CAPTION_WINDOW_OPACITY_KEY";
/**
 * Available values for the caption menu mode.
 *
 * These values may be returned for key CAPTION\_MODE\_KEY.
 *
 * *   CAPTION\_MODE\_DEFAULT - default mode
 * *   CAPTION\_MODE\_SERVICE1 - standard service 1 (Primary Caption Service)
 * *   CAPTION\_MODE\_SERVICE2 - standard service 2 (Secondary Language Service)
 * *   CAPTION\_MODE\_SERVICE3 - standard service 3
 * *   CAPTION\_MODE\_SERVICE4 - standard service 4
 * *   CAPTION\_MODE\_SERVICE5 - standard service 5
 * *   CAPTION\_MODE\_SERVICE6 - standard service 6
 * *   CAPTION\_MODE\_CC1 - Primary Synchronous Caption Service
 * *   CAPTION\_MODE\_CC2 - Special Non-Synchronous Service
 * *   CAPTION\_MODE\_CC3 - Secondary Synchronous Caption Service
 * *   CAPTION\_MODE\_CC4 - Special Non-Synchronous Service
 * *   CAPTION\_MODE\_TEXT1 - Text Service 1
 * *   CAPTION\_MODE\_TEXT2 - Text Service 2
 * *   CAPTION\_MODE\_TEXT3 - Text Service 3
 * *   CAPTION\_MODE\_TEXT4 - Text Service 4
 */
export type CaptionMode =
    | "CAPTION_MODE_CC1"
    | "CAPTION_MODE_CC2"
    | "CAPTION_MODE_CC3"
    | "CAPTION_MODE_CC4"
    | "CAPTION_MODE_DEFAULT"
    | "CAPTION_MODE_SERVICE1"
    | "CAPTION_MODE_SERVICE2"
    | "CAPTION_MODE_SERVICE3"
    | "CAPTION_MODE_SERVICE4"
    | "CAPTION_MODE_SERVICE5"
    | "CAPTION_MODE_SERVICE6"
    | "CAPTION_MODE_TEXT1"
    | "CAPTION_MODE_TEXT2"
    | "CAPTION_MODE_TEXT3"
    | "CAPTION_MODE_TEXT4";
/**
 * Available values for the caption menu opacity.
 *
 * These values may be returned for keys CAPTION\_FONT\_OPACITY\_KEY, CAPTION\_BG\_OPACITY\_KEY and CAPTION\_WINDOW\_OPACITY\_KEY.
 */
export type CaptionOpacity =
    | "CAPTION_OPACITY_DEFAULT"
    | "CAPTION_OPACITY_FLASHING"
    | "CAPTION_OPACITY_SOLID"
    | "CAPTION_OPACITY_TRANSLUCENT"
    | "CAPTION_OPACITY_TRANSPARENT";
/**
 * Available values for the caption state.
 *
 * These values may be returned for key CAPTION\_ONOFF\_KEY.
 *
 * *   CAPTION\_OFF - caption menu is turned off
 * *   CAPTION\_ON - caption menu is turned on
 */
export type CaptionState = "CAPTION_OFF" | "CAPTION_ON";
/**
 * An enumerator that indicates the type of composite filter.
 *
 * Following values are supported:
 *
 * *   UNION - Indicates that the composite is a union of filters ("OR" operator)
 * *   INTERSECTION - Indicates that the composite is an intersection of filters ("AND" operator)
 */
export type CompositeFilterType = "INTERSECTION" | "UNION";
/**
 * Enumeration for connectivity types of connection.
 *
 * The following values are supported:
 *
 * *   IP - Internet Protocol connectivity. IP includes all internet connectivity (UDP, TCP, IPV4, IPV6).
 * *   PREFER\_UDP - UDP is preferred
 * *   PREFER\_TCP - TCP is preferred
 * *   IPV4\_ONLY - Internet Protocol version 4 connectivity only
 * *   IPV6\_ONLY - Internet Protocol version 6 connectivity only
 * *   ALL - All connectivities
 */
export type ConnectivityType = "ALL" | "IP" | "IPV4_ONLY" | "IPV6_ONLY" | "PREFER_TCP" | "PREFER_UDP";
/**
 * Defines whether a content directory is stored on internal or external storage (such as a removable memory card).
 *
 * *   INTERNAL - corresponds to internal content directory storage.
 * *   EXTERNAL - corresponds to external content directory storage.
 *
 * @note _deprecated_ 5.5 Deprecated since 5.5.
 */
export type ContentDirectoryStorageType = "EXTERNAL" | "INTERNAL";
/**
 * Defines the type of content such as an image, video, audio, or any other.
 *
 * *   IMAGE - corresponds to image content.
 * *   VIDEO - corresponds to video content.
 * *   AUDIO - corresponds to audio content.
 * *   OTHER - corresponds to other content.
 *
 * @remark "OTHER" type is added since Tizen 2.1 and since 4.0 it is optional type, related to [http://tizen.org/feature/content.scanning.others](http://tizen.org/feature/content.scanning.others) feature.
 * One can check "OTHER" type support using systeminfo API with tizen.systeminfo.getCapability(_"http://tizen.org/feature/content.scanning.others"_).
 */
export type ContentType = "AUDIO" | "IMAGE" | "OTHER" | "VIDEO";
/**
 * Data types.
 *
 * *   MAP - corresponds to map data type
 * *   SQL - corresponds to SQL data type
 */
export type DataType = "MAP" | "SQL";
/**
 * An enumerator to indicate 3D effect mode.
 *
 * *   OFF - identifier for 3DEffect mode off
 * *   TOP\_BOTTOM - Left image at the top, right image at the bottom
 * *   SIDE\_BY\_SIDE - Left image at the left side, right image at the right
 * side
 * *   LINE\_BY\_LINE - Left and right image interlaced
 * by row
 * *   VERTICAL\_STRIP - Left and right image interlaced
 * by column
 * *   FRAME\_SEQUENCE - Left and right image interlaced by frame
 * *   CHECKER\_BD - Checkerboard (only for PC or game console sources)
 * *   FROM\_2D\_TO\_3D - Left and right image computed from
 * non-stereoscopic image
 */
export type Display3DEffectMode =
    | "CHECKER_BD"
    | "FRAME_SEQUENCE"
    | "FROM_2D_TO_3D"
    | "LINE_BY_LINE"
    | "OFF"
    | "SIDE_BY_SIDE"
    | "TOP_BOTTOM"
    | "VERTICAL_STRIPE";
/**
 * An enumerator to indicate 3D mode state.
 *
 * *   NOT\_CONNECTED - The device (e.g. Blu-ray player) supports 3D mode but a 3D display is not connected.
 * *   NOT\_SUPPORTED - The device does not support 3D mode.
 * *   READY - The device supports 3D mode and it can display 3D mode.
 */
export type Display3DModeState = "NOT_CONNECTED" | "NOT_SUPPORTED" | "READY";
/**
 * An enumerator to indicate the network type.
 *
 * The following values are supported:
 *
 * *   CELLULAR - Indicates that the download operation is allowed in the cellular network only.
 * *   WIFI - Indicates that the download operation is allowed in the Wi-Fi network only.
 * *   ALL - Indicates that the download operation is allowed in all network types.
 *
 * @since 2.1
 */
export type DownloadNetworkType = "ALL" | "CELLULAR" | "WIFI";
/**
 * An enumerator to indicate the state of a download operation.
 *
 * The following values are supported:
 *
 * *   QUEUED - Indicates that the download operation is listed in a queue.
 * *   DOWNLOADING - Indicates that the download operation is in progress.
 * *   PAUSED - Indicates that the download operation is in a paused state by user request.
 * *   CANCELED - Indicates that the download operation is canceled by user request.
 * *   COMPLETED - Indicates that the download operation is in a completed state.
 * *   FAILED - Indicates that the download operation has failed due to some reasons.
 * *   ABANDONED - Indicates that the download operation has been abandoned.
 */
export type DownloadState = "ABANDONED" | "CANCELED" | "COMPLETED" | "DOWNLOADING" | "FAILED" | "PAUSED" | "QUEUED";
/**
 * Specifies the data change event types. The possible values are:
 *
 * *   SQL\_UPDATE - SQL update event
 * *   SQL\_INSERT - SQL insert event
 * *   SQL\_DELETE - SQL delete event
 * *   MAP\_SET - Map update event
 * *   MAP\_ADD - Map add event
 * *   MAP\_REMOVE - Map remove event
 *
 * @since 4.0
 */
export type EventType = "MAP_ADD" | "MAP_REMOVE" | "MAP_SET" | "SQL_DELETE" | "SQL_INSERT" | "SQL_UPDATE";
/**
 * Specifies an exposure balance program for an image.
 *
 * Some additional information can be found in the [List of digital camera modes](http://en.wikipedia.org/wiki/List_of_digital_camera_modes) article.
 *
 * *   NOT\_DEFINED - Exposure program info is not present or is unknown
 * *   MANUAL - In the manual mode both shutter speed and aperture are independently set manually (with ISO sensitivity also set manually)
 * *   NORMAL - Corresponds to normal exposure program info.
 * *   APERTURE\_PRIORITY - aka A, Av(Aperture value) mode enables manual control of the aperture, and shutter speed is calculated by the camera for proper exposure (given an ISO sensitivity)
 * *   SHUTTER\_PRIORITY - aka S, Tv(Time value) mode enables manual control of the shutter speed, and aperture is calculated by the camera for proper exposure (given an ISO sensitivity)
 * *   CREATIVE\_PROGRAM - Program mode makes the camera calculate both shutter speed and aperture (given a manually or automatically selected ISO)
 * *   ACTION\_PROGRAM - Action or sports modes increase ISO and use a faster shutter speed to capture an action
 * *   PORTRAIT\_MODE - Portrait mode widens the aperture to throw the background out of focus. The camera may recognize and focus on a human face
 * *   LANDSCAPE\_MODE - Landscape modes use a small aperture to gain depth of a field
 */
export type ExposureProgram =
    | "ACTION_PROGRAM"
    | "APERTURE_PRIORITY"
    | "CREATIVE_PROGRAM"
    | "LANDSCAPE_MODE"
    | "MANUAL"
    | "NORMAL"
    | "NOT_DEFINED"
    | "PORTRAIT_MODE"
    | "SHUTTER_PRIORITY";
/**
 * Specifies the file mode when it is opened.
 *
 * The file modes defined by this enumerator are:
 *
 * *   a - append access.
 * *   r - read-only access.
 * *   rw - read and write access.
 * *   rwo - read and write access. Original file content are deleted.
 * *   w - write access.
 *
 * @remark _rwo_ mode is supported since Tizen 5.0. It will not be recognized by deprecated functions.
 */
export type FileMode = "a" | "r" | "rw" | "rwo" | "w";
/**
 * Specifies the state of the storage.
 *
 * *   MOUNTED - The device is mounted and can be browsed.
 * *   REMOVED - The device has been removed. This states applies only to external drives.
 * *   UNMOUNTABLE - The device cannot be mounted due to an error.
 */
export type FileSystemStorageState = "MOUNTED" | "REMOVED" | "UNMOUNTABLE";
/**
 * Specifies the type of storage.
 *
 * *   INTERNAL - Internal storage is a storage that cannot be removed, such as a flash memory.
 * *   EXTERNAL - External storage is removable storage, such as a USB drive or a memory card.
 */
export type FileSystemStorageType = "EXTERNAL" | "INTERNAL";
/**
 * Filter match flags.
 *
 * These values are supported:
 *
 * *   EXACTLY - Indicates that an attribute value should match exactly with the specified default value.
 * For strings, this type of comparison is case-sensitive.
 * *   FULLSTRING - Indicates String-based comparison and that the attribute value should match the whole string (case insensitive).
 * *   CONTAINS - Indicates that an attribute value should contain the specified string. This type of comparison works only on strings and is case insensitive.
 * *   STARTSWITH - Indicates that an attribute value should start with the specified string.
 * This type of comparison works only on strings and is case insensitive.
 * *   ENDSWITH - Indicates that an attribute value should end with the specified string. This type of comparison works only on strings and is case insensitive.
 * *   EXISTS - Indicates that a filter comparison should match if the specified attribute exists.
 */
export type FilterMatchFlag = "CONTAINS" | "ENDSWITH" | "EXACTLY" | "EXISTS" | "FULLSTRING" | "STARTSWITH";
/**
 * Defines the orientation of an image.
 *
 * *   NORMAL - corresponds to normal image content orientation.
 * *   FLIP\_HORIZONTAL - corresponds to horizontal flip image content orientation.
 * *   ROTATE\_180 - corresponds to rotate 180 degrees image content orientation.
 * *   FLIP\_VERTICAL - corresponds to vertical flip image content orientation.
 * *   TRANSPOSE - corresponds to transpose image content orientation.
 * *   ROTATE\_90 - corresponds to rotate 90 degrees image content orientation.
 * *   TRANSVERSE - corresponds to transverse image content orientation.
 * *   ROTATE\_270 - corresponds to rotate 270 degrees image content orientation.
 */
export type ImageContentOrientation =
    | "FLIP_HORIZONTAL"
    | "FLIP_VERTICAL"
    | "NORMAL"
    | "ROTATE_180"
    | "ROTATE_270"
    | "ROTATE_90"
    | "TRANSPOSE"
    | "TRANSVERSE";
/**
 * An enumerator to indicate the units of measurement for specifying the measurement unit when calling **getRect()**.
 *
 * *   px - pixel unit
 * *   % - percentage unit for specifying relative size
 */
export type MeasurementUnit = "%" | "px";
/**
 * The media controller ability support values.
 *
 * *   YES - Ability is supported.
 * *   NO - Ability is not supported.
 * *   UNDECIDED - The support of ability is not set.
 *
 * @since 5.5
 */
export type MediaControllerAbilitySupport = "NO" | "UNDECIDED" | "YES";
/**
 * Media Controller content age rating.
 *
 * Each value represents the minimum age restriction for the media.
 *
 * @since 5.5
 */
export type MediaControllerContentAgeRating =
    | "1"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "ALL";
/**
 * Content type.
 *
 * *   IMAGE - content type for images.
 * *   MUSIC - content type for music.
 * *   VIDEO - content type for videos.
 * *   OTHER - content type for other media.
 * *   UNDECIDED - content type for unspecified media types.
 *
 * @since 5.5
 */
export type MediaControllerContentType = "IMAGE" | "MUSIC" | "OTHER" | "UNDECIDED" | "VIDEO";
/**
 * Types of supported media controller display modes.
 *
 * *   LETTER\_BOX - Letter box display mode type.
 * *   ORIGIN\_SIZE - Origin size display mode type.
 * *   FULL\_SCREEN - Full screen display mode type.
 * *   CROPPED\_FULL - Cropped full screen display mode type.
 *
 * @since 5.5
 */
export type MediaControllerDisplayModeType = "CROPPED_FULL" | "FULL_SCREEN" | "LETTER_BOX" | "ORIGIN_SIZE";
/**
 * The media controller rotation values.
 *
 * *   ROTATION\_NONE - Display is not rotated.
 * *   ROTATION\_90 - Display is rotated by 90°.
 * *   ROTATION\_180 - Display is rotated by 180°.
 * *   ROTATION\_270 - Display is rotated by 270°.
 *
 * @since 5.5
 */
export type MediaControllerDisplayRotationType = "ROTATION_180" | "ROTATION_270" | "ROTATION_90" | "ROTATION_NONE";
/**
 * Defines media playback state.
 *
 * *   PLAY - Corresponds to the "playing" media controller playback state.
 * *   PAUSE - Corresponds to the "paused" media controller playback state.
 * *   STOP - Corresponds to the "stopped" media controller playback state.
 * *   NEXT - Corresponds to the "moving to next" media controller playback state.
 * *   PREV - Corresponds to the "moving to previous" media controller playback state.
 * *   FORWARD - Corresponds to the "forwarding" media controller playback state.
 * *   REWIND - Corresponds to the "rewinding" media controller playback state.
 */
export type MediaControllerPlaybackState = "FORWARD" | "NEXT" | "PAUSE" | "PLAY" | "PREV" | "REWIND" | "STOP";
/**
 * Defines states for repeating media.
 *
 * The possible states are:
 *
 * *   REPEAT\_OFF - repeating is disabled.
 * *   REPEAT\_ONE - repeating one media.
 * *   REPEAT\_ALL - repeating all media.
 *
 * @since 5.5
 */
export type MediaControllerRepeatState = "REPEAT_ALL" | "REPEAT_OFF" | "REPEAT_ONE";
/**
 * Search category.
 *
 * *   NO\_CATEGORY - No search category.
 * *   TITLE - Search by title.
 * *   ARTIST - Search by artist.
 * *   ALBUM - Search by album.
 * *   GENRE - Search by genre.
 * *   TPO - Search by Time Place Occasion.
 *
 * @since 5.5
 */
export type MediaControllerSearchCategory = "ALBUM" | "ARTIST" | "GENRE" | "NO_CATEGORY" | "TITLE" | "TPO";
/**
 * The media controller server state.
 *
 * *   ACTIVE - Corresponds to active server state.
 * *   INACTIVE - Corresponds to inactive server state.
 */
export type MediaControllerServerState = "ACTIVE" | "INACTIVE";
/**
 * The media controller simple ability types. Simple means, that each ability is described by a single [MediaControllerAbilitySupport](#MediaControllerAbilitySupport) value and is not a part of a complex ability structure.
 *
 * *   PLAYBACK\_POSITION - Ability to change playback position.
 * *   SHUFFLE - Ability to change shuffle mode.
 * *   REPEAT - Ability to change repeat state.
 * *   PLAYLIST - Ability to add/change/remove playlists.
 * *   CLIENT\_CUSTOM - Ability to receive custom commands from media controller clients.
 * *   SEARCH - Ability to receive search requests from media controller clients.
 * *   SUBTITLES - Ability to receive requests for subtitles mode change from media controller clients.
 * *   MODE\_360 - Ability to receive requests for spherical (360°) mode change from media controller clients.
 *
 * @since 5.5
 */
export type MediaControllerSimpleAbility =
    | "CLIENT_CUSTOM"
    | "MODE_360"
    | "PLAYBACK_POSITION"
    | "PLAYLIST"
    | "REPEAT"
    | "SEARCH"
    | "SHUFFLE"
    | "SUBTITLES";
/**
 * Enumeration for policy of observation.
 *
 * The following values are supported:
 *
 * *   IGNORE\_OUT\_OF\_ORDER - observation request for most up-to-date notifications only
 * *   ACCEPT\_OUT\_OF\_ORDER - observation request for all notifications including stale notifications
 */
export type ObservePolicy = "ACCEPT_OUT_OF_ORDER" | "IGNORE_OUT_OF_ORDER";
/**
 * Enumeration for type of observation.
 *
 * The following values are supported:
 *
 * *   NO\_TYPE - no action of observation
 * *   REGISTER - action of registering observation
 * *   DEREGISTER - action of unregistering observation
 */
export type ObserveType = "DEREGISTER" | "NO_TYPE" | "REGISTER";
/**
 * An enumerator to indicate permissions.
 *
 * *   NONE - Clears or removes permissions
 * *   READ - Permission to read data
 * *   REMOVE - Permission to remove data
 * *   READ\_REMOVE - Permission to read and remove data
 */
export type PermissionType = "NONE" | "READ" | "READ_REMOVE" | "REMOVE";
/**
 * Enumeration for result of presence response.
 *
 * The following values are supported:
 *
 * *   OK - successful action of presence
 * *   STOPPED - stopped action of presence
 * *   TIMEOUT - no response of presence for some time
 */
export type PresenceResponseResultType = "OK" | "STOPPED" | "TIMEOUT";
/**
 * Enumeration for trigger type of presence. It is set only if a PresenceResponseResultType is OK.
 *
 * The following values are supported:
 *
 * *   CREATED - resource creation operation of server
 * *   UPDATED - resource update operation of server
 * *   DESTROYED - resource destruction operation of server
 */
export type PresenceTriggerType = "CREATED" | "DESTROYED" | "UPDATED";
/**
 * A push registration state.
 *
 * *   REGISTERED - The application is registered to the push server.
 * *   UNREGISTERED - The application is not registered to the push server.
 *
 * @since 3.0
 */
export type PushRegistrationState = "REGISTERED" | "UNREGISTERED";
/**
 * Enumeration for quality of service level.
 *
 * The following values are supported:
 *
 * *   HIGH - for a high quality of service. acknowledgments are used to confirm delivery.
 * *   LOW - for a low quality of service. packet delivery is best effort
 */
export type QosLevel = "HIGH" | "LOW";
/**
 * Enumeration for result of response.
 *
 * The following values are supported:
 *
 * *   SUCCESS - result of response for success
 * *   ERROR - result of response for something error
 * *   RESOURCE\_CREATED - result of response for resource has created
 * *   RESOURCE\_DELETED - result of response for resource has deleted
 * *   RESOURCE\_CHANGED - result of response for resource has changed
 * *   SLOW - result of response for slow resource
 * *   FORBIDDEN - result of response for accessing unauthorized resource
 */
export type ResponseResult =
    | "ERROR"
    | "FORBIDDEN"
    | "RESOURCE_CHANGED"
    | "RESOURCE_CREATED"
    | "RESOURCE_DELETED"
    | "SLOW"
    | "SUCCESS";
/**
 * An enumerator that indicates the sorting order.
 *
 * Following values are supported:
 *
 * *   ASC - Indicates that the sorting order is ascending
 * *   DESC - Indicates that the sorting order is descending
 */
export type SortModeOrder = "ASC" | "DESC";
/**
 * Device Orientation Status.
 *
 * SystemInfo reports the orientation of the device depending on the type of the device and physical position of the device relative to vertical direction.
 * A "phone type device" is a device for which the portrait position is the natural orientation.
 * A "tab type device" is a device for which the landscape position is basic working orientation.
 *
 * | SystemInfoDeviceOrientationStatus | Phone type device | Tablet type device |
 * | ----- | ----- | ----- |
 * | PORTRAIT_PRIMARY |  Natural position |  Rotated 90 degrees right (clockwise) |
 * | PORTRAIT_SECONDARY |  Upside down, in other words rotated 180 degrees |  Rotated 90 degrees left (anticlockwise) |
 * | LANDSCAPE_PRIMARY |  Rotated 90 degrees left (anticlockwise) |  Natural position |
 * | LANDSCAPE_SECONDARY |  Rotated 90 degrees right (clockwise) |  Upside down, in other words rotated 180 degrees |
 *
 * @since 2.0
 */
export type SystemInfoDeviceOrientationStatus =
    | "LANDSCAPE_PRIMARY"
    | "LANDSCAPE_SECONDARY"
    | "PORTRAIT_PRIMARY"
    | "PORTRAIT_SECONDARY";
/**
 * The low memory state of a device.
 *
 * *   NORMAL - indicating the remaining memory is sufficient for an application to run
 * *   WARNING - indicating the remaining memory is insufficient. Low memory warnings may happen differently according to the system
 *
 * @since 2.3
 */
export type SystemInfoLowMemoryStatus = "NORMAL" | "WARNING";
/**
 * IP configuration types.
 *
 * *   NONE - Default value when network connection is not available
 * *   STATIC - Manual IP configuration
 * *   DYNAMIC - Configured IP using DHCP client
 * *   AUTO - Configured IP from Auto IP pool (169.254/16). Later with DHCP client, if available
 * *   FIXED - IP cannot be modified
 *
 * @since 2.4
 */
export type SystemInfoNetworkIpMode = "AUTO" | "DYNAMIC" | "FIXED" | "NONE" | "STATIC";
/**
 * Data Network Type.
 * @since 2.0
 * @remark NET\_PROXY is supported since Tizen 3.0
 */
export type SystemInfoNetworkType =
    | "2.5G"
    | "2G"
    | "3G"
    | "4G"
    | "ETHERNET"
    | "NET_PROXY"
    | "NONE"
    | "UNKNOWN"
    | "WIFI";
/**
 * Device profile.
 *
 * @since 2.2
 *
 * @remark MOBILE, WEARABLE and TV are supported since Tizen 2.3.
 * @note _deprecated_ 2.3 MOBILE\_WEB
 * @note _deprecated_ 2.3 MOBILE\_FULL MOBILE\_FULL and MOBILE\_WEB are deprecated since 2.3. Beginning with Tizen 2.3, MOBILE is returned instead.
 */
export type SystemInfoProfile = "MOBILE" | "MOBILE_FULL" | "MOBILE_WEB" | "TV" | "WEARABLE";
/**
 * The device property identifier.
 *
 * @since 2.0
 * @remark CAMERA\_FLASH is supported since Tizen 2.4
 * @remark ETHERNET\_NETWORK is supported since Tizen 2.4
 * @remark LOCALE and PERIPHERAL are supported since Tizen 2.1
 * @remark MEMORY is supported since Tizen 2.3
 * @remark NET\_PROXY\_NETWORK is supported since Tizen 3.0
 * @remark VIDEOSOURCE is supported since Tizen 2.3
 * @remark ADS is supported since Tizen 3.0
 * @remark SERVICE\_COUNTRY, SOURCE\_INFO and PANEL are supported since Tizen 5.5
 */
export type SystemInfoPropertyId =
    | "ADS"
    | "BATTERY"
    | "BUILD"
    | "CAMERA_FLASH"
    | "CELLULAR_NETWORK"
    | "CPU"
    | "DEVICE_ORIENTATION"
    | "DISPLAY"
    | "ETHERNET_NETWORK"
    | "LOCALE"
    | "MEMORY"
    | "NETWORK"
    | "NET_PROXY_NETWORK"
    | "PANEL"
    | "PERIPHERAL"
    | "SERVICE_COUNTRY"
    | "SIM"
    | "SOURCE_INFO"
    | "STORAGE"
    | "VIDEOSOURCE"
    | "WIFI_NETWORK";
/**
 * SIM State.
 * @since 2.1
 */
export type SystemInfoSimState =
    | "ABSENT"
    | "INITIALIZING"
    | "NETWORK_LOCKED"
    | "PIN_REQUIRED"
    | "PUK_REQUIRED"
    | "READY"
    | "SIM_LOCKED"
    | "UNKNOWN";
/**
 * An enumerator to indicate the type of video source.
 *
 * *   TV - The input source from TV
 * *   AV - The input source from Component video, three cables, each with RCA plugs (3 or more channels)
 * *   SVIDEO - S-Video(Super-Video) and Y/C (2 channels)
 * *   COMP - The input source from Composite video (1 channel)
 * *   PC - The input source from personal computer (15-pin VGA connector)
 * *   HDMI - The input source from HDMI(High-Definition Multimedia Interface)
 * *   SCART - The input source from SCART(21-pin connector)
 * *   DVI - The input source from DVI(Digital Visual Interface)
 * *   MEDIA - The input source from media
 *
 * @since 2.3
 */
export type SystemInfoVideoSourceType = "AV" | "COMP" | "DVI" | "HDMI" | "MEDIA" | "PC" | "SCART" | "SVIDEO" | "TV";
/**
 * Wi-Fi Encryption Type.
 *
 * *   NONE - No encryption
 * *   WEP - Wired Equivalent Privacy encryption
 * *   TKIP - Temporal Key Integrity Protocol encryption
 * *   AES - Advanced Encryption Standard
 * *   TKIP\_AES\_MIXED - TKIP and AES are both supported
 *
 * @since 2.4
 */
export type SystemInfoWifiEncryptionType = "AES" | "NONE" | "TKIP" | "TKIP_AES_MIXED" | "WEP";
/**
 * Wi-Fi Security Mode.
 *
 * *   NONE - Open security type
 * *   WEP - Wired Equivalent Privacy
 * *   WPA\_PSK - Wi-Fi Protected Access with Pre-Shared Key (PSK)
 * *   WPA2\_PSK - Wi-Fi Protected Access version 2 with Pre-Shared Key (PSK)
 * *   EAP - Extensible Authentication Protocol
 *
 * @since 2.4
 */
export type SystemInfoWifiSecurityMode = "EAP" | "NONE" | "WEP" | "WPA2_PSK" | "WPA_PSK";
/**
 * Specifies the TimeDuration unit (milliseconds, seconds, minutes, hours or days).
 *
 * At least the following values must be supported:
 *
 * *   MSECS - Indicates a duration in milliseconds
 * *   SECS - Indicates a duration in seconds
 * *   MINS - Indicates a duration in minutes
 * *   HOURS - Indicates a duration in hours
 * *   DAYS - Indicates a duration in days
 */
export type TimeDurationUnit = "DAYS" | "HOURS" | "MINS" | "MSECS" | "SECS";
/**
 * Specifies command type.
 *
 * The command type defined by this enumeration is:
 *
 * *   FOREGROUND - command type used when application is foreground
 */
export type VoiceControlCommandType = "FOREGROUND";
/**
 * Specifies the result event.
 *
 * The result events defined by this enumeration are:
 *
 * *   SUCCESS - Successful result
 * *   FAILURE - Rejected result by voice control service
 */
export type VoiceControlResultEvent = "FAILURE" | "SUCCESS";
/**
 * Specifies a white balance mode for an image.
 *
 * *   AUTO - Automatic White Balance mode
 * *   MANUAL - Manual White Balance mode
 */
export type WhiteBalanceMode = "AUTO" | "MANUAL";
/**
 * An enumerator to indicate the window type.
 *
 * *   MAIN - The main video window, which can be show anywhere
 */
export type WindowType = "MAIN";
/**
 * An enumerator to indicate the z position of the TV window or the relative position of the TV window and the Web Application.
 *
 * *   FRONT - Displays the TV window in front of the Web Application
 * *   BEHIND - Displays the TV window behind the Web Application
 *
 * @since 2.4
 */
export type ZPosition = "BEHIND" | "FRONT";
