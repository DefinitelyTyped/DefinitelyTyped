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

let keycloak = Keycloak();
let keycloakAuthz = KeycloakAuthorization(keycloak);
