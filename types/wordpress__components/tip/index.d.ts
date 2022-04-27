import { ComponentType, ReactNode } from 'react';

declare namespace Tip {
    interface Props {
        children?: ReactNode;
    }
}
declare const Tip: ComponentType<Tip.Props>;

export default Tip;
