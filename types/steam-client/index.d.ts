// Type definitions for steam-client 2.5
// Project: https://github.com/DoctorMcKay/node-steam-client
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
/// <reference types="bytebuffer" />

import { EventEmitter } from 'events';

export class CMClient extends EventEmitter {
    /**
     * A boolean that indicates whether you are currently connected and the encryption handshake is complete.
     * 'connected' is emitted when it changes to true, and 'error' is emitted when it changes to false unless you called disconnect.
     * Sending any client messages is only allowed while this is true.
     */
    connected: boolean;

    /**
     * A boolean that indicates whether you are currently logged on.
     * Calling any handler methods except for methods to log on is only allowed while logged on.
     */
    loggedOn: boolean;

    /**
     * Your own SteamID while logged on, otherwise unspecified.
     * Must be set to a valid initial value before sending a logon message.
     */
    steamID: string;

    /**
     * If we've initiated a connection previously, a string containing "ipv4:port" for the server we're connecting/connected to.
     * Also contains the address of the last host we were connected to if we're currently disconnected.
     */
    remoteAddress: string;

    // Default is TCP. UDP support is experimental
    constructor(protocol?: EConnectionProtocol);

    /**
     * Override the address and/or port that will be used for the outgoing connection.
     * Takes effect the next time you connect.
     *
     * @param localAddress The local IP address you want to use for the outgoing connection
     * @param localPort The local port you want to use for the outgoing connection
     */
    bind(localAddress?: string, localPort?: string | number): void;

    /**
     * Connects to Steam.It will keep trying to reconnect (provided autoRetry is not false) until encryption handshake is complete (see 'connected'), unless you cancel it with disconnect.
     *
     * You can call this method at any time. If you are already connected, disconnects you first. If there is an ongoing connection attempt, cancels it.
     *
     * @param server If you want to connect to a specific CM server, provide an object here containing host and port properties. Default is a random value from the servers property.
     * @param autoRetry true if you want to automatically retry connection until successful, or false if you want an error event if connection fails. Default true
     */
    connect(server?: Server, autoRetry?: boolean): void;

    /**
     * Immediately terminates the connection and prevents any events (including 'error') from being emitted until you connect again.
     * If you are already disconnected, does nothing.
     * If there is an ongoing connection attempt, cancels it.
     */
    disconnect(): void;

    /**
     * Send a logon message to the CM.
     * You must first be connected and set steamID to a valid initial value.
     * You will receive the response in the logOnResponse event.
     *
     * @param details An object containing your logon parameters
     */
    logOn(details: CMsgClientLogonPassword | CMsgClientLogonLoginKey): void;

    /**
     *
     * @param header
     * @param body
     * @param callback
     */
    send: SendMessage;

    // Events

    on<T extends keyof CMEventCallback>(eventType: T, callback: CMEventCallback[T]): this;
}

/**
 * Steam.servers contains the list of CM servers that CMClient will attempt to connect to.
 * The bootstrapped list is not always up-to-date and might contain dead servers.
 * To avoid timeouts, replace it with your own list before logging in if you have one (see 'servers' event).
 */
export const servers: Server[];

export type SendMessage = (
    /**
     * An object containing the message header. It has the following properties:
     * The following fields are reserved for internal use and shall be ignored: steamid, client_sessionid, jobid_source, jobid_target.
     * (Note: pass an empty object if you don't need to set any fields)
     */
    header: {
        /**
         * A value from EMsg
         */
        msg: EMsg,

        /**
         * A CMsgProtoBufHeader object if this message is protobuf-backed, otherwise header.proto is falsy.
         */
        proto?: CMsgProtoBufHeader | false
    },

    /**
     * A Buffer or ByteBuffer containing the rest of the message
     */
    body: Buffer | ByteBuffer,

    /**
     * If not falsy, then this message is a request, and callback shall be called with any response to it instead of 'message'/send. callback has the same arguments as 'message'/send.
     */
    callback?: SendMessage | false
) => void;

export interface CMEventCallback {
    /**
     * Connection closed by the server.
     * Only emitted if the encryption handshake is complete, otherwise it will reconnect automatically (unless you disabled autoRetry).
     * loggedOn is now false.
     *
     * @param err An Error object. May contain an eresult property.
     */
    error: (err: Error) => void;

    /**
     * Encryption handshake complete.
     * From now on, it's your responsibility to handle disconnections and reconnect (see error).
     * You'll likely want to log on now.
     *
     * @param serverLoad The load value of the CM server you're connected to. Only available if you're connecting using UDP. It's unclear at this time what scale this value uses.
     */
    connected: (serverLoad: string) => void;

    /**
     * Logon response received. If eresult is EResult.OK, loggedOn is now true.
     *
     * @param response An object with the properties in CMsgClientLogonResponse
     */
    logOnResponse: (response: CMsgClientLogonResponse) => void;

    /**
     * CMClient will use this new list when reconnecting, but it will be lost when your application restarts.
     * You might want to save it to a file or a database and assign it to Steam.servers before logging in next time.
     *
     * Note that Steam.servers will be automatically updated after this event is emitted.
     * This will be useful if you want to compare the old list with the new one for some reason - otherwise it shouldn't matter.
     *
     * @param servers An array containing the up-to-date server list
     */
    servers: (servers: Server[]) => void;

    /**
     * You were logged off from Steam. loggedOn is now false.
     *
     * @param eresesult A value from EResult
     */
    loggedOff: (eresesult: EResult) => void;

    message: SendMessage;
}

export interface Server {
    host: string;
    port: string | number;
}

// Protobufs

export interface CMsgClientLogon {
    /**
     * Your steam login
     */
    account_name: string;

    /**
     * Steam Guard code. Must be valid if provided, otherwise the logon will fail. Note that Steam Guard codes expire after a short while
     */
    auth_code?: string;

    /**
     * Two-factor authentication code provided by the Steam mobile application. You will have to provide this code every time you log in if your account uses 2FA.
     */
    two_factor_code?: string;

    /**
     * SHA1 hash of your sentry file.
     * If not provided, Steam will send you a sentry file through the ClientUpdateMachineAuth message
     * (unless a limit for registered sentries is reached? see https://github.com/seishun/node-steam/issues/178).
     * If no Steam Guard code is provided, the hash must be already registered with this account, otherwise it's ignored.
     * This value will be ignored if you enable 2FA.
     */
    sha_sentryfile?: string;
}

export interface CMsgClientLogonPassword extends CMsgClientLogon {
    /**
     * Required unless login_key is used
     */
    password: string;
}

export interface CMsgClientLogonLoginKey extends CMsgClientLogon {
    /**
     * Alternative to password
     */
    login_key: string;
}

export interface CMsgClientLogonResponse {
    /**
     * The logon was successful if equal to EResult.OK
     */
    eresult: EResult;

    /**
     * "loginkey" to be used with WebAPI's AuthenticateUser."
     */
    webapi_authenticate_user_nonce: string;
}

export interface CMsgProtoBufHeader {
    steamid?: string;
    client_sessionid?: number;
    routing_appid?: number;
    jobid_source?: string;
    jobid_target?: string;
    target_job_name?: string;
    seq_num?: number;
    eresult?: number;
    error_message?: string;
    ip?: number;
    auth_account_flags?: number;
    token_source?: number;
    admin_spoofing_user?: boolean;
    transport_error?: number;
    messageid?: string;
    publisher_group_id?: number;
    sysid?: number;
    trace_tag?: string;
    webapi_key_id?: number;
    is_from_external_source?: boolean;
    forward_to_sysid?: number[];
}

// Enums

export enum EConnectionProtocol {
    TCP = 1,
    UDP = 2,
    WebSocket = 3,
}

export enum EMsg {
    Invalid = 0,
    Multi = 1,
    ProtobufWrapped = 2,

    BaseGeneral = 100,
    GenericReply = 100,
    DestJobFailed = 113,
    Alert = 115,
    SCIDRequest = 120,
    SCIDResponse = 121,
    JobHeartbeat = 123,
    HubConnect = 124,
    Subscribe = 126,
    RouteMessage = 127, // obsolete
    RemoteSysID = 128, // obsolete
    AMCreateAccountResponse = 129,
    WGRequest = 130,
    WGResponse = 131,
    KeepAlive = 132,
    WebAPIJobRequest = 133,
    WebAPIJobResponse = 134,
    ClientSessionStart = 135,
    ClientSessionEnd = 136,
    ClientSessionUpdateAuthTicket = 137, // obsolete "renamed to ClientSessionUpdate"
    ClientSessionUpdate = 137,
    StatsDeprecated = 138, // obsolete
    Ping = 139,
    PingResponse = 140,
    Stats = 141,
    RequestFullStatsBlock = 142,
    LoadDBOCacheItem = 143,
    LoadDBOCacheItemResponse = 144,
    InvalidateDBOCacheItems = 145,
    ServiceMethod = 146,
    ServiceMethodResponse = 147,
    ClientPackageVersions = 148,
    TimestampRequest = 149,
    TimestampResponse = 150,

    BaseShell = 200,
    AssignSysID = 200,
    Exit = 201,
    DirRequest = 202,
    DirResponse = 203,
    ZipRequest = 204,
    ZipResponse = 205,
    UpdateRecordResponse = 215,
    UpdateCreditCardRequest = 221,
    UpdateUserBanResponse = 225,
    PrepareToExit = 226,
    ContentDescriptionUpdate = 227,
    TestResetServer = 228,
    UniverseChanged = 229,
    ShellConfigInfoUpdate = 230,
    RequestWindowsEventLogEntries = 233,
    ProvideWindowsEventLogEntries = 234,
    ShellSearchLogs = 235,
    ShellSearchLogsResponse = 236,
    ShellCheckWindowsUpdates = 237,
    ShellCheckWindowsUpdatesResponse = 238,
    ShellFlushUserLicenseCache = 239, // obsolete

    BaseGM = 300,
    Heartbeat = 300,
    ShellFailed = 301,
    ExitShells = 307,
    ExitShell = 308,
    GracefulExitShell = 309,
    NotifyWatchdog = 314,
    LicenseProcessingComplete = 316,
    SetTestFlag = 317,
    QueuedEmailsComplete = 318,
    GMReportPHPError = 319,
    GMDRMSync = 320,
    PhysicalBoxInventory = 321,
    UpdateConfigFile = 322,
    TestInitDB = 323,
    GMWriteConfigToSQL = 324,
    GMLoadActivationCodes = 325,
    GMQueueForFBS = 326,
    GMSchemaConversionResults = 327,
    GMSchemaConversionResultsResponse = 328, // obsolete
    GMWriteShellFailureToSQL = 329,
    GMWriteStatsToSOS = 330,
    GMGetServiceMethodRouting = 331,
    GMGetServiceMethodRoutingResponse = 332,
    GMConvertUserWallets = 333,

    BaseAIS = 400,
    AISRefreshContentDescription = 401, // obsolete
    AISRequestContentDescription = 402,
    AISUpdateAppInfo = 403,
    AISUpdatePackageInfo = 404, // obsolete "renamed to AISUpdatePackageCosts"
    AISUpdatePackageCosts = 404,
    AISGetPackageChangeNumber = 405,
    AISGetPackageChangeNumberResponse = 406,
    AISAppInfoTableChanged = 407, // obsolete
    AISUpdatePackageCostsResponse = 408,
    AISCreateMarketingMessage = 409,
    AISCreateMarketingMessageResponse = 410,
    AISGetMarketingMessage = 411,
    AISGetMarketingMessageResponse = 412,
    AISUpdateMarketingMessage = 413,
    AISUpdateMarketingMessageResponse = 414,
    AISRequestMarketingMessageUpdate = 415,
    AISDeleteMarketingMessage = 416,
    AISGetMarketingTreatments = 419, // obsolete
    AISGetMarketingTreatmentsResponse = 420, // obsolete
    AISRequestMarketingTreatmentUpdate = 421, // obsolete
    AISTestAddPackage = 422, // obsolete
    AIGetAppGCFlags = 423,
    AIGetAppGCFlagsResponse = 424,
    AIGetAppList = 425,
    AIGetAppListResponse = 426,
    AIGetAppInfo = 427, // obsolete
    AIGetAppInfoResponse = 428, // obsolete
    AISGetCouponDefinition = 429,
    AISGetCouponDefinitionResponse = 430,
    AISUpdateSlaveContentDescription = 431,
    AISUpdateSlaveContentDescriptionResponse = 432,
    AISTestEnableGC = 433,

    BaseAM = 500,
    AMUpdateUserBanRequest = 504,
    AMAddLicense = 505,
    AMBeginProcessingLicenses = 507, // obsolete
    AMSendSystemIMToUser = 508,
    AMExtendLicense = 509,
    AMAddMinutesToLicense = 510,
    AMCancelLicense = 511,
    AMInitPurchase = 512,
    AMPurchaseResponse = 513,
    AMGetFinalPrice = 514,
    AMGetFinalPriceResponse = 515,
    AMGetLegacyGameKey = 516,
    AMGetLegacyGameKeyResponse = 517,
    AMFindHungTransactions = 518,
    AMSetAccountTrustedRequest = 519,
    AMCompletePurchase = 521,
    AMCancelPurchase = 522,
    AMNewChallenge = 523,
    AMLoadOEMTickets = 524,
    AMFixPendingPurchase = 525,
    AMFixPendingPurchaseResponse = 526,
    AMIsUserBanned = 527,
    AMRegisterKey = 528,
    AMLoadActivationCodes = 529,
    AMLoadActivationCodesResponse = 530,
    AMLookupKeyResponse = 531,
    AMLookupKey = 532,
    AMChatCleanup = 533,
    AMClanCleanup = 534,
    AMFixPendingRefund = 535,
    AMReverseChargeback = 536,
    AMReverseChargebackResponse = 537,
    AMClanCleanupList = 538,
    AMGetLicenses = 539,
    AMGetLicensesResponse = 540,
    AllowUserToPlayQuery = 550,
    AllowUserToPlayResponse = 551,
    AMVerfiyUser = 552,
    AMClientNotPlaying = 553,
    ClientRequestFriendship = 554,
    AMRelayPublishStatus = 555,
    AMResetCommunityContent = 556, // obsolete
    AMPrimePersonaStateCache = 557, // obsolete
    AMAllowUserContentQuery = 558, // obsolete
    AMAllowUserContentResponse = 559, // obsolete
    AMInitPurchaseResponse = 560,
    AMRevokePurchaseResponse = 561,
    AMLockProfile = 562, // obsolete
    AMRefreshGuestPasses = 563,
    AMInviteUserToClan = 564,
    AMAcknowledgeClanInvite = 565,
    AMGrantGuestPasses = 566,
    AMClanDataUpdated = 567,
    AMReloadAccount = 568,
    AMClientChatMsgRelay = 569,
    AMChatMulti = 570,
    AMClientChatInviteRelay = 571,
    AMChatInvite = 572,
    AMClientJoinChatRelay = 573,
    AMClientChatMemberInfoRelay = 574,
    AMPublishChatMemberInfo = 575,
    AMClientAcceptFriendInvite = 576,
    AMChatEnter = 577,
    AMClientPublishRemovalFromSource = 578,
    AMChatActionResult = 579,
    AMFindAccounts = 580,
    AMFindAccountsResponse = 581,
    AMRequestAccountData = 582,
    AMRequestAccountDataResponse = 583,
    AMSetAccountFlags = 584,
    AMCreateClan = 586,
    AMCreateClanResponse = 587,
    AMGetClanDetails = 588,
    AMGetClanDetailsResponse = 589,
    AMSetPersonaName = 590,
    AMSetAvatar = 591,
    AMAuthenticateUser = 592,
    AMAuthenticateUserResponse = 593,
    AMGetAccountFriendsCount = 594, // obsolete
    AMGetAccountFriendsCountResponse = 595, // obsolete
    AMP2PIntroducerMessage = 596,
    ClientChatAction = 597,
    AMClientChatActionRelay = 598,

    BaseVS = 600,
    ReqChallenge = 600,
    VACResponse = 601,
    ReqChallengeTest = 602,
    VSMarkCheat = 604,
    VSAddCheat = 605,
    VSPurgeCodeModDB = 606,
    VSGetChallengeResults = 607,
    VSChallengeResultText = 608,
    VSReportLingerer = 609,
    VSRequestManagedChallenge = 610,
    VSLoadDBFinished = 611,

