declare const _exports:
    | {
          on: () => void;
          off: () => void;
          stop: () => void;
      }
    | {
          on: typeof on;
          off: typeof off;
      };
export = _exports;
declare function on(eventName: any, handler: any): void;
declare function off(eventName: any, handler: any): void;
