type TTopLeft = string | number | 'center';

type TPosition = string | number;

interface TStyle {
    type?: string;
    bg?: string;
    fg?: string;
    ch?: string;
    bold?: boolean;
    underline?: boolean;
    blink?: boolean;
    inverse?: boolean;
    invisible?: boolean;
    transparent?: boolean;
    border?: 'line' | 'bg' | TBorder;
    hover?: boolean;
    focus?: boolean;
    label?: string;
    track?: { bg?: string; fg?: string };
    scrollbar?: { bg?: string; fg?: string };
}

interface Style {
    border?: TBorder;
    style?: TStyle;
}

interface TBorder {
    /**
     * Type of border (line or bg). bg by default.
     */
    // TODO: string not valid
    type?: 'line' | 'bg' | string;

    /**
     * Character to use if bg type, default is space.
     */
    ch?: string;

    /**
     * Border foreground and background.
     */
    bg?: string;
    fg?: string;

    /**
     * Border attributes.
     */
    bold?: string;
    underline?: string;
}

type TAlign = 'left' | 'center' | 'right';

interface ListbarCommand {
    key: string;
    callback(): void;
}

interface TImage {
    /**
     * Pixel width.
     */
    width: number;

    /**
     * Pixel height.
     */
    height: number;

    /**
     * Image bitmap.
     */
    bmp: any;

    /**
     * Image cellmap (bitmap scaled down to cell size).
     */
    cellmap: any;
}

interface Padding {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

interface Position {
    left: number | string;
    right: number | string;
    top: number | string;
    bottom: number | string;
}

interface Border {
    /**
     * Type of border (line or bg). bg by default.
     */
    type?: 'line' | 'bg';

    /**
     * Character to use if bg type, default is space.
     */
    ch?: string;

    /**
     * Border foreground and background, must be numbers (-1 for default).
     */
    bg?: number;
    fg?: number;

    /**
     * Border attributes.
     */
    bold?: string;
    underline?: string;
}

/**
 * Abstract interface
 */
interface ElementProps {
    ref?: string;

    tags?: boolean;

    fg?: string;
    bg?: string;
    bold?: string;
    underline?: string;

    style?: TStyle;

    /**
     * Border object, see below.
     */
    border?: Border | 'line' | 'bg';

    /**
     * Element's text content.
     */
    content?: string;

    /**
     * Element is clickable.
     */
    clickable?: boolean;

    /**
     * Element is focusable and can receive key input.
     */
    input?: boolean;
    keyable?: boolean;

    /**
     * Element is focused.
     */
    focused?: boolean;

    /**
     * Whether the element is hidden.
     */
    hidden?: boolean;

    /**
     * A simple text label for the element.
     */
    label?: string;

    /**
     * A floating text label for the element which appears on mouseover.
     */
    hoverText?: string;

    /**
     * Text alignment: left, center, or right.
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Vertical text alignment: top, middle, or bottom.
     */
    valign?: 'top' | 'middle' | 'bottom';

    /**
     * Shrink/flex/grow to content and child elements. Width/height during render.
     */
    shrink?: boolean;

    /**
     * Amount of padding on the inside of the element. Can be a number or an object containing
     * the properties: left, right, top, and bottom.
     */
    padding?: number | Padding;

    top?: TTopLeft;
    left?: TTopLeft;
    right?: TPosition;
    bottom?: TPosition;

    /**
     * Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink).
     * Percentages can also have offsets (50%+1, 50%-1).
     */
    width?: number | string;

    /**
     * Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or
     * keyword (center). right and bottom do not accept keywords. Percentages can also have
     * offsets (50%+1, 50%-1).
     */
    height?: number | string;

    /**
     * Can contain the above options.
     */
    position?: Position;

    /**
     * Whether the element is scrollable or not.
     */
    scrollable?: boolean;

    /**
     * Background character (default is whitespace ).
     */
    ch?: string;

