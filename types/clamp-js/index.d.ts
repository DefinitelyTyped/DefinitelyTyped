declare namespace clamp {
    interface ClampOptions {
        clamp?: number | string | undefined;
        useNativeClamp?: boolean | undefined;
        splitOnChars?: string[] | undefined;
        animate?: boolean | undefined;
        truncationChar?: string | undefined;
        truncationHTML?: string | null | undefined;
    }

    interface ClampResponse {
        original: string;
        clamped: string;
    }
}

declare function clamp(element: HTMLElement, options?: clamp.ClampOptions): clamp.ClampResponse;

export = clamp;
export as namespace clamp;
