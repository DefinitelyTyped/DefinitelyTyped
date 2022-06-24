import Resolver from 'ember-resolver';
import { TestContext } from './index';

export default function setupContext<C extends object>(context: C, options?: { resolver?: Resolver | undefined }): Promise<C>;
export function getContext(): TestContext;
export function setContext(context: object): void;
export function unsetContext(): void;

export function pauseTest(): Promise<void>;
export function resumeTest(): void;
