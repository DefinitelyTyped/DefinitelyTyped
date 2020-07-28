/**
 * When dispatched, this action makes all tips show again.
 */
export function enableTips(): void;

/**
 * When dispatched, this action prevents all tips from showing again.
 */
export function disableTips(): void;

/**
 * When dispatched, this action dismisses the given tip. A dismissed tip will not show again.
 *
 * @param id - The tip to dismiss.
 */
export function dismissTip(id: string): void;

/**
 * When dispatched, this action presents a guide that takes the user through a series of tips step
 * by step.
 *
 * @param tipIds - Which tips to show in the guide.
 */
export function triggerGuide(tipIds: string[]): void;
