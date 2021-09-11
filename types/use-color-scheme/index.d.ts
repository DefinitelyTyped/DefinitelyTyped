// Type definitions for use-color-scheme 1.1
// Project: https://github.com/mujo-code/use-color-scheme
// Definitions by: Marton Lederer <https://github.com/martonlederer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Preference = typeof PREFERENCES[keyof typeof PREFERENCES];

export const PREFERENCES: {
    DARK: 'dark';
    LIGHT: 'light';
    NONE: 'no-preference';
};

export const values: Array<typeof PREFERENCES[keyof typeof PREFERENCES]>;

export function makeQuery(pref: Preference): string;
export function matchPreference(pref: Preference): MediaQueryList;
export function getPreference(preferences: Preference[]): Preference;
export function attachListener(pref: Preference, setScheme: (pref: Preference) => void): () => void;
export function useColorScheme(): { scheme: Preference };

export {};
