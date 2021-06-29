// Type definitions for vhtml 2.2
// Project: https://github.com/developit/vhtml
// Definitions by: pastelmind <https://github.com/pastelmind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = vhtml;

/**
 * Converts Hyperscript/JSX to a plain string.
 * @param name Element name
 * @param attrs Attributes
 * @param children Child elements
 */
declare function vhtml<T extends string>(name: T, attrs?: HtmlElementAttr<T> | null, ...children: any[]): string;

/**
 * Converts Hyperscript/JSX to a plain string.
 * @param component Functional pseudo-component
 * @param attrs Attributes
 * @param children Child elements
 */
declare function vhtml<Props, Children extends any[]>(
    component: (props: Props & { children: Children }) => string,
    attrs?: Props | null,
    ...children: Children
): string;

/**
 * @internal
 * Attributes supported on HTML tags.
 * This type alias allows custom tags to have any attribute, while still
 * enforcing type-checks on known HTML attributes.
 *
 * Notes:
 *  - Because TypeScript forbids unknown tag names in JSX, custom string tags
 *    can be used only with hyperscript-style code.
 *  - There is no need to add `{ [attr: string]: any }` to known attributes,
 *    since TypeScript already supports arbitrary `data-*` attributes in JSX
 *    (see "Note" in https://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking)
 */
type HtmlElementAttr<Tag extends string> = (Tag extends keyof vhtml.JSX.IntrinsicElements
    ? vhtml.JSX.IntrinsicElements[Tag]
    : {}) & {
    dangerouslySetInnerHTML?: { __html: string };
    [attr: string]: any;
};

/**
 * @internal
 * Empty mapped types (`Pick<{}, never>`) are almost identical to the empty
 * object type (`{}`). However, TypeScript seems to treat them differently for
 * the purposes of checking `JSX.LibraryManagedAttributes`.
 *
 * This type alias converts any empty-ish type to a plain empty object type, so
 * that we can work around said behavior.
 */
type SafeEmptyType<T> = {} extends T ? {} : T;

/**
 * @internal
 * Same as `Omit<T, K>` introduced in TypeScript 3.4.
 * Added here so that we can support older versions of TypeScript.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * @internal
 * Type alias that transforms the type of `props.children` of a vhtml component
 * to a type that TypeScript expects.
 *
 * Currently, this supports:
 * - Empty components (no props.children)
 * - Empty components (props.children is an empty tuple)
 * - Components with exactly one child (props.children is a 1-length tuple)
 * - Components with exactly zero or one child
 * - Components with arbitrary number of children (props.children is an array)
 * - Forbidding components whose props.children is not an array
 */
type ComponentPropTransform<TComp, TProps> = SafeEmptyType<Omit<TProps, "children">> &
    (TProps extends { children: [] }
        ? {}
        : TProps extends { children: [infer ChildType] }
        ? { children: ChildType }
        : TProps extends { children: [(infer ChildType)?] }
        ? { children?: ChildType }
        : TProps extends { children: Array<infer ChildrenType> }
        ? { children?: ChildrenType | ChildrenType[] }
        : TProps extends { children: any }
        ? never
        : {});

declare namespace vhtml {
    namespace JSX {
        type Element = string;

        // Enable component children type checks
        interface ElementChildrenAttribute {
            children: {};
        }

        type LibraryManagedAttributes<TComp, TProps> = ComponentPropTransform<TComp, TProps>;

        interface IntrinsicAttributes {
            // This property is not used by vhtml, but is required to enforce
            // type checking of function components that accept no children.
            //
            // To explain: TypeScript checks JSX attributes (and children,
            // apprently) as though they are object literal assignments for a
            // component's props.
            // The only information I could find about this behavior was this:
            //  - https://github.com/microsoft/TypeScript/issues/15463#issuecomment-299263157
            //
            // If this property did not exist, TypeScript would treat this
            // interface as the empty object type (`{}`). Since TypeScript
            // allows objects with arbitrary attributes to be assigned to the
            // empty object type, it would allow `{ children: any }` to be
            // passed to a component, even if the component was childless.
            // Defining this dummy property prevents this behavior, so that
            // passing children to a childless component would correctly cause a
            // type error.
            //
            // Note that other JSX frameworks like React do not need this hack
            // because they use actual intrinsic properties, such as `key`.
            __dummy_dont_use?: any;
        }

