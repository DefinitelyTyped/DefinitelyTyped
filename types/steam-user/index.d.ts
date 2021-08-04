// Type definitions for steam-user 4.19
// Project: https://github.com/DoctorMcKay/node-steam-user
// Definitions by: vanitasboi <https://github.com/vanitasboi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type SteamID = import('steamid');
type ByteBuffer = import('bytebuffer');
import { EventEmitter } from 'events';

export = SteamUser;

//#region "Enum Imports"
import { EAccountFlags } from './enums/EAccountFlags';
import { EAccountType } from './enums/EAccountType';
import { EActivationCodeClass } from './enums/EActivationCodeClass';
import { EAppAssociationType } from './enums/EAppAssociationType';
import { EAppControllerSupportLevel } from './enums/EAppControllerSupportLevel';
import { EAppInfoSection } from './enums/EAppInfoSection';
import { EAppType } from './enums/EAppType';
import { EAppUsageEvent } from './enums/EAppUsageEvent';
import { EAudioFormat } from './enums/EAudioFormat';
import { EAuthSessionResponse } from './enums/EAuthSessionResponse';
import { EBillingType } from './enums/EBillingType';
import { EBroadcastChatPermission } from './enums/EBroadcastChatPermission';
import { EBroadcastWatchLocation } from './enums/EBroadcastWatchLocation';
import { EChatAction } from './enums/EChatAction';
import { EChatActionResult } from './enums/EChatActionResult';
import { EChatEntryType } from './enums/EChatEntryType';
import { EChatFlags } from './enums/EChatFlags';
import { EChatInfoType } from './enums/EChatInfoType';
import { EChatMemberStateChange } from './enums/EChatMemberStateChange';
import { EChatPermission } from './enums/EChatPermission';
import { EChatRoomEnterResponse } from './enums/EChatRoomEnterResponse';
import { EChatRoomGroupAction } from './enums/EChatRoomGroupAction';
import { EChatRoomGroupPermissions } from './enums/EChatRoomGroupPermissions';
import { EChatRoomGroupRank } from './enums/EChatRoomGroupRank';
import { EChatRoomGroupType } from './enums/EChatRoomGroupType';
import { EChatRoomJoinState } from './enums/EChatRoomJoinState';
import { EChatRoomMemberStateChange } from './enums/EChatRoomMemberStateChange';
import { EChatRoomNotificationLevel } from './enums/EChatRoomNotificationLevel';
import { EChatRoomServerMessage } from './enums/EChatRoomServerMessage';
import { EChatRoomServerMsg } from './enums/EChatRoomServerMsg';
import { EChatRoomType } from './enums/EChatRoomType';
import { EClanPermission } from './enums/EClanPermission';
import { EClanRank } from './enums/EClanRank';
import { EClanRelationship } from './enums/EClanRelationship';
import { EClientPersonaStateFlag } from './enums/EClientPersonaStateFlag';
import { EClientStat } from './enums/EClientStat';
import { EClientStatAggregateMethod } from './enums/EClientStatAggregateMethod';
import { EClientUIMode } from './enums/EClientUIMode';
import { EConnectionProtocol } from './enums/EConnectionProtocol';
import { EContentDeltaChunkDataLocation } from './enums/EContentDeltaChunkDataLocation';
import { EContentDownloadSourceType } from './enums/EContentDownloadSourceType';
import { EControllerElementType } from './enums/EControllerElementType';
import { EControllerLayoutType } from './enums/EControllerLayoutType';
import { ECurrencyCode } from './enums/ECurrencyCode';
import { EDenyReason } from './enums/EDenyReason';
import { EDepotFileFlag } from './enums/EDepotFileFlag';
import { EDisplayStatus } from './enums/EDisplayStatus';
import { EDRMBlobDownloadErrorDetail } from './enums/EDRMBlobDownloadErrorDetail';
import { EDRMBlobDownloadType } from './enums/EDRMBlobDownloadType';
import { EEconTradeResponse } from './enums/EEconTradeResponse';
import { EExternalAccountType } from './enums/EExternalAccountType';
import { EFrameAccumulatedStat } from './enums/EFrameAccumulatedStat';
import { EFriendFlags } from './enums/EFriendFlags';
import { EFriendRelationship } from './enums/EFriendRelationship';
import { EGameSearchAction } from './enums/EGameSearchAction';
import { EGameSearchResult } from './enums/EGameSearchResult';
import { EHIDDeviceDisconnectMethod } from './enums/EHIDDeviceDisconnectMethod';
import { EHIDDeviceLocation } from './enums/EHIDDeviceLocation';
import { EInputMode } from './enums/EInputMode';
import { EInternalAccountType } from './enums/EInternalAccountType';
import { EIntroducerRouting } from './enums/EIntroducerRouting';
import { EJSRegisterMethodType } from './enums/EJSRegisterMethodType';
import { EKeyEscrowUsage } from './enums/EKeyEscrowUsage';
import { ELauncherType } from './enums/ELauncherType';
import { ELeaderboardDataRequest } from './enums/ELeaderboardDataRequest';
import { ELeaderboardDisplayType } from './enums/ELeaderboardDisplayType';
import { ELeaderboardSortMethod } from './enums/ELeaderboardSortMethod';
import { ELeaderboardUploadScoreMethod } from './enums/ELeaderboardUploadScoreMethod';
import { ELicenseFlags } from './enums/ELicenseFlags';
import { ELicenseType } from './enums/ELicenseType';
import { ELobbyComparison } from './enums/ELobbyComparison';
import { ELobbyFilterType } from './enums/ELobbyFilterType';
import { ELobbyStatus } from './enums/ELobbyStatus';
import { ELobbyType } from './enums/ELobbyType';
import { ELogFileType } from './enums/ELogFileType';
import { EMachineIDType } from './enums/EMachineIDType';
import { EMarketingMessageFlags } from './enums/EMarketingMessageFlags';
import { EMMSLobbyStatus } from './enums/EMMSLobbyStatus';
import { EMouseMode } from './enums/EMouseMode';
import { EMsg } from './enums/EMsg';
import { EMsgClanAccountFlags } from './enums/EMsgClanAccountFlags';
import { ENewsUpdateType } from './enums/ENewsUpdateType';
import { ENotificationSetting } from './enums/ENotificationSetting';
import { EOSType } from './enums/EOSType';
import { EPackageStatus } from './enums/EPackageStatus';
import { EPaymentMethod } from './enums/EPaymentMethod';
import { EPersonaState } from './enums/EPersonaState';
import { EPersonaStateFlag } from './enums/EPersonaStateFlag';
import { EPlatformType } from './enums/EPlatformType';
import { EPrivacyState } from './enums/EPrivacyState';
import { EProtoAppType } from './enums/EProtoAppType';
import { EProtoClanEventType } from './enums/EProtoClanEventType';
import { EProtoExecutionSite } from './enums/EProtoExecutionSite';
import { EPublishedFileForSaleStatus } from './enums/EPublishedFileForSaleStatus';
import { EPublishedFileInappropriateProvider } from './enums/EPublishedFileInappropriateProvider';
import { EPublishedFileInappropriateResult } from './enums/EPublishedFileInappropriateResult';
import { EPublishedFileQueryType } from './enums/EPublishedFileQueryType';
import { EPublishedFileRevision } from './enums/EPublishedFileRevision';
import { EPublishedFileVisibility } from './enums/EPublishedFileVisibility';
import { EPurchaseResult } from './enums/EPurchaseResult';
import { EPurchaseResultDetail } from './enums/EPurchaseResultDetail';
import { ERegionCode } from './enums/ERegionCode';
import { ERemoteClientBroadcastMsg } from './enums/ERemoteClientBroadcastMsg';
import { ERemoteClientService } from './enums/ERemoteClientService';
import { ERemoteDeviceAuthorizationResult } from './enums/ERemoteDeviceAuthorizationResult';
import { ERemoteDeviceStreamingResult } from './enums/ERemoteDeviceStreamingResult';
import { ERemoteStoragePlatform } from './enums/ERemoteStoragePlatform';
import { EResult } from './enums/EResult';
import { EServerFlags } from './enums/EServerFlags';
import { EServerType } from './enums/EServerType';
import { ESteamDatagramMsgID } from './enums/ESteamDatagramMsgID';
import { ESteamNetworkingSocketsCipher } from './enums/ESteamNetworkingSocketsCipher';
import { ESteamNetworkingUDPMsgID } from './enums/ESteamNetworkingUDPMsgID';
import { ESteamPipeOperationType } from './enums/ESteamPipeOperationType';
import { ESteamPipeWorkType } from './enums/ESteamPipeWorkType';
import { ESteamReviewScore } from './enums/ESteamReviewScore';
import { EStreamActivity } from './enums/EStreamActivity';
import { EStreamAudioCodec } from './enums/EStreamAudioCodec';
import { EStreamBitrate } from './enums/EStreamBitrate';
import { EStreamChannel } from './enums/EStreamChannel';
import { EStreamControlMessage } from './enums/EStreamControlMessage';
import { EStreamDataMessage } from './enums/EStreamDataMessage';
import { EStreamDeviceFormFactor } from './enums/EStreamDeviceFormFactor';
import { EStreamDiscoveryMessage } from './enums/EStreamDiscoveryMessage';
import { EStreamFrameEvent } from './enums/EStreamFrameEvent';
import { EStreamFramerateLimiter } from './enums/EStreamFramerateLimiter';
import { EStreamFrameResult } from './enums/EStreamFrameResult';
import { EStreamGamepadInputType } from './enums/EStreamGamepadInputType';
import { EStreamHostPlayAudioPreference } from './enums/EStreamHostPlayAudioPreference';
import { EStreamingDataType } from './enums/EStreamingDataType';
import { EStreamInterface } from './enums/EStreamInterface';
import { EStreamMouseButton } from './enums/EStreamMouseButton';
import { EStreamMouseWheelDirection } from './enums/EStreamMouseWheelDirection';
import { EStreamP2PScope } from './enums/EStreamP2PScope';
import { EStreamQualityPreference } from './enums/EStreamQualityPreference';
import { EStreamStatsMessage } from './enums/EStreamStatsMessage';
import { EStreamTransport } from './enums/EStreamTransport';
import { EStreamVersion } from './enums/EStreamVersion';
import { EStreamVideoCodec } from './enums/EStreamVideoCodec';
import { ESystemIMType } from './enums/ESystemIMType';
import { ETradeOfferConfirmationMethod } from './enums/ETradeOfferConfirmationMethod';
import { ETradeOfferState } from './enums/ETradeOfferState';
import { EUCMFilePrivacyState } from './enums/EUCMFilePrivacyState';
import { EUdpPacketType } from './enums/EUdpPacketType';
import { EUniverse } from './enums/EUniverse';
import { EUserReviewScorePreference } from './enums/EUserReviewScorePreference';
import { EValveIndexComponent } from './enums/EValveIndexComponent';
import { EVideoFormat } from './enums/EVideoFormat';
import { EVoiceCallState } from './enums/EVoiceCallState';
import { EWorkshopEnumerationType } from './enums/EWorkshopEnumerationType';
import { EWorkshopFileAction } from './enums/EWorkshopFileAction';
import { EWorkshopFileType } from './enums/EWorkshopFileType';
import { E_STAR_GlyphWriteResult } from './enums/E_STAR_GlyphWriteResult';
//#endregion "Enum Imports"

