// Type definitions for node-telegram-bot-api 0.30
// Project: https://github.com/yagop/node-telegram-bot-api
// Definitions by: Alex Muench <https://github.com/ammuench>
//                 Agadar <https://github.com/agadar>
//                 Giorgio Garasto <https://github.com/Dabolus>
//                 Kallu609 <https://github.com/Kallu609>
//                 XC-Zhang <https://github.com/XC-Zhang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Stream, Readable } from 'stream';
import { ServerOptions } from 'https';
import { Options } from 'request';

declare namespace TelegramBot {
    interface TextListener {
        regexp: RegExp;
        callback(msg: Message, match: RegExpExecArray | null): void;
    }

    interface ReplyListener {
        id: number;
        chatId: number | string;
        messageId: number | string;
        callback(msg: Message): void;
    }

    type ChatType = 'private' | 'group' | 'supergroup' | 'channel';

    type ChatAction = 'typing' | 'upload_photo' | 'record_video' | 'upload_video' | 'record_audio' | 'upload_audio' | 'upload_document' | 'find_location' | 'record_video_note' | 'upload_video_note';

    type ChatMemberStatus = 'creator' | 'administrator' | 'member' | 'restricted' | 'left' | 'kicked';

    type DocumentMimeType = 'application/pdf' | 'application/zip';

    type MessageEntityType = 'mention' | 'hashtag' | 'bot_command' | 'url' | 'email' | 'bold' | 'italic' | 'code' | 'pre' | 'text_link' | 'text_mention';

    type ParseMode = 'Markdown' | 'HTML';

    /// METHODS OPTIONS ///
    interface PollingOptions {
        interval?: string | number;
        autoStart?: boolean;
        params?: GetUpdatesOptions;
    }

    interface WebHookOptions {
        host?: string;
        port?: number;
        key: string;
        cert: string;
        pfx: string;
        autoOpen?: boolean;
        https?: ServerOptions;
        healthEndpoint?: string;
    }

    interface ConstructorOptions {
        polling?: boolean | PollingOptions;
        webHook?: boolean | WebHookOptions;
        onlyFirstMatch?: boolean;
        request?: Options;
        baseApiUrl?: string;
        filepath?: boolean;
    }

    interface StartPollingOptions extends ConstructorOptions {
        restart?: boolean;
    }

    interface StopPollingOptions {
        cancel?: boolean;
        reason?: string;
    }

    interface SetWebHookOptions {
        url?: string;
        certificate?: string | Stream;
        max_connections?: number;
        allowed_updates?: string[];
    }

    interface GetUpdatesOptions {
        offset?: number;
        limit?: number;
        timeout?: number;
        allowed_updates?: string[];
    }

    interface SendBasicOptions {
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }

    interface SendMessageOptions extends SendBasicOptions {
        parse_mode?: ParseMode;
        disable_web_page_preview?: boolean;
    }

    interface AnswerInlineQueryOptions {
        cache_time?: number;
        is_personal?: boolean;
        next_offset?: string;
        switch_pm_text?: string;
        switch_pm_parameter?: string;
    }

    interface ForwardMessageOptions {
        disable_notification?: boolean;
    }

    interface SendPhotoOptions extends SendBasicOptions {
        caption?: string;
    }

    interface SendAudioOptions extends SendBasicOptions {
        caption?: string;
        duration?: number;
        performer?: string;
        title?: string;
    }

    interface SendDocumentOptions extends SendBasicOptions {
        caption?: string;
    }

    interface SendMediaGroupOptions {
        disable_notification?: boolean;
        reply_to_message_id?: number;
    }

    type SendStickerOptions = SendBasicOptions;

    interface SendVideoOptions extends SendBasicOptions {
        duration?: number;
        width?: number;
        height?: number;
        caption?: string;
    }

    interface SendVoiceOptions extends SendBasicOptions {
        caption?: string;
        duration?: number;
    }