    BaseDRMS = 625,
    DRMBuildBlobRequest = 628,
    DRMBuildBlobResponse = 629,
    DRMResolveGuidRequest = 630,
    DRMResolveGuidResponse = 631,
    DRMVariabilityReport = 633,
    DRMVariabilityReportResponse = 634,
    DRMStabilityReport = 635,
    DRMStabilityReportResponse = 636,
    DRMDetailsReportRequest = 637,
    DRMDetailsReportResponse = 638,
    DRMProcessFile = 639,
    DRMAdminUpdate = 640,
    DRMAdminUpdateResponse = 641,
    DRMSync = 642,
    DRMSyncResponse = 643,
    DRMProcessFileResponse = 644,
    DRMEmptyGuidCache = 645,
    DRMEmptyGuidCacheResponse = 646,

    BaseCS = 650,
    CSUserContentRequest = 652, // obsolete

    BaseClient = 700,
    ClientLogOn_Deprecated = 701, // obsolete
    ClientAnonLogOn_Deprecated = 702, // obsolete
    ClientHeartBeat = 703,
    ClientVACResponse = 704,
    ClientGamesPlayed_obsolete = 705, // obsolete
    ClientLogOff = 706,
    ClientNoUDPConnectivity = 707,
    ClientInformOfCreateAccount = 708,
    ClientAckVACBan = 709, // obsolete
    ClientConnectionStats = 710,
    ClientInitPurchase = 711, // obsolete
    ClientPingResponse = 712,
    ClientRemoveFriend = 714,
    ClientGamesPlayedNoDataBlob = 715,
    ClientChangeStatus = 716,
    ClientVacStatusResponse = 717,
    ClientFriendMsg = 718,
    ClientGameConnect_obsolete = 719, // obsolete
    ClientGamesPlayed2_obsolete = 720, // obsolete
    ClientGameEnded_obsolete = 721, // obsolete
    ClientGetFinalPrice = 722, // obsolete
    ClientSystemIM = 726,
    ClientSystemIMAck = 727,
    ClientGetLicenses = 728,
    ClientCancelLicense = 729, // obsolete
    ClientGetLegacyGameKey = 730,
    ClientContentServerLogOn_Deprecated = 731, // obsolete
    ClientAckVACBan2 = 732,
    ClientAckMessageByGID = 735, // obsolete
    ClientGetPurchaseReceipts = 736,
    ClientAckPurchaseReceipt = 737, // obsolete
    ClientGamesPlayed3_obsolete = 738, // obsolete
    ClientSendGuestPass = 739, // obsolete
    ClientAckGuestPass = 740,
    ClientRedeemGuestPass = 741,
    ClientGamesPlayed = 742,
    ClientRegisterKey = 743,
    ClientInviteUserToClan = 744,
    ClientAcknowledgeClanInvite = 745,
    ClientPurchaseWithMachineID = 746,
    ClientAppUsageEvent = 747,
    ClientGetGiftTargetList = 748, // obsolete
    ClientGetGiftTargetListResponse = 749, // obsolete
    ClientLogOnResponse = 751,
    ClientVACChallenge = 753, // obsolete
    ClientSetHeartbeatRate = 755,
    ClientNotLoggedOnDeprecated = 756, // obsolete
    ClientLoggedOff = 757,
    GSApprove = 758,
    GSDeny = 759,
    GSKick = 760,
    ClientCreateAcctResponse = 761,
    ClientPurchaseResponse = 763,
    ClientPing = 764,
    ClientNOP = 765,
    ClientPersonaState = 766,
    ClientFriendsList = 767,
    ClientAccountInfo = 768,
    ClientVacStatusQuery = 770, // obsolete
    ClientNewsUpdate = 771,
    ClientGameConnectDeny = 773,
    GSStatusReply = 774,
    ClientGetFinalPriceResponse = 775, // obsolete
    ClientGameConnectTokens = 779,
    ClientLicenseList = 780,
    ClientCancelLicenseResponse = 781, // obsolete
    ClientVACBanStatus = 782,
    ClientCMList = 783,
    ClientEncryptPct = 784,
    ClientGetLegacyGameKeyResponse = 785,
    ClientFavoritesList = 786, // obsolete
    CSUserContentApprove = 787, // obsolete
    CSUserContentDeny = 788, // obsolete
    ClientInitPurchaseResponse = 789, // obsolete
    ClientAddFriend = 791,
    ClientAddFriendResponse = 792,
    ClientInviteFriend = 793, // obsolete
    ClientInviteFriendResponse = 794, // obsolete
    ClientSendGuestPassResponse = 795, // obsolete
    ClientAckGuestPassResponse = 796,
    ClientRedeemGuestPassResponse = 797,
    ClientUpdateGuestPassesList = 798,
    ClientChatMsg = 799,
    ClientChatInvite = 800,
    ClientJoinChat = 801,
    ClientChatMemberInfo = 802,
    ClientLogOnWithCredentials_Deprecated = 803, // obsolete
    ClientPasswordChangeResponse = 805,
    ClientChatEnter = 807,
    ClientFriendRemovedFromSource = 808,
    ClientCreateChat = 809,
    ClientCreateChatResponse = 810,
    ClientUpdateChatMetadata = 811, // obsolete
    ClientP2PIntroducerMessage = 813,
    ClientChatActionResult = 814,
    ClientRequestFriendData = 815,
    ClientGetUserStats = 818,
    ClientGetUserStatsResponse = 819,
    ClientStoreUserStats = 820,
    ClientStoreUserStatsResponse = 821,
    ClientClanState = 822,
    ClientServiceModule = 830,
    ClientServiceCall = 831,
    ClientServiceCallResponse = 832,
    ClientPackageInfoRequest = 833, // obsolete
    ClientPackageInfoResponse = 834, // obsolete
    ClientNatTraversalStatEvent = 839,
    ClientAppInfoRequest = 840, // obsolete
    ClientAppInfoResponse = 841, // obsolete
    ClientSteamUsageEvent = 842,
    ClientCheckPassword = 845,
    ClientResetPassword = 846,
    ClientCheckPasswordResponse = 848,
    ClientResetPasswordResponse = 849,
    ClientSessionToken = 850,
    ClientDRMProblemReport = 851,
    ClientSetIgnoreFriend = 855,
    ClientSetIgnoreFriendResponse = 856,
    ClientGetAppOwnershipTicket = 857,
    ClientGetAppOwnershipTicketResponse = 858,
    ClientGetLobbyListResponse = 860,
    ClientGetLobbyMetadata = 861, // obsolete
    ClientGetLobbyMetadataResponse = 862, // obsolete
    ClientVTTCert = 863, // obsolete
    ClientAppInfoUpdate = 866, // obsolete
    ClientAppInfoChanges = 867, // obsolete
    ClientServerList = 880,
    ClientEmailChangeResponse = 891,
    ClientSecretQAChangeResponse = 892,
    ClientDRMBlobRequest = 896,
    ClientDRMBlobResponse = 897,
    ClientLookupKey = 898, // obsolete
    ClientLookupKeyResponse = 899, // obsolete

    BaseGameServer = 900,
    GSDisconnectNotice = 901,
    GSStatus = 903,
    GSUserPlaying = 905,
    GSStatus2 = 906,
    GSStatusUpdate_Unused = 907,
    GSServerType = 908,
    GSPlayerList = 909,
    GSGetUserAchievementStatus = 910,
    GSGetUserAchievementStatusResponse = 911,
    GSGetPlayStats = 918,
    GSGetPlayStatsResponse = 919,
    GSGetUserGroupStatus = 920,
    AMGetUserGroupStatus = 921,
    AMGetUserGroupStatusResponse = 922,
    GSGetUserGroupStatusResponse = 923,
    GSGetReputation = 936,
    GSGetReputationResponse = 937,
    GSAssociateWithClan = 938,
    GSAssociateWithClanResponse = 939,
    GSComputeNewPlayerCompatibility = 940,
    GSComputeNewPlayerCompatibilityResponse = 941,

    BaseAdmin = 1000,
    AdminCmd = 1000,
    AdminCmdResponse = 1004,
    AdminLogListenRequest = 1005,
    AdminLogEvent = 1006,
    LogSearchRequest = 1007, // obsolete
    LogSearchResponse = 1008, // obsolete
    LogSearchCancel = 1009, // obsolete
    UniverseData = 1010,
    RequestStatHistory = 1014, // obsolete
    StatHistory = 1015, // obsolete
    AdminPwLogon = 1017, // obsolete
    AdminPwLogonResponse = 1018, // obsolete
    AdminSpew = 1019,
    AdminConsoleTitle = 1020,
    AdminGCSpew = 1023,
    AdminGCCommand = 1024,
    AdminGCGetCommandList = 1025,
    AdminGCGetCommandListResponse = 1026,
    FBSConnectionData = 1027,
    AdminMsgSpew = 1028,

    BaseFBS = 1100,
    FBSReqVersion = 1100,
    FBSVersionInfo = 1101,
    FBSForceRefresh = 1102,
    FBSForceBounce = 1103,
    FBSDeployPackage = 1104,
    FBSDeployResponse = 1105,
    FBSUpdateBootstrapper = 1106,
    FBSSetState = 1107,
    FBSApplyOSUpdates = 1108,
    FBSRunCMDScript = 1109,
    FBSRebootBox = 1110,
    FBSSetBigBrotherMode = 1111,
    FBSMinidumpServer = 1112,
    FBSSetShellCount_obsolete = 1113, // obsolete
    FBSDeployHotFixPackage = 1114,
    FBSDeployHotFixResponse = 1115,
    FBSDownloadHotFix = 1116,
    FBSDownloadHotFixResponse = 1117,
    FBSUpdateTargetConfigFile = 1118,
    FBSApplyAccountCred = 1119,
    FBSApplyAccountCredResponse = 1120,
    FBSSetShellCount = 1121,
    FBSTerminateShell = 1122,
    FBSQueryGMForRequest = 1123,
    FBSQueryGMResponse = 1124,
    FBSTerminateZombies = 1125,
    FBSInfoFromBootstrapper = 1126,
    FBSRebootBoxResponse = 1127,
    FBSBootstrapperPackageRequest = 1128,
    FBSBootstrapperPackageResponse = 1129,
    FBSBootstrapperGetPackageChunk = 1130,
    FBSBootstrapperGetPackageChunkResponse = 1131,
    FBSBootstrapperPackageTransferProgress = 1132,
    FBSRestartBootstrapper = 1133,

    BaseFileXfer = 1200,
    FileXferRequest = 1200,
    FileXferResponse = 1201,
    FileXferData = 1202,
    FileXferEnd = 1203,
    FileXferDataAck = 1204,

    BaseChannelAuth = 1300,
    ChannelAuthChallenge = 1300,
    ChannelAuthResponse = 1301,
    ChannelAuthResult = 1302,
    ChannelEncryptRequest = 1303,
    ChannelEncryptResponse = 1304,
    ChannelEncryptResult = 1305,

    BaseBS = 1400,
    BSPurchaseStart = 1401,
    BSPurchaseResponse = 1402, // obsolete
    BSSettleNOVA = 1404, // obsolete
    BSSettleComplete = 1406,
    BSBannedRequest = 1407, // obsolete
    BSInitPayPalTxn = 1408,
    BSInitPayPalTxnResponse = 1409,
    BSGetPayPalUserInfo = 1410,
    BSGetPayPalUserInfoResponse = 1411,
    BSRefundTxn = 1413, // obsolete
    BSRefundTxnResponse = 1414, // obsolete
    BSGetEvents = 1415, // obsolete
    BSChaseRFRRequest = 1416, // obsolete
    BSPaymentInstrBan = 1417,
    BSPaymentInstrBanResponse = 1418,
    BSProcessGCReports = 1419, // obsolete
    BSProcessPPReports = 1420, // obsolete
    BSInitGCBankXferTxn = 1421,
    BSInitGCBankXferTxnResponse = 1422,
    BSQueryGCBankXferTxn = 1423, // obsolete
    BSQueryGCBankXferTxnResponse = 1424, // obsolete
    BSCommitGCTxn = 1425,
    BSQueryTransactionStatus = 1426,
    BSQueryTransactionStatusResponse = 1427,
    BSQueryCBOrderStatus = 1428, // obsolete
    BSQueryCBOrderStatusResponse = 1429, // obsolete
    BSRunRedFlagReport = 1430, // obsolete
    BSQueryPaymentInstUsage = 1431,
    BSQueryPaymentInstResponse = 1432,
    BSQueryTxnExtendedInfo = 1433,
    BSQueryTxnExtendedInfoResponse = 1434,
    BSUpdateConversionRates = 1435,
    BSProcessUSBankReports = 1436, // obsolete
    BSPurchaseRunFraudChecks = 1437,
    BSPurchaseRunFraudChecksResponse = 1438,
    BSStartShippingJobs = 1439, // obsolete
    BSQueryBankInformation = 1440,
    BSQueryBankInformationResponse = 1441,
    BSValidateXsollaSignature = 1445,
    BSValidateXsollaSignatureResponse = 1446,
    BSQiwiWalletInvoice = 1448,
    BSQiwiWalletInvoiceResponse = 1449,
    BSUpdateInventoryFromProPack = 1450,
    BSUpdateInventoryFromProPackResponse = 1451,
    BSSendShippingRequest = 1452,
    BSSendShippingRequestResponse = 1453,
    BSGetProPackOrderStatus = 1454,
    BSGetProPackOrderStatusResponse = 1455,
    BSCheckJobRunning = 1456,
    BSCheckJobRunningResponse = 1457,
    BSResetPackagePurchaseRateLimit = 1458,
    BSResetPackagePurchaseRateLimitResponse = 1459,
    BSUpdatePaymentData = 1460,
    BSUpdatePaymentDataResponse = 1461,
    BSGetBillingAddress = 1462,
    BSGetBillingAddressResponse = 1463,
    BSGetCreditCardInfo = 1464,
    BSGetCreditCardInfoResponse = 1465,
    BSRemoveExpiredPaymentData = 1468,
    BSRemoveExpiredPaymentDataResponse = 1469,
    BSConvertToCurrentKeys = 1470,
    BSConvertToCurrentKeysResponse = 1471,
    BSInitPurchase = 1472,
    BSInitPurchaseResponse = 1473,
    BSCompletePurchase = 1474,
    BSCompletePurchaseResponse = 1475,
    BSPruneCardUsageStats = 1476,
    BSPruneCardUsageStatsResponse = 1477,
    BSStoreBankInformation = 1478,
    BSStoreBankInformationResponse = 1479,
    BSVerifyPOSAKey = 1480,
    BSVerifyPOSAKeyResponse = 1481,
    BSReverseRedeemPOSAKey = 1482,
    BSReverseRedeemPOSAKeyResponse = 1483,
    BSQueryFindCreditCard = 1484,
    BSQueryFindCreditCardResponse = 1485,
    BSStatusInquiryPOSAKey = 1486,
    BSStatusInquiryPOSAKeyResponse = 1487,
    BSValidateMoPaySignature = 1488,
    BSValidateMoPaySignatureResponse = 1489,
    BSMoPayConfirmProductDelivery = 1490,
    BSMoPayConfirmProductDeliveryResponse = 1491,
    BSGenerateMoPayMD5 = 1492,
    BSGenerateMoPayMD5Response = 1493,
    BSBoaCompraConfirmProductDelivery = 1494,
    BSBoaCompraConfirmProductDeliveryResponse = 1495,
    BSGenerateBoaCompraMD5 = 1496,
    BSGenerateBoaCompraMD5Response = 1497,
    BSCommitWPTxn = 1498,

    BaseATS = 1500,
    ATSStartStressTest = 1501,
    ATSStopStressTest = 1502,
    ATSRunFailServerTest = 1503,
    ATSUFSPerfTestTask = 1504,
    ATSUFSPerfTestResponse = 1505,
    ATSCycleTCM = 1506,
    ATSInitDRMSStressTest = 1507,
    ATSCallTest = 1508,
    ATSCallTestReply = 1509,
    ATSStartExternalStress = 1510,
    ATSExternalStressJobStart = 1511,
    ATSExternalStressJobQueued = 1512,
    ATSExternalStressJobRunning = 1513,
    ATSExternalStressJobStopped = 1514,
    ATSExternalStressJobStopAll = 1515,
    ATSExternalStressActionResult = 1516,
    ATSStarted = 1517,
    ATSCSPerfTestTask = 1518,
    ATSCSPerfTestResponse = 1519,

