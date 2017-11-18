import * as React from 'react'
import LogMonitor from 'redux-devtools-log-monitor'

let logMonitor = <LogMonitor />
let logMonitorWithStringTheme = <LogMonitor theme='tomorrow' />

const customTheme = {
  scheme: 'Oscar Award Winner',
  author: 'Nic Cage',
  base00: '#000000',
  base01: '#000000',
  base02: '#000000',
  base03: '#000000',
  base04: '#000000',
  base05: '#000000',
  base06: '#000000',
  base07: '#000000',
  base08: '#000000',
  base09: '#000000',
  base0A: '#000000',
  base0B: '#000000',
  base0C: '#000000',
  base0D: '#000000',
  base0E: '#000000',
  base0F: '#000000'
}

let logMonitorWithCustomTheme = <LogMonitor theme={customTheme} />

let logMonitorWithOtherOptProps = <LogMonitor select={(state: any) => state}
                                              preserveScrollTop={true}
                                              expandActionRoot={true}
                                              expandStateRoot={true} />
