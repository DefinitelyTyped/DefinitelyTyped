import { CSSModule } from "../index";

export type EndHandler = (node: HTMLElement, done: () => void) => void;
export type EnterHandler = (node: HTMLElement, isAppearing: boolean) => void;
export type ExitHandler = (node: HTMLElement) => void;

export interface FadeProps extends React.HTMLAttributes<HTMLElement> {
    baseClass?: string;
    baseClassActive?: string;
    tag?: React.ReactType;
    className?: string;
    cssModule?: CSSModule;
    // Props from 'react-transition-group/Transition'
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    timeout: number | { enter?: number; exit?: number };
    addEndListener?: EndHandler;
    onEnter?: EnterHandler;
    onEntering?: EnterHandler;
    onEntered?: EnterHandler;
    onExit?: ExitHandler;
    onExiting?: ExitHandler;
    onExited?: ExitHandler;
    [others: string]: any;
}

declare const Fade: React.StatelessComponent<FadeProps>;
export default Fade;
