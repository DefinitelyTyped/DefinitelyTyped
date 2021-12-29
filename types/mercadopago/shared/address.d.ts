export interface SimpleAddress {
  zip_code: string;
  street_name: string;
  street_number: string;
}

export interface SimpleAddressId extends SimpleAddress {
  /** Identificador do endereço do cliente. */
  id?: string | undefined;
}

export interface Address extends SimpleAddress {
  floor?: string | undefined;
  apartment?: string | undefined;
}

export interface CompleteAddress extends Address {
  city_name: string;
  state_name: string;
}
