import * as React from 'react';
import ContentLoader, { BulletList, Code, Facebook, Instagram, List } from 'react-content-loader';

const CustomComponent = () => {
    return (
        <>
            <ContentLoader
                style={{ borderBottom: '1px solid' }}
                animate={false}
                speed={1}
                height={100}
                width={100}
                primaryColor="#333"
                secondaryColor="#999"
                primaryOpacity={0.06}
                secondaryOpacity={0.12}
                preserveAspectRatio="xMinYMin meet"
                uniquekey="reactcontentloader"
                className="my-class"
                ariaLabel="loading..."
            >
                {/* Pure SVG */}
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>

            <Facebook />
            <Instagram />
            <Code />
            <List />
            <BulletList />
        </>
    );
};
