import * as React from "react";

export type SocialIcon =
    | "amazon"
    | "behance"
    | "blogger-alt"
    | "blogger"
    | "codepen"
    | "dribbble"
    | "dropbox"
    | "eventbrite"
    | "facebook"
    | "feed"
    | "flickr"
    | "foursquare"
    | "ghost"
    | "github"
    | "google-alt"
    | "google-plus-alt"
    | "google-plus"
    | "google"
    | "instagram"
    | "linkedin"
    | "mail"
    | "medium-alt"
    | "medium"
    | "patreon"
    | "pinterest-alt"
    | "pinterest"
    | "pocket"
    | "polldaddy"
    | "print"
    | "reddit"
    | "share"
    | "skype"
    | "spotify"
    | "squarespace"
    | "stumbleupon"
    | "telegram"
    | "tiktok-alt"
    | "tiktok"
    | "tumblr-alt"
    | "tumblr"
    | "twitch"
    | "twitter-alt"
    | "twitter"
    | "vimeo"
    | "whatsapp"
    | "woocommerce"
    | "wordpress"
    | "xanga"
    | "youtube";

export interface Props {
    icon: SocialIcon;
    size?: number | undefined;

    onClick?(): void;

    className?: string | undefined;
}

export default class SocialLogo extends React.Component<Props> {}
