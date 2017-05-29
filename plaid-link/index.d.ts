// Type definitions for Plaid Link
// Project: https://plaid.com/docs/quickstart
// Definitions by: Paolo Bernasconi <https://github.com/pbernasconi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Plaid: PlaidLink;

interface PlaidLink {
  create: (config: PlaidLinkConfig) => PlaidLinkHandler;
  readonly version: string;
}

interface PlaidLinkHandler {
  open: (institution?: string) => void;
  exit: (config?: PlaidLinkHandlerExitConfig) => void;
}

interface PlaidLinkConfig {
  apiVersion?: string,
  clientName: string;
  env: string;
  forceIframe?: boolean;
  isWebView?: boolean;
  key: string;
  product: string[];
  selectAccount?: boolean;
  token?: string;
  webhook?: string;
  onLoad?: () => void;
  onExit?: (error: PlaidLinkExitError, metadata: PlaidLinkExitMetadata) => void;
  onSuccess: (public_token: string, metadata: PlaidLinkSuccessMetadata) => void;
}

interface PlaidLinkSuccessMetadata {
  institution?: { name: string, institution_id: string };
  account?: { id: string, name: string };
  link_request_id?: string;
}

interface PlaidLinkExitMetadata {
  institution?: { name: string, institution_id: string };
  account?: { id: string, name: string };
  request_id?: string;
}

interface PlaidLinkExitError {
  display_message: string,
  error_code: string,
  error_message: string
  error_type: string,
}

interface PlaidLinkHandlerExitConfig {
  force?: boolean;
}
