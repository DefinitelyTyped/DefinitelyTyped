/**
 * Keyboard provides an API for managing a virtual keyboard.
 */
export class Keyboard {
  /**
   * Sends a key down message to a session target.
   * A superset of the key values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
   * @param key Name of key to press, such as `ArrowLeft`.
   */
  down(key: string): void;

  /**
   * Dispatches an `input` event with the given `text`.
   * This method does not emit `keyDown`, `keyUp` or `keyPress` events.
   * @param text Event text.
   */
  insertText(text: string): void;

  /**
   * Sends a key press message to a session target.
   * A press message consists of successive key down and up messages.
   * @param key Sequence of keys to press.
   * @param options Specifies the typing options.
   */
  press(key: string, options?: { delay?: number }): void;

  /**
   * Type sends a `press` message to a session target for each character in text.
   * It sends an insertText message if a character is not among
   * valid characters in the keyboard's layout.
   * Modifier keys `Shift`, `Control`, `Alt`, `Meta` are _not_ respected.
   * @param text A text to type into a focused element.
   * @param options Specifies the typing options.
   */
  type(text: string, options?: { delay?: number }): void;

  /**
   * Sends a key up message to a session target.
   * A superset of the key values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
   * @param key Name of key to release, such as `ArrowLeft`.
   */
  up(key: string): void;
}
