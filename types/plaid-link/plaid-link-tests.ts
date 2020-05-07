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
