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
    dangerouslySetInnerHTML?: { __html: string } | undefined;
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
        ? { children?: ChildType | undefined }
        : TProps extends { children: Array<infer ChildrenType> }
        ? { children?: ChildrenType | ChildrenType[] | undefined }
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
            } | undefined;

            // Clipboard Events
            oncopy?: string | undefined;
            oncopycapture?: string | undefined;
            oncut?: string | undefined;
            oncutcapture?: string | undefined;
            onpaste?: string | undefined;
            onpastecapture?: string | undefined;

            // Composition Events
            oncompositionend?: string | undefined;
            oncompositionendcapture?: string | undefined;
            oncompositionstart?: string | undefined;
            oncompositionstartcapture?: string | undefined;
            oncompositionupdate?: string | undefined;
            oncompositionupdatecapture?: string | undefined;

            // Focus Events
            onfocus?: string | undefined;
            onfocuscapture?: string | undefined;
            onblur?: string | undefined;
            onblurcapture?: string | undefined;

            // Form Events
            onchange?: string | undefined;
            onchangecapture?: string | undefined;
            onbeforeinput?: string | undefined;
            onbeforeinputcapture?: string | undefined;
            oninput?: string | undefined;
            oninputcapture?: string | undefined;
            onreset?: string | undefined;
            onresetcapture?: string | undefined;
            onsubmit?: string | undefined;
            onsubmitcapture?: string | undefined;
            oninvalid?: string | undefined;
            oninvalidcapture?: string | undefined;

            // Image Events
            onload?: string | undefined;
            onloadcapture?: string | undefined;
            onerror?: string | undefined; // also a Media Event
            onerrorcapture?: string | undefined; // also a Media Event

            // Keyboard Events
            onkeydown?: string | undefined;
            onkeydowncapture?: string | undefined;
            onkeypress?: string | undefined;
            onkeypresscapture?: string | undefined;
            onkeyup?: string | undefined;
            onkeyupcapture?: string | undefined;

            // Media Events
            onabort?: string | undefined;
            onabortcapture?: string | undefined;
            oncanplay?: string | undefined;
            oncanplaycapture?: string | undefined;
            oncanplaythrough?: string | undefined;
            oncanplaythroughcapture?: string | undefined;
            ondurationchange?: string | undefined;
            ondurationchangecapture?: string | undefined;
            onemptied?: string | undefined;
            onemptiedcapture?: string | undefined;
            onencrypted?: string | undefined;
            onencryptedcapture?: string | undefined;
            onended?: string | undefined;
            onendedcapture?: string | undefined;
            onloadeddata?: string | undefined;
            onloadeddatacapture?: string | undefined;
            onloadedmetadata?: string | undefined;
            onloadedmetadatacapture?: string | undefined;
            onloadstart?: string | undefined;
            onloadstartcapture?: string | undefined;
            onpause?: string | undefined;
            onpausecapture?: string | undefined;
            onplay?: string | undefined;
            onplaycapture?: string | undefined;
            onplaying?: string | undefined;
            onplayingcapture?: string | undefined;
            onprogress?: string | undefined;
            onprogresscapture?: string | undefined;
            onratechange?: string | undefined;
            onratechangecapture?: string | undefined;
            onseeked?: string | undefined;
            onseekedcapture?: string | undefined;
            onseeking?: string | undefined;
            onseekingcapture?: string | undefined;
            onstalled?: string | undefined;
            onstalledcapture?: string | undefined;
            onsuspend?: string | undefined;
            onsuspendcapture?: string | undefined;
            ontimeupdate?: string | undefined;
            ontimeupdatecapture?: string | undefined;
            onvolumechange?: string | undefined;
            onvolumechangecapture?: string | undefined;
            onwaiting?: string | undefined;
            onwaitingcapture?: string | undefined;

            // MouseEvents
            onauxclick?: string | undefined;
            onauxclickcapture?: string | undefined;
            onclick?: string | undefined;
            onclickcapture?: string | undefined;
            oncontextmenu?: string | undefined;
            oncontextmenucapture?: string | undefined;
            ondoubleclick?: string | undefined;
            ondoubleclickcapture?: string | undefined;
            ondrag?: string | undefined;
            ondragcapture?: string | undefined;
            ondragend?: string | undefined;
            ondragendcapture?: string | undefined;
            ondragenter?: string | undefined;
            ondragentercapture?: string | undefined;
            ondragexit?: string | undefined;
            ondragexitcapture?: string | undefined;
            ondragleave?: string | undefined;
            ondragleavecapture?: string | undefined;
            ondragover?: string | undefined;
            ondragovercapture?: string | undefined;
            ondragstart?: string | undefined;
            ondragstartcapture?: string | undefined;
            ondrop?: string | undefined;
            ondropcapture?: string | undefined;
            onmousedown?: string | undefined;
            onmousedowncapture?: string | undefined;
            onmouseenter?: string | undefined;
            onmouseleave?: string | undefined;
            onmousemove?: string | undefined;
            onmousemovecapture?: string | undefined;
            onmouseout?: string | undefined;
            onmouseoutcapture?: string | undefined;
            onmouseover?: string | undefined;
            onmouseovercapture?: string | undefined;
            onmouseup?: string | undefined;
            onmouseupcapture?: string | undefined;

            // Selection Events
            onselect?: string | undefined;
            onselectcapture?: string | undefined;

            // Touch Events
            ontouchcancel?: string | undefined;
            ontouchcancelcapture?: string | undefined;
            ontouchend?: string | undefined;
            ontouchendcapture?: string | undefined;
            ontouchmove?: string | undefined;
            ontouchmovecapture?: string | undefined;
            ontouchstart?: string | undefined;
            ontouchstartcapture?: string | undefined;

            // Pointer Events
            onpointerdown?: string | undefined;
            onpointerdowncapture?: string | undefined;
            onpointermove?: string | undefined;
            onpointermovecapture?: string | undefined;
            onpointerup?: string | undefined;
            onpointerupcapture?: string | undefined;
            onpointercancel?: string | undefined;
            onpointercancelcapture?: string | undefined;
            onpointerenter?: string | undefined;
            onpointerentercapture?: string | undefined;
            onpointerleave?: string | undefined;
            onpointerleavecapture?: string | undefined;
            onpointerover?: string | undefined;
            onpointerovercapture?: string | undefined;
            onpointerout?: string | undefined;
            onpointeroutcapture?: string | undefined;
            ongotpointercapture?: string | undefined;
            ongotpointercapturecapture?: string | undefined;
            onlostpointercapture?: string | undefined;
            onlostpointercapturecapture?: string | undefined;

            // UI Events
            onscroll?: string | undefined;
            onscrollcapture?: string | undefined;

            // Wheel Events
            onwheel?: string | undefined;
            onwheelcapture?: string | undefined;

            // Animation Events
            onanimationstart?: string | undefined;
            onanimationstartcapture?: string | undefined;
            onanimationend?: string | undefined;
            onanimationendcapture?: string | undefined;
            onanimationiteration?: string | undefined;
            onanimationiterationcapture?: string | undefined;

            // Transition Events
            ontransitionend?: string | undefined;
            ontransitionendcapture?: string | undefined;
        }
        interface AriaAttributes {
            /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
            'aria-activedescendant'?: string | undefined;
            /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
            'aria-atomic'?: boolean | 'false' | 'true' | undefined;
            /**
             * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
             * presented if they are made.
             */
            'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined;
            /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
            'aria-busy'?: boolean | 'false' | 'true' | undefined;
            /**
             * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
             * @see aria-pressed
             * @see aria-selected.
             */
            'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined;
            /**
             * Defines the total number of columns in a table, grid, or treegrid.
             * @see aria-colindex.
             */
            'aria-colcount'?: number | undefined;
            /**
             * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
             * @see aria-colcount
             * @see aria-colspan.
             */
            'aria-colindex'?: number | undefined;
            /**
             * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-colindex
             * @see aria-rowspan.
             */
            'aria-colspan'?: number | undefined;
            /**
             * Identifies the element (or elements) whose contents or presence are controlled by the current element.
             * @see aria-owns.
             */
            'aria-controls'?: string | undefined;
            /** Indicates the element that represents the current item within a container or set of related elements. */
            'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
            /**
             * Identifies the element (or elements) that describes the object.
             * @see aria-labelledby
             */
            'aria-describedby'?: string | undefined;
            /**
             * Identifies the element that provides a detailed, extended description for the object.
             * @see aria-describedby.
             */
            'aria-details'?: string | undefined;
            /**
             * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
             * @see aria-hidden
             * @see aria-readonly.
             */
            'aria-disabled'?: boolean | 'false' | 'true' | undefined;
            /**
             * Indicates what functions can be performed when a dragged object is released on the drop target.
             * @deprecated in ARIA 1.1
             */
            'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined;
            /**
             * Identifies the element that provides an error message for the object.
             * @see aria-invalid
             * @see aria-describedby.
             */
            'aria-errormessage'?: string | undefined;
            /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
            'aria-expanded'?: boolean | 'false' | 'true' | undefined;
            /**
             * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
             * allows assistive technology to override the general default of reading in document source order.
             */
            'aria-flowto'?: string | undefined;
            /**
             * Indicates an element's "grabbed" state in a drag-and-drop operation.
             * @deprecated in ARIA 1.1
             */
            'aria-grabbed'?: boolean | 'false' | 'true' | undefined;
            /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
            'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined;
            /**
             * Indicates whether the element is exposed to an accessibility API.
             * @see aria-disabled.
             */
            'aria-hidden'?: boolean | 'false' | 'true' | undefined;
            /**
             * Indicates the entered value does not conform to the format expected by the application.
             * @see aria-errormessage.
             */
            'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
            /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
            'aria-keyshortcuts'?: string | undefined;
            /**
             * Defines a string value that labels the current element.
             * @see aria-labelledby.
             */
            'aria-label'?: string | undefined;
            /**
             * Identifies the element (or elements) that labels the current element.
             * @see aria-describedby.
             */
            'aria-labelledby'?: string | undefined;
            /** Defines the hierarchical level of an element within a structure. */
            'aria-level'?: number | undefined;
            /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
            'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
            /** Indicates whether an element is modal when displayed. */
            'aria-modal'?: boolean | 'false' | 'true' | undefined;
            /** Indicates whether a text box accepts multiple lines of input or only a single line. */
            'aria-multiline'?: boolean | 'false' | 'true' | undefined;
            /** Indicates that the user may select more than one item from the current selectable descendants. */
            'aria-multiselectable'?: boolean | 'false' | 'true' | undefined;
            /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
            'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
            /**
             * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
             * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
             * @see aria-controls.
             */
            'aria-owns'?: string | undefined;
            /**
             * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
             * A hint could be a sample value or a brief description of the expected format.
             */
            'aria-placeholder'?: string | undefined;
            /**
             * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-setsize.
             */
            'aria-posinset'?: number | undefined;
            /**
             * Indicates the current "pressed" state of toggle buttons.
             * @see aria-checked
             * @see aria-selected.
             */
            'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined;
            /**
             * Indicates that the element is not editable, but is otherwise operable.
             * @see aria-disabled.
             */
            'aria-readonly'?: boolean | 'false' | 'true' | undefined;
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
                | 'text removals' | undefined;
            /** Indicates that user input is required on the element before a form may be submitted. */
            'aria-required'?: boolean | 'false' | 'true' | undefined;
            /** Defines a human-readable, author-localized description for the role of an element. */
            'aria-roledescription'?: string | undefined;
            /**
             * Defines the total number of rows in a table, grid, or treegrid.
             * @see aria-rowindex.
             */
            'aria-rowcount'?: number | undefined;
            /**
             * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
             * @see aria-rowcount
             * @see aria-rowspan.
             */
            'aria-rowindex'?: number | undefined;
            /**
             * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
             * @see aria-rowindex
             * @see aria-colspan.
             */
            'aria-rowspan'?: number | undefined;
            /**
             * Indicates the current "selected" state of various widgets.
             * @see aria-checked
             * @see aria-pressed.
             */
            'aria-selected'?: boolean | 'false' | 'true' | undefined;
            /**
             * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
             * @see aria-posinset.
             */
            'aria-setsize'?: number | undefined;
            /** Indicates if items in a table or grid are sorted in ascending or descending order. */
            'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
            /** Defines the maximum allowed value for a range widget. */
            'aria-valuemax'?: number | undefined;
            /** Defines the minimum allowed value for a range widget. */
            'aria-valuemin'?: number | undefined;
            /**
             * Defines the current value for a range widget.
             * @see aria-valuetext.
             */
            'aria-valuenow'?: number | undefined;
            /** Defines the human readable text alternative of aria-valuenow for a range widget. */
            'aria-valuetext'?: string | undefined;
        }
        interface HTMLAttributes extends AriaAttributes, DOMAttributes {
            // React-specific Attributes
            // Standard HTML Attributes
            accesskey?: string | undefined;
            className?: string | undefined;
            contenteditable?: (boolean | 'true' | 'false') | 'inherit' | undefined;
            contextmenu?: string | undefined;
            dir?: string | undefined;
            draggable?: boolean | 'true' | 'false' | undefined;
            hidden?: boolean | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            placeholder?: string | undefined;
            slot?: string | undefined;
            spellcheck?: boolean | 'true' | 'false' | undefined;
            style?: string | undefined;
            tabindex?: number | undefined;
            title?: string | undefined;
            translate?: 'yes' | 'no' | undefined;

            // Unknown
            radiogroup?: string | undefined; // <command>, <menuitem>

            // WAI-ARIA
            role?: string | undefined;

            // RDFa Attributes
            about?: string | undefined;
            datatype?: string | undefined;
            inlist?: any;
            prefix?: string | undefined;
            property?: string | undefined;
            resource?: string | undefined;
            typeof?: string | undefined;
            vocab?: string | undefined;

            // Non-standard Attributes
            autocapitalize?: string | undefined;
            autocorrect?: string | undefined;
            autosave?: string | undefined;
            color?: string | undefined;
            itemprop?: string | undefined;
            itemscope?: boolean | undefined;
            itemtype?: string | undefined;
            itemid?: string | undefined;
            itemref?: string | undefined;
            results?: number | undefined;
            security?: string | undefined;
            unselectable?: 'on' | 'off' | undefined;

            // Living Standard
            /**
             * Hints at the type of data that might be entered by the user while editing the element or its contents
             * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
             */
            inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
            /**
             * Specify that a standard HTML element should behave like a defined custom built-in element
             * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
             */
            is?: string | undefined;
            class?: string | undefined;
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
            href?: string | undefined;
            hreflang?: string | undefined;
            media?: string | undefined;
            ping?: string | undefined;
            rel?: string | undefined;
            target?: string | undefined;
            type?: string | undefined;
            referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
        }

        type AudioHTMLAttributes = MediaHTMLAttributes;
        interface AreaHTMLAttributes extends HTMLAttributes {
            alt?: string | undefined;
            coords?: string | undefined;
            download?: any;
            href?: string | undefined;
            hreflang?: string | undefined;
            media?: string | undefined;
            referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
            rel?: string | undefined;
            shape?: string | undefined;
            target?: string | undefined;
        }
        interface BaseHTMLAttributes extends HTMLAttributes {
            href?: string | undefined;
            target?: string | undefined;
        }
        interface BlockquoteHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
        }
        interface ButtonHTMLAttributes extends HTMLAttributes {
            autofocus?: boolean | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            formaction?: string | undefined;
            formenctype?: string | undefined;
            formmethod?: string | undefined;
            formnovalidate?: boolean | undefined;
            formtarget?: string | undefined;
            name?: string | undefined;
            type?: 'submit' | 'reset' | 'button' | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface CanvasHTMLAttributes extends HTMLAttributes {
            height?: number | string | undefined;
            width?: number | string | undefined;
        }
        interface ColHTMLAttributes extends HTMLAttributes {
            span?: number | undefined;
            width?: number | string | undefined;
        }
        interface ColgroupHTMLAttributes extends HTMLAttributes {
            span?: number | undefined;
        }
        interface DataHTMLAttributes extends HTMLAttributes {
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface DetailsHTMLAttributes extends HTMLAttributes {
            open?: boolean | undefined;
            ontoggle?: string | undefined;
        }
        interface DelHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
            datetime?: string | undefined;
        }
        interface DialogHTMLAttributes extends HTMLAttributes {
            open?: boolean | undefined;
        }
        interface EmbedHTMLAttributes extends HTMLAttributes {
            height?: number | string | undefined;
            src?: string | undefined;
            type?: string | undefined;
            width?: number | string | undefined;
        }
        interface FieldsetHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            form?: string | undefined;
            name?: string | undefined;
        }
        interface FormHTMLAttributes extends HTMLAttributes {
            acceptcharset?: string | undefined;
            action?: string | undefined;
            autocomplete?: string | undefined;
            enctype?: string | undefined;
            method?: string | undefined;
            name?: string | undefined;
            novalidate?: boolean | undefined;
            target?: string | undefined;
        }
        interface HtmlHTMLAttributes extends HTMLAttributes {
            manifest?: string | undefined;
        }
        interface IframeHTMLAttributes extends HTMLAttributes {
            allow?: string | undefined;
            allowfullscreen?: boolean | undefined;
            allowtransparency?: boolean | undefined;
            /** @deprecated */
            frameborder?: number | string | undefined;
            height?: number | string | undefined;
            loading?: 'eager' | 'lazy' | undefined;
            /** @deprecated */
            marginheight?: number | undefined;
            /** @deprecated */
            marginwidth?: number | undefined;
            name?: string | undefined;
            referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
            sandbox?: string | undefined;
            /** @deprecated */
            scrolling?: string | undefined;
            seamless?: boolean | undefined;
            src?: string | undefined;
            srcdoc?: string | undefined;
            width?: number | string | undefined;
        }
        interface ImgHTMLAttributes extends HTMLAttributes {
            alt?: string | undefined;
            crossorigin?: 'anonymous' | 'use-credentials' | '' | undefined;
            decoding?: 'async' | 'auto' | 'sync' | undefined;
            height?: number | string | undefined;
            loading?: 'eager' | 'lazy' | undefined;
            referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
            sizes?: string | undefined;
            src?: string | undefined;
            srcset?: string | undefined;
            usemap?: string | undefined;
            width?: number | string | undefined;
        }
        interface InsHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
            datetime?: string | undefined;
        }
        interface InputHTMLAttributes extends HTMLAttributes {
            accept?: string | undefined;
            alt?: string | undefined;
            autocomplete?: string | undefined;
            autofocus?: boolean | undefined;
            capture?: boolean | string | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
            checked?: boolean | undefined;
            crossorigin?: string | undefined;
            disabled?: boolean | undefined;
            enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
            form?: string | undefined;
            formaction?: string | undefined;
            formenctype?: string | undefined;
            formmethod?: string | undefined;
            formnovalidate?: boolean | undefined;
            formtarget?: string | undefined;
            height?: number | string | undefined;
            list?: string | undefined;
            max?: number | string | undefined;
            maxlength?: number | undefined;
            min?: number | string | undefined;
            minlength?: number | undefined;
            multiple?: boolean | undefined;
            name?: string | undefined;
            pattern?: string | undefined;
            placeholder?: string | undefined;
            readonly?: boolean | undefined;
            required?: boolean | undefined;
            size?: number | undefined;
            src?: string | undefined;
            step?: number | string | undefined;
            type?: string | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
            width?: number | string | undefined;

            onchange?: string | undefined;
        }
        interface KeygenHTMLAttributes extends HTMLAttributes {
            autofocus?: boolean | undefined;
            challenge?: string | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            keytype?: string | undefined;
            keyparams?: string | undefined;
            name?: string | undefined;
        }
        interface LabelHTMLAttributes extends HTMLAttributes {
            form?: string | undefined;
            htmlFor?: string | undefined;
            for?: string | undefined;
        }
        interface LiHTMLAttributes extends HTMLAttributes {
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface LinkHTMLAttributes extends HTMLAttributes {
            as?: string | undefined;
            crossorigin?: string | undefined;
            href?: string | undefined;
            hreflang?: string | undefined;
            integrity?: string | undefined;
            media?: string | undefined;
            referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
            rel?: string | undefined;
            sizes?: string | undefined;
            type?: string | undefined;
            charset?: string | undefined;
        }
        interface MapHTMLAttributes extends HTMLAttributes {
            name?: string | undefined;
        }
        interface MenuHTMLAttributes extends HTMLAttributes {
            type?: string | undefined;
        }
        interface MediaHTMLAttributes extends HTMLAttributes {
            autoplay?: boolean | undefined;
            controls?: boolean | undefined;
            controlslist?: string | undefined;
            crossorigin?: string | undefined;
            loop?: boolean | undefined;
            mediagroup?: string | undefined;
            muted?: boolean | undefined;
            playsinline?: boolean | undefined;
            preload?: string | undefined;
            src?: string | undefined;
        }
        interface MetaHTMLAttributes extends HTMLAttributes {
            charset?: string | undefined;
            content?: string | undefined;
            httpequiv?: string | undefined;
            name?: string | undefined;
        }
        interface MeterHTMLAttributes extends HTMLAttributes {
            form?: string | undefined;
            high?: number | undefined;
            low?: number | undefined;
            max?: number | string | undefined;
            min?: number | string | undefined;
            optimum?: number | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface QuoteHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
        }
        interface ObjectHTMLAttributes extends HTMLAttributes {
            classid?: string | undefined;
            data?: string | undefined;
            form?: string | undefined;
            height?: number | string | undefined;
            name?: string | undefined;
            type?: string | undefined;
            usemap?: string | undefined;
            width?: number | string | undefined;
            wmode?: string | undefined;
        }
        interface OlHTMLAttributes extends HTMLAttributes {
            reversed?: boolean | undefined;
            start?: number | undefined;
            type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined;
        }
        interface OptgroupHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            label?: string | undefined;
        }
        interface OptionHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            label?: string | undefined;
            selected?: boolean | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface OutputHTMLAttributes extends HTMLAttributes {
            form?: string | undefined;
            htmlFor?: string | undefined;
            name?: string | undefined;
            for?: string | undefined;
        }
        interface ParamHTMLAttributes extends HTMLAttributes {
            name?: string | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface ProgressHTMLAttributes extends HTMLAttributes {
            max?: number | string | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
        }
        interface SlotHTMLAttributes extends HTMLAttributes {
            name?: string | undefined;
        }
        interface ScriptHTMLAttributes extends HTMLAttributes {
            async?: boolean | undefined;
            /** @deprecated */
            charset?: string | undefined;
            crossorigin?: string | undefined;
            defer?: boolean | undefined;
            integrity?: string | undefined;
            nomodule?: boolean | undefined;
            nonce?: string | undefined;
            referrerpolicy?: HTMLAttributeReferrerPolicy | undefined;
            src?: string | undefined;
            type?: string | undefined;
        }
        interface SelectHTMLAttributes extends HTMLAttributes {
            autocomplete?: string | undefined;
            autofocus?: boolean | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            multiple?: boolean | undefined;
            name?: string | undefined;
            required?: boolean | undefined;
            size?: number | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
            onchange?: string | undefined;
        }
        interface SourceHTMLAttributes extends HTMLAttributes {
            media?: string | undefined;
            sizes?: string | undefined;
            src?: string | undefined;
            srcset?: string | undefined;
            type?: string | undefined;
        }
        interface StyleHTMLAttributes extends HTMLAttributes {
            media?: string | undefined;
            nonce?: string | undefined;
            scoped?: boolean | undefined;
            type?: string | undefined;
        }
        interface TableHTMLAttributes extends HTMLAttributes {
            cellpadding?: number | string | undefined;
            cellspacing?: number | string | undefined;
            summary?: string | undefined;
            width?: number | string | undefined;
        }
        interface TextareaHTMLAttributes extends HTMLAttributes {
            autocomplete?: string | undefined;
            autofocus?: boolean | undefined;
            cols?: number | undefined;
            dirname?: string | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            maxlength?: number | undefined;
            minlength?: number | undefined;
            name?: string | undefined;
            placeholder?: string | undefined;
            readonly?: boolean | undefined;
            required?: boolean | undefined;
            rows?: number | undefined;
            value?: string | ReadonlyArray<string> | number | undefined;
            wrap?: string | undefined;

            onchange?: string | undefined;
        }
        interface TdHTMLAttributes extends HTMLAttributes {
            align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
            colspan?: number | undefined;
            headers?: string | undefined;
            rowspan?: number | undefined;
            scope?: string | undefined;
            abbr?: string | undefined;
            height?: number | string | undefined;
            width?: number | string | undefined;
            valign?: 'top' | 'middle' | 'bottom' | 'baseline' | undefined;
        }
        interface ThHTMLAttributes extends HTMLAttributes {
            align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
            colspan?: number | undefined;
            headers?: string | undefined;
            rowspan?: number | undefined;
            scope?: string | undefined;
            abbr?: string | undefined;
        }
        interface TimeHTMLAttributes extends HTMLAttributes {
            datetime?: string | undefined;
        }
        interface TrackHTMLAttributes extends HTMLAttributes {
            default?: boolean | undefined;
            kind?: string | undefined;
            label?: string | undefined;
            src?: string | undefined;
            srclang?: string | undefined;
        }
        interface VideoHTMLAttributes extends MediaHTMLAttributes {
            height?: number | string | undefined;
            playsinline?: boolean | undefined;
            poster?: string | undefined;
            width?: number | string | undefined;
            disablepictureinpicture?: boolean | undefined;
            disableremoteplayback?: boolean | undefined;
        }
        interface SVGAttributes extends AriaAttributes, DOMAttributes {
            // Attributes which also defined in HTMLAttributes
            // See comment in SVGDOMPropertyConfig.js
            className?: string | undefined;
            color?: string | undefined;
            height?: number | string | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            max?: number | string | undefined;
            media?: string | undefined;
            method?: string | undefined;
            min?: number | string | undefined;
            name?: string | undefined;
            style?: string | undefined;
            target?: string | undefined;
            type?: string | undefined;
            width?: number | string | undefined;

            // Other HTML properties supported by SVG elements in browsers
            role?: string | undefined;
            tabindex?: number | undefined;
            crossorigin?: 'anonymous' | 'use-credentials' | '' | undefined;

            // SVG Specific attributes
            accentheight?: number | string | undefined;
            accumulate?: 'none' | 'sum' | undefined;
            additive?: 'replace' | 'sum' | undefined;
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
                | 'inherit' | undefined;
            allowreorder?: 'no' | 'yes' | undefined;
            alphabetic?: number | string | undefined;
            amplitude?: number | string | undefined;
            arabicform?: 'initial' | 'medial' | 'terminal' | 'isolated' | undefined;
            ascent?: number | string | undefined;
            attributename?: string | undefined;
            attributetype?: string | undefined;
            autoreverse?: boolean | 'true' | 'false' | undefined;
            azimuth?: number | string | undefined;
            basefrequency?: number | string | undefined;
            baselineshift?: number | string | undefined;
            baseprofile?: number | string | undefined;
            bbox?: number | string | undefined;
            begin?: number | string | undefined;
            bias?: number | string | undefined;
            by?: number | string | undefined;
            calcmode?: number | string | undefined;
            capheight?: number | string | undefined;
            clip?: number | string | undefined;
            clippath?: string | undefined;
            clippathunits?: number | string | undefined;
            cliprule?: number | string | undefined;
            colorinterpolation?: number | string | undefined;
            colorinterpolationfilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined;
            colorprofile?: number | string | undefined;
            colorrendering?: number | string | undefined;
            contentscripttype?: number | string | undefined;
            contentstyletype?: number | string | undefined;
            cursor?: number | string | undefined;
            cx?: number | string | undefined;
            cy?: number | string | undefined;
            d?: string | undefined;
            decelerate?: number | string | undefined;
            descent?: number | string | undefined;
            diffuseconstant?: number | string | undefined;
            direction?: number | string | undefined;
            display?: number | string | undefined;
            divisor?: number | string | undefined;
            dominantbaseline?: number | string | undefined;
            dur?: number | string | undefined;
            dx?: number | string | undefined;
            dy?: number | string | undefined;
            edgemode?: number | string | undefined;
            elevation?: number | string | undefined;
            enablebackground?: number | string | undefined;
            end?: number | string | undefined;
            exponent?: number | string | undefined;
            externalresourcesrequired?: boolean | 'true' | 'false' | undefined;
            fill?: string | undefined;
            fillopacity?: number | string | undefined;
            fillrule?: 'nonzero' | 'evenodd' | 'inherit' | undefined;
            filter?: string | undefined;
            filterres?: number | string | undefined;
            filterunits?: number | string | undefined;
            floodcolor?: number | string | undefined;
            floodopacity?: number | string | undefined;
            focusable?: (boolean | 'true' | 'false') | 'auto' | undefined;
            fontfamily?: string | undefined;
            fontsize?: number | string | undefined;
            fontsizeadjust?: number | string | undefined;
            fontstretch?: number | string | undefined;
            fontstyle?: number | string | undefined;
            fontvariant?: number | string | undefined;
            fontweight?: number | string | undefined;
            format?: number | string | undefined;
            from?: number | string | undefined;
            fx?: number | string | undefined;
            fy?: number | string | undefined;
            g1?: number | string | undefined;
            g2?: number | string | undefined;
            glyphname?: number | string | undefined;
            glyphorientationhorizontal?: number | string | undefined;
            glyphorientationvertical?: number | string | undefined;
            glyphref?: number | string | undefined;
            gradienttransform?: string | undefined;
            gradientunits?: string | undefined;
            hanging?: number | string | undefined;
            horizadvx?: number | string | undefined;
            horizoriginx?: number | string | undefined;
            href?: string | undefined;
            ideographic?: number | string | undefined;
            imagerendering?: number | string | undefined;
            in2?: number | string | undefined;
            in?: string | undefined;
            intercept?: number | string | undefined;
            k1?: number | string | undefined;
            k2?: number | string | undefined;
            k3?: number | string | undefined;
            k4?: number | string | undefined;
            k?: number | string | undefined;
            kernelmatrix?: number | string | undefined;
            kernelunitlength?: number | string | undefined;
            kerning?: number | string | undefined;
            keypoints?: number | string | undefined;
            keysplines?: number | string | undefined;
            keytimes?: number | string | undefined;
            lengthadjust?: number | string | undefined;
            letterspacing?: number | string | undefined;
            lightingcolor?: number | string | undefined;
            limitingconeangle?: number | string | undefined;
            local?: number | string | undefined;
            markerend?: string | undefined;
            markerheight?: number | string | undefined;
            markermid?: string | undefined;
            markerstart?: string | undefined;
            markerunits?: number | string | undefined;
            markerwidth?: number | string | undefined;
            mask?: string | undefined;
            maskcontentunits?: number | string | undefined;
            maskunits?: number | string | undefined;
            mathematical?: number | string | undefined;
            mode?: number | string | undefined;
            numoctaves?: number | string | undefined;
            offset?: number | string | undefined;
            opacity?: number | string | undefined;
            operator?: number | string | undefined;
            order?: number | string | undefined;
            orient?: number | string | undefined;
            orientation?: number | string | undefined;
            origin?: number | string | undefined;
            overflow?: number | string | undefined;
            overlineposition?: number | string | undefined;
            overlinethickness?: number | string | undefined;
            paintorder?: number | string | undefined;
            panose1?: number | string | undefined;
            path?: string | undefined;
            pathlength?: number | string | undefined;
            patterncontentunits?: string | undefined;
            patterntransform?: number | string | undefined;
            patternunits?: string | undefined;
            pointerevents?: number | string | undefined;
            points?: string | undefined;
            pointsatx?: number | string | undefined;
            pointsaty?: number | string | undefined;
            pointsatz?: number | string | undefined;
            preservealpha?: boolean | 'true' | 'false' | undefined;
            preserveaspectratio?: string | undefined;
            primitiveunits?: number | string | undefined;
            r?: number | string | undefined;
            radius?: number | string | undefined;
            refx?: number | string | undefined;
            refy?: number | string | undefined;
            renderingintent?: number | string | undefined;
            repeatcount?: number | string | undefined;
            repeatdur?: number | string | undefined;
            requiredextensions?: number | string | undefined;
            requiredfeatures?: number | string | undefined;
            restart?: number | string | undefined;
            result?: string | undefined;
            rotate?: number | string | undefined;
            rx?: number | string | undefined;
            ry?: number | string | undefined;
            scale?: number | string | undefined;
            seed?: number | string | undefined;
            shaperendering?: number | string | undefined;
            slope?: number | string | undefined;
            spacing?: number | string | undefined;
            specularconstant?: number | string | undefined;
            specularexponent?: number | string | undefined;
            speed?: number | string | undefined;
            spreadmethod?: string | undefined;
            startoffset?: number | string | undefined;
            stddeviation?: number | string | undefined;
            stemh?: number | string | undefined;
            stemv?: number | string | undefined;
            stitchtiles?: number | string | undefined;
            stopcolor?: string | undefined;
            stopopacity?: number | string | undefined;
            strikethroughposition?: number | string | undefined;
            strikethroughthickness?: number | string | undefined;
            string?: number | string | undefined;
            stroke?: string | undefined;
            strokedasharray?: string | number | undefined;
            strokedashoffset?: string | number | undefined;
            strokelinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined;
            strokelinejoin?: 'miter' | 'round' | 'bevel' | 'inherit' | undefined;
            strokemiterlimit?: number | string | undefined;
            strokeopacity?: number | string | undefined;
            strokewidth?: number | string | undefined;
            surfacescale?: number | string | undefined;
            systemlanguage?: number | string | undefined;
            tablevalues?: number | string | undefined;
            targetx?: number | string | undefined;
            targety?: number | string | undefined;
            textanchor?: string | undefined;
            textdecoration?: number | string | undefined;
            textlength?: number | string | undefined;
            textrendering?: number | string | undefined;
            to?: number | string | undefined;
            transform?: string | undefined;
            u1?: number | string | undefined;
            u2?: number | string | undefined;
            underlineposition?: number | string | undefined;
            underlinethickness?: number | string | undefined;
            unicode?: number | string | undefined;
            unicodebidi?: number | string | undefined;
            unicoderange?: number | string | undefined;
            unitsperem?: number | string | undefined;
            valphabetic?: number | string | undefined;
            values?: string | undefined;
            vectoreffect?: number | string | undefined;
            version?: string | undefined;
            vertadvy?: number | string | undefined;
            vertoriginx?: number | string | undefined;
            vertoriginy?: number | string | undefined;
            vhanging?: number | string | undefined;
            videographic?: number | string | undefined;
            viewbox?: string | undefined;
            viewtarget?: number | string | undefined;
            visibility?: number | string | undefined;
            vmathematical?: number | string | undefined;
            widths?: number | string | undefined;
            wordspacing?: number | string | undefined;
            writingmode?: number | string | undefined;
            x1?: number | string | undefined;
            x2?: number | string | undefined;
            x?: number | string | undefined;
            xchannelselector?: string | undefined;
            xheight?: number | string | undefined;
            xlinkactuate?: string | undefined;
            xlinkarcrole?: string | undefined;
            xlinkhref?: string | undefined;
            xlinkrole?: string | undefined;
            xlinkshow?: string | undefined;
            xlinktitle?: string | undefined;
            xlinktype?: string | undefined;
            xmlbase?: string | undefined;
            xmllang?: string | undefined;
            xmlns?: string | undefined;
            xmlnsxlink?: string | undefined;
            xmlspace?: string | undefined;
            y1?: number | string | undefined;
            y2?: number | string | undefined;
            y?: number | string | undefined;
            ychannelselector?: string | undefined;
            z?: number | string | undefined;
            zoomandpan?: string | undefined;
            class?: string | undefined;
        }
        interface WebViewHTMLAttributes extends HTMLAttributes {
            allowfullscreen?: boolean | undefined;
            allowpopups?: boolean | undefined;
            autofocus?: boolean | undefined;
            autosize?: boolean | undefined;
            blinkfeatures?: string | undefined;
            disableblinkfeatures?: string | undefined;
            disableguestresize?: boolean | undefined;
            disablewebsecurity?: boolean | undefined;
            guestinstance?: string | undefined;
            httpreferrer?: string | undefined;
            nodeintegration?: boolean | undefined;
            partition?: string | undefined;
            plugins?: boolean | undefined;
            preload?: string | undefined;
            src?: string | undefined;
            useragent?: string | undefined;
            webpreferences?: string | undefined;
        }
    }
}
