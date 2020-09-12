// Type definitions for Google Recaptcha
// Project: https://www.google.com/recaptcha
// Definitions by: Brent Jenkins <https://github.com/brentj73>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Recaptcha {
    constructor();
    static reload(): void;
    static switch_type(newtype: string): void;
    static showhelp(): void;
    static get_challenge(): string;
    static get_response(): string;
    static focus_response_field(): void;
    static create(public_key: string, element: string, options: RecaptchaOptions): void;
    static destroy(): void;
}

interface RecaptchaOptions {
    tabindex?: number;
    theme?: string;
    callback?: Function;
    lang?: string;
    custom_theme_widget?: string;
    custom_translations?: CustomTranslations;
}

interface CustomTranslations {
    visual_challenge?: string;
    audio_challenge?: string;
    refresh_btn?: string;
    instructions_visual?: string;
    instructions_audio?: string;
    help_btn?: string;
    play_again?: string;
    cant_hear_this?: string;
    incorrect_try_again?: string;
    image_alt_text?: string;
    privacy_and_terms?: string;
}
