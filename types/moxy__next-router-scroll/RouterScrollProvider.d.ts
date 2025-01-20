import { JSX, ReactNode } from "react";
import { ShouldUpdateScroll } from "scroll-behavior";
import { NextScrollBehaviorContext } from "./scroll-behavior";
export default ScrollBehaviorProvider;
declare function ScrollBehaviorProvider({
    disableNextLinkScroll,
    shouldUpdateScroll,
    children,
}: {
    disableNextLinkScroll?: boolean;
    shouldUpdateScroll?: ShouldUpdateScroll<NextScrollBehaviorContext>;
    children?: React.ReactNode;
}): JSX.Element;

declare namespace ScrollBehaviorProvider {
    namespace defaultProps {
        function shouldUpdateScroll(): boolean;
        const disableNextLinkScroll: boolean;
    }
    namespace propTypes {
        const disableNextLinkScroll: boolean;
        const shouldUpdateScroll: any;
        const children: ReactNode;
    }
}