//#region "Helper Types"
type RegionCode = 0x00 | 0x01| 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0xFF; // https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Region_codes
//#endregion "Helper Types"

//#region "Response Types"
type GetStoreTagNamesResponse = Record<string, {name: string, englishName: string}>;
type GetPublishedFileDetailsResponse = Record<string, Record<string, any>>;
//#endregion "Response Types"

//#region "General Interfaces"
interface Options {
    localPort?: number | null;
    protocol?: EConnectionProtocol;
	httpProxy?: string | null;
	localAddress?: string | null;
	autoRelogin?: boolean;
	singleSentryfile?: boolean;
	machineIdType?: EMachineIDType;
	machineIdFormat?: [string, string, string];
	enablePicsCache?: boolean;
	language?: string;
	picsCacheAll?: boolean;
	changelistUpdateInterval?: number;
	saveAppTickets?: boolean;
	additionalHeaders?: Record<string, string>;
	webCompatibilityMode?: boolean;
}

interface PlayedGame {
    game_id: number;
    game_extra_info: string;
}

interface ServerQueryConditions {
    app_id: number;
    geo_location_ip: string;
    region_code: RegionCode;
    filter_text: string; // https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter
    max_servers: number;
}

interface AppChanges {
    appid: number;
    change_number: number;
    needs_token: boolean;
}

