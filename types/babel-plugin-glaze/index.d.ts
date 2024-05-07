import { ThemedStyle } from "glaze";
import {} from "react";

declare module "react" {
    interface Attributes {
        sx?: ThemedStyle | undefined;
    }
}
