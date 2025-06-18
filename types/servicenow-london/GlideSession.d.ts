interface GlideSession {
    isInteractive(): boolean;
    isLoggedIn(): boolean;
    getClientData(paramName: string): string;
    getClientIP(): string;
    getCurrentApplicationId(): string;
    getLanguage(): string;
    getTimeZoneName(): string;
    getSessionToken(): string;
    getUrlOnStack(): string;
    isImpersonating(): boolean;
    putClientData(paramName: string, paramValue: string): void;
}
