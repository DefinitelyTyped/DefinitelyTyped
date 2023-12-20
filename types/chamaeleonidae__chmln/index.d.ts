/* eslint-disable @definitelytyped/no-single-declare-module */
// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@chamaeleonidae/chmln" {
    interface ChameleonInitOptions {
        fastUrl: string;
        forceOverride?: boolean;
    }

    interface ChameleonCompanyOptions {
        // For B2B products, send company / account information here
        uid?: string; // Unique ID of the company / account in your database (e.g. 9832 or "590b80e5f433ea81b96c9bf7")
        created?: string; // To enable targeting all users based on this company property
        name?: string; // Send any data that appears within URLs, such as subdomains (e.g. "airbnb")
        trial_ends?: string; // Send data about key milestones (e.g. "2017-08-01T03:21:10Z")
        version?: string; // If your software varies by version then this will help show the correct guidance (e.g. "1.56")
        plan?: string; // Send null when no value exists (e.g. "Gold", "Advanced")
        spend?: string; // Send other properties that will help in targeting users (e.g. sales rep, source, stage)
    }

    type ChameleonIdentifyOptions = {
        email?: string; // RECOMMENDED Used to connect data coming from various integrations

        // SUGGESTED - User properties:
        created?: string; // Send dates in ISO or unix timestamp format (e.g. "2017-07-01T03:21:10Z" or 1431432000)
        name?: string; // We will parse this to extra first and surnames (e.g. "James Doe")
        role?: string; // Send properties useful for targeting types of users (e.g. "Admin")
        logins?: string; // Send any data about user engagement (e.g. 39)
        project?: string; // Send any unique data for a user that might appear in any page URLs (e.g. 09876 or "12a34b56")

        // OPTIONAL - Company properties:
        company?: ChameleonCompanyOptions;
    } & {
        // OPTIONAL - Other extra properties:
        [key: string]: string | undefined;
    };
    function init(token: string, options: ChameleonInitOptions): void;
    function identify(id: string, options: ChameleonIdentifyOptions): void;
    function track(event: string): void;
}