    /**
     * Allow the element to be dragged with the mouse.
     */
    draggable?: boolean;

    /**
     * Draw a translucent offset shadow behind the element.
     */
    shadow?: boolean;

    /**
     * Styling of Element.
     */
    class?: Style;
}

interface ScrollableBoxProps extends ElementProps {
    /**
     * A limit to the childBase. Default is Infinity.
     */
    baseLimit?: number;

    /**
     * A option which causes the ignoring of childOffset. This in turn causes the
     * childBase to change every time the element is scrolled.
     */
    alwaysScroll?: boolean;

    /**
     * Object enabling a scrollbar.
     * Style of the scrollbar track if present (takes regular style options).
     */
    scrollbar?: { style?: any; track?: any; ch?: string };

    /**
     * Children of Element.
     */
    children?: Array<JSX.Element | string | number> | string | number | JSX.Element;
}

interface ScrollableTextProps extends ScrollableBoxProps {
    /**
     * Whether to enable automatic mouse support for this element.
     * Use pre-defined mouse events (right-click for editor).
     */
    mouse?: boolean | (() => void);

    /**
     * Use pre-defined keys (i or enter for insert, e for editor, C-e for editor while inserting).
     */
    keys?: string | string[] | boolean;

    /**
     * Use vi keys with the keys option.
     */
    vi?: boolean;
}

interface BoxProps extends ScrollableTextProps {}

interface TextProps extends ElementProps {
    /**
     * Fill the entire line with chosen bg until parent bg ends, even if there
     * is not enough text to fill the entire width.
     */
    fill?: boolean;

    /**
     * Text alignment: left, center, or right.
     */
    align?: TAlign;

    children: string | number;
}

/**
 * A simple line which can be line or bg styled.
 */
interface LineProps extends BoxProps {
    /**
     * Can be vertical or horizontal.
     */
    orientation?: 'vertical' | 'horizontal';

    /**
     * Treated the same as a border object. (attributes can be contained in style).
     */
    type?: string;
    bg?: string;
    fg?: string;
    ch?: string;
}

interface BigTextProps extends BoxProps {
    /**
     * bdf->json font file to use (see ttystudio for instructions on compiling BDFs to JSON).
     */
    font?: string;

    /**
     * bdf->json bold font file to use (see ttystudio for instructions on compiling BDFs to JSON).
     */
    fontBold?: string;

    /**
     * foreground character. (default: ' ')
     */
    fch?: string;
}

// TODO: Shouldn't allow children
interface ListProps extends BoxProps {
    /**
     * An array of strings which become the list's items.
     */
    items: string[];

    /**
     * A function that is called when vi mode is enabled and the key / is pressed. This function accepts a
     * callback function which should be called with the search string. The search string is then used to
     * jump to an item that is found in items.
     */
    search?(err: any, value?: string): void;

    /**
     * Whether the list is interactive and can have items selected (Default: true).
     */
    interactive?: boolean;

    /**
     * Whether to automatically override tags and invert fg of item when selected (Default: true).
     */
    invertSelected?: boolean;

    /**
     * Function called when an item in the list is selected.
     *
     * @param item a blessed element
     *
     * @param index in array of items.
     *
     * @example
     * ```
     * <list onSelect={({content}, index) => console.log(content, index)} />
     * ```
     */
    onSelect(item: ElementProps, index: number): void;
}

interface FileManagerProps extends ListProps {
    /**
     * Current working directory.
     */
    cwd?: string;
}

interface ListTableProps extends ListProps {
    /**
     * Array of array of strings representing rows.
     */
    rows?: string[];
    data?: string[][];

    /**
     * Spaces to attempt to pad on the sides of each cell. 2 by default: one space on each side
     * (only useful if the width is shrunken).
     */
    pad?: number;

    /**
     * Do not draw inner cells.
     */
    noCellBorders?: boolean;
}

interface ListbarProps extends BoxProps {
    /**
     * Set buttons using an object with keys as titles of buttons, containing of objects
     * containing keys of keys and callback.
     */
    items: ListbarCommand[];

