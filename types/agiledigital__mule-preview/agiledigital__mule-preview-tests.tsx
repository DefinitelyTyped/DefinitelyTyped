import * as React from 'react';
import {
    MulePreviewDiffUrl,
    MulePreviewDiffContent,
    MulePreviewUrl,
    MulePreviewContent,
} from '@agiledigital/mule-preview';

class MulePreviewTest extends React.Component {
    render() {
        return (
            <div>
                <MulePreviewDiffUrl contentUrls={['https://a.xml', 'https://b.xml']} contentRoot="." />
                <MulePreviewDiffContent contentStrings={['<mule></mule>', '<mule></mule>']} contentRoot="." />
                <MulePreviewUrl contentUrl="https://a.xml" contentRoot="." />
                <MulePreviewContent contentString="<mule></mule>" contentRoot="." />
            </div>
        );
    }
}
