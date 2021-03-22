import { ComponentType, ReactNode } from 'react';

declare namespace DotTip {
    interface Props {
        /**
         * A string that uniquely identifies the tip. Identifiers should be prefixed with the name
         * of the plugin, followed by a `/`. For example, `acme/add-to-cart`.
         */
        tipId: string;
        /**
         * Any React element or elements can be passed as children. They will be rendered within the
         * tip bubble.
         */
        children: ReactNode;
    }
}
declare const DotTip: ComponentType<DotTip.Props>;

export default DotTip;
