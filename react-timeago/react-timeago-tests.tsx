/// <reference path="react-timeago.d.ts" />

import * as React from "react"
import Timeago from "react-timeago"

class Master extends React.Component<React.Props<{}>, {}> {
        render() {
                return <div>
                        <Timeago date="2015-01-01" />
                        <Timeago date={new Date()} />
                        <Timeago date={1456229530} />
                        <Timeago date="2015-01-01" live={true} />
                        <Timeago date="2015-01-01" live={false} />
                        <Timeago date="2015-01-01"
                          formatter={(v: number, u: string, s: string)}/>
                        <Timeago date="2015-01-01"
                          formatter={(v: number, u: string, s: string, d: Date)}/>
                        <Timeago date="2015-01-01" component="div" />
                        <Timeago date="2015-01-01" minPeriod={12} />
                        <Timeago date="2015-01-01" maxPeriod={12} />
                </div>
        }
}
