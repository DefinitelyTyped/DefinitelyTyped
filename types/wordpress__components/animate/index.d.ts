import { ComponentType, ReactNode } from 'react';

declare namespace Animate {
    interface BaseProps {
        type: 'appear' | 'slide-in' | 'loading';
        children(props: { className: string }): ReactNode;
    }

    interface AppearProps extends BaseProps {
        type: 'appear';
        options?: {
            origin?: 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right' | undefined;
        } | undefined;
    }

    interface SlideInProps extends BaseProps {
        type: 'slide-in';
        options?: {
            origin?: 'left' | undefined;
        } | undefined;
    }

    interface LoadingProps extends BaseProps {
        type: 'loading';
    }

    type Props = AppearProps | SlideInProps | LoadingProps;
}
declare const Animate: ComponentType<Animate.Props>;

export default Animate;
