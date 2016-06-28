// Type definitions for blessed 0.1.5
// Project: https://github.com/chjj/blessed
// Definitions by: bryn austin bellomy <https://github.com/brynbellomy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../node/node.d.ts"/>

declare module "blessed"
{
    import events = require('events');
    import buffer = require('buffer');
    import child_process = require('child_process');

    module Blessed
    {
        export var colors: Colors;

        export interface GenericCallback {
            (...args:any[]): void;
        }

        export interface ColorPair {
            /** background, must be number (-1 for default). */
            bg?: number;
            /** foreground, must be number (-1 for default). */
            fg?: number;
        }

        export interface Style extends ColorPair {
            bold?: boolean;
            underline?: boolean;
            border: Border;
            hover: ColorPair;
        }

        export interface Border extends ColorPair {
            /** type of border ('line' or 'bg'). */
            type?: string; //'line'|'bg';
            /** character to use if bg type, default is space. */
            ch?: string;
        }

        export interface Padding {
            top?:number;
            right?:number;
            bottom?:number;
            left?:number;
        }

        export interface Position {
            /** offsets of the element relative to its parent. can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. */
            top?:number|string;
            /** offsets of the element relative to its parent. can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. */
            right?:number|string;
            /** offsets of the element relative to its parent. can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. */
            bottom?:number|string;
            /** offsets of the element relative to its parent. can be a number, percentage (0-100%), or keyword (center). right and bottom do not accept keywords. */
            left?:number|string;
            /** width of the element, can be a number, percentage (0-100%), or keyword (half or shrink). */
            width?:number|string;
            /** height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). */
            height?:number|string;
        }

        export interface KeyCode {
            name: string;
            ctrl: boolean;
            meta: boolean;
            shift: boolean;
            sequence: string;
            full: string;
        }

        export class Program
        {
            /**
                Wrap the given text in terminal formatting codes corresponding to the given attribute
                name. The `attr` string can be of the form `red fg` or `52 bg` where `52` is a 0-255
                integer color number.
            */
            text (text:string, attr:string): string;
        }

        export interface Colors {
            /** Either pass a hex string, an array of 3 numbers, or three separate numbers representing an RGB value.  This returns the 0-255 color number for that color. */
            match (r:string|number[]|number, g?:number, b?:number): number;

            /** An array of the 255 colors as hex strings. */
            colors: string[];
        }

        export interface NodeOptions
        {
            screen?: Screen;
            parent?: Node;
            children?: Node[];
        }

        export class Node extends events.EventEmitter
        {
            constructor(options?:NodeOptions);

            type       : string;
            options    : NodeOptions;
            parent     : Node;
            screen     : Screen;
            children   : Node[];
            data       : any;
            _          : any;
            $          : any;
            index      : number;

            // on(event:string, callback:() => void);
            // on(event:'adopt', callback:() => void);
            // on(event:'remove', callback:() => void);
            // on(event:'reparent', callback:() => void);
            // on(event:'attach', callback:() => void);
            // on(event:'detach', callback:() => void);

            prepend(node:Node): void;
            append(node:Node): void;
            remove(node:Node): void;
            insert(node:Node, index:number): void;
            insertBefore(node:Node, refNode:Node): void;
            insertAfter(node:Node, refNode:Node): void;
            detach(): void;
            // emitDescendants(): void;
            // get(key:string): any;
            // get(key:string, default:any): any;
            // set(key:string, value:any): void;
        }

        export interface ScreenOptions extends NodeOptions
        {
            /** the blessed Program to be associated with.  will be automatically instantiated if none is provided. */
            program?: any;
            /** attempt to perform CSR optimization on all possible elements (not just full-width ones, elements with uniform cells to their sides). this is known to cause flickering with elements that are not full-width, however, it is more optimal for terminal rendering. */
            smartCSR?: boolean;
            /** do CSR on any element within 20 cols of the screen edge on either side. faster than smartCSR, but may cause flickering depending on what is on each side of the element. */
            fastCSR?: boolean;
            /** attempt to perform back_color_erase optimizations for terminals that support it. it will also work with terminals that don't support it, but only on lines with the default background color. as it stands with the current implementation, it's uncertain how much terminal performance this adds at the cost of overhead within node. */
            useBCE?: boolean;
            /** amount of time (in ms) to redraw the screen after the terminal is resized (default: 300). */
            resizeTimeout?: number;
            /** the width of tabs within an element's content. */
            tabSize?: number;
            /** automatically position child elements with border and padding in mind. */
            autoPadding?: boolean;
            /** the name of the logfile to use.  if specified but the file does not exist, it will be created. see log method. */
            log?: string;
            /** dump all output and input to desired file. can be used together with log option if set as a boolean. */
            dump?: any;
            /** debug mode. enables usage of the `debug` method. also creates a debug console which will display when pressing F12. it will display all log and debug messages. */
            debug?: boolean;
            /** Array of keys in their full format (e.g. C-c) to ignore when keys are locked. Useful for creating a key that will always exit no matter whether the keys are locked. */
            ignoreLocked?: string[];