    interface SendVideoNoteOptions extends SendBasicOptions {
        duration?: number;
        length?: number;
    }

    type SendLocationOptions = SendBasicOptions;

    type EditMessageLiveLocationOptions = EditMessageCaptionOptions;

    type StopMessageLiveLocationOptions = EditMessageCaptionOptions;

    interface SendVenueOptions extends SendBasicOptions {
        foursquare_id?: string;
    }

    interface SendContactOptions extends SendBasicOptions {
        last_name?: string;
    }

    type SendGameOptions = SendBasicOptions;

    interface SendInvoiceOptions extends SendBasicOptions {
        provider_data?: string;
        photo_url?: string;
        photo_size?: number;
        photo_width?: number;
        photo_height?: number;
        need_name?: boolean;
        need_phone_number?: boolean;
        need_email?: boolean;
        need_shipping_address?: boolean;
        is_flexible?: boolean;
    }

    interface RestrictChatMemberOptions {
        until_date?: number;
        can_send_messages?: boolean;
        can_send_media_messages?: boolean;
        can_send_other_messages?: boolean;
        can_add_web_page_previews?: boolean;
    }

    interface PromoteChatMemberOptions {
        can_change_info?: boolean;
        can_post_messages?: boolean;
        can_edit_messages?: boolean;
        can_delete_messages?: boolean;
        can_invite_users?: boolean;
        can_restrict_members?: boolean;
        can_pin_messages?: boolean;
        can_promote_members?: boolean;
    }

    interface AnswerCallbackQueryOptions {
        callback_query_id: string;
        text?: string;
        show_alert?: boolean;
        url?: string;
        cache_time?: number;
    }

    interface EditMessageTextOptions extends EditMessageCaptionOptions {
        parse_mode?: ParseMode;
        disable_web_page_preview?: boolean;
    }

    interface EditMessageCaptionOptions extends EditMessageReplyMarkupOptions {
        reply_markup?: InlineKeyboardMarkup;
    }

    interface EditMessageReplyMarkupOptions {
        chat_id?: number | string;
        message_id?: number;
        inline_message_id?: string;
    }

    interface GetUserProfilePhotosOptions {
        offset?: number;
        limit?: number;
    }

    interface SetGameScoreOptions {
        force?: boolean;
        disable_edit_message?: boolean;
        chat_id?: number;
        message_id?: number;
        inline_message_id?: string;
    }

    interface GetGameHighScoresOptions {
        chat_id?: number;
        message_id?: number;
        inline_message_id?: string;
    }

    interface AnswerShippingQueryOptions {
        shipping_options?: ShippingOption[];
        error_message?: string;
    }

    interface AnswerPreCheckoutQueryOptions {
        error_message?: string;
    }

    /// TELEGRAM TYPES ///
    interface Update {
        update_id: number;
        message?: Message;
        edited_message?: Message;
        channel_post?: Message;
        edited_channel_post?: Message;
        inline_query?: InlineQuery;
        chosen_inline_result?: ChosenInlineResult;
        callback_query?: CallbackQuery;
        shipping_query?: ShippingQuery;
        pre_checkout_query?: PreCheckoutQuery;
    }

    interface WebhookInfo {
        url: string;
        has_custom_certificate: boolean;
        pending_update_count: number;
        last_error_date?: number;
        last_error_message?: string;
        max_connections?: number;
        allowed_updates?: string[];
    }

    interface User {
        id: number;
        is_bot: boolean;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
    }

    interface Chat {
        id: number;
        type: ChatType;
        title?: string;
        username?: string;
        first_name?: string;
        last_name?: string;
        all_members_are_administrators?: boolean;
        photo?: ChatPhoto;
        description?: string;
        invite_link?: string;
        pinned_message?: Message;
    }

