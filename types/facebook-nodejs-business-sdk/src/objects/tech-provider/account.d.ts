import FacebookAdsApi from "../../api";
/**
 * These are accounts owned by a tech provider's business, representing
 * a user of the tech provider's application.
 *
 * This class allows the tech provider to decide which assets are shared from an existing
 * facebook user's account/business portfolio (which the user has granted the tech provider access to),
 * and which assets are created and owned by the tech provider. This class allows the Tech Provider
 * to provide monetization experiences for the third party user using a higher level interface
 * than the underlying facebook graph apis.
 *
 * This class simplifies:
 * 1. Creating Assets that are owned by the tech provider (Ad Accounts, Pages, Pixels, etc) .
 * 2. Accessing Assets from a users facebook account or business account (Pages, Pixels, etc).
 * 3. Combining tech provider owned and user owned assets. (ex: a Product Catalog owned by the tech provider using CAPI events from a user owned dataset)
 * 3. Allocating a portion of the tech provider's Credit Line to the account.
 * 4. Access Token Usage and Management
 * 5. Providing Monetization Services to the third party user
 *
 * All management operations are performed using the {@link ThirdPartyAccountManager} (e.g. CRUD operations)
 *
 * Creation:
 * - {@link ThirdPartyAccountManager.createAccount()} must be used to create a new ThirdPartyAccount
 *
 * Loading:
 * - {@link ThirdPartyAccountManager.getAccount()} must be used to load an existing ThirdPartyAccount
 * - {@link ThirdPartyAccountManager.listAccountsAccounts()} must be used to load existing ThirdPartyAccounts
 *
 * Deletion:
 * - {@link ThirdPartyAccountManager.deleteAccount()} must be used to delete an existing ThirdPartyAccount
 *
 * Usage:
 * - Use `getFacebookPageId()` to retrieve the Facebook Page used for advertising by this account
 * - Use `disconnectFacebookPage()` to disconnect the Facebook Page used for advertising by this account
 * - Use `updateFacebookPage()` to update the Facebook Page used for advertising by this account
 */
declare class ThirdPartyAccount {
    #private;
    /**
     * The GraphAPI resource id that backs the ThirdPartyAccount, essentially
     * acting as a container. Currently the only backing type is Business
     */
    accountId: string;
    constructor(accountId: string, accountManager: ThirdPartyAccountManager, accessToken: string);
    /**
     * Return the Facebook Page associated with the account.
     * This is the Facebook Page that was shared with the account
     * during creation. If the page was updated, this will return
     * the updated page.
     */
    getFacebookPageId(): Promise<string>;
    /**
     * Disconnects the Facebook Page that was previously connected
     * to the third party account. Advertising will not be possible
     * until a new Facebook Page is connected to the account
     */
    disconnectFacebookPage(): Promise<void>;
    /**
     * Updates the Facebook Page associated with this account.
     *
     * This method should be used when a user of the tech provider's application
     * wants to change the Facebook Page that is linked to this account.
     * If the provided page is the existing page, it no-ops and returns the existing page id.
     * If the provided page is a different page, it disconnects the existing page and connects
     * the new page to the account.
     *
     * The method ensures that the new page is properly set up for advertising.
     * After updating the page, it refreshes the access token to ensure that the
     * account has the correct permissions for the new page.
     *
     * @param {string} pageId - The ID of the new Facebook Page to be associated with the account.
     * @returns {Promise<string>} A promise that resolves to the ID of the updated Facebook Page.
     *
     * Usage:
     * - Use `updateFacebookPage(pageId)` to change the Facebook Page linked to the account.
     * - Ensure that the page ID provided is valid and accessible by the tech provider's application
     *  - For example, having the user grant access to the Page using Facebook Login for Business.
     *  - If the page is a personal page, the user must grant the tech provider's application
     * pages_manage_metadata and pages_read_engagement permissions.
     *  - If the page is a business page, the user must grant the tech provider's application
     * business_management, ads_management, and pages_read_engagement permissions.
     *  - For more information, see the Facebook Login for Business documentation: https://developers.facebook.com/docs/facebook-login/facebook-login-for-business
     *
     * @example
     *
     * ```
     * const account = new ThirdPartyAccount(accountId, accountManager, accessToken);
     * account.updateFacebookPage('new-page-id')
     *      .then(updatedPageId => {
     *          console.log('Page successfully updated. Page ID:', updatedPageId);
     *      }).catch(error => {
     *          console.error(error, 'Error updating page');
     *  });
     * ```
     */
    updateFacebookPage(pageId: string): Promise<string>;
    /**
     * Refreshed the token that provides access to this account.
     * This token is hidden by default to prevent logging or accidentally
     * leaking it.
     */
    refreshToken(): Promise<void>;
    /**
     * Because the token can be periodically refreshed, this method
     * is used to prevent the old token from accidentally being used.
     * @returns the GraphAPI instance for this account
     */
    getApi(): Promise<FacebookAdsApi>;
}
export type { ThirdPartyAccount };
/**
 * Read only view of the third party account
 * Returned by listAccounts operations
 */
