export interface Media {
    src: string;
    secureUrl?: string;
    type?: string;
    width?: number;
    height?: number;
    alt?: string;
}
export interface Audio {
    src: string;
    secureUrl?: string;
    type?: string;
}
export interface OpenGraph {
    type?: string;
    url?: string;
    title?: string;
    description?: string;
    determiner?: string;
    locale?: string;
    localeAlternate?: string;
    siteName?: string;
    image?: Media;
    video?: Media;
    audio?: Audio;
}
export interface TwitterImage {
    src: string;
    alt: string;
}
export interface TwitterDevice {
    id?: string;
    url: string;
    name?: string;
}
export interface TwitterApp {
    country?: string;
    iphone?: TwitterDevice;
    ipad?: TwitterDevice;
    googlePlay?: TwitterDevice;
}
export interface TwitterPlayer {
    src: string;
    width?: number;
    height?: number;
}
export interface TwitterCard {
    card?: string;
    title?: string;
    description?: string;
    image?: TwitterImage;
    site?: string;
    siteId?: string;
    creator?: string;
    creatorId?: string;
    app?: TwitterApp;
    player?: TwitterPlayer;
}

export interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: Media;
    video?: Media;
    openGraph?: OpenGraph;
    twitterCard?: TwitterCard;
    keywords?: string[];
    locale?: string;
    meta?: object[];
    siteUrl: string;
}

declare function SEO(props: SEOProps): JSX.Element;

export default SEO;
