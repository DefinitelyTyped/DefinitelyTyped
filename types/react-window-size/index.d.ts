import { ComponentType } from "react";

export interface WindowSizeProps {
    windowHeight: number;
    windowWidth: number;
}

export default function<T>(
    ComposedComponent: ComponentType<T & WindowSizeProps>,
): ComponentType<T>;