    BaseDP = 1600,
    DPSetPublishingState = 1601,
    DPGamePlayedStats = 1602, // obsolete
    DPUniquePlayersStat = 1603,
    DPStreamingUniquePlayersStat = 1604,
    DPVacInfractionStats = 1605,
    DPVacBanStats = 1606,
    DPBlockingStats = 1607,
    DPNatTraversalStats = 1608,
    DPSteamUsageEvent = 1609, // obsolete
    DPVacCertBanStats = 1610,
    DPVacCafeBanStats = 1611,
    DPCloudStats = 1612,
    DPAchievementStats = 1613,
    DPAccountCreationStats = 1614,
    DPGetPlayerCount = 1615,
    DPGetPlayerCountResponse = 1616,
    DPGameServersPlayersStats = 1617,
    DPDownloadRateStatistics = 1618, // obsolete
    DPFacebookStatistics = 1619,
    ClientDPCheckSpecialSurvey = 1620,
    ClientDPCheckSpecialSurveyResponse = 1621,
    ClientDPSendSpecialSurveyResponse = 1622,
    ClientDPSendSpecialSurveyResponseReply = 1623,
    DPStoreSaleStatistics = 1624,
    ClientDPUpdateAppJobReport = 1625,
    ClientDPSteam2AppStarted = 1627, // obsolete
    DPUpdateContentEvent = 1626,
    DPPartnerMicroTxns = 1628,
    DPPartnerMicroTxnsResponse = 1629,
    ClientDPContentStatsReport = 1630,
    DPVRUniquePlayersStat = 1631,

    BaseCM = 1700,
    CMSetAllowState = 1701,
    CMSpewAllowState = 1702,
    CMAppInfoResponseDeprecated = 1703, // obsolete

    BaseDSS = 1800, // obsolete
    DSSNewFile = 1801, // obsolete
    DSSCurrentFileList = 1802, // obsolete
    DSSSynchList = 1803, // obsolete
    DSSSynchListResponse = 1804, // obsolete
    DSSSynchSubscribe = 1805, // obsolete
    DSSSynchUnsubscribe = 1806, // obsolete

    BaseEPM = 1900, // obsolete
    EPMStartProcess = 1901, // obsolete
    EPMStopProcess = 1902, // obsolete
    EPMRestartProcess = 1903, // obsolete

    BaseGC = 2200,
    GCSendClient = 2200, // obsolete
    AMRelayToGC = 2201, // obsolete
    GCUpdatePlayedState = 2202, // obsolete
    GCCmdRevive = 2203,
    GCCmdBounce = 2204, // obsolete
    GCCmdForceBounce = 2205, // obsolete
    GCCmdDown = 2206,
    GCCmdDeploy = 2207,
    GCCmdDeployResponse = 2208,
    GCCmdSwitch = 2209,
    AMRefreshSessions = 2210,
    GCUpdateGSState = 2211, // obsolete
    GCAchievementAwarded = 2212,
    GCSystemMessage = 2213,
    GCValidateSession = 2214, // obsolete
    GCValidateSessionResponse = 2215, // obsolete
    GCCmdStatus = 2216,
    GCRegisterWebInterfaces = 2217, // obsolete
    GCRegisterWebInterfaces_Deprecated = 2217, // obsolete
    GCGetAccountDetails = 2218, // obsolete
    GCGetAccountDetails_DEPRECATED = 2218, // obsolete
    GCInterAppMessage = 2219,
    GCGetEmailTemplate = 2220,
    GCGetEmailTemplateResponse = 2221,
    ISRelayToGCH = 2222, // obsolete "renamed to GCHRelay"
    GCHRelay = 2222,
    GCHRelayClientToIS = 2223, // obsolete "renamed to GCHRelayToClient"
    GCHRelayToClient = 2223,
    GCHUpdateSession = 2224,
    GCHRequestUpdateSession = 2225,
    GCHRequestStatus = 2226,
    GCHRequestStatusResponse = 2227,
    GCHAccountVacStatusChange = 2228,
    GCHSpawnGC = 2229,
    GCHSpawnGCResponse = 2230,
    GCHKillGC = 2231,
    GCHKillGCResponse = 2232,
    GCHAccountTradeBanStatusChange = 2233,
    GCHAccountLockStatusChange = 2234,
    GCHVacVerificationChange = 2235,
    GCHAccountPhoneNumberChange = 2236,
    GCHAccountTwoFactorChange = 2237,

    BaseP2P = 2500,
    P2PIntroducerMessage = 2502,

    BaseSM = 2900,
    SMExpensiveReport = 2902,
    SMHourlyReport = 2903,
    SMFishingReport = 2904,
    SMPartitionRenames = 2905,
    SMMonitorSpace = 2906,
    SMGetSchemaConversionResults = 2907, // obsolete
    SMGetSchemaConversionResultsResponse = 2908, // obsolete

    BaseTest = 3000,
    FailServer = 3000,
    JobHeartbeatTest = 3001,
    JobHeartbeatTestResponse = 3002,

    BaseFTSRange = 3100,
    FTSGetBrowseCounts = 3101, // obsolete
    FTSGetBrowseCountsResponse = 3102, // obsolete
    FTSBrowseClans = 3103, // obsolete
    FTSBrowseClansResponse = 3104, // obsolete
    FTSSearchClansByLocation = 3105, // obsolete
    FTSSearchClansByLocationResponse = 3106, // obsolete
    FTSSearchPlayersByLocation = 3107, // obsolete
    FTSSearchPlayersByLocationResponse = 3108, // obsolete
    FTSClanDeleted = 3109, // obsolete
    FTSSearch = 3110, // obsolete
    FTSSearchResponse = 3111, // obsolete
    FTSSearchStatus = 3112, // obsolete
    FTSSearchStatusResponse = 3113, // obsolete
    FTSGetGSPlayStats = 3114, // obsolete
    FTSGetGSPlayStatsResponse = 3115, // obsolete
    FTSGetGSPlayStatsForServer = 3116, // obsolete
    FTSGetGSPlayStatsForServerResponse = 3117, // obsolete
    FTSReportIPUpdates = 3118, // obsolete

    BaseCCSRange = 3150,
    CCSGetComments = 3151, // obsolete
    CCSGetCommentsResponse = 3152, // obsolete
    CCSAddComment = 3153, // obsolete
    CCSAddCommentResponse = 3154, // obsolete
    CCSDeleteComment = 3155, // obsolete
    CCSDeleteCommentResponse = 3156, // obsolete
    CCSPreloadComments = 3157, // obsolete
    CCSNotifyCommentCount = 3158, // obsolete
    CCSGetCommentsForNews = 3159, // obsolete
    CCSGetCommentsForNewsResponse = 3160, // obsolete
    CCSDeleteAllCommentsByAuthor = 3161,
    CCSDeleteAllCommentsByAuthorResponse = 3162,

    BaseLBSRange = 3200,
    LBSSetScore = 3201,
    LBSSetScoreResponse = 3202,
    LBSFindOrCreateLB = 3203,
    LBSFindOrCreateLBResponse = 3204,
    LBSGetLBEntries = 3205,
    LBSGetLBEntriesResponse = 3206,
    LBSGetLBList = 3207,
    LBSGetLBListResponse = 3208,
    LBSSetLBDetails = 3209,
    LBSDeleteLB = 3210,
    LBSDeleteLBEntry = 3211,
    LBSResetLB = 3212,
    LBSResetLBResponse = 3213,
    LBSDeleteLBResponse = 3214,

    BaseOGS = 3400,
    OGSBeginSession = 3401,
    OGSBeginSessionResponse = 3402,
    OGSEndSession = 3403,
    OGSEndSessionResponse = 3404,
    OGSWriteAppSessionRow = 3406,

    BaseBRP = 3600,
    BRPStartShippingJobs = 3601,
    BRPProcessUSBankReports = 3602,
    BRPProcessGCReports = 3603,
    BRPProcessPPReports = 3604,
    BRPSettleNOVA = 3605, // obsolete
    BRPSettleCB = 3606, // obsolete
    BRPCommitGC = 3607,
    BRPCommitGCResponse = 3608,
    BRPFindHungTransactions = 3609,
    BRPCheckFinanceCloseOutDate = 3610,
    BRPProcessLicenses = 3611,
    BRPProcessLicensesResponse = 3612,
    BRPRemoveExpiredPaymentData = 3613,
    BRPRemoveExpiredPaymentDataResponse = 3614,
    BRPConvertToCurrentKeys = 3615,
    BRPConvertToCurrentKeysResponse = 3616,
    BRPPruneCardUsageStats = 3617,
    BRPPruneCardUsageStatsResponse = 3618,
    BRPCheckActivationCodes = 3619,
    BRPCheckActivationCodesResponse = 3620,
    BRPCommitWP = 3621,
    BRPCommitWPResponse = 3622,
    BRPProcessWPReports = 3623,
    BRPProcessPaymentRules = 3624,
    BRPProcessPartnerPayments = 3625,
    BRPCheckSettlementReports = 3626,
    BRPPostTaxToAvalara = 3628,
    BRPPostTransactionTax = 3629,
    BRPPostTransactionTaxResponse = 3630,
    BRPProcessIMReports = 3631,

