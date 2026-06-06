import * as React from "react";

import { BlockActionFooterProps } from "./BlockActionFooter";

export interface CenteredActionFooterProps extends BlockActionFooterProps {
    /**
     * Actions to be displayed in the center socket
     */
    center?: React.ReactNode | undefined;
}

declare const CenteredActionFooter: React.FC<CenteredActionFooterProps>;
export default CenteredActionFooter;