interface PackageChanges {
    packageid: number;
    change_number: number;
    needs_token: boolean;
}

interface App {
    appid: number;
    access_token: string;
}

interface Package {
    packageid: number;
    access_token: string;
}

interface AppInfo {
    changenumber: number;
    missingToken: boolean;
    appinfo: Record<string, any>; // too complex to describe
}

interface PackageInfo {
    changenumber: number;
    missingToken: boolean;
    packageinfo: Record<string, any>; // too complex to describe
}

interface RichPresence {
    status: string;
    version: string;
    time?: string;
    'game:state': string;
    steam_display: string;
    connect: string;
}

interface OwnedApp {
    appid: number;
    name: string;
    playtime_2weeks: number | null;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
}

interface GetUserOwnedAppsOptions {
    includePlayedFreeGames?: boolean;
    filterAppids?: number[];
    includeFreeSub?: boolean;
}

interface ProfileItem {
    communityitemid: number;
    image_small: string | null;
    image_large: string | null;
    name: string;
    item_title: string;
    item_description: string;
    appid: number;
    item_type: unknown; // could be improved
    item_class: unknown; // could be improved
    movie_webm: string;
    movie_mp4: string;
    equipped_flags: unknown; // could be improved
}

interface Emoticon {
    name: string;
    count: number;
    time_last_used: Date | null;
    use_count: number;
    time_received: Date | null;
}

interface Borrowers {
    steamid: SteamID;
    isPending: boolean;
    isCanceled: boolean;
    timeCreated: Date;
}

interface Device {
    deviceToken: string;
    deviceName: string;
    isPending: boolean;
    isCanceled: boolean;
    isLimited: boolean;
    lastTimeUsed: Date | null;
    lastBorrower: SteamID | null;
    lastAppPlayed: Date | null;
}
//#endregion "General Interfaces"

//#region "Response Interfaces"
interface CheckQuickInviteLinkValidityResponse {
    valid: boolean;
    steamid: SteamID;
    invite_duration: number | null;
}

interface TradeURLResponse {
    token: string;
     url: string;
}

