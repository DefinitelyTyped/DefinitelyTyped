//
// PlaidLink tests
//

// Initialize Link with the basic config
var linkConfig: PlaidLinkConfig = {
  clientName: 'Client Name',
  env: 'sandbox',
  key: '[PLAID_PUBLIC_KEY]',
  product: ['auth'],
  onSuccess: (public_token) => {},
};

let linkHandler = Plaid.create(linkConfig);

// Initialize Link with the all config options
linkConfig = {
  clientName: 'Client Name',
  env: 'sandbox',
  forceIframe: false,
  isWebView: false,
  key: '[PLAID_PUBLIC_KEY]',
  product: ['auth'],
  selectAccount: true,
  token: '[PLAID_PUBLIC_TOKEN_TO_PATCH]',
  webhook: 'https://domain.com/plaid/webhook',
  onLoad: () => {},
  onSuccess: (public_token) => {},
  onExit: (err, metadata) => {}
};

linkHandler = Plaid.create(linkConfig);

// Open Link to the Select Institution view
linkHandler.open();

// Open Link with a sepcific institutions
linkHandler.open('ins_10');

// Exit Link gracefully
linkHandler.exit();

// Exit Link gracefully
const exitConfig: PlaidLinkHandlerExitConfig = {
  force: true,
};
linkHandler.exit(exitConfig);
