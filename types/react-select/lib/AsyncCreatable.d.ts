import { Component, Ref as ElementRef } from 'react';
import { Props as AsyncProps, State as AsyncState } from './Async';
import { Props as CreatableProps, State as CreatableState } from './Creatable';
import { OptionType, OptionsType, ValueType, ActionMeta, InputActionMeta } from './types';
import { cleanValue } from './utils';

type Props = AsyncProps & CreatableProps;

type State = AsyncState & CreatableState;

export class AsyncCreatable extends Component<Props, State> {
    static defaultProps: Props;
    select: ElementRef<any>;
    lastRequest: {};
    mounted: boolean;
    optionsCache: { [key: string]: OptionsType };

    focus(): void;
    blur(): void;
    loadOptions(inputValue: string, callback: (options: OptionsType) => void): void;
    handleInputChange: (newValue: string, actionMeta: InputActionMeta) => string;
    onChange: (newValue: ValueType, actionMeta: ActionMeta) => void;
}

export default AsyncCreatable;
