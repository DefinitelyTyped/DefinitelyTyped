import { Plaid } from "plaid-link";

const product: Plaid.Product = "auth";
const env: Plaid.Environment = "sandbox";
const language: Plaid.Language = "en";
const user: Plaid.User = {
    legalName: "Test Name",
    emailAddress: "test@test.com"
};

const config: Plaid.CreateConfig = {
    clientName: "Test Client Name",
    product: [product],
    key: "API_KEY",
    env,
    language,
    user,
    onSuccess: () => {}
};
