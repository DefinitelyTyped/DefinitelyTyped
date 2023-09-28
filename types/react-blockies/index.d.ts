// Type definitions for react-blockies 1.4
// Project: https://github.com/stephensprinkle/react-blockies#readme
// Definitions by: Martin Triay <https://github.com/martriay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface IdenticonProps {
    seed: string;
    size?: number | undefined;
    scale?: number | undefined;
    color?: string | undefined;
    bgColor?: string | undefined;
    spotColor?: string | undefined;
    className?: string | undefined;
}

export const Identicon: React.FC<IdenticonProps>;
export default Identicon;
