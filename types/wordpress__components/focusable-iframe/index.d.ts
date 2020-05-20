import { ComponentType, HTMLProps, RefObject } from 'react';

declare namespace FocusableIframe {
    interface Props extends HTMLProps<HTMLIFrameElement> {
        iframeRef?: RefObject<HTMLIFrameElement>;
    }
}
declare const FocusableIframe: ComponentType<FocusableIframe.Props>;

export default FocusableIframe;
