import { ComponentType, ReactNode, ReactPortal } from '@wordpress/element';

declare namespace Fill {
    interface Props {
        children?: ReactNode;
        /**
         * Both `Slot` and `Fill` accept a `name` string prop, where a `Slot`
         * with a given `name` will render the `children` of any associated
         * `Fill`s.
         */
        name?: string;
    }
}
declare function Fill(props: Fill.Props): ReactPortal;

export default Fill;