    /**
     * Automatically bind list buttons to keys 0-9.
     */
    autoCommandKeys: boolean;
}

interface FormProps extends BoxProps {
    /**
     * Allow default keys (tab, vi keys, enter).
     */
    keys?: any;

    /**
     * Allow vi keys.
     */
    vi?: boolean;

    /**
     * Function called when the form is submitted.
     */
    onSubmit: (data: unknown) => void;

    /**
     * Function called when the form is reset.
     */
    onReset?: (data: unknown) => void;

    /**
     * Function called when the form is canceled.
     */
    onCancel?: (data: unknown) => void;
}

/**
 * Abstract interface
 */
interface InputProps extends BoxProps {
    /**
     * Function called when Enter or Return is hit when editing the input.
     */
    onSubmit?(text: string): void;

    /**
     * Function called when the input is no longer focused.
     */
    onBlur?(): void;

    /**
     * Function called when the input receives focus.
     */
    onFocus?(): void;

    /**
     * Function called when the input changes.
     */
    onTextChange?(text: string): void;

    /**
     * Current text in the input.
     */
    value: string;
}

/**
 * A box which allows multiline text input.
 */
// TODO: Styling
interface TextareaProps extends InputProps {
    /**
     * RECOMMENDED: When focused receive text input automatically.
     */
    inputOnFocus?: boolean;
}

// TODO: Styling
interface TextboxProps extends TextareaProps {
    /**
     * Completely hide text.
     */
    secret?: boolean;

    /**
     * Replace text with asterisks (*).
     */
    censor?: boolean;
}

// TODO: Styles don't apply: bg, fg, border
interface ButtonProps extends BoxProps {
    /**
     * Press button. Emits press.
     */
    onPress(): void;
}

// TODO: Many Styles don't seem to apply -- ie: border, invisible, probably more.
// TODO: Shouldn't have children.
interface CheckboxProps extends BoxProps {
    /**
     * whether the element is checked or not.
     */
    checked: boolean;

    /**
     * helper text displayed to the left of the checkbox.
     */
    text?: string;

    /**
     * enable mouse support.
     */
    mouse?: boolean;

    /**
     * Function called when the checkbox is changed.
     */
    onChange?(): void;
}

// TODO: from my testing this behaves exactly the same as a box, unlike the docs mention:
// "An element wrapping RadioButtons. RadioButtons within this element will be mutually exclusive with each other."
interface RadioSetProps extends BoxProps {}

// TODO: checked seems like a misnomer, it doesn't matter if it's set or not you can easily
// change a radiobutton value.
interface RadioButtonProps extends BoxProps {
    /**
     * Set the initial value for whether or not a {@link radiobutton} is selected.
     */
    checked?: boolean;

    /**
     * helper text displayed to the left of the {@link radiobutton}.
     */
    text?: string;

    /**
     * enable mouse support.
     */
    mouse?: boolean;

    /**
     * Function called when the {@link radiobutton} is changed.
     */
    onChange?(): void;
}

interface PromptProps extends BoxProps {}

interface QuestionProps extends BoxProps {}

interface MessageProps extends BoxProps {}

interface LoadingProps extends BoxProps {}

interface ProgressBarProps extends BoxProps {
    /**
     * can be `horizontal` or `vertical`.
     */
    orientation?: string;

    /**
     * the character to fill the bar with (default is space).
     */
    pch?: string;

    /**
     * the amount filled (0 - 100).
     */
    filled?: number;

    /**
     * same as `filled`.
     */
    value?: number;

    /**
     * enable key support.
     */
    keys?: boolean;

    /**
     * enable mouse support.
     */
    mouse?: boolean;
}

interface LogProps extends ScrollableTextProps {
    /**
     * amount of scrollback allowed. default: Infinity.
     */
    scrollback?: number;

