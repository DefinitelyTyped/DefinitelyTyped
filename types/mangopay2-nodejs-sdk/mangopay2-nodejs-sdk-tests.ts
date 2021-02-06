import Mangopay = require("mangopay2-nodejs-sdk");

// $ExpectError
const invalidConfig: Mangopay.Config = {};

/* General Types */

const validConfig: Mangopay.Config = {
  clientId: "your_client_id",
  clientApiKey: "your_client_api_key",
  baseUrl: "https://api.mangopay.com"
};

const api = new Mangopay(validConfig); // $ExpectType MangoPay
const payIn: Mangopay.models.PayIn = new api.models.PayIn({}); // $ExpectType PayIn
const address: Mangopay.models.Address = new api.models.Address({}); // $ExpectType Address

const addressData: Mangopay.address.AddressData = {
  AddressLine1: "20 T Street",
  AddressLine2: "",
  City: "London",
  Country: "UK",
  PostalCode: "FR43 2WE",
  Region: "London"
};

/* Users */

const legalUser = new api.models.UserLegal({
  Name: "MangoPay",
  Email: "info@mangopay.com",
  LegalPersonType: "BUSINESS",
  LegalRepresentativeFirstName: "Mango",
  LegalRepresentativeLastName: "Pay",
  LegalRepresentativeEmail: "mango@mangopay.com",
  HeadquartersAddress: new api.models.Address({
    AddressLine1: "4101 Reservoir Rd NW",
    AddressLine2: "",
    City: "Washington",
    Region: "District of Columbia",
    PostalCode: "20007",
    Country: "US"
  }),
  LegalRepresentativeBirthday: 1300186358,
  LegalRepresentativeNationality: "FR",
  LegalRepresentativeCountryOfResidence: "FR",
  Tag: "custom tag"
});

api.Users.create(legalUser).then(data => {
  const d = data; // $ExpectType UserLegalData
  const value = data.PersonType; // $ExpectType "LEGAL"

  console.log(`${legalUser.Name} user created at ${legalUser.CreationDate}`);
});

api.Users.create(legalUser, { resolveWithFullResponse: true }).then(data => {
  const d = data; // $ExpectType WithResponse<UserLegalData>
  const value = data.body; // $ExpectType UserLegalData
});

api.Users.create(
  {
    PersonType: "LEGAL",
    Name: "MangoPay",
    Email: "info@mangopay.com",
    LegalPersonType: "BUSINESS",
    LegalRepresentativeFirstName: "Mango",
    LegalRepresentativeLastName: "Pay",
    LegalRepresentativeEmail: "mango@mangopay.com",
    HeadquartersAddress: new api.models.Address({
      AddressLine1: "4101 Reservoir Rd NW",
      AddressLine2: "",
      City: "Washington",
      Region: "District of Columbia",
      PostalCode: "20007",
      Country: "US"
    }),
    LegalRepresentativeBirthday: 1300186358,
    LegalRepresentativeNationality: "FR",
    LegalRepresentativeCountryOfResidence: "FR",
    Tag: "custom tag"
  },
  { headers: {} }
).then(data => {
  const d = data; // $ExpectType UserLegalData
});

const naturalUser = new api.models.UserNatural({
  Email: "info@mangopay.com",
  Birthday: 1300186358,
  FirstName: "Sara",
  LastName: "McNick",
  CountryOfResidence: "GB",
  Nationality: "US"
});

api.Users.create(naturalUser, {}).then(data => {
  const d = data; // $ExpectType UserNaturalData
  const value = data.PersonType; // $ExpectType "NATURAL"
  return;
});

api.Users.create(
  {
    PersonType: "NATURAL",
    Email: "info@mangopay.com",
    Birthday: 1300186358,
    FirstName: "Sara",
    LastName: "McNick",
    CountryOfResidence: "GB",
    Nationality: "US",
    Tag: "tagged-user"
  },
  data => {
    const d = data; // $ExpectType UserNaturalData
    console.log("create", data);
  }
);

