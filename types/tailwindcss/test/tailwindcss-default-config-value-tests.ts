import type { TailwindConfig } from 'tailwindcss/tailwind-config';
import type { TailwindConfigDefault } from 'tailwindcss/tailwind-config-default';

// We test that the default config value type (TailwindConfigDefault) is assignable to TailwindConfig.
// If there is an error the TailwindConfig type probably needs to be updated.
const tailwindConfig: TailwindConfig = {} as any as TailwindConfigDefault;
