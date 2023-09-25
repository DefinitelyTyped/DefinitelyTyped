import { ComponentType, ReactNode, ReactPortal } from "react";

declare namespace Fill {
    interface Props {
        children?: ReactNode | undefined;
        /**
         * Both `Slot` and `Fill` accept a `name` string prop, where a `Slot`
         * with a given `name` will render the `children` of any associated
         * `Fill`s.
         */
        name?: string | undefined;
    }
}
declare function Fill(props: Fill.Props): ReactPortal;

export default Fill;
