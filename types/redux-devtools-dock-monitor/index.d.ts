// Type definitions for redux-devtools-dock-monitor 1.1.1
// Project: https://github.com/gaearon/redux-devtools-dock-monitor
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

import * as React from 'react'

type DockPosition = 'left' | 'top' | 'right' | 'bottom'

interface IDockMonitorProps {
    /**
     * Any valid Redux DevTools monitor.
     */
    children?: React.ReactNode

    /**
     * A key or a key combination that toggles the dock visibility.
     * Must be recognizable by parse-key (for example, 'ctrl-h')
     */
    toggleVisibilityKey: string

    /**
     * A key or a key combination that toggles the dock position.
     * Must be recognizable by parse-key (for example, 'ctrl-w')
     */
    changePositionKey: string

    /**
     * A key or a key combination that switches the currently visible monitor.
     * Must be recognizable by parse-key (for example, 'ctrl-m')
     * Required if you use more than one monitor.
     *
     * @default undefined
     */
    changeMonitorKey?: string

    /**
     * When true, the dock size is a fraction of the window size, fixed otherwise.
     *
     * @default true
     */
    fluid?: boolean

    /**
     * Size of the dock. When fluid is true, a float (0.5 means half the window size).
     * When fluid is false, a width in pixels
     *
     * @default 0.3 (3/10th of the window size)
     */
    defaultSize?: number

    /**
     * Where the dock appears on the screen.
     * Valid values: 'left', 'top', 'right', 'bottom'
     *
     * @default 'right'
     */
    defaultPosition?: DockPosition

    /**
     * @default true
     */
    defaultIsVisible?: boolean
}

export default class DockMonitor extends React.Component<IDockMonitorProps> { }