    BaseAMRange2 = 4000,
    AMCreateChat = 4001,
    AMCreateChatResponse = 4002,
    AMUpdateChatMetadata = 4003, // obsolete
    AMPublishChatMetadata = 4004, // obsolete
    AMSetProfileURL = 4005,
    AMGetAccountEmailAddress = 4006,
    AMGetAccountEmailAddressResponse = 4007,
    AMRequestFriendData = 4008, // obsolete "renamed to AMRequestClanData"
    AMRequestClanData = 4008,
    AMRouteToClients = 4009,
    AMLeaveClan = 4010,
    AMClanPermissions = 4011,
    AMClanPermissionsResponse = 4012,
    AMCreateClanEvent = 4013,
    AMCreateClanEventResponse = 4014,
    AMUpdateClanEvent = 4015,
    AMUpdateClanEventResponse = 4016,
    AMGetClanEvents = 4017,
    AMGetClanEventsResponse = 4018,
    AMDeleteClanEvent = 4019,
    AMDeleteClanEventResponse = 4020,
    AMSetClanPermissionSettings = 4021,
    AMSetClanPermissionSettingsResponse = 4022,
    AMGetClanPermissionSettings = 4023,
    AMGetClanPermissionSettingsResponse = 4024,
    AMPublishChatRoomInfo = 4025,
    ClientChatRoomInfo = 4026,
    AMCreateClanAnnouncement = 4027, // obsolete
    AMCreateClanAnnouncementResponse = 4028, // obsolete
    AMUpdateClanAnnouncement = 4029, // obsolete
    AMUpdateClanAnnouncementResponse = 4030, // obsolete
    AMGetClanAnnouncementsCount = 4031, // obsolete
    AMGetClanAnnouncementsCountResponse = 4032, // obsolete
    AMGetClanAnnouncements = 4033, // obsolete
    AMGetClanAnnouncementsResponse = 4034, // obsolete
    AMDeleteClanAnnouncement = 4035, // obsolete
    AMDeleteClanAnnouncementResponse = 4036, // obsolete
    AMGetSingleClanAnnouncement = 4037, // obsolete
    AMGetSingleClanAnnouncementResponse = 4038, // obsolete
    AMGetClanHistory = 4039,
    AMGetClanHistoryResponse = 4040,
    AMGetClanPermissionBits = 4041,
    AMGetClanPermissionBitsResponse = 4042,
    AMSetClanPermissionBits = 4043,
    AMSetClanPermissionBitsResponse = 4044,
    AMSessionInfoRequest = 4045,
    AMSessionInfoResponse = 4046,
    AMValidateWGToken = 4047,
    AMGetSingleClanEvent = 4048,
    AMGetSingleClanEventResponse = 4049,
    AMGetClanRank = 4050,
    AMGetClanRankResponse = 4051,
    AMSetClanRank = 4052,
    AMSetClanRankResponse = 4053,
    AMGetClanPOTW = 4054,
    AMGetClanPOTWResponse = 4055,
    AMSetClanPOTW = 4056,
    AMSetClanPOTWResponse = 4057,
    AMRequestChatMetadata = 4058, // obsolete
    AMDumpUser = 4059,
    AMKickUserFromClan = 4060,
    AMAddFounderToClan = 4061,
    AMValidateWGTokenResponse = 4062,
    AMSetCommunityState = 4063,
    AMSetAccountDetails = 4064,
    AMGetChatBanList = 4065,
    AMGetChatBanListResponse = 4066,
    AMUnBanFromChat = 4067,
    AMSetClanDetails = 4068,
    AMGetAccountLinks = 4069,
    AMGetAccountLinksResponse = 4070,
    AMSetAccountLinks = 4071,
    AMSetAccountLinksResponse = 4072,
    AMGetUserGameStats = 4073,
    AMGetUserGameStatsResponse = 4074,
    AMCheckClanMembership = 4075,
    AMGetClanMembers = 4076,
    AMGetClanMembersResponse = 4077,
    AMJoinPublicClan = 4078,
    AMNotifyChatOfClanChange = 4079,
    AMResubmitPurchase = 4080,
    AMAddFriend = 4081,
    AMAddFriendResponse = 4082,
    AMRemoveFriend = 4083,
    AMDumpClan = 4084,
    AMChangeClanOwner = 4085,
    AMCancelEasyCollect = 4086,
    AMCancelEasyCollectResponse = 4087,
    AMGetClanMembershipList = 4088, // obsolete
    AMGetClanMembershipListResponse = 4089, // obsolete
    AMClansInCommon = 4090,
    AMClansInCommonResponse = 4091,
    AMIsValidAccountID = 4092,
    AMConvertClan = 4093,
    AMGetGiftTargetListRelay = 4094, // obsolete
    AMWipeFriendsList = 4095,
    AMSetIgnored = 4096,
    AMClansInCommonCountResponse = 4097,
    AMFriendsList = 4098,
    AMFriendsListResponse = 4099,
    AMFriendsInCommon = 4100,
    AMFriendsInCommonResponse = 4101,
    AMFriendsInCommonCountResponse = 4102,
    AMClansInCommonCount = 4103,
    AMChallengeVerdict = 4104,
    AMChallengeNotification = 4105,
    AMFindGSByIP = 4106,
    AMFoundGSByIP = 4107,
    AMGiftRevoked = 4108,
    AMCreateAccountRecord = 4109,
    AMUserClanList = 4110,
    AMUserClanListResponse = 4111,
    AMGetAccountDetails2 = 4112,
    AMGetAccountDetailsResponse2 = 4113,
    AMSetCommunityProfileSettings = 4114,
    AMSetCommunityProfileSettingsResponse = 4115,
    AMGetCommunityPrivacyState = 4116,
    AMGetCommunityPrivacyStateResponse = 4117,
    AMCheckClanInviteRateLimiting = 4118,
    AMGetUserAchievementStatus = 4119,
    AMGetIgnored = 4120,
    AMGetIgnoredResponse = 4121,
    AMSetIgnoredResponse = 4122,
    AMSetFriendRelationshipNone = 4123,
    AMGetFriendRelationship = 4124,
    AMGetFriendRelationshipResponse = 4125,
    AMServiceModulesCache = 4126,
    AMServiceModulesCall = 4127,
    AMServiceModulesCallResponse = 4128,
    AMGetCaptchaDataForIP = 4129,
    AMGetCaptchaDataForIPResponse = 4130,
    AMValidateCaptchaDataForIP = 4131,
    AMValidateCaptchaDataForIPResponse = 4132,
    AMTrackFailedAuthByIP = 4133,
    AMGetCaptchaDataByGID = 4134,
    AMGetCaptchaDataByGIDResponse = 4135,
    AMGetLobbyList = 4136, // obsolete
    AMGetLobbyListResponse = 4137, // obsolete
    AMGetLobbyMetadata = 4138, // obsolete
    AMGetLobbyMetadataResponse = 4139, // obsolete
    CommunityAddFriendNews = 4140,
    AMAddClanNews = 4141, // obsolete
    AMWriteNews = 4142, // obsolete
    AMFindClanUser = 4143,
    AMFindClanUserResponse = 4144,
    AMBanFromChat = 4145,
    AMGetUserHistoryResponse = 4146, // obsolete
    AMGetUserNewsSubscriptions = 4147,
    AMGetUserNewsSubscriptionsResponse = 4148,
    AMSetUserNewsSubscriptions = 4149,
    AMGetUserNews = 4150, // obsolete
    AMGetUserNewsResponse = 4151, // obsolete
    AMSendQueuedEmails = 4152,
    AMSetLicenseFlags = 4153,
    AMGetUserHistory = 4154, // obsolete
    CommunityDeleteUserNews = 4155,
    AMAllowUserFilesRequest = 4156,
    AMAllowUserFilesResponse = 4157,
    AMGetAccountStatus = 4158,
    AMGetAccountStatusResponse = 4159,
    AMEditBanReason = 4160,
    AMCheckClanMembershipResponse = 4161,
    AMProbeClanMembershipList = 4162,
    AMProbeClanMembershipListResponse = 4163,
    AMGetFriendsLobbies = 4165,
    AMGetFriendsLobbiesResponse = 4166,
    AMGetUserFriendNewsResponse = 4172,
    CommunityGetUserFriendNews = 4173,
    AMGetUserClansNewsResponse = 4174,
    AMGetUserClansNews = 4175,
    AMStoreInitPurchase = 4176, // obsolete
    AMStoreInitPurchaseResponse = 4177, // obsolete
    AMStoreGetFinalPrice = 4178, // obsolete
    AMStoreGetFinalPriceResponse = 4179, // obsolete
    AMStoreCompletePurchase = 4180, // obsolete
    AMStoreCancelPurchase = 4181, // obsolete
    AMStorePurchaseResponse = 4182, // obsolete
    AMCreateAccountRecordInSteam3 = 4183, // obsolete
    AMGetPreviousCBAccount = 4184,
    AMGetPreviousCBAccountResponse = 4185,
    AMUpdateBillingAddress = 4186, // obsolete
    AMUpdateBillingAddressResponse = 4187, // obsolete
    AMGetBillingAddress = 4188, // obsolete
    AMGetBillingAddressResponse = 4189, // obsolete
    AMGetUserLicenseHistory = 4190,
    AMGetUserLicenseHistoryResponse = 4191,
    AMSupportChangePassword = 4194,
    AMSupportChangeEmail = 4195,
    AMSupportChangeSecretQA = 4196, // obsolete
    AMResetUserVerificationGSByIP = 4197,
    AMUpdateGSPlayStats = 4198,
    AMSupportEnableOrDisable = 4199,
    AMGetComments = 4200, // obsolete
    AMGetCommentsResponse = 4201, // obsolete
    AMAddComment = 4202, // obsolete
    AMAddCommentResponse = 4203, // obsolete
    AMDeleteComment = 4204, // obsolete
    AMDeleteCommentResponse = 4205, // obsolete
    AMGetPurchaseStatus = 4206,
    AMSupportIsAccountEnabled = 4209,
    AMSupportIsAccountEnabledResponse = 4210,
    AMGetUserStats = 4211,
    AMSupportKickSession = 4212,
    AMGSSearch = 4213,
    MarketingMessageUpdate = 4216,
    AMRouteFriendMsg = 4219,
    AMTicketAuthRequestOrResponse = 4220,
    AMVerifyDepotManagementRights = 4222,
    AMVerifyDepotManagementRightsResponse = 4223,
    AMAddFreeLicense = 4224,
    AMGetUserFriendsMinutesPlayed = 4225, // obsolete
    AMGetUserFriendsMinutesPlayedResponse = 4226, // obsolete
    AMGetUserMinutesPlayed = 4227, // obsolete
    AMGetUserMinutesPlayedResponse = 4228, // obsolete
    AMValidateEmailLink = 4231,
    AMValidateEmailLinkResponse = 4232,
    AMAddUsersToMarketingTreatment = 4234, // obsolete
    AMStoreUserStats = 4236,
    AMGetUserGameplayInfo = 4237, // obsolete
    AMGetUserGameplayInfoResponse = 4238, // obsolete
    AMGetCardList = 4239, // obsolete
    AMGetCardListResponse = 4240, // obsolete
    AMDeleteStoredCard = 4241,
    AMRevokeLegacyGameKeys = 4242,
    AMGetWalletDetails = 4244,
    AMGetWalletDetailsResponse = 4245,
    AMDeleteStoredPaymentInfo = 4246,
    AMGetStoredPaymentSummary = 4247,
    AMGetStoredPaymentSummaryResponse = 4248,
    AMGetWalletConversionRate = 4249,
    AMGetWalletConversionRateResponse = 4250,
    AMConvertWallet = 4251,
    AMConvertWalletResponse = 4252,
    AMRelayGetFriendsWhoPlayGame = 4253, // obsolete
    AMRelayGetFriendsWhoPlayGameResponse = 4254, // obsolete
    AMSetPreApproval = 4255,
    AMSetPreApprovalResponse = 4256,
    AMMarketingTreatmentUpdate = 4257, // obsolete
    AMCreateRefund = 4258,
    AMCreateRefundResponse = 4259,
    AMCreateChargeback = 4260,
    AMCreateChargebackResponse = 4261,
    AMCreateDispute = 4262,
    AMCreateDisputeResponse = 4263,
    AMClearDispute = 4264,
    AMClearDisputeResponse = 4265,
    AMPlayerNicknameList = 4266,
    AMPlayerNicknameListResponse = 4267,
    AMSetDRMTestConfig = 4268,
    AMGetUserCurrentGameInfo = 4269,
    AMGetUserCurrentGameInfoResponse = 4270,
    AMGetGSPlayerList = 4271,
    AMGetGSPlayerListResponse = 4272,
    AMUpdatePersonaStateCache = 4275, // obsolete
    AMGetGameMembers = 4276,
    AMGetGameMembersResponse = 4277,
    AMGetSteamIDForMicroTxn = 4278,
    AMGetSteamIDForMicroTxnResponse = 4279,
    AMAddPublisherUser = 4280,
    AMRemovePublisherUser = 4281,
    AMGetUserLicenseList = 4282,
    AMGetUserLicenseListResponse = 4283,
    AMReloadGameGroupPolicy = 4284,
    AMAddFreeLicenseResponse = 4285,
    AMVACStatusUpdate = 4286,
    AMGetAccountDetails = 4287,
    AMGetAccountDetailsResponse = 4288,
    AMGetPlayerLinkDetails = 4289,
    AMGetPlayerLinkDetailsResponse = 4290,
    AMSubscribeToPersonaFeed = 4291, // obsolete
    AMGetUserVacBanList = 4292, // obsolete
    AMGetUserVacBanListResponse = 4293, // obsolete
    AMGetAccountFlagsForWGSpoofing = 4294,
    AMGetAccountFlagsForWGSpoofingResponse = 4295,
    AMGetFriendsWishlistInfo = 4296, // obsolete
    AMGetFriendsWishlistInfoResponse = 4297, // obsolete
    AMGetClanOfficers = 4298,
    AMGetClanOfficersResponse = 4299,
    AMNameChange = 4300,
    AMGetNameHistory = 4301,
    AMGetNameHistoryResponse = 4302,
    AMUpdateProviderStatus = 4305,
    AMClearPersonaMetadataBlob = 4306, // obsolete
    AMSupportRemoveAccountSecurity = 4307,
    AMIsAccountInCaptchaGracePeriod = 4308,
    AMIsAccountInCaptchaGracePeriodResponse = 4309,
    AMAccountPS3Unlink = 4310,
    AMAccountPS3UnlinkResponse = 4311,
    AMStoreUserStatsResponse = 4312,
    AMGetAccountPSNInfo = 4313,
    AMGetAccountPSNInfoResponse = 4314,
    AMAuthenticatedPlayerList = 4315,
    AMGetUserGifts = 4316,
    AMGetUserGiftsResponse = 4317,
    AMTransferLockedGifts = 4320,
    AMTransferLockedGiftsResponse = 4321,
    AMPlayerHostedOnGameServer = 4322,
    AMGetAccountBanInfo = 4323,
    AMGetAccountBanInfoResponse = 4324,
    AMRecordBanEnforcement = 4325,
    AMRollbackGiftTransfer = 4326,
    AMRollbackGiftTransferResponse = 4327,
    AMHandlePendingTransaction = 4328,
    AMRequestClanDetails = 4329,
    AMDeleteStoredPaypalAgreement = 4330,
    AMGameServerUpdate = 4331,
    AMGameServerRemove = 4332,
    AMGetPaypalAgreements = 4333,
    AMGetPaypalAgreementsResponse = 4334,
    AMGameServerPlayerCompatibilityCheck = 4335,
    AMGameServerPlayerCompatibilityCheckResponse = 4336,
    AMRenewLicense = 4337,
    AMGetAccountCommunityBanInfo = 4338,
    AMGetAccountCommunityBanInfoResponse = 4339,
    AMGameServerAccountChangePassword = 4340,
    AMGameServerAccountDeleteAccount = 4341,
    AMRenewAgreement = 4342,
    AMSendEmail = 4343, // obsolete
    AMXsollaPayment = 4344,
    AMXsollaPaymentResponse = 4345,
    AMAcctAllowedToPurchase = 4346,
    AMAcctAllowedToPurchaseResponse = 4347,
    AMSwapKioskDeposit = 4348,
    AMSwapKioskDepositResponse = 4349,
    AMSetUserGiftUnowned = 4350,
    AMSetUserGiftUnownedResponse = 4351,
    AMClaimUnownedUserGift = 4352,
    AMClaimUnownedUserGiftResponse = 4353,
    AMSetClanName = 4354,
    AMSetClanNameResponse = 4355,
    AMGrantCoupon = 4356,
    AMGrantCouponResponse = 4357,
    AMIsPackageRestrictedInUserCountry = 4358,
    AMIsPackageRestrictedInUserCountryResponse = 4359,
    AMHandlePendingTransactionResponse = 4360,
    AMGrantGuestPasses2 = 4361,
    AMGrantGuestPasses2Response = 4362,
    AMSessionQuery = 4363,
    AMSessionQueryResponse = 4364,
    AMGetPlayerBanDetails = 4365,
    AMGetPlayerBanDetailsResponse = 4366,
    AMFinalizePurchase = 4367,
    AMFinalizePurchaseResponse = 4368,
    AMPersonaChangeResponse = 4372,
    AMGetClanDetailsForForumCreation = 4373,
    AMGetClanDetailsForForumCreationResponse = 4374,
    AMGetPendingNotificationCount = 4375,
    AMGetPendingNotificationCountResponse = 4376,
    AMPasswordHashUpgrade = 4377,
    AMMoPayPayment = 4378,
    AMMoPayPaymentResponse = 4379,
    AMBoaCompraPayment = 4380,
    AMBoaCompraPaymentResponse = 4381,
    AMExpireCaptchaByGID = 4382,
    AMCompleteExternalPurchase = 4383,
    AMCompleteExternalPurchaseResponse = 4384,
    AMResolveNegativeWalletCredits = 4385,
    AMResolveNegativeWalletCreditsResponse = 4386,
    AMPayelpPayment = 4387,
    AMPayelpPaymentResponse = 4388,
    AMPlayerGetClanBasicDetails = 4389,
    AMPlayerGetClanBasicDetailsResponse = 4390,
    AMMOLPayment = 4391,
    AMMOLPaymentResponse = 4392,
    GetUserIPCountry = 4393,
    GetUserIPCountryResponse = 4394,
    NotificationOfSuspiciousActivity = 4395,
    AMDegicaPayment = 4396,
    AMDegicaPaymentResponse = 4397,
    AMEClubPayment = 4398,
    AMEClubPaymentResponse = 4399,
    AMPayPalPaymentsHubPayment = 4400,
    AMPayPalPaymentsHubPaymentResponse = 4401,
    AMTwoFactorRecoverAuthenticatorRequest = 4402,
    AMTwoFactorRecoverAuthenticatorResponse = 4403,
    AMSmart2PayPayment = 4404,
    AMSmart2PayPaymentResponse = 4405,
    AMValidatePasswordResetCodeAndSendSmsRequest = 4406,
    AMValidatePasswordResetCodeAndSendSmsResponse = 4407,
    AMGetAccountResetDetailsRequest = 4408,
    AMGetAccountResetDetailsResponse = 4409,
    AMBitPayPayment = 4410,
    AMBitPayPaymentResponse = 4411,
    AMSendAccountInfoUpdate = 4412,

    BasePSRange = 5000,
    PSCreateShoppingCart = 5001,
    PSCreateShoppingCartResponse = 5002,
    PSIsValidShoppingCart = 5003,
    PSIsValidShoppingCartResponse = 5004,
    PSAddPackageToShoppingCart = 5005,
    PSAddPackageToShoppingCartResponse = 5006,
    PSRemoveLineItemFromShoppingCart = 5007,
    PSRemoveLineItemFromShoppingCartResponse = 5008,
    PSGetShoppingCartContents = 5009,
    PSGetShoppingCartContentsResponse = 5010,
    PSAddWalletCreditToShoppingCart = 5011,
    PSAddWalletCreditToShoppingCartResponse = 5012,

    BaseUFSRange = 5200,
    ClientUFSUploadFileRequest = 5202,
    ClientUFSUploadFileResponse = 5203,
    ClientUFSUploadFileChunk = 5204,
    ClientUFSUploadFileFinished = 5205,
    ClientUFSGetFileListForApp = 5206,
    ClientUFSGetFileListForAppResponse = 5207,
    ClientUFSDownloadRequest = 5210,
    ClientUFSDownloadResponse = 5211,
    ClientUFSDownloadChunk = 5212,
    ClientUFSLoginRequest = 5213,
    ClientUFSLoginResponse = 5214,
    UFSReloadPartitionInfo = 5215,
    ClientUFSTransferHeartbeat = 5216,
    UFSSynchronizeFile = 5217,
    UFSSynchronizeFileResponse = 5218,
    ClientUFSDeleteFileRequest = 5219,
    ClientUFSDeleteFileResponse = 5220,
    UFSDownloadRequest = 5221, // obsolete
    UFSDownloadResponse = 5222, // obsolete
    UFSDownloadChunk = 5223, // obsolete
    ClientUFSGetUGCDetails = 5226,
    ClientUFSGetUGCDetailsResponse = 5227,
    UFSUpdateFileFlags = 5228,
    UFSUpdateFileFlagsResponse = 5229,
    ClientUFSGetSingleFileInfo = 5230,
    ClientUFSGetSingleFileInfoResponse = 5231,
    ClientUFSShareFile = 5232,
    ClientUFSShareFileResponse = 5233,
    UFSReloadAccount = 5234,
    UFSReloadAccountResponse = 5235,
    UFSUpdateRecordBatched = 5236,
    UFSUpdateRecordBatchedResponse = 5237,
    UFSMigrateFile = 5238,
    UFSMigrateFileResponse = 5239,
    UFSGetUGCURLs = 5240,
    UFSGetUGCURLsResponse = 5241,
    UFSHttpUploadFileFinishRequest = 5242,
    UFSHttpUploadFileFinishResponse = 5243,
    UFSDownloadStartRequest = 5244,
    UFSDownloadStartResponse = 5245,
    UFSDownloadChunkRequest = 5246,
    UFSDownloadChunkResponse = 5247,
    UFSDownloadFinishRequest = 5248,
    UFSDownloadFinishResponse = 5249,
    UFSFlushURLCache = 5250,
    UFSUploadCommit = 5251,
    UFSUploadCommitResponse = 5252,
    UFSMigrateFileAppID = 5253,
    UFSMigrateFileAppIDResponse = 5254,

