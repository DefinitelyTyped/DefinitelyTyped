import * as React from "react";
import Spacer from "terra-spacer";
import { SpacerProps } from "terra-spacer/lib/Spacer";

const AllProps = (
    <Spacer
        margin="none small large large+1"
        marginTop="none"
        marginRight="small-1"
        marginBottom="small-2"
        marginLeft="small"
        padding="large+4 large+3 large+2 large+1"
        paddingTop="large"
        paddingRight="large+1"
        paddingBottom="large+2"
        paddingLeft="large+3"
        isInlineBlock={false}
        className="class"
    />
);

const NoProps = <Spacer />;

const spacerSize: SpacerProps["marginTop"] = Spacer.Opts.Sizes.LARGE;
