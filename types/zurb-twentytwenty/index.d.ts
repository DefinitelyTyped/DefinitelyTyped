// Type definitions for zurb.twentytwenty 0.1
// Project: https://github.com/zurb/twentytwenty
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface TwentyTwentyOptions {
    default_offset_pct?: number | undefined;
    orientation?: string | undefined;
    before_label?: string | undefined;
    after_label?: string | undefined;
    no_overlay?: boolean | undefined;
    move_slider_on_hover?: boolean | undefined;
    move_with_handle_only?: boolean | undefined;
    click_to_move?: boolean | undefined;
}

interface JQuery {
    twentytwenty(options?: TwentyTwentyOptions): JQuery;
}