        // The following interfaces were generated by transforming large sections of
        // JSX type definitions in @types/react 17.0.3. Those type definitions were
        // produced by multiple contributors, including, but not limited to:
        //
        //                 AssureSign <http://www.assuresign.com>
        //                 Microsoft <https://microsoft.com>
        //                 John Reilly <https://github.com/johnnyreilly>
        //                 Benoit Benezech <https://github.com/bbenezech>
        //                 Patricio Zavolinsky <https://github.com/pzavolinsky>
        //                 Digiguru <https://github.com/digiguru>
        //                 Eric Anderson <https://github.com/ericanderson>
        //                 Dovydas Navickas <https://github.com/DovydasNavickas>
        //                 Josh Rutherford <https://github.com/theruther4d>
        //                 Guilherme Hübner <https://github.com/guilhermehubner>
        //                 Ferdy Budhidharma <https://github.com/ferdaber>
        //                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
        //                 Olivier Pascal <https://github.com/pascaloliv>
        //                 Martin Hochel <https://github.com/hotell>
        //                 Frank Li <https://github.com/franklixuefei>
        //                 Jessica Franco <https://github.com/Jessidhia>
        //                 Saransh Kataria <https://github.com/saranshkataria>
        //                 Kanitkorn Sujautra <https://github.com/lukyth>
        //                 Sebastian Silbermann <https://github.com/eps1lon>
        //                 Kyle Scully <https://github.com/zieka>
        //                 Cong Zhang <https://github.com/dancerphil>
        //                 Dimitri Mitropoulos <https://github.com/dimitropoulos>
        //                 JongChan Choi <https://github.com/disjukr>
        //                 Victor Magalhães <https://github.com/vhfmag>
        //                 Dale Tan <https://github.com/hellatan>
        //
        // See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
        // for the up-to-date list of contributors to @types/react
        interface IntrinsicElements {
            a: AnchorHTMLAttributes;
            abbr: HTMLAttributes;
            address: HTMLAttributes;
            area: AreaHTMLAttributes;
            article: HTMLAttributes;
            aside: HTMLAttributes;
            audio: AudioHTMLAttributes;
            b: HTMLAttributes;
            base: BaseHTMLAttributes;
            bdi: HTMLAttributes;
            bdo: HTMLAttributes;
            big: HTMLAttributes;
            blockquote: BlockquoteHTMLAttributes;
            body: HTMLAttributes;
            br: HTMLAttributes;
            button: ButtonHTMLAttributes;
            canvas: CanvasHTMLAttributes;
            caption: HTMLAttributes;
            cite: HTMLAttributes;
            code: HTMLAttributes;
            col: ColHTMLAttributes;
            colgroup: ColgroupHTMLAttributes;
            data: DataHTMLAttributes;
            datalist: HTMLAttributes;
            dd: HTMLAttributes;
            del: DelHTMLAttributes;
            details: DetailsHTMLAttributes;
            dfn: HTMLAttributes;
            dialog: DialogHTMLAttributes;
            div: HTMLAttributes;
            dl: HTMLAttributes;
            dt: HTMLAttributes;
            em: HTMLAttributes;
            embed: EmbedHTMLAttributes;
            fieldset: FieldsetHTMLAttributes;
            figcaption: HTMLAttributes;
            figure: HTMLAttributes;
            footer: HTMLAttributes;
            form: FormHTMLAttributes;
            h1: HTMLAttributes;
            h2: HTMLAttributes;
            h3: HTMLAttributes;
            h4: HTMLAttributes;
            h5: HTMLAttributes;
            h6: HTMLAttributes;
            head: HTMLAttributes;
            header: HTMLAttributes;
            hgroup: HTMLAttributes;
            hr: HTMLAttributes;
            html: HtmlHTMLAttributes;
            i: HTMLAttributes;
            iframe: IframeHTMLAttributes;
            img: ImgHTMLAttributes;
            input: InputHTMLAttributes;
            ins: InsHTMLAttributes;
            kbd: HTMLAttributes;
            keygen: KeygenHTMLAttributes;
            label: LabelHTMLAttributes;
            legend: HTMLAttributes;
            li: LiHTMLAttributes;
            link: LinkHTMLAttributes;
            main: HTMLAttributes;
            map: MapHTMLAttributes;
            mark: HTMLAttributes;
            menu: MenuHTMLAttributes;
            menuitem: HTMLAttributes;
            meta: MetaHTMLAttributes;
            meter: MeterHTMLAttributes;
            nav: HTMLAttributes;
            noindex: HTMLAttributes;
            noscript: HTMLAttributes;
            object: ObjectHTMLAttributes;
            ol: OlHTMLAttributes;
            optgroup: OptgroupHTMLAttributes;
            option: OptionHTMLAttributes;
            output: OutputHTMLAttributes;
            p: HTMLAttributes;
            param: ParamHTMLAttributes;
            picture: HTMLAttributes;
            pre: HTMLAttributes;
            progress: ProgressHTMLAttributes;
            q: QuoteHTMLAttributes;
            rp: HTMLAttributes;
            rt: HTMLAttributes;
            ruby: HTMLAttributes;
            s: HTMLAttributes;
            samp: HTMLAttributes;
            slot: SlotHTMLAttributes;
            script: ScriptHTMLAttributes;
            section: HTMLAttributes;
            select: SelectHTMLAttributes;
            small: HTMLAttributes;
            source: SourceHTMLAttributes;
            span: HTMLAttributes;
            strong: HTMLAttributes;
            style: StyleHTMLAttributes;
            sub: HTMLAttributes;
            summary: HTMLAttributes;
            sup: HTMLAttributes;
            table: TableHTMLAttributes;
            template: HTMLAttributes;
            tbody: HTMLAttributes;
            td: TdHTMLAttributes;
            textarea: TextareaHTMLAttributes;
            tfoot: HTMLAttributes;
            th: ThHTMLAttributes;
            thead: HTMLAttributes;
            time: TimeHTMLAttributes;
            title: HTMLAttributes;
            tr: HTMLAttributes;
            track: TrackHTMLAttributes;
            u: HTMLAttributes;
            ul: HTMLAttributes;
            var: HTMLAttributes;
            video: VideoHTMLAttributes;
            wbr: HTMLAttributes;
            webview: WebViewHTMLAttributes;
            svg: SVGProps;
            animate: SVGProps;
            animateMotion: SVGProps;
            animateTransform: SVGProps;
            circle: SVGProps;
            clipPath: SVGProps;
            defs: SVGProps;
            desc: SVGProps;
            ellipse: SVGProps;
            feBlend: SVGProps;
            feColorMatrix: SVGProps;
            feComponentTransfer: SVGProps;
            feComposite: SVGProps;
            feConvolveMatrix: SVGProps;
            feDiffuseLighting: SVGProps;
            feDisplacementMap: SVGProps;
            feDistantLight: SVGProps;
            feDropShadow: SVGProps;
            feFlood: SVGProps;
            feFuncA: SVGProps;
            feFuncB: SVGProps;
            feFuncG: SVGProps;
            feFuncR: SVGProps;
            feGaussianBlur: SVGProps;
            feImage: SVGProps;
            feMerge: SVGProps;
            feMergeNode: SVGProps;
            feMorphology: SVGProps;
            feOffset: SVGProps;
            fePointLight: SVGProps;
            feSpecularLighting: SVGProps;
            feSpotLight: SVGProps;
            feTile: SVGProps;
            feTurbulence: SVGProps;
            filter: SVGProps;
            foreignObject: SVGProps;
            g: SVGProps;
            image: SVGProps;
            line: SVGProps;
            linearGradient: SVGProps;
            marker: SVGProps;
            mask: SVGProps;
            metadata: SVGProps;
            mpath: SVGProps;
            path: SVGProps;
            pattern: SVGProps;
            polygon: SVGProps;
            polyline: SVGProps;
            radialGradient: SVGProps;
            rect: SVGProps;
            stop: SVGProps;
            switch: SVGProps;
            symbol: SVGProps;
            text: SVGProps;
            textPath: SVGProps;
            tspan: SVGProps;
            use: SVGProps;
            view: SVGProps;
        }

