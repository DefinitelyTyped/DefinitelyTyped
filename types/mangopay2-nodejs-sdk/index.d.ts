// Type definitions for mangopay2-nodejs-sdk 1.9
// Project: https://github.com/MangoPay/mangopay2-nodejs-sdk
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import {
  ApiMethod,
  CountryISO,
  CurrencyISO,
  MakeKeysRequired,
  Omit,
  OmitType,
  PickPartialRequired,
  ValueOf,
  PickPartial,
  DeepPartial
} from "./types";

export = MangoPay;

declare class MangoPay {
  constructor(config: MangoPay.Config);
  config: MangoPay.Config;
  requestOptions: MangoPay.RequestOptions;
  Users: MangoPay.Users;
  BankAccounts: MangoPay.BankAccounts;
  BankingAliases: MangoPay.BankingAliases;
  DisputeDocuments: MangoPay.DisputeDocuments;
  Wallets: MangoPay.Wallets;
  KycDocuments: MangoPay.KycDocuments;
  UboDeclarations: MangoPay.UboDeclarations;
  Cards: MangoPay.Cards;
  CardRegistrations: MangoPay.CardRegistrations;
  CardPreAuthorizations: MangoPay.CardPreAuthorizations;
  PayIns: MangoPay.PayIns;
  Transfers: MangoPay.Transfers;
  PayOuts: MangoPay.PayOuts;
  Refunds: MangoPay.Refunds;
  Clients: MangoPay.Clients;
  Disputes: MangoPay.Disputes;
  Repudiations: MangoPay.Repudiations;
  Events: MangoPay.Events;
  Responses: MangoPay.Responses;
  Mandates: MangoPay.Mandates;
  Hooks: MangoPay.Hooks;
  Reports: MangoPay.Reports;

  models: typeof MangoPay.models;

  Log(...args: any[]): void;
  authorize(callback: (data: MangoPay.AuthorizationData) => void): void;
  authorize(): Promise<MangoPay.AuthorizationData>;
  buildRequestData(entity: any): any;
  canReadSubRequestData(entity: any, propertyName: any): boolean;
  isExpired(): boolean;
  method(
    method: ApiMethod,
    callback: (...args: any[]) => void,
    options: MangoPay.RequestOptions
  ): any;
}

declare namespace MangoPay {
  interface AuthorizationData {
    access_token: string;
    token_type: string;
    expires_in: number;
  }

  interface Headers {
    "Content-Type": string;
    "User-Agent": string;
    "Idempotency-Key": string;
    Authorization: string;
    [header: string]: string | undefined;
  }

  /** A UTC timestamp in seconds */
  type Timestamp = number;
  type ColumnAndDirection = "ASC" | "DESC";
  type AVSResult =
    | "NO_CHECK"
    | "NO_MATCH"
    | "ADDRESS_MATCH_ONLY"
    | "POSTAL_CODE_MATCH_ONLY"
    | "FULL_MATCH";
  type SecureMode = "DEFAULT" | "FORCE";
  type PreAuthorizationExecutionType = "DIRECT";
  type PaymentStatus = "WAITING" | "CANCELED" | "EXPIRED" | "VALIDATED";
  type PreAuthorizationStatus = "CREATED" | "SUCCEEDED" | "FAILED";
  interface BillingData {
    Address: models.Address | address.AddressData | string;
  }

  interface SecurityInfoData {
    AVSResult: AVSResult;
  }

  interface MoneyData {
    /**
     * The currency - should be ISO_4217 format
     */
    Currency: CurrencyISO;

    /**
     * An amount of money in the smallest sub-division of the currency, e.g. 12.60 EUR would be represented as 1260 whereas 12 JPY would be represented as just 12)
     */
    Amount: number;
  }

  interface WithResponse<T> {
    statusCode: number;
    body: T;
    headers: Headers;
  }

  interface NoArgMethodOverload<R> {
    (options: MethodOptionWithResponse): Promise<WithResponse<R>>;
    (options?: MethodOptionWithoutResponse): Promise<R>;
    (
      callback: (data: WithResponse<R>) => void,
      options?: MethodOptionWithResponse
    ): void;
    (callback: (data: R) => void, options?: MethodOptionWithoutResponse): void;
  }

  interface MethodOverload<T, R> {
    (data: T, options: MethodOptionWithResponse): Promise<WithResponse<R>>;
    (data: T, options?: MethodOptionWithoutResponse): Promise<R>;
    (
      data: T,
      callback: (data: WithResponse<R>) => void,
      options: MethodOptionWithResponse
    ): void;
    (
      data: T,
      callback: (data: R) => void,
      options?: MethodOptionWithoutResponse
    ): void;
  }

  interface TwoArgsMethodOverload<T, U, R> {
    (data: T, extra: U, options: MethodOptionWithResponse): Promise<
      WithResponse<R>
    >;
    (data: T, extra: U, options?: MethodOptionWithoutResponse): Promise<R>;
    (
      data: T,
      extra: U,
      callback: (data: WithResponse<R>) => void,
      options?: MethodOptionWithResponse
    ): void;
    (
      data: T,
      extra: U,
      callback: (data: R) => void,
      options?: MethodOptionWithoutResponse
    ): void;
  }

  interface ThreeArgsMethodOverload<T, U, V, R> {
    (data: T, extra: U, lastArg: V, options: MethodOptionWithResponse): Promise<
      WithResponse<R>
    >;
    (
      data: T,
      extra: U,
      lastArg: V,
      options?: MethodOptionWithoutResponse
    ): Promise<R>;
    (
      data: T,
      extra: U,
      lastArg: V,
      callback: (data: WithResponse<R>) => void,
      options?: MethodOptionWithResponse
    ): void;
    (
      data: T,
      extra: U,
      lastArg: V,
      callback: (data: R) => void,
      options?: MethodOptionWithoutResponse
    ): void;
  }

  interface Config {
    /**
     * API Client Id
     */
    clientId: string;

    /**
     * API Client Api Key
     */
    clientApiKey: string;

    /**
     * API Base URL.The fault base value points to sandbox.
     * Production is 'https://api.mangopay.com'
     *
     * @default "https://api.sandbox.mangopay.com"
     */
    baseUrl?: string;

    /**
     * Active debugging
     * @default false
     */
    debugMode?: boolean;

    /**
     * Log function to be used for debug
     * @default `console.log`
     */
    logClass?(...args: any[]): void;

    /**
     * Set the connection timeout limit(in milliseconds)
     * @default 30000
     */
    connectionTimeout?: number;

    /**
     * Set the response timeout limit(in milliseconds)
     * @default 80000
     */
    responseTimeout?: number;

    /**
     * API Version
     * @default 'v2.01'
     */
    apiVersion?: string;

    /**
     * Set a custom error handler
     * @default `console.error`
     */
    errorHandler?(options: any, err: any): void;
  }

  interface RequestOptions {
    requestConfig: {
      timeout: number;
    };
    responseConfig: {
      timeout: number;
    };

    /**
     * Path options are replacing the ${placeholders} from apiMethods
     */
    path: {
      clientId: string;
      apiVersion: string;
      readonly id: string;
    };
    headers: Partial<Headers>;
  }

  type WithToJson<T extends object> = T & { toJSON(): any };

  // Determines the shape of the response
  interface ReadResponseHeaders {
    resolveWithFullResponse: true;
  }

  interface PaginationOptions {
    /**
     * The page number of results you wish to return
     * @default 1
     */
    Page?: number;

    /**
     * The number of results to return per page: Max 100;
     * @default 10
     */
    Per_Page?: number;
  }

  interface FilterOptions extends Record<string, any> {
    /**
     * The column to sort against and direction - only CreationDate (or Date for the events) is available and ASC or DESC for the direction
     */
    Sort?: ColumnAndDirection;

    /**
     * To return only resources that have CreationDate BEFORE this date
     */
    BeforeDate?: Timestamp;

    /**
     * To return only resources that have CreationDate AFTER this date
     */
    AfterDate?: Timestamp;
  }

  interface MethodOptions extends DeepPartial<RequestOptions> {
    data?: WithToJson<object> | string;
    parameters?: FilterOptions & PaginationOptions;
  }

  interface MethodOptionWithResponse extends MethodOptions {
    resolveWithFullResponse: true;
  }

  interface MethodOptionWithoutResponse extends MethodOptions {
    resolveWithFullResponse?: false;
  }

  interface DependsObject {
    dependsPropertyName: string;
    propertyName: string;
    propertyValueMapping: Record<string, models.Model>;
  }

  interface ModelMethods<T extends {}> {
    initialize(): void;

    /**
     * Returns object property value
     * @param attribute
     */
    getData<K extends keyof T>(attribute: K): T[K];

    /**
     * @param attribute   - attribute's value to be set or hash of properties with values
     * @param value       - value to be set
     */
    setData<K extends keyof T>(attribute: K, value: T[K]): this;
    setData(attribute: Partial<T>): this;

    getReadOnlyProperties(): Array<keyof T>;
    getDependsObjects(): DependsObject[];
    parse(): void;
  }

  namespace models {
    const PayInExecutionType: IPayInExecutionType;
    const PayInPaymentType: IPayInPaymentType;
    const MandateStatus: IMandateStatus;
    const LegalPersonType: ILegalPersonType;
    const PersonType: IPersonType;
    const BankAccountType: IBankAccountType;
    const DeclaredUboStatus: IDeclaredUboStatus;
    const KycDocumentStatus: IKycDocumentStatus;
    const KycDocumentType: IKycDocumentType;
    const PayOutPaymentType: IPayOutPaymentType;
    const PlatformType: IPlatformType;
    const UboDeclarationRefusedReasonType: IUboDeclarationRefusedReasonType;
    const UboDeclarationStatus: IUboDeclarationStatus;
    const UboRefusedReasonType: IUboRefusedReasonType;
    const UserNaturalCapacity: IUserNaturalCapacity;
    class DeclaredUbo extends Model<uboDeclaration.UboDeclarationData> {
      constructor(data: Partial<uboDeclaration.UboDeclarationData>);
    }

    class Model<T = any> implements ModelMethods<T> {
      initialize(): void;
      getData<K extends keyof T>(attribute: K): T[K];
      setData<K extends keyof T>(attribute: K, value: T[K]): this;
      setData(attribute: Partial<T>): this;
      setData(attribute: any, value?: any): this;
      getReadOnlyProperties(): Array<keyof T>;
      getDependsObjects(): DependsObject[];
      parse(): void;
      constructor(data: T);
    }

    class EntityBase<T = any> extends Model<T> {
      initialize(): void;

      /**
       * Returns object property value
       */
      getData<K extends keyof T>(attribute: K): T[K];

      /**
       * @param attribute   - attribute's value to be set or hash of properties with values
       * @param value       - value to be set
       */
      setData<K extends keyof T>(attribute: K, value: T[K]): this;
      setData(attribute: Partial<T>): this;

      getReadOnlyProperties(): Array<keyof T>;
      getDependsObjects(): DependsObject[];
      parse(): void;
      toJSON(): any;
    }

    class Money extends EntityBase<MoneyData> {
      constructor(data: MoneyData);
    }

    class Billing extends EntityBase<BillingData> {
      constructor(data: BillingData);
    }

    class Address extends EntityBase<address.AddressData> {
      constructor(data: Partial<address.AddressData>);
    }

    interface Address extends address.AddressData {}

    class BankingAlias extends EntityBase<bankingAlias.IBANBankingAliasData> {
      constructor(data: Partial<bankingAlias.BankingAliasData>);
    }

    class BankingAliasIBAN extends BankingAlias {}

    interface BankingAlias extends bankingAlias.IBANBankingAliasData {}

    class BankAccount extends EntityBase<bankAccount.BaseData> {
      constructor(data: bankAccount.CreationDetails);
    }
    interface BankAccount extends bankAccount.DataIntersection {}

    class BankAccountDetails {
      constructor(data: any);
    }

    class BankAccountDetailsCA extends BankAccountDetails {
      constructor(data: any);
    }

    interface BankAccountDetailsCA extends bankAccount.CADetails {}

    class BankAccountDetailsOther extends BankAccountDetails {
      constructor(data: any);
    }

