declare namespace NU {
    /* eslint-disable-next-line @definitelytyped/no-const-enum */
    const enum ButtonSize {
        NONE = "none",
        SMALLER = "smaller",
        SMALL = "small",
        MEDIUM = "medium",
        LARGE = "large",
        BIG = "big",
    }

    /* eslint-disable-next-line @definitelytyped/no-const-enum */
    const enum ButtonColor {
        NONE = "none",
        PRIMARY = "primary",
        PRIMARY_CONTAINER = "primary_container",
        SECONDARY = "secondary",
        SECONDARY_CONTAINER = "secondary_container",
        TERTIARY = "tertiary",
        TERTIARY_CONTAINER = "tertiary_container",
    }

    /* eslint-disable-next-line @definitelytyped/no-const-enum */
    const enum ButtonType {
        NONE = "none",
        FILLED = "filled",
        OUTLINED = "outlined",
        ELEVATED = "elevated",
    }

    namespace Options {
        interface Alert {
            /**
             * Specifies the area where the message dialog for Alert will be displayed.
             *
             * When the modal option is set to true, Alert's overlay element covers as much as the element specified by context.
             * > If you specify a window object, it will cover the entire screen, and if you enter a jquery selector or jQuery object, it will cover only the specified element.
             *
             * When you specify an input element(select, input, textarea, etc.), a message is displayed in a tooltip next to the input element.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            context?: Window | NJS<HTMLElement[]>;
            /**
             * Message content.
             *
             * > You can specify a message string, jQuery object, HTML string, or HTML element.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            msg: string | NJS<HTMLElement[]>;
            /**
             * Replaces the variable in the message with the entered value.
             * > Variables such as `{index}` declared in the message are replaced with the value corresponding to the index of the array set with the vars option.
             * ```
             * N(window).alert({
             *     msg: "{0} {1}-JS.",
             *     vars: ["Hello", "Natural"]
             * }).show();
             *
             * // Result message: "Hello Natural-JS"
             * ```
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            vars?: string[];
            /**
             * If set to true, the HTML in the message will be applied.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            html?: boolean;
            /**
             * Top position(px) of the message dialog.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            top?: number;
            /**
             * Left position(px) of the message dialog.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            left?: number;
            /**
             * Width of the message dialog.
             *  - number: When set to the number type, the entered number(px) is set as the width of the element.
             *  - NU.EventHandlers.Alert.Width: When set to a function type, msgContext (element that covers the screen when the modal option is true) and msgContents (message content element) are passed as arguments, and the width of the element is set with the returned value.
             *    ```
             *    ...
             *    // Fill the width of the dialog to the screen
             *    width: function(msgContext, msgContents) {
             *        return $(window).width();
             *    },
             *    ...
             *    ```
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            width?: number | NU.EventHandlers.Alert.Width;
            /**
             * Height of the content of the message dialog excluding the title area.
             *  - number: When set to the number type, the entered number (px) is set as the height of the element.
             *  - NU.EventHandlers.Alert.Height: function 타입으로 설정할 경우 msgContext(modal 옵션이 true 일 때 화면에 덮는 요소), msgContents(메시지 콘텐츠 요소)가 인수로 전달되고 return 된 값으로 요소의 높이가 설정됩니다.
             *    ```
             *    ...
             *    // fill the height of the dialog to fill the screen
             *    height: function(msgContext, msgContents) {
             *        // Since msgContents are hidden when the message dialog is opened, we need to call the show() function and then get the height of the title area.
             *        return $(window).height() - msgContents.show().find(".msg_title_box__").height();
             *    },
             * ...
             * ```
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            height?: number | NU.EventHandlers.Alert.Height;
            /**
             * Sets the title of the message dialog box. If not set, the title bar will not be created.
             * > It can also be set in the title attribute of the context HTML element.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            title?: string;
            /**
             * If set to false, elements related to the default button(OK/Cancel button) will not be created.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            button?: boolean;
            /**
             * Defines the options of the Button component applied to the confirmation button of the message dialog.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            okButtonOpts?: NU.Options.Button | null;
            /**
             * Defines the options of the Button component applied to the cancel button of the message dialog.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            cancelButtonOpts?: NU.Options.Button | null;
            /**
             * Set whether to hide or remove dialog box elements when the message dialog box is closed.
             *  - hide: Hides the message dialog element to maintain its previous state.
             *  - remove: Reset the state by removing the message dialog element.
             *
             * @default "remove"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            closeMode?: "hide" | "remove";
            /**
             * If set to true, it creates an overlay element that covers the element specified by context, blocking all events except the content of the message dialog box.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            modal?: boolean;
            /**
             * If set to false, clicking on the msgContext (the element that covers the screen when the modal option is true) will not close the message dialog.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            overlayClose?: boolean;
            /**
             * Specifies the background color of msgContext(the element that covers the screen when the modal option is true).
             * It can be defined as the color property value of CSS.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            overlayColor?: "string" | null;
            /**
             * If set to false, pressing the ESC key will not close the message dialog.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            escClose?: boolean;
            /**
             * If set to true it will show OK/Cancel buttons, if set to false it will only show OK buttons.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            confirm?: boolean;
            /**
             * If set to true, the message dialog will always appear on top.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            alwaysOnTop?: boolean;
            /**
             * When applying the alwaysOnTop option, specify target elements for calculating the top z-index.
             * > Specified with jQuery selector syntax.
             *
             * > When Alert or Popup related elements are hidden by other elements, add a selector for the element that is being hidden.
             *
             * @default "div, span, ul, p, nav, article, section, header, footer, aside"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            alwaysOnTopCalcTarget?: string;
            /**
             * If set to false, the block overlay will not be resized and the message dialog will be repositioned automatically when the browser resizes or the height of the parent content changes dynamically.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            dynPos?: boolean;
            /**
             * If set to true, disables window scrolling in the browser when scrolling with the mouse wheel over message dialog elements.
             *
             * Prevents the browser's default behavior of scrolling the browser window up or down the first or last time the message dialog element is scrolled.
             * > This only works when the modal option is set to true.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            windowScrollLock?: boolean;
            /**
             * If set to true, the message dialog can be dragged by the title bar.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            draggable?: boolean;
            /**
             * If set to false, the message dialog will not automatically be moved inward when dropped off-screen.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            draggableOverflowCorrection?: boolean;
            /**
             * Specifies where the message dialog box will move inward when dropped off the screen.
             * > If the message dialog box does not return completely inside and a scroll bar appears on the screen, correct the position of the message dialog box by increasing or decreasing it by 1.
             *
             * @default { top: 0, bottom: 0, left: 0, right: 0 }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            draggableOverflowCorrectionAddValues?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
            };
            /**
             * When set to true, saves memory usage by removing unnecessary reference elements.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            saveMemory?: boolean;
            /**
             * Defines an event handler that runs when the OK button is clicked.
             * ```
             * onOk: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > Returning 0 only executes the event handler and does not close the dialog box.
             *
             * > This works on the OK button that is created when the button option is set to true.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onOk?: NU.EventHandlers.Alert.OnOk | null;
            /**
             * Define an event handler that runs when the message dialog is closed by clicking the Cancel button, clicking the X button, clicking the message overlay element, or pressing the ESC key.
             * ```
             * onCancel: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > Returning 0 only executes the event handler and does not close the message dialog.
             *
             * > This works on the cancel button created when the button option is set to true.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onCancel?: NU.EventHandlers.Alert.OnCancel | null;
            /**
             * Defines an event handler that runs before the message dialog is displayed.
             * ```
             * onBeforeShow: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onBeforeShow?: NU.EventHandlers.Alert.OnBeforeShow | null;
            /**
             * Defines an event handler that runs after the message dialog is displayed.
             * ```
             * onShow: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onShow?: NU.EventHandlers.Alert.OnShow | null;
            /**
             * Defines an event handler that runs before the message dialog is hidden.
             * ```
             * onBeforeHide: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onBeforeHide event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onBeforeHide?: NU.EventHandlers.Alert.OnBeforeHide | null;
            /**
             * Defines an event handler that runs after the message dialog is hidden.
             * ```
             * onHide: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onHide event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onHide?: NU.EventHandlers.Alert.OnHide | null;
            /**
             * Defines an event handler that runs before the message dialog is removed.
             * ```
             * onBeforeRemove: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onBeforeRemove event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onBeforeRemove?: NU.EventHandlers.Alert.OnBeforeRemove | null;
            /**
             * Defines an event handler that runs after the message dialog is removed.
             * ```
             * onRemove: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onRemove event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html
             */
            onRemove?: NU.EventHandlers.Alert.OnRemove | null;
            isInput?: boolean;
            isWindow?: boolean;
        }

        interface Button {
            /**
             * Specifies the context element to which the Button will be applied.
             *
             * Button's context element must be written with `a`, `button`, or `input[type=button]` tag.
             * > Buttons can select multiple elements at once and specify them as context.
             * ```
             * <a class="button-context" data-opts='{ "size": "big" }'>Button</a>
             * <input class="button-context" type="button" value="Button" data-opts='{ "color": "primary" }'>
             * <button class="button-context" data-opts='{ "color": "primary", "size": "large" }'>Button</button>
             * ```
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Set the size of the button.
             *
             * The size can be one of "none", "smaller", "small", "medium", "large", or "big".
             *
             * @default "none"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            size?: ButtonSize;
            /**
             * X
             * Sets the color of the button.
             *
             * The color can be one of the following: "none", "primary", "primary_container", "secondary", "secondary_container", "tertiary", "tertiary_container".
             *
             * Naming and default values for button colors are based on [Color roles in Material Design 3](https://m3.material.io/styles/color/roles).
             *
             * To change the style of the button, simply edit the class starting with "btn_" in the natural.ui.css file.
             * ```
             * a.btn_{color}__,input[type='button'].btn_{color}__,button.btn_{color}__ {
             *     color: var(--md-sys-color-on-tertiary);
             *     background-color: var(--md-sys-color-tertiary);
             *     border: 1px solid var(--md-sys-color-tertiary);
             * }
             * ```
             *
             * @default "none"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            color?: ButtonColor;
            /**
             * Configures whether the button should have a filled background or just an outline.
             *
             * The type can be one of "none", "filled", "outlined", or "elevated".
             *
             * The colors for "filled" and "outlined" types are determined by the `color` option. If the `color` option is set to "none", the button's background or outline will not be displayed.
             *
             * @default "none"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            type?: ButtonType;
            /**
             * If set to true, the button will be created in a disabled state.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            disable?: boolean;
            /**
             * Defines the event handler that is executed before the button options are applied.
             *
             * > This can be used when utilizing an external button library, to add necessary HTML elements inside or outside the button element, or to edit the HTML elements for other purposes.
             * ```
             * onBeforeCreate: function(context, opts) {
             *     // this: Button instance
             *     // context: context element
             *     // opts: The options specified when the button is created
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            onBeforeCreate?: NU.EventHandlers.Button.OnBeforeCreate | null;
            /**
             * Defines the event handler that is executed after the button options are applied.
             *
             * > This can be used when utilizing an external button library, to define effect events for the button element or to process the button for other purposes.
             * ```
             * onCreate: function(context, opts) {
             *     // this: Button instance
             *     // context: context element
             *     // opts: The options specified when the button is created
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html
             */
            onCreate?: NU.EventHandlers.Button.OnCreate | null;
        }