            /** Do not clear the screen, only scroll down enough to make room for the elements on the screen. do not use the alternate screenbuffer. useful for writing a CLI tool or some kind of prompt (experimental - see test/widget-noalt.js) */
            noAlt?: boolean;

            /** Options for the cursor. */
            cursor?: CursorOptions;
        }

        export interface CursorOptions {
            /** have blessed draw a custom cursor and hide the terminal cursor (experimental). */
            artificial?: boolean;
            /** shape of the artificial cursor. can be: block, underline, or line. */
            shape?: string; //'block'|'underline'|'line';
            /** whether the artificial cursor blinks. */
            blink?: boolean;
            /** color of the artificial cursor. accepts any valid color value (null is default). */
            color?: string;
        }

        export interface ScreenEventCallback {
            (character:string, keyCode:KeyCode): void;
        }

        export class Screen extends Node
        {
            constructor(options?:ScreenOptions);

            /** the blessed Program object. */
            program: any;
            /** the blessed Tput object (only available if you passed tput: true to the Program constructor.) */
            tput: any;
            /** top of the focus history stack. */
            focused: any;
            /** width of the screen (same as program.cols). */
            width: number;
            /** height of the screen (same as program.rows). */
            height: number;
            /** same as screen.width. */
            cols: number;
            /** same as screen.height. */
            rows: number;

            /** calculated relative left offset. */
            left: number;
            /** calculated relative right offset. */
            right: number;
            /** calculated relative top offset. */
            top: number;
            /** calculated relative bottom offset. */
            bottom: number;
            /** calculated absolute left offset. */
            aleft: number;
            /** calculated absolute right offset. */
            aright: number;
            /** calculated absolute top offset. */
            atop: number;
            /** calculated absolute bottom offset. */
            abottom: number;


            /** whether the focused element grabs all keypresses. */
            grabKeys: boolean;
            /** prevent keypresses from being received by any element. */
            lockKeys: boolean;
            /** the currently hovered element. only set if mouse events are bound. */
            hover: Element;
            /** set or get window title. */
            title: string;

            /** write string to the log file if one was created. */
            log(...msg:any[]): void;
            /** same as the log method, but only gets called if the debug option was set. */
            debug(...msg:string[]): void;
            /** allocate a new pending screen buffer and a new output screen buffer. */
            alloc(): void;
            /** draw the screen based on the contents of the screen buffer. */
            draw(start:number, end:number): void;
            /** render all child elements, writing all data to the screen buffer and drawing the screen. */
            render(): void;
            /** clear any region on the screen. */
            clearRegion(x1:number, x2:number, y1:number, y2:number): void;
            /** fill any region with a character of a certain attribute. */
            fillRegion(attr:number, ch:string, x1:number, x2:number, y1:number, y2:number): void;
            /** focus element by offset of focusable elements. */
            focusOffset(offset:number): void;
            /** focus previous element in the index. */
            focusPrevious(): void;
            /** focus next element in the index. */
            focusNext(): void;
            /** push element on the focus stack (equivalent to screen.focused = el). */
            focusPush(element:Element): void;
            /** pop element off the focus stack. */
            focusPop(): void;
            /** save the focused element. */
            saveFocus(): void;
            /** restore the saved focused element. */
            restoreFocus(): void;
            /** "rewind" focus to the last visible and attached element. */
            rewindFocus(): void;
            /** bind a keypress listener for a specific key. */
            key(keyEvents:string|string[], callback:ScreenEventCallback): void;
            /** bind a keypress listener for a specific key once. */
            onceKey(keyEvents:string|string[], callback:ScreenEventCallback): void;
            /** remove a keypress listener for a specific key. */
            unkey(name:string, listener:ScreenEventCallback): void;
            /** spawn a process in the foreground, return to blessed app after exit. */
            spawn(file:string, args:string[], options:NodeChildProcessExecOptions): child_process.ChildProcess;
            /** spawn a process in the foreground, return to blessed app after exit. executes callback on error or exit. */
            exec(file:string, args:string[], options:NodeChildProcessExecOptions, callback:GenericCallback): child_process.ChildProcess;
            /** read data from text editor. */
            readEditor(options:{}, callback:GenericCallback): void;
            /** set effects based on two events and attributes. */
            setEffects(el:Element, fel:Element, over:string, out:string, effects:Style, temp?:string): void;
            /** insert a line into the screen (using csr: this bypasses the output buffer). */
            insertLine(n:number, y:number, top:number, bottom:number): void;
            /** delete a line from the screen (using csr: this bypasses the output buffer). */
            deleteLine(n:number, y:number, top:number, bottom:number): void;
            /** insert a line at the bottom of the screen. */
            insertBottom(top:number, bottom:number): void;
            /** insert a line at the top of the screen. */
            insertTop(top:number, bottom:number): void;
            /** delete a line at the bottom of the screen. */
            deleteBottom(top:number, bottom:number): void;
            /** delete a line at the top of the screen. */
            deleteTop(top:number, bottom:number): void;

