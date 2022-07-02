import { ForwardRefProps, FCReturn, ReactComponentConstructor } from '../../../typings/shared';
import { FocusScopeDefaultProps, FocusScopeIntrinsicProps, FocusScopeCustomComponentProps } from '../FocusScope';

// Props used by Dialog that are not inherited from FocusScope usage
interface DialogBaseProps {
    'aria-labelledby': string;
    onDismiss?(): void;
}

// Dialog passes these down to FocusScope without ability to override
export type ExcludedDialogPropKeys =
    | 'aria-labelledby'
    | 'aria-modal'
    | 'internalFocusRef'
    | 'onKeyDown'
    | 'role'
    | 'tabIndex';

export interface DialogDefaultProps extends Omit<FocusScopeDefaultProps, ExcludedDialogPropKeys>, DialogBaseProps {}

export type DialogIntrinsicProps<K extends keyof JSX.IntrinsicElements> = Omit<
    FocusScopeIntrinsicProps<K>,
    ExcludedDialogPropKeys
> &
    DialogBaseProps;

export type DialogCustomComponentProps<T extends ReactComponentConstructor<never>> = FocusScopeCustomComponentProps<T> &
    DialogBaseProps;

declare function Dialog(props: ForwardRefProps<HTMLDivElement, DialogDefaultProps>): FCReturn;
declare function Dialog<T extends keyof JSX.IntrinsicElements, R extends HTMLElement = HTMLElement>(
    props: ForwardRefProps<R, DialogIntrinsicProps<T>>,
): FCReturn;
declare function Dialog<T extends ReactComponentConstructor<never>, R = unknown>(
    props: ForwardRefProps<R, DialogCustomComponentProps<T>>,
): FCReturn;

export { Dialog };
