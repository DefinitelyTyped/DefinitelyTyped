// Type definitions for zurb.twentytwenty 0.1
// Project: https://github.com/zurb/twentytwenty
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface TwentyTwentyOptions {
    default_offset_pct?: number;
    orientation?: string;
    before_label?: string;
    after_label?: string;
    no_overlay?: boolean;
    move_slider_on_hover?: boolean;
    move_with_handle_only?: boolean;
    click_to_move?: boolean;
}

interface JQuery {
    twentytwenty(options?: TwentyTwentyOptions): JQuery;
}
