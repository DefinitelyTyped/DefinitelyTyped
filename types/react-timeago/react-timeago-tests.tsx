import * as React from "react";
import ReactTimeago, { Suffix, Unit } from "react-timeago";

const ReactTimeagoRequiredOptions: React.JSX.Element = <ReactTimeago date={new Date()} />;

const customFormatter = (
    value: number,
    unit: Unit,
    suffix: Suffix,
    epochMiliseconds: number,
) => {
    return epochMiliseconds > 300000
        ? `${value}${unit[0]} ${suffix}`
        : "a really long time ago";
};

const ReactTimeagoAllOptions: React.JSX.Element = (
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

const ReactTimeagoDefaultComponentProps: React.JSX.Element = (
    // Note that the default component is <time/>, which has a style prop.
    <ReactTimeago
        date={new Date()}
        style={{ marginTop: 42 }}
    />
);

// inspired by react-native
class Text extends React.Component<{
    style?: Array<{}> | undefined;
    numberOfLines?: number | undefined;
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
    allowFontScaling?: boolean | undefined;
}> {}

const ReactTimeagoCustomComponent: React.JSX.Element = (
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

const CustomJSXElement = ({ myProp }: { myProp: string }) => <div>{myProp}</div>;

const ReactTimeagoCustomJSXElement: JSX.Element = (
    <ReactTimeago
        date={new Date()}
        component={CustomJSXElement}
        // props passed down to Text
        myProp="myProp"
    />
);