interface CreateQuickInviteLinkOptions {
    inviteLimit?: number;
    inviteDuration?: number | null;
}
interface QuickInviteLinkResponse {
    invite_link: string;
    invite_token: string;
    invite_limit: number;
    invite_duration: number | null;
    time_created: Date;
    valid: boolean;
}

interface LogOnDetails {
    accountName: string;
    password: string;
    loginKey: string;
    webLogonToken: string;
    steamID: SteamID | string;
    authCode: string;
    twoFactorCode: string;
    rememberPassword: boolean;
    logonID: number | string;
    machineName: string;
    clientOS: EOSType;
    dontRememberMachine: boolean;
}

interface GetSteamGuardDetailsResponse {
    canTrade: boolean;
    isSteamGuardEnabled: boolean;
    timestampSteamGuardEnabled: Date | null;
    timestampMachineSteamGuardEnabled: Date | null;
    isTwoFactorEnabled: boolean;
    timestampTwoFactorEnabled: Date | null;
    isPhoneVerified: boolean;
}

interface GetCredentialChangeTimesResponse {
    timestampLastPasswordChange: Date | null;
    timestampLastPasswordReset: Date | null;
    timestampLastEmailChange: Date | null;
}

interface GetAuthSecretResponse {
    secretID: number;
    key: Buffer;
}

interface GetPrivacySettingsResponse {
    privacy_state: EPrivacyState;
    privacy_state_inventory: EPrivacyState;
    privacy_state_gifts: EPrivacyState;
    privacy_state_ownedgames: EPrivacyState;
    privacy_state_playtime: EPrivacyState;
    privacy_state_friendslist: EPrivacyState;
}

interface ServerQueryResponse {
    ip: string;
    port: number;
    players: number;
    gameport: number;
}

interface GetServerListResponse {
    addr: string;
    specport: number | null;
    steamid: SteamID;
    name: string;
    appid: number;
    gamedir: string;
    version: string;
    product: string;
    region: RegionCode;
    players: number;
    max_players: number;
    bots: number;
    map: string;
    secure: boolean;
    dedicated: boolean;
    os: 'w' | 'l';
    gametype: string;
}

interface GetProductChangesResponse {
    currentChangenumber: number;
    appChanges: AppChanges;
    packageChanges: PackageChanges;
}

interface GetProductInfoResponse {
    apps: AppInfo;
    packages: PackageInfo;
    unknownApps: number[];
    unknownPackages: number[];
}

interface GetProductAccessTokenResponse {
    appTokens: Record<string, string>;
    packageTokens: Record<string, string>;
    appDeniedTokens: number[];
    packageDeniedTokens: number[];
}

interface GetUserOwnedAppsResponse {
    game_count: number;
    games: OwnedApp[];
}

interface ProfileItemsResponse {
    profile_backgrounds: ProfileItem[];
    mini_profile_backgrounds: ProfileItem[];
    avatar_frames: ProfileItem[];
    animated_avatars: ProfileItem[];
    profile_modifiers: ProfileItem[];
}
//#endregion "Response Interfaces"

declare class SteamUser extends EventEmitter {
    constructor(options?: Options);

    static formatCurrency(amount: number, currency: ECurrencyCode): string;

    setOption(option: string, value: any): void;
    setOptions(options: Options): void;
    setSentry(sentry: Buffer | null): void;

    logOn(details: LogOnDetails): void;
    logOff(): void;
    relog(): void;
    webLogOn(): void;

    requestValidationEmail(callback?: (err: Error | null) => void): Promise<void>;

    enableTwoFactor(callback?: (err: Error | null, response: Record<string, any>) => void): Promise<Record<string, any>>;
    finalizeTwoFactor(secret: Buffer, activationCode: string, callback?: (err: Error | null) => void): Promise<void>;

    getSteamGuardDetails(callback?: (
        err: Error | null,
        canTrade: boolean,
        isSteamGuardEnabled: boolean,
        timestampSteamGuardEnabled: Date | null,
        timestampMachineSteamGuardEnabled: Date | null,
        isTwoFactorEnabled: boolean,
        timestampTwoFactorEnabled: Date | null,
        isPhoneVerified: boolean,
        ) => void,
    ): Promise<GetSteamGuardDetailsResponse>;

    getCredentialChangeTimes(callback?: (
        err: Error | null,
        timestampLastPasswordChange: Date | null,
        timestampLastPasswordReset: Date | null,
        timestampLastEmailChange: Date | null,
        ) => void,
    ): Promise<GetCredentialChangeTimesResponse>;

    getAuthSecret(callback?: (err: Error | null, secretID: number, key: Buffer) => void): Promise<GetAuthSecretResponse>;
    getPrivacySettings(callback?: (err: Error | null, response: GetPrivacySettingsResponse) => void): Promise<GetPrivacySettingsResponse>;

    kickPlayingSession(callback?: (err: Error | null) => void): Promise<void>;
    gamesPlayed(apps: number | string | PlayedGame | Array<number | string | PlayedGame>, force?: boolean): void;

