import * as React from "react";

import { BlockActionFooterProps } from "./BlockActionFooter";

export interface ActionFooterProps extends BlockActionFooterProps {
    /**
     * Actions to be displayed in the start socket
     */
    start?: React.ReactNode | undefined;
    /**
     * Actions to be displayed in the end socket
     */
    end?: React.ReactNode | undefined;
}

declare const ActionFooter: React.FC<ActionFooterProps>;
export default ActionFooter;