        interface Datepicker {
            /**
             * Specifies the input element to which the Datepicker will be applied.
             * ```
             * <input class="datepicker-context" type="text">
             * ```
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Datepicker container element.
             *
             * @default N('<div class="datepicker__"></div>')
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            contents?: NJS<HTMLElement[]>;
            /**
             * If set to true, a Monthpicker will be displayed where only the year and month can be selected.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            monthonly?: boolean;
            /**
             * If set to false, the Datepicker will not be displayed when the cursor is focused on the input element.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            focusin?: boolean;
            /**
             * If set to top, the year selection element will be created at the top.
             *
             * @default "left"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            yearsPanelPosition?: "left" | "top";
            /**
             * If set to top, the month selection element will be created at the top.
             *
             * @default "left"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            monthsPanelPosition?: "left" | "top";
            /**
             * When the yearsPanelPosition option value is "top", sets the number of previous years that can be selected.
             *
             * @default 200
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            minYear?: number;
            /**
             * When the yearsPanelPosition option value is "top", sets the number of future years that can be selected.
             *
             * @default 200
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            maxYear?: number;
            /**
             * If set to true, when the year changes, the changed date will be reflected immediately in the input element.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            yearChangeInput?: boolean;
            /**
             * If set to true, when the month changes, the changed date will be immediately reflected in the input element.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            monthChangeInput?: boolean;
            /**
             * If set to true, the month will change when you touch and drag left or right.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            touchMonthChange?: boolean;
            /**
             * If set to true, the month will change when you scroll the mouse wheel.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            scrollMonthChange?: boolean;
            /**
             * If you select or enter a date earlier than the set date, input will be blocked.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            minDate?: string;
            /**
             * If you select or enter a date after the set date, input will be blocked.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            maxDate?: string;
            /**
             * If you configure the holiday option, the Datepicker will display holidays.
             *
             * Holidays can be configured using `repeat` and `once` objects as shown below:
             * ```
             * {
             *     "repeat": {
             *         "0619": "Holiday1",
             *         "0620": "Holiday3",
             *         "0621": ["Holiday6", "Holiday7"],
             *         "0622": ["Holiday9", "Holiday10"]
             *     },
             *     "once": {
             *         "20200619": "Holiday2",
             *         "20200620": ["Holiday4", "Holiday5"],
             *         "20200621": "Holiday8",
             *         "20200622": ["Holiday11", "Holiday12"]
             *     }
             * }
             * ```
             * The `repeat` object specifies holidays that recur every year by providing the month and date (without the year).
             * The `once` object specifies holidays that do not recur every year and requires the full date in `YYYYMMDD` format.
             *
             * If there are multiple holidays on the same date, you can specify multiple holiday names as an array.
             *
             * You can configure this in the `N.context.attr("ui").datepicker.holiday` property of the [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html) so that it is applied to all Datepickers:
             * ```
             * N.comm("getHolidayList.json").submit(function(data) {
             *     var once = {};
             *     N(data).each(function() {
             *         once[this.holidayDate] = this.holidayName;
             *     });
             *     if (N.context.attr("ui").datepicker.holiday === undefined) {
             *         N.context.attr("ui").datepicker.holiday = {};
             *     }
             *     N.context.attr("ui").datepicker.holiday.once = once;
             * });
             * ```
             * > Elements marked as holidays will have an additional class attribute value of `datepicker_holiday__`.
             *
             * @default { "repeat": null, "once": null }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            holiday?: {
                "repeat"?: {
                    [key: string]: string | string[];
                } | null;
                "once"?: {
                    [key: string]: string | string[];
                } | null;
            };
            /**
             * Defines an event handler that is executed when the year is changed.
             * ```
             * onChangeYear: function(context, year, e) {
             *     // this: Datepicker instance
             *     // context: context element
             *     // year: selected year
             *     // e: event object
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onChangeYear?: NU.EventHandlers.Datepicker.OnChangeYear | null;
            /**
             * Defines an event handler that is executed when the month is changed.
             * ```
             * onChangeMonth: function(context, month, year, e) {
             *     // this: Datepicker instance
             *     // context: context element
             *     // month: selected month
             *     // year: selected year
             *     // e: event object
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onChangeMonth?: NU.EventHandlers.Datepicker.OnChangeMonth | null;
            /**
             * Defines the event handler that is executed when a date or a month (if the `monthonly` option is set to true) is selected.
             * ```
             * onSelect: function(context, selDate, monthonly) {
             *     // this: Datepicker instance
             *     // context: context element
             *     // selDate: Selected date as a Date object
             *     //      selDate = {
             *     //          obj: Date object,
             *     //          format: Date format (Refer to Formatter > Format Rule List Tab > "Specify a date format rule as a string" for "date" rule)
             *     //      }
             *     //      selDate.obj.formatDate("Y-m-d") => "2024-09-26";
             *     // monthonly: value of the monthonly option
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onSelect?: NU.EventHandlers.Datepicker.OnSelect | null;
            /**
             * Defines the event handler that is executed before the date picker is displayed.
             * ```
             * onBeforeShow: function(context, contents) {
             *     // this: Datepicker instance
             *     // context: context element
             *     // contents: Datepicker panel element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onBeforeShow?: NU.EventHandlers.Datepicker.OnBeforeShow | null;
            /**
             * Defines an event handler that runs after the datepicker is displayed.
             * ```
             * onShow: function(context, contents) {
             *     // this: Datepicker instance
             *     // context: context element
             *     // contents: Datepicker panel element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onShow?: NU.EventHandlers.Datepicker.OnShow | null;
            /**
             * Defines an event handler that runs before the datepicker is closed.
             * ```
             * onBeforeHide: function(context, contents) {
             *     // this: Datepicker instance
             *     // context: context element
             *     // contents: Datepicker panel element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onBeforeHide?: NU.EventHandlers.Datepicker.OnBeforeHide | null;
            /**
             * Defines an event handler that runs after the datepicker is closed (after the closing effect ends).
             * ```
             * onHide: function(context) {
             *     // this: Datepicker instance
             *     // context: context element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html
             */
            onHide?: NU.EventHandlers.Datepicker.OnHide | null;
        }

