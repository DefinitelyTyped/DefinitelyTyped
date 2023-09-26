import {
    MulePreviewContent,
    MulePreviewDiffContent,
    MulePreviewDiffUrl,
    MulePreviewUrl,
} from "@agiledigital/mule-preview";
import * as React from "react";

class MulePreviewTest extends React.Component {
    render() {
        return (
            <div>
                <MulePreviewDiffUrl contentUrls={["https://a.xml", "https://b.xml"]} contentRoot="." />
                <MulePreviewDiffContent contentStrings={["<mule></mule>", "<mule></mule>"]} contentRoot="." />
                <MulePreviewUrl contentUrl="https://a.xml" contentRoot="." />
                <MulePreviewContent contentString="<mule></mule>" contentRoot="." />
            </div>
        );
    }
}
