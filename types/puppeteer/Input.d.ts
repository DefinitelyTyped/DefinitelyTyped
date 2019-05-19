/**
 * Definition from Input.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/Input.js
 */

export type KeyboardKeyF = 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'F21' | 'F22' |
 'F23' | 'F24';
export type KeyboardKeyDigits = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'Digit0' | 'Digit1' | 'Digit2' | 'Digit3' | 'Digit4' | 'Digit5' | 'Digit6' | 'Digit7' | 'Digit8' |
 'Digit9';
export type KeyboardKeyNumpad = 'Numpad0' | 'Numpad1' | 'Numpad2' | 'Numpad3' | 'Numpad4' | 'Numpad5' | 'Numpad6' | 'Numpad7' | 'Numpad8' | 'Numpad9' | 'NumpadAdd' | 'NumpadDecimal' |
 'NumpadDivide' | 'NumpadEnter' | 'NumpadEqual' | 'NumpadMultiply' | 'NumpadSubtract';
export type KeyboardKeyAlpha = 'KeyA' | 'KeyB' | 'KeyC' | 'KeyD' | 'KeyE' | 'KeyF' | 'KeyG' | 'KeyH' | 'KeyI' | 'KeyJ' | 'KeyK' | 'KeyL' | 'KeyM' | 'KeyN' | 'KeyO' | 'KeyP' | 'KeyQ' | 'KeyR' |
 'KeyS' | 'KeyT' | 'KeyU' | 'KeyV' | 'KeyW' | 'KeyX' | 'KeyY' | 'KeyZ' |
  'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'Tab' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' |
  'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

export type KeyboardKeySpecial = '\n' | '\r' | '\u0000';

export type KeyboardKeyOther = ' ' | '!' | '"' | '#' | '$' | '%' | '&' | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\' | "'" | ']' | '^' | '_' |
 '`' | '{' | '|' | '}' | '~';
export type KeyboardKeyOtherNamed = 'Abort' | 'Accept' | 'Alt' | 'AltGraph' | 'AltLeft' | 'AltRight' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'Attn' | 'AudioVolumeDown' |
 'AudioVolumeMute' | 'AudioVolumeUp' | 'Backquote' | 'Backslash' | 'Backspace' | 'BracketLeft' | 'BracketRight' | 'Cancel' | 'CapsLock' | 'Clear' | 'Comma' | 'ContextMenu' | 'Control' |
 'ControlLeft' | 'ControlRight' | 'Convert' | 'CrSel' | 'Delete' | 'Eject' | 'End' | 'Enter' | 'Equal' | 'EraseEof' | 'Escape' | 'ExSel' | 'Execute' | 'MediaPlayPause' | 'MediaStop' |
 'MediaTrackNext' | 'MediaTrackPrevious' | 'Meta' | 'MetaLeft' | 'MetaRight' | 'Minus' | 'ModeChange' | 'PageDown' | 'PageUp' | 'Pause' | 'Period' | 'Play' | 'Power' | 'Print' | 'PrintScreen' |
 'Props' | 'Quote' | 'NonConvert' | 'NumLock' | 'Open' | 'ScrollLock' | 'Select' | 'Semicolon' | 'Shift' | 'ShiftLeft' | 'ShiftRight' | 'Slash' | 'Space' | 'Help' | 'Home' | 'Insert' | 'ZoomOut';

export type KeyboardKey = KeyboardKeyOther | KeyboardKeySpecial | KeyboardKeyDigits | KeyboardKeyF | KeyboardKeyNumpad | KeyboardKeyAlpha | KeyboardKeyOtherNamed;

export type KeyMapDefinition = {
  [key in KeyboardKey]: KeyDefinition;
};

export interface KeyDefinition {
  keyCode: number;
  shiftKeyCode?: number;
  key: string;
  shiftKey?: string;
  code: string;
  text?: string;
  shiftText?: string;
  location?: number;
}

export type MouseButtons = "left" | "right" | "middle";

export interface ClickOptions {
  /** @default MouseButtons.Left */
  button?: MouseButtons;
  /** @default 1 */
  clickCount?: number;
  /**
   * Time to wait between mousedown and mouseup in milliseconds.
   * @default 0
   */
  delay?: number;
}

/** Keyboard provides an api for managing a virtual keyboard. */
export interface Keyboard {
  /**
   * Dispatches a keydown event.
   * @param key Name of key to press, such as ArrowLeft.
   * @param options Specifies a input text event.
   */
  down(key: KeyboardKey, options?: { text?: string }): Promise<void>;

  /** Shortcut for `keyboard.down` and `keyboard.up`. */
  press(key: KeyboardKey, options?: { text?: string, delay?: number }): Promise<void>;

  /** Dispatches a `keypress` and `input` event. This does not send a `keydown` or keyup `event`. */
  sendCharacter(char: string): Promise<void>;

  /**
   * Sends a keydown, keypress/input, and keyup event for each character in the text.
   * @param text A text to type into a focused element.
   * @param options Specifies the typing options.
   */
  type(text: string, options?: { delay?: number }): Promise<void>;

  /**
   * Dispatches a keyup event.
   * @param key Name of key to release, such as ArrowLeft.
   */
  up(key: KeyboardKey): Promise<void>;
}

export interface MousePressOptions {
  /**
   * left, right, or middle.
   * @default left
   */
  button?: MouseButtons;
  /**
   * The number of clicks.
   * @default 1
   */
  clickCount?: number;
}

export interface Mouse {
  /**
   * Shortcut for `mouse.move`, `mouse.down` and `mouse.up`.
   * @param x The x position.
   * @param y The y position.
   * @param options The click options.
   */
  click(x: number, y: number, options?: ClickOptions): Promise<void>;
  /**
   * Dispatches a `mousedown` event.
   * @param options The mouse press options.
   */
  down(options?: MousePressOptions): Promise<void>;

  /**
   * Dispatches a `mousemove` event.
   * @param x The x position.
   * @param y The y position.
   * @param options The mouse move options.
   */
  move(x: number, y: number, options?: { steps: number }): Promise<void>;
  /**
   * Dispatches a `mouseup` event.
   * @param options The mouse press options.
   */
  up(options?: MousePressOptions): Promise<void>;
}

export interface Touchscreen {
  /**
   * Dispatches a touchstart and touchend event.
   * @param x The x position.
   * @param y The y position.
   */
  tap(x: number, y: number): Promise<void>;
}
