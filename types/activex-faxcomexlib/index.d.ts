// Type definitions for Microsoft Fax Service Extended COM Type Library - FAXCOMEXLib 1.0
// Project: https://msdn.microsoft.com/en-us/library/windows/desktop/ms684513(v=vs.85).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="activex-stdole" />

declare namespace FAXCOMEXLib {
    const enum FAX_ACCESS_RIGHTS_ENUM {
        farMANAGE_CONFIG = 64,
        farMANAGE_IN_ARCHIVE = 256,
        farMANAGE_JOBS = 16,
        farMANAGE_OUT_ARCHIVE = 1024,
        farQUERY_CONFIG = 32,
        farQUERY_IN_ARCHIVE = 128,
        farQUERY_JOBS = 8,
        farQUERY_OUT_ARCHIVE = 512,
        farSUBMIT_HIGH = 4,
        farSUBMIT_LOW = 1,
        farSUBMIT_NORMAL = 2,
    }

    const enum FAX_ACCESS_RIGHTS_ENUM_2 {
        far2MANAGE_ARCHIVES = 256,
        far2MANAGE_CONFIG = 64,
        far2MANAGE_OUT_JOBS = 16,
        far2MANAGE_RECEIVE_FOLDER = 512,
        far2QUERY_ARCHIVES = 128,
        far2QUERY_CONFIG = 32,
        far2QUERY_OUT_JOBS = 8,
        far2SUBMIT_HIGH = 4,
        far2SUBMIT_LOW = 1,
        far2SUBMIT_NORMAL = 2,
    }

    const enum FAX_ACCOUNT_EVENTS_TYPE_ENUM {
        faetFXSSVC_ENDED = 16,
        faetIN_ARCHIVE = 4,
        faetIN_QUEUE = 1,
        faetNONE = 0,
        faetOUT_ARCHIVE = 8,
        faetOUT_QUEUE = 2,
    }

    const enum FAX_COVERPAGE_TYPE_ENUM {
        fcptLOCAL = 1,
        fcptNONE = 0,
        fcptSERVER = 2,
    }

    const enum FAX_DEVICE_RECEIVE_MODE_ENUM {
        fdrmAUTO_ANSWER = 1,
        fdrmMANUAL_ANSWER = 2,
        fdrmNO_ANSWER = 0,
    }

    const enum FAX_GROUP_STATUS_ENUM {
        fgsALL_DEV_NOT_VALID = 2,
        fgsALL_DEV_VALID = 0,
        fgsEMPTY = 1,
        fgsSOME_DEV_NOT_VALID = 3,
    }

    const enum FAX_JOB_EXTENDED_STATUS_ENUM {
        fjesANSWERED = 5,
        fjesBAD_ADDRESS = 10,
        fjesBUSY = 8,
        fjesCALL_ABORTED = 19,
        fjesCALL_BLACKLISTED = 14,
        fjesCALL_COMPLETED = 18,
        fjesCALL_DELAYED = 13,
        fjesDIALING = 3,
        fjesDISCONNECTED = 1,
        fjesFATAL_ERROR = 12,
        fjesHANDLED = 17,
        fjesINITIALIZING = 2,
        fjesLINE_UNAVAILABLE = 7,
        fjesNO_ANSWER = 9,
        fjesNO_DIAL_TONE = 11,
        fjesNONE = 0,
        fjesNOT_FAX_CALL = 15,
        fjesPARTIALLY_RECEIVED = 16,
        fjesPROPRIETARY = 16777216,
        fjesRECEIVING = 6,
        fjesTRANSMITTING = 4,
    }

    const enum FAX_JOB_OPERATIONS_ENUM {
        fjoDELETE = 16,
        fjoPAUSE = 2,
        fjoRECIPIENT_INFO = 32,
        fjoRESTART = 8,
        fjoRESUME = 4,
        fjoSENDER_INFO = 64,
        fjoVIEW = 1,
    }

    const enum FAX_JOB_STATUS_ENUM {
        fjsCANCELED = 512,
        fjsCANCELING = 1024,
        fjsCOMPLETED = 256,
        fjsFAILED = 8,
        fjsINPROGRESS = 2,
        fjsNOLINE = 32,
        fjsPAUSED = 16,
        fjsPENDING = 1,
        fjsRETRIES_EXCEEDED = 128,
        fjsRETRYING = 64,
        fjsROUTING = 2048,
    }

    const enum FAX_JOB_TYPE_ENUM {
        fjtRECEIVE = 1,
        fjtROUTING = 2,
        fjtSEND = 0,
    }

    const enum FAX_LOG_LEVEL_ENUM {
        fllMAX = 3,
        fllMED = 2,
        fllMIN = 1,
        fllNONE = 0,
    }

    const enum FAX_PRIORITY_TYPE_ENUM {
        fptHIGH = 2,
        fptLOW = 0,
        fptNORMAL = 1,
    }

    const enum FAX_PROVIDER_STATUS_ENUM {
        fpsBAD_GUID = 2,
        fpsBAD_VERSION = 3,
        fpsCANT_INIT = 6,
        fpsCANT_LINK = 5,
        fpsCANT_LOAD = 4,
        fpsSERVER_ERROR = 1,
        fpsSUCCESS = 0,
    }

    const enum FAX_RECEIPT_TYPE_ENUM {
        frtMAIL = 1,
        frtMSGBOX = 4,
        frtNONE = 0,
    }

    const enum FAX_ROUTING_RULE_CODE_ENUM {
        frrcANY_CODE = 0,
    }

    const enum FAX_RULE_STATUS_ENUM {
        frsALL_GROUP_DEV_NOT_VALID = 2,
        frsBAD_DEVICE = 4,
        frsEMPTY_GROUP = 1,
        frsSOME_GROUP_DEV_NOT_VALID = 3,
        frsVALID = 0,
    }

    const enum FAX_SCHEDULE_TYPE_ENUM {
        fstDISCOUNT_PERIOD = 2,
        fstNOW = 0,
        fstSPECIFIC_TIME = 1,
    }

    const enum FAX_SERVER_APIVERSION_ENUM {
        fsAPI_VERSION_0 = 0,
        fsAPI_VERSION_1 = 65536,
        fsAPI_VERSION_2 = 131072,
        fsAPI_VERSION_3 = 196608,
    }

    const enum FAX_SERVER_EVENTS_TYPE_ENUM {
        fsetACTIVITY = 8,
        fsetCONFIG = 4,
        fsetDEVICE_STATUS = 256,
        fsetFXSSVC_ENDED = 128,
        fsetIN_ARCHIVE = 32,
        fsetIN_QUEUE = 1,
        fsetINCOMING_CALL = 512,
        fsetNONE = 0,
        fsetOUT_ARCHIVE = 64,
        fsetOUT_QUEUE = 2,
        fsetQUEUE_STATE = 16,
    }

    const enum FAX_SMTP_AUTHENTICATION_TYPE_ENUM {
        fsatANONYMOUS = 0,
        fsatBASIC = 1,
        fsatNTLM = 2,
    }

    const enum FaxConstants {
        bstrGROUPNAME_ALLDEVICES = '<All Devices>',
        lDEFAULT_PREFETCH_SIZE = 100,
        wcharREASSIGN_RECIPIENTS_DELIMITER = 59,
    }

    /** FaxAccount Class */
    class FaxAccount {
        private 'FAXCOMEXLib.FaxAccount_typekey': FaxAccount;
        private constructor();

        /** Name of the fax account */
        readonly AccountName: string;

        /** Folders belonging to the account */
        readonly Folders: FaxAccountFolders;

        /** Set bit-wise combination of events the fax account listens to */
        ListenToAccountEvents(EventTypes: FAX_ACCOUNT_EVENTS_TYPE_ENUM): void;

