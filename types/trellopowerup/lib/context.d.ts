export type Permissions = "read" | "write";

export interface Context {
    board: string;
    card?: string;
    command?: string; // e.g. "show-settings"
    member: string; // Member ID
    organization?: string; // Organization ID
    enterprise?: string;
    permissions?: {
        board: Permissions;
        card: Permissions;
        organization: Permissions;
    };
    version: string;
    locale: string; // e.g. "en-US"
    theme: string; // e.g. dark. "dark" or "light"? What about "system"?
    initialTheme: string; // e.g. dark. "dark" or "light"? What about "system"?
    el: string;
    plugin: string; // Power-up ID
}
