import { SimpleAddressId } from '../../shared/address';
import { Identification } from '../../shared/payer-identification';
import { Phone } from '../../shared/phone';

export interface CreateCustomerPayload {
  /** Email do cliente */
  email?: string;
  /** Nome do cliente. */
  first_name?: string;
  /** Sobrenome do cliente. */
  last_name?: string;
  /** Telefone do cliente. */
  phone?: Omit<Phone, 'extension'>;
  /** Informações sobre a identificação do cliente. */
  identification?: Identification;
  /** Endereço por defeito do cliente. */
  default_address?: string;
  /** Informação sobre o endereço padrão do cliente. */
  address?: SimpleAddressId;
  /** Data (ISO_8601) de registo do cliente. */
  date_registered?: string;
  /** Descrição do cliente. */
  description?: string;
  /** Metadata do cliente */
  metadata?: any;
  /** Cartão padrão do cliente. */
  default_card?: string;
}
