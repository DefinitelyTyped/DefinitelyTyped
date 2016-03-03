// Type definitions for redux-devtools-dock-monitor 1.0.1
// Project: https://github.com/gaearon/redux-devtools-dock-monitor
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "redux-devtools-dock-monitor" {
  import * as React from 'react'

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
    defaultPosition?: string

    /**
     * @default true
     */
    defaultIsVisible?: boolean
  }

  export default class DockMonitor extends React.Component<IDockMonitorProps, any> {}
}