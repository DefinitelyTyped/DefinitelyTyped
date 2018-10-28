import * as React from 'react'
import DockMonitor from 'redux-devtools-dock-monitor'

let dockMonitor = <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' />
let dockMonitorOptionalProps = <DockMonitor toggleVisibilityKey='ctrl-h'
                                            changePositionKey='ctrl-q'
                                            changeMonitorKey='ctrl-m'
                                            fluid={false}
                                            defaultSize={0.5}
                                            defaultPosition='bottom'
                                            defaultIsVisible={false} />
