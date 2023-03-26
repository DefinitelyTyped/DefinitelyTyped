import { ComponentType, Consumer, ReactNode } from 'react';

import { JSX } from "react";

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
