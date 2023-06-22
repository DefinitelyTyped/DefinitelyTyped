export interface SimpleAddress {
  zip_code?: string | undefined;
  street_name?: string | undefined;
  street_number?: number | undefined;
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
