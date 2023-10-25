import { NProgressOptions } from "nprogress";
import { Component, ComponentType } from "react";

export default function withNProgress(
    delayMs?: number,
    options?: Partial<NProgressOptions>,
): <P extends object>(Page: ComponentType<P>) => ComponentType<P>;