    BaseClient2 = 5400,
    ClientRequestForgottenPasswordEmail = 5401,
    ClientRequestForgottenPasswordEmailResponse = 5402,
    ClientCreateAccountResponse = 5403,
    ClientResetForgottenPassword = 5404,
    ClientResetForgottenPasswordResponse = 5405,
    ClientCreateAccount2 = 5406,
    ClientInformOfResetForgottenPassword = 5407,
    ClientInformOfResetForgottenPasswordResponse = 5408,
    ClientAnonUserLogOn_Deprecated = 5409, // obsolete
    ClientGamesPlayedWithDataBlob = 5410,
    ClientUpdateUserGameInfo = 5411,
    ClientFileToDownload = 5412,
    ClientFileToDownloadResponse = 5413,
    ClientLBSSetScore = 5414,
    ClientLBSSetScoreResponse = 5415,
    ClientLBSFindOrCreateLB = 5416,
    ClientLBSFindOrCreateLBResponse = 5417,
    ClientLBSGetLBEntries = 5418,
    ClientLBSGetLBEntriesResponse = 5419,
    ClientMarketingMessageUpdate = 5420, // obsolete
    ClientChatDeclined = 5426,
    ClientFriendMsgIncoming = 5427,
    ClientAuthList_Deprecated = 5428, // obsolete
    ClientTicketAuthComplete = 5429,
    ClientIsLimitedAccount = 5430,
    ClientRequestAuthList = 5431,
    ClientAuthList = 5432,
    ClientStat = 5433,
    ClientP2PConnectionInfo = 5434,
    ClientP2PConnectionFailInfo = 5435,
    ClientGetNumberOfCurrentPlayers = 5436, // obsolete
    ClientGetNumberOfCurrentPlayersResponse = 5437, // obsolete
    ClientGetDepotDecryptionKey = 5438,
    ClientGetDepotDecryptionKeyResponse = 5439,
    GSPerformHardwareSurvey = 5440,
    ClientGetAppBetaPasswords = 5441, // obsolete
    ClientGetAppBetaPasswordsResponse = 5442, // obsolete
    ClientEnableTestLicense = 5443,
    ClientEnableTestLicenseResponse = 5444,
    ClientDisableTestLicense = 5445,
    ClientDisableTestLicenseResponse = 5446,
    ClientRequestValidationMail = 5448,
    ClientRequestValidationMailResponse = 5449,
    ClientCheckAppBetaPassword = 5450,
    ClientCheckAppBetaPasswordResponse = 5451,
    ClientToGC = 5452,
    ClientFromGC = 5453,
    ClientRequestChangeMail = 5454,
    ClientRequestChangeMailResponse = 5455,
    ClientEmailAddrInfo = 5456,
    ClientPasswordChange3 = 5457,
    ClientEmailChange3 = 5458,
    ClientPersonalQAChange3 = 5459,
    ClientResetForgottenPassword3 = 5460,
    ClientRequestForgottenPasswordEmail3 = 5461,
    ClientCreateAccount3 = 5462, // obsolete
    ClientNewLoginKey = 5463,
    ClientNewLoginKeyAccepted = 5464,
    ClientLogOnWithHash_Deprecated = 5465, // obsolete
    ClientStoreUserStats2 = 5466,
    ClientStatsUpdated = 5467,
    ClientActivateOEMLicense = 5468,
    ClientRegisterOEMMachine = 5469,
    ClientRegisterOEMMachineResponse = 5470,
    ClientRequestedClientStats = 5480,
    ClientStat2Int32 = 5481,
    ClientStat2 = 5482,
    ClientVerifyPassword = 5483,
    ClientVerifyPasswordResponse = 5484,
    ClientDRMDownloadRequest = 5485,
    ClientDRMDownloadResponse = 5486,
    ClientDRMFinalResult = 5487,
    ClientGetFriendsWhoPlayGame = 5488,
    ClientGetFriendsWhoPlayGameResponse = 5489,
    ClientOGSBeginSession = 5490,
    ClientOGSBeginSessionResponse = 5491,
    ClientOGSEndSession = 5492,
    ClientOGSEndSessionResponse = 5493,
    ClientOGSWriteRow = 5494,
    ClientDRMTest = 5495,
    ClientDRMTestResult = 5496,
    ClientServerUnavailable = 5500,
    ClientServersAvailable = 5501,
    ClientRegisterAuthTicketWithCM = 5502,
    ClientGCMsgFailed = 5503,
    ClientMicroTxnAuthRequest = 5504,
    ClientMicroTxnAuthorize = 5505,
    ClientMicroTxnAuthorizeResponse = 5506,
    ClientAppMinutesPlayedData = 5507,
    ClientGetMicroTxnInfo = 5508,
    ClientGetMicroTxnInfoResponse = 5509,
    ClientMarketingMessageUpdate2 = 5510,
    ClientDeregisterWithServer = 5511,
    ClientSubscribeToPersonaFeed = 5512,
    ClientLogon = 5514,
    ClientGetClientDetails = 5515,
    ClientGetClientDetailsResponse = 5516,
    ClientReportOverlayDetourFailure = 5517,
    ClientGetClientAppList = 5518,
    ClientGetClientAppListResponse = 5519,
    ClientInstallClientApp = 5520,
    ClientInstallClientAppResponse = 5521,
    ClientUninstallClientApp = 5522,
    ClientUninstallClientAppResponse = 5523,
    ClientSetClientAppUpdateState = 5524,
    ClientSetClientAppUpdateStateResponse = 5525,
    ClientRequestEncryptedAppTicket = 5526,
    ClientRequestEncryptedAppTicketResponse = 5527,
    ClientWalletInfoUpdate = 5528,
    ClientLBSSetUGC = 5529,
    ClientLBSSetUGCResponse = 5530,
    ClientAMGetClanOfficers = 5531,
    ClientAMGetClanOfficersResponse = 5532,
    ClientCheckFileSignature = 5533, // obsolete
    ClientCheckFileSignatureResponse = 5534, // obsolete
    ClientFriendProfileInfo = 5535,
    ClientFriendProfileInfoResponse = 5536,
    ClientUpdateMachineAuth = 5537,
    ClientUpdateMachineAuthResponse = 5538,
    ClientReadMachineAuth = 5539,
    ClientReadMachineAuthResponse = 5540,
    ClientRequestMachineAuth = 5541,
    ClientRequestMachineAuthResponse = 5542,
    ClientScreenshotsChanged = 5543,
    ClientEmailChange4 = 5544,
    ClientEmailChangeResponse4 = 5545,
    ClientGetCDNAuthToken = 5546,
    ClientGetCDNAuthTokenResponse = 5547,
    ClientDownloadRateStatistics = 5548,
    ClientRequestAccountData = 5549,
    ClientRequestAccountDataResponse = 5550,
    ClientResetForgottenPassword4 = 5551,
    ClientHideFriend = 5552,
    ClientFriendsGroupsList = 5553,
    ClientGetClanActivityCounts = 5554,
    ClientGetClanActivityCountsResponse = 5555,
    ClientOGSReportString = 5556,
    ClientOGSReportBug = 5557,
    ClientSentLogs = 5558,
    ClientLogonGameServer = 5559,
    AMClientCreateFriendsGroup = 5560,
    AMClientCreateFriendsGroupResponse = 5561,
    AMClientDeleteFriendsGroup = 5562,
    AMClientDeleteFriendsGroupResponse = 5563,
    AMClientRenameFriendsGroup = 5564,
    AMClientRenameFriendsGroupResponse = 5565,
    AMClientAddFriendToGroup = 5566,
    AMClientAddFriendToGroupResponse = 5567,
    AMClientRemoveFriendFromGroup = 5568,
    AMClientRemoveFriendFromGroupResponse = 5569,
    ClientAMGetPersonaNameHistory = 5570,
    ClientAMGetPersonaNameHistoryResponse = 5571,
    ClientRequestFreeLicense = 5572,
    ClientRequestFreeLicenseResponse = 5573,
    ClientDRMDownloadRequestWithCrashData = 5574,
    ClientAuthListAck = 5575,
    ClientItemAnnouncements = 5576,
    ClientRequestItemAnnouncements = 5577,
    ClientFriendMsgEchoToSender = 5578,
    ClientChangeSteamGuardOptions = 5579, // obsolete
    ClientChangeSteamGuardOptionsResponse = 5580, // obsolete
    ClientOGSGameServerPingSample = 5581,
    ClientCommentNotifications = 5582,
    ClientRequestCommentNotifications = 5583,
    ClientPersonaChangeResponse = 5584,
    ClientRequestWebAPIAuthenticateUserNonce = 5585,
    ClientRequestWebAPIAuthenticateUserNonceResponse = 5586,
    ClientPlayerNicknameList = 5587,
    AMClientSetPlayerNickname = 5588,
    AMClientSetPlayerNicknameResponse = 5589,
    ClientRequestOAuthTokenForApp = 5590, // obsolete
    ClientRequestOAuthTokenForAppResponse = 5591, // obsolete
    ClientCreateAccountProto = 5590,
    ClientCreateAccountProtoResponse = 5591,
    ClientGetNumberOfCurrentPlayersDP = 5592,
    ClientGetNumberOfCurrentPlayersDPResponse = 5593,
    ClientServiceMethod = 5594,
    ClientServiceMethodResponse = 5595,
    ClientFriendUserStatusPublished = 5596,
    ClientCurrentUIMode = 5597,
    ClientVanityURLChangedNotification = 5598,
    ClientUserNotifications = 5599,

    BaseDFS = 5600,
    DFSGetFile = 5601,
    DFSInstallLocalFile = 5602,
    DFSConnection = 5603,
    DFSConnectionReply = 5604,
    ClientDFSAuthenticateRequest = 5605,
    ClientDFSAuthenticateResponse = 5606,
    ClientDFSEndSession = 5607,
    DFSPurgeFile = 5608,
    DFSRouteFile = 5609,
    DFSGetFileFromServer = 5610,
    DFSAcceptedResponse = 5611,
    DFSRequestPingback = 5612,
    DFSRecvTransmitFile = 5613,
    DFSSendTransmitFile = 5614,
    DFSRequestPingback2 = 5615,
    DFSResponsePingback2 = 5616,
    ClientDFSDownloadStatus = 5617,
    DFSStartTransfer = 5618,
    DFSTransferComplete = 5619,
    DFSRouteFileResponse = 5620,

    BaseMDS = 5800,
    ClientMDSLoginRequest = 5801, // obsolete
    ClientMDSLoginResponse = 5802, // obsolete
    ClientMDSUploadManifestRequest = 5803, // obsolete
    ClientMDSUploadManifestResponse = 5804, // obsolete
    ClientMDSTransmitManifestDataChunk = 5805, // obsolete
    ClientMDSHeartbeat = 5806, // obsolete
    ClientMDSUploadDepotChunks = 5807, // obsolete
    ClientMDSUploadDepotChunksResponse = 5808, // obsolete
    ClientMDSInitDepotBuildRequest = 5809, // obsolete
    ClientMDSInitDepotBuildResponse = 5810, // obsolete
    AMToMDSGetDepotDecryptionKey = 5812,
    MDSToAMGetDepotDecryptionKeyResponse = 5813,
    MDSGetVersionsForDepot = 5814, // obsolete
    MDSGetVersionsForDepotResponse = 5815, // obsolete
    MDSSetPublicVersionForDepot = 5816, // obsolete
    MDSSetPublicVersionForDepotResponse = 5817, // obsolete
    ClientMDSInitWorkshopBuildRequest = 5816, // obsolete
    ClientMDSInitWorkshopBuildResponse = 5817, // obsolete
    ClientMDSGetDepotManifest = 5818, // obsolete
    ClientMDSGetDepotManifestResponse = 5819, // obsolete
    ClientMDSGetDepotManifestChunk = 5820, // obsolete
    ClientMDSUploadRateTest = 5823, // obsolete
    ClientMDSUploadRateTestResponse = 5824, // obsolete
    MDSDownloadDepotChunksAck = 5825, // obsolete
    MDSContentServerStatsBroadcast = 5826, // obsolete
    MDSContentServerConfigRequest = 5827,
    MDSContentServerConfig = 5828,
    MDSGetDepotManifest = 5829,
    MDSGetDepotManifestResponse = 5830,
    MDSGetDepotManifestChunk = 5831,
    MDSGetDepotChunk = 5832,
    MDSGetDepotChunkResponse = 5833,
    MDSGetDepotChunkChunk = 5834,
    MDSUpdateContentServerConfig = 5835, // obsolete
    MDSGetServerListForUser = 5836,
    MDSGetServerListForUserResponse = 5837,
    ClientMDSRegisterAppBuild = 5838, // obsolete
    ClientMDSRegisterAppBuildResponse = 5839, // obsolete
    ClientMDSSetAppBuildLive = 5840, // obsolete
    ClientMDSSetAppBuildLiveResponse = 5841, // obsolete
    ClientMDSGetPrevDepotBuild = 5842, // obsolete
    ClientMDSGetPrevDepotBuildResponse = 5843, // obsolete
    MDSToCSFlushChunk = 5844,
    ClientMDSSignInstallScript = 5845, // obsolete
    ClientMDSSignInstallScriptResponse = 5846, // obsolete
    MDSMigrateChunk = 5847,
    MDSMigrateChunkResponse = 5848,

    CSBase = 6200,
    CSPing = 6201,
    CSPingResponse = 6202,

    GMSBase = 6400,
    GMSGameServerReplicate = 6401,
    ClientGMSServerQuery = 6403,
    GMSClientServerQueryResponse = 6404,
    AMGMSGameServerUpdate = 6405,
    AMGMSGameServerRemove = 6406,
    GameServerOutOfDate = 6407,

    DeviceAuthorizationBase = 6500,
    ClientAuthorizeLocalDeviceRequest = 6501,
    ClientAuthorizeLocalDevice = 6502, // obsolete
    ClientAuthorizeLocalDeviceResponse = 6502,
    ClientDeauthorizeDeviceRequest = 6503,
    ClientDeauthorizeDevice = 6504,
    ClientUseLocalDeviceAuthorizations = 6505,
    ClientGetAuthorizedDevices = 6506,
    ClientGetAuthorizedDevicesResponse = 6507,
    AMNotifySessionDeviceAuthorized = 6508,
    ClientAuthorizeLocalDeviceNotification = 6509,

    MMSBase = 6600,
    ClientMMSCreateLobby = 6601,
    ClientMMSCreateLobbyResponse = 6602,
    ClientMMSJoinLobby = 6603,
    ClientMMSJoinLobbyResponse = 6604,
    ClientMMSLeaveLobby = 6605,
    ClientMMSLeaveLobbyResponse = 6606,
    ClientMMSGetLobbyList = 6607,
    ClientMMSGetLobbyListResponse = 6608,
    ClientMMSSetLobbyData = 6609,
    ClientMMSSetLobbyDataResponse = 6610,
    ClientMMSGetLobbyData = 6611,
    ClientMMSLobbyData = 6612,
    ClientMMSSendLobbyChatMsg = 6613,
    ClientMMSLobbyChatMsg = 6614,
    ClientMMSSetLobbyOwner = 6615,
    ClientMMSSetLobbyOwnerResponse = 6616,
    ClientMMSSetLobbyGameServer = 6617,
    ClientMMSLobbyGameServerSet = 6618,
    ClientMMSUserJoinedLobby = 6619,
    ClientMMSUserLeftLobby = 6620,
    ClientMMSInviteToLobby = 6621,
    ClientMMSFlushFrenemyListCache = 6622,
    ClientMMSFlushFrenemyListCacheResponse = 6623,
    ClientMMSSetLobbyLinked = 6624,

    NonStdMsgBase = 6800,
    NonStdMsgMemcached = 6801,
    NonStdMsgHTTPServer = 6802,
    NonStdMsgHTTPClient = 6803,
    NonStdMsgWGResponse = 6804,
    NonStdMsgPHPSimulator = 6805,
    NonStdMsgChase = 6806,
    NonStdMsgDFSTransfer = 6807,
    NonStdMsgTests = 6808,
    NonStdMsgUMQpipeAAPL = 6809,
    NonStdMsgSyslog = 6810, // obsolete
    NonStdMsgLogsink = 6811,
    NonStdMsgSteam2Emulator = 6812,
    NonStdMsgRTMPServer = 6813,

    UDSBase = 7000,
    ClientUDSP2PSessionStarted = 7001,
    ClientUDSP2PSessionEnded = 7002,
    UDSRenderUserAuth = 7003,
    UDSRenderUserAuthResponse = 7004,
    ClientUDSInviteToGame = 7005,
    UDSFindSession = 7006, // obsolete "renamed to UDSHasSession"
    UDSHasSession = 7006,
    UDSFindSessionResponse = 7007, // obsolete "renamed to UDSHasSessionResponse"
    UDSHasSessionResponse = 7007,

    MPASBase = 7100,
    MPASVacBanReset = 7101,

    KGSBase = 7200,
    KGSAllocateKeyRange = 7201, // obsolete
    KGSAllocateKeyRangeResponse = 7202, // obsolete
    KGSGenerateKeys = 7203, // obsolete
    KGSGenerateKeysResponse = 7204, // obsolete
    KGSRemapKeys = 7205, // obsolete
    KGSRemapKeysResponse = 7206, // obsolete
    KGSGenerateGameStopWCKeys = 7207, // obsolete
    KGSGenerateGameStopWCKeysResponse = 7208, // obsolete

