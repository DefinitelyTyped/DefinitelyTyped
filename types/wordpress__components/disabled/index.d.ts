import { ComponentType, Consumer, ReactNode, JSX } from "react";

declare namespace Disabled {
    interface Props {
        children: ReactNode;
    }
}
declare const Disabled: {
    (props: Disabled.Props): JSX.Element;
    Consumer: Consumer<boolean>;
};

export default Disabled;
