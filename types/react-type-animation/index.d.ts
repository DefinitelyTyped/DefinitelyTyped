import { FunctionComponent } from "react";

export interface TypeAnimationProps {
    sequence: Array<string | number>;
    wrapper?: string;
    repeat?: number;
    cursor?: boolean;
    className?: string;
}

declare const TypeAnimation: FunctionComponent<TypeAnimationProps>;

export default TypeAnimation;
