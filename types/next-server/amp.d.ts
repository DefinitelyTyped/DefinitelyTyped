import { NextComponentType } from "next";

export interface WithAmpConfig {
    hybrid: boolean;
}

export function withAmp(
    Component: NextComponentType | React.ComponentType,
    config?: WithAmpConfig
): React.ComponentType;

export function useAmp(): boolean;
