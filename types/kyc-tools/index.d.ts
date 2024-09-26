import { AxiosRequestConfig } from "axios";
import MockAdapter = require('axios-mock-adapter')

/*~ If this module has methods, declare them as functions like so.
 */
export function applyKeyMocks(mock: MockAdapter): void;
export function applyLoginMocks(mock: MockAdapter): void;
export function applyPlatformMocks(mock: MockAdapter): void;
export function applyRoleMocks(mock: MockAdapter): void;
export function applySourceMocks(mock: MockAdapter): void;
export function applyStatusMocks(mock: MockAdapter): void;
export function applyTypeMocks(mock: MockAdapter): void;

/*~ You can declare types that are available via importing the module */
export interface Component {
  componentId?: number;
  platformId?: number;
  name: string;
  details: ComponentDetails;
  platforms?: Platform[];
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface ComponentDetails {
  lang: { [key: string]: string; };
  services: ComponentServiceDetails;
  viewTypes: string[] | string;
  config?: AxiosRequestConfig;
}

export interface ComponentServiceDetails {
  [key: string]: { 
      [key: string]: { 
          [key: string]: boolean; 
      } 
  }
}

export interface ComponentSearchDetails {
  platformId?: number;
  name?: string;
  details?: ComponentDetails;
  config?: AxiosRequestConfig;
}

export interface Counterparty {
  counterpartyId?: number;
  sourceId?: number;
  statusId?: number;
  typeId?: number;
  registerDate?: number;
  details?: any;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface CounterpartyDetails {
  counterpartyId?: number;
  sourceId?: number;
  statusId?: number;
  typeId?: number;
  registerDate?: number;
  details?: any;
  config?: AxiosRequestConfig;
}

export interface Key {
  keyId?: number,
  typeId?: number,
  userId: number,
  lastNonce: number,
  publicKey: string,
  secretKey: string,
  details: any,
  updatedAt?: string,
  createdAt?: string,
  config?: AxiosRequestConfig
}

export interface KeyDetails {
  userId: number,
  lastNonce: number,
  publicKey: string,
  secretKey: string,
  details: any,
  type?: string,
  config?: AxiosRequestConfig
}

export interface KycLink {
  kycLinkId?: number;
  typeId?: number;
  kycStepId?: number;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface KycLinkDetails {
  kycLinkId?: number;
  typeId?: number;
  kycStepId?: number;
  config?: AxiosRequestConfig;
}

export interface KycStep {
  kycStepId?: number;
  name?: string;
  details?: any;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface KycStepDetails {
  kycStepId?: number;
  name?: string;
  details?: any;
  config?: AxiosRequestConfig;
}

export interface Platform {
  platformId?: number;
  name: string;
  details: PlatformDetails;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface PlatformDetails {
  lang: { [key: string]: string; };
  description?: string;
  platformUrl: string;
  config?: AxiosRequestConfig;
}

export interface PlatformSearchDetails {
  platformId?: number;
  name?: string;
  details?: any;
  config?: AxiosRequestConfig;
}

export interface Role {
  roleId?: number;
  name: string;
  permissions: RolePermissions;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface RolePermissions {
  type?: string;
  url?: string;
  components?: { [key: string]: { [key: string]: string } };
  services?: { [key: string]: { [key: string]: { [key: string]: boolean } } };
  schema?: Component[];
}

export interface RoleSearchDetails {
  roleId?: number;
  name: string;
  permissions: RolePermissions;
  config?: AxiosRequestConfig;
}

export interface Source {
  sourceId?: number,
  typeId?: number,
  name?: string,
  updatedAt?: string,
  createdAt?: string,
  config?: AxiosRequestConfig
}

export interface SourceDetails {
  name?: string,
  type?: string,
  config?: AxiosRequestConfig
}

export interface Status {
  statusId?: number;
  status?: string;
  details?: any;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface StatusDetails {
  statusId?: number;
  status?: string;
  details?: any;
  config?: AxiosRequestConfig;
}

export interface Type {
  typeId?: number,
  type?: string,
  details?: any,
  updatedAt?: string,
  createdAt?: string,
  config?: AxiosRequestConfig
}

export interface TypeDetails {
  type?: string,
  details?: any;
  config?: AxiosRequestConfig
}

export interface UserCredentials {
  userCredentialId?: number;
  userName: string;
  password: string;
  email: string;
  metadata: any;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface UserCredentialsSearchDetails {
  userCredentialId?: number;
  userName?: string;
  password?: string;
  email?: string;
  metadata?: any;
  credentialsId?: number;
  config?: AxiosRequestConfig;
}

export interface User {
  userId?: number;
  statusId: number;
  credentialsId: number;
  updatedAt?: string;
  createdAt?: string;
  config?: AxiosRequestConfig;
}

export interface UserSearchDetails {
  userId?: number;
  statusId?: number;
  credentialsId?: number;
  config?: AxiosRequestConfig;
}