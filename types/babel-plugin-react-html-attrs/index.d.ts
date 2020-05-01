// Type definitions for React 16.9 when using babel-plugin-react-html-attrs 3.0
// Project: https://github.com/insin/babel-plugin-react-html-attrs
// Definitions by: Jonny Buchanan <https://github.com/insin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import 'react';

// tslint:disable-next-line strict-export-declare-modifiers
type Booleanish = boolean | 'true' | 'false';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Standard HTML Attributes
        accesskey?: string;
        class?: string;
        spellcheck?: Booleanish;
        tabindex?: number | string;

        // Unknown
        radiogroup?: string; // <command>, <menuitem>

        // Non-standard Attributes
        autocapitalize?: string;
        autocorrect?: string;
        autosave?: string;
        contenteditable?: Booleanish | 'inherit';
        contextmenu?: string;
        itemid?: string;
        itemprop?: string;
        itemref?: string;
        itemscope?: boolean;
        itemtype?: string;

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    }

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        'accept-charset'?: string;
        allowfullscreen?: boolean;
        allowtransparency?: boolean;
        autocomplete?: string;
        autofocus?: boolean;
        autoplay?: boolean;
        cellpadding?: number | string;
        cellspacing?: number | string;
        charset?: string;
        class?: string;
        classid?: string;
        colspan?: number | string;
        crossorigin?: string;
        datetime?: string;
        enctype?: string;
        for?: string;
        formaction?: string;
        formenctype?: string;
        formmethod?: string;
        formnovalidate?: boolean;
        formtarget?: string;
        frameborder?: number | string;
        hreflang?: string;
        'http-equiv'?: string;
        keyparams?: string;
        keytype?: string;
        marginheight?: number | string;
        marginwidth?: number | string;
        maxlength?: number | string;
        mediagroup?: string;
        minlength?: number | string;
        novalidate?: boolean;
        playsinline?: boolean;
        readonly?: boolean;
        rowspan?: number | string;
        srcdoc?: string;
        srclang?: string;
        srcset?: string;
        usemap?: string;
    }

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        hreflang?: string;
        referrerpolicy?: string;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        autofocus?: boolean;
        formaction?: string;
        formenctype?: string;
        formmethod?: string;
        formnovalidate?: boolean;
        formtarget?: string;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        datetime?: string;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        'accept-charset'?: string;
        autocomplete?: string;
        enctype?: string;
        novalidate?: boolean;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allowfullscreen?: boolean;
        allowtransparency?: boolean;
        frameborder?: number | string;
        marginheight?: number | string;
        marginwidth?: number | string;
        referrerpolicy?: string;
        srcdoc?: string;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        crossorigin?: 'anonymous' | 'use-credentials' | '';
        referrerpolicy?: 'no-referrer' | 'origin' | 'unsafe-url';
        srcset?: string;
        usemap?: string;
    }

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        autocomplete?: string;
        autofocus?: boolean;
        crossorigin?: string;
        formaction?: string;
        formenctype?: string;
        formmethod?: string;
        formnovalidate?: boolean;
        formtarget?: string;
        maxlength?: number | string;
        minlength?: number | string;
        readonly?: boolean;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        datetime?: string;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        autofocus?: boolean;
        keyparams?: string;
        keytype?: string;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        for?: string;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        crossorigin?: string;
        hreflang?: string;
        charset?: string;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoplay?: boolean;
        controlslist?: string;
        crossorigin?: string;
        mediagroup?: string;
        playsinline?: boolean;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charset?: string;
        'http-equiv'?: string;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classid?: string;
        usemap?: string;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        for?: string;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        charset?: string;
        crossorigin?: string;
        nomodule?: boolean;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autocomplete?: string;
        autofocus?: boolean;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        srcset?: string;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        cellpadding?: number | string;
        cellspacing?: number | string;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        colspan?: number | string;
        rowspan?: number | string;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autocomplete?: string;
        autofocus?: boolean;
        dirname?: string;
        maxlength?: number | string;
        minlength?: number | string;
        readonly?: boolean;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        colspan?: number | string;
        rowspan?: number | string;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        datetime?: string;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        srclang?: string;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        disablepictureinpicture?: boolean;
        playsinline?: boolean;
    }

    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Attributes also defined in HTMLAttributes
        class?: string;

        // Other HTML properties supported by SVG elements in browsers
        tabindex?: number | string;
        crossorigin?: 'anonymous' | 'use-credentials' | '';

        // SVG Specific attributes
        'accent-height'?: number | string;
        'alignment-baseline'?:
            | 'auto'
            | 'baseline'
            | 'before-edge'
            | 'text-before-edge'
            | 'middle'
            | 'central'
            | 'after-edge'
            | 'text-after-edge'
            | 'ideographic'
            | 'alphabetic'
            | 'hanging'
            | 'mathematical'
            | 'inherit';
        'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated';
        'baseline-shift'?: number | string;
        'cap-height'?: number | string;
        'clip-path'?: string;
        'clip-rule'?: number | string;
        'color-interpolation'?: number | string;
        'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
        'color-profile'?: number | string;
        'color-rendering'?: number | string;
        'dominant-baseline'?: number | string;
        'enable-background'?: number | string;
        'fill-opacity'?: number | string;
        'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit';
        'flood-color'?: number | string;
        'flood-opacity'?: number | string;
        'font-family'?: string;
        'font-size'?: number | string;
        'font-size-adjust'?: number | string;
        'font-stretch'?: number | string;
        'font-style'?: number | string;
        'font-variant'?: number | string;
        'font-weight'?: number | string;
        'glyph-name'?: number | string;
        'glyph-orientation-horizontal'?: number | string;
        'glyph-orientation-vertical'?: number | string;
        'horiz-adv-x'?: number | string;
        'horiz-origin-x'?: number | string;
        'image-rendering'?: number | string;
        'letter-spacing'?: number | string;
        'lighting-color'?: number | string;
        'marker-end'?: string;
        'marker-mid'?: string;
        'marker-start'?: string;
        'overline-position'?: number | string;
        'overline-thickness'?: number | string;
        'paint-order'?: number | string;
        'panose-1'?: number | string;
        'pointer-events'?: number | string;
        'rendering-intent'?: number | string;
        'shape-rendering'?: number | string;
        'stop-color'?: string;
        'stop-opacity'?: number | string;
        'strikethrough-position'?: number | string;
        'strikethrough-thickness'?: number | string;
        'stroke-dasharray'?: string | number;
        'stroke-dashoffset'?: string | number;
        'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit';
        'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit';
        'stroke-miterlimit'?: number | string;
        'stroke-opacity'?: number | string;
        'stroke-width'?: number | string;
        'text-anchor'?: string;
        'text-decoration'?: number | string;
        'text-rendering'?: number | string;
        'underline-position'?: number | string;
        'underline-thickness'?: number | string;
        'unicode-bidi'?: number | string;
        'unicode-range'?: number | string;
        'units-per-em'?: number | string;
        'v-alphabetic'?: number | string;
        'v-hanging'?: number | string;
        'v-ideographic'?: number | string;
        'v-mathematical'?: number | string;
        'vector-effect'?: number | string;
        'vert-adv-y'?: number | string;
        'vert-origin-x'?: number | string;
        'vert-origin-y'?: number | string;
        'word-spacing'?: number | string;
        'writing-mode'?: number | string;
        'x-height'?: number | string;
        'xlink:actuate'?: string;
        'xlink:arcrole'?: string;
        'xlink:href'?: string;
        'xlink:role'?: string;
        'xlink:show'?: string;
        'xlink:title'?: string;
        'xlink:type'?: string;
        'xml:base'?: string;
        'xml:lang'?: string;
        'xml:space'?: string;
        'xmlns:xlink'?: string;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowfullscreen?: boolean;
        autofocus?: boolean;
    }
}
