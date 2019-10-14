import { ReactElement } from "react";
import { GraphQL } from "../index";

export function ssr(
  graphql: GraphQL,
  node: ReactElement,
  render?: (element: ReactElement) => string
): Promise<string>;
