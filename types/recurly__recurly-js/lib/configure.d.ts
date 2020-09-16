export type RecurlyOptions = {
  cors?: boolean;
  publicKey: string;
  currency?: string;
  required?: string[];
  timeout?: number;
  fraud?: {
    kount?: {
      dataCollector?: boolean;
    };
    braintree?: {
      deviceData?: string;
    };
    litle?: {
      sessionId?: string;
    };
  };
};

export type Configure = (recurlyConfig: RecurlyOptions | string) => void;
