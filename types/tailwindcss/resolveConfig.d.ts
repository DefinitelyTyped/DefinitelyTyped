import type { TailwindConfig } from './tailwind-config';

declare function resolveConfig(tailwindConfig: TailwindConfig): TailwindConfig;

export default resolveConfig;
