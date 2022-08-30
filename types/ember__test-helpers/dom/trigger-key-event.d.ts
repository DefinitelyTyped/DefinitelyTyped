import { Target } from '@ember/test-helpers';

export type KeyEvent = 'keydown' | 'keyup' | 'keypress';

export interface KeyModifiers {
    ctrlKey?: boolean | undefined;
    altKey?: boolean | undefined;
    shiftKey?: boolean | undefined;
    metaKey?: boolean | undefined;
}

export default function triggerKeyEvent(target: Target, eventType: KeyEvent, key: number | string, modifiers?: KeyModifiers): Promise<void>;