        type SVGProps = SVGAttributes;
        interface DOMAttributes {
            children?: any;
            dangerouslySetInnerHTML?: {
                __html: string;
            };

            // Clipboard Events
            oncopy?: string;
            oncopycapture?: string;
            oncut?: string;
            oncutcapture?: string;
            onpaste?: string;
            onpastecapture?: string;

            // Composition Events
            oncompositionend?: string;
            oncompositionendcapture?: string;
            oncompositionstart?: string;
            oncompositionstartcapture?: string;
            oncompositionupdate?: string;
            oncompositionupdatecapture?: string;

            // Focus Events
            onfocus?: string;
            onfocuscapture?: string;
            onblur?: string;
            onblurcapture?: string;

            // Form Events
            onchange?: string;
            onchangecapture?: string;
            onbeforeinput?: string;
            onbeforeinputcapture?: string;
            oninput?: string;
            oninputcapture?: string;
            onreset?: string;
            onresetcapture?: string;
            onsubmit?: string;
            onsubmitcapture?: string;
            oninvalid?: string;
            oninvalidcapture?: string;

            // Image Events
            onload?: string;
            onloadcapture?: string;
            onerror?: string; // also a Media Event
            onerrorcapture?: string; // also a Media Event

            // Keyboard Events
            onkeydown?: string;
            onkeydowncapture?: string;
            onkeypress?: string;
            onkeypresscapture?: string;
            onkeyup?: string;
            onkeyupcapture?: string;

            // Media Events
            onabort?: string;
            onabortcapture?: string;
            oncanplay?: string;
            oncanplaycapture?: string;
            oncanplaythrough?: string;
            oncanplaythroughcapture?: string;
            ondurationchange?: string;
            ondurationchangecapture?: string;
            onemptied?: string;
            onemptiedcapture?: string;
            onencrypted?: string;
            onencryptedcapture?: string;
            onended?: string;
            onendedcapture?: string;
            onloadeddata?: string;
            onloadeddatacapture?: string;
            onloadedmetadata?: string;
            onloadedmetadatacapture?: string;
            onloadstart?: string;
            onloadstartcapture?: string;
            onpause?: string;
            onpausecapture?: string;
            onplay?: string;
            onplaycapture?: string;
            onplaying?: string;
            onplayingcapture?: string;
            onprogress?: string;
            onprogresscapture?: string;
            onratechange?: string;
            onratechangecapture?: string;
            onseeked?: string;
            onseekedcapture?: string;
            onseeking?: string;
            onseekingcapture?: string;
            onstalled?: string;
            onstalledcapture?: string;
            onsuspend?: string;
            onsuspendcapture?: string;
            ontimeupdate?: string;
            ontimeupdatecapture?: string;
            onvolumechange?: string;
            onvolumechangecapture?: string;
            onwaiting?: string;
            onwaitingcapture?: string;

            // MouseEvents
            onauxclick?: string;
            onauxclickcapture?: string;
            onclick?: string;
            onclickcapture?: string;
            oncontextmenu?: string;
            oncontextmenucapture?: string;
            ondoubleclick?: string;
            ondoubleclickcapture?: string;
            ondrag?: string;
            ondragcapture?: string;
            ondragend?: string;
            ondragendcapture?: string;
            ondragenter?: string;
            ondragentercapture?: string;
            ondragexit?: string;
            ondragexitcapture?: string;
            ondragleave?: string;
            ondragleavecapture?: string;
            ondragover?: string;
            ondragovercapture?: string;
            ondragstart?: string;
            ondragstartcapture?: string;
            ondrop?: string;
            ondropcapture?: string;
            onmousedown?: string;
            onmousedowncapture?: string;
            onmouseenter?: string;
            onmouseleave?: string;
            onmousemove?: string;
            onmousemovecapture?: string;
            onmouseout?: string;
            onmouseoutcapture?: string;
            onmouseover?: string;
            onmouseovercapture?: string;
            onmouseup?: string;
            onmouseupcapture?: string;

            // Selection Events
            onselect?: string;
            onselectcapture?: string;

            // Touch Events
            ontouchcancel?: string;
            ontouchcancelcapture?: string;
            ontouchend?: string;
            ontouchendcapture?: string;
            ontouchmove?: string;
            ontouchmovecapture?: string;
            ontouchstart?: string;
            ontouchstartcapture?: string;

