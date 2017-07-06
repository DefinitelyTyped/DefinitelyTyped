import { Component } from "react";

interface FormSectionProps {
    /**
     * The name all child fields should be prefixed with.
     */
    name: string;
}

/**
 * The FormSection component makes it easy to split forms into smaller components that are resuable across
 * multiple forms. It does this by prefixing the name of Field, Fields and FieldArray children, at any depth,
 * with the value specified in the name prop.
 */
export class FormSection extends Component<FormSectionProps> {}
