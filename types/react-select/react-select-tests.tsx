import * as React from "react";
import * as ReactSelect from "react-select";
const { Creatable } = ReactSelect;

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

const EXAMPLE_OPTIONS: ReactSelect.Options = [
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
type CustomValueReactSelect = new (props: ReactSelect.ReactSelectProps<CustomValueType>) => ReactSelect<CustomValueType>;
const CustomValueReactSelect = ReactSelect as CustomValueReactSelect;

const EXAMPLE_CUSTOM_OPTIONS: ReactSelect.Options<CustomValueType> = [
    { value: { prop1: "OneProp1", prop2: 1 }, label: "One" },
    { value: { prop1: "TwoProp2", prop2: 2 }, label: "Two" }
];

const EXAMPLE_CUSTOM_VALUE: ReactSelect.Option<CustomValueType> = {
  value: { prop1: "ThreeProp1", prop2: 3 }, label: "Three"
};

describe("react-select", () => {
    it("options", () => {
        const optionsString: ReactSelect.Options<string> = [
            { value: "one", label: "One" },
            { value: "two", label: "Two", clearableValue: false }
        ];

        const optionsNumber: ReactSelect.Options<number> = [
            { value: 1, label: "One" },
            { value: 2, label: "Two", clearableValue: false }
        ];

        const optionsMixed: ReactSelect.Options = [
            { value: "one", label: "One" },
            { value: 2, label: "Two", clearableValue: false }
        ];
    });

    it("async options", () => {
        const getAsyncLegacyOptions: ReactSelect.LoadOptionsLegacyHandler = (input, callback) => {
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
            return new Promise<ReactSelect.Options>(resolve => {
                resolve(EXAMPLE_OPTIONS);
            });
        };

        const getAsyncOptions: ReactSelect.LoadOptionsAsyncHandler = async input => {
            const result = await dummyRequest();

            return {
                options: result,
                complete: false
            };
        };
    });

    it("Custom value async options", () => {
        const getAsyncLegacyOptions: ReactSelect.LoadOptionsLegacyHandler<CustomValueType> = (input, callback) => {
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
            return new Promise<ReactSelect.Options<CustomValueType>>(resolve => {
                resolve(EXAMPLE_CUSTOM_OPTIONS);
            });
        };

        const getAsyncOptions: ReactSelect.LoadOptionsAsyncHandler<CustomValueType> = async input => {
            const result = await dummyRequest();

            return {
                options: result,
                complete: false
            };
        };
    });

    it("creatable", () => {
        function Component(props: {}): JSX.Element {
            return <Creatable name="creatable" options={EXAMPLE_OPTIONS} />;
        }
    });

    it("Focus method", () => {
        class Component extends React.PureComponent {
            private selectRef = (component: ReactSelect) => {
                component.focus();
            }

            render() {
                return <ReactSelect
                    ref={this.selectRef}
                />;
            }
        }
    });

    it("Overriding default key-down behavior with onInputKeyDown", () => {
        const keyDownHandler: ReactSelect.OnInputKeyDownHandler = (event => {
            const divEvent = event as React.KeyboardEvent<HTMLDivElement>;
            const inputEvent = event as React.KeyboardEvent<HTMLInputElement>;
        });
    });

    it("Updating input values with onInputChange", () => {
        const cleanInput: ReactSelect.OnInputChangeHandler = inputValue => {
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
            private onSelectChange: ReactSelect.OnChangeSingleHandler<string> = (option) => {
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

    it("Custom value onChange", () => {
        class Component extends React.Component {
            private onSelectChange: ReactSelect.OnChangeSingleHandler<CustomValueType> = (option) => {
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
            private onSelectChange: ReactSelect.OnChangeSingleHandler<string> = option => {
                const optionValue: string = option.value;
            }

            private menuRenderer: ReactSelect.MenuRendererHandler = props => {
                const options = props.options.map(option => {
                    return <div className="option">{option.label}</div>;
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
            private menuRenderer: ReactSelect.MenuRendererHandler<CustomValueType> = props => {
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

    it("Input render example", () => {
        class Component extends React.Component {
            private onSelectChange: ReactSelect.OnChangeSingleHandler<string> = option => {
                const optionValue: string = option.value;
            }

            private inputRenderer: ReactSelect.InputRendererHandler = props => {
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

    it("Option render with custom value option", () => {
        const optionRenderer = (option: ReactSelect.Option<CustomValueType>): ReactSelect.HandlerRendererResult =>
          null;

        <CustomValueReactSelect
            optionRenderer={optionRenderer}
        />;
    });

    it("Value render with custom value option", () => {
        const valueRenderer = (option: ReactSelect.Option<CustomValueType>): ReactSelect.HandlerRendererResult =>
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
});
