import * as React from "react";
import AriaModal from "react-aria-modal";

const onExit = () => {};

<AriaModal onExit={onExit} titleId="describedby" underlayClickExits>
    <p id="describedby">Hello world</p>
</AriaModal>;

const DisplacedModal = AriaModal.renderTo("#some-id");

<DisplacedModal onExit={onExit} titleId="describedby" underlayClickExits>
    <p id="describedby">Hello world</p>
</DisplacedModal>;

<AriaModal
    onExit={() => {}}
    alert={true}
    focusDialog={true}
    titleText="A top modal"
    underlayClickExits={false}
    verticallyCenter={true}
    underlayColor={false}
>
    <div>Hello</div>
</AriaModal>;

const AriaModalOnExitBasic = (
    <AriaModal
        titleText="test"
        onExit={e => {
            e.stopPropagation();
        }}
    />
);

const AriaModalOnExitWithMouse = (
    <AriaModal
        titleText="test"
        onExit={(e: React.MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
            const clientX = e.clientX;
        }}
    />
);

const AriaModalOnExitWithKeyboard = (
    <AriaModal
        titleText="test"
        onExit={(e: React.KeyboardEvent) => {
            e.stopPropagation();
            e.preventDefault();
            const keyCode = e.code;
        }}
    />
);
