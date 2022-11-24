import Resolver from 'ember-resolver';

export default function setupContext<C extends object>(context: C, options?: { resolver?: Resolver | undefined }): Promise<C>;
export function getContext(): object;
export function setContext(context: object): void;
export function unsetContext(): void;

export function pauseTest(): Promise<void>;
export function resumeTest(): void;
