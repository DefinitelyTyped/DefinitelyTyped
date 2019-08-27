import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactLabelAttr, "htmlFor"> { }

export interface FormLabelProps extends InheritedProps { }

declare const FormLabel: React.FC<FormLabelProps>;

export default FormLabel;
