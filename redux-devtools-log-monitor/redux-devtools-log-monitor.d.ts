// Type definitions for redux-devtools-log-monitor 1.0.1
// Project: https://github.com/gaearon/redux-devtools-log-monitor
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "redux-devtools-log-monitor" {
  import * as React from 'react'

  interface ILogMonitorProps {
    /**
     * Either a string referring to one of the themes provided by 
     * redux-devtools-themes or a custom object of the same format.
     * 
     * @see https://github.com/gaearon/redux-devtools-themes
     */
    theme?: string

    /**
     * A function that selects the slice of the state for DevTools to show.
     *  
     * @example state => state.thePart.iCare.about.
     * @default state => state.
     */
    select?: (state: any) => any

    /**
     * When true, records the current scroll top every second so it 
     * can be restored on refresh. This only has effect when used together 
     * with persistState() enhancer from Redux DevTools.
     * 
     * @default true
     */
    preserveScrollTop?: boolean
  }

  export default class LogMonitor extends React.Component<ILogMonitorProps, any> {}
}