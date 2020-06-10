import { ComponentType } from 'react';

declare namespace Slot {
    interface Props {
        /**
         * Both `Slot` and `Fill` accept a `name` string prop, where a `Slot`
         * with a given `name` will render the `children` of any associated
         * `Fill`s.
         */
        name?: string;
        /**
         * Optional render function which takes a reference to the slot's
         * `Fill`s as a param. It allows to perform additional processing and
         * wrap `fills` conditionally.
         */
        children?(fills: ReadonlyArray<readonly JSX.Element[]>): JSX.Element | null;
        /**
         * Changes event bubbling behavior.
         *
         * If `false`, events will bubble to their parents on the DOM
         * hierarchy (native event bubbling).
         *
         * If `true`, events will bubble to their virtual parent in the React
         * elements hierarchy.
         *
         * @defaultValue false
         */
        bubblesVirtually?: boolean;
        /**
         * Props to pass into the first child of the <Fill /> component.
         */
        fillProps?: {
            [k: string]: any;
        };
    }
}
declare const Slot: ComponentType<Slot.Props>;

export default Slot;