    /**
     * scroll to bottom on input even if the user has scrolled up. default: false.
     */
    scrollOnInput?: boolean;
}

interface TableProps extends BoxProps {
    /**
     * array of array of strings representing rows (same as `data`).
     */
    rows?: string[][];

    /**
     * array of array of strings representing rows (same as `rows`).
     */
    data?: string[][];

    /**
     * spaces to attempt to pad on the sides of each cell. `2` by default: one space on each side (only useful if the width is shrunken).
     */
    pad?: number;

    /**
     * do not draw inner cells.
     */
    noCellBorders?: boolean;

    /**
     * fill cell borders with the adjacent background color.
     */
    fillCellBorders?: boolean;
}

interface TerminalProps extends BoxProps {
    /**
     * handler for input data.
     */
    handler?(userInput: Buffer): void;

    /**
     * name of shell. $SHELL by default.
     */
    shell?: string;

    /**
     * args for shell.
     */
    args?: any;

    /**
     * can be line, underline, and block.
     */
    cursor?: 'line' | 'underline' | 'block';

    terminal?: string;

    /**
     * Object for process env.
     */
    env?: any;
}

interface ImageProps extends BoxProps {
    /**
     * path to image.
     */
    file: string;

    /**
     * path to w3mimgdisplay. if a proper w3mimgdisplay path is not given, blessed will search the
     * entire disk for the binary.
     */
    type: 'ansi' | 'overlay' | 'w3m';
}

interface ANSIImageProps extends BoxProps {
    /**
     * URL or path to PNG/GIF file. Can also be a buffer.
     */
    file: string;

    /**
     * Scale cellmap down (0-1.0) from its original pixel width/height (Default: 1.0).
     */
    scale: number;

    /**
     * This differs from other element's width or height in that only one
     * of them is needed: blessed will maintain the aspect ratio of the image
     * as it scales down to the proper number of cells. NOTE: PNG/GIF's are
     * always automatically shrunken to size (based on scale) if a width or
     * height is not given.
     */
    width: number | string;
    height: number | string;

    /**
     * Add various "density" ASCII characters over the rendering to give the
     * image more detail, similar to libcaca/libcucul (the library mplayer uses
     * to display videos in the terminal).
     */
    ascii: string;

    /**
     * Whether to animate if the image is an APNG/animating GIF. If false, only
     * display the first frame or IDAT (Default: true).
     */
    animate: boolean;

    /**
     * Set the speed of animation. Slower: 0.0-1.0. Faster: 1-1000. It cannot go
     * faster than 1 frame per millisecond, so 1000 is the fastest. (Default: 1.0)
     */
    speed: number;

    /**
     * mem or cpu. If optimizing for memory, animation frames will be rendered to
     * bitmaps as the animation plays, using less memory. Optimizing for cpu will
     * precompile all bitmaps beforehand, which may be faster, but might also OOM
     * the process on large images. (Default: mem).
     */
    optimization: 'mem' | 'cpu';
}

interface OverlayImageProps extends BoxProps {
    /**
     * Path to image.
     */
    file: string;

    /**
     * Render the file as ANSI art instead of using w3m to overlay Internally uses the
     * ANSIImage element. See the ANSIImage element for more information/options. (Default: true).
     */
    ansi: boolean;

    /**
     * Path to w3mimgdisplay. If a proper w3mimgdisplay path is not given, blessed will
     * search the entire disk for the binary.
     */
    w3m: string;

    /**
     * Whether to search /usr, /bin, and /lib for w3mimgdisplay (Default: true).
     */
    search: string;
}

interface VideoProps extends BoxProps {
    /**
     * Video to play.
     */
    file: string;

    /**
     * Start time in seconds.
     */
    start: number;
}

interface LayoutProps extends ElementProps {
    /**
     * Using the default renderer, it provides two layouts: inline, and grid. inline is the default and will render
     * akin to inline-block. grid will create an automatic grid based on element dimensions. The grid cells'
     * width and height are always determined by the largest children in the layout.
     */
    layout: 'inline' | 'inline-block' | 'grid';

