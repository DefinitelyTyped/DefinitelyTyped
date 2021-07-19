import { ReactElement } from "react";

declare function flushToHTML(opts?: {
  nonce?: string | undefined;
}): string;
declare function flushToReact<T>(opts?: {
  nonce?: string | undefined;
}): Array<ReactElement<T>>;

export { flushToHTML };
export default flushToReact;