    interface BankAccountDetailsOther extends bankAccount.OtherDetails {}

    class BankAccountDetailsGB extends BankAccountDetails {
      constructor(data: any);
    }

    interface BankAccountDetailsGB extends bankAccount.GBDetails {}

    class BankAccountDetailsIBAN extends BankAccountDetails {
      constructor(data: any);
    }

    interface BankAccountDetailsIBAN extends bankAccount.IBANDetails {}

    class BankAccountDetailsUS extends BankAccountDetails {
      constructor(data: any);
    }

    interface BankAccountDetailsUS extends bankAccount.USDetails {}

    class Transaction extends EntityBase<transaction.TransactionData> {
      constructor(data: transaction.TransactionData);
    }

    interface Transaction extends transaction.TransactionData {}

    class ClientWallet extends EntityBase<wallet.WalletData> {}

    class Wallet extends EntityBase<wallet.WalletData> {
      constructor(data: wallet.CreateWallet | wallet.UpdateWallet);
    }

    class DocumentPageConsult extends Model {
      constructor(data: Partial<disputeDocument.DocumentPageConsult>);
    }

    interface DocumentPageConsult extends disputeDocument.DocumentPageConsult {}

    class Document extends EntityBase {
      constructor(data: any);
    }

    class DisputeDocument extends Document {}

    interface DisputeDocument extends disputeDocument.DisputeDocumentData {}

    class DisputeDocumentPage extends EntityBase {
      constructor(data: disputeDocument.CreateDisputeDocumentPage);
    }

    interface DisputeDocumentPage
      extends disputeDocument.CreateDisputeDocumentPage {}

    class KycDocument extends EntityBase<kycDocument.KycDocumentData> {
      constructor(data: Partial<kycDocument.KycDocumentData>);
    }

    interface KycDocument extends kycDocument.KycDocumentData {}

    class KycPage {
      constructor(data: kycDocument.CreateKycPage);
    }

    interface KycPage extends kycDocument.CreateKycPage {}

    class EMoney {
      constructor(data: eMoney.EMoneyData);
    }

    interface EMoney extends eMoney.EMoneyData {}

    class UboDeclaration extends EntityBase<uboDeclaration.UboDeclarationData> {
      constructor(
        data:
          | uboDeclaration.CreateUboDeclaration
          | uboDeclaration.UpdateUboDeclaration
      );
    }

    interface UboDeclaration extends uboDeclaration.UboDeclarationData {}

    class CardRegistration extends EntityBase<
      cardRegistration.CardRegistrationData
    > {
      constructor(
        data:
          | cardRegistration.CreateCardRegistration
          | cardRegistration.UpdateCardRegistration
      );
    }

    interface CardRegistration extends cardRegistration.CardRegistrationData {}

    class Card extends EntityBase<card.CardData> {
      constructor(data: card.CardData);
    }

    interface Card extends card.CardData {}

    class CardPreAuthorization {
      constructor(
        data:
          | cardPreAuthorization.CardPreAuthorizationData
          | cardPreAuthorization.UpdateCardPreAuthorization
      );
    }

    interface CardPreAuthorization
      extends cardPreAuthorization.CardPreAuthorizationData {}

    class SecurityInfo extends EntityBase<
      SecurityInfo & entityBase.EntityBaseData
    > {
      constructor(data: SecurityInfo);
    }

    class UserLegal extends EntityBase<user.UserLegalData> {
      PersonType: "LEGAL";
      constructor(
        data: MakeKeysRequired<
          Partial<user.UserLegalData>,
          user.RequiredUserLegalData
        >
      );

      /**
       * Sets the person type for the model
       * @param personType
       */
      setPersonType(type: user.PersonType): void;
    }

    interface UserLegal extends user.UserLegalData {}

    class UserNatural extends EntityBase<user.UserNaturalData> {
      PersonType: "NATURAL";
      constructor(
        data: MakeKeysRequired<
          Partial<user.UserNaturalData>,
          user.RequiredUserNaturalData
        >
      );

      /**
       * Sets the person type for the model
       * @param personType
       */
      setPersonType(type: user.PersonType): void;
    }

    interface UserNatural extends user.UserNaturalData {}

    class User extends EntityBase<user.UserData> {
      constructor(data: user.UserData);

      /**
       * Sets the person type for the model
       * @param personType
       */
      setPersonType(type: user.PersonType): void;
    }

    interface User extends user.UserData {}

    class PayIn extends EntityBase<payIn.BasePayInData> {
      constructor(data: any);
    }

    interface PayIn extends payIn.BasePayInData {}

    class PayInPaymentDetails extends EntityBase {
      constructor(data: any);
    }

    class PayInExecutionDetails extends EntityBase {
      constructor(data: any);
    }

    class PayInExecutionDetailsDirect extends PayInExecutionDetails {
      constructor(data: any);
    }

    class PayInExecutionDetailsWeb extends PayInExecutionDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsBankWire extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsBankingAlias extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsCard extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsCardDirect extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsCardWeb extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsDirectDebitDirect extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsDirectDebitWeb extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsPayPal extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInPaymentDetailsPreAuthorized extends PayInPaymentDetails {
      constructor(data: any);
    }

    class PayInTemplateURLOptions extends EntityBase {
      constructor(data: any);
    }

    class Refund extends EntityBase<refund.RefundData> {
      constructor(data: refund.CreatePayInRefund | refund.CreateTransferRefund);
    }

    class RefundReasonDetails extends EntityBase {
      constructor(data: any);
    }

    class Repudiation extends EntityBase<repudiation.RepudiationData> {
      constructor(data: Partial<repudiation.RepudiationData>);
    }

    interface Repudiation extends repudiation.RepudiationData {}

    class Client extends EntityBase<client.ClientData> {
      constructor(data?: Partial<client.ClientData>);
    }

    interface Client extends client.ClientData {}

    class PlatformCategorization extends EntityBase<
      client.PlatformCategorization
    > {
      constructor(data: client.PlatformCategorization);
    }

    class Dispute extends EntityBase<dispute.DisputeData> {
      constructor(data: Partial<dispute.DisputeData>);
    }

    interface Dispute extends dispute.DisputeData {}

    class DisputeReason extends Model {
      constructor(data: any);
    }

    class SettlementTransfer extends EntityBase<
      settlementTransfer.SettlementTransferData
    > {
      constructor(data: Partial<settlementTransfer.SettlementTransferData>);
    }

    interface SettlementTransfer
      extends settlementTransfer.SettlementTransferData {}

    class Transfer extends EntityBase<transfer.TransferData> {
      constructor(data: Partial<transfer.CreateTransfer>);
    }

    interface Transfer extends transfer.TransferData {}

    class PayOut extends EntityBase<PayOut.PayOutData> {
      constructor(data: Partial<PayOut.CreatePayOut>);
    }
    // interface PayOut extends PayOut.PayoutData {}

    class PayOutPaymentDetails extends EntityBase {
      constructor(data?: any);
    }

    class PayOutPaymentDetailsBankWire extends PayOutPaymentDetails {
      constructor(data?: any);
    }

    class Mandate extends EntityBase<mandate.MandateData> {
      constructor(data?: Partial<mandate.MandateData>);
    }

    interface Mandate extends mandate.MandateData {}

    class Hook extends EntityBase<hook.HookData> {
      constructor(data?: Partial<hook.HookData>);
    }

    interface Hook extends hook.HookData {}

    class Report extends EntityBase<report.ReportData> {
      constructor(data?: Partial<report.ReportData>);
    }

    interface Report extends report.ReportData {}

    class ReportFilter extends Model<report.Filters> {
      constructor(data?: Partial<report.Filters>);
    }

    interface Report extends report.Filters {}
  }

  interface IPayInExecutionType {
    Direct: "DIRECT";
    Web: "WEB";
  }

  interface IPayInPaymentType {
    BankWire: "BANK_WIRE";
    Card: "CARD";
    DirectDebit: "DIRECT_DEBIT";
    Preauthorized: "PREAUTHORIZED";
    PayPal: "PAYPAL";
  }

  interface IMandateStatus {
    Created: "CREATED";
    Submitted: "SUBMITTED";
    Active: "ACTIVE";
    Failed: "FAILED";
  }

  interface ILegalPersonType {
    NotSpecified: "NotSpecified";
    Business: "BUSINESS";
    Organization: "ORGANIZATION";
    Soletrader: "SOLETRADER";
  }

  interface IPersonType {
    NotSpecified: "NotSpecified";
    Natural: "NATURAL";
    Legal: "LEGAL";
  }

  interface IBankAccountType {
    NotSpecified: "NotSpecified";
    IBAN: "IBAN";
    GB: "GB";
    US: "US";
    CA: "CA";
    OTHER: "OTHER";
  }

  interface IDeclaredUboStatus {
    Created: "CREATED";
    Validated: "VALIDATED";
    Refused: "REFUSED";
  }

  interface IKycDocumentStatus {
    Created: "CREATED";
    ValidationAsked: "VALIDATION_ASKED";
    Validated: "VALIDATED";
    Refused: "REFUSED";
  }

  interface IKycDocumentType {
    IdentityProof: "IDENTITY_PROOF";
    RegistrationProof: "REGISTRATION_PROOF";
    ArticlesOfAssociation: "ARTICLES_OF_ASSOCIATION";
    ShareholderDeclaration: "SHAREHOLDER_DECLARATION";
    AddressProof: "ADDRESS_PROOF";
  }

  interface IPayOutPaymentType {
    BankWire: "BANK_WIRE";
  }

  interface IPlatformType {
    NotSpecified: "NotSpecified";
    MARKETPLACE: "MARKETPLACE";
    P2P_PAYMENT: "P2P_PAYMENT";
    CROWDFUNDING_DONATION: "CROWDFUNDING_DONATION";
    CROWDFUNDING_REWARD: "CROWDFUNDING_REWARD";
    CROWDFUNDING_EQUITY: "CROWDFUNDING_EQUITY";
    CROWDFUNDING_LOAN: "CROWDFUNDING_LOAN";
    OTHER: "OTHER";
  }

  interface IUboDeclarationRefusedReasonType {
    /**
     * When at least one natural user is missing on the declaration
     */
    MissingUbo: "MISSING_UBO";

    /**
     * When at least one natural user should not be declared as UBO
     */
    InvalidDeclaredUbo: "INVALID_DECLARED_UBO";

    /**
     * When at least one natural user declared as UBO has been created
     * with wrong details (i.e. date of birth, country of residence)
     */
    InvalidUboDetails: "INVALID_UBO_DETAILS";
  }

  interface IUboDeclarationStatus {
    /**
     * When the UBO declaration was created
     */
    Created: "CREATED";

    /**
     * When validation has been requested for the UBO declaration
     */
    ValidationAsked: "VALIDATION_ASKED";

    /**
     * When the UBO declaration was validated
     */
    Validated: "VALIDATED";

    /**
     * When the UBO declaration was refused
     */
    Refused: "REFUSED";
  }

  interface IUboRefusedReasonType {
    /**
     * When user should not be declared as UBO
     */
    InvalidDeclaredUbo: "INVALID_DECLARED_UBO";

    /**
     * When user declared as UBO was created with wrong
     * details (i.e. date of birth, country of residence)
     */
    InvalidUboDetails: "INVALID_UBO_DETAILS";
  }

  interface IUserNaturalCapacity {
    /**
     * Real customer
     */
    Normal: "NORMAL";

    /**
     * User used only for declaration purpose
     */
    Declarative: "DECLARATIVE";
  }

  namespace entityBase {
    interface EntityBaseData {
      Id: string;
      Tag: string;
      CreationDate: number;
    }
  }

  namespace address {
    interface AddressData {
      AddressLine1: string;
      AddressLine2: string;
      City: string;
      Region: string;
      PostalCode: string;
      Country: string;
    }
    type AddressType = string | AddressData | models.Address;
  }

  namespace bankingAlias {
    type BankingAliasType = "IBAN";
    interface BankingAliasData extends entityBase.EntityBaseData {
      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId: string;

      /**
       * The ID of a wallet
       */
      WalletId: string;

      /**
       * The Country of the Address
       */
      Country: CountryISO;

      /**
       * The type of banking alias (note that only IBAN is available at present)
       */
      Type: BankingAliasType;

