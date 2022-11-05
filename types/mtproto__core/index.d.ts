// Type definitions for @mtproto/core 6.2
// Project: https://github.com/alik0211/mtproto-core
// Definitions by: Viktor Shchelochkov <https://github.com/VityaSchel>, Ali Gasymov <https://github.com/alik0211>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Required for codegen
// tslint:disable:unified-signatures
// tslint:disable:max-line-length

export default class MTProto {
  constructor(options: {
    api_id: number,
    api_hash: string,
    test?: boolean,
    customLocalStorage?: MyAsyncLocalStorage,
    storageOptions?: {
      path: string;
    };
  });

  call(method: string, params?: object, options?: {
    dcId?: number,
    syncAuth?: boolean,
  }): Promise<object>;
  call(method: 'invokeAfterMsg', params: { msg_id: number, query: unknown }): Promise<unknown>;
  call(method: 'invokeAfterMsgs', params: { msg_ids: number[], query: unknown }): Promise<unknown>;
  call(method: 'auth.sendCode', params: { phone_number: string, api_id: number, api_hash: string, settings: CodeSettings }): Promise<auth_SentCode>;
  call(method: 'auth.signUp', params: { phone_number: string, phone_code_hash: string, first_name: string, last_name: string }): Promise<auth_Authorization>;
  call(method: 'auth.signIn', params: { phone_number: string, phone_code_hash: string, phone_code: string }): Promise<auth_Authorization>;
  call(method: 'auth.logOut'): Promise<auth_LoggedOut>;
  call(method: 'auth.resetAuthorizations'): Promise<boolean>;
  call(method: 'auth.exportAuthorization', params: { dc_id: number }): Promise<auth_ExportedAuthorization>;
  call(method: 'auth.importAuthorization', params: { id: number, bytes: Uint8Array }): Promise<auth_Authorization>;
  call(method: 'auth.bindTempAuthKey', params: { perm_auth_key_id: number, nonce: number, expires_at: number, encrypted_message: Uint8Array }): Promise<boolean>;
  call(method: 'account.registerDevice', params: { no_muted: boolean, token_type: number, token: string, app_sandbox: boolean, secret: Uint8Array, other_uids: number[] }): Promise<boolean>;
  call(method: 'account.unregisterDevice', params: { token_type: number, token: string, other_uids: number[] }): Promise<boolean>;
  call(method: 'account.updateNotifySettings', params: { peer: InputNotifyPeer, settings: InputPeerNotifySettings }): Promise<boolean>;
  call(method: 'account.getNotifySettings', params: { peer: InputNotifyPeer }): Promise<PeerNotifySettings>;
  call(method: 'account.resetNotifySettings'): Promise<boolean>;
  call(method: 'account.updateProfile', params: { first_name: string, last_name: string, about: string }): Promise<User>;
  call(method: 'account.updateStatus', params: { offline: boolean }): Promise<boolean>;
  call(method: 'account.getWallPapers', params: { hash: number }): Promise<account_WallPapers>;
  call(method: 'account.reportPeer', params: { peer: InputPeer, reason: ReportReason, message: string }): Promise<boolean>;
  call(method: 'users.getUsers', params: { id: InputUser[] }): Promise<User[]>;
  call(method: 'users.getFullUser', params: { id: InputUser }): Promise<users_UserFull>;
  call(method: 'contacts.getContactIDs', params: { hash: number }): Promise<number[]>;
  call(method: 'contacts.getStatuses'): Promise<ContactStatus[]>;
  call(method: 'contacts.getContacts', params: { hash: number }): Promise<contacts_Contacts>;
  call(method: 'contacts.importContacts', params: { contacts: InputContact[] }): Promise<contacts_ImportedContacts>;
  call(method: 'contacts.deleteContacts', params: { id: InputUser[] }): Promise<Updates>;
  call(method: 'contacts.deleteByPhones', params: { phones: string[] }): Promise<boolean>;
  call(method: 'contacts.block', params: { id: InputPeer }): Promise<boolean>;
  call(method: 'contacts.unblock', params: { id: InputPeer }): Promise<boolean>;
  call(method: 'contacts.getBlocked', params: { offset: number, limit: number }): Promise<contacts_Blocked>;
  call(method: 'messages.getMessages', params: { id: InputMessage[] }): Promise<messages_Messages>;
  call(method: 'messages.getDialogs', params: { exclude_pinned: boolean, folder_id: number, offset_date: number, offset_id: number, offset_peer: InputPeer, limit: number, hash: number }): Promise<messages_Dialogs>;
  call(method: 'messages.getHistory', params: { peer: InputPeer, offset_id: number, offset_date: number, add_offset: number, limit: number, max_id: number, min_id: number, hash: number }): Promise<messages_Messages>;
  call(method: 'messages.search', params: { peer: InputPeer, q: string, from_id: InputPeer, top_msg_id: number, filter: MessagesFilter, min_date: number, max_date: number, offset_id: number, add_offset: number, limit: number, max_id: number, min_id: number, hash: number }): Promise<messages_Messages>;
  call(method: 'messages.readHistory', params: { peer: InputPeer, max_id: number }): Promise<messages_AffectedMessages>;
  call(method: 'messages.deleteHistory', params: { just_clear: boolean, revoke: boolean, peer: InputPeer, max_id: number, min_date: number, max_date: number }): Promise<messages_AffectedHistory>;
  call(method: 'messages.deleteMessages', params: { revoke: boolean, id: number[] }): Promise<messages_AffectedMessages>;
  call(method: 'messages.receivedMessages', params: { max_id: number }): Promise<ReceivedNotifyMessage[]>;
  call(method: 'messages.setTyping', params: { peer: InputPeer, top_msg_id: number, action: SendMessageAction }): Promise<boolean>;
  call(method: 'messages.sendMessage', params: { no_webpage: boolean, silent: boolean, background: boolean, clear_draft: boolean, noforwards: boolean, peer: InputPeer, reply_to_msg_id: number, message: string, random_id: number, reply_markup: ReplyMarkup, entities: MessageEntity[], schedule_date: number, send_as: InputPeer }): Promise<Updates>;
  call(method: 'messages.sendMedia', params: { silent: boolean, background: boolean, clear_draft: boolean, noforwards: boolean, peer: InputPeer, reply_to_msg_id: number, media: InputMedia, message: string, random_id: number, reply_markup: ReplyMarkup, entities: MessageEntity[], schedule_date: number, send_as: InputPeer }): Promise<Updates>;
  call(method: 'messages.forwardMessages', params: { silent: boolean, background: boolean, with_my_score: boolean, drop_author: boolean, drop_media_captions: boolean, noforwards: boolean, from_peer: InputPeer, id: number[], random_id: number[], to_peer: InputPeer, schedule_date: number, send_as: InputPeer }): Promise<Updates>;
  call(method: 'messages.reportSpam', params: { peer: InputPeer }): Promise<boolean>;
  call(method: 'messages.getPeerSettings', params: { peer: InputPeer }): Promise<messages_PeerSettings>;
  call(method: 'messages.report', params: { peer: InputPeer, id: number[], reason: ReportReason, message: string }): Promise<boolean>;
  call(method: 'messages.getChats', params: { id: number[] }): Promise<messages_Chats>;
  call(method: 'messages.getFullChat', params: { chat_id: number }): Promise<messages_ChatFull>;
  call(method: 'messages.editChatTitle', params: { chat_id: number, title: string }): Promise<Updates>;
  call(method: 'messages.editChatPhoto', params: { chat_id: number, photo: InputChatPhoto }): Promise<Updates>;
  call(method: 'messages.addChatUser', params: { chat_id: number, user_id: InputUser, fwd_limit: number }): Promise<Updates>;
  call(method: 'messages.deleteChatUser', params: { revoke_history: boolean, chat_id: number, user_id: InputUser }): Promise<Updates>;
  call(method: 'messages.createChat', params: { users: InputUser[], title: string }): Promise<Updates>;
  call(method: 'updates.getState'): Promise<updates_State>;
  call(method: 'updates.getDifference', params: { pts: number, pts_total_limit: number, date: number, qts: number }): Promise<updates_Difference>;
  call(method: 'photos.updateProfilePhoto', params: { id: InputPhoto }): Promise<photos_Photo>;
  call(method: 'photos.uploadProfilePhoto', params: { file: InputFile, video: InputFile, video_start_ts: number }): Promise<photos_Photo>;
  call(method: 'photos.deletePhotos', params: { id: InputPhoto[] }): Promise<number[]>;
  call(method: 'upload.saveFilePart', params: { file_id: number, file_part: number, bytes: Uint8Array }): Promise<boolean>;
  call(method: 'upload.getFile', params: { precise: boolean, cdn_supported: boolean, location: InputFileLocation, offset: number, limit: number }): Promise<upload_File>;
  call(method: 'help.getConfig'): Promise<Config>;
  call(method: 'help.getNearestDc'): Promise<NearestDc>;
  call(method: 'help.getAppUpdate', params: { source: string }): Promise<help_AppUpdate>;
  call(method: 'help.getInviteText'): Promise<help_InviteText>;
  call(method: 'photos.getUserPhotos', params: { user_id: InputUser, offset: number, max_id: number, limit: number }): Promise<photos_Photos>;
  call(method: 'messages.getDhConfig', params: { version: number, random_length: number }): Promise<messages_DhConfig>;
  call(method: 'messages.requestEncryption', params: { user_id: InputUser, random_id: number, g_a: Uint8Array }): Promise<EncryptedChat>;
  call(method: 'messages.acceptEncryption', params: { peer: InputEncryptedChat, g_b: Uint8Array, key_fingerprint: number }): Promise<EncryptedChat>;
  call(method: 'messages.discardEncryption', params: { delete_history: boolean, chat_id: number }): Promise<boolean>;
  call(method: 'messages.setEncryptedTyping', params: { peer: InputEncryptedChat, typing: boolean }): Promise<boolean>;
  call(method: 'messages.readEncryptedHistory', params: { peer: InputEncryptedChat, max_date: number }): Promise<boolean>;
  call(method: 'messages.sendEncrypted', params: { silent: boolean, peer: InputEncryptedChat, random_id: number, data: Uint8Array }): Promise<messages_SentEncryptedMessage>;
  call(method: 'messages.sendEncryptedFile', params: { silent: boolean, peer: InputEncryptedChat, random_id: number, data: Uint8Array, file: InputEncryptedFile }): Promise<messages_SentEncryptedMessage>;
  call(method: 'messages.sendEncryptedService', params: { peer: InputEncryptedChat, random_id: number, data: Uint8Array }): Promise<messages_SentEncryptedMessage>;
  call(method: 'messages.receivedQueue', params: { max_qts: number }): Promise<number[]>;
  call(method: 'messages.reportEncryptedSpam', params: { peer: InputEncryptedChat }): Promise<boolean>;
  call(method: 'upload.saveBigFilePart', params: { file_id: number, file_part: number, file_total_parts: number, bytes: Uint8Array }): Promise<boolean>;
  call(method: 'initConnection', params: { api_id: number, device_model: string, system_version: string, app_version: string, system_lang_code: string, lang_pack: string, lang_code: string, proxy: InputClientProxy, params: JSONValue, query: unknown }): Promise<unknown>;
  call(method: 'help.getSupport'): Promise<help_Support>;
  call(method: 'messages.readMessageContents', params: { id: number[] }): Promise<messages_AffectedMessages>;
  call(method: 'account.checkUsername', params: { username: string }): Promise<boolean>;
  call(method: 'account.updateUsername', params: { username: string }): Promise<User>;
  call(method: 'contacts.search', params: { q: string, limit: number }): Promise<contacts_Found>;
  call(method: 'account.getPrivacy', params: { key: InputPrivacyKey }): Promise<account_PrivacyRules>;
  call(method: 'account.setPrivacy', params: { key: InputPrivacyKey, rules: InputPrivacyRule[] }): Promise<account_PrivacyRules>;
  call(method: 'account.deleteAccount', params: { reason: string }): Promise<boolean>;
  call(method: 'account.getAccountTTL'): Promise<AccountDaysTTL>;
  call(method: 'account.setAccountTTL', params: { ttl: AccountDaysTTL }): Promise<boolean>;
  call(method: 'invokeWithLayer', params: { layer: number, query: unknown }): Promise<unknown>;
  call(method: 'contacts.resolveUsername', params: { username: string }): Promise<contacts_ResolvedPeer>;
  call(method: 'account.sendChangePhoneCode', params: { phone_number: string, settings: CodeSettings }): Promise<auth_SentCode>;
  call(method: 'account.changePhone', params: { phone_number: string, phone_code_hash: string, phone_code: string }): Promise<User>;
  call(method: 'messages.getStickers', params: { emoticon: string, hash: number }): Promise<messages_Stickers>;
  call(method: 'messages.getAllStickers', params: { hash: number }): Promise<messages_AllStickers>;
  call(method: 'account.updateDeviceLocked', params: { period: number }): Promise<boolean>;
  call(method: 'auth.importBotAuthorization', params: { api_id: number, api_hash: string, bot_auth_token: string }): Promise<auth_Authorization>;
  call(method: 'messages.getWebPagePreview', params: { message: string, entities: MessageEntity[] }): Promise<MessageMedia>;
  call(method: 'account.getAuthorizations'): Promise<account_Authorizations>;
  call(method: 'account.resetAuthorization', params: { hash: number }): Promise<boolean>;
  call(method: 'account.getPassword'): Promise<account_Password>;
  call(method: 'account.getPasswordSettings', params: { password: InputCheckPasswordSRP }): Promise<account_PasswordSettings>;
  call(method: 'account.updatePasswordSettings', params: { password: InputCheckPasswordSRP, new_settings: account_PasswordInputSettings }): Promise<boolean>;
  call(method: 'auth.checkPassword', params: { password: InputCheckPasswordSRP }): Promise<auth_Authorization>;
  call(method: 'auth.requestPasswordRecovery'): Promise<auth_PasswordRecovery>;
  call(method: 'auth.recoverPassword', params: { code: string, new_settings: account_PasswordInputSettings }): Promise<auth_Authorization>;
  call(method: 'invokeWithoutUpdates', params: { query: unknown }): Promise<unknown>;
  call(method: 'messages.exportChatInvite', params: { legacy_revoke_permanent: boolean, request_needed: boolean, peer: InputPeer, expire_date: number, usage_limit: number, title: string }): Promise<ExportedChatInvite>;
  call(method: 'messages.checkChatInvite', params: { hash: string }): Promise<ChatInvite>;
  call(method: 'messages.importChatInvite', params: { hash: string }): Promise<Updates>;
  call(method: 'messages.getStickerSet', params: { stickerset: InputStickerSet, hash: number }): Promise<messages_StickerSet>;
  call(method: 'messages.installStickerSet', params: { stickerset: InputStickerSet, archived: boolean }): Promise<messages_StickerSetInstallResult>;
  call(method: 'messages.uninstallStickerSet', params: { stickerset: InputStickerSet }): Promise<boolean>;
  call(method: 'messages.startBot', params: { bot: InputUser, peer: InputPeer, random_id: number, start_param: string }): Promise<Updates>;
  call(method: 'help.getAppChangelog', params: { prev_app_version: string }): Promise<Updates>;
  call(method: 'messages.getMessagesViews', params: { peer: InputPeer, id: number[], increment: boolean }): Promise<messages_MessageViews>;
  call(method: 'channels.readHistory', params: { channel: InputChannel, max_id: number }): Promise<boolean>;
  call(method: 'channels.deleteMessages', params: { channel: InputChannel, id: number[] }): Promise<messages_AffectedMessages>;
  call(method: 'channels.reportSpam', params: { channel: InputChannel, participant: InputPeer, id: number[] }): Promise<boolean>;
  call(method: 'channels.getMessages', params: { channel: InputChannel, id: InputMessage[] }): Promise<messages_Messages>;
  call(method: 'channels.getParticipants', params: { channel: InputChannel, filter: ChannelParticipantsFilter, offset: number, limit: number, hash: number }): Promise<channels_ChannelParticipants>;
  call(method: 'channels.getParticipant', params: { channel: InputChannel, participant: InputPeer }): Promise<channels_ChannelParticipant>;
  call(method: 'channels.getChannels', params: { id: InputChannel[] }): Promise<messages_Chats>;
  call(method: 'channels.getFullChannel', params: { channel: InputChannel }): Promise<messages_ChatFull>;
  call(method: 'channels.createChannel', params: { broadcast: boolean, megagroup: boolean, for_import: boolean, title: string, about: string, geo_point: InputGeoPoint, address: string }): Promise<Updates>;
  call(method: 'channels.editAdmin', params: { channel: InputChannel, user_id: InputUser, admin_rights: ChatAdminRights, rank: string }): Promise<Updates>;
  call(method: 'channels.editTitle', params: { channel: InputChannel, title: string }): Promise<Updates>;
  call(method: 'channels.editPhoto', params: { channel: InputChannel, photo: InputChatPhoto }): Promise<Updates>;
  call(method: 'channels.checkUsername', params: { channel: InputChannel, username: string }): Promise<boolean>;
  call(method: 'channels.updateUsername', params: { channel: InputChannel, username: string }): Promise<boolean>;
  call(method: 'channels.joinChannel', params: { channel: InputChannel }): Promise<Updates>;
  call(method: 'channels.leaveChannel', params: { channel: InputChannel }): Promise<Updates>;
  call(method: 'channels.inviteToChannel', params: { channel: InputChannel, users: InputUser[] }): Promise<Updates>;
  call(method: 'channels.deleteChannel', params: { channel: InputChannel }): Promise<Updates>;
  call(method: 'updates.getChannelDifference', params: { force: boolean, channel: InputChannel, filter: ChannelMessagesFilter, pts: number, limit: number }): Promise<updates_ChannelDifference>;
  call(method: 'messages.editChatAdmin', params: { chat_id: number, user_id: InputUser, is_admin: boolean }): Promise<boolean>;
  call(method: 'messages.migrateChat', params: { chat_id: number }): Promise<Updates>;
  call(method: 'messages.searchGlobal', params: { folder_id: number, q: string, filter: MessagesFilter, min_date: number, max_date: number, offset_rate: number, offset_peer: InputPeer, offset_id: number, limit: number }): Promise<messages_Messages>;
  call(method: 'messages.reorderStickerSets', params: { masks: boolean, emojis: boolean, order: number[] }): Promise<boolean>;
  call(method: 'messages.getDocumentByHash', params: { sha256: Uint8Array, size: number, mime_type: string }): Promise<Document>;
  call(method: 'messages.getSavedGifs', params: { hash: number }): Promise<messages_SavedGifs>;
  call(method: 'messages.saveGif', params: { id: InputDocument, unsave: boolean }): Promise<boolean>;
  call(method: 'messages.getInlineBotResults', params: { bot: InputUser, peer: InputPeer, geo_point: InputGeoPoint, query: string, offset: string }): Promise<messages_BotResults>;
  call(method: 'messages.setInlineBotResults', params: { gallery: boolean, private: boolean, query_id: number, results: InputBotInlineResult[], cache_time: number, next_offset: string, switch_pm: InlineBotSwitchPM }): Promise<boolean>;
  call(method: 'messages.sendInlineBotResult', params: { silent: boolean, background: boolean, clear_draft: boolean, hide_via: boolean, peer: InputPeer, reply_to_msg_id: number, random_id: number, query_id: number, id: string, schedule_date: number, send_as: InputPeer }): Promise<Updates>;
  call(method: 'channels.exportMessageLink', params: { grouped: boolean, thread: boolean, channel: InputChannel, id: number }): Promise<ExportedMessageLink>;
  call(method: 'channels.toggleSignatures', params: { channel: InputChannel, enabled: boolean }): Promise<Updates>;
  call(method: 'auth.resendCode', params: { phone_number: string, phone_code_hash: string }): Promise<auth_SentCode>;
  call(method: 'auth.cancelCode', params: { phone_number: string, phone_code_hash: string }): Promise<boolean>;
  call(method: 'messages.getMessageEditData', params: { peer: InputPeer, id: number }): Promise<messages_MessageEditData>;
  call(method: 'messages.editMessage', params: { no_webpage: boolean, peer: InputPeer, id: number, message: string, media: InputMedia, reply_markup: ReplyMarkup, entities: MessageEntity[], schedule_date: number }): Promise<Updates>;
  call(method: 'messages.editInlineBotMessage', params: { no_webpage: boolean, id: InputBotInlineMessageID, message: string, media: InputMedia, reply_markup: ReplyMarkup, entities: MessageEntity[] }): Promise<boolean>;
  call(method: 'messages.getBotCallbackAnswer', params: { game: boolean, peer: InputPeer, msg_id: number, data: Uint8Array, password: InputCheckPasswordSRP }): Promise<messages_BotCallbackAnswer>;
  call(method: 'messages.setBotCallbackAnswer', params: { alert: boolean, query_id: number, message: string, url: string, cache_time: number }): Promise<boolean>;
  call(method: 'contacts.getTopPeers', params: { correspondents: boolean, bots_pm: boolean, bots_inline: boolean, phone_calls: boolean, forward_users: boolean, forward_chats: boolean, groups: boolean, channels: boolean, offset: number, limit: number, hash: number }): Promise<contacts_TopPeers>;
  call(method: 'contacts.resetTopPeerRating', params: { category: TopPeerCategory, peer: InputPeer }): Promise<boolean>;
  call(method: 'messages.getPeerDialogs', params: { peers: InputDialogPeer[] }): Promise<messages_PeerDialogs>;
  call(method: 'messages.saveDraft', params: { no_webpage: boolean, reply_to_msg_id: number, peer: InputPeer, message: string, entities: MessageEntity[] }): Promise<boolean>;
  call(method: 'messages.getAllDrafts'): Promise<Updates>;
  call(method: 'messages.getFeaturedStickers', params: { hash: number }): Promise<messages_FeaturedStickers>;
  call(method: 'messages.readFeaturedStickers', params: { id: number[] }): Promise<boolean>;
  call(method: 'messages.getRecentStickers', params: { attached: boolean, hash: number }): Promise<messages_RecentStickers>;
  call(method: 'messages.saveRecentSticker', params: { attached: boolean, id: InputDocument, unsave: boolean }): Promise<boolean>;
  call(method: 'messages.clearRecentStickers', params: { attached: boolean }): Promise<boolean>;
  call(method: 'messages.getArchivedStickers', params: { masks: boolean, emojis: boolean, offset_id: number, limit: number }): Promise<messages_ArchivedStickers>;
  call(method: 'account.sendConfirmPhoneCode', params: { hash: string, settings: CodeSettings }): Promise<auth_SentCode>;
  call(method: 'account.confirmPhone', params: { phone_code_hash: string, phone_code: string }): Promise<boolean>;
  call(method: 'channels.getAdminedPublicChannels', params: { by_location: boolean, check_limit: boolean }): Promise<messages_Chats>;
  call(method: 'messages.getMaskStickers', params: { hash: number }): Promise<messages_AllStickers>;
  call(method: 'messages.getAttachedStickers', params: { media: InputStickeredMedia }): Promise<StickerSetCovered[]>;
  call(method: 'auth.dropTempAuthKeys', params: { except_auth_keys: number[] }): Promise<boolean>;
  call(method: 'messages.setGameScore', params: { edit_message: boolean, force: boolean, peer: InputPeer, id: number, user_id: InputUser, score: number }): Promise<Updates>;
  call(method: 'messages.setInlineGameScore', params: { edit_message: boolean, force: boolean, id: InputBotInlineMessageID, user_id: InputUser, score: number }): Promise<boolean>;
  call(method: 'messages.getGameHighScores', params: { peer: InputPeer, id: number, user_id: InputUser }): Promise<messages_HighScores>;
  call(method: 'messages.getInlineGameHighScores', params: { id: InputBotInlineMessageID, user_id: InputUser }): Promise<messages_HighScores>;
  call(method: 'messages.getCommonChats', params: { user_id: InputUser, max_id: number, limit: number }): Promise<messages_Chats>;
  call(method: 'messages.getAllChats', params: { except_ids: number[] }): Promise<messages_Chats>;
  call(method: 'help.setBotUpdatesStatus', params: { pending_updates_count: number, message: string }): Promise<boolean>;
  call(method: 'messages.getWebPage', params: { url: string, hash: number }): Promise<WebPage>;
  call(method: 'messages.toggleDialogPin', params: { pinned: boolean, peer: InputDialogPeer }): Promise<boolean>;
  call(method: 'messages.reorderPinnedDialogs', params: { force: boolean, folder_id: number, order: InputDialogPeer[] }): Promise<boolean>;
  call(method: 'messages.getPinnedDialogs', params: { folder_id: number }): Promise<messages_PeerDialogs>;
  call(method: 'bots.sendCustomRequest', params: { custom_method: string, params: DataJSON }): Promise<DataJSON>;
  call(method: 'bots.answerWebhookJSONQuery', params: { query_id: number, data: DataJSON }): Promise<boolean>;
  call(method: 'upload.getWebFile', params: { location: InputWebFileLocation, offset: number, limit: number }): Promise<upload_WebFile>;
  call(method: 'payments.getPaymentForm', params: { peer: InputPeer, msg_id: number, theme_params: DataJSON }): Promise<payments_PaymentForm>;
  call(method: 'payments.getPaymentReceipt', params: { peer: InputPeer, msg_id: number }): Promise<payments_PaymentReceipt>;
  call(method: 'payments.validateRequestedInfo', params: { save: boolean, peer: InputPeer, msg_id: number, info: PaymentRequestedInfo }): Promise<payments_ValidatedRequestedInfo>;
  call(method: 'payments.sendPaymentForm', params: { form_id: number, peer: InputPeer, msg_id: number, requested_info_id: string, shipping_option_id: string, credentials: InputPaymentCredentials, tip_amount: number }): Promise<payments_PaymentResult>;
  call(method: 'account.getTmpPassword', params: { password: InputCheckPasswordSRP, period: number }): Promise<account_TmpPassword>;
  call(method: 'payments.getSavedInfo'): Promise<payments_SavedInfo>;
  call(method: 'payments.clearSavedInfo', params: { credentials: boolean, info: boolean }): Promise<boolean>;
  call(method: 'messages.setBotShippingResults', params: { query_id: number, error: string, shipping_options: ShippingOption[] }): Promise<boolean>;
  call(method: 'messages.setBotPrecheckoutResults', params: { success: boolean, query_id: number, error: string }): Promise<boolean>;
  call(method: 'stickers.createStickerSet', params: { masks: boolean, animated: boolean, videos: boolean, user_id: InputUser, title: string, short_name: string, thumb: InputDocument, stickers: InputStickerSetItem[], software: string }): Promise<messages_StickerSet>;
  call(method: 'stickers.removeStickerFromSet', params: { sticker: InputDocument }): Promise<messages_StickerSet>;
  call(method: 'stickers.changeStickerPosition', params: { sticker: InputDocument, position: number }): Promise<messages_StickerSet>;
  call(method: 'stickers.addStickerToSet', params: { stickerset: InputStickerSet, sticker: InputStickerSetItem }): Promise<messages_StickerSet>;
  call(method: 'messages.uploadMedia', params: { peer: InputPeer, media: InputMedia }): Promise<MessageMedia>;
  call(method: 'phone.getCallConfig'): Promise<DataJSON>;
  call(method: 'phone.requestCall', params: { video: boolean, user_id: InputUser, random_id: number, g_a_hash: Uint8Array, protocol: PhoneCallProtocol }): Promise<phone_PhoneCall>;
  call(method: 'phone.acceptCall', params: { peer: InputPhoneCall, g_b: Uint8Array, protocol: PhoneCallProtocol }): Promise<phone_PhoneCall>;
  call(method: 'phone.confirmCall', params: { peer: InputPhoneCall, g_a: Uint8Array, key_fingerprint: number, protocol: PhoneCallProtocol }): Promise<phone_PhoneCall>;
  call(method: 'phone.receivedCall', params: { peer: InputPhoneCall }): Promise<boolean>;
  call(method: 'phone.discardCall', params: { video: boolean, peer: InputPhoneCall, duration: number, reason: PhoneCallDiscardReason, connection_id: number }): Promise<Updates>;
  call(method: 'phone.setCallRating', params: { user_initiative: boolean, peer: InputPhoneCall, rating: number, comment: string }): Promise<Updates>;
  call(method: 'phone.saveCallDebug', params: { peer: InputPhoneCall, debug: DataJSON }): Promise<boolean>;
  call(method: 'upload.getCdnFile', params: { file_token: Uint8Array, offset: number, limit: number }): Promise<upload_CdnFile>;
  call(method: 'upload.reuploadCdnFile', params: { file_token: Uint8Array, request_token: Uint8Array }): Promise<FileHash[]>;
  call(method: 'help.getCdnConfig'): Promise<CdnConfig>;
  call(method: 'langpack.getLangPack', params: { lang_pack: string, lang_code: string }): Promise<LangPackDifference>;
  call(method: 'langpack.getStrings', params: { lang_pack: string, lang_code: string, keys: string[] }): Promise<LangPackString[]>;
  call(method: 'langpack.getDifference', params: { lang_pack: string, lang_code: string, from_version: number }): Promise<LangPackDifference>;
  call(method: 'langpack.getLanguages', params: { lang_pack: string }): Promise<LangPackLanguage[]>;
  call(method: 'channels.editBanned', params: { channel: InputChannel, participant: InputPeer, banned_rights: ChatBannedRights }): Promise<Updates>;
  call(method: 'channels.getAdminLog', params: { channel: InputChannel, q: string, events_filter: ChannelAdminLogEventsFilter, admins: InputUser[], max_id: number, min_id: number, limit: number }): Promise<channels_AdminLogResults>;
  call(method: 'upload.getCdnFileHashes', params: { file_token: Uint8Array, offset: number }): Promise<FileHash[]>;
  call(method: 'messages.sendScreenshotNotification', params: { peer: InputPeer, reply_to_msg_id: number, random_id: number }): Promise<Updates>;
  call(method: 'channels.setStickers', params: { channel: InputChannel, stickerset: InputStickerSet }): Promise<boolean>;
  call(method: 'messages.getFavedStickers', params: { hash: number }): Promise<messages_FavedStickers>;
  call(method: 'messages.faveSticker', params: { id: InputDocument, unfave: boolean }): Promise<boolean>;
  call(method: 'channels.readMessageContents', params: { channel: InputChannel, id: number[] }): Promise<boolean>;
  call(method: 'contacts.resetSaved'): Promise<boolean>;
  call(method: 'messages.getUnreadMentions', params: { peer: InputPeer, offset_id: number, add_offset: number, limit: number, max_id: number, min_id: number }): Promise<messages_Messages>;
  call(method: 'channels.deleteHistory', params: { channel: InputChannel, max_id: number }): Promise<boolean>;
  call(method: 'help.getRecentMeUrls', params: { referer: string }): Promise<help_RecentMeUrls>;
  call(method: 'channels.togglePreHistoryHidden', params: { channel: InputChannel, enabled: boolean }): Promise<Updates>;
  call(method: 'messages.readMentions', params: { peer: InputPeer }): Promise<messages_AffectedHistory>;
  call(method: 'messages.getRecentLocations', params: { peer: InputPeer, limit: number, hash: number }): Promise<messages_Messages>;
  call(method: 'messages.sendMultiMedia', params: { silent: boolean, background: boolean, clear_draft: boolean, noforwards: boolean, peer: InputPeer, reply_to_msg_id: number, multi_media: InputSingleMedia[], schedule_date: number, send_as: InputPeer }): Promise<Updates>;
  call(method: 'messages.uploadEncryptedFile', params: { peer: InputEncryptedChat, file: InputEncryptedFile }): Promise<EncryptedFile>;
  call(method: 'account.getWebAuthorizations'): Promise<account_WebAuthorizations>;
  call(method: 'account.resetWebAuthorization', params: { hash: number }): Promise<boolean>;
  call(method: 'account.resetWebAuthorizations'): Promise<boolean>;
  call(method: 'messages.searchStickerSets', params: { exclude_featured: boolean, q: string, hash: number }): Promise<messages_FoundStickerSets>;
  call(method: 'upload.getFileHashes', params: { location: InputFileLocation, offset: number }): Promise<FileHash[]>;
  call(method: 'help.getTermsOfServiceUpdate'): Promise<help_TermsOfServiceUpdate>;
  call(method: 'help.acceptTermsOfService', params: { id: DataJSON }): Promise<boolean>;
  call(method: 'account.getAllSecureValues'): Promise<SecureValue[]>;
  call(method: 'account.getSecureValue', params: { types: SecureValueType[] }): Promise<SecureValue[]>;
  call(method: 'account.saveSecureValue', params: { value: InputSecureValue, secure_secret_id: number }): Promise<SecureValue>;
  call(method: 'account.deleteSecureValue', params: { types: SecureValueType[] }): Promise<boolean>;
  call(method: 'users.setSecureValueErrors', params: { id: InputUser, errors: SecureValueError[] }): Promise<boolean>;
  call(method: 'account.getAuthorizationForm', params: { bot_id: number, scope: string, public_key: string }): Promise<account_AuthorizationForm>;
  call(method: 'account.acceptAuthorization', params: { bot_id: number, scope: string, public_key: string, value_hashes: SecureValueHash[], credentials: SecureCredentialsEncrypted }): Promise<boolean>;
  call(method: 'account.sendVerifyPhoneCode', params: { phone_number: string, settings: CodeSettings }): Promise<auth_SentCode>;
  call(method: 'account.verifyPhone', params: { phone_number: string, phone_code_hash: string, phone_code: string }): Promise<boolean>;
  call(method: 'account.sendVerifyEmailCode', params: { email: string }): Promise<account_SentEmailCode>;
  call(method: 'account.verifyEmail', params: { email: string, code: string }): Promise<boolean>;
  call(method: 'help.getDeepLinkInfo', params: { path: string }): Promise<help_DeepLinkInfo>;
  call(method: 'contacts.getSaved'): Promise<SavedContact[]>;
  call(method: 'channels.getLeftChannels', params: { offset: number }): Promise<messages_Chats>;
  call(method: 'account.initTakeoutSession', params: { contacts: boolean, message_users: boolean, message_chats: boolean, message_megagroups: boolean, message_channels: boolean, files: boolean, file_max_size: number }): Promise<account_Takeout>;
  call(method: 'account.finishTakeoutSession', params: { success: boolean }): Promise<boolean>;
  call(method: 'messages.getSplitRanges'): Promise<MessageRange[]>;
  call(method: 'invokeWithMessagesRange', params: { range: MessageRange, query: unknown }): Promise<unknown>;
  call(method: 'invokeWithTakeout', params: { takeout_id: number, query: unknown }): Promise<unknown>;
  call(method: 'messages.markDialogUnread', params: { unread: boolean, peer: InputDialogPeer }): Promise<boolean>;
  call(method: 'messages.getDialogUnreadMarks'): Promise<DialogPeer[]>;
  call(method: 'contacts.toggleTopPeers', params: { enabled: boolean }): Promise<boolean>;
  call(method: 'messages.clearAllDrafts'): Promise<boolean>;
  call(method: 'help.getAppConfig'): Promise<JSONValue>;
  call(method: 'help.saveAppLog', params: { events: InputAppEvent[] }): Promise<boolean>;
  call(method: 'help.getPassportConfig', params: { hash: number }): Promise<help_PassportConfig>;
  call(method: 'langpack.getLanguage', params: { lang_pack: string, lang_code: string }): Promise<LangPackLanguage>;
  call(method: 'messages.updatePinnedMessage', params: { silent: boolean, unpin: boolean, pm_oneside: boolean, peer: InputPeer, id: number }): Promise<Updates>;
  call(method: 'account.confirmPasswordEmail', params: { code: string }): Promise<boolean>;
  call(method: 'account.resendPasswordEmail'): Promise<boolean>;
  call(method: 'account.cancelPasswordEmail'): Promise<boolean>;
  call(method: 'help.getSupportName'): Promise<help_SupportName>;
  call(method: 'help.getUserInfo', params: { user_id: InputUser }): Promise<help_UserInfo>;
  call(method: 'help.editUserInfo', params: { user_id: InputUser, message: string, entities: MessageEntity[] }): Promise<help_UserInfo>;
  call(method: 'account.getContactSignUpNotification'): Promise<boolean>;
  call(method: 'account.setContactSignUpNotification', params: { silent: boolean }): Promise<boolean>;
  call(method: 'account.getNotifyExceptions', params: { compare_sound: boolean, peer: InputNotifyPeer }): Promise<Updates>;
  call(method: 'messages.sendVote', params: { peer: InputPeer, msg_id: number, options: Uint8Array[] }): Promise<Updates>;
  call(method: 'messages.getPollResults', params: { peer: InputPeer, msg_id: number }): Promise<Updates>;
  call(method: 'messages.getOnlines', params: { peer: InputPeer }): Promise<ChatOnlines>;
  call(method: 'messages.editChatAbout', params: { peer: InputPeer, about: string }): Promise<boolean>;
  call(method: 'messages.editChatDefaultBannedRights', params: { peer: InputPeer, banned_rights: ChatBannedRights }): Promise<Updates>;
  call(method: 'account.getWallPaper', params: { wallpaper: InputWallPaper }): Promise<WallPaper>;
  call(method: 'account.uploadWallPaper', params: { file: InputFile, mime_type: string, settings: WallPaperSettings }): Promise<WallPaper>;
  call(method: 'account.saveWallPaper', params: { wallpaper: InputWallPaper, unsave: boolean, settings: WallPaperSettings }): Promise<boolean>;
  call(method: 'account.installWallPaper', params: { wallpaper: InputWallPaper, settings: WallPaperSettings }): Promise<boolean>;
  call(method: 'account.resetWallPapers'): Promise<boolean>;
  call(method: 'account.getAutoDownloadSettings'): Promise<account_AutoDownloadSettings>;
  call(method: 'account.saveAutoDownloadSettings', params: { low: boolean, high: boolean, settings: AutoDownloadSettings }): Promise<boolean>;
  call(method: 'messages.getEmojiKeywords', params: { lang_code: string }): Promise<EmojiKeywordsDifference>;
  call(method: 'messages.getEmojiKeywordsDifference', params: { lang_code: string, from_version: number }): Promise<EmojiKeywordsDifference>;
  call(method: 'messages.getEmojiKeywordsLanguages', params: { lang_codes: string[] }): Promise<EmojiLanguage[]>;
  call(method: 'messages.getEmojiURL', params: { lang_code: string }): Promise<EmojiURL>;
  call(method: 'folders.editPeerFolders', params: { folder_peers: InputFolderPeer[] }): Promise<Updates>;
  call(method: 'folders.deleteFolder', params: { folder_id: number }): Promise<Updates>;
  call(method: 'messages.getSearchCounters', params: { peer: InputPeer, filters: MessagesFilter[] }): Promise<messages_SearchCounter[]>;
  call(method: 'channels.getGroupsForDiscussion'): Promise<messages_Chats>;
  call(method: 'channels.setDiscussionGroup', params: { broadcast: InputChannel, group: InputChannel }): Promise<boolean>;
  call(method: 'messages.requestUrlAuth', params: { peer: InputPeer, msg_id: number, button_id: number, url: string }): Promise<UrlAuthResult>;
  call(method: 'messages.acceptUrlAuth', params: { write_allowed: boolean, peer: InputPeer, msg_id: number, button_id: number, url: string }): Promise<UrlAuthResult>;
  call(method: 'messages.hidePeerSettingsBar', params: { peer: InputPeer }): Promise<boolean>;
  call(method: 'contacts.addContact', params: { add_phone_privacy_exception: boolean, id: InputUser, first_name: string, last_name: string, phone: string }): Promise<Updates>;
  call(method: 'contacts.acceptContact', params: { id: InputUser }): Promise<Updates>;
  call(method: 'channels.editCreator', params: { channel: InputChannel, user_id: InputUser, password: InputCheckPasswordSRP }): Promise<Updates>;
  call(method: 'contacts.getLocated', params: { background: boolean, geo_point: InputGeoPoint, self_expires: number }): Promise<Updates>;
  call(method: 'channels.editLocation', params: { channel: InputChannel, geo_point: InputGeoPoint, address: string }): Promise<boolean>;
  call(method: 'channels.toggleSlowMode', params: { channel: InputChannel, seconds: number }): Promise<Updates>;
  call(method: 'messages.getScheduledHistory', params: { peer: InputPeer, hash: number }): Promise<messages_Messages>;
  call(method: 'messages.getScheduledMessages', params: { peer: InputPeer, id: number[] }): Promise<messages_Messages>;
  call(method: 'messages.sendScheduledMessages', params: { peer: InputPeer, id: number[] }): Promise<Updates>;
  call(method: 'messages.deleteScheduledMessages', params: { peer: InputPeer, id: number[] }): Promise<Updates>;
  call(method: 'account.uploadTheme', params: { file: InputFile, thumb: InputFile, file_name: string, mime_type: string }): Promise<Document>;
  call(method: 'account.createTheme', params: { slug: string, title: string, document: InputDocument, settings: InputThemeSettings[] }): Promise<Theme>;
  call(method: 'account.updateTheme', params: { format: string, theme: InputTheme, slug: string, title: string, document: InputDocument, settings: InputThemeSettings[] }): Promise<Theme>;
  call(method: 'account.saveTheme', params: { theme: InputTheme, unsave: boolean }): Promise<boolean>;
  call(method: 'account.installTheme', params: { dark: boolean, theme: InputTheme, format: string, base_theme: BaseTheme }): Promise<boolean>;
  call(method: 'account.getTheme', params: { format: string, theme: InputTheme, document_id: number }): Promise<Theme>;
  call(method: 'account.getThemes', params: { format: string, hash: number }): Promise<account_Themes>;
  call(method: 'auth.exportLoginToken', params: { api_id: number, api_hash: string, except_ids: number[] }): Promise<auth_LoginToken>;
  call(method: 'auth.importLoginToken', params: { token: Uint8Array }): Promise<auth_LoginToken>;
  call(method: 'auth.acceptLoginToken', params: { token: Uint8Array }): Promise<Authorization>;
  call(method: 'account.setContentSettings', params: { sensitive_enabled: boolean }): Promise<boolean>;
  call(method: 'account.getContentSettings'): Promise<account_ContentSettings>;
  call(method: 'channels.getInactiveChannels'): Promise<messages_InactiveChats>;
  call(method: 'account.getMultiWallPapers', params: { wallpapers: InputWallPaper[] }): Promise<WallPaper[]>;
  call(method: 'messages.getPollVotes', params: { peer: InputPeer, id: number, option: Uint8Array, offset: string, limit: number }): Promise<messages_VotesList>;
  call(method: 'messages.toggleStickerSets', params: { uninstall: boolean, archive: boolean, unarchive: boolean, stickersets: InputStickerSet[] }): Promise<boolean>;
  call(method: 'payments.getBankCardData', params: { number: string }): Promise<payments_BankCardData>;
  call(method: 'messages.getDialogFilters'): Promise<DialogFilter[]>;
  call(method: 'messages.getSuggestedDialogFilters'): Promise<DialogFilterSuggested[]>;
  call(method: 'messages.updateDialogFilter', params: { id: number, filter: DialogFilter }): Promise<boolean>;
  call(method: 'messages.updateDialogFiltersOrder', params: { order: number[] }): Promise<boolean>;
  call(method: 'stats.getBroadcastStats', params: { dark: boolean, channel: InputChannel }): Promise<stats_BroadcastStats>;
  call(method: 'stats.loadAsyncGraph', params: { token: string, x: number }): Promise<StatsGraph>;
  call(method: 'stickers.setStickerSetThumb', params: { stickerset: InputStickerSet, thumb: InputDocument }): Promise<messages_StickerSet>;
  call(method: 'bots.setBotCommands', params: { scope: BotCommandScope, lang_code: string, commands: BotCommand[] }): Promise<boolean>;
  call(method: 'messages.getOldFeaturedStickers', params: { offset: number, limit: number, hash: number }): Promise<messages_FeaturedStickers>;
  call(method: 'help.getPromoData'): Promise<help_PromoData>;
  call(method: 'help.hidePromoData', params: { peer: InputPeer }): Promise<boolean>;
  call(method: 'phone.sendSignalingData', params: { peer: InputPhoneCall, data: Uint8Array }): Promise<boolean>;
  call(method: 'stats.getMegagroupStats', params: { dark: boolean, channel: InputChannel }): Promise<stats_MegagroupStats>;
  call(method: 'account.getGlobalPrivacySettings'): Promise<GlobalPrivacySettings>;
  call(method: 'account.setGlobalPrivacySettings', params: { settings: GlobalPrivacySettings }): Promise<GlobalPrivacySettings>;
  call(method: 'help.dismissSuggestion', params: { peer: InputPeer, suggestion: string }): Promise<boolean>;
  call(method: 'help.getCountriesList', params: { lang_code: string, hash: number }): Promise<help_CountriesList>;
  call(method: 'messages.getReplies', params: { peer: InputPeer, msg_id: number, offset_id: number, offset_date: number, add_offset: number, limit: number, max_id: number, min_id: number, hash: number }): Promise<messages_Messages>;
  call(method: 'messages.getDiscussionMessage', params: { peer: InputPeer, msg_id: number }): Promise<messages_DiscussionMessage>;
  call(method: 'messages.readDiscussion', params: { peer: InputPeer, msg_id: number, read_max_id: number }): Promise<boolean>;
  call(method: 'contacts.blockFromReplies', params: { delete_message: boolean, delete_history: boolean, report_spam: boolean, msg_id: number }): Promise<Updates>;
  call(method: 'stats.getMessagePublicForwards', params: { channel: InputChannel, msg_id: number, offset_rate: number, offset_peer: InputPeer, offset_id: number, limit: number }): Promise<messages_Messages>;
  call(method: 'stats.getMessageStats', params: { dark: boolean, channel: InputChannel, msg_id: number }): Promise<stats_MessageStats>;
  call(method: 'messages.unpinAllMessages', params: { peer: InputPeer }): Promise<messages_AffectedHistory>;
  call(method: 'phone.createGroupCall', params: { rtmp_stream: boolean, peer: InputPeer, random_id: number, title: string, schedule_date: number }): Promise<Updates>;
  call(method: 'phone.joinGroupCall', params: { muted: boolean, video_stopped: boolean, call: InputGroupCall, join_as: InputPeer, invite_hash: string, params: DataJSON }): Promise<Updates>;
  call(method: 'phone.leaveGroupCall', params: { call: InputGroupCall, source: number }): Promise<Updates>;
  call(method: 'phone.inviteToGroupCall', params: { call: InputGroupCall, users: InputUser[] }): Promise<Updates>;
  call(method: 'phone.discardGroupCall', params: { call: InputGroupCall }): Promise<Updates>;
  call(method: 'phone.toggleGroupCallSettings', params: { reset_invite_hash: boolean, call: InputGroupCall, join_muted: boolean }): Promise<Updates>;
  call(method: 'phone.getGroupCall', params: { call: InputGroupCall, limit: number }): Promise<phone_GroupCall>;
  call(method: 'phone.getGroupParticipants', params: { call: InputGroupCall, ids: InputPeer[], sources: number[], offset: string, limit: number }): Promise<phone_GroupParticipants>;
  call(method: 'phone.checkGroupCall', params: { call: InputGroupCall, sources: number[] }): Promise<number[]>;
  call(method: 'messages.deleteChat', params: { chat_id: number }): Promise<boolean>;
  call(method: 'messages.deletePhoneCallHistory', params: { revoke: boolean }): Promise<messages_AffectedFoundMessages>;
  call(method: 'messages.checkHistoryImport', params: { import_head: string }): Promise<messages_HistoryImportParsed>;
  call(method: 'messages.initHistoryImport', params: { peer: InputPeer, file: InputFile, media_count: number }): Promise<messages_HistoryImport>;
  call(method: 'messages.uploadImportedMedia', params: { peer: InputPeer, import_id: number, file_name: string, media: InputMedia }): Promise<MessageMedia>;
  call(method: 'messages.startHistoryImport', params: { peer: InputPeer, import_id: number }): Promise<boolean>;
  call(method: 'messages.getExportedChatInvites', params: { revoked: boolean, peer: InputPeer, admin_id: InputUser, offset_date: number, offset_link: string, limit: number }): Promise<messages_ExportedChatInvites>;
  call(method: 'messages.getExportedChatInvite', params: { peer: InputPeer, link: string }): Promise<messages_ExportedChatInvite>;
  call(method: 'messages.editExportedChatInvite', params: { revoked: boolean, peer: InputPeer, link: string, expire_date: number, usage_limit: number, request_needed: boolean, title: string }): Promise<messages_ExportedChatInvite>;
  call(method: 'messages.deleteRevokedExportedChatInvites', params: { peer: InputPeer, admin_id: InputUser }): Promise<boolean>;
  call(method: 'messages.deleteExportedChatInvite', params: { peer: InputPeer, link: string }): Promise<boolean>;
  call(method: 'messages.getAdminsWithInvites', params: { peer: InputPeer }): Promise<messages_ChatAdminsWithInvites>;
  call(method: 'messages.getChatInviteImporters', params: { requested: boolean, peer: InputPeer, link: string, q: string, offset_date: number, offset_user: InputUser, limit: number }): Promise<messages_ChatInviteImporters>;
  call(method: 'messages.setHistoryTTL', params: { peer: InputPeer, period: number }): Promise<Updates>;
  call(method: 'account.reportProfilePhoto', params: { peer: InputPeer, photo_id: InputPhoto, reason: ReportReason, message: string }): Promise<boolean>;
  call(method: 'channels.convertToGigagroup', params: { channel: InputChannel }): Promise<Updates>;
  call(method: 'messages.checkHistoryImportPeer', params: { peer: InputPeer }): Promise<messages_CheckedHistoryImportPeer>;
  call(method: 'phone.toggleGroupCallRecord', params: { start: boolean, video: boolean, call: InputGroupCall, title: string, video_portrait: boolean }): Promise<Updates>;
  call(method: 'phone.editGroupCallParticipant', params: { call: InputGroupCall, participant: InputPeer, muted: boolean, volume: number, raise_hand: boolean, video_stopped: boolean, video_paused: boolean, presentation_paused: boolean }): Promise<Updates>;
  call(method: 'phone.editGroupCallTitle', params: { call: InputGroupCall, title: string }): Promise<Updates>;
  call(method: 'phone.getGroupCallJoinAs', params: { peer: InputPeer }): Promise<phone_JoinAsPeers>;
  call(method: 'phone.exportGroupCallInvite', params: { can_self_unmute: boolean, call: InputGroupCall }): Promise<phone_ExportedGroupCallInvite>;
  call(method: 'phone.toggleGroupCallStartSubscription', params: { call: InputGroupCall, subscribed: boolean }): Promise<Updates>;
  call(method: 'phone.startScheduledGroupCall', params: { call: InputGroupCall }): Promise<Updates>;
  call(method: 'phone.saveDefaultGroupCallJoinAs', params: { peer: InputPeer, join_as: InputPeer }): Promise<boolean>;
  call(method: 'phone.joinGroupCallPresentation', params: { call: InputGroupCall, params: DataJSON }): Promise<Updates>;
  call(method: 'phone.leaveGroupCallPresentation', params: { call: InputGroupCall }): Promise<Updates>;
  call(method: 'stickers.checkShortName', params: { short_name: string }): Promise<boolean>;
  call(method: 'stickers.suggestShortName', params: { title: string }): Promise<stickers_SuggestedShortName>;
  call(method: 'bots.resetBotCommands', params: { scope: BotCommandScope, lang_code: string }): Promise<boolean>;
  call(method: 'bots.getBotCommands', params: { scope: BotCommandScope, lang_code: string }): Promise<BotCommand[]>;
  call(method: 'account.resetPassword'): Promise<account_ResetPasswordResult>;
  call(method: 'account.declinePasswordReset'): Promise<boolean>;
  call(method: 'auth.checkRecoveryPassword', params: { code: string }): Promise<boolean>;
  call(method: 'account.getChatThemes', params: { hash: number }): Promise<account_Themes>;
  call(method: 'messages.setChatTheme', params: { peer: InputPeer, emoticon: string }): Promise<Updates>;
  call(method: 'channels.viewSponsoredMessage', params: { channel: InputChannel, random_id: Uint8Array }): Promise<boolean>;
  call(method: 'channels.getSponsoredMessages', params: { channel: InputChannel }): Promise<messages_SponsoredMessages>;
  call(method: 'messages.getMessageReadParticipants', params: { peer: InputPeer, msg_id: number }): Promise<number[]>;
  call(method: 'messages.getSearchResultsCalendar', params: { peer: InputPeer, filter: MessagesFilter, offset_id: number, offset_date: number }): Promise<messages_SearchResultsCalendar>;
  call(method: 'messages.getSearchResultsPositions', params: { peer: InputPeer, filter: MessagesFilter, offset_id: number, limit: number }): Promise<messages_SearchResultsPositions>;
  call(method: 'messages.hideChatJoinRequest', params: { approved: boolean, peer: InputPeer, user_id: InputUser }): Promise<Updates>;
  call(method: 'messages.hideAllChatJoinRequests', params: { approved: boolean, peer: InputPeer, link: string }): Promise<Updates>;
  call(method: 'messages.toggleNoForwards', params: { peer: InputPeer, enabled: boolean }): Promise<Updates>;
  call(method: 'messages.saveDefaultSendAs', params: { peer: InputPeer, send_as: InputPeer }): Promise<boolean>;
  call(method: 'channels.getSendAs', params: { peer: InputPeer }): Promise<channels_SendAsPeers>;
  call(method: 'account.setAuthorizationTTL', params: { authorization_ttl_days: number }): Promise<boolean>;
  call(method: 'account.changeAuthorizationSettings', params: { hash: number, encrypted_requests_disabled: boolean, call_requests_disabled: boolean }): Promise<boolean>;
  call(method: 'channels.deleteParticipantHistory', params: { channel: InputChannel, participant: InputPeer }): Promise<messages_AffectedHistory>;
  call(method: 'messages.sendReaction', params: { big: boolean, peer: InputPeer, msg_id: number, reaction: string }): Promise<Updates>;
  call(method: 'messages.getMessagesReactions', params: { peer: InputPeer, id: number[] }): Promise<Updates>;
  call(method: 'messages.getMessageReactionsList', params: { peer: InputPeer, id: number, reaction: string, offset: string, limit: number }): Promise<messages_MessageReactionsList>;
  call(method: 'messages.setChatAvailableReactions', params: { peer: InputPeer, available_reactions: string[] }): Promise<Updates>;
  call(method: 'messages.getAvailableReactions', params: { hash: number }): Promise<messages_AvailableReactions>;
  call(method: 'messages.setDefaultReaction', params: { reaction: string }): Promise<boolean>;
  call(method: 'messages.translateText', params: { peer: InputPeer, msg_id: number, text: string, from_lang: string, to_lang: string }): Promise<messages_TranslatedText>;
  call(method: 'messages.getUnreadReactions', params: { peer: InputPeer, offset_id: number, add_offset: number, limit: number, max_id: number, min_id: number }): Promise<messages_Messages>;
  call(method: 'messages.readReactions', params: { peer: InputPeer }): Promise<messages_AffectedHistory>;
  call(method: 'contacts.resolvePhone', params: { phone: string }): Promise<contacts_ResolvedPeer>;
  call(method: 'phone.getGroupCallStreamChannels', params: { call: InputGroupCall }): Promise<phone_GroupCallStreamChannels>;
  call(method: 'phone.getGroupCallStreamRtmpUrl', params: { peer: InputPeer, revoke: boolean }): Promise<phone_GroupCallStreamRtmpUrl>;
  call(method: 'messages.searchSentMedia', params: { q: string, filter: MessagesFilter, limit: number }): Promise<messages_Messages>;

