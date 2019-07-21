// Type definitions for react-share 3.0.0
// Project: https://github.com/nygardk/react-share#readme
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module 'react-share' {
  import * as React from 'react';
  // tslint:disable:variable-name
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

  export const FacebookShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** A quote to be shared along with the link. */
    quote?: string;
    /**
     * A hashtag specified by the developer to be added to the shared
     * content. People will still have the opportunity to remove this
     * hashtag in the dialog. The hashtag should include the hash symbol.
     */
    hashtag?: string;
  }>;

  export const GooglePlusShareButton: React.FunctionComponent<CommonShareButtonProps>;

  export const LinkedinShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /** Description of the shared page */
    description?: string;
  }>;
  export const TwitterShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    via?: string;
    hashtags?: string[];
  }>;
  export const TelegramShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
  }>;
  export const WhatsappShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /**
     * Separates title from the url
     * @default ' '
     */
    separator?: string;
  }>;
  export const PinterestShareButton: React.FunctionComponent<CommonShareButtonProps & {
    media: string;
    /** Description of the shared page */
    description?: string;
  }>;
  export const VKShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /** Description of the shared page */
    description?: string;
    /** An absolute link to the image that will be shared */
    image?: string;
  }>;
  export const OKShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /** Description of the shared page */
    description?: string;
    /** An absolute link to the image that will be shared */
    image?: string;
  }>;
  export const RedditShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
  }>;
  export const TumblrShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    tags?: string[];
    /** Description of the shared page */
    caption?: string;
  }>;
  export const LivejournalShareButton: React.FunctionComponent<CommonShareButtonProps &
    { title?: string; description?: string }>;
  export const MailruShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /** Description of the shared page */
    description?: string;
    /** An absolute link to the image that will be shared */
    image?: string;
  }>;
  export const ViberShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /**
     * Separates title from the url
     * @default ' '
     */
    separator?: string;
  }>;
  export const WorkplaceShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** A quote to be shared along with the link. */
    quote?: string;
    /**
     * A hashtag specified by the developer to be added to the shared
     * content. People will still have the opportunity to remove this
     * hashtag in the dialog. The hashtag should include the hash symbol.
     */
    hashtag?: string;
  }>;
  export const LineShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
  }>;
  export const WeiboShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /** An absolute link to the image that will be shared */
    image?: string;
  }>;
  export const EmailShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    subject?: string;
    /** Body of the email, defaults to shared url. */
    body?: string;
    /**
     * Separates title from the url
     * @default ' '
     */
    separator?: string;
    /**
     *  Opens the mail client in a new window
     * @default ' '
     */
    openWindow?: boolean;
  }>;
  export const PocketShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
  }>;
  export const InstapaperShareButton: React.FunctionComponent<CommonShareButtonProps & {
    /** Title of the shared page */
    title?: string;
    /** Description of the shared page */
    description?: string;
  }>;

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

  export const FacebookShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const GooglePlusShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const LinkedinShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const PinterestShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const VKShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const OKShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const RedditShareCount: React.FunctionComponent<ShareCountComponentProps>;
  export const TumblrShareCount: React.FunctionComponent<ShareCountComponentProps>;

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

  export const FacebookIcon: React.FunctionComponent<IconComponentProps>;
  export const TwitterIcon: React.FunctionComponent<IconComponentProps>;
  export const TelegramIcon: React.FunctionComponent<IconComponentProps>;
  export const WhatsappIcon: React.FunctionComponent<IconComponentProps>;
  export const GooglePlusIcon: React.FunctionComponent<IconComponentProps>;
  export const LinkedinIcon: React.FunctionComponent<IconComponentProps>;
  export const PinterestIcon: React.FunctionComponent<IconComponentProps>;
  export const VKIcon: React.FunctionComponent<IconComponentProps>;
  export const OKIcon: React.FunctionComponent<IconComponentProps>;
  export const RedditIcon: React.FunctionComponent<IconComponentProps>;
  export const TumblrIcon: React.FunctionComponent<IconComponentProps>;
  export const LivejournalIcon: React.FunctionComponent<IconComponentProps>;
  export const MailruIcon: React.FunctionComponent<IconComponentProps>;
  export const ViberIcon: React.FunctionComponent<IconComponentProps>;
  export const WorkplaceIcon: React.FunctionComponent<IconComponentProps>;
  export const LineIcon: React.FunctionComponent<IconComponentProps>;
  export const PocketIcon: React.FunctionComponent<IconComponentProps>;
  export const InstapaperIcon: React.FunctionComponent<IconComponentProps>;
  export const EmailIcon: React.FunctionComponent<IconComponentProps>;
}