    interface Message {
        message_id: number;
        from?: User;
        date: number;
        chat: Chat;
        forward_from?: User;
        forward_from_chat?: Chat;
        forward_from_message_id?: number;
        forward_signature?: string;
        forward_date?: number;
        reply_to_message?: Message;
        edit_date?: number;
        author_signature?: string;
        text?: string;
        entities?: MessageEntity[];
        audio?: Audio;
        document?: Document;
        game?: Game;
        photo?: PhotoSize[];
        sticker?: Sticker;
        video?: Video;
        voice?: Voice;
        video_note?: VideoNote;
        caption?: string;
        contact?: Contact;
        location?: Location;
        venue?: Venue;
        new_chat_members?: User[];
        left_chat_member?: User;
        new_chat_title?: string;
        new_chat_photo?: PhotoSize[];
        delete_chat_photo?: boolean;
        group_chat_created?: boolean;
        supergroup_chat_created?: boolean;
        channel_chat_created?: boolean;
        migrate_to_chat_id?: number;
        migrate_from_chat_id?: number;
        pinned_message?: Message;
        invoice?: Invoice;
        successful_payment?: SuccessfulPayment;
    }

    interface MessageEntity {
        type: MessageEntityType;
        offset: number;
        length: number;
        url?: string;
        user?: User;
    }

    interface FileBase {
        file_id: string;
        file_size?: number;
    }

    interface PhotoSize extends FileBase {
        width: number;
        height: number;
    }

    interface Audio extends FileBase {
        duration: number;
        performer?: string;
        title?: string;
        mime_type?: string;
    }

    interface Document extends FileBase {
        thumb?: PhotoSize;
        file_name?: string;
        mime_type?: string;
    }

    interface Video extends FileBase {
        width: number;
        height: number;
        duration: number;
        thumb?: PhotoSize;
        mime_type?: string;
    }

    interface Voice extends FileBase {
        duration: number;
        mime_type?: string;
    }

    interface InputMediaBase {
        media: string;
        caption?: string;
        parse_mode?: ParseMode;
    }

    interface InputMediaPhoto extends InputMediaBase {
        type: 'photo';
    }

    interface InputMediaVideo extends InputMediaBase {
        type: 'video';
        width?: number;
        height?: number;
        duration?: number;
        supports_streaming?: boolean;
    }

    type InputMedia = InputMediaPhoto | InputMediaVideo;

    interface VideoNote extends FileBase {
        length: number;
        duration: number;
        thumb?: PhotoSize;
    }

    interface Contact {
        phone_number: string;
        first_name: string;
        last_name?: string;
        user_id?: number;
    }

    interface Location {
        longitude: number;
        latitude: number;
    }

    interface Venue {
        location: Location;
        title: string;
        address: string;
        foursquare_id?: string;
    }

    interface UserProfilePhotos {
        total_count: number;
        photos: PhotoSize[][];
    }

    interface File extends FileBase {
        file_path?: string;
    }

    interface ReplyKeyboardMarkup {
        keyboard: KeyboardButton[][];
        resize_keyboard?: boolean;
        one_time_keyboard?: boolean;
        selective?: boolean;
    }

    interface KeyboardButton {
        text: string;
        request_contact?: boolean;
        request_location?: boolean;
    }

    interface ReplyKeyboardRemove {
        remove_keyboard: boolean;
        selective?: boolean;
    }

    interface InlineKeyboardMarkup {
        inline_keyboard: InlineKeyboardButton[][];
    }

    interface InlineKeyboardButton {
        text: string;
        url?: string;
        callback_data?: string;
        switch_inline_query?: string;
        switch_inline_query_current_chat?: string;
        callback_game?: CallbackGame;
        pay?: boolean;
    }

    interface CallbackQuery {
        id: string;
        from: User;
        message?: Message;
        inline_message_id?: string;
        chat_instance: string;
        data?: string;
        game_short_name?: string;
    }

    interface ForceReply {
        force_reply: boolean;
        selective?: boolean;
    }

    interface ChatPhoto {
        small_file_id: string;
        big_file_id: string;
    }

