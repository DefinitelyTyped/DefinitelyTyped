export interface Choice {
    label: string;
    description: string;
    value: boolean;
}

export type Category = 'necessary' | 'tracking' | 'analytics' | 'marketing';

export interface Options {
    cookieName?: string;
    cookieConfig?: {
        domain: string;
        path: string;
    };
    heading?: string;
    description?: string;
    acceptLabel?: string;
    rejectLabel?: string;
    settingsLabel?: string;
    closeLabel?: string;
    choices?: Partial<Record<Category, Choice | false>>;
    showEditIcon?: boolean;
    categories?: Partial<Record<Category, () => void>>;
}

export function attachBanner(bodyElement: HTMLElement, options?: Options): void;
