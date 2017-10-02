import * as React from "react";
import * as ReactDOM from "react-dom";

import { Calendar, Combobox, DateTimePicker, DropdownList, Multiselect, NumberPicker, SelectList } from "react-widgets";

function tagComponent(props: { value: string }) {
    return <span>{props.value}</span>;
}

function itemComponent(props: { value: string }) {
    return <span>{props.value}</span>;
}

class Test extends React.Component<React.Props<{}>> {
    render() {
        return (
        <div>
            <div>
                <Calendar />
                <Combobox />
                <DateTimePicker />
                <DropdownList />
                <Multiselect />
                <NumberPicker />
                <SelectList />
            </div>
            <div>
                <Calendar defaultValue={new Date()} />
                <Combobox defaultValue={'foo'}/>
                <DateTimePicker defaultValue={new Date()}/>
                <DropdownList defaultValue={'foo'}/>
                <Multiselect defaultValue={['foo']}/>
                <NumberPicker defaultValue={1}/>
                <SelectList defaultValue={'foo'}/>
            </div>
            <div>
                <Multiselect
                    tagComponent={tagComponent}
                    itemComponent={itemComponent}
                 />
                 <Combobox
                    itemComponent={itemComponent}
                 />
                 <DropdownList
                    itemComponent={itemComponent}
                 />
            </div>
            <div>
                <Calendar disabled readOnly />
                <Combobox disabled readOnly dropUp placeholder={'Some text'}/>
                <DateTimePicker disabled readOnly dropUp />
                <DropdownList disabled readOnly dropUp />
                <Multiselect disabled readOnly dropUp />
                <NumberPicker disabled readOnly />
                <SelectList disabled readOnly/>
            </div>
        </div>
        );
    }
}