    interface ChatMember {
        user: User;
        status: ChatMemberStatus;
        until_date?: number;
        can_be_edited?: boolean;
        can_change_info?: boolean;
        can_post_messages?: boolean;
        can_edit_messages?: boolean;
        can_delete_messages?: boolean;
        can_invite_users?: boolean;
        can_restrict_members?: boolean;
        can_pin_messages?: boolean;
        can_promote_members?: boolean;
        can_send_messages?: boolean;
        can_send_media_messages?: boolean;
        can_send_other_messages?: boolean;
        can_add_web_page_previews?: boolean;
    }

    interface Sticker {
        file_id: string;
        width: number;
        height: number;
        thumb?: PhotoSize;
        emoji?: string;
        set_name?: string;
        mask_position?: MaskPosition;
        file_size?: number;
    }

    interface StickerSet {
        name: string;
        title: string;
        contains_masks: boolean;
        stickers: Sticker[];
    }

    interface MaskPosition {
        point: string;
        x_shift: number;
        y_shift: number;
        scale: number;
    }

    interface InlineQuery {
        id: string;
        from: User;
        location?: Location;
        query: string;
        offset: string;
    }

    interface InlineQueryResultBase {
        id: string;
        reply_markup?: InlineKeyboardMarkup;
    }

    interface InlineQueryResultArticle extends InlineQueryResultBase {
        type: 'article';
        title: string;
        input_message_content: InputMessageContent;
        url?: string;
        hide_url?: boolean;
        description?: string;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    interface InlineQueryResultPhoto extends InlineQueryResultBase {
        type: 'photo';
        photo_url: string;
        thumb_url: string;
        photo_width?: number;
        photo_height?: number;
        title?: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultGif extends InlineQueryResultBase {
        type: 'gif';
        gif_url: string;
        gif_width?: number;
        gif_height?: number;
        gif_duration?: number;
        thumb_url?: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultMpeg4Gif extends InlineQueryResultBase {
        type: 'mpeg4_gif';
        mpeg4_url: string;
        mpeg4_width?: number;
        mpeg4_height?: number;
        mpeg4_duration?: number;
        thumb_url?: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultVideo extends InlineQueryResultBase {
        type: 'video';
        video_url: string;
        mime_type: string;
        thumb_url: string;
        title: string;
        caption?: string;
        video_width?: number;
        video_height?: number;
        video_duration?: number;
        description?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultAudio extends InlineQueryResultBase {
        type: 'audio';
        audio_url: string;
        title: string;
        caption?: string;
        performer?: string;
        audio_duration?: number;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultVoice extends InlineQueryResultBase {
        type: 'voice';
        voice_url: string;
        title: string;
        caption?: string;
        voice_duration?: number;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultDocument extends InlineQueryResultBase {
        type: 'document';
        title: string;
        caption?: string;
        document_url: string;
        mime_type: string;
        description?: string;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    interface InlineQueryResultLocationBase extends InlineQueryResultBase {
        latitude: number;
        longitude: number;
        title: string;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    interface InlineQueryResultLocation extends InlineQueryResultLocationBase {
        type: 'location';
    }

    interface InlineQueryResultVenue extends InlineQueryResultLocationBase {
        type: 'venue';
        address: string;
        foursquare_id?: string;
    }

    interface InlineQueryResultContact extends InlineQueryResultBase {
        type: 'contact';
        phone_number: string;
        first_name: string;
        last_name?: string;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    interface InlineQueryResultGame extends InlineQueryResultBase {
        type: 'game';
        game_short_name: string;
    }

    interface InlineQueryResultCachedPhoto extends InlineQueryResultBase {
        type: 'photo';
        photo_file_id: string;
        title?: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedGif extends InlineQueryResultBase {
        type: 'gif';
        gif_file_id: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedMpeg4Gif extends InlineQueryResultBase {
        type: 'mpeg4_gif';
        mpeg4_file_id: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedSticker extends InlineQueryResultBase {
        type: 'sticker';
        sticker_file_id: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedDocument extends InlineQueryResultBase {
        type: 'document';
        title: string;
        document_file_id: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedVideo extends InlineQueryResultBase {
        type: 'video';
        video_file_id: string;
        title: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedVoice extends InlineQueryResultBase {
        type: 'voice';
        voice_file_id: string;
        title: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InlineQueryResultCachedAudio extends InlineQueryResultBase {
        type: 'audio';
        audio_file_id: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    type InlineQueryResult =
        InlineQueryResultCachedAudio |
        InlineQueryResultCachedDocument |
        InlineQueryResultCachedGif |
        InlineQueryResultCachedMpeg4Gif |
        InlineQueryResultCachedPhoto |
        InlineQueryResultCachedSticker |
        InlineQueryResultCachedVideo |
        InlineQueryResultCachedVoice |
        InlineQueryResultArticle |
        InlineQueryResultAudio |
        InlineQueryResultContact |
        InlineQueryResultGame |
        InlineQueryResultDocument |
        InlineQueryResultGif |
        InlineQueryResultLocation |
        InlineQueryResultMpeg4Gif |
        InlineQueryResultPhoto |
        InlineQueryResultVenue |
        InlineQueryResultVideo |
        InlineQueryResultVoice;

    type InputMessageContent = object;

    interface InputTextMessageContent extends InputMessageContent {
        message_text: string;
        parse_mode?: ParseMode;
        disable_web_page_preview?: boolean;
    }

    interface InputLocationMessageContent extends InputMessageContent {
        latitude: number;
        longitude: number;
    }

    interface InputVenueMessageContent extends InputLocationMessageContent {
        title: string;
        address: string;
        foursquare_id?: string;
    }

    interface InputContactMessageContent extends InputMessageContent {
        phone_number: string;
        first_name: string;
        last_name?: string;
    }

    interface ChosenInlineResult {
        result_id: string;
        from: User;
        location?: Location;
        inline_message_id?: string;
        query: string;
    }

    interface ResponseParameters {
        migrate_to_chat_id?: number;
        retry_after?: number;
    }

    interface LabeledPrice {
        label: string;
        amount: number;
    }

    interface Invoice {
        title: string;
        description: string;
        start_parameter: string;
        currency: string;
        total_amount: number;
    }

    interface ShippingAddress {
        country_code: string;
        state: string;
        city: string;
        street_line1: string;
        street_line2: string;
        post_code: string;
    }

    interface OrderInfo {
        name?: string;
        phone_number?: string;
        email?: string;
        shipping_address?: ShippingAddress;
    }

    interface ShippingOption {
        id: string;
        title: string;
        prices: LabeledPrice[];
    }

    interface SuccessfulPayment {
        currency: string;
        total_amount: number;
        invoice_payload: string;
        shipping_option_id?: string;
        order_info?: OrderInfo;
        telegram_payment_charge_id: string;
        provider_payment_charge_id: string;
    }

    interface ShippingQuery {
        id: string;
        from: User;
        invoice_payload: string;
        shipping_address: ShippingAddress;
    }

    interface PreCheckoutQuery {
        id: string;
        from: User;
        currency: string;
        total_amount: number;
        invoice_payload: string;
        shipping_option_id?: string;
        order_info?: OrderInfo;
    }

    interface Game {
        title: string;
        description: string;
        photo: PhotoSize[];
        text?: string;
        text_entities?: MessageEntity[];
        animation?: Animation;
    }

    interface Animation {
        file_id: string;
        thumb?: PhotoSize;
        file_name?: string;
        mime_type?: string;
        file_size?: number;
    }

    type CallbackGame = object;

    interface GameHighScore {
        position: number;
        user: User;
        score: number;
    }
}

declare class TelegramBot extends EventEmitter {
    constructor(token: string, options?: TelegramBot.ConstructorOptions);

    startPolling(options?: TelegramBot.StartPollingOptions): Promise<any>;

    stopPolling(options?: TelegramBot.StopPollingOptions): Promise<any>;

    isPolling(): boolean;

    openWebHook(): Promise<any>;

    closeWebHook(): Promise<any>;

    hasOpenWebHook(): boolean;

    getMe(): Promise<TelegramBot.User>;

    setWebHook(url: string, options?: TelegramBot.SetWebHookOptions): Promise<any>;

    deleteWebHook(): Promise<boolean>;

    getWebHookInfo(): Promise<TelegramBot.WebhookInfo>;

    getUpdates(options?: TelegramBot.GetUpdatesOptions): Promise<TelegramBot.Update[]>;

    processUpdate(update: TelegramBot.Update): void;

    sendMessage(chatId: number | string, text: string, options?: TelegramBot.SendMessageOptions): Promise<TelegramBot.Message>;

    answerInlineQuery(inlineQueryId: string, results: ReadonlyArray<TelegramBot.InlineQueryResult>, options?: TelegramBot.AnswerInlineQueryOptions): Promise<boolean>;

    forwardMessage(chatId: number | string, fromChatId: number | string, messageId: number | string, options?: TelegramBot.ForwardMessageOptions): Promise<TelegramBot.Message>;

    sendPhoto(chatId: number | string, photo: string | Stream | Buffer, options?: TelegramBot.SendPhotoOptions): Promise<TelegramBot.Message>;

    sendAudio(chatId: number | string, audio: string | Stream | Buffer, options?: TelegramBot.SendAudioOptions): Promise<TelegramBot.Message>;

    sendDocument(chatId: number | string, doc: string | Stream | Buffer, options?: TelegramBot.SendDocumentOptions, fileOpts?: any): Promise<TelegramBot.Message>;

    sendMediaGroup(chatId: number | string, media: ReadonlyArray<TelegramBot.InputMedia>, options?: TelegramBot.SendMediaGroupOptions): Promise<TelegramBot.Message>;

    sendSticker(chatId: number | string, sticker: string | Stream | Buffer, options?: TelegramBot.SendStickerOptions): Promise<TelegramBot.Message>;

    sendVideo(chatId: number | string, video: string | Stream | Buffer, options?: TelegramBot.SendVideoOptions): Promise<TelegramBot.Message>;

    sendVideoNote(chatId: number | string, videoNote: string | Stream | Buffer, options?: TelegramBot.SendVideoNoteOptions): Promise<TelegramBot.Message>;

    sendVoice(chatId: number | string, voice: string | Stream | Buffer, options?: TelegramBot.SendVoiceOptions): Promise<TelegramBot.Message>;

    sendChatAction(chatId: number | string, action: TelegramBot.ChatAction): Promise<boolean>;

    kickChatMember(chatId: number | string, userId: string): Promise<boolean>;

    unbanChatMember(chatId: number | string, userId: string): Promise<boolean>;

    restrictChatMember(chatId: number | string, userId: string, options?: TelegramBot.RestrictChatMemberOptions): Promise<boolean>;

    promoteChatMember(chatId: number | string, userId: string, options?: TelegramBot.PromoteChatMemberOptions): Promise<boolean>;

    exportChatInviteLink(chatId: number | string): Promise<string>;

    setChatPhoto(chatId: number | string, photo: string | Stream | Buffer): Promise<boolean>;

    deleteChatPhoto(chatId: number | string): Promise<boolean>;

    setChatTitle(chatId: number | string, title: string): Promise<boolean>;

    setChatDescription(chatId: number | string, description: string): Promise<boolean>;

    pinChatMessage(chatId: number | string, messageId: string): Promise<boolean>;

    unpinChatMessage(chatId: number | string): Promise<boolean>;

    answerCallbackQuery(callbackQueryId: string, options?: Partial<TelegramBot.AnswerCallbackQueryOptions>): Promise<boolean>;

    /**
     * @deprecated since version 0.30.0
     */
    answerCallbackQuery(options?: TelegramBot.AnswerCallbackQueryOptions): Promise<boolean>;

    editMessageText(text: string, options?: TelegramBot.EditMessageTextOptions): Promise<TelegramBot.Message | boolean>;

    editMessageCaption(caption: string, options?: TelegramBot.EditMessageCaptionOptions): Promise<TelegramBot.Message | boolean>;

    editMessageReplyMarkup(replyMarkup: TelegramBot.InlineKeyboardMarkup, options?: TelegramBot.EditMessageReplyMarkupOptions): Promise<TelegramBot.Message | boolean>;

    getUserProfilePhotos(userId: number | string, options?: TelegramBot.GetUserProfilePhotosOptions): Promise<TelegramBot.UserProfilePhotos>;

    sendLocation(chatId: number | string, latitude: number, longitude: number, options?: TelegramBot.SendLocationOptions): Promise<TelegramBot.Message>;

    editMessageLiveLocation(latitude: number, longitude: number, options?: TelegramBot.EditMessageLiveLocationOptions): Promise<TelegramBot.Message | boolean>;

    stopMessageLiveLocation(options?: TelegramBot.StopMessageLiveLocationOptions): Promise<TelegramBot.Message | boolean>;

    sendVenue(chatId: number | string, latitude: number, longitude: number, title: string, address: string, options?: TelegramBot.SendVenueOptions): Promise<TelegramBot.Message>;

    sendContact(chatId: number | string, phoneNumber: string, firstName: string, options?: TelegramBot.SendContactOptions): Promise<TelegramBot.Message>;

    getFile(fileId: string): Promise<TelegramBot.File>;

    getFileLink(fileId: string): Promise<string>;

    getFileStream(fileId: string): Readable;

    downloadFile(fileId: string, downloadDir: string): Promise<string>;

    onText(regexp: RegExp, callback: ((msg: TelegramBot.Message, match: RegExpExecArray | null) => void)): void;

    removeTextListener(regexp: RegExp): TelegramBot.TextListener | null;

    onReplyToMessage(chatId: number | string, messageId: number | string, callback: ((msg: TelegramBot.Message) => void)): number;

    removeReplyListener(replyListenerId: number): TelegramBot.ReplyListener;

    getChat(chatId: number | string): Promise<TelegramBot.Chat>;

    getChatAdministrators(chatId: number | string): Promise<TelegramBot.ChatMember[]>;

    getChatMembersCount(chatId: number | string): Promise<number>;

    getChatMember(chatId: number | string, userId: string): Promise<TelegramBot.ChatMember>;

    leaveChat(chatId: number | string): Promise<boolean>;

    setChatStickerSet(chatId: number | string, stickerSetName: string): Promise<boolean>;

    deleteChatStickerSet(chatId: number | string): Promise<boolean>;

    sendGame(chatId: number | string, gameShortName: string, options?: TelegramBot.SendGameOptions): Promise<TelegramBot.Message>;

    setGameScore(userId: string, score: number, options?: TelegramBot.SetGameScoreOptions): Promise<TelegramBot.Message | boolean>;

    getGameHighScores(userId: string, options?: TelegramBot.GetGameHighScoresOptions): Promise<TelegramBot.GameHighScore[]>;

    deleteMessage(chatId: number | string, messageId: string, options?: any): Promise<boolean>;

    sendInvoice(chatId: number | string, title: string, description: string, payload: string, providerToken: string, startParameter: string, currency: string,
                prices: ReadonlyArray<TelegramBot.LabeledPrice>, options?: TelegramBot.SendInvoiceOptions): Promise<TelegramBot.Message>;

    answerShippingQuery(shippingQueryId: string, ok: boolean, options?: TelegramBot.AnswerShippingQueryOptions): Promise<boolean>;

    answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, options?: TelegramBot.AnswerPreCheckoutQueryOptions): Promise<boolean>;
}

export = TelegramBot;
