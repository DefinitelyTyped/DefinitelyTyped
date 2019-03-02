import ReactTimeago, { Unit, Suffix } from "react-timeago";
import * as React from "react";

const ReactTimeagoRequiredOptions: JSX.Element = (
    <ReactTimeago
        date={new Date()}
    />
);

const customFormatter = (value: number, unit: Unit, suffix: Suffix, epochMiliseconds: number) => {
    return (
        <div />
    );
};

const ReactTimeagoAllOptions: JSX.Element = (
    <ReactTimeago
        date={new Date()}
        live
        minPeriod={0}
        maxPeriod={100}
        component={() => <div />}
        title="Timeago"
        formatter={customFormatter}

    />
);
