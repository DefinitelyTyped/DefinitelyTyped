import * as React from "react";
import ReactSelect, * as ReactSelectModule from "react-select";
import defaultMenuRenderer from 'react-select/lib/utils/defaultMenuRenderer';
import DefaultOptionComponent from 'react-select/lib/Option';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

const EXAMPLE_OPTIONS: ReactSelectModule.Options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" }
];

interface CustomValueType {
    prop1: string;
    prop2: number;
}

/*
 * This JSX/TSX generic component workaround is needed because of this issue:
 * https://github.com/Microsoft/TypeScript/issues/3960
 * If https://github.com/Microsoft/TypeScript/issues/6395 ever lands, this
 * workaround may become redundant.
 */
type CustomValueReactSelect = new (props: ReactSelectModule.ReactSelectProps<CustomValueType>) => ReactSelect<CustomValueType>;
const CustomValueReactSelect = ReactSelect as CustomValueReactSelect;

const EXAMPLE_CUSTOM_OPTIONS: ReactSelectModule.Options<CustomValueType> = [
    { value: { prop1: "OneProp1", prop2: 1 }, label: "One" },
    { value: { prop1: "TwoProp2", prop2: 2 }, label: "Two" }
];

const EXAMPLE_CUSTOM_VALUE: ReactSelectModule.Option<CustomValueType> = {
    value: { prop1: "ThreeProp1", prop2: 3 }, label: "Three"
};

describe("react-select", () => {
    it("options", () => {
        const optionsString: ReactSelectModule.Options<string> = [
            { value: "one", label: "One" },
            { value: "two", label: "Two", clearableValue: false }
        ];

        const optionsNumber: ReactSelectModule.Options<number> = [
            { value: 1, label: "One" },
            { value: 2, label: "Two", clearableValue: false }
        ];

        const optionsMixed: ReactSelectModule.Options = [
            { value: "one", label: "One" },
            { value: 2, label: "Two", clearableValue: false }
        ];
    });

    it("async options", () => {
        const getAsyncLegacyOptions: ReactSelectModule.LoadOptionsLegacyHandler = (input, callback) => {
            setTimeout(() => {
                callback(null, {
                    options: [
                        { value: "one", label: "Two" }
                    ],
                    complete: false
                });
            });
        };

        const dummyRequest = async () => {
            return new Promise<ReactSelectModule.Options>(resolve => {
                resolve(EXAMPLE_OPTIONS);
            });
        };

        const getAsyncOptions: ReactSelectModule.LoadOptionsAsyncHandler = async input => {
            const result = await dummyRequest();

            return {
                options: result,
                complete: false
            };
        };
    });

    it("Custom value async options", () => {
        const getAsyncLegacyOptions: ReactSelectModule.LoadOptionsLegacyHandler<CustomValueType> = (input, callback) => {
            setTimeout(() => {
                callback(null, {
                    options: [
                        { value: { prop1: "One", prop2: 4 }, label: "Two" }
                    ],
                    complete: false
                });
            });
        };

        const dummyRequest = async () => {
            return new Promise<ReactSelectModule.Options<CustomValueType>>(resolve => {
                resolve(EXAMPLE_CUSTOM_OPTIONS);
            });
        };

        const getAsyncOptions: ReactSelectModule.LoadOptionsAsyncHandler<CustomValueType> = async input => {
            const result = await dummyRequest();

            return {
                options: result,
                complete: false
            };
        };
    });

    it("creatable", () => {
        function Component(props: {}): JSX.Element {
            return <ReactSelectModule.Creatable name="creatable" options={EXAMPLE_OPTIONS} />;
        }
    });

    it("Focus method", () => {
        class Component extends React.PureComponent {
            private readonly selectRef = (component: ReactSelect) => {
                component.focus();
            }

            render() {
                return <ReactSelect
                    ref={this.selectRef}
                />;
            }
        }
    });

    it("setValue method", () => {
        class Component extends React.PureComponent {
            private readonly selectRef = (component: ReactSelect) => {
                component.setValue({
                    value: 'value'
                });
            }

            render() {
                return <ReactSelect
                    ref={this.selectRef}
                />;
            }
        }
    });

    it("Overriding default key-down behavior with onInputKeyDown", () => {
        const keyDownHandler: ReactSelectModule.OnInputKeyDownHandler = (event => {
            const divEvent = event as React.KeyboardEvent<HTMLDivElement>;
            const inputEvent = event as React.KeyboardEvent<HTMLInputElement>;
        });
    });

    it("Updating input values with onInputChange", () => {
        const cleanInput: ReactSelectModule.OnInputChangeHandler = inputValue => {
            return inputValue.replace(/[^0-9]/g, "");
        };
    });
});