        interface Popup {
            /**
             * Specifies the Block element inside the page to create as a popup.
             *
             * > Since the element inside the page is turned into a popup, the `url` option must not be set.
             * ```
             * N("context").popup();
             * ```
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Specifies the URL of the page to be displayed in a popup.
             *
             * > Once the popup page has finished loading, the `init` method of the popup page will be called.
             *
             * > Since a different page is being loaded to create the popup, the `context` option should not be specified.
             * ```
             * N().popup("url");
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            url?: string;
            /**
             * Sets the title of the popup. If not set, the title bar is not created.
             *
             * > If the `url` option is specified, the title can also be set using the `title` attribute of the `view` element from the loaded page.
             * When creating a popup by specifying a context, the title can be set using the `title` attribute of the context element.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            title?: string;
            /**
             * If set to false, it does not create basic button-related elements (OK/Cancel buttons).
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            button?: boolean;
            /**
             * If set to true, it creates an overlay element that covers the entire screen,
             * blocking all interactions except for the popup content.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            modal?: boolean;
            /**
             * The position(px) to the top of the popup.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            top?: number;
            /**
             * The position(px) to the left of the popup.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            left?: number;
            /**
             * Width of the popup.
             *  - number: When set to the number type, the entered number(px) is set as the width of the element.
             *  - NU.EventHandlers.Popup.Width: When set to a function type, msgContext (element that covers the screen when the modal option is true) and msgContents (message content element) are passed as arguments, and the width of the element is set with the returned value.
             *    ```
             *    ...
             *    // Fill the width of the popup to the screen
             *    width: function(msgContext, msgContents) {
             *        return $(window).width();
             *    },
             *    ...
             *    ```
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            width?: NU.EventHandlers.Popup.Width | number;
            /**
             * Height of the content of the popup excluding the title area.
             *  - number: When set to the number type, the entered number (px) is set as the height of the element.
             *  - NU.EventHandlers.Popup.Height: function 타입으로 설정할 경우 msgContext(modal 옵션이 true 일 때 화면에 덮는 요소), msgContents(메시지 콘텐츠 요소)가 인수로 전달되고 return 된 값으로 요소의 높이가 설정됩니다.
             *    ```
             *    ...
             *    // fill the height of the popup to fill the screen
             *    height: function(msgContext, msgContents) {
             *        // Since msgContents are hidden when the popup is opened, we need to call the show() function and then get the height of the title area.
             *        return $(window).height() - msgContents.show().find(".msg_title_box__").height();
             *    },
             * ...
             * ```
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            height?: number | NU.EventHandlers.Popup.Height;
            /**
             * An option for referencing the parent page's Controller object from the popup's Controller object.
             *
             * When you assign the Controller object of the page creating the popup to the opener option, it will be passed to the popup’s Controller object as its opener property.
             *
             * > This only works when you set the url option to create another page as popup content.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            opener?: NA.Objects.Controller.Object | null;
            /**
             * Sets whether to hide or remove the popup element when the popup is closed.
             *  - hide: Hides the popup element and maintains the previous state.
             *  - remove: Removes the popup element to reset its state.
             *
             * @default "hide"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            closeMode?: "hide" | "remove";
            /**
             * If set to true, the popup will always appear on top.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            alwaysOnTop?: boolean;
            /**
             * If set to false, the popup will not close when clicking the msgContext
             * (the element covering the screen when the modal option is true).
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            overlayClose?: boolean;
            /**
             * If set to false, the popup will not close when pressing the ESC key.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            escClose?: boolean;
            /**
             * Defines an event handler that runs when the OK button is clicked.
             * ```
             * onOk: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > Returning 0 only executes the event handler and does not close the dialog box.
             *
             * > This works on the OK button that is created when the button option is set to true.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onOk?: NU.EventHandlers.Popup.OnOk | null;
            /**
             * Define an event handler that runs when the message dialog is closed by clicking the Cancel button, clicking the X button, clicking the message overlay element, or pressing the ESC key.
             *
             * ```
             * onCancel: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > Returning 0 only executes the event handler and does not close the dialog box.
             *
             * > This works on the cancel button created when the button option is set to true.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onCancel?: NU.EventHandlers.Popup.OnCancel | null;
            /**
             * Define an event handler that fires before the pop-up is displayed.
             * ```
             * onBeforeShow: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onBeforeShow?: NU.EventHandlers.Popup.OnBeforeShow | null;
            /**
             * Define an event handler that fires after the pop-up is displayed.
             * ```
             * onShow: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onShow?: NU.EventHandlers.Popup.OnShow | null;
            /**
             * Define an event handler that fires before the popup is hidden.
             * ```
             * onBeforeHide: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onBeforeHide event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onBeforeHide?: NU.EventHandlers.Popup.OnBeforeHide | null;
            /**
             * Define an event handler that fires after the popup is hidden.
             * ```
             * onHide: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onHide event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onHide?: NU.EventHandlers.Popup.OnHide | null;
            /**
             * Define an event handler that fires before the popup is removed.
             * ```
             * onBeforeRemove: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onBeforeRemove event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onBeforeRemove?: NU.EventHandlers.Popup.OnBeforeRemove | null;
            /**
             * Define an event handler that fires after the popup is removed.
             * ```
             * onRemove: function(msgContext, msgContents) {
             *     // this: Alert instance
             *     // msgContext: Message overlay element
             *     // msgContents: Message dialog element
             * }
             * ```
             * > If the closeMode option is set to hide, the onRemove event will not fire.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onRemove?: NU.EventHandlers.Popup.OnRemove | null;
            /**
             * Defines an event handler that is executed every time the popup is opened.
             *
             * > The function name is defined as a string, and the actual event handler method must be implemented in the Controller object of the popup content using the specified function name.
             *
             * > The first argument of the `open` method is passed as the first argument (`onOpenData`) to the onOpen event handler function.
             *
             * > If the popup content is loaded for the first time, the `init` function of the Controller object is executed before the `onOpen` function.
             *
             * > This only works when you set the `url` option to load another page as popup content.
             *
             *  - Popup instance example:
             * ```
             * N(".popup").cont({
             *     ...
             *     init: function(view, request) {
             *         var popup = N().popup({
             *             url: "./popup.html",
             *             onOpen: "onOpenFn"
             *         });
             *
             *         popup.open([1, 2, 3]);
             *     }
             *     ...
             * });
             * ```
             *  - Popup's Controller object example:
             * ```
             * N(".popup").cont({
             *     ...
             *     onOpenFn: function(onOpenData) {
             *         console.log(onOpenData);
             *
             *         // [1, 2, 3]
             *     }
             *     ...
             * });
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onOpen?: string | NU.EventHandlers.Popup.OnOpen | null;
            /**
             * Sets the data of the parent page to pass as the first argument of the onOpen event handler function.
             *
             * The first argument value of the open method will be set to this value.
             *
             * > This only works when you set the `url` option to create another page as popup content.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onOpenData?: any;
            /**
             * Defines an event handler that is executed whenever the popup is closed.
             * ```
             * onClose: function(onCloseData) {
             *     // this: Popup instance
             *     // onCloseData: The first argument passed to the caller's close function of the Controller object invoked from the popup.
             * }
             * ```
             * > When the popup content loading is complete, a `caller` property is created on the Controller object of the popup. The `caller` refers to the Popup instance of the parent page that created this popup.
             * To close its own popup, this popup can execute the command `this.caller.close(onCloseData);` from the Controller object. When this command is executed and the popup closes, the `onClose` event handler function receives the `onCloseData` as its first argument.
             *
             * > This only works when you set the `url` option to create another page as the popup content.
             *
             *  - Popup instance example
             * ```
             * N(".popup").cont({
             *    ...
             *    init: function(view, request) {
             *        var popup = N().popup({
             *            url: "./popup.html",
             *            onClose: function(onCloseData) {
             *                console.log(onCloseData);
             *
             *                // [1, 2, 3]
             *            }
             *        });
             *    }
             *    ...
             * });
             * ```
             *  - Controller object of the popup
             * ```
             * N(".popup").cont({
             *     ...
             *     events: function() {
             *         var caller = this.caller;
             *         N(".close", this.view).on("click", function(onCloseData) {
             *
             *             caller.close([1, 2, 3]);
             *
             *         });
             *     }
             *     ...
             * });
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onClose?: NU.EventHandlers.Popup.OnClose | null;
            /**
             * Sets the data of the popup page to be passed as the first argument of the onClose event handler.
             *
             * The value of the first argument of the `this.caller.close` method in the popup's Controller object is set to this value.
             *
             * > This only works when you set the `url` option to create another page as popup content.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onCloseData?: any;
            /**
             * Defines the event handler that runs when the popup content has finished loading.
             *
             * ```
             * onLoad: function(cont) {
             *     // this: Popup instance
             *     // cont: The Controller object for the popup
             * }
             * ```
             * > This only works when you set the `url` option to create another page as popup content.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            onLoad?: NU.EventHandlers.Popup.OnLoad | null;
            /**
             * If set to true, the popup's content is preloaded when the popup is initialized;
             * if set to false, the popup's content is loaded when the popup is opened for the first time.
             *
             * > This option works only when the `url` option is set to create popup content from another page.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            preload?: boolean;
            /**
             * If set to false, it does not automatically adjust the size of the block overlay and the position of the popup when resizing the browser window or when the parent's content height changes dynamically.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            dynPos?: boolean;
            /**
             * If set to true, it disables the browser's window scroll when scrolling with the mouse wheel over a popup element.
             *
             * This blocks the browser's default behavior of scrolling up or down when the popup element reaches its top or bottom scroll limit.
             *
             * > Only works when the modal option is set to true.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            windowScrollLock?: boolean;
            /**
             * Enables dragging the popup dialog box using the title bar when set to `true`.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            draggable?: boolean;
            /**
             * When set to `false`, the popup will not automatically move back inside the screen if dropped outside of it.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            draggableOverflowCorrection?: boolean;
            /**
             * Specifies where the popup will move inward when dropped off the screen.
             * > If the popup does not return completely inside and a scroll bar appears on the screen, correct the position of the popup by increasing or decreasing it by 1.
             *
             * @default { top: 0, bottom: 0, left: 0, right: 0 }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            draggableOverflowCorrectionAddValues?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
            };
            /**
             * When set to true, saves memory usage by removing unnecessary reference elements.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html
             */
            saveMemory?: boolean;
        }

        interface EachTab {
            /**
             * Specifies the URL of the page to be created as tab content.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            url?: string;
            /**
             * If set to true, the tab and its content will be selected by default after the tabs are initialized.
             *
             * > The `active` option should be set to true for only one tab to be displayed by default.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            active?: boolean;
            /**
             * If set to true, the page for the tab content will be preloaded during the tab initialization instead of loading it the first time the tab is selected.
             *
             * This is used when you need to reference elements or the Controller object of the tab content during initialization.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            preload?: boolean;
            /**
             * Specifies the name of the `onOpen` event handler function as a string that will be executed in the loaded content whenever a tab is opened.
             *  - The `onOpen` event handler function must be defined in the Controller object of the page being loaded with the specified name.
             *  - The first argument of the `onOpen` event handler function is the `onOpenData` specified as the second argument when calling the `open` function.
             *  - When tab content is loaded for the first time, the `init` function of the Controller object is executed, followed by the `onOpen` function.
             *  - If an `onActive` event is defined, the `onActive` function is executed first, followed by the `onOpen` function.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            onOpen?: string | NU.EventHandlers.Tab.OnOpen;
            /**
             * When set to `true`, the specified tab is created in a disabled state.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            disable?: boolean;
            /**
             * When set to `true`, the status of tab content is not preserved, and the associated tab content is reloaded and initialized each time the tab is selected.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            stateless?: boolean;
        }
        interface Tab {
            /**
             * Specifies the context element where the Tab will be applied.
             *
             * The context element for the Tab must be written using the `div` tag,
             * containing `ul`, `li`, and additional `div` tags.
             *
             *  - Tab
             *    - The tab elements are created using the `li` tags inside a `ul` tag.
             *    - The `href` attribute of the tab link (`<a>` tag) should match the `id` attribute
             *      of the corresponding tab content (`<div>` tag).
             *  - Tab contents
             *    - Tab content elements must be created using `div` tags.
             *    - The number and order of `tab contents` (`div`) should match the tabs (`li`).
             *    - The `id` attribute of the tab contents (`div` tags) should match the `href` attribute of
             *      the tab links (`<a>` tags).
             *    - You can set a URL option in the tab options to load other pages, or you can directly
             *      write the content inside the tab content element (`div`).
             * ```
             * <div class="tab-context">
             *     <ul>
             *         <li><a href="#tab1">Tab1</a></li>
             *         <li data-opts='{ "url": "tab1.html" }'>
             *             <a href="#tab2">Tab2</a>
             *         </li>
             *         <li data-opts='{ "url": "tab2.html"}'>
             *             <a href="#tab3">Tab3</a>
             *         </li>
             *     </ul>
             *     <div id="tab1">Tab1</div>
             *     <div id="tab2"></div>
             *     <div id="tab3"></div>
             * </div>
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * A variable that only contains instances of tab link elements.
             *
             * @default null
             */
            links?: NJS<HTMLElement[]> | null;
            /**
             * A variable that only contains instances of tab content elements.
             *
             * @default null
             */
            contents?: NJS<HTMLElement[]> | null;
            /**
             * Instead of using the `data-opts` attribute of a tab element, you can specify the options for individual tabs as an array of objects.
             *
             * The options should be configured as objects according to the order and number of tabs.
             * ```
             * N("#tab").tab({
             *     tabOpts: [
             *         { width: "auto", url: "tab1.html", preload: false, active: false }, //Tab1
             *         { width: "auto", url: "tab2.html", preload: false, active: false }, //Tab2
             *         { width: "auto", url: "tab3.html", preload: false, active: false, onOpen: "onOpen" }  //Tab3
             *     ]
             * });
             * ```
             * You can also specify options via the `data-opts` attribute directly on the tab tags (`<li>` elements).
             *
             * For detailed explanations of individual options, please refer to the [declarative options](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040505.html) tab.
             *
             * @default []
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            tabOpts?: NU.Options.EachTab[];
            /**
             * If set to `true`, the tab and tab content will be displayed randomly when the tab is initialized.
             * If set to `false`, the first tab will be displayed.
             *
             * > If the `active` option is set to `true` among the tab options, the `active` option will take precedence.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            randomSel?: boolean;
            /**
             * This option allows the Controller (N.cont) object of the parent page, where the Tab instance was created,
             * to be referenced from the Controller object in the tab content when the `url` option is set in the tab options to load another page.
             *
             * When creating a Tab instance, you can specify the Controller object in the `opener` option.
             * This will pass the Controller object of the parent page into the `opener` property of the tab content page's Controller object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            opener?: NA.Objects.Controller.Object | null;
            /**
             * Defines an event handler that is executed every time a tab is activated.
             *
             * ```
             * onActive: function(tabIdx, tabEle, contentEle, tabEles, contentEles) {
             *     // this: Tab instance
             *     // tabIdx: Index of the activated tab
             *     // tabEle: Element of the activated tab
             *     // contentEle: Element of the activated content
             *     // tabEles: All tab elements
             *     // contentEles: All content elements
             * }
             * ```
             * > When tab content is loaded for the first time, the `init` function of the Controller object is executed before the `onActive` function is executed.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            onActive?: NU.EventHandlers.Tab.OnActive | null;
            /**
             * Defines an event handler that is executed when tab content loading is complete.
             *
             * ```
             * onLoad: function(tabIdx, tabEle, contentEle, cont) {
             *     // this: Tab instance
             *     // tabIdx: Index of the activated tab
             *     // tabEle: Element of the activated tab
             *     // contentEle: Element of the activated content
             *     // cont: Controller object of the loaded tab content
             * }
             * ```
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            onLoad?: NU.EventHandlers.Tab.OnLoad | null;
            /**
             * If set to `true`, the `onActive` event is not triggered when the tab is created, and the default tab is selected.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            blockOnActiveWhenCreate?: boolean;
            /**
             * When set to true, tabs can be scrolled using mouse drag, touch, or the first/last buttons.
             *
             * To scroll tabs using the first/last buttons, you need to include `a` tags and `span` tags as the first and last child elements of the `ul` tag.
             * ```
             * <div>
             *     <a href="#"><span></span></a> <!-- First button -->
             *     <ul>
             *         <li><a href="#tab1">tab1</a></li>
             *         <li><a href="#tab2">tab2</a></li>
             *         <li><a href="#tab3">tab3</a></li>
             *     </ul>
             *     <a href="#"><span></span></a> <!-- Last button -->
             *     <div id="tab1">tab1</div>
             *     <div id="tab2">tab2</div>
             *     <div id="tab3">tab3</div>
             * </div>
             * ```
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            tabScroll?: boolean;
            /**
             * Due to styles (CSS) applied to tab elements, the last tab may be either cut off or have additional spacing. In such cases, you can adjust the following options in the `tabScrollCorrection` object to display the tabs correctly:
             *  - tabContainerWidthCorrectionPx: An option that allows you to increment or decrement by 1 to correct the tab appearance when the last tab is cut off or has extra spacing.
             *  - tabContainerWidthReCalcDelayTime: An option that allows you to re-adjust the tab appearance by incrementing or decrementing by 1 when the tabs are first displayed and are either cut off or have extra spacing.
             * ```
             * N("#tab").tab({
             *     tabScrollCorrection: {
             *         tabContainerWidthCorrectionPx: 1,
             *         tabContainerWidthReCalcDelayTime: 0
             *     }
             * });
             * ```
             * [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html) If you set the `tabScrollCorrection` option in the N.context.attr("ui").tab property of the configuration, it will be applied to all Tab components.
             *
             * @default { tabContainerWidthCorrectionPx: 0, tabContainerWidthReCalcDelayTime: 0 }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html
             */
            tabScrollCorrection?: {
                tabContainerWidthCorrectionPx?: number;
                tabContainerWidthReCalcDelayTime?: number;
            };
        }

