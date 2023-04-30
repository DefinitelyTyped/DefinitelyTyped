// Type definitions for React 18.0
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
        // contentEditable?: Booleanish | "inherit" | undefined;
        // contextMenu?: string | undefined;
        /**
         * @important html
         */
        dir?: string | undefined;
        // draggable?: Booleanish | undefined;
        // hidden?: boolean | undefined;
        /**
         * @important body, h1, h2, h3, h4, h5, h6, p, a, img, ul, ol, li, div, form, input, button, tr, th, td, caption
         */
        id?: string | undefined;
        /**
         * @important html
         */
        lang?: string | undefined;
        // nonce?: string | undefined;
        // placeholder?: string | undefined;
        // slot?: string | undefined;
        // spellCheck?: Booleanish | undefined;
        /**
         * @important body, h1, h2, h3, h4, h5, h6, p, a, img, ul, ol, li, div, form, input, button, tr, th, td, caption
         */
        style?: CSSProperties | undefined;
        // tabIndex?: number | undefined;
        // title?: string | undefined;
        // translate?: 'yes' | 'no' | undefined;

        // // Unknown
        // radioGroup?: string | undefined; // <command>, <menuitem>

        // // WAI-ARIA
        // role?: AriaRole | undefined;

        // // RDFa Attributes
        // about?: string | undefined;
        /**
         * @important meta
         */
        content?: string | undefined;
        // datatype?: string | undefined;
        // inlist?: any;
        // prefix?: string | undefined;
        // property?: string | undefined;
        /**
         * @important link
         */
        rel?: string | undefined;
        // resource?: string | undefined;
        // rev?: string | undefined;
        // typeof?: string | undefined;
        // vocab?: string | undefined;

        // Non-standard Attributes
        // autoCapitalize?: string | undefined;
        // autoCorrect?: string | undefined;
        // autoSave?: string | undefined;
        // color?: string | undefined;
        // itemProp?: string | undefined;
        // itemScope?: boolean | undefined;
        // itemType?: string | undefined;
        // itemID?: string | undefined;
        // itemRef?: string | undefined;
        // results?: number | undefined;
        // security?: string | undefined;
        // unselectable?: 'on' | 'off' | undefined;

        // // Living Standard
        // /**
        //  * Hints at the type of data that might be entered by the user while editing the element or its contents
        //  * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
        //  */
        // inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
        // /**
        //  * Specify that a standard HTML element should behave like a defined custom built-in element
        //  * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
        //  */
        // is?: string | undefined;
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
        // hrefLang?: string | undefined;
        // media?: string | undefined;
        // ping?: string | undefined;
        /**
         * @important
         */
        target?: HTMLAttributeAnchorTarget | undefined;
        // type?: string | undefined;
        // referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
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
        // name?: string | undefined;
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
        // crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        // decoding?: "async" | "auto" | "sync" | undefined;
        /**
         * @important
         */
        height?: number | string | undefined;
        // loading?: "eager" | "lazy" | undefined;
        // referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
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
        // useMap?: string | undefined;
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
        // accept?: string | undefined;
        // alt?: string | undefined;
        // autoComplete?: string | undefined;
        // capture?: boolean | 'user' | 'environment' | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        // checked?: boolean | undefined;
        // crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        /**
         * @important
         */
        disabled?: boolean | undefined;
        // enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
        // form?: string | undefined;
        // formAction?: string | undefined;
        // formEncType?: string | undefined;
        // formMethod?: string | undefined;
        // formNoValidate?: boolean | undefined;
        // formTarget?: string | undefined;
        // height?: number | string | undefined;
        // list?: string | undefined;
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
        // minLength?: number | undefined;
        // multiple?: boolean | undefined;
        // name?: string | undefined;
        // pattern?: string | undefined;
        /**
         * @important
         */
        placeholder?: string | undefined;
        // readOnly?: boolean | undefined;
        /**
         * @important
         */
        required?: boolean | undefined;
        // size?: number | undefined;
        // src?: string | undefined;
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
        // width?: number | string | undefined;

        // onChange?: ChangeEventHandler<T> | undefined;
    }

    interface LabelHTMLAttributes<T> {
        /**
         * @important
         */
        form?: string | undefined;
        // htmlFor?: string | undefined;
    }

    interface LinkHTMLAttributes<T> {
        // as?: string | undefined;
        // crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        /**
         * @important
         */
        href?: string | undefined;
        // hrefLang?: string | undefined;
        // integrity?: string | undefined;
        /**
         * @important
         */
        media?: string | undefined;
        // imageSrcSet?: string | undefined;
        // imageSizes?: string | undefined;
        // referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        /**
         * @important
         */
        sizes?: string | undefined;
        /**
         * @important
         */
        type?: string | undefined;
        // charSet?: string | undefined;
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
        // media?: string | undefined;
    }

    interface OptionHTMLAttributes<T> {
        // disabled?: boolean | undefined;
        /**
         * @important
         */
        label?: string | undefined;
        /**
         * @important
         */
        selected?: boolean | undefined;
        // value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface ScriptHTMLAttributes<T> {
        // async?: boolean | undefined;
        // /** @deprecated */
        // charSet?: string | undefined;
        // crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        // defer?: boolean | undefined;
        // integrity?: string | undefined;
        // noModule?: boolean | undefined;
        // referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
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
        // autoComplete?: string | undefined;
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
        // value?: string | ReadonlyArray<string> | number | undefined;
        // onChange?: ChangeEventHandler<T> | undefined;
    }

    interface StyleHTMLAttributes<T> {
        /**
         * @important
         */
        media?: string | undefined;
        // scoped?: boolean | undefined;
        /**
         * @important
         */
        type?: string | undefined;
    }

    interface TextareaHTMLAttributes<T> {
        // autoComplete?: string | undefined;
        /**
         * @important
         */
        cols?: number | undefined;
        // dirName?: string | undefined;
        /**
         * @important
         */
        disabled?: boolean | undefined;
        // form?: string | undefined;
        /**
         * @important
         */
        maxLength?: number | undefined;
        // minLength?: number | undefined;
        // name?: string | undefined;
        /**
         * @important
         */
        placeholder?: string | undefined;
        // readOnly?: boolean | undefined;
        /**
         * @important
         */
        required?: boolean | undefined;
        /**
         * @important
         */
        rows?: number | undefined;
        // value?: string | ReadonlyArray<string> | number | undefined;
        // wrap?: string | undefined;

        // onChange?: ChangeEventHandler<T> | undefined;
    }
}