            /** enable mouse events for the screen and optionally an element (automatically called when a form of on('mouse') is bound). */
            enableMouse(el?:Element): void;
            /** enable keypress events for the screen and optionally an element (automatically called when a form of on('keypress') is bound). */
            enableKeys(el?:Element): void;
            /** enable key and mouse events. calls bot enableMouse and enableKeys. */
            enableInput(el?:Element): void;

            /** attempt to copy text to clipboard using iTerm2's propriety sequence. returns true if successful. */
            copyToClipboard(text:string): boolean;
            /** attempt to change cursor shape. will not work in all terminals (see artificial cursors for a solution to this). returns true if successful. */
            cursorShape(shape:string, blink:boolean): boolean;
            /** attempt to change cursor color. returns true if successful. */
            cursorColor(color: string): boolean;
            /** attempt to reset cursor. returns true if successful. */
            cursorReset(): boolean;

        }

        export interface ElementOptions extends NodeOptions
        {
            fg?: string;
            bg?: string;
            scrollbar?: ColorPair;
            focus?: Style;
            hover?: Style;

            /** border object, see below. */
            border?: Border;
            /** positioning options. */
            position?: Position;
            /** amount of padding on the inside of the element. can be a number or an object containing the properties: left, right, top, and bottom. */
            padding?: number|Padding;
            /** element's text content. */
            content?: string;
            /** element is clickable. */
            clickable?: boolean;
            /** element is focusable and can receive key input. */
            input?: boolean;
            /** element is focused. */
            focused?: boolean;
            /** whether the element is hidden. */
            hidden?: boolean;
            /** a simple text label for the element. */
            label?: string;
            /** a floating text label for the element which appears on mouseover. */
            hoverText?: string;
            /** text alignment: left, center, or right. */
            align?: string;
            /** vertical text alignment: top, middle, or bottom. */
            valign?: string;
            /** shrink/flex/grow to content and child elements. width/height during render. */
            shrink?: any;
            /** width of the element, can be a number, percentage (0-100%), or keyword (half or shrink). */
            width?: number|string;
            /** height of the element, can be a number, percentage (0-100%), or keyword (half or shrink). */
            height?: number|string;
            /** whether the element is scrollable or not. */
            scrollable?: boolean;
            /** background character (default is whitespace ). */
            ch?: string;
            /** allow the element to be dragged with the mouse. */
            draggable?: boolean;
        }

        export class Element extends Node
        {
            constructor(options?:ElementOptions);

            /** name of the element. useful for form submission. */
            name: string;
            /** border object. */
            border: Border;
            /** contains attributes (e.g. fg/bg/underline). see above. */
            style: Style;
            /** raw width, height, and offsets. */
            position: Position;
            /** type of border (line or bg). bg by default. */
            type: string; //'line'|'bg';
            /** character to use if bg type, default is space. */
            ch: string;
            /** raw text content. */
            content: string;
            /** whether the element is hidden or not. */
            hidden: boolean;
            /** whether the element is visible or not. */
            visible: boolean;
            /** whether the element is attached to a screen in its ancestry somewhere. */
            detached: boolean;
            /** calculated width. */
            width: number;
            /** calculated height. */
            height: number;
            /** whether the element is draggable. set to true to allow dragging. */
            draggable: boolean;



            /** calculated relative left offset. */
            left: number;
            /** calculated relative right offset. */
            right: number;
            /** calculated relative top offset. */
            top: number;
            /** calculated relative bottom offset. */
            bottom: number;
            /** calculated absolute left offset. */
            aleft: number;
            /** calculated absolute right offset. */
            aright: number;
            /** calculated absolute top offset. */
            atop: number;
            /** calculated absolute bottom offset. */
            abottom: number;


