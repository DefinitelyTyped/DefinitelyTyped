import * as React from 'react';

// tslint:disable-next-line:import-name
import SelectInput, { ItemOfSelectInput } from 'ink-select-input';
// NOTE: `import SelectInput = require('ink-select-input');` will work as well.
// If importing using ES6 default import as above,
// `allowSyntheticDefaultImports` flag in compiler options needs to be set to `true`

const items: ReadonlyArray<ItemOfSelectInput> = [
	{
		label: 'First',
		value: 'first',
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

const Demo: React.PureComponent = () => {
	const handleSelect = (item: ItemOfSelectInput) => {
		console.log(item);
	};

	return <SelectInput items={items} onSelect={handleSelect} />;
};
