import * as React from "react";
import Button, { ButtonTypes, ButtonVariants } from "terra-button";

const buttonMouseEventHandler: React.MouseEventHandler<HTMLButtonElement> = () => {};
const buttonFocusEventHanlder: React.FocusEventHandler<HTMLButtonElement> = () => {};
const buttonKeyboardEventHandler: React.KeyboardEventHandler<HTMLButtonElement> = () => {};
const buttonRefObject: { current: HTMLButtonElement | null } = { current: null };

const anchorMouseEventHandler: React.MouseEventHandler<HTMLAnchorElement> = () => {};
const anchorFocusEventHanlder: React.FocusEventHandler<HTMLAnchorElement> = () => {};
const anchorKeyboardEventHandler: React.KeyboardEventHandler<HTMLAnchorElement> = () => {};
const anchorRefObject: { current: HTMLAnchorElement | null } = { current: null };

const AnchorAllProps = (
    <Button
        icon={<div />}
        isBlock={false}
        isCompact={true}
        isDisabled={false}
        isIconOnly={true}
        isReversed={false}
        text="Anchor button"
        type={ButtonTypes.BUTTON}
        variant={ButtonVariants["DE-EMPHASIS"]}
        href="some-href"
        onClick={anchorMouseEventHandler}
        onMouseDown={anchorMouseEventHandler}
        onBlur={anchorFocusEventHanlder}
        onFocus={anchorFocusEventHanlder}
        onKeyDown={anchorKeyboardEventHandler}
        onKeyUp={anchorKeyboardEventHandler}
        refCallback={anchorRefObject}
        title="Anchor title"
    />
);

const ButtonAllProps = (
    <Button
        icon={<div />}
        isBlock={true}
        isCompact={false}
        isDisabled={true}
        isIconOnly={false}
        isReversed={true}
        text="Button button"
        type={Button.Opts.Types.RESET}
        variant={Button.Opts.Variants.NEUTRAL}
        onClick={buttonMouseEventHandler}
        onMouseDown={buttonMouseEventHandler}
        onBlur={buttonFocusEventHanlder}
        onFocus={buttonFocusEventHanlder}
        onKeyDown={buttonKeyboardEventHandler}
        onKeyUp={buttonKeyboardEventHandler}
        refCallback={buttonRefObject}
        title="Button title"
    />
);

const RequiredProps = <Button text="Required text" />;
