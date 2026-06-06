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
    tabindex?: number | undefined;
    theme?: string | undefined;
    callback?: Function | undefined;
    lang?: string | undefined;
    custom_theme_widget?: string | undefined;
    custom_translations?: CustomTranslations | undefined;
}

interface CustomTranslations {
    visual_challenge?: string | undefined;
    audio_challenge?: string | undefined;
    refresh_btn?: string | undefined;
    instructions_visual?: string | undefined;
    instructions_audio?: string | undefined;
    help_btn?: string | undefined;
    play_again?: string | undefined;
    cant_hear_this?: string | undefined;
    incorrect_try_again?: string | undefined;
    image_alt_text?: string | undefined;
    privacy_and_terms?: string | undefined;
}