    UCMBase = 7300,
    ClientUCMAddScreenshot = 7301,
    ClientUCMAddScreenshotResponse = 7302,
    UCMValidateObjectExists = 7303, // obsolete
    UCMValidateObjectExistsResponse = 7304, // obsolete
    UCMResetCommunityContent = 7307,
    UCMResetCommunityContentResponse = 7308,
    ClientUCMDeleteScreenshot = 7309,
    ClientUCMDeleteScreenshotResponse = 7310,
    ClientUCMPublishFile = 7311,
    ClientUCMPublishFileResponse = 7312,
    ClientUCMGetPublishedFileDetails = 7313, // obsolete
    ClientUCMGetPublishedFileDetailsResponse = 7314, // obsolete
    ClientUCMDeletePublishedFile = 7315,
    ClientUCMDeletePublishedFileResponse = 7316,
    ClientUCMEnumerateUserPublishedFiles = 7317,
    ClientUCMEnumerateUserPublishedFilesResponse = 7318,
    ClientUCMSubscribePublishedFile = 7319, // obsolete
    ClientUCMSubscribePublishedFileResponse = 7320, // obsolete
    ClientUCMEnumerateUserSubscribedFiles = 7321,
    ClientUCMEnumerateUserSubscribedFilesResponse = 7322,
    ClientUCMUnsubscribePublishedFile = 7323, // obsolete
    ClientUCMUnsubscribePublishedFileResponse = 7324, // obsolete
    ClientUCMUpdatePublishedFile = 7325,
    ClientUCMUpdatePublishedFileResponse = 7326,
    UCMUpdatePublishedFile = 7327,
    UCMUpdatePublishedFileResponse = 7328,
    UCMDeletePublishedFile = 7329,
    UCMDeletePublishedFileResponse = 7330,
    UCMUpdatePublishedFileStat = 7331,
    UCMUpdatePublishedFileBan = 7332,
    UCMUpdatePublishedFileBanResponse = 7333,
    UCMUpdateTaggedScreenshot = 7334, // obsolete
    UCMAddTaggedScreenshot = 7335, // obsolete
    UCMRemoveTaggedScreenshot = 7336, // obsolete
    UCMReloadPublishedFile = 7337,
    UCMReloadUserFileListCaches = 7338,
    UCMPublishedFileReported = 7339,
    UCMUpdatePublishedFileIncompatibleStatus = 7340,
    UCMPublishedFilePreviewAdd = 7341,
    UCMPublishedFilePreviewAddResponse = 7342,
    UCMPublishedFilePreviewRemove = 7343,
    UCMPublishedFilePreviewRemoveResponse = 7344,
    UCMPublishedFilePreviewChangeSortOrder = 7345, // obsolete
    UCMPublishedFilePreviewChangeSortOrderResponse = 7346, // obsolete
    ClientUCMPublishedFileSubscribed = 7347,
    ClientUCMPublishedFileUnsubscribed = 7348,
    UCMPublishedFileSubscribed = 7349,
    UCMPublishedFileUnsubscribed = 7350,
    UCMPublishFile = 7351,
    UCMPublishFileResponse = 7352,
    UCMPublishedFileChildAdd = 7353,
    UCMPublishedFileChildAddResponse = 7354,
    UCMPublishedFileChildRemove = 7355,
    UCMPublishedFileChildRemoveResponse = 7356,
    UCMPublishedFileChildChangeSortOrder = 7357, // obsolete
    UCMPublishedFileChildChangeSortOrderResponse = 7358, // obsolete
    UCMPublishedFileParentChanged = 7359,
    ClientUCMGetPublishedFilesForUser = 7360,
    ClientUCMGetPublishedFilesForUserResponse = 7361,
    UCMGetPublishedFilesForUser = 7362, // obsolete
    UCMGetPublishedFilesForUserResponse = 7363, // obsolete
    ClientUCMSetUserPublishedFileAction = 7364,
    ClientUCMSetUserPublishedFileActionResponse = 7365,
    ClientUCMEnumeratePublishedFilesByUserAction = 7366,
    ClientUCMEnumeratePublishedFilesByUserActionResponse = 7367,
    ClientUCMPublishedFileDeleted = 7368,
    UCMGetUserSubscribedFiles = 7369,
    UCMGetUserSubscribedFilesResponse = 7370,
    UCMFixStatsPublishedFile = 7371,
    UCMDeleteOldScreenshot = 7372, // obsolete
    UCMDeleteOldScreenshotResponse = 7373, // obsolete
    UCMDeleteOldVideo = 7374, // obsolete
    UCMDeleteOldVideoResponse = 7375, // obsolete
    UCMUpdateOldScreenshotPrivacy = 7376, // obsolete
    UCMUpdateOldScreenshotPrivacyResponse = 7377, // obsolete
    ClientUCMEnumerateUserSubscribedFilesWithUpdates = 7378,
    ClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse = 7379,
    UCMPublishedFileContentUpdated = 7380,
    UCMPublishedFileUpdated = 7381,
    ClientWorkshopItemChangesRequest = 7382,
    ClientWorkshopItemChangesResponse = 7383,
    ClientWorkshopItemInfoRequest = 7384,
    ClientWorkshopItemInfoResponse = 7385,

    FSBase = 7500,
    ClientRichPresenceUpload = 7501,
    ClientRichPresenceRequest = 7502,
    ClientRichPresenceInfo = 7503,
    FSRichPresenceRequest = 7504,
    FSRichPresenceResponse = 7505,
    FSComputeFrenematrix = 7506,
    FSComputeFrenematrixResponse = 7507,
    FSPlayStatusNotification = 7508,
    FSPublishPersonaStatus = 7509,
    FSAddOrRemoveFollower = 7510,
    FSAddOrRemoveFollowerResponse = 7511,
    FSUpdateFollowingList = 7512,
    FSCommentNotification = 7513,
    FSCommentNotificationViewed = 7514,
    ClientFSGetFollowerCount = 7515,
    ClientFSGetFollowerCountResponse = 7516,
    ClientFSGetIsFollowing = 7517,
    ClientFSGetIsFollowingResponse = 7518,
    ClientFSEnumerateFollowingList = 7519,
    ClientFSEnumerateFollowingListResponse = 7520,
    FSGetPendingNotificationCount = 7521,
    FSGetPendingNotificationCountResponse = 7522,
    ClientFSOfflineMessageNotification = 7523,
    ClientFSRequestOfflineMessageCount = 7524,
    ClientFSGetFriendMessageHistory = 7525,
    ClientFSGetFriendMessageHistoryResponse = 7526,
    ClientFSGetFriendMessageHistoryForOfflineMessages = 7527,
    ClientFSGetFriendsSteamLevels = 7528,
    ClientFSGetFriendsSteamLevelsResponse = 7529,
    FSRequestFriendData = 7530,

    DRMRange2 = 7600,
    CEGVersionSetEnableDisableRequest = 7600,
    CEGVersionSetEnableDisableResponse = 7601,
    CEGPropStatusDRMSRequest = 7602,
    CEGPropStatusDRMSResponse = 7603,
    CEGWhackFailureReportRequest = 7604,
    CEGWhackFailureReportResponse = 7605,
    DRMSFetchVersionSet = 7606,
    DRMSFetchVersionSetResponse = 7607,

    EconBase = 7700,
    EconTrading_InitiateTradeRequest = 7701,
    EconTrading_InitiateTradeProposed = 7702,
    EconTrading_InitiateTradeResponse = 7703,
    EconTrading_InitiateTradeResult = 7704,
    EconTrading_StartSession = 7705,
    EconTrading_CancelTradeRequest = 7706,
    EconFlushInventoryCache = 7707,
    EconFlushInventoryCacheResponse = 7708,
    EconCDKeyProcessTransaction = 7711,
    EconCDKeyProcessTransactionResponse = 7712,
    EconGetErrorLogs = 7713,
    EconGetErrorLogsResponse = 7714,

    RMRange = 7800,
    RMTestVerisignOTP = 7800,
    RMTestVerisignOTPResponse = 7801,
    RMDeleteMemcachedKeys = 7803,
    RMRemoteInvoke = 7804,
    BadLoginIPList = 7805,
    RMMsgTraceAddTrigger = 7806,
    RMMsgTraceRemoveTrigger = 7807,
    RMMsgTraceEvent = 7808,

    UGSBase = 7900,
    UGSUpdateGlobalStats = 7900,
    ClientUGSGetGlobalStats = 7901,
    ClientUGSGetGlobalStatsResponse = 7902,

    StoreBase = 8000,
    StoreUpdateRecommendationCount = 8000, // obsolete

    UMQBase = 8100,
    UMQLogonRequest = 8100,
    UMQLogonResponse = 8101,
    UMQLogoffRequest = 8102,
    UMQLogoffResponse = 8103,
    UMQSendChatMessage = 8104,
    UMQIncomingChatMessage = 8105,
    UMQPoll = 8106,
    UMQPollResults = 8107,
    UMQ2AM_ClientMsgBatch = 8108,
    UMQEnqueueMobileSalePromotions = 8109, // obsolete
    UMQEnqueueMobileAnnouncements = 8110, // obsolete

    WorkshopBase = 8200,
    WorkshopAcceptTOSRequest = 8200, // obsolete
    WorkshopAcceptTOSResponse = 8201, // obsolete

    WebAPIBase = 8300,
    WebAPIValidateOAuth2Token = 8300,
    WebAPIValidateOAuth2TokenResponse = 8301,
    WebAPIInvalidateTokensForAccount = 8302, // obsolete
    WebAPIRegisterGCInterfaces = 8303,
    WebAPIInvalidateOAuthClientCache = 8304,
    WebAPIInvalidateOAuthTokenCache = 8305,
    WebAPISetSecrets = 8306,

    BackpackBase = 8400,
    BackpackAddToCurrency = 8401,
    BackpackAddToCurrencyResponse = 8402,

    CREBase = 8500,
    CRERankByTrend = 8501, // obsolete
    CRERankByTrendResponse = 8502, // obsolete
    CREItemVoteSummary = 8503,
    CREItemVoteSummaryResponse = 8504,
    CRERankByVote = 8505, // obsolete
    CRERankByVoteResponse = 8506, // obsolete
    CREUpdateUserPublishedItemVote = 8507,
    CREUpdateUserPublishedItemVoteResponse = 8508,
    CREGetUserPublishedItemVoteDetails = 8509,
    CREGetUserPublishedItemVoteDetailsResponse = 8510,
    CREEnumeratePublishedFiles = 8511,
    CREEnumeratePublishedFilesResponse = 8512,
    CREPublishedFileVoteAdded = 8513,

    SecretsBase = 8600,
    SecretsRequestCredentialPair = 8600,
    SecretsCredentialPairResponse = 8601,
    SecretsRequestServerIdentity = 8602, // obsolete
    SecretsServerIdentityResponse = 8603, // obsolete
    SecretsUpdateServerIdentities = 8604, // obsolete

    BoxMonitorBase = 8700,
    BoxMonitorReportRequest = 8700,
    BoxMonitorReportResponse = 8701,

    LogsinkBase = 8800,
    LogsinkWriteReport = 8800,

    PICSBase = 8900,
    ClientPICSChangesSinceRequest = 8901,
    ClientPICSChangesSinceResponse = 8902,
    ClientPICSProductInfoRequest = 8903,
    ClientPICSProductInfoResponse = 8904,
    ClientPICSAccessTokenRequest = 8905,
    ClientPICSAccessTokenResponse = 8906,

    WorkerProcess = 9000,
    WorkerProcessPingRequest = 9000,
    WorkerProcessPingResponse = 9001,
    WorkerProcessShutdown = 9002,

    DRMWorkerProcess = 9100,
    DRMWorkerProcessDRMAndSign = 9100,
    DRMWorkerProcessDRMAndSignResponse = 9101,
    DRMWorkerProcessSteamworksInfoRequest = 9102,
    DRMWorkerProcessSteamworksInfoResponse = 9103,
    DRMWorkerProcessInstallDRMDLLRequest = 9104,
    DRMWorkerProcessInstallDRMDLLResponse = 9105,
    DRMWorkerProcessSecretIdStringRequest = 9106,
    DRMWorkerProcessSecretIdStringResponse = 9107,
    DRMWorkerProcessGetDRMGuidsFromFileRequest = 9108, // obsolete
    DRMWorkerProcessGetDRMGuidsFromFileResponse = 9109, // obsolete
    DRMWorkerProcessInstallProcessedFilesRequest = 9110,
    DRMWorkerProcessInstallProcessedFilesResponse = 9111,
    DRMWorkerProcessExamineBlobRequest = 9112,
    DRMWorkerProcessExamineBlobResponse = 9113,
    DRMWorkerProcessDescribeSecretRequest = 9114,
    DRMWorkerProcessDescribeSecretResponse = 9115,
    DRMWorkerProcessBackfillOriginalRequest = 9116,
    DRMWorkerProcessBackfillOriginalResponse = 9117,
    DRMWorkerProcessValidateDRMDLLRequest = 9118,
    DRMWorkerProcessValidateDRMDLLResponse = 9119,
    DRMWorkerProcessValidateFileRequest = 9120,
    DRMWorkerProcessValidateFileResponse = 9121,
    DRMWorkerProcessSplitAndInstallRequest = 9122,
    DRMWorkerProcessSplitAndInstallResponse = 9123,
    DRMWorkerProcessGetBlobRequest = 9124,
    DRMWorkerProcessGetBlobResponse = 9125,
    DRMWorkerProcessEvaluateCrashRequest = 9126,
    DRMWorkerProcessEvaluateCrashResponse = 9127,
    DRMWorkerProcessAnalyzeFileRequest = 9128,
    DRMWorkerProcessAnalyzeFileResponse = 9129,
    DRMWorkerProcessUnpackBlobRequest = 9130,
    DRMWorkerProcessUnpackBlobResponse = 9131,
    DRMWorkerProcessInstallAllRequest = 9132,
    DRMWorkerProcessInstallAllResponse = 9133,

    TestWorkerProcess = 9200,
    TestWorkerProcessLoadUnloadModuleRequest = 9200,
    TestWorkerProcessLoadUnloadModuleResponse = 9201,
    TestWorkerProcessServiceModuleCallRequest = 9202,
    TestWorkerProcessServiceModuleCallResponse = 9203,

    QuestServerBase = 9300,

    ClientGetEmoticonList = 9330,
    ClientEmoticonList = 9331,

    ClientSharedLibraryBase = 9400, // obsolete "renamed to SLCBase"
    SLCBase = 9400,
    SLCUserSessionStatus = 9400,
    SLCRequestUserSessionStatus = 9401,
    SLCSharedLicensesLockStatus = 9402,
    ClientSharedLicensesLockStatus = 9403, // obsolete
    ClientSharedLicensesStopPlaying = 9404, // obsolete
    ClientSharedLibraryLockStatus = 9405,
    ClientSharedLibraryStopPlaying = 9406,
    SLCOwnerLibraryChanged = 9407,
    SLCSharedLibraryChanged = 9408,

    RemoteClientBase = 9500,
    RemoteClientAuth = 9500,
    RemoteClientAuthResponse = 9501,
    RemoteClientAppStatus = 9502,
    RemoteClientStartStream = 9503,
    RemoteClientStartStreamResponse = 9504,
    RemoteClientPing = 9505,
    RemoteClientPingResponse = 9506,
    ClientUnlockStreaming = 9507,
    ClientUnlockStreamingResponse = 9508,
    RemoteClientAcceptEULA = 9509,
    RemoteClientGetControllerConfig = 9510,
    RemoteClientGetControllerConfigResposne = 9511,
    RemoteClientStreamingEnabled = 9512,

    ClientConcurrentSessionsBase = 9600,
    ClientPlayingSessionState = 9600,
    ClientKickPlayingSession = 9601,

    ClientBroadcastBase = 9700,
    ClientBroadcastInit = 9700,
    ClientBroadcastFrames = 9701,
    ClientBroadcastDisconnect = 9702,
    ClientBroadcastScreenshot = 9703,
    ClientBroadcastUploadConfig = 9704,

    BaseClient3 = 9800,
    ClientVoiceCallPreAuthorize = 9800,
    ClientVoiceCallPreAuthorizeResponse = 9801,
}

export enum EUniverse {
    Invalid = 0,

    Public = 1,
    Beta = 2,
    Internal = 3,
    Dev = 4,

    Max = 5,
}

export enum EChatEntryType {
    Invalid = 0,

    ChatMsg = 1,
    Typing = 2,
    InviteGame = 3,
    Emote = 4, // removed "No longer supported by clients"
    LobbyGameStart = 5, // removed "Listen for LobbyGameCreated_t callback instead"
    LeftConversation = 6,
    Entered = 7,
    WasKicked = 8,
    WasBanned = 9,
    Disconnected = 10,
    HistoricalChat = 11,
    Reserved1 = 12,
    Reserved2 = 13,
    LinkBlocked = 14,
}

export enum EPersonaState {
    Offline = 0,

    Online = 1,
    Busy = 2,
    Away = 3,
    Snooze = 4,
    LookingToTrade = 5,
    LookingToPlay = 6,

    Max = 7,
}

export enum EAccountType {
    Invalid = 0,

