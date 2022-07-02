import * as React from 'react';

import SelectInput, { ItemOfSelectInput } from 'ink-select-input';
// NOTE: `import SelectInput = require('ink-select-input');` will work as well.
// If importing using ES6 default import as above,
// `allowSyntheticDefaultImports` flag in compiler options needs to be set to `true`

const items: ReadonlyArray<ItemOfSelectInput> = [
    {
        label: 'First',
        value: 'first',
        key: 0,
    },
    {
        label: 'Second',
        value: 'second',
    },
    {
        label: 'Third',
        value: 'third',
    },
];

class Demo extends React.PureComponent {
    handleSelect = (item: ItemOfSelectInput) => {};

    render() {
        return <SelectInput items={items} onSelect={this.handleSelect} />;
    }
}
