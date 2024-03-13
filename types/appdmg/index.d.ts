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
        position?: { x: number; y: number } | undefined;
        size?: { width: number; height: number } | undefined;
    }

    interface SpecificationContents {
        x: number;
        y: number;
        type: "link" | "file" | "position";
        path: string;
        name?: string | undefined;
    }

    interface SpecificationCodeSign {
        "signing-identity": string;
        identifier?: string | undefined;
    }

    interface Specification {
        title: string;
        icon?: string | undefined;
        background?: string | undefined;
        "background-color"?: string | undefined;
        "icon-size"?: number | undefined;
        window?: SpecificationWindow | undefined;
        format: "UDRW" | "UDRO" | "UDCO" | "UDZO" | "UDBZ" | "ULFO";
        contents: SpecificationContents[];
        "code-sign"?: SpecificationCodeSign | undefined;
    }

    interface Options {
        source?: string;
        target: string;
        basepath: string;
        specification: Specification;
    }
}

declare function appdmg(options?: appdmg.Options): appdmg.EventEmitter;

export = appdmg;
