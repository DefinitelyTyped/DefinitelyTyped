// Type definitions for input-moment 0.4
// Project: https://github.com/wangzuo/input-moment
// Definitions by: Tim Ittermann <https://github.com/timia2109>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import React = require('react');
import moment = require('moment');

export type OnChangeListener = (m: moment.Moment) => void;
export type OnSaveListener = () => void;

export interface InputMomentProps {
    moment: moment.Moment;
    onChange?: OnChangeListener;
    onSave?: OnSaveListener;
    minStep?: number;
    hourStep?: number;
    prevMonthIcon?: string;
    nextMonthIcon?: string;
}

export default class InputMoment extends React.Component<InputMomentProps> {
    constructor(props: Readonly<InputMomentProps>);
}
