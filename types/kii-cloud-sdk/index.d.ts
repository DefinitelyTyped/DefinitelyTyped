declare namespace KiiCloud {
    enum KiiACLAction {
        KiiACLBucketActionCreateObjects,
        KiiACLBucketActionQueryObjects,
        KiiACLBucketActionDropBucket,
        KiiACLObjectActionRead,
        KiiACLObjectActionWrite,
        KiiACLBucketActionReadObjects,
        KiiACLSubscribeToTopic,
        KiiACLSendMessageToTopic,
    }

    enum KiiSite {
        US,
        JP,
        CN,
        SG,
        CN3,
        EU,
    }

    enum KiiAnalyticsSite {
        US,
        JP,
        CN,
        SG,
        CN3,
        EU,
    }

    enum KiiSocialNetworkName {
        FACEBOOK = 1,
        TWITTER = 2,
        QQ = 3,
        GOOGLEPLUS = 4,
        RENREN = 5,
    }

    type KiiSocialConnectOptions = {
        access_token: string;
        openID?: string | undefined;
    } | {
        oauth_token: string;
        oauth_token_secret: string;
    };

    interface KiiSocialAccountInfo {
        createdAt: number;
        provider: KiiSocialNetworkName;
        socialAccountId: string;
    }

    interface KiiThingFields {
        /**
         * thing identifier given by thing vendor.
         */
        _vendorThingID: string;

        /**
         * thing password given by thing vendor.
         */
        _password: string;

        /**
         * thing type given by thing vendor.
         */
        _thingType?: string | undefined;

        /**
         * vendor identifier given by thing vendor.
         */
        _vendor?: string | undefined;

        /**
         * firmware version given by thing vendor.
         */
        _firmwareVersion?: string | undefined;

        /**
         * lot identifier given by thing vendor.
         */
        _lot?: string | undefined;

        /**
         * product name given by thing vendor.
         */
        _productName?: string | undefined;

        /**
         * arbitrary string field.
         */
        _stringField1?: string | undefined;

        /**
         * arbitrary string field.
         */
        _stringField2?: string | undefined;

        /**
         * arbitrary string field.
         */
        _stringField3?: string | undefined;

        /**
         * arbitrary string field.
         */
        _stringField4?: string | undefined;

        /**
         * arbitrary string field.
         */
        _stringField5?: string | undefined;

        /**
         * arbitrary number field.
         */
        _numberField1?: number | undefined;

        /**
         * arbitrary number field.
         */
        _numberField2?: number | undefined;

        /**
         * arbitrary number field.
         */
        _numberField3?: number | undefined;

        /**
         * arbitrary number field.
         */
        _numberField4?: number | undefined;

        /**
         * arbitrary number field.
         */
        _numberField5?: number | undefined;

        /**
         * custom fields.
         */
        [name: string]: any;
    }

    type KiiACLSubject =
        | KiiGroup
        | KiiUser
        | KiiAnyAuthenticatedUser
        | KiiAnonymousUser
        | KiiThing;

    interface APNSAlert {
        title: string;
        body: string;
        "title-loc-key": string;
        "title-loc-args": string[];
        "action-loc-key": string;
        "loc-key": string;
        "loc-args": string[];
        "launch-image": string;
    }

    interface identityData {
        emailAddress?: string | undefined;
        phoneNumber?: string | undefined;
        username?: string | undefined;
    }

    interface KiiAccessTokenObject {
        access_token: string;
        expires_at: Date;
    }

    interface KiiGcmInstallationResponse {
        installationID: string;
    }

    interface KiiMqttInstallationResponse {
        installationID: string;
        installationRegistrationID: string;
    }

    interface KiiMqttEndpoint {
        installationID: string;
        username: string;
        password: string;
        mqttTopic: string;
        host: string;
        "X-MQTT-TTL": number;
        portTCP: number;
        portSSL: number;
        portWS: number;
        portWSS: number;
    }

    interface KiiError {
        status: number;
        code: string;
        message: string;
    }

    /**
     * The main SDK class
     */
    class Kii {
        /**
         * Kii SDK Build Number
         *
         * @return current build number of the SDK
         */
        static getBuildNumber(): string;

        /**
         * Kii SDK Version Number
         *
         * @return current version number of the SDK
         */
        static getSDKVersion(): string;

        /**
         * Retrieve the current app ID
         *
         * @return The current app ID
         */
        static getAppID(): string;

        /**
         * Retrieve the current app key
         *
         * @return The current app key
         */
        static getAppKey(): string;

        /**
         * Set the access token lifetime in seconds.
         *
         * If you don't call this method or call it with 0, token won't be expired.
         * Call this method if you like the access token to be expired
         * after a certain period. Once called, token retrieved
         * by each future authentication will have the specified lifetime.
         * Note that, it will not update the lifetime of token received prior
         * calling this method. Once expired, you have to login again to renew the token.
         *
         * @param expiresIn The life time of access token in seconds.
         *
         * @throws If specified expiresIn is negative.
         * @throws If Kii has not been initialized
         *
         * @example
         *     Kii.setAccessTokenExpiration(3600);
         */
        static setAccessTokenExpiration(
            expiresIn: number,
        ): void;

        /**
         * Returns access token lifetime in seconds.
         *
         * If access token lifetime has not set explicitly by {@link Kii.setAccessTokenExpiration(expiresIn)}, returns 0.
         *
         * @return access token lifetime in seconds.
         *
         * @throws If Kii has not been initialized
         */
        static getAccessTokenExpiration(): number;

        /**
         * Initialize the Kii SDK with a specific URL
         *
         * Should be the first Kii SDK action your application makes.
         *
         * @param appID The application ID found in your Kii developer console
         * @param appKey The application key found in your Kii developer console
         * @param site Can be one of the constants KiiSite.US, KiiSite.JP, KiiSite.CN or KiiSite.SG depending on your location.
         * @param analyticsOption An object used for initializing KiiAnalytics, If not provided or invalid object provided, KiiAnalytics won't be initialized. If provided, it can be empty object or
         * with analyticsOption.deviceId.<br> If provided, but deviceId is not provided, SDK generates a new deviceId and use it when upload events. It can be retrieved by {@link
         * KiiAnalytics.getDeviceId()}. It is recommended to retrieve the deviceId and store it to identify the device properly.
         *
         * @example
         *     // Disable KiiAnalytics
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiSite.JP);
         *
         *     // Enable KiiAnalytics with deviceId
         *     var analyticsOption = { deviceId: "my-device-id" };
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiSite.JP, analyticsOption);
         *
         *     // Enable KiiAnalytics without deviceId
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiSite.JP, {});
         */
        static initializeWithSite(
            appID: string,
            appKey: string,
            site: KiiSite,
            analyticsOption?: any,
        ): void;

        /**
         * Initialize the Kii SDK
         *
         * Should be the first Kii SDK action your application makes.
         * Meanwhile, Kii Analytics is initialized.
         *
         * @param appID The application ID found in your Kii developer console
         * @param appKey The application key found in your Kii developer console
         * @param analyticsOption An object used for initializing KiiAnalytics, If not provided or invalid object provided, KiiAnalytics won't be initialized. If provided, it can be empty object or
         * with analyticsOption.deviceId. <br> If provided, but deviceId is not provided, SDK generates a new deviceId and use it when upload events. It can be retrieved by {@link
         * KiiAnalytics.getDeviceId()}. It is recommended to retrieve the deviceId and store it to identify the device properly.
         *
         * @example
         *     // Disable KiiAnalytics
         *     Kii.initialize("my-app-id", "my-app-key");
         *
         *     // Enable KiiAnalytics with deviceId
         *     var analyticsOption = { deviceId: "my-device-id" };
         *     Kii.initialize("my-app-id", "my-app-key", analyticsOption);
         *
         *     // Enable KiiAnalytics without deviceId
         *     Kii.initialize("my-app-id", "my-app-key", {});
         */
        static initialize(
            appID: string,
            appKey: string,
            analyticsOption?: any,
        ): void;

        /**
         * Creates a reference to a bucket for this app
         *
         *     <br><br>The bucket will be created/accessed within this app's scope
         *
         * @param bucketName The name of the bucket the app should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *         var bucket = Kii.bucketWithName("myBucket");
         */
        static bucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a encrypted bucket for this app
         *
         *     <br><br>The bucket will be created/accessed within this app's scope
         *
         * @param bucketName The name of the bucket the app should create/access
         *
         * @return A working KiiEncryptedBucket object
         *
         * @example
         *         var bucket = Kii.encryptedBucketWithName("myBucket");
         */
        static encryptedBucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a group with the given name
         *
         * @param groupName An application-specific group name
         *
         * @return A new KiiGroup reference
         *
         * @example
         *         var group = new Kii.groupWithName("myGroup");
         */
        static groupWithName(
            groupName: string,
        ): KiiGroup;

        /**
         * Creates a reference to a group with the given name and a list of default members
         *
         * @param groupName An application-specific group name
         * @param members An array of KiiUser objects to add to the group
         *
         * @return A new KiiGroup reference
         *
         * @example
         *         var group = new KiiGroup.groupWithName("myGroup", members);
         */
        static groupWithNameAndMembers(
            groupName: string,
            members: KiiUser[],
        ): KiiGroup;

        /**
         * Authenticate as app admin.
         * <br><br>
         * <b>This api call must not placed on code which can be accessed by browser.
         * This api is intended to be used by server side code like Node.js.
         * If you use this api in code accessible by browser, your application id and application secret could be stolen.
         * Attacker will be act as appadmin and all the data in your application will be suffered.
         * </b>
         *
         * @param clientId assigned to your application.
         * @param clientSecret assigned to your application.
         * @param callbacks The callback methods called when authentication succeeded/failed.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(adminContext). adminContext is a KiiAppAdminContext instance.</li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsAppAdmin("your client id", "your client secret", {
         *         success: function(adminContext) {
         *             // adminContext : KiiAppAdminContext instance
         *             // Operate entities with adminContext.
         *         },
         *         failure: function(error, statusCode) {
         *             // Authentication failed.
         *         }
         *     );
         *
         *     // example to use Promise
         *     Kii.authenticateAsAppAdmin("your client id", "your client secret").then(
         *         function(adminContext) { // fulfill callback function
         *             // adminContext : KiiAppAdminContext instance
         *             // Operate entities with adminContext.
         *
         *         },
         *         function(error) { // reject callback function
         *             // Authentication failed.
         *             var errorString = error.message;
         *         }
         *     );
         */
        static authenticateAsAppAdmin(
            clientId: string,
            clientSecret: string,
            callbacks?: {
                success(adminContext: KiiAppAdminContext): any;
                failure(error: string, statusCode: number): any;
            },
        ): Promise<KiiAppAdminContext>;

        /**
         * Instantiate KiiServerCodeEntry with specified entry name.
         *
         * @param entryName Name of the entry.
         *
         * @return KiiServerCodeEntry instance.
         *
         * @throws Thrown when entryName is invalid in the following cases:
         *     <li>not type of string </li>
         *     <li>empty string </li>
         *     <li>invalid string. Valid entryName pattern is "[a-zA-Z][_a-zA-Z0-9]*$".</li>
         *
         * @example
         *         var entry = Kii.serverCodeEntry("main");
         */
        static serverCodeEntry(
            entryName: string,
        ): KiiServerCodeEntry;

        /**
         * Instantiate serverCodeEntryWithVersion with specified entry name and version.
         *
         * @param entryName Name of the entry.
         * @param version Version of the entry.
         *
         * @return KiiServerCodeEntry instance.
         *
         * @throws Thrown in the following cases: <br>
         *     <li>entryName or version is not type of string </li>
         *     <li>entryName or version is empty string </li>
         *     <li>entryName is invalid string. Valid entryName pattern is "[a-zA-Z][_a-zA-Z0-9]*$".</li>
         *
         * @example
         *         var entry = Kii.serverCodeEntryWithVersion("main", "gulsdf6ful8jvf8uq6fe7vjy6");
         */
        static serverCodeEntryWithVersion(
            entryName: string,
            version: string,
        ): KiiServerCodeEntry;

        /**
         * Instantiate topic belongs to application.
         *
         * @param topicName name of the topic. Must be a not empty string.
         *
         * @return topic instance.
         */
        static topicWithName(
            topicName: string,
        ): KiiTopic;

        /**
         * Gets a list of topics in app scope
         *
         * @param callbacks An object with callback methods defined
         * @param paginationKey You can specify the pagination key with the nextPaginationKey passed by callbacks.success or fullfill callback of promise. If empty string or no string object is
         * provided, this API regards no paginationKey specified.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is array of KiiTopic instances.</li>
         *           <li>params[1] is string of nextPaginationKey.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.listTopics({
         *         success: function(topicList, nextPaginationKey) {
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 Kii.listTopics({
         *                     success: function(topicList, nextPaginationKey) {...},
         *                     failure: function(anErrorString) {...}
         *                 }, nextPaginationKey);
         *             }
         *         },
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use promise
         *     Kii.listTopics().then(
         *         function(params) {
         *             var topicList = params[0];
         *             var nextPaginationKey = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 Kii.listTopics(null, nextPaginationKey).then(
         *                     function(params) {...},
         *                     function(error) {...}
         *                 );
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        static listTopics(
            callbacks?: {
                success(topicList: KiiTopic[], nextPaginationKey: string): any;
                failure(anErrorString: string): any;
            },
            paginationKey?: string,
        ): Promise<[KiiTopic[], string]>;

        /**
         * Authenticate as Thing.
         * <br><br>
         * <b>This api is intended to be used in a Thing device, where the user
         * credentials or app admin context is not configured. This Thing must be
         * already registered in Kii Cloud.
         * </b>
         *
         * @param vendorThingID vendorThingID of a registered Thing.
         * @param password password for the registered Thing.
         * @param callbacks The callback methods called when authentication succeeded/failed.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(thingAuthContext). thingAuthContext is a KiiThingContext instance.</li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsThing("vendor thing id", "password of this thing", {
         *         success: function(thingAuthContext) {
         *             // thingAuthContext : KiiThingContext instance
         *             // Operate entities with thingAuthContext.
         *         },
         *         failure: function(error) {
         *             // Authentication failed.
         *         }
         *     );
         *
         *     // example to use Promise
         *     Kii.authenticateAsThing("vendor thing id", "password of this thing").then(
         *         function(thingAuthContext) { // fulfill callback function
         *             // thingAuthContext : KiiThingContext instance
         *             // Operate entities with thingAuthContext.
         *
         *         },
         *         function(error) { // reject callback function
         *             // Authentication failed.
         *             var errorString = error.message;
         *         }
         *     );
         */
        static authenticateAsThing(
            vendorThingID: string,
            password: string,
            callbacks?: { success(thingAuthContext: KiiThingContext): any; failure(error: Error): any },
        ): Promise<KiiThingContext>;

        /**
         * Create a KiiThingContext reference
         * <br><br>
         * <b>This api is intended to be used in a Thing device, where the user
         * credentials or app admin context is not configured. This Thing must be
         * already registered in Kii Cloud.
         * </b>
         *
         * @param thingID thingID of a registered Thing.
         * @param token token for the registered Thing.
         * @param callbacks The callback methods called when creation succeeded/failed.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(thingContext). thingContext is a KiiThingContext instance.</li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsThingWithToken("thing_id", "thing_token", {
         *         success: function(thingContext) {
         *             // thingContext : KiiThingContext instance
         *             // Operate entities with thingContext.
         *         },
         *         failure: function(error) {
         *             // Creation failed.
         *         }
         *     );
         *
         *     // example to use Promise
         *     Kii.authenticateAsThingWithToken("thing_id", "thing_token").then(
         *         function(thingContext) { // fulfill callback function
         *             // thingContext : KiiThingContext instance
         *             // Operate entities with thingContext.
         *
         *         },
         *         function(error) { // reject callback function
         *             // Creation failed.
         *             var errorString = error.message;
         *         }
         *     );
         */
        static authenticateAsThingWithToken(
            thingID: string,
            token: string,
            callbacks?: { success(thingContext: KiiThingContext): any; failure(error: Error): any },
        ): Promise<KiiThingContext>;
    }

    /**
     * Represents a KiiACL object
     */
    class KiiACL {
        /**
         * Get the list of active ACLs associated with this object from the server
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is the KiiACL instance which this method was called on.</li>
         *           <li>params[1] is array of KiiACLEntry instances.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is the KiiACL instance which this method was called on.</li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var acl = . . .; // a KiiACL object
         *     acl.listACLEntries({
         *         success: function(theACL, theEntries) {
         *             // do something
         *         },
         *
         *         failure: function(theACL, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var acl = . . .; // a KiiACL object
         *     acl.listACLEntries().then(
         *         function(params) { // fulfill callback function
         *             var theACL = params[0];
         *             var theEntries = params[1];
         *             // do something
         *         },
         *         function(error) { // reject callback function
         *             var theACL = error.target;
         *             var anErrorString = error.message;
         *                 // do something with the error response
         *     });
         */
        listACLEntries(
            callbacks?: {
                success(theACL: KiiACL, theEntries: KiiACLEntry[]): any;
                failure(theACL: KiiACL, anErrorString: string): any;
            },
        ): Promise<[KiiACL, KiiACLEntry[]]>;

        /**
         * Add a KiiACLEntry to the local object, if not already present. This does not explicitly grant any permissions, which should be done through the KiiACLEntry itself. This method simply adds
         * the entry to the local ACL object so it can be saved to the server.
         *
         * @param entry The KiiACLEntry to add
         *
         * @throws If specified entry is not an instance of KiiACLEntry.
         *
         * @example
         *     var aclEntry = . . .; // a KiiACLEntry object
         *     var acl = . . .; // a KiiACL object
         *     acl.putACLEntry(aclEntry);
         */
        putACLEntry(
            entry: KiiACLEntry,
        ): void;

        /**
         * Remove a KiiACLEntry to the local object. This does not explicitly revoke any permissions, which should be done through the KiiACLEntry itself. This method simply removes the entry from the
         * local ACL object and will not be saved to the server.
         *
         * @param entry The KiiACLEntry to remove
         *
         * @throws If specified entry is not an instance of KiiACLEntry.
         *
         * @example
         *     var aclEntry = . . .; // a KiiACLEntry object
         *     var acl = . . .; // a KiiACL object
         *     acl.removeACLEntry(aclEntry);
         */
        removeACLEntry(
            entry: KiiACLEntry,
        ): void;

        /**
         * Save the list of ACLEntry objects associated with this ACL object to the server
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(theSavedACL). theSavedACL is KiiACL instance.</li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is the KiiACL instance which this method was called on.</li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var acl = . . .; // a KiiACL object
         *     acl.save({
         *         success: function(theSavedACL) {
         *             // do something with the saved acl
         *         },
         *
         *         failure: function(theACL, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var acl = . . .; // a KiiACL object
         *     acl.save().then(
         *         function(theSavedACL) { // fulfill callback function
         *             // do something with the saved acl
         *         },
         *         function(error) { // reject callback function
         *             var theACL = error.target;
         *             var anErrorString = error.message;
         *             // do something with the error response
         *     });
         */
        save(
            callbacks?: { success(theSavedACL: KiiACL): any; failure(theACL: KiiACL, anErrorString: string): any },
        ): Promise<KiiACL>;
    }

    /**
     * Represents a KiiACLEntry object
     */
    class KiiACLEntry {
        /**
         * The action that is being permitted/restricted. Possible values:
         * <br><br>
         * KiiACLAction.KiiACLBucketActionCreateObjects,<br>
         * KiiACLAction.KiiACLBucketActionQueryObjects,  <br>
         * KiiACLAction.KiiACLBucketActionDropBucket,<br>
         * KiiACLAction.KiiACLBucketActionReadObjects,<br>
         * KiiACLAction.KiiACLObjectActionRead,<br>
         * KiiACLAction.KiiACLObjectActionWrite,<br>
         * KiiACLAction.KiiACLSubscribeToTopic,<br>
         * KiiACLAction.KiiACLSendMessageToTopic
         *
         * @param value The action being permitted/restricted
         *
         * @throws If the value is not one of the permitted values
         */
        setAction(
            value: KiiACLAction,
        ): void;

        /**
         * Get the action that is being permitted/restricted in this entry
         */
        getAction(): KiiACLAction;

        /**
         * Set the subject to which the action/grant is being applied
         *
         * @param subject instance.
         *
         * @throws If the value is not one of the permitted values
         */
        setSubject(
            subject: KiiACLSubject,
        ): void;

        /**
         * Get the subject that is being permitted/restricted in this entry
         */
        getSubject<T extends KiiACLSubject>(): T;

        /**
         * Set whether or not the action is being permitted to the subject
         *
         * @param value true if the action is permitted, false otherwise
         *
         * @throws If the value is not a boolean type
         */
        setGrant(
            value: boolean,
        ): void;

        /**
         * Get whether or not the action is being permitted to the subject
         */
        getGrant(): boolean;

        /**
         * Create a KiiACLEntry object with a subject and action
         *
         * The entry will not be applied on the server until the KiiACL object is
         * explicitly saved. This method simply returns a working KiiACLEntry with
         * a specified subject and action.
         *
         * @param Subject to which the action/grant is being applied
         * @param action One of the specified KiiACLAction values the
         *   permissions is being applied to
         *
         * @return A KiiACLEntry object with the specified attributes
         *
         * @throws If specified subject is invalid.
         * @throws If the specified action is invalid.
         */
        static entryWithSubject(
            Subject: KiiACLSubject,
            action: KiiACLAction,
        ): KiiACLEntry;
    }

    /**
     * The main SDK class
     */
    class KiiAnalytics {
        /**
         * Retrieve the current app ID
         *
         * @return The current app ID
         */
        static getAppID(): string;

        /**
         * Retrieve the current app key
         *
         * @return The current app key
         */
        static getAppKey(): string;

        /**
         * Get the deviceId. If deviceId has not specified while initialization, it returns SDK generated deviceId.It is recommended to retrieve the deviceId and store it to identify the device
         * properly.
         *
         * @return deviceId.
         */
        static getDeviceId(): string;

        /**
         * Is the SDK printing logs to the console?
         *
         * @return True if printing logs, false otherwise
         */
        static isLogging(): boolean;

        /**
         * Set the logging status of the SDK
         *
         *     Helpful for development - we strongly advice you turn off logging for any production code.
         *
         * @param True if logs should be printed, false otherwise
         *
         * @example
         *         KiiAnalytics.setLogging(true);
         */
        static setLogging(
            True: boolean,
        ): void;

        /**
         * @deprecated Use {@link Kii.initializeWithSite} instead. Initialize the Kii SDK with a specific URL
         *
         *   Should be the first Kii SDK action your application makes
         *
         * @param appID The application ID found in your Kii developer console
         * @param appKey The application key found in your Kii developer console
         * @param site Can be one of the constants KiiAnalyticsSite.US, KiiAnalyticsSite.JP, KiiAnalyticsSite.CN, KiiAnalyticsSite.CN3 or KiiAnalyticsSite.SG depending on your location.
         * @param deviceid If deviceId is not provided, SDK generates a new deviceId and use it when upload events.deviceId can be retrieved by {@link KiiAnalytics.getDeviceId()}.It is recommended to
         * retrieve the deviceId and store it to identify the device properly.
         *
         * @example
         *     // initialize without deviceId
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiAnalyticsSite.JP);
         *     // initialize with deviceId
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiAnalyticsSite.JP, "my-device-id");
         */
        static initializeWithSite(
            appID: string,
            appKey: string,
            site: KiiAnalyticsSite,
            deviceid: string,
        ): void;

        /**
         * @deprecated Use {@link Kii.initialize} instead. Initialize the KiiAnalytics SDK
         *
         *   Should be the first KiiAnalytics SDK action your application makes
         *
         * @param appID The application ID found in your Kii developer console
         * @param appKey The application key found in your Kii developer console
         * @param deviceid If deviceId is not provided, SDK generates a new deviceId and use it when upload events. deviceId can be retrieved by {@link KiiAnalytics.getDeviceId()}.It is recommended to
         * retrieve the deviceId and store it to identify the device properly.
         *
         * @example
         *     // initialize without deviceId
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiAnalyticsSite.JP);
         *     // initialize with deviceId
         *     Kii.initializeWithSite("my-app-id", "my-app-key", KiiAnalyticsSite.JP, "my-device-id");
         */
        static initialize(
            appID: string,
            appKey: string,
            deviceid: string,
        ): void;

        /**
         * Utilize the KiiAnalytics logger to track SDK-specific actions
         *
         *     Helpful for development - we strongly advice you turn off logging for any production code.
         *
         * @param message The message to print to console.log in your browser
         *
         * @example
         *         KiiAnalytics.logger("My message");
         */
        static logger(
            message: string,
        ): void;

        /**
         * Log a single event to be uploaded to KiiAnalytics
         *
         * Use this method if you'd like to track an event by name only. If you'd like to track other attributes/dimensions, please use KiiAnalytics.trackEventWithExtras(eventName, parameters)
         *
         * @param eventName A string representing the event name for later tracking
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(). No parameters. </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         */
        static trackEvent(
            eventName: string,
        ): Promise<void>;

        /**
         * Log a single event to be uploaded to KiiAnalytics
         *
         * Use this method if you'd like to track an event by name and add extra information to the event.
         *
         * @param eventName A string representing the event name for later tracking
         * @param extras A dictionary of JSON-encodable key/value pairs to be attached to the event.
         *   Key must follow the pattern "^[a-zA-Z][a-zA-Z0-9_]{0,63}$".Supported value type is string, number, boolean and array.
         *   Empty string or empty array will be considered as invalid.Type of array elements must be string, number or boolean.
         *   If any key/value pair is invalid, it will be ignored and not sent to the KiiCloud.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(). No parameters. </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         */
        static trackEventWithExtras(
            eventName: string,
            extras: any,
        ): Promise<void>;

        /**
         * Log a single event to be uploaded to KiiAnalytics
         *
         * Use this method if you'd like to track an event asynchronously by name and add extra information to the event.
         *
         * @param eventName A string representing the event name for later tracking
         * @param extras A dictionary of JSON-encodable key/value pairs to be attached to the event.
         *   Key must follow the pattern "^[a-zA-Z][a-zA-Z0-9_]{0,63}$".Supported value type is string, number, boolean and array.
         *   Empty string or empty array will be considered as invalid.Type of array elements must be string, number or boolean.
         *   If any key/value pair is invalid, it will be ignored and not sent to the KiiCloud.
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(). No parameters. </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         */
        static trackEventWithExtrasAndCallbacks(
            eventName: string,
            extras: any,
            callbacks?: { success(): any; failure(error: Error): any },
        ): Promise<void>;

        /**
         * @deprecated Set a custom API endpoint URL
         *
         * @param url A string containing the desired endpoint
         */
        static setBaseURL(
            url: string,
        ): void;

        /**
         * @deprecated Use {@link Kii.getSDKVersion} instead. Kii Analytics SDK Version Number
         *
         * @return current version number of the SDK
         */
        static getSDKVersion(): string;
    }

    /**
     * Represent an anonymous user for setting the ACL of an object. This will include anyone using the application but have not signed up or authenticated as registered user.
     *
     *     When retrieving ACL from an object, test for this class to determine the subject type.
     */
    class KiiAnonymousUser {
        /**
         * Returns the ID of Anonymous user.
         */
        getID(): string;
    }

    /**
     * Represent any authenticated user for setting the ACL of an object. This will include anyone using the application who has registered and authenticated in the current session.
     *
     *     When retrieving ACL from an object, test for this class to determine the subject type. Example:
     */
    class KiiAnyAuthenticatedUser {
        /**
         * Returns the ID of AuthenticatedUser user.
         */
        getID(): string;
    }

    /**
     * represents the app admin context
     * <br><br>
     * <B>This class must not referred from code accessible from browser.
     * This class is intended to be used by server side code like Node.js.
     * If you use this class in code accessible by browser, your application client id and client secret could be stolen.
     * Attacker will be act as application admin and all the data in your application will be suffered.
     * </B>
     * Application administrator context. Entities obtained from this class will be manipulated by application admin.
     */
    class KiiAppAdminContext {
        /**
         * Creates a reference to a bucket operated by app admin.
         *     <br><br>The bucket will be created/accessed within this app's scope
         *
         * @param bucketName The name of the bucket the app should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *         Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *             success: function(adminContext) {
         *                 var bucket = adminContext.bucketWithName("myBucket");
         *                 // KiiBucket operation by app admin is available now.
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        bucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a encrypted bucket operated by app admin.
         *     <br><br>The bucket will be created/accessed within this app's scope
         *
         * @param bucketName The name of the bucket the app should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *         Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *             success: function(adminContext) {
         *                 var bucket = adminContext.encryptedBucketWithName("myBucket");
         *                 // KiiBucket operation by app admin is available now.
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        encryptedBucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a group operated by app admin.
         *     <br><br>
         *     <b>Note:</b>
         *     Returned instance from this API can not operate existing KiiGroup.<br>
         *     If you want to operate existing KiiGroup, please use {@link KiiAppAdminContext#groupWithURI} or {@link KiiAppAdminContext#groupWithID}.
         *
         * @param group name.
         *
         * @return A working KiiGroup object
         *
         * @example
         *         Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *             success: function(adminContext) {
         *                 var group = adminContext.groupWithName("newGroup");
         *                 // KiiGroup operation by app admin is available now.
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        groupWithName(
            group: string,
        ): KiiGroup;

        /**
         * Creates a reference to a user operated by app admin.
         *
         * @param user id.
         *
         * @return A working KiiUser object
         *
         * @example
         *         Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *             success: function(adminContext) {
         *                 var user = adminContext.userWithID("userid");
         *                 // KiiUser operation by app admin is available now.
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        userWithID(
            user: string,
        ): KiiUser;

        /**
         * Creates a reference to an object operated by app admin using object`s URI.
         *
         * @param object URI.
         *
         * @return A working KiiObject instance
         *
         * @throws If the URI is null, empty or does not have correct format.
         */
        objectWithURI(
            object: string,
        ): KiiObject;

        /**
         * Creates a reference to a group operated by app admin using group's ID.
         *     <br><br>
         *     <b>Note:</b>
         *     Returned instance from this API can operate existing KiiGroup.<br>
         *     If you want to create a new KiiGroup, please use {@link KiiAppAdminContext#groupWithName}.
         *
         * @param group ID.
         *
         * @return A working KiiGroup object
         *
         * @throws Thrown if passed groupID is null or empty.
         *
         * @example
         *         Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *             success: function(adminContext) {
         *                 var groupID = "0123456789abcdefghijklmno";
         *                 var group = adminContext.groupWithID(groupID);
         *                 // KiiGroup operation by app admin is available now.
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        groupWithID(
            group: string,
        ): KiiGroup;

        /**
         * Register new group own by specified user on Kii Cloud with specified ID.
         * This method can be used only by app admin.
         *
         * <br><br>If the group that has specified id already exists, registration will be failed.
         *
         * @param groupID ID of the KiiGroup
         * @param groupName Name of the KiiGroup
         * @param user id of owner
         * @param members An array of KiiUser objects to add to the group
         *
         * @return return promise object.
         *       <ul>
         *         <li>fulfill callback function: function(theSavedGroup). theSavedGroup is KiiGroup instance.</li>
         *         <li>reject callback function: function(error). error is an Error instance.
         *           <ul>
         *             <li>error.target is the KiiGroup instance which this method was called on.</li>
         *             <li>error.message</li>
         *             <li>error.addMembersArray is array of KiiUser to be added as memebers of this group.</li>
         *             <li>error.removeMembersArray is array of KiiUser to be removed from the memebers list of this group.</li>
         *           </ul>
         *         </li>
         *       </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *         success: function(adminContext) {
         *             var members = [];
         *             members.push(KiiUser.userWithID("Member User Id"));
         *             adminContext.registerGroupWithOwnerAndID("Group ID", "Group Name", "Owner User ID", members, {
         *                 success: function(theSavedGroup) {
         *                     // do something with the saved group
         *                 },
         *                 failure: function(theGroup, anErrorString, addMembersArray, removeMembersArray) {
         *                     // do something with the error response
         *                 }
         *             });
         *         },
         *         failure: function(errorString, errorCode) {
         *             // auth failed.
         *         }
         *     });
         *     // example to use Promise
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret").then(
         *         function(adminContext) {
         *             var members = [];
         *             members.push(KiiUser.userWithID("Member User Id"));
         *             return adminContext.registerGroupWithOwnerAndID("Group ID", "Group Name", "Owner User ID", members);
         *         }
         *     ).then(
         *         function(group) {
         *             // do something with the saved group
         *         }
         *     );
         */
        registerGroupWithOwnerAndID(
            groupID: string,
            groupName: string,
            user: string,
            members: KiiUser[],
            callbacks?: {
                success(adminContext: KiiAppAdminContext): any;
                failure(
                    theGroup: KiiGroup,
                    anErrorString: string,
                    addMembersArray: KiiUser[],
                    removeMembersArray: KiiUser[],
                ): any;
            },
        ): Promise<KiiAppAdminContext>;

        /**
         * Creates a reference to a group operated by app admin using group's URI.
         *     <br><br>
         *     <b>Note:</b>
         *     Returned instance from this API can operate existing KiiGroup.<br>
         *     If you want to create a new KiiGroup, please use {@link KiiAppAdminContext#groupWithName}.
         *
         * @param group URI.
         *
         * @return A working KiiGroup object
         *
         * @throws Thrown if the URI is null, empty or does not have correct format.
         *
         * @example
         *         Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *             success: function(adminContext) {
         *                 var groupUri = ...; // KiiGroup's URI
         *                 var group = adminContext.groupWithURI(groupUri);
         *                 // KiiGroup operation by app admin is available now.
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        groupWithURI(
            group: string,
        ): KiiGroup;

        /**
         * Find registered KiiUser with the email.<br>
         * If there are no user registers with the specified email or if there are but not verified email yet,
         * callbacks.failure or reject callback of promise will be called.<br>
         * If the email is null or empty, callbacks.failure or reject callback of promise will be callded.
         * <br><br>
         * <b>Note:</b>
         * <ul>
         * <li>If "Expose Full User Data To Others" is enabled in the application console, the response will contain full of the user data.</li>
         * <li>Otherwise, the response will only contain "userID", "loginName" and "displayName" field values if exist.</li>
         * </ul>
         *
         * @param email The email to find KiiUser who owns it.<br>
         *   Don't add prefix of "EMAIL:" described in REST API documentation. SDK will take care of it.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be omitted.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiAppAdminContext instance which this method was called on.</li>
         *         <li>params[1] is a found KiiUser instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiAppAdminContext instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *         success: function(adminContext) {
         *             adminContext.findUserByEmail("user_to_find@example.com", {
         *                 success: function(adminContext, theMatchedUser) {
         *                     // Do something with the found user
         *                 },
         *                 failure: function(adminContext, anErrorString) {
         *                     // Do something with the error response
         *                 }
         *             });
         *         },
         *         failure: function(errorString, errorCode) {
         *             // Auth failed.
         *         }
         *     });
         *
         *     // example to use Promise
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret").then(
         *         function(adminContext) {
         *             adminContext.findUserByEmail("user_to_find@example.com").then(
         *                 function(params) { // fullfill callback function
         *                     var adminContext = params[0];
         *                     var theMatchedUser = params[1];
         *                     // Do something with the found user
         *                 },
         *                 function(error) { // reject callback function
         *                     var adminContext = error.target;
         *                     var anErrorString = error.message;
         *                     // Do something with the error response
         *                 }
         *             );
         *         },
         *         function(error) {
         *           // Auth failed.
         *         }
         *     );
         */
        findUserByEmail(
            email: string,
            callbacks?: {
                success(adminContext: KiiAppAdminContext, theMatchedUser: KiiUser): any;
                failure(adminContext: KiiAppAdminContext, anErrorString: string): any;
            },
        ): Promise<[KiiAppAdminContext, KiiUser]>;

        /**
         * Find registered KiiUser with the phone.<br>
         * If there are no user registers with the specified phone or if there are but not verified phone yet,
         * callbacks.failure or reject callback of promise will be called.<br>
         * If the phone is null or empty, callbacks.failure or reject callback of promise will be called.
         * <br><br>
         * <b>Note:</b>
         * <ul>
         * <li>If "Expose Full User Data To Others" is enabled in the application console, the response will contain full of the user data.</li>
         * <li>Otherwise, the response will only contain "userID", "loginName" and "displayName" field values if exist.</li>
         * </ul>
         *
         * @param phone The phone number to find KiiUser who owns it.<br>
         *   Don't add prefix of "PHONE:" described in REST API documentation. SDK will take care of it.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be omitted.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiAppAdminContext instance which this method was called on.</li>
         *         <li>params[1] is a found KiiUser instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiAppAdminContext instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *         success: function(adminContext) {
         *             adminContext.findUserByPhone("phone_number_to_find", {
         *                 success: function(adminContext, theMatchedUser) {
         *                     // Do something with the found user
         *                 },
         *                 failure: function(adminContext, anErrorString) {
         *                     // Do something with the error response
         *                 }
         *             });
         *         },
         *         failure: function(errorString, errorCode) {
         *             // Auth failed.
         *         }
         *     });
         *
         *     // example to use Promise
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret").then(
         *         function(adminContext) {
         *             adminContext.findUserByPhone("phone_number_to_find").then(
         *                 function(params) { // fullfill callback function
         *                     var adminContext = params[0];
         *                     var theMatchedUser = params[1];
         *                     // Do something with the found user
         *                 },
         *                 function(error) { // reject callback function
         *                     var adminContext = error.target;
         *                     var anErrorString = error.message;
         *                     // Do something with the error response
         *                 }
         *             );
         *         },
         *         function(error) {
         *           // Auth failed.
         *         }
         *     );
         */
        findUserByPhone(
            phone: string,
            callbacks?: {
                success(adminContext: KiiAppAdminContext, theMatchedUser: KiiUser): any;
                failure(adminContext: KiiAppAdminContext, anErrorString: string): any;
            },
        ): Promise<[KiiAppAdminContext, KiiUser]>;

        /**
         * Find registered KiiUser with the user name.<br>
         * If there are no user registers with the specified user name, callbacks.failure or reject callback of promise will be called.<br>
         * If the user name is null or empty, callbacks.failure or reject callback of promise will be called.
         * <br><br>
         * <b>Note:</b>
         * <ul>
         * <li>If "Expose Full User Data To Others" is enabled in the application console, the response will contain full of the user data.</li>
         * <li>Otherwise, the response will only contain "userID", "loginName" and "displayName" field values if exist.</li>
         * </ul>
         *
         * @param username The user name to find KiiUser who owns it.<br>
         *   Don't add prefix of "LOGIN_NAME:" described in REST API documentation. SDK will take care of it.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be omitted.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiAppAdminContext instance which this method was called on.</li>
         *         <li>params[1] is a found KiiUser instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiAppAdminContext instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret", {
         *         success: function(adminContext) {
         *             adminContext.findUserByUsername("user_name_to_find", {
         *                 success: function(adminContext, theMatchedUser) {
         *                     // Do something with the found user
         *                 },
         *                 failure: function(adminContext, anErrorString) {
         *                     // Do something with the error response
         *                 }
         *             });
         *         },
         *         failure: function(errorString, errorCode) {
         *             // Auth failed.
         *         }
         *     });
         *     // example to use Promise
         *     Kii.authenticateAsAppAdmin("client-id", "client-secret").then(
         *         function(adminContext) {
         *             adminContext.findUserByUsername("user_name_to_find").then(
         *                 function(params) { // fullfill callback function
         *                     var adminContext = params[0];
         *                     var theMatchedUser = params[1];
         *                     // Do something with the found user
         *                 },
         *                 function(error) { // reject callback function
         *                     var adminContext = error.target;
         *                     var anErrorString = error.message;
         *                     // Do something with the error response
         *                 }
         *             );
         *         },
         *         function(error) {
         *           // Auth failed.
         *         }
         *     );
         */
        findUserByUsername(
            username: string,
            callbacks?: {
                success(adminContext: KiiAppAdminContext, theMatchedUser: KiiUser): any;
                failure(adminContext: KiiAppAdminContext, anErrorString: string): any;
            },
        ): Promise<[KiiAppAdminContext, KiiUser]>;

        /**
         * Register thing by app admin.
         * Method interface is same as {@link KiiThing#register()}.
         * Please refer to KiiThing document for details.
         *
         * @param fields of the thing to be registered. Please refer to {@link KiiThing#register()} for the details of fields.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is KiiThing instance with adminToken.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Assume you already have adminContext instance.
         *     adminContext.registerThing(
         *         {
         *             _vendorThingID: "thing-XXXX-YYYY-ZZZZZ",
         *             _password: "thing-password",
         *             _thingType: "thermometer",
         *             yourCustomObj: // Arbitrary key can be used.
         *             { // Object, Array, Number, String can be used. Should be compatible with JSON.
         *                 yourCustomKey1: "value",
         *                 yourCustomKey2: 100
         *             }
         *         },
         *         {
         *             success: function(thing) {
         *                 // Register Thing succeeded.
         *                 // Operation using thing instance in the parameter
         *                 // is authored by app admin.
         *             },
         *             failure: function(error) {
         *                 // Handle error.
         *             }
         *         }
         *     );
         *
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.registerThing(
         *         {
         *             _vendorThingID: "thing-XXXX-YYYY-ZZZZZ",
         *             _password: "thing-password",
         *             _thingType: "thermometer",
         *             yourCustomObj: // Arbitrary key can be used.
         *             { // Object, Array, Number, String can be used. Should be compatible with JSON.
         *                 yourCustomKey1: "value",
         *                 yourCustomKey2: 100
         *             }
         *         }
         *     ).then(
         *         function(thing) {
         *             // Register Thing succeeded.
         *             // Operation using thing instance in the parameter
         *             // is authored by app admin.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        registerThing(
            fields: KiiThingFields,
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Creates a reference to a thing operated by app admin.
         *
         * @param thing id.
         *
         * @return A working KiiThing object
         *
         * @example
         *         // Assume you already have adminContext instance.
         *         adminContext.thingWithID(thingID);
         */
        thingWithID(
            thing: string,
        ): KiiThing;

        /**
         * Register user/group as owner of specified thing by app admin.
         *
         * @param thingID The ID of thing
         * @param owner instnce of KiiUser/KiiGroup to be registered as owner.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiUser/KiiGroup instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.registerOwnerWithThingID("th.xxxx-yyyy-zzzz", group, {
         *         success: function(group) {
         *             // Register owner succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.registerOwnerWithThingID("th.xxxx-yyyy-zzzz", group).then(
         *         function(params) {
         *             // Register owner succeeded.
         *             var group = params[0];
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        registerOwnerWithThingID<T extends KiiUser | KiiGroup>(
            thingID: string,
            owner: T,
            callbacks?: { success(group: T): any; failure(error: Error): any },
        ): Promise<T>;

        /**
         * Register user/group as owner of specified thing by app admin.
         *
         * @param vendorThingID The vendor thing ID of thing
         * @param owner instance of KiiUser/KiiGroupd to be registered as owner.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiUser/KiiGroup instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.registerOwnerWithVendorThingID("xxxx-yyyy-zzzz", group, {
         *         success: function(group) {
         *             // Register owner succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.registerOwnerWithVendorThingID("xxxx-yyyy-zzzz", group).then(
         *         function(group) {
         *             // Register owner succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        registerOwnerWithVendorThingID<T extends KiiUser | KiiGroup>(
            vendorThingID: string,
            owner: T,
            callbacks?: { success(group: T): any; failure(error: Error): any },
        ): Promise<T>;

        /**
         * Load thing with vendor thing ID by app admin.
         * Method interface is same as {@link KiiThing#loadWithVendorThingID()}.
         * Please refer to KiiThing document for details.
         *
         * @param vendorThingID registered vendor thing id.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is KiiThing instance with adminToken.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Assume you already have adminContext instance.
         *     adminContext.loadThingWithVendorThingID("thing-xxxx-yyyy",{
         *         success: function(thing) {
         *             // Load succeeded.
         *             // Operation using thing instance in the parameter
         *             // is authored by app admin.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.loadThingWithVendorThingID("thing-xxxx-yyyy").then(
         *         function(thing) {
         *             // Load succeeded.
         *             // Operation using thing instance in the parameter
         *             // is authored by app admin.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        loadThingWithVendorThingID(
            vendorThingID: string,
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Load thing with thing ID by app admin.
         * Method interface is same as {@link KiiThing#loadWithThingID()}.
         * Please refer to KiiThing document for details.
         *
         * @param thingID registered thing id.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is KiiThing instance with adminToken.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Assume you already have adminContext instance.
         *     adminContext.loadThingWithThingID("thing-xxxx-yyyy",{
         *         success: function(thing) {
         *             // Load succeeded.
         *             // Operation using thing instance in the parameter
         *             // is authored by app admin.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.loadThingWithThingID("thing-xxxx-yyyy").then(
         *         function(thing) {
         *             // Load succeeded.
         *             // Operation using thing instance in the parameter
         *             // is authored by app admin.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        loadThingWithThingID(
            thingID: string,
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Creates a reference to a topic operated by app admin
         *
         * @param topicName name of the topic. Must be a not empty string.
         *
         * @return topic instance.
         */
        topicWithName(
            topicName: string,
        ): KiiTopic;

        /**
         * Gets a list of topics in app scope
         *
         * @param callbacks An object with callback methods defined
         * @param paginationKey You can specify the pagination key with the nextPaginationKey passed by callbacks.success. If empty string or no string object is provided, this API regards no
         * paginationKey specified.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is array of KiiTopic instances.</li>
         *           <li>params[1] is string of nextPaginationKey.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is a KiiAppAdminContext instance which this method was called on.</li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Assume you already have adminContext instance.
         *     adminContext.listTopics({
         *         success: function(topicList, nextPaginationKey) {
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 Kii.listTopics({
         *                     success: function(topicList, nextPaginationKey) {...},
         *                     failure: function(anErrorString) {...}
         *                 }, nextPaginationKey);
         *             }
         *         },
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     // Assume you already have adminContext instance.
         *     adminContext.listTopics().then(
         *         function(params) {
         *             var topicList = params[0];
         *             var nextPaginationKey = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 adminContext.listTopics(null, nextPaginationKey).then(
         *                     function(params) {...},
         *                     function(error) {...}
         *                 );
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        listTopics(
            callbacks?: {
                success(topicList: KiiTopic[], nextPaginationKey: string): any;
                failure(anErrorString: string): any;
            },
            paginationKey?: string,
        ): Promise<[KiiTopic[], string]>;
    }

    /**
     * Represents a KiiBucket object
     */
    class KiiBucket {
        /**
         * The name of this bucket
         */
        getBucketName(): string;

        /**
         * Create a KiiObject within the current bucket
         *
         * <br><br>The object will not be created on the server until the KiiObject is explicitly saved. This method simply returns an empty working KiiObject.
         *
         * @return An empty KiiObject with no specific type
         *
         * @example
         *     var bucket = . . .; // a KiiBucket
         *     var object = bucket.createObject();
         */
        createObject(): KiiObject;

        /**
         * Create a KiiObject within the current bucket, with type
         *
         * <br><br>The object will not be created on the server until the KiiObject is explicitly saved. This method simply returns an empty working KiiObject with a specified type. The type allows
         * for better indexing and improved query results. It is recommended to use this method - but for lazy creation, the createObject method is also available.
         *
         * @param type A string representing the desired object type
         *
         * @return An empty KiiObject with specified type
         *
         * @example
         *     var bucket = . . .; // a KiiBucket
         *     var object = bucket.createObjectWithType("scores");
         */
        createObjectWithType(
            type: string,
        ): KiiObject;

        /**
         * Create a KiiObject within the current bucket, specifying its ID.
         *
         * <br><br> If the object has not exist on KiiCloud, {@link KiiObject#saveAllFields(callback)}
         *   will create new Object which has ID specified in the argument.
         *   If the object exist in KiiCloud, references the existing object which has
         *   specified ID. use {@link KiiObject#refresh(callback)} to retrieve the contents of
         *   KiiObject.
         *
         * @param objectID ID of the obeject you want to instantiate.
         *
         * @return KiiObject instance.
         *
         * @throws objectID is not acceptable.
         *      Refer to {@link KiiObject.isValidObjectID(string)} for details of acceptable string.
         *
         * @example
         *      var bucket = . . .; // KiiBucket
         *      var object = bucket.createObjectWithID('__OBJECT_ID_');
         */
        createObjectWithID(
            objectID: string,
        ): KiiObject;

        /**
         * Get the ACL handle for this bucket
         *
         * <br><br>Any KiiACLEntry objects added or revoked from this ACL object will be appended to/removed from the server on ACL save.
         *
         * @return A KiiACL object associated with this KiiObject
         *
         * @example
         *         var bucket = . . .; // a KiiBucket
         *         var acl = bucket.acl();
         */
        acl(): KiiACL;

        /**
         * Perform a query on the given bucket
         *
         * <br><br>The query will be executed against the server, returning a result set.
         *
         * @param query An object with callback methods defined
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a performed KiiQuery instance.</li>
         *         <li>params[1] is resultSet Array instance. Could be KiiObject, KiiGroup, KiiUser, etc.</li>
         *         <li>params[2] is a KiiQuery instance for next query. If there are no more results to be retrieved, it will be null.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiBucket instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var bucket = . . .; // a KiiBucket
         *     var queryObject = . . .; // a KiiQuery
         *
         *     // define the callbacks (stored in a variable for reusability)
         *     var queryCallbacks = {
         *         success: function(queryPerformed, resultSet, nextQuery) {
         *             // do something with the results
         *             for(var i=0; i&lt;resultSet.length; i++) {
         *                 // do something with the object
         *                 // resultSet[i]; // could be KiiObject, KiiGroup, KiiUser, etc
         *             }
         *
         *             // if there are more results to be retrieved
         *             if(nextQuery != null) {
         *
         *                 // get them and repeat recursively until no results remain
         *                 bucket.executeQuery(nextQuery, queryCallbacks);
         *             }
         *         },
         *
         *         failure: function(bucket, anErrorString) {
         *             // do something with the error response
         *         }
         *     };
         *     bucket.executeQuery(queryObject, queryCallbacks);
         *
         *     // example to use Promise
         *     var bucket = . . .; // a KiiBucket
         *     var queryObject = . . .; // a KiiQuery
         *     bucket.executeQuery(queryObject).then(
         *         function(params) {
         *             var queryPerformed = params[0];
         *             var resultSet = params[1];
         *             var nextQuery = params[2];
         *             // do something with the results
         *             for(var i=0; i&lt;resultSet.length; i++) {
         *                 // do something with the object
         *                 // resultSet[i]; // could be KiiObject, KiiGroup, KiiUser, etc
         *             }
         *
         *             // if there are more results to be retrieved
         *             if(nextQuery != null) {
         *
         *                 // get them and repeat recursively until no results remain
         *                 bucket.executeQuery(nextQuery).then(
         *                     function(params) {
         *                         // next query success
         *                     },
         *                     function(error) {
         *                         // next query failed, please handle the error
         *                     }
         *                 );
         *             }
         *
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        executeQuery<T>(
            query: KiiQuery,
            callbacks?: {
                success(queryPerformed: KiiQuery, resultSet: T[], nextQuery: KiiQuery): any;
                failure(bucket: KiiBucket, anErrorString: string): any;
            },
        ): Promise<[KiiQuery, T[], KiiQuery]>;

        /**
         * Execute count aggregation of specified query on current bucket.
         * Query that passed as nextQuery in success callback of {@link #executeQuery}, is not
         * supported, callbacks.failure will be fired in this case.
         *
         * @param query to be executed. If null, the operation will be same as {@link #count}.
         * @param callbacks An object with callback methods defined.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiBucket instance which this method was called on.</li>
         *         <li>params[1] is a KiiQuery instance.</li>
         *         <li>params[2] is an integer count result. </li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiBucket instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var bucket = . . .; // a KiiBucket
         *     var queryObject = . . .; // a KiiQuery
         *
         *     // define the callbacks
         *     var callbacks = {
         *         success: function(bucket, query, count) {
         *             // do something with the results
         *         },
         *
         *         failure: function(bucket, errorString) {
         *             // error happened.
         *         }
         *     };
         *
         *     bucket.countWithQuery(queryObject, callbacks);
         *
         *     // example to use Promise
         *     var bucket = . . .; // a KiiBucket
         *     var queryObject = . . .; // a KiiQuery
         *
         *     bucket.countWithQuery(queryObject, callbacks).then(
         *         function(params) {
         *             var bucket = params[0];
         *             var query = params[1];
         *             var count = params[2];
         *             // do something with the results
         *         },
         *         function(error) {
         *             var bucket = error.target;
         *             var errorString = error.message;
         *             // error happened.
         *         }
         *     );
         */
        countWithQuery(
            query: KiiQuery,
            callbacks?: {
                success(bucket: KiiBucket, query: KiiQuery, count: number): any;
                failure(bucket: KiiBucket, errorString: string): any;
            },
        ): Promise<[KiiBucket, KiiQuery, number]>;

        /**
         * Execute count aggregation of all clause query on current bucket.
         *
         * @param callbacks An object with callback methods defined.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiBucket instance which this method was called on.</li>
         *         <li>params[1] is a KiiQuery instance.</li>
         *         <li>params[2] is an integer count result. </li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiBucket instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var bucket = . . .; // a KiiBucket
         *     // define the callbacks
         *     var callbacks = {
         *         success: function(bucket, query, count) {
         *             // do something with the results
         *         },
         *
         *         failure: function(bucket, errorString) {
         *             // error happened.
         *         }
         *     };
         *
         *     bucket.count(callbacks);
         *
         *     // example to use Promise
         *     var bucket = . . .; // a KiiBucket
         *     var queryObject = . . .; // a KiiQuery
         *
         *     bucket.count().then(
         *         function(params) {
         *             var bucket = params[0];
         *             var count = params[2];
         *             // do something with the results
         *         },
         *         function(error) {
         *             var bucket = error.target;
         *             var errorString = error.message;
         *             // error happened.
         *         }
         *     );
         */
        count(
            callbacks?: {
                success(bucket: KiiBucket, query: KiiQuery, count: number): any;
                failure(bucket: KiiBucket, errorString: string): any;
            },
        ): Promise<[KiiBucket, KiiQuery, number]>;

        /**
         * Delete the given bucket from the server
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(deletedBucket). deletedBucket is KiiBucket instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiBucket instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var bucket = . . .; // a KiiBucket
         *     bucket.delete({
         *         success: function(deletedBucket) {
         *             // do something with the result
         *         },
         *
         *         failure: function(bucketToDelete, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var bucket = . . .; // a KiiBucket
         *     bucket.delete({
         *         success: function(deletedBucket) {
         *             // do something with the result
         *         },
         *
         *         failure: function(bucketToDelete, anErrorString) {
         *             // do something with the error response
         *         }
         *     }).then(
         *         function(deletedBucket) {
         *           // do something with the result
         *         },
         *         function(error) {
         *           // do something with the error response
         *         }
         *     );
         */
        delete(
            callbacks?: {
                success(deletedBucket: KiiBucket): any;
                failure(bucketToDelete: KiiBucket, anErrorString: string): any;
            },
        ): Promise<KiiBucket>;
    }

    /**
     * Represents a KiiClause expression object
     */
    class KiiClause {
        /**
         * Create a KiiClause with the AND operator concatenating multiple KiiClause objects
         *
         * @param A variable-length list of KiiClause objects to concatenate
         *
         * @example
         *     KiiClause clause = KiiClause.and(clause1, clause2, clause3, . . .)
         */
        static and(
            ...A: KiiClause[]
        ): KiiClause;

        /**
         * Create a KiiClause with the OR operator concatenating multiple KiiClause objects
         * <br><br>
         * <b>Note:</b>
         * Query performance will be worse as the number of objects in bucket increases, so we recommend you avoid the OR clause if possible.
         *
         * @param A variable-length list of KiiClause objects to concatenate
         *
         * @example
         *     KiiClause clause = KiiClause.or(clause1, clause2, clause3, . . .)
         */
        static or(
            ...A: KiiClause[]
        ): KiiClause;

        /**
         * Create a KiiClause with the NOT operator concatenating a KiiClause object
         * <br><br>
         * <b>Note:</b>
         * Query performance will be worse as the number of objects in bucket increases, so we recommend you avoid the NOT clause if possible.
         *
         * @param clause KiiClause object to negate
         */
        static not(
            clause: KiiClause,
        ): KiiClause;

        /**
         * Create an expression of the form (key == value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static equals(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create an expression of the form (key != value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static notEquals(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create an expression of the form (key > value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static greaterThan(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create an expression of the form (key >= value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static greaterThanOrEqual(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create an expression of the form (key < value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static lessThan(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create an expression of the form (key <= value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static lessThanOrEqual(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create an expression of the form (key in values)
         *
         * @param key The key to compare
         * @param values to compare
         */
        static inClause(
            key: string,
            values: any[],
        ): KiiClause;

        /**
         * Create an expression of the form (key STARTS WITH value)
         *
         * @param key The key to compare
         * @param value the value to compare
         */
        static startsWith(
            key: string,
            value: any,
        ): KiiClause;

        /**
         * Create a clause of geo distance. This clause inquires objects in the specified circle.
         *
         * @param key Name of the key to inquire, which holds geo point.
         * @param center Geo point which specify center of the circle.
         * @param radius Radius of the circle. unit is meter. value should be in range of ]0, 20000000]
         * @param putDistanceInto Used for retrieve distance from the center from the query result.Must match the pattern "^[a-zA-Z_][a-zA-Z0-9_]*$".
         *   If the specified value is null, query result will not contain the distance.
         *   <b>Note:</b> You can get the results in ascending order of distances from center. To do so, build the orderBy field  by
         *   "_calculated.{specified value of putDistanceInto}" and pass it in {@link KiiQuery#sortByAsc}. Note that, descending order
         *   of distances is not supported. The unit of distance is meter.
         *
         * @return KiiClaluse reference.
         *
         * @throws <li> Specified key is not a string or an empty string.</li>
         *             <li>center is not an object of KiiGeoPoint.</li>
         *             <li>putDistanceInto is not a string or an empty string.</li>
         *
         * @example
         *             var putDistanceInto = "distanceFromCurrentLoc";
         *             var currentLoc = ..; // current location
         *             var clause = KiiClause.geoDistance("location", currentLoc, 4000, putDistanceInto);
         *             var query = KiiQuery.queryWithClause(clause);
         *             // Sort by distances by ascending order.(Optional, use only if you intend to retrieve the distances in a ascending order).
         *             var orderByKey = "_calculated." + putDistanceInto;
         *             query.sortByAsc(orderByKey);
         *             // Define the callbacks
         *             var bucket = Kii.bucketWithName("MyBucket");
         *             var queryCallback = {
         *                 success: function(queryPerformed, resultSet, nextQuery) {
         *                     // check the first object from resultSet.
         *                     var object = resultSet[0];
         *                     var point = object.get("location");
         *                     var distanceToMyLocation = object.get("_calculated")[putDistanceInto];
         *                 },
         *                 failure: function(queryPerformed, anErrorString) {
         *                     // do something with the error response
         *                 }
         *             };
         *             bucket.executeQuery(query, queryCallback);
         */
        static geoDistance(
            key: string,
            center: KiiGeoPoint,
            radius: number,
            putDistanceInto: string,
        ): KiiClause;

        /**
         * Create a clause of geo box. This clause inquires objects in the specified rectangle.
         *     Rectangle would be placed parallel to the equator with specified coordinates of the corner.
         *
         * @param key Key to inquire which holds geo point.
         * @param northEast North-Eest corner of the rectangle.
         * @param southWest South-Wast corner of the rectangle.
         *
         * @return KiiClause reference.
         *
         * @throws <li> Specified key is not a string or is an empty string.</li>
         *             <li>northEast or southWest is not a reference of KiiGeoPoint.</li>
         */
        static geoBox(
            key: string,
            northEast: KiiGeoPoint,
            southWest: KiiGeoPoint,
        ): KiiClause;

        /**
         * Create an expression to returns all entities that have a specified field and type.
         *
         * @param key name of the specified field.
         * @param fieldType The type of the content of the field. The type of the content of the field must be provided, possible values are "STRING", "INTEGER", "DECIMAL" and "BOOLEAN".
         */
        static hasField(
            key: string,
            fieldType: string,
        ): KiiClause;
    }

    /**
     * A Parser for error string or error object returned by SDK.
     */
    class KiiErrorParser {
        /**
         * Parse an error string or error object returned by SDK.
         *
         * @param error An error string or error object
         *
         * @return return parsed error object.
         *
         * @example
         *     var err = KiiErrorParser.parse(errorString);
         *     var httpStatus = err.status;
         *     if (httpStatus == 0) {
         *         // NetworkError
         *     } else if (httpStatus == -1) {
         *         // Error is not related the http error. eg. argument error, illegal state error, etc.
         *     } else if (httpStatus == -2) {
         *         // Unknown error is detected.
         *         // Please confirm that you are using the latest version of SDK.
         *     } else if (httpStatus >= 400 && httpStatus < 600) {
         *         // Http error
         *     }
         *     var errorCode = err.code;
         *     var errorMessage = err.message;
         */
        static parse<T extends string | Error>(
            error: T,
        ): KiiError;
    }

    /**
     * Represents Geo Point.
     */
    class KiiGeoPoint {
        /**
         * Return the latitide of this point.
         */
        getLatitude(): number;

        /**
         * Return the longitude of this point.
         */
        getLongitude(): number;

        /**
         * Create a geo point with the given latitude and longitude.
         *
         * @param latitude Latitude of the point in degrees. Valid if the value is greater than -90 degrees and less than +90 degrees.
         * @param longitude Longitude of the point in degrees. Valid if the value is greater than -180 degrees and less than +180 degrees.
         *
         * @return A new reference of KiiGeoPoint.
         *
         * @throws Specified latitude or longitude is invalid.
         *
         * @example
         *         var point = KiiGeoPoint.geoPoint(35.07, 139.02);
         */
        static geoPoint(
            latitude: number,
            longitude: number,
        ): KiiGeoPoint;
    }

    /**
     * Represents a KiiGroup object
     */
    class KiiGroup {
        /**
         * @deprecated Use {@link KiiGroup.getId} instead.
         *   Get the UUID of the given group, assigned by the server
         */
        getUUID(): string;

        /**
         * Get the ID of the current KiiGroup instance.
         *
         * @return Id of the group or null if the group has not saved to cloud.
         */
        getID(): string;

        /**
         * The name of this group
         */
        getName(): string;

        /**
         * Returns the owner of this group if this group holds the information of owner.
         *
         * Group will holds the information of owner when "saving group on cloud" or "retrieving group info/owner from cloud".
         * The cache will not be shared among the different instances of KiiGroup.
         * <UL>
         * <LI>This API will not access to server.
         * To update the group owner information on cloud, please call {@link KiiGroup#refresh} or {@link KiiGroup#getOwner}.
         * </LI>
         * <LI>This API does not return all the properties of the owner.
         * To get all owner properties, {@link KiiUser#refresh} is necessary.</LI>
         * </UL>
         *
         * @return KiiUser who owns this group, undefined if this group doesn't hold the information of owner yet.
         *
         * @see KiiGroup#getOwner
         */
        getCachedOwner(): KiiUser;

        /**
         * Get a specifically formatted string referencing the group
         *
         * <br><br>The group must exist in the cloud (have a valid UUID).
         *
         * @return A URI string based on the current group. null if a URI couldn't be generated.
         *
         * @example
         *     var group = . . .; // a KiiGroup
         *     var uri = group.objectURI();
         */
        objectURI(): string;

        /**
         * Register new group own by current user on Kii Cloud with specified ID.
         *
         * <br><br>If the group that has specified id already exists, registration will be failed.
         *
         * @param groupID ID of the KiiGroup
         * @param groupName Name of the KiiGroup
         * @param members An array of KiiUser objects to add to the group
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *       <ul>
         *         <li>fulfill callback function: function(theSavedGroup). theSavedGroup is KiiGroup instance.</li>
         *         <li>reject callback function: function(error). error is an Error instance.
         *           <ul>
         *             <li>error.target is the KiiGroup instance which this method was called on.</li>
         *             <li>error.message</li>
         *             <li>error.addMembersArray is array of KiiUser to be added as memebers of this group.</li>
         *             <li>error.removeMembersArray is array of KiiUser to be removed from the memebers list of this group.</li>
         *           </ul>
         *         </li>
         *       </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var members = [];
         *     members.push(KiiUser.userWithID("Member User Id"));
         *     KiiGroup.registerGroupWithID("Group ID", "Group Name", members, {
         *         success: function(theSavedGroup) {
         *             // do something with the saved group
         *         },
         *         failure: function(theGroup, anErrorString, addMembersArray, removeMembersArray) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var members = [];
         *     members.push(KiiUser.userWithID("Member User Id"));
         *     KiiGroup.registerGroupWithID("Group ID", "Group Name", members).then(
         *         function(theSavedGroup) {
         *             // do something with the saved group
         *         },
         *         function(error) {
         *             var theGroup = error.target;
         *             var anErrorString = error.message;
         *             var addMembersArray = error.addMembersArray;
         *             // do something with the error response
         *     });
         */
        static registerGroupWithID(
            groupID: string,
            groupName: string,
            members: KiiUser[],
            callbacks?: {
                success(theSavedGroup: KiiGroup): any;
                failure(
                    theGroup: KiiGroup,
                    anErrorString: string,
                    addMembersArray: KiiUser[],
                    removeMembersArray: KiiUser[],
                ): any;
            },
        ): Promise<KiiGroup>;

        /**
         * Creates a reference to a bucket for this group
         *
         * <br><br>The bucket will be created/accessed within this group's scope
         *
         * @param bucketName The name of the bucket the user should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *     var group = . . .; // a KiiGroup
         *     var bucket = group.bucketWithName("myBucket");
         */
        bucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a encrypted bucket for this group
         *
         * <br><br>The bucket will be created/accessed within this group's scope
         *
         * @param bucketName The name of the bucket the user should create/access
         *
         * @return A working KiiEncryptedBucket object
         *
         * @example
         *     var group = . . .; // a KiiGroup
         *     var bucket = group.encryptedBucketWithName("myBucket");
         */
        encryptedBucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Adds a user to the given group
         *
         * <br><br>This method will NOT access the server immediately. You must call save to add the user on the server. This allows multiple users to be added/removed before calling save.
         *
         * @param member The user to be added to the group
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     var group = . . .; // a KiiGroup
         *     group.addUser(user);
         *     group.save(callbacks);
         */
        addUser(
            member: KiiUser,
        ): void;

        /**
         * Removes a user from the given group
         *
         * <br><br>This method will NOT access the server immediately. You must call save to remove the user on the server. This allows multiple users to be added/removed before calling save.
         *
         * @param member The user to be added to the group
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     var group = . . .; // a KiiGroup
         *     group.removeUser(user);
         *     group.save(callbacks);
         */
        removeUser(
            member: KiiUser,
        ): void;

        /**
         * Gets a list of all current members of a group
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiGroup instance which this method was called on.</li>
         *         <li>params[1] is array of memeber KiiUser instances.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiGroup instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.getMemberList({
         *         success: function(theGroup, memberList) {
         *             // do something with the result
         *             for(var i=0; i&lt;memberList.length; i++){
         *                 var u = memberList[i]; // a KiiUser within the group
         *             }
         *         },
         *
         *         failure: function(theGroup, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.getMemberList().then(
         *         function(params) {
         *             var theGroup = params[0];
         *             var memberlist = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;memberList.length; i++){
         *                 var u = memberList[i]; // a KiiUser within the group
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        getMemberList(
            callbacks?: {
                success(theGroup: KiiGroup, memberList: KiiUser[]): any;
                failure(theGroup: KiiGroup, anErrorString: string): any;
            },
        ): Promise<[KiiGroup, KiiUser[]]>;

        /**
         * Updates the group name on the server
         *
         * @param newName A String of the desired group name
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theRenamedGroup). theRenamedGroup is KiiGroup instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiGroup instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.changeGroupName("myNewName", {
         *         success: function(theRenamedGroup) {
         *             // do something with the group
         *         },
         *
         *         failure: function(theGroup, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.changeGroupName("myNewName").then(
         *         function(theRenamedGroup) {
         *             // do something with the group
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        changeGroupName(
            newName: string,
            callbacks?: {
                success(theRenamedGroup: KiiGroup): any;
                failure(theGroup: KiiGroup, anErrorString: string): any;
            },
        ): Promise<KiiGroup>;

        /**
         * Saves the latest group values to the server
         *
         * <br><br>If the group does not yet exist, it will be created. If the group already exists, the members that have changed will be updated accordingly. If the group already exists and there is
         * no updates of members, it will allways succeed but does not execute update. To change the name of group, use {@link #changeGroupName}.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *       <ul>
         *         <li>fulfill callback function: function(theSavedGroup). theSavedGroup is KiiGroup instance.</li>
         *         <li>reject callback function: function(error). error is an Error instance.
         *           <ul>
         *             <li>error.target is the KiiGroup instance which this method was called on.</li>
         *             <li>error.message</li>
         *             <li>error.addMembersArray is array of KiiUser to be added as memebers of this group.</li>
         *             <li>error.removeMembersArray is array of KiiUser to be removed from the memebers list of this group.</li>
         *           </ul>
         *         </li>
         *       </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.save({
         *         success: function(theSavedGroup) {
         *             // do something with the saved group
         *         },
         *
         *         failure: function(theGroup, anErrorString, addMembersArray, removeMembersArray) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.save().then(
         *         function(theSavedGroup) {
         *             // do something with the saved group
         *         },
         *         function(error) {
         *             var theGroup = error.target;
         *             var anErrorString = error.message;
         *             var addMembersArray = error.addMembersArray;
         *             var removeMembersArray = error.removeMembersArray;
         *             // do something with the error response
         *     });
         */
        save(
            callbacks?: {
                success(theSavedGroup: KiiGroup): any;
                failure(
                    theGroup: KiiGroup,
                    anErrorString: string,
                    addMembersArray: KiiUser[],
                    removeMembersArray: KiiUser[],
                ): any;
            },
        ): Promise<KiiGroup>;

        /**
         * Saves the latest group values to the server with specified owner.
         * This method can be used only by the group owner or app admin.
         *
         * <br><br>If the group does not yet exist, it will be created. If the group already exists, the members and owner that have changed will be updated accordingly. If the group already exists
         * and there is no updates of members and owner, it will allways succeed but does not execute update. To change the name of group, use {@link #changeGroupName}.
         *
         * @param user id of owner
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *       <ul>
         *         <li>fulfill callback function: function(theSavedGroup). theSavedGroup is KiiGroup instance.</li>
         *         <li>reject callback function: function(error). error is an Error instance.
         *           <ul>
         *             <li>error.target is the KiiGroup instance which this method was called on.</li>
         *             <li>error.message</li>
         *             <li>error.addMembersArray is array of KiiUser to be added as memebers of this group.</li>
         *             <li>error.removeMembersArray is array of KiiUser to be removed from the memebers list of this group.</li>
         *           </ul>
         *         </li>
         *       </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.saveWithOwner("UserID of owner", {
         *         success: function(theSavedGroup) {
         *             // do something with the saved group
         *         },
         *
         *         failure: function(theGroup, anErrorString, addMembersArray, removeMembersArray) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.saveWithOwner("UserID of owner").then(
         *         function(theSavedGroup) {
         *             // do something with the saved group
         *         },
         *         function(error) {
         *             var theGroup = error.target;
         *             var anErrorString = error.message;
         *             var addMembersArray = error.addMembersArray;
         *             var removeMembersArray = error.removeMembersArray;
         *             // do something with the error response
         *     });
         */
        saveWithOwner(
            user: string,
            callbacks?: {
                success(theSavedGroup: KiiGroup): any;
                failure(
                    theGroup: KiiGroup,
                    anErrorString: string,
                    addMembersArray: KiiUser[],
                    removeMembersArray: KiiUser[],
                ): any;
            },
        ): Promise<KiiGroup>;

        /**
         * Updates the local group's data with the group data on the server
         *
         * <br><br>The group must exist on the server. Local data will be overwritten.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theRefreshedGroup). theRefreshedGroup is KiiGroup instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiGroup instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.refresh({
         *         success: function(theRefreshedGroup) {
         *             // do something with the refreshed group
         *         },
         *
         *         failure: function(theGroup, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.refresh().then(
         *         function(theRefreshedGroup) {
         *             // do something with the refreshed group
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        refresh(
            callbacks?: {
                success(theRefreshedGroup: KiiGroup): any;
                failure(theGroup: KiiGroup, anErrorString: string): any;
            },
        ): Promise<KiiGroup>;

        /**
         * Delete the group from the server
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theDeletedGroup). theDeletedGroup is KiiGroup instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiGroup instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.delete({
         *         success: function(theDeletedGroup) {
         *             // do something
         *         },
         *
         *         failure: function(theGroup, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.delete({
         *         success: function(theDeletedGroup) {
         *         },
         *
         *         failure: function(theGroup, anErrorString) {
         *         }
         *     }).then(
         *         function(theDeletedGroup) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        delete(
            callbacks?: {
                success(theDeletedGroup: KiiGroup): any;
                failure(theGroup: KiiGroup, anErrorString: string): any;
            },
        ): Promise<KiiGroup>;

        /**
         * Gets the owner of the associated group
         *
         * This API does not return all the properties of the owner.
         * To get all owner properties, {@link KiiUser#refresh} is necessary.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiGroup instance which this method was called on.</li>
         *         <li>params[1] is an group owner KiiUser instances.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiGroup instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.getOwner({
         *         success: function(theGroup, theOwner) {
         *             // do something
         *         },
         *         failure: function(theGroup, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var group = . . .; // a KiiGroup
         *     group.getOwner().then(
         *         function(params) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        getOwner(
            callbacks?: {
                success(theGroup: KiiGroup, theOwner: KiiUser): any;
                failure(theGroup: KiiGroup, anErrorString: string): any;
            },
        ): Promise<[KiiGroup, KiiUser]>;

        /**
         * Creates a reference to a group with the given name
         * <br><br>
         * <b>Note:</b>
         * Returned instance from this API can not operate existing KiiGroup.<br>
         * If you want to operate existing KiiGroup, please use {@link KiiGroup.groupWithURI}.
         *
         * @param groupName An application-specific group name
         *
         * @return A new KiiGroup reference
         *
         * @example
         *     var group = new KiiGroup.groupWithName("myGroup");
         */
        static groupWithName(
            groupName: string,
        ): KiiGroup;

        /**
         * Creates a reference to a group with the given name and a list of default members
         * <br><br>
         * <b>Note:</b>
         * Returned instance from this API can not operate existing KiiGroup.<br>
         * If you want to operate existing KiiGroup, please use {@link KiiGroup.groupWithURI}.
         *
         * @param groupName An application-specific group name
         * @param members An array of KiiUser objects to add to the group
         *
         * @return A new KiiGroup reference
         *
         * @example
         *     var group = new KiiGroup.groupWithName("myGroup", members);
         */
        static groupWithNameAndMembers(
            groupName: string,
            members: KiiUser[],
        ): KiiGroup;

        /**
         * Instantiate KiiGroup that refers to existing group which has specified ID.
         * You have to specify the ID of existing KiiGroup. Unlike KiiObject,
         * you can not assign ID in the client side.<br>
         * <b>NOTE</b>: This API does not access to the server.
         * After instantiation, call {@link KiiGroup#refresh} to fetch the properties.
         *
         * @param groupId ID of the KiiGroup to instantiate.
         *
         * @return instance of KiiGroup.
         *
         * @throws when passed groupID is empty or null.
         *
         * @example
         *     var group = new KiiUser.groupWithID("__GROUP_ID__");
         */
        static groupWithID(
            groupId: string,
        ): KiiGroup;

        /**
         * Generate a new KiiGroup based on a given URI
         * <br><br>
         * <b>Note:</b>
         * Returned instance from this API can operate existing KiiGroup.<br>
         * If you want to create a new KiiGroup, please use {@link KiiGroup.groupWithName}.
         *
         * @param uri The URI of the group to be represented
         *
         * @return A new KiiGroup with its parameters filled in from the URI
         *
         * @throws If the URI given is invalid
         *
         * @example
         *     var group = new KiiGroup.groupWithURI("kiicloud://myuri");
         */
        static groupWithURI(
            uri: string,
        ): KiiGroup;

        /**
         * Instantiate topic belongs to this group.
         *
         * @param topicName name of the topic. Must be a not empty string.
         *
         * @return topic instance.
         */
        topicWithName(
            topicName: string,
        ): KiiTopic;

        /**
         * Gets a list of topics in this group scope
         *
         * @param callbacks An object with callback methods defined
         * @param paginationKey You can specify the pagination key with the nextPaginationKey passed by callbacks.success. If empty string or no string object is provided, this API regards no
         * paginationKey specified.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is array of KiiTopic instances.</li>
         *           <li>params[1] is string of nextPaginationKey.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is the KiiGroup instance which this method was called on. </li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var group = . . .; // a KiiGroup
         *     group.listTopics({
         *         success: function(topicList, nextPaginationKey) {
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 group.listTopics({
         *                     success: function(topicList, nextPaginationKey) {...},
         *                     failure: function(anErrorString) {...}
         *                 }, nextPaginationKey);
         *             }
         *         },
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use promise
         *     var group = . . .; // a KiiGroup
         *     group.listTopics().then(
         *         function(params) {
         *             var topicList = params[0];
         *             var nextPaginationKey = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 group.listTopics(null, nextPaginationKey).then(
         *                     function(params) {...},
         *                     function(error) {...}
         *                 );
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        listTopics(
            callbacks?: {
                success(topicList: KiiTopic[], nextPaginationKey: string): any;
                failure(anErrorString: string): any;
            },
            paginationKey?: string,
        ): Promise<[KiiTopic[], string]>;
    }

    /**
     * Represents a KiiObject object
     */
    class KiiObject {
        /**
         * Get the UUID of the given object, assigned by the server
         */
        getUUID(): string;

        /**
         * Get Id of the object or null if the object ID hasn't been assigned.
         */
        getID(): string;

        /**
         * Get the server's creation date of this object
         */
        getCreated(): number;

        /**
         * Get the modified date of the given object, assigned by the server
         */
        getModified(): string;

        /**
         * Get the application-defined type name of the object
         *
         * @return type of this object. null or undefined if none exists
         */
        getObjectType(): string;

        /**
         * Get the body content-type.
         * It will be updated after the success of {@link KiiObject#uploadBody} and {@link KiiObject#downloadBody}
         * returns null or undefined when this object doesn't have body content-type information.
         *
         * @return content-type of object body
         */
        getBodyContentType(): string;

        /**
         * Sets a key/value pair to a KiiObject
         *
         * <br><br>If the key already exists, its value will be written over.
         * <br><b>NOTE: Before involving floating point value, please consider using integer instead. For example, use percentage, permil, ppm, etc.</br></b>
         * The reason is:
         *  <li>Will dramatically improve the performance of bucket query.</li>
         *  <li>Bucket query does not support the mixed result of integer and floating point.
         *  ex.) If you use same key for integer and floating point and inquire object with the integer value, objects which has floating point value with the key would not be evaluated in the
         *  query. (and vice versa)</li>
         *
         * @param key The key to set.
         *   if null, empty string or string prefixed with '_' is specified, silently ignored and have no effect.
         *   We don't check if actual type is String or not. If non-string type is specified, it will be encoded as key by JSON.stringify()
         * @param value The value to be set. Object must be JSON-encodable type (dictionary, array, string, number, boolean)
         *   We don't check actual type of the value. It will be encoded as value by JSON.stringify()
         *
         * @example
         *     var obj = . . .; // a KiiObject
         *     obj.set("score", 4298);
         */
        set(
            key: string,
            value: any,
        ): void;

        /**
         * Gets the value associated with the given key
         *
         * @param key The key to retrieve
         *
         * @return The object associated with the key. null or undefined if none exists
         *
         * @example
         *     var obj = . . .; // a KiiObject
         *     var score = obj.get("score");
         */
        get<T>(
            key: string,
        ): T;

        /**
         * Gets the array object that contains all keys of custom field.
         * The array of keys from local cache will be returned.
         * To get the latest array of keys from cloud, calling refresh() is necessary prior calling this method.
         * The returned array object does not include reserved keys such as _created, _modified, etc.
         *
         * @return keys An array of all keys of custom field.
         *
         * @example
         *     var obj = . . .; // a KiiObject
         *     for(var key of obj.keys()) {
         *     }
         */
        getKeys(): string[];

        /**
         * Removes a pair of key/value from this object.
         * This pair is also removed from server when saveAllFields() is succeeded.
         *
         * @param key The key to be removed
         *
         * @example
         *     var obj = . . .; // a KiiObject
         *     obj.remove("score");
         */
        remove(
            key: string,
        ): void;

        /**
         * Set Geo point to this object with the specified key.
         *
         * @param key The key to set.
         * @param KiiGeoPoint to be tied to the specified key.
         *
         * @throws Specified kiiGeoPint is not an instance of KiiGeoPoint.
         */
        setGeoPoint(
            key: string,
            KiiGeoPoint: KiiGeoPoint,
        ): void;

        /**
         * Gets the geo point associated with the given key.
         *
         * @param key The key of the geo point to retrieve.
         *
         * @return KiiGeoPoint tied to the key. null if null exists.
         */
        getGeoPoint(
            key: string,
        ): KiiGeoPoint;

        /**
         * Get the ACL handle for this file
         *
         * <br><br>Any KiiACLEntry objects added or revoked from this ACL object will be appended to/removed from the server on ACL save.
         *
         * @return A KiiACL object associated with this KiiObject
         *
         * @example
         *         var obj = . . .; // a KiiObject
         *         var acl = obj.objectACL();
         */
        objectACL(): KiiACL;

        /**
         * Get a specifically formatted string referencing the object
         *
         * <br><br>The object must exist in the cloud (have a valid UUID).
         *
         * @return A URI string based on the current object. null if a URI couldn't be generated.
         *
         * @example
         *     var obj = . . .; // a KiiObject
         *     var uri = obj.objectURI();
         */
        objectURI(): string;

        /**
         * Create or update the KiiObject on KiiCloud.
         * <br><br>When call this method for the object that has not saved on cloud, will send all fields.
         * Call this method for the object that has saved on cloud, Update all field of this object.
         *
         * @param callbacks An object with callback methods defined
         *   sucess: function called when save succeeded.<br>
         *   failure: function called when save failed.
         * @param overwrite optional, true by default.
         *   <ul>
         *   <li><b>If overwrite is true:</b>
         *   <ul>
         *   <li>If a KiiObject with the same ID exists in cloud, the local copy will overwrite the remote copy, even if the remote copy is newer. </li>
         *   </ul>
         *   <li><b>Otherwise:</b>
         *   <ul>
         *   <li>If a KiiObject with the same ID exists in cloud and the remote copy is newer, save will fail.</li>
         *   </ul>
         *   </ul>
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theSavedObject). theSavedObject is KiiObject instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var obj = . . .; // a KiiObject
         *     obj.saveAllFields({
         *         success: function(theSavedObject) {
         *             // do something with the saved object
         *         },
         *
         *         failure: function(theObject, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var obj = . . .; // a KiiObject
         *     obj.saveAllFields().then(
         *         function(theSavedObject) {
         *             // do something with the saved object
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        saveAllFields(
            callbacks?: {
                success(theSavedObject: KiiObject): any;
                failure(theObject: KiiObject, anErrorString: string): any;
            },
            overwrite?: boolean,
        ): Promise<KiiObject>;

        /**
         * Create or update the KiiObject on KiiCloud.
         * <br><br>When call this method for the object that has not saved on cloud, will send all fields.
         * Call this method for the object that has saved on cloud, Update only updated fields.
         * Do not send fields that has not updated locally. To send all fields regardless of updates, call {@link KiiObject#saveAllFields}.
         *
         * @param callbacks An object with callback methods defined
         *   sucess: function called when save succeeded.<br>
         *   failure: function called when save failed.
         * @param overwrite optional, true by default.
         *   <ul>
         *   <li><b>If overwrite is true:</b>
         *   <ul>
         *   <li>If a KiiObject with the same ID exists in cloud, the local copy will overwrite the remote copy, even if the remote copy is newer. </li>
         *   </ul>
         *   <li><b>Otherwise:</b>
         *   <ul>
         *   <li>If a KiiObject with the same ID exists in cloud and the remote copy is newer, save will fail.</li>
         *   </ul>
         *   </ul>
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theSavedObject). theSavedObject is KiiObject instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var obj = . . .; // a KiiObject
         *     obj.save({
         *         success: function(theSavedObject) {
         *             // do something with the saved object
         *         },
         *
         *         failure: function(theObject, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var obj = . . .; // a KiiObject
         *     obj.save().then(
         *         function(theSavedObject) {
         *             // do something with the saved object
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        save(
            callbacks?: {
                success(theSavedObject: KiiObject): any;
                failure(theObject: KiiObject, anErrorString: string): any;
            },
            overwrite?: boolean,
        ): Promise<KiiObject>;

        /**
         * Updates the local object's data with the user data on the server
         *
         * <br><br>The object must exist on the server. Local data will be overwritten.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theRefreshedObject). theRefreshedObject is KiiObject instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var obj = . . .; // a KiiObject
         *     obj.refresh({
         *         success: function(theRefreshedObject) {
         *             // do something with the refreshed object
         *         },
         *
         *         failure: function(theObject, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var obj = . . .; // a KiiObject
         *     obj.refresh().then(
         *         function(theRefreshedObject) {
         *             // do something with the refreshed object
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        refresh(
            callbacks?: {
                success(theRefreshedObject: KiiObject): any;
                failure(theObject: KiiObject, anErrorString: string): any;
            },
        ): Promise<KiiObject>;

        /**
         * Delete the object from the server
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theDeletedObject). theDeletedObject is KiiObject instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var obj = . . .; // a KiiObject
         *     obj.delete({
         *         success: function(theDeletedObject) {
         *             // do something
         *         },
         *
         *         failure: function(theObject, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var obj = . . .; // a KiiObject
         *     obj.delete().then(
         *         function(theDeletedObject) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        delete(
            callbacks?: {
                success(theDeletedObject: KiiObject): any;
                failure(theObject: KiiObject, anErrorString: string): any;
            },
        ): Promise<KiiObject>;

        /**
         * Generate a new KiiObject based on a given URI
         *
         * @param uri The URI of the object to be represented
         *
         * @return A new KiiObject with its parameters filled in from the URI
         *
         * @throws If the URI is not in the proper format
         *
         * @example
         *     var group = new KiiObject.objectWithURI("kiicloud://myuri");
         */
        static objectWithURI(
            uri: string,
        ): KiiObject;

        /**
         * Move KiiObject body from an object to another object.
         * <br>
         * This moving can be allowed under same application, across different scopes
         * and source/target KiiObject have a read and write permission (READ_EXISTING_OBJECT and WRITE_EXISTING_OBJECT).
         * <br><br>If target KiiObject has a body, it will be overwritten.
         *
         * @param targetObjectUri A KiiObject URI which KiiObject body is moved to.
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the source KiiObject instance which this method was called on.</li>
         *         <li>params[1] is the target targetObjectUri String.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the source KiiObject instance which this method was called on.</li>
         *         <li>error.targetObjectUri is the targetObjectUri String.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var sourceObject = ...; // Source KiiObject
         *     var targetObject = ...; // Target KiiObject
         *     var targetObjectUri = targetObject.objectURI();
         *     sourceObject.moveBody(targetObjectUri, {
         *         success: function(theSrcObject, theTgtObjectUri) {
         *             // Do something with the objects
         *         },
         *
         *         failure: function(theSrcObject, theTgtObjectUri, anErrorString) {
         *             // Do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var sourceObject = ...; // Source KiiObject
         *     var targetObject = ...; // Target KiiObject
         *     var targetObjectUri = targetObject.objectURI();
         *     sourceObject.moveBody(targetObjectUri).then(
         *         function(params) {
         *             var theSrcObject = params[0];
         *             var theTgtObjectUri = params[1];
         *             // Do something with the objects
         *         },
         *         function(error) {
         *             // Do something with the error response
         *         }
         *     );
         */
        moveBody(
            targetObjectUri: string,
            callbacks?: {
                success(theSrcObject: KiiObject, theTgtObjectUri: string): any;
                failure(theSrcObject: KiiObject, theTgtObjectUri: string, anErrorString: string): any;
            },
        ): Promise<[KiiObject, string]>;

        /**
         * Upload body data of this object.<br>
         * If the KiiObject has not saved on the cloud or deleted,
         * request will be failed.
         * <br>NOTE: this requires XMLHttpRequest Level 2, FileReader and Blob supports. Do not use it in server code.<br>
         *
         * @param srcDataBlob data to be uploaded.
         *   type is used to determin content-type managed in Kii Cloud.
         *   If type was not specified in the Blob,
         *   'application/octet-stream' will be used.
         * @param callbacks progress: function called on XMLHttpRequest 'progress' event listener.<br>
         *   sucess: function called when upload succeeded.<br>
         *   failure: function called when upload failed.
         *
         * @return return promise object.
         *     <br>NOTE: Promise will not handle progress event. Please pass callbacks with progress function to handle progress.
         *   <ul>
         *     <li>fulfill callback function: function(theObject). theObject is a KiiObject instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var myObject = Kii.bucketWithName('myBucket').createObject();
         *     myObject.save({
         *         success: function(obj) {
         *             var srcData = new Blob(['Hello Blob'], {type: 'text/plain'});
         *             obj.uploadBody(srcData, {
         *                 progress: function (oEvent) {
         *                   if (oEvent.lengthComputable) {
         *                     var percentComplete = oEvent.loaded / oEvent.total;
         *                     //getting upload progress. You can update progress bar on this function.
         *                   }
         *                 },
         *                 success: function(obj) {
         *                     // Upload succeeded.
         *                 },
         *                 failure: function(obj, anErrorString) {
         *                     // Handle error.
         *                 }
         *             });
         *         },
         *         failure: function(obj, error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var myObject = Kii.bucketWithName('myBucket').createObject();
         *     myObject.save().then(
         *         function(obj) {
         *             var srcData = new Blob(['Hello Blob'], {type: 'text/plain'});
         *             obj.uploadBody(srcData, {
         *                 progress: function (oEvent) {
         *                   if (oEvent.lengthComputable) {
         *                     var percentComplete = oEvent.loaded / oEvent.total;
         *                     //getting upload progress. You can update progress bar on this function.
         *                   }
         *                 }
         *             }).then(
         *                 function(obj) { // fullfill callback function
         *                     // Upload succeeded.
         *                 },
         *                 function(error) { // reject callback function
         *                     // Handle error.
         *                 }
         *             );
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        uploadBody(
            srcDataBlob: Blob,
            callbacks?: { success(obj: KiiObject): any; failure(obj: KiiObject, anErrorString: string): any },
        ): Promise<KiiObject>;

        /**
         * Download body data of this object.<br>
         * If the KiiObject has not saved on the cloud or deleted
         * or exist but does not have body object, request will be failed.
         * <br>NOTE: this requires XMLHttpRequest Level 2, FileReader and Blob supports. Do not use it in server code.<br>
         *
         * @param callbacks progress: function called on XMLHttpRequest 'progress' event listener.<br>
         *   sucess: function called when download succeeded.<br>
         *   failure: function called when download failed.
         *
         * @return return promise object.
         *     <br>NOTE: Promise will not handle progress event. Please pass callbacks with progress function to handle progress.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a KiiObject instance which this method was called on.</li>
         *         <li>params[1] is the returned body blob object.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.</li>
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     myObject.downloadBody({
         *         progress: function (oEvent) {
         *           if (oEvent.lengthComputable) {
         *             var percentComplete = oEvent.loaded / oEvent.total;
         *             //getting download progress. You can update progress bar on this function.
         *
         *           }
         *         },
         *         success: function(obj, bodyBlob) {
         *             // Obtaind body contents as bodyBlob.
         *             // content-type managed in Kii Cloud can be obtained from type attr.
         *             // It is same as obj.getBodyContentType();
         *             var contentType = bodyBlob.type;
         *         },
         *         failure: function(obj, anErrorString) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     myObject.downloadBody({
         *         progress: function (oEvent) {
         *           if (oEvent.lengthComputable) {
         *             var percentComplete = oEvent.loaded / oEvent.total;
         *             //getting download progress. You can update progress bar on this function.
         *
         *           }
         *         }
         *     ).then(
         *         function(params) {
         *             // Obtaind body contents as bodyBlob.
         *             // content-type managed in Kii Cloud can be obtained from type attr.
         *             // It is same as obj.getBodyContentType();
         *             var obj = params[0];
         *             var bodyBlob = params[1];
         *             var contentType = bodyBlob.type;
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        downloadBody(
            callbacks?: {
                success(obj: KiiObject, bodyBlob: Blob): any;
                failure(obj: KiiObject, anErrorString: string): any;
            },
        ): Promise<[KiiObject, Blob]>;

        /**
         * Publish object body.<br>
         * Publish object body and obtain public URL links to the body.<br>
         * It doesn't expires.<br>
         * If the KiiObject has not saved on the cloud or deleted
         * or exist but does not have body object, request will be failed.
         *
         * @param callbacks sucess: function called when publish succeeded.<br>
         *   failure: function called when publish failed.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiObject instance which this method was called on.</li>
         *         <li>params[1] is the published url string.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     myObject.publishBody({
         *         success: function(obj, publishedUrl) {
         *             // ex.) You can show publishedUrl in the view.
         *         },
         *         failure: function(obj, anErrorString) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     myObject.publishBody().then(
         *         function(params) {
         *             // ex.) You can show publishedUrl in the view.
         *             var obj = params[0];
         *             var publishedUrl = params[1];
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        publishBody(
            callbacks?: {
                success(obj: KiiObject, publishedUrl: string): any;
                failure(obj: KiiObject, anErrorString: string): any;
            },
        ): Promise<[KiiObject, string]>;

        /**
         * Publish object body with expiration date.<br>
         * Publish object body and obtain public URL links to the body.<br>
         * Expires at specified date <br>
         * If the KiiObject has not saved on the cloud or deleted
         * or exist but does not have body object, request will be failed.
         *
         * @param expiresAt expiration date. should specify future date.
         * @param callbacks sucess: function called when publish succeeded.<br>
         *   failure: function called when publish failed.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiObject instance which this method was called on.</li>
         *         <li>params[1] is the published url string.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     var expiresAt = new Date(2014, 11, 24);
         *     myObject.publishBodyExpiresAt(expiresAt, {
         *         success: function(obj, publishedUrl) {
         *             // ex.) You can show publishedUrl in the view.
         *         },
         *         failure: function(obj, anErrorString) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     var expiresAt = new Date(2014, 11, 24);
         *     myObject.publishBodyExpiresAt(expiresAt).then(
         *         function(params) {
         *             // ex.) You can show publishedUrl in the view.
         *             var obj = params[0];
         *             var publishedUrl = params[1];
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        publishBodyExpiresAt(
            expiresAt: Date,
            callbacks?: {
                success(obj: KiiObject, publishedUrl: string): any;
                failure(obj: KiiObject, anErrorString: string): any;
            },
        ): Promise<[KiiObject, string]>;

        /**
         * Publish object body with expiration duration.<br>
         * Publish object body and obtain public URL links to the body.<br>
         * Expires in specified duration<br>
         * If the KiiObject has not saved on the cloud or deleted
         * or exist but does not have body object, request will be failed.
         *
         * @param expiresIn duration in seconds. greater than 0.
         * @param callbacks sucess: function called when publish succeeded.<br>
         *   failure: function called when publish failed.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiObject instance which this method was called on.</li>
         *         <li>params[1] is the published url string.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     var expiresIn = 60 * 60; // Expires in 1 hour.
         *     myObject.publishBodyExpiresIn(expiresIn, {
         *         success: function(obj, publishedUrl) {
         *             // ex.) You can show publishedUrl in the view.
         *         },
         *         failure: function(obj, anErrorString) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var myObject = KiiObject.objectWithURI('put existing object uri here');
         *     var expiresIn = 60 * 60; // Expires in 1 hour.
         *     myObject.publishBodyExpiresIn(expiresIn).then(
         *         function(params) {
         *             // ex.) You can show publishedUrl in the view.
         *             var obj = params[0];
         *             var publishedUrl = params[1];
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        publishBodyExpiresIn(
            expiresIn: number,
            callbacks?: {
                success(obj: KiiObject, publishedUrl: string): any;
                failure(obj: KiiObject, anErrorString: string): any;
            },
        ): Promise<[KiiObject, string]>;

        /**
         * Delete the object body from the server.<br>
         * If the KiiObject has not saved on the cloud or deleted
         * or exist but does not have body object, request will be failed.<br>
         * If succeeded, The object body content type will be nullified.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theDeletedObject). theDeletedObject is the KiiObject instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiObject instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var obj = . . .; // a KiiObject
         *     obj.deleteBody({
         *         success: function(theDeletedObject) {
         *             // do something
         *         },
         *
         *         failure: function(obj, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var obj = . . .; // a KiiObject
         *     obj.deleteBody().then(
         *         function(theDeletedObject) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        deleteBody(
            callbacks?: {
                success(theDeletedObject: KiiObject): any;
                failure(obj: KiiObject, anErrorString: string): any;
            },
        ): Promise<KiiObject>;

        /**
         * Check if given ID is valid for object ID.
         *  Valid pattern: ^[a-zA-Z0-9-_\\.]{2,100}$
         *
         * @param objectID to be checked.
         *
         * @return true if given ID is valid, false otherwise.
         */
        static isValidObjectID(
            objectID: string,
        ): boolean;
    }

    /**
     * Represents a KiiPushInstallation object
     */
    class KiiPushInstallation {
        /**
         * Register the id issued by GCM to the Kii cloud for current logged in user.
         *
         * @param installationRegistrationID The ID of registration that identifies the installation externally.
         * @param development Indicates if the installation is for development or production environment.
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(response).
         *       <ul>
         *         <li>response.installationID is ID of the installation in the platform.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         */
        installGcm(
            installationRegistrationID: string,
            development: boolean,
            callbacks?: { success(response: KiiGcmInstallationResponse): any; failure(error: Error): any },
        ): Promise<KiiGcmInstallationResponse>;

        /**
         * Register a MQTT installation to the Kii cloud for current logged in user.
         *
         * @param development Indicates if the installation is for development or production environment.
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(response).
         *       <ul>
         *         <li>response.installationID is ID of the installation in the platform.</li>
         *         <li>response.installationRegistrationID is ID of registration that identifies the installation externally.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         */
        installMqtt(
            development: boolean,
            callbacks?: { success(response: KiiMqttInstallationResponse): any; failure(error: Error): any },
        ): Promise<KiiMqttInstallationResponse>;

        /**
         * Get MQTT endpoint.
         * If the MQTT endpoint is not ready, this method retries request up to three times.
         * <br><br>
         * Note that only MQTT over tls is supported currently.<br>
         * Don't use portSSL, portWS or portWSS until we support it.
         *
         * @param installationID The ID of the installation in the platform.
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(response).
         *       <ul>
         *         <li>response.installationID is ID of the installation in the platform.</li>
         *         <li>response.username is username to use for connecting to the MQTT broker.</li>
         *         <li>response.password is assword to use for connecting to the MQTT broker.</li>
         *         <li>response.mqttTopic is topic to subscribe in the MQTT broker.</li>
         *         <li>response.host is hostname of the MQTT broker.</li>
         *         <li>response.X-MQTT-TTL is the amount of time in seconds that specifies how long the mqttTopic will be valid, after that the client needs to request new MQTT endpoint info.</li>
         *         <li>response.portTCP is port to connect using plain TCP.</li>
         *         <li>response.portSSL is port to connect using SSL/TLS.</li>
         *         <li>response.portWS is port to connect using plain Websocket.</li>
         *         <li>response.portWSS is port to connect using SSL/TLS Websocket.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         */
        getMqttEndpoint(
            installationID: string,
            callbacks?: { success(response: KiiMqttEndpoint): any; failure(error: Error): any },
        ): Promise<KiiMqttEndpoint>;

        /**
         * Unregister the push settings by the id(issued by push provider) that is used for installation.
         *
         * @param installationRegistrationID The ID of registration that identifies the installation externally.
         * @param deviceType The type of the installation, current implementation only supports "ANDROID" and "MQTT".
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function().</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         */
        uninstall(
            installationRegistrationID: string,
            deviceType: string,
            callbacks?: { success(): any; failure(error: Error): any },
        ): Promise<void>;

        /**
         * Unregister the push settings by the id(issued by KiiCloud) that is used for installation.
         *
         * @param installationID The ID of the installation issued by KiiCloud.
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function().</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         */
        uninstallByInstallationID(
            installationID: string,
            callbacks?: { success(): any; failure(error: Error): any },
        ): Promise<void>;
    }

    /**
     * Builder of push message
     */
    class KiiPushMessageBuilder {
        /**
         * instantiate builder with push message data.
         * By default all push channels (gcm, apns, jpush, mqtt) is enabled.
         * All other properties configured by method of this class won't be set and default
         * value would be applied.<br>
         * Details of properties of message and its default value, please refer to
         * http://documentation.kii.com/rest/#notification_management-leverage__push_to_users__notification-group_scope-send_messages-send_a_push_message_to_the_current_topic
         *
         * @param data sent to all push channels (gcm, apns, jpush, mqtt).
         */
        constructor(
            data: any,
        );

        /**
         * build push message.
         *
         * @return push message object. Can be used in {@link KiiTopic#sendMessage()}
         */
        build(): any;

        /**
         * Indicate whether send this message to development environment.
         * If this method is not called, true will be applied as default.
         *
         * @param flag indicate whether send this message to development env.
         *
         * @return builder instance.
         */
        setSendToDevelopment(
            flag: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Indicate whether send this message to production environment.
         * If this method is not called, true will be applied as default.
         *
         * @param flag indicate whether send this message to production env.
         *
         * @return builder instance.
         */
        setSendToProduction(
            flag: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Enable/ Disable message distribution via GCM.
         * If this method is not called, true will be applied as default.
         *
         * @param enable flag indicate whether distribute this message to GCM subscribers.
         *
         * @return builder instance.
         */
        enableGcm(
            enable: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Enable/ Disable message distribution via APNS.
         * If this method is not called, true will be applied as default.
         *
         * @param enable flag indicate whether distribute this message to APNS subscribers.
         *
         * @return builder instance.
         */
        enableApns(
            enable: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Enable/ Disable message distribution via JPush.
         * If this method is not called, true will be applied as default.
         *
         * @param enable flag indicate whether distribute this message to JPush subscribers.
         *
         * @return builder instance.
         */
        enableJpush(
            enable: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Enable/ Disable message distribution via MQTT.
         * If this method is not called, true will be applied as default.
         *
         * @param enable flag indicate whether distribute this message to MQTT subscribers.
         *
         * @return builder instance.
         */
        enableMqtt(
            enable: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Set specific data for GCM subscribers.
         * If this method is not called, no specific data is not applied
         * and data passed to the constructor would be sent to subscribers.
         *
         * @param data specific data applied to only GCM subscribers.
         *   Contents should be JSON Object with only one-level of nesting,
         *   and only strings in values
         *
         * @return builder instance.
         */
        gcmData(
            data: { [key: string]: string },
        ): KiiPushMessageBuilder;

        /**
         * Set collapse_key for GCM subscribers.
         * If this method is not called, no collapse_key is applied.
         * For details please refer to GCM document of collapse_key.
         *
         * @return builder instance.
         */
        gcmCollapseKey(
            collapseKey: string,
        ): KiiPushMessageBuilder;

        /**
         * Set delay_while_idle for GCM subscribers.
         * If this method is not called, no delay_while_idle is applied.
         * For details please refer to GCM document of delay_while_idle.
         *
         * @return builder instance.
         */
        gcmDelayWhileIdle(
            delayWhileIdle: boolean,
        ): KiiPushMessageBuilder;

        /**
         * Set time_to_live for GCM subscribers.
         * If this method is not called, no time_to_live is applied.
         * For details please refer to GCM document of time_to_live.
         *
         * @return builder instance.
         */
        gcmTimeToLive(
            timeToLive: number,
        ): KiiPushMessageBuilder;

        /**
         * Set restricted_package_name for GCM subscribers.
         * If this method is not called, no restricted_package_name is applied.
         * For details please refer to GCM document of restricted_package_name.
         *
         * @return builder instance.
         */
        gcmRestrictedPackageName(
            restrictedPackageName: string,
        ): KiiPushMessageBuilder;

        /**
         * Set specific data for APNS subscribers.
         * If this method is not called, no specific data is not applied
         * and data passed to the constructor would be sent to subscribers.
         *
         * @param data specific data applied to only APNS subscribers.
         *   Contents should be JSON Object with only one-level of nesting,
         *   and only strings, integers, booleans or doubles in the values.
         *
         * @return builder instance.
         */
        apnsData(
            data: { [key: string]: string | number | boolean },
        ): KiiPushMessageBuilder;

        /**
         * Set alert for APNS subscribers.
         * If this method is not called, no alert is applied.
         * For details please refer to APNS document of alert.
         *
         * @param alert alert object
         *
         * @return builder instance.
         */
        apnsAlert(
            alert: string | APNSAlert,
        ): KiiPushMessageBuilder;

        /**
         * Set sound for APNS subscribers.
         * If this method is not called, no sound is applied.
         * For details please refer to APNS document of sound.
         *
         * @return builder instance.
         */
        apnsSound(
            sound: string,
        ): KiiPushMessageBuilder;

        /**
         * Set badge for APNS subscribers.
         * If this method is not called, no badge is applied.
         * For details please refer to APNS document of badge.
         *
         * @return builder instance.
         */
        apnsBadge(
            badge: number,
        ): KiiPushMessageBuilder;

        /**
         * Set content-available for APNS subscribers.
         * If this method is not called, no content-available is applied.
         *
         * @param contentAvailable If 0 or this method is not invoked,
         *   content-available payload is not delivered.
         *   Otherwise, content-available=1 payload is delivered.
         *
         * @return builder instance.
         */
        apnsContentAvailable(
            contentAvailable: number,
        ): KiiPushMessageBuilder;

        /**
         * Set category for APNS subscribers.
         * If this method is not called, no category is applied.
         * For details please refer to APNS document of category.
         *
         * @return builder instance.
         */
        apnsCategory(
            category: string,
        ): KiiPushMessageBuilder;

        /**
         * Set specific data for JPush subscribers.
         * If this method is not called, no specific data is not applied
         * and data passed to the constructor would be sent to subscribers.
         *
         * @param data specific data applied to only JPush subscribers.
         *   Contents should be JSON Object with only one-level of nesting,
         *   and only strings, integers, booleans or doubles in the values.
         *
         * @return builder instance.
         */
        jpushData(
            data: { [name: string]: string | number | boolean },
        ): KiiPushMessageBuilder;

        /**
         * Set specific data for MQTT subscribers.
         * If this method is not called, no specific data is not applied
         * and data passed to the constructor would be sent to subscribers.
         *
         * @param data specific data applied to only MQTT subscribers.
         *   Contents should be JSON Object with only one-level of nesting,
         *   and only strings in the values.
         *
         * @return builder instance.
         */
        mqttData(
            data: { [key: string]: string },
        ): KiiPushMessageBuilder;
    }

    /**
     * Represents a KiiPushSubscription.
     */
    class KiiPushSubscription {
        /**
         * Subscribe to bucket or topic.
         *
         * @param target to be subscribed. KiiBucket or KiiTopic instance.
         * @param callbacks object contains callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiPushSubscription instance.</li>
         *         <li>params[1] is the KiiTopic instance to subscribe.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiPushSubscription instance.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var topic = Kii.topicWithName("myAppTopic");
         *     var user = KiiUser.getCurrentUser();
         *     user.pushSubscription().subscribe(topic, {
         *         success: function(subscription, topic) {
         *             // Succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var topic = Kii.topicWithName("myAppTopic");
         *     var user = KiiUser.getCurrentUser();
         *     user.pushSubscription().subscribe(topic).then(
         *         function(params) {
         *             var subscription = params[0];
         *             var topic = params[1];
         *             // Succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        subscribe<T extends KiiBucket | KiiTopic>(
            target: T,
            callbacks?: { success(subscription: KiiPushSubscription, topic: T): any; failure(error: Error): any },
        ): Promise<[KiiPushSubscription, T]>;

        /**
         * Unsubscribe to bucket or topic.
         *
         * @param target to be unsubscribed. KiiBucket or KiiTopic instance.
         * @param callbacks object contains callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiPushSubscription instance.</li>
         *         <li>params[1] is the KiiTopic instance to unsubscribe.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiPushSubscription instance.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var topic = Kii.topicWithName("myAppTopic");
         *     var user = KiiUser.getCurrentUser();
         *     user.pushSubscription().unsubscribe(topic, {
         *         success: function(subscription, topic) {
         *             // Succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var topic = Kii.topicWithName("myAppTopic");
         *     var user = KiiUser.getCurrentUser();
         *     user.pushSubscription().unsubscribe(topic).then(
         *         function(params) {
         *             var subscription = params[0];
         *             var topic = params[1];
         *             // Succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        unsubscribe<T extends KiiBucket | KiiTopic>(
            target: T,
            callbacks?: { success(subscription: KiiPushSubscription, topic: T): any; failure(error: Error): any },
        ): Promise<[KiiPushSubscription, T]>;

        /**
         * Check subscription of bucket, topic.
         *
         * @param target to check subscription. KiiBucket or KiiTopic instance.
         * @param callbacks object contains callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiPushSubscription instance.</li>
         *         <li>params[1] is the KiiTopic instance to subscribe.</li>
         *         <li>params[2] is Boolean value. true if subscirbed, otherwise false.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiPushSubscription instance.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var topic = Kii.topicWithName("myAppTopic");
         *     var user = KiiUser.getCurrentUser();
         *     user.pushSubscription().isSubscribed(topic, {
         *         success: function(subscription, topic, isSubscribed) {
         *             // Succeeded.
         *             if (isSubscribed) {
         *                 // The topic is subscribed by current user.
         *             } else {
         *                 // The topic is not subscribed by current user.
         *             }
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     var topic = Kii.topicWithName("myAppTopic");
         *     var user = KiiUser.getCurrentUser();
         *     user.pushSubscription().isSubscribed(topic).then(
         *         function(params) {
         *             // Succeeded.
         *             var subscription = params[0];
         *             var topic = params[1];
         *             var isSubscribed = params[2];
         *             if (isSubscribed) {
         *                 // The topic is subscribed by current user.
         *             } else {
         *                 // The topic is not subscribed by current user.
         *             }
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        isSubscribed<T extends KiiBucket | KiiTopic>(
            target: T,
            callbacks?: {
                success(subscription: KiiPushSubscription, topic: T, isSubscribed: boolean): any;
                failure(error: Error): any;
            },
        ): Promise<[KiiPushSubscription, T, boolean]>;
    }

    /**
     * Represents a KiiQuery object
     */
    class KiiQuery {
        /**
         * Get the limit of the current query
         */
        getLimit(): number;

        /**
         * Set the limit of the given query
         *
         * @param value The desired limit. Must be an integer > 0
         *
         * @throws InvalidLimitException
         */
        setLimit(
            value: number,
        ): void;

        /**
         * Create a KiiQuery object based on a KiiClause
         * <br><br>
         * By passing null as the ‘clause’ parameter, all objects can be retrieved.
         *
         * @param clause The KiiClause to be executed with the query
         */
        static queryWithClause(
            clause: KiiClause,
        ): KiiQuery;

        /**
         * Set the query to sort by a field in descending order
         *
         * If a sort has already been set, it will be overwritten.
         *
         * @param field The key that should be used to sort
         */
        sortByDesc(
            field: string,
        ): void;

        /**
         * Set the query to sort by a field in ascending order
         *
         * If a sort has already been set, it will be overwritten.
         *
         * @param field The key that should be used to sort
         */
        sortByAsc(
            field: string,
        ): void;
    }

    /**
     * Represents a server side code entry in KiiCloud.
     */
    class KiiServerCodeEntry {
        /**
         * Execute this server code entry.<br>
         *  If argument is an empty object or not type of Object, callbacks.failure or reject callback of promise will be called.<br>
         *
         * @param argument pass to the entry of script in the cloud.
         *   If null is specified, no argument pass to the script.
         * @param callbacks called on completion of execution.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiServerCodeEntry instance which this method was called on.</li>
         *         <li>params[1] is the passed argument object.</li>
         *         <li>params[2] is a KiiServerCodeExecResult instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiServerCodeEntry instance which this method was called on.</li>
         *         <li>error.message</li>
         *         <li>error.argument is passed argument object. </li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Instantiate with the endpoint.
         *     var entry = Kii.serverCodeEntry("main");
         *
         *     // Set the custom parameters.
         *     var arg = {"username":"name_of_my_friend", "password":"password_for_my_friend"};
         *
         *     // Example of executing the Server Code
         *     entry.execute(arg, {
         *
         *        success: function(entry, argument, execResult) {
         *            // do something now that the user is logged in
         *        },
         *
         *        failure: function(entry, argument, execResult, anErrorString) {
         *            // do something with the error response
         *        }
         *     });
         *
         *     // example to use Promise
         *     // Instantiate with the endpoint.
         *     var entry = Kii.serverCodeEntry("main");
         *
         *     // Set the custom parameters.
         *     var arg = {"username":"name_of_my_friend", "password":"password_for_my_friend"};
         *
         *     // Example of executing the Server Code
         *     entry.execute(arg).then(
         *         function(params) {
         *             var entry = params[0];
         *             var argument = params[1];
         *             var execResult = params[2];
         *            // do something
         *         },
         *         function(error) {
         *            // do something with the error response
         *         }
         *     );
         */
        execute<T>(
            argument: T,
            callbacks?: {
                success(entry: KiiServerCodeEntry, argument: T, execResult: KiiServerCodeExecResult): any;
                failure(
                    entry: KiiServerCodeEntry,
                    argument: T,
                    execResult: KiiServerCodeExecResult,
                    anErrorString: string,
                ): any;
            },
        ): Promise<[KiiServerCodeEntry, T, KiiServerCodeExecResult]>;

        /**
         * Get the entryName of this server code entry.
         *
         * @return entryName.
         */
        getEntryName(): string;
    }

    /**
     * Represents a server side code execution result in KiiCloud.
     */
    class KiiServerCodeExecResult {
        /**
         * Get calculated number of executed steps.
         *
         * @return calculated number of executed steps
         */
        getExecutedSteps(): number;

        /**
         * Get Object returned by server code entry.
         *
         * @return returned by server code entry.
         */
        getReturnedValue(): any;
    }

    /**
     * Represents a KiiSocialConnect object
     */
    class KiiSocialConnect {
        /**
         * @deprecated You don't have to call this method.
         *   Set up a reference to one of the supported KiiSocialNetworks.
         *
         *   Set up the network. Need to be called before accessing other methods.
         *   <br><b> Facebook </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Argument</th>
         *   <th>Value Type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>networkName</td>
         *   <td>Number</td>
         *   <td>KiiSocialNetworkName.FACEBOOK</td>
         *   <td>Specify Facebook</td>
         *   </tr>
         *   <tr>
         *   <td>apiKey</td>
         *   <td>String</td>
         *   <td>null</td>
         *   <td>Facebook does not requires this argument.</td>
         *   </tr>
         *   <tr>
         *   <td>apiSecret</td>
         *   <td>String</td>
         *   <td>null</td>
         *   <td>Facebook does not requires this argument.</td>
         *   </tr>
         *   <tr>
         *   <td>extras</td>
         *   <td>Object</td>
         *   <td>null</td>
         *   <td>Facebook does not requires this argument.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Twitter </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Argument</th>
         *   <th>Value Type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>networkName</td>
         *   <td>Number</td>
         *   <td>KiiSocialNetworkName.TWITTER</td>
         *   <td>Specify Twitter</td>
         *   </tr>
         *   <tr>
         *   <td>apiKey</td>
         *   <td>String</td>
         *   <td>null</td>
         *   <td>Twitter does not requires this argument.</td>
         *   </tr>
         *   <tr>
         *   <td>apiSecret</td>
         *   <td>String</td>
         *   <td>null</td>
         *   <td>Twitter does not requires this argument.</td>
         *   </tr>
         *   <tr>
         *   <td>extras</td>
         *   <td>Object</td>
         *   <td>null</td>
         *   <td>Twitter does not requires this argument.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *   <br><b> QQ </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Argument</th>
         *   <th>Value Type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>networkName</td>
         *   <td>Number</td>
         *   <td>KiiSocialNetworkName.QQ</td>
         *   <td>Specify QQ</td>
         *   </tr>
         *   <tr>
         *   <td>apiKey</td>
         *   <td>String</td>
         *   <td>null</td>
         *   <td>QQ does not requires this argument.</td>
         *   </tr>
         *   <tr>
         *   <td>apiSecret</td>
         *   <td>String</td>
         *   <td>null</td>
         *   <td>QQ does not requires this argument.</td>
         *   </tr>
         *   <tr>
         *   <td>extras</td>
         *   <td>Object</td>
         *   <td>null</td>
         *   <td>QQ does not requires this argument.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         * @param apiKey The SDK key assigned by the social network provider. For details refer to the table above.
         * @param apiSecret The SDK secret assigned by the social network provider. For details refer to the table above.
         * @param extras Extra options that should be passed to the SNS. For details refer to the table above.
         *
         * @throws For details refer to the table above
         */
        static setupNetwork(
            networkName: KiiSocialNetworkName,
            apiKey: string,
            apiSecret: string,
            extras: any,
        ): void;

        /**
         * Log a user into the social network provided
         *
         *  This will initiate the login process for the given network. If user has already linked with the specified social network,
         *  sign-in with the social network. Otherwise, this will sign-up and create new user authenticated by the specified social network.
         *  If sign-up successful, the user is cached inside SDK as current user,and accessible via {@link KiiUser.getCurrentUser()}.
         *  User token and token expiration is also cached and can be get by {@link KiiUser#getAccessTokenObject()}.
         *  Access token won't be expired unless you set it explicitly by {@link Kii.setAccessTokenExpiration()}.
         *  The network must already be set up via setupNetwork<br>
         *  If the opitons is invalid, callbacks.failure or reject callback of promise will be called. <br>
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         * @param options A dictionary of key/values to pass to KiiSocialConnect
         *
         *   <br><b> Facebook </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of Facebook.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Twitter </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>oauth_token</td>
         *   <td>String</td>
         *   <td>OAuth access token of twitter.</td>
         *   <td>This is mandatory. </td>
         *   </tr>
         *   <tr>
         *   <td>oauth_token_secret</td>
         *   <td>String</td>
         *   <td>OAuth access token secret of twitter.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Google </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of Google.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Renren </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of Renren.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> QQ </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of QQ.</td>
         *   <td>This is mandatory. </td>
         *   </tr>
         *   <tr>
         *   <td>openID</td>
         *   <td>String</td>
         *   <td>OpenID of QQ.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a logged in KiiUser instance.</li>
         *         <li>params[1] is the KiiSocialNetworkName used to login.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *         <li>error.network is the KiiSocialNetworkName used to login.</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *      // example to use callbacks directly
         *      // Example of using no option
         *      KiiSocialConnect.logIn(KiiSocialNetworkName.FACEBOOK, null, {
         *
         *          success: function(user, network) {
         *              // do something now that the user is logged in
         *          },
         *
         *          failure: function(user, network, anErrorString) {
         *              // do something with the error response
         *          }
         *      });
         *
         *      // example to use Promise
         *      KiiSocialConnect.logIn(KiiSocialNetworkName.FACEBOOK, null).then(
         *          function(params) {
         *              // do something now that the user is logged in
         *          },
         *          function(error) {
         *              // do something with the error response
         *          }
         *      );
         */
        static logIn(
            networkName: KiiSocialNetworkName,
            options: KiiSocialConnectOptions,
            callbacks?: {
                success(user: KiiUser, network: KiiSocialNetworkName): any;
                failure(user: KiiUser, network: KiiSocialNetworkName, anErrorString: string): any;
            },
        ): Promise<[KiiUser, KiiSocialNetworkName]>;

        /**
         * Link the currently logged in user with a social network
         *
         *  This will initiate the login process for the given network, which for SSO-enabled services like Facebook, will send the user to the Facebook site for authentication. There must be a
         *  currently authenticated KiiUser. Otherwise, you can use the logIn: method to create and log in a KiiUser using a network. The network must already be set up via setupNetwork<br>
         *  If there is not logged-in user to link with, callbacks.failure or reject callback of promise will be called. <br>
         *  If the opitons is invalid, callbacks.failure or reject callback of promise will be called. <br>
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         * @param options A dictionary of key/values to pass to KiiSocialConnect
         *   <br><b> Facebook </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of Facebook.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Twitter </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>oauth_token</td>
         *   <td>String</td>
         *   <td>OAuth access token of twitter.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   <tr>
         *   <td>oauth_token_secret</td>
         *   <td>String</td>
         *   <td>OAuth access token secret of twitter.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Google </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of Google.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> Renren </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of Renren.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         *
         *   <br><b> QQ </b>
         *   <table border="1" cellspacing="0">
         *   <thead>
         *   <tr bgcolor="#CCCCFF">
         *   <th>Key</th>
         *   <th>Value type</th>
         *   <th>Value</th>
         *   <th>Note</th>
         *   </tr>
         *   </thead>
         *   <tbody>
         *   <tr>
         *   <td>access_token</td>
         *   <td>String</td>
         *   <td>Access token of QQ.</td>
         *   <td>This is mandatory. </td>
         *   </tr>
         *   <tr>
         *   <td>openID</td>
         *   <td>String</td>
         *   <td>OpenID of QQ.</td>
         *   <td>This is mandatory.</td>
         *   </tr>
         *   </tbody>
         *   </table>
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a linked KiiUser instance.</li>
         *         <li>params[1] is the KiiSocialNetworkName used to link.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is current logged-in KiiUser instance. If there is not logged-in user, it will be null.</li>
         *         <li>error.message</li>
         *         <li>error.network is the KiiSocialNetworkName used to link.</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *      // example to use callbacks directly
         *      // Example of using no option
         *      KiiSocialConnect.linkCurrentUserWithNetwork(KiiSocialNetworkName.FACEBOOK, null, {
         *
         *          success: function(user, network) {
         *              // do something now that the user is linked
         *          },
         *
         *          failure: function(user, network, anErrorString) {
         *              // do something with the error response
         *          }
         *      });
         *
         *      // example to use Promise
         *      // Example of using no option
         *      KiiSocialConnect.linkCurrentUserWithNetwork(KiiSocialNetworkName.FACEBOOK, null).then(
         *          function(params) {
         *              // do something now that the user is linked
         *          },
         *          function(error) {
         *              // do something with the error response
         *          }
         *      );
         */
        static linkCurrentUserWithNetwork(
            networkName: KiiSocialNetworkName,
            options: KiiSocialConnectOptions,
            callbacks?: {
                success(user: KiiUser, network: KiiSocialNetworkName): any;
                failure(user: KiiUser, network: KiiSocialNetworkName, anErrorString: string): any;
            },
        ): Promise<[KiiUser, KiiSocialNetworkName]>;

        /**
         * Unlink the currently logged in user with a social network
         *
         *  The network must already be set up via setupNetwork
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is a unlinked KiiUser instance.</li>
         *         <li>params[1] is the KiiSocialNetworkName used to unlink.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is current logged-in KiiUser instance. If there is not logged-in user, it will be null.</li>
         *         <li>error.message</li>
         *         <li>error.network is the KiiSocialNetworkName used to unlink.</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *
         *      // example to use callbacks directly
         *      KiiSocialConnect.unLinkCurrentUserFromNetwork(KiiSocialNetworkName.FACEBOOK, {
         *
         *          success: function(user, network) {
         *              // do something now that the user is unlinked
         *          },
         *
         *          failure: function(user, network, anErrorString) {
         *              // do something with the error response
         *          }
         *      });
         *
         *      // example to use Promise
         *      KiiSocialConnect.unLinkCurrentUserFromNetwork(KiiSocialNetworkName.FACEBOOK).then(
         *          function(params) {
         *              // do something now that the user is unlinked
         *          },
         *          function(error) {
         *              // do something with the error response
         *          }
         *      );
         */
        static unLinkCurrentUserFromNetwork(
            networkName: KiiSocialNetworkName,
            callbacks?: {
                success(user: KiiUser, network: KiiSocialNetworkName): any;
                failure(user: KiiUser, network: KiiSocialNetworkName, anErrorString: string): any;
            },
        ): Promise<[KiiUser, KiiSocialNetworkName]>;

        /**
         * Retrieve the current user's access token from a social network
         * The network must be set up and linked to the current user. It is recommended you save this to preferences for multi-session use.
         *
         * @deprecated Use {@link KiiSocialConnect.getAccessTokenObjectForNetwork} instead.
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         *
         * @return The current access token, null if unavailable
         */
        static getAccessTokenForNetwork(
            networkName: KiiSocialNetworkName,
        ): string;

        /**
         * Retrieve the current user's access token expiration date from a social network
         *
         * The network must be set up and linked to the current user. It is recommended you save this to preferences for multi-session use.
         *
         * @deprecated Use {@link KiiSocialConnect.getAccessTokenObjectForNetwork} instead.
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         *
         * @return The current access token expiration date, null if unavailable
         */
        static getAccessTokenExpirationForNetwork(
            networkName: KiiSocialNetworkName,
        ): string;

        /**
         * Retrieve the current user's access token object from a social network
         *
         * The network must be set up and linked to the current user.
         * It is recommended you save this to preferences for multi-session use.<br><br>
         * Following parameters can be assigned to object.<br><br>
         * <b>Facebook</b>
         * <li>access_token</li>
         * <li>expires_in</li>
         * <li>kii_new_user</li>
         * <br>
         * <b>Twitter</b>
         * <li>oauth_token</li>
         * <li>oauth_token_secret</li>
         * <li>kii_new_user</li>
         * <br>
         * <b>Google</b>
         * <li>access_token</li>
         * <li>kii_new_user</li>
         * <br>
         * <b>RenRen</b>
         * <li>access_token</li>
         * <li>kii_new_user</li>
         * <br>
         * <b>QQ</b>
         * <li>access_token</li>
         * <li>openID</li>
         * <li>kii_new_user</li>
         *
         * @param networkName One of the supported KiiSocialNetworkName values
         *
         * @return tokenObject The current access token object, null if unavailable.
         */
        static getAccessTokenObjectForNetwork(
            networkName: KiiSocialNetworkName,
        ): any;
    }

    /**
     * Represents a Thing object
     */
    class KiiThing {
        /**
         * of this thing.
         * For details refer to {@link KiiThing.register}
         */
        fields: KiiThingFields;

        /**
         * Get thing ID.
         *
         * @return thing id
         */
        getThingID(): string;

        /**
         * Get vendor thing ID.
         *
         * @return vendor thing id
         */
        getVendorThingID(): string;

        /**
         * Get access token of this thing.
         *
         * @return access token of this thing.
         */
        getAccessToken(): string;

        /**
         * Get created time of this thing.
         *
         * @return created time of this thing.
         */
        getCreated(): Date;

        /**
         * Get disabled status of this thing.
         *
         * @return true if thing is disabled, false otherwise.
         */
        getDisabled(): boolean;

        /**
         * Get online status of the thing.
         *
         * @return true if the thing is online, false otherwise. The return value will be null initially until the thing is connected for the first time.
         */
        isOnline(): boolean;

        /**
         * Get online status modified date of the thing.
         *
         * @return online status modified time of this thing. The date will be null initially until the thing is connected for the first time.
         */
        getOnlineStatusModifiedAt(): Date;

        /**
         * Register thing in KiiCloud.<br>
         * This API doesnt require users login Anonymous user can register thing.
         * <br>
         * Propertis started with '_' in the fields is reserved by Kii Cloud.<br>
         * Those properties are indexed in Kii Cloud storage.<br>
         * Properties not started with '_' is custom properties defined by developer.<br>
         * Custom properties are not indexed in KiiCloud storage.<br>
         * Following properties are readonly and ignored on creation/{@link #update} of thing.<br>
         * '_thingID', '_created', '_accessToken' <br>
         * Following properties are readonly after creation and will be ignored on {@link #update} of thing.<br>
         * '_vendorThingID', '_password'<br>
         * As Property prefixed with '_' is reserved by Kii Cloud,
         * properties other than ones described in the parameter secion
         * and '_layoutPosition' are ignored on creation/{@link #update} of thing.<br>
         * Those ignored properties won't be removed from fields object passed as argument.
         * However it won't be reflected to fields object property of created/updated Thing.
         *
         * @param fields of the thing to be registered.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiThing.register(
         *         {
         *             _vendorThingID: "thing-XXXX-YYYY-ZZZZZ",
         *             _password: "thing-password",
         *             _thingType: "thermometer",
         *             yourCustomObj: // Arbitrary key can be used.
         *             { // Object, Array, Number, String can be used. Should be compatible with JSON.
         *                 yourCustomKey1: "value",
         *                 yourCustomKey2: 100
         *             }
         *         },
         *         {
         *             success: function(thing) {
         *                 // Register Thing succeeded.
         *             },
         *             failure: function(error) {
         *                 // Handle error.
         *             }
         *         }
         *     );
         *
         *     // example to use Promise
         *     KiiThing.register(
         *         {
         *             _vendorThingID: "thing-XXXX-YYYY-ZZZZZ",
         *             _password: "thing-password",
         *             _thingType: "thermometer",
         *             yourCustomObj: // Arbitrary key can be used.
         *             { // Object, Array, Number, String can be used. Should be compatible with JSON.
         *                 yourCustomKey1: "value",
         *                 yourCustomKey2: 100
         *             }
         *         }
         *     ).then(
         *         function(thing) {
         *             // Register Thing succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        static register(
            fields: KiiThingFields,
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Retrieve the latest thing information from KiiCloud.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing is already registered.
         *     thing.refresh({
         *         success: function(thing) {
         *             // Refresh succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing is already registered.
         *     thing.refresh().then(
         *         function(thing) {
         *             // Refresh succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        refresh(
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Update registered thing information in Kii Cloud
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @see KiiThing.register
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing is already registered.
         *     thing.fields._stringField1 = "new string value";
         *     thing.fields.customObject = {
         *         "customField1" : "abcd",
         *         "customField2" : 123
         *     };
         *     thing.update({
         *         success: function(thing) {
         *             // Update succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing is already registered.
         *     thing.fields._stringField1 = "new string value";
         *     thing.fields.customObject = {
         *         "customField1" : "abcd",
         *         "customField2" : 123
         *     };
         *     thing.update().then(
         *         function(thing) {
         *             // Update succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        update(
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Delete registered thing in Kii Cloud.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * It will delete bucket, topic which belongs to this thing,
         * entity belongs to the bucket/topic and all ownership information of thing.
         * This operation can not be reverted. Please carefully use this.
         *
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing is already registered.
         *     thing.deleteThing({
         *         success: function(thing) {
         *             // Delete succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing is already registered.
         *     thing.deleteThing().then(
         *         function(thing) {
         *             // Delete succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        deleteThing(
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Check if user/ group is owner of the thing.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login before execute this API.
         * <br>To let users to own Thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param owner whether the instance is owner of thing or not.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is the KiiThing instance which this method was called on.</li>
         *         <li>params[1] is a KiiUser/KiiGroup instance.</li>
         *         <li>params[2] is Boolean value, true is the user/group is owner of the thing, otherwise false.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/user is already registered.
         *     var user = KiiUser.userWithURI("kiicloud://users/xxxyyyy");
         *     thing.isOwner(user, {
         *         success: function(thing, user, isOwner) {
         *             if (isOwner) {
         *                 // user is owner of the thing.
         *             } else {
         *                 // user is not owner of the thing.
         *             }
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/user is already registered.
         *     var user = KiiUser.userWithURI("kiicloud://users/xxxyyyy");
         *     thing.isOwner(user).then(
         *         function(params) {
         *             var thing = params[0];
         *             var user = params[1];
         *             var isOwner = params[2];
         *             if (isOwner) {
         *                 // user is owner of the thing.
         *             } else {
         *                 // user is not owner of the thing.
         *             }
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        isOwner<T extends KiiUser | KiiGroup>(
            owner: T,
            callbacks?: { success(thing: KiiThing, user: T, isOwner: boolean): any; failure(error: Error): any },
        ): Promise<[KiiThing, T, boolean]>;

        /**
         * Register user/group as owner of this thing.
         * <br>Need user login before execute this API.
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param owner to be registered as owner.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is the KiiThing instance which this method was called on.</li>
         *         <li>params[1] is a KiiUser/KiiGroup instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     thing.registerOwner(group, {
         *         success: function(thing, group) {
         *             // Register owner succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     thing.registerOwner(group).then(
         *         function(params) {
         *             // Register owner succeeded.
         *             var thing = params[0];
         *             var group = params[1];
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        registerOwner<T extends KiiUser | KiiGroup>(
            owner: T,
            callbacks?: { success(thing: KiiThing, group: T): any; failure(error: Error): any },
        ): Promise<[KiiThing, T]>;

        /**
         * Register user/group as owner of specified thing.
         * <br>Need user login before execute this API.
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param thingID The ID of thing
         * @param owner instance of KiiUser/KiiGroup to be registered as owner.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiUser/KiiGroup instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     KiiThing.registerOwnerWithThingID("th.xxxx-yyyy-zzzz", group, {
         *         success: function(group) {
         *             // Register owner succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     KiiThing.registerOwnerWithThingID("th.xxxx-yyyy-zzzz", group).then(
         *         function(params) {
         *             // Register owner succeeded.
         *             var group = params[0];
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        static registerOwnerWithThingID<T extends KiiUser | KiiGroup>(
            thingID: string,
            owner: T,
            callbacks?: { success(group: T): any; failure(error: Error): any },
        ): Promise<T>;

        /**
         * Register user/group as owner of specified thing.
         * <br>Need user login before execute this API.
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param vendorThingID The vendor thing ID of thing
         * @param owner instance of KiiUser/KiiGroup to be registered as owner.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is a KiiUser/KiiGroup instance.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     KiiThing.registerOwnerWithVendorThingID("xxxx-yyyy-zzzz", group, {
         *         success: function(group) {
         *             // Register owner succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     KiiThing.registerOwnerWithVendorThingID("xxxx-yyyy-zzzz", group).then(
         *         function(group) {
         *             // Register owner succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        static registerOwnerWithVendorThingID<T extends KiiUser | KiiGroup>(
            vendorThingID: string,
            owner: T,
            callbacks?: { success(group: T): any; failure(error: Error): any },
        ): Promise<T>;

        /**
         * Remove ownership of thing from specified user/group.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param owner to be unregistered.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is the KiiThing instance which this method was called on.</li>
         *         <li>params[1] is a KiiUser/KiiGroup instance which had ownership of the thing removed.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     thing.unregisterOwner(group, {
         *         success: function(thing, group) {
         *             // Unregister owner succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing/group is already registered.
         *     var group = KiiGroup.groupWithURI("kiicloud://groups/xxxyyyy");
         *     thing.unregisterOwner(group).then(
         *         function(params) {
         *             // Unregister owner succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        unregisterOwner<T extends KiiUser | KiiGroup>(
            owner: T,
            callbacks?: { success(thing: KiiThing, group: T): any; failure(error: Error): any },
        ): Promise<[KiiThing, T]>;

        /**
         * Disable the thing.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own Thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * After succeeded, access token published for thing is disabled.
         * In a result, only the app administrator and owners of thing can access the thing.
         * Used when user lost the thing and avoid using by unknown users.
         * It doesn't throw error when the thing is already disabled.
         *
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing is already registered.
         *     thing.disable({
         *         success: function(thing) {
         *             // Disable succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing is already registered.
         *     thing.disable().then(
         *         function(thing) {
         *             // Disable succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        disable(
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Enable the thing.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own Thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * After succeeded, If thing is registered with "persistentToken" option,
         * token should be recovered (Access token which is used before disabling can be available).
         * Otherwise, it does not recovered.
         * It doesn't throw error when the thing is already enabled.
         *
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiThing instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume thing is already registered.
         *     thing.enable({
         *         success: function(thing) {
         *             // Enable succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume thing is already registered.
         *     thing.enable().then(
         *         function(thing) {
         *             // Disable succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        enable(
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Load thing with given vendor thing id.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own Thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * @param vendorThingID registered vendor thing id.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiThing.loadWithVendorThingID("thing-xxxx-yyyy",{
         *         success: function(thing) {
         *             // Load succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiThing.loadWithVendorThingID("thing-xxxx-yyyy").then(
         *         function(thing) {
         *             // Load succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        static loadWithVendorThingID(
            vendorThingID: string,
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Load thing with thing id given by Kii Cloud.
         * <br>This API is authorized by owner of thing.
         * <br>Need user login who owns this thing before execute this API.
         * <br>To let users to own Thing, please call {@link KiiThing#registerOwner}
         * <br>Note: if you obtain thing instance from {@link KiiAppAdminContext},
         * API is authorized by app admin.<br>
         *
         * thing id can be obtained by {@link thingID}
         *
         * @param thingID registered thing id.
         * @param callbacks object holds callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(thing). thing is a KiiThing instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiThing.loadWithThingID("thing-xxxx-yyyy",{
         *         success: function(thing) {
         *             // Load succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiThing.loadWithVendorThingID("thing-xxxx-yyyy").then(
         *         function(thing) {
         *             // Load succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        static loadWithThingID(
            thingID: string,
            callbacks?: { success(thing: KiiThing): any; failure(error: Error): any },
        ): Promise<KiiThing>;

        /**
         * Instantiate bucket belongs to this thing.
         *
         * @param bucketName name of the bucket.
         *
         * @return bucket instance.
         */
        bucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a encrypted bucket for this thing
         *
         * <br><br>The bucket will be created/accessed within this thing's scope
         *
         * @param bucketName The name of the bucket the user should create/access
         *
         * @return A working KiiEncryptedBucket object
         *
         * @example
         *     var thing = . . .; // a KiiThing
         *     var bucket = thing.encryptedBucketWithName("myBucket");
         */
        encryptedBucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Instantiate topic belongs to this thing.
         *
         * @param topicName name of the topic. Must be a not empty string.
         *
         * @return topic instance.
         */
        topicWithName(
            topicName: string,
        ): KiiTopic;

        /**
         * Gets a list of topics in this thing scope
         *
         * @param callbacks An object with callback methods defined
         * @param paginationKey You can specify the pagination key with the nextPaginationKey passed by callbacks.success. If empty string or no string object is provided, this API regards no
         * paginationKey specified.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is array of KiiTopic instances.</li>
         *           <li>params[1] is string of nextPaginationKey.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is the KiiThing instance which this method was called on. </li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var thing = . . .; // a KiiThing
         *     thing.listTopics({
         *         success: function(topicList, nextPaginationKey) {
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 thing.listTopics({
         *                     success: function(topicList, nextPaginationKey) {...},
         *                     failure: function(anErrorString) {...}
         *                 }, nextPaginationKey);
         *             }
         *         },
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use promise
         *     var thing = . . .; // a KiiThing
         *     thing.listTopics().then(
         *         function(params) {
         *             var topicList = params[0];
         *             var nextPaginationKey = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 thing.listTopics(null, nextPaginationKey).then(
         *                     function(params) {...},
         *                     function(error) {...}
         *                 );
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        listTopics(
            callbacks?: {
                success(topicList: KiiTopic[], nextPaginationKey: string): any;
                failure(anErrorString: string): any;
            },
            paginationKey?: string,
        ): Promise<[KiiTopic[], string]>;

        /**
         * Instantiate push subscription for this thing.
         *
         * @return push subscription object.
         */
        pushSubscription(): KiiPushSubscription;
    }

    /**
     * represents a KiiThingContext object
     */
    class KiiThingContext {
        /**
         * Creates a reference to a bucket in App scope operated by thing.
         *
         * @param bucketName The name of the bucket the app should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *         Kii.authenticateAsThing("vendorThingID", "password", {
         *             success: function(thingAuthContext) {
         *                 var bucket = thingAuthContext.bucketWithName("myAppBucket");
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        bucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a encrypted bucket in App scope operated by thing.
         *     <br><br>The bucket will be created/accessed within this app's scope
         *
         * @param bucketName The name of the bucket the app should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *         Kii.authenticateAsThing("vendorThingID", "password", {
         *             success: function(thingAuthContext) {
         *                 var bucket = thingAuthContext.encryptedBucketWithName("myAppBucket");
         *             },
         *             failure: function(errorString, errorCode) {
         *                 // auth failed.
         *             }
         *         });
         */
        encryptedBucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to an object operated by thing using object`s URI.
         *
         * @param object URI.
         *
         * @return A working KiiObject instance
         *
         * @throws If the URI is null, empty or does not have correct format.
         */
        objectWithURI(
            object: string,
        ): KiiObject;

        /**
         * Creates a reference to a topic in App scope operated by thing.
         * <br><br>The Topic will be created/accessed within this app's scope
         *
         * @param topicName name of the topic. Must be a not empty string.
         *
         * @return topic instance.
         */
        topicWithName(
            topicName: string,
        ): KiiTopic;

        /**
         * Gets a list of topics in app scope
         *
         * @param callbacks An object with callback methods defined
         * @param paginationKey You can specify the pagination key with the nextPaginationKey passed by callbacks.success. If empty string or no string object is provided, this API regards no
         * paginationKey specified.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is array of KiiTopic instances.</li>
         *           <li>params[1] is string of nextPaginationKey.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is a KiiAppAdminContext instance which this method was called on.</li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Assume you already have thingAuthContext instance.
         *     thingAuthContext.listTopics({
         *         success: function(topicList, nextPaginationKey) {
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 thingAuthContext.listTopics({
         *                     success: function(topicList, nextPaginationKey) {...},
         *                     failure: function(anErrorString) {...}
         *                 }, nextPaginationKey);
         *             }
         *         },
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     // Assume you already have thingAuthContext instance.
         *     thingAuthContext.listTopics().then(
         *         function(params) {
         *             var topicList = params[0];
         *             var nextPaginationKey = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 thingAuthContext.listTopics(null, nextPaginationKey).then(
         *                     function(params) {...},
         *                     function(error) {...}
         *                 );
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        listTopics(
            callbacks?: {
                success(topicList: KiiTopic[], nextPaginationKey: string): any;
                failure(anErrorString: string): any;
            },
            paginationKey?: string,
        ): Promise<[KiiTopic[], string]>;

        /**
         * Gets authenticated KiiThing instance.
         * <br>Returned thing instance only have thingID, vendorThingID and accessToken.
         * (vendorThingID is not included when you used
         * {@link Kii.authenticateAsThingWithToken()} to obtain KiiThingContext.)
         * <br>Please execute {@link KiiThing#refresh()} to obtain other properties.
         *
         * @return return authenticated KiiThing instance.
         */
        getAuthenticatedThing(): KiiThing;

        /**
         * Instantiate push installation for this thing.
         *
         * @return push installation object.
         */
        pushInstallation(): KiiPushInstallation;
    }

    /**
     * Represents a Topic object.
     */
    class KiiTopic {
        /**
         * get name of this topic
         *
         * @return name of this topic.
         */
        getName(): string;

        /**
         * Checks whether the topic already exists or not.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(existed). true if the topic exists.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiTopic instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume topic is already instantiated.
         *     topic.exists({
         *         success: function(existed) {
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume topic is already instantiated.
         *     topic.exists().then(
         *         function(existed){
         *         },
         *         function(error){
         *             // Handle error.
         *         });
         */
        exists(
            callbacks?: { success(existed: boolean): any; failure(error: Error): any },
        ): Promise<boolean>;

        /**
         * Save this topic on Kii Cloud.
         * Note that only app admin can save application scope topic.
         *
         * @param callbacks callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theSavedTopic). theSavedTopic is a KiiTopic instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiTopic instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume topic is already instantiated.
         *     topic.save({
         *         success: function(topic) {
         *             // Save topic succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume topic is already instantiated.
         *     topic.save().then(
         *         function(topic) {
         *             // Save topic succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        save(
            callbacks?: { success(topic: KiiTopic): any; failure(error: Error): any },
        ): Promise<KiiTopic>;

        /**
         * Send message to the topic.
         *
         * @param message to be sent.
         * @param callbacks callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is an Array instance.
         *       <ul>
         *         <li>params[0] is the KiiTopic instance which this method was called on.</li>
         *         <li>params[1] is the message object to send.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiTopic instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume topic is already instantiated.
         *     var contents = {
         *         message : "hello push!"
         *     };
         *     var message = new KiiPushMessageBuilder(contents).build();
         *     topic.sendMessage(message, {
         *         success: function(topic, message) {
         *             // Send message succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume topic is already instantiated.
         *     var contents = {
         *         message : "hello push!"
         *     };
         *     var message = new KiiPushMessageBuilder(contents).build();
         *     topic.sendMessage(message).then(
         *         function(params) {
         *             // Send message succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        sendMessage<T>(
            message: T,
            callbacks?: { success(topic: KiiTopic, message: T): any; failure(error: Error): any },
        ): Promise<[KiiTopic, T]>;

        /**
         * Delete the topic.
         *
         * @param callbacks callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theDeletedTopic). theDeletedTopic is a KiiTopic instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiTopic instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // assume topic is already instantiated.
         *     topic.deleteTopic({
         *         success: function(topic) {
         *             // Delete topic succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     // assume topic is already instantiated.
         *     topic.deleteTopic().then(
         *         function(topic) {
         *             // Delete topic succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        deleteTopic(
            callbacks?: { success(topic: KiiTopic): any; failure(error: Error): any },
        ): Promise<KiiTopic>;

        /**
         * Get ACL object of this topic.
         * Access to topic can be configured by adding/removing KiiACLEntry
         * to/from obtained acl object.
         *
         * @return acl object of this topic.
         */
        acl(): KiiACL;
    }

    /**
     * Represents a KiiUser object
     */
    class KiiUser {
        /**
         * @deprecated Use {@link KiiUser.getId} instead.
         *   Get the UUID of the given user, assigned by the server
         */
        getUUID(): string;

        /**
         * Get the ID of the current KiiUser instance.
         *
         * @return Id of the user or null if the user has not saved to cloud.
         */
        getID(): string;

        /**
         * Get the username of the given user
         */
        getUsername(): string;

        /**
         * Return true if the user is disabled, false when enabled and undefined
         * when user is not refreshed.
         * Call {@link KiiUser#refresh()} prior calling this method to get
         * correct status.
         */
        disabled(): void;

        /**
         * Get the display name associated with this user
         */
        getDisplayName(): string;

        /**
         * Set the display name associated with this user. Cannot be used for logging a user in; is non-unique
         *
         * @param value Must be between 1-50 alphanumeric characters.
         *
         * @throws If the displayName is not a valid format
         */
        setDisplayName(
            value: string,
        ): void;

        /**
         * Get whether or not the user is pseudo user.
         * If this method is not called for current login user, calling
         * {@link KiiUser#refresh()} method is necessary to get a correct value.
         *
         * @return whether this user is pseudo user or not.
         */
        isPseudoUser(): boolean;

        /**
         * Get the email address associated with this user
         */
        getEmailAddress(): string;

        /**
         * Get the email of this user that has not been verified.
         * When the user's email has been changed and email verification is required in you app configuration,
         * New email is stored as pending email.
         * After the new email has been verified, the address can be obtained by {@link KiiUser.getEmailAddress}
         *
         * @return User's new email address has not been verified.
         *     null if no pending email field is included in refresh
         *     response or undefined when no refresh operation has been done before.
         */
        getPendingEmailAddress(): string;

        /**
         * Get the phone number associated with this user
         */
        getPhoneNumber(): string;

        /**
         * Get the phone of this user that has not been verified.
         * When the user's phone has been changed and phone verification is required in you app configuration,
         * New phone is stored as pending phone.
         * After the new phone has been verified, the address can be obtained by {@link KiiUser.getPhoneNumber}
         *
         * @return User's new phone number has not been verified.
         *     null if no pending phone field is included in refresh
         *     response or undefined when no refresh operation has been done before.
         */
        getPendingPhoneNumber(): string;

        /**
         * Get the country code associated with this user
         */
        getCountry(): string;

        /**
         * Set the country code associated with this user
         *
         * @param value The country code to set. Must be 2 alphabetic characters. Ex: US, JP, CN
         *
         * @throws If the country code is not a valid format
         */
        setCountry(
            value: string,
        ): void;

        /**
         * Get the locale associated with this user
         */
        getLocale(): string;

        /**
         * Set the locale associated with this user
         * The locale argument must be BCP 47 language tag.
         * Examples:
         * "en": English
         * "de-AT": German as used in Austria.
         * "zh-Hans-CN": Chinese written in simplified characters as used in China.
         *
         * @param value The locale to set.
         */
        setLocale(
            value: string,
        ): void;

        /**
         * Get the server's creation date of this user
         */
        getCreated(): string;

        /**
         * @deprecated Get the modified date of the given user, assigned by the server
         */
        getModified(): string;

        /**
         * Get the status of the user's email verification. This field is assigned by the server
         *
         * @return true if the user's email address has been verified by the user, false otherwise.
         *     Could be undefined if haven't obtained value from server or not allowed to see the value.
         *     Should be used by current login user to check the email verification status.
         */
        getEmailVerified(): boolean;

        /**
         * Get the status of the user's phone number verification. This field is assigned by the server
         *
         * @return true if the user's email address has been verified by the user, false otherwise
         *     Could be undefined if haven't obtained value from server or not allowed to see the value.
         *     Should be used by current login user to check the phone verification status.
         */
        getPhoneVerified(): boolean;

        /**
         * Get the social accounts that is linked to this user.
         * Refresh the user by {@link KiiUser#refresh()} prior call the method.
         * Otherwise, it returns empty object.
         *
         * @return Social network name as key and account info as value.
         */
        getLinkedSocialAccounts(): { [name: string]: KiiSocialAccountInfo };

        /**
         * Get the access token for the user - only available if the user is currently logged in
         */
        getAccessToken(): string;

        /**
         * Return the access token and token expire time in a object.
         * <table border=4 width=250>
         *   <tr>
         *     <th>Key</th>
         *     <th>Type</th>
         *     <th>Value</th>
         *   </tr>
         *   <tr>
         *     <td>"access_token"</td>
         *     <td>String</td>
         *     <td>required for accessing KiiCloud</td>
         *   </tr>
         *   <tr>
         *     <td>"expires_at"</td>
         *     <td>Date</td>
         *     <td>Access token expiration time, null if the user is not login user.</td>
         *   </tr>
         * </table>
         *
         * @return Access token and token expires in a object.
         */
        getAccessTokenObject(): KiiAccessTokenObject;

        /**
         * Get a specifically formatted string referencing the user
         *
         * <br><br>The user must exist in the cloud (have a valid UUID).
         *
         * @return A URI string based on the given user. null if a URI couldn't be generated.
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     var uri = user.objectURI();
         */
        objectURI(): string;

        /**
         * Sets a key/value pair to a KiiUser
         *
         * <br><br>If the key already exists, its value will be written over. If key is empty or starting with '_', it will do nothing. Accepted types are any JSON-encodable objects.
         *
         * @param key The key to set. The key must not be a system key (created, metadata, modified, type, uuid) or begin with an underscore (_)
         * @param value The value to be set. Object must be of a JSON-encodable type (Ex: dictionary, array, string, number, etc)
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     user.set("score", 4298);
         */
        set(
            key: string,
            value: any,
        ): void;

        /**
         * Gets the value associated with the given key
         *
         * @param key The key to retrieve
         *
         * @return The object associated with the key. null or undefined if none exists
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     var score = user.get("score");
         */
        get<T>(
            key: string,
        ): T;

        /**
         * The currently authenticated user
         *
         * @example
         *         var user = KiiUser.getCurrentUser();
         */
        static getCurrentUser(): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for manipulation. This user will not be authenticated until one of the authentication methods are called on it. It can be treated as any other
         * KiiObject before it is authenticated.
         *
         * @param username The user's desired username. Must be between 3 and 64 characters, which can include alphanumeric characters as well as underscores '_', dashes '-' and periods '.'
         * @param password The user's password. Must be between 4-50 characters, made up of ascii characters excludes control characters.
         *
         * @return a working KiiUser object
         *
         * @throws If the username is not in the proper format
         * @throws If the password is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithUsername("myusername", "mypassword");
         */
        static userWithUsername(
            username: string,
            password: string,
        ): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for registration. This user will not be authenticated until the registration method is called on it. It can be treated as any other KiiUser before
         * it is registered.
         *
         * @param phoneNumber The user's phone number
         * @param password The user's password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         *
         * @return a working KiiUser object
         *
         * @throws If the password is not in the proper format
         * @throws If the phone number is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithPhoneNumber("+874012345678", "mypassword");
         */
        static userWithPhoneNumber(
            phoneNumber: string,
            password: string,
        ): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for registration. This user will not be authenticated until the registration method is called on it. It can be treated as any other KiiUser before
         * it is registered.
         *
         * @param phoneNumber The user's phone number
         * @param username The user's desired username. Must be between 3 and 64 characters, which can include alphanumeric characters as well as underscores '_', dashes '-' and periods '.'
         * @param password The user's password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         *
         * @return a working KiiUser object
         *
         * @throws If the username is not in the proper format
         * @throws If the password is not in the proper format
         * @throws If the phone number is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithPhoneNumberAndUsername("+874012345678", "johndoe", "mypassword");
         */
        static userWithPhoneNumberAndUsername(
            phoneNumber: string,
            username: string,
            password: string,
        ): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for registration. This user will not be authenticated until the registration method is called on it. It can be treated as any other KiiUser before
         * it is registered.
         *
         * @param emailAddress The user's email address
         * @param password The user's password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         *
         * @return a working KiiUser object
         *
         * @throws If the password is not in the proper format
         * @throws If the email address is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithEmailAddress("johndoe@example.com", "mypassword");
         */
        static userWithEmailAddress(
            emailAddress: string,
            password: string,
        ): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for registration. This user will not be authenticated until the registration method is called on it. It can be treated as any other KiiUser before
         * it is registered.
         *
         * @param emailAddress The user's email address
         * @param username The user's desired username. Must be between 3 and 64 characters, which can include alphanumeric characters as well as underscores '_', dashes '-' and periods '.'
         * @param password The user's password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         *
         * @return a working KiiUser object
         *
         * @throws If the username is not in the proper format
         * @throws If the password is not in the proper format
         * @throws If the phone number is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithEmailAddressAndUsername("johndoe@example.com", "johndoe", "mypassword");
         */
        static userWithEmailAddressAndUsername(
            emailAddress: string,
            username: string,
            password: string,
        ): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for registration. This user will not be authenticated until the registration method is called on it. It can be treated as any other KiiUser before
         * it is registered.
         *
         * @param emailAddress The user's email address
         * @param phoneNumber The user's phone number
         * @param password The user's password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         *
         * @return a working KiiUser object
         *
         * @throws If the phone number is not in the proper format
         * @throws If the password is not in the proper format
         * @throws If the phone number is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithEmailAddressAndPhoneNumber("johndoe@example.com", "+874012345678", "mypassword");
         */
        static userWithEmailAddressAndPhoneNumber(
            emailAddress: string,
            phoneNumber: string,
            password: string,
        ): KiiUser;

        /**
         * Create a user object to prepare for registration with credentials pre-filled
         *
         * <br><br>Creates an pre-filled user object for registration. This user will not be authenticated until the registration method is called on it. It can be treated as any other KiiUser before
         * it is registered.
         *
         * @param emailAddress The user's email address
         * @param phoneNumber The user's phone number
         * @param username The user's desired username. Must be between 3 and 64 characters, which can include alphanumeric characters as well as underscores '_', dashes '-' and periods '.'
         * @param password The user's password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         *
         * @return a working KiiUser object
         *
         * @throws If the phone number is not in the proper format
         * @throws If the phone number is not in the proper format
         * @throws If the username is not in the proper format
         * @throws If the password is not in the proper format
         *
         * @example
         *     var user = KiiUser.userWithCredentials("johndoe@example.com", "+874012345678", "johndoe", "mypassword");
         */
        static userWithCredentials(
            emailAddress: string,
            phoneNumber: string,
            username: string,
            password: string,
        ): KiiUser;

        /**
         * Instantiate KiiUser that refers to existing user which has specified ID.
         * You have to specify the ID of existing KiiUser. Unlike KiiObject,
         * you can not assign ID in the client side.<br>
         * <b>NOTE</b>: This API does not access to the server.
         * After instantiation, call {@link KiiUser#refresh} to fetch the properties.
         *
         * @param userID ID of the KiiUser to instantiate.
         *
         * @return instance of KiiUser.
         *
         * @throws when passed userID is empty or null.
         *
         * @example
         *     var user = new KiiUser.userWithID("__USER_ID__");
         */
        static userWithID(
            userID: string,
        ): KiiUser;

        /**
         * Generate a new KiiUser based on a given URI
         *
         * @param uri The URI of the object to be represented
         *
         * @return A new KiiUser with its parameters filled in from the URI
         *
         * @throws If the URI is not in the proper format
         *
         * @example
         *     var user = new KiiUser.userWithURI("kiicloud://myuri");
         */
        static userWithURI(
            uri: string,
        ): KiiUser;

        /**
         * Creates a reference to a bucket for this user
         *
         * <br><br>The bucket will be created/accessed within this user's scope
         *
         * @param bucketName The name of the bucket the user should create/access
         *
         * @return A working KiiBucket object
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     var bucket = user.bucketWithName("myBucket");
         */
        bucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Creates a reference to a encrypted bucket for this user
         *
         * <br><br>The bucket will be created/accessed within this user's scope
         *
         * @param bucketName The name of the bucket the user should create/access
         *
         * @return A working KiiEncryptedBucket object
         *
         * @example
         *     var user = . . .; // a KiiUser
         *     var bucket = user.encryptedBucketWithName("myBucket");
         */
        encryptedBucketWithName(
            bucketName: string,
        ): KiiBucket;

        /**
         * Authenticates a user with the server.
         * If authentication successful, the user is cached inside SDK as current user,and accessible via
         * {@link KiiUser.getCurrentUser()}.
         * User token and token expiration is also cached and can be get by {@link KiiUser#getAccessTokenObject()}.
         * Access token won't be expired unless you set it explicitly by {@link Kii.setAccessTokenExpiration()}.<br>
         * If password or userIdentifier is invalid, callbacks.failure or reject callback of promise will be called. <br>
         *
         * @param userIdentifier The username, validated email address, or validated phone number of the user to authenticate
         * @param password The password of the user to authenticate
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theAuthenticatedUser). theAuthenticatedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiUser instance.If given password or userIdentifier is invalid, it will be null.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiUser.authenticate("myusername", "mypassword", {
         *         success: function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiUser.authenticate("myusername", "mypassword").then(
         *         function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        static authenticate(
            userIdentifier: string,
            password: string,
            callbacks?: {
                success(theAuthenticatedUser: KiiUser): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
        ): Promise<KiiUser>;

        /**
         * Asynchronously authenticates a user with the server using specified access token.
         * This method is non-blocking.<br><br>
         * Specified expiresAt won't be used by SDK. IF login successful,
         * we set this property so that you can get it later along with token
         * by {@link KiiUser#getAccessTokenObject()}.<br>
         * Also, if successful, the user is cached inside SDK as current user
         * and accessible via {@link KiiUser.getCurrentUser()}.<br>
         *
         * Note that, if not specified, token expiration time is not cached
         * and set to value equivalant to 275760 years.<br>
         *
         * If the specified token is expired, authenticataiton will be failed.
         * Authenticate the user again to renew the token.<br>
         *
         * If expiresAt is invalid, callbacks.failure or reject callback of promise will be called. <br>
         *
         * @param accessToken A valid access token associated with the desired user
         * @param callbacks An object with callback methods defined
         * @param expiresAt Access token expire time that has received by {@link KiiUser#getAccessTokenObject()}. This param is optional and can be omitted.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theAuthenticatedUser). theAuthenticatedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiUser instance.If expiresAt is invalid, it will be null.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     // Assume you stored the object get from KiiUser#getAccessTokenObject()
         *     // and now accessing by 'tokenObject' var.
         *     var token = tokenObject["access_token"];
         *     var expiresAt = tokenObject["expires_at"];
         *     expireDate.setHours(expireDate.getHours() + 24);
         *     KiiUser.authenticateWithToken(token, {
         *         success: function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     }, expiresAt);
         *
         *     // example to use Promise
         *     // Assume you stored the object get from KiiUser#getAccessTokenObject()
         *     // and now accessing by 'tokenObject' var.
         *     var token = tokenObject["access_token"];
         *     var expiresAt = tokenObject["expires_at"];
         *     expireDate.setHours(expireDate.getHours() + 24);
         *     KiiUser.authenticateWithToken(token, null, expiresAt).then(
         *         function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        static authenticateWithToken(
            accessToken: string,
            callbacks?: {
                success(theAuthenticatedUser: KiiUser): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
            expiresAt?: Date,
        ): Promise<KiiUser>;

        /**
         * Registers a user with the server
         *
         * <br><br>The user object must have an associated email/password combination.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theAuthenticatedUser). theAuthenticatedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiUser instance.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = KiiUser.userWithUsername("myusername", "mypassword");
         *     user.register({
         *         success: function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = KiiUser.userWithUsername("myusername", "mypassword");
         *     user.register().then(
         *         function(params) {
         *             // do something with the authenticated user
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        register(
            callbacks?: {
                success(theAuthenticatedUser: KiiUser): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
        ): Promise<KiiUser>;

        /**
         * Registers a user as pseudo user with the server
         *
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be ommited.
         * @param userFields Custom Fields to add to the user. This is optional and can be omitted.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theAuthenticatedUser). theAuthenticatedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var userFields = {"displayName":"yourName", "country":"JP", "age":30};
         *     KiiUser.registerAsPseudoUser({
         *         success: function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     }, userFields);
         *
         *     // example to use Promise
         *     var userFields = {"displayName":"yourName", "country":"JP", "age":30};
         *     KiiUser.registerAsPseudoUser(null, userFields).then(
         *         function(theAuthenticatedUser) {
         *             // do something with the authenticated user
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        static registerAsPseudoUser(
            callbacks?: {
                success(theAuthenticatedUser: KiiUser): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
            userFields?: any,
        ): Promise<KiiUser>;

        /**
         * Sets credentials data and custom fields to pseudo user.
         *
         * <br><br>This method is exclusive to pseudo user.
         * <br>password is mandatory and needs to provide at least one of login name, email address or phone number.
         *
         * @param password The user's password. Valid pattern is ^[\x20-\x7E]{4,50}$.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be ommited.
         * @param userFields Custom Fields to add to the user. This is optional and can be omitted.
         * @param removeFields An array of field names to remove from the user custom fields. Default fields are not removed from server.
         *   This is optional and can be omitted.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(user). user is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var identityData = { "username": "__USER_NAME_" };
         *     var userFields = { "displayName":"__DISPLAY_NAME","score":12344300 };
         *     var removeFields = ["age"];
         *     user.putIdentity(
         *         identityData,
         *         "__PASSWORD__",
         *         {
         *             success: function(user) {
         *               // do something with the updated user.
         *             },
         *             failure: function(user, errorString) {
         *               // check error response.
         *             }
         *         },
         *         userFields,
         *         removeFields
         *     );
         *
         *     // example to use Promise
         *     var identityData = { "username": "__USER_NAME_" };
         *     var userFields = { "displayName":"__DISPLAY_NAME","score":12344300 };
         *     var removeFields = ["age"];
         *     user.putIdentity(
         *         identityData,
         *         "__PASSWORD__",
         *         null,
         *         userFields,
         *         removeFields
         *     ).then(
         *         function(user) {
         *             // do something with the updated user.
         *         },
         *         function(error) {
         *             // check error response.
         *         }
         *     );
         */
        putIdentity(
            identityData: identityData,
            password: string,
            callbacks?: { success(user: KiiUser): any; failure(user: KiiUser, errorString: string): any },
            userFields?: any,
            removeFields?: string[],
        ): Promise<KiiUser>;

        /**
         * Update user attributes.
         *
         * <br><br>If you want to update identity data of pseudo user, you must use KiiUser.putIdentity instead.
         *
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be ommited.
         * @param userFields Custom Fields to add to the user.
         * @param removeFields An array of field names to remove from the user custom fields. Default fields are not removed from server.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(user). user is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is a KiiUser instance.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var identityData = { "username": "__USER_NAME_" };
         *     var userFields = { "displayName":"__DISPLAY_NAME","score":12344300 };
         *     var removeFields = ["age"];
         *     user.update(
         *         identityData,
         *         {
         *             success: function(user) {
         *               // do something with the updated user.
         *             },
         *             failure: function(user, errorString) {
         *               // check error response.
         *             }
         *         },
         *         userFields,
         *         removeFields
         *     );
         *
         *     // example to use Promise
         *     var identityData = { "username": "__USER_NAME_" };
         *     var userFields = { "displayName":"__DISPLAY_NAME","score":12344300 };
         *     var removeFields = ["age"];
         *     user.update(
         *         identityData,
         *         null,
         *         userFields,
         *         removeFields
         *     ).then(
         *         function(user) {
         *             // do something with the updated user.
         *         },
         *         function(error) {
         *             // check error response.
         *         }
         *     );
         */
        update(
            identityData: identityData,
            callbacks?: { success(user: KiiUser): any; failure(user: KiiUser, errorString: string): any },
            userFields?: any,
            removeFields?: string[],
        ): Promise<KiiUser>;

        /**
         * Update a user's password on the server
         *
         * <br><br>Update a user's password with the server. The fromPassword must be equal to the current password associated with the account in order to succeed.
         *
         * @param fromPassword The user's current password
         * @param toPassword The user's desired password. Must be at least 4 characters, made up of alphanumeric and/or: @,#,$,%,^,&
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theUser). theUser is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.updatePassword("oldpassword", "newpassword", {
         *         success: function(theUser) {
         *             // do something
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.updatePassword("oldpassword", "newpassword").then(
         *         function(theUser) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        updatePassword(
            fromPassword: string,
            toPassword: string,
            callbacks?: { success(theUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Reset a user's password on the server
         *
         * <br><br>Reset a user's password on the server. The user is determined by the specified userIdentifier - which is an email address that has already been associated with an account. Reset
         * instructions will be sent to that identifier.
         * <br><br><b>Please Note:</b> This will reset the user's access token, so if they are currently logged in - their session will no longer be valid.
         *
         * @param userIdentifier The user's email address
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(). No parameter used.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiUser.resetPassword("johndoe@example.com", {
         *         success: function() {
         *             // do something
         *         },
         *
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiUser.resetPassword("johndoe@example.com").then(
         *         function() {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        static resetPassword(
            userIdentifier: string,
            callbacks?: { success(): any; failure(anErrorString: string): any },
        ): Promise<void>;

        /**
         * Reset the password of user <br>
         * Reset the password of user specified by given identifier. <br>
         * This api does not execute login after reset password.
         *
         * @param userIdentifier should be valid email address,
         *   global phone number or user identifier obtained by {@link #getID}.
         * @param notificationMethod specify the destination of message include link
         *   of resetting password. must one of "EMAIL", "SMS" or "SMS_PIN".
         *   - "EMAIL": Send email include link URL to reset password or password.
         *   (Contents are depends on 'Password Reset Flow' setting in app's
         *   Security settings.)
         *   - "SMS" : Send SMS include link URL to reset password.
         *   - "SMS_PIN" : Send SMS include PIN Code for reset password.
         *   different type of identifier and destination can be used
         *   as long as user have verified email, phone.
         *   (ex. User registers both email and phone. Identifier is email and
         *   notificationMethod is SMS.)
         * @param callbacks object includes callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(). No parameter used.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiUser.resetPasswordWithNotificationMethod("+819001234567", "SMS", {
         *         success: function() {
         *             // Operation succeeded.
         *         },
         *         failure: function(errString) {
         *             // Handle error.
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiUser.resetPasswordWithNotificationMethod("+819001234567", "SMS").then(
         *         function() {
         *             // Operation succeeded.
         *         },
         *         function(error) {
         *             // Handle error.
         *         }
         *     );
         */
        static resetPasswordWithNotificationMethod(
            userIdentifier: string,
            notificationMethod: string,
            callbacks?: { success(): any; failure(errString: string): any },
        ): Promise<void>;

        /**
         * Reset password with the PIN code in receipt SMS
         * After {@link KiiUser.resetPasswordWithNotificationMethod} is called with
         * "SMS_PIN", SMS includes the PIN code will be sent to the user's phone.
         * User can request the new password for login with the PIN code.
         * Need to call method for authentication after the new password is determined.
         *
         * @param userIdentifier should be valid email address,
         *   global phone number or user identifier obtained by {@link #getID}.
         * @param pinCode Received PIN code.
         * @param newPassword New password for login.
         *   If the 'Password Reset Flow' in app's security setting is set to
         *   'Generate password', it would be ignored and null can be passed.
         *   In this case, new password is generated on Kii Cloud and sent to user's
         *   phone. Otherwise valid password is required.
         * @param callbacks object includes callback functions.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(). No parameter used.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // Example using callback
         *     KiiUser.completeResetPassword("john.doe@kii.com", "new-password", "223789",
         *     {
         *         success: function() {
         *             // Succeeded.
         *         },
         *         failure: function(error) {
         *             // Handle error here.
         *         }
         *     });
         *
         *     // Example using Promise
         *     KiiUser.completeResetPassword(
         *         "john.doe@kii.com", "new-password", "223789").then(function() {
         *             // Succeeded.
         *         }).catch(function(error) {
         *             // Handle error here.
         *         });
         */
        static completeResetPassword(
            userIdentifier: string,
            pinCode: string,
            newPassword?: string,
            callbacks?: { success(): any; failure(error: Error): any },
        ): Promise<void>;

        /**
         * Verify the current user's phone number
         * <br><br>This method is used to verify the phone number of user currently
         * logged in.<br>
         * Verification code is sent from Kii Cloud when new user is registered with
         * phone number or user requested to change their phone number in the
         * application which requires phone verification.<br>
         * (You can enable/disable phone verification through the console in
         * developer.kii.com)<br>
         * After the verification succeeded, new phone number becomes users phone
         * number and user is able to login with the phone number.<br>
         * To get the new phone number, please call {@link #refresh()} and call
         * {@link #getPhoneNumber()}<br>
         * Before completion of {@link #refresh()}, {@link #getPhoneNumber()} returns
         * cached phone number. It could be old phone number or undefined.
         *
         * @param verificationCode The code which verifies the currently logged in user
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theUser). theUser is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.verifyPhoneNumber("012345", {
         *         success: function(theUser) {
         *             // do something
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.verifyPhoneNumber("012345").then(
         *         function(theUser) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        verifyPhoneNumber(
            verificationCode: string,
            callbacks?: { success(theUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Resend the email verification code to the user
         *
         * <br><br>This method will re-send the email verification to the currently logged in user
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theUser). theUser is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.resendEmailVerification({
         *         success: function(theUser) {
         *             // do something
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.resendEmailVerification().then(
         *         function(theUser) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        resendEmailVerification(
            callbacks?: { success(theUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Resend the SMS verification code to the user
         *
         * <br><br>This method will re-send the SMS verification to the currently logged in user
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theUser). theUser is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.resendPhoneNumberVerification({
         *         success: function(theUser) {
         *             // do something
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.resendPhoneNumberVerification().then(
         *         function(theUser) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        resendPhoneNumberVerification(
            callbacks?: { success(theUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Retrieve a list of groups which the user is a member of
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiUser instance which this method was called on.</li>
         *         <li>params[1] is array of KiiGroup instances.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.memberOfGroups({
         *         success: function(theUser, groupList) {
         *             // do something with the results
         *             for(var i=0; i&lt;groupList.length; i++) {
         *                 var g = groupList[i]; // a KiiGroup object
         *             }
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.memberOfGroups().then(
         *         function(params) {
         *             // do something with the results
         *             var theUser = params[0];
         *             var groupList = params[1];
         *             for(var i=0; i&lt;groupList.length; i++) {
         *                 var g = groupList[i]; // a KiiGroup object
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        memberOfGroups(
            callbacks?: {
                success(theUser: KiiUser, groupList: KiiGroup[]): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
        ): Promise<[KiiUser, KiiGroup[]]>;

        /**
         * Retrieve the groups owned by this user. Group in the groupList
         * does not contain all the property of group. To get all the
         * property from cloud, a {@link KiiGroup#refresh(callback)} is necessary.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(params). params is Array instance.
         *       <ul>
         *         <li>params[0] is the KiiUser instance which this method was called on.</li>
         *         <li>params[1] is array of KiiGroup instances.</li>
         *       </ul>
         *     </li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.ownerOfGroups({
         *         success: function(theUser, groupList) {
         *             // do something with the results
         *             for(var i=0; i&lt;groupList.length; i++) {
         *                 var g = groupList[i]; // a KiiGroup object
         *             }
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.ownerOfGroups().then(
         *         function(params) {
         *             // do something with the results
         *             var theUser = params[0];
         *             var groupList = params[1];
         *             for(var i=0; i&lt;groupList.length; i++) {
         *                 var g = groupList[i]; // a KiiGroup object
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        ownerOfGroups(
            callbacks?: {
                success(theUser: KiiUser, groupList: KiiGroup[]): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
        ): Promise<[KiiUser, KiiGroup[]]>;

        /**
         * Change phone number of logged in user.
         * If the phone number verification is required by your app configuration,
         * User's phone number would not changed to new one until the new phone number verification has been done.
         * In this case, new phone can be obtained by {@link KiiUser#getPendingPhoneNumber()}.
         * This API does not refresh the KiiUser automatically.
         * Please execute {@link KiiUser#refresh()} before checking the value of {@link KiiUser#getPhoneNumber()} or {@link KiiUser#getPendingPhoneNumber()}.
         *
         * @param newPhoneNumber The new phone number to change to
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theUser). theUser is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.changePhone('+19415551234', {
         *         success: function(theUser) {
         *             // do something on success
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.changePhone('+19415551234').then(
         *         function(theUser) {
         *             // do something on success
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        changePhone(
            newPhoneNumber: string,
            callbacks?: { success(theUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Change email of logged in user.
         * If the email address verification is required by your app configuration,
         * User's email would not changed to new one until the new email verification has been done.
         * In this case, new mail address can be obtained by {@link KiiUser#getPendingEmailAddress()}.
         * This API does not refresh the KiiUser automatically.
         * Please execute {@link KiiUser#refresh()} before checking the value of {@link KiiUser#getEmailAddress()} or {@link KiiUser#getPendingEmailAddress()}
         *
         * @param newEmail The new email address to change to
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theUser). theUser is KiiUser instance which this method was called on.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.currentUser();
         *     user.changeEmail('mynewemail@kii.com', {
         *         success: function(theUser) {
         *             // do something on success
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.currentUser();
         *     user.changeEmail('mynewemail@kii.com').then(
         *         function(theUser) {
         *             // do something on success
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        changeEmail(
            newEmail: string,
            callbacks?: { success(theUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Saves the latest user values to the server
         *
         * <br><br>If the user does not yet exist, it will NOT be created. Otherwise, the fields that have changed will be updated accordingly.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theSavedUser). theSavedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.getCurrentUser(); // a KiiUser
         *     user.save({
         *         success: function(theSavedUser) {
         *             // do something with the saved user
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.getCurrentUser(); // a KiiUser
         *     user.save().then(
         *         function(theSavedUser) {
         *             // do something with the saved user
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        save(
            callbacks?: { success(theSavedUser: KiiUser): any; failure(theUser: KiiUser, anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Updates the local user's data with the user data on the server
         *
         * <br><br>The user must exist on the server. Local data will be overwritten.
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theRefreshedUser). theRefreshedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.getCurrentUser(); // a KiiUser
         *     user.refresh({
         *         success: function(theRefreshedUser) {
         *             // do something with the refreshed user
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.getCurrentUser(); // a KiiUser
         *     user.refresh().then(
         *         function(theRefreshedUser) {
         *             // do something with the refreshed user
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        refresh(
            callbacks?: {
                success(theRefreshedUser: KiiUser): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
        ): Promise<KiiUser>;

        /**
         * Delete the user from the server
         *
         * @param callbacks An object with callback methods defined
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theDeletedUser). theDeletedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.target is the KiiUser instance which this method was called on.</li>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = Kii.getCurrentUser(); // a KiiUser
         *     user.delete({
         *         success: function(theDeletedUser) {
         *             // do something
         *         },
         *
         *         failure: function(theUser, anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     var user = Kii.getCurrentUser(); // a KiiUser
         *     user.delete().then(
         *         function(theDeletedUser) {
         *             // do something
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        delete(
            callbacks?: {
                success(theDeletedUser: KiiUser): any;
                failure(theUser: KiiUser, anErrorString: string): any;
            },
        ): Promise<KiiUser>;

        /**
         * Logs the currently logged-in user out of the KiiSDK
         *
         * @example
         *         KiiUser.logOut();
         */
        static logOut(): void;

        /**
         * Checks to see if there is a user authenticated with the SDK
         *
         * @example
         *         if(KiiUser.loggedIn()) {
         *             // do something
         *         }
         */
        static loggedIn(): boolean;

        /**
         * Find registered KiiUser with the email.<br>
         * If there are no user registers with the specified email or if there are but not verified email yet,
         * callbacks.failure or reject callback of promise will be called.<br>
         * <br><br>
         * <b>Note:</b>
         * <ul>
         * <li>If "Expose Full User Data To Others" is enabled in the application console, the response will contain full of the user data.</li>
         * <li>Otherwise, the response will only contain "userID", "loginName" and "displayName" field values if exist.</li>
         * </ul>
         *
         * @param email The email to find KiiUser who owns it.<br>
         *   Don't add prefix of "EMAIL:" described in REST API documentation. SDK will take care of it.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be ommited.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theMatchedUser). theMatchedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiUser.findUserByEmail("user_to_find@example.com", {
         *         success: function(theMatchedUser) {
         *             // Do something with the found user
         *         },
         *         failure: function(anErrorString) {
         *             // Do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiUser.findUserByEmail("user_to_find@example.com").then(
         *         function(theMatchedUser) {
         *             // Do something with the matched user
         *         },
         *         function(error) {
         *             // Do something with the error response
         *         }
         *     );
         */
        static findUserByEmail(
            email: string,
            callbacks?: { success(theMatchedUser: KiiUser): any; failure(anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Find registered KiiUser with the phone.<br>
         * If there are no user registers with the specified phone or if there are but not verified phone yet,
         * callbacks.failure or reject callback of promise will be called.
         * <br><br>
         * <b>Note:</b>
         * <ul>
         * <li>If "Expose Full User Data To Others" is enabled in the application console, the response will contain full of the user data.</li>
         * <li>Otherwise, the response will only contain "userID", "loginName" and "displayName" field values if exist.</li>
         * </ul>
         *
         * @param phone The phone number to find KiiUser who owns it.<br>
         *   Don't add prefix of "PHONE:" described in REST API documentation. SDK will take care of it.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be ommited.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theMatchedUser). theMatchedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiUser.findUserByPhone("phone_number_to_find", {
         *         success: function(theMatchedUser) {
         *             // Do something with the found user
         *         },
         *         failure: function(anErrorString) {
         *             // Do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiUser.findUserByPhone("phone_number_to_find").then(
         *         function(theMatchedUser) {
         *             // Do something with the matched user
         *         },
         *         function(error) {
         *             // Do something with the error response
         *         }
         *     );
         */
        static findUserByPhone(
            phone: string,
            callbacks?: { success(theMatchedUser: KiiUser): any; failure(anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Find registered KiiUser with the user name.<br>
         * If there are no user registers with the specified user name, callbacks.failure or reject callback of promise will be called.
         * <br><br>
         * <b>Note:</b>
         * <ul>
         * <li>If "Expose Full User Data To Others" is enabled in the application console, the response will contain full of the user data.</li>
         * <li>Otherwise, the response will only contain "userID", "loginName" and "displayName" field values if exist.</li>
         * </ul>
         *
         * @param username The user name to find KiiUser who owns it.<br>
         *   Don't add prefix of "LOGIN_NAME:" described in REST API documentation. SDK will take care of it.
         * @param callbacks An object with callback methods defined.
         *   This argument is mandatory and can't be ommited.
         *
         * @return return promise object.
         *   <ul>
         *     <li>fulfill callback function: function(theMatchedUser). theMatchedUser is KiiUser instance.</li>
         *     <li>reject callback function: function(error). error is an Error instance.
         *       <ul>
         *         <li>error.message</li>
         *       </ul>
         *     </li>
         *   </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     KiiUser.findUserByUsername("user_name_to_find", {
         *         success: function(theMatchedUser) {
         *             // Do something with the found user
         *         },
         *         failure: function(anErrorString) {
         *             // Do something with the error response
         *         }
         *     });
         *
         *     // example to use Promise
         *     KiiUser.findUserByUsername("user_name_to_find").then(
         *         function(theMatchedUser) {
         *             // Do something with the matched user
         *         },
         *         function(error) {
         *             // Do something with the error response
         *         }
         *     );
         */
        static findUserByUsername(
            username: string,
            callbacks?: { success(theMatchedUser: KiiUser): any; failure(anErrorString: string): any },
        ): Promise<KiiUser>;

        /**
         * Instantiate topic belongs to this user.
         *
         * @param topicName name of the topic. Must be a not empty string.
         *
         * @return topic instance.
         */
        topicWithName(
            topicName: string,
        ): KiiTopic;

        /**
         * Gets a list of topics in this user scope
         *
         * @param callbacks An object with callback methods defined
         * @param paginationKey You can specify the pagination key with the nextPaginationKey passed by callbacks.success. If empty string or no string object is provided, this API regards no
         * paginationKey specified.
         *
         * @return return promise object.
         *     <ul>
         *       <li>fulfill callback function: function(params). params is Array instance.
         *         <ul>
         *           <li>params[0] is array of KiiTopic instances.</li>
         *           <li>params[1] is string of nextPaginationKey.</li>
         *         </ul>
         *       </li>
         *       <li>reject callback function: function(error). error is an Error instance.
         *         <ul>
         *           <li>error.target is the KiiUser instance which this method was called on. </li>
         *           <li>error.message</li>
         *         </ul>
         *       </li>
         *     </ul>
         *
         * @example
         *     // example to use callbacks directly
         *     var user = . . .; // a KiiUser
         *     user.listTopics({
         *         success: function(topicList, nextPaginationKey) {
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 user.listTopics({
         *                     success: function(topicList, nextPaginationKey) {...},
         *                     failure: function(anErrorString) {...}
         *                 }, nextPaginationKey);
         *             }
         *         },
         *         failure: function(anErrorString) {
         *             // do something with the error response
         *         }
         *     });
         *
         *     // example to use callbacks directly
         *     var user = . . .; // a KiiUser
         *     user.listTopics().then(
         *         function(params) {
         *             var topicList = params[0];
         *             var nextPaginationKey = params[1];
         *             // do something with the result
         *             for(var i=0; i&lt;topicList.length; i++){
         *                 var topic = topicList[i];
         *             }
         *             if (nextPaginationKey != null) {
         *                 user.listTopics(null, nextPaginationKey).then(
         *                     function(params) {...},
         *                     function(error) {...}
         *                 );
         *             }
         *         },
         *         function(error) {
         *             // do something with the error response
         *         }
         *     );
         */
        listTopics(
            callbacks?: {
                success(topicList: KiiTopic[], nextPaginationKey: string): any;
                failure(anErrorString: string): any;
            },
            paginationKey?: string,
        ): Promise<[KiiTopic[], string]>;

        /**
         * Instantiate push subscription for this user.
         *
         * @return push subscription object.
         */
        pushSubscription(): KiiPushSubscription;

        /**
         * Instantiate push installation for this user.
         *
         * @return push installation object.
         */
        pushInstallation(): KiiPushInstallation;
    }

    /**
     * Represents a KiiUser builder
     */
    class KiiUserBuilder {
        /**
         * Create a KiiUser builder with identifier.
         *
         * <br><br>Create a KiiUser builder. This constructor is received
         * identifier. The identifier is one of user name, email address or
         * phone number. This constructor automatically identity What is
         * identifier and build proper KiiUser object on build method.
         *
         * <br><br> Some strings can be accepted as both user name and phone
         * number. If such string is passed to this constructor as
         * identifier, then phone number is prior to user name. String of
         * email address is in different class against user name and phone
         * number. So Email address is always identified correctly.
         *
         * @param identifier The user's user name, email address or phone
         *   number. Must be string. Must not be null or undefined.
         * @param password for the user. Must be string. Must not be null or
         *   undefined.
         *
         * @return KiiUser object builder.
         *
         * @throws If Identifier is not user name,
         *     email address or phone number.
         * @throws If the password is not in the
         *     proper format
         */
        static builderWithIdentifier(
            identifier: string,
            password: string,
        ): KiiUserBuilder;

        /**
         * Create KiiUser builder with email address
         *
         * <br><br>Create a KiiUser builder with email address.
         *
         * @param emailAddress email address.
         * @param password for the user. Must be string. Must not be null or
         *   undefined.
         *
         * @return KiiUser object builder.
         *
         * @throws If the email address is not in the proper format
         * @throws If the password is not in the
         *     proper format
         */
        static builderWithEmailAddress(
            emailAddress: string,
            password: string,
        ): KiiUserBuilder;

        /**
         * Create KiiUser builder with global phone number
         *
         * <br><br>Create a KiiUser builder with global phone number.
         *
         * @param phoneNumber global phone number.
         *
         * @return KiiUser object builder.
         *
         * @throws If the phone number is not in the proper format
         */
        static builderWithGlobalPhoneNumber(
            phoneNumber: string,
            password: string,
        ): KiiUserBuilder;

        /**
         * Create KiiUser builder with local phone number
         *
         * <br><br>Create a KiiUser builder with local phone number.
         *
         * @param phoneNumber local phone number.
         * @param country country code
         * @param password for the user. Must be string. Must not be null or
         *   undefined.
         *
         * @return KiiUser object builder.
         *
         * @throws If the phone number is not in the proper format
         * @throws If the country code is not a valid format
         * @throws If the password is not in the
         *     proper format
         */
        static builderWithLocalPhoneNumber(
            phoneNumber: string,
            country: string,
            password: string,
        ): KiiUserBuilder;

        /**
         * Create KiiUser builder with user name
         *
         * <br><br>Create a KiiUser builder with user name.
         *
         * @param username user name.
         * @param password for the user. Must be string. Must not be null or
         *   undefined.
         *
         * @return KiiUser object builder.
         *
         * @throws If the username is not in the proper format
         * @throws If the password is not in the
         *     proper format
         */
        static builderWithUsername(
            username: string,
            password: string,
        ): KiiUserBuilder;

        /**
         * Set user name.
         *
         * <br><br>Set user name. If null or undefined is passed. It is
         * ignored. Previous user name is remained.
         *
         * @param username user name.
         *
         * @return this builder object.
         *
         * @throws If the username is not in the
         *     proper format
         */
        setUsername(
            username: string,
        ): KiiUserBuilder;

        /**
         * Set email address.
         *
         * <br><br>Set email address. If null or undefined is passed. It is
         * ignored. Previous email address is remained.
         *
         * @param emailAddress email address.
         *
         * @return this builder object.
         *
         * @throws If the email address is not in the
         *     proper format
         */
        setEmailAddress(
            emailAddress: string,
        ): KiiUserBuilder;

        /**
         * Set global phone number.
         *
         * <br><br>Set global phone number. If null or undefined is
         * passed. It is ignored. Previous phone number is remained.
         *
         * @param phoneNumber global phone number.
         *
         * @return this builder object.
         *
         * @throws If the phone number is not
         *     in the proper format
         */
        setGlobalPhoneNumber(
            phoneNumber: string,
        ): KiiUserBuilder;

        /**
         * Set local phone number.
         *
         * <br><br>Set local phone number. If null or undefined is
         * passed. It is ignored. Previous phone number is remained.
         *
         * @param phoneNumber local phone number.
         * @param country country code
         *
         * @return this builder object.
         *
         * @throws If the phone number is not
         *     in the proper format
         * @throws If the country code is not a valid format
         */
        setLocalPhoneNumber(
            phoneNumber: string,
            country: string,
        ): KiiUserBuilder;

        /**
         * Build KiiUser object.
         *
         * <br><br> Build KiiUser object. This method verify set values.
         *
         * @return a working KiiUser object.
         */
        build(): KiiUser;
    }
}

import KiiACLAction = KiiCloud.KiiACLAction;
import KiiSite = KiiCloud.KiiSite;
import KiiAnalyticsSite = KiiCloud.KiiAnalyticsSite;
import KiiSocialNetworkName = KiiCloud.KiiSocialNetworkName;
import Kii = KiiCloud.Kii;
import KiiACL = KiiCloud.KiiACL;
import KiiACLEntry = KiiCloud.KiiACLEntry;
import KiiAnalytics = KiiCloud.KiiAnalytics;
import KiiAnonymousUser = KiiCloud.KiiAnonymousUser;
import KiiAnyAuthenticatedUser = KiiCloud.KiiAnyAuthenticatedUser;
import KiiAppAdminContext = KiiCloud.KiiAppAdminContext;
import KiiBucket = KiiCloud.KiiBucket;
import KiiClause = KiiCloud.KiiClause;
import KiiErrorParser = KiiCloud.KiiErrorParser;
import KiiGeoPoint = KiiCloud.KiiGeoPoint;
import KiiGroup = KiiCloud.KiiGroup;
import KiiObject = KiiCloud.KiiObject;
import KiiPushInstallation = KiiCloud.KiiPushInstallation;
import KiiPushMessageBuilder = KiiCloud.KiiPushMessageBuilder;
import KiiPushSubscription = KiiCloud.KiiPushSubscription;
import KiiQuery = KiiCloud.KiiQuery;
import KiiServerCodeEntry = KiiCloud.KiiServerCodeEntry;
import KiiServerCodeExecResult = KiiCloud.KiiServerCodeExecResult;
import KiiSocialConnect = KiiCloud.KiiSocialConnect;
import KiiThing = KiiCloud.KiiThing;
import KiiThingContext = KiiCloud.KiiThingContext;
import KiiTopic = KiiCloud.KiiTopic;
import KiiUser = KiiCloud.KiiUser;
import KiiUserBuilder = KiiCloud.KiiUserBuilder;
