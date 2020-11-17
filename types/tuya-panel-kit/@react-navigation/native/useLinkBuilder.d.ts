/**
 * Build destination link for a navigate action.
 * Useful for showing anchor tags on the web for buttons that perform navigation.
 */
export default function useLinkBuilder(): (name: string, params?: object | undefined) => string | undefined;
