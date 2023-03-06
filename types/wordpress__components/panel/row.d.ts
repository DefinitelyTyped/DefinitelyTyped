import { ComponentType, ReactNode } from 'react';

declare namespace PanelRow {
    interface Props {
        children?: ReactNode;
        /**
         * The class that will be added with `components-panel__row`. to the
         * classes of the wrapper div. If no `className` is passed only
         * `components-panel__row` is used.
         */
        className?: string | undefined;
    }
}
declare const PanelRow: ComponentType<PanelRow.Props>;

export default PanelRow;
