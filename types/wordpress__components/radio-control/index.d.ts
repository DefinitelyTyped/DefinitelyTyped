import { ComponentType } from 'react';

import BaseControl from '../base-control';

declare namespace RadioControl {
    interface Props<T> extends BaseControl.ControlProps {
        options?: ReadonlyArray<Option<T>>;
        /**
         * The value property of the currently selected option.
         */
        selected?: T;
        /**
         * A function that receives the value of the new option that is being
         * selected as input.
         */
        onChange(value?: T): void;
    }
    interface Option<T> {
        /**
         * The label to be shown to the user.
         */
        label: string;
        /**
         * The internal value compared against select and passed to `onChange`.
         */
        value: T;
    }
}
// tslint:disable-next-line:no-unnecessary-generics
declare function RadioControl<T>(props: RadioControl.Props<T>): JSX.Element;

export default RadioControl;
