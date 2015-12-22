// Type definitions for React-Select v1.0.0-beta
// Project: https://github.com/JedWatson/react-select
// Definitions by: Roger Chen <https://github.com/rcchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-select" {
    import { Component } from 'react';

    interface IReactSelectOption {
        label: string;
        value: string | number;
    }

    interface ISelectProps {
        allowCreate?: boolean;
        delimiter?: string;
        isLoading?: boolean;
        loadOptions?: (input: string, callback: Function) => IReactSelectOption[];
        multi?: boolean;
        name: string;
        onChange?: (value: string | number) => void;
        options: IReactSelectOption[];
        value?: string;
    }

    class Select extends Component<ISelectProps, {}> { }

    export default Select;
}
