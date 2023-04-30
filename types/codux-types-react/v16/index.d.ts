// Type definitions for React 16.14
// Project: https://www.codux.com/
// Definitions by: Codux <https://www.codux.com/>
//                 Reza Banazadeh <https://github.com/0xRezaa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { CSSProperties } from 'react';

export {};

declare namespace React {
    interface HTMLAttributes<T> {
        /**
         * @important input, textarea, button
         */
        autoFocus?: boolean | undefined;
        /**
         * @important body, h1, h2, h3, h4, h5, h6, p, a, img, ul, ol, li, div, form, input, button, tr, th, td, caption
         */
        className?: string | undefined;
        /**
         * @important html
         */
        dir?: string | undefined;
        /**
         * @important body, h1, h2, h3, h4, h5, h6, p, a, img, ul, ol, li, div, form, input, button, tr, th, td, caption
         */
        id?: string | undefined;
        /**
         * @important html
         */
        lang?: string | undefined;
        /**
         * @important body, h1, h2, h3, h4, h5, h6, p, a, img, ul, ol, li, div, form, input, button, tr, th, td, caption
         */
        style?: CSSProperties | undefined;
        /**
         * @important meta
         */
        content?: string | undefined;
        /**
         * @important link
         */
        rel?: string | undefined;
    }

    type HTMLAttributeAnchorTarget = '_self' | '_blank' | '_parent' | '_top' | (string & {});

    interface AnchorHTMLAttributes<T> {
        /**
         * @important
         */
        download?: any;
        /**
         * @important
         */
        href?: string | undefined;
        /**
         * @important
         */
        target?: HTMLAttributeAnchorTarget | undefined;
    }

    interface ButtonHTMLAttributes<T> {
        /**
         * @important
         */
        disabled?: boolean | undefined;
        /**
         * @important
         */
        form?: string | undefined;
        /**
         * @important
         */
        formAction?: string | undefined;
        /**
         * @important
         */
        formEncType?: string | undefined;
        /**
         * @important
         */
        formMethod?: string | undefined;
        /**
         * @important
         */
        formNoValidate?: boolean | undefined;
        /**
         * @important
         */
        formTarget?: string | undefined;
        /**
         * @important
         */
        type?: 'submit' | 'reset' | 'button' | undefined;
        /**
         * @important
         */
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface ImgHTMLAttributes<T> {
        /**
         * @important
         */
        alt?: string | undefined;
        /**
         * @important
         */
        height?: number | string | undefined;
        /**
         * @important
         */
        sizes?: string | undefined;
        /**
         * @important
         */
        src?: string | undefined;
        /**
         * @important
         */
        srcSet?: string | undefined;
        /**
         * @important
         */
        width?: number | string | undefined;
    }

    type HTMLInputTypeAttribute =
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
        | (string & {});

    interface InputHTMLAttributes<T> {
        /**
         * @important
         */
        disabled?: boolean | undefined;
        /**
         * @important
         */
        max?: number | string | undefined;
        /**
         * @important
         */
        maxLength?: number | undefined;
        /**
         * @important
         */
        min?: number | string | undefined;
        /**
         * @important
         */
        placeholder?: string | undefined;
        /**
         * @important
         */
        required?: boolean | undefined;
        /**
         * @important
         */
        step?: number | string | undefined;
        /**
         * @important
         */
        type?: HTMLInputTypeAttribute | undefined;
        /**
         * @important
         */
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface LabelHTMLAttributes<T> {
        /**
         * @important
         */
        form?: string | undefined;
    }

    interface LinkHTMLAttributes<T> {
        /**
         * @important
         */
        href?: string | undefined;
        /**
         * @important
         */
        media?: string | undefined;
        /**
         * @important
         */
        sizes?: string | undefined;
        /**
         * @important
         */
        type?: string | undefined;
    }

    interface MetaHTMLAttributes<T> {
        /**
         * @important
         */
        charSet?: string | undefined;
        /**
         * @important
         */
        httpEquiv?: string | undefined;
        /**
         * @important
         */
        name?: string | undefined;
    }

    interface OptionHTMLAttributes<T> {
        /**
         * @important
         */
        label?: string | undefined;
        /**
         * @important
         */
        selected?: boolean | undefined;
    }

    interface ScriptHTMLAttributes<T> {
        /**
         * @important
         */
        src?: string | undefined;
        /**
         * @important
         */
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> {
        /**
         * @important
         */
        disabled?: boolean | undefined;
        // form?: string | undefined;
        /**
         * @important
         */
        multiple?: boolean | undefined;
        // name?: string | undefined;
        /**
         * @important
         */
        required?: boolean | undefined;
        /**
         * @important
         */
        size?: number | undefined;
    }

    interface StyleHTMLAttributes<T> {
        /**
         * @important
         */
        media?: string | undefined;
        /**
         * @important
         */
        type?: string | undefined;
    }

    interface TextareaHTMLAttributes<T> {
        /**
         * @important
         */
        cols?: number | undefined;
        /**
         * @important
         */
        disabled?: boolean | undefined;
        /**
         * @important
         */
        maxLength?: number | undefined;
        /**
         * @important
         */
        placeholder?: string | undefined;
        /**
         * @important
         */
        required?: boolean | undefined;
        /**
         * @important
         */
        rows?: number | undefined;
    }
}
