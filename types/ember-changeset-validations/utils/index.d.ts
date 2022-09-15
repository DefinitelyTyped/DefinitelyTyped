import { ValidatorMapFunc } from '../index';
import type EmberArray from '@ember/array';

export function getMessages(
    options?: {
        moduleMap: Record<string, unknown>;
        useCache: boolean;
    }
): Record<string, unknown>;

export function handleMultipleValidations(
    options?: {
        validators: ValidatorMapFunc[];
        options: Parameters<ValidatorMapFunc>;
    }
): Promise<unknown> | boolean;

export function toDate(
    argument: Date | number
): Date;

export interface BuildMessageResult {
    message?: string;
    type: string;
    value?: string;
    context?: Record<string, unknown>;
}

export function buildMessage(
    key: string,
    result: BuildMessageResult
): BuildMessageResult | string;

export function withDefaults(
    obj: Record<string, unknown>,
    defaults: Record<string, unknown>
): Record<string, unknown>;

export function wrapInArray(
    value: unknown[]
): EmberArray<unknown>;
