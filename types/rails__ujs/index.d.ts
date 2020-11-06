// Type definitions for @rails/ujs 6.0
// Project: http://rubyonrails.org/
// Definitions by: fsubal <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from './src/start';
export * from './src/utils/ajax';
export * from './src/utils/csp';
export * from './src/utils/csrf';
export * from './src/utils/dom';
export * from './src/utils/event';
export * from './src/utils/form';

export as namespace Rails;

export const linkClickSelector: string;
export const buttonClickSelector: Readonly<{
    selector: string;
    exclude: string;
}>;
export const inputChangeSelector: string;
export const formSubmitSelector: string;
export const formInputClickSelector: string;
export const formDisableSelector: string;
export const formEnableSelector: string;
export const fileInputSelector: string;
export const linkDisableSelector: string;
export const buttonDisableSelector: string;
