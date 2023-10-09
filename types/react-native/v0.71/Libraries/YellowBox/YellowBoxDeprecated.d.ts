import type * as React from "react";

/**
 * YellowBox has been replaced with LogBox.
 * @see LogBox
 * @deprecated
 */
export const YellowBox: React.ComponentClass<any, any> & {
    ignoreWarnings: (warnings: string[]) => void;
};
