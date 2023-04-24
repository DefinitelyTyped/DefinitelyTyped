// Type definitions for react-typical 0.1
// Project: https://github.com/catalinmiron/react-typical#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactElement } from "react";

export interface ReactTypicalProps {
    steps: Array<string | number>;
    wrapper?: string;
    loop?: number;
}

export default function Typical(props: ReactTypicalProps): ReactElement;
