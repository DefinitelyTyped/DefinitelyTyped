import * as React from "react";
import { render } from "react-dom";
import { FeedbackFlag } from '@atlaskit/feedback-collector';

declare const container: Element;

render(
    <FeedbackFlag
        isDismissAllowed={true}
        onDismissed={(_: any[]) => {}}>
    </FeedbackFlag>,
    container
);