            /** write content and children to the screen buffer. */
            render(): void;
            /** hide element. */
            hide(): void;
            /** show element. */
            show(): void;
            /** toggle hidden/shown. */
            toggle(): void;
            /** focus element. */
            focus(): void;
            /** bind a keypress listener for a specific key. */
            key(name:string|string[], listener:(character?:any, keyCode?:any) => void): void;
            /** bind a keypress listener for a specific key once. */
            onceKey(name:string, listener:() => void): void;
            /** remove a keypress listener for a specific key. */
            unkey(name:string, listener:() => void): void;
            /** same as el.on('screen', ...) except this will automatically cleanup listeners after the element is detached. */
            onScreenEvent(event:string, listener:(...args:any[]) => void): void;
            /** set the z-index of the element (changes rendering order). */
            setIndex(z:number): void;
            /** put the element in front of its siblings. */
            setFront(): void;
            /** put the element in back of its siblings. */
            setBack(): void;
            /** set the label text for the top-left corner. example options: {text:'foo',side:'left'} */
            setLabel(textOrOptions:string|{}): void;
            /** remove the label completely. */
            removeLabel(): void;
            /** set the hover text for the bottom-right corner. example options: {text:'foo'} */
            setHover(textOrOptions:string|{}): void;
            /** remove the hover label completely. */
            removeHover(): void;
            /** set the content. note: when text is input, it will be stripped of all non-SGR escape codes, tabs will be replaced with 8 spaces, and tags will be replaced with SGR codes (if enabled). */
            setContent(text:string): void;
            /** return content, slightly different from el.content. assume the above formatting. */
            getContent(): void;
            /** similar to setContent, but ignore tags and remove escape codes. */
            setText(text:string): void;
            /** similar to getContent, but return content with tags and escape codes removed. */
            getText(): void;
            /** insert a line into the box's content. */
            insertLine(index:number, lines:string|string[]): void;
            /** delete a line from the box's content. */
            deleteLine(index:number, numLines:number): void;
            /** get a line from the box's content. */
            getLine(index:number): void;
            /** get a line from the box's content from the visible top. */
            getBaseLine(index:number): void;
            /** set a line in the box's content. */
            setLine(index:number, line:string): void;
            /** set a line in the box's content from the visible top. */
            setBaseLine(index:number, line:string): void;
            /** clear a line from the box's content. */
            clearLine(index:number): void;
            /** clear a line from the box's content from the visible top. */
            clearBaseLine(index:number): void;
            /** insert a line at the top of the box. */
            insertTop(lines:string|string[]): void;
            /** insert a line at the bottom of the box. */
            insertBottom(lines:string|string[]): void;
            /** delete a line at the top of the box. */
            deleteTop(): void;
            /** delete a line at the bottom of the box. */
            deleteBottom(): void;
            /** unshift a line onto the top of the content. */
            unshiftLine(lines:string|string[]): void;
            /** shift a line off the top of the content. */
            shiftLine(index:number): void;
            /** push a line onto the bottom of the content. */
            pushLine(lines:string|string[]): void;
            /** pop a line off the bottom of the content. */
            popLine(index:number): void;
            /** an array containing the content lines. */
            getLines(): void;
            /** an array containing the lines as they are displayed on the screen. */
            getScreenLines(): void;
            /** get a string's real length, taking into account tags. */
            textLength(text:string): number;

            /** enable dragging of the element. */
            enableDrag(): void;
            /** disable dragging of the element. */
            disableDrag(): void;
        }


        //
        // Box
        //

        export interface BoxOptions extends ElementOptions {
            // intentionally empty
        }

        export class Box extends Element {
            constructor(options?:BoxOptions);
            // intentionally empty
        }


        //
        // ScrollableBox
        //

        export interface ScrollableBoxOptions extends BoxOptions {
            /** a limit to the childBase. default is `Infinity`. */
            baseLimit: number;
            /** a option which causes the ignoring of `childOffset`. this in turn causes the childBase to change every time the element is scrolled. */
            alwaysScroll: boolean;
            /** object enabling a scrollbar. */
            scrollbar: ScrollBar;
        }

        /** A box with scrollable content. */
        export class ScrollableBox extends Box {
            constructor(options?:ScrollableBoxOptions);

            /** the offset of the top of the scroll content. */
            childBase: number;
            /** the offset of the chosen item/line. */
            childOffset: number;
            /** scroll the content by a relative offset. */
            scroll(offset:number): void;
            /** scroll the content to an absolute index. */
            scrollTo(index:number): void;
            /** same as `scrollTo`. */
            setScroll(index:number): void;
            /** set the current scroll index in percentage (0-100). */
            setScrollPerc(perc:number): void;
            /** get the current scroll index in lines. */
            getScroll(): number;
            /** get the actual height of the scrolling area. */
            getScrollHeight(): number;
            /** get the current scroll index in percentage. */
            getScrollPerc(): number;
            /** reset the scroll index to its initial state. */
            resetScroll(): void;

        }