        interface Select {
            /**
             * Specifies the data to bind to the Select element.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            data?: NJS<NC.JSONObject[]>;
            /**
             * Specifies the context element where the Select will be applied.
             *
             * The context element for Select must be written as a `select` or input tags with `type=checkbox` or `type=radio`.
             * ```
             * <select class="select-context">
             *     <option value="">Select</option>
             * </select>
             * <select class="select-context" multiple="multiple"></select>
             * <input class="select-context" type="radio">
             * <input class="select-context" type="checkbox">
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Specifies the property name of the data to be bound to the name attribute of the selected element.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            key?: string;
            /**
             * Specifies the property name of the data to be bound to the value attribute of the selected element.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            val?: string;
            /**
             * If set to `false`, clears the default options in the select element before binding the data.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            append?: boolean;
            /**
             * If the context is `input[type=checkbox]` or `input[type=radio]`, specifies the direction in which the selected elements are placed.
             *  - h: Horizontal
             *  - v: Vertical
             *
             * @default "h"
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            direction?: "h" | "v";
            /**
             * Select element type
             *  - 1: select
             *  - 2: select[multiple='multiple']
             *  - 3: radio
             *  - 4: checkbox
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            type?: 0 | 1 | 2 | 3 | 4;
            /**
             * This variable is assigned with the instance of the default template element when it's a radio or checkbox.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html
             */
            template?: NJS<HTMLElement[]> | null;
        }

        interface Form {
            /**
             * Specifies the data to bind to the Form.
             *
             * Although the Form represents a single data component, the bound data is of a JSON object array type.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            data?: NJS<NC.JSONObject[]>;
            /**
             * Specifies the index value of the row from the list data indicated by the data option to bind to the form.
             *
             * The default value is -1, but if no value is entered, it will be set to 0, binding the first row of the list data to the form.
             *
             * @default -1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            row?: number;
            /**
             * Specifies the context element to apply to the Form.
             *
             * The context element of the Form can be written as tags that represent regions such as table, div, section, etc.
             *
             * If the property name of the data matches the id attribute value of the element, the data is bound.
             *
             * > All data-related components of Natural-JS use the id attribute for fast binding speed, which is inevitable.
             * ```
             * <table class="form-context">
             *     <tr>
             *         <th><label for="name">name</label></th>
             *         <td><input id="name" type="text"></td>
             *     </tr>
             *     <tr>
             *         <th><label for="age">age</label></th>
             *         <td><input id="age" type="text"></td>
             *     </tr>
             *     <tr>
             *         <th><label for="email">email</label></th>
             *         <td><input id="email" type="text"></td>
             *     </tr>
             *     <tr>
             *         <th>registered</th>
             *         <td id="registered"></td>
             *     </tr>
             * </table>
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * When set to `false`, validation of input values is not performed when focus is lost from input elements.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            validate?: boolean;
            /**
             * When set to `true`, the `unbind` method is automatically called before rebinding the same form elements, allowing for the reuse of form elements.
             * > The context element of the form is not recreated, so the purpose of the `add` and `bind` methods should be clearly distinguished.
             * Even if the `unbind` method is called for form elements already bound with data, it cannot perfectly restore the previous state.
             * Use is not recommended unless absolutely necessary.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            autoUnbind?: boolean;
            /**
             * An internal variable used within the system.
             *
             * @default null
             */
            state?: "add" | "bind" | "revert" | "update" | NJS<NC.JSONObject> | null;
            /**
             * When set to `true`, HTML of data is applied while binding to the form.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            html?: boolean;
            /**
             * When set to `true`, row data is added to the top of the data list when the `add` method is called.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            addTop?: boolean;
            /**
             * Specifies format rules as an object type rather than using the data-format attribute of the target element.
             *
             * > Refer to the `rules` parameter description of [Formatter Constructor](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030103.html) for constructing the option object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            fRules?: ND.FormatRuleObject | null;
            /**
             * Specifies validation rules as an object type rather than using the data-validate attribute of the target element.
             *
             * > Refer to the `rules` parameter description of [Validator Constructor](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030203.html) for constructing the option object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            vRules?: ND.ValidationRuleObject | null;
            /**
             * An internal variable used within the system.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            extObj?: NU.List | NU.Grid | null;
            /**
             * An internal variable used within the system.
             *
             * @default -1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            extRow?: number;
            /**
             * When set to `true`, the revert functionality is enabled, and the revert method can be used.
             *
             * @default false
             */
            revert?: boolean;
            /**
             * If set to true, element searching is cached, slightly improving performance.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            cache?: boolean;
            /**
             * If set to true, the unbind feature is enabled, allowing the use of the unbind method.
             * > Enabling the unbind feature retains initially bound data in memory, which increases memory usage.
             *
             * > Since context elements in the form are not regenerated, add and bind methods must be distinctly used based on their purposes. Even when the unbind method is called on form elements with already bound data, it may not fully restore the previous state. Therefore, it is not recommended except in cases of necessity.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            unbind?: boolean;
            /**
             * If set to true, it prevents conflicts between events already bound to input elements and component-specific events such as format, validate, and dataSync before the component is initialized.
             *
             * > If format does not work correctly, or bound data is not handled as intended, or an unknown error occurs, consider setting this to true.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            tpBind?: boolean;
            /**
             * Defines an event handler that executes before data property values are bound to elements.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html) can be set as a global option to apply to all components (Grid, List) that use Form.
             * If you use the onBeforeBindValue event, you can handle all the values and elements to be bound with Form, Grid, or List at once.
             *
             * > When the onBeforeBindValue event is set as a global event option in N.config, the result of the handler defined during component initialization is passed as the argument (val) of the global handler. Therefore, unlike other events, global event handlers cannot be interrupted in component events.
             * ```
             * onBeforeBindValue: function(ele, val, action) {
             *     // this: Form instance
             *     // ele: element to be bound
             *     // val: value to be bound
             *     // action: method name of the Form instance - "bind" | "val"
             *     return val; // The processed value must be returned.
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            onBeforeBindValue?: NU.EventHandlers.Form.OnBeforeBindValue | null;
            /**
             * Defines an event handler that executes after data property values are bound to elements.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html) can be set as a global option to apply to all components (Grid, List) that use Form.
             * The onBindValue event allows you to handle all the values and elements bound with Form, Grid, or List at once.
             * ```
             * onBindValue: function(ele, val, action) {
             *     // this: Form instance
             *     // ele: bound element
             *     // val: bound value
             *     // action: method name of the Form instance - "bind" | "val"
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            onBindValue?: NU.EventHandlers.Form.OnBindValue | null;
            /**
             * Defines an event handler that executes before data property values are bound to elements.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html) can be set as a global option to apply to all components (Grid, List) that use Form.
             * ```
             * onBeforeBind: function(context, rowData) {
             *     // this: Form instance
             *     // context: context element
             *     // rowData: data to be bound to the form
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            onBeforeBind?: NU.EventHandlers.Form.OnBeforeBind | null;
            /**
             * Defines an event handler that executes after data is fully bound.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html) can be set as a global option to apply to all components (Grid, List) that use Form.
             * ```
             * onBind: function(context, rowData) {
             *     // this: Form instance
             *     // context: context element
             *     // rowData: bound data
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            onBind?: NU.EventHandlers.Form.OnBind | null;
            /**
             * Internal variable used within the class.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html
             */
            InitialData?: NJS<NC.JSONObject>;
        }

