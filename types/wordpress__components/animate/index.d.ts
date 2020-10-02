import { ComponentType, ReactNode, CSSProperties } from 'react';

declare namespace Animate {
    interface BaseProps {
        type: 'appear' | 'slide-in' | 'loading';
        children:
            | ReactNode
            | ((props: { className: '' }) => ReactNode);
    }

    interface AppearProps extends BaseProps {
        type: 'appear';
        options?: {
            origin?: CSSProperties['transformOrigin'];
        };
    }

    interface SlideInProps extends BaseProps {
        type: 'slide-in';
        options?: {
            origin?: 'left' | 'right';
        };
    }

    interface LoadingProps extends BaseProps {
        type: 'loading';
    }

    type Props = AppearProps | SlideInProps | LoadingProps;
}

declare const Animate: ComponentType<Animate.Props>;

export default Animate;