        /** Events the fax account is listening to */
        readonly RegisteredEvents: FAX_ACCOUNT_EVENTS_TYPE_ENUM;
    }

    /** FaxAccountFolders Class */
    class FaxAccountFolders {
        private 'FAXCOMEXLib.FaxAccountFolders_typekey': FaxAccountFolders;
        private constructor();

        /** Incoming archive */
        readonly IncomingArchive: FaxAccountIncomingArchive;

        /** Incoming queue */
        readonly IncomingQueue: FaxAccountIncomingQueue;

        /** Outgoing archive */
        readonly OutgoingArchive: FaxAccountOutgoingArchive;

        /** Outgoing queue */
        readonly OutgoingQueue: FaxAccountOutgoingQueue;
    }

    /** FaxAccountIncomingArchive Class */
    class FaxAccountIncomingArchive {
        private 'FAXCOMEXLib.FaxAccountIncomingArchive_typekey': FaxAccountIncomingArchive;
        private constructor();

        /** Get an archived message by its ID */
        GetMessage(bstrMessageId: string): IFaxIncomingMessage;

        /**
         * Iterator on the archived messages
         * @param number [lPrefetchSize=100]
         */
        GetMessages(lPrefetchSize?: number): FaxIncomingMessageIterator;

        /** Refresh the object */
        Refresh(): void;

        /** The high 32-bit value of the archive size */
        readonly SizeHigh: number;

        /** The low 32-bit value of the archive size */
        readonly SizeLow: number;
    }

    /** FaxAccountIncomingQueue Class */
    class FaxAccountIncomingQueue {
        private 'FAXCOMEXLib.FaxAccountIncomingQueue_typekey': FaxAccountIncomingQueue;
        private constructor();

        /** Get incoming job by ID */
        GetJob(bstrJobId: string): FaxIncomingJob;

        /** Collection of incoming jobs */
        GetJobs(): FaxIncomingJobs;
    }

    /** FaxAccountOutgoingArchive Class */
    class FaxAccountOutgoingArchive {
        private 'FAXCOMEXLib.FaxAccountOutgoingArchive_typekey': FaxAccountOutgoingArchive;
        private constructor();

        /** Get an archived message by its ID */
        GetMessage(bstrMessageId: string): IFaxOutgoingMessage;

        /**
         * Iterator on the archived messages
         * @param number [lPrefetchSize=100]
         */
        GetMessages(lPrefetchSize?: number): FaxOutgoingMessageIterator;

        /** Refresh the object */
        Refresh(): void;

        /** The high 32-bit value of the archive size */
        readonly SizeHigh: number;

        /** The low 32-bit value of the archive size */
        readonly SizeLow: number;
    }

    /** FaxAccountOutgoingQueue Class */
    class FaxAccountOutgoingQueue {
        private 'FAXCOMEXLib.FaxAccountOutgoingQueue_typekey': FaxAccountOutgoingQueue;
        private constructor();

        /** Get outgoing job by ID */
        GetJob(bstrJobId: string): IFaxOutgoingJob;

        /** Collection of outgoing jobs */
        GetJobs(): FaxOutgoingJobs;
    }

