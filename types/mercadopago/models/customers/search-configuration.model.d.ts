import { Identification } from '../../shared/payer-identification';
import { SearchConfiguration } from '../default-configuration.model';

export interface CustomerQs {
  id?: string | undefined;
  email?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  identification?: Identification | undefined;
  description?: string | undefined;
}

export type CustomerSearchConfiguration = SearchConfiguration<CustomerQs>;
