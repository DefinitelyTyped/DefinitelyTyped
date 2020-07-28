import { Location, Action, LocationListener, LocationState, UnregisterCallback } from './index';
import { getConfirmation } from './DOMUtils';

export type PromptFunction<S = LocationState> = (location: Location<S>, action: Action) => any;

export type Prompt<S = LocationState> = PromptFunction<S> | boolean;

export interface TransitionManager<S = LocationState> {
    setPrompt(nextPrompt?: Prompt<S>): UnregisterCallback;
    appendListener(listener: LocationListener<S>): UnregisterCallback;
    notifyListeners(location: Location<S>, action: Action): void;
    confirmTransitionTo(
        location: Location<S>,
        action: Action,
        getUserConfirmation: typeof getConfirmation,
        callback: (result: boolean) => void,
    ): void;
}

export default function createTransitionManager<S = LocationState>(): TransitionManager<S>;
