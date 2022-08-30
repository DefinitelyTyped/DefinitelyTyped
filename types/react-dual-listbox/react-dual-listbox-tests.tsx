import * as React from 'react';
import DualListBox, { Option, ValueOption } from 'react-dual-listbox';

/** Example options */
// Flat options
const flatOptions: Array<ValueOption<string>> = [
    { label: 'One', value: 'one' }, // ValueOption<string>
    { label: 'Two', value: 'two' }, // ValueOption<string>
];
const readonlyFlatOptions = flatOptions as ReadonlyArray<ValueOption<string>>;

// Nested options
const nestedOptions: Array<Option<string>> = [
    { label: 'Option 1', value: '1' }, // ValueOption<string>
    {
        label: 'Category',
        options: [
            { label: 'Option 2', value: '2' }, // ValueOption<string>
            {
                label: 'Nested Category',
                options: [
                    { label: 'Option 3', value: '4' }, // ValueOption<string>
                ],
            }, // CategoryOption<string>
        ],
    }, // CategoryOption<string>
]; // Option<string>[]
const readonlyNestedOptions = nestedOptions as ReadonlyArray<Option<string>>;

/** Example change handlers */
// Simple value change handler.
const valuesChange = (selectedValues: string[]) => {};
// Complex value change handler.
const optionsChange = (selectedValues: Array<Option<string>>) => {};

/** Using flat and nested option structures. */
<DualListBox options={flatOptions} className="foo" />;
<DualListBox options={readonlyFlatOptions} className="foo" />;
<DualListBox options={nestedOptions} />;
<DualListBox options={readonlyNestedOptions} />;

/** Selection examples. */
<DualListBox options={flatOptions} onChange={valuesChange} />;
<DualListBox options={readonlyFlatOptions} onChange={valuesChange} />;
<DualListBox options={flatOptions} simpleValue onChange={valuesChange} />;
<DualListBox options={readonlyFlatOptions} simpleValue onChange={valuesChange} />;
<DualListBox options={flatOptions} simpleValue={false} onChange={optionsChange} />;
<DualListBox options={readonlyFlatOptions} simpleValue={false} onChange={optionsChange} />;

/** Selection error examples. */
<DualListBox
    options={flatOptions}
    // @ts-expect-error You can't use an options change handler when `simpleValues` is `true`.
    onChange={optionsChange}
/>;
<DualListBox
    options={flatOptions}
    // @ts-expect-error You can't use an options change handler when `simpleValues` is `true`.
    onChange={optionsChange}
    simpleValue
/>;
<DualListBox
    options={flatOptions}
    // @ts-expect-error You can't use a values change handler when `simpleValues` is `false`.
    onChange={valuesChange}
    simpleValue={false}
/>;

/** Filtering examples. */
<DualListBox options={flatOptions} canFilter={false} />;
<DualListBox options={readonlyFlatOptions} canFilter={false} />;
<DualListBox
    options={flatOptions}
    canFilter
    filter={{
        available: flatOptions.map(o => o.value),
        selected: [],
    }}
    onFilterChange={() => {}}
    filterPlaceholder={''}
    filterCallback={(option: Option<string>) => true}
/>;
<DualListBox
    options={readonlyFlatOptions}
    canFilter
    filter={{
        available: readonlyFlatOptions.map(o => o.value),
        selected: [],
    }}
    onFilterChange={() => {}}
    filterPlaceholder={''}
    filterCallback={(option: Option<string>) => true}
/>;

/** Filtering error examples. */
// @ts-expect-error You can not use filter properties when `canFilter` is not `true`.
<DualListBox
    options={flatOptions}
    filter={{
        available: flatOptions.map(o => o.value),
        selected: [],
    }}
    onFilterChange={() => {}}
    filterPlaceholder={''}
    filterCallback={(option: Option<string>) => true}
/>;
// @ts-expect-error You can not use filter properties when `canFilter` is not `true`.
<DualListBox
    options={flatOptions}
    canFilter={false}
    filter={{
        available: flatOptions.map(o => o.value),
        selected: [],
    }}
    onFilterChange={() => {}}
    filterPlaceholder={''}
    filterCallback={(option: Option<string>) => true}
/>;

/** Section labels. */
<DualListBox
    options={flatOptions}
    available={flatOptions.map(o => o.value)}
    lang={{ availableHeader: 'Available', selectedHeader: 'Selected' }}
/>;

/** Action alignment. */
<DualListBox options={flatOptions} alignActions={'top'} />;

/** Disabled. */
<DualListBox options={flatOptions} disabled />;

/** Preserving select order. */
<DualListBox options={flatOptions} preserveSelectOrder />;

/** `moveKeyCodes` example. */
<DualListBox options={flatOptions} moveKeyCodes={[13, 32]} />;

/** `icons` example. */
<DualListBox
    options={flatOptions}
    icons={{
        moveLeft: <span className="fa fa-chevron-left" />,
        moveAllLeft: [<span key={0} className="fa fa-chevron-left" />, <span key={1} className="fa fa-chevron-left" />],
        moveRight: <span className="fa fa-chevron-right" />,
        moveAllRight: [
            <span key={0} className="fa fa-chevron-right" />,
            <span key={1} className="fa fa-chevron-right" />,
        ],
        moveDown: <span className="fa fa-chevron-down" />,
        moveUp: <span className="fa fa-chevron-up" />,
        moveTop: <span className="fa fa-double-angle-up" />,
        moveBottom: <span className="fa fa-double-angle-down" />,
    }}
/>;

/** Kitchen sink. */
<DualListBox
    id="my-dual-listbox-id-prefix"
    name="my-hidden-input-name"
    className="my-special-class"
    options={flatOptions}
    selected={[]}
    alignActions={'top'}
    allowDuplicates
    available={flatOptions.map(o => o.value)}
    icons={{
        moveLeft: <span className="fa fa-chevron-left" />,
        moveAllLeft: [<span key={0} className="fa fa-chevron-left" />, <span key={1} className="fa fa-chevron-left" />],
        moveRight: <span className="fa fa-chevron-right" />,
        moveAllRight: [
            <span key={0} className="fa fa-chevron-right" />,
            <span key={1} className="fa fa-chevron-right" />,
        ],
        moveDown: <span className="fa fa-chevron-down" />,
        moveUp: <span className="fa fa-chevron-up" />,
        moveTop: <span className="fa fa-double-angle-up" />,
        moveBottom: <span className="fa fa-double-angle-down" />,
    }}
    lang={{ availableHeader: 'Available', selectedHeader: 'Selected' }}
    moveKeyCodes={[13, 32]}
    simpleValue={false}
    onChange={optionsChange}
    canFilter
    filter={{
        available: flatOptions.map(o => o.value),
        selected: [],
    }}
    onFilterChange={() => {}}
    filterPlaceholder={''}
    filterCallback={(option: Option<string>) => true}
    disabled
    preserveSelectOrder
    showHeaderLabels
    showNoOptionsText
    showOrderButtons
/>;
