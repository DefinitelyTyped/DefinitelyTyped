// Type definitions for react-side-effect v1.0.2
// Project: https://github.com/danalloway/detect-emoji-support
// Definitions by: Adam Hanna <https://github.com/adam-hanna>
// Definitions: https://github.com/adam-hanna/-types-detect-emoji-support

declare module "detect-emoji-support" {
  function emojiSupport(): boolean;

  namespace emojiSupport {} // https://github.com/Microsoft/TypeScript/issues/5073
  export = emojiSupport;
}