    /** FaxAccounts Class */
    class FaxAccounts {
        private 'FAXCOMEXLib.FaxAccounts_typekey': FaxAccounts;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): FaxAccount;
    }

    /** FaxAccountSet Class */
    class FaxAccountSet {
        private 'FAXCOMEXLib.FaxAccountSet_typekey': FaxAccountSet;
        private constructor();

        /** Adds a fax account */
        AddAccount(bstrAccountName: string): FaxAccount;

        /** Get fax account by name */
        GetAccount(bstrAccountName: string): FaxAccount;

        /** Collection of fax accounts */
        GetAccounts(): FaxAccounts;

        /** Removes a fax account by name */
        RemoveAccount(bstrAccountName: string): void;
    }

    /** FaxActivity Class */
    class FaxActivity {
        private 'FAXCOMEXLib.FaxActivity_typekey': FaxActivity;
        private constructor();

        /** Number of incoming messages */
        readonly IncomingMessages: number;

        /** Number of outgoing messages */
        readonly OutgoingMessages: number;

        /** Number of queued messages */
        readonly QueuedMessages: number;

        /** Refresh the object */
        Refresh(): void;

        /** Number of routed incoming messages */
        readonly RoutingMessages: number;
    }

    /** FaxActivityLogging Class */
    class FaxActivityLogging {
        private 'FAXCOMEXLib.FaxActivityLogging_typekey': FaxActivityLogging;
        private constructor();

        /** Activity log database files path */
        DatabasePath: string;

        /** Does the server log incoming fax activity */
        LogIncoming: boolean;

        /** Does the server log outgoing fax activity */
        LogOutgoing: boolean;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxConfiguration Class */
    class FaxConfiguration {
        private 'FAXCOMEXLib.FaxConfiguration_typekey': FaxConfiguration;
        private constructor();

        /** Are personal cover pages allowed */
        AllowPersonalCoverPages: boolean;

        /** Indicates how long the fax message is kept on the server */
        ArchiveAgeLimit: number;

        /** Location of the archive on the server */
        ArchiveLocation: string;

        /** The high 32-bit value of the archive size */
        readonly ArchiveSizeHigh: number;

        /** The low 32-bit value of the archive size */
        readonly ArchiveSizeLow: number;

        /** Does the server auto-create fax account on connect */
        AutoCreateAccountOnConnect: boolean;

        /** Does the server generate a brand */
        Branding: boolean;

        /** End of the discount rate period */
        DiscountRateEnd: VarDate;

        /** Start of the discount rate period */
        DiscountRateStart: VarDate;

        /** High quota water mark */
        HighQuotaWaterMark: number;

        /** Are incoming faxes viewable by everyone */
        IncomingFaxesArePublic: boolean;

        /** Is queue blocked for incoming faxes */
        IncomingQueueBlocked: boolean;

        /** Low quota water mark */
        LowQuotaWaterMark: number;

        /** How long the failed fax job is kept on the server */
        OutgoingQueueAgeLimit: number;

        /** Is queue blocked for outgoing faxes */
        OutgoingQueueBlocked: boolean;

        /** Is queue paused for outgoing faxes */
        OutgoingQueuePaused: boolean;

        /** Refresh the object */
        Refresh(): void;

        /** Number of retries */
        Retries: number;

        /** Retry delay */
        RetryDelay: number;

        /** Save the object */
        Save(): void;

        /** Is size quota warning on */
        SizeQuotaWarning: boolean;

        /** Whether faxes should be archived */
        UseArchive: boolean;

        /** Is device Transmitting Station ID used */
        UseDeviceTSID: boolean;
    }

    /** FaxDevice Class */
    class FaxDevice {
        private 'FAXCOMEXLib.FaxDevice_typekey': FaxDevice;
        private constructor();

        /** Answer the call */
        AnswerCall(): void;

        /** Device's Called Station ID */
        CSID: string;

        /** Description of the device */
        Description: string;

        /** Device name */
        readonly DeviceName: string;

        /** Get the device level extention property */
        GetExtensionProperty(bstrGUID: string): SafeArray;

        /** Unique device ID */
        readonly Id: number;

        /** Is the device is turned off */
        readonly PoweredOff: boolean;

        /** Device provider */
        readonly ProviderUniqueName: string;

        /** The receive mode of the device */
        ReceiveMode: FAX_DEVICE_RECEIVE_MODE_ENUM;

        /** Is the device receiving now */
        readonly ReceivingNow: boolean;

        /** Refresh the object */
        Refresh(): void;

        /** Is the device ringing now */
        readonly RingingNow: boolean;

        /** Number of rings before the device answers */
        RingsBeforeAnswer: number;

        /** Save the object */
        Save(): void;

        /** Is the device is enabled to send */
        SendEnabled: boolean;

        /** Is the device sending now */
        readonly SendingNow: boolean;

        /** Set the device level extention property */
        SetExtensionProperty(bstrGUID: string, vProperty: SafeArray): void;

        /** Device's Transmitting Station ID */
        TSID: string;

        /** Array of routing methods GUIDs */
        readonly UsedRoutingMethods: SafeArray<string>;

        /** Adds or removes routing method */
        UseRoutingMethod(bstrMethodGUID: string, bUse: boolean): void;
    }

    /** FaxDeviceIds Class */
    class FaxDeviceIds {
        private 'FAXCOMEXLib.FaxDeviceIds_typekey': FaxDeviceIds;
        private constructor();

        /** Add a device */
        Add(lDeviceId: number): void;
        readonly Count: number;
        Item(lIndex: number): number;

        /** Remove a device */
        Remove(lIndex: number): void;

        /** Set order of the device */
        SetOrder(lDeviceId: number, lNewOrder: number): void;
    }

    /** FaxDeviceProvider Class */
    class FaxDeviceProvider {
        private 'FAXCOMEXLib.FaxDeviceProvider_typekey': FaxDeviceProvider;
        private constructor();

        /** Is device provider built in debug environment */
        readonly Debug: boolean;

        /** Array of device IDs exposed by the provider */
        readonly DeviceIds: SafeArray<number>;

        /** Provider's friendly name */
        readonly FriendlyName: string;

        /** Full path and file name of the provider DLL */
        readonly ImageName: string;

        /** Last error code at load or initialization */
        readonly InitErrorCode: number;

        /** The major part of the device provider's build number */
        readonly MajorBuild: number;

        /** The major part of the device provider's version number */
        readonly MajorVersion: number;

        /** The minor part of the device provider's build number */
        readonly MinorBuild: number;

        /** The minor part of the device provider's version number */
        readonly MinorVersion: number;

        /** Status of the device provider */
        readonly Status: FAX_PROVIDER_STATUS_ENUM;

        /** TSP name used by the provider */
        readonly TapiProviderName: string;

        /** Unique name of the provider */
        readonly UniqueName: string;
    }

    /** FaxDeviceProviders Class */
    class FaxDeviceProviders {
        private 'FAXCOMEXLib.FaxDeviceProviders_typekey': FaxDeviceProviders;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): FaxDeviceProvider;
    }

    /** FaxDevices Class */
    class FaxDevices {
        private 'FAXCOMEXLib.FaxDevices_typekey': FaxDevices;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): FaxDevice;

        /** Get device by its ID */
        ItemById(lId: number): FaxDevice;
    }

    /** FaxDocument Class */
    class FaxDocument {
        private 'FAXCOMEXLib.FaxDocument_typekey': FaxDocument;
        private constructor();

        /** Whether to attach a fax to the receipt */
        AttachFaxToReceipt: boolean;

        /** Full paths to the fax document body files */
        Bodies: any;

        /** Full path to the fax document body file */
        Body: string;

        /** Call handle */
        CallHandle: number;

        /** Submit the fax document on the already connected server */
        ConnectedSubmit(pFaxServer: IFaxServer): any;

        /** Submit the fax document on the already connected server */
        ConnectedSubmit2(pFaxServer: IFaxServer, pvFaxOutgoingJobIDs: any): number;

        /** Cover page file path */
        CoverPage: string;

        /** Is server, local, or no cover page used */
        CoverPageType: FAX_COVERPAGE_TYPE_ENUM;

        /** The document name */
        DocumentName: string;

        /** Whether to group the broadcast receipts */
        GroupBroadcastReceipts: boolean;

        /** Contents of cover page note field */
        Note: string;

        /** Priority of the fax */
        Priority: FAX_PRIORITY_TYPE_ENUM;

        /** Address of the receipt */
        ReceiptAddress: string;

        /** Type of the receipt */
        ReceiptType: FAX_RECEIPT_TYPE_ENUM;

        /** Collection of recipients */
        readonly Recipients: FaxRecipients;

        /** Time to send the fax */
        ScheduleTime: VarDate;

        /** When to send the fax */
        ScheduleType: FAX_SCHEDULE_TYPE_ENUM;

        /** Sender information object */
        readonly Sender: FaxSender;

        /** Contents of cover page subject field */
        Subject: string;

        /** Submission Id for the Fax document */
        readonly SubmissionId: string;

        /** Connect to server, submit the fax document, disconnect */
        Submit(bstrFaxServerName: string): SafeArray<number>;

        /** Connect to server, submit the fax document, disconnect */
        Submit2(bstrFaxServerName: string, pvFaxOutgoingJobIDs: any): number;

        /** Tapi connection */
        TapiConnection: any;
    }

    /** FaxEventLogging Class */
    class FaxEventLogging {
        private 'FAXCOMEXLib.FaxEventLogging_typekey': FaxEventLogging;
        private constructor();

        /** Detail level of event logs for general (other) events */
        GeneralEventsLevel: FAX_LOG_LEVEL_ENUM;

        /** Detail level of event logs for inbound fax events */
        InboundEventsLevel: FAX_LOG_LEVEL_ENUM;

        /** Detail level of event logs for initialization events */
        InitEventsLevel: FAX_LOG_LEVEL_ENUM;

        /** Detail level of event logs for outbound fax events */
        OutboundEventsLevel: FAX_LOG_LEVEL_ENUM;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxFolders Class */
    class FaxFolders {
        private 'FAXCOMEXLib.FaxFolders_typekey': FaxFolders;
        private constructor();

        /** Incoming archive */
        readonly IncomingArchive: FaxIncomingArchive;

        /** Incoming queue */
        readonly IncomingQueue: FaxIncomingQueue;

        /** Outgoing archive */
        readonly OutgoingArchive: FaxOutgoingArchive;

        /** Outgoing queue */
        readonly OutgoingQueue: FaxOutgoingQueue;
    }

    /** FaxInboundRouting Class */
    class FaxInboundRouting {
        private 'FAXCOMEXLib.FaxInboundRouting_typekey': FaxInboundRouting;
        private constructor();

        /** Registered inbound routing extensions collection */
        GetExtensions(): FaxInboundRoutingExtensions;

        /** Ordered collection of all the registered methods */
        GetMethods(): FaxInboundRoutingMethods;
    }

    /** FaxInboundRoutingExtension Class */
    class FaxInboundRoutingExtension {
        private 'FAXCOMEXLib.FaxInboundRoutingExtension_typekey': FaxInboundRoutingExtension;
        private constructor();

        /** Is extension built in debug environment */
        readonly Debug: boolean;

        /** Extension's friendly name */
        readonly FriendlyName: string;

        /** Full path and file name of the extension DLL */
        readonly ImageName: string;

        /** Last error code at load or initialization */
        readonly InitErrorCode: number;

        /** The major part of extension's build number */
        readonly MajorBuild: number;

        /** The major part of extension's version number */
        readonly MajorVersion: number;

        /** Array of methods exposed by extension */
        readonly Methods: any;

        /** The minor part of extension's build number */
        readonly MinorBuild: number;

        /** The minor part of extension's version number */
        readonly MinorVersion: number;

        /** Load and initialization status of the extension */
        readonly Status: FAX_PROVIDER_STATUS_ENUM;

        /** Extension's unique name */
        readonly UniqueName: string;
    }

    /** FaxInboundRoutingExtensions Class */
    class FaxInboundRoutingExtensions {
        private 'FAXCOMEXLib.FaxInboundRoutingExtensions_typekey': FaxInboundRoutingExtensions;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): FaxInboundRoutingExtension;
    }

    /** FaxInboundRoutingMethod Class */
    class FaxInboundRoutingMethod {
        private 'FAXCOMEXLib.FaxInboundRoutingMethod_typekey': FaxInboundRoutingMethod;
        private constructor();

        /** Friendly name of the extension exposing this method */
        readonly ExtensionFriendlyName: string;

        /** Image name of the extension exposing this method */
        readonly ExtensionImageName: string;

        /** Internal function name */
        readonly FunctionName: string;

        /** GUID of the method */
        readonly GUID: string;

        /** The name of the method */
        readonly Name: string;

        /** Priority of the method */
        Priority: number;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxInboundRoutingMethods Class */
    class FaxInboundRoutingMethods {
        private 'FAXCOMEXLib.FaxInboundRoutingMethods_typekey': FaxInboundRoutingMethods;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): FaxInboundRoutingMethod;
    }

    /** FaxIncomingArchive Class */
    class FaxIncomingArchive {
        private 'FAXCOMEXLib.FaxIncomingArchive_typekey': FaxIncomingArchive;
        private constructor();

        /** How long the fax message is kept on the Server */
        AgeLimit: number;

        /** Location of the archive folder on the server */
        ArchiveFolder: string;

        /** Get archived message by its ID */
        GetMessage(bstrMessageId: string): IFaxIncomingMessage;

        /**
         * Iterator on the archived messages
         * @param number [lPrefetchSize=100]
         */
        GetMessages(lPrefetchSize?: number): FaxIncomingMessageIterator;

        /** High quota water mark */
        HighQuotaWaterMark: number;

        /** Low quota water mark */
        LowQuotaWaterMark: number;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;

        /** The high 32-bit value of the archive size */
        readonly SizeHigh: number;

        /** The low 32-bit value of the archive size */
        readonly SizeLow: number;

        /** Is size quota warning on */
        SizeQuotaWarning: boolean;

        /** Whether received faxes should be archived */
        UseArchive: boolean;
    }

    /** FaxIncomingJob Class */
    class FaxIncomingJob {
        private 'FAXCOMEXLib.FaxIncomingJob_typekey': FaxIncomingJob;
        private constructor();

        /** Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values */
        readonly AvailableOperations: FAX_JOB_OPERATIONS_ENUM;

        /** Caller ID */
        readonly CallerId: string;

        /** Cancel the incoming job */
        Cancel(): void;

        /** Copy TIFF image to the local file */
        CopyTiff(bstrTiffPath: string): void;

        /** Called Station ID */
        readonly CSID: string;

        /** Page currently in transmision */
        readonly CurrentPage: number;

        /** Device ID that transmits the job */
        readonly DeviceId: number;

        /** Extended status description */
        readonly ExtendedStatus: string;

        /** Code of the job's extended status */
        readonly ExtendedStatusCode: FAX_JOB_EXTENDED_STATUS_ENUM;

        /** Unique message ID */
        readonly Id: string;

        /** Job type */
        readonly JobType: FAX_JOB_TYPE_ENUM;

        /** Refresh the object */
        Refresh(): void;

        /** Number of failed transmission retries */
        readonly Retries: number;

        /** Routing information */
        readonly RoutingInformation: string;

        /** Size in bytes of the message's TIFF file */
        readonly Size: number;

        /** Current queue status of the job, a bit-wise combination of FAX_JOB_STATUS values */
        readonly Status: FAX_JOB_STATUS_ENUM;

        /** Transmission end time */
        readonly TransmissionEnd: VarDate;

        /** Transmission start time */
        readonly TransmissionStart: VarDate;

        /** Transmitting Station ID */
        readonly TSID: string;
    }

    /** FaxIncomingJobs Class */
    class FaxIncomingJobs {
        private 'FAXCOMEXLib.FaxIncomingJobs_typekey': FaxIncomingJobs;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): FaxIncomingJob;
    }

    /** FaxIncomingMessage Class */
    class FaxIncomingMessage extends IFaxIncomingMessage {
        private 'FAXCOMEXLib.FaxIncomingMessage_typekey': FaxIncomingMessage;
        private constructor();

        /** Has Cover page */
        HasCoverPage: boolean;

        /** Read flag on the message */
        Read: boolean;

        /** Reassigns the message */
        ReAssign(): void;

        /** Set of recipient names */
        Recipients: string;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;

        /** Sender's fax number */
        SenderFaxNumber: string;

        /** Sender's name */
        SenderName: string;

        /** Contents of cover page subject field */
        Subject: string;

        /** Is message reassigned? */
        readonly WasReAssigned: boolean;
    }

    /** FaxIncomingMessageIterator Class */
    class FaxIncomingMessageIterator {
        private 'FAXCOMEXLib.FaxIncomingMessageIterator_typekey': FaxIncomingMessageIterator;
        private constructor();

        /** End of archive marker */
        readonly AtEOF: boolean;

        /** The current message */
        readonly Message: IFaxIncomingMessage;

        /** Move to the first message in the archive */
        MoveFirst(): void;

        /** Move to the next message in the archive */
        MoveNext(): void;

        /** Size of the prefetch buffer */
        PrefetchSize: number;
    }

    /** FaxIncomingQueue Class */
    class FaxIncomingQueue {
        private 'FAXCOMEXLib.FaxIncomingQueue_typekey': FaxIncomingQueue;
        private constructor();

        /** Is queue blocked */
        Blocked: boolean;

        /** Get incoming job by ID */
        GetJob(bstrJobId: string): FaxIncomingJob;

        /** Collection of incoming jobs */
        GetJobs(): FaxIncomingJobs;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxJobStatus Class */
    class FaxJobStatus {
        private 'FAXCOMEXLib.FaxJobStatus_typekey': FaxJobStatus;
        private constructor();

        /** Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values */
        readonly AvailableOperations: FAX_JOB_OPERATIONS_ENUM;

        /** Caller ID */
        readonly CallerId: string;

        /** Called Station ID */
        readonly CSID: string;

        /** Page currently in transmision */
        readonly CurrentPage: number;

        /** Device ID of device that transmits the job */
        readonly DeviceId: number;

        /** Extended status description */
        readonly ExtendedStatus: string;

        /** Code of the job's extended status */
        readonly ExtendedStatusCode: FAX_JOB_EXTENDED_STATUS_ENUM;

        /** Job type */
        readonly JobType: FAX_JOB_TYPE_ENUM;

        /** Total number of pages */
        readonly Pages: number;

        /** Number of failed transmission retries */
        readonly Retries: number;

        /** Routing information */
        readonly RoutingInformation: string;

        /** The time the fax job is scheduled to be transmitted */
        readonly ScheduledTime: VarDate;

        /** Size in bytes of TIFF file */
        readonly Size: number;

        /** Current queue status of the job, a bit-wise combination of FAX_JOB_STATUS values */
        readonly Status: FAX_JOB_STATUS_ENUM;

        /** The time the fax job finished its transmission */
        readonly TransmissionEnd: VarDate;

        /** The time the fax job started its transmission */
        readonly TransmissionStart: VarDate;

        /** Transmitting Station ID */
        readonly TSID: string;
    }

    /** FaxLoggingOptions Class */
    class FaxLoggingOptions {
        private 'FAXCOMEXLib.FaxLoggingOptions_typekey': FaxLoggingOptions;
        private constructor();

        /** Activity logging configuration object */
        readonly ActivityLogging: FaxActivityLogging;

        /** Event logging configuration object */
        readonly EventLogging: FaxEventLogging;
    }

    /** FaxOutboundRouting Class */
    class FaxOutboundRouting {
        private 'FAXCOMEXLib.FaxOutboundRouting_typekey': FaxOutboundRouting;
        private constructor();

        /** Configuration of the outbound routing groups */
        GetGroups(): FaxOutboundRoutingGroups;

        /** Configuration of the outbound routing rules */
        GetRules(): FaxOutboundRoutingRules;
    }

    /** FaxOutboundRoutingGroup Class */
    class FaxOutboundRoutingGroup {
        private 'FAXCOMEXLib.FaxOutboundRoutingGroup_typekey': FaxOutboundRoutingGroup;
        private constructor();

        /** Ordered collection of device IDs */
        readonly DeviceIds: FaxDeviceIds;

        /** Name of the group */
        readonly Name: string;

        /** Status of the group */
        readonly Status: FAX_GROUP_STATUS_ENUM;
    }

    /** FaxOutboundRoutingGroups Class */
    class FaxOutboundRoutingGroups {
        private 'FAXCOMEXLib.FaxOutboundRoutingGroups_typekey': FaxOutboundRoutingGroups;
        private constructor();

        /** Add a group */
        Add(bstrName: string): FaxOutboundRoutingGroup;
        readonly Count: number;
        Item(vIndex: number | string): FaxOutboundRoutingGroup;

        /** Remove a group */
        Remove(vIndex: number | string): void;
    }

    /** FaxOutboundRoutingRule Class */
    class FaxOutboundRoutingRule {
        private 'FAXCOMEXLib.FaxOutboundRoutingRule_typekey': FaxOutboundRoutingRule;
        private constructor();

        /** Area code */
        readonly AreaCode: number;

        /** Country code */
        readonly CountryCode: number;

        /** Destination device */
        DeviceId: number;

        /** Group name */
        GroupName: string;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;

        /** Status */
        readonly Status: FAX_RULE_STATUS_ENUM;

        /** Uses single device or group */
        UseDevice: boolean;
    }

    /** FaxOutboundRoutingRules Class */
    class FaxOutboundRoutingRules {
        private 'FAXCOMEXLib.FaxOutboundRoutingRules_typekey': FaxOutboundRoutingRules;
        private constructor();

        /** Add a rule */
        Add(lCountryCode: number, lAreaCode: number, bUseDevice: boolean, bstrGroupName: string, lDeviceId: number): FaxOutboundRoutingRule;
        readonly Count: number;
        Item(lIndex: number): FaxOutboundRoutingRule;

        /** Get a rule by criteria */
        ItemByCountryAndArea(lCountryCode: number, lAreaCode: number): FaxOutboundRoutingRule;

        /** Remove a rule */
        Remove(lIndex: number): void;

        /** Remove a rule by criteria */
        RemoveByCountryAndArea(lCountryCode: number, lAreaCode: number): void;
    }

    /** FaxOutgoingArchive Class */
    class FaxOutgoingArchive {
        private 'FAXCOMEXLib.FaxOutgoingArchive_typekey': FaxOutgoingArchive;
        private constructor();

        /** Indicates how long the fax message is kept on the server */
        AgeLimit: number;

        /** Location of the outgoing archive on the server */
        ArchiveFolder: string;

        /** Get an archived message by its ID */
        GetMessage(bstrMessageId: string): IFaxOutgoingMessage;

        /**
         * Iterator on the archived messages
         * @param number [lPrefetchSize=100]
         */
        GetMessages(lPrefetchSize?: number): FaxOutgoingMessageIterator;

        /** High quota water mark */
        HighQuotaWaterMark: number;

        /** Low quota water mark */
        LowQuotaWaterMark: number;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;

        /** The high 32-bit value of the archive size */
        readonly SizeHigh: number;

        /** The low 32-bit value of the archive size */
        readonly SizeLow: number;

        /** Is the size quota warning on or off */
        SizeQuotaWarning: boolean;

        /** Whether sent faxes should be archived */
        UseArchive: boolean;
    }

    /** FaxOutgoingJob Class */
    class FaxOutgoingJob {
        private 'FAXCOMEXLib.FaxOutgoingJob_typekey': FaxOutgoingJob;
        private constructor();

        /** Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values */
        readonly AvailableOperations: FAX_JOB_OPERATIONS_ENUM;

        /** Cancel the outbound job */
        Cancel(): void;

        /** Copy the job's TIFF image */
        CopyTiff(bstrTiffPath: string): void;

        /** Called Station ID */
        readonly CSID: string;

        /** Page currently in transmision */
        readonly CurrentPage: number;

        /** Device ID that transmits the job */
        readonly DeviceId: number;

        /** Document's friendly name */
        readonly DocumentName: string;

        /** Extended status description */
        readonly ExtendedStatus: string;

        /** Code of the job's extended status */
        readonly ExtendedStatusCode: FAX_JOB_EXTENDED_STATUS_ENUM;

        /** Whether to group broadcast receipts */
        readonly GroupBroadcastReceipts: boolean;

        /** Has Cover page */
        readonly HasCoverPage: boolean;

        /** Unique job ID */
        readonly Id: string;

        /** Time the job was originally scheduled to be transmitted */
        readonly OriginalScheduledTime: VarDate;

        /** Total number of pages */
        readonly Pages: number;

        /** Pause the outbound job */
        Pause(): void;

        /** Priority of the fax */
        readonly Priority: FAX_PRIORITY_TYPE_ENUM;

        /** Address of the receipt */
        readonly ReceiptAddress: string;

        /** Type of receipt */
        readonly ReceiptType: FAX_RECEIPT_TYPE_ENUM;

        /** Recipient information object */
        readonly Recipient: FaxRecipient;

        /** Refresh the object */
        Refresh(): void;

        /** Restart the outbound job */
        Restart(): void;

        /** Resume the outbound job */
        Resume(): void;

        /** Number of failed transmission retries */
        readonly Retries: number;

        /** The time the fax job is scheduled to be transmitted */
        readonly ScheduledTime: VarDate;

        /** When to send the fax */
        readonly ScheduleType: FAX_SCHEDULE_TYPE_ENUM;

        /** Sender information object */
        readonly Sender: FaxSender;

        /** Size in bytes of TIFF file */
        readonly Size: number;

        /** Current queue status of the job */
        readonly Status: FAX_JOB_STATUS_ENUM;

        /** Cover page's subject field */
        readonly Subject: string;

        /** Unique ID the submission process created for the Job */
        readonly SubmissionId: string;

        /** Time the job was submitted */
        readonly SubmissionTime: VarDate;

        /** The time the fax job finished its transmission */
        readonly TransmissionEnd: VarDate;

        /** The time the fax job started its transmission */
        readonly TransmissionStart: VarDate;

        /** Transmitting Station ID */
        readonly TSID: string;
    }

    /** FaxOutgoingJobs Class */
    class FaxOutgoingJobs {
        private 'FAXCOMEXLib.FaxOutgoingJobs_typekey': FaxOutgoingJobs;
        private constructor();
        readonly Count: number;
        Item(vIndex: any): IFaxOutgoingJob;
    }

    /** FaxOutgoingMessage Class */
    class FaxOutgoingMessage extends IFaxOutgoingMessage {
        private 'FAXCOMEXLib.FaxOutgoingMessage_typekey': FaxOutgoingMessage;
        private constructor();

        /** Copy Tiff image to the local file */
        CopyTiff(bstrTiffPath: string): void;

        /** Has Cover page */
        readonly HasCoverPage: boolean;

        /** Read flag on the message */
        Read: boolean;

        /** Address of the receipt */
        readonly ReceiptAddress: string;

        /** Type of the receipt */
        readonly ReceiptType: FAX_RECEIPT_TYPE_ENUM;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxOutgoingMessageIterator Class */
    class FaxOutgoingMessageIterator {
        private 'FAXCOMEXLib.FaxOutgoingMessageIterator_typekey': FaxOutgoingMessageIterator;
        private constructor();

        /** End of archive marker */
        readonly AtEOF: boolean;

        /** Current message */
        readonly Message: IFaxOutgoingMessage;

        /** Move to the first message */
        MoveFirst(): void;

        /** Move to the next message */
        MoveNext(): void;

        /** Size of prefetch buffer */
        PrefetchSize: number;
    }

    /** FaxOutgoingQueue Class */
    class FaxOutgoingQueue {
        private 'FAXCOMEXLib.FaxOutgoingQueue_typekey': FaxOutgoingQueue;
        private constructor();

        /** How long the failed fax message is kept on the server */
        AgeLimit: number;

        /** Are personal cover pages allowed */
        AllowPersonalCoverPages: boolean;

        /** Is the queue blocked */
        Blocked: boolean;

        /** Does the server generate a brand */
        Branding: boolean;

        /** End of the discount rate period */
        DiscountRateEnd: VarDate;

        /** Start of the discount rate period */
        DiscountRateStart: VarDate;

        /** Outgoing job by ID */
        GetJob(bstrJobId: string): IFaxOutgoingJob;

        /** Collection of outgoing jobs */
        GetJobs(): FaxOutgoingJobs;

        /** Is the queue paused */
        Paused: boolean;

        /** Refresh the object */
        Refresh(): void;

        /** Number of retries */
        Retries: number;

        /** Retry delay */
        RetryDelay: number;

        /** Save the object */
        Save(): void;

        /** Is device Transmitting Station ID used */
        UseDeviceTSID: boolean;
    }

    /** FaxReceiptOptions Class */
    class FaxReceiptOptions {
        private 'FAXCOMEXLib.FaxReceiptOptions_typekey': FaxReceiptOptions;
        private constructor();

        /** Allowed receipt types, a bit-wise combination of FAX_RECEIPT_TYPE values */
        AllowedReceipts: FAX_RECEIPT_TYPE_ENUM;

        /** Authentication type used by server */
        AuthenticationType: FAX_SMTP_AUTHENTICATION_TYPE_ENUM;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;

        /** SMTP password */
        SMTPPassword: string;

        /** SMTP port number */
        SMTPPort: number;

        /** SMTP sender e-mail address */
        SMTPSender: string;

        /** Name of the SMTP server */
        SMTPServer: string;

        /** SMTP user name */
        SMTPUser: string;

        /** Whether to use the IFaxReceiptOptions settings for MS routing extension */
        UseForInboundRouting: boolean;
    }

    /** FaxRecipient Class */
    class FaxRecipient {
        private 'FAXCOMEXLib.FaxRecipient_typekey': FaxRecipient;
        private constructor();

        /** Recipient's fax number */
        FaxNumber: string;

        /** Recipient's name */
        Name: string;
    }

    /** FaxRecipients Class */
    class FaxRecipients {
        private 'FAXCOMEXLib.FaxRecipients_typekey': FaxRecipients;
        private constructor();

        /**
         * Add a recipient
         * @param string [bstrRecipientName='']
         */
        Add(bstrFaxNumber: string, bstrRecipientName?: string): FaxRecipient;
        readonly Count: number;
        Item(lIndex: number): FaxRecipient;

        /** Remove a recipient */
        Remove(lIndex: number): void;
    }

    /** FaxSecurity Class */
    class FaxSecurity {
        private 'FAXCOMEXLib.FaxSecurity_typekey': FaxSecurity;
        private constructor();

        /** Security descriptor */
        Descriptor: any;

        /** Granted rights, a bit-wise combination of FAX_ACCESS_RIGHTS values */
        readonly GrantedRights: FAX_ACCESS_RIGHTS_ENUM;

        /** Security Information Type */
        InformationType: number;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxSecurity2 Class */
    class FaxSecurity2 {
        private 'FAXCOMEXLib.FaxSecurity2_typekey': FaxSecurity2;
        private constructor();

        /** Security descriptor */
        Descriptor: any;

        /** Granted rights, a bit-wise combination */
        readonly GrantedRights: FAX_ACCESS_RIGHTS_ENUM_2;

        /** Security Information Type */
        InformationType: number;

        /** Refresh the object */
        Refresh(): void;

        /** Save the object */
        Save(): void;
    }

    /** FaxSender Class */
    class FaxSender {
        private 'FAXCOMEXLib.FaxSender_typekey': FaxSender;
        private constructor();

        /** Sender's billing code */
        BillingCode: string;

        /** City */
        City: string;

        /** Sender's company */
        Company: string;

        /** Sender's country or region */
        Country: string;

        /** Sender's department */
        Department: string;

        /** Sender's e-mail address */
        Email: string;

        /** Sender's fax number */
        FaxNumber: string;

        /** Sender's home phone */
        HomePhone: string;

        /** Load default sender */
        LoadDefaultSender(): void;

        /** Sender's name */
        Name: string;

        /** Sender's office location */
        OfficeLocation: string;

        /** Sender's office phone */
        OfficePhone: string;

        /** Save default sender */
        SaveDefaultSender(): void;

        /** Sender's state */
        State: string;

        /** Sender's street address */
        StreetAddress: string;

        /** Sender's title */
        Title: string;

        /** Transmitting Station ID */
        TSID: string;

        /** Sender's zip code */
        ZipCode: string;
    }

    /** FaxServer Class */
    class FaxServer extends IFaxServer {
        private 'FAXCOMEXLib.FaxServer_typekey': FaxServer;
        private constructor();

        /** Fax server configuration */
        readonly Configuration: FaxConfiguration;

        /** FaxAccount for the current connection */
        readonly CurrentAccount: FaxAccount;

        /** The FaxAccountSet configuration object */
        readonly FaxAccountSet: FaxAccountSet;

        /** The security configuration object */
        readonly Security2: FaxSecurity2;
    }

    /** IFaxIncomingMessage interface */
    class IFaxIncomingMessage {
        /** Caller ID */
        readonly CallerId: string;

        /** Copy Tiff image to the local file */
        CopyTiff(bstrTiffPath: string): void;

        /** Called Station ID */
        readonly CSID: string;

        /** Delete the message from the archive */
        Delete(): void;

        /** Name of the device that received the message */
        readonly DeviceName: string;

        /** Unique message ID */
        readonly Id: string;

        /** Total number of pages */
        readonly Pages: number;

        /** Number of failed routing retries */
        readonly Retries: number;

        /** Routing information */
        readonly RoutingInformation: string;

        /** Size in bytes of the message's TIFF file */
        readonly Size: number;

        /** Transmission end time */
        readonly TransmissionEnd: VarDate;

        /** Transmission start time */
        readonly TransmissionStart: VarDate;

        /** Transmitting Station ID */
        readonly TSID: string;
    }

    /** IFaxOutgoingJob interface */
    class IFaxOutgoingJob {
        private 'FAXCOMEXLib.IFaxOutgoingJob_typekey': IFaxOutgoingJob;
        private constructor();

        /** Available operations, a bit-wise combination of FAX_JOB_OPERATIONS values */
        readonly AvailableOperations: FAX_JOB_OPERATIONS_ENUM;

        /** Cancel the outbound job */
        Cancel(): void;

        /** Copy the job's TIFF image */
        CopyTiff(bstrTiffPath: string): void;

        /** Called Station ID */
        readonly CSID: string;

        /** Page currently in transmision */
        readonly CurrentPage: number;

        /** Device ID that transmits the job */
        readonly DeviceId: number;

        /** Document's friendly name */
        readonly DocumentName: string;

        /** Extended status description */
        readonly ExtendedStatus: string;

        /** Code of the job's extended status */
        readonly ExtendedStatusCode: FAX_JOB_EXTENDED_STATUS_ENUM;

        /** Whether to group broadcast receipts */
        readonly GroupBroadcastReceipts: boolean;

        /** Unique job ID */
        readonly Id: string;

        /** Time the job was originally scheduled to be transmitted */
        readonly OriginalScheduledTime: VarDate;

        /** Total number of pages */
        readonly Pages: number;

        /** Pause the outbound job */
        Pause(): void;

        /** Priority of the fax */
        readonly Priority: FAX_PRIORITY_TYPE_ENUM;

        /** Type of receipt */
        readonly ReceiptType: FAX_RECEIPT_TYPE_ENUM;

        /** Recipient information object */
        readonly Recipient: FaxRecipient;

        /** Refresh the object */
        Refresh(): void;

        /** Restart the outbound job */
        Restart(): void;

        /** Resume the outbound job */
        Resume(): void;

        /** Number of failed transmission retries */
        readonly Retries: number;

        /** The time the fax job is scheduled to be transmitted */
        readonly ScheduledTime: VarDate;

        /** Sender information object */
        readonly Sender: FaxSender;

        /** Size in bytes of TIFF file */
        readonly Size: number;

        /** Current queue status of the job */
        readonly Status: FAX_JOB_STATUS_ENUM;

        /** Cover page's subject field */
        readonly Subject: string;

        /** Unique ID the submission process created for the Job */
        readonly SubmissionId: string;

        /** Time the job was submitted */
        readonly SubmissionTime: VarDate;

        /** The time the fax job finished its transmission */
        readonly TransmissionEnd: VarDate;

        /** The time the fax job started its transmission */
        readonly TransmissionStart: VarDate;

        /** Transmitting Station ID */
        readonly TSID: string;
    }

    /** IFaxOutgoingMessage interface */
    class IFaxOutgoingMessage {
        /** Copy Tiff image to the local file */
        CopyTiff(bstrTiffPath: string): void;

        /** Called Station ID */
        readonly CSID: string;

        /** Delete the message from the archive */
        Delete(): void;

        /** Name of the device transmitting the message */
        readonly DeviceName: string;

        /** Document's friendly name */
        readonly DocumentName: string;

        /** Unique message ID */
        readonly Id: string;

        /** Time the job was originally scheduled to be transmitted */
        readonly OriginalScheduledTime: VarDate;

        /** Total number of pages */
        readonly Pages: number;

        /** Priority of the fax */
        readonly Priority: FAX_PRIORITY_TYPE_ENUM;

        /** Recipient information object */
        readonly Recipient: FaxRecipient;

        /** Number of failed routing retries */
        readonly Retries: number;

        /** Sender information object */
        readonly Sender: FaxSender;

        /** Size in bytes of TIFF file */
        readonly Size: number;

        /** Cover page's subject field */
        readonly Subject: string;

        /** Unique ID the submission process created for the job */
        readonly SubmissionId: string;

        /** Time the job was submitted */
        readonly SubmissionTime: VarDate;

        /** Transmission end time */
        readonly TransmissionEnd: VarDate;

        /** Transmission start time */
        readonly TransmissionStart: VarDate;

        /** Transmitting Station ID */
        readonly TSID: string;
    }

    /** IFaxServer interface */
    class IFaxServer {
        /** The fax server activity status object */
        readonly Activity: FaxActivity;

        /** Version of the fax server API */
        readonly APIVersion: FAX_SERVER_APIVERSION_ENUM;

        /** Connect to the fax server */
        Connect(bstrServerName: string): void;

        /** Is fax server built in debug environment */
        readonly Debug: boolean;

        /** Disconnect from the fax server */
        Disconnect(): void;

        /** The fax folders object */
        readonly Folders: FaxFolders;

        /** The collection of device providers */
        GetDeviceProviders(): FaxDeviceProviders;

        /** The collection of all available devices */
        GetDevices(): FaxDevices;

        /** Return server level extention property */
        GetExtensionProperty(bstrGUID: string): any;

        /** The inbound routing configuration object */
        readonly InboundRouting: FaxInboundRouting;

        /** Set bit-wise combination of events the fax server listens to */
        ListenToServerEvents(EventTypes: FAX_SERVER_EVENTS_TYPE_ENUM): void;

        /** The logging options configuration object */
        readonly LoggingOptions: FaxLoggingOptions;

        /** The major part of the fax server's build number */
        readonly MajorBuild: number;

        /** The major part of the fax server's version number */
        readonly MajorVersion: number;

        /** The minor part of the fax server's build number */
        readonly MinorBuild: number;

        /** The minor part of the fax server's version number */
        readonly MinorVersion: number;

        /** The outbound routing configuration object */
        readonly OutboundRouting: FaxOutboundRouting;

        /** The receipt options configuration object */
        readonly ReceiptOptions: FaxReceiptOptions;

        /** Register device provider */
        RegisterDeviceProvider(bstrGUID: string, bstrFriendlyName: string, bstrImageName: string, TspName: string, lFSPIVersion: number): void;

        /** Events the fax Server is listening to */
        readonly RegisteredEvents: FAX_SERVER_EVENTS_TYPE_ENUM;

        /** Register inbound routing extension */
        RegisterInboundRoutingExtension(bstrExtensionName: string, bstrFriendlyName: string, bstrImageName: string, vMethods: any): void;

        /** The security configuration object */
        readonly Security: FaxSecurity;

        /** The name of the fax server */
        readonly ServerName: string;

        /** Set server level extention property */
        SetExtensionProperty(bstrGUID: string, vProperty: SafeArray): void;

        /** Unregister device provider */
        UnregisterDeviceProvider(bstrUniqueName: string): void;

        /** Unregister inbound routing extension */
        UnregisterInboundRoutingExtension(bstrExtensionUniqueName: string): void;
    }

    namespace EventHelperTypes {
        type FaxAccount_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type FaxServer_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type FaxServer_OnDeviceStatusChange_ArgNames = ['pFaxServer', 'lDeviceId', 'bPoweredOff', 'bSending', 'bReceiving', 'bRinging'];

        interface FaxAccount_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface FaxServer_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface FaxServer_OnDeviceStatusChange_Parameter {
            readonly bPoweredOff: boolean;
            readonly bReceiving: boolean;
            readonly bRinging: boolean;
            readonly bSending: boolean;
            readonly lDeviceId: number;
            readonly pFaxServer: FaxServer;
        }
    }
}

interface ActiveXObject {
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: FAXCOMEXLib.FaxAccount, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: FAXCOMEXLib.FaxAccount, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: FAXCOMEXLib.FaxAccount, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: FAXCOMEXLib.FaxAccount, parameter: {pctinfo: number}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'Invoke', argNames: FAXCOMEXLib.EventHelperTypes.FaxAccount_Invoke_ArgNames, handler: (
            this: FAXCOMEXLib.FaxAccount, parameter: FAXCOMEXLib.EventHelperTypes.FaxAccount_Invoke_Parameter) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'OnIncomingJobAdded' | 'OnIncomingJobRemoved' | 'OnOutgoingJobAdded' | 'OnOutgoingJobRemoved',
        argNames: ['pFaxAccount', 'bstrJobId'], handler: (this: FAXCOMEXLib.FaxAccount, parameter: {readonly pFaxAccount: FAXCOMEXLib.FaxAccount, readonly bstrJobId: string}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'OnIncomingJobChanged' | 'OnOutgoingJobChanged', argNames: ['pFaxAccount', 'bstrJobId', 'pJobStatus'],
        handler: (this: FAXCOMEXLib.FaxAccount, parameter: {readonly pFaxAccount: FAXCOMEXLib.FaxAccount, readonly bstrJobId: string, readonly pJobStatus: FAXCOMEXLib.FaxJobStatus}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'OnIncomingMessageAdded', argNames: ['pFaxAccount', 'bstrMessageId', 'fAddedToReceiveFolder'],
        handler: (this: FAXCOMEXLib.FaxAccount, parameter: {readonly pFaxAccount: FAXCOMEXLib.FaxAccount, readonly bstrMessageId: string, readonly fAddedToReceiveFolder: boolean}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'OnIncomingMessageRemoved', argNames: ['pFaxAccount', 'bstrMessageId', 'fRemovedFromReceiveFolder'],
        handler: (this: FAXCOMEXLib.FaxAccount, parameter: {readonly pFaxAccount: FAXCOMEXLib.FaxAccount, readonly bstrMessageId: string, readonly fRemovedFromReceiveFolder: boolean}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'OnOutgoingMessageAdded' | 'OnOutgoingMessageRemoved', argNames: ['pFaxAccount', 'bstrMessageId'],
        handler: (this: FAXCOMEXLib.FaxAccount, parameter: {readonly pFaxAccount: FAXCOMEXLib.FaxAccount, readonly bstrMessageId: string}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'OnServerShutDown', argNames: ['pFaxServer'], handler: (
            this: FAXCOMEXLib.FaxAccount, parameter: {readonly pFaxServer: FAXCOMEXLib.FaxServer}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxAccount, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: FAXCOMEXLib.FaxAccount, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: FAXCOMEXLib.FaxServer, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: FAXCOMEXLib.FaxServer, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: FAXCOMEXLib.FaxServer, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: FAXCOMEXLib.FaxServer, parameter: {pctinfo: number}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'Invoke', argNames: FAXCOMEXLib.EventHelperTypes.FaxServer_Invoke_ArgNames, handler: (
            this: FAXCOMEXLib.FaxServer, parameter: FAXCOMEXLib.EventHelperTypes.FaxServer_Invoke_Parameter) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnActivityLoggingConfigChange' | 'OnDevicesConfigChange' | 'OnEventLoggingConfigChange' | 'OnGeneralServerConfigChanged' |
        'OnIncomingArchiveConfigChange' | 'OnOutboundRoutingGroupsConfigChange' | 'OnOutboundRoutingRulesConfigChange' | 'OnOutgoingArchiveConfigChange' |
        'OnOutgoingQueueConfigChange' | 'OnReceiptOptionsChange' | 'OnSecurityConfigChange' | 'OnServerShutDown',
        argNames: ['pFaxServer'],
        handler: (this: FAXCOMEXLib.FaxServer, parameter: {readonly pFaxServer: FAXCOMEXLib.FaxServer}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnDeviceStatusChange', argNames: FAXCOMEXLib.EventHelperTypes.FaxServer_OnDeviceStatusChange_ArgNames,
        handler: (this: FAXCOMEXLib.FaxServer, parameter: FAXCOMEXLib.EventHelperTypes.FaxServer_OnDeviceStatusChange_Parameter) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnIncomingJobAdded' | 'OnIncomingJobRemoved' | 'OnOutgoingJobAdded' | 'OnOutgoingJobRemoved',
        argNames: ['pFaxServer', 'bstrJobId'], handler: (this: FAXCOMEXLib.FaxServer, parameter: {readonly pFaxServer: FAXCOMEXLib.FaxServer, readonly bstrJobId: string}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnIncomingJobChanged' | 'OnOutgoingJobChanged', argNames: ['pFaxServer', 'bstrJobId', 'pJobStatus'],
        handler: (this: FAXCOMEXLib.FaxServer, parameter: {readonly pFaxServer: FAXCOMEXLib.FaxServer, readonly bstrJobId: string, readonly pJobStatus: FAXCOMEXLib.FaxJobStatus}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnIncomingMessageAdded' | 'OnIncomingMessageRemoved' | 'OnOutgoingMessageAdded' | 'OnOutgoingMessageRemoved',
        argNames: ['pFaxServer', 'bstrMessageId'], handler: (this: FAXCOMEXLib.FaxServer, parameter: {readonly pFaxServer: FAXCOMEXLib.FaxServer, readonly bstrMessageId: string}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnNewCall', argNames: ['pFaxServer', 'lCallId', 'lDeviceId', 'bstrCallerId'], handler: (
            this: FAXCOMEXLib.FaxServer, parameter: {readonly pFaxServer: FAXCOMEXLib.FaxServer, readonly lCallId: number, readonly lDeviceId: number, readonly bstrCallerId: string}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnQueuesStatusChange', argNames: ['pFaxServer', 'bOutgoingQueueBlocked', 'bOutgoingQueuePaused', 'bIncomingQueueBlocked'],
        handler: (
            this: FAXCOMEXLib.FaxServer,
            parameter: {
                readonly pFaxServer: FAXCOMEXLib.FaxServer, readonly bOutgoingQueueBlocked: boolean, readonly bOutgoingQueuePaused: boolean, readonly bIncomingQueueBlocked: boolean}) => void): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'OnServerActivityChange',
        argNames: ['pFaxServer', 'lIncomingMessages', 'lRoutingMessages', 'lOutgoingMessages', 'lQueuedMessages'], handler: (
            this: FAXCOMEXLib.FaxServer,
            parameter: {
                readonly pFaxServer: FAXCOMEXLib.FaxServer, readonly lIncomingMessages: number, readonly lRoutingMessages: number, readonly lOutgoingMessages: number, readonly lQueuedMessages: number
            }) => void
    ): void;
    on(
        obj: FAXCOMEXLib.FaxServer, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: FAXCOMEXLib.FaxServer, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: FAXCOMEXLib.FaxAccount, event: 'AddRef' | 'Release', handler: (this: FAXCOMEXLib.FaxAccount, parameter: {}) => void): void;
    on(obj: FAXCOMEXLib.FaxServer, event: 'AddRef' | 'Release', handler: (this: FAXCOMEXLib.FaxServer, parameter: {}) => void): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'FaxComEx.FaxDocument': FAXCOMEXLib.FaxDocument;
    'FaxComEx.FaxServer': FAXCOMEXLib.FaxServer;
}

interface EnumeratorConstructor {
    new(col: FAXCOMEXLib.FaxAccounts): Enumerator<FAXCOMEXLib.FaxAccount>;
    new(col: FAXCOMEXLib.FaxDeviceIds): Enumerator<number>;
    new(col: FAXCOMEXLib.FaxDeviceProviders): Enumerator<FAXCOMEXLib.FaxDeviceProvider>;
    new(col: FAXCOMEXLib.FaxDevices): Enumerator<FAXCOMEXLib.FaxDevice>;
    new(col: FAXCOMEXLib.FaxInboundRoutingExtensions): Enumerator<FAXCOMEXLib.FaxInboundRoutingExtension>;
    new(col: FAXCOMEXLib.FaxInboundRoutingMethods): Enumerator<FAXCOMEXLib.FaxInboundRoutingMethod>;
    new(col: FAXCOMEXLib.FaxIncomingJobs): Enumerator<FAXCOMEXLib.FaxIncomingJob>;
    new(col: FAXCOMEXLib.FaxOutboundRoutingGroups): Enumerator<FAXCOMEXLib.FaxOutboundRoutingGroup>;
    new(col: FAXCOMEXLib.FaxOutboundRoutingRules): Enumerator<FAXCOMEXLib.FaxOutboundRoutingRule>;
    new(col: FAXCOMEXLib.FaxOutgoingJobs): Enumerator<FAXCOMEXLib.IFaxOutgoingJob>;
    new(col: FAXCOMEXLib.FaxRecipients): Enumerator<FAXCOMEXLib.FaxRecipient>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
