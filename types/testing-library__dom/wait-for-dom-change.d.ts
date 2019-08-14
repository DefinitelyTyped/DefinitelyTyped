export function waitForDomChange<T>(options?: {
  container?: HTMLElement;
  timeout?: number;
  mutationObserverOptions?: MutationObserverInit;
}): Promise<T>;