describe("Focus events", () => {
    it("Passing custom onFocus", () => {
        class Component extends React.PureComponent {
            render() {
                return (
                    <ReactSelect onFocus={(e) => {
                        const inputEvent = e as React.FocusEvent<HTMLInputElement>;
                        const divEvent = e as React.FocusEvent<HTMLDivElement>;
                    }} />
                );
            }
        }
    });

    it("Passing custom onBlur", () => {
        class Component extends React.PureComponent {
            render() {
                return (
                    <ReactSelect onBlur={(e) => {
                        const inputEvent = e as React.FocusEvent<HTMLInputElement>;
                        const divEvent = e as React.FocusEvent<HTMLDivElement>;
                    }} />
                );
            }
        }
    });
});

describe("Examples", () => {
    it("Simple example", () => {
        class Component extends React.Component {
            private readonly onSelectChange: ReactSelectModule.OnChangeSingleHandler<string> = (option) => {
                const optionValue: string = option.value;
            }

            render() {
                return <ReactSelect
                    name="select"
                    value="one"
                    options={EXAMPLE_OPTIONS}
                />;
            }
        }
    });

    it("onValueClick", () => {
        class Component extends React.Component {
            private readonly onValueClick: ReactSelectModule.OnValueClickHandler<number> = (option) => {
                const optionValue: number = option.value;
            }

            render() {
                const options = [
                    { value: 3, label: "Option 3" },
                    { value: 9, label: "Option 9" }
                ];

                return <ReactSelect
                    name="select"
                    value={123}
                    options={options}
                />;
            }
        }
    });

    it("Custom value onValueClick", () => {
        class Component extends React.Component {
            private readonly onValueClick: ReactSelectModule.OnValueClickHandler<CustomValueType> = (option) => {
                const optionValue: CustomValueType = option.value;
            }

            render() {
                return <CustomValueReactSelect
                    name="select"
                    value={EXAMPLE_CUSTOM_VALUE}
                    options={EXAMPLE_CUSTOM_OPTIONS}
                />;
            }
        }
    });

    it("Custom value onChange", () => {
        class Component extends React.Component {
            private readonly onSelectChange: ReactSelectModule.OnChangeSingleHandler<CustomValueType> = (option) => {
                const optionValue: CustomValueType = option.value;
            }

            render() {
                return <CustomValueReactSelect
                    name="select"
                    value={EXAMPLE_CUSTOM_VALUE}
                    options={EXAMPLE_CUSTOM_OPTIONS}
                />;
            }
        }
    });

    it("Menu renderer example", () => {
        class Component extends React.Component {
            private readonly onSelectChange: ReactSelectModule.OnChangeSingleHandler<string> = option => {
                const optionValue: string = option.value;
            }

            private readonly menuRenderer: ReactSelectModule.MenuRendererHandler = props => {
                const options = props.options.map(option => {
                    return (
                        <div className="option">
                            <div>{option.label}</div>
                            <div>{props.optionRenderer({})}</div>
                            <button onClick={() => props.removeValue(option)}/>
                        </div>
                    );
                });

                return <div className="menu">{options}</div>;
            }

            render() {
                return <ReactSelect
                    name="select"
                    value="one"
                    options={EXAMPLE_OPTIONS}
                    menuRenderer={this.menuRenderer}
                />;
            }
        }
    });

    it("Menu renderer with custom value type example", () => {
        class Component extends React.Component {
            private readonly menuRenderer: ReactSelectModule.MenuRendererHandler<CustomValueType> = props => {
                const options = props.options.map(option => {
                    return (
                        <div className="option" data-value1={option.value.prop1}
                            data-value2={option.value.prop2}
                            onClick={() => props.selectValue(option)}>
                            {option.label}
                        </div>);
                });

                return <div className="menu">{options}</div>;
            }

            render() {
                return <CustomValueReactSelect
                    name="select"
                    value={EXAMPLE_CUSTOM_VALUE}
                    options={EXAMPLE_CUSTOM_OPTIONS}
                    menuRenderer={this.menuRenderer}
                />;
            }
        }
    });

    it("Extend default menu renderer", () => {
        return class Component extends React.Component {
            private readonly menuRenderer: ReactSelectModule.MenuRendererHandler = props => {
                return <div className="menu">defaultMenuRenderer(props)</div>;
            }

            render() {
                return <ReactSelect
                    menuRenderer={this.menuRenderer}
                />;
            }
        };
    });

    it("Extend default Option component", () => {
        function OptionComponent(props: ReactSelectModule.OptionComponentProps) {
            const {option, isFocused, isSelected} = props;

            return (
                <DefaultOptionComponent {...props}>
                    <span className={isFocused ? 'focused' : ''}>
                        {isSelected ? '+' : '-'}
                        {option.label}
                    </span>
                </DefaultOptionComponent>
            );
        }

        return (
            <ReactSelect
                optionComponent={OptionComponent}
            />
        );
    });

    it("Input render example", () => {
        class Component extends React.Component {
            private readonly onSelectChange: ReactSelectModule.OnChangeSingleHandler<string> = option => {
                const optionValue: string = option.value;
            }

            private readonly inputRenderer: ReactSelectModule.InputRendererHandler = props => {
                return <input {...props} />;
            }

            render() {
                return <ReactSelect
                    name="select"
                    value="one"
                    options={EXAMPLE_OPTIONS}
                    inputRenderer={this.inputRenderer}
                />;
            }
        }
    });

    it("Input render with false renderer props", () => {
        <ReactSelect
            arrowRenderer={props => false}
            inputRenderer={props => false}
            menuRenderer={props => false}
            optionRenderer={props => false}
            valueRenderer={props => false}
        />;
    });

    it("Input render with null renderer props", () => {
        <ReactSelect
            arrowRenderer={props => null}
            inputRenderer={props => null}
            menuRenderer={props => null}
            optionRenderer={props => null}
            valueRenderer={props => null}
        />;
    });

    it("Arrow render example", () => {
        return (
            <ReactSelect
                arrowRenderer={({onMouseDown, isOpen}) => (
                    <div
                        className={isOpen ? 'open' : 'closed'}
                        onMouseDown={onMouseDown}
                    />
                )}
            />
        );
    });

    it("Option render with custom value option", () => {
        const optionRenderer = (option: ReactSelectModule.Option<CustomValueType>): ReactSelectModule.HandlerRendererResult =>
            null;

        <CustomValueReactSelect
            optionRenderer={optionRenderer}
        />;
    });

    it("Custom option component", () => {
        class OptionComponent extends React.Component<ReactSelectModule.OptionComponentProps> {
            render() {
                return <div>{this.props.option.label}</div>;
            }
        }

        <ReactSelect optionComponent={OptionComponent} />;
    });

    it("Value render with custom value option", () => {
        const valueRenderer = (option: ReactSelectModule.Option<CustomValueType>): ReactSelectModule.HandlerRendererResult =>
            null;

        <CustomValueReactSelect
            valueRenderer={valueRenderer}
        />;
    });

    it("Value render with custom value option and index", () => {
        const valueRenderer = (option: ReactSelectModule.Option<CustomValueType>, index: number): ReactSelectModule.HandlerRendererResult =>
            null;

        <CustomValueReactSelect
            valueRenderer={valueRenderer}
        />;
    });

    it("No Results renderer with string", () => {
        <ReactSelect noResultsText="no results" />;
    });

    it("No Results renderer with element", () => {
        <ReactSelect noResultsText={<i>no results</i>} />;
    });

    it("onSelectResetsInput", () => {
        <ReactSelect onSelectResetsInput />;
    });

    it("onCloseResetsInput", () => {
        <ReactSelect onCloseResetsInput />;
    });

    it("pageSize", () => {
        <ReactSelect pageSize={5} />;
    });

    it("removeSelected", () => {
        <ReactSelect removeSelected />;
    });

    it("rtl", () => {
        <ReactSelect rtl />;
    });
});