    Individual = 1,
    Multiseat = 2,
    GameServer = 3,
    AnonGameServer = 4,
    Pending = 5,
    ContentServer = 6,
    Clan = 7,
    Chat = 8,
    ConsoleUser = 9,
    AnonUser = 10,

    Max = 11,
}

export enum EFriendRelationship {
    None = 0,

    Blocked = 1,
    RequestRecipient = 2,
    Friend = 3,
    RequestInitiator = 4,
    Ignored = 5,
    IgnoredFriend = 6,
    SuggestedFriend = 7,

    Max = 8,
}

export enum EAccountFlags {
    NormalUser = 0,

    PersonaNameSet = 1,
    Unbannable = 2,
    PasswordSet = 4,
    Support = 8,
    Admin = 16,
    Supervisor = 32,
    AppEditor = 64,
    HWIDSet = 128,
    PersonalQASet = 256,
    VacBeta = 512,
    Debug = 1024,
    Disabled = 2048,
    LimitedUser = 4096,
    LimitedUserForce = 8192,
    EmailValidated = 16384,
    MarketingTreatment = 32768,
    OGGInviteOptOut = 65536,
    ForcePasswordChange = 131072,
    ForceEmailVerification = 262144,
    LogonExtraSecurity = 524288,
    LogonExtraSecurityDisabled = 1048576,
    Steam2MigrationComplete = 2097152,
    NeedLogs = 4194304,
    Lockdown = 8388608,
    MasterAppEditor = 16777216,
    BannedFromWebAPI = 33554432,
    ClansOnlyFromFriends = 67108864,
    GlobalModerator = 134217728,
    ParentalSettings = 268435456,
    ThirdPartySupport = 536870912,
    NeedsSSANextSteamLogon = 1073741824,
}

export enum EClanPermission {
    Nobody = 0,

    Owner = 1,
    Officer = 2,
    OwnerAndOfficer = 3,
    Member = 4,
    Moderator = 8,

    OwnerOfficerModerator = Owner | Officer | Moderator, // 11
    AllMembers = Owner | Officer | Moderator | Member, // 15

    OGGGameOwner = 16,

    NonMember = 128,

    MemberAllowed = NonMember | Member, // 132
    ModeratorAllowed = NonMember | Member | Moderator, // 140
    OfficerAllowed = NonMember | Member | Moderator | Officer, // 142
    OwnerAllowed = NonMember | Member | Moderator | Officer | Owner, // 143
    Anybody = NonMember | Member | Moderator | Officer | Owner, // 143
}

export enum EChatPermission {
    Close = 1,
    Invite = 2,
    Talk = 8,
    Kick = 16,
    Mute = 32,
    SetMetadata = 64,
    ChangePermissions = 128,
    Ban = 256,
    ChangeAccess = 512,

    EveryoneNotInClanDefault = Talk, // 8
    EveryoneDefault = Talk | Invite, // 10

    // todo: this doesn't seem correct...
    MemberDefault = Ban | Kick | Talk | Invite, // 282

    OfficerDefault = Ban | Kick | Talk | Invite, // 282
    OwnerDefault = ChangeAccess | Ban | SetMetadata | Mute | Kick | Talk | Invite | Close, // 891

    Mask = 1019,
}

export enum EFriendFlags {
    None = 0,
    Blocked = 1,
    FriendshipRequested = 2,
    Immediate = 4,
    ClanMember = 8,
    OnGameServer = 16,
    RequestingFriendship = 128,
    RequestingInfo = 256,
    Ignored = 512,
    IgnoredFriend = 1024,
    Suggested = 2048,
    ChatMember = 4096,

    FlagAll = 65535,
}

export enum EPersonaStateFlag {
    HasRichPresence = 1,
    InJoinableGame = 2,
    Golden = 4, // removed "no longer has any effect"

    OnlineUsingWeb = 256, // removed "renamed to ClientTypeWeb"
    ClientTypeWeb = 256,
    OnlineUsingMobile = 512, // removed "renamed to ClientTypeMobile"
    ClientTypeMobile = 512,
    OnlineUsingBigPicture = 1024, // removed "renamed to ClientTypeTenfoot"
    ClientTypeTenfoot = 1024,
    OnlineUsingVR = 2048, // removed "renamed to ClientTypeVR"
    ClientTypeVR = 2048,
    LaunchTypeGamepad = 4096,
}

export enum EClientPersonaStateFlag {
    Status = 1,
    PlayerName = 2,
    QueryPort = 4,
    SourceID = 8,
    Presence = 16,
    Metadata = 32, // removed
    LastSeen = 64,
    ClanInfo = 128,
    GameExtraInfo = 256,
    GameDataBlob = 512,
    ClanTag = 1024,
    Facebook = 2048,
}

export enum EAppUsageEvent {
    GameLaunch = 1,
    GameLaunchTrial = 2,
    Media = 3,
    PreloadStart = 4,
    PreloadFinish = 5,
    MarketingMessageView = 6,
    InGameAdViewed = 7,
    GameLaunchFreeWeekend = 8,
}

export enum ELicenseFlags {
    None = 0,
    Renew = 0x01,
    RenewalFailed = 0x02,
    Pending = 0x04,
    Expired = 0x08,
    CancelledByUser = 0x10,
    CancelledByAdmin = 0x20,
    LowViolenceContent = 0x40,
    ImportedFromSteam2 = 0x80,
    ForceRunRestriction = 0x100,
    RegionRestrictionExpired = 0x200,
    CancelledByFriendlyFraudLock = 0x400,
    NotActivated = 0x800,
}

export enum ELicenseType {
    NoLicense = 0,
    SinglePurchase = 1,
    SinglePurchaseLimitedUse = 2,
    RecurringCharge = 3,
    RecurringChargeLimitedUse = 4,
    RecurringChargeLimitedUseWithOverages = 5,
    RecurringOption = 6,
    LimitedUseDelayedActivation = 7,
}

export enum EPaymentMethod {
    None = 0,
    ActivationCode = 1,
    CreditCard = 2,
    Giropay = 3,
    PayPal = 4,
    Ideal = 5,
    PaySafeCard = 6,
    Sofort = 7,
    GuestPass = 8,
    WebMoney = 9,
    MoneyBookers = 10,
    AliPay = 11,
    Yandex = 12,
    Kiosk = 13,
    Qiwi = 14,
    GameStop = 15,
    HardwarePromo = 16,
    MoPay = 17,
    BoletoBancario = 18,
    BoaCompraGold = 19,
    BancoDoBrasilOnline = 20,
    ItauOnline = 21,
    BradescoOnline = 22,
    Pagseguro = 23,
    VisaBrazil = 24,
    AmexBrazil = 25,
    Aura = 26,
    Hipercard = 27,
    MastercardBrazil = 28,
    DinersCardBrazil = 29,
    AuthorizedDevice = 30,
    MOLPoints = 31,
    ClickAndBuy = 32,
    Beeline = 33,
    Konbini = 34,
    EClubPoints = 35,
    CreditCardJapan = 36,
    BankTransferJapan = 37,
    PayEasyJapan = 38, // removed "renamed to PayEasy"
    PayEasy = 38,
    Zong = 39,
    CultureVoucher = 40,
    BookVoucher = 41,
    HappymoneyVoucher = 42,
    ConvenientStoreVoucher = 43,
    GameVoucher = 44,
    Multibanco = 45,
    Payshop = 46,
    Maestro = 47, // removed "renamed to MaestroBoaCompra"
    MaestroBoaCompra = 47,
    OXXO = 48,
    ToditoCash = 49,
    Carnet = 50,
    SPEI = 51,
    ThreePay = 52,
    IsBank = 53,
    Garanti = 54,
    Akbank = 55,
    YapiKredi = 56,
    Halkbank = 57,
    BankAsya = 58,
    Finansbank = 59,
    DenizBank = 60,
    PTT = 61,
    CashU = 62,
    AutoGrant = 64,
    WebMoneyJapan = 65,
    OneCard = 66,
    PSE = 67,
    Exito = 68,
    Efecty = 69,
    Paloto = 70,
    PinValidda = 71,
    MangirKart = 72,
    BancoCreditoDePeru = 73,
    BBVAContinental = 74,
    SafetyPay = 75,
    PagoEfectivo = 76,
    Trustly = 77,
    UnionPay = 78,
    BitCoin = 79,
    Wallet = 128,
    Valve = 129,
    SteamPressMaster = 130, // removed "renamed to MasterComp"
    MasterComp = 130,
    StorePromotion = 131, // removed "renamed to Promotional"
    Promotional = 131,
    OEMTicket = 256,
    Split = 512,
    Complimentary = 1024,
}

export enum EPurchaseResultDetail {
    NoDetail = 0,
    AVSFailure = 1,
    InsufficientFunds = 2,
    ContactSupport = 3,
    Timeout = 4,
    InvalidPackage = 5,
    InvalidPaymentMethod = 6,
    InvalidData = 7,
    OthersInProgress = 8,
    AlreadyPurchased = 9,
    WrongPrice = 10,
    FraudCheckFailed = 11,
    CancelledByUser = 12,
    RestrictedCountry = 13,
    BadActivationCode = 14,
    DuplicateActivationCode = 15,
    UseOtherPaymentMethod = 16,
    UseOtherFunctionSource = 17,
    InvalidShippingAddress = 18,
    RegionNotSupported = 19,
    AcctIsBlocked = 20,
    AcctNotVerified = 21,
    InvalidAccount = 22,
    StoreBillingCountryMismatch = 23,
    DoesNotOwnRequiredApp = 24,
    CanceledByNewTransaction = 25,
    ForceCanceledPending = 26,
    FailCurrencyTransProvider = 27,
    FailedCyberCafe = 28,
    NeedsPreApproval = 29,
    PreApprovalDenied = 30,
    WalletCurrencyMismatch = 31,
    EmailNotValidated = 32,
    ExpiredCard = 33,
    TransactionExpired = 34,
    WouldExceedMaxWallet = 35,
    MustLoginPS3AppForPurchase = 36,
    CannotShipToPOBox = 37,
    InsufficientInventory = 38,
    CannotGiftShippedGoods = 39,
    CannotShipInternationally = 40,
    BillingAgreementCancelled = 41,
    InvalidCoupon = 42,
    ExpiredCoupon = 43,
    AccountLocked = 44,
    OtherAbortableInProgress = 45,
    ExceededSteamLimit = 46,
    OverlappingPackagesInCart = 47,
    NoWallet = 48,
    NoCachedPaymentMethod = 49,
    CannotRedeemCodeFromClient = 50,
    PurchaseAmountNoSupportedByProvider = 51,
    OverlappingPackagesInPendingTransaction = 52,
    RateLimited = 53,
    OwnsExcludedApp = 54,
    CreditCardBinMismatchesType = 55,
    CartValueTooHigh = 56,
    BillingAgreementAlreadyExists = 57,
    POSACodeNotActivated = 58,
    CannotShipToCountry = 59,
    HungTransactionCancelled = 60,
    PaypalInternalError = 61,
    UnknownGlobalCollectError = 62,
    InvalidTaxAddress = 63,
    PhysicalProductLimitExceeded = 64,
    PurchaseCannotBeReplayed = 65,
    DelayedCompletion = 66,
    BundleTypeCannotBeGifted = 67,
}

export enum EIntroducerRouting {
    FileShare = 0, // removed
    P2PVoiceChat = 1,
    P2PNetworking = 2,
}

export enum EServerFlags {
    None = 0,
    Active = 1,
    Secure = 2,
    Dedicated = 4,
    Linux = 8,
    Passworded = 16,
    Private = 32,
}

export enum EDenyReason {
    InvalidVersion = 1,
    Generic = 2,
    NotLoggedOn = 3,
    NoLicense = 4,
    Cheater = 5,
    LoggedInElseWhere = 6,
    UnknownText = 7,
    IncompatibleAnticheat = 8,
    MemoryCorruption = 9,
    IncompatibleSoftware = 10,
    SteamConnectionLost = 11,
    SteamConnectionError = 12,
    SteamResponseTimedOut = 13,
    SteamValidationStalled = 14,
    SteamOwnerLeftGuestUser = 15,
}

export enum EClanRank {
    None = 0,
    Owner = 1,
    Officer = 2,
    Member = 3,
    Moderator = 4,
}

export enum EClanRelationship {
    None = 0,
    Blocked = 1,
    Invited = 2,
    Member = 3,
    Kicked = 4,
    KickAcknowledged = 5,
}

export enum EAuthSessionResponse {
    OK = 0,
    UserNotConnectedToSteam = 1,
    NoLicenseOrExpired = 2,
    VACBanned = 3,
    LoggedInElseWhere = 4,
    VACCheckTimedOut = 5,
    AuthTicketCanceled = 6,
    AuthTicketInvalidAlreadyUsed = 7,
    AuthTicketInvalid = 8,
    PublisherIssuedBan = 9,
}

export enum EChatRoomEnterResponse {
    Success = 1,
    DoesntExist = 2,
    NotAllowed = 3,
    Full = 4,
    Error = 5,
    Banned = 6,
    Limited = 7,
    ClanDisabled = 8,
    CommunityBan = 9,
    MemberBlockedYou = 10,
    YouBlockedMember = 11,

    // these appear to have been removed
    NoRankingDataLobby = 12, // removed
    NoRankingDataUser = 13, // removed
    RankOutOfRange = 14, // removed
}

export enum EChatRoomType {
    Friend = 1,
    MUC = 2,
    Lobby = 3,
}

export enum EChatInfoType {
    StateChange = 1,
    InfoUpdate = 2,
    MemberLimitChange = 3,
}

export enum EChatAction {
    InviteChat = 1,
    Kick = 2,
    Ban = 3,
    UnBan = 4,
    StartVoiceSpeak = 5,
    EndVoiceSpeak = 6,
    LockChat = 7,
    UnlockChat = 8,
    CloseChat = 9,
    SetJoinable = 10,
    SetUnjoinable = 11,
    SetOwner = 12,
    SetInvisibleToFriends = 13,
    SetVisibleToFriends = 14,
    SetModerated = 15,
    SetUnmoderated = 16,
}

export enum EChatActionResult {
    Success = 1,
    Error = 2,
    NotPermitted = 3,
    NotAllowedOnClanMember = 4,
    NotAllowedOnBannedUser = 5,
    NotAllowedOnChatOwner = 6,
    NotAllowedOnSelf = 7,
    ChatDoesntExist = 8,
    ChatFull = 9,
    VoiceSlotsFull = 10,
}

export enum EAppInfoSection {
    Unknown = 0,
    All = 1,

    First = 2,
    Common = 2,
    Extended = 3,
    Config = 4,
    Stats = 5,
    Install = 6,
    Depots = 7,
    VAC = 8, // removed
    VAC_UNUSED = 8, // removed
    DRM = 9, // removed
    DRM_UNUSED = 9, // removed
    UFS = 10,
    OGG = 11,
    Items = 12, // removed
    ItemsUNUSED = 12, // removed
    Policies = 13,
    SysReqs = 14,
    Community = 15,
    Store = 16,

    Max = 17,
}

export enum EContentDownloadSourceType {
    Invalid = 0,

    CS = 1,
    CDN = 2,
    LCS = 3,
    ProxyCache = 4,
    LANPeer = 5,

    Max = 5,
}

export enum EPlatformType {
    Unknown = 0,

    Win32 = 1,
    Win64 = 2,
    Linux = 3, // removed "split to Linux64 and Linux32"
    Linux64 = 3,
    OSX = 4,
    PS3 = 5,
    Linux32 = 6,

    Max = 6,
}

export enum EOSType {
    Unknown = -1,

    IOSUnknown = -600,

    AndroidUnknown = -500,

    UMQ = -400,

    PS3 = -300,

    MacOSUnknown = -102,
    MacOS104 = -101,
    MacOS105 = -100,
    MacOS1058 = -99,
    MacOS106 = -95,
    MacOS1063 = -94,
    MacOS1064_slgu = -93,
    MacOS1067 = -92,
    MacOS107 = -90,
    MacOS108 = -89,
    MacOS109 = -88,
    MacOS1010 = -87,
    MacOS1011 = -86,
    MacOS1012 = -85,
    MacOSMax = -1,

    LinuxUnknown = -203,
    Linux22 = -202,
    Linux24 = -201,
    Linux26 = -200,
    Linux32 = -199,
    Linux35 = -198,
    Linux36 = -197,
    Linux310 = -196,
    LinuxMax = -103,

