import { Node } from "postcss";

export function calcValue(fraction: string, gutter?: string, rounder?: string, unit?: string): string;

export function validateUnit(value: any, validUnits: readonly any[]): boolean;

export function parseLostProperty<T extends Node, P extends keyof T>(
    nodes: T[],
    propertyName: P,
    defaultPropertyValue: T[P],
): T[P];