        interface List {
            /**
             * Specifies the data to be bound to the List.
             *
             * The context elements of the List must be written with `ul` and `li` tags.
             *
             * If the property name of a row's data matches the id attribute value of an element, the data will be bound to that element.
             *
             * > All data-related components in Natural-JS unavoidably use id attributes for faster binding performance.
             * ```
             * <ul class="list-context">
             *     <li>
             *         <input id="name" type="text">
             *         <input id="age" type="text">
             *         <input id="email" type="text">
             *         <span id="registered"></span>
             *     </li>
             * </ul>
             * ```
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            data?: NJS<NC.JSONObject[]>;
            /**
             * A variable used internally.
             *
             * @default -1
             */
            row?: number;
            /**
             * A variable used internally.
             *
             * @default -1
             */
            beforeRow?: number;
            /**
             * Specifies the context elements to which the List will be applied.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Specifies the height of the list body.
             *
             * If the specified value is greater than 0, a scrollbar will appear within the list body, and its height will be fixed to the specified value. If set to 0, all data will be displayed in the list body.
             *
             * > When binding paginated data to a List combined with the Pagination component, setting this to `0` to display all the data at once is recommended.
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            height?: number;
            /**
             * If set to false, validation of the input value is not performed when the input element loses focus.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            validate?: boolean;
            /**
             * If set to true, HTML of the data is applied when binding the data.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            html?: boolean;
            /**
             * If set to true, a new row element and row data will be added to the beginning of the list when the `add` method is called.
             *
             * > If the `addTop` option is set to false, a data synchronization issue might occur, forcing the `scrollPaging.size` and `createRowDelay` option values to be set to 0. This may degrade data binding performance.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            addTop?: boolean;
            /**
             * If set to true, the row added by the `add` method will be automatically selected.
             *
             * > The `select` option must be set to true.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            addSelect?: boolean;
            /**
             * If set to true, the height of the list body can be adjusted with the mouse.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            vResizable?: boolean;
            /**
             * If set to true, window scrolling in the browser will be disabled when scrolling with a mouse wheel over the data list element.
             *
             * The browser's default behavior of scrolling up or down the window when reaching the start or end of the data list element will be prevented.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            windowScrollLock?: boolean;
            /**
             * If set to true, the `onSelect` event is triggered when a row is selected (single row selection),
             * and the class attribute of the row element (`tbody`) is toggled with the value `list_selected__`.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            select?: boolean;
            /**
             * If set to false, selecting an already selected row (with the `select` option set to true) will not deselect it.
             *
             * > The `unselect` option is not applied when the `multiselect` option is true.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            unselect?: boolean;
            /**
             * If set to true, the `onSelect` event is triggered when multiple rows are selected (multi-row selection),
             * and the class attribute of the row element (`tbody`) is toggled with the value `list_selected__`.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            multiselect?: boolean;
            /**
             * Specifies an `input[type=checkbox]` element used to select all checkboxes
             * targeted by the `checkAllTarget` option.
             *
             * > Unlike grids, this should not be specified as a jQuery selector string,
             *   but as an exact jQuery object type representing the specific element.
             *
             * > Only toggles the checkbox state without triggering a click event.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            checkAll?: JQuery.Selector;
            /**
             * Specifies an `input[type=checkbox]` element used for multi-row selection in the list.
             *
             * The specified element can be used with the `check` function to retrieve
             * or set the index of selected rows.
             *
             * > `checkSingleTarget` elements must be inside an `li` element.
             *
             * > Use jQuery selector syntax, where the selector context is automatically set to list row elements (`li`).
             *
             * > Only one of `checkAllTarget` and `checkSingleTarget` can be used.
             *
             * > Binding data via the `id` attribute on checkboxes may cause issues.
             *   Use this functionality only for retrieving the indexes of selected rows.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            checkAllTarget?: JQuery.Selector;
            /**
             * Specifies an `input[type=checkbox]` element used for single-row selection in the list.
             *
             * The specified element can be used with the `check` function to retrieve
             * or set the index of the selected row.
             *
             * > `checkSingleTarget` elements must be inside an `li` element.
             *
             * > Use jQuery selector syntax, where the selector context is automatically set to list row elements (`li`).
             *
             * > Only one of `checkAllTarget` and `checkSingleTarget` can be used.
             *
             * > Binding data via the `id` attribute on checkboxes may cause issues.
             *   Use this functionality only for retrieving the indexes of selected rows.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            checkSingleTarget?: JQuery.Selector;
            /**
             * When set to `true`, the "list_hover__" class attribute value is added to the row element when the mouse is over the row, and the added class attribute value is removed when the mouse is out.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            hover?: boolean;
            /**
             * When set to `true`, the revert feature is enabled, and the `revert` method can be used.
             *
             * > Enabling the revert feature stores the initially bound data in memory, which will increase memory usage.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            revert?: boolean;
            /**
             * When set to a value greater than 1, each row of the list is created separately when binding. At this time, the interval between the creation of the next row is set.
             *
             * > If set to 0, all rows are created at once, which can cause the browser to freeze during data binding.
             *
             * @default 1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            createRowDelay?: number;
            /**
             * Specifies the number of rows to bind at once during scroll paging.
             *
             * The list has scroll paging enabled by default, and specifying 0 disables the scroll paging feature.
             *
             * The `size` option value should be specified as a nested property of the `scrollPaging` option object, like this:
             * ```
             * ...
             *     scrollPaging: {
             *         size: 50
             *     }
             * ...
             * ```
             * > If set too small, the scroll may not be created, leaving all the data displayed. Ensure to set an amount allowing rows to overflow the list body.
             *
             * > If set too high, the browser may experience a performance load when scroll paging is triggered. If the list contains input elements or images, set it below 100; otherwise, set it below 1000 for optimal performance.
             *
             * @default { idx: 0, size: 100 }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            scrollPaging?: {
                idx?: number;
                size?: number;
            };
            /**
             * Specifies the format rules in an object type instead of the target element’s `data-format` attribute.
             *
             * > Refer to the description of the `rules` argument in the [Formatter Constructor](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030103.html) for how to construct the option object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            fRules?: ND.FormatRuleObject | null;
            /**
             * Specifies validation rules in an object type instead of the target element’s `data-validate` attribute.
             *
             * > Refer to the description of the `rules` argument in the [Validator Constructor](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030203.html) for how to construct the option object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            vRules?: ND.ValidationRuleObject | null;
            /**
             * When set to `false`, rows appended using the `bind` method's second argument with the "append" option do not automatically scroll into view.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            appendScroll?: boolean;
            /**
             * If set to false, added rows will not automatically scroll into view when the add method is called.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            addScroll?: boolean;
            /**
             * If set to false, the last selected row will not scroll into view when the select method is called.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            selectScroll?: boolean;
            /**
             * If set to false, the last checked row will not scroll into view when the check method is called.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            checkScroll?: boolean;
            /**
             * If set to false, the last row that failed validation will not scroll into view when the validate method is called.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            validateScroll?: boolean;
            /**
             * If set to true, caching is applied during element searching to slightly improve performance.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            cache?: boolean;
            /**
             * If set to true, it prevents conflicts between existing binding events (such as format, validate, and dataSync) and component events before initializing the component.
             *
             * > If format does not function correctly, bound data is not handled as intended, or unknown errors occur, consider setting this option to true.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            tpBind?: boolean;
            /**
             * Defines an event handler that is executed before data is bound to the row element created when bound or added.
             * ```
             * rowHandlerBeforeBind: function(rowIdx, rowEle, rowData) {
             *     // this: List instance
             *     // rowIdx: Index of the created row
             *     // rowEle: Created row element (li)
             *     // rowData: Data for the row to be created
             * }
             * ```
             * > The `rowHandlerBeforeBind` event handler is executed each time a row element is created.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            rowHandlerBeforeBind?: NU.EventHandlers.List.RowHandlerBeforeBind | null;
            /**
             * Defines an event handler that is executed after data is bound to the row element created when bound or added.
             * ```
             * rowHandler: function(rowIdx, rowEle, rowData) {
             *     // this: List instance
             *     // rowIdx: Index of the created row
             *     // rowEle: Created row element (li)
             *     // rowData: Bound data of the created row
             * }
             * ```
             * > The `rowHandler` event handler is executed each time a row element is created.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            rowHandler?: NU.EventHandlers.List.RowHandler | null;
            /**
             * Defines an event handler that is executed before a row is selected.
             * ```
             * onBeforeSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: List instance
             *     // rowIdx: The index of the selected row
             *     // rowEle: The selected row element (li)
             *     // rowData: The data of the selected row
             *     // beforeRowIdx: The index of the row previously selected
             *     // e: The click event object
             * }
             * ```
             * > If false is returned in the onBeforeSelect event handler, the row will not be selected. In this case, the onSelect event will be executed under the same conditions as the onBeforeSelect event.
             *
             * > This is executed only if the `select` or `multiselect` option is set to true.
             *
             * > If the `unselect` option is set to false and selection is canceled, the `rowIdx` argument returns -1. If selected, it returns the index of the selected row.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            onBeforeSelect?: NU.EventHandlers.List.OnBeforeSelect | null;
            /**
             * Defines an event handler that is executed after a row is selected.
             * ```
             * onSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: List instance
             *     // rowIdx: Index of the selected row
             *     // rowEle: Element of the selected row (li)
             *     // rowData: Data of the selected row
             *     // beforeRowIdx: Index of the previously selected row
             *     // e: click event object
             * }
             * ```
             * > Executed only when the `select` or `multiselect` option is set to `true`.
             *
             * > When the `unselect` option is set to `false`, it returns `-1` in `rowIdx` when deselected and the index of the selected row when selected.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            onSelect?: NU.EventHandlers.List.OnSelect | null;
            /**
             * Defines an event handler that is executed after the data is bound.
             * ```
             * onBind: function(context, data, isFirstPage, isLastPage) {
             *     // this: List instance
             *     // context: Context element
             *     // data: Bound data
             *     // isFirstPage: Whether it is the first page when scroll paging (returns true if not scroll-paging)
             *     // isLastPage: Whether it is the last page when scroll paging (returns true if not scroll-paging)
             * }
             * ```
             * > Executed whenever paged data is bound when scroll paging is enabled.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html
             */
            onBind?: NU.EventHandlers.List.OnBind | null;
        }