        export interface ScrollBar {
            /** style of the scrollbar. */
            style: Style;
            /** style of the scrollbar track if present (takes regular style options). */
            track: Style;
        }


        //
        // ScrollableText
        //

        export interface ScrollableTextOptions extends ScrollableBoxOptions {
            /** whether to enable automatic mouse support for this element. */
            mouse: boolean;
            /** use predefined keys for navigating the text. */
            keys: boolean;
            /** use vi keys with the `keys` option. */
            vi: boolean;
        }

        /** __DEPRECATED__ - Use Box with the `scrollable` and `alwaysScroll` options instead.  A scrollable text box which can display and scroll text, as well as handle pre-existing newlines and escape codes. */
        export class ScrollableText extends ScrollableBox {
            constructor(options?:ScrollableTextOptions);
        }



        //
        // Text
        //

        export interface TextOptions extends ElementOptions {
            align?: string; //'left'|'center'|'right';
        }

        export class Text extends Element {
            constructor(options?:TextOptions);
            // intentionally empty
        }


        //
        // Line
        //

        export interface LineOptions extends BoxOptions {
            orientation?: string; //'vertical'|'horizontal';
            style?: Style;
        }

        export class Line extends Box {
            constructor(options?:LineOptions);
            // intentionally empty
        }


        //
        // List
        //

        export interface ListStyle extends Style {
            selected?: Style;
            item?: Style;
        }

        export interface ListOptions extends BoxOptions
        {
            style?: ListStyle;

            /** whether to automatically enable mouse support for this list (allows clicking items). */
            mouse?: boolean;
            /** use predefined keys for navigating the list. */
            keys?: any;
            /** use vi keys with the keys option. */
            vi?: boolean;
            /** an array of strings which become the list's items. */
            items?: string[];
            /** a function that is called when vi mode is enabled and the key / is pressed. This function accepts a callback function which should be called with the search string. The search string is then used to jump to an item that is found in items. */
            search?: (callback:(searchString:string) => void) => void;
            /** whether the list is interactive and can have items selected (default: true). */
            interactive?: boolean;
        }

        export class List extends Box
        {
            constructor(options?:ListOptions);

            /** The text of the currently selected item. */
            value:string;
            /** The items in the list. */
            items:string[];
            /** The items in the list. */
            ritems:string[];
            /** The index of the current selection. */
            selected:number;

            /** add an item based on a string. */
            addItem(text:string): void;
            /** returns the item index from the list. child can be an element, index, or string. */
            getItemIndex(child:Element|number|string): void;
            /** returns the item element. child can be an element, index, or string. */
            getItem(child:Element|number|string): void;
            /** removes an item from the list. child can be an element, index, or string. */
            removeItem(child:Element|number|string): void;
            /** clears all items from the list. */
            clearItems(): void;
            /** sets the list items to multiple strings. */
            setItems(items:string[]): void;
            /** Sets the current selection by absolute index. */
            select(index:number): void;
            /** Changes the current selection based on current offset. */
            move(offset:number): void;
            /** select item above selected. */
            up(amount:number): void;
            /** select item below selected. */
            down(amount:number): void;
            /** show/focus list and pick an item. the callback is executed with the result. */
            pick(cwd:string, callback:(err:any, file:string) => void): void;

            /** show/focus list and pick an item. the callback is executed with the result. */
            pick(callback:(err:any, file:string) => void): void;
        }

        //
        // Input
        //

        export interface InputOptions extends BoxOptions {
            // intentionally empty
        }

        export class Input extends Box {
            constructor(options?:InputOptions);
            // intentionally empty
        }

        export interface InputOptions extends BoxOptions {
            // intentionally empty
        }

        //
        // Textarea
        //

        export interface TextareaOptions extends InputOptions
        {
            /** use pre-defined keys (`i` or `enter` for insert, `e` for editor, `C-e` for editor while inserting). */
            keys?: boolean;
            /** use pre-defined mouse events (right-click for editor). */
            mouse?: boolean;
            /** call `readInput()` when the element is focused. automatically unfocus. */
            inputOnFocus?: boolean;
        }

        /** A box which allows multiline text input. */
        export class Textarea extends Input
        {
            constructor(options?:TextareaOptions);

            /** the input text. __read-only__. */
            value: string;

            /** submit the textarea (emits `submit`). */
            submit(): void;
            /** cancel the textarea (emits `cancel`). */
            cancel(): void; 
            /** grab key events and start reading text from the keyboard. takes a callback which receives the final value. */
            readInput(callback:GenericCallback): void;
            /** open text editor in `$EDITOR`, read the output from the resulting file. takes a callback which receives the final value. */
            readEditor(callback:GenericCallback): void;
            /** the same as `this.value`, for now. */
            getValue(): string;
            /** clear input. */
            clearValue(): void;
            /** set value. */
            setValue(text:string): void;
        }


