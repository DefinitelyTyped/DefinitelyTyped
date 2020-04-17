import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

interface InheritedProps extends ReactLabelAttr { }

export interface FormLabelProps extends InheritedProps { }

declare const FormLabel: React.FC<FormLabelProps>;

export default FormLabel;
