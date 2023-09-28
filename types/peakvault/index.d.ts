// Type definitions for non-npm package peakvault-browser 0.0
// Project: https://gitlab.com/peakd/peak-vault
// Definitions by: Andrea Duina (@muwave) <https://github.com/AndreaDuina>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type KeyRole = 'posting' | 'active' | 'memo'

/**
 * Operation name.
 * Ref: https://gitlab.syncad.com/hive/hive/-/blob/master/libraries/protocol/include/hive/protocol/operations.hpp
 */
type OperationName =
  | 'vote'
  | 'comment'
  | 'transfer'
  | 'transfer_to_vesting'
  | 'withdraw_vesting'
  | 'limit_order_create'
  | 'limit_order_cancel'
  | 'feed_publish'
  | 'convert'
  | 'account_create'
  | 'account_update'
  | 'witness_update'
  | 'account_witness_vote'
  | 'account_witness_proxy'
  | 'pow'
  | 'custom'
  | 'report_over_production'
  | 'delete_comment'
  | 'custom_json'
  | 'comment_options'
  | 'set_withdraw_vesting_route'
  | 'limit_order_create2'
  | 'claim_account'
  | 'create_claimed_account'
  | 'request_account_recovery'
  | 'recover_account'
  | 'change_recovery_account'
  | 'escrow_transfer'
  | 'escrow_dispute'
  | 'escrow_release'
  | 'pow2'
  | 'escrow_approve'
  | 'transfer_to_savings'
  | 'transfer_from_savings'
  | 'cancel_transfer_from_savings'
  | 'custom_binary'
  | 'decline_voting_rights'
  | 'reset_account'
  | 'set_reset_account'
  | 'claim_reward_balance'
  | 'delegate_vesting_shares'
  | 'account_create_with_delegation'
  | 'witness_set_properties'
  | 'account_update2'
  | 'create_proposal'
  | 'update_proposal_votes'
  | 'remove_proposal'
  | 'update_proposal'
  | 'collateralized_convert'
  | 'recurrent_transfer'
/**
 * Virtual operation name.
 */
type VirtualOperationName =
  | 'fill_convert_request'
  | 'author_reward'
  | 'curation_reward'
  | 'comment_reward'
  | 'liquidity_reward'
  | 'interest'
  | 'fill_vesting_withdraw'
  | 'fill_order'
  | 'shutdown_witness'
  | 'fill_transfer_from_savings'
  | 'hardfork'
  | 'comment_payout_update'
  | 'return_vesting_delegation'
  | 'comment_benefactor_reward'
  | 'producer_reward'
  | 'clear_null_account_balance'
  | 'proposal_pay'
  | 'sps_fund'
  | 'hardfork_hive'
  | 'hardfork_hive_restore'
  | 'delayed_voting'
  | 'consolidate_treasury_balance'
  | 'effective_comment_vote'
  | 'ineffective_delete_comment'
  | 'sps_convert'
  | 'expired_account_notification'
  | 'changed_recovery_account'
  | 'transfer_to_vesting_completed'
  | 'pow_reward'
  | 'vesting_shares_split'
  | 'account_created'
  | 'fill_collateralized_convert_request'
  | 'system_warning'
  | 'fill_recurrent_transfer'
  | 'failed_recurrent_transfer'
/**
 * Generic operation.
 */
interface Operation {
  0: OperationName | VirtualOperationName
  1: {
    [key: string]: any
  }
}

type PeakVaultOperationName =
  'verify' |
  'sign_buffer'|
  'decode' |
  'connect'

  interface PeakVaultOperation {
    0: PeakVaultOperationName
    1: {
        [key: string]: any
    }
  }

  type DisplayMessage = string | { title: string, message: string}

interface PeakVaultResponse {
  success: boolean
  error: string
  account: string
  publicKey?: string
  result: any
}

// Post operation
interface PostJsonMetadata {
  tags?: string[]
  app?: string
  format?: string
  [key: string]: any
}

interface PostOtherOptions {
  max_accepted_payout: string
  percent_hbd: number
  allow_votes: boolean
  allow_curation_rewards: boolean
  extensions:
    | []
    | Array<[number, { beneficiaries?: { account: string; weight: number }; [key: string]: any }]>
}

