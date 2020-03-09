import { Gradation, Unit } from '.';

export const minute: number;
export const hour: number;
export const day: number;
export const month: number;
export const year: number;
export function getStep(gradation: Gradation[], unit: Unit): Gradation | undefined;
export function getDate(value: Date | number): Date;
