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