            // Pointer Events
            onpointerdown?: string;
            onpointerdowncapture?: string;
            onpointermove?: string;
            onpointermovecapture?: string;
            onpointerup?: string;
            onpointerupcapture?: string;
            onpointercancel?: string;
            onpointercancelcapture?: string;
            onpointerenter?: string;
            onpointerentercapture?: string;
            onpointerleave?: string;
            onpointerleavecapture?: string;
            onpointerover?: string;
            onpointerovercapture?: string;
            onpointerout?: string;
            onpointeroutcapture?: string;
            ongotpointercapture?: string;
            ongotpointercapturecapture?: string;
            onlostpointercapture?: string;
            onlostpointercapturecapture?: string;

            // UI Events
            onscroll?: string;
            onscrollcapture?: string;

            // Wheel Events
            onwheel?: string;
            onwheelcapture?: string;

            // Animation Events
            onanimationstart?: string;
            onanimationstartcapture?: string;
            onanimationend?: string;
            onanimationendcapture?: string;
            onanimationiteration?: string;
            onanimationiterationcapture?: string;

            // Transition Events
            ontransitionend?: string;
            ontransitionendcapture?: string;
        }
        interface AriaAttributes {
            /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
            'aria-activedescendant'?: string;
            /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
            'aria-atomic'?: boolean | 'false' | 'true';
            /**
             * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
             * presented if they are made.
             */
            'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
            /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
            'aria-busy'?: boolean | 'false' | 'true';
            /**
             * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
             * @see aria-pressed
             * @see aria-selected.
             */
            'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
            /**
             * Defines the total number of columns in a table, grid, or treegrid.
             * @see aria-colindex.
             */
            'aria-colcount'?: number;
            /**
             * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
             * @see aria-colcount
             * @see aria-colspan.
             */
            'aria-colindex'?: number;
            /**
             * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-colindex
             * @see aria-rowspan.
             */
            'aria-colspan'?: number;
            /**
             * Identifies the element (or elements) whose contents or presence are controlled by the current element.
             * @see aria-owns.
             */
            'aria-controls'?: string;
            /** Indicates the element that represents the current item within a container or set of related elements. */
            'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
            /**
             * Identifies the element (or elements) that describes the object.
             * @see aria-labelledby
             */
            'aria-describedby'?: string;
            /**
             * Identifies the element that provides a detailed, extended description for the object.
             * @see aria-describedby.
             */
            'aria-details'?: string;
            /**
             * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
             * @see aria-hidden
             * @see aria-readonly.
             */
            'aria-disabled'?: boolean | 'false' | 'true';
            /**
             * Indicates what functions can be performed when a dragged object is released on the drop target.
             * @deprecated in ARIA 1.1
             */
            'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
            /**
             * Identifies the element that provides an error message for the object.
             * @see aria-invalid
             * @see aria-describedby.
             */
            'aria-errormessage'?: string;
            /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
            'aria-expanded'?: boolean | 'false' | 'true';
            /**
             * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
             * allows assistive technology to override the general default of reading in document source order.
             */
            'aria-flowto'?: string;
            /**
             * Indicates an element's "grabbed" state in a drag-and-drop operation.
             * @deprecated in ARIA 1.1
             */
            'aria-grabbed'?: boolean | 'false' | 'true';
            /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
            'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
            /**
             * Indicates whether the element is exposed to an accessibility API.
             * @see aria-disabled.
             */
            'aria-hidden'?: boolean | 'false' | 'true';
            /**
             * Indicates the entered value does not conform to the format expected by the application.
             * @see aria-errormessage.
             */
            'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
            /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
            'aria-keyshortcuts'?: string;
            /**
             * Defines a string value that labels the current element.
             * @see aria-labelledby.
             */
            'aria-label'?: string;
            /**
             * Identifies the element (or elements) that labels the current element.
             * @see aria-describedby.
             */
            'aria-labelledby'?: string;
            /** Defines the hierarchical level of an element within a structure. */
            'aria-level'?: number;
            /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
            'aria-live'?: 'off' | 'assertive' | 'polite';
            /** Indicates whether an element is modal when displayed. */
            'aria-modal'?: boolean | 'false' | 'true';
            /** Indicates whether a text box accepts multiple lines of input or only a single line. */
            'aria-multiline'?: boolean | 'false' | 'true';
            /** Indicates that the user may select more than one item from the current selectable descendants. */
            'aria-multiselectable'?: boolean | 'false' | 'true';
            /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
            'aria-orientation'?: 'horizontal' | 'vertical';
            /**
             * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
             * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
             * @see aria-controls.
             */
            'aria-owns'?: string;
            /**
             * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
             * A hint could be a sample value or a brief description of the expected format.
             */
            'aria-placeholder'?: string;
            /**
             * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-setsize.
             */
            'aria-posinset'?: number;
            /**
             * Indicates the current "pressed" state of toggle buttons.
             * @see aria-checked
             * @see aria-selected.
             */
            'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
            /**
             * Indicates that the element is not editable, but is otherwise operable.
             * @see aria-disabled.
             */
            'aria-readonly'?: boolean | 'false' | 'true';
            /**
             * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
             * @see aria-atomic.
             */
            'aria-relevant'?:
                | 'additions'
                | 'additions removals'
                | 'additions text'
                | 'all'
                | 'removals'
                | 'removals additions'
                | 'removals text'
                | 'text'
                | 'text additions'
                | 'text removals';
            /** Indicates that user input is required on the element before a form may be submitted. */
            'aria-required'?: boolean | 'false' | 'true';
            /** Defines a human-readable, author-localized description for the role of an element. */
            'aria-roledescription'?: string;
            /**
             * Defines the total number of rows in a table, grid, or treegrid.
             * @see aria-rowindex.
             */
            'aria-rowcount'?: number;
            /**
             * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
             * @see aria-rowcount
             * @see aria-rowspan.
             */
            'aria-rowindex'?: number;
            /**
             * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-rowindex
             * @see aria-colspan.
             */
            'aria-rowspan'?: number;
            /**
             * Indicates the current "selected" state of various widgets.
             * @see aria-checked
             * @see aria-pressed.
             */
            'aria-selected'?: boolean | 'false' | 'true';
            /**
             * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-posinset.
             */
            'aria-setsize'?: number;
            /** Indicates if items in a table or grid are sorted in ascending or descending order. */
            'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
            /** Defines the maximum allowed value for a range widget. */
            'aria-valuemax'?: number;
            /** Defines the minimum allowed value for a range widget. */
            'aria-valuemin'?: number;
            /**
             * Defines the current value for a range widget.
             * @see aria-valuetext.
             */
            'aria-valuenow'?: number;
            /** Defines the human readable text alternative of aria-valuenow for a range widget. */
            'aria-valuetext'?: string;
        }
        interface HTMLAttributes extends AriaAttributes, DOMAttributes {
            // React-specific Attributes
            // Standard HTML Attributes
            accesskey?: string;
            className?: string;
            contenteditable?: (boolean | 'true' | 'false') | 'inherit';
            contextmenu?: string;
            dir?: string;
            draggable?: boolean | 'true' | 'false';
            hidden?: boolean;
            id?: string;
            lang?: string;
            placeholder?: string;
            slot?: string;
            spellcheck?: boolean | 'true' | 'false';
            style?: string;
            tabindex?: number;
            title?: string;
            translate?: 'yes' | 'no';

