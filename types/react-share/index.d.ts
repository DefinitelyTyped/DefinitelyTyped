// Type definitions for react-share 2.1
// Project: https://github.com/nygardk/react-share#readme
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

// =============================================================================
// Share buttons
// =============================================================================

export interface CommonShareButtonProps {
    /**
     * URL of the shared page
     */
    url: string;
    /** Disables click action and adds `disabled` class */
    disabled?: boolean;
    /**
     * Style when button is disabled
     * @default { opacity: 0.6 }
     */
    disabledStyle?: React.StyleHTMLAttributes<HTMLDivElement>;
    windowWidth?: number;
    windowHeight?: number;
    /**
     *  Takes a function that returns a Promise to be fulfilled before calling
     * `onClick`. If you do not return promise, `onClick` is called immediately.
     */
    beforeOnClick?: () => Promise<void>;
    /**
     * Takes a function to be called after closing share dialog.
     */
    onShareWindowClose?: () => void;
    /**
     * An object to pass any additional properties, such as `aria-*` attributes.
     */
    additionalProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const FacebookShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** A quote to be shared along with the link. */
        quote?: string;
        /**
         * A hashtag specified by the developer to be added to the shared
         * content. People will still have the opportunity to remove this
         * hashtag in the dialog. The hashtag should include the hash symbol.
         */
        hashtag?: string;
    }
>;
export const GooglePlusShareButton: React.StatelessComponent<
    CommonShareButtonProps
>;
export const LinkedinShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
    }
>;
export const TwitterShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        via?: string;
        hashtags?: string[];
    }
>;
export const TelegramShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
    }
>;
export const WhatsappShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /**
         * Separates title from the url
         * @default ' '
         */
        separator?: string;
    }
>;
export const PinterestShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        media: string;
        /** Description of the shared page */
        description?: string;
    }
>;
export const VKShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
        /** An absolute link to the image that will be shared */
        image?: string;
    }
>;
export const OKShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
    }
>;
export const RedditShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
    }
>;
export const TumblrShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        tags?: string[];
        /** Description of the shared page */
        caption?: string;
    }
>;
export const LivejournalShareButton: React.StatelessComponent<
    CommonShareButtonProps & { title?: string; description?: string }
>;
export const MalruShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
        /** An absolute link to the image that will be shared */
        image?: string;
    }
>;
export const EmailShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        subject?: string;
        /** Body of the email, defaults to shared url. */
        body?: string;
    }
>;

// =============================================================================
// Share counts
// =============================================================================

export interface ShareCountComponentProps {
    /** The URL you are sharing */
    url: string;
    /** Classes to apply (if any) */
    className?: string;
    /** Supply a function as the child to render anything but the count */
    children?: (shareCount: number) => React.ReactNode;
}

export const FacebookShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const GooglePlusShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const LinkedinShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const PinterestShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const VKShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const OKShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const RedditShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const TumblrShareCount: React.StatelessComponent<ShareCountComponentProps>;

// =============================================================================
// Icons
// =============================================================================

export interface IconComponentProps {
    /** Icon size in pixels */
    size?: number;
    /** Whether to show round or rect icons */
    round?: boolean;
    /** Customize background style, e.g. fill */
    iconBgStyle?: React.CSSProperties;
    /**
     * Customize logo's fill color
     * @default 'white'
     */
    logoFillColor?: string;
}

export const FacebookIcon: React.StatelessComponent<IconComponentProps>;
export const TwitterIcon: React.StatelessComponent<IconComponentProps>;
export const TelegramIcon: React.StatelessComponent<IconComponentProps>;
export const WhatsappIcon: React.StatelessComponent<IconComponentProps>;
export const GooglePlusIcon: React.StatelessComponent<IconComponentProps>;
export const LinkedinIcon: React.StatelessComponent<IconComponentProps>;
export const PinterestIcon: React.StatelessComponent<IconComponentProps>;
export const VKIcon: React.StatelessComponent<IconComponentProps>;
export const OKIcon: React.StatelessComponent<IconComponentProps>;
export const RedditIcon: React.StatelessComponent<IconComponentProps>;
export const TumblrIcon: React.StatelessComponent<IconComponentProps>;
export const LivejournalIcon: React.StatelessComponent<IconComponentProps>;
export const MailruIcon: React.StatelessComponent<IconComponentProps>;
export const EmailIcon: React.StatelessComponent<IconComponentProps>;
