import { Currency } from './currency';

export type MerchantStatus = 'active' | 'inactive';

export interface Merchant {
  id: number;
  business_name: string;
  business_description: string;
  status: MerchantStatus;
  country: string;
  currency: Currency;
  support_email: string;
  timezone: string | null;
  logo?: string;
  logo_shape?: string;
  cover: string | null;
  intercom: boolean;
  has: {
    logo: boolean;
    cover: boolean;
    analytics: boolean;
    business_description: boolean;
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