            // Unknown
            radiogroup?: string; // <command>, <menuitem>

            // WAI-ARIA
            role?: string;

            // RDFa Attributes
            about?: string;
            datatype?: string;
            inlist?: any;
            prefix?: string;
            property?: string;
            resource?: string;
            typeof?: string;
            vocab?: string;

            // Non-standard Attributes
            autocapitalize?: string;
            autocorrect?: string;
            autosave?: string;
            color?: string;
            itemprop?: string;
            itemscope?: boolean;
            itemtype?: string;
            itemid?: string;
            itemref?: string;
            results?: number;
            security?: string;
            unselectable?: 'on' | 'off';

            // Living Standard
            /**
             * Hints at the type of data that might be entered by the user while editing the element or its contents
             * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
             */
            inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
            /**
             * Specify that a standard HTML element should behave like a defined custom built-in element
             * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
             */
            is?: string;
            class?: string;
        }
        type HTMLAttributeReferrerPolicy =
            | ''
            | 'no-referrer'
            | 'no-referrer-when-downgrade'
            | 'origin'
            | 'origin-when-cross-origin'
            | 'same-origin'
            | 'strict-origin'
            | 'strict-origin-when-cross-origin'
            | 'unsafe-url';
        interface AnchorHTMLAttributes extends HTMLAttributes {
            download?: any;
            href?: string;
            hreflang?: string;
            media?: string;
            ping?: string;
            rel?: string;
            target?: string;
            type?: string;
            referrerpolicy?: HTMLAttributeReferrerPolicy;
        }

