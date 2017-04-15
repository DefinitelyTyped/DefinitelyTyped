import * as Keycloak from 'keycloak-js';
import {
  KeycloakInstance,
  KeycloakError,
  KeycloakFlow,
  KeycloakInitOptions,
  KeycloakLoginOptions,
  KeycloakProfile,
  KeycloakPromise,
  KeycloakResponseMode,
  KeycloakResponseType
} from 'keycloak-js';

import * as KeycloakAuthorization from 'keycloak-js/keycloak-authz';
import { KeycloakAuthorizationPromise } from 'keycloak-js/keycloak-authz';

const keycloak = Keycloak();
const keycloakAuthz = KeycloakAuthorization(keycloak);
