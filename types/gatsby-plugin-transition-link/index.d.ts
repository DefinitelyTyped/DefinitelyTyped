// Type definitions for gatsby-plugin-transition-link 1.20
// Project: https://github.com/TylerBarnes/gatsby-plugin-transition-link
// Definitions by: Corbin Crutchley <https://github.com/crutchcorn>
//                 Sam Craig <https://github.com/samcraigdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import * as RR from '@reach/router';
import * as Gatsby from 'gatsby';
import * as React from 'react';

type GatsbyLinkProps = Gatsby.GatsbyLinkProps<any>;

interface TransitionHandlerProps {
    injectPageProps?: boolean;
}

export class TransitionHandler extends React.Component<TransitionHandlerProps> {}

export type TransitionStatuses = 'entering' | 'entered' | 'exiting' | 'exited';

interface TransitionStateProps {
    mount: boolean;
    transitionStatus: TransitionStatuses;
}

interface TransitionStateFACCProps {
    children: (props: TransitionStateProps) => React.ReactNode;
}

export class TransitionState extends React.Component<TransitionStateFACCProps> {}

type TransitionPortalLevels = 'top' | 'bottom' | 'middle';

interface TransitionPortalProps {
    level?: TransitionPortalLevels;
}

export class TransitionPortal extends React.Component<TransitionPortalProps> {}

interface InternalContext<State = any> {
    inTransition: boolean;
    disableAnimation: boolean;
    e: false | Event;
    exitDelay: number;
    exitLength: number;
    exitState: State;
    exitTrigger: false | ExitEntryTriggerFn<State>;
    exitProps: any;
    entryDelay: number;
    entryLength: number;
    entryState: State;
    entryProps: any;
    entryTrigger: false | ExitEntryTriggerFn<State>;
    updateContext: (obj: Partial<InternalContext<State>>) => void;
}

interface TransitionObserverProps {
    forceRender?: boolean;
    children: (contextState: InternalContext, innerRef: React.RefObject<any>) => React.ReactNode;
}

export class TransitionObserver extends React.Component<TransitionObserverProps> {}

interface TriggerFnProps<State> {
    node: HTMLElement;
    e: Event;
    entry: EntryExit<State>;
    exit: EntryExit<State>;
}

type ExitEntryTriggerFn<State = object> = ({ exit, node }: TriggerFnProps<State>) => void;

interface EntryExit<State = object> {
    state?: State;
    appearAfter?: number;
    length?: number;
    zIndex?: number;
    delay?: number;
    activeClass?: string;
    className?: string;
    trigger?: ExitEntryTriggerFn<State>;
}

interface TriggerPages<State> {
    entry: EntryExit<State>;
    exit: EntryExit<State>;
}

interface UseTriggerTransitionOptions<State = any, LinkState = any> {
    event?: Event;
    to?: string;
    disableAnimation?: boolean;
    replace?: RR.NavigateOptions<LinkState>['replace'];
    linkState?: RR.NavigateOptions<LinkState>['state'];
    exit?: EntryExit<State>;
    entry?: EntryExit<State>;
    inTransition?: boolean;
    pages?: TriggerPages<State>;
    trigger?: ExitEntryTriggerFn<State>;
    preventScrollJump?: boolean;
}

type programmaticallyTriggerTransition<State, LinkState> = (
    calledOptions?: Event | UseTriggerTransitionOptions<State, LinkState>,
) => void;
export function useTriggerTransition<State, LinkState>(
    defaultOptions: UseTriggerTransitionOptions<State, LinkState>,
): programmaticallyTriggerTransition<State, LinkState>;

export function useTransitionState(): TransitionStateProps;

export interface TransitionLinkProps<State = any> extends Omit<GatsbyLinkProps, 'onClick' | 'innerRef'> {
    exit: EntryExit<State>;
    entry: EntryExit<State>;
    state?: State;
    replace?: RR.NavigateOptions<any>['replace'];
    preventScrollJump?: boolean;
    trigger?: (pages: TriggerPages<State>) => void;
    exitLength?: number;
    entryDelay?: number;
    exitFn?: () =>  void;
    entryState?: object;
    to: GatsbyLinkProps['to'];
    className?: GatsbyLinkProps['className'];
    activeStyle?: GatsbyLinkProps['activeStyle'];
    style?: GatsbyLinkProps['style'];
    activeClassName?: GatsbyLinkProps['activeClassName'];
    partiallyActive?: GatsbyLinkProps['partiallyActive'];
    onClick?: (event: Parameters<Exclude<GatsbyLinkProps['onClick'], undefined>>[0], weShouldNavigate: boolean) => void;
    innerRef?: GatsbyLinkProps['ref'];
    ref?: GatsbyLinkProps['ref'];
}

declare class TransitionLink extends React.Component<TransitionLinkProps> {}

export default TransitionLink;
