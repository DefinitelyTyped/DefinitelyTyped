import * as React from "react";
import { render } from "react-dom";
import { FeedbackForm, FormFields } from '@atlaskit/feedback-collector';

declare const container: Element;

render(
    <FeedbackForm
        onClose={() => {}}
        onSubmit={(_: FormFields) => {}}>
    </FeedbackForm>,
    container
);
