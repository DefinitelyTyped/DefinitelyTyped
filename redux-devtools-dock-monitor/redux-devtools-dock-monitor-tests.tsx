/// <reference path="../react/react.d.ts" />
/// <reference path="./redux-devtools-dock-monitor.d.ts" />

import * as React from 'react'
import DockMonitor from 'redux-devtools-dock-monitor'

let dockMonitor = <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' />