import {AWSError} from './error';

/**
 * Represents AWS token object, which contains {token}, and optional
 * {expireTime}.
 * Creating a `Token` object allows you to pass around your
 * token to configuration and service objects.
 *
 * Note that this class typically does not need to be constructed manually,
 * as the {AWS.Config} and {AWS.Service} classes both accept simple
 * options hashes with the two keys. The token from this object will be used
 * automatically in operations which require them.
 *
 * ## Expiring and Refreshing Token
 *
 * Occasionally token can expire in the middle of a long-running
 * application. In this case, the SDK will automatically attempt to
 * refresh the token from the storage location if the Token
 * class implements the {refresh} method.
 *
 * If you are implementing a token storage location, you
 * will want to create a subclass of the `Token` class and
 * override the {refresh} method. This method allows token to be
 * retrieved from the backing store, be it a file system, database, or
 * some network storage. The method should reset the token attributes
 * on the object.
 */
export class Token {
  /**
   * Creates a Token object with a given set of token information as an options hash.
   *
   * @param {object} options - An option hash containing a set of token information.
   */
  constructor(options: TokenOptions);

  /**
   * Gets the existing token, refreshing it if it's are not yet loaded or have expired.
   * Users should call this method before using refresh(), as this will not attempt to reload
   * tokeb when they are already loaded into the object.
   *
   * @param {get} callback - When called with no error, the token information has been loaded into the object.
   */
  get(callback: (err?: AWSError) => void): void;

  /**
   * Gets the existing token, refreshing ot if necessary, and returns
   * a promise that will be fulfilled immediately (if no refresh is necessary)
   * or when the refresh has completed.
   */
  getPromise(): Promise<void>;

  /**
   * Returns whether the token object should call refresh()
   */
  needsRefresh(): boolean;

  /**
   * Refreshes the token.
   * Users should call get() before attempting to forcibly refresh token.
   *
   * @param {function} callback - When called with no error, the token information has been loaded into the object.
   */
  refresh(callback: (err?: AWSError) => void): void;

  /**
   * Invokes a token refresh and returns a promise that will be fulfilled
   * when the refresh has completed or rejected when the refresh has failed.
   * Users should call get() before attempting to forcibly refresh token.
   */
  refreshPromise(): Promise<void>;

  /**
   * The literal token string.
   */
  token: string;
  
  /**
   * Whether the token has expired and require a refresh.
   * Used in conjunction with expireTime.
   */
  expired: boolean;

  /**
   * Time when token should be considered expired.
   * Used in conjunction with expired.
   */
  expireTime: Date;
  
  static expiryWindow: number;
}

export interface TokenOptions {
  /**
   * The literal token string.
   */
  token: string
  /**
   * The time at which the token expires.
   */
   expireTime?: Date
}