        //
        // Textbox
        //

        export interface TextboxOptions extends TextareaOptions {
            /** completely hide text. */
            secret?: boolean;
            /** replace text with asterisks (`*`). */
            censor?: boolean;
        }

        /** A box which allows text input. */
        export class Textbox extends Textarea {
            constructor(options?:TextboxOptions);

            /** completely hide text. */
            secret: boolean;
            /** replace text with asterisks (`*`). */
            censor: boolean;
        }


        //
        // Button
        //

        export interface ButtonOptions extends InputOptions {
        }

        /** A button which can be focused and allows key and mouse input. */
        export class Button extends Input {
            constructor(options?:ButtonOptions);

            // on(event:string, callback:() => void): void;
            // on(event:'press', callback:() => void);

            /** press button.  emits 'press'. */
            press(): void;
        }


        //
        // ProgressBar
        //

        export interface ProgressBarOptions extends InputOptions {
            /** can be `horizontal` or `vertical`. */
            orientation: string;
            /** the character to fill the bar with (default is space). */
            pch: string;
            /** the amount filled (0 - 100). */
            filled: number;
            /** same as `filled`. */
            value: number;
            /** enable key support. */
            keys: boolean;
            /** enable mouse support. */
            mouse: boolean;

            /** contains the extra key 'bar', which defines the style of the bar contents itself. */
            style: ProgressBarStyle;
        }

        export interface ProgressBarStyle extends Style {
            /** style of the bar contents itself. */
            bar: Style;
        }


        export class ProgressBar extends Input {
            constructor(options?:ProgressBarOptions);

            /** progress the bar by a fill amount. */
            progress(amount:number): void;
            /** set progress to specific amount. */
            setProgress(amount:number): void;
            /** reset the bar. */
            reset(): void;
        }

        //
        // Checkbox
        //
        
        export interface CheckboxOptions extends InputOptions {
            /** whether the element is checked or not. */
            checked: boolean;
            /** enable mouse support. */
            mouse: boolean;
        }
        
        
        /** A checkbox which can be used in a form element. */
        export class Checkbox extends Input
        {
            constructor(options?:CheckboxOptions);

            /** the text next to the checkbox (do not use setcontent, use `check.text = ''`). */
            text: string;
            /** whether the element is checked or not. */
            checked: boolean;
            /** same as `checked`. */
            value: boolean;

            /** check the element. */
            check(): void;
            /** uncheck the element. */
            uncheck(): void;
            /** toggle checked state. */
            toggle(): void;
        }


        //
        // RadioSet
        //
        
        export interface RadioSetOptions extends BoxOptions {
        }
        
        
        export class RadioSet extends Box {
            constructor(options?:RadioSetOptions);
        }


        //
        // RadioButton
        //
        
        export interface RadioButtonOptions extends CheckboxOptions {
        }
        
        
        /** A radio button which can be used in a form element. */
        export class RadioButton extends Checkbox {
            constructor(options?:RadioButtonOptions);
        }



        //
        // Prompt
        //
        
        export interface PromptOptions extends BoxOptions {
        }
        
        
        /** A prompt box containing a text input, okay, and cancel buttons (automatically hidden). */
        export class Prompt extends Box
        {
            constructor(options?:PromptOptions);

            /** show the prompt and wait for the result of the textbox. set text and initial value */
            input(text:string, value:any, callback:(val:any) => void): void;
            /** show the prompt and wait for the result of the textbox. set text and initial value */
            setInput(text:string, value:any, callback:(val:any) => void): void;
            /** show the prompt and wait for the result of the textbox. set text and initial value */
            readInput(text:string, value:any, callback:(val:any) => void): void;
        }


        //
        // Question
        //
        
        export interface QuestionOptions extends BoxOptions {
        }
        
        
        /** A question box containing okay and cancel buttons (automatically hidden). */
        export class Question extends Box
        {
            constructor(options?:QuestionOptions);

            /** ask a `question`. `callback` will yield the result. */
            ask(question:string, callback:(result:any) => void): void;
        }


        //
        // Message
        //
        
        export interface MessageOptions extends BoxOptions {
        }
        
        
        /** A box containing a message to be displayed (automatically hidden). */
        export class Message extends Box
        {
            constructor(options?:MessageOptions);

