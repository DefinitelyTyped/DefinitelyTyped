declare namespace NU {

    enum ButtonSize {
        NONE = "none",
        SMALLER = "smaller",
        SMALL = "small",
        MEDIUM = "medium",
        LARGE = "large",
        BIG = "big"
    }
    enum ButtonColor {
        NONE = "none",
        PRIMARY = "primary",
        PRIMARY_CONTAINER = "primary_container",
        SECONDARY = "secondary",
        SECONDARY_CONTAINER = "secondary_container",
        TERTIARY = "tertiary",
        TERTIARY_CONTAINER = "tertiary_container"
    }
    enum ButtonType {
        NONE = "none",
        FILLED = "filled",
        OUTLINED = "outlined",
        ELEVATED = "elevated"
    }

    namespace Options {
        type Alert = {
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            context?: Window | NJS<HTMLElement[]>;
            /**
             * Message content.
             *
             * > You can specify a message string, jQuery object, HTML string, or HTML element.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            vars?: string[];
            /**
             * If set to true, the HTML in the message will be applied.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            html?: boolean;
            /**
             * Top position(px) of the message dialog.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            top?: number;
            /**
             * Left position(px) of the message dialog.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            height?: number | NU.EventHandlers.Alert.Height;
            /**
             * Sets the title of the message dialog box. If not set, the title bar will not be created.
             * > It can also be set in the title attribute of the context HTML element.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            title?: string;
            /**
             * If set to false, elements related to the default button(OK/Cancel button) will not be created.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            button?: boolean;
            /**
             * Defines the options of the Button component applied to the confirmation button of the message dialog.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            okButtonOpts?: NU.Options.Button | null;
            /**
             * Defines the options of the Button component applied to the cancel button of the message dialog.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            cancelButtonOpts?: NU.Options.Button | null;
            /**
             * Set whether to hide or remove dialog box elements when the message dialog box is closed.
             *  - hide: Hides the message dialog element to maintain its previous state.
             *  - remove: Reset the state by removing the message dialog element.
             *
             * @default "remove"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            closeMode?: "hide" | "remove";
            /**
             * If set to true, it creates an overlay element that covers the element specified by context, blocking all events except the content of the message dialog box.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            modal?: boolean;
            /**
             * If set to false, clicking on the msgContext (the element that covers the screen when the modal option is true) will not close the message dialog.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            overlayClose?: boolean;
            /**
             * Specifies the background color of msgContext(the element that covers the screen when the modal option is true).
             * It can be defined as the color property value of CSS.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            overlayColor?: "string" | null;
            /**
             * If set to false, pressing the ESC key will not close the message dialog.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            escClose?: boolean;
            /**
             * If set to true it will show OK/Cancel buttons, if set to false it will only show OK buttons.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            confirm?: boolean;
            /**
             * If set to true, the message dialog will always appear on top.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            alwaysOnTopCalcTarget?: string;
            /**
             * If set to false, the block overlay will not be resized and the message dialog will be repositioned automatically when the browser resizes or the height of the parent content changes dynamically.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            windowScrollLock?: boolean;
            /**
             * If set to true, the message dialog can be dragged by the title bar.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            draggable?: boolean;
            /**
             * If set to false, the message dialog will not automatically be moved inward when dropped off-screen.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            draggableOverflowCorrection?: boolean;
            /**
             * Specifies where the message dialog box will move inward when dropped off the screen.
             * > If the message dialog box does not return completely inside and a scroll bar appears on the screen, correct the position of the message dialog box by increasing or decreasing it by 1.
             *
             * @default { top: 0, bottom: 0, left: 0, right: 0 }
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            draggableOverflowCorrectionAddValues?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number
            };
            /**
             * When set to true, saves memory usage by removing unnecessary reference elements.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0401.html&tab=html/naturaljs/refr/refr040104.html }
             */
            onRemove?: NU.EventHandlers.Alert.OnRemove | null;
            isInput?: boolean;
            isWindow?: boolean;
        };

        type Button = {
            /**
             * Button을 적용할 context 요소를 지정합니다.
             *
             * Button의 context 요소는 반드시 a 나 button, input[type=button] 태그로 작성해야 합니다.
             * > Button은 한번에 여러 요소를 선택해서 context로 지정할 수 있습니다.
             * ```
             * <a class="button-context" data-opts='{ "size": "big" }'>Button</a>
             * <input class="button-context" type="button" value="Button" data-opts='{ "color": "primary" }'>
             * <button class="button-context" data-opts='{ "color": "primary", "size": "large" }'>Button</button>
             * ```
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 버튼의 크기를 설정합니다.
             *
             * 크기는 "none", "smaller", "small", "medium", "large", "big" 중 하나를 지정할 수 있습니다.
             *
             * @default "none"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            size?: ButtonSize;
            /**
             * X
             * 버튼의 색상을 설정합니다.
             *
             * 색상은 "none", "primary", "primary_container", "secondary", "secondary_container", "tertiary", "tertiary_container" 중 하나를 지정할 수 있습니다.
             *
             * 버튼 색상의 Naming 과 기본값은 [Material Design 3 의 Color roles](https://m3.material.io/styles/color/roles) 를 기반으로 합니다.
             *
             * 버튼의 스타일을 변경하려면 natural.ui.css 파일의 "btn_" 로 시작하는 클래스를 수정하면 됩니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            color?: ButtonColor;
            /**
             * 버튼의 배경을 채울지 외곽선만 표시할지 설정 합니다.
             *
             * 타입은 "none", "filled", "outlined", "elevated" 중 하나를 지정할 수 있습니다.
             *
             * "filled", "outlined" 의 색상은 color 옵션으로 정의한 색상으로 지정 됩니다. color 옵션이 "none" 이면 버튼의 배경이나 외곽선이 표시되지 않습니다.
             *
             * @default "none"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            type?: ButtonType;
            /**
             * true로 설정하면 버튼이 비활성화된 상태로 생성됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            disable?: boolean;
            /**
             * 버튼의 옵션이 적용되기 전에 실행되는 이벤트핸들러를 정의 합니다.
             *
             * > 외부 버튼 라이브러리를 사용할때 버튼요소의 외부나 내부에 필요한 HTML 요소를 추가하거나 다른 용도로 HTML 요소의 편집이 필요할 때 활용 할 수 있습니다.
             * ```
             * onBeforeCreate: function(context, opts) {
             *     // this: Button 인스턴스
             *     // context: context 요소
             *     // opts: 버튼을 생성할 때 지정된 옵션
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            onBeforeCreate?: NU.EventHandlers.Button.OnBeforeCreate | null;
            /**
             * 버튼의 옵션이 적용된 후에 실행되는 이벤트핸들러를 정의 합니다.
             *
             * > 외부 버튼 라이브러리를 사용할때 버튼요소에 효과 이벤트를 정의하거나 다른 용도로 버튼 처리가 필요할 때 활용 할 수 있습니다.
             * ```
             * onCreate: function(context, opts) {
             *     // this: Button 인스턴스
             *     // context: context 요소
             *     // opts: 버튼을 생성할 때 지정된 옵션
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0402.html&tab=html/naturaljs/refr/refr040204.html }
             */
            onCreate?: NU.EventHandlers.Button.OnCreate | null;
        };

        type Datepicker = {
            /**
             * Datepicker가 적용될 입력 요소를 지정합니다.
             * ```
             * <input class="datepicker-context" type="text">
             * ```
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Datepicker container element.
             *
             * @default N('<div class="datepicker__"></div>')
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            contents?: NJS<HTMLElement[]>;
            /**
             * true로 설정하면 연도와 월만 선택할 수 있는 Monthpicker가 표시됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            monthonly?: boolean;
            /**
             * false로 설정하면 입력 요소에 커서가 Focus 되었을 때 Datepicker가 표시되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            focusin?: boolean;
            /**
             * top으로 설정하면 연도 선택 요소가 상단에 생성됩니다.
             *
             * @default "left"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            yearsPanelPosition?: "left" | "top";
            /**
             * top으로 설정하면 월 선택 요소가 상단에 생성됩니다.
             *
             * @default "left"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            monthsPanelPosition?: "left" | "top";
            /**
             * yearsPanelPosition 옵션 값이 "top" 일 때 선택 가능한 이전 연도의 개수를 설정합니다.
             *
             * @default 200
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            minYear?: number;
            /**
             * yearsPanelPosition 옵션 값이 "top" 일 때 선택 가능한 이후 연도의 개수를 설정합니다.
             *
             * @default 200
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            maxYear?: number;
            /**
             * true로 설정하면 연도 변경 시 변경된 날짜가 입력 요소에 바로 반영됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            yearChangeInput?: boolean;
            /**
             * true로 설정하면 월 변경 시 변경된 날짜가 입력 요소에 바로 반영됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            monthChangeInput?: boolean;
            /**
             * true로 설정하면 좌우로 터치 드래그했을 때 월이 변경됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            touchMonthChange?: boolean;
            /**
             * true로 설정하면 마우스 휠을 스크롤했을 때 월이 변경됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            scrollMonthChange?: boolean;
            /**
             * 설정된 날짜보다 빠른 날짜를 선택하거나 입력하면 입력이 차단됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            minDate?: string;
            /**
             * 설정된 날짜 이후의 날짜를 선택하거나 입력하면 입력이 차단됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            maxDate?: string;
            /**
             * holiday 옵션을 설정하면 Datepicker에 휴일을 표시해 줍니다.
             *
             * 아래와 같이 repeat 객체와 once 객체로 휴일들을 설정할 수 있습니다.
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
             * repeat 객체에는 매년 반복되는 휴일들을 연도를 제외하고 입력합니다. once 객체는 매년 반복되지 않는 휴일들을 연월일 형식으로 입력합니다.
             *
             * 같은 날짜에 휴일이 2개 이상일 경우 Array 타입으로 휴일명을 여러 개 지정하면 됩니다.
             *
             * [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html)의 N.context.attr("ui").datepicker.holiday 프로퍼티에 설정하면 모든 Datepicker에 적용됩니다.
             * ```
             * N.comm("getHolidayList.json").submit(function(data) {
             *     var once = {};
             *     N(data).each(function() {
             *         once[this.holidayDate] = this.holidayName;
             *     });
             *     if(N.context.attr("ui").datepicker.holiday === undefined) {
             *         N.context.attr("ui").datepicker.holiday = {};
             *     }
             *     N.context.attr("ui").datepicker.holiday.once = once;
             * });
             * ```
             * > 휴일로 표시되는 요소에는 "datepicker_holiday__" class 속성 값이 추가됩니다.
             *
             * @default { "repeat": null, "once": null }
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            holiday?: {
                "repeat"?: {
                    [key: string]: string | string[]
                } | null;
                "once"?: {
                    [key: string]: string | string[]
                } | null;
            };
            /**
             * 연도가 변경되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onChangeYear: function(context, year, e) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             *     // year: 선택된 연도
             *     // e: 이벤트 객체
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onChangeYear?: NU.EventHandlers.Datepicker.OnChangeYear | null;
            /**
             * 월이 변경되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onChangeMonth: function(context, month, year, e) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             *     // month: 선택된 월
             *     // year: 선택된 연도
             *     // e: 이벤트 객체
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onChangeMonth?: NU.EventHandlers.Datepicker.OnChangeMonth | null;
            /**
             * 날짜나 월(monthonly 옵션이 true로 설정되었을 경우)이 선택되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onSelect: function(context, selDate, monthonly) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             *     // selDate: 선택된 날짜의 Date 객체
             *     //      selDate = {
             *     //          obj: Date 객체,
             *     //          format: Date 포멧(Formatter > 포맷 룰 목록 탭 > "date" 룰의 "string 타입으로 데이트 포맷 룰을 지정" 참고
             *     //      }
             *     //      selDate.obj.formatDate("Y-m-d") => "2024-09-26";
             *     // monthonly: monthonly 옵션 값
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onSelect?: NU.EventHandlers.Datepicker.OnSelect | null;
            /**
             * 데이트피커가 표시되기 전에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onBeforeShow: function(context, contents) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             *     // contents: Datepicker 판넬 요소
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onBeforeShow?: NU.EventHandlers.Datepicker.OnBeforeShow | null;
            /**
             * 데이트피커가 표시된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onShow: function(context, contents) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             *     // contents: Datepicker 판넬 요소
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onShow?: NU.EventHandlers.Datepicker.OnShow | null;
            /**
             * 데이트피커가 닫히기 전에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onBeforeHide: function(context, contents) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             *     // contents: Datepicker 판넬 요소
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onBeforeHide?: NU.EventHandlers.Datepicker.OnBeforeHide | null;
            /**
             * 데이트피커가 닫힌 후에(닫히는 효과가 끝난 후) 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onHide: function(context) {
             *     // this: Datepicker 인스턴스
             *     // context: context 요소
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0403.html&tab=html/naturaljs/refr/refr040304.html }
             */
            onHide?: NU.EventHandlers.Datepicker.OnHide | null;
        };

        type Popup = {
            /**
             * Popup으로 생성할 페이지 안에 있는 Block 요소를 지정합니다.
             *
             * > 페이지 안의 요소를 팝업으로 만들기 때문에 url 옵션을 설정하면 안 됩니다.
             * ```
             * N("context").popup();
             * ```
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 팝업으로 만들 페이지의 url을 지정합니다.
             *
             * > 팝업 페이지 로딩이 완료되면 팝업 페이지의 init 메서드가 호출됩니다.
             *
             * > 다른 페이지를 로드하여 팝업을 생성하기 때문에 context 옵션을 지정하면 안 됩니다.
             * ```
             * N().popup("url");
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            url?: string,
            /**
             * 팝업의 제목을 설정합니다. 설정하지 않으면 타이틀바가 생성되지 않습니다.
             *
             * > url 옵션을 설정한 경우 불러오는 페이지의 view 요소의 title 속성으로도 설정할 수 있습니다.
             * context를 지정하여 팝업을 생성하는 경우에는 context 요소의 title 속성으로 설정할 수 있습니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            title?: string;
            /**
             * false로 설정하면 기본 버튼(확인/취소 버튼) 관련 요소들을 생성하지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            button?: boolean;
            /**
             * true로 설정하면 전체 화면을 가리는 overlay 요소를 생성하여 팝업의 콘텐츠를 제외하고 모든 이벤트를 차단합니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            modal?: boolean,
            /**
             * The position(px) to the top of the popup.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            top?: number;
            /**
             * The position(px) to the left of the popup.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            height?: number | NU.EventHandlers.Popup.Height;
            /**
             * 업의 Controller object에서 부모 페이지의 Controller object를 참조하기 위한 옵션입니다.
             *
             * 팝업 인스턴스를 생성하는 페이지의 Controller object를 opener 옵션으로 설정하면 팝업의 Controller object의 opener 속성으로 전달됩니다.
             *
             * > This only works when you set the url option to create another page as popup content.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            opener?: NA.Objects.Controller.Object | null,
            /**
             * 팝업이 닫혔을 때 팝업 요소를 감출 것 인지, 제거할 것 인지를 설정합니다.
             *  - hide: 팝업 요소를 숨겨서 이전 상태를 유지합니다.
             *  - remove: 팝업 요소를 제거하여 상태를 초기화합니다.
             *
             * @default "hide"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            closeMode?: "hide" | "remove";
            /**
             * If set to true, the popup will always appear on top.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            alwaysOnTop?: boolean;
            /**
             * false로 설정하면 msgContext(modal 옵션이 true 일 때 화면에 덮는 요소)를 클릭해도 팝업이 닫히지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            overlayClose?: boolean;
            /**
             * false로 설정하면 ESC 키를 눌러도 팝업이 닫히지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            onRemove?: NU.EventHandlers.Popup.OnRemove | null;
            /**
             * 팝업이 열릴 때마다 실행되는 이벤트 핸들러를 정의합니다.
             *
             * > 문자열로 함수명만 정의하고 실제 이벤트 핸들러 메서드는 불러오는 팝업 콘텐츠의 Controller object에 정의 한 함수명으로 구현되어 있어야 합니다.
             *
             * > open 메서드의 첫 번째 인수가 onOpen 이벤트 핸들러 함수의 첫 번째 인수(onOpenData)로 전달됩니다.
             *
             * > 팝업 콘텐츠가 처음 로딩될 경우 Controller object의 init 함수가 실행된 다음 onOpen 함수가 실행됩니다.
             *
             * > This only works when you set the url option to create another page as popup content.
             *
             *  - 팝업 인스턴스
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
             *  - 팝업의 Controller object
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            onOpen?: string | NU.EventHandlers.Popup.OnOpen | null,
            /**
             * onOpen 이벤트 핸들러 함수의 첫 번째 인수로 전달할 부모 페이지의 데이터를 설정합니다.
             *
             * open 메서드의 첫 번째 인수 값이 이 값으로 설정됩니다.
             *
             * > This only works when you set the url option to create another page as popup content.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            onOpenData?: any | null,
            /**
             * 팝업이 닫힐 때마다 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onClose: function(onCloseData) {
             *     // this: Popup 인스턴스
             *     // onCloseData: 팝업에서 호출 한 (Controller object).caller.close 함수의 첫 번째 인수 값이 전달됩니다.
             * }
             * ```
             * > 팝업 콘텐츠 로딩이 완료되면 팝업의 Controller object에 caller라는 속성이 생성됩니다. 이 caller는 이 팝업을 생성한 부모페이지의 Popup instance입니다.
             * 팝업에서 자체 팝업을 닫을 때는 팝업의 Controller object에서 `this.caller.close(onCloseData);` 명령을 실행하면 됩니다. 이 명령을 실행하면 팝업이 닫히면서 onClose 이벤트 핸들러 함수의 첫 번째 인수로 onCloseData가 전달됩니다.
             *
             * > This only works when you set the url option to create another page as popup content.
             *
             *  - 팝업 인스턴스
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
             *  - 팝업의 Controller object
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            onClose?: NU.EventHandlers.Popup.OnClose | null,
            /**
             * onClose 이벤트 핸들러 함수의 첫 번째 인수로 전달할 팝업 페이지의 데이터를 설정합니다.
             *
             * 팝업의 Controller object의 this.caller.close 메서드의 첫 번째 인수 값이 이 값으로 설정됩니다.
             *
             * > This only works when you set the url option to create another page as popup content.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            onCloseData?: any | null,
            /**
             * 팝업 콘텐츠 로딩이 완료되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             *
             * ```
             * onLoad: function(cont) {
             *     // this: Popup 인스턴스
             *     // cont: 팝업의 Controller object
             * }
             * ```
             * > This only works when you set the url option to create another page as popup content.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            onLoad?: NU.EventHandlers.Popup.OnLoad | null,
            /**
             * true로 설정하면 팝업의 콘텐츠를 팝업이 초기화될 때 미리 로딩하고 false로 설정하면 팝업을 처음 열 때 팝업의 콘텐츠를 로딩합니다.
             *
             * > url 옵션을 설정하여 다른 페이지를 팝업 콘텐츠로 생성했을 때만 작동합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            preload?: boolean,
            /**
             * false로 설정하면 브라우저의 크기를 조절하거나 부모 콘텐츠의 높이가 동적으로 변경되었을 때 블록 오버레이의 크기와 팝업의 위치를 자동으로 조정하지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            dynPos?: boolean;
            /**
             * true로 설정하면 팝업 요소 위에서 마우스 휠로 스크롤할 때 브라우저의 윈도우 스크롤을 비활성화합니다.
             *
             * 팝업 요소가 처음이나 마지막으로 스크롤되었을 때 브라우저 윈도우 스크롤이 위나 아래로 스크롤되는 브라우저의 기본 동작을 차단합니다.
             *
             * > modal 옵션이 true로 설정되어 있을 때만 작동합니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            windowScrollLock?: boolean;
            /**
             * 로 설정하면 제목 표시 줄로 팝업 대화 상자를 드래그할 수 있습니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            draggable?: boolean;
            /**
             * false로 설정하면 팝업을 화면 바깥으로 드롭했을 때 자동으로 내부로 이동시키지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            draggableOverflowCorrection?: boolean;
            /**
             * Specifies where the popup will move inward when dropped off the screen.
             * > If the popup does not return completely inside and a scroll bar appears on the screen, correct the position of the popup by increasing or decreasing it by 1.
             *
             * @default { top: 0, bottom: 0, left: 0, right: 0 }
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            draggableOverflowCorrectionAddValues?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number
            };
            /**
             * When set to true, saves memory usage by removing unnecessary reference elements.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0404.html&tab=html/naturaljs/refr/refr040404.html }
             */
            saveMemory?: boolean;
        };

        type EachTab = {
            /**
             * 탭 콘텐츠로 생성할 페이지의 URL을 지정합니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            url?: string;
            /**
             * true로 설정하면 Tab이 초기화된 후 해당 탭과 탭 콘텐츠가 기본으로 선택됩니다.
             *
             * > active 옵션은 기본으로 표시할 탭 1개만 true로 설정해야 합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            active?: boolean;
            /**
             * true로 설정하면 탭 콘텐츠가 최초로 선택되었을 때 페이지를 로딩하지 않고 탭이 초기화될 때 페이지를 미리 로딩합니다.
             *
             * 탭을 초기화할 때 탭 콘텐츠의 요소나 Controller object를 참조해야 할 때 사용합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            preload?: boolean;
            /**
             * 탭이 열릴 때마다 불러온 콘텐츠에서 실행될 onOpen 이벤트 핸들러 함수의 이름을 문자열로 지정합니다.
             *  - onOpen 이벤트 핸들러 함수는 로딩될 페이지의 Controller object에 지정한 이름으로 정의되어 있어야 합니다.
             *  - onOpen 이벤트 핸들러 함수는의 첫 번째 인수는 open 함수를 호출할 때 두 번째 인수로 지정한 onOpenData입니다.
             *  - 탭 콘텐츠가 처음 로딩될 때 N.cont 오브젝트의 init 함수가 실행된 다음 onOpen 함수가 실행됩니다.
             *  - onActive 이벤트가 정의되어 있으면 onActive 함수가 실행된 다음 onOpen 함수가 실행됩니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            onOpen?: string | NU.EventHandlers.Tab.OnOpen;
            /**
             * true로 설정하면 지정 한 탭이 비활성화된 상태로 생성됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            disable?: boolean;
            /**
             * true로 설정하면 탭 콘텐츠의 상태를 유지하지 않고 탭을 선택할 때마다 연결된 탭 콘텐츠의 내용을 다시 불러와 초기화합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            stateless?: boolean
        };
        type Tab = {
            /**
             * Tab 을 적용할 context 요소를 지정합니다.
             *
             * Tab 의 context 요소는 반드시 div 태그 안에 ul, li와 div 태그로 작성해야 합니다.
             *
             *  - tab
             *    - tab 요소는 ul 태그의 li 태그를 사용합니다.
             *    - tab 링크(a 태그) 태그의 href 속성 값과 tab contents(div) 태그의 id 속성 값을 맞춰 줍니다.
             *  - tab contents
             *    - tab contents 요소는 div 태그를 사용합니다.
             *    - tab(li)의 순서와 개수에 맞춰 tab contents(div)를 생성합니다.
             *    - tab contents(div) 태그의 id 속성과 tab 링크(a 태그)의 href 속성 값을 맞춰 줍니다.
             *    - 탭 옵션에 url 옵션을 설정하여 다른 페이지를 불러올 수 있고 tab contents 요소(div) 안에 직접 콘텐츠를 작성해도 됩니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 탭 요소들의 인스턴스만 할당되어있는 변수입니다.
             *
             * @default null
             */
            links?: NJS<HTMLElement[]> | null;
            /**
             * 탭 컨텐츠 요소들의 인스턴스만 할당되어있는 변수입니다.
             *
             * @default null
             */
            contents?: NJS<HTMLElement[]> | null;
            /**
             * 탭 요소의 data-opts 속성이 아닌 object array 타입으로 개별 탭의 옵션을 지정합니다.
             *
             * 옵션은 탭의 순서와 개수만큼 옵션 object로 설정합니다.
             * ```
             * N("#tab").tab({
             *     tabOpts: [
             *         { width: "auto", url: "tab1.html", preload: false, active: false }, //Tab1
             *         { width: "auto", url: "tab2.html", preload: false, active: false }, //Tab2
             *         { width: "auto", url: "tab3.html", preload: false, active: false, onOpen: "onOpen" }  //Tab3
             *     ]
             * });
             * ```
             * 탭 태그(li)에 직접 data-opts 속성으로 옵션을 지정할 수도 있습니다.
             *
             * 개별 옵션에 대한 설명은 [선언형 옵션](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040505.html) 탭을 참고 바랍니다.
             *
             * @default []
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            tabOpts?: NU.Options.EachTab[];
            /**
             * true로 설정하면 탭이 초기화될 때 탭과 탭 콘텐츠를 랜덤으로 보여줍니다. false로 설정하면 첫 번째 탭을 보여줍니다.
             *
             * > 탭 옵션 중 active 옵션이 true로 설정되어 있으면 active 옵션이 먼저 적용됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            randomSel?: boolean;
            /**
             * 탭 옵션에 url 옵션을 설정하여 다른 페이지를 로드할 경우 탭 콘텐츠의 Controller(N.cont) object에서 Tab 인스턴스를 생성한 부모페이지의 Controller object를 참조하기 위한 옵션입니다.
             *
             * Tab 인스턴스 생성 시 opener 옵션에 Controller object를 지정하면 탭 콘텐츠 페이지의 Controller object의 opener 속성으로 전달됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            opener?: NA.Objects.Controller.Object | null;
            /**
             * 탭이 활성화될 때마다 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onActive: function(tabIdx, tabEle, contentEle, tabEles, contentEles) {
             *     // this: Tab 인스턴스
             *     // tabIdx: 활성화된 탭의 Index
             *     // tabEle: 활성화된 탭의 요소
             *     // contentEle: 활성화된 탭의 콘텐츠 요소
             *     // tabEles: 전체 탭 요소
             *     // contentEles: 전체 콘텐츠 요소
             * }
             * ```
             * > 탭 콘텐츠가 처음 로딩될 경우 Controller object의 init 함수가 실행된 다음 onActive 함수가 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            onActive?: NU.EventHandlers.Tab.OnActive | null;
            /**
             *
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            onLoad?: NU.EventHandlers.Tab.OnLoad | null;
            /**
             * 탭 콘텐츠 로딩이 완료되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onLoad: function(tabIdx, tabEle, contentEle, cont) {
             *     // this: Tab 인스턴스
             *     // tabIdx: 활성화된 탭의 Index
             *     // tabEle: 활성화된 탭의 요소
             *     // contentEle: 활성화된 탭의 콘텐츠 요소
             *     // cont: 로딩된 탭 콘텐츠의 Controller object
             * }
             * ```
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            blockOnActiveWhenCreate?: boolean;
            /**
             * true로 설정하면 마우스 드래그나 터치 또는 처음 / 마지막 버튼으로 탭들을 스크롤할 수 있습니다.
             *
             * 처음 / 마지막 버튼으로 탭들을 스크롤하려면 ul 태그 처음과 마지막 자식 요소로 a 태그와 span 태그를 작성해 주면 됩니다.
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
             * ````
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            tabScroll?: boolean;
            /**
             * 탭 요소에 영향을 주는 스타일(CSS)에 의해 마지막 탭이 잘리거나 여백이 생길 수 있습니다. 이때 tabScrollCorrection 객체의 속성으로 다음 옵션 값들을 조절하여 정상적으로 표시되게 할 수 있습니다.
             *  - tabContainerWidthCorrectionPx: 마지막 탭이 잘리거나 여백이 생겼을 때 1씩 증감하여 탭의 모양을 보정할 수 있는 옵션입니다.
             *  - tabContainerWidthReCalcDelayTime: 탭이 처음 표시될 때 탭이 잘리거나 여백이 생겼을 때 1씩 증감해서 탭의 모양을 보정할 수 있는 옵션입니다.
             * ```
             * N("#tab").tab({
             *     tabScrollCorrection: {
             *         tabContainerWidthCorrectionPx: 1,
             *         tabContainerWidthReCalcDelayTime: 0
             *     }
             * });
             * ```
             * [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html)의 N.context.attr("ui").tab 프로퍼티에 tabScrollCorrection 옵션을 설정하면 전체 Tab 컴포넌트에 적용됩니다.
             *
             * @default { tabContainerWidthCorrectionPx: 0, tabContainerWidthReCalcDelayTime: 0 }
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0405.html&tab=html/naturaljs/refr/refr040504.html }
             */
            tabScrollCorrection?: {
                tabContainerWidthCorrectionPx?: number;
                tabContainerWidthReCalcDelayTime?: number;
            }
        };

        type Select = {
            /**
             * Select에 바인딩할 데이터를 지정합니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            data?: NJS<NC.JSONObject>;
            /**
             * Select를 적용할 context 요소를 지정합니다.
             *
             * Select의 context 요소는 반드시 select 나 input[type=checkbox], input[type=radio] 태그로 작성해야 합니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 선택 요소의 name 속성에 바인딩될 데이터의 프로퍼티명을 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            key?: string;
            /**
             * 선택 요소의 value 속성에 바인딩될 데이터의 프로퍼티명을 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            val?: string;
            /**
             * false로 설정하면 select 요소에서 기본 option 들을 비우고 나서 데이터를 바인딩합니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            append?: boolean;
            /**
             * context가 input[type=checkbox]이나 input[type=radio] 일 경우 선택 요소의 배치 방향을 설정합니다.
             *  - h: 가로
             *  - v: 세로
             *
             * @default "h"
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            type?: 0 | 1 | 2 | 3 | 4;
            /**
             * radio 나 checkbox 일때 기본 템플릿 요소의 인스턴스가 할당되어있는 변수 입니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0406.html&tab=html/naturaljs/refr/refr040604.html }
             */
            template?: NJS<HTMLElement[]> | null;
        };

        type Form = {
            /**
             * Form에 바인딩할 데이터를 지정합니다.
             *
             * Form은 단일 데이터를 표현하는 컴포넌트이지만 바인딩되는 데이터는 json object array 타입입니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            data?: NJS<NC.JSONObject>;
            /**
             * data옵션으로 지정한 목록 데이터에서 폼에 바인딩할 행의 index 값을 입력합니다.
             *
             * 기본값은 –1이지만 값을 입력하지 않으면 0으로 세팅되어 목록 데이터의 첫 번째 행 데이터를 바인딩합니다.
             *
             * @default -1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            row?: number;
            /**
             * Form을 적용할 context 요소를 지정합니다.
             *
             * Form의 context 요소는 table, div, section 등 영역을 표현하는 태그로 작성하면 됩니다.
             *
             * 데이터의 프로퍼티명과 요소의 id 속성 값이 같으면 데이터가 바인딩됩니다.
             *
             * > Natural-JS의 모든 데이터 관련 컴포넌트는 빠른 바인딩 속도를 위해 어쩔 수 없이 id 속성을 사용합니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * false로 설정하면 입력 요소에서 focus-out 되었을 때 입력 값에 대한 유효성 검증을 실행하지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            validate?: boolean;
            /**
             * true로 설정하면 폼에 데이터를 바인딩하거나 생성 한 다음 같은 폼 요소에 다시 데이터를 바인딩하기 전에 unbind 메서드를 자동으로 호출해 주어서 폼 요소를 재 활용할 수 있게 해 줍니다.
             * > 폼의 context 요소는 다시 생성되지 않기 때문에 원칙적으로 add 메서드와 bind 메서드는 용도에 따라 구분해서 사용해야 합니다.
             * 이미 데이터가 바인딩된 폼 요소에 unbind 메서드를 호출해도 완벽하게 이전 상태로 되돌릴 수는 없습니다.
             * 어쩔 수 없는 경우가 아니면 사용을 권장하지 않습니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            autoUnbind?: boolean;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default null
             */
            state?: "add" | "bind" | "revert" | "update" | NJS<NC.JSONObject> | null;
            /**
             * true로 설정하면 data를 bind 할 때 데이터의 HTML이 적용됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            html?: boolean;
            /**
             * true로 설정하면 add 메서드를 호출했을 때 로우 데이터가 데이터 목록의 맨 앞에 추가됩니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            addTop?: boolean;
            /**
             * 대상 요소의 data-format 속성이 아닌 객체 타입으로 format 룰을 지정합니다.
             *
             * > 옵션 오브젝트는 [Formatter 생성자](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030103.html) 의 rules 인수의 설명을 참고해서 작성 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            fRules?: ND.FormatRuleObject | null;
            /**
             * 대상 요소의 data-validate 속성이 아닌 객체 타입으로 유효성 검증 룰을 지정합니다.
             *
             * > 옵션 오브젝트는 [Validator 생성자](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030203.html) 의 rules 인수의 설명을 참고해서 작성 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            vRules?: ND.ValidationRuleObject | null;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            extObj?: NU.List | NU.Grid | null;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default -1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            extRow?: number;
            /**
             * true로 설정하면 revert 기능이 활성화되고 revert 메서드를 사용할 수 있습니다.
             *
             * > revert 기능이 활성화되면 최초 바인딩된 데이터가 메모리에 적제되므로 메모리 사용량이 증가합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            revert?: boolean;
            /**
             * true 로 설정하면 요소 검색을 캐싱하여 성능이 조금 개선 됩니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            cache?: boolean;
            /**
             * true로 설정하면 unbind 기능이 활성화되고 unbind 메서드를 사용할 수 있습니다.
             * > unbind 기능이 활성화되면 최초 바인딩된 데이터가 메모리에 적제되므로 메모리 사용량이 증가합니다.
             *
             * > 폼의 context 요소는 다시 생성되지 않기 때문에 원칙적으로 add 메서드와 bind 메서드는 용도에 따라 구분해서 사용해야 합니다. 이미 데이터가 바인딩된 폼 요소에 unbind 메서드를 호출해도 완벽하게 이전 상태로 되돌릴 수는 없습니다. 어쩔 수 없는 경우가 아니면 사용을 권장하지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            unbind?: boolean;
            /**
             * true로 설정하면 컴포넌트 초기화 전에 입력 요소에 바인딩되어 있는 이벤트와 format, validate, dataSync 등의 컴포넌트 이벤트의 충돌을 방지해 줍니다.
             *
             * > format이 정상적으로 동작하지 않거나 바인딩되어 있는 데이터가 의도한 대로 핸들링되지 않을 때, 알 수 없는 오류가 발생했을 때 true로 설정 바랍니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            tpBind?: boolean;
            /**
             * 데이터 프로퍼티 값이 요소에 바인딩되기 전에 실행되는 이벤트 핸들러를 정의합니다.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html)에 전역 옵션으로 설정할 경우 Form을 사용하는 모든 컴포넌트(Grid, List)들에서도 적용됩니다.
             * onBeforeBindValue 이벤트를 사용하면 Form, Grid, List 로 바인딩 할 모든 값들과 요소들을 한번에 핸들링할 수 있습니다.
             *
             * > onBeforeBindValue 이벤트를 N.config에 전역 이벤트 옵션으로 설정하면 컴포넌트 초기화 시 정의 한 onBeforeBindValue 이벤트 핸들러의 결괏값이 전역 이벤트 핸들러의 val(arguments[1]) 인수로 지정됩니다. 때문에 다른 이벤트들처럼 전역으로 설정한 이벤트 핸들러를 컴포넌트 이벤트에서 중단할 수 없습니다.
             * ```
             * onBeforeBindValue: function(ele, val, action) {
             *     // this: Form 인스턴스
             *     // ele: 바인딩될 요소
             *     // val: 바인딩될 값
             *     // action: Form 인스턴스의 메서드 명 - "bind" | "val"
             *     return val; // 반드시 처리된 값을 다시 리턴해야 합니다.
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            onBeforeBindValue?: NU.EventHandlers.Form.OnBeforeBindValue | null;
            /**
             * 데이터 프로퍼티 값이 요소에 바인딩된 후에 실행되는 이벤트 핸들러를 정의합니다.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html)에 전역 옵션으로 설정할 경우 Form을 사용하는 모든 컴포넌트(Grid, List)들에서도 적용됩니다.
             * onBindValue 이벤트를 사용하면 Form, Grid, List 로 바인딩 한 모든 값들과 요소들을 한번에 핸들링할 수 있습니다.
             * ```
             * onBindValue: function(ele, val, action) {
             *     // this: Form 인스턴스
             *     // ele: 바인딩된 요소
             *     // val: 바인딩된 값
             *     // action: Form 인스턴스의 메서드 명 - "bind" | "val"
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            onBindValue?: NU.EventHandlers.Form.OnBindValue | null;
            /**
             * 폼에 데이터가 바인딩되기 전에 실행되는 이벤트 핸들러를 정의합니다.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html)에 전역 옵션으로 설정할 경우 Form을 사용하는 모든 컴포넌트(Grid, List)들에서도 적용됩니다.
             * ```
             * onBeforeBind: function(context, rowData) {
             *     // this: Form 인스턴스
             *     // context: context 요소
             *     // rowData: 폼에 바인딩될 데이터
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            onBeforeBind?: NU.EventHandlers.Form.OnBeforeBind | null;
            /**
             * 데이터가 바인딩이 완료된 후에 실행되는 이벤트 핸들러를 정의합니다.
             *
             * > [Config(natural.config.js)](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0102.html&tab=html/naturaljs/refr/refr010205.html)에 전역 옵션으로 설정할 경우 Form을 사용하는 모든 컴포넌트(Grid, List)들에서도 적용됩니다.
             * ```
             * onBind: function(context, rowData) {
             *     // this: Form 인스턴스
             *     // context: context 요소
             *     // rowData: 바인딩된 데이터
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            onBind?: NU.EventHandlers.Form.OnBind | null;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0407.html&tab=html/naturaljs/refr/refr040704.html }
             */
            InitialData?: NJS<NC.JSONObject>;
        };

        type List = {
            /**
             * List에 바인딩할 데이터를 지정합니다.
             *
             * List의 context 요소는 반드시 ul과 li 태그로 작성해야 합니다.
             *
             * 행 데이터의 프로퍼티명과 요소의 id 속성 값이 같으면 데이터가 바인딩됩니다.
             *
             * > Natural-JS의 모든 데이터 관련 컴포넌트는 빠른 바인딩 속도를 위해 어쩔 수 없이 id 속성을 사용합니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            data?: NJS<NC.JSONObject>;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default -1
             */
            row?: number;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default -1
             */
            beforeRow?: number;
            /**
             * List를 적용할 context 요소를 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 리스트 body의 높이를 지정합니다.
             *
             * 설정한 값이 0보다 크면 리스트 바디에 스크롤바가 생기면서 설정한 높이로 고정됩니다. 0으로 설정하면 모든 데이터를 리스트 바디에 보여 줍니다.
             *
             * > Pagination(Pagination) 컴포넌트와 결합하여 페이징 된 데이터를 List에 바인딩할 때는 0으로 설정하여 모든 데이터를 한번에 표시하는 것을 권장합니다.
             *
             * @default 0
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            height?: number;
            /**
             * false로 설정하면 입력 요소에서 focus-out 되었을 때 입력 값에 대한 유효성 검증을 실행하지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            validate?: boolean;
            /**
             * true로 설정하면 data를 bind 할 때 데이터의 HTML이 적용됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            html?: boolean;
            /**
             * true로 설정하면 add 메서드를 호출했을 때 행 요소와 로우 데이터가 목록의 맨 앞에 추가됩니다.
             *
             * > addTop 옵션을 false로 설정하면 데이터 동기화 문제가 발생하여 scrollPaging.size와 createRowDelay 옵션의 설정 값이 0으로 강제 설정됩니다. 이로 인해 데이터 바인딩 성능이 저하될 수 있습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            addTop?: boolean;
            /**
             * true로 설정하면 add 메서드를 호출했을 때 추가된 행이 자동으로 선택됩니다.
             *
             * > select 옵션이 true로 설정되어 있어야 합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            addSelect?: boolean;
            /**
             * true로 설정하면 리스트 바디의 높이를 마우스로 조절할 수 있습니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            vResizable?: boolean;
            /**
             * true로 설정하면 데이터 목록 요소 위에서 마우스 휠로 스크롤할 때 브라우저의 윈도우 스크롤을 비활성화합니다.
             *
             * 데이터 목록 요소가 처음이나 마지막으로 스크롤되었을 때 브라우저 윈도우 스크롤이 위나 아래로 스크롤되는 브라우저의 기본 동작을 차단합니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            windowScrollLock?: boolean;
            /**
             * true로 설정하면 행을 선택(단일 행 선택)했을 때 onSelect 이벤트가 발생하고 행 요소(tbody)의 class 속성에 list_selected__ 값이 토글 됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            select?: boolean;
            /**
             * false로 설정하면 select 옵션이 true 일 때 선택된 행을 다시 선택해도 선택이 취소되지 않습니다.
             *
             * > multiselect 옵션이 true 일 경우에는 unselect 옵션이 적용되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            unselect?: boolean;
            /**
             * true로 설정하면 행을 선택(다중 행 선택)했을 때 onSelect 이벤트가 발생하고 행 요소(tbody)의 class 속성에 list_selected__ 값이 토글 됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            multiselect?: boolean;
            /**
             * checkAllTarget 옵션으로 지정한 모든 체크박스를 선택하기 위한 input[type=checkbox] 요소를 지정합니다.
             *
             * > Grid와 달리 jQuery selector 문자열로 지정하지 않고 정확하게 해당 요소가 선택된 jQuery object 타입으로 지정해야 합니다.
             *
             * > 체크박스를 체크만 하고 클릭 이벤트를 발생시키지 않습니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            checkAll?: JQuery.Selector;
            /**
             * 리스트의 행을 다중 선택하기 위한 input[type=checkbox] 요소를 지정합니다.
             *
             * 지정된 요소는 check 함수로 선택된 행의 인덱스를 가져오거나 선택할 수 있습니다.
             *
             * > checkSingleTarget 대상 요소는 반드시 li 요소 안에 있어야 합니다.
             *
             * > jQuery selector 구문으로 지정하며 selector의 context는 리스트의 행 요소(li)로 자동 지정됩니다.
             *
             * > checkAllTarget 옵션과 checkSingleTarget 옵션은 둘 중 하나만 사용할 수 있습니다.
             *
             * > 체크박스에 id 속성을 설정하여 데이터를 바인딩하면 제대로 작동하지 않을 수 있습니다. 선택된 행의 인덱스를 가져오는 용도로만 사용 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            checkAllTarget?: JQuery.Selector;
            /**
             * 리스트의 행을 단일 선택하기 위한 input[type=checkbox] 요소를 지정합니다.
             *
             * 지정된 요소는 check 함수로 선택된 행의 인덱스를 가져오거나 선택할 수 있습니다.
             *
             * > checkSingleTarget 대상 요소는 반드시 li 요소 안에 있어야 합니다.
             *
             * > jQuery selector 구문으로 지정하며 selector의 context는 리스트의 행 요소(li)로 자동 지정됩니다.
             *
             * > checkAllTarget 옵션과 checkSingleTarget 옵션은 둘 중 하나만 사용할 수 있습니다.
             *
             * > 체크박스에 id 속성을 설정하여 데이터를 바인딩하면 제대로 작동하지 않을 수 있습니다. 선택된 행의 인덱스를 가져오는 용도로만 사용 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            checkSingleTarget?: JQuery.Selector;
            /**
             * true로 설정하면 행에 마우스가 over 되었을 때 행 요소에 "list_hover__" 클래스 속성 값이 추가되고 out 되면 추가된 클래스 속성 값이 제거됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            hover?: boolean;
            /**
             * true로 설정하면 revert 기능이 활성화되고 revert 메서드를 사용할 수 있습니다.
             *
             * > revert 기능이 활성화되면 최초 바인딩된 데이터가 메모리에 적제되므로 메모리 사용량이 증가합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            revert?: boolean;
            /**
             * 1 이상으로 설정하면 바인딩할 때 리스트의 각 행이 별도로 생성됩니다.
             * 이때 다음 행이 생성되기까지의 시간 간격을 설정합니다.
             *
             * > 0으로 설정하면 모든 행을 한번에 생성하여 데이터를 바인딩하는 동안 브라우저가 멈출 수도 있습니다.
             *
             * @default 1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            createRowDelay?: number;
            /**
             * 스크롤 페이징 할 때 한번에 바인딩할 행 수를 지정합니다.
             *
             * List는 스크롤 페이징 기능이 기본적으로 활성화되며 0을 지정하면 스크롤 페이징 기능이 비활성화됩니다.
             *
             * size 옵션 값은 다음과 같이 scrollPaging 옵션 객체의 하위 속성으로 지정해야 합니다.
             * ```
             * ...
             *     scrollPaging: {
             *         size: 50
             *     }
             * ...
             * ```
             * > 너무 작게 지정하면 스크롤이 생성되지 않아 데이터가 모두 표시되지 않습니다. 반드시 행들이 리스트 바디를 넘칠 수 있는 양을 지정해 주어야 합니다.
             *
             * > 너무 크게 지정하면 스크롤 페이징이 작동될 때 브라우저에 부하가 발생되므로 리스트에 입력 요소나 이미지가 들어 있다면 100 이하로 설정하고 그렇지 않다면 1000 이하로 설정하는 것을 권장합니다.
             *
             * @default { idx: 0, size: 100 }
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            scrollPaging?: {
                idx?: number;
                size?: number;
            };
            /**
             * 대상 요소의 data-format 속성이 아닌 객체 타입으로 format 룰을 지정합니다.
             *
             * > 옵션 오브젝트는 [Formatter 생성자](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030103.html) 의 rules 인수의 설명을 참고해서 작성 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            fRules?: ND.FormatRuleObject | null;
            /**
             * 대상 요소의 data-validate 속성이 아닌 객체 타입으로 유효성 검증 룰을 지정합니다.
             *
             * > 옵션 오브젝트는 [Validator 생성자](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030203.html) 의 rules 인수의 설명을 참고해서 작성 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            vRules?: ND.ValidationRuleObject | null;
            /**
             * false로 설정하면 두 번째 인수에 "append" 옵션을 지정하여 bind 메서드를 호출했을 때 append 된 행으로 자동 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            appendScroll?: boolean;
            /**
             * false로 설정하면 add 메서드를 호출했을 때 추가된 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            addScroll?: boolean;
            /**
             * false로 설정하면 select 메서드를 호출했을 때 선택된 마지막 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            selectScroll?: boolean;
            /**
             * false로 설정하면 check 메서드를 호출했을 때 체크된 마지막 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            checkScroll?: boolean;
            /**
             * false로 설정하면 validate 메서드를 호출했을 때 유효성 검증에 실패 한 마지막 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            validateScroll?: boolean;
            /**
             * true 로 설정하면 요소 검색을 캐싱하여 성능이 조금 개선 됩니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            cache?: boolean;
            /**
             * true로 설정하면 컴포넌트 초기화 전에 입력 요소에 바인딩되어 있는 이벤트와 format, validate, dataSync 등의 컴포넌트 이벤트의 충돌을 방지해 줍니다.
             *
             * > format이 정상적으로 동작하지 않거나 바인딩되어 있는 데이터가 의도한 대로 핸들링되지 않을 때, 알 수 없는 오류가 발생했을 때 true로 설정 바랍니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            tpBind?: boolean;
            /**
             * bind 하거나 add 했을 때 생성된 행 요소에 데이터가 바인딩되기 전에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * rowHandlerBeforeBind: function(rowIdx, rowEle, rowData) {
             *     // this: List 인스턴스
             *     // rowIdx: 생성된 행 index
             *     // rowEle: 생성된 행 요소(li)
             *     // rowData: 생성될 행의 Data
             * }
             * ```
             * > rowHandlerBeforeBind 이벤트 핸들러는 행 요소가 생성될 때마다 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            rowHandlerBeforeBind?: NU.EventHandlers.List.RowHandlerBeforeBind | null;
            /**
             * bind 하거나 add 했을 때 생성된 행 요소에 데이터가 바인딩된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * rowHandler: function(rowIdx, rowEle, rowData) {
             *     // this: List 인스턴스
             *     // rowIdx: 생성된 행 index
             *     // rowEle: 생성된 행 요소(li)
             *     // rowData: 생성된 행의 Data
             * }
             * ```
             * > rowHandler 이벤트 핸들러는 행 요소가 생성될 때마다 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            rowHandler?: NU.EventHandlers.List.RowHandler | null;
            /**
             * 행이 선택 되기전에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onBeforeSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: List 인스턴스
             *     // rowIdx: 선택된 행 index
             *     // rowEle: 선택된 행 요소(li)
             *     // rowData: 선택된 행 data
             *     // beforeRowIdx: 바로 전에 선택된 행의 index
             *     // e: click 이벤트 객체
             * }
             * ```
             * > onBeforeSelect 이벤트 핸들러에서 false 를 반환하면 행이 선택되지 않습니다. 이때 onSelect 이벤트는 onBeforeSelect 이벤트와 같은 조건으로 실행 됩니다.
             *
             * > select 나 multiselect 옵션이 true로 설정되었을 경우에만 실행됩니다.
             *
             * > unselect 옵션이 false로 설정되었을 경우 선택이 해제되면 rowIdx 인수 값에 -1을 반환하고 선택되면 선택된 행의 인덱스를 반환합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            onBeforeSelect?: NU.EventHandlers.List.OnBeforeSelect | null;
            /**
             * 행이 선택된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: List 인스턴스
             *     // rowIdx: 선택된 행 index
             *     // rowEle: 선택된 행 요소(li)
             *     // rowData: 선택된 행 data
             *     // beforeRowIdx: 바로 전에 선택된 행의 index
             *     // e: click 이벤트 객체
             * }
             * ```
             * > select 나 multiselect 옵션이 true로 설정되었을 경우에만 실행됩니다.
             *
             * > unselect 옵션이 false로 설정되었을 경우 선택이 해제되면 rowIdx 인수 값에 -1을 반환하고 선택되면 선택된 행의 인덱스를 반환합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            onSelect?: NU.EventHandlers.List.OnSelect | null;
            /**
             * 데이터가 바인딩이 완료된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onBind: function(context, data, isFirstPage, isLastPage) {
             *     // this: List 인스턴스
             *     // context: context 요소
             *     // data: 바인딩된 데이터
             *     // isFirstPage: 스크롤 페이징 할 때 첫 페이지인지 여부(스크롤 페이징 하지 않으면 true 반환)
             *     // isLastPage: 스크롤 페이징 할 때 마지막 페이지 인지 여부(스크롤 페이징 하지 않으면 true 반환)
             * }
             * ```
             * > 스크롤 페이징이 활성화되었을 경우 페이징 된 데이터가 바인딩될 때마다 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0408.html&tab=html/naturaljs/refr/refr040804.html }
             */
            onBind?: NU.EventHandlers.List.OnBind | null;
        };

        type GridMisc = {
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
        };

        type Grid = {
            /**
             * Grid에 바인딩할 데이터를 지정합니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            data?: NJS<NC.JSONObject>;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default -1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            row?: number;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default -1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            beforeRow?: number;
            /**
             * Grid를 적용할 context 요소를 지정합니다.
             *
             * Grid의 context 요소는 반드시 table 태그로 작성해야 합니다.
             *
             *  - thead - Grid header
             *    - 그리드의 컬럼 타이틀을 작성합니다.
             *    - thead의 셀은 th 태그를 사용합니다.
             *    - header가 필요 없으면 작성하지 않아도 되지만 헤더에서 구동되는 sortable 나 filter 등의 옵션은 사용할 수 없습니다.
             *    - thead 태그 안에 tr 태그를 여러 개 작성할 수 있습니다.
             *  - tbody - Grid body
             *    - 행을 표현하는 최상위 요소는 tbody이고 목록 데이터의 길이만큼 tbody가 복제됩니다.
             *    - tbody의 셀은 td 태그를 사용합니다.
             *    - 행 데이터의 프로퍼티명과 요소의 id 속성 값이 같으면 데이터가 바인딩됩니다.
             *      > Natural-JS의 모든 데이터 관련 컴포넌트는 빠른 바인딩 속도를 위해 어쩔 수 없이 id 속성을 사용합니다.
             *
             *      > 1개의 셀(td) 안에 2개 이상의 컬럼 데이터를 바인딩하려면 셀안에 요소를 2개 이상 만들고 id 속성 값을 추가해 주면 됩니다.
             *      이때 thead의 th에 data-id 속성 값에 정렬/필터 등의 기준이 되는 데이터 프로퍼티명을 설정해 주어야 합니다.
             *
             *    - tbody 태그 안에 tr 태그를 여러 개 작성하여 행 그룹을 만들 수 있습니다.
             *  - tfoot - Grid footer
             *    - Grid footer가 필요 없으면 작성하지 않아도 됩니다.
             *    - tfoot의 셀은 td 태그를 사용합니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 그리드 body의 높이를 지정합니다.
             *
             * 설정한 값이 0보다 크면 헤더가 고정되고 그리드 바디에 스크롤바가 생기면서 설정한 높이로 고정됩니다. 0으로 설정하면 헤더를 고정하지 않고 모든 데이터를 그리드 바디에 보여 줍니다.
             *
             * > Pagination(Pagination) 컴포넌트와 결합하여 페이징 된 데이터를 List에 바인딩할 때는 0으로 설정하여 모든 데이터를 한번에 표시하는 것을 권장합니다.
             *
             * @default 0
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            height?: number;
            /**
             * 지정한 열들은 고정되고 다른 열 들은 가로로 스크롤될 수 있게 해 줍니다.
             *
             * 0으로 설정하면 열을 고정하지 않고 1 이상의 숫자로 설정하면 첫 번째 열부터 설정한 숫자(열 개수)만큼 열을 고정해 줍니다.
             *
             * > 헤더(thead) 영역은 반드시 있어야 하고 푸터(tfoot) 영역은 없어야 합니다.
             *
             * > 그리드의 헤더나 바디가 2행 이상의 세트로 구성되어 있거나 height 옵션이 0보다 크면 작동하지 않습니다.
             *
             * > 고정된 셀들이 비 정상적으로 표시되면 misc.fixedcolHeadMarginTop, misc.fixedcolHeadMarginLeft, misc.fixedcolHeadHeight, misc.fixedcolBodyMarginTop, misc.fixedcolBodyMarginLeft, fixedcolBodyBindHeight, fixedcolBodyAddHeight 옵션 값 들을 조절해 주세요.
             *
             * @default 0
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            fixedcol?: number;
            /**
             * true로 설정하면 컬럼을 숨기거나 보이게 할 수 있는 기능과 상세 팝업을 자동으로 생성해 주는 기능이 활성화됩니다.
             *
             * 그리드의 마지막 열 다음에 위의 기능을 실행하는 버튼을 생성해 줍니다.
             *
             * true로 설정하면 그리드 헤더에 정의되어 있는 모든 컬럼들을 모두 상세 팝업에 보여주고 array에 컬럼 명 들을 지정하여 옵션으로 설정하면 지정한 컬럼들만 보여 줍니다.
             *
             * > 컬럼들의 제목은 그리드 헤더의 제목 텍스트를 그대로 사용하기 때문에 그리드 헤더에 정의되어 있지 않은 컬럼은 표시되지 않습니다. 그리드 헤더에 없는 컬럼을 상세 팝업에 표시하려면 그리드에 컬럼을 추가하고 그리드를 초기화 한 다음 hide 메서드로 추가한 컬럼을 숨기면 상세 팝업에서만 볼 수 있습니다.
             *
             * > fixedcol 옵션으로 열이 고정된 경우 컬럼 숨기기/보이기 기능이 제대로 작동하지 않을 수 있습니다.
             *
             * > 상세 팝업의 컬럼 타이틀 정보는 tbody의 td 나 td 안에 있는 요소들의 id 값을 기준으로 추출됩니다. 그러나 tbody의 td 안에 id 속성을 가진 요소가 2개 이상 존재하거나 그리드 헤더와 바디의 요소 구성이 많이 다를 경우에는 제대로 추출이 되지 않을 수 있습니다. 이때는 th 요소의 data-id 속성에 추출될 컬럼명을 선언해 주면 정상적으로 작동됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            more?: boolean | string[];
            /**
             * false로 설정하면 입력 요소에서 focus-out 되었을 때 입력 값에 대한 유효성 검증을 실행하지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            validate?: boolean;
            /**
             * true로 설정하면 data를 bind 할 때 데이터의 HTML이 적용됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            html?: boolean;
            /**
             * true로 설정하면 add 메서드를 호출했을 때 행 요소와 로우 데이터가 목록의 맨 앞에 추가됩니다.
             *
             * > addTop 옵션을 false로 설정하면 데이터 동기화 문제가 발생하여 scrollPaging.size와 createRowDelay 옵션의 설정 값이 0으로 강제 설정됩니다.
             * 이로 인해 데이터 바인딩 성능이 저하될 수 있습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            addTop?: boolean;
            /**
             * true로 설정하면 add 메서드를 호출했을 때 추가된 행이 자동으로 선택됩니다.
             *
             * > select 옵션이 true로 설정되어 있어야 합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            addSelect?: boolean;
            /**
             * true로 설정하면 선택 한 컬럼을 기준으로 데이터를 필터링할 수 있습니다.
             *
             * > filter 옵션이 false 인 상태에서 th 요소의 속성으로 data-filter="true" 옵션을 선언해 주면 컬럼 별로 필터 기능을 활성화할 수 있습니다.
             *
             * > 필터링될 컬럼의 정보는 tbody의 td 나 td 안에 있는 요소들의 id 값을 기준으로 필터링됩니다.
             * 그러나 tbody의 td 안에 id 속성을 가진 요소가 2개 이상 존재하거나 그리드 헤더와 바디의 요소 구성이 많이 다를 경우에는 제대로 필터링되지 않을 수 있습니다.
             * 이때는 th 요소의 data-id 속성에 필터링될 컬럼명을 선언해 주면 정상적으로 작동됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            filter?: boolean;
            /**
             * true로 설정하면 컬럼의 넓이를 조절할 수 있습니다.
             *
             * > colgroup의 col 태그를 사용하여 셀의 넓이를 지정했을 때 resizable 옵션이 true 이면 그리드가 초기화될 때 col 태그에 정의되어 있는 셀의 넓이 값을 thead의 th에 이관하고 colgroup 태그를 제거합니다. 때문에 컬럼 리사이징 기능을 사용하려면 col 태그에 넓이를 지정하지 말고 thead의 th에 컬럼 넓이를 설정하는 것을 권장합니다.
             *
             * > thead의 th에 colspan 속성이 있을 경우 컬럼 리사이즈 기능이 제대로 작동하지 않을 수 있습니다.
             *
             * > 컬럼 리사이징 할 때 그리드의 모양이 깨지면 misc.resizableCorrectionWidth, misc.resizableLastCellCorrectionWidth, misc.resizeBarCorrectionLeft, misc.resizeBarCorrectionHeight 옵션 값 들을 조절해 주세요.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            resizable?: boolean;
            /**
             * true로 설정하면 그리드 바디의 높이를 조절할 수 있습니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            vResizable?: boolean;
            /**
             * true로 설정하면 선택 한 컬럼을 기준으로 데이터를 정렬할 수 있습니다.
             *
             * > 정렬될 컬럼의 정보는 tbody의 td 나 td 안에 있는 요소들의 id 값을 기준으로 정렬합니다.
             * 그러나 tbody의 td 안에 id 속성을 가진 요소가 2개 이상 존재하거나 그리드 헤더와 바디의 요소 구성이 많이 다를 경우에는 제대로 정렬이 되지 않을 수 있습니다.
             * 이때는 th 요소의 data-id 속성에 정렬될 컬럼명을 선언해 주면 정상적으로 작동됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            sortable?: boolean;
            /**
             * true로 설정하면 데이터 목록 요소 위에서 마우스 휠로 스크롤할 때 브라우저의 윈도우 스크롤을 비활성화합니다.
             *
             * 데이터 목록 요소가 처음이나 마지막으로 스크롤되었을 때 브라우저 윈도우 스크롤이 위나 아래로 스크롤되는 브라우저의 기본 동작을 차단합니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            windowScrollLock?: boolean;
            /**
             * true로 설정하면 행을 선택(단일 행 선택)했을 때 onSelect 이벤트가 발생하고 행 요소(tbody)의 class 속성에 grid_selected__ 값이 토글 됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            select?: boolean;
            /**
             * false로 설정하면 select 옵션이 true 일 때 선택된 행을 다시 선택해도 선택이 취소되지 않습니다.
             *
             * > multiselect 옵션이 true 일 경우에는 unselect 옵션이 적용되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            unselect?: boolean;
            /**
             * true로 설정하면 행을 선택(다중 행 선택)했을 때 onSelect 이벤트가 발생하고 행 요소(tbody)의 class 속성에 grid_selected__ 값이 토글 됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            multiselect?: boolean;
            /**
             * checkAllTarget 옵션으로 지정한 모든 체크박스를 선택하기 위한 input[type=checkbox] 요소를 지정합니다.
             *
             * > 지정한 요소는 반드시 thead 영역에 있어야 합니다.
             *
             * > jQuery selector 구문으로 지정하며 selector의 context는 그리드의 헤더 요소(thead)로 자동 지정됩니다.
             *
             * > 체크박스를 체크만 하고 클릭 이벤트를 발생시키지 않습니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            checkAll?: JQuery.Selector;
            /**
             * 그리드의 행을 다중 선택하기 위한 input[type=checkbox] 요소를 지정합니다.
             *
             * 지정된 요소는 check 함수로 선택된 행의 인덱스를 가져오거나 선택할 수 있습니다.
             *
             * > checkSingleTarget 대상 요소는 반드시 tbody 요소 안에 있어야 합니다.
             *
             * > jQuery selector 구문으로 지정하며 selector의 context는 그리드의 행 요소(tbody)로 자동 지정됩니다.
             *
             * > checkAllTarget 옵션과 checkSingleTarget 옵션은 둘 중 하나만 사용할 수 있습니다.
             *
             * > 체크박스에 id 속성을 설정하여 데이터를 바인딩하면 제대로 작동하지 않을 수 있습니다. 선택된 행의 인덱스를 가져오는 용도로만 사용 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            checkAllTarget?: JQuery.Selector;
            /**
             * 그리드의 행을 단일 선택하기 위한 input[type=checkbox] 요소를 지정합니다.
             *
             * 지정된 요소는 check 함수로 선택된 행의 인덱스를 가져오거나 선택할 수 있습니다.
             *
             * > checkSingleTarget 대상 요소는 반드시 tbody 요소 안에 있어야 합니다.
             *
             * > jQuery selector 구문으로 지정하며 selector의 context는 그리드의 행 요소(tbody)로 자동 지정됩니다.
             *
             * > checkAllTarget 옵션과 checkSingleTarget 옵션은 둘 중 하나만 사용할 수 있습니다.
             *
             * > 체크박스에 id 속성을 설정하여 데이터를 바인딩하면 제대로 작동하지 않을 수 있습니다. 선택된 행의 인덱스를 가져오는 용도로만 사용 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            checkSingleTarget?: JQuery.Selector;
            /**
             * true로 설정하면 행에 마우스가 over 되었을 때 행 요소에 "list_hover__" 클래스 속성 값이 추가되고 out 되면 추가된 클래스 속성 값이 제거됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            hover?: boolean;
            /**
             * true로 설정하면 revert 기능이 활성화되고 revert 메서드를 사용할 수 있습니다.
             *
             * > revert 기능이 활성화되면 최초 바인딩된 데이터가 메모리에 적제되므로 메모리 사용량이 증가합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            revert?: boolean;
            /**
             * 1 이상으로 설정하면 바인딩할 때 그리드의 각 행이 별도로 생성됩니다. 이때 다음 행이 생성되기까지의 시간 간격을 설정합니다.
             *
             * > 0으로 설정하면 모든 행을 한번에 생성하여 데이터를 바인딩하는 동안 브라우저가 멈출 수도 있습니다.
             *
             * @default 1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            createRowDelay?: number;
            /**
             * 스크롤 페이징 할 때 한번에 바인딩할 행 수를 지정합니다.
             *
             * 헤더 고정형 List는 스크롤 페이징 기능이 기본적으로 활성화되며 0을 지정하면 스크롤 페이징 기능이 비활성화됩니다.
             *
             * size 옵션 값은 다음과 같이 scrollPaging 옵션 객체의 하위 속성으로 지정해야 합니다.
             * ```
             * ...
             *     scrollPaging: {
             *         size: 50
             *     }
             * ...
             * ```
             * > 너무 작게 지정하면 스크롤이 생성되지 않아 데이터가 모두 표시되지 않습니다.
             * 반드시 행들이 그리드 바디를 넘칠 수 있는 양을 지정해 주어야 합니다.
             *
             * > 너무 크게 지정하면 스크롤 페이징이 작동될 때 브라우저에 부하가 발생되므로 그리드에 입력 요소나 이미지가 들어 있다면 100 이하로 설정하고 그렇지 않다면 1000 이하로 설정하는 것을 권장합니다.
             *
             * @default { idx: 0, size: 100 }
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            scrollPaging?: {
                idx?: number;
                size?: number;
            };
            /**
             * 대상 요소의 data-format 속성이 아닌 객체 타입으로 format 룰을 지정합니다.
             *
             * > 옵션 오브젝트는 [Formatter 생성자](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0301.html&tab=html/naturaljs/refr/refr030103.html) 의 rules 인수의 설명을 참고해서 작성 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            fRules?: ND.FormatRuleObject | null;
            /**
             * 대상 요소의 data-validate 속성이 아닌 객체 타입으로 유효성 검증 룰을 지정합니다.
             *
             * > 옵션 오브젝트는 [Validator 생성자](https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0302.html&tab=html/naturaljs/refr/refr030203.html) 의 rules 인수의 설명을 참고해서 작성 바랍니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            vRules?: ND.ValidationRuleObject | null;
            /**
             * alse로 설정하면 두 번째 인수에 "append" 옵션을 지정하여 bind 메서드를 호출했을 때 append 된 행으로 자동 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            appendScroll?: boolean;
            /**
             * false로 설정하면 add 메서드를 호출했을 때 추가된 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            addScroll?: boolean;
            /**
             * false로 설정하면 select 메서드를 호출했을 때 선택된 마지막 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            selectScroll?: boolean;
            /**
             * false로 설정하면 check 메서드를 호출했을 때 체크된 마지막 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            checkScroll?: boolean;
            /**
             * false로 설정하면 validate 메서드를 호출했을 때 유효성 검증에 실패 한 마지막 행으로 스크롤되지 않습니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            validateScroll?: boolean;
            /**
             * true 로 설정하면 요소 검색을 캐싱하여 성능이 조금 개선 됩니다.
             *
             * @default true
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            cache?: boolean;
            /**
             * true로 설정하면 컴포넌트 초기화 전에 입력 요소에 바인딩되어 있는 이벤트와 format, validate, dataSync 등의 컴포넌트 이벤트의 충돌을 방지해 줍니다.
             *
             * > format이 정상적으로 동작하지 않거나 바인딩되어 있는 데이터가 의도한 대로 핸들링되지 않을 때, 알 수 없는 오류가 발생했을 때 true로 설정 바랍니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            tpBind?: boolean;
            /**
             * true로 설정하면 엑셀에서 복사한 셀 데이터를 그리드에 붙여넣기(Ctrl + V)할 수 있습니다.
             *
             * > In addition to data copied from Excel, you can also paste text that separates rows with the Enter key (\n) and columns with the Tab key (\t).
             *
             * > 텍스트 입력 커서가 표시되는 셀을 기준으로 id 속성을 갖고 있는 요소들에 순서대로 붙여 넣기 합니다. 입력 요소가 아닌 경우에도 id 속성이 있으면 셀 값이 업데이트됩니다.
             *
             * > readonly 또는 disabled 속성을 갖고 있는 요소는 값을 입력하지 않습니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            pastiable?: boolean;
            /**
             * bind 하거나 add 했을 때 생성된 행 요소에 데이터가 바인딩되기 전에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * rowHandlerBeforeBind: function(rowIdx, rowEle, rowData) {
             *     // this: Grid 인스턴스
             *     // rowIdx: 생성된 행 index
             *     // rowEle: 생성된 행 요소(li)
             *     // rowData: 생성될 행의 Data
             * }
             * ```
             * > rowHandlerBeforeBind 이벤트 핸들러는 행 요소가 생성될 때마다 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            rowHandlerBeforeBind?: NU.EventHandlers.Grid.RowHandlerBeforeBind | null;
            /**
             * bind 하거나 add 했을 때 생성된 행 요소에 데이터가 바인딩된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * rowHandler: function(rowIdx, rowEle, rowData) {
             *     // this: Grid 인스턴스
             *     // rowIdx: 생성된 행 index
             *     // rowEle: 생성된 행 요소(li)
             *     // rowData: 생성된 행의 Data
             * }
             * ```
             * > rowHandler 이벤트 핸들러는 행 요소가 생성될 때마다 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            rowHandler?: NU.EventHandlers.Grid.RowHandler | null;
            /**
             * 행이 선택 되기전에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onBeforeSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: Grid 인스턴스
             *     // rowIdx: 선택된 행 index
             *     // rowEle: 선택된 행 요소(li)
             *     // rowData: 선택된 행 data
             *     // beforeRowIdx: 바로 전에 선택된 행의 index
             *     // e: click 이벤트 객체
             * }
             * ```
             * > onBeforeSelect 이벤트 핸들러에서 false 를 반환하면 행이 선택되지 않습니다. 이때 onSelect 이벤트는 onBeforeSelect 이벤트와 같은 조건으로 실행 됩니다.
             *
             * > select 나 multiselect 옵션이 true로 설정되었을 경우에만 실행됩니다.
             *
             * > unselect 옵션이 false로 설정되었을 경우 선택이 해제되면 rowIdx 인수 값에 -1을 반환하고 선택되면 선택된 행의 인덱스를 반환합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            onBeforeSelect?: NU.EventHandlers.Grid.OnBeforeSelect | null;
            /**
             * 행이 선택된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onSelect: function(rowIdx, rowEle, rowData, beforeRowIdx, e) {
             *     // this: Grid 인스턴스
             *     // rowIdx: 선택된 행 index
             *     // rowEle: 선택된 행 요소(li)
             *     // rowData: 선택된 행 data
             *     // beforeRowIdx: 바로 전에 선택된 행의 index
             *     // e: click 이벤트 객체
             * }
             * ```
             * > select 나 multiselect 옵션이 true로 설정되었을 경우에만 실행됩니다.
             *
             * > unselect 옵션이 false로 설정되었을 경우 선택이 해제되면 rowIdx 인수 값에 -1을 반환하고 선택되면 선택된 행의 인덱스를 반환합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            onSelect?: NU.EventHandlers.Grid.OnSelect | null;
            /**
             * 데이터가 바인딩이 완료된 후에 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onBind: function(context, data, isFirstPage, isLastPage) {
             *     // this: Grid 인스턴스
             *     // context: context 요소
             *     // data: 바인딩된 데이터
             *     // isFirstPage: 스크롤 페이징 할 때 첫 페이지인지 여부(스크롤 페이징 하지 않으면 true 반환)
             *     // isLastPage: 스크롤 페이징 할 때 마지막 페이지 인지 여부(스크롤 페이징 하지 않으면 true 반환)
             * }
             * ```
             * > 스크롤 페이징이 활성화되었을 경우 페이징 된 데이터가 바인딩될 때마다 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            onBind?: NU.EventHandlers.Grid.OnBind | null;
            /**
             * 기타 상수
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            misc?: NU.Options.GridMisc;
            /**
             * 내부에서 사용되는 변수입니다.
             *
             * @default -1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0409.html&tab=html/naturaljs/refr/refr040904.html }
             */
            currMoveToRow?: number;
        };

        type CurrPageNavInfo = {
            /**
             * Current page number.
             *
             * @default 1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            pageNo: number;
            /**
             * Row count per page.
             *
             * @default 10
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            countPerPage: number;
            /**
             * Page count per page set.
             *
             * @default 10
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            countPerPageSet: number;
            /**
             * Total row count.
             *
             * @default 0
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            totalCount: number;
            /**
             * Total page count.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            pageCount: number;
            /**
             * Total page set count.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            pageSetCount: number;
            /**
             * Current page set number.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            currSelPageSet: number;
            /**
             * First page number in the current page set.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            startPage: number;
            /**
             * Last page number in the current page set.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            endPage: number;
            /**
             * First row index on the selected page.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            startRowIndex: number;
            /**
             * First row number of the selected page.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            startRowNum: number;
            /**
             * Last row index on the selected page.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            endRowIndex: number;
            /**
             * Last row number of the selected page.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            endRowNum: number;
        };
        type Pagination = {
            /**
             * Pagination에 바인딩할 데이터를 지정합니다.
             *
             * > data옵션이 지정되면 totalCount 값이 자동으로 계산되어 설정되므로 totalCount 값을 0으로 설정하거나 설정하지 않아야 합니다.
             *
             * > DB 페이징을 하는 경우 data 옵션을 지정하지 말고 totalCount 값만 서버에서 가져와 설정하기 바랍니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            data?: NJS<NC.JSONObject>;
            /**
             * Pagination을 적용할 context 요소를 지정합니다.
             *
             * Pagination의 context 요소는 반드시 div 태그 안에 ul, li 태그로 작성해야 합니다.
             *
             *  - 처음 페이지, 마지막 페이지, 이전 페이지, 다음 페이지
             *    - ul 태그의 li 태그에 a 태그를 넣어서 작성합니다.
             *    - 처음 페이지와 이전 페이지 요소, 마지막 페이지와 다음 페이지 요소는 ul 태그를 분리하여 작성합니다.
             *    - 처음 페이지, 마지막 페이지 링크와 관련된 태그들을 작성하지 않으면 관련 기능이 비활성화됩니다.
             *  - 페이지 인덱스
             *    - ul 태그의 li 태그에 a 태그를 넣어서 작성합니다.
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
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * Total row count.
             *
             * > DB 페이징을 하는 경우 data 옵션을 지정하지 말고 totalCount 값만 서버에서 가져와 설정하기 바랍니다.
             *
             * @default 0
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            totalCount?: number;
            /**
             * Row count per page.
             *
             * @default 10
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            countPerPage?: number;
            /**
             * Page count per page set.
             *
             * @default 10
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            countPerPageSet?: number;
            /**
             * Pagination을 초기화한 다음 최초로 표시할 페이지의 번호를 설정합니다.
             *
             * @default 1
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            pageNo?: number;
            /**
             * 페이지가 전환될 때 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onChange: function(pageNo, selEle, selData, currPageNavInfo) {
             *     // this: Pagination 인스턴스
             *     // pageNo: 페이지 번호
             *     // selEle: 선택된 페이지 이동 요소
             *     // selData: 선택된 페이지의 데이터 목록
             *     // currPageNavInfo: 이벤트가 발생했을 때의 페이지 정보
             * }
             * ```
             * currPageNavInfo 객체 정보
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
             * DB 페이징을 하는 경우 서버에서 totalCount 값을 먼저 가져온 다음 onChange 이벤트 핸들러의 currPageNavInfo 인수 값을 서버에 파라미터로 전송하여 페이징 된 데이터를 조회할 수 있습니다.
             *
             * 이 페이징 된 데이터를 onChange 이벤트에서 Grid 나 List에 페이지가 바뀔 때마다 바인딩해 주면 됩니다.
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
             * > blockOnChangeWhenBind 옵션이 true로 설정되어있을 경우 페이징 버튼들을 클릭할 때만 이벤트가 실행됩니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            onChange?: NU.EventHandlers.Pagination.OnChange | null;
            /**
             * true로 설정하면 bind 메서드를 호출할 때 onChange 이벤트를 실행하지 않습니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            blockOnChangeWhenBind?: boolean;
            /**
             * 페이징 상태정보 객체가 할당되어있는 변수 입니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0410.html&tab=html/naturaljs/refr/refr041004.html }
             */
            currPageNavInfo?: NU.Options.CurrPageNavInfo | null;
        };

        type Tree = {
            /**
             * Tree에 바인딩할 데이터를 지정합니다.
             *
             * @default undefined
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            data?: NJS<NC.JSONObject>;
            /**
             * Tree를 적용할 요소를 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            context?: NJS<HTMLElement[]>;
            /**
             * 노드 명으로 표시될 데이터의 프로퍼티명을 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            key?: string;
            /**
             * 노드 값으로 설정될 데이터의 프로퍼티명을 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            val?: string;
            /**
             * 노드 레벨로 설정될 데이터의 프로퍼티명을 지정합니다.
             *
             * > level 옵션은 필수 옵션이 아니지만 지정하면 트리 렌더링 속도가 더 빨라집니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            level?: string;
            /**
             * 부모노드 값으로 설정될 데이터의 프로퍼티명을 지정합니다.
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            parent?: string;
            /**
             * true로 설정하면 폴더 노드를 선택할 수 있습니다.
             *
             * > 옵션 값이 true 이면 [+]아이콘을 클릭하여 폴더를 확장할 수 있고 노드명을 클릭하면 노드가 선택됩니다.
             * 옵션 값이 false 이면 폴더 노드명을 클릭했을 때 폴더가 선택되지 않고 폴더를 확장합니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            folderSelectable?: boolean;
            /**
             * true로 설정하면 체크박스가 노드명 앞에 추가됩니다.
             *
             * > 체크박스가 체크되면 하위 노드들이 모두 체크되고 onCheck 이벤트 핸들러가 실행됩니다.
             *
             * @default false
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            checkbox?: boolean;
            /**
             * 노드가 선택되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             * ```
             * onSelect: function(selNodeIndex, selNodeEle, selNodeData) {
             *     // this: Tree 인스턴스
             *     // selNodeIndex: 선택된 노드의 index
             *     // selNodeEle: 선택된 노드의 요소
             *     // selNodeData: 선택된 노드의 row data
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            onSelect?: NU.EventHandlers.Tree.OnSelect | null;
            /**
             * 노드가 체크되었을 때 실행되는 이벤트 핸들러를 정의합니다.
             *
             * ```
             * onCheck: function(selNodeIndex, selNodeEle, selNodeData
             *                     , checkedElesIndexes, checkedEles, checkedElesData
             *                     , checkFlag) {
             *     // this: Tree 인스턴스
             *     // selNodeIndex: 선택된 노드의 index
             *     // selNodeEle: 선택된 노드의 요소
             *     // selNodeData: 선택된 노드의 row data
             *     // checkedElesIndexes: 체크된 노드들의 index
             *     // selNodeEle: 체크된 노드들의 요소
             *     // selNodeData: 체크된 노드들의 row data
             *     // checkFlag: 체크 여부
             * }
             * ```
             *
             * @default null
             *
             * @see {@link https://bbalganjjm.github.io/natural_js/?page=html/naturaljs/refr/refr0411.html&tab=html/naturaljs/refr/refr041104.html }
             */
            onCheck?: NU.EventHandlers.Tree.OnCheck | null;
        };

    }

    namespace EventHandlers {
        namespace Alert {
            type Width = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type Height = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type OnOk = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnCancel = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnBeforeShow = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnShow = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeHide = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnHide = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeRemove = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnRemove = {
                (this: NU.Alert, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
        }
        namespace Button {
            type OnBeforeCreate = {
                (this: NU.Button, context: NJS<HTMLElement[]>, opts: NU.Options.Button): void;
            }
            type OnCreate = {
                (this: NU.Button, context: NJS<HTMLElement[]>, opts: NU.Options.Button): void;
            }
        }
        namespace Datepicker {
            type OnChangeYear = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selYearStr: string, e: JQuery.Event): void;
            }
            type OnChangeMonth = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selMonthStr: string, selYearStr: string, e: JQuery.Event): void;
            }
            type OnSelect = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, selDate: NC.Date, monthonly: boolean): void;
            }
            type OnBeforeShow = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): undefined | false;
            }
            type OnShow = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            type OnBeforeHide = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            type OnHide = {
                (this: NU.Datepicker, context: NJS<HTMLElement[]>): void;
            }
        }
        namespace Popup {
            type Width = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type Height = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): number;
            }
            type OnOk = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnCancel = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): undefined | 0;
            }
            type OnBeforeShow = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnShow = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeHide = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnHide = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnBeforeRemove = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnRemove = {
                (this: NU.Popup, msgContext?: NJS<HTMLElement[]>, msgContents?: NJS<HTMLElement[]>): void;
            }
            type OnOpen = {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
            type OnClose = {
                (this: NU.Popup, onCloseData?: any): void;
            }
            type OnLoad = {
                (this: NU.Popup, cont: NA.Objects.Controller.Object): void;
            }
        }
        namespace Tab {
            type OnOpen = {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
            type OnActive = {
                (this: NU.Tab, selTabIdx: number, selTabEle: NJS<HTMLElement[]>, selContentEle: NJS<HTMLElement[]>, links: NJS<HTMLElement[]>, contents: NJS<HTMLElement[]>): void;
            }
            type OnLoad = {
                (this: NU.Tab, selTabIdx: number, selTabEle: NJS<HTMLElement[]>, selContentEle: NJS<HTMLElement[]>, cont: NA.Objects.Controller.Object): void;
            }
        }
        namespace Form {
            type OnBeforeBindValue = {
                (this: NU.Form, ele: NJS<HTMLElement[]>, val: NC.Primitive | NC.Primitive[], action: "bind" | "val"): NC.Primitive | NC.Primitive[];
            }
            type OnBindValue = {
                (this: NU.Form, ele: NJS<HTMLElement[]>, val: NC.Primitive | NC.Primitive[], action: "bind" | "val"): void;
            }
            type OnBeforeBind = {
                (this: NU.Form, context: NJS<HTMLElement[]>, vals: NC.JSONObject): void;
            }
            type OnBind = {
                (this: NU.Form, context: NJS<HTMLElement[]>, vals: NC.JSONObject): void;
            }
        }
        namespace List {
            type RowHandlerBeforeBind = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type RowHandler = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type OnBeforeSelect = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): undefined | false;
            }
            type OnSelect = {
                (this: NU.List, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): void;
            }
            type OnBind = {
                (this: NU.List, context: NJS<HTMLElement[]>, data: NJS<NC.JSONObject>, isFirstPage: boolean, isLastPage: boolean): void;
            }
        }
        namespace Grid {
            type RowHandlerBeforeBind = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type RowHandler = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NC.JSONObject): void;
            }
            type OnBeforeSelect = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): undefined | false;
            }
            type OnSelect = {
                (this: NU.Grid, rowIdx: number, rowEle: NJS<HTMLElement[]>, rowData: NJS<NC.JSONObject>, beforeRowIdx: number, e: JQuery.Event): void;
            }
            type OnBind = {
                (this: NU.Grid, context: NJS<HTMLElement[]>, data: NJS<NC.JSONObject>, isFirstPage: boolean, isLastPage: boolean): void;
            }
        }
        namespace Pagination {
            type OnChange = {
                (this: NU.Pagination, pageNo: number, selEle: NJS<HTMLElement[]>, selData: NC.JSONObject[], currPageNavInfo: NU.Options.CurrPageNavInfo): void;
            }
        }
        namespace Tree {
            type OnSelect = {
                (this: NU.Tree, selNodeIndex: number, selNodeEle: NJS<HTMLElement[]>, selNodeData: NC.JSONObject): void;
            }
            type OnCheck = {
                (this: NU.Tree, selNodeIndex: number, selNodeEle: NJS<HTMLElement[]>, selNodeData: NC.JSONObject
                    , checkedElesIndexes: number[], checkedEles: NJS<HTMLElement[]>, checkedElesData: NC.JSONObject[]
                    , checkFlag: boolean): void;
            }
        }
    }

    namespace Callbacks {
        namespace Popup {
            type LoadContent = {
                (this: NU.Popup, cont?: NA.Objects.Controller.Object, context?: NJS<HTMLElement[]>): void;
            }
        }
        namespace Tab {
            type LoadContent = {
                (this: NU.Tab, cont?: NA.Objects.Controller.Object, context?: NJS<HTMLElement[]>): void;
            }
        }
    }

    namespace Objects {
        namespace Grid {
            type TableMap = {
                colgroup: HTMLElement[][];
                thead: HTMLTableCellElement[][];
                tbody: HTMLTableCellElement[][];
                tfoot: HTMLTableCellElement[][];
            };
        }

        namespace Pagination {
            type LinkEles = {
                body: HTMLElement[][];
                page: HTMLElement[][];
                first: HTMLElement[][];
                prev: HTMLElement[][];
                next: HTMLElement[][];
                last: HTMLElement[][];
            };
        }
    }

}