api.Users.get("1234").then(data => {
  const d = data; // $ExpectType UserLegalData | UserNaturalData
  if (data.PersonType === "LEGAL") {
    const legalData = data; // $ExpectType UserLegalData
  } else {
    const naturalData = data; // $ExpectType UserNaturalData
  }
});

api.Users.getAll().then(users => {
  users.forEach(user => {
    const d = user; // $ExpectType UserLegalData | UserNaturalData
    if (user.PersonType === "LEGAL") {
      const legalData = user; // $ExpectType UserLegalData
    } else {
      const naturalData = user; // $ExpectType UserNaturalData
    }
  });
});

api.Users.update({
  Id: "1234",
  PersonType: "NATURAL",
  Email: "info@mangopay.com",
  Birthday: 1300186358,
  FirstName: "Sara",
  LastName: "McNick",
  CountryOfResidence: "GB",
  Nationality: "US"
}).then(data => {
  const d = data; // $ExpectType UserNaturalData
});

api.Users.createBankAccount("user-id", {
  Type: "GB",
  AccountNumber: "12345678",
  SortCode: "123456",
  OwnerAddress: "",
  OwnerName: ""
}).then(data => {
  const d = data; // $ExpectType GBData
});

api.Users.getBankAccount("user-id", "bankAccount-id").then(data => {
  const d = data; // $ExpectType Data
});

api.Users.getBankAccounts("user-id").then(data => {
  const d = data; // $ExpectType Data[]
});

api.Users.deactivateBankAccount("user-id", "bankAccount-id").then(data => {
  const d = data; // $ExpectType void
});

api.Users.getTransactions("user-id").then(data => {
  const d = data; // $ExpectType TransactionData[]
});

api.Users.getWallets("user-id").then(data => {
  const d = data; // $ExpectType WalletData[]
});

api.Users.getCards("user-id").then(data => {
  const d = data; // $ExpectType CardData[]
});

api.Users.createKycDocument("user-id", { Type: "ADDRESS_PROOF" }).then(data => {
  const d = data; // $ExpectType KycDocumentData
});

api.Users.getKycDocuments("user-id").then(data => {
  const d = data; // $ExpectType KycDocumentData[]
});

api.Users.getKycDocument("user-id", "kycDocument-id").then(data => {
  const d = data; // $ExpectType KycDocumentData
});

api.Users.updateKycDocument("user-id", { Status: "VALIDATION_ASKED", Id: "kycDocument-id" }).then(
  data => {
    const d = data; // $ExpectType KycDocumentData
  }
);

api.Users.createKycPage("user-id", "kycDocument-id", {
  File: "...base64data..."
}).then(data => {
  const d = data; // $ExpectType KycDocumentData
});

api.Users.createKycPageFromFile(
  "user-id",
  "kyc-document-id",
  "path/to/file"
).then(data => {
  const d = data; // $ExpectType KycDocumentData
});

// MangoPay.

api.Users.getEMoney("user-id").then(data => {
  const d = data; // $ExpectType EMoneyData
});

api.Users.createUboDeclaration("user-id", { DeclaredUBOs: ["user1"] }).then(
  data => {
    const d = data; // $ExpectType UboDeclarationData
  }
);

api.Users.getPreAuthorizations("user-id").then(data => {
  const d = data; // $ExpectType CardPreAuthorizationData[]
});

/* KycDocuments */

api.KycDocuments.getAll().then(data => {
  const d = data; // $ExpectType KycDocumentData[]
});

api.KycDocuments.get("kyc-id").then(data => {
  const d = data; // $ExpectType KycDocumentData
});

api.KycDocuments.createKycDocumentConsult("kyc-id").then(data => {
  const d = data; // TODO unsure of expected type
});

/* UboDeclarations */

api.UboDeclarations.get("ubo-id").then(data => {
  const d = data; // $ExpectType UboDeclarationData
});

api.UboDeclarations.update({
  Id: "ubo-id",
  DeclaredUBOs: ["user1", "user2"]
}).then(data => {
  const d = data; // $ExpectType UboDeclarationData
});

/* BankAccounts */

api.BankAccounts.getTransactions("account-id").then(data => {
  const d = data; // $ExpectType TransactionData[]
});

