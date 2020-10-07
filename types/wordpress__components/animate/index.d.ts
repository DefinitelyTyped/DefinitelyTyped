import { ComponentType, ReactNode } from 'react';

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
            origin?:
                | 'top'
                | 'top left'
                | 'top center'
                | 'top right'
                | 'middle'
                | 'middle left'
                | 'middle center'
                | 'middle right'
                | 'center'
                | 'center left'
                | 'center center'
                | 'center right'
                | 'bottom'
                | 'bottom left'
                | 'bottom center'
                | 'bottom right';
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