      /**
       * The owner of the wallet/banking alias
       */
      OwnerName: string;

      /**
       * Whether the banking alias is active or not
       */
      Active: boolean;
    }

    interface IBANBankingAliasData extends BankingAliasData {
      /**
       * The type of banking alias (note that only IBAN is available at present)
       */
      Type: "IBAN";

      /**
       * The IBAN of the banking alias
       */
      IBAN: string;

      /**
       * The BIC of the banking alias
       */
      BIC: string;
    }

    interface CreateIBANBankingAlias
      extends PickPartialRequired<
        IBANBankingAliasData,
        "Tag" | "CreditedUserId",
        "OwnerName" | "Country"
      > {}
  }

  namespace bankAccount {
    type BankAccountType = "IBAN" | "GB" | "US" | "CA" | "OTHER";
    type DepositAccountType = "CHECKING" | "SAVINGS";

    interface BaseData extends entityBase.EntityBaseData {
      /**
       * The object owner's UserId
       */
      UserId: string;

      /**
       * The type of bank account
       */
      Type: BankAccountType;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: address.AddressType;

      /**
       * @deprecated
       */
      Details?: models.BankAccountDetails;

      /**
       * Whether the bank account is active or not
       */
      Active: boolean;
    }

    interface IBANDetails {
      Type: "IBAN";

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: address.AddressType;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The IBAN of the bank account
       */
      IBAN: string;

      /**
       * The BIC of the bank account
       */
      BIC?: string;
    }

    type IBANData = BaseData & IBANDetails;

    interface USDetails {
      Type: "US";

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: address.AddressType;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The account number of the bank account. US account numbers must be digits only.
       */
      AccountNumber: string;

      /**
       * The ABA of the bank account. Must be numbers only, and 9 digits long
       */
      ABA: string;

      /**
       * The type of account
       */
      DepositAccountType?: DepositAccountType;
    }

    type USData = BaseData & USDetails;

    interface CADetails {
      Type: "CA";

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: address.AddressType;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The branch code of the bank where the bank account. Must be numbers only, and 5 digits long
       */
      BranchCode: string;

      /**
       * The institution number of the bank account. Must be numbers only, and 3 or 4 digits long
       */
      InstitutionNumber: string;

      /**
       * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits.
       */
      AccountNumber: string;

      /**
       * The name of the bank where the account is held. Must be letters or numbers only and maximum 50 characters long.
       */
      BankName: string;
    }

    type CAData = BaseData & CADetails;

    interface GBDetails {
      Type: "GB";

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: address.AddressType;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The sort code of the bank account. Must be numbers only, and 6 digits long
       */
      SortCode: string;

      /**
       * The account number of the bank account. Must be numbers only. GB account numbers must be 8 digits long.
       */
      AccountNumber: string;
    }

    type GBData = BaseData & GBDetails;

    interface OtherDetails {
      Type: "OTHER";

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: address.AddressType;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The Country of the Address
       */
      Country: string;

      /**
       * The BIC of the bank account
       */
      BIC: string;

      /**
       * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits.
       */
      AccountNumber: string;
    }

    type OtherData = BaseData & OtherDetails;

    type Data = OtherData | CAData | GBData | IBANData | USData;
    type DataIntersection = OtherData & CAData & GBData & IBANData & USData & { Type: never };
    type CreationDetails =
      | OtherDetails
      | CADetails
      | GBDetails
      | IBANDetails
      | USDetails;
  }

  namespace transaction {
    type TransactionNature =
      | "REGULAR"
      | "REPUDIATION"
      | "REFUND"
      | "SETTLEMENT";
    type TransactionType = "PAYIN" | "TRANSFER" | "PAYOUT";
    type TransactionStatus = "CREATED" | "SUCCEEDED" | "FAILED";

    interface TransactionData extends entityBase.EntityBaseData {
      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
       */
      CreditedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * The ID of the wallet that was debited
       */
      DebitedWalletId: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId: string;

      /**
       * The nature of the transaction
       */
      Nature: TransactionNature;

      /**
       * The status of the transaction
       */
      Status: TransactionStatus;

      /**
       * When the transaction happened
       */
      ExecutionDate: Timestamp;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * The type of the transaction
       */
      Type: TransactionType;
    }
  }

  namespace wallet {
    type ClientFundsType = "FEES" | "CREDIT";
    type FundsType = "DEFAULT" | ClientFundsType;

    interface WalletData extends entityBase.EntityBaseData {
      /**
       * An array of userIDs of who own's the wallet. For now, you only can set up a unique owner.
       */
      Owners: [string];

      /**
       * The current balance of the wallet
       */
      Balance: MoneyData;

      /**
       * The type of funds in the wallet
       */
      FundsType: FundsType;

      /**
       * A desciption of the wallet
       */
      Description: string;

      /**
       * The currency - should be ISO_4217 format
       */
      Currency: CurrencyISO;
    }

    interface ClientWalletData
      extends Omit<WalletData, "Owners" | "Description"> {
      FundsType: ClientFundsType;
    }

    type CreateWallet = UpdateWallet &
      Pick<WalletData, "Owners" | "Currency" | "Description">;
    type UpdateWallet = PickPartial<WalletData, "Tag" | "Description">;
  }

  namespace disputeDocument {
    type DisputeDocumentType =
      | "DELIVERY_PROOF"
      | "INVOICE"
      | "REFUND_PROOF"
      | "USER_CORRESPONDANCE"
      | "USER_ACCEPTANCE_PROOF"
      | "PRODUCT_REPLACEMENT_PROOF"
      | "OTHER";

    type DocumentStatus =
      | "CREATED"
      | "VALIDATION_ASKED"
      | "VALIDATED"
      | "REFUSED";

    type RefusedReasonType =
      | "DOCUMENT_UNREADABLE"
      | "DOCUMENT_NOT_ACCEPTED"
      | "DOCUMENT_HAS_EXPIRED"
      | "DOCUMENT_INCOMPLETE"
      | "DOCUMENT_MISSING"
      | "SPECIFIC_CASE"
      | "DOCUMENT_FALSIFIED"
      | "OTHER";

    interface DisputeDocumentData extends entityBase.EntityBaseData {
      /**
       * Gives the type of the KYC document
       */
      Type: DisputeDocumentType;

      /**
       * The object owner's UserId
       */
      UserId: string;

      /**
       * The Id of a Dispute
       */
      DisputeId: string;

      /**
       * The status of this KYC/Dispute document
       */
      Status: DocumentStatus;

      /**
       * The message accompanying a refusal
       */
      RefusedReasonMessage: string;

      /**
       * The type of reason for refusal
       */
      RefusedReasonType: RefusedReasonType;

      /**
       * The date when the document was processed by MANGOPAY
       */
      ProcessedDate: Timestamp;
    }

    interface CreateDisputeDocument {
      /**
       * Gives the type of the KYC document
       */
      Type: DisputeDocumentType;
      Tag?: string;
    }

    interface SubmitDisputeDocument {
      /**
       * The status of this KYC/Dispute document
       */
      Status: "VALIDATION_ASKED";
      Tag?: string;
    }

    /**
     * - Documents have to be in "CREATED" Status
     * - You can create as many pages as needed
     *
     * Remember to change Status to "VALIDATION_ASKED" to submit KYC documents
     * The maximum size per page is about 7Mb (or 10Mb when base64encoded). The following formats are accepted for the documents : .pdf, .jpeg, .jpg, .gif and .png. The minimum size is 1Kb.
     */
    interface CreateDisputeDocumentPage {
      /**
       * The base64 encoded file which needs to be uploaded
       *
       * You need to fill in only the binary code. Do not send the first part that some converters add into the binary code which is
       * `<img src=" data:image/png;base64..." />`
       *
       * e.g.
       * ```json
       * {
       *   "File": "/9j/4AAQSkZJRgABAQEBLAEsAAD/.../wgARCAAyADIDAREAAhEBAxEB/8QAGwAAAgMBAQEA"
       * }
       * ```
       */
      File: string;
    }

    interface DocumentPageConsult {
      /**
       * URL where this document page can be viewed.
       */
      Url: string;

      /**
       * Time in millis when the page consult will expire.
       */
      ExpirationDate: Timestamp;
    }
  }

  namespace kycDocument {
    type KycDocumentType =
      | "IDENTITY_PROOF"
      | "REGISTRATION_PROOF"
      | "ARTICLES_OF_ASSOCIATION"
      | "SHAREHOLDER_DECLARATION"
      | "ADDRESS_PROOF";
    type DocumentStatus =
      | "CREATED"
      | "VALIDATION_ASKED"
      | "VALIDATED"
      | "REFUSED";

    type KYCDocumentRefusedReasonType =
      | "DOCUMENT_UNREADABLE"
      | "DOCUMENT_NOT_ACCEPTED"
      | "DOCUMENT_HAS_EXPIRED"
      | "DOCUMENT_INCOMPLETE"
      | "DOCUMENT_MISSING"
      | "DOCUMENT_DO_NOT_MATCH_USER_DATA"
      | "DOCUMENT_DO_NOT_MATCH_ACCOUNT_DATA"
      | "SPECIFIC_CASE"
      | "DOCUMENT_FALSIFIED"
      | "UNDERAGE_PERSON"
      | "SPECIFIC_CASE";

    interface KycDocumentData extends entityBase.EntityBaseData {
      /**
       * Gives the type of the KYC document
       */
      Type: KycDocumentType;

      /**
       * The object owner's UserId
       */
      UserId: string;

      /**
       * The status of this KYC/Dispute document
       */
      Status: DocumentStatus;

      /**
       * The message accompanying a refusal
       */
      RefusedReasonMessage: string;

      /**
       * The type of reason for refusal
       */
      RefusedReasonType: KYCDocumentRefusedReasonType;

      /**
       * The date when the document was processed by MANGOPAY
       */
      ProcessedDate: Timestamp;
    }

    interface CreateKycDocument {
      /**
       * Gives the type of the KYC document
       */
      Type: KycDocumentType;
      Tag?: string;
    }

    interface CreateKycDocument {
      /**
       * Gives the type of the KYC document
       */
      Type: KycDocumentType;
      Tag?: string;
    }

    interface SubmitKycDocument {
      /**
       * The status of this KYC/Dispute document
       */
      Status: "VALIDATION_ASKED";
      Id: string;
      Tag?: string;
    }

    /**
     * - Documents have to be in "CREATED" Status
     * - You can create as many pages as needed
     *
     * Remember to change Status to "VALIDATION_ASKED" to submit KYC documents
     * The maximum size per page is about 7Mb (or 10Mb when base64encoded). The following formats are accepted for the documents : .pdf, .jpeg, .jpg, .gif and .png. The minimum size is 1Kb.
     */
    interface CreateKycPage {
      /**
       * The base64 encoded file which needs to be uploaded
       *
       * You need to fill in only the binary code. Do not send the first part that some converters add into the binary code which is
       * `<img src=" data:image/png;base64..." />`
       *
       * e.g.
       * ```json
       * {
       *   "File": "/9j/4AAQSkZJRgABAQEBLAEsAAD/.../wgARCAAyADIDAREAAhEBAxEB/8QAGwAAAgMBAQEA"
       * }
       * ```
       */
      File: string;
    }
  }

  namespace eMoney {
    interface EMoneyData extends entityBase.EntityBaseData {
      /**
       * The object owner's UserId
       */
      UserId: string;

      /**
       * The amount of money that has been credited to this user
       */
      CreditedEMoney: MoneyData;

      /**
       * The amount of money that has been debited from this user
       */
      DebitedEMoney: MoneyData;
    }
  }

  namespace uboDeclaration {
    interface UboDeclarationData extends entityBase.EntityBaseData {
      /**
       * The object owner's UserId
       */
      UserId: string;

      /**
       * Status of a UBO Declaration
       */
      Status: kycDocument.DocumentStatus;

      /**
       * Reason types for a UBO Declaration
       */
      RefusedReasonTypes: string[];

      /**
       * Refused Reason Message for a UBO Declaration
       */
      RefusedReasonMessage: string;

      /**
       * An array of UserIDs declared as Ultimate Beneficial Owners of a BUSINESS Legal User.
       */
      DeclaredUBOs: string[];
    }

