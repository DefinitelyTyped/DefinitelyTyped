/**
 * Type definitions and documentation extracted from https://geotab.github.io/sdk/software/api/reference/
 * @author Kaden Sharpin <kadensharpin@gmail.com>
 */

declare namespace GeotabApi {
    interface CredentialStore {
        get(): { credentials: Objects.Credentials; server: string } | false;
        set(credentials: Objects.Credentials, server: string): void;
        clear(): void;
    }
    interface Options {
        fullResponse: boolean;
        rememberMe: boolean;
        timeout: number;
        newCredentialStore: CredentialStore | false;
    }

    interface Authentication {
        credentials: Objects.Credentials;
        path?: string;
    }

    type Methods = keyof Parameters;

    interface Parameters {
        /**
         * Adds a new Entity to the database. This method is used to add the different entities to the database, for example Device, User or Zone. In addition to the credentials, the method will require a minimum of two parameters - the type of entity that is being added (typeName) and the entity itself. In most cases, the entity being added will need to be fully constructed. In other words, all its properties need to be defined. These requirements are defined in each of the entity definitions below.
         * Returns
         * The Id for the newly added Entity.
         */
        Add: {
            /**
             * The new Entity to add to the database.
             */
            entity: object;
            /**
             * Identifies the type of entity that is being passed to the next parameter. For example, Device.
             */
            typeName: string;
        };
        /**
         * Returns
         * A LoginResult object. It contains the Credentials property that can be used for further API calls. A result of LoginResult.Path = "ThisServer" occurs when the user is found on the current server. Otherwise, a server name is returned and the client must redirect to this new server name.
         */
        Authenticate: {
            /**
             * The user's Geotab password.
             */
            password: string;
            /**
             * The user name (typically an email address) that identifies the user being authenticated.
             */
            userName: string;
            /**
             * The database to authenticate against. If the user is registered on only one database; the user will be automatically authenticated against the correct database and this parameter can be omitted (the database name is returned in the LoginResult object). If the user is registered in multiple databases; the database value for the particular database you are trying to authenticate against must be provided.
             */
            database?: string;
        };
        /**
         * Creates new uniquely named database on a server in the federation. Requires either a valid CaptchaAnswer and/or valid MyAdmin user credentials. See https://github.com/Geotab/sample-registration for an example.
         * Returns
         * A string with the direct server the database was created on and database name. Ex. "my0.geotab.com/abc_company".
         */
        CreateDatabase: {
            /**
             * The CompanyDetails for the database.
             */
            companyDetails: object;
            /**
             * The database name (short company name with the demo_ prefix). Spaces and non alphanumeric characters will be converted to the underscore character. Maximum 58 characters.
             */
            database: string;
            /**
             * The database administrator password.
             */
            password: string;
            /**
             * The database administrator email address.
             */
            userName: string;
            /**
             * A valid CaptchaAnswer. This includes the Id used to generate a CAPTCHA image and the answer.
             */
            captchaAnswer?: object;
        };
        /**
         * Download a file for the given MediaFile. The Content-Type is determined by the file extension. Range headers are supported.
         * Returns
         * The file stream of the given MediaFile content-type.
         */
        DownloadMediaFile: {
            /**
             * The MediaFile of which to add the file for.
             */
            mediaFile: object;
            /**
             * The DataStore.
             */
            dataStore?: object;
        };
        /**
         * Generates a single use CAPTCHA image for the given key and serves the result as "image/png" content.
         * Returns
         * Serves a jpeg CAPTCHA image with content type "image/png". If they key is not unique, returns HTTP status code 409 (Conflict).
         */
        GenerateCaptcha: {
            /**
             * The globally unique id used to identify the CAPTCHA image returned.
             */
            id: string;
        };
        /**
         * Gets the Entity(s) for the given entityType. This method can be used in various ways to return all, one or some specific set of data for the Entity(s).
         * Returns
         * A IEnumerable of Entity(s).
         */
        Get: {
            /**
             * Identifies the type of entity that is being passed to the next parameter. For example, Device.
             */
            typeName: string;
            /**
             * The PropertySelector used to limit the Entity properties retrieved from the server. >> Beta: not supported by all types.
             */
            propertySelector?: object;
            /**
             * Limit the number of results that can be returned to this search.
             */
            resultsLimit?: number;
            /**
             * If null, all Entity(s) are returned. Pass a Search object (ex. DeviceSearch) with the Id property set if you need to return a specific entity. Pass a Search with properties set that needs to be searched on. For example, setting the Name property for a DeviceSearch object will return only devices that match the name provided.
             */
            search?: object;
        };
        /**
         * Gets addresses from the list of Coordinate(s), as well as any Zones in the system that contain the given coordinates.
         * Returns
         * A list of populated ReverseGeocodeAddress(s).
         */
        GetAddresses: {
            /**
             * The array of Coordinate(s).
             */
            coordinates: unknown[];
            /**
             * The DataStore.
             */
            dataStore?: object;
            /**
             * The default is false and is used for ELD compliant addresses. When set to true we will return the direction and distance to the nearest city with a population greater than 5000.
             */
            hosAddresses?: boolean;
            /**
             * The default is false and is used for static/immobile addresses. When set to true, the coordinates are being specified for a moving object. The parameter should be set true if it is known that the object being tracked has a speed.
             */
            movingAddresses?: boolean;
        };
        /**
         * Geocodes or looks up the latitude and longitude from a list of addresses.
         * Returns
         * The array of Coordinate(s) for the address or null if it cannot be found.
         */
        GetCoordinates: {
            /**
             * The formatted addresses in an array of String(s).
             */
            addresses: unknown[];
            /**
             * The DataStore.
             */
            dataStore?: object;
        };
        /**
         * Gets the count of the specified Entity type from the database. Entities that are currently inactive (the Entity's ActiveTo date is before the current time) are counted as well.
         * Returns
         * The number of entities in the database.
         */
        GetCountOf: {
            /**
             * Identifies the type of entity that is being passed to the next parameter. For example, Device.
             */
            typeName: string;
        };
        /**
         * Get a Timezone's TimeZoneInfoWithRules by the timeZoneId.
         * Returns
         * The resulting TimeZoneInfoWithRules collection.
         */
        GetDaylightSavingRules: {
            /**
             * The ID of the TimeZoneInfo.
             */
            timeZoneId: string;
            /**
             * The DataStore.
             */
            dataStore?: object;
            /**
             * Adjustment rules which end before minYear will not be returned. Default is 2000.
             */
            minYear?: number;
        };
        /**
         * Gets step-by-step driving Directions for a sequence of Waypoints including estimate travel time and distances.
         * Returns
         * Step-by-step Directions between the Waypoints.
         */
        GetDirections: {
            /**
             * The set of Waypoints.
             */
            waypoints: unknown[];
            /**
             * The DataStore.
             */
            dataStore?: object;
        };
        /**
         * Returns
         * A FeedResult containing a list of all available data and the last version in the set returned by this call.
         */
        GetFeed: {
            /**
             * Identifies the type of entity that is being passed to the next parameter. For example, Device.
             */
            typeName: string;
            /**
             * Last retrieved version. All new data that has arrived after this version will be returned in this call, up to a maximum of resultsLimit data records. The FeedResult returned by the feed method will contain the highest version for subsequent calls. When starting a new feed, if this value is not provided, the call will return only the toVersion (last version in the system). The start date can be specified in the search argument.
             */
            fromVersion?: string;
            /**
             * The PropertySelector used to limit the Entity properties retrieved from the server. >> Beta: not supported by all types.
             */
            propertySelector?: object;
            /**
             * The maximum number of records to return. The maximum value is 50,000 unless otherwise stated above, such as for User, Route, etc. If resultsLimit is not specified, the maximum value is used by default.
             */
            resultsLimit?: number;
            /**
             * The search object for the type of data to return. The properties of this object will be used to filter returned data. Providing a search parameter can have performance implications similar to using the Get method. See the type related search objects for more details.
             */
            search?: object;
        };
        /**
         * Obtains the maximum posted road speed limit for a device's trips for the given dates/times. If the from date and to date are in the middle of the trip, the data for the whole trip are included.
         * Returns
         * A set of posted maximum road speed limits encountered during the course of the trip with the DateTime of the occurrence.
         */
        GetRoadMaxSpeeds: {
            /**
             * The DataStore.
             */
            dataStore?: object;
            /**
             * Search for RoadMaxSpeeds with this: DeviceSearch. Available DeviceSearch options are:.
             * Id
             */
            deviceSearch?: object;
            /**
             * Search for maximum road speed limits that were encountered at this date or after.
             */
            fromDate?: string;
            /**
             * Search for maximum road speed limits that were encountered at this date or before.
             */
            toDate?: string;
        };
        /**
         * Gets system time in UTC (Coordinated Universal Time).
         * Returns
         * The system DateTime when the call was processed on the server. This is in UTC format.
         */
        GetSystemTimeUtc: {};
        /**
         * Get a collection of TimeZoneInfo (Olson time zones).
         * Returns
         * A collection of TimeZoneInfo.
         */
        GetTimeZones: {};
        /**
         * The version of the server.
         * Returns
         * A string with the current version of MyGeotab running on the server.
         */
        GetVersion: {};
        /**
         * The version information of the server.
         * Returns
         * The VersionInformation.
         */
        GetVersionInformation: {};
        /**
         * Optimizes a set of Waypoint(s).
         * Returns
         * A set of optimized Waypoint.
         */
        OptimizeWaypoints: {
            /**
             * The original Waypoint(s) (Maximum 25).
             */
            waypoints: unknown[];
            /**
             * The DataStore.
             */
            dataStore?: object;
        };
        /**
         * Permanently removes an Entity and its associated data. The Entity object must have an Id field. Remaining fields are optional. Note: the Entity does not function as a filter.
         */
        Remove: {
            /**
             * The Entity to be removed.
             */
            entity: object;
            /**
             * Identifies the type of entity that is being passed to the next parameter. For example, Device.
             */
            typeName: string;
        };
        /**
         * Modify an Entity which is an object in the database. The id of the object must be populated.
         */
        Set: {
            /**
             * The Entity to be modified.
             */
            entity: object;
            /**
             * Identifies the type of entity that is being passed to the next parameter. For example, Device.
             */
            typeName: string;
        };
        /**
         * Set the User's password.
         * Returns
         * Task representing completion
         */
        SetUserPassword: {
            /**
             * The new password to be set for the current user.
             */
            newPassword?: string;
        };
        /**
         * Upload a file for the corresponding MediaFile using multipart/form-data POST request.
         */
        UploadMediaFile: {
            /**
             * The MediaFile of which to add the file for.
             */
            mediaFile: object;
            /**
             * The DataStore.
             */
            dataStore?: object;
        };
    }

    namespace Objects {
        /**
         * Used to make API calls against a MyGeotab web server. This object is typically used when using the API from a Microsoft .Net language, like C#, VB.Net or managed C++. It makes it easy to invoke the various methods and receive the results. It also automates of some tasks such as handling a database that was moved from one server to another or credentials expiring. This class is thread safe.
         * The maximum number of concurrent connections per server is 64, provided by the default HttpMessageHandler. It can be increased/decreased by providing a custom instance of HttpMessageHandler.
         */
        interface API {
            /**
             * The specific database on the server to which the API call is being made.
             */
            database: string;
            /**
             * The result of the login request.
             */
            loginResult: object;
            /**
             * The user's password.
             */
            password: string;
            /**
             * The name of the server that the API call is being made to.
             */
            server: string;
            /**
             * The token generated from the authentication call which can be used to make the API call instead of the password.
             */
            sessionId: string;
            /**
             * The timeout for the requests in milliseconds.
             */
            timeout: number;
            /**
             * The username (typically an email address) that identifies the user being authenticated.
             */
            userName: string;
        }
        /**
         * Add-Ins are used to extend the functionality provided by MyGeotab and Geotab Drive. An Add-In is JavaScript, HTML and CSS loaded into the MyGeotab or Geotab Drive portal and resides directly inside the user interface. This allows third-parties to create a seamless user experience and provide solutions that would otherwise require the user to visit a different website altogether. More information on developing Add-Ins..
         */
        interface AddIn {
            /**
             * The AddInConfiguration.
             * Configuration is used by non-marketplace add-ins.
             */
            configuration: object;
            /**
             * The error message if there was an issue with Add-In.
             */
            errorMessage: string;
            /**
             * The marketplace Add-In Url.
             * Url is used only by marketplace Add-Ins.
             */
            url: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Represents populated Add-In with configuration.
         */
        interface AddInConfiguration {
            /**
             * An array of CustomSecurityId that are added to the list of features available when editing clearances.
             */
            customSecurityIds: unknown[];
            /**
             * A value indicating whether Add-In is going to setup the securityIds for viewing support.
             */
            enableViewSecurityId: boolean;
            /**
             * Custom pages and/or buttons (Embedded code).
             */
            files: object;
            /**
             * The install callback URL.
             */
            installCallbackUrl: string;
            /**
             * A value indicating whether the Add-In is signed.
             */
            isSigned: boolean;
            /**
             * An array of custom pages and/or buttons (External references).
             * Can be any of these types: Button, Menu, Map
             */
            items: unknown[];
            /**
             * The unique MyGeotab Marketplace Add-In key assigned by Geotab.
             * If there’s no plan to get your Add-In to the Marketplace, you can leave out the key/value pair from the configuration.
             */
            key: string;
            /**
             * The name of this Add-In.
             */
            name: string;
            /**
             * A value indicating whether Add-In is executed upon log out within the Drive App.
             */
            onShutdown: boolean;
            /**
             * A value indicating whether Add-In is executed initially on start up within the Drive App.
             */
            onStartup: boolean;
            /**
             * The digital signature of the Add-In.
             */
            signature: string;
            /**
             * The Add-In solution Id.
             */
            solutionId: string;
            /**
             * The email address for support related to this Add-In.
             */
            supportEmail: string;
            /**
             * The uninstall callback URL.
             */
            uninstallCallbackUrl: string;
            /**
             * The Add-In application version.
             */
            version: string;
        }
        /**
         * The object used to specify the arguments when searching for AddInConfiguration.
         */
        interface AddInConfigurationSearch {
            /**
             * The name of this Add-In.
             */
            name: string;
            /**
             * The email address for support related to this Add-In.
             */
            supportEmail: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A class that holds data stored by an add-in.
         */
        interface AddInData {
            /**
             * The add-in identifier.
             */
            addInId: string;
            /**
             * The Details string as a serialized JSON object.
             */
            details: object;
            /**
             * The list of Group(s) the AddInData belongs to.
             */
            groups: unknown[];
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for AddIn.
         */
        interface AddInSearch {
            /**
             * The AddInConfigurationSearch.
             * Configuration is used by non-marketplace add-ins.
             */
            configuration: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * An AnnotationLog is a comment that can be associated with a DutyStatusLog. The Driver is the author of the AnnotationLog.
         */
        interface AnnotationLog {
            /**
             * The annotation text associated with the log.
             */
            comment: string;
            /**
             * The date and time the log was created.
             */
            dateTime: string;
            /**
             * The User who created the log.
             */
            driver: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for AnnotationLog(s).
         */
        interface AnnotationLogSearch {
            /**
             * Search for AnnotationLogs which have a comment that contains this String. Wildcard can be used by prepending/appending "%" to string.
             */
            comment: string;
            /**
             * Search for AnnotationLogs that were recorded at this date or after.
             */
            fromDate: string;
            /**
             * Search for AnnotationLogs that were recorded at this date or before.
             */
            toDate: string;
            /**
             * Search for AnnotationLogs with this UserSearch Id.
             * Available UserSearch options are:.
             * Id
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The inner object for the ApplicationInformation information in VersionInformation.
         */
        interface ApplicationVersionInformation {
            /**
             * The branch.
             */
            branch: string;
            /**
             * The build.
             */
            build: string;
            /**
             * The commit.
             */
            commit: string;
            /**
             * The build and commit together.
             */
            full: string;
        }
        /**
         * Entry of events, operations and issues for tracking purposes. Entries can be added and read but cannot be edited.
         */
        interface Audit {
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The date and time the audit was logged.
             */
            dateTime: string;
            /**
             * The audit type name.
             */
            name: string;
            /**
             * The name of the user associated with the audit entry.
             */
            userName: string;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching Audit entries.
         */
        interface AuditSearch {
            /**
             * Search for audit entries that were recorded at this date or after.
             */
            fromDate: string;
            /**
             * Search for entities that contain specific keywords in all wildcard string-searchable fields.
             */
            keywords: unknown[];
            /**
             * Search for audit entries with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".
             */
            name: string;
            /**
             * Search for audit entries that were recorded before this date.
             */
            toDate: string;
            /**
             * Search for audit entries with this User Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".
             */
            userName: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * This is binary data representing anything that can be stored. BinaryData can use this to store images but the data can be any custom data, including custom engine information types. The type of the data is defined by the BinaryDataType.
         */
        interface BinaryData {
            /**
             * The BinaryDataType.
             */
            binaryType: string;
            /**
             * The Controller for the BinaryData specified.
             */
            controller: object;
            /**
             * The binary data for the BinaryData object.
             */
            data: string;
            /**
             * The date and time of the logging of the data.
             */
            dateTime: string;
            /**
             * The Device on which the binary data was recorded.
             */
            device: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for BinaryData.
         */
        interface BinaryDataSearch {
            /**
             * Search for BinaryData that has this BinaryDataType.
             */
            binaryDataType: string;
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any BinaryData that are assigned to that Device.
             * Providing the Groups will search for BinaryData for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroup
             */
            deviceSearch: object;
            /**
             * Search for BinaryData records that were logged at this date or after.
             */
            fromDate: string;
            /**
             * Search for BinaryData records that were logged at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents the specific binary format of data being stored in the BinaryData object.
         */
        interface BinaryDataType {
            /**
             * Calibration Id.
             */
            calibrationId: string;
            /**
             * ECU Make.
             */
            ecuMake: string;
            /**
             * Data about the manufacturer part number reported by the ECU.
             */
            ecuManufacturerPartNumber: string;
            /**
             * SData about the manufacturer serial number reported by the ECU.
             */
            ecuManufacturerSerialNumber: string;
            /**
             * ECU Model.
             */
            ecuModel: string;
            /**
             * Engine Serial Number.
             */
            engineSerialNumber: string;
            /**
             * Data reported by the manufacturer.
             */
            manufacturerData: string;
            /**
             * No data.
             */
            none: string;
            /**
             * Software Version.
             */
            softwareVersion: string;
            /**
             * Software Version Full.
             */
            softwareVersionFull: string;
            /**
             * Software Version 1.
             */
            softwareVersionSection1: string;
            /**
             * Software Version 2.
             */
            softwareVersionSection2: string;
            /**
             * Software Version 3.
             */
            softwareVersionSection3: string;
            /**
             * Third Party Data.
             */
            thirdPartyData: string;
        }
        /**
         * A message containing a binary payload which is usually forwarded to a target device.
         */
        interface BinaryPayload {
            /**
             * The raw binary data contained in the message.
             */
            payload: number;
            /**
             * The BinaryPayloadType.
             */
            payloadType: string;
        }
        /**
         * The BinaryPayload type.
         */
        interface BinaryPayloadType {
            /**
             * BinaryPayload has no type.
             */
            none: string;
            /**
             * Represents a payload of type RequestLocation.
             */
            requestLocation: string;
        }
        /**
         * A geographic area defined by the top-left and bottom-right coordinates.
         */
        interface BoundingBox {
            /**
             * The bottom latitude. Minimum value [-90]. Maximum value [90]. Default [0].
             */
            bottom: number;
            /**
             * The left longitude. Minimum value [-180]. Maximum value [180]. Default [0].
             */
            left: number;
            /**
             * The right longitude. Minimum value [-180]. Maximum value [180]. Default [0].
             */
            right: number;
            /**
             * The top latitude. Minimum value [-90]. Maximum value [90]. Default [0].
             */
            top: number;
        }
        /**
         * Represents the Add-In Button item.
         */
        interface Button {
            /**
             * Or Sets ItemName.
             */
            buttonName: object;
            /**
             * A URL to a JavaScript file which is executed when the button is clicked.
             */
            click: string;
            /**
             * The built-in page to place the button on.
             */
            page: string;
            /**
             * Or Sets a URL to the svg image for placing it in the button label.
             */
            svgIcon: string;
        }
        /**
         * Text message content including a list of predetermined responses. Derived from TextContent.
         */
        interface CannedResponseContent {
            /**
             * The list of predetermined responses to a text message. See CannedResponseOption.
             */
            cannedResponseOptions: unknown[];
            /**
             * Contains the message text.
             */
            message: string;
            /**
             * A value indicating whether set to true this message is sent to display immediately on the Garmin device.
             * This value has no effect on messages sent from the Garmin device.
             */
            urgent: object;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * Specifies the allowed responses to a TextMessage.
         */
        interface CannedResponseOption {
            /**
             * The text options provided for the CannedResponse message reply.
             */
            text: string;
        }
        /**
         * The answer to a CAPTCHA.
         */
        interface CaptchaAnswer {
            /**
             * The answer to the CAPTCHA.
             */
            answer: string;
            /**
             * Captcha action data when using google enterprise recaptcha.
             */
            greCaptchaAction: string;
            /**
             * Captcha token data when using google enterprise recaptcha.
             */
            greCaptchaToken: string;
            /**
             * The globally unique identifier of the CAPTCHA.
             */
            id: string;
            /**
             * Captcha type
             */
            isCheckbox: boolean;
        }
        /**
         * A CAPTCHA error occurred.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface CaptchaException {}
        /**
         * Generates message content to trigger changes on a cooling unit (e.g. reefer). For more details on how the data is sent to the device, see MimeContentBase.
         */
        interface ColdChainContent {
            /**
             * The channel number to send to an Add-On or that were received from an Add-On. Mandatory field.
             */
            channelNumber: number;
            /**
             * The raw bytes to either send to an Add-On or that were received from an Add-On. Maximum 2GB can be sent in a single message.
             */
            data: string;
            /**
             * The media type of content contained in the data field. Free string, Maximum 255 characters.
             */
            mimeType: string;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * Generates message content to trigger the clearing of a fault code on a cooling unit (e.g. reefer). For more details on how the data is sent to the device, see MimeContentBase.
         */
        interface ColdChainFaultClearContent {
            /**
             * The Fault Code that is to be cleared.
             */
            faultCode: number;
            /**
             * The channel number to send to an Add-On or that were received from an Add-On. Mandatory field.
             */
            channelNumber: number;
            /**
             * The raw bytes to either send to an Add-On or that were received from an Add-On. Maximum 2GB can be sent in a single message.
             */
            data: string;
            /**
             * The media type of content contained in the data field. Free string, Maximum 255 characters.
             */
            mimeType: string;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * Generates message content to trigger the setting of a setpoint on a cooling unit (e.g. reefer). For more details on how the data is sent to the device, see MimeContentBase.
         */
        interface ColdChainSetpointSetContent {
            /**
             * The setpoint temperature (°C) that is to be set.
             */
            temperature: number;
            /**
             * The Temperature Zone that is to be set.
             */
            temperatureZone: number;
            /**
             * The channel number to send to an Add-On or that were received from an Add-On. Mandatory field.
             */
            channelNumber: number;
            /**
             * The raw bytes to either send to an Add-On or that were received from an Add-On. Maximum 2GB can be sent in a single message.
             */
            data: string;
            /**
             * The media type of content contained in the data field. Free string, Maximum 255 characters.
             */
            mimeType: string;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * Specifies the color to use to identify the Group, Rule, SecurityClearance or Zone.
         */
        interface Color {
            /**
             * Returns the alpha component of the color space (opacity) in the range 0-255.
             */
            a: number;
            /**
             * Returns the blue component of the color space in the range 0-255 from the default sRGB space.
             */
            b: number;
            /**
             * Returns the green component of the color space in the range 0-255 from the default sRGB.
             * space.
             */
            g: number;
            /**
             * Returns the red component of the color space in the range 0-255 from the default sRGB.
             * space.
             */
            r: number;
        }
        /**
         * Company details for registration.
         */
        interface CompanyDetails {
            /**
             * The company account id.
             */
            accountId: string;
            /**
             * The branding name. Maximum length [50].
             */
            brandingName: string;
            /**
             * The branding type: Co-Branding, Whitelabel.
             */
            brandingType: string;
            /**
             * The city where company office is located. Maximum length [256].
             */
            city: string;
            /**
             * Free text field. Maximum length [1000].
             */
            comments: string;
            /**
             * The company name. Maximum length [256].
             */
            companyName: string;
            /**
             * The company phone number. Maximum length [50].
             */
            companyPhoneNumber: string;
            /**
             * The country where company office is located. Maximum length [2].
             */
            country: string;
            /**
             * The primary contact email.
             */
            email: string;
            /**
             * The account administrator's first name. Maximum length [100] is shared between FirstName, one added space, and LastName.
             */
            firstName: string;
            /**
             * The number of vehicles in the company fleet.
             */
            fleetSize: number;
            /**
             * The Jurisdiction for data residency purposes.
             */
            jurisdiction: string;
            /**
             * The account administrator's last name. Maximum length [100] is shared between FirstName, one added space, and LastName.
             */
            lastName: string;
            /**
             * The account administrator's phone number. Maximum length [50].
             */
            phoneNumber: string;
            /**
             * The reseller name. Maximum length [50].
             */
            resellerName: string;
            /**
             * A value indicating whether sign-up to receive news about new telematics products, events and promotions.
             */
            signUpForNews: boolean;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the admin user.Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The company website. Maximum length [256].
             */
            website: string;
        }
        /**
         * Conditions model the logic that govern a Rule and can apply to many different types of data and entities. Conditions are structured in hierarchical tree. A condition's type (see ConditionType) defines the meaning of each condition in the tree and can be an operator, special operator, data or an asset.
         * Depending on the type of condition, it can have a minimum of 0 and maximum of 1 entity properties (Device, Driver, Diagnostic, WorkTime, Zone or ZoneType) defined per condition. Operator conditions (OR, AND, >, <, ==, NOT) will not have any entity properties populated. Special Operator conditions evaluate against special types of data such as Aux data, Zones, WorkHours, etc. and may have the entity property populated and/or a child condition populated with a Data condition. Asset conditions will only have the asset entity property populated.
         * The unit of measure for data is described either by the related Diagnostic's UnitOfMeasure or as follows:
         * A tree of conditions can define simple or complex rules and can be very powerful. Please take into consideration all possible consequences of a series of rules. Overly complex, poorly written or an excessive number of rules can have undesirable performance effects.
         * This class is in development. Its public interface is a subject to change.
         * Distance: Meters (m)
         * Speed: Kilometers Per Hour (km/h)
         * Duration: Seconds
         */
        interface Condition {
            /**
             * Child condition(s) of this condition.
             */
            children: object;
            /**
             * The ConditionType defines the meaning of this condition.
             */
            conditionType: string;
            /**
             * Specified Device associated with the condition.
             */
            device: object;
            /**
             * The Diagnostic to compare the value of.
             */
            diagnostic: object;
            /**
             * Specified Driver associated with the condition.
             */
            driver: object;
            /**
             * Specified Group associated with the condition.
             */
            group: object;
            /**
             * The specified value to evaluate against.
             */
            value: number;
            /**
             * The WorkTime that the event must occur inside/outside of for the violation to occur.
             */
            workTime: object;
            /**
             * Specified Zone associated with the condition.
             */
            zone: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Defines the different types of Condition(s).
         */
        interface ConditionType {
            /**
             * Data: Evaluate the condition against active or inactive FaultData. Include a child diagnostic condition with related fault Diagnostic or NoDiagnostic to detect any FaultData.
             */
            activeOrInactiveFault: string;
            /**
             * Work Hours Operator: Occurs after the Device's assigned WorkTime.
             */
            afterDeviceWorkHours: string;
            /**
             * Work Hours Operator: Occurs after the WorkTime assigned to this condition.
             */
            afterRuleWorkHours: string;
            /**
             * Operator: Condition for "And" operations. "And" conditions must have two or more children that will act as the operands in the equation.
             */
            and: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 1 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux1: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 2 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux2: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 3 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux3: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 4 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux4: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 5 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux5: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 6 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux6: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 7 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux7: string;
            /**
             * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 8 value. Auxiliary conditions can have the value of 0 (False) or 1 (True).
             */
            aux8: string;
            /**
             * Data: Exception event for whenever DVIRDefect is detected.
             */
            dVIRDefect: string;
            /**
             * Asset: Apply to the Device specified in this condition. This will take priority over the Group(s) assigned to the Rule. When no asset condition is specified the rule will apply to all assets in the rule's groups.
             */
            device: string;
            /**
             * Work Hours Operator: Occurs during the Device's assigned WorkTime.
             */
            deviceWorkHours: string;
            /**
             * Data: Distance Between GPS points in meters.
             */
            distanceBetweenGps: string;
            /**
             * Value Operator: The duration of the child condition must continue to be true for a distance longer than the value of this condition in km.
             */
            distanceLongerThan: string;
            /**
             * Value Operator: The duration of the child condition must continue to be true for no longer distance than the value of this condition in km.
             */
            distanceShorterThan: string;
            /**
             * Asset: Apply to the Device that the Driver specified in this condition is assigned to. This will take priority over the Group(s) assigned to the Rule. When no asset condition is specified the rule will apply to all assets in the rule's groups.
             */
            driver: string;
            /**
             * Data: Time Between GPS points in seconds.
             */
            durationBetweenGps: string;
            /**
             * Value Operator: The duration of the child condition must continue to be true for longer than the value of this condition in seconds.
             */
            durationLongerThan: string;
            /**
             * Value Operator: The duration of the child condition must continue to be true for no longer than the value of this condition in seconds.
             */
            durationShorterThan: string;
            /**
             * Zone Operator: Evaluate if the related asset(s) are entering the bounds a Zone specified in this condition.
             */
            enteringArea: string;
            /**
             * Zone Operator: Evaluate if the related asset(s) are exiting the bounds a Zone specified in this condition.
             */
            exitingArea: string;
            /**
             * Operator: True when the expected distance of the child condition meets this conditions value in km.
             */
            expectedDistance: string;
            /**
             * Operator: True when the expected duration of the child condition meets this conditions value in seconds.
             */
            expectedDuration: string;
            /**
             * Data: Evaluate the condition against active FaultData. Include a child diagnostic condition with related fault Diagnostic or NoDiagnostic to detect any FaultData.
             */
            fault: string;
            /**
             * Data: Evaluate the condition against StatusData related to a particular Diagnostic. This condition will have the Diagnostic property populated and is used in conjunction with (as child of) an operator (IsValueMoreThan, IsValueLessThan, IsValueEqualTo, AnyData).
             */
            filterStatusDataByDiagnostic: string;
            /**
             * Operator : Condition applies to a fine grained Group under the Rule's Group hierarchy. This is used to separate conditions in a single rule where different groups require different conditions. For example group "Heavy Truck" has a lower harsh braking value than group "Passenger Car" with those conditions "Or"ed  together in the same rule.
             */
            group: string;
            /**
             * Ignition Operator: Evaluate against the asset(s) ignition value. Ignition conditions can have the value of 0 (Off) or 1 (On).
             */
            ignition: string;
            /**
             * Zone Operator: Evaluate if related the asset(s) are inside the Zone specified by this condition.
             */
            insideArea: string;
            /**
             * Operator: Invert the results of the child condition(s).
             */
            invertResult: string;
            /**
             * Data: Is the asset driving. Extract a sequence of values of +1 (at start of driving), -1 (at beginning of stoppage), 0 (state unknown: usually occurs at start and the end of available span of the LogRecord(s)).
             */
            isDriving: string;
            /**
             * Operator: The result of the child condition is equal to value of this condition.
             */
            isValueEqualTo: string;
            /**
             * Operator: The result of the child condition is less than value of this condition.
             */
            isValueLessThan: string;
            /**
             * Operator: The result of the child condition is less than a percentage of the value of this condition.
             */
            isValueLessThanPercent: string;
            /**
             * Operator: The result of the child condition is greater than value of this condition.
             */
            isValueMoreThan: string;
            /**
             * Operator: The result of the child condition is greater than a percentage of the value of this condition.
             */
            isValueMoreThanPercent: string;
            /**
             * Operator: The result of the child condition is plus/minus the value of this condition.
             */
            isValueThreshold: string;
            /**
             * Data: No Pre or Post DVIR check is performed between working days.NoDVIRCheck is obsolete as of v5.7.2002. Replaced by NoPreDVIRCheck and NoPostDVIRCheck.
             */
            noDVIRCheck: string;
            /**
             * Data: No Pre or Post DVIR check is performed between working days.
             */
            noPostDVIRCheck: string;
            /**
             * Data: No Pre or Post DVIR check is performed between working days.
             */
            noPreDVIRCheck: string;
            /**
             * Operator: Condition for "Or" operations. "Or" conditions must have two or more children that will act as the operands in the equation.
             */
            or: string;
            /**
             * Zone Operator: Evaluate if the related asset(s) are outside the Zone specified in this condition.
             */
            outsideArea: string;
            /**
             * Work Hours Operator: Occurs during the WorkTime assigned to this condition.
             */
            ruleWorkHours: string;
            /**
             * Data: The speed of the asset in km/h. Compare against this value using an operator. Example: IsValueMoreThan(value) - child of Speed condition.
             */
            speed: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h. Compare against this value using an operator and comparing to speed.
             */
            speedLimit: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h.
             * Used as measurement and filtered by its parent filters.
             */
            speedLimitAsMeasurement: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h. Compare against this value using an operator and comparing to speed, uses commercial speed data only.
             */
            speedLimitCommercial: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h. Compare against this value using an operator and comparing to speed, uses commercial speed data only; excludes estimate speed values.
             */
            speedLimitCommercialExcludingEstimates: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h. Compare against this value using an operator and comparing to speed, uses community speed data only.
             */
            speedLimitCommunity: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h. Compare against this value using an operator and comparing to speed, uses community speed data only; excludes estimate speed values.
             */
            speedLimitCommunityExcludingEstimates: string;
            /**
             * Data: The posted road speed of the road the asset is located on in km/h. Compare against this value using an operator and comparing to speed; excludes estimate speed values.
             */
            speedLimitExcludingEstimates: string;
            /**
             * Data: Evaluate against the related asset(s) trip stop value.
             */
            stop: string;
            /**
             * Data: The trip distance of the asset in km. Compare against this value using an operator. Example: DistanceLongerThan(value) - child of TripDistance condition.
             */
            tripDistance: string;
            /**
             * Data: The trip duration of the asset in seconds. Compare against this value using an operator. Example: DurationLongerThan(value) - child of TripDuration condition.
             */
            tripDuration: string;
            /**
             * Zone Operator: Evaluate if the related asset(s) are stopped inside the Zone specified in this condition.
             */
            zoneStop: string;
        }
        /**
         * The controller that the diagnostic belongs to. Controllers could be ABS controller, suspension controller etc. The available controllers are listed in the KnownId.
         */
        interface Controller {
            /**
             * The controller diagnostic code (if applicable).
             */
            code: number;
            /**
             * The message identification code for the controller of the diagnostic (if applicable).
             */
            codeId: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The standard (format) of the Source.
             */
            source: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The object used to specify the arguments when searching for Controller(s).
         */
        interface ControllerSearch {
            /**
             * Search for Controllers with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".
             */
            name: string;
            /**
             * Search for Controllers with this SourceSearch Id.
             * Available SourceSearch options are:.
             * Id
             */
            sourceSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A coordinate on the earth's surface. "x" is longitude and "y" is latitude.
         */
        interface Coordinate {
            /**
             * Specify x for the longitude.
             */
            x: number;
            /**
             * Specify y for the latitude.
             */
            y: number;
        }
        /**
         * The authentication credentials for a User used when making calls to MyGeotab.
         */
        type Credentials =
            & {
                /**
                 * The database name.
                 */
                database: string;
                /**
                 * The MyGeotab username.
                 */
                userName: string;
            }
            & (
                | {
                    /**
                     * The users login password. This can be used instead of providing a session Id. It is mutually exclusive with SessionId.
                     */
                    password: string;
                    sessionId?: never;
                }
                | {
                    /**
                     * The session Id is a token which is generated from an authentication call and can be used instead of providing the password each time. It is mutually exclusive with Password.
                     */
                    sessionId: string;
                    password?: never;
                }
            );
        /**
         * Generic Custom Data from a GO unit that was sent through from a third-party device that is attached to the serial port.
         */
        interface CustomData {
            /**
             * The custom data in binary format. Default [empty].
             */
            data: string;
            /**
             * The date and time the log was created.
             */
            dateTime: string;
            /**
             * The Device for which the data was recorded.
             */
            device: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for CustomData.
         */
        interface CustomDataSearch {
            /**
             * Search for CustomData recorded for this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for CustomData that was recorded at this date or after.
             */
            fromDate: string;
            /**
             * Search for CustomData that was recorded at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A custom telematics device that is used in MyGeotab. This is used for extensibility and is based on the Device object.
         */
        interface CustomDevice {
            /**
             * The date the device is active from. Default [MinDate].
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * A custom security ID which can be used to control access to custom Add-Ins.
         */
        interface CustomSecurityId {
            /**
             * The name of the custom security ID.
             */
            name: string;
            /**
             * The translations of the custom security ID.
             */
            translations: unknown[];
        }
        /**
         * A custom telematics automotive vehicle device that is used in MyGeotab. This is used for extensibility and is based on the CustomDevice object.
         */
        interface CustomVehicleDevice {
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * The capacity of all usable fuel tanks in litres. Default [null].
             */
            fuelTankCapacity: number;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * A value used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * The date the device is active from. Default [MinDate].
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * A DVIRDefect is a Defect that can be associated with a DVIRLog. It contains repair information such as repair DateTime, repair User which can be used to store additional information for the defect.
         */
        interface DVIRDefect {
            /**
             * The Defect which this DVIRDefect belongs to.
             */
            defect: object;
            /**
             * The DefectRemarks which this DVIRDefect has.
             */
            defectRemarks: unknown[];
            /**
             * The date and time the DVIRDefect was repaired.
             */
            repairDateTime: string;
            /**
             * The RepairStatusType of this DVIRDefect.
             */
            repairStatus: string;
            /**
             * The User who repaired the DVIRDefect.
             */
            repairUser: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * A DVIRLog is a Driver Vehicle Inspection Report which is prepared by a driver regarding defects in parts of a vehicle associated with a Device or Trailer. Once the report is completed with optional driver remarks, the DVIR log will be acted upon, and marked as repairs made or not necessary (usually by another User). The driver then will mark the log as certified for being safe or unsafe to operate based on the effectiveness of any repairs made or comments for repairs not performed.
         */
        interface DVIRLog {
            /**
             * The authority address for the driver at the time of this log. Maximum length [255] Default [""].
             */
            authorityAddress: string;
            /**
             * The authority name for the driver at the time of this log. Maximum length [255] Default [""].
             */
            authorityName: string;
            /**
             * The User who certified the repairs (or comments if no repairs were made) to the
             * Device or
             * Trailer.
             */
            certifiedBy: object;
            /**
             * The date the Device or
             * Trailer was certified.
             */
            certifyDate: string;
            /**
             * The remark recorded by the User who certified the repairs
             * (or no repairs made) to the Device or
             * Trailer.
             */
            certifyRemark: string;
            /**
             * The list of DVIRDefects DVIRDefect(s) for this log.
             */
            dVIRDefects: object;
            /**
             * The date and time the log was created.
             */
            dateTime: string;
            /**
             * The defect list Group of the log.
             */
            defectList: object;
            /**
             * The list of defect Group(s) for this log.
             */
            defects: object;
            /**
             * The Device associated with this log.
             * Either a Device or a Trailer is defined for a log, not both (if
             * the device is set, trailer must be null).
             */
            device: object;
            /**
             * The User who created the log.
             */
            driver: object;
            /**
             * The remark recorded by the driver for this log.
             */
            driverRemark: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * A value indicating whether the DVIR log was inspected by the driver. If false, the log was
             * inspected by an inspector. Default [true].
             */
            isInspectedByDriver: boolean;
            /**
             * Identifier for whether or not the Device or
             * Trailer was certified as safe to operate.
             */
            isSafeToOperate: boolean;
            /**
             * The load height, if it was manually recorded by the driver. Default [null].
             */
            loadHeight: number;
            /**
             * The load width, if it was manually recorded by the driver. Default [null].
             */
            loadWidth: number;
            /**
             * An object with the location information of the log.
             */
            location: object;
            /**
             * The DVIRLogType of the log. Default [Unknown].
             */
            logType: string;
            /**
             * The odometer or hubometer of the vehicle or trailer, respectively, if it was manually recorded by the driver. Default [null].
             */
            odometer: number;
            /**
             * The date the Device or
             * Trailer was repaired.
             */
            repairDate: string;
            /**
             * The remark recorded by the User who repaired the
             * Device or
             * Trailer.
             */
            repairRemark: string;
            /**
             * The User who repaired the
             * Device or
             * Trailer.
             */
            repairedBy: object;
            /**
             * The Trailer associated with this log.
             * Either a Device or a Trailer is defined for a log, not both (if
             * the trailer is set, device must be null).
             */
            trailer: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The object used to specify the arguments when searching for DVIRLog(s). A trailerSearch and deviceSearch cannot be used at the same time because a DVIR log entry is only ever associated with one asset type (for instance, if the "device" is set, "trailer" is always null and vice versa).
         */
        interface DVIRLogSearch {
            /**
             * Search for DVIRLogs certified by a User.
             * Available UserSearch options are:.
             * Id
             */
            certifiedBySearch: object;
            /**
             * Search for DVIRLogs that are a member of these defect Group(s).
             * Available
             * GroupSearch options are:.
             * Id
             */
            defectSearch: unknown[];
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any DVIRLogs that are assigned to that Device.
             * Providing the Groups will search for DVIRLogs for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for DVIRLogs that were recorded at this date or after.
             */
            fromDate: string;
            /**
             * Search for DVIRLogs and include boundary logs outside the from and to dates
             * (for example, the log immediately preceding the from date).
             */
            includeBoundaryLogs: boolean;
            /**
             * Search for DVIRLogs which are safe or are not safe to operate.
             */
            isSafeToOperate: boolean;
            /**
             * Search for DVIRLogs that match the specified DVIRLogTypes.
             */
            logTypes: unknown[];
            /**
             * Search for DVIRLogs repaired by a User.
             * Available UserSearch options are:.
             * Id
             */
            repairedBySearch: object;
            /**
             * Search for DVIRLogs that were recorded at this date or before.
             */
            toDate: string;
            /**
             * Filter by the TrailerSearch options. Providing a trailer ID will
             * search for any DVIRLogs that are assigned to that Trailer.
             * Providing the Groups will search for DVIRLogs for that have Trailer in that group.
             * Available TrailerSearch options are:
             * IdGroups
             */
            trailerSearch: object;
            /**
             * Search for DVIRLogs with this UserSearch Id.
             * Available UserSearch options are:.
             * Id
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The type of DVIRLog.
         */
        interface DVIRLogType {
            /**
             * In-trip log type
             */
            inTrip: string;
            /**
             * Post-trip log type
             */
            postTrip: string;
            /**
             * Pre-trip log type
             */
            preTrip: string;
            /**
             * Unknown log type
             */
            unknown: string;
        }
        /**
         * A Diagnostic that represents measurement data from the vehicle (as opposed to fault codes).
         */
        interface DataDiagnostic {
            /**
             * The conversion factor for the diagnostic parameter; this is related to the UnitOfMeasure.
             */
            conversion: number;
            /**
             * The length of the diagnostic data parameter in bytes.
             */
            dataLength: number;
            /**
             * The DiagnosticSignal reference list. This property is obsolete and doesn't store or return any value except null.
             */
            diagnosticSignals: unknown[];
            /**
             * The offset value of the diagnostic parameter.
             */
            offset: number;
            /**
             * The diagnostic parameter code number.
             */
            code: number;
            /**
             * The applicable Controller for the diagnostic parameter.
             */
            controller: object;
            /**
             * The DiagnosticType (source) of the diagnostic parameter.
             */
            diagnosticType: string;
            /**
             * The FaultResetMode of the diagnostic (whether the fault resets automatically or manually).
             */
            faultResetMode: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * A value indicating whether the diagnostic is readonly
             */
            isReadOnly: boolean;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The Source for the diagnostic (the type of diagnostic code).
             */
            source: object;
            /**
             * The tampering diagnostic codes.
             */
            tamperingDiagnostics: number;
            /**
             * The UnitOfMeasure applicable to the diagnostic parameter.
             */
            unitOfMeasure: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * Message that can deliver data to a component of a GO device.
         */
        interface DataToComponentContent {
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * The DateTimeComparator.
         */
        interface DateTimeComparator {
            /**
             * DateTime is after or equal to the value.
             */
            afterOrEqual: string;
            /**
             * DateTime is before the value.
             */
            before: string;
        }
        /**
         * This exception occurs if the system makes a database request that could not succeed because of connection failure or data change.
         */
        interface DbUnavailableException {
            /**
             * The message associated with the DbUnavailableException.
             */
            message: string;
        }
        /**
         * DebugData is generated by Geotab GO devices for internal debugging or troubleshooting purposes. This may include information regarding the state of the modem, firmware or conditions that the device is experiencing.
         */
        interface DebugData {
            /**
             * The binary data.
             */
            data: string;
            /**
             * The date and time the DebugData log was created.
             */
            dateTime: string;
            /**
             * The DebugReason; used for troubleshooting/debugging purposes only.
             */
            debugReason: object;
            /**
             * The Device associated with the vehicle.
             */
            device: object;
            /**
             * The Driver of the vehicle at the time the DebugData log entry was created.
             */
            driver: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching DebugData.
         */
        interface DebugDataSearch {
            /**
             * The search for DebugData recorded for this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * The date after which DebugData was recorded.
             */
            fromDate: string;
            /**
             * The date before which DebugData was recorded.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents a Defect entity. This defines the one to one relationship between a DefectSeverity and Group.
         */
        interface Defect {
            /**
             * A value indicating whether this defect is hidden in the UI. Used for parts to determine if 'other' should be shown or not.
             */
            isHidden: boolean;
            /**
             * A value indicating whether this defect must be signed off on. Used for parts to determine if the part must be explicitly marked as having defect(s) or not.
             */
            isRequired: boolean;
            /**
             * The DefectSeverity of the Defect.
             */
            severity: string;
            /**
             * The Children of this group. A list of Group(s).
             */
            children: unknown[];
            /**
             * The free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comments: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The parent Group of the selected group.
             * Not defined in the group object, the relationship is assumed by which group has this group as a child.
             */
            parent: object;
            /**
             * The string reference to add to the database entry for this group. Maximum length [255] Default [""].
             */
            reference: string;
        }
        /**
         * An DefectRemark is a remark that can be associated with a DVIRDefect.
         */
        interface DefectRemark {
            /**
             * The date and time the log was created.
             */
            dateTime: string;
            /**
             * The DVIR text associated with the log.
             */
            remark: string;
            /**
             * The User who created the log.
             */
            user: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The severity of a defect for a DVIRLog.
         */
        interface DefectSeverity {
            /**
             * Critical defect severity (vehicle or trailer is unsafe to operate)
             */
            critical: string;
            /**
             * Normal defect severity
             */
            normal: string;
            /**
             * Severity level for Unregulated Defects (vehicle or trailer is safe to operate)
             */
            unregulated: string;
        }
        /**
         * A Device represents the physical tracking device installed in the vehicle. A device and vehicle is typically synonymous since the GO tracking device is installed in a vehicle. In the case where there is no device; this is represented by "NoDeviceId". The device types that are supported are:.
         * Go9
         * Go8
         * Go7
         * Go6
         * Go5
         * Go4v3
         * CustomDevice
         */
        interface Device {
            /**
             * The date the device is active from. Default [MinDate].
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * Represents a record that holds the count of devices for a specific communication status.
         */
        interface DeviceCommunicationStatusCount {
            /**
             * The number of devices in the specified state.
             */
            count: number;
            /**
             * The DeviceCommunicationStatusState.
             */
            state: unknown;
        }
        /**
         * The object used to specify the arguments when searching for a Device.
         */
        interface DeviceSearch {
            /**
             * Search for Devices with comments matching this value. Wildcard can be used by
             * prepending/appending "%" to string. Example "%comments%".
             */
            comment: string;
            /**
             * Search for Devices with these unique Id(s). Not Supported
             * for searching for devices, only for DeviceStatusInfo and TachographDataFile.
             */
            deviceIds: unknown[];
            /**
             * Search for Devices of this DeviceType.
             */
            deviceType: string;
            /**
             * Search for Devices that were active at this date or after. Set to UTC now to search for
             * only currently active (non-archived) devices.
             */
            fromDate: string;
            /**
             * Search for Devices that are a member of these GroupSearch(s). Each GroupSearch is an object within the array.
             * Available
             * GroupSearch options are:
             * Id
             */
            groups: unknown[];
            /**
             * Search for entities that contain specific keywords in all wildcard string-searchable fields.
             */
            keywords: unknown[];
            /**
             * Search for Devices with a license plate matching this value. Wildcard can be used by
             * prepending/appending "%" to string. Example "%LicensePlate%".
             */
            licensePlate: string;
            /**
             * Search for Devices with this Name. Name is the primary description of the Device. Wildcard can be
             * used by prepending/appending "%" to string. Example "%name%".
             */
            name: string;
            /**
             * Search for a Device by its unique serial number. Wildcard can be
             * used by prepending/appending "%" to string. Example "%SerialNumber%".
             */
            serialNumber: string;
            /**
             * Search for Devices that were active at this date or before.
             */
            toDate: string;
            /**
             * Search for a Device by Vehicle Identification Number (VIN). This is the unique number assigned
             * to the vehicle during manufacturing.
             * This differs from EngineVehicleIdentificationNumber in that it is the last VIN reported
             * from the Device that was determined to be valid. Wildcard can be
             * used by prepending/appending "%" to string. Example "%VehicleIdentificationNumber%".
             */
            vehicleIdentificationNumber: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A device share represents the sharing of steaming data from a device into multiple databases. A database which is the primary device subscriber may share the data with one or many other databases.
         */
        interface DeviceShare {
            /**
             * The date that the DeviceShare was accepted.
             */
            acceptedDateTime: string;
            /**
             * The date time of when the DeviceShare was created.
             */
            dateTime: string;
            /**
             * The Int32 id that MyAdmin associates with this DeviceShare.
             */
            myAdminId: number;
            /**
             * The String serial number of the device associated with this DeviceShare.
             */
            serialNumber: string;
            /**
             * The DeviceShareStatus of this DeviceShare.
             */
            shareStatus: string;
            /**
             * The DeviceShareType of this DeviceShare.
             */
            shareType: string;
            /**
             * The name of the source database for this device share. This is the database that owns the
             * device and is allowing the sharing to occur.
             */
            sourceDatabaseName: string;
            /**
             * The name of the target database for this device share. This is the database that the device's
             * data is being shared to, and does not own the device.
             */
            targetDatabaseName: string;
            /**
             * The date that the DeviceShare was terminated.
             */
            terminatedDateTime: string;
            /**
             * The date time of when the DeviceShare status was updated. This is when the share request was
             * accepted/rejected by a target-database user or cancelled by a source-database user.
             */
            updatedDateTime: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for DeviceShare(s).
         */
        interface DeviceShareSearch {
            /**
             * Search for a DeviceShare using its MyAdmin id.
             */
            myAdminId: number;
            /**
             * Search for a DeviceShares having a given serial number.
             */
            serialNumber: string;
            /**
             * Search for DeviceShares using DeviceShareStatus.
             */
            shareStatus: string;
            /**
             * Search for DeviceShares using DeviceShareType.
             */
            shareType: string;
            /**
             * Search for DeviceShares using SourceDatabaseName matching this value. Wildcard can be used by
             * prepending/appending "%" to string. Example "%database%".
             */
            sourceDatabaseName: string;
            /**
             * Search for DeviceShares using TargetDatabaseName matching this value. Wildcard can be used by
             * prepending/appending "%" to string. Example "%database%".
             */
            targetDatabaseName: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The various statuses that a DeviceShare can have.
         */
        interface DeviceShareStatus {
            /**
             * The device share request has been approved and is active.
             */
            active: string;
            /**
             * The device share has been cancelled by the source database before it was accepted by the target.
             */
            cancelled: string;
            /**
             * The data stream failed to start for the device share.
             */
            error: string;
            /**
             * The device share request is pending.
             */
            pending: string;
            /**
             * The device share has been rejected by the target database.
             */
            rejected: string;
            /**
             * The incoming device share request has been accepted by a user on this database. This status will change to Active once the updated request has been processed.
             */
            requestApproved: string;
            /**
             * The incoming device share request has been cancelled by a user on this database before it was accepted by the target database (via the UI). This status will change to Cancelled once the updated request has been pulled from MyAdmin by the DeviceShareDownloaderService.
             */
            requestCancelled: string;
            /**
             * The incoming device share request has been declined by a user on this database (via the UI). This status will change to Rejected once the updated request has been pulled from MyAdmin by the DeviceShareDownloaderService.
             */
            requestDeclined: string;
            /**
             * The outgoing device share request has been created by a user on the source database and is waiting for MyAdmin to confirm the device share has been successfully created. This status will change to Pending once MyAdmin confirms.
             */
            requestPending: string;
            /**
             * Termination of an incoming active device share has been requested by a user on this database. This status will change to Terminated once the updated request has been processed.
             */
            requestTerminated: string;
            /**
             * The active device share has been terminated by the target database.
             */
            terminated: string;
        }
        /**
         * Represents the data flow type for a DeviceShare.
         */
        interface DeviceShareType {
            /**
             * Indicates that an active DeviceShare means that device data from a different database is being shared with this one.
             */
            incoming: string;
            /**
             * Indicates that an active DeviceShare means that device data from this database is being shared with a different one.
             */
            outgoing: string;
        }
        /**
         * The object used to specify the arguments when searching for DeviceSourceAddressInfo.
         */
        interface DeviceSourceAddressInfoSearch {
            /**
             * Gets or sets filter by the DeviceSearch options.
             * Providing a device ID will search for any device source address info that is assigned to that Device.
             * Providing the device IDs will search for device source address info that have Devices in that list.
             * Available DeviceSearch options are:
             * IdDeviceIds
             */
            deviceSearch: object;
            /**
             * The filter by error when processing.
             */
            errorType: string;
            /**
             * The flag to find the proccesed device source address.
             */
            isProcessed: boolean;
            /**
             * Gets or sets filter by the ControllerSearch options.
             * Providing a device ID will search for any device source address info that is assigned to that Source Address.
             * Providing the device IDs will search for device source address info that have Source Address in that list.
             * Available SourceAddressSearch options are:
             * IdIds
             */
            sourceAddressSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents the current state of a vehicle by providing information such as the vehicle bearing location and speed, active exception events and whether the device is currently communicating.
         */
        interface DeviceStatusInfo {
            /**
             * The bearing (heading) in integer degrees.
             * Valued between 0 and 359 inclusive. 0 represents North, 90 represents East, and so on. -1 represents unknown bearing.
             */
            bearing: number;
            /**
             * The duration between the last Trip state change (i.e. driving or stop), and the most recent date of location information.
             */
            currentStateDuration: string;
            /**
             * The most recent DateTime of the latest piece of status, gps or fault data.
             */
            dateTime: string;
            /**
             * The Device this DeviceStatusInfo belongs to.
             */
            device: object;
            /**
             * The Driver associated to the current Device.
             */
            driver: object;
            /**
             * The ExceptionEvent(s) that are currently active.
             */
            exceptionEvents: unknown[];
            /**
             * The Group(s) that the Device currently belongs to.
             */
            groups: unknown[];
            /**
             * A value indicating whether the Device is communicating.
             */
            isDeviceCommunicating: boolean;
            /**
             * A value indicating whether the current Device state. If set true, is driving. Otherwise, it is stopped.
             */
            isDriving: boolean;
            /**
             * The current latitude of the Device.
             */
            latitude: number;
            /**
             * The current longitude of the Device.
             */
            longitude: number;
            /**
             * The current vehicle speed.NaN represents an invalid speed.
             */
            speed: number;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for DeviceStatusInfo(s).
         */
        interface DeviceStatusInfoSearch {
            /**
             * The maximum number of Devices to search for when specifying a "Position".
             */
            closestAssetLimit: number;
            /**
             * Search for DeviceStatusInfo(s) from a device that matches the
             * DeviceSearch Id or in the Groups specified. This includes archived and deleted devices.
             * Available DeviceSearch options are:.
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for Status Info for Devices in the vicinity of the provided
             * Coordinate. Starting from this position, an outward search for
             * Devices will continue until the number of devices found matches the number defined in the "ClosestAssetLimit"
             * property.
             */
            position: object;
            /**
             * Search for Device Status Info associated with this UserSearch Id.
             * Available UserSearch options are:.
             * Id
             */
            userSearch: object;
        }
        /**
         * The Geotab GO device type enumeration. Geotab has produced various types of tracking devices and this device type enumeration can be used to determine which type of hardware a particular device is.
         */
        interface DeviceType {
            /**
             * Custom (third-party) device.
             */
            customDevice: string;
            /**
             * Custom (third-party) automotive vehicle tracking device.
             */
            customVehicleDevice: string;
            /**
             * GO Device.
             */
            gO2: string;
            /**
             * GO3 Tracking Device.
             */
            gO3: string;
            /**
             * GO4 Tracking Device.
             */
            gO4: string;
            /**
             * GO4v3 Tracking Device - like GO4 but with larger memory and some new functionality.
             */
            gO4v3: string;
            /**
             * GO5 Tracking Device.
             */
            gO5: string;
            /**
             * GO6 Tracking Device.
             */
            gO6: string;
            /**
             * GO7 Tracking Device.
             */
            gO7: string;
            /**
             * GO8 Tracking Device.
             */
            gO8: string;
            /**
             * GO9 Tracking Device.
             */
            gO9: string;
            /**
             * GoDrive Mobile Device.
             */
            goDriveDevice: string;
            /**
             * Unknown device type.
             */
            none: string;
            /**
             * GEOTAB unit (unsupported).
             */
            oldGeotab: string;
        }
        /**
         * Vehicle diagnostic information from the engine computer that can either be measurement data or fault code data.
         * Note: Diagnostics cannot be added, set or removed via the API.
         */
        interface Diagnostic {
            /**
             * The diagnostic parameter code number.
             */
            code: number;
            /**
             * The applicable Controller for the diagnostic parameter.
             */
            controller: object;
            /**
             * The DiagnosticType (source) of the diagnostic parameter.
             */
            diagnosticType: string;
            /**
             * The FaultResetMode of the diagnostic (whether the fault resets automatically or manually).
             */
            faultResetMode: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * A value indicating whether the diagnostic is readonly
             */
            isReadOnly: boolean;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The Source for the diagnostic (the type of diagnostic code).
             */
            source: object;
            /**
             * The tampering diagnostic codes.
             */
            tamperingDiagnostics: number;
            /**
             * The UnitOfMeasure applicable to the diagnostic parameter.
             */
            unitOfMeasure: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The object used to specify the arguments when searching for Diagnostic(s).
         */
        interface DiagnosticSearch {
            /**
             * Search for a Diagnostic by the code number.
             */
            code: object;
            /**
             * The DiagnosticType to search for in Diagnostics.
             */
            diagnosticType: string;
            /**
             * Search for Diagnostics with this Name. Wildcard can be used by prepending/appending "%" to
             * string. Example "%name%".
             */
            name: string;
            /**
             * The SourceSearch Id to search for in
             * Diagnostics. Available SourceSearch
             * options are:.
             * IdName
             */
            sourceSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Diagnostic source type of the diagnostic.
         */
        interface DiagnosticType {
            /**
             * BRP Fault.
             */
            brpFault: string;
            /**
             * Data Diagnostic.
             */
            dataDiagnostic: string;
            /**
             * GMCCC Fault.
             */
            gmcccFault: string;
            /**
             * Go Diagnostic.
             */
            goDiagnostic: string;
            /**
             * Go Device Fault.
             */
            goFault: string;
            /**
             * Legacy Proprietary Fault.
             */
            legacyFault: string;
            /**
             * No diagnostic.
             */
            none: string;
            /**
             * OBD-II (On-board Diagnostic) Fault.
             */
            obdFault: string;
            /**
             * OBD-II (On-board Diagnostic) WWH Fault.
             */
            obdWwhFault: string;
            /**
             * PID (Parameter Identifier).
             */
            pid: string;
            /**
             * Proprietary Fault.
             */
            proprietaryFault: string;
            /**
             * SID (Subsystem Identifier).
             */
            sid: string;
            /**
             * LEVC Fault.
             */
            source14Fault: string;
            /**
             * SPN (Suspect Parameter Number).
             */
            suspectParameter: string;
        }
        /**
         * A sequential set of Legs and Steps that make up directions.
         */
        interface Directions {
            /**
             * The sequence of Legs for these Directions.
             */
            legs: unknown[];
        }
        /**
         * A distribution list links a set of Rule(s) to a set of Recipient(s). When a Rule is violated each related Recipient will receive a notification of the kind defined by its RecipientType.
         */
        interface DistributionList {
            /**
             * A list of recipients that will be notified when the
             * Rule(s) are violated.
             */
            recipients: unknown[];
            /**
             * The list of Rule(s) that the Recipient(s)
             * will be notified of when broken.
             */
            rules: unknown[];
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * A driver in the system, and it is derived from User, with key ids and driver groups. If the driver is unknown then the driver is represented by "UnknownDriver".
         */
        interface Driver {
            /**
             * The home Group(s) for the driver.
             */
            driverGroups: unknown[];
            /**
             * The NFC Key's serial number associated with the driver.
             */
            keys: unknown[];
            /**
             * The driver license number of the user. Default [""].
             */
            licenseNumber: string;
            /**
             * The driver license province or state of the user. Default [""].
             */
            licenseProvince: string;
            /**
             * A value indicating whether the driver can view their own data.
             */
            viewDriversOwnDataOnly: boolean;
            /**
             * A value indicating the user accepted MyGeotab EULA revision number. Default [null].
             */
            acceptedEULA: number;
            /**
             * The list of active dashboards for the user, displayed on the dashboard page. Default [empty].
             */
            activeDashboardReports: object;
            /**
             * The list of default dashboards which must show real data. Default [empty].
             */
            activeDefaultDashboards: object;
            /**
             * The date the user is active from. Default [UtcNow].
             */
            activeFrom: string;
            /**
             * The date the user is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The HOS authority address of the user. Default [""].
             */
            authorityAddress: string;
            /**
             * The HOS authority name of the user. Default [""].
             */
            authorityName: string;
            /**
             * List of all available dashboard reports to the user. Default [empty].
             */
            availableDashboardReports: unknown[];
            /**
             * The list of bookmarked pages. Default [empty].
             */
            bookmarks: string;
            /**
             * The user's stored list of custom response options to choose from when sending a TextMessage. Each item is a set of predefined response options. Default [empty].
             */
            cannedResponseOptions: unknown[];
            /**
             * The carrier number. Default [""].
             */
            carrierNumber: string;
            /**
             * A flag indicating whether the user's password requires resetting. If [true], the user will be forced to change their password on next login. Default [false].
             */
            changePassword: boolean;
            /**
             * Free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * The company address for the user. Default [""].
             */
            companyAddress: string;
            /**
             * The list of organization Group(s) that the user belongs to.
             */
            companyGroups: unknown[];
            /**
             * The name of the company for the user. Default [""].
             */
            companyName: string;
            /**
             * The user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html). Maximum length [2] Default [""]
             */
            countryCode: string;
            /**
             * The format dates will be displayed to this user. Default ["MM/dd/yy HH:mm:ss"].
             */
            dateFormat: string;
            /**
             * The default GoogleMapStyle tiles when using Google maps. Default [Roadmap].
             */
            defaultGoogleMapStyle: string;
            /**
             * The default HereMapStyle tiles when using Here Maps. Default [Roadmap].
             */
            defaultHereMapStyle: object;
            /**
             * The default map engine to use for this user. System map engines are:
             * GoogleMapsHereMapMapBox
             * Default ["MapBox"].
             */
            defaultMapEngine: string;
            /**
             * The default OpenStreetMapStyle tiles when using Open Street Maps. Default [MapBox].
             */
            defaultOpenStreetMapStyle: string;
            /**
             * The default start page to view when login is complete. Maps to the hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide].
             */
            defaultPage: string;
            /**
             * The designation or title of the employee. Maximum length [50] Default [""].
             */
            designation: string;
            /**
             * The user's preferred currency for display in the UI.
             */
            displayCurrency: object;
            /**
             * The driver's last viewed guide version. Default [0].
             */
            driveGuideVersion: number;
            /**
             * The user's preferred ElectricEnergyEconomyUnit for viewing fuel economy. Default [LitersEPer100Km].
             */
            electricEnergyEconomyUnit: string;
            /**
             * The employee number or external identifier. Maximum length [50] Default [""].
             */
            employeeNo: string;
            /**
             * A comma-separated string value indicating which features user enabled to preview. Default ["collision_detection_active_insights"].
             */
            featurePreview: string;
            /**
             * The user's preferred day to represent the start of the week. Default ["Sunday"].
             */
            firstDayOfWeek: object;
            /**
             * The first name of the user. Maximum length [255].
             */
            firstName: string;
            /**
             * The user's preferred FuelEconomyUnit for viewing fuel economy. Default [LitersPer100Km].
             */
            fuelEconomyUnit: string;
            /**
             * The HosRuleSet the user follows. Default [None].
             */
            hosRuleSet: string;
            /**
             * The unique identifier for the User. See Id.
             */
            id: string;
            /**
             * A value indicating whether the user is allowed to Adverse Driving conditions exempt. Default [true].
             */
            isAdverseDrivingEnabled: boolean;
            /**
             * The isDriver toggle, if [true] the user is a driver, otherwise [false]. Default [false].
             */
            isDriver: boolean;
            /**
             * A value indicating whether the old EULA has been accepted by the end user. Default [false].
             */
            isEULAAccepted: boolean;
            /**
             * The isEmailReportEnabled toggle, if [true] the user will receive the emailed report, otherwise [false]. Default [true].
             */
            isEmailReportEnabled: boolean;
            /**
             * A value indicating whether the user is allowed to HOS personal conveyance. Default [false].
             */
            isExemptHOSEnabled: boolean;
            /**
             * A value indicating whether labs are enabled for this user. When set to true this will enable experimental features that are still in the process of being developed. Default [false].
             */
            isLabsEnabled: boolean;
            /**
             * Whether the current regional settings is in metric units of measurement (or US/Imperial). Default [true].
             */
            isMetric: boolean;
            /**
             * A value that indicates whether news notifications are enabled for this user. Default [true].
             */
            isNewsEnabled: boolean;
            /**
             * A value indicating whether the user is allowed to HOS personal conveyance. Default [false].
             */
            isPersonalConveyanceEnabled: boolean;
            /**
             * A value indicating whether are service update notifications enabled for this user. Default [false].
             */
            isServiceUpdatesEnabled: boolean;
            /**
             * A value indicating whether the user is allowed to HOS yard move. Default [false].
             */
            isYardMoveEnabled: boolean;
            /**
             * The list of selected job priorities. Default [empty].
             */
            jobPriorities: object;
            /**
             * The user's culture identifier as a predefined CultureInfo name, Name of an existing System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"] for English.
             */
            language: string;
            /**
             * The user's last access date of the system.
             * This value updates once per day, and will not be updated on consecutive logins in the same day.
             */
            lastAccessDate: string;
            /**
             * The last name of the user. Maximum length [255].
             */
            lastName: string;
            /**
             * The list of the of the available MapViews from the live map. Default [continent of the user's selected Timezone].
             */
            mapViews: unknown[];
            /**
             * A value indicating the maximum personal conveyance distance per day in meters. Default [0].
             */
            maxPCDistancePerDay: number;
            /**
             * The list of MediaFile(s) photos of this user.
             * Currently, a user can only be associated with at most one photo.
             */
            mediaFiles: unknown[];
            /**
             * The user's email address / login name. Maximum length [255].
             */
            name: string;
            /**
             * The user's password.
             */
            password: string;
            /**
             * The user phone number with space separated country phone code. Example +1 5555555555. Maximum length [20] Default [""]
             */
            phoneNumber: string;
            /**
             * The user phone number without formatting. Maximum length [5] Default [""]
             */
            phoneNumberExtension: string;
            /**
             * The private Group(s) that the user belongs to.
             */
            privateUserGroups: unknown[];
            /**
             * The report Group(s) for reporting that this user belongs to. The selected reporting groups will allow the user to sort entities that are children of the selected groups. It will not allow them to see entities that are outside of their data access. Default [empty].
             */
            reportGroups: unknown[];
            /**
             * The security Group(s) this user belongs to; which define the user's access.
             */
            securityGroups: unknown[];
            /**
             * A flag indicating whether to show ClickOnce support warning as the default page. (legacy) Default [false].
             */
            showClickOnceWarning: boolean;
            /**
             * The IANA Timezone Id of the user. All data will be displayed in this Timezone. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The UserAuthenticationType. This value indicates the type of a
             * user's account. "BasicAuthentication" indicates a basic user. "MyAdmin" indicates a user with MyAdmin
             * credentials. "MyAdmin" users are not visible to "BasicAuthentication" users. Default [Basic].
             */
            userAuthenticationType: string;
            /**
             * A value indicating the user accepted Wifi specific EULA revision number. Default [0].
             */
            wifiEULA: number;
            /**
             * The default ZoneDisplayMode used on the map. Default [Default].
             */
            zoneDisplayMode: string;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * Message content to control a GoDevice's Driver auth list.
         */
        interface DriverAuthListContent {
            /**
             * A value indicating whether to add to or remove from the auth list. If [true] "ClearAuthList" will be set to [false] and the driver will be added to the auth list. If [false] the driver will be removed from the auth list.
             */
            addToAuthList: boolean;
            /**
             * A value indicating whether to clear the auth list. If [true] "AddToAuthList" will be set to [false] and "DriverKey" will be set to [null].
             */
            clearAuthList: boolean;
            /**
             * The Drivers Key.Key can be derived from a driver's "keys" property.
             */
            driverKey: object;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * Information about timing of a Driver change.
         */
        interface DriverChange {
            /**
             * The date and time of the driver change.
             * Note: When adding a DriverChange through API, the DateTime must NOT be in the future.
             */
            dateTime: string;
            /**
             * The Device that had the driver change.
             */
            device: object;
            /**
             * The Driver associated with the change.
             */
            driver: object;
            /**
             * The DriverChangeType.
             */
            type: string;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for a DriverChange.
         * This search defaults to searching DriverChange(s) by Driver Id when no DeviceSearch is provided.
         */
        interface DriverChangeSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any DriverChanges that are assigned to that Device.
             * Providing the Groups will search for DriverChanges for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for DriverChange records at this date or after.
             */
            fromDate: string;
            /**
             * A value indicating whether to include the last driver change before the from date or the most recent driver change (if dates are not provided).
             */
            includeOverlappedChanges: boolean;
            /**
             * Search for DriverChange records at this date or before.
             */
            toDate: string;
            /**
             * A value indicating the DriverChangeType to search for exclusively.
             */
            type: string;
            /**
             * Search for DriverChanges with this UserSearch Id or DriverGroups.
             * Available UserSearch options are:.
             * IdDriverGroupsDriverGroupFilterCondition
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Supported Driver Change Types.
         */
        interface DriverChangeType {
            /**
             * User-based Driver. Makes a Device continuously associated with particular Driver until a different driver id is assigned to the same device. First record in a trip overrides any other record encountered during the trip it was added to, except "TripDriver".Makes a Device continuously associated with a particular Driver until a different driver id is assigned to the same device.
             */
            driver: string;
            /**
             * Driver Key - based Driver. Drivers use this key type to identify themselves. This will typically be used when the driver ID relay is enabled. Makes a Device continuously associated with a particular Driver until a different driver ID is assigned to the same device.Cannot be used to add user-assigned records.
             */
            driverKey: string;
            /**
             * DriverVehicleChange log - based Driver. Auto-generated by the system to support the driver ID relay feature.Cannot be used to add user-assigned records.
             */
            driverVehicleChange: string;
            /**
             * Unknown key type.
             */
            none: string;
            /**
             * System-detected Driver reset (to UnknownDriver). Makes a Device permanently disassociate from the previous Driver due to concurrent permanent registration of the same Driver for a different device.Cannot be used to add or set DriverChange records.
             */
            resetDriver: string;
            /**
             * User-based Driver that is only active for the duration of a single trip.Makes a Device associated with a particular Driver for the duration of a single trip.
             */
            tripDriver: string;
        }
        /**
         * Detailed information for Hours of Service regulation for a driver.
         */
        interface DriverRegulation {
            /**
             * The DutyStatusAvailability.
             */
            availability: object;
            /**
             * The latest duty status log type DutyStatusLogType affecting availability or violations.
             */
            currentDutyStatus: string;
            /**
             * The cycle summaries.
             */
            cycleSummaries: unknown[];
            /**
             * The day summaries.
             */
            daySummaries: unknown[];
            /**
             * The Driver.
             */
            driver: object;
            /**
             * When off duty is needed.
             */
            offDutyNeeded: string;
            /**
             * When rest break is needed.
             */
            restBreakNeeded: string;
            /**
             * The DutyStatusViolation.
             */
            violations: unknown[];
            /**
             * The workday summaries.
             */
            workdaySummaries: unknown[];
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for DriverRegulation objects.
         */
        interface DriverRegulationSearch {
            /**
             * Search for duty status availability objects with this UserSearch.
             * Available UserSearch options are:.
             * IdGroupSearch
             */
            userSearch: object;
        }
        /**
         * Represents a severity/class code from the engine system of the specific Device.
         */
        interface DtcClass {
            /**
             * DTCClass 1 matches the GTR module B Class A definition.
             */
            a: string;
            /**
             * DTCClass 2 matches the GTR module B Class B1 definition.
             */
            b1: string;
            /**
             * DTCClass 3 matches the GTR module B Class B2 definition.
             */
            b2: string;
            /**
             * DTCClass 4 matches the GTR module B Class C Definition.
             */
            c: string;
            /**
             * DTCClass 0 is unclassified.
             */
            unclassified: string;
        }
        /**
         * Represents a severity/class code from the engine system of the specific Device.
         */
        interface DtcSeverity {
            /**
             * This value indicates to the failure that a check of the vehicle is required at next halt.
             */
            checkAtNextHalt: string;
            /**
             * This value indicates to the failure that an immediate check of the vehicle is required.
             */
            checkImmediately: string;
            /**
             * This value indicates that the failure requests maintenance only.
             */
            maintenanceOnly: string;
        }
        /**
         * An exception that occurs when adding a new object or when updating an existing object that would cause a duplicate entry to occur.
         */
        interface DuplicateException {
            /**
             * The message of the exception.
             */
            message: string;
        }
        /**
         * Driver Availability for Hours of Service regulations.
         */
        interface DutyStatusAvailability {
            /**
             * The duration of cycle duty hours left.
             */
            cycle: string;
            /**
             * Cycle available to the driver in the future.
             */
            cycleAvailabilities: unknown[];
            /**
             * The duration left before cycle rest must be taken.
             */
            cycleRest: string;
            /**
             * The User associated with the duty status availability.
             */
            driver: object;
            /**
             * The duration left for driving.
             */
            driving: string;
            /**
             * The duration of the driving break (USA only)
             */
            drivingBreakDuration: string;
            /**
             * The duration of total on-duty time left in a day.
             */
            duty: string;
            /**
             * The duty hours left since Cycle Rest.
             */
            dutySinceCycleRest: string;
            /**
             * If 16 hour exemption is available.
             */
            is16HourExemptionAvailable: boolean;
            /**
             * If adverse driving exemption is applied.
             */
            isAdverseDrivingApplied: boolean;
            /**
             * If adverse driving exemption is available.
             */
            isAdverseDrivingExemptionAvailable: boolean;
            /**
             * If off-duty deferral exemption is available.
             */
            isOffDutyDeferralExemptionAvailable: boolean;
            /**
             * If railroad exemption is available.
             */
            isRailroadExemptionAvailable: boolean;
            /**
             * Chronological array representing each day's On-duty time since beginning of cycle.
             */
            recap: unknown[];
            /**
             * The duration left before rest break must be taken.
             */
            rest: string;
            /**
             * The duration of workday left in a day. Workday is a consecutive window that begins with first on-duty.
             */
            workday: string;
        }
        /**
         * The object used to specify the arguments when searching for DutyStatusAvailability objects.
         */
        interface DutyStatusAvailabilitySearch {
            /**
             * Search for duty status availability objects with this UserSearch.
             * Available UserSearch options are:.
             * IdDriverGroupsDriverGroupFilterCondition
             */
            userSearch: object;
        }
        /**
         * The type of DutyStatusLog.
         */
        interface DutyStatusDeferralType {
            /**
             * Day one of deferral.
             */
            dayOne: string;
            /**
             * Day two of deferral.
             */
            dayTwo: string;
            /**
             * No deferral applied.
             */
            none: string;
        }
        /**
         * A DutyStatusLog is a record of duty status for Hours of Service regulations. The log is first required to have a driver, dateTime, status, and device. Location is not required and will be calculated from the device's data.
         */
        interface DutyStatusLog {
            /**
             * The list of AnnotationLog(s) which are associated with this
             * log.
             */
            annotations: unknown[];
            /**
             * The list of the co-driver User(s) for this log.
             */
            coDrivers: object;
            /**
             * The date and time the log was created.
             */
            dateTime: string;
            /**
             * The deferral minutes.
             */
            deferralMinutes: number;
            /**
             * The DutyStatusDeferralType.
             */
            deferralStatus: string;
            /**
             * The Device associated with this log.
             */
            device: object;
            /**
             * The User who created this log.
             */
            driver: object;
            /**
             * The date and time the log was edited. If the log has not been edited, this will not be set.
             */
            editDateTime: string;
            /**
             * The User that requested an edit to this log.
             */
            editRequestedByUser: object;
            /**
             * The engine hours for the Device at the DateTime of this log. The unit
             * is seconds (not hours).
             */
            engineHours: number;
            /**
             * The event code of this log
             * (Table 6; 7.20 of the ELD Final Rule).
             */
            eventCode: number;
            /**
             * The record status number of this log
             * 1 = active
             * 2 = inactive - changed
             * 3 = inactive - change requested
             * 4 = inactive - change rejected.
             */
            eventRecordStatus: number;
            /**
             * The event type number of this log
             * 1 = A change in driver's duty-status
             * 2 = An intermediate log
             * 3 = A change in driver's indication of authorized personal use of CMV or yard moves
             * 4 = A driver's certification/re-certification of records
             * 5 = A driver's login/logout activity
             * 6 = CMV's engine power up / shut down activity
             * 7 = A malfunction or data diagnostic detection occurrence
             * (Table 6; 7.25 of the ELD Final Rule).
             */
            eventType: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * If the log is hidden.
             */
            isHidden: boolean;
            /**
             * A value indicating whether the log is in transitioning state.
             */
            isTransitioning: boolean;
            /**
             * An object with the location information for the log data.
             */
            location: object;
            /**
             * The DutyStatusMalfunctionTypes of the DutyStatusLog record. As a flag it can be both a diagnostic and malfunction state
             * which is used to mark status based records (e.g. "D", "SB") as having a diagnostic or malfunction present at time of recording.
             */
            malfunction: string;
            /**
             * The odometer in meters for the Device at the DateTime of this log.
             */
            odometer: number;
            /**
             * The DutyStatusOrigin from where this log originated.
             */
            origin: string;
            /**
             * The Id of the parent DutyStatusLog.
             * Used when a DutyStatusLog is edited. When returning history, this field will be populated.
             */
            parentId: string;
            /**
             * The sequence number, which is used to generate the sequence ID.
             */
            sequence: string;
            /**
             * The DutyStatusState of the DutyStatusLog record.
             */
            state: string;
            /**
             * The DutyStatusLogType representing the driver's duty status.
             */
            status: string;
            /**
             * The date and time the log was verified. If the log is unverified, this will not be set.
             */
            verifyDateTime: string;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The object used to specify the arguments when searching for DutyStatusLog(s).
         */
        interface DutyStatusLogSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any DutyStatusLogs that are assigned to that Device.
             * Providing the Groups will search for DutyStatusLogs for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroupsUserSearch is always applied first if both DeviceSearch and UserSearch are provided.
             */
            deviceSearch: object;
            /**
             * Search for DutyStatusLogs that were recorded at this date or after.
             */
            fromDate: string;
            /**
             * Search for  DutyStatusLogs and include boundary logs outside the from and to dates
             * (for example, the log immediately preceding the from date).
             */
            includeBoundaryLogs: boolean;
            /**
             * Include modification history of the DutyStatusLog results.
             */
            includeModifications: boolean;
            /**
             * Search for DutyStatusLogs with the provided DutyStatusLogTypes.
             */
            statuses: unknown[];
            /**
             * Search for DutyStatusLogs that were recorded at this date or before.
             */
            toDate: string;
            /**
             * Search for DutyStatusLogs with this UserSearch Id.
             * Available UserSearch options are:.
             * IdGroupSearch
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The type of DutyStatusLog.
         */
        interface DutyStatusLogType {
            /**
             * Adverse weather and driving conditions exemption.
             */
            adverseWeather: string;
            /**
             * Authority status.
             */
            authority: string;
            /**
             * Canadian ELD: Cycle set to "Cycle 1"
             */
            canadaCycleOne: string;
            /**
             * Canadian ELD: Cycle set to "Cycle 2"
             */
            canadaCycleTwo: string;
            /**
             * Daily certify record.
             */
            certify: string;
            /**
             * System log for device power connection.
             */
            connected: string;
            /**
             * Drive status.
             */
            d: string;
            /**
             * Storage capacity is reached, or missing data elements exist. Applies to Malfunction or Diagnostic.
             */
            dataRecordingCompliance: string;
            /**
             * Transfer of data fails to complete. Applies to Malfunction or Diagnostic.
             */
            dataTransferCompliance: string;
            /**
             * System log for device power disconnection.
             */
            disconnected: string;
            /**
             * Engine power up record.
             */
            enginePowerup: string;
            /**
             * Engine power up in PC record.
             */
            enginePowerupPC: string;
            /**
             * Engine shutdown record.
             */
            engineShutdown: string;
            /**
             * Engine shutdown in PC record.
             */
            engineShutdownPC: string;
            /**
             * Occurs when engine information (power, motion, miles, and hours) cannot be obtained by ELD. Applies to Malfunction or Diagnostic.
             */
            engineSyncCompliance: string;
            /**
             * Exemption 16 hour.
             */
            exemption16H: string;
            /**
             * Exemption off duty deferral.
             */
            exemptionOffDutyDeferral: string;
            /**
             * Hos Disabled.
             */
            hosDisabled: string;
            /**
             * Hos Enabled.
             */
            hosEnabled: string;
            /**
             * Intermediate log for co-drivers for ELD compliance
             */
            iNT_CoDriver: string;
            /**
             * Intermediate Drive Event.
             */
            iNT_D: string;
            /**
             * Intermediate Personal Conveyance Event.
             */
            iNT_PC: string;
            /**
             * User login record.
             */
            login: string;
            /**
             * User logout record.
             */
            logoff: string;
            /**
             * Missing data elements. Applies to Malfunction or Diagnostic.
             */
            missingElementCompliance: string;
            /**
             * Off-duty status.
             */
            oFF: string;
            /**
             * On-duty status.
             */
            oN: string;
            /**
             * Canadian ELD: Operating zone set to "United States"
             */
            operatingZoneAmerica: string;
            /**
             * Canadian ELD: Operating zone set to "north of latitude 60N in Canada"
             */
            operatingZoneCanadaNorthOf60: string;
            /**
             * Canadian ELD: Operating zone set to "south of latitude 60N in Canada"
             */
            operatingZoneCanadaSouthOf60: string;
            /**
             * Other instances of Malfunction or Diagnostic.
             */
            otherCompliance: string;
            /**
             * Personal conveyance driver status.
             */
            pC: string;
            /**
             * Special type of PC, will not be interrupted by automatic logs
             */
            pC_Exempted: string;
            /**
             * ELD continually fails to acquire valid position measurement. Applies to Malfunction.
             */
            positioningCompliance: string;
            /**
             * Engine power status engages ELD within 1 minute. Applies to Malfunction or Diagnostic.
             */
            powerCompliance: string;
            /**
             * Railroad Exemption
             */
            railroadExemption: string;
            /**
             * Driver is not working in relation to a fatigue-regulated heavy vehicle who are not driving under BFM, AFM or exemption hours
             */
            rest: string;
            /**
             * Sleeper berth status.
             */
            sB: string;
            /**
             * YM, PC, or WT clearing event.
             */
            situationalDrivingClear: string;
            /**
             * When ELD date and time exceeds 10 minute offset from UTC. Applies to Malfunction.
             */
            timingCompliance: string;
            /**
             * More than 30 minutes of driving with unidentified driving. Applies to Diagnostic.
             */
            unidentifiedDrivingCompliance: string;
            /**
             * Wait time oil well driver status.
             */
            wT: string;
            /**
             * Any tasks relating to the use of the vehicle
             */
            work: string;
            /**
             * Work Exemption (permitted personal activity) refers to any work done by a driver for personal and non-commercial purposes
             */
            workExemption: string;
            /**
             * Yard move driver status.
             */
            yM: string;
        }
        /**
         * Malfunction or Diagnostic type of the DutyStatusLog.
         */
        interface DutyStatusMalfunctionTypes {
            /**
             * In a diagnostic state.
             */
            diagnostic: string;
            /**
             * Combination of ManualPosition and Diagnostic
             */
            diagnosticManualPosition: string;
            /**
             * In a malfunction state.
             */
            malfunction: string;
            /**
             * Combination of ManualPosition and Malfunction
             */
            malfunctionManualPosition: string;
            /**
             * User has inputted a manual address for the log during a position compliance diagnostic event
             */
            manualPosition: string;
            /**
             * No malfunction or diagnostic present or cleared.
             */
            none: string;
            /**
             * System has determined that the diagnostic is cleared. Not exported to FMCSA.
             */
            systemDiagnosticClear: string;
            /**
             * System has determined that the diagnostic is cleared and the vehicle was in motion. Used for PowerCompliance.
             */
            systemDiagnosticClearDriving: string;
            /**
             * User has cleared the diagnostic.
             */
            userDiagnosticClear: string;
            /**
             * User has cleared the malfunction.
             */
            userMalfunctionClear: string;
        }
        /**
         * The origin of a DutyStatusLog.
         */
        interface DutyStatusOrigin {
            /**
             * Automatic recorded by device
             */
            automatic: string;
            /**
             * Manual entry by driver.
             */
            manual: string;
            /**
             * Other authenticated user.
             */
            otherUser: string;
            /**
             * Unassigned driver.
             */
            unassigned: string;
        }
        /**
         * The state of the DutyStatusLog record.
         */
        interface DutyStatusState {
            /**
             * The log is active and has been accepted by the driver.
             */
            active: string;
            /**
             * The log is inactive. It has been removed or it is the modification history of a log.
             */
            inactive: string;
            /**
             * The log is a rejected edit request from another user.
             */
            rejected: string;
            /**
             * The log is a pending edit request from another user.
             */
            requested: string;
        }
        /**
         * A DutyStatusLog violation for a User.
         */
        interface DutyStatusViolation {
            /**
             * The maximum or minimum days limit of the duty status violation.
             */
            daysLimit: number;
            /**
             * The User associated with the duty status violation.
             */
            driver: object;
            /**
             * The driving duration of the duty status violation.
             */
            drivingDuration: string;
            /**
             * The date and time that the duty status violation started.
             */
            fromDate: string;
            /**
             * The maximum or minimum hours limit of the duty status violation.
             */
            hoursLimit: number;
            /**
             * The stated reason why the duty status violation occurred.
             */
            reason: string;
            /**
             * The date and time that the duty status violation ended.
             */
            toDate: string;
            /**
             * The DutyStatusViolationType of the duty status violation.
             */
            type: string;
        }
        /**
         * The object used to specify the arguments when searching for DutyStatusViolation(s).
         * This search has been designed to work efficiently with these combinations of parameters:
         * UserSearch + FromDate and/or ToDate
         */
        interface DutyStatusViolationSearch {
            /**
             * Search for duty status violations that were recorded at this date or after.
             */
            fromDate: string;
            /**
             * Search for duty status violations that were recorded at this date or before.
             */
            toDate: string;
            /**
             * Search for duty status violations with this UserSearch.
             * Available UserSearch options are:.
             * IdCompanyGroupsDriverGroups
             */
            userSearch: object;
        }
        /**
         * The different types of DutyStatusViolation.
         */
        interface DutyStatusViolationType {
            /**
             * Cycle limits.
             */
            cycle: string;
            /**
             * Cycle rest requirements.
             */
            cycleRest: string;
            /**
             * Daily driving limits.
             */
            dailyDriving: string;
            /**
             * Daily duty limits.
             */
            dailyDuty: string;
            /**
             * Daily off-duty requirements.
             */
            dailyOff: string;
            /**
             * Daily rest requirements.
             */
            dailyRest: string;
            /**
             * Driving limits.
             */
            driving: string;
            /**
             * On-duty limits.
             */
            duty: string;
            /**
             * On-duty since cycle rest limit.
             */
            dutySinceCycleRest: string;
            /**
             * Ewd rest requirements.
             */
            ewdRest: string;
            /**
             * Ewd work limits.
             */
            ewdWork: string;
            /**
             * Ewd work exemption limits.
             */
            ewdWorkExemption: string;
            /**
             * Rest requirements.
             */
            rest: string;
            /**
             * Work day limits
             */
            workday: string;
        }
        /**
         * Various Electric Energy Economy units Geotab supports. Currently supported units: L-e/100 km, km/L-e, kWh/100 km, Wh/km, km/kWh, MPG-e (US), MPG-e (Imp), kWh/100 miles, Wh/mile and mile/kWh.
         */
        interface ElectricEnergyEconomyUnit {
            /**
             * The kilowatt hour per 100 km unit.
             */
            kiloWhPer100Km: string;
            /**
             * The kilowatt hour per 100 miles unit.
             */
            kiloWhPer100Miles: string;
            /**
             * The kilo watt hour per kilometer.
             */
            kiloWhPerKm: string;
            /**
             * The kilo watt hour per mile.
             */
            kiloWhPerMile: string;
            /**
             * The km per kilowatt hour unit.
             */
            kmPerKiloWh: string;
            /**
             * The km per liter-e unit.
             */
            kmPerLitersE: string;
            /**
             * The liters-e per 100 km unit.
             */
            litersEPer100Km: string;
            /**
             * The miles per gallon-e (Imperial) unit.
             */
            mPGEImperial: string;
            /**
             * The miles per gallon-e (US) unit.
             */
            mPGEUS: string;
            /**
             * The mile per kilowatt hour unit.
             */
            milePerKiloWh: string;
            /**
             * The watt hour per km unit.
             */
            whPerKm: string;
            /**
             * The watt hour per mile unit.
             */
            whPerMile: string;
        }
        /**
         * Various supported Electric Energy units Geotab supports.
         */
        interface ElectricEnergyUnit {
            /**
             * The fuel gallon Imperial equivalent energy unit.
             */
            gallonImpE: string;
            /**
             * The fuel gallon US equivalent energy unit.
             */
            gallonUSE: string;
            /**
             * The kilowatt hour energy unit.
             */
            kilowattHour: string;
            /**
             * The fuel liter equivalent energy unit.
             */
            litersE: string;
            /**
             * The watt hour energy unit.
             */
            wattHour: string;
        }
        /**
         * All objects that are stored in the database are entities. They are uniquely identified by their Id which is used later to Get, modify (Set) or Remove that object. The following entities are supported:
         * A1
         * AddInData
         * AnnotationLog
         * Audit
         * BinaryPayload
         * Condition
         * Controller
         * CustomData
         * CustomDevice
         * DataDiagnostic
         * DebugData
         * Device
         * DeviceShare
         * DeviceStatusInfo
         * Diagnostic
         * DistributionList
         * Driver
         * DriverChange
         * DutyStatusAvailability
         * DutyStatusLog
         * DutyStatusViolation
         * DVIRLog
         * ExceptionEvent
         * FailureMode
         * FaultData
         * FillUp
         * FlashCode
         * FuelTaxDetail
         * FuelUsed
         * FuelTransaction
         * Go4v3
         * Go5
         * Go6
         * Go7
         * Go8
         * Go9
         * Go9B
         * GoCurve
         * GoCurveAuxiliary
         * GoDevice
         * Group
         * GroupSecurity
         * IoxAddOn
         * LogRecord
         * MediaFile
         * ParameterGroup
         * Recipient
         * RequestLocation
         * Route
         * RoutePlanItem
         * Rule
         * SecurityClearance
         * ShipmentLog
         * Source
         * StatusData
         * TachographDataFile
         * TextMessage
         * Trailer
         * TrailerAttachment
         * Trip
         * UnitOfMeasure
         * User
         * WifiHotspot
         * WorkHoliday
         * WorkTime
         * WorkTimeDetail
         * Zone
         */
        interface Entity {
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * An Entity with a version.
         */
        interface EntityWithVersion {
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The event of an exception generated by Rule violation.
         */
        interface ExceptionEvent {
            /**
             * The start date of the ExceptionEvent; at or after this date.
             */
            activeFrom: string;
            /**
             * The end date of the ExceptionEvent; at or before this date.
             */
            activeTo: string;
            /**
             * The Device specified for the device.
             */
            device: object;
            /**
             * The km distance traveled since the start of the ExceptionEvent.
             */
            distance: number;
            /**
             * The Driver specified for the device.
             */
            driver: object;
            /**
             * The duration of the violation.
             */
            duration: string;
            /**
             * The time this exception event was last updated. Default [MinDate].
             */
            lastModifiedDateTime: string;
            /**
             * The Rule which was violated.
             */
            rule: object;
            /**
             * The ExceptionEventState of the exception.
             */
            state: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for ExceptionEvent.
         * This search has been designed to work efficiently with these combinations of parameters:
         * Id
         * DeviceSearch + RuleSearch + FromDate and/or ToDate
         */
        interface ExceptionEventSearch {
            /**
             * Filter by the DeviceSearch options. Providing a Device ID will
             * search for any Exception Events recorded for that Device.
             * Providing Groups will search Exception Events recorded for Devices that are members of the provided
             * GroupSearch(s) or their children.
             * Available DeviceSearch options are:.
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for Exception Events that occurred at this date or after.
             */
            fromDate: string;
            /**
             * Search for ExceptionEvents that have been invalidated because of new data being processed.
             * The default value is [false] while using "Get" and "GetFeed" APIs.
             */
            includeInvalidated: boolean;
            /**
             * Filter by the RuleSearch options. Providing a Rule ID
             * will search for any Exception Events recorded for that Rule.
             * Available RuleSearch options are:.
             * Id
             */
            ruleSearch: object;
            /**
             * Search for Exception Events that occurred at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Specify the current state of the ExceptionEvent.
         */
        interface ExceptionEventState {
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The key of this entity that uniquely identifies it and is used when getting this entity from the database.
             */
            key: object;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
        }
        /**
         * When exceptions are created based on built-in rules, the base type is always set to "Stock". For rules which are defined by you, the base type will be "Custom". The ZoneStop base type is used to designate exceptions created specifically when a zone is configured with the "MustIdentifyStops" property set to true.
         */
        interface ExceptionRuleBaseType {
            /**
             * Custom Exception rule. All user created rules are custom rules.
             */
            custom: string;
            /**
             * Route completion rule.
             */
            routeCompletion: string;
            /**
             * Stock (canned) exception rule. These are the common rules available to switch on/off in MyGeotab.
             */
            stock: string;
            /**
             * Zone stop rule. When a Zone's MustIdentifyStops property is set to true, the system creates a rule to identify when a device is stopped in the zone. These rules are of type ZoneStop.
             */
            zoneStop: string;
        }
        /**
         * Specific categories to which the exception rules belong.
         */
        interface ExceptionRuleCategory {
            /**
             * An Application Exception Rule.
             */
            applicationExceptionRule: string;
            /**
             * A user management Exception Rule that includes either engine and non-engine rules or combination of them.
             */
            userExceptionRules: string;
            /**
             * An Exception Rule associated with a Customer Zone.
             */
            zoneStopExceptionRules: string;
        }
        /**
         * This enumerated type allows designating rules to be of a certain type to assist with differentiating them from one another.
         */
        interface ExceptionRuleType {
            /**
             * Application Exception.
             */
            applicationException: string;
            /**
             * No Type (for generic use).
             */
            none: string;
            /**
             * Normal Exception Rule.
             */
            normal: string;
            /**
             * Exception rule.
             */
            system: string;
            /**
             * Customer Zone Stop ExceptionRule.
             */
            zone: string;
        }
        /**
         * This exception is thrown if a user makes a request while their ChangePassword flag is true. The user must change their password before they are able to successfully make further requests.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ExpiredPasswordException {}
        /**
         * The Failure Mode Identifier (FMI) used to describe engine fault codes. This is represented by the string "NoFailureModeId" when there is no applicable FMI.
         */
        interface FailureMode {
            /**
             * The specific FMI code number.
             */
            code: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The Source type for the FMI.
             */
            source: object;
        }
        /**
         * The object used to specify the arguments when searching for a FailureMode.
         */
        interface FailureModeSearch {
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A record that represents a fault code record from the engine system of the specific Device.
         */
        interface FaultData {
            /**
             * Whether the amber warning lamp state.
             */
            amberWarningLamp: boolean;
            /**
             * The DtcClass code of the fault.
             */
            classCode: string;
            /**
             * The Controller code related to the fault code; if applicable.
             */
            controller: object;
            /**
             * The number of times the fault occurred.
             */
            count: number;
            /**
             * The date and time at which the event occurred.
             */
            dateTime: string;
            /**
             * The Device that generated the fault.
             */
            device: object;
            /**
             * The Diagnostic associated with the fault.
             */
            diagnostic: object;
            /**
             * The date and time that the DismissUser dismissed the fault.
             */
            dismissDateTime: string;
            /**
             * The User that dismissed the fault.
             */
            dismissUser: object;
            /**
             * The FailureMode of the fault; if applicable.
             */
            failureMode: object;
            /**
             * The FaultLampState of a J1939 vehicle. See
             * FaultLampState for the possible values.
             */
            faultLampState: string;
            /**
             * The FaultState code from the engine system of
             * the specific device.
             */
            faultState: string;
            /**
             * The FaultStatus(s) from the engine system of
             * the specific device.
             */
            faultStates: unknown[];
            /**
             * The FlashCode associated with the fault.
             */
            flashCode: object;
            /**
             * The unique identifier for the entity. See Id.
             */
            id: string;
            /**
             * The malfunction light state.
             */
            malfunctionLamp: boolean;
            /**
             * Whether the protect warning lamp is on.
             */
            protectWarningLamp: boolean;
            /**
             * Whether the red stop lamp is on.
             */
            redStopLamp: boolean;
            /**
             * The DtcSeverity of the fault.
             */
            severity: string;
            /**
             * The source address for enhanced faults.
             */
            sourceAddress: number;
        }
        /**
         * The object used to specify the arguments when searching for a FaultData.
         * This search has been designed to work efficiently with these combinations of parameters:
         * Id
         * DeviceSearch + DiagnosticSearch + FromDate and/or ToDate
         * GroupSearch + DiagnosticSearch + FromDate and/or ToDate
         */
        interface FaultDataSearch {
            /**
             * The search options which are used to search for fault data for a controller
             * ControllerSearch
             * by Id. Available ControllerSearch options are:.
             * Id
             */
            controllerSearch: object;
            /**
             * Search for FaultData(s) from a device that matches the
             * DeviceSearch Id or in the Groups specified. This includes archived and deleted devices.
             * Available DeviceSearch options are:.
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for FaultData recorded for the diagnostic code using the
             * DiagnosticSearch Id.
             * Available DiagnosticSearch options are:.
             * IdCodeNameSourceSearch.NameSourceSearch.Id
             */
            diagnosticSearch: object;
            /**
             * The from date. The FaultData logs are searched for events which were recorded on or after this date.
             */
            fromDate: string;
            /**
             * The groups which should be searched.
             * GroupSearch(s).
             * Available GroupSearch options are:.
             * Id
             */
            groups: object;
            /**
             * Inclusive search flag.
             */
            inclusiveSearch: boolean;
            /**
             * The to state of the fault. The Fault data logs are searched for events which are under the this state.
             */
            state: string;
            /**
             * The to date.  The Fault data logs are searched for events which were recorded on or before this date.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents the lamp status of a J1939 fault, see FaultData.
         */
        interface FaultLampState {
            /**
             * Malfunction lamp is active.
             */
            malfunction: string;
            /**
             * Fault lamp is off, no active fault state.
             */
            none: string;
            /**
             * Protect lamp is active.
             */
            protect: string;
            /**
             * Red stop lamp is active.
             */
            stop: string;
            /**
             * Amber warning lamp is active.
             */
            warning: string;
        }
        /**
         * Specify whether the fault resets automatically or manually.
         */
        interface FaultResetMode {
            /**
             * The engine FaultData data ExceptionEvent for this kind of Diagnostic  will always contain single FaultData instance.
             */
            autoReset: string;
            /**
             * The engine FaultData data ExceptionEvent for this kind of Diagnostic  can contain a number of sequential FaultData instances.  These instances will continue to grow until the fault condition ends.
             */
            none: string;
        }
        /**
         * Represents a error while calling TripVision api to enrich data/>.
         */
        interface FaultRichDataErrorType {
            /**
             * This value indicates that the failure comes from TripVision ECU Onboarding.
             */
            ecuOnBoardingError: string;
            /**
             * This value indicates that the failure comes from TripVision, status code response 1.
             */
            tripVisionError: string;
            /**
             * This value indicates that the failure is in our side.
             */
            unexpectedError: string;
        }
        /**
         * The object used to specify the arguments when searching for a FaultRichData.
         */
        interface FaultRichDataSearch {
            /**
             * Diagnostic search flag.
             */
            diagnosticSearch: object;
            /**
             * FaultData search flag.
             */
            faultDataSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents a fault code state code from the engine system of the specific Device. This properties using this enum will be deprecated in the near future and replaced by a property of the FaultStatus type.
         */
        interface FaultState {
            /**
             * Active fault code.
             */
            active: string;
            /**
             * Cleared fault code.
             */
            cleared: string;
            /**
             * Inactive (or historically active) fault code.
             */
            inactive: string;
            /**
             * None, FaultState Not Indicated ().
             */
            none: string;
            /**
             * Pending fault code.
             */
            pending: string;
        }
        /**
         * Class to describe the current FaultState when a single one is present.
         */
        interface FaultStateProvider {
            /**
             * The prominent FaultStatus of the FaultData.
             */
            effectiveStatus: object;
        }
        /**
         * Class to describe FaultState.
         */
        interface FaultStatus {
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * An object containing the result of a feed method.
         */
        interface FeedResult {
            /**
             * A list of data returned by the feed.
             */
            data: object;
            /**
             * The last version of the data returned by the feed call. If this parameter is passed back into the feed call, then
             * returned data will be the changes that occurred after the last feed call was made. In this way the feed can return a continuous stream of data.
             */
            toVersion: string;
        }
        /**
         * The object used to specify the arguments when searching for a Feedback.
         */
        interface FeedbackSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any Feedback that are assigned to that Device.
             * Providing the Groups will search for Feedback for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for Feedbacks of the given FeedbackType.
             */
            feedbackType: object;
            /**
             * Search for Feedbacks recorded at this date or after.
             */
            submittedOn: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * An abstract class for different types of field selectors.
         */
        interface FieldSelector {
            /**
             * The collection containing the Entity field names. The system matches those on case-insensitive basis and excludes from the result.
             * Check specific Entity for the fields that can be included or excluded.
             * Undefined or empty collection results in default API behavior: a completely populated object.
             */
            fields: unknown[];
            /**
             * A value indicating whether the specified fields are to be included or excluded. [Default true]
             */
            isIncluded: boolean;
        }
        /**
         * An event representing adding fuel to an asset. Many sources of data are evaluated to determine a fill-up. FuelTransactions, StatusData (fuel level percent, fuel level volume, fuel used, tank capacity, odometer), LogRecords, Trips are all used to calculate fill-up events.
         */
        interface FillUp {
            /**
             * The cost of the fuel transaction. Default [0].
             */
            cost: number;
            /**
             * The three digit ISO 427 currency code (http://www.xe.com/iso4217.php). Default ["USD"].
             */
            currencyCode: string;
            /**
             * The UTC date and time of the fuel event.
             */
            dateTime: string;
            /**
             * The volume in Liters derived from fuel tank capacity. Default [-1].
             */
            derivedVolume: number;
            /**
             * The Device associated with the fuel used event.
             */
            device: object;
            /**
             * The distance in meters traveled since the last fill-up.
             */
            distance: number;
            /**
             * The Driver associated with the transaction.
             */
            driver: object;
            /**
             * The FuelTransactions matched to this fill-up.
             */
            fuelTransactions: unknown[];
            /**
             * The Coordinate of the transaction retailer. Default [0,0].
             */
            location: object;
            /**
             * The odometer reading in meters. Default [0].
             */
            odometer: number;
            /**
             * The FuelTransactionProductType of this transaction. Default [Unknown].
             */
            productType: string;
            /**
             * The FuelTankCapacity and how it was derived.
             */
            tankCapacity: object;
            /**
             * The FillUpExtrema representing the fuel tank level change at the time of the fill-up.
             */
            tankLevelExtrema: object;
            /**
             * The total fuel used in Liters up to this point in time. Default [-1].
             */
            totalFuelUsed: number;
            /**
             * The volume of fuel added in Liters. Default [0].
             */
            volume: number;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Represents the low and high values of fuel level for a fill-up.
         */
        interface FillUpExtrema {
            /**
             * The maxima FillUpExtremum for the fill-up.
             */
            maximaPoint: object;
            /**
             * The minima FillUpExtremum for the fill-up.
             */
            minimaPoint: object;
        }
        /**
         * An event representing fuel level of a vehicle. An extremum representing either the minimum or maximum point of fuel used for a given FillUp.
         */
        interface FillUpExtremum {
            /**
             * The data of the extremum. This is derived from the StatusData record used to calculate the extremum.
             */
            data: number;
            /**
             * The date time of the extremum. This is derived from the StatusData record used to calculate the extremum.
             */
            dateTime: string;
            /**
             * The extremum type as the FuelTankCapacitySource. This is derived from the specific diagnostic type of the StatusData records used to calculate the extremum.
             */
            source: string;
        }
        /**
         * The object used to specify the arguments when searching for FillUp.
         * This search has been designed to work efficiently with these parameters:
         * Id
         * DeviceSearch + FromDate and/or ToDate
         */
        interface FillUpSearch {
            /**
             * The device search criteria for the FuelUpEvent with this {@link DeviceSearch} Id. Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * The from date, which is used to search for FuelUpEvent(s) recorded on or after this date.
             */
            fromDate: string;
            /**
             * The to date, which is used to search for FuelUpEvent(s) recorded on or before this date.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The optional summary code references for specific Diagnostic items referencing FaultData records.
         */
        interface FlashCode {
            /**
             * The circuit index reference to the flash code.
             */
            circuitIndex: string;
            /**
             * The associated Diagnostic to the flash code.
             */
            diagnostic: object;
            /**
             * The associated FailureMode to the flash code.
             */
            failureMode: object;
            /**
             * The flash code index.
             */
            flashCodeIndex: string;
            /**
             * An optional URL which points to the associated documentation for the flash code.
             */
            helpUrl: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The page reference, if applicable.
             */
            pageReference: string;
            /**
             * The priority level of the fault flash code.
             */
            priorityLevel: number;
        }
        /**
         * Various Fuel Economy units Geotab supports. Currently supported units: L/100 km, km/L, MPG (US) and MPG (Imperial).
         */
        interface FuelEconomyUnit {
            /**
             * The gallon per 100 km unit.
             */
            gallonPer100Km: string;
            /**
             * The km per gallon (US) unit.
             */
            kmPerGallon: string;
            /**
             * The km per liter unit.
             */
            kmPerLiter: string;
            /**
             * The liters per 100 km unit.
             */
            litersPer100Km: string;
            /**
             * The miles per gallon (Imperial).
             */
            mPGImperial: string;
            /**
             * The miles per gallon (US).
             */
            mPGUS: string;
        }
        /**
         * Log of fueling events.
         */
        interface FuelEvent {
            /**
             * The cost of the fuel transaction. Default [0].
             */
            cost: number;
            /**
             * The three digit ISO 427 currency code (http://www.xe.com/iso4217.php). Default ["USD"].
             */
            currencyCode: string;
            /**
             * The UTC date and time of the fuel event.
             */
            dateTime: string;
            /**
             * The Coordinate of the transaction retailer. Default [0,0].
             */
            location: object;
            /**
             * The driver recorded odometer reading in km. Default [0].
             */
            odometer: number;
            /**
             * The FuelTransactionProductType of this transaction. Default [Unknown].
             */
            productType: string;
            /**
             * The volume of fuel purchased in Liters. Default [0].
             */
            volume: number;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Represent a vehicle's fuel tank capacity and how it was derived.
         */
        interface FuelTankCapacity {
            /**
             * The FuelTankCapacitySource.
             */
            source: string;
            /**
             * The volume (L). Default [-1].
             */
            volume: number;
        }
        /**
         * The source from which tank capacity was derived.
         */
        interface FuelTankCapacitySource {
            /**
             * Manually entered tank capacity as stored in Device.
             */
            deviceTankCapacity: string;
            /**
             * Engine reported tank capacity diagnostic.
             */
            diagnosticTankCapacity: string;
            /**
             * Estimate derived from fuel level (percent) and fuel used diagnostics.
             */
            estimateFuelLevel: string;
            /**
             * Estimate derived from fuel level (volume).
             */
            estimateFuelUnits: string;
            /**
             * Unknown
             */
            unknown: string;
        }
        /**
         * Fuel tax reporting element. The available driving history for a Device is stored as a sequence of such details. Each next detail starts when and where the previous detail ended. A detail is identified by its parameters (enter and exit time, odometer, GPS odometer, latitude and longitude) and its attributes (jurisdiction, Driver, toll road, authority). When any of the attributes changes, the current detail ends and a new detail begins. For more information, see IFTA Guide.
         */
        interface FuelTaxDetail {
            /**
             * The authority. 'None' by default.
             */
            authority: string;
            /**
             * The Device.
             */
            device: object;
            /**
             * The Driver.
             */
            driver: object;
            /**
             * The GPS odometer, in km, at the enter time.
             */
            enterGpsOdometer: number;
            /**
             * The latitude at the enter time.
             */
            enterLatitude: number;
            /**
             * The longitude at the enter time.
             */
            enterLongitude: number;
            /**
             * The odometer, in km, at the enter time.
             */
            enterOdometer: number;
            /**
             * The time at which the detail begins.
             */
            enterTime: string;
            /**
             * The GPS odometer, in km, at the exit time.
             */
            exitGpsOdometer: number;
            /**
             * The latitude at the exit time.
             */
            exitLatitude: number;
            /**
             * The longitude at the exit time.
             */
            exitLongitude: number;
            /**
             * The odometer, in km, at the exit time.
             */
            exitOdometer: number;
            /**
             * The time at which the detail ends.
             */
            exitTime: string;
            /**
             * The GPS odometer values, in km, at each hour within the detail's time interval.
             */
            hourlyGpsOdometer: unknown[];
            /**
             * A list of values indicating whether the odometer at the corresponding hour is interpolated.
             */
            hourlyIsOdometerInterpolated: boolean;
            /**
             * The latitude values at each hour within the detail's time interval.
             */
            hourlyLatitude: unknown[];
            /**
             * The longitude values at each hour within the detail's time interval.
             */
            hourlyLongitude: unknown[];
            /**
             * The odometer values, in km, at each hour within the detail's time interval.
             */
            hourlyOdometer: unknown[];
            /**
             * A value indicating whether the odometer at enter time is interpolated.
             */
            isEnterOdometerInterpolated: boolean;
            /**
             * A value indicating whether the odometer at exit time is interpolated.
             */
            isExitOdometerInterpolated: boolean;
            /**
             * The jurisdiction, such as a U.S. state or a Canadian province.
             */
            jurisdiction: string;
            /**
             * The toll road name. null by default.
             */
            tollRoad: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for FuelTaxDetail elements.
         * This search has been designed to work efficiently with these parameters:
         * DeviceSearch
         * FromDate
         * ToDate
         */
        interface FuelTaxDetailSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any fuel tax details that are assigned to that Device.
             * Providing the Groups will search for fuel tax details for that have Devices in that group.
             * IdGroups
             */
            deviceSearch: object;
            /**
             * The beginning of the time interval. The search will adjust it to the nearest hour on or before this time. For instance, 8:20 AM will become 8 AM.
             */
            fromDate: string;
            /**
             * A value indicating whether to include any parts of boundary details that fall outside the time interval.
             */
            includeBoundaries: boolean;
            /**
             * A value indicating whether to include hourly data.
             */
            includeHourlyData: boolean;
            /**
             * The end of the time interval. The search will adjust it to the nearest hour on or after this time. For instance, 5:40 PM will become 6 PM.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Information from a fuel card provider representing a fuel transaction. Fuel card information will be matched to a Device by one of these fields: vehicleIdentificationNumber, serialNumber, licencePlate or comments.
         * The combination of all fields (excluding sourceData) are used to ensure no duplicate transactions can be added.
         */
        interface FuelTransaction {
            /**
             * The masked or partial purchasing card number.
             */
            cardNumber: string;
            /**
             * The free text field where any user information can be stored and referenced for this entity. This can be used to associate the transaction with a Device. Maximum length [1024] Default [""].
             */
            comments: string;
            /**
             * The vehicle description of the vehicle. This can be used to associate the transaction with a Device. Maximum length [255] Default [""].
             */
            description: string;
            /**
             * The Device the transaction belongs to. Default [null].If null, best attempt will be auto matched to a device based on vehicleIdentificationNumber, serialNumber, licencePlate or comments properties.
             */
            device: object;
            /**
             * The Driver the transaction belongs to.If null, best attempt will be auto matched to a driver based on driverName property.
             */
            driver: object;
            /**
             * The fuel card holder name. This can be used to associate the transaction with a Driver. Maximum length [255] Default [""].
             */
            driverName: string;
            /**
             * The external reference to the transaction. Typically this is an external identifier. Maximum length [255] Default [""].
             */
            externalReference: string;
            /**
             * The licence plate of the vehicle of the vehicle. This can be used to associate the transaction with a Device. Maximum length [255] Default [""].
             */
            licencePlate: string;
            /**
             * The FuelTransactionProvider of this transaction. Default [Unknown].
             */
            provider: string;
            /**
             * The Product Description given by the Provider.
             */
            providerProductDescription: string;
            /**
             * The serial number of the device. This can be used to associate the transaction with a Device. Maximum length [255] Default [""].
             */
            serialNumber: string;
            /**
             * The site/merchant name where the transaction took place.
             */
            siteName: string;
            /**
             * The JSON string representing the source data. Default [""].
             */
            sourceData: string;
            /**
             * The vehicle identification number (VIN) of the vehicle. This is used to associate the transaction with a Device. Maximum length [255] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * The cost of the fuel transaction. Default [0].
             */
            cost: number;
            /**
             * The three digit ISO 427 currency code (http://www.xe.com/iso4217.php). Default ["USD"].
             */
            currencyCode: string;
            /**
             * The UTC date and time of the fuel event.
             */
            dateTime: string;
            /**
             * The Coordinate of the transaction retailer. Default [0,0].
             */
            location: object;
            /**
             * The driver recorded odometer reading in km. Default [0].
             */
            odometer: number;
            /**
             * The FuelTransactionProductType of this transaction. Default [Unknown].
             */
            productType: string;
            /**
             * The volume of fuel purchased in Liters. Default [0].
             */
            volume: number;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Represents the type of product purchased in a FuelTransaction.
         */
        interface FuelTransactionProductType {
            /**
             * CNG (Compressed Natural Gas)
             */
            cNG: string;
            /**
             * Diesel fuel
             */
            diesel: string;
            /**
             * Diesel exhaust fluid
             */
            dieselExhaustFluid: string;
            /**
             * E85 (Ethanol 85%)
             */
            e85: string;
            /**
             * Electric
             */
            electric: string;
            /**
             * Hydrogen
             */
            hydrogen: string;
            /**
             * LPG (Liquid Propane Gas)
             */
            lPG: string;
            /**
             * Mid grade gasoline (88-89 Octane : 92-93 Ron)
             */
            midgrade: string;
            /**
             * A non-fuel purchase
             */
            nonFuel: string;
            /**
             * Premium grade gasoline (90-91 Octane : 94-95 Ron)
             */
            premium: string;
            /**
             * Regular grade gasoline (86-87 Octane : 90-91 Ron)
             */
            regular: string;
            /**
             * Super grade gasoline (92-94+ Octane : 96-99+ Ron)
             */
            super: string;
            /**
             * Unknown product type
             */
            unknown: string;
        }
        /**
         * FuelTransaction data providers.
         */
        interface FuelTransactionProvider {
            /**
             * Allstar Fuel Card provider
             */
            allstar: string;
            /**
             * Car IQ Fuel Card provider
             */
            carIQ: string;
            /**
             * Comdata Fuel Card Provider.
             */
            comdata: string;
            /**
             * Drive Add-in.
             */
            drive: string;
            /**
             * Fuel Tracker App.
             */
            fuelTracker: string;
            /**
             * Fuelman Fuel Card Provider.
             */
            fuelman: string;
            /**
             * GFN Fuel Card provider
             */
            gFN: string;
            /**
             * Keyfuels Fuel Card provider
             */
            keyfuels: string;
            /**
             * TFC Fuel Card provider
             */
            tFC: string;
            /**
             * Ultramar CST Fuel Card provider
             */
            ultramarCST: string;
            /**
             * The FuelTransactionProvider is not known.
             */
            unknown: string;
            /**
             * Voyager Fuel Card provider
             */
            voyager: string;
            /**
             * Wex Fuel Card Provider.
             */
            wex: string;
            /**
             * WexCanada Fuel Card provider
             */
            wexCanada: string;
            /**
             * Wex Fuel Card Provider, customer file format.
             */
            wexCustomer: string;
            /**
             * Wex Fuel Card Provider, legacy file format.
             */
            wexLegacy: string;
        }
        /**
         * An event representing fuel used for a vehicle.
         */
        interface FuelUsed {
            /**
             * The UTC date and time of the fuel used.
             */
            dateTime: string;
            /**
             * The Device associated with the fuel used.
             */
            device: object;
            /**
             * The volume of fuel used in Liters. Default [0].
             */
            totalFuelUsed: number;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for FuelUsed.
         * This search has been designed to work efficiently with these parameters:
         * Id
         * DeviceSearch + FromDate and/or ToDate
         */
        interface FuelUsedSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any FuelUsed data that are assigned to that Device.
             * Providing the Groups will search for FuelUsed data for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * The from date, which is used to search for FuelUsed records recorded on or after this date.
             */
            fromDate: string;
            /**
             * The to date, which is used to search for FuelUsed records recorded on or before this date.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * This default exception returned undefined issues.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface GenericException {}
        /**
         * A Geotab GO4V3 device. Additional properties can be seen in GoCurveAuxiliary.
         */
        interface Go4v3 {
            /**
             * The radio channels as an array of 20 bytes. [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].
             */
            channel: unknown[];
            /**
             * The channel count. Default [1].
             */
            channelCount: number;
            /**
             * The FrequencyOffset used on the device radio. The default is 1 and should not be changed. Only has an effect on Channel Set 0 - which consists of channels 0 to 15. Default [1].
             */
            frequencyOffset: number;
            /**
             * A value indicating whether this device has aided GPS enabled. This feature only applies to devices that use RF communication in very large installations where an aiding data server has been configured. Default [false].
             */
            isAidedGpsEnabled: boolean;
            /**
             * The toggle to enable RF upload while driving. Default [false].
             */
            isRfUploadOnWhenMoving: boolean;
            /**
             * The RF parameter version. Default [0].
             */
            rfParameterVersion: object;
            /**
             * An array of the auxiliary warning speeds for the vehicle. The auxiliary is triggered when the speed is greater than or equal to this value. Maximum length [8] Default [0,0,0,0,0,0,0,0].
             */
            auxWarningSpeed: unknown[];
            /**
             * Toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            enableAuxWarning: unknown[];
            /**
             * Toggle to enable control external relay value for the vehicle. Default [false].
             */
            enableControlExternalRelay: boolean;
            /**
             * The option which controls how long any attached external devices (Garmin, Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned off in minutes. Default [0].
             */
            externalDeviceShutDownDelay: number;
            /**
             * With ImmobilizeUnit being true, it is used to define the delay before the driver identification reminder is sent out if the driver key has not been not swiped. The maximum value of this property is 255. When it is less or equal to 180, it indicates the number of seconds of the delay.  When it is greater than 180, the delay increases 30 seconds for every increment of one of this property. For example, 180 indicates 180 seconds, 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default [30].
             */
            immobilizeArming: object;
            /**
             * A value mainly used for enable or disable driver identification reminder. If it is used in conjunction with vehicle relay circuits, it can force the driver to swipe the driver key before starting the vehicle. Default [false].
             */
            immobilizeUnit: boolean;
            /**
             * An array of Boolean(s) indicating if a corresponding Aux signal should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            isAuxInverted: boolean;
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The Geotab GO5 device. Additional properties can be seen in GoCurve.
         */
        interface Go5 {
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The Geotab GO6 device. Additional properties can be seen in GoCurveAuxiliary.
         */
        interface Go6 {
            /**
             * An array of the auxiliary warning speeds for the vehicle. The auxiliary is triggered when the speed is greater than or equal to this value. Maximum length [8] Default [0,0,0,0,0,0,0,0].
             */
            auxWarningSpeed: unknown[];
            /**
             * Toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            enableAuxWarning: unknown[];
            /**
             * Toggle to enable control external relay value for the vehicle. Default [false].
             */
            enableControlExternalRelay: boolean;
            /**
             * The option which controls how long any attached external devices (Garmin, Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned off in minutes. Default [0].
             */
            externalDeviceShutDownDelay: number;
            /**
             * With ImmobilizeUnit being true, it is used to define the delay before the driver identification reminder is sent out if the driver key has not been not swiped. The maximum value of this property is 255. When it is less or equal to 180, it indicates the number of seconds of the delay.  When it is greater than 180, the delay increases 30 seconds for every increment of one of this property. For example, 180 indicates 180 seconds, 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default [30].
             */
            immobilizeArming: object;
            /**
             * A value mainly used for enable or disable driver identification reminder. If it is used in conjunction with vehicle relay circuits, it can force the driver to swipe the driver key before starting the vehicle. Default [false].
             */
            immobilizeUnit: boolean;
            /**
             * An array of Boolean(s) indicating if a corresponding Aux signal should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            isAuxInverted: boolean;
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The Geotab GO7 device. Additional properties can be seen in GoCurveAuxiliary.
         */
        interface Go7 {
            /**
             * An array of the auxiliary warning speeds for the vehicle. The auxiliary is triggered when the speed is greater than or equal to this value. Maximum length [8] Default [0,0,0,0,0,0,0,0].
             */
            auxWarningSpeed: unknown[];
            /**
             * Toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            enableAuxWarning: unknown[];
            /**
             * Toggle to enable control external relay value for the vehicle. Default [false].
             */
            enableControlExternalRelay: boolean;
            /**
             * The option which controls how long any attached external devices (Garmin, Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned off in minutes. Default [0].
             */
            externalDeviceShutDownDelay: number;
            /**
             * With ImmobilizeUnit being true, it is used to define the delay before the driver identification reminder is sent out if the driver key has not been not swiped. The maximum value of this property is 255. When it is less or equal to 180, it indicates the number of seconds of the delay.  When it is greater than 180, the delay increases 30 seconds for every increment of one of this property. For example, 180 indicates 180 seconds, 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default [30].
             */
            immobilizeArming: object;
            /**
             * A value mainly used for enable or disable driver identification reminder. If it is used in conjunction with vehicle relay circuits, it can force the driver to swipe the driver key before starting the vehicle. Default [false].
             */
            immobilizeUnit: boolean;
            /**
             * An array of Boolean(s) indicating if a corresponding Aux signal should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            isAuxInverted: boolean;
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The Geotab GO8 device. Additional properties can be seen in GoCurveAuxiliary.
         */
        interface Go8 {
            /**
             * An array of the auxiliary warning speeds for the vehicle. The auxiliary is triggered when the speed is greater than or equal to this value. Maximum length [8] Default [0,0,0,0,0,0,0,0].
             */
            auxWarningSpeed: unknown[];
            /**
             * Toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            enableAuxWarning: unknown[];
            /**
             * Toggle to enable control external relay value for the vehicle. Default [false].
             */
            enableControlExternalRelay: boolean;
            /**
             * The option which controls how long any attached external devices (Garmin, Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned off in minutes. Default [0].
             */
            externalDeviceShutDownDelay: number;
            /**
             * With ImmobilizeUnit being true, it is used to define the delay before the driver identification reminder is sent out if the driver key has not been not swiped. The maximum value of this property is 255. When it is less or equal to 180, it indicates the number of seconds of the delay.  When it is greater than 180, the delay increases 30 seconds for every increment of one of this property. For example, 180 indicates 180 seconds, 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default [30].
             */
            immobilizeArming: object;
            /**
             * A value mainly used for enable or disable driver identification reminder. If it is used in conjunction with vehicle relay circuits, it can force the driver to swipe the driver key before starting the vehicle. Default [false].
             */
            immobilizeUnit: boolean;
            /**
             * An array of Boolean(s) indicating if a corresponding Aux signal should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            isAuxInverted: boolean;
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The Geotab GO9 device. Additional properties can be seen in GoCurveAuxiliary.
         */
        interface Go9 {
            /**
             * Value which ON or OFF  continuous connect for the device. Default [False].
             */
            isContinuousConnectEnabled: boolean;
            /**
             * Value which enables or disables OBD alerts for the device. Default [False].
             */
            obdAlertEnabled: boolean;
            /**
             * An array of the auxiliary warning speeds for the vehicle. The auxiliary is triggered when the speed is greater than or equal to this value. Maximum length [8] Default [0,0,0,0,0,0,0,0].
             */
            auxWarningSpeed: unknown[];
            /**
             * Toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            enableAuxWarning: unknown[];
            /**
             * Toggle to enable control external relay value for the vehicle. Default [false].
             */
            enableControlExternalRelay: boolean;
            /**
             * The option which controls how long any attached external devices (Garmin, Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned off in minutes. Default [0].
             */
            externalDeviceShutDownDelay: number;
            /**
             * With ImmobilizeUnit being true, it is used to define the delay before the driver identification reminder is sent out if the driver key has not been not swiped. The maximum value of this property is 255. When it is less or equal to 180, it indicates the number of seconds of the delay.  When it is greater than 180, the delay increases 30 seconds for every increment of one of this property. For example, 180 indicates 180 seconds, 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default [30].
             */
            immobilizeArming: object;
            /**
             * A value mainly used for enable or disable driver identification reminder. If it is used in conjunction with vehicle relay circuits, it can force the driver to swipe the driver key before starting the vehicle. Default [false].
             */
            immobilizeUnit: boolean;
            /**
             * An array of Boolean(s) indicating if a corresponding Aux signal should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            isAuxInverted: boolean;
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * A GoCurve device. Additional properties can be seen in GoDevice.
         */
        interface GoCurve {
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * Device that supports curve logging and auxiliaries. Additional properties can be seen in GoCurve.
         */
        interface GoCurveAuxiliary {
            /**
             * An array of the auxiliary warning speeds for the vehicle. The auxiliary is triggered when the speed is greater than or equal to this value. Maximum length [8] Default [0,0,0,0,0,0,0,0].
             */
            auxWarningSpeed: unknown[];
            /**
             * Toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            enableAuxWarning: unknown[];
            /**
             * Toggle to enable control external relay value for the vehicle. Default [false].
             */
            enableControlExternalRelay: boolean;
            /**
             * The option which controls how long any attached external devices (Garmin, Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned off in minutes. Default [0].
             */
            externalDeviceShutDownDelay: number;
            /**
             * With ImmobilizeUnit being true, it is used to define the delay before the driver identification reminder is sent out if the driver key has not been not swiped. The maximum value of this property is 255. When it is less or equal to 180, it indicates the number of seconds of the delay.  When it is greater than 180, the delay increases 30 seconds for every increment of one of this property. For example, 180 indicates 180 seconds, 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default [30].
             */
            immobilizeArming: object;
            /**
             * A value mainly used for enable or disable driver identification reminder. If it is used in conjunction with vehicle relay circuits, it can force the driver to swipe the driver key before starting the vehicle. Default [false].
             */
            immobilizeUnit: boolean;
            /**
             * An array of Boolean(s) indicating if a corresponding Aux signal should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
             */
            isAuxInverted: boolean;
            /**
             * The acceleration warning accelerometer threshold (y axis) value for the vehicle. A positive value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [22].
             */
            accelerationWarningThreshold: number;
            /**
             * The accelerometer threshold warning factor value for this vehicle. Default [0].
             */
            accelerometerThresholdWarningFactor: number;
            /**
             * The braking warning accelerometer threshold (y axis) value for the vehicle. A negative value that when exceeded will trigger device beeping. Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [-34].
             */
            brakingWarningThreshold: number;
            /**
             * The cornering warning threshold (x axis) value for the vehicle. A positive value that when exceeded will trigger device beeping (the additive inverse is automatically applied: 26/-26). Threshold value to mS2 conversion (threshold * 18 = milli-g / 1000 = g / 1.0197162 = mS2). Default [26].
             */
            corneringWarningThreshold: number;
            /**
             * Toggle to enable beeping when any of the acceleration thresholds are exceeded by device accelerometer readings. Default [false].
             */
            enableBeepOnDangerousDriving: boolean;
            /**
             * Toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'. Default [false].
             */
            enableBeepOnRpm: boolean;
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * Toggle to enable active tracking on the device. enables Active Tracking which triggers the device to transmit data more frequently. This allows for continuously up-to-date vehicle positions animated on the live map. It also enables live server-side driver alerts. Default [false].
             * This feature is only supported on the ProPlus plan. Turning on this feature on a device using the Pro plan will automatically upgrade the device to the ProPlus plan with all associated charges.
             */
            isActiveTrackingEnabled: boolean;
            /**
             * Value which toggles beeping if an unbuckled seat belt is detected. This will only work if the device is able to obtain seat belt information from the vehicle. Default [false].
             */
            isDriverSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device IOX USB connection. Default [true].
             */
            isIoxConnectionEnabled: boolean;
            /**
             * Value which toggles monitoring both passenger and driver unbuckled seat belt, otherwise only the driver is monitored. Default [false].
             */
            isPassengerSeatbeltWarningOn: boolean;
            /**
             * Value which toggles device beeping when the vehicle is reversing. Default [false].
             */
            isReverseDetectOn: boolean;
            /**
             * A Single used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The RPM value that when exceeded triggers device beeping. Default [3500].
             */
            rpmValue: number;
            /**
             * The value in km/h that below will not trigger 'Seat belt Warning'. Default [10].
             */
            seatbeltWarningSpeed: object;
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The base device for all Geotab GO products. Additional properties can be seen in Device.
         */
        interface GoDevice {
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * A toggle that represents automatic generation of DutyStatusLogs for a Device. Default [null].
             */
            autoHos: string;
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Master toggle to disable the device buzzer. When set to [true], the device will not provide driver feedback of any kind. Default [false].
             */
            disableBuzzer: boolean;
            /**
             * Toggle to enable beeping when the vehicle idles for more than IdleMinutes. Default [false].
             */
            enableBeepOnIdle: boolean;
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * Toggle to enable speed warning value for the vehicle. When enabled [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
             */
            enableSpeedWarning: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GoTalkLanguage of an attached GoTalk. Default [English].
             */
            goTalkLanguage: string;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The number of minutes of allowed idling before device beeping starts. EnableBeepOnIdle must be enabled. Default [3].
             */
            idleMinutes: number;
            /**
             * A toggle to beep constantly when the vehicle reaches the speed set in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff' speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'. Default [false].
             */
            isSpeedIndicator: boolean;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum accident speed in km/h. Default [4].
             */
            minAccidentSpeed: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For GoDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The speeding off value in km/h. When 'IsSpeedIndicator' is enabled, once beeping starts, the vehicle must slow down to this speed for the beeping to stop. Default [90].
             */
            speedingOff: number;
            /**
             * The speeding on value in km/h. When 'IsSpeedIndicator' is enabled, the device will start beeping when the vehicle exceeds this speed. Default [100].
             */
            speedingOn: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * A mobile tracking device that is used in MyGeotab. This is used for extensibility and is based on the Device object.
         */
        interface GoDriveDevice {
            /**
             * The date the device is active from. Default [MinDate].
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The contents of a TextMessage that will be delivered to a GoTalk.
         */
        interface GoTalkContent {
            /**
             * The message. The message can be up to 256 characters.
             */
            message: string;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * The language used by a GoTalk attached to a. GoDevice
         */
        interface GoTalkLanguage {
            /**
             * English
             */
            english: string;
            /**
             * French
             */
            french: string;
            /**
             * German
             */
            german: string;
            /**
             * Italian
             */
            italian: string;
            /**
             * Spanish
             */
            spanish: string;
        }
        /**
         * Used to represent different Google Map styles.
         */
        interface GoogleMapStyle {
            /**
             * Google map hybrid view.
             */
            hybrid: string;
            /**
             * Google map road map view.
             */
            roadmap: string;
            /**
             * Google map satellite view.
             */
            satellite: string;
            /**
             * Google map terrain view.
             */
            terrain: string;
        }
        /**
         * A group is one element in a hierarchical tree. Each group can have none or many children, it is the children that define the shape of the hierarchical tree. The parent is not a property of the group object and is only defined by who the group is a child of. It is necessary to know the id of the parent group when adding a new group.
         * There are three core Group branches used in MyGeotab. The most common are "Company Groups", company Groups are used to organize entities (Zone, User, Device, Driver, Rule and EventRule) into logical groups related to the organization. A Group structure can be constructed by region, vocation, reporting or anything that makes sense to the business, this allows aggregate reports and rolling up data in a flexible way. These groups have a many to many type of relationship with the entities that are members and are not limited to one type of entity.
         * The second type is "Security Groups", these are Groups to which User(s) are members of and can only be applied to Users. Each Group has a list of SecurityFilter(s) associated to it. Security Filters control what parts of the application/API a User has access to.
         * The third type of group is a "Private User Group", this group is used only for scheduling reports and displaying dashboard reports for a User. This Group will only ever apply to one User and will typically be named the user's name.
         * There is a base structure of Groups which cannot be removed, these are considered to be "System"
         * Some of these groups are:
         * When Groups are retrieved they will always be in a flat list of groups. The hierarchically tree(s) can be reconstructed by looking at the "Children" property of each Group. The "Root" group will never be returned and is only for system use.
         * Company Group
         * Asset Information Group
         * Driver Activity Group
         * Security Group
         * Supervisor Security Group
         * View Only Security Group
         * Drive User Security Group
         * Private User Group
         */
        interface Group {
            /**
             * The Children of this group. A list of Group(s).
             */
            children: unknown[];
            /**
             * The Color used to render assets belonging to this group. Default [Blue].
             */
            color: object;
            /**
             * The free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comments: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The parent Group of the selected group.
             * Not defined in the group object, the relationship is assumed by which group has this group as a child.
             */
            parent: object;
            /**
             * The string reference to add to the database entry for this group. Maximum length [255] Default [""].
             */
            reference: string;
        }
        /**
         * Exception with information about the grouped linked entities that hold a relation preventing removal.
         */
        interface GroupRelationViolatedException {
            /**
             * The GroupRelations preventing removal.
             */
            relations: object;
        }
        /**
         * Used in GroupRelationViolatedException. When a user tries to remove a group but there are entities which are members of those groups the remove is blocked (fails) until the entities are moved out of the group which is to be removed. When the group remove operation fails, the exception returned is a GroupRelationViolatedException with populated GroupRelations to show which entities are blocking the group removal.
         */
        interface GroupRelations {
            /**
             * The AddInData(s) related to the Group.
             */
            addInDatas: unknown[];
            /**
             * The Defect(s) related to the Group.
             */
            defects: unknown[];
            /**
             * The Device(s) with auto groups related to the Group.
             */
            deviceAutoGroups: unknown[];
            /**
             * The Device(s) related to the Group.
             */
            devices: unknown[];
            /**
             * The Driver(s) related to the Group.
             */
            drivers: unknown[];
            /**
             * The DVIRLog(s) related to the Group.
             */
            dvirLogs: unknown[];
            /**
             * The Group which the entities are related to.
             */
            group: object;
            /**
             * The Rule(s) related to the Group.
             */
            rules: unknown[];
            /**
             * The Trailer(s) related to the Group.
             */
            trailers: unknown[];
            /**
             * The User(s) related to the Group.
             */
            users: unknown[];
            /**
             * The Zone(s) related to the Group.
             */
            zones: unknown[];
        }
        /**
         * The object used to specify the arguments when searching for a Group.
         */
        interface GroupSearch {
            /**
             * Include Groups from all trees, for example "Security Groups" and "Private User Groups". The"Company Group" tree is included by default.
             */
            includeAllTrees: boolean;
            /**
             * Search for Groups with this Name. Wildcard can be used by prepending/appending "%" to string. Example "%name%".
             */
            name: string;
            /**
             * Search for Groups with this Reference. Wildcard can be used by prepending/appending "%" to string. Example "%reference%".
             */
            reference: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents a GroupSecurity entity. This defines the many to many relationship between a SecurityFilter and Group.
         */
        interface GroupSecurity {
            /**
             * The Group associated with the GroupSecurity.
             */
            group: object;
            /**
             * The SecurityFilter associated with the GroupSecurity.
             */
            securityFilter: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The HOS log generation options.
         */
        interface HosOption {
            /**
             * If set to AUTO, DutyStatusLog will be automatically generated when the system determines the vehicle is using HOS features.
             */
            aUTO: string;
            /**
             * HOS is disabled and generation of DutyStatusLog is disabled.
             */
            oFF: string;
            /**
             * HOS is enabled and generation of DutyStatusLog is enabled.
             */
            oN: string;
        }
        /**
         * HOS rulesets for the User.
         */
        interface HosRuleSet {
            /**
             * Alaska Passenger 70-hour/7-day
             */
            alaskaPassenger7Day: string;
            /**
             * Alaska Passenger 80-hour/8-day
             */
            alaskaPassenger8Day: string;
            /**
             * Alaska Property 70-hour/7-day
             */
            alaskaProperty7Day: string;
            /**
             * Alaska Property 70-hour/7-day Sleeper
             */
            alaskaProperty7DaySleeper: string;
            /**
             * Alaska Property 80-hour/8-day
             */
            alaskaProperty8Day: string;
            /**
             * Alaska Property 80-hour/8-day Sleeper
             */
            alaskaProperty8DaySleeper: string;
            /**
             * The America7 day ruleset.
             */
            america7Day: string;
            /**
             * The America7 day big ruleset.
             */
            america7DayBig: string;
            /**
             * The America7 day big ruleset with split sleeper.
             */
            america7DayBigSleeper: string;
            /**
             * The USA Property 60-hour/7-day without 34-hour reset ruleset.
             */
            america7DayNo34h: string;
            /**
             * The USA Property 60-hour/7-day without 34-hour reset ruleset with split sleeper.
             */
            america7DayNo34hSleeper: string;
            /**
             * The America7 day passenger ruleset.
             */
            america7DayPassenger: string;
            /**
             * The America 7 day Railroad ruleset.
             */
            america7DayRailroad: string;
            /**
             * The America7 day ruleset with split sleeper.
             */
            america7DaySleeper: string;
            /**
             * The America8 day ruleset.
             */
            america8Day: string;
            /**
             * The America8 day big ruleset.
             */
            america8DayBig: string;
            /**
             * The America8 day big ruleset with split sleeper.
             */
            america8DayBigSleeper: string;
            /**
             * The USA Property 70-hour/8-day without 34-hour reset ruleset.
             */
            america8DayNo34h: string;
            /**
             * The USA Property 70-hour/8-day without 34-hour reset ruleset with split sleeper.
             */
            america8DayNo34hSleeper: string;
            /**
             * The America8 day passenger ruleset.
             */
            america8DayPassenger: string;
            /**
             * The America 8 day Railroad ruleset.
             */
            america8DayRailroad: string;
            /**
             * The America8 day ruleset with split sleeper.
             */
            america8DaySleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 60-hour/7-day.
             */
            americaNoRestRequirement7Day: string;
            /**
             * "USA Property Without 30Mins Rest Requirement 60-hour/7-day (16-hour exemption)
             */
            americaNoRestRequirement7DayBig: string;
            /**
             * "USA Property Without 30Mins Rest Requirement 60-hour/7-day (16-hour exemption) with split sleeper.
             */
            americaNoRestRequirement7DayBigSleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 60-hour/7-day with split sleeper.
             */
            americaNoRestRequirement7DaySleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day
             */
            americaNoRestRequirement8Day: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day (16-hour exemption)
             */
            americaNoRestRequirement8DayBig: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day (16-hour exemption) with split sleeper.
             */
            americaNoRestRequirement8DayBigSleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day with split sleeper.
             */
            americaNoRestRequirement8DaySleeper: string;
            /**
             * The USA property non-CDL short-haul 150 air-mile for 60-hour/7-day ruleset.
             */
            americaNonCdlShortHaul7Day: string;
            /**
             * The USA property non-CDL short-haul 150 air-mile for 70-hour/8-day ruleset.
             */
            americaNonCdlShortHaul8Day: string;
            /**
             * The AmericaSalesperson ruleset.
             */
            americaSalesperson: string;
            /**
             * The AmericaSalespersonNonCdlShortHaul ruleset.
             */
            americaSalespersonNonCdlShortHaul: string;
            /**
             * The America 60-hour/7-day short haul ruleset.
             */
            americaShortHaul: string;
            /**
             * The America 60-hour/7-day short haul ruleset 14hr Workday.
             */
            americaShortHaul14hrWorkday: string;
            /**
             * The America 70-hour/8-day short haul ruleset.
             */
            americaShortHaul8Day: string;
            /**
             * The America 70-hour/8-day short haul ruleset 14hr Workday.
             */
            americaShortHaul8Day14hrWorkday: string;
            /**
             * The USA Property Short-haul 70-hour/8-day without 34-hour reset ruleset.
             */
            americaShortHaul8DayNo34h: string;
            /**
             * The USA Property Short-haul 60-hour/7-day without 34-hour reset ruleset.
             */
            americaShortHaulNo34h: string;
            /**
             * The America 60-hour/7-day short haul passenger ruleset.
             */
            americaShortHaulPassenger: string;
            /**
             * The America 70-hour/8-day short haul passenger ruleset.
             */
            americaShortHaulPassenger8Day: string;
            /**
             * The AmericaTexas ruleset.
             */
            americaTexas: string;
            /**
             * The Texas short-haul 60-hour/7-day ruleset.
             */
            americaTexasShortHaul: string;
            /**
             * The Texas short-haul 70-hour/8-day ruleset.
             */
            americaTexasShortHaul8Day: string;
            /**
             * Australia Standard Hours Solo with Exemption Hours
             */
            australiaStandardHoursSoloExemptionHours: string;
            /**
             * The Brazilian Property Short-haul ruleset.
             */
            brazilShortHaul: string;
            /**
             * California Property Intrastate
             */
            california8day: string;
            /**
             * The California intrastate Farm Product ruleset.
             */
            californiaFarmProduct: string;
            /**
             * The California intrastate Farm Product ruleset with rest requirement.
             */
            californiaFarmProductWithRestRequirement: string;
            /**
             * The California intrastate Flammable Liquid ruleset.
             */
            californiaFlammableLiquid: string;
            /**
             * The California intrastate Flammable Liquid ruleset with rest requirement.
             */
            californiaFlammableLiquidWithRestRequirement: string;
            /**
             * The California passenger intrastate ruleset.
             */
            californiaPassenger: string;
            /**
             * The California Property Intrastate without rest requirement.
             */
            californiaProperty: string;
            /**
             * California Property Short-haul.
             */
            californiaPropertyShortHaul: string;
            /**
             * California Property Short-haul with rest.
             */
            californiaPropertyShortHaulWithRest: string;
            /**
             * The California intrastate School Pupil ruleset.
             */
            californiaSchoolPupil: string;
            /**
             * The California intrastate School Pupil ruleset with rest requirement.
             */
            californiaSchoolPupilWithRestRequirement: string;
            /**
             * The Canada BC Logging Truck ruleset.
             */
            canadaBCLoggingTruck: string;
            /**
             * The Canada Cycle 1 (7 day) South of 60°N ruleset.
             */
            canadaCycleOne: string;
            /**
             * The Canada Team Cycle 1 (7 day) South of 60°N ruleset.
             */
            canadaCycleOneTeam: string;
            /**
             * The Canada Cycle 2 (14 day) South of 60°N ruleset.
             */
            canadaCycleTwo: string;
            /**
             * The Canada Team Cycle 2 (14 day) South of 60°N ruleset.
             */
            canadaCycleTwoTeam: string;
            /**
             * The Canada Cycle 1 (7 day) North of 60°N ruleset.
             */
            canadaNorthOf60CycleOne: string;
            /**
             * The Canada Team Cycle 1 (7 day) North of 60°N ruleset.
             */
            canadaNorthOf60CycleOneTeam: string;
            /**
             * The Canada Cycle 2 (14 day) North of 60°N ruleset.
             */
            canadaNorthOf60CycleTwo: string;
            /**
             * The Canada Team Cycle 2 (14 day) North of 60°N ruleset.
             */
            canadaNorthOf60CycleTwoTeam: string;
            /**
             * Canada North of 60°N Oil Permit.
             */
            canadaNorthOf60Oil: string;
            /**
             * Canada North of 60°N Oil Permit Team.
             */
            canadaNorthOf60OilTeam: string;
            /**
             * Canada South of 60°N Oil Permit.
             */
            canadaOil: string;
            /**
             * Canada South of 60°N Oil Permit Team.
             */
            canadaOilTeam: string;
            /**
             * Carrier Exemption ruleset.
             */
            carrierExemption: string;
            /**
             * The Florida property 7 day intrastate ruleset.
             */
            florida7Day: string;
            /**
             * The Florida property 8 day intrastate ruleset.
             */
            florida8Day: string;
            /**
             * The Florida property short-haul 7 day intrastate ruleset.
             */
            floridaShortHaul7Day: string;
            /**
             * The Florida property short-haul 8 day intrastate ruleset.
             */
            floridaShortHaul8Day: string;
            /**
             * Maryland Short Haul 70-hour/7-day
             */
            marylandShortHaul7Day: string;
            /**
             * Maryland Short Haul 80-hour/8-day
             */
            marylandShortHaul8Day: string;
            /**
             * Nebraska 70-hour/7-day
             */
            nebraska7day: string;
            /**
             * Nebraska 80-hour/8-day
             */
            nebraska8day: string;
            /**
             * No ruleset.
             */
            none: string;
            /**
             * No ruleset 8 day.
             */
            none8Day: string;
            /**
             * No ruleset Canada (South of 60°N)
             */
            noneCanada: string;
            /**
             * No ruleset Canada (North of 60°N)
             */
            noneCanadaNorthOf60: string;
            /**
             * North Dakota 70-hour/7-day
             */
            northDakota7Day: string;
            /**
             * North Dakota Short Haul 70-hour/7-day
             */
            northDakotaShortHaul7Day: string;
            /**
             * The OilTransport7Day day ruleset.
             */
            oilTransport7Day: string;
            /**
             * The oil transport 7-day day big ruleset.
             */
            oilTransport7DayBig: string;
            /**
             * The oil transport 7-day day big ruleset with split sleeper.
             */
            oilTransport7DayBigSleeper: string;
            /**
             * The OilTransport7Day day ruleset with split sleeper.
             */
            oilTransport7DaySleeper: string;
            /**
             * The oil transport 8-day day ruleset.
             */
            oilTransport8Day: string;
            /**
             * The oil transport 8-day day 16h exemption ruleset.
             */
            oilTransport8DayBig: string;
            /**
             * The oil transport 8-day day 16h exemption ruleset with split sleeper.
             */
            oilTransport8DayBigSleeper: string;
            /**
             * The oil transport 8-day day ruleset with split sleeper.
             */
            oilTransport8DaySleeper: string;
            /**
             * California with OilTransport with rest requirement
             */
            oilTransportCalifornia8day: string;
            /**
             * California with OilTransport
             */
            oilTransportCaliforniaProperty: string;
            /**
             * USA Property Without 30Mins Rest Requirement 60-hour/7-day with 24 hour reset
             */
            oilTransportNoRestRequirement7Day: string;
            /**
             * "USA Property Without 30Mins Rest Requirement 60-hour/7-day (16-hour exemption) with 24 hour reset
             */
            oilTransportNoRestRequirement7DayBig: string;
            /**
             * "USA Property Without 30Mins Rest Requirement 60-hour/7-day (16-hour exemption) with 24 hour reset and split sleeper
             */
            oilTransportNoRestRequirement7DayBigSleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 60-hour/7-day with 24 hour reset and split sleeper
             */
            oilTransportNoRestRequirement7DaySleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day with 24 hour reset
             */
            oilTransportNoRestRequirement8Day: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day (16-hour exemption) with 24 hour reset
             */
            oilTransportNoRestRequirement8DayBig: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day (16-hour exemption) with 24 hour reset and split sleeper
             */
            oilTransportNoRestRequirement8DayBigSleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day with 24 hour reset and split sleeper
             */
            oilTransportNoRestRequirement8DaySleeper: string;
            /**
             * The oil transport short-haul 60-hour/7-day short haul ruleset.
             */
            oilTransportShortHaul: string;
            /**
             * The oil transport short-haul 60-hour/7-day short haul ruleset 14hr Workday.
             */
            oilTransportShortHaul14hrWorkday: string;
            /**
             * The oil transport 70-hour/8-day short haul ruleset.
             */
            oilTransportShortHaul8Day: string;
            /**
             * The oil transport 70-hour/8-day short haul ruleset 14hr Workday.
             */
            oilTransportShortHaul8Day14hrWorkday: string;
            /**
             * The Texas oil transport ruleset.
             */
            oilTransportTexas: string;
            /**
             * The OilWell7Day day ruleset.
             */
            oilWell7Day: string;
            /**
             * The OilWell7DayBig day big ruleset.
             */
            oilWell7DayBig: string;
            /**
             * The OilWell7DayBigSleeper day big ruleset.
             */
            oilWell7DayBigSleeper: string;
            /**
             * The OilWell7DaySleeper day ruleset.
             */
            oilWell7DaySleeper: string;
            /**
             * The OilWell8Day day ruleset.
             */
            oilWell8Day: string;
            /**
             * The OilWell8DayBig day big ruleset.
             */
            oilWell8DayBig: string;
            /**
             * The OilWell8DayBigSleeper day big ruleset.
             */
            oilWell8DayBigSleeper: string;
            /**
             * The OilWell8DaySleeper day ruleset.
             */
            oilWell8DaySleeper: string;
            /**
             * California with OilWell with rest requirement
             */
            oilWellCalifornia8day: string;
            /**
             * California with OilWell
             */
            oilWellCaliforniaProperty: string;
            /**
             * USA Property Without 30Mins Rest Requirement 60-hour/7-day with 24 hour reset and oil well
             */
            oilWellNoRestRequirement7Day: string;
            /**
             * "USA Property Without 30Mins Rest Requirement 60-hour/7-day (16-hour exemption) with 24 hour reset and oil well
             */
            oilWellNoRestRequirement7DayBig: string;
            /**
             * "USA Property Without 30Mins Rest Requirement 60-hour/7-day (16-hour exemption) with 24 hour reset and oil well and split sleeper
             */
            oilWellNoRestRequirement7DayBigSleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 60-hour/7-day with 24 hour reset and oil well and split sleeper
             */
            oilWellNoRestRequirement7DaySleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day with 24 hour reset and oil well
             */
            oilWellNoRestRequirement8Day: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day (16-hour exemption) with 24 hour reset and oil well
             */
            oilWellNoRestRequirement8DayBig: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day (16-hour exemption) with 24 hour reset and oil well and split sleeper
             */
            oilWellNoRestRequirement8DayBigSleeper: string;
            /**
             * USA Property Without 30Mins Rest Requirement 70-hour/8-day with 24 hour reset and oil well and split sleeper
             */
            oilWellNoRestRequirement8DaySleeper: string;
            /**
             * The Texas oil well ruleset.
             */
            oilWellTexas: string;
            /**
             * Oregon 70-hour/7-day
             */
            oregon7day: string;
            /**
             * Oregon 80-hour/8-day
             */
            oregon8day: string;
            /**
             * South Carolina 70-hour/7-day
             */
            southCarolina7Day: string;
            /**
             * South Carolina 80-hour/8-day
             */
            southCarolina8Day: string;
            /**
             * Washington Intrastate 80-hour/7-day ruleset.
             */
            washingtonIntrastate7Day: string;
            /**
             * Washington Intrastate 90-hour/8-day ruleset.
             */
            washingtonIntrastate8Day: string;
        }
        /**
         * This is an identifier for an Entity object in the Geotab system. In JavaScript this is a string.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface Id {}
        /**
         * The IncludeGroups enum provides a method of querying for entities relative to the entity's position in the hierarchy of Group(s). Some entity types (such as Zone(s)) have implications to entities in their child groups. For example; on a map, it may be useful to include Zone(s) that are above the user's data scope groups. These Zone(s) will also apply to vehicles that are at or below the selected Group(s) of the Zone.
         */
        interface IncludeGroups {
            /**
             * Include Children groups in the query results.
             */
            child: string;
            /**
             * Directly related groups only in the query results.
             */
            direct: string;
            /**
             * Include Parent groups in the query results.
             */
            parent: string;
            /**
             * Include Parent and Children groups in the query results.
             */
            parentAndChild: string;
        }
        /**
         * This exception is thrown when a user attempts to perform an action that is not valid according to the API process.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface InvalidApiOperationException {}
        /**
         * This exception is thrown on a MyAdmin databaseName logon with an incorrect user/password combination or when the MyAdmin user's credentials become invalid on a databaseName.
         */
        interface InvalidMyAdminUserException {
            /**
             * The database related to the exception.
             */
            database: string;
            /**
             * The server related to the exception.
             */
            server: string;
        }
        /**
         * This exception is thrown when a user attempts to perform an action without sufficient permissions.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface InvalidPermissionsException {}
        /**
         * This exception is thrown on a logon with an incorrect user/password combination or when the user's credentials become invalid.
         */
        interface InvalidUserException {
            /**
             * The InvalidUserType of the exception.
             */
            invalidUserType: object;
        }
        /**
         * Represents an Iox Add-On (like modem or navigation device) that is attached to a GO unit. Each Iox Add-On is assigned a channel - which is the serial port number that it typically communicates with.
         */
        interface IoxAddOn {
            /**
             * The channel on which the Add-On is attached to the GO unit. This is typically just a serial
             * port. 0 means the Add-On is not attached.
             */
            channel: number;
            /**
             * The DateTime this IoxAddOn was assigned it's Channel.
             */
            dateTime: string;
            /**
             * The Device this IoxAddOn is connected to.
             */
            device: object;
            /**
             * The unique identifier for this Iox Add-On type. Iox Add-On types are assigned by Geotab.
             * See KnownIoxAddOnType.
             */
            type: number;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for IoxAddOn(s).
         */
        interface IoxAddOnSearch {
            /**
             * If  only Iox Add-Ons that are currently connected to a device will be returned.
             */
            connectedOnly: boolean;
            /**
             * Search for Iox Add-Ons that are or have been attached to this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for Iox Add-Ons of a specific type (Garmin, GoTalk etc). See KnownIoxAddOnType.
             */
            type: number;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents the status of an IoxAddOn that is attached to a GO unit.
         */
        interface IoxAddOnStatus {
            /**
             * Date/time the message was delivered.
             */
            delivered: string;
            /**
             * The Device this IoxAddOn is connected to.
             */
            device: object;
            /**
             * The device connection status (Active = 0, Inactive = 4, Disconnected = 1).
             */
            deviceConnectionStatus: object;
            /**
             * The date/time of last IOX/Passthrough communication for the device.
             */
            lastCommunicated: string;
            /**
             * The queue size of pending messages.
             */
            queueSize: number;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for IoxAddOnStatus(s).
         */
        interface IoxAddOnStatusSearch {
            /**
             * The device connection status (Active = 0, Inactive = 4, Disconnected = 1).
             */
            deviceConnectionStatus: object;
            /**
             * Search for Iox Add-On Statusess that are or have been attached to this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for IoxAddOnStatus records that were logged at this date or after.
             */
            fromDate: string;
            /**
             * Search for IoxAddOnStatus records that were logged at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The contents of a TextMessage that can be used to control the state of an IOX-OUTPUT.
         */
        interface IoxOutputContent {
            /**
             * A value indicating whether the relay state. [true] if the relay is on; otherwise, [false].
             */
            isRelayOn: boolean;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * An object containing key value pairs for the text that appears on the item. The key is the language and the value is the text, for example: {"EN", "New item"}.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ItemName {}
        /**
         * Models a JSON-RPC error provided as "error" property of JSON-RPC response object when an error is encountered while making a request. http://www.jsonrpc.org/specification#error_object.
         */
        interface JsonRpcError {
            /**
             * Exception code indicating the error type that occurred.
             */
            code: number;
            /**
             * The JsonRpcErrorData containing detailed information about the error.
             */
            data: object;
            /**
             * A short description of the error, ex: "Argument Out Of Range" with no error context-specific data.
             */
            message: string;
        }
        /**
         * The implementation specific error data for a JSON-RPC request error.
         * The nuget package API object throws JsonRpcError results as dotnet exceptions, as a result, these properties will populated in the Data property as key/value pair with key "JsonRpcErrorData".
         */
        interface JsonRpcErrorData {
            /**
             * The error instance identifier.
             */
            id: string;
            /**
             * A primitive or structured value that contains additional information about the error.
             * GroupRelationViolatedException will provide GroupRelations information.DbUnavailableException will provide State information.
             */
            info: string;
            /**
             * The index of the request in a "multicall" at which a failure occurred, otherwise [null].
             */
            requestIndex: number;
            /**
             * The type of error.
             */
            type: string;
        }
        /**
         * Mapping of jurisdiction regions.
         */
        interface Jurisdiction {
            /**
             * Asia.
             */
            aS: string;
            /**
             * Australia.
             */
            aU: string;
            /**
             * Brazil.
             */
            bR: string;
            /**
             * Canada.
             */
            cA: string;
            /**
             * Europe.
             */
            eU: string;
            /**
             * United States of America.
             */
            uS: string;
            /**
             * United States of America commercial government.
             */
            uSGov: string;
        }
        /**
         * All the system Ids.
         */
        interface KnownId {
            /**
             * Gets Active Engine Faults report default dashboard report schedule identifier.
             */
            activeEngineFaultsDefaultDashboardReportScheduleId: string;
            /**
             * ADDON_INVENTURE_ZONE_1_RETURN_TEMP diagnostic Id.
             */
            addonInventureZone1ReturnTemp: string;
            /**
             * ADDON_INVENTURE_ZONE_2_RETURN_TEMP diagnostic Id.
             */
            addonInventureZone2ReturnTemp: string;
            /**
             * ADDON_INVENTURE_ZONE_3_RETURN_TEMP diagnostic Id.
             */
            addonInventureZone3ReturnTemp: string;
            /**
             * Gets Aggressive Driving report default dashboard report schedule identifier.
             */
            aggressiveDrivingDefaultDashboardReportScheduleId: string;
            /**
             * The "All Rules" option for Reprocess Requests.
             */
            allRulesIdReprocessRequest: string;
            /**
             * Gets Average Fuel Economy report default dashboard report schedule identifier.
             */
            averageFuelEconomyDefaultDashboardReportScheduleId: string;
            /**
             * The controller aerodynamic control identifier.
             */
            controllerAerodynamicControlId: string;
            /**
             * The controller aerodynamic control unit identifier.
             */
            controllerAerodynamicControlUnitId: string;
            /**
             * The controller aftertreatment system gas intake identifier.
             */
            controllerAftertreatmentSystemGasIntakeId: string;
            /**
             * The controller aftertreatment system gas outlet identifier.
             */
            controllerAftertreatmentSystemGasOutletId: string;
            /**
             * The controller alternator electrical charging system identifier.
             */
            controllerAlternatorElectricalChargingSystemId: string;
            /**
             * Gets the controller any identifier.
             */
            controllerAnyId: string;
            /**
             * The controller auxiliary heater no1 identifier.
             */
            controllerAuxiliaryHeaterNo1Id: string;
            /**
             * The controller auxiliary heater no2 identifier.
             */
            controllerAuxiliaryHeaterNo2Id: string;
            /**
             * The controller auxiliary valve control identifier.
             */
            controllerAuxiliaryValveControlId: string;
            /**
             * The controller axle drive no1 identifier.
             */
            controllerAxleDriveNo1Id: string;
            /**
             * The controller axle drive no2 identifier.
             */
            controllerAxleDriveNo2Id: string;
            /**
             * The controller axle power unit identifier.
             */
            controllerAxlePowerUnitId: string;
            /**
             * The controller axle steering identifier.
             */
            controllerAxleSteeringId: string;
            /**
             * The controller axle trailer identifier.
             */
            controllerAxleTrailerId: string;
            /**
             * The controller body controller identifier.
             */
            controllerBodyControllerId: string;
            /**
             * The controller brakes drive axle no1 identifier.
             */
            controllerBrakesDriveAxleNo1Id: string;
            /**
             * The controller brakes drive axle no2 identifier.
             */
            controllerBrakesDriveAxleNo2Id: string;
            /**
             * The controller brakes power unit identifier.
             */
            controllerBrakesPowerUnitId: string;
            /**
             * The controller brakes steer axle identifier.
             */
            controllerBrakesSteerAxleId: string;
            /**
             * The controller brakes system controller identifier.
             */
            controllerBrakesSystemControllerId: string;
            /**
             * The controller brakes trailer no1 identifier.
             */
            controllerBrakesTrailerNo1Id: string;
            /**
             * The controller brakes trailer no2 identifier.
             */
            controllerBrakesTrailerNo2Id: string;
            /**
             * The controller brakes trailer no3 identifier.
             */
            controllerBrakesTrailerNo3Id: string;
            /**
             * The identifier for the fixed controller assigned for BRP specific faults.
             */
            controllerBrpFaultId: string;
            /**
             * The controller CAB climate control identifier.
             */
            controllerCabClimateControlId: string;
            /**
             * The controller CAB controller primary identifier.
             */
            controllerCabControllerPrimaryId: string;
            /**
             * The controller CAB controller secondary identifier.
             */
            controllerCabControllerSecondaryId: string;
            /**
             * The controller CAB display no1 identifier.
             */
            controllerCabDisplayNo1Id: string;
            /**
             * The controller CAB display no2 identifier.
             */
            controllerCabDisplayNo2Id: string;
            /**
             * The controller cargo refrigeration heating trailer identifier.
             */
            controllerCargoRefrigerationHeatingTrailerId: string;
            /**
             * The controller chassis controller no1 identifier.
             */
            controllerChassisControllerNo1Id: string;
            /**
             * The controller chassis controller no2 identifier.
             */
            controllerChassisControllerNo2Id: string;
            /**
             * The controller clutch converter unit identifier.
             */
            controllerClutchConverterUnitId: string;
            /**
             * The controller communication unit ground identifier.
             */
            controllerCommunicationUnitGroundId: string;
            /**
             * The controller communication unit satellite identifier.
             */
            controllerCommunicationUnitSatelliteId: string;
            /**
             * The controller communications unit cellular identifier.
             */
            controllerCommunicationsUnitCellularId: string;
            /**
             * The controller communications unit radio identifier.
             */
            controllerCommunicationsUnitRadioId: string;
            /**
             * The controller communications unit satellite identifier.
             */
            controllerCommunicationsUnitSatelliteId: string;
            /**
             * The controller cranking starting system identifier.
             */
            controllerCrankingStartingSystemId: string;
            /**
             * The controller data logging computer identifier.
             */
            controllerDataLoggingComputerId: string;
            /**
             * The geotab ai model controller identifier.
             */
            controllerDefaultGeotabAiModelId: string;
            /**
             * The controller diagnostic systems power unit identifier.
             */
            controllerDiagnosticSystemsPowerUnitId: string;
            /**
             * The controller diagnostic systems trailer identifier.
             */
            controllerDiagnosticSystemsTrailerId: string;
            /**
             * The controller driver information center no1 identifier.
             */
            controllerDriverInformationCenterNo1Id: string;
            /**
             * The controller electrical charging system identifier.
             */
            controllerElectricalChargingSystemId: string;
            /**
             * The controller electrical identifier.
             */
            controllerElectricalId: string;
            /**
             * The controller electrical system identifier.
             */
            controllerElectricalSystemId: string;
            /**
             * The controller endurance braking system identifier.
             */
            controllerEnduranceBrakingSystemId: string;
            /**
             * The controller engine no2 identifier.
             */
            controllerEngineNo2Id: string;
            /**
             * The controller engine no3 identifier.
             */
            controllerEngineNo3Id: string;
            /**
             * The controller engine retarder identifier.
             */
            controllerEngineRetarderId: string;
            /**
             * The controller engine valve controller identifier.
             */
            controllerEngineValveControllerId: string;
            /**
             * The controller exhaust emission controller identifier.
             */
            controllerExhaustEmissionControllerId: string;
            /**
             * The controller fan drive controller identifier.
             */
            controllerFanDriveControllerId: string;
            /**
             * The geotab ai model controller identifier.
             */
            controllerGeotabAiModelFaultId: string;
            /**
             * The identifier for the fixed controller assigned for GMCCC specific faults.
             */
            controllerGmcccFaultId: string;
            /**
             * The identifier for the fixed controller assigned to the GO device.
             */
            controllerGoDeviceId: string;
            /**
             * The controller headway controller identifier.
             */
            controllerHeadwayControllerId: string;
            /**
             * The controller hitch control identifier.
             */
            controllerHitchControlId: string;
            /**
             * The controller hydraulic pump controller identifier.
             */
            controllerHydraulicPumpControllerId: string;
            /**
             * The controller ignition control module no1 identifier.
             */
            controllerIgnitionControlModuleNo1Id: string;
            /**
             * The controller ignition control module no2 identifier.
             */
            controllerIgnitionControlModuleNo2Id: string;
            /**
             * The controller information system controller no1 identifier.
             */
            controllerInformationSystemControllerNo1Id: string;
            /**
             * The controller instrument cluster identifier.
             */
            controllerInstrumentClusterId: string;
            /**
             * The controller instrument cluster no1 identifier.
             */
            controllerInstrumentClusterNo1Id: string;
            /**
             * The controller J1708 cruise control identifier.
             */
            controllerJ1708CruiseControlId: string;
            /**
             * The controller J1708 engine identifier.
             */
            controllerJ1708EngineId: string;
            /**
             * The controller J1708 fuel system identifier.
             */
            controllerJ1708FuelSystemId: string;
            /**
             * The controller J1708 pneumatic system controller identifier.
             */
            controllerJ1708PneumaticSystemControllerId: string;
            /**
             * The controller J1708 power takeoff identifier.
             */
            controllerJ1708PowerTakeoffId: string;
            /**
             * The controller J1708 trip recorder identifier.
             */
            controllerJ1708TripRecorderId: string;
            /**
             * The controller J1708 turbocharger identifier.
             */
            controllerJ1708TurbochargerId: string;
            /**
             * The controller J1708 vehicle security identifier.
             */
            controllerJ1708VehicleSecurityId: string;
            /**
             * The controller J1939 cruise control identifier.
             */
            controllerJ1939CruiseControlId: string;
            /**
             * The controller J1939 engine no1 identifier.
             */
            controllerJ1939EngineNo1Id: string;
            /**
             * The controller J1939 engine no2 identifier.
             */
            controllerJ1939EngineNo2Id: string;
            /**
             * The controller J1939 fuel system identifier.
             */
            controllerJ1939FuelSystemId: string;
            /**
             * The controller J1939 pneumatic system controller identifier.
             */
            controllerJ1939PneumaticSystemControllerId: string;
            /**
             * The controller J1939 power take off main rear identifier.
             */
            controllerJ1939PowerTakeOffMainRearId: string;
            /**
             * The controller J1939 trip recorder identifier.
             */
            controllerJ1939TripRecorderId: string;
            /**
             * The controller J1939 turbocharger identifier.
             */
            controllerJ1939TurbochargerId: string;
            /**
             * The controller J1939 vehicle security identifier.
             */
            controllerJ1939VehicleSecurityId: string;
            /**
             * The identifier for the fixed controller assigned for legacy manufacturer specific faults.
             */
            controllerLegacyFaultId: string;
            /**
             * The Levc Any Controller KnownId.
             */
            controllerLevcAnyId: string;
            /**
             * The controller lighting operator controls identifier.
             */
            controllerLightingOperatorControlsId: string;
            /**
             * The controller management computer no1 identifier.
             */
            controllerManagementComputerNo1Id: string;
            /**
             * The controller multiplex identifier.
             */
            controllerMultiplexId: string;
            /**
             * The controller none identifier.
             */
            controllerNoneId: string;
            /**
             * The controller OBD body identifier.
             */
            controllerObdBodyId: string;
            /**
             * The controller OBD chassis identifier.
             */
            controllerObdChassisId: string;
            /**
             * The controller OBD networking identifier.
             */
            controllerObdNetworkingId: string;
            /**
             * The controller OBD powertrain identifier.
             */
            controllerObdPowertrainId: string;
            /**
             * The controller WWH OBD body identifier.
             */
            controllerObdWwhBodyId: string;
            /**
             * The controller WWH OBD chassis identifier.
             */
            controllerObdWwhChassisId: string;
            /**
             * The controller WWH OBD networking identifier.
             */
            controllerObdWwhNetworkingId: string;
            /**
             * The controller WWH OBD powertrain identifier.
             */
            controllerObdWwhPowertrainId: string;
            /**
             * The controller off vehicle gateway identifier.
             */
            controllerOffVehicleGatewayId: string;
            /**
             * The controller off-board diagnostics no1 identifier.
             */
            controllerOffboardDiagnosticsNo1Id: string;
            /**
             * The controller off-board diagnostics no2 identifier.
             */
            controllerOffboardDiagnosticsNo2Id: string;
            /**
             * The controller off-board programming station identifier.
             */
            controllerOffboardProgrammingStationId: string;
            /**
             * The controller oil sensor identifier.
             */
            controllerOilSensorId: string;
            /**
             * The controller on board diagnostic unit identifier.
             */
            controllerOnBoardDiagnosticUnitId: string;
            /**
             * The controller parking brake controller identifier.
             */
            controllerParkingBrakeControllerId: string;
            /**
             * The controller particulate trap system identifier.
             */
            controllerParticulateTrapSystemId: string;
            /**
             * The controller passenger operator climate control1 identifier.
             */
            controllerPassengerOperatorClimateControl1Id: string;
            /**
             * The controller passenger operator climate control no2 identifier.
             */
            controllerPassengerOperatorClimateControlNo2Id: string;
            /**
             * The controller power take off front secondary identifier.
             */
            controllerPowerTakeOffFrontSecondaryId: string;
            /**
             * The identifier for the fixed controller assigned for manufacturer specific faults.
             */
            controllerProprietaryFaultId: string;
            /**
             * The controller propulsion battery charger identifier.
             */
            controllerPropulsionBatteryChargerId: string;
            /**
             * The controller proximity detector front identifier.
             */
            controllerProximityDetectorFrontId: string;
            /**
             * The controller proximity detector rear identifier.
             */
            controllerProximityDetectorRearId: string;
            /**
             * The controller ramp control identifier.
             */
            controllerRampControlId: string;
            /**
             * The controller rear axle steering controller identifier.
             */
            controllerRearAxleSteeringControllerId: string;
            /**
             * The controller rear axle steering controller no1 identifier.
             */
            controllerRearAxleSteeringControllerNo1Id: string;
            /**
             * The controller retarder driveline identifier.
             */
            controllerRetarderDrivelineId: string;
            /**
             * The controller retarder engine identifier.
             */
            controllerRetarderEngineId: string;
            /**
             * The controller retarder exhaust engine no1 identifier.
             */
            controllerRetarderExhaustEngineNo1Id: string;
            /**
             * The controller retarder exhaust engine no2 identifier.
             */
            controllerRetarderExhaustEngineNo2Id: string;
            /**
             * The controller road speed indicator identifier.
             */
            controllerRoadSpeedIndicatorId: string;
            /**
             * The controller safety restraint system identifier.
             */
            controllerSafetyRestraintSystemId: string;
            /**
             * The controller seat control no1 identifier.
             */
            controllerSeatControlNo1Id: string;
            /**
             * The controller seat control no2 identifier.
             */
            controllerSeatControlNo2Id: string;
            /**
             * The controller shift console primary identifier.
             */
            controllerShiftConsolePrimaryId: string;
            /**
             * The controller shift console secondary identifier.
             */
            controllerShiftConsoleSecondaryId: string;
            /**
             * The controller starter system identifier.
             */
            controllerStarterSystemId: string;
            /**
             * The controller steering column unit identifier.
             */
            controllerSteeringColumnUnitId: string;
            /**
             * The controller steering controller identifier.
             */
            controllerSteeringControllerId: string;
            /**
             * The Controller suspension drive axle no1 identifier.
             */
            controllerSuspensionDriveAxleNo1Id: string;
            /**
             * The controller suspension drive axle no2 identifier.
             */
            controllerSuspensionDriveAxleNo2Id: string;
            /**
             * The controller suspension power unit identifier.
             */
            controllerSuspensionPowerUnitId: string;
            /**
             * The controller suspension steer axle identifier.
             */
            controllerSuspensionSteerAxleId: string;
            /**
             * The controller suspension system controller no1 identifier.
             */
            controllerSuspensionSystemControllerNo1Id: string;
            /**
             * The controller suspension system controller no2 identifier.
             */
            controllerSuspensionSystemControllerNo2Id: string;
            /**
             * The controller suspension trailer identifier.
             */
            controllerSuspensionTrailerId: string;
            /**
             * The controller tire pressure controller identifier.
             */
            controllerTirePressureControllerId: string;
            /**
             * The controller tires control unit identifier.
             */
            controllerTiresControlUnitId: string;
            /**
             * The controller tires power unit identifier.
             */
            controllerTiresPowerUnitId: string;
            /**
             * The controller tires trailer identifier.
             */
            controllerTiresTrailerId: string;
            /**
             * The controller tires trailer no2 identifier.
             */
            controllerTiresTrailerNo2Id: string;
            /**
             * The controller tires trailer no3 identifier.
             */
            controllerTiresTrailerNo3Id: string;
            /**
             * The controller tractor trailer bridge no1 identifier.
             */
            controllerTractorTrailerBridgeNo1Id: string;
            /**
             * The controller transmission additional hybrid control module identifier.
             */
            controllerTransmissionAdditionalHybridControlModuleId: string;
            /**
             * The controller transmission display primary identifier.
             */
            controllerTransmissionDisplayPrimaryId: string;
            /**
             * The controller transmission display secondary identifier.
             */
            controllerTransmissionDisplaySecondaryId: string;
            /**
             * The controller transmission identifier.
             */
            controllerTransmissionId: string;
            /**
             * The controller transmission no1 identifier.
             */
            controllerTransmissionNo1Id: string;
            /**
             * The controller transmission no2 identifier.
             */
            controllerTransmissionNo2Id: string;
            /**
             * The controller vehicle dynamic stability controller identifier.
             */
            controllerVehicleDynamicStabilityControllerId: string;
            /**
             * The controller vehicle management system identifier.
             */
            controllerVehicleManagementSystemId: string;
            /**
             * The controller vehicle management system no2 identifier.
             */
            controllerVehicleManagementSystemNo2Id: string;
            /**
             * The controller vehicle management system no3 identifier.
             */
            controllerVehicleManagementSystemNo3Id: string;
            /**
             * The controller vehicle navigation identifier.
             */
            controllerVehicleNavigationId: string;
            /**
             * The controller vehicle navigation unit identifier.
             */
            controllerVehicleNavigationUnitId: string;
            /**
             * The controller vehicle sensors to data converter identifier.
             */
            controllerVehicleSensorsToDataConverterId: string;
            /**
             * The controller virtual terminal identifier.
             */
            controllerVirtualTerminalId: string;
            /**
             * The controller water pump controller identifier.
             */
            controllerWaterPumpControllerId: string;
            /**
             * Gets the Replacement Completed Id.
             */
            deviceReplacementStatusCompletedId: string;
            /**
             * Gets the Replacement Eligible Id.
             */
            deviceReplacementStatusEligibleId: string;
            /**
             * Gets the Replacement Requested Id.
             */
            deviceReplacementStatusRequestedId: string;
            /**
             * The diagnostic ABS system active identifier.
             */
            diagnosticAbsSystemActiveId: string;
            /**
             * The diagnostic ABS warning light identifier.
             */
            diagnosticAbsWarningLightId: string;
            /**
             * The diagnostic ac control unit status identifier.
             */
            diagnosticAcControlUnitStatusId: string;
            /**
             * The diagnostic acceleration event before calibration identifier.
             */
            diagnosticAccelerationEventbeforeCalibrationId: string;
            /**
             * The diagnostic acceleration forward braking identifier.
             */
            diagnosticAccelerationForwardBrakingId: string;
            /**
             * The diagnostic acceleration side to side identifier.
             */
            diagnosticAccelerationSideToSideId: string;
            /**
             * The diagnostic acceleration up down identifier.
             */
            diagnosticAccelerationUpDownId: string;
            /**
             * The diagnostic accelerometer calibrated identifier.
             */
            diagnosticAccelerometerCalibratedId: string;
            /**
             * The diagnostic accelerometer failed to initialize identifier.
             */
            diagnosticAccelerometerFailedToInitializeId: string;
            /**
             * The diagnostic accelerometer interrupt failure identifier.
             */
            diagnosticAccelerometerInterruptFailureId: string;
            /**
             * The diagnostic accident data upload event identifier.
             */
            diagnosticAccidentDataUploadEventId: string;
            /**
             * The diagnostic accident level acceleration event identifier.
             */
            diagnosticAccidentLevelAccelerationEventId: string;
            /**
             * The diagnostic air conditioner refrigerant pressure identifier.
             */
            diagnosticAirConditionerRefrigerantPressureId: string;
            /**
             * The diagnostic airbag deployed identifier.
             */
            diagnosticAirbagDeployedId: string;
            /**
             * The diagnostic airbag nearly deployed identifier.
             */
            diagnosticAirbagNearlyDeployedId: string;
            /**
             * The diagnostic airbag warning light identifier.
             */
            diagnosticAirbagWarningLightId: string;
            /**
             * The diagnostic id for analog auxiliary 1.
             */
            diagnosticAnalogAux1Id: string;
            /**
             * The diagnostic id for analog auxiliary 2.
             */
            diagnosticAnalogAux2Id: string;
            /**
             * The diagnostic id for analog auxiliary 3.
             */
            diagnosticAnalogAux3Id: string;
            /**
             * The diagnostic id for analog auxiliary 4.
             */
            diagnosticAnalogAux4Id: string;
            /**
             * The diagnostic id for analog auxiliary 5.
             */
            diagnosticAnalogAux5Id: string;
            /**
             * The diagnostic id for analog auxiliary 6.
             */
            diagnosticAnalogAux6Id: string;
            /**
             * The diagnostic id for analog auxiliary 7.
             */
            diagnosticAnalogAux7Id: string;
            /**
             * The diagnostic id for analog auxiliary 8.
             */
            diagnosticAnalogAux8Id: string;
            /**
             * The diagnostic analog input pressure 1.
             */
            diagnosticAnalogInputPressure1Id: string;
            /**
             * The diagnostic analog input pressure 2.
             */
            diagnosticAnalogInputPressure2Id: string;
            /**
             * The diagnostic analog input temperature 1.
             */
            diagnosticAnalogInputTemp1Id: string;
            /**
             * The diagnostic analog input temperature 2.
             */
            diagnosticAnalogInputTemp2Id: string;
            /**
             * The diagnostic analog input temperature 3.
             */
            diagnosticAnalogInputTemp3Id: string;
            /**
             * The diagnostic APN re scan started due to connection failure identifier.
             */
            diagnosticApnReScanStartedDueToConnectionFailureId: string;
            /**
             * The diagnostic aux1 identifier.
             */
            diagnosticAux1Id: string;
            /**
             * The diagnostic aux2 identifier.
             */
            diagnosticAux2Id: string;
            /**
             * The diagnostic aux3 identifier.
             */
            diagnosticAux3Id: string;
            /**
             * The diagnostic aux4 identifier.
             */
            diagnosticAux4Id: string;
            /**
             * The diagnostic aux5 identifier.
             */
            diagnosticAux5Id: string;
            /**
             * The diagnostic aux6 identifier.
             */
            diagnosticAux6Id: string;
            /**
             * The diagnostic aux7 identifier.
             */
            diagnosticAux7Id: string;
            /**
             * The diagnostic aux8 identifier.
             */
            diagnosticAux8Id: string;
            /**
             * The diagnostic auxiliary module failure identifier.
             */
            diagnosticAuxiliaryModuleFailureId: string;
            /**
             * The diagnostic average fuel economy identifier.
             */
            diagnosticAverageFuelEconomyId: string;
            /**
             * The diagnostic average fuel economy natural gas identifier.
             */
            diagnosticAverageFuelEconomynaturalGasId: string;
            /**
             * The diagnostic battery current identifier.
             */
            diagnosticBatteryCurrentId: string;
            /**
             * The diagnostic Battery Level.
             */
            diagnosticBatteryLevelId: string;
            /**
             * The diagnostic battery temperature identifier.
             */
            diagnosticBatteryTemperatureId: string;
            /**
             * The diagnostic Battery voltage.
             */
            diagnosticBatteryVoltageId: string;
            /**
             * The diagnostic Bluetooth Ammonia (NH3) concentration identifier.
             */
            diagnosticBluetoothAmmoniaConcentrationId: string;
            /**
             * The diagnostic Bluetooth beacon battery level identifier.
             */
            diagnosticBluetoothBeaconBatteryLevelId: string;
            /**
             * The diagnostic Bluetooth beacon category identifier.
             */
            diagnosticBluetoothBeaconCategoryId: string;
            /**
             * The diagnostic Bluetooth beacon in range identifier.
             */
            diagnosticBluetoothBeaconInRangeId: string;
            /**
             * The diagnostic Bluetooth beacon live altitude identifier.
             */
            diagnosticBluetoothBeaconLiveAltitudeId: string;
            /**
             * The diagnostic Bluetooth beacon live barometric pressure identifier.
             */
            diagnosticBluetoothBeaconLiveBarometricPressureId: string;
            /**
             * The diagnostic Bluetooth beacon live impact identifier.
             */
            diagnosticBluetoothBeaconLiveImpactId: string;
            /**
             * The diagnostic Bluetooth beacon live light identifier.
             */
            diagnosticBluetoothBeaconLiveLightId: string;
            /**
             * The diagnostic Bluetooth beacon live relative humidity identifier.
             */
            diagnosticBluetoothBeaconLiveRelativeHumidityId: string;
            /**
             * The diagnostic Bluetooth beacon live temperature identifier.
             */
            diagnosticBluetoothBeaconLiveTemperatureId: string;
            /**
             * The diagnostic Bluetooth beacon particulate matter less than 10 micrometers identifier.
             */
            diagnosticBluetoothBeaconParticulateMatter10MicronId: string;
            /**
             * The diagnostic Bluetooth beacon particulate matter less than 1 micrometer identifier.
             */
            diagnosticBluetoothBeaconParticulateMatter1MicronId: string;
            /**
             * The diagnostic Bluetooth beacon particulate matter less than 2.5 micrometers identifier.
             */
            diagnosticBluetoothBeaconParticulateMatter2P5MicronId: string;
            /**
             * The diagnostic Bluetooth Carbon Dioxide (CO2) concentration identifier.
             */
            diagnosticBluetoothCarbonDioxideConcentrationId: string;
            /**
             * The diagnostic Bluetooth Carbon Monoxide (CO) concentration identifier.
             */
            diagnosticBluetoothCarbonMonoxideConcentrationId: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 255.
             */
            diagnosticBluetoothCustomData255Id: string;
            /**
             * The diagnostic Bluetooth Ethanol (C2H5OH) concentration identifier.
             */
            diagnosticBluetoothEthanolConcentrationId: string;
            /**
             * The diagnostic Bluetooth fuel level identifier.
             */
            diagnosticBluetoothFuelLevelId: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 230.
             */
            diagnosticBluetoothGenericByte230Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 231.
             */
            diagnosticBluetoothGenericByte231Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 232.
             */
            diagnosticBluetoothGenericByte232Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 233.
             */
            diagnosticBluetoothGenericByte233Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 234.
             */
            diagnosticBluetoothGenericByte234Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 235.
             */
            diagnosticBluetoothGenericByte235Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 236.
             */
            diagnosticBluetoothGenericByte236Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 237.
             */
            diagnosticBluetoothGenericByte237Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 238.
             */
            diagnosticBluetoothGenericByte238Id: string;
            /**
             * The diagnostic Bluetooth generic byte for identifer 239.
             */
            diagnosticBluetoothGenericByte239Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 240.
             */
            diagnosticBluetoothGenericTimer240Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 241.
             */
            diagnosticBluetoothGenericTimer241Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 242.
             */
            diagnosticBluetoothGenericTimer242Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 243.
             */
            diagnosticBluetoothGenericTimer243Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 244.
             */
            diagnosticBluetoothGenericTimer244Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 245.
             */
            diagnosticBluetoothGenericTimer245Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 246.
             */
            diagnosticBluetoothGenericTimer246Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 247.
             */
            diagnosticBluetoothGenericTimer247Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 248.
             */
            diagnosticBluetoothGenericTimer248Id: string;
            /**
             * The diagnostic Bluetooth generic timer for identifer 249.
             */
            diagnosticBluetoothGenericTimer249Id: string;
            /**
             * The diagnostic Bluetooth Hydrogen (H2) concentration identifier.
             */
            diagnosticBluetoothHydrogenConcentrationId: string;
            /**
             * The diagnostic Bluetooth Methane (CH4) concentration identifier.
             */
            diagnosticBluetoothMethaneConcentrationId: string;
            /**
             * The diagnostic Bluetooth Nitric Oxide (NO) concentration identifier.
             */
            diagnosticBluetoothNitricOxideConcentrationId: string;
            /**
             * The diagnostic Bluetooth Nitrogen Dioxide (NO2) concentration identifier.
             */
            diagnosticBluetoothNitrogenDioxideConcentrationId: string;
            /**
             * The diagnostic Bluetooth RSSI ID.
             */
            diagnosticBluetoothRssiId: string;
            /**
             * The diagnostic bootloader update has failed identifier.
             */
            diagnosticBootloaderUpdateHasFailedId: string;
            /**
             * The diagnostic brake pedal on identifier.
             */
            diagnosticBrakePedalOnId: string;
            /**
             * The diagnostic brake temperature identifier.
             */
            diagnosticBrakeTemperatureId: string;
            /**
             * The diagnostic bus access door identifier.
             */
            diagnosticBusAccessDoorId: string;
            /**
             * The diagnostic CAB interior temperature identifier.
             */
            diagnosticCabInteriorTemperatureId: string;
            /**
             * The diagnostic CANBUS disabled identifier.
             */
            diagnosticCanBusDisabledId: string;
            /**
             * The diagnostic CANBUS excessive listen identifier.
             */
            diagnosticCanBusExcessiveListenId: string;
            /**
             * The diagnostic CANBUS failed to initialize identifier.
             */
            diagnosticCanBusFailedToInitializeId: string;
            /**
             * The diagnostic CANBUS oscillating active passive identifier.
             */
            diagnosticCanBusOscillatingActivePassiveId: string;
            /**
             * The diagnostic CANBUS short identifier.
             */
            diagnosticCanBusShortId: string;
            /**
             * The diagnostic CAN mode initialization failure identifier.
             */
            diagnosticCanModeInitializationFailureId: string;
            /**
             * The diagnostic can transmit error count exceeded identifier.
             */
            diagnosticCanTransmitErrorCountExceededId: string;
            /**
             * The diagnostic device cellular RSSI.
             */
            diagnosticCellularRssiId: string;
            /**
             * The diagnostic change clean exhaust filter warning light identifier.
             */
            diagnosticChangeCleanExhaustFilterWarningLightId: string;
            /**
             * The diagnostic change fuel filter warning light identifier.
             */
            diagnosticChangeFuelFilterWarningLightId: string;
            /**
             * The diagnostic charge state identifier.
             */
            diagnosticChargeStateId: string;
            /**
             * The diagnostic winter operation controller status.
             */
            diagnosticControllerStatusId: string;
            /**
             * The diagnostic coolant level identifier.
             */
            diagnosticCoolantLevelId: string;
            /**
             * The diagnostic cranking voltage identifier.
             */
            diagnosticCrankingVoltageId: string;
            /**
             * The diagnostic cruise control active identifier.
             */
            diagnosticCruiseControlActiveId: string;
            /**
             * The diagnostic cruise control enabled identifier.
             */
            diagnosticCruiseControlEnabledId: string;
            /**
             * The diagnostic dash warning light amber lamp identifier.
             */
            diagnosticDashWarningLightAmberLampId: string;
            /**
             * The diagnostic dash warning light protect lamp identifier.
             */
            diagnosticDashWarningLightProtectLampId: string;
            /**
             * The diagnostic dash warning light red lamp identifier.
             */
            diagnosticDashWarningLightRedLampId: string;
            /**
             * The diagnostic device battery voltage.
             */
            diagnosticDeviceBatteryVoltageId: string;
            /**
             * The diagnostic device disabled identifier.
             */
            diagnosticDeviceDisabledId: string;
            /**
             * The diagnostic device has been unplugged identifier.
             */
            diagnosticDeviceHasBeenUnpluggedId: string;
            /**
             * The diagnostic device logging disabled identifier.
             */
            diagnosticDeviceLoggingDisabledId: string;
            /**
             * The diagnostic device oscillator issue identifier.
             */
            diagnosticDeviceOscillatorIssueId: string;
            /**
             * The diagnostic device power change identifier.
             */
            diagnosticDevicePowerChangeId: string;
            /**
             * The diagnostic device restarted because all power was removed identifier.
             */
            diagnosticDeviceRestartedBecauseAllPowerWasRemovedId: string;
            /**
             * The diagnostic device restarted because of firmware update identifier.
             */
            diagnosticDeviceRestartedBecauseOfFirmwareUpdateId: string;
            /**
             * The diagnostic device restarted because of low voltage in power supply identifier.
             */
            diagnosticDeviceRestartedBecauseOfLowVoltageInPowerSupplyId: string;
            /**
             * The diagnostic device restarted due to internal reset condition identifier.
             */
            diagnosticDeviceRestartedDueToInternalResetConditionId: string;
            /**
             * The diagnostic device restarted due to internal watchdog condition identifier.
             */
            diagnosticDeviceRestartedDueToInternalWatchdogConditionId: string;
            /**
             * The diagnostic device solar panel current
             */
            diagnosticDeviceSolarPanelCurrentId: string;
            /**
             * The diagnostic device total fuel identifier.
             */
            diagnosticDeviceTotalFuelId: string;
            /**
             * The diagnostic device total idle fuel identifier.
             */
            diagnosticDeviceTotalIdleFuelId: string;
            /**
             * The diagnostic diesel exhaust fluid identifier.
             */
            diagnosticDieselExhaustFluidId: string;
            /**
             * The diagnostic diesel particulate filter lamp identifier.
             */
            diagnosticDieselParticulateFilterLampId: string;
            /**
             * The diagnostic disabled excessive accelerometer data identifier.
             */
            diagnosticDisabledExcessiveAccelerometerDataId: string;
            /**
             * The diagnostic driver airbag deployed identifier.
             */
            diagnosticDriverAirbagDeployedId: string;
            /**
             * The diagnostic driver audible alert for idle shutdown timer identifier.
             */
            diagnosticDriverAudibleAlertForIdleShutdownTimerId: string;
            /**
             * The diagnostic driver seat belt identifier.
             */
            diagnosticDriverSeatbeltId: string;
            /**
             * The electric vehicle battery total driving energy in identifier. Units: kWh
             */
            diagnosticElectricEnergyInId: string;
            /**
             * The electric vehicle battery total driving energy out identifier. Units: kWh
             */
            diagnosticElectricEnergyOutId: string;
            /**
             * The diagnostic id for electric vehicle battery power.
             */
            diagnosticElectricVehicleBatteryPowerId: string;
            /**
             * The diagnostic id for charge type (AC or DC).
             */
            diagnosticElectricVehicleChargingStateId: string;
            /**
             * The diagnostic id for the IsCharging signal
             */
            diagnosticElectricVehicleIsChargingId: string;
            /**
             * The diagnostic electrical system rating identifier.
             */
            diagnosticElectricalSystemRatingId: string;
            /**
             * The diagnostic engine check fuel filler cap warning light identifier.
             */
            diagnosticEngineCheckFuelFillerCapWarningLightId: string;
            /**
             * The diagnostic engine coolant temperature identifier.
             */
            diagnosticEngineCoolantTemperatureId: string;
            /**
             * The diagnostic engine cooling fan speed identifier.
             */
            diagnosticEngineCoolingFanSpeedId: string;
            /**
             * The diagnostic engine data active identifier.
             */
            diagnosticEngineDataActiveId: string;
            /**
             * The diagnostic engine hot warning light identifier.
             */
            diagnosticEngineHotWarningLightId: string;
            /**
             * The diagnostic engine hours adjustment identifier.
             */
            diagnosticEngineHoursAdjustmentId: string;
            /**
             * The diagnostic engine hours identifier.
             */
            diagnosticEngineHoursId: string;
            /**
             * The diagnostic engine oil level identifier.
             */
            diagnosticEngineOilLevelId: string;
            /**
             * The diagnostic engine oil life remaining identifier.
             */
            diagnosticEngineOilLifeRemainingId: string;
            /**
             * The diagnostic engine oil starvation indicator on identifier.
             */
            diagnosticEngineOilStarvationIndicatorOnId: string;
            /**
             * The diagnostic engine oil temperature identifier.
             */
            diagnosticEngineOilTemperatureId: string;
            /**
             * The diagnostic engine on time identifier.
             */
            diagnosticEngineOnTimeId: string;
            /**
             * The diagnostic engine operating in reduced power mode warning light identifier.
             */
            diagnosticEngineOperatingInReducedPowerModeWarningLightId: string;
            /**
             * The diagnostic engine road speed identifier.
             */
            diagnosticEngineRoadSpeedId: string;
            /**
             * The diagnostic engine running due to vehicle remote starter identifier.
             */
            diagnosticEngineRunningDueToVehicleRemoteStarterId: string;
            /**
             * The diagnostic engine shutdown by idle timer identifier.
             */
            diagnosticEngineShutdownByIdleTimerId: string;
            /**
             * The diagnostic engine speed identifier.
             */
            diagnosticEngineSpeedId: string;
            /**
             * The diagnostic engine starting disabled warning light identifier.
             */
            diagnosticEngineStartingDisabledWarningLightId: string;
            /**
             * The diagnostic engine transmission oil temperature identifier.
             */
            diagnosticEngineTransmissionOilTemperatureId: string;
            /**
             * The diagnostic engine warning light identifier.
             */
            diagnosticEngineWarningLightId: string;
            /**
             * The ID of the diagnostic for EV Powertrain Type (Code 9, Source Ai Model).
             */
            diagnosticEvPowertrainTypeId: string;
            /**
             * The diagnostic excessive accelerometer events identifier.
             */
            diagnosticExcessiveAccelerometerEventsId: string;
            /**
             * The diagnostic excessive accelerometer events over accident threshold identifier.
             */
            diagnosticExcessiveAccelerometerEventsOverAccidentThresholdId: string;
            /**
             * The diagnostic excessive accelerometer logs in a single event identifier.
             */
            diagnosticExcessiveAccelerometerLogsInASingleEventId: string;
            /**
             * The diagnostic excessive logging detected identifier.
             */
            diagnosticExcessiveLoggingDetectedId: string;
            /**
             * The diagnostic exhaust differential pressure identifier.
             */
            diagnosticExhaustDifferentialPressureId: string;
            /**
             * The diagnostic first row middle seat belt identifier.
             */
            diagnosticFirstRowMiddleSeatbeltId: string;
            /**
             * The diagnostic flash error count identifier.
             */
            diagnosticFlashErrorCountId: string;
            /**
             * The diagnostic flash memory failure identifier.
             */
            diagnosticFlashMemoryFailureId: string;
            /**
             * The diagnostic flashing amber light identifier.
             */
            diagnosticFlashingAmberLightId: string;
            /**
             * The diagnostic flashing red light identifier.
             */
            diagnosticFlashingRedLightId: string;
            /**
             * The diagnostic Ford ISO protocol detected identifier.
             */
            diagnosticFordIsoProtocolDetectedId: string;
            /**
             * The diagnostic frontal impact pretensioner severity achieved identifier.
             */
            diagnosticFrontalImpactPretensionerSeverityAchievedId: string;
            /**
             * The diagnostic frontal impact stage1 severity achieved identifier.
             */
            diagnosticFrontalImpactStage1SeverityAchievedId: string;
            /**
             * The diagnostic frontal impact stage2 severity achieved identifier.
             */
            diagnosticFrontalImpactStage2SeverityAchievedId: string;
            /**
             * The diagnostic fuel alcohol composition identifier.
             */
            diagnosticFuelAlcoholCompositionId: string;
            /**
             * The diagnostic fuel filter life remaining identifier.
             */
            diagnosticFuelFilterLifeRemainingId: string;
            /**
             * The diagnostic fuel level identifier.
             */
            diagnosticFuelLevelId: string;
            /**
             * The diagnostic fuel tank capacity identifier.
             */
            diagnosticFuelTankCapacityId: string;
            /**
             * The diagnostic fuel type for Compressed Natural Gas
             */
            diagnosticFuelTypeCompressedNaturalGasId: string;
            /**
             * The diagnostic fuel type for Diesel
             */
            diagnosticFuelTypeDieselId: string;
            /**
             * The diagnostic fuel type for Electric
             */
            diagnosticFuelTypeElectricId: string;
            /**
             * The diagnostic fuel type for Ethanol
             */
            diagnosticFuelTypeEthanolId: string;
            /**
             * The diagnostic fuel type for Gasoline
             */
            diagnosticFuelTypeGasId: string;
            /**
             * The diagnostic fuel type for Liquified Petroleum Gas
             */
            diagnosticFuelTypeLiquifiedPetroleumGasId: string;
            /**
             * The diagnostic fuel type for Methanol
             */
            diagnosticFuelTypeMethanolId: string;
            /**
             * The diagnostic fuel type for Propane
             */
            diagnosticFuelTypePropaneId: string;
            /**
             * The diagnostic fuel units identifier.
             */
            diagnosticFuelUnitsId: string;
            /**
             * The diagnostic gear position identifier.
             */
            diagnosticGearPositionId: string;
            /**
             * The diagnostic general vehicle warning light identifier.
             */
            diagnosticGeneralVehicleWarningLightId: string;
            /**
             * The diagnostic generic Adblue tank level.
             */
            diagnosticGenericAdblueTankLevelId: string;
            /**
             * The diagnostic "Generic incremental distance (based on engine road speed)".
             */
            diagnosticGenericIncrementalDistanceId: string;
            /**
             * The diagnostic Geotab driver key read error identifier.
             */
            diagnosticGeotabDriverKeyReadErrorId: string;
            /**
             * The diagnostic GM SWC low speed protocol detected identifier.
             */
            diagnosticGmSwcLowSpeedProtocolDetectedId: string;
            /**
             * The diagnostic GMLAN high speed engine protocol detected identifier.
             */
            diagnosticGmlanHighspeedEngineProtocolDetectedId: string;
            /**
             * The diagnostic GMLAN low speed engine protocol detected identifier.
             */
            diagnosticGmlanLowspeedEngineProtocolDetectedId: string;
            /**
             * The diagnostic GO device voltage identifier.
             */
            diagnosticGoDeviceVoltageId: string;
            /**
             * The diagnostic GPS antenna short circuit identifier.
             */
            diagnosticGpsAntennaShortCircuitId: string;
            /**
             * The diagnostic GPS antenna unplugged identifier.
             */
            diagnosticGpsAntennaUnpluggedId: string;
            /**
             * The diagnostic GPS configuration retry identifier.
             */
            diagnosticGpsConfigurationRetryId: string;
            /**
             * The diagnostic GPS log reason.
             */
            diagnosticGpsLogReasonId: string;
            /**
             * The diagnostic GPS not responding identifier.
             */
            diagnosticGpsNotRespondingId: string;
            /**
             * The diagnostic hard corner identifier.
             */
            diagnosticHardCornerId: string;
            /**
             * The diagnostic harness detected6 pin identifier.
             */
            diagnosticHarnessDetected6PinId: string;
            /**
             * The diagnostic harness detected9 pin identifier.
             */
            diagnosticHarnessDetected9PinId: string;
            /**
             * The diagnostic harsh acceleration identifier.
             */
            diagnosticHarshAccelerationId: string;
            /**
             * The diagnostic harsh brake identifier.
             */
            diagnosticHarshBrakeId: string;
            /**
             * The diagnostic high voltage while ignition off identifier.
             */
            diagnosticHighVoltageWhileIgnitionOffId: string;
            /**
             * The diagnostic Honda IDO engine protocol detected identifier.
             */
            diagnosticHondaIsoEngineProtocolDetectedId: string;
            /**
             * The diagnostic horizontal DOP
             */
            diagnosticHorizontalDopId: string;
            /**
             * The diagnostic hybrid engine status identifier.
             */
            diagnosticHybridEngineStatusId: string;
            /**
             * The diagnostic hybrid vehicle detected identifier.
             */
            diagnosticHybridVehicleDetectedId: string;
            /**
             * The diagnostic idle shutdown timer active identifier.
             */
            diagnosticIdleShutdownTimerActiveId: string;
            /**
             * The diagnostic idle shutdown timer enabled identifier.
             */
            diagnosticIdleShutdownTimerEnabledId: string;
            /**
             * The diagnostic idle shutdown timer override identifier.
             */
            diagnosticIdleShutdownTimerOverrideId: string;
            /**
             * The diagnostic ignition identifier.
             */
            diagnosticIgnitionId: string;
            /**
             * The diagnostic instantaneous fuel economy identifier.
             */
            diagnosticInstantaneousFuelEconomyId: string;
            /**
             * The diagnostic instantaneous fuel rate identifier.
             */
            diagnosticInstantaneousFuelRateId: string;
            /**
             * The diagnostic intermittent connection communications identifier.
             */
            diagnosticIntermittentConnectionCommunicationsId: string;
            /**
             * The diagnostic internal clock stopped identifier.
             */
            diagnosticInternalClockStoppedId: string;
            /**
             * The diagnostic invalid device type detected identifier.
             */
            diagnosticInvalidDeviceTypeDetectedId: string;
            /**
             * The diagnostic invalid driver identifier.
             */
            diagnosticInvalidDriverIdId: string;
            /**
             * The diagnostic invalid GPS messages received identifier.
             */
            diagnosticInvalidGpsMessagesReceivedId: string;
            /**
             * The diagnostic invalid opcode reset identifier.
             */
            diagnosticInvalidOpcodeResetId: string;
            /**
             * The diagnostic Iridium accelerometer event identifier.
             */
            diagnosticIridiumAccelerometerEventId: string;
            /**
             * The diagnostic Iridium low voltage identifier.
             */
            diagnosticIridiumLowVoltageId: string;
            /**
             * The diagnostic ISO14230 legacy engine protocol detected identifier.
             */
            diagnosticIso14230LegacyEngineProtocolDetectedId: string;
            /**
             * The diagnostic ISO9141 legacy engine protocol detected identifier.
             */
            diagnosticIso9141LegacyEngineProtocolDetectedId: string;
            /**
             * The diagnostic J1708 ALDL harness detected identifier.
             */
            diagnosticJ1708AldlHarnessDetectedId: string;
            /**
             * The diagnostic J1708 engine hours identifier.
             */
            diagnosticJ1708EngineHoursId: string;
            /**
             * The diagnostic J1708 engine protocol detected identifier.
             */
            diagnosticJ1708EngineProtocolDetectedId: string;
            /**
             * The diagnostic J1708 total vehicle distance identifier.
             */
            diagnosticJ1708TotalVehicleDistanceId: string;
            /**
             * The diagnostic J1850 PWM legacy engine protocol detected identifier.
             */
            diagnosticJ1850PwmLegacyEngineProtocolDetectedId: string;
            /**
             * The diagnostic J1850 VPW legacy engine protocol detected identifier.
             */
            diagnosticJ1850VpwLegacyEngineProtocolDetectedId: string;
            /**
             * The diagnostic J1939 CAN engine protocol detected identifier.
             */
            diagnosticJ1939CanEngineProtocolDetectedId: string;
            /**
             * The diagnostic J1939 engine hours identifier.
             */
            diagnosticJ1939EngineHoursId: string;
            /**
             * The diagnostic J1939 total vehicle distance identifier.
             */
            diagnosticJ1939TotalVehicleDistanceId: string;
            /**
             * The diagnostic left rear door open
             */
            diagnosticLeftRearDoorOpenId: string;
            /**
             * The diagnostic left side airbag deployed identifier.
             */
            diagnosticLeftSideAirbagDeployedId: string;
            /**
             * The diagnostic left side severity achieved identifier.
             */
            diagnosticLeftSideSeverityAchievedId: string;
            /**
             * The diagnostic left turn signal identifier.
             */
            diagnosticLeftTurnSignalId: string;
            /**
             * The diagnostic liquid material rate.
             */
            diagnosticLiquidMaterialRateId: string;
            /**
             * The diagnostic truck liquid material type.
             */
            diagnosticLiquidMaterialTypeId: string;
            /**
             * The diagnostic third party (custom device) log data buffer overrun value.
             */
            diagnosticLogDataBufferOverrunId: string;
            /**
             * The diagnostic low priority warning light identifier.
             */
            diagnosticLowPriorityWarningLightId: string;
            /**
             * The diagnostic memory allocation error identifier.
             */
            diagnosticMemoryAllocationErrorId: string;
            /**
             * The diagnostic memory pointer error identifier.
             */
            diagnosticMemoryPointerErrorId: string;
            /**
             * The diagnostic OBD odometer reader identifier.
             */
            diagnosticObdOdometerReaderId: string;
            /**
             * The diagnostic OBD port alert status identifier.
             */
            diagnosticObdPortAlertStatusId: string;
            /**
             * The diagnostic OBDCAN 11 Bit 250 K engine protocol detected identifier.
             */
            diagnosticObdcan11Bit250KEngineProtocolDetectedId: string;
            /**
             * The diagnostic OBDCAN 11 Bit 500 K engine protocol detected identifier.
             */
            diagnosticObdcan11Bit500KEngineProtocolDetectedId: string;
            /**
             * The diagnostic OBDCAN 29 Bit 250 K engine protocol detected identifier.
             */
            diagnosticObdcan29Bit250KEngineProtocolDetectedId: string;
            /**
             * The diagnostic OBDCAN 29 Bit 500 K engine protocol detected identifier.
             */
            diagnosticObdcan29Bit500KEngineProtocolDetectedId: string;
            /**
             * The diagnostic odometer adjustment identifier.
             */
            diagnosticOdometerAdjustmentId: string;
            /**
             * The diagnostic odometer identifier.
             */
            diagnosticOdometerId: string;
            /**
             * The diagnostic oil change due warning light identifier.
             */
            diagnosticOilChangeDueWarningLightId: string;
            /**
             * The diagnostic oil level low warning light identifier.
             */
            diagnosticOilLevelLowWarningLightId: string;
            /**
             * The diagnostic oil light on identifier.
             */
            diagnosticOilLightOnId: string;
            /**
             * The diagnostic oil pressure identifier.
             */
            diagnosticOilPressureId: string;
            /**
             * The diagnostic id for the power going into the on-board charger from an AC EVSE (W).
             */
            diagnosticOnBoardChargerACInputPowerId: string;
            /**
             * The diagnostic id for AC voltage.
             */
            diagnosticOnBoardChargerAcInputVoltageId: string;
            /**
             * The diagnostic id for the power coming out of the on-board charger in the form of DC (W).
             */
            diagnosticOnBoardChargerDCOutputPowerId: string;
            /**
             * The diagnostic outside temperature identifier.
             */
            diagnosticOutsideTemperatureId: string;
            /**
             * The diagnostic panic identifier.
             */
            diagnosticPanicId: string;
            /**
             * The diagnostic parking brake identifier.
             */
            diagnosticParkingBrakeId: string;
            /**
             * The diagnostic passenger airbag deployed identifier.
             */
            diagnosticPassengerAirbagDeployedId: string;
            /**
             * The diagnostic passenger occupancy identifier.
             */
            diagnosticPassengerOccupancyId: string;
            /**
             * The diagnostic passenger seat belt violation identifier.
             */
            diagnosticPassengerSeatbeltViolationId: string;
            /**
             * The diagnostic position valid identifier from device.
             */
            diagnosticPositionValidAtDeviceId: string;
            /**
             * The diagnostic position valid identifier.
             */
            diagnosticPositionValidId: string;
            /**
             * The diagnostic possible collision detected identifier.
             */
            diagnosticPossibleCollisionDetectedId: string;
            /**
             * The diagnostic potential bad install identifier.
             */
            diagnosticPotentialBadInstallId: string;
            /**
             * The diagnostic power takeoff engaged identifier.
             */
            diagnosticPowerTakeoffEngagedId: string;
            /**
             * The diagnostic power takeoff total fuel used identifier.
             */
            diagnosticPowerTakeoffTotalFuelUsedId: string;
            /**
             * The diagnostic truck pre wet material rate.
             */
            diagnosticPreWetMaterialRateId: string;
            /**
             * The diagnostic truck pre wet material type.
             */
            diagnosticPreWetMaterialTypeId: string;
            /**
             * The diagnostic PTO enabled identifier.
             */
            diagnosticPtoEnabledId: string;
            /**
             * The diagnostic ram memory failure id.
             */
            diagnosticRamFailureId: string;
            /**
             * The diagnostic raw odometer identifier.
             */
            diagnosticRawOdometerId: string;
            /**
             * The diagnostic rear impact severity achieved identifier.
             */
            diagnosticRearImpactSeverityAchievedId: string;
            /**
             * The diagnostic id for peripheral device: reefer temp zone 1.
             */
            diagnosticReeferTemperatureZone1Id: string;
            /**
             * The diagnostic id for peripheral device: reefer temp zone 2.
             */
            diagnosticReeferTemperatureZone2Id: string;
            /**
             * The diagnostic id for peripheral device: reefer temp zone 3.
             */
            diagnosticReeferTemperatureZone3Id: string;
            /**
             * The diagnostic id for peripheral device: reefer temp zone 4.
             */
            diagnosticReeferTemperatureZone4Id: string;
            /**
             * The diagnostic restarted the modem manager state machine identifier.
             */
            diagnosticRestartedTheModemManagerStateMachineId: string;
            /**
             * The diagnostic restarted the modem state machine identifier.
             */
            diagnosticRestartedTheModemStateMachineId: string;
            /**
             * The diagnostic restarted the radio manager state machine identifier.
             */
            diagnosticRestartedTheRadioManagerStateMachineId: string;
            /**
             * The diagnostic restarted the radio state machine identifier.
             */
            diagnosticRestartedTheRadioStateMachineId: string;
            /**
             * The diagnostic restarted the WIFI manager state machine identifier.
             */
            diagnosticRestartedTheWifiManagerStateMachineId: string;
            /**
             * The diagnostic restarted the WIFI state machine identifier.
             */
            diagnosticRestartedTheWifiStateMachineId: string;
            /**
             * The diagnostic RF module failure identifier.
             */
            diagnosticRfModuleFailureId: string;
            /**
             * The diagnostic RF module mac address error identifier.
             */
            diagnosticRfModuleMacAddressErrorId: string;
            /**
             * The diagnostic right rear door open
             */
            diagnosticRightRearDoorOpenId: string;
            /**
             * The diagnostic right side airbag deployed identifier.
             */
            diagnosticRightSideAirbagDeployedId: string;
            /**
             * The diagnostic right side severity achieved identifier.
             */
            diagnosticRightSideSeverityAchievedId: string;
            /**
             * The diagnostic right turn signal identifier.
             */
            diagnosticRightTurnSignalId: string;
            /**
             * The diagnostic rollover severity achieved identifier.
             */
            diagnosticRolloverSeverityAchievedId: string;
            /**
             * The diagnostic second row left seat belt identifier.
             */
            diagnosticSecondRowLeftSeatbeltId: string;
            /**
             * The diagnostic second row middle seat belt identifier.
             */
            diagnosticSecondRowMiddleSeatbeltId: string;
            /**
             * The diagnostic second row right seat belt identifier.
             */
            diagnosticSecondRowRightSeatbeltId: string;
            /**
             * The diagnostic secondary can bus failed to initialize identifier.
             */
            diagnosticSecondaryCanBusFailedToInitializeId: string;
            /**
             * The diagnostic slave processor failure identifier.
             */
            diagnosticSlaveProcessorFailureId: string;
            /**
             * The diagnostic truck solid material active.
             */
            diagnosticSolidMaterialActiveId: string;
            /**
             * The diagnostic truck solid material rate.
             */
            diagnosticSolidMaterialRateId: string;
            /**
             * The diagnostic truck solid material type.
             */
            diagnosticSolidMaterialTypeId: string;
            /**
             * The diagnostic standard harness detected identifier.
             */
            diagnosticStandardHarnessDetectedId: string;
            /**
             * The diagnostic id for State of Charge (SOC).
             */
            diagnosticStateOfChargeId: string;
            /**
             * The diagnostic panic identifier.
             */
            diagnosticSystemAlertId: string;
            /**
             * The diagnostic Third Party Aux 1
             */
            diagnosticThirdPartyAux1Id: string;
            /**
             * The diagnostic Third Party Aux 2
             */
            diagnosticThirdPartyAux2Id: string;
            /**
             * The diagnostic hird Party Aux 3
             */
            diagnosticThirdPartyAux3Id: string;
            /**
             * The diagnostic hird Party Aux 3
             */
            diagnosticThirdPartyAux4Id: string;
            /**
             * The diagnostic third party (custom device) device power change value.
             */
            diagnosticThirdPartyDevicePowerChangeId: string;
            /**
             * The diagnostic third party (custom device) engine data active value.
             */
            diagnosticThirdPartyEngineDataActiveId: string;
            /**
             * The diagnostic engine road speed identifier.
             */
            diagnosticThirdPartyEngineRoadSpeedId: string;
            /**
             * The diagnostic third party (custom device) engine hours identifier.
             */
            diagnosticThirdPartyEngineRunTimeId: string;
            /**
             * The diagnostic log third party data buffer overrun value.
             */
            diagnosticThirdPartyLogDataBufferOverrunId: string;
            /**
             * The third party (custom device) diagnostic odometer identifier.
             */
            diagnosticThirdPartyOdometerId: string;
            /**
             * The diagnostic third row left seat belt identifier.
             */
            diagnosticThirdRowLeftSeatbeltId: string;
            /**
             * The diagnostic third row middle seat belt identifier.
             */
            diagnosticThirdRowMiddleSeatbeltId: string;
            /**
             * The diagnostic third row right seat belt identifier.
             */
            diagnosticThirdRowRightSeatbeltId: string;
            /**
             * The diagnostic tire pressure front left identifier.
             */
            diagnosticTirePressureFrontLeftId: string;
            /**
             * The diagnostic tire pressure front right identifier.
             */
            diagnosticTirePressureFrontRightId: string;
            /**
             * The diagnostic tire pressure rear left identifier.
             */
            diagnosticTirePressureRearLeftId: string;
            /**
             * The diagnostic tire pressure rear right identifier.
             */
            diagnosticTirePressureRearRightId: string;
            /**
             * The diagnostic tire pressure spare identifier.
             */
            diagnosticTirePressureSpareId: string;
            /**
             * The diagnostic tire warning light identifier.
             */
            diagnosticTireWarningLightId: string;
            /**
             * The diagnostic too many engine records identifier.
             */
            diagnosticTooManyEngineRecordsId: string;
            /**
             * The diagnostic too many logs in multilog identifier.
             */
            diagnosticTooManyLogsInMultilogId: string;
            /**
             * The diagnostic total air used identifier.
             */
            diagnosticTotalAirUsedId: string;
            /**
             * The diagnostic total fuel used identifier.
             */
            diagnosticTotalFuelUsedId: string;
            /**
             * The diagnostic total idle air used identifier.
             */
            diagnosticTotalIdleAirUsedId: string;
            /**
             * The diagnostic total idle fuel used identifier.
             */
            diagnosticTotalIdleFuelUsedId: string;
            /**
             * The diagnostic total idle hours identifier.
             */
            diagnosticTotalIdleHoursId: string;
            /**
             * The diagnostic id for total lifetime battery energy in during AC charging.
             */
            diagnosticTotalLifetimeBatteryEnergyInDuringACChargingId: string;
            /**
             * The diagnostic id for total lifetime battery energy in during DC charging.
             */
            diagnosticTotalLifetimeBatteryEnergyInDuringDCChargingId: string;
            /**
             * The diagnostic id for total lifetime battery energy out during AC charging.
             */
            diagnosticTotalLifetimeBatteryEnergyOutDuringACChargingId: string;
            /**
             * The diagnostic id for total lifetime battery energy out during DC charging.
             */
            diagnosticTotalLifetimeBatteryEnergyOutDuringDCChargingId: string;
            /**
             * The electric vehicle battery total energy in while idling identifier. Units: kWh
             */
            diagnosticTotalLifetimeEnergyInWhileIdlingId: string;
            /**
             * The electric vehicle battery total energy in while idling identifier. Units: kWh
             */
            diagnosticTotalLifetimeEnergyOutWhileIdlingId: string;
            /**
             * The diagnostic id for total lifetime on board charger energy from an AC EVSE.
             */
            diagnosticTotalLifetimeOnBoardChargerEnergyInDuringACChargingInId: string;
            /**
             * The diagnostic id for Electric vehicle on-board charger total energy out during AC charging (since telematics device install).
             */
            diagnosticTotalLifetimeOnBoardChargerEnergyOutDuringACChargingId: string;
            /**
             * The diagnostic total PTO hours identifier.
             */
            diagnosticTotalPtoHoursId: string;
            /**
             * The diagnostic total trip fuel used identifier.
             */
            diagnosticTotalTripFuelUsedId: string;
            /**
             * The diagnostic total trip idle fuel used identifier.
             */
            diagnosticTotalTripIdleFuelUsedId: string;
            /**
             * The diagnostic tow plow liquid material type.
             */
            diagnosticTowPlowLiquidMaterialActiveId: string;
            /**
             * The diagnostic tow plow liquid material rate.
             */
            diagnosticTowPlowLiquidMaterialRateId: string;
            /**
             * The diagnostic tow plow liquid material total.
             */
            diagnosticTowPlowLiquidMaterialTotalId: string;
            /**
             * The diagnostic tow plow liquid material type.
             */
            diagnosticTowPlowLiquidMaterialTypeId: string;
            /**
             * The diagnostic tow plow pre wet material active.
             */
            diagnosticTowPlowPreWetMaterialActiveId: string;
            /**
             * The diagnostic tow plow pre wet material rate.
             */
            diagnosticTowPlowPreWetMaterialRateId: string;
            /**
             * The diagnostic tow plow pre wet material total.
             */
            diagnosticTowPlowPreWetMaterialTotalId: string;
            /**
             * The diagnostic tow plow pre wet material type.
             */
            diagnosticTowPlowPreWetMaterialTypeId: string;
            /**
             * The diagnostic tow plow solid material active.
             */
            diagnosticTowPlowSolidMaterialActiveId: string;
            /**
             * The diagnostic tow plow solid material rate.
             */
            diagnosticTowPlowSolidMaterialRateId: string;
            /**
             * The diagnostic tow plow solid material total.
             */
            diagnosticTowPlowSolidMaterialTotalId: string;
            /**
             * The diagnostic tow plow solid material type.
             */
            diagnosticTowPlowSolidMaterialTypeId: string;
            /**
             * The diagnostic Toyota ISO engine protocol detected identifier.
             */
            diagnosticToyotaIsoEngineProtocolDetectedId: string;
            /**
             * The diagnostic traction control system active identifier.
             */
            diagnosticTractionControlSystemActiveId: string;
            /**
             * The diagnostic traction control system enabled identifier.
             */
            diagnosticTractionControlSystemEnabledId: string;
            /**
             * The diagnostic transmission oil change warning light identifier.
             */
            diagnosticTransmissionOilChangeWarningLightId: string;
            /**
             * The diagnostic transmission oil level identifier.
             */
            diagnosticTransmissionOilLevelId: string;
            /**
             * The diagnostic trip distance identifier.
             */
            diagnosticTripDistanceId: string;
            /**
             * The diagnostic truck liquid material total.
             */
            diagnosticTruckLiquidMaterialTotalId: string;
            /**
             * The diagnostic truck pre wet material total.
             */
            diagnosticTruckPreWetMaterialTotalId: string;
            /**
             * The diagnostic truck solid material total.
             */
            diagnosticTruckSolidMaterialTotalId: string;
            /**
             * The diagnostic undefined engine protocol detected identifier.
             */
            diagnosticUndefinedEngineProtocolDetectedId: string;
            /**
             * The diagnostic vehicle ABS system failed identifier.
             */
            diagnosticVehicleAbsSystemFailedId: string;
            /**
             * The diagnostic vehicle active (idle or driving) id.
             */
            diagnosticVehicleActiveId: string;
            /**
             * The diagnostic vehicle AWD system failed identifier.
             */
            diagnosticVehicleAwdSystemFailedId: string;
            /**
             * The diagnostic vehicle battery low voltage identifier.
             */
            diagnosticVehicleBatteryLowVoltageId: string;
            /**
             * The diagnostic vehicle programmed cruise high speed limit identifier.
             */
            diagnosticVehicleProgrammedCruiseHighSpeedLimitId: string;
            /**
             * The diagnostic vehicle programmed maximum road speed limit enabled identifier.
             */
            diagnosticVehicleProgrammedMaximumRoadspeedLimitEnabledId: string;
            /**
             * The diagnostic vehicle programmed maximum road speed limit identifier.
             */
            diagnosticVehicleProgrammedMaximumRoadspeedLimitId: string;
            /**
             * The diagnostic VIN request failure identifier.
             */
            diagnosticVinRequestFailureId: string;
            /**
             * The diagnostic washer fluid level identifier.
             */
            diagnosticWasherFluidLevelId: string;
            /**
             * The diagnostic water detected in fuel warning light identifier.
             */
            diagnosticWaterDetectedInFuelWarningLightId: string;
            /**
             * The diagnostic wifi hotspot data usage identifier.
             */
            diagnosticWiFiHotspotDataUsageId: string;
            /**
             * DisplayMeasurementProfile United States Identity.
             */
            displayMeasurementProfileAfricaId: string;
            /**
             * DisplayMeasurementProfile Asia Identity.
             */
            displayMeasurementProfileAsiaId: string;
            /**
             * DisplayMeasurementProfile Australia and New Zealand Identity.
             */
            displayMeasurementProfileAustraliaNewZealandId: string;
            /**
             * DisplayMeasurementProfile Canada Identity.
             */
            displayMeasurementProfileCanadaId: string;
            /**
             * DisplayMeasurementProfile Central and South America Identity.
             */
            displayMeasurementProfileCentralSouthAmericaId: string;
            /**
             * DisplayMeasurementProfile Default Identity.
             */
            displayMeasurementProfileDefaultId: string;
            /**
             * DisplayMeasurementProfile Europe Identity.
             */
            displayMeasurementProfileEuropeId: string;
            /**
             * DisplayMeasurementProfile Mexico Identity.
             */
            displayMeasurementProfileMexicoId: string;
            /**
             * DisplayMeasurementProfile UK Identity.
             */
            displayMeasurementProfileUKId: string;
            /**
             * DisplayMeasurementProfile United States Identity.
             */
            displayMeasurementProfileUnitedStatesId: string;
            /**
             * The MediaFile SolutionId associated with display pictures.
             */
            displayPictureSolutionId: string;
            /**
             * Identity DisplayUnitOfMeasure.
             */
            displayUnitOfMeasureIdentityId: string;
            /**
             * The distribution list import/export identifier.
             */
            distributionListImportExportId: string;
            /**
             * The distribution list news identifier.
             */
            distributionListNewsId: string;
            /**
             * Gets Driver Safety Scorecard report default dashboard report schedule identifier.
             */
            driverSafetyScorecardDefaultDashboardReportScheduleId: string;
            /**
             * The email template default application exception identifier.
             */
            emailTemplateDefaultApplicationExceptionId: string;
            /**
             * The email template default exception rule identifier.
             */
            emailTemplateDefaultExceptionRuleId: string;
            /**
             * The default email template identifier for mainteannce reminders.
             */
            emailTemplateDefaultMaintenanceReminderId: string;
            /**
             * The engine type generic identifier.
             */
            engineTypeGenericId: string;
            /**
             * The engine type none identifier.
             */
            engineTypeNoneId: string;
            /**
             * The event type lease expiry identifier.
             */
            eventTypeLeaseExpiryId: string;
            /**
             * The event type license plate expiry identifier.
             */
            eventTypeLicensePlateExpiryId: string;
            /**
             * The event type oil change identifier.
             */
            eventTypeOilChangeId: string;
            /**
             * The event type tire rotation identifier.
             */
            eventTypeTireRotationId: string;
            /**
             * The ExceptionEventState Dismissed identifier.
             */
            exceptionEventStateDismissedId: string;
            /**
             * The ExceptionEventState Invalid identifier.
             */
            exceptionEventStateInvalidId: string;
            /**
             * The ExceptionEventState Valid identifier.
             */
            exceptionEventStateValidId: string;
            /**
             * Gets the Active FaultStatus Id.
             */
            faultStatusActiveId: string;
            /**
             * Gets the Cleared FaultStatus Id.
             */
            faultStatusClearedId: string;
            /**
             * Gets the Inactive FaultStatus Id.
             */
            faultStatusInactiveId: string;
            /**
             * Gets the None FaultStatus Id.
             */
            faultStatusNoneId: string;
            /**
             * Gets the Pending FaultStatus Id.
             */
            faultStatusPendingId: string;
            /**
             * Gets Fleet Utilization report default dashboard report schedule identifier.
             */
            fleetUtilizationDefaultDashboardReportScheduleId: string;
            /**
             * The asset information group.
             */
            groupAssetInformationId: string;
            /**
             * The default Asset Type group identifier.
             */
            groupAssetTypeId: string;
            /**
             * The battery electric vehicle group.
             */
            groupBatteryElectricVehicleId: string;
            /**
             * The biodiesel group.
             */
            groupBiodieselId: string;
            /**
             * The driver activity business group for trips identifier.
             */
            groupBusinessGroupId: string;
            /**
             * The group company identifier.
             */
            groupCompanyId: string;
            /**
             * The compressed natural gas group.
             */
            groupCompressedNaturalGasId: string;
            /**
             * The group defects identifier.
             */
            groupDefectsId: string;
            /**
             * The diesel group.
             */
            groupDieselId: string;
            /**
             * The group drive user security identifier.
             */
            groupDriveUserSecurityId: string;
            /**
             * The driver activity group identifier.
             */
            groupDriverActivityGroupId: string;
            /**
             * The eletric/hybrid plug-in group.
             */
            groupElectricHybridPluginId: string;
            /**
             * The ehtanol group.
             */
            groupEthanolId: string;
            /**
             * The group everything security identifier.
             */
            groupEverythingSecurityId: string;
            /**
             * The fuel cell electric vehicle group.
             */
            groupFuelCellElectricVehicleId: string;
            /**
             * The gasoline/petrol group.
             */
            groupGasolinePetrolId: string;
            /**
             * The internal combustion engine group.
             */
            groupInternalCombustionEngineId: string;
            /**
             * The manually classified powertrain group.
             */
            groupManuallyClassifiedPowertrainId: string;
            /**
             * The group nothing security identifier.
             */
            groupNothingSecurityId: string;
            /**
             * The other fuel group.
             */
            groupOtherFuelId: string;
            /**
             * The driver activity personal group for trips identifier.
             */
            groupPersonalGroupId: string;
            /**
             * The plug-in hybrid electric vehicle group.
             */
            groupPluginHybridElectricVehicleId: string;
            /**
             * The powertrain and fuel type group under asset information.
             */
            groupPowertrainAndFuelTypeId: string;
            /**
             * The group private scheduled report identifier.
             */
            groupPrivateScheduledReportId: string;
            /**
             * The group private user identifier.
             */
            groupPrivateUserId: string;
            /**
             * The propane/liquified petroleum gas group.
             */
            groupPropaneLiquifiedPetroleumGasId: string;
            /**
             * The group root identifier.
             */
            groupRootId: string;
            /**
             * The group security identifier.
             */
            groupSecurityId: string;
            /**
             * The shareable link group identifier.
             */
            groupShareableLinkGroupId: string;
            /**
             * The group supervisor security identifier.
             */
            groupSupervisorSecurityId: string;
            /**
             * The group trailer defects identifier.
             */
            groupTrailerDefectsId: string;
            /**
             * The default Trailer group identifier.
             */
            groupTrailerId: string;
            /**
             * The group user security identifier.
             */
            groupUserSecurityId: string;
            /**
             * The group vehicle defects identifier.
             */
            groupVehicleDefectsId: string;
            /**
             * The default Vehicle group identifier.
             */
            groupVehicleId: string;
            /**
             * The group view map only identifier.
             */
            groupViewMapOnlySecurityId: string;
            /**
             * The group view only security identifier.
             */
            groupViewOnlySecurityId: string;
            /**
             * Gets HOS Violation Breakdown report default dashboard report schedule identifier.
             */
            hOSViolationBreakdownDefaultDashboardReportScheduleId: string;
            /**
             * Alaska Passenger 70-hour/7-day
             */
            hosRuleSetAlaskaPassenger7Day: string;
            /**
             * Alaska Passenger 80-hour/8-day
             */
            hosRuleSetAlaskaPassenger8Day: string;
            /**
             * Alaska Property 70-hour/7-day
             */
            hosRuleSetAlaskaProperty7Day: string;
            /**
             * Alaska Property 70-hour/7-day Sleeper
             */
            hosRuleSetAlaskaProperty7DaySleeper: string;
            /**
             * Alaska Property 80-hour/8-day
             */
            hosRuleSetAlaskaProperty8Day: string;
            /**
             * Alaska Property 80-hour/8-day Sleeper
             */
            hosRuleSetAlaskaProperty8DaySleeper: string;
            /**
             * Hos Ruleset Id America7Day.
             */
            hosRuleSetAmerica7Day: string;
            /**
             * Hos Ruleset Id America7DayBig.
             */
            hosRuleSetAmerica7DayBig: string;
            /**
             * Hos Ruleset Id America7DayBigSleeper.
             */
            hosRuleSetAmerica7DayBigSleeper: string;
            /**
             * Hos Ruleset Id 7-day without 34-h.
             */
            hosRuleSetAmerica7DayNo34h: string;
            /**
             * Hos Ruleset Id 7-day without 34-h with Sleeper.
             */
            hosRuleSetAmerica7DayNo34hSleeper: string;
            /**
             * Hos Ruleset Id America7DayPassenger.
             */
            hosRuleSetAmerica7DayPassenger: string;
            /**
             * America 7-day Railroad
             */
            hosRuleSetAmerica7DayRailroad: string;
            /**
             * Hos Ruleset Id America7DaySleeper.
             */
            hosRuleSetAmerica7DaySleeper: string;
            /**
             * Hos Ruleset Id America8Day.
             */
            hosRuleSetAmerica8Day: string;
            /**
             * Hos Ruleset Id America8DayBig.
             */
            hosRuleSetAmerica8DayBig: string;
            /**
             * Hos Ruleset Id America8DayBigSleeper.
             */
            hosRuleSetAmerica8DayBigSleeper: string;
            /**
             * Hos Ruleset Id 8-day without 34-h.
             */
            hosRuleSetAmerica8DayNo34h: string;
            /**
             * Hos Ruleset Id 8-day without 34-h with Sleeper.
             */
            hosRuleSetAmerica8DayNo34hSleeper: string;
            /**
             * Hos Ruleset Id America8DayPassenger.
             */
            hosRuleSetAmerica8DayPassenger: string;
            /**
             * America 8-day Railroad
             */
            hosRuleSetAmerica8DayRailroad: string;
            /**
             * Hos Ruleset Id America8DaySleeper.
             */
            hosRuleSetAmerica8DaySleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day.
             */
            hosRuleSetAmericaNoRestRequirement7Day: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day Big.
             */
            hosRuleSetAmericaNoRestRequirement7DayBig: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day Big with Sleeper.
             */
            hosRuleSetAmericaNoRestRequirement7DayBigSleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day with Sleeper.
             */
            hosRuleSetAmericaNoRestRequirement7DaySleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day.
             */
            hosRuleSetAmericaNoRestRequirement8Day: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day Big.
             */
            hosRuleSetAmericaNoRestRequirement8DayBig: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day Big with Sleeper.
             */
            hosRuleSetAmericaNoRestRequirement8DayBigSleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day with Sleeper.
             */
            hosRuleSetAmericaNoRestRequirement8DaySleeper: string;
            /**
             * Hos Ruleset Id America Non-CDL 7 day.
             */
            hosRuleSetAmericaNonCdlShortHaul7Day: string;
            /**
             * Hos Ruleset Id America Non-CDL 8 day.
             */
            hosRuleSetAmericaNonCdlShortHaul8Day: string;
            /**
             * Hos Ruleset Id AmericaSalesperson.
             */
            hosRuleSetAmericaSalesperson: string;
            /**
             * Hos Ruleset Id AmericaSalespersonNonCdlShortHaul.
             */
            hosRuleSetAmericaSalespersonNonCdlShortHaul: string;
            /**
             * Hos Ruleset Id AmericaShortHaul.
             */
            hosRuleSetAmericaShortHaul: string;
            /**
             * Hos Ruleset Id AmericaShortHaul14hrWorkday.
             */
            hosRuleSetAmericaShortHaul14hrWorkday: string;
            /**
             * Hos Ruleset Id AmericaShortHaul8Day.
             */
            hosRuleSetAmericaShortHaul8Day: string;
            /**
             * Hos Ruleset Id AmericaShortHaul8Day14hrWorkday.
             */
            hosRuleSetAmericaShortHaul8Day14hrWorkday: string;
            /**
             * Hos Ruleset Id Short-haul 8-day without 34-h.
             */
            hosRuleSetAmericaShortHaul8DayNo34h: string;
            /**
             * Hos Ruleset Id Short-haul 7-day without 34-h.
             */
            hosRuleSetAmericaShortHaulNo34h: string;
            /**
             * Hos Ruleset Id AmericaShortHaulPassenger.
             */
            hosRuleSetAmericaShortHaulPassenger: string;
            /**
             * Hos Ruleset Id AmericaShortHaulPassenger8Day.
             */
            hosRuleSetAmericaShortHaulPassenger8Day: string;
            /**
             * Hos Ruleset Id AmericaTexas.
             */
            hosRuleSetAmericaTexas: string;
            /**
             * Hos Ruleset Id AmericaTexasShortHaul.
             */
            hosRuleSetAmericaTexasShortHaul: string;
            /**
             * Hos Ruleset Id AmericaTexasShortHaul8Day.
             */
            hosRuleSetAmericaTexasShortHaul8Day: string;
            /**
             * Australia Standard Hours Solo with Exemption Hours
             */
            hosRuleSetAustraliaStandardHoursSoloExemptionHours: string;
            /**
             * Hos Ruleset Id Brazil property short haul.
             */
            hosRuleSetBrazilShortHaul: string;
            /**
             * California Property Intrastate
             */
            hosRuleSetCalifornia8day: string;
            /**
             * Hos Ruleset Id CaliforniaFarmProduct.
             */
            hosRuleSetCaliforniaFarmProduct: string;
            /**
             * Hos Ruleset Id CaliforniaFarmProduct With Rest Requirement.
             */
            hosRuleSetCaliforniaFarmProductWithRestRequirement: string;
            /**
             * Hos Ruleset Id CaliforniaFlammableLiquid.
             */
            hosRuleSetCaliforniaFlammableLiquid: string;
            /**
             * Hos Ruleset Id CaliforniaFlammableLiquid With Rest Requirement.
             */
            hosRuleSetCaliforniaFlammableLiquidWithRestRequirement: string;
            /**
             * Hos Ruleset Id CaliforniaPassenger.
             */
            hosRuleSetCaliforniaPassenger: string;
            /**
             * Hos Ruleset Id CaliforniaProperty.
             */
            hosRuleSetCaliforniaProperty: string;
            /**
             * California Property Short-haul.
             */
            hosRuleSetCaliforniaPropertyShortHaul: string;
            /**
             * California Property Short-haul with rest.
             */
            hosRuleSetCaliforniaPropertyShortHaulWithRest: string;
            /**
             * Hos Ruleset Id CaliforniaSchoolPupil.
             */
            hosRuleSetCaliforniaSchoolPupil: string;
            /**
             * Hos Ruleset Id CaliforniaSchoolPupil With Rest Requirement.
             */
            hosRuleSetCaliforniaSchoolPupilWithRestRequirement: string;
            /**
             * Hos Ruleset Id CanadaBCLoggingTruck
             */
            hosRuleSetCanadaBCLoggingTruck: string;
            /**
             * Hos Ruleset Id CanadaCycleOne.
             */
            hosRuleSetCanadaCycleOne: string;
            /**
             * Hos Ruleset Id CanadaCycleOneTeam.
             */
            hosRuleSetCanadaCycleOneTeam: string;
            /**
             * Hos Ruleset Id CanadaCycleTwo.
             */
            hosRuleSetCanadaCycleTwo: string;
            /**
             * Hos Ruleset Id CanadaCycleTwoTeam.
             */
            hosRuleSetCanadaCycleTwoTeam: string;
            /**
             * Hos Ruleset Id CanadaNorthOf60CycleOne.
             */
            hosRuleSetCanadaNorthOf60CycleOne: string;
            /**
             * Hos Ruleset Id CanadaNorthOf60CycleOneTeam.
             */
            hosRuleSetCanadaNorthOf60CycleOneTeam: string;
            /**
             * Hos Ruleset Id CanadaNorthOf60CycleTwo.
             */
            hosRuleSetCanadaNorthOf60CycleTwo: string;
            /**
             * Hos Ruleset Id CanadaNorthOf60CycleTwoTeam.
             */
            hosRuleSetCanadaNorthOf60CycleTwoTeam: string;
            /**
             * Hos Ruleset Id CanadaNorthOf60Oil
             */
            hosRuleSetCanadaNorthOf60Oil: string;
            /**
             * Hos Ruleset Id CanadaNorthOf60OilTeam
             */
            hosRuleSetCanadaNorthOf60OilTeam: string;
            /**
             * Hos Ruleset Id CanadaOil
             */
            hosRuleSetCanadaOil: string;
            /**
             * Hos Ruleset Id CanadaOilTeam
             */
            hosRuleSetCanadaOilTeam: string;
            /**
             * Hos Ruleset Id Carrier Exemption.
             */
            hosRuleSetCarrierExemption: string;
            /**
             * Hos Ruleset Id Florida 7-day.
             */
            hosRuleSetFlorida7Day: string;
            /**
             * Hos Ruleset Id Florida 8-day.
             */
            hosRuleSetFlorida8Day: string;
            /**
             * Hos Ruleset Id Florida Short-haul 7 day.
             */
            hosRuleSetFloridaShortHaul7Day: string;
            /**
             * Hos Ruleset Id Florida Short-haul 8 day.
             */
            hosRuleSetFloridaShortHaul8Day: string;
            /**
             * Maryland Short Haul 70-hour/7-day
             */
            hosRuleSetMarylandShortHaul7Day: string;
            /**
             * Maryland Short Haul 80-hour/8-day
             */
            hosRuleSetMarylandShortHaul8Day: string;
            /**
             * Nebraska 70-hour/7-day
             */
            hosRuleSetNebraska7day: string;
            /**
             * Nebraska 80-hour/8-day
             */
            hosRuleSetNebraska8day: string;
            /**
             * Hos Ruleset Id None.
             */
            hosRuleSetNone: string;
            /**
             * Hos Ruleset Id None Big Day.
             */
            hosRuleSetNone8Day: string;
            /**
             * Hos Ruleset Id NoneCanada (South of 60).
             */
            hosRuleSetNoneCanada: string;
            /**
             * Hos Ruleset Id NoneCanada (North of 60).
             */
            hosRuleSetNoneCanadaNorthOf60: string;
            /**
             * North Dakota 70-hour/7-day
             */
            hosRuleSetNorthDakota7Day: string;
            /**
             * North Dakota Short Haul 70-hour/7-day
             */
            hosRuleSetNorthDakotaShortHaul7Day: string;
            /**
             * Hos Ruleset Id OilTransport7Day.
             */
            hosRuleSetOilTransport7Day: string;
            /**
             * Hos Ruleset Id OilTransport7DayBig.
             */
            hosRuleSetOilTransport7DayBig: string;
            /**
             * Hos Ruleset Id OilTransport7DayBigSleeper.
             */
            hosRuleSetOilTransport7DayBigSleeper: string;
            /**
             * Hos Ruleset Id OilTransport7DaySleeper.
             */
            hosRuleSetOilTransport7DaySleeper: string;
            /**
             * Hos Ruleset Id OilTransport8Day.
             */
            hosRuleSetOilTransport8Day: string;
            /**
             * Hos Ruleset Id OilTransport8DayBig.
             */
            hosRuleSetOilTransport8DayBig: string;
            /**
             * Hos Ruleset Id OilTransport8DayBigSleeper.
             */
            hosRuleSetOilTransport8DayBigSleeper: string;
            /**
             * Hos Ruleset Id OilTransport8DaySleeper.
             */
            hosRuleSetOilTransport8DaySleeper: string;
            /**
             * Hos Ruleset Id OilTransportCalifornia8day.
             */
            hosRuleSetOilTransportCalifornia8day: string;
            /**
             * Hos Ruleset Id OilTransportCaliforniaProperty.
             */
            hosRuleSetOilTransportCaliforniaProperty: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset.
             */
            hosRuleSetOilTransportNoRestRequirement7Day: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset.
             */
            hosRuleSetOilTransportNoRestRequirement7DayBig: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and split sleeper.
             */
            hosRuleSetOilTransportNoRestRequirement7DayBigSleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and split sleeper.
             */
            hosRuleSetOilTransportNoRestRequirement7DaySleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset.
             */
            hosRuleSetOilTransportNoRestRequirement8Day: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset.
             */
            hosRuleSetOilTransportNoRestRequirement8DayBig: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and split sleeper.
             */
            hosRuleSetOilTransportNoRestRequirement8DayBigSleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and split sleeper.
             */
            hosRuleSetOilTransportNoRestRequirement8DaySleeper: string;
            /**
             * Hos Ruleset Id OilTransportShortHaul.
             */
            hosRuleSetOilTransportShortHaul: string;
            /**
             * Hos Ruleset Id OilTransportShortHaul14hrWorkday.
             */
            hosRuleSetOilTransportShortHaul14hrWorkday: string;
            /**
             * Hos Ruleset Id OilTransportShortHaul8Day.
             */
            hosRuleSetOilTransportShortHaul8Day: string;
            /**
             * Hos Ruleset Id OilTransportShortHaul8Day14hrWorkday.
             */
            hosRuleSetOilTransportShortHaul8Day14hrWorkday: string;
            /**
             * Hos Ruleset Id OilTransportTexas.
             */
            hosRuleSetOilTransportTexas: string;
            /**
             * Hos Ruleset Id OilWell7Day.
             */
            hosRuleSetOilWell7Day: string;
            /**
             * Hos Ruleset Id OilWell7DayBig.
             */
            hosRuleSetOilWell7DayBig: string;
            /**
             * Hos Ruleset Id OilWell7DayBigSleeper.
             */
            hosRuleSetOilWell7DayBigSleeper: string;
            /**
             * Hos Ruleset Id OilWell7DaySleeper.
             */
            hosRuleSetOilWell7DaySleeper: string;
            /**
             * Hos Ruleset Id OilWell8Day.
             */
            hosRuleSetOilWell8Day: string;
            /**
             * Hos Ruleset Id OilWell8DayBig.
             */
            hosRuleSetOilWell8DayBig: string;
            /**
             * Hos Ruleset Id OilWell8DayBigSleeper.
             */
            hosRuleSetOilWell8DayBigSleeper: string;
            /**
             * Hos Ruleset Id OilWell8DaySleeper.
             */
            hosRuleSetOilWell8DaySleeper: string;
            /**
             * Hos Ruleset Id OilWellCalifornia8day.
             */
            hosRuleSetOilWellCalifornia8day: string;
            /**
             * Hos Ruleset Id OilWellCaliforniaProperty.
             */
            hosRuleSetOilWellCaliforniaProperty: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and oil well.
             */
            hosRuleSetOilWellNoRestRequirement7Day: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and oil well.
             */
            hosRuleSetOilWellNoRestRequirement7DayBig: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and oil well and split sleeper.
             */
            hosRuleSetOilWellNoRestRequirement7DayBigSleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and oil well and split sleeper.
             */
            hosRuleSetOilWellNoRestRequirement7DaySleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and oil well.
             */
            hosRuleSetOilWellNoRestRequirement8Day: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and oil well.
             */
            hosRuleSetOilWellNoRestRequirement8DayBig: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and oil well and split sleeper.
             */
            hosRuleSetOilWellNoRestRequirement8DayBigSleeper: string;
            /**
             * Hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and oil well and split sleeper.
             */
            hosRuleSetOilWellNoRestRequirement8DaySleeper: string;
            /**
             * Hos Ruleset Id OilWellTexas.
             */
            hosRuleSetOilWellTexas: string;
            /**
             * Oregon 70-hour/7-day
             */
            hosRuleSetOregon7day: string;
            /**
             * Oregon 80-hour/8-day
             */
            hosRuleSetOregon8day: string;
            /**
             * South Carolina 70-hour/7-day
             */
            hosRuleSetSouthCarolina7Day: string;
            /**
             * South Carolina 80-hour/8-day
             */
            hosRuleSetSouthCarolina8Day: string;
            /**
             * Hos Ruleset Id WashingtonIntrastate7Day.
             */
            hosRuleSetWashingtonIntrastate7Day: string;
            /**
             * Hos Ruleset Id WashingtonIntrastate8Day.
             */
            hosRuleSetWashingtonIntrastate8Day: string;
            /**
             * Gets Idling Violation report default dashboard report schedule identifier.
             */
            idlingViolationDefaultDashboardReportScheduleId: string;
            /**
             * The MimeTaskType application/mdf4 identifier.
             */
            mimeTaskTypeApplicationMdf4Id: string;
            /**
             * The MimeTaskType automotive identifier.
             */
            mimeTaskTypeAutomotiveId: string;
            /**
             * The MimeTaskType unknown type identifier.
             */
            mimeTaskTypeUnknownId: string;
            /**
             * The no device identifier.
             */
            noDeviceId: string;
            /**
             * The no diagnostic identifier.
             */
            noDiagnosticId: string;
            /**
             * The no display profile identifier.
             */
            noDisplayProfileId: string;
            /**
             * The no driver identifier.
             */
            noDriverId: string;
            /**
             * The no exception event identifier.
             */
            noExceptionEventId: string;
            /**
             * The no failure mode identifier.
             */
            noFailureModeId: string;
            /**
             * The no group identifier.
             */
            noGroupId: string;
            /**
             * The no recipient identifier.
             */
            noRecipientId: string;
            /**
             * The no rule identifier.
             */
            noRuleId: string;
            /**
             * The no trailer identifier.
             */
            noTrailerId: string;
            /**
             * The no user identifier.
             */
            noUserId: string;
            /**
             * The no zone identifier.
             */
            noZoneId: string;
            /**
             * The parameter group none identifier.
             */
            parameterGroupNoneId: string;
            /**
             * Gets Possible Collisions report default dashboard report schedule identifier.
             */
            possibleCollisionsDefaultDashboardReportScheduleId: string;
            /**
             * The Refrigeration unit - battery voltage Id.
             */
            refrigerationUnitBatteryVoltageId: string;
            /**
             * The Refrigeration unit controller protocol (
             * 6 = TK ThermoGuard and TK Smart Reefer /
             * 7 = Carrier Advanced Vector /
             * 8 = Carrier Standard Supra/Ultra/Maxima /
             * 12 = HWASUNG /
             * 16 = Carrier Vector HE 19/ Pulsor /
             * 17 = GAH /
             * 18 = TK DSR
             * )
             */
            refrigerationUnitControllerProtocolId: string;
            /**
             * The Refrigeration unit - discharge temperature zone 1 Id.
             */
            refrigerationUnitDischargeTemperatureZone1Id: string;
            /**
             * The Refrigeration unit - discharge temperature zone 2 Id.
             */
            refrigerationUnitDischargeTemperatureZone2Id: string;
            /**
             * The Refrigeration unit - discharge temperature zone 3 Id.
             */
            refrigerationUnitDischargeTemperatureZone3Id: string;
            /**
             * The Refrigeration unit - door status Id (0 = shut / 1 = open).
             */
            refrigerationUnitDoorStatusId: string;
            /**
             * The Refrigeration unit - engine coolant temperature Id.
             */
            refrigerationUnitEngineCoolantTemperatureId: string;
            /**
             * The Refrigeration unit - engine hours (diesel) Id.
             */
            refrigerationUnitEngineHoursDieselId: string;
            /**
             * The Refrigeration unit - engine hours (electric) Id.
             */
            refrigerationUnitEngineHoursElectricId: string;
            /**
             * The Refrigeration unit - engine mode Id (0 = diesel / 1 = electric).
             */
            refrigerationUnitEngineModeId: string;
            /**
             * The Refrigeration unit - engine Speed Id.
             */
            refrigerationUnitEngineSpeedId: string;
            /**
             * The Refrigeration unit - evaporator coil temperature zone 1 Id.
             */
            refrigerationUnitEvaporatorCoilTemperatureZone1Id: string;
            /**
             * The Refrigeration unit - evaporator Coil temperature zone 2 Id.
             */
            refrigerationUnitEvaporatorCoilTemperatureZone2Id: string;
            /**
             * The Refrigeration unit - evaporator Coil temperature zone 3 Id.
             */
            refrigerationUnitEvaporatorCoilTemperatureZone3Id: string;
            /**
             * The Refrigeration unit - external Ambient Temperature Id.
             */
            refrigerationUnitExternalAmbientTemperatureId: string;
            /**
             * The Refrigeration unit - fuel level Id.
             */
            refrigerationUnitFuelLevelId: string;
            /**
             * The Refrigeration unit - operating mode Id (0 = manual / 1 = auto) .
             */
            refrigerationUnitOperationModeId: string;
            /**
             * The Refrigeration unit - set temperature zone 1 Id.
             */
            refrigerationUnitSetTemperatureZone1Id: string;
            /**
             * The Refrigeration unit - set temperature zone 2 Id.
             */
            refrigerationUnitSetTemperatureZone2Id: string;
            /**
             * The Refrigeration unit - set temperature zone 3 Id.
             */
            refrigerationUnitSetTemperatureZone3Id: string;
            /**
             * The Refrigeration unit status (1 = present).
             */
            refrigerationUnitStatusId: string;
            /**
             * The Refrigeration unit - return temperature zone 1 Id.
             */
            refrigerationUnitTemperatureZone1Id: string;
            /**
             * The Refrigeration unit - return temperature zone 2 Id.
             */
            refrigerationUnitTemperatureZone2Id: string;
            /**
             * The Refrigeration unit - return temperature zone 3 Id.
             */
            refrigerationUnitTemperatureZone3Id: string;
            /**
             * The Refrigeration unit - Total number of alarms Id.
             */
            refrigerationUnitTotalNumberAlarmsId: string;
            /**
             * The Refrigeration unit - total run hours for all energy type Id.
             */
            refrigerationUnitTotalRunHoursEnergyTypeId: string;
            /**
             * Remote probe 1 temperature diagnostic Id.
             */
            remoteProbe1TemperatureId: string;
            /**
             * Remote probe 2 temperature diagnostic Id.
             */
            remoteProbe2TemperatureId: string;
            /**
             * Remote probe 3 temperature diagnostic Id.
             */
            remoteProbe3TemperatureId: string;
            /**
             * Remote probe 4 temperature diagnostic Id.
             */
            remoteProbe4TemperatureId: string;
            /**
             * The report template active engine faults identifier.
             */
            reportTemplateActiveEngineFaultsId: string;
            /**
             * The report template advanced audit log identifier.
             */
            reportTemplateAdvancedAuditLogId: string;
            /**
             * The report template advanced auxiliary detail identifier.
             */
            reportTemplateAdvancedAuxiliaryDetailId: string;
            /**
             * The report template advanced auxiliary summary identifier.
             */
            reportTemplateAdvancedAuxiliarySummaryId: string;
            /**
             * The report template advanced charge event identifier.
             */
            reportTemplateAdvancedChargeEventId: string;
            /**
             * The report template advanced congregation identifier.
             */
            reportTemplateAdvancedCongregationId: string;
            /**
             * The report template advanced customer visits detail identifier.
             */
            reportTemplateAdvancedCustomerVisitsDetailId: string;
            /**
             * The report template advanced customer visits summary identifier.
             */
            reportTemplateAdvancedCustomerVisitsSummaryId: string;
            /**
             * The report template advanced DVIR identifier.
             */
            reportTemplateAdvancedDVIRId: string;
            /**
             * The report template advanced device install history identifier.
             */
            reportTemplateAdvancedDeviceInstallHistoryId: string;
            /**
             * The report template advanced diagnostics identifier.
             */
            reportTemplateAdvancedDiagnosticsId: string;
            /**
             * The report template advanced EV battery health identifier.
             */
            reportTemplateAdvancedEVBatteryHealthId: string;
            /**
             * The report template advanced engine fault identifier.
             */
            reportTemplateAdvancedEngineFaultId: string;
            /**
             * The report template advanced engine status identifier.
             */
            reportTemplateAdvancedEngineStatusId: string;
            /**
             * The report template advanced engine summary identifier.
             */
            reportTemplateAdvancedEngineSummaryId: string;
            /**
             * The report template advanced event history identifier.
             */
            reportTemplateAdvancedEventHistoryId: string;
            /**
             * The report template advanced event rule device identifier.
             */
            reportTemplateAdvancedEventRuleDeviceId: string;
            /**
             * The report template advanced exceptions detail identifier.
             */
            reportTemplateAdvancedExceptionsDetailId: string;
            /**
             * The report template advanced exceptions summary identifier.
             */
            reportTemplateAdvancedExceptionsSummaryId: string;
            /**
             * The report template advanced failure mode identifier.
             */
            reportTemplateAdvancedFailureModeId: string;
            /**
             * The report template advanced fuel tax identifier.
             */
            reportTemplateAdvancedFuelTaxId: string;
            /**
             * The report template advanced fuel usage identifier.
             */
            reportTemplateAdvancedFuelUsageId: string;
            /**
             * The report template advanced groups identifier.
             */
            reportTemplateAdvancedGroupsId: string;
            /**
             * The report template advanced HOS availability identifier.
             */
            reportTemplateAdvancedHOSAvailabilityId: string;
            /**
             * The report template advanced hos log identifier.
             */
            reportTemplateAdvancedHOSLogId: string;
            /**
             * The report template advanced hos violation identifier.
             */
            reportTemplateAdvancedHOSViolationId: string;
            /**
             * The report template advanced log details identifier.
             */
            reportTemplateAdvancedLogDetailsId: string;
            /**
             * The report template advanced maintenance reminders identifier.
             */
            reportTemplateAdvancedMaintenanceRemindersId: string;
            /**
             * The report template advanced material management identifier.
             */
            reportTemplateAdvancedMaterialManagementId: string;
            /**
             * The report template advanced notifications identifier.
             */
            reportTemplateAdvancedNotificationsId: string;
            /**
             * The report template advanced plan vs actual route identifier.
             */
            reportTemplateAdvancedPlanVsActualRouteId: string;
            /**
             * The report template advanced risk management identifier.
             */
            reportTemplateAdvancedRiskManagementId: string;
            /**
             * The report template advanced route completion identifier.
             */
            reportTemplateAdvancedRouteCompletionId: string;
            /**
             * The report template advanced route directions identifier.
             */
            reportTemplateAdvancedRouteDirectionsId: string;
            /**
             * The report template advanced route summary identifier.
             */
            reportTemplateAdvancedRouteSummaryId: string;
            /**
             * The report template advanced service status identifier.
             */
            reportTemplateAdvancedServiceStatusId: string;
            /**
             * The report template advanced text messages identifier.
             */
            reportTemplateAdvancedTextMessagesId: string;
            /**
             * The report template advanced time card identifier.
             */
            reportTemplateAdvancedTimeCardId: string;
            /**
             * The report template advanced time performance identifier.
             */
            reportTemplateAdvancedTimePerformanceId: string;
            /**
             * The report template advanced trips detail identifier.
             */
            reportTemplateAdvancedTripsDetailId: string;
            /**
             * The report template advanced trips summary identifier.
             */
            reportTemplateAdvancedTripsSummaryId: string;
            /**
             * The report template advanced unmatched route identifier.
             */
            reportTemplateAdvancedUnmatchedRouteId: string;
            /**
             * The report template advanced users identifier.
             */
            reportTemplateAdvancedUsersId: string;
            /**
             * The report template advanced value performance identifier.
             */
            reportTemplateAdvancedValuePerformanceId: string;
            /**
             * The report template advanced vehicles identifier.
             */
            reportTemplateAdvancedVehiclesId: string;
            /**
             * The report template advanced zones identifier.
             */
            reportTemplateAdvancedZonesId: string;
            /**
             * The report template aggressive driving identifier.
             */
            reportTemplateAggressiveDrivingId: string;
            /**
             * The report template asset monitoring.
             */
            reportTemplateAssetMonitoringId: string;
            /**
             * The report template asset utilization identifier.
             */
            reportTemplateAssetUtilizationId: string;
            /**
             * The report template audit log identifier.
             */
            reportTemplateAuditLogId: string;
            /**
             * The report template auxiliary detail identifier.
             */
            reportTemplateAuxiliaryDetailId: string;
            /**
             * The report template auxiliary summary identifier.
             */
            reportTemplateAuxiliarySummaryId: string;
            /**
             * The report template average fuel economy identifier.
             */
            reportTemplateAverageFuelEconomyId: string;
            /**
             * The report template BEV range capability identifier.
             */
            reportTemplateBEVRangeCapabilityId: string;
            /**
             * The report template charge event identifier.
             */
            reportTemplateChargeEventId: string;
            /**
             * The report template congregation identifier.
             */
            reportTemplateCongregationId: string;
            /**
             * The report template customer visits detail identifier.
             */
            reportTemplateCustomerVisitsDetailId: string;
            /**
             * The report template customer visits summary identifier.
             */
            reportTemplateCustomerVisitsSummaryId: string;
            /**
             * The report template DVIR identifier.
             */
            reportTemplateDVIRId: string;
            /**
             * The report template device install history identifier.
             */
            reportTemplateDeviceInstallHistoryId: string;
            /**
             * The report template diagnostics identifier.
             */
            reportTemplateDiagnosticsId: string;
            /**
             * The report template Driver Safety Scorecard identifier.
             */
            reportTemplateDriverSafetyScorecardId: string;
            /**
             * The report template ELD Diagnostics And Malfunctions identifier.
             */
            reportTemplateELDDiagnosticsAndMalfunctionsId: string;
            /**
             * The report template ELD Unidentified Driver Logs identifier.
             */
            reportTemplateELDUnidentifiedDriverLogsId: string;
            /**
             * The report template ELD Unverified Logs identifier.
             */
            reportTemplateELDUnverifiedLogsId: string;
            /**
             * The report template EV battery health identifier.
             */
            reportTemplateEVBatteryHealthId: string;
            /**
             * The report template engine fault identifier.
             */
            reportTemplateEngineFaultId: string;
            /**
             * The report template engine status identifier.
             */
            reportTemplateEngineStatusId: string;
            /**
             * The report template engine summary identifier.
             */
            reportTemplateEngineSummaryId: string;
            /**
             * The report template event history identifier.
             */
            reportTemplateEventHistoryId: string;
            /**
             * The report template event rule device identifier.
             */
            reportTemplateEventRuleDeviceId: string;
            /**
             * The report template exceptions detail identifier.
             */
            reportTemplateExceptionsDetailId: string;
            /**
             * The report template exceptions summary identifier.
             */
            reportTemplateExceptionsSummaryId: string;
            /**
             * The report template failure mode identifier.
             */
            reportTemplateFailureModeId: string;
            /**
             * The report template Fill ups identifier.
             */
            reportTemplateFillUpsId: string;
            /**
             * The report template Fleet Distance Trend identifier.
             */
            reportTemplateFleetDistanceTrendId: string;
            /**
             * The report template Fleet Utilization identifier.
             */
            reportTemplateFleetUtilizationId: string;
            /**
             * The report template fuel tax identifier.
             */
            reportTemplateFuelTaxId: string;
            /**
             * The report template fuel usage identifier.
             */
            reportTemplateFuelUsageId: string;
            /**
             * The report template groups identifier.
             */
            reportTemplateGroupsId: string;
            /**
             * The report template HOS availability identifier.
             */
            reportTemplateHOSAvailabilityId: string;
            /**
             * The report template HOS log identifier.
             */
            reportTemplateHOSLogId: string;
            /**
             * The report template HOS Violation Breakdown identifier.
             */
            reportTemplateHOSViolationBreakdownId: string;
            /**
             * The report template HOS violation identifier.
             */
            reportTemplateHOSViolationId: string;
            /**
             * The report template Idling Violations identifier.
             */
            reportTemplateIdlingViolationsId: string;
            /**
             * The report template log details identifier.
             */
            reportTemplateLogDetailsId: string;
            /**
             * The report template maintenance reminders identifier.
             */
            reportTemplateMaintenanceRemindersId: string;
            /**
             * The report template material management identifier.
             */
            reportTemplateMaterialManagementId: string;
            /**
             * The report template Max Speed identifier.
             */
            reportTemplateMaxSpeedId: string;
            /**
             * The report template notifications identifier.
             */
            reportTemplateNotificationsId: string;
            /**
             * The report template plan vs actual route identifier.
             */
            reportTemplatePlanVsActualRouteId: string;
            /**
             * The report template Possible Collisions identifier.
             */
            reportTemplatePossibleCollisionsId: string;
            /**
             * The report template progress report identifier.
             */
            reportTemplateProgressReportId: string;
            /**
             * The report template risk management identifier.
             */
            reportTemplateRiskManagementId: string;
            /**
             * The report template route completion identifier.
             */
            reportTemplateRouteCompletionId: string;
            /**
             * The report template route directions identifier.
             */
            reportTemplateRouteDirectionsId: string;
            /**
             * The report template route summary identifier.
             */
            reportTemplateRouteSummaryId: string;
            /**
             * The report template Seat Belt Violations identifier.
             */
            reportTemplateSeatBeltViolationsId: string;
            /**
             * The report template service status identifier.
             */
            reportTemplateServiceStatusId: string;
            /**
             * The report template speed violations identifier.
             */
            reportTemplateSpeedViolationsId: string;
            /**
             * The report template text messages identifier.
             */
            reportTemplateTextMessagesId: string;
            /**
             * The report template time card identifier.
             */
            reportTemplateTimeCardId: string;
            /**
             * The report template time performance identifier.
             */
            reportTemplateTimePerformanceId: string;
            /**
             * The report template Unrepaired Defects identifier.
             */
            reportTemplateTripCategorizationId: string;
            /**
             * The report template trips detail identifier.
             */
            reportTemplateTripsDetailId: string;
            /**
             * The report template trips summary identifier.
             */
            reportTemplateTripsSummaryId: string;
            /**
             * The report template unmatched route identifier.
             */
            reportTemplateUnmatchedRouteId: string;
            /**
             * The report template Unrepaired Defects identifier.
             */
            reportTemplateUnrepairedDefectsId: string;
            /**
             * The report template users identifier.
             */
            reportTemplateUsersId: string;
            /**
             * The report template value performance identifier.
             */
            reportTemplateValuePerformanceId: string;
            /**
             * The report template vehicles identifier.
             */
            reportTemplateVehiclesId: string;
            /**
             * The report template watchdog identifier.
             */
            reportTemplateWatchdogId: string;
            /**
             * The report template zones identifier.
             */
            reportTemplateZonesId: string;
            /**
             * The DataModeType Private identifier.
             */
            restrictedDataModeId: string;
            /**
             * The rule accident identifier.
             */
            ruleAccidentId: string;
            /**
             * The rule after hours usage identifier.
             */
            ruleAfterHoursUsageId: string;
            /**
             * The rule alternator failed identifier.
             */
            ruleAlternatorFailedId: string;
            /**
             * The rule application exception identifier.
             */
            ruleApplicationExceptionId: string;
            /**
             * The rule at office longer than identifier.
             */
            ruleAtOfficeLongerThanId: string;
            /**
             * The rule ai detection identifier.
             */
            ruleCollisionDetectionActiveInsightsId: string;
            /**
             * The rule ELD yard move exemption identifier.
             */
            ruleDVIRPostTripMissingId: string;
            /**
             * The rule ELD yard move exemption identifier.
             */
            ruleDVIRPreTripMissingId: string;
            /**
             * The rule dvir defect identifier.
             */
            ruleDvirDefectId: string;
            /**
             * The rule EV Done Charging identifier.
             */
            ruleEVDoneChargingId: string;
            /**
             * The rule EV Enter Charging Zone With Low Charge identifier.
             */
            ruleEVEnterChargingZoneWithLowChargeId: string;
            /**
             * The rule EV Exit Charging Zone With Low Charge identifier.
             */
            ruleEVExitChargingZoneWithLowChargeId: string;
            /**
             * The rule EV Low Charge identifier.
             */
            ruleEVLowChargeId: string;
            /**
             * The rule for route based material management zone.
             */
            ruleEVStoppedInChargingLocationAndNotChargingId: string;
            /**
             * The rule early leave identifier.
             */
            ruleEarlyLeaveId: string;
            /**
             * The rule engine abuse identifier.
             */
            ruleEngineAbuseId: string;
            /**
             * The rule engine light on identifier.
             */
            ruleEngineLightOnId: string;
            /**
             * The rule ELD yard move exemption identifier.
             */
            ruleFMCSAELDYardMoveExemptionId: string;
            /**
             * The rule Idling within Zones identifier.
             * NOTE: This rule was formally called "Fleet Idling"
             */
            ruleFleetIdlingId: string;
            /**
             * The rule harsh braking identifier.
             */
            ruleHarshBrakingId: string;
            /**
             * The rule harsh cornering identifier.
             */
            ruleHarshCorneringId: string;
            /**
             * The rule idling identifier.
             */
            ruleIdlingId: string;
            /**
             * The rule idling no PTO identifier.
             */
            ruleIdlingNoPtoId: string;
            /**
             * The rule jackrabbit starts identifier.
             */
            ruleJackrabbitStartsId: string;
            /**
             * The rule late arrival identifier.
             */
            ruleLateArrivalId: string;
            /**
             * The rule lights left on identifier.
             */
            ruleLightsLeftOnId: string;
            /**
             * The rule long lunch identifier.
             */
            ruleLongLunchId: string;
            /**
             * The rule long stops during work hours identifier.
             */
            ruleLongStopsDuringWorkHoursId: string;
            /**
             * The rule low fuel level identifier.
             */
            ruleLowFuelLevelId: string;
            /**
             * The rule Material management deadhead.
             */
            ruleMaterialManagementDeadheadId: string;
            /**
             * The rule Material management liquid application.
             */
            ruleMaterialManagementLiquidApplicationId: string;
            /**
             * The rule Material management plow.
             */
            ruleMaterialManagementPlowActiveId: string;
            /**
             * The rule Material management pre wet application.
             */
            ruleMaterialManagementPreWetApplicationId: string;
            /**
             * The rule for route based material management zone.
             */
            ruleMaterialManagementRouteBasedZoneOnlyId: string;
            /**
             * The rule Material management solid application.
             */
            ruleMaterialManagementSolidApplicationId: string;
            /**
             * The rule Material management tow plow.
             */
            ruleMaterialManagementTowPlowActiveId: string;
            /**
             * The rule Material management tow plow liquid application.
             */
            ruleMaterialManagementTowPlowLiquidApplicationId: string;
            /**
             * The rule Material management tow plow pre wet application.
             */
            ruleMaterialManagementTowPlowPreWetApplicationId: string;
            /**
             * The rule Material management tow plow solid application.
             */
            ruleMaterialManagementTowPlowSolidApplicationId: string;
            /**
             * The rule Material management unload.
             */
            ruleMaterialManagementUnloadId: string;
            /**
             * The rule posted speeding identifier.
             */
            rulePostedSpeedingId: string;
            /**
             * The rule reverse at start identifier.
             */
            ruleReverseAtStartId: string;
            /**
             * The rule seat belt identifier.
             */
            ruleSeatbeltId: string;
            /**
             * The rule unauthorized device removal identifier.
             */
            ruleUnauthorizedDeviceRemovalId: string;
            /**
             * The rule unauthorized home stop identifier.
             */
            ruleUnauthorizedHomeStopId: string;
            /**
             * The rule for Vehicle ESR Health.
             */
            ruleVehicleESRHealthId: string;
            /**
             * The rule harsh braking identifier.
             */
            ruleVehicleMovementWithinZonesId: string;
            /**
             * The rule for WiFi Max Tier Limit.
             */
            ruleWiFiMaxTierUsageId: string;
            /**
             * The rule for WiFi Tier Usage.
             */
            ruleWiFiTierUsageId: string;
            /**
             * The securityId, Allow viewing the about checkmate page.
             */
            securityIdAboutCheckmateId: string;
            /**
             * The securityId, Allow user to view and edit accelerometer stock rules and device settings.
             */
            securityIdAccelerometerDataClearanceId: string;
            /**
             * The securityId, Access to AccidentDebugReport.
             */
            securityIdAccidentDebugReportId: string;
            /**
             * The securityId, Allow access to create or download accident keys.
             */
            securityIdAccidentWizardId: string;
            /**
             * The securityId, Allow user to view turn on/off Active tracking feature.
             */
            securityIdActiveTrackingClearanceId: string;
            /**
             * The securityId, administer DirectCustomerInstallationServices.
             */
            securityIdAdministerDirectCustomerInstallationServicesId: string;
            /**
             * The securityId, administer DirectCustomerOrderManagement.
             */
            securityIdAdministerDirectCustomerOrderManagementId: string;
            /**
             * The securityId, administer DirectCustomerOrdering.
             */
            securityIdAdministerDirectCustomerOrderingId: string;
            /**
             * The securityId, administer Live Map
             */
            securityIdAdministerLiveMapId: string;
            /**
             * The securityId, Access to administer properties.
             */
            securityIdAdministerPropertyId: string;
            /**
             * The securityId, Access to administer property sets.
             */
            securityIdAdministerPropertySetId: string;
            /**
             * The securityId, Allow user to view the wifi settings tab and view/modify the wifi hotspot SSID and password.
             */
            securityIdAdministerWiFiHotspotSettingsId: string;
            /**
             * The securityId, Access to AuditLog.
             */
            securityIdAuditLogId: string;
            /**
             * The securityId, Allow user to view auxiliary settings.
             */
            securityIdAuxiliaryClearanceId: string;
            /**
             * The securityId, Access to BEV Range Capability Report.
             */
            securityIdBEVRangeCapabilityReportId: string;
            /**
             * The securityId, Access to certify DVIR.
             */
            securityIdCertifyDVIRId: string;
            /**
             * The securityId, Access to ChangePassword.
             */
            securityIdChangePasswordId: string;
            /**
             * The securityId, Access to CongregationReport.
             */
            securityIdCongregationReportId: string;
            /**
             * The securityId, Allow user to view turn on/off continuous connect feature.
             */
            securityIdContinuousConnectClearanceId: string;
            /**
             * The securityId, Access to CreateExtractKey.
             */
            securityIdCreateExtractKeyId: string;
            /**
             * The securityId, Access to CreateFirmwareKey.
             */
            securityIdCreateFirmwareKeyId: string;
            /**
             * The securityId, Access to CreateKeyBackup.
             */
            securityIdCreateKeyBackupId: string;
            /**
             * The securityId, Access to CreateProgrammingKey.
             */
            securityIdCreateProgrammingKeyId: string;
            /**
             * The securityId, Access to Route Completion.
             */
            securityIdCreateShareableLinkId: string;
            /**
             * The securityId, Access to CreateTestKey.
             */
            securityIdCreateTestKeyId: string;
            /**
             * The securityId, Access to CreateWifiKey.
             */
            securityIdCreateWifiKeyId: string;
            /**
             * The securityId, Access to CustomerVisitsReport.
             */
            securityIdCustomerVisitsReportId: string;
            /**
             * The securityId, Allow deleting GPS Text Message.
             */
            securityIdDeleteGpsTextMessageId: string;
            /**
             * The securityId, Access to Route Completion.
             */
            securityIdDeleteShareableLinkId: string;
            /**
             * The securityId, Allow user to see advanced device settings.
             */
            securityIdDeviceAdminAdvancedId: string;
            /**
             * The securityId, Access to removing vehicle, unpluging device, and replacing device.
             */
            securityIdDeviceAdminDeleteUnplugReplaceId: string;
            /**
             * The securityId, Allow use to configure driver feedback settings.
             */
            securityIdDeviceAdminDriverFeedbackId: string;
            /**
             * The securityId, Access to DeviceAdmin.
             */
            securityIdDeviceAdminId: string;
            /**
             * The securityId, Allow user to view device current status link.
             */
            securityIdDeviceCurrentStatusClearanceId: string;
            /**
             * The securityId, Access to DeviceInstallHistoryReport.
             */
            securityIdDeviceInstallHistoryReportId: string;
            /**
             * The securityId, Access to Device List.
             */
            securityIdDeviceListId: string;
            /**
             * The securityId, Allow user to view and edit DirectSupport tickets.
             */
            securityIdDirectSupportAdminId: string;
            /**
             * The securityId, Ability to Dismiss Faults.
             */
            securityIdDismissFaultsId: string;
            /**
             * The securityId, Display devices on a map.
             */
            securityIdDisplayMapId: string;
            /**
             * The securityId, insert DisplayMeasurementProfileDetail.
             */
            securityIdDisplayMeasurementProfileDetailInsertId: string;
            /**
             * The securityId, remove DisplayMeasurementProfileDetail.
             */
            securityIdDisplayMeasurementProfileDetailRemoveId: string;
            /**
             * The securityId, set DisplayMeasurementProfileDetail.
             */
            securityIdDisplayMeasurementProfileDetailSetId: string;
            /**
             * The securityId, insert DisplayMeasurementProfile.
             */
            securityIdDisplayMeasurementProfileInsertId: string;
            /**
             * The securityId, remove DisplayMeasurementProfile.
             */
            securityIdDisplayMeasurementProfileRemoveId: string;
            /**
             * The securityId, set DisplayMeasurementProfile.
             */
            securityIdDisplayMeasurementProfileSetId: string;
            /**
             * The securityId, required to support ENGCO and is only applicable if their custom
             * code has been configured.
             * Allow user to configure driver blacklist on devices.
             */
            securityIdDriverBlacklistId: string;
            /**
             * The securityId, Allow user to view driver identification (keys).
             */
            securityIdDriverIdentificationClearanceId: string;
            /**
             * The securityId, Access to EV Battery Health Report.
             */
            securityIdEVBatteryHealthReportId: string;
            /**
             * The securityId, Allow user to view TripType Change Data.
             */
            securityIdEditDeviceDataPrivacyChangeDataId: string;
            /**
             * The securityId, Allow user to edit the odometer reading associated with the device.
             */
            securityIdEditDeviceOdometerId: string;
            /**
             * The securityId, edit device share.
             */
            securityIdEditDeviceShareId: string;
            /**
             * The securityId, Allow user to edit a distribution list.
             */
            securityIdEditDistributionListId: string;
            /**
             * The securityId, Allow user to edit an exception rule using the wizard.
             */
            securityIdEditExceptionId: string;
            /**
             * The securityId, Allow changing exception email templates.
             */
            securityIdEditNotificationEmailTemplateId: string;
            /**
             * The securityId, Allow user to edit OSM road speeds.
             */
            securityIdEditRoadSpeedsId: string;
            /**
             * The securityId, Edit stock rule
             */
            securityIdEditStockRulesId: string;
            /**
             * The securityId, Allow user to view and edit TripType Change Data.
             */
            securityIdEditTripTypeChangeDataId: string;
            /**
             * The securityId, edit device link.
             */
            securityIdEditUserDeviceLinkId: string;
            /**
             * The securityId, Access to EngineDiagnosticList.
             */
            securityIdEngineDiagnosticListId: string;
            /**
             * The securityId, Access to EngineFailureModeList.
             */
            securityIdEngineFailureModeListId: string;
            /**
             * The securityId, Access to EngineFlashCodelist.
             */
            securityIdEngineFlashCodelistId: string;
            /**
             * The securityId, Access to EngineManagementReport.
             */
            securityIdEngineManagementReportId: string;
            /**
             * The securityId, Allow user to view and edit engine status stock rules.
             */
            securityIdEngineStatusDataClearanceId: string;
            /**
             * The securityId, Access to EngineStatusDataGraph.
             */
            securityIdEngineStatusDataGraphId: string;
            /**
             * The securityId, Access to EngineTypeList.
             */
            securityIdEngineTypeListId: string;
            /**
             * The securityId, Access to EngineUnitOfMeasureList.
             */
            securityIdEngineUnitOfMeasureListId: string;
            /**
             * The securityId, Access to EventOccurrenceList.
             */
            securityIdEventOccurrenceListId: string;
            /**
             * The securityId, Access to Everything.
             */
            securityIdEverythingId: string;
            /**
             * The security ID that allows a user to add comments or attachments to ExceptionEvents that they are a driver of.
             */
            securityIdExceptionEventReviewParticipantId: string;
            /**
             * The security ID that allows a user to add comments or attachments to any ExceptionEvent in their scope.
             */
            securityIdExceptionEventReviewerId: string;
            /**
             * The securityId, Access to ExceptionsList.
             */
            securityIdExceptionsListId: string;
            /**
             * The securityId, Access to ExceptionsReport.
             */
            securityIdExceptionsReportId: string;
            /**
             * The securityId, Access to ExportFromOtherDatabase.
             */
            securityIdExportFromOtherDatabaseId: string;
            /**
             * The securityId, Allow user to view feature preview switcher.
             */
            securityIdFeaturePreviewClearanceId: string;
            /**
             * The securityId, Allow access to the Fuel Tax Report.
             */
            securityIdFuelTaxId: string;
            /**
             * The securityId, Access to FuelTransactionAdmin.
             */
            securityIdFuelTransactionAdminId: string;
            /**
             * The securityId, Access to FuelTransactionList.
             */
            securityIdFuelTransactionListId: string;
            /**
             * The securityId, Access to Fuel Usage Report.
             */
            securityIdFuelUsageReportId: string;
            /**
             * The securityId, Allow user to view GoTalk settings and version.
             */
            securityIdGoTalkClearanceId: string;
            /**
             * The securityId, Allowed to Ignore HOS logs.
             */
            securityIdIgnoreHOSLogsId: string;
            /**
             * The securityId, Allow impersonating GPS Text Message.
             */
            securityIdImpersonateGpsTextMessageId: string;
            /**
             * The securityId, Access to ImportFromOtherDatabase.
             */
            securityIdImportFromOtherDatabaseId: string;
            /**
             * The securityId, Access to ImportZones.
             */
            securityIdImportZonesId: string;
            /**
             * The securityId, Access to inspect DVIR.
             */
            securityIdInspectDVIRId: string;
            /**
             * The securityId for InstallRecord.
             */
            securityIdInstallRecordId: string;
            /**
             * The securityId, Access to KeyInformation.
             */
            securityIdKeyInformationId: string;
            /**
             * The securityId, Allows the user to Launch Custom Reports and Add-Ins.
             */
            securityIdLaunchAddInId: string;
            /**
             * The securityId, Allow user to add, edit, or remove AddInData objects.
             */
            securityIdManageAddInDataId: string;
            /**
             * The securityId, Allow user to view and edit addins.
             */
            securityIdManageAddinsClearanceId: string;
            /**
             * The securityId, add, set, or remove BinaryDataFile
             */
            securityIdManageBinaryDataFilesId: string;
            /**
             * The securityId, Allow user to manage certificates.
             */
            securityIdManageCertificatesId: string;
            /**
             * The securityId, Allow user to edit DVIR logs.
             */
            securityIdManageDVIRLogsId: string;
            /**
             * The securityId, Allowed to edit device groups.
             */
            securityIdManageDriverActivityGroupId: string;
            /**
             * The securityId, Allow user to edit HOS driver logs.
             */
            securityIdManageHOSLogsId: string;
            /**
             * The securityId, Allow user to add, set or remove media files.
             */
            securityIdManageMediaId: string;
            /**
             * The securityId, Allow access to managing report templates.
             */
            securityIdManageReportTemplatesId: string;
            /**
             * The securityId, Allow user to add, edit, and remove shipments.
             */
            securityIdManageShipmentsId: string;
            /**
             * The securityId, manage TachographCompanyCard
             */
            securityIdManageTachographCompanyCardsId: string;
            /**
             * The securityId, Manage Tachograph Inspection
             */
            securityIdManageTachographInspectionId: string;
            /**
             * The securityId, All user to add/edit/remove trailers.
             */
            securityIdManageTrailersId: string;
            /**
             * The securityId which allows editing TripAnnotations.
             */
            securityIdManageTripAnnotationId: string;
            /**
             * The securityId, Manage User Display Profiles.
             */
            securityIdManageUserDisplayProfilesId: string;
            /**
             * The securityId, Access to Material Management.
             */
            securityIdMaterialManagementReportId: string;
            /**
             * The securityId, This is dashboard security. Allow access to dashboard and CustomReportSchedule.
             */
            securityIdMileageSummaryDashboardId: string;
            /**
             * The securityId, add, set, or remove GroupFilter
             */
            securityIdModifyGroupFilterId: string;
            /**
             * The securityId, Allow user to view news notifications switcher.
             */
            securityIdNewsNotificationsClearanceId: string;
            /**
             * The securityId, Access to NodesList.
             */
            securityIdNodesListId: string;
            /**
             * The securityId, Access to NotificationList.
             */
            securityIdNotificationListId: string;
            /**
             * The securityId, Access to OrganizeViews.
             */
            securityIdOrganizeViewsId: string;
            /**
             * The securityId, Allow user to view product guide.
             */
            securityIdProductGuideClearanceId: string;
            /**
             * The securityId, Allow user to purchase paid items on the Marketplace.
             */
            securityIdPurchaseMarketplacePaidItemsId: string;
            /**
             * The securityId, Access to PurgeData.
             */
            securityIdPurgeDataId: string;
            /**
             * The securityId, Access to ReminderReport.
             */
            securityIdReminderReportId: string;
            /**
             * The securityId, Access to ReminderRuleList.
             */
            securityIdReminderRuleListId: string;
            /**
             * The securityId, Access to repair DVIR.
             */
            securityIdRepairDVIRId: string;
            /**
             * The securityId, Access to ReprocessData.
             */
            securityIdReprocessDataId: string;
            /**
             * The securityId, Reprocess Route Based Material Management Rules.
             */
            securityIdReprocessRouteBasedMaterialManagementRulesId: string;
            /**
             * The securityId, Requests the current GPS location from a GO device. Typical implementation is for Iridium network.
             */
            securityIdRequestDeviceLocationId: string;
            /**
             * The securityId, Allow user to view reseller data.
             */
            securityIdResellerControlClearanceId: string;
            /**
             * The securityId, Reset password.
             */
            securityIdResetPasswordId: string;
            /**
             * The securityId, Access to RestoreKeyBackup.
             */
            securityIdRestoreKeyBackupId: string;
            /**
             * The securityId, Access to RiskManagementReport.
             */
            securityIdRiskManagementReportId: string;
            /**
             * The securityId, Allow user to run Route Comparison Report.
             */
            securityIdRouteComparisonReportId: string;
            /**
             * The securityId, Access to Route Completion.
             */
            securityIdRouteCompletionId: string;
            /**
             * The securityId, Access to RouteList.
             */
            securityIdRouteListId: string;
            /**
             * The securityId, Access to RouteSummaryReport.
             */
            securityIdRouteSummaryReportId: string;
            /**
             * The securityId, Access to SecurityClearanceList.
             */
            securityIdSecurityClearanceListId: string;
            /**
             * The securityId, Send cold chain command
             */
            securityIdSendColdChainCommandId: string;
            /**
             * The securityId, Allow external relay instruction to be send to the vehicle.
             */
            securityIdSendExternalRelayInstructionId: string;
            /**
             * The securityId, Allow sending GPS Text Message, Routes and Addresses.s
             */
            securityIdSendGpsTextMessageId: string;
            /**
             * The securityId, Allow user to view device service plans.
             */
            securityIdServicePlansClearanceId: string;
            /**
             * The securityId, "SecurityIdServices" settings tab.
             */
            securityIdServicesSettingsId: string;
            /**
             * The securityId, Ability to Skip a Maintenance Reminder.
             */
            securityIdSkipReminderId: string;
            /**
             * The securityId, Ability to Snooze a Maintenance Reminder.
             */
            securityIdSnoozeReminderId: string;
            /**
             * The securityId, Access to SpeedProfileReport.
             */
            securityIdSpeedProfileReportId: string;
            /**
             * The securityId, Allow starting full version of MyGeotab from a web page.
             */
            securityIdStartFullVersionId: string;
            /**
             * The securityId, Allow user to view and edit status groups.
             */
            securityIdStatusGroupsClearanceId: string;
            /**
             * The securityId, Access to SystemSettings.
             */
            securityIdSystemSettingsId: string;
            /**
             * The securityId, tachograph download and upload files
             */
            securityIdTachographDownloadAndUploadFilesId: string;
            /**
             * The securityId, Access to TimeCardReport.
             */
            securityIdTimeCardReportId: string;
            /**
             * The securityId, required to support WATERMARK and is only applicable if their custom
             * code has been configured.
             */
            securityIdTrackHistoricDataId: string;
            /**
             * The securityId, Access to TripsActivityReport.
             */
            securityIdTripsActivityReportId: string;
            /**
             * The securityId, Access to UnassignedRouteReport.
             */
            securityIdUnassignedRouteReportId: string;
            /**
             * The securityId, Unknown identifier is not used for security purposes. It's used internally to indicate a particular type could not be translated into
             * a security identifier. This always yields in access denied.
             */
            securityIdUnknownId: string;
            /**
             * The securityId, Administer Users/Drivers.
             */
            securityIdUserAdminId: string;
            /**
             * The securityId, insert UserDisplayProfile.
             */
            securityIdUserDisplayProfileInsertId: string;
            /**
             * The securityId, remove UserDisplayProfile.
             */
            securityIdUserDisplayProfileRemoveId: string;
            /**
             * The securityId, set UserDisplayProfile.
             */
            securityIdUserDisplayProfileSetId: string;
            /**
             * The securityId, Access to User/Driver List.
             */
            securityIdUserListId: string;
            /**
             * The securityId, Access to UserSettings.
             */
            securityIdUserSettingsId: string;
            /**
             * The securityId, Access to Active Insights.
             */
            securityIdViewActiveInsightsId: string;
            /**
             * The securityId, Allow user to view AddInData objects.
             */
            securityIdViewAddInDataId: string;
            /**
             * The securityId, Allow user to view the advanced help items.
             */
            securityIdViewAdvancedHelpId: string;
            /**
             * The securityId, Access to Route Completion.
             */
            securityIdViewAnalyticsLabId: string;
            /**
             * The securityId, get BinaryDataFile.
             */
            securityIdViewBinaryDataFilesId: string;
            /**
             * The securityId, Allow user to view BinaryData.
             */
            securityIdViewBinaryDataId: string;
            /**
             * The securityId, Allow user to view Business Intelligence data (Fleet Industry Trends and etc.)
             */
            securityIdViewBusinessIntelligenceId: string;
            /**
             * The securityId, Allow user to view certificates.
             */
            securityIdViewCertificatesId: string;
            /**
             * The securityId, Allow user to view DVIR logs.
             */
            securityIdViewDVIRLogsId: string;
            /**
             * The securityId, Allow user to view TripType Change Data.
             */
            securityIdViewDeviceDataPrivacyChangeDataId: string;
            /**
             * The securityId, view deviceShare.
             */
            securityIdViewDeviceShareId: string;
            /**
             * The securityId, view DirectCustomerOrderManagement.
             */
            securityIdViewDirectCustomerOrderManagementId: string;
            /**
             * The securityId, view DirectCustomerVinLookup.
             */
            securityIdViewDirectCustomerVinLookupId: string;
            /**
             * The securityId, Allow viewing sent and received GPS Text Messages.
             */
            securityIdViewGpsTextMessageId: string;
            /**
             * The securityId, see GroupFilter
             */
            securityIdViewGroupFilterId: string;
            /**
             * The securityId, Allow user only to view groups.
             */
            securityIdViewGroupsId: string;
            /**
             * The securityId, Allow user to view HOS driver logs.
             */
            securityIdViewHOSLogsId: string;
            /**
             * The securityId, view Live Map
             */
            securityIdViewLiveMapId: string;
            /**
             * The securityId, View Maintenance Center.
             */
            securityIdViewMaintenanceCenterId: string;
            /**
             * The securityId, Allow user to see paid Marketplace items.
             */
            securityIdViewMarketplacePaidItemsId: string;
            /**
             * The securityId, Allow user to view media files.
             */
            securityIdViewMediaId: string;
            /**
             * The securityId, Access to view properties.
             */
            securityIdViewPropertyId: string;
            /**
             * The securityId, Access to view property sets.
             */
            securityIdViewPropertySetId: string;
            /**
             * The securityId, Allow viewing data using report template.
             */
            securityIdViewReportTemplateId: string;
            /**
             * The securityId, View Route.
             */
            securityIdViewRouteId: string;
            /**
             * The securityId, Ability to Dismiss Faults.
             */
            securityIdViewSafetyCenterId: string;
            /**
             * The securityId, Access to Route Completion.
             */
            securityIdViewShareableLinkId: string;
            /**
             * The securityId, Allowed to share device location.
             */
            securityIdViewSharedDeviceId: string;
            /**
             * The securityId, Allow user to view existing shipments.
             */
            securityIdViewShipmentsId: string;
            /**
             * The securityId, view TachographCompanyCard
             */
            securityIdViewTachographCompanyCardsId: string;
            /**
             * The securityId, view tachograph driving time data
             */
            securityIdViewTachographDrivingTimeDataId: string;
            /**
             * The securityId, view tachograph infringement data
             */
            securityIdViewTachographInfringementDataId: string;
            /**
             * The securityId, View Tachograph Inspection
             */
            securityIdViewTachographInspectionId: string;
            /**
             * The securityId, view tachograph remote download data
             */
            securityIdViewTachographRemoteDownloadDataId: string;
            /**
             * The securityId, Allow user to view existing trailers.
             */
            securityIdViewTrailersId: string;
            /**
             * The securityId which allows viewing TripAnnotations.
             */
            securityIdViewTripAnnotationId: string;
            /**
             * The securityId, Allow user to view TripType Change Data.
             */
            securityIdViewTripTypeChangeDataId: string;
            /**
             * The securityId, view user device link.
             */
            securityIdViewUserDeviceLinkId: string;
            /**
             * The securityId, View vehicle identification number on active insights.
             */
            securityIdViewVinOnActiveInsightsId: string;
            /**
             * The securityId, Allow user  to view the wifi hotspot SSID and password.
             */
            securityIdViewWiFiHotspotSettingsId: string;
            /**
             * The securityId, Access to WorkHolidayList.
             */
            securityIdWorkHolidayListId: string;
            /**
             * The securityId, Access to WorkTimeList.
             */
            securityIdWorkTimeListId: string;
            /**
             * The securityId, Access to ZoneAdmin.
             */
            securityIdZoneAdminId: string;
            /**
             * The securityId, Access to ZoneList.
             */
            securityIdZoneListId: string;
            /**
             * The securityId, Access to List of ZoneType's.
             */
            securityIdZoneTypeListId: string;
            /**
             * The ShareableLinkState InProgress identifier.
             */
            shareableLinkStateInProgressId: string;
            /**
             * The ShareableLinkState Succeed identifier.
             */
            shareableLinkStateSucceedId: string;
            /**
             * The source AI Model identifier.
             */
            sourceAiModelId: string;
            /**
             * The source BRP obsolete identifier.
             */
            sourceAiModelObsoleteId: string;
            /**
             * The source BRP identifier.
             */
            sourceBrpId: string;
            /**
             * The source BRP obsolete identifier.
             */
            sourceBrpObsoleteId: string;
            /**
             * The source Geotab GO identifier.
             */
            sourceGeotabGoId: string;
            /**
             * The source Geotab GO obsolete identifier.
             */
            sourceGeotabGoObsoleteId: string;
            /**
             * The source GMCCC identifier.
             */
            sourceGmcccId: string;
            /**
             * The source GMCCC obsolete identifier.
             */
            sourceGmcccObsoleteId: string;
            /**
             * The source J1708 identifier.
             */
            sourceJ1708Id: string;
            /**
             * The source J1708 obsolete identifier.
             */
            sourceJ1708ObsoleteId: string;
            /**
             * The source J1939 identifier.
             */
            sourceJ1939Id: string;
            /**
             * The source J1939 obsolete identifier.
             */
            sourceJ1939ObsoleteId: string;
            /**
             * The source Legacy proprietary identifier.
             */
            sourceLegacyId: string;
            /**
             * The source Legacy proprietary obsolete identifier.
             */
            sourceLegacyObsoleteId: string;
            /**
             * The Levc Source KnownId.
             */
            sourceLevcId: string;
            /**
             * The Obsolete Levc Source KnownId.
             */
            sourceLevcObsoleteId: string;
            /**
             * The source OBD identifier.
             */
            sourceObdId: string;
            /**
             * The source OBD obsolete identifier.
             */
            sourceObdObsoleteId: string;
            /**
             * The source OBD Source Address identifier.
             */
            sourceObdSaId: string;
            /**
             * The source WWH OBD obsolete identifier.
             */
            sourceObdSaObsoleteId: string;
            /**
             * The source Proprietary identifier.
             */
            sourceProprietaryId: string;
            /**
             * The source Proprietary obsolete identifier.
             */
            sourceProprietaryObsoleteId: string;
            /**
             * The source system identifier.
             */
            sourceSystemId: string;
            /**
             * The source system obsolete identifier.
             */
            sourceSystemObsoleteId: string;
            /**
             * The source third-party identifier.
             */
            sourceThirdPartyId: string;
            /**
             * The source third-party obsolete identifier.
             */
            sourceThirdPartyObsoleteId: string;
            /**
             * Gets Speeding Violation report default dashboard report schedule identifier.
             */
            speedingViolationDefaultDashboardReportScheduleId: string;
            /**
             * The system user identifier.
             */
            systemUserId: string;
            /**
             * The text template default exception rule identifier.
             */
            textTemplateDefaultExceptionRuleId: string;
            /**
             * The text template default exception rule popup identifier.
             */
            textTemplateDefaultExceptionRulePopupId: string;
            /**
             * The Thermograph status Id (0 = absent / 1 = present).
             */
            thermographStatusId: string;
            /**
             * The Thermograph temperature 1 Id.
             */
            thermographTemperature1Id: string;
            /**
             * The Thermograph temperature 2 Id.
             */
            thermographTemperature2Id: string;
            /**
             * The Thermograph temperature 3 Id.
             */
            thermographTemperature3Id: string;
            /**
             * The Thermograph temperature 4 Id.
             */
            thermographTemperature4Id: string;
            /**
             * The Thermograph temperature 5 Id.
             */
            thermographTemperature5Id: string;
            /**
             * The Thermograph temperature 6 Id.
             */
            thermographTemperature6Id: string;
            /**
             * The unit of measure amps identifier.
             */
            unitOfMeasureAmpsId: string;
            /**
             * The unit of measure amps identifier.
             */
            unitOfMeasureAmpsPerHourId: string;
            /**
             * The unit of measure bytes identifier.
             */
            unitOfMeasureBytesId: string;
            /**
             * The unit of measure cubic meters identifier.
             */
            unitOfMeasureCubicMetersId: string;
            /**
             * The unit of measure cubic meters per second identifier.
             */
            unitOfMeasureCubicMetersPerSecondId: string;
            /**
             * The unit of measure degrees Celsius identifier.
             */
            unitOfMeasureDegreesCelsiusId: string;
            /**
             * The unit of measure grams identifier.
             */
            unitOfMeasureGramsId: string;
            /**
             * The unit of measure grams per second identifier.
             */
            unitOfMeasureGramsPerSecondId: string;
            /**
             * The unit of measure grams per square meter identifier.
             */
            unitOfMeasureGramsPerSquareMeterId: string;
            /**
             * The unit of measure Hertz identifier.
             */
            unitOfMeasureHertzId: string;
            /**
             * The unit of measure kilowatt-hours identifier.
             */
            unitOfMeasureKiloWattHoursId: string;
            /**
             * The unit of measure kilograms per kilometer identifier.
             */
            unitOfMeasureKilogramsPerKilometerId: string;
            /**
             * The unit of measure kilometers per hour identifier.
             */
            unitOfMeasureKilometersPerHourId: string;
            /**
             * The unit of measure kilometers per liter identifier.
             */
            unitOfMeasureKilometersPerKiloWattHourId: string;
            /**
             * The unit of measure kilometers per kilogram identifier.
             */
            unitOfMeasureKilometersPerKilogramId: string;
            /**
             * The unit of measure kilometers per liter identifier.
             */
            unitOfMeasureKilometersPerLiterId: string;
            /**
             * The unit of measure liters identifier.
             */
            unitOfMeasureLitersId: string;
            /**
             * The unit of measure liters per lane kilometer identifier.
             */
            unitOfMeasureLitersPerLaneKilometerId: string;
            /**
             * The unit of measure liters per tonne identifier.
             */
            unitOfMeasureLitersPerTonneId: string;
            /**
             * The unit of measure meters identifier.
             */
            unitOfMeasureMetersId: string;
            /**
             * The unit of measure meters per second squared identifier.
             */
            unitOfMeasureMetersPerSecondSquaredId: string;
            /**
             * The unit of measure Newton meters identifier.
             */
            unitOfMeasureNewtonMetersId: string;
            /**
             * The unit of measure Newtons identifier.
             */
            unitOfMeasureNewtonsId: string;
            /**
             * The unit of measure none identifier.
             */
            unitOfMeasureNoneId: string;
            /**
             * The unit of measure Ohms identifier.
             */
            unitOfMeasureOhmsId: string;
            /**
             * The unit of measure Ohms per second identifier.
             */
            unitOfMeasureOhmsPerSecondId: string;
            /**
             * The unit of measure parts per million identifier.
             */
            unitOfMeasurePartsPerMillionId: string;
            /**
             * The unit of measure Pascals identifier.
             */
            unitOfMeasurePascalsId: string;
            /**
             * The unit of measure percentage identifier.
             */
            unitOfMeasurePercentageId: string;
            /**
             * The unit of measure pulses per meter identifier.
             */
            unitOfMeasurePulsesPerMeterId: string;
            /**
             * The unit of measure radians identifier.
             */
            unitOfMeasureRadiansId: string;
            /**
             * The unit of measure revolutions identifier.
             */
            unitOfMeasureRevolutionsId: string;
            /**
             * The unit of measure revolutions per minute identifier.
             */
            unitOfMeasureRevolutionsPerMinuteId: string;
            /**
             * The unit of measure seconds identifier.
             */
            unitOfMeasureSecondsId: string;
            /**
             * The unit of measure Volts identifier.
             */
            unitOfMeasureVoltsId: string;
            /**
             * The unit of measure Watts identifier.
             */
            unitOfMeasureWattsId: string;
            /**
             * The unknown driver identifier.
             */
            unknownDriverId: string;
            /**
             * The DatPrivacyType Unknown identifier.
             */
            unknownRestrictedDataModeId: string;
            /**
             * Gets Unrepaired Defect report default dashboard report schedule identifier.
             */
            unrepairedDefectDefaultDashboardReportScheduleId: string;
            /**
             * The DataModeType Public identifier.
             */
            unrestrictedDataModeId: string;
            /**
             * The user notification binary file start identifier.
             */
            userNotificationBinaryFileStartId: string;
            /**
             * The user report template identifier.
             */
            userReportTemplateId: string;
            /**
             * The DataModeType Private Strict identifier.
             */
            userRestrictedDataModeId: string;
            /**
             * The user work time start identifier.
             */
            userWorkTimeStartId: string;
            /**
             * Gets Watchdog report default dashboard report schedule identifier.
             */
            watchdogDefaultDashboardReportScheduleId: string;
            /**
             * The work time all hours identifier.
             */
            workTimeAllHoursId: string;
            /**
             * The work time early departure hours identifier.
             */
            workTimeEarlyLeaveHoursId: string;
            /**
             * The work time late arrival hours identifier.
             */
            workTimeLateArrivalHoursId: string;
            /**
             * The work time lunch hours identifier.
             */
            workTimeLunchHoursId: string;
            /**
             * The work time standard hours identifier.
             */
            workTimeStandardHoursId: string;
            /**
             * The zone type address lookup identifier.
             */
            zoneTypeAddressLookupId: string;
            /**
             * The zone type customer identifier.
             */
            zoneTypeCustomerId: string;
            /**
             * The zone type home identifier.
             */
            zoneTypeHomeId: string;
            /**
             * The zone type office identifier.
             */
            zoneTypeOfficeId: string;
        }
        /**
         * A unique identifier for different types IoxAddOns. The range of valid values is between 4096 (inclusive) and 8192.
         */
        interface KnownIoxAddOnType {
            /**
             * The Bluetooth Iox Add-On type. Integer value is 4134.
             */
            bluetooth: number;
            /**
             * The Garmin Iox Add-On type. Integer value is 4096.
             */
            garmin: number;
            /**
             * The GoTalk Iox Add-On type. Integer value is 4125.
             */
            goTalk: number;
            /**
             * The Output Iox Add-On type. Integer value is 4135.
             */
            ioxOutput: number;
            /**
             * The Iridium Iox Add-On type. Integer value is 4097.
             */
            iridium: number;
            /**
             * The NFC Iox Add-On type. Integer value is 4110.
             */
            nFC: number;
            /**
             * The U Reader Iox Add-On type. Integer value is 4168.
             */
            uReader: number;
        }
        /**
         * A single leg of Directions between origin and destination Waypoints.
         */
        interface Leg {
            /**
             * The destination Waypoint of this leg.
             */
            destination: object;
            /**
             * The distance estimate for this leg in kilometers.
             */
            distance: number;
            /**
             * The travel time duration estimate for this leg.
             */
            duration: string;
            /**
             * The origin Waypoint of this leg.
             */
            origin: object;
            /**
             * The ordered sequence of this leg.
             */
            sequence: number;
            /**
             * The steps denoting information about each separate Step of the leg.
             */
            steps: unknown[];
        }
        /**
         * Message content that can send a GPS location to a device. Derived from TextContent.
         * To reset the location on a device, a location message with latitude/longitude 0 can be sent to the device.
         */
        interface LocationContent {
            /**
             * The address of the stop.
             */
            address: string;
            /**
             * The Id of the route message.
             */
            id: object;
            /**
             * The latitude of the stop.
             */
            latitude: object;
            /**
             * The longitude of the stop.
             */
            longitude: object;
            /**
             * A collection of "DateRange"s indicating when the driver's intent was to go to the provided Latitude and Longitude.
             */
            onRouteRanges: unknown[];
            /**
             * The Id of the route message.
             */
            routeId: object;
            /**
             * Contains the message text.
             */
            message: string;
            /**
             * A value indicating whether set to true this message is sent to display immediately on the Garmin device.
             * This value has no effect on messages sent from the Garmin device.
             */
            urgent: object;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * Record of log entries containing data for a device's position and speed at a specific date and time.
         */
        interface LogRecord {
            /**
             * The date and time the log was recorded.
             */
            dateTime: string;
            /**
             * The Device this log belongs to.
             */
            device: object;
            /**
             * The latitude of the log record.
             */
            latitude: number;
            /**
             * The longitude of the log record.
             */
            longitude: number;
            /**
             * The logged speed or an invalid speed (in km/h).
             */
            speed: number;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for LogRecord(s).
         * When searching for log records the system will return all records that match the search criteria and interpolate the value at the provided from/to dates when there is no record that corresponds to the date. Interpolated records are dynamically created when the request is made and can be identified as not having the ID property populated. Records with an ID are stored in the database.
         * This search has been designed to work efficiently with these combinations of parameters:
         * Id
         * DeviceSearch + FromDate and/or ToDate
         */
        interface LogRecordSearch {
            /**
             * Search for LogRecords for this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for LogRecords at this date or after.
             */
            fromDate: string;
            /**
             * Search for LogRecords at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The results of an authentication attempt.
         */
        interface LoginResult {
            /**
             * The Credentials to be used when making calls to MyGeotab.
             */
            credentials: Credentials;
            /**
             * The path of server hosting the database. "ThisServer" if successfully logged in to this server,
             * or "servername". The caller must handle prepending the protocol.
             */
            path: string;
        }
        /**
         * Represents the Map Add-in item.
         */
        interface Map {
            /**
             * The MapScript.
             */
            mapScript: string;
            /**
             * A value indicating whether the add-in will be displayed in the right-side panel.
             * The default value is false.
             */
            noView: boolean;
            /**
             * The page the Map Add-in will reside within.
             * This could be “map” (The Map page) or “tripsHistory” (the Trips History page). The default value is “map”.
             */
            page: string;
            /**
             * The heading displayed at the top of the panel when there are multiple Map Add-ins installed and title is listed in multiple languages.
             * If a "title" is not provided, the Add-in defaults to the "name" parameter.
             */
            title: object;
        }
        /**
         * Represents the MapScript for Map item.
         */
        interface MapScript {
            /**
             * The JavaScript file reference for the Add-in.
             * This can be an externally hosted file or uploaded into MyGeotab by dragging and dropping it into the Configuration file window.
             */
            src: string;
            /**
             * The CSS file reference for this Add-In.
             * This can be externally hosted or uploaded to MyGeotab.
             */
            style: string;
            /**
             * The HTML file reference for this Add-In.
             * This option can be used instead of src and style. Links to CSS and JavaScript files can be made within this HTML file. All content within the body tags will be added to the Map Add-in UI
             */
            url: string;
        }
        /**
         * A Map View with a name and a viewport.
         */
        interface MapView {
            /**
             * The highlighted groups of the map view.
             */
            highlightGroups: string;
            /**
             * Name search for a MapView.
             */
            name: string;
            /**
             * The settings of the map view.
             */
            settings: object;
            /**
             * The view port rectangle boundary of the map view.
             */
            viewport: object;
        }
        /**
         * The entity which describes the binary media.
         */
        interface MediaFile {
            /**
             * The Device associated with the file.
             */
            device: object;
            /**
             * The Driver associated with the file.
             */
            driver: object;
            /**
             * The from date.
             */
            fromDate: string;
            /**
             * The MediaType.
             */
            mediaType: string;
            /**
             * File metadata in JSON format.
             */
            metaData: object;
            /**
             * The Id of the solution which added the data.
             */
            solutionId: string;
            /**
             * The file processing Status.
             */
            status: string;
            /**
             * The list of tags to provide context to the file.
             */
            tags: unknown[];
            /**
             * The list of files which serve as the thumbnail for this file.
             */
            thumbnails: unknown[];
            /**
             * The to date.
             */
            toDate: string;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for MediaFile. This will return the data describing a file, not the actual file.
         */
        interface MediaFileSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any MediaFiles that are assigned to that Device.
             * Providing the Groups will search for MediaFiles for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroup
             */
            deviceSearch: object;
            /**
             * Search for MediaFile with this UserSearch Id.
             * Available UserSearch options are:.
             * Id
             */
            driverSearch: object;
            /**
             * Search for MediaFile records at this date or after. Includes overlapping dates.
             */
            fromDate: string;
            /**
             * Search for MediaFile records with this SolutionId.
             */
            solutionId: string;
            /**
             * Search for MediaFile with this TagSearch.
             * Available TagSearch options are:.
             * IdTagIds
             */
            tagSearch: object;
            /**
             * Search for MediaFile records at this date or before. Includes overlapping dates.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The type of a MediaFile.
         */
        interface MediaType {
            /**
             * Application file type.
             */
            application: string;
            /**
             * Image file type.
             */
            image: string;
            /**
             * Unknown file type.
             */
            unknown: string;
            /**
             * Video file type.
             */
            video: string;
        }
        /**
         * Represents the Add-In Menu item.
         */
        interface Menu {
            /**
             * Or Sets a unique identifier for this menu.
             * This string value of your choice but should be unique.
             */
            menuId: string;
            /**
             * Or Sets ItemName.
             */
            menuName: object;
            /**
             * Or Sets where in the menu hierarchy this menu item should reside.
             * It will follow the menuId specified or become a child item if a trailing slash is provided, such as "ActivityLink/".
             */
            path: string;
            /**
             * Or Sets a URL to the svg image that is placed in front of the menu item.
             */
            svgIcon: string;
            /**
             * Or Sets the URL to the HTML page to load when clicking on this menu item.
             */
            url: string;
        }
        /**
         * The type of TextMessage content.
         */
        interface MessageContentType {
            /**
             * Text message that also includes response options. See CannedResponseContent.
             */
            cannedResponse: string;
            /**
             * Content contains MimeContent to reset a Cold Chain fault code.
             */
            coldChainFaultClearContent: unknown;
            /**
             * Content contains MimeContent to set a setpoint temperature.
             */
            coldChainSetpointSetContent: unknown;
            /**
             * Text message with information to add/remove a driver from a GoDevice's auth list. See DriverAuthListContent.
             */
            driverAuthList: string;
            /**
             * Text message that is converted to speech.  Must have GOTalk.
             */
            goTalk: string;
            /**
             * Text message that includes instructions to open or close an IOX-OUTPUT relay. See IoxOutputContent.
             */
            ioxOutput: string;
            /**
             * Text message that includes a location. See LocationContent.
             */
            location: string;
            /**
             * Text message that contains bytes in a predefined format that describes the MimeType to a third-party IOX Add-On over an RS232 connection. See MimeContent.
             */
            mimeContent: object;
            /**
             * Basic text message. See TextContent.
             */
            normal: string;
        }
        /**
         * The contents of a TextMessage containing data to give to a IOX Add-On over an RS232. It holds more data than SerialIoxContent and is not compatible with all Add-Ons. For more information regarding Add-On compatible please contact your reseller.
         * MimeContent is converted into bytes with a specific format. The first byte is the length of the MimeType (N). The next N bytes are the ASCII encoded bytes of the MimeType string. The next two bytes are the length of the Data (L). Finally, the next L bytes are the Data. Messages from MyGeotab will be delivered in this format and messages to MyGeotab must be in this format as well.
         */
        interface MimeContent {
            /**
             * The channel number to send to an Add-On or that were received from an Add-On. Mandatory field.
             */
            channelNumber: number;
            /**
             * The raw bytes to either send to an Add-On or that were received from an Add-On. Maximum 2GB can be sent in a single message.
             */
            data: string;
            /**
             * The media type of content contained in the data field. Free string, Maximum 255 characters.
             */
            mimeType: string;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * An Entity that has a name field.
         */
        interface NameEntity {
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * An entity with a name and a version.
         */
        interface NameEntityWithVersion {
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Used to represent different Open Street Map (OSM) styles.
         */
        interface OpenStreetMapStyle {
            /**
             * OSM cycle view.
             */
            cycle: string;
            /**
             * Slippy map layer view for OSM.
             */
            mapBox: string;
            /**
             * No style applied.
             */
            none: string;
            /**
             * Geotab satellite view.
             */
            satellite: string;
            /**
             * OSM transport view.
             */
            transport: string;
        }
        /**
         * Represents an exception thrown when a users has exceeded the query limit of an API.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface OverLimitException {}
        /**
         * Standard Parameter Group Number (PGN). Where there is no parameter group it is represented by "ParameterGroupNoneId".
         */
        interface ParameterGroup {
            /**
             * The unique code of the PGN.
             */
            code: number;
            /**
             * The total length in bytes of the PGN.
             */
            dataLength: object;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
        }
        /**
         * The object used to specify the arguments when searching for a ParameterGroup.
         */
        interface ParameterGroupSearch {
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A point with a float X and Y.
         */
        interface PointF {
            /**
             * An empty point.
             */
            empty: unknown;
            /**
             * The X coordinate.
             */
            x: unknown;
            /**
             * The Y coordinate.
             */
            y: unknown;
        }
        /**
         * Defines options for a posted road speed request.
         */
        interface PostedRoadSpeedOptions {
            /**
             * Do not use commercial data.
             */
            noCommercial: unknown;
            /**
             * Do not use community data.
             */
            noCommunity: unknown;
            /**
             * Do not use any posted road speed data that is defined as an "estimate".
             */
            noEstimates: unknown;
            /**
             * No special options, use all available posted road speed data.
             */
            none: unknown;
        }
        /**
         * The class contains the collection of object property names. The fields are matched on case-insensitive basis and included or excluded from the result, depending on isIncluded flag.
         */
        interface PropertySelector {
            /**
             * The collection containing the Entity field names. The system matches those on case-insensitive basis and excludes from the result.
             * Check specific Entity for the fields that can be included or excluded.
             * Undefined or empty collection results in default API behavior: a completely populated object.
             */
            fields: unknown[];
            /**
             * A value indicating whether the specified fields are to be included or excluded. [Default true]
             */
            isIncluded: boolean;
        }
        /**
         * The recipient for a specific notification. A recipient is linked to Rule(s) via a DistributionList. When a Rule is violated the DistributionList linked recipient receives a notification. The type of recipient is defined by it's RecipientType. Not all properties of this object will have a value at the same time they are dependent on the RecipientType. Recipient is represented by the string "NoRecipientId" where there is no recipient.
         */
        interface Recipient {
            /**
             * The email address used when sending notifications via Email.
             */
            address: string;
            /**
             * The Group to assign the related device to.
             */
            group: object;
            /**
             * The NotificationBinaryFile to notify with.
             */
            notificationBinaryFile: object;
            /**
             * The RecipientType (type of notification message) this instance refers to.
             */
            recipientType: string;
            /**
             * The TripType to assign the related device to.
             */
            tripType: object;
            /**
             * The User to receive notification.
             */
            user: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The type of notification message that is generated for a Recipient.
         */
        interface RecipientType {
            /**
             * The vehicle associate with the ExceptionEvent will be assigned to the designated group (removed from sibling groups). A Group is required.
             */
            assignToGroup: string;
            /**
             * Beep ten times rapidly using the GO device buzzer.
             */
            beepTenTimesRapidly: string;
            /**
             * Beep ten times rapidly using the GO device buzzer. The device will beep even if there is a delay in the data and may beep after the event causing the exception has ended.
             */
            beepTenTimesRapidlyAllowDelay: string;
            /**
             * Beep three times using the GO device buzzer.
             */
            beepThreeTimes: string;
            /**
             * Beep three times using the GO device buzzer. The device will beep even if there is a delay in the data and may beep after the event causing the exception has ended.
             */
            beepThreeTimesAllowDelay: string;
            /**
             * Beep three times rapidly using the GO device buzzer.
             */
            beepThreeTimesRapidly: string;
            /**
             * Beep three times rapidly using the GO device buzzer. The device will beep even if there is a delay in the data and may beep after the event causing the exception has ended.
             */
            beepThreeTimesRapidlyAllowDelay: string;
            /**
             * Recipient must be prompted via a text message in the vehicle (for example, Garmin) to select their status.
             */
            changeStatus: string;
            /**
             * Recipient will be notified via either a simple email. A User or valid Address is required. Optionally includes an EmailTemplate (NotificationBinaryFile).
             */
            email: string;
            /**
             * Recipients within a group will be notified via simple email. A valid group name is required. Optionally includes an EmailTemplate (NotificationBinaryFile).
             */
            emailToGroup: string;
            /**
             * Hos will be disabled.
             */
            hosDisabled: string;
            /**
             * Hos will be enabled.
             */
            hosEnabled: string;
            /**
             * Recipient will be notified via a normal priority log that will appear in their Notifications. A User is required.
             */
            logOnly: string;
            /**
             * Recipient will be notified with a popup notification in the MyGeotab application that will also appear in their Notifications. A User is required.
             */
            logPopup: string;
            /**
             * Recipient will be notified with an urgent popup in the MyGeotab application that will also appear in their Notifications. A User is required.
             */
            logUrgentPopup: string;
            /**
             * Recipient will be notified via a text message in the vehicle (for example, Garmin).
             */
            textMessage: string;
            /**
             * Recipient will be notified via audio from a text to speech application connected to the GoDevice.
             */
            textToSpeech: string;
            /**
             * Recipient will be notified via audio from a GoTalk IOX. The GoTalk will speak even if there is a delay in the data and may beep after the event causing the exception has ended.
             */
            textToSpeechAllowDelay: string;
            /**
             * Recipient will be notified via the related WebRequestTemplate (NotificationBinaryFile). A WebRequestTemplate is required.
             */
            webRequest: string;
        }
        /**
         * A Rectangle with a float X, Y, Width and Height.
         */
        interface RectangleF {
            /**
             * The bottom (Y) of the rectangle.
             */
            bottom: unknown;
            /**
             * An empty rectangle.
             */
            empty: unknown;
            /**
             * The height of the rectangle.
             */
            height: unknown;
            /**
             * The left (X) of the rectangle.
             */
            left: unknown;
            /**
             * The location (top left) of the rectangle.
             */
            location: unknown;
            /**
             * The right (X) of the rectangle.
             */
            right: unknown;
            /**
             * The top (Y) of the rectangle.
             */
            top: unknown;
            /**
             * The width of the rectangle.
             */
            width: unknown;
            /**
             * The X coordinate of the rectangle.
             */
            x: unknown;
            /**
             * The Y coordinate of the rectangle.
             */
            y: unknown;
        }
        /**
         * This exception is thrown when there is an exception creating/registering a new database.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface RegistrationException {}
        /**
         * The Repair Status for DVIRDefect.
         */
        interface RepairStatusType {
            /**
             * Defect has identified as Not Necessary to repair
             */
            notNecessary: string;
            /**
             * Defect has not been repaired yet
             */
            notRepaired: string;
            /**
             * Defect has been Repaired
             */
            repaired: string;
        }
        /**
         * A message that requests the current location of a device through Iridium.
         */
        interface RequestLocation {
            /**
             * The device associated with the location request
             * Used to look up device in BinaryPayloadBridge
             */
            device: object;
            /**
             * The BinaryPayloadType.
             */
            payloadType: string;
        }
        /**
         * The address and Zone (if any found) returned by a reverse geocode operation.
         */
        interface ReverseGeocodeAddress {
            /**
             * The city name. In some cases there is a suburb and city and these are contained in City and OtherCity respectively.
             */
            city: string;
            /**
             * The country name.
             */
            country: string;
            /**
             * The full formatted address, containing all the available information for street, province/state, postal/ZIP code and country.
             */
            formattedAddress: string;
            /**
             * The postal code (ZIP code in USA).
             */
            postalCode: string;
            /**
             * The street name of the address; this will not always include the street number.
             */
            street: string;
            /**
             * The street name of the address.
             */
            streetName: string;
            /**
             * The street number of the address.
             */
            streetNumber: string;
            /**
             * The collection of Zone(s) the address is within.
             */
            zones: unknown[];
        }
        /**
         * A connected sequence of zones which create a path for the vehicle to follow.
         */
        interface Route {
            /**
             * Free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * The Device linked to the route. Only applies to "Plan" type routes.
             */
            device: object;
            /**
             * The end date and time of the route which is the arrival time of the last stop.
             */
            endTime: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [255].
             */
            name: string;
            /**
             * The RoutePlanItem item collection (sequence of stops which make up the route).
             */
            routePlanItemCollection: unknown[];
            /**
             * The RouteType. Default [Basic].
             */
            routeType: string;
            /**
             * The start date and time or the route which is the arrival time of the 1st stop.
             */
            startTime: string;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The class representing an individual item in a planned Route.
         */
        interface RoutePlanItem {
            /**
             * The start date for the plan item.
             */
            activeFrom: string;
            /**
             * The end date for the plan item.
             */
            activeTo: string;
            /**
             * A free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * Expected date and time of arrival.
             */
            dateTime: string;
            /**
             * Expected trip distance to arrival.
             */
            expectedDistanceToArrival: number;
            /**
             * Expected stop duration in milliseconds.
             */
            expectedStopDuration: string;
            /**
             * Expected trip time to arrival in milliseconds.
             */
            expectedTripDurationToArrival: string;
            /**
             * The expected number of passes through the Zone.
             */
            passCount: number;
            /**
             * The associated Route of the plan.
             */
            route: object;
            /**
             * The sequence number of the route plan item.
             */
            sequence: number;
            /**
             * The associated Zone in the route.
             */
            zone: object;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for Route(s).
         */
        interface RouteSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any Routes that are assigned to that Device.
             * Providing the Groups will search for Routes for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroupsOnly RouteType "Plan" have a Device assigned.
             */
            deviceSearch: object;
            /**
             * Search for Routes that were active at this date or after.
             */
            fromDate: string;
            /**
             * Search for Routes with this Name. Wildcard can be used by prepending/appending "%" to string. Example
             * "%comments%".
             */
            name: string;
            /**
             * Search for Routes with this RouteType.
             */
            routeType: string;
            /**
             * Search for ONLY Route Completion (RouteType.Service) routes that are members of these GroupSearch(s) in the Service Group hierarchy.
             * Available GroupSearch options are:
             * Id
             */
            serviceGroups: unknown[];
            /**
             * Search for Routes that were active at this date or before.
             */
            toDate: string;
            /**
             * Filter by the ZoneSearch options. Providing a zone ID will search for any Routes that contain that Zone.
             * Providing Groups will search for Routes that have Zones in that group. Available ZoneSearch options are:
             * IdGroups
             */
            zoneSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A type of Route.
         */
        interface RouteType {
            /**
             * A basic route. Does not have a Device associated.
             */
            basic: string;
            /**
             * A route with a plan of the time/distance it is expected to take from stop to stop. A plan route has a Device associated.
             */
            plan: string;
            /**
             * A route with a plan with completion criteria. A service route has a Device associated.
             */
            service: string;
        }
        /**
         * A rule is the definition of conditions that, when "violated", will generate an ExceptionEvent. The rule's logic is defined by it's tree of Condition (s). It's condition tree will be evaluated against data for device(s) that are members of the rule's assigned group(s) or the device(s)/driver(s) defined in the rule condition tree. The conditions will be evaluated independently against the assets in the selected groups.
         */
        interface Rule {
            /**
             * Start date of the Rule's notification activity period.The events with earlier date than this date will not be reported through the notification engine.
             */
            activeFrom: string;
            /**
             * End date of the Rule's notification activity period.
             */
            activeTo: string;
            /**
             * The ExceptionRuleBaseType of the rule; either Custom, Stock or ZoneStop.
             */
            baseType: string;
            /**
             * The Color associated with this rule.
             * Used when rendering ExceptionEvent(s) related to this rule. Color is defined by the parameters "Red", "Green" and "Blue".
             */
            color: object;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The hierarchical tree of Condition(s) defining
             * the logic of a rule. A rule should have one or more conditions in it's tree.
             */
            condition: object;
            /**
             * A list of Group(s) assigned to the rule. Device in these groups
             * will have the rule evaluated against their data.Device conditions will override devices in the assigned groups.
             */
            groups: unknown[];
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The object used to specify the arguments when searching for a Rule.
         */
        interface RuleSearch {
            /**
             * Search for Rules that are this
             * ExceptionRuleBaseType; either Custom, Stock, or ZoneStop.
             */
            baseType: string;
            /**
             * Search for Rules that are in this
             * ExceptionRuleCategory; either ApplicationExceptionRule, UserExceptionRules or ZoneStopExceptionRules.
             */
            category: string;
            /**
             * Search for Rules that are members of these GroupSearch(s) one of
             * it's children or one of it's parents.
             * Available GroupSearch options are:.
             * Id
             */
            groups: unknown[];
            /**
             * Search for a Rule with this
             * Id.Id cannot be used with any other search properties.
             */
            id: string;
            /**
             * Search for Rules with this Name. Wildcard can be used by prepending/appending "%" to string. Example
             * "%comments%".
             */
            name: string;
        }
        /**
         * Search that implements IEntity for search objects.
         */
        interface Search {
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Represents a Group with SecurityFilter(s) that are used to determine security access to different parts of the application.
         * To get all SecurityClearance(s), call the Get method with typeName Group and a GroupSearch with the Id property set to KnownId GroupSecurityId.
         */
        interface SecurityClearance {
            /**
             * The SecurityFilter(s) either adds or removes a particular SecurityIdentifier to a user's set of allowed items.
             */
            securityFilters: unknown[];
            /**
             * The Children of this group. A list of Group(s).
             */
            children: unknown[];
            /**
             * The Color used to render assets belonging to this group. Default [Blue].
             */
            color: object;
            /**
             * The free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comments: string;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The parent Group of the selected group.
             * Not defined in the group object, the relationship is assumed by which group has this group as a child.
             */
            parent: object;
            /**
             * The string reference to add to the database entry for this group. Maximum length [255] Default [""].
             */
            reference: string;
        }
        /**
         * Represents an item that either Adds or Removes a particular SecurityIdentifier to a user's set of allowed items.
         */
        interface SecurityFilter {
            /**
             * A value indicating whether this feature is Added or Removed.
             * Please note this property is evaluated in
             * the context of the SecurityFilter(s) available to the parent SecurityClearance.
             */
            isAdd: boolean;
            /**
             * The identifier that provides a security identity for control of access.  See SecurityIdentifier.
             */
            securityIdentifier: string;
        }
        /**
         * The list of identifiers that gives a security identity to something whose access can be controlled.
         */
        interface SecurityIdentifier {
            /**
             * Allow viewing the about checkmate page.
             */
            aboutCheckmate: string;
            /**
             * Allow user to view and edit accelerometer stock rules and device settings.
             */
            accelerometerDataClearance: string;
            /**
             * Access to AccidentDebugReport.
             */
            accidentDebugReport: string;
            /**
             * Allow access to create or download accident keys.
             */
            accidentWizard: string;
            /**
             * Allow user to view turn on/off Active tracking feature
             */
            activeTrackingClearance: string;
            /**
             * Allow user to Administer Direct Customer Installation Services
             */
            administerDirectCustomerInstallationServices: string;
            /**
             * Allow user to Administer Direct Customer Order Management
             */
            administerDirectCustomerOrderManagement: string;
            /**
             * Allow user to Administer the Direct Customer Ordering module
             */
            administerDirectCustomerOrdering: string;
            /**
             * Allow user to administer live map.
             */
            administerLiveMap: string;
            /**
             * Allow user to add, set and delete custom properties.
             */
            administerProperty: string;
            /**
             * Allow user to add, set and delete custom property sets.
             */
            administerPropertySet: string;
            /**
             * Allow user to view the wifi settings tab and view/modify the wifi hotspot SSID and password.
             */
            administerWiFiHotspotSettings: string;
            /**
             * Access to AuditLog.
             */
            auditLog: string;
            /**
             * Allow user to view auxiliary settings.
             */
            auxiliaryClearance: string;
            /**
             * Access to BEV Range Capability Report.
             */
            bEVRangeCapabilityReport: string;
            /**
             * Access to certify DVIR.
             */
            certifyDVIR: string;
            /**
             * Access to ChangePassword.
             */
            changePassword: string;
            /**
             * Access to CongregationReport.
             */
            congregationReport: string;
            /**
             * Allow user to view turn on/off Continuous Connect feature
             */
            continuousConnectClearance: string;
            /**
             * Access to CreateExtractKey.
             */
            createExtractKey: string;
            /**
             * Access to CreateFirmwareKey.
             */
            createFirmwareKey: string;
            /**
             * Access to CreateKeyBackup.
             */
            createKeyBackup: string;
            /**
             * Access to CreateProgrammingKey.
             */
            createProgrammingKey: string;
            /**
             * Allow user to create shareable link.
             */
            createShareableLink: string;
            /**
             * Access to CreateTestKey.
             */
            createTestKey: string;
            /**
             * Access to CreateWifiKey.
             */
            createWifiKey: string;
            /**
             * Access to CustomerVisitsReport.
             */
            customerVisitsReport: string;
            /**
             * Allow deleting GPS Text Message.
             */
            deleteGpsTextMessage: string;
            /**
             * Allow user to delete shareable link.
             */
            deleteShareableLink: string;
            /**
             * Access to DeviceAdmin.
             */
            deviceAdmin: string;
            /**
             * Allow user to see advanced device settings.
             */
            deviceAdminAdvanced: string;
            /**
             * Access to removing vehicle, unpluging device, and replacing device.
             */
            deviceAdminDeleteUnplugReplace: string;
            /**
             * Allow use to configure driver feedback settings.
             */
            deviceAdminDriverFeedback: string;
            /**
             * Allow user to view device current status link.
             */
            deviceCurrentStatusClearance: string;
            /**
             * Access to DeviceInstallHistoryReport.
             */
            deviceInstallHistoryReport: string;
            /**
             * Access to Device List.
             */
            deviceList: string;
            /**
             * Allow user to view and edit DirectSupport tickets
             */
            directSupportAdmin: string;
            /**
             * Allow user to dismiss faults
             */
            dismissFaults: string;
            /**
             * Display devices on a map.
             */
            displayMap: string;
            /**
             * Allow user to view driver identification (keys).
             */
            driverIdentificationClearance: string;
            /**
             * Access to EV Battery Health Report.
             */
            eVBatteryHealthReport: string;
            /**
             * Allow user to view and edit RestrictedDataMode Change Data.
             */
            editDeviceDataPrivacyChangeData: string;
            /**
             * Allow user to edit the odometer reading associated with the device.
             */
            editDeviceOdometer: string;
            /**
             * Access to edit deviceShare.
             */
            editDeviceShare: string;
            /**
             * Allow user to edit a distribution list.
             */
            editDistributionList: string;
            /**
             * Allow user to edit an exception rule using the wizard.
             */
            editException: string;
            /**
             * Allow changing exception email templates.
             */
            editNotificationEmailTemplate: string;
            /**
             * Allow user to edit OSM road speeds.
             */
            editRoadSpeeds: string;
            /**
             * Allow user to edit stock rules
             */
            editStockRules: string;
            /**
             * Allow user to view and edit TripType Change Data.
             */
            editTripTypeChangeData: string;
            /**
             * Allow user to view and edit the UserDeviceLink.
             */
            editUserDeviceLink: string;
            /**
             * Access to EngineDiagnosticList.
             */
            engineDiagnosticList: string;
            /**
             * Access to EngineFailureModeList.
             */
            engineFailureModeList: string;
            /**
             * Access to EngineFlashCodelist.
             */
            engineFlashCodelist: string;
            /**
             * Access to EngineManagementReport.
             */
            engineManagementReport: string;
            /**
             * Allow user to view and edit engine status stock rules.
             */
            engineStatusDataClearance: string;
            /**
             * Access to EngineStatusDataGraph.
             */
            engineStatusDataGraph: string;
            /**
             * Access to EngineTypeList.
             */
            engineTypeList: string;
            /**
             * Access to EngineUnitOfMeasureList.
             */
            engineUnitOfMeasureList: string;
            /**
             * Access to EventOccurrenceList.
             */
            eventOccurrenceList: string;
            /**
             * Access to Everything.
             */
            everything: string;
            /**
             * Allows user to add comments or attachments to an ExceptionEvent that they are a driver of.
             */
            exceptionEventReviewParticipant: string;
            /**
             * Allows user to add comments or attachments to any ExceptionEvent in their scope.
             */
            exceptionEventReviewer: string;
            /**
             * Access to ExceptionsList.
             */
            exceptionsList: string;
            /**
             * Access to ExceptionsReport.
             */
            exceptionsReport: string;
            /**
             * Access to ExportFromOtherDatabase.
             */
            exportFromOtherDatabase: string;
            /**
             * Allow user to view feature preview switcher.
             */
            featurePreviewClearance: string;
            /**
             * Allow access to the Fuel Tax Report.
             */
            fuelTax: string;
            /**
             * Access to FuelTransactionAdmin.
             */
            fuelTransactionAdmin: string;
            /**
             * Access to FuelTransactionList.
             */
            fuelTransactionList: string;
            /**
             * Access to Fuel Usage Report.
             */
            fuelUsageReport: string;
            /**
             * Allow user to view GoTalk settings and version.
             */
            goTalkClearance: string;
            /**
             * Allowed to Ignore HOS logs.
             */
            ignoreHOSLogs: string;
            /**
             * Allow impersonating GPS Text Message.
             */
            impersonateGpsTextMessage: string;
            /**
             * Access to ImportFromOtherDatabase.
             */
            importFromOtherDatabase: string;
            /**
             * Access to ImportZones.
             */
            importZones: string;
            /**
             * Access to inspect DVIR.
             */
            inspectDVIR: string;
            /**
             * Allow access to Install records.
             */
            installRecord: string;
            /**
             * Access to KeyInformation.
             */
            keyInformation: string;
            /**
             * Access to PerformanceReport (DEPRECATED)
             */
            launchAddIn: string;
            /**
             * Allow user to add, edit, or remove AddInData objects.
             */
            manageAddInData: string;
            /**
             * Allow user to view and edit addins.
             */
            manageAddinsClearance: string;
            /**
             * Allow user to add, set or remove binary data files.
             */
            manageBinaryDataFiles: string;
            /**
             * Allow user to manage certificates.
             */
            manageCertificates: string;
            /**
             * Allow user to edit DVIR logs.
             */
            manageDVIRLogs: string;
            /**
             * Allow user to edit device groups.
             */
            manageDriverActivityGroup: string;
            /**
             * Allow user to edit HOS driver logs.
             */
            manageHOSLogs: string;
            /**
             * Allow user to add, set or remove media files.
             */
            manageMedia: string;
            /**
             * Allow access to managing report templates.
             */
            manageReportTemplates: string;
            /**
             * All user to add/remove existing shipments
             */
            manageShipments: string;
            /**
             * Allow user to manage tachograph company cards
             */
            manageTachographCompanyCards: string;
            /**
             * Allow user to Manage Tachograph Inspection.
             */
            manageTachographInspection: string;
            /**
             * All user to add/edit/remove trailers.
             */
            manageTrailers: string;
            /**
             * Allows editing TripAnnotations.
             */
            manageTripAnnotation: string;
            /**
             * Allow user to manage user display profiles
             */
            manageUserDisplayProfiles: string;
            /**
             * Access to Material Management report
             */
            materialManagementReport: string;
            /**
             * This is dashboard security. Allow access to dashboard and CustomReportSchedule.
             */
            mileageSummaryDashboard: string;
            /**
             * Allow user to add, set or remove groupFilters.
             */
            modifyGroupFilter: string;
            /**
             * Allow user to view news notifications switcher.
             */
            newsNotificationsClearance: string;
            /**
             * Access to NodesList.
             */
            nodesList: string;
            /**
             * Access to NotificationList.
             */
            notificationList: string;
            /**
             * Access to OrganizeViews.
             */
            organizeViews: string;
            /**
             * Allow user to view product guide.
             */
            productGuideClearance: string;
            /**
             * Allow user to purchase paid items on the Marketplace.
             */
            purchaseMarketplacePaidItems: string;
            /**
             * Access to PurgeData.
             */
            purgeData: string;
            /**
             * Access to ReminderReport.
             */
            reminderReport: string;
            /**
             * Access to ReminderRuleList.
             */
            reminderRuleList: string;
            /**
             * Access to repair DVIR.
             */
            repairDVIR: string;
            /**
             * Access to ReprocessData.
             */
            reprocessData: string;
            /**
             * Allow user to reprocess route based material management rules
             */
            reprocessRouteBasedMaterialManagementRules: string;
            /**
             * Requests the current GPS location from a GO device. Typical implementation is for Iridium network.
             */
            requestDeviceLocation: string;
            /**
             * Allow user to view reseller data.
             */
            resellerControlClearance: string;
            /**
             * Allow user to reset other users' passwords.
             */
            resetPassword: string;
            /**
             * Access to RestoreKeyBackup.
             */
            restoreKeyBackup: string;
            /**
             * Access to RiskManagementReport.
             */
            riskManagementReport: string;
            /**
             * Allow user to run Route Comparison Report.
             */
            routeComparisonReport: string;
            /**
             * Access to Route Completion report.
             */
            routeCompletionReport: string;
            /**
             * Access to RouteList.
             */
            routeList: string;
            /**
             * Access to RouteSummaryReport.
             */
            routeSummaryReport: string;
            /**
             * Access to SecurityClearanceList.
             */
            securityClearanceList: string;
            /**
             * Allow user to send cold chain commands
             */
            sendColdChainCommand: string;
            /**
             * Allow external relay instruction to be send to the vehicle.
             */
            sendExternalRelayInstruction: string;
            /**
             * Allow sending GPS Text Message, Routes and Addresses.
             */
            sendGpsTextMessage: string;
            /**
             * Allow user to view device service plans.
             */
            servicePlansClearance: string;
            /**
             * The "Services" settings tab.
             */
            servicesSettings: string;
            /**
             * Allow user to Skip a Maintenance Reminder.
             */
            skipReminder: string;
            /**
             * Allow user to Snooze a Maintenance Reminder.
             */
            snoozeReminder: string;
            /**
             * Access to SpeedProfileReport.
             */
            speedProfileReport: string;
            /**
             * Allow starting full version of MyGeotab from a web page.
             */
            startFullVersion: string;
            /**
             * Allow user to view and edit status groups.
             */
            statusGroupsClearance: string;
            /**
             * Access to SystemSettings.
             */
            systemSettings: string;
            /**
             * Allow user to download and upload tachograph files
             */
            tachographDownloadAndUploadFiles: string;
            /**
             * Access to TimeCardReport.
             */
            timeCardReport: string;
            /**
             * Access to TripsActivityReport.
             */
            tripsActivityReport: string;
            /**
             * Access to UnassignedRouteReport.
             */
            unassignedRouteReport: string;
            /**
             * Administer Users/Drivers.
             */
            userAdmin: string;
            /**
             * Access to User/Driver List.
             */
            userList: string;
            /**
             * Access to UserSettings.
             */
            userSettings: string;
            /**
             * Access to Active Insights
             */
            viewActiveInsights: string;
            /**
             * Allow user to view AddInData objects.
             */
            viewAddInData: string;
            /**
             * Allow user to view the advanced help items.
             */
            viewAdvancedHelp: string;
            /**
             * Access to analytics lab experiments
             */
            viewAnalyticsLab: string;
            /**
             * Allow user to view BinaryData.
             */
            viewBinaryData: string;
            /**
             * Allow user to view binary data files.
             */
            viewBinaryDataFiles: string;
            /**
             * Allow user to view Business Intelligence data (Fleet Industry Trends and etc.)
             */
            viewBusinessIntelligence: string;
            /**
             * Allow user to view certificates.
             */
            viewCertificates: string;
            /**
             * Allow user to view DVIR logs.
             */
            viewDVIRLogs: string;
            /**
             * Allow user to view RestrictedDataMode Change Data.
             */
            viewDeviceDataPrivacyChangeData: string;
            /**
             * Access to view deviceShare.
             */
            viewDeviceShare: string;
            /**
             * Allow user to View Direct Customer Order Management
             */
            viewDirectCustomerOrderManagement: string;
            /**
             * Allow user to View Direct Customer Vin Lookup
             */
            viewDirectCustomerVinLookup: string;
            /**
             * Allow viewing sent and received GPS Text Messages.
             */
            viewGpsTextMessage: string;
            /**
             * Allow user to add, set or remove groupFilters.
             */
            viewGroupFilter: string;
            /**
             * Allow user only to view groups.
             */
            viewGroups: string;
            /**
             * Allow user to view HOS driver logs.
             */
            viewHOSLogs: string;
            /**
             * Allow user to view live map.
             */
            viewLiveMap: string;
            /**
             * Allow user to View Maintenance Center
             */
            viewMaintenanceCenter: string;
            /**
             * Allow user to see paid Marketplace items.
             */
            viewMarketplacePaidItems: string;
            /**
             * Allow user to view media files.
             */
            viewMedia: string;
            /**
             * Allow user to view custom properties.
             */
            viewProperty: string;
            /**
             * Allow user to view custom property sets.
             */
            viewPropertySet: string;
            /**
             * Allow viewing data using report template.
             */
            viewReportTemplate: string;
            /**
             * Allow user view routes
             */
            viewRoute: string;
            /**
             * Allow user to View Safety Center
             */
            viewSafetyCenter: string;
            /**
             * Access to shareable link.
             */
            viewShareableLink: string;
            /**
             * Allow user to view device location.
             */
            viewSharedDevice: string;
            /**
             * Allow user to view shipments
             */
            viewShipments: string;
            /**
             * Allow user to view tachograph company cards
             */
            viewTachographCompanyCards: string;
            /**
             * Allow user to view driving time data
             */
            viewTachographDrivingTimeData: string;
            /**
             * Allow user to view infringement data
             */
            viewTachographInfringementData: string;
            /**
             * Allow user to View Tachograph Inspection.
             */
            viewTachographInspection: string;
            /**
             * Access remote download data
             */
            viewTachographRemoteDownloadData: string;
            /**
             * Allow user to view existing trailers.
             */
            viewTrailers: string;
            /**
             * Allows viewing TripAnnotations.
             */
            viewTripAnnotation: string;
            /**
             * Allow user to view TripType Change Data.
             */
            viewTripTypeChangeData: string;
            /**
             * Allow user to view the UserDeviceLink.
             */
            viewUserDeviceLink: string;
            /**
             * Allow user to view vehicle identification number on active insights page
             */
            viewVinOnActiveInsights: string;
            /**
             * Allow user  to view the wifi hotspot SSID and password.
             */
            viewWiFiHotspotSettings: string;
            /**
             * Access to WorkHolidayList.
             * This is for modifying work hours and holidays.
             */
            workHolidayList: string;
            /**
             * Access to WorkTimeList.
             * This is for Viewing work hours and work holidays.
             */
            workTimeList: string;
            /**
             * Access to ZoneAdmin.
             */
            zoneAdmin: string;
            /**
             * Access to ZoneList.
             */
            zoneList: string;
            /**
             * Access to List of ZoneType's.
             */
            zoneTypeList: string;
        }
        /**
         * The contents of a TextMessage containing data to give to a third-party IOX Add-On over an RS232.
         * The SerialIoxContent is a 'dumb pipe' type of message. Whatever data is put in the data property will be delivered, as is, to the system on the other end of the IOX-RS232.
         */
        interface SerialIoxContent {
            /**
             * The channel the IoxAddOn is communicating over. 0 means the Add-On is not attached.
             */
            channel: number;
            /**
             * The data to send to the IoxAddOn. Up to 249 bytes can be sent.
             */
            data: string;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * A ShipmentLog is a record of shipment transported by a specified vehicle for a duration of time.
         */
        interface ShipmentLog {
            /**
             * The date the shipment was started. Default [UtcNow].
             */
            activeFrom: string;
            /**
             * The date the shipment was ended. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The commodity shipped. Maximum length [255] Default [""].
             */
            commodity: string;
            /**
             * The date and time the log was created.
             */
            dateTime: string;
            /**
             * The Device associated with this log.
             */
            device: object;
            /**
             * The identifier of the shipment document. Default [""].
             */
            documentNumber: string;
            /**
             * The User who created this log.
             */
            driver: object;
            /**
             * The name of the shipper. Default [""].
             */
            shipperName: string;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for ShipmentLog(s).
         */
        interface ShipmentLogSearch {
            /**
             * Search for ShipmentLogs with this commodity. Wildcard can be used by prepending/appending "%" to string.
             */
            commodity: string;
            /**
             * Search for ShipmentLogs for this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for ShipmentLogs with this document number. Wildcard can be used by prepending/appending "%" to string.
             */
            documentNumber: string;
            /**
             * Search for ShipmentLogs that were active at this date or after. Set to UTC now to search for
             * only currently active ShipmentLogs.
             */
            fromDate: string;
            /**
             * Search for entities that contain specific keywords in all wildcard string-searchable fields.
             */
            keywords: unknown[];
            /**
             * Search for ShipmentLogs with this shipper name. Wildcard can be used by prepending/appending "%" to string.
             */
            shipperName: string;
            /**
             * Search for ShipmentLogs that were active at this date or before.
             */
            toDate: string;
            /**
             * Search for ShipmentLogs with this UserSearch Id.
             * Available UserSearch options are:.
             * Id
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The source is the underlying producer of the engine data.
         */
        interface Source {
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
        }
        /**
         * The object used to specify the arguments when searching for a Source.
         */
        interface SourceSearch {
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The status of an uploaded file.
         */
        interface Status {
            /**
             * Media file has not been uploaded.
             */
            noFile: string;
            /**
             * The file is being processed.
             */
            processing: string;
            /**
             * The file is ready.
             */
            ready: string;
            /**
             * The status is unknown.
             */
            unknown: string;
        }
        /**
         * A record that represents an engine status record from the engine system of the specific Device.
         */
        interface StatusData {
            /**
             * The recorded value of the diagnostic parameter.
             */
            data: object;
            /**
             * The date and time of the logged event.
             */
            dateTime: string;
            /**
             * The StatusData for the Device specified.
             */
            device: object;
            /**
             * The Diagnostic for the Device specified.
             */
            diagnostic: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for StatusData.
         * When searching for status data including DeviceSearch and DiagnosticSearch the system will return all records that match the search criteria and interpolate the value at the provided from/to dates when there is no record that corresponds to the date. Interpolated records are dynamically created when the request is made and can be identified as not having the ID property populated. Records with an ID are stored in the database.
         * This search has been designed to work efficiently with these combinations of parameters:
         * Id
         * DeviceSearch + DiagnosticSearch + FromDate and/or ToDate
         */
        interface StatusDataSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any  StatusData recorded for that Device.
             * Providing the Groups will search for StatusData recorded for Devices in that group.
             * Available DeviceSearch options are:
             * IdGroup
             */
            deviceSearch: object;
            /**
             * Search for StatusData with this DiagnosticSearch Id.
             * Available DiagnosticSearch options are:
             * Id
             */
            diagnosticSearch: object;
            /**
             * Search for StatusData records that were logged at this date or after.
             */
            fromDate: string;
            /**
             * Search for StatusData records that were logged at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A single step in a sequence of step-by-step instructions to complete Leg of Directions.
         */
        interface Step {
            /**
             * The distance estimate in kilometers for this step.
             */
            distance: number;
            /**
             * The travel time duration estimate for this step.
             */
            duration: string;
            /**
             * The instructions for this step.
             */
            instructions: string;
            /**
             * The ordered sequence of this step.
             */
            sequence: number;
        }
        /**
         * The object used to specify the arguments when searching for TachographDataFile.
         */
        interface TachographDataFileSearch {
            /**
             * Gets or sets filter by the DeviceSearch options.
             * Providing a device ID will search for any file that is assigned to that Device.
             * Providing the Groups will search for files that have Devices in that group.
             * Providing the device IDs will search for files that have Devices in that list.
             * Available DeviceSearch options are:
             * IdGroupDeviceIds
             */
            deviceSearch: object;
            /**
             * Search for file records that were uploaded at this date or after.
             */
            fromUploadDate: string;
            /**
             * The flag to include binary data in the response.
             */
            includeBinaryData: boolean;
            /**
             * Gets or sets search for entities that contain specific keywords into FileName, FileNameDdd, FileNameTgd, FileNameV1B,
             * in case the “type = Driver” it will look into the driver's first name and last name, or when “type = Device” in the license plate.
             * Note: It is currently limited to only one keyword. To use keywords it is necessary to use the “type” filter too.
             */
            keywords: unknown[];
            /**
             * Search for file records that were uploaded at this date or before.
             */
            toUploadDate: string;
            /**
             * Search for file records based on the file type.
             * The available values are:
             * "Driver": To filter by file type Driver."Device": To filter by file type Device.
             */
            type: string;
            /**
             * Gets or sets filter by the UserSearch options.
             * Providing a user ID will search for any file that is assigned to that user.
             * Providing the Groups will search for files that have Users in that group.
             * Providing the user IDs will search for files that have Users in that list, in this case the users will be drivers.
             * Available UserSearch options are:
             * IdGroupUserIds
             */
            userSearch: object;
            /**
             * The row version of the
             * TachographDataFile
             * search criteria.
             */
            version: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * A named tag to provide context to an entity.
         */
        interface Tag {
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching Tag entries.
         */
        interface TagSearch {
            /**
             * Search for Tags with this Name. Wildcard can be used by prepending/appending "%" to string.
             * Example "%name%".
             */
            name: string;
            /**
             * Search for tag names. Supports up to 500 names. Does not support wildcards.
             */
            names: unknown[];
            /**
             * Search for Tag with given Tag Ids. Supports up to 500 Ids.
             */
            tagIds: unknown[];
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The contents of a GPS Text Message. See also:.
         * CannedResponseContent
         * LocationContent
         */
        interface TextContent {
            /**
             * Contains the message text.
             */
            message: string;
            /**
             * A value indicating whether set to true this message is sent to display immediately on the Garmin device.
             * This value has no effect on messages sent from the Garmin device.
             */
            urgent: object;
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * A message to send or received from a device.
         * When working with text messages it is important to make the distinction between a "Reply" and a "Response".
         * Reply: A reply is a Text Message that is a Reply to another text message. For example: A text message is sent to a device and the device replies with a text message of it's own.
         * Response: A response is a predefined ("canned") response within a text message. For example: A text message is sent to a device with a number of canned responses to reply with (Yes, No, Maybe). One of those responses is selected by the driver and is the message of the Reply from the device.
         */
        interface TextMessage {
            /**
             * The date and time the text message is active from.
             */
            activeFrom: string;
            /**
             * The date and time the text message is active to.
             */
            activeTo: string;
            /**
             * The date and time the message was delivered. Default [MaxDate].
             */
            delivered: string;
            /**
             * The Device the message was sent to. Default [Null].
             */
            device: object;
            /**
             * If message is going to or from vehicle.
             */
            isDirectionToVehicle: boolean;
            /**
             * The User who read the message or null if the message has not been read.
             */
            markedReadBy: object;
            /**
             * The message content. A basic message can be sent via a TextContent or a message with predefined ("canned") responses by a CannedResponseContent or a series of LocationContent comprising a route.
             */
            messageContent: object;
            /**
             * The text message that this is the reply to. Only a reply message will have a parent.
             */
            parentMessage: object;
            /**
             * The date and time the message was read or null if the message has not been read.
             */
            read: string;
            /**
             * The User the message was sent to. Default [Null].
             */
            recipient: object;
            /**
             * The text message reply to this message. A text message should only have one reply. (Should not reply to a reply). Default [Null]
             */
            replyMessage: object;
            /**
             * The date and time the message was sent. Default [MaxDate].
             */
            sent: string;
            /**
             * The User that the message was sent from or null. If the message was sent from a device or was generated by the system the user property will be null. Default [Null].
             */
            user: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The type of the text message content.
         */
        interface TextMessageContentType {
            /**
             * The type of message. See MessageContentType.
             */
            contentType: string;
        }
        /**
         * The object used to specify the arguments when searching for a TextMessage.
         */
        interface TextMessageSearch {
            /**
             * Search for TextMessages filtered based on channel numbers assigned.
             * MessageContentTypes that support setting the channelNumber:
             * MimeContentSerialIoxContentColdChainFaultClearContentColdChainSetpointSetContent
             */
            channelNumbers: unknown[];
            /**
             * Search for TextMessages filtered based on the MessageContentType.
             */
            contentTypes: string;
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any TextMessages that are assigned to that Device.
             * Providing the Groups will search for TextMessages for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for delivered or undelivered TextMessages. If it's set to true, it will return all TextMessages
             * that were delivered. If it set to false, it will return all TextMessages that were not delivered. If it is set to
             * null, it will return both delivered and undelivered TextMessages.
             */
            isDelivered: boolean;
            /**
             * Search for TextMessages based on the "direction" of the message. If it's set to true, it will return all TextMessages
             * that were sent to a Device. If it set to false, it will return all TextMessages that
             * were not sent to a Device. If it is set to null, it will return TextMessages sent to or from any asset type.
             */
            isDirectionToVehicle: boolean;
            /**
             * Search for read or unread TextMessages. If it's set to true, it will return all TextMessages
             * that were read. If it set to false, it will return all TextMessages that were not unread. If it is set to
             * null, it will return both read and unread TextMessages.
             */
            isRead: boolean;
            /**
             * A value indicating whether when LatestMessageOnly is set to True; only a single most recent message that matches the search parameters
             * will be returned per device (using the date sent time to determine most recent).
             */
            latestMessageOnly: boolean;
            /**
             * Search for TextMessages filtered based on the messages MIME type.
             * MimeTypes search is available for MimeContent only.
             */
            mimeTypes: unknown[];
            /**
             * Search for TextMessages that were delivered/sent/read since this date.
             */
            modifiedSinceDate: string;
            /**
             * Search for TextMessages that have parent id as this Id.
             */
            parentMessageId: string;
            /**
             * Search for TextMessages sent to this UserSearch.
             * Available UserSearch options are:
             * IdCompanyGroupsDriverGroupsDriverGroupFilterCondition
             */
            recipientSearch: object;
            /**
             * Search for TextMessages that were sent at this date or before.
             */
            toDate: string;
            /**
             * Search for TextMessages sent by this UserSearch.
             * Available UserSearch options are:
             * IdCompanyGroupsDriverGroupsDriverGroupFilterCondition
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Information about an Olson Timezone.
         * Check https://www.iana.org/time-zones -> Data Only Distribution (ctrl+f for geographic capitals) for Olson zone name
         */
        interface TimeZoneInfo {
            /**
             * The Olson Timezone identifier.
             */
            id: string;
            /**
             * A value indicating whether the Timezone supports daylight saving time.
             */
            isDaylightSavingTimeSupported: boolean;
            /**
             * The offset of the Timezone from UTC.
             */
            offsetFromUtc: string;
        }
        /**
         * Adjustment rule for timezones.
         */
        interface TimeZoneInfoAdjustmentRule {
            /**
             * The date end.
             */
            dateEnd: object;
            /**
             * The date start.
             */
            dateStart: object;
            /**
             * The daylight delta.
             */
            daylightDelta: string;
            /**
             * The daylight transition end.
             */
            daylightTransitionEnd: object;
            /**
             * The daylight transition start.
             */
            daylightTransitionStart: object;
        }
        /**
         * Timezone info with its day light saving rules.
         */
        interface TimeZoneInfoWithRules {
            /**
             * Daylight saving Adjustment rules.
             */
            adjustmentRules: object;
            /**
             * The Timezone identifier.
             * This is the timeZoneId that was requested.
             * Important because there are many timeZoneId that fall under a single TimeZoneInfo.id.
             */
            timeZoneId: string;
            /**
             * TimeZoneInfo.
             */
            timeZoneInfo: object;
        }
        /**
         * A trailer which can be attached and detached from a vehicle with a TrailerAttachment record.
         */
        interface Trailer {
            /**
             * Free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * The list of trailer groups.
             */
            groups: unknown[];
            /**
             * The unique Id of the trailer.
             */
            id: string;
            /**
             * The name of the trailer. Maximum length [255].
             */
            name: string;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * A TrailerAttachment is a record of the attachment of a Trailer to a Device over a period of time.
         */
        interface TrailerAttachment {
            /**
             * The date and time the Trailer was attached. Default [UtcNow].
             */
            activeFrom: string;
            /**
             * The date and time the Trailer was detached. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The Device which the Trailer is associated with.
             */
            device: object;
            /**
             * The attached Trailer.
             */
            trailer: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for TrailerAttachment record(s).
         */
        interface TrailerAttachmentSearch {
            /**
             * Search for TrailerAttachments that were active at this date or after. Set to UTC now to search for
             * only currently active TrailerAttachments.
             */
            activeFrom: string;
            /**
             * Search for TrailerAttachments that were active at this date or before.
             */
            activeTo: string;
            /**
             * Search for TrailerAttachments attached to this DeviceSearch Id. Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for TrailerAttachments with this TrailerSearch Id. Available TrailerSearch options are:.
             * Id
             */
            trailerSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for Trailer(s).
         */
        interface TrailerSearch {
            /**
             * Search for Trailers that are members of these GroupSearch(s) one of
             * it's children or
             * one of it's parents. Available GroupSearch options are:.
             * Id
             */
            groups: unknown[];
            /**
             * Search for Trailers with a name containing this String. Wildcard can be used by prepending/appending "%" to string.
             */
            name: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * This is a vehicles trip and a summary of the driving activity during that trip. To get more information about stops during a trip please see ExceptionEvent. A complete "trip" is defined as starting at the time in which the vehicle starts and begins being driven. The trip continues after the vehicle has been stopped and ends at the time the vehicle restarts and begins being driven again; which then starts the next trip.
         */
        interface Trip {
            /**
             * The distance the vehicle was driven after work hours (in km).
             */
            afterHoursDistance: number;
            /**
             * The duration the vehicle was driven after work hours.
             */
            afterHoursDrivingDuration: string;
            /**
             * Whether the trip ends after hours.
             */
            afterHoursEnd: boolean;
            /**
             * Whether the trip starts after hours.
             */
            afterHoursStart: boolean;
            /**
             * The duration the vehicle was stopped after work hours.
             */
            afterHoursStopDuration: string;
            /**
             * The average speed in km/h. This only includes the average speed while driving.
             */
            averageSpeed: number;
            /**
             * The Device associated with the trip.
             */
            device: object;
            /**
             * The distance the vehicle was driven during this trip (in km).
             */
            distance: number;
            /**
             * The Driver for the trip.
             */
            driver: object;
            /**
             * The duration between the start and stop of the trip.
             */
            drivingDuration: string;
            /**
             * Total end of trip idling (idling is defined as speed is 0 and ignition on). It is calculated
             * from the beginning of this trip to beginning of next trip.
             */
            idlingDuration: string;
            /**
             * The maximum speed of the vehicle during this trip (in km/h).
             */
            maximumSpeed: number;
            /**
             * The start date of the next trip, as well as the end of the current trip session.
             */
            nextTripStart: string;
            /**
             * The number of incidents where the vehicle reached the first range of speeding triggers.
             */
            speedRange1: number;
            /**
             * The duration where the vehicle drove in the first range of speeding triggers.
             */
            speedRange1Duration: string;
            /**
             * The number of incidents where the vehicle reached the second range of speeding triggers.
             */
            speedRange2: number;
            /**
             * The duration where the vehicle drove in the second range of speeding triggers.
             */
            speedRange2Duration: string;
            /**
             * The number of incidents where the vehicle reached the third range of speeding triggers.
             */
            speedRange3: number;
            /**
             * The duration where the vehicle drove in the third range of speeding triggers.
             */
            speedRange3Duration: string;
            /**
             * The date and time that the drive session started. This also signals the start of the trip.
             */
            start: string;
            /**
             * The date and time the trip drive session ended, and the vehicle stopped moving. Note that this doesn't correspond to end of the trip session.
             */
            stop: string;
            /**
             * The duration the vehicle was stopped at the end of the trip. This also includes any idling done at the end of a trip.
             */
            stopDuration: string;
            /**
             * The Coordinate associated with this Trip's stop.
             */
            stopPoint: object;
            /**
             * The distance the vehicle was driven during work hours.
             */
            workDistance: number;
            /**
             * The duration the vehicle was driven during work hours.
             */
            workDrivingDuration: string;
            /**
             * The duration the vehicle was stopped during work hours.
             */
            workStopDuration: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for Trip(s).
         * This search has been designed to work efficiently with these combinations of parameters:
         * Id
         * DeviceSearch + FromDate and/or ToDate (+ IncludeOverlappedTrips)
         * UserSearch + FromDate and/or ToDate (+ IncludeOverlappedTrips)
         */
        interface TripSearch {
            /**
             * Search for Trips with this DeviceSearch Id.
             * Available DeviceSearch options are:.
             * Id
             */
            deviceSearch: object;
            /**
             * Search for Trips recorded at this date or after. When "IncludeOverlappedTrips" is set to True, search for Trips
             * where the NextTripStartTime is at this date, after or NULL.
             */
            fromDate: string;
            /**
             * A value indicating whether when OverlappedTrips is set to True; any part of a trip that overlaps with the FromDate or ToDate boundary
             * will have the entire trip included in the data.
             */
            includeOverlappedTrips: boolean;
            /**
             * Search rectangular area for Trips; the trips being retrieved must be located in this area.
             * The BoundingBox object should contain the bottom left and top right coordinates of the searching rectangle.
             */
            searchArea: object;
            /**
             * Search for Trips recorded at this date or before. When "IncludeOverlappedTrips" is set to True, search for Trips
             * where the StartDateTime is this date or before.
             */
            toDate: string;
            /**
             * Search for Trips with this UserSearch Id.
             * Available UserSearch options are:.
             * Id
             */
            userSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Describes the unit of measure (UOM) for engine data logs. In the case where no unit of measure is available; this is represented by "UnitOfMeasureNoneId".
         */
        interface UnitOfMeasure {
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for a UnitOfMeasure.
         */
        interface UnitOfMeasureSearch {
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * An untracked asset that is used in MyGeotab without a serial number. This is used for extensibility and is based on the Device object.
         */
        interface UntrackedAsset {
            /**
             * The offset to be applied engine hours data reported by the engine computer. Default [0].
             */
            engineHourOffset: number;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * A value used to correct the odometer value received from the engine. Default [1].
             */
            odometerFactor: number;
            /**
             * The offset to be applied odometer reported by the engine computer. Default [0].
             */
            odometerOffset: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * The date the device is active from. Default [MinDate].
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * A user of the system. A user can be a MyGeotab user or a user that is a Driver.
         */
        interface User {
            /**
             * A value indicating the user accepted MyGeotab EULA revision number. Default [null].
             */
            acceptedEULA: number;
            /**
             * The list of active dashboards for the user, displayed on the dashboard page. Default [empty].
             */
            activeDashboardReports: object;
            /**
             * The list of default dashboards which must show real data. Default [empty].
             */
            activeDefaultDashboards: object;
            /**
             * The date the user is active from. Default [UtcNow].
             */
            activeFrom: string;
            /**
             * The date the user is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The HOS authority address of the user. Default [""].
             */
            authorityAddress: string;
            /**
             * The HOS authority name of the user. Default [""].
             */
            authorityName: string;
            /**
             * List of all available dashboard reports to the user. Default [empty].
             */
            availableDashboardReports: unknown[];
            /**
             * The list of bookmarked pages. Default [empty].
             */
            bookmarks: string;
            /**
             * The user's stored list of custom response options to choose from when sending a TextMessage. Each item is a set of predefined response options. Default [empty].
             */
            cannedResponseOptions: unknown[];
            /**
             * The carrier number. Default [""].
             */
            carrierNumber: string;
            /**
             * A flag indicating whether the user's password requires resetting. If [true], the user will be forced to change their password on next login. Default [false].
             */
            changePassword: boolean;
            /**
             * Free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * The company address for the user. Default [""].
             */
            companyAddress: string;
            /**
             * The list of organization Group(s) that the user belongs to.
             */
            companyGroups: unknown[];
            /**
             * The name of the company for the user. Default [""].
             */
            companyName: string;
            /**
             * The user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html). Maximum length [2] Default [""]
             */
            countryCode: string;
            /**
             * The format dates will be displayed to this user. Default ["MM/dd/yy HH:mm:ss"].
             */
            dateFormat: string;
            /**
             * The default GoogleMapStyle tiles when using Google maps. Default [Roadmap].
             */
            defaultGoogleMapStyle: string;
            /**
             * The default HereMapStyle tiles when using Here Maps. Default [Roadmap].
             */
            defaultHereMapStyle: object;
            /**
             * The default map engine to use for this user. System map engines are:
             * GoogleMapsHereMapMapBox
             * Default ["MapBox"].
             */
            defaultMapEngine: string;
            /**
             * The default OpenStreetMapStyle tiles when using Open Street Maps. Default [MapBox].
             */
            defaultOpenStreetMapStyle: string;
            /**
             * The default start page to view when login is complete. Maps to the hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide].
             */
            defaultPage: string;
            /**
             * The designation or title of the employee. Maximum length [50] Default [""].
             */
            designation: string;
            /**
             * The user's preferred currency for display in the UI.
             */
            displayCurrency: object;
            /**
             * The driver's last viewed guide version. Default [0].
             */
            driveGuideVersion: number;
            /**
             * The user's preferred ElectricEnergyEconomyUnit for viewing fuel economy. Default [LitersEPer100Km].
             */
            electricEnergyEconomyUnit: string;
            /**
             * The employee number or external identifier. Maximum length [50] Default [""].
             */
            employeeNo: string;
            /**
             * A comma-separated string value indicating which features user enabled to preview. Default ["collision_detection_active_insights"].
             */
            featurePreview: string;
            /**
             * The user's preferred day to represent the start of the week. Default ["Sunday"].
             */
            firstDayOfWeek: object;
            /**
             * The first name of the user. Maximum length [255].
             */
            firstName: string;
            /**
             * The user's preferred FuelEconomyUnit for viewing fuel economy. Default [LitersPer100Km].
             */
            fuelEconomyUnit: string;
            /**
             * The HosRuleSet the user follows. Default [None].
             */
            hosRuleSet: string;
            /**
             * The unique identifier for the User. See Id.
             */
            id: string;
            /**
             * A value indicating whether the user is allowed to Adverse Driving conditions exempt. Default [true].
             */
            isAdverseDrivingEnabled: boolean;
            /**
             * The isDriver toggle, if [true] the user is a driver, otherwise [false]. Default [false].
             */
            isDriver: boolean;
            /**
             * A value indicating whether the old EULA has been accepted by the end user. Default [false].
             */
            isEULAAccepted: boolean;
            /**
             * The isEmailReportEnabled toggle, if [true] the user will receive the emailed report, otherwise [false]. Default [true].
             */
            isEmailReportEnabled: boolean;
            /**
             * A value indicating whether the user is allowed to HOS personal conveyance. Default [false].
             */
            isExemptHOSEnabled: boolean;
            /**
             * A value indicating whether labs are enabled for this user. When set to true this will enable experimental features that are still in the process of being developed. Default [false].
             */
            isLabsEnabled: boolean;
            /**
             * Whether the current regional settings is in metric units of measurement (or US/Imperial). Default [true].
             */
            isMetric: boolean;
            /**
             * A value that indicates whether news notifications are enabled for this user. Default [true].
             */
            isNewsEnabled: boolean;
            /**
             * A value indicating whether the user is allowed to HOS personal conveyance. Default [false].
             */
            isPersonalConveyanceEnabled: boolean;
            /**
             * A value indicating whether are service update notifications enabled for this user. Default [false].
             */
            isServiceUpdatesEnabled: boolean;
            /**
             * A value indicating whether the user is allowed to HOS yard move. Default [false].
             */
            isYardMoveEnabled: boolean;
            /**
             * The list of selected job priorities. Default [empty].
             */
            jobPriorities: object;
            /**
             * The user's culture identifier as a predefined CultureInfo name, Name of an existing System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"] for English.
             */
            language: string;
            /**
             * The user's last access date of the system.
             * This value updates once per day, and will not be updated on consecutive logins in the same day.
             */
            lastAccessDate: string;
            /**
             * The last name of the user. Maximum length [255].
             */
            lastName: string;
            /**
             * The list of the of the available MapViews from the live map. Default [continent of the user's selected Timezone].
             */
            mapViews: unknown[];
            /**
             * A value indicating the maximum personal conveyance distance per day in meters. Default [0].
             */
            maxPCDistancePerDay: number;
            /**
             * The list of MediaFile(s) photos of this user.
             * Currently, a user can only be associated with at most one photo.
             */
            mediaFiles: unknown[];
            /**
             * The user's email address / login name. Maximum length [255].
             */
            name: string;
            /**
             * The user's password.
             */
            password: string;
            /**
             * The user phone number with space separated country phone code. Example +1 5555555555. Maximum length [20] Default [""]
             */
            phoneNumber: string;
            /**
             * The user phone number without formatting. Maximum length [5] Default [""]
             */
            phoneNumberExtension: string;
            /**
             * The private Group(s) that the user belongs to.
             */
            privateUserGroups: unknown[];
            /**
             * The report Group(s) for reporting that this user belongs to. The selected reporting groups will allow the user to sort entities that are children of the selected groups. It will not allow them to see entities that are outside of their data access. Default [empty].
             */
            reportGroups: unknown[];
            /**
             * The security Group(s) this user belongs to; which define the user's access.
             */
            securityGroups: unknown[];
            /**
             * A flag indicating whether to show ClickOnce support warning as the default page. (legacy) Default [false].
             */
            showClickOnceWarning: boolean;
            /**
             * The IANA Timezone Id of the user. All data will be displayed in this Timezone. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The UserAuthenticationType. This value indicates the type of a
             * user's account. "BasicAuthentication" indicates a basic user. "MyAdmin" indicates a user with MyAdmin
             * credentials. "MyAdmin" users are not visible to "BasicAuthentication" users. Default [Basic].
             */
            userAuthenticationType: string;
            /**
             * A value indicating the user accepted Wifi specific EULA revision number. Default [0].
             */
            wifiEULA: number;
            /**
             * The default ZoneDisplayMode used on the map. Default [Default].
             */
            zoneDisplayMode: string;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The user authentication type.
         */
        interface UserAuthenticationType {
            /**
             * Basic authentication using username and password.
             */
            basicAuthentication: unknown;
            /**
             * MyAdmin authentication. Typically this is reserved for re-sellers.
             */
            myAdmin: unknown;
            /**
             * SAML authentication.
             */
            sAML: unknown;
        }
        /**
         * The object used to specify the arguments when searching for a User/Driver.
         */
        interface UserSearch {
            /**
             * Search for Users who are associated with these UserAuthenticationTypes.
             */
            authenticationTypes: unknown[];
            /**
             * Search for Users who are a member of this GroupSearch. Available GroupSearch options are:.
             * IdCannot be used with DriverGroups.
             */
            companyGroups: unknown[];
            /**
             * Search for Users who are assigned a Driver Key which is a member of the GroupSearch. Available
             * GroupSearch options are:.
             * IdCannot be used with CompanyGroups.
             */
            driverGroups: unknown[];
            /**
             * Search for a User who is associated with this Driver Employee Number. Wildcard can be used by prepending/appending "%"
             * to string. Example "%EmployeeNumber%".
             * This property is negatable. If the first character of this search property is '!', then the API will know to negate the
             * search logic. (e.g. field = "!EmployeeNumber%", is equivalent to: WHERE NOT LIKE 'EmployeeNumber%')
             */
            employeeNumber: string;
            /**
             * Search for Users with this first name. Wildcard can be used by prepending/appending "%"
             * to string. Example "%firstName%".
             * This property is negatable. If the first character of this search property is '!', then the API will know to negate the
             * search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
             */
            firstName: string;
            /**
             * Search for Users that were active at this date or after. Set to UTC now to search for
             * only currently active (non-archived) users.
             */
            fromDate: string;
            /**
             * Search for Users who are associated with these HosRuleSets.
             */
            hosRuleSets: unknown[];
            /**
             * Search for a User who is associated with this Driver Key Id.
             */
            keyId: string;
            /**
             * Search for entities that contain specific keywords in all wildcard string-searchable fields.
             */
            keywords: unknown[];
            /**
             * For LastLogin search. Must be used with LastLoginComparator.
             * If user's UserAuthenticationType is 'MyAdmin' and LastLoginComparator is 'After', user is returned regardless of LastLogin criteria.
             * If user's UserAuthenticationType is 'MyAdmin' and LastLoginComparator is 'Before', user is not returned regardless of LastLogin criteria.
             */
            lastLogin: object;
            /**
             * For DateTimeComparator for LastLogin search.
             */
            lastLoginComparator: object;
            /**
             * Search for Users with this last name. Wildcard can be used by prepending/appending "%"
             * to string. Example "%lastName%".
             * This property is negatable. If the first character of this search property is '!', then the API will know to negate the
             * search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
             */
            lastName: string;
            /**
             * Search for a User who is associated with this Driver License Number. Wildcard can be used by prepending/appending "%"
             * to string. Example "%LicenseNumber%".
             * This property is negatable. If the first character of this search property is '!', then the API will know to negate the
             * search logic. (e.g. field = "!LicenseNumber%", is equivalent to: WHERE NOT LIKE 'LicenseNumber%')
             */
            licenseNumber: string;
            /**
             * Search for Users with this email/log-on name. Wildcard can be used by prepending/appending "%"
             * to string. Example "%name%".
             * This property is negatable. If the first character of this search property is '!', then the API will know to negate the
             * search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
             */
            name: string;
            /**
             * Search for Users who are assigned to a specific Security Clearance which is a member of the GroupSearch. Available
             * GroupSearch options are:.
             * Id
             */
            securityGroups: unknown[];
            /**
             * Search for a User who is associated with this Driver Serial Number.
             */
            serialNumber: string;
            /**
             * Search for Users that were active at this date or before.
             */
            toDate: string;
            /**
             * Search for Users with these unique Id(s). Not Supported
             * for searching for users, only for TachographDataFile.
             */
            userIds: unknown[];
            /**
             * For UserSearchType search.
             */
            userSearchType: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The type of UserSearchType to search for.
         */
        interface UserSearchType {
            /**
             * UserSearch contains all user types.
             */
            all: number;
            /**
             * UserSearch contains only users that are drivers.
             */
            driver: number;
            /**
             * UserSearch contains only users of the base type.
             */
            onlyUser: number;
        }
        /**
         * VehicleConfiguration parameters entity.
         */
        interface VehicleConfiguration {
            /**
             * The configuration data. (WifiHotspotData)
             */
            configurationData: object;
            /**
             * The Device associated with this VehicleConfiguration.
             */
            device: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for (s).
         */
        interface VehicleConfigurationSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any VehicleConfiguration that are assigned to that Device.
             * Providing the Groups will search for VehicleConfiguration for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Software version information for the server.
         */
        interface VersionInformation {
            /**
             * The ApplicationVersionInformation.
             */
            application: object;
            /**
             * The current version of the MyGeotab databases on the server.
             */
            database: string;
            /**
             * The Text to Speech firmware version provided by the server.
             */
            goTalk: string;
            /**
             * The server flags.
             */
            serverFlags: number;
            /**
             * The unique Id of the server cluster.
             */
            serverId: string;
        }
        /**
         * Various supported Volume units Geotab supports.
         */
        interface VolumeUnit {
            /**
             * The gallon Imperial volume unit.
             */
            gallonImp: string;
            /**
             * The gallon US volume unit.
             */
            gallonUS: string;
            /**
             * The liter volume unit.
             */
            liter: string;
        }
        /**
         * A set of coordinates that reference a location.
         */
        interface Waypoint {
            /**
             * The Coordinate.
             */
            coordinate: object;
            /**
             * The waypoint description.
             */
            description: string;
            /**
             * The sequence number.
             */
            sequence: number;
        }
        /**
         * WifiHotspot is used to configure WiFi hotspot settings on telematics devices.
         * WifiHotspot can be configured only if user accepted WiFi EULA. Otherwise it throws an exception.
         */
        interface WifiHotspot {
            /**
             * The configuration data. (WifiHotspotData)
             */
            configurationData: object;
            /**
             * The Device associated with this VehicleConfiguration.
             */
            device: object;
            /**
             * The version of the entity.
             */
            version: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Parameters for WiFi hotspot.
         */
        interface WifiHotspotData {
            /**
             * The WiFi password.
             */
            password: string;
            /**
             * The WiFi SSID.
             */
            ssid: string;
        }
        /**
         * The object used to specify the arguments when searching for a WifiHotspot.
         */
        interface WifiHotspotSearch {
            /**
             * Filter by the DeviceSearch options. Providing a device ID will
             * search for any VehicleConfiguration that are assigned to that Device.
             * Providing the Groups will search for VehicleConfiguration for that have Devices in that group.
             * Available DeviceSearch options are:
             * IdGroups
             */
            deviceSearch: object;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * Day that is specified as not being a regular working day.
         */
        interface WorkHoliday {
            /**
             * The midnight of the work holiday.
             */
            date: string;
            /**
             * The holiday group for this holiday day. See
             * WorkTimeHolidayGroupId.
             */
            holidayGroup: object;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The object used to specify the arguments when searching for a WorkHoliday.
         */
        interface WorkHolidaySearch {
            /**
             * Search for WorkHolidays with this Name. Wildcard can be used by prepending/appending "%" to
             * string. Example "%name%".
             */
            name: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The set of WorkTimeDetail(s) defining periods during the week that are considered as part of regular working hours. Work times that apply to all times are represented by "WorkTimeAllHoursId".
         */
        interface WorkTime {
            /**
             * Free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * The list of WorkTimeDetail(s).
             */
            details: unknown[];
            /**
             * The WorkTimeHolidayGroupId.
             */
            holidayGroup: object;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * The times during the week that are working times.
         */
        interface WorkTimeDetail {
            /**
             * The day of the week; with Sunday being 0, Monday being 1, etc..
             */
            dayOfWeek: object;
            /**
             * The timeSpan since the start of the period.
             */
            fromTime: string;
            /**
             * The timeSpan to the end of the period.
             */
            toTime: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
        /**
         * Work holidays. See WorkHoliday and WorkTime. Items can be grouped together by giving them all the same GroupId number.
         */
        interface WorkTimeHolidayGroupId {
            /**
             * The Id for the Group associated with the WorkHoliday and WorkTime.
             */
            groupId: object;
        }
        /**
         * The object used to specify the arguments when searching for a WorkTime.
         */
        interface WorkTimeSearch {
            /**
             * Search for WorkTimes with this Name. Wildcard can be used by prepending/appending "%" to
             * string. Example "%name%".
             */
            name: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The base device for all Geotab GO products. Additional properties can be seen in Device.
         */
        interface XDevice {
            /**
             * The date that the device is active from. Default [MinDate].
             * Old vehicles are designated as archived so their data is still available. A retired vehicle cannot be "un-retired".
             */
            activeFrom: string;
            /**
             * The date that the device is active to. Default [MaxDate].
             */
            activeTo: string;
            /**
             * The messaging status Group(s). Drivers with Garmin-equipped vehicles can update their working status by choosing one from a set of common statuses. This status update is shared with their team. For example, when drivers finish their work, they can set their statuses to 'Available'. Their dispatcher is notified of this and can begin to assign work based on both the location and availability of the drivers. Default [Empty].
             */
            autoGroups: unknown[];
            /**
             * The set of CustomParameter(s) associated with this device. Custom parameters allow the activation of special features — limited to custom and beta firmware. Custom parameters are issued only when necessary. Default [Empty].
             */
            customParameters: unknown[];
            /**
             * Flag to force the parameters to be updated between the store and a go device, the store will be updated with the parameter version of the go device +1.
             * This is to avoid the issue where: a device is added (store parameter v0, device parameter v0), parameter version has changed (store parameter v1, device parameter v1), device has been removed, device is re-added (store parameter v0, device parameter v1). Thus when the store is updated to v1 there would be no change.
             */
            enableMustReprogram: boolean;
            /**
             * A value indicating whether to wake up the GPS while the vehicle is parked: this will allow for a faster GPS latch when the vehicle begins its trip. Note: This will drain the vehicle's battery at a faster rate and should not be used with newer devices. Default [false].
             */
            ensureHotStart: boolean;
            /**
             * The GPS off delay in minutes. When enabled this allows the device to keep the GPS on for a period after the vehicle has been turned off. Normally, the GPS turns off immediately. Keeping the GPS on can improve tracking on older devices when many stops are made. Default [0].
             */
            gpsOffDelay: number;
            /**
             * The vehicle license plate details of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licensePlate: string;
            /**
             * The state or province of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            licenseState: string;
            /**
             * The device major firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            major: number;
            /**
             * The minimum allowable value for MaxSecondsBetweenLogs.
             * For XDevices, this is the same as the default value of 200.0f.
             */
            minSecondsBetweenLogs: object;
            /**
             * The device minor firmware version. Newer versions have more functionality. Live device firmware versions are managed automatically. Default [0].
             */
            minor: number;
            /**
             * The parameter version that is stored in MyGeotab.
             * The parameter version should be increased by one when the parameters have been modified and need
             * to be synced with the physical device. Default [2].
             */
            parameterVersion: number;
            /**
             * The parameter version that is on the device. Can be used to track the parameter version currently on the device by comparing to ParameterVersion. Default [0].
             */
            parameterVersionOnDevice: number;
            /**
             * The Vehicle Identification Number (VIN) of the vehicle associated with the device. Maximum length [50] Default [""].
             */
            vehicleIdentificationNumber: string;
            /**
             * Free text field where any user information can be stored and referenced for this entity.
             */
            comment: string;
            /**
             * The device features which have been enabled whether the feature is in use (e.g. HOS, Iridium).The DevicePlan property cannot be added/updated via the API.
             */
            deviceFlags: object;
            /**
             * Specifies the GO or Custom DeviceType.
             */
            deviceType: string;
            /**
             * The list of Group(s) the device belongs to.
             */
            groups: unknown[];
            /**
             * The unique hardware identifier for the Device. This is a 4 byte unique number to identify devices in the system.This property is no longer supported via the SDK as of v5.7.2001.
             */
            hardwareId: number;
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity. Maximum length [50].
             */
            name: string;
            /**
             * The product id. Each device is assigned a unique hardware product id.
             */
            productId: number;
            /**
             * The Serial Number of the device. Maximum length [12].
             */
            serialNumber: string;
            /**
             * The IANA Timezone Id of the device used to determine local work times. This is typically the "home location" of the device. Default ["America/New_York"].Retrieve a list of valid timezone Id's by querying "GetTimeZones".
             */
            timeZoneId: string;
            /**
             * The WorkTime rules to apply to the device. Default [WorkTimeStandardHours].
             */
            workTime: object;
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * Sometimes referred to as a "Geofence", a zone is a virtual geographic boundary, defined by its points representing a real-world geographic area.
         */
        interface Zone {
            /**
             * The date indicating when this zone begins it's active lifespan. Default [UtcNow].
             */
            activeFrom: string;
            /**
             * The date indicating when this zone finishes it's active lifespan. Default [MaxDate].
             */
            activeTo: string;
            /**
             * A free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * A value indicating whether this zone must be displayed when viewing a map or it should be hidden. Default [true].
             */
            displayed: boolean;
            /**
             * External Reference. Any type of external reference you would like to attach to the zone. For example; an ID from another data source referenced when exporting zone data into another program. Maximum length [255] Default [""].
             */
            externalReference: string;
            /**
             * The Color of the fill for this zone when showing on a map. Default [based on zone type; Customer: Orange, Office: Light Orange, Home: Green, Other: Blue].
             */
            fillColor: object;
            /**
             * The group(s) this zone belongs to.
             */
            groups: unknown[];
            /**
             * The unique identifier for this entity. See Id.
             */
            id: string;
            /**
             * The zone metadata.
             */
            metadata: object;
            /**
             * Whether this zone name must be shown when devices stop in this zone. If [true] a "zone stop rule" (Rule with BaseType: ZoneStop) will automatically be created for this zone. This is to facilitate reporting on zone stops. The rule is not visible via the UI. Default [true].
             */
            mustIdentifyStops: boolean;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The list of points (see Coordinate) that make up this zone. A zone should be closed, the first point is the same coordinate as the last point.
             * It is possible to add a zone with an unclosed set of points but the points will be closed by the system.
             */
            points: unknown[];
            /**
             * The list of ZoneType(s) this zone belongs to. Default [Customer].
             */
            zoneTypes: unknown[];
            /**
             * The version of the entity.
             */
            version: string;
        }
        /**
         * The Zones which will be displayed to a given user on the map.
         */
        interface ZoneDisplayMode {
            /**
             * Always show zones on the map.
             */
            all: string;
            /**
             * Use Zone's "Displayed" property to determine whether to show the zone on the map.
             */
            default: string;
            /**
             * Do not show zones on the map.
             */
            none: string;
        }
        /**
         * The object used to specify the arguments when searching for Zone(s).
         */
        interface ZoneSearch {
            /**
             * Search for Zones with this External Reference. Wildcard can be used by prepending/appending "%"
             * to string. Example "%reference%".
             */
            externalReference: string;
            /**
             * Search for Zones that were active at this date or after. Set to UTC now to search for only currently active (non-archived) zones.
             */
            fromDate: string;
            /**
             * Search for Zones that are members of these GroupSearch(s) one of
             * it's children or
             * one of it's parents. Available GroupSearch options are:.
             * Id
             */
            groups: unknown[];
            /**
             * Include zones that are in the in this hierarchy of the
             * GroupSearch(s) provided.
             * If no GroupSearch(s) are provided the user's data scope groups
             * will be used.
             * Default: IncludeGroups.ParentAndChild.
             */
            includeGroups: string;
            /**
             * Search for entities that contain specific keywords in all wildcard string-searchable fields.
             */
            keywords: unknown[];
            /**
             * Exclude Zones whose radius is smaller than this size (meters).
             */
            minimumRadiusInMeters: object;
            /**
             * Search for Zones with this Name. Wildcard can be used by prepending/appending "%" to string.
             * Example "%name%".
             */
            name: string;
            /**
             * The BoundingBox search for Zones in this area extent, the zones being retrieved must be located in this area.
             * Typically used for retrieving Zones in the extents of a bounding box.
             * The SearchArea object should contain the minimum and maximum latitude and longitude representing the search area.
             */
            searchArea: object;
            /**
             * Search for Zones that were active at this date or before.
             */
            toDate: string;
            /**
             * Search for an entry based on the specific Id.
             */
            id: string;
        }
        /**
         * The type of the zone.
         */
        interface ZoneType {
            /**
             * A free text field where any user information can be stored and referenced for this entity. Default [""].
             */
            comment: string;
            /**
             * The name of this entity which identifies it and is used when displaying this entity.
             */
            name: string;
            /**
             * The unique identifier for the specific Entity object in the Geotab system. See Id.
             */
            id: string;
        }
    }

    type GeotabObject =
        | Objects.API
        | Objects.AddIn
        | Objects.AddInConfiguration
        | Objects.AddInConfigurationSearch
        | Objects.AddInData
        | Objects.AddInSearch
        | Objects.AnnotationLog
        | Objects.AnnotationLogSearch
        | Objects.ApplicationVersionInformation
        | Objects.Audit
        | Objects.AuditSearch
        | Objects.BinaryData
        | Objects.BinaryDataSearch
        | Objects.BinaryDataType
        | Objects.BinaryPayload
        | Objects.BinaryPayloadType
        | Objects.BoundingBox
        | Objects.Button
        | Objects.CannedResponseContent
        | Objects.CannedResponseOption
        | Objects.CaptchaAnswer
        | Objects.CaptchaException
        | Objects.ColdChainContent
        | Objects.ColdChainFaultClearContent
        | Objects.ColdChainSetpointSetContent
        | Objects.Color
        | Objects.CompanyDetails
        | Objects.Condition
        | Objects.ConditionType
        | Objects.Controller
        | Objects.ControllerSearch
        | Objects.Coordinate
        | Objects.Credentials
        | Objects.CustomData
        | Objects.CustomDataSearch
        | Objects.CustomDevice
        | Objects.CustomSecurityId
        | Objects.CustomVehicleDevice
        | Objects.DVIRDefect
        | Objects.DVIRLog
        | Objects.DVIRLogSearch
        | Objects.DVIRLogType
        | Objects.DataDiagnostic
        | Objects.DataToComponentContent
        | Objects.DateTimeComparator
        | Objects.DbUnavailableException
        | Objects.DebugData
        | Objects.DebugDataSearch
        | Objects.Defect
        | Objects.DefectRemark
        | Objects.DefectSeverity
        | Objects.Device
        | Objects.DeviceCommunicationStatusCount
        | Objects.DeviceSearch
        | Objects.DeviceShare
        | Objects.DeviceShareSearch
        | Objects.DeviceShareStatus
        | Objects.DeviceShareType
        | Objects.DeviceSourceAddressInfoSearch
        | Objects.DeviceStatusInfo
        | Objects.DeviceStatusInfoSearch
        | Objects.DeviceType
        | Objects.Diagnostic
        | Objects.DiagnosticSearch
        | Objects.DiagnosticType
        | Objects.Directions
        | Objects.DistributionList
        | Objects.Driver
        | Objects.DriverAuthListContent
        | Objects.DriverChange
        | Objects.DriverChangeSearch
        | Objects.DriverChangeType
        | Objects.DriverRegulation
        | Objects.DriverRegulationSearch
        | Objects.DtcClass
        | Objects.DtcSeverity
        | Objects.DuplicateException
        | Objects.DutyStatusAvailability
        | Objects.DutyStatusAvailabilitySearch
        | Objects.DutyStatusDeferralType
        | Objects.DutyStatusLog
        | Objects.DutyStatusLogSearch
        | Objects.DutyStatusLogType
        | Objects.DutyStatusMalfunctionTypes
        | Objects.DutyStatusOrigin
        | Objects.DutyStatusState
        | Objects.DutyStatusViolation
        | Objects.DutyStatusViolationSearch
        | Objects.DutyStatusViolationType
        | Objects.ElectricEnergyEconomyUnit
        | Objects.ElectricEnergyUnit
        | Objects.Entity
        | Objects.EntityWithVersion
        | Objects.ExceptionEvent
        | Objects.ExceptionEventSearch
        | Objects.ExceptionEventState
        | Objects.ExceptionRuleBaseType
        | Objects.ExceptionRuleCategory
        | Objects.ExceptionRuleType
        | Objects.ExpiredPasswordException
        | Objects.FailureMode
        | Objects.FailureModeSearch
        | Objects.FaultData
        | Objects.FaultDataSearch
        | Objects.FaultLampState
        | Objects.FaultResetMode
        | Objects.FaultRichDataErrorType
        | Objects.FaultRichDataSearch
        | Objects.FaultState
        | Objects.FaultStateProvider
        | Objects.FaultStatus
        | Objects.FeedResult
        | Objects.FeedbackSearch
        | Objects.FieldSelector
        | Objects.FillUp
        | Objects.FillUpExtrema
        | Objects.FillUpExtremum
        | Objects.FillUpSearch
        | Objects.FlashCode
        | Objects.FuelEconomyUnit
        | Objects.FuelEvent
        | Objects.FuelTankCapacity
        | Objects.FuelTankCapacitySource
        | Objects.FuelTaxDetail
        | Objects.FuelTaxDetailSearch
        | Objects.FuelTransaction
        | Objects.FuelTransactionProductType
        | Objects.FuelTransactionProvider
        | Objects.FuelUsed
        | Objects.FuelUsedSearch
        | Objects.GenericException
        | Objects.Go4v3
        | Objects.Go5
        | Objects.Go6
        | Objects.Go7
        | Objects.Go8
        | Objects.Go9
        | Objects.GoCurve
        | Objects.GoCurveAuxiliary
        | Objects.GoDevice
        | Objects.GoDriveDevice
        | Objects.GoTalkContent
        | Objects.GoTalkLanguage
        | Objects.GoogleMapStyle
        | Objects.Group
        | Objects.GroupRelationViolatedException
        | Objects.GroupRelations
        | Objects.GroupSearch
        | Objects.GroupSecurity
        | Objects.HosOption
        | Objects.HosRuleSet
        | Objects.Id
        | Objects.IncludeGroups
        | Objects.InvalidApiOperationException
        | Objects.InvalidMyAdminUserException
        | Objects.InvalidPermissionsException
        | Objects.InvalidUserException
        | Objects.IoxAddOn
        | Objects.IoxAddOnSearch
        | Objects.IoxAddOnStatus
        | Objects.IoxAddOnStatusSearch
        | Objects.IoxOutputContent
        | Objects.ItemName
        | Objects.JsonRpcError
        | Objects.JsonRpcErrorData
        | Objects.Jurisdiction
        | Objects.KnownId
        | Objects.KnownIoxAddOnType
        | Objects.Leg
        | Objects.LocationContent
        | Objects.LogRecord
        | Objects.LogRecordSearch
        | Objects.LoginResult
        | Objects.Map
        | Objects.MapScript
        | Objects.MapView
        | Objects.MediaFile
        | Objects.MediaFileSearch
        | Objects.MediaType
        | Objects.Menu
        | Objects.MessageContentType
        | Objects.MimeContent
        | Objects.NameEntity
        | Objects.NameEntityWithVersion
        | Objects.OpenStreetMapStyle
        | Objects.OverLimitException
        | Objects.ParameterGroup
        | Objects.ParameterGroupSearch
        | Objects.PointF
        | Objects.PostedRoadSpeedOptions
        | Objects.PropertySelector
        | Objects.Recipient
        | Objects.RecipientType
        | Objects.RectangleF
        | Objects.RegistrationException
        | Objects.RepairStatusType
        | Objects.RequestLocation
        | Objects.ReverseGeocodeAddress
        | Objects.Route
        | Objects.RoutePlanItem
        | Objects.RouteSearch
        | Objects.RouteType
        | Objects.Rule
        | Objects.RuleSearch
        | Objects.Search
        | Objects.SecurityClearance
        | Objects.SecurityFilter
        | Objects.SecurityIdentifier
        | Objects.SerialIoxContent
        | Objects.ShipmentLog
        | Objects.ShipmentLogSearch
        | Objects.Source
        | Objects.SourceSearch
        | Objects.Status
        | Objects.StatusData
        | Objects.StatusDataSearch
        | Objects.Step
        | Objects.TachographDataFileSearch
        | Objects.Tag
        | Objects.TagSearch
        | Objects.TextContent
        | Objects.TextMessage
        | Objects.TextMessageContentType
        | Objects.TextMessageSearch
        | Objects.TimeZoneInfo
        | Objects.TimeZoneInfoAdjustmentRule
        | Objects.TimeZoneInfoWithRules
        | Objects.Trailer
        | Objects.TrailerAttachment
        | Objects.TrailerAttachmentSearch
        | Objects.TrailerSearch
        | Objects.Trip
        | Objects.TripSearch
        | Objects.UnitOfMeasure
        | Objects.UnitOfMeasureSearch
        | Objects.UntrackedAsset
        | Objects.User
        | Objects.UserAuthenticationType
        | Objects.UserSearch
        | Objects.UserSearchType
        | Objects.VehicleConfiguration
        | Objects.VehicleConfigurationSearch
        | Objects.VersionInformation
        | Objects.VolumeUnit
        | Objects.Waypoint
        | Objects.WifiHotspot
        | Objects.WifiHotspotData
        | Objects.WifiHotspotSearch
        | Objects.WorkHoliday
        | Objects.WorkHolidaySearch
        | Objects.WorkTime
        | Objects.WorkTimeDetail
        | Objects.WorkTimeHolidayGroupId
        | Objects.WorkTimeSearch
        | Objects.XDevice
        | Objects.Zone
        | Objects.ZoneDisplayMode
        | Objects.ZoneSearch
        | Objects.ZoneType;
}

type Options = GeotabApi.Options;
type Methods = GeotabApi.Methods;
type Parameters = GeotabApi.Parameters;
type Authentication = GeotabApi.Authentication;
type GeotabObject = GeotabApi.GeotabObject;
type LoginResult = GeotabApi.Objects.LoginResult;
type Credentials = GeotabApi.Objects.Credentials;
type APIResult<Opts, T extends GeotabObject = GeotabObject> = Opts extends { fullResponse: infer FullResponse }
    ? FullResponse extends true ? { data: { result: T } }
    : T
    : T;
type MultiCallParameter<T extends Methods[]> = {
    [K in keyof T]: [T[K], T[K] extends Methods ? Parameters[T[K]] : never];
};

/**
 * Entrypoint to API. Separate class is used to expose "public"
 * methods only to the user - Babel currently doesn't support
 * ES10 access modifiers
 */
declare class GeotabApi<Opts extends Partial<Options> | undefined> {
    /**
     * Constructor for GeotabApi
     *
     * @param authentication Holds credentials: {
     *                                userName: '',
     *                                password/sessionId: '',
     *                                database: ''
     *                              }
     *                              path: '',
     * @param newOptions overrides default options
     */
    constructor(authentication: Authentication, newOptions?: Opts);

    /**
     * Authenticates the user against the server. Gets the sessionId and other relevant session information
     *
     * @param callbackSuccess optional callback for successful authentications
     * @param callbackError optional callback for unsuccessful authentications
     * @returns Call promise - result will be either response.data.error or response.data.result
     */
    authenticate(): Promise<APIResult<Opts, LoginResult>>;
    authenticate(
        callbackSuccess: (result: APIResult<Opts, LoginResult>) => void,
        callbackError?: () => void,
    ): Promise<void>;
    authenticate(
        callbackSuccess?: (result: APIResult<Opts, LoginResult>) => void,
        callbackError?: () => void,
    ): // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    Promise<APIResult<Opts, LoginResult> | void>;

    /**
     * Constructs an API call to MyGeotab
     *
     * @param method method name for the API call
     * @param params method's parameters
     * @param callbackSuccess Optional callback for successful calls
     * @param callbackError Optional callback for unsuccessful calls
     * @returns an axios promise which will resolve to either data.error or data.result
     */
    call<U extends Methods>(method: U, params: Parameters[U]): Promise<APIResult<Opts>>;
    call<U extends Methods>(
        method: U,
        params: Parameters[U],
        callbackSuccess: (result: APIResult<Opts>) => void,
        callbackError?: () => void,
    ): Promise<void>;
    call<U extends Methods>(
        method: U,
        params: Parameters[U],
        callbackSuccess?: (result: APIResult<Opts>) => void,
        callbackError?: () => void,
    ): // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    Promise<APIResult<Opts> | void>;

    /**
     *  Constructs a multicall to myGeotab
     *
     * @param calls array of calls to be included in the multicall
     * @param callbackSuccess optional callback function for successful multicalls
     * @param callbackError optional callback function for unsuccessful multicalls
     * @returns returns call promise
     */
    multiCall<T extends Methods[]>(
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        calls: readonly [...MultiCallParameter<T>],
    ): Promise<APIResult<Opts>>;
    multiCall<T extends Methods[]>(
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        calls: readonly [...MultiCallParameter<T>],
        callbackSuccess: () => void,
        callbackError?: () => void,
    ): Promise<void>;
    multiCall<T extends Methods[]>(
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        calls: readonly [...MultiCallParameter<T>],
        callbackSuccess?: () => void,
        callbackError?: () => void,
    ): // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    Promise<APIResult<Opts> | void>;

    /**
     * Gets a stored or new session
     * @param callbackSuccess optional callback for successes
     * @param newSession override any stored credentials and fetch a new session
     * @returns returns call promise
     */
    getSession(callbackSuccess?: undefined, newSession?: boolean): Promise<APIResult<Opts, LoginResult>>;
    getSession(
        callbackSuccess:
            | ((credentials: Credentials, server: string) => void)
            | ((response: APIResult<Opts, LoginResult>) => void),
        newSession?: boolean,
    ): Promise<void>;
    getSession(
        callbackSuccess?:
            | ((credentials: Credentials, server: string) => void)
            | ((response: APIResult<Opts, LoginResult>) => void),
        newSession?: boolean,
    ): // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    Promise<void | APIResult<Opts, LoginResult>>;

    /**
     * Forgets the session in local storage
     * Resets session with already provided credentials
     */
    forget(): Promise<APIResult<Opts, LoginResult>>;
}

export = GeotabApi;
export as namespace GeotabApi;
