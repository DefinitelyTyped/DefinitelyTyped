interface GlideUser {
    getCompanyID(): string;
    getDisplayName(): string;
    getDomainID(): string;
    getEmail(): string;
    getFirstName(): string;
    getID(): string;
    getLastName(): string;
    getName(): string;
    getPreference(name: string): string;
    getRoles(): string[];
    getUserRoles(): string[];
    hasRole(role: string): boolean;
    isMemberOf(group: string): boolean;
    savePreference(name: string, value: string): void;
}
