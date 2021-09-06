import { Currency } from './currency';

export type MerchantStatus = 'active' | 'inactive';

export interface Merchant {
    id: number;
    name: string;
    description: string;
    status: MerchantStatus;
    country: string;
    currency: Currency;
    support_email: string;
    logo?: string | undefined;
    logo_shape?: string | undefined;
    cover: string | null;
    intercom: boolean;
    has: {
        logo: boolean;
        cover: boolean;
        analytics: boolean;
        description: boolean;
    };
    analytics: {
        google: {
            settings: {
                tracking_id: string | null;
                linked_domains: string[] | null;
            };
        };
    };
}
