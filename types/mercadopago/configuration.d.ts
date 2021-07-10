export interface ConfigCredentialsOption extends GeneralConfigOptions {
  client_id: string;
  client_secret: string;
}

export interface ConfigTokenOption extends GeneralConfigOptions {
  access_token: string;
}

export interface GeneralConfigOptions {
  platform_id?: string | undefined;
  corporation_id?: string | undefined;
  integrator_id?: string | undefined;
  sandbox?: MercadoPagoConfig['sandbox'] | undefined;
  show_promise_error?: MercadoPagoConfig['show_promise_error'] | undefined;
}

export type ConfigOptions = ConfigCredentialsOption | ConfigTokenOption;

export interface MercadoPagoConfig {
  sandbox: boolean;
  show_promise_error: boolean;
  cache_max_size: number;

  configure(options: ConfigOptions): void;
  getClientId(): string;
  getClientSecret(): string;
  getPlatformId(): string;
  getCorporationId(): string;
  getIntegratorId(): string;
  setAccessToken(token: string): MercadoPagoConfig;
  getAccessToken(): string;
  setRefreshToken(refreshToken: string): MercadoPagoConfig;
  getRefreshToken(): string;
  /** Get base URL to execute rest operations */
  getBaseUrl(): string;
  getProductId(): string;
  getTrackingId(): string;
  getUserAgent(): string;
  /** Check NODE_ENV variable */
  areTestsRunnning(): string;
}
