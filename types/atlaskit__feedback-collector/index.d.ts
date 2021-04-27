// Type definitions for @atlaskit/feedback-collector 4.0
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/src/master/packages/core/feedback-collector/
// Definitions by: Lee Swanson <https://github.com/leedrick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component,
    ReactNode,
    ReactElement,
    ComponentClass,
    MouseEventHandler } from "react";

export type SelectValue =
  | 'bug'
  | 'comment'
  | 'suggestion'
  | 'question'
  | 'empty';

export interface FormFields {
  type: SelectValue;
  description: string;
  canBeContacted: boolean;
  enrollInResearchGroup: boolean;
}

export type FieldValueType = string | object | object[];

export interface FieldType {
    id: string;
    value: FieldValueType;
}

export interface FeedbackType {
    fields: FieldType[];
}

export interface FeedbackCollectorProps {
    /** The customer email */
    email: string;
    /** The customer name */
    name: string;
    /** The request id to access the widget service */
    requestTypeId: string;
    /** The embeddable key to access the widget service */
    embeddableKey: string;

    /**  Additional fields to send to the widget service */
    additionalFields?: FieldType[];
    /**  Override the default id for the "can be contacted" custom field in your widget service */
    canBeContactedFieldId?: string;
    /**  Override the default value for the "can be contacted" custom field in your widget service */
    canBeContactedDefaultValue?: FieldValueType;
    /**  Override the default id for the "customer name" custom field in your widget service */
    customerNameFieldId?: string;
    /**  Override the default value for the "customer name" custom field in your widget service */
    customerNameDefaultValue?: FieldValueType;
    /**  Override the default id for the "description" custom field in your widget service */
    descriptionFieldId?: string;
    /**  Override the default value for the "description" custom field in your widget service */
    descriptionDefaultValue?: FieldValueType;
    /**  Override the default id for the "enroll in research" custom field in your widget service */
    enrollInResearchFieldId?: string;
    /**  Override the default value for the "enroll in research" custom field in your widget service */
    enrollInResearchDefaultValue?: FieldValueType;
    /**  Override the default id for the "email" custom field in your widget service */
    emailFieldId?: string;
    /**  Override the default value for the "email" custom field in your widget service */
    emailDefaultValue?: FieldValueType;
    /**  Override the default id for the "summary" custom field in your widget service */
    summaryFieldId?: string;
    /**  Override the default value for the "summary" custom field in your widget service */
    summaryDefaultValue?: FieldValueType;
    /**  Number of characters that the "summary" field accepts, the rest will be truncated */
    summaryTruncateLength?: number;
    /** After this delay the onSubmit callback will be triggered optimistically */
    timeoutOnSubmit?: number;
    /**  Override the default id for the "type" custom field in your widget service */
    typeFieldId?: string;
    /**  Override the default value for the "Bug" type of response in your widget service */
    typeBugDefaultValue?: FieldValueType;
    /**  Override the default value for the "Comment" type of response in your widget service */
    typeCommentDefaultValue?: FieldValueType;
    /**  Override the default value for the "Suggestion" type of response in your widget service */
    typeSuggestionDefaultValue?: FieldValueType;
    /**  Override the default value for the "Question" type of response in your widget service */
    typeQuestionDefaultValue?: FieldValueType;
    /**  Override the default value for the "Empty" type of response in your widget service */
    typeEmptyDefaultValue?: FieldValueType;
    /** Function that will be called to initiate the exit transition. */
    onClose?: () => void;
    /** Function that will be called optimistically after a delay when the feedback is submitted. */
    onSubmit?: () => void;
}

declare class FeedbackCollector extends Component<FeedbackCollectorProps> {}

export interface FeedbackFlagProps {
  isDismissAllowed?: boolean;
  onDismissed?: (...args: any[]) => any;
}

export class FeedbackFlag extends Component<FeedbackFlagProps> {}

export interface FeedbackFormProps {
  /** Function that will be called to initiate the exit transition. */
  onClose: () => void;
  /** Function that will be called immediately after the submit action  */
  onSubmit: (formValues: FormFields) => void;
}

export class FeedbackForm extends Component<FeedbackFormProps, FormFields> {}

export default FeedbackCollector;