        type AudioHTMLAttributes = MediaHTMLAttributes;
        interface AreaHTMLAttributes extends HTMLAttributes {
            alt?: string;
            coords?: string;
            download?: any;
            href?: string;
            hreflang?: string;
            media?: string;
            referrerpolicy?: HTMLAttributeReferrerPolicy;
            rel?: string;
            shape?: string;
            target?: string;
        }
        interface BaseHTMLAttributes extends HTMLAttributes {
            href?: string;
            target?: string;
        }
        interface BlockquoteHTMLAttributes extends HTMLAttributes {
            cite?: string;
        }
        interface ButtonHTMLAttributes extends HTMLAttributes {
            autofocus?: boolean;
            disabled?: boolean;
            form?: string;
            formaction?: string;
            formenctype?: string;
            formmethod?: string;
            formnovalidate?: boolean;
            formtarget?: string;
            name?: string;
            type?: 'submit' | 'reset' | 'button';
            value?: string | ReadonlyArray<string> | number;
        }
        interface CanvasHTMLAttributes extends HTMLAttributes {
            height?: number | string;
            width?: number | string;
        }
        interface ColHTMLAttributes extends HTMLAttributes {
            span?: number;
            width?: number | string;
        }
        interface ColgroupHTMLAttributes extends HTMLAttributes {
            span?: number;
        }
        interface DataHTMLAttributes extends HTMLAttributes {
            value?: string | ReadonlyArray<string> | number;
        }
        interface DetailsHTMLAttributes extends HTMLAttributes {
            open?: boolean;
            ontoggle?: string;
        }
        interface DelHTMLAttributes extends HTMLAttributes {
            cite?: string;
            datetime?: string;
        }
        interface DialogHTMLAttributes extends HTMLAttributes {
            open?: boolean;
        }
        interface EmbedHTMLAttributes extends HTMLAttributes {
            height?: number | string;
            src?: string;
            type?: string;
            width?: number | string;
        }
        interface FieldsetHTMLAttributes extends HTMLAttributes {
            disabled?: boolean;
            form?: string;
            name?: string;
        }
        interface FormHTMLAttributes extends HTMLAttributes {
            acceptcharset?: string;
            action?: string;
            autocomplete?: string;
            enctype?: string;
            method?: string;
            name?: string;
            novalidate?: boolean;
            target?: string;
        }
        interface HtmlHTMLAttributes extends HTMLAttributes {
            manifest?: string;
        }
        interface IframeHTMLAttributes extends HTMLAttributes {
            allow?: string;
            allowfullscreen?: boolean;
            allowtransparency?: boolean;
            /** @deprecated */
            frameborder?: number | string;
            height?: number | string;
            loading?: 'eager' | 'lazy';
            /** @deprecated */
            marginheight?: number;
            /** @deprecated */
            marginwidth?: number;
            name?: string;
            referrerpolicy?: HTMLAttributeReferrerPolicy;
            sandbox?: string;
            /** @deprecated */
            scrolling?: string;
            seamless?: boolean;
            src?: string;
            srcdoc?: string;
            width?: number | string;
        }
        interface ImgHTMLAttributes extends HTMLAttributes {
            alt?: string;
            crossorigin?: 'anonymous' | 'use-credentials' | '';
            decoding?: 'async' | 'auto' | 'sync';
            height?: number | string;
            loading?: 'eager' | 'lazy';
            referrerpolicy?: HTMLAttributeReferrerPolicy;
            sizes?: string;
            src?: string;
            srcset?: string;
            usemap?: string;
            width?: number | string;
        }
        interface InsHTMLAttributes extends HTMLAttributes {
            cite?: string;
            datetime?: string;
        }
        interface InputHTMLAttributes extends HTMLAttributes {
            accept?: string;
            alt?: string;
            autocomplete?: string;
            autofocus?: boolean;
            capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
            checked?: boolean;
            crossorigin?: string;
            disabled?: boolean;
            enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
            form?: string;
            formaction?: string;
            formenctype?: string;
            formmethod?: string;
            formnovalidate?: boolean;
            formtarget?: string;
            height?: number | string;
            list?: string;
            max?: number | string;
            maxlength?: number;
            min?: number | string;
            minlength?: number;
            multiple?: boolean;
            name?: string;
            pattern?: string;
            placeholder?: string;
            readonly?: boolean;
            required?: boolean;
            size?: number;
            src?: string;
            step?: number | string;
            type?: string;
            value?: string | ReadonlyArray<string> | number;
            width?: number | string;

            onchange?: string;
        }
        interface KeygenHTMLAttributes extends HTMLAttributes {
            autofocus?: boolean;
            challenge?: string;
            disabled?: boolean;
            form?: string;
            keytype?: string;
            keyparams?: string;
            name?: string;
        }
        interface LabelHTMLAttributes extends HTMLAttributes {
            form?: string;
            htmlFor?: string;
            for?: string;
        }
        interface LiHTMLAttributes extends HTMLAttributes {
            value?: string | ReadonlyArray<string> | number;
        }
        interface LinkHTMLAttributes extends HTMLAttributes {
            as?: string;
            crossorigin?: string;
            href?: string;
            hreflang?: string;
            integrity?: string;
            media?: string;
            referrerpolicy?: HTMLAttributeReferrerPolicy;
            rel?: string;
            sizes?: string;
            type?: string;
            charset?: string;
        }
        interface MapHTMLAttributes extends HTMLAttributes {
            name?: string;
        }
        interface MenuHTMLAttributes extends HTMLAttributes {
            type?: string;
        }
        interface MediaHTMLAttributes extends HTMLAttributes {
            autoplay?: boolean;
            controls?: boolean;
            controlslist?: string;
            crossorigin?: string;
            loop?: boolean;
            mediagroup?: string;
            muted?: boolean;
            playsinline?: boolean;
            preload?: string;
            src?: string;
        }
        interface MetaHTMLAttributes extends HTMLAttributes {
            charset?: string;
            content?: string;
            httpequiv?: string;
            name?: string;
        }
        interface MeterHTMLAttributes extends HTMLAttributes {
            form?: string;
            high?: number;
            low?: number;
            max?: number | string;
            min?: number | string;
            optimum?: number;
            value?: string | ReadonlyArray<string> | number;
        }
        interface QuoteHTMLAttributes extends HTMLAttributes {
            cite?: string;
        }
        interface ObjectHTMLAttributes extends HTMLAttributes {
            classid?: string;
            data?: string;
            form?: string;
            height?: number | string;
            name?: string;
            type?: string;
            usemap?: string;
            width?: number | string;
            wmode?: string;
        }
        interface OlHTMLAttributes extends HTMLAttributes {
            reversed?: boolean;
            start?: number;
            type?: '1' | 'a' | 'A' | 'i' | 'I';
        }
        interface OptgroupHTMLAttributes extends HTMLAttributes {
            disabled?: boolean;
            label?: string;
        }
        interface OptionHTMLAttributes extends HTMLAttributes {
            disabled?: boolean;
            label?: string;
            selected?: boolean;
            value?: string | ReadonlyArray<string> | number;
        }
        interface OutputHTMLAttributes extends HTMLAttributes {
            form?: string;
            htmlFor?: string;
            name?: string;
            for?: string;
        }
        interface ParamHTMLAttributes extends HTMLAttributes {
            name?: string;
            value?: string | ReadonlyArray<string> | number;
        }
        interface ProgressHTMLAttributes extends HTMLAttributes {
            max?: number | string;
            value?: string | ReadonlyArray<string> | number;
        }
        interface SlotHTMLAttributes extends HTMLAttributes {
            name?: string;
        }
        interface ScriptHTMLAttributes extends HTMLAttributes {
            async?: boolean;
            /** @deprecated */
            charset?: string;
            crossorigin?: string;
            defer?: boolean;
            integrity?: string;
            nomodule?: boolean;
            nonce?: string;
            referrerpolicy?: HTMLAttributeReferrerPolicy;
            src?: string;
            type?: string;
        }
        interface SelectHTMLAttributes extends HTMLAttributes {
            autocomplete?: string;
            autofocus?: boolean;
            disabled?: boolean;
            form?: string;
            multiple?: boolean;
            name?: string;
            required?: boolean;
            size?: number;
            value?: string | ReadonlyArray<string> | number;
            onchange?: string;
        }
        interface SourceHTMLAttributes extends HTMLAttributes {
            media?: string;
            sizes?: string;
            src?: string;
            srcset?: string;
            type?: string;
        }
        interface StyleHTMLAttributes extends HTMLAttributes {
            media?: string;
            nonce?: string;
            scoped?: boolean;
            type?: string;
        }
        interface TableHTMLAttributes extends HTMLAttributes {
            cellpadding?: number | string;
            cellspacing?: number | string;
            summary?: string;
            width?: number | string;
        }
        interface TextareaHTMLAttributes extends HTMLAttributes {
            autocomplete?: string;
            autofocus?: boolean;
            cols?: number;
            dirname?: string;
            disabled?: boolean;
            form?: string;
            maxlength?: number;
            minlength?: number;
            name?: string;
            placeholder?: string;
            readonly?: boolean;
            required?: boolean;
            rows?: number;
            value?: string | ReadonlyArray<string> | number;
            wrap?: string;

