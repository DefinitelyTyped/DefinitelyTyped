import Button, { ButtonGroup, themeNamespace } from "@atlaskit/button";

import * as React from "react";
import { render } from "react-dom";

declare const container: Element;

render(
    <ButtonGroup appearance="primary">
        <Button
            appearance="danger"
            ariaControls="some-aria-controls"
            ariaExpanded={true}
            ariaHaspopup={true}
            className="some-class-name"
            component={Button}
            form="some-form"
            href="some-href"
            iconAfter={<div />}
            iconBefore={<div />}
            id="some-id"
            innerRef={() => {}}
            isDisabled={true}
            isSelected={true}
            key="some-key"
            onClick={event => event.currentTarget.formMethod}
            ref="some-ref"
            shouldFitContainer={true}
            spacing="compact"
            tabIndex={88}
            target="some-target"
            type="button"
        >
            {themeNamespace}
        </Button>
    </ButtonGroup>,
    container
);