interface ThirdPartyAccountInfo {
    id: string;
    name: string;
}
/**
 * Page ID to use to back the ads
 * This is the identity of the advertiser
 */
type PageProps = {
    id: string;
};
/**
 * Defines the credit allocation to be
 * given to the third party account.
 * The tech provider must have a valid Credit Line.
 */
type CreditAllocationProps = {
    creditLineId: string;
    currencyAmount?: string;
    currency?: string;
};
/**
 * Properties needed to create the account
 * For now, a page is necessary in order to
 * create the account. It is used as the identity
 * of the advertiser and must be a real Facebook Page
 */
type CreateAccountProps = {
    name: string;
    page?: PageProps;
    creditAllocation?: CreditAllocationProps;
    userAccessToken: string;
};
type DeleteAccountProps = {
    accountId: string;
};
/**
 * ThirdPartyAccountManager is responsible for creating and managing ThirdPartyAccounts
 * that represent users of a tech provider's application.
 *
 * This class provides functionality to:
 * 1. Create new third-party accounts with associated assets (Ad Accounts, Pages, Pixels)
 * 2. Retrieve existing accounts by ID
 * 3. listAccounts all accounts associated with the tech provider's application
 * 4. Delete accounts when they are no longer needed
 * 5. Manage access tokens for account operations
 *
 * Each account created through this manager allows the tech provider to:
 * - Create assets owned by the tech provider on behalf of the user
 * - Access assets shared by the user from their Facebook account
 * - Allocate portions of the tech provider's credit line to the user
 * - Manage all assets with a single access token
 *
 * @see ThirdPartyAccount for account usage after creation
 */
