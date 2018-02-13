import * as React from 'react';
import ContentLoader from 'react-content-loader';

const CustomComponent = () => {
    return (
        <ContentLoader
            style={{ borderBottom: '1px solid' }}
            speed={1}
            height={100}
            width={100}
            primaryColor="#333"
            secondaryColor="#999"
            preserveAspectRatio="xMinYMin meet"
            className="my-class"
        >
            {/* Pure SVG */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
    );
};