    /**
     * Width/height of the element, can be a number, percentage (0-100%), or keyword (half or shrink).
     * Percentages can also have offsets (50%+1, 50%-1).
     *
     */
    // Required {@link https://github.com/chjj/blessed#notes-1}
    width: number | string;

    /**
     * Offsets of the element relative to its parent. Can be a number, percentage (0-100%), or
     * keyword (center). right and bottom do not accept keywords. Percentages can also have
     * offsets (50%+1, 50%-1).
     *
     */
    // Required {@link https://github.com/chjj/blessed#notes-1}
    height: number | string;

    /**
     * Children of Element.
     */
    children?: Array<JSX.Element | string | number> | string | number | JSX.Element;
}

// relation to blessed export widgets, prepare for next version of react-blessed
declare namespace JSX {
    interface IntrinsicElements {
        box: BoxProps;
        /**
         * Displays text.
         *
         * @example
         * ```
         * <text>Welcome to react-blessed</text>
         * ```
         */
        text: TextProps;
        line: LineProps;

        /**
         * @deprecated use `box` with scrollable set instead.
         */
        scrollablebox: ScrollableBoxProps;

        /**
         * @deprecated - Use Box with the scrollable and alwaysScroll options instead.
         * A scrollable text box which can display and scroll text, as well as handle
         * pre-existing newlines and escape codes.
         */
        scrollabletext: ScrollableTextProps;

        /**
         * A box which can render content drawn as 8x14 cell characters using the terminus font.
         */
        bigtext: BigTextProps;

        /**
         * Display an optionally selectable list of items {@type string}.
         *
         * @example
         * ```
         * const ListExample = () => {
         *   const [selected, setSelected] = useState("None");
         *
         *   return (
         *     <box>
         *       <text>{selected}</text>
         *       <list
         *         top={2}
         *         keys
         *         mouse
         *         vi
         *         onSelect={({ content }) => setSelected(content)}
         *         items={listItems}
         *       />
         *     </box>
         * }
         * ```
         */
        list: ListProps;
        filemanager: FileManagerProps;
        listtable: ListTableProps;
        listbar: ListbarProps;
        form: FormProps;
        textarea: TextareaProps;

        /**
         * A single line text input for multiline see {@link textarea}.
         *
         * @example
         * const ExampleTextbox = () => {
         *   const [text, setText] = useState("");
         *
         *   return (
         *     <textbox
         *       width={10}
         *       border="line"
         *       mouse
         *       keys
         *       inputOnFocus
         *       onSubmit={() => console.log("submitted")}
         *       onFocus={() => console.log("focused")}
         *       onBlur={() => console.log("lost focus")}
         *       value={text}
         *       onTextChange={(newText) => setText(newText)}
         *     />
         *   );
         * };
         *
         */
        textbox: TextboxProps;

        /**
         * A button that can be interacted with the mouse or keyboard.
         *
         * @example
         *
         * ```
         * const ExampleButton = () => {
         *   return (
         *     <button mouse onPress={() => console.log("pressed")} style={{ border: "line" }}>
         *       Clickable Button
         *     </button>
         *   );
         * };
         * ```
         *
         *
         */
        button: ButtonProps;

        /**
         * A checkbox which can be used in a form element.
         *
         * @example
         * ```
         * const ExampleCheckbox = () => {
         *   const [checked, setChecked] = useState(false);
         *
         *   return (
         *     <checkbox
         *       mouse
         *       text="insert-label"
         *       checked={checked}
         *       onChange={() => setChecked(!checked)}
         *     />
         *   );
         * };
         * ```
         */
        checkbox: CheckboxProps;

