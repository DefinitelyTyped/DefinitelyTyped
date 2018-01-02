import * as React from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader';

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
            <Circle x={195} y={30} radius={30} />
            <Rect x={50} y={80} height={10} radius={5} width={300} />
            <Rect x={75} y={100} height={10} radius={5} width={250} />
        </ContentLoader>
    );
};
