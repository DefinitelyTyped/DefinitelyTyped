// Type definitions for node-telegram-bot-api 0.28
// Project: https://github.com/yagop/node-telegram-bot-api
// Definitions by: Alex Muench <https://github.com/ammuench>
//                 Agadar <https://github.com/agadar>
//                 Giorgio Garasto <https://github.com/Dabolus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node" />

import {EventEmitter} from 'events';
import {Stream} from 'stream';
import {ServerOptions} from 'https';
import {Options} from 'request';

declare namespace TelegramBot {
    export interface TextListener {
        regexp: RegExp;
        callback: ((msg: Message, match: RegExpExecArray | null) => void);
    }

    export interface ReplyListener {
        id: number;
        chatId: number | string;
        messageId: number | string;
        callback: ((msg: Message) => void);
    }

    /// METHODS OPTIONS ///
    export interface PollingOptions {
        interval?: string | number;
        autoStart?: boolean;
        params?: GetUpdatesOptions;
    }

    export interface WebHookOptions {
        host?: string;
        post?: number;
        key: string;
        cert: string;
        pfx: string;
        autoOpen?: boolean;
        https?: ServerOptions;
        healthEndpoint?: string;
    }

    export interface ConstructorOptions {
        polling?: boolean | PollingOptions;
        webHook?: boolean | WebHookOptions;
        onlyFirstMatch?: boolean;
        request?: Options;
        baseApiUrl?: string;
        filepath?: boolean;
    }

    export interface StartPollingOptions extends ConstructorOptions {
        restart?: boolean;
    }

    export interface SetWebHookOptions {
        url: string;
        certificate?: string | Stream;
        max_connections?: number;
        allowed_updates?: Array<string>;
    }

    export interface GetUpdatesOptions {
        offset?: number;
        limit?: number;
        timeout?: number;
        allowed_updates?: Array<string>;
    }

    interface SendBasicOptions {
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }

    export interface SendMessageOptions extends SendBasicOptions {
        parse_mode?: string;
        disable_web_page_preview?: boolean;
    }

    export interface AnswerInlineQueryOptions {
        cache_time?: number;
        is_personal?: boolean;
        next_offset?: string;
        switch_pm_text?: string;
        switch_pm_parameter?: string;
    }

    export interface ForwardMessageOptions {
        disable_notification?: boolean;
    }

    export interface SendPhotoOptions extends SendBasicOptions {
        caption?: string;
    }

    export interface SendAudioOptions extends SendBasicOptions {
        caption?: string;
        duration?: number;
        performer?: string;
        title?: string;
    }

    export interface SendDocumentOptions extends SendBasicOptions {
        caption?: string;
    }

    export interface SendStickerOptions extends SendBasicOptions {
    }

    export interface SendVideoOptions extends SendBasicOptions {
        duration?: number;
        width?: number;
        height?: number;
        caption?: string;
    }

    export interface SendVoiceOptions extends SendBasicOptions {
        caption?: string;
        duration?: number;
    }

    export interface SendVideoNoteOptions extends SendBasicOptions {
        duration?: number;
        length?: number;
    }

    export interface SendLocationOptions extends SendBasicOptions {
    }

    export interface SendVenueOptions extends SendBasicOptions {
        foursquare_id?: string;
    }

    export interface SendContactOptions extends SendBasicOptions {
        last_name?: string;
    }

    export interface SendGameOptions extends SendBasicOptions {
    }

    export interface SendInvoiceOptions extends SendBasicOptions {
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

    export interface RestrictChatMemberOptions {
        until_date?: number;
        can_send_messages?: boolean;
        can_send_media_messages?: boolean;
        can_send_other_messages?: boolean;
        can_add_web_page_previews?: boolean;
    }

    export interface PromoteChatMemberOptions {
        can_change_info?: boolean;
        can_post_messages?: boolean;
        can_edit_messages?: boolean;
        can_delete_messages?: boolean;
        can_invite_users?: boolean;
        can_restrict_members?: boolean;
        can_pin_messages?: boolean;
        can_promote_members?: boolean;
    }

    export interface AnswerCallbackQueryOptions {
        callback_query_id: string;
        text?: string;
        show_alert?: boolean;
        url?: string;
        cache_time?: number;
    }

    export interface EditMessageTextOptions extends EditMessageCaptionOptions {
        parse_mode?: string;
        disable_web_page_preview?: boolean;
    }

