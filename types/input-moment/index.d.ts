// Type definitions for input-moment 0.4
// Project: https://github.com/wangzuo/input-moment
// Definitions by: Tim Ittermann <https://github.com/timia2109>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import React = require("react");
import moment = require("moment");

export type OnChangeListener = (m: moment.Moment) => void;
export type OnSaveListener = () => void;

export interface InputMomentProps {
    moment: moment.Moment;
    onChange?: OnChangeListener | undefined;
    onSave?: OnSaveListener | undefined;
    minStep?: number | undefined;
    hourStep?: number | undefined;
    prevMonthIcon?: string | undefined;
    nextMonthIcon?: string | undefined;
}

export default class InputMoment extends React.Component<InputMomentProps> {
    constructor(props: Readonly<InputMomentProps>);
}
