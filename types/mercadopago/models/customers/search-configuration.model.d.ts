import { Identification } from '../../shared/payer-identification';
import { SearchConfiguration } from '../default-configuration.model';

export interface CustomerQs {
  id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  identification?: Identification;
  description?: string;
}

export type CustomerSearchConfiguration = SearchConfiguration<CustomerQs>;
