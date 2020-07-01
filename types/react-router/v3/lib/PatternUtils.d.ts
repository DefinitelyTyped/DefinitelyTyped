import { RoutePattern } from "react-router";

export function formatPattern(pattern: RoutePattern, params: any): string;

export function matchPattern(
    pattern: string,
    pathname: string
): {
    remainingPathname: string;
    paramNames: string[];
    paramValues: string[];
} | null;
