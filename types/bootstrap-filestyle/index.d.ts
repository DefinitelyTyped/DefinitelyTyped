// Type definitions for bootstrap-filestyle 2.1.4
// Project: https://github.com/jcputney/bootstrap-filestyle
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/jcputney/bootstrap-filestyle
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface FilestyleOptions {
    text?: string | undefined;
    htmlIcon?: string | undefined;
    btnClass?: string | undefined;
    size?: string | undefined;
    input?: boolean | undefined;
    badge?: boolean | undefined;
    badgeName?: string | undefined;
    icon?: boolean | undefined;
    buttonBefore?: boolean | undefined;
    dragdrop?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
    onChange?: ((event: FileList) => void) | undefined;
}

interface JQuery {

    filestyle(options?: FilestyleOptions): JQuery;

    filestyle(method: 'clear' | 'destroy' | 'htmlIcon' | 'htmlInput' | 'pushNameFiles'): JQuery;

    filestyle(method: 'disabled' | 'buttonBefore' | 'dragdrop' | 'icon' | 'input', value: boolean): JQuery;

    filestyle(method: 'size' | 'placeholder' | 'text' | 'btnClass' | 'htmlIcon' | 'badgeName', value: string): JQuery;
}
