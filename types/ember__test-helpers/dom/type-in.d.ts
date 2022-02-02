import { Target } from '@ember/test-helpers';

export default function typeIn(target: Target, text: string, options?: {delay: number}): Promise<void>;
