
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="react-widgets.d.ts" />

import * as React from "react"
import * as ReactDOM from "react-dom"

import { Calendar, ComboBox, DateTimePicker, DropdownList, Multiselect, NumberPicker, SelectList } from "react-widgets"

class Test extends React.Component<React.Props<{}>, {}> {

    render() {
        return <div>
            <Calendar />
            <ComboBox />
            <DateTimePicker />
            <DropdownList />
            <Multiselect />
            <NumberPicker />
            <SelectList />
        </div>
    }

}