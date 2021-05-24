import { Price } from './price';

export enum TransactionType {
  Charge = 'charge',
  Refund = 'refund',
}

export enum TransactionStatus {
  Pending = 'pending',
  Complete = 'complete',
  Cancelled = 'cancelled',
  Failed = 'failed',
}

export enum TransactionStatusReason {
  AwaitingChargeDate = 'awaiting_charge_date',
  AwaitingFulfillment = 'awaiting_fulfillment',
  AwaitingCapture = 'awaiting_capture',
  OrderCancelled = 'order_cancelled',
  Cancelled = 'cancelled',
  Complete = 'complete',
  GatewayFailure = 'gateway_failure',
  CardDeclined = 'card_declined',
  CardExpired = 'card_expired',
}

export interface Transaction {
  id: string;
  type: TransactionType;
  status: TransactionStatus;
  status_reason: TransactionStatusReason;
  charge_date: number;
  gateway: string;
  gateway_name: string;
  gateway_transaction_id: string;
  gateway_reference: string;
  notes: string;
  amount: Price;
  payment_source_type: string;
  payment_source: any;
  created: number;
  updated: number;
  dunning: {
    is_dunning: boolean;
    failed_attempts: number;
    last_failed_attempt: number | null;
    next_attempt: number | null;
  };
}
