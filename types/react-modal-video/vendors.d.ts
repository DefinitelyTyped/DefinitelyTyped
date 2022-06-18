// this interfaces here are somewhat volatile, do not close them,
// their value is documental, they only resolve to an url query param.
// like so: https://www.vendor.com?[key]=[value]&...
// None of this apis is versionated. Update or change any field should be OK.

export interface VimeoApi {
    api?: boolean;
    autopause?: boolean;
    autoplay?: boolean;
    byline?: boolean;
    callback?: string;
    color?: string;
    height?: number;
    loop?: boolean;
    maxheight?: number;
    maxwidth?: number;
    player_id?: string;
    portrait?: boolean;
    title?: boolean;
    width?: boolean;
    xhtml?: true;
    [K: string]: any;
}
export interface YoutubeApi {
    autoplay?: 0 | 1;
    cc_load_policy?: 0 | 1;
    color?: 'red | white';
    controls?: 0 | 1;
    disablekb?: 0 | 1;
    enablejsapi?: 0 | 1;
    end?: number;
    fs?: 0 | 1;
    h1?: string;
    iv_load_policy?: 0 | 1;
    list?: string;
    listType?: 'playlist' | 'user_uploads.';
    loop?: 0 | 1;
    modestbranding?: 0 | 1;
    origin?: string;
    playlist?: `${string},${string}`;
    playsinline?: 0 | 1;
    rel?: 0 | 1;
    showinfo?: 0 | 1;
    start?: 0 | 1;
    wmode?: string;
    theme?: string;
    mute?: 0 | 1;
    [K: string]: any;
}
export interface YoukuApi {
    autoplay?: 1 | 0;
    show_related?: 1 | 0;
    [K: string]: any;
}
