// Type definitions for install-prompt-banner 0.0.6
// Project: https://github.com/blackbing/install-prompt-banner
// Definitions by: Filip Kaňák <https://github.com/thebellenik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'install-prompt-banner' {
  export class InstallPrompt {
      constructor(options?: {promptKey: string, minimumPrompt: number}|null);
      public addCount(): this;
      public checkPrompt(): boolean;
    }
}
