import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from '@reach/combobox';

import * as React from 'react';
import { render } from 'react-dom';

const GoodExample = () => (
    <Combobox>
        <ComboboxInput aria-labelledby="demo" />
        <ComboboxPopover>
            <ComboboxList aria-labelledby="demo">
                <ComboboxOption value="Apple" />
                <ComboboxOption value="Banana" />
                <ComboboxOption value="Orange" />
                <ComboboxOption value="Pineapple" />
                <ComboboxOption value="Kiwi" />
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
);

render(<GoodExample />, document.getElementById('app'));
render(<Combobox />, document.getElementById('app'));
render(<ComboboxInput />, document.getElementById('app'));
render(<ComboboxPopover />, document.getElementById('app'));
render(<ComboboxList />, document.getElementById('app'));
render(<ComboboxOptionText />, document.getElementById('app'));

// $ExpectError
render(<ComboboxOption />, document.getElementById('app'));