    interface CreateUboDeclaration {
      DeclaredUBOs?: string[];
    }

    interface UpdateUboDeclaration {
      Id: string;
      Tag?: string;
      Status?: "VALIDATION_ASKED";

      /**
       * An array of UserIDs declared as Ultimate Beneficial Owners of a BUSINESS Legal User.
       */
      DeclaredUBOs?: string[];
    }
  }

  namespace cardRegistration {
    interface CardRegistrationData extends entityBase.EntityBaseData {
      /**
       * The object owner's UserId
       */
      UserId: string;
      /**
       * The currency - should be ISO_4217 format
       */
      Currency: CurrencyISO;

      /**
       * A special key to use when registering a card
       */
      AccessKey: string;

      /**
       * A specific value to pass to the CardRegistrationURL
       */
      PreregistrationData: string;

      /**
       * The URL to submit the card details form to
       */
      CardRegistrationURL: string;

      /**
       * Having registered a card, this confirmation hash needs to be updated to the card item
       */
      RegistrationData: string;

      /**
       * The type of card
       */
      CardType: card.CardType;

      /**
       * The ID of a card
       */
      CardId: string;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * Status of the card registration
       */
      Status: card.CardStatus;
    }

    interface CreateCardRegistration
      extends PickPartialRequired<
        CardRegistrationData,
        "CardType" | "Tag",
        "UserId" | "Currency"
      > {}
    type UpdateCardRegistration = PickPartial<
      CardRegistrationData,
      "Tag" | "RegistrationData"
    >;
  }

  namespace card {
    type CardType =
      | "CB_VISA_MASTERCARD"
      | "DINERS"
      | "MASTERPASS"
      | "MAESTRO"
      | "P24"
      | "IDEAL"
      | "BCMC"
      | "PAYLIB";
    type CardStatus = "CREATED" | "VALIDATED" | "ERROR";
    type CardValidity = "UNKNOWN" | "VALID" | "INVALID";

    interface CardData extends entityBase.EntityBaseData {
      /**
       * The expiry date of the card - must be in format MMYY
       */
      ExpirationDate: string;

      /**
       * A partially obfuscated version of the credit card number
       */
      Alias: string;

      /**
       * The provider of the card
       */
      CardProvider: string;

      /**
       * The type of card
       */
      CardType: CardType;

      /**
       * The Country of the Address
       */
      Country: string;

      /**
       * The card product type - more info
       */
      Product: string;

      /**
       * The bank code
       */
      BankCode: string;

      /**
       * Whether the card is active or not
       */
      Active: boolean;

      /**
       * The currency - should be ISO_4217 format
       */
      Currency: CurrencyISO;

      /**
       * Whether the card is valid or not. Once they process (or attempt to process) a payment with the card we are able to indicate if it is "valid" or "invalid".
       * If they didn’t process a payment yet the "Validity" stay at "unknown".
       */
      Validity: CardValidity;

      /**
       * A unique representation of a 16-digits card number
       */
      Fingerprint: string;
    }

    interface UpdateCard {
      Id: string;
      Active?: false;
    }
  }

  namespace cardPreAuthorization {
    interface CardPreAuthorizationData extends entityBase.EntityBaseData {
      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Status of the PreAuthorization
       */
      Status: PreAuthorizationStatus;

      /**
       * The status of the payment after the PreAuthorization. You can pass the PaymentStatus from "WAITING" to "CANCELED" should you need/want to
       */
      PaymentStatus: PaymentStatus;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * How the PreAuthorization has been executed
       */
      ExecutionType: PreAuthorizationExecutionType;

      /**
       * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually.
       * The field lets you activate it automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ),
       * "FORCE" (if you wish to specifically force the secured mode).
       */
      SecureMode: SecureMode;

      /**
       * The ID of a card
       */
      CardId: string;

      /**
       * The value is 'true' if the SecureMode was used
       */
      SecureModeNeeded: boolean;

      /**
       * This is the URL where to redirect users to proceed to 3D secure validation
       */
      SecureModeRedirectURL: string;

      /**
       * This is the URL where users are automatically redirected after 3D secure validation (if activated)
       */
      SecureModeReturnURL: string;

      /**
       * The date when the payment is to be processed by
       */
      ExpirationDate: Timestamp;

      /**
       * The Id of the associated PayIn
       */
      PayInId: string;

      /**
       * Contains useful information related to the user billing
       */
      Billing: BillingData;

      /**
       * Contains useful information related to security and fraud
       */
      SecurityInfo: SecurityInfoData;
    }

    type CreateCardPreAuthorization = PickPartialRequired<
      CardPreAuthorizationData,
      "Tag" | "Billing" | "SecureMode",
      "AuthorId" | "DebitedFunds" | "CardId" | "SecureModeReturnURL"
    >;
    type UpdateCardPreAuthorization = PickPartialRequired<
      CardPreAuthorizationData,
      "Tag",
      "PaymentStatus" | "Id"
    >;
  }

  namespace hook {
    type HookValidity = "UNKNOWN" | "VALID" | "INVALID";
    type HookStatus = "DISABLED" | "ENABLED";

    interface HookData extends entityBase.EntityBaseData {
      /**
       * This is the URL where your receive notification for each EventType
       */
      Url: string;

      /**
       * Whether the hook is enabled or not
       */
      Status: HookStatus;

      /**
       * Whether the hook is valid or not
       */
      Validity: HookValidity;

      /**
       * The event type
       */
      EventType: event.EventType;
    }

    interface CreateHook
      extends PickPartialRequired<HookData, "Tag", "EventType" | "Url"> {}

    interface UpdateHook
      extends PickPartialRequired<
        HookData,
        "EventType" | "Url" | "Tag",
        "Id"
      > {}
  }

  namespace report {
    interface Filters {
      /**
       * To return only resources that have CreationDate BEFORE this date
       */
      BeforeDate: Timestamp;

      /**
       * To return only resources that have CreationDate AFTER this date
       */
      AfterDate: Timestamp;

      /**
       * The type of the transaction
       */
      Type: transaction.TransactionType[];

      /**
       * The status of the transaction
       */
      Status: transaction.TransactionStatus[];

      /**
       * The nature of the transaction
       */
      Nature: transaction.TransactionNature[];

      /**
       * The minimum amount of DebitedFunds
       */
      MinDebitedFundsAmount: number;

      /**
       * The currency for the minimum amount of DebitedFunds
       */
      MinDebitedFundsCurrency: CurrencyISO;

      /**
       * The maximum amount of DebitedFunds
       */
      MaxDebitedFundsAmount: number;

      /**
       * The currency for the maximum amount of DebitedFunds
       */
      MaxDebitedFundsCurrency: CurrencyISO;

      /**
       * The minimum amount of Fees
       */
      MinFeesAmount: number;

      /**
       * The currency for the minimum amount of Fees
       */
      MinFeesCurrency: CurrencyISO;

      /**
       * The maximum amount of Fees
       */
      MaxFeesAmount: number;

      /**
       * The currency for the maximum amount of Fees
       */
      MaxFeesCurrency: CurrencyISO;

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The ID of a wallet
       */
      WalletId: string;
    }

    type Column =
      | "Alias"
      | "AuthorId"
      | "BankAccountId"
      | "BankWireRef"
      | "CardId"
      | "CardType"
      | "Country"
      | "CreationDate"
      | "CreditedFundsAmount"
      | "CreditedFundsCurrency"
      | "CreditedUserId"
      | "CreditedWalletId"
      | "Culture"
      | "DebitedFundsAmount"
      | "DebitedFundsCurrency"
      | "DebitedWalletId"
      | "DeclaredDebitedFundsAmount"
      | "DeclaredDebitedFundsCurrency"
      | "DeclaredFeesAmount"
      | "DeclaredFeesCurrency"
      | "ExecutionDate"
      | "ExecutionType"
      | "ExpirationDate"
      | "FeesAmount"
      | "FeesCurrency"
      | "Id"
      | "Nature"
      | "PaymentType"
      | "PreauthorizationId"
      | "ResultCode"
      | "ResultMessage"
      | "Status"
      | "Tag"
      | "Type"
      | "WireReference";

    interface ReportData extends entityBase.EntityBaseData {
      /**
       * The date when the report was executed
       */
      ReportDate: Timestamp;

      /**
       * The URL to download the report
       */
      DownloadURL: string;

      /**
       * A URL that we will ping when the report is ready to download(works in a similar way to the hooks)
       */
      CallbackURL: string;

      /**
       * The format of the report download
       */
      DownloadFormat: "CSV";

      /**
       * The type of report
       */
      ReportType: "TRANSACTIONS";

      /**
       * The column to sort against and direction seperate by a `:`
       */
      Sort: string;

      /**
       * Whether the report should be limited to the first 10 lines(and therefore quicker to execute)
       */
      Preview: boolean;

      /**
       * An object of various filters for the report
       */
      Filters: Filters;

      /**
       * A list of columns / infos to show in the report
       */
      Columns: Column[];

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;
    }

    interface CreateReport
      extends PickPartial<
        ReportData,
        | "Tag"
        | "CallbackURL"
        | "DownloadFormat"
        | "Sort"
        | "Preview"
        | "Filters"
        | "Columns"
      > {}
  }

  namespace mandate {
    /**
     * - "CREATED" - the mandate has been created
     * - "SUBMITTED" - the mandate has been submitted to the banks and you can now do payments with this mandate
     * - "ACTIVE" - the mandate is active and has been accepted by the banks and/or successfully used in a payment
     * - "FAILED" - the mandate has failed for a variety of reasons and is no longer available for payments
     */
    type MandateStatus = ValueOf<IMandateStatus>;
    type MandateScheme = "SEPA" | "BACS";
    type MandateCultureCode = "EN" | "FR" | "NL" | "DE" | "ES" | "IT" | "PL";
    type MandateExecutionType = "WEB";
    type MandateType = "DIRECT_DEBIT";
    interface MandateData extends entityBase.EntityBaseData {
      /**
       * An ID of a Bank Account
       */
      BankAccountId: string;

      /**
       * The object owner's UserId
       */
      UserId: string;

      /**
       * The URL to redirect to after payment (whether successful or not)
       */
      ReturnURL: string;

      /**
       * The URL to redirect to user to for them to proceed with the payment
       */
      RedirectURL: string;

      /**
       * The URL to download the mandate
       */
      DocumentURL: string;

      /**
       * The language to use for the mandate confirmation page - needs to be the ISO code of the language
       */
      Culture: MandateCultureCode;

      /**
       * The type of mandate, but will only be completed once the mandate has been submitted
       */
      Scheme: MandateScheme;

      /**
       * The status of the mandate:
       */
      Status: MandateStatus;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * The execution type for creating the mandate
       */
      ExecutionType: MandateExecutionType;

      /**
       * The type of Mandate
       */
      MandateType: MandateType;

      /**
       * The banking reference for this mandate
       */
      BankReference: string;
    }

    interface CreateMandate
      extends PickPartialRequired<
        MandateData,
        "Tag",
        "BankAccountId" | "Culture" | "ReturnURL"
      > {}
  }

  namespace user {
    /**
     * Should be only one of these values:
     * 1 - for incomes <18K€),
     * 2 - for incomes between 18 and 30K€,
     * 3 - for incomes between 30 and 50K€,
     * 4 - for incomes between 50 and 80K€,
     * 5 - for incomes between 80 and 120K€,
     * 6 - for incomes >120K€
     */
    type IncomeRange = 1 | 2 | 3 | 4 | 5 | 6;
    type PersonType = "NATURAL" | "LEGAL";
    type KYCLevel = "LIGHT" | "REGULAR";
    type LegalPersonType = "BUSINESS" | "ORGANIZATION" | "SOLETRADER";
    type StaticKeys =
      | "KYCLevel"
      | "PersonType"
      | "Id"
      | "CreationDate"
      | "ProofOfIdentity"
      | "ProofOfAddress"
      | "ProofOfRegistration"
      | "LegalRepresentativeProofOfIdentity"
      | "ShareholderDeclaration"
      | "Statute";
    interface UserData extends entityBase.EntityBaseData {
      /**
       * Type of user
       */
      PersonType: PersonType;