            /** display a message for a time (default is 3 seconds). set time to 0 for a perpetual message that is dismissed on keypress. */
            log(text:string, timeOrCallback:number|MessageCallback, callback?:MessageCallback): void;
            /** display a message for a time (default is 3 seconds). set time to 0 for a perpetual message that is dismissed on keypress. */
            display(text:string, timeOrCallback:number|MessageCallback, callback?:MessageCallback): void;
            /** display an error in the same way. */
            error(text:string, timeOrCallback:number|MessageCallback, callback?:MessageCallback): void;
        }

        export interface MessageCallback {
            (): void;
        }


        //
        // Loading
        //
        
        export interface LoadingOptions extends BoxOptions {
        }
        
        /** A box with a spinning line to denote loading (automatically hidden). */
        export class Loading extends Box
        {
            constructor(options?:LoadingOptions);

            /** display the loading box with a message. will lock keys until `stop` is called. */
            load(text:string): void;
            /** hide loading box. unlock keys. */
            stop(): void;
        }


        //
        // Listbar
        //
        
        export interface ListbarOptions extends BoxOptions
        {
            /** Listbar's `style` object includes sub-styles for `selected` and `item`. */
            style?: ListbarStyle;

            /** set buttons using an object with keys as titles of buttons, containing of objects containing keys of `keys` and `callback`. */
            items?: ListbarItemSet;
            /** set buttons using an object with keys as titles of buttons, containing of objects containing keys of `keys` and `callback`. */
            commands?: ListbarItemSet;
            /** automatically bind list buttons to keys 0-9. */
            autoCommandKeys?: boolean;
        }

        export interface ListbarItemSet {
            [name: string]: ListbarItem;
        }

        export interface ListbarItem {
            keys: string[];
            callback: GenericCallback;
        }
        
        export interface ListbarStyle extends Style
        {
             /** style for a selected item. */
             selected: Style;
             /** style for an unselected item. */
             item: Style;
        }
        
        /** A horizontal list. Useful for a main menu bar. */
        export class Listbar extends Box
        {
            constructor(options?:ListbarOptions);

            /** append an item to the bar. */
            add(item:ListbarItem, callback:GenericCallback): void;
            /** append an item to the bar. */
            addItem(item:ListbarItem, callback:GenericCallback): void;
            /** append an item to the bar. */
            appendItem(item:ListbarItem, callback:GenericCallback): void;

            /** select button and execute its callback. */
            selectTab(index: number): void;

            /** set commands (see `commands` option above). */
            setItems(commands: ListbarItemSet): void;
            /** select an item on the bar. */
            select(offset: number): void;
            /** remove item from the bar. */
            removeItem(child:ListbarItem): void;
            /** move focus relatively across the bar. */
            move(offset: number): void;
            /** move focus left relatively across the bar. */
            moveLeft(offset: number): void;
            /** move focus right relatively across the bar. */
            moveRight(offset: number): void;
        }


        //
        // Log
        //
        
        export interface LogOptions extends ScrollableTextOptions {
            /** amount of scrollback allowed. default: Infinity. */
            scrollback?: number;
            /** scroll to bottom on input even if the user has scrolled up. default: false. */
            scrollOnInput?: boolean;
        }
        
        
        /** A log permanently scrolled to the bottom. */
        export class Log extends ScrollableText
        {
            constructor(options?:LogOptions);

            /** amount of scrollback allowed. default: Infinity. */
            scrollback: number;
            /** scroll to bottom on input even if the user has scrolled up. default: false. */
            scrollOnInput: boolean;

            /** add a log line. */
            log(text:string): void;
            /** add a log line. */
            add(text:string): void;
        }


        //
        // Table
        //
        
        export interface TableOptions extends BoxOptions
        {
            /** array of array of strings representing rows (same as `data`). */
            rows?: string[][];
            /** array of array of strings representing rows (same as `rows`). */
            data?: string[][];
            /** spaces to attempt to pad on the sides of each cell. `2` by default: one space on each side (only useful if the width is shrunken). */
            pad?: number;
            /** do not draw inner cells. */
            noCellBorders?: boolean;
            /** fill cell borders with the adjacent background color. */
            fillCellBorders?: boolean;

            /** includes `header` and `cell` substyles. */
            style?: TableStyle;
        }

        export interface TableStyle extends Style {
            /** header style. */
            header: Style;
            /** cell style. */
            cell: Style;
        }
        
        /** A stylized table of text elements. */ 
        export class Table extends Box
        {
            /** includes `header` and `cell` substyles. */
            style: TableStyle;

            /** set rows in table. array of arrays of strings. */
            setData(rows: string[][]): void;
            /** set rows in table. array of arrays of strings. */
            setRows(rows: string[][]): void;
        }


        //
        // ListTable
        //
        
