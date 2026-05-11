import { ComponentType } from "react";

declare namespace windowSize {
    interface WindowSizeProps {
        windowHeight: number;
        windowWidth: number;
    }
}

declare function windowSize<T>(
    ComposedComponent: ComponentType<T & windowSize.WindowSizeProps>,
): ComponentType<T>;

export = windowSize;