/* Wallets */

api.Wallets.create({
  Currency: "GBP",
  Description: "A description",
  Owners: ["user-id"]
}).then(data => {
  const d = data; // $ExpectType WalletData
});

const wallet = new api.models.Wallet({
  Currency: "GBP",
  Description: "A description",
  Owners: ["user-id"]
});

api.Wallets.create(wallet).then(data => {
  const d = data; // $ExpectType WalletData
});

api.Wallets.update({
  Description: "A description"
}).then(data => {
  const d = data; // $ExpectType WalletData
});

api.Wallets.get("wallet-id").then(data => {
  const d = data; // $ExpectType WalletData
});

api.Wallets.getTransactions("wallet-id").then(data => {
  const d = data; // $ExpectType TransactionData[]
});

/* Cards */

api.Cards.get("card-id").then(data => {
  const d = data; // $ExpectType CardData
});

api.Cards.getByFingerprint("fingerprinthash").then(data => {
  const d = data; // $ExpectType CardData[]
});

api.Cards.update({ Active: false, Id: "card-id" }).then(data => {
  const d = data; // $ExpectType CardData
});

api.Cards.getTransactions("card-id").then(data => {
  const d = data; // $ExpectType TransactionData[]
});

/* CardRegistrations */

api.CardRegistrations.create({
  CardType: "BCMC",
  Currency: "GBP",
  UserId: "user-id"
}).then(data => {
  const d = data; // $ExpectType CardRegistrationData
});

api.CardRegistrations.get("reg-id").then(data => {
  const d = data; // $ExpectType CardRegistrationData
});

api.CardRegistrations.update({ RegistrationData: "hmmm" }).then(data => {
  const d = data; // $ExpectType CardRegistrationData
});

/* CardPreAuthorizations */

api.CardPreAuthorizations.create({
  AuthorId: "user",
  CardId: "card-id",
  DebitedFunds: { Currency: "AUD", Amount: 4000 },
  SecureModeReturnURL: "https://secureurl.com"
}).then(data => {
  const d = data; // $ExpectType CardPreAuthorizationData
});

api.CardPreAuthorizations.get("auth-id").then(data => {
  const d = data; // $ExpectType CardPreAuthorizationData
});

api.CardPreAuthorizations.update({
  Id: "auth-id",
  PaymentStatus: "CANCELED"
}).then(data => {
  const d = data; // $ExpectType CardPreAuthorizationData
});

/* Refunds */

api.Refunds.get("refund-id").then(data => {
  const d = data; // $ExpectType RefundData
});

/* PayIns */

api.PayIns.create({
  PaymentType: "CARD",
  ExecutionType: "DIRECT",
  AuthorId: "user-id",
  CardId: "card-id",
  CreditedWalletId: "wallet-id",
  Fees: { Amount: 100, Currency: "GBP" },
  DebitedFunds: { Amount: 2000, Currency: "GBP" },
  SecureModeReturnURL: "https://secure-return.co"
}).then(data => {
  const d = data; // $ExpectType CardDirectPayInData
});

api.PayIns.create({
  PaymentType: "CARD",
  ExecutionType: "WEB",
  AuthorId: "user-id",
  CreditedWalletId: "wallet-id",
  Fees: { Amount: 100, Currency: "GBP" },
  DebitedFunds: { Amount: 2000, Currency: "GBP" },
  ReturnURL: "https://secure-return.co",
  Culture: "AD",
  CardType: "MAESTRO"
}).then(data => {
  const d = data; // $ExpectType CardWebPayInData
});

api.PayIns.create({
  PaymentType: "BANK_WIRE",
  ExecutionType: "DIRECT",
  AuthorId: "user-id",
  CreditedWalletId: "wallet-id",
  CreditedUserId: "credited-user-id",
  DeclaredDebitedFunds: { Amount: 10000, Currency: "GBP" },
  DeclaredFees: { Amount: 500, Currency: "GBP" }
}).then(data => {
  const d = data; // $ExpectType BankWireDirectPayInData
});

api.PayIns.get("payin-id").then(data => {
  const d = data; // $ExpectType PayInData
});

