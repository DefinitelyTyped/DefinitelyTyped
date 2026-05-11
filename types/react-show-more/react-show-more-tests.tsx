import * as React from "react";
import ShowMore, { ReactShowMoreProps } from "react-show-more";

const longText = (
    <p>
        scenester Banksy single-origin coffee squid flannel XOXO chillwave Helvetica plaid slow-carb drinking vinegar
        Wes Anderson gastropub
    </p>
);

<ShowMore>{longText}</ShowMore>;

<ShowMore lines={false}>{longText}</ShowMore>;
<ShowMore lines={-1}>{longText}</ShowMore>;
<ShowMore lines={0}>{longText}</ShowMore>;
<ShowMore lines={1}>{longText}</ShowMore>;

<ShowMore more="Show more">{longText}</ShowMore>;
<ShowMore more={<span>Show more</span>}>{longText}</ShowMore>;

<ShowMore more="Show less">{longText}</ShowMore>;
<ShowMore more={<span>Show less</span>}>{longText}</ShowMore>;

<ShowMore anchorClass={"my-anchor-class"}>{longText}</ShowMore>;
<ShowMore anchorClass={"class-1 class-2"}>{longText}</ShowMore>;
