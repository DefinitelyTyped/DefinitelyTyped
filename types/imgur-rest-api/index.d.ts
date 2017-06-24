// Type definitions for Imgur REST API 3.0
// Project: https://api.imgur.com/
// Definitions by: Luke William Westby <http://github.com/lukewestby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ImgurRestApi {

    interface Response<T> {
        data: any; //T|Error;
        status: number;
        success: boolean;
    }

    interface Account {
        id: number;
        url: string;
        bio: string;
        reputation: number;
        created: number;
        pro_expiration: any; //number|boolean;
    }

    interface AccountSettings {
        email: string;
        high_quality: boolean;
        public_images: boolean;
        album_privacy: string;
        pro_expiration: any; //number|boolean;
        accepted_gallery_terms: boolean;
        active_emails: Array<string>;
        messaging_enabled: boolean;
        blocked_users: Array<BlockedUser>;
    }

    interface Album {
        id: string;
        title: string;
        description: string;
        datetime: number;
        cover: string;
        cover_width: number;
        cover_height: number;
        account_url?: string;
        account_id?: number;
        privacy: string;
        layout: string;
        views: number;
        link: string;
        favorite: boolean;
        nsfw?: boolean;
        section: string;
        order: number;
        deletehash?: string;
        images_count: number;
        images: Array<Image>;
    }

    interface BlockedUser {
        blocked_id: number;
        blocked_url: string;
    }

    interface Comment {
        id: number;
        image_id: string;
        comment: string;
        author: string;
        author_id: number;
        on_album: boolean;
        album_cover: string;
        ups: number;
        downs: number;
        points: number;
        datetime: number;
        parent_id: number;
        deleted: boolean;
        vote?: string;
        children: Array<Comment>
    }

    interface Conversation {
        id: number;
        last_message_preview: string;
        datetime: number;
        with_account_id: number;
        with_account: string;
        message_count: number;
        messages?: Array<Message>;
        done?: boolean;
        page?: number;
    }

    interface CustomGallery {
        account_url: string;
        link: string;
        tags: Array<string>
        item_count: number;
        items: Array<GalleryItem>;
    }

    interface GalleryItem {
        id: string;
        title: string;
        description: string;
        datetime: number;
        account_url?: string;
        account_id?: number;
        ups: number;
        downs: number;
        score: number;
        is_album: boolean;
        views: number;
        link: string;
        vote?: string;
        favorite: boolean;
        nsfw?: boolean;
        comment_count: number;
        topic: string;
        topic_id: number;
    }

    interface GalleryAlbum extends GalleryItem {
        cover: string;
        cover_width: number;
        cover_height: number;
        privacy: string;
        layout: string;
        images_count: number;
        images: Array<Image>;
    }

    interface GalleryImage extends GalleryItem {
        type: string;
        animated: boolean;
        width: number;
        height: number;
        size: number;
        bandwidth: number;
        deletehash?: string;
        gifv?: string;
        mp4?: string;
        webm?: string;
        looping?: boolean;
        section: string;
    }

    interface GalleryProfile {
        total_gallery_comments: number;
        total_gallery_favorites: number;
        total_gallery_submissions: number;
        trophies: Array<Trophy>;
    }

    interface Trophy {
        id: number;
        name: string;
        name_clean: string;
        description: string;
        data: string;
        data_link: string;
        datetime: number;
        image: string;
    }

    interface Image {
        id: string;
        title: string;
        description: string;
        datetime: number;
        type: string;
        animated: boolean;
        width: number;
        height: number;
        size: number;
        views: number;
        bandwidth: number;
        deletehash?: string;
        name?: string;
        section: string;
        link: string;
        gifv?: string;
        mp4?: string;
        webm?: string;
        looping?: boolean;
        vote?: string;
        favorite: boolean;
        nsfw?: boolean;
        account_url?: string;
        account_id?: number;
    }

    interface MemeMetadata {
        meme_name: string;
        top_text: string;
        bottom_text: string;
        bg_image: string;
    }

    interface Message {
        id: number;
        from: string;
        account_id: number;
        sender_id: number;
        body: string;
        conversation_id: number;
        datetime: number;
    }

    interface Notification<T> {
        id: number;
        account_id: number;
        viewed: boolean;
        content: T;
    }

    interface AccountNotifications {
        replies: Array<Notification<Comment>>;
        messages: Array<Notification<Conversation>>;
    }

    interface Tag {
        name: string;
        followers: number;
        total_items: number;
        following?: boolean;
        items: Array<GalleryItem>
    }

    interface TagVote {
        ups: number;
        downs: number;
        name: string;
        author: string;
    }

    interface Topic {
        id: number;
        name: string;
        description: string;
    }

    interface Vote {
        ups: number;
        downs: number;
    }

    interface Error {
        error: string;
        request: string;
        method: string;
    }
}
