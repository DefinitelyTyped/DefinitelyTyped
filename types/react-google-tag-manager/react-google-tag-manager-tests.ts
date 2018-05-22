import * as React from 'react';
import gtmParts from 'react-google-tag-manager';

interface Props {
    gtmId: string;
    dataLayerName?: string;
    additionalEvents?: {};
    previewVariables?: boolean;
    scriptId?: string;
}

class GoogleTagManager extends React.Component<Props> {
    render() {
        const gtm = gtmParts({
            id: this.props.gtmId,
            dataLayerName: this.props.dataLayerName || 'dataLayer',
            additionalEvents: this.props.additionalEvents || {},
            previewVariables: this.props.previewVariables || false,
        });
        return (gtm.scriptAsReact());
    }
}

export default GoogleTagManager;
