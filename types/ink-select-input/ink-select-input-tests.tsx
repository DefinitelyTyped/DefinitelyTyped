/** @jsx h */
import { h, InkComponent } from 'ink';
import SelectInput from 'ink-select-input';
// NOTE: `import SelectInput = require('ink-select-input');` will work as well.
// If importing using ES6 default import as above,
// `allowSyntheticDefaultImports` flag in compiler options needs to be set to `true`

interface DemoItem {
    label: string;
     value: string;
}

const items: ReadonlyArray<DemoItem> = [{
    label: 'First',
    value: 'first'
},
{
    label: 'Second',
    value: 'second'
},
{
    label: 'Third',
    value: 'third'
}];

const Demo: InkComponent = () => {
    const handleSelect = (item: DemoItem) => {
        console.log(item);
    };

    return <SelectInput items={items} onSelect={handleSelect} />;
};