        interface GridMisc {
            resizableCorrectionWidth?: number;
            resizableLastCellCorrectionWidth?: number;
            resizeBarCorrectionLeft?: number;
            resizeBarCorrectionHeight?: number;
            fixedcolHeadMarginTop?: number;
            fixedcolHeadMarginLeft?: number;
            fixedcolHeadHeight?: number;
            fixedcolBodyMarginTop?: number;
            fixedcolBodyMarginLeft?: number;
            fixedcolBodyBindHeight?: number;
            fixedcolBodyAddHeight?: number;
            fixedcolRootContainer?: JQuery.Selector | null;
        }

        interface Grid {
            /**
             * Specifies the data to be bound to the Grid.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            data?: NJS<NC.JSONObject[]>;
            /**
             * This variable is used internally.
             *
             * @default -1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            row?: number;
            /**
             * This variable is used internally.
             *
             * @default -1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            beforeRow?: number;
            /**
             * Specifies the context element to which the Grid is applied.
             *
             * The context element for the Grid must always be written as a `table` tag.
             *
             *  - thead - Grid header
             *    - Creates column titles for the grid.
             *    - The cells in the `thead` must be written using the `th` tag.
             *    - If the header is not needed, you don't need to include it, but sortable or filter options that work on the header cannot be used.
             *    - Multiple `tr` tags can be written inside the `thead` tag.
             *  - tbody - Grid body
             *    - The top-level element representing rows is `tbody`, and it is replicated by the length of the list data.
             *    - Cells in the `tbody` are written with the `td` tag.
             *    - If a row's property name matches the value of an element's `id` attribute, data binding is applied.
             *      > All data-related components in Natural-JS inevitably use the id attribute for fast binding speed.
             *
             *      > To bind more than one column's data in a single cell (`td`), add more than one element into the cell and include the `id` attribute values. In this case, the `data-id` attribute value in the `thead`'s `th` must set the property name used for sorting/filtering, etc.
             *
             *    - You can create row groups by writing multiple `tr` tags inside the `tbody` tag.
             *  - tfoot - Grid footer
             *    - If the Grid footer is not needed, it does not need to be included.
             *    - Cells in the `tfoot` are written with the `td` tag.
             * ```
             * <table class="grid-context">
             *     <thead>
             *         <tr>
             *             <th>name</th>
             *             <th data-id="age">age</th>
             *             <th>email</th>
             *             <th>registered</th>
             *         </tr>
             *     </thead>
             *     <tbody>
             *         <tr>
             *             <td><input id="name" type="text"></td>
             *             <td>
             *                 <input id="age" type="text">
             *                 <span id="gender"><span>
             *             </td>
             *             <td><input id="email" type="text"></td>
             *             <td id="registered"></td>
             *         </tr>
             *     </tbody>
             * </table>
             * ```
             *
             * @default -1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Specifies the height of the grid body.
             *
             * If the value is greater than 0, the header is fixed, and a scrollbar will appear in the grid body, fixed at the specified height. If set to 0, the header will not be fixed, and all data will be displayed in the grid body.
             *
             * > When using the grid with a Pagination component to bind paginated data to the list, it is recommended to set this to 0 to display all data at once.
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            height?: number;
            /**
             * Specifies which columns are fixed, allowing other columns to scroll horizontally.
             *
             * If set to 0, no columns will be fixed. Setting a number greater than or equal to 1 will fix that many columns starting from the first column.
             *
             * > The header (thead) section is required, and the footer (tfoot) section must not be present.
             *
             * > This option will not work if the grid's header or body consists of more than two sets of rows or if the height option is greater than 0.
             *
             * > If the fixed cells are displayed abnormally, adjust the values of the options: misc.fixedcolHeadMarginTop, misc.fixedcolHeadMarginLeft, misc.fixedcolHeadHeight, misc.fixedcolBodyMarginTop, misc.fixedcolBodyMarginLeft, fixedcolBodyBindHeight, and fixedcolBodyAddHeight.
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            fixedcol?: number;
            /**
             * When set to true, activates the functionality to hide or show columns and automatically generates a detailed popup.
             *
             * A button for executing the above functionality is created after the last column of the grid.
             *
             * If set to true, all columns defined in the grid header will be shown in the detailed popup. If an array of column names is provided as an option, only the specified columns will be shown.
             *
             * > The column titles are extracted directly from the grid header's title text, so columns not defined in the grid header will not be displayed. To show columns not in the grid header within the detailed popup, add the columns to the grid, initialize it, and then use the hide method to hide the added columns in the grid while keeping them visible in the popup.
             *
             * > When used in conjunction with the fixedcol option, the column hiding/showing feature might not work correctly.
             *
             * > The column title information in the detailed popup is extracted based on the id values of the elements in the td inside the tbody. If there are two or more elements with id attributes inside a td or if the composition of elements in the grid header and body is too different, the extraction may not be accurate. In this case, declare the column name to be extracted in the data-id attribute of the th elements to ensure it works correctly.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            more?: boolean | string[];
            /**
             * If set to false, disables validation of input values when the input element loses focus.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            validate?: boolean;
            /**
             * If set to true, the data's HTML will be applied when binding data.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            html?: boolean;
            /**
             * If set to true, when the add method is called, the row element and row data are added to the beginning of the list.
             *
             * > When the addTop option is set to false, data synchronization issues can occur, so the settings for the scrollPaging.size and createRowDelay options are forced to 0.
             * This may reduce data binding performance.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            addTop?: boolean;
            /**
             * If set to true, the row added when the add method is called will be automatically selected.
             *
             * > The select option must be set to true.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            addSelect?: boolean;
            /**
             * When set to true, you can filter the data based on the selected column.
             *
             * > If the filter option is set to false, you can activate the filtering function for each column by declaring the attribute `data-filter="true"` in the `th` element.
             *
             * > The information for the filtered column is based on the value of the `id` of `td` elements in the `tbody` or elements within the `td`. However, if there are two or more elements with the `id` attribute inside a `td` in the `tbody` or if the structure of the grid header and body differs greatly, filtering may not work properly.
             * In this case, declare the column name to be filtered in the `data-id` attribute of the `th` element to make it work correctly.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            filter?: boolean;
            /**
             * When set to true, you can adjust the width of the column.
             *
             * > If you specify the width of cells using the `col` tag in the `colgroup`, and if the `resizable` option is true, the grid transfers the width value defined in the `col` tag to the `thead`'s `th` and removes the `colgroup` tag during initialization. Therefore, it is recommended to set column widths in the `thead`'s `th` instead of using the `col` tag when using the column resizing functionality.
             *
             * > The column resizing function may not work properly when there is a `colspan` attribute in a `th` in the `thead`.
             *
             * > If the grid's layout breaks while resizing columns, please adjust the values of the options `misc.resizableCorrectionWidth`, `misc.resizableLastCellCorrectionWidth`, `misc.resizeBarCorrectionLeft`, and `misc.resizeBarCorrectionHeight`.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            resizable?: boolean;
            /**
             * When set to true, you can adjust the height of the grid body.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            vResizable?: boolean;
            /**
             * When set to true, you can sort the data based on the selected column.
             *
             * > The information for the sorted column is based on the value of the `id` of `td` elements in the `tbody` or elements within the `td`. However, if there are two or more elements with the `id` attribute inside a `td` in the `tbody` or if the structure of the grid header and body differs greatly, sorting may not work properly.
             * In this case, declare the column name to be sorted in the `data-id` attribute of the `th` element to make it work correctly.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            sortable?: boolean;
            /**
             * If set to true, disables the browser's window scroll while scrolling with the mouse wheel over the data list element.
             *
             * Prevents the browser's default behavior of scrolling up or down the browser window when the data list element is scrolled to the top or bottom.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            windowScrollLock?: boolean;
            /**
             * If set to true, the onSelect event is triggered upon selecting a row (single-row selection),
             * and the class attribute of the row element (tbody) toggles a value prefixed with `grid_selected__`.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            select?: boolean;
            /**
             * If set to false, the selected row will not be deselected even if it is reselected while the select option is true.
             *
             * > The unselect option will not be applied if the multiselect option is true.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            unselect?: boolean;
            /**
             * If set to true, the onSelect event is triggered upon selecting a row (multi-row selection),
             * and the class attribute of the row element (tbody) toggles a value prefixed with `grid_selected__`.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            multiselect?: boolean;
            /**
             * Specifies the input[type=checkbox] element to select all checkboxes designated by the `checkAllTarget` option.
             *
             * > The specified element must be in the `thead` section.
             *
             * > It is specified using a jQuery selector, and the context of the selector is automatically set to the header element (`thead`) of the grid.
             *
             * > This option only checks the checkbox without triggering the click event.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            checkAll?: JQuery.Selector;
            /**
             * Specifies the input[type=checkbox] element for selecting multiple rows in the grid.
             *
             * The specified element can be used to get or select the indices of rows selected using the `check` function.
             *
             * > The `checkSingleTarget` element must reside within the `tbody` section.
             *
             * > It is specified using a jQuery selector, and the context of the selector is automatically set to the row element (`tbody`) of the grid.
             *
             * > Only one of the `checkAllTarget` or `checkSingleTarget` options can be used.
             *
             * > If an `id` attribute is set on the checkbox and bound to data, it might not work correctly. Please use it only for retrieving the indices of selected rows.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            checkAllTarget?: JQuery.Selector;
            /**
             * Specifies the input[type=checkbox] element for single row selection in the grid.
             *
             * The specified element can be used to get or select the indices of rows selected using the `check` function.
             *
             * > The `checkSingleTarget` element must reside within the `tbody` section.
             *
             * > It is specified using a jQuery selector, and the context of the selector is automatically set to the row element (`tbody`) of the grid.
             *
             * > Only one of the `checkAllTarget` or `checkSingleTarget` options can be used.
             *
             * > If an `id` attribute is set on the checkbox and bound to data, it might not work correctly. Please use it only for retrieving the indices of selected rows.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            checkSingleTarget?: JQuery.Selector;
            /**
             * When set to true, the "list_hover__" class attribute is added to the row element when the mouse hovers over it and is removed when the mouse moves out.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            hover?: boolean;
            /**
             * When set to true, the revert functionality is enabled, and the `revert` method can be used.
             *
             * > Enabling the revert functionality stores the initially bound data in memory, which increases memory usage.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            revert?: boolean;
            /**
             * If set to a value greater than or equal to 1, each row of the grid is created separately during binding.
             * At this point, you can configure the time interval until the next row is created.
             *
             * > If set to 0, all rows are created at once, which may cause the browser to freeze during data binding.
             *
             * @default 1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            createRowDelay?: number;
            /**
             * Specifies the number of rows to bind at once during scroll paging.
             *
             * For header-fixed lists, the scroll paging functionality is enabled by default, and setting the value to 0 will disable scroll paging.
             *
             * The `size` option value should be specified as a subproperty of the `scrollPaging` option object as follows:
             * ```
             * ...
             *     scrollPaging: {
             *         size: 50
             *     }
             * ...
             * ```
             * > Setting it too small may result in no scroll bar being created, and data may not be fully displayed.
             * Ensure you specify a value large enough so that rows can exceed the grid body.
             *
             * > If set too high, it might strain the browser during scroll paging. If the grid contains input elements or images, it is recommended to set it to 100 or below; otherwise, 1000 or below is advisable.
             *
             * @default { idx: 0, size: 100 }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            scrollPaging?: {
                idx?: number;
                size?: number;
            };
            /**
             * Specifies format rules as an object type instead of the `data-format` attribute of the target element.
             *
             * > Refer to the description of the `rules` parameter of the [Formatter constructor](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030103.html) to write the option object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            fRules?: ND.FormatRuleObject | null;
            /**
             * Specifies validation rules as an object type instead of the `data-validate` attribute of the target element.
             *
             * > Refer to the description of the `rules` parameter of the [Validator constructor](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030203.html) to write the option object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            vRules?: ND.ValidationRuleObject | null;
            /**
             * If set to false, the `bind` method won't automatically scroll to the appended row when the "append" option is specified as the second argument.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            appendScroll?: boolean;
            /**
             * If set to false, the `add` method won't scroll to the newly added row.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            addScroll?: boolean;
            /**
             * If set to false, the `select` method won't scroll to the last selected row.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            selectScroll?: boolean;
            /**
             * If set to false, the `check` method won't scroll to the last checked row.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            checkScroll?: boolean;
            /**
             * If set to false, the `validate` method won't scroll to the last row that failed validation.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            validateScroll?: boolean;
            /**
             * Improves performance slightly by caching the search for elements if set to true.
             *
             * @default true
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            cache?: boolean;
            /**
             * Prevents conflicts between events already bound to input elements and component events such as format, validate, and dataSync before the component is initialized, if set to true.
             *
             * > Please set it to true if the format does not work correctly, the bound data is not handled as intended, or unexpected errors occur.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            tpBind?: boolean;
            /**
             * Allows pasting (Ctrl + V) data copied from Excel into the grid if set to true.
             *
             * > In addition to data copied from Excel, you can also paste text that separates rows with the Enter key (\n) and columns with the Tab key (\t).
             *
             * > Based on the selected cell where the text input cursor is displayed, the values are pasted in order into elements that have an `id` attribute. If the element is not an input element but still has an `id` attribute, the cell value is updated.
             *
             * > Elements with readonly or disabled attributes do not accept any values.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            pastiable?: boolean;
            /**
             * Defines an event handler that is executed before data is bound to the row element created when bind or add is called.
             * ```
             * rowHandlerBeforeBind: function(rowIdx, rowEle, rowData) {
             *     // this: Grid instance
             *     // rowIdx: Index of the created row
             *     // rowEle: Created row element (li)
             *     // rowData: Data of the row to be created
             * }
             * ```
             * > The `rowHandlerBeforeBind` event handler is executed every time a row element is created.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            rowHandlerBeforeBind?: NU.EventHandlers.Grid.RowHandlerBeforeBind | null;
            /**
             * Defines an event handler that is executed after data is bound to the row element created when bind or add is called.
             * ```
             * rowHandler: function(rowIdx, rowEle, rowData) {
             *     // this: Grid instance
             *     // rowIdx: Index of the created row
             *     // rowEle: Created row element (li)
             *     // rowData: Data of the created row
             * }
             * ```
             * > The `rowHandler` event handler is executed every time a row element is created.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            rowHandler?: NU.EventHandlers.Grid.RowHandler | null;
            /**
             * Defines an event handler that is executed before a row is selected.
             * ```
             * onBeforeSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: Grid instance
             *     // rowIdx: Index of the selected row
             *     // rowEle: Element (li) of the selected row
             *     // rowData: Data of the selected row
             *     // beforeRowIdx: Index of the row that was previously selected
             *     // e: Click event object
             * }
             * ```
             * > If the `onBeforeSelect` event handler returns `false`, the row selection is canceled. In this case, the `onSelect` event is executed under the same condition as the `onBeforeSelect` event.
             *
             * > Executes only when the `select` or `multiselect` option is set to `true`.
             *
             * > If the `unselect` option is set to `false`, the `rowIdx` argument returns `-1` when selection is canceled, and the index of the selected row when a row is selected.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            onBeforeSelect?: NU.EventHandlers.Grid.OnBeforeSelect | null;
            /**
             * Defines an event handler that is executed after a row is selected.
             * ```
             * onSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: Grid instance
             *     // rowIdx: Index of the selected row
             *     // rowEle: Element (li) of the selected row
             *     // rowData: Data of the selected row
             *     // beforeRowIdx: Index of the row that was previously selected
             *     // e: Click event object
             * }
             * ```
             * > Executes only when the `select` or `multiselect` option is set to `true`.
             *
             * > If the `unselect` option is set to `false`, the `rowIdx` argument returns `-1` when selection is canceled, and the index of the selected row when a row is selected.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            onSelect?: NU.EventHandlers.Grid.OnSelect | null;
            /**
             * Defines an event handler that is executed after data binding is completed.
             * ```
             * onBind: function(context, data, isFirstPage, isLastPage) {
             *     // this: Grid instance
             *     // context: Context element
             *     // data: Bound data
             *     // isFirstPage: Whether it is the first page in scroll paging (returns `true` if scroll paging is not enabled)
             *     // isLastPage: Whether it is the last page in scroll paging (returns `true` if scroll paging is not enabled)
             * }
             * ```
             * > Executes whenever paginated data is bound if scroll paging is enabled.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            onBind?: NU.EventHandlers.Grid.OnBind | null;
            /**
             * Miscellaneous constants.
             *
             * @default {
             *     resizableCorrectionWidth: 0,
             *     resizableLastCellCorrectionWidth: 0,
             *     resizeBarCorrectionLeft: 0,
             *     resizeBarCorrectionHeight: 0,
             *     fixedcolHeadMarginTop: 0,
             *     fixedcolHeadMarginLeft: 0,
             *     fixedcolHeadHeight: 0,
             *     fixedcolBodyMarginTop: 0,
             *     fixedcolBodyMarginLeft: 0,
             *     fixedcolBodyBindHeight: 0,
             *     fixedcolBodyAddHeight: 1,
             *     fixedcolRootContainer: null
             * }
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            misc?: NU.Options.GridMisc;
            /**
             * Variables used internally.
             *
             * @default -1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html
             */
            currMoveToRow?: number;
        }