            onchange?: string;
        }
        interface TdHTMLAttributes extends HTMLAttributes {
            align?: 'left' | 'center' | 'right' | 'justify' | 'char';
            colspan?: number;
            headers?: string;
            rowspan?: number;
            scope?: string;
            abbr?: string;
            height?: number | string;
            width?: number | string;
            valign?: 'top' | 'middle' | 'bottom' | 'baseline';
        }
        interface ThHTMLAttributes extends HTMLAttributes {
            align?: 'left' | 'center' | 'right' | 'justify' | 'char';
            colspan?: number;
            headers?: string;
            rowspan?: number;
            scope?: string;
            abbr?: string;
        }
        interface TimeHTMLAttributes extends HTMLAttributes {
            datetime?: string;
        }
        interface TrackHTMLAttributes extends HTMLAttributes {
            default?: boolean;
            kind?: string;
            label?: string;
            src?: string;
            srclang?: string;
        }
        interface VideoHTMLAttributes extends MediaHTMLAttributes {
            height?: number | string;
            playsinline?: boolean;
            poster?: string;
            width?: number | string;
            disablepictureinpicture?: boolean;
            disableremoteplayback?: boolean;
        }
        interface SVGAttributes extends AriaAttributes, DOMAttributes {
            // Attributes which also defined in HTMLAttributes
            // See comment in SVGDOMPropertyConfig.js
            className?: string;
            color?: string;
            height?: number | string;
            id?: string;
            lang?: string;
            max?: number | string;
            media?: string;
            method?: string;
            min?: number | string;
            name?: string;
            style?: string;
            target?: string;
            type?: string;
            width?: number | string;

            // Other HTML properties supported by SVG elements in browsers
            role?: string;
            tabindex?: number;
            crossorigin?: 'anonymous' | 'use-credentials' | '';

