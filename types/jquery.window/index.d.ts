// Type definitions for Window plugin for jQuery 5.0.4
// Project: http://fstoke.me/jquery/window/
// Definitions by: Ryan Graham <https://github.com/ryan-codingintrigue/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JQueryWindow {
    // Instance methods
    interface Window {
        /**
        get window id
        **/
        getWindowId(): string;
        /**
        get window container's parent panel, it's a jQuery object
        **/
        getCaller(): JQuery;
        /**
        get window container panel, it's a jQuery object
        **/
        getContainer(): JQuery;
        /**
        get window header panel, it's a jQuery object
        **/
        getHeader(): JQuery;
        /**
        get window frame panel, it's a jQuery object
        **/
        getFrame(): JQuery;
        /**
        get window footer panel, it's a jQuery object
        **/
        getFooter(): JQuery;
        /**
        set current window as screen center
        **/
        alignCenter(): void;
        /**
        set current window as horizontal center
        **/
        alignHorizontalCenter(): void;
        /**
        set current window as vertical center
        **/
        alignVerticalCenter(): void;
        /**
        select current window, it will increase the original z-index value with 2
        **/
        select(): void;
        /**
        unselect current window, it will set the z-index as original options.z
        **/
        unselect(): void;
        /**
        move current window to target position or shift it by passed distance
        **/
        move(x: number, y: number, bShift: boolean): void;
        /**
        resize current window to target width/height
        **/
        resize(width: number, height: number): void;
        /**
        maximize current window
        **/
        maximize(): void;
        /**
        minimize current window
        **/
        minimize(): void;
        /**
        restore current window, it could be maximized or cascade status
        **/
        restore(): void;
        /**
        close current window
        **/
        close(quiet: boolean): void;
        /**
        hide current window
        **/
        hide(): void;
        /**
        show current window
        **/
        show(): void;
        /**
        change window title
        **/
        setTitle(title: string): void;
        /**
        change iframe url
        **/
        setUrl(url: string): void;
        /**
        change frame content
        **/
        setContent(content: string|JQuery|HTMLElement): void;
        /**
        change footer content
        **/
        setFooterContent(content: string|JQuery|HTMLElement): void;
        /**
        get window title text
        **/
        getTitle(): string;
        /**
        get url string
        **/
        getUrl(): string;
        /**
        get frame html content
        **/
        getContent(): string;
        /**
        get footer html content
        **/
        getFooterContent(): string;
        /**
        get window maximized status
        **/
        isMaximized(): boolean;
        /**
        get window minmized status
        **/
        isMinimized(): boolean;
        /**
        get window selected status
        **/
        isSelected(): boolean;
        /**
        set window icon
        **/
        setIcon(iconUrl: string): void;
        /**
        show window icon
        **/
        showIcon(): void;
        /**
        hide window icon
        **/
        hideIcon(): void;
    }

    // Static methods
    interface Static {
        (options: WindowOptions): JQueryWindow.Window;
        /**
        initialize with customerized static setting attributes
        **/
        prepare(options?: StaticOptions): void;
        /**
        close all created windows
        **/
        closeAll(quiet?: boolean): void;
        /**
        hide all created windows
        **/
        hideAll(): void;
        /**
        show all created windows
        **/
        showAll(): void;
        /**
        return all created windows instance
        **/
        getAll(): Array<JQueryWindow.Window>;
        /**
        get the window instance by passed window id
        **/
        getWindow(windowId: string): JQueryWindow.Window;
        /**
        get the selected window instance
        **/
        getSelectedWindow(): JQueryWindow.Window;
    }

    // Static options
    interface StaticOptions {
        /**
        the direction of minimized window dock at. the available values are [left, right, top, bottom]
        **/
        dock?: string;
        /**
        the area which the windows will dock at
        **/
        dockArea?: JQuery|HTMLElement;
        /**
        the speed of animations: maximize, minimize, restore, shift, in milliseconds
        **/
        animationSpeed?: number;
        /**
        the narrow dimension of minimized window
        **/
        minWinNarrow?: number;
        /**
        the long dimension of minimized window
        **/
        minWinLong?: number;
        /**
        to handle browser scrollbar when window status changed(maximize, minimize, cascade)
        **/
        handleScrollbar?: boolean;
        /**
        to decide show log in firebug, IE8, chrome console
        **/
        showLog?: boolean;
    }

    // Instance options
    interface WindowOptions {
        /**
        an icon image url string. if this attribute is given, it will force to replace the original favicon of remote page on window. or you can set it as null to hide icon.
        **/
        icon?: string;
        /**
        the title text of window
        **/
        title: string;
        /**
        the target url of iframe ready to load.
        **/
        url?: string;
        /**
        this attribute only works when url is null. when passing a jquery object or a element, it will clone the original one to append.
        **/
        content?: string|JQuery|HTMLElement;
        /**
        same as content attribute, but it's put on footer panel.
        **/
        footerContent?: string|JQuery|HTMLElement;
        /**
        container extra class
        **/
        containerClass?: string;
        /**
        header extra class
        **/
        headerClass?: string;
        /**
        frame extra class
        **/
        frameClass?: string;
        /**
        footer extra class
        **/
        footerClass?: string;
        /**
        selected header extra class
        **/
        selectedHeaderClass?: string;
        /**
        the x-axis value on screen(or caller element), if -1 means put on screen(or caller element) center
        **/
        x?: number;
        /**
        the y-axis value on screen(or caller element), if -1 means put on screen(or caller element) center
        **/
        y?: number;
        /**
        the css z-index value
        **/
        z?: number;
        /**
        window width
        **/
        width?: number;
        /**
        window height
        **/
        height?: number;
        /**
        the minimum width, if -1 means no checking
        **/
        minWidth?: number;
        /**
        the minimum height, if -1 means no checking
        **/
        minHeight?: number;
        /**
        the maximum width, if -1 means no checking
        **/
        maxWidth?: number;
        /**
        the maximum height, if -1 means no checking
        **/
        maxHeight?: number;
        /**
        to control show modal on background
        **/
        showModal?: boolean;
        /**
        the opacity of modal dialog
        **/
        modalOpacity?: number;
        /**
        to control show footer panel
        **/
        showFooter?: boolean;
        /**
        to control display window as round corner
        **/
        showRoundCorner?: boolean;
        /**
        to control window closable
        **/
        closable?: boolean;
        /**
        to control window minimizable
        **/
        minimizable?: boolean;
        /**
        to control window maximizable
        **/
        maximizable?: boolean;
        /**
        to control window with remote url could be bookmarked
        **/
        bookmarkable?: boolean;
        /**
        to control window draggable
        **/
        draggable?: boolean;
        /**
        to control window resizable
        **/
        resizable?: boolean;
        /**
        to show scroll bar or not
        **/
        scrollable?: boolean;
        /**
        to check window dialog overflow html body or caller element
        **/
        checkBoundary?: boolean;
        /**
         to limit window only can be dragged within browser window. this attribute only works when checkBoundary is true and caller is null.
        **/
        withinBrowserWindow?: boolean;
        /**
        to describe the customized button display and callback function
        **/
        custBtns?: Array<JQueryWindow.Button>;
        /**
        a callback function while container is added into body
        **/
        onOpen?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while whole window display routine is finished
        **/
        onShow?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while user click close button
        **/
        onClose?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while user select the window
        **/
        onSelect?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while window unselected
        **/
        onUnselect?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while window is going to drag
        **/
        onDrag?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function after window dragged
        **/
        afterDrag?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while window is going to resize
        **/
        onResize?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function after window resized
        **/
        afterResize?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while window is going to minimize
        **/
        onMinimize?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function after window minimized
        **/
        afterMinimize?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while window is going to maximize
        **/
        onMaximize?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function after window maximized
        **/
        afterMaximize?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while window is going to cascade
        **/
        onCascade?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function after window cascaded
        **/
        afterCascade?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while iframe ready to connect remoting url. this attribute only works while url attribute is given
        **/
        onIframeStart?: (wnd: JQueryWindow.Window) => void;
        /**
        a callback function while iframe load finished. this attribute only works while url attribute is given
        **/
        onIframeEnd?: (wnd: JQueryWindow.Window) => void;
        /**
        if null means no check, or pass a string to show warning message while iframe is going to redirect current top page
        **/
        iframeRedirectCheckMsg?: string;
        /**
        random the new created window position, it only works when options x,y value both are -1
        **/
        createRandomOffset?: { x: number; y: number };
    }

    // Button definition
    interface Button {
        /**

        **/
        id: string;
        /**

        **/
        title?: string;
        /**

        **/
        clazz?: string;
        /**

        **/
        style?: string;
        /**

        **/
        image: string;
        /**

        **/
        callback: (btn: JQueryWindow.Button, wnd: JQueryWindow.Window) => void;
    }

}

// Register with JQuery instance
interface JQuery {
    window(options: JQueryWindow.WindowOptions): JQueryWindow.Window;
}

// Register with JQuery static
interface JQueryStatic {
    window: JQueryWindow.Static;
}
