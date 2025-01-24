interface WinBoxControlType {
    class?: string
    image?: string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    click?: Function
    index?: number
}

interface WinBox {
    id: string | number
    title: string
    dom: Node
    window: Node
    body: HTMLElement
    header: number
    x: string | number
    y: string | number
    width: string | number
    height: string | number
    minwidth: string | number
    minheight: string | number
    maxwidth: string | number
    maxheight: string | number
    top: string | number
    right: string | number
    bottom: string | number
    left: string | number
    index: number
    overflow: boolean
    min: boolean
    max: boolean
    full: boolean
    hidden: boolean
    focused: boolean
    onclose: (force: boolean) => boolean
    onfocus: () => void
    onblur: () => void
    onmove: (x: number, y: number) => void
    onresize: (width: number, height: number) => void
    onfullscreen: () => void
    onmaximize: () => void
    onminimize: () => void
    onrestore: () => void
    onhide: () => void
    onshow: () => void

    mount(src?: Element): WinBox

    unmount(dest?: Element): WinBox

    setTitle(title: string): WinBox

    setIcon(url: string): WinBox

    setBackground(background: string): WinBox

    setUrl(url: string): WinBox

    focus(state?: boolean): WinBox

    blur(state?: boolean): WinBox

    hide(state?: boolean): WinBox

    show(state?: boolean): WinBox

    minimize(state?: boolean): WinBox

    restore(): WinBox

    maximize(state?: boolean): WinBox

    fullscreen(state?: boolean): WinBox

    close(force?: boolean): boolean | undefined

    move(x?: string | number, y?: string | number, skipUpdate?: boolean): WinBox

    resize(w?: string | number, h?: string | number, skipUpdate?: boolean): WinBox

    addControl(control: WinBoxControlType): WinBox

    removeControl(control: WinBoxControlType): WinBox

    addClass(classname: string): WinBox

    removeClass(classname: string): WinBox

    hasClass(classname: string): WinBox

    toggleClass(classname: string): WinBox
}

declare namespace WinBox {
    interface WinBoxConstructor {
        (title: string, params?: Params): WinBox

        (params: Params): WinBox

        new(title: string, params?: Params): WinBox

        new(params: Params): WinBox
    }

    interface Params {
        id?: string
        index?: number
        root?: Node
        tpl?: Node
        title?: string
        icon?: string
        mount?: Node
        html?: string
        url?: string
        width?: string | number
        height?: string | number
        minwidth?: string | number
        minheight?: string | number
        maxwidth?: string | number
        maxheight?: string | number
        min?: boolean
        max?: boolean
        hidden?: boolean
        modal?: boolean
        x?: "right" | "center" | string | number
        y?: "bottom" | "center" | string | number
        top?: string | number
        left?: string | number
        right?: string | number
        bottom?: string | number
        background?: string
        border?: string | number
        header?: number
        classname?: string | string[]
        oncreate?: (params?: Params) => void
        onclose?: (force?: boolean) => boolean
        onfocus?: () => void
        onblur?: () => void
        onmove?: (x: number, y: number) => void
        onresize?: (width: number, height: number) => void
        onfullscreen?: () => void
        onminimize?: () => void
        onmaximize?: () => void
        onrestore?: () => void
        onhide?: () => void
        onshow?: () => void
        onload?: () => void
    }
}

declare const WinBox: WinBox.WinBoxConstructor & {
    new: ((title: string, params?: WinBox.Params) => WinBox) | ((params: WinBox.Params) => WinBox)
}

export = WinBox
