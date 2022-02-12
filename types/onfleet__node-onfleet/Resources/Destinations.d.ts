import { OnfleetMetadata, MatchMetadata } from '../metadata';

declare class Destination {
  create(destination: Destination.CreateDestinationProps): Promise<Destination.OnfleetDestination>;
  get(id: string): Promise<Destination.OnfleetDestination>;
  matchMetadata: MatchMetadata<Destination.OnfleetDestination['metadata']>;
}

declare namespace Destination {
  type Latitude = number;
  type Longitude = number;
  type Location = [Longitude, Latitude];

  /**
   * @prop { string } [apartment] - The suite or apartment number, or any additional relevant information.
   * @prop { string } city - The name of the municipality.
   * @prop { string } country - The name of the country.
   * @prop { string } [name] - A name associated with this address, for example, "Transamerica Pyramid".
   * @prop { string } number - The number component of this address, it may also contain letters.
   * @prop { string } [postalCode] - The postal or zip code.
   * @prop { string } [state] - The name of the state, province or jurisdiction.
   * @prop { string } street - The name of the street.
   * @prop { string } [unparsed] - A complete address specified in a single, unparsed string where the various elements are separated by commas.
   * * If present, all other address properties will be ignored (with the exception of name and apartment).
   * * In some countries, you may skip most address details (like city or state) if you provide a valid postalCode:
   *  for example, 325 Front Street W., M5V 3B5, CA will be geocoded correctly.
   */
  interface DestinationAddress {
    apartment?: string | undefined;
    city: string;
    country: string;
    name?: string | undefined;
    number: string;
    postalCode?: string | undefined;
    state?: string | undefined;
    street: string;
    unparsed?: string | undefined;
  }

  interface OnfleetDestination {
    id: string;
    timeCreated: number;
    timeLastModified: number;
    location: Location;
    address: {
      apartment: string;
      state: string;
      postalCode: string;
      country: string;
      city: string;
      street: string;
      number: string;
    };
    notes: string;
    metadata: OnfleetMetadata[];
  }

  interface CreateDestinationProps {
    address: DestinationAddress;
    location?: Location | undefined;
    notes?: string | undefined;
  }
}

export = Destination;