        interface CurrPageNavInfo {
            /**
             * Current page number.
             *
             * @default 1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            pageNo: number;
            /**
             * Row count per page.
             *
             * @default 10
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            countPerPage: number;
            /**
             * Page count per page set.
             *
             * @default 10
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            countPerPageSet: number;
            /**
             * Total row count.
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            totalCount: number;
            /**
             * Total page count.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            pageCount: number;
            /**
             * Total page set count.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            pageSetCount: number;
            /**
             * Current page set number.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            currSelPageSet: number;
            /**
             * First page number in the current page set.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            startPage: number;
            /**
             * Last page number in the current page set.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            endPage: number;
            /**
             * First row index on the selected page.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            startRowIndex: number;
            /**
             * First row number of the selected page.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            startRowNum: number;
            /**
             * Last row index on the selected page.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            endRowIndex: number;
            /**
             * Last row number of the selected page.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            endRowNum: number;
        }
        interface Pagination {
            /**
             * Specifies the data to be bound to the Pagination.
             *
             * > If the `data` option is specified, the `totalCount` value is automatically calculated and set. Therefore, you must not set the `totalCount` value to 0 or configure it manually.
             *
             * > In case of paging via the database, do not specify the `data` option. Instead, fetch and configure only the `totalCount` value from the server.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            data?: NJS<NC.JSONObject[]>;
            /**
             * Specifies the context element to which Pagination will be applied.
             *
             * The context element for Pagination must use `div` tags containing `ul` and `li` tags.
             *
             *  - First page, Last page, Previous page, Next page:
             *    - Write `ul` tags with `li` tags containing `a` tags.
             *    - Separate `ul` tags for first/previous and last/next page elements.
             *    - If related tags for first and last page links are not written, the corresponding functionalities are disabled.
             *  - Page index:
             *    - Write `ul` tags with `li` tags containing `a` tags.
             * ```
             * <div class="pagination-context">
             *     <ul>
             *         <li><a href="#">first</a></li>
             *         <li><a href="#">prev</a></li>
             *     </ul>
             *     <ul>
             *         <li><a href="#"><span>1</span></a></li>
             *     </ul>
             *     <ul>
             *         <li><a href="#">next</a></li>
             *         <li><a href="#">last</a></li>
             *     </ul>
             * </div>
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Total row count.
             *
             * > In case of paging via the database, do not specify the `data` option. Instead, fetch and configure only the `totalCount` value from the server.
             *
             * @default 0
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            totalCount?: number;
            /**
             * Row count per page.
             *
             * @default 10
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            countPerPage?: number;
            /**
             * Page count per page set.
             *
             * @default 10
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            countPerPageSet?: number;
            /**
             * Sets the initial page number to display after Pagination is initialized.
             *
             * @default 1
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            pageNo?: number;
            /**
             * Defines the event handler to execute when a page is switched.
             * ```
             * onChange: function(pageNo, selEle, selData, currPageNavInfo) {
             *     // this: Pagination instance
             *     // pageNo: Page number
             *     // selEle: Selected page navigation element
             *     // selData: Selected page's data list
             *     // currPageNavInfo: Current page navigation info
             * }
             * ```
             * `currPageNavInfo` Object Information:
             *  - pageNo: Current page number.
             *  - countPerPage: Row count per page.
             *  - countPerPageSet: Page count per page set.
             *  - currSelPageSet: Current page set number.
             *  - pageCount: Total page count.
             *  - pageSetCount: Total page set count.
             *  - totalCount: Total row count.
             *  - startPage: First page number in the current page set.
             *  - startRowIndex: First row index on the selected page.
             *  - startRowNum: First row number of the selected page.
             *  - endPage: Last page number in the current page set.
             *  - endRowIndex: Last row index on the selected page.
             *  - endRowNum: Last row number of the selected page.
             *
             * For database paging, fetch the `totalCount` value from the server first, then pass the `currPageNavInfo` argument of the `onChange` event handler to the server to fetch paged data.
             *
             * Bind the paged data to the Grid or List whenever the page changes in the `onChange` event.
             * ```
             * var grid = N(data).grid(".grid-context");
             *
             *     N.comm("getTotalCnt.json").submit(function(data){
             *         N(data).pagination({
             *             context: ".pagination-context",
             *             totalCount: data.totalCount,
             *             onChange: function(pageNo, selEle, selData, currPageNavInfo) {
             *                 N(currPageNavInfo).comm("getPagedDataList.json").submit(function(data){
             *                     grid.bind(selData);
             *                 });
             *             }
             *         }).bind();
             *     });
             * ```
             * > If `blockOnChangeWhenBind` is set to `true`, the event is executed only when the paging buttons are clicked.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            onChange?: NU.EventHandlers.Pagination.OnChange | null;
            /**
             * When set to `true`, the `onChange` event is not executed when the bind method is called.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            blockOnChangeWhenBind?: boolean;
            /**
             * A variable assigned to hold the paging state information object.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html
             */
            currPageNavInfo?: NU.Options.CurrPageNavInfo | null;
        }