      /**
       * The person's email address (not more than 12 consecutive numbers) - must be a valid email
       */
      Email: string;

      /**
       * KYC Level (LIGHT or REGULAR)
       */
      KYCLevel: KYCLevel;
    }

    interface UserLegalData extends UserData {
      PersonType: "LEGAL";

      /**
       * The name of the legal user
       */
      Name: string;

      /**
       * Type for legal user.
       */
      LegalPersonType: LegalPersonType;

      /**
       * The address of the company’s headquarters
       */
      HeadquartersAddress: address.AddressType;

      /**
       * The first name of the company’s Legal representative person
       */
      LegalRepresentativeFirstName: string;

      /**
       * The last name of the company’s Legal representative person
       */
      LegalRepresentativeLastName: string;

      /**
       * The address of the company’s Legal representative person
       */
      LegalRepresentativeAddress: address.AddressType;

      /**
       * The email of the company’s Legal representative person - must be valid
       */
      LegalRepresentativeEmail: string;

      /**
       * The date of birth of the company’s Legal representative person - be careful to set the right timezone (should be UTC) to avoid 00h becoming 23h (and hence interpreted as the day before)
       */
      LegalRepresentativeBirthday: Timestamp;

      /**
       * The nationality of the company’s Legal representative person
       */
      LegalRepresentativeNationality: CountryISO;

      /**
       * The country of residence of the company’s Legal representative person
       */
      LegalRepresentativeCountryOfResidence: CountryISO;
      ProofOfIdentity: string | null;

      /**
       * The business statute of the company
       */
      Statute: string | null;

      /**
       * A MANGOPAY reference to the validated document of the proof of registration of the company
       */
      ProofOfRegistration: string | null;

      /**
       * The shareholder declaration of the company
       */
      ShareholderDeclaration: string | null;

      /**
       * The official registered number of the business
       */
      CompanyNumber: string;
    }

    interface UserNaturalData extends UserData {
      PersonType: "NATURAL";

      /**
       * The name of the user
       */
      FirstName: string;

      /**
       * The last name of the user
       */
      LastName: string;

      /**
       * The user address
       */
      Address: string | address.AddressData;

      /**
       * The date of birth of the user - be careful to set the right timezone (should be UTC) to avoid 00h becoming 23h (and hence interpreted as the day before)
       */
      Birthday: Timestamp;

      /**
       * The user’s nationality. ISO 3166-1 alpha-2 format is expected
       */
      Nationality: CountryISO;

      /**
       * The user’s country of residence. ISO 3166-1 alpha-2 format is expected
       */
      CountryOfResidence: CountryISO;

      /**
       * User’s occupation, ie. Work
       */
      Occupation: string;
      IncomeRange: IncomeRange;

      /**
       * Maximum length is 255 characters
       */
      ProofOfIdentity: string | null;

      /**
       * Maximum length is 255 characters
       */
      ProofOfAddress: string | null;

      /**
       * The capacity of this user - for use with UBO declarations
       */
      Capacity: "NORMAL" | "DECLARATIVE";
    }

    type RequiredUserLegalData =
      | "LegalPersonType"
      | "Name"
      | "LegalRepresentativeBirthday"
      | "LegalRepresentativeCountryOfResidence"
      | "LegalRepresentativeNationality"
      | "LegalRepresentativeFirstName"
      | "LegalRepresentativeLastName"
      | "Email";

    type RequiredUserNaturalData =
      | "FirstName"
      | "LastName"
      | "Birthday"
      | "Nationality"
      | "CountryOfResidence"
      | "Email";

    interface BaseUserLegalData
      extends PickPartial<
        UserLegalData,
        | RequiredUserLegalData
        | "CompanyNumber"
        | "LegalRepresentativeEmail"
        | "LegalRepresentativeAddress"
        | "HeadquartersAddress"
        | "Tag"
      > {
      PersonType: "LEGAL";
    }

    interface UpdateUserLegalData extends BaseUserLegalData {
      Id: string;
    }

    interface CreateUserLegalData
      extends MakeKeysRequired<
        BaseUserLegalData,
        RequiredUserLegalData | "PersonType"
      > {}

    interface BaseUserNaturalData
      extends PickPartial<
        UserNaturalData,
        | RequiredUserNaturalData
        | "Address"
        | "Occupation"
        | "IncomeRange"
        | "Tag"
      > {
      PersonType: "NATURAL";
    }

    interface UpdateUserNaturalData extends BaseUserNaturalData {
      Id: string;
    }

    interface CreateUserNaturalData
      extends MakeKeysRequired<
        BaseUserNaturalData,
        RequiredUserNaturalData | "PersonType"
      > {}
  }

  namespace payIn {
    type PayInPaymentType = ValueOf<IPayInPaymentType>;
    type PayInExecutionType =
      | ValueOf<IPayInExecutionType>
      | "EXTERNAL_INSTRUCTION";

    interface TemplateURLOptions {
      Payline: string;
    }

    interface BasePayInData extends entityBase.EntityBaseData {
      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
       */
      CreditedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * The ID of the wallet that was debited
       */
      DebitedWalletId: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId: string;

      /**
       * The nature of the transaction
       */
      Nature: transaction.TransactionNature;

      /**
       * The status of the transaction
       */
      Status: transaction.TransactionStatus;

      /**
       * When the transaction happened
       */
      ExecutionDate: Timestamp;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * The type of the transaction
       */
      Type: transaction.TransactionType;

      /**
       * The type of payin
       */
      PaymentType: PayInPaymentType;

      /**
       * The type of execution for the payin
       */
      ExecutionType: PayInExecutionType;
    }

    interface CardWebPayInData extends BasePayInData {
      ExecutionType: "WEB";
      PaymentType: "CARD";

      /**
       * The URL to redirect to after payment (whether successful or not)
       */
      ReturnURL: string;

      /**
       * The type of card
       */
      CardType: card.CardType;

      /**
       * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it
       * automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
       */
      SecureMode: SecureMode;

      /**
       * The language to use for the payment page - needs to be the ISO code of the language
       */
      Culture: CountryISO;

      /**
       * The URL to use for the payment page template
       */
      TemplateURL: string;

      /**
       * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric characters or spaces.
       * See here for important info. Note that each bank handles this information differently, some show less or no information.
       */
      StatementDescriptor: string;

      /**
       * The URL to redirect to user to for them to proceed with the payment
       */
      RedirectURL: string;
    }

    interface CreateCardWebPayIn {
      ExecutionType: "WEB";
      PaymentType: "CARD";

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId?: string;

      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * The URL to redirect to after payment (whether successful or not)
       */
      ReturnURL: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;

      /**
       * The type of card
       */
      CardType: card.CardType;

      /**
       * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually.
       * The field lets you activate it automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects
       * there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
       */
      SecureMode?: SecureMode;

      /**
       * The language to use for the payment page - needs to be the ISO code of the language
       */
      Culture: CountryISO;

      /**
       * A URL to an SSL page to allow you to customise the payment page. Must be in the format: array("PAYLINE"=>"https://...") and meet all the
       * specifications listed here. Note that only a template for Payline is currently available
       */
      TemplateURLOptions?: TemplateURLOptions;

      /**
       * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and
       * can only include alphanumeric characters or spaces. See here for important info. Note that each bank handles this information differently, some show less or no information.
       */
      StatementDescriptor?: string;
    }

    interface CardDirectPayInData extends BasePayInData {
      ExecutionType: "DIRECT";
      PaymentType: "CARD";

      /**
       * This is the URL where users are automatically redirected after 3D secure validation (if activated)
       */
      SecureModeReturnURL: string;

      /**
       * The ID of a card
       */
      CardId: string;

      /**
       * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it
       * automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
       */
      SecureMode: SecureMode;

      /**
       * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric
       * characters or spaces. See here for important info. Note that each bank handles this information differently, some show less or no information.
       */
      StatementDescriptor: string;

      /**
       * Contains useful information related to the user billing
       */
      Billing: BillingData;

      /**
       * Contains information related to security and fraud
       */
      SecurityInfo: SecurityInfoData;

      /**
       * The value is 'true' if the SecureMode was used
       */
      SecureModeNeeded: boolean;

      /**
       * This is the URL where to redirect users to proceed to 3D secure validation
       */
      SecureModeRedirectURL: string;
    }

    interface CreateCardDirectPayIn {
      ExecutionType: "DIRECT";
      PaymentType: "CARD";

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId?: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;

      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * This is the URL where users are automatically redirected after 3D secure validation (if activated)
       */
      SecureModeReturnURL: string;

      /**
       * The ID of a card
       */
      CardId: string;

      /**
       * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it automatically
       *  with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
       */
      SecureMode?: SecureMode;

      /**
       * Contains useful information related to the user billing
       */
      Billing?: BillingData;

      /**
       * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric characters or spaces.
       * See here for important info. Note that each bank handles this information differently, some show less or no information.
       */
      StatementDescriptor?: string;
    }

    interface CardPreAuthorizedPayInData extends BasePayInData {
      PreauthorizationId: string;
      ExecutionType: "DIRECT";
      PaymentType: "PREAUTHORIZED";
    }

    interface CreateCardPreAuthorizedPayIn {
      ExecutionType: "DIRECT";
      PaymentType: "PREAUTHORIZED";

      /**
       * Custom data that you can add to this item
       */
      Tag?: string;

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId?: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;

      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * The ID of the Preauthorization object
       */
      PreauthorizationId: string;
    }

    interface BankAccountData {
      /**
       * The BIC of the bank account
       */
      BIC: string;

      /**
       * The IBAN of the bank account
       */
      IBAN: string;

      /**
       * The name of the owner of the bank account
       */
      OwnerName: string;

      /**
       * The address of the owner of the bank account
       */
      OwnerAddress: string;

      /**
       * The type of bank account
       */
      Type: ValueOf<IBankAccountType>;
    }

    interface BankWireDirectPayInData extends BasePayInData {
      ExecutionType: "DIRECT";
      PaymentType: "BANK_WIRE";

      /**
       * The declared debited funds
       */
      DeclaredDebitedFunds: MoneyData;

      /**
       * The declared fees
       */
      DeclaredFees: MoneyData;

      /**
       * Wire reference
       */
      WireReference: string;

      /**
       * Bank account details
       */
      BankAccount: BankAccountData;
    }

    interface CreateBankWireDirectPayIn
      extends PickPartialRequired<
        BankWireDirectPayInData,
        "Tag",
        | "AuthorId"
        | "CreditedUserId"
        | "CreditedWalletId"
        | "DeclaredDebitedFunds"
        | "DeclaredFees"
      > {
      ExecutionType: "DIRECT";
      PaymentType: "BANK_WIRE";
    }

    type PayInData =
      | CardDirectPayInData
      | CardPreAuthorizedPayInData
      | CardWebPayInData
      | BankWireDirectPayInData;
  }

  namespace refund {
    type RefundReasonType =
      | "INITIALIZED_BY_CLIENT"
      | "BANKACCOUNT_INCORRECT"
      | "OWNER_DO_NOT_MATCH_BANKACCOUNT"
      | "BANKACCOUNT_HAS_BEEN_CLOSED"
      | "WITHDRAWAL_IMPOSSIBLE_ON_SAVINGS_ACCOUNTS"
      | "OTHER";
    interface RefundReason {
      RefundReasonType: RefundReasonType;
    }

    interface RefundData extends transaction.TransactionData {
      /**
       * The nature of the transaction
       */
      Nature: "REFUND";

      /**
       * The initial transaction ID
       */
      InitialTransactionId: string;

      /**
       * The initial transaction type
       */
      InitialTransactionType: transaction.TransactionType;

      /**
       * Contains info about the reason for refund
       */
      RefundReason: RefundReason;
    }

    interface CreatePayInRefund {
      AuthorId: string;
      Tag?: string;
      DebitedFunds?: MoneyData;
      Fees?: MoneyData;
    }

    interface CreateTransferRefund {
      AuthorId: string;
      Tag?: string;
    }
  }

  namespace repudiation {
    interface RepudiationData extends transaction.TransactionData {
      /**
       * The nature of the transaction
       */
      Nature: "REPUDIATION";

