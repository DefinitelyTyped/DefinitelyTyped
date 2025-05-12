import * as React from "react";

// NuiProviderProps
export interface NuiProviderProps {
  resource: string;
  children: React.ReactNode;
}

// NuiContextProps
export interface NuiContextProps {
  resource: string;
}

// NuiRequestOptions
export interface NuiRequestOptions {
  resource?: string;
  timeout?: number;
  mockData?: unknown;
}

// NuiProvider
export const NuiProvider: React.FC<NuiProviderProps>;

// useNuiCallback
export function useNuiCallback(
  app: string,
  method: string,
  onSuccess: (data: unknown) => void,
  onError: (err: unknown) => void
): void;

// useNuiEvent
export function useNuiEvent(
  app: string,
  method: string,
  handler: (data: unknown) => void
): void;

// useNuiRequest
export function useNuiRequest(options?: NuiRequestOptions): {
  send: (method: string, data?: unknown) => Promise<unknown>;
};

// safeFetch
export function safeFetch(
  method: string,
  data?: unknown,
  mockData?: unknown
): Promise<unknown>;

// customFetchNui
export function customFetchNui(
  method: string,
  data?: unknown
): Promise<unknown>;

// debugData
export function debugData(method: string, data: unknown): void;

// debugEvent
export function debugEvent(event: { app: string; method: string; data: unknown }): void;