    export interface EditMessageCaptionOptions extends EditMessageReplyMarkupOptions {
        reply_markup?: InlineKeyboardMarkup;
    }

    export interface EditMessageReplyMarkupOptions {
        chat_id?: number | string;
        message_id?: number;
        inline_message_id?: string;
    }

    export interface GetUserProfilePhotosOptions {
        offset?: number;
        limit?: number;
    }

    export interface SetGameScoreOptions {
        force?: boolean;
        disable_edit_message?: boolean;
        chat_id?: number;
        message_id?: number;
        inline_message_id?: string;
    }

    export interface GetGameHighScoresOptions {
        chat_id?: number;
        message_id?: number;
        inline_message_id?: string;
    }

    export interface AnswerShippingQueryOptions {
        shipping_options?: Array<ShippingOption>;
        error_message?: string;
    }

    export interface AnswerPreCheckoutQueryOptions {
        error_message?: string;
    }

    /// TELEGRAM TYPES ///
    export interface Update {
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

    export interface WebhookInfo {
        url: string;
        has_custom_certificate: boolean;
        pending_update_count: number;
        last_error_date?: number;
        last_error_message?: string;
        max_connections?: number;
        allowed_updates?: Array<string>;
    }

    export interface User {
        id: number;
        is_bot: boolean;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
    }

    export interface Chat {
        id: number;
        type: string;
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

    export interface Message {
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
        entities?: Array<MessageEntity>;
        audio?: Audio;
        document?: Document;
        game?: Game;
        photo?: Array<PhotoSize>;
        sticker?: Sticker;
        video?: Video;
        voice?: Voice;
        video_note?: VideoNote;
        caption?: string;
        contact?: Contact;
        location?: Location;
        venue?: Venue;
        new_chat_members?: Array<User>;
        left_chat_member?: User;
        new_chat_title?: string;
        new_chat_photo?: Array<PhotoSize>;
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

    export interface MessageEntity {
        type: string,
        offset: number;
        length: number;
        url?: string;
        user?: User;
    }

    interface FileBase {
        file_id: string;
        file_size?: number;
    }

    export interface PhotoSize extends FileBase {
        width: number;
        height: number;
    }

    export interface Audio extends FileBase {
        duration: number;
        performer?: string;
        title?: string;
        mime_type?: string
    }

    export interface Document extends FileBase {
        thumb?: PhotoSize;
        file_name?: string;
        mime_type?: string;
    }

    export interface Video {
        width: number;
        height: number;
        duration: number;
        thumb?: PhotoSize;
        mime_type?: string;
    }

    export interface Voice extends FileBase {
        duration: number;
        mime_type?: string;
    }

    export interface VideoNote extends FileBase {
        length: number;
        duration: number;
        thumb?: PhotoSize;
    }

    export interface Contact {
        phone_number: string;
        first_name: string;
        last_name?: string;
        user_id?: number;
    }

    export interface Location {
        longitude: number;
        latitude: number;
    }

    export interface Venue {
        location: Location;
        title: string;
        address: string;
        foursquare_id?: string;
    }

    export interface UserProfilePhotos {
        total_count: number;
        photos: Array<Array<PhotoSize>>;
    }

    export interface File extends FileBase {
        file_path?: string;
    }

    export interface ReplyKeyboardMarkup {
        keyboard: Array<Array<KeyboardButton>>;
        resize_keyboard?: boolean;
        one_time_keyboard?: boolean;
        selective?: boolean;
    }

    export interface KeyboardButton {
        text: string;
        request_contact?: boolean;
        request_location?: boolean;
    }

    export interface ReplyKeyboardRemove {
        remove_keyboard: boolean;
        selective?: boolean;
    }

    export interface InlineKeyboardMarkup {
        inline_keyboard: Array<Array<InlineKeyboardButton>>;
    }

    export interface InlineKeyboardButton {
        text: string;
        url?: string;
        callback_data?: string;
        switch_inline_query?: string;
        switch_inline_query_current_chat?: string;
        callback_game?: CallbackGame;
        pay?: boolean;
    }

    export interface CallbackQuery {
        id: string;
        from: User;
        message?: Message;
        inline_message_id?: string;
        chat_instance: string;
        data?: string;
        game_short_name?: string;
    }

    export interface ForceReply {
        force_reply: boolean;
        selective?: boolean;
    }