      /**
       * The initial transaction ID
       */
      InitialTransactionId: string;

      /**
       * The initial transaction type
       */
      InitialTransactionType: transaction.TransactionType;

      /**
       * Contains info about the reason for refund
       */
      RefundReason: refund.RefundReason;
    }
  }

  namespace client {
    type BusinessType = "MARKETPLACE" | "CROWDFUNDING" | "FRANCHISE" | "OTHER";
    type Sector =
      | "RENTALS"
      | "STORES_FASHION_ACCESSORIES_OBJECTS"
      | "BEAUTY_COSMETICS_HEALTH"
      | "FOOD_WINE_RESTAURANTS"
      | "HOSPITALITY_TRAVEL_CORIDING"
      | "ART_MUSIC_ENTERTAINMENT"
      | "FURNITURE_GARDEN"
      | "SERVICES_JOBBING_EDUCATION"
      | "SPORT_RECREATION_ACTIVITIES"
      | "TICKETING";
    type PlatformType = ValueOf<IPlatformType>;

    interface PlatformCategorization {
      Sector: Sector;
      BusinessType: BusinessType;
    }

    interface ClientData extends entityBase.EntityBaseData {
      /**
       * The pretty name for the client
       */
      Name: string;

      /**
       * The registered name of your company
       */
      RegisteredName: string;

      /**
       * An ID for the client (i.e. url friendly, lowercase etc - sort of namespace identifier)
       */
      ClientId: string;

      /**
       * The primary branding colour to use for your merchant
       */
      PrimaryThemeColour: string;

      /**
       * The primary branding colour to use for buttons for your merchant
       */
      PrimaryButtonColour: string;

      /**
       * The URL of the logo of your client
       */
      Logo: string;

      /**
       * A list of email addresses to use when contacting you for technical issues/communications
       */
      TechEmails: string[];

      /**
       * A list of email addresses to use when contacting you for admin/commercial issues/communications
       */
      AdminEmails: string[];

      /**
       * A list of email addresses to use when contacting you for fraud/compliance issues/communications
       */
      FraudEmails: string[];

      /**
       * A list of email addresses to use when contacting you for billing issues/communications
       */
      BillingEmails: string[];

      /**
       * The Categorization of your platform, in terms of Business Type and Sector
       */
      PlatformCategorization: PlatformCategorization;

      /**
       * A description of what your platform does
       */
      PlatformDescription: string;

      /**
       * The URL for your website
       */
      PlatformURL: string;

      /**
       * The address of the company’s headquarters
       */
      HeadquartersAddress: address.AddressType;

      /**
       * The tax (or VAT) number for your company
       */
      TaxNumber: string;

      /**
       * Your unique MANGOPAY reference which you should use when contacting us
       */
      CompanyReference: string;
    }

    interface UpdateClient {
      /**
       * The primary branding colour to use for buttons for your merchant
       */
      PrimaryButtonColour?: string;

      /**
       * The primary branding colour to use for your merchant
       */
      PrimaryThemeColour?: string;

      /**
       * A list of email addresses to use when contacting you for admin/commercial issues/communications
       */
      AdminEmails?: string[];

      /**
       * A list of email addresses to use when contacting you for technical issues/communications
       */
      TechEmails?: string[];

      /**
       * A list of email addresses to use when contacting you for billing issues/communications
       */
      BillingEmails?: string[];

      /**
       * A list of email addresses to use when contacting you for fraud/compliance issues/communications
       */
      FraudEmails?: string[];

      /**
       * The address of the company’s headquarters
       */
      HeadquartersAddress?: address.AddressType;

      /**
       * The tax (or VAT) number for your company
       */
      TaxNumber?: string;

      /**
       * The type of platform
       */
      PlatformType?: PlatformType;

      /**
       * A description of what your platform does
       */
      PlatformDescription?: string;

      /**
       * The URL for your website
       */
      PlatformURL?: string;
    }

    interface UpdateClientLogo {
      /**
       * The base64 encoded file which needs to be uploaded
       */
      File: string;
    }
  }

  namespace event {
    type EventType =
      | "PAYIN_NORMAL_CREATED"
      | "PAYIN_NORMAL_SUCCEEDED"
      | "PAYIN_NORMAL_FAILED"
      | "PAYOUT_NORMAL_CREATED"
      | "PAYOUT_NORMAL_SUCCEEDED"
      | "PAYOUT_NORMAL_FAILED"
      | "TRANSFER_NORMAL_CREATED"
      | "TRANSFER_NORMAL_SUCCEEDED"
      | "TRANSFER_NORMAL_FAILED"
      | "PAYIN_REFUND_CREATED"
      | "PAYIN_REFUND_SUCCEEDED"
      | "PAYIN_REFUND_FAILED"
      | "PAYOUT_REFUND_CREATED"
      | "PAYOUT_REFUND_SUCCEEDED"
      | "PAYOUT_REFUND_FAILED"
      | "TRANSFER_REFUND_CREATED"
      | "TRANSFER_REFUND_SUCCEEDED"
      | "TRANSFER_REFUND_FAILED"
      | "KYC_CREATED"
      | "KYC_VALIDATION_ASKED"
      | "KYC_SUCCEEDED"
      | "KYC_FAILED"
      | "PAYIN_REPUDIATION_CREATED"
      | "PAYIN_REPUDIATION_SUCCEEDED"
      | "PAYIN_REPUDIATION_FAILED"
      | "DISPUTE_DOCUMENT_CREATED"
      | "DISPUTE_DOCUMENT_VALIDATION_ASKED"
      | "DISPUTE_DOCUMENT_SUCCEEDED"
      | "DISPUTE_DOCUMENT_FAILED"
      | "DISPUTE_CREATED"
      | "DISPUTE_SUBMITTED"
      | "DISPUTE_ACTION_REQUIRED"
      | "DISPUTE_FURTHER_ACTION_REQUIRED"
      | "DISPUTE_CLOSED"
      | "DISPUTE_SENT_TO_BANK"
      | "TRANSFER_SETTLEMENT_CREATED"
      | "TRANSFER_SETTLEMENT_SUCCEEDED"
      | "TRANSFER_SETTLEMENT_FAILED"
      | "MANDATE_CREATED"
      | "MANDATE_FAILED"
      | "MANDATE_ACTIVATED"
      | "MANDATE_SUBMITTED"
      | "PREAUTHORIZATION_PAYMENT_WAITING"
      | "PREAUTHORIZATION_PAYMENT_EXPIRED"
      | "PREAUTHORIZATION_PAYMENT_CANCELED"
      | "PREAUTHORIZATION_PAYMENT_VALIDATED"
      | "UBO_DECLARATION_CREATED"
      | "UBO_DECLARATION_VALIDATION_ASKED"
      | "UBO_DECLARATION_REFUSED"
      | "UBO_DECLARATION_VALIDATED";

    interface EventData {
      /**
       * The ID of whatever the event is
       */
      ResourceId: string;

      /**
       * When the event happened
       */
      Date: Timestamp;

      /**
       * The event type
       */
      EventType: EventType;
    }
  }

  namespace dispute {
    type DisputeReasonType =
      | "DUPLICATE"
      | "FRAUD"
      | "PRODUCT_UNACCEPTABLE"
      | "UNKNOWN"
      | "OTHER"
      | "REFUND_CONVERSION_RATE"
      | "LATE_FAILURE_INSUFFICIENT_FUNDS"
      | "LATE_FAILURE_CONTACT_USER"
      | "LATE_FAILURE_BANKACCOUNT_CLOSED"
      | "LATE_FAILURE_BANKACCOUNT_INCOMPATIBLE"
      | "LATE_FAILURE_BANKACCOUNT_INCORRECT"
      | "AUTHORISATION_DISPUTED"
      | "TRANSACTION_NOT_RECOGNIZED"
      | "PRODUCT_NOT_PROVIDED"
      | "CANCELED_REOCCURING_TRANSACTION"
      | "REFUND_NOT_PROCESSED";

    type DisputeStatus =
      | "CREATED"
      | "PENDING_CLIENT_ACTION"
      | "SUBMITTED"
      | "PENDING_BANK_ACTION"
      | "REOPENED_PENDING_CLIENT_ACTION"
      | "CLOSED";

    type DisputeType = "CONTESTABLE" | "NOT_CONTESTABLE" | "RETRIEVAL";

    interface DisputeReason {
      DisputeReasonType: DisputeReasonType;
      DisputeReasonMessage: string;
    }

    interface DisputeData extends entityBase.EntityBaseData {
      /**
       * The initial transaction ID
       */
      InitialTransactionId: string;

      /**
       * The initial transaction type
       */
      InitialTransactionType: transaction.TransactionType;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * Info about the reason for the dispute
       */
      DisputeReason: DisputeReason;

      /**
       * The status of the dispute
       */
      Status: DisputeStatus;

      /**
       * Used to communicate information about the dispute status to you
       */
      StatusMessage: string;

      /**
       * The amount of funds that were disputed
       */
      DisputedFunds: MoneyData;

      /**
       * The amount you wish to contest
       */
      ContestedFunds: MoneyData;

      /**
       * The type of dispute
       */
      DisputeType: DisputeType;

      /**
       * The deadline by which you must contest the dispute (if you wish to contest it)
       */
      ContestDeadlineDate: Timestamp;

      /**
       * The ID of the associated repudiation transaction
       */
      RepudiationId: string;
    }

    interface SubmitDispute
      extends PickPartial<DisputeData, "ContestedFunds"> {}

    interface UpdateDispute extends PickPartial<DisputeData, "Tag"> {}
  }

  interface DisputeReason extends dispute.DisputeReason {}

  namespace settlementTransfer {
    interface SettlementTransferData extends transaction.TransactionData {
      /**
       * The nature of the transaction
       */
      Nature: "SETTLEMENT";

      /**
       * The ID of the associated repudiation transaction
       */
      RepudiationId: string;

      /**
       * The initial transaction ID
       */
      InitialTransactionId: string;

      /**
       * The initial transaction type
       */
      InitialTransactionType: transaction.TransactionType;

      /**
       * Contains info about the reason for refund
       */
      RefundReason: refund.RefundReason;
    }

    interface CreateSettlementTransfer
      extends PickPartialRequired<
        SettlementTransferData,
        "Tag",
        "AuthorId" | "DebitedFunds" | "Fees"
      > {}
  }

  namespace transfer {
    interface TransferData extends entityBase.EntityBaseData {
      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
       */
      CreditedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * The ID of the wallet that was debited
       */
      DebitedWalletId: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId: string;

      /**
       * The nature of the transaction
       */
      Nature: transaction.TransactionNature;

      /**
       * The status of the transaction
       */
      Status: transaction.TransactionStatus;

      /**
       * When the transaction happened
       */
      ExecutionDate: Timestamp;

      /**
       * The result code
       */
      ResultCode: string;

      /**
       * A verbal explanation of the ResultCode
       */
      ResultMessage: string;

      /**
       * The type of the transaction
       */
      Type: "TRANSFER";
    }

    interface CreateTransfer {
      /**
       * Custom data that you can add to this item
       */
      Tag?: string;

      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * The user ID who is credited (defaults to the owner of the wallet)
       */
      CreditedUserId?: string;

      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * The ID of the wallet that was debited
       */
      DebitedWalletId: string;

      /**
       * The ID of the wallet where money will be credited
       */
      CreditedWalletId: string;
    }
  }

  namespace PayOut {
    interface PayOutData extends Omit<transfer.TransferData, "Type"> {
      /**
       * The type of the transaction
       */
      Type: "PAYOUT";

      PaymentType: IPayOutPaymentType["BankWire"];

      /**
       * An ID of a Bank Account
       */
      BankAccountId: string;

      /**
       * A custom reference you wish to appear on the user’s bank statement (your Client Name is already shown). This reference can contain max 12 characters
       */
      BankWireRef: string;
    }

    interface CreatePayOut {
      /**
       * A user's ID
       */
      AuthorId: string;

      /**
       * Information about the funds that are being debited
       */
      DebitedFunds: MoneyData;

      /**
       * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
       */
      Fees: MoneyData;

      /**
       * An ID of a Bank Account
       */
      BankAccountId: string;

