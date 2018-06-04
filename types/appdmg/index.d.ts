// Type definitions for appdmg 0.5
// Project: https://github.com/LinusU/node-appdmg#readme
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace appdmg {
  interface Progress {
    current: number;
    total: number;
    type: "step-begin" | "step-end";
    title: string;
    status: "ok" | "skip" | "fail";
  }

  interface EventEmitter extends NodeJS.EventEmitter {
    on(event: "progress", listener: (info: Progress) => void): this;
    on(event: "finish", listener: () => void): this;
    on(event: "error", listener: (err: any) => void): this;
  }

  interface SpecificationOptions {
    app: string;
    background: string;
    icon: string;
    iconSize: number;
    title: string;
  }

  interface SpecificationWindow {
    position?: { x: number; y: number };
    size?: { width: number; height: number };
  }

  interface SpecificationContents {
    x: number;
    y: number;
    type: "link" | "file" | "position";
    path: string;
    name?: string;
  }

  interface SpecificationCodeSign {
    "signing-identity": string;
    identifier?: string;
  }

  interface Specification {
    title: string;
    icon?: string;
    background?: string;
    "background-color"?: string;
    "icon-size"?: number;
    window?: SpecificationWindow;
    format: "UDRW" | "UDRO" | "UDCO" | "UDZO" | "UDBZ" | "ULFO";
    contents: SpecificationContents[];
    "code-sign"?: SpecificationCodeSign;
  }

  interface Options {
    target: string;
    basepath: string;
    specification: Specification;
  }
}

declare function appdmg(options?: appdmg.Options): appdmg.EventEmitter;

export = appdmg;