    WinUnknown = 0,
    Win311 = 1,
    Win95 = 2,
    Win98 = 3,
    WinME = 4,
    WinNT = 5,
    Win200 = 6, // removed "renamed to Win2000"
    Win2000 = 6,
    WinXP = 7,
    Win2003 = 8,
    WinVista = 9,
    Win7 = 10, // removed "renamed to Windows7"
    Windows7 = 10,
    Win2008 = 11,
    Win2012 = 12,
    Win8 = 13, // removed "renamed to Windows8"
    Windows8 = 13,
    Win81 = 14, // removed "renamed to Windows81"
    Windows81 = 14,
    Win2012R2 = 15,
    Win10 = 16, // removed "renamed to Windows10"
    Windows10 = 16,

    WinMAX = 15,

    Max = 26,
}

export enum EServerType {
    Invalid = -1,
    First = 0,

    Shell = 0,
    GM = 1,
    BUM = 2, // removed
    BUMOBOSOLETE = 2, // removed
    AM = 3,
    BS = 4,
    VS = 5,
    ATS = 6,
    CM = 7,
    FBS = 8,
    FG = 9, // removed "renamed to BoxMonitor"
    BoxMonitor = 9,
    SS = 10,
    DRMS = 11,
    HubOBSOLETE = 12, // removed
    Console = 13,
    ASBOBSOLETE = 14, // removed
    PICS = 14,
    Client = 15,
    BootstrapOBSOLETE = 16, // removed,
    DP = 17,
    WG = 18,
    SM = 19,
    SLC = 20,
    UFS = 21,
    Util = 23,
    DSS = 24, // removed "renamed to Community"
    Community = 24,
    P2PRelayOBSOLETE = 25, // removed
    AppInformation = 26,
    Spare = 27,
    FTS = 28,
    EPM = 29, // removed
    EPMOBSOLETE = 29, // removed
    PS = 30,
    IS = 31,
    CCS = 32,
    DFS = 33,
    LBS = 34,
    MDS = 35,
    CS = 36,
    GC = 37,
    NS = 38,
    OGS = 39,
    WebAPI = 40,
    UDS = 41,
    MMS = 42,
    GMS = 43,
    KGS = 44,
    UCM = 45,
    RM = 46,
    FS = 47,
    Econ = 48,
    Backpack = 49,
    UGS = 50,
    Store = 51, // removed "renamed to StoreFeature"
    StoreFeature = 51,
    MoneyStats = 52,
    CRE = 53,
    UMQ = 54,
    Workshop = 55,
    BRP = 56,
    GCH = 57,
    MPAS = 58,
    Trade = 59,
    Secrets = 60,
    Logsink = 61,
    Market = 62,
    Quest = 63,
    WDS = 64,
    ACS = 65,
    PNP = 66,
    TaxForm = 67,
    ExternalMonitor = 68,
    Parental = 69,
    PartnerUpload = 70,
    Partner = 71,
    ES = 72,
    DepotWebContent = 73,
    ExternalConfig = 74,
    GameNotifications = 75,
    MarketRepl = 76,
    MarketSearch = 77,
    Localization = 78,
    Steam2Emulator = 79,
    PublicTest = 80,
    SolrMgr = 81,
    BroadcastRelay = 82,
    BroadcastDirectory = 83,
    VideoManager = 84,
    TradeOffer = 85,
    BroadcastChat = 86,
    Phone = 87,
    AccountScore = 88,
    Support = 89,
    LogRequest = 90,
    LogWorker = 91,
    EmailDelivery = 92,
    InventoryManagement = 93,
    Auth = 94,
    StoreCatalog = 95,
    HLTVRelay = 96,

    Max = 97,
}

export enum EBillingType {
    NoCost = 0,
    BillOnceOnly = 1,
    BillMonthly = 2,
    ProofOfPrepurchaseOnly = 3,
    GuestPass = 4,
    HardwarePromo = 5,
    Gift = 6,
    AutoGrant = 7,
    OEMTicket = 8,
    RecurringOption = 9,
    BillOnceOrCDKey = 10,
    Repurchaseable = 11,
    FreeOnDemand = 12,
    Rental = 13,
    CommercialLicense = 14,
    FreeCommercialLicense = 15,

    NumBillingTypes = 16,
}

export enum EActivationCodeClass {
    WonCDKey = 0,
    ValveCDKey = 1,
    Doom3CDKey = 2,
    DBLookup = 3,
    Steam2010Key = 4,
    Max = 5,
    Test = 2147483647,
    Invalid = 4294967295,
}

export enum EChatMemberStateChange {
    Entered = 0x01,
    Left = 0x02,
    Disconnected = 0x04,
    Kicked = 0x08,
    Banned = 0x10,

    VoiceSpeaking = 0x1000,
    VoiceDoneSpeaking = 0x2000,
}

export enum ERegionCode {
    USEast = 0x00,
    USWest = 0x01,
    SouthAmerica = 0x02,
    Europe = 0x03,
    Asia = 0x04,
    Australia = 0x05,
    MiddleEast = 0x06,
    Africa = 0x07,
    World = 0xFF,
}

export enum ECurrencyCode {
    Invalid = 0,

    USD = 1,
    GBP = 2,
    EUR = 3,
    CHF = 4,
    RUB = 5,
    PLN = 6,
    BRL = 7,
    JPY = 8,
    NOK = 9,
    IDR = 10,
    MYR = 11,
    PHP = 12,
    SGD = 13,
    THB = 14,
    VND = 15,
    KRW = 16,
    TRY = 17,
    UAH = 18,
    MXN = 19,
    CAD = 20,
    AUD = 21,
    NZD = 22,
    CNY = 23,
    INR = 24,
    CLP = 25,
    PEN = 26,
    COP = 27,
    ZAR = 28,
    HKD = 29,
    TWD = 30,
    SAR = 31,
    AED = 32,
    ARS = 34,
    ILS = 35,
    BYN = 36,
    KZT = 37,
    KWD = 38,
    QAR = 39,
    CRC = 40,
    UYU = 41,

    Max = 42,
}

export enum EDepotFileFlag {
    UserConfig = 1,
    VersionedUserConfig = 2,
    Encrypted = 4,
    ReadOnly = 8,
    Hidden = 16,
    Executable = 32,
    Directory = 64,
    CustomExecutable = 128,
    InstallScript = 256,
    Symlink = 512,
}

export enum EWorkshopEnumerationType {
    RankedByVote = 0,
    Recent = 1,
    Trending = 2,
    FavoriteOfFriends = 3,
    VotedByFriends = 4,
    ContentByFriends = 5,
    RecentFromFollowedUsers = 6,
}

export enum EPublishedFileVisibility {
    Public = 0,
    FriendsOnly = 1,
    Private = 2,
}

export enum EWorkshopFileType {
    First = 0,

    Community = 0,
    Microtransaction = 1,
    Collection = 2,
    Art = 3,
    Video = 4,
    Screenshot = 5,
    Game = 6,
    Software = 7,
    Concept = 8,
    WebGuide = 9,
    IntegratedGuide = 10,
    Merch = 11,
    ControllerBinding = 12,
    SteamworksAccessInvite = 13,
    SteamVideo = 14,
    GameManagedItem = 15,

    Max = 16,
}

export enum EWorkshopFileAction {
    Played = 0,
    Completed = 1,
}

export enum EEconTradeResponse {
    Accepted = 0,
    Declined = 1,
    TradeBannedInitiator = 2,
    TradeBannedTarget = 3,
    TargetAlreadyTrading = 4,
    Disabled = 5,
    NotLoggedIn = 6,
    Cancel = 7,
    TooSoon = 8,
    TooSoonPenalty = 9,
    ConnectionFailed = 10,
    AlreadyTrading = 11,
    AlreadyHasTradeRequest = 12,
    NoResponse = 13,
    CyberCafeInitiator = 14,
    CyberCafeTarget = 15,
    SchoolLabInitiator = 16,
    SchoolLabTarget = 16,
    InitiatorBlockedTarget = 18,
    InitiatorNeedsVerifiedEmail = 20,
    InitiatorNeedsSteamGuard = 21,
    TargetAccountCannotTrade = 22,
    InitiatorSteamGuardDuration = 23,
    InitiatorPasswordResetProbation = 24,
    InitiatorNewDeviceCooldown = 25,
    InitiatorSentInvalidCookie = 26,
    NeedsEmailConfirmation = 27,
    InitiatorRecentEmailChange = 28,
    NeedsMobileConfirmation = 29,
    TradingHoldForClearedTradeOffersInitiator = 30,
    WouldExceedMaxAssetCount = 31,
    OKToDeliver = 50,
}

export enum EMarketingMessageFlags {
    None = 0,

    HighPriority = 1,
    PlatformWindows = 2,
    PlatformMac = 4,
    PlatformLinux = 8,
    PlatformRestrictions = PlatformWindows | PlatformMac | PlatformLinux,
}

export enum ENewsUpdateType {
    AppNews = 0,
    SteamAds = 1,
    SteamNews = 2,
    CDDBUpdate = 3,
    ClientUpdate = 4,
}

export enum ESystemIMType {
    RawText = 0,
    InvalidCard = 1,
    RecurringPurchaseFailed = 2,
    CardWillExpire = 3,
    SubscriptionExpired = 4,
    GuestPassReceived = 5,
    GuestPassGranted = 6,
    GiftRevoked = 7,
    SupportMessage = 8,
    SupportMessageClearAlert = 9,

    Max = 10,
}

export enum EChatFlags {
    Locked = 1,
    InvisibleToFriends = 2,
    Moderated = 4,
    Unjoinable = 8,
}

export enum ERemoteStoragePlatform {
    None = 0,

    Windows = 1,
    OSX = 2,
    PS3 = 4,
    Linux = 8,
    Reserved1 = 8, // removed
    Reserved2 = 16,

    All = -1,
}

export enum EDRMBlobDownloadType {
    Error = 0,

    File = 1,
    Parts = 2,
    Compressed = 4,
    AllMask = 7,
    IsJob = 8,
    HighPriority = 16,
    AddTimestamp = 32,
    LowPriority = 64,
}

export enum EDRMBlobDownloadErrorDetail {
    None = 0,

    DownloadFailed = 1,
    TargetLocked = 2,
    OpenZip = 3,
    ReadZipDirectory = 4,
    UnexpectedZipEntry = 5,
    UnzipFullFile = 6,
    UnknownBlobType = 7,
    UnzipStrips = 8,
    UnzipMergeGuid = 9,
    UnzipSignature = 10,
    ApplyStrips = 11,
    ApplyMergeGuid = 12,
    ApplySignature = 13,
    AppIdMismatch = 14,
    AppIdUnexpected = 15,
    AppliedSignatureCorrupt = 16,
    ApplyValveSignatureHeader = 17,
    UnzipValveSignatureHeader = 18,
    PathManipulationError = 19,

    TargetLocked_Base = 65536,
    TargetLocked_Max = 131071,

    NextBase = 131072,
}

export enum EClientStat {
    P2PConnectionsUDP = 0,
    P2PConnectionsRelay = 1,
    P2PGameConnections = 2,
    P2PVoiceConnections = 3,
    BytesDownloaded = 4,

    Max = 5,
}

export enum EClientStatAggregateMethod {
    LatestOnly = 0,
    Sum = 1,
    Event = 2,
    Scalar = 3,
}

export enum ELeaderboardDataRequest {
    Global = 0,
    GlobalAroundUser = 1,
    Friends = 2,
    Users = 3,
}

export enum ELeaderboardSortMethod {
    None = 0,

    Ascending = 1,
    Descending = 2,
}

export enum ELeaderboardDisplayType {
    None = 0,
    Numeric = 1,
    TimeSeconds = 2,
    TimeMilliSeconds = 3,
}

export enum ELeaderboardUploadScoreMethod {
    None = 0,

    KeepBest = 1,
    ForceUpdate = 2,
}

export enum EUCMFilePrivacyState {
    Invalid = -1,
    Private = 2,
    FriendsOnly = 4,
    Public = 8,

    All = Public | FriendsOnly | Private, // 14
}

export enum EResult {
    Invalid = 0,

    OK = 1,
    Fail = 2,
    NoConnection = 3,
    InvalidPassword = 5,
    LoggedInElsewhere = 6,
    InvalidProtocolVer = 7,
    InvalidParam = 8,
    FileNotFound = 9,
    Busy = 10,
    InvalidState = 11,
    InvalidName = 12,
    InvalidEmail = 13,
    DuplicateName = 14,
    AccessDenied = 15,
    Timeout = 16,
    Banned = 17,
    AccountNotFound = 18,
    InvalidSteamID = 19,
    ServiceUnavailable = 20,
    NotLoggedOn = 21,
    Pending = 22,
    EncryptionFailure = 23,
    InsufficientPrivilege = 24,
    LimitExceeded = 25,
    Revoked = 26,
    Expired = 27,
    AlreadyRedeemed = 28,
    DuplicateRequest = 29,
    AlreadyOwned = 30,
    IPNotFound = 31,
    PersistFailed = 32,
    LockingFailed = 33,
    LogonSessionReplaced = 34,
    ConnectFailed = 35,
    HandshakeFailed = 36,
    IOFailure = 37,
    RemoteDisconnect = 38,
    ShoppingCartNotFound = 39,
    Blocked = 40,
    Ignored = 41,
    NoMatch = 42,
    AccountDisabled = 43,
    ServiceReadOnly = 44,
    AccountNotFeatured = 45,
    AdministratorOK = 46,
    ContentVersion = 47,
    TryAnotherCM = 48,
    PasswordRequiredToKickSession = 49,
    AlreadyLoggedInElsewhere = 50,
    Suspended = 51,
    Cancelled = 52,
    DataCorruption = 53,
    DiskFull = 54,
    RemoteCallFailed = 55,
    PasswordNotSet = 56, // removed "renamed to PasswordUnset"
    PasswordUnset = 56,
    ExternalAccountUnlinked = 57,
    PSNTicketInvalid = 58,
    ExternalAccountAlreadyLinked = 59,
    RemoteFileConflict = 60,
    IllegalPassword = 61,
    SameAsPreviousValue = 62,
    AccountLogonDenied = 63,
    CannotUseOldPassword = 64,
    InvalidLoginAuthCode = 65,
    AccountLogonDeniedNoMailSent = 66, // removed "renamed to AccountLogonDeniedNoMail"
    AccountLogonDeniedNoMail = 66,
    HardwareNotCapableOfIPT = 67,
    IPTInitError = 68,
    ParentalControlRestricted = 69,
    FacebookQueryError = 70,
    ExpiredLoginAuthCode = 71,
    IPLoginRestrictionFailed = 72,
    AccountLocked = 73, // removed "renamed to AccountLockedDown"
    AccountLockedDown = 73,
    AccountLogonDeniedVerifiedEmailRequired = 74,
    NoMatchingURL = 75,
    BadResponse = 76,
    RequirePasswordReEntry = 77,
    ValueOutOfRange = 78,
    UnexpectedError = 79,
    Disabled = 80,
    InvalidCEGSubmission = 81,
    RestrictedDevice = 82,
    RegionLocked = 83,
    RateLimitExceeded = 84,
    AccountLogonDeniedNeedTwoFactorCode = 85, // removed "renamed to AccountLoginDeniedNeedTwoFactor"
    AccountLoginDeniedNeedTwoFactor = 85,
    ItemOrEntryHasBeenDeleted = 86, // removed "renamed to ItemDeleted"
    ItemDeleted = 86,
    AccountLoginDeniedThrottle = 87,
    TwoFactorCodeMismatch = 88,
    TwoFactorActivationCodeMismatch = 89,
    AccountAssociatedToMultiplePlayers = 90, // removed "renamed to AccountAssociatedToMultiplePartners"
    AccountAssociatedToMultiplePartners = 90,
    NotModified = 91,
    NoMobileDeviceAvailable = 92, // removed "renamed to NoMobileDevice"
    NoMobileDevice = 92,
    TimeIsOutOfSync = 93, // removed "renamed to TimeNotSynced"
    TimeNotSynced = 93,
    SMSCodeFailed = 94,
    TooManyAccountsAccessThisResource = 95, // removed "renamed to AccountLimitExceeded"
    AccountLimitExceeded = 95,
    AccountActivityLimitExceeded = 96,
    PhoneActivityLimitExceeded = 97,
    RefundToWallet = 98,
    EmailSendFailure = 99,
    NotSettled = 100,
    NeedCaptcha = 101,
    GSLTDenied = 102,
    GSOwnerDenied = 103,
    InvalidItemType = 104,
    IPBanned = 105,
    GSLTExpired = 106,
    InsufficientFunds = 107,
    TooManyPending = 108,
    NoSiteLicensesFound = 109,
    WGNetworkSendExceeded = 110,
}
