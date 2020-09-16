import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface FormItemProps extends InheritedProps { }

declare const FormItem: React.FC<FormItemProps>;

export default FormItem;
