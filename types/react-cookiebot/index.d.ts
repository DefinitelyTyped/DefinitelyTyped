import * as React from "react";

declare namespace ReactCookieBot {
    interface ReactCookieBotProps {
        /** Cookie bot domain group id */
        domainGroupId?: string | undefined;
        /** Cookie bot data culture */
        language?: string | undefined;
    }
}

/**
 * A simple react cookie bot component that configure
 * Cookiebot in your react or react-native-web application.
 */
declare const ReactCookieBot: React.FC<ReactCookieBot.ReactCookieBotProps>;

export = ReactCookieBot;
