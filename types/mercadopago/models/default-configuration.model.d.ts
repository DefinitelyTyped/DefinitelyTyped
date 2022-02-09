export interface DefaultConfiguration {
  /** Query string params. */
  qs?: any;
  /** Object with headers to be included in the request. Note that `user-agent` and `x-idempotency-key` headers will be ignored if included in this object. */
  headers?: {[key: string]: string} | undefined;
  /** Idempotency value that will be included on the header. */
  idempotency?: string | undefined;
}

export type DefaultConfigurationOmitQs = Omit<DefaultConfiguration, 'qs'>;

export interface SearchConfiguration<T = any> extends Omit<DefaultConfiguration, 'qs'> {
  /** Query string params. */
  qs: T;
}
