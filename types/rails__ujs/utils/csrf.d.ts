export function csrfToken(): string | null;
export function csrfParam(): string | null;
export function CSRFProtection(xhr: XMLHttpRequest): void;
export function refreshCSRFTokens(): void;