        /**
         * A {@link box} for {@link radiobutton} that ensures mutual exclusivity.
         *
         * When inside of a {@link radioset} or {@link box} managing state of the {@link radiobutton}
         * is unnecessary as it is managed by Blessed. Furthermore, the `checked` property sets the initially
         * selected {@link radiobutton}. Don't set all {@link radiobutton} in a {@link radioset} to checked
         * otherwise it becomes unresponsive.
         *
         * @example
         * ```
         * const ExampleRadioButtons = () => {
         *   const [, setOption] = useState(1);
         *   return (
         *     <box>
         *       <radiobutton
         *         mouse
         *         text="Option 1"
         *         onChange={() => setOption(1)}
         *         checked
         *       />
         *       <radiobutton
         *         mouse
         *         text="Option 2"
         *         top={1}
         *         onChange={() => setOption(2)}
         *       />
         *       <radiobutton
         *         mouse
         *         text="Option 3"
         *         top={2}
         *         onChange={() => setOption(3)}
         *       />
         *     </box>
         *   );
         * };
         * ```
         */
        radioset: RadioSetProps;

        /**
         * A Radio Button.
         *
         * When inside of a {@link radioset} or {@link box} managing state of the {@link radiobutton}
         * is unnecessary as it is managed by Blessed. Furthermore, the `checked` property sets the initially
         * selected {@link radiobutton}. Don't set all {@link radiobutton} in a {@link radioset} to checked
         * otherwise it becomes unresponsive.
         *
         * @example
         * ```
         * const ExampleRadioButtons = () => {
         *   const [, setOption] = useState(1);
         *   return (
         *     <box>
         *       <radiobutton
         *         mouse
         *         text="Option 1"
         *         onChange={() => setOption(1)}
         *         checked
         *       />
         *       <radiobutton
         *         mouse
         *         text="Option 2"
         *         top={1}
         *         onChange={() => setOption(2)}
         *       />
         *       <radiobutton
         *         mouse
         *         text="Option 3"
         *         top={2}
         *         onChange={() => setOption(3)}
         *       />
         *     </box>
         *   );
         * };
         * ```
         */
        radiobutton: RadioButtonProps;
        table: TableProps;

        /**
         * A prompt box containing a text input, okay, and cancel buttons (automatically hidden).
         */
        prompt: PromptProps;

        /**
         * A question box containing okay and cancel buttons (automatically hidden).
         */
        question: QuestionProps;

        /**
         * A box containing a message to be displayed (automatically hidden).
         */
        message: MessageProps;

        /**
         * A box with a spinning line to denote loading (automatically hidden).
         */
        loading: LoadingProps;

        /**
         * A log permanently scrolled to the bottom.
         */
        log: LogProps;

        /**
         * A progress bar allowing various styles. This can also be used as a form input.
         *
         * @example
         * ```
         * const ExampleProgressbar = () => {
         *   const [filled, setFilled] = useState(0);
         *
         *   useEffect(() => {
         *     const interval = setInterval(
         *       () => setFilled((current) => current + 5),
         *       1000
         *     );
         *
         *     return () => clearInterval(interval);
         *   }, []);
         *
         *   return (
         *     <progressbar
         *       height={1}
         *       top="50%"
         *       pch="="
         *       filled={filled}
         *       style={{ bar: { fg: "green" } }}
         *     />
         *   );
         * };
         * ```
         */
        progressbar: ProgressBarProps;

        terminal: TerminalProps;

        /**
         * A layout which can position children automatically.
         *
         * @example
         * ```
         * <layout width={10} height={10} layout="grid">
         *   {"this"} {"is"} {"in"} {"a"} {"grid"}
         * </layout>
         * ```
         */
        layout: LayoutProps;

        /**
         * Display an image in the terminal (jpeg, png, gif) using w3mimgdisplay. Requires w3m to be installed.
         * X11 required: works in xterm, urxvt, and possibly other terminals.
         */
        image: ImageProps;

        /**
         * Convert any .png file (or .gif, see below) to an ANSI image and display it as an element.
         */
        'ansi-image': ANSIImageProps;
    }
}
