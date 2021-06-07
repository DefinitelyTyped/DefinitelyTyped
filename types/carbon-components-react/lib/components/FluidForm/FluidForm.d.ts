import * as React from "react";
import { FormProps } from "../Form";

export interface FluidFormProps extends FormProps { }

declare const FluidForm: React.FC<FluidFormProps>;

export default FluidForm;