      /**
       * The ID of the wallet that was debited
       */
      DebitedWalletId: string;

      /**
       * A custom reference you wish to appear on the user’s bank statement (your Client Name is already shown). This reference can contain max 12 characters
       */
      BankWireRef?: string;
      Tag?: string;
    }
  }

  class Users {
    /**
     * Create a new user
     * @param user
     */
    create: MethodOverload<user.CreateUserLegalData, user.UserLegalData> &
      MethodOverload<user.CreateUserNaturalData, user.UserNaturalData>;

    /**
     * Update a user
     * @param user
     * @param options
     */
    update: MethodOverload<
      models.UserLegal | user.UpdateUserLegalData,
      user.UserLegalData
    > &
      MethodOverload<
        models.UserNatural | user.UpdateUserNaturalData,
        user.UserNaturalData
      >;

    /**
     * Get natural or legal user by ID
     * @param userId
     * @param options
     */
    get: MethodOverload<string, user.UserLegalData | user.UserNaturalData>;

    /**
     * Get natural user by ID
     * @param userId
     * @param options
     */
    getNatural: MethodOverload<string, user.UserNaturalData>;

    /**
     * Get legal user by ID
     * @param userId
     * @param options
     */
    getLegal: MethodOverload<string, user.UserLegalData>;

    /**
     * Get all users
     */
    getAll: NoArgMethodOverload<
      Array<user.UserLegalData | user.UserNaturalData>
    >;

    /**
     * Create bank account for user
     * @param userId
     * @param bankAccount
     * @param options
     */
    createBankAccount: TwoArgsMethodOverload<
      string,
      bankAccount.USDetails,
      bankAccount.USData
    > &
      TwoArgsMethodOverload<
        string,
        bankAccount.OtherDetails,
        bankAccount.OtherData
      > &
      TwoArgsMethodOverload<
        string,
        bankAccount.IBANDetails,
        bankAccount.IBANData
      > &
      TwoArgsMethodOverload<string, bankAccount.GBDetails, bankAccount.GBData> &
      TwoArgsMethodOverload<string, bankAccount.CADetails, bankAccount.CAData>;

    /**
     * Deactivate a bank account
     *
     * Note that once deactivated, a bank account can't be reactivated afterwards
     * @param userId
     * @param bankAccountId
     * @param options
     */
    deactivateBankAccount: TwoArgsMethodOverload<string, string, void>;

    /**
     * Get all bank accounts for user
     * @param userId
     * @param options
     */
    getBankAccounts: MethodOverload<string, bankAccount.Data[]>;

    /**
     * Get all bank accounts for user
     * @param userId
     * @param bankAccountId
     * @param options
     */
    getBankAccount: TwoArgsMethodOverload<string, string, bankAccount.Data>;

    /**
     * Get all wallets accounts for user
     */
    getWallets: MethodOverload<string, wallet.WalletData[]>;

    /**
     * Get all transactions for user
     * @param userId
     * @param options
     */
    getTransactions: MethodOverload<string, transaction.TransactionData[]>;

    /**
     * Get all cards for user
     * @param userId
     * @param options
     */
    getCards: MethodOverload<string, card.CardData[]>;

    /**
     * Create new KYC document
     * @param  userId
     * @param  kycDocument
     * @param  options
     */
    createKycDocument: TwoArgsMethodOverload<
      string,
      kycDocument.CreateKycDocument,
      kycDocument.KycDocumentData
    >;

    /**
     * Get all KYC documents for user
     * @param userId
     * @param options
     */
    getKycDocuments: MethodOverload<string, kycDocument.KycDocumentData[]>;

    /**
     * Get KYC document
     * @param userId
     * @param kycDocumentId
     * @param options
     */
    getKycDocument: TwoArgsMethodOverload<
      string,
      string,
      kycDocument.KycDocumentData
    >;

    /**
     * Update status of KYC Document (Currently only allows for submitting the document)
     * @param userId
     * @param kycDocument
     * @param options
     */
    updateKycDocument: TwoArgsMethodOverload<
      string,
      kycDocument.SubmitKycDocument,
      kycDocument.KycDocumentData
    >;

    /**
     * Create page for KYC document
     * @param userId
     * @param kycDocumentId
     * @param kycPage
     * @param options
     */
    createKycPage: ThreeArgsMethodOverload<
      string,
      string,
      kycDocument.CreateKycPage,
      kycDocument.KycDocumentData
    >;

    /**
     * Create page for KYC document
     * @param userId
     * @param kycDocumentId
     * @param filePath
     * @param options
     */
    createKycPageFromFile: ThreeArgsMethodOverload<
      string,
      string,
      string,
      kycDocument.KycDocumentData
    >;

    /**
     * Get users's EMoney
     * @param userId
     * @param options
     */
    getEMoney: MethodOverload<string, eMoney.EMoneyData>;

    /**
     * Create an UboDeclaration for the user
     * @param userId
     * @param uboDeclaration
     * @param options
     */
    createUboDeclaration: TwoArgsMethodOverload<
      string,
      uboDeclaration.CreateUboDeclaration,
      uboDeclaration.UboDeclarationData
    >;

    /**
     * Get all user preauthorizations
     * @param userId
     * @param options
     */
    getPreAuthorizations: MethodOverload<
      string,
      cardPreAuthorization.CardPreAuthorizationData[]
    >;
  }

  /**
   * You need to create document in order to upload pages on this document.
   *
   * 1. The KYC Document Object is a request to validate a required document. There is one request for one Type of document
   * 2. Upload a file through a Page. A document should get several pages
   * 3. Edit the object Document and set the Status field to "VALIDATION_ASKED" (instead of "CREATED")
   * 4. The demand is received by our team. The object is waiting for a "VALIDATED" status
   *
   * Note that you are not allowed to store KYC documents on your side unless you have permission from the approriate authorities in your country
   */
  class KycDocuments {
    /**
     * Get all KycDocuments
     * @param options
     */
    getAll: NoArgMethodOverload<kycDocument.KycDocumentData[]>;

    /**
     * Get KycDocument
     * @param kycDocumentId
     * @param options
     */
    get: MethodOverload<string, kycDocument.KycDocumentData>;

    /**
     * Creates temporary URLs where each page of a KYC document can be viewed.
     * @param documentId
     */
    createKycDocumentConsult: MethodOverload<
      string,
      any // Unsure of data structure from docs
    >;
  }

  /**
   * An UBO Declaration is an electronic version of the previous KYC document "Shareholder Declaration", in order to declare all the Ultimate Beneficial Owners of a BUSINESS-typed legal User
   * (ie the shareholders with >25% of capital or voting rights).
   *
   * 1. Create each Ultimate Beneficial Owner as a Natural User, who must have a "DECLARATIVE" Capacity.
   * 2. Create a new UBO Declaration for your legal user, and link every Ultimate Beneficial Owners created previously thanks to DeclaredUBOs.
   *  - This list can be empty if your legal user has no Ultimate Beneficial Owner, or no eligible one (ie. no Ultimate Beneficial Owner that owns more than 25% of this company).
   * 3. Edit the UBODeclaration object and set the Status field to "VALIDATION_ASKED" (instead of "CREATED")
   * 4. The demand is received by our team and once processed, it will either get a "VALIDATED" status, or "REFUSED" with more information provided in the RefusedReasonTypes parameter
   *
   * Note that UBO declarations are not yet a requirement for your user to be KYC verified and are optional at this stage
   */
  class UboDeclarations {
    /**
     * Retrieves a UBO declaration object from the API.
     * @param id
     * @param options
     */
    get: MethodOverload<string, uboDeclaration.UboDeclarationData>;

    /**
     * Updates a UBO declaration entity.
     * @param uboDeclaration Updated UBO declaration entity - must have ID
     * @param options
     */
    update: MethodOverload<
      uboDeclaration.UpdateUboDeclaration,
      uboDeclaration.UboDeclarationData
    >;
  }

  class BankAccounts {
    /**
     * Retrieve list of transactions for a bank account
     * @param bankAccountId
     * @param options
     */
    getTransactions: MethodOverload<string, transaction.TransactionData[]>;
  }

  class Wallets {
    /**
     * Create new wallet
     * @param wallet
     * @param options
     */
    create: MethodOverload<
      wallet.CreateWallet | models.Wallet,
      wallet.WalletData
    >;

    /**
     * Update wallet
     * @param wallet
     * @param options
     */
    update: MethodOverload<
      wallet.UpdateWallet | models.Wallet,
      wallet.WalletData
    >;

    /**
     * Get a specific wallet
     * @param walletId
     */
    get: MethodOverload<string, wallet.WalletData>;

    /**
     * Get transactions for the wallet
     * @param walletId
     * @param options
     */
    getTransactions: MethodOverload<string, transaction.TransactionData[]>;
  }

  class Cards {
    /**
     * Get card
     * @param cardId
     * @param ptions
     */
    get: MethodOverload<string, card.CardData>;

    /**
     * Gets a list of cards having the same fingerprint.
     * The fingerprint is a hash uniquely generated per 16-digit card number.
     *
     * @param fingerprint The fingerprint hash
     */
    getByFingerprint: MethodOverload<string, card.CardData[]>;

    /**
     * Update card (currently only supports deactivation)
     * @param card
     * @param options
     */
    update: MethodOverload<card.UpdateCard, card.CardData>;

    /**
     * Get list of Transactions of a Card
     * @param cardId
     * @param options
     */
    getTransactions: MethodOverload<string, transaction.TransactionData[]>;

    /**
     * Gets list of PreAuthorizations of a Card.
     * @param cardId
     * @param options
     */
    getPreAuthorizations: MethodOverload<
      string,
      cardPreAuthorization.CardPreAuthorizationData[]
    >;
  }

  /**
   * You need to register a card in order to process a Direct PayIn. Card registration enables you to tokenize a Card. These are the steps to follow:
   *
   * 1. Create a CardRegistration Object
   * 2. Get a PreRegistrationData
   * 3. The user posts PreRegistrationData, AccessKey and card details through a form (PHP & JS samples) to the CardRegistrationURL (5. in the diagram)
   * 4. Get a RegistrationData back
   * 5. Edit the CardRegistration Object (POST method) with the RegistrationData just received
   * 6. Get the CardId ready to use into the Direct PayIn Object
   *
   * - If you don’t want to save the card you must change the field ACTIVE in the card object to false
   */
  class CardRegistrations {
    /**
     * Create new card registration
     * @param cardRegistration
     * @param options
     */
    create: MethodOverload<
      cardRegistration.CreateCardRegistration,
      cardRegistration.CardRegistrationData
    >;

    /**
     * Create new card registration
     * @param cardRegistrationId
     * @param options
     */
    get: MethodOverload<string, cardRegistration.CardRegistrationData>;

    /**
     * Update card registration
     * @param  cardRegistration
     */
    update: MethodOverload<
      cardRegistration.UpdateCardRegistration,
      cardRegistration.CardRegistrationData
    >;
  }

  /**
   * The PreAuthorization Object ensures the solvency of a registered card for 7 days. The overall process is as follows:
   *
   * 1. Register a card (CardRegistration)
   * 2. Create a PreAuthorization with the CardId. This allows you to charge an amount on a card
   * 3. Charge the card through the PreAuthorized PayIn object (Payins/preauthorized/direct)
   *
   * How does PreAuthorization work?
   * - Once the PreAuthorization object is created the Status is "CREATED" until 3D secure validation.
   * - If the authorization is successful the status is "SUCCEEDED" if it failed the status is "FAILED".
   * - Once Status = "SUCCEEDED" and PaymentStatus = "WAITING" you can charge the card.
   * - The Pay-In amount has to be less than or equal to the amount authorized.
   */
  class CardPreAuthorizations {
    /**
     * Create new pre-authorization
     * @param cardPreAuthorization
     * @param options
     */
    create: MethodOverload<
      cardPreAuthorization.CreateCardPreAuthorization,
      cardPreAuthorization.CardPreAuthorizationData
    >;

    /**
     * Get data for Card pre-authorization
     * @param cardPreAuthorizationId
     * @param options
     */
    get: MethodOverload<string, cardPreAuthorization.CardPreAuthorizationData>;