api.PayIns.createRefund("payin-id", { AuthorId: "user-id" }).then(data => {
  const d = data; // $ExpectType RefundData
});

api.PayIns.getRefunds("payin-id").then(data => {
  const d = data; // $ExpectType RefundData[]
});

/* Clients */
api.Clients.get().then(data => {
  const d = data; // $ExpectType ClientData
});

api.Clients.update({ PlatformType: "CROWDFUNDING_DONATION" }).then(data => {
  const d = data; // $ExpectType ClientData
});

api.Clients.uploadLogo("...logobase64...").then(data => {
  const d = data; // $ExpectType ClientData
});

api.Clients.uploadLogoFromFile("path/to/file").then(data => {
  const d = data; // $ExpectType ClientData
});

api.Clients.getClientWallets().then(data => {
  const d = data; // $ExpectType ClientWalletData[]
});

api.Clients.getClientWallet("CREDIT", "GBP").then(data => {
  const d = data; // $ExpectType ClientWalletData
});

api.Clients.getClientWalletsByFundsType("FEES").then(data => {
  const d = data; // $ExpectType ClientWalletData[]
});

api.Clients.getClientWalletTransactions("CREDIT", "GBP").then(data => {
  const d = data; // $ExpectType TransactionData[]
});

/* PayOuts */

api.PayOuts.create({
  Fees: { Amount: 0, Currency: "GBP" },
  AuthorId: "user-id",
  DebitedFunds: { Amount: 2000, Currency: "GBP" },
  BankAccountId: "bank-id",
  DebitedWalletId: "wallet-id"
}).then(data => {
  const d = data; // $ExpectType PayOutData
});

api.PayOuts.get("payout-id").then(data => {
  const d = data; // $ExpectType PayOutData
});

api.PayOuts.getRefunds("payout-id").then(data => {
  const d = data; // $ExpectType RefundData[]
});

/* Transfers */

api.Transfers.create({
  Fees: { Amount: 0, Currency: "GBP" },
  AuthorId: "user-id",
  DebitedFunds: { Amount: 2000, Currency: "GBP" },
  DebitedWalletId: "debit-wallet-id",
  CreditedWalletId: "credit-wallet-id"
}).then(data => {
  const d = data; // $ExpectType TransferData
});

api.Transfers.get("transfer-id").then(data => {
  const d = data; // $ExpectType TransferData
});

api.Transfers.createRefund("transfer-id", { AuthorId: "user-id" }).then(
  data => {
    const d = data; // $ExpectType RefundData
  }
);

api.Transfers.getRefunds("transfer-id").then(data => {
  const d = data; // $ExpectType RefundData[]
});

/* BankingAliases */

api.BankingAliases.create({
  Country: "GB",
  CreditedUserId: "user-id",
  OwnerName: "owner-id"
}).then(data => {
  const d = data; // $ExpectType IBANBankingAliasData
});
api.BankingAliases.get("alias-id").then(data => {
  const d = data; // $ExpectType IBANBankingAliasData
});
api.BankingAliases.getAll().then(data => {
  const d = data; // $ExpectType IBANBankingAliasData[]
});
api.BankingAliases.update({ OwnerName: "some-name" }).then(data => {
  const d = data; // $ExpectType IBANBankingAliasData
});
api.BankingAliases.deactivate("alias-id").then(data => {
  const d = data; // $ExpectType IBANBankingAliasData
});
api.BankingAliases.activate("alias-id").then(data => {
  const d = data; // $ExpectType IBANBankingAliasData
});

/* DisputeDocuments */

api.DisputeDocuments.getAll().then(data => {
  const d = data; // $ExpectType DisputeDocumentData[]
});

api.DisputeDocuments.get("dispute-doc-id").then(data => {
  const d = data; // $ExpectType DisputeDocumentData
});

api.DisputeDocuments.createDisputeDocumentConsult("dispute-doc-id").then(
  data => {
    const d = data; // TODO unsure of expected type
  }
);

/* Repudiations */

api.Repudiations.getRefunds("repudiation-id").then(data => {
  const d = data; // $Expect RefundData[]
});

