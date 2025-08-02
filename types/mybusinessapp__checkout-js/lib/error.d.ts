export interface CheckoutError extends Error {
  code: string;
  message: string;
  classification: string;
  help?: string;
  fields?: string[];
  details?: Array<{ field: string, messages: string[] }>;
}