    /**
     * Update pre-authorization object (currently only supports cancellation)
     * @param  cardPreAuthorization
     */
    update: MethodOverload<
      cardPreAuthorization.UpdateCardPreAuthorization,
      cardPreAuthorization.CardPreAuthorizationData
    >;
  }

  class PayIns {
    /**
     * Create new pay-in
     * @param payIn
     * @param options
     */
    create: MethodOverload<
      payIn.CreateCardDirectPayIn,
      payIn.CardDirectPayInData
    > &
      MethodOverload<
        payIn.CreateCardPreAuthorizedPayIn,
        payIn.CardPreAuthorizedPayInData
      > &
      MethodOverload<payIn.CreateCardWebPayIn, payIn.CardWebPayInData> &
      MethodOverload<
        payIn.CreateBankWireDirectPayIn,
        payIn.BankWireDirectPayInData
      >;

    /**
     * Get pay-in
     * @param payInId
     * @param options
     */
    get: MethodOverload<string, payIn.PayInData>;

    /**
     * Create refund for pay-in object
     * @param payInId
     * @param refundData
     * @param options
     */
    createRefund: TwoArgsMethodOverload<
      string,
      refund.CreatePayInRefund,
      refund.RefundData
    >;

    /**
     * Gets list of Refunds for a PayIn
     * @param payInId
     * @param options
     */
    getRefunds: MethodOverload<string, refund.RefundData[]>;
  }

  class Refunds {
    /**
     * Get events
     * @param refundId
     * @param options
     */
    get: MethodOverload<string, refund.RefundData>;
  }

  class Clients {
    /**
     * Get the client
     */
    get: NoArgMethodOverload<client.ClientData>;

    /**
     * Update the client
     * @param client
     * @param options
     */
    update: MethodOverload<client.UpdateClient, client.ClientData>;

    /**
     * Upload client logo from base64 image string
     * @param base64Logo
     * @param options
     */
    uploadLogo: MethodOverload<string, client.ClientData>;

    /**
     * Upload client logo from file path
     * @param filePath
     * @param options
     */
    uploadLogoFromFile: MethodOverload<string, client.ClientData>;

    /**
     * Get all client wallets
     * @param options
     */
    getClientWallets: NoArgMethodOverload<wallet.ClientWalletData[]>;

    /**
     * Get a client wallet
     * @param fundsType
     * @param currency
     * @param options
     */
    getClientWallet: TwoArgsMethodOverload<
      wallet.ClientFundsType,
      CurrencyISO,
      wallet.ClientWalletData
    >;

    /**
     * Get client wallets by the type of funds
     * @param fundsType
     * @param options
     */
    getClientWalletsByFundsType: MethodOverload<
      wallet.ClientFundsType,
      wallet.ClientWalletData[]
    >;

    /**
     * Get a client wallet's transactions
     * @param fundsType
     * @param currency
     * @param options
     */
    getClientWalletTransactions: TwoArgsMethodOverload<
      wallet.ClientFundsType,
      CurrencyISO,
      transaction.TransactionData[]
    >;
  }

  class PayOuts {
    /**
     * Create new pay-out
     * @param payOut
     * @param options
     */
    create: MethodOverload<PayOut.CreatePayOut, PayOut.PayOutData>;

    /**
     * Get payout
     * @param payOutId
     * @param options
     */
    get: MethodOverload<string, PayOut.PayOutData>;

    /**
     * Gets list of Refunds of a PayOut
     * @param payOutId
     * @param options
     */
    getRefunds: MethodOverload<string, refund.RefundData[]>;
  }

  class Transfers {
    /**
     * Create new transfer
     * @param transfer
     * @param options
     */
    create: MethodOverload<transfer.CreateTransfer, transfer.TransferData>;

    /**
     * Get transfer
     * @param transferId
     * @param options
     */
    get: MethodOverload<string, transfer.TransferData>;

    /**
     * Create refund for transfer object
     * @param transferId
     * @param refund
     * @param options
     */
    createRefund: TwoArgsMethodOverload<
      string,
      refund.CreateTransferRefund,
      refund.RefundData
    >;

    /**
     * Gets list of Refunds of a Transfer
     * @param transferId
     * @param options
     */
    getRefunds: MethodOverload<string, refund.RefundData[]>;
  }

  class BankingAliases {
    /**
     * Create a banking alias
     * @param bankingAlias
     * @param options
     */
    create: MethodOverload<
      bankingAlias.CreateIBANBankingAlias,
      bankingAlias.IBANBankingAliasData
    >;

    /**
     * Get a banking alias
     * @param bankingAliasId
     * @param options
     */
    get: MethodOverload<string, bankingAlias.IBANBankingAliasData>;

    /**
     * Get all banking aliases
     * @param options
     */
    getAll: NoArgMethodOverload<bankingAlias.IBANBankingAliasData[]>;

    /**
     * Update banking alias
     * @param bankingAliasId
     * @param options
     */
    update: MethodOverload<
      Partial<Omit<bankingAlias.CreateIBANBankingAlias, "CreditedUserId">>,
      bankingAlias.IBANBankingAliasData
    >;

    /**
     * Deactivate banking alias
     * @param bankingAliasId
     * @param options
     */
    deactivate: MethodOverload<string, bankingAlias.IBANBankingAliasData>;

    /**
     * Activate banking alias
     * @param bankingAliasId
     * @param options
     */
    activate: MethodOverload<string, bankingAlias.IBANBankingAliasData>;
  }

  class DisputeDocuments {
    /**
     * Get all KycDocuments
     * @param options
     */
    getAll: NoArgMethodOverload<disputeDocument.DisputeDocumentData[]>;

    /**
     * Get KycDocument
     * @param documentId
     * @param options
     */
    get: MethodOverload<string, disputeDocument.DisputeDocumentData>;

    /**
     * Creates temporary URLs where each page of a KYC document can be viewed.
     * @param documentId
     */
    createDisputeDocumentConsult: MethodOverload<
      string,
      any // Unsure of data structure from docs
    >;
  }

  class Repudiations {
    /**
     * Gets list of Refunds of a Repudiation
     * @param repudiationId
     * @param options
     */
    getRefunds: MethodOverload<string, refund.RefundData[]>;
  }

  class Disputes {
    /**
     * Get dispute
     * @param disputeId
     * @param options
     */
    get: MethodOverload<string, dispute.DisputeData>;

    /**
     * Get all disputes
     * @param options
     */
    getAll: NoArgMethodOverload<dispute.DisputeData[]>;

    /**
     * Update dispute's tag
     * @param dispute
     * @param options
     */
    update: MethodOverload<dispute.UpdateDispute, dispute.DisputeData>;

    /**
     * Contest dispute
     * @param disputeId
     * @param contestedFunds
     * @param options
     */
    contestDispute: TwoArgsMethodOverload<
      string,
      MoneyData,
      dispute.DisputeData
    >;

    /**
     * This method is used to resubmit a Dispute if it is reopened requiring more docs
     * @param disputeId
     * @param options
     */
    resubmitDispute: MethodOverload<string, dispute.DisputeData>;

    /**
     * Close dispute
     * @param disputeId
     * @param options
     */
    closeDispute: MethodOverload<string, dispute.DisputeData>;

    /**
     * Gets dispute's transactions
     * @param disputeId
     * @param options
     */
    getTransactions: MethodOverload<string, transaction.TransactionData[]>;

    /**
     * Gets dispute's documents for wallet
     * @param walletId
     * @param options
     */
    getDisputesForWallet: MethodOverload<string, dispute.DisputeData[]>;

    /**
     * Gets user's disputes
     * @param userId
     * @param options
     */
    getDisputesForUser: MethodOverload<string, dispute.DisputeData[]>;

    /**
     * Gets repudiation
     * @param repudiationId
     * @param options
     */
    getRepudiation: MethodOverload<string, repudiation.RepudiationData[]>;

    /**
     * Creates settlement transfer
     * @param settlementTransfer
     * @param repudiationId
     * @param options
     */
    createSettlementTransfer: TwoArgsMethodOverload<
      settlementTransfer.CreateSettlementTransfer,
      string,
      settlementTransfer.SettlementTransferData
    >;

    /**
     * Gets settlement transfer
     * @param settlementTransferId
     * @param options
     */
    getSettlementTransfer: MethodOverload<
      string,
      settlementTransfer.SettlementTransferData
    >;

    /**
     * Gets documents for dispute
     * @param disputeId
     * @param options
     */
    getDocumentsForDispute: MethodOverload<
      string,
      disputeDocument.DisputeDocumentData[]
    >;

    /**
     * Update dispute document
     * @param disputeId
     * @param disputeDocument
     * @param options
     */
    updateDisputeDocument: TwoArgsMethodOverload<
      string,
      Partial<disputeDocument.DisputeDocumentData>,
      disputeDocument.DisputeDocumentData
    >;

    /**
     * Creates document for dispute
     * @param disputeId
     * @param disputeDocument
     * @param options
     */
    createDisputeDocument: TwoArgsMethodOverload<
      string,
      disputeDocument.CreateDisputeDocument,
      disputeDocument.DisputeDocumentData
    >;

    /**
     * Creates document's page for dispute
     * @param disputeId
     * @param disputeDocumentId
     * @param disputeDocumentPage
     * @param options
     */
    createDisputeDocumentPage: ThreeArgsMethodOverload<
      string,
      string,
      disputeDocument.CreateDisputeDocumentPage,
      disputeDocument.DisputeDocumentData
    >;

    /**
     * Creates document's page for dispute from file
     * @param disputeId
     * @param disputeDocumentId
     * @param file
     * @param options
     */
    createDisputeDocumentPageFromFile: ThreeArgsMethodOverload<
      string,
      string,
      string,
      disputeDocument.DisputeDocumentData
    >;

    /**
     * Retrieve a list of Disputes pending settlement
     * @param options
     */
    getPendingSettlement: NoArgMethodOverload<dispute.DisputeData[]>;
  }

  class Events {
    /**
     * Get events
     * @param options
     */
    getAll: NoArgMethodOverload<event.EventData[]>;
  }

  class Responses {
    /**
     * Get response from previous call
     * @param options
     */
    get: NoArgMethodOverload<any[]>;
  }

  class Mandates {
    /**
     * Create a new Mandate
     * @param mandate
     * @param options
     */
    create: MethodOverload<mandate.CreateMandate, mandate.MandateData>;

    /**
     * Get all mandates
     * @param options
     */
    getAll: NoArgMethodOverload<mandate.MandateData[]>;

    /**
     * Get mandate by ID
     * @param mandateId
     * @param options
     */
    get: MethodOverload<string, mandate.MandateData>;

    /**
     * Cancel a mandate
     * @param mandateId
     * @param options
     */
    cancel: MethodOverload<string, mandate.MandateData>;

    /**
     * Gets user's mandates
     * @param userId
     * @param options
     */
    getMandatesForUser: MethodOverload<string, mandate.MandateData[]>;

    /**
     * Gets bank account mandates
     * @param userId
     * @param bankAccountId
     * @param options
     */
    getMandatesForBankAccount: TwoArgsMethodOverload<
      string,
      string,
      mandate.MandateData[]
    >;

    /**
     * Gets Transactions for a Mandate
     * @param mandateId
     * @param options
     */
    getTransactions: MethodOverload<string, transaction.TransactionData[]>;
  }
  class Hooks {
    /**
     * Create new hook
     * @param hook
     * @param options
     */
    create: MethodOverload<hook.CreateHook, hook.HookData>;

    /**
     * Get hook
     * @param hookId
     * @param options
     */
    get: MethodOverload<string, hook.HookData>;

    /**
     * Save hook
     * @param hook
     * @param options
     */
    update: MethodOverload<hook.UpdateHook, hook.HookData>;

    /**
     * Get all hooks
     * @param options
     */
    getAll: NoArgMethodOverload<hook.HookData[]>;
  }

  class Reports {
    /**
     * Create a report
     * @param report
     * @param options
     */
    create: MethodOverload<report.CreateReport, report.ReportData>;

    /**
     * Get a report
     * @param reportId
     * @param options
     */
    get: MethodOverload<string, report.ReportData>;

    /**
     * Get all reports
     * @param options
     */
    getAll: NoArgMethodOverload<report.ReportData[]>;
  }
}
