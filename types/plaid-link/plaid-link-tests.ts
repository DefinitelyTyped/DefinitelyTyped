import { Plaid } from 'plaid-link';

const product: Plaid.Product = 'auth';
const env: Plaid.Environment = 'sandbox';
const language: Plaid.Language = 'en';
const countryCodes: Plaid.Country[] = ['US'];

const config: Plaid.CreateConfig = {
    clientName: 'Test Client Name',
    product: [product],
    key: 'API_KEY',
    env,
    language,
    countryCodes,
    onSuccess: () => {},
};

const newConfig: Plaid.CreateConfig = {
    token: 'GENERATED_LINK_TOKEN',
    onSuccess: (public_token, metadata) => {},
    onLoad: () => {},
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    receivedRedirectUri: 'https://example.com/',
};

const mockLinkHandler: Plaid.LinkHandler = {
    open: institution_id => {},
    exit: options => {},
    destroy: () => {},
    institutions: [],
};