  setDefaultDc(dcId: number): Promise<string>;

  updates: {
    on(updateName: EventType, handler: EventHandler): void;
    off(updateName: EventType): void;
    removeAllListeners(): void;
  };

  crypto: {
    getSRPParams: typeof getSRPParams;
  };
}

export interface vector {
  _: 'vector';
}
export interface error {
  _: 'error';
  code: number;
  text: string;
}
export interface inputPeerEmpty {
  _: 'inputPeerEmpty';
}
export interface inputPeerSelf {
  _: 'inputPeerSelf';
}
export interface inputPeerChat {
  _: 'inputPeerChat';
  chat_id: number;
}
export interface inputUserEmpty {
  _: 'inputUserEmpty';
}
export interface inputUserSelf {
  _: 'inputUserSelf';
}
export interface inputPhoneContact {
  _: 'inputPhoneContact';
  client_id: number;
  phone: string;
  first_name: string;
  last_name: string;
}
export interface inputFile {
  _: 'inputFile';
  id: number;
  parts: number;
  name: string;
  md5_checksum: string;
}
export interface inputMediaEmpty {
  _: 'inputMediaEmpty';
}
export interface inputMediaUploadedPhoto {
  _: 'inputMediaUploadedPhoto';
  file: InputFile;
  stickers: InputDocument[];
  ttl_seconds: number;
}
export interface inputMediaPhoto {
  _: 'inputMediaPhoto';
  id: InputPhoto;
  ttl_seconds: number;
}
export interface inputMediaGeoPoint {
  _: 'inputMediaGeoPoint';
  geo_point: InputGeoPoint;
}
export interface inputMediaContact {
  _: 'inputMediaContact';
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
}
export interface inputChatPhotoEmpty {
  _: 'inputChatPhotoEmpty';
}
export interface inputChatUploadedPhoto {
  _: 'inputChatUploadedPhoto';
  file: InputFile;
  video: InputFile;
  video_start_ts: number;
}
export interface inputChatPhoto {
  _: 'inputChatPhoto';
  id: InputPhoto;
}
export interface inputGeoPointEmpty {
  _: 'inputGeoPointEmpty';
}
export interface inputGeoPoint {
  _: 'inputGeoPoint';
  lat: number;
  long: number;
  accuracy_radius: number;
}
export interface inputPhotoEmpty {
  _: 'inputPhotoEmpty';
}
export interface inputPhoto {
  _: 'inputPhoto';
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
}
export interface inputFileLocation {
  _: 'inputFileLocation';
  volume_id: number;
  local_id: number;
  secret: number;
  file_reference: Uint8Array;
}
export interface peerUser {
  _: 'peerUser';
  user_id: number;
}
export interface peerChat {
  _: 'peerChat';
  chat_id: number;
}
export interface storage_fileUnknown {
  _: 'storage.fileUnknown';
}
export interface storage_filePartial {
  _: 'storage.filePartial';
}
export interface storage_fileJpeg {
  _: 'storage.fileJpeg';
}
export interface storage_fileGif {
  _: 'storage.fileGif';
}
export interface storage_filePng {
  _: 'storage.filePng';
}
export interface storage_filePdf {
  _: 'storage.filePdf';
}
export interface storage_fileMp3 {
  _: 'storage.fileMp3';
}
export interface storage_fileMov {
  _: 'storage.fileMov';
}
export interface storage_fileMp4 {
  _: 'storage.fileMp4';
}
export interface storage_fileWebp {
  _: 'storage.fileWebp';
}
export interface userEmpty {
  _: 'userEmpty';
  id: number;
}
export interface userProfilePhotoEmpty {
  _: 'userProfilePhotoEmpty';
}
export interface userProfilePhoto {
  _: 'userProfilePhoto';
  has_video: boolean;
  photo_id: number;
  stripped_thumb: Uint8Array;
  dc_id: number;
}
export interface userStatusEmpty {
  _: 'userStatusEmpty';
}
export interface userStatusOnline {
  _: 'userStatusOnline';
  expires: number;
}
export interface userStatusOffline {
  _: 'userStatusOffline';
  was_online: number;
}
export interface chatEmpty {
  _: 'chatEmpty';
  id: number;
}
export interface chat {
  _: 'chat';
  creator: boolean;
  left: boolean;
  deactivated: boolean;
  call_active: boolean;
  call_not_empty: boolean;
  noforwards: boolean;
  id: number;
  title: string;
  photo: ChatPhoto;
  participants_count: number;
  date: number;
  version: number;
  migrated_to: InputChannel;
  admin_rights: ChatAdminRights;
  default_banned_rights: ChatBannedRights;
}
export interface chatForbidden {
  _: 'chatForbidden';
  id: number;
  title: string;
}
export interface chatFull {
  _: 'chatFull';
  can_set_username: boolean;
  has_scheduled: boolean;
  id: number;
  about: string;
  participants: ChatParticipants;
  chat_photo: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite: ExportedChatInvite;
  bot_info: BotInfo[];
  pinned_msg_id: number;
  folder_id: number;
  call: InputGroupCall;
  ttl_period: number;
  groupcall_default_join_as: Peer;
  theme_emoticon: string;
  requests_pending: number;
  recent_requesters: number[];
  available_reactions: string[];
}
export interface chatParticipant {
  _: 'chatParticipant';
  user_id: number;
  inviter_id: number;
  date: number;
}
export interface chatParticipantsForbidden {
  _: 'chatParticipantsForbidden';
  chat_id: number;
  self_participant: ChatParticipant;
}
export interface chatParticipants {
  _: 'chatParticipants';
  chat_id: number;
  participants: ChatParticipant[];
  version: number;
}
export interface chatPhotoEmpty {
  _: 'chatPhotoEmpty';
}
export interface chatPhoto {
  _: 'chatPhoto';
  has_video: boolean;
  photo_id: number;
  stripped_thumb: Uint8Array;
  dc_id: number;
}
export interface messageEmpty {
  _: 'messageEmpty';
  id: number;
  peer_id: Peer;
}
export interface message {
  _: 'message';
  out: boolean;
  mentioned: boolean;
  media_unread: boolean;
  silent: boolean;
  post: boolean;
  from_scheduled: boolean;
  legacy: boolean;
  edit_hide: boolean;
  pinned: boolean;
  noforwards: boolean;
  id: number;
  from_id: Peer;
  peer_id: Peer;
  fwd_from: MessageFwdHeader;
  via_bot_id: number;
  reply_to: MessageReplyHeader;
  date: number;
  message: string;
  media: MessageMedia;
  reply_markup: ReplyMarkup;
  entities: MessageEntity[];
  views: number;
  forwards: number;
  replies: MessageReplies;
  edit_date: number;
  post_author: string;
  grouped_id: number;
  reactions: MessageReactions;
  restriction_reason: RestrictionReason[];
  ttl_period: number;
}
export interface messageService {
  _: 'messageService';
  out: boolean;
  mentioned: boolean;
  media_unread: boolean;
  silent: boolean;
  post: boolean;
  legacy: boolean;
  id: number;
  from_id: Peer;
  peer_id: Peer;
  reply_to: MessageReplyHeader;
  date: number;
  action: MessageAction;
  ttl_period: number;
}
export interface messageMediaEmpty {
  _: 'messageMediaEmpty';
}
export interface messageMediaPhoto {
  _: 'messageMediaPhoto';
  photo: Photo;
  ttl_seconds: number;
}
export interface messageMediaGeo {
  _: 'messageMediaGeo';
  geo: GeoPoint;
}
export interface messageMediaContact {
  _: 'messageMediaContact';
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  user_id: number;
}
export interface messageMediaUnsupported {
  _: 'messageMediaUnsupported';
}
export interface messageActionEmpty {
  _: 'messageActionEmpty';
}
export interface messageActionChatCreate {
  _: 'messageActionChatCreate';
  title: string;
  users: number[];
}
export interface messageActionChatEditTitle {
  _: 'messageActionChatEditTitle';
  title: string;
}
export interface messageActionChatEditPhoto {
  _: 'messageActionChatEditPhoto';
  photo: Photo;
}
export interface messageActionChatDeletePhoto {
  _: 'messageActionChatDeletePhoto';
}
export interface messageActionChatAddUser {
  _: 'messageActionChatAddUser';
  users: number[];
}
export interface messageActionChatDeleteUser {
  _: 'messageActionChatDeleteUser';
  user_id: number;
}
export interface dialog {
  _: 'dialog';
  pinned: boolean;
  unread_mark: boolean;
  peer: Peer;
  top_message: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  unread_mentions_count: number;
  unread_reactions_count: number;
  notify_settings: PeerNotifySettings;
  pts: number;
  draft: DraftMessage;
  folder_id: number;
}
export interface photoEmpty {
  _: 'photoEmpty';
  id: number;
}
export interface photo {
  _: 'photo';
  has_stickers: boolean;
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  date: number;
  sizes: PhotoSize[];
  video_sizes: VideoSize[];
  dc_id: number;
}
export interface photoSizeEmpty {
  _: 'photoSizeEmpty';
  type: string;
}
export interface photoSize {
  _: 'photoSize';
  type: string;
  w: number;
  h: number;
  size: number;
}
export interface photoCachedSize {
  _: 'photoCachedSize';
  type: string;
  w: number;
  h: number;
  bytes: Uint8Array;
}
export interface geoPointEmpty {
  _: 'geoPointEmpty';
}
export interface geoPoint {
  _: 'geoPoint';
  long: number;
  lat: number;
  access_hash: number;
  accuracy_radius: number;
}
export interface auth_sentCode {
  _: 'auth.sentCode';
  type: auth_SentCodeType;
  phone_code_hash: string;
  next_type: auth_CodeType;
  timeout: number;
}
export interface auth_authorization {
  _: 'auth.authorization';
  setup_password_required: boolean;
  otherwise_relogin_days: number;
  tmp_sessions: number;
  user: User;
}
export interface auth_exportedAuthorization {
  _: 'auth.exportedAuthorization';
  id: number;
  bytes: Uint8Array;
}
export interface inputNotifyPeer {
  _: 'inputNotifyPeer';
  peer: InputPeer;
}
export interface inputNotifyUsers {
  _: 'inputNotifyUsers';
}
export interface inputNotifyChats {
  _: 'inputNotifyChats';
}
export interface inputPeerNotifySettings {
  _: 'inputPeerNotifySettings';
  show_previews: boolean;
  silent: boolean;
  mute_until: number;
  sound: string;
}
export interface peerNotifySettings {
  _: 'peerNotifySettings';
  show_previews: boolean;
  silent: boolean;
  mute_until: number;
  sound: string;
}
export interface peerSettings {
  _: 'peerSettings';
  report_spam: boolean;
  add_contact: boolean;
  block_contact: boolean;
  share_contact: boolean;
  need_contacts_exception: boolean;
  report_geo: boolean;
  autoarchived: boolean;
  invite_members: boolean;
  request_chat_broadcast: boolean;
  geo_distance: number;
  request_chat_title: string;
  request_chat_date: number;
}
export interface wallPaper {
  _: 'wallPaper';
  id: number;
  creator: boolean;
  default: boolean;
  pattern: boolean;
  dark: boolean;
  access_hash: number;
  slug: string;
  document: Document;
  settings: WallPaperSettings;
}
export interface inputReportReasonSpam {
  _: 'inputReportReasonSpam';
}
export interface inputReportReasonViolence {
  _: 'inputReportReasonViolence';
}
export interface inputReportReasonPornography {
  _: 'inputReportReasonPornography';
}
export interface inputReportReasonChildAbuse {
  _: 'inputReportReasonChildAbuse';
}
export interface inputReportReasonOther {
  _: 'inputReportReasonOther';
}
export interface userFull {
  _: 'userFull';
  blocked: boolean;
  phone_calls_available: boolean;
  phone_calls_private: boolean;
  can_pin_message: boolean;
  has_scheduled: boolean;
  video_calls_available: boolean;
  id: number;
  about: string;
  settings: PeerSettings;
  profile_photo: Photo;
  notify_settings: PeerNotifySettings;
  bot_info: BotInfo;
  pinned_msg_id: number;
  common_chats_count: number;
  folder_id: number;
  ttl_period: number;
  theme_emoticon: string;
  private_forward_name: string;
}
export interface contact {
  _: 'contact';
  user_id: number;
  mutual: boolean;
}
export interface importedContact {
  _: 'importedContact';
  user_id: number;
  client_id: number;
}
export interface contactStatus {
  _: 'contactStatus';
  user_id: number;
  status: UserStatus;
}
export interface contacts_contactsNotModified {
  _: 'contacts.contactsNotModified';
}
export interface contacts_contacts {
  _: 'contacts.contacts';
  contacts: Contact[];
  saved_count: number;
  users: User[];
}
export interface contacts_importedContacts {
  _: 'contacts.importedContacts';
  imported: ImportedContact[];
  popular_invites: PopularContact[];
  retry_contacts: number[];
  users: User[];
}
export interface contacts_blocked {
  _: 'contacts.blocked';
  blocked: PeerBlocked[];
  chats: Chat[];
  users: User[];
}
export interface contacts_blockedSlice {
  _: 'contacts.blockedSlice';
  count: number;
  blocked: PeerBlocked[];
  chats: Chat[];
  users: User[];
}
export interface messages_dialogs {
  _: 'messages.dialogs';
  dialogs: Dialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface messages_dialogsSlice {
  _: 'messages.dialogsSlice';
  count: number;
  dialogs: Dialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface messages_messages {
  _: 'messages.messages';
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface messages_messagesSlice {
  _: 'messages.messagesSlice';
  inexact: boolean;
  count: number;
  next_rate: number;
  offset_id_offset: number;
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface messages_chats {
  _: 'messages.chats';
  chats: Chat[];
}
export interface messages_chatFull {
  _: 'messages.chatFull';
  full_chat: ChatFull;
  chats: Chat[];
  users: User[];
}
export interface messages_affectedHistory {
  _: 'messages.affectedHistory';
  pts: number;
  pts_count: number;
  offset: number;
}
export interface inputMessagesFilterEmpty {
  _: 'inputMessagesFilterEmpty';
}
export interface inputMessagesFilterPhotos {
  _: 'inputMessagesFilterPhotos';
}
export interface inputMessagesFilterVideo {
  _: 'inputMessagesFilterVideo';
}
export interface inputMessagesFilterPhotoVideo {
  _: 'inputMessagesFilterPhotoVideo';
}
export interface inputMessagesFilterDocument {
  _: 'inputMessagesFilterDocument';
}
export interface inputMessagesFilterUrl {
  _: 'inputMessagesFilterUrl';
}
export interface inputMessagesFilterGif {
  _: 'inputMessagesFilterGif';
}
export interface updateNewMessage {
  _: 'updateNewMessage';
  message: Message;
  pts: number;
  pts_count: number;
}
export interface updateMessageID {
  _: 'updateMessageID';
  id: number;
  random_id: number;
}
export interface updateDeleteMessages {
  _: 'updateDeleteMessages';
  messages: number[];
  pts: number;
  pts_count: number;
}
export interface updateUserTyping {
  _: 'updateUserTyping';
  user_id: number;
  action: SendMessageAction;
}
export interface updateChatUserTyping {
  _: 'updateChatUserTyping';
  chat_id: number;
  from_id: Peer;
  action: SendMessageAction;
}
export interface updateChatParticipants {
  _: 'updateChatParticipants';
  participants: ChatParticipants;
}
export interface updateUserStatus {
  _: 'updateUserStatus';
  user_id: number;
  status: UserStatus;
}
export interface updateUserName {
  _: 'updateUserName';
  user_id: number;
  first_name: string;
  last_name: string;
  username: string;
}
export interface updateUserPhoto {
  _: 'updateUserPhoto';
  user_id: number;
  date: number;
  photo: UserProfilePhoto;
  previous: boolean;
}
export interface updates_state {
  _: 'updates.state';
  pts: number;
  qts: number;
  date: number;
  seq: number;
  unread_count: number;
}
export interface updates_differenceEmpty {
  _: 'updates.differenceEmpty';
  date: number;
  seq: number;
}
export interface updates_difference {
  _: 'updates.difference';
  new_messages: Message[];
  new_encrypted_messages: EncryptedMessage[];
  other_updates: Update[];
  chats: Chat[];
  users: User[];
  state: updates_State;
}
export interface updates_differenceSlice {
  _: 'updates.differenceSlice';
  new_messages: Message[];
  new_encrypted_messages: EncryptedMessage[];
  other_updates: Update[];
  chats: Chat[];
  users: User[];
  intermediate_state: updates_State;
}
export interface updatesTooLong {
  _: 'updatesTooLong';
}
export interface updateShortMessage {
  _: 'updateShortMessage';
  out: boolean;
  mentioned: boolean;
  media_unread: boolean;
  silent: boolean;
  id: number;
  user_id: number;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from: MessageFwdHeader;
  via_bot_id: number;
  reply_to: MessageReplyHeader;
  entities: MessageEntity[];
  ttl_period: number;
}
export interface updateShortChatMessage {
  _: 'updateShortChatMessage';
  out: boolean;
  mentioned: boolean;
  media_unread: boolean;
  silent: boolean;
  id: number;
  from_id: number;
  chat_id: number;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from: MessageFwdHeader;
  via_bot_id: number;
  reply_to: MessageReplyHeader;
  entities: MessageEntity[];
  ttl_period: number;
}
export interface updateShort {
  _: 'updateShort';
  update: Update;
  date: number;
}
export interface updatesCombined {
  _: 'updatesCombined';
  updates: Update[];
  users: User[];
  chats: Chat[];
  date: number;
  seq_start: number;
  seq: number;
}
export interface updates {
  _: 'updates';
  updates: Update[];
  users: User[];
  chats: Chat[];
  date: number;
  seq: number;
}
export interface photos_photos {
  _: 'photos.photos';
  photos: Photo[];
  users: User[];
}
export interface photos_photosSlice {
  _: 'photos.photosSlice';
  count: number;
  photos: Photo[];
  users: User[];
}
export interface photos_photo {
  _: 'photos.photo';
  photo: Photo;
  users: User[];
}
export interface upload_file {
  _: 'upload.file';
  type: storage_FileType;
  mtime: number;
  bytes: Uint8Array;
}
export interface dcOption {
  _: 'dcOption';
  ipv6: boolean;
  media_only: boolean;
  tcpo_only: boolean;
  cdn: boolean;
  static: boolean;
  this_port_only: boolean;
  id: number;
  ip_address: string;
  port: number;
  secret: Uint8Array;
}
export interface config {
  _: 'config';
  phonecalls_enabled: boolean;
  default_p2p_contacts: boolean;
  preload_featured_stickers: boolean;
  ignore_phone_entities: boolean;
  revoke_pm_inbox: boolean;
  blocked_mode: boolean;
  pfs_enabled: boolean;
  force_try_ipv6: boolean;
  date: number;
  expires: number;
  test_mode: boolean;
  this_dc: number;
  dc_options: DcOption[];
  dc_txt_domain_name: string;
  chat_size_max: number;
  megagroup_size_max: number;
  forwarded_count_max: number;
  online_update_period_ms: number;
  offline_blur_timeout_ms: number;
  offline_idle_timeout_ms: number;
  online_cloud_timeout_ms: number;
  notify_cloud_delay_ms: number;
  notify_default_delay_ms: number;
  push_chat_period_ms: number;
  push_chat_limit: number;
  saved_gifs_limit: number;
  edit_time_limit: number;
  revoke_time_limit: number;
  revoke_pm_time_limit: number;
  rating_e_decay: number;
  stickers_recent_limit: number;
  stickers_faved_limit: number;
  channels_read_media_period: number;
  tmp_sessions: number;
  pinned_dialogs_count_max: number;
  pinned_infolder_count_max: number;
  call_receive_timeout_ms: number;
  call_ring_timeout_ms: number;
  call_connect_timeout_ms: number;
  call_packet_timeout_ms: number;
  me_url_prefix: string;
  autoupdate_url_prefix: string;
  gif_search_username: string;
  venue_search_username: string;
  img_search_username: string;
  static_maps_provider: string;
  caption_length_max: number;
  message_length_max: number;
  webfile_dc_id: number;
  suggested_lang_code: string;
  lang_pack_version: number;
  base_lang_pack_version: number;
}
export interface nearestDc {
  _: 'nearestDc';
  country: string;
  this_dc: number;
  nearest_dc: number;
}
export interface help_appUpdate {
  _: 'help.appUpdate';
  can_not_skip: boolean;
  id: number;
  version: string;
  text: string;
  entities: MessageEntity[];
  document: Document;
  url: string;
  sticker: Document;
}
export interface help_noAppUpdate {
  _: 'help.noAppUpdate';
}
export interface help_inviteText {
  _: 'help.inviteText';
  message: string;
}
export interface updateNewEncryptedMessage {
  _: 'updateNewEncryptedMessage';
  message: EncryptedMessage;
  qts: number;
}
export interface updateEncryptedChatTyping {
  _: 'updateEncryptedChatTyping';
  chat_id: number;
}
export interface updateEncryption {
  _: 'updateEncryption';
  chat: EncryptedChat;
  date: number;
}
export interface updateEncryptedMessagesRead {
  _: 'updateEncryptedMessagesRead';
  chat_id: number;
  max_date: number;
  date: number;
}
export interface encryptedChatEmpty {
  _: 'encryptedChatEmpty';
  id: number;
}
export interface encryptedChatWaiting {
  _: 'encryptedChatWaiting';
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
}
export interface encryptedChatRequested {
  _: 'encryptedChatRequested';
  folder_id: number;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a: Uint8Array;
}
export interface encryptedChat {
  _: 'encryptedChat';
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a_or_b: Uint8Array;
  key_fingerprint: number;
}
export interface encryptedChatDiscarded {
  _: 'encryptedChatDiscarded';
  history_deleted: boolean;
  id: number;
}
export interface inputEncryptedChat {
  _: 'inputEncryptedChat';
  chat_id: number;
  access_hash: number;
}
export interface encryptedFileEmpty {
  _: 'encryptedFileEmpty';
}
export interface encryptedFile {
  _: 'encryptedFile';
  id: number;
  access_hash: number;
  size: number;
  dc_id: number;
  key_fingerprint: number;
}
export interface inputEncryptedFileEmpty {
  _: 'inputEncryptedFileEmpty';
}
export interface inputEncryptedFileUploaded {
  _: 'inputEncryptedFileUploaded';
  id: number;
  parts: number;
  md5_checksum: string;
  key_fingerprint: number;
}
export interface inputEncryptedFile {
  _: 'inputEncryptedFile';
  id: number;
  access_hash: number;
}
export interface inputEncryptedFileLocation {
  _: 'inputEncryptedFileLocation';
  id: number;
  access_hash: number;
}
export interface encryptedMessage {
  _: 'encryptedMessage';
  random_id: number;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
  file: EncryptedFile;
}
export interface encryptedMessageService {
  _: 'encryptedMessageService';
  random_id: number;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
}
export interface messages_dhConfigNotModified {
  _: 'messages.dhConfigNotModified';
  random: Uint8Array;
}
export interface messages_dhConfig {
  _: 'messages.dhConfig';
  g: number;
  p: Uint8Array;
  version: number;
  random: Uint8Array;
}
export interface messages_sentEncryptedMessage {
  _: 'messages.sentEncryptedMessage';
  date: number;
}
export interface messages_sentEncryptedFile {
  _: 'messages.sentEncryptedFile';
  date: number;
  file: EncryptedFile;
}
export interface inputFileBig {
  _: 'inputFileBig';
  id: number;
  parts: number;
  name: string;
}
export interface inputEncryptedFileBigUploaded {
  _: 'inputEncryptedFileBigUploaded';
  id: number;
  parts: number;
  key_fingerprint: number;
}
export interface updateChatParticipantAdd {
  _: 'updateChatParticipantAdd';
  chat_id: number;
  user_id: number;
  inviter_id: number;
  date: number;
  version: number;
}
export interface updateChatParticipantDelete {
  _: 'updateChatParticipantDelete';
  chat_id: number;
  user_id: number;
  version: number;
}
export interface updateDcOptions {
  _: 'updateDcOptions';
  dc_options: DcOption[];
}
export interface inputMediaUploadedDocument {
  _: 'inputMediaUploadedDocument';
  nosound_video: boolean;
  force_file: boolean;
  file: InputFile;
  thumb: InputFile;
  mime_type: string;
  attributes: DocumentAttribute[];
  stickers: InputDocument[];
  ttl_seconds: number;
}
export interface inputMediaDocument {
  _: 'inputMediaDocument';
  id: InputDocument;
  ttl_seconds: number;
  query: string;
}
export interface messageMediaDocument {
  _: 'messageMediaDocument';
  document: Document;
  ttl_seconds: number;
}
export interface inputDocumentEmpty {
  _: 'inputDocumentEmpty';
}
export interface inputDocument {
  _: 'inputDocument';
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
}
export interface inputDocumentFileLocation {
  _: 'inputDocumentFileLocation';
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  thumb_size: string;
}
export interface documentEmpty {
  _: 'documentEmpty';
  id: number;
}
export interface document {
  _: 'document';
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  date: number;
  mime_type: string;
  size: number;
  thumbs: PhotoSize[];
  video_thumbs: VideoSize[];
  dc_id: number;
  attributes: DocumentAttribute[];
}
export interface help_support {
  _: 'help.support';
  phone_number: string;
  user: User;
}
export interface notifyPeer {
  _: 'notifyPeer';
  peer: Peer;
}
export interface notifyUsers {
  _: 'notifyUsers';
}
export interface notifyChats {
  _: 'notifyChats';
}
export interface updateNotifySettings {
  _: 'updateNotifySettings';
  peer: NotifyPeer;
  notify_settings: PeerNotifySettings;
}
export interface sendMessageTypingAction {
  _: 'sendMessageTypingAction';
}
export interface sendMessageCancelAction {
  _: 'sendMessageCancelAction';
}
export interface sendMessageRecordVideoAction {
  _: 'sendMessageRecordVideoAction';
}
export interface sendMessageUploadVideoAction {
  _: 'sendMessageUploadVideoAction';
  progress: number;
}
export interface sendMessageRecordAudioAction {
  _: 'sendMessageRecordAudioAction';
}
export interface sendMessageUploadAudioAction {
  _: 'sendMessageUploadAudioAction';
  progress: number;
}
export interface sendMessageUploadPhotoAction {
  _: 'sendMessageUploadPhotoAction';
  progress: number;
}
export interface sendMessageUploadDocumentAction {
  _: 'sendMessageUploadDocumentAction';
  progress: number;
}
export interface sendMessageGeoLocationAction {
  _: 'sendMessageGeoLocationAction';
}
export interface sendMessageChooseContactAction {
  _: 'sendMessageChooseContactAction';
}
export interface contacts_found {
  _: 'contacts.found';
  my_results: Peer[];
  results: Peer[];
  chats: Chat[];
  users: User[];
}
export interface updateServiceNotification {
  _: 'updateServiceNotification';
  popup: boolean;
  inbox_date: number;
  type: string;
  message: string;
  media: MessageMedia;
  entities: MessageEntity[];
}
export interface userStatusRecently {
  _: 'userStatusRecently';
}
export interface userStatusLastWeek {
  _: 'userStatusLastWeek';
}
export interface userStatusLastMonth {
  _: 'userStatusLastMonth';
}
export interface updatePrivacy {
  _: 'updatePrivacy';
  key: PrivacyKey;
  rules: PrivacyRule[];
}
export interface inputPrivacyKeyStatusTimestamp {
  _: 'inputPrivacyKeyStatusTimestamp';
}
export interface privacyKeyStatusTimestamp {
  _: 'privacyKeyStatusTimestamp';
}
export interface inputPrivacyValueAllowContacts {
  _: 'inputPrivacyValueAllowContacts';
}
export interface inputPrivacyValueAllowAll {
  _: 'inputPrivacyValueAllowAll';
}
export interface inputPrivacyValueAllowUsers {
  _: 'inputPrivacyValueAllowUsers';
  users: InputUser[];
}
export interface inputPrivacyValueDisallowContacts {
  _: 'inputPrivacyValueDisallowContacts';
}
export interface inputPrivacyValueDisallowAll {
  _: 'inputPrivacyValueDisallowAll';
}
export interface inputPrivacyValueDisallowUsers {
  _: 'inputPrivacyValueDisallowUsers';
  users: InputUser[];
}
export interface privacyValueAllowContacts {
  _: 'privacyValueAllowContacts';
}
export interface privacyValueAllowAll {
  _: 'privacyValueAllowAll';
}
export interface privacyValueAllowUsers {
  _: 'privacyValueAllowUsers';
  users: number[];
}
export interface privacyValueDisallowContacts {
  _: 'privacyValueDisallowContacts';
}
export interface privacyValueDisallowAll {
  _: 'privacyValueDisallowAll';
}
export interface privacyValueDisallowUsers {
  _: 'privacyValueDisallowUsers';
  users: number[];
}
export interface account_privacyRules {
  _: 'account.privacyRules';
  rules: PrivacyRule[];
  chats: Chat[];
  users: User[];
}
export interface accountDaysTTL {
  _: 'accountDaysTTL';
  days: number;
}
export interface updateUserPhone {
  _: 'updateUserPhone';
  user_id: number;
  phone: string;
}
export interface documentAttributeImageSize {
  _: 'documentAttributeImageSize';
  w: number;
  h: number;
}
export interface documentAttributeAnimated {
  _: 'documentAttributeAnimated';
}
export interface documentAttributeSticker {
  _: 'documentAttributeSticker';
  mask: boolean;
  alt: string;
  stickerset: InputStickerSet;
  mask_coords: MaskCoords;
}
export interface documentAttributeVideo {
  _: 'documentAttributeVideo';
  round_message: boolean;
  supports_streaming: boolean;
  duration: number;
  w: number;
  h: number;
}
export interface documentAttributeAudio {
  _: 'documentAttributeAudio';
  voice: boolean;
  duration: number;
  title: string;
  performer: string;
  waveform: Uint8Array;
}
export interface documentAttributeFilename {
  _: 'documentAttributeFilename';
  file_name: string;
}
export interface messages_stickersNotModified {
  _: 'messages.stickersNotModified';
}
export interface messages_stickers {
  _: 'messages.stickers';
  hash: number;
  stickers: Document[];
}
export interface stickerPack {
  _: 'stickerPack';
  emoticon: string;
  documents: number[];
}
export interface messages_allStickersNotModified {
  _: 'messages.allStickersNotModified';
}
export interface messages_allStickers {
  _: 'messages.allStickers';
  hash: number;
  sets: StickerSet[];
}
export interface updateReadHistoryInbox {
  _: 'updateReadHistoryInbox';
  folder_id: number;
  peer: Peer;
  max_id: number;
  still_unread_count: number;
  pts: number;
  pts_count: number;
}
export interface updateReadHistoryOutbox {
  _: 'updateReadHistoryOutbox';
  peer: Peer;
  max_id: number;
  pts: number;
  pts_count: number;
}
export interface messages_affectedMessages {
  _: 'messages.affectedMessages';
  pts: number;
  pts_count: number;
}
export interface updateWebPage {
  _: 'updateWebPage';
  webpage: WebPage;
  pts: number;
  pts_count: number;
}
export interface webPageEmpty {
  _: 'webPageEmpty';
  id: number;
}
export interface webPagePending {
  _: 'webPagePending';
  id: number;
  date: number;
}
export interface webPage {
  _: 'webPage';
  id: number;
  url: string;
  display_url: string;
  hash: number;
  type: string;
  site_name: string;
  title: string;
  description: string;
  photo: Photo;
  embed_url: string;
  embed_type: string;
  embed_width: number;
  embed_height: number;
  duration: number;
  author: string;
  document: Document;
  cached_page: Page;
  attributes: WebPageAttribute[];
}
export interface messageMediaWebPage {
  _: 'messageMediaWebPage';
  webpage: WebPage;
}
export interface authorization {
  _: 'authorization';
  current: boolean;
  official_app: boolean;
  password_pending: boolean;
  encrypted_requests_disabled: boolean;
  call_requests_disabled: boolean;
  hash: number;
  device_model: string;
  platform: string;
  system_version: string;
  api_id: number;
  app_name: string;
  app_version: string;
  date_created: number;
  date_active: number;
  ip: string;
  country: string;
  region: string;
}
export interface account_authorizations {
  _: 'account.authorizations';
  authorization_ttl_days: number;
  authorizations: Authorization[];
}
export interface account_password {
  _: 'account.password';
  has_recovery: boolean;
  has_secure_values: boolean;
  has_password: boolean;
  current_algo: PasswordKdfAlgo;
  srp_B: Uint8Array;
  srp_id: number;
  hint: string;
  email_unconfirmed_pattern: string;
  new_algo: PasswordKdfAlgo;
  new_secure_algo: SecurePasswordKdfAlgo;
  secure_random: Uint8Array;
  pending_reset_date: number;
}
export interface account_passwordSettings {
  _: 'account.passwordSettings';
  email: string;
  secure_settings: SecureSecretSettings;
}
export interface account_passwordInputSettings {
  _: 'account.passwordInputSettings';
  new_algo: PasswordKdfAlgo;
  new_password_hash: Uint8Array;
  hint: string;
  email: string;
  new_secure_settings: SecureSecretSettings;
}
export interface auth_passwordRecovery {
  _: 'auth.passwordRecovery';
  email_pattern: string;
}
export interface inputMediaVenue {
  _: 'inputMediaVenue';
  geo_point: InputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}
export interface messageMediaVenue {
  _: 'messageMediaVenue';
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}
export interface receivedNotifyMessage {
  _: 'receivedNotifyMessage';
  id: number;
}
export interface chatInviteExported {
  _: 'chatInviteExported';
  revoked: boolean;
  permanent: boolean;
  request_needed: boolean;
  link: string;
  admin_id: number;
  date: number;
  start_date: number;
  expire_date: number;
  usage_limit: number;
  usage: number;
  requested: number;
  title: string;
}
export interface chatInviteAlready {
  _: 'chatInviteAlready';
  chat: Chat;
}
export interface chatInvite {
  _: 'chatInvite';
  channel: boolean;
  broadcast: boolean;
  public: boolean;
  megagroup: boolean;
  request_needed: boolean;
  title: string;
  about: string;
  photo: Photo;
  participants_count: number;
  participants: User[];
}
export interface messageActionChatJoinedByLink {
  _: 'messageActionChatJoinedByLink';
  inviter_id: number;
}
export interface updateReadMessagesContents {
  _: 'updateReadMessagesContents';
  messages: number[];
  pts: number;
  pts_count: number;
}
export interface inputStickerSetEmpty {
  _: 'inputStickerSetEmpty';
}
export interface inputStickerSetID {
  _: 'inputStickerSetID';
  id: number;
  access_hash: number;
}
export interface inputStickerSetShortName {
  _: 'inputStickerSetShortName';
  short_name: string;
}
export interface stickerSet {
  _: 'stickerSet';
  archived: boolean;
  official: boolean;
  masks: boolean;
  animated: boolean;
  videos: boolean;
  emojis: boolean;
  installed_date: number;
  id: number;
  access_hash: number;
  title: string;
  short_name: string;
  thumbs: PhotoSize[];
  thumb_dc_id: number;
  thumb_version: number;
  count: number;
  hash: number;
}
export interface messages_stickerSet {
  _: 'messages.stickerSet';
  set: StickerSet;
  packs: StickerPack[];
  documents: Document[];
}
export interface user {
  _: 'user';
  self: boolean;
  contact: boolean;
  mutual_contact: boolean;
  deleted: boolean;
  bot: boolean;
  bot_chat_history: boolean;
  bot_nochats: boolean;
  verified: boolean;
  restricted: boolean;
  min: boolean;
  bot_inline_geo: boolean;
  support: boolean;
  scam: boolean;
  apply_min_photo: boolean;
  fake: boolean;
  id: number;
  access_hash: number;
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
  photo: UserProfilePhoto;
  status: UserStatus;
  bot_info_version: number;
  restriction_reason: RestrictionReason[];
  bot_inline_placeholder: string;
  lang_code: string;
}
export interface botCommand {
  _: 'botCommand';
  command: string;
  description: string;
}
export interface botInfo {
  _: 'botInfo';
  user_id: number;
  description: string;
  commands: BotCommand[];
}
export interface keyboardButton {
  _: 'keyboardButton';
  text: string;
}
export interface keyboardButtonRow {
  _: 'keyboardButtonRow';
  buttons: KeyboardButton[];
}
export interface replyKeyboardHide {
  _: 'replyKeyboardHide';
  selective: boolean;
}
export interface replyKeyboardForceReply {
  _: 'replyKeyboardForceReply';
  single_use: boolean;
  selective: boolean;
  placeholder: string;
}
export interface replyKeyboardMarkup {
  _: 'replyKeyboardMarkup';
  resize: boolean;
  single_use: boolean;
  selective: boolean;
  rows: KeyboardButtonRow[];
  placeholder: string;
}
export interface inputPeerUser {
  _: 'inputPeerUser';
  user_id: number;
  access_hash: number;
}
export interface inputUser {
  _: 'inputUser';
  user_id: number;
  access_hash: number;
}
export interface messageEntityUnknown {
  _: 'messageEntityUnknown';
  offset: number;
  length: number;
}
export interface messageEntityMention {
  _: 'messageEntityMention';
  offset: number;
  length: number;
}
export interface messageEntityHashtag {
  _: 'messageEntityHashtag';
  offset: number;
  length: number;
}
export interface messageEntityBotCommand {
  _: 'messageEntityBotCommand';
  offset: number;
  length: number;
}
export interface messageEntityUrl {
  _: 'messageEntityUrl';
  offset: number;
  length: number;
}
export interface messageEntityEmail {
  _: 'messageEntityEmail';
  offset: number;
  length: number;
}
export interface messageEntityBold {
  _: 'messageEntityBold';
  offset: number;
  length: number;
}
export interface messageEntityItalic {
  _: 'messageEntityItalic';
  offset: number;
  length: number;
}
export interface messageEntityCode {
  _: 'messageEntityCode';
  offset: number;
  length: number;
}
export interface messageEntityPre {
  _: 'messageEntityPre';
  offset: number;
  length: number;
  language: string;
}
export interface messageEntityTextUrl {
  _: 'messageEntityTextUrl';
  offset: number;
  length: number;
  url: string;
}
export interface updateShortSentMessage {
  _: 'updateShortSentMessage';
  out: boolean;
  id: number;
  pts: number;
  pts_count: number;
  date: number;
  media: MessageMedia;
  entities: MessageEntity[];
  ttl_period: number;
}
export interface inputChannelEmpty {
  _: 'inputChannelEmpty';
}
export interface inputChannel {
  _: 'inputChannel';
  channel_id: number;
  access_hash: number;
}
export interface peerChannel {
  _: 'peerChannel';
  channel_id: number;
}
export interface inputPeerChannel {
  _: 'inputPeerChannel';
  channel_id: number;
  access_hash: number;
}
export interface channel {
  _: 'channel';
  creator: boolean;
  left: boolean;
  broadcast: boolean;
  verified: boolean;
  megagroup: boolean;
  restricted: boolean;
  signatures: boolean;
  min: boolean;
  scam: boolean;
  has_link: boolean;
  has_geo: boolean;
  slowmode_enabled: boolean;
  call_active: boolean;
  call_not_empty: boolean;
  fake: boolean;
  gigagroup: boolean;
  noforwards: boolean;
  join_to_send: boolean;
  join_request: boolean;
  id: number;
  access_hash: number;
  title: string;
  username: string;
  photo: ChatPhoto;
  date: number;
  restriction_reason: RestrictionReason[];
  admin_rights: ChatAdminRights;
  banned_rights: ChatBannedRights;
  default_banned_rights: ChatBannedRights;
  participants_count: number;
}
export interface channelForbidden {
  _: 'channelForbidden';
  broadcast: boolean;
  megagroup: boolean;
  id: number;
  access_hash: number;
  title: string;
  until_date: number;
}
export interface contacts_resolvedPeer {
  _: 'contacts.resolvedPeer';
  peer: Peer;
  chats: Chat[];
  users: User[];
}
export interface channelFull {
  _: 'channelFull';
  can_view_participants: boolean;
  can_set_username: boolean;
  can_set_stickers: boolean;
  hidden_prehistory: boolean;
  can_set_location: boolean;
  has_scheduled: boolean;
  can_view_stats: boolean;
  blocked: boolean;
  id: number;
  about: string;
  participants_count: number;
  admins_count: number;
  kicked_count: number;
  banned_count: number;
  online_count: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  chat_photo: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite: ExportedChatInvite;
  bot_info: BotInfo[];
  migrated_from_chat_id: number;
  migrated_from_max_id: number;
  pinned_msg_id: number;
  stickerset: StickerSet;
  available_min_id: number;
  folder_id: number;
  linked_chat_id: number;
  location: ChannelLocation;
  slowmode_seconds: number;
  slowmode_next_send_date: number;
  stats_dc: number;
  pts: number;
  call: InputGroupCall;
  ttl_period: number;
  pending_suggestions: string[];
  groupcall_default_join_as: Peer;
  theme_emoticon: string;
  requests_pending: number;
  recent_requesters: number[];
  default_send_as: Peer;
  available_reactions: string[];
}
export interface messageRange {
  _: 'messageRange';
  min_id: number;
  max_id: number;
}
export interface messages_channelMessages {
  _: 'messages.channelMessages';
  inexact: boolean;
  pts: number;
  count: number;
  offset_id_offset: number;
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface messageActionChannelCreate {
  _: 'messageActionChannelCreate';
  title: string;
}
export interface updateChannelTooLong {
  _: 'updateChannelTooLong';
  channel_id: number;
  pts: number;
}
export interface updateChannel {
  _: 'updateChannel';
  channel_id: number;
}
export interface updateNewChannelMessage {
  _: 'updateNewChannelMessage';
  message: Message;
  pts: number;
  pts_count: number;
}
export interface updateReadChannelInbox {
  _: 'updateReadChannelInbox';
  folder_id: number;
  channel_id: number;
  max_id: number;
  still_unread_count: number;
  pts: number;
}
export interface updateDeleteChannelMessages {
  _: 'updateDeleteChannelMessages';
  channel_id: number;
  messages: number[];
  pts: number;
  pts_count: number;
}
export interface updateChannelMessageViews {
  _: 'updateChannelMessageViews';
  channel_id: number;
  id: number;
  views: number;
}
export interface updates_channelDifferenceEmpty {
  _: 'updates.channelDifferenceEmpty';
  final: boolean;
  pts: number;
  timeout: number;
}
export interface updates_channelDifferenceTooLong {
  _: 'updates.channelDifferenceTooLong';
  final: boolean;
  timeout: number;
  dialog: Dialog;
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface updates_channelDifference {
  _: 'updates.channelDifference';
  final: boolean;
  pts: number;
  timeout: number;
  new_messages: Message[];
  other_updates: Update[];
  chats: Chat[];
  users: User[];
}
export interface channelMessagesFilterEmpty {
  _: 'channelMessagesFilterEmpty';
}
export interface channelMessagesFilter {
  _: 'channelMessagesFilter';
  exclude_new_messages: boolean;
  ranges: MessageRange[];
}
export interface channelParticipant {
  _: 'channelParticipant';
  user_id: number;
  date: number;
}
export interface channelParticipantSelf {
  _: 'channelParticipantSelf';
  via_request: boolean;
  user_id: number;
  inviter_id: number;
  date: number;
}
export interface channelParticipantCreator {
  _: 'channelParticipantCreator';
  user_id: number;
  admin_rights: ChatAdminRights;
  rank: string;
}
export interface channelParticipantsRecent {
  _: 'channelParticipantsRecent';
}
export interface channelParticipantsAdmins {
  _: 'channelParticipantsAdmins';
}
export interface channelParticipantsKicked {
  _: 'channelParticipantsKicked';
  q: string;
}
export interface channels_channelParticipants {
  _: 'channels.channelParticipants';
  count: number;
  participants: ChannelParticipant[];
  chats: Chat[];
  users: User[];
}
export interface channels_channelParticipant {
  _: 'channels.channelParticipant';
  participant: ChannelParticipant;
  chats: Chat[];
  users: User[];
}
export interface chatParticipantCreator {
  _: 'chatParticipantCreator';
  user_id: number;
}
export interface chatParticipantAdmin {
  _: 'chatParticipantAdmin';
  user_id: number;
  inviter_id: number;
  date: number;
}
export interface updateChatParticipantAdmin {
  _: 'updateChatParticipantAdmin';
  chat_id: number;
  user_id: number;
  is_admin: boolean;
  version: number;
}
export interface messageActionChatMigrateTo {
  _: 'messageActionChatMigrateTo';
  channel_id: number;
}
export interface messageActionChannelMigrateFrom {
  _: 'messageActionChannelMigrateFrom';
  title: string;
  chat_id: number;
}
export interface channelParticipantsBots {
  _: 'channelParticipantsBots';
}
export interface help_termsOfService {
  _: 'help.termsOfService';
  popup: boolean;
  id: DataJSON;
  text: string;
  entities: MessageEntity[];
  min_age_confirm: number;
}
export interface updateNewStickerSet {
  _: 'updateNewStickerSet';
  stickerset: messages_StickerSet;
}
export interface updateStickerSetsOrder {
  _: 'updateStickerSetsOrder';
  masks: boolean;
  emojis: boolean;
  order: number[];
}
export interface updateStickerSets {
  _: 'updateStickerSets';
}
export interface messages_savedGifsNotModified {
  _: 'messages.savedGifsNotModified';
}
export interface messages_savedGifs {
  _: 'messages.savedGifs';
  hash: number;
  gifs: Document[];
}
export interface updateSavedGifs {
  _: 'updateSavedGifs';
}
export interface inputBotInlineMessageMediaAuto {
  _: 'inputBotInlineMessageMediaAuto';
  message: string;
  entities: MessageEntity[];
  reply_markup: ReplyMarkup;
}
export interface inputBotInlineMessageText {
  _: 'inputBotInlineMessageText';
  no_webpage: boolean;
  message: string;
  entities: MessageEntity[];
  reply_markup: ReplyMarkup;
}
export interface inputBotInlineResult {
  _: 'inputBotInlineResult';
  id: string;
  type: string;
  title: string;
  description: string;
  url: string;
  thumb: InputWebDocument;
  content: InputWebDocument;
  send_message: InputBotInlineMessage;
}
export interface botInlineMessageMediaAuto {
  _: 'botInlineMessageMediaAuto';
  message: string;
  entities: MessageEntity[];
  reply_markup: ReplyMarkup;
}
export interface botInlineMessageText {
  _: 'botInlineMessageText';
  no_webpage: boolean;
  message: string;
  entities: MessageEntity[];
  reply_markup: ReplyMarkup;
}
export interface botInlineResult {
  _: 'botInlineResult';
  id: string;
  type: string;
  title: string;
  description: string;
  url: string;
  thumb: WebDocument;
  content: WebDocument;
  send_message: BotInlineMessage;
}
export interface messages_botResults {
  _: 'messages.botResults';
  gallery: boolean;
  query_id: number;
  next_offset: string;
  switch_pm: InlineBotSwitchPM;
  results: BotInlineResult[];
  cache_time: number;
  users: User[];
}
export interface updateBotInlineQuery {
  _: 'updateBotInlineQuery';
  query_id: number;
  user_id: number;
  query: string;
  geo: GeoPoint;
  peer_type: InlineQueryPeerType;
  offset: string;
}
export interface updateBotInlineSend {
  _: 'updateBotInlineSend';
  user_id: number;
  query: string;
  geo: GeoPoint;
  id: string;
  msg_id: InputBotInlineMessageID;
}
export interface inputMessagesFilterVoice {
  _: 'inputMessagesFilterVoice';
}
export interface inputMessagesFilterMusic {
  _: 'inputMessagesFilterMusic';
}
export interface inputPrivacyKeyChatInvite {
  _: 'inputPrivacyKeyChatInvite';
}
export interface privacyKeyChatInvite {
  _: 'privacyKeyChatInvite';
}
export interface exportedMessageLink {
  _: 'exportedMessageLink';
  link: string;
  html: string;
}
export interface messageFwdHeader {
  _: 'messageFwdHeader';
  imported: boolean;
  from_id: Peer;
  from_name: string;
  date: number;
  channel_post: number;
  post_author: string;
  saved_from_peer: Peer;
  saved_from_msg_id: number;
  psa_type: string;
}
export interface updateEditChannelMessage {
  _: 'updateEditChannelMessage';
  message: Message;
  pts: number;
  pts_count: number;
}
export interface messageActionPinMessage {
  _: 'messageActionPinMessage';
}
export interface auth_codeTypeSms {
  _: 'auth.codeTypeSms';
}
export interface auth_codeTypeCall {
  _: 'auth.codeTypeCall';
}
export interface auth_codeTypeFlashCall {
  _: 'auth.codeTypeFlashCall';
}
export interface auth_sentCodeTypeApp {
  _: 'auth.sentCodeTypeApp';
  length: number;
}
export interface auth_sentCodeTypeSms {
  _: 'auth.sentCodeTypeSms';
  length: number;
}
export interface auth_sentCodeTypeCall {
  _: 'auth.sentCodeTypeCall';
  length: number;
}
export interface auth_sentCodeTypeFlashCall {
  _: 'auth.sentCodeTypeFlashCall';
  pattern: string;
}
export interface keyboardButtonUrl {
  _: 'keyboardButtonUrl';
  text: string;
  url: string;
}
export interface keyboardButtonCallback {
  _: 'keyboardButtonCallback';
  requires_password: boolean;
  text: string;
  data: Uint8Array;
}
export interface keyboardButtonRequestPhone {
  _: 'keyboardButtonRequestPhone';
  text: string;
}
export interface keyboardButtonRequestGeoLocation {
  _: 'keyboardButtonRequestGeoLocation';
  text: string;
}
export interface keyboardButtonSwitchInline {
  _: 'keyboardButtonSwitchInline';
  same_peer: boolean;
  text: string;
  query: string;
}
export interface replyInlineMarkup {
  _: 'replyInlineMarkup';
  rows: KeyboardButtonRow[];
}
export interface messages_botCallbackAnswer {
  _: 'messages.botCallbackAnswer';
  alert: boolean;
  has_url: boolean;
  native_ui: boolean;
  message: string;
  url: string;
  cache_time: number;
}
export interface updateBotCallbackQuery {
  _: 'updateBotCallbackQuery';
  query_id: number;
  user_id: number;
  peer: Peer;
  msg_id: number;
  chat_instance: number;
  data: Uint8Array;
  game_short_name: string;
}
export interface messages_messageEditData {
  _: 'messages.messageEditData';
  caption: boolean;
}
export interface updateEditMessage {
  _: 'updateEditMessage';
  message: Message;
  pts: number;
  pts_count: number;
}
export interface inputBotInlineMessageMediaGeo {
  _: 'inputBotInlineMessageMediaGeo';
  geo_point: InputGeoPoint;
  heading: number;
  period: number;
  proximity_notification_radius: number;
  reply_markup: ReplyMarkup;
}
export interface inputBotInlineMessageMediaVenue {
  _: 'inputBotInlineMessageMediaVenue';
  geo_point: InputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup: ReplyMarkup;
}
export interface inputBotInlineMessageMediaContact {
  _: 'inputBotInlineMessageMediaContact';
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup: ReplyMarkup;
}
export interface botInlineMessageMediaGeo {
  _: 'botInlineMessageMediaGeo';
  geo: GeoPoint;
  heading: number;
  period: number;
  proximity_notification_radius: number;
  reply_markup: ReplyMarkup;
}
export interface botInlineMessageMediaVenue {
  _: 'botInlineMessageMediaVenue';
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup: ReplyMarkup;
}
export interface botInlineMessageMediaContact {
  _: 'botInlineMessageMediaContact';
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup: ReplyMarkup;
}
export interface inputBotInlineResultPhoto {
  _: 'inputBotInlineResultPhoto';
  id: string;
  type: string;
  photo: InputPhoto;
  send_message: InputBotInlineMessage;
}
export interface inputBotInlineResultDocument {
  _: 'inputBotInlineResultDocument';
  id: string;
  type: string;
  title: string;
  description: string;
  document: InputDocument;
  send_message: InputBotInlineMessage;
}
export interface botInlineMediaResult {
  _: 'botInlineMediaResult';
  id: string;
  type: string;
  photo: Photo;
  document: Document;
  title: string;
  description: string;
  send_message: BotInlineMessage;
}
export interface inputBotInlineMessageID {
  _: 'inputBotInlineMessageID';
  dc_id: number;
  id: number;
  access_hash: number;
}
export interface updateInlineBotCallbackQuery {
  _: 'updateInlineBotCallbackQuery';
  query_id: number;
  user_id: number;
  msg_id: InputBotInlineMessageID;
  chat_instance: number;
  data: Uint8Array;
  game_short_name: string;
}
export interface inlineBotSwitchPM {
  _: 'inlineBotSwitchPM';
  text: string;
  start_param: string;
}
export interface messages_peerDialogs {
  _: 'messages.peerDialogs';
  dialogs: Dialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
  state: updates_State;
}
export interface topPeer {
  _: 'topPeer';
  peer: Peer;
  rating: number;
}
export interface topPeerCategoryBotsPM {
  _: 'topPeerCategoryBotsPM';
}
export interface topPeerCategoryBotsInline {
  _: 'topPeerCategoryBotsInline';
}
export interface topPeerCategoryCorrespondents {
  _: 'topPeerCategoryCorrespondents';
}
export interface topPeerCategoryGroups {
  _: 'topPeerCategoryGroups';
}
export interface topPeerCategoryChannels {
  _: 'topPeerCategoryChannels';
}
export interface topPeerCategoryPeers {
  _: 'topPeerCategoryPeers';
  category: TopPeerCategory;
  count: number;
  peers: TopPeer[];
}
export interface contacts_topPeersNotModified {
  _: 'contacts.topPeersNotModified';
}
export interface contacts_topPeers {
  _: 'contacts.topPeers';
  categories: TopPeerCategoryPeers[];
  chats: Chat[];
  users: User[];
}
export interface messageEntityMentionName {
  _: 'messageEntityMentionName';
  offset: number;
  length: number;
  user_id: number;
}
export interface inputMessageEntityMentionName {
  _: 'inputMessageEntityMentionName';
  offset: number;
  length: number;
  user_id: InputUser;
}
export interface inputMessagesFilterChatPhotos {
  _: 'inputMessagesFilterChatPhotos';
}
export interface updateReadChannelOutbox {
  _: 'updateReadChannelOutbox';
  channel_id: number;
  max_id: number;
}
export interface updateDraftMessage {
  _: 'updateDraftMessage';
  peer: Peer;
  draft: DraftMessage;
}
export interface draftMessageEmpty {
  _: 'draftMessageEmpty';
  date: number;
}
export interface draftMessage {
  _: 'draftMessage';
  no_webpage: boolean;
  reply_to_msg_id: number;
  message: string;
  entities: MessageEntity[];
  date: number;
}
export interface messageActionHistoryClear {
  _: 'messageActionHistoryClear';
}
export interface messages_featuredStickersNotModified {
  _: 'messages.featuredStickersNotModified';
  count: number;
}
export interface messages_featuredStickers {
  _: 'messages.featuredStickers';
  hash: number;
  count: number;
  sets: StickerSetCovered[];
  unread: number[];
}
export interface updateReadFeaturedStickers {
  _: 'updateReadFeaturedStickers';
}
export interface messages_recentStickersNotModified {
  _: 'messages.recentStickersNotModified';
}
export interface messages_recentStickers {
  _: 'messages.recentStickers';
  hash: number;
  packs: StickerPack[];
  stickers: Document[];
  dates: number[];
}
export interface updateRecentStickers {
  _: 'updateRecentStickers';
}
export interface messages_archivedStickers {
  _: 'messages.archivedStickers';
  count: number;
  sets: StickerSetCovered[];
}
export interface messages_stickerSetInstallResultSuccess {
  _: 'messages.stickerSetInstallResultSuccess';
}
export interface messages_stickerSetInstallResultArchive {
  _: 'messages.stickerSetInstallResultArchive';
  sets: StickerSetCovered[];
}
export interface stickerSetCovered {
  _: 'stickerSetCovered';
  set: StickerSet;
  cover: Document;
}
export interface updateConfig {
  _: 'updateConfig';
}
export interface updatePtsChanged {
  _: 'updatePtsChanged';
}
export interface inputMediaPhotoExternal {
  _: 'inputMediaPhotoExternal';
  url: string;
  ttl_seconds: number;
}
export interface inputMediaDocumentExternal {
  _: 'inputMediaDocumentExternal';
  url: string;
  ttl_seconds: number;
}
export interface stickerSetMultiCovered {
  _: 'stickerSetMultiCovered';
  set: StickerSet;
  covers: Document[];
}
export interface maskCoords {
  _: 'maskCoords';
  n: number;
  x: number;
  y: number;
  zoom: number;
}
export interface documentAttributeHasStickers {
  _: 'documentAttributeHasStickers';
}
export interface inputStickeredMediaPhoto {
  _: 'inputStickeredMediaPhoto';
  id: InputPhoto;
}
export interface inputStickeredMediaDocument {
  _: 'inputStickeredMediaDocument';
  id: InputDocument;
}
export interface game {
  _: 'game';
  id: number;
  access_hash: number;
  short_name: string;
  title: string;
  description: string;
  photo: Photo;
  document: Document;
}
export interface inputBotInlineResultGame {
  _: 'inputBotInlineResultGame';
  id: string;
  short_name: string;
  send_message: InputBotInlineMessage;
}
export interface inputBotInlineMessageGame {
  _: 'inputBotInlineMessageGame';
  reply_markup: ReplyMarkup;
}
export interface messageMediaGame {
  _: 'messageMediaGame';
  game: Game;
}
export interface inputMediaGame {
  _: 'inputMediaGame';
  id: InputGame;
}
export interface inputGameID {
  _: 'inputGameID';
  id: number;
  access_hash: number;
}
export interface inputGameShortName {
  _: 'inputGameShortName';
  bot_id: InputUser;
  short_name: string;
}
export interface keyboardButtonGame {
  _: 'keyboardButtonGame';
  text: string;
}
export interface messageActionGameScore {
  _: 'messageActionGameScore';
  game_id: number;
  score: number;
}
export interface highScore {
  _: 'highScore';
  pos: number;
  user_id: number;
  score: number;
}
export interface messages_highScores {
  _: 'messages.highScores';
  scores: HighScore[];
  users: User[];
}
export interface updates_differenceTooLong {
  _: 'updates.differenceTooLong';
  pts: number;
}
export interface updateChannelWebPage {
  _: 'updateChannelWebPage';
  channel_id: number;
  webpage: WebPage;
  pts: number;
  pts_count: number;
}
export interface messages_chatsSlice {
  _: 'messages.chatsSlice';
  count: number;
  chats: Chat[];
}
export interface textEmpty {
  _: 'textEmpty';
}
export interface textPlain {
  _: 'textPlain';
  text: string;
}
export interface textBold {
  _: 'textBold';
  text: RichText;
}
export interface textItalic {
  _: 'textItalic';
  text: RichText;
}
export interface textUnderline {
  _: 'textUnderline';
  text: RichText;
}
export interface textStrike {
  _: 'textStrike';
  text: RichText;
}
export interface textFixed {
  _: 'textFixed';
  text: RichText;
}
export interface textUrl {
  _: 'textUrl';
  text: RichText;
  url: string;
  webpage_id: number;
}
export interface textEmail {
  _: 'textEmail';
  text: RichText;
  email: string;
}
export interface textConcat {
  _: 'textConcat';
  texts: RichText[];
}
export interface pageBlockUnsupported {
  _: 'pageBlockUnsupported';
}
export interface pageBlockTitle {
  _: 'pageBlockTitle';
  text: RichText;
}
export interface pageBlockSubtitle {
  _: 'pageBlockSubtitle';
  text: RichText;
}
export interface pageBlockAuthorDate {
  _: 'pageBlockAuthorDate';
  author: RichText;
  published_date: number;
}
export interface pageBlockHeader {
  _: 'pageBlockHeader';
  text: RichText;
}
export interface pageBlockSubheader {
  _: 'pageBlockSubheader';
  text: RichText;
}
export interface pageBlockParagraph {
  _: 'pageBlockParagraph';
  text: RichText;
}
export interface pageBlockPreformatted {
  _: 'pageBlockPreformatted';
  text: RichText;
  language: string;
}
export interface pageBlockFooter {
  _: 'pageBlockFooter';
  text: RichText;
}
export interface pageBlockDivider {
  _: 'pageBlockDivider';
}
export interface pageBlockAnchor {
  _: 'pageBlockAnchor';
  name: string;
}
export interface pageBlockList {
  _: 'pageBlockList';
  items: PageListItem[];
}
export interface pageBlockBlockquote {
  _: 'pageBlockBlockquote';
  text: RichText;
  caption: RichText;
}
export interface pageBlockPullquote {
  _: 'pageBlockPullquote';
  text: RichText;
  caption: RichText;
}
export interface pageBlockPhoto {
  _: 'pageBlockPhoto';
  photo_id: number;
  caption: PageCaption;
  url: string;
  webpage_id: number;
}
export interface pageBlockVideo {
  _: 'pageBlockVideo';
  autoplay: boolean;
  loop: boolean;
  video_id: number;
  caption: PageCaption;
}
export interface pageBlockCover {
  _: 'pageBlockCover';
  cover: PageBlock;
}
export interface pageBlockEmbed {
  _: 'pageBlockEmbed';
  full_width: boolean;
  allow_scrolling: boolean;
  url: string;
  html: string;
  poster_photo_id: number;
  w: number;
  h: number;
  caption: PageCaption;
}
export interface pageBlockEmbedPost {
  _: 'pageBlockEmbedPost';
  url: string;
  webpage_id: number;
  author_photo_id: number;
  author: string;
  date: number;
  blocks: PageBlock[];
  caption: PageCaption;
}
export interface pageBlockCollage {
  _: 'pageBlockCollage';
  items: PageBlock[];
  caption: PageCaption;
}
export interface pageBlockSlideshow {
  _: 'pageBlockSlideshow';
  items: PageBlock[];
  caption: PageCaption;
}
export interface webPageNotModified {
  _: 'webPageNotModified';
  cached_page_views: number;
}
export interface inputPrivacyKeyPhoneCall {
  _: 'inputPrivacyKeyPhoneCall';
}
export interface privacyKeyPhoneCall {
  _: 'privacyKeyPhoneCall';
}
export interface sendMessageGamePlayAction {
  _: 'sendMessageGamePlayAction';
}
export interface phoneCallDiscardReasonMissed {
  _: 'phoneCallDiscardReasonMissed';
}
export interface phoneCallDiscardReasonDisconnect {
  _: 'phoneCallDiscardReasonDisconnect';
}
export interface phoneCallDiscardReasonHangup {
  _: 'phoneCallDiscardReasonHangup';
}
export interface phoneCallDiscardReasonBusy {
  _: 'phoneCallDiscardReasonBusy';
}
export interface updateDialogPinned {
  _: 'updateDialogPinned';
  pinned: boolean;
  folder_id: number;
  peer: DialogPeer;
}
export interface updatePinnedDialogs {
  _: 'updatePinnedDialogs';
  folder_id: number;
  order: DialogPeer[];
}
export interface dataJSON {
  _: 'dataJSON';
  data: string;
}
export interface updateBotWebhookJSON {
  _: 'updateBotWebhookJSON';
  data: DataJSON;
}
export interface updateBotWebhookJSONQuery {
  _: 'updateBotWebhookJSONQuery';
  query_id: number;
  data: DataJSON;
  timeout: number;
}
export interface labeledPrice {
  _: 'labeledPrice';
  label: string;
  amount: number;
}
export interface invoice {
  _: 'invoice';
  test: boolean;
  name_requested: boolean;
  phone_requested: boolean;
  email_requested: boolean;
  shipping_address_requested: boolean;
  flexible: boolean;
  phone_to_provider: boolean;
  email_to_provider: boolean;
  currency: string;
  prices: LabeledPrice[];
  max_tip_amount: number;
  suggested_tip_amounts: number[];
}
export interface inputMediaInvoice {
  _: 'inputMediaInvoice';
  title: string;
  description: string;
  photo: InputWebDocument;
  invoice: Invoice;
  payload: Uint8Array;
  provider: string;
  provider_data: DataJSON;
  start_param: string;
}
export interface paymentCharge {
  _: 'paymentCharge';
  id: string;
  provider_charge_id: string;
}
export interface messageActionPaymentSentMe {
  _: 'messageActionPaymentSentMe';
  currency: string;
  total_amount: number;
  payload: Uint8Array;
  info: PaymentRequestedInfo;
  shipping_option_id: string;
  charge: PaymentCharge;
}
export interface messageMediaInvoice {
  _: 'messageMediaInvoice';
  shipping_address_requested: boolean;
  test: boolean;
  title: string;
  description: string;
  photo: WebDocument;
  receipt_msg_id: number;
  currency: string;
  total_amount: number;
  start_param: string;
}
export interface postAddress {
  _: 'postAddress';
  street_line1: string;
  street_line2: string;
  city: string;
  state: string;
  country_iso2: string;
  post_code: string;
}
export interface paymentRequestedInfo {
  _: 'paymentRequestedInfo';
  name: string;
  phone: string;
  email: string;
  shipping_address: PostAddress;
}
export interface keyboardButtonBuy {
  _: 'keyboardButtonBuy';
  text: string;
}
export interface messageActionPaymentSent {
  _: 'messageActionPaymentSent';
  currency: string;
  total_amount: number;
}
export interface paymentSavedCredentialsCard {
  _: 'paymentSavedCredentialsCard';
  id: string;
  title: string;
}
export interface webDocument {
  _: 'webDocument';
  url: string;
  access_hash: number;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute[];
}
export interface inputWebDocument {
  _: 'inputWebDocument';
  url: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute[];
}
export interface inputWebFileLocation {
  _: 'inputWebFileLocation';
  url: string;
  access_hash: number;
}
export interface upload_webFile {
  _: 'upload.webFile';
  size: number;
  mime_type: string;
  file_type: storage_FileType;
  mtime: number;
  bytes: Uint8Array;
}
export interface payments_paymentForm {
  _: 'payments.paymentForm';
  can_save_credentials: boolean;
  password_missing: boolean;
  form_id: number;
  bot_id: number;
  invoice: Invoice;
  provider_id: number;
  url: string;
  native_provider: string;
  native_params: DataJSON;
  saved_info: PaymentRequestedInfo;
  saved_credentials: PaymentSavedCredentials;
  users: User[];
}
export interface payments_validatedRequestedInfo {
  _: 'payments.validatedRequestedInfo';
  id: string;
  shipping_options: ShippingOption[];
}
export interface payments_paymentResult {
  _: 'payments.paymentResult';
  updates: Updates;
}
export interface payments_paymentReceipt {
  _: 'payments.paymentReceipt';
  date: number;
  bot_id: number;
  provider_id: number;
  title: string;
  description: string;
  photo: WebDocument;
  invoice: Invoice;
  info: PaymentRequestedInfo;
  shipping: ShippingOption;
  tip_amount: number;
  currency: string;
  total_amount: number;
  credentials_title: string;
  users: User[];
}
export interface payments_savedInfo {
  _: 'payments.savedInfo';
  has_saved_credentials: boolean;
  saved_info: PaymentRequestedInfo;
}
export interface inputPaymentCredentialsSaved {
  _: 'inputPaymentCredentialsSaved';
  id: string;
  tmp_password: Uint8Array;
}
export interface inputPaymentCredentials {
  _: 'inputPaymentCredentials';
  save: boolean;
  data: DataJSON;
}
export interface account_tmpPassword {
  _: 'account.tmpPassword';
  tmp_password: Uint8Array;
  valid_until: number;
}
export interface shippingOption {
  _: 'shippingOption';
  id: string;
  title: string;
  prices: LabeledPrice[];
}
export interface updateBotShippingQuery {
  _: 'updateBotShippingQuery';
  query_id: number;
  user_id: number;
  payload: Uint8Array;
  shipping_address: PostAddress;
}
export interface updateBotPrecheckoutQuery {
  _: 'updateBotPrecheckoutQuery';
  query_id: number;
  user_id: number;
  payload: Uint8Array;
  info: PaymentRequestedInfo;
  shipping_option_id: string;
  currency: string;
  total_amount: number;
}
export interface inputStickerSetItem {
  _: 'inputStickerSetItem';
  document: InputDocument;
  emoji: string;
  mask_coords: MaskCoords;
}
export interface updatePhoneCall {
  _: 'updatePhoneCall';
  phone_call: PhoneCall;
}
export interface inputPhoneCall {
  _: 'inputPhoneCall';
  id: number;
  access_hash: number;
}
export interface phoneCallEmpty {
  _: 'phoneCallEmpty';
  id: number;
}
export interface phoneCallWaiting {
  _: 'phoneCallWaiting';
  video: boolean;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  protocol: PhoneCallProtocol;
  receive_date: number;
}
export interface phoneCallRequested {
  _: 'phoneCallRequested';
  video: boolean;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a_hash: Uint8Array;
  protocol: PhoneCallProtocol;
}
export interface phoneCallAccepted {
  _: 'phoneCallAccepted';
  video: boolean;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_b: Uint8Array;
  protocol: PhoneCallProtocol;
}
export interface phoneCall {
  _: 'phoneCall';
  p2p_allowed: boolean;
  video: boolean;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a_or_b: Uint8Array;
  key_fingerprint: number;
  protocol: PhoneCallProtocol;
  connections: PhoneConnection[];
  start_date: number;
}
export interface phoneCallDiscarded {
  _: 'phoneCallDiscarded';
  need_rating: boolean;
  need_debug: boolean;
  video: boolean;
  id: number;
  reason: PhoneCallDiscardReason;
  duration: number;
}
export interface phoneConnection {
  _: 'phoneConnection';
  id: number;
  ip: string;
  ipv6: string;
  port: number;
  peer_tag: Uint8Array;
}
export interface phoneCallProtocol {
  _: 'phoneCallProtocol';
  udp_p2p: boolean;
  udp_reflector: boolean;
  min_layer: number;
  max_layer: number;
  library_versions: string[];
}
export interface phone_phoneCall {
  _: 'phone.phoneCall';
  phone_call: PhoneCall;
  users: User[];
}
export interface inputMessagesFilterPhoneCalls {
  _: 'inputMessagesFilterPhoneCalls';
  missed: boolean;
}
export interface messageActionPhoneCall {
  _: 'messageActionPhoneCall';
  video: boolean;
  call_id: number;
  reason: PhoneCallDiscardReason;
  duration: number;
}
export interface inputMessagesFilterRoundVoice {
  _: 'inputMessagesFilterRoundVoice';
}
export interface inputMessagesFilterRoundVideo {
  _: 'inputMessagesFilterRoundVideo';
}
export interface sendMessageRecordRoundAction {
  _: 'sendMessageRecordRoundAction';
}
export interface sendMessageUploadRoundAction {
  _: 'sendMessageUploadRoundAction';
  progress: number;
}
export interface upload_fileCdnRedirect {
  _: 'upload.fileCdnRedirect';
  dc_id: number;
  file_token: Uint8Array;
  encryption_key: Uint8Array;
  encryption_iv: Uint8Array;
  file_hashes: FileHash[];
}
export interface upload_cdnFileReuploadNeeded {
  _: 'upload.cdnFileReuploadNeeded';
  request_token: Uint8Array;
}
export interface upload_cdnFile {
  _: 'upload.cdnFile';
  bytes: Uint8Array;
}
export interface cdnPublicKey {
  _: 'cdnPublicKey';
  dc_id: number;
  public_key: string;
}
export interface cdnConfig {
  _: 'cdnConfig';
  public_keys: CdnPublicKey[];
}
export interface pageBlockChannel {
  _: 'pageBlockChannel';
  channel: Chat;
}
export interface langPackString {
  _: 'langPackString';
  key: string;
  value: string;
}
export interface langPackStringPluralized {
  _: 'langPackStringPluralized';
  key: string;
  zero_value: string;
  one_value: string;
  two_value: string;
  few_value: string;
  many_value: string;
  other_value: string;
}
export interface langPackStringDeleted {
  _: 'langPackStringDeleted';
  key: string;
}
export interface langPackDifference {
  _: 'langPackDifference';
  lang_code: string;
  from_version: number;
  version: number;
  strings: LangPackString[];
}
export interface langPackLanguage {
  _: 'langPackLanguage';
  official: boolean;
  rtl: boolean;
  beta: boolean;
  name: string;
  native_name: string;
  lang_code: string;
  base_lang_code: string;
  plural_code: string;
  strings_count: number;
  translated_count: number;
  translations_url: string;
}
export interface updateLangPackTooLong {
  _: 'updateLangPackTooLong';
  lang_code: string;
}
export interface updateLangPack {
  _: 'updateLangPack';
  difference: LangPackDifference;
}
export interface channelParticipantAdmin {
  _: 'channelParticipantAdmin';
  can_edit: boolean;
  self: boolean;
  user_id: number;
  inviter_id: number;
  promoted_by: number;
  date: number;
  admin_rights: ChatAdminRights;
  rank: string;
}
export interface channelParticipantBanned {
  _: 'channelParticipantBanned';
  left: boolean;
  peer: Peer;
  kicked_by: number;
  date: number;
  banned_rights: ChatBannedRights;
}
export interface channelParticipantsBanned {
  _: 'channelParticipantsBanned';
  q: string;
}
export interface channelParticipantsSearch {
  _: 'channelParticipantsSearch';
  q: string;
}
export interface channelAdminLogEventActionChangeTitle {
  _: 'channelAdminLogEventActionChangeTitle';
  prev_value: string;
  new_value: string;
}
export interface channelAdminLogEventActionChangeAbout {
  _: 'channelAdminLogEventActionChangeAbout';
  prev_value: string;
  new_value: string;
}
export interface channelAdminLogEventActionChangeUsername {
  _: 'channelAdminLogEventActionChangeUsername';
  prev_value: string;
  new_value: string;
}
export interface channelAdminLogEventActionChangePhoto {
  _: 'channelAdminLogEventActionChangePhoto';
  prev_photo: Photo;
  new_photo: Photo;
}
export interface channelAdminLogEventActionToggleInvites {
  _: 'channelAdminLogEventActionToggleInvites';
  new_value: boolean;
}
export interface channelAdminLogEventActionToggleSignatures {
  _: 'channelAdminLogEventActionToggleSignatures';
  new_value: boolean;
}
export interface channelAdminLogEventActionUpdatePinned {
  _: 'channelAdminLogEventActionUpdatePinned';
  message: Message;
}
export interface channelAdminLogEventActionEditMessage {
  _: 'channelAdminLogEventActionEditMessage';
  prev_message: Message;
  new_message: Message;
}
export interface channelAdminLogEventActionDeleteMessage {
  _: 'channelAdminLogEventActionDeleteMessage';
  message: Message;
}
export interface channelAdminLogEventActionParticipantJoin {
  _: 'channelAdminLogEventActionParticipantJoin';
}
export interface channelAdminLogEventActionParticipantLeave {
  _: 'channelAdminLogEventActionParticipantLeave';
}
export interface channelAdminLogEventActionParticipantInvite {
  _: 'channelAdminLogEventActionParticipantInvite';
  participant: ChannelParticipant;
}
export interface channelAdminLogEventActionParticipantToggleBan {
  _: 'channelAdminLogEventActionParticipantToggleBan';
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}
export interface channelAdminLogEventActionParticipantToggleAdmin {
  _: 'channelAdminLogEventActionParticipantToggleAdmin';
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}
export interface channelAdminLogEvent {
  _: 'channelAdminLogEvent';
  id: number;
  date: number;
  user_id: number;
  action: ChannelAdminLogEventAction;
}
export interface channels_adminLogResults {
  _: 'channels.adminLogResults';
  events: ChannelAdminLogEvent[];
  chats: Chat[];
  users: User[];
}
export interface channelAdminLogEventsFilter {
  _: 'channelAdminLogEventsFilter';
  join: boolean;
  leave: boolean;
  invite: boolean;
  ban: boolean;
  unban: boolean;
  kick: boolean;
  unkick: boolean;
  promote: boolean;
  demote: boolean;
  info: boolean;
  settings: boolean;
  pinned: boolean;
  edit: boolean;
  delete: boolean;
  group_call: boolean;
  invites: boolean;
  send: boolean;
  forums: boolean;
}
export interface topPeerCategoryPhoneCalls {
  _: 'topPeerCategoryPhoneCalls';
}
export interface pageBlockAudio {
  _: 'pageBlockAudio';
  audio_id: number;
  caption: PageCaption;
}
export interface popularContact {
  _: 'popularContact';
  client_id: number;
  importers: number;
}
export interface messageActionScreenshotTaken {
  _: 'messageActionScreenshotTaken';
}
export interface messages_favedStickersNotModified {
  _: 'messages.favedStickersNotModified';
}
export interface messages_favedStickers {
  _: 'messages.favedStickers';
  hash: number;
  packs: StickerPack[];
  stickers: Document[];
}
export interface updateFavedStickers {
  _: 'updateFavedStickers';
}
export interface updateChannelReadMessagesContents {
  _: 'updateChannelReadMessagesContents';
  channel_id: number;
  messages: number[];
}
export interface inputMessagesFilterMyMentions {
  _: 'inputMessagesFilterMyMentions';
}
export interface updateContactsReset {
  _: 'updateContactsReset';
}
export interface channelAdminLogEventActionChangeStickerSet {
  _: 'channelAdminLogEventActionChangeStickerSet';
  prev_stickerset: InputStickerSet;
  new_stickerset: InputStickerSet;
}
export interface messageActionCustomAction {
  _: 'messageActionCustomAction';
  message: string;
}
export interface inputPaymentCredentialsApplePay {
  _: 'inputPaymentCredentialsApplePay';
  payment_data: DataJSON;
}
export interface inputMessagesFilterGeo {
  _: 'inputMessagesFilterGeo';
}
export interface inputMessagesFilterContacts {
  _: 'inputMessagesFilterContacts';
}
export interface updateChannelAvailableMessages {
  _: 'updateChannelAvailableMessages';
  channel_id: number;
  available_min_id: number;
}
export interface channelAdminLogEventActionTogglePreHistoryHidden {
  _: 'channelAdminLogEventActionTogglePreHistoryHidden';
  new_value: boolean;
}
export interface inputMediaGeoLive {
  _: 'inputMediaGeoLive';
  stopped: boolean;
  geo_point: InputGeoPoint;
  heading: number;
  period: number;
  proximity_notification_radius: number;
}
export interface messageMediaGeoLive {
  _: 'messageMediaGeoLive';
  geo: GeoPoint;
  heading: number;
  period: number;
  proximity_notification_radius: number;
}
export interface recentMeUrlUnknown {
  _: 'recentMeUrlUnknown';
  url: string;
}
export interface recentMeUrlUser {
  _: 'recentMeUrlUser';
  url: string;
  user_id: number;
}
export interface recentMeUrlChat {
  _: 'recentMeUrlChat';
  url: string;
  chat_id: number;
}
export interface recentMeUrlChatInvite {
  _: 'recentMeUrlChatInvite';
  url: string;
  chat_invite: ChatInvite;
}
export interface recentMeUrlStickerSet {
  _: 'recentMeUrlStickerSet';
  url: string;
  set: StickerSetCovered;
}
export interface help_recentMeUrls {
  _: 'help.recentMeUrls';
  urls: RecentMeUrl[];
  chats: Chat[];
  users: User[];
}
export interface channels_channelParticipantsNotModified {
  _: 'channels.channelParticipantsNotModified';
}
export interface messages_messagesNotModified {
  _: 'messages.messagesNotModified';
  count: number;
}
export interface inputSingleMedia {
  _: 'inputSingleMedia';
  media: InputMedia;
  random_id: number;
  message: string;
  entities: MessageEntity[];
}
export interface webAuthorization {
  _: 'webAuthorization';
  hash: number;
  bot_id: number;
  domain: string;
  browser: string;
  platform: string;
  date_created: number;
  date_active: number;
  ip: string;
  region: string;
}
export interface account_webAuthorizations {
  _: 'account.webAuthorizations';
  authorizations: WebAuthorization[];
  users: User[];
}
export interface inputMessageID {
  _: 'inputMessageID';
  id: number;
}
export interface inputMessageReplyTo {
  _: 'inputMessageReplyTo';
  id: number;
}
export interface inputMessagePinned {
  _: 'inputMessagePinned';
}
export interface messageEntityPhone {
  _: 'messageEntityPhone';
  offset: number;
  length: number;
}
export interface messageEntityCashtag {
  _: 'messageEntityCashtag';
  offset: number;
  length: number;
}
export interface messageActionBotAllowed {
  _: 'messageActionBotAllowed';
  domain: string;
}
export interface inputDialogPeer {
  _: 'inputDialogPeer';
  peer: InputPeer;
}
export interface dialogPeer {
  _: 'dialogPeer';
  peer: Peer;
}
export interface messages_foundStickerSetsNotModified {
  _: 'messages.foundStickerSetsNotModified';
}
export interface messages_foundStickerSets {
  _: 'messages.foundStickerSets';
  hash: number;
  sets: StickerSetCovered[];
}
export interface fileHash {
  _: 'fileHash';
  offset: number;
  limit: number;
  hash: Uint8Array;
}
export interface webDocumentNoProxy {
  _: 'webDocumentNoProxy';
  url: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute[];
}
export interface inputClientProxy {
  _: 'inputClientProxy';
  address: string;
  port: number;
}
export interface help_termsOfServiceUpdateEmpty {
  _: 'help.termsOfServiceUpdateEmpty';
  expires: number;
}
export interface help_termsOfServiceUpdate {
  _: 'help.termsOfServiceUpdate';
  expires: number;
  terms_of_service: help_TermsOfService;
}
export interface inputSecureFileUploaded {
  _: 'inputSecureFileUploaded';
  id: number;
  parts: number;
  md5_checksum: string;
  file_hash: Uint8Array;
  secret: Uint8Array;
}
export interface inputSecureFile {
  _: 'inputSecureFile';
  id: number;
  access_hash: number;
}
export interface inputSecureFileLocation {
  _: 'inputSecureFileLocation';
  id: number;
  access_hash: number;
}
export interface secureFileEmpty {
  _: 'secureFileEmpty';
}
export interface secureFile {
  _: 'secureFile';
  id: number;
  access_hash: number;
  size: number;
  dc_id: number;
  date: number;
  file_hash: Uint8Array;
  secret: Uint8Array;
}
export interface secureData {
  _: 'secureData';
  data: Uint8Array;
  data_hash: Uint8Array;
  secret: Uint8Array;
}
export interface securePlainPhone {
  _: 'securePlainPhone';
  phone: string;
}
export interface securePlainEmail {
  _: 'securePlainEmail';
  email: string;
}
export interface secureValueTypePersonalDetails {
  _: 'secureValueTypePersonalDetails';
}
export interface secureValueTypePassport {
  _: 'secureValueTypePassport';
}
export interface secureValueTypeDriverLicense {
  _: 'secureValueTypeDriverLicense';
}
export interface secureValueTypeIdentityCard {
  _: 'secureValueTypeIdentityCard';
}
export interface secureValueTypeInternalPassport {
  _: 'secureValueTypeInternalPassport';
}
export interface secureValueTypeAddress {
  _: 'secureValueTypeAddress';
}
export interface secureValueTypeUtilityBill {
  _: 'secureValueTypeUtilityBill';
}
export interface secureValueTypeBankStatement {
  _: 'secureValueTypeBankStatement';
}
export interface secureValueTypeRentalAgreement {
  _: 'secureValueTypeRentalAgreement';
}
export interface secureValueTypePassportRegistration {
  _: 'secureValueTypePassportRegistration';
}
export interface secureValueTypeTemporaryRegistration {
  _: 'secureValueTypeTemporaryRegistration';
}
export interface secureValueTypePhone {
  _: 'secureValueTypePhone';
}
export interface secureValueTypeEmail {
  _: 'secureValueTypeEmail';
}
export interface secureValue {
  _: 'secureValue';
  type: SecureValueType;
  data: SecureData;
  front_side: SecureFile;
  reverse_side: SecureFile;
  selfie: SecureFile;
  translation: SecureFile[];
  files: SecureFile[];
  plain_data: SecurePlainData;
  hash: Uint8Array;
}
export interface inputSecureValue {
  _: 'inputSecureValue';
  type: SecureValueType;
  data: SecureData;
  front_side: InputSecureFile;
  reverse_side: InputSecureFile;
  selfie: InputSecureFile;
  translation: InputSecureFile[];
  files: InputSecureFile[];
  plain_data: SecurePlainData;
}
export interface secureValueHash {
  _: 'secureValueHash';
  type: SecureValueType;
  hash: Uint8Array;
}
export interface secureValueErrorData {
  _: 'secureValueErrorData';
  type: SecureValueType;
  data_hash: Uint8Array;
  field: string;
  text: string;
}
export interface secureValueErrorFrontSide {
  _: 'secureValueErrorFrontSide';
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}
export interface secureValueErrorReverseSide {
  _: 'secureValueErrorReverseSide';
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}
export interface secureValueErrorSelfie {
  _: 'secureValueErrorSelfie';
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}
export interface secureValueErrorFile {
  _: 'secureValueErrorFile';
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}
export interface secureValueErrorFiles {
  _: 'secureValueErrorFiles';
  type: SecureValueType;
  file_hash: Uint8Array[];
  text: string;
}
export interface secureCredentialsEncrypted {
  _: 'secureCredentialsEncrypted';
  data: Uint8Array;
  hash: Uint8Array;
  secret: Uint8Array;
}
export interface account_authorizationForm {
  _: 'account.authorizationForm';
  required_types: SecureRequiredType[];
  values: SecureValue[];
  errors: SecureValueError[];
  users: User[];
  privacy_policy_url: string;
}
export interface account_sentEmailCode {
  _: 'account.sentEmailCode';
  email_pattern: string;
  length: number;
}
export interface messageActionSecureValuesSentMe {
  _: 'messageActionSecureValuesSentMe';
  values: SecureValue[];
  credentials: SecureCredentialsEncrypted;
}
export interface messageActionSecureValuesSent {
  _: 'messageActionSecureValuesSent';
  types: SecureValueType[];
}
export interface help_deepLinkInfoEmpty {
  _: 'help.deepLinkInfoEmpty';
}
export interface help_deepLinkInfo {
  _: 'help.deepLinkInfo';
  update_app: boolean;
  message: string;
  entities: MessageEntity[];
}
export interface savedPhoneContact {
  _: 'savedPhoneContact';
  phone: string;
  first_name: string;
  last_name: string;
  date: number;
}
export interface account_takeout {
  _: 'account.takeout';
  id: number;
}
export interface inputTakeoutFileLocation {
  _: 'inputTakeoutFileLocation';
}
export interface updateDialogUnreadMark {
  _: 'updateDialogUnreadMark';
  unread: boolean;
  peer: DialogPeer;
}
export interface messages_dialogsNotModified {
  _: 'messages.dialogsNotModified';
  count: number;
}
export interface inputWebFileGeoPointLocation {
  _: 'inputWebFileGeoPointLocation';
  geo_point: InputGeoPoint;
  access_hash: number;
  w: number;
  h: number;
  zoom: number;
  scale: number;
}
export interface contacts_topPeersDisabled {
  _: 'contacts.topPeersDisabled';
}
export interface inputReportReasonCopyright {
  _: 'inputReportReasonCopyright';
}
export interface passwordKdfAlgoUnknown {
  _: 'passwordKdfAlgoUnknown';
}
export interface securePasswordKdfAlgoUnknown {
  _: 'securePasswordKdfAlgoUnknown';
}
export interface securePasswordKdfAlgoPBKDF2HMACSHA512iter100000 {
  _: 'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000';
  salt: Uint8Array;
}
export interface securePasswordKdfAlgoSHA512 {
  _: 'securePasswordKdfAlgoSHA512';
  salt: Uint8Array;
}
export interface secureSecretSettings {
  _: 'secureSecretSettings';
  secure_algo: SecurePasswordKdfAlgo;
  secure_secret: Uint8Array;
  secure_secret_id: number;
}
export interface passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow {
  _: 'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow';
  salt1: Uint8Array;
  salt2: Uint8Array;
  g: number;
  p: Uint8Array;
}
export interface inputCheckPasswordEmpty {
  _: 'inputCheckPasswordEmpty';
}
export interface inputCheckPasswordSRP {
  _: 'inputCheckPasswordSRP';
  srp_id: number;
  A: Uint8Array;
  M1: Uint8Array;
}
export interface secureValueError {
  _: 'secureValueError';
  type: SecureValueType;
  hash: Uint8Array;
  text: string;
}
export interface secureValueErrorTranslationFile {
  _: 'secureValueErrorTranslationFile';
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}
export interface secureValueErrorTranslationFiles {
  _: 'secureValueErrorTranslationFiles';
  type: SecureValueType;
  file_hash: Uint8Array[];
  text: string;
}
export interface secureRequiredType {
  _: 'secureRequiredType';
  native_names: boolean;
  selfie_required: boolean;
  translation_required: boolean;
  type: SecureValueType;
}
export interface secureRequiredTypeOneOf {
  _: 'secureRequiredTypeOneOf';
  types: SecureRequiredType[];
}
export interface help_passportConfigNotModified {
  _: 'help.passportConfigNotModified';
}
export interface help_passportConfig {
  _: 'help.passportConfig';
  hash: number;
  countries_langs: DataJSON;
}
export interface inputAppEvent {
  _: 'inputAppEvent';
  time: number;
  type: string;
  peer: number;
  data: JSONValue;
}
export interface jsonObjectValue {
  _: 'jsonObjectValue';
  key: string;
  value: JSONValue;
}
export interface jsonNull {
  _: 'jsonNull';
}
export interface jsonBool {
  _: 'jsonBool';
  value: boolean;
}
export interface jsonNumber {
  _: 'jsonNumber';
  value: number;
}
export interface jsonString {
  _: 'jsonString';
  value: string;
}
export interface jsonArray {
  _: 'jsonArray';
  value: JSONValue[];
}
export interface jsonObject {
  _: 'jsonObject';
  value: JSONObjectValue[];
}
export interface inputNotifyBroadcasts {
  _: 'inputNotifyBroadcasts';
}
export interface notifyBroadcasts {
  _: 'notifyBroadcasts';
}
export interface textSubscript {
  _: 'textSubscript';
  text: RichText;
}
export interface textSuperscript {
  _: 'textSuperscript';
  text: RichText;
}
export interface textMarked {
  _: 'textMarked';
  text: RichText;
}
export interface textPhone {
  _: 'textPhone';
  text: RichText;
  phone: string;
}
export interface textImage {
  _: 'textImage';
  document_id: number;
  w: number;
  h: number;
}
export interface pageBlockKicker {
  _: 'pageBlockKicker';
  text: RichText;
}
export interface pageTableCell {
  _: 'pageTableCell';
  header: boolean;
  align_center: boolean;
  align_right: boolean;
  valign_middle: boolean;
  valign_bottom: boolean;
  text: RichText;
  colspan: number;
  rowspan: number;
}
export interface pageTableRow {
  _: 'pageTableRow';
  cells: PageTableCell[];
}
export interface pageBlockTable {
  _: 'pageBlockTable';
  bordered: boolean;
  striped: boolean;
  title: RichText;
  rows: PageTableRow[];
}
export interface pageCaption {
  _: 'pageCaption';
  text: RichText;
  credit: RichText;
}
export interface pageListItemText {
  _: 'pageListItemText';
  text: RichText;
}
export interface pageListItemBlocks {
  _: 'pageListItemBlocks';
  blocks: PageBlock[];
}
export interface pageListOrderedItemText {
  _: 'pageListOrderedItemText';
  num: string;
  text: RichText;
}
export interface pageListOrderedItemBlocks {
  _: 'pageListOrderedItemBlocks';
  num: string;
  blocks: PageBlock[];
}
export interface pageBlockOrderedList {
  _: 'pageBlockOrderedList';
  items: PageListOrderedItem[];
}
export interface pageBlockDetails {
  _: 'pageBlockDetails';
  open: boolean;
  blocks: PageBlock[];
  title: RichText;
}
export interface pageRelatedArticle {
  _: 'pageRelatedArticle';
  url: string;
  webpage_id: number;
  title: string;
  description: string;
  photo_id: number;
  author: string;
  published_date: number;
}
export interface pageBlockRelatedArticles {
  _: 'pageBlockRelatedArticles';
  title: RichText;
  articles: PageRelatedArticle[];
}
export interface pageBlockMap {
  _: 'pageBlockMap';
  geo: GeoPoint;
  zoom: number;
  w: number;
  h: number;
  caption: PageCaption;
}
export interface page {
  _: 'page';
  part: boolean;
  rtl: boolean;
  v2: boolean;
  url: string;
  blocks: PageBlock[];
  photos: Photo[];
  documents: Document[];
  views: number;
}
export interface inputPrivacyKeyPhoneP2P {
  _: 'inputPrivacyKeyPhoneP2P';
}
export interface privacyKeyPhoneP2P {
  _: 'privacyKeyPhoneP2P';
}
export interface textAnchor {
  _: 'textAnchor';
  text: RichText;
  name: string;
}
export interface help_supportName {
  _: 'help.supportName';
  name: string;
}
export interface help_userInfoEmpty {
  _: 'help.userInfoEmpty';
}
export interface help_userInfo {
  _: 'help.userInfo';
  message: string;
  entities: MessageEntity[];
  author: string;
  date: number;
}
export interface messageActionContactSignUp {
  _: 'messageActionContactSignUp';
}
export interface updateMessagePoll {
  _: 'updateMessagePoll';
  poll_id: number;
  poll: Poll;
  results: PollResults;
}
export interface pollAnswer {
  _: 'pollAnswer';
  text: string;
  option: Uint8Array;
}
export interface poll {
  _: 'poll';
  id: number;
  closed: boolean;
  public_voters: boolean;
  multiple_choice: boolean;
  quiz: boolean;
  question: string;
  answers: PollAnswer[];
  close_period: number;
  close_date: number;
}
export interface pollAnswerVoters {
  _: 'pollAnswerVoters';
  chosen: boolean;
  correct: boolean;
  option: Uint8Array;
  voters: number;
}
export interface pollResults {
  _: 'pollResults';
  min: boolean;
  results: PollAnswerVoters[];
  total_voters: number;
  recent_voters: number[];
  solution: string;
  solution_entities: MessageEntity[];
}
export interface inputMediaPoll {
  _: 'inputMediaPoll';
  poll: Poll;
  correct_answers: Uint8Array[];
  solution: string;
  solution_entities: MessageEntity[];
}
export interface messageMediaPoll {
  _: 'messageMediaPoll';
  poll: Poll;
  results: PollResults;
}
export interface chatOnlines {
  _: 'chatOnlines';
  onlines: number;
}
export interface statsURL {
  _: 'statsURL';
  url: string;
}
export interface photoStrippedSize {
  _: 'photoStrippedSize';
  type: string;
  bytes: Uint8Array;
}
export interface chatAdminRights {
  _: 'chatAdminRights';
  change_info: boolean;
  post_messages: boolean;
  edit_messages: boolean;
  delete_messages: boolean;
  ban_users: boolean;
  invite_users: boolean;
  pin_messages: boolean;
  add_admins: boolean;
  anonymous: boolean;
  manage_call: boolean;
  other: boolean;
}
export interface chatBannedRights {
  _: 'chatBannedRights';
  view_messages: boolean;
  send_messages: boolean;
  send_media: boolean;
  send_stickers: boolean;
  send_gifs: boolean;
  send_games: boolean;
  send_inline: boolean;
  embed_links: boolean;
  send_polls: boolean;
  change_info: boolean;
  invite_users: boolean;
  pin_messages: boolean;
  until_date: number;
}
export interface updateChatDefaultBannedRights {
  _: 'updateChatDefaultBannedRights';
  peer: Peer;
  default_banned_rights: ChatBannedRights;
  version: number;
}
export interface inputWallPaper {
  _: 'inputWallPaper';
  id: number;
  access_hash: number;
}
export interface inputWallPaperSlug {
  _: 'inputWallPaperSlug';
  slug: string;
}
export interface channelParticipantsContacts {
  _: 'channelParticipantsContacts';
  q: string;
}
export interface channelAdminLogEventActionDefaultBannedRights {
  _: 'channelAdminLogEventActionDefaultBannedRights';
  prev_banned_rights: ChatBannedRights;
  new_banned_rights: ChatBannedRights;
}
export interface channelAdminLogEventActionStopPoll {
  _: 'channelAdminLogEventActionStopPoll';
  message: Message;
}
export interface account_wallPapersNotModified {
  _: 'account.wallPapersNotModified';
}
export interface account_wallPapers {
  _: 'account.wallPapers';
  hash: number;
  wallpapers: WallPaper[];
}
export interface codeSettings {
  _: 'codeSettings';
  allow_flashcall: boolean;
  current_number: boolean;
  allow_app_hash: boolean;
  allow_missed_call: boolean;
  logout_tokens: Uint8Array[];
}
export interface wallPaperSettings {
  _: 'wallPaperSettings';
  blur: boolean;
  motion: boolean;
  background_color: number;
  second_background_color: number;
  third_background_color: number;
  fourth_background_color: number;
  intensity: number;
  rotation: number;
}
export interface autoDownloadSettings {
  _: 'autoDownloadSettings';
  disabled: boolean;
  video_preload_large: boolean;
  audio_preload_next: boolean;
  phonecalls_less_data: boolean;
  photo_size_max: number;
  video_size_max: number;
  file_size_max: number;
  video_upload_maxbitrate: number;
}
export interface account_autoDownloadSettings {
  _: 'account.autoDownloadSettings';
  low: AutoDownloadSettings;
  medium: AutoDownloadSettings;
  high: AutoDownloadSettings;
}
export interface emojiKeyword {
  _: 'emojiKeyword';
  keyword: string;
  emoticons: string[];
}
export interface emojiKeywordDeleted {
  _: 'emojiKeywordDeleted';
  keyword: string;
  emoticons: string[];
}
export interface emojiKeywordsDifference {
  _: 'emojiKeywordsDifference';
  lang_code: string;
  from_version: number;
  version: number;
  keywords: EmojiKeyword[];
}
export interface emojiURL {
  _: 'emojiURL';
  url: string;
}
export interface emojiLanguage {
  _: 'emojiLanguage';
  lang_code: string;
}
export interface inputPrivacyKeyForwards {
  _: 'inputPrivacyKeyForwards';
}
export interface privacyKeyForwards {
  _: 'privacyKeyForwards';
}
export interface inputPrivacyKeyProfilePhoto {
  _: 'inputPrivacyKeyProfilePhoto';
}
export interface privacyKeyProfilePhoto {
  _: 'privacyKeyProfilePhoto';
}
export interface inputPhotoFileLocation {
  _: 'inputPhotoFileLocation';
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  thumb_size: string;
}
export interface inputPhotoLegacyFileLocation {
  _: 'inputPhotoLegacyFileLocation';
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  volume_id: number;
  local_id: number;
  secret: number;
}
export interface inputPeerPhotoFileLocation {
  _: 'inputPeerPhotoFileLocation';
  big: boolean;
  peer: InputPeer;
  photo_id: number;
}
export interface inputStickerSetThumb {
  _: 'inputStickerSetThumb';
  stickerset: InputStickerSet;
  thumb_version: number;
}
export interface folder {
  _: 'folder';
  autofill_new_broadcasts: boolean;
  autofill_public_groups: boolean;
  autofill_new_correspondents: boolean;
  id: number;
  title: string;
  photo: ChatPhoto;
}
export interface dialogFolder {
  _: 'dialogFolder';
  pinned: boolean;
  folder: Folder;
  peer: Peer;
  top_message: number;
  unread_muted_peers_count: number;
  unread_unmuted_peers_count: number;
  unread_muted_messages_count: number;
  unread_unmuted_messages_count: number;
}
export interface inputDialogPeerFolder {
  _: 'inputDialogPeerFolder';
  folder_id: number;
}
export interface dialogPeerFolder {
  _: 'dialogPeerFolder';
  folder_id: number;
}
export interface inputFolderPeer {
  _: 'inputFolderPeer';
  peer: InputPeer;
  folder_id: number;
}
export interface folderPeer {
  _: 'folderPeer';
  peer: Peer;
  folder_id: number;
}
export interface updateFolderPeers {
  _: 'updateFolderPeers';
  folder_peers: FolderPeer[];
  pts: number;
  pts_count: number;
}
export interface inputUserFromMessage {
  _: 'inputUserFromMessage';
  peer: InputPeer;
  msg_id: number;
  user_id: number;
}
export interface inputChannelFromMessage {
  _: 'inputChannelFromMessage';
  peer: InputPeer;
  msg_id: number;
  channel_id: number;
}
export interface inputPeerUserFromMessage {
  _: 'inputPeerUserFromMessage';
  peer: InputPeer;
  msg_id: number;
  user_id: number;
}
export interface inputPeerChannelFromMessage {
  _: 'inputPeerChannelFromMessage';
  peer: InputPeer;
  msg_id: number;
  channel_id: number;
}
export interface inputPrivacyKeyPhoneNumber {
  _: 'inputPrivacyKeyPhoneNumber';
}
export interface privacyKeyPhoneNumber {
  _: 'privacyKeyPhoneNumber';
}
export interface topPeerCategoryForwardUsers {
  _: 'topPeerCategoryForwardUsers';
}
export interface topPeerCategoryForwardChats {
  _: 'topPeerCategoryForwardChats';
}
export interface channelAdminLogEventActionChangeLinkedChat {
  _: 'channelAdminLogEventActionChangeLinkedChat';
  prev_value: number;
  new_value: number;
}
export interface messages_searchCounter {
  _: 'messages.searchCounter';
  inexact: boolean;
  filter: MessagesFilter;
  count: number;
}
export interface keyboardButtonUrlAuth {
  _: 'keyboardButtonUrlAuth';
  text: string;
  fwd_text: string;
  url: string;
  button_id: number;
}
export interface inputKeyboardButtonUrlAuth {
  _: 'inputKeyboardButtonUrlAuth';
  request_write_access: boolean;
  text: string;
  fwd_text: string;
  url: string;
  bot: InputUser;
}
export interface urlAuthResultRequest {
  _: 'urlAuthResultRequest';
  request_write_access: boolean;
  bot: User;
  domain: string;
}
export interface urlAuthResultAccepted {
  _: 'urlAuthResultAccepted';
  url: string;
}
export interface urlAuthResultDefault {
  _: 'urlAuthResultDefault';
}
export interface inputPrivacyValueAllowChatParticipants {
  _: 'inputPrivacyValueAllowChatParticipants';
  chats: number[];
}
export interface inputPrivacyValueDisallowChatParticipants {
  _: 'inputPrivacyValueDisallowChatParticipants';
  chats: number[];
}
export interface privacyValueAllowChatParticipants {
  _: 'privacyValueAllowChatParticipants';
  chats: number[];
}
export interface privacyValueDisallowChatParticipants {
  _: 'privacyValueDisallowChatParticipants';
  chats: number[];
}
export interface messageEntityUnderline {
  _: 'messageEntityUnderline';
  offset: number;
  length: number;
}
export interface messageEntityStrike {
  _: 'messageEntityStrike';
  offset: number;
  length: number;
}
export interface messageEntityBlockquote {
  _: 'messageEntityBlockquote';
  offset: number;
  length: number;
}
export interface updatePeerSettings {
  _: 'updatePeerSettings';
  peer: Peer;
  settings: PeerSettings;
}
export interface channelLocationEmpty {
  _: 'channelLocationEmpty';
}
export interface channelLocation {
  _: 'channelLocation';
  geo_point: GeoPoint;
  address: string;
}
export interface peerLocated {
  _: 'peerLocated';
  peer: Peer;
  expires: number;
  distance: number;
}
export interface updatePeerLocated {
  _: 'updatePeerLocated';
  peers: PeerLocated[];
}
export interface channelAdminLogEventActionChangeLocation {
  _: 'channelAdminLogEventActionChangeLocation';
  prev_value: ChannelLocation;
  new_value: ChannelLocation;
}
export interface inputReportReasonGeoIrrelevant {
  _: 'inputReportReasonGeoIrrelevant';
}
export interface channelAdminLogEventActionToggleSlowMode {
  _: 'channelAdminLogEventActionToggleSlowMode';
  prev_value: number;
  new_value: number;
}
export interface auth_authorizationSignUpRequired {
  _: 'auth.authorizationSignUpRequired';
  terms_of_service: help_TermsOfService;
}
export interface payments_paymentVerificationNeeded {
  _: 'payments.paymentVerificationNeeded';
  url: string;
}
export interface inputStickerSetAnimatedEmoji {
  _: 'inputStickerSetAnimatedEmoji';
}
export interface updateNewScheduledMessage {
  _: 'updateNewScheduledMessage';
  message: Message;
}
export interface updateDeleteScheduledMessages {
  _: 'updateDeleteScheduledMessages';
  peer: Peer;
  messages: number[];
}
export interface restrictionReason {
  _: 'restrictionReason';
  platform: string;
  reason: string;
  text: string;
}
export interface inputTheme {
  _: 'inputTheme';
  id: number;
  access_hash: number;
}
export interface inputThemeSlug {
  _: 'inputThemeSlug';
  slug: string;
}
export interface theme {
  _: 'theme';
  creator: boolean;
  default: boolean;
  for_chat: boolean;
  id: number;
  access_hash: number;
  slug: string;
  title: string;
  document: Document;
  settings: ThemeSettings[];
  emoticon: string;
  installs_count: number;
}
export interface account_themesNotModified {
  _: 'account.themesNotModified';
}
export interface account_themes {
  _: 'account.themes';
  hash: number;
  themes: Theme[];
}
export interface updateTheme {
  _: 'updateTheme';
  theme: Theme;
}
export interface inputPrivacyKeyAddedByPhone {
  _: 'inputPrivacyKeyAddedByPhone';
}
export interface privacyKeyAddedByPhone {
  _: 'privacyKeyAddedByPhone';
}
export interface updateGeoLiveViewed {
  _: 'updateGeoLiveViewed';
  peer: Peer;
  msg_id: number;
}
export interface updateLoginToken {
  _: 'updateLoginToken';
}
export interface auth_loginToken {
  _: 'auth.loginToken';
  expires: number;
  token: Uint8Array;
}
export interface auth_loginTokenMigrateTo {
  _: 'auth.loginTokenMigrateTo';
  dc_id: number;
  token: Uint8Array;
}
export interface auth_loginTokenSuccess {
  _: 'auth.loginTokenSuccess';
  authorization: auth_Authorization;
}
export interface account_contentSettings {
  _: 'account.contentSettings';
  sensitive_enabled: boolean;
  sensitive_can_change: boolean;
}
export interface messages_inactiveChats {
  _: 'messages.inactiveChats';
  dates: number[];
  chats: Chat[];
  users: User[];
}
export interface baseThemeClassic {
  _: 'baseThemeClassic';
}
export interface baseThemeDay {
  _: 'baseThemeDay';
}
export interface baseThemeNight {
  _: 'baseThemeNight';
}
export interface baseThemeTinted {
  _: 'baseThemeTinted';
}
export interface baseThemeArctic {
  _: 'baseThemeArctic';
}
export interface inputWallPaperNoFile {
  _: 'inputWallPaperNoFile';
  id: number;
}
export interface wallPaperNoFile {
  _: 'wallPaperNoFile';
  id: number;
  default: boolean;
  dark: boolean;
  settings: WallPaperSettings;
}
export interface inputThemeSettings {
  _: 'inputThemeSettings';
  message_colors_animated: boolean;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color: number;
  message_colors: number[];
  wallpaper: InputWallPaper;
  wallpaper_settings: WallPaperSettings;
}
export interface themeSettings {
  _: 'themeSettings';
  message_colors_animated: boolean;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color: number;
  message_colors: number[];
  wallpaper: WallPaper;
}
export interface webPageAttributeTheme {
  _: 'webPageAttributeTheme';
  documents: Document[];
  settings: ThemeSettings;
}
export interface updateMessagePollVote {
  _: 'updateMessagePollVote';
  poll_id: number;
  user_id: number;
  options: Uint8Array[];
  qts: number;
}
export interface messageUserVote {
  _: 'messageUserVote';
  user_id: number;
  option: Uint8Array;
  date: number;
}
export interface messageUserVoteInputOption {
  _: 'messageUserVoteInputOption';
  user_id: number;
  date: number;
}
export interface messageUserVoteMultiple {
  _: 'messageUserVoteMultiple';
  user_id: number;
  options: Uint8Array[];
  date: number;
}
export interface messages_votesList {
  _: 'messages.votesList';
  count: number;
  votes: MessageUserVote[];
  users: User[];
  next_offset: string;
}
export interface keyboardButtonRequestPoll {
  _: 'keyboardButtonRequestPoll';
  quiz: boolean;
  text: string;
}
export interface messageEntityBankCard {
  _: 'messageEntityBankCard';
  offset: number;
  length: number;
}
export interface bankCardOpenUrl {
  _: 'bankCardOpenUrl';
  url: string;
  name: string;
}
export interface payments_bankCardData {
  _: 'payments.bankCardData';
  title: string;
  open_urls: BankCardOpenUrl[];
}
export interface peerSelfLocated {
  _: 'peerSelfLocated';
  expires: number;
}
export interface dialogFilter {
  _: 'dialogFilter';
  contacts: boolean;
  non_contacts: boolean;
  groups: boolean;
  broadcasts: boolean;
  bots: boolean;
  exclude_muted: boolean;
  exclude_read: boolean;
  exclude_archived: boolean;
  id: number;
  title: string;
  emoticon: string;
  pinned_peers: InputPeer[];
  include_peers: InputPeer[];
  exclude_peers: InputPeer[];
}
export interface dialogFilterSuggested {
  _: 'dialogFilterSuggested';
  filter: DialogFilter;
  description: string;
}
export interface updateDialogFilter {
  _: 'updateDialogFilter';
  id: number;
  filter: DialogFilter;
}
export interface updateDialogFilterOrder {
  _: 'updateDialogFilterOrder';
  order: number[];
}
export interface updateDialogFilters {
  _: 'updateDialogFilters';
}
export interface statsDateRangeDays {
  _: 'statsDateRangeDays';
  min_date: number;
  max_date: number;
}
export interface statsAbsValueAndPrev {
  _: 'statsAbsValueAndPrev';
  current: number;
  previous: number;
}
export interface statsPercentValue {
  _: 'statsPercentValue';
  part: number;
  total: number;
}
export interface statsGraphAsync {
  _: 'statsGraphAsync';
  token: string;
}
export interface statsGraphError {
  _: 'statsGraphError';
  error: string;
}
export interface statsGraph {
  _: 'statsGraph';
  json: DataJSON;
  zoom_token: string;
}
export interface messageInteractionCounters {
  _: 'messageInteractionCounters';
  msg_id: number;
  views: number;
  forwards: number;
}
export interface stats_broadcastStats {
  _: 'stats.broadcastStats';
  period: StatsDateRangeDays;
  followers: StatsAbsValueAndPrev;
  views_per_post: StatsAbsValueAndPrev;
  shares_per_post: StatsAbsValueAndPrev;
  enabled_notifications: StatsPercentValue;
  growth_graph: StatsGraph;
  followers_graph: StatsGraph;
  mute_graph: StatsGraph;
  top_hours_graph: StatsGraph;
  interactions_graph: StatsGraph;
  iv_interactions_graph: StatsGraph;
  views_by_source_graph: StatsGraph;
  new_followers_by_source_graph: StatsGraph;
  languages_graph: StatsGraph;
  recent_message_interactions: MessageInteractionCounters[];
}
export interface inputMediaDice {
  _: 'inputMediaDice';
  emoticon: string;
}
export interface messageMediaDice {
  _: 'messageMediaDice';
  value: number;
  emoticon: string;
}
export interface inputStickerSetDice {
  _: 'inputStickerSetDice';
  emoticon: string;
}
export interface help_promoDataEmpty {
  _: 'help.promoDataEmpty';
  expires: number;
}
export interface help_promoData {
  _: 'help.promoData';
  proxy: boolean;
  expires: number;
  peer: Peer;
  chats: Chat[];
  users: User[];
  psa_type: string;
  psa_message: string;
}
export interface videoSize {
  _: 'videoSize';
  type: string;
  w: number;
  h: number;
  size: number;
  video_start_ts: number;
}
export interface updatePhoneCallSignalingData {
  _: 'updatePhoneCallSignalingData';
  phone_call_id: number;
  data: Uint8Array;
}
export interface chatInvitePeek {
  _: 'chatInvitePeek';
  chat: Chat;
  expires: number;
}
export interface statsGroupTopPoster {
  _: 'statsGroupTopPoster';
  user_id: number;
  messages: number;
  avg_chars: number;
}
export interface statsGroupTopAdmin {
  _: 'statsGroupTopAdmin';
  user_id: number;
  deleted: number;
  kicked: number;
  banned: number;
}
export interface statsGroupTopInviter {
  _: 'statsGroupTopInviter';
  user_id: number;
  invitations: number;
}
export interface stats_megagroupStats {
  _: 'stats.megagroupStats';
  period: StatsDateRangeDays;
  members: StatsAbsValueAndPrev;
  messages: StatsAbsValueAndPrev;
  viewers: StatsAbsValueAndPrev;
  posters: StatsAbsValueAndPrev;
  growth_graph: StatsGraph;
  members_graph: StatsGraph;
  new_members_by_source_graph: StatsGraph;
  languages_graph: StatsGraph;
  messages_graph: StatsGraph;
  actions_graph: StatsGraph;
  top_hours_graph: StatsGraph;
  weekdays_graph: StatsGraph;
  top_posters: StatsGroupTopPoster[];
  top_admins: StatsGroupTopAdmin[];
  top_inviters: StatsGroupTopInviter[];
  users: User[];
}
export interface globalPrivacySettings {
  _: 'globalPrivacySettings';
  archive_and_mute_new_noncontact_peers: boolean;
}
export interface phoneConnectionWebrtc {
  _: 'phoneConnectionWebrtc';
  turn: boolean;
  stun: boolean;
  id: number;
  ip: string;
  ipv6: string;
  port: number;
  username: string;
  password: string;
}
export interface help_countryCode {
  _: 'help.countryCode';
  country_code: string;
  prefixes: string[];
  patterns: string[];
}
export interface help_country {
  _: 'help.country';
  hidden: boolean;
  iso2: string;
  default_name: string;
  name: string;
  country_codes: help_CountryCode[];
}
export interface help_countriesListNotModified {
  _: 'help.countriesListNotModified';
}
export interface help_countriesList {
  _: 'help.countriesList';
  countries: help_Country[];
  hash: number;
}
export interface messageViews {
  _: 'messageViews';
  views: number;
  forwards: number;
  replies: MessageReplies;
}
export interface updateChannelMessageForwards {
  _: 'updateChannelMessageForwards';
  channel_id: number;
  id: number;
  forwards: number;
}
export interface photoSizeProgressive {
  _: 'photoSizeProgressive';
  type: string;
  w: number;
  h: number;
  sizes: number[];
}
export interface messages_messageViews {
  _: 'messages.messageViews';
  views: MessageViews[];
  chats: Chat[];
  users: User[];
}
export interface updateReadChannelDiscussionInbox {
  _: 'updateReadChannelDiscussionInbox';
  channel_id: number;
  top_msg_id: number;
  read_max_id: number;
  broadcast_id: number;
  broadcast_post: number;
}
export interface updateReadChannelDiscussionOutbox {
  _: 'updateReadChannelDiscussionOutbox';
  channel_id: number;
  top_msg_id: number;
  read_max_id: number;
}
export interface messages_discussionMessage {
  _: 'messages.discussionMessage';
  messages: Message[];
  max_id: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  chats: Chat[];
  users: User[];
}
export interface messageReplyHeader {
  _: 'messageReplyHeader';
  reply_to_scheduled: boolean;
  reply_to_msg_id: number;
  reply_to_peer_id: Peer;
  reply_to_top_id: number;
}
export interface messageReplies {
  _: 'messageReplies';
  comments: boolean;
  replies: number;
  replies_pts: number;
  recent_repliers: Peer[];
  channel_id: number;
  max_id: number;
  read_max_id: number;
}
export interface updatePeerBlocked {
  _: 'updatePeerBlocked';
  peer_id: Peer;
  blocked: boolean;
}
export interface peerBlocked {
  _: 'peerBlocked';
  peer_id: Peer;
  date: number;
}
export interface updateChannelUserTyping {
  _: 'updateChannelUserTyping';
  channel_id: number;
  top_msg_id: number;
  from_id: Peer;
  action: SendMessageAction;
}
export interface inputMessageCallbackQuery {
  _: 'inputMessageCallbackQuery';
  id: number;
  query_id: number;
}
export interface channelParticipantLeft {
  _: 'channelParticipantLeft';
  peer: Peer;
}
export interface channelParticipantsMentions {
  _: 'channelParticipantsMentions';
  q: string;
  top_msg_id: number;
}
export interface updatePinnedMessages {
  _: 'updatePinnedMessages';
  pinned: boolean;
  peer: Peer;
  messages: number[];
  pts: number;
  pts_count: number;
}
export interface updatePinnedChannelMessages {
  _: 'updatePinnedChannelMessages';
  pinned: boolean;
  channel_id: number;
  messages: number[];
  pts: number;
  pts_count: number;
}
export interface inputMessagesFilterPinned {
  _: 'inputMessagesFilterPinned';
}
export interface stats_messageStats {
  _: 'stats.messageStats';
  views_graph: StatsGraph;
}
export interface messageActionGeoProximityReached {
  _: 'messageActionGeoProximityReached';
  from_id: Peer;
  to_id: Peer;
  distance: number;
}
export interface photoPathSize {
  _: 'photoPathSize';
  type: string;
  bytes: Uint8Array;
}
export interface speakingInGroupCallAction {
  _: 'speakingInGroupCallAction';
}
export interface groupCallDiscarded {
  _: 'groupCallDiscarded';
  id: number;
  access_hash: number;
  duration: number;
}
export interface groupCall {
  _: 'groupCall';
  join_muted: boolean;
  can_change_join_muted: boolean;
  join_date_asc: boolean;
  schedule_start_subscribed: boolean;
  can_start_video: boolean;
  record_video_active: boolean;
  rtmp_stream: boolean;
  listeners_hidden: boolean;
  id: number;
  access_hash: number;
  participants_count: number;
  title: string;
  stream_dc_id: number;
  record_start_date: number;
  schedule_date: number;
  unmuted_video_count: number;
  unmuted_video_limit: number;
  version: number;
}
export interface inputGroupCall {
  _: 'inputGroupCall';
  id: number;
  access_hash: number;
}
export interface messageActionGroupCall {
  _: 'messageActionGroupCall';
  call: InputGroupCall;
  duration: number;
}
export interface messageActionInviteToGroupCall {
  _: 'messageActionInviteToGroupCall';
  call: InputGroupCall;
  users: number[];
}
export interface groupCallParticipant {
  _: 'groupCallParticipant';
  muted: boolean;
  left: boolean;
  can_self_unmute: boolean;
  just_joined: boolean;
  versioned: boolean;
  min: boolean;
  muted_by_you: boolean;
  volume_by_admin: boolean;
  self: boolean;
  video_joined: boolean;
  peer: Peer;
  date: number;
  active_date: number;
  source: number;
  volume: number;
  about: string;
  raise_hand_rating: number;
  video: GroupCallParticipantVideo;
  presentation: GroupCallParticipantVideo;
}
export interface updateChat {
  _: 'updateChat';
  chat_id: number;
}
export interface updateGroupCallParticipants {
  _: 'updateGroupCallParticipants';
  call: InputGroupCall;
  participants: GroupCallParticipant[];
  version: number;
}
export interface updateGroupCall {
  _: 'updateGroupCall';
  chat_id: number;
  call: GroupCall;
}
export interface phone_groupCall {
  _: 'phone.groupCall';
  call: GroupCall;
  participants: GroupCallParticipant[];
  participants_next_offset: string;
  chats: Chat[];
  users: User[];
}
export interface phone_groupParticipants {
  _: 'phone.groupParticipants';
  count: number;
  participants: GroupCallParticipant[];
  next_offset: string;
  chats: Chat[];
  users: User[];
  version: number;
}
export interface inlineQueryPeerTypeSameBotPM {
  _: 'inlineQueryPeerTypeSameBotPM';
}
export interface inlineQueryPeerTypePM {
  _: 'inlineQueryPeerTypePM';
}
export interface inlineQueryPeerTypeChat {
  _: 'inlineQueryPeerTypeChat';
}
export interface inlineQueryPeerTypeMegagroup {
  _: 'inlineQueryPeerTypeMegagroup';
}
export interface inlineQueryPeerTypeBroadcast {
  _: 'inlineQueryPeerTypeBroadcast';
}
export interface channelAdminLogEventActionStartGroupCall {
  _: 'channelAdminLogEventActionStartGroupCall';
  call: InputGroupCall;
}
export interface channelAdminLogEventActionDiscardGroupCall {
  _: 'channelAdminLogEventActionDiscardGroupCall';
  call: InputGroupCall;
}
export interface channelAdminLogEventActionParticipantMute {
  _: 'channelAdminLogEventActionParticipantMute';
  participant: GroupCallParticipant;
}
export interface channelAdminLogEventActionParticipantUnmute {
  _: 'channelAdminLogEventActionParticipantUnmute';
  participant: GroupCallParticipant;
}
export interface channelAdminLogEventActionToggleGroupCallSetting {
  _: 'channelAdminLogEventActionToggleGroupCallSetting';
  join_muted: boolean;
}
export interface inputPaymentCredentialsGooglePay {
  _: 'inputPaymentCredentialsGooglePay';
  payment_token: DataJSON;
}
export interface messages_historyImport {
  _: 'messages.historyImport';
  id: number;
}
export interface sendMessageHistoryImportAction {
  _: 'sendMessageHistoryImportAction';
  progress: number;
}
export interface messages_historyImportParsed {
  _: 'messages.historyImportParsed';
  pm: boolean;
  group: boolean;
  title: string;
}
export interface inputReportReasonFake {
  _: 'inputReportReasonFake';
}
export interface messages_affectedFoundMessages {
  _: 'messages.affectedFoundMessages';
  pts: number;
  pts_count: number;
  offset: number;
  messages: number[];
}
export interface messageActionSetMessagesTTL {
  _: 'messageActionSetMessagesTTL';
  period: number;
}
export interface updatePeerHistoryTTL {
  _: 'updatePeerHistoryTTL';
  peer: Peer;
  ttl_period: number;
}
export interface updateChatParticipant {
  _: 'updateChatParticipant';
  chat_id: number;
  date: number;
  actor_id: number;
  user_id: number;
  prev_participant: ChatParticipant;
  new_participant: ChatParticipant;
  invite: ExportedChatInvite;
  qts: number;
}
export interface updateChannelParticipant {
  _: 'updateChannelParticipant';
  channel_id: number;
  date: number;
  actor_id: number;
  user_id: number;
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
  invite: ExportedChatInvite;
  qts: number;
}
export interface updateBotStopped {
  _: 'updateBotStopped';
  user_id: number;
  date: number;
  stopped: boolean;
  qts: number;
}
export interface chatInviteImporter {
  _: 'chatInviteImporter';
  requested: boolean;
  user_id: number;
  date: number;
  about: string;
  approved_by: number;
}
export interface messages_exportedChatInvites {
  _: 'messages.exportedChatInvites';
  count: number;
  invites: ExportedChatInvite[];
  users: User[];
}
export interface messages_exportedChatInvite {
  _: 'messages.exportedChatInvite';
  invite: ExportedChatInvite;
  users: User[];
}
export interface messages_exportedChatInviteReplaced {
  _: 'messages.exportedChatInviteReplaced';
  invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
  users: User[];
}
export interface messages_chatInviteImporters {
  _: 'messages.chatInviteImporters';
  count: number;
  importers: ChatInviteImporter[];
  users: User[];
}
export interface chatAdminWithInvites {
  _: 'chatAdminWithInvites';
  admin_id: number;
  invites_count: number;
  revoked_invites_count: number;
}
export interface messages_chatAdminsWithInvites {
  _: 'messages.chatAdminsWithInvites';
  admins: ChatAdminWithInvites[];
  users: User[];
}
export interface channelAdminLogEventActionParticipantJoinByInvite {
  _: 'channelAdminLogEventActionParticipantJoinByInvite';
  invite: ExportedChatInvite;
}
export interface channelAdminLogEventActionExportedInviteDelete {
  _: 'channelAdminLogEventActionExportedInviteDelete';
  invite: ExportedChatInvite;
}
export interface channelAdminLogEventActionExportedInviteRevoke {
  _: 'channelAdminLogEventActionExportedInviteRevoke';
  invite: ExportedChatInvite;
}
export interface channelAdminLogEventActionExportedInviteEdit {
  _: 'channelAdminLogEventActionExportedInviteEdit';
  prev_invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
}
export interface channelAdminLogEventActionParticipantVolume {
  _: 'channelAdminLogEventActionParticipantVolume';
  participant: GroupCallParticipant;
}
export interface channelAdminLogEventActionChangeHistoryTTL {
  _: 'channelAdminLogEventActionChangeHistoryTTL';
  prev_value: number;
  new_value: number;
}
export interface messages_checkedHistoryImportPeer {
  _: 'messages.checkedHistoryImportPeer';
  confirm_text: string;
}
export interface inputGroupCallStream {
  _: 'inputGroupCallStream';
  call: InputGroupCall;
  time_ms: number;
  scale: number;
  video_channel: number;
  video_quality: number;
}
export interface phone_joinAsPeers {
  _: 'phone.joinAsPeers';
  peers: Peer[];
  chats: Chat[];
  users: User[];
}
export interface phone_exportedGroupCallInvite {
  _: 'phone.exportedGroupCallInvite';
  link: string;
}
export interface inputBotInlineMessageMediaInvoice {
  _: 'inputBotInlineMessageMediaInvoice';
  title: string;
  description: string;
  photo: InputWebDocument;
  invoice: Invoice;
  payload: Uint8Array;
  provider: string;
  provider_data: DataJSON;
  reply_markup: ReplyMarkup;
}
export interface botInlineMessageMediaInvoice {
  _: 'botInlineMessageMediaInvoice';
  shipping_address_requested: boolean;
  test: boolean;
  title: string;
  description: string;
  photo: WebDocument;
  currency: string;
  total_amount: number;
  reply_markup: ReplyMarkup;
}
export interface messageActionGroupCallScheduled {
  _: 'messageActionGroupCallScheduled';
  call: InputGroupCall;
  schedule_date: number;
}
export interface groupCallParticipantVideoSourceGroup {
  _: 'groupCallParticipantVideoSourceGroup';
  semantics: string;
  sources: number[];
}
export interface groupCallParticipantVideo {
  _: 'groupCallParticipantVideo';
  paused: boolean;
  endpoint: string;
  source_groups: GroupCallParticipantVideoSourceGroup[];
  audio_source: number;
}
export interface updateGroupCallConnection {
  _: 'updateGroupCallConnection';
  presentation: boolean;
  params: DataJSON;
}
export interface stickers_suggestedShortName {
  _: 'stickers.suggestedShortName';
  short_name: string;
}
export interface botCommandScopeDefault {
  _: 'botCommandScopeDefault';
}
export interface botCommandScopeUsers {
  _: 'botCommandScopeUsers';
}
export interface botCommandScopeChats {
  _: 'botCommandScopeChats';
}
export interface botCommandScopeChatAdmins {
  _: 'botCommandScopeChatAdmins';
}
export interface botCommandScopePeer {
  _: 'botCommandScopePeer';
  peer: InputPeer;
}
export interface botCommandScopePeerAdmins {
  _: 'botCommandScopePeerAdmins';
  peer: InputPeer;
}
export interface botCommandScopePeerUser {
  _: 'botCommandScopePeerUser';
  peer: InputPeer;
  user_id: InputUser;
}
export interface account_resetPasswordFailedWait {
  _: 'account.resetPasswordFailedWait';
  retry_date: number;
}
export interface account_resetPasswordRequestedWait {
  _: 'account.resetPasswordRequestedWait';
  until_date: number;
}
export interface account_resetPasswordOk {
  _: 'account.resetPasswordOk';
}
export interface updateBotCommands {
  _: 'updateBotCommands';
  peer: Peer;
  bot_id: number;
  commands: BotCommand[];
}
export interface messageActionSetChatTheme {
  _: 'messageActionSetChatTheme';
  emoticon: string;
}
export interface sendMessageChooseStickerAction {
  _: 'sendMessageChooseStickerAction';
}
export interface sponsoredMessage {
  _: 'sponsoredMessage';
  recommended: boolean;
  random_id: Uint8Array;
  from_id: Peer;
  chat_invite: ChatInvite;
  chat_invite_hash: string;
  channel_post: number;
  start_param: string;
  message: string;
  entities: MessageEntity[];
}
export interface messages_sponsoredMessages {
  _: 'messages.sponsoredMessages';
  messages: SponsoredMessage[];
  chats: Chat[];
  users: User[];
}
export interface inputStickerSetAnimatedEmojiAnimations {
  _: 'inputStickerSetAnimatedEmojiAnimations';
}
export interface sendMessageEmojiInteraction {
  _: 'sendMessageEmojiInteraction';
  emoticon: string;
  msg_id: number;
  interaction: DataJSON;
}
export interface sendMessageEmojiInteractionSeen {
  _: 'sendMessageEmojiInteractionSeen';
  emoticon: string;
}
export interface inputBotInlineMessageID64 {
  _: 'inputBotInlineMessageID64';
  dc_id: number;
  owner_id: number;
  id: number;
  access_hash: number;
}
export interface searchResultsCalendarPeriod {
  _: 'searchResultsCalendarPeriod';
  date: number;
  min_msg_id: number;
  max_msg_id: number;
  count: number;
}
export interface messages_searchResultsCalendar {
  _: 'messages.searchResultsCalendar';
  inexact: boolean;
  count: number;
  min_date: number;
  min_msg_id: number;
  offset_id_offset: number;
  periods: SearchResultsCalendarPeriod[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}
export interface searchResultPosition {
  _: 'searchResultPosition';
  msg_id: number;
  date: number;
  offset: number;
}
export interface messages_searchResultsPositions {
  _: 'messages.searchResultsPositions';
  count: number;
  positions: SearchResultsPosition[];
}
export interface messageActionChatJoinedByRequest {
  _: 'messageActionChatJoinedByRequest';
}
export interface updatePendingJoinRequests {
  _: 'updatePendingJoinRequests';
  peer: Peer;
  requests_pending: number;
  recent_requesters: number[];
}
export interface updateBotChatInviteRequester {
  _: 'updateBotChatInviteRequester';
  peer: Peer;
  date: number;
  user_id: number;
  about: string;
  invite: ExportedChatInvite;
  qts: number;
}
export interface channelAdminLogEventActionParticipantJoinByRequest {
  _: 'channelAdminLogEventActionParticipantJoinByRequest';
  invite: ExportedChatInvite;
  approved_by: number;
}
export interface inputKeyboardButtonUserProfile {
  _: 'inputKeyboardButtonUserProfile';
  text: string;
  user_id: InputUser;
}
export interface keyboardButtonUserProfile {
  _: 'keyboardButtonUserProfile';
  text: string;
  user_id: number;
}
export interface channels_sendAsPeers {
  _: 'channels.sendAsPeers';
  peers: Peer[];
  chats: Chat[];
  users: User[];
}
export interface channelAdminLogEventActionToggleNoForwards {
  _: 'channelAdminLogEventActionToggleNoForwards';
  new_value: boolean;
}
export interface messages_stickerSetNotModified {
  _: 'messages.stickerSetNotModified';
}
export interface users_userFull {
  _: 'users.userFull';
  full_user: UserFull;
  chats: Chat[];
  users: User[];
}
export interface messages_peerSettings {
  _: 'messages.peerSettings';
  settings: PeerSettings;
  chats: Chat[];
  users: User[];
}
export interface channelAdminLogEventActionSendMessage {
  _: 'channelAdminLogEventActionSendMessage';
  message: Message;
}
export interface auth_codeTypeMissedCall {
  _: 'auth.codeTypeMissedCall';
}
export interface auth_sentCodeTypeMissedCall {
  _: 'auth.sentCodeTypeMissedCall';
  prefix: string;
  length: number;
}
export interface auth_loggedOut {
  _: 'auth.loggedOut';
  future_auth_token: Uint8Array;
}
export interface updateMessageReactions {
  _: 'updateMessageReactions';
  peer: Peer;
  msg_id: number;
  reactions: MessageReactions;
}
export interface reactionCount {
  _: 'reactionCount';
  chosen: boolean;
  reaction: string;
  count: number;
}
export interface messageReactions {
  _: 'messageReactions';
  min: boolean;
  can_see_list: boolean;
  results: ReactionCount[];
  recent_reactions: MessagePeerReaction[];
}
export interface messages_messageReactionsList {
  _: 'messages.messageReactionsList';
  count: number;
  reactions: MessagePeerReaction[];
  chats: Chat[];
  users: User[];
  next_offset: string;
}
export interface availableReaction {
  _: 'availableReaction';
  inactive: boolean;
  reaction: string;
  title: string;
  static_icon: Document;
  appear_animation: Document;
  select_animation: Document;
  activate_animation: Document;
  effect_animation: Document;
  around_animation: Document;
  center_icon: Document;
}
export interface messages_availableReactionsNotModified {
  _: 'messages.availableReactionsNotModified';
}
export interface messages_availableReactions {
  _: 'messages.availableReactions';
  hash: number;
  reactions: AvailableReaction[];
}
export interface messageEntitySpoiler {
  _: 'messageEntitySpoiler';
  offset: number;
  length: number;
}
export interface channelAdminLogEventActionChangeAvailableReactions {
  _: 'channelAdminLogEventActionChangeAvailableReactions';
  prev_value: string[];
  new_value: string[];
}
export interface messages_translateNoResult {
  _: 'messages.translateNoResult';
}
export interface messages_translateResultText {
  _: 'messages.translateResultText';
  text: string;
}
export interface messagePeerReaction {
  _: 'messagePeerReaction';
  big: boolean;
  unread: boolean;
  peer_id: Peer;
  reaction: string;
}
export interface groupCallStreamChannel {
  _: 'groupCallStreamChannel';
  channel: number;
  scale: number;
  last_timestamp_ms: number;
}
export interface phone_groupCallStreamChannels {
  _: 'phone.groupCallStreamChannels';
  channels: GroupCallStreamChannel[];
}
export interface inputReportReasonIllegalDrugs {
  _: 'inputReportReasonIllegalDrugs';
}
export interface inputReportReasonPersonalDetails {
  _: 'inputReportReasonPersonalDetails';
}
export interface phone_groupCallStreamRtmpUrl {
  _: 'phone.groupCallStreamRtmpUrl';
  url: string;
  key: string;
}

export type Error = error;
export type Null = null;
export type InputPeer = inputPeerEmpty | inputPeerSelf | inputPeerChat | inputPeerUser | inputPeerChannel | inputPeerUserFromMessage | inputPeerChannelFromMessage;
export type InputUser = inputUserEmpty | inputUserSelf | inputUser | inputUserFromMessage;
export type InputContact = inputPhoneContact;
export type InputFile = inputFile | inputFileBig;
export type InputMedia = inputMediaEmpty | inputMediaUploadedPhoto | inputMediaPhoto | inputMediaGeoPoint | inputMediaContact | inputMediaUploadedDocument | inputMediaDocument | inputMediaVenue | inputMediaPhotoExternal | inputMediaDocumentExternal | inputMediaGame | inputMediaInvoice | inputMediaGeoLive | inputMediaPoll | inputMediaDice;
export type InputChatPhoto = inputChatPhotoEmpty | inputChatUploadedPhoto | inputChatPhoto;
export type InputGeoPoint = inputGeoPointEmpty | inputGeoPoint;
export type InputPhoto = inputPhotoEmpty | inputPhoto;
export type InputFileLocation = inputFileLocation | inputEncryptedFileLocation | inputDocumentFileLocation | inputSecureFileLocation | inputTakeoutFileLocation | inputPhotoFileLocation | inputPhotoLegacyFileLocation | inputPeerPhotoFileLocation | inputStickerSetThumb | inputGroupCallStream;
export type Peer = peerUser | peerChat | peerChannel;
export type storage_FileType = storage_fileUnknown | storage_filePartial | storage_fileJpeg | storage_fileGif | storage_filePng | storage_filePdf | storage_fileMp3 | storage_fileMov | storage_fileMp4 | storage_fileWebp;
export type User = userEmpty | user;
export type UserProfilePhoto = userProfilePhotoEmpty | userProfilePhoto;
export type UserStatus = userStatusEmpty | userStatusOnline | userStatusOffline | userStatusRecently | userStatusLastWeek | userStatusLastMonth;
export type Chat = chatEmpty | chat | chatForbidden | channel | channelForbidden;
export type ChatFull = chatFull | channelFull;
export type ChatParticipant = chatParticipant | chatParticipantCreator | chatParticipantAdmin;
export type ChatParticipants = chatParticipantsForbidden | chatParticipants;
export type ChatPhoto = chatPhotoEmpty | chatPhoto;
export type Message = messageEmpty | message | messageService;
export type MessageMedia = messageMediaEmpty | messageMediaPhoto | messageMediaGeo | messageMediaContact | messageMediaUnsupported | messageMediaDocument | messageMediaWebPage | messageMediaVenue | messageMediaGame | messageMediaInvoice | messageMediaGeoLive | messageMediaPoll | messageMediaDice;
export type MessageAction = messageActionEmpty | messageActionChatCreate | messageActionChatEditTitle | messageActionChatEditPhoto | messageActionChatDeletePhoto | messageActionChatAddUser | messageActionChatDeleteUser | messageActionChatJoinedByLink | messageActionChannelCreate | messageActionChatMigrateTo | messageActionChannelMigrateFrom | messageActionPinMessage | messageActionHistoryClear | messageActionGameScore | messageActionPaymentSentMe | messageActionPaymentSent | messageActionPhoneCall | messageActionScreenshotTaken | messageActionCustomAction | messageActionBotAllowed | messageActionSecureValuesSentMe | messageActionSecureValuesSent | messageActionContactSignUp | messageActionGeoProximityReached | messageActionGroupCall | messageActionInviteToGroupCall | messageActionSetMessagesTTL | messageActionGroupCallScheduled | messageActionSetChatTheme | messageActionChatJoinedByRequest;
export type Dialog = dialog | dialogFolder;
export type Photo = photoEmpty | photo;
export type PhotoSize = photoSizeEmpty | photoSize | photoCachedSize | photoStrippedSize | photoSizeProgressive | photoPathSize;
export type GeoPoint = geoPointEmpty | geoPoint;
export type auth_SentCode = auth_sentCode;
export type auth_Authorization = auth_authorization | auth_authorizationSignUpRequired;
export type auth_ExportedAuthorization = auth_exportedAuthorization;
export type InputNotifyPeer = inputNotifyPeer | inputNotifyUsers | inputNotifyChats | inputNotifyBroadcasts;
export type InputPeerNotifySettings = inputPeerNotifySettings;
export type PeerNotifySettings = peerNotifySettings;
export type PeerSettings = peerSettings;
export type WallPaper = wallPaper | wallPaperNoFile;
export type ReportReason = inputReportReasonSpam | inputReportReasonViolence | inputReportReasonPornography | inputReportReasonChildAbuse | inputReportReasonOther | inputReportReasonCopyright | inputReportReasonGeoIrrelevant | inputReportReasonFake | inputReportReasonIllegalDrugs | inputReportReasonPersonalDetails;
export type UserFull = userFull;
export type Contact = contact;
export type ImportedContact = importedContact;
export type ContactStatus = contactStatus;
export type contacts_Contacts = contacts_contactsNotModified | contacts_contacts;
export type contacts_ImportedContacts = contacts_importedContacts;
export type contacts_Blocked = contacts_blocked | contacts_blockedSlice;
export type messages_Dialogs = messages_dialogs | messages_dialogsSlice | messages_dialogsNotModified;
export type messages_Messages = messages_messages | messages_messagesSlice | messages_channelMessages | messages_messagesNotModified;
export type messages_Chats = messages_chats | messages_chatsSlice;
export type messages_ChatFull = messages_chatFull;
export type messages_AffectedHistory = messages_affectedHistory;
export type MessagesFilter = inputMessagesFilterEmpty | inputMessagesFilterPhotos | inputMessagesFilterVideo | inputMessagesFilterPhotoVideo | inputMessagesFilterDocument | inputMessagesFilterUrl | inputMessagesFilterGif | inputMessagesFilterVoice | inputMessagesFilterMusic | inputMessagesFilterChatPhotos | inputMessagesFilterPhoneCalls | inputMessagesFilterRoundVoice | inputMessagesFilterRoundVideo | inputMessagesFilterMyMentions | inputMessagesFilterGeo | inputMessagesFilterContacts | inputMessagesFilterPinned;
export type Update = updateNewMessage | updateMessageID | updateDeleteMessages | updateUserTyping | updateChatUserTyping | updateChatParticipants | updateUserStatus | updateUserName | updateUserPhoto | updateNewEncryptedMessage | updateEncryptedChatTyping | updateEncryption | updateEncryptedMessagesRead | updateChatParticipantAdd | updateChatParticipantDelete | updateDcOptions | updateNotifySettings | updateServiceNotification | updatePrivacy | updateUserPhone | updateReadHistoryInbox | updateReadHistoryOutbox | updateWebPage | updateReadMessagesContents | updateChannelTooLong | updateChannel | updateNewChannelMessage | updateReadChannelInbox | updateDeleteChannelMessages | updateChannelMessageViews | updateChatParticipantAdmin | updateNewStickerSet | updateStickerSetsOrder | updateStickerSets | updateSavedGifs | updateBotInlineQuery | updateBotInlineSend | updateEditChannelMessage | updateBotCallbackQuery | updateEditMessage | updateInlineBotCallbackQuery | updateReadChannelOutbox | updateDraftMessage | updateReadFeaturedStickers | updateRecentStickers | updateConfig | updatePtsChanged | updateChannelWebPage | updateDialogPinned | updatePinnedDialogs | updateBotWebhookJSON | updateBotWebhookJSONQuery | updateBotShippingQuery | updateBotPrecheckoutQuery | updatePhoneCall | updateLangPackTooLong | updateLangPack | updateFavedStickers | updateChannelReadMessagesContents | updateContactsReset | updateChannelAvailableMessages | updateDialogUnreadMark | updateMessagePoll | updateChatDefaultBannedRights | updateFolderPeers | updatePeerSettings | updatePeerLocated | updateNewScheduledMessage | updateDeleteScheduledMessages | updateTheme | updateGeoLiveViewed | updateLoginToken | updateMessagePollVote | updateDialogFilter | updateDialogFilterOrder | updateDialogFilters | updatePhoneCallSignalingData | updateChannelMessageForwards | updateReadChannelDiscussionInbox | updateReadChannelDiscussionOutbox | updatePeerBlocked | updateChannelUserTyping | updatePinnedMessages | updatePinnedChannelMessages | updateChat | updateGroupCallParticipants | updateGroupCall | updatePeerHistoryTTL | updateChatParticipant | updateChannelParticipant | updateBotStopped | updateGroupCallConnection | updateBotCommands | updatePendingJoinRequests | updateBotChatInviteRequester | updateMessageReactions;
export type updates_State = updates_state;
export type updates_Difference = updates_differenceEmpty | updates_difference | updates_differenceSlice | updates_differenceTooLong;
export type Updates = updatesTooLong | updateShortMessage | updateShortChatMessage | updateShort | updatesCombined | updates | updateShortSentMessage;
export type photos_Photos = photos_photos | photos_photosSlice;
export type photos_Photo = photos_photo;
export type upload_File = upload_file | upload_fileCdnRedirect;
export type DcOption = dcOption;
export type Config = config;
export type NearestDc = nearestDc;
export type help_AppUpdate = help_appUpdate | help_noAppUpdate;
export type help_InviteText = help_inviteText;
export type EncryptedChat = encryptedChatEmpty | encryptedChatWaiting | encryptedChatRequested | encryptedChat | encryptedChatDiscarded;
export type InputEncryptedChat = inputEncryptedChat;
export type EncryptedFile = encryptedFileEmpty | encryptedFile;
export type InputEncryptedFile = inputEncryptedFileEmpty | inputEncryptedFileUploaded | inputEncryptedFile | inputEncryptedFileBigUploaded;
export type EncryptedMessage = encryptedMessage | encryptedMessageService;
export type messages_DhConfig = messages_dhConfigNotModified | messages_dhConfig;
export type messages_SentEncryptedMessage = messages_sentEncryptedMessage | messages_sentEncryptedFile;
export type InputDocument = inputDocumentEmpty | inputDocument;
export type Document = documentEmpty | document;
export type help_Support = help_support;
export type NotifyPeer = notifyPeer | notifyUsers | notifyChats | notifyBroadcasts;
export type SendMessageAction = sendMessageTypingAction | sendMessageCancelAction | sendMessageRecordVideoAction | sendMessageUploadVideoAction | sendMessageRecordAudioAction | sendMessageUploadAudioAction | sendMessageUploadPhotoAction | sendMessageUploadDocumentAction | sendMessageGeoLocationAction | sendMessageChooseContactAction | sendMessageGamePlayAction | sendMessageRecordRoundAction | sendMessageUploadRoundAction | speakingInGroupCallAction | sendMessageHistoryImportAction | sendMessageChooseStickerAction | sendMessageEmojiInteraction | sendMessageEmojiInteractionSeen;
export type contacts_Found = contacts_found;
export type InputPrivacyKey = inputPrivacyKeyStatusTimestamp | inputPrivacyKeyChatInvite | inputPrivacyKeyPhoneCall | inputPrivacyKeyPhoneP2P | inputPrivacyKeyForwards | inputPrivacyKeyProfilePhoto | inputPrivacyKeyPhoneNumber | inputPrivacyKeyAddedByPhone;
export type PrivacyKey = privacyKeyStatusTimestamp | privacyKeyChatInvite | privacyKeyPhoneCall | privacyKeyPhoneP2P | privacyKeyForwards | privacyKeyProfilePhoto | privacyKeyPhoneNumber | privacyKeyAddedByPhone;
export type InputPrivacyRule = inputPrivacyValueAllowContacts | inputPrivacyValueAllowAll | inputPrivacyValueAllowUsers | inputPrivacyValueDisallowContacts | inputPrivacyValueDisallowAll | inputPrivacyValueDisallowUsers | inputPrivacyValueAllowChatParticipants | inputPrivacyValueDisallowChatParticipants;
export type PrivacyRule = privacyValueAllowContacts | privacyValueAllowAll | privacyValueAllowUsers | privacyValueDisallowContacts | privacyValueDisallowAll | privacyValueDisallowUsers | privacyValueAllowChatParticipants | privacyValueDisallowChatParticipants;
export type account_PrivacyRules = account_privacyRules;
export type AccountDaysTTL = accountDaysTTL;
export type DocumentAttribute = documentAttributeImageSize | documentAttributeAnimated | documentAttributeSticker | documentAttributeVideo | documentAttributeAudio | documentAttributeFilename | documentAttributeHasStickers;
export type messages_Stickers = messages_stickersNotModified | messages_stickers;
export type StickerPack = stickerPack;
export type messages_AllStickers = messages_allStickersNotModified | messages_allStickers;
export type messages_AffectedMessages = messages_affectedMessages;
export type WebPage = webPageEmpty | webPagePending | webPage | webPageNotModified;
export type Authorization = authorization;
export type account_Authorizations = account_authorizations;
export type account_Password = account_password;
export type account_PasswordSettings = account_passwordSettings;
export type account_PasswordInputSettings = account_passwordInputSettings;
export type auth_PasswordRecovery = auth_passwordRecovery;
export type ReceivedNotifyMessage = receivedNotifyMessage;
export type ExportedChatInvite = chatInviteExported;
export type ChatInvite = chatInviteAlready | chatInvite | chatInvitePeek;
export type InputStickerSet = inputStickerSetEmpty | inputStickerSetID | inputStickerSetShortName | inputStickerSetAnimatedEmoji | inputStickerSetDice | inputStickerSetAnimatedEmojiAnimations;
export type StickerSet = stickerSet;
export type messages_StickerSet = messages_stickerSet | messages_stickerSetNotModified;
export type BotCommand = botCommand;
export type BotInfo = botInfo;
export type KeyboardButton = keyboardButton | keyboardButtonUrl | keyboardButtonCallback | keyboardButtonRequestPhone | keyboardButtonRequestGeoLocation | keyboardButtonSwitchInline | keyboardButtonGame | keyboardButtonBuy | keyboardButtonUrlAuth | inputKeyboardButtonUrlAuth | keyboardButtonRequestPoll | inputKeyboardButtonUserProfile | keyboardButtonUserProfile;
export type KeyboardButtonRow = keyboardButtonRow;
export type ReplyMarkup = replyKeyboardHide | replyKeyboardForceReply | replyKeyboardMarkup | replyInlineMarkup;
export type MessageEntity = messageEntityUnknown | messageEntityMention | messageEntityHashtag | messageEntityBotCommand | messageEntityUrl | messageEntityEmail | messageEntityBold | messageEntityItalic | messageEntityCode | messageEntityPre | messageEntityTextUrl | messageEntityMentionName | inputMessageEntityMentionName | messageEntityPhone | messageEntityCashtag | messageEntityUnderline | messageEntityStrike | messageEntityBlockquote | messageEntityBankCard | messageEntitySpoiler;
export type InputChannel = inputChannelEmpty | inputChannel | inputChannelFromMessage;
export type contacts_ResolvedPeer = contacts_resolvedPeer;
export type MessageRange = messageRange;
export type updates_ChannelDifference = updates_channelDifferenceEmpty | updates_channelDifferenceTooLong | updates_channelDifference;
export type ChannelMessagesFilter = channelMessagesFilterEmpty | channelMessagesFilter;
export type ChannelParticipant = channelParticipant | channelParticipantSelf | channelParticipantCreator | channelParticipantAdmin | channelParticipantBanned | channelParticipantLeft;
export type ChannelParticipantsFilter = channelParticipantsRecent | channelParticipantsAdmins | channelParticipantsKicked | channelParticipantsBots | channelParticipantsBanned | channelParticipantsSearch | channelParticipantsContacts | channelParticipantsMentions;
export type channels_ChannelParticipants = channels_channelParticipants | channels_channelParticipantsNotModified;
export type channels_ChannelParticipant = channels_channelParticipant;
export type help_TermsOfService = help_termsOfService;
export type messages_SavedGifs = messages_savedGifsNotModified | messages_savedGifs;
export type InputBotInlineMessage = inputBotInlineMessageMediaAuto | inputBotInlineMessageText | inputBotInlineMessageMediaGeo | inputBotInlineMessageMediaVenue | inputBotInlineMessageMediaContact | inputBotInlineMessageGame | inputBotInlineMessageMediaInvoice;
export type InputBotInlineResult = inputBotInlineResult | inputBotInlineResultPhoto | inputBotInlineResultDocument | inputBotInlineResultGame;
export type BotInlineMessage = botInlineMessageMediaAuto | botInlineMessageText | botInlineMessageMediaGeo | botInlineMessageMediaVenue | botInlineMessageMediaContact | botInlineMessageMediaInvoice;
export type BotInlineResult = botInlineResult | botInlineMediaResult;
export type messages_BotResults = messages_botResults;
export type ExportedMessageLink = exportedMessageLink;
export type MessageFwdHeader = messageFwdHeader;
export type auth_CodeType = auth_codeTypeSms | auth_codeTypeCall | auth_codeTypeFlashCall | auth_codeTypeMissedCall;
export type auth_SentCodeType = auth_sentCodeTypeApp | auth_sentCodeTypeSms | auth_sentCodeTypeCall | auth_sentCodeTypeFlashCall | auth_sentCodeTypeMissedCall;
export type messages_BotCallbackAnswer = messages_botCallbackAnswer;
export type messages_MessageEditData = messages_messageEditData;
export type InputBotInlineMessageID = inputBotInlineMessageID | inputBotInlineMessageID64;
export type InlineBotSwitchPM = inlineBotSwitchPM;
export type messages_PeerDialogs = messages_peerDialogs;
export type TopPeer = topPeer;
export type TopPeerCategory = topPeerCategoryBotsPM | topPeerCategoryBotsInline | topPeerCategoryCorrespondents | topPeerCategoryGroups | topPeerCategoryChannels | topPeerCategoryPhoneCalls | topPeerCategoryForwardUsers | topPeerCategoryForwardChats;
export type TopPeerCategoryPeers = topPeerCategoryPeers;
export type contacts_TopPeers = contacts_topPeersNotModified | contacts_topPeers | contacts_topPeersDisabled;
export type DraftMessage = draftMessageEmpty | draftMessage;
export type messages_FeaturedStickers = messages_featuredStickersNotModified | messages_featuredStickers;
export type messages_RecentStickers = messages_recentStickersNotModified | messages_recentStickers;
export type messages_ArchivedStickers = messages_archivedStickers;
export type messages_StickerSetInstallResult = messages_stickerSetInstallResultSuccess | messages_stickerSetInstallResultArchive;
export type StickerSetCovered = stickerSetCovered | stickerSetMultiCovered;
export type MaskCoords = maskCoords;
export type InputStickeredMedia = inputStickeredMediaPhoto | inputStickeredMediaDocument;
export type Game = game;
export type InputGame = inputGameID | inputGameShortName;
export type HighScore = highScore;
export type messages_HighScores = messages_highScores;
export type RichText = textEmpty | textPlain | textBold | textItalic | textUnderline | textStrike | textFixed | textUrl | textEmail | textConcat | textSubscript | textSuperscript | textMarked | textPhone | textImage | textAnchor;
export type PageBlock = pageBlockUnsupported | pageBlockTitle | pageBlockSubtitle | pageBlockAuthorDate | pageBlockHeader | pageBlockSubheader | pageBlockParagraph | pageBlockPreformatted | pageBlockFooter | pageBlockDivider | pageBlockAnchor | pageBlockList | pageBlockBlockquote | pageBlockPullquote | pageBlockPhoto | pageBlockVideo | pageBlockCover | pageBlockEmbed | pageBlockEmbedPost | pageBlockCollage | pageBlockSlideshow | pageBlockChannel | pageBlockAudio | pageBlockKicker | pageBlockTable | pageBlockOrderedList | pageBlockDetails | pageBlockRelatedArticles | pageBlockMap;
export type PhoneCallDiscardReason = phoneCallDiscardReasonMissed | phoneCallDiscardReasonDisconnect | phoneCallDiscardReasonHangup | phoneCallDiscardReasonBusy;
export type DataJSON = dataJSON;
export type LabeledPrice = labeledPrice;
export type Invoice = invoice;
export type PaymentCharge = paymentCharge;
export type PostAddress = postAddress;
export type PaymentRequestedInfo = paymentRequestedInfo;
export type PaymentSavedCredentials = paymentSavedCredentialsCard;
export type WebDocument = webDocument | webDocumentNoProxy;
export type InputWebDocument = inputWebDocument;
export type InputWebFileLocation = inputWebFileLocation | inputWebFileGeoPointLocation;
export type upload_WebFile = upload_webFile;
export type payments_PaymentForm = payments_paymentForm;
export type payments_ValidatedRequestedInfo = payments_validatedRequestedInfo;
export type payments_PaymentResult = payments_paymentResult | payments_paymentVerificationNeeded;
export type payments_PaymentReceipt = payments_paymentReceipt;
export type payments_SavedInfo = payments_savedInfo;
export type InputPaymentCredentials = inputPaymentCredentialsSaved | inputPaymentCredentials | inputPaymentCredentialsApplePay | inputPaymentCredentialsGooglePay;
export type account_TmpPassword = account_tmpPassword;
export type ShippingOption = shippingOption;
export type InputStickerSetItem = inputStickerSetItem;
export type InputPhoneCall = inputPhoneCall;
export type PhoneCall = phoneCallEmpty | phoneCallWaiting | phoneCallRequested | phoneCallAccepted | phoneCall | phoneCallDiscarded;
export type PhoneConnection = phoneConnection | phoneConnectionWebrtc;
export type PhoneCallProtocol = phoneCallProtocol;
export type phone_PhoneCall = phone_phoneCall;
export type upload_CdnFile = upload_cdnFileReuploadNeeded | upload_cdnFile;
export type CdnPublicKey = cdnPublicKey;
export type CdnConfig = cdnConfig;
export type LangPackString = langPackString | langPackStringPluralized | langPackStringDeleted;
export type LangPackDifference = langPackDifference;
export type LangPackLanguage = langPackLanguage;
export type ChannelAdminLogEventAction = channelAdminLogEventActionChangeTitle | channelAdminLogEventActionChangeAbout | channelAdminLogEventActionChangeUsername | channelAdminLogEventActionChangePhoto | channelAdminLogEventActionToggleInvites | channelAdminLogEventActionToggleSignatures | channelAdminLogEventActionUpdatePinned | channelAdminLogEventActionEditMessage | channelAdminLogEventActionDeleteMessage | channelAdminLogEventActionParticipantJoin | channelAdminLogEventActionParticipantLeave | channelAdminLogEventActionParticipantInvite | channelAdminLogEventActionParticipantToggleBan | channelAdminLogEventActionParticipantToggleAdmin | channelAdminLogEventActionChangeStickerSet | channelAdminLogEventActionTogglePreHistoryHidden | channelAdminLogEventActionDefaultBannedRights | channelAdminLogEventActionStopPoll | channelAdminLogEventActionChangeLinkedChat | channelAdminLogEventActionChangeLocation | channelAdminLogEventActionToggleSlowMode | channelAdminLogEventActionStartGroupCall | channelAdminLogEventActionDiscardGroupCall | channelAdminLogEventActionParticipantMute | channelAdminLogEventActionParticipantUnmute | channelAdminLogEventActionToggleGroupCallSetting | channelAdminLogEventActionParticipantJoinByInvite | channelAdminLogEventActionExportedInviteDelete | channelAdminLogEventActionExportedInviteRevoke | channelAdminLogEventActionExportedInviteEdit | channelAdminLogEventActionParticipantVolume | channelAdminLogEventActionChangeHistoryTTL | channelAdminLogEventActionParticipantJoinByRequest | channelAdminLogEventActionToggleNoForwards | channelAdminLogEventActionSendMessage | channelAdminLogEventActionChangeAvailableReactions;
export type ChannelAdminLogEvent = channelAdminLogEvent;
export type channels_AdminLogResults = channels_adminLogResults;
export type ChannelAdminLogEventsFilter = channelAdminLogEventsFilter;
export type PopularContact = popularContact;
export type messages_FavedStickers = messages_favedStickersNotModified | messages_favedStickers;
export type RecentMeUrl = recentMeUrlUnknown | recentMeUrlUser | recentMeUrlChat | recentMeUrlChatInvite | recentMeUrlStickerSet;
export type help_RecentMeUrls = help_recentMeUrls;
export type InputSingleMedia = inputSingleMedia;
export type WebAuthorization = webAuthorization;
export type account_WebAuthorizations = account_webAuthorizations;
export type InputMessage = inputMessageID | inputMessageReplyTo | inputMessagePinned | inputMessageCallbackQuery;
export type InputDialogPeer = inputDialogPeer | inputDialogPeerFolder;
export type DialogPeer = dialogPeer | dialogPeerFolder;
export type messages_FoundStickerSets = messages_foundStickerSetsNotModified | messages_foundStickerSets;
export type FileHash = fileHash;
export type InputClientProxy = inputClientProxy;
export type help_TermsOfServiceUpdate = help_termsOfServiceUpdateEmpty | help_termsOfServiceUpdate;
export type InputSecureFile = inputSecureFileUploaded | inputSecureFile;
export type SecureFile = secureFileEmpty | secureFile;
export type SecureData = secureData;
export type SecurePlainData = securePlainPhone | securePlainEmail;
export type SecureValueType = secureValueTypePersonalDetails | secureValueTypePassport | secureValueTypeDriverLicense | secureValueTypeIdentityCard | secureValueTypeInternalPassport | secureValueTypeAddress | secureValueTypeUtilityBill | secureValueTypeBankStatement | secureValueTypeRentalAgreement | secureValueTypePassportRegistration | secureValueTypeTemporaryRegistration | secureValueTypePhone | secureValueTypeEmail;
export type SecureValue = secureValue;
export type InputSecureValue = inputSecureValue;
export type SecureValueHash = secureValueHash;
export type SecureValueError = secureValueErrorData | secureValueErrorFrontSide | secureValueErrorReverseSide | secureValueErrorSelfie | secureValueErrorFile | secureValueErrorFiles | secureValueError | secureValueErrorTranslationFile | secureValueErrorTranslationFiles;
export type SecureCredentialsEncrypted = secureCredentialsEncrypted;
export type account_AuthorizationForm = account_authorizationForm;
export type account_SentEmailCode = account_sentEmailCode;
export type help_DeepLinkInfo = help_deepLinkInfoEmpty | help_deepLinkInfo;
export type SavedContact = savedPhoneContact;
export type account_Takeout = account_takeout;
export type PasswordKdfAlgo = passwordKdfAlgoUnknown | passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow;
export type SecurePasswordKdfAlgo = securePasswordKdfAlgoUnknown | securePasswordKdfAlgoPBKDF2HMACSHA512iter100000 | securePasswordKdfAlgoSHA512;
export type SecureSecretSettings = secureSecretSettings;
export type InputCheckPasswordSRP = inputCheckPasswordEmpty | inputCheckPasswordSRP;
export type SecureRequiredType = secureRequiredType | secureRequiredTypeOneOf;
export type help_PassportConfig = help_passportConfigNotModified | help_passportConfig;
export type InputAppEvent = inputAppEvent;
export type JSONObjectValue = jsonObjectValue;
export type JSONValue = jsonNull | jsonBool | jsonNumber | jsonString | jsonArray | jsonObject;
export type PageTableCell = pageTableCell;
export type PageTableRow = pageTableRow;
export type PageCaption = pageCaption;
export type PageListItem = pageListItemText | pageListItemBlocks;
export type PageListOrderedItem = pageListOrderedItemText | pageListOrderedItemBlocks;
export type PageRelatedArticle = pageRelatedArticle;
export type Page = page;
export type help_SupportName = help_supportName;
export type help_UserInfo = help_userInfoEmpty | help_userInfo;
export type PollAnswer = pollAnswer;
export type Poll = poll;
export type PollAnswerVoters = pollAnswerVoters;
export type PollResults = pollResults;
export type ChatOnlines = chatOnlines;
export type StatsURL = statsURL;
export type ChatAdminRights = chatAdminRights;
export type ChatBannedRights = chatBannedRights;
export type InputWallPaper = inputWallPaper | inputWallPaperSlug | inputWallPaperNoFile;
export type account_WallPapers = account_wallPapersNotModified | account_wallPapers;
export type CodeSettings = codeSettings;
export type WallPaperSettings = wallPaperSettings;
export type AutoDownloadSettings = autoDownloadSettings;
export type account_AutoDownloadSettings = account_autoDownloadSettings;
export type EmojiKeyword = emojiKeyword | emojiKeywordDeleted;
export type EmojiKeywordsDifference = emojiKeywordsDifference;
export type EmojiURL = emojiURL;
export type EmojiLanguage = emojiLanguage;
export type Folder = folder;
export type InputFolderPeer = inputFolderPeer;
export type FolderPeer = folderPeer;
export type messages_SearchCounter = messages_searchCounter;
export type UrlAuthResult = urlAuthResultRequest | urlAuthResultAccepted | urlAuthResultDefault;
export type ChannelLocation = channelLocationEmpty | channelLocation;
export type PeerLocated = peerLocated | peerSelfLocated;
export type RestrictionReason = restrictionReason;
export type InputTheme = inputTheme | inputThemeSlug;
export type Theme = theme;
export type account_Themes = account_themesNotModified | account_themes;
export type auth_LoginToken = auth_loginToken | auth_loginTokenMigrateTo | auth_loginTokenSuccess;
export type account_ContentSettings = account_contentSettings;
export type messages_InactiveChats = messages_inactiveChats;
export type BaseTheme = baseThemeClassic | baseThemeDay | baseThemeNight | baseThemeTinted | baseThemeArctic;
export type InputThemeSettings = inputThemeSettings;
export type ThemeSettings = themeSettings;
export type WebPageAttribute = webPageAttributeTheme;
export type MessageUserVote = messageUserVote | messageUserVoteInputOption | messageUserVoteMultiple;
export type messages_VotesList = messages_votesList;
export type BankCardOpenUrl = bankCardOpenUrl;
export type payments_BankCardData = payments_bankCardData;
export type DialogFilter = dialogFilter;
export type DialogFilterSuggested = dialogFilterSuggested;
export type StatsDateRangeDays = statsDateRangeDays;
export type StatsAbsValueAndPrev = statsAbsValueAndPrev;
export type StatsPercentValue = statsPercentValue;
export type StatsGraph = statsGraphAsync | statsGraphError | statsGraph;
export type MessageInteractionCounters = messageInteractionCounters;
export type stats_BroadcastStats = stats_broadcastStats;
export type help_PromoData = help_promoDataEmpty | help_promoData;
export type VideoSize = videoSize;
export type StatsGroupTopPoster = statsGroupTopPoster;
export type StatsGroupTopAdmin = statsGroupTopAdmin;
export type StatsGroupTopInviter = statsGroupTopInviter;
export type stats_MegagroupStats = stats_megagroupStats;
export type GlobalPrivacySettings = globalPrivacySettings;
export type help_CountryCode = help_countryCode;
export type help_Country = help_country;
export type help_CountriesList = help_countriesListNotModified | help_countriesList;
export type MessageViews = messageViews;
export type messages_MessageViews = messages_messageViews;
export type messages_DiscussionMessage = messages_discussionMessage;
export type MessageReplyHeader = messageReplyHeader;
export type MessageReplies = messageReplies;
export type PeerBlocked = peerBlocked;
export type stats_MessageStats = stats_messageStats;
export type GroupCall = groupCallDiscarded | groupCall;
export type InputGroupCall = inputGroupCall;
export type GroupCallParticipant = groupCallParticipant;
export type phone_GroupCall = phone_groupCall;
export type phone_GroupParticipants = phone_groupParticipants;
export type InlineQueryPeerType = inlineQueryPeerTypeSameBotPM | inlineQueryPeerTypePM | inlineQueryPeerTypeChat | inlineQueryPeerTypeMegagroup | inlineQueryPeerTypeBroadcast;
export type messages_HistoryImport = messages_historyImport;
export type messages_HistoryImportParsed = messages_historyImportParsed;
export type messages_AffectedFoundMessages = messages_affectedFoundMessages;
export type ChatInviteImporter = chatInviteImporter;
export type messages_ExportedChatInvites = messages_exportedChatInvites;
export type messages_ExportedChatInvite = messages_exportedChatInvite | messages_exportedChatInviteReplaced;
export type messages_ChatInviteImporters = messages_chatInviteImporters;
export type ChatAdminWithInvites = chatAdminWithInvites;
export type messages_ChatAdminsWithInvites = messages_chatAdminsWithInvites;
export type messages_CheckedHistoryImportPeer = messages_checkedHistoryImportPeer;
export type phone_JoinAsPeers = phone_joinAsPeers;
export type phone_ExportedGroupCallInvite = phone_exportedGroupCallInvite;
export type GroupCallParticipantVideoSourceGroup = groupCallParticipantVideoSourceGroup;
export type GroupCallParticipantVideo = groupCallParticipantVideo;
export type stickers_SuggestedShortName = stickers_suggestedShortName;
export type BotCommandScope = botCommandScopeDefault | botCommandScopeUsers | botCommandScopeChats | botCommandScopeChatAdmins | botCommandScopePeer | botCommandScopePeerAdmins | botCommandScopePeerUser;
export type account_ResetPasswordResult = account_resetPasswordFailedWait | account_resetPasswordRequestedWait | account_resetPasswordOk;
export type SponsoredMessage = sponsoredMessage;
export type messages_SponsoredMessages = messages_sponsoredMessages;
export type SearchResultsCalendarPeriod = searchResultsCalendarPeriod;
export type messages_SearchResultsCalendar = messages_searchResultsCalendar;
export type SearchResultsPosition = searchResultPosition;
export type messages_SearchResultsPositions = messages_searchResultsPositions;
export type channels_SendAsPeers = channels_sendAsPeers;
export type users_UserFull = users_userFull;
export type messages_PeerSettings = messages_peerSettings;
export type auth_LoggedOut = auth_loggedOut;
export type ReactionCount = reactionCount;
export type MessageReactions = messageReactions;
export type messages_MessageReactionsList = messages_messageReactionsList;
export type AvailableReaction = availableReaction;
export type messages_AvailableReactions = messages_availableReactionsNotModified | messages_availableReactions;
export type messages_TranslatedText = messages_translateNoResult | messages_translateResultText;
export type MessagePeerReaction = messagePeerReaction;
export type GroupCallStreamChannel = groupCallStreamChannel;
export type phone_GroupCallStreamChannels = phone_groupCallStreamChannels;
export type phone_GroupCallStreamRtmpUrl = phone_groupCallStreamRtmpUrl;

export class MyAsyncLocalStorage {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string|null>;
}

export type EventType = 'updatesTooLong'
  | 'updateShortMessage'
  | 'updateShortChatMessage'
  | 'updateShort'
  | 'updatesCombined'
  | 'updates'
  | 'updateShortSentMessage';
export type EventHandler = (eventData: { [key: string]: any }) => any;

export function getSRPParams(params: {
  g: number,
  p: Uint8Array,
  salt1: Uint8Array,
  salt2: Uint8Array,
  gB: Uint8Array,
  password: string,
}): Promise<{
  A: Uint8Array,
  M1: Uint8Array;
}>;

// Auto-generated with https://github.com/VityaSchel/mtproto-core-typescript-codegen in 0.070s
