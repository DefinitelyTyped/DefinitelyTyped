import * as Keycloak from 'keycloak-js';

export as namespace KeycloakAuthorization;

export = KeycloakAuthorization;

/**
 * Creates a new Keycloak client instance.
 * @param config Path to a JSON config file or a plain config object.
 */
declare function KeycloakAuthorization(keycloak: Keycloak.KeycloakInstance): KeycloakAuthorization.KeycloakAuthorizationInstance;

declare namespace KeycloakAuthorization {
	interface KeycloakAuthorizationPromise {
		then(onGrant: (rpt: string) => void, onDeny: () => void, onError: () => void): void;
	}

	interface KeycloakAuthorizationInstance {
		rpt: any;
		config: { rpt_endpoint: string };

		init(): void;

		/**
		 * This method enables client applications to better integrate with resource servers protected by a Keycloak
		 * policy enforcer.
		 *
		 * In this case, the resource server will respond with a 401 status code and a WWW-Authenticate header holding the
		 * necessary information to ask a Keycloak server for authorization data using both UMA and Entitlement protocol,
		 * depending on how the policy enforcer at the resource server was configured.
		 */
		authorize(wwwAuthenticateHeader: string): KeycloakAuthorizationPromise;

		/**
		 * Obtains all entitlements from a Keycloak server based on a given resourceServerId.
		 */
		entitlement(resourceServerId: string, entitlementRequest: {}): KeycloakAuthorizationPromise;
	}
}
