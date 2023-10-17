/// <reference types="jquery" />

declare namespace growl {
    interface Options {
        // Message
        message: string;
        // Title
        title?: string | undefined;
        // URL
        url?: string | undefined;
        // while hovering over the alert, prevent it from being dismissed (true | false - default: true)
        delayOnHover?: boolean | undefined;
        // the duration (in milliseconds) for which the alert is displayed (default: 3200)
        duration?: number | undefined;
        // whether the alert should be fixed rather than auto- dismissed(true | false - default: false)
        fixed?: boolean | undefined;
        // the alert's position ('tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc' - default: 'tr')
        location?: string | undefined;
        // the alert's size ('small' | 'medium' | 'large' - default: 'medium')
        size?: string | undefined;
        // the alert's style ('default' | 'error' | 'notice' | 'warning' - default: 'default')
        style?: string | undefined;
    }
}

interface growl {
    (options: growl.Options): void;
    error(options: growl.Options): void;
    notice(options: growl.Options): void;
    warning(options: growl.Options): void;
}

interface JQueryStatic {
    growl: growl;
}