        export interface ListTableOptions extends ListOptions
        {
            /** array of array of strings representing rows (same as `data`). */
            rows?: string[][];
            /** array of array of strings representing rows (same as `rows`). */
            data?: string[][];
            /** spaces to attempt to pad on the sides of each cell. `2` by default: one space on each side (only useful if the width is shrunken). */
            pad?: number;
              
            /** do not draw inner cells. */
            noCellBorders?: boolean;

            /** includes `header` and `cell` substyles. */
            style?: TableStyle;
        }
        
        export interface ListTableStyle extends TableStyle {
        }
        
        
        /** A stylized table of text elements with a list. */
        export class ListTable extends List
        {
            constructor(options?:ListTableOptions);

            /** set rows in table. array of arrays of strings. */
            setData(rows: string[][]): void;
            /** set rows in table. array of arrays of strings. */
            setRows(rows: string[][]): void;
        }

        //
        // Image
        //
        
        export interface ImageOptions extends BoxOptions {
            /** path to image. */
            file: string;
            /** path to w3mimgdisplay. if a proper w3mimgdisplay path is not given, blessed will search the entire disk for the binary. */
            w3m: string;
        }
        
        
        /** Display an image in the terminal (jpeg, png, gif) using w3mimgdisplay. Requires w3m to be installed. X11 required: works in xterm, urxvt, and possibly other terminals. */
        export class Image extends Box
        {
            constructor(options?:ImageOptions);

            /** set the image in the box to a new path. */
            setImage (img:string, callback:GenericCallback): void;
            /** clear the current image. */
            clearImage (callback:GenericCallback): void;
            /** get the size of an image file in pixels. */
            imageSize (img:string, callback:GenericCallback): void;
            /** get the size of the terminal in pixels. */
            termSize (callback:GenericCallback): void;
            /** get the pixel to cell ratio for the terminal. */
            getPixelRatio (callback:GenericCallback): void;
        }


        //
        // Form
        //

        export interface FormOptions extends BoxOptions {
            /** allow default keys (tab, vi keys, enter). */
            keys?:boolean;
            /** allow vi keys. */
            vi?:boolean;
        }

        export class Form extends Box
        {
            constructor(options?:FormOptions);

            /** last submitted data. */
            submission: any;

            // on(event:string,   callback:()     => void): void;
            // on(event:'submit', callback:(data) => void): void;
            // on(event:'cancel', callback:()     => void): void;
            // on(event:'reset',  callback:()     => void): void;

            next(): void;
            previous(): void;

            resetSelected(): void;
            /** focus first form element. */
            focusFirst(): void;
            /** focus last form element. */
            focusLast(): void;
            /** focus next form element. */
            focusNext(): void;
            /** focus previous form element. */
            focusPrevious(): void;
            /** submit the form. */
            submit(): void;
            /** discard the form. */
            cancel(): void;
            /** clear the form. */
            reset(): void;
        }


        //
        // FileManager
        //

        export interface FileManagerOptions extends ListOptions {
            cwd?: string;
        }

        export interface DirectoryEntry {
            name: string;
            text: string;
            dir: boolean;
            symlink: boolean;
        }

        export class FileManager extends List
        {
            constructor(options?:FileManagerOptions);

            cwd: string;

            useFormatter (formatterFn:(entry:DirectoryEntry) => DirectoryEntry): void;

            /** refresh the file list (perform a readdir on cwd and update the list items). */
            refresh (cwd?:string, callback?:() => void): void;

            /** refresh the file list. */
            refresh (callback?:() => void): void;

            /** reset back to original cwd. */
            reset (cwd?:string, callback?:() => void): void;
        }


        //
        // Terminal
        //

        export interface TerminalOptions extends BoxOptions
        {
            /** handler for input data. */
            handler?: (userInput:Buffer) => void;
            /** name of shell. $SHELL by default. */
            shell?:string;
            /** args for shell. */
            args?:any;
            /** can be line, underline, and block. */
            cursor?:string; //'line'|'underline'|'block';
        }

        export class Terminal extends Box
        {
            /** reference to the headless term.js terminal. */
            term: any;
            /** reference to the pty.js pseudo terminal. */
            pty: any;

            /** write data to the terminal. */
            write(data:string): void;

            /** nearly identical to `element.screenshot`, however, the specified region includes the terminal's _entire_ scrollback, rather than just what is visible on the screen. */
            screenshot(xi?:number, xl?:number, yi?:number, yl?:number): string;
        }


        export interface NodeChildProcessExecOptions
        {
            cwd?: string;
            stdio?: any;
            customFds?: any;
            env?: any;
            encoding?: string;
            timeout?: number;
            maxBuffer?: number;
            killSignal?: string;
        }
    }

    export = Blessed;
}