    export interface ChatPhoto {
        small_file_id: string;
        big_file_id: string;
    }

    export interface ChatMember {
        user: User;
        status: string;
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

    export interface Sticker {
        file_id: string;
        width: number;
        height: number;
        thumb?: PhotoSize;
        emoji?: string;
        set_name?: string;
        mask_position?: MaskPosition;
        file_size?: number;
    }

    export interface StickerSet {
        name: string;
        title: string;
        contains_masks: boolean;
        stickers: Array<Sticker>;
    }

    export interface MaskPosition {
        point: string;
        x_shift: number;
        y_shift: number;
        scale: number;
    }

    export interface InlineQuery {
        id: string;
        from: User;
        location?: Location;
        query: string;
        offset: string;
    }

    interface InlineQueryResult {
        type: string;
        id: string;
        reply_markup?: InlineKeyboardMarkup;
    }

    export interface InlineQueryResultArticle extends InlineQueryResult {
        title: string;
        input_message_content: InputMessageContent;
        url?: string;
        hide_url?: boolean;
        description?: string;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    export interface InlineQueryResultPhoto extends InlineQueryResult {
        photo_url: string;
        thumb_url: string;
        photo_width?: number;
        photo_height?: number;
        title?: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultGif extends InlineQueryResult {
        gif_url: string;
        gif_width?: number;
        gif_height?: number;
        gif_duration?: number;
        thumb_url?: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultMpeg4Gif extends InlineQueryResult {
        mpeg4_url: string;
        mpeg4_width?: number;
        mpeg4_height?: number;
        mpeg4_duration?: number;
        thumb_url?: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultVideo extends InlineQueryResult {
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

    export interface InlineQueryResultAudio extends InlineQueryResult {
        audio_url: string;
        title: string;
        caption?: string;
        performer?: string;
        audio_duration?: number;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultVoice extends InlineQueryResult {
        voice_url: string;
        title: string;
        caption?: string;
        voice_duration?: number;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultDocument extends InlineQueryResult {
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

    export interface InlineQueryResultLocation extends InlineQueryResult {
        latitude: number;
        longitude: number;
        title: string;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    export interface InlineQueryResultVenue extends InlineQueryResultLocation {
        address: string;
        foursquare_id?: string;
    }

    export interface InlineQueryResultContact extends InlineQueryResult {
        phone_number: string;
        first_name: string;
        last_name?: string;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }

    export interface InlineQueryResultGame extends InlineQueryResult {
        game_short_name: string;
    }

    export interface InlineQueryResultCachedPhoto extends InlineQueryResult {
        photo_file_id: string;
        title?: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedGif extends InlineQueryResult {
        gif_file_id: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedMpeg4Gif extends InlineQueryResult {
        mpeg4_file_id: string;
        title?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedSticker extends InlineQueryResult {
        sticker_file_id: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedDocument extends InlineQueryResult {
        title: string;
        document_file_id: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedVideo extends InlineQueryResult {
        video_file_id: string;
        title: string;
        description?: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedVoice extends InlineQueryResult {
        voice_file_id: string;
        title: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    export interface InlineQueryResultCachedAudio extends InlineQueryResult {
        audio_file_id: string;
        caption?: string;
        input_message_content?: InputMessageContent;
    }

    interface InputMessageContent {
    }

    export interface InputTextMessageContent extends InputMessageContent {
        message_text: string;
        parse_mode?: string;
        disable_web_page_preview?: boolean;
    }

    export interface InputLocationMessageContent extends InputMessageContent {
        latitude: number;
        longitude: number;
    }

    export interface InputVenueMessageContent extends InputLocationMessageContent {
        title: string;
        address: string;
        foursquare_id?: string;
    }

    export interface InputContactMessageContent extends InputMessageContent {
        phone_number: string;
        first_name: string;
        last_name?: string;
    }

    export interface ChosenInlineResult {
        result_id: string;
        from: User;
        location?: Location;
        inline_message_id?: string;
        query: string;
    }

    export interface ResponseParameters {
        migrate_to_chat_id?: number;
        retry_after?: number;
    }

    export interface LabeledPrice {
        label: string;
        amount: number;
    }

    export interface Invoice {
        title: string;
        description: string;
        start_parameter: string;
        currency: string;
        total_amount: number;
    }

    export interface ShippingAddress {
        country_code: string;
        state: string;
        city: string;
        street_line1: string;
        street_line2: string;
        post_code: string;
    }

    export interface OrderInfo {
        name?: string;
        phone_number?: string;
        email?: string;
        shipping_address?: ShippingAddress;
    }

    export interface ShippingOption {
        id: string;
        title: string;
        prices: Array<LabeledPrice>;
    }

    export interface SuccessfulPayment {
        currency: string;
        total_amount: number;
        invoice_payload: string;
        shipping_option_id?: string;
        order_info?: OrderInfo;
        telegram_payment_charge_id: string;
        provider_payment_charge_id: string;
    }

    export interface ShippingQuery {
        id: string;
        from: User;
        invoice_payload: string;
        shipping_address: ShippingAddress;
    }

    export interface PreCheckoutQuery {
        id: string;
        from: User;
        currency: string;
        total_amount: number;
        invoice_payload: string;
        shipping_option_id?: string;
        order_info?: OrderInfo;
    }

    export interface Game {
        title: string;
        description: string;
        photo: Array<PhotoSize>;
        text?: string;
        text_entities?: Array<MessageEntity>;
        animation?: Animation;
    }

    export interface Animation {
        file_id: string;
        thumb?: PhotoSize;
        file_name?: string;
        mime_type?: string;
        file_size?: number;
    }

    export interface CallbackGame {
        // Placeholder
    }

    export interface GameHighScore {
        position: number;
        user: User;
        score: number;
    }
}

declare class TelegramBot extends EventEmitter {
    constructor(token: string, options?: TelegramBot.ConstructorOptions);

    startPolling(options?: TelegramBot.StartPollingOptions): Promise<any>;

    stopPolling(): Promise<any>;

    isPolling(): boolean;

    openWebHook(): Promise<any>;

    closeWebHook(): Promise<any>;

    hasOpenWebHook(): boolean;

    getMe(): Promise<TelegramBot.User | Error>

    setWebHook(url: string, options?: TelegramBot.SetWebHookOptions): Promise<any>;

    deleteWebHook(): Promise<boolean | Error>;

    getWebHookInfo(): Promise<TelegramBot.WebhookInfo | Error>;

    getUpdates(options?: TelegramBot.GetUpdatesOptions): Promise<Array<TelegramBot.Update> | Error>;

    processUpdate(update: TelegramBot.Update): void;

    sendMessage(chatId: number | string, text: string, options?: TelegramBot.SendMessageOptions): Promise<TelegramBot.Message | Error>;

    answerInlineQuery(inlineQueryId: string, results: Array<TelegramBot.InlineQueryResult>, options?: TelegramBot.AnswerInlineQueryOptions): Promise<boolean | Error>;

    forwardMessage(chatId: number | string, fromChatId: number | string, messageId: number | string, options?: TelegramBot.ForwardMessageOptions): Promise<TelegramBot.Message | Error>;

    sendPhoto(chatId: number | string, photo: string | Stream | Buffer, options?: TelegramBot.SendPhotoOptions): Promise<TelegramBot.Message | Error>;

    sendAudio(chatId: number | string, audio: string | Stream | Buffer, options?: TelegramBot.SendAudioOptions): Promise<TelegramBot.Message | Error>;

    sendDocument(chatId: number | string, doc: string | Stream | Buffer, options?: TelegramBot.SendDocumentOptions, fileOpts?: any): Promise<TelegramBot.Message | Error>;

    sendSticker(chatId: number | string, sticker: string | Stream | Buffer, options?: TelegramBot.SendStickerOptions): Promise<TelegramBot.Message | Error>;

    sendVideo(chatId: number | string, video: string | Stream | Buffer, options?: TelegramBot.SendVideoOptions): Promise<TelegramBot.Message | Error>;

    sendVideoNote(chatId: number | string, videoNote: string | Stream | Buffer, options?: TelegramBot.SendVideoNoteOptions): Promise<TelegramBot.Message | Error>;

    sendVoice(chatId: number | string, voice: string | Stream | Buffer, options?: TelegramBot.SendVoiceOptions): Promise<TelegramBot.Message | Error>;

    sendChatAction(chatId: number | string, action: string): Promise<boolean | Error>;

    kickChatMember(chatId: number | string, userId: string): Promise<boolean | Error>;

    unbanChatMember(chatId: number | string, userId: string): Promise<boolean | Error>;

    restrictChatMember(chatId: number | string, userId: string, options?: TelegramBot.RestrictChatMemberOptions): Promise<boolean | Error>;

    promoteChatMember(chatId: number | string, userId: string, options?: TelegramBot.PromoteChatMemberOptions): Promise<boolean | Error>;

    exportChatInviteLink(chatId: number | string): Promise<string | Error>;

    setChatPhoto(chatId: number | string, photo: string | Stream | Buffer): Promise<boolean | Error>;

    deleteChatPhoto(chatId: number | string): Promise<boolean | Error>;

    setChatTitle(chatId: number | string, title: string): Promise<boolean | Error>;

    setChatDescription(chatId: number | string, description: string): Promise<boolean | Error>;

    pinChatMessage(chatId: number | string, messageId: string): Promise<boolean | Error>;

    unpinChatMessage(chatId: number | string): Promise<boolean | Error>;

    answerCallbackQuery(options?: TelegramBot.AnswerCallbackQueryOptions): Promise<boolean | Error>;

    editMessageText(text: string, options?: TelegramBot.EditMessageTextOptions): Promise<TelegramBot.Message | boolean | Error>;

    editMessageCaption(caption: string, options?: TelegramBot.EditMessageCaptionOptions): Promise<TelegramBot.Message | boolean | Error>;

    editMessageReplyMarkup(replyMarkup: TelegramBot.InlineKeyboardMarkup, options?: TelegramBot.EditMessageReplyMarkupOptions): Promise<TelegramBot.Message | boolean | Error>;

    getUserProfilePhotos(userId: number | string, options?: TelegramBot.GetUserProfilePhotosOptions): Promise<TelegramBot.UserProfilePhotos | Error>;

    sendLocation(chatId: number | string, latitude: number, longitude: number, options?: TelegramBot.SendLocationOptions): Promise<TelegramBot.Message | Error>;

    sendVenue(chatId: number | string, latitude: number, longitude: number, title: string, address: string, options?: TelegramBot.SendVenueOptions): Promise<TelegramBot.Message | Error>;

    sendContact(chatId: number | string, phoneNumber: string, firstName: string, options?: TelegramBot.SendContactOptions): Promise<TelegramBot.Message | Error>;

    getFile(fileId: string): Promise<File | Error>;

    getFileLink(fileId: string): Promise<string | Error>;

    downloadFile(fileId: string, downloadDir: string): Promise<string | Error>;

    onText(regexp: RegExp, callback: ((msg: TelegramBot.Message, match: RegExpExecArray | null) => void)): void;

    removeTextListener(regexp: RegExp): TelegramBot.TextListener | null;

    onReplyToMessage(chatId: number | string, messageId: number | string, callback: ((msg: TelegramBot.Message) => void)): number;

    removeReplyListener(replyListenerId: number): TelegramBot.ReplyListener;

    getChat(chatId: number | string): Promise<TelegramBot.Chat | Error>;

    getChatAdministrators(chatId: number | string): Promise<Array<TelegramBot.ChatMember> | Error>;

    getChatMembersCount(chatId: number | string): Promise<number | Error>;

    getChatMember(chatId: number | string, userId: string): Promise<TelegramBot.ChatMember | Error>;

    leaveChat(chatId: number | string): Promise<boolean | Error>;

    sendGame(chatId: number | string, gameShortName: string, options?: TelegramBot.SendGameOptions): Promise<TelegramBot.Message | Error>;

    setGameScore(userId: string, score: number, options?: TelegramBot.SetGameScoreOptions): Promise<TelegramBot.Message | boolean | Error>;

    getGameHighScores(userId: string, options?: TelegramBot.GetGameHighScoresOptions): Promise<Array<TelegramBot.GameHighScore> | Error>;

    deleteMessage(chatId: number | string, messageId: string, options?: any): Promise<boolean | Error>;

    sendInvoice(chatId: number | string, title: string, description: string, payload: string, providerToken: string, startParameter: string, currency: string, prices: Array<TelegramBot.LabeledPrice>, options?: TelegramBot.SendInvoiceOptions): Promise<TelegramBot.Message | Error>;

    answerShippingQuery(shippingQueryId: string, ok: boolean, options?: TelegramBot.AnswerShippingQueryOptions): Promise<boolean | Error>;

    answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, options?: TelegramBot.AnswerPreCheckoutQueryOptions): Promise<boolean | Error>;
}

export = TelegramBot;
