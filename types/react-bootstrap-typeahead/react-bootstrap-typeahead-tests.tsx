import * as React from 'react';
import { ClearButton, Typeahead, Highlighter, Menu, MenuItem, Token } from 'react-bootstrap-typeahead';

interface State {
    capital: string;
    name: string;
    population: number;
    region: string;
    setValue: (value: State) => void;
}
interface GroupedStates {
    [key: string]: State[];
}
type StringPropertyNames<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T];
type StateKeysValid = StringPropertyNames<State>;
const options: State[] = [
    { name: 'Alabama', population: 4780127, capital: 'Montgomery', region: 'South', setValue: () => {} },
    { name: 'Alaska', population: 710249, capital: 'Juneau', region: 'West', setValue: () => {} },
    { name: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West', setValue: () => {} },
    { name: 'Arkansas', population: 2915958, capital: 'Little Rock', region: 'South', setValue: () => {} },
    { name: 'California', population: 37254503, capital: 'Sacramento', region: 'West', setValue: () => {} },
    { name: 'Colorado', population: 5029324, capital: 'Denver', region: 'West', setValue: () => {} },
];

const stateNames = options.map(o => o.name);

const groups: GroupedStates = options.reduce((accum: GroupedStates, option: State) => {
    const optKey = option.name.slice(0, 1).toLowerCase();
    if (accum[optKey] !== undefined) {
        accum[optKey].push(option);
    } else {
        accum[optKey] = [option];
    }
    return accum;
}, {});

class BasicExample extends React.Component {
    state = {
        multiple: false,
    };

    genCustomMenu = () => {
        const menuItems = Object.keys(groups).reduce((accum, letter) => {
            const header = [
                <Menu.Divider key={`${letter}-start`} />,
                <Menu.Header key={`${letter}-header`}>
                    {`States starting with: ${letter.toUpperCase()}`}
                    <ClearButton onClick={() => {}} />
                </Menu.Header>,
                <Menu.Divider key={`${letter}-end`} />,
            ];
            const states = groups[letter].map((state: State, index: number) => {
                return (<MenuItem key={state.name} position={index} option={state}>{state.name}</MenuItem>);
            });
            return [...accum, ...header, ...states];
        }, [] as JSX.Element[]);

        return menuItems;
    }

    render() {
        const { multiple } = this.state;

        return (
            <div>
                <Typeahead
                    options={stateNames}
                    placeholder="Choose a name"
                />
                <Typeahead
                    options={stateNames}
                    placeholder="Choose a name"
                    multiple
                    filterBy={(option, props) => (props.text.indexOf(option) !== -1)}
                />
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    maxHeight='300px'
                    onInputChange={(value, e) => {}}
                    placeholder="Choose a state..."
                />
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    maxHeight='300px'
                    filterBy={(option, props) => (props.text.indexOf(option.name) !== -1) }
                    placeholder="Choose a state..."
                />
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    maxHeight='300px'
                    filterBy={(option, {text}) => (text.indexOf(option.name) !== -1) }
                    placeholder="Choose a state..."
                />
                <Typeahead
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                    renderMenuItemChildren={ (option, props, index) =>
                        <Highlighter key="name" search={props.text || ""}>
                            {option.name} {index}
                        </Highlighter>
                    }
                />
                <Typeahead
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                    renderMenu={(results, menuProps) => (
                      <Menu {...menuProps}>
                        { results.map((result, index) => (
                          <MenuItem option={result} position={index} key={index}>
                            { result.customOption && 'New: ' }
                            <Highlighter search={menuProps.text}>{result.name}</Highlighter>
                          </MenuItem>
                        )) }
                      </Menu>
                    )}
                />
                <Typeahead
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state...">
                    <Menu id="menu-id">
                    {options.map((o, idx) => (
                      <MenuItem
                        key={idx}
                        option={o}
                        position={idx}>
                        {o.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Typeahead>
                <Typeahead
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                    renderToken={(selectedItem, props, index) => {
                        return <Token
                            active
                            disabled={false}
                            tabIndex={5}
                            href="https://test.com"
                            onRemove={() => console.log(props.text)}>
                            {selectedItem.name}<ClearButton onClick={() => {}} />
                            </Token>;
                    }}
                >
                    <Menu id="menu-id">{...this.genCustomMenu()}</Menu>
                </Typeahead>
            </div>
        );
    }
}
