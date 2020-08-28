// Type definitions for bootstrap-filestyle 1.2
// Project: https://github.com/markusslima/bootstrap-filestyle
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface FilestyleOptions {
    buttonText?: string;
    iconName?: string;
    buttonName?: string;
    size?: string;
    input?: boolean;
    badge?: boolean;
    icon?: boolean;
    buttonBefore?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

interface JQuery {
    filestyle(options?: FilestyleOptions): JQuery;

    filestyle(method: 'clear' | 'destroy' | 'htmlIcon' | 'htmlInput' | 'pushNameFiles'): JQuery;

    filestyle(method: 'disabled' | 'buttonBefore' | 'icon' | 'input', value: boolean): JQuery;

    filestyle(method: 'size' | 'placeholder' | 'buttonText' | 'buttonName' | 'iconName', value: string): JQuery;
}
