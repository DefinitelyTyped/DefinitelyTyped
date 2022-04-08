import * as Autocomplete from 'react-autocomplete';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

const items = ['hello', 'world'];

render(
    <Autocomplete
        items={items}
        getItemValue={(item) => item}
        renderItem={(item) => <div key={item}>{item}</div>}
        value={items[0]}
    />,
    container,
);

// $ExpectError
const renderMenu: React.ComponentProps<typeof Autocomplete>['renderMenu'] = (
    (item: string[]) => <div></div>
);