            // SVG Specific attributes
            accentheight?: number | string;
            accumulate?: 'none' | 'sum';
            additive?: 'replace' | 'sum';
            alignmentbaseline?:
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
            allowreorder?: 'no' | 'yes';
            alphabetic?: number | string;
            amplitude?: number | string;
            arabicform?: 'initial' | 'medial' | 'terminal' | 'isolated';
            ascent?: number | string;
            attributename?: string;
            attributetype?: string;
            autoreverse?: boolean | 'true' | 'false';
            azimuth?: number | string;
            basefrequency?: number | string;
            baselineshift?: number | string;
            baseprofile?: number | string;
            bbox?: number | string;
            begin?: number | string;
            bias?: number | string;
            by?: number | string;
            calcmode?: number | string;
            capheight?: number | string;
            clip?: number | string;
            clippath?: string;
            clippathunits?: number | string;
            cliprule?: number | string;
            colorinterpolation?: number | string;
            colorinterpolationfilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
            colorprofile?: number | string;
            colorrendering?: number | string;
            contentscripttype?: number | string;
            contentstyletype?: number | string;
            cursor?: number | string;
            cx?: number | string;
            cy?: number | string;
            d?: string;
            decelerate?: number | string;
            descent?: number | string;
            diffuseconstant?: number | string;
            direction?: number | string;
            display?: number | string;
            divisor?: number | string;
            dominantbaseline?: number | string;
            dur?: number | string;
            dx?: number | string;
            dy?: number | string;
            edgemode?: number | string;
            elevation?: number | string;
            enablebackground?: number | string;
            end?: number | string;
            exponent?: number | string;
            externalresourcesrequired?: boolean | 'true' | 'false';
            fill?: string;
            fillopacity?: number | string;
            fillrule?: 'nonzero' | 'evenodd' | 'inherit';
            filter?: string;
            filterres?: number | string;
            filterunits?: number | string;
            floodcolor?: number | string;
            floodopacity?: number | string;
            focusable?: (boolean | 'true' | 'false') | 'auto';
            fontfamily?: string;
            fontsize?: number | string;
            fontsizeadjust?: number | string;
            fontstretch?: number | string;
            fontstyle?: number | string;
            fontvariant?: number | string;
            fontweight?: number | string;
            format?: number | string;
            from?: number | string;
            fx?: number | string;
            fy?: number | string;
            g1?: number | string;
            g2?: number | string;
            glyphname?: number | string;
            glyphorientationhorizontal?: number | string;
            glyphorientationvertical?: number | string;
            glyphref?: number | string;
            gradienttransform?: string;
            gradientunits?: string;
            hanging?: number | string;
            horizadvx?: number | string;
            horizoriginx?: number | string;
            href?: string;
            ideographic?: number | string;
            imagerendering?: number | string;
            in2?: number | string;
            in?: string;
            intercept?: number | string;
            k1?: number | string;
            k2?: number | string;
            k3?: number | string;
            k4?: number | string;
            k?: number | string;
            kernelmatrix?: number | string;
            kernelunitlength?: number | string;
            kerning?: number | string;
            keypoints?: number | string;
            keysplines?: number | string;
            keytimes?: number | string;
            lengthadjust?: number | string;
            letterspacing?: number | string;
            lightingcolor?: number | string;
            limitingconeangle?: number | string;
            local?: number | string;
            markerend?: string;
            markerheight?: number | string;
            markermid?: string;
            markerstart?: string;
            markerunits?: number | string;
            markerwidth?: number | string;
            mask?: string;
            maskcontentunits?: number | string;
            maskunits?: number | string;
            mathematical?: number | string;
            mode?: number | string;
            numoctaves?: number | string;
            offset?: number | string;
            opacity?: number | string;
            operator?: number | string;
            order?: number | string;
            orient?: number | string;
            orientation?: number | string;
            origin?: number | string;
            overflow?: number | string;
            overlineposition?: number | string;
            overlinethickness?: number | string;
            paintorder?: number | string;
            panose1?: number | string;
            path?: string;
            pathlength?: number | string;
            patterncontentunits?: string;
            patterntransform?: number | string;
            patternunits?: string;
            pointerevents?: number | string;
            points?: string;
            pointsatx?: number | string;
            pointsaty?: number | string;
            pointsatz?: number | string;
            preservealpha?: boolean | 'true' | 'false';
            preserveaspectratio?: string;
            primitiveunits?: number | string;
            r?: number | string;
            radius?: number | string;
            refx?: number | string;
            refy?: number | string;
            renderingintent?: number | string;
            repeatcount?: number | string;
            repeatdur?: number | string;
            requiredextensions?: number | string;
            requiredfeatures?: number | string;
            restart?: number | string;
            result?: string;
            rotate?: number | string;
            rx?: number | string;
            ry?: number | string;
            scale?: number | string;
            seed?: number | string;
            shaperendering?: number | string;
            slope?: number | string;
            spacing?: number | string;
            specularconstant?: number | string;
            specularexponent?: number | string;
            speed?: number | string;
            spreadmethod?: string;
            startoffset?: number | string;
            stddeviation?: number | string;
            stemh?: number | string;
            stemv?: number | string;
            stitchtiles?: number | string;
            stopcolor?: string;
            stopopacity?: number | string;
            strikethroughposition?: number | string;
            strikethroughthickness?: number | string;
            string?: number | string;
            stroke?: string;
            strokedasharray?: string | number;
            strokedashoffset?: string | number;
            strokelinecap?: 'butt' | 'round' | 'square' | 'inherit';
            strokelinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
            strokemiterlimit?: number | string;
            strokeopacity?: number | string;
            strokewidth?: number | string;
            surfacescale?: number | string;
            systemlanguage?: number | string;
            tablevalues?: number | string;
            targetx?: number | string;
            targety?: number | string;
            textanchor?: string;
            textdecoration?: number | string;
            textlength?: number | string;
            textrendering?: number | string;
            to?: number | string;
            transform?: string;
            u1?: number | string;
            u2?: number | string;
            underlineposition?: number | string;
            underlinethickness?: number | string;
            unicode?: number | string;
            unicodebidi?: number | string;
            unicoderange?: number | string;
            unitsperem?: number | string;
            valphabetic?: number | string;
            values?: string;
            vectoreffect?: number | string;
            version?: string;
            vertadvy?: number | string;
            vertoriginx?: number | string;
            vertoriginy?: number | string;
            vhanging?: number | string;
            videographic?: number | string;
            viewbox?: string;
            viewtarget?: number | string;
            visibility?: number | string;
            vmathematical?: number | string;
            widths?: number | string;
            wordspacing?: number | string;
            writingmode?: number | string;
            x1?: number | string;
            x2?: number | string;
            x?: number | string;
            xchannelselector?: string;
            xheight?: number | string;
            xlinkactuate?: string;
            xlinkarcrole?: string;
            xlinkhref?: string;
            xlinkrole?: string;
            xlinkshow?: string;
            xlinktitle?: string;
            xlinktype?: string;
            xmlbase?: string;
            xmllang?: string;
            xmlns?: string;
            xmlnsxlink?: string;
            xmlspace?: string;
            y1?: number | string;
            y2?: number | string;
            y?: number | string;
            ychannelselector?: string;
            z?: number | string;
            zoomandpan?: string;
            class?: string;
        }
        interface WebViewHTMLAttributes extends HTMLAttributes {
            allowfullscreen?: boolean;
            allowpopups?: boolean;
            autofocus?: boolean;
            autosize?: boolean;
            blinkfeatures?: string;
            disableblinkfeatures?: string;
            disableguestresize?: boolean;
            disablewebsecurity?: boolean;
            guestinstance?: string;
            httpreferrer?: string;
            nodeintegration?: boolean;
            partition?: string;
            plugins?: boolean;
            preload?: string;
            src?: string;
            useragent?: string;
            webpreferences?: string;
        }
    }
}
