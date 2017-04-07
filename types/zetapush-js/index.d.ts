// Type definitions for zetapush-js 3.1
// Project: https://github.com/zetapush/zetapush-js
// Definitions by: ghoullier <https://github.com/ghoullier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HandshakeFields {
  ext: any;
}

interface AbstractHandshakeOptions {
  authType: string;
  sandboxId: string;
  deploymentId: string;
}

interface CredentialsHandshakeOptions {
  authType: string;
  deploymentId: string;
  login: string;
  password: string;
}

interface TokenHandshakeOptions {
  authType: string;
  deploymentId: string;
  token: string;
}

interface AbstractHandshake {
  authType: string;
  authVersion: string;
  sandboxId: string;
  deploymentId: string;
  getHandshakeFields(client: Client): HandshakeFields;
}

interface CredentialsAuthData {
  login: string;
  password: string;
}

interface CredentialsHandshake extends AbstractHandshake {
  login: string;
  password: string;
  authData: CredentialsAuthData;
}

interface TokenAuthData {
  token: string;
}

interface TokenHandshake extends AbstractHandshake {
  token: string;
  authData: TokenAuthData;
}

type AuthenticationCallback = () => AbstractHandshake;

type AsyncMacroServicePublisher = (method: string, parameters: any, hardFail?: boolean, debug?: number) => Promise<any>;

type MacroServicePublisher = (method: string, parameters: any, hardFail?: boolean, debug?: number) => void;

type ServicePublisher = (method: string, parameters: any) => void;

interface Options {
  apiUrl?: string;
  sandboxId: string;
  forceHttps?: boolean;
  resource?: string;
  transports?: any[];
}

interface ClientOptions extends Options {
  authentication(): AbstractHandshake;
}

interface WeakClientOptions extends Options {
  deploymentId?: string;
}

interface Services {
  Macro: AsyncMacroService;
  Messaging: Service;
}

interface Service {
  DEFAULT_DEPLOYMENT_ID: string;
  $publish: ServicePublisher;
}

interface AsyncMacroService {
  DEFAULT_DEPLOYMENT_ID: string;
  $publish: AsyncMacroServicePublisher;
}

interface MacroService {
  DEFAULT_DEPLOYMENT_ID: string;
  $publish: MacroServicePublisher;
}

interface ServiceDeclaration {
  Type: Service;
  deploymentId?: string;
}

interface Token {
  token: string;
}

interface Credentials {
  login: string;
  password: string;
}

interface ClientHelper {
  authentication: AuthenticationCallback;
  servers: Promise<string[]>;
  getUniqRequestId(): string;
}

type ConnectionStatusHandler = number;

export class Authentication {
  static delegating({ token }: TokenAuthData): TokenHandshake;
  static simple({ login, password }: CredentialsAuthData): CredentialsHandshake;
  static weak({ token }: TokenAuthData): TokenHandshake;
}

export interface ConnectionStatusListener {
  onConnectionBroken(): void;
  onConnectionClosed(): void;
  onConnectionEstablished(): void;
  onConnectionToServerFail(failure: any): void;
  onConnectionWillClose(): void;
  onFailedHandshake(failure: any): void;
  onMessageLost(): void;
  onNoServerUrlAvailable(): void;
  onSuccessfulHandshake(authentication: any): void;
}

export class Client {
  helper: ClientHelper;
  constructor(options: ClientOptions);
  addConnectionStatusListener(listener: ConnectionStatusListener): ConnectionStatusHandler;
  connect(): void;
  createService(declaration: ServiceDeclaration): Service;
  createAsyncMacroService(declaration: ServiceDeclaration): AsyncMacroService;
  disconnect(): void;
  isConnected(): boolean;
  getSandboxId(): string;
  getResource(): string;
  getUserId(): string;
  removeConnectionStatusListener(listener: ConnectionStatusHandler): void;
  setAuthentication(authentication: AuthenticationCallback): void;
  setLogLevel(level: string): void;
  setResource(resource: string): void;
  unsubscribe(service: Service): void;
  //
  onConnectionBroken(handler: () => void): void;
  onConnectionClosed(handler: () => void): void;
  onConnectionEstablished(handler: () => void): void;
  onConnectionToServerFail(handler: (failure: any) => void): void;
  onConnectionWillClose(handler: () => void): void;
  onFailedHandshake(handler: (failure: any) => void): void;
  onMessageLost(handler: () => void): void;
  onNoServerUrlAvailable(handler: () => void): void;
  onSuccessfulHandshake(handler: (authentication: any) => void): void;
}

export class SmartClient extends Client {
  getCredentials(): any;
  getSession(): any;
  hasCredentials(): boolean;
  isStronglyAuthenticated(session?: any): boolean;
  isWeaklyAuthenticated(session?: any): boolean;
  setCredentials(credentials: any): void;
}
export class WeakClient extends Client {
  constructor(options: WeakClientOptions);
  getToken(): Token;
}

export const services: Services;

export const VERSION: string;

export as namespace ZetaPush;
