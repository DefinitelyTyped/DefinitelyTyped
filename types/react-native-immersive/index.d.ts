/** Listener invoked when immersive state changes and needs restoring. */
export type ImmersiveListener = () => void;

export interface ImmersiveStatic {
    /** Enable immersive (full‑screen) mode. */
    on(): void;

    /** Disable immersive mode. */
    off(): void;

    /** Explicitly set immersive mode on/off. */
    setImmersive(enabled: boolean): void;

    /**
     * Subscribe to immersive state changes (e.g., after Keyboard/Alert/Modal).
     * Call `Immersive.on()` inside your listener to restore state.
     */
    addImmersiveListener(listener: ImmersiveListener): void;

    /** Unsubscribe a previously added listener. */
    removeImmersiveListener(listener: ImmersiveListener): void;
}

/**
 * Named export used by this package:
 *   import { Immersive } from 'react-native-immersive';
 */
export const Immersive: ImmersiveStatic;