export declare class ThirdPartyAccountManager {
    #private;
    constructor(appId: string, techProvBusinessId: string, systemAccountToken: string);
    /**
     * Creates a third party account under this tech provider's business. This account is used to represent
     * a third party user on the tech provider's platform.
     *
     * This account allows the tech provider's application to:
     *      1. Create Assets (Ad Accounts, Pages, Pixels, etc) that are owned by the tech provider.
     *      2. Access Assets (Pages, Pixels, etc) from a users facebook account or business account.
     *      3. Allocate a portion of the tech provider's Credit Line to the account.
     *      4. Use one access token to manage both created and shared assets.
     *
     * This account allows the tech provider to decide which assets are shared from an existing
     * facebook user, and which assets are created and owned by the tech provider. This allows the Tech Provider
     * to provide monetization experiences for the third party user using a higher level abstraction without worrying
     * about access token management.
     *
     * @param {CreateAccountProps} props - Configuration for the new account including name, page, pixel, ad account details, and user access token
     *
     * @returns a {@link Promise<ThirdPartyAccount>} that resolves to the newly created {@link ThirdPartyAccount} t
     *
     * @example
     *
     * ```
     * const manager = new ThirdPartyAccountManager(appId, partnerBusinessId, partnerAccessToken);
     * const account = await manager.createAccount({
     *     name: 'Client Account',
     *     page: { id: 'page-id' },
     *     creditAllocation: { creditLineId: 'credit-line-id', currencyAmount: '1000', currency: 'USD' }
     *     userAccessToken: 'user-access-token',
     * });
     * ```
     */
    createAccount(props: CreateAccountProps): Promise<ThirdPartyAccount>;
    /**
     * This method returns a {@link ThirdPartyAccount} instance for the given account ID. If an account token
     * is provided, it will be used directly. Otherwise, a new token will be generated, which requires
     * an additional API call.
     *
     * @param {string} accountId - The ID of the account to retrieve.
     * @param {string} [accountToken] - Optional. The access token for the account. Using this token is recommended to prevent an extra API call.
     * @returns {Promise<ThirdPartyAccount>} A promise that resolves to the `ThirdPartyAccount` instance.
     *
     * Usage:
     * - Use `getAccount(accountId, accountToken)` to retrieve a third-party account with the specified ID.
     * - If the account token is not provided, the method will generate a new token.
     *
     * Example:
     * ```
     * const manager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemAccountToken);
     * manager.getAccount('account-id', 'optional-account-token').then(
     *  account => {
     *      console.log('Retrieved account:', account);
     * }).catch(error => {
     *     console.error('Error retrieving account', error);
     * });
     * ```
     */
    getAccount(accountId: string, accountToken?: string): Promise<ThirdPartyAccount>;
    regenerateAccessToken(accountId: string): Promise<string>;
    /**
     * Deletes an account from a tech provider's application and business.
     *
     * WARNING: This operation is irreversible.
     *
     * This operation will pause all active campaigns and stop all active ads, then,
     * all assets created within the account (Ad Accounts, Catalogs, etc.) will also be deleted,
     * and all user owned asset connections will be severed. Finally, the ThirdPartyAccount and backingResource
     * will be deleted.
     *
     * In order to re-create an account for a user, the tech provider's app will have to have a user
     * re-authenticate to getAccount a user access token for reconnecting the assets to a new account, as the token
     * from the previous login will almost certianly be invalid. User access tokens have a short lifetime.
     *
     * @param {DeleteAccountProps} props - Object containing the childBusinessId to delete
     * @returns {Promise<boolean>} A promise that resolves to true if deletion was successful, false otherwise
     *
     * Usage:
     * - Use `deleteAccount()` when a client relationship ends or when an account needs to be removed
     * - This method is useful when a client no longer is spending an the tech provider needs to reclaim
     * some of its credit line (i.e. that portion of the credit line that was allocated to the account
     * will be reclaimed for use by other accounts)
     * - This operation is also useful when testing the integration because a tech provider is limited
     * to 2 accounts when an app is in development mode.
     * - This operation cannot be undone, and all data associated with the account will be lost
     *
     * @example
     *
     * ```
     * const manager = new ThirdPartyAccountManager(appId, partnerBusinessId, partnerAccessToken);
     * manager.deleteAccount({ childBusinessId: 'business-id-to-delete' }).then(
     *     success => {
     *         if (success) {
     *             console.log('Account successfully deleted');
     *         } else {
     *             console.log('Account does not exist');
     *         }
     *     }
     * ).catch(error => {
     *     console.error('Error when trying to delete account', error);
     * });
     * ```
     */
    deleteAccount(props: DeleteAccountProps): Promise<boolean>;
    /**
     * listAccountss third-party accounts associated with tech provider's app.
     *
     * By default, this method will return a maximum of 10 accounts.
     *
     * No matter what max is set, 10 results are returned in each API page.
     *
     * @returns {Promise<ThirdPartyAccountInfo[]>} A promise that resolves to an array of ThirdPartyAccount instances.
     *
     * Usage:
     * - Use `listAccounts()` to listAccounts all third-party accounts managed by the partner business.
     *
     * @example
     *
     * ```
     * const manager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemAccountToken);
     * manager.listAccounts().then(
     *  accounts => {
     *      accounts.forEach(account => {
     *          console.log(account);
     *      });
     * });
     * ```
     */
    listAccounts(max?: number): Promise<ThirdPartyAccountInfo[]>;
}
