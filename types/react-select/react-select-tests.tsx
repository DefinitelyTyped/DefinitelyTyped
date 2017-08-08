import * as React from "react";
import * as ReactSelect from "react-select";
const { Creatable } = ReactSelect;

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

const EXAMPLE_OPTIONS: ReactSelect.Options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" }
];

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
        const keyDownHandler: ReactSelect.OnInputKeyDownHandler = event => {
            const e: React.KeyboardEvent<HTMLDivElement> = event;
        };
    });

    it("Updating input values with onInputChange", () => {
        const cleanInput: ReactSelect.OnInputChangeHandler = inputValue => {
            return inputValue.replace(/[^0-9]/g, "");
        };
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
});
