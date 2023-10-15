import QuickPicker from "quick-picker";
import * as React from "react";

interface CustomItem {
    foo: string;
    bar: number;
}

const items: CustomItem[] = [
    {
        foo: "foo",
        bar: 1,
    },
    {
        foo: "baz",
        bar: 2,
    },
];

QuickPicker.open<CustomItem>({
    item: {
        foo: "bar",
        bar: 1,
    },
    items,
    onChange: item => {
        // typeof item is CustomItem
    },
    onPressDone: item => {
        // typeof item is CustomItem
    },
    display: "calendar",
    doneButtonText: "Picking is done",
    pickerType: "normal",
    topRow: <div>asdasddas</div>,
    disableTopRow: false,
    is24Hour: true,
});

QuickPicker.close();
