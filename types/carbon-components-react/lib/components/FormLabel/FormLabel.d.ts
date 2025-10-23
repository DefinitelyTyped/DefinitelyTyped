import React = require("react");
import { ReactLabelAttr } from "../../../typings/shared";

export interface FormLabelProps extends ReactLabelAttr {}

declare const FormLabel: React.FC<FormLabelProps>;

export default FormLabel;
