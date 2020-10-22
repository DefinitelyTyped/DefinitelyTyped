// Type definitions for trezor-connect 7.0
// Project: https://github.com/trezor/connect
// Definitions by: Federico Bond <https://github.com/federicobond>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface Error {
  success: false;
  payload: { error: string };
}

interface Success<T> {
  id: number;
  success: true;
  payload: T;
}

export type ResponseMessage<T> = Error | Success<T>;

export interface Message {
  message: string;
}

export interface Bundle<T> {
  bundle: T[];
}

interface CommonParams {
  device?: {
    path: string
    state?: string
    instance?: number
  };
  useEmptyPassphrase?: boolean;
  allowSeedlessDevice?: boolean;
  keepSession?: boolean;
}

export interface GetPublicKeyParams extends CommonParams {
  path: string;
  coin?: string;
  crossChain?: boolean;
}

export interface PublicKey {
  path: number[]; // hardended path
  serializedPath: string; // serialized path
  xpub: string; // xpub in legacy format
  xpubSegwit?: string; // optional for segwit accounts: xpub in segwit format
  chainCode: string; // BIP32 serialization format
  childNum: number; // BIP32 serialization format
  publicKey: string; // BIP32 serialization format
  fingerprint: number; // BIP32 serialization format
  depth: number; // BIP32 serialization format
}

export interface Utxo {
  index: number; // index of output IN THE TRANSACTION
  transactionHash: string; // hash of the transaction
  value: number; // how much money sent
  addressPath: [number, number]; // path
  height: number | null; // null == unconfirmed
  coinbase: boolean;
  tsize: number; // total size - in case of segwit, total, with segwit data
  vsize: number; // virtual size - segwit concept - same as size in non-segwit
  own: boolean;
}

export interface GetAccountInfoParams extends CommonParams {
  path?: number[];  // NOTE:
  xpub?: string;    // if both these fields are missing, the user will select an account
  coin: string;
}

export interface AccountInfo {
  id: number;

  path: number[];
  serializedPath: string;
  xpub: string; // serialized HD public key. Despite the name, this may be `ypub` for segWit.

  balance: number;
  confirmed: number;

  transactions: number;
  utxo: Utxo[];
  usedAddresses: Array<{ address: string, received: number }>;
  unusedAddresses: string[];

  // These fields are returned, presumably, to save further calls when the use case requires
  // a usable address:
  address: string;
  addressIndex: number;
  addressPath: number[];
  addressSerializedPath: string;
}

export interface Features {
  vendor: string;
  major_version: number;
  minor_version: number;
  patch_version: number;
  bootloader_mode: boolean | null;
  device_id: string;
  pin_protection: boolean;
  passphrase_protection: boolean;
  language: string | null;
  label: string | null;
  initialized: true;
  revision: string;
  bootloader_hash: string;
  imported: boolean;
  pin_cached: boolean;
  passphrase_cached: boolean;
  firmware_present: boolean | null;
  needs_backup: false;
  flags: number;
  model: string;
  fw_major: number;
  fw_minor: number;
  fw_patch: number;
  fw_vendor: string;
  fw_vendor_keys: string;
  unfinished_backup: boolean;
  no_backup: boolean;
}

interface LoginChallenge {
  challengeHidden: string;
  challengeVisual: string;
}

export type RequestLoginParams = CommonParams &
  { callback: () => LoginChallenge } | LoginChallenge;

export interface LoginDetails {
    address: string;
    publicKey: string;
    signature: string;
}

export interface CipherKeyValueParams extends CommonParams {
  path: string | number[];
  key?: string;
  value?: string;
  askOnEncrypt?: boolean;
  askOnDecrypt?: boolean;
  iv?: string;
}

export interface CipherKeyValue extends CommonParams {
  value: string;
}

export interface ResetDeviceParams extends CommonParams {
  strength?: number;
  label?: string;
  u2fCounter?: number;
  pinProtection?: boolean;
  passphraseProtection?: boolean;
  skipBackup?: boolean;
  noBackup?: boolean;
}

export interface GetAddressParams extends CommonParams {
  path: string | number[];
  address?: string;
  showOnTrezor?: boolean;
  coin?: string;
  crossChain?: boolean;
}

export interface Address {
  address: string;
  path: number[];
  serializedPath: string;
}

export interface ComposeTransactionParams extends CommonParams {
  outputs: Output[];
  coin: string;
  push?: boolean;
}

export interface Transaction {
  signatures: string[];  // signer signatures
  serializedTx: string;  // serialized transaction
  txid?: string;         // blockchain transaction id
}

export interface VerifyMessageParams extends CommonParams {
  address: string;
  message: string;
  signature: string;
  coin: string;
}

export interface SignMessageParams extends CommonParams {
  path: string | number[];
  message: string;
  coin?: string;
}

export interface SignedMessage {
  address: string;    // signer address
  signature: string;  // signature in base64 format
}

export type DeviceStatus = 'available' | 'occupied' | 'used';

export type DeviceMode = 'normal' | 'bootloader' | 'initialize' | 'seedless';

export type DeviceFirmwareStatus = 'valid' | 'outdated' | 'required';

export interface FirmwareRelease {
  required: boolean;
  version: number[];
  min_bridge_version: number[];
  min_firmware_version: number[];
  bootloader_version: number[];
  min_bootloader_version: number[];
  url: string;
  channel: string;
  fingerprint: string;
  changelog: string;
}

export type Device = {
    type: 'acquired',
    path: string,
    label: string,
    firmware: DeviceFirmwareStatus,
    firmwareRelease: FirmwareRelease,
    status: DeviceStatus,
    mode: DeviceMode,
    state: string | null,
    features: Features,
} | {
    type: 'unacquired',
    path: string,
    label: string,
} | {
    type: 'unreadable',
    path: string,
    label: string,
};

