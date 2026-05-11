// JSBox Keychain API TypeScript Declaration

interface JBKeychain {
    set(key: string, value: string, domain?: string): boolean;
    get(key: string, domain?: string): string;
    remove(key: string, domain?: string): boolean;
    clear(domain: string): boolean;
    keys(domain: string): string[];
}

declare const $keychain: JBKeychain;
