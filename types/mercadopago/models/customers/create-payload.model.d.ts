import { SimpleAddressId } from '../../shared/address';
import { Identification } from '../../shared/payer-identification';
import { Phone } from '../../shared/phone';

export interface CreateCustomerPayload {
  /** Email do cliente */
  email?: string | undefined;
  /** Nome do cliente. */
  first_name?: string | undefined;
  /** Sobrenome do cliente. */
  last_name?: string | undefined;
  /** Telefone do cliente. */
  phone?: Omit<Phone, 'extension'> | undefined;
  /** Informações sobre a identificação do cliente. */
  identification?: Identification | undefined;
  /** Endereço por defeito do cliente. */
  default_address?: string | undefined;
  /** Informação sobre o endereço padrão do cliente. */
  address?: SimpleAddressId | undefined;
  /** Data (ISO_8601) de registo do cliente. */
  date_registered?: string | undefined;
  /** Descrição do cliente. */
  description?: string | undefined;
  /** Metadata do cliente */
  metadata?: any;
  /** Cartão padrão do cliente. */
  default_card?: string | undefined;
}
