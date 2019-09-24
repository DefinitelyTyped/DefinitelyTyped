import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace Animate {
    interface BaseProps {
        type: 'appear' | 'slide-in';
        children(props: { className: string }): ReactNode;
    }

    interface AppearProps extends BaseProps {
        type: 'appear';
        options?: {
            origin?: 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right';
        };
    }

    interface SlideInProps extends BaseProps {
        type: 'slide-in';
        options?: {
            origin?: 'left';
        };
    }

    type Props = AppearProps | SlideInProps;
}
declare const Animate: ComponentType<Animate.Props>;

export default Animate;