export interface SignedTransaction {
  signatures: string[];
  serializedTx: string;
  txId?: string;
}

export interface ManifestParams {
  email: string;
  appUrl: string;
}

export interface Settings {
  debug: boolean | { [k: string]: boolean };
  configSrc?: string; // constant
  origin?: string;
  hostLabel?: string;
  hostIcon?: string;
  priority?: number;
  trustedHost?: boolean;
  connectSrc?: string;
  iframeSrc?: string;
  popup?: boolean;
  popupSrc?: string;
  webusbSrc?: string;
  transportReconnect?: boolean;
  webusb?: boolean;
  pendingTransportEvent?: boolean;
  supportedBrowser?: boolean;
  extension?: string;
  lazyLoad?: string;
  manifest?: ManifestParams;
}

export interface Input {
  address_n: number[];
  prev_index: number;
  prev_hash: string;
  amount: string;
  script_type: string;
}

export interface RegularOutput {
  address: string;
  amount: string;
  script_type?: string;
}

export interface InternalOutput {
  address_n: number[];
  amount: string;
  script_type?: string;
}

export interface SendMaxOutput {
  type: 'send-max';
  address: string;
}

export interface OpReturnOutput {
  type: 'opreturn';
  dataHex: string;
}

export type Output = RegularOutput | InternalOutput | SendMaxOutput | OpReturnOutput;

export interface BinOutput {
  amount: number;
  script_pubkey: string;
}

export interface RefTransaction {
  hash: string;
  version?: number;
  inputs: Input[];
  bin_outputs: BinOutput[];
  lock_time?: number;
  extra_data?: string;
  timestamp?: number;
  version_group_id?: number;
}

export interface SignTransactionParams extends CommonParams {
  inputs: Input[];
  outputs: Output[];
  refTxs?: RefTransaction[];
  coin: string;
  locktime?: number;
  version?: number;
  expiry?: number;
  branchId?: number;
  push?: boolean;
}

export interface PushTransactionParams extends CommonParams {
  tx: string;
  coin: string;
}

export interface TransactionID {
  txid: string;
}

export namespace TrezorConnect {
  /**
   * Initializes TrezorConnect.
   */
  function init(settings: Settings): void;

  function manifest(params: ManifestParams): void;

  /**
   * Retrieves BIP32 extended public derived by given BIP32 path.
   * User is presented with a description of the requested key and asked to
   * confirm the export.
   */
  function getPublicKey(params: GetPublicKeyParams): Promise<ResponseMessage<PublicKey>>;
  function getPublicKey(params: Bundle<GetPublicKeyParams>): Promise<ResponseMessage<PublicKey[]>>;

  /**
   * Challenge-response authentication via Trezor.
   * To protect against replay attacks you should use a server-side generated
   * and randomized challengeHidden for every attempt. You can also provide a
   * visual challenge that will be shown on the device.
   */
  function requestLogin(params: RequestLoginParams): Promise<LoginDetails>;

  /**
   * Retrieves the set of features associated with the device.
   */
  function getFeatures(params?: CommonParams): Promise<ResponseMessage<Features>>;

  /**
   * Retrieves the settings that TrezorConnect was initialized with.
   */
  function getSettings(): Promise<ResponseMessage<Settings>>;

  /**
   * Asks device to encrypt value using the private key derived by given BIP32
   * path and the given key. IV is always computed automatically.
   */
  function cipherKeyValue(params: CipherKeyValueParams): Promise<ResponseMessage<CipherKeyValue>>;
  function cipherKeyValue(params: Bundle<CipherKeyValueParams>): Promise<ResponseMessage<CipherKeyValue[]>>;

  /**
   * Resets device to factory defaults and removes all private data.
   */
  function wipeDevice(params?: CommonParams): Promise<ResponseMessage<Message>>;

  /**
   * Performs device setup and generates a new seed.
   */
  function resetDevice(params: ResetDeviceParams): Promise<ResponseMessage<Message>>;

  /**
   * Display requested address derived by given BIP32 path on device and
   * returns it to caller. User is asked to confirm the export on Trezor.
   */
  function getAddress(params: GetAddressParams): Promise<ResponseMessage<Address>>;
  function getAddress(params: Bundle<GetAddressParams>): Promise<ResponseMessage<Address[]>>;

  /**
   * Gets an info of specified account.
   */
  function getAccountInfo(params: GetAccountInfoParams): Promise<ResponseMessage<AccountInfo>>;

  /**
   * Requests a payment from the users wallet to a set of given outputs.
   * Internally a BIP-0044 account discovery is performed and user is presented
   * with a list of accounts. After account selection user is presented with
   * list of fee selection. After selecting a fee transaction is signed and
   * returned in hexadecimal format. Change output is added automatically, if
   * needed.
   */
  function composeTransaction(params: ComposeTransactionParams): Promise<ResponseMessage<Transaction>>;

  /**
   * Asks device to sign given inputs and outputs of pre-composed transaction.
   * User is asked to confirm all transaction details on Trezor.
   */
  function signTransaction(params: SignTransactionParams): Promise<ResponseMessage<SignedTransaction>>;

  /**
   * Broadcasts the transaction to the selected network.
   */
  function pushTransaction(params: PushTransactionParams): Promise<ResponseMessage<TransactionID>>;

  /**
   * Asks device to sign a message using the private key derived by given BIP32
   * path.
   */
  function signMessage(params: SignMessageParams): Promise<ResponseMessage<SignedMessage>>;

  /**
   * Asks device to verify a message using the signer address and signature.
   */
  function verifyMessage(params: VerifyMessageParams): Promise<ResponseMessage<Message>>;

  function dispose(): void;

  function cancel(): void;
}

export default TrezorConnect;
