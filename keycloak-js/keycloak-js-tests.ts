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

let keycloak = Keycloak();