        interface Tree {
            /**
             * Specifies the data to bind to the Tree.
             *
             * @default undefined
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            data?: NJS<NC.JSONObject[]>;
            /**
             * Specifies the element to apply the Tree.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Specifies the property name of the data to be displayed as the node name.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            key?: string;
            /**
             * Specifies the property name of the data to be set as the node value.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            val?: string;
            /**
             * Specifies the property name of the data to be set as the node level.
             *
             * > The level option is not mandatory, but specifying it enhances the Tree rendering speed.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            level?: string;
            /**
             * Specifies the property name of the data to be set as the parent node value.
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            parent?: string;
            /**
             * When set to `true`, folder nodes can be selected.
             *
             * > If the option is `true`, users can click the [+] icon to expand the folder, and clicking on the node name will select it.
             * If the option is `false`, clicking on a folder node name will not select the folder but only expand it.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            folderSelectable?: boolean;
            /**
             * If set to true, checkboxes will be added before the node name.
             *
             * > When a checkbox is checked, all child nodes are also checked, and the `onCheck` event handler is executed.
             *
             * @default false
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            checkbox?: boolean;
            /**
             * Defines the event handler to be executed when a node is selected.
             * ```
             * onSelect: function(selNodeIndex, selNodeEle, selNodeData) {
             *     // this: Tree instance
             *     // selNodeIndex: The index of the selected node
             *     // selNodeEle: The element of the selected node
             *     // selNodeData: The row data of the selected node
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            onSelect?: NU.EventHandlers.Tree.OnSelect | null;
            /**
             * Defines the event handler to be executed when a node is checked.
             *
             * ```
             * onCheck: function(selNodeIndex, selNodeEle, selNodeData
             *                     , checkedElesIndexes, checkedEles, checkedElesData
             *                     , checkFlag) {
             *     // this: Tree instance
             *     // selNodeIndex: The index of the selected node
             *     // selNodeEle: The element of the selected node
             *     // selNodeData: The row data of the selected node
             *     // checkedElesIndexes: The indexes of the checked nodes
             *     // selNodeEle: The elements of the checked nodes
             *     // selNodeData: The row data of the checked nodes
             *     // checkFlag: Whether the checkbox was checked
             * }
             * ```
             *
             * @default null
             *
             * @see https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html
             */
            onCheck?: NU.EventHandlers.Tree.OnCheck | null;
        }
    }

    namespace EventHandlers {
        namespace Alert {
            interface Width {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            interface Height {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            interface OnOk {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            interface OnCancel {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            interface OnBeforeShow {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnShow {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnBeforeHide {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnHide {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnBeforeRemove {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnRemove {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
        }
        namespace Button {
            interface OnBeforeCreate {
                (this: NU.Button, context: NJS<HTMLElement[]>, opts: NU.Options.Button): void;
            }
            interface OnCreate {
                (this: NU.Button, context: NJS<HTMLElement[]>, opts: NU.Options.Button): void;
            }
        }
        namespace Datepicker {
            interface OnChangeYear {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selYearStr: string, e: JQuery.Event): void;
            }
            interface OnChangeMonth {
                (
                    this: NU.Datepicker,
                    context: NJS<HTMLElement[]>,
                    selMonthStr: string,
                    selYearStr: string,
                    e: JQuery.Event,
                ): void;
            }
            interface OnSelect {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selDate: NC.Date, monthonly: boolean): void;
            }
            interface OnBeforeShow {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): undefined | false;
            }
            interface OnShow {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            interface OnBeforeHide {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            interface OnHide {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>): void;
            }
        }
        namespace Popup {
            interface Width {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            interface Height {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            interface OnOk {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            interface OnCancel {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            interface OnBeforeShow {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnShow {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnBeforeHide {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnHide {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnBeforeRemove {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnRemove {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            interface OnOpen {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
            interface OnClose {
                (this: NU.Popup, onCloseData?: any): void;
            }
            interface OnLoad {
                (this: NU.Popup, cont: NA.Objects.Controller.Object): void;
            }
        }
        namespace Tab {
            interface OnOpen {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
            interface OnActive {
                (
                    this: NU.Tab,
                    selTabIdx: number,
                    selTabEle: NJS<HTMLElement[]>,
                    selContentEle: NJS<HTMLElement[]>,
                    links: NJS<HTMLElement[]>,
                    contents: NJS<HTMLElement[]>,
                ): void;
            }
            interface OnLoad {
                (
                    this: NU.Tab,
                    selTabIdx: number,
                    selTabEle: NJS<HTMLElement[]>,
                    selContentEle: NJS<HTMLElement[]>,
                    cont: NA.Objects.Controller.Object,
                ): void;
            }
        }
        namespace Form {
            interface OnBeforeBindValue {
                (
                    this: NU.Form,
                    ele: NJS<HTMLElement[]>,
                    val: NC.Primitive | NC.Primitive[],
                    action: "bind" | "val",
                ): NC.Primitive | NC.Primitive[];
            }
            interface OnBindValue {
                (
                    this: NU.Form,
                    ele: NJS<HTMLElement[]>,
                    val: NC.Primitive | NC.Primitive[],
                    action: "bind" | "val",
                ): void;
            }
            interface OnBeforeBind {
                (this: NU.Form, context: NJS<HTMLElement[]>, vals: NC.JSONObject): void;
            }
            interface OnBind {
                (this: NU.Form, context: NJS<HTMLElement[]>, vals: NC.JSONObject): void;
            }
        }
        namespace List {
            interface RowHandlerBeforeBind {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            interface RowHandler {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            interface OnBeforeSelect {
                (
                    this: NU.List,
                    rowIdx: number,
                    rowEle: NJS<HTMLElement[]>,
                    rowData: NJS<NC.JSONObject>,
                    beforeRowIdx: number,
                    e: JQuery.Event,
                ): undefined | false;
            }
            interface OnSelect {
                (
                    this: NU.List,
                    rowIdx: number,
                    rowEle: NJS<HTMLElement[]>,
                    rowData: NJS<NC.JSONObject[]>,
                    beforeRowIdx: number,
                    e: JQuery.Event,
                ): void;
            }
            interface OnBind {
                (
                    this: NU.List,
                    context: NJS<HTMLElement[]>,
                    data: NJS<NC.JSONObject>,
                    isFirstPage: boolean,
                    isLastPage: boolean,
                ): void;
            }
        }
        namespace Grid {
            interface RowHandlerBeforeBind {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            interface RowHandler {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            interface OnBeforeSelect {
                (
                    this: NU.Grid,
                    rowIdx: number,
                    rowEle: NJS<HTMLElement[]>,
                    rowData: NJS<NC.JSONObject>,
                    beforeRowIdx: number,
                    e: JQuery.Event,
                ): undefined | false;
            }
            interface OnSelect {
                (
                    this: NU.Grid,
                    rowIdx: number,
                    rowEle: NJS<HTMLElement[]>,
                    rowData: NJS<NC.JSONObject[]>,
                    beforeRowIdx: number,
                    e: JQuery.Event,
                ): void;
            }
            interface OnBind {
                (
                    this: NU.Grid,
                    context: NJS<HTMLElement[]>,
                    data: NJS<NC.JSONObject>,
                    isFirstPage: boolean,
                    isLastPage: boolean,
                ): void;
            }
        }
        namespace Pagination {
            interface OnChange {
                (
                    this: NU.Pagination,
                    pageNo: number,
                    selEle: NJS<HTMLElement[]>,
                    selData: NC.JSONObject[],
                    currPageNavInfo: NU.Options.CurrPageNavInfo,
                ): void;
            }
        }
        namespace Tree {
            interface OnSelect {
                (this: NU.Tree, selNodeIndex: number, selNodeEle: NJS<HTMLElement[]>, selNodeData: NC.JSONObject): void;
            }
            interface OnCheck {
                (
                    this: NU.Tree,
                    selNodeIndex: number,
                    selNodeEle: NJS<HTMLElement[]>,
                    selNodeData: NC.JSONObject,
                    checkedElesIndexes: number[],
                    checkedEles: NJS<HTMLElement[]>,
                    checkedElesData: NC.JSONObject[],
                    checkFlag: boolean,
                ): void;
            }
        }
    }

    namespace Callbacks {
        namespace Popup {
            interface LoadContent {
                (this: NU.Popup, cont?: NA.Objects.Controller.Object, context?: NJS<HTMLElement[]>): void;
            }
        }
        namespace Tab {
            interface LoadContent {
                (this: NU.Tab, cont?: NA.Objects.Controller.Object, context?: NJS<HTMLElement[]>): void;
            }
        }
    }

    namespace Objects {
        namespace Grid {
            interface TableMap {
                colgroup: HTMLElement[][];
                thead: HTMLTableCellElement[][];
                tbody: HTMLTableCellElement[][];
                tfoot: HTMLTableCellElement[][];
            }
        }

        namespace Pagination {
            interface LinkEles {
                body: HTMLElement[][];
                page: HTMLElement[][];
                first: HTMLElement[][];
                prev: HTMLElement[][];
                next: HTMLElement[][];
                last: HTMLElement[][];
            }
        }
    }
}
