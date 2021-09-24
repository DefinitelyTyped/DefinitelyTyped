// Type definitions for node-telegram-bot-api 0.51
// Project: https://github.com/yagop/node-telegram-bot-api
// Definitions by: Alex Muench <https://github.com/ammuench>
//                 Agadar <https://github.com/agadar>
//                 Giorgio Garasto <https://github.com/Dabolus>
//                 Kallu609 <https://github.com/Kallu609>
//                 XC-Zhang <https://github.com/XC-Zhang>
//                 AdityaThebe <https://github.com/adityathebe>
//                 Michael Orlov <https://github.com/MiklerGM>
//                 Alexander Ariutin <https://github.com/ariutin>
//                 XieJiSS <https://github.com/XieJiSS>
//                 Toniop <https://github.com/toniop99>
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

    type MessageType =
        'text' |
        'animation' |
        'audio' |
        'channel_chat_created' |
        'contact' |
        'delete_chat_photo' |
        'document' |
        'game' |
        'group_chat_created' |
        'invoice' |
        'left_chat_member' |
        'location' |
        'migrate_from_chat_id' |
        'migrate_to_chat_id' |
        'new_chat_members' |
        'new_chat_photo' |
        'new_chat_title' |
        'passport_data' |
        'photo' |
        'pinned_message' |
        'sticker' |
        'successful_payment' |
        'supergroup_chat_created' |
        'video' |
        'video_note' |
        'voice';

    type MessageEntityType = 'mention' | 'hashtag' | 'bot_command' | 'url' | 'email' | 'bold' | 'italic' | 'code' | 'pre' | 'text_link' | 'text_mention';

    type ParseMode = 'Markdown' | 'MarkdownV2' | 'HTML';

    /// METHODS OPTIONS ///
    interface PollingOptions {
        interval?: string | number | undefined;
        autoStart?: boolean | undefined;
        params?: GetUpdatesOptions | undefined;
    }

    interface WebHookOptions {
        host?: string | undefined;
        port?: number | undefined;
        key?: string | undefined;
        cert?: string | undefined;
        pfx?: string | undefined;
        autoOpen?: boolean | undefined;
        https?: ServerOptions | undefined;
        healthEndpoint?: string | undefined;
    }

    interface ConstructorOptions {
        polling?: boolean | PollingOptions | undefined;
        webHook?: boolean | WebHookOptions | undefined;
        onlyFirstMatch?: boolean | undefined;
        request?: Options | undefined;
        baseApiUrl?: string | undefined;
        filepath?: boolean | undefined;
    }

    interface StartPollingOptions extends ConstructorOptions {
        restart?: boolean | undefined;
    }

    interface StopPollingOptions {
        cancel?: boolean | undefined;
        reason?: string | undefined;
    }

    interface SetWebHookOptions {
        url?: string | undefined;
        certificate?: string | Stream | undefined;
        max_connections?: number | undefined;
        allowed_updates?: string[] | undefined;
    }

    interface GetUpdatesOptions {
        offset?: number | undefined;
        limit?: number | undefined;
        timeout?: number | undefined;
        allowed_updates?: string[] | undefined;
    }

    interface SendBasicOptions {
        disable_notification?: boolean | undefined;
        reply_to_message_id?: number | undefined;
        reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | undefined;
    }

    interface SendMessageOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        disable_web_page_preview?: boolean | undefined;
    }

    interface AnswerInlineQueryOptions {
        cache_time?: number | undefined;
        is_personal?: boolean | undefined;
        next_offset?: string | undefined;
        switch_pm_text?: string | undefined;
        switch_pm_parameter?: string | undefined;
    }

    interface ForwardMessageOptions {
        disable_notification?: boolean | undefined;
    }

    interface SendPhotoOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        caption?: string | undefined;
    }

    interface SendAudioOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        caption?: string | undefined;
        duration?: number | undefined;
        performer?: string | undefined;
        title?: string | undefined;
    }

    interface SendAnimationOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        caption?: string | undefined;
        duration?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }

    interface SendDocumentOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        caption?: string | undefined;
    }

    interface SendMediaGroupOptions {
        disable_notification?: boolean | undefined;
        reply_to_message_id?: number | undefined;
    }

    interface SendPollOptions extends SendBasicOptions {
        is_anonymous?: boolean | undefined;
        type?: PollType | undefined;
        allows_multiple_answers?: boolean | undefined;
        correct_option_id?: number | undefined;
        explanation?: string | undefined;
        explanation_parse_mode?: ParseMode | undefined;
        open_period?: number | undefined;
        close_date?: number | undefined;
        is_closed?: boolean | undefined;
    }

    interface StopPollOptions {
        reply_markup?: InlineKeyboardMarkup | undefined;
    }

    type SendStickerOptions = SendBasicOptions;

    interface SendVideoOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        duration?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        caption?: string | undefined;
    }

    interface SendVoiceOptions extends SendBasicOptions {
        parse_mode?: ParseMode | undefined;
        caption?: string | undefined;
        duration?: number | undefined;
    }

    interface SendVideoNoteOptions extends SendBasicOptions {
        duration?: number | undefined;
        length?: number | undefined;
    }

    type SendLocationOptions = SendBasicOptions;

    type EditMessageLiveLocationOptions = EditMessageCaptionOptions;

    type StopMessageLiveLocationOptions = EditMessageCaptionOptions;

    interface SendVenueOptions extends SendBasicOptions {
        foursquare_id?: string | undefined;
    }

    interface SendContactOptions extends SendBasicOptions {
        last_name?: string | undefined;
        vcard?: string | undefined;
    }

    type SendGameOptions = SendBasicOptions;

    interface SendInvoiceOptions extends SendBasicOptions {
        provider_data?: string | undefined;
        photo_url?: string | undefined;
        photo_size?: number | undefined;
        photo_width?: number | undefined;
        photo_height?: number | undefined;
        need_name?: boolean | undefined;
        need_phone_number?: boolean | undefined;
        need_email?: boolean | undefined;
        need_shipping_address?: boolean | undefined;
        is_flexible?: boolean | undefined;
    }

    interface CopyMessageOptions extends SendBasicOptions {
        caption?: string | undefined;
        parse_mode?: ParseMode | undefined;
        caption_entities?: MessageEntity[] | undefined;
        allow_sending_without_reply?: boolean | undefined;
    }

    interface RestrictChatMemberOptions {
        until_date?: number | undefined;
        can_send_messages?: boolean | undefined;
        can_send_media_messages?: boolean | undefined;
        can_send_polls?: boolean | undefined;
        can_send_other_messages?: boolean | undefined;
        can_add_web_page_previews?: boolean | undefined;
        can_change_info?: boolean | undefined;
        can_invite_users?: boolean | undefined;
        can_pin_messages?: boolean | undefined;
    }

    interface PromoteChatMemberOptions {
        can_change_info?: boolean | undefined;
        can_post_messages?: boolean | undefined;
        can_edit_messages?: boolean | undefined;
        can_delete_messages?: boolean | undefined;
        can_invite_users?: boolean | undefined;
        can_restrict_members?: boolean | undefined;
        can_pin_messages?: boolean | undefined;
        can_promote_members?: boolean | undefined;
    }

    interface AnswerCallbackQueryOptions {
        callback_query_id: string;
        text?: string | undefined;
        show_alert?: boolean | undefined;
        url?: string | undefined;
        cache_time?: number | undefined;
    }

    interface EditMessageTextOptions extends EditMessageCaptionOptions {
        parse_mode?: ParseMode | undefined;
        disable_web_page_preview?: boolean | undefined;
    }

    interface EditMessageCaptionOptions extends EditMessageReplyMarkupOptions {
        reply_markup?: InlineKeyboardMarkup | undefined;
        parse_mode?: ParseMode | undefined;
        caption_entities?: MessageEntity[] | undefined;
    }

    interface EditMessageReplyMarkupOptions {
        chat_id?: number | string | undefined;
        message_id?: number | undefined;
        inline_message_id?: string | undefined;
    }

    interface EditMessageMediaOptions {
        chat_id?: number | string | undefined;
        message_id?: number | undefined;
        inline_message_id?: string | undefined;
        reply_markup?: InlineKeyboardMarkup | undefined;
    }

    interface GetUserProfilePhotosOptions {
        offset?: number | undefined;
        limit?: number | undefined;
    }

    interface SetGameScoreOptions {
        force?: boolean | undefined;
        disable_edit_message?: boolean | undefined;
        chat_id?: number | undefined;
        message_id?: number | undefined;
        inline_message_id?: string | undefined;
    }

    interface GetGameHighScoresOptions {
        chat_id?: number | undefined;
        message_id?: number | undefined;
        inline_message_id?: string | undefined;
    }

    interface AnswerShippingQueryOptions {
        shipping_options?: ShippingOption[] | undefined;
        error_message?: string | undefined;
    }

    interface AnswerPreCheckoutQueryOptions {
        error_message?: string | undefined;
    }

    interface SendDiceOptions extends SendBasicOptions {
        emoji?: string | undefined;
    }

    /// TELEGRAM TYPES ///
    interface PassportFile {
        file_id: string;
        file_size: number;
        file_date: number;
    }

    interface EncryptedPassportElement {
        type: string;
        data?: string | undefined;
        phone_number?: string | undefined;
        email?: string | undefined;
        files?: PassportFile[] | undefined;
        front_side?: PassportFile | undefined;
        reverse_side?: PassportFile | undefined;
        selfie?: PassportFile | undefined;
        translation?: PassportFile[] | undefined;
        hash: string;
    }

    interface EncryptedCredentials {
        data: string;
        hash: string;
        secret: string;
    }

    interface PassportData {
        data: EncryptedPassportElement[];
        credentials: EncryptedCredentials;
    }

    interface Update {
        update_id: number;
        message?: Message | undefined;
        edited_message?: Message | undefined;
        channel_post?: Message | undefined;
        edited_channel_post?: Message | undefined;
        inline_query?: InlineQuery | undefined;
        chosen_inline_result?: ChosenInlineResult | undefined;
        callback_query?: CallbackQuery | undefined;
        shipping_query?: ShippingQuery | undefined;
        pre_checkout_query?: PreCheckoutQuery | undefined;
    }

    interface WebhookInfo {
        url: string;
        has_custom_certificate: boolean;
        pending_update_count: number;
        last_error_date?: number | undefined;
        last_error_message?: string | undefined;
        max_connections?: number | undefined;
        allowed_updates?: string[] | undefined;
    }

    interface User {
        id: number;
        is_bot: boolean;
        first_name: string;
        last_name?: string | undefined;
        username?: string | undefined;
        language_code?: string | undefined;
    }

    interface Chat {
        id: number;
        type: ChatType;
        title?: string | undefined;
        username?: string | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        photo?: ChatPhoto | undefined;
        description?: string | undefined;
        invite_link?: string | undefined;
        pinned_message?: Message | undefined;
        permissions?: ChatPermissions | undefined;
        can_set_sticker_set?: boolean | undefined;
        sticker_set_name?: string | undefined;
        /**
         * @deprecated since version Telegram Bot API 4.4 - July 29, 2019
         */
        all_members_are_administrators?: boolean | undefined;
    }

    interface Message {
        message_id: number;
        from?: User | undefined;
        date: number;
        chat: Chat;
        forward_from?: User | undefined;
        forward_from_chat?: Chat | undefined;
        forward_from_message_id?: number | undefined;
        forward_signature?: string | undefined;
        forward_sender_name?: string | undefined;
        forward_date?: number | undefined;
        reply_to_message?: Message | undefined;
        edit_date?: number | undefined;
        media_group_id?: string | undefined;
        author_signature?: string | undefined;
        text?: string | undefined;
        entities?: MessageEntity[] | undefined;
        caption_entities?: MessageEntity[] | undefined;
        audio?: Audio | undefined;
        document?: Document | undefined;
        animation?: Animation | undefined;
        game?: Game | undefined;
        photo?: PhotoSize[] | undefined;
        sticker?: Sticker | undefined;
        video?: Video | undefined;
        voice?: Voice | undefined;
        video_note?: VideoNote | undefined;
        caption?: string | undefined;
        contact?: Contact | undefined;
        location?: Location | undefined;
        venue?: Venue | undefined;
        poll?: Poll | undefined;
        new_chat_members?: User[] | undefined;
        left_chat_member?: User | undefined;
        new_chat_title?: string | undefined;
        new_chat_photo?: PhotoSize[] | undefined;
        delete_chat_photo?: boolean | undefined;
        group_chat_created?: boolean | undefined;
        supergroup_chat_created?: boolean | undefined;
        channel_chat_created?: boolean | undefined;
        migrate_to_chat_id?: number | undefined;
        migrate_from_chat_id?: number | undefined;
        pinned_message?: Message | undefined;
        invoice?: Invoice | undefined;
        successful_payment?: SuccessfulPayment | undefined;
        connected_website?: string | undefined;
        passport_data?: PassportData | undefined;
        reply_markup?: InlineKeyboardMarkup | undefined;
    }

    interface MessageEntity {
        type: MessageEntityType;
        offset: number;
        length: number;
        url?: string | undefined;
        user?: User | undefined;
    }

    interface FileBase {
        file_id: string;
        file_size?: number | undefined;
    }

    interface PhotoSize extends FileBase {
        width: number;
        height: number;
    }

    interface Audio extends FileBase {
        duration: number;
        performer?: string | undefined;
        title?: string | undefined;
        mime_type?: string | undefined;
        thumb?: PhotoSize | undefined;
    }

    interface Document extends FileBase {
        thumb?: PhotoSize | undefined;
        file_name?: string | undefined;
        mime_type?: string | undefined;
    }

    interface Video extends FileBase {
        width: number;
        height: number;
        duration: number;
        thumb?: PhotoSize | undefined;
        mime_type?: string | undefined;
    }

    interface Voice extends FileBase {
        duration: number;
        mime_type?: string | undefined;
    }

    interface InputMediaBase {
        media: string;
        caption?: string | undefined;
        parse_mode?: ParseMode | undefined;
    }

    interface InputMediaPhoto extends InputMediaBase {
        type: 'photo';
    }

    interface InputMediaVideo extends InputMediaBase {
        type: 'video';
        width?: number | undefined;
        height?: number | undefined;
        duration?: number | undefined;
        supports_streaming?: boolean | undefined;
    }

    type InputMedia = InputMediaPhoto | InputMediaVideo;

    interface VideoNote extends FileBase {
        length: number;
        duration: number;
        thumb?: PhotoSize | undefined;
    }

    interface Contact {
        phone_number: string;
        first_name: string;
        last_name?: string | undefined;
        user_id?: number | undefined;
        vcard?: string | undefined;
    }

    interface Location {
        longitude: number;
        latitude: number;
    }

    interface Venue {
        location: Location;
        title: string;
        address: string;
        foursquare_id?: string | undefined;
        foursquare_type?: string | undefined;
    }

    type PollType = "regular" | "quiz";

    interface PollAnswer {
        poll_id: string;
        user: User;
        option_ids: number[];
    }

    interface PollOption {
        text: string;
        voter_count: number;
    }

    interface Poll {
        id: string;
        question: string;
        options: PollOption[];
        is_closed: boolean;
        is_anonymous: boolean;
        allows_multiple_answers: boolean;
        type: PollType;
        total_voter_count: number;
    }

    interface UserProfilePhotos {
        total_count: number;
        photos: PhotoSize[][];
    }

    interface File extends FileBase {
        file_path?: string | undefined;
    }

    interface ReplyKeyboardMarkup {
        keyboard: KeyboardButton[][];
        resize_keyboard?: boolean | undefined;
        one_time_keyboard?: boolean | undefined;
        selective?: boolean | undefined;
    }

    interface KeyboardButton {
        text: string;
        request_contact?: boolean | undefined;
        request_location?: boolean | undefined;
    }

    interface ReplyKeyboardRemove {
        remove_keyboard: boolean;
        selective?: boolean | undefined;
    }

    interface InlineKeyboardMarkup {
        inline_keyboard: InlineKeyboardButton[][];
    }

    interface InlineKeyboardButton {
        text: string;
        url?: string | undefined;
        login_url?: LoginUrl | undefined;
        callback_data?: string | undefined;
        switch_inline_query?: string | undefined;
        switch_inline_query_current_chat?: string | undefined;
        callback_game?: CallbackGame | undefined;
        pay?: boolean | undefined;
    }

    interface LoginUrl {
        url: string;
        forward_text?: string | undefined;
        bot_username?: string | undefined;
        request_write_acces?: boolean | undefined;
    }

    interface CallbackQuery {
        id: string;
        from: User;
        message?: Message | undefined;
        inline_message_id?: string | undefined;
        chat_instance: string;
        data?: string | undefined;
        game_short_name?: string | undefined;
    }

    interface ForceReply {
        force_reply: boolean;
        selective?: boolean | undefined;
    }

    interface ChatPhoto {
        small_file_id: string;
        big_file_id: string;
    }

    interface ChatMember {
        user: User;
        status: ChatMemberStatus;
        until_date?: number | undefined;
        can_be_edited?: boolean | undefined;
        can_post_messages?: boolean | undefined;
        can_edit_messages?: boolean | undefined;
        can_delete_messages?: boolean | undefined;
        can_restrict_members?: boolean | undefined;
        can_promote_members?: boolean | undefined;
        can_change_info?: boolean | undefined;
        can_invite_users?: boolean | undefined;
        can_pin_messages?: boolean | undefined;
        is_member?: boolean | undefined;
        can_send_messages?: boolean | undefined;
        can_send_media_messages?: boolean | undefined;
        can_send_polls: boolean;
        can_send_other_messages?: boolean | undefined;
        can_add_web_page_previews?: boolean | undefined;
    }

    interface ChatPermissions {
        can_send_messages?: boolean | undefined;
        can_send_media_messages?: boolean | undefined;
        can_send_polls?: boolean | undefined;
        can_send_other_messages?: boolean | undefined;
        can_add_web_page_previews?: boolean | undefined;
        can_change_info?: boolean | undefined;
        can_invite_users?: boolean | undefined;
        can_pin_messages?: boolean | undefined;
    }

    interface Sticker {
        file_id: string;
        file_unique_id: string;
        is_animated: boolean;
        width: number;
        height: number;
        thumb?: PhotoSize | undefined;
        emoji?: string | undefined;
        set_name?: string | undefined;
        mask_position?: MaskPosition | undefined;
        file_size?: number | undefined;
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
        location?: Location | undefined;
        query: string;
        offset: string;
    }

    interface InlineQueryResultBase {
        id: string;
        reply_markup?: InlineKeyboardMarkup | undefined;
    }

    interface InlineQueryResultArticle extends InlineQueryResultBase {
        type: 'article';
        title: string;
        input_message_content: InputMessageContent;
        url?: string | undefined;
        hide_url?: boolean | undefined;
        description?: string | undefined;
        thumb_url?: string | undefined;
        thumb_width?: number | undefined;
        thumb_height?: number | undefined;
    }

    interface InlineQueryResultPhoto extends InlineQueryResultBase {
        type: 'photo';
        photo_url: string;
        thumb_url: string;
        photo_width?: number | undefined;
        photo_height?: number | undefined;
        title?: string | undefined;
        description?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultGif extends InlineQueryResultBase {
        type: 'gif';
        gif_url: string;
        gif_width?: number | undefined;
        gif_height?: number | undefined;
        gif_duration?: number | undefined;
        thumb_url?: string | undefined;
        title?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultMpeg4Gif extends InlineQueryResultBase {
        type: 'mpeg4_gif';
        mpeg4_url: string;
        mpeg4_width?: number | undefined;
        mpeg4_height?: number | undefined;
        mpeg4_duration?: number | undefined;
        thumb_url?: string | undefined;
        title?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultVideo extends InlineQueryResultBase {
        type: 'video';
        video_url: string;
        mime_type: string;
        thumb_url: string;
        title: string;
        caption?: string | undefined;
        video_width?: number | undefined;
        video_height?: number | undefined;
        video_duration?: number | undefined;
        description?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultAudio extends InlineQueryResultBase {
        type: 'audio';
        audio_url: string;
        title: string;
        caption?: string | undefined;
        performer?: string | undefined;
        audio_duration?: number | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultVoice extends InlineQueryResultBase {
        type: 'voice';
        voice_url: string;
        title: string;
        caption?: string | undefined;
        voice_duration?: number | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultDocument extends InlineQueryResultBase {
        type: 'document';
        title: string;
        caption?: string | undefined;
        document_url: string;
        mime_type: string;
        description?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
        thumb_url?: string | undefined;
        thumb_width?: number | undefined;
        thumb_height?: number | undefined;
    }

    interface InlineQueryResultLocationBase extends InlineQueryResultBase {
        latitude: number;
        longitude: number;
        title: string;
        input_message_content?: InputMessageContent | undefined;
        thumb_url?: string | undefined;
        thumb_width?: number | undefined;
        thumb_height?: number | undefined;
    }

    interface InlineQueryResultLocation extends InlineQueryResultLocationBase {
        type: 'location';
    }

    interface InlineQueryResultVenue extends InlineQueryResultLocationBase {
        type: 'venue';
        address: string;
        foursquare_id?: string | undefined;
    }

    interface InlineQueryResultContact extends InlineQueryResultBase {
        type: 'contact';
        phone_number: string;
        first_name: string;
        last_name?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
        thumb_url?: string | undefined;
        thumb_width?: number | undefined;
        thumb_height?: number | undefined;
    }

    interface InlineQueryResultGame extends InlineQueryResultBase {
        type: 'game';
        game_short_name: string;
    }

    interface InlineQueryResultCachedPhoto extends InlineQueryResultBase {
        type: 'photo';
        photo_file_id: string;
        title?: string | undefined;
        description?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedGif extends InlineQueryResultBase {
        type: 'gif';
        gif_file_id: string;
        title?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedMpeg4Gif extends InlineQueryResultBase {
        type: 'mpeg4_gif';
        mpeg4_file_id: string;
        title?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedSticker extends InlineQueryResultBase {
        type: 'sticker';
        sticker_file_id: string;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedDocument extends InlineQueryResultBase {
        type: 'document';
        title: string;
        document_file_id: string;
        description?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedVideo extends InlineQueryResultBase {
        type: 'video';
        video_file_id: string;
        title: string;
        description?: string | undefined;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedVoice extends InlineQueryResultBase {
        type: 'voice';
        voice_file_id: string;
        title: string;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
    }

    interface InlineQueryResultCachedAudio extends InlineQueryResultBase {
        type: 'audio';
        audio_file_id: string;
        caption?: string | undefined;
        input_message_content?: InputMessageContent | undefined;
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
        parse_mode?: ParseMode | undefined;
        disable_web_page_preview?: boolean | undefined;
    }

    interface InputLocationMessageContent extends InputMessageContent {
        latitude: number;
        longitude: number;
    }

    interface InputVenueMessageContent extends InputLocationMessageContent {
        title: string;
        address: string;
        foursquare_id?: string | undefined;
    }

    interface InputContactMessageContent extends InputMessageContent {
        phone_number: string;
        first_name: string;
        last_name?: string | undefined;
    }

    interface ChosenInlineResult {
        result_id: string;
        from: User;
        location?: Location | undefined;
        inline_message_id?: string | undefined;
        query: string;
    }

    interface ResponseParameters {
        migrate_to_chat_id?: number | undefined;
        retry_after?: number | undefined;
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
        name?: string | undefined;
        phone_number?: string | undefined;
        email?: string | undefined;
        shipping_address?: ShippingAddress | undefined;
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
        shipping_option_id?: string | undefined;
        order_info?: OrderInfo | undefined;
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
        shipping_option_id?: string | undefined;
        order_info?: OrderInfo | undefined;
    }

    interface Game {
        title: string;
        description: string;
        photo: PhotoSize[];
        text?: string | undefined;
        text_entities?: MessageEntity[] | undefined;
        animation?: Animation | undefined;
    }

    interface Animation extends FileBase {
        width: number;
        height: number;
        duration: number;
        thumb?: PhotoSize | undefined;
        file_name?: string | undefined;
        mime_type?: string | undefined;
    }

    type CallbackGame = object;

    interface GameHighScore {
        position: number;
        user: User;
        score: number;
    }

    interface Metadata {
        type?: MessageType | undefined;
    }

    interface BotCommand {
        command: string;
        description: string;
    }

    interface MessageId {
        message_id: number;
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

    logOut(): Promise<boolean>;

    close(): Promise<boolean>;

    setWebHook(url: string, options?: TelegramBot.SetWebHookOptions): Promise<any>;

    deleteWebHook(): Promise<boolean>;

    getWebHookInfo(): Promise<TelegramBot.WebhookInfo>;

    getUpdates(options?: TelegramBot.GetUpdatesOptions): Promise<TelegramBot.Update[]>;

    processUpdate(update: TelegramBot.Update): void;

    sendMessage(chatId: number | string, text: string, options?: TelegramBot.SendMessageOptions): Promise<TelegramBot.Message>;

    answerInlineQuery(inlineQueryId: string, results: ReadonlyArray<TelegramBot.InlineQueryResult>, options?: TelegramBot.AnswerInlineQueryOptions): Promise<boolean>;

    forwardMessage(chatId: number | string, fromChatId: number | string, messageId: number | string, options?: TelegramBot.ForwardMessageOptions): Promise<TelegramBot.Message>;

    copyMessage(chatId: number | string, fromChatId: number | string, messageId: number | string, options?: TelegramBot.CopyMessageOptions): Promise<TelegramBot.MessageId>;

    sendPhoto(chatId: number | string, photo: string | Stream | Buffer, options?: TelegramBot.SendPhotoOptions): Promise<TelegramBot.Message>;

    sendAudio(chatId: number | string, audio: string | Stream | Buffer, options?: TelegramBot.SendAudioOptions): Promise<TelegramBot.Message>;

    sendAnimation(chatId: number | string, animation: string | Stream | Buffer, options?: TelegramBot.SendAnimationOptions): Promise<TelegramBot.Message>;

    sendDice(chatId: number | string, options?: TelegramBot.SendDiceOptions): Promise<TelegramBot.Message>;

    sendDocument(chatId: number | string, doc: string | Stream | Buffer, options?: TelegramBot.SendDocumentOptions, fileOpts?: any): Promise<TelegramBot.Message>;

    sendMediaGroup(chatId: number | string, media: ReadonlyArray<TelegramBot.InputMedia>, options?: TelegramBot.SendMediaGroupOptions): Promise<TelegramBot.Message>;

    sendPoll(chatId: number | string, question: string, pollOptions: ReadonlyArray<string>, options?: TelegramBot.SendPollOptions): Promise<TelegramBot.Message>;

    // `messageId` was referred to as `pollId` in `node-telegram-bot-api/src/telegram.js`,
    // but actually `pollId` is another thing, and I believe that's a mistake.
    // see https://core.telegram.org/bots/api#stoppoll for more info.
    stopPoll(chatId: number | string, messageId: number, options?: TelegramBot.StopPollOptions): Promise<TelegramBot.Poll>;

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

    unpinAllChatMessages(chatId: number | string): Promise<boolean>;

    answerCallbackQuery(callbackQueryId: string, options?: Partial<TelegramBot.AnswerCallbackQueryOptions>): Promise<boolean>;

    /**
     * @deprecated since version 0.30.0
     */
    answerCallbackQuery(options?: TelegramBot.AnswerCallbackQueryOptions): Promise<boolean>;

    editMessageText(text: string, options?: TelegramBot.EditMessageTextOptions): Promise<TelegramBot.Message | boolean>;

    editMessageCaption(caption: string, options?: TelegramBot.EditMessageCaptionOptions): Promise<TelegramBot.Message | boolean>;

    editMessageMedia(media: TelegramBot.InputMedia, options: TelegramBot.EditMessageMediaOptions): Promise<TelegramBot.Message | boolean>;

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

    clearTextListeners(): void;

    onReplyToMessage(chatId: number | string, messageId: number | string, callback: ((msg: TelegramBot.Message) => void)): number;

    removeReplyListener(replyListenerId: number): TelegramBot.ReplyListener;

    clearReplyListeners(): void;

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

    addListener(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    addListener(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    addListener(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    addListener(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    addListener(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    addListener(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    addListener(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    addListener(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    addListener(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    on(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    on(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    on(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    on(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    on(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    on(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    on(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    on(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    on(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    once(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    once(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    once(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    once(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    once(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    once(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    once(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    once(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    once(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    prependListener(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    prependListener(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    prependListener(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    prependListener(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    prependListener(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    prependListener(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    prependListener(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    prependListener(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    prependListener(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    prependOnceListener(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    prependOnceListener(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    prependOnceListener(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    prependOnceListener(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    prependOnceListener(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    prependOnceListener(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    prependOnceListener(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    prependOnceListener(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    prependOnceListener(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    removeListener(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    removeListener(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    removeListener(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    removeListener(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    removeListener(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    removeListener(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    removeListener(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    removeListener(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    removeListener(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    off(event: TelegramBot.MessageType | 'message', listener: (message: TelegramBot.Message, metadata: TelegramBot.Metadata) => void): this;

    off(event: 'callback_query', listener: (query: TelegramBot.CallbackQuery) => void): this;

    off(event: 'inline_query', listener: (query: TelegramBot.InlineQuery) => void): this;

    off(event: 'poll_answer', listener: (answer: TelegramBot.PollAnswer) => void): this;

    off(event: 'chosen_inline_result', listener: (result: TelegramBot.ChosenInlineResult) => void): this;

    off(
        event: 'channel_post' | 'edited_message' | 'edited_message_text' | 'edited_message_caption' | 'edited_channel_post' | 'edited_channel_post_text' | 'edited_channel_post_caption',
        listener: (message: TelegramBot.Message) => void
    ): this;

    off(event: 'shipping_query', listener: (query: TelegramBot.ShippingQuery) => void): this;

    off(event: 'pre_checkout_query', listener: (query: TelegramBot.PreCheckoutQuery) => void): this;

    off(event: 'polling_error' | 'webhook_error' | 'error', listener: (error: Error) => void): this;

    removeAllListeners(
        event?:
            TelegramBot.MessageType |
            'message' |
            'callback_query' |
            'inline_query' |
            'poll_answer' |
            'chosen_inline_result' |
            'channel_post' |
            'edited_message' |
            'edited_message_text' |
            'edited_message_caption' |
            'edited_channel_post' |
            'edited_channel_post_text' |
            'edited_channel_post_caption' |
            'shipping_query' |
            'pre_checkout_query' |
            'polling_error' |
            'webhook_error' |
            'error'
    ): this;

    listeners(
        event:
            TelegramBot.MessageType |
            'message' |
            'callback_query' |
            'inline_query' |
            'poll_answer' |
            'chosen_inline_result' |
            'channel_post' |
            'edited_message' |
            'edited_message_text' |
            'edited_message_caption' |
            'edited_channel_post' |
            'edited_channel_post_text' |
            'edited_channel_post_caption' |
            'shipping_query' |
            'pre_checkout_query' |
            'polling_error' |
            'webhook_error' |
            'error'
    ): Array<(data: any, metadata?: TelegramBot.Metadata) => void>;

    rawListeners(
        event:
            TelegramBot.MessageType |
            'message' |
            'callback_query' |
            'inline_query' |
            'poll_answer' |
            'chosen_inline_result' |
            'channel_post' |
            'edited_message' |
            'edited_message_text' |
            'edited_message_caption' |
            'edited_channel_post' |
            'edited_channel_post_text' |
            'edited_channel_post_caption' |
            'shipping_query' |
            'pre_checkout_query' |
            'polling_error' |
            'webhook_error' |
            'error'
    ): Array<(data: any, metadata?: TelegramBot.Metadata) => void>;

    eventNames(): Array<
        TelegramBot.MessageType |
        'message' |
        'callback_query' |
        'inline_query' |
        'poll_answer' |
        'chosen_inline_result' |
        'channel_post' |
        'edited_message' |
        'edited_message_text' |
        'edited_message_caption' |
        'edited_channel_post' |
        'edited_channel_post_text' |
        'edited_channel_post_caption' |
        'shipping_query' |
        'pre_checkout_query' |
        'polling_error' |
        'webhook_error' |
        'error'
    >;

    listenerCount(
        event:
            TelegramBot.MessageType |
            'message' |
            'callback_query' |
            'inline_query' |
            'poll_answer' |
            'chosen_inline_result' |
            'channel_post' |
            'edited_message' |
            'edited_message_text' |
            'edited_message_caption' |
            'edited_channel_post' |
            'edited_channel_post_text' |
            'edited_channel_post_caption' |
            'shipping_query' |
            'pre_checkout_query' |
            'polling_error' |
            'webhook_error' |
            'error'
    ): number;

    setChatPermissions(
        chatId: number | string,
        chatPermissions: TelegramBot.ChatPermissions
    ): Promise<boolean>;

    setChatAdministratorCustomTitle(
        chatId: number | string,
        userId: string,
        customTitle: string
    ): Promise<boolean>;

    getMyCommands(): Promise<TelegramBot.BotCommand[]>;

    setMyCommands(commands: TelegramBot.BotCommand[]): Promise<boolean>;
}

export = TelegramBot;
