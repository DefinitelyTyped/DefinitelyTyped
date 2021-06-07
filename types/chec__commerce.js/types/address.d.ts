export interface Address {
  name: string;
  street: string;
  street_2: string | null;
  town_city: string;
  county_state: string;
  postal_zip_code: string;
  country: string;
  meta?: any;
}
