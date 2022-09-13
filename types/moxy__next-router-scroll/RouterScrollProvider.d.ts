import { NextScrollBehaviorContext } from './scroll-behavior';
import { ShouldUpdateScroll } from 'scroll-behavior';
import { ReactNode } from 'react';
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
