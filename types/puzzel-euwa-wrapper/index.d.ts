// Type definitions for EUWA Wrapper Interface 1.0.3
// Project: https://help.puzzel.com/product-documents/user-guide/puzzel-contact-centre/puzzel-administration-portal/services/chat-configuration/euwa-wrapper-interface
// Definitions by: Mannuel Ferreira <https://github.com/mannuelf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@puzzel/euwa-wrapper' {
  export type Config = {
    customerKey: string;
    configId: string;
  };

  export type Options = {
    settings: ApplicationSettings;
    hooks?: Hooks;
  };

  export type ApplicationList = {
    [app: string]: string;
  };

  export type Hooks = {
    [hook: string]: Function;
    onBeforeLoad: (event: string, callback: Function) => void;
  };

  export type ApplicationBridge = {
    api: ApplicationAPI;
    publish: (event: string, ...data: any) => void;
    subscribe: (event: string, callback: Function) => void;
  };

  export type ApplicationSettings = {
    [app: string]: object;
  };

  export type SystemVariables = {
    enteredChatId: string;
    enteredFormIssue: string;
    enteredFormName: string;
    selectedQueueKey: string;
    timeId2Map: string;
  };

  export type ApplicationAPI = {
    [method: string]: Function;
    getState: Function;
    isConnected: Function;
    maximize: Function;
    minimize: Function;
    startChat: Function;
    updateSystemVariables: ({
      enteredFormName,
      enteredChatId,
      enteredFormIssue,
      selectedQueueKey,
      timeId2Map,
    }: SystemVariables) => void;
  };

  export class EUWA {
    static APPS: ApplicationList;

    constructor(
      { customerKey, configId }: Config,
      { settings, hooks }: Options
    );
    getApplication(id: string): Promise<ApplicationBridge>;
    getApplicationBeforeLoad(id: string): ApplicationBridge;
  }
}