declare class PeakVault {
    /**
     * Request user confirmation to sign generic operations using the given key.
     * @param account account with which the user must sign. Use '' to let the user decide which account to use.
     * @param operations operation array that needs to be signed.
     * @param keyRole 'posting', 'active' or 'memo'.
     */
    requestSign: (account: string, operations: Operation[] | PeakVaultOperation[], keyRole: KeyRole, displayMessage?: DisplayMessage) => Promise<PeakVaultResponse>;
    /**
     * Request user confirmation to sign and broadcast generic operations using the given key.
     * @param account account with which the user must sign. Enter '' to let the user decide which account to use.
     * @param operations operation array that needs to be signed.
     * @param keyRole 'posting', 'active' or 'memo'.
     * @param displayMessage message explaining the operation to the user.
     */
    requestBroadcast: (account: string, operations: Operation[], keyRole: KeyRole, displayMessage?: DisplayMessage) => Promise<PeakVaultResponse>;
    /**
     * Ask the user to sign and broadcast a custom JSON operation
     * (i.e. a transaction non-native to the Hive blockchain, like a transaction for a second layer like Splinterlands).
     * @param account account with which the user must sign. Enter '' to let the user decide which account to use.
     * @param id custom JSON id.
     * @param keyRole 'posting', 'active' or 'memo'.
     * @param json custom JSON body.
     * @param displayMessage message explaining the operation to the user.
     */
    requestCustomJson: (account: string, id: string, keyRole: KeyRole, json: string | {
        [key: string]: any;
    }, displayMessage?: DisplayMessage) => Promise<PeakVaultResponse>;
    /**
     * Ask the user to sign and broadcast a transfer operation (i.e. to send money).
     * @param from account that should send the transfer. Enter '' to let the user decide which account to use.
     * @param to account that should receive the transfer.
     * @param amount amount to send.
     * @param currency currency, HIVE or HBD.
     * @param memo message to send along with the transfer.
     */
    requestTransfer: (from: string, to: string, amount: number, currency: 'HIVE' | 'HBD', memo?: string) => Promise<PeakVaultResponse>;
    /**
     * Ask the user to sign and broadcast a vote operation (i.e. to vote a post).
     * @param voter account that should cast the vote. Enter '' to let the user decide which account to use.
     * @param permlink permlink to the post to vote.
     * @param author author of the post.
     * @param weight vote weight [1-10000].
     */
    requestVote: (voter: string, permlink: string, author: string, weight: number) => Promise<PeakVaultResponse>;
    /**
     * Ask the user to post a blog-post or a comment.
     * @param account author of the post or comment. Enter '' to let the user decide which account to use.
     * @param title title of the comment/post.
     * @param body body of the comment/post.
     * @param parentPermlink for comments must be the permlink to the parent post. For posts it represents the main tag or the community.
     * @param parentAccount for comments must be the account of the author of the parent post. For posts leave empty ('').
     * @param json_metadata metadata, like tags or post format. Try to follow the community rules specified at https://developers.hive.io/apidefinitions/#broadcast_ops_comment
     * @param permlink permlink of the post/comment.
     * @param otherOptions specify advanced options. Check the docs for more information. https://developers.hive.io/apidefinitions/#broadcast_ops_comment_options
     */
    requestPost: (account: string, title: string, body: string, parentPermlink: string, parentAccount: string, json_metadata: PostJsonMetadata, permlink: string, otherOptions?: PostOtherOptions) => Promise<PeakVaultResponse>;
    /**
     * Ask the user to sign a message with one of their keys.
     * @param account account that needs to sign the message.
     * @param keyRole 'posting', 'active' or 'memo'.
     * @param message message to be signed.
     * @param displayMessage message explaining the operation to the user.
     */
    requestSignBuffer: (account: string, keyRole: KeyRole, message: string, displayMessage?: DisplayMessage) => Promise<PeakVaultResponse>;
    /**
     * Verify that the user has the required authority (keyRole) over the account.
     * @param account account to connect. Enter '' to let the user decide which account to use.
     * @param keyRole key role that needs to be verified.
     */
    connect: (account: string, keyRole?: KeyRole) => Promise<PeakVaultResponse>;
    /**
     * Ask the user to decode a message (secret) with one of their private keys.
     * @param account account that should decode the message.
     * @param secret message that should be decoded.
     * @param keyRole key role used to encode the message.
     */
    decode: (account: string, secret: string, keyRole?: KeyRole) => Promise<PeakVaultResponse>;
}

export { PeakVault };
