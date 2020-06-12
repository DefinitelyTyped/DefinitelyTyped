import { ComponentType } from 'react';

// prettier-ignore
export default function withSpokenMessages<T extends ComponentType<any>>(wrapped: T):
    T extends ComponentType<infer U> ? ComponentType<Omit<U, "speak" | "debouncedSpeak">> :
    never;