/* Disputes */

api.Disputes.get("dispute-id").then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.getAll().then(data => {
  const d = data; // $Expect DisputeData[]
});

api.Disputes.update({ Tag: "any tags" }).then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.contestDispute("dispute-id", {
  Amount: 1000,
  Currency: "GBP"
}).then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.resubmitDispute("dispute-id").then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.closeDispute("dispute-id").then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.getTransactions("dispute-id").then(data => {
  const d = data; // $Expect TransactionData[]
});

api.Disputes.getDisputesForWallet("wallet-id").then(data => {
  const d = data; // $Expect DisputeData[]
});

api.Disputes.getDisputesForUser("user-id").then(data => {
  const d = data; // $Expect DisputeData[]
});

api.Disputes.getRepudiation("repudiation-id").then(data => {
  const d = data; // $Expect RepudationData
});

api.Disputes.createSettlementTransfer(
  {
    AuthorId: "user-id",
    DebitedFunds: { Amount: 1000, Currency: "GBP" },
    Fees: { Amount: 200, Currency: "GBP" }
  },
  "repudiation-id"
).then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.getSettlementTransfer("settlement-id").then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.getDocumentsForDispute("dispute-id").then(data => {
  const d = data; // $Expect DisputeDocumentData[]
});

api.Disputes.updateDisputeDocument("dispute-id", { Tag: "update" }).then(
  data => {
    const d = data; // $Expect DisputeDocumentData
  }
);

api.Disputes.createDisputeDocument("dispute-id", {
  Type: "DELIVERY_PROOF"
}).then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.createDisputeDocumentPage("dispute-id", "dispute-doc-id", {
  File: "...base64string..."
}).then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.createDisputeDocumentPageFromFile(
  "dispute-id",
  "dispute-doc-id",
  "path/to/file"
).then(data => {
  const d = data; // $Expect DisputeData
});

api.Disputes.getPendingSettlement().then(data => {
  const d = data; // $Expect DisputeData
});

/* Events */

api.Events.getAll().then(data => {
  const d = data; // $Expect EventData[]
});

/* Responses */

api.Responses.get().then(data => {
  const d = data; // $ExpectType any[]
});

/* Mandates */

api.Mandates.create({
  BankAccountId: "bank-account-id",
  ReturnURL: "https://return-url.com",
  Culture: "EN"
}).then(data => {
  const d = data; // $ExpectType MandateData
});

api.Mandates.getAll().then(data => {
  const d = data; // $ExpectType MandateData[]
});

api.Mandates.get("mandate-id").then(data => {
  const d = data; // $ExpectType MandateData
});

api.Mandates.cancel("mandate-id").then(data => {
  const d = data; // $ExpectType MandateData
});

api.Mandates.getMandatesForUser("user-id").then(data => {
  const d = data; // $ExpectType MandateData[]
});

api.Mandates.getMandatesForBankAccount("user-id", "bank-account-id").then(
  data => {
    const d = data; // $ExpectType MandateData[]
  }
);
api.Mandates.getTransactions("mandate-id").then(data => {
  const d = data; // $ExpectType TransactionData[]
});

/* Hooks */

api.Hooks.create({
  Url: "https://hook-url.com",
  EventType: "DISPUTE_ACTION_REQUIRED"
}).then(data => {
  const d = data; // $ExpectType HookData
});

api.Hooks.get("hook-id").then(data => {
  const d = data; // $ExpectType HookData
});

api.Hooks.update({ Id: "hook-id", Url: "https://new-hook.com/hooks" }).then(
  data => {
    const d = data; // $ExpectType HookData
  }
);

api.Hooks.getAll().then(data => {
  const d = data; // $ExpectType HookData[]
});

/* Reports */

api.Reports.create({ Columns: ["Alias", "AuthorId"] }).then(data => {
  const d = data; // $ExpectType ReportData
});

api.Reports.get("report-id").then(data => {
  const d = data; // $ExpectType ReportData
});

api.Reports.getAll().then(data => {
  const d = data; // $ExpectType ReportData[]
});
