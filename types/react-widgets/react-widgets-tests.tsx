import * as React from "react";
import * as ReactDOM from "react-dom";

import { Calendar, Combobox, DateTimePicker, DropdownList, Multiselect, NumberPicker, SelectList } from "react-widgets";
import * as CalendarDefault from "react-widgets/lib/Calendar";
import * as ComboboxDefault from "react-widgets/lib/Combobox";
import * as DateTimePickerDefault from "react-widgets/lib/DateTimePicker";
import * as DropdownListDefault from "react-widgets/lib/DropdownList";
import * as MultiselectDefault from "react-widgets/lib/Multiselect";
import * as NumberPickerDefault from "react-widgets/lib/NumberPicker";
import * as SelectListDefault from "react-widgets/lib/SelectList";
/* tslint:disable:no-duplicate-imports */
import { CalendarMessages, CalendarProps, CalendarView } from "react-widgets/lib/Calendar";
import { ComboboxMessages, ComboboxProps } from "react-widgets/lib/Combobox";
import { DateTimePickerMessages, DateTimePickerProps } from "react-widgets/lib/DateTimePicker";
import { DropdownListMessages, DropdownListProps } from "react-widgets/lib/DropdownList";
import { MultiselectMessages, MultiselectProps } from "react-widgets/lib/Multiselect";
import { NumberPickerMessages, NumberPickerProps } from "react-widgets/lib/NumberPicker";
import { SelectListMessages, SelectListProps } from "react-widgets/lib/SelectList";
/* tslint:enable:no-duplicate-imports */

function tagComponent(props: { value: string }) {
    return <span>{props.value}</span>;
}

function itemComponent(props: { value: string }) {
    return <span>{props.value}</span>;
}

function listComponent(props: { value: string }) {
    return <span>{props.value}</span>;
}

class Test extends React.Component {
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
                    <CalendarDefault />
                    <ComboboxDefault />
                    <DateTimePickerDefault />
                    <DropdownListDefault />
                    <MultiselectDefault />
                    <NumberPickerDefault />
                    <SelectListDefault />
                </div>
                <div>
                    <Calendar defaultValue={new Date()} />
                    <Combobox defaultValue={"foo"} />
                    <DateTimePicker defaultValue={new Date()} />
                    <DropdownList defaultValue={"foo"} />
                    <Multiselect defaultValue={["foo"]} />
                    <NumberPicker defaultValue={1} />
                    <SelectList defaultValue={"foo"} />
                </div>
                <div>
                    <Multiselect tagComponent={tagComponent} itemComponent={itemComponent} />
                    <Combobox itemComponent={itemComponent} listComponent={listComponent} />
                    <DropdownList itemComponent={itemComponent} listComponent={listComponent} />
                    <Multiselect listComponent={listComponent} />
                    <SelectList listComponent={listComponent} />
                </div>
                <div>
                    <Calendar disabled readOnly />
                    <Combobox disabled readOnly dropUp placeholder={"Some text"} />
                    <DateTimePicker disabled readOnly dropUp />
                    <DropdownList disabled readOnly dropUp />
                    <Multiselect disabled readOnly dropUp />
                    <NumberPicker disabled readOnly />
                    <SelectList disabled readOnly />
                </div>
                <div>
                    <Calendar autoFocus defaultValue={new Date()} defaultView="year" views={["year", "decade"]} />
                    <CalendarDefault
                        autoFocus
                        defaultValue={new Date()}
                        defaultView="year"
                        views={["year", "decade"]}
                    />
                    <Combobox autoFocus delay={300} name="box" />
                    <Combobox busy busySpinner={<span className="fas fa-sync fa-spin" />} />
                    <DateTimePicker autoFocus open="date" />
                    <DropdownList autoFocus delay={350} name="list" multiple={false} />
                    <DropdownList containerClassName="list-items" />
                    <Multiselect autoFocus allowCreate />
                    <Multiselect containerClassName="multiselect-container" />
                    <NumberPicker autoFocus name="numbers" placeholder="hello" />
                    <SelectList autoFocus delay={400} tabIndex={-1} name="list" />
                </div>
                <div>
                    <DateTimePicker
                        dropUp={true}
                        containerClassName="d-flex"
                        timeIcon={<i className="fa fa-clock" />}
                    />
                </div>
                <div>
                    <DateTimePicker
                        parse={(str: string): Date | undefined => {
                            if (str) {
                                return new Date(str);
                            }
                            return undefined;
                        }}
                    />
                </div>
            </div>
        );
    }
}
