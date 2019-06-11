import ReactTimeago, { Unit, Suffix } from "react-timeago";
import * as React from "react";
import { Text } from "react-native";

const ReactTimeagoRequiredOptions: JSX.Element = (
    <ReactTimeago date={new Date()} />
);

const customFormatter = (
    value: number,
    unit: Unit,
    suffix: Suffix,
    epochMiliseconds: number
) => {
    return epochMiliseconds > 300000
        ? `${value}${unit[0]} ${suffix}`
        : "a really long time ago";
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

const ReactTimeagoCustomComponent: JSX.Element = (
    <ReactTimeago<typeof Text>
        date={new Date()}
        component={Text}
        // props passed down to Text
        style={[{ textAlign: "center" }, { fontSize: 24 }]}
        numberOfLines={2}
        ellipsizeMode="middle"
        allowFontScaling
    />
);