    getPlayerCount(appid: number, callback?: (err: Error | null, playerCount: number) => void): Promise<number>;
    serverQuery(conditions: ServerQueryConditions | string, callback?: (err: Error | null, servers: ServerQueryResponse) => void): Promise<ServerQueryResponse>;
    getServerList(filter: string, limit?: number, callback?: (err: Error | null, servers: GetServerListResponse) => void): Promise<GetServerListResponse>;
    getServerSteamIDsByIP(ips: string[], callback?: (err: Error | null, servers: Record<string, SteamID>) => void): Promise<Record<string, SteamID>>;
    getServerIPsBySteamID(steamids: Array<SteamID | string>, callback?: (err: Error | null, servers: Record<string, string>) => void): Promise<Record<string, string>>;

    getProductChanges(sinceChangenumber: number, callback?: (
        err: Error | null,
        currentChangenumber: number,
        appChanges: AppChanges,
        packageChanges: PackageChanges,
        ) => void,
    ): Promise<GetProductChangesResponse>;
    getProductInfo(apps: Array<number | App>, packages: Array<number | Package>, inclTokens?: boolean, callback?: (
        err: Error | null,
        apps: AppInfo,
        packages: PackageInfo,
        unknownApps: number[],
        unknownPackages: number[],
        ) => void,
    ): Promise<GetProductInfoResponse>;
    getProductAccessToken(apps: number[], packages: number[], callback?: (
        err: Error | null,
        appTokens: Record<string, string>,
        packageTokens: Record<string, string>,
        appDeniedTokens: number[],
        packageDeniedTokens: number[],
        ) => void,
    ): Promise<GetProductAccessTokenResponse>;

    getOwnedApps(excludeSharedLicenses?: boolean): number[];
    ownsApp(appid: number, excludeSharedLicenses?: boolean): boolean;
    getOwnedDepots(excludeSharedLicenses?: boolean): number[];
    ownsDepot(depotid: number, excludeSharedLicenses?: boolean): boolean;
    getOwnedPackages(excludeSharedLicenses?: boolean): number[];
    ownsPackage(packageid: number, excludeSharedLicenses?: boolean): boolean;

    getStoreTagNames(language: string, tagIDs: number[], callback?: (err: Error | null, tags: GetStoreTagNamesResponse) => void): Promise<GetStoreTagNamesResponse>;
    getPublishedFileDetails(ids: number | number[], callback?: (err: Error | null, files: GetPublishedFileDetailsResponse) => void): Promise<GetPublishedFileDetailsResponse>;

    removeFriend(steamID: SteamID | string): void;
    setPersona(state: EPersonaState, name?: string): void;
    setUIMode(mode: EClientUIMode): void;

