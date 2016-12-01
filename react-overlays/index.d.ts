// Type definitions for React Overlays v0.6.10
// Project: https://github.com/react-bootstrap/react-overlays
// Definitions by: Aaron Beall <https://github.com/aaronbeall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-overlays" {
  import * as React from "react";
  import * as ReactBootstrap from "react-bootstrap";
  
  // <Affix />
  interface AffixProps {
    /**
     * Pixels to offset from top of screen when calculating position
     */
    offsetTop?: number;
  
    /**
     * When affixed, pixels to offset from top of viewport
     */
    viewportOffsetTop?: number;
  
    /**
     * Pixels to offset from bottom of screen when calculating position
     */
    offsetBottom?: number;
  
    /**
     * CSS class or classes to apply when at top
     */
    topClassName?: string;
  
    /**
     * Style to apply when at top
     */
    topStyle?: React.CSSProperties;
  
    /**
     * CSS class or classes to apply when affixed
     */
    affixClassName?: string;
    
    /**
     * Style to apply when affixed
     */
    affixStyle?: React.CSSProperties;
  
    /**
     * CSS class or classes to apply when at bottom
     */
    bottomClassName?: string;
  
    /**
     * Style to apply when at bottom
     */
    bottomStyle?: React.CSSProperties;
  
    /**
     * Callback fired when the right before the `affixStyle` and `affixStyle` props are rendered
     */
    onAffix?: () => void;
    /**
     * Callback fired after the component `affixStyle` and `affixClassName` props have been rendered.
     */
    onAffixed?: () => void;
  
    /**
     * Callback fired when the right before the `topStyle` and `topClassName` props are rendered
     */
    onAffixTop?: () => void;
  
    /**
     * Callback fired after the component `topStyle` and `topClassName` props have been rendered.
     */
    onAffixedTop?: () => void;
  
    /**
     * Callback fired when the right before the `bottomStyle` and `bottomClassName` props are rendered
     */
    onAffixBottom?: () => void;
  
    /**
     * Callback fired after the component `bottomStyle` and `bottomClassName` props have been rendered.
     */
    onAffixedBottom?: () => void;
  }
  class Affix extends React.Component<AffixProps, {}> { }
  
  // <AutoAffix />
  interface AutoAffixProps extends AffixProps {
  
    /**
     * The logical container node or component for determining offset from bottom
     * of viewport, or a function that returns it
     */
    container?: React.ReactInstance | (() => React.ReactInstance);
  
    /**
     * Automatically set width when affixed
     */
    autoWidth?: boolean;
  }
  class AutoAffix extends React.Component<AutoAffixProps, {}> { }
  
  // <Modal />
  type Modal = ReactBootstrap.Modal; // Provided already through react-bootstrap
  
  // <Overlay />
  type Overlay = ReactBootstrap.Overlay; // Provided already through react-bootstrap
  
  // <Portal />
  type Portal = ReactBootstrap.Portal; // Provided already through react-bootstrap
  
  // <Position />
  type Position = ReactBootstrap.Position; // Provided already through react-bootstrap
  
  // <Transition />
  interface TransitionProps {
    className?: string;

    /**
     * Show the component; triggers the enter or exit animation
     */
    in?: boolean;
  
    /**
     * Unmount the component (remove it from the DOM) when it is not shown
     */
    unmountOnExit?: boolean;
  
    /**
     * Run the enter animation when the component mounts, if it is initially
     * shown
     */
    transitionAppear?: boolean;
  
    /**
     * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
     * transition indefinately if the browser transitionEnd events are
     * canceled or interrupted.
     *
     * By default this is set to a high number (5 seconds) as a failsafe. You should consider
     * setting this to the duration of your animation (or a bit above it).
     */
    timeout?: number;
  
    /**
     * CSS class or classes applied when the component is exited
     */
    exitedClassName?: string;
    
    /**
     * CSS class or classes applied while the component is exiting
     */
    exitingClassName?: string;
    
    /**
     * CSS class or classes applied when the component is entered
     */
    enteredClassName?: string;
    
    /**
     * CSS class or classes applied while the component is entering
     */
    enteringClassName?: string;
  
    /**
     * Callback fired before the "entering" classes are applied
     */
    onEnter?: (element: Element) => void;
    
    /**
     * Callback fired after the "entering" classes are applied
     */
    onEntering?: (element: Element) => void;
    
    /**
     * Callback fired after the "enter" classes are applied
     */
    onEntered?: (element: Element) => void;
    
    /**
     * Callback fired before the "exiting" classes are applied
     */
    onExit?: (element: Element) => void;
    
    /**
     * Callback fired after the "exiting" classes are applied
     */
    onExiting?: (element: Element) => void;
    
    /**
     * Callback fired after the "exited" classes are applied
     */
    onExited?: (element: Element) => void;
  }
  class Transition extends React.Component<TransitionProps, {}> { }
}

declare module "react-overlays/lib/RootCloseWrapper" {
  import * as React from "react";
  
  // <RootCloseWrapper />
  interface RootCloseWrapperProps {
    onRootClose?: () => void;
    children?: React.ReactNode;
    
    /**
     * Disable the the RootCloseWrapper, preventing it from triggering
     * `onRootClose`.
     */
    disabled?: boolean;
    
    /**
     * Choose which document mouse event to bind to
     */
    event?: 'click' | 'mousedown';
  }
  class RootCloseWrapper extends React.Component<RootCloseWrapperProps, {}> { }
  
  namespace RootCloseWrapper { } // module export workaround: https://github.com/Microsoft/TypeScript/issues/5073
  export = RootCloseWrapper;
}
