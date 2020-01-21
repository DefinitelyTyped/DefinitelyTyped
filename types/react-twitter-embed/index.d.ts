// Type definitions for react-twitter-embed 3.0
// Project: https://github.com/saurabhnemade/react-twitter-embed#readme
// Definitions by: Cyrille <https://github.com/zozoens31>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5
import * as React from 'react';

export interface BaseProps {
    onLoad?: (element: HTMLElement) => void;
    options?: {};
    placeholder?: string | React.ReactElement;
}

export namespace timeline {
    interface TimelineBaseProps extends BaseProps {
        autoHeight?: boolean;
        borderColor?: string;
        id?: string | number;
        lang?: string;
        linkColor?: string;
        noBorders?: boolean;
        noFooter?: boolean;
        noHeader?: boolean;
        noScrollbar?: boolean;
        ownerScreenName?: string;
        screenName?: string;
        slug?: string;
        theme?: 'dark' | 'light';
        transparent?: boolean;
        url?: string;
        userId?: number;
        widgetId?: string;
    }

    interface ScreenNameSourcesProps {
        sourceType: 'profile' | 'likes';
        screenName: string;
    }

    interface UserIdSourcesProps {
        sourceType: 'profile' | 'likes';
        userId: number;
    }

    interface SlugListSourceProps {
        sourceType: 'list';
        slug: string;
        ownerScreenName: string;
    }

    interface IdSourceProps {
        sourceType: 'list' | 'collection';
        id: string | number;
    }

    interface UrlSourceProps {
        sourceType: 'url';
        url: string;
    }

    interface WidgetSourceProps {
        sourceType: 'widget';
        widgetId: string;
    }

    type Props = TimelineBaseProps & (
        | ScreenNameSourcesProps
        | UserIdSourcesProps
        | SlugListSourceProps
        | IdSourceProps
        | UrlSourceProps
        | WidgetSourceProps
    );
}

export class TwitterTimelineEmbed extends React.Component<timeline.Props> {}
export class TwitterShareButton extends React.Component<BaseProps & {url: string}> {}
export class TwitterFollowButton extends React.Component<BaseProps & {screenName: string}> {}
export class TwitterHashtagButton extends React.Component<BaseProps & {tag: string}> {}
export class TwitterMentionButton extends React.Component<BaseProps & {screenName: string}> {}
export class TweeterTweetEmbed extends React.Component<BaseProps & {tweetId: string}> {}
export class TwitterMomentShare extends React.Component<BaseProps & {momentId: string}> {}
export class TwitterDMButton extends React.Component<BaseProps & {id: number}> {}
export class TwitterVideoEmbed extends React.Component<Omit<BaseProps, 'options'> & {id: string}> {}
export class TwitterOnAirButton extends React.Component<BaseProps & {username: string}> {}