    addFriend(steamID: SteamID | string, callback?: (err: Error | null, personaName: string) => void): Promise<string>;
    blockUser(steamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;
    unblockUser(steamID: SteamID | string, callback?: (err: Error | null) => void): Promise<any>;

    createQuickInviteLink(options?: CreateQuickInviteLinkOptions, callback?: (err: Error | null, response: QuickInviteLinkResponse) => void): Promise<QuickInviteLinkResponse>;
    listQuickInviteLinks(callback?: (err: Error | null, response: QuickInviteLinkResponse[]) => void): Promise<QuickInviteLinkResponse[]>;
    revokeQuickInviteLink(linkOrToken: string, callback?: (err: Error | null) => void): Promise<void>;
    getQuickInviteLinkSteamID(link: string): SteamID | null;
    checkQuickInviteLinkValidity(link: string, callback?: (err: Error | null, response: CheckQuickInviteLinkValidityResponse) => void): Promise<CheckQuickInviteLinkValidityResponse>;
    redeemQuickInviteLink(link: string, callback?: (err: Error | null) => void): Promise<any>;

    getPersonas(steamids: Array<SteamID | string>, callback?: (err: Error | null, personas: Record<string, any>) => void): Promise<Record<string, any>>; // maybe specify the response further?
    uploadRichPresence(appid: number, richPresence: Record<string, string>): void;
    getAppRichPresenceLocalization(appID: number, language: string, callback?: (
        err: Error | null,
        response: { tokens: Record<string, string> },
        ) => void
    ): Promise<{ tokens: Record<string, string> }>;
    requestRichPresence(appid: number, steamIDs: Array<SteamID | string>, language: string, callback?: (
        err: Error | null,
        response: { users: Record<string, { richPresence: RichPresence; localizedString: string | null }> },
        ) => void
    ): Promise<{ users: Record<string, { richPresence: RichPresence; localizedString: string | null }> }>;

    getSteamLevels(steamids: Array<SteamID | string>, callback?: (err: Error | null, users: Record<string, number>) => void): Promise<Record<string, number>>;
    getAliases(userSteamIDs: Array<SteamID | string>, callback?: (
        err: Error | null,
        users: Record<string, { name: string; name_since: Date }>,
        ) => void
    ): Promise<Record<string, { name: string; name_since: Date }>>;
    getNicknames(callback?: (err: Error | null, nicknames: Record<string, string>) => void): Promise<Record<string, string>>;
    setNickname(steamID: SteamID | string, nickname: string, callback?: (err: Error | null) => void): Promise<void>;

    getGameBadgeLevel(appid: number, callback?: (
        err: Error | null,
        steamLevel?: number,
        regularBadgeLevel?: number,
        foilBadgeLavel?: number,
        ) => void
    ): Promise<{ steamLevel: number; regularBadgeLevel: number; foilBadgeLavel: number }>;

    getUserOwnedApps(steamID: SteamID | string, options?: GetUserOwnedAppsOptions, callback?: (
        err: Error | null,
        response: GetUserOwnedAppsResponse,
        ) => void
    ): Promise<GetUserOwnedAppsResponse>;

    getOwnedProfileItems(options?: { language: string }, callback?: (
        err: Error | null,
        response: ProfileItemsResponse,
        ) => void
    ): Promise<ProfileItemsResponse>;
    getEquippedProfileItems(steamID: SteamID | string, options?: { language: string }, callback?: (
        err: Error | null,
        response: ProfileItemsResponse,
        ) => void
    ): Promise<ProfileItemsResponse>;

    setProfileBackground(backgroundAssetID: number, callback?: (err: Error | null) => void): Promise<void>;

    inviteToGroup(usersteamID: SteamID | string, groupsteamID: SteamID | string): void;
    respondToGroupInvite(groupsteamID: SteamID | string, accept: boolean): void;
    createFriendsGroup(groupName: string, callback?: (err: Error | null, groupID: number) => void): Promise<{ groupID: number }>;
    deleteFriendsGroup(groupID: number, callback?: (err: Error | null) => void): Promise<void>;
    renameFriendsGroup(groupID: number, newName: string, callback?: (err: Error | null) => void): Promise<void>;
    addFriendToGroup(groupID: number, userSteamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;
    removeFriendFromGroup(groupID: any, usersteamID: SteamID | string, callback?: (err: Error | null) => void): Promise<void>;

    trade(steamID: SteamID | string): void;
    cancelTradeRequest(steamID: SteamID | string): void;

    getAssetClassInfo(language: string, appid: number, classes: Array<{ classid: number, instanceid?: number }>, callback?: (
        err: Error | null,
        descriptions: Array<Record<string, any>>,
        ) => void
    ): Promise<{ descriptions: Array<Record<string, any>> }>;

    getTradeURL(callback?: (err: Error | null, response: TradeURLResponse) => void): Promise<TradeURLResponse>;
    changeTradeURL(callback?: (err: Error | null, response: TradeURLResponse) => void): Promise<TradeURLResponse>;

    getEmoticonList(callback?: (err: Error | null, response: { emoticons: Record<string, Emoticon> }) => void): Promise<{ emoticons: Record<string, Emoticon> }>;

    redeemKey(key: string, callback?: (
        err: Error | null,
        purchaseResultDetails: EPurchaseResult,
        packageList: Record<string, string>,
        ) => void
    ): Promise<{ purchaseResultDetails: EPurchaseResult; packageList: Record<string, string> }>;

    requestFreeLicense(appIDs: number[], callback?: (
        err: Error | null,
        grantedPackageIds: number[],
        grantedAppIds: number[],
        ) => void
    ): Promise< { grantedPackageIds: number[]; grantedAppIds: number[] }>;

    getEncryptedAppTicket(appid: number, userData?: Buffer, callback?: (err: Error | null, encryptedAppTicket: Buffer) => void): Promise<{ encryptedAppTicket: Buffer }>;

    // GC INTERACTION https://github.com/DoctorMcKay/node-steam-user/wiki/Game-Coordinator

    sendToGC(appid: number, msgType: number, protoBufHeader: Record<string, any> | null, payload: Buffer | ByteBuffer, callback?: (
        appid: number,
        msgType: number,
        payload: Buffer,
    ) => void): void;

    /**
     * Emitted when gamesPlayed is called with(out) a Steam AppID, indicating that you are now (not) "playing" this game.
     * @since v4.1.0
     */
    on(event: 'appLaunched' | 'appQuit', callback: (appid: number) => void): this;
    /**
     * Emitted when a message is received from a GC but not as a job response (i.e. a callback to sendToGC).
     * @since v4.1.0
     */
    on(event: 'receivedFromGC', callback: (appid: number, msgType: number, payload: Buffer) => void): this;

    // FAMILY SHARING https://github.com/DoctorMcKay/node-steam-user/wiki/Family-Sharing

    addAuthorizedBorrowers(borrowersSteamID: Array<SteamID | string>, callback?: (err: Error | null) => void): Promise<void>;
    removeAuthorizedBorrowers(borrowerssteamID: Array<SteamID | string>, callback?: (err: Error | null) => void): Promise<void>;

    getAuthorizedBorrowers(options?: { includeCanceled?: boolean, includePending ?: boolean }, callback?: (
        err: Error | null,
        response: { borrowers: Borrowers[] },
        ) => void
    ): Promise< { borrowers: Borrowers[] } >;
    getAuthorizedSharingDevices(options?: { includeCancelled?: boolean }, callback?: (
        err: Error | null,
        response: { devices: Device[] }
        ) => void
    ): Promise< { devices: Device[] } >;
    authorizeLocalSharingDevice(deviceName: string, callback?: (
        err: Error | null, response: { deviceToken: string }) => void
    ): Promise< { deviceToken: string } >;
    deauthorizeSharingDevice(deviceToken: string, callback?: (err: Error | null) => void): Promise<void>;
    activateSharingAuthorization(ownerSteamID: SteamID | string, deviceToken: string | { deviceToken: string }): void;
    deactivateSharingAuthorization(): void;

    //#region "Enums"
    static EAccountFlags: EAccountFlags;
    static EAccountType: EAccountType;
    static EActivationCodeClass: EActivationCodeClass;
    static EAppAssociationType: EAppAssociationType;
    static EAppControllerSupportLevel: EAppControllerSupportLevel;
    static EAppInfoSection: EAppInfoSection;
    static EAppType: EAppType;
    static EAppUsageEvent: EAppUsageEvent;
    static EAudioFormat: EAudioFormat;
    static EAuthSessionResponse: EAuthSessionResponse;
    static EBillingType: EBillingType;
    static EBroadcastChatPermission: EBroadcastChatPermission;
    static EBroadcastWatchLocation: EBroadcastWatchLocation;
    static EChatAction: EChatAction;
    static EChatActionResult: EChatActionResult;
    static EChatEntryType: EChatEntryType;
    static EChatFlags: EChatFlags;
    static EChatInfoType: EChatInfoType;
    static EChatMemberStateChange: EChatMemberStateChange;
    static EChatPermission: EChatPermission;
    static EChatRoomEnterResponse: EChatRoomEnterResponse;
    static EChatRoomGroupAction: EChatRoomGroupAction;
    static EChatRoomGroupPermissions: EChatRoomGroupPermissions;
    static EChatRoomGroupRank: EChatRoomGroupRank;
    static EChatRoomGroupType: EChatRoomGroupType;
    static EChatRoomJoinState: EChatRoomJoinState;
    static EChatRoomMemberStateChange: EChatRoomMemberStateChange;
    static EChatRoomNotificationLevel: EChatRoomNotificationLevel;
    static EChatRoomServerMessage: EChatRoomServerMessage;
    static EChatRoomServerMsg: EChatRoomServerMsg;
    static EChatRoomType: EChatRoomType;
    static EClanPermission: EClanPermission;
    static EClanRank: EClanRank;
    static EClanRelationship: EClanRelationship;
    static EClientPersonaStateFlag: EClientPersonaStateFlag;
    static EClientStat: EClientStat;
    static EClientStatAggregateMethod: EClientStatAggregateMethod;
    static EClientUIMode: EClientUIMode;
    static EConnectionProtocol: EConnectionProtocol;
    static EContentDeltaChunkDataLocation: EContentDeltaChunkDataLocation;
    static EContentDownloadSourceType: EContentDownloadSourceType;
    static EControllerElementType: EControllerElementType;
    static EControllerLayoutType: EControllerLayoutType;
    static ECurrencyCode: ECurrencyCode;
    static EDenyReason: EDenyReason;
    static EDepotFileFlag: EDepotFileFlag;
    static EDisplayStatus: EDisplayStatus;
    static EDRMBlobDownloadErrorDetail: EDRMBlobDownloadErrorDetail;
    static EDRMBlobDownloadType: EDRMBlobDownloadType;
    static EEconTradeResponse: EEconTradeResponse;
    static EExternalAccountType: EExternalAccountType;
    static EFrameAccumulatedStat: EFrameAccumulatedStat;
    static EFriendFlags: EFriendFlags;
    static EFriendRelationship: EFriendRelationship;
    static EGameSearchAction: EGameSearchAction;
    static EGameSearchResult: EGameSearchResult;
    static EHIDDeviceDisconnectMethod: EHIDDeviceDisconnectMethod;
    static EHIDDeviceLocation: EHIDDeviceLocation;
    static EInputMode: EInputMode;
    static EInternalAccountType: EInternalAccountType;
    static EIntroducerRouting: EIntroducerRouting;
    static EJSRegisterMethodType: EJSRegisterMethodType;
    static EKeyEscrowUsage: EKeyEscrowUsage;
    static ELauncherType: ELauncherType;
    static ELeaderboardDataRequest: ELeaderboardDataRequest;
    static ELeaderboardDisplayType: ELeaderboardDisplayType;
    static ELeaderboardSortMethod: ELeaderboardSortMethod;
    static ELeaderboardUploadScoreMethod: ELeaderboardUploadScoreMethod;
    static ELicenseFlags: ELicenseFlags;
    static ELicenseType: ELicenseType;
    static ELobbyComparison: ELobbyComparison;
    static ELobbyFilterType: ELobbyFilterType;
    static ELobbyStatus: ELobbyStatus;
    static ELobbyType: ELobbyType;
    static ELogFileType: ELogFileType;
    static EMachineIDType: EMachineIDType;
    static EMarketingMessageFlags: EMarketingMessageFlags;
    static EMMSLobbyStatus: EMMSLobbyStatus;
    static EMouseMode: EMouseMode;
    static EMsg: EMsg;
    static EMsgClanAccountFlags: EMsgClanAccountFlags;
    static ENewsUpdateType: ENewsUpdateType;
    static ENotificationSetting: ENotificationSetting;
    static EOSType: EOSType;
    static EPackageStatus: EPackageStatus;
    static EPaymentMethod: EPaymentMethod;
    static EPersonaState: EPersonaState;
    static EPersonaStateFlag: EPersonaStateFlag;
    static EPlatformType: EPlatformType;
    static EPrivacyState: EPrivacyState;
    static EProtoAppType: EProtoAppType;
    static EProtoClanEventType: EProtoClanEventType;
    static EProtoExecutionSite: EProtoExecutionSite;
    static EPublishedFileForSaleStatus: EPublishedFileForSaleStatus;
    static EPublishedFileInappropriateProvider: EPublishedFileInappropriateProvider;
    static EPublishedFileInappropriateResult: EPublishedFileInappropriateResult;
    static EPublishedFileQueryType: EPublishedFileQueryType;
    static EPublishedFileRevision: EPublishedFileRevision;
    static EPublishedFileVisibility: EPublishedFileVisibility;
    static EPurchaseResult: EPurchaseResult;
    static EPurchaseResultDetail: EPurchaseResultDetail;
    static ERegionCode: ERegionCode;
    static ERemoteClientBroadcastMsg: ERemoteClientBroadcastMsg;
    static ERemoteClientService: ERemoteClientService;
    static ERemoteDeviceAuthorizationResult: ERemoteDeviceAuthorizationResult;
    static ERemoteDeviceStreamingResult: ERemoteDeviceStreamingResult;
    static ERemoteStoragePlatform: ERemoteStoragePlatform;
    static EResult: EResult;
    static EServerFlags: EServerFlags;
    static EServerType: EServerType;
    static ESteamDatagramMsgID: ESteamDatagramMsgID;
    static ESteamNetworkingSocketsCipher: ESteamNetworkingSocketsCipher;
    static ESteamNetworkingUDPMsgID: ESteamNetworkingUDPMsgID;
    static ESteamPipeOperationType: ESteamPipeOperationType;
    static ESteamPipeWorkType: ESteamPipeWorkType;
    static ESteamReviewScore: ESteamReviewScore;
    static EStreamActivity: EStreamActivity;
    static EStreamAudioCodec: EStreamAudioCodec;
    static EStreamBitrate: EStreamBitrate;
    static EStreamChannel: EStreamChannel;
    static EStreamControlMessage: EStreamControlMessage;
    static EStreamDataMessage: EStreamDataMessage;
    static EStreamDeviceFormFactor: EStreamDeviceFormFactor;
    static EStreamDiscoveryMessage: EStreamDiscoveryMessage;
    static EStreamFrameEvent: EStreamFrameEvent;
    static EStreamFramerateLimiter: EStreamFramerateLimiter;
    static EStreamFrameResult: EStreamFrameResult;
    static EStreamGamepadInputType: EStreamGamepadInputType;
    static EStreamHostPlayAudioPreference: EStreamHostPlayAudioPreference;
    static EStreamingDataType: EStreamingDataType;
    static EStreamInterface: EStreamInterface;
    static EStreamMouseButton: EStreamMouseButton;
    static EStreamMouseWheelDirection: EStreamMouseWheelDirection;
    static EStreamP2PScope: EStreamP2PScope;
    static EStreamQualityPreference: EStreamQualityPreference;
    static EStreamStatsMessage: EStreamStatsMessage;
    static EStreamTransport: EStreamTransport;
    static EStreamVersion: EStreamVersion;
    static EStreamVideoCodec: EStreamVideoCodec;
    static ESystemIMType: ESystemIMType;
    static ETradeOfferConfirmationMethod: ETradeOfferConfirmationMethod;
    static ETradeOfferState: ETradeOfferState;
    static EUCMFilePrivacyState: EUCMFilePrivacyState;
    static EUdpPacketType: EUdpPacketType;
    static EUniverse: EUniverse;
    static EUserReviewScorePreference: EUserReviewScorePreference;
    static EValveIndexComponent: EValveIndexComponent;
    static EVideoFormat: EVideoFormat;
    static EVoiceCallState: EVoiceCallState;
    static EWorkshopEnumerationType: EWorkshopEnumerationType;
    static EWorkshopFileAction: EWorkshopFileAction;
    static EWorkshopFileType: EWorkshopFileType;
    static E_STAR_GlyphWriteResult: E_STAR_GlyphWriteResult;
    //#endregion "Enums"
}
