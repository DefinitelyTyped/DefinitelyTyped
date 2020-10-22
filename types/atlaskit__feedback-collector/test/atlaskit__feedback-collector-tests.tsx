import * as React from "react";
import { render } from "react-dom";
import FeedbackCollector from '@atlaskit/feedback-collector';

declare const container: Element;

render(
    <FeedbackCollector
        email="fred@bedrockonline.com"
        name="Fred Flintstone"
        requestTypeId="123"
        embeddableKey="sDdfsdfDS876sdfs"
        additionalFields={[{ id: "234", value: "test" }]}
        canBeContactedFieldId="custom_field"
        canBeContactedDefaultValue="test"
        customerNameFieldId="test"
        customerNameDefaultValue="test"
        descriptionFieldId="test"
        descriptionDefaultValue="test"
        enrollInResearchFieldId="test"
        enrollInResearchDefaultValue="test"
        emailFieldId="some_field"
        emailDefaultValue="email"
        summaryFieldId=""
        summaryDefaultValue="summary"
        summaryTruncateLength={500}
        timeoutOnSubmit={5000}
        typeFieldId="custom_field_2342"
        typeBugDefaultValue="undocumented design feature"
        typeCommentDefaultValue="comment"
        typeSuggestionDefaultValue="demand a feature"
        typeQuestionDefaultValue="wtf?"
        typeEmptyDefaultValue="Dunno"
        onClose={() => {}}
        onSubmit={() => {}}>
    </FeedbackCollector>,
    container
);
